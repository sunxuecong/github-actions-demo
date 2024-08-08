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
    details: 整理前端常用知识点
    link: /front/javascript/types
    linkText: 开始阅读
  - icon: 📘
    title: 开发FAQ
    details: 收集和整理开发中常见问题。
    link: /analysis/utils/only-allow
    linkText: 查看问题
  - icon: 💡
    title: 技术视野
    details: 跟随前沿技术，深度和广度学习。
    link: /workflow/utils/library
    linkText: 欢迎 Follow
  - icon:  🔧
    title: 编程工具
    details: 归纳一些编程相关工具与网站，提高效率。
    link: /efficiency/online-tools
    linkText: 提高效率
  - icon: 🐞
    title: 踩坑记录
    details: 那些年我们踩过的坑
    link: /pit/npm
    linkText: 踩坑记录
  - icon:  🎉
    title: 风来自很远的地方，去看看也无妨 😄。
    details: '<small class="bottom-small">-- Sain Sun</small>'
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
