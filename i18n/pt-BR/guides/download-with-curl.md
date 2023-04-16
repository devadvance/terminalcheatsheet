---
layout: guide-layout
title: Como baixar arquivos com curl
excerpt: Como baixar arquivos com curl
permalink: /pt-BR/guides/curl-download-files
permalink_without_prefix: /guides/curl-download-files
lang: pt-BR
---

**Índice**

* TOC
{:toc}

## Introdução

Este guia tem como objetivo ensinar as maneiras básicas de baixar arquivos usando o [curl](https://github.com/curl/curl). Ao seguir estas instruções, tenha em mente que os arquivos e pastas do seu computador provavelmente serão diferentes dos exemplos. Se você já possui muita experiência com o terminal, confira [os comandos na página inicial para material de referência rápida](/pt-BR/).

## Pré-requisitos

Para seguir este guia, você precisará:

* Acesso a um terminal Unix em qualquer ambiente Linux ou macOS.
* Saber como abrir uma janela de terminal. Se não tiver certeza, visite as instruções para [macOS](open-terminal-macos) ou Linux (em breve).
* Um arquivo que você deseja baixar. Estamos usando `https://terminalcheatsheet.com/sample-file.jpg` como exemplo neste guia.
* A ferramenta curl instalada no seu computador. A maioria dos computadores macOS e Linux já vem com ela pré-instalada. Caso contrário, você precisará verificar as instruções técnicas [no site de instalação do curl](https://curl.haxx.se/docs/install.html){:target="_blank" rel="noopener"}.

## Baixando um arquivo

Comece abrindo o terminal.

`curl` é uma "ferramenta de linha de comando para transferir dados especificados com a sintaxe de URL". Isso significa que pode baixar arquivos de URLs.

Por exemplo, [https://terminalcheatsheet.com/sample-file.jpg](https://terminalcheatsheet.com/sample-file.jpg){:target="_blank" rel="noopener"} retorna um arquivo de imagem que podemos baixar com o curl.

### Salvar com o nome do arquivo da URL

Se quisermos baixar o arquivo e salvá-lo com o mesmo nome, podemos usar este comando:

```
curl --remote-name [URL]
```

`[URL]` é a URL de onde queremos baixar o arquivo. `--remote-name` instrui o curl a usar o nome da URL como nome do arquivo no computador.

Podemos usar este comando mais curto para fazer o mesmo:

```
curl -O [URL]
```

`-O` é uma forma abreviada de escrever `--remote-name` do comando anterior.

### Salvar com um nome de arquivo diferente

Se quisermos baixar o arquivo e salvá-lo com um nome diferente, podemos usar este comando em vez disso:

```
curl --output [NOME_DO_ARQUIVO] [URL]
```

* `[URL]` - Indicamos ao `curl` a URL para baixar.
* `--output [NOME_DO_ARQUIVO]` - Indicamos ao `curl` onde salvar o arquivo.

Podemos usar este comando mais curto para fazer o mesmo:

```
curl -o [NOME_DO_ARQUIVO] [URL]
```

* `[URL]` - Indicamos ao `curl` a URL para baixar.
* `-o [NOME_DO_ARQUIVO]` - Indicamos ao `curl` onde salvar o arquivo.

## Conclusão

Agora você sabe um pouco sobre como usar o `curl` para baixar arquivos a partir de uma URL.
