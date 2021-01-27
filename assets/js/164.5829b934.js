(window.webpackJsonp=window.webpackJsonp||[]).push([[164],{413:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("p"),t._m(0),a("p"),t._v(" "),a("p",[t._v("[TOC]")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),a("p",[t._v("示例：")]),t._v(" "),t._m(4),t._m(5),t._v(" "),t._m(6),t._m(7),t._v(" "),a("p",[t._v("生成一个 context module(上下文模块)。它包含"),a("strong",[t._v("目录下的所有模块")]),t._v("的引用，是通过一个 request 解析出来的正则表达式，去匹配目录下所有符合的模块，然后都 require 进来。此 context module 包含一个 map 对象，会把 request 中所有模块翻译成对应的模块 id。（译者注：request 参考 "),a("a",{attrs:{href:"https://webpack.docschina.org/glossary/",target:"_blank",rel:"noopener noreferrer"}},[t._v("概念术语"),a("OutboundLink")],1),t._v(" 文档）")]),t._v(" "),a("p",[t._v("示例：")]),t._v(" "),t._m(8),a("p",[t._v("此 context module 还包含一些访问这个 map 对象的 runtime 逻辑。")]),t._v(" "),a("p",[t._v("这意味着 webpack 能够支持动态地 require，但会导致所有可能用到的模块都包含在 bundle 中。")]),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),a("p",[t._v("可以给这个函数传入三个参数：一个要搜索的目录，一个标记表示是否还搜索其子目录， 以及一个匹配文件的正则表达式。")]),t._v(" "),t._m(11),t._v(" "),a("p",[t._v("语法如下：")]),t._v(" "),t._m(12),a("p",[t._v("示例：")]),t._v(" "),t._m(13),t._m(14),t._v(" "),t._m(15),t._v(" "),a("p",[t._v("一个 context module 会导出一个（require）函数，此函数可以接收一个参数：request。")]),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),a("p",[t._v("如果想引入一个文件夹下面的所有文件，或者引入能匹配一个正则表达式的所有文件，这个功能就会很有帮助，例如：")]),t._v(" "),t._m(18),t._m(19),t._v(" "),t._m(20),t._v(" "),a("p",[t._v("目录结构：")]),t._v(" "),t._m(21),t._m(22),a("p",[t._v("另一个使用例子：")]),t._v(" "),t._m(23),t._m(24),t._v(" "),a("p",[a("a",{attrs:{href:"https://webpack.docschina.org/guides/dependency-management",target:"_blank",rel:"noopener noreferrer"}},[t._v("webpack官网介绍 require.context"),a("OutboundLink")],1)])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#_1-带表达式的-require-语句"}},[this._v("1. 带表达式的 require 语句")])]),s("li",[s("a",{attrs:{href:"#_2-require-context"}},[this._v("2. require.context")]),s("ul",[s("li",[s("a",{attrs:{href:"#_2-1-context-module-api"}},[this._v("2.1 context module API")])])])]),s("li",[s("a",{attrs:{href:"#_3-一些实际使用例子"}},[this._v("3. 一些实际使用例子")])]),s("li",[s("a",{attrs:{href:"#参考资料"}},[this._v("参考资料")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"require-context方法讲解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#require-context方法讲解","aria-hidden":"true"}},[this._v("#")]),this._v(" require.context方法讲解")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_1-带表达式的-require-语句"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-带表达式的-require-语句","aria-hidden":"true"}},[this._v("#")]),this._v(" 1. 带表达式的 require 语句")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("如果你的 request 含有表达式(expressions)，就会创建一个上下文(context)，因为在编译时(compile time)并不清楚"),s("strong",[this._v("具体")]),this._v("导入哪个模块。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token function"}},[t._v("require")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'./template/'")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" name "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'.ejs'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("webpack 解析 "),s("code",[this._v("require()")]),this._v(" 调用，然后提取出如下一些信息：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-code extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("Directory: ./template\nRegular expression: /^.*\\.ejs$/\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("context module")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"./table.ejs"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("42")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"./table-row.ejs"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("43")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"./directory/folder.ejs"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("44")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_2-require-context"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-require-context","aria-hidden":"true"}},[this._v("#")]),this._v(" 2. "),s("code",[this._v("require.context")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("你还可以通过 "),s("code",[this._v("require.context()")]),this._v(" 函数来创建自己的 context。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("webpack 会在构建中解析代码中的 "),s("code",[this._v("require.context()")]),this._v(" 。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("require"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("context")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("directory"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" useSubdirectories "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("false")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" regExp "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token regex"}},[t._v("/^\\.\\//")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("require"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("context")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'./test'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("false")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token regex"}},[t._v("/\\.test\\.js$/")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// （创建出）一个 context，其中文件来自 test 目录，request 以 `.test.js` 结尾。")]),t._v("\nrequire"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("context")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'../'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token regex"}},[t._v("/\\.stories\\.js$/")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// （创建出）一个 context，其中所有文件都来自父文件夹及其所有子级文件夹，request 以 `.stories.js` 结尾。")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("传递给 "),s("code",[this._v("require.context")]),this._v(" 的参数必须是字面量(literal)！")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"_2-1-context-module-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-context-module-api","aria-hidden":"true"}},[this._v("#")]),this._v(" 2.1 context module API")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("此导出函数有三个属性："),s("code",[this._v("resolve")]),this._v(", "),s("code",[this._v("keys")]),this._v(", "),s("code",[this._v("id")]),this._v("。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("code",[this._v("resolve")]),this._v(" 是一个函数，它返回 request 被解析后得到的模块 id。")]),this._v(" "),s("li",[s("code",[this._v("keys")]),this._v(" 也是一个函数，它返回一个数组，由所有可能被此 context module 处理的请求（译者注：参考下面第二段代码中的 key）组成。")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("importAll")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("r"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  r"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("keys")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("forEach")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("r"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{attrs:{class:"token function"}},[t._v("importAll")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("require"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("context")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'../components/'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token regex"}},[t._v("/\\.js$/")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" cache "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("importAll")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("r"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  r"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("keys")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("forEach")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" cache"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("key"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("r")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{attrs:{class:"token function"}},[t._v("importAll")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("require"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("context")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'../components/'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token regex"}},[t._v("/\\.js$/")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 在构建时(build-time)，所有被 require 的模块都会被填充到 cache 对象中。")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("code",[this._v("id")]),this._v(" 是 context module 里面所包含的模块 id. 它可能在你使用 "),s("code",[this._v("module.hot.accept")]),this._v(" 时会用到。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_3-一些实际使用例子"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-一些实际使用例子","aria-hidden":"true"}},[this._v("#")]),this._v(" 3. 一些实际使用例子")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v(".\n├── images\n│   ├── graph\n│   └── new\n│       ├── 0.png\n│       ├── 1.png\n│       ├── 11.png\n├── index.jsx\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" requireContext "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" require"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("context")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'./images/new/'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("false")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token regex"}},[t._v("/\\.png$/")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" cache "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nrequireContext"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("keys")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("forEach")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" index"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" cache"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("index"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("requireContext")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" requireContext "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" require"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("context")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'./'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token regex"}},[t._v("/([a-z])\\/$/")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" res "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nrequireContext"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("keys")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("forEach")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("path"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" name "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" path"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("replace")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token regex"}},[t._v("/^\\.\\//")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("''")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("replace")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token regex"}},[t._v("/\\/$/")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("''")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// const filePath = require.resolve(`${path}index.js`)")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// Object.keys(require.cache).forEach(key => {")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("//     if (key.endsWith(filePath)){")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("//         delete require.cache[key]")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("//     }")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// })")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// eslint-disable-next-line import/no-dynamic-require")]),t._v("\n    res"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("name"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("require")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token template-string"}},[a("span",{attrs:{class:"token string"}},[t._v("`")]),a("span",{attrs:{class:"token interpolation"}},[a("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("path"),a("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{attrs:{class:"token string"}},[t._v("index.js`")])]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token operator"}},[t._v("...")]),t._v("res\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"参考资料"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[this._v("#")]),this._v(" 参考资料")])}],!1,null,null,null);e.options.__file="002-webpack-require.context.md";s.default=e.exports}}]);