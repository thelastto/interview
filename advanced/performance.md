# 性能优化

降低请求量：合并资源，减少HTTP 请求数，minify / gzip 压缩，webP，图片lazyLoad。

加快请求速度：预解析DNS，减少域名数，并行加载，CDN 分发。

缓存：HTTP 协议缓存请求，离线缓存 manifest，离线数据缓存localStorage。

渲染：JS/CSS优化（避免使用CSS表达式），加载顺序（将CSS样式表放在顶部，把javascript放在底部），服务端渲染，pipeline。

