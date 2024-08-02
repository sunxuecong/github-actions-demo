import{_ as s,h as a,o as i,a7 as e}from"./chunks/framework.QLdkU56Z.js";const m=JSON.parse('{"title":"ShadowSocks PAC 用户自定规则","description":"","frontmatter":{},"headers":[],"relativePath":"daily-notes/issue-33.md","filePath":"daily-notes/issue-33.md","lastUpdated":null}'),l={name:"daily-notes/issue-33.md"},n=e(`<h1 id="shadowsocks-pac-用户自定规则" tabindex="-1">ShadowSocks PAC 用户自定规则 <a class="header-anchor" href="#shadowsocks-pac-用户自定规则" aria-label="Permalink to &quot;ShadowSocks PAC 用户自定规则&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">原文地址</p><p><a href="https://github.com/maomao1996/daily-notes/issues/33" target="_blank" rel="noreferrer">ShadowSocks PAC 用户自定规则 | GitHub</a></p></div><blockquote><p>代理自动配置（Proxy auto-config 简称 PAC）是一种网页浏览器技术，用于定义如何自动选择适当的代理服务器来访问一个网址</p></blockquote><p>ShadowSocks 默认使用的 <a href="https://github.com/gfwlist/gfwlist" target="_blank" rel="noreferrer">GFWList</a> 规则，当 <a href="https://github.com/gfwlist/gfwlist" target="_blank" rel="noreferrer">GFWList</a> 规则无法满足我们的要求时，就需要用到 PAC 用户自定规则</p><h2 id="pac-规则语法说明" tabindex="-1">PAC 规则语法说明 <a class="header-anchor" href="#pac-规则语法说明" aria-label="Permalink to &quot;PAC 规则语法说明&quot;">​</a></h2><p>在书写 PAC 用户自定规则前，我们需要先了解其规则语法，ShadowSocks 使用的是 Adblock Plus 的规则引擎</p><p><a href="https://adblockplus.org/en/filter-cheatsheet" target="_blank" rel="noreferrer">Adblock Plus filters 规则文档</a></p><h3 id="大概规则如下" tabindex="-1">大概规则如下 <a class="header-anchor" href="#大概规则如下" aria-label="Permalink to &quot;大概规则如下&quot;">​</a></h3><h4 id="代理相关标识符" tabindex="-1">代理相关标识符 <a class="header-anchor" href="#代理相关标识符" aria-label="Permalink to &quot;代理相关标识符&quot;">​</a></h4><ul><li><code>@@</code> 标识符（设置不使用代理的规则） <ul><li>🌰 <code>@@*.example.com/*</code> 满足 <code>@@</code> 后规则的地址不使用代理</li></ul></li></ul><h4 id="地址匹配相关规则" tabindex="-1">地址匹配相关规则 <a class="header-anchor" href="#地址匹配相关规则" aria-label="Permalink to &quot;地址匹配相关规则&quot;">​</a></h4><ul><li>通配符 <code>*</code><ul><li><code>*.example.com/*</code> 在实际使用时可省略 <code>*</code>，比如 <code>*.example.com/*</code> 可以写成 <code>.example.com/</code></li></ul></li><li>正则表达式：以 <code>\\</code> 开始和结束 <ul><li>🌰 <code>\\[\\w]+:\\/\\/example.com\\</code></li></ul></li><li>匹配地址开始和结尾 <code>|</code><ul><li>🌰 <code>|http://example.com example.com|</code> 分别表示以 <code>http://example.com</code> 开始和以 <code>example.com</code> 结束的地址</li></ul></li><li>开头标识符 <code>||</code><ul><li>🌰 <code>||example.com</code> 则 <code>http://example.com</code>、<code>https://example.com</code>、<code>ftp://example.com</code> 等地址均满足条件，只用于匹配地址开头</li></ul></li><li>分隔符 <code>^</code> 表示除了字母、数字或者 <code>_ - . %</code> 之外的任何字符。 <ul><li>🌰 <code>http://example.com^</code> 表示 <code>http://example.com/</code> 和 <code>http://example.com:8000/</code> 均满足条件，而<code>http://example.com.ar/</code> 不满足条件</li></ul></li></ul><h4 id="其他" tabindex="-1">其他 <a class="header-anchor" href="#其他" aria-label="Permalink to &quot;其他&quot;">​</a></h4><ul><li>注释 <code>!</code><ul><li>🌰 <code>! 这是一条注释</code></li></ul></li></ul><h2 id="常用-pac-规则" tabindex="-1">常用 PAC 规则 <a class="header-anchor" href="#常用-pac-规则" aria-label="Permalink to &quot;常用 PAC 规则&quot;">​</a></h2><blockquote><p>个人常用</p></blockquote><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Put</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> user</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rules</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> line</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> by</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> line</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> in</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> this</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> file.</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> See</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://adblockplus.org/en/filter-cheatsheet</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Github</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 相关</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">||</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">github.com</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> vercel</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 相关</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">||</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">vercel.app</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">||</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.vercel.app</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> openai</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 相关</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">||</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">openai.com</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">||</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.openai.com</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> npmtrends</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 相关</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">||</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npmtrends.com</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">||</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm-trends-proxy.uidotdev.workers.dev</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h3 id="注意点" tabindex="-1">注意点 <a class="header-anchor" href="#注意点" aria-label="Permalink to &quot;注意点&quot;">​</a></h3><ul><li><strong>修改 PAC 用户自定规则后需要重启客户端才能生效</strong></li><li><strong>修改 PAC 用户自定规则后需要重启客户端才能生效</strong></li><li><strong>修改 PAC 用户自定规则后需要重启客户端才能生效</strong></li></ul>`,19),t=[n];function p(h,o,r,c,d,k){return i(),a("div",null,t)}const F=s(l,[["render",p]]);export{m as __pageData,F as default};
