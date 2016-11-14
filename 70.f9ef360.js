webpackJsonp([70],{113:function(s,t,a){s.exports=a(337)},210:function(s,t){s.exports='<section><h1>Swipe</h1> <blockquote> <p>轮播图，可自定义轮播时间间隔、动画时长等。</p> </blockquote> <hr> <h2>引入</h2> <pre><code class=language-javascript><span class=hljs-keyword>import</span> { Swipe, SwipeItem } <span class=hljs-keyword>from</span> <span class=hljs-string>\'mint-ui\'</span>;\n\nVue.component(Swipe.name, Swipe);\nVue.component(SwipeItem.name, SwipeItem);\n</code></pre> <h2>例子</h2> <p>基础用法</p> <pre><code class=language-html><span class=hljs-tag>&lt;<span class=hljs-name>mt-swipe</span> <span class=hljs-attr>:auto</span>=<span class=hljs-string>"4000"</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>mt-swipe-item</span>&gt;</span>1<span class=hljs-tag>&lt;/<span class=hljs-name>mt-swipe-item</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>mt-swipe-item</span>&gt;</span>2<span class=hljs-tag>&lt;/<span class=hljs-name>mt-swipe-item</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>mt-swipe-item</span>&gt;</span>3<span class=hljs-tag>&lt;/<span class=hljs-name>mt-swipe-item</span>&gt;</span>\n<span class=hljs-tag>&lt;/<span class=hljs-name>mt-swipe</span>&gt;</span>\n</code></pre> <p>隐藏 indicators</p> <pre><code class=language-html><span class=hljs-tag>&lt;<span class=hljs-name>mt-swipe</span> <span class=hljs-attr>:show-indicators</span>=<span class=hljs-string>"false"</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>mt-swipe-item</span>&gt;</span>1<span class=hljs-tag>&lt;/<span class=hljs-name>mt-swipe-item</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>mt-swipe-item</span>&gt;</span>2<span class=hljs-tag>&lt;/<span class=hljs-name>mt-swipe-item</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>mt-swipe-item</span>&gt;</span>3<span class=hljs-tag>&lt;/<span class=hljs-name>mt-swipe-item</span>&gt;</span>\n<span class=hljs-tag>&lt;/<span class=hljs-name>mt-swipe</span>&gt;</span>\n</code></pre> <p>取消自动播放</p> <pre><code class=language-html><span class=hljs-tag>&lt;<span class=hljs-name>mt-swipe</span> <span class=hljs-attr>:auto</span>=<span class=hljs-string>"0"</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>mt-swipe-item</span>&gt;</span>1<span class=hljs-tag>&lt;/<span class=hljs-name>mt-swipe-item</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>mt-swipe-item</span>&gt;</span>2<span class=hljs-tag>&lt;/<span class=hljs-name>mt-swipe-item</span>&gt;</span>\n  <span class=hljs-tag>&lt;<span class=hljs-name>mt-swipe-item</span>&gt;</span>3<span class=hljs-tag>&lt;/<span class=hljs-name>mt-swipe-item</span>&gt;</span>\n<span class=hljs-tag>&lt;/<span class=hljs-name>mt-swipe</span>&gt;</span>\n</code></pre> <h2>API</h2> <table> <thead> <tr> <th>参数</th> <th>说明</th> <th>类型</th> <th>可选值</th> <th>默认值</th> </tr> </thead> <tbody> <tr> <td>speed</td> <td>动画持时（毫秒）</td> <td>Number</td> <td></td> <td>300</td> </tr> <tr> <td>auto</td> <td>自动播放的时间间隔（毫秒）</td> <td>Number</td> <td></td> <td>3000</td> </tr> <tr> <td>continuous</td> <td>是否可以循环播放</td> <td>Boolean</td> <td></td> <td>true</td> </tr> <tr> <td>showIndicators</td> <td>是否显示 indicators</td> <td>Boolean</td> <td></td> <td>true</td> </tr> <tr> <td>prevent</td> <td>是否在 touchstart 事件触发时阻止事件的默认行为。设为 true 可提高运行在低版本安卓浏览器时的性能</td> <td>Boolean</td> <td></td> <td>false</td> </tr> </tbody> </table> <h2>Slot</h2> <h3>mt-swipe</h3> <table> <thead> <tr> <th>name</th> <th>描述</th> </tr> </thead> <tbody> <tr> <td>-</td> <td>一个或多个 <code>mt-swipe-item</code> 组件</td> </tr> </tbody> </table> <h3>mt-swipe-item</h3> <table> <thead> <tr> <th>name</th> <th>描述</th> </tr> </thead> <tbody> <tr> <td>-</td> <td>单个轮播图的内容</td> </tr> </tbody> </table> </section>'},337:function(s,t,a){var n,p,e={};p=a(210),s.exports=n||{},s.exports.__esModule&&(s.exports=s.exports.default);var l="function"==typeof s.exports?s.exports.options||(s.exports.options={}):s.exports;p&&(l.template=p),l.computed||(l.computed={}),Object.keys(e).forEach(function(s){var t=e[s];l.computed[s]=function(){return t}})}});