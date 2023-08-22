__NUXT_JSONP__("/articles/2022-11-22-tentang-stash-di-git-menguasai-git-part-2", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD){return {data:[{}],fetch:{"0":{article:{slug:"2022-11-22-tentang-stash-di-git-menguasai-git-part-2",description:"Pengenalan git stash dan cara penggunaannya.",title:"Tentang 'stash' di git (Menguasai Git part 2)",author:T,date:"2022-11-22T07:07:34.639Z",isactive:P,tags:[G,H,I],toc:[{id:U,depth:z,text:J},{id:V,depth:2,text:K},{id:W,depth:z,text:X},{id:Y,depth:z,text:Z},{id:_,depth:z,text:$},{id:aa,depth:z,text:ab},{id:ac,depth:z,text:ad},{id:ae,depth:z,text:J}],body:{type:"root",children:[{type:b,tag:i,props:{},children:[{type:b,tag:"img",props:{alt:B,src:"https:\u002F\u002Fgit-scm.com\u002Fimages\u002Flogos\u002Fdownloads\u002FGit-Logo-2Color.png"},children:[]}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:"Hai sobat tutorseekers kali ini "},{type:b,tag:h,props:{href:"https:\u002F\u002Fmipdevp.com",rel:[v,w,x],target:y},children:[{type:a,value:"MIPDEVP"}]},{type:a,value:" akan membahas tutorial mengenai "},{type:b,tag:Q,props:{},children:[{type:a,value:"GIT"}]},{type:a,value:" dan akan dikemas dalam 7 seri yaitu:"}]},{type:a,value:c},{type:b,tag:af,props:{},children:[{type:a,value:c},{type:b,tag:A,props:{id:U},children:[{type:b,tag:h,props:{href:"#menguasai-git-7-seri",ariaHidden:r,tabIndex:s},children:[{type:b,tag:e,props:{className:[t,u]},children:[]}]},{type:a,value:J}]},{type:a,value:c},{type:b,tag:C,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:h,props:{href:ag,rel:[v,w,x],target:y},children:[{type:a,value:ah}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:Q,props:{},children:[{type:a,value:K}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:h,props:{href:ai,rel:[v,w,x],target:y},children:[{type:a,value:aj}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:h,props:{href:"https:\u002F\u002Fmipdevp.com\u002Fblog\u002Farticles\u002F2023-02-10-membuat-gitignore-menguasai-git-part-3",rel:[v,w,x],target:y},children:[{type:a,value:ak}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:h,props:{href:"https:\u002F\u002Fmipdevp.com\u002Fblog\u002Farticles\u002F2023-02-11-git-log-untuk-melihat-perubahan-terbaru-dalam-jangka-waktu-tertentu-menguasai-git-part-4",rel:[v,w,x],target:y},children:[{type:a,value:al}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:h,props:{href:"https:\u002F\u002Fmipdevp.com\u002Fblog\u002Farticles\u002F2023-02-21-mengubah-dan-memperbarui-git-commit-menguasai-git-part-6",rel:[v,w,x],target:y},children:[{type:a,value:am}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:h,props:{href:D},children:[{type:a,value:an}]}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:"h2",props:{id:V},children:[{type:b,tag:h,props:{href:"#tentang-stash-di-git",ariaHidden:r,tabIndex:s},children:[{type:b,tag:e,props:{className:[t,u]},children:[]}]},{type:a,value:K}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:"Terkadang ketika kita mengerjakan suatu tugas (pengerjaan fitur, membetulkan bug atau hal lain) dan masih dalam pengerjaan sehingga terdapat status perubahan pada git "},{type:b,tag:d,props:{},children:[{type:a,value:"git status"}]},{type:a,value:" namun versi dari lokal tidak sesuai dengan yang ada di server, atau ada tim kita yang melakukan push ke server dan kita harus mensinkronkan versi sehingga menjadi sama. Permasalahan muncul ketika kita melakukan "},{type:b,tag:d,props:{},children:[{type:a,value:ao}]},{type:a,value:" tetapi terdapat perubahan "},{type:b,tag:j,props:{},children:[{type:a,value:R}]},{type:a,value:" pada lokal (yang belum selesai dikerjakan) yang belum di-commit. Kita tahu bahwa "},{type:b,tag:d,props:{},children:[{type:a,value:ao}]},{type:a,value:" hanya bisa dilakukan ketika tidak ada perubahan di git. Bagaimana cara mengatasi ini? yang kita perlukan adalah"}]},{type:a,value:c},{type:b,tag:m,props:{className:[n]},children:[{type:b,tag:o,props:{className:[p],style:q},children:[{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{className:[g]},children:[{type:b,tag:e,props:{style:k},children:[{type:a,value:E}]}]},{type:a,value:c},{type:b,tag:e,props:{className:[g]},children:[]}]}]}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:"Dengan "},{type:b,tag:d,props:{},children:[{type:a,value:E}]},{type:a,value:" ini akan menyimpan perubahan dengan menyimpannya di tempat yang aman kemudian suatu waktu dapat dilakukan pemanggilan ulang, simpan, edit, ataupun hapus. Ada beberapa perintah yang sangat berguna yang kita harus tahu:"}]},{type:a,value:c},{type:b,tag:C,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:L}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:ap}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:aq}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:ar}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:S}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:as}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:at}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:A,props:{id:W},children:[{type:b,tag:h,props:{href:"#stash-list--show",ariaHidden:r,tabIndex:s},children:[{type:b,tag:e,props:{className:[t,u]},children:[]}]},{type:a,value:X}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:"Setelah kita tadi telah menjalankan "},{type:b,tag:d,props:{},children:[{type:a,value:E}]},{type:a,value:" lalu "},{type:b,tag:j,props:{},children:[{type:a,value:R}]},{type:a,value:" menjadi kosong. Lalu untuk melihat dimana "},{type:b,tag:d,props:{},children:[{type:a,value:l}]},{type:a,value:" tersebut kita bisa menggunakan perintah berikut:"}]},{type:a,value:c},{type:b,tag:m,props:{className:[n]},children:[{type:b,tag:o,props:{className:[p],style:q},children:[{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{className:[g]},children:[{type:b,tag:e,props:{style:k},children:[{type:a,value:L}]}]},{type:a,value:c},{type:b,tag:e,props:{className:[g]},children:[]}]}]}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:"Menariknya, ini akan menunjukkan banyak "},{type:b,tag:j,props:{},children:[{type:a,value:l}]},{type:a,value:" yang ada sebelumnya. Oleh karena itu, Git menyimpan semua "},{type:b,tag:j,props:{},children:[{type:a,value:l}]},{type:a,value:", jika kita ingin mengambilnya kembali di masa mendatang. Misalnya, ini adalah proyek dengan banyak simpanan, setelah menjalankan "},{type:b,tag:d,props:{},children:[{type:a,value:L}]},{type:a,value:M}]},{type:a,value:c},{type:b,tag:m,props:{className:[n]},children:[{type:b,tag:o,props:{className:[p],style:q},children:[{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{className:[g]},children:[{type:b,tag:e,props:{style:k},children:[{type:a,value:"stash@{0}: WIP on master: csd81a1 feat-ui: updated CSS mipdev"}]}]},{type:a,value:c},{type:b,tag:e,props:{className:[g]},children:[{type:b,tag:e,props:{style:k},children:[{type:a,value:"stash@{1}: WIP on master: 7f13hd4 feat-ui: Bug fix on article Qwik"}]}]},{type:a,value:c},{type:b,tag:e,props:{className:[g]},children:[{type:b,tag:e,props:{style:k},children:[{type:a,value:"stash@{2}: WIP on master: 5dafc53 feat-ui: Fixed navbar on dark mode"}]}]},{type:a,value:c},{type:b,tag:e,props:{className:[g]},children:[]}]}]}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:"Semua "},{type:b,tag:j,props:{},children:[{type:a,value:l}]},{type:a,value:" disimpan di file "},{type:b,tag:d,props:{},children:[{type:a,value:"ref\u002Fstash"}]},{type:a,value:" , di dalam folder "},{type:b,tag:d,props:{},children:[{type:a,value:".git"}]},{type:a,value:". Kita bisa melihat dengan detail menggunakan perintah "},{type:b,tag:d,props:{},children:[{type:a,value:ap}]},{type:a,value:M}]},{type:a,value:c},{type:b,tag:m,props:{className:[n]},children:[{type:b,tag:o,props:{className:[p],style:q},children:[{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{className:[g]},children:[{type:b,tag:e,props:{style:k},children:[{type:a,value:"index.js      | 122 +---------------------------------------------------------"}]}]},{type:a,value:c},{type:b,tag:e,props:{className:[g]},children:[{type:b,tag:e,props:{style:k},children:[{type:a,value:"public\u002Fcontent\u002Farticles\u002Fqwik.js | 50 +----------------------------------------"}]}]},{type:a,value:c},{type:b,tag:e,props:{className:[g]},children:[]}]}]}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:"Atau untuk lebih jelas bisa tambahkan "},{type:b,tag:d,props:{},children:[{type:a,value:au}]},{type:a,value:M}]},{type:a,value:c},{type:b,tag:m,props:{className:[n]},children:[{type:b,tag:o,props:{className:[p],style:q},children:[{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{className:[g]},children:[{type:b,tag:e,props:{style:k},children:[{type:a,value:"git stash show -p"}]}]},{type:a,value:c},{type:b,tag:e,props:{className:[g]},children:[]}]}]}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:"untuk opsi perintah lain bisa dilihat di bawah ini:"}]},{type:a,value:c},{type:b,tag:C,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:d,props:{},children:[{type:a,value:av}]},{type:a,value:F},{type:b,tag:d,props:{},children:[{type:a,value:aw}]},{type:a,value:", untuk menampilkan file yang tidak terlacak di "},{type:b,tag:d,props:{},children:[{type:a,value:ax}]},{type:a,value:" yang ada di stash, mis. "},{type:b,tag:d,props:{},children:[{type:a,value:"git stash show -u"}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:d,props:{},children:[{type:a,value:"--only-untracked"}]},{type:a,value:", untuk menampilkan hanya file yang tidak terlacak di "},{type:b,tag:d,props:{},children:[{type:a,value:ax}]},{type:a,value:", yang ada di stash, mis. "},{type:b,tag:d,props:{},children:[{type:a,value:"git stash show --only-untracked"}]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:A,props:{id:Y},children:[{type:b,tag:h,props:{href:"#mengembalikan-stash-git-dengan-apply-atau-pop",ariaHidden:r,tabIndex:s},children:[{type:b,tag:e,props:{className:[t,u]},children:[]}]},{type:a,value:Z}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:"Untuk mengembalikan kode yang telah ter "},{type:b,tag:j,props:{},children:[{type:a,value:l}]},{type:a,value:", Anda dapat menjalankan perintah berikut:"}]},{type:a,value:c},{type:b,tag:m,props:{className:[n]},children:[{type:b,tag:o,props:{className:[p],style:q},children:[{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{className:[g]},children:[{type:b,tag:e,props:{style:k},children:[{type:a,value:aq}]}]},{type:a,value:c},{type:b,tag:e,props:{className:[g]},children:[]}]}]}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:"Jika ingin mengembalikan kode dengan lebih spesifik, cukup mencantumkan nomor stash setelah perintah. Misalnya, untuk memulihkan stash@{1}, kita bisa menjalankan perintah berikut:"}]},{type:a,value:c},{type:b,tag:m,props:{className:[n]},children:[{type:b,tag:o,props:{className:[p],style:q},children:[{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{className:[g]},children:[{type:b,tag:e,props:{style:k},children:[{type:a,value:"git stash apply 1"}]}]},{type:a,value:c},{type:b,tag:e,props:{className:[g]},children:[]}]}]}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:"Biasanya setelah melakukan "},{type:b,tag:d,props:{},children:[{type:a,value:ay}]},{type:a,value:" mungkin akan mengalami konflik "},{type:b,tag:j,props:{},children:[{type:a,value:"merge"}]},{type:a,value:". Jadi pastikan itu sudah diurus ini."}]},{type:a,value:c},{type:b,tag:"h4",props:{id:"stash-pop"},children:[{type:b,tag:h,props:{href:"#stash-pop",ariaHidden:r,tabIndex:s},children:[{type:b,tag:e,props:{className:[t,u]},children:[]}]},{type:a,value:"Stash pop"}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:"Perbedaan dari "},{type:b,tag:d,props:{},children:[{type:a,value:ay}]},{type:a,value:" dengan "},{type:b,tag:d,props:{},children:[{type:a,value:az}]},{type:a,value:", "},{type:b,tag:d,props:{},children:[{type:a,value:az}]},{type:a,value:" tidak hanya mengembalikan kode "},{type:b,tag:j,props:{},children:[{type:a,value:l}]},{type:a,value:" namun juga menghapus "},{type:b,tag:j,props:{},children:[{type:a,value:l}]},{type:a,value:" tersebut dari "},{type:b,tag:d,props:{},children:[{type:a,value:"stash list"}]},{type:a,value:". Kita bisa menjalankan perintah berikut:"}]},{type:a,value:c},{type:b,tag:m,props:{className:[n]},children:[{type:b,tag:o,props:{className:[p],style:q},children:[{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{className:[g]},children:[{type:b,tag:e,props:{style:k},children:[{type:a,value:ar}]}]},{type:a,value:c},{type:b,tag:e,props:{className:[g]},children:[]}]}]}]},{type:a,value:c},{type:b,tag:A,props:{id:_},children:[{type:b,tag:h,props:{href:"#menjadikan-stash-menjadi-branch",ariaHidden:r,tabIndex:s},children:[{type:b,tag:e,props:{className:[t,u]},children:[]}]},{type:a,value:$}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:"Hal berguna lainnya yang dilakukan "},{type:b,tag:d,props:{},children:[{type:a,value:E}]},{type:a,value:" yang kurang dimanfaatkan adalah memungkinkan kita membuat cabang baru dari kode "},{type:b,tag:j,props:{},children:[{type:a,value:l}]},{type:a,value:" kita. Kita bisa menerapkan kode "},{type:b,tag:j,props:{},children:[{type:a,value:l}]},{type:a,value:", lalu membuat cabang baru dengan nama sesuka kita. Sebagai contoh, berikut ini akan membuat sebuah cabang bernama "},{type:b,tag:d,props:{},children:[{type:a,value:"new-mipdevpstash-code"}]},{type:a,value:M}]},{type:a,value:c},{type:b,tag:m,props:{className:[n]},children:[{type:b,tag:o,props:{className:[p],style:q},children:[{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{className:[g]},children:[{type:b,tag:e,props:{style:k},children:[{type:a,value:"git stash branch new-mipdevpstash-code"}]}]},{type:a,value:c},{type:b,tag:e,props:{className:[g]},children:[]}]}]}]},{type:a,value:c},{type:b,tag:A,props:{id:aa},children:[{type:b,tag:h,props:{href:"#push-stash",ariaHidden:r,tabIndex:s},children:[{type:b,tag:e,props:{className:[t,u]},children:[]}]},{type:a,value:ab}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:"Kita juga bisa melakukan push terhadap "},{type:b,tag:j,props:{},children:[{type:a,value:l}]},{type:a,value:" dengan perintah berikut:"}]},{type:a,value:c},{type:b,tag:m,props:{className:[n]},children:[{type:b,tag:o,props:{className:[p],style:q},children:[{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{className:[g]},children:[{type:b,tag:e,props:{style:k},children:[{type:a,value:S}]}]},{type:a,value:c},{type:b,tag:e,props:{className:[g]},children:[]}]}]}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:"Perintah ini sebenarnya sama dengan git stash, tetapi bisa sedikit membingungkan jika kita tidak menyadarinya. Selain itu, "},{type:b,tag:d,props:{},children:[{type:a,value:E}]},{type:a,value:" dan "},{type:b,tag:d,props:{},children:[{type:a,value:S}]},{type:a,value:" hadir dengan sejumlah opsi yang berguna, jika kita ingin menggunakannya:"}]},{type:a,value:c},{type:b,tag:C,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:d,props:{},children:[{type:a,value:"-a"}]},{type:a,value:F},{type:b,tag:d,props:{},children:[{type:a,value:"--all"}]},{type:a,value:", akan menyimpan seluruh "},{type:b,tag:j,props:{},children:[{type:a,value:R}]},{type:a,value:" ke "},{type:b,tag:d,props:{},children:[{type:a,value:l}]},{type:a,value:aA},{type:b,tag:d,props:{},children:[{type:a,value:"git stash push -a"}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:d,props:{},children:[{type:a,value:"-S"}]},{type:a,value:F},{type:b,tag:d,props:{},children:[{type:a,value:"--staged"}]},{type:a,value:", hanya akan menyimpan perubahan bertahap yang ditambahkan menggunakan "},{type:b,tag:d,props:{},children:[{type:a,value:"git add"}]},{type:a,value:aA},{type:b,tag:d,props:{},children:[{type:a,value:"git stash push -S"}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:d,props:{},children:[{type:a,value:au}]},{type:a,value:F},{type:b,tag:d,props:{},children:[{type:a,value:"--patch"}]},{type:a,value:", akan memungkinkan kita melalui setiap perubahan dan secara selektif memutuskan apakah kita ingin menyimpannya, mis. "},{type:b,tag:d,props:{},children:[{type:a,value:"git stash -p"}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:d,props:{},children:[{type:a,value:av}]},{type:a,value:F},{type:b,tag:d,props:{},children:[{type:a,value:aw}]},{type:a,value:", untuk menyimpan semua file yang tidak terlacak beserta simpanan Anda, mis. "},{type:b,tag:d,props:{},children:[{type:a,value:"git stash push -u"}]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:A,props:{id:ac},children:[{type:b,tag:h,props:{href:"#menghapus-stash",ariaHidden:r,tabIndex:s},children:[{type:b,tag:e,props:{className:[t,u]},children:[]}]},{type:a,value:ad}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:"Terakhir, terkadang kita ingin menghapus seluruh "},{type:b,tag:d,props:{},children:[{type:a,value:"simpanan"}]},{type:a,value:". Ini sedikit berbahaya, jadi harap hati-hati, tetapi jika mau yang harus dijalankan adalah:"}]},{type:a,value:c},{type:b,tag:m,props:{className:[n]},children:[{type:b,tag:o,props:{className:[p],style:q},children:[{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{className:[g]},children:[{type:b,tag:e,props:{style:k},children:[{type:a,value:as}]}]},{type:a,value:c},{type:b,tag:e,props:{className:[g]},children:[]}]}]}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:"Jika kita tidak ingin melakukan hal seperti itu, tapi masih ingin menghapus item "},{type:b,tag:j,props:{},children:[{type:a,value:l}]},{type:a,value:" tertentu, kita dapat menjalankan "},{type:b,tag:d,props:{},children:[{type:a,value:at}]},{type:a,value:" untuk menghapus entri "},{type:b,tag:j,props:{},children:[{type:a,value:l}]},{type:a,value:" terbaru, atau "},{type:b,tag:d,props:{},children:[{type:a,value:"git stash drop 1"}]},{type:a,value:" untuk menghapus "},{type:b,tag:j,props:{},children:[{type:a,value:l}]},{type:a,value:" yang terdaftar sebagai stash@{1} dalam hasil "},{type:b,tag:d,props:{},children:[{type:a,value:L}]},{type:a,value:" kita."}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:"Sekian dari MIPDEVP, Arigatou!!"}]},{type:a,value:c},{type:b,tag:af,props:{},children:[{type:a,value:c},{type:b,tag:A,props:{id:ae},children:[{type:b,tag:h,props:{href:"#menguasai-git-7-seri-1",ariaHidden:r,tabIndex:s},children:[{type:b,tag:e,props:{className:[t,u]},children:[]}]},{type:a,value:J}]},{type:a,value:c},{type:b,tag:C,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:h,props:{href:ag,rel:[v,w,x],target:y},children:[{type:a,value:ah}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:Q,props:{},children:[{type:a,value:K}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:h,props:{href:ai,rel:[v,w,x],target:y},children:[{type:a,value:aj}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:h,props:{href:D},children:[{type:a,value:ak}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:h,props:{href:D},children:[{type:a,value:al}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:h,props:{href:D},children:[{type:a,value:am}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:h,props:{href:D},children:[{type:a,value:an}]}]},{type:a,value:c}]},{type:a,value:c}]}]},dir:"\u002Farticles",path:"\u002Farticles\u002F2022-11-22-tentang-stash-di-git-menguasai-git-part-2",extension:".md",createdAt:N,updatedAt:N},articles:[{slug:"2023-02-21-mengubah-dan-memperbarui-git-commit-menguasai-git-part-6",description:"Git merupakan salah satu tools version control yang paling populer digunakan oleh developer di seluruh dunia. Dalam penggunaannya, developer seringkali melakukan commit terlebih dahulu untuk menyimpan perubahan code yang dilakukan. Namun, terkadang ada kesalahan atau kekurangan yang ditemukan setelah melakukan commit. Untungnya, Git menyediakan cara untuk mengubah dan memperbarui commit yang telah dilakukan. Yuk, kita simak cara-cara mengubah dan memperbarui git commit dengan mudah dan cepat.",title:"Mengubah dan memperbarui git commit (Menguasai Git part 6)",date:"2023-02-21T05:06:07.348Z",tags:[G,H,I]},{slug:"2023-02-11-git-log-untuk-melihat-perubahan-terbaru-dalam-jangka-waktu-tertentu-menguasai-git-part-4",description:"Git log! Git log adalah fitur yang sangat berguna dalam Git yang membantu kita melihat perubahan yang terjadi dalam jangka waktu tertentu.",title:"Git log untuk melihat perubahan terbaru dalam jangka waktu tertentu (Menguasai Git part 5)",date:"2023-02-11T05:31:53.271Z",tags:[G,H,I]},{slug:"2023-02-10-membuat-gitignore-menguasai-git-part-3",description:"Menyederhanakan Proses Git dengan .gitignore: Cara Mudah untuk Mengelola File yang Tidak Perlu",title:"Membuat .gitignore (Menguasai Git part 4)",date:"2023-02-10T05:07:10.929Z",tags:[G,H,I]}],disqusConfig:{title:"blog-mipdevp-Tentang 'stash' di git (Menguasai Git part 2)",identifier:"blog-mipdevp-2022-11-22-tentang-stash-di-git-menguasai-git-part-2"},prev:{slug:"2022-10-23-panduan-lengkap-pemula-untuk-memulai-git-menguasai-git-part-1",title:"Panduan Lengkap Pemula untuk Memulai Git (Menguasai Git part 1)",date:"2022-10-23T05:32:26.438Z",isactive:P},next:{slug:"2022-11-27-bagaimana-cara-membatalkan-git-pull-menguasai-git-part-3",title:"Bagaimana cara membatalkan git pull (Menguasai Git part 3)",date:"2022-11-27T07:54:41.707Z",isactive:P},networks:[{network:"facebook",icon:[O,"facebook-f"],color:"#1877f2"},{network:aB,icon:[O,aB],color:"#1da1f2"},{network:"telegram",icon:[O,"telegram-plane"],color:"#0088cc"},{network:aC,icon:[O,aC],color:"#25d366"}],sharing:{url:"https:\u002F\u002Fmipdevp.com\u002Fblog\u002Farticles\u002F2022-11-22-tentang-stash-di-git-menguasai-git-part-2",title:B,description:B,quote:B,hashtags:B,twitterUser:"mipdevp"}},"1":{author:{slug:"anonimak",name:aD,title:aD,email:T,shortbio:"Hidup indah bila mencari berkah",authorimage:"\u002Fblog\u002Fimg\u002Fimg_20220908_101559-1-_cleanup.jpg",dir:"\u002Fauthors",path:"\u002Fauthors\u002Fanonimak",extension:".json",createdAt:N,updatedAt:N}}},mutations:[]}}("text","element","\n","code","span","li","line","a","p","em","color: #ABB2BF","stash","div","nuxt-content-highlight","pre","shiki","background-color: #282c34","true",-1,"icon","icon-link","nofollow","noopener","noreferrer","_blank",3,"h3","","ul","#","git stash"," atau ","git","github","vcs","Menguasai Git 7 seri","Tentang 'stash' di git","git stash list",":","2023-08-22T14:36:59.270Z","fab",true,"strong","work tree","git stash push","sanonimak@gmail.com","menguasai-git-7-seri","tentang-stash-di-git","stash-list--show","Stash List & Show","mengembalikan-stash-git-dengan-apply-atau-pop","Mengembalikan stash git dengan apply atau pop","menjadikan-stash-menjadi-branch","Menjadikan stash menjadi branch","push-stash","Push stash","menghapus-stash","Menghapus stash","menguasai-git-7-seri-1","blockquote","https:\u002F\u002Fmipdevp.com\u002Fblog\u002Farticles\u002F2022-10-23-panduan-lengkap-pemula-untuk-memulai-git-menguasai-git-part-1\u002F","Panduan Lengkap Pemula untuk Memulai Git","https:\u002F\u002Fmipdevp.com\u002Fblog\u002Farticles\u002F2022-11-27-bagaimana-cara-membatalkan-git-pull-menguasai-git-part-3\u002F","Bagaimana cara membatalkan git pull","Membuat .gitignore","Git log untuk melihat perubahan terbaru dalam jangka waktu tertentu","Mengubah dan memperbarui git commit","Overwrite local change dengan 'git pull'","git pull","git stash show","git stash apply","git stash pop","git stash clear","git stash drop","-p","-u","--include-untracked","git show","apply","pop",", mis. ","twitter","whatsapp","Anonimak")));