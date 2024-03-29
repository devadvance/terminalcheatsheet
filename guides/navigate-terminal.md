---
layout: guide-layout
title: How to navigate files and folders on a terminal
excerpt: This guide is intended to teach you the basics of navigating files and folders on a terminal.
permalink: /guides/navigate-terminal
permalink_without_prefix: /guides/navigate-terminal
lang: en
---

**Table of contents**

* TOC
{:toc}

## Introduction

This guide is intended to teach you the basics of navigating files and folders on a terminal. As you follow these instructions, keep in mind that your computer's files and folders likely will be different from the samples. If you already have a lot of experience with the terminal, check out [the commands on the homepage for quick reference material](/).

## Prerequisites

In order follow this guide, you will need:

* Access to a Unix terminal on any Linux or a macOS environment.
* To know how to open a terminal window. If you are not sure, visit the instructions for [macOS](open-terminal-macos) or Linux (coming soon).

## Let's get started!

Start by opening your terminal.

When using terminal, you do work from inside of a specific folder on your computer. You can always access items from other folders on your computer, but terminal will keep track of the folder you are currently inside of. This is known as your **working directory**.

As soon as you open terminal, you will be inside of a working directory. Type `pwd` in the terminal and press **Enter**. `pwd` stands for "print working directory". The output from this command tells you which folder is your current working directory.

In the sample screenshot below, our working directory is a folder called **examples**:

<div class="center guideimages">
  <img src="/assets/guides/navigate-work-files/pwd-en.png" width="665" height="387" alt="terminal pwd command" class="responsive" />
</div>

Next, you can explore the contents of the working directory. Type `ls` into your terminal and press **Enter**. `ls` stands for "list". This command lists all the files and folders in your working directory. In our sample, it shows all of the files and folders in **examples**:

<div class="center guideimages">
  <img src="/assets/guides/navigate-work-files/ls-en.png" width="665" height="387" alt="terminal list command" class="responsive" />
</div>

This is similar to opening your file browser application and examining at the contents of your working directory folder:

<div class="center guideimages">
  <img src="/assets/guides/navigate-work-files/ls-finder-en.png" width="665" height="387" alt="file browser show contents" class="responsive" />
</div>

You can list all the contents in folders that aren't your working directory by typing `ls [FOLDER_NAME]`. This is like taking a peek inside another folder, without changing our working directory. In the example below, we are examining at the contents of **folder1**. We can observe that **folder1** has only one file called **file3.pdf**:

<div class="center guideimages">
  <img src="/assets/guides/navigate-work-files/ls-folder1-en.png" width="665" height="387" alt="ls command folder" class="responsive" />
</div>

This is similar to examining at the contents of a folder within your working directory in your file browser application:

<div class="center guideimages">
  <img src="/assets/guides/navigate-work-files/ls-folder1-finder-en.png" width="665" height="387" alt="file browser folder peek" class="responsive" />
</div>

The `ls` command has additional options that can change how it functions.

Try typing `ls -a` and pressing **Enter** to display all files, including hidden files. On many computers, these files begin with a period and are hidden by default. Common examples of these files include things like "*.DS_Store*" (on macOS), "*.profile*" (on Linux), and "*.gitignore*" (when using Git for your projects).

Note how we can now observe **.hidden-file**, which wasn't being displayed with the previous `ls` command:

<div class="center guideimages">
  <img src="/assets/guides/navigate-work-files/ls-a-en.png" width="665" height="387" alt="terminal ls all command" class="responsive" />
</div>

Another option for listing files is typing `ls -l` and pressing **Enter**. This option generates a long listing. This means that it displays additional details for the files and folders. In addition to the names of files and folders, it will also show attributes, such as when they were last modified and their size:

<div class="center guideimages">
  <img src="/assets/guides/navigate-work-files/ls-l-en.png" width="665" height="387" alt="terminal ls long command" class="responsive" />
</div>

Similar to many terminal commands, you can combine these two options. To do this, type `ls -la` and press **Enter**, which will list **all** items in **long** format:

<div class="center guideimages">
  <img src="/assets/guides/navigate-work-files/ls-la-en.png" width="665" height="387" alt="terminal ls long all command" class="responsive" />
</div>

## Navigating folders

You may have noticed that our working directory has multiple parts in the name. In general, the `/` (slash) character means that you are within a folder. So, when you observe `/home/user/examples` as your working directory, that means that:

* You are inside of the **examples** folder, which is your working directory.
* The **examples** folder is inside of the **user** folder.
* The **user** folder is inside of the **home** folder.
* The **home** folder is inside of your computer file system and there is nothing beyond it.

Now we can change our working directory. In our example, we saw two folders when using `ls` to list everything (**folder1** and **folder2**).

Type `cd [FOLDER_NAME]` and press **Enter**. Your working directory is now changed. `cd` stands for "change directory". You can type `pwd` again and press **Enter** to verify that you changed your working directory. In our sample, we changed our working directory to **folder1**:

<div class="center guideimages">
  <img src="/assets/guides/navigate-work-files/cd-folder1-en.png" width="665" height="387" alt="terminal cd command" class="responsive" />
</div>

This is similar to clicking into a folder in your file browser application. You have completely switched the folder you are in:

<div class="center guideimages">
  <img src="/assets/guides/navigate-work-files/cd-folder1-finder-en.png" width="665" height="387" alt="macOS folder change directory" class="responsive" />
</div>

If you wanted to go "up" to our previous folder, you can type `cd ..` and press **Enter**. This will bring you up one folder level:

<div class="center guideimages">
  <img src="/assets/guides/navigate-work-files/cd-folder1-and-back-en.png" width="665" height="387" alt="terminal cd folder1 and back" class="responsive" />
</div>

This idea of going "down" into a folder or "up" out of a folder is very common when using terminal. When terminal commands, you use the names of folders when going "down" a level and `..` to mean going "up" a level.

## Viewing file contents

You are probably excited to start working with files with terminal. This can depend on the *type* of file, since viewing a picture file is different from reading a document file.

For text files, a useful command when working in terminal is typing `cat [FILE_NAME]` and pressing **Enter**. The command `cat` is short for "concatenate" and it has multiple uses.

One of the most common uses is to display the contents of a text file in the terminal. In the screenshot below, we are displaying the contents of **hello.txt** in our working directory:

<div class="center guideimages">
  <img src="/assets/guides/navigate-work-files/cat-hello-en.png" width="665" height="387" alt="terminal cat command" class="responsive" />
</div>

## Conclusion

Well done! You now know the essentials of navigating files and folders in your terminal. This includes changing your working directory, listing files and folders, and viewing the contents of a text file.

In a future guide, you will learn how to create and modify files and folders.
