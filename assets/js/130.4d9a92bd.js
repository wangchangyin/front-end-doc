(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{457:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#_1-概述"}},[t._v("1. 概述")])]),s("li",[s("a",{attrs:{href:"#_2-属性和方法"}},[t._v("2. 属性和方法")]),s("ul",[s("li",[s("a",{attrs:{href:"#_2-1-storage-length：返回保存的数据项个数"}},[t._v("2.1 Storage.length：返回保存的数据项个数")])]),s("li",[s("a",{attrs:{href:"#_2-2-storage-setitem-：存入数据"}},[t._v("2.2 Storage.setItem()：存入数据")])]),s("li",[s("a",{attrs:{href:"#_2-3-storage-getitem-：读取数据"}},[t._v("2.3 Storage.getItem()：读取数据")])]),s("li",[s("a",{attrs:{href:"#_2-4-storage-removeitem-：清除某个键名对应的键值"}},[t._v("2.4 Storage.removeItem()：清除某个键名对应的键值")])]),s("li",[s("a",{attrs:{href:"#_2-5-storage-clear-：清除所有保存的数据"}},[t._v("2.5 Storage.clear()：清除所有保存的数据")])]),s("li",[s("a",{attrs:{href:"#_2-6-storage-key-：整数作为参数，返回该位置对应的键值"}},[t._v("2.6 Storage.key()：整数作为参数，返回该位置对应的键值")])])])]),s("li",[s("a",{attrs:{href:"#_3-storage-事件"}},[t._v("3. storage 事件")])])])]),s("p"),t._v(" "),s("p",[t._v("[TOC]")]),t._v(" "),s("h1",{attrs:{id:"storage-接口"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#storage-接口","aria-hidden":"true"}},[t._v("#")]),t._v(" Storage 接口")]),t._v(" "),s("p",[t._v("转载整理自：https://wangdoc.com/javascript/bom/storage.html")]),t._v(" "),s("h2",{attrs:{id:"_1-概述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-概述","aria-hidden":"true"}},[t._v("#")]),t._v(" 1. 概述")]),t._v(" "),s("p",[t._v("Storage 接口用于脚本在浏览器保存数据。两个对象部署了这个接口："),s("code",[t._v("window.sessionStorage")]),t._v("和"),s("code",[t._v("window.localStorage")]),t._v("。")]),t._v(" "),s("p",[s("code",[t._v("sessionStorage")]),t._v("保存的数据用于浏览器的一次会话（session），当会话结束（通常是窗口关闭），数据被清空；"),s("code",[t._v("localStorage")]),t._v("保存的数据长期存在，下一次访问该网站的时候，网页可以直接读取以前保存的数据。除了保存期限的长短不同，这两个对象的其他方面都一致。")]),t._v(" "),s("p",[t._v("保存的数据都以“键值对”的形式存在。也就是说，每一项数据都有一个键名和对应的值。所有的数据都是以文本格式保存。")]),t._v(" "),s("p",[t._v("这个接口很像 Cookie 的强化版，能够使用大得多的存储空间。目前，每个域名的存储上限视浏览器而定，Chrome 是 2.5MB，Firefox 和 Opera 是 5MB，IE 是 10MB。其中，Firefox 的存储空间由一级域名决定，而其他浏览器没有这个限制。也就是说，Firefox 中，"),s("code",[t._v("a.example.com")]),t._v("和"),s("code",[t._v("b.example.com")]),t._v("共享 5MB 的存储空间。另外，与 Cookie 一样，它们也受同域限制。某个网页存入的数据，只有同域下的网页才能读取，如果跨域操作会报错。")]),t._v(" "),s("h2",{attrs:{id:"_2-属性和方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-属性和方法","aria-hidden":"true"}},[t._v("#")]),t._v(" 2. 属性和方法")]),t._v(" "),s("h3",{attrs:{id:"_2-1-storage-length：返回保存的数据项个数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-storage-length：返回保存的数据项个数","aria-hidden":"true"}},[t._v("#")]),t._v(" 2.1 Storage.length：返回保存的数据项个数")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("window"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("localStorage"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("setItem")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'foo'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'a'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nwindow"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("localStorage"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("setItem")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'bar'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'b'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nwindow"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("localStorage"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("setItem")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'baz'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'c'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nwindow"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("localStorage"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),s("span",{attrs:{class:"token comment"}},[t._v("// 3")]),t._v("\n")])])]),s("h3",{attrs:{id:"_2-2-storage-setitem-：存入数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-storage-setitem-：存入数据","aria-hidden":"true"}},[t._v("#")]),t._v(" 2.2 Storage.setItem()：存入数据")]),t._v(" "),s("p",[s("code",[t._v("Storage.setItem()")]),t._v("方法用于存入数据。它接受两个参数，第一个是键名，第二个是保存的数据。如果键名已经存在，该方法会更新已有的键值。该方法没有返回值。")]),t._v(" "),s("p",[t._v("注意，"),s("code",[t._v("Storage.setItem()")]),t._v("两个参数都是字符串。如果不是字符串，会自动转成字符串，再存入浏览器。")]),t._v(" "),s("p",[t._v("如果储存空间已满，该方法会抛错。")]),t._v(" "),s("p",[t._v("写入不一定要用这个方法，直接赋值也是可以的。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("window"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sessionStorage"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("setItem")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'key'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'value'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nwindow"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("localStorage"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("setItem")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'key'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'value'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("// 两个参数都不是字符串，但是存入的值都是字符串")]),t._v("\nwindow"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sessionStorage"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("setItem")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token number"}},[t._v("3")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" foo"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nwindow"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sessionStorage"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("getItem")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'3'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v('// "[object Object]"')]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("// 下面三种写法等价")]),t._v("\nwindow"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("localStorage"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("foo "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'123'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nwindow"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("localStorage"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token string"}},[t._v("'foo'")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'123'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nwindow"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("localStorage"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("setItem")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'foo'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'123'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"_2-3-storage-getitem-：读取数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-storage-getitem-：读取数据","aria-hidden":"true"}},[t._v("#")]),t._v(" 2.3 Storage.getItem()：读取数据")]),t._v(" "),s("p",[s("code",[t._v("Storage.getItem()")]),t._v("方法用于读取数据。它只有一个参数，就是键名。如果键名不存在，该方法返回"),s("code",[t._v("null")]),t._v("。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("window"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sessionStorage"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("getItem")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'key'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nwindow"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("localStorage"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("getItem")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'key'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("键名应该是一个字符串，否则会被自动转为字符串。")]),t._v(" "),s("h3",{attrs:{id:"_2-4-storage-removeitem-：清除某个键名对应的键值"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-storage-removeitem-：清除某个键名对应的键值","aria-hidden":"true"}},[t._v("#")]),t._v(" 2.4 Storage.removeItem()：清除某个键名对应的键值")]),t._v(" "),s("p",[s("code",[t._v("Storage.removeItem()")]),t._v("方法用于清除某个键名对应的键值。它接受键名作为参数，如果键名不存在，该方法不会做任何事情。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("sessionStorage"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("removeItem")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'key'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nlocalStorage"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("removeItem")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'key'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"_2-5-storage-clear-：清除所有保存的数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-storage-clear-：清除所有保存的数据","aria-hidden":"true"}},[t._v("#")]),t._v(" 2.5 Storage.clear()：清除所有保存的数据")]),t._v(" "),s("p",[s("code",[t._v("Storage.clear()")]),t._v("方法用于清除所有保存的数据。该方法的返回值是"),s("code",[t._v("undefined")]),t._v("。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("window"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sessionStorage"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("clear")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nwindow"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("localStorage"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("clear")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h3",{attrs:{id:"_2-6-storage-key-：整数作为参数，返回该位置对应的键值"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-6-storage-key-：整数作为参数，返回该位置对应的键值","aria-hidden":"true"}},[t._v("#")]),t._v(" 2.6 Storage.key()：整数作为参数，返回该位置对应的键值")]),t._v(" "),s("p",[s("code",[t._v("Storage.key()")]),t._v("接受一个整数作为参数（从零开始），返回该位置对应的键值。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("window"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sessionStorage"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("setItem")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'key'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'value'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nwindow"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sessionStorage"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("key")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v('// "key"')]),t._v("\n")])])]),s("p",[t._v("结合使用"),s("code",[t._v("Storage.length")]),t._v("属性和"),s("code",[t._v("Storage.key()")]),t._v("方法，可以遍历所有的键。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" i "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v(" window"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("localStorage"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),s("span",{attrs:{class:"token operator"}},[t._v("++")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("log")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("localStorage"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("key")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"_3-storage-事件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-storage-事件","aria-hidden":"true"}},[t._v("#")]),t._v(" 3. storage 事件")]),t._v(" "),s("p",[t._v("Storage 接口储存的数据发生变化时，会触发 storage 事件，可以指定这个事件的监听函数。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("window"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'storage'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" onStorageChange"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("监听函数接受一个"),s("code",[t._v("event")]),t._v("实例对象作为参数。这个实例对象继承了 StorageEvent 接口，有几个特有的属性，都是只读属性。")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("key")]),t._v("：字符串，表示发生变动的键名。如果 storage 事件是由"),s("code",[t._v("clear()")]),t._v("方法引起，该属性返回"),s("code",[t._v("null")]),t._v("。")]),t._v(" "),s("li",[s("code",[t._v("newValue")]),t._v("：字符串，表示新的键值。如果 storage 事件是由"),s("code",[t._v("clear()")]),t._v("方法或删除该键值对引发的，该属性返回"),s("code",[t._v("null")]),t._v("。")]),t._v(" "),s("li",[s("code",[t._v("oldValue")]),t._v("：字符串，表示旧的键值。如果该键值对是新增的，该属性返回"),s("code",[t._v("null")]),t._v("。")]),t._v(" "),s("li",[s("code",[t._v("storageArea")]),t._v("：对象，返回键值对所在的整个对象。也说是说，可以从这个属性上面拿到当前域名储存的所有键值对。")]),t._v(" "),s("li",[s("code",[t._v("url")]),t._v("：字符串，表示原始触发 storage 事件的那个网页的网址。")])]),t._v(" "),s("p",[t._v("下面是"),s("code",[t._v("StorageEvent.key")]),t._v("属性的例子。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("onStorageChange")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("log")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("key"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nwindow"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'storage'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" onStorageChange"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("注意，该事件有一个很特别的地方，就是它不在导致数据变化的当前页面触发，而是在同一个域名的其他窗口触发。也就是说，如果浏览器只打开一个窗口，可能观察不到这个事件。比如同时打开多个窗口，当其中的一个窗口导致储存的数据发生改变时，只有在其他窗口才能观察到监听函数的执行。可以通过这种机制，实现多个窗口之间的通信。")])])}],!1,null,null,null);e.options.__file="001-storage接口.md";a.default=e.exports}}]);