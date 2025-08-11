---
type: post
title: Manage notes with markdown and git
publishDate: 2017-02-06
description: "'Everything not saved will be lost.'"
comments: true
renderer:
  unsafe: true
---

In school, to keep up with my peers, I took meticulous notes. I read and reread
assignments, and I constantly evaluated my priorities to stay on task. I became
obsessed with managing my productivity. I've used feature-rich apps like
OmniFocus or Wunderlist and simpler tools like Apple Reminders.

For a while I used Evernote for note-taking, then I tried OneNote, Apple Notes
and even Google Keep. I left Evernote because they'd seemed to have lost their
way with gimmicky features. I liked that OneNote didn't force-feed a premium
option and it was just as accessible as Evernote. Later, I thought that maybe
Apple Notes would be just enough for me, but I eventually found that it wasn't
better for anything other than lists or using the touch draw feature.

Now as a developer, I use markdown in my text editor. This process for
note-taking certainly isn't novel – you'll even find books on GitHub written
with markdown. Markdown offers the most formatting versatility, especially to
display code excerpts with syntax highlighting and quickly reference links,
create lists, and break notes out by sections. This is especially true since
[GitHub's flavoring](https://github.github.com/gfm/) and small enhancements have
made markdown previewing so accessible. Even this blog is made using markdown.

### Markdown

I love markdown. I like how widely support it is, and I like how clear markdown
format is to convey information. Markdown has become the ubiquitous plain text
format for the GitHub community. My own blog posts are written in markdown
([brettinternet.github.io](https://github.com/brettinternet/brettinternet.github.io/)).
Composing markdown is a timeless method that isn't married any third party tools
except a modern text editor (which isn't going anywhere).

It's true, this method isn't perfect. I need separate tools for sketches and PDF
markups. But these mediums make up about 0.5% of all my notes. I just use my
NextCloud for storing files or Keybase for my public documents.

[Some recent specification](https://githubengineering.com/a-formal-spec-for-github-markdown/)
has been proposed to standardize Github's flavor of markdown. One of my favorite
introductions to markdown can be found [here](http://commonmark.org/).
Commonmark was put together by a few representatives of some major companies
that use markdown like GitHub, Reddit, and Stack Exchange. Some nonconforming
markdown features have added some very nice features such as task lists,
autolinking, diff and code block improvements.

### Git

Right now I have a ~~BitBucket~~ separate GitHub repo for my private notes and
another for my [public notes](https://github.com/brettinternet/public-notes).
Eventually, I'd like to self-host my own GitLab within
[my homelab](https://github.com/brettinternet/homelab).

My commit messages are short, but I attempt to make them meaningful so I can see
my note history and refer back to find deleted excerpts. I also use
[aliases](https://github.com/brettinternet/dotfiles/blob/master/.aliases) for
git commands to make pushing to master very fast.

### Desktop

I use Vim and VS Code. To me, taking notes in my editor environment is the best
possible scenario since I'm most comfortable with the shortcuts. VS Code offers
a markdown previewer out of the box with `ctrl` + `shift` + `v`. Markdown's
lifespan on desktop will exceed my own, so I'm no longer bound to an app's
survival on a platform to access my notes.

[ShareX](https://github.com/ShareX/ShareX) is a good option for screenshots on
PC or [Flameshot](https://wiki.archlinux.org/index.php/Flameshot) or
[GIMP](https://www.gimp.org/downloads/) on Linux. I tend to think that a simple
bookmark is better than web clippings. EverNote certainly has the strongest
clipper, and I do like that OneNote's web clipper is
[open source](https://blogs.msdn.microsoft.com/onenotedev/2016/08/31/the-web-clipper-goes-open-source/).

### Mobile

Before I found [Working Copy](https://workingcopyapp.com/), a solid mobile git
solution for iOS was _the_ missing piece for keeping notes in a git repository.
I'm sure there are equally polished options on Android. With Working Copy you
can fetch repos for free, but you'll have to pay to unlock push. The app is very
polished, so I think it's worth it to support this developer. SSH keys are
supported, language highlighting and markdown and plain text previews. It's an
excellent mobile option for iOS.

### Save Menu

> Everything not saved will be lost.
>
> \- _Nintendo "Quit Screen" message_

Like an accessible save menu, I keep everything in markdown. I record docker
commands and obscure command-line arguments, JavaScript toy problems, or
directions to setup Postgres permissions. I also
[create slides](https://github.com/brettinternet/hugo-slides) with markdown.
I'll only make a note of something if it's easier to reference my notes than it
is to [Google search it](/blog/becoming-a-professional-googler). I also take
notes to help out the students that I mentor. You can checkout my
[public notes](https://github.com/brettinternet/public-notes) on GitHub but you
can't see my private ones 😉.

I use a combination of Apple Reminders and private GitHub issues with task lists
for short term personal tasks, and GitHub Projects to visualize Kanban project
and portfolio management. But for notes, I like good ol' fashioned git and
markdown. I use a private repository for my personal notes, and a separate repo
for my public notes. I believe this method is the strongest embrace of
trustworthy technology. Git and markdown are two timeless tools that are sure to
be around for a long time.

---

{{< note title="June 2020 update" >}}
As of this year, I have begun experimenting with a much
simpler approach for tracking work-in-progress: `todo.txt` ([source](https://news.ycombinator.com/item?id=39432876)).
{{< /note >}}

{{< note title="Aug. 2024 update" >}}
I'm a father now and time is limited. Lately, I shove all
my thoughts in the notes app on my phone for convenience. The stage of life I'm
in calls for it now.
{{< /note >}}
