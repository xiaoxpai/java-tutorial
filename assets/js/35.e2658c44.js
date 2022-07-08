(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{352:function(t,a,n){"use strict";n.r(a);var e=n(6),r=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"zipkin-快速入门"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#zipkin-快速入门"}},[t._v("#")]),t._v(" Zipkin 快速入门")]),t._v(" "),a("p",[a("strong",[t._v("Zipkin 是一个基于 Java 开发的、开源的、分布式实时数据跟踪系统（Distributed Tracking System）")]),t._v("。它采集有助于解决服务架构中延迟问题的实时数据。")]),t._v(" "),a("p",[t._v("Zipkin 主要功能是聚集来自各个异构系统的实时监控数据。分布式跟踪系统还有其他比较成熟的实现，例如：Naver 的 Pinpoint、Apache 的 HTrace、阿里的鹰眼 Tracing、京东的 Hydra、新浪的 Watchman，美团点评的 CAT，skywalking 等。")]),t._v(" "),a("p",[t._v("Zipkin 基于 Google Dapper 的论文设计而来，由 Twitter 公司开发贡献。")]),t._v(" "),a("h2",{attrs:{id:"一、zipkin-简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、zipkin-简介"}},[t._v("#")]),t._v(" 一、Zipkin 简介")]),t._v(" "),a("h3",{attrs:{id:"特性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#特性"}},[t._v("#")]),t._v(" 特性")]),t._v(" "),a("p",[t._v("如果日志文件中有跟踪 ID，则可以直接跳至该跟踪 ID。 否则，您可以基于属性进行查询，例如服务，操作名称，标签和持续时间。 将为您总结一些有趣的数据，例如在服务中花费的时间百分比以及操作是否失败。")]),t._v(" "),a("p",[t._v("Zipkin UI 还提供了一个依赖关系图，该关系图显示了每个应用程序中跟踪了多少个请求。这对于识别聚合行为（包括错误路径或对不赞成使用的服务的调用）很有帮助。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/dunwu/images/dev/snap/20200211161706.png",alt:"Zipkin UI"}})]),t._v(" "),a("h3",{attrs:{id:"多平台"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多平台"}},[t._v("#")]),t._v(" 多平台")]),t._v(" "),a("p",[t._v("Zipkin 官方支持 C#、Go、Java、JavaScript、Ruby、Scala、PHP 语言。")]),t._v(" "),a("p",[t._v("除此以外，社区还贡献了多种其他语言的支持，详情可以参考官方文档："),a("a",{attrs:{href:"https://zipkin.io/pages/tracers_instrumentation.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Tracers and Instrumentation"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据"}},[t._v("#")]),t._v(" 数据")]),t._v(" "),a("p",[t._v("Zipkin 服务器捆绑了用于采集和存储数据的扩展。")]),t._v(" "),a("p",[t._v("默认情况下，数据可以通过 "),a("code",[t._v("Http")]),t._v("，"),a("code",[t._v("Kafka")]),t._v(" 、"),a("code",[t._v("RabbitMQ")]),t._v(" 或 RPC 传输。")]),t._v(" "),a("p",[t._v("并存储在内存中或 "),a("code",[t._v("MySQL")]),t._v("、"),a("code",[t._v("Cassandra")]),t._v(" 或 "),a("code",[t._v("Elasticsearch")]),t._v(" 中。")]),t._v(" "),a("p",[t._v("数据以 json 形式存储，可以参考："),a("a",{attrs:{href:"https://zipkin.io/zipkin-api/#/default/post_spans",target:"_blank",rel:"noopener noreferrer"}},[t._v("Zipkin 官方的 Swagger API"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/dunwu/images/dev/snap/20200211162055.png",alt:"Zipkin Swagger API"}})]),t._v(" "),a("h2",{attrs:{id:"二、zipkin-安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、zipkin-安装"}},[t._v("#")]),t._v(" 二、Zipkin 安装")]),t._v(" "),a("h3",{attrs:{id:"docker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker"}},[t._v("#")]),t._v(" Docker")]),t._v(" "),a("p",[t._v("Docker 启动方式：")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" run -d -p "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9411")]),t._v(":9411 openzipkin/zipkin\n")])])]),a("h3",{attrs:{id:"java"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#java"}},[t._v("#")]),t._v(" Java")]),t._v(" "),a("blockquote",[a("p",[t._v("注意：必须运行在 JDK8+ 环境")])]),t._v(" "),a("p",[t._v("Java 启动方式：")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -sSL https://zipkin.io/quickstart.sh "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v(" -s\njava -jar zipkin.jar\n")])])]),a("h3",{attrs:{id:"编译方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编译方式"}},[t._v("#")]),t._v(" 编译方式")]),t._v(" "),a("p",[t._v("适用于需要订制化的场景。")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# get the latest source")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/openzipkin/zipkin\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" zipkin\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Build the server and also make its dependencies")]),t._v("\n./mvnw -DskipTests --also-make -pl zipkin-server clean "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Run the server")]),t._v("\njava -jar ./zipkin-server/target/zipkin-server-*exec.jar\n")])])]),a("h2",{attrs:{id:"三、zipkin-架构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、zipkin-架构"}},[t._v("#")]),t._v(" 三、Zipkin 架构")]),t._v(" "),a("p",[t._v("ZipKin 可以分为两部分，")]),t._v(" "),a("ul",[a("li",[t._v("一部分是 Zipkin server，用来作为数据的采集存储、数据分析与展示；")]),t._v(" "),a("li",[t._v("另一部分是 Zipkin client 是 Zipkin 基于不同的语言及框架封装的一些列客户端工具，这些工具完成了追踪数据的生成与上报功能。")])]),t._v(" "),a("p",[t._v("架构如下：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/dunwu/images/dev/snap/20200211155836.png",alt:"Zipkin 架构"}})]),t._v(" "),a("h3",{attrs:{id:"zipkin-server"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#zipkin-server"}},[t._v("#")]),t._v(" Zipkin Server")]),t._v(" "),a("p",[t._v("Zipkin Server 主要包括四个模块：")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Collector")]),t._v(" - 负责采集客户端传输的数据。")]),t._v(" "),a("li",[a("strong",[t._v("Storage")]),t._v(" - 负责存储采集的数据。当前支持 Memory，MySQL，Cassandra，ElasticSearch 等，默认存储在内存中。")]),t._v(" "),a("li",[a("strong",[t._v("API（Query）")]),t._v(" - 负责查询 Storage 中存储的数据。提供简单的 JSON API 获取数据，主要提供给 web UI 使用。")]),t._v(" "),a("li",[a("strong",[t._v("UI")]),t._v(" - 提供简单的 web 界面。")])]),t._v(" "),a("p",[t._v("Instrumented Client 和 Instrumented Server，是指分布式架构中使用了 Trace 工具的两个应用，Client 会调用 Server 提供的服务，两者都会向 Zipkin 上报 Trace 相关信息。在 Client 和 Server 通过 Transport 上报 Trace 信息后，由 Zipkin 的 Collector 模块接收，并由 Storage 模块将数据存储在对应的存储介质中，然后 Zipkin 提供 API 供 UI 界面查询 Trace 跟踪信息。Non-Instrumented Server，指的是未使用 Trace 工具的 Server，显然它不会上报 Trace 信息。")]),t._v(" "),a("h3",{attrs:{id:"zipkin-client"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#zipkin-client"}},[t._v("#")]),t._v(" Zipkin Client")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Tracer")]),t._v(" - "),a("code",[t._v("Tracer")]),t._v(" 存在于你的应用中，它负责采集关于已发生操作的实时元数据。它们通常会检测库，因此对于用户是透明的。例如，已检测的 Web 服务器记录它何时接收到请求，以及何时发送响应。收集的跟踪数据称为跨度（Span）。")]),t._v(" "),a("li",[a("strong",[t._v("Instrumentation")]),t._v(" - Instrumentation 保证了生产环境的安全性和很少的开销。因此，它们仅在内部传播 ID，以告知接收方正在进行追踪。完成的 Span 将通过外部通信告知 Zipkin，类似于应用程序异步报告指标的方式。例如，当跟踪某个操作并且需要发出 http 请求时，会添加一些 header 来传播 ID。header 不用于发送详细信息，例如操作名称。")]),t._v(" "),a("li",[a("strong",[t._v("Reporter")]),t._v(" - 能够将数据发送到 Zipkin 的检测应用程序中的组件，被称为 Reporter。Reporter 有多种传输方式，可以将跟踪数据发送到 Zipkin 采集器，后者将跟踪数据持久化保存到存储中。稍后，API 会查询存储以向 UI 提供渲染数据。")])]),t._v(" "),a("p",[t._v("以下是 Zipkin 的一个示例工作流：")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("┌─────────────┐ ┌───────────────────────┐  ┌─────────────┐  ┌──────────────────┐\n│ User Code   │ │ Trace Instrumentation │  │ Http Client │  │ Zipkin Collector │\n└─────────────┘ └───────────────────────┘  └─────────────┘  └──────────────────┘\n       │                 │                         │                 │\n           ┌─────────┐\n       │ ──┤GET /foo ├─▶ │ ────┐                   │                 │\n           └─────────┘         │ record tags\n       │                 │ ◀───┘                   │                 │\n                           ────┐\n       │                 │     │ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" trace headers │                 │\n                           ◀───┘\n       │                 │ ────┐                   │                 │\n                               │ record timestamp\n       │                 │ ◀───┘                   │                 │\n                             ┌─────────────────┐\n       │                 │ ──┤GET /foo         ├─▶ │                 │\n                             │X-B3-TraceId: aa │     ────┐\n       │                 │   │X-B3-SpanId: 6b  │   │     │           │\n                             └─────────────────┘         │ invoke\n       │                 │                         │     │ request   │\n                                                         │\n       │                 │                         │     │           │\n                                 ┌────────┐          ◀───┘\n       │                 │ ◀─────┤200 OK  ├─────── │                 │\n                           ────┐ └────────┘\n       │                 │     │ record duration   │                 │\n            ┌────────┐     ◀───┘\n       │ ◀──┤200 OK  ├── │                         │                 │\n            └────────┘       ┌────────────────────────────────┐\n       │                 │ ──┤ asynchronously report span     ├────▶ │\n                             │                                │\n                             │"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("                               │\n                             │  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"traceId"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"aa"')]),t._v(",              │\n                             │  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"6b"')]),t._v(",                   │\n                             │  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"get"')]),t._v(",                │\n                             │  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"timestamp"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1483945573944000")]),t._v(",│\n                             │  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"duration"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("386000")]),t._v(",           │\n                             │  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"annotations"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("              │\n                             │--snip--                        │\n                             └────────────────────────────────┘\n")])])]),a("p",[t._v("Instrumented client 和 server 是分别使用了 ZipKin Client 的服务，Zipkin Client 会根据配置将追踪数据发送到 Zipkin Server 中进行数据存储、分析和展示。")]),t._v(" "),a("h2",{attrs:{id:"四、zipkin-客户端"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、zipkin-客户端"}},[t._v("#")]),t._v(" 四、Zipkin 客户端")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/openzipkin/brave",target:"_blank",rel:"noopener noreferrer"}},[t._v("Brave"),a("OutboundLink")],1),t._v(" 是 Java 版的 zipkin 客户端。")]),t._v(" "),a("p",[t._v("一般不会手动编写 Trace 相关的代码，Brave 提供可一些开箱即用的库，帮助我们追踪一些特定的请求。比如：dubbo、grpc、servlet、mysql、httpClient、kafka、springMVC 等。")]),t._v(" "),a("h2",{attrs:{id:"参考资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://zipkin.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Zipkin 官网"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/openzipkin/zipkin",target:"_blank",rel:"noopener noreferrer"}},[t._v("Zipkin Github"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/openzipkin/brave",target:"_blank",rel:"noopener noreferrer"}},[t._v("brave"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=r.exports}}]);