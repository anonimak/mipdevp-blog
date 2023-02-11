---
title: Git log untuk melihat perubahan terbaru dalam jangka waktu tertentu
  (Menguasai Git part 4)
author: sanonimak@gmail.com
date: 2023-02-11T05:31:53.271Z
description: Git log! Git log adalah fitur yang sangat berguna dalam Git yang
  membantu kita melihat perubahan yang terjadi dalam jangka waktu tertentu.
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
> * **Git log untuk melihat perubahan terbaru dalam jangka waktu tertentu**
> * [Mengubah dan memperbarui git commit](#)
> * [Overwrite local change dengan 'git pull'](#)


Yo, kita semua tahu bahwa Git adalah version control system yang wajib dimiliki oleh setiap developer. Ini membantu kita untuk memantau dan mencatat setiap perubahan yang dilakukan pada proyek kita. Tapi, bagaimana cara melihat perubahan terbaru dalam jangka waktu tertentu?

Nah, ini dia solusinya: Git log! Git log adalah fitur yang sangat berguna dalam Git yang membantu kita melihat perubahan yang terjadi dalam jangka waktu tertentu. Kita bisa melihat perubahan seperti:

    Siapa yang mengcommit perubahan
    Kapan perubahan tersebut dibuat
    Apa perubahan yang dilakukan

Penggunaan Git log sangat mudah, cukup dengan mengetikkan perintah "git log" di terminal atau command prompt. Namun, untuk melihat perubahan dalam jangka waktu tertentu, kita perlu menambahkan beberapa opsi.

Misalnya, jika kita ingin melihat perubahan dalam satu minggu terakhir, kita bisa menambahkan opsi "--since" seperti ini:

```bash
git log --since='1 week ago'
```
Atau jika kita ingin melihat perubahan dalam satu bulan terakhir, kita bisa menambahkan opsi "--since" seperti ini:

```bash
git log --since='1 month ago'
```
Sama seperti "--since", kita juga bisa menambahkan opsi "--until" untuk menentukan batas akhir dari jangka waktu yang ingin kita lihat perubahannya. Misalnya:

```perl
git log --since='1 month ago' --until='2 weeks ago'
```
Itu dia, Git log yang gampang dan berguna untuk memantau perubahan dalam jangka waktu tertentu. Jangan lupa untuk selalu memantau perubahan pada proyek kita, agar kita tahu apa saja yang terjadi dan siapa saja yang terlibat. Happy coding, guys!