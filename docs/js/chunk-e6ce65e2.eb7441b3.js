(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e6ce65e2"],{1276:function(t,e,r){"use strict";var n=r("d784"),a=r("44e7"),i=r("825a"),o=r("1d80"),c=r("4840"),s=r("8aa5"),l=r("50c4"),u=r("14c3"),f=r("9263"),d=r("d039"),p=[].push,m=Math.min,v=4294967295,g=!d((function(){return!RegExp(v,"y")}));n("split",2,(function(t,e,r){var n;return n="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,r){var n=String(o(this)),i=void 0===r?v:r>>>0;if(0===i)return[];if(void 0===t)return[n];if(!a(t))return e.call(n,t,i);var c,s,l,u=[],d=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),m=0,g=new RegExp(t.source,d+"g");while(c=f.call(g,n)){if(s=g.lastIndex,s>m&&(u.push(n.slice(m,c.index)),c.length>1&&c.index<n.length&&p.apply(u,c.slice(1)),l=c[0].length,m=s,u.length>=i))break;g.lastIndex===c.index&&g.lastIndex++}return m===n.length?!l&&g.test("")||u.push(""):u.push(n.slice(m)),u.length>i?u.slice(0,i):u}:"0".split(void 0,0).length?function(t,r){return void 0===t&&0===r?[]:e.call(this,t,r)}:e,[function(e,r){var a=o(this),i=void 0==e?void 0:e[t];return void 0!==i?i.call(e,a,r):n.call(String(a),e,r)},function(t,a){var o=r(n,t,this,a,n!==e);if(o.done)return o.value;var f=i(t),d=String(this),p=c(f,RegExp),h=f.unicode,b=(f.ignoreCase?"i":"")+(f.multiline?"m":"")+(f.unicode?"u":"")+(g?"y":"g"),y=new p(g?f:"^(?:"+f.source+")",b),x=void 0===a?v:a>>>0;if(0===x)return[];if(0===d.length)return null===u(y,d)?[d]:[];var S=0,_=0,w=[];while(_<d.length){y.lastIndex=g?_:0;var E,$=u(y,g?d:d.slice(_));if(null===$||(E=m(l(y.lastIndex+(g?0:_)),d.length))===S)_=s(d,_,h);else{if(w.push(d.slice(S,_)),w.length===x)return w;for(var k=1;k<=$.length-1;k++)if(w.push($[k]),w.length===x)return w;_=S=E}}return w.push(d.slice(S)),w}]}),!g)},"14c3":function(t,e,r){var n=r("c6b6"),a=r("9263");t.exports=function(t,e){var r=t.exec;if("function"===typeof r){var i=r.call(t,e);if("object"!==typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==n(t))throw TypeError("RegExp#exec called on incompatible receiver");return a.call(t,e)}},"25f0":function(t,e,r){"use strict";var n=r("6eeb"),a=r("825a"),i=r("d039"),o=r("ad6d"),c="toString",s=RegExp.prototype,l=s[c],u=i((function(){return"/a/b"!=l.call({source:"a",flags:"b"})})),f=l.name!=c;(u||f)&&n(RegExp.prototype,c,(function(){var t=a(this),e=String(t.source),r=t.flags,n=String(void 0===r&&t instanceof RegExp&&!("flags"in s)?o.call(t):r);return"/"+e+"/"+n}),{unsafe:!0})},"3ca3":function(t,e,r){"use strict";var n=r("6547").charAt,a=r("69f3"),i=r("7dd0"),o="String Iterator",c=a.set,s=a.getterFor(o);i(String,"String",(function(t){c(this,{type:o,string:String(t),index:0})}),(function(){var t,e=s(this),r=e.string,a=e.index;return a>=r.length?{value:void 0,done:!0}:(t=n(r,a),e.index+=t.length,{value:t,done:!1})}))},"456f":function(t,e,r){},"4df4":function(t,e,r){"use strict";var n=r("0366"),a=r("7b0b"),i=r("9bdd"),o=r("e95a"),c=r("50c4"),s=r("8418"),l=r("35a1");t.exports=function(t){var e,r,u,f,d,p,m=a(t),v="function"==typeof this?this:Array,g=arguments.length,h=g>1?arguments[1]:void 0,b=void 0!==h,y=l(m),x=0;if(b&&(h=n(h,g>2?arguments[2]:void 0,2)),void 0==y||v==Array&&o(y))for(e=c(m.length),r=new v(e);e>x;x++)p=b?h(m[x],x):m[x],s(r,x,p);else for(f=y.call(m),d=f.next,r=new v;!(u=d.call(f)).done;x++)p=b?i(f,h,[u.value,x],!0):u.value,s(r,x,p);return r.length=x,r}},5319:function(t,e,r){"use strict";var n=r("d784"),a=r("825a"),i=r("7b0b"),o=r("50c4"),c=r("a691"),s=r("1d80"),l=r("8aa5"),u=r("14c3"),f=Math.max,d=Math.min,p=Math.floor,m=/\$([$&'`]|\d\d?|<[^>]*>)/g,v=/\$([$&'`]|\d\d?)/g,g=function(t){return void 0===t?t:String(t)};n("replace",2,(function(t,e,r,n){var h=n.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,b=n.REPLACE_KEEPS_$0,y=h?"$":"$0";return[function(r,n){var a=s(this),i=void 0==r?void 0:r[t];return void 0!==i?i.call(r,a,n):e.call(String(a),r,n)},function(t,n){if(!h&&b||"string"===typeof n&&-1===n.indexOf(y)){var i=r(e,t,this,n);if(i.done)return i.value}var s=a(t),p=String(this),m="function"===typeof n;m||(n=String(n));var v=s.global;if(v){var S=s.unicode;s.lastIndex=0}var _=[];while(1){var w=u(s,p);if(null===w)break;if(_.push(w),!v)break;var E=String(w[0]);""===E&&(s.lastIndex=l(p,o(s.lastIndex),S))}for(var $="",k=0,A=0;A<_.length;A++){w=_[A];for(var R=String(w[0]),I=f(d(c(w.index),p.length),0),C=[],O=1;O<w.length;O++)C.push(g(w[O]));var T=w.groups;if(m){var P=[R].concat(C,I,p);void 0!==T&&P.push(T);var j=String(n.apply(void 0,P))}else j=x(R,p,I,C,T,n);I>=k&&($+=p.slice(k,I)+j,k=I+R.length)}return $+p.slice(k)}];function x(t,r,n,a,o,c){var s=n+t.length,l=a.length,u=v;return void 0!==o&&(o=i(o),u=m),e.call(c,u,(function(e,i){var c;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return r.slice(0,n);case"'":return r.slice(s);case"<":c=o[i.slice(1,-1)];break;default:var u=+i;if(0===u)return e;if(u>l){var f=p(u/10);return 0===f?e:f<=l?void 0===a[f-1]?i.charAt(1):a[f-1]+i.charAt(1):e}c=a[u-1]}return void 0===c?"":c}))}}))},6547:function(t,e,r){var n=r("a691"),a=r("1d80"),i=function(t){return function(e,r){var i,o,c=String(a(e)),s=n(r),l=c.length;return s<0||s>=l?t?"":void 0:(i=c.charCodeAt(s),i<55296||i>56319||s+1===l||(o=c.charCodeAt(s+1))<56320||o>57343?t?c.charAt(s):i:t?c.slice(s,s+2):o-56320+(i-55296<<10)+65536)}};t.exports={codeAt:i(!1),charAt:i(!0)}},"8aa5":function(t,e,r){"use strict";var n=r("6547").charAt;t.exports=function(t,e,r){return e+(r?n(t,e).length:1)}},9263:function(t,e,r){"use strict";var n=r("ad6d"),a=r("9f7f"),i=RegExp.prototype.exec,o=String.prototype.replace,c=i,s=function(){var t=/a/,e=/b*/g;return i.call(t,"a"),i.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),l=a.UNSUPPORTED_Y||a.BROKEN_CARET,u=void 0!==/()??/.exec("")[1],f=s||u||l;f&&(c=function(t){var e,r,a,c,f=this,d=l&&f.sticky,p=n.call(f),m=f.source,v=0,g=t;return d&&(p=p.replace("y",""),-1===p.indexOf("g")&&(p+="g"),g=String(t).slice(f.lastIndex),f.lastIndex>0&&(!f.multiline||f.multiline&&"\n"!==t[f.lastIndex-1])&&(m="(?: "+m+")",g=" "+g,v++),r=new RegExp("^(?:"+m+")",p)),u&&(r=new RegExp("^"+m+"$(?!\\s)",p)),s&&(e=f.lastIndex),a=i.call(d?r:f,g),d?a?(a.input=a.input.slice(v),a[0]=a[0].slice(v),a.index=f.lastIndex,f.lastIndex+=a[0].length):f.lastIndex=0:s&&a&&(f.lastIndex=f.global?a.index+a[0].length:e),u&&a&&a.length>1&&o.call(a[0],r,(function(){for(c=1;c<arguments.length-2;c++)void 0===arguments[c]&&(a[c]=void 0)})),a}),t.exports=c},"99af":function(t,e,r){"use strict";var n=r("23e7"),a=r("d039"),i=r("e8b5"),o=r("861d"),c=r("7b0b"),s=r("50c4"),l=r("8418"),u=r("65f0"),f=r("1dde"),d=r("b622"),p=r("2d00"),m=d("isConcatSpreadable"),v=9007199254740991,g="Maximum allowed index exceeded",h=p>=51||!a((function(){var t=[];return t[m]=!1,t.concat()[0]!==t})),b=f("concat"),y=function(t){if(!o(t))return!1;var e=t[m];return void 0!==e?!!e:i(t)},x=!h||!b;n({target:"Array",proto:!0,forced:x},{concat:function(t){var e,r,n,a,i,o=c(this),f=u(o,0),d=0;for(e=-1,n=arguments.length;e<n;e++)if(i=-1===e?o:arguments[e],y(i)){if(a=s(i.length),d+a>v)throw TypeError(g);for(r=0;r<a;r++,d++)r in i&&l(f,d,i[r])}else{if(d>=v)throw TypeError(g);l(f,d++,i)}return f.length=d,f}})},"9bdd":function(t,e,r){var n=r("825a"),a=r("2a62");t.exports=function(t,e,r,i){try{return i?e(n(r)[0],r[1]):e(r)}catch(o){throw a(t),o}}},"9f7f":function(t,e,r){"use strict";var n=r("d039");function a(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=n((function(){var t=a("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=n((function(){var t=a("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},a630:function(t,e,r){var n=r("23e7"),a=r("4df4"),i=r("1c7e"),o=!i((function(t){Array.from(t)}));n({target:"Array",stat:!0,forced:o},{from:a})},ac1f:function(t,e,r){"use strict";var n=r("23e7"),a=r("9263");n({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},ad6d:function(t,e,r){"use strict";var n=r("825a");t.exports=function(){var t=n(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},c405:function(t,e,r){"use strict";var n=r("bb36");e["a"]={categoryList:function(t){return n["a"].get("/category/all",t)}}},c4c8:function(t,e,r){"use strict";var n=r("bb36");e["a"]={productList:function(t){return n["a"].get("/products/all",t)},delete:function(t){return n["a"].delete("/products/".concat(t))},add:function(t){return n["a"].post("/products/add",t)},edit:function(t){return n["a"].put("/products/edit",t)}}},d28b:function(t,e,r){var n=r("746f");n("iterator")},d784:function(t,e,r){"use strict";r("ac1f");var n=r("6eeb"),a=r("d039"),i=r("b622"),o=r("9263"),c=r("9112"),s=i("species"),l=!a((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),u=function(){return"$0"==="a".replace(/./,"$0")}(),f=i("replace"),d=function(){return!!/./[f]&&""===/./[f]("a","$0")}(),p=!a((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var r="ab".split(t);return 2!==r.length||"a"!==r[0]||"b"!==r[1]}));t.exports=function(t,e,r,f){var m=i(t),v=!a((function(){var e={};return e[m]=function(){return 7},7!=""[t](e)})),g=v&&!a((function(){var e=!1,r=/a/;return"split"===t&&(r={},r.constructor={},r.constructor[s]=function(){return r},r.flags="",r[m]=/./[m]),r.exec=function(){return e=!0,null},r[m](""),!e}));if(!v||!g||"replace"===t&&(!l||!u||d)||"split"===t&&!p){var h=/./[m],b=r(m,""[t],(function(t,e,r,n,a){return e.exec===o?v&&!a?{done:!0,value:h.call(e,r,n)}:{done:!0,value:t.call(r,e,n)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:d}),y=b[0],x=b[1];n(String.prototype,t,y),n(RegExp.prototype,m,2==e?function(t,e){return x.call(t,this,e)}:function(t){return x.call(t,this)})}f&&c(RegExp.prototype[m],"sham",!0)}},d81d:function(t,e,r){"use strict";var n=r("23e7"),a=r("b727").map,i=r("1dde"),o=r("ae40"),c=i("map"),s=o("map");n({target:"Array",proto:!0,forced:!c||!s},{map:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}})},ddb0:function(t,e,r){var n=r("da84"),a=r("fdbc"),i=r("e260"),o=r("9112"),c=r("b622"),s=c("iterator"),l=c("toStringTag"),u=i.values;for(var f in a){var d=n[f],p=d&&d.prototype;if(p){if(p[s]!==u)try{o(p,s,u)}catch(v){p[s]=u}if(p[l]||o(p,l,f),a[f])for(var m in i)if(p[m]!==i[m])try{o(p,m,i[m])}catch(v){p[m]=i[m]}}}},dfdc:function(t,e,r){"use strict";r("456f")},e01a:function(t,e,r){"use strict";var n=r("23e7"),a=r("83ab"),i=r("da84"),o=r("5135"),c=r("861d"),s=r("9bf2").f,l=r("e893"),u=i.Symbol;if(a&&"function"==typeof u&&(!("description"in u.prototype)||void 0!==u().description)){var f={},d=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof d?new u(t):void 0===t?u():u(t);return""===t&&(f[e]=!0),e};l(d,u);var p=d.prototype=u.prototype;p.constructor=d;var m=p.toString,v="Symbol(test)"==String(u("test")),g=/^Symbol\((.*)\)[^)]+$/;s(p,"description",{configurable:!0,get:function(){var t=c(this)?this.valueOf():this,e=m.call(t);if(o(f,t))return"";var r=v?e.slice(7,-1):e.replace(g,"$1");return""===r?void 0:r}}),n({global:!0,forced:!0},{Symbol:d})}},fb6a:function(t,e,r){"use strict";var n=r("23e7"),a=r("861d"),i=r("e8b5"),o=r("23cb"),c=r("50c4"),s=r("fc6a"),l=r("8418"),u=r("b622"),f=r("1dde"),d=r("ae40"),p=f("slice"),m=d("slice",{ACCESSORS:!0,0:0,1:2}),v=u("species"),g=[].slice,h=Math.max;n({target:"Array",proto:!0,forced:!p||!m},{slice:function(t,e){var r,n,u,f=s(this),d=c(f.length),p=o(t,d),m=o(void 0===e?d:e,d);if(i(f)&&(r=f.constructor,"function"!=typeof r||r!==Array&&!i(r.prototype)?a(r)&&(r=r[v],null===r&&(r=void 0)):r=void 0,r===Array||void 0===r))return g.call(f,p,m);for(n=new(void 0===r?Array:r)(h(m-p,0)),u=0;p<m;p++,u++)p in f&&l(n,u,f[p]);return n.length=u,n}})},fe50:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"product-add"},[r("Steps",{attrs:{steps:t.steps,current:t.current},scopedSlots:t._u([{key:"content",fn:function(){return[0===t.current?r("BasicDetail",{attrs:{form:t.form},on:{next:t.next}}):1===t.current?r("SaleDetail",{attrs:{form:t.form},on:{prev:t.prev,next:t.next}}):t._e()]},proxy:!0}])})],1)},a=[],i=(r("d81d"),r("ac1f"),r("5319"),r("1276"),r("5530")),o=(r("96cf"),r("1da1")),c=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"steps"},[r("div",{staticClass:"steps-area center"},[r("a-steps",{attrs:{current:t.current}},t._l(t.steps,(function(t){return r("a-step",{key:t,attrs:{title:t}})})),1)],1),r("div",{staticClass:"steps-content"},[t._t("content")],2)])},s=[],l={name:"Steps",props:["current","steps"]},u=l,f=(r("dfdc"),r("2877")),d=Object(f["a"])(u,c,s,!1,null,"52f0f55a",null),p=d.exports,m=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"basic-detail"},[r("a-form-model",{ref:"form",attrs:{model:t.form,"label-col":{span:5},"wrapper-col":{span:13}}},[r("a-form-model-item",{attrs:{label:"标题",required:"",prop:"title"}},[r("a-input",{model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1),r("a-form-model-item",{attrs:{label:"商品描述",prop:"desc"}},[r("a-input",{attrs:{type:"textarea"},model:{value:t.form.desc,callback:function(e){t.$set(t.form,"desc",e)},expression:"form.desc"}})],1),r("a-form-model-item",{attrs:{label:"商品类名",required:"",prop:"category"}},[r("a-select",{attrs:{allowClear:""},on:{change:t.changeCategory},model:{value:t.form.category,callback:function(e){t.$set(t.form,"category",e)},expression:"form.category"}},t._l(t.categoryList,(function(e){return r("a-select-option",{key:e.id,attrs:{value:e.id}},[t._v(" "+t._s(e.name)+" ")])})),1),r("a-select",{attrs:{allowClear:""},model:{value:t.form.c_item,callback:function(e){t.$set(t.form,"c_item",e)},expression:"form.c_item"}},t._l(t.categoryItems,(function(e){return r("a-select-option",{key:e,attrs:{value:e}},[t._v(" "+t._s(e)+" ")])})),1)],1),r("a-form-model-item",{attrs:{label:"商品标签",required:"",prop:"tags"}},[r("a-select",{attrs:{mode:"tags"},model:{value:t.form.tags,callback:function(e){t.$set(t.form,"tags",e)},expression:"form.tags"}},t._l(t.defaultTags,(function(e){return r("a-select-option",{key:e,attrs:{value:e}},[t._v(" "+t._s(e)+" ")])})),1)],1),r("a-form-model-item",{staticStyle:{"margin-top":"60px"},attrs:{"wrapper-col":{span:14,offset:4}}},[r("a-button",{attrs:{type:"primary"},on:{click:t.next}},[t._v(" 下一步 ")])],1)],1)],1)},v=[],g=(r("4160"),r("159b"),r("c405")),h={name:"BasicDetail",data:function(){return{defaultTags:["包邮，最晚次日送达"],categoryList:[],categoryItems:[],categoryMap:{}}},props:["form"],methods:{next:function(){var t=this;this.$refs.form.validate((function(e){e&&t.$emit("next")}))},changeCategory:function(t){this.$route.query.editid||(this.form.c_item=""),this.categoryItems=this.categoryMap[t]},getCategoryList:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,g["a"].categoryList();case 2:r=e.sent,console.log(r),t.categoryList=r.data,t.categoryList.forEach((function(e){t.categoryMap[e.id]=e.c_items})),t.form.category&&t.changeCategory(t.form.category);case 7:case"end":return e.stop()}}),e)})))()}},created:function(){this.getCategoryList()}},b=h,y=Object(f["a"])(b,m,v,!1,null,null,null),x=y.exports,S=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"sale-detail"},[r("a-form-model",{ref:"form",attrs:{model:t.form,"label-col":{span:5},"wrapper-col":{span:13}}},[r("a-form-model-item",{attrs:{label:"商品售价",required:"",prop:"price"}},[r("a-input",{model:{value:t.form.price,callback:function(e){t.$set(t.form,"price",t._n(e))},expression:"form.price"}})],1),r("a-form-model-item",{attrs:{label:"商品折扣价"}},[r("a-input",{model:{value:t.form.price_off,callback:function(e){t.$set(t.form,"price_off",t._n(e))},expression:"form.price_off"}})],1),r("a-form-model-item",{attrs:{label:"商品库存",required:"",prop:"inventory"}},[r("a-input",{model:{value:t.form.inventory,callback:function(e){t.$set(t.form,"inventory",t._n(e))},expression:"form.inventory"}})],1),r("a-form-model-item",{attrs:{label:"计量单位",required:"",prop:"unit"}},[r("a-input",{model:{value:t.form.unit,callback:function(e){t.$set(t.form,"unit",e)},expression:"form.unit"}})],1),r("a-form-model-item",{attrs:{label:"商品相册"}},[r("a-upload",{attrs:{action:t.action,"list-type":"picture-card","file-list":t.form.images,name:"avatar"},on:{preview:t.handlePreview,change:t.handleChange}},[t.form.images.length<8?r("div",[r("a-icon",{attrs:{type:"plus"}}),r("div",{staticClass:"ant-upload-text"},[t._v("上传")])],1):t._e()]),r("a-modal",{attrs:{visible:t.previewVisible,footer:null},on:{cancel:function(e){t.previewVisible=!1}}},[r("img",{staticStyle:{width:"100%"},attrs:{src:t.previewImage}})])],1),r("a-form-model-item",{staticStyle:{"text-align":"left"},attrs:{label:"是否上架"}},[r("a-checkbox",{model:{value:t.form.status,callback:function(e){t.$set(t.form,"status",e)},expression:"form.status"}})],1),r("a-form-model-item",{staticStyle:{"margin-top":"20px"},attrs:{"wrapper-col":{span:14,offset:4}}},[r("a-button",{on:{click:t.prev}},[t._v(" 上一步 ")]),r("a-button",{attrs:{type:"primary"},on:{click:t.next}},[t._v(" 提交 ")])],1)],1)],1)},_=[];r("99af"),r("4de4"),r("d3b7");function w(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function E(t){if(Array.isArray(t))return w(t)}r("a4d3"),r("e01a"),r("d28b"),r("a630"),r("3ca3"),r("ddb0");function $(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}r("fb6a"),r("b0c0"),r("25f0");function k(t,e){if(t){if("string"===typeof t)return w(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?w(t,e):void 0}}function A(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function R(t){return E(t)||$(t)||k(t)||A()}function I(t){return new Promise((function(e,r){var n=new FileReader;n.readAsDataURL(t),n.onload=function(){return e(n.result)},n.onerror=function(t){return r(t)}}))}var C={name:"SaleDetail",data:function(){return{previewVisible:!1,previewImage:"",action:"https://mallapi.duyiedu.com/upload/images?appkey=".concat(this.$store.getters["user/getUser"].appkey)}},props:["form"],methods:{prev:function(){this.$emit("prev")},next:function(){var t=this;this.$refs.form.validate((function(e){if(e){var r=t.form.images.filter((function(t){return t.response}));if(r.length>0){var n=r.map((function(t){var e=Object(i["a"])(Object(i["a"])({},t.response.data),{},{uid:t.uid});return delete e.thumbUrl,e}));t.form.images=[].concat(R(n),R(t.form.images.filter((function(t){return!t.response}))))}console.log(t.form.images),t.$emit("next",t.form)}}))},handlePreview:function(t){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(t.url||t.preview){r.next=4;break}return r.next=3,I(t.originFileObj);case 3:t.preview=r.sent;case 4:e.previewImage=t.url||t.preview,e.previewVisible=!0;case 6:case"end":return r.stop()}}),r)})))()},handleChange:function(t){var e=t.fileList;this.form.images=e}}},O=C,T=Object(f["a"])(O,S,_,!1,null,null,null),P=T.exports,j=r("c4c8"),L={name:"ProductAdd",components:{Steps:p,BasicDetail:x,SaleDetail:P},data:function(){return{current:0,form:{title:"",desc:"",category:"",c_item:"",tags:[],price:"",price_off:"",inventory:"",unit:"",images:[],status:!0},steps:["填写商品基本信息","填写商品销售信息"]}},methods:{next:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var r,n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.current!==t.steps.length-1){e.next=20;break}if(r=t.$route.query.editid,console.log(t.form),n=Object(i["a"])(Object(i["a"])({},t.form),{},{c_items:t.form.c_item&&t.form.c_item.split(" "),status:t.form.status?1:0,images:t.form.images.map((function(t){return t.url}))}),delete n.c_item,console.log(n),a="添加成功",!r){e.next=15;break}return a="修改成功",e.next=11,j["a"].edit(n);case 11:sessionStorage.removeItem("editForm"),t.$router.replace({name:"ProductAdd"}),e.next=17;break;case 15:return e.next=17,j["a"].add(n);case 17:t.$modal.success({title:a,mask:!0,okText:"完成",icon:"check-circle",onOk:function(e){e(),t.$router.push({name:"ProductList"})}}),e.next=21;break;case 20:t.current+=1;case 21:case"end":return e.stop()}}),e)})))()},prev:function(){this.current-=1}},created:function(){var t=this.$route.query.editid;if(t){var e=sessionStorage.getItem("editForm");e&&(e=JSON.parse(e),e.images=e.images.map((function(t,e){return{uid:e,name:"image-".concat(e,".png"),status:"done",url:t}})),e.status=1===e.status,this.form=e)}}},U=L,D=Object(f["a"])(U,n,a,!1,null,null,null);e["default"]=D.exports}}]);