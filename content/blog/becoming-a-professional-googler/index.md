---
title: "Becoming a Professional Googler"
date: 2016-11-03 00:00:00 -0600
description: ""
tags:
  - learn
  - web
---

When I took Organic Chemistry and other science courses in university, I quickly realized the value of referencing information from Google. There's an ocean of available knowledge, direction and explanations on Stack Exchange, Yahoo Answers, Quora and other forums and blogs. As a developer, I'm now googling 10x as much to reference documentation, find an npm package or look for answers to a bug (I highly recommend [Vimium](https://chrome.google.com/webstore/detail/vimium/dbepggeogbaibhgnhhndojpepiihcmeb?hl=en) to use vim shortcuts for fast navigation in your browser!).

Learning the 'syntax' of refining a web search can be critical to find what you're looking for. I tell the students I mentor that learning to be a good researcher and referencing answers is so much more important than memorizing syntax or specific values.

## Google Search Operators

Make sure you don't put a space between your operator and the search value. Also, word order matters. The first word ranks higher than the second. You should use nouns to avoid [stop words](https://www.link-assistant.com/seo-stop-words.html). Using too few words can yield crummy results, and the search input will accept up to 32 words.

1. Find an exact match: use quotes around a word or phrase.

```
"typeof array"
```

2. Specific site: use `site:` in front of a domain or .tld.

```
react site:github.com` or `site:.edu calculus
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
colors site:github.com` OR `site:npmjs.org
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

You should still use [archive.org](https://archive.org/web/) to see various snapshots over time.

### Other Search Operators

- Search terms in titles, text, urls with `allintitle`, `allintext` and `allinurl`.

```
allintitle:samsung recall
```

- This is distinct from `intitle` which search for a specific phrase in the title.

```
intext:"periodic table" intitle:javascript
```

### Writing in Sand or in Stone?

Traditional education would have you remember every single nuance and hoard endless notes for every possible subject (oops, see my [public notes](https://github.com/brettinternet/public-notes)).

But we don't really have to take notes on everything, because it's all been written for us online! I can really appreciate how web development has embraced this paradigm. The ability to reference information from documentation and Google searches is more valuable.
