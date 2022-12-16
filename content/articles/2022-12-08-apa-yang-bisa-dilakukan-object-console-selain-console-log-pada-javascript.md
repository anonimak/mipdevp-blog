---
title: Apa Yang Bisa dilakukan Object console Selain console.log pada Javascript
author: sanonimak@gmail.com
date: 2022-12-08T10:55:12.458Z
description: console.log mungkin sangat familiar bagi para developer javascript
  untuk membantu menampilkan debug pada konsol web. Namun sebenarnya method
  log() yang sering kita gunakan hanyalah salah satu dari banyak fitur yang ada
  pada objek console. Apakah saja fitur2 lain tersebut? dan mungkin saja dengan
  mengetahui hal ini kita bisa improve kualitas dan lebih mempermudah pembacaan
  output debug kita.
isactive: false
tags:
  - general
---
### Apa Yang Bisa dilakukan Object console Selain console.log pada Javascript

`console.log` mungkin sangat familiar bagi para developer javascript untuk membantu menampilkan debug pada konsol web. Namun sebenarnya method `log()` yang sering kita gunakan hanyalah salah satu dari banyak fitur yang ada pada objek `console`. Apakah saja fitur2 lain tersebut? dan mungkin saja dengan mengetahui hal ini kita bisa improve kualitas dan lebih mempermudah pembacaan output debug kita. Oke  sobat tutorseekers langsung saja kita kupas lebih dalam di pembahasan kali ini.

Objek `console` menyediakan akses ke konsol debugging browser (misalnya konsol Web di Firefox/chrome). Jadi intinya dengan `console` kita dapat menampilkan debug berupa log, info, log time, dan masih banyak lagi pada browser. Spesifik tentang cara kerjanya bervariasi dari satu browser ke browser lainnya. Objek konsol juga dapat diakses dari objek global apa pun.

1.  #### console.group
`console.group` dan `console.groupEnd`. Method ini memungkinkan kita membungkus dan mengelompokan beberapa konsol. Ini dapat berguna untuk mengatur dan menyusun hasil debug kita, sehingga dapat dengan mudah melihat apa yang terjadi di berbagai tingkat dan pengelompokan kode kita.
```
        console.group('Profile Details');
        console.log('Name: Mipdevp');
        console.log('Age: 32');
        console.groupEnd();
```
Ini akan membuat grup bersarang yang dapat dilipat di konsol dengan nama "Profile Details". Pesan log yang ada di dalamnya akan dikelompokkan bersama.


2.  #### console.time
   `console.time` dan `console.timeEnd`. Method ini memungkinkan kita untuk mengukur jumlah waktu yang diperlukan untuk mengeksekusi satu blok kode. Ini dapat berguna untuk mengetahui kinerja, berapa lama proses eksekus suatu blok kode dalam satu waktu sehingga dari hasilnya kita dapat mengoptimalkan blok kode yang dibuat.
   ```
    console.time('Fetching data');
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => {
        console.timeEnd('Fetching data');
    });
   ```
   Ini akan mengukur jumlah waktu yang diperlukan untuk mengambil data dari URL yang ditentukan dan mem-parsing respons JSON. Waktu yang berjalan akan ditampilkan di konsol
    
3.  #### console.table
   
4.  #### console.assert
5.  #### console.count
6.  #### console.dir
7.  #### console.trace
8.  #### console.clear
9.  #### console.profile
10. #### console.info