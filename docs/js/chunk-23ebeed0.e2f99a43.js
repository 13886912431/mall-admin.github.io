(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-23ebeed0"],{"25a1":function(e,r,t){"use strict";t("cfcc")},a55b:function(e,r,t){"use strict";t.r(r);var n=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"login"},[t("a-form-model",{ref:"loginForm",attrs:{model:e.form,"label-col":{span:6},"wrapper-col":{span:14},rules:e.rules},nativeOn:{keydown:function(r){return!r.type.indexOf("key")&&e._k(r.keyCode,"enter",13,r.key,"Enter")?null:e.login("loginForm")}}},[t("a-form-model-item",{attrs:{label:"E-mail",prop:"email",required:""}},[t("a-input",{model:{value:e.form.email,callback:function(r){e.$set(e.form,"email","string"===typeof r?r.trim():r)},expression:"form.email"}})],1),t("a-form-model-item",{attrs:{label:"Password",prop:"password",required:""}},[t("a-input",{attrs:{type:"password"},model:{value:e.form.password,callback:function(r){e.$set(e.form,"password","string"===typeof r?r.trim():r)},expression:"form.password"}})],1),t("a-form-model-item",{attrs:{"wrapper-col":{span:14,offset:6}}},[t("a-button",{attrs:{type:"primary"},on:{click:function(r){return e.login("loginForm")}}},[e._v(" 登录 ")]),t("a-button",{on:{click:e.register}},[e._v(" 注册 ")])],1)],1)],1)},o=[],a=(t("96cf"),t("1da1")),i=t("bb36"),s={login:function(e){return i["a"].post("/passport/login",e)}},l={name:"Login",data:function(){var e=/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,r=function(r,t,n){return t?e.test(t)?n():n(new Error("邮箱格式不正确")):n(new Error("请输入邮箱"))},t=function(e,r,t){return r?t():t(new Error("请输入密码"))};return{form:{email:"",password:""},rules:{email:[{validator:r,trigger:"change"}],password:[{validator:t,trigger:"change"}]}}},methods:{login:function(e){var r=this;this.$refs[e].validate(function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t){e.next=12;break}return e.prev=1,e.next=4,s.login(r.form);case 4:n=e.sent,r.$store.dispatch("user/login",n),r.$router.push("/"),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](1),r.$message.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(r){return e.apply(this,arguments)}}())},register:function(){this.$message.info("此功能还未开发")}}},c=l,u=(t("25a1"),t("2877")),p=Object(u["a"])(c,n,o,!1,null,"42677552",null);r["default"]=p.exports},cfcc:function(e,r,t){}}]);
//# sourceMappingURL=chunk-23ebeed0.e2f99a43.js.map