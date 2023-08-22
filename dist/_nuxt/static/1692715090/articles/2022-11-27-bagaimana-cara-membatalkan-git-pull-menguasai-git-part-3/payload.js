__NUXT_JSONP__("/articles/2022-11-27-bagaimana-cara-membatalkan-git-pull-menguasai-git-part-3", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad){return {data:[{}],fetch:{"0":{article:{slug:"2022-11-27-bagaimana-cara-membatalkan-git-pull-menguasai-git-part-3",description:"Cara membatalkan git pull, pengenalan git reset dan cara penggunaannya.",title:"Bagaimana cara membatalkan git pull (Menguasai Git part 3)",author:L,date:"2022-11-27T07:54:41.707Z",isactive:E,tags:[r,s,t],toc:[{id:M,depth:N,text:u},{id:O,depth:2,text:v},{id:P,depth:N,text:u}],body:{type:"root",children:[{type:b,tag:i,props:{},children:[{type:b,tag:"img",props:{alt:o,src:"https:\u002F\u002Fgit-scm.com\u002Fimages\u002Flogos\u002Fdownloads\u002FGit-Logo-2Color.png"},children:[]}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:"Hai sobat tutorseekers kali ini "},{type:b,tag:e,props:{href:"https:\u002F\u002Fmipdevp.com",rel:[j,k,l],target:m},children:[{type:a,value:"MIPDEVP"}]},{type:a,value:" akan membahas tutorial mengenai "},{type:b,tag:F,props:{},children:[{type:a,value:"GIT"}]},{type:a,value:" dan akan dikemas dalam 7 seri yaitu:"}]},{type:a,value:c},{type:b,tag:Q,props:{},children:[{type:a,value:c},{type:b,tag:R,props:{id:M},children:[{type:b,tag:e,props:{href:"#menguasai-git-7-seri",ariaHidden:G,tabIndex:H},children:[{type:b,tag:d,props:{className:[I,J]},children:[]}]},{type:a,value:u}]},{type:a,value:c},{type:b,tag:S,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:e,props:{href:T,rel:[j,k,l],target:m},children:[{type:a,value:U}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:e,props:{href:V,rel:[j,k,l],target:m},children:[{type:a,value:W}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:F,props:{},children:[{type:a,value:v}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:e,props:{href:"https:\u002F\u002Fmipdevp.com\u002Fblog\u002Farticles\u002F2023-02-10-membuat-gitignore-menguasai-git-part-3",rel:[j,k,l],target:m},children:[{type:a,value:X}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:e,props:{href:"https:\u002F\u002Fmipdevp.com\u002Fblog\u002Farticles\u002F2023-02-11-git-log-untuk-melihat-perubahan-terbaru-dalam-jangka-waktu-tertentu-menguasai-git-part-4",rel:[j,k,l],target:m},children:[{type:a,value:Y}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:e,props:{href:"https:\u002F\u002Fmipdevp.com\u002Fblog\u002Farticles\u002F2023-02-21-mengubah-dan-memperbarui-git-commit-menguasai-git-part-6",rel:[j,k,l],target:m},children:[{type:a,value:Z}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:e,props:{href:p},children:[{type:a,value:_}]}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:"h2",props:{id:O},children:[{type:b,tag:e,props:{href:"#bagaimana-cara-membatalkan-git-pull",ariaHidden:G,tabIndex:H},children:[{type:b,tag:d,props:{className:[I,J]},children:[]}]},{type:a,value:v}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:"Terkadang dalam mengerjakan project kita menjalankan "},{type:b,tag:h,props:{},children:[{type:a,value:$}]},{type:a,value:" untuk menyamakan versi kode pada remote repository. Namun bagaimana ternyata kita secara tanpa sadar melakukan itu dan menyebabkan semua kode yang ada pada komputer kita telah ditimpa dengan apa pun yang ada di remote repositori. Saat seperti ini jangan panik terlebih dahulu, karena untungnya ada beberapa cara untuk mengembalikan kode ke keadaan semula dan membatalkan "},{type:b,tag:h,props:{},children:[{type:a,value:$}]},{type:a,value:aa}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:"Hal pertama yang pertama, buat "},{type:b,tag:q,props:{},children:[{type:a,value:w}]},{type:a,value:" project untuk menjaga-jaga semisal keadaan menjadi lebih buruk. Perhatikan juga bahwa perintah ini akan menyebabkan kehilangan semua perubahan yang belum dikomit - jadi "},{type:b,tag:q,props:{},children:[{type:a,value:w}]},{type:a,value:" tersebut dapat membantu sebelum melanjutkan. Setidaknya, Kita akan memiliki versi yang Anda miliki saat ini. Setelah Kita melakukan "},{type:b,tag:q,props:{},children:[{type:a,value:w}]},{type:a,value:", jika kita ingin mendapatkan daftar semua riwayat komit. Kita dapat melakukannya dengan menjalankan "},{type:b,tag:h,props:{},children:[{type:a,value:K}]},{type:a,value:":"}]},{type:a,value:c},{type:b,tag:x,props:{className:[y]},children:[{type:b,tag:z,props:{className:[A],style:B},children:[{type:b,tag:h,props:{},children:[{type:b,tag:d,props:{className:[g]},children:[{type:b,tag:d,props:{style:n},children:[{type:a,value:K}]}]},{type:a,value:c},{type:b,tag:d,props:{className:[g]},children:[]}]}]}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:"Akan tampil seperti ini:"}]},{type:a,value:c},{type:b,tag:x,props:{className:[y]},children:[{type:b,tag:z,props:{className:[A],style:B},children:[{type:b,tag:h,props:{},children:[{type:b,tag:d,props:{className:[g]},children:[{type:b,tag:d,props:{style:n},children:[{type:a,value:"3d44a4b (HEAD -\u003E master, origin\u002Fmaster) HEAD@{0}: commit: feat:search barang"}]}]},{type:a,value:c},{type:b,tag:d,props:{className:[g]},children:[{type:b,tag:d,props:{style:n},children:[{type:a,value:"b1168af HEAD@{1}: commit: Fix: Bug error login"}]}]},{type:a,value:c},{type:b,tag:d,props:{className:[g]},children:[{type:b,tag:d,props:{style:n},children:[{type:a,value:"a12af2b HEAD@{2}: commit: Feat:Lupa password"}]}]},{type:a,value:c},{type:b,tag:d,props:{className:[g]},children:[]}]}]}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:"Pilih versi yang ingin kita kembalikan. Misalnya, jika kita ingin kembali ke 'Feat:Lupa password', ambil ID nya "},{type:b,tag:h,props:{},children:[{type:a,value:"a12af2b"}]},{type:a,value:". Selanjutnya, jalankan perintah berikut untuk mengembalikan repositori ke versi tersebut:"}]},{type:a,value:c},{type:b,tag:x,props:{className:[y]},children:[{type:b,tag:z,props:{className:[A],style:B},children:[{type:b,tag:h,props:{},children:[{type:b,tag:d,props:{className:[g]},children:[{type:b,tag:d,props:{style:n},children:[{type:a,value:"git reset --hard a12af2b"}]}]},{type:a,value:c},{type:b,tag:d,props:{className:[g]},children:[]}]}]}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:"Cukup mudah bukan. Namun ada cara lain yang lebih mudah untuk melakukannya adalah dengan memberikan waktu, seperti "},{type:b,tag:q,props:{},children:[{type:a,value:"back time"}]},{type:a,value:". Jika tidak ingin menjalankan "},{type:b,tag:h,props:{},children:[{type:a,value:K}]},{type:a,value:", dapat menjalankan perintah berikut untuk kembali ke versi repositori seperti 30 menit yang lalu, dengan asumsi branch master. Perhatian! jika kita telah bekerja pada branch tertentu untuk waktu yang lama, ini dapat membuatnya mundur lumayan jauh. Dalam hal ini, kita mungkin lebih baik menggunakan metode sebelumnya - tetapi itu tidak masalah jika kita memiliki "},{type:b,tag:q,props:{},children:[{type:a,value:w}]},{type:a,value:aa}]},{type:a,value:c},{type:b,tag:x,props:{className:[y]},children:[{type:b,tag:z,props:{className:[A],style:B},children:[{type:b,tag:h,props:{},children:[{type:b,tag:d,props:{className:[g]},children:[{type:b,tag:d,props:{style:n},children:[{type:a,value:"git reset --hard master@{"}]},{type:b,tag:d,props:{style:"color: #98C379"},children:[{type:a,value:"\"30 minutes ago\""}]},{type:b,tag:d,props:{style:n},children:[{type:a,value:"}"}]}]},{type:a,value:c},{type:b,tag:d,props:{className:[g]},children:[]}]}]}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:"Sekian dari MIPDEVP, Arigatou!!"}]},{type:a,value:c},{type:b,tag:Q,props:{},children:[{type:a,value:c},{type:b,tag:R,props:{id:P},children:[{type:b,tag:e,props:{href:"#menguasai-git-7-seri-1",ariaHidden:G,tabIndex:H},children:[{type:b,tag:d,props:{className:[I,J]},children:[]}]},{type:a,value:u}]},{type:a,value:c},{type:b,tag:S,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:e,props:{href:T,rel:[j,k,l],target:m},children:[{type:a,value:U}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:e,props:{href:V,rel:[j,k,l],target:m},children:[{type:a,value:W}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:F,props:{},children:[{type:a,value:v}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:e,props:{href:p},children:[{type:a,value:X}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:e,props:{href:p},children:[{type:a,value:Y}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:e,props:{href:p},children:[{type:a,value:Z}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:e,props:{href:p},children:[{type:a,value:_}]}]},{type:a,value:c}]},{type:a,value:c}]}]},dir:"\u002Farticles",path:"\u002Farticles\u002F2022-11-27-bagaimana-cara-membatalkan-git-pull-menguasai-git-part-3",extension:".md",createdAt:C,updatedAt:C},articles:[{slug:"2023-02-21-mengubah-dan-memperbarui-git-commit-menguasai-git-part-6",description:"Git merupakan salah satu tools version control yang paling populer digunakan oleh developer di seluruh dunia. Dalam penggunaannya, developer seringkali melakukan commit terlebih dahulu untuk menyimpan perubahan code yang dilakukan. Namun, terkadang ada kesalahan atau kekurangan yang ditemukan setelah melakukan commit. Untungnya, Git menyediakan cara untuk mengubah dan memperbarui commit yang telah dilakukan. Yuk, kita simak cara-cara mengubah dan memperbarui git commit dengan mudah dan cepat.",title:"Mengubah dan memperbarui git commit (Menguasai Git part 6)",date:"2023-02-21T05:06:07.348Z",tags:[r,s,t]},{slug:"2023-02-11-git-log-untuk-melihat-perubahan-terbaru-dalam-jangka-waktu-tertentu-menguasai-git-part-4",description:"Git log! Git log adalah fitur yang sangat berguna dalam Git yang membantu kita melihat perubahan yang terjadi dalam jangka waktu tertentu.",title:"Git log untuk melihat perubahan terbaru dalam jangka waktu tertentu (Menguasai Git part 5)",date:"2023-02-11T05:31:53.271Z",tags:[r,s,t]},{slug:"2023-02-10-membuat-gitignore-menguasai-git-part-3",description:"Menyederhanakan Proses Git dengan .gitignore: Cara Mudah untuk Mengelola File yang Tidak Perlu",title:"Membuat .gitignore (Menguasai Git part 4)",date:"2023-02-10T05:07:10.929Z",tags:[r,s,t]}],disqusConfig:{title:"blog-mipdevp-Bagaimana cara membatalkan git pull (Menguasai Git part 3)",identifier:"blog-mipdevp-2022-11-27-bagaimana-cara-membatalkan-git-pull-menguasai-git-part-3"},prev:{slug:"2022-11-22-tentang-stash-di-git-menguasai-git-part-2",title:"Tentang 'stash' di git (Menguasai Git part 2)",date:"2022-11-22T07:07:34.639Z",isactive:E},next:{slug:"2022-12-05-10-web-based-tools-css-yang-berguna",title:"10 Web-Based tools CSS yang berguna",date:"2022-12-06T08:35:52.277Z",isactive:E},networks:[{network:"facebook",icon:[D,"facebook-f"],color:"#1877f2"},{network:ab,icon:[D,ab],color:"#1da1f2"},{network:"telegram",icon:[D,"telegram-plane"],color:"#0088cc"},{network:ac,icon:[D,ac],color:"#25d366"}],sharing:{url:"https:\u002F\u002Fmipdevp.com\u002Fblog\u002Farticles\u002F2022-11-27-bagaimana-cara-membatalkan-git-pull-menguasai-git-part-3",title:o,description:o,quote:o,hashtags:o,twitterUser:"mipdevp"}},"1":{author:{slug:"anonimak",name:ad,title:ad,email:L,shortbio:"Hidup indah bila mencari berkah",authorimage:"\u002Fblog\u002Fimg\u002Fimg_20220908_101559-1-_cleanup.jpg",dir:"\u002Fauthors",path:"\u002Fauthors\u002Fanonimak",extension:".json",createdAt:C,updatedAt:C}}},mutations:[]}}("text","element","\n","span","a","li","line","code","p","nofollow","noopener","noreferrer","_blank","color: #ABB2BF","","#","em","git","github","vcs","Menguasai Git 7 seri","Bagaimana cara membatalkan git pull","backup","div","nuxt-content-highlight","pre","shiki","background-color: #282c34","2023-08-22T14:36:59.270Z","fab",true,"strong","true",-1,"icon","icon-link","git reflog","sanonimak@gmail.com","menguasai-git-7-seri",3,"bagaimana-cara-membatalkan-git-pull","menguasai-git-7-seri-1","blockquote","h3","ul","https:\u002F\u002Fmipdevp.com\u002Fblog\u002Farticles\u002F2022-10-23-panduan-lengkap-pemula-untuk-memulai-git-menguasai-git-part-1","Panduan Lengkap Pemula untuk Memulai Git","https:\u002F\u002Fmipdevp.com\u002Fblog\u002Farticles\u002F2022-11-22-tentang-stash-di-git-menguasai-git-part-2\u002F","Tentang 'stash' di git","Membuat .gitignore","Git log untuk melihat perubahan terbaru dalam jangka waktu tertentu","Mengubah dan memperbarui git commit","Overwrite local change dengan 'git pull'","git pull",".","twitter","whatsapp","Anonimak")));