(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["automatic-exercises"],{2092:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n("d4ec"),a=n("bee2"),c=n("262e"),i=n("2caf"),o=(n("99af"),n("b775")),s=n("3a78"),u=function(e){Object(c["a"])(n,e);var t=Object(i["a"])(n);function n(){Object(r["a"])(this,n);var e="exercise";return t.call(this,e)}return Object(a["a"])(n,[{key:"getAutomaticExercise",value:function(e){return Object(o["a"])({url:"".concat(this.apiURL,"/automatic/").concat(e),method:"get"}).then((function(e){return e}))}},{key:"assignAutomaticExercise",value:function(e,t){return Object(o["a"])({url:"".concat(this.apiURL,"/assign/").concat(e),method:"post",data:t}).then((function(e){return e}))}}]),n}(s["a"])},2909:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function a(e){if(Array.isArray(e))return r(e)}n.d(t,"a",(function(){return s}));n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0"),n("a630");function c(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}n("fb6a"),n("b0c0");function i(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}function o(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function s(e){return a(e)||c(e)||i(e)||o()}},"36c9":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"row"},[n("div",{staticClass:"outer-w3-agile col-xl mt-3"},[n("h4",{staticClass:"tittle-w3-agileits mb-4"},[e._v("Assign Automatic Exercise")]),e.messageDisplay?n("div",{staticClass:"alert",class:[e.isSuccessful?"alert-success":"alert-danger"],attrs:{role:"alert"}},[e._v(" "+e._s(e.messageDisplay)+" ")]):e._e(),n("form",{on:{submit:function(t){return t.preventDefault(),e.submitForm(t)}}},[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"courseName"}},[e._v("Select User")]),n("VSelect",{attrs:{multiple:"",options:e.traineeData,filterable:!1},on:{search:e.fetchTraineeData},model:{value:e.selectedValue,callback:function(t){e.selectedValue=t},expression:"selectedValue"}},[n("template",{slot:"no-options"},[e._v(" type to search user... ")])],2)],1),n("button",{staticClass:"btn btn-primary"},[e._v("Assign")])])])])},a=[],c=n("2909"),i=n("1da1"),o=(n("96cf"),n("d3b7"),n("3ca3"),n("ddb0"),n("d81d"),n("99af"),n("c287")),s=n("2092"),u=n("f040"),l=(n("6dfc"),{name:"CourseAssign",mixins:[u["a"]],components:{VSelect:function(){return n.e("chunk-2d0cb76d").then(n.t.bind(null,"4a7a",7))}},data:function(){return{traineeData:[],selectedValue:[],traineeService:new o["a"],exerciseService:new s["a"],timer:null}},mounted:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.exerciseService.getAutomaticExercise(e.$route.params.id);case 3:n=t.sent,r=Object(c["a"])(n),e.selectedValue=null===r||void 0===r?void 0:r.map((function(e){return{_id:e._id,label:"".concat(e.fullName," (").concat(e.username,")"),username:e.username}})),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),e.selectedValue=[];case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()},methods:{fetchTraineeData:function(e,t){var n=this;e&&(clearTimeout(this.timer),this.timer=setTimeout(Object(i["a"])(regeneratorRuntime.mark((function r(){var a,c;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,t(!0),r.next=4,n.traineeService.get({perPage:5,search_keyword:e});case 4:c=r.sent,n.traineeData=null!==(a=c.data.map((function(e){return{_id:e._id,label:"".concat(e.fullName," (").concat(e.username,")"),username:e.username}})))&&void 0!==a?a:[],t(!1),r.next=13;break;case 9:r.prev=9,r.t0=r["catch"](0),n.traineeData=[],t(!1);case 13:case"end":return r.stop()}}),r,null,[[0,9]])}))),500))},submitForm:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var n,r,a,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,n=e.selectedValue.map((function(e){return e._id})),t.next=4,e.exerciseService.assignAutomaticExercise(e.$route.params.id,{ids:n});case 4:e.showMessage({success:!0,message:"Students Successfully Assigned"}),t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),e.showMessage({message:null!==(r=null===t.t0||void 0===t.t0||null===(a=t.t0.response)||void 0===a||null===(c=a.data)||void 0===c?void 0:c.message)&&void 0!==r?r:"Something Wrong!!!"});case 10:console.log(e.selectedValue);case 11:case"end":return t.stop()}}),t,null,[[0,7]])})))()}}}),f=l,d=n("2877"),m=Object(d["a"])(f,r,a,!1,null,null,null);t["default"]=m.exports},"4df4":function(e,t,n){"use strict";var r=n("0366"),a=n("7b0b"),c=n("9bdd"),i=n("e95a"),o=n("50c4"),s=n("8418"),u=n("35a1");e.exports=function(e){var t,n,l,f,d,m,h=a(e),p="function"==typeof this?this:Array,v=arguments.length,b=v>1?arguments[1]:void 0,g=void 0!==b,y=u(h),x=0;if(g&&(b=r(b,v>2?arguments[2]:void 0,2)),void 0==y||p==Array&&i(y))for(t=o(h.length),n=new p(t);t>x;x++)m=g?b(h[x],x):h[x],s(n,x,m);else for(f=y.call(h),d=f.next,n=new p;!(l=d.call(f)).done;x++)m=g?c(f,b,[l.value,x],!0):l.value,s(n,x,m);return n.length=x,n}},"6dfc":function(e,t,n){},"9bdd":function(e,t,n){var r=n("825a"),a=n("2a62");e.exports=function(e,t,n,c){try{return c?t(r(n)[0],n[1]):t(n)}catch(i){throw a(e),i}}},a630:function(e,t,n){var r=n("23e7"),a=n("4df4"),c=n("1c7e"),i=!c((function(e){Array.from(e)}));r({target:"Array",stat:!0,forced:i},{from:a})},b0c0:function(e,t,n){var r=n("83ab"),a=n("9bf2").f,c=Function.prototype,i=c.toString,o=/^\s*function ([^ (]*)/,s="name";r&&!(s in c)&&a(c,s,{configurable:!0,get:function(){try{return i.call(this).match(o)[1]}catch(e){return""}}})},c287:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n("d4ec"),a=n("bee2"),c=n("262e"),i=n("2caf"),o=(n("99af"),n("b775")),s=n("3a78"),u=function(e){Object(c["a"])(n,e);var t=Object(i["a"])(n);function n(){Object(r["a"])(this,n);var e="trainee";return t.call(this,e)}return Object(a["a"])(n,[{key:"resetPassword",value:function(e){return Object(o["a"])({url:"".concat(this.apiURL,"/reset"),method:"patch",data:e}).then((function(e){return e}))}},{key:"profileUpdate",value:function(e){return Object(o["a"])({url:"".concat(this.apiURL,"/update"),method:"patch",data:e}).then((function(e){return e}))}},{key:"passwordUpdate",value:function(e){return Object(o["a"])({url:"".concat(this.apiURL,"/password"),method:"patch",data:e}).then((function(e){return e}))}},{key:"assignExercise",value:function(e,t){return Object(o["a"])({url:"".concat(this.apiURL,"/assign/").concat(e),method:"post",data:t}).then((function(e){return e}))}},{key:"getActiveExerciseList",value:function(){return Object(o["a"])({url:"".concat(this.apiURL,"/active-exercise"),method:"get"}).then((function(e){return e}))}},{key:"getExerciseData",value:function(e){return Object(o["a"])({url:"".concat(this.apiURL,"/active-exercise/").concat(e),method:"get"}).then((function(e){return e}))}},{key:"exercisePerformed",value:function(e,t){return Object(o["a"])({url:"".concat(this.apiURL,"/performed/").concat(e),method:"post",data:t}).then((function(e){return e}))}},{key:"getCompleteExerciseList",value:function(e){return Object(o["a"])({url:"".concat(this.apiURL,"/complete-exercise/").concat(e),method:"get"}).then((function(e){return e}))}},{key:"getExerciseReport",value:function(e,t){return Object(o["a"])({url:"".concat(this.apiURL,"/complete-exercise/").concat(e,"/").concat(t),method:"get"}).then((function(e){return e}))}},{key:"login",value:function(e){return Object(o["a"])({url:"".concat(this.apiURL,"/login"),method:"post",data:e}).then((function(e){return e}))}},{key:"getAutomaticExerciseList",value:function(){return Object(o["a"])({url:"".concat(this.apiURL,"/automatic-exercise"),method:"get"}).then((function(e){return e}))}},{key:"getAutomaticExercise",value:function(e){return Object(o["a"])({url:"".concat(this.apiURL,"/automatic-exercise/").concat(e),method:"get"}).then((function(e){return e}))}},{key:"automaticExerciseCount",value:function(e){return Object(o["a"])({url:"".concat(this.apiURL,"/automatic-exercise/count/").concat(e),method:"post"}).then((function(e){return e}))}}]),n}(s["a"])},d81d:function(e,t,n){"use strict";var r=n("23e7"),a=n("b727").map,c=n("1dde"),i=c("map");r({target:"Array",proto:!0,forced:!i},{map:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}})},f040:function(e,t,n){"use strict";n("159b");var r={data:function(){return{isSuccessful:!1,messageDisplay:"",timer:null,success:!1}},methods:{showMessage:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3e3;this.isSuccessful=e.success,this.messageDisplay=e.message;var r=e.ref;r&&(this.$refs[r].style.display="block"),clearTimeout(this.timer),this.timer=setTimeout((function(){t.isSuccessful=!1,t.messageDisplay="",r&&(t.$refs[r].style.display="none")}),n)},resetAll:function(){var e=this;this.$options.formFields.forEach((function(t){"string"===typeof e.$data[t]?e.$data[t]="":"number"===typeof e.$data[t]?e.$data[t]=0:Array.isArray(e.$data[t])?e.$data[t]=[]:e.$data[t]={}}))}},computed:{formData:function(){var e=this,t={};return this.$options.formFields.forEach((function(n){e.$data[n]&&(t[n]=e.$data[n])})),t}}};t["a"]=r},fb6a:function(e,t,n){"use strict";var r=n("23e7"),a=n("861d"),c=n("e8b5"),i=n("23cb"),o=n("50c4"),s=n("fc6a"),u=n("8418"),l=n("b622"),f=n("1dde"),d=f("slice"),m=l("species"),h=[].slice,p=Math.max;r({target:"Array",proto:!0,forced:!d},{slice:function(e,t){var n,r,l,f=s(this),d=o(f.length),v=i(e,d),b=i(void 0===t?d:t,d);if(c(f)&&(n=f.constructor,"function"!=typeof n||n!==Array&&!c(n.prototype)?a(n)&&(n=n[m],null===n&&(n=void 0)):n=void 0,n===Array||void 0===n))return h.call(f,v,b);for(r=new(void 0===n?Array:n)(p(b-v,0)),l=0;v<b;v++,l++)v in f&&u(r,l,f[v]);return r.length=l,r}})}}]);
//# sourceMappingURL=automatic-exercises.fed65abd.js.map