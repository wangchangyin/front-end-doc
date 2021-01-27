(window.webpackJsonp=window.webpackJsonp||[]).push([[158],{419:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("p"),t._m(0),a("p"),t._v(" "),a("p",[t._v("[TOC]")]),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("Refs 提供了一种方式，允许我们访问 DOM 节点或在 render 方法中创建的 React 元素。")]),t._v(" "),a("p",[t._v("在react典型的数据流中，要修改一个子组件，你需要使用新的 props 来重新渲染它。但是，在某些情况下，你需要在典型数据流之外强制修改子组件。被修改的子组件可能是一个 React 组件的实例，也可能是一个 DOM 元素。refs就是解决方法")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),a("p",[t._v("避免使用 refs 来做任何可以通过声明式实现来完成的事情。")]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._m(8),t._v(" "),t._m(9),a("p",[t._v("ref 的值根据节点的类型而有所不同：")]),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),a("p",[t._v("为class组件添加refs：")]),t._v(" "),t._m(15),t._v(" "),t._m(16),t._m(17),t._v(" "),t._m(18),t._v(" "),a("p",[t._v("如果要在函数组件中使用 "),a("code",[t._v("ref")]),t._v("，你可以使用 "),a("a",{attrs:{href:"https://zh-hans.reactjs.org/docs/forwarding-refs.html",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("forwardRef")]),a("OutboundLink")],1),t._v("（可与 "),a("a",{attrs:{href:"https://zh-hans.reactjs.org/docs/hooks-reference.html#useimperativehandle",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("useImperativeHandle")]),a("OutboundLink")],1),t._v(" 结合使用），或者可以将该组件转化为 class 组件。")]),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),a("p",[t._v("在极少数情况下，你可能希望在父组件中引用子节点的 DOM 节点。通常不建议这样做，因为它会打破组件的封装，但它偶尔可用于触发焦点或测量子 DOM 节点的大小或位置。")]),t._v(" "),a("p",[t._v("如果你使用 16.3 或更高版本的 React, 这种情况下我们推荐使用 "),a("a",{attrs:{href:"https://zh-hans.reactjs.org/docs/forwarding-refs.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("ref 转发"),a("OutboundLink")],1),t._v("。"),a("strong",[t._v("Ref 转发使组件可以像暴露自己的 ref 一样暴露子组件的 ref")]),t._v("。")]),t._v(" "),a("p",[t._v("https://zh-hans.reactjs.org/docs/forwarding-refs.html")]),t._v(" "),t._m(21),t._v(" "),t._m(22),t._m(23),t._v(" "),a("p",[t._v("以下是对上述示例发生情况的逐步解释：")]),t._v(" "),a("ol",[a("li",[t._v("我们通过调用 "),a("code",[t._v("React.createRef")]),t._v(" 创建了一个 "),a("a",{attrs:{href:"https://zh-hans.reactjs.org/docs/refs-and-the-dom.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("React ref"),a("OutboundLink")],1),t._v(" 并将其赋值给 "),a("code",[t._v("ref")]),t._v(" 变量。")]),t._v(" "),t._m(24),t._v(" "),t._m(25),t._v(" "),t._m(26),t._v(" "),t._m(27)]),t._v(" "),t._m(28),t._v(" "),t._m(29),t._v(" "),a("p",[t._v("React 也支持另一种设置 refs 的方式，称为“回调 refs”。它能助你更精细地控制何时 refs 被设置和解除。")]),t._v(" "),t._m(30),t._v(" "),t._m(31),t._v(" "),t._m(32),t._m(33),t._v(" "),t._m(34),t._m(35),t._v(" "),t._m(36),t._v(" "),t._m(37),t._v(" "),t._m(38),t._v(" "),a("p",[a("a",{attrs:{href:"https://zh-hans.reactjs.org/docs/refs-and-the-dom.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("react 官网介绍Refs"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://zh-hans.reactjs.org/docs/forwarding-refs.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("react 官网ref 转发"),a("OutboundLink")],1)])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#_1-创建、访问-refs"}},[this._v("1. 创建、访问 Refs")])]),s("li",[s("a",{attrs:{href:"#_2-实际使用例子"}},[this._v("2. 实际使用例子")])]),s("li",[s("a",{attrs:{href:"#_3-将dom-reds暴露给父组件"}},[this._v("3. 将Dom Reds暴露给父组件")])]),s("li",[s("a",{attrs:{href:"#_4-回调refs"}},[this._v("4. 回调Refs")])]),s("li",[s("a",{attrs:{href:"#参考资料"}},[this._v("参考资料")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"refs引用dom"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#refs引用dom","aria-hidden":"true"}},[this._v("#")]),this._v(" refs引用dom")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("适合使用"),s("code",[this._v("refs")]),this._v("的情况：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("管理焦点，文本选择或媒体播放。")]),this._v(" "),s("li",[this._v("触发强制动画。")]),this._v(" "),s("li",[this._v("集成第三方 DOM 库。")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("blockquote",[a("p",[a("em",[a("strong",[t._v("注意：")])])]),t._v(" "),a("p",[t._v("React 16.3 版本以上使用"),a("code",[t._v("React.createRef()")]),t._v(" API来创建"),a("code",[t._v("refs")])]),t._v(" "),a("p",[t._v("React 16.3 版本以前使用"),a("code",[t._v("回调形式refs")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_1-创建、访问-refs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-创建、访问-refs","aria-hidden":"true"}},[this._v("#")]),this._v(" 1. 创建、访问 Refs")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Refs 是使用 "),s("code",[this._v("React.createRef()")]),this._v(" 创建的，并通过 "),s("code",[this._v("ref")]),this._v(" 属性附加到 React 元素。在构造组件时，通常将 Refs 分配给实例属性，以便可以在整个组件中引用它们。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-jsx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-jsx"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("MyComponent")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("React"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Component")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token function"}},[t._v("constructor")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("props"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("super")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("props"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("myRef "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" React"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("createRef")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token function"}},[t._v("render")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("ref")]),a("span",{attrs:{class:"token script language-javascript"}},[a("span",{attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("myRef"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")])]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("当 ref 被传递给 "),s("code",[this._v("render")]),this._v(" 中的元素时，对该节点的引用可以在 ref 的 "),s("code",[this._v("current")]),this._v(" 属性中被访问。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" node "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("myRef"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("current"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[t._v("当 "),a("code",[t._v("ref")]),t._v(" 属性用于 HTML 元素时，构造函数中使用 "),a("code",[t._v("React.createRef()")]),t._v(" 创建的 "),a("code",[t._v("ref")]),t._v(" 接收底层 DOM 元素作为其 "),a("code",[t._v("current")]),t._v(" 属性。")]),t._v(" "),a("li",[t._v("当 "),a("code",[t._v("ref")]),t._v(" 属性用于自定义 class 组件时，"),a("code",[t._v("ref")]),t._v(" 对象接收组件的挂载实例作为其 "),a("code",[t._v("current")]),t._v(" 属性。")]),t._v(" "),a("li",[a("strong",[t._v("你不能在函数组件上使用 "),a("code",[t._v("ref")]),t._v(" 属性")]),t._v("，因为他们没有实例。")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("React 会在组件挂载时给 "),a("code",[t._v("current")]),t._v(" 属性传入 DOM 元素，并在组件卸载时传入 "),a("code",[t._v("null")]),t._v(" 值。"),a("code",[t._v("ref")]),t._v(" 会在 "),a("code",[t._v("componentDidMount")]),t._v(" 或 "),a("code",[t._v("componentDidUpdate")]),t._v(" 生命周期钩子触发前更新。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_2-实际使用例子"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-实际使用例子","aria-hidden":"true"}},[this._v("#")]),this._v(" 2. 实际使用例子")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("以下代码使用 "),s("code",[this._v("ref")]),this._v(" 去存储 DOM 节点的引用：")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-jsx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-jsx"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("CustomTextInput")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("React"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Component")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token function"}},[t._v("constructor")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("props"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("super")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("props"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// 创建一个 ref 来存储 textInput 的 DOM 元素")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("textInput "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" React"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("createRef")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("focusTextInput "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("focusTextInput"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("bind")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),a("span",{attrs:{class:"token function"}},[t._v("focusTextInput")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v('// 直接使用原生 API 使 text 输入框获得焦点, 注意：我们通过 "current" 来访问 DOM 节点')]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("textInput"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("current"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("focus")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),a("span",{attrs:{class:"token function"}},[t._v("render")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// 告诉 React 我们想把 <input> ref 关联到构造器里创建的 `textInput` 上")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n      "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token plain-text"}},[t._v("\n        ")]),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("type")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("text"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("ref")]),a("span",{attrs:{class:"token script language-javascript"}},[a("span",{attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("textInput"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")])]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),a("span",{attrs:{class:"token plain-text"}},[t._v("\n        ")]),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("type")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("button"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("value")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Focus the text input"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n          "),a("span",{attrs:{class:"token attr-name"}},[t._v("onClick")]),a("span",{attrs:{class:"token script language-javascript"}},[a("span",{attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("focusTextInput"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")])]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),a("span",{attrs:{class:"token plain-text"}},[t._v("\n      ")]),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("如果我们想包装上面的 "),s("code",[this._v("CustomTextInput")]),this._v("，来模拟它挂载之后立即被点击的操作，我们可以使用 ref 来获取这个自定义的 input 组件并手动调用它的 "),s("code",[this._v("focusTextInput")]),this._v(" 方法：")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-jsx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-jsx"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("AutoFocusTextInput")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("React"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Component")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token function"}},[t._v("constructor")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("props"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("super")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("props"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("textInput "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" React"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("createRef")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),a("span",{attrs:{class:"token function"}},[t._v("componentDidMount")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("textInput"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("current"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("focusTextInput")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),a("span",{attrs:{class:"token function"}},[t._v("render")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n      "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("CustomTextInput")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("ref")]),a("span",{attrs:{class:"token script language-javascript"}},[a("span",{attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("textInput"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")])]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("请注意，这仅在 "),s("code",[this._v("CustomTextInput")]),this._v(" 声明为 class 时才有效")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("默认情况下，"),s("strong",[this._v("你不能在函数组件上使用 "),s("code",[this._v("ref")]),this._v(" 属性")]),this._v("，因为它们没有实例")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("不管怎样，你可以"),s("strong",[this._v("在函数组件内部使用 "),s("code",[this._v("ref")]),this._v(" 属性")]),this._v("，只要它指向一个 DOM 元素或 class 组件")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_3-将dom-reds暴露给父组件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-将dom-reds暴露给父组件","aria-hidden":"true"}},[this._v("#")]),this._v(" 3. 将Dom Reds暴露给父组件")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("Ref 转发是一个可选特性，其允许某些组件接收 "),s("code",[this._v("ref")]),this._v("，并将其向下传递（换句话说，“转发”它）给子组件。")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-jsx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-jsx"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" FancyButton "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" React"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("forwardRef")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("props"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ref"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("button")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("ref")]),a("span",{attrs:{class:"token script language-javascript"}},[a("span",{attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("ref"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")])]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("className")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("FancyButton"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token plain-text"}},[t._v("\n    ")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("props"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("children"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token plain-text"}},[t._v("\n  ")]),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("button")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 你可以直接获取 DOM button 的 ref：")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" ref "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" React"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("createRef")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("FancyButton")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("ref")]),a("span",{attrs:{class:"token script language-javascript"}},[a("span",{attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("ref"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token plain-text"}},[t._v("Click me!")]),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("FancyButton")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("这样，使用 "),s("code",[this._v("FancyButton")]),this._v(" 的组件可以获取底层 DOM 节点 "),s("code",[this._v("button")]),this._v(" 的 ref ，并在必要时访问，就像其直接使用 DOM "),s("code",[this._v("button")]),this._v(" 一样。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[this._v("我们通过指定 "),s("code",[this._v("ref")]),this._v(" 为 JSX 属性，将其向下传递给 ``。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[this._v("React 传递 "),s("code",[this._v("ref")]),this._v(" 给 "),s("code",[this._v("forwardRef")]),this._v(" 内函数 "),s("code",[this._v("(props, ref) => ...")]),this._v("，作为其第二个参数。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[this._v("我们向下转发该 "),s("code",[this._v("ref")]),this._v(" 参数到 ``，将其指定为 JSX 属性。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[this._v("当 ref 挂载完成，"),s("code",[this._v("ref.current")]),this._v(" 将指向 `` DOM 节点。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("blockquote",[a("p",[t._v("注意")]),t._v(" "),a("p",[t._v("第二个参数 "),a("code",[t._v("ref")]),t._v(" 只在使用 "),a("code",[t._v("React.forwardRef")]),t._v(" 定义组件时存在。常规函数和 class 组件不接收 "),a("code",[t._v("ref")]),t._v(" 参数，且 props 中也不存在 "),a("code",[t._v("ref")]),t._v("。")]),t._v(" "),a("p",[t._v("Ref 转发不仅限于 DOM 组件，你也可以转发 refs 到 class 组件实例中。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_4-回调refs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-回调refs","aria-hidden":"true"}},[this._v("#")]),this._v(" 4. 回调Refs")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("不同于传递 "),s("code",[this._v("createRef()")]),this._v(" 创建的 "),s("code",[this._v("ref")]),this._v(" 属性，你会传递一个函数。这个函数中接受 React 组件实例或 HTML DOM 元素作为参数，以使它们能在其他地方被存储和访问。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("React 将在组件挂载时，会调用 "),a("code",[t._v("ref")]),t._v(" 回调函数并传入 DOM 元素，当卸载时调用它并传入 "),a("code",[t._v("null")]),t._v("。在 "),a("code",[t._v("componentDidMount")]),t._v(" 或 "),a("code",[t._v("componentDidUpdate")]),t._v(" 触发前，React 会保证 refs 一定是最新的。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-jsx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-jsx"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("CustomTextInput")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("React"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Component")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n  "),a("span",{attrs:{class:"token function-variable function"}},[t._v("onResetQuery")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("conditionRef"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("onResetQuery")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),a("span",{attrs:{class:"token comment"}},[t._v("// 获取子组件")]),t._v("\n    "),a("span",{attrs:{class:"token function-variable function"}},[t._v("getConditionRef")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" ele "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("conditionRef "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" ele"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    \n\t"),a("span",{attrs:{class:"token function"}},[t._v("render")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\t\t\t"),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("FilterCondition\n          "),a("span",{attrs:{class:"token comment"}},[t._v("// 引用子组件")]),t._v("\n          ref"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("getConditionRef"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n       "),a("span",{attrs:{class:"token operator"}},[t._v("/")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\t\t"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("你可以在组件间传递回调形式的 refs，就像你可以传递通过 "),s("code",[this._v("React.createRef()")]),this._v(" 创建的对象 refs 一样。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-jsx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-jsx"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("CustomTextInput")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("props"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token plain-text"}},[t._v("\n      ")]),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("ref")]),a("span",{attrs:{class:"token script language-javascript"}},[a("span",{attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("props"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("inputRef"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")])]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),a("span",{attrs:{class:"token plain-text"}},[t._v("\n    ")]),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Parent")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("React"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Component")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token function"}},[t._v("render")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n      "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("CustomTextInput")]),t._v("\n        "),a("span",{attrs:{class:"token attr-name"}},[t._v("inputRef")]),a("span",{attrs:{class:"token script language-javascript"}},[a("span",{attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("el "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("inputElement "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" el"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")])]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("在上面的例子中，"),a("code",[t._v("Parent")]),t._v(" 把它的 refs 回调函数当作 "),a("code",[t._v("inputRef")]),t._v(" props 传递给了 "),a("code",[t._v("CustomTextInput")]),t._v("，而且 "),a("code",[t._v("CustomTextInput")]),t._v(" 把相同的函数作为特殊的 "),a("code",[t._v("ref")]),t._v(" 属性传递给了 ``。结果是，在 "),a("code",[t._v("Parent")]),t._v(" 中的 "),a("code",[t._v("this.inputElement")]),t._v(" 会被设置为与 "),a("code",[t._v("CustomTextInput")]),t._v(" 中的 "),a("code",[t._v("input")]),t._v(" 元素相对应的 DOM 节点。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("关于回调 refs 的说明")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("如果 "),s("code",[this._v("ref")]),this._v(" 回调函数是以内联函数的方式定义的，在更新过程中它会被执行两次，第一次传入参数 "),s("code",[this._v("null")]),this._v("，然后第二次会传入参数 DOM 元素。这是因为在每次渲染时会创建一个新的函数实例，所以 React 清空旧的 ref 并且设置新的。通过将 ref 的回调函数定义成 class 的绑定函数的方式可以避免上述问题，但是大多数情况下它是无关紧要的。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"参考资料"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[this._v("#")]),this._v(" 参考资料")])}],!1,null,null,null);e.options.__file="014-react-refs引用dom.md";s.default=e.exports}}]);