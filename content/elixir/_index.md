---
type: post
title: Elixir
publishDate: 2023-10-14
description: The Elixir programming language
comments: true
---

Working at a C# shop that moved to Elixir for a greenfield project was exciting
and uninhibited. Elixir is effective and let us maintain a very high development
velocity. However, as our codebase scaled, the realities of a dynamically typed
language became a significant challenge.

### What Works

Elixir excels at concurrent systems through the Erlang VM (BEAM), lightweight
isolated processes, asynchronous message passing, immutability, and the actor
model—even across nodes. GenServers provide a versatile way to manage state,
while OTP supervision trees and the "let it crash" paradigm help create
fault-tolerant servers. Phoenix and Elixir also provide WebSockets, PubSub,
caching, in-memory storage, observability, and clustering with little additional
effort.

Pattern matching is my favorite Elixir feature. It allows destructuring complex
data and directing control flow based on the shape of the data.

```elixir
case Jason.decode(json_string) do
    {:ok, %{"user" => %{"id" => user_id, "name" => user_name, "email" => user_email}}} ->
        {:ok, %{id: user_id, name: user_name, email: user_email}}

    {:ok, %{"error" => error_message}} ->
        {:error, error_message}

    {:ok, other_data} ->
        {:error, :unexpected_structure}

    {:error, %Jason.DecodeError{data: data, position: pos, token: token}} ->
        {:error, "JSON parse failed at position #{pos} near '#{token}': #{data}"}
end
```

The Ecto library is my favorite Elixir library. It interfaces with databases
through a powerful SQL DSL and Query Result Mapping. Elixir's metaprogramming
allows Ecto to appear as close to SQL as I've seen in any language while
remaining composable, declarative, and adaptable.

### Limitations

Code comprehension and issue tracing become difficult at scale with dynamic
typing. Changes in large codebases make affected code paths difficult to
ascertain, and refactors require more manual verification. Dialyzer helps, but
doesn't solve the fundamental typing gap.

Adopting Elixir also brings organizational friction: functional programming has
a learning curve, the hiring pool is smaller than for mainstream languages, and
the ecosystem is smaller. Circular dependencies can slow compilation, Elixir is
generally not ideal for CPU-intensive tasks, and local development can be
frustrating when the language server is unstable.

## Conclusions

Elixir provides genuine advantages for concurrent, fault-tolerant systems and is
an excellent choice when Phoenix's enterprise features are useful out of the
box. Those benefits come with harder hiring, steeper onboarding, and maintenance
challenges from dynamic typing. Elixir may work especially well for
purpose-built microservices handling specific concurrent jobs, such as
WebSockets, when a stable team has functional programming expertise and the
technical requirements justify the adoption overhead. Most teams should weigh
those benefits against the typing drawbacks and niche ecosystem.

---

{{< note title="Improvements (2025)" >}} We've been iterating on
[design patterns that improve readability and organization](/boundary) at my
org.

Gleam offers static typing while maintaining Erlang ecosystem compatibility.
This language looks very promising, but it isn't a practical decision for the
enterprise world until the language matures.

Elixir itself will soon become a
[gradually typed language](https://hexdocs.pm/elixir/main/gradual-set-theoretic-types.html).

An [official language server](https://github.com/elixir-lang/expert) is also in
progress. {{< /note >}}
