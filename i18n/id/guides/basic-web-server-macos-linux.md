---
layout: guide-layout
title: Bagaimana cara menjalankan web server dasar pada macOS atau Linux
excerpt: Panduan ini akan mengajarkan bagaimana menggunakan python untuk menjalankan web server dari folder manapun pada komputer macOS atau Linux milikmu.
permalink: /id/guides/basic-web-server-macos-linux
permalink_without_prefix: /guides/basic-web-server-macos-linux
lang: id
---

**Daftar isi**

* TOC
{:toc}

## Pengantar

Jika kamu sedang mengerjakan halaman web atau konten web lainnya, kamu mungkin membutuhkan sesuatu yang mudah dan cepat untuk menjalankan web server dasar. Panduan ini akan mengajarkan bagaimana menggunakan perintah python untuk menjalankan web server dasar pada komputer milikmu. Saat kamu mengikuti instruksi ini, perlu diingat bahwa file dan folder anda mungkin saja berbeda dari contoh. Jika kamu sudah cukup berpengalaman menggunakan terminal, cobalah [Perintah pada halaman utama untuk referensi materi](/id/).

## Prasyarat

Untuk mengikuti panduan ini, kamu perlu:

* Akses ke terminal Unix pada environment macOS atau Linux apapun.
* Untuk mengetahui cara membuka jendela terminal. Jika Anda tidak yakin, kunjungi petunjuk untuk [macOS](open-terminal-macos) atau Linux (segera hadir).
* Jika kamu tidak yakin, ikuti [Panduan ini untuk mengetahui caranya](navigate-terminal)
* python3 terinstall pada komputermu. Ini hadir secara default pada versi terbaru dari macOS dan banyak distribusi Linux.

## Mulai dengan mencari folder yang sesuai

Pertama, kamu perlu untuk bernavigasi ke folder dimana halaman web atau konten web disimpan. Jika kamu tidak yakin bagaimana melakukannya, kamu mungkin ingin membaca [Panduan ini terlebih dahulu](navigate-terminal)

Mari kita katakan konten web kamu berada pada folder `/home/user/examples`. Kita ingin melakukan tiga hal:

1. Memastikan kita berada pada direktori yang tepat menggunakan `pwd`.
2. Memeriksa jika kita memiliki konten web pada folder menggunakan `ls`.
3. Memeriksa jika konten web dalam format yang tepat, seperti HTML, menggunakan `cat`.

Berikut beberapa gabungan dari langkah-langkah:

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


Pada contoh diatas, kita menggunakan `pwd` untuk memastikan `/home/user/examples` adalah direktori dimana kita berada. Lalu kita menggunakan `ls` untuk menunjukkan daftar konten pada direktori dimana kita berada untuk memastikan kita memiliki file HTML disitu. Kamu bisa mencatat file **hello.html**.

Akhirnya, kita melihat isi dari **hello.html** menggunakan `cat` untuk memastikan bahwa ini benar sebuah HTML.

Sekarang kita siap untuk menjalankan Python web server!

## Menjalankan python web server dasar

Karena ini seringkali sudah terinstall pada komputer secara default, kita akan menggunakan python untuk menjalankan web server dasar.

Kita akan menggunakan perintah ini untuk menjalankan web server: `python3 -m http.server 8000`
{% include body-copy-button.html data-command="python3 -m http.server 8000" %}

Mari kita jelajahi apa yang dilakukan oleh perintah ini:

* `python3` menginstruksikan terminal untuk menggunakan Python 3 untuk melakukan sesuatu.
* `-m http.server` menginstruksikan Python untuk menjalankan sebuah web server.
* `8000` menginstruksikan Python untuk menggunakan port 8000 sebagai port untuk web server.

Mari coba menjalankannya:

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

Jika kamu mengamati hal di atas, web server sekarang berjalan pada komputermu.

## Periksa konten web milikmu

Berikutnya, kita bisa memeriksa jika konten web sudah terlihat pada web browser. Kita bisa membuka URL lokal untuk menelusuri konten: `http://localhost:8000`
{% include body-copy-button.html data-command="http://localhost:8000" %}

Pada contoh kami diatas, ini menunjukkan kita mengamati pada web browser:

<div class="center guideimages">
  <img src="/assets/guides/basic-web-server-macos-linux/directory-listing-en.png" width="665" height="387" alt="Directory listing in the web browser" class="responsive" />
</div>

Pada contoh kami, kami tidak memiliki file bernama **index.html** jadi web browser menunjukkan daftar file. Kamu bisa klik file tertentu untuk membukanya pada browser. Biarkan kami klik pada file **hello.html** yang kita periksa sebelumnya:

<div class="center guideimages">
  <img src="/assets/guides/basic-web-server-macos-linux/hello-world-page-en.png" width="665" height="387" alt="Hello world page" class="responsive" />
</div>

Kita sekarang mengamati sebuah halaman web!

## Memberhentikan python web server dasar

Ketika kamu telah selesai menggunakan web server, kamu bisa memberhentikannya dari terminal. Untuk melakukannya, tekan `Ctrl-C` pada keyboardmu. Ini berarti menekan tombol `Ctrl` dan `C` secara bersamaan.

Kamu akan mengamati hasil seperti ini:

<div class="center guideimages">
<figure class="fill-parent">
  <video playsinline autoplay loop muted
    width="665"
    height="387"
    class="responsive"
    title="Stop Python web server">
    <source src="/assets/guides/basic-web-server-macos-linux/stop-python-http-server-en.webm"
      type="video/webm" />
    <source src="/assets/guides/basic-web-server-macos-linux/stop-python-http-server-en.mp4"
      type="video/mp4" />
    <div fallback>
      <p>This browser does not support the video element.</p>
    </div>
  </video>
  <figcaption class="center">Stop Python web server</figcaption>
</figure>
</div>

## Kesimpulan

Kamu telah belajar bagaimana cara untuk menjalankan web server dasar pada komputermu. Ini akan membantumu untuk tugas seperti pengembangan web dan programming python. Jika kamu tertarik untuk belajar lebih atau programming dengan Python, kamu bisa mengunjungi [https://www.python.org](https://www.python.org){:target="_blank" rel="noopener"}.
