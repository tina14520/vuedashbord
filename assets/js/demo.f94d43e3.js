(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["demo"],{"0768":function(e,t,c){"use strict";c.r(t);var n=c("7a23"),o=Object(n["o"])("div",{class:"heading"},[Object(n["o"])("h1",{class:"title"},"CORS")],-1),r={key:0},l={key:1};function u(e,t,c,u,a,i){return Object(n["F"])(),Object(n["j"])("div",null,[o,Object(n["o"])("div",null,[Object(n["o"])("button",{onClick:t[1]||(t[1]=function(e){return i.fetch()})},"Fetch typicode api by cors")]),a.error?(Object(n["F"])(),Object(n["j"])("div",r,[Object(n["o"])("h2",null,Object(n["S"])(a.error.message),1),Object(n["o"])("pre",null,[Object(n["o"])("code",null,Object(n["S"])(a.error.stack),1)])])):(Object(n["F"])(),Object(n["j"])("ul",l,[(Object(n["F"])(!0),Object(n["j"])(n["b"],null,Object(n["M"])(a.photos,(function(e){return Object(n["F"])(),Object(n["j"])("li",{key:e},Object(n["S"])(e.title),1)})),128))]))])}var a={name:"demo-cors",data:function(){return{photos:{},error:!1}},methods:{fetch:function(){var e=this,t="http://jsonplaceholder.typicode.com/photos";this.$axios.get(t).then((function(t){console.log(t.data),console.log(t.status),console.log(t.statusText),console.log(t.headers),console.log(t.config),e.photos=t.data,e.error=!1})).catch((function(t){e.error=t}))}}};a.render=u;t["default"]=a},"36ad":function(e,t,c){"use strict";c.r(t);var n=c("7a23"),o=Object(n["hb"])("data-v-2d6fae9a");Object(n["I"])("data-v-2d6fae9a");var r=Object(n["o"])("div",{class:"heading"},[Object(n["o"])("h1",{class:"title"},"Vuex - Counter")],-1),l={class:"actions"};Object(n["G"])();var u=o((function(e,t,c,o,u,a){return Object(n["F"])(),Object(n["j"])("div",null,[r,Object(n["o"])("h2",null,Object(n["S"])(e.count),1),Object(n["o"])("div",l,[Object(n["o"])("button",{onClick:t[1]||(t[1]=function(){return e.increment&&e.increment.apply(e,arguments)})},"INC"),Object(n["o"])("button",{onClick:t[2]||(t[2]=function(){return e.incrementAsync&&e.incrementAsync.apply(e,arguments)})},"INC ASYNC"),Object(n["o"])("button",{onClick:t[3]||(t[3]=function(){return e.decrement&&e.decrement.apply(e,arguments)})},"DEC"),Object(n["o"])("button",{onClick:t[4]||(t[4]=function(){return e.decrementAsync&&e.decrementAsync.apply(e,arguments)})},"DEC ASYNC")])])})),a=c("5502"),i={name:"demo-vuex",computed:Object(a["c"])({count:"count"}),methods:Object(a["b"])({increment:"increment",incrementAsync:"incrementAsync",decrement:"decrement",decrementAsync:"decrementAsync"})};c("c15b");i.render=u,i.__scopeId="data-v-2d6fae9a";t["default"]=i},"46a4":function(e,t,c){"use strict";c.r(t);var n=c("7a23"),o=Object(n["o"])("div",{class:"heading"},[Object(n["o"])("h1",{class:"title"},"演示")],-1),r={class:"demos-links"};function l(e,t,c,l,u,a){var i=Object(n["O"])("router-link");return Object(n["F"])(),Object(n["j"])("div",null,[o,Object(n["o"])("ul",r,[(Object(n["F"])(!0),Object(n["j"])(n["b"],null,Object(n["M"])(a.demos,(function(e){return Object(n["F"])(),Object(n["j"])("li",{key:e},[Object(n["o"])(i,{to:e},{default:Object(n["db"])((function(){return[Object(n["n"])(Object(n["S"])(e.text),1)]})),_:2},1032,["to"])])})),128))])])}c("4de4"),c("7db0"),c("b0c0");var u={name:"demo",computed:{demos:function(){return this.$store.getters.header.menus.find((function(e){return"demo"===e.name})).children.filter((function(e){return e.name}))}}};u.render=l;t["default"]=u},"4de4":function(e,t,c){"use strict";var n=c("23e7"),o=c("b727").filter,r=c("1dde"),l=r("filter");n({target:"Array",proto:!0,forced:!l},{filter:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}})},"4e54":function(e,t,c){"use strict";c.r(t);var n=c("7a23"),o=Object(n["o"])("div",{class:"heading"},[Object(n["o"])("h1",{class:"title"},"多语言")],-1);function r(e,t,c,r,l,u){return Object(n["F"])(),Object(n["j"])("div",null,[o,Object(n["o"])("p",null,Object(n["S"])(e.$t("message.hello")),1),Object(n["o"])("p",null,Object(n["S"])(e.$t("message.hello2",{name:"汪磊"})),1)])}var l={name:"demo-i18n"};l.render=r;t["default"]=l},6806:function(e,t,c){"use strict";c.r(t);var n=c("7a23"),o=Object(n["o"])("div",{class:"heading"},[Object(n["o"])("h1",{class:"title"},"HTTP 代理")],-1),r=Object(n["o"])("p",null,"本示例只有在本地开发环境工作，线上托管环境没有代理配置。",-1),l=Object(n["o"])("p",null,"！！！过时的示例！！！",-1),u={key:0},a={key:1};function i(e,t,c,i,s,b){return Object(n["F"])(),Object(n["j"])("div",null,[o,Object(n["o"])("div",null,[r,l,Object(n["o"])("button",{onClick:t[1]||(t[1]=function(e){return b.fetch()})},"Fetch jsonplaceholder api by proxy")]),s.error?(Object(n["F"])(),Object(n["j"])("div",u,[Object(n["o"])("h2",null,Object(n["S"])(s.error.message),1),Object(n["o"])("pre",null,[Object(n["o"])("code",null,Object(n["S"])(s.error.stack),1)])])):(Object(n["F"])(),Object(n["j"])("ul",a,[(Object(n["F"])(!0),Object(n["j"])(n["b"],null,Object(n["M"])(s.posts,(function(e){return Object(n["F"])(),Object(n["j"])("li",{key:e},Object(n["S"])(e.title),1)})),128))]))])}var s={name:"demo-proxy",data:function(){return{posts:{},error:!1}},methods:{fetch:function(){var e=this;this.$axios.get("/posts").then((function(t){console.log(t.data),console.log(t.status),console.log(t.statusText),console.log(t.headers),console.log(t.config),e.posts=t.data,e.error=!1})).catch((function(t){e.error=t}))}}};s.render=i;t["default"]=s},"7db0":function(e,t,c){"use strict";var n=c("23e7"),o=c("b727").find,r=c("44d2"),l="find",u=!0;l in[]&&Array(1)[l]((function(){u=!1})),n({target:"Array",proto:!0,forced:u},{find:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),r(l)},"7fdc":function(e,t,c){},b8c7:function(e,t,c){"use strict";c.r(t);var n=c("7a23"),o=Object(n["o"])("div",{class:"heading"},[Object(n["o"])("h1",{class:"title"},"数据绑定")],-1);function r(e,t,c,r,l,u){return Object(n["F"])(),Object(n["j"])("div",null,[o,Object(n["o"])("ul",null,[(Object(n["F"])(!0),Object(n["j"])(n["b"],null,Object(n["M"])(l.todos,(function(e){return Object(n["F"])(),Object(n["j"])("li",{key:e},[Object(n["eb"])(Object(n["o"])("input",{type:"checkbox","onUpdate:modelValue":function(t){return e.competed=t}},null,8,["onUpdate:modelValue"]),[[n["X"],e.competed]]),Object(n["o"])("span",null,Object(n["S"])(e.text),1)])})),128))])])}var l={name:"demo-data",data:function(){for(var e=[],t=0;t<100;t++)e.push({text:"JavaScript "+t,competed:t%2});return{todos:e}}};l.render=r;t["default"]=l},c15b:function(e,t,c){"use strict";c("7fdc")},ca51:function(e,t,c){"use strict";c.r(t);c("b0c0");var n=c("7a23"),o=Object(n["o"])("div",{class:"heading"},[Object(n["o"])("h1",{class:"title"},"路由参数")],-1),r=Object(n["o"])("p",null,[Object(n["n"])("尝试修改URL中的"),Object(n["o"])("strong",null,"汪磊"),Object(n["n"])("为其他的值，然后回车查看。")],-1);function l(e,t,c,l,u,a){return Object(n["F"])(),Object(n["j"])("div",null,[o,Object(n["o"])("h3",null,"Param: "+Object(n["S"])(e.$route.params.name),1),r])}var u={name:"demo-params"};u.render=l;t["default"]=u}}]);