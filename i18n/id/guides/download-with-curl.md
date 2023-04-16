---
layout: guide-layout
title: Cara mengunduh file dengan curl
excerpt: Cara mengunduh file dengan curl
permalink: /id/guides/curl-download-files
permalink_without_prefix: /guides/curl-download-files
lang: id
---

**Daftar isi**

* TOC
{:toc}

## Pendahuluan

Panduan ini dimaksudkan untuk mengajari Anda cara dasar mengunduh file menggunakan [curl](https://github.com/curl/curl). Saat mengikuti instruksi ini, perlu diingat bahwa file dan folder komputer Anda kemungkinan akan berbeda dari contoh. Jika Anda sudah berpengalaman dengan terminal, lihat [perintah di beranda untuk materi referensi cepat](/id/).

## Prasyarat

Untuk mengikuti panduan ini, Anda memerlukan:

* Akses ke terminal Unix pada lingkungan Linux atau macOS.
* Tahu cara membuka jendela terminal. Jika Anda tidak yakin, kunjungi instruksi untuk [macOS](open-terminal-macos) atau Linux (segera hadir).
* File yang ingin Anda unduh. Kami menggunakan `https://terminalcheatsheet.com/sample-file.jpg` sebagai contoh dalam panduan ini.
* Utilitas curl diinstal pada komputer Anda. Kebanyakan komputer macOS dan Linux sudah memiliki utilitas ini. Jika tidak, Anda perlu meninjau instruksi teknis [di situs instalasi curl](https://curl.haxx.se/docs/install.html){:target="_blank" rel="noopener"}.

## Mengunduh file

Mulai dengan membuka terminal Anda.

`curl` adalah "alat baris perintah untuk mentransfer data yang ditentukan dengan sintaks URL". Ini berarti dapat mengunduh file dari URL.

Sebagai contoh, [https://terminalcheatsheet.com/sample-file.jpg](https://terminalcheatsheet.com/sample-file.jpg){:target="_blank" rel="noopener"} mengembalikan file gambar yang dapat kita unduh dengan curl.

### Simpan dengan nama file dari URL

Jika kita ingin mengunduh file dan menyimpannya dengan nama yang sama, kita bisa menggunakan perintah ini:

```
curl --remote-name [URL]
```

`[URL]` adalah URL yang ingin kita unduh file dari. `--remote-name` menginstruksikan curl untuk menggunakan nama dari URL sebagai nama file di komputer.

Kita bisa menggunakan perintah yang lebih pendek ini untuk melakukan hal yang sama:

```
curl -O [URL]
```

`-O` adalah cara singkat menulis `--remote-name` dari perintah sebelumnya.

### Simpan dengan nama file yang berbeda

Jika kita ingin mengunduh file dan menyimpannya dengan nama yang berbeda, kita bisa menggunakan perintah ini sebagai gantinya:

```
curl --output [FILENAME] [URL]
```

* `[URL]` - Kita memberi tahu `curl` URL untuk mengunduh.
* `--output [FILENAME]` - Kita memberi tahu `curl` di mana menyimpan file.

Kita bisa menggunakan perintah yang lebih pendek ini untuk melakukan hal yang sama:

```
curl -o [FILENAME] [URL]
```

* `[URL]` - Kita memberi tahu `curl` URL untuk mengunduh.
* `-o [FILENAME]` - Kita memberi tahu `curl` di mana menyimpan file.

## Menutup

Sekarang Anda tahu sedikit tentang menggunakan `curl` untuk mengunduh file dari URL.
