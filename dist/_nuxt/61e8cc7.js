(window.webpackJsonp=window.webpackJsonp||[]).push([[17,3,4,9,11],{348:function(t,e,r){"use strict";r.r(e);var l={props:{slug:{default:"#"}}},n=r(18),component=Object(n.a)(l,(function(){var t=this,e=t._self._c;return e("article",{staticClass:"relative group"},[e("div",{staticClass:"absolute -inset-y-2.5 -inset-x-4 md:-inset-y-4 md:-inset-x-6 rounded-2xl bg-slate-100/100 dark:bg-slate-800/50 group-hover:bg-slate-200 dark:group-hover:bg-slate-800"}),t._v(" "),e("nuxt-link",{attrs:{to:{name:"articles-slug",params:{slug:t.slug}}}},[e("div",{staticClass:"relative"},[e("h3",{staticClass:"text-xl font-semibold tracking-tight text-slate-600 group-hover:text-teal-800 dark:text-teal-800 dark:group-hover:text-teal-600 pt-8 lg:pt-0 uppercase"},[t._t("title")],2),t._v(" "),e("div",{staticClass:"flex py-2"},[t._t("tag-field")],2),t._v(" "),e("div",{staticClass:"mt-2 mb-4 prose prose-slate prose-a:relative prose-a:z-10 dark:prose-dark line-clamp-2 dark:group-hover:text-slate-500"},[e("p",[t._t("description")],2)]),t._v(" "),e("dl",{staticClass:"absolute left-0 top-0 lg:left-auto lg:right-full lg:mr-[calc(6.5rem+1px)]"},[e("dt",{staticClass:"sr-only"},[t._v("Date")]),t._v(" "),e("dd",{staticClass:"whitespace-nowrap text-sm leading-6 dark:text-slate-400"},[e("time",{attrs:{datetime:"2022-09-09T16:24:00.000Z"}},[t._t("publish-date")],2)])])])])],1)}),[],!1,null,null,null);e.default=component.exports},349:function(t,e,r){"use strict";r.r(e);r(35),r(151);var l={props:{value:{type:String,default:""}},data:function(){return{search:this.value}},watch:{search:function(t){this.$emit("input",t)}}},n=r(18),component=Object(n.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"relative max-w-lg"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100",attrs:{"aria-label":"Search articles",type:"text",placeholder:"Search articles"},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}}),e("svg",{staticClass:"absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"}})])])}),[],!1,null,null,null);e.default=component.exports},350:function(t,e,r){"use strict";r.r(e);r(21),r(47);var l={props:["article"]},n=r(18),component=Object(n.a)(l,(function(){var t=this,e=t._self._c;return e("article",{staticClass:"space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0"},[e("dl",[e("dt",{staticClass:"sr-only"},[t._v("Published on")]),t._v(" "),e("dd",{staticClass:"text-base font-medium leading-6 text-gray-500 dark:text-gray-400"},[e("time",{attrs:{datetime:"2019-10-11T00:00:00.000Z"}},[t._v(t._s(t.$dayjs(t.article.date).format("DD MMMM, YYYY")))])])]),t._v(" "),e("div",{staticClass:"space-y-3 xl:col-span-3"},[e("div",[e("h3",{staticClass:"text-2xl font-bold leading-8 tracking-tight uppercase"},[e("nuxt-link",{staticClass:"text-gray-900 dark:text-gray-100 dark:hover:text-gray-400",attrs:{to:{name:"articles-slug",params:{slug:t.article.slug}}}},[t._v(t._s(t.article.title))])],1),t._v(" "),t.article.tags?e("div",{staticClass:"flex flex-wrap"},t._l(t.article.tags,(function(r,l){return e("nuxt-link",{key:l,staticClass:"mr-3 text-sm font-medium lowercase text-teal-800 hover:text-primary-600 dark:hover:text-teal-500 dark:text-teal-700",attrs:{to:{name:"tags-slug",params:{slug:r}}}},[t._v(t._s(r))])})),1):t._e()]),t._v(" "),e("div",{staticClass:"prose max-w-none text-gray-500 dark:text-gray-400"},[t._v("\n      "+t._s(t.article.description)+"\n    ")])])])}),[],!1,null,null,null);e.default=component.exports},353:function(t,e,r){"use strict";r.r(e);r(48);var l={props:["prevPage","nextPage","pageNo","urlPrefix"],computed:{prevLink:function(){return 1===this.pageNo?this.urlPrefix:"".concat(this.urlPrefix,"/").concat(this.pageNo-1)}}},n=r(18),component=Object(n.a)(l,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"flex justify-center mt-4 space-x-2",attrs:{id:"prev-next"}},[t.prevPage?e("nuxt-link",{staticClass:"py-2 px-4 bg-white text-gray-700 border border-gray-200 font-medium rounded hover:bg-gray-200 dark:bg-slate-900 dark:hover:bg-slate-800 dark:text-gray-400 dark:hover:text-gray-300 dark:border-gray-500 dark:hover:border-gray-400",attrs:{to:t.prevLink}},[t._v("\n    Prev page\n  ")]):t._e(),t._v(" "),t.nextPage?e("nuxt-link",{staticClass:"py-2 px-4 bg-white text-gray-700 border border-gray-200 font-medium rounded hover:bg-gray-200 dark:bg-slate-900 dark:hover:bg-slate-800 dark:text-gray-400 dark:hover:text-gray-300 dark:border-gray-500 dark:hover:border-gray-400",attrs:{to:"".concat(t.urlPrefix,"/").concat(t.pageNo+1)}},[t._v("\n    Next page\n  ")]):t._e()],1)}),[],!1,null,null,null);e.default=component.exports},376:function(t,e,r){"use strict";r.r(e);r(35),r(151);var l=r(8),n=(r(42),{components:{CardArticleLarge:r(348).default},asyncData:function(t){return Object(l.a)(regeneratorRuntime.mark((function e(){var r,l,n,o,c,d,x;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,l=t.store,n=t.route,o=parseInt(n.params.number),c=l.state.settings.blogs.front_limit,e.next=5,r("articles").only(["title","slug","date","description","tags"]).where({isactive:{$ne:!1}}).limit(c).skip(c*(o-1)).sortBy("date","desc").fetch();case 5:if((d=e.sent).length){e.next=8;break}return e.abrupt("return",error({statusCode:404,message:"No articles found!"}));case 8:return x=d.length===c,e.abrupt("return",{nextPage:x,articles:d,pageNo:o});case 10:case"end":return e.stop()}}),e)})))()},data:function(){return{search:""}},watch:{search:function(t){var e=this;return Object(l.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t||e.$router.push("/articles"),r.next=3,e.$content("articles").only(["title","slug","date","description","tags"]).sortBy(["title","slug","date","description","tags"]).where({isactive:{$ne:!1}}).limit(10).search(t).fetch();case 3:e.articles=r.sent;case 4:case"end":return r.stop()}}),r)})))()}}}),o=r(18),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("main",{staticClass:"pb-28 sm:px-6 md:px-8 xl:px-12 lg:max-w-7xl"},[e("div",{staticClass:"divide-y divide-gray-200 dark:divide-gray-600"},[e("div",{staticClass:"space-y-2 md:space-y-5 py-8 lg:pt-16"},[e("h1",{staticClass:"text-4xl space-y-2 pb-8 font-extrabold leading-9 tracking-tight text-gray-900 dark:text-teal-700 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14"},[t._v("\n        Articles\n      ")]),t._v(" "),e("input-search",{model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),t._v(" "),e("ul",t._l(t.articles,(function(article){return e("li",{key:article.slug,staticClass:"py-4"},[e("card-article",{attrs:{article:article}})],1)})),0)]),t._v(" "),t.search?t._e():e("Pagination",{attrs:{prevPage:t.pageNo>1,nextPage:t.nextPage,pageNo:t.pageNo,urlPrefix:"/articles/all"}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{InputSearch:r(349).default,CardArticle:r(350).default,Pagination:r(353).default})}}]);