(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{563:function(t,s,e){"use strict";e.r(s);var a=e(30),r=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"typescript-2-5"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#typescript-2-5"}},[t._v("#")]),t._v(" TypeScript 2.5")]),t._v(" "),e("h2",{attrs:{id:"可选的catch语句变量"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#可选的catch语句变量"}},[t._v("#")]),t._v(" 可选的"),e("code",[t._v("catch")]),t._v("语句变量")]),t._v(" "),e("p",[t._v("得益于"),e("a",{attrs:{href:"https://github.com/tinganho",target:"_blank",rel:"noopener noreferrer"}},[t._v("@tinganho"),e("OutboundLink")],1),t._v("所做的工作，TypeScript 2.5实现了一个新的ECMAScript特性，允许用户省略"),e("code",[t._v("catch")]),t._v("语句中的变量。 例如，当使用"),e("code",[t._v("JSON.parse")]),t._v("时，你可能需要将对应的函数调用放在"),e("code",[t._v("try")]),t._v(" / "),e("code",[t._v("catch")]),t._v("中，但是最后可能并不会用到输入有误时会抛出的"),e("code",[t._v("SyntaxError")]),t._v("（语法错误）。")]),t._v(" "),e("div",{staticClass:"language-typescript line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-typescript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" input "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"..."')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("parse")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("input"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ^ 注意我们的 `catch` 语句并没有声明一个变量")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("console")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"传入的 JSON 不合法\\n\\n"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" input"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br")])]),e("h2",{attrs:{id:"checkjs-ts-check-模式中的类型断言-转换语法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#checkjs-ts-check-模式中的类型断言-转换语法"}},[t._v("#")]),t._v(" "),e("code",[t._v("checkJs")]),t._v("/"),e("code",[t._v("@ts-check")]),t._v(" 模式中的类型断言/转换语法")]),t._v(" "),e("p",[t._v("TypeScript 2.5 引入了在"),e("a",{attrs:{href:"https://github.com/Microsoft/TypeScript/issues/5158",target:"_blank",rel:"noopener noreferrer"}},[t._v("使用纯 JavaScript 的项目中断言表达式类型"),e("OutboundLink")],1),t._v("的能力。对应的语法是"),e("code",[t._v("/** @type {...} */")]),t._v("标注注释后加上被圆括号括起来，类型需要被重新演算的表达式。举例:")]),t._v(" "),e("div",{staticClass:"language-typescript line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-typescript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" x "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** @type {SomeType} */")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("AnyParenthesizedExpression"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("h2",{attrs:{id:"包去重和重定向"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#包去重和重定向"}},[t._v("#")]),t._v(" 包去重和重定向")]),t._v(" "),e("p",[t._v("在 TypeScript 2.5 中使用"),e("code",[t._v("Node")]),t._v('模块解析策略进行导入时，编译器现在会检查文件是否来自 "相同" 的包。如果一个文件所在的包的'),e("code",[t._v("package.json")]),t._v("包含了与之前读取的包相同的"),e("code",[t._v("name")]),t._v("和"),e("code",[t._v("version")]),t._v("，那么TypeScript会将它重定向到最顶层的包。这可以解决两个包可能会包含相同的类声明，但因为包含"),e("code",[t._v("private")]),t._v("成员导致他们在结构上不兼容的问题.")]),t._v(" "),e("p",[t._v("这也带来一个额外的好处，可以通过避免从重复的包中加载"),e("code",[t._v(".d.ts")]),t._v("文件减少内存使用和编译器及语言服务的运行时计算.")]),t._v(" "),e("h2",{attrs:{id:"preservesymlinks-保留符号链接-编译器选项"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#preservesymlinks-保留符号链接-编译器选项"}},[t._v("#")]),t._v(" "),e("code",[t._v("--preserveSymlinks")]),t._v("（保留符号链接）编译器选项")]),t._v(" "),e("p",[t._v("TypeScript 2.5带来了"),e("code",[t._v("preserveSymlinks")]),t._v("选项，它对应了"),e("a",{attrs:{href:"https://nodejs.org/api/cli.html#cli_preserve_symlinks",target:"_blank",rel:"noopener noreferrer"}},[t._v("Node.js 中 "),e("code",[t._v("--preserve-symlinks")]),t._v("选项"),e("OutboundLink")],1),t._v("的行为。这一选项也会带来和Webpack的"),e("code",[t._v("resolve.symlinks")]),t._v("选项相反的行为（也就是说，将TypeScript的"),e("code",[t._v("preserveSymlinks")]),t._v("选项设置为"),e("code",[t._v("true")]),t._v("对应了将Webpack的"),e("code",[t._v("resolve.symlinks")]),t._v("选项设为"),e("code",[t._v("false")]),t._v("，反之亦然）。")]),t._v(" "),e("p",[t._v("在这一模式中，对于模块和包的引用（比如"),e("code",[t._v("import")]),t._v("语句和"),e("code",[t._v('/// <reference type=".." />')]),t._v("指令）都会以相对符号链接文件的位置被解析，而不是相对于符号链接解析到的路径。更具体的例子，可以参考"),e("a",{attrs:{href:"https://nodejs.org/api/cli.html#cli_preserve_symlinks",target:"_blank",rel:"noopener noreferrer"}},[t._v("Node.js网站的文档"),e("OutboundLink")],1),t._v("。")])])}),[],!1,null,null,null);s.default=r.exports}}]);