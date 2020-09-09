---
layout: guide-layout
title: Cómo navegar con archivos y carpetas en una terminal
excerpt: Cómo navegar con archivos y carpetas en una terminal
permalink: /es/guides/navigate-terminal
permalink_without_prefix: /guides/navigate-terminal
lang: es
---

**Índice del artículo**

* TOC
{:toc}

## Introducción

Esta guía le enseñará los conceptos básicos de la navegación de archivos y carpetas en un terminal. Si es un usuario avanzado que ya tiene experiencia con el terminal, esta guía es menos útil. A medida que siga estas instrucciones, tenga en cuenta que los archivos y carpetas de su computadora probablemente serán diferentes de los ejemplos.

## Prerrequisitos

Para seguir esta guía, necesitará:

* Acceso a un terminal en cualquier entorno Linux o macOS.
* Saber abrir una ventana de terminal. Si no está seguro, consulte las instrucciones para [macOS](open-terminal-macos) o Linux (próximamente).

## ¡Empecemos!

Empiece por abrir su terminal.

Cuando usa la terminal, trabaja desde dentro de una carpeta específica en su computadora. Siempre puede acceder a elementos de otras carpetas en su computadora, pero el terminal realizará un seguimiento de la carpeta en la que se encuentra actualmente. Esto se conoce como su **directorio de trabajo**.

Tan pronto como abra la terminal, estará dentro de un directorio de trabajo. Escribe `pwd` al terminal y presiona **Enter**. `pwd` significa "imprimir directorio de trabajo" (inglés: "print working directory"). La salida de este comando le dice qué carpeta es su directorio de trabajo actual.

En la captura de pantalla de muestra a continuación, nuestro directorio de trabajo es una carpeta llamada **examples**:

<div class="center guideimages">
  <amp-img src="/assets/guides/navigate-work-files/pwd-en.png" width="665" height="387" alt="terminal comando pwd" layout="responsive"></amp-img>
</div>

A continuación, puede explorar el contenido del directorio de trabajo. Escribe `ls` en su terminal y presiona **Enter**. `ls` significa "lista" (inglés: "list"). Este comando enumerará todos los archivos y carpetas en su directorio de trabajo:

<div class="center guideimages">
  <amp-img src="/assets/guides/navigate-work-files/ls-en.png" width="665" height="387" alt="terminal comando ls" layout="responsive"></amp-img>
</div>

Esto es similar a abrir el administrador de archivos y mirar el contenido de la carpeta del directorio de trabajo:

<div class="center guideimages">
  <amp-img src="/assets/guides/navigate-work-files/ls-finder-es.png" width="665" height="387" alt="administrador de archivos mirar el contenido" layout="responsive"></amp-img>
</div>

Puede enumerar todo el contenido en carpetas que no son su directorio de trabajo escribiendo `ls [NOMBRE_DE_CARPETA]`. Esto es como echar un vistazo dentro de otra carpeta, sin cambiar nuestro directorio de trabajo. En el siguiente ejemplo, estamos viendo el contenido de la **carpeta1**. Podemos ver que la **carpeta1** solo tiene un archivo llamado **file3.pdf**:

<div class="center guideimages">
  <amp-img src="/assets/guides/navigate-work-files/ls-folder1-en.png" width="665" height="387" alt="ls comando con un carpeta" layout="responsive"></amp-img>
</div>

Esto es similar a mirar el contenido de una carpeta dentro de su directorio de trabajo en el administrador de archivos:

<div class="center guideimages">
  <amp-img src="/assets/guides/navigate-work-files/ls-folder1-finder-es.png" width="665" height="387" alt="administrador de archivos echar un vistazo" layout="responsive"></amp-img>
</div>

El `ls` comando tiene opciones adicionales que pueden cambiar su funcionamiento.

Intente escribir `ls -a` y presionar **Enter** para mostrar todos los archivos, incluidos los ocultos. En muchas computadoras, estos archivos comienzan con un punto y están ocultos por defecto. Los ejemplos comunes de estos archivos incluyen cosas como "_.DS_Store_" (en macOS), "_.profile_" (en Linux) y "_.gitignore_" (cuando se usa Git para sus proyectos).

Observe cómo ahora podemos ver **.hidden-file**, que no se mostraba con el comando `ls` anterior:

<div class="center guideimages">
  <amp-img src="/assets/guides/navigate-work-files/ls-a-en.png" width="665" height="387" alt="terminal comando ls todo" layout="responsive"></amp-img>
