---
type: post
title: Scaling Elixir Applications with Context Boundaries
publishDate: 2025-08-07
description: Improve readability, testing, compile times and organization in an Elixir monolith
comments: true
---

Building large-scale Elixir applications presents unique challenges. As codebases grow beyond the initial team of 3-5 developers, the lack of enforced architectural boundaries becomes a significant bottleneck. Teams spend more time reading and understanding code than writing new features, and the dynamic nature of Elixir makes code navigation increasingly difficult without proper structure.

Lately I've been exploring how context boundaries, enforced by compile-time checks, can transform unwieldy monoliths into well-organized, maintainable applications that can scale to teams of 20+ engineers.

## The Scaling Problem

### Why Large Elixir Codebases Become Unwieldy

When Elixir applications start small, the flexibility of the language is a tremendous asset. You can quickly prototype features, leverage pattern matching, and build robust systems with relatively few lines of code. However, as applications grow, several problems emerge:

1. **Lack of Enforced Structure**: Phoenix contexts provide organizational guidance, but there's no compile-time enforcement preventing modules from calling deep into other contexts' internals. An organization module might directly access user database schemas, creating tight coupling that makes refactoring dangerous.
1. **Inconsistent Organization Patterns**: Different teams or developers organize code differently. Some put business logic in controllers, others in contexts, and still others in custom service modules. These inconsistencies cause immense mental overhead for teams I've been on.
1. **Circular Dependencies**: Without boundaries, it's easy to create circular dependencies that slow compilation times in Elixir and make the code harder to reason about. Module A calls Module B, which calls Module C, which calls Module A. This creates a tangled web and slow CI.
1. **Testing Complexity**: When modules are tightly coupled, testing becomes complex. You end up testing through the web API layer because it's the only stable interface, leading to slow, brittle tests.

### Reading vs. Writing Code

In mature applications or when onboarding in a new team, I find myself spending more time reading code than writing it. This ratio becomes problematic when functions are scattered across the codebase with no clear ownership and business logic is mixed with infrastructure concerns.

One approach to dealing with readability is to address organizational patterns for code, such as well-defined and enforceable "boundaries".

## The Boundary Library

