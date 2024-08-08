---
layout: home
layoutClass: 'm-home-layout'

hero:
  name: Sain-notes
  text: 专注 & 洞察 & 分享
  tagline: 个人技术知识库，记录 & 分享个人碎片化、结构化、体系化的技术知识内容。
  image:
    src: /logo.svg
    alt: Sain-notes
  actions:
    - text: 快速开始
      link: /front/es6/
    - text: 在Github查看
      link: /analysis/react/18
      theme: alt
    - text: 听点音乐
      link: /analysis/react/18
      theme: alt
features:
  - icon: 📖
    title: 前端物语
    details: 整理前端常用知识点<small>（面试八股文）</small><br />如有异议按你的理解为主，不接受反驳
    link: /front/javascript/types
    linkText:   
  - icon: 📘
    title: 源码阅读
    details: 了解各种库的实现原理<br />学习其中的小技巧和冷知识
    link: /analysis/utils/only-allow
    linkText: 源码阅读
  - icon: 💡
    title: Workflow
    details: 在工作中学到的一切<small>（常用库/工具/奇淫技巧等）</small><br />配合 CV 大法来更好的摸鱼
    link: /workflow/utils/library
    linkText: 常用工具库
  - icon: 🧰
    title: 提效工具
    details: 工欲善其事，必先利其器<br />记录开发和日常使用中所用到的软件、插件、扩展等
    link: /efficiency/online-tools
    linkText: 提效工具
  - icon: 🐞
    title: 踩坑记录
    details: 那些年我们踩过的坑<br />总有一些让你意想不到的问题
    link: /pit/npm
    linkText: 踩坑记录
  - icon: 💯
    title: 风来自很远的地方，去看看也无妨 😄。
    details: '<small class="bottom-small">Sain Sun</small>'
    link: /cong
---

<style>
/*爱的魔力转圈圈*/
.m-home-layout .image-src:hover {

}
.m-home-layout .image-bg {
  background:none
}

 @media (max-width: 800px) {
  .m-home-layout .image-src {
    max-width:80%;
    max-height:88%;
  }
}
@media (min-width: 1080px) {
  .m-home-layout .image-src {
    max-width:370px;
    max-height:390px;
  }
 }

.m-home-layout .details small {
  opacity: 0.8;
}

.m-home-layout .item:last-child .details {
  display: flex;
  justify-content: flex-end;
  align-items: end;
}
</style>
