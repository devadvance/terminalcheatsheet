---
layout: guide-layout
title: Cómo usar curl para probar una API REST (servicios web)
excerpt: Cómo usar curl para probar una API REST (servicios web)
permalink: /es/guides/curl-rest-api
permalink_without_prefix: /guides/curl-rest-api
lang: es
---

**Índice del artículo**

* TOC
{:toc}

## Introducción

Esta guía le enseñará los conceptos básicos de la interacción con una API REST con curl. A medida que siga estas instrucciones, tenga en cuenta que los archivos y carpetas de su computadora probablemente serán diferentes de los ejemplos. Si ya tiene mucha experiencia con el terminal, consulte [los comandos en la página de inicio para obtener material de referencia rápida](/es/).

## Prerrequisitos

Para seguir esta guía, necesitará:

* Acceso a un terminal en cualquier entorno Linux o macOS.
* Saber abrir una ventana de terminal. Si no está seguro, consulte las instrucciones para [macOS](open-terminal-macos) o Linux (próximamente).
* Una API REST con la que desea interactuar. Estamos usando `https://jsonplaceholder.typicode.com` como ejemplo en esta guía.
* La utilidad curl instalada en su computadora. La mayoría de las computadoras macOS y Linux lo tienen preinstalado. De lo contrario, deberá revisar las instrucciones técnicas [en el sitio web de instalación de curl](https://curl.haxx.se/docs/install.html){:target="_blank" rel="noopener"}.


## ¡Comencemos con GET!

Empiece por abrir su terminal.

curl es una herramienta de línea de comandos "orientado a la transferencia de archivos" con sintaxis de URL, lo que la hace muy útil para interactuar con API REST y otros recursos web. Tiene miles de usos, pero revisaremos solo algunos en esta guía.

Supongamos que tiene una API REST con la que desea interactuar. Por ejemplo, [https://jsonplaceholder.typicode.com/todos/1](https://jsonplaceholder.typicode.com/todos/1){:target="_blank" rel="noopener"} devuelve datos JSON que se ven así:

```
{
	"userId": 1,
	"id": 1,
	"title": "delectus aut autem",
	"completed": false
}
```

Si bien podemos abrir esta URL de ejemplo en nuestro navegador web, muchas API REST no nos permitirán hacerlo. Intentemos usar curl en su lugar.

En la ventana de su terminal, escriba `curl https://jsonplaceholder.typicode.com/todos/1` y presione **Enter**. Debería observar un resultado similar a este:

<div class="center guideimages">
<figure class="fill-parent">
  <video playsinline autoplay loop muted
    width="665"
    height="387"
    class="responsive"
    title="Usando curl">
    <source src="/assets/guides/curl-rest-api/curl-get-basic-en.webm"
      type="video/webm" />
    <source src="/assets/guides/curl-rest-api/curl-get-basic-en.mp4"
      type="video/mp4" />
    <div fallback>
      <p>This browser does not support the video element.</p>
    </div>
  </video>
  <figcaption class="center">Usando curl</figcaption>
</figure>
</div>

Sin ninguna opción, la condición base con `curl` es interactuar con el servidor usando el método de petición HTTP **GET**, que generalmente se usa solo para recuperar datos. Cubriremos los otros métodos de HTTP más adelante en esta guía.

Podemos agregar la opción `-o` para guardar la salida como un archivo en lugar de mostrarla directamente en la ventana del terminal. Escribe `curl -o test.json https://jsonplaceholder.typicode.com/todos/1` y presiona **Enter**:

<div class="center guideimages">
<figure class="fill-parent">
  <video playsinline autoplay loop muted
    width="665"
    height="387"
    class="responsive"
    title="Usando el método HTTP GET con curl y salida como un archivo">
    <source src="/assets/guides/curl-rest-api/curl-get-output-en.webm"
      type="video/webm" />
    <source src="/assets/guides/curl-rest-api/curl-get-output-en.mp4"
      type="video/mp4" />
    <div fallback>
      <p>This browser does not support the video element.</p>
    </div>
  </video>
  <figcaption class="center">Usando el método HTTP GET con curl y salida como un archivo</figcaption>
</figure>
</div>

Si queremos, podemos observar información más detallada sobre esta interacción a través de la red. Para hacerlo, puede agregar la opción `-v` a cualquier comando `curl`. Escribe `curl -v https://jsonplaceholder.typicode.com/todos/1` y presiona **Enter**:

<div class="center guideimages">
<figure class="fill-parent">
  <video playsinline autoplay loop muted
    width="665"
    height="387"
    class="responsive"
    title="Usando un comando básico con salida detallada">
    <source src="/assets/guides/curl-rest-api/curl-get-verbose-en.webm"
      type="video/webm" />
    <source src="/assets/guides/curl-rest-api/curl-get-verbose-en.mp4"
      type="video/mp4" />
    <div fallback>
      <p>This browser does not support the video element.</p>
    </div>
  </video>
  <figcaption class="center">Usando un comando básico con salida detallada</figcaption>
</figure>
</div>

## Usando diferentes métodos de HTTP con curl

Ahora que sabemos cómo hacer una consulta básica de una API REST usando curl, podemos probar diferentes métodos HTTP. Puede leer mucho más sobre los métodos de petición HTTP en [Wikipedia](https://es.wikipedia.org/wiki/Protocolo_de_transferencia_de_hipertexto#M%C3%A9todos_de_petici%C3%B3n).

### POST

El método HTTP **POST** se utiliza con mucha frecuencia para crear o actualizar datos en el servidor cuando se interactúa con una API REST. Para hacer eso, necesitará conocer algunas opciones nuevas para el comando `curl`:

* `-X [MÉTODO_HTTP]` - Necesitamos decirle a `curl` qué método HTTP usar. La opción `-X`, seguida del nombre del método HTTP, nos permite hacer eso.
* `-H [CABECERAS_HTTP]` - Al enviar datos a un servidor, necesitamos decirle al servidor cómo interpretar esos 1 y 0. Pueden ser datos JSON, datos de un formulario web, un email, etc.
* `-d [LOS_DATOS]` - Finalmente, necesitamos especificar qué datos `curl` debe enviarse al servidor.

Vamos a poner estas opciones juntas en un comando completo:

`curl -X POST -H 'Content-Type: application/json' -d '{"title": "foo","body": "bar","userId": 123}' https://jsonplaceholder.typicode.com/posts`

Puede escribirlo o copiarlo en la ventana de su terminal y presionar **Enter** para enviarlo, así:

<div class="center guideimages">
<figure class="fill-parent">
  <video playsinline autoplay loop muted
    width="665"
    height="387"
    class="responsive"
    title="Usando el método HTTP POST con curl">
    <source src="/assets/guides/curl-rest-api/curl-post-basic-en.webm"
      type="video/webm" />
    <source src="/assets/guides/curl-rest-api/curl-post-basic-en.mp4"
      type="video/mp4" />
    <div fallback>
      <p>This browser does not support the video element.</p>
    </div>
  </video>
  <figcaption class="center">Usando el método HTTP POST con curl</figcaption>
</figure>
</div>

Esa fue una gran cantidad de datos para intentar poner en un solo comando. En lugar de esto, podemos enviar datos utilizando un archivo para que sea más fácil y repetible.

Cree un nuevo archivo llamado `data.json` con los siguientes datos:

```
{
	"title": "foo",
	"body": "bar",
	"userId": 123
}
```

Si lo ha creado correctamente, debería poder `cat` el archivo, así:

<div class="center guideimages">
<figure class="fill-parent">
  <video playsinline autoplay loop muted
    width="665"
    height="387"
    class="responsive"
    title="Una demostración de un archivo de datos">
    <source src="/assets/guides/curl-rest-api/nano-datajson-en.webm"
      type="video/webm" />
    <source src="/assets/guides/curl-rest-api/nano-datajson-en.mp4"
      type="video/mp4" />
    <div fallback>
      <p>This browser does not support the video element.</p>
    </div>
  </video>
  <figcaption class="center">Una demostración de un archivo de datos</figcaption>
</figure>
</div>

Ahora puede usar ese archivo como parte de su comando `curl`. En lugar de poner los datos en el comando, se puede hacer referencia al archivo utilizando `-d @[NOMBRE_DE_ARCHIVO]`. Podemos probarlo escribiendo `curl -X POST -H 'Content-Type: application/json' -d @data.json https://jsonplaceholder.typicode.com/posts` y presionando **Enter**:

<div class="center guideimages">
<figure class="fill-parent">
  <video playsinline autoplay loop muted
    width="665"
    height="387"
    class="responsive"
    title="Usando el método HTTP POST con curl y un archivo de datos">
    <source src="/assets/guides/curl-rest-api/curl-post-file-en.webm"
      type="video/webm" />
    <source src="/assets/guides/curl-rest-api/curl-post-file-en.mp4"
      type="video/mp4" />
    <div fallback>
      <p>This browser does not support the video element.</p>
    </div>
  </video>
  <figcaption class="center">Usando el método HTTP POST con curl y un archivo de datos</figcaption>
</figure>
</div>

### PUT

El método HTTP **PUT** se usa a menudo para actualizar los datos existentes en el servidor cuando se interactúa con una API REST. De manera similar al ejemplo con **POST**, queremos establecer el método, el formato de datos y los datos al usar el comando `curl`.

Intentemos actualizar un artículo existente. Escribe `curl -X PUT -H 'Content-Type: application/json' -d '{"title": "foo_updated","body": "bar_updated","userId": 123}' https://jsonplaceholder.typicode.com/posts/1` y presiona **Enter**, así:

<div class="center guideimages">
<figure class="fill-parent">
  <video playsinline autoplay loop muted
    width="665"
    height="387"
    class="responsive"
    title="Usando el método HTTP PUT con curl">
    <source src="/assets/guides/curl-rest-api/curl-put-basic-en.webm"
      type="video/webm" />
    <source src="/assets/guides/curl-rest-api/curl-put-basic-en.mp4"
      type="video/mp4" />
    <div fallback>
      <p>This browser does not support the video element.</p>
    </div>
  </video>
  <figcaption class="center">Usando el método HTTP PUT con curl</figcaption>
</figure>
</div>

También puede usar un archivo de datos de la misma manera que lo hizo con el método HTTP **POST**, usando `-d @[NOMBRE_DE_ARCHIVO]`.

### DELETE

Si desea eliminar datos del servidor, es probable que utilice el método HTTP **DELETE** cuando interactúe con una API REST. Esto es un poco más simple en comparación con los ejemplos anteriores. Utilizará `-X DELETE` para especificar el método HTTP **DELETE** y especificar una URL de recurso específica para eliminar. Pruébelo escribiendo `curl -X DELETE https://jsonplaceholder.typicode.com/posts/1` y presionando **Enter**:

<div class="center guideimages">
<figure class="fill-parent">
  <video playsinline autoplay loop muted
    width="665"
    height="387"
    class="responsive"
    title="Usando el método HTTP DELETE con curl">
    <source src="/assets/guides/curl-rest-api/curl-delete-basic-en.webm"
      type="video/webm" />
    <source src="/assets/guides/curl-rest-api/curl-delete-basic-en.mp4"
      type="video/mp4" />
    <div fallback>
      <p>This browser does not support the video element.</p>
    </div>
  </video>
  <figcaption class="center">Usando el método HTTP DELETE con curl</figcaption>
</figure>
</div>

Notará que muchas API REST devuelven los datos eliminados o no devuelven datos cuando se utiliza el método de solicitud DELETE HTTP.

### OPTIONS

A veces, necesitamos saber qué tipos de solicitudes o datos podemos enviar a un servidor. Para hacer esto, puede utilizar el método HTTP **OPTIONS**.

Deberá utilizar la opción `-v` que aprendió anteriormente. Esto activará una salida más detallada para que pueda examinar las "opciones" que admite el servidor.

Podemos probarlo escribiendo `curl -v -X OPTIONS https://jsonplaceholder.typicode.com/posts` y presionando **Enter**:

<div class="center guideimages">
<figure class="fill-parent">
  <video playsinline autoplay loop muted
    width="665"
    height="387"
    class="responsive"
    title="Usando el método HTTP OPTIONS con curl con salida detallada">
    <source src="/assets/guides/curl-rest-api/curl-options-verbose-en.webm"
      type="video/webm" />
    <source src="/assets/guides/curl-rest-api/curl-options-verbose-en.mp4"
      type="video/mp4" />
    <div fallback>
      <p>This browser does not support the video element.</p>
    </div>
  </video>
  <figcaption class="center">Usando el método HTTP OPTIONS con curl con salida detallada</figcaption>
</figure>
</div>

A medida que se desplaza por la ventana de su terminal, observará información como esta:

```
...
< access-control-allow-credentials: true
< access-control-allow-methods: GET,HEAD,PUT,PATCH,POST,DELETE
...
```

Eso le dice qué métodos HTTP permite el servidor de API REST. También le dice que el servidor le permitirá autenticarse y usar credenciales.

## Terminando

Ahora sabe un poco sobre el uso `curl` para interactuar con servidores y API REST. Este es un comando y una herramienta extremadamente útil.