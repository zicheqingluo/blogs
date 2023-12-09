(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{468:function(s,a,t){"use strict";t.r(a);var n=t(1),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"go-基本命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#go-基本命令"}},[s._v("#")]),s._v(" Go 基本命令")]),s._v(" "),a("h4",{attrs:{id:"go-build"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#go-build"}},[s._v("#")]),s._v(" "),a("strong",[s._v("go build")])]),s._v(" "),a("p",[s._v("使用"),a("code",[s._v("go build")])]),s._v(" "),a("ol",[a("li",[a("p",[s._v("在项目目录下执行"),a("code",[s._v("go build")])])]),s._v(" "),a("li",[a("p",[s._v("在其他路径下执行"),a("code",[s._v("go build")]),s._v("， 需要在后面加上项目的路径（项目路径从GOPATH/src后开始写起，编译之后的可执行文件就保存在当前目录下）")])]),s._v(" "),a("li",[a("p",[a("code",[s._v("go build -o hello.exe")])])])]),s._v(" "),a("h4",{attrs:{id:"go-run"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#go-run"}},[s._v("#")]),s._v(" "),a("strong",[s._v("go run")])]),s._v(" "),a("p",[s._v("像执行脚本文件一样执行Go代码:"),a("code",[s._v("go run main.go")])]),s._v(" "),a("h4",{attrs:{id:"go-install"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#go-install"}},[s._v("#")]),s._v(" "),a("strong",[s._v("go install")])]),s._v(" "),a("p",[a("code",[s._v("go install")]),s._v("分为两步：")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("先编译得到一个可执行文件")])]),s._v(" "),a("li",[a("p",[s._v("将可执行文件拷贝到"),a("code",[s._v("GOPATH/bin")])])])]),s._v(" "),a("h4",{attrs:{id:"交叉编译"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#交叉编译"}},[s._v("#")]),s._v(" "),a("strong",[s._v("交叉编译")])]),s._v(" "),a("p",[s._v("Go支持跨平台编译")]),s._v(" "),a("p",[s._v("例如：在windows平台编译一个能在linux平台执行的可执行文件")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("SET "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("CGO_ENABLED")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("  // 禁用CGO\nSET "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GOOS")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("linux  // 目标平台是linux\nSET "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GOARCH")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("amd64  // 目标处理器架构是amd64\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("执行"),a("code",[s._v("go build")])]),s._v(" "),a("p",[s._v("Mac平台交叉编译：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("CGO_ENABLED")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GOOS")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("linux "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GOARCH")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("amd64 go build\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("CGO_ENABLED")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GOOS")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("windows "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GOARCH")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("amd64 go build\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"go语言文件的基本结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#go语言文件的基本结构"}},[s._v("#")]),s._v(" Go语言文件的基本结构")]),s._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"fmt"')]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 函数外只能防止标识符（变量\\常量\\函数\\类型）的声明")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// fmt.Println("Hello") // 非法')]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 程序的入口函数")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\tfmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Hello world!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("h2",{attrs:{id:"变量和常量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#变量和常量"}},[s._v("#")]),s._v(" 变量和常量")]),s._v(" "),a("h4",{attrs:{id:"变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#变量"}},[s._v("#")]),s._v(" "),a("strong",[s._v("变量")])]),s._v(" "),a("p",[s._v("Go语言中的变量必须先声明再使用,格式：")]),s._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" 变量名 变量类型\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("strong",[s._v("声明变量")])]),s._v(" "),a("p",[a("code",[s._v("var s1 string")]),s._v(":声明一个保存字符串类型数据的s1变量")]),s._v(" "),a("p",[a("strong",[s._v("声明并赋值")])]),s._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" 变量名 类型 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" 表达式\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" age "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//函数内部专属：")]),s._v("\nname3"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"zhangsan"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[a("strong",[s._v("类型推导")])]),s._v(" "),a("p",[s._v("有时候我们会将变量的类型省略，这个时候编译器会根据等号右边的值来推导变量的类型完成初始化。")]),s._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" name "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Q1mi"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" age "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[a("strong",[s._v("短变量声明")])]),s._v(" "),a("p",[s._v("在函数内部，可以使用更简略的 "),a("code",[s._v(":=")]),s._v(" 方式声明并初始化变量。")]),s._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("package")]),s._v(" main\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"fmt"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 全局变量m")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" m "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\tn "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("\n\tm "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("200")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 此处声明局部变量m")]),s._v("\n\tfmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("p",[a("strong",[s._v("匿名变量")])]),s._v(" "),a("p",[s._v("匿名变量用一个下划线"),a("code",[s._v("_")]),s._v("表示，例如：")]),s._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Q1mi"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\tx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("_")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("_")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" y "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\tfmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"x="')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\tfmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"y="')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("h4",{attrs:{id:"常量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常量"}},[s._v("#")]),s._v(" "),a("strong",[s._v("常量")])]),s._v(" "),a("p",[s._v("相对于变量，常量是恒定不变的值，多用于定义程序运行期间不会改变的那些值。 常量的声明和变量声明非常类似，只是把"),a("code",[s._v("var")]),s._v("换成了"),a("code",[s._v("const")]),s._v("，常量在定义的时候必须赋值。")]),s._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" pi "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.1415")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" e "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.7182")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h5",{attrs:{id:"iota"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#iota"}},[s._v("#")]),s._v(" "),a("strong",[s._v("iota")])]),s._v(" "),a("p",[a("code",[s._v("iota")]),s._v("是go语言的常量计数器，只能在常量的表达式中使用。")]),s._v(" "),a("p",[a("code",[s._v("iota")]),s._v("在const关键字出现时将被重置为0。const中每新增一行常量声明将使"),a("code",[s._v("iota")]),s._v("计数一次(iota可理解为const语句块中的行索引)。 使用iota能简化定义，在定义枚举时很有用。")]),s._v(" "),a("p",[s._v("举个例子：")]),s._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n\t\tn1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("iota")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//0")]),s._v("\n\t\tn2        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//1")]),s._v("\n\t\tn3        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//2")]),s._v("\n\t\tn4        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//3")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("两个要点：")]),s._v(" "),a("ol",[a("li",[a("code",[s._v("iota")]),s._v("在const关键字出现时将被重置为0")]),s._v(" "),a("li",[s._v("const中每新增一行常量声明，iota累加1")])]),s._v(" "),a("h4",{attrs:{id:"注意事项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注意事项"}},[s._v("#")]),s._v(" "),a("strong",[s._v("注意事项")])]),s._v(" "),a("ul",[a("li",[a("p",[s._v("变量名推荐使用驼峰式")])]),s._v(" "),a("li",[a("p",[s._v("变量必须先声明再使用")])]),s._v(" "),a("li",[a("p",[s._v("变量声明且赋值后必须使用")])])]),s._v(" "),a("h2",{attrs:{id:"基本数据类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本数据类型"}},[s._v("#")]),s._v(" 基本数据类型")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("整型")]),s._v(" "),a("p",[s._v("​\t无符号整型："),a("code",[s._v("uint8")]),s._v("、"),a("code",[s._v("uint16")]),s._v("、"),a("code",[s._v("uint32")]),s._v("、"),a("code",[s._v("uint64")])]),s._v(" "),a("p",[s._v("​\t带符号整型:"),a("code",[s._v("int8")]),s._v("、"),a("code",[s._v("int16")]),s._v("、"),a("code",[s._v("int32")]),s._v("、"),a("code",[s._v("int64")])]),s._v(" "),a("p",[s._v("​\t"),a("code",[s._v("uint")]),s._v("和"),a("code",[s._v("int")]),s._v(":具体是32位还是64位看操作系统")]),s._v(" "),a("p",[s._v("​\t"),a("code",[s._v("uintptr")]),s._v(":表示指针")])]),s._v(" "),a("li",[a("p",[s._v("浮点型")]),s._v(" "),a("p",[a("code",[s._v("float64")]),s._v("和"),a("code",[s._v("float32")])]),s._v(" "),a("p",[s._v("Go语言中浮点数默认是"),a("code",[s._v("float64")])])]),s._v(" "),a("li",[a("p",[s._v("复数")]),s._v(" "),a("p",[a("code",[s._v("complex128")]),s._v("和"),a("code",[s._v("complex64")])])]),s._v(" "),a("li",[a("p",[s._v("布尔值")]),s._v(" "),a("p",[a("code",[s._v("true")]),s._v("和"),a("code",[s._v("false")])]),s._v(" "),a("p",[s._v("不能和其他的类型做转换")])]),s._v(" "),a("li",[a("p",[s._v("字符串")]),s._v(" "),a("p",[s._v('"字符串"')])])]),s._v(" "),a("p",[a("strong",[s._v("字符串、字符、字节 都是什么？")])]),s._v(" "),a("ul",[a("li",[a("p",[s._v("字符串：双引号包裹的是字符串")])]),s._v(" "),a("li",[a("p",[s._v("字符：单引号包裹的是字符，单个字母、单个符号、单个文字")])]),s._v(" "),a("li",[a("p",[s._v("字节：1byte=8bit")])])]),s._v(" "),a("blockquote",[a("p",[s._v("go语言中字符串都是UTF8编码，UTF8编码中一个常用汉字一般占用3个字节。")])]),s._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 字符串")]),s._v("\ns "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Hello 沙河"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 单独的字母、汉字、符号表示一个字符")]),s._v("\nc1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token char"}},[s._v("'h'")]),s._v("\nc2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token char"}},[s._v("'1'")]),s._v("\nc3 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token char"}},[s._v("'沙'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 字节： 1字节=8Bit(8个二进制位)")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 1个字符‘A’=1个字节")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 1个utf8编码的汉字'沙'= 一般占3个字节")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("h4",{attrs:{id:"byte和rune"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#byte和rune"}},[s._v("#")]),s._v(" "),a("strong",[s._v("byte和rune")])]),s._v(" "),a("p",[s._v("Go 语言的字符有以下两种：")]),s._v(" "),a("ol",[a("li",[a("code",[s._v("uint8")]),s._v("类型，或者叫 byte 型，代表一个"),a("code",[s._v("ASCII码")]),s._v("字符。")]),s._v(" "),a("li",[a("code",[s._v("rune")]),s._v("类型，代表一个 "),a("code",[s._v("UTF-8字符")]),s._v("。")])]),s._v(" "),a("h2",{attrs:{id:"运算符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#运算符"}},[s._v("#")]),s._v(" 运算符")]),s._v(" "),a("h4",{attrs:{id:"算术运算符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#算术运算符"}},[s._v("#")]),s._v(" "),a("strong",[s._v("算术运算符")])]),s._v(" "),a("p",[s._v("+-*/")]),s._v(" "),a("h4",{attrs:{id:"逻辑运算符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#逻辑运算符"}},[s._v("#")]),s._v(" "),a("strong",[s._v("逻辑运算符")])]),s._v(" "),a("p",[a("code",[s._v("&&")]),s._v(" "),a("code",[s._v("||")]),s._v(" "),a("code",[s._v("!")])]),s._v(" "),a("h4",{attrs:{id:"位运算符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#位运算符"}},[s._v("#")]),s._v(" "),a("strong",[s._v("位运算符")])]),s._v(" "),a("p",[a("code",[s._v(">>")]),s._v(" "),a("code",[s._v("<<")]),s._v(" "),a("code",[s._v("|")]),s._v(" "),a("code",[s._v("^")]),s._v(" "),a("code",[s._v("&")])]),s._v(" "),a("h4",{attrs:{id:"赋值运算符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#赋值运算符"}},[s._v("#")]),s._v(" "),a("strong",[s._v("赋值运算符")])]),s._v(" "),a("p",[a("code",[s._v("=")]),s._v(" "),a("code",[s._v("+=")]),s._v(" 。。。")]),s._v(" "),a("p",[a("code",[s._v("++")]),s._v(" 和"),a("code",[s._v("--")]),s._v(" 是独立的语句，不属于赋值运算符")]),s._v(" "),a("h4",{attrs:{id:"比较运算符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#比较运算符"}},[s._v("#")]),s._v(" "),a("strong",[s._v("比较运算符")])]),s._v(" "),a("p",[a("code",[s._v("<")]),s._v(" "),a("code",[s._v("<=")]),s._v(" "),a("code",[s._v("!=")]),s._v(" 。。。")]),s._v(" "),a("h2",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[s._v("#")]),s._v(" 参考")]),s._v(" "),a("ul",[a("li",[s._v("[1]  "),a("a",{attrs:{href:"https://www.liwenzhou.com/posts/Go/golang-menu/",target:"_blank",rel:"nofollow noopener noreferrer"}},[s._v("Go语言学习之路"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=e.exports}}]);