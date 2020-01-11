---
title: "How I Search"
date: 2016-11-03 00:00:00 -0600
description: ""
tags:
  - learn
  - web
---

In College, Organic Chemistry was the first beast I confronted where I realized the value of effectively referencing information. There's an ocean of available knowledge, direction and explanations on Stack Overflow, Quora, forums and blogs. As a developer, I'm now googling manyfold more to reference documentation, find a repository or look for answers to a bug (I highly recommend [Vimium](https://github.com/philc/vimium) to use vim shortcuts for fast navigation in your browser).

Figuring out how to reference answers is a more valuable skill than memorizing code or definitions. Becoming a good researcher is learning to problem solve.

Yes, there's a balance. You can't constantly cite everything for syntax and method lookups. Working effectively also requires producing results efficiently. However, quality code requires examination, while keeping abreast of the current environment within an ever-changing world of development.

## Maintaining Curiosity

Occasionally, I'll search "best way to ${some API/method/prototype}". For example a recent "best way to" was with JavaScript's `filter` where I found a very simply example of filter in use. However, some discussion caught my eye on the use of a for loop compared to filter, along with performance demonstration of filter versus for loop. This led me further into examining on how the V8 engine has made performance improvements to looping methods and the current cost of using a shorthand loop. [Notice the performance changes over time](https://jsperf.com/array-filter-performance). A strong sense of curiosity can help us maintain our knowledge, even with basic concepts.

## Search Operators

The 'syntax' of refining a web search can be critical to find what you're looking for.

Make sure you don't put a space between your operator and the search value. Also, word order matters. The first word ranks higher than the second. You should use nouns to avoid [stop words](https://en.wikipedia.org/wiki/Stop_words). Using too few words can yield crummy results, and the search input will accept up to 32 words.

1. Find an exact match: use quotes around a word or phrase.

```
"typeof array"
```

2. Specific site: use `site:` in front of a domain or .tld.

```
react site:github.com

site:.edu calculus
```

3. Hashtags: `#` in front of a word.

```
#harambe site:instagram.com
```

4. Exclude specific words: put `-` in front of a phrase you don't want.

```
react -native
```

5. Wildcards or unknown words: use a `*` inside a word or phrase as a placeholder.

```
*.js
```

Google uses automatic word stemming. When you search `code`, Google also searches `coding`, `codes`, etc.

6. Range of numbers: enter `..` between two numbers. Also, using `$` will search prices.

```
laptop $500..$1000
```

7. Combine searches: use `OR` or `|` between each search query.

```
colors site:github.com OR site:npmjs.org
```

Using `AND` isn't necessary, since "and" is assumed in a string of words.

8. Related sites: put `related:` before a domain.

```
related:angular.io
```

9. Define a word: simply use `define:` before your word.

```
define:terse
```

Most of the time Google will offer a word definition for single word searches.

10. Filetypes: use `filetype:` before a preferred file extension.

```
tax form filetype:pdf
```

11. View the cached snapshot of a site: Use `cache:` before the site address. This is mostly useful if a site goes down.

```
cache:https://nodejs.org/en/
```

[Archive.org](https://archive.org/web/) is still a great choice to see a site's snapshots over time.

### Other Operators

- Search terms in titles, text, urls with `allintitle`, `allintext` and `allinurl`.

```
allintitle:samsung recall
```

- This is distinct from `intitle` which search for a specific phrase in the title.

```
intext:"periodic table" intitle:javascript
```

## What to Keep

Traditional education would have you remember every single nuance and hoard endless notes for every possible subject (oops, see my [public notes](https://github.com/brettinternet/public-notes)).

But we don't really have to take notes on everything, because so much knowledge has been indexed for us. I appreciate how the development world embraces this paradigm &mdash; it's okay to Google. I've shadowed family physicians while they Google symptoms, and I've also made the case at my company to allow candidates to Google during interviews. This is part of our everyday job. The ability to efficiently reference information from documentation and research is invaluable.