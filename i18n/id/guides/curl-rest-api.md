---
layout: guide-layout
title: Panduan menggunakan curl untuk menguji REST API
excerpt: Panduan menggunakan curl untuk menguji REST API
permalink: /id/guides/curl-rest-api
permalink_without_prefix: /guides/curl-rest-api
lang: id
---

**Daftar isi**

* TOC
{:toc}

## Pengantar

Panduan ini bertujuan untuk mengajarkan mu dasar penggunaan REST API menggunakan [curl](https://github.com/curl/curl). Selama mengikuti intruksi ini, perlu diketahui bahwa file komputer dan folder mu akan kemungkinan besar berbeda dengan sampel. Jika kamu sudah mempunyai banyak pengalaman dengan terminal di macOS, lihat [perintah di beranda untuk materi referensi yang cepat](/id/).

## Prasyarat

Selama mengikuti panduan ini, anda perlu:

* Akses ke terminal Unix pada environment macOS atau Linux apapun.
* Untuk mengetahui cara membuka jendela terminal. Jika Anda tidak yakin, kunjungi petunjuk untuk [macOS](open-terminal-macos) atau Linux (segera hadir).
* REST API yang akan kamu berinteraksi dengannya. Kami menggunakan `https://jsonplaceholder.typicode.com` sebagai contoh dalam panduan ini.
* Curl terinstall dalam komputer anda. Sebagian besar dari macOS dan Linux komputer sudah terinstall. Jika tidak, kamu perlu meninjau petunjuk teknis. [Situs instalasi curl](https://curl.haxx.se/docs/install.html){:target="_blank" rel="noopener"}.

## Mari mulai dengan GET!

Pertama buka terminal anda

Curl adalah “alat baris perintah untuk mentransfer data yang ditentukan dengan sintaks URL", yang membuatnya berguna untuk berinteraksi dengan REST APIs dan sumber situs lainnya. Ia sudah digunakan oleh ribuan, tetapi kami hanya mengulas sedikit di panduan ini.

Katakanlah sekarang anda memiliki REST APIs dimana anda akan berinteraksi dengannya. Sebagai contoh, [https://jsonplaceholder.typicode.com/todos/1](https://jsonplaceholder.typicode.com/todos/1){:target="_blank" rel="noopener"} mengembalikan data dalam format JSON yang mirip dengan ini: 

```
{
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
}
```

Meskipun kami dapat membuka contoh URL di browser, banyak REST APIs tidak memperbolehkan kita melakukannya. Mari kita gunakan curl sebagai gantinya.

Di dalam terminal anda, ketik `curl https://jsonplaceholder.typicode.com/todos/1` lalu tekan **Enter**. Anda akan melihat hasil yang mirip dengan ini:

<div class="center guideimages">
<figure class="fill-parent">
  <video playsinline autoplay loop muted
    width="665"
    height="387"
    class="responsive"
    title="Demo of basic curl command">
    <source src="/assets/guides/curl-rest-api/curl-get-basic-en.webm"
      type="video/webm" />
    <source src="/assets/guides/curl-rest-api/curl-get-basic-en.mp4"
      type="video/mp4" />
    <div fallback>
      <p>This browser does not support the video element.</p>
    </div>
  </video>
  <figcaption class="center">Demo of basic curl command</figcaption>
</figure>
</div>

Tanpa opsi apapun, `curl` secara default berinteraksi dengan server menggunakan **GET** HTTP request method, umumnya hanya digunakan untuk membaca data. Kami akan membahas metode HTTP request lainnya kedepannya dalam panduan ini.

Mari menambahkan opsi `-o` untuk menyimpan output sebagai file, alih-alih menampilkannya langsung di terminal. Ketik `curl -o test.json https://jsonplaceholder.typicode.com/todos/1` lalu tekan **Enter**:

<div class="center guideimages">
<figure class="fill-parent">
  <video playsinline autoplay loop muted
    width="665"
    height="387"
    class="responsive"
    title="Demo of basic curl command with file output">
    <source src="/assets/guides/curl-rest-api/curl-get-output-en.webm"
      type="video/webm" />
    <source src="/assets/guides/curl-rest-api/curl-get-output-en.mp4"
      type="video/mp4" />
    <div fallback>
      <p>This browser does not support the video element.</p>
    </div>
  </video>
  <figcaption class="center">Demo of basic curl command with file output</figcaption>
</figure>
</div>

Jika mau, kami dapat memeriksa info secara lebih detail tentang interasi ini melalui jaringan. Untuk melakukan ini, anda dapat menambahkan opsi `v` ke apapun perintah `curl`. Ketik `curl -v https://jsonplaceholder.typicode.com/todos/1` lalu tekan **Enter**:

<div class="center guideimages">
<figure class="fill-parent">
  <video playsinline autoplay loop muted
    width="665"
    height="387"
    class="responsive"
    title="Demo of basic curl command with verbose output">
    <source src="/assets/guides/curl-rest-api/curl-get-verbose-en.webm"
      type="video/webm" />
    <source src="/assets/guides/curl-rest-api/curl-get-verbose-en.mp4"
      type="video/mp4" />
    <div fallback>
      <p>This browser does not support the video element.</p>
    </div>
  </video>
  <figcaption class="center">Demo of basic curl command with verbose output</figcaption>
</figure>
</div>

## Menggunakan metode HTTP request yang berbeda menggunakan curl

Sekarang kami telah mengetahui kueri dasar dari REST API menggunakan curl, kami dapat mencoba metode HTTP yang berbeda. Anda dapat membaca secara detail tentang perbedaan metode permintaan HTTP di [Wikipedia](https://id.wikipedia.org/wiki/Protokol_Transfer_Hiperteks#Request_methods)

### POST

Metode permintaan HTTP **POST** sangat sering digunakan untuk membuat atau memperbarui data di server saat berinteraksi dengan REST API. Untuk melakukan hal tersebut, anda perlu mengetahui beberapa opsi baru untuk perintah `curl`:

* `-X [HTTP_METHOD]` - Kami perlu memberitahu `curl` metode permintaan HTTP mana yang akan digunakan. Opsi `-X`, diikuti dnegan nama metode, memungkinkan kami melakukan hal tersebut.
* `-H [HTTP_HEADER]` - Saat mengirim data ke server, kami perlu memberitahu server bagaimana menginterpretasi 1s dan 0s. Itu bisa menjadi data JSON, formulir, email, dll.
* `-d [YOUR_DATA]` - Terakhir, kami perlu menentukan data mana yang `curl` harus dikirim ke server.

Mari gabungkan opsi-opsi ini menjadi satu perintah lengkap:

`curl -X POST -H 'Content-Type: application/json' -d '{"title": "foo","body": "bar","userId": 123}' https://jsonplaceholder.typicode.com/posts`

Anda dapat mengetik atau mensalin itu ke terminal jendela anda lalu tekan **Enter** untuk mengirimnya, seperti ini:

<div class="center guideimages">
<figure class="fill-parent">
  <video playsinline autoplay loop muted
    width="665"
    height="387"
    class="responsive"
    title="Demo of POST curl command">
    <source src="/assets/guides/curl-rest-api/curl-post-basic-en.webm"
      type="video/webm" />
    <source src="/assets/guides/curl-rest-api/curl-post-basic-en.mp4"
      type="video/mp4" />
    <div fallback>
      <p>This browser does not support the video element.</p>
    </div>
  </video>
  <figcaption class="center">Demo of POST curl command</figcaption>
</figure>
</div>

Seperti yang anda ketahui, ada banyak data untuk dicoba dimasukkan ke dalam satu perintah. Kami dapat mengirim data menggunakan file sebagai gantinya agar lebih mudah dan berulang.

Buat file baru bernama `data.json` dengan data berikut:

```
{
    "title": "foo",
    "body": "bar",
    "userId": 123
}
```

Jika anda berhasil membuatnya, anda dapat ke file `cat`, seperti ini: 

<div class="center guideimages">
<figure class="fill-parent">
  <video playsinline autoplay loop muted
    width="665"
    height="387"
    class="responsive"
    title="Demo of data file">
    <source src="/assets/guides/curl-rest-api/nano-datajson-en.webm"
      type="video/webm" />
    <source src="/assets/guides/curl-rest-api/nano-datajson-en.mp4"
      type="video/mp4" />
    <div fallback>
      <p>This browser does not support the video element.</p>
    </div>
  </video>
  <figcaption class="center">Demo of data file</figcaption>
</figure>
</div>

Sekarang anda dapat menggunakan file tersebut sebagai bagain salah satu dari perintah `curl`. Alih-alih memasukkan data ke dalam perintah, anda dapat *refer* ke file dengan menggunakan `-d @[FILENAME]`. Kami dapat mencobanya dengan mengetik `curl -X POST -H 'Content-Type: application/json' -d @data.json https://jsonplaceholder.typicode.com/posts` lalu tekan **Enter**:

<div class="center guideimages">
<figure class="fill-parent">
  <video playsinline autoplay loop muted
    width="665"
    height="387"
    class="responsive"
    title="Demo of POST curl command with a file">
    <source src="/assets/guides/curl-rest-api/curl-post-file-en.webm"
      type="video/webm" />
    <source src="/assets/guides/curl-rest-api/curl-post-file-en.mp4"
      type="video/mp4" />
    <div fallback>
      <p>This browser does not support the video element.</p>
    </div>
  </video>
  <figcaption class="center">Demo of POST curl command with a file</figcaption>
</figure>
</div>

### PUT

Metode **PUT** permintaan HTTP sering digunakan untuk memperbarui data yang ada di server saat berinteraksi dengan REST API. Mirip dengan **POST**, kami ingin mengatur metode, format data, dan data saat menggunakan perintah `curl`.

Mari mencoba memperbarui item yang sudah ada. Ketik `curl -X PUT -H 'Content-Type: application/json' -d '{"title": "foo_updated","body": "bar_updated","userId": 123}' https://jsonplaceholder.typicode.com/posts/1` lalu tekan **Enter**, seperti ini:

<div class="center guideimages">
<figure class="fill-parent">
  <video playsinline autoplay loop muted
    width="665"
    height="387"
    class="responsive"
    title="Demo of PUT curl command">
    <source src="/assets/guides/curl-rest-api/curl-put-basic-en.webm"
      type="video/webm" />
    <source src="/assets/guides/curl-rest-api/curl-put-basic-en.mp4"
      type="video/mp4" />
    <div fallback>
      <p>This browser does not support the video element.</p>
    </div>
  </video>
  <figcaption class="center">Demo of PUT curl command</figcaption>
</figure>
</div>

Anda juga dapat menggunakan file data dengan cara yang sama seperti yang anda lakukan dengan metode **POST** permintaan HTTP, dengan menggunakan `-d @[FILENAME]`.

### DELETE

Jika anda ingin menghapus data dari server, anda kemungkinan akan menggunakan metode **DELETE** permintaan HTTP saat berinteraksi dengan REST API. Ini snagat lebih jelas dibandingkan dengan cara yang sebelumnya. Anda akan menggunakan `-X DELETE` untuk menentukan metode **DELETE** permintaan HTTP dan menentukan sumber URL secara spesifik yang akan dihapus. Coba ketik `curl -X DELETE https://jsonplaceholder.typicode.com/posts/1` lalu tekan **Enter**:

<div class="center guideimages">
<figure class="fill-parent">
  <video playsinline autoplay loop muted
    width="665"
    height="387"
    class="responsive"
    title="Demo of DELETE curl command">
    <source src="/assets/guides/curl-rest-api/curl-delete-basic-en.webm"
      type="video/webm" />
    <source src="/assets/guides/curl-rest-api/curl-delete-basic-en.mp4"
      type="video/mp4" />
    <div fallback>
      <p>This browser does not support the video element.</p>
    </div>
  </video>
  <figcaption class="center">Demo of DELETE curl command</figcaption>
</figure>
</div>

Anda akan melihat bahwa banyak REST APIs mengembalikan data yang dihapus atau tidak ada data saat menggunakan metode **DELETE** permintaan HTTP.

### OPTIONS

Terkadang, kami perlu mengetahui tipe dari permintaan atau data yang kita kirim ke server. Untuk melakukannya, anda dapat menggunakan metode **OPTIONS** permintaan HTTP.

Anda perlu menggunakan opsi `-v` seperti yang anda pelajari sebelumnya. Ini akan akan mengaktifkan output yang lebih detail jadi anda dapat melihat “opsi-opsi” yang didukung oleh server

Mari mencoba dengan mengetik `curl -v -X OPTIONS https://jsonplaceholder.typicode.com/posts` lalu tekan **Enter**:

<div class="center guideimages">
<figure class="fill-parent">
  <video playsinline autoplay loop muted
    width="665"
    height="387"
    class="responsive"
    title="Demo of OPTIONS curl command with verbose output">
    <source src="/assets/guides/curl-rest-api/curl-options-verbose-en.webm"
      type="video/webm" />
    <source src="/assets/guides/curl-rest-api/curl-options-verbose-en.mp4"
      type="video/mp4" />
    <div fallback>
      <p>This browser does not support the video element.</p>
    </div>
  </video>
  <figcaption class="center">Demo of OPTIONS curl command with verbose output</figcaption>
</figure>
</div>

Saat anda menggulir jendela terminal anda, anda akan mengamati informasi yang seperti ini:

```
...
< access-control-allow-credentials: true
< access-control-allow-methods: GET,HEAD,PUT,PATCH,POST,DELETE
...
```

Itu memberi tahu mu metode permintaan HTTP mana yang diizinkan oleh server REST API. Itu juga memberi tahu mu bahwa server akan memungkinkan mu mengautentikasi dan menggunakan kredensial.

## Pembungkus

Sekarang anda telah mengetahui beberapa tentang cara menggunakan `curl` untuk berinteraksi dengan REST APIs dan server-server. Ini adalah perintah dan alat yang sangat berguna.
