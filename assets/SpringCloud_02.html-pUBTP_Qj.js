const e=JSON.parse('{"key":"v-14869ae0","path":"/spring/SpringCloud/SpringCloud_02.html","title":"SpringCloud_02","lang":"zh-CN","frontmatter":{"title":"SpringCloud_02","date":"2024-08-18T23:06:39.000Z","icon":"/img/spring.svg","category":["SpringCloud"],"tag":["微服务","SpringCloud","Nacos","网关","跨域"],"description":"SpringCloud Gateway 微服务网关 Nacos 服务注册中心 Nacos 服务配置中心","head":[["meta",{"property":"og:url","content":"https://www.fanliu.top/spring/SpringCloud/SpringCloud_02.html"}],["meta",{"property":"og:site_name","content":"FanFanの学习笔记"}],["meta",{"property":"og:title","content":"SpringCloud_02"}],["meta",{"property":"og:description","content":"SpringCloud Gateway 微服务网关 Nacos 服务注册中心 Nacos 服务配置中心"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://www.fanliu.top/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-23T03:33:15.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"SpringCloud_02"}],["meta",{"property":"article:author","content":"fanfan"}],["meta",{"property":"article:tag","content":"微服务"}],["meta",{"property":"article:tag","content":"SpringCloud"}],["meta",{"property":"article:tag","content":"Nacos"}],["meta",{"property":"article:tag","content":"网关"}],["meta",{"property":"article:tag","content":"跨域"}],["meta",{"property":"article:published_time","content":"2024-08-18T23:06:39.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-23T03:33:15.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"SpringCloud_02\\",\\"image\\":[\\"https://www.fanliu.top/\\"],\\"datePublished\\":\\"2024-08-18T23:06:39.000Z\\",\\"dateModified\\":\\"2024-08-23T03:33:15.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"fanfan\\",\\"url\\":\\"https://www.fanliu.top\\"}]}"]]},"headers":[{"level":2,"title":"1 Nacos 服务注册","slug":"_1-nacos-服务注册","link":"#_1-nacos-服务注册","children":[{"level":3,"title":"1.1.认识和安装Nacos","slug":"_1-1-认识和安装nacos","link":"#_1-1-认识和安装nacos","children":[]},{"level":3,"title":"1.2.服务注册到nacos【重点】","slug":"_1-2-服务注册到nacos【重点】","link":"#_1-2-服务注册到nacos【重点】","children":[]},{"level":3,"title":"1.3.服务(集群配置)分级存储模型【重点】","slug":"_1-3-服务-集群配置-分级存储模型【重点】","link":"#_1-3-服务-集群配置-分级存储模型【重点】","children":[]},{"level":3,"title":"1.4.权重配置【了解】","slug":"_1-4-权重配置【了解】","link":"#_1-4-权重配置【了解】","children":[]},{"level":3,"title":"1.5.环境隔离【重点】","slug":"_1-5-环境隔离【重点】","link":"#_1-5-环境隔离【重点】","children":[]},{"level":3,"title":"1.6.Nacos与Eureka的区别【面试】","slug":"_1-6-nacos与eureka的区别【面试】","link":"#_1-6-nacos与eureka的区别【面试】","children":[]}]},{"level":2,"title":"2.Nacos配置管理","slug":"_2-nacos配置管理","link":"#_2-nacos配置管理","children":[{"level":3,"title":"2.1.统一配置管理【重点】","slug":"_2-1-统一配置管理【重点】","link":"#_2-1-统一配置管理【重点】","children":[]},{"level":3,"title":"2.2.配置热更新","slug":"_2-2-配置热更新","link":"#_2-2-配置热更新","children":[]},{"level":3,"title":"2.3.配置共享【了解】","slug":"_2-3-配置共享【了解】","link":"#_2-3-配置共享【了解】","children":[]},{"level":3,"title":"2.4.搭建Nacos集群【了解】","slug":"_2-4-搭建nacos集群【了解】","link":"#_2-4-搭建nacos集群【了解】","children":[]}]},{"level":2,"title":"3 微服务网关【重点】","slug":"_3-微服务网关【重点】","link":"#_3-微服务网关【重点】","children":[{"level":3,"title":"3.1 为什么需要网关","slug":"_3-1-为什么需要网关","link":"#_3-1-为什么需要网关","children":[]},{"level":3,"title":"3.2.gateway快速入门","slug":"_3-2-gateway快速入门","link":"#_3-2-gateway快速入门","children":[]},{"level":3,"title":"3.3 断言工厂","slug":"_3-3-断言工厂","link":"#_3-3-断言工厂","children":[]},{"level":3,"title":"3.4.过滤器工厂","slug":"_3-4-过滤器工厂","link":"#_3-4-过滤器工厂","children":[]},{"level":3,"title":"3.5.全局过滤器【重点】","slug":"_3-5-全局过滤器【重点】","link":"#_3-5-全局过滤器【重点】","children":[]},{"level":3,"title":"3.6.跨域问题【纯小抄】","slug":"_3-6-跨域问题【纯小抄】","link":"#_3-6-跨域问题【纯小抄】","children":[]}]},{"level":2,"title":"问题","slug":"问题","link":"#问题","children":[{"level":3,"title":"1. Nacos注册中心如何使用","slug":"_1-nacos注册中心如何使用","link":"#_1-nacos注册中心如何使用","children":[]},{"level":3,"title":"2. Nacos和Eureka的区别","slug":"_2-nacos和eureka的区别","link":"#_2-nacos和eureka的区别","children":[]},{"level":3,"title":"3. Nacos和Eureka有什么共同点","slug":"_3-nacos和eureka有什么共同点","link":"#_3-nacos和eureka有什么共同点","children":[]},{"level":3,"title":"4. 如何搭建Nacos配置中心","slug":"_4-如何搭建nacos配置中心","link":"#_4-如何搭建nacos配置中心","children":[]},{"level":3,"title":"5. 网关有什么用","slug":"_5-网关有什么用","link":"#_5-网关有什么用","children":[]},{"level":3,"title":"6. 如何搭建网关","slug":"_6-如何搭建网关","link":"#_6-如何搭建网关","children":[]},{"level":3,"title":"7. 路由过滤器的作用是什么","slug":"_7-路由过滤器的作用是什么","link":"#_7-路由过滤器的作用是什么","children":[]},{"level":3,"title":"8. GlobalFilter全局过滤器的作用是什么？","slug":"_8-globalfilter全局过滤器的作用是什么","link":"#_8-globalfilter全局过滤器的作用是什么","children":[]},{"level":3,"title":"9. 过滤器的执行顺序","slug":"_9-过滤器的执行顺序","link":"#_9-过滤器的执行顺序","children":[]},{"level":3,"title":"10. 什么是跨域？","slug":"_10-什么是跨域","link":"#_10-什么是跨域","children":[]},{"level":3,"title":"11. 如何解决跨域？","slug":"_11-如何解决跨域","link":"#_11-如何解决跨域","children":[]},{"level":3,"title":"12. 网关微服务中需要配置哪些跨域参数？","slug":"_12-网关微服务中需要配置哪些跨域参数","link":"#_12-网关微服务中需要配置哪些跨域参数","children":[]}]}],"git":{"createdTime":1724383995000,"updatedTime":1724383995000,"contributors":[{"name":"fanfan","email":"1066643487@qq.com","commits":1}]},"readingTime":{"minutes":23.56,"words":7068},"filePathRelative":"spring/SpringCloud/SpringCloud_02.md","localizedDate":"2024年8月18日","excerpt":"<ul>\\n<li>SpringCloud Gateway 微服务网关</li>\\n<li>Nacos 服务注册中心</li>\\n<li>Nacos 服务配置中心</li>\\n</ul>\\n","autoDesc":true}');export{e as data};
