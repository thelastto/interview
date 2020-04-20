# HTTP2

（这篇文章比较清楚：https://developers.google.com/web/fundamentals/performance/http2）

**HTTP/2** 是 [HTTP 网络协议](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP)的一个重要版本。 HTTP/2的主要目标是

1. 通过启用完整的请求和响应多路复用来减少 [延迟](https://developer.mozilla.org/zh-CN/docs/Glossary/延迟)
2. 通过有效压缩HTTP标头字段来最小化协议开销
3. 增加对请求优先级和服务器推送的支持。

为了达到减少 50% 页面加载时间的目标，SPDY 引入一个新的二进制分帧层，以实现请求和响应复用、优先级和标头压缩，目的是更有效地利用底层 TCP 连接；请参阅[延迟是性能瓶颈](https://hpbn.co/primer-on-web-performance/#latency-as-a-performance-bottleneck)。

## 二进制分帧层

![binary_framing_layer01](../images/binary_framing_layer01.svg)

HTTP/2 将 HTTP 协议通信分解为二进制编码帧的交换，这些帧对应着特定数据流中的消息。所有这些都在一个 TCP 连接内复用。 这是 HTTP/2 协议所有其他功能和性能优化的基础。

- 请求与响应复用

  - 在 HTTP/1.x 中，如果客户端要想发起多个并行请求以提升性能，则必须使用多个 TCP 连接（请参阅[使用多个 TCP 连接](https://hpbn.co/http1x/#using-multiple-tcp-connections)）。 这是 HTTP/1.x 交付模型的直接结果，该模型可以保证每个连接每次只交付一个响应（响应排队）。 更糟糕的是，这种模型也会导致队首阻塞，从而造成底层 TCP 连接的效率低下。

    HTTP/2 中新的二进制分帧层突破了这些限制，实现了完整的请求和响应复用：客户端和服务器可以将 HTTP 消息分解为互不依赖的帧，然后交错发送，最后再在另一端把它们重新组装起来。![multiplexing01](../images/multiplexing01.svg)

- 数据流优先级

## 服务器推送

所有服务器推送数据流都由 `PUSH_PROMISE` 帧发起，表明了服务器向客户端推送所述资源的意图，并且需要先于请求推送资源的响应数据传输。 这种传输顺序非常重要：客户端需要了解服务器打算推送哪些资源，以免为这些资源创建重复请求。 满足此要求的最简单策略是先于父响应（即，`DATA` 帧）发送所有 `PUSH_PROMISE` 帧，其中包含所承诺资源的 HTTP 标头。

## 标头压缩

每个 HTTP 传输都承载一组标头，这些标头说明了传输的资源及其属性。 在 HTTP/1.x 中，此元数据始终以纯文本形式，通常会给每个传输增加 500–800 字节的开销。如果使用 HTTP Cookie，增加的开销有时会达到上千字节。 （请参阅[测量和控制协议开销](https://hpbn.co/http1x/#measuring-and-controlling-protocol-overhead)。） 为了减少此开销和提升性能，HTTP/2 使用 HPACK 压缩格式压缩请求和响应标头元数据