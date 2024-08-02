import{_ as e,r as o,h as i,Q as l}from"./chunks/framework.4b9070bd.js";const g=JSON.parse('{"title":"不使用 JavaScript 来隐藏元素的若干方法","description":"","frontmatter":{},"headers":[],"relativePath":"daily-notes/issue-36.md","filePath":"daily-notes/issue-36.md","lastUpdated":null}'),a={name:"daily-notes/issue-36.md"},t=l('<h1 id="不使用-javascript-来隐藏元素的若干方法" tabindex="-1">不使用 JavaScript 来隐藏元素的若干方法 <a class="header-anchor" href="#不使用-javascript-来隐藏元素的若干方法" aria-label="Permalink to &quot;不使用 JavaScript 来隐藏元素的若干方法&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">原文地址</p><p><a href="https://github.com/maomao1996/daily-notes/issues/36" target="_blank" rel="noreferrer">不使用 JavaScript 来隐藏元素的若干方法 | GitHub</a></p></div><p>这是一道经典面试题，也是最近帮朋友解决稿定设计的水印时想了各种方案，所以在此总结下（目前就 11 种）</p><p><a href="https://codesandbox.io/s/css-hidden-element-isbc39" target="_blank" rel="noreferrer">隐藏元素的若干方法 Demo</a></p><h2 id="_1-width-height" tabindex="-1">1. width height <a class="header-anchor" href="#_1-width-height" aria-label="Permalink to &quot;1. width height&quot;">​</a></h2><p>修改元素的 <code>width</code> 或者 <code>height</code> 属性（需要配合 <code>overflow: hidden;</code> 使用）</p><p><strong>特点</strong>：</p><ol><li>不占据空间</li><li>不响应事件</li><li>支持动画</li></ol><h2 id="_2-display-none" tabindex="-1">2. display: none <a class="header-anchor" href="#_2-display-none" aria-label="Permalink to &quot;2. display: none&quot;">​</a></h2><p>使元素不再显示，其对布局不会有影响</p><p><strong>特点</strong>：</p><ol><li>不占据空间</li><li>不响应事件</li><li>不支持动画</li></ol><h2 id="_3-visibility-hidden" tabindex="-1">3. visibility: hidden <a class="header-anchor" href="#_3-visibility-hidden" aria-label="Permalink to &quot;3. visibility: hidden&quot;">​</a></h2><p>隐藏元素，但是其他元素的布局不改变，相当于此元素变成透明，将其子元素设为 <code>visibility: visible</code> 时则该子元素依然可见</p><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/visibility" target="_blank" rel="noreferrer">visibility - CSS：层叠样式表 | MDN</a></p><p><strong>特点</strong>：</p><ol><li>占据空间</li><li>不响应事件</li><li>不支持动画</li></ol><h2 id="_4-relative-负-z-index" tabindex="-1">4. relative + 负 z-index <a class="header-anchor" href="#_4-relative-负-z-index" aria-label="Permalink to &quot;4. relative + 负 z-index&quot;">​</a></h2><blockquote><p>当元素之间重叠的时候 <code>z-index</code> 较大的元素会覆盖较小的元素在上层进行显示。</p></blockquote><p>将元素的 <code>z-index</code> 属性设置为负值来达到隐藏元素的效果（实际是将元素放在了我们看不到的层叠上下文中）</p><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/z-index" target="_blank" rel="noreferrer">z-index - CSS：层叠样式表 | MDN</a></p><h5 id="创建层叠上下文" tabindex="-1">创建层叠上下文 <a class="header-anchor" href="#创建层叠上下文" aria-label="Permalink to &quot;创建层叠上下文&quot;">​</a></h5><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context" target="_blank" rel="noreferrer">层叠上下文 - CSS：层叠样式表 | MDN</a></p><ul><li>根元素</li><li><code>position</code> 不为 <code>static</code></li><li><code>flex</code> 和 <code>grid</code> 容器的子元素且 <code>z-index</code> 值不为 <code>auto</code></li><li><code>opacity</code> 不为 <code>1</code></li><li><code>transform</code> 不为 <code>none</code></li><li><code>filter</code> 不为 <code>none</code></li><li><code>backdrop-filter</code> 不为 <code>none</code></li><li><code>clip-path</code> 不为 <code>none</code></li><li><code>mask / mask-image / mask-border</code> 不为 <code>none</code></li><li><code>mix-blend-mode</code> 不为 <code>normal</code></li><li><code>contain</code> 为 <code>layout</code>、<code>paint</code> 或包含它们其中之一的合成值</li><li>设置了 <code>isolation: isolate</code></li><li>设置了 <code>-webkit-overflow-scrolling: touch</code></li><li>设置了 <code>will-change</code></li></ul><p><strong>特点</strong>：</p><ol><li>占据空间</li><li>不响应事件</li><li>不支持动画</li></ol><h2 id="_5-absolute-负-left" tabindex="-1">5. absolute + 负 left <a class="header-anchor" href="#_5-absolute-负-left" aria-label="Permalink to &quot;5. absolute + 负 left&quot;">​</a></h2><p>通过 <code>position: absolute; left: -9999px</code> 将元素移除可视区域来达到隐藏元素的效果</p><p><strong>特点</strong>：</p><ol><li>不占据空间</li><li>不响应事件</li><li>支持动画</li></ol><h2 id="_6-color-background" tabindex="-1">6. color + background <a class="header-anchor" href="#_6-color-background" aria-label="Permalink to &quot;6. color + background&quot;">​</a></h2><p>将元素的颜色值属性 <code>color</code> <code>background-color</code> 设置为 <code>transparent</code> 达到隐藏元素的效果</p><p><strong>特点</strong>：</p><ol><li>占据空间</li><li>响应事件</li><li>支持动画</li></ol><h2 id="_7-clip-clip-path" tabindex="-1">7. clip clip-path <a class="header-anchor" href="#_7-clip-clip-path" aria-label="Permalink to &quot;7. clip clip-path&quot;">​</a></h2><p><code>clip-path</code> 属性使用裁剪方式创建元素的可显示区域，区域内的部分显示，区域外的隐藏。可以使用 <code>clip-path: circle(0)</code> 来将元素隐藏</p><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/clip-path" target="_blank" rel="noreferrer">clip-path（CSS：层叠样式表）—— MDN</a></p><p><strong>特点</strong>：</p><ol><li>占据空间</li><li>不响应事件</li><li>支持动画</li></ol><h2 id="_8-transform" tabindex="-1">8. transform <a class="header-anchor" href="#_8-transform" aria-label="Permalink to &quot;8. transform&quot;">​</a></h2><p><code>transform</code> 属性允许你旋转、缩放、倾斜或平移指定元素。可以使用 <code>transform: scale(0)</code> 来将元素隐藏，还可以使用 <code>rotateY(90deg)</code> <code>skew(90deg)</code> 等属性达到隐藏元素效果</p><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform" target="_blank" rel="noreferrer">transform - CSS：层叠样式表 | MDN</a></p><p><strong>特点</strong>：</p><ol><li>占据空间</li><li>不响应事件</li><li>支持动画</li></ol><h2 id="_9-opacity-0" tabindex="-1">9. opacity: 0 <a class="header-anchor" href="#_9-opacity-0" aria-label="Permalink to &quot;9. opacity: 0&quot;">​</a></h2><p><code>opacity</code> 属性用于指定一个元素的不透明度</p><blockquote><p>当 <code>opacity</code> 的属性值不为 1 时，会把元素放置在一个新的层叠上下文中</p><p>一个元素和它包含的子元素都会具有和元素背景相同的透明度，哪怕这个元素和它的子元素有不同的 opacity 属性值</p></blockquote><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/opacity" target="_blank" rel="noreferrer">opacity - CSS：层叠样式表 | MDN</a></p><p><strong>特点</strong>：</p><ol><li>占据空间</li><li>响应事件</li><li>支持动画</li></ol><h2 id="_10-filter-opacity-0" tabindex="-1">10. filter: opacity(0) <a class="header-anchor" href="#_10-filter-opacity-0" aria-label="Permalink to &quot;10. filter: opacity(0)&quot;">​</a></h2><p><code>opacity()</code> 转化图像的透明程度（已有的 <code>opacity</code> 属性很相似，不同之处在于通过 <code>filter</code>，一些浏览器为了提升性能会提供硬件加速）</p><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/filter" target="_blank" rel="noreferrer">filter - CSS：层叠样式表 | MDN</a></p><p><strong>特点</strong>：</p><ol><li>占据空间</li><li>响应事件</li><li>支持动画</li></ol><h2 id="_11-全局属性-hidden" tabindex="-1">11. 全局属性 hidden <a class="header-anchor" href="#_11-全局属性-hidden" aria-label="Permalink to &quot;11. 全局属性 hidden&quot;">​</a></h2><p>全局属性 <code>hidden</code> 是一个布尔属性，如果一个元素设置了这个属性，它就不会被显示（本质上是使用 <code>display: none</code>）</p><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Global_attributes/hidden" target="_blank" rel="noreferrer">hidden - HTML（超文本标记语言） | MDN</a></p><p><strong>特点</strong>：</p><ol><li>不占据空间</li><li>不响应事件</li><li>不支持动画</li></ol>',60),r=[t];function d(c,n,p,s,h,b){return o(),i("div",null,r)}const u=e(a,[["render",d]]);export{g as __pageData,u as default};
