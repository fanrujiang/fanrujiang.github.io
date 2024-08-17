import{_ as p}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as o,o as c,c as l,a as n,b as s,d as e,e as t}from"./app-FDinEN3F.js";const i="/assets/p687611-KNZTdRmE.png",u="/assets/1fe4dc3162dc4877bc784cee8d37a8d7tplv-k3u1fbpfcp-zoom-in-crop-mark1512000-3QxU2Wef.webp",r="/assets/a4eed8763a244cca8ff85088902d4d88tplv-k3u1fbpfcp-zoom-in-crop-mark1512000-pTEIcnua.webp",k="/assets/12bf8354ba8d4aff9057b58914b70a34tplv-k3u1fbpfcp-zoom-in-crop-mark1512000-VtBpPgtH.webp",d="/assets/006mowZngy1ftqn2egk5kg30860604g2-gJnri3qn.gif",m={},v=t('<h2 id="app一键登录-服务端集成" tabindex="-1"><a class="header-anchor" href="#app一键登录-服务端集成" aria-hidden="true">#</a> APP一键登录-服务端集成</h2><p>该篇 blog 主要记录笔者实现 app手机号一键登录 功能，集成的是阿里云号码认证服务，主要简单记录一下实现的过程：</p><figure><img src="'+i+'" alt="一键登录.png" tabindex="0" loading="lazy"><figcaption>一键登录.png</figcaption></figure><p>在记录一键登录实现逻辑之前，你应该了解一下阿里的<code>认证方案</code>、<code>一键登录</code>和<code>本机号校验</code>:</p>',4),b={href:"https://link.juejin.cn?target=https%3A%2F%2Fhelp.aliyun.com%2Fdocument_detail%2F405281.html",target:"_blank",rel:"noopener noreferrer"},h={href:"https://link.juejin.cn?target=https%3A%2F%2Fhelp.aliyun.com%2Fdocument_detail%2F405286.html",target:"_blank",rel:"noopener noreferrer"},g={href:"https://link.juejin.cn?target=https%3A%2F%2Fhelp.aliyun.com%2Fdocument_detail%2F405287.html",target:"_blank",rel:"noopener noreferrer"},f=n("h2",{id:"前提条件",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#前提条件","aria-hidden":"true"},"#"),s(" 前提条件")],-1),y={href:"https://link.juejin.cn?target=https%3A%2F%2Fhelp.aliyun.com%2Fdocument_detail%2F37195.html%23concept-gpr-axx-wdb",target:"_blank",rel:"noopener noreferrer"},_={href:"https://link.juejin.cn?target=https%3A%2F%2Fhelp.aliyun.com%2Fdocument_detail%2F37172.html%23concept-gpr-3bx-wdb",target:"_blank",rel:"noopener noreferrer"},w={href:"https://link.juejin.cn?target=https%3A%2F%2Fhelp.aliyun.com%2Fdocument_detail%2F48263.html",target:"_blank",rel:"noopener noreferrer"},M=n("h2",{id:"整体实现流程",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#整体实现流程","aria-hidden":"true"},"#"),s(" 整体实现流程")],-1),F=n("h3",{id:"步骤一-开通号码认证服务",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#步骤一-开通号码认证服务","aria-hidden":"true"},"#"),s(" 步骤一：开通号码认证服务")],-1),R={href:"https://link.juejin.cn?target=https%3A%2F%2Fwww.aliyun.com%2Fproduct%2Fdypns%3Fspm%3Da2c4g.11186623.0.0.2d7b1071pn3g3K",target:"_blank",rel:"noopener noreferrer"},A=n("li",null,"单击立即开通或访问产品控制台。",-1),x=n("li",null,"进入控制台首页，勾选我已阅读并同意《号码认证服务协议》。",-1),j=n("li",null,[s("单击立即开通，完成产品开通。"),n("img",{src:u,alt:"开通号码认证-框",loading:"lazy"})],-1),T=n("h3",{id:"步骤二-添加认证方案",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#步骤二-添加认证方案","aria-hidden":"true"},"#"),s(" 步骤二：添加认证方案")],-1),P={href:"https://link.juejin.cn?target=https%3A%2F%2Fhelp.aliyun.com%2Fdocument_detail%2F381012.htm%23task-2164806",target:"_blank",rel:"noopener noreferrer"},S=n("p",null,[n("strong",null,"认证方案管理"),s("：")],-1),q=n("p",null,[s("认证方案用于标识"),n("code",null,"App"),s("下的认证场景，一般"),n("code",null,"一个认证方案对应一个App包名/包签名或者BundleId"),s("。系统调用过程中需要使用对应的方案Code。本文为您介绍如何添加认证方案、修改相关配置如认证方式，以及删除认证方案。")],-1),I={href:"https://link.juejin.cn?target=https%3A%2F%2Fdypns.console.aliyun.com%2F%3Fspm%3D5176.20967111.J_5834642020.4.28e32fdazkYFYk%23%2Foverview",target:"_blank",rel:"noopener noreferrer"},C=n("li",null,[n("p",null,"在左侧导航栏上，选择号码认证服务 > 认证方案管理。")],-1),B=n("p",null,"根据相应功能填写信息，添加认证方案。",-1),O=n("p",null,"一键登录和本机号码校验、活体认证、短信认证：",-1),V=n("li",null,[n("p",null,[s("选择iOS或Android页签，再单击+添加认证方案。"),n("img",{src:r,alt:"认证方案管理",loading:"lazy"})])],-1),D=n("p",null,"填写方案名称、App名称等信息。Android操作系统需要填写应用包名及包签名，iOS操作系统需要填写BundleID。",-1),K={href:"https://link.juejin.cn?target=https%3A%2F%2Fhelp.aliyun.com%2Fdocument_detail%2F381012.htm%3Fspm%3Da2c4g.11186623.0.0.50061071yu38Zf%23section-86a-e3a-tgp",target:"_blank",rel:"noopener noreferrer"},L=n("p",null,"**",-1),N=n("p",null,[n("strong",null,"说明"),s(" 方案名称和App名称建议输入实际上线的App名称。")],-1),G=n("figure",null,[n("img",{src:k,alt:"多个功能认证方案-框",tabindex:"0",loading:"lazy"}),n("figcaption",null,"多个功能认证方案-框")],-1),E=t(`<h2 id="代码逻辑实现" tabindex="-1"><a class="header-anchor" href="#代码逻辑实现" aria-hidden="true">#</a> 代码逻辑实现</h2><h3 id="pom依赖" tabindex="-1"><a class="header-anchor" href="#pom依赖" aria-hidden="true">#</a> pom依赖</h3><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span> 
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.aliyun<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span> 
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>dypnsapi20170525<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span> 
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>1.0.2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span> 
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="核心接口" tabindex="-1"><a class="header-anchor" href="#核心接口" aria-hidden="true">#</a> 核心接口</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>    <span class="token doc-comment comment">/**
     * 调用GetMobile完成一键登录取号
     *
     * <span class="token keyword">@param</span> <span class="token parameter">accessToken</span> APP端SDK获取的登录token，必填
     * <span class="token keyword">@param</span> <span class="token parameter">outId</span>       外部流水号，非必填
     **/</span>
    <span class="token class-name">GetMobileResponse</span> <span class="token function">getMobile</span><span class="token punctuation">(</span><span class="token class-name">String</span> accessToken<span class="token punctuation">,</span> <span class="token class-name">String</span> outId<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 调用verifyMobile完成本机号码校验认证
     *
     * <span class="token keyword">@param</span> <span class="token parameter">accessCode</span>  APP端SDK获取的登录token，必填
     * <span class="token keyword">@param</span> <span class="token parameter">phoneNumber</span> 手机号，必填
     * <span class="token keyword">@param</span> <span class="token parameter">outId</span>       外部流水号，非必填
     **/</span>
    <span class="token class-name">VerifyMobileResponse</span> <span class="token function">verifyMobile</span><span class="token punctuation">(</span><span class="token class-name">String</span> accessCode<span class="token punctuation">,</span> <span class="token class-name">String</span> phoneNumber<span class="token punctuation">,</span> <span class="token class-name">String</span> outId<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="接口实现类" tabindex="-1"><a class="header-anchor" href="#接口实现类" aria-hidden="true">#</a> 接口实现类</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>    <span class="token doc-comment comment">/**
     * 使用AK&amp;SK初始化账号Client
     **/</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name"><span class="token namespace">com<span class="token punctuation">.</span>aliyun<span class="token punctuation">.</span>dypnsapi20170525<span class="token punctuation">.</span></span>Client</span> <span class="token function">createClient</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token class-name">StaticConfig</span> staticConfig <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StaticConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Config</span> config <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Config</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">setAccessKeyId</span><span class="token punctuation">(</span>staticConfig<span class="token punctuation">.</span><span class="token function">getAccessKeyId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">setAccessKeySecret</span><span class="token punctuation">(</span>staticConfig<span class="token punctuation">.</span><span class="token function">getAccessKeySecret</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 访问的域名</span>
        config<span class="token punctuation">.</span>endpoint <span class="token operator">=</span> <span class="token string">&quot;dypnsapi.aliyuncs.com&quot;</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token namespace">com<span class="token punctuation">.</span>aliyun<span class="token punctuation">.</span>dypnsapi20170525<span class="token punctuation">.</span></span>Client</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token doc-comment comment">/**
     * 调用GetMobile完成一键登录取号
     *
     * <span class="token keyword">@param</span> <span class="token parameter">accessToken</span> APP端SDK获取的登录token，必填
     * <span class="token keyword">@param</span> <span class="token parameter">outId</span>       外部流水号，非必填
     **/</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">GetMobileResponse</span> <span class="token function">getMobile</span><span class="token punctuation">(</span><span class="token class-name">String</span> accessToken<span class="token punctuation">,</span> <span class="token class-name">String</span> outId<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name"><span class="token namespace">com<span class="token punctuation">.</span>aliyun<span class="token punctuation">.</span>dypnsapi20170525<span class="token punctuation">.</span></span>Client</span> client<span class="token punctuation">;</span>
        <span class="token class-name">GetMobileResponse</span> response<span class="token punctuation">;</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            client <span class="token operator">=</span> <span class="token function">createClient</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">GetMobileRequest</span> mobileRequest <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">GetMobileRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            mobileRequest<span class="token punctuation">.</span><span class="token function">setAccessToken</span><span class="token punctuation">(</span>accessToken<span class="token punctuation">)</span><span class="token punctuation">;</span>
            mobileRequest<span class="token punctuation">.</span><span class="token function">setOutId</span><span class="token punctuation">(</span>outId<span class="token punctuation">)</span><span class="token punctuation">;</span>
            response <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">getMobile</span><span class="token punctuation">(</span>mobileRequest<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> response<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 调用verifyMobile完成本机号码校验认证
     *
     * <span class="token keyword">@param</span> <span class="token parameter">accessCode</span>  APP端SDK获取的登录token，必填
     * <span class="token keyword">@param</span> <span class="token parameter">phoneNumber</span> 手机号，必填
     * <span class="token keyword">@param</span> <span class="token parameter">outId</span>       外部流水号，非必填
     **/</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">VerifyMobileResponse</span> <span class="token function">verifyMobile</span><span class="token punctuation">(</span><span class="token class-name">String</span> accessCode<span class="token punctuation">,</span> <span class="token class-name">String</span> phoneNumber<span class="token punctuation">,</span> <span class="token class-name">String</span> outId<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name"><span class="token namespace">com<span class="token punctuation">.</span>aliyun<span class="token punctuation">.</span>dypnsapi20170525<span class="token punctuation">.</span></span>Client</span> client<span class="token punctuation">;</span>
        <span class="token class-name">VerifyMobileResponse</span> verifyMobileResponse<span class="token punctuation">;</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            client <span class="token operator">=</span> <span class="token function">createClient</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">VerifyMobileRequest</span> verifyMobileRequest <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VerifyMobileRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            verifyMobileRequest<span class="token punctuation">.</span><span class="token function">setAccessCode</span><span class="token punctuation">(</span>accessCode<span class="token punctuation">)</span><span class="token punctuation">;</span>
            verifyMobileRequest<span class="token punctuation">.</span><span class="token function">setPhoneNumber</span><span class="token punctuation">(</span>phoneNumber<span class="token punctuation">)</span><span class="token punctuation">;</span>
            verifyMobileRequest<span class="token punctuation">.</span><span class="token function">setOutId</span><span class="token punctuation">(</span>outId<span class="token punctuation">)</span><span class="token punctuation">;</span>
            verifyMobileResponse <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">verifyMobile</span><span class="token punctuation">(</span>verifyMobileRequest<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">return</span> verifyMobileResponse<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="controller控制器" tabindex="-1"><a class="header-anchor" href="#controller控制器" aria-hidden="true">#</a> controller控制器</h3><p>笔者在调用verifyMobile完成本机号码校验认证这个接口 做了修改 验证成功后走登录的逻辑给客户端返回token</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>    <span class="token doc-comment comment">/**
     * 阿里GetMobile - 一键登录取号
     * <span class="token keyword">@param</span> <span class="token parameter">aliToken</span> 阿里token信息
     */</span>
    <span class="token annotation punctuation">@PostMapping</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;getMobile&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">Result</span> <span class="token function">getMobile</span><span class="token punctuation">(</span><span class="token annotation punctuation">@RequestBody</span> <span class="token annotation punctuation">@Valid</span> <span class="token class-name">AppUserDTO</span><span class="token punctuation">.</span>aliToken aliToken<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">GetMobileResponse</span> mobile <span class="token operator">=</span> userService<span class="token punctuation">.</span><span class="token function">getMobile</span><span class="token punctuation">(</span>aliToken<span class="token punctuation">.</span><span class="token function">getAccessToken</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> aliToken<span class="token punctuation">.</span><span class="token function">getOutId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token class-name">Result</span><span class="token punctuation">.</span><span class="token function">ok</span><span class="token punctuation">(</span>mobile<span class="token punctuation">.</span><span class="token function">getBody</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 阿里GetMobile - 一键登录
     * <span class="token keyword">@param</span> <span class="token parameter">aliToken</span> 阿里token信息
     */</span>
    <span class="token annotation punctuation">@PostMapping</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;verifyMobile&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">Result</span> <span class="token function">verifyMobile</span><span class="token punctuation">(</span><span class="token annotation punctuation">@RequestBody</span> <span class="token annotation punctuation">@Valid</span> <span class="token class-name">AppUserDTO</span><span class="token punctuation">.</span>aliToken aliToken<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">VerifyMobileResponse</span> verifyMobileResponse <span class="token operator">=</span> userService<span class="token punctuation">.</span><span class="token function">verifyMobile</span><span class="token punctuation">(</span>aliToken<span class="token punctuation">.</span><span class="token function">getAccessToken</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> aliToken<span class="token punctuation">.</span><span class="token function">getPhoneNumber</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> aliToken<span class="token punctuation">.</span><span class="token function">getOutId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> code <span class="token operator">=</span> verifyMobileResponse<span class="token punctuation">.</span><span class="token function">getBody</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>code<span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">Objects</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>code<span class="token punctuation">,</span> <span class="token string">&quot;OK&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">AppUserDTO</span><span class="token punctuation">.</span>appLoginByPhone appLoginByPhone <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AppUserDTO</span><span class="token punctuation">.</span><span class="token function">appLoginByPhone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            appLoginByPhone<span class="token punctuation">.</span><span class="token function">setAccount</span><span class="token punctuation">(</span>aliToken<span class="token punctuation">.</span><span class="token function">getPhoneNumber</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">AppUserDTO</span><span class="token punctuation">.</span>appLoginRes appLoginRes <span class="token operator">=</span> userService<span class="token punctuation">.</span><span class="token function">getAppLoginRes</span><span class="token punctuation">(</span>appLoginByPhone<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>appLoginRes<span class="token punctuation">.</span><span class="token function">getSuccess</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token class-name">Result</span><span class="token punctuation">.</span><span class="token function">ok</span><span class="token punctuation">(</span>appLoginRes<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">return</span> <span class="token class-name">Result</span><span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>appLoginRes<span class="token punctuation">.</span><span class="token function">getMsg</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token class-name">Result</span><span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>verifyMobileResponse<span class="token punctuation">.</span><span class="token function">getBody</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>现如今 各大头部APP都已集成手机号一键登录 方便用户的同时 更节省成本，相比传统的手机短信验证码登录 成本节省巨大 ，这无疑是一种明智之举。</p><p>但我们也要考虑到一些不可忽视的问题</p><ol><li>在用户未插入手机卡的使用环境下</li><li>在用户连接 WiFi 的使用环境下</li></ol><p>所以在登录这方面 一键登录只是锦上添花 并不可完全替代 传统的短信验证码登录 ，权宜之计是 “我全都要”</p><figure><img src="`+d+'" alt="我全都要表情包12-" tabindex="0" loading="lazy"><figcaption>我全都要表情包12-</figcaption></figure><p>就酱，有需要交流的小伙伴可以联系我或留言</p>',17);function z(U,Z){const a=o("ExternalLinkIcon");return c(),l("div",null,[v,n("ul",null,[n("li",null,[n("a",b,[s("认证方案"),e(a)])]),n("li",null,[n("a",h,[s("GetMobile - 一键登录取号"),e(a)])]),n("li",null,[n("a",g,[s("VerifyMobile - 本机号码校验认证"),e(a)])])]),f,n("ul",null,[n("li",null,[s("您已注册阿里云账号。更多信息，请参见 "),n("a",y,[s("阿里云账号注册流程"),e(a)]),s("。")]),n("li",null,[s("您的阿里云账号已通过企业实名认证或个人实名认证。更多信息，请参见 "),n("a",_,[s("企业实名认证"),e(a)]),s(" 或 "),n("a",w,[s("个人实名认证"),e(a)]),s("。")])]),M,F,n("ol",null,[n("li",null,[s("访问"),n("a",R,[s("号码认证服务产品详情页"),e(a)]),s("。")]),A,x,j]),T,n("p",null,[s("具体操作，请参见 "),n("a",P,[s("认证方案管理"),e(a)]),s("。")]),S,q,n("ol",null,[n("li",null,[n("p",null,[s("登录"),n("a",I,[s("号码认证产品控制台"),e(a)]),s("。")])]),C,n("li",null,[B,n("ul",null,[n("li",null,[O,n("ol",null,[V,n("li",null,[D,n("p",null,[s("短信认证功能还需在认证方式一栏勾选短信验证码，绑定对应签名。建议使用您的App名称作为签名，提高签名审核通过率。若需要添加新的签名，可单击创建签名。若没有可用的短信签名，可绑定赠送的签名进行测试，待正式签名审核通过后再修改绑定签名，详情请参见"),n("a",K,[s("修改方案配置"),e(a)]),s("。")]),L,N,G])])])])])]),E])}const Y=p(m,[["render",z],["__file","APP一键登录-服务端集成.html.vue"]]);export{Y as default};
