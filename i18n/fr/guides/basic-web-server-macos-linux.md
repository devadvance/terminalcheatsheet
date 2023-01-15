---
layout: guide-layout
title: Comment lancer un serveur web basique sur macOS ou Linux
excerpt: Ce guide vous apprend à utiliser Python pour lancer un serveur web basique à partir de n'importe quel dossier sur votre machine sous macOS ou Linux.
permalink: /fr/guides/basic-web-server-macos-linux
permalink_without_prefix: /guides/basic-web-server-macos-linux
lang: fr
---

**Table des matières**

* TOC
{:toc}

## Introduction

Si vous travaillez sur des pages web ou d'autres contenus web, vous pouvez avoir besoin d'une façon simple et rapide de lancer un serveur web basique. Ce guide va vous apprendre une commande Python pour lancer un serveur web basique sur votre machine. En suivant ces instructions, gardez à l'esprit que vos fichiers et dossiers de votre machine seront probablement différents des exemples. Si vous maitrisez déjà le terminal, allez voir [les commandes de la page d'accueil pour de l'aide](/)

## Prérequis

Afin de suivre ce guide, vous aurez besoin :

* D'un accès à un terminal Unix sur votre machine sous macOS ou Linux.
* De savoir comment ouvrir une fenêtre de terminal. Si vous n'êtes pas sûr de vous, allez voir les instructions pour [macOS](open-terminal-macos) ou Linux (bientôt disponible).
* De savoir comment vous déplacer de fichier en fichier et de dossiers en dossiers dans le terminal. Si vous n'êtes pas sûr de vous, suivez [d'abord ce guide pour apprendre comment le faire](navigate-terminal).
* D'avoir Python 3 installé sur votre machine. Il est installé de base dans les versions récentes de macOS et dans plusieurs versions de Linux.

## Commencer par trouver le bon dossier

Tout d'abord, vous avez besoin de vous déplacer dans le dossier où vos pages web ou votre contenu web est enregistré. Si vous n'êtes pas sûr de comment faire, vous pourriez vouloir lire [ce guide](navigate-terminal).

Disons que votre contenu web est dans ce dossier `/home/user/examples`. On veut faire trois choses :

1. Être sûr que nous sommes dans le bon répertoire de travail en utilisant `pwd`.
2. Vérifier si on a le contenu web dans le dossier en utilisant `ls`.
3. vérifier is le contenu web est au bon format, comme HTML par exemple, en utilisant `cat`.

Voilà l'ensemble des étapes :

<div class="center guideimages">
<figure class="fill-parent">
  <video playsinline autoplay loop muted
    width="665"
    height="387"
    class="responsive"
    title="Navigating and checking web content">
    <source src="/assets/guides/basic-web-server-macos-linux/checking-web-content-en.webm"
      type="video/webm" />
    <source src="/assets/guides/basic-web-server-macos-linux/checking-web-content-en.mp4"
      type="video/mp4" />
    <div fallback>
      <p>This browser does not support the video element.</p>
    </div>
  </video>
  <figcaption class="center">Navigating and checking web content</figcaption>
</figure>
</div>

Dans l'exemple ci-desus, on utilise `pwd` pour vérifier que `/home/user/examples` est bien notre répertoire de travail. Ensuite, on utilise `ls` pour lister les contenus du répertoire de travail afin d'être sûr qu'il y a un fichier HTML dedans. Vous pouvez remarquer le fichier **hello.html**.

Et enfin, on peut voir les contenus de **hello.html** en utilisant `cat` pour être sûr qu'il y a vraiment du HTML.

Nous sommes maintenant prêt à lancer notre serveur web !

## Lancer le serveur web basique en Python

Étant donné qu'il est souvent installé sur les machines par défaut, nous allons utiliser Python pour démarrer un serveur web basique.

Nous allons utiliser cette commande pour lancer un serveur web : `python3 -m http.server 8000`
{% include body-copy-button.html data-command="python3 -m http.server 8000" %}

Regardons de plus près ce que fait cette commande :

* `python3` ordonne le terminal d'utiliser Python 3 pour faire quelque chose.
* `-m http.server` ordonne Python de démarrer un serveur web.
* `8000` ordonne Python d'utiliser le port 8000 pour le serveur web.

Essayons de le démarrer :

<div class="center guideimages">
<figure class="fill-parent">
  <video playsinline autoplay loop muted
    width="665"
    height="387"
    class="responsive"
    title="Start Python web server">
    <source src="/assets/guides/basic-web-server-macos-linux/start-python-http-server-en.webm"
      type="video/webm" />
    <source src="/assets/guides/basic-web-server-macos-linux/start-python-http-server-en.mp4"
      type="video/mp4" />
    <div fallback>
      <p>This browser does not support the video element.</p>
    </div>
  </video>
  <figcaption class="center">Start Python web server</figcaption>
</figure>
</div>

Si vous regardez ce qu'il y a au dessus, le serveur web est maintenant lancé sur votre machine.


## Vérifier votre contenu web

Ensuite, nous pouvons vérifier si notre contenu web s'affiche dans un navigateur web. On peut ouvrir une URL en local pour naviguer dans le contenu : `http://localhost:8000`
{% include body-copy-button.html data-command="http://localhost:8000" %}

Dans notre exemple au dessus, voilà ce qu'on observe dans un navigateur web : 

<div class="center guideimages">
  <img src="/assets/guides/basic-web-server-macos-linux/directory-listing-en.png" width="665" height="387" alt="Directory listing in the web browser" class="responsive" />
</div>

Dans notre exemple, nous n'avons pas de fichier nommé **index.html** donc notre navigateur web a listé tous les fichiers disponibles. Vous pouvez cliquer sur un fichier pour l'ouvrir dans le navigateur. Cliquons sur le fichier **hello.html** que nous avons regardé tout à l'heure : 

<div class="center guideimages">
  <img src="/assets/guides/basic-web-server-macos-linux/hello-world-page-en.png" width="665" height="387" alt="Hello world page" class="responsive" />
</div>

On peut maintenant voir la page web !
