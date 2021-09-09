(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{562:function(s,t,a){"use strict";a.r(t);var n=a(30),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"typescript-3-6"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#typescript-3-6"}},[s._v("#")]),s._v(" TypeScript 3.6")]),s._v(" "),a("h2",{attrs:{id:"类成员的-constructor-现在被叫做-constructors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#类成员的-constructor-现在被叫做-constructors"}},[s._v("#")]),s._v(" 类成员的 "),a("code",[s._v("constructor")]),s._v(" 现在被叫做 "),a("code",[s._v("Constructors")])]),s._v(" "),a("p",[s._v("根据 ECMAScript 规范，使用名为 "),a("code",[s._v("constructor")]),s._v(" 的方法的类声明现在是构造函数，无论它们是使用标识符名称还是字符串名称声明。")]),s._v(" "),a("div",{staticClass:"language-typescript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("C")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"constructor"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("console")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"现在我是构造函数了。"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("一个值得注意的例外，以及此改变的解决方法是使用名称计算结果为 "),a("code",[s._v("constructor")]),s._v(" 的计算属性。")]),s._v(" "),a("div",{staticClass:"language-typescript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("D")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"constructor"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("console")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"我只是一个纯粹的方法，不是构造函数！"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h2",{attrs:{id:"dom-定义更新"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dom-定义更新"}},[s._v("#")]),s._v(" DOM 定义更新")]),s._v(" "),a("p",[a("code",[s._v("lib.dom.d.ts")]),s._v(" 中移除或者修改了大量的定义。其中包括（但不仅限于）以下这些：")]),s._v(" "),a("ul",[a("li",[s._v("全局的 "),a("code",[s._v("window")]),s._v(" 不再定义为 "),a("code",[s._v("Window")]),s._v("，它被更明确的定义 "),a("code",[s._v("type Window & typeof globalThis")]),s._v(" 替代。在某些情况下，将它作为 "),a("code",[s._v("typeof window")]),s._v(" 更好。")]),s._v(" "),a("li",[a("code",[s._v("GlobalFetch")]),s._v(" 已经被移除。使用 "),a("code",[s._v("WindowOrWorkerGlobalScrope")]),s._v(" 替代。")]),s._v(" "),a("li",[a("code",[s._v("Navigator")]),s._v(" 上明确的非标准的属性已经被移除了。")]),s._v(" "),a("li",[a("code",[s._v("experimental-webgl")]),s._v(" 上下文已经被移除了。使用 "),a("code",[s._v("webgl")]),s._v(" 或 "),a("code",[s._v("webgl2")]),s._v(" 替代。")])]),s._v(" "),a("p",[s._v("如果你认为其中的改变已经制造了错误，"),a("a",{attrs:{href:"https://github.com/Microsoft/TSJS-lib-generator/",target:"_blank",rel:"noopener noreferrer"}},[s._v("请提交一个 issue"),a("OutboundLink")],1),s._v("。")]),s._v(" "),a("h2",{attrs:{id:"jsdoc-注释不再合并"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jsdoc-注释不再合并"}},[s._v("#")]),s._v(" JSDoc 注释不再合并")]),s._v(" "),a("p",[s._v("在 JavaScript 文件中，TypeScript 只会在 JSDoc 注释之前立即查询以确定声明的类型。")]),s._v(" "),a("div",{staticClass:"language-typescript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n * @param {string} arg\n */")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n * 你的其他注释信息\n */")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("whoWritesFunctionsLikeThis")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("arg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 'arg' 是 'any' 类型")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("h2",{attrs:{id:"关键字不能包含转义字符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关键字不能包含转义字符"}},[s._v("#")]),s._v(" 关键字不能包含转义字符")]),s._v(" "),a("p",[s._v("之前的版本允许关键字包含转义字符。TypeScript 3.6 不允许。")]),s._v(" "),a("div",{staticClass:"language-typescript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  \\u0063ontinue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//  ~~~~~~~~~~~~~")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 错误！关键字不能包含转义字符")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h2",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[s._v("#")]),s._v(" 参考")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://devblogs.microsoft.com/typescript/announcing-typescript-3-6/#breaking-changes",target:"_blank",rel:"noopener noreferrer"}},[s._v("Announcing TypeScript 3.6"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=e.exports}}]);