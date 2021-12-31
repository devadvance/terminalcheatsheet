---
layout: guide-layout
title: 如何在macOS或Linux上启动基本的web服务器
excerpt: 本指南将教您如何使用Python从macOS或Linux计算机上的任何文件夹启动基本的web服务器。
permalink: /zh-CN/guides/basic-web-server-macos-linux
permalink_without_prefix: /guides/basic-web-server-macos-linux
lang: zh-CN
---

**目录**

* 目录
{:目录}

## 导言

如果您正在处理网页或其他web内容，则可能需要一种简单快捷的方法来启动基本web服务器。 本指南将教你一个Python命令在您的计算机上启动一个基本的web服务器。 按照这些说明操作时，请记住，计算机的文件和文件夹可能与示例不同。 如果您已经有很多使用终端的经验，请查看[主页上的命令以获取快速参考资料](/zh-CN/).

## 先决条件

为了遵循本指南，您需要:

* 在任何macOS或Linux环境中访问Unix终端。
* 要知道如何打开终端窗口。 如果您不确定，请访问[mac OS](open-terminal-macos) 或Linux（即将推出）的说明。
* 要知道如何浏览终端上的文件和文件夹。 如果您不确定，请按照[本指南首先了解如何](navigate-terminal)。
* Python3安装在您的计算机上。 这是默认安装在最新版本的macOS和许多Linux发行版上。

## 首先找到正确的文件夹

首先，您需要导航到保存网页或web内容的文件夹。 如果你不知道如何做到这一点，你可能想阅读[本指南第一](navigate-terminal)。

让我们说，你的web内容在文件夹`/home/user/examples`中。 我们要做三件事:

1. 确保我们使用"pwd"在正确的工作目录中。
2. 检查文件夹中是否有使用"ls"的web内容。
3. 使用"cat"检查web内容是否采用正确的格式，例如HTML。

以下是步骤的组合:

<div class="center guideimages">
  <amp-anim src="/assets/guides/basic-web-server-macos-linux/checking-web-content-en.gif" width="665" height="387" alt="Navigating and checking web content" layout="responsive"></amp-anim>
</div>

在上面的例子中，我们使用`pwd`来验证`/home/user/examples`是我们的工作目录。 然后我们使用'ls'列出工作目录的内容，以确保我们在那里有一个HTML文件。 你可以注意到**你好。html**文件。

最后，我们查看**hello的内容。html**使用'猫'，以确保它是真正的HTML。

我们现在已经准备好开始您的web服务器！

##启动基本Python web服务器

由于默认情况下它经常安装在计算机上，因此我们将使用Python来运行基本的web服务器。

我们将使用此命令来启动web服务器:`python3 -m http.server 8000` <amp-iframe sandbox="allow-scripts"
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

让我们来看看这个命令的作用:

* 'python3'指示终端使用Python3做一些事情。
* '-m http.服务器"指示Python运行web服务器。
* '8000'指示Python使用8000作为web服务器的端口。

让我们尝试运行它:

<div class="center guideimages">
  <amp-anim src="/assets/guides/basic-web-server-macos-linux/start-python-http-server-en.gif" width="665" height="387" alt="Start Python web server" layout="responsive"></amp-anim>
</div>

如果您观察上述情况，web服务器现在正在您的计算机上运行。

##检查您的网页内容

接下来，我们可以检查您的web内容是否显示在web浏览器中。 我们可以打开一个本地URL来浏览内容:`http://localhost:8000` <amp-iframe sandbox="allow-scripts"
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

在我们上面的例子中，这是我们在web浏览器中观察到的:

<div class="center guideimages">
  <amp-img src="/assets/guides/basic-web-server-macos-linux/directory-listing-en.png" width="665" height="387" alt="Directory listing in the web browser" layout="responsive"></amp-img>
</div>

在我们的例子中，我们没有一个名为**index的文件。html**所以你的web浏览器列出了可用的文件。 您可以点击一个特定的文件在浏览器中打开它。 让我们点击**你好。我们之前检查过的html**:

<div class="center guideimages">
  <amp-img src="/assets/guides/basic-web-server-macos-linux/hello-world-page-en.png" width="665" height="387" alt="Hello world page" layout="responsive"></amp-img>
</div>

我们现在观察网页！

##停止基本的Python web服务器

当您使用完web服务器后，您可以从终端停止它。 要做到这一点，按下键盘上的"Ctrl-C"。 这意味着在同一时间按下`Ctrl`和`C`键。

你会观察到这样的结果:

<div class="center guideimages">
  <amp-anim src="/assets/guides/basic-web-server-macos-linux/stop-python-http-server-en.gif" width="665" height="387" alt="Stop Python web server" layout="responsive"></amp-anim>
</div>

## 结论

您已经学会了如何在计算机上启动基本的web服务器。 这将帮助您完成web开发和Python编程等任务。 如果你有兴趣学习更多或Python编程，你可以访问[https://www.python.org](https://www.python.org){:target="_blank" rel="noopener"}.