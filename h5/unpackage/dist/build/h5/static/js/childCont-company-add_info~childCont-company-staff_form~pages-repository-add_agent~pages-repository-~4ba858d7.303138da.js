(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["childCont-company-add_info~childCont-company-staff_form~pages-repository-add_agent~pages-repository-~4ba858d7"],{"0343":function(e,n,t){"use strict";t.r(n);var i=t("1fa1"),r=t("8793");for(var a in r)["default"].indexOf(a)<0&&function(e){t.d(n,e,(function(){return r[e]}))}(a);t("b5f3");var o=t("f0c5"),u=Object(o["a"])(r["default"],i["b"],i["c"],!1,null,"a1c9e37c",null,!1,i["a"],void 0);n["default"]=u.exports},"0745":function(e,n,t){"use strict";t("7a82"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={props:{show:{type:Boolean,default:uni.$u.props.toolbar.show},cancelText:{type:String,default:uni.$u.props.toolbar.cancelText},confirmText:{type:String,default:uni.$u.props.toolbar.confirmText},cancelColor:{type:String,default:uni.$u.props.toolbar.cancelColor},confirmColor:{type:String,default:uni.$u.props.toolbar.confirmColor},title:{type:String,default:uni.$u.props.toolbar.title}}};n.default=i},"1fa1":function(e,n,t){"use strict";t.d(n,"b",(function(){return r})),t.d(n,"c",(function(){return a})),t.d(n,"a",(function(){return i}));var i={uPopup:t("77c5").default,uToolbar:t("aaa0").default,uLoadingIcon:t("b41b").default},r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("u-popup",{attrs:{show:e.show},on:{close:function(n){arguments[0]=n=e.$handleEvent(n),e.closeHandler.apply(void 0,arguments)}}},[t("v-uni-view",{staticClass:"u-picker"},[e.showToolbar?t("u-toolbar",{attrs:{cancelColor:e.cancelColor,confirmColor:e.confirmColor,cancelText:e.cancelText,confirmText:e.confirmText,title:e.title},on:{cancel:function(n){arguments[0]=n=e.$handleEvent(n),e.cancel.apply(void 0,arguments)},confirm:function(n){arguments[0]=n=e.$handleEvent(n),e.confirm.apply(void 0,arguments)}}}):e._e(),t("v-uni-picker-view",{staticClass:"u-picker__view",style:{height:""+e.$u.addUnit(e.visibleItemCount*e.itemHeight)},attrs:{indicatorStyle:"height: "+e.$u.addUnit(e.itemHeight),value:e.innerIndex,immediateChange:e.immediateChange},on:{change:function(n){arguments[0]=n=e.$handleEvent(n),e.changeHandler.apply(void 0,arguments)}}},e._l(e.innerColumns,(function(n,i){return t("v-uni-picker-view-column",{key:i,staticClass:"u-picker__view__column"},e._l(n,(function(r,a){return e.$u.test.array(n)?t("v-uni-text",{key:a,staticClass:"u-picker__view__column__item u-line-1",style:{height:e.$u.addUnit(e.itemHeight),lineHeight:e.$u.addUnit(e.itemHeight),fontWeight:a===e.innerIndex[i]?"bold":"normal"}},[e._v(e._s(e.getItemText(r)))]):e._e()})),1)})),1),e.loading?t("v-uni-view",{staticClass:"u-picker--loading"},[t("u-loading-icon",{attrs:{mode:"circle"}})],1):e._e()],1)],1)},a=[]},"1fce":function(e,n,t){var i=t("2b32");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var r=t("4f06").default;r("045731d2",i,!0,{sourceMap:!1,shadowMode:!1})},"2b32":function(e,n,t){var i=t("24fb");n=i(!1),n.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-view[data-v-8c7a2b80], uni-scroll-view[data-v-8c7a2b80], uni-swiper-item[data-v-8c7a2b80]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.u-toolbar[data-v-8c7a2b80]{height:42px;display:flex;flex-direction:row;justify-content:space-between;align-items:center}.u-toolbar__wrapper__cancel[data-v-8c7a2b80]{color:#909193;font-size:15px;padding:0 15px}.u-toolbar__title[data-v-8c7a2b80]{color:#303133;padding:0 %?60?%;font-size:16px;flex:1;text-align:center}.u-toolbar__wrapper__confirm[data-v-8c7a2b80]{color:#3c9cff;font-size:15px;padding:0 15px}',""]),e.exports=n},"63b9":function(e,n,t){"use strict";t.d(n,"b",(function(){return i})),t.d(n,"c",(function(){return r})),t.d(n,"a",(function(){}));var i=function(){var e=this,n=e.$createElement,t=e._self._c||n;return e.show?t("v-uni-view",{staticClass:"u-toolbar",on:{touchmove:function(n){n.stopPropagation(),n.preventDefault(),arguments[0]=n=e.$handleEvent(n),e.noop.apply(void 0,arguments)}}},[t("v-uni-view",{staticClass:"u-toolbar__cancel__wrapper",attrs:{"hover-class":"u-hover-class"}},[t("v-uni-text",{staticClass:"u-toolbar__wrapper__cancel",style:{color:e.cancelColor},on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.cancel.apply(void 0,arguments)}}},[e._v(e._s(e.cancelText))])],1),e.title?t("v-uni-text",{staticClass:"u-toolbar__title u-line-1"},[e._v(e._s(e.title))]):e._e(),t("v-uni-view",{staticClass:"u-toolbar__confirm__wrapper",attrs:{"hover-class":"u-hover-class"}},[t("v-uni-text",{staticClass:"u-toolbar__wrapper__confirm",style:{color:e.confirmColor},on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.confirm.apply(void 0,arguments)}}},[e._v(e._s(e.confirmText))])],1)],1):e._e()},r=[]},"640c":function(e,n,t){"use strict";t("7a82");var i=t("4ea4").default;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=i(t("c7eb")),a=i(t("1da1"));t("ac1f"),t("00b4"),t("d81d"),t("a434"),t("cb29");var o=i(t("e492")),u={name:"u-picker",mixins:[uni.$u.mpMixin,uni.$u.mixin,o.default],data:function(){return{lastIndex:[],innerIndex:[],innerColumns:[],columnIndex:0}},watch:{defaultIndex:{immediate:!0,handler:function(e){this.setIndexs(e,!0)}},columns:{immediate:!0,handler:function(e){this.setColumns(e)}}},methods:{getItemText:function(e){return uni.$u.test.object(e)?e[this.keyName]:e},closeHandler:function(){this.closeOnClickOverlay&&this.$emit("close")},cancel:function(){this.$emit("cancel")},confirm:function(){var e=this;this.$emit("confirm",{indexs:this.innerIndex,value:this.innerColumns.map((function(n,t){return n[e.innerIndex[t]]})),values:this.innerColumns})},changeHandler:function(e){for(var n=e.detail.value,t=0,i=0,r=0;r<n.length;r++){var a=n[r];if(a!==(this.lastIndex[r]||0)){i=r,t=a;break}}this.columnIndex=i;var o=this.innerColumns;this.setLastIndex(n),this.setIndexs(n),this.$emit("change",{picker:this,value:this.innerColumns.map((function(e,t){return e[n[t]]})),index:t,indexs:n,values:o,columnIndex:i})},setIndexs:function(e,n){this.innerIndex=uni.$u.deepClone(e),n&&this.setLastIndex(e)},setLastIndex:function(e){this.lastIndex=uni.$u.deepClone(e)},setColumnValues:function(e,n){this.innerColumns.splice(e,1,n);for(var t=uni.$u.deepClone(this.innerIndex),i=0;i<this.innerColumns.length;i++)i>this.columnIndex&&(t[i]=0);this.setIndexs(t)},getColumnValues:function(e){return(0,a.default)((0,r.default)().mark((function e(){return(0,r.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,uni.$u.sleep();case 2:case"end":return e.stop()}}),e)})))(),this.innerColumns[e]},setColumns:function(e){this.innerColumns=uni.$u.deepClone(e),0===this.innerIndex.length&&(this.innerIndex=new Array(e.length).fill(0))},getIndexs:function(){return this.innerIndex},getValues:function(){var e=this;return(0,a.default)((0,r.default)().mark((function e(){return(0,r.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,uni.$u.sleep();case 2:case"end":return e.stop()}}),e)})))(),this.innerColumns.map((function(n,t){return n[e.innerIndex[t]]}))}}};n.default=u},8793:function(e,n,t){"use strict";t.r(n);var i=t("640c"),r=t.n(i);for(var a in i)["default"].indexOf(a)<0&&function(e){t.d(n,e,(function(){return i[e]}))}(a);n["default"]=r.a},"8e90":function(e,n,t){var i=t("d64f");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var r=t("4f06").default;r("015bb344",i,!0,{sourceMap:!1,shadowMode:!1})},a07e:function(e,n,t){"use strict";var i=t("1fce"),r=t.n(i);r.a},aaa0:function(e,n,t){"use strict";t.r(n);var i=t("63b9"),r=t("d6be");for(var a in r)["default"].indexOf(a)<0&&function(e){t.d(n,e,(function(){return r[e]}))}(a);t("a07e");var o=t("f0c5"),u=Object(o["a"])(r["default"],i["b"],i["c"],!1,null,"8c7a2b80",null,!1,i["a"],void 0);n["default"]=u.exports},b10e:function(e,n,t){"use strict";t("7a82");var i=t("4ea4").default;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=i(t("0745")),a={name:"u-toolbar",mixins:[uni.$u.mpMixin,uni.$u.mixin,r.default],methods:{cancel:function(){this.$emit("cancel")},confirm:function(){this.$emit("confirm")}}};n.default=a},b5f3:function(e,n,t){"use strict";var i=t("8e90"),r=t.n(i);r.a},cb29:function(e,n,t){var i=t("23e7"),r=t("81d5"),a=t("44d2");i({target:"Array",proto:!0},{fill:r}),a("fill")},d64f:function(e,n,t){var i=t("24fb");n=i(!1),n.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-view[data-v-a1c9e37c], uni-scroll-view[data-v-a1c9e37c], uni-swiper-item[data-v-a1c9e37c]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.u-picker[data-v-a1c9e37c]{position:relative}.u-picker__view__column[data-v-a1c9e37c]{display:flex;flex-direction:row;flex:1;justify-content:center}.u-picker__view__column__item[data-v-a1c9e37c]{display:flex;flex-direction:row;justify-content:center;align-items:center;font-size:16px;text-align:center;display:block;color:#303133}.u-picker__view__column__item--disabled[data-v-a1c9e37c]{cursor:not-allowed;opacity:.35}.u-picker--loading[data-v-a1c9e37c]{position:absolute;top:0;right:0;left:0;bottom:0;display:flex;flex-direction:row;justify-content:center;align-items:center;background-color:hsla(0,0%,100%,.87);z-index:1000}',""]),e.exports=n},d6be:function(e,n,t){"use strict";t.r(n);var i=t("b10e"),r=t.n(i);for(var a in i)["default"].indexOf(a)<0&&function(e){t.d(n,e,(function(){return i[e]}))}(a);n["default"]=r.a},e492:function(e,n,t){"use strict";t("7a82"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,t("a9e3");var i={props:{show:{type:Boolean,default:uni.$u.props.picker.show},showToolbar:{type:Boolean,default:uni.$u.props.picker.showToolbar},title:{type:String,default:uni.$u.props.picker.title},columns:{type:Array,default:uni.$u.props.picker.columns},loading:{type:Boolean,default:uni.$u.props.picker.loading},itemHeight:{type:[String,Number],default:uni.$u.props.picker.itemHeight},cancelText:{type:String,default:uni.$u.props.picker.cancelText},confirmText:{type:String,default:uni.$u.props.picker.confirmText},cancelColor:{type:String,default:uni.$u.props.picker.cancelColor},confirmColor:{type:String,default:uni.$u.props.picker.confirmColor},visibleItemCount:{type:[String,Number],default:uni.$u.props.picker.visibleItemCount},keyName:{type:String,default:uni.$u.props.picker.keyName},closeOnClickOverlay:{type:Boolean,default:uni.$u.props.picker.closeOnClickOverlay},defaultIndex:{type:Array,default:uni.$u.props.picker.defaultIndex},immediateChange:{type:Boolean,default:uni.$u.props.picker.immediateChange}}};n.default=i}}]);