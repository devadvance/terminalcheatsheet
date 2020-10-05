---
layout: guide-layout
title: Cara menavigasi file dan folder di terminal
excerpt: Panduan ini dimaksudkan untuk mengajari Anda dasar-dasar menavigasi file dan folder di terminal.
permalink: /id/guides/navigate-terminal
permalink_without_prefix: /guides/navigate-terminal
lang: id
---

**Daftar isi**

* TOC
{:toc}

## Pengantar

Panduan ini dimaksudkan untuk mengajari Anda dasar-dasar menavigasi file dan folder di terminal. Saat Anda mengikuti petunjuk ini, perlu diingat bahwa file dan folder komputer Anda kemungkinan besar akan berbeda dari sampel. Jika Anda sudah memiliki banyak pengalaman dengan terminal, lihat [perintah di beranda untuk bahan referensi cepat](/id).

## Prasyarat

Untuk mengikuti panduan ini, Anda membutuhkan:

* Akses ke terminal Unix pada environment macOS atau Linux apapun.
* Untuk mengetahui cara membuka jendela terminal. Jika Anda tidak yakin, kunjungi petunjuk untuk [macOS](open-terminal-macos) atau Linux (segera hadir).

## Ayo mulai!

Mulailah dengan membuka terminal Anda.

Saat menggunakan terminal, Anda bekerja dari dalam folder tertentu di komputer Anda. Anda selalu dapat mengakses item dari folder lain di komputer Anda, tetapi terminal akan melacak folder tempat Anda berada saat ini. Ini dikenal sebagai **direktori kerja** Anda.

Segera setelah Anda membuka terminal, Anda akan berada di dalam direktori kerja. Ketik `pwd` di terminal dan tekan **Enter**. `pwd` adalah singkatan dari "print working directory". Output dari perintah ini memberi tahu Anda folder mana yang merupakan direktori kerja Anda saat ini.

Pada contoh tangkapan layar di bawah ini, direktori kerja kami adalah folder bernama **contoh**:

<div class="center guideimages">
  <amp-img src="/assets/guides/navigate-work-files/pwd-en.png" width="665" height="387" alt="terminal pwd command" layout="responsive"></amp-img>
</div>

Selanjutnya, Anda dapat menjelajahi konten direktori kerja. Ketik `ls` ke terminal Anda dan tekan **Enter**. `ls` adalah singkatan dari" list ". Perintah ini mencantumkan semua file dan folder di direktori kerja Anda. Dalam contoh kami, ini menunjukkan semua file dan folder dalam **contoh**:

<div class="center guideimages">
  <amp-img src="/assets/guides/navigate-work-files/ls-en.png" width="665" height="387" alt="terminal list command" layout="responsive"></amp-img>
</div>

Ini mirip dengan membuka aplikasi browser file Anda dan memeriksa konten folder direktori kerja Anda:

<div class="center guideimages">
  <amp-img src="/assets/guides/navigate-work-files/ls-finder-en.png" width="665" height="387" alt="file browser show contents" layout="responsive"></amp-img>
</div>

Anda dapat membuat daftar semua konten di folder yang bukan direktori kerja Anda dengan mengetik `ls [NAMA_FOLDER]`. Ini seperti mengintip ke dalam folder lain, tanpa mengubah direktori kerja kita. Pada contoh di bawah ini, kami memeriksa isi dari **folder1**. Kita dapat mengamati bahwa **folder1** hanya memiliki satu file bernama **file3.pdf**:

<div class="center guideimages">
  <amp-img src="/assets/guides/navigate-work-files/ls-folder1-en.png" width="665" height="387" alt="ls command folder" layout="responsive"></amp-img>
</div>

Ini mirip dengan memeriksa konten folder di dalam direktori kerja Anda di aplikasi browser file Anda:

<div class="center guideimages">
  <amp-img src="/assets/guides/navigate-work-files/ls-folder1-finder-en.png" width="665" height="387" alt="file browser folder peek" layout="responsive"></amp-img>
</div>

Perintah `ls` memiliki opsi tambahan yang dapat mengubah cara fungsinya.

Coba ketikkan `ls -a` dan tekan **Enter** untuk menampilkan semua file, termasuk file tersembunyi. Di banyak komputer, file-file ini dimulai dengan titik dan disembunyikan secara default. Contoh umum dari file ini mencakup hal-hal seperti "*.DS_Store*" (di macOS), "*.profile*" (di Linux), dan "*.gitignore*" (saat menggunakan Git untuk proyek Anda).

Perhatikan bagaimana kita sekarang dapat mengamati **.Hidden-file**, yang tidak ditampilkan dengan perintah `ls` sebelumnya:

<div class="center guideimages">
  <amp-img src="/assets/guides/navigate-work-files/ls-a-en.png" width="665" height="387" alt="terminal ls all command" layout="responsive"></amp-img>
