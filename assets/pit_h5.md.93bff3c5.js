import{_ as s,r as a,h as n,Q as o}from"./chunks/framework.4b9070bd.js";const h=JSON.parse('{"title":"H5 踩坑记录","description":"","frontmatter":{"outline":2},"headers":[],"relativePath":"pit/h5.md","filePath":"pit/h5.md","lastUpdated":1722593040000}'),e={name:"pit/h5.md"},l=o(`<h1 id="h5-踩坑记录" tabindex="-1">H5 踩坑记录 <a class="header-anchor" href="#h5-踩坑记录" aria-label="Permalink to &quot;H5 踩坑记录&quot;">​</a></h1><h2 id="webview-返回上一页不刷新" tabindex="-1"><code>WebView</code> 返回上一页不刷新 <a class="header-anchor" href="#webview-返回上一页不刷新" aria-label="Permalink to &quot;\`WebView\` 返回上一页不刷新&quot;">​</a></h2><p>为了提升浏览网页的效率加入了缓存机制，导致 <code>WebView</code> 返回上一页时不会刷新</p><h5 id="解决方法" tabindex="-1">解决方法 <a class="header-anchor" href="#解决方法" aria-label="Permalink to &quot;解决方法&quot;">​</a></h5><p>监听 <code>pageshow</code> 事件，<strong>通过 <code>persisted</code> 或 <code>performance.navigation.type</code> 属性</strong>判断当前页面是否通过缓存载入</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> onPageShow </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">e</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#BABED8;">e</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">persisted</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">||</span><span style="color:#F07178;"> (</span><span style="color:#BABED8;">window</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">performance</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">window</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">performance</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">navigation</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">type</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">2</span><span style="color:#F07178;">)) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#BABED8;">location</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">reload</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#BABED8;">window</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">addEventListener</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">pageshow</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> onPageShow)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div>`,6),p=[l];function t(r,c,i,y,D,F){return a(),n("div",null,p)}const B=s(e,[["render",t]]);export{h as __pageData,B as default};
