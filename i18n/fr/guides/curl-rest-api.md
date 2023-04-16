---
layout: guide-layout
title: Comment tester une API REST avec curl
excerpt: Comment tester une API REST avec curl
permalink: /fr/guides/curl-rest-api
permalink_without_prefix: /guides/curl-rest-api
lang: fr
---

**Table des matières**

* TOC
{:toc}

## Introduction

Ce guide est destiné à vous apprendre les bases de l'interaction avec une API REST en utilisant [curl](https://github.com/curl/curl). En suivant ces instructions, n'oubliez pas que les fichiers et dossiers de votre ordinateur seront probablement différents de ceux des exemples. Si vous avez déjà beaucoup d'expérience avec le terminal sur macOS, consultez [les commandes sur la page d'accueil pour des référence rapidel](/fr/).

## Conditions préalables

Pour suivre ce guide, vous aurez besoin :

* L'accès à un terminal Unix sur tout environnement Linux ou MacOS.
* Savoir comment ouvrir une fenêtre de terminal. Si vous n'êtes pas sûr, consultez les instructions pour [macOS](open-terminal-macos) ou Linux (à venir).
* Une API REST avec laquelle vous souhaitez interagir. Nous utilisons `https://jsonplaceholder.typicode.com` comme exemple dans ce guide.
* L'utilitaire curl installé sur votre ordinateur. Il est préinstallé sur la plupart des ordinateurs MacOS et Linux. Si ce n'est pas le cas, vous devrez consulter les instructions techniques [sur le site d'installation de curl](https://curl.haxx.se/docs/install.html){:target="_blank" rel="noopener"}.

## Commençons par GET !

Commencez par ouvrir votre terminal.

curl est un "outil de ligne de commande pour le transfert de données spécifiées avec la syntaxe URL", ce qui le rend très utile pour interagir avec les APIs REST et d'autres ressources web. Il a des milliers d'utilisations, mais nous allons en passer quelques-unes en revue dans ce guide.

Disons que vous avez une API REST avec laquelle vous souhaitez interagir. Par exemple, [https://jsonplaceholder.typicode.com/todos/1](https://jsonplaceholder.typicode.com/todos/1){:target="_blank" rel="noopener"} renvoie des données JSON similaires à celle-ci :

```
{
	"userId": 1,
	"id": 1,
	"title": "delectus aut autem",
	"completed": false
}
```

Bien que nous puissions ouvrir cet exemple d'URL dans notre navigateur web, de nombreux APIs REST ne nous permettent pas de le faire. Essayons plutôt d'utiliser le curl.

Dans la fenêtre de votre terminal, tapez `curl https://jsonplaceholder.typicode.com/todos/1` et appuyez sur **Entrée**. Vous devriez obtenir un résultat similaire à celui-ci :

<div class="center guideimages">
<figure class="fill-parent">
  <video playsinline autoplay loop muted
    width="665"
    height="387"
    class="responsive"
    title="Démonstration de la commande curl de base">
    <source src="/assets/guides/curl-rest-api/curl-get-basic-en.webm"
      type="video/webm" />
    <source src="/assets/guides/curl-rest-api/curl-get-basic-en.mp4"
      type="video/mp4" />
    <div fallback>
      <p>This browser does not support the video element.</p>
    </div>
  </video>
  <figcaption class="center">Démonstration de la commande curl de base</figcaption>
</figure>
</div>

Sans aucune option, `curl` interagit par défaut avec le serveur en utilisant une méthode de requête HTTP **GET**, qui est généralement utilisée pour la lecture des données uniquement. Nous traiterons des autres méthodes de requête HTTP plus loin dans ce guide.

Ajoutons l'option `-o` pour enregistrer le resultat sous forme de fichier au lieu de l'afficher directement dans la fenêtre du terminal. Tapez `curl -o test.json https://jsonplaceholder.typicode.com/todos/1` et appuyez sur **Entrée** :

<div class="center guideimages">
<figure class="fill-parent">
  <video playsinline autoplay loop muted
    width="665"
    height="387"
    class="responsive"
    title="Démonstration de la commande curl de base avec sortie de fichier">
    <source src="/assets/guides/curl-rest-api/curl-get-output-en.webm"
      type="video/webm" />
    <source src="/assets/guides/curl-rest-api/curl-get-output-en.mp4"
      type="video/mp4" />
    <div fallback>
      <p>This browser does not support the video element.</p>
    </div>
  </video>
  <figcaption class="center">Démonstration de la commande curl de base avec sortie de fichier</figcaption>
</figure>
</div>

Si nous le voulons, nous pouvons examiner des informations plus détaillées sur cette interaction sur le réseau. Pour ce faire, vous pouvez ajouter l'option `-v` à toute commande `-curl`. Tapez `curl -v https://jsonplaceholder.typicode.com/todos/1` et appuyez sur **Entrée** :

<div class="center guideimages">
<figure class="fill-parent">
  <video playsinline autoplay loop muted
    width="665"
    height="387"
    class="responsive"
    title="Démonstration de la commande curl de base avec une sortie verbeuse">
    <source src="/assets/guides/curl-rest-api/curl-get-verbose-en.webm"
      type="video/webm" />
    <source src="/assets/guides/curl-rest-api/curl-get-verbose-en.mp4"
      type="video/mp4" />
    <div fallback>
      <p>This browser does not support the video element.</p>
    </div>
  </video>
  <figcaption class="center">Démonstration de la commande curl de base avec une sortie verbeuse</figcaption>
</figure>
</div>

## Utilisation de différentes méthodes de requête HTTP avec curl

Maintenant que nous savons comment faire une requête de base d'une API REST en utilisant curl, nous pouvons essayer différentes méthodes HTTP. Vous pouvez en lire beaucoup plus sur les différentes méthodes de requête HTTP sur [Wikipedia](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol#Request_methods).

### POST

La méthode de requête HTTP **POST** est très fréquemment utilisée pour créer ou mettre à jour des données sur le serveur lors de l'interaction avec une API REST. Pour ce faire, vous devez connaître quelques nouvelles options pour la commande `cur` :

* `-X [METHODE_HTTP]` - Nous devons indiquer à `curl` quelle méthode de requête HTTP utiliser. L'option `-X`, suivie du nom de la méthode, nous permet de le faire.
* `-H [EN_TETE_HTTP]` - Lorsque nous envoyons des données à un serveur, nous devons dire au serveur comment interpréter ces 1 et ces 0. Il peut s'agir de données JSON, d'un formulaire, d'un e-mail, etc.
* `-d [VOS_DONNEES]` - Enfin, nous devons spécifier quelles données `curl` doivent être envoyées au serveur.

Mettons ces options ensemble dans une commande complète :

`curl -X POST -H 'Content-Type: application/json' -d '{"title": "foo","body": "bar","userId": 123}' https://jsonplaceholder.typicode.com/posts`

Vous pouvez taper ou copier cela dans la fenêtre de votre terminal et appuyer sur **Entrée** pour l'envoyer, comme ceci :

<div class="center guideimages">
<figure class="fill-parent">
  <video playsinline autoplay loop muted
    width="665"
    height="387"
    class="responsive"
    title="Démonstration de la commande POST curl">
    <source src="/assets/guides/curl-rest-api/curl-post-basic-en.webm"
      type="video/webm" />
    <source src="/assets/guides/curl-rest-api/curl-post-basic-en.mp4"
      type="video/mp4" />
    <div fallback>
      <p>This browser does not support the video element.</p>
    </div>
  </video>
  <figcaption class="center">Démonstration de la commande POST curl</figcaption>
</figure>
</div>

Comme vous pouvez le voir, il y avait beaucoup de données à mettre dans une seule commande. Nous pouvons envoyer des données à l'aide d'un fichier pour les rendre plus faciles et répétables.

Créez un nouveau fichier appelé `data.json` avec les données suivantes :

```
{
	"title": "foo",
	"body": "bar",
	"userId": 123
}
```

Si vous l'avez créé avec succès, vous devriez pouvoir `cat` le fichier, comme ceci :

<div class="center guideimages">
<figure class="fill-parent">
  <video playsinline autoplay loop muted
    width="665"
    height="387"
    class="responsive"
    title="Démonstration du fichier de données">
    <source src="/assets/guides/curl-rest-api/nano-datajson-en.webm"
      type="video/webm" />
    <source src="/assets/guides/curl-rest-api/nano-datajson-en.mp4"
      type="video/mp4" />
    <div fallback>
      <p>This browser does not support the video element.</p>
    </div>
  </video>
  <figcaption class="center">Démonstration du fichier de données</figcaption>
</figure>
</div>

Vous pouvez maintenant utiliser ce fichier dans le cadre de votre commande `curl`. Au lieu de mettre les données dans la commande, vous pouvez vous *référer* au fichier en utilisant `-d @[NOM_DU_FICHIER]`. Nous pouvons l'essayer en tapant `curl -X POST -H 'Content-Type: application/json' -d @data.json https://jsonplaceholder.typicode.com/posts` et en appuyant sur **Entrée** :

<div class="center guideimages">
<figure class="fill-parent">
  <video playsinline autoplay loop muted
    width="665"
    height="387"
    class="responsive"
    title="Démonstration de la commande POST curl avec un fichier">
    <source src="/assets/guides/curl-rest-api/curl-post-file-en.webm"
      type="video/webm" />
    <source src="/assets/guides/curl-rest-api/curl-post-file-en.mp4"
      type="video/mp4" />
    <div fallback>
      <p>This browser does not support the video element.</p>
    </div>
  </video>
  <figcaption class="center">Démonstration de la commande POST curl avec un fichier</figcaption>
</figure>
</div>

### PUT

La méthode de requête HTTP **PUT** est souvent utilisée pour mettre à jour les données existantes sur le serveur lors de l'interaction avec une API REST. Comme dans l'exemple de **POST**, nous voulons définir la méthode, le format des données et les données lors de l'utilisation de la commande `curl`.

Essayons de mettre à jour un élément existant. Tapez `curl -X PUT -H 'Content-Type: application/json' -d '{"title": "foo_updated","body": "bar_updated","userId": 123}' https://jsonplaceholder.typicode.com/posts/1` et appuyez sur **Entrée**, comme ceci :

<div class="center guideimages">
<figure class="fill-parent">
  <video playsinline autoplay loop muted
    width="665"
    height="387"
    class="responsive"
    title="Démonstration de la commande de curl PUT">
    <source src="/assets/guides/curl-rest-api/curl-put-basic-en.webm"
      type="video/webm" />
    <source src="/assets/guides/curl-rest-api/curl-put-basic-en.mp4"
      type="video/mp4" />
    <div fallback>
      <p>This browser does not support the video element.</p>
    </div>
  </video>
  <figcaption class="center">Démonstration de la commande de curl PUT</figcaption>
</figure>
</div>

Vous pouvez également utiliser un fichier de données de la même manière que vous l'avez fait avec la méthode de requête HTTP **POST**, en utilisant `-d @[FILENAME]`.

### DELETE

Si vous souhaitez supprimer des données du serveur, vous utiliserez probablement la méthode de requête HTTP **DELETE** lors de l'interaction avec une API REST. Cette méthode est un peu plus simple que les exemples précédents. Vous utiliserez `-X DELETE` pour spécifier la méthode de requête HTTP **DELETE** et spécifier une URL de ressource spécifique à supprimer. Essayez-le en tapant `curl -X DELETE https://jsonplaceholder.typicode.com/posts/1` et en appuyant sur **Entrée** :

<div class="center guideimages">
<figure class="fill-parent">
  <video playsinline autoplay loop muted
    width="665"
    height="387"
    class="responsive"
    title="Démonstration de la commande DELETE curl">
    <source src="/assets/guides/curl-rest-api/curl-delete-basic-en.webm"
      type="video/webm" />
    <source src="/assets/guides/curl-rest-api/curl-delete-basic-en.mp4"
      type="video/mp4" />
    <div fallback>
      <p>This browser does not support the video element.</p>
    </div>
  </video>
  <figcaption class="center">Démonstration de la commande DELETE curl</figcaption>
</figure>
</div>

Vous remarquerez que de nombreuses API REST renvoient soit les données supprimées soit aucune donnée lorsqu'elles utilisent la méthode de requête HTTP **DELETE**.

### OPTIONS

Parfois, nous avons besoin de savoir quels types de demandes ou de données nous pouvons envoyer à un serveur. Pour ce faire, vous pouvez utiliser la méthode de requête HTTP **OPTIONS**.

Vous devrez utiliser l'option `-v` que vous avez apprise plus tôt. Cela activera un resultat plus détaillée afin que vous puissiez visualiser les "options" que le serveur prend en charge.

Essayons de le faire en tapant `curl -v -X OPTIONS https://jsonplaceholder.typicode.com/posts` et en appuyant sur **Entrée** :

<div class="center guideimages">
<figure class="fill-parent">
  <video playsinline autoplay loop muted
    width="665"
    height="387"
    class="responsive"
    title="Démonstration de la commande OPTIONS curl avec sortie verbeuse">
    <source src="/assets/guides/curl-rest-api/curl-options-verbose-en.webm"
      type="video/webm" />
    <source src="/assets/guides/curl-rest-api/curl-options-verbose-en.mp4"
      type="video/mp4" />
    <div fallback>
      <p>This browser does not support the video element.</p>
    </div>
  </video>
  <figcaption class="center">Démonstration de la commande OPTIONS curl avec sortie verbeuse</figcaption>
</figure>
</div>

En faisant défiler la fenêtre de votre terminal, vous observerez de telles informations :

```
...
< access-control-allow-credentials: true
< access-control-allow-methods: GET,HEAD,PUT,PATCH,POST,DELETE
...
```

Cela vous indique quelles méthodes de requête HTTP le serveur de l'API REST autorise. Il vous indique également que le serveur vous permettra de vous authentifier et d'utiliser des identifiants.

## Conclusion

Maintenant, vous en savez un peu plus sur l'utilisation de "curl" pour interagir avec les APIs et les serveurs REST. C'est une commande et un outil extrêmement utiles.

