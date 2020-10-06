---
layout: guide-layout
title: Como navegar em arquivos e pastas em um terminal
excerpt: Este guia tem como objetivo ensinar os fundamentos básicos da navegação em arquivos e pastas em um terminal.
permalink: /pt/guides/navigate-terminal
permalink_without_prefix: /guides/navigate-terminal
lang: pt
---

**Índice**

* TOC
{:toc}

## Introdução

Este guia tem como objetivo ensinar os fundamentos básicos da navegação em arquivos e pastas em um terminal. Ao seguir essas instruções, lembre-se de que os arquivos e pastas do seu computador provavelmente serão diferentes dos exemplos. Se você já tem muita experiência com o terminal, verifique [os comandos na página inicial para o material de referência rápida] (/).

## Pré-requisitos

Para seguir este guia, você precisará de:

* Acesso a um terminal Unix em qualquer ambiente Linux ou macOS.
* Para saber como abrir uma janela de terminal. Se você não tiver certeza, visite as instruções para [macOS] (open-terminal-macos) ou Linux (em breve).

## Vamos começar!

Comece abrindo seu terminal.

Ao usar o terminal, você trabalha de dentro de uma pasta específica em seu computador. Você sempre pode acessar itens de outras pastas em seu computador, mas o terminal controlará a pasta na qual você está atualmente. Isso é conhecido como seu **diretório de trabalho**.

Assim que você abrir o terminal, você estará dentro de um diretório de trabalho. Digite `pwd` no terminal e pressione **Enter**. `pwd` significa "print working directory" ("exibir diretório de trabalho"). A saída desse comando informa qual pasta é o seu diretório de trabalho atual.

Na captura de tela de amostra abaixo, nosso diretório de trabalho é uma pasta chamada **exemplos**:

<div class="center guideimages">
  <amp-img src="/assets/guides/navigate-work-files/pwd-en.png" width="665" height="387" alt="terminal pwd command" layout="responsive"></amp-img>
</div>

Em seguida, você pode explorar o conteúdo do diretório de trabalho. Digite `ls` em seu terminal e pressione **Enter**. `ls` significa "list" ("lista"). Este comando lista todos os arquivos e pastas em seu diretório de trabalho. Em nosso exemplo, ele mostra todos os arquivos e pastas em **exemplos**:

<div class="center guideimages">
  <amp-img src="/assets/guides/navigate-work-files/ls-en.png" width="665" height="387" alt="terminal list command" layout="responsive"></amp-img>
</div>

Isso é semelhante a abrir seu aplicativo de navegador de arquivos e examinar o conteúdo de sua pasta de diretório de trabalho:

<div class="center guideimages">
  <amp-img src="/assets/guides/navigate-work-files/ls-finder-en.png" width="665" height="387" alt="file browser show contents" layout="responsive"></amp-img>
</div>

Você pode listar todo o conteúdo de pastas que não sejam seu diretório de trabalho digitando `ls [FOLDER_NAME]`. É como dar uma olhada em outra pasta, sem alterar nosso diretório de trabalho. No exemplo abaixo, estamos examinando o conteúdo da **folder1**. Podemos observar que **folder2** possui apenas um arquivo denominado **file3.pdf**:

<div class="center guideimages">
  <amp-img src="/assets/guides/navigate-work-files/ls-folder1-en.png" width="665" height="387" alt="ls command folder" layout="responsive"></amp-img>
</div>

Isso é semelhante a examinar o conteúdo de uma pasta dentro de seu diretório de trabalho em seu aplicativo de navegador de arquivos:

<div class="center guideimages">
  <amp-img src="/assets/guides/navigate-work-files/ls-folder1-finder-en.png" width="665" height="387" alt="file browser folder peek" layout="responsive"></amp-img>
</div>

O comando `ls` possui opções adicionais que podem alterar a forma como ele funciona.

Tente digitar `ls -a` e pressionar **Enter** para exibir todos os arquivos, incluindo arquivos ocultos. Em muitos computadores, esses arquivos começam com um ponto e ficam ocultos por padrão. Exemplos comuns desses arquivos incluem coisas como "*.DS_Store*" (no macOS), "*.profile*" (no Linux) e "*.gitignore*" (ao usar Git para seus projetos).

Observe como agora podemos observar **.hidden-file**, que não estava sendo exibido com o comando `ls` anterior:

<div class="center guideimages">
  <amp-img src="/assets/guides/navigate-work-files/ls-a-en.png" width="665" height="387" alt="terminal ls all command" layout="responsive"></amp-img>
