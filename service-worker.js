/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "70d0dbbfdb22348566220ea90f1e25fd"
  },
  {
    "url": "article/ai/aiops调研.html",
    "revision": "a930b08a975da5c3002d387b49271522"
  },
  {
    "url": "article/ai/index.html",
    "revision": "d1287c9408c1bbc154851e9837928def"
  },
  {
    "url": "article/gostudy/studygoday1.html",
    "revision": "7341accf0f0bebee01fe7b589dbdd8fa"
  },
  {
    "url": "article/gostudy/studygoday2.html",
    "revision": "2ca9c2579ba93ca6b3103770d01e7c01"
  },
  {
    "url": "article/gostudy/studygoday3.html",
    "revision": "c84ecb1db0d233c8aae9efee35bf59e1"
  },
  {
    "url": "article/gostudy/studygoday4.html",
    "revision": "a78138dc4325921c1f26d628dc34a76f"
  },
  {
    "url": "article/gostudy/studygoday5.html",
    "revision": "a6e146ebc86e897011dd54213afc6e93"
  },
  {
    "url": "article/sre/troubleshooting.html",
    "revision": "ec2c2cb2be78a83fe4b6da804d32ba6a"
  },
  {
    "url": "article/toolplatform/blog.html",
    "revision": "2b880595a8f666e3267cde13c8b6737e"
  },
  {
    "url": "article/toolplatform/go-dev-ide.html",
    "revision": "57d3901204ed9049a0104d428963ac25"
  },
  {
    "url": "article/toolplatform/vim-go-ide.html",
    "revision": "f183676586ac30312cfb9b29264080ab"
  },
  {
    "url": "article/toolplatform/vscode-fe.html",
    "revision": "ce6bfdcd6db02e9d097bc45713e5e03b"
  },
  {
    "url": "article/vue/bianque.html",
    "revision": "d067fe86783f0e25df3c28eb449d530c"
  },
  {
    "url": "article/vue/elementuiskill.html",
    "revision": "ebc233c9b984a82ddc456cbcd1e7e347"
  },
  {
    "url": "article/vue/studyvueday1.html",
    "revision": "6051d569d204b5696363c9acd669407f"
  },
  {
    "url": "article/vue/studyvueday10.html",
    "revision": "15adb3f295de7811ccf9994f51203d6e"
  },
  {
    "url": "article/vue/studyvueday11.html",
    "revision": "e916588ed3052503e175acc66c92b479"
  },
  {
    "url": "article/vue/studyvueday12.html",
    "revision": "21352af3dd064e7491fdb0453aa351e7"
  },
  {
    "url": "article/vue/studyvueday13.html",
    "revision": "3a2033b9752e7b39af95ea36ef9830d5"
  },
  {
    "url": "article/vue/studyvueday14.html",
    "revision": "b0c3a03c9eed8bf405b269281dd8b16d"
  },
  {
    "url": "article/vue/studyvueday15.html",
    "revision": "7fd4b3311726b16878065673ed778290"
  },
  {
    "url": "article/vue/studyvueday2.html",
    "revision": "efc888e3f7e96869775995a04dd63c9f"
  },
  {
    "url": "article/vue/studyvueday3.html",
    "revision": "414e7e2062af77a561769a59c309ed25"
  },
  {
    "url": "article/vue/studyvueday4.html",
    "revision": "74d576fd1f0e0f5d9f8109f775199177"
  },
  {
    "url": "article/vue/studyvueday5.html",
    "revision": "e53dda7a412843a928df2e1efc292305"
  },
  {
    "url": "article/vue/studyvueday6.html",
    "revision": "8de54b7f2541dbec029b60a0df413081"
  },
  {
    "url": "article/vue/studyvueday7.html",
    "revision": "b2f805bba22ae5988b2686e25ec088b7"
  },
  {
    "url": "article/vue/studyvueday8.html",
    "revision": "931310757e4c259f811db6606cadc862"
  },
  {
    "url": "article/vue/studyvueday9.html",
    "revision": "ce22f91181630907a09a92c2b3c092cb"
  },
  {
    "url": "article/vue/supplement.html",
    "revision": "9a71c605c4c7338dc1c5f0e03dcc8520"
  },
  {
    "url": "article/vue/vueskill.html",
    "revision": "dc12ba8175c3e82255aba929337e0b2b"
  },
  {
    "url": "assets/css/0.styles.a2f6d36e.css",
    "revision": "4dea3e6b931b46be21e1e601efa44867"
  },
  {
    "url": "assets/fonts/iconfont.938fa69e.woff",
    "revision": "938fa69ea89bccb0f20d643cc5f07cbe"
  },
  {
    "url": "assets/fonts/iconfont.ecabaf00.ttf",
    "revision": "ecabaf00c2c5be9907d524bb21a0f0dc"
  },
  {
    "url": "assets/icon/android-chrome-192x192.png",
    "revision": "4d7b66f472ad15332d3d08ebeff86daf"
  },
  {
    "url": "assets/icon/android-chrome-384x384.png",
    "revision": "fee165e7b81d8bf29d0877c04faecbb3"
  },
  {
    "url": "assets/icon/android-chrome-512x512.png",
    "revision": "4977047770b96a92df4f4fbbc5126a8b"
  },
  {
    "url": "assets/icon/apple-touch-icon.png",
    "revision": "3078644ef87e5ba421de5c9096b47eb0"
  },
  {
    "url": "assets/icon/favicon-16x16.png",
    "revision": "a941bda652832156a88d9836025043d6"
  },
  {
    "url": "assets/icon/favicon-32x32.png",
    "revision": "d7a44e84a3f87825ecc4fe59eb397514"
  },
  {
    "url": "assets/icon/mstile-150x150_bak.png",
    "revision": "d0dc44bfc0557bae7d2a44261e47558e"
  },
  {
    "url": "assets/icon/mstile-150x150.png",
    "revision": "4b172a9cb27170d526d7517f81466d62"
  },
  {
    "url": "assets/icon/mstile-225x225.png",
    "revision": "77481062a636a741087d569b90245fcf"
  },
  {
    "url": "assets/icon/safari-pinned-tab.svg",
    "revision": "3438fc2d646d9d1cc9f95bb0b2137ff9"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/img/claw.f886b8d5.svg",
    "revision": "f886b8d5021c8af029e2cd4dea609bcc"
  },
  {
    "url": "assets/img/iconfont.117d8006.svg",
    "revision": "117d8006a3c478fbc8c4ce04a36ddb5a"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/img/sakura.5e4a2cfb.png",
    "revision": "5e4a2cfbc3aae83420146d71ee06ba17"
  },
  {
    "url": "assets/img/search.237d6f6a.svg",
    "revision": "237d6f6a3fe211d00a61e871a263e9fe"
  },
  {
    "url": "assets/js/1.807d4df7.js",
    "revision": "57946833a0f94a75e5a1528453f2151c"
  },
  {
    "url": "assets/js/10.f8c38d70.js",
    "revision": "9ea3ca9ff43022746bed2502abb81c55"
  },
  {
    "url": "assets/js/11.3bf8ec0c.js",
    "revision": "862e456dcfa36f34dfd147ba0edcbfd1"
  },
  {
    "url": "assets/js/12.8d314908.js",
    "revision": "706a7b1411a498fc88a2cfafa4b4031b"
  },
  {
    "url": "assets/js/13.539ad48f.js",
    "revision": "ce48e262cac0d4c6ef0b17fc3bfdcac2"
  },
  {
    "url": "assets/js/14.a30813f1.js",
    "revision": "e342408d1ef81578913fe75eebe9d452"
  },
  {
    "url": "assets/js/15.ce60349b.js",
    "revision": "6c76fa0009d22f1c715539786950149b"
  },
  {
    "url": "assets/js/16.a1bb5665.js",
    "revision": "6c7cc346bce1b7006b604b5dfbbbbc8c"
  },
  {
    "url": "assets/js/17.6d3166b2.js",
    "revision": "4f2650fd6086592cced3e52abe423e12"
  },
  {
    "url": "assets/js/18.64d34d52.js",
    "revision": "4ee8598d521a88c997e49b79143f45cd"
  },
  {
    "url": "assets/js/19.f83ba1c8.js",
    "revision": "1872a2a6c220c0c3ec00cc45ab4b1fc3"
  },
  {
    "url": "assets/js/20.72d8d5c1.js",
    "revision": "ebd2e87831a907529b8d30e71c5d7074"
  },
  {
    "url": "assets/js/21.e8a448ff.js",
    "revision": "1ce0c5a860b421e9907c1e06b9301dc9"
  },
  {
    "url": "assets/js/22.5f38608b.js",
    "revision": "b42e034058307c5822ddbaf73e9793af"
  },
  {
    "url": "assets/js/23.76d928aa.js",
    "revision": "8110d9e4427feb2f502395f1f7974dda"
  },
  {
    "url": "assets/js/24.0d99c688.js",
    "revision": "b6edc734702832bbd0b6eb4a9e547dfd"
  },
  {
    "url": "assets/js/25.228e8c90.js",
    "revision": "1d30c23a5a7ca6fb677e4b56457f8d7b"
  },
  {
    "url": "assets/js/26.15f5f77c.js",
    "revision": "0b94ba1f27e3ba7035cd2e31720e04ce"
  },
  {
    "url": "assets/js/27.261c57c1.js",
    "revision": "ab15c54deaf7dd624a9316dd8f70929c"
  },
  {
    "url": "assets/js/28.2d96e58e.js",
    "revision": "cf2a06e67947f28fce5c27c7e5768ab7"
  },
  {
    "url": "assets/js/29.a8251679.js",
    "revision": "49206fda2fd6680e2881a2278d5c4db5"
  },
  {
    "url": "assets/js/3.d21cc566.js",
    "revision": "3a73abf458e27e3290103ccd6673ed30"
  },
  {
    "url": "assets/js/30.b3bf585c.js",
    "revision": "60501ab3181a01526552b687349da18d"
  },
  {
    "url": "assets/js/31.359f8654.js",
    "revision": "dcaf474aaa392f4c4fcaa272de00362c"
  },
  {
    "url": "assets/js/32.fe9f750c.js",
    "revision": "0358aeca14e545b2f2744f38ab3e5920"
  },
  {
    "url": "assets/js/33.84124d91.js",
    "revision": "557515ee711f1387e10e2365909f3642"
  },
  {
    "url": "assets/js/34.18d32599.js",
    "revision": "a36b7331d4ea489d7276b08f383ca7d0"
  },
  {
    "url": "assets/js/35.66533356.js",
    "revision": "d0644ec9aa48eaec6ddff1480a16e118"
  },
  {
    "url": "assets/js/36.fc960d86.js",
    "revision": "0e48568b8013eb81e57674f9fba2e2a0"
  },
  {
    "url": "assets/js/37.5d8f4343.js",
    "revision": "e59ec53bde8a60b98fa63bb955ea4b31"
  },
  {
    "url": "assets/js/38.7ba3f21c.js",
    "revision": "02fb2a0ae84f8e815be268d3359a032e"
  },
  {
    "url": "assets/js/39.af335331.js",
    "revision": "9e0c57474336bb935d0656fc2b899121"
  },
  {
    "url": "assets/js/4.5c65e49a.js",
    "revision": "660102d2ea3195c28b080cc91afa4155"
  },
  {
    "url": "assets/js/40.1345403c.js",
    "revision": "f228843565df95866f5bf420b23270c0"
  },
  {
    "url": "assets/js/41.738118f4.js",
    "revision": "d8505a64b4cfc529b807a2b84d985ec5"
  },
  {
    "url": "assets/js/42.df003207.js",
    "revision": "40f8f1e125928d4b05814597aad3b880"
  },
  {
    "url": "assets/js/43.74a87565.js",
    "revision": "df5d3798f339944f72fac8d69307779a"
  },
  {
    "url": "assets/js/5.24fbdf1e.js",
    "revision": "e498a88463234603b62571c146cb040c"
  },
  {
    "url": "assets/js/6.c877502a.js",
    "revision": "ea671886f13e1fc451c644927110369c"
  },
  {
    "url": "assets/js/7.f17ebff6.js",
    "revision": "daf37b7170b6ce8028069c218db6b9df"
  },
  {
    "url": "assets/js/8.3e606a82.js",
    "revision": "42cc27321697f5b9e71074406c6ea104"
  },
  {
    "url": "assets/js/9.50a6a573.js",
    "revision": "e19fb485f04599598fdd672429102ac7"
  },
  {
    "url": "assets/js/app.c516a478.js",
    "revision": "4b6bddd280a8cbe8006299ec8ffc6ad6"
  },
  {
    "url": "assets/js/autopush-baidu.js",
    "revision": "a93c9d4b78a68a0c5b0ab4f8803ce6ac"
  },
  {
    "url": "assets/js/dist/seo-autopush.dev.js",
    "revision": "c72d3ccdc563cea2d5f56a19f1ea540a"
  },
  {
    "url": "assets/js/dist/seo.dev.js",
    "revision": "8aec7c9dfd1f8edfecc6a3f977841458"
  },
  {
    "url": "assets/js/plugins.js",
    "revision": "31acb8c38f60fd728a74542a62565056"
  },
  {
    "url": "assets/js/seo-autopush.js",
    "revision": "8f7d3a375f70d6b7649749d274c26689"
  },
  {
    "url": "author.jpeg",
    "revision": "f41c72c1057369109bc7b13556f085b0"
  },
  {
    "url": "bgm/林一.jpg",
    "revision": "44f2f28f78eb9cbd5d350a6b2f56502d"
  },
  {
    "url": "categories/go/index.html",
    "revision": "cdb754060f1b3a31ad1fdd113e51fb17"
  },
  {
    "url": "categories/index.html",
    "revision": "a02610334d851f8c8aa734b1a8f3be3e"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "f234a00f20258b47250060f60460a5f9"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "e59df7033969c7742edfc4fbf6c5eaa1"
  },
  {
    "url": "categories/工具/平台/index.html",
    "revision": "037fa4ba697cc89bc3b369d832d9010d"
  },
  {
    "url": "categories/运维/index.html",
    "revision": "f8753b47e470251449ca7742fcee40fa"
  },
  {
    "url": "index.html",
    "revision": "224fd45229d5fdb551475a563ccda5cc"
  },
  {
    "url": "index.js",
    "revision": "9c615a5b221d257bc16dacc80684222f"
  },
  {
    "url": "live2d/hibiki/assets/moc/hibiki.2048/texture_00.png",
    "revision": "730252369524e7a1c21308cb84acd465"
  },
  {
    "url": "sw.js",
    "revision": "e63f3349e5944a0140276c345df420f0"
  },
  {
    "url": "tag/elementUI/index.html",
    "revision": "d85324b60368066db5233499d54f4b52"
  },
  {
    "url": "tag/github/index.html",
    "revision": "8c0da62f3ace2fc548c19e93a615a220"
  },
  {
    "url": "tag/go/index.html",
    "revision": "4894d41ea43d2cba0aec3987149e24ea"
  },
  {
    "url": "tag/IDE/index.html",
    "revision": "605c4599faaa851c303188b39e0c475b"
  },
  {
    "url": "tag/index.html",
    "revision": "cec4cca42f0bc5b9ce75b117cae5217a"
  },
  {
    "url": "tag/SRE/index.html",
    "revision": "cc03270b879fc8827fd4303d4c21ed31"
  },
  {
    "url": "tag/vim/index.html",
    "revision": "54b70e09142c88832dcd05cd90f4b8d5"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "fa25d1f9af6becd37058abd72fe99cda"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "007b40fb24d33690a49a78aecb61cdc4"
  },
  {
    "url": "tag/vue/page/2/index.html",
    "revision": "4b4b67a949a5830048597265f5d6f39a"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "b4c611493ad5173f7f3df24ed0e83542"
  },
  {
    "url": "tag/前端/index.html",
    "revision": "97f11d17680056688fddb1b0032f9c37"
  },
  {
    "url": "tag/博客/index.html",
    "revision": "0692fb5d2a0eaab01bae9d5f561b1d7b"
  },
  {
    "url": "tag/学习提升/index.html",
    "revision": "de69563915c497370661c5aea165c412"
  },
  {
    "url": "tag/学习提升/page/2/index.html",
    "revision": "3910209b2610fa07d8235428f6819a20"
  },
  {
    "url": "tag/学习提升/page/3/index.html",
    "revision": "112e32c612ea07c112b3bf5f2dd2b067"
  },
  {
    "url": "tag/异常处理/index.html",
    "revision": "91bb2c584470447a9ad5a4e974d04f74"
  },
  {
    "url": "tag/异常检测/index.html",
    "revision": "1f91b66281b35149415d78127155f75c"
  },
  {
    "url": "tag/问题排查/index.html",
    "revision": "abc289a664b34020fe9a83651f893194"
  },
  {
    "url": "timeline/index.html",
    "revision": "640c7720e32476c7b8703e6289f8a364"
  },
  {
    "url": "加菲猫.jpeg",
    "revision": "92f7f5703a723299b2ba4a7f37ba1ea8"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
