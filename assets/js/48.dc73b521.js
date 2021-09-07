(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{500:function(s,t,e){"use strict";e.r(t);var a=e(28),n=Object(a.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"发布"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#发布"}},[s._v("#")]),s._v(" 发布")]),s._v(" "),e("p",[s._v("现在我们已经按照指南里的步骤写好了一个声明文件，是时候把它发布到 npm 了。\n有两种主要方式用来将声明文件发布到 npm：")]),s._v(" "),e("ol",[e("li",[s._v("与你的 npm 包捆绑在一起，或")]),s._v(" "),e("li",[s._v("发布到 npm 上的"),e("a",{attrs:{href:"https://www.npmjs.com/~types",target:"_blank",rel:"noopener noreferrer"}},[s._v("@types organization"),e("OutboundLink")],1),s._v("。")])]),s._v(" "),e("p",[s._v("如果声明文件是由你写的源码生成的，那么就将声明文件与源码一起发布。\nTypeScript 工程和 JavaScript 工程都可以使用"),e("a",{attrs:{href:"/tsconfig#declaration"}},[e("code",[s._v("--declaration")])]),s._v("选项来生成声明文件。")]),s._v(" "),e("p",[s._v("否则，我们推荐你将声明文件提交到 DefinitelyTyped，它会被发布到 npm 的"),e("code",[s._v("@types")]),s._v("里。")]),s._v(" "),e("h2",{attrs:{id:"包含声明文件到你的-npm-包"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#包含声明文件到你的-npm-包"}},[s._v("#")]),s._v(" 包含声明文件到你的 npm 包")]),s._v(" "),e("p",[s._v("如果你的包有一个主"),e("code",[s._v(".js")]),s._v("文件，你还需要在"),e("code",[s._v("package.json")]),s._v("里指定主声明文件。\n设置"),e("code",[s._v("types")]),s._v("属性指向捆绑在一起的声明文件。 比如：")]),s._v(" "),e("div",{staticClass:"language-json line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"name"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"awesome"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"author"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Vandelay Industries"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"version"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1.0.0"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"main"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./lib/main.js"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"types"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./lib/main.d.ts"')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("p",[s._v("注意"),e("code",[s._v('"typings"')]),s._v("与"),e("code",[s._v('"types"')]),s._v("具有相同的意义，也可以使用它。")]),s._v(" "),e("p",[s._v("同样要注意的是如果主声明文件名是"),e("code",[s._v("index.d.ts")]),s._v("并且位置在包的根目录里（与"),e("code",[s._v("index.js")]),s._v("并列），你就不需要使用"),e("code",[s._v('"types"')]),s._v("属性指定了。")]),s._v(" "),e("h2",{attrs:{id:"依赖"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#依赖"}},[s._v("#")]),s._v(" 依赖")]),s._v(" "),e("p",[s._v("所有的依赖是由 npm 管理的。\n确保所依赖的声明包都在"),e("code",[s._v("package.json")]),s._v("的"),e("code",[s._v('"dependencies"')]),s._v("里指明了。\n比如，假设我们写了一个包，它依赖于 Browserify 和 TypeScript。")]),s._v(" "),e("div",{staticClass:"language-json line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"name"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"browserify-typescript-extension"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"author"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Vandelay Industries"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"version"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1.0.0"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"main"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./lib/main.js"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"types"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./lib/main.d.ts"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"dependencies"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"browserify"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"latest"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"@types/browserify"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"latest"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"typescript"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"next"')]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br")])]),e("p",[s._v("这里，我们的包依赖于"),e("code",[s._v("browserify")]),s._v("和"),e("code",[s._v("typescript")]),s._v("包。 "),e("code",[s._v("browserify")]),s._v("没有把它的声明文件捆绑在它的 npm 包里，所以我们需要依赖于"),e("code",[s._v("@types/browserify")]),s._v("得到它的声明文件。\n而"),e("code",[s._v("typescript")]),s._v("则相反，它把声明文件放在了 npm 包里，因此我们不需要依赖额外的包。")]),s._v(" "),e("p",[s._v("我们的包要从这两个包里暴露出声明文件，因此"),e("code",[s._v("browserify-typescript-extension")]),s._v("的用户也需要这些依赖。 正因此，我们使用"),e("code",[s._v('"dependencies"')]),s._v("而不是"),e("code",[s._v('"devDependencies"')]),s._v("，否则用户将需要手动安装那些包。 如果我们只是在写一个命令行应用，并且我们的包不会被当做一个库使用的话，那么就可以使用"),e("code",[s._v("devDependencies")]),s._v("。")]),s._v(" "),e("h2",{attrs:{id:"危险信号"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#危险信号"}},[s._v("#")]),s._v(" 危险信号")]),s._v(" "),e("h3",{attrs:{id:"reference-path"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#reference-path"}},[s._v("#")]),s._v(" "),e("code",[s._v('/// <reference path="..." />')])]),s._v(" "),e("p",[e("em",[s._v("不要")]),s._v("在声明文件里使用"),e("code",[s._v('/// <reference path="..." />')]),s._v("。")]),s._v(" "),e("div",{staticClass:"language-ts line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-ts"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v('/// <reference path="../typescript/lib/typescriptServices.d.ts" />')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[e("em",[s._v("应该")]),s._v("使用"),e("code",[s._v('/// <reference types="..." />')]),s._v("代替")]),s._v(" "),e("div",{staticClass:"language-ts line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-ts"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v('/// <reference types="typescript" />')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("务必阅读"),e("RouterLink",{attrs:{to:"/blogs/Typescript/declaration-files/library-structures.html#利用依赖"}},[s._v("利用依赖")]),s._v("一节了解详情。")],1),s._v(" "),e("h3",{attrs:{id:"打包所依赖的声明"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#打包所依赖的声明"}},[s._v("#")]),s._v(" 打包所依赖的声明")]),s._v(" "),e("p",[s._v("如果你的类型声明依赖于另一个包：")]),s._v(" "),e("ul",[e("li",[e("em",[s._v("不要")]),s._v("把依赖的包放进你的包里，保持它们在各自的文件里。")]),s._v(" "),e("li",[e("em",[s._v("不要")]),s._v("将声明拷贝到你的包里。")]),s._v(" "),e("li",[e("em",[s._v("应该")]),s._v("依赖在 npm 上的类型声明包，如果依赖包没包含它自己的声明文件的话。")])]),s._v(" "),e("h2",{attrs:{id:"使用typesversions选择版本"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用typesversions选择版本"}},[s._v("#")]),s._v(" 使用"),e("code",[s._v("typesVersions")]),s._v("选择版本")]),s._v(" "),e("p",[s._v("当 TypeScript 打开一个"),e("code",[s._v("package.json")]),s._v("文件来决定要读取哪个文件，它首先会检查"),e("code",[s._v("typesVersions")]),s._v("字段。")]),s._v(" "),e("p",[s._v("带有"),e("code",[s._v("typesVersions")]),s._v("字段的"),e("code",[s._v("package.json")]),s._v("可能如下：")]),s._v(" "),e("div",{staticClass:"language-json line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"name"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"package-name"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"version"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1.0"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"types"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./index.d.ts"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"typesVersions"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('">=3.1"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"*"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ts3.1/*"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("p",[s._v("该"),e("code",[s._v("package.json")]),s._v("告诉 TypeScript 去检查当前正在运行的 TypeScript 版本。\n如果是 3.1 及以上版本，则会相对于"),e("code",[s._v("package.json")]),s._v("的位置来读取"),e("code",[s._v("ts3.1")]),s._v("目录的内容。\n这就是"),e("code",[s._v('{ "*": ["ts3.1/*"] }')]),s._v("的含义 - 如果你熟悉路径映射的话，它们是相似的工作方式。")]),s._v(" "),e("p",[s._v("上例中，如果我们从"),e("code",[s._v('"package-name"')]),s._v("导入，当 TypeScript 版本为 3.1 时，TypeScript 会尝试解析"),e("code",[s._v("[...]/node_modules/package-name/ts3.1/index.d.ts")]),s._v("（及其它相应路径）。\n如果导入的是"),e("code",[s._v("package-name/foo")]),s._v("，那么会尝试加载"),e("code",[s._v("[...]/node_modules/package-name/ts3.1/foo.d.ts")]),s._v("和"),e("code",[s._v("[...]/node_modules/package-name/ts3.1/foo/index.d.ts")]),s._v("。")]),s._v(" "),e("p",[s._v("那么如果不是在 TypeScript 3.1 环境中呢？\n如果"),e("code",[s._v("typesVersions")]),s._v("中的每个字段都无法匹配，TypeScript 会回退到"),e("code",[s._v("types")]),s._v("字段，因此在 TypeScript 3.0 及之前的版本中会加载"),e("code",[s._v("[...]/node_modules/package-name/index.d.ts")]),s._v("文件。")]),s._v(" "),e("h2",{attrs:{id:"匹配行为"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#匹配行为"}},[s._v("#")]),s._v(" 匹配行为")]),s._v(" "),e("p",[s._v("TypeScript 是根据 Node.js 的"),e("a",{attrs:{href:"https://github.com/npm/node-semver#ranges",target:"_blank",rel:"noopener noreferrer"}},[s._v("语言化版本"),e("OutboundLink")],1),s._v("来进行编译器及语言版本匹配的。")]),s._v(" "),e("h2",{attrs:{id:"存在多个字段"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#存在多个字段"}},[s._v("#")]),s._v(" 存在多个字段")]),s._v(" "),e("p",[e("code",[s._v("typesVersions")]),s._v("支持同时指定多个字段，每个字段都指定了匹配的范围。")]),s._v(" "),e("div",{staticClass:"language-json tsconfig line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"name"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"package-name"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"version"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1.0"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"types"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./index.d.ts"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"typesVersions"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('">=3.2"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"*"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ts3.2/*"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('">=3.1"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"*"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ts3.1/*"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br")])]),e("p",[s._v("由于指定的范围有发生重叠的潜在风险，因此声明文件的解析与指定的顺序是相关的。\n也就是说，虽然"),e("code",[s._v(">=3.2")]),s._v("和"),e("code",[s._v(">=3.1")]),s._v("都匹配 TypeScript 3.2 及以上版本，但调换顺序后会有不同的行为，因此上例不同于下例。")]),s._v(" "),e("div",{staticClass:"language-jsonc tsconfig line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('{\n    "name": "package-name",\n    "version": "1.0",\n    "types": "./index.d.ts",\n    "typesVersions": {\n        // NOTE: this doesn\'t work!\n        ">=3.1": { "*": ["ts3.1/*"] },\n        ">=3.2": { "*": ["ts3.2/*"] }\n    }\n}\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br")])]),e("h2",{attrs:{id:"发布到-types"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#发布到-types"}},[s._v("#")]),s._v(" 发布到"),e("a",{attrs:{href:"https://www.npmjs.com/~types",target:"_blank",rel:"noopener noreferrer"}},[s._v("@types"),e("OutboundLink")],1)]),s._v(" "),e("p",[e("a",{attrs:{href:"https://www.npmjs.com/~types",target:"_blank",rel:"noopener noreferrer"}},[s._v("@types"),e("OutboundLink")],1),s._v("里的包是使用"),e("a",{attrs:{href:"https://github.com/Microsoft/types-publisher",target:"_blank",rel:"noopener noreferrer"}},[s._v("types-publisher 工具"),e("OutboundLink")],1),s._v("从"),e("a",{attrs:{href:"https://github.com/DefinitelyTyped/DefinitelyTyped",target:"_blank",rel:"noopener noreferrer"}},[s._v("DefinitelyTyped"),e("OutboundLink")],1),s._v("里自动发布的。\n如果想让你的包发布为"),e("code",[s._v("@types")]),s._v("包，提交一个 pull request 到"),e("a",{attrs:{href:"https://github.com/DefinitelyTyped/DefinitelyTyped",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://github.com/DefinitelyTyped/DefinitelyTyped"),e("OutboundLink")],1),s._v("。\n更多详情请参考"),e("a",{attrs:{href:"http://definitelytyped.org/guides/contributing.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("contribution guidelines page"),e("OutboundLink")],1),s._v("。")])])}),[],!1,null,null,null);t.default=n.exports}}]);