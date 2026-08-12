---
type: post
title: Slackbot
publishDate: 2025-05-19
description: Slack utilities for the workplace with a containerized Go server
resources:
    - src: user-status.png
      params:
          alt: Slack bot notifications when user is removed or added
comments: false
---

## Features

- "Obituaries" to get notified when users are removed (or added) from the Slack
  organization
- Configurable chat responses and reactions
- AI Chat with a variety of prompted, unhinged, and sticky personas per user
- Configuration through environment variables or YAML, with optional
  file-mounted secrets
- Prebuilt containers and an example Docker deployment for handling a public
  event endpoint

{{< card
title="brettinternet/slackbot"
description="Slack utilities for the workplace"
href="https://github.com/brettinternet/slackbot" >}}
