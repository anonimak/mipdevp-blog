---
title: Git log untuk melihat perubahan terbaru dalam jangka waktu tertentu
  (Menguasai Git part 6)
author: sanonimak@gmail.com
date: 2023-02-21T05:02:55.395Z
description: Git merupakan salah satu tools version control yang paling populer
  digunakan oleh developer di seluruh dunia. Dalam penggunaannya, developer
  seringkali melakukan commit terlebih dahulu untuk menyimpan perubahan code
  yang dilakukan. Namun, terkadang ada kesalahan atau kekurangan yang ditemukan
  setelah melakukan commit. Untungnya, Git menyediakan cara untuk mengubah dan
  memperbarui commit yang telah dilakukan. Yuk, kita simak cara-cara mengubah
  dan memperbarui git commit dengan mudah dan cepat.
isactive: true
tags:
  - git
  - github
  - vcs
---
![git](https://git-scm.com/images/logos/downloads/Git-Logo-2Color.png "git")

Hai sobat tutorseekers kali ini [MIPDEVP](https://mipdevp.com) akan membahas tutorial mengenai **GIT** dan akan dikemas dalam 7 seri yaitu:

> ### Menguasai Git 7 seri
>
> * [Panduan Lengkap Pemula untuk Memulai Git](https://mipdevp.com/blog/articles/2022-10-23-panduan-lengkap-pemula-untuk-memulai-git-menguasai-git-part-1)
> * [Tentang 'stash' di git](https://mipdevp.com/blog/articles/2022-11-22-tentang-stash-di-git-menguasai-git-part-2/)
> * [Bagaimana cara membatalkan git pull](https://mipdevp.com/blog/articles/2022-11-27-bagaimana-cara-membatalkan-git-pull-menguasai-git-part-3/)
> * [Membuat .gitignore](https://mipdevp.com/blog/articles/2023-02-10-membuat-gitignore-menguasai-git-part-3)
> * [Git log untuk melihat perubahan terbaru dalam jangka waktu tertentu](https://mipdevp.com/blog/articles/2023-02-11-git-log-untuk-melihat-perubahan-terbaru-dalam-jangka-waktu-tertentu-menguasai-git-part-4)
> * **Mengubah dan memperbarui git commit**
> * [Overwrite local change dengan 'git pull'](#)

Sure thing! Berikut ini adalah artikel blog dengan judul "Bagaimana Cara Mengubah dan Memperbarui Git Commit dengan Mudah dan Cepat".

Git merupakan salah satu tools version control yang paling populer digunakan oleh developer di seluruh dunia. Dalam penggunaannya, developer seringkali melakukan commit terlebih dahulu untuk menyimpan perubahan code yang dilakukan. Namun, terkadang ada kesalahan atau kekurangan yang ditemukan setelah melakukan commit. Untungnya, Git menyediakan cara untuk mengubah dan memperbarui commit yang telah dilakukan. Yuk, kita simak cara-cara mengubah dan memperbarui git commit dengan mudah dan cepat.


#### **Mengubah commit terakhir**
Cara pertama yang bisa dilakukan adalah dengan mengubah commit terakhir. Jika kamu menemukan kesalahan pada commit terakhir, kamu dapat langsung mengubahnya dengan perintah:
```sh
git commit --amend
```
Dalam perintah tersebut, Git akan membuka editor default untuk mengedit pesan commit terakhir. Kamu bisa mengganti pesan commit, menambah atau menghapus file dari commit, atau mengedit file yang telah di-commit.
Contohnya, kamu telah melakukan commit dengan pesan "menambahkan fitur login", namun kamu ingin menambahkan file readme.md kedalam commit tersebut. Kamu bisa menjalankan perintah ini:
```sh
git add readme.md
git commit --amend
```
Nanti, Git akan membuka editor default dan kamu bisa menambahkan "readme.md" ke dalam pesan commit.


#### Mengubah commit sebelumnya
Jika kamu menemukan kesalahan pada commit sebelumnya, kamu bisa menggunakan perintah "git rebase -i HEAD~n", dimana "n" merupakan jumlah commit yang ingin diubah.
```sh
git rebase -i HEAD~2
```
Setelah menjalankan perintah tersebut, Git akan membuka editor default dengan daftar commit yang akan di-rebase. Kamu bisa mengganti urutan commit atau mengubah pesan commit.

Contohnya, kamu telah melakukan dua commit terakhir dengan pesan "menambahkan fitur login" dan "menambahkan fitur register". Kamu ingin mengubah urutan commit tersebut dan juga mengganti pesan commit menjadi "menambahkan fitur register dan login". Kamu bisa mengedit file yang terbuka dan menyimpan perubahan dengan mengetik ":wq" pada terminal.

#### Mengubah commit lama
Jika kamu menemukan kesalahan pada commit yang sangat lama, kamu bisa menggunakan perintah "git rebase -i hash_kode_commit_lama".
```sh
git rebase -i 1234abcd
```
Setelah menjalankan perintah tersebut, Git akan membuka editor default dengan daftar commit yang akan di-rebase. Kamu bisa mengubah pesan commit atau mengganti urutan commit.

Contohnya, kamu ingin mengubah commit yang terjadi pada hash kode "1234abcd" dengan pesan "menambahkan fitur login". Kamu bisa mengedit file yang terbuka dan menyimpan perubahan dengan mengetik ":wq" pada terminal.

Itulah tadi cara mengubah dan memperbarui git commit dengan mudah dan cepat. Meskipun Git menyediakan cara untuk mengubah commit, kamu harus berhati-hati dalam mengubah commit terutama jika sudah di-push ke repository karena hal tersebut dapat mempengaruhi developer

