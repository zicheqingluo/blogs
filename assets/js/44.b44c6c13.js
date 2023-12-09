(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{492:function(e,v,t){"use strict";t.r(v);var _=t(1),a=Object(_.a)({},(function(){var e=this,v=e._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("h4",{attrs:{id:"v2和v3对比"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#v2和v3对比"}},[e._v("#")]),e._v(" v2和v3对比")]),e._v(" "),v("p",[e._v("etcdv3在v2基础上进行了改进和优化：")]),e._v(" "),v("ul",[v("li",[v("p",[e._v("使用 "),v("code",[e._v("gRPC")]),e._v("+"),v("code",[e._v("protobuf")]),e._v(" 取代 HTTP+JSON 通信，提高通信效率；另外通过gRPC gateway 来继续保持对 HTTPJSON 接口的支持。")])]),e._v(" "),v("li",[v("p",[e._v("使用更轻 级的基于"),v("code",[e._v("租约(lease)")]),e._v("的 key 自动过期机制，取代了基于TTL key 的自动过期机制")])]),e._v(" "),v("li",[v("p",[v("code",[e._v("观察者(watcher)")]),e._v("机制也进行了重新设计。etcd v2 的观察者机制是基于HTTP 长连接的事件驱动机制；而 etcd v3 的观察者机制是基于HTTP/2的server push ，并且对事件进行了多路复用（ multiplexing ）优化。")])]),e._v(" "),v("li",[v("p",[e._v("etcd v3 的数据模型也发生了较大的改变， "),v("code",[e._v("v2")]),e._v(" 是一个简单的 key")]),e._v(" "),v("p",[e._v("value 的"),v("code",[e._v("内存数据库")]),e._v("，而 "),v("code",[e._v("v3")]),e._v(" 则是支持事务和多版本并发控制的"),v("code",[e._v("磁盘数据库")]),e._v("。")])])]),e._v(" "),v("h4",{attrs:{id:"租约机制"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#租约机制"}},[e._v("#")]),e._v(" 租约机制")]),e._v(" "),v("p",[e._v("etcd v2 key 的自动过期机制是基于 "),v("code",[e._v("TTL")]),e._v(" 的：客户端可以为一个 key设置自动过期时间， 一旦 TTL 到了，服务端就会自动删除该 key。 如果客户端不想服务器端删除某个 key ，就需要定期去更新这个 key TTL 。")]),e._v(" "),v("blockquote",[v("p",[e._v("也就是说，即使整个集群都处于 闲状态，也会有很多客户端需要与服务器端进行定期通信以保证某个 key 不被自动删除。而且 TTL 是设置在 key 上的，那么对于客户想保留的 key ，"),v("strong",[e._v("客户端需要对每个 key 都进行定期更新，即使这些 key过期时间是一样的")]),e._v("。")])]),e._v(" "),v("p",[e._v("etcd v3 使用"),v("code",[e._v("租约(lease)机制")]),e._v("，替代了 TTL 的自动过期机制 用户可以创建 个租约，然后将这个租约与 key 关联起来 一旦一个租约过期， etcd v3 服务器端就会删除与这个租约关联的所有的 key。")]),e._v(" "),v("blockquote",[v("p",[v("strong",[e._v("如果多个 key的过期时间是一样的，那么这些 key 就可以共享一个租约")]),e._v("。这就大大减小了客户端请求的数量， 对于过期时间相同 ，共享了一个租约的所有 key ，客户端只 需要更新这个租约的过期时间即可 而不是像 etcd v2 样更新所有 key 的过期时间")])]),e._v(" "),v("h4",{attrs:{id:"观察者模式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#观察者模式"}},[e._v("#")]),e._v(" 观察者模式")]),e._v(" "),v("p",[e._v("观察者机制使得客户端可以监控一个 key 的变化，"),v("strong",[e._v("当 key 发生变化时，服务器端将通知客户端")]),e._v("，而不是让客户端定期向服务器端发送请求去轮询 key的变化。 etcd v2 的服务端对每个客户端的每个 watch 请求都维持着一 HTTP 长连接 如果数千个客户端 watch 了数千个 key ，那么 etcd v2 服务器端的 socket 和内存等资源很快就会被耗尽。")]),e._v(" "),v("p",[e._v("etcd v3 的改进方法是对来自于同一个客户端的 watch 请求进行了多路复用(multiplexing) 这样的话，同一个客户端只需要与服务器端维护一个 TCP 连接即可，这就大大减轻了服务器端的压力。")]),e._v(" "),v("h3",{attrs:{id:"参考"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[e._v("#")]),e._v(" 参考")]),e._v(" "),v("ul",[v("li",[e._v("[1]  "),v("a",{attrs:{href:"https://www.lixueduan.com/posts/etcd/03-v3-analyze/",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("etcd之v3API简单分析"),v("OutboundLink")],1)])])])}),[],!1,null,null,null);v.default=a.exports}}]);