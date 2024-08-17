import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as e,e as n}from"./app-FDinEN3F.js";const i="/assets/0499df1640b55903adee5b83e790bd4c-B63Lvp8O.png",l="/assets/p803118-HfFG_HVc.png",c="/assets/p803143-sYAM4Js_.png",d="/assets/p803145-3EH4Zymo.png",t="/assets/p803146-Bz7FlGVU.png",r="/assets/p803149-OSvIrHMP.png",o={},p=n('<blockquote><p>挖矿程序为了最大程度获取利益，会存放大量的持久化后门，导致病毒难以清理或无法杀死。如果您在未购买云安全中心服务的情况下遇到挖矿病毒，可以采取如下措施排查和处理。</p></blockquote><h3 id="_0-前言" tabindex="-1"><a class="header-anchor" href="#_0-前言" aria-hidden="true">#</a> 0. 前言</h3><p>最近公司服务器突然 cpu 的占用变成 99％ 经过排查发现是一个挖矿程序入侵 服务器的 /tmp 文件夹进行持续性的挖矿 此贴根据阿里云相关文档和自己实践整理出</p><p>找到的挖矿进程</p><figure><img src="'+i+`" alt="0499df1640b55903adee5b83e790bd4c" tabindex="0" loading="lazy"><figcaption>0499df1640b55903adee5b83e790bd4c</figcaption></figure><h3 id="_1-linux系统" tabindex="-1"><a class="header-anchor" href="#_1-linux系统" aria-hidden="true">#</a> 1. Linux系统</h3><ol><li><p>阻断恶意网络通信。</p><p>在发现主机存在挖矿行为后，由于完整地处理整个挖矿事件的周期比较长，所以为了及时控制挖矿影响，需要首先阻断挖矿木马的网络通信行为。</p><ol><li><p>执行以下命令，查看当前系统网络连接状态。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">netstat</span> <span class="token parameter variable">-antp</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="`+l+`" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure></li><li><p>将以下命令中<code>c2地址</code>替换为正常业务不会使用的可疑远程地址（Foreign Address），然后执行下述命令添加防火墙规则，阻断服务器与该可疑地址之间的所有网络连接。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>iptables <span class="token parameter variable">-A</span> INPUT <span class="token parameter variable">-s</span> c2地址 <span class="token parameter variable">-j</span> DROP
iptables <span class="token parameter variable">-A</span> OUTPUT <span class="token parameter variable">-d</span> c2地址 <span class="token parameter variable">-j</span> DROP
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ol></li><li><p>清除计划任务。</p><p>挖矿木马常通过计划任务实现<strong>定期下载（更新）并启动</strong>挖矿木马，如果仅清理挖矿进程、挖矿木马文件，并不能根治挖矿程序，且会出现挖矿反复的情况。</p><p>排查以下计划任务文件，删除计划任务中的挖矿木马下载和启动任务。</p><ul><li><p>查看当前用户或指定用户（<code>username</code>）的计划任务。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">crontab</span> <span class="token parameter variable">-l</span>
<span class="token function">crontab</span> <span class="token parameter variable">-u</span> username <span class="token parameter variable">-l</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>主机所有计划任务文件。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>/etc/crontab
/var/spool/cron/
/etc/anacrontab
/etc/cron.d/
/etc/cron.hourly/
/etc/cron.daily/
/etc/cron.weekly/
/etc/cron.monthly/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p>清除自启动服务项。</p><ol><li><p>执行以下命令，排查系统所有自启动服务。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl list-unit-files <span class="token operator">|</span> <span class="token function">grep</span> enabled
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>找到对应可疑服务的单元文件，排查服务详细信息。</p><p>将命令中<code>*</code>替换为服务名称，<code>&lt;service_unit_name&gt;</code>替换为服务的单元文件名称。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">ls</span> <span class="token parameter variable">-al</span> /etc/systemd/system/*.service
<span class="token function">ls</span> <span class="token parameter variable">-al</span> /usr/lib/systemd/system/*.service

<span class="token comment"># 查看服务详细信息（服务启动的进程文件）</span>
<span class="token function">cat</span> /etc/systemd/system/<span class="token operator">&lt;</span>service_unit_name<span class="token operator">&gt;</span>.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>如果发现恶意的自启动服务项，使用以下命令禁用服务，删除对应单元文件。</p><p>将命令中<code>&lt;service name&gt;</code>替换为服务名称，<code>&lt;service_unit_name&gt;</code>替换为服务的单元文件名称。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl disable <span class="token operator">&lt;</span>service name<span class="token operator">&gt;</span>
<span class="token function">rm</span> /etc/systemd/system/<span class="token operator">&lt;</span>service_unit_name<span class="token operator">&gt;</span>.service
<span class="token function">rm</span> /usr/lib/systemd/system/<span class="token operator">&lt;</span>service_unit_name<span class="token operator">&gt;</span>.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>排查以下服务路径是否有自启动服务，然后参考以上步骤进行清理。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>/etc/rc.local
/etc/inittab
/etc/rc.d/
/etc/init.d/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol></li><li><p>清除SSH公钥。</p><p>挖矿木马通常会将黑客SSH公钥写入<code>**~/.ssh/authorized_keys**</code>文件中，以便黑客可以通过SSH免密登录受害主机，重新植入恶意文件。您需要排查<code>**~/.ssh/authorized_keys**</code>文件，如果发现可疑公钥，立即删除。</p></li><li><p>清除<code>.so</code>劫持。</p><p>通过<code>**/etc/ld.so.preload**</code>文件设定预加载的<code>.so</code>文件，可以劫持常见的系统命令，例如<code>top/ps/netstat</code>等，达到隐藏挖矿进程的目的。</p><ol><li><p>执行以下命令，排查预加载的<code>.so</code>文件。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> /etc/ld.so.preload
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>执行以下命令，删除预加载劫持。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token operator">&gt;</span> /etc/ld.so.preload
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol></li><li><p>清除恶意账号。</p><p>部分挖矿木马家族会创建新的<strong>后门账号</strong>，以达到长期控制受害主机的目的。执行以下命令，查看恶意账号，然后手动删除相关账号信息。</p><ul><li><p>通过日志查看近期是否有创建账号行为。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> /var/log/audit/audit.log <span class="token operator">|</span> <span class="token function">grep</span> <span class="token function">useradd</span>
<span class="token comment"># 或者</span>
<span class="token function">cat</span> /var/log/secure <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&#39;new user&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>通过<code>/etc/passwd</code>文件查看是否有可疑账号。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cut</span> -d: <span class="token parameter variable">-f1</span> /etc/passwd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>通过账户的<code>home</code>目录查看可疑账户的创建或最近活跃时间，需特别关注近期创建的<code>home</code>目录。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">stat</span> /home/guest/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul></li><li><p>防修改对抗。</p><p>部分挖矿木马在写入计划任务、自启动等持久化文件后，会为对应文件设置一个<strong>不可更改</strong>的属性，防止对应持久化任务被删除。</p><figure><img src="`+c+`" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><p>如上图，遇到此类情况可以执行以下命令，恢复文件属性后再删除对应任务。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>chattr <span class="token parameter variable">-i</span> /etc/passwd
chattr <span class="token parameter variable">-i</span> /etc/crontab
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>清除挖矿木马进程。</p><ol><li><p>挖矿进程通常占用较高的CPU，通过以下命令可以排查可疑的挖矿进程。</p><ul><li><p>排查占用主机大量CPU的进程。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">top</span> <span class="token parameter variable">-c</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="`+d+`" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">ps</span> <span class="token parameter variable">-eo</span> pid,ppid,cmd,%cpu <span class="token parameter variable">--sort</span><span class="token operator">=</span>-%cpu <span class="token operator">|</span> <span class="token function">more</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="`+t+`" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure></li><li><p>排查异常网络连接行为。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">netstat</span> <span class="token parameter variable">-antp</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="`+r+`" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure></li><li><p>获取可疑进程的文件路径。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">ls</span> <span class="token parameter variable">-al</span> /proc/<span class="token variable">$PID</span>/exe
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul></li></ol></li><li><p>执行以下命令，终止挖矿进程，并清理挖矿文件。</p></li></ol><p>​</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">kill</span> <span class="token parameter variable">-9</span> <span class="token variable">$PID</span>
<span class="token comment"># 删除 ls -al /proc/$PID/exe 获取的进程路径</span>
<span class="token function">rm</span> /path/to/executable
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-linux系统-特定挖矿事件处理" tabindex="-1"><a class="header-anchor" href="#_2-linux系统-特定挖矿事件处理" aria-hidden="true">#</a> 2. Linux系统（特定挖矿事件处理）</h3><h4 id="_1-伪装aliyunduns的挖矿" tabindex="-1"><a class="header-anchor" href="#_1-伪装aliyunduns的挖矿" aria-hidden="true">#</a> 1. 伪装AliyunDuns的挖矿</h4><ol><li><p>执行以下命令，排查持久化自启动项。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">grep</span> <span class="token parameter variable">-rlE</span> <span class="token string">&quot;<span class="token entity" title="\\\\">\\\\</span>-<span class="token entity" title="\\\\">\\\\</span>-donate<span class="token entity" title="\\\\">\\\\</span>-level|xmrig|<span class="token entity" title="\\\\">\\\\</span>/opt<span class="token entity" title="\\\\">\\\\</span>/sysetmd|A_li_yun_Duns&quot;</span> /etc/systemd/system/*
<span class="token function">grep</span> <span class="token parameter variable">-rl</span> <span class="token string">&quot;wget&quot;</span>  /etc/cron.hourly/*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>如果有返回结果，表示存在自启动服务项，执行以下命令，删除自启动服务项。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">rm</span> <span class="token parameter variable">-f</span> /etc/systemd/system/sysetmd.service
<span class="token function">rm</span> <span class="token parameter variable">-f</span> /etc/systemd/system/monero.service
<span class="token function">rm</span> <span class="token parameter variable">-f</span> /etc/systemd/system/A_li_yun_Duns.service
chattr <span class="token parameter variable">-i</span> /etc/cron.hourly/0
<span class="token function">rm</span> <span class="token parameter variable">-f</span> /etc/cron.hourly/0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>排查并处理异常用户。</p><ol><li><p>执行下述命令查询系统用户列表，锁定异常用户名称。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> /etc/passwd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>执行下述命令查看异常系统用户的信息。异常系统用户以<code>shaojiang99</code>为例。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> /etc/passwd <span class="token operator">|</span> <span class="token function">grep</span> shaojiang99
<span class="token function">cat</span> /etc/shadow <span class="token operator">|</span> <span class="token function">grep</span> shaojiang99
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>执行下述命令删除异常系统用户。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>chattr <span class="token parameter variable">-i</span> /etc/passwd
chattr <span class="token parameter variable">-i</span> /etc/shadow
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;/^shaojiang99:/d&#39;</span> /etc/shadow
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;/^shaojiang99:/d&#39;</span> /etc/passwd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol></li></ol><h4 id="_2-skidmap手动处理" tabindex="-1"><a class="header-anchor" href="#_2-skidmap手动处理" aria-hidden="true">#</a> 2. Skidmap手动处理</h4><ol><li><p>执行以下命令，删除自启动服务项。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;&quot;</span> <span class="token operator">&gt;</span> /lib/systemd/system/systemd-cgroup.service
<span class="token builtin class-name">echo</span> <span class="token string">&quot;&quot;</span> <span class="token operator">&gt;</span> /lib/systemd/system/systemd-deltaed.service
<span class="token builtin class-name">echo</span> <span class="token string">&quot;&quot;</span> <span class="token operator">&gt;</span> /usr/bin/systemd-cgroup.org
<span class="token builtin class-name">echo</span> <span class="token string">&quot;&quot;</span> <span class="token operator">&gt;</span> /usr/bin/systemd-cgroup
<span class="token builtin class-name">echo</span> <span class="token string">&quot;&quot;</span> <span class="token operator">&gt;</span> /usr/bin/systemd-deltaed
<span class="token builtin class-name">echo</span> <span class="token string">&quot;&quot;</span> <span class="token operator">&gt;</span> /usr/bin/systemd-deltaed.org
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>用户手动恢复SSH公钥文件<code>authorized_keys</code>。</p></li></ol><h4 id="_3-cleanfda手动处理" tabindex="-1"><a class="header-anchor" href="#_3-cleanfda手动处理" aria-hidden="true">#</a> 3. Cleanfda手动处理</h4><ol><li><p>排查以下计划任务路径，查看计划任务是否存在可疑脚本执行，例如<code>/etc/upat.sh</code>。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>/var/spool/cron/
/etc/cron.d/
/var/spool/cron/crontabs
/etc/crontab
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>排查被修改过的命令（<code>ps</code>、<code>pstree</code>、<code>top</code>等原程序会被加上后缀<code>.original</code>进行重命名）。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">ls</span> <span class="token parameter variable">-al</span> /usr/bin <span class="token operator">|</span> <span class="token function">grep</span> original
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>排查SSH公钥，删除未知公钥。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> ~/.ssh/authorized_keys
<span class="token function">cat</span> /root/.ssh/authorized_keys
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><p>示例：</p><div class="language-plain line-numbers-mode" data-ext="plain"><pre class="language-plain"><code># 恢复被修改的命令
crondir=&#39;/var/spool/cron/&#39;&quot;$USER&quot;
mv /bin/ps.original /bin/ps
mv /bin/top.original /bin/top
mv /bin/pstree.original /bin/pstree

# 恢复计划任务文件编辑权限
chattr -R -ia /var/spool/cron
chattr -ia /etc/crontab
chattr -R -ia /var/spool/cron/crontabs
chattr -R -ia /etc/cron.d

# 删除可疑计划任务、载荷
sed -i &#39;/upat.sh/d&#39; /etc/crontab
rm -rf /etc/cron.d/httpd2
rm -rf /etc/upat.sh
rm -rf /tmp/upat.sh
rm -rf /etc/httpd2
rm -rf /tmp/httpd2

# 删除可疑公钥
sed -i &#39;/cKtXBjj******hVI0K7b/d&#39; ~/.ssh/authorized_keys
sed -i &#39;/cKtXBjj******hVI0K7b/d&#39; /root/.ssh/authorized_keys
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-outlaw家族挖矿" tabindex="-1"><a class="header-anchor" href="#_4-outlaw家族挖矿" aria-hidden="true">#</a> 4. Outlaw家族挖矿</h4><ol><li><p>排查所有<code>cron</code>计划任务，查看是否存在<code>.configrc5/</code>字符串。</p><ul><li><p>计划任务路径：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>/var/spool/cron/root
/var/spool/cron/
/etc/cron.d/
/var/spool/cron/crontabs
/etc/crontab
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>执行以下命令排查。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">grep</span> <span class="token parameter variable">-r</span> <span class="token string">&quot;.configrc5/&quot;</span> /var/spool/cron/*
<span class="token function">grep</span> <span class="token parameter variable">-r</span> <span class="token string">&quot;.configrc5/&quot;</span> /etc/cron*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p>如果存在，执行以下命令，删除相关文件。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">rm</span> <span class="token parameter variable">-rf</span> /tmp/.X2xi-unix/.rsync
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> ～/.configrc5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h4 id="_5-kinsing家族挖矿" tabindex="-1"><a class="header-anchor" href="#_5-kinsing家族挖矿" aria-hidden="true">#</a> 5. kinsing家族挖矿</h4><ol><li><p>执行以下命令排查<code>cron</code>计划任务，查看是否存在类似<code>gi.sh | bash &gt; /dev/null</code>的内容，如存在请删除该行。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">grep</span> <span class="token parameter variable">-r</span> <span class="token string">&quot;gi.sh | bash &gt; /dev/null&quot;</span> /etc/cron*
<span class="token function">grep</span> <span class="token parameter variable">-r</span> <span class="token string">&quot;gi.sh | bash &gt; /dev/null&quot;</span> /var/spool/cron/*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>执行以下命令排查是否存在<code>/lib/systemd/system/bot.service</code>服务。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> /lib/systemd/system/bot.service 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>如果存在以上服务，执行以下命令排查<code>/etc/ld.so.preload</code>，查看是否存在<code>libsystem.so</code>文件。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> /etc/ld.so.preload
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>排查到<code>libsystem.so</code>文件路径后，删除<code>libsystem.so</code>文件。</p></li></ol><h3 id="_3-windows系统" tabindex="-1"><a class="header-anchor" href="#_3-windows系统" aria-hidden="true">#</a> 3. Windows系统</h3><ol><li><p>在PowerShell中执行以下命令，通过CPU占用情况排查可疑的挖矿进程。</p><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code> <span class="token function">ps</span> <span class="token punctuation">|</span> <span class="token function">sort</span> <span class="token operator">-</span>des cpu
 <span class="token keyword">While</span><span class="token punctuation">(</span>1<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token function">ps</span> <span class="token punctuation">|</span> <span class="token function">sort</span> <span class="token operator">-</span>des cpu <span class="token punctuation">|</span> <span class="token function">select</span> <span class="token operator">-</span>f 15 <span class="token punctuation">|</span> <span class="token function">ft</span> <span class="token operator">-</span>a<span class="token punctuation">;</span> <span class="token function">sleep</span> 1<span class="token punctuation">;</span> cls<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>执行以下命令，查看挖矿进程的磁盘文件、进程启动命令的参数。</p><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code>wmic <span class="token keyword">process</span> where processid=xxx get processid<span class="token punctuation">,</span>executablepath<span class="token punctuation">,</span>commandline<span class="token punctuation">,</span>name     <span class="token operator">/</span><span class="token operator">/</span>xxx表示进程pid
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>结束挖矿进程，清除挖矿文件。</p></li><li><p>执行以下命令，检查主机连接的可疑网络端口。</p><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code>netstat <span class="token operator">-</span>ano <span class="token punctuation">|</span> findstr xxx            <span class="token operator">/</span><span class="token operator">/</span> xxx表示可疑的网络端口
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>执行以下命令，检查服务器中hosts文件是否存在挖矿程序的矿池地址。</p><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code><span class="token function">type</span>  C:\\Windows\\System32\\drivers\\etc\\hosts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>执行以下命令，排查是否存在挖矿程序设定的计划任务。</p><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code>schtasks <span class="token operator">/</span>query
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol>`,24),u=[p];function v(m,b){return a(),e("div",null,u)}const k=s(o,[["render",v],["__file","服务器如何处理挖矿病毒.html.vue"]]);export{k as default};
