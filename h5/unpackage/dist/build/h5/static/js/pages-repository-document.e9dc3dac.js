(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-repository-document"],{"4c2e":function(t,e,i){"use strict";i.r(e);var n=i("ec2f"),a=i.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},"8bcb":function(t,e,i){var n=i("eb05");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("90795586",n,!0,{sourceMap:!1,shadowMode:!1})},b85c:function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){var i="undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!i){if(Array.isArray(t)||(i=(0,n.default)(t))||e&&t&&"number"===typeof t.length){i&&(t=i);var a=0,o=function(){};return{s:o,n:function(){return a>=t.length?{done:!0}:{done:!1,value:t[a++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,r=!0,c=!1;return{s:function(){i=i.call(t)},n:function(){var t=i.next();return r=t.done,t},e:function(t){c=!0,s=t},f:function(){try{r||null==i["return"]||i["return"]()}finally{if(c)throw s}}}},i("a4d3"),i("e01a"),i("d3b7"),i("d28b"),i("3ca3"),i("ddb0"),i("d9e2"),i("d401");var n=function(t){return t&&t.__esModule?t:{default:t}}(i("06c5"))},baa5:function(t,e,i){var n=i("23e7"),a=i("e58c");n({target:"Array",proto:!0,forced:a!==[].lastIndexOf},{lastIndexOf:a})},bd40:function(t,e,i){"use strict";var n=i("8bcb"),a=i.n(n);a.a},c619:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var n={uIcon:i("e838").default,uPopup:i("77c5").default,uPicker:i("0343").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{staticClass:"chat_cont"},[i("v-uni-view",{staticClass:"cont_li"},[i("v-uni-view",{staticClass:"top"},[i("v-uni-view",{staticStyle:{display:"flex"}},[i("v-uni-view",{staticClass:"txt",staticStyle:{"margin-right":"15rpx"}},[t._v(t._s(t.name))]),i("u-icon",{attrs:{name:"arrow-down",color:"#000",size:"18"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.chatShow=!0}}})],1),i("v-uni-view",{staticClass:"tag",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toGroup.apply(void 0,arguments)}}},[t._v("分组管理")])],1),i("v-uni-view",{staticClass:"qs_img",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.uploadFile.apply(void 0,arguments)}}},[i("img",{staticClass:"up_pic",attrs:{src:t.up_pic,mode:"aspectFit"}}),i("v-uni-view",{staticClass:"up_txt"},[t._v("点击上传")])],1),i("v-uni-view",{staticClass:"img_text"},[t._v("文件资料上传可包含docx、pdf、xlsx、ppt、txt、md文件")])],1),i("v-uni-view",{staticClass:"headline"},[t._v("已上传文档")]),i("v-uni-view",[i("v-uni-scroll-view",{staticClass:"list_ul",attrs:{"scroll-y":"true"}},t._l(t.fileList,(function(e,n){return i("v-uni-view",{key:n,staticClass:"ul_style"},[i("v-uni-view",{staticClass:"li_style"},[i("v-uni-view",{staticClass:"ul_right"},[i("v-uni-view",{staticClass:"li_top"},[i("v-uni-text",{staticClass:"top_l"},[t._v(t._s(e.file_name))])],1),i("v-uni-view",{staticClass:"li_btn"},[i("v-uni-view",{staticClass:"btn_l"},[t._v("描述")]),i("v-uni-view",{staticClass:"btn_r"},[t._v(t._s(e.file_desc))])],1),i("v-uni-view",{staticClass:"li_btn"},[i("v-uni-view",{staticClass:"btn_l"},[t._v("类型")]),i("v-uni-view",{staticClass:"btn_r"},[t._v(t._s(e.file_type))])],1),i("v-uni-view",{staticClass:"li_btn"},[i("v-uni-view",{staticClass:"btn_l"},[t._v("使用次数")]),i("v-uni-view",{staticClass:"btn_r"},[t._v(t._s(e.times_used))])],1),i("v-uni-view",{staticClass:"li_edit"},[i("v-uni-view",{staticClass:"edit_l",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.delDocuments(e.file_id)}}},[t._v("删除")]),i("v-uni-view",{staticClass:"edit_r",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.editDocuments(e)}}},[t._v("编辑")])],1)],1)],1)],1)})),1)],1)],1),i("u-popup",{attrs:{show:t.show,mode:"center"},on:{close:function(e){arguments[0]=e=t.$handleEvent(e),t.show=!1}}},[i("v-uni-view",{staticStyle:{padding:"60rpx 40rpx"}},[i("v-uni-view",{staticStyle:{display:"flex","margin-bottom":"20rpx"}},[i("v-uni-view",{staticClass:"name"},[t._v("网址名称：")]),i("v-uni-input",{attrs:{type:"text",disabled:"true",placeholder:"请输入分组名称"},model:{value:t.file_name,callback:function(e){t.file_name=e},expression:"file_name"}})],1),i("v-uni-view",{staticStyle:{display:"flex","margin-bottom":"20rpx"}},[i("v-uni-view",{staticClass:"name "},[t._v("描述：")]),i("v-uni-input",{attrs:{type:"text",placeholder:"请输入描述"},model:{value:t.file_desc,callback:function(e){t.file_desc=e},expression:"file_desc"}})],1),i("v-uni-view",{staticClass:"li_edit",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.show=!1}}},[i("v-uni-view",{staticClass:"edit_l"},[t._v("取消")]),i("v-uni-view",{staticClass:"edit_r",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.submit.apply(void 0,arguments)}}},[t._v("确认")])],1)],1)],1),i("u-picker",{attrs:{show:t.chatShow,columns:t.groupcolumns,closeOnClickOverlay:!0,keyName:"name"},on:{close:function(e){arguments[0]=e=t.$handleEvent(e),t.chatShow=!1},cancel:function(e){arguments[0]=e=t.$handleEvent(e),t.chatShow=!1},confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.version.apply(void 0,arguments)}},model:{value:t.group_name,callback:function(e){t.group_name=e},expression:"group_name"}})],1)},o=[]},d47a:function(t,e,i){"use strict";i.r(e);var n=i("c619"),a=i("4c2e");for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("bd40");var s=i("f0c5"),r=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"458cbb90",null,!1,n["a"],void 0);e["default"]=r.exports},eb05:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".chat_cont[data-v-458cbb90]{padding:%?30?%}.chat_cont .cont_li[data-v-458cbb90]{padding:%?25?%;background:#fff;border-radius:%?15?%}.top[data-v-458cbb90]{display:flex;justify-content:space-between;margin-bottom:%?24?%}.top .tag[data-v-458cbb90]{color:#1f64ff;font-size:%?26?%;font-weight:400}.txt[data-v-458cbb90]{color:#202123;font-size:%?28?%;font-weight:500}.qs_img[data-v-458cbb90]{display:flex;align-items:center;justify-content:flex-start;padding:%?10?% %?32?%;gap:%?16?%;border-radius:%?4?%;background:#1f64ff;width:36%;margin-bottom:%?16?%}.qs_img .up_txt[data-v-458cbb90]{color:#fff;font-size:%?28?%;font-weight:400}.img_text[data-v-458cbb90]{color:#9a9a9a;font-size:%?24?%;font-style:normal;font-weight:400}.headline[data-v-458cbb90]{color:#000;font-size:%?32?%;font-weight:500;margin:%?40?% 0 %?24?% 0}.list_ul[data-v-458cbb90]{margin-bottom:%?30?%;width:calc(100%)}.ul_style[data-v-458cbb90]{display:flex;flex-direction:column}.li_style[data-v-458cbb90]{display:flex;align-items:center;box-shadow:%?0?% %?0?% %?10?% rgba(0,0,0,.14);border-radius:%?10?%;padding:%?25?%;width:calc(99%);background:#fff;margin-top:%?24?%}.li_style .ul_right[data-v-458cbb90]{width:100%}.li_style .ul_img[data-v-458cbb90]{padding:%?10?%}.li_style .ul_img .avatar_img[data-v-458cbb90]{width:%?80?%;height:%?80?%;border-radius:%?8?%}.li_top[data-v-458cbb90]{display:flex;align-items:center;justify-content:space-between;margin-bottom:%?18?%;width:80%}.top_l[data-v-458cbb90]{font-weight:500;font-size:%?30?%;line-height:%?42?%;color:#000;width:80%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.top_r[data-v-458cbb90]{font-weight:400;font-size:%?24?%;line-height:%?30?%;color:#6e7480}.li_btn[data-v-458cbb90]{font-weight:400;font-size:%?28?%;line-height:%?35?%;display:flex;align-items:center;justify-content:space-between}.li_btn .btn_l[data-v-458cbb90]{color:#a4a4a4;font-size:%?28?%;font-weight:400;line-height:150%;padding:%?5?% %?0?%;line-height:%?48?%}.li_btn .btn_r[data-v-458cbb90]{color:#000;font-size:%?28?%;font-weight:400;line-height:150%;padding:%?5?% %?0?%;line-height:%?48?%}.on_order[data-v-458cbb90]{display:flex;align-items:center;justify-content:center;height:100vh;width:100vw}.order_img[data-v-458cbb90]{width:%?450?%;height:%?450?%}.on_order_list[data-v-458cbb90]{display:flex;align-items:center;justify-content:center;font-size:%?28?%;height:%?100?%;line-height:%?100?%;width:100vw;color:#c0c4cc}.li_edit[data-v-458cbb90]{display:flex;align-items:center;justify-content:flex-end;margin-top:%?10?%}.li_edit .edit_l[data-v-458cbb90]{padding:%?10?% %?30?%;border-radius:%?8?%;border:%?1?% solid #1f64ff;color:#1f64ff;text-align:center;font-size:%?28?%;font-style:normal;font-weight:600;margin-right:%?20?%}.li_edit .edit_r[data-v-458cbb90]{padding:%?18?% %?30?%;border-radius:%?8?%;background:#1f64ff;color:#fff;text-align:center;font-size:%?28?%;font-style:normal;font-weight:600}.up_pic[data-v-458cbb90]{width:%?28?%;height:%?28?%}.li_edit[data-v-458cbb90]{display:flex;align-items:center;justify-content:space-between;width:83%;padding:%?0?% %?32?%;margin-top:%?70?%}.li_edit .edit_l[data-v-458cbb90]{padding:%?18?% %?30?%;border-radius:%?12?%;border:%?1?% solid #1f64ff;color:#1f64ff;text-align:center;font-size:%?28?%;font-style:normal;font-weight:600;margin-right:%?20?%;width:42%}.edit_r[data-v-458cbb90]{padding:%?20?% %?30?%;border-radius:%?12?%;background:#1f64ff;color:#fff;text-align:center;font-size:%?28?%;font-style:normal;font-weight:600;width:42%}.name[data-v-458cbb90]{width:34%;font-size:%?30?%}",""]),t.exports=e},ec2f:function(t,e,i){"use strict";(function(t){i("7a82");var n=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("b85c"));i("baa5"),i("4ec9"),i("d3b7"),i("3ca3"),i("ddb0"),i("14d9");var o=i("5cfd"),s={data:function(){return{group_name:"",show:!1,searchKeyword:"",qsImg:[],up_pic:t.baseImg+"/xcx/com/message_center/upload.png",group_url:"",group_id:"",group_order:"",name:"",fileList:[],file_name:"",file_desc:"",file_id:"",group_index:0,groupList:[],groupcolumns:[],group:[],chatShow:!1}},onLoad:function(t){if(t.obj){var e=JSON.parse(t.obj);this.group_id=e.id,this.group_order=e.group_order,this.name=e.name}},onShow:function(){this.getGroups(),this.getDocuments()},methods:{version:function(t){console.log(t,"e"),this.group_name=t.value[0].name,this.name=t.value[0].name,this.chatShow=!1,this.group_index=t.indexs[0],this.group_id=t.value[0].id,this.getDocuments()},getImgUrl:function(e){return t.baseImg+"/"+e},toGroup:function(){uni.setStorageSync("resposNum",1),uni.navigateTo({url:"/pages/repository/group"})},searchTitle:function(){},getDocuments:function(){var t=this;if(""!=this.group_id&&""!=this.group_order){var e={group_id:this.group_id,group_order:this.group_order,user_id:JSON.parse(uni.getStorageSync("userInfo")).user_id};(0,o.getDocuments)(e).then((function(e){2e4==e.code?t.fileList=e.data:t.$api.msg(e.msg)})).catch((function(t){console.log(t)}))}},uploadFile:function(){var e=this;uni.chooseFile({count:9,type:"file",extension:["docx","pdf","xlsx","ppt","txt","md"],success:function(i){var n=i.tempFiles[0].path,a=i.tempFiles[0].name;uni.showLoading({title:"上传中"}),uni.uploadFile({url:t.loginUrl+"/api/user/oss_upload",filePath:n,name:"image",formData:{image:n,image_name:a,oss_dir:"static",cate:"create_character"},success:function(t){var i=JSON.parse(t.data);if(console.log(i,1258),2e4==i.code){var n=i.data.name,a=i.data.new_url,o=a.substring(a.lastIndexOf(".")+1),s={name:n,url:a,type:o};e.upDocument(s)}else e.$api.msg(i.msg),uni.hideLoading()}})}})},upDocument:function(t){var e=this,i=(JSON.parse(uni.getStorageSync("userInfo")),{group_name:this.name,file_name:t.name,file_url:t.url,file_type:t.type,user_id:JSON.parse(uni.getStorageSync("userInfo")).user_id,group_order:this.group_order});(0,o.documents)(i).then((function(t){2e4==t.code?(e.getGroups(),e.$api.msg("上传成功"),uni.hideLoading()):(e.$api.msg(t.msg),uni.hideLoading())})).catch((function(t){e.$api.msg("上传失败了"),uni.hideLoading()}))},delDocuments:function(t){var e=this;uni.showModal({title:"提示",content:"确定删除该文档吗？",success:function(i){if(i.confirm){var n={user_id:JSON.parse(uni.getStorageSync("userInfo")).user_id,file_id:t};(0,o.delDocuments)(n).then((function(t){2e4===t.code?(e.$api.msg("删除成功"),e.getDocuments()):e.$api.msg(t.msg)})).catch((function(t){e.$api.msg("删除失败")}))}}})},editDocuments:function(t){this.show=!0,this.file_name=t.file_name,this.file_desc=t.file_desc,this.file_id=t.file_id},submit:function(){var t=this,e={user_id:JSON.parse(uni.getStorageSync("userInfo")).user_id,file_id:this.file_id,file_desc:this.file_desc};(0,o.putDocuments)(e).then((function(e){console.log(e),2e4==e.code?t.$api.msg("修改成功"):t.$api.msg(e.msg)})).catch((function(e){t.$api.msg("修改失败")})),this.show=!1},getGroups:function(){var t=this;this.groupList=[];var e={user_id:JSON.parse(uni.getStorageSync("userInfo")).user_id};(0,o.groups)(e).then((function(e){if(2e4==e.code){var i,n=new Map;for(var o in n.set("documents","文档库"),e.data){var s=e.data[o],r=[];for(var c in s){var u,l=s[c],d=[],f=(0,a.default)(l);try{for(f.s();!(u=f.n()).done;){var g=u.value;d.push(g)}}catch(b){f.e(b)}finally{f.f()}var p={name:c,id:l[0].group_id,group_order:l[0].group_order,children:d};r.push(p)}var v={id:(new Date).getTime(),name:n.get(o),children:r};t.groupList.push(v)}if(uni.getStorageSync("documents")){var h=uni.getStorageSync("documents"),_=t.groupList[1].children.every((function(t){return t.id===h.id}));_&&""!=t.groupList[1].children||(i={name:h.name,id:h.id,status:1,children:[{group_desc:t.group_desc}],group_order:1},t.groupList[1].children.push(i))}t.group[0]=t.groupList[1].children,t.groupcolumns=t.group,console.log(t.group,66);var m=t.group[0].length;""==t.name&&(t.name=t.group[0][0].name,t.group_id=t.group[0][0].id,t.group_order=t.group[0][0].group_order),t.name==t.group[0][m-1].name&&(t.name=t.group[0][m-1].name,t.group_id=t.group[0][m-1].id,uni.setStorageSync("documents","")),t.getDocuments()}})).catch((function(e){console.log(e),t.$api.msg("数据请求失败")}))}}};e.default=s}).call(this,i("c8ba"))}}]);