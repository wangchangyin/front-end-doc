(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{242:function(t,e,r){t.exports=r.p+"assets/img/068-https.fe496035.png"},243:function(t,e,r){t.exports=r.p+"assets/img/069-https.5d261626.png"},244:function(t,e,r){t.exports=r.p+"assets/img/070-https.f1e79e65.png"},245:function(t,e,r){t.exports=r.p+"assets/img/071-https.e8e7ab9c.png"},246:function(t,e,r){t.exports=r.p+"assets/img/072-https.7868481d.png"},247:function(t,e,r){t.exports=r.p+"assets/img/073-https.7c293a3d.png"},551:function(t,e,r){"use strict";r.r(e);var s=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"table-of-contents"},[r("ul",[r("li",[r("a",{attrs:{href:"#_1-http存在的问题"}},[t._v("1. HTTP存在的问题")])]),r("li",[r("a",{attrs:{href:"#_2-https"}},[t._v("2. HTTPS")])]),r("li",[r("a",{attrs:{href:"#_3-加密"}},[t._v("3. 加密")]),r("ul",[r("li",[r("a",{attrs:{href:"#_3-1-对称加密"}},[t._v("3.1 对称加密")])]),r("li",[r("a",{attrs:{href:"#_3-2-非对称加密"}},[t._v("3.2 非对称加密")])])])]),r("li",[r("a",{attrs:{href:"#_4-https使用对称加密和非对称加密结合"}},[t._v("4. HTTPS使用对称加密和非对称加密结合")])]),r("li",[r("a",{attrs:{href:"#_5-ca-数字证书"}},[t._v("5. CA (数字证书)")])]),r("li",[r("a",{attrs:{href:"#参考资料"}},[t._v("参考资料")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"https是如何保证安全的"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#https是如何保证安全的","aria-hidden":"true"}},[this._v("#")]),this._v(" HTTPS是如何保证安全的")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"_1-http存在的问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-http存在的问题","aria-hidden":"true"}},[this._v("#")]),this._v(" 1. HTTP存在的问题")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ol",[r("li",[r("strong",[t._v("窃听风险")]),t._v("：通信使用明文（不加密），内容可能会被窃听(第三方可能获知通信内容)")]),t._v(" "),r("li",[r("strong",[t._v("冒充风险")]),t._v("：不验证通信方的身份，因此有可能遭遇伪装")]),t._v(" "),r("li",[r("strong",[t._v("篡改风险")]),t._v("：无法证明报文的完整性，所以有可能已遭篡改")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"_2-https"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-https","aria-hidden":"true"}},[this._v("#")]),this._v(" 2. HTTPS")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:r(242),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:r(243),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[this._v("所有的信息都是加密传输的，第三方无法窃听")]),this._v(" "),e("li",[this._v("配备身份验证，防止身份被冒充")]),this._v(" "),e("li",[this._v("具有校验机制，一旦被篡改，通信双方会立刻发现")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"_3-加密"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-加密","aria-hidden":"true"}},[this._v("#")]),this._v(" 3. 加密")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_3-1-对称加密"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-对称加密","aria-hidden":"true"}},[this._v("#")]),this._v(" 3.1 对称加密")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:r(244),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("浏览器发送给服务端 "),e("code",[this._v("client_random")]),this._v(" 和一系列加密方法")]),this._v(" "),e("li",[this._v("服务端发送给浏览器 "),e("code",[this._v("server_random")]),this._v("和加密方法")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[t._v("现有浏览器和服务器有了三个相同的凭证："),r("code",[t._v("client_random")]),t._v("、"),r("code",[t._v("server_random")]),t._v("和加密方法\n用加密方法把 "),r("code",[t._v("client_random")]),t._v("、"),r("code",[t._v("server_random")]),t._v(" 两个随机数混合起来，生成秘钥，这个密钥就是浏览器和服务端通信的暗号。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("存在的问题：第三方可以在中间获取到"),e("code",[this._v("client_random")]),this._v("、"),e("code",[this._v("server_random")]),this._v("和加密方法，由于这个加密方法同时可以解密，所以中间人可以成功对暗号进行解密，拿到数据，很容易就将这种加密方式破解了。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_3-2-非对称加密"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-非对称加密","aria-hidden":"true"}},[this._v("#")]),this._v(" 3.2 非对称加密")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:r(245),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("浏览器发送给服务端 一系列加密方法")]),this._v(" "),e("li",[this._v("服务端发送给浏览器 加密方法以及公钥")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[e("strong",[this._v("非对称加密效率太低")]),this._v("， 这会严重影响加解密的速度，进而影响到用户打开页面的速度。")]),this._v(" "),e("li",[e("strong",[this._v("无法保证服务器发送给浏览器的数据安全")]),this._v("， 服务器的数据只能用私钥进行加密(因为如果它用公钥那么浏览器也没法解密啦)，中间人一旦拿到公钥，那么就可以对服务端传来的数据进行解密了，就这样又被破解了。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"_4-https使用对称加密和非对称加密结合"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-https使用对称加密和非对称加密结合","aria-hidden":"true"}},[this._v("#")]),this._v(" 4. HTTPS使用对称加密和非对称加密结合")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:r(246),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("浏览器向服务器发送client_random和加密方法列表。")]),this._v(" "),e("li",[this._v("服务器接收到，返回server_random、加密方法以及公钥。")]),this._v(" "),e("li",[this._v("浏览器接收，接着生成另一个随机数pre_master, 并且用公钥加密，传给服务器。(重点操作！)")]),this._v(" "),e("li",[this._v("服务器用私钥解密这个被加密后的pre_master。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("到此为止，服务器和浏览器就有了相同的 "),e("code",[this._v("client_random")]),this._v("、"),e("code",[this._v("server_random")]),this._v(" 和 "),e("code",[this._v("pre_master")]),this._v(", 然后服务器和浏览器会使用这三组随机数生成对称秘钥。有了对称秘钥之后，双方就可以使用对称加密的方式来传输数据了。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"_5-ca-数字证书"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-ca-数字证书","aria-hidden":"true"}},[this._v("#")]),this._v(" 5. CA (数字证书)")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[this._v("通过数字证书向浏览器证明服务器的身份")]),this._v(" "),e("li",[this._v("数字证书里面包含了服务器公钥")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:r(247),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[this._v("服务器没有直接返回公钥给浏览器，而是返回了数字证书，而公钥正是包含数字证书中的；")]),this._v(" "),e("li",[this._v("在浏览器端多了一个证书验证的操作，验证了证书之后，才继续后序流程。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"参考资料"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[this._v("#")]),this._v(" 参考资料")])}],_=r(0),i=Object(_.a)({},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content"},[r("p"),t._m(0),r("p"),t._v(" "),r("p",[t._v("[TOC]")]),t._v(" "),t._m(1),t._v(" "),r("p",[t._v("转载整理自：https://segmentfault.com/a/1190000022950463")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),r("p",[t._v("可以看到 HTTPS的网站，在浏览器的地址栏内会出现一个带锁的标记。")]),t._v(" "),r("p",[t._v("HTTPS并非是应用层一个新的协议，通常 HTTP 直接和 TCP 通信，HTTPS则先和安全层（SSL/TLS）通信，然后安全层再和 TCP 层通信。")]),t._v(" "),t._m(6),t._v(" "),r("p",[t._v("SSL/TLS协议就是为了解决上面提到的HTTP存在的问题而生的，下面我们来看一下它是怎么解决的:")]),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),r("p",[t._v("加密和解密同用一个秘钥的方式称为 共享秘钥加密，也被叫做对称秘钥加密。")]),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),r("p",[t._v("之后浏览器通过公钥将数据加密传输给服务端，服务端收到数据使用私钥进行解密。服务端给浏览器发送数据，则使用私钥进行加密，浏览器收到服务端发送过来的数据，使用公钥进行解密。")]),t._v(" "),r("p",[t._v("存在的问题：")]),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),r("p",[t._v("传输数据阶段依然使用对称加密，但是对称加密的秘钥我们采用非对称加密传输。")]),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),t._m(22),t._v(" "),r("p",[t._v("使用对称和非对称混合的方式，实现了数据的加密传输。但是这种仍然存在一个问题，服务器可能是被黑客冒充的。这样，浏览器访问的就是黑客的服务器，黑客可以在自己的服务器上实现公钥和私钥，而对浏览器来说，它并不完全知道现在访问的是这个是黑客的站点。")]),t._v(" "),r("p",[t._v("服务器需要证明自己的身份，需要使用权威机构颁发的证书，这个权威机构就是 CA（Certificate Authority）， 颁发的证书就称为数字证书 (Digital Certificate)。")]),t._v(" "),r("p",[t._v("对于浏览器来说，数字证书有两个作用：")]),t._v(" "),t._m(23),t._v(" "),r("p",[t._v("下面我们来看一下含有数字证书的HTTPS的请求流程")]),t._v(" "),t._m(24),t._v(" "),r("p",[t._v("相对于不含数字证书的HTTPS请求流程，主要以下两点改动")]),t._v(" "),t._m(25),t._v(" "),t._m(26),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://www.zhihu.com/question/33645891",target:"_blank",rel:"noopener noreferrer"}},[t._v("如何用通俗易懂的话来解释非对称加密?"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/72616216",target:"_blank",rel:"noopener noreferrer"}},[t._v("十分钟搞懂HTTP和HTTPS协议？"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://www.cnblogs.com/leap/p/11953836.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTTPS 原理分析——带着疑问层层深入"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://book.douban.com/subject/25863515/",target:"_blank",rel:"noopener noreferrer"}},[t._v("图解HTTP"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://time.geekbang.org/column/article/156181",target:"_blank",rel:"noopener noreferrer"}},[t._v("浏览器工作原理与实践"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://juejin.im/post/5df5bcea6fb9a016091def69",target:"_blank",rel:"noopener noreferrer"}},[t._v("(1.6w字)浏览器灵魂之问，请问你能接得住几个？"),r("OutboundLink")],1)])])])},s,!1,null,null,null);i.options.__file="015-HTTPS是如何保证安全的.md";e.default=i.exports}}]);