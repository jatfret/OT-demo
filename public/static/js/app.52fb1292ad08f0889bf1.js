webpackJsonp([1],{"/mJ1":function(t,e,i){"use strict";e.a={name:"hello",data:function(){return{msg:"Welcome to Your Vue.js App"}}}},"/wcs":function(t,e){},0:function(t,e){},"0fMr":function(t,e,i){"use strict";e.a={props:{section:{type:String,required:!0}}}},"0rsq":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"index-page"},[i("ul",[i("li",[i("router-link",{class:{active:"index"===t.section},attrs:{to:"/"}},[t._v("首页")])],1),t._v(" "),i("li",[i("router-link",{class:{active:"list"===t.section},attrs:{to:"/list"}},[t._v("我的列表")])],1)])])},a=[],s={render:n,staticRenderFns:a};e.a=s},"1Io0":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"single-choice",on:{click:function(e){t.switchToEdit(t.topic)}}},[i("div",{staticClass:"single-choice-show"},[i("h3",{staticClass:"topic-title"},[t._v(t._s(t.topicIndex+1)+"."+t._s(t.paperTopic.title))]),t._v(" "),i("ul",t._l(t.paperTopic.options,function(e,n){return i("li",[i("input",{attrs:{type:"radio",id:e.id,name:"paperTitle.id"}}),t._v(" "),i("label",{attrs:{for:e.id}},[t._v(t._s(e.text))])])}))])])},a=[],s={render:n,staticRenderFns:a};e.a=s},"45dn":function(t,e){},"60k8":function(t,e,i){"use strict";function n(t){i("wDEL")}var a=i("g7Em"),s=i("uAVG"),r=i("VU/8"),o=n,c=r(a.a,s.a,o,"data-v-2a5c62bd",null);e.a=c.exports},"7b1R":function(t,e){},"8Ho+":function(t,e,i){"use strict";function n(t){i("cG2S")}var a=i("u/IF"),s=i("Wzq0"),r=i("VU/8"),o=n,c=r(a.a,s.a,o,"data-v-52785f81",null);e.a=c.exports},"Drt/":function(t,e){},G5Cd:function(t,e,i){"use strict";var n=i("KBQO");e.a={name:"edit-topic",props:{topic:Object},data:function(){return{editingTopic:this.topic||n.a.getSingleChoice()}},methods:{addOption:function(){this.editingTopic.options.push({text:"选项"})},deleteOption:function(t){this.editingTopic.options.splice(t,1)},savePaperTopic:function(t){this.$emit("savePaperTopic",t)},cancelEditing:function(){this.$emit("cancelTopicEditing")}}}},GKmE:function(t,e,i){"use strict";function n(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var e=16*Math.random()|0;return("x"===t?e:3&e|8).toString(16)})}i.d(e,"a",function(){return n})},Gc5V:function(t,e,i){"use strict";function n(t){i("ZvXf")}var a=i("G5Cd"),s=i("HHI7"),r=i("VU/8"),o=n,c=r(a.a,s.a,o,"data-v-7809f46e",null);e.a=c.exports},HHI7:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"new-topic"},[i("form",[i("p",[i("label",[t._v("题目:")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.editingTopic.title,expression:"editingTopic.title"}],staticClass:"title",attrs:{type:"text",required:""},domProps:{value:t.editingTopic.title},on:{input:function(e){e.target.composing||(t.editingTopic.title=e.target.value)}}})]),t._v(" "),i("p",[i("select",{directives:[{name:"model",rawName:"v-model",value:t.editingTopic.type,expression:"editingTopic.type"}],on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.editingTopic.type=e.target.multiple?i:i[0]}}},[i("option",{attrs:{value:"SingleChoice"}},[t._v("单选")])])]),t._v(" "),t._l(t.editingTopic.options,function(e,n){return i("p",[i("input",{directives:[{name:"model",rawName:"v-model",value:e.text,expression:"option.text"}],staticClass:"option",attrs:{type:"text"},domProps:{value:e.text},on:{input:function(t){t.target.composing||(e.text=t.target.value)}}}),t._v(" "),i("span",{staticClass:"delete-option",on:{click:function(e){t.deleteOption(n)}}},[t._v("×")])])}),t._v(" "),i("p",[i("input",{staticClass:"new-option",attrs:{type:"button",value:"新建选项"},on:{click:t.addOption}})]),t._v(" "),i("div",{staticClass:"actions"},[i("input",{staticClass:"btn btn-info",attrs:{type:"submit",value:"保存"},on:{click:function(e){t.savePaperTopic(t.editingTopic)}}}),t._v(" "),i("input",{staticClass:"btn btn-default",attrs:{type:"button",value:"取消"},on:{click:t.cancelEditing}})])],2)])},a=[],s={render:n,staticRenderFns:a};e.a=s},Hff1:function(t,e,i){"use strict";e.a={name:"single-choice",props:{topic:Object,topicIndex:Number},data:function(){return{paperTopic:this.topic}},watch:{topic:function(t){this.paperTopic=t}},methods:{switchToEdit:function(t){this.$emit("switchToEdit",t.id)}}}},I9F0:function(t,e,i){"use strict";function n(t){i("p0ty")}var a=i("uzpW"),s=i("d5SX"),r=i("VU/8"),o=n,c=r(a.a,s.a,o,"data-v-61c086ed",null);e.a=c.exports},KBQO:function(t,e,i){"use strict";i.d(e,"a",function(){return a});var n=i("GKmE"),a={title:"试卷标题",description:"为了给您提供更好的服务，希望您能抽出几分钟时间，将您的感受和建议告诉我们，我们非常重视每位用户的宝贵意见,期待您的参与！现在我们就马上开始吧！",getSingleChoice:function(){return{id:i.i(n.a)(),title:"",type:"SingleChoice",options:[{id:i.i(n.a)(),text:"选项"},{id:i.i(n.a)(),text:"选项"}]}}}},M93x:function(t,e,i){"use strict";function n(t){i("7b1R")}var a=i("xJD8"),s=i("VJkn"),r=i("VU/8"),o=n,c=r(a.a,s.a,o,null,null);e.a=c.exports},"N+Ij":function(t,e,i){"use strict";function n(t){i("Drt/")}var a=i("/mJ1"),s=i("Nm2K"),r=i("VU/8"),o=n,c=r(a.a,s.a,o,"data-v-06f0205f",null);e.a=c.exports},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("7+uW"),a=i("M93x"),s=i("YaEn");n.a.config.productionTip=!1,new n.a({el:"#app",router:s.a,template:"<App/>",components:{App:a.a}})},Nm2K:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"hello"},[i("h1",[t._v(t._s(t.msg))]),t._v(" "),i("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),i("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",[i("li",[i("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("Core Docs")])]),t._v(" "),i("li",[i("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("Forum")])]),t._v(" "),i("li",[i("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[t._v("Community Chat")])]),t._v(" "),i("li",[i("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("Twitter")])]),t._v(" "),i("br"),t._v(" "),i("li",[i("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("Docs for This Template")])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",[i("li",[i("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[t._v("vue-router")])]),t._v(" "),i("li",[i("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[t._v("vuex")])]),t._v(" "),i("li",[i("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[t._v("vue-loader")])]),t._v(" "),i("li",[i("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[t._v("awesome-vue")])])])}],s={render:n,staticRenderFns:a};e.a=s},OPVD:function(t,e,i){"use strict";function n(t){i("RQyB")}var a=i("0fMr"),s=i("0rsq"),r=i("VU/8"),o=n,c=r(a.a,s.a,o,"data-v-cd4ebc06",null);e.a=c.exports},RQyB:function(t,e){},"UJ3+":function(t,e,i){"use strict";function n(t){i("/wcs")}var a=i("Hff1"),s=i("1Io0"),r=i("VU/8"),o=n,c=r(a.a,s.a,o,"data-v-2d7b3e35",null);e.a=c.exports},VJkn:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("transition",{attrs:{name:"slide"}},[i("router-view")],1)],1)},a=[],s={render:n,staticRenderFns:a};e.a=s},Wzq0:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("navigator",{attrs:{section:"list"}}),t._v(" "),i("div",{staticClass:"list-page"},[i("div",{staticClass:"header"},[i("router-link",{staticClass:"btn btn-important",attrs:{to:{name:"edit"}}},[t._v("\n        新建\n      ")])],1),t._v(" "),t.list.length?i("div",[i("table",[t._m(0),t._v(" "),i("tbody",t._l(t.list,function(e,n){return i("tr",{key:e._id},[i("td",[t._v(t._s(n+1))]),t._v(" "),i("td",[t._v(t._s(e.title))]),t._v(" "),i("td",[t._v(t._s(t._f("moment")(e.created_at)))]),t._v(" "),i("td",[i("router-link",{staticClass:"btn btn-info",attrs:{to:{name:"edit",params:{id:e._id}}}},[t._v("\n                编辑\n              ")]),t._v(" "),i("button",{staticClass:"btn btn-primary",on:{click:function(i){t.deletePaper(e._id)}}},[t._v("删除")])],1)])}))])]):t._e()])],1)},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("thead",[i("tr",[i("th",[t._v("序号")]),t._v(" "),i("th",[t._v("标题")]),t._v(" "),i("th",[t._v("创建时间")]),t._v(" "),i("th",[t._v("操作")])])])}],s={render:n,staticRenderFns:a};e.a=s},YCp8:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("navigator",{attrs:{section:"index"}}),t._v(" "),t._m(0)],1)},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"index-page"},[i("h3",[t._v("首页")])])}],s={render:n,staticRenderFns:a};e.a=s},YaEn:function(t,e,i){"use strict";var n=i("7+uW"),a=i("/ocq"),s=i("N+Ij"),r=i("rASM"),o=i("8Ho+"),c=i("I9F0");n.a.use(a.a),e.a=new a.a({routes:[{path:"/",name:"index",component:r.a},{path:"/hello",name:"hello",component:s.a},{path:"/list",name:"list",component:o.a},{path:"/edit/:id?",name:"edit",component:c.a}]})},ZWvd:function(t,e,i){"use strict";function n(t){i("45dn")}var a=i("oOh+"),s=i("hnrC"),r=i("VU/8"),o=n,c=r(a.a,s.a,o,"data-v-6c4f7f8c",null);e.a=c.exports},ZvXf:function(t,e){},cBon:function(t,e,i){"use strict";var n=i("OPVD");e.a={name:"index",components:{Navigator:n.a}}},cG2S:function(t,e){},d5SX:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"layout-wrapper"},[i("navigator",{attrs:{section:"edit"}}),t._v(" "),i("div",{staticClass:"edit-page"},[i("div",{staticClass:"main-content"},[i("div",{staticClass:"paper-wrapper"},[i("paper-header",{attrs:{title:t.paper.title,description:t.paper.description},on:{paperHeaderChange:t.paperHeaderChange}}),t._v(" "),t._l(t.paper.topics,function(e,n){return i("div",{staticClass:"topic-wrapper"},[t.topicEditingID===e.id?i("edit-topic",{attrs:{topic:e},on:{savePaperTopic:t.savePaperTopic,cancelTopicEditing:t.cancelTopicEditing}}):i("single-choice",{attrs:{topic:e,topicIndex:n},on:{switchToEdit:t.switchToEdit}}),t._v(" "),i("span",{staticClass:"delete-topic",on:{click:function(i){t.deletePaperTopic(e.id)}}},[t._v("×")])],1)}),t._v(" "),t.topicAdding?i("div",{staticClass:"add-wrapper"},[i("edit-topic",{on:{savePaperTopic:t.savePaperTopic,cancelTopicEditing:t.cancelTopicEditing}})],1):t._e(),t._v(" "),i("add-topic-button",{on:{addPaperTopic:t.addPaperTopic}})],2)])])],1)},a=[],s={render:n,staticRenderFns:a};e.a=s},g7Em:function(t,e,i){"use strict";e.a={name:"paper-header",props:{title:String,description:String},data:function(){return{paperTitle:this.title,paperDescription:this.description}},watch:{title:function(t){this.paperTitle=t},description:function(t){this.paperDescription=t}},methods:{paperHeaderChange:function(){this.$emit("paperHeaderChange",this.paperTitle,this.paperDescription)}}}},hnrC:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"add-topic-button",on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.addPaperTopic(e)}}},[t._v("+")])},a=[],s={render:n,staticRenderFns:a};e.a=s},"oOh+":function(t,e,i){"use strict";e.a={name:"add-topic-buttn",methods:{addPaperTopic:function(){this.$emit("addPaperTopic")}}}},p0ty:function(t,e){},pyzA:function(t,e,i){"use strict";i.d(e,"a",function(){return n});var n={path:"",socketHost:"http://120.77.36.131:3000"}},rASM:function(t,e,i){"use strict";var n=i("cBon"),a=i("YCp8"),s=i("VU/8"),r=s(n.a,a.a,null,null,null);e.a=r.exports},"u/IF":function(t,e,i){"use strict";var n=i("mvHQ"),a=i.n(n),s=i("mtWM"),r=i.n(s),o=i("PJh5"),c=i.n(o),p=i("pyzA"),u=i("OPVD");e.a={name:"list",components:{Navigator:u.a},data:function(){return{list:[]}},mounted:function(){this.fetchData()},methods:{fetchData:function(){var t=this;r.a.get(p.a.path+"/paper/getPaperList").then(function(e){t.list=e.data.data.papers}).catch(function(t){alert(t)})},deletePaper:function(t){var e=this;fetch(p.a.path+"/paper/deletePaper",{method:"post",headers:{"Content-Type":"application/json"},mode:"cors",body:a()({id:t})}).then(function(t){return t.json()}).then(function(i){var n=void 0;e.list.forEach(function(e,i){e._id===t&&(n=i)}),e.list.splice(n,1)})}},filters:{moment:function(t){return c()(t).format("YYYY-MM-DD hh:mm:ss")}}}},uAVG:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"paper-header"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.paperTitle,expression:"paperTitle"}],staticClass:"paper-title",attrs:{type:"text",required:""},domProps:{value:t.paperTitle},on:{change:function(e){e.stopPropagation(),e.preventDefault(),t.paperHeaderChange(e)},input:function(e){e.target.composing||(t.paperTitle=e.target.value)}}}),t._v(" "),i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.paperDescription,expression:"paperDescription"}],staticClass:"paper-description",attrs:{type:"text"},domProps:{value:t.paperDescription},on:{change:function(e){e.stopPropagation(),e.preventDefault(),t.paperHeaderChange(e)},input:function(e){e.target.composing||(t.paperDescription=e.target.value)}}})])},a=[],s={render:n,staticRenderFns:a};e.a=s},uslO:function(t,e,i){function n(t){return i(a(t))}function a(t){var e=s[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}var s={"./af":"3CJN","./af.js":"3CJN","./ar":"3MVc","./ar-dz":"tkWw","./ar-dz.js":"tkWw","./ar-kw":"j8cJ","./ar-kw.js":"j8cJ","./ar-ly":"wPpW","./ar-ly.js":"wPpW","./ar-ma":"dURR","./ar-ma.js":"dURR","./ar-sa":"7OnE","./ar-sa.js":"7OnE","./ar-tn":"BEem","./ar-tn.js":"BEem","./ar.js":"3MVc","./az":"eHwN","./az.js":"eHwN","./be":"3hfc","./be.js":"3hfc","./bg":"lOED","./bg.js":"lOED","./bn":"aM0x","./bn.js":"aM0x","./bo":"w2Hs","./bo.js":"w2Hs","./br":"OSsP","./br.js":"OSsP","./bs":"aqvp","./bs.js":"aqvp","./ca":"wIgY","./ca.js":"wIgY","./cs":"ssxj","./cs.js":"ssxj","./cv":"N3vo","./cv.js":"N3vo","./cy":"ZFGz","./cy.js":"ZFGz","./da":"YBA/","./da.js":"YBA/","./de":"DOkx","./de-at":"8v14","./de-at.js":"8v14","./de-ch":"Frex","./de-ch.js":"Frex","./de.js":"DOkx","./dv":"rIuo","./dv.js":"rIuo","./el":"CFqe","./el.js":"CFqe","./en-au":"Sjoy","./en-au.js":"Sjoy","./en-ca":"Tqun","./en-ca.js":"Tqun","./en-gb":"hPuz","./en-gb.js":"hPuz","./en-ie":"ALEw","./en-ie.js":"ALEw","./en-nz":"dyB6","./en-nz.js":"dyB6","./eo":"Nd3h","./eo.js":"Nd3h","./es":"LT9G","./es-do":"7MHZ","./es-do.js":"7MHZ","./es.js":"LT9G","./et":"XlWM","./et.js":"XlWM","./eu":"sqLM","./eu.js":"sqLM","./fa":"2pmY","./fa.js":"2pmY","./fi":"nS2h","./fi.js":"nS2h","./fo":"OVPi","./fo.js":"OVPi","./fr":"tzHd","./fr-ca":"bXQP","./fr-ca.js":"bXQP","./fr-ch":"VK9h","./fr-ch.js":"VK9h","./fr.js":"tzHd","./fy":"g7KF","./fy.js":"g7KF","./gd":"nLOz","./gd.js":"nLOz","./gl":"FuaP","./gl.js":"FuaP","./gom-latn":"+27R","./gom-latn.js":"+27R","./he":"Nzt2","./he.js":"Nzt2","./hi":"ETHv","./hi.js":"ETHv","./hr":"V4qH","./hr.js":"V4qH","./hu":"xne+","./hu.js":"xne+","./hy-am":"GrS7","./hy-am.js":"GrS7","./id":"yRTJ","./id.js":"yRTJ","./is":"upln","./is.js":"upln","./it":"FKXc","./it.js":"FKXc","./ja":"ORgI","./ja.js":"ORgI","./jv":"JwiF","./jv.js":"JwiF","./ka":"RnJI","./ka.js":"RnJI","./kk":"j+vx","./kk.js":"j+vx","./km":"5j66","./km.js":"5j66","./kn":"gEQe","./kn.js":"gEQe","./ko":"eBB/","./ko.js":"eBB/","./ky":"6cf8","./ky.js":"6cf8","./lb":"z3hR","./lb.js":"z3hR","./lo":"nE8X","./lo.js":"nE8X","./lt":"/6P1","./lt.js":"/6P1","./lv":"jxEH","./lv.js":"jxEH","./me":"svD2","./me.js":"svD2","./mi":"gEU3","./mi.js":"gEU3","./mk":"Ab7C","./mk.js":"Ab7C","./ml":"oo1B","./ml.js":"oo1B","./mr":"5vPg","./mr.js":"5vPg","./ms":"ooba","./ms-my":"G++c","./ms-my.js":"G++c","./ms.js":"ooba","./my":"F+2e","./my.js":"F+2e","./nb":"FlzV","./nb.js":"FlzV","./ne":"/mhn","./ne.js":"/mhn","./nl":"3K28","./nl-be":"Bp2f","./nl-be.js":"Bp2f","./nl.js":"3K28","./nn":"C7av","./nn.js":"C7av","./pa-in":"pfs9","./pa-in.js":"pfs9","./pl":"7LV+","./pl.js":"7LV+","./pt":"ZoSI","./pt-br":"AoDM","./pt-br.js":"AoDM","./pt.js":"ZoSI","./ro":"wT5f","./ro.js":"wT5f","./ru":"ulq9","./ru.js":"ulq9","./sd":"fW1y","./sd.js":"fW1y","./se":"5Omq","./se.js":"5Omq","./si":"Lgqo","./si.js":"Lgqo","./sk":"OUMt","./sk.js":"OUMt","./sl":"2s1U","./sl.js":"2s1U","./sq":"V0td","./sq.js":"V0td","./sr":"f4W3","./sr-cyrl":"c1x4","./sr-cyrl.js":"c1x4","./sr.js":"f4W3","./ss":"7Q8x","./ss.js":"7Q8x","./sv":"Fpqq","./sv.js":"Fpqq","./sw":"DSXN","./sw.js":"DSXN","./ta":"+7/x","./ta.js":"+7/x","./te":"Nlnz","./te.js":"Nlnz","./tet":"gUgh","./tet.js":"gUgh","./th":"XzD+","./th.js":"XzD+","./tl-ph":"3LKG","./tl-ph.js":"3LKG","./tlh":"m7yE","./tlh.js":"m7yE","./tr":"k+5o","./tr.js":"k+5o","./tzl":"iNtv","./tzl.js":"iNtv","./tzm":"FRPF","./tzm-latn":"krPU","./tzm-latn.js":"krPU","./tzm.js":"FRPF","./uk":"ntHu","./uk.js":"ntHu","./ur":"uSe8","./ur.js":"uSe8","./uz":"XU1s","./uz-latn":"/bsm","./uz-latn.js":"/bsm","./uz.js":"XU1s","./vi":"0X8Q","./vi.js":"0X8Q","./x-pseudo":"e/KL","./x-pseudo.js":"e/KL","./yo":"YXlc","./yo.js":"YXlc","./zh-cn":"Vz2w","./zh-cn.js":"Vz2w","./zh-hk":"ZUyn","./zh-hk.js":"ZUyn","./zh-tw":"BbgG","./zh-tw.js":"BbgG"};n.keys=function(){return Object.keys(s)},n.resolve=a,t.exports=n,n.id="uslO"},uzpW:function(t,e,i){"use strict";var n=i("mvHQ"),a=i.n(n),s=i("M4fF"),r=i.n(s),o=i("mtWM"),c=i.n(o),p=i("DmT9"),u=i.n(p),l=i("l7H3"),d=(i.n(l),i("X29p")),v=i.n(d),f=i("pyzA"),h=i("OPVD"),m=i("Gc5V"),g=i("ZWvd"),j=i("60k8"),_=i("UJ3+"),x=i("KBQO");e.a={name:"edit",components:{Navigator:h.a,EditTopic:m.a,AddTopicButton:g.a,PaperHeader:j.a,SingleChoice:_.a},data:function(){return{socket:u.a.connect(""+f.a.socketHost,{forceNew:!0}),id:this.$route.params.id,topicAdding:!1,topicEditingID:null,isNew:void 0===this.$route.params.id,paper:{title:x.a.title,description:x.a.description,topics:[]},originPaper:{title:x.a.title,description:x.a.description,topics:[]}}},mounted:function(){var t=this;this.isNew||this.fetchPaper(),this.socket.on("updateSuccess",function(e){if(console.log("received updated message:",e),e.data.status&&t.id===e.data.paper._id){var i=t.getComputedResult(e.data.paper);t.paper=i}})},methods:{stringifyJSON:function(t){if(t){var e=r.a.cloneDeep(t);return a()(e)}},parseJSON:function(t){if(t){var e=r.a.cloneDeep(t);return JSON.parse(e)}},computedChanges:function(t,e){var i=new v.a.diff_match_patch,n=i.diff_main(t,e);return l.Changeset.fromDiff(n)},getComputedResult:function(t){var e=this.stringifyJSON(r.a.cloneDeep(this.originPaper)),i=this.stringifyJSON(r.a.cloneDeep(t)),n=this.stringifyJSON(r.a.cloneDeep(this.paper)),a=this.computedChanges(e,n),s=this.computedChanges(e,i),o=a.transformAgainst(s);return this.parseJSON(o.apply(i))},fetchPaper:function(){var t=this,e=f.a.path+"/paper/getPaper?id="+this.id;c.a.get(e).then(function(e){t.paper=e.data.data.paper}).catch(function(t){alert(t)})},addPaperTopic:function(){this.topicAdding=!0},switchToEdit:function(t){this.topicEditingID=t},savePaperTopic:function(t){if(this.topicAdding)this.paper.topics.push(t);else{var e=void 0;this.paper.topics.filter(function(i,n){if(i.id===t.id)return e=n,!0}),this.paper.topics.splice(e,1,t)}this.savePaper()},deletePaperTopic:function(t){var e=void 0;this.paper.topics.filter(function(i,n){if(i.id===t.id)return e=n,!0}),this.paper.topics.splice(e,1),this.savePaper()},cancelTopicEditing:function(){console.log("cancel"),this.topicAdding=!1,this.topicEditingID=null},paperHeaderChange:function(t,e){this.paper.title=t,this.paper.description=e,this.savePaper()},createPaper:function(){return c.a.post(f.a.path+"/paper/createPaper")},updatePaper:function(t){var e=this;console.log(t),c()({method:"post",url:f.a.path+"/paper/updatePaper",headers:{"Content-Type":"application/json"},data:t}).then(function(t){e.topicAdding=!1,e.topicEditingID=null,e.originPaper=r.a.cloneDeep(e.paper),e.isNew||e.socket.emit("updatePaper",{id:e.id}),e.isNew=!1}).catch(function(t){alert(t)})},savePaper:function(){var t=this;if(this.isNew)this.createPaper().then(function(e){console.log(e);var i=e.data;t.$router.push({name:"edit",params:{id:i.data.id}}),t.id=i.data.id,t.paper.id=i.data.id;var n=t.stringifyJSON(t.paper);t.updatePaper(n)});else{var e=this.stringifyJSON(this.paper);this.updatePaper(e)}}}}},wDEL:function(t,e){},xJD8:function(t,e,i){"use strict";e.a={name:"app"}}},["NHnr"]);
//# sourceMappingURL=app.52fb1292ad08f0889bf1.js.map