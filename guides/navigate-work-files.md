---
layout: guide-layout
title: How to navigate and work with files on a terminal
excerpt: This guide is intended to teach you the basics of navigating and working with files on a terminal.
permalink: /guides/navigate-work-files
permalink_without_prefix: /guides/navigate-files
lang: en
---

**Table of contents**

* TOC
{:toc}

## Introduction

This guide is intended to teach you the basics of navigating and working with files on a terminal. If you are an advanced user who already has experience with terminal, this guide is less useful.

## Prerequisites

In order follow this guide, you will need:

* Access to a Unix terminal on any Linux or a MacOS environment.

## Let's get started!

Start by opening your terminal.

First, let's figure out exactly where you are. This is likely to be your home folder. Try typing `pwd` in the terminal. **pwd** stands for 'print working directory'. The output of this response tells you where you are in your local directory.

<div class="center guideimages">
  <amp-img src="/assets/guides/navigate-work-files/pwd.png" width="500" height="350" alt="terminal pwd command" layout="fixed"></amp-img>
</div>

Type `ls` into your terminal and you will see the files and folders in your current directory. **ls** stands for 'list'.

<div class="center guideimages">
  <amp-img src="/assets/guides/navigate-work-files/ls.png" width="500" height="350" alt="terminal list command" layout="fixed"></amp-img>
</div>

This is the equivalent of opening your Finder window and looking at the contents of any folder.

<div class="center guideimages">
  <amp-img src="/assets/guides/navigate-work-files/finder-files.png" width="500" height="350" alt="MacOS folder files" layout="fixed"></amp-img>
</div>

You can also list all the files in directories that aren't your working directory like by typing  `ls <folder>`. We're taking a peek inside another folder, while remaining in our current directory.

<div class="center guideimages">
  <amp-img src="/assets/guides/navigate-work-files/ls-folder.png" width="500" height="350" alt="ls command folder" layout="fixed"></amp-img>
</div>

This is the equivalent of looking at the contents of a folder in your working directory. 

<div class="center guideimages">
  <amp-img src="/assets/guides/navigate-work-files/finder-click-folder.png" width="500" height="350" alt="MacOS folder contents peek" layout="fixed"></amp-img>
</div>

Try typing `ls -a` to to display all files, including files with filenames that start with a dot. These files are hidden by default. A common example of such a file is a '.gitignore' file. Note how we are no longer displaying **.hidden-file** now, which wasn't being displayed with the **ls** command.

<div class="center guideimages">
  <amp-img src="/assets/guides/navigate-work-files/ls-all.png" width="500" height="350" alt="terminal ls all command" layout="fixed"></amp-img>
</div>

`ls -l` generates a long listing. This will show you file attributes such as file sizes and last modified dates.

<div class="center guideimages">
  <amp-img src="/assets/guides/navigate-work-files/ls-long.png" width="500" height="350" alt="terminal ls long command" layout="fixed"></amp-img>
</div>

## Navigating directories

Let's try changing our directory now. Choose a folder from when you typed **ls** into the terminal. Type `cd <folder>` and now your directory is changed. **cd** stands for 'change directory'. You can type **pwd** again to confirm your updated directory location.

<div class="center guideimages">
  <amp-img src="/assets/guides/navigate-work-files/cd.png" width="500" height="350" alt="termianl cd command" layout="fixed"></amp-img>
</div>

This is the equivalent of clicking into a new folder. You're no longer in your previous working directory. You've switched locations.

<div class="center guideimages">
  <amp-img src="/assets/guides/navigate-work-files/finder-cd.png" width="500" height="350" alt="MacOS folder change directory" layout="fixed"></amp-img>
</div>

If you wanted to go back to our previous location, you can type `cd ..`. This will bring you back one directory. Likewise, you can go back more than one directory by typing `cd../../`. Continue adding **../** as appropiate depending on how many levels you're trying to go down.

<div class="center guideimages">
  <amp-img src="/assets/guides/navigate-work-files/cd-back.png" width="500" height="350" alt="terminal cd back" layout="fixed"></amp-img>
</div>

## Viewing File Contents

A useful command when working in terminal is `cat <file>`. The command **cat** is short for concatenate and it has multiple uses. The most common use case is to display the contents of a file in the terminal.

<div class="center guideimages">
  <amp-img src="/assets/guides/navigate-work-files/cat.png" width="500" height="350" alt="terminal cat command" layout="fixed"></amp-img>
</div>