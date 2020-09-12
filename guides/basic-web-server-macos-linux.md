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

If you are working on webpages or other web content, you may need a easy and quick way to start a basic web server. This guide will teach you a simple Python command to start a basic web server on your computer. If you are an advanced user who already has experience with terminal, this guide is less useful. As you follow these instructions, keep in mind that your computer's files and folders likely will be different from the samples.

## Prerequisites

In order follow this guide, you will need:

* Access to a Unix terminal on any macOS or Linux environment.
* To know how to open a terminal window. If you are not sure, see the instructions for [macOS](open-terminal-macos) or Linux (coming soon).
* To know how to navigate files and folders on a terminal. If you are not sure, follow [this guide first to learn how](navigate-terminal).
* Python3 installed on your computer. This comes installed by default on recent versions of macOS and many Linux distributions.

## Start by finding the right folder

First, you need to navigate to the folder where your web pages or web content is saved. If you are not sure how to do this, you may want to read [this guide first](navigate-terminal).

Let us say that your web content is in the folder `/home/user/examples`. We want to do three things:

1. Make sure we are in the right working directory using `pwd`.
2. Check if we have web content in the folder using `ls`.
3. Check if the web content is in the right format, such as HTML, using `cat`.

Here is what that looks like:

<div class="center guideimages">
  <amp-anim src="/assets/guides/basic-web-server-macos-linux/checking-web-content-en.gif" width="665" height="387" alt="Navigating and checking web content" layout="responsive"></amp-anim>
</div>

In the above example, we use `pwd` to see that `/home/user/examples` is our working directory. Then we use `ls` to list the contents of the working directory to make sure we have an HTML file in there. You can see the **hello.html** file.

Finally, we view the contents of **hello.html** using `cat` to make sure it is really HTML.

We are now ready to start our web server!

## Start the basic Python web server

Since it is frequently installed on computers by default, we are going to use Python to run a basic web server.

We are going to use this command to start a web server: `python3 -m http.server 8000` <amp-iframe sandbox="allow-scripts"
  class="copy-frame{% if page.direction == "rtl" %} button-rtl{% endif %}"
  title="Command copy button iframe"
  width="84"
  height="36"
  frameborder="0"
  src="{{site.url}}/copier.html#python3 -m http.server 8000">
  <button class="pure-button button-large button-primary"
    placeholder
    disabled>Copy</button>
</amp-iframe>

Let us explore what this command does:

* `python3` instructs the terminal to use Python 3 to do something.
* `-m http.server` instructs Python to run a web server.
* `8000` instructs Python to use 8000 as the port for the web server.

Let's try running it:

<div class="center guideimages">
  <amp-anim src="/assets/guides/basic-web-server-macos-linux/start-python-http-server-en.gif" width="665" height="387" alt="Start Python web server" layout="responsive"></amp-anim>
</div>

If you see the above, the web server is now running on your computer.

## Check your web content

Next, we can check if our web content is showing in a web browser. We can open a local URL to see the content: `http://localhost:8000` <amp-iframe sandbox="allow-scripts"
  class="copy-frame{% if page.direction == "rtl" %} button-rtl{% endif %}"
  title="Command copy button iframe"
  width="84"
  height="36"
  frameborder="0"
  src="{{site.url}}/copier.html#http://localhost:8000">
  <button class="pure-button button-large button-primary"
    placeholder
    disabled>Copy</button>
</amp-iframe>

In our example above, this is what we see in a web browser:

<div class="center guideimages">
  <amp-img src="/assets/guides/basic-web-server-macos-linux/directory-listing-en.png" width="665" height="387" alt="Directory listing in the web browser" layout="responsive"></amp-img>
</div>

In our example, we did not have a file called **index.html** so our web browser listed the available files. You can click on a specific file to see it in the browser. Let us click on the **hello.html** that we checked earlier:

<div class="center guideimages">
  <amp-img src="/assets/guides/basic-web-server-macos-linux/hello-world-page-en.png" width="665" height="387" alt="Hello world page" layout="responsive"></amp-img>
</div>

We now see the web page!

## Stop the basic Python web server

When you are finished using the web server, you can stop it from the terminal. To do this, press `Ctrl-C` on your keyboard. This means pressing the `Ctrl` and `C` keys at the same time.

You will see a result like this:

<div class="center guideimages">
  <amp-anim src="/assets/guides/basic-web-server-macos-linux/stop-python-http-server-en.gif" width="665" height="387" alt="Stop Python web server" layout="responsive"></amp-anim>
</div>

## Conclusion

You have learned how to start a basic web server on your computer. This will help you with tasks like web development and Python programming. If you are interested in learning more or programming in Python, you can visit [https://www.python.org](https://www.python.org){:target="_blank" rel="noopener"}.