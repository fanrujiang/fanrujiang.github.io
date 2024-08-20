import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as e,e as a}from"./app-WQ1PjK-F.js";const i={},c=a(`<h1 id="宝塔nginx缓存清理" tabindex="-1"><a class="header-anchor" href="#宝塔nginx缓存清理" aria-hidden="true">#</a> 宝塔Nginx缓存清理</h1><p>在工作中使用宝塔部署项目时，我发现宝塔会奇怪地缓存接口的数据。经过排查，发现只有设置了响应头包含 <code>Cache-Control</code> 的接口才会被宝塔Nginx的反向代理缓存。</p><p>于是，我开始着手解决这个问题。</p><p>首先，我找到了宝塔Nginx中反向代理的配置文件和缓存目录。一旦确定了位置，解决思路也就清晰了。</p><h2 id="步骤一-删除缓存目录中的文件" tabindex="-1"><a class="header-anchor" href="#步骤一-删除缓存目录中的文件" aria-hidden="true">#</a> 步骤一：删除缓存目录中的文件</h2><p>反向代理的缓存目录位于：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>/www/server/nginx/proxy_cache_dir
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>要清除缓存，只需执行以下命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">rm</span> <span class="token parameter variable">-rf</span> /www/server/nginx/proxy_cache_dir/*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="步骤二-修改配置文件以禁止缓存" tabindex="-1"><a class="header-anchor" href="#步骤二-修改配置文件以禁止缓存" aria-hidden="true">#</a> 步骤二：修改配置文件以禁止缓存</h2><p>接下来，需要修改Nginx的配置文件，防止其继续缓存。在文件 <code>/www/server/nginx/conf/proxy.conf</code> 中找到 <code>proxy_cache cache_one;</code> 这一行，并将其注释掉：</p><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">nginx复制代码proxy_temp_path</span> /www/server/nginx/proxy_temp_dir</span><span class="token punctuation">;</span>

<span class="token directive"><span class="token keyword">proxy_cache_path</span> /www/server/nginx/proxy_cache_dir levels=1:2 keys_zone=cache_one:20m inactive=1d max_size=5g</span><span class="token punctuation">;</span>

<span class="token directive"><span class="token keyword">client_body_buffer_size</span> <span class="token number">512k</span></span><span class="token punctuation">;</span>

<span class="token directive"><span class="token keyword">proxy_connect_timeout</span> <span class="token number">60</span></span><span class="token punctuation">;</span>

<span class="token directive"><span class="token keyword">proxy_read_timeout</span> <span class="token number">60</span></span><span class="token punctuation">;</span>

<span class="token directive"><span class="token keyword">proxy_send_timeout</span> <span class="token number">60</span></span><span class="token punctuation">;</span>

<span class="token directive"><span class="token keyword">proxy_buffer_size</span> <span class="token number">32k</span></span><span class="token punctuation">;</span>

<span class="token directive"><span class="token keyword">proxy_buffers</span> <span class="token number">4</span> <span class="token number">64k</span></span><span class="token punctuation">;</span>

<span class="token directive"><span class="token keyword">proxy_busy_buffers_size</span> <span class="token number">128k</span></span><span class="token punctuation">;</span>

<span class="token directive"><span class="token keyword">proxy_temp_file_write_size</span> <span class="token number">128k</span></span><span class="token punctuation">;</span>

<span class="token directive"><span class="token keyword">proxy_next_upstream</span> error timeout invalid_header http_500 http_503 http_404</span><span class="token punctuation">;</span>

<span class="token comment">#proxy_cache cache_one;  # 注释掉，这样全局的缓存就关闭了</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在宝塔内对某个反向代理域名打开缓存开关时，<code>proxy_cache cache_one</code> 会自动添加到反向代理的配置代码中，此时缓存才会再次针对该反向代理域名生效。</p><p>通过上述步骤，我们成功地清除了宝塔Nginx的缓存，并防止其再次缓存不必要的数据。如果需要对某个特定域名进行缓存，可以在宝塔内单独开启缓存开关。</p><p>希望这篇文章能帮助到你，解决在宝塔Nginx缓存方面遇到的问题。</p>`,15),p=[c];function r(t,d){return s(),e("div",null,p)}const u=n(i,[["render",r],["__file","宝塔nginx缓存清理.html.vue"]]);export{u as default};
