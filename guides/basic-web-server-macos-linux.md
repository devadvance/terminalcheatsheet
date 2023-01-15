---
layout: guide-layout
title: How to start a basic web server on macOS or Linux
excerpt: This guide teaches you how to use Python to start a basic web server from any folder on your macOS or Linux computer.
permalink: /guides/basic-web-server-macos-linux
permalink_without_prefix: /guides/basic-web-server-macos-linux
lang: en
---

**Table of contents**

* TOC
{:toc}

## Introduction

If you are working on webpages or other web content, you may need a easy and quick way to start a basic web server. This guide will teach you a Python command to start a basic web server on your computer. As you follow these instructions, keep in mind that your computer's files and folders likely will be different from the samples. If you already have a lot of experience with the terminal, check out [the commands on the homepage for quick reference material](/).

## Prerequisites

In order follow this guide, you will need:

* Access to a Unix terminal on any macOS or Linux environment.
* To know how to open a terminal window. If you are not sure, visit the instructions for [macOS](open-terminal-macos) or Linux (coming soon).
* To know how to navigate files and folders on a terminal. If you are not sure, follow [this guide first to learn how](navigate-terminal).
* Python3 installed on your computer. This comes installed by default on recent versions of macOS and many Linux distributions.

## Start by finding the right folder

First, you need to navigate to the folder where your web pages or web content is saved. If you are not sure how to do this, you may want to read [this guide first](navigate-terminal).

Let us say that your web content is in the folder `/home/user/examples`. We want to do three things:

1. Make sure we are in the right working directory using `pwd`.
2. Check if we have web content in the folder using `ls`.
3. Check if the web content is in the right format, such as HTML, using `cat`.

Here is the combination of the steps:

<div class="center guideimages">
<figure class="fill-parent">
  <video playsinline autoplay loop muted
    width="665"
    height="387"
    class="responsive"
    title="Navigating and checking web content">
    <source src="/assets/guides/basic-web-server-macos-linux/checking-web-content-en.webm"
      type="video/webm" />
    <source src="/assets/guides/basic-web-server-macos-linux/checking-web-content-en.mp4"
      type="video/mp4" />
    <div fallback>
      <p>This browser does not support the video element.</p>
    </div>
  </video>
  <figcaption class="center">Navigating and checking web content</figcaption>
</figure>
</div>

In the above example, we use `pwd` to verify that `/home/user/examples` is our working directory. Then we use `ls` to list the contents of the working directory to make sure we have an HTML file in there. You can note the **hello.html** file.

Finally, we view the contents of **hello.html** using `cat` to make sure it is really HTML.

We are now ready to start our web server!

## Start the basic Python web server

Since it is frequently installed on computers by default, we are going to use Python to run a basic web server.

We are going to use this command to start a web server: `python3 -m http.server 8000`
{% include body-copy-button.html data-command="python3 -m http.server 8000" %}

Let us explore what this command does:

* `python3` instructs the terminal to use Python 3 to do something.
* `-m http.server` instructs Python to run a web server.
* `8000` instructs Python to use 8000 as the port for the web server.

Let's try running it:

<div class="center guideimages">
<figure class="fill-parent">
  <video playsinline autoplay loop muted
    width="665"
    height="387"
    class="responsive"
    title="Start Python web server">
    <source src="/assets/guides/basic-web-server-macos-linux/start-python-http-server-en.webm"
      type="video/webm" />
    <source src="/assets/guides/basic-web-server-macos-linux/start-python-http-server-en.mp4"
      type="video/mp4" />
    <div fallback>
      <p>This browser does not support the video element.</p>
    </div>
  </video>
  <figcaption class="center">Start Python web server</figcaption>
</figure>
</div>

If you observe the above, the web server is now running on your computer.

## Check your web content

Next, we can check if our web content is showing in a web browser. We can open a local URL to browse the content: `http://localhost:8000`
{% include body-copy-button.html data-command="http://localhost:8000" %}

In our example above, this is what we observe in a web browser:

<div class="center guideimages">
  <img src="/assets/guides/basic-web-server-macos-linux/directory-listing-en.png" width="665" height="387" alt="Directory listing in the web browser" class="responsive" />
</div>

In our example, we did not have a file called **index.html** so our web browser listed the available files. You can click on a specific file to open it in the browser. Let us click on the **hello.html** that we checked earlier:

<div class="center guideimages">
  <img src="/assets/guides/basic-web-server-macos-linux/hello-world-page-en.png" width="665" height="387" alt="Hello world page" class="responsive" />
</div>

We now observe the web page!

## Stop the basic Python web server

When you are finished using the web server, you can stop it from the terminal. To do this, press `Ctrl-C` on your keyboard. This means pressing the `Ctrl` and `C` keys at the same time.

You will observe a result like this:

<div class="center guideimages">
<figure class="fill-parent">
  <video playsinline autoplay loop muted
    width="665"
    height="387"
    class="responsive"
    title="Stop Python web server">
    <source src="/assets/guides/basic-web-server-macos-linux/stop-python-http-server-en.webm"
      type="video/webm" />
    <source src="/assets/guides/basic-web-server-macos-linux/stop-python-http-server-en.mp4"
      type="video/mp4" />
    <div fallback>
      <p>This browser does not support the video element.</p>
    </div>
  </video>
  <figcaption class="center">Stop Python web server</figcaption>
</figure>
</div>

## Conclusion

You have learned how to start a basic web server on your computer. This will help you with tasks like web development and Python programming. If you are interested in learning more or programming in Python, you can visit [https://www.python.org](https://www.python.org){:target="_blank" rel="noopener"}.