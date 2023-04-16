---
layout: guide-layout
title: Cómo descargar archivos con curl
excerpt: Cómo descargar archivos con curl
permalink: /es/guides/curl-download-files
permalink_without_prefix: /guides/curl-download-files
lang: es
---

**Índice del artículo**

* TOC
{:toc}

## Introducción
Esta guía tiene como objetivo enseñarte las formas básicas de descargar archivos utilizando [curl](https://github.com/curl/curl). Mientras sigues estas instrucciones, ten en cuenta que los archivos y carpetas de tu computadora probablemente serán diferentes a los ejemplos.  Si ya tienes mucha experiencia con el terminal, consulta [los comandos en la página de inicio para obtener material de referencia rápida](/es/).

## Prerrequisitos

Para seguir esta guía, necesitarás:

* Acceso a un terminal en cualquier entorno Linux o macOS.
* Saber abrir una ventana de terminal. Si no estás seguro, consulta las instrucciones para [macOS](open-terminal-macos) o Linux (próximamente).
* Un archivo que quieras descargar. Estamos utilizando `https://terminalcheatsheet.com/sample-file.jpg` como ejemplo en esta guía.
* La utilidad curl instalada en tu computadora. La mayoría de las computadoras macOS y Linux la tienen preinstalada. Si no es así, deberás revisar las instrucciones técnicas [en el sitio web de instalación de curl](https://curl.haxx.se/docs/install.html){:target="_blank" rel="noopener"}.

## Descargando un archivo

Comienza abriendo tu terminal.

`curl` es una "herramienta de línea de comandos para transferir datos especificados con la sintaxis URL". Esto significa que puede descargar archivos desde URLs.

Por ejemplo, [https://terminalcheatsheet.com/sample-file.jpg](https://terminalcheatsheet.com/sample-file.jpg){:target="_blank" rel="noopener"} devuelve un archivo de imagen que podemos descargar con curl.

### Guardar con el nombre de archivo de la URL

Si queremos descargar el archivo y guardarlo con el mismo nombre, podemos usar este comando:

```
curl --remote-name [URL]
```

`[URL]` es la URL desde la que queremos descargar el archivo. `--remote-name` indica a curl que use el nombre de la URL como el nombre del archivo en la computadora.

Podemos usar este comando más corto para hacer lo mismo:

```
curl -O [URL]
```

`-O` es una forma abreviada de escribir `--remote-name` del comando anterior.

### Guardar con un nombre de archivo diferente

Si queremos descargar el archivo y guardarlo con un nombre diferente, podemos usar este comando en su lugar:

```
curl --output [FILENAME] [URL]
```

* `[URL]` - Le indicamos a `curl` la URL para descargar.
* `--output [FILENAME]` - Le indicamos a `curl` dónde guardar el archivo.

Podemos usar este comando más corto para hacer lo mismo:

```
curl -o [FILENAME] [URL]
```

* `[URL]` - Le indicamos a `curl` la URL para descargar.
* `-o [FILENAME]` - Le indicamos a `curl` dónde guardar el archivo.

## Conclusión

Ahora ya sabes un poco sobre cómo usar `curl` para descargar archivos desde una URL.
