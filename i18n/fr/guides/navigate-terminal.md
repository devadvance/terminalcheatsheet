---
title: Comment parcourir les fichiers et dossiers sur un terminal
extrait: Ce guide est destiné à vous apprendre les bases de la navigation dans les fichiers et dossiers sur un terminal.
permalien: / guides / navigateur-terminal
permalink_without_prefix: / guides / navigation-terminal
lang: en
---

TODO

* TOC
{:toc}

## Introduction

Ce guide est destiné à vous enseigner les bases de la navigation dans les fichiers et les dossiers sur un terminal. En suivant ces instructions, gardez à l'esprit que les fichiers et dossiers de votre ordinateur seront probablement différents des exemples. Si vous avez déjà beaucoup d'expérience avec le terminal, consultez les commandes sur la page d'accueil pour des références rapides.

## Conditions préalables

Pour suivre ce guide, vous aurez besoin de:

* Accès à un terminal Unix sur n'importe quel environnement Linux ou macOS.
* Pour savoir comment ouvrir une fenêtre de terminal. Si vous n'êtes pas sûr, consultez les instructions pour [macOS] (open-terminal-macos) ou Linux (bientôt disponible).

## Commençons!

Commencez par ouvrir votre terminal.

Lorsque vous utilisez le terminal, vous travaillez depuis l'intérieur d'un dossier spécifique sur votre ordinateur. Vous pouvez toujours accéder aux éléments d'autres dossiers sur votre ordinateur, mais le terminal gardera une trace du dossier dans lequel vous vous trouvez actuellement. Ceci est connu comme votre ** répertoire de travail **.

Dès que vous ouvrez le terminal, vous serez dans un répertoire de travail. Tapez `pwd` dans le terminal et appuyez sur ** Entrée **. `pwd` signifie" imprimer le répertoire de travail ". La sortie de cette commande vous indique quel dossier est votre répertoire de travail actuel.

Dans l'exemple de capture d'écran ci-dessous, notre répertoire de travail est un dossier appelé ** exemples **:

<div class="center guideimages">
  <amp-img src="/assets/guides/navigate-work-files/pwd-en.png" width="665" height="387" alt="terminal pwd command" layout="responsive"></amp-img>
</div>

Ensuite, vous pouvez explorer le contenu du répertoire de travail. Tapez «ls» dans votre terminal et appuyez sur ** Entrée **. «ls» signifie «liste». Cette commande répertorie tous les fichiers et dossiers de votre répertoire de travail. Dans notre exemple, il montre tous les fichiers et dossiers dans ** exemples **:

<div class="center guideimages">
  <amp-img src="/assets/guides/navigate-work-files/ls-en.png" width="665" height="387" alt="terminal list command" layout="responsive"></amp-img>
</div>

Cela revient à ouvrir votre application de navigateur de fichiers et à examiner le contenu de votre dossier de répertoire de travail:

<div class="center guideimages">
  <amp-img src="/assets/guides/navigate-work-files/ls-finder-en.png" width="665" height="387" alt="file browser show contents" layout="responsive"></amp-img>
</div>

Vous pouvez lister tout le contenu des dossiers qui ne sont pas votre répertoire de travail en tapant «ls [FOLDER_NAME]». C'est comme jeter un œil à l'intérieur d'un autre dossier, sans changer notre répertoire de travail. Dans l'exemple ci-dessous, nous examinons le contenu de ** dossier1 **. Nous pouvons observer que ** dossier1 ** n'a qu'un seul fichier appelé ** file3.pdf **:

<div class="center guideimages">
  <amp-img src="/assets/guides/navigate-work-files/ls-folder1-en.png" width="665" height="387" alt="ls command folder" layout="responsive"></amp-img>
</div>

Ceci est similaire à l'examen du contenu d'un dossier dans votre répertoire de travail dans votre application de navigateur de fichiers:

<div class="center guideimages">
  <amp-img src="/assets/guides/navigate-work-files/ls-folder1-finder-en.png" width="665" height="387" alt="file browser folder peek" layout="responsive"></amp-img>
</div>

La commande `ls` a des options supplémentaires qui peuvent changer son fonctionnement.

