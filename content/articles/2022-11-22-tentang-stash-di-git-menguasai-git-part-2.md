---
title: Tentang 'stash' di git (Menguasai Git part 2)
author: sanonimak@gmail.com
date: 2022-11-22T07:07:34.639Z
description: Pengenalan git stash dan cara penggunaannya.
isactive: true
tags:
  - git
  - github
  - vsc
---
![](https://git-scm.com/images/logos/downloads/Git-Logo-2Color.png)

Hai sobat tutorseekers kali ini [MIPDEVP](https://mipdevp.com) akan membahas tutorial mengenai **GIT** dan akan dikemas dalam 7 seri yaitu:

> ### Menguasai Git 7 seri
>
> * [Panduan Lengkap Pemula untuk Memulai Git](https://mipdevp.com/blog/articles/2022-10-23-panduan-lengkap-pemula-untuk-memulai-git-menguasai-git-part-1)
> * **Tentang 'stash' di git**
> * [Bagaimana cara membatalkan git pull](#)
> * [Membuat .gitignore](#)
> * [Git log untuk melihat perubahan terbaru dalam jangka waktu tertentu](#)
> * [Mengubah dan memperbarui git commit](#)
> * [Overwrite local change dengan 'git pull'](#)

## Tentang 'stash' di git

Terkadang ketika kita mengerjakan suatu tugas (pengerjaan fitur, membetulkan bug atau hal lain) dan masih dalam pengerjaan sehingga terdapat status perubahan pada git `git change` namun versi dari lokal tidak sesuai dengan yang ada di server, atau ada tim kita yang melakukan push ke server dan kita harus mensinkronkan versi sehingga menjadi sama. Permasalahan muncul ketika kita melakukan `git pull` tetapi terdapat perubahan *work tree* pada lokal (yang belum selesai dikerjakan) yang belum di-commit. Kita tahu bahwa `git pull` hanya bisa dilakukan ketika tidak ada perubahan di git. Bagaimana cara mengatasi ini? yang kita perlukan adalah

```sh
git stash
```

Dengan `git stash` ini akan menyimpan perubahan dengan menyimpannya di tempat yang aman kemudian suatu waktu dapat dilakukan pemanggilan ulang, simpan, edit, ataupun hapus. Ada beberapa perintah yang sangat berguna yang kita harus tahu:

* git stash list
* git stash show
* git stash apply
* git stash pop
* git stash push
* git stash clear
* git stash drop


### Stash List & Show

Setelah kita tadi telah menjalankan `git stash` lalu *work tree* menjadi kosong. Lalu untuk melihat dimana `stash` tersebut kita bisa menggunakan perintah berikut:
```sh
git stash list
```

Menariknya, ini akan menunjukkan banyak *stash* yang ada sebelumnya. Oleh karena itu, Git menyimpan semua *stash*, jika kita ingin mengambilnya kembali di masa mendatang. Misalnya, ini adalah proyek dengan banyak simpanan, setelah menjalankan `git stash list`:

```sh
stash@{0}: WIP on master: csd81a1 feat-ui: updated CSS mipdev
stash@{1}: WIP on master: 7f13hd4 feat-ui: Bug fix on article Qwik
stash@{2}: WIP on master: 5dafc53 feat-ui: Fixed navbar on dark mode
```

Semua *stash* disimpan di file `ref/stash` , di dalam folder `.git`. Kita bisa melihat dengan detail menggunakan perintah `git stash show`:

```sh
index.js      | 122 +---------------------------------------------------------
public/content/articles/qwik.js | 50 +----------------------------------------
```

Atau untuk lebih jelas bisa tambahkan `-p`:
```sh
git stash show -p
```
untuk opsi perintah lain bisa dilihat di bawah ini:

* `-u` atau `--include-untracked`, untuk menampilkan file yang tidak terlacak di `git show` yang ada di stash, mis. `git stash show -u`
* `--only-untracked`, untuk menampilkan hanya file yang tidak terlacak di `git show`, yang ada di stash, mis. `git stash show --only-untracked`


### Mengembalikan stash git dengan apply atau pop

Untuk mengembalikan kode yang telah ter *stash*, Anda dapat menjalankan perintah berikut:
```sh
git stash apply
```

Jika ingin mengembalikan kode dengan lebih spesifik, cukup mencantumkan nomor stash setelah perintah. Misalnya, untuk memulihkan stash@{1}, kita bisa menjalankan perintah berikut:
```sh
git stash apply 1
```

Biasanya setelah melakukan `apply` mungkin akan mengalami konflik *merge*. Jadi pastikan itu sudah diurus ini.


#### Stash pop 
Perbedaan dari `apply` dengan `pop`, `pop` tidak hanya mengembalikan kode *stash* namun juga menghapus *stash* tersebut dari `stash list`. Kita bisa menjalankan perintah berikut:

```sh
git stash pop
```

### Menjadikan stash menjadi branch
Hal berguna lainnya yang dilakukan `git stash` yang kurang dimanfaatkan adalah memungkinkan kita membuat cabang baru dari kode *stash* kita. Kita bisa menerapkan kode *stash*, lalu membuat cabang baru dengan nama sesuka kita. Sebagai contoh, berikut ini akan membuat sebuah cabang bernama `new-mipdevpstash-code`:
```sh
git stash branch new-mipdevpstash-code
```

### Push stash
Kita juga bisa melakukan push terhadap *stash* dengan perintah berikut:
```sh
git stash push
```
Perintah ini sebenarnya sama dengan git stash, tetapi bisa sedikit membingungkan jika kita tidak menyadarinya. Selain itu, `git stash` dan `git stash push` hadir dengan sejumlah opsi yang berguna, jika kita ingin menggunakannya:

* `-a` atau `--all`, akan menyimpan seluruh *work tree* ke `stash`, mis. `git stash push -a`
* `-S` atau `--staged`, hanya akan menyimpan perubahan bertahap yang ditambahkan menggunakan `git add`, mis. `git stash push -S`
* `-p` atau `--patch`, akan memungkinkan kita melalui setiap perubahan dan secara selektif memutuskan apakah kita ingin menyimpannya, mis. `git stash -p`
* `-u` atau `--include-untracked`, untuk menyimpan semua file yang tidak terlacak beserta simpanan Anda, mis. `git stash push -u`

### Menghapus stash
Terakhir, terkadang kita ingin menghapus seluruh `simpanan`. Ini sedikit berbahaya, jadi harap hati-hati, tetapi jika mau yang harus dijalankan adalah:
```sh
git stash clear
```
Jika kita tidak ingin melakukan hal seperti itu, tapi masih ingin menghapus item *stash* tertentu, kita dapat menjalankan `git stash drop` untuk menghapus entri *stash* terbaru, atau `git stash drop 1` untuk menghapus *stash* yang terdaftar sebagai stash@{1} dalam hasil `git stash list` kita.

Sekian dari MIPDEVP, Arigatou!!


> ### Menguasai Git 7 seri
>
> * [Panduan Lengkap Pemula untuk Memulai Git](https://mipdevp.com/blog/articles/2022-10-23-panduan-lengkap-pemula-untuk-memulai-git-menguasai-git-part-1)
> * **Tentang 'stash' di git**
> * [Bagaimana cara membatalkan git pull](#)
> * [Membuat .gitignore](#)
> * [Git log untuk melihat perubahan terbaru dalam jangka waktu tertentu](#)
> * [Mengubah dan memperbarui git commit](#)
> * [Overwrite local change dengan 'git pull'](#)