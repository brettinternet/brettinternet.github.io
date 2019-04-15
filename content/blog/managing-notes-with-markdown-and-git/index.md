---
title: Manage Notes with Markdown and Git
date: "2017-02-06 00:00:00 -0600"
description: ""
tags:
  - markdown
  - git
---

I'd love to tell you that since studying neuroscience in school, things come easy to me since I'm ✨so smart✨. However, this is simply not the case.
To keep up with my peers, I took meticulous notes, read and reread assignments, and I constantly evaluated my priorities to stay on task.
I became obsessed with productivity. I was always looking out for the next shiny tool to help me get an edge in competitive learning.
I've used apps like OmniFocus or Wunderlist to simpler tools like Apple Reminders.

For a while I used Evernote for note-taking, then I tried OneNote, Apple Notes and even Google Keep.
I left Evernote because they'd seemed to have lost their way with gimmicky features.
I liked that OneNote didn't force-feed a premium option and it was just as accessible as Evernote.
Later, I thought that maybe Apple Notes would be just enough for me, but I eventually found that it wasn't better for anything other than lists or using the touch draw feature.

Now as a developer, I use markdown in my IDE.
This process for note-taking certainly isn't novel–you'll even find books on Github written with markdown.
Markdown offers the most formatting versatility, especially to display code excerpts with syntax highlighting and quickly reference links, create lists, and break notes out by sections.
This is especially true since Github's flavoring and small enhancements have made markdown previewing so accessible. Even this blog is made using markdown.

### Markdown

I love markdown.
I like how widely support it is, and I like how clear markdown format is to convey information.
Markdown has become the ubiquitous plain text format for the GitHub community.
My own blog posts are written in markdown and compiled with [Jekyll](https://github.com/brettinternet/minimaless/).

### Git

Right now I have a [BitBucket](https://bitbucket.org/brettinternet) for my private repos and notes and I use GitHub for my [public notes](https://github.com/brettinternet/public-notes).
Eventually, I'll set up my own Gitlab to self-host my own repos.

My commit messages are short, but they're also meaningful so I can see my note history and refer back to find deleted excerpts. I also use [aliases](https://github.com/brettinternet/dotfiles/blob/master/.aliases) for git commands to make pushing to master very fast.

### Desktop

I use Vim.
To me, taking notes in my editor environment is the best possible scenario since I'm most comfortable with the shortcuts.
Atom is also a great option.
It has a markdown previewer you can access with `ctrl` + `shift` + `m`.
The big advantage with markdown is that just about anything can open it up and preview it.
I'm no longer bound to an app's platform to view my notes.

I do very little clipping from the web.
I tend to think that a simple bookmark is better.
EverNote certainly has the strongest clipper, and I do like that OneNote's web clipper is [open source](https://blogs.msdn.microsoft.com/onenotedev/2016/08/31/the-web-clipper-goes-open-source/).
There are a few other open source alternatives that have been mentioned in the self-hosting subreddit, but I haven't looked into them yet.

### Mobile

Before I found [Working Copy](https://workingcopyapp.com/), a solid mobile git solution for iOS was _the_ missing piece for keeping notes in a git repo.
I'm sure there are equally polished options on Android.
With Working Copy you can fetch repos for free, but you'll have to pay to unlock push.
I think it's worth it to support this developer.
The app supports SSH keys, language highlighting and markdown and plain text previews.
It's an excellent mobile option and nearly an IDE for iOS.

### Save Menu

It's true, this method isn't perfect.
I need separate tools for sketches and pdf markups.
But these mediums make up about 0.5% of all my notes.
I just use my ownCloud for storing files or Keybase for my public documents.

However, markdown is certainly here to stay.
[Some recent specification](https://githubengineering.com/a-formal-spec-for-github-markdown/) has been proposed to standardize Github's flavor of markdown.
One of my favorite introductions to markdown can be found [here](http://commonmark.org/).
Commonmark was put together by a few representatives of some major techs like GitHub, Reddit, and Stack Exchange.

> Everything not saved will be lost.
>
> \- _Nintento "Quit Screen" message_

Like an accessible save menu, I keep everything in markdown.
I record docker commands and obscure command-line arguments, JavaScript toy problems, or directions to setup Postgres permissions.
I'll only make a note on it if it's easier to reference my notes than it is to [Google search it]({% post_url 2016-11-03-becoming-a-professional-googler %}).
I also take notes to help out the students that I mentor. You can checkout my [public notes](https://github.com/brettinternet/public-notes) on GitHub.

Apple Reminders still works for me with short term personal todos, and Trello for team projects.
But for notes, I like good ol' fashioned git and markdown.
I use a private BitBucket repo for my personal notes, and GitHub for my public notes.
Eventually I'll self-host a git service like Gitlab.
Perhaps you'll think I'm a monk or a Luddite for not choosing the prettiest new apps, but I believe this method is the strongest embrace of trustworthy technology.
Git and markdown are two timeless tools that are sure to be around for a long time.