[Boundary](https://github.com/sasa1977/boundary) by Saša Jurić provides compile-time warnings of architectural boundaries in Elixir applications. It transforms organizational guidelines into compiler checks, catching boundary violations before they reach production.

```sh
mix clean && \  # Cleaning prevents false positives
  mix compile --warnings-as-errors
```

```sh
# count boundary errors
mix compile | grep -E 'warning:.*(boundary|forbidden reference)'  | wc -l
```

### How Boundary Works

The library operates through registering module attributes that define named groups of modules called boundaries. These boundaries can export inner modules from within a boundary and make them publicly accessible. Boundaries have dependencies from other boundary exports.

Here's a simple example:

```elixir
defmodule MyApp.Catalog do
  @moduledoc """
  This boundary can use MyApp.Users
  and exports Products and Categories modules
  """
  use Boundary,
    deps: [
      MyApp.Users
    ],
    exports: [
      Products,     # MyApp.Catalog.Products
      Categories,   # MyApp.Catalog.Categories
    ]
end

defmodule MyApp.Catalog.Products do
  @moduledoc "This module is exported and can be used by other boundaries"
end

defmodule MyApp.Catalog.Internal.PriceCalculator do
  @moduledoc "This module is internal and cannot be used outside the boundary"
end
```

If module functions in another boundary try to call `MyApp.Catalog.Internal.PriceCalculator`, the compiler will raise an error.

### Setting Up Boundary

Add [Boundary](https://hexdocs.pm/boundary/Boundary.html) to your `mix.exs`:

```elixir
defp deps do
  [
    {:boundary, "~> 0.10", runtime: false},
  ]
end
```

The `runtime: false` option is important. Boundary is a compile-time tool and doesn't need to be included in your production release.

## Context Boundaries

On my Elixir team, we've extended the ideas from the Boundary library into an opinionated design pattern we call "Context Boundaries".

### What Are Context Boundaries?

Context boundaries are architectural constraints that group related functionality together and define explicit interfaces for interaction between different parts of your application. Think of them as microservices within a monolith. Each boundary owns a specific business domain and exposes a well-defined API.

In an e-commerce application, you might have top-level boundaries like:

```sh
lib/
└── my_app/
    ├─ billing/     # Payment processing, invoicing, subscriptions
    ├─ catalog/     # Product management, categories, pricing
    ├─ orders/      # Order processing, fulfillment, tracking  
    ├─ users/       # Authentication, authorization, user profiles
    ├─ billing.ex
    ├─ catalog.ex
    ├─ orders.ex
    └─ users.ex
```

Each boundary would have its own schemas, business logic, and database concerns, but could only interact with other boundaries through their public interfaces defined in the outer context file.

In larger organizations, boundaries naturally form around teams and interfaces would likely be used by other teams, so design them thoughtfully.

### Benefits of Context Boundaries

1. **Reduced Cognitive Load**: Developers working on the catalog system don't need to understand the intricacies of billing logic. They just need to know the public API. They should also spend less time figuring out where code lives.
1. **Parallel Development**: Teams can shape themselves around business domains and can work independently on different boundaries without merge conflicts.
1. **Clearer Testing Strategy**: Each boundary can be thoroughly tested in isolation, with integration tests covering the interactions between boundaries.
1. **Future Microservice Extraction**: If you ever need to split off pieces of your monolith, boundaries provide natural seams for extraction.
1. **Documentation**: The boundary definitions serve as living documentation of your system's architecture. Boundaries are also good places to define actual documentation within a more narrow context for both humans and LLMs (e.g. `CLAUDE.md`).
1. **Improved Discoverability**: Public interfaces make it clear what operations are available and how to use them.
1. **Performance**: Boundaries should reduce compilation time by eliminating circular dependencies. Boundary checks happen at compile time, not runtime, so there's no performance impact in production.

An honest implementation of context boundaries should turn spaghetti code into a well-organized tree with each domain branching out in a visually traceable call stack.

## Implementing Context Boundaries

There are some additional steps to take to maximize boundaries for larger organizations.

### Directory Structure

<details open>
<summary>A well-organized boundary-based application follows a consistent directory structure.</summary>

```sh
lib/
  my_app/
    catalog/
      products/
        schemas/
          product.ex
        actions/
          list_products.ex
          create_product.ex
          update_product.ex
      categories/
        schemas/
          category.ex
        actions/
          list_categories.ex
      utils/
        price_calculator.ex
    catalog.ex

    orders/
      order_processing/
        schemas/
          order.ex
          line_item.ex
        actions/
          create_order.ex
          process_payment.ex
      fulfillment/
        actions/
          ship_order.ex
          track_shipment.ex
    orders.ex

    users/
      authentication/
        actions/
          login.ex
          register.ex
      profiles/
        schemas/
          user.ex
        actions/
          update_profile.ex
    users.ex
```

</details>

### Context Interface Design

Each context exposes a clean public interface through its main module. Here's how you might structure the `Catalog` context:

```elixir
defmodule MyApp.Catalog do
  @moduledoc """
  Context for managing product catalog.

  Handles products, categories, pricing, and inventory.
  """

  @behaviour  MyApp.Catalog.Products.Actions.ListProducts
  @behaviour  MyApp.Catalog.Products.Actions.GetProduct
  @behaviour  MyApp.Catalog.Products.Actions.CreateProduct
  @behaviour  MyApp.Catalog.Products.Actions.UpdateProduct
  @behaviour  MyApp.Catalog.Categories.Actions.ListCategories
  @behaviour  MyApp.Catalog.Categories.Actions.CreateCategory

  use Boundary,
    deps: [MyApp.Users],
    exports: [Products.Schemas.Product, Categories.Schemas.Category]

  alias MyApp.Catalog.Products.Actions
  alias MyApp.Catalog.Categories.Actions, as: CategoryActions

  # Product operations
  @impl Actions.ListProducts
  defdelegate list_products(params \\ []), to: Actions.ListProducts, as: :list_products

  @impl Actions.GetProduct
  defdelegate get_product(id), to: Actions.GetProduct, as: :get_product

  @impl Actions.CreateProduct
  defdelegate create_product(attrs), to: Actions.CreateProduct, as: :create_product

  @impl Actions.UpdateProduct
  defdelegate update_product(product, attrs), to: Actions.UpdateProduct, as: :update_product

  # Category operations  
  @impl Actions.ListCategories
  defdelegate list_categories(), to: CategoryActions.ListCategories, as: :list_categories

  @impl Actions.CreateCategory
  defdelegate create_category(attrs), to: CategoryActions.CreateCategory, as: :create_category
end
```

This interface provides several benefits:

1. **Discoverability**: All public operations are visible in one place
1. **Delegation**: Implementation details are hidden in specialized modules
1. **Consistency**: All contexts follow the same interface pattern
1. **Type Safety**: You can use behaviors to ensure implementations match `@callback` interfaces
1. **Mockable**: Behaviour definitions make each action easily mocked

### Action Modules

Action modules contain the actual business logic and should follow a consistent pattern. They expose and implement a callback for their interface. At the org I work at now, we generally have one file contain only one action so that an action has one public function but can have unlimited private functions.

```elixir
defmodule MyApp.Catalog.Products.Actions.CreateProduct do
  @moduledoc false

  @behaviour __MODULE__

  alias MyApp.Catalog.Products.Schemas.Product
  alias MyApp.Users
  alias MyApp.Repo

  @type params_t :: %{
    name: String.t(),
    description: String.t(),
    price: Decimal.t(),
    category_id: String.t(),
    created_by: String.t()
  }

  @type result_t :: {:ok, Product.t()} | {:error, Ecto.Changeset.t()}

  @doc """
  Creates a new product.
  """
  @callback create_product(params_t()) :: result_t()
  def create_product(params) do
    with {:ok, user} <- Users.get_user(params.created_by),
         :ok <- validate_permissions(user),
         {:ok, product} <- create_product(params) do
      {:ok, product}
    end
  end

  defp validate_permissions(user) do
    if Users.has_permission?(user, :create_products) do
      :ok
    else
      {:error, :unauthorized}
    end
  end

  defp create_product(params) do
    %Product{}
    |> Product.changeset(params)
    |> Repo.insert()
  end
end
```

The `@behaviour __MODULE__` is a self-referencing behavior that replaces `@spec` with `@callback` to provide compile-time documentation of our action functions in our context API. Each action module is now a swappable backend that can be easily mocked in tests or refactored.

Key principles for action modules that we've implemented with our large Elixir monolith:

- **Single Responsibility**: One action per module with self-referencing behavior
- **Public/Private Separation**: One public function that matches the module name (a uniform function name such as `call` might also be appropriate) alongside private helpers
- **Type Specifications**: Clear input/output types with `@callback` specification defining the contract of the action's behaviour
- **Error Handling**: Consistent error patterns across actions that mask errors which could be useless outside the context

### Schema Organization

Schemas should be pure data definitions with minimal logic and only pure functions:

```elixir
defmodule MyApp.Catalog.Products.Schemas.Product do
  use Ecto.Schema
  import Ecto.Changeset

  @type t :: %__MODULE__{
    id: String.t(),
    name: String.t(),
    description: String.t(),
    price: Decimal.t(),
    category_id: String.t(),
    inserted_at: DateTime.t(),
    updated_at: DateTime.t()
  }

  schema "products" do
    field :name, :string
    field :description, :string  
    field :price, :decimal

    belongs_to :category, MyApp.Catalog.Categories.Schemas.Category

    timestamps()
  end

  def changeset(product, attrs) do
    product
    |> cast(attrs, [:name, :description, :price, :category_id])
    |> validate_required([:name, :price, :category_id])
    |> validate_number(:price, greater_than: 0)
    |> foreign_key_constraint(:category_id)
  end
end
```

Schemas are typically exported by boundaries since they're part of the public interface. Other contexts will likely need to pattern match on them and pass them around. You may want to bulk export schemas in an inner boundary.

```elixir
# lib/my_app/catalog/products/schemas.ex
defmodule MyApp.Catalog.Products.Schemas do
  @moduledoc """
  Product schemas boundary
  """
  use Boundary,
    deps: [
      MyApp.Catalog.Categories.Schemas
    ],
    exports: [
      Product   # Ecto schema definition
    ]
end
```

This is one example of how boundaries interface with each other.

## Cross-Boundary Communication

### Synchronous Communication

For synchronous operations where you need immediate results, call through the boundary's public interface:

```elixir
defmodule MyApp.Orders.Actions.CreateOrder do
  @moduledoc false

  @behaviour __MODULE__

  alias MyApp.Catalog
  alias MyApp.Orders.Schemas.Order
  alias MyApp.Users


  @callback create_order(map()) :: {:ok, Order.t()} | nil
  def create_order(params) do
    with {:ok, user} <- Users.get_user(params.user_id),
         {:ok, products} <- validate_products(params.line_items),
         {:ok, order} <- create_order(user, products, params) do
      {:ok, order}
    end
  end

  defp validate_products(line_items) do
    product_ids = Enum.map(line_items, & &1.product_id)

    # Call through Catalog boundary interface
    case Catalog.get_products_by_ids(product_ids) do
      {:ok, products} when length(products) == length(product_ids) ->
        {:ok, products}
      _ ->
        {:error, :invalid_products}
    end
  end
end
```

### Asynchronous Communication

For side effects that don't need immediate consistency, use event-driven communication:

```elixir
defmodule MyApp.Orders.Actions.CompleteOrder do
  @moduledoc false

  @behaviour __MODULE__

  alias MyApp.EventBus
  alias MyApp.Orders.Schemas.Order

  @type complete_order(String.t()) :: {:ok, Order.t()}
  def complete_order(order_id) do
    with {:ok, order} <- get_order(order_id),
         {:ok, updated_order} <- mark_completed(order) do

      # Publish event for other contexts to react
      Phoenix.PubSub.broadcast(MyApp.PubSub, "order_completed:#{updated_order.user_id}", %{
        order_id: updated_order.id,
        user_id: updated_order.user_id,
        total: updated_order.total
      })

      {:ok, updated_order}
    end
  end
end
```

## Web Layer Organization

The web layer should also define its own boundary in `my_app_web.ex`.

```elixir
deps: [
  Absinthe.Subscription,
  Absinthe,
  MyApp.Billing,
  MyApp.Catalog,
  MyApp.Orders,
  MyApp.Users,
  Phoenix,
],
exports: [
  Endpoint
]
```

Keep controllers or resolvers thin. For example, a GraphQL endpoint's resolver should only handle request-specific concerns. Similarly, controllers should delegate business logic to contexts.

## Challenges

There are a few non-trivial challenges we encountered at our org with our implementation. The initial refactor was significant overhead since moving files around and function calls was so wide-spread. We were all hands on deck for a few weeks to make this work. Following our initial refactor, continuing education and discipline became a priority for us.

Database queries that span boundaries become more complex and may require boundary coupling, duplication or event-driven updates. We've elected to use a controlled coupling approach for interdependent schemas and joins. Each domain has a dedicated schemas module that acts as a child boundary that exports all of its schemas.

```elixir
# lib/my_app/orders/order_processing/schemas.ex
  exports: [
    Order,      # Ecto schema definition
    LineItem    # Ecto schema definition
  ]
```

```elixir
deps: [
  MyApp.Orders.OrderProcessing.Schemas
]
```

We may eventually have to decouple some domains that need to become their own microservices. This needs to be balanced against architectural benefits.

## Conclusion

The dynamic nature and loose conventions of Elixir makes it challenging to navigate large codebases. Context boundaries enforced through the Boundary library provide a practical path for scaling Elixir applications beyond small teams.

Whether you're currently feeling the pain of a growing monolith or planning for future scale, context boundaries offer a pragmatic solution that preserves the benefits of monolithic deployment while providing the organizational clarity of business domains and microservices.
