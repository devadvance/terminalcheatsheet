---
layout: guide-layout
title: Como usar o curl para testar uma REST API
excerpt: Como usar o curl para testar uma REST API
permalink: /pt-BR/guides/curl-rest-api
permalink_without_prefix: /guides/curl-rest-api
lang: pt-BR
---

**Índice**

* TOC
{:toc}

## Introdução

Este guia tem como objetivo ensinar os fundamentos da interação com uma API REST usando [curl](https://github.com/curl/curl). Ao seguir essas instruções, lembre-se de que os arquivos e pastas do seu computador provavelmente serão diferentes dos exemplos. Se você já tem muita experiência com o terminal, vá para [os comandos na página inicial para o material de referência rápida](/pt-BR/).

## Pré-requisitos

Para seguir este guia, você vai precisar de:

* Acesso a um terminal Unix em qualquer ambiente macOS ou Linux.
* Saber como abrir uma janela do terminal. Se você não sabe ao certo, visite as instruções para [macOS](open-terminal-macos) ou Linux (em breve).
* Uma API REST com a qual você deseja interagir. Estamos usando `https://jsonplaceholder.typicode.com`, como exemplo, neste guia.
* O comando curl instalado em seu computador. A maioria dos computadores macOS e Linux o tem pré-instalado. Caso contrário, você precisará revisar as instruções técnicas [no site de instalação do curl](https://curl.haxx.se/docs/install.html){:target="_blank" rel="noopener"}.

## Vamos começar pelo GET!

Comece abrindo seu terminal.

curl é uma "ferramenta de linha de comando para transferir dados especificados com sintaxe de URL", o que o torna muito útil para interagir com APIs REST e outros recursos da web. Ele tem milhares de usos, mas revisaremos apenas alguns neste guia.

Digamos que você tenha uma API REST com a qual deseja interagir. Por exemplo, [https://jsonplaceholder.typicode.com/todos/1](https://jsonplaceholder.typicode.com/todos/1){:target="_blank" rel="noopener"} retorna dados JSON que são semelhante a este:

```
{
	"userId": 1,
	"id": 1,
	"title": "delectus aut autem",
	"completed": false
}
```

Embora possamos abrir esta URL de exemplo em nosso navegador da web, muitas APIs REST não nos permitirão fazer isso. Vamos tentar usar curl.

Na janela do seu terminal, digite `curl https://jsonplaceholder.typicode.com/todos/1` e pressione **Enter**. Você deve experimentar um resultado semelhante a este:

<div class="center guideimages">
<figure class="fill-parent">
  <video playsinline autoplay loop muted
    width="665"
    height="387"
    class="responsive"
    title="Demo of basic curl command">
    <source src="/assets/guides/curl-rest-api/curl-get-basic-en.webm"
      type="video/webm" />
    <source src="/assets/guides/curl-rest-api/curl-get-basic-en.mp4"
      type="video/mp4" />
    <div fallback>
      <p>This browser does not support the video element.</p>
    </div>
  </video>
  <figcaption class="center">Demo of basic curl command</figcaption>
</figure>
</div>

Sem nenhuma opção, o padrão do comando `curl` é interagir com o servidor usando um método de solicitação HTTP **GET**, que geralmente é usado apenas para leitura de dados. Abordaremos os outros métodos de solicitação de HTTP posteriormente neste guia.

Vamos adicionar a opção `-o` para salvar a saída como um arquivo em vez de mostrá-la diretamente na janela do terminal. Digite `curl -o test.json https://jsonplaceholder.typicode.com/todos/1` e pressione **Enter**:

<div class="center guideimages">
<figure class="fill-parent">
  <video playsinline autoplay loop muted
    width="665"
    height="387"
    class="responsive"
    title="Demo of basic curl command with file output">
    <source src="/assets/guides/curl-rest-api/curl-get-output-en.webm"
      type="video/webm" />
    <source src="/assets/guides/curl-rest-api/curl-get-output-en.mp4"
      type="video/mp4" />
    <div fallback>
      <p>This browser does not support the video element.</p>
    </div>
  </video>
  <figcaption class="center">Demo of basic curl command with file output</figcaption>
</figure>
</div>

Se quisermos, podemos examinar informações mais detalhadas sobre essa interação na rede. Para fazer isso, você pode adicionar a opção `-v` a qualquer comando `curl`. Digite `curl -v https://jsonplaceholder.typicode.com/todos/1` e pressione **Enter**:

<div class="center guideimages">
<figure class="fill-parent">
  <video playsinline autoplay loop muted
    width="665"
    height="387"
    class="responsive"
    title="Demo of basic curl command with verbose output">
    <source src="/assets/guides/curl-rest-api/curl-get-verbose-en.webm"
      type="video/webm" />
    <source src="/assets/guides/curl-rest-api/curl-get-verbose-en.mp4"
      type="video/mp4" />
    <div fallback>
      <p>This browser does not support the video element.</p>
    </div>
  </video>
  <figcaption class="center">Demo of basic curl command with verbose output</figcaption>
</figure>
</div>

## Usando diferentes métodos de solicitação HTTP com curl

Agora que sabemos como fazer uma consulta básica de uma API REST usando curl, podemos tentar diferentes métodos HTTP. Você pode ler muito mais sobre os diferentes métodos de solicitação HTTP na [Wikipedia](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol#Request_methods).

### POST

O método de solicitação HTTP **POST** é frequentemente usado para criar ou atualizar dados no servidor ao interagir com uma API REST. Para fazer isso, você precisará conhecer algumas opções novas para o comando `curl`:

* `-X [HTTP_METHOD]` - Precisamos dizer ao `curl` qual método de solicitação HTTP usar. A opção `-X`, seguida pelo nome do método, nos permite fazer isso.
* `-H [HTTP_HEADER]` - Ao enviar dados para um servidor, precisamos dizer ao servidor como interpretar os 1s e 0s. Podem ser dados JSON, um formulário, um e-mail, etc.
* `-d [YOUR_DATA]` - Finalmente, precisamos especificar quais dados o `curl` deve enviar para o servidor.

Vamos colocar essas opções juntas em um comando completo:

`curl -X POST -H 'Content-Type: application/json' -d '{"title": "foo","body": "bar","userId": 123}' https://jsonplaceholder.typicode.com/posts`

Você pode digitar ou copiar na janela do terminal e pressionar **Enter** para enviar, assim:

<div class="center guideimages">
<figure class="fill-parent">
  <video playsinline autoplay loop muted
    width="665"
    height="387"
    class="responsive"
    title="Demo of POST curl command">
    <source src="/assets/guides/curl-rest-api/curl-post-basic-en.webm"
      type="video/webm" />
    <source src="/assets/guides/curl-rest-api/curl-post-basic-en.mp4"
      type="video/mp4" />
    <div fallback>
      <p>This browser does not support the video element.</p>
    </div>
  </video>
  <figcaption class="center">Demo of POST curl command</figcaption>
</figure>
</div>

Como você pode ver, eram muitos dados para tentar colocar em um único comando. Podemos enviar dados usando um arquivo para torná-lo mais fácil e repetível.

Crie um novo arquivo chamado `data.json` com os seguintes dados:

```
{
	"title": "foo",
	"body": "bar",
	"userId": 123
}
```

Se você conseguiu criar o arquivo com sucesso, deve ser capaz usar o comando `cat`, assim:

<div class="center guideimages">
<figure class="fill-parent">
  <video playsinline autoplay loop muted
    width="665"
    height="387"
    class="responsive"
    title="Demo of data file">
    <source src="/assets/guides/curl-rest-api/nano-datajson-en.webm"
      type="video/webm" />
    <source src="/assets/guides/curl-rest-api/nano-datajson-en.mp4"
      type="video/mp4" />
    <div fallback>
      <p>This browser does not support the video element.</p>
    </div>
  </video>
  <figcaption class="center">Demo of data file</figcaption>
</figure>
</div>

Agora você pode usar esse arquivo como parte do comando `curl`. Em vez de colocar os dados no comando, você pode *se referir* ao arquivo usando `-d @[FILENAME]`. Podemos tentar digitando `curl -X POST -H 'Content-Type: application/json' -d @data.json https://jsonplaceholder.typicode.com/posts` e pressionando **Enter**:

<div class="center guideimages">
<figure class="fill-parent">
  <video playsinline autoplay loop muted
    width="665"
    height="387"
    class="responsive"
    title="Demo of POST curl command with a file">
    <source src="/assets/guides/curl-rest-api/curl-post-file-en.webm"
      type="video/webm" />
    <source src="/assets/guides/curl-rest-api/curl-post-file-en.mp4"
      type="video/mp4" />
    <div fallback>
      <p>This browser does not support the video element.</p>
    </div>
  </video>
  <figcaption class="center">Demo of POST curl command with a file</figcaption>
</figure>
</div>

### PUT

O método de solicitação HTTP **PUT** geralmente é usado para atualizar dados existentes no servidor ao interagir com uma API REST. Semelhante ao exemplo com **POST**, precisamos definir o método, formato de dados e dados ao usar o comando `curl`.

Vamos tentar atualizar um item existente. Digite `curl -X PUT -H 'Content-Type: application/json' -d '{"title": "foo_updated","body": "bar_updated","userId": 123}' https://jsonplaceholder.typicode.com/posts/1` e pressione **Enter**, assim:

<div class="center guideimages">
<figure class="fill-parent">
  <video playsinline autoplay loop muted
    width="665"
    height="387"
    class="responsive"
    title="Demo of PUT curl command">
    <source src="/assets/guides/curl-rest-api/curl-put-basic-en.webm"
      type="video/webm" />
    <source src="/assets/guides/curl-rest-api/curl-put-basic-en.mp4"
      type="video/mp4" />
    <div fallback>
      <p>This browser does not support the video element.</p>
    </div>
  </video>
  <figcaption class="center">Demo of PUT curl command</figcaption>
</figure>
</div>

Você também pode usar um arquivo de dados da mesma forma que fez com o método de solicitação **POST** HTTP, usando `-d @[FILENAME]`.

### DELETE

Se você quiser remover dados do servidor, provavelmente usará o método de solicitação HTTP **DELETE** ao interagir com uma API REST. Isso é um pouco mais claro em comparação com os exemplos anteriores. Você usará `-X DELETE` para especificar o método de solicitação **DELETE** HTTP e especificar um URL de recurso específico para excluir. Experimente digitando `curl -X DELETE https://jsonplaceholder.typicode.com/posts/1` e pressionando **Enter**:

<div class="center guideimages">
<figure class="fill-parent">
  <video playsinline autoplay loop muted
    width="665"
    height="387"
    class="responsive"
    title="Demo of DELETE curl command">
    <source src="/assets/guides/curl-rest-api/curl-delete-basic-en.webm"
      type="video/webm" />
    <source src="/assets/guides/curl-rest-api/curl-delete-basic-en.mp4"
      type="video/mp4" />
    <div fallback>
      <p>This browser does not support the video element.</p>
    </div>
  </video>
  <figcaption class="center">Demo of DELETE curl command</figcaption>
</figure>
</div>

Você irá perceber que muitas APIs REST retornam os dados excluídos ou nenhum dado ao usar o método de solicitação **DELETE** HTTP.

### OPTIONS

Às vezes, precisamos saber quais tipos de solicitações ou dados podemos enviar a um servidor. Para fazer isso, você pode usar o método de solicitação HTTP **OPTIONS**.

Você precisará usar a opção `-v` que aprendeu anteriormente. Isso ativará uma saída mais detalhada para que você possa visualizar as "opções" que o servidor suporta.

Vamos testar usando o comando `curl -v -X OPTIONS https://jsonplaceholder.typicode.com/posts` e pressionando **Enter**:

<div class="center guideimages">
<figure class="fill-parent">
  <video playsinline autoplay loop muted
    width="665"
    height="387"
    class="responsive"
    title="Demo of OPTIONS curl command with verbose output">
    <source src="/assets/guides/curl-rest-api/curl-options-verbose-en.webm"
      type="video/webm" />
    <source src="/assets/guides/curl-rest-api/curl-options-verbose-en.mp4"
      type="video/mp4" />
    <div fallback>
      <p>This browser does not support the video element.</p>
    </div>
  </video>
  <figcaption class="center">Demo of OPTIONS curl command with verbose output</figcaption>
</figure>
</div>

Ao rolar pela janela do terminal, você observará informações como esta:

```
...
< access-control-allow-credentials: true
< access-control-allow-methods: GET,HEAD,PUT,PATCH,POST,DELETE
...
```

Isso informa quais métodos de solicitação HTTP o servidor API REST permite. Ele também informa que o servidor permitirá que você autentique e use credenciais.

## Conclusão

Agora você sabe um pouco sobre como usar `curl` para interagir com APIs REST e servidores. Esta é uma ferramenta e um comando extremamente útil.

