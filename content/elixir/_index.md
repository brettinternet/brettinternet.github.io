---
type: post
title: Elixir
publishDate: 2023-10-14
description: The Elixir programming language
hide_image: true
resources:
  - src: pdq.png
    params:
      alt: two people standing in front of construction of a business office
comments: true
---

Working at a C# shop that moved to Elixir for a greenfield project was exciting and uninhibited. Elixir is an effective language and allowed us to maintain a very high development velocity. Elixir ranks as highly desired in every StackOverflow Developer Survey for good reasons. However, as our codebase scaled, the realities of a dynamically typed language became a significant challenge.

### What Works

Elixir excels in concurrent systems leveraging the Erlang VM (BEAM) and an actor model to facilitate message passing even across nodes. GenServers are extremely versatile and provide a unique way to manage state asynchronously. The "let it crash" paradigm using OTP supervision trees is valuable for creating fault-tolerant servers. So many other features are available out of the box with Elixir and Phoenix. Websockets, pubsub, caching, memory store, concurrency, built-in observability, and clustering are huge wins in the language that small teams can spin up without much additional effort.

Pattern matching is my favorite Elixir feature. It allows destructuring complex data and directing control flow based on the shape of the data.

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

The Ecto library is my favorite Elixir library. Ecto interfaces with databases through a powerful SQL DSL and Query Result Mapping. Elixir's metaprogramming allows Ecto to appear as close to SQL as I've seen in any language, while being composable, declarative, and adaptable.

### Limitations

Code comprehension and issue tracing becomes difficult at scale with dynamic typing. Code changes in large codebases make it difficult to ascertain affected code paths. Refactors are cumbersome without typing and require more manual verification. Dialyzer helps but it doesn't solve the fundamental typing gap.

There is also organizational friction with adopting Elixir. There can be a learning curve for functional programming concepts and there's a limited hiring pool compared to mainstream languages.

Other issues include slower compile times without strict avoidance of circular dependencies and a smaller ecosystem compared to mainstream languages. Elixir generally isn't ideal for CPU-intensive tasks. The local development experience can be frustrating with language server crashes.

## Conclusions

Elixir provides genuine technical advantages for concurrent, fault-tolerant systems. It's an excellent solution to reach for with many features such as concurrency, clustering, pubsub, websocket messaging, memory storage, and other enterprise features out of the box with Phoenix. However, these benefits come with significant organizational costs: harder hiring, steeper onboarding, and maintenance challenges from dynamic typing.

Elixir is an excellent choice for purpose-built microservices for specific concurrent jobs such as handling websockets.

Success with Elixir depends on team stability with functional programming expertise, specific technical requirements that justify adoption overhead, organizational commitment to the learning curve, and improved language server support.

For most teams, engineers should evaluate whether Elixir's features outweigh its dynamic typing drawbacks and niche ecosystem.

---

{{< note title="Improvements (2025)" >}}
We've been iterating on [design patterns that improve readability and organization](/boundary) at my org.

Gleam offers static typing while maintaining Erlang ecosystem compatibility. This language looks very promising, but it isn't a practical decision for the enterprise world until the language matures.

Elixir itself will soon become a [gradually typed language](https://hexdocs.pm/elixir/main/gradual-set-theoretic-types.html).

An [official language server](https://github.com/elixir-lang/expert) is also in progress now.
{{< /note >}}
