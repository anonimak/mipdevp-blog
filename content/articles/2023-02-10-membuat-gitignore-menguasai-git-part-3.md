---
title: Membuat .gitignore (Menguasai Git part 3)
author: sanonimak@gmail.com
date: 2023-02-10T05:07:10.929Z
description: "Menyederhanakan Proses Git dengan .gitignore: Cara Mudah untuk
  Mengelola File yang Tidak Perlu"
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
> * **Membuat .gitignore**
> * [Git log untuk melihat perubahan terbaru dalam jangka waktu tertentu](#)
> * [Mengubah dan memperbarui git commit](#)
> * [Overwrite local change dengan 'git pull'](#)



"Jangan Biarkan File-file Gak Perlu Nganggu Konsentrasimu saat Nge-push Code ke Repo, Pakai .gitignore Aja!"

Kalo kamu udah serius banget sama coding dan bekerja tim, pasti udah gak asing lagi sama istilah Git dan Github. Git sendiri adalah sistem kontrol versi yang keren banget buat nge-track perubahan-perubahan pada code kamu, sedangkan Github adalah platform yang mempermudah kamu buat nyimpen code kamu dan kerjasama sama temen-temenmu.

Nah, salah satu hal penting banget dalam nge-manage code di Git dan Github adalah pemakaian file .gitignore. File ini super penting buat ngeskip file-file tertentu yang gak perlu di-track sama Git. Misalnya aja file-file hasil build, file-file sensitive kayak password, dll.

Cara pemakaian .gitignore gampang banget, bro. Tinggal buat file baru dengan nama .gitignore di root directory project kamu, trus tulis nama file atau extension yang mau di-skip. Contohnya:

```shell
# File Build
dist/
build/

# File Sensitive
*.env
```

Kode di atas bakal ngeskip semua file yang ada di dalam folder `dist/` dan `build/`, serta semua file dengan extension `.env`. Gampang banget kan?

Jadi, gak ada lagi alasan buat khawatir file-file gak perlu ikut ter-track saat kamu nge-push code ke repo. Pakai .gitignore aja, bro! Happy coding!

Gimana bro? Udah membantu nih?