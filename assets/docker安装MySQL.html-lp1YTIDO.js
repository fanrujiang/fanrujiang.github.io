import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e}from"./app-WQ1PjK-F.js";const l="/assets/image-20240627224328181-1zMt_qlT.png",i="/assets/image-20240627225413237-IBE8Cjz4.png",t="/assets/image-20240627225618358-rINm_VD4.png",c="/assets/image-20240627230207587-ZNgRrftz.png",p="/assets/image-20240627231411487-ZwNe59Kz.png",o={},d=e(`<h2 id="docker安装mysql-全网最佳教程" tabindex="-1"><a class="header-anchor" href="#docker安装mysql-全网最佳教程" aria-hidden="true">#</a> docker安装MySQL_全网最佳教程</h2><p>此教程适合用于企业项目中的 MySQL，配置注释详细全面，并准备了一键安装的脚本</p><h3 id="_1-使用命令拉取mysql" tabindex="-1"><a class="header-anchor" href="#_1-使用命令拉取mysql" aria-hidden="true">#</a> 1. 使用命令拉取mysql</h3><p>拉取mysql的命令为 <strong>docker pull mysql</strong> ，但是这样的话，docker会自动帮你拉取最新的版本的mysql，一般最好就是在mysql后面指定版本号，才能拉取到想要的版本。我这里选择拉取mysql5.7，命令如下</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> pull mysql:5.7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-检查下载的mysql镜像" tabindex="-1"><a class="header-anchor" href="#_2-检查下载的mysql镜像" aria-hidden="true">#</a> 2. 检查下载的mysql镜像</h3><p>我们可以使用如下命令检查当前下载好的镜像：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">docker</span> images
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="`+l+`" alt="image-20240627224328181" tabindex="0" loading="lazy"><figcaption>image-20240627224328181</figcaption></figure><h3 id="_3-创建对应映射挂载目录" tabindex="-1"><a class="header-anchor" href="#_3-创建对应映射挂载目录" aria-hidden="true">#</a> 3. 创建对应映射挂载目录</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /docker/mysql/conf/conf.d
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /docker/mysql/conf/mysql.conf.d
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /docker/mysql/data
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /docker/mysql/log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-运行docker命令初始化启动容器" tabindex="-1"><a class="header-anchor" href="#_4-运行docker命令初始化启动容器" aria-hidden="true">#</a> 4. 运行docker命令初始化启动容器</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-p</span> <span class="token number">3306</span>:3306 <span class="token parameter variable">--name</span> mysql <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /docker/mysql/log:/var/log/mysql <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /docker/mysql/data:/var/lib/mysql <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /docker/mysql/conf:/etc/mysql <span class="token punctuation">\\</span>
<span class="token parameter variable">-e</span> <span class="token assign-left variable">MYSQL_ROOT_PASSWORD</span><span class="token operator">=</span>fanfan <span class="token punctuation">\\</span>
<span class="token parameter variable">-d</span> mysql:5.7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+i+`" alt="image-20240627225413237" tabindex="0" loading="lazy"><figcaption>image-20240627225413237</figcaption></figure><p>运行命令查询是否启动成功（此命令查询正在运行的容器）</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">ps</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="`+t+`" alt="image-20240627225618358" tabindex="0" loading="lazy"><figcaption>image-20240627225618358</figcaption></figure><p>出现mysql的容器说明正常运行</p><h3 id="_5-在云服务器和防火墙开放对应端口" tabindex="-1"><a class="header-anchor" href="#_5-在云服务器和防火墙开放对应端口" aria-hidden="true">#</a> 5. 在云服务器和防火墙开放对应端口</h3><p>略</p><h3 id="_6-测试连接" tabindex="-1"><a class="header-anchor" href="#_6-测试连接" aria-hidden="true">#</a> 6. 测试连接</h3><p>略</p><h3 id="_7-查看mysql挂载的文件夹" tabindex="-1"><a class="header-anchor" href="#_7-查看mysql挂载的文件夹" aria-hidden="true">#</a> 7. 查看mysql挂载的文件夹</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /docker/mysql
ll
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+c+`" alt="image-20240627230207587" tabindex="0" loading="lazy"><figcaption>image-20240627230207587</figcaption></figure><h3 id="_8-修改mysql默认配置" tabindex="-1"><a class="header-anchor" href="#_8-修改mysql默认配置" aria-hidden="true">#</a> 8. 修改mysql默认配置</h3><ol><li><p>进入mysql 的挂载目录</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /docker/mysql/conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>通过vim命令创建配置文件 my.cnf</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> my.cnf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>复制插入一下配置并保存（可按需调整）</p><p>这个配置文件包含详细的注释，帮助你理解每个配置项的作用。确保根据你的实际需求和硬件资源进一步调整这些设置。</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">client</span><span class="token punctuation">]</span></span>
<span class="token comment"># 设置客户端的默认字符集为utf8</span>
<span class="token key attr-name">default-character-set</span><span class="token punctuation">=</span><span class="token value attr-value">utf8</span>

<span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">mysql</span><span class="token punctuation">]</span></span>
<span class="token comment"># 设置MySQL命令行工具的默认字符集为utf8</span>
<span class="token key attr-name">default-character-set</span><span class="token punctuation">=</span><span class="token value attr-value">utf8</span>

<span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">mysqld</span><span class="token punctuation">]</span></span>
<span class="token comment"># 个人设置</span>
<span class="token comment"># 设置默认存储引擎为InnoDB</span>
<span class="token key attr-name">default_storage_engine</span> <span class="token punctuation">=</span> <span class="token value attr-value">InnoDB</span>
<span class="token comment"># 表名大小写不敏感</span>
<span class="token key attr-name">lower_case_table_names</span> <span class="token punctuation">=</span> <span class="token value attr-value">1</span>

<span class="token comment"># 日志设置</span>
<span class="token comment"># 错误日志文件路径</span>
<span class="token key attr-name">log-error</span> <span class="token punctuation">=</span> <span class="token value attr-value">/var/log/mysql/error.log</span>
<span class="token comment"># 启用慢查询日志</span>
<span class="token key attr-name">slow-query-log</span> <span class="token punctuation">=</span> <span class="token value attr-value">1</span>
<span class="token comment"># 慢查询日志文件路径</span>
<span class="token key attr-name">slow-query-log-file</span> <span class="token punctuation">=</span> <span class="token value attr-value">/var/log/mysql/slow.log</span>
<span class="token comment"># 定义慢查询的时间阈值为10秒</span>
<span class="token key attr-name">long_query_time</span> <span class="token punctuation">=</span> <span class="token value attr-value">10</span>

<span class="token comment"># 性能优化设置</span>
<span class="token comment"># 设置关键缓冲区大小</span>
<span class="token key attr-name">key_buffer_size</span> <span class="token punctuation">=</span> <span class="token value attr-value">256M</span>
<span class="token comment"># 禁用查询缓存（MySQL 8.0后移除查询缓存）</span>
<span class="token key attr-name">query_cache_type</span> <span class="token punctuation">=</span> <span class="token value attr-value">0</span>
<span class="token comment"># 设置查询缓存的大小限制</span>
<span class="token key attr-name">query_cache_limit</span> <span class="token punctuation">=</span> <span class="token value attr-value">1M</span>
<span class="token comment"># 设置线程缓存大小</span>
<span class="token key attr-name">thread_cache_size</span> <span class="token punctuation">=</span> <span class="token value attr-value">16</span>
<span class="token comment"># 设置InnoDB缓冲池大小，根据可用内存调整，建议不超过总内存的70%</span>
<span class="token key attr-name">innodb_buffer_pool_size</span> <span class="token punctuation">=</span> <span class="token value attr-value">512M</span>
<span class="token comment"># 设置InnoDB日志文件大小</span>
<span class="token key attr-name">innodb_log_file_size</span> <span class="token punctuation">=</span> <span class="token value attr-value">128M</span>
<span class="token comment"># 平衡性能和数据安全性，生产环境可能需要设为1</span>
<span class="token key attr-name">innodb_flush_log_at_trx_commit</span> <span class="token punctuation">=</span> <span class="token value attr-value">2</span>
<span class="token comment"># 为每个表使用单独的表空间文件</span>
<span class="token key attr-name">innodb_file_per_table</span> <span class="token punctuation">=</span> <span class="token value attr-value">1</span>
<span class="token comment"># 设置最大连接数，根据实际需要调整</span>
<span class="token key attr-name">max_connections</span> <span class="token punctuation">=</span> <span class="token value attr-value">500</span>

<span class="token comment"># Innodb 设置</span>
<span class="token comment"># 使用直接I/O以减少操作系统的缓存冲突</span>
<span class="token key attr-name">innodb_flush_method</span> <span class="token punctuation">=</span> <span class="token value attr-value">O_DIRECT</span>
<span class="token comment"># 设置InnoDB的I/O容量，根据硬件性能调整</span>
<span class="token key attr-name">innodb_io_capacity</span> <span class="token punctuation">=</span> <span class="token value attr-value">2000</span>
<span class="token comment"># 设置InnoDB的读I/O线程数</span>
<span class="token key attr-name">innodb_read_io_threads</span> <span class="token punctuation">=</span> <span class="token value attr-value">4</span>
<span class="token comment"># 设置InnoDB的写I/O线程数</span>
<span class="token key attr-name">innodb_write_io_threads</span> <span class="token punctuation">=</span> <span class="token value attr-value">4</span>

<span class="token comment"># 内存设置</span>
<span class="token comment"># 设置表缓存大小，根据表数量调整</span>
<span class="token key attr-name">table_open_cache</span> <span class="token punctuation">=</span> <span class="token value attr-value">2000</span>
<span class="token comment"># 调整排序缓冲区大小，避免排序操作过多使用临时文件</span>
<span class="token key attr-name">sort_buffer_size</span> <span class="token punctuation">=</span> <span class="token value attr-value">4M</span>
<span class="token comment"># 调整连接缓冲区大小，优化连接操作</span>
<span class="token key attr-name">join_buffer_size</span> <span class="token punctuation">=</span> <span class="token value attr-value">4M</span>

<span class="token comment"># 查询优化</span>
<span class="token comment"># 调整临时表大小，避免使用磁盘临时表</span>
<span class="token key attr-name">tmp_table_size</span> <span class="token punctuation">=</span> <span class="token value attr-value">64M</span>
<span class="token comment"># 设置最大堆表大小</span>
<span class="token key attr-name">max_heap_table_size</span> <span class="token punctuation">=</span> <span class="token value attr-value">64M</span>
<span class="token comment"># 调整读缓冲区大小，优化全表扫描</span>
<span class="token key attr-name">read_buffer_size</span> <span class="token punctuation">=</span> <span class="token value attr-value">2M</span>
<span class="token comment"># 调整随机读缓冲区大小</span>
<span class="token key attr-name">read_rnd_buffer_size</span> <span class="token punctuation">=</span> <span class="token value attr-value">4M</span>

<span class="token comment"># 连接设置</span>
<span class="token comment"># 设置连接超时时间，释放不活跃的连接</span>
<span class="token key attr-name">wait_timeout</span> <span class="token punctuation">=</span> <span class="token value attr-value">600</span>
<span class="token comment"># 设置交互式连接超时时间</span>
<span class="token key attr-name">interactive_timeout</span> <span class="token punctuation">=</span> <span class="token value attr-value">600</span>

<span class="token comment"># 主从复制设置</span>
<span class="token comment"># 设置服务器唯一ID</span>
<span class="token key attr-name">server-id</span> <span class="token punctuation">=</span> <span class="token value attr-value">1</span>
<span class="token comment"># 设置二进制日志过期时间</span>
<span class="token key attr-name">expire_logs_days</span> <span class="token punctuation">=</span> <span class="token value attr-value">10</span>
<span class="token comment"># 启用二进制日志</span>
<span class="token key attr-name">log_bin</span> <span class="token punctuation">=</span> <span class="token value attr-value">/var/log/mysql/mysql-bin.log</span>
<span class="token comment"># 设置二进制日志格式</span>
<span class="token key attr-name">binlog_format</span> <span class="token punctuation">=</span> <span class="token value attr-value">ROW</span>
<span class="token comment"># 确保每次事务提交后同步二进制日志</span>
<span class="token key attr-name">sync_binlog</span> <span class="token punctuation">=</span> <span class="token value attr-value">1</span>

<span class="token comment"># 安全设置</span>
<span class="token comment"># 设置绑定地址为0.0.0.0，允许远程连接</span>
<span class="token key attr-name">bind-address</span> <span class="token punctuation">=</span> <span class="token value attr-value">0.0.0.0</span>
<span class="token comment"># 禁止DNS解析，提升性能</span>
skip-name-resolve
<span class="token comment"># 禁止符号链接，增加安全性</span>
skip-symbolic-links
<span class="token comment"># 禁用本地文件加载，防止安全漏洞</span>
<span class="token key attr-name">local-infile</span> <span class="token punctuation">=</span> <span class="token value attr-value">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>重启mysql的docker容器进行重载我们的配置</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> restart mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>进入docker中的mysql容器内部查看文件是否配置成功</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 1、进入操作台</span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> mysql /bin/bash
<span class="token comment"># 2、进入mysql配置文件目录</span>
<span class="token builtin class-name">cd</span> /etc/mysql/
<span class="token comment"># 3、列出文件</span>
<span class="token function">ls</span>
<span class="token comment"># 4、看一眼该文件</span>
<span class="token function">cat</span> my.cnf
<span class="token comment"># 5、没问题就退出</span>
<span class="token builtin class-name">exit</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+p+`" alt="image-20240627231411487" tabindex="0" loading="lazy"><figcaption>image-20240627231411487</figcaption></figure></li></ol><h3 id="_9-设置容器随docker自启动" tabindex="-1"><a class="header-anchor" href="#_9-设置容器随docker自启动" aria-hidden="true">#</a> 9. 设置容器随docker自启动</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 设置mysql每次开机随docker自启动</span>
<span class="token function">docker</span> update mysql <span class="token parameter variable">--restart</span><span class="token operator">=</span>always
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_10-懒人一键部署脚本" tabindex="-1"><a class="header-anchor" href="#_10-懒人一键部署脚本" aria-hidden="true">#</a> 10. 懒人一键部署脚本</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token comment"># 设置变量</span>
<span class="token assign-left variable">MYSQL_VERSION</span><span class="token operator">=</span><span class="token string">&quot;5.7&quot;</span>
<span class="token assign-left variable">MYSQL_CONTAINER_NAME</span><span class="token operator">=</span><span class="token string">&quot;mysql&quot;</span>
<span class="token assign-left variable">MYSQL_ROOT_PASSWORD</span><span class="token operator">=</span><span class="token string">&quot;fanfan&quot;</span>
<span class="token assign-left variable">MYSQL_CONF_DIR</span><span class="token operator">=</span><span class="token string">&quot;/docker/mysql/conf&quot;</span>
<span class="token assign-left variable">MYSQL_DATA_DIR</span><span class="token operator">=</span><span class="token string">&quot;/docker/mysql/data&quot;</span>
<span class="token assign-left variable">MYSQL_LOG_DIR</span><span class="token operator">=</span><span class="token string">&quot;/docker/mysql/log&quot;</span>
<span class="token assign-left variable">MY_CNF_FILE</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">$MYSQL_CONF_DIR</span>/my.cnf&quot;</span>

<span class="token comment"># 拉取 MySQL 镜像</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Pulling MySQL <span class="token variable">$MYSQL_VERSION</span> image...&quot;</span>
<span class="token function">docker</span> pull mysql:<span class="token variable">$MYSQL_VERSION</span>

<span class="token comment"># 创建映射挂载目录</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Creating directories for MySQL...&quot;</span>
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> <span class="token variable">$MYSQL_CONF_DIR</span>/conf.d
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> <span class="token variable">$MYSQL_CONF_DIR</span>/mysql.conf.d
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> <span class="token variable">$MYSQL_DATA_DIR</span>
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> <span class="token variable">$MYSQL_LOG_DIR</span>

<span class="token comment"># 创建 MySQL 配置文件</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Creating my.cnf file...&quot;</span>
<span class="token function">cat</span> <span class="token operator">&lt;&lt;</span><span class="token string">EOF<span class="token bash punctuation"> <span class="token operator">&gt;</span> <span class="token variable">$MY_CNF_FILE</span></span>
[client]
# 设置客户端的默认字符集为utf8
default-character-set=utf8

[mysql]
# 设置MySQL命令行工具的默认字符集为utf8
default-character-set=utf8

[mysqld]
# 个人设置
# 设置默认存储引擎为InnoDB
default_storage_engine = InnoDB
# 表名大小写不敏感
lower_case_table_names = 1

# 日志设置
# 错误日志文件路径
log-error = /var/log/mysql/error.log
# 启用慢查询日志
slow-query-log = 1
# 慢查询日志文件路径
slow-query-log-file = /var/log/mysql/slow.log
# 定义慢查询的时间阈值为10秒
long_query_time = 10

# 性能优化设置
# 设置关键缓冲区大小
key_buffer_size = 256M
# 禁用查询缓存（MySQL 8.0后移除查询缓存）
query_cache_type = 0
# 设置查询缓存的大小限制
query_cache_limit = 1M
# 设置线程缓存大小
thread_cache_size = 16
# 设置InnoDB缓冲池大小，根据可用内存调整，建议不超过总内存的70%
innodb_buffer_pool_size = 512M
# 设置InnoDB日志文件大小
innodb_log_file_size = 128M
# 平衡性能和数据安全性，生产环境可能需要设为1
innodb_flush_log_at_trx_commit = 2
# 为每个表使用单独的表空间文件
innodb_file_per_table = 1
# 设置最大连接数，根据实际需要调整
max_connections = 500

# Innodb 设置
# 使用直接I/O以减少操作系统的缓存冲突
innodb_flush_method = O_DIRECT
# 设置InnoDB的I/O容量，根据硬件性能调整
innodb_io_capacity = 2000
# 设置InnoDB的读I/O线程数
innodb_read_io_threads = 4
# 设置InnoDB的写I/O线程数
innodb_write_io_threads = 4

# 内存设置
# 设置表缓存大小，根据表数量调整
table_open_cache = 2000
# 调整排序缓冲区大小，避免排序操作过多使用临时文件
sort_buffer_size = 4M
# 调整连接缓冲区大小，优化连接操作
join_buffer_size = 4M

# 查询优化
# 调整临时表大小，避免使用磁盘临时表
tmp_table_size = 64M
# 设置最大堆表大小
max_heap_table_size = 64M
# 调整读缓冲区大小，优化全表扫描
read_buffer_size = 2M
# 调整随机读缓冲区大小
read_rnd_buffer_size = 4M

# 连接设置
# 设置连接超时时间，释放不活跃的连接
wait_timeout = 600
# 设置交互式连接超时时间
interactive_timeout = 600

# 主从复制设置
# 设置服务器唯一ID
server-id = 1
# 设置二进制日志过期时间
expire_logs_days = 10
# 启用二进制日志
log_bin = /var/log/mysql/mysql-bin.log
# 设置二进制日志格式
binlog_format = ROW
# 确保每次事务提交后同步二进制日志
sync_binlog = 1

# 安全设置
# 设置绑定地址为0.0.0.0，允许远程连接
bind-address = 0.0.0.0
# 禁止DNS解析，提升性能
skip-name-resolve
# 禁止符号链接，增加安全性
skip-symbolic-links
# 禁用本地文件加载，防止安全漏洞
local-infile = 0
EOF</span>

<span class="token comment"># 运行 Docker 命令启动 MySQL 容器</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Starting MySQL container...&quot;</span>
<span class="token function">docker</span> run <span class="token parameter variable">-p</span> <span class="token number">3306</span>:3306 <span class="token parameter variable">--name</span> <span class="token variable">$MYSQL_CONTAINER_NAME</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> <span class="token variable">$MYSQL_LOG_DIR</span>:/var/log/mysql <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> <span class="token variable">$MYSQL_DATA_DIR</span>:/var/lib/mysql <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> <span class="token variable">$MYSQL_CONF_DIR</span>:/etc/mysql <span class="token punctuation">\\</span>
<span class="token parameter variable">-e</span> <span class="token assign-left variable">MYSQL_ROOT_PASSWORD</span><span class="token operator">=</span><span class="token variable">$MYSQL_ROOT_PASSWORD</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-d</span> mysql:<span class="token variable">$MYSQL_VERSION</span>

<span class="token comment"># 设置 MySQL 容器随 Docker 自启动</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Setting MySQL container to restart always...&quot;</span>
<span class="token function">docker</span> update <span class="token variable">$MYSQL_CONTAINER_NAME</span> <span class="token parameter variable">--restart</span><span class="token operator">=</span>always

<span class="token comment"># 检查 MySQL 容器状态</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Checking MySQL container status...&quot;</span>
<span class="token function">docker</span> <span class="token function">ps</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token variable">$MYSQL_CONTAINER_NAME</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;MySQL setup completed successfully.&quot;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复制保存上述脚本为 <code>setup_mysql.sh</code> 文件，并赋予执行权限：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">chmod</span> +x setup_mysql.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后运行脚本：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>./setup_mysql.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>该脚本将自动完成 MySQL 镜像拉取、目录创建、配置文件生成、容器启动和自启动配置</p><h3 id="_11-docker-compose部署" tabindex="-1"><a class="header-anchor" href="#_11-docker-compose部署" aria-hidden="true">#</a> 11. docker-compose部署</h3><h4 id="_1-创建初始文件夹" tabindex="-1"><a class="header-anchor" href="#_1-创建初始文件夹" aria-hidden="true">#</a> 1. 创建初始文件夹</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mkdir -p /docker/mysql/conf/conf.d
mkdir -p /docker/mysql/conf/mysql.conf.d
mkdir -p /docker/mysql/data
mkdir -p /docker/mysql/log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-创建-my-cnf" tabindex="-1"><a class="header-anchor" href="#_2-创建-my-cnf" aria-hidden="true">#</a> 2. 创建 <code>my.cnf</code></h4><p>在 <code>/docker/mysql/conf</code> 目录中创建一个名为 <code>my.cnf</code> 的文件，内容如下：</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">client</span><span class="token punctuation">]</span></span>
<span class="token comment"># 设置客户端的默认字符集为utf8</span>
<span class="token key attr-name">default-character-set</span><span class="token punctuation">=</span><span class="token value attr-value">utf8</span>

<span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">mysql</span><span class="token punctuation">]</span></span>
<span class="token comment"># 设置MySQL命令行工具的默认字符集为utf8</span>
<span class="token key attr-name">default-character-set</span><span class="token punctuation">=</span><span class="token value attr-value">utf8</span>

<span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">mysqld</span><span class="token punctuation">]</span></span>
<span class="token comment"># 个人设置</span>
<span class="token comment"># 设置默认存储引擎为InnoDB</span>
<span class="token key attr-name">default_storage_engine</span> <span class="token punctuation">=</span> <span class="token value attr-value">InnoDB</span>
<span class="token comment"># 表名大小写不敏感</span>
<span class="token key attr-name">lower_case_table_names</span> <span class="token punctuation">=</span> <span class="token value attr-value">1</span>

<span class="token comment"># 日志设置</span>
<span class="token comment"># 错误日志文件路径</span>
<span class="token key attr-name">log-error</span> <span class="token punctuation">=</span> <span class="token value attr-value">/var/log/mysql/error.log</span>
<span class="token comment"># 启用慢查询日志</span>
<span class="token key attr-name">slow-query-log</span> <span class="token punctuation">=</span> <span class="token value attr-value">1</span>
<span class="token comment"># 慢查询日志文件路径</span>
<span class="token key attr-name">slow-query-log-file</span> <span class="token punctuation">=</span> <span class="token value attr-value">/var/log/mysql/slow.log</span>
<span class="token comment"># 定义慢查询的时间阈值为10秒</span>
<span class="token key attr-name">long_query_time</span> <span class="token punctuation">=</span> <span class="token value attr-value">10</span>

<span class="token comment"># 性能优化设置</span>
<span class="token comment"># 设置关键缓冲区大小</span>
<span class="token key attr-name">key_buffer_size</span> <span class="token punctuation">=</span> <span class="token value attr-value">256M</span>
<span class="token comment"># 禁用查询缓存（MySQL 8.0后移除查询缓存）</span>
<span class="token key attr-name">query_cache_type</span> <span class="token punctuation">=</span> <span class="token value attr-value">0</span>
<span class="token comment"># 设置查询缓存的大小限制</span>
<span class="token key attr-name">query_cache_limit</span> <span class="token punctuation">=</span> <span class="token value attr-value">1M</span>
<span class="token comment"># 设置线程缓存大小</span>
<span class="token key attr-name">thread_cache_size</span> <span class="token punctuation">=</span> <span class="token value attr-value">16</span>
<span class="token comment"># 设置InnoDB缓冲池大小，根据可用内存调整，建议不超过总内存的70%</span>
<span class="token key attr-name">innodb_buffer_pool_size</span> <span class="token punctuation">=</span> <span class="token value attr-value">512M</span>
<span class="token comment"># 设置InnoDB日志文件大小</span>
<span class="token key attr-name">innodb_log_file_size</span> <span class="token punctuation">=</span> <span class="token value attr-value">128M</span>
<span class="token comment"># 平衡性能和数据安全性，生产环境可能需要设为1</span>
<span class="token key attr-name">innodb_flush_log_at_trx_commit</span> <span class="token punctuation">=</span> <span class="token value attr-value">2</span>
<span class="token comment"># 为每个表使用单独的表空间文件</span>
<span class="token key attr-name">innodb_file_per_table</span> <span class="token punctuation">=</span> <span class="token value attr-value">1</span>
<span class="token comment"># 设置最大连接数，根据实际需要调整</span>
<span class="token key attr-name">max_connections</span> <span class="token punctuation">=</span> <span class="token value attr-value">500</span>

<span class="token comment"># Innodb 设置</span>
<span class="token comment"># 使用直接I/O以减少操作系统的缓存冲突</span>
<span class="token key attr-name">innodb_flush_method</span> <span class="token punctuation">=</span> <span class="token value attr-value">O_DIRECT</span>
<span class="token comment"># 设置InnoDB的I/O容量，根据硬件性能调整</span>
<span class="token key attr-name">innodb_io_capacity</span> <span class="token punctuation">=</span> <span class="token value attr-value">2000</span>
<span class="token comment"># 设置InnoDB的读I/O线程数</span>
<span class="token key attr-name">innodb_read_io_threads</span> <span class="token punctuation">=</span> <span class="token value attr-value">4</span>
<span class="token comment"># 设置InnoDB的写I/O线程数</span>
<span class="token key attr-name">innodb_write_io_threads</span> <span class="token punctuation">=</span> <span class="token value attr-value">4</span>

<span class="token comment"># 内存设置</span>
<span class="token comment"># 设置表缓存大小，根据表数量调整</span>
<span class="token key attr-name">table_open_cache</span> <span class="token punctuation">=</span> <span class="token value attr-value">2000</span>
<span class="token comment"># 调整排序缓冲区大小，避免排序操作过多使用临时文件</span>
<span class="token key attr-name">sort_buffer_size</span> <span class="token punctuation">=</span> <span class="token value attr-value">4M</span>
<span class="token comment"># 调整连接缓冲区大小，优化连接操作</span>
<span class="token key attr-name">join_buffer_size</span> <span class="token punctuation">=</span> <span class="token value attr-value">4M</span>

<span class="token comment"># 查询优化</span>
<span class="token comment"># 调整临时表大小，避免使用磁盘临时表</span>
<span class="token key attr-name">tmp_table_size</span> <span class="token punctuation">=</span> <span class="token value attr-value">64M</span>
<span class="token comment"># 设置最大堆表大小</span>
<span class="token key attr-name">max_heap_table_size</span> <span class="token punctuation">=</span> <span class="token value attr-value">64M</span>
<span class="token comment"># 调整读缓冲区大小，优化全表扫描</span>
<span class="token key attr-name">read_buffer_size</span> <span class="token punctuation">=</span> <span class="token value attr-value">2M</span>
<span class="token comment"># 调整随机读缓冲区大小</span>
<span class="token key attr-name">read_rnd_buffer_size</span> <span class="token punctuation">=</span> <span class="token value attr-value">4M</span>

<span class="token comment"># 连接设置</span>
<span class="token comment"># 设置连接超时时间，释放不活跃的连接</span>
<span class="token key attr-name">wait_timeout</span> <span class="token punctuation">=</span> <span class="token value attr-value">600</span>
<span class="token comment"># 设置交互式连接超时时间</span>
<span class="token key attr-name">interactive_timeout</span> <span class="token punctuation">=</span> <span class="token value attr-value">600</span>

<span class="token comment"># 主从复制设置</span>
<span class="token comment"># 设置服务器唯一ID</span>
<span class="token key attr-name">server-id</span> <span class="token punctuation">=</span> <span class="token value attr-value">1</span>
<span class="token comment"># 设置二进制日志过期时间</span>
<span class="token key attr-name">expire_logs_days</span> <span class="token punctuation">=</span> <span class="token value attr-value">10</span>
<span class="token comment"># 启用二进制日志</span>
<span class="token key attr-name">log_bin</span> <span class="token punctuation">=</span> <span class="token value attr-value">/var/log/mysql/mysql-bin.log</span>
<span class="token comment"># 设置二进制日志格式</span>
<span class="token key attr-name">binlog_format</span> <span class="token punctuation">=</span> <span class="token value attr-value">ROW</span>
<span class="token comment"># 确保每次事务提交后同步二进制日志</span>
<span class="token key attr-name">sync_binlog</span> <span class="token punctuation">=</span> <span class="token value attr-value">1</span>

<span class="token comment"># 安全设置</span>
<span class="token comment"># 设置绑定地址为0.0.0.0，允许远程连接</span>
<span class="token key attr-name">bind-address</span> <span class="token punctuation">=</span> <span class="token value attr-value">0.0.0.0</span>
<span class="token comment"># 禁止DNS解析，提升性能</span>
skip-name-resolve
<span class="token comment"># 禁止符号链接，增加安全性</span>
skip-symbolic-links
<span class="token comment"># 禁用本地文件加载，防止安全漏洞</span>
<span class="token key attr-name">local-infile</span> <span class="token punctuation">=</span> <span class="token value attr-value">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-创建-docker-compose-yaml" tabindex="-1"><a class="header-anchor" href="#_3-创建-docker-compose-yaml" aria-hidden="true">#</a> 3. 创建 <code>docker-compose.yaml</code></h4><p>在 <code>/docker/mysql/</code> 目录中创建一个名为 <code>docker-compose.yaml</code> 的文件，内容如下：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3.0&#39;</span>

<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">mysql</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> mysql<span class="token punctuation">:</span><span class="token number">5.7</span>
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> mysql
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token key atrule">MYSQL_ROOT_PASSWORD</span><span class="token punctuation">:</span> <span class="token number">123456</span>
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;3306:3306&quot;</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> /docker/mysql/log<span class="token punctuation">:</span>/var/log/mysql
      <span class="token punctuation">-</span> /docker/mysql/data<span class="token punctuation">:</span>/var/lib/mysql
      <span class="token punctuation">-</span> /docker/mysql/conf<span class="token punctuation">:</span>/etc/mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-启动-mysql-容器" tabindex="-1"><a class="header-anchor" href="#_4-启动-mysql-容器" aria-hidden="true">#</a> 4. 启动 MySQL 容器</h4><p>在 <code>mysql-docker/</code> 目录中，运行以下命令来启动 MySQL 容器：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>/docker/mysql/docker-compose up <span class="token parameter variable">-d</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_5-检查-mysql-容器状态" tabindex="-1"><a class="header-anchor" href="#_5-检查-mysql-容器状态" aria-hidden="true">#</a> 5. 检查 MySQL 容器状态</h4><p>要检查 MySQL 容器是否运行，使用以下命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker-compose</span> <span class="token function">ps</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这个 <code>docker-compose</code> 文件将自动完成 MySQL 镜像拉取、目录创建、配置文件挂载、容器启动和自启动配置，并包含所需的注释。这样，你的 MySQL 容器就可以根据配置文件自动化启动，并且保持数据和日志持久化。</p>`,52),r=[d];function v(u,m){return s(),a("div",null,r)}const _=n(o,[["render",v],["__file","docker安装MySQL.html.vue"]]);export{_ as default};
