---
type: post
title: Elixir
# publishDate: 2025-xx-xx
description: The Elixir programming language
hide_image: true
resources:
  - src: pdq.png
    params:
      alt: two people standing in front of construction of a business office
comments: true
draft: true
---

A few years ago I happened to find myself at predominantly C# shop that decidedly pivoted to take on a new stack with Elixir, LiveView, TypeScript and React. For a greenfield project, this was exciting, fast, and uninhibited. I was grateful to work with a technology that ranks as highly desired in every StackOverflow Developer Survey. However, as our codebase scaled, some of the realities of a dynamically typed language began to set in.

### What Works

Elixir excels in specific contexts such as personal projects and small teams with stable membership, concurrent systems leveraging BEAM's actor model, fault-tolerant applications using OTP patterns, and high development velocity on well-understood codebases. So much is available out of the box with Elixir and Phoenix. Websockets, pubsub, caching, memory store, concurrency, and clustering are huge wins in the language that small teams can spin up without much effort. I believe Ecto is the best database library with a SQL DSL and Query Result Mapping available in the open source world.

### The Core Problems

Code comprehension and issue tracing become difficult at scale with dynamic typing. For most code changes in large codebases, it's difficult to ascertain which code paths are affected. Refactors require excessive caution and testing. Dialyzer helps but it doesn't solve the fundamental typing gap.

There is also organizational friction with adopting Elixir. There can be a learning curve for functional programming concepts and there's a limited hiring pool compared to mainstream languages.

Other minor issues include slower compile times, especially without strict avoidance of circular dependencies, and a weak language eecosystem.

### Emerging Solutions

At my org, we're iterating on certain [design patterns that improve readability and organization](/boundary).

Gleam offers static typing while maintaining Erlang ecosystem compatibility. Elixir itself will soon become a [gradually typed language](https://hexdocs.pm/elixir/main/gradual-set-theoretic-types.html). Gleam looks very promising, but it isn't a practical decision for the enterprise world until the language matures.

## The Bottom Line

Elixir provides genuine technical advantages for concurrent, fault-tolerant systems. It's an excellent solution to reach for with many features such as concurrency, clustering, pubsub, websocket messaging, memory storage, and other enterprise features out of the box with Phoenix. However, these benefits come with significant organizational costs: harder hiring, steeper onboarding, and maintenance challenges from dynamic typing.

Elixir is an excellent choice for purpose-built microservices for specific concurrent jobs such as [handling websocket message](/multiplayer).

Success with Elixir could depend on:

- Team stability and functional programming expertise
- Specific technical requirements that justify the adoption overhead
- Organizational commitment to the learning curve

For most teams, businesses should evaluate whether Elixir's features outweigh its dynamic typing drawbacks and niche ecosystem.
