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

As soon as you open a terminal, you're working in a folder on your computer, otherwise referred to as your **working directory**. Type `pwd` in the terminal. **pwd** stands for 'print working directory'. The output from this command tells you where you are in your computer file system. 

For example, in the screenshot below, we are in our examples folder in our home directory. Keep in mind, as you follow these instructions, you'll be seeing different paths in your terminal, because your files and folders will probably differ. 

<div class="center guideimages">
  <amp-img src="/assets/guides/navigate-work-files/pwd.png" width="500" height="350" alt="terminal pwd command" layout="fixed"></amp-img>
</div>

Next, explore the contents of your working directory. Type `ls` into your terminal. **ls** stands for 'list'. This command will list all the files and folders in your working directory.

<div class="center guideimages">
  <amp-img src="/assets/guides/navigate-work-files/ls.png" width="500" height="350" alt="terminal list command" layout="fixed"></amp-img>
</div>

This is the equivalent of opening your Finder window and looking at the contents of your working directory.

<div class="center guideimages">
  <amp-img src="/assets/guides/navigate-work-files/finder-files.png" width="500" height="350" alt="MacOS folder files" layout="fixed"></amp-img>
</div>

You can also list all the contents in directories that aren't your working directory by typing `ls [FOLDER_NAME]`. We're taking a peek inside another folder, without changing our working directory. In the example below, we are looking at the contents of folder1. We can see that folder1 has only one file called file1.txt.

<div class="center guideimages">
  <amp-img src="/assets/guides/navigate-work-files/ls-folder.png" width="500" height="350" alt="ls command folder" layout="fixed"></amp-img>
</div>

This is the equivalent of looking at the contents of a folder in your working directory. 

<div class="center guideimages">
  <amp-img src="/assets/guides/navigate-work-files/finder-click-folder.png" width="500" height="350" alt="MacOS folder contents peek" layout="fixed"></amp-img>
</div>

Try typing `ls -a` to display all files, including files with filenames that start with a dot. These files are hidden by default. A common example of such a file is a '.gitignore' file. Note how we are now displaying **.hidden-file** now, which wasn't being displayed with the previous **ls** command.

<div class="center guideimages">
  <amp-img src="/assets/guides/navigate-work-files/ls-all.png" width="500" height="350" alt="terminal ls all command" layout="fixed"></amp-img>
</div>

`ls -l` generates a long listing. This will list all the files in your working directory, and show you file attributes such as file sizes and last modified dates.

<div class="center guideimages">
  <amp-img src="/assets/guides/navigate-work-files/ls-long.png" width="500" height="350" alt="terminal ls long command" layout="fixed"></amp-img>
</div>

## Navigating directories

Let's try changing our working directory now. Choose a folder from when you typed **ls** into the terminal. Type `cd [FOLDER_NAME]` and now your directory is changed. **cd** stands for 'change directory'. You can type **pwd** again to confirm your updated directory location.

<div class="center guideimages">
  <amp-img src="/assets/guides/navigate-work-files/cd.png" width="500" height="350" alt="termianl cd command" layout="fixed"></amp-img>
</div>

This is the equivalent of clicking into a new folder. You're no longer in your previous working directory. You've switched locations.

<div class="center guideimages">
  <amp-img src="/assets/guides/navigate-work-files/finder-cd.png" width="500" height="350" alt="MacOS folder change directory" layout="fixed"></amp-img>
</div>

If you wanted to go back to our previous location, you can type `cd ..`. This will bring you back one directory level. Likewise, you can go back more than one directory by typing `cd../../`. Continue adding **../** as appropiate depending on how many levels you're trying to go down.

<div class="center guideimages">
  <amp-img src="/assets/guides/navigate-work-files/cd-back.png" width="500" height="350" alt="terminal cd back" layout="fixed"></amp-img>
</div>

## Viewing File Contents

A useful command when working in terminal is `cat [FILE_NAME]`. The command **cat** is short for concatenate and it has multiple uses. The most common use case is to display the contents of a file in the terminal. In the screenshot below, we are displaying the contents of file3.txt.

<div class="center guideimages">
  <amp-img src="/assets/guides/navigate-work-files/cat.png" width="500" height="350" alt="terminal cat command" layout="fixed"></amp-img>
</div>

## Conclusion

Congrats! You now know how to navigate through directories in your terminal and change your current working directory. You can explore the contents of directories. You can also look at contents of files. 

The next step is learning how to create and modify files and directories. 