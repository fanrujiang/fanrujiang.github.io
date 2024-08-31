const t=JSON.parse('{"key":"v-1410c4d2","path":"/art/SpringBoot%E9%9B%86%E6%88%90%E5%9B%BD%E9%99%85%E5%8C%96%E5%8A%9F%E8%83%BD.html","title":"SpringBoot集成国际化功能最佳实践","lang":"zh-CN","frontmatter":{"title":"SpringBoot集成国际化功能最佳实践","date":"2024-08-31T18:40:20.000Z","category":["技术分享"],"tag":["技术分享"],"description":"在构建多语言支持的 Web 应用程序时，国际化（i18n）是一个关键部分。Spring 提供了强大的国际化支持，但默认的 java.util.Locale 并不能满足所有场景的需求。为了支持更广泛的语言和区域格式，我们可以使用 ICU4J（International Components for Unicode for Java），这是一个功能强大的国际化库。","head":[["meta",{"property":"og:url","content":"https://www.fanliu.top/art/SpringBoot%E9%9B%86%E6%88%90%E5%9B%BD%E9%99%85%E5%8C%96%E5%8A%9F%E8%83%BD.html"}],["meta",{"property":"og:site_name","content":"FanFanの学习笔记"}],["meta",{"property":"og:title","content":"SpringBoot集成国际化功能最佳实践"}],["meta",{"property":"og:description","content":"在构建多语言支持的 Web 应用程序时，国际化（i18n）是一个关键部分。Spring 提供了强大的国际化支持，但默认的 java.util.Locale 并不能满足所有场景的需求。为了支持更广泛的语言和区域格式，我们可以使用 ICU4J（International Components for Unicode for Java），这是一个功能强大的国际化库。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-31T11:15:14.000Z"}],["meta",{"property":"article:author","content":"fanfan"}],["meta",{"property":"article:tag","content":"技术分享"}],["meta",{"property":"article:published_time","content":"2024-08-31T18:40:20.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-31T11:15:14.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"SpringBoot集成国际化功能最佳实践\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-08-31T18:40:20.000Z\\",\\"dateModified\\":\\"2024-08-31T11:15:14.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"fanfan\\",\\"url\\":\\"https://www.fanliu.top\\"}]}"]]},"headers":[{"level":3,"title":"0. 准备工作","slug":"_0-准备工作","link":"#_0-准备工作","children":[]},{"level":3,"title":"1. 引入 ICU4J 依赖","slug":"_1-引入-icu4j-依赖","link":"#_1-引入-icu4j-依赖","children":[]},{"level":3,"title":"2. 使用 ICU4J 替代 java.util.Locale","slug":"_2-使用-icu4j-替代-java-util-locale","link":"#_2-使用-icu4j-替代-java-util-locale","children":[]},{"level":3,"title":"3. 线程工具类 用来保存国际化信息","slug":"_3-线程工具类-用来保存国际化信息","link":"#_3-线程工具类-用来保存国际化信息","children":[]},{"level":3,"title":"4. 创建 I18nUtils 用于业务中调用","slug":"_4-创建-i18nutils-用于业务中调用","link":"#_4-创建-i18nutils-用于业务中调用","children":[]},{"level":3,"title":"5. 编写测试 controller 进行测试","slug":"_5-编写测试-controller-进行测试","link":"#_5-编写测试-controller-进行测试","children":[]},{"level":3,"title":"6. 扩展","slug":"_6-扩展","link":"#_6-扩展","children":[]}],"git":{"createdTime":1725102914000,"updatedTime":1725102914000,"contributors":[{"name":"fanfan","email":"1066643487@qq.com","commits":1}]},"readingTime":{"minutes":5.83,"words":1750},"filePathRelative":"art/SpringBoot集成国际化功能.md","localizedDate":"2024年8月31日","excerpt":"<p>在构建多语言支持的 Web 应用程序时，国际化（i18n）是一个关键部分。Spring 提供了强大的国际化支持，但默认的 <code>java.util.Locale</code> 并不能满足所有场景的需求。为了支持更广泛的语言和区域格式，我们可以使用 ICU4J（International Components for Unicode for Java），这是一个功能强大的国际化库。</p>\\n","autoDesc":true}');export{t as data};
