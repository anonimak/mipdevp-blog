---
title: Bagaimana cara membatalkan git pull (Menguasai Git part 3)
author: sanonimak@gmail.com
date: 2022-11-27T07:54:41.707Z
description: Cara membatalkan git pull, pengenalan git reset dan cara penggunaannya.
isactive: true
tags:
  - git
  - github
  - vcs
---

![](https://git-scm.com/images/logos/downloads/Git-Logo-2Color.png)

Hai sobat tutorseekers kali ini [MIPDEVP](https://mipdevp.com) akan membahas tutorial mengenai **GIT** dan akan dikemas dalam 7 seri yaitu:

> ### Menguasai Git 7 seri
>
> * [Panduan Lengkap Pemula untuk Memulai Git](https://mipdevp.com/blog/articles/2022-10-23-panduan-lengkap-pemula-untuk-memulai-git-menguasai-git-part-1)
> * [Tentang 'stash' di git](https://mipdevp.com/blog/articles/2022-11-22-tentang-stash-di-git-menguasai-git-part-2/)
> * **Bagaimana cara membatalkan git pull**
> * [Membuat .gitignore](#)
> * [Git log untuk melihat perubahan terbaru dalam jangka waktu tertentu](#)
> * [Mengubah dan memperbarui git commit](#)
> * [Overwrite local change dengan 'git pull'](#)

## Bagaimana cara membatalkan git pull

Terkadang dalam mengerjakan project kita menjalankan `git pull` untuk menyamakan versi kode pada remote repository. Namun bagaimana ternyata kita secara tanpa sadar melakukan itu dan menyebabkan semua kode yang ada pada komputer kita telah ditimpa dengan apa pun yang ada di remote repositori. Saat seperti ini jangan panik terlebih dahulu, karena untungnya ada beberapa cara untuk mengembalikan kode ke keadaan semula dan membatalkan `git pull`.

Hal pertama yang pertama, buat *backup* project untuk menjaga-jaga semisal keadaan menjadi lebih buruk. Perhatikan juga bahwa perintah ini akan menyebabkan kehilangan semua perubahan yang belum dikomit - jadi *backup* tersebut dapat membantu sebelum melanjutkan. Setidaknya, Kita akan memiliki versi yang Anda miliki saat ini. Setelah Kita melakukan *backup*, jika kita ingin mendapatkan daftar semua riwayat komit. Kita dapat melakukannya dengan menjalankan `git reflog`:

```sh
git reflog
```
Akan tampil seperti ini:
```sh
3d44a4b (HEAD -> master, origin/master) HEAD@{0}: commit: feat:search barang
b1168af HEAD@{1}: commit: Fix: Bug error login
a12af2b HEAD@{2}: commit: Feat:Lupa password
```

Pilih versi yang ingin kita kembalikan. Misalnya, jika kita ingin kembali ke 'Feat:Lupa password', ambil ID nya `a12af2b`. Selanjutnya, jalankan perintah berikut untuk mengembalikan repositori ke versi tersebut:

```sh
git reset --hard a12af2b
```
Cukup mudah bukan. Namun ada cara lain yang lebih mudah untuk melakukannya adalah dengan memberikan waktu, seperti *back time*. Jika tidak ingin menjalankan `git reflog`, dapat menjalankan perintah berikut untuk kembali ke versi repositori seperti 30 menit yang lalu, dengan asumsi branch master. Perhatian! jika kita telah bekerja pada branch tertentu untuk waktu yang lama, ini dapat membuatnya mundur lumayan jauh. Dalam hal ini, kita mungkin lebih baik menggunakan metode sebelumnya - tetapi itu tidak masalah jika kita memiliki *backup*.

```sh
git reset --hard master@{"30 minutes ago"}
```

Sekian dari MIPDEVP, Arigatou!!


> ### Menguasai Git 7 seri
>
> * [Panduan Lengkap Pemula untuk Memulai Git](https://mipdevp.com/blog/articles/2022-10-23-panduan-lengkap-pemula-untuk-memulai-git-menguasai-git-part-1)
> * [Tentang 'stash' di git](https://mipdevp.com/blog/articles/2022-11-22-tentang-stash-di-git-menguasai-git-part-2/)
> * **Bagaimana cara membatalkan git pull**
> * [Membuat .gitignore](#)
> * [Git log untuk melihat perubahan terbaru dalam jangka waktu tertentu](#)
> * [Mengubah dan memperbarui git commit](#)
> * [Overwrite local change dengan 'git pull'](#)