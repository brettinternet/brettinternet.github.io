---
type: post
title: Programming Languages
# publishDate: 2025-xx-xx
description: My drivel on programming languages I've worked with
comments: false
draft: true
---

What's the best language for building sophisticated enterprise applications at scale? This question has no answer. But we explore it anyway. 💀

## Elixir?

A few years ago I happened to find myself at predominantly C# shop that decidedly pivoted to take on a new stack with Elixir, LiveView, TypeScript and React. For a greenfield project, this was exciting, fast, and uninhibited. I was grateful to work with a technology that ranks as highly desired in every StackOverflow Developer Survey. However, as our codebase scaled, some of the realities of a dynamically typed language began to set in.

### What Works

Elixir excels in specific contexts such as personal projects and small teams with stable membership, concurrent systems leveraging BEAM's actor model, fault-tolerant applications using OTP patterns, and high development velocity on well-understood codebases. So much is available out of the box with Elixir and Phoenix. Websockets, pubsub, caching, memory store, concurrency, and one of the best database libraries with a SQL DSL and Query Result Mapping (QRM) available in any language.

### The Core Problems

Code comprehension and issue tracing become difficult at scale with dynamic typing. For most code changes in large codebases, it's difficult to ascertain which code paths are affected. Refactors require excessive caution and testing. Dialyzer helps but it doesn't solve the fundamental typing gap.

There is also organizational friction with adopting Elixir. There can be a steep learning curve for functional programming concepts and there's a limited hiring pool compared to mainstream languages.

### Emerging Solutions

At my org, we're iterating on certain [design patterns that improve readability and organization](boundary).

Gleam offers static typing while maintaining Erlang ecosystem compatibility. Elixir itself will soon become a [gradually typed language](https://hexdocs.pm/elixir/main/gradual-set-theoretic-types.html). Gleam looks very promising, but it isn't a practical decision for the enterprise world until the language matures.

### The Bottom Line

Elixir provides genuine technical advantages for concurrent, fault-tolerant systems. However, these benefits come with significant organizational costs: harder hiring, steeper onboarding, and maintenance challenges from dynamic typing.

Elixir is an excellent choice for purpose-built microservices for specific concurrent jobs such as [handling websocket message](/multiplayer).

Success with Elixir could depend on:

- Team stability and functional programming expertise
- Specific technical requirements that justify the adoption overhead
- Organizational commitment to the learning curve

For most teams, the discussion suggests carefully evaluating whether Elixir's concurrency benefits outweigh its dynamic typing drawbacks and niche ecosystem challenges.

## Go?

I encountered a [Hacker News comment](https://news.ycombinator.com/item?id=44392307) that summarizes my perception of Go:

> I guess Google's years of experience led to the conclusion that, for software development to scale, a simple type system, GC, and wicked fast compilation speed are more important than raw runtime throughput and semantic correctness. Given the amount of networking and large - scale infrastructure software written in Go, I think they absolutely nailed it.

Go has become the "practical pragmatist" of modern languages. It's beloved for its simplicity but limited by deliberate design choices.

### What Works

Go excels as the reliable workhorse:
- Fast compilation prioritized over optimization
- Low barrier to entry with quick learning curve
- Networking and server development where it truly shines
- Simple type system that "just works"
- Comprehensive tooling for profiling and testing
- Strong concurrency with goroutines and channels

### The Core Limitations

Garbage Collection Reality
- "GC causes performance issues with large in-memory caches"
- Not optimized for large, long-lived object heaps
- Works best with short-lived objects
- Forces architectural compromises for performance-critical systems

Expressiveness Ceiling
- "Go has a very low barrier to entry, but also a relatively low ceiling"
- "The proliferation of codegen tools for Go is a testament of its limited expressive power"
- Limited type-level features compared to modern languages
- Repetitive error handling patterns

Design Philosophy Constraints
- "Go is the product of like 3 Googlers' tastes"
- Deliberately simple but sometimes oversimplified
- Lacks advanced type safety features
- Channel complexity despite being a core feature

### The Google Problem

Go optimizes for Google's specific use cases:
- Infrastructure and glue code
- Large teams with high turnover
- Prioritizes readability over expressiveness
- Fast compilation over runtime optimization

This creates friction for teams with different priorities or performance requirements.

### The Bottom Line

Go succeeds as a "good enough" language for many server-side tasks. Its compilation speed and simplicity make it excellent for rapid development and large teams. However, its deliberate limitations create frustration when projects outgrow its design constraints.

Go works best when:
- Building servers, networking, or glue code
- Fast iteration matters more than peak performance
- Team composition favors simplicity over expressiveness
- GC limitations align with your data access patterns

The language's greatest strength of extreme simplicity is also its primary limitation when requirements demand more sophisticated solutions.
