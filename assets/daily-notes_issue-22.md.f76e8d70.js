import{_ as s,r as n,h as a,Q as l}from"./chunks/framework.4b9070bd.js";const m=JSON.parse('{"title":"Plop 实战笔记","description":"","frontmatter":{},"headers":[],"relativePath":"daily-notes/issue-22.md","filePath":"daily-notes/issue-22.md","lastUpdated":null}'),p={name:"daily-notes/issue-22.md"},e=l(`<h1 id="plop-实战笔记" tabindex="-1">Plop 实战笔记 <a class="header-anchor" href="#plop-实战笔记" aria-label="Permalink to &quot;Plop 实战笔记&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">原文地址</p><p><a href="https://github.com/maomao1996/daily-notes/issues/22" target="_blank" rel="noreferrer">Plop 实战笔记 | GitHub</a></p></div><p><a href="https://github.com/plopjs/plop" target="_blank" rel="noreferrer">Plop</a> 是一个轻量级的项目搭建生成工具，提供了一种以一致的方式生成代码或任何其他类型的纯文本文件的简单方法</p><p>当我们在项目中引入时，可以通过定制对应的命令询问，可以帮助我们自动生成页面文件，添加对应的路由配置等</p><h2 id="安装-plop" tabindex="-1">安装 Plop <a class="header-anchor" href="#安装-plop" aria-label="Permalink to &quot;安装 Plop&quot;">​</a></h2><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">install</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--save-dev</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">plop</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="添加运行脚本命令" tabindex="-1">添加运行脚本命令 <a class="header-anchor" href="#添加运行脚本命令" aria-label="Permalink to &quot;添加运行脚本命令&quot;">​</a></h2><p>修改 <code>package.json</code> 文件</p><div class="language-diff line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">diff</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#BABED8;">&quot;scripts&quot;: {</span></span>
<span class="line"><span style="color:#89DDFF;">+</span><span style="color:#C3E88D;">   &quot;plop&quot;: &quot;plop&quot;</span></span>
<span class="line"><span style="color:#BABED8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="创建配置文件" tabindex="-1">创建配置文件 <a class="header-anchor" href="#创建配置文件" aria-label="Permalink to &quot;创建配置文件&quot;">​</a></h2><p>在项目根目录创建 <code>plopfile.js</code> 文件</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">module.exports</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">function</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">plop</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 添加一个生成器(生成器名称和配置项)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#BABED8;">plop</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setGenerator</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">basics</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 生成器描述</span></span>
<span class="line"><span style="color:#F07178;">    description</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">this is a skeleton plopfile</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     * 添加交互式问答</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     * 文档: https://github.com/SBoudrias/Inquirer.js</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     **/</span></span>
<span class="line"><span style="color:#F07178;">    prompts</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> [</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        type</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">input</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        name</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">name</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        message</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">请输入组件名</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        type</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">confirm</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        name</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">style</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        message</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">是否需要样式文件?</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        default</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">false</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 需要执行的操作</span></span>
<span class="line"><span style="color:#F07178;">    actions</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> [</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// 添加一个全新的文件</span></span>
<span class="line"><span style="color:#F07178;">        type</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">add</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// 通过双花括号语法使用用户输入的答案</span></span>
<span class="line"><span style="color:#F07178;">        path</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">src/{{name}}.js</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        templateFile</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/plop-templates/pages/index.hbs</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// 修改一个文件</span></span>
<span class="line"><span style="color:#F07178;">        type</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">modify</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">//</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">         * 通过双花括号语法使用用户输入的答案</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">         * 同时可以使用辅助函数对参数进行修饰</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">         * 例子：使用 {{pascalCase name}} 可以将 name 修饰为大写驼峰</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">         **/</span></span>
<span class="line"><span style="color:#F07178;">        path</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">src/{{name}}.js</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">         * 可以通过设置 pattern 匹配对应的特殊字符，在某个位置进行修改操作</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">         * 具体案例地址:</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">         * https://github.com/maomao1996/plop-demo/blob/main/plopfile.js#L86</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">         * https://github.com/maomao1996/plop-demo/blob/main/src/routes/index.jsx#L8</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">         **/</span></span>
<span class="line"><span style="color:#F07178;">        pattern</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">/(</span><span style="color:#BABED8;">\\/\\*</span><span style="color:#C3E88D;"> plop add </span><span style="color:#BABED8;">\\*\\/</span><span style="color:#89DDFF;">)/</span><span style="color:#F78C6C;">g</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        templateFile</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/plop-templates/pages/index.hbs</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// 可以设置 data 传入额外参数供模板使用</span></span>
<span class="line"><span style="color:#F07178;">        data</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 高阶用法可以使用函数，返回一个 actions 数组</span></span>
<span class="line"><span style="color:#F07178;">    actions</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">data</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">actions</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> []</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#BABED8;">data</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">style</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#BABED8;">actions</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">actions</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br></div></div><h2 id="其他" tabindex="-1">其他 <a class="header-anchor" href="#其他" aria-label="Permalink to &quot;其他&quot;">​</a></h2><p>Plop 的字符串转化函数底层(<a href="https://github.com/plopjs/node-plop/blob/master/src/baked-in-helpers.js" target="_blank" rel="noreferrer">相关源码</a>)使用了 <a href="https://github.com/blakeembrey/change-case" target="_blank" rel="noreferrer">change-case</a> 库</p><p>当我们在 JS 中需要使用时可以引入该库，与模板语法处理保持统一</p><p><a href="https://github.com/maomao1996/plop-demo/blob/main/plopfile.js#L52" target="_blank" rel="noreferrer">相关案例地址</a></p><h2 id="完整案例" tabindex="-1">完整案例 <a class="header-anchor" href="#完整案例" aria-label="Permalink to &quot;完整案例&quot;">​</a></h2><p><a href="https://github.com/maomao1996/plop-demo" target="_blank" rel="noreferrer">https://github.com/maomao1996/plop-demo</a></p>`,18),o=[e];function r(t,c,i,y,F,D){return n(),a("div",null,o)}const u=s(p,[["render",r]]);export{m as __pageData,u as default};
