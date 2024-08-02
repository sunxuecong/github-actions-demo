import{_ as s,r as n,h as a,Q as l}from"./chunks/framework.4b9070bd.js";const u=JSON.parse('{"title":"使用 Shell 脚本检查并配置 git user 信息","description":"","frontmatter":{},"headers":[],"relativePath":"daily-notes/issue-35.md","filePath":"daily-notes/issue-35.md","lastUpdated":null}'),p={name:"daily-notes/issue-35.md"},e=l(`<h1 id="使用-shell-脚本检查并配置-git-user-信息" tabindex="-1">使用 Shell 脚本检查并配置 git user 信息 <a class="header-anchor" href="#使用-shell-脚本检查并配置-git-user-信息" aria-label="Permalink to &quot;使用 Shell 脚本检查并配置 git user 信息&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">原文地址</p><p><a href="https://github.com/maomao1996/daily-notes/issues/35" target="_blank" rel="noreferrer">使用 shell 脚本检查并配置 git user 信息 | GitHub</a></p></div><p>最近在使用 <code>fnm</code> 时，发现项目配置了 <code>.node-version</code> 或 <code>.nvmrc</code> 文件时，可以自动切换 <code>node</code> 版本，于是我就想到可以利用 <code>shell</code> 脚本来帮我检查和修改 <code>git user</code> 信息，防止造成用公司信息提交到 <code>github</code> 的尴尬（毕竟主要用公司电脑写代码）</p><p><a href="https://github.com/Schniz/fnm/blob/master/src/shell/zsh.rs#L34" target="_blank" rel="noreferrer">fnm 检测 .node-version 和 .nvmrc 源码地址</a></p><h2 id="常用的-shell-检测运算符" tabindex="-1">常用的 Shell 检测运算符 <a class="header-anchor" href="#常用的-shell-检测运算符" aria-label="Permalink to &quot;常用的 Shell 检测运算符&quot;">​</a></h2><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 检测 filename 是否为目录</span></span>
<span class="line"><span style="color:#FFCB6B;">-d</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">filename</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 检测 filename 是否为普通文件</span></span>
<span class="line"><span style="color:#FFCB6B;">-f</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">file</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 检测文件或目录是否存在</span></span>
<span class="line"><span style="color:#FFCB6B;">-e</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">file</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 检测文件是否可读</span></span>
<span class="line"><span style="color:#FFCB6B;">-r</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">file</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 检测文件是否可写</span></span>
<span class="line"><span style="color:#FFCB6B;">-w</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">file</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 检测文件是否可执行</span></span>
<span class="line"><span style="color:#FFCB6B;">-x</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">file</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 检测文件是否为空</span></span>
<span class="line"><span style="color:#FFCB6B;">-s</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">file</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p><a href="https://www.runoob.com/linux/linux-shell-basic-operators.html" target="_blank" rel="noreferrer">Shell 基本运算符 | 菜鸟教程</a></p><h2 id="编写-shell-脚本代码" tabindex="-1">编写 Shell 脚本代码 <a class="header-anchor" href="#编写-shell-脚本代码" aria-label="Permalink to &quot;编写 Shell 脚本代码&quot;">​</a></h2><div class="language-zsh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">zsh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 检测 .git 目录是否存在</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">[[</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">-d</span><span style="color:#BABED8;"> .git </span><span style="color:#89DDFF;">]];</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">then</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#676E95;font-style:italic;"># github 用户名</span></span>
<span class="line"><span style="color:#BABED8;">  githubName</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;&quot;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#676E95;font-style:italic;"># github 邮箱地址</span></span>
<span class="line"><span style="color:#BABED8;">  githubEmail</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;&quot;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#676E95;font-style:italic;"># 获取项目的 git 仓库地址</span></span>
<span class="line"><span style="color:#BABED8;">  repositoryUrl</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">$(</span><span style="color:#FFCB6B;">git</span><span style="color:#C3E88D;"> remote get-url origin</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#676E95;font-style:italic;"># 获取当前项目的 user.name</span></span>
<span class="line"><span style="color:#BABED8;">  localName</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">$(</span><span style="color:#FFCB6B;">git</span><span style="color:#C3E88D;"> config user.name</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#676E95;font-style:italic;"># 获取当前项目的 user.email</span></span>
<span class="line"><span style="color:#BABED8;">  localEmail</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">$(</span><span style="color:#FFCB6B;">git</span><span style="color:#C3E88D;"> config user.email</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#676E95;font-style:italic;"># 只判断 github 仓库，根据需要修改（判断字符建议写长点）</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">[[</span><span style="color:#BABED8;"> $repositoryUrl </span><span style="color:#89DDFF;">=~</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">github.com/maomao1996</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">]];</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">then</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#676E95;font-style:italic;"># 提示当前为 github 项目（不需要就注释）</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#82AAFF;">echo</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-e</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\\033[34m当前为 github 项目\\033[0m</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#676E95;font-style:italic;"># 当 githubName 存在并与当前项目的 user.name 不一致时</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">[[</span><span style="color:#BABED8;"> $githubName </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#BABED8;"> $githubName </span><span style="color:#89DDFF;">!=</span><span style="color:#BABED8;"> $localName </span><span style="color:#89DDFF;">]];</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">then</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#676E95;font-style:italic;"># 修改当前项目的 user.name 信息</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">config</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">user.name</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;">$githubName</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#82AAFF;">echo</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-e</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">已将当前仓库的 name 从\\033[33m </span><span style="color:#BABED8;">$localName</span><span style="color:#C3E88D;"> \\033[0m修改为\\033[32m </span><span style="color:#BABED8;">$githubName</span><span style="color:#C3E88D;"> \\033[0m</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;font-style:italic;">fi</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#676E95;font-style:italic;"># 当 githubEmail 存在并与当前项目的 user.email 不一致时</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">[[</span><span style="color:#BABED8;"> $githubEmail </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#BABED8;"> $githubEmail </span><span style="color:#89DDFF;">!=</span><span style="color:#BABED8;"> $localEmail </span><span style="color:#89DDFF;">]];</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">then</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#676E95;font-style:italic;"># 修改当前项目的 user.email 信息</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">config</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">user.email</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;">$githubEmail</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#82AAFF;">echo</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-e</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">已将当前仓库的 email 从\\033[33m </span><span style="color:#BABED8;">$localEmail</span><span style="color:#C3E88D;"> \\033[0m修改为\\033[32m </span><span style="color:#BABED8;">$githubEmail</span><span style="color:#C3E88D;"> \\033[0m</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;font-style:italic;">fi</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;font-style:italic;">fi</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">fi</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div><h2 id="其他" tabindex="-1">其他 <a class="header-anchor" href="#其他" aria-label="Permalink to &quot;其他&quot;">​</a></h2><p>其实配置 <code>SSH Key</code> 就没这么多事，但如果项目使用的是 <code>https</code> 源，则需要修改为 <code>SSH</code> 源，而且个人觉得 <code>https</code> 源方便，在浏览器上复制 <code>url</code> 就行</p>`,11),o=[e];function t(c,r,i,y,D,B){return n(),a("div",null,o)}const m=s(p,[["render",t]]);export{u as __pageData,m as default};
