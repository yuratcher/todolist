webpackJsonp([2],[,,,,function(t,e,i){"use strict";function n(t){i(15)}var r={name:"item",props:{id:{type:Number},item:{type:Object}},computed:{getList:function(){return this.item.mysuperid===this.id?this.item:null}}},o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"item-block"},[i("div",{staticClass:"image"},[i("img",{attrs:{src:t.getList.avatar_url}})]),i("div",{staticClass:"item-block__info"},[i("label",[t._v("Login GitHub: ")]),i("span",[t._v(t._s(t.getList.login))])]),i("div",{staticClass:"item-block__info"},[i("label",[t._v("Name: ")]),i("span",[t._v(t._s(t.getList.name||"noname"))])]),i("div",{staticClass:"item-block__info"},[i("label",[t._v("Id GitHub: ")]),i("span",[t._v(t._s(t.getList.id))])]),i("div",{staticClass:"item-block__info"},[i("label",[t._v("Type: ")]),i("span",[t._v(t._s(t.getList.type))])]),i("div",{staticClass:"item-block__info"},[i("label",[t._v("Url: ")]),i("a",{attrs:{href:t.getList.html_url}},[t._v(t._s(t.getList.html_url))])]),i("div",{staticClass:"item-block__info"},[i("label",[t._v("Followers: ")]),i("span",[t._v(" "+t._s(t.getList.followers))])]),i("div",{staticClass:"item-block__info"},[i("label",[t._v("Following: ")]),i("span",[t._v(" "+t._s(t.getList.following))])]),i("div",{staticClass:"item-block__info"},[i("label",[t._v("Create date: ")]),i("span",[t._v(" "+t._s(t.getList.created_at.substr(0,10)))])]),i("div",{staticClass:"item-block__info"},[i("label",[t._v("Repositories: ")]),i("span",[t._v(t._s(t.getList.public_repos))])])])},s=[],a={render:o,staticRenderFns:s},l=a,u=i(1),c=n,p=u(r,l,!1,c,null,null);e.b=p.exports},function(t,e,i){"use strict";function n(t){i(16)}var r=(i(3),{name:"headers",props:{id:{type:Number}},methods:{submit:function(){this.$store.dispatch("GET_ITEM",{value:this.$refs.entername.value,id:this.id})}}}),o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"search"},[i("label",[t._v(" Enter GitHub Login: ")]),i("input",{ref:"entername",on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.submit(e)}}})])},s=[],a={render:o,staticRenderFns:s},l=a,u=i(1),c=n,p=u(r,l,!1,c,null,null);e.b=p.exports},function(t,e,i){"use strict";function n(t){i(12)}function r(){return new v.a.Store({state:{item:[]},actions:b,mutations:g,getters:h})}function o(){return new T.a({mode:"history",routes:[{path:"/",component:E},{path:"/",redirect:"/"}]})}Object.defineProperty(e,"__esModule",{value:!0});var s={};i.d(s,"Item",function(){return w.Item}),i.d(s,"Headers",function(){return y.Headers});var a=i(0),l=(i(10),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("transition",{attrs:{name:"fade",mode:"out-in"}},[i("router-view",{staticClass:"view"})],1)],1)}),u=[],c={render:l,staticRenderFns:u},p=c,_=i(1),d=n,m=_(null,p,!1,d,null,null),f=m.exports,v=i(3),b={GET_ITEM:function(t,e){var i=t.commit,n=(t.state,e.value),r=e.id;axios.get("https://api.github.com/users/"+n).then(function(t){i("GET_NEW_ITEM",{data:t.data,id:r})}).catch(function(){i("GET_ERROR_ITEM",{id:r})})},MOUNT_ITEM:function(t){var e=t.commit;t.state;e("SET_MOUNT_ITEM")}},g={SET_ACTIVE_TYPE:function(t,e){var i=e.type;t.activeType=i},SET_LIST:function(t,e){var i=e.type,n=e.ids;t.lists[i]=n},SET_ITEMS:function(t,e){e.items.forEach(function(e){e&&a.a.set(t.items,e.id,e)})},SET_USER:function(t,e){var i=e.id,n=e.user;a.a.set(t.users,i,n||!1)},GET_NEW_ITEM:function(t,e){var i=e.data,n=e.id,r=Object.assign(i,{mysuperid:n});a.a.set(t.item,n,r)},GET_ERROR_ITEM:function(t,e){var i=e.id,n={login:"NO THIS USER!!!",id:0,avatar_url:"http://toilettissuespray.com/wp-content/uploads/2017/10/Screen-Shot-2017-10-07-at-7.36.34-PM.png",html_url:"",type:"",name:"",public_repos:0,followers:0,following:0,created_at:"0000-00-03T05:34:03Z",mysuperid:i};a.a.set(t.item,i,n)},SET_MOUNT_ITEM:function(t){var e={login:"",id:0,avatar_url:"http://polishsouls.com/img/placeholderfemale.jpg",html_url:"",type:"",name:"",public_repos:0,followers:0,following:0,created_at:"0000-00-00T05:34:03Z",mysuperid:0};a.a.set(t.item,0,e);var i={login:"",id:0,avatar_url:"http://polishsouls.com/img/placeholderfemale.jpg",html_url:"",type:"",name:"",public_repos:0,followers:0,following:0,created_at:"0000-00-00T05:34:03Z",mysuperid:1};a.a.set(t.item,1,i)}},h={getList:function(t){return t.item},getWinner:function(t){var e=t.item[0]?t.item[0]:{};e=Object.assign(e,{prizeCount:0});var i=t.item[1]?t.item[1]:{};return i=Object.assign(i,{prizeCount:0}),t.item&&t.item.length>1&&e.id!=i.id?(e.id<i.id&&e.id!=i.id?e.prizeCount=e.prizeCount+1:e.id!=i.id&&(i.prizeCount=i.prizeCount+1),e.public_repos>i.public_repos&&e.public_repos!=i.public_repos?e.prizeCount=e.prizeCount+1:e.public_repos!=i.public_repos&&(i.prizeCount=i.prizeCount+1),e.followers>i.followers&&e.followers!=i.followers?e.prizeCount=e.prizeCount+1:e.followers!=i.followers&&(i.prizeCount=i.prizeCount+1),e.prizeCount>i.prizeCount&&e.prizeCount!=i.prizeCount?"WINNER "+e.login:e.prizeCount!=i.prizeCount?"WINNER "+i.login:"you are friend"):e.id==i.id?"":"No one"}};a.a.use(v.a);var T=i(14);a.a.use(T.a);var E=function(){return i.e(0).then(i.bind(null,22))},C=i(17),w=i(4),y=i(5);a.a.mixin({beforeRouteUpdate:function(t,e,i){var n=this.$options.asyncData;n?n({store:this.$store,route:t}).then(i).catch(i):i()}});var I=function(){var t=r(),e=o();return Object(C.sync)(t,e),{app:new a.a({components:s,router:e,store:t,render:function(t){return t(f)}}),router:e,store:t,components:s}}(),z=I.app,k=I.router,L=I.store;window.__INITIAL_STATE__&&L.replaceState(window.__INITIAL_STATE__),k.onReady(function(){k.beforeResolve(function(t,e,i){var n=k.getMatchedComponents(t),r=k.getMatchedComponents(e),o=!1,s=n.filter(function(t,e){return o||(o=r[e]!==t)}),a=s.map(function(t){return t.asyncData}).filter(function(t){return t});if(!a.length)return i();Promise.all(a.map(function(e){return e({store:L,route:t})})).then(function(){i()}).catch(i)}),z.$mount("#app")}),"https:"===location.protocol&&navigator.serviceWorker&&navigator.serviceWorker.register("/service-worker.js")},,,,,,function(t,e){},,,function(t,e){},function(t,e){}],[6]);