</div>

Outra opção para listar arquivos é digitar `ls -l` e pressionar **Enter**. Esta opção gera uma longa lista. Isso significa que ele exibe detalhes adicionais para os arquivos e pastas. Além dos nomes de arquivos e pastas, ele também mostrará atributos, como quando foram modificados pela última vez e seu tamanho:

<div class="center guideimages">
  <amp-img src="/assets/guides/navigate-work-files/ls-l-en.png" width="665" height="387" alt="terminal ls long command" layout="responsive"></amp-img>
</div>

Semelhante a muitos comandos de terminal, você pode combinar essas duas opções. Para fazer isso, digite `ls -la` e pressione **Enter**, que irá listar **todos** os itens no formato **long**:

<div class="center guideimages">
  <amp-img src="/assets/guides/navigate-work-files/ls-la-en.png" width="665" height="387" alt="terminal ls long all command" layout="responsive"></amp-img>
</div>

## Navegando nas pastas

Você deve ter notado que nosso diretório de trabalho possui várias partes no nome. Em geral, o caractere `/` (barra) significa que você está dentro de uma pasta. Então, quando você observa `/home/user/examples` como seu diretório de trabalho, isso significa que:

* Você está dentro da pasta **examples**, que é o seu diretório de trabalho.
* A pasta **examples** está dentro da pasta **user**.
* A pasta **user** está dentro da pasta **home**.
* A pasta **home** está dentro do sistema de arquivos do seu computador e não há nada além dela.

Agora podemos mudar nosso diretório de trabalho. Em nosso exemplo, vimos duas pastas ao usar `ls` para listar tudo (**pasta1** e **pasta2**).

Digite `cd [FOLDER_NAME]` e pressione **Enter**. Seu diretório de trabalho foi alterado. `cd` significa "change directory" ("alterar diretório"). Você pode digitar `pwd` novamente e pressionar **Enter** para verificar se mudou seu diretório de trabalho. Em nossa amostra, mudamos nosso diretório de trabalho para **folder1**:

<div class="center guideimages">
  <amp-img src="/assets/guides/navigate-work-files/cd-folder1-en.png" width="665" height="387" alt="terminal cd command" layout="responsive"></amp-img>
</div>

Isso é semelhante a clicar em uma pasta em seu aplicativo de navegador de arquivos. Você mudou a pasta em que está:

<div class="center guideimages">
  <amp-img src="/assets/guides/navigate-work-files/cd-folder1-finder-en.png" width="665" height="387" alt="macOS folder change directory" layout="responsive"></amp-img>
</div>

Se você quiser "subir" para a pasta anterior, digite `cd ..` e pressione **Enter**. Isso o levará a um nível de pasta:

<div class="center guideimages">
  <amp-img src="/assets/guides/navigate-work-files/cd-folder1-and-back-en.png" width="665" height="387" alt="terminal cd folder1 and back" layout="responsive"></amp-img>
</div>

Essa ideia de ir "descer" em uma pasta ou "subir" de uma pasta é muito comum ao usar o terminal. Quando, em comandos de terminal, você usa nomes de pastas ao "descer" um nível e `..` para significar "subir" um nível.

## Ver o conteúdo do arquivo

Você provavelmente está animado para começar a trabalhar com arquivos com terminal. Isso pode depender do *tipo* de arquivo, já que visualizar um arquivo de imagem é diferente de ler um arquivo de documento.

Para arquivos de texto, um comando útil ao trabalhar no terminal é digitar `cat [FILE_NAME]` e pressionar **Enter**. O comando `cat` é uma abreviação de "concatenate" ("concatenar") e tem vários usos.

Um dos usos mais comuns é exibir o conteúdo de um arquivo de texto no terminal. Na captura de tela abaixo, estamos exibindo o conteúdo de **hello.txt** em nosso diretório de trabalho:

<div class="center guideimages">
  <amp-img src="/assets/guides/navigate-work-files/cat-hello-en.png" width="665" height="387" alt="terminal cat command" layout="responsive"></amp-img>
</div>

## Conclusão

Muito bem! Agora você conhece os fundamentos da navegação de arquivos e pastas em seu terminal. Isso inclui alterar seu diretório de trabalho, listar arquivos e pastas e visualizar o conteúdo de um arquivo de texto.

Em um guia futuro, você aprenderá como criar e modificar arquivos e pastas.