</div>

Otra opción para listar archivos es escribir `ls -l` y presionar **Enter**. Esta opción genera una lista larga. Además de los nombres de los archivos y carpetas, también mostrará atributos, como cuándo se modificaron por última vez y su tamaño:

<div class="center guideimages">
  <amp-img src="/assets/guides/navigate-work-files/ls-l-en.png" width="665" height="387" alt="terminal comando ls largo" layout="responsive"></amp-img>
</div>

De manera similar a muchos comandos de terminal, puede combinar estas dos opciones. Para hacer esto, escriba `ls -la` y presione **Entrar**, que mostrará **todos** los elementos en formato **largo**:

<div class="center guideimages">
  <amp-img src="/assets/guides/navigate-work-files/ls-la-en.png" width="665" height="387" alt="terminal comando ls largo y todo" layout="responsive"></amp-img>
</div>

## Navegando por carpetas

Es posible que haya notado que nuestro directorio de trabajo tiene varias partes en el nombre. En general, el carácter `/` (barra) significa que está dentro de una carpeta. Entonces, cuando ve `/home/user/examples` como su directorio de trabajo, eso significa que:

* Usted está dentro de la carpeta **examples**, que es el directorio de trabajo.
* La carpeta **examples** está dentro de la carpeta **user**.
* La carpeta **user** está dentro de la carpeta **home**.
* La carpeta **home** está dentro del sistema de archivos de su computadora y no hay nada más allá.

Ahora podemos cambiar nuestro directorio de trabajo. En nuestro ejemplo, vimos dos carpetas cuando usamos `ls` para listar todo (**folder1** y **folder2**).

Escribe `cd [NOMBRE_DE_CARPETA]` y presiona **Enter**. Su directorio de trabajo ahora ha cambiado. `cd` significa "cambiar directorio" (inglés: "change directory"). Puede escribir `pwd` nuevamente y presionar **Enter** para verificar que ha cambiado su directorio de trabajo. En nuestra muestra, cambiamos nuestro directorio de trabajo a **folder1**:

<div class="center guideimages">
  <amp-img src="/assets/guides/navigate-work-files/cd-folder1-en.png" width="665" height="387" alt="terminal comando cd" layout="responsive"></amp-img>
</div>

Esto es similar a hacer clic en una carpeta en el administrador de archivos. Ha cambiado completamente la carpeta en la que se encuentra:

<div class="center guideimages">
  <amp-img src="/assets/guides/navigate-work-files/cd-folder1-finder-es.png" width="665" height="387" alt="macOS carpeta cambiar directorio" layout="responsive"></amp-img>
</div>

Si desea ir "arriba" a nuestra carpeta anterior, puede escribir `cd ..` y presionar **Enter**. Esto te llevará a un nivel de carpeta:

<div class="center guideimages">
  <amp-img src="/assets/guides/navigate-work-files/cd-folder1-and-back-en.png" width="665" height="387" alt="terminal cd folder1 y atrás" layout="responsive"></amp-img>
</div>

Esta idea de "bajar" a una carpeta o "subir" fuera de una carpeta es muy común cuando se usa el terminal. Cuando el terminal ordena, usa los nombres de las carpetas cuando "baja" un nivel y `..` significa que "sube" un nivel.

## Ver el contenido del archivo

Probablemente esté emocionado de comenzar a trabajar con archivos con terminal. Esto puede depender del _tipo_ de archivo, ya que ver un archivo de imagen es diferente a leer un documento.

Para archivos de texto, un comando útil cuando se trabaja en la terminal es escribir `cat [NOMBRE_DE_ARCHIVO]` y presionar **Enter**. El comando `cat` es la abreviatura de "concatenar" y tiene múltiples usos.

Uno de los usos más comunes es mostrar el contenido de un archivo de texto en la terminal. En la captura de pantalla a continuación, mostramos el contenido de **hello.txt** en nuestro directorio de trabajo:

<div class="center guideimages">
  <amp-img src="/assets/guides/navigate-work-files/cat-hello-en.png" width="665" height="387" alt="terminal comando cat" layout="responsive"></amp-img>
</div>

## Conclusión

¡Bien hecho! Ahora conoce los aspectos básicos de la navegación de archivos y carpetas en su terminal. Esto incluye cambiar su directorio de trabajo, enumerar archivos y carpetas y ver el contenido de un archivo de texto.

En una guía futura, aprenderá a crear y modificar archivos y carpetas.
