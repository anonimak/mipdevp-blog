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
isactive: true
tags:
  - javascript
---
### Apa Yang Bisa dilakukan Object console Selain console.log pada Javascript

![console-image](https://images.unsplash.com/photo-1607799279861-4dd421887fb3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMDI4NDAxMg&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080 "console-image")

`console.log` mungkin sangat familiar bagi para developer javascript untuk membantu menampilkan debug pada konsol web. Namun sebenarnya method `log()` yang sering kita gunakan hanyalah salah satu dari banyak fitur yang ada pada objek `console`. Apakah saja fitur2 lain tersebut? dan mungkin saja dengan mengetahui hal ini kita bisa improve kualitas dan lebih mempermudah pembacaan output debug kita. Oke  sobat tutorseekers langsung saja kita kupas lebih dalam di pembahasan kali ini.

Objek `console` menyediakan akses ke konsol debugging browser (misalnya konsol Web di Firefox/chrome). Jadi intinya dengan `console` kita dapat menampilkan debug berupa log, info, log time, dan masih banyak lagi pada browser. Spesifik tentang cara kerjanya bervariasi dari satu browser ke browser lainnya. Objek konsol juga dapat diakses dari objek global apa pun.

1. #### console.group

   `console.group` dan `console.groupEnd`. Method ini memungkinkan kita membungkus dan mengelompokan beberapa konsol. Ini dapat berguna untuk mengatur dan menyusun hasil debug kita, sehingga dapat dengan mudah melihat apa yang terjadi di berbagai tingkat dan pengelompokan kode kita.

```
        console.group('Profile Details');
        console.log('Name: Mipdevp');
        console.log('Age: 32');
        console.groupEnd();
```

Ini akan membuat grup bersarang yang dapat dilipat di konsol dengan nama "Profile Details". Pesan log yang ada di dalamnya akan dikelompokkan bersama.

2. #### console.time

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

3. #### console.table

   `console.table` sangat berguna saat kita perlu menampilkan array dalam format tabel. Yang harus dilakukan hanyalah meneruskan array dan menampilkan hasilnya dalam format tabel di konsol browser. 

```
 const user = [
   { nama: "Yanto" },
   { nama: "Joni" },
   { nama: "Jono" },
   { nama: "Go" },
];

console.table(user);
```

   Nama kolom akan menjadi indeks jika nilainya primitif tetapi jika itu adalah objek maka nama properti akan menjadi nama kolom.

4. #### console.assert

   `console.assert` sangat mirip dengan `console.error` tetapi dengan satu perbedaan membutuhkan nilai boolean sebagai argumen pertama dan pesan sebagai argumen kedua yang akan ditampilkan jika boolean bernilai true jika tidak ditampilkan. Ini cukup berguna karena menghindari kebutuhan untuk membungkus console.error dalam kondisional.

```
const isLogin = true
console.assert(!isLogin, "Anda belum login")
```

5. #### console.count

   `console.count` menerima label dan menampilkan berapa kali `count()` dipanggil dengan label itu jika tidak ada nilai yang diberikan label default ke default. Dan jika ingin mengatur ulang kembali menjadi 0 kita bisa menggunakan `console.countReset`.

```
console.count();
console.count();
console.count();
console.countReset();
console.count();
console.count();
/**
Output:
default: 1
default: 2
default: 3
default: 0
default: 1
default: 2
*/

const label = "label";
console.count(label);
console.count(label);
console.count(label);
/**
Output:
label: 1
label: 2
label: 3
*/
```

6. #### console.dir

   `console.dir` adalah cara untuk melihat semua properti dari objek JavaScript yang ditentukan di konsol yang dengannya kita dapat dengan mudah mendapatkan properti dari objek tersebut.

```
dir(object)
```

7. #### console.trace

   `console.trace` menerima pesan dan menampilkan pesan tersebut dengan tumpukan panggilan saat ini atau urutan fungsi yang dipanggil berdasarkan tempat `trace()` dipanggil.

```
const func1 = () => {
console.trace("Current Trace:");
};
const func2 = () => {
func1();
};
const func3 = () => {
func2();
};
```

8. #### console.clear

   `console.clear` membersihkan konsol jika konsol mengizinkannya. Konsol grafis, seperti yang berjalan di browser, akan mengizinkannya; konsol yang ditampilkan di terminal, seperti yang berjalan di Node, tidak akan mendukungnya, dan tidak akan berpengaruh (dan tidak ada kesalahan).

```
clear()
```

9. #### console.info

   `console.info` menampilkan pesan informasional ke konsol Web. Di Firefox, ikon "i" kecil ditampilkan di sebelah item ini di log konsol Web.

```
info(msg)
```