Essayez de taper «ls -a» et appuyez sur ** Entrée ** pour afficher tous les fichiers, y compris les fichiers cachés. Sur de nombreux ordinateurs, ces fichiers commencent par un point et sont masqués par défaut. Des exemples courants de ces fichiers incluent des éléments tels que "* .DS_Store *" (sous macOS), "* .profile *" (sous Linux) et "* .gitignore *" (lors de l'utilisation de Git pour vos projets).

Notez comment nous pouvons maintenant observer **. Hidden-file **, qui n'était pas affiché avec la commande précédente `ls`:

<div class="center guideimages">
  <amp-img src="/assets/guides/navigate-work-files/ls-a-en.png" width="665" height="387" alt="terminal ls all command" layout="responsive"></amp-img>
</div>

Une autre option pour lister les fichiers est de taper `ls -l` et d'appuyer sur ** Entrée **. Cette option génère une longue liste. Cela signifie qu'il affiche des détails supplémentaires pour les fichiers et les dossiers. En plus des noms de fichiers et de dossiers, il affichera également des attributs, tels que la date de leur dernière modification et leur taille:

<div class="center guideimages">
  <amp-img src="/assets/guides/navigate-work-files/ls-l-en.png" width="665" height="387" alt="terminal ls long command" layout="responsive"></amp-img>
</div>

Semblable à de nombreuses commandes de terminal, vous pouvez combiner ces deux options. Pour ce faire, tapez `ls -la` et appuyez sur ** Entrée **, qui listera ** tous ** les éléments au format ** long **:

<div class="center guideimages">
  <amp-img src="/assets/guides/navigate-work-files/ls-la-en.png" width="665" height="387" alt="terminal ls long all command" layout="responsive"></amp-img>
</div>

## Parcourir les dossiers

Vous avez peut-être remarqué que notre répertoire de travail comporte plusieurs parties dans le nom. En général, le caractère `/` (barre oblique) signifie que vous êtes dans un dossier. Ainsi, lorsque vous observez `/ home / user / examples` comme répertoire de travail, cela signifie que:

* Vous êtes à l'intérieur du dossier ** examples **, qui est votre répertoire de travail.
* Le dossier ** examples ** se trouve à l'intérieur du dossier ** user **.
* Le dossier ** user ** se trouve à l'intérieur du dossier ** home **.
* Le dossier ** home ** est à l'intérieur du système de fichiers de votre ordinateur et il n'y a rien au-delà.

Nous pouvons maintenant changer notre répertoire de travail. Dans notre exemple, nous avons vu deux dossiers lors de l'utilisation de `ls` pour tout lister (** dossier1 ** et ** dossier2 **).

Tapez «cd [FOLDER_NAME]» et appuyez sur ** Entrée **. Votre répertoire de travail est maintenant modifié. `cd` signifie" changer de répertoire ". Vous pouvez taper à nouveau `pwd` et appuyer sur ** Entrée ** pour vérifier que vous avez changé votre répertoire de travail. Dans notre exemple, nous avons changé notre répertoire de travail en ** folder1 **:

<div class="center guideimages">
  <amp-img src="/assets/guides/navigate-work-files/cd-folder1-en.png" width="665" height="387" alt="terminal cd command" layout="responsive"></amp-img>
</div>

Cela revient à cliquer dans un dossier dans votre application de navigateur de fichiers. Vous avez complètement changé le dossier dans lequel vous vous trouvez:

<div class="center guideimages">
  <amp-img src="/assets/guides/navigate-work-files/cd-folder1-finder-en.png" width="665" height="387" alt="macOS folder change directory" layout="responsive"></amp-img>
</div>

Si vous vouliez aller «en haut» à notre dossier précédent, vous pouvez taper «cd ..» et appuyer sur ** Entrée **. Cela vous fera monter d'un niveau de dossier:

<div class="center guideimages">
  <amp-img src="/assets/guides/navigate-work-files/cd-folder1-and-back-en.png" width="665" height="387" alt="terminal cd folder1 and back" layout="responsive"></amp-img>
</div>

Cette idée d'aller «vers le bas» dans un dossier ou «vers le haut» d'un dossier est très courante lors de l'utilisation du terminal. Lorsque le terminal commande, vous utilisez les noms de dossiers pour «descendre» d'un niveau et «..» pour signifier «monter» d'un niveau.

## Affichage du contenu du fichier

Vous êtes probablement ravi de commencer à travailler avec des fichiers avec un terminal. Cela peut dépendre du * type * de fichier, car la visualisation d'un fichier image est différente de la lecture d'un fichier document.

Pour les fichiers texte, une commande utile lorsque vous travaillez dans le terminal est de taper `cat [FILE_NAME]` et d'appuyer sur ** Entrée **. La commande `cat` est l'abréviation de" concatenate "et a de multiples utilisations.

L'une des utilisations les plus courantes est d'afficher le contenu d'un fichier texte dans le terminal. Dans la capture d'écran ci-dessous, nous affichons le contenu de ** hello.txt ** dans notre répertoire de travail:

<div class="center guideimages">
  <amp-img src="/assets/guides/navigate-work-files/cat-hello-en.png" width="665" height="387" alt="terminal cat command" layout="responsive"></amp-img>
</div>

## Conclusion

Bien joué! Vous connaissez désormais les bases de la navigation dans les fichiers et dossiers de votre terminal. Cela inclut la modification de votre répertoire de travail, la liste des fichiers et des dossiers et l'affichage du contenu d'un fichier texte.

Dans un futur guide, vous apprendrez comment créer et modifier des fichiers et des dossiers.
