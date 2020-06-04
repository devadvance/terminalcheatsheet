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

First, let's figure out exactly where you are. This is likely to be your home folder. Try typing `pwd` in the terminal. The output of this response tells you where you are in your local directory. 

Type `ls` into your terminal and you will see the files and folders in your current directory. 

## Navigating directories

Let's try changing our directory now. Choose a folder from when you typed **ls** into the terminal. Type `cd <folder>` and now your directory is changed. You can type **pwd** to confirm your updated directory location. 

If you wanted to go back to our previous location, you can type `cd ..`. This will bring you back one directory. Likewise, you can go back more than one directory by typing `cd../../`. Continue adding **../** as appropiate depending on how many levels you're trying to go down. 

## Other useful tips

A useful command when working in terminal is `cat <file>`. You can use this command to display the contents of a file in the terminal. 

Something to keep in mind when working in terminal, is the power of the **tab button**. The tab button can serve as an autocomplete. For example, if you want to change directories into a folder with a long name, you can type the first few letters of the folder name, and press tab to autocomplete the name. This small shortcut can help save time and avoid typos. 
