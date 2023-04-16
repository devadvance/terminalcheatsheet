---
layout: guide-layout
title: Comment télécharger des fichiers avec curl
excerpt: Comment télécharger des fichiers avec curl
permalink: /fr/guides/curl-download-files
permalink_without_prefix: /guides/curl-download-files
lang: fr
---

**Table des matières**

* TOC
{:toc}

## Introduction

Ce guide a pour but de vous enseigner les méthodes de base pour télécharger des fichiers en utilisant [curl](https://github.com/curl/curl). En suivant ces instructions, gardez à l'esprit que les fichiers et dossiers de votre ordinateur seront probablement différents des exemples. Si vous avez déjà beaucoup d'expérience avec le terminal, consultez [les commandes sur la page d'accueil pour un matériel de référence rapide](/fr/).

## Prérequis

Pour suivre ce guide, vous aurez besoin :

* D'accéder à un terminal Unix sur n'importe quel environnement Linux ou macOS.
* De savoir comment ouvrir une fenêtre de terminal. Si vous n'êtes pas sûr, visitez les instructions pour [macOS](open-terminal-macos) ou Linux (bientôt disponible).
* D'un fichier que vous souhaitez télécharger. Nous utilisons `https://terminalcheatsheet.com/sample-file.jpg` comme exemple dans ce guide.
* De l'utilitaire curl installé sur votre ordinateur. La plupart des ordinateurs macOS et Linux l'ont préinstallé. Sinon, vous devrez consulter les instructions techniques [sur le site d'installation de curl](https://curl.haxx.se/docs/install.html){:target="_blank" rel="noopener"}.

## Téléchargement d'un fichier

Commencez par ouvrir votre terminal.

`curl` est un "outil en ligne de commande pour transférer des données spécifiées avec une syntaxe d'URL". Cela signifie qu'il peut télécharger des fichiers à partir d'URL.

Par exemple, [https://terminalcheatsheet.com/sample-file.jpg](https://terminalcheatsheet.com/sample-file.jpg){:target="_blank" rel="noopener"} renvoie un fichier image que nous pouvons télécharger avec curl.

### Enregistrer avec le nom de fichier de l'URL

Si nous voulons télécharger le fichier et le sauvegarder avec le même nom, nous pouvons utiliser cette commande :

```
curl --remote-name [URL]
```

`[URL]` est l'URL à partir de laquelle nous voulons télécharger le fichier. `--remote-name` demande à curl d'utiliser le nom de l'URL comme nom pour le fichier sur l'ordinateur.

Nous pouvons utiliser cette commande plus courte pour faire la même chose :

```
curl -O [URL]
```

`-O` est une façon courte d'écrire `--remote-name` de la commande précédente.

### Enregistrer avec un nom de fichier différent

Si nous voulons télécharger le fichier et le sauvegarder avec un nom différent, nous pouvons utiliser cette commande à la place :

```
curl --output [FILENAME] [URL]
```

* `[URL]` - Nous indiquons à `curl` l'URL à télécharger.
* `--output [FILENAME]` - Nous indiquons à `curl` où sauvegarder le fichier.

Nous pouvons utiliser cette commande plus courte pour faire la même chose :

```
curl -o [FILENAME] [URL]
```

* `[URL]` - Nous indiquons à `curl` l'URL à télécharger.
* `-o [FILENAME]` - Nous indiquons à `curl` où sauvegarder le fichier.

## Conclusion

Maintenant, vous en savez un peu plus sur l'utilisation de `curl` pour télécharger des fichiers à partir d'une URL.
