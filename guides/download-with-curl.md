---
layout: guide-layout
title: How to download files with curl
excerpt: How to download files with curl
permalink: /guides/curl-download-files
permalink_without_prefix: /guides/curl-download-files
lang: en
---

**Table of contents**

* TOC
{:toc}

## Introduction

This guide is intended to teach you the basic ways to download files using [curl](https://github.com/curl/curl). As you follow these instructions, keep in mind that your computer's files and folders likely will be different from the samples. If you already have a lot of experience with the terminal, check out [the commands on the homepage for quick reference material](/).

## Prerequisites

In order follow this guide, you will need:

* Access to a Unix terminal on any Linux or a macOS environment.
* To know how to open a terminal window. If you are not sure, visit the instructions for [macOS](open-terminal-macos) or Linux (coming soon).
* A file you want to download. We are using `https://terminalcheatsheet.com/sample-file.jpg` as an example in this guide.
* The curl utility installed on your computer. Most macOS and Linux computers have it preinstalled. If not, you'll need to review the technical instructions [on the curl installation website](https://curl.haxx.se/docs/install.html){:target="_blank" rel="noopener"}.

## Downloading a file

Start by opening your terminal.

`curl` is a "command-line tool for transferring data specified with URL syntax". This means it can download files from URLs.

For example, [https://terminalcheatsheet.com/sample-file.jpg](https://terminalcheatsheet.com/sample-file.jpg){:target="_blank" rel="noopener"} returns an image file that we can download with curl.

### Save with the filename from the URL

If we want to download the file and save it with the same name, we can use this command:

```
curl --remote-name [URL]
```

`[URL]` is the URL we want to download the file from. `--remote-name` instructs curl to use the name from the URL as the name for the file on the computer.

We can use this shorter command to do the same:

```
curl -O [URL]
```

`-O` is a short way of writing `--remote-name` from the previous command.

### Save with a different filename

If we want to download the file and save it with a different name, we can use this command instead:

```
curl --output [FILENAME] [URL]
```

* `[URL]` - We tell `curl` the URL to download.
* `--output [FILENAME]` - We tell `curl` where to save the file.

We can use this shorter command to do the same:

```
curl -o [FILENAME] [URL]
```

* `[URL]` - We tell `curl` the URL to download.
* `-o [FILENAME]` - We tell `curl` where to save the file.

## Wrapping up

Now you know a bit about using `curl` to download files from a URL.
