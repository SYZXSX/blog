if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return c[e]||(i=new Promise((async i=>{if("document"in self){const c=document.createElement("script");c.src=e,document.head.appendChild(c),c.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!c[e])throw new Error(`Module ${e} didn’t register its module`);return c[e]}))},i=(i,c)=>{Promise.all(i.map(e)).then((e=>c(1===e.length?e[0]:e)))},c={require:Promise.resolve(i)};self.define=(i,r,s)=>{c[i]||(c[i]=Promise.resolve().then((()=>{let c={};const d={uri:location.origin+i.slice(1)};return Promise.all(r.map((i=>{switch(i){case"exports":return c;case"module":return d;default:return e(i)}}))).then((e=>{const i=s(...e);return c.default||(c.default=i),c}))})))}}define("./service-worker.js",["./workbox-f7715658"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"e71942fcded0ded4d21a53291d7ed817"},{url:"archives/2021/04/index.html",revision:"7c26a93f7e9659f1187142723d1867e8"},{url:"archives/2021/05/index.html",revision:"03bf04a669435cbe2db04043d60fd1ae"},{url:"archives/2021/06/index.html",revision:"3f2c1fb4e4fd240a4aca13e6890595bf"},{url:"archives/2021/index.html",revision:"c359c281c42e45a67e7fa00b264a4218"},{url:"archives/index.html",revision:"77ab5aeec99021bf2d0cbf1a3a63781a"},{url:"baidu_verify_code-fekosjXrBh.html",revision:"fe95e791628a8aadc8a3b806fbe9b179"},{url:"categories/index.html",revision:"eb50fba50e5c21973cde338bffefa43f"},{url:"categories/廿四節氣/index.html",revision:"585077bdf9a09001aa1a23ac46ef2a32"},{url:"categories/難經/index.html",revision:"cdc4c6ae3f4ca2369cee74978066cb3b"},{url:"css/aplayer/APlayer.min.css",revision:"f8fb01a44acc60310049feec7f444121"},{url:"css/aplayer/APlayer.min.js",revision:"8f1017e7a73737e631ff95fa51e4e7d7"},{url:"css/aplayer/music.js",revision:"a6ab50d9baf269ac10012c5cac42b740"},{url:"css/aplayer/musicY - 複製.js",revision:"eac7481ebc4e2741644fcb4377b33864"},{url:"css/aplayer/musicY.js",revision:"369d462dcb8c8130144f6be7d0485030"},{url:"css/custom.css",revision:"f7665eae987524d941df32f4ed6e69a0"},{url:"css/font.css",revision:"7b7e3f26751cfdf7d66f198dccb8b7f9"},{url:"css/index.css",revision:"a3043d5133f9eff1d963feb92474e3b5"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"fonts/GTFS.woff2",revision:"64791ae61866666cf2443df6ef96fc98"},{url:"fonts/TYT.woff2",revision:"466fc3266258f214bbbbd9223f5078c0"},{url:"img/16.png",revision:"45c4eb584f0de76b680a67a8bfb5479e"},{url:"img/32.png",revision:"c979f479ab5cc7d1e7ce747f12a39f87"},{url:"img/algolia.svg",revision:"fd40b88ac5370a5353a50b8175c1f367"},{url:"img/bg.jpg",revision:"1e42d065054f907301d8db9c21c25414"},{url:"img/favicon.png",revision:"a41fd8440356b05f13215495e9f392d2"},{url:"img/jiandang100.jpg",revision:"30c24967ff138bf734e4eecc6f824cf0"},{url:"img/jiazaizhong_z.jpg",revision:"c5b1414f2b2111c44ebd224861a802ff"},{url:"img/jiazaizhong.jpg",revision:"f776502ffdaeb37daac850931f68384f"},{url:"img/link/xiaocailinux.webp",revision:"87d51750c54ec6c80a9e1c8bc08e4fa7"},{url:"img/link/万俟筝.webp",revision:"52161eabccf32d8db24c54bac6127f2b"},{url:"img/link/探纪自然.webp",revision:"942370e0064d2fb603821ed03dacf922"},{url:"img/link/橙织手作.webp",revision:"24de4b15f3d27414974d2b039df57c84"},{url:"img/link/食鉴本草.webp",revision:"7f9e4e9ab8ba5edb3d8e8928eec753a9"},{url:"img/police_beian.png",revision:"b769e8dfde5660239317ed60758dba13"},{url:"img/tm.png",revision:"4b7dbd514e030d719c365723dc72a301"},{url:"img/正.jpg",revision:"356478dea92d00c89303ccd438bd083a"},{url:"index.html",revision:"70e2475db380a882f4910ba2c63037d7"},{url:"js/custom.js",revision:"90b6d648fed2b1d7e79cb8f73bd91114"},{url:"js/main.js",revision:"4d146b5c9244149b254159fb8006e379"},{url:"js/search/algolia.js",revision:"176b8f713bc35bce57c078c34081445a"},{url:"js/search/local-search.js",revision:"0b4eb347d0ccc45feff2fa82d30c84b6"},{url:"js/tw_cn.js",revision:"05cc0d8a2d4506d1c2c9994338548dbe"},{url:"js/utils.js",revision:"d4c52bc44eac1681556d8e0f6b7bd476"},{url:"link/index.html",revision:"9e8693fc3daced972d4fa586e3ba05f6"},{url:"music/98.jpg",revision:"96ef9a6c88a55e3d8d7d3c3ae7c9ec89"},{url:"music/index.html",revision:"6d7d53b89442b44e92f1ee2e8b59311c"},{url:"music/新仙劍.jpg",revision:"424f857bd69fa90392ad4ab5abc880e1"},{url:"music/永恆回憶錄.jpg",revision:"cd18680d0ad0405929b85f75ebf00c35"},{url:"posts/1.html/index.html",revision:"bdcf834055b7865c30730fe5af0a5423"},{url:"posts/2.html/index.html",revision:"53f4eb99ecdc666ab0247880bb09a87e"},{url:"posts/3.html/index.html",revision:"87b4780ce8df9c410c287d6893278832"},{url:"posts/4.html/index.html",revision:"71168fe5cfec90bac1f812c1a308d497"},{url:"posts/5.html/index.html",revision:"d16d0fe25ad39906e2ae68cd21bdb637"},{url:"posts/6.html/index.html",revision:"d8230c07d92d30a41a71b7864c4d8ce8"},{url:"posts/7.html/index.html",revision:"643d528b5f4f2b9ac2e3e11faabdba57"},{url:"posts/clciqpeaj0007i8urbfzh1e7q.html/index.html",revision:"00f8ded4f6bc21c05bc6b7f5b058b8e0"},{url:"tags/index.html",revision:"a8fdd349949e92f2f46f643c118848fb"},{url:"tags/夏至/index.html",revision:"ae500ec981a2299b145fcbf1e67462a0"},{url:"tags/小滿/index.html",revision:"d291c264832e3eb7bc13c8ad6ff06a19"},{url:"tags/廿四節氣/index.html",revision:"cf96f35cd80d343ee8486fb49df3fe27"},{url:"tags/心猿意馬/index.html",revision:"a3b6ec62f9024a0898a11c24dd0196fd"},{url:"tags/瀉南補北/index.html",revision:"03fdc192d37f5725fb0dff7a104e8a19"},{url:"tags/立夏/index.html",revision:"45dbe351f1a3c1cf6fbf04bc5c07af7d"},{url:"tags/芒種/index.html",revision:"6b80399008eaa8f29ea0122aa19f001c"},{url:"tags/西遊記/index.html",revision:"bd7f3d4d586f6ff003b19c6e66c25a9b"},{url:"tags/谷雨/index.html",revision:"de1514228e637fafdecfde8558067f62"},{url:"tags/難經/index.html",revision:"35150b8172df4e07850e9edf58966b42"}],{})}));
//# sourceMappingURL=service-worker.js.map
