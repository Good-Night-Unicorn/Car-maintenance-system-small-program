(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/cheliang/add-or-update"],{"41ac":function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=a(t("a34a"));function a(e){return e&&e.__esModule?e:{default:e}}function i(e,n,t,r,a,i,u){try{var c=e[i](u),o=c.value}catch(s){return void t(s)}c.done?n(o):Promise.resolve(o).then(r,a)}function u(e){return function(){var n=this,t=arguments;return new Promise((function(r,a){var u=e.apply(n,t);function c(e){i(u,r,a,c,o,"next",e)}function o(e){i(u,r,a,c,o,"throw",e)}c(void 0)}))}}var c=function(){Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(function(){return resolve(t("b7aa"))}.bind(null,t)).catch(t.oe)},o={data:function(){return{cross:"",ro:{cheliangUuidNumber:!0,cheliangTypes:!1,cheliangPhoto:!1,cheliangXinghao:!1,cheliangYanse:!1,yonghuId:!1,newsContent:!1,insertTime:!1,createTime:!1},ruleForm:{cheliangUuidNumber:this.getUUID(),cheliangTypes:"",cheliangValue:"",cheliangPhoto:"",cheliangXinghao:"",cheliangYanse:"",yonghuId:"",newsContent:"",insertTime:"",createTime:""},user:{},cheliangTypesOptions:[],cheliangTypesIndex:0}},components:{wPicker:c},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(e){var n=this;return u(r.default.mark((function t(){var a,i,u;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a={page:1,limit:100,dicCode:"cheliang_types"},t.next=3,n.$api.page("dictionary",a);case 3:if(i=t.sent,n.cheliangTypesOptions=i.data.list,!e.id){t.next=11;break}return n.ruleForm.id=e.id,t.next=9,n.$api.info("cheliang",n.ruleForm.id);case 9:u=t.sent,n.ruleForm=u.data;case 11:e.cheliangId&&(n.ruleForm.cheliangId=e.cheliangId);case 12:case"end":return t.stop()}}),t)})))()},methods:{cheliangTypesChange:function(e){this.cheliangTypesIndex=e.target.value,this.ruleForm.cheliangValue=this.cheliangTypesOptions[this.cheliangTypesIndex].indexName,this.ruleForm.cheliangTypes=this.cheliangTypesOptions[this.cheliangTypesIndex].codeIndex},cheliangPhotoTap:function(){var e=this;this.$api.upload((function(n){e.ruleForm.cheliangPhoto=e.$base.url+"upload/"+n.file,e.$forceUpdate(),e.$nextTick((function(){}))}))},insertTimeConfirm:function(e){console.log(e),this.ruleForm.insertTime=e.result,this.$forceUpdate()},createTimeConfirm:function(e){console.log(e),this.ruleForm.createTime=e.result,this.$forceUpdate()},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=this;return u(r.default.mark((function t(){return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n.ruleForm.cheliangUuidNumber){t.next=3;break}return n.$utils.msg("车牌号不能为空"),t.abrupt("return");case 3:if(n.ruleForm.cheliangPhoto){t.next=6;break}return n.$utils.msg("图片不能为空"),t.abrupt("return");case 6:if(n.ruleForm.cheliangXinghao){t.next=9;break}return n.$utils.msg("车型号不能为空"),t.abrupt("return");case 9:if(n.ruleForm.cheliangYanse){t.next=12;break}return n.$utils.msg("颜色不能为空"),t.abrupt("return");case 12:if(!n.ruleForm.id){t.next=17;break}return t.next=15,n.$api.update("cheliang",n.ruleForm);case 15:t.next=19;break;case 17:return t.next=19,n.$api.save("cheliang",n.ruleForm);case 19:e.setStorageSync("pingluenStateState",!0),n.$utils.msgBack("提交成功");case 21:case"end":return t.stop()}}),t)})))()},getDate:function(e){var n=new Date,t=n.getFullYear(),r=n.getMonth()+1,a=n.getDate();return"start"===e?t-=60:"end"===e&&(t+=2),r=r>9?r:"0"+r,a=a>9?a:"0"+a,"".concat(t,"-").concat(r,"-").concat(a)},toggleTab:function(e){this.$refs[e].show()}}};n.default=o}).call(this,t("543d")["default"])},8421:function(e,n,t){"use strict";t.r(n);var r=t("41ac"),a=t.n(r);for(var i in r)"default"!==i&&function(e){t.d(n,e,(function(){return r[e]}))}(i);n["default"]=a.a},9475:function(e,n,t){"use strict";t.d(n,"b",(function(){return a})),t.d(n,"c",(function(){return i})),t.d(n,"a",(function(){return r}));var r={wPicker:function(){return Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(t.bind(null,"b7aa"))}},a=function(){var e=this,n=e.$createElement;e._self._c},i=[]},"96fb":function(e,n,t){},d1f6:function(e,n,t){"use strict";var r=t("96fb"),a=t.n(r);a.a},d795:function(e,n,t){"use strict";(function(e){t("48e8");r(t("66fd"));var n=r(t("eb35"));function r(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=t,e(n.default)}).call(this,t("543d")["createPage"])},eb35:function(e,n,t){"use strict";t.r(n);var r=t("9475"),a=t("8421");for(var i in a)"default"!==i&&function(e){t.d(n,e,(function(){return a[e]}))}(i);t("d1f6");var u,c=t("f0c5"),o=Object(c["a"])(a["default"],r["b"],r["c"],!1,null,"42ba8b7e",null,!1,r["a"],u);n["default"]=o.exports}},[["d795","common/runtime","common/vendor"]]]);