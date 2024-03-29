---
layout: guide-layout
title: Cómo iniciar un servidor web básico en macOS o Linux
excerpt: Cómo iniciar un servidor web básico en macOS o Linux
permalink: /es/guides/basic-web-server-macos-linux
permalink_without_prefix: /guides/basic-web-server-macos-linux
lang: es
---

**Índice del artículo**

* TOC
{:toc}

## Introducción

Si está trabajando en páginas web u otro contenido web, es posible que necesite una forma fácil y rápida de iniciar un servidor web básico. Esta guía le enseñará un comando de Python para iniciar un servidor web básico en su computadora. A medida que siga estas instrucciones, tenga en cuenta que los archivos y carpetas de su computadora probablemente serán diferentes de los ejemplos. Si ya tiene mucha experiencia con el terminal, consulte [los comandos en la página de inicio para obtener material de referencia rápida](/es/).

## Prerrequisitos

Para seguir esta guía, necesitará:

* Acceso a un terminal en cualquier entorno Linux o macOS.
* Saber abrir una ventana de terminal. Si no está seguro, consulte las instrucciones para [macOS](open-terminal-macos) o Linux (próximamente).
* Saber navegar por archivos y carpetas en un terminal. Si no está seguro, siga [esta guía primero para aprender cómo hacerlo](navigate-terminal).
* Python3 instalado en su computadora. Python3 viene instalado por defecto en versiones recientes de macOS y muchas distribuciones de Linux.

## Empezar por encontrar la carpeta correcta

Primero, debe navegar a la carpeta donde se guardan sus páginas web o contenido web. Si no está seguro de cómo hacer esto, le recomendamos que lea [esta guía primero](navigate-terminal).

Digamos que su contenido web está en la carpeta `/home/user/examples`. Queremos hacer tres cosas:

1. Asegúrese de que estamos en el directorio de trabajo correcto usando `pwd`.
2. Compruebe si tenemos contenido web en la carpeta que usando `ls`.
3. Compruebe si el contenido web está en el formato correcto, como HTML, usando `cat`.

Aquí está el conjunto de pasos:

<div class="center guideimages">
<figure class="fill-parent">
  <video playsinline autoplay loop muted
    width="665"
    height="387"
    class="responsive"
    title="Navegar y comprobar el contenido web">
    <source src="/assets/guides/basic-web-server-macos-linux/checking-web-content-en.webm"
      type="video/webm" />
    <source src="/assets/guides/basic-web-server-macos-linux/checking-web-content-en.mp4"
      type="video/mp4" />
    <div fallback>
      <p>This browser does not support the video element.</p>
    </div>
  </video>
  <figcaption class="center">Navegar y comprobar el contenido web</figcaption>
</figure>
</div>

Usamos `pwd` para ver que `/home/user/examples` es el **directorio de trabajo** actual. Luego usamos `ls` para listar el contenido del directorio de trabajo para asegurarnos de que tenemos un archivo HTML allí. Puede observar el archivo **hello.html**.

Finalmente, vemos el contenido de **hello.html** usando `cat` para asegurarnos de que sea realmente HTML.

¡Ahora estamos listos para iniciar nuestro servidor web!

## Iniciar el servidor web básico de Python

Dado que se instala con frecuencia en las computadoras de forma predeterminada, usaremos Python para iniciar un servidor web básico.

Vamos a usar este comando para iniciar un servidor web: `python3 -m http.server 8000`
{% include body-copy-button.html data-command="python3 -m http.server 8000" %}

Exploremos lo que hace este comando:

* `python3` le indica al terminal que use Python 3 para hacer algo.
* `-m http.server` le indica a Python que iniciar un servidor web.
* `8000` le indica a Python a Python que use 8000 como puerto para el servidor web.

Intentemos ejecutarlo:

<div class="center guideimages">
<figure class="fill-parent">
  <video playsinline autoplay loop muted
    width="665"
    height="387"
    class="responsive"
    title="Iniciar servidor web Python">
    <source src="/assets/guides/basic-web-server-macos-linux/start-python-http-server-en.webm"
      type="video/webm" />
    <source src="/assets/guides/basic-web-server-macos-linux/start-python-http-server-en.mp4"
      type="video/mp4" />
    <div fallback>
      <p>This browser does not support the video element.</p>
    </div>
  </video>
  <figcaption class="center">Iniciar servidor web Python</figcaption>
</figure>
</div>

Si ve lo anterior, el servidor web ahora se está ejecutando en su computadora.

## Revisar su contenido web

A continuación, podemos comprobar si nuestro contenido web se muestra en un navegador web. Podemos abrir una URL local para observar el contenido: `http://localhost:8000`
{% include body-copy-button.html data-command="http://localhost:8000" %}

En nuestro ejemplo anterior, esto es lo que vemos en un navegador web:

<div class="center guideimages">
  <img src="/assets/guides/basic-web-server-macos-linux/directory-listing-en.png" width="665" height="387" alt="Lista del directorios y archivos en el navegador web" class="responsive" />
</div>

En nuestro ejemplo, no teníamos un archivo llamado **index.html**, por lo que nuestro navegador web enumeró los archivos disponibles. Puede hacer clic en un archivo específico para observarlo en el navegador. Hagamos clic en el **hello.html** que verificamos anteriormente:

<div class="center guideimages">
  <img src="/assets/guides/basic-web-server-macos-linux/hello-world-page-en.png" width="665" height="387" alt="La página web Hello World" class="responsive" />
</div>

¡Ahora vemos la página web!

## Detengar el servidor web básico de Python

Cuando haya terminado de usar el servidor web, puede detenerlo desde el terminal. Para hacer esto, presione `Ctrl-C` en su teclado. Esto significa presionar las teclas `Ctrl` y `C` al mismo tiempo.

Observará un resultado como este:

<div class="center guideimages">
<figure class="fill-parent">
  <video playsinline autoplay loop muted
    width="665"
    height="387"
    class="responsive"
    title="Detengar servidor web Python">
    <source src="/assets/guides/basic-web-server-macos-linux/stop-python-http-server-en.webm"
      type="video/webm" />
    <source src="/assets/guides/basic-web-server-macos-linux/stop-python-http-server-en.mp4"
      type="video/mp4" />
    <div fallback>
      <p>This browser does not support the video element.</p>
    </div>
  </video>
  <figcaption class="center">Detengar servidor web Python</figcaption>
</figure>
</div>

## Conclusión

Ha aprendido a iniciar un servidor web básico en su computadora. Esto le ayudará con tareas como el desarrollo web y la programación de Python. Si está interesado en aprender más o programar en Python, puede visitar [https://www.python.org](https://www.python.org){:target="_blank" rel="noopener"}.
