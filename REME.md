# https://www.cnblogs.com/mmzuo-798/p/7309564.html
## 2016年最火的前端框架当属Vue.js了，很多使用过vue的程序员这样评价它，“vue.js兼具angular.js和React.js的优点，并剔除了它们的缺点”。授予了这么高的评价的vue.js，也是开源世界华人的骄傲，因为它的作者是位中国人–尤雨溪（Evan You）
## Vue.js 是一个JavaScriptMVVM库, 是一套构建用户洁面的渐进式框架， 它是以数据驱动，组件化的思想构建的，采用自底向上增量的开发的设计，相对于angularjs，vue提供和更简单， 更简洁的API，使得我们能快速上手并使用vuejs; 同时比起 react + Redux 相对复杂的架构，Vue.js 更加轻量级也更加容易上手，是初创项目的首选前端框架。Vue 的核心库只关注视图层，它不仅易于上手，还便于与第三方库或既有项目整合。并且作者是华人的关系，Vue拥有着对华人开发者最友好的api文档和官方教程。 


## 调试插件
## 在vue调试方面，可以选择安装chrome插件vue Devtools。打开vue项目，在console控制台选择vue面板。在Devtools工具中，可以选择组件，查看对应组件内的数据信息。也可以选择Vuex选项，查看该项目内Vuex的状态变量信息。

## ue、React、Angular1对比
## 性能 对比
## 在Angular1中，在scope作用域中每一次数据变化，会触发watcher的重新计算，angular对常用的dom事件，xhr事件等做了封装， 在里面触发进入angular的digest流程。在digest流程里面，会从rootscope开始遍历， 检查所有的watcher。并且，如果一些 watcher 触发另一个更新，脏检查循环（digest cycle）可能要运行多次。Vue则没有这个问题，因为它使用基于依赖追踪的观察系统并且异步队列更新，数据的变化都是独立处罚的，除非数据之间有明确的依赖关系

### 社区拓展对比
### Angular1的背后是Google，所以社区基础是不需要担心的，从Tutorial到StackOverflow的问题数量都可以反映出生态系统很完整。Angular1之后的2.0版本几乎是一个推翻重做的框架，对于使用了1.X版本的项目，想要平滑的升级过渡到2.0版本应该是非常困难的。现在Angular2的线上应用数量还不算太多，主流编码还是以1.X版本居多。这个版本化巨大的差异也间接影响到了开发者对于angular的信心。 
### Vue和React都有强大的社区支持。React有状态管理库Flux、ReduxVue，相应的，Vue有vuex。Vue 和 React 都提供了强大的路由库来应对大型应用。然而Vue的路由库和状态管理库都是由官方维护支持的。React 则是选择把这些问题交给社区维护，因此创建了一个更分散的生态系统。但相对的，React 的生态系统相比 Vue 更加繁荣。此外，Vue 提供了Vue-cli 脚手架，包括了Webpack，Browserify，甚至路由库，能让你非常容易地构建项目。

### 学习陡峭度对比
## 在指令与组件方面，Vue中将指令和组件分得更清晰。指令只封装 DOM 操作，而组件代表一个自给自足的独立单元，有自己的视图和数据逻辑。在 Angular1 中两者有不少相混的地方。在API与框架设计方面，angular1都比vue要复杂的多。就个人感觉而言，angular1和React的学习曲线会相对陡峭一些，而vue的编码方式会更趋近于前端开发者的编程习惯。 
## 因为vue的作者是中国人，vue的官方网站、教程和api肯定是最完善、最易懂的。此外，每次大版本的发布，都会伴随着详尽的迁移说明文档，包含了很多详尽的阐述以及许多迁移的例子，甚至还有迁移工具。Angular的开发团队你们就不觉得脸红么… 
## Vue的使用非常的简单，创建一个本地的 .html 文件，然后通过如下方式引入 Vue：

## "libraryName": "element-ui" 按需加载element-ui组件

## router.start Vue Router2没有这个方法

## bash: npm i  --> npm start