</div>

Opsi lain untuk membuat daftar file adalah mengetik `ls -l` dan menekan **Enter**. Opsi ini menghasilkan daftar yang panjang. Artinya, ini menampilkan detail tambahan untuk file dan folder. Selain nama file dan folder, itu juga akan menampilkan atribut, seperti kapan terakhir kali diubah dan ukurannya:

<div class="center guideimages">
  <amp-img src="/assets/guides/navigate-work-files/ls-l-en.png" width="665" height="387" alt="terminal ls long command" layout="responsive"></amp-img>
</div>

Mirip dengan banyak perintah terminal, Anda dapat menggabungkan dua opsi ini. Untuk melakukan ini, ketik `ls -la` dan tekan **Enter**, yang akan mencantumkan **semua** item dalam format **long**:

<div class="center guideimages">
  <amp-img src="/assets/guides/navigate-work-files/ls-la-en.png" width="665" height="387" alt="terminal ls long all command" layout="responsive"></amp-img>
</div>

## Navigasi folder

Anda mungkin telah memperhatikan bahwa direktori kerja kami memiliki banyak bagian di namanya. Secara umum, karakter `/` (garis miring) berarti Anda berada di dalam folder. Jadi, ketika Anda mengamati `/ home / user / example` sebagai direktori kerja Anda, itu berarti:

* Anda berada di dalam folder **contoh**, yang merupakan direktori kerja Anda.
* Folder **contoh** ada di dalam folder **pengguna**.
* Folder **user** ada di dalam folder **home**.
* Folder **home** ada di dalam sistem file komputer Anda dan tidak ada apa pun di luarnya.

Sekarang kita dapat mengubah direktori kerja kita. Dalam contoh kami, kami melihat dua folder saat menggunakan `ls` untuk mencantumkan semuanya (**folder1** dan **folder2**).

Ketik `cd [FOLDER_NAME]` dan tekan **Enter**. Direktori kerja Anda sekarang sudah berubah. `cd` adalah singkatan dari" direktori perubahan ". Anda dapat mengetik `pwd` lagi dan menekan **Enter** untuk memverifikasi bahwa Anda telah mengubah direktori kerja Anda. Dalam contoh kami, kami mengubah direktori kerja kami ke **folder1**:

<div class="center guideimages">
  <amp-img src="/assets/guides/navigate-work-files/cd-folder1-en.png" width="665" height="387" alt="terminal cd command" layout="responsive"></amp-img>
</div>

Ini mirip dengan mengklik folder di aplikasi browser file Anda. Anda telah sepenuhnya mengalihkan folder tempat Anda berada:

<div class="center guideimages">
  <amp-img src="/assets/guides/navigate-work-files/cd-folder1-finder-en.png" width="665" height="387" alt="macOS folder change directory" layout="responsive"></amp-img>
</div>

Jika Anda ingin "naik" ke folder sebelumnya, Anda dapat mengetik `cd ..` dan tekan **Enter**. Ini akan membawa Anda ke satu tingkat folder:

<div class="center guideimages">
  <amp-img src="/assets/guides/navigate-work-files/cd-folder1-and-back-en.png" width="665" height="387" alt="terminal cd folder1 and back" layout="responsive"></amp-img>
</div>

Ide untuk "turun" ke dalam folder atau "ke atas" dari folder sangat umum digunakan saat menggunakan terminal. Ketika terminal memerintahkan, Anda menggunakan nama folder saat "turun" satu level dan `..` berarti naik" naik "satu level.

## Melihat konten file

Anda mungkin bersemangat untuk mulai bekerja dengan file dengan terminal. Ini dapat bergantung pada *jenis* file, karena melihat file gambar berbeda dengan membaca file dokumen.

Untuk file teks, perintah yang berguna saat bekerja di terminal adalah mengetik `cat [FILE_NAME]` dan menekan **Enter**. Perintah `cat` adalah kependekan dari "concatenate" dan memiliki banyak kegunaan.

Salah satu kegunaan paling umum adalah untuk menampilkan konten file teks di terminal. Pada gambar di bawah ini, kami menampilkan konten **hello.txt** di direktori kerja kami:

<div class="center guideimages">
  <amp-img src="/assets/guides/navigate-work-files/cat-hello-en.png" width="665" height="387" alt="terminal cat command" layout="responsive"></amp-img>
</div>

## Kesimpulan

Sudah selesai dilakukan dengan baik! Anda sekarang tahu pentingnya menavigasi file dan folder di terminal Anda. Ini termasuk mengubah direktori kerja Anda, membuat daftar file dan folder, dan melihat konten file teks.

Di panduan selanjutnya, Anda akan mempelajari cara membuat dan memodifikasi file dan folder.
