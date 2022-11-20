---
layout: guide-layout
title: Como iniciar um servidor web básico no macOS ou Linux
excerpt: Esse guia ensina como usar Python para iniciar um servidor web básico a partir de qualquer pastas no seu computador macOS ou Linux.
permalink: /pt-BR/guides/basic-web-server-macos-linux
permalink_without_prefix: /guides/basic-web-server-macos-linux
lang: pt-BR
---

**Índice**

* TOC
{:toc}

## Introdução

Se você está trabalhando em páginas web ou outros tipos de conteúdo para web, você pode precisar de uma maneira fácil e rápida de iniciar um servidor básico. Esse guia vai te ensinar um comando Python para iniciar um servidor web básico no seu computador. Conforme você seguir as instruções, lembre-se que os arquivos e pastas do seu computador provavelmente serão diferentes dos exemplos. Se você já tem muita experiência com o terminal, vá para [os comandos na página inicial para o material de referência rápida](/pt-BR/).

## Pré-requisitos

Para seguir esse guia, você precisará:

* Acesso a um terminal Unix em qualquer ambiente macOS ou Linux.
* Saber como abrir uma janela do terminal. Se você não sabe ao certo, visite as instruções para [macOS](open-terminal-macos) ou Linux (em breve).
* Saber como navegar entre arquivos e pastas em um terminal. Se você não sabe ao certo, siga [esse guia antes para aprender](navigate-terminal).
* Python3 instalado no seu computador. Isso vem instalado por padrão nas versões recentes do macOS e em várias distribuições do Linux.

## Comece encontrando a pasta certa

Primeiramente, você precisa navegar até a pasta onde suas páginas web ou conteúdo web estão salvas. Se você não sabe ao certo como fazer isso, você pode ler [esse guia primeiro](navigate-terminal).

Vamos considerar que seu conteúdo web está na pasta `/home/user/examples`. Queremos fazer três coisas:

1. Garantir que estamos no diretório certo usando `pwd`.
2. Checar se temos conteúdo web na pasta usando `ls`.
3. Checar se o conteúdo web está no formato certo, como HTML, usando `cat`.

Aqui está uma combinação dos passos:

<div class="center guideimages">
  <img src="/assets/guides/basic-web-server-macos-linux/checking-web-content-en.gif" width="665" height="387" alt="Navegando e checando conteúdo web" class="responsive" />
</div>

No exemplo acima, nós usamos `pwd` para verificar que `/home/user/examples` é o nosso diretório atual. Então usamos `ls` para listar o conteúdo no diretório atual para garantir que temos um arquivo HTML ali. Note o arquivo **hello.html**.

Finalmente, nós podemos visualizar o conteúdo de **hello.html** usando `cat` para garantir que é realmente HTML.

Agora nós estamos prontos para iniciar nosso servidor web!

## Iniciar o servidor web Python básico

Já que o Python é frequentemente instalado nos computadores por padrão, nós o usaremos para rodar um servidor web básico.

Vamos usar esse comando para iniciar o servidor web: `python3 -m http.server 8000`
{% include body-copy-button.html data-command="python3 -m http.server 8000" %}

Vamos explorar o que esse comando faz:

- `python3` indica ao terminal para usar o Python 3 para fazer algo.
- `-m http.server` indica ao Python para rodar um servidor web.
- `8000` indica ao Python para usar a porta 8000 para o servidor web.

Vamos tentar rodá-lo:

<div class="center guideimages">
  <img src="/assets/guides/basic-web-server-macos-linux/start-python-http-server-en.gif" width="665" height="387" alt="Iniciar o servidor web Python" class="responsive" />
</div>

Se você observar acima, o servidor web agora está rodando no seu computador.

## Checar seu conteúdo web

Em seguida, podemos checar se nosso conteúdo web está aparecendo no navegador web. Podemos abrir uma URL local para navegar pelo conteúdo: `http://localhost:8000`
{% include body-copy-button.html data-command="http://localhost:8000" %}

Em nosso exemplo acima, isso é o que observamos em um navegador web:

<div class="center guideimages">
  <img src="/assets/guides/basic-web-server-macos-linux/directory-listing-en.png" width="665" height="387" alt="Listagem de diretórios no navegador web" class="responsive" />
</div>

No nosso exemplo, não tínhamos um arquivo chamado **index.html**, então nosso navegador apenas listou os arquivos disponíveis. Você pode clicar em um arquivo específico para abri-lo no navegador. Vamos clicar no **hello.html** que checamos mais cedo:

<div class="center guideimages">
  <img src="/assets/guides/basic-web-server-macos-linux/hello-world-page-en.png" width="665" height="387" alt="Página de Hello world" class="responsive" />
</div>

Agora nós observamos a página web!

## Parar o servidor web Python básico

Quando você terminar de usar o servidor web, você pode pará-lo a partir do terminal. Para isso, pressione `Ctrl-C` no seu teclado. Isso significa pressionar as teclas `Ctrl` e `C` ao mesmo tempo.

Você verá um resultado como esse:

<div class="center guideimages">
  <img src="/assets/guides/basic-web-server-macos-linux/stop-python-http-server-en.gif" width="665" height="387" alt="Parar servidor web Python" class="responsive" />
</div>

## Conclusão

Você aprendeu como iniciar um servidor web básico no seu computador. Isso vai te ajudar com tarefas como desenvolvimento web e programação em Python. Se você está interessado em aprender mais ou programar em Python, você pode visitar [https://www.python.org](https://www.python.org){:target="_blank" rel="noopener"}.
