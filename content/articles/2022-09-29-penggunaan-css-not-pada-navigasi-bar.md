---
title: Penggunaan CSS :not() pada navigasi bar
author: sanonimak@gmail.com
date: 2022-09-29T03:18:03.129Z
description: Tips untuk penggunaan :not() dan cara pengaplikasiannya ke CSS
  dengan contoh pada navigasi bar
isactive: true
tags:
  - tips
  - css
---
### Mengenai `:not()`

`not(selector)` Merupakan [CSS](https://mipdevp.com/blog/tags/css) pseudo-class yang merepresentasikan suatu elements yang bukan pada selector/element yang ditentukan.

```css
:not(p) {
  background: #ffffff;
}
```

Pada contoh diatas bisa dilihat untuk mengatur warna background untuk semua element yang bukan element `<p>`.

### Contoh penggunaan pada navbar

Oke disini kita akan mengimplementasikan `:not()` pada navbar.  Kita akan buat pembatas antara item navigasi dengan menggunakan `:not()`. Pertama kita akan buat htmlnya terlebih dahulu:

```html
<body>
    ...
    <nav>
        <ul>
            <li><a href="#">Beranda</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Tentang</a></li>
            <li><a href="#">Kontak</a></li>
        </ul>
    </nav>
    ...
</body>
```

Lalu untuk cssnya kita buat seperti ini:

```css
body {
  font-family:  sans-serif;
  line-height: 2;
  margin: 0;
  text-align:right;
}

nav {
  background-color: #345B6A;
  padding: 2em;
}

nav ul {
  padding: 0;
}

nav li {
  display: inline-block;
  font-size: 1.5em;
  padding: .25em 1em;
  text-transform: uppercase;
}

nav li:not(:last-child) {
  border-right: 1px solid #666;
}

nav a {
  border-bottom: 3px solid #666;
  color: #ccc;
  text-decoration: none;
}

nav a:hover {
  border-bottom: 3px solid #975D49;
}
```

hasilnya akan seperti ini:


![gambar-navbar-not](/blog/img/navbar-not-css.jpg)

disini kita bisa lihat penggunaan `:not` untuk pemberian pembatas selain item navbar terakhir `:not(:last-child)`

```css
nav li:not(:last-child) {
  border-right: 1px solid #666;
}
```

untuk contoh code bisa dilihati via [codepen](https://codepen.io/anonimak/pen/KKRQrdJ).

Semoga bermanfaat, Sekian. Terimakasih :sunglasses: :sunglasses: