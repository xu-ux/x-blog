(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{622:function(s,t,a){"use strict";a.r(t);var n=a(30),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"typescript-1-8"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#typescript-1-8"}},[s._v("#")]),s._v(" TypeScript 1.8")]),s._v(" "),a("p",[s._v("完整的破坏性改动列表请到这里查看:"),a("a",{attrs:{href:"https://github.com/Microsoft/TypeScript/issues?q=is%3Aissue+milestone%3A%22TypeScript+1.8%22+label%3A%22Breaking+Change%22+is%3Aclosed",target:"_blank",rel:"noopener noreferrer"}},[s._v("breaking change issues"),a("OutboundLink")],1),s._v("。")]),s._v(" "),a("h2",{attrs:{id:"现在生成模块代码时会带有-use-strict-头"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#现在生成模块代码时会带有-use-strict-头"}},[s._v("#")]),s._v(" 现在生成模块代码时会带有"),a("code",[s._v('"use strict";')]),s._v("头")]),s._v(" "),a("p",[s._v("在ES6模式下模块总是在严格模式下解析，对于生成目标为非ES6的却不是这样。从TypeScript 1.8开始，生成的模块将总为严格模式。这应该不会对现有的大部分代码产生影响，因为TypeScript把大多数因为严格模式而产生的错误当做编译时错误，但还是有一些在运行时才发生错误的TypeScript代码，比如赋值给"),a("code",[s._v("NaN")]),s._v("，现在将会直接报错。你可以参考"),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode",target:"_blank",rel:"noopener noreferrer"}},[s._v("MDN Article"),a("OutboundLink")],1),s._v("学习关于严格模式与非严格模式的区别。")]),s._v(" "),a("p",[s._v("若想禁用这个行为，在命令行里传"),a("code",[s._v("--noImplicitUseStrict")]),s._v("选项或在tsconfig.json文件里指定。")]),s._v(" "),a("h2",{attrs:{id:"从模块里导出非局部名称"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#从模块里导出非局部名称"}},[s._v("#")]),s._v(" 从模块里导出非局部名称")]),s._v(" "),a("p",[s._v("依据ES6/ES2015规范，从模块里导出非局部名称将会报错。")]),s._v(" "),a("p",[a("strong",[s._v("例子")])]),s._v(" "),a("div",{staticClass:"language-typescript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("Promise")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Error")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("strong",[s._v("推荐")])]),s._v(" "),a("p",[s._v("在导出之前，使用局部变量声明捕获那个全局名称。")]),s._v(" "),a("div",{staticClass:"language-typescript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" localPromise "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("Promise")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" localPromise "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("Promise")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"默认启用代码可达性-reachability-检查"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#默认启用代码可达性-reachability-检查"}},[s._v("#")]),s._v(" 默认启用代码可达性（Reachability）检查")]),s._v(" "),a("p",[s._v("TypeScript 1.8里，我们添加了一些"),a("a",{attrs:{href:"https://github.com/Microsoft/TypeScript/pull/4788",target:"_blank",rel:"noopener noreferrer"}},[s._v("可达性检查"),a("OutboundLink")],1),s._v("来阻止一些种类的错误。特别是：")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("检查代码的可达性（默认启用，可以通过"),a("code",[s._v("allowUnreachableCode")]),s._v("编译器选项禁用）")]),s._v(" "),a("div",{staticClass:"language-typescript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[s._v("   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("test1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n       "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n       "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// error here")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("test2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n       "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n           "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n       "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n       "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n           "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("throw")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Error")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"NYI"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n       "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n       "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" y "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// error here")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("检查标签是否被使用（默认启用，可以通过"),a("code",[s._v("allowUnusedLabels")]),s._v("编译器选项禁用）")]),s._v(" "),a("div",{staticClass:"language-typescript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[s._v("l"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// error will be reported - label `l` is unused")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" x"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("x "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// error will be reported - label `x` is unused")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("检查是否函数里所有带有返回值类型注解的代码路径都返回了值（默认启用，可以通过"),a("code",[s._v("noImplicitReturns")]),s._v("编译器选项禁用）")]),s._v(" "),a("div",{staticClass:"language-typescript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// error will be reported since function does not return anything explicitly when `x` is falsy.")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("number")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("检查控制流是否能进到switch语句的case里（默认禁用，可以通过"),a("code",[s._v("noFallthroughCasesInSwitch")]),s._v("编译器选项启用）。注意没有语句的case不会被检查。")]),s._v(" "),a("div",{staticClass:"language-typescript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("switch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// OK")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("case")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("case")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n       "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("switch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("case")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n       "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("case")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n       "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])])])]),s._v(" "),a("p",[s._v("如果你看到了这些错误，但是你认为这时的代码是合理的话，你可以通过编译选项来阻止报错。")]),s._v(" "),a("h2",{attrs:{id:"module不允许与-outfile一起出现-除非-module被指定为amd或system"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#module不允许与-outfile一起出现-除非-module被指定为amd或system"}},[s._v("#")]),s._v(" "),a("code",[s._v("--module")]),s._v("不允许与"),a("code",[s._v("--outFile")]),s._v("一起出现，除非 "),a("code",[s._v("--module")]),s._v("被指定为"),a("code",[s._v("amd")]),s._v("或"),a("code",[s._v("system")])]),s._v(" "),a("p",[s._v("之前使用模块指定这两个的时候，会生成空的"),a("code",[s._v("out")]),s._v("文件且不会报错。")]),s._v(" "),a("h2",{attrs:{id:"标准库里的dom-api变动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#标准库里的dom-api变动"}},[s._v("#")]),s._v(" 标准库里的DOM API变动")]),s._v(" "),a("ul",[a("li",[a("strong",[s._v("ImageData.data")]),s._v("现在的类型为"),a("code",[s._v("Uint8ClampedArray")]),s._v("而不是"),a("code",[s._v("number[]")]),s._v("。查看"),a("a",{attrs:{href:"https://github.com/Microsoft/TypeScript/issues/949",target:"_blank",rel:"noopener noreferrer"}},[s._v("#949"),a("OutboundLink")],1),s._v("。")]),s._v(" "),a("li",[a("strong",[s._v("HTMLSelectElement .options")]),s._v("现在的类型为"),a("code",[s._v("HTMLCollection")]),s._v("而不是"),a("code",[s._v("HTMLSelectElement")]),s._v("。查看"),a("a",{attrs:{href:"https://github.com/Microsoft/TypeScript/issues/1558",target:"_blank",rel:"noopener noreferrer"}},[s._v("#1558"),a("OutboundLink")],1),s._v("。")]),s._v(" "),a("li",[a("strong",[s._v("HTMLTableElement.createCaption")]),s._v("，"),a("strong",[s._v("HTMLTableElement.createTBody")]),s._v("，"),a("strong",[s._v("HTMLTableElement.createTFoot")]),s._v("，"),a("strong",[s._v("HTMLTableElement.createTHead")]),s._v("，"),a("strong",[s._v("HTMLTableElement.insertRow")]),s._v("，"),a("strong",[s._v("HTMLTableSectionElement.insertRow")]),s._v("和"),a("strong",[s._v("HTMLTableElement.insertRow")]),s._v("现在返回"),a("code",[s._v("HTMLTableRowElement")]),s._v("而不是"),a("code",[s._v("HTMLElement")]),s._v("。查看"),a("a",{attrs:{href:"https://github.com/Microsoft/TypeScript/issues/3583",target:"_blank",rel:"noopener noreferrer"}},[s._v("#3583"),a("OutboundLink")],1),s._v("。")]),s._v(" "),a("li",[a("strong",[s._v("HTMLTableRowElement.insertCell")]),s._v("现在返回"),a("code",[s._v("HTMLTableCellElement")]),s._v("而不是"),a("code",[s._v("HTMLElement")]),s._v("查看"),a("a",{attrs:{href:"https://github.com/Microsoft/TypeScript/issues/3583",target:"_blank",rel:"noopener noreferrer"}},[s._v("#3583"),a("OutboundLink")],1),s._v("。")]),s._v(" "),a("li",[a("strong",[s._v("IDBObjectStore.createIndex")]),s._v("和"),a("strong",[s._v("IDBDatabase.createIndex")]),s._v("第二个参数类型为"),a("code",[s._v("IDBObjectStoreParameters")]),s._v("而不是"),a("code",[s._v("any")]),s._v("。查看"),a("a",{attrs:{href:"https://github.com/Microsoft/TypeScript/issues/5932",target:"_blank",rel:"noopener noreferrer"}},[s._v("#5932"),a("OutboundLink")],1),s._v("。")]),s._v(" "),a("li",[a("strong",[s._v("DataTransferItemList.Item")]),s._v("返回值类型变为"),a("code",[s._v("DataTransferItem")]),s._v("而不是"),a("code",[s._v("File")]),s._v("。查看"),a("a",{attrs:{href:"https://github.com/Microsoft/TypeScript/issues/6106",target:"_blank",rel:"noopener noreferrer"}},[s._v("#6106"),a("OutboundLink")],1),s._v("。")]),s._v(" "),a("li",[a("strong",[s._v("Window.open")]),s._v("返回值类型变为"),a("code",[s._v("Window")]),s._v("而不是"),a("code",[s._v("any")]),s._v("。查看"),a("a",{attrs:{href:"https://github.com/Microsoft/TypeScript/issues/6418",target:"_blank",rel:"noopener noreferrer"}},[s._v("#6418"),a("OutboundLink")],1),s._v("。")]),s._v(" "),a("li",[a("strong",[s._v("WeakMap.clear")]),s._v("被移除。查看"),a("a",{attrs:{href:"https://github.com/Microsoft/TypeScript/issues/6500",target:"_blank",rel:"noopener noreferrer"}},[s._v("#6500"),a("OutboundLink")],1),s._v("。")])]),s._v(" "),a("h2",{attrs:{id:"在super-call之前不允许使用this"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在super-call之前不允许使用this"}},[s._v("#")]),s._v(" 在super-call之前不允许使用"),a("code",[s._v("this")])]),s._v(" "),a("p",[s._v("ES6不允许在构造函数声明里访问"),a("code",[s._v("this")]),s._v("。")]),s._v(" "),a("p",[s._v("比如：")]),s._v(" "),a("div",{staticClass:"language-typescript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("B")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("constructor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("that"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("any")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("C")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("B")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("constructor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("super")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// error;")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("D")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("B")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" _prop1"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("constructor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("_prop1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// error")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("super")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);