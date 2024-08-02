import{_ as s,h as i,o as t,a7 as a}from"./chunks/framework.QLdkU56Z.js";const u=JSON.parse('{"title":"使用 husky、lint-staged、commitlint 构建前端工作流","description":"","frontmatter":{},"headers":[],"relativePath":"daily-notes/issue-8.md","filePath":"daily-notes/issue-8.md","lastUpdated":null}'),n={name:"daily-notes/issue-8.md"},e=a(`<h1 id="使用-husky、lint-staged、commitlint-构建前端工作流" tabindex="-1">使用 <code>husky</code>、<code>lint-staged</code>、<code>commitlint</code> 构建前端工作流 <a class="header-anchor" href="#使用-husky、lint-staged、commitlint-构建前端工作流" aria-label="Permalink to &quot;使用 \`husky\`、\`lint-staged\`、\`commitlint\` 构建前端工作流&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">原文地址</p><p><a href="https://github.com/maomao1996/daily-notes/issues/8" target="_blank" rel="noreferrer">使用 husky、lint-staged、commitlint 构建前端工作流 | GitHub</a></p></div><h2 id="作用" tabindex="-1">作用 <a class="header-anchor" href="#作用" aria-label="Permalink to &quot;作用&quot;">​</a></h2><p>可以帮助我们在 <code>commit</code> 前，对代码和 <code>commit messages</code> 进行 <code>lint</code></p><h2 id="介绍" tabindex="-1">介绍 <a class="header-anchor" href="#介绍" aria-label="Permalink to &quot;介绍&quot;">​</a></h2><ul><li><a href="https://github.com/typicode/husky" target="_blank" rel="noreferrer">husky</a> 是一个 <code>Git Hooks</code> 工具，让你操作 <code>Git Hooks</code> 变得更容易</li><li><a href="https://github.com/okonet/lint-staged" target="_blank" rel="noreferrer">lint-staged</a> 可以只对 <code>git</code> 暂存文件运行 <code>lint</code> 从而提高速度</li><li><a href="https://github.com/conventional-changelog/commitlint" target="_blank" rel="noreferrer">commitlint</a> 检查 <code>git commit messages</code> 是否符合规范</li><li><a href="https://github.com/commitizen/cz-cli" target="_blank" rel="noreferrer">commitizen</a> 获得有关提交消息格式的即时反馈，并提示您输入必填字段。</li></ul><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -D</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> husky</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> lint-staged</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @commitlint/cli</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @commitlint/config-conventional</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> commitizen</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cz-conventional-changelog</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2><ul><li><code>package.json</code></li></ul><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;...&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;...&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;scripts&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;commit&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;git-cz&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;husky&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;hooks&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;pre-commit&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;lint-staged&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;commit-msg&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;commitlint -E HUSKY_GIT_PARAMS&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;lint-staged&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;src/**/*.{js,ts,tsx}&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;eslint --fix&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;prettier --write&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;git add&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;config&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;commitizen&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;path&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;cz-conventional-changelog&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><ul><li>根目录创建 <code>commitlint.config.js</code></li></ul><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  extends: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;@commitlint/config-conventional&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="commitlint-config-conventional-type-说明" tabindex="-1"><code>@commitlint/config-conventional</code> type 说明 <a class="header-anchor" href="#commitlint-config-conventional-type-说明" aria-label="Permalink to &quot;\`@commitlint/config-conventional\` type 说明&quot;">​</a></h3><table><thead><tr><th style="text-align:left;">type</th><th style="text-align:left;">含义</th></tr></thead><tbody><tr><td style="text-align:left;">feat</td><td style="text-align:left;">新功能</td></tr><tr><td style="text-align:left;">fix</td><td style="text-align:left;">修复 bug</td></tr><tr><td style="text-align:left;">docs</td><td style="text-align:left;">修改文档</td></tr><tr><td style="text-align:left;">style</td><td style="text-align:left;">代码格式修改</td></tr><tr><td style="text-align:left;">refactor</td><td style="text-align:left;">重构（即不是新增功能，也不是修复 bug）</td></tr><tr><td style="text-align:left;">perf</td><td style="text-align:left;">更改代码以提高性能</td></tr><tr><td style="text-align:left;">test</td><td style="text-align:left;">增加测试</td></tr><tr><td style="text-align:left;">build</td><td style="text-align:left;">构建过程或辅助工具的变动</td></tr><tr><td style="text-align:left;">ci</td><td style="text-align:left;">修改项目持续集成流程</td></tr><tr><td style="text-align:left;">chore</td><td style="text-align:left;">其他类型的提交</td></tr><tr><td style="text-align:left;">revert</td><td style="text-align:left;">恢复上一次提交</td></tr></tbody></table>`,15),l=[e];function p(h,r,d,o,k,c){return t(),i("div",null,l)}const E=s(n,[["render",p]]);export{u as __pageData,E as default};
