---
布局: 指南布局
标题: 如何使用curl测试REST API
摘录: 如何使用curl测试REST API
永久链接: /guides/curl-rest-api-zh-CN
无前缀永久链接: /guides/curl-rest-api
语言: 中文
---

**目录**

* TOC
{:toc}

## 导言

本指南旨在教您使用[curl]与REST API交互的基础知识] (https://github.com/curl/curl). 按照这些说明操作时，请记住，计算机的文件和文件夹可能与示例不同。 如果您在mac OS上已经有很多使用终端的经验，请查看[主页上的命令以获取快速参考资料](/).

## 先决条件

为了遵循本指南，您需要:

* 在任何Linux或macOS环境中访问Unix终端。
* 要知道如何打开终端窗口。 如果您不确定，请访问[macOS]的说明](open-terminal-macos) 或 Linux (未来).
* 您要与之交互的REST API。 我们正在使用 `https://jsonplaceholder.typicode.com` 作为本指南中的一个例子。
* 计算机上安装的curl实用程序。 大多数macOS和Linux计算机都预装了它。 如果没有，您需要查看技术说明[在curl安装网站上](https://curl.haxx.se/docs/install.html){:target="_blank" rel="noopener"}.

## 让我们先从 GET!

首先打开终端。

curl是一个"用于传输使用URL语法指定的数据的命令行工具"，这使得它对于与REST API和其他web资源进行交互非常有用。 它有成千上万的用途，但我们将回顾本指南中的几个。

假设您有一个您想要与之交互的REST API。 例如, [https://jsonplaceholder.typicode.com/todos/1](https://jsonplaceholder.typicode.com/todos/1){:target="_blank" rel="noopener"} 返回类似于以下内容的JSON数据:

```
{
	"userId": 1,
	"id": 1,
	"title": "delectus aut autem",
	"completed": false
}
```

虽然我们可以在web浏览器中打开这个示例URL，但许多REST Api不会让我们这样做。 让我们尝试使用curl。

在终端窗口中，键入 `curl https://jsonplaceholder.typicode.com/todos/1` 然后按 **Enter**. 您应该遇到类似这样的结果:

<div class="center guideimages">
  <amp-anim src="/assets/guides/curl-rest-api/curl-get-basic-en.gif" width="665" height="387" alt="Demo of basic curl command" layout="responsive"></amp-anim>
</div>

没有任何选择, `curl` 默认使用以下命令与服务器进行 **GET** HTTP 请求方法, 其通常仅用于读取数据。 我们将在本指南后面介绍其他HTTP请求方法.

让我们添加 `-o` 选项将输出保存为文件，而不是直接在终端窗口中显示。 键入 `curl -o test.json https://jsonplaceholder.typicode.com/todos/1` 然后按 **Enter**:

<div class="center guideimages">
  <amp-anim src="/assets/guides/curl-rest-api/curl-get-output-en.gif" width="665" height="387" alt="Demo of basic curl command with file output" layout="responsive"></amp-anim>
</div>

如果我们愿意，我们可以通过网络检查有关这种交互的更详细的信息。 要做到这一点，你可以添加 `-v` 任何选项 `curl` 命令. 键入 `curl -v https://jsonplaceholder.typicode.com/todos/1` and press **Enter**:

<div class="center guideimages">
  <amp-anim src="/assets/guides/curl-rest-api/curl-get-verbose-en.gif" width="665" height="387" alt="Demo of basic curl command with verbose output" layout="responsive"></amp-anim>
</div>

## 在curl中使用不同的HTTP请求方法

现在我们知道如何使用curl对REST API进行基本查询，我们可以尝试不同的HTTP方法。 你可以在[Wikipedia]上阅读更多关于不同HTTP请求方法的信息](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol#Request_methods).

### POST

**POST** 当与REST API交互时，HTTP请求方法非常频繁地用于在服务器上创建或更新数据。 为了做到这一点，你需要知道'curl'命令的几个新选项:

* `-X [HTTP_METHOD]` - 我们需要告诉"curl"使用哪个HTTP请求方法。 `-X'选项，后跟方法名称，允许我们这样做。
* `-H [HTTP_HEADER]` - 当将数据发送到服务器时，我们需要告诉服务器如何解释这些1和0。它可能是JSON数据，表单，电子邮件等。
* `-d [YOUR_DATA]` - 最后，我们需要指定哪些数据"curl"应该发送到服务器。

让我们将这些选项组合成一个完整的命令:

`curl -X POST -H 'Content-Type: application/json' -d '{"title": "foo","body": "bar","userId": 123}' https://jsonplaceholder.typicode.com/posts`

您可以键入或复制到您的终端窗口，然后按 **Enter**:

<div class="center guideimages">
  <amp-anim src="/assets/guides/curl-rest-api/curl-post-basic-en.gif" width="665" height="387" alt="Demo of POST curl command" layout="responsive"></amp-anim>
</div>

正如你所说，这是一个很大的数据，试图把一个单一的命令。 我们可以使用文件来发送数据，以使其更容易和可重复。

创建一个名为`data.json` 具有以下数据:

```
{
	"title": "foo",
	"body": "bar",
	"userId": 123
}
```

如果您成功创建了它，您应该能够"cat"该文件，如下所示:

<div class="center guideimages">
  <amp-anim src="/assets/guides/curl-rest-api/nano-datajson-en.gif" width="665" height="387" alt="Demo of data file" layout="responsive"></amp-anim>
</div>

现在您可以将该文件用作"curl"命令的一部分。而不是将数据放在命令中，您可以*refer*通过使用文件 `-d @[FILENAME]`. 我们可以通过键入来尝试 `curl -X POST -H 'Content-Type: application/json' -d @data.json https://jsonplaceholder.typicode.com/posts` 并按下 **Enter**:

<div class="center guideimages">
  <amp-anim src="/assets/guides/curl-rest-api/curl-post-file-en.gif" width="665" height="387" alt="Demo of POST curl command with a file" layout="responsive"></amp-anim>
</div>

### PUT

在与REST API交互时，**PUT**HTTP请求方法通常用于更新服务器上的现有数据。 与**POST**的示例类似，我们希望在使用"curl"命令时设置方法，数据格式和数据。

让我们尝试更新现有项目。 键入 `curl -X PUT -H 'Content-Type: application/json' -d '{"title": "foo_updated","body": "bar_updated","userId": 123}' https://jsonplaceholder.typicode.com/posts/1` 并按下 **Enter**, 示例:

<div class="center guideimages">
  <amp-anim src="/assets/guides/curl-rest-api/curl-put-basic-en.gif" width="665" height="387" alt="Demo of PUT curl command" layout="responsive"></amp-anim>
</div>

您也可以使用与使用**POST**HTTP请求方法相同的方法来使用数据文件 `-d @[FILENAME]`.

### DELETE

如果您想从服务器中删除数据，您可能会在与REST API交互时使用**DELETE**HTTP请求方法。 与前面的例子相比，这有点简单。 您将使用'-X DELETE'指定**DELETE**HTTP请求方法并指定要删除的特定资源URL。 通过键入"curl-X DELETE"来尝试https://jsonplaceholder.typicode.com/posts/1'并按下**Enter**:

<div class="center guideimages">
  <amp-anim src="/assets/guides/curl-rest-api/curl-delete-basic-en.gif" width="665" height="387" alt="Demo of DELETE curl command" layout="responsive"></amp-anim>
</div>

您会注意到，当使用**DELETE**HTTP请求方法时，许多REST Api会返回已删除的数据或没有数据。

### 选项

有时，我们需要知道我们可以向服务器发送哪些类型的请求或数据。 为此，您可以使用**选项**HTTP请求方法。

您将需要使用您之前学到的`-v'选项。 这将打开更详细的输出，以便您可以查看服务器支持的"选项"。

让我们通过输入来尝试 `curl -v -X OPTIONS https://jsonplaceholder.typicode.com/posts` 并按下 **Enter**:

<div class="center guideimages">
  <amp-anim src="/assets/guides/curl-rest-api/curl-options-verbose-en.gif" width="665" height="387" alt="Demo of OPTIONS curl command with verbose output" layout="responsive"></amp-anim>
</div>

当您滚动终端窗口时，您将观察到如下信息:

```
...
< 访问控制允许凭据:: 真
< 访问控制允许方法: GET,HEAD,PUT,PATCH,POST,DELETE
...
```

这告诉你REST API服务器允许哪些HTTP请求方法。 它还会告诉您服务器将允许您进行身份验证和使用凭据。

##收尾

现在你知道一些关于使用"curl"与REST Api和服务器进行交互的知识。 这是一个非常有用的命令和工具。