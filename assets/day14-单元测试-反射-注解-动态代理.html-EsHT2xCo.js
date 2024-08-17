const e=JSON.parse('{"key":"v-6d5173e8","path":"/javaSE/day14-%E5%8D%95%E5%85%83%E6%B5%8B%E8%AF%95-%E5%8F%8D%E5%B0%84-%E6%B3%A8%E8%A7%A3-%E5%8A%A8%E6%80%81%E4%BB%A3%E7%90%86.html","title":"day14-单元测试-反射-注解-动态代理","lang":"zh-CN","frontmatter":{"title":"day14-单元测试-反射-注解-动态代理","date":"2021-02-07T15:46:30.000Z","category":["javaSE"],"tag":"java","description":"恭喜同学们，Java主要的知识我们其实已经学习得差不多了。今天同学们再把单元测试、反射、注解、动态代理学习完。Java的基础知识就算全齐活了。 首先，我们进入单元测试的学习。 一、单元测试 1.1 单元测试快速入门 所谓单元测试，就是针对最小的功能单元，编写测试代码对其进行正确性测试。 我们想想，咱们之前是怎么进行测试的呢？ 比如说我们写了一个学生管理...","head":[["meta",{"property":"og:url","content":"https://www.fanliu.top/javaSE/day14-%E5%8D%95%E5%85%83%E6%B5%8B%E8%AF%95-%E5%8F%8D%E5%B0%84-%E6%B3%A8%E8%A7%A3-%E5%8A%A8%E6%80%81%E4%BB%A3%E7%90%86.html"}],["meta",{"property":"og:site_name","content":"FanFanの学习笔记"}],["meta",{"property":"og:title","content":"day14-单元测试-反射-注解-动态代理"}],["meta",{"property":"og:description","content":"恭喜同学们，Java主要的知识我们其实已经学习得差不多了。今天同学们再把单元测试、反射、注解、动态代理学习完。Java的基础知识就算全齐活了。 首先，我们进入单元测试的学习。 一、单元测试 1.1 单元测试快速入门 所谓单元测试，就是针对最小的功能单元，编写测试代码对其进行正确性测试。 我们想想，咱们之前是怎么进行测试的呢？ 比如说我们写了一个学生管理..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-17T20:28:13.000Z"}],["meta",{"property":"article:author","content":"fanfan"}],["meta",{"property":"article:tag","content":"java"}],["meta",{"property":"article:published_time","content":"2021-02-07T15:46:30.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-17T20:28:13.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"day14-单元测试-反射-注解-动态代理\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-02-07T15:46:30.000Z\\",\\"dateModified\\":\\"2024-08-17T20:28:13.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"fanfan\\",\\"url\\":\\"https://www.fanliu.top\\"}]}"]]},"headers":[{"level":2,"title":"一、单元测试","slug":"一、单元测试","link":"#一、单元测试","children":[{"level":3,"title":"1.1 单元测试快速入门","slug":"_1-1-单元测试快速入门","link":"#_1-1-单元测试快速入门","children":[]},{"level":3,"title":"1.2 单元测试断言","slug":"_1-2-单元测试断言","link":"#_1-2-单元测试断言","children":[]},{"level":3,"title":"1.3 Junit框架的常用注解","slug":"_1-3-junit框架的常用注解","link":"#_1-3-junit框架的常用注解","children":[]}]},{"level":2,"title":"二、反射","slug":"二、反射","link":"#二、反射","children":[{"level":3,"title":"1.1 获取类的字节码","slug":"_1-1-获取类的字节码","link":"#_1-1-获取类的字节码","children":[]},{"level":3,"title":"1.2 获取类的构造器","slug":"_1-2-获取类的构造器","link":"#_1-2-获取类的构造器","children":[]},{"level":3,"title":"1.3 反射获取构造器的作用","slug":"_1-3-反射获取构造器的作用","link":"#_1-3-反射获取构造器的作用","children":[]},{"level":3,"title":"1.4 反射获取成员变量&使用","slug":"_1-4-反射获取成员变量-使用","link":"#_1-4-反射获取成员变量-使用","children":[]},{"level":3,"title":"1.5 反射获取成员方法","slug":"_1-5-反射获取成员方法","link":"#_1-5-反射获取成员方法","children":[]},{"level":3,"title":"1.6 反射的应用","slug":"_1-6-反射的应用","link":"#_1-6-反射的应用","children":[]}]},{"level":2,"title":"三、注解","slug":"三、注解","link":"#三、注解","children":[{"level":3,"title":"3.1 认识注解&定义注解","slug":"_3-1-认识注解-定义注解","link":"#_3-1-认识注解-定义注解","children":[]},{"level":3,"title":"3.2 元注解","slug":"_3-2-元注解","link":"#_3-2-元注解","children":[]},{"level":3,"title":"3.3 解析注解","slug":"_3-3-解析注解","link":"#_3-3-解析注解","children":[]},{"level":3,"title":"3.4 注解的应用场景","slug":"_3-4-注解的应用场景","link":"#_3-4-注解的应用场景","children":[]}]},{"level":2,"title":"四、动态代理","slug":"四、动态代理","link":"#四、动态代理","children":[{"level":3,"title":"4.1 动态代理介绍、准备功能","slug":"_4-1-动态代理介绍、准备功能","link":"#_4-1-动态代理介绍、准备功能","children":[]},{"level":3,"title":"4.2 生成动态代理对象","slug":"_4-2-生成动态代理对象","link":"#_4-2-生成动态代理对象","children":[]},{"level":3,"title":"4.3 动态代理应用","slug":"_4-3-动态代理应用","link":"#_4-3-动态代理应用","children":[]}]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"git":{"createdTime":1723926493000,"updatedTime":1723926493000,"contributors":[{"name":"fanfan","email":"1066643487@qq.com","commits":1}]},"readingTime":{"minutes":30.93,"words":9279},"filePathRelative":"javaSE/day14-单元测试-反射-注解-动态代理.md","localizedDate":"2021年2月7日","excerpt":"","autoDesc":true}');export{e as data};
