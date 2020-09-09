---
layout: guide-layout
title: How to use curl to test a REST API
excerpt: How to use curl to test a REST API
permalink: /guides/curl-rest-api
permalink_without_prefix: /guides/curl-rest-api
lang: en
---

**Table of contents**

* TOC
{:toc}

## Introduction

This guide is intended to teach you the basics of interacting with a REST API using [curl](https://github.com/curl/curl). If you are an advanced user who already has experience with terminal, this guide is less useful. As you follow these instructions, keep in mind that your computer's files and folders likely will be different from the samples.

## Prerequisites

In order follow this guide, you will need:

* Access to a Unix terminal on any Linux or a macOS environment.
* To know how to open a terminal window. If you are not sure, see the instructions for [macOS](open-terminal-macos) or Linux (coming soon).
* A REST API that you want to interact with. We are using `https://jsonplaceholder.typicode.com` as an example in this guide.
* The curl utility installed on your computer. Most macOS and Linux computers have it preinstalled. If not, you'll need to review the technical instructions [on the curl installation website](https://curl.haxx.se/docs/install.html){:target="_blank" rel="noopener"}.

## Let's start with GET!

Start by opening your terminal.

curl is a "command-line tool for transferring data specified with URL syntax", which makes it very useful for interacting with REST APIs and other web resources. It has thousands of uses, but we are going to review just a few in this guide.

Let us say you have a REST API that you want to interact with. For example, [https://jsonplaceholder.typicode.com/todos/](https://jsonplaceholder.typicode.com/todos/1){:target="_blank" rel="noopener"} returns JSON data that looks like this:

```
{
	"userId": 1,
	"id": 1,
	"title": "delectus aut autem",
	"completed": false
}
```

While we can open this example URL in our web browser, many REST APIs will not let us do that. Let's try using curl instead.

In your terminal window, type `curl https://jsonplaceholder.typicode.com/todos/1` and press **Enter**. You should see a result similar to this:

<div class="center guideimages">
  <amp-anim src="/assets/guides/curl-rest-api/curl-get-basic-en.gif" width="665" height="387" alt="Demo of basic curl command" layout="responsive"></amp-anim>
</div>

Without any options, `curl` defaults to interacting with the server using a **GET** HTTP request method, which is generally used for reading data only. We will cover the other HTTP request methods later in this guide.

Let's add the `-o` option to save the output as a file instead of showing it directly in the terminal window. Type `curl -o test.json https://jsonplaceholder.typicode.com/todos/1` and press **Enter**:

<div class="center guideimages">
  <amp-anim src="/assets/guides/curl-rest-api/curl-get-output-en.gif" width="665" height="387" alt="Demo of basic curl command with file output" layout="responsive"></amp-anim>
</div>

If we want, we can see more detailed information about this interaction over the network. To do this, you can add the `-v` option to any `curl` command. Type `curl -v https://jsonplaceholder.typicode.com/todos/1` and press **Enter**:

<div class="center guideimages">
  <amp-anim src="/assets/guides/curl-rest-api/curl-get-verbose-en.gif" width="665" height="387" alt="Demo of basic curl command with verbose output" layout="responsive"></amp-anim>
</div>

## Using different HTTP request methods with curl

Now that we know how to do a basic query of a REST API using curl, we can try different HTTP methods. You can read a lot more about the different HTTP request methods on [Wikipedia](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol#Request_methods).

### POST

The **POST** HTTP request method is very frequently used to create or update data on the server when interacting with a REST API. In order to do that, you will need to know a couple new options for the `curl` command:

* `-X [HTTP_METHOD]` - We need to tell `curl` which HTTP request method to use. The `-X` option, followed by the method name, allows us to do that.
* `-H [HTTP_HEADER]` - When sending data to a server, we need to tell the server how to interpret those 1s and 0s. It could be JSON data, a form, an email, etc.
* `-d [YOUR_DATA]` - Finally, we need to specify which data `curl` should send to the server.

Let's put these options together into a complete command:

`curl -X POST -H 'Content-Type: application/json' -d '{"title": "foo","body": "bar","userId": 123}' https://jsonplaceholder.typicode.com/posts`

You can type or copy that into your terminal window and press **Enter** to send it, like this:

<div class="center guideimages">
  <amp-anim src="/assets/guides/curl-rest-api/curl-post-basic-en.gif" width="665" height="387" alt="Demo of POST curl command" layout="responsive"></amp-anim>
</div>

As you can tell, that was a lot of data to try to put in a single command. We can send data using a file instead to make it easier and repeatable.

Create a new file called `data.json` with the following data:

```
{
	"title": "foo",
	"body": "bar",
	"userId": 123
}
```

If you have created it successfully, you should be able to `cat` the file, like this:

<div class="center guideimages">
  <amp-anim src="/assets/guides/curl-rest-api/nano-datajson-en.gif" width="665" height="387" alt="Demo of data file" layout="responsive"></amp-anim>
</div>

Now you can use that file as part of your `curl` command. Instead of putting the data in the command, you can *refer* to the file by using `-d @[FILENAME]`. We can try it by typing `curl -X POST -H 'Content-Type: application/json' -d @data.json https://jsonplaceholder.typicode.com/posts` and pressing **Enter**:

<div class="center guideimages">
  <amp-anim src="/assets/guides/curl-rest-api/curl-post-file-en.gif" width="665" height="387" alt="Demo of POST curl command with a file" layout="responsive"></amp-anim>
</div>

### PUT

The **PUT** HTTP request method is often used to update existing data on the server when interacting with a REST API. Similar to example with **POST**, we want to set the method, data format, and data when using the `curl` command.

Let's try updating an existing item. Type `curl -X PUT -H 'Content-Type: application/json' -d '{"title": "foo_updated","body": "bar_updated","userId": 123}' https://jsonplaceholder.typicode.com/posts/1` and press **Enter**, like this:

<div class="center guideimages">
  <amp-anim src="/assets/guides/curl-rest-api/curl-put-basic-en.gif" width="665" height="387" alt="Demo of PUT curl command" layout="responsive"></amp-anim>
</div>

You can also use a data file the same way you did with the **POST** HTTP request method, by using `-d @[FILENAME]`.

### DELETE

If you want to remove data from the server, you will likely use the **DELETE** HTTP request method when interacting with a REST API. This is a bit more simple compared to the previous examples. You will use `-X DELETE` to specify the **DELETE** HTTP request method and specify a specific resource URL to delete. Try it by typing `curl -X DELETE https://jsonplaceholder.typicode.com/posts/1` and pressing **Enter**:

<div class="center guideimages">
  <amp-anim src="/assets/guides/curl-rest-api/curl-delete-basic-en.gif" width="665" height="387" alt="Demo of DELETE curl command" layout="responsive"></amp-anim>
</div>

You will notice that many REST APIs return either the deleted data or no data when using the **DELETE** HTTP request method.

### OPTIONS

Sometimes, we need to know what types of requests or data we can send to a server. To do this, you can use the **OPTIONS** HTTP request method.

You will need to use the `-v` option that you learned earlier. This will turn on more detailed output so that you can view the "options" that the server supports.

Let's try it by typing in `curl -v -X OPTIONS https://jsonplaceholder.typicode.com/posts` and pressing **Enter**:

<div class="center guideimages">
  <amp-anim src="/assets/guides/curl-rest-api/curl-options-verbose-en.gif" width="665" height="387" alt="Demo of OPTIONS curl command with verbose output" layout="responsive"></amp-anim>
</div>

As you scroll through your terminal window, you will see information like this:

```
...
< access-control-allow-credentials: true
< access-control-allow-methods: GET,HEAD,PUT,PATCH,POST,DELETE
...
```

That tells you which HTTP request methods the REST API server allows. It also tells you that authenticating and using credentials is allowed.

## Wrapping up

Now you know a bit about using `curl` to interact with REST APIs and servers. This is an extremely useful command and tool.
