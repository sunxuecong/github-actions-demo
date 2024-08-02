import{_ as s,r as a,h as n,Q as l}from"./chunks/framework.4b9070bd.js";const u=JSON.parse('{"title":"使用 shell 脚本复制项目信息到剪切板","description":"","frontmatter":{},"headers":[],"relativePath":"daily-notes/issue-44.md","filePath":"daily-notes/issue-44.md","lastUpdated":null}'),e={name:"daily-notes/issue-44.md"},p=l(`<h1 id="使用-shell-脚本复制项目信息到剪切板" tabindex="-1">使用 shell 脚本复制项目信息到剪切板 <a class="header-anchor" href="#使用-shell-脚本复制项目信息到剪切板" aria-label="Permalink to &quot;使用 shell 脚本复制项目信息到剪切板&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">原文地址</p><p><a href="https://github.com/maomao1996/daily-notes/issues/44" target="_blank" rel="noreferrer">使用 shell 脚本复制项目信息到剪切板 | GitHub</a></p></div><blockquote><p>这是去年朋友跟我交流的一个问题，最近在整理吃灰笔记时挖出来的（当时写了笔记，但没写完）</p></blockquote><table><thead><tr><th style="text-align:center;">聊天</th><th style="text-align:center;">记录</th></tr></thead><tbody><tr><td style="text-align:center;"><img src="https://cdn.jsdelivr.net/gh/maomao1996/daily-notes/static/44/44-1.jpeg" alt="44-1"></td><td style="text-align:center;"><img src="https://cdn.jsdelivr.net/gh/maomao1996/daily-notes/static/44/44-2.jpeg" alt="44-2"></td></tr></tbody></table><h2 id="实现步骤" tabindex="-1">实现步骤 <a class="header-anchor" href="#实现步骤" aria-label="Permalink to &quot;实现步骤&quot;">​</a></h2><ol><li>打开冰箱</li><li>把大象放进冰箱</li><li>关闭冰箱</li></ol><h3 id="_1-获取当前项目名" tabindex="-1">1. 获取当前项目名 <a class="header-anchor" href="#_1-获取当前项目名" aria-label="Permalink to &quot;1. 获取当前项目名&quot;">​</a></h3><p>一般来说我们的项目名就是当前的文件夹名称</p><ul><li><code>PWD</code>: 表示当前工作目录的路径（一个常用的环境变量）</li></ul><p>获取到当前工作目录的路径后，可以使用以下两种方法对其进行处理</p><p><strong>使用 <code>basename</code> 命令</strong></p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">$(</span><span style="color:#FFCB6B;">basename</span><span style="color:#C3E88D;"> </span><span style="color:#BABED8;">$PWD</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 在终端中输出</span></span>
<span class="line"><span style="color:#82AAFF;">echo</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">$(</span><span style="color:#FFCB6B;">basename</span><span style="color:#C3E88D;"> </span><span style="color:#BABED8;">$PWD</span><span style="color:#89DDFF;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><strong>使用字符串操作</strong></p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">\${</span><span style="color:#BABED8;">PWD</span><span style="color:#89DDFF;">##*/}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 在终端中输出</span></span>
<span class="line"><span style="color:#82AAFF;">echo</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">\${</span><span style="color:#BABED8;">PWD</span><span style="color:#89DDFF;">##*/}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="_2-获取当前分支名" tabindex="-1">2. 获取当前分支名 <a class="header-anchor" href="#_2-获取当前分支名" aria-label="Permalink to &quot;2. 获取当前分支名&quot;">​</a></h3><p><strong>使用 <code>zsh</code> 内置方法</strong></p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">echo</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">$(</span><span style="color:#FFCB6B;">git_current_branch</span><span style="color:#89DDFF;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><strong>使用 <code>git</code> 命令</strong></p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">branch</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--show-current</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><blockquote><p>只介绍最新的命令，需要兼容老版本可以看这里 <a href="https://github.com/maomao1996/daily-notes/issues/11" target="_blank" rel="noreferrer">获取当前 git 分支</a></p></blockquote><h3 id="_3-复制到剪切板" tabindex="-1">3. 复制到剪切板 <a class="header-anchor" href="#_3-复制到剪切板" aria-label="Permalink to &quot;3. 复制到剪切板&quot;">​</a></h3><p>复制到剪贴板的命令</p><ul><li><code>pbcopy</code>: macOS 系统</li><li><code>clip</code>: Windows 系统</li></ul><p>再配合 <code>echo</code> 与管道操作符 <code>|</code> 即可食用</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">echo</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">茂 茂</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">|</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">pbcopy</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>再结合刚刚的知识点，实现复制项目信息到剪切板</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">echo</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">项目名: </span><span style="color:#89DDFF;">$(</span><span style="color:#FFCB6B;">basename</span><span style="color:#C3E88D;"> </span><span style="color:#BABED8;">$PWD</span><span style="color:#89DDFF;">)</span><span style="color:#C3E88D;">\\n分支名: </span><span style="color:#89DDFF;">$(</span><span style="color:#FFCB6B;">git_current_branch</span><span style="color:#89DDFF;">)&quot;</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">|</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">pbcopy</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="_4-简化使用命令" tabindex="-1">4. 简化使用命令 <a class="header-anchor" href="#_4-简化使用命令" aria-label="Permalink to &quot;4. 简化使用命令&quot;">​</a></h3><p>为了方便使用，可以在 <code>shell</code> 配置文件中配置别名或定义方法</p><p>打开 <code>~/.zshrc</code> 配置文件</p><p><strong>配置别名</strong></p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">alias</span><span style="color:#BABED8;"> c</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">echo -n </span><span style="color:#BABED8;">\\&quot;</span><span style="color:#C3E88D;">项目名: </span><span style="color:#89DDFF;">\${</span><span style="color:#BABED8;">PWD</span><span style="color:#89DDFF;">##*/}</span><span style="color:#C3E88D;">\\n分支名: </span><span style="color:#89DDFF;">$(</span><span style="color:#FFCB6B;">git_current_branch</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;">\\&quot;</span><span style="color:#C3E88D;"> | pbcopy</span><span style="color:#89DDFF;">&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><strong>定义方法</strong></p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">c</span><span style="color:#89DDFF;">()</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#82AAFF;">echo</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-n</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">项目名: </span><span style="color:#89DDFF;">\${</span><span style="color:#BABED8;">PWD</span><span style="color:#89DDFF;">##*/}</span><span style="color:#C3E88D;">\\n分支名: </span><span style="color:#89DDFF;">$(</span><span style="color:#FFCB6B;">git_current_branch</span><span style="color:#89DDFF;">)&quot;</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">|</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">pbcopy</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="完整版本" tabindex="-1">完整版本 <a class="header-anchor" href="#完整版本" aria-label="Permalink to &quot;完整版本&quot;">​</a></h2><p>经历后面一段时间的学习和打磨后，最终版本如下:</p><ul><li>判断是否存在 <code>.git</code> 目录</li><li>输出相应操作提示</li><li>将字符串操作改为 <code>basename</code> 命令（编辑器高亮显示有问题，看着难受）</li></ul><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 复制当前信息（项目名和分支名）方便提测</span></span>
<span class="line"><span style="color:#82AAFF;">c</span><span style="color:#89DDFF;">()</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">[[</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">-d</span><span style="color:#BABED8;"> .git </span><span style="color:#89DDFF;">]];</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">then</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#C792EA;">local</span><span style="color:#BABED8;"> data</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">项目名: </span><span style="color:#89DDFF;">$(</span><span style="color:#FFCB6B;">basename</span><span style="color:#C3E88D;"> </span><span style="color:#BABED8;">$PWD</span><span style="color:#89DDFF;">)</span><span style="color:#C3E88D;">\\n分支名: </span><span style="color:#89DDFF;">$(</span><span style="color:#FFCB6B;">git_current_branch</span><span style="color:#89DDFF;">)&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">echo</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-n</span><span style="color:#BABED8;"> $data </span><span style="color:#89DDFF;">|</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">pbcopy</span><span style="color:#89DDFF;">;</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">then</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#82AAFF;">echo</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-e</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;">$data</span><span style="color:#C3E88D;">\\n\\033[32m复制成功\\033[0m</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;font-style:italic;">else</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#82AAFF;">echo</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-e</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;">$data</span><span style="color:#C3E88D;">\\n\\033[33m复制失败，请检查 pbcopy 是否可用\\033[0m</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;font-style:italic;">fi</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;font-style:italic;">else</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#82AAFF;">echo</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\\033[33m当前目录不存在 .git 配置\\033[0m</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;font-style:italic;">fi</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><blockquote><p>使用效果</p></blockquote><p><img src="https://cdn.jsdelivr.net/gh/maomao1996/daily-notes/static/44/44-3.png" alt="使用效果"></p><p>如果只关心将项目名和分支名复制到剪贴板，可直接使用<a href="#4-简化使用命令">配置别名版本</a></p>`,41),o=[p];function t(c,r,i,y,D,d){return a(),n("div",null,o)}const b=s(e,[["render",t]]);export{u as __pageData,b as default};
