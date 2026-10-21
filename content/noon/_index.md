---
type: post
title: noon
publishDate: 2026-10-21
description:
    A local repository scheduler for developers, agents, and automations
comments: false
card_image: demo.gif
hide_image: true
resources:
    - src: demo.gif
      params:
          alt: Adding a noon job, running it, and checking the dashboard
    - src: demo-tui.gif
      params:
          alt:
              The noon TUI opening a failed run's log, searching it, and queuing
              a job
    - src: demo-logs.gif
      params:
          alt:
              Queuing a noon job, following its log, and finding the failing
              line
---

[noon](https://github.com/brettinternet/noon) is cron for repositories and
coding agents. Jobs live in the repo, run on your machine or in a container,
leave history you can inspect, and never run unattended until you opt in.

![Adding a noon job, running it, and checking the dashboard](demo.gif)

```yaml
# noon.yaml
version: 1
timezone: America/Denver
jobs:
    tests:
        schedule: every day at 2am
        run: [go, test, ./...]
    review:
        schedule: weekdays at 9am
        jitter: 15m
        agent: claude
        prompt: Review open PRs and list risks.
```

Cloning or pulling a repository can't schedule commands on your machine. Shared
jobs need `noon enable`, and again after a pull changes them.

Browse jobs, runs, and logs in the TUI.

![The noon TUI opening a failed run's log, searching it, and queuing a job](demo-tui.gif)

Queue a job, follow its log, and find the failure.

![Queuing a noon job, following its log, and finding the failing line](demo-logs.gif)

## Features

- Shared `noon.yaml` or private `.git/noon.yaml` jobs, plus personal user jobs
- Plain-English or cron schedules with timezones, jitter, and timeouts
- Explicit opt-in and approval before anything runs in the background
- Run history and searchable, followable logs
- Prompt jobs for `claude`, `codex`, `gemini`, `opencode`, and `pi`
- MCP server so agents can list jobs, queue approved ones, and read logs
- Keyboard-driven TUI and JSON output
- Lifecycle hooks, Git and agent `Stop` hook triggers, and signed webhooks
- launchd/systemd service, Docker, and crontab import

{{< card
title="brettinternet/noon"
description="Cron for repositories and coding agents"
href="https://github.com/brettinternet/noon" >}}
