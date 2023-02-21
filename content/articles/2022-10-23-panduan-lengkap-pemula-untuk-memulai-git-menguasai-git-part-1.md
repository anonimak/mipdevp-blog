---
title: Panduan Lengkap Pemula untuk Memulai Git (Menguasai Git part 1)
author: sanonimak@gmail.com
date: 2022-10-23T05:32:26.438Z
description: Pengenalan git, belajar membuat proyek git dan cara kerja git init.
  Dasar-dasar git, seperti membuat branch, melakukan commit
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
> * **Panduan Lengkap Pemula untuk Memulai Git**
> * [Tentang 'stash' di git](https://mipdevp.com/blog/articles/2022-11-22-tentang-stash-di-git-menguasai-git-part-2/)
> * [Bagaimana cara membatalkan git pull](https://mipdevp.com/blog/articles/2022-11-27-bagaimana-cara-membatalkan-git-pull-menguasai-git-part-3/)
> * [Membuat .gitignore](https://mipdevp.com/blog/articles/2023-02-10-membuat-gitignore-menguasai-git-part-3)
> * [Git log untuk melihat perubahan terbaru dalam jangka waktu tertentu](https://mipdevp.com/blog/articles/2023-02-11-git-log-untuk-melihat-perubahan-terbaru-dalam-jangka-waktu-tertentu-menguasai-git-part-4)
> * [Mengubah dan memperbarui git commit](https://mipdevp.com/blog/articles/2023-02-21-mengubah-dan-memperbarui-git-commit-menguasai-git-part-6)
> * [Overwrite local change dengan 'git pull'](#)

## Singkat mengenai Git

Git merupakan perangkat lunak pengendali versi atau *Version Control System* (VCS) untuk pengembangan perangkat lunak yang diciptakan oleh Linus Torvalds.

Pengontrol versi bertugas mencatat setiap perubahan pada file proyek yang dikerjakan.

Pengembangan Git dimulai pada April 2005, setelah banyak pengembang [kernel Linux](https://id.wikipedia.org/wiki/Kernel_Linux "Kernel Linux") berhenti menggunakan [BitKeeper](https://id.wikipedia.org/w/index.php?title=BitKeeper&action=edit&redlink=1 "BitKeeper (halaman belum tersedia)"), sebuah sistem manajemen kendali kode sumber *propiertary* yang telah mereka gunakan untuk mememelihara proyek Linux sejak tahun 2002.

### Membuat proyek dengan Git

Dalam kesempatan ini goal yang akan dituju yaitu:

* Membuat proyek git, dan cara kerja `git init`,
* Dasar-dasar git, seperti membuat branch, melakukan `commit`
* Cara `push` `commit` ke GitHub.
* Perbedaan antara `git init` dan `git clone`.

Sebelum mulai dengan git, kalian harus me-*install* nya dahulu. Kalian bisa belajar gimana cara me-*install* git [di sini](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git). Kalo sudah terinstal, buka terminal baru lalu ke folder mana pun yang ingin Kalian gunakan untuk project git kalian dengan menggunakan perintah `cd`. Setelah itu, tinggal jalanin perintah ini buat memulai git:

```sh
git init
```

Kalo kalian mau buat proyek git di dalam folder tertentu, bisa juga dapat menjalankannya dengan lokasi direktori. Misalnya, contoh ini akan membuat folder bernama mipdevProject dan dirubah menjadi repositori git:

```sh
git init mipdevpProject
```

Sekarang kita telah menginisialiasai proyek git, kita sudah bisa membuat file di dalamnya. Kalo temen2 bisa liat ada folder .git di dalam repositori git. Di sinilah hal-hal seperti riwayat perubahan, cabang, dan detail lain dari proyek kita disimpan.

#### Menggunakan git init untuk mengubah nama cabang

Pertama kali kita menginisialiasai proyek git menggunakan `git init`, git akan secara otomatis membuatkan cabang utama. Cabang merupakan salinan kode yang memungkinkan kita untuk bekerja secara independen dari basis kode utama, dan kembali ke sana kapan pun kita mau. Semua repositori git memiliki cabang utama, biasanya disebut master. Kalau kita ingin membuat cabang secara kustom, kita bisa menggunakan opsi -b. Misalnya, kode di bawah ini membuat repositori git baru, di mana cabang utama disebut mipdevpBranch:

```sh
git init -b mipdevpBranch
```

#### Cara melakukan commit di git

Setelah git berjalan, kita bisa mulai membuat perubahan. Tiap perubahan yang kita buat - seperti membuat file, memodifikasi file, mengganti nama file, atau jenis perubahan lainnya, akan dilacak oleh git. Ketika Kita telah membuat sejumlah perubahan, ini akan disimpan oleh git sebagai versi proyek yang akan diingat oleh git.

Misalkan kita baru saja membuat file bernama `mipdevp.md` di repositori git. Pertama, kita perlu menambahkannya ke `commit` kita. Untuk menambahkan semua yang telah kami lakukan sejauh ini ke `commit`, kita bisa menggunakan perintah `git add -A`, yang artinya -A untuk semua file dalam perubahan untuk dipilih ke `staging area` `staging area` disini adalah tempat dimana semua perubahan yang akan masuk ke commit:

```sh
git add -A
```

Atau bisa juga menambahkan file individual ke `staging`. Kita bisa menjalankan perintah `git add namafile`. Sebagai contoh, di sini saya hanya akan menambahkan `mipdevp.md`:

```sh
git add mipdevp.md
```

Sekarang kita dapat melakukan perubahan kita menggunakan `git commit`. Ketika melakukan `commit`, kita harus meninggalkan pesan untuk memberi tahu orang-orang tentang apa komitmen ini. Dengan menggunakan perintah `-m` untuk menambah pesan:

```sh
git commit -m "Komitmen pertama"
```

`commit` sangat berguna di git, karena mereka memberikan riwayat semua perubahan yang pernah Kita buat. Kita bisa kembali ke versi proyek pada komit tertentu.

#### Cara melihat cabang di git

Kita telah melakukan perubahan pertama, kita dapat melihat cabang kita dengan mengetik berikut ini:

```sh
git branch --list
```

Jika kita ingin membuat cabang baru, Anda juga dapat menggunakan `git branch` untuk membuat cabang baru. Misalnya, di bawah ini akan membuat cabang bernama newBranch:

```sh
git branch newBranch
```

Untuk berpindah ke cabang yang telah dibuat, gunakan `git switch`:

```sh
git switch newBranch
```

Saat kita membuat cabang baru, salinan kode akan terbuat persesis pada cabang aktif saat itu. Ketika kita berpindah ke cabang yang lain, kita dapat mengeditnya, memperbaruinya, dan `commit` dan itu hanya akan memperbarui cabang itu. Saat kita beralih kembali ke cabang asli kita atau cabang utama, kode akan tetap sama seperti sebelum kita beralih. Cabang memungkinkan kita mengedit kode secara terpisah, lalu memulihkan status aslinya jika perlu. Jika kalian mengikuti waralaba MCU saat ini dan tau konsep `paralel universe` nah cabang memiliki konsep yang sama.

### Cara Push git ke Github

GitHub adalah situs web tempat kita dapat `pull` dan `push` proyek kita, sehingga kita dapat mengkloning atau orang lain dapat berkontribusi pada proyek kita. Kita tidak bisa bekerja pada salinan kode yang disimpan di GitHub secara langsung.

Untuk memulai dengan GitHub, kalian perlu membuat akun, lalu klik + untuk membuat repositori baru:

![img-github-new-repository](/blog/img/screenshot-2022-10-23-150516.png)

Lalu informasi repositori kalian. Ini salah satu yang saya buat:

![img-github-create-new-repository](/blog/img/screenshot-2022-10-23-151004.png)

Setelah repositori dibuat, pastikan kalian telah melakukan `commit` semua kode kalian seperti yang saya lakukan sebelumnya di komputer lokal. Kalian dapat melakukannya lagi dengan menggunakan perintah berikut:
```sh
git add -A
git commit -m "Komitmen pertama"
```
Di git, ada konsep remote repositori. Kita dapat melakukan `push` kode saat kita membutuhkannya. Saat kita membuat repositori pertama Anda, git akan memberikan beberapa instruksi. URL Anda akan berbeda, tetapi akan dalam format https://github.com/USERNAME/GIT_PROJECT.git
```sh
git remote add origin https://github.com/anonimak/mipdevp.git
```
Di atas, saya memberi label cabang remote kami sebagai `origin`, tetapi kalian bisa  mengubah ini. Git menggunakan cabang utama `master` - jadi kalian disarankan menjalankan perintah berikut untuk mengganti nama cabang Anda saat ini menjadi `main`:
```sh
git branch -M main
```
Sekarang kita akhirnya dapat `push` perubahan kita ke GitHub. Untuk melakukan itu, kita harus menjalankan perintah berikut.
```sh
git push -u origin main
```
Perintah -u (yang berarti mengatur upstream), karena ini akan menautkan `remote` repositori yang telah diberi label sebagai `Origin` ke cabang `main`. Itu berarti setiap kali kita berada di cabang `main`  secara lokal, secara default `git push` apa pun akan `push` langsung ke `origin` repositori GitHub kita. Itu menghemat sedikit usaha kami ketika kita ingin `push` update ke repositori GitHub.
Sekarang proyek kalianakan muncul di GitHub saat Anda me-*refresh*!

### Mendorong perubahan di masa mendatang ke GitHub
Sekarang setelah kalian memiliki proyek GitHub, kita mungkin akan terus membuat beberapa perubahan pada proyek kita secara lokal. Kapan pun kita siap untuk mendorong perubahan Anda ke GitHub lagi, ikuti proses yang sama. Pertama, tambahkan semua file Anda ke staging, dan komit:
```sh
git add -A
git commit -m "Komitment pertama!"
```
Lalu jalankan `git Push`:
```sh
git push
```
Ketika kita melakukan perubahan secara lokal, itu hanya akan disimpan secara lokal sampai kita melakukan `git Push`.

### Kesimpulan
GIt merupakan suatu alat yang penting dalam dunia pemrograman. Ini juga merupakan alat manajemen perangkat lunak yang hebat, kita akan sangat terbiasa dan bergantung pada VCS terutama ketika kita secara tidak sengaja menghapus file penting lalu butuh untuk melihat dan kembali ke versi sebelumnya tanpa risau.

Sekian dari MIPDEVP, Arigatou!!


> ### Menguasai Git 7 seri
>
> * **Panduan Lengkap Pemula untuk Memulai Git**
> * [Tentang 'stash' di git](https://mipdevp.com/blog/articles/2022-11-22-tentang-stash-di-git-menguasai-git-part-2/)
> * [Bagaimana cara membatalkan git pull](https://mipdevp.com/blog/articles/2022-11-27-bagaimana-cara-membatalkan-git-pull-menguasai-git-part-3/)
> * [Membuat .gitignore](#)
> * [Git log untuk melihat perubahan terbaru dalam jangka waktu tertentu](#)
> * [Mengubah dan memperbarui git commit](#)
> * [Overwrite local change dengan 'git pull'](#)




