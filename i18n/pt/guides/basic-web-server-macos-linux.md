---
layout: guide-layout
title: Como começar um servidor web básico no macOS ou Linux
excerpt: Esse guia lhe ensina como usar Python para começarum servidor web básico de qualquer pasta no seu computador macOS ou Linux.
permalink: /pt/guides/basic-web-server-macos-linux
permalink_without_prefix: /guides/basic-web-server-macos-linux
lang: pt
---

**Índice**

* TOC
{:toc}

## Introdução

Se você está trabalhando em páginas web ou outro conteúdo web, você pode precisar uma forma fácil e rápida de começar um servidor web básico. Esse guia irá lhe ensinar um comando Python para começar um servidor web básico em seu computador. Conforme você seguir essas instruções, tenha em mente que os arquivos e pastas do seu computador provavelmente serão diferentes dos exemplos. Se vicê já tem bastante experiência com o terminal, vá para [os comandos da página inicial para um material de referência rápida](/).

## Pré-requisitos

Com o objetivo de seguir esse guia, você vai precisar:

* Acessar o terminal Unix em qualquer ambiente macOS ou Linux.
* Saber como abrir uma janela do terminal. Se você não tem certeza, visite as instruções de [macOS](abrir-terminal-macos) ou Linux (em breve).
* Saber como navegar em documentos e pastas no terminal. Se você não tem certeza, siga [esse guia primeiro para aprender como](navegar-terminal).
* Python3 instalado em seu computador. Ele vem instalado como padrão em versões recentes de macOS e muitas distribuições Linux.

## Comece encontrando a pasta certa

Primeiro, você precisa navegar para a pasta onde suas páginas web ou conteúdo web estejam salvos. Se você não tem certexa como fazer isso, você pode precisar ler [esse guia primeiro](navigate-terminal).

Vamos dizer que seu conteúdo web esteja na pasta `/home/user/examples`. Precisamos seguir três passos:

1. Ter certeza que estamos no diretório de trabalho certo, utilizando `pwd`.
2. Verificar se temos conteúdo web na pasta, utilizando `ls`.
3. Verificar se o conteúdo web está no formato correto, como HTML, utilizando `cat`.

Aqui está a combinação dos passos:

<div class="center guideimages">
  <amp-anim src="/assets/guides/basic-web-server-macos-linux/checking-web-content-en.gif" width="665" height="387" alt="Navigating and checking web content" layout="responsive"></amp-anim>
</div>

No exemplo, usamos `pwd` para verificar que `/home/user/examples` está no nosso diretório de trabalho. Após, usamos `ls` para listar os conteídos do nosso diretório de trabalho para ter certeza que possuímos um arquivo HTML lá. Você pode ver o arquivo **hello.html**.

Por último, vemos os conteídos de **hello.html** usando `cat` para ter certeza que é realmente um HTML.

Agora estamos prontos para começar nosso servidor web!

## Comece o servidor web Python básico

Visto que frequentemente está instalado em computadores por padrão, vamos usar Python para rodar nosso servidor web básico.

Vamos utilizar esse comando para começar um servidor web: `python3 -m http.server 8000` <amp-iframe sandbox="allow-scripts"
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

Vamos explorar o que esse comando faz:

* `python3` instrui o terminal a usar Python 3 para fazer algo.
* `-m http.server` instrui o Python rodar um servidor web.
* `8000` instrui o Python a usar 8000 como porta do servidor web.

Vamos tentar rodar isso:

<div class="center guideimages">
  <amp-anim src="/assets/guides/basic-web-server-macos-linux/start-python-http-server-en.gif" width="665" height="387" alt="Start Python web server" layout="responsive"></amp-anim>
</div>

Se você observar acoma, o servidor web está agora rodando em seu computador.

## Verifique seu conteúdo web

Após isso, podemos verificar se nosso conteúdo web está aparecendo em nosso navegador. Podemos abrir um URL local para procurar um conteúdo: `http://localhost:8000` <amp-iframe sandbox="allow-scripts"
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

No nosso exemplo acima, isso é o que observamos em um navegador web:

<div class="center guideimages">
  <amp-img src="/assets/guides/basic-web-server-macos-linux/directory-listing-en.png" width="665" height="387" alt="Directory listing in the web browser" layout="responsive"></amp-img>
</div>

No nosso exemplo, não tínhamos um documento chamado **index.html** então nosso navegaor listou os documentos disponíve. Você pode clicar em um documento específico para abrí-lo no seu navegador. Vamos clicar no **hello.html** que verificamos anteriormente:

<div class="center guideimages">
  <amp-img src="/assets/guides/basic-web-server-macos-linux/hello-world-page-en.png" width="665" height="387" alt="Hello world page" layout="responsive"></amp-img>
</div>

Agora conseguimos ver a página web!

## Pare o servidor web Python básico

WQuando você acabar de usar um servidor web, você pode pará-lo direto do terminal. Para fazer isso, pressione `Ctrl-C` em seu teclado. Isso significa pressionar os botões `Ctrl` e `C` ao mesmo tempo.

Você pode observar um resultado como o seguinte:

<div class="center guideimages">
  <amp-anim src="/assets/guides/basic-web-server-macos-linux/stop-python-http-server-en.gif" width="665" height="387" alt="Stop Python web server" layout="responsive"></amp-anim>
</div>

## Conclusão

Você aprendeu como começar um servidor básico em seu computador. Isso irá ajudá-lo com suas tarefas como desenvolvimento web e programação Python. Se você tem interesse em aprender mais ou programar em Python, você pode visitar [https://www.python.org](https://www.python.org){:target="_blank" rel="noopener"}.
