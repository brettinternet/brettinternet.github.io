---
type: post
title: Manage notes with Markdown and Git
publishDate: 2017-02-06
description: '"Everything not saved will be lost."'
comments: true
hide_image: true
resources:
    - src: notes.png
      params:
          alt: organic chemistry diagram sketches in a notebook
---

In school, to keep up with my peers, I took meticulous notes. I read and reread
assignments, and I constantly evaluated my priorities to stay on task. I became
obsessed with managing my productivity. I've used feature-rich apps like
OmniFocus or Wunderlist and simpler tools like Apple Reminders.

{{< image src="notes.png" alt="organic chemistry diagram sketches in a notebook" caption="Organic chemistry notes from college" >}}

## Tools

For a while, I used Evernote for note-taking, then tried OneNote, Apple Notes,
and even Google Keep. I left Evernote because it seemed to have lost its way
with gimmicky features. I liked that OneNote didn't force a premium option on me
and was just as accessible as Evernote. Later, I thought Apple Notes might be
all I needed, but I eventually found that it wasn't better for anything except
lists or drawing with a touchscreen.

Now, as a developer, I use Markdown in my text editor. This approach isn't
novel. You'll even find books on GitHub written in Markdown. Markdown offers
versatile formatting, especially for displaying code excerpts with syntax
highlighting, referencing links, creating lists, and dividing notes into
sections. [GitHub Flavored Markdown](https://github.github.com/gfm/) and small
enhancements have made Markdown previewing so accessible. Even this blog uses
Markdown.

### Markdown

I love Markdown. I like how widely supported it is and how clearly it conveys
information. Markdown has become the ubiquitous plain-text format for the GitHub
community. My own blog posts are written in Markdown
([brettinternet.github.io](https://github.com/brettinternet/brettinternet.github.io/)).
Composing in Markdown is a timeless method that isn't tied to any third-party
tools except a modern text editor (which isn't going anywhere).

This method isn't perfect. I need separate tools for sketches and PDF markups,
but these formats make up about 0.5% of all my notes. I use Nextcloud for
storing files and Keybase for my public documents.

GitHub has formalized its
[GitHub Flavored Markdown specification](https://github.github.com/gfm/), which
is based on CommonMark. Representatives from GitHub, Reddit, and Stack Exchange
developed CommonMark. Some nonconforming Markdown extensions add useful features
such as task lists, autolinking, and improved diffs and code blocks.

### Git

I maintain a separate GitHub repository for my private notes and another for my
[public notes](https://github.com/brettinternet/public-notes). Eventually, I'd
like to self-host my own GitLab within
[my homelab](https://github.com/brettinternet/homelab).

My commit messages are short, but I try to make them meaningful so I can review
my note history and find deleted excerpts. I also use
[aliases](https://github.com/brettinternet/dotfiles/blob/master/.aliases) for
Git commands to push to `master` quickly.

### Desktop

I use Vim and VS Code for note-taking. Taking notes in my editor environment is
ideal since I'm most comfortable with the shortcuts. VS Code offers a Markdown
previewer out of the box with `Ctrl` + `Shift` + `V`. Markdown's lifespan on the
desktop will exceed my own, so I'm no longer bound to an app's survival on a
platform to access my notes.

[ShareX](https://github.com/ShareX/ShareX) is a good option for screenshots on
Windows, while [Flameshot](https://flameshot.org/) works well on Linux. I tend
to think that a simple bookmark is better than web clippings for most use cases.

### Mobile

Before I found [Working Copy](https://workingcopyapp.com/), a solid mobile Git
solution for iOS was _the_ missing piece for keeping notes in a Git repository.
There are equally good options on Android, such as
[MGit](https://github.com/maks/MGit) or [Termux](https://termux.dev/). Working
Copy offers free repository cloning and viewing, with push capabilities
available through an in-app purchase. The app includes SSH key support, syntax
highlighting, and Markdown preview. It's an excellent mobile Git client for iOS.

## Save Menu

> Everything not saved will be lost.
>
> \- _Nintendo "Quit Screen" message_

Like an accessible save menu, I keep everything in Markdown. I record Docker
commands, obscure command-line arguments, programming problems, and DevOps
directions. I also [create slides](https://github.com/brettinternet/slides) with
Markdown. I'll only note something if it's easier to reference my notes than to
search for it online. I also take notes to help students I mentor.

I use a combination of Apple Reminders and private GitHub issues with task lists
for short-term personal tasks and GitHub Projects for Kanban boards and
portfolio management. But for notes, I like good ol' fashioned Git and Markdown.
I use a private repository for my personal notes and a separate repo for my
public notes. I believe this approach relies on trustworthy technology. Git and
Markdown should be around for a long time.

---

{{< note title="June 2020 update" >}} I began experimenting with a much simpler
approach for tracking work in progress with the `todo.txt` format. {{< /note >}}

{{< note title="Aug. 2024 update" >}} As a parent with limited time, I've
switched to my phone's built-in notes app for quick capture. Sometimes
convenience trumps optimal workflow, and my stage of life calls for it.
{{< /note >}}
