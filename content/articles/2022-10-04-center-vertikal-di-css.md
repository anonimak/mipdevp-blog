---
title: Center Vertikal di CSS
author: sanonimak@gmail.com
date: 2022-10-04T02:34:37.920Z
description: Bagaimana cara membuat css center secara vertikal
isactive: true
tags:
  - tips
  - css
---
Penting membuat konten pada css secara center memang tidak mudah, baik itu secara horizontal maupun vertical.

![center-css](https://source.unsplash.com/yfgkWX-2vEA/fit=max&w=200&q=60 "center-css")

Mungkin kalau center secara **Horizontal** tidak begitu sulit seperti :

Jika itu `inline-element` kita bisa menggunakan `text-align:center;`

```css
center {
    text-align: center;
}
```

Atau jika itu block level element kita bisa menggunakan `margin:0 auto;`

```css
center {
    margin: 0 auto;
}
```

Kedua hal ini dapat menjadi solusi center secara horizontal.





### Namun bagaimana jika centering secara vertikal?

Center vertikal memang agak sedikit lebih sulit daripada center secara horizontal.
Terdapat beberapa cara yang bisa dilakukan, namun disini kita mau coba 2 cara yaitu dengan `flexbox` dan dengan `grid`.



#### Flexbox

Pada flexbox kita bisa mengatur `align-items` dan `flex-align` secara center:

```css
html,
body {
  height: 100%;
  margin: 0;
}

body {
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-flex;
  display: flex;
}
```

#### Grid

Untuk Grid kita bisa mengatur `place-items` box menjadi center:

```css
body {
  display: grid;
  height: 100vh;
  margin: 0;
  place-items: center center;
}
```

Semoga bermanfaat, Sekian. Terimakasih :sunglasses: :sunglasses: