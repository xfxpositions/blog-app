"use strict";(self["webpackChunkhe_we_go_again"]=self["webpackChunkhe_we_go_again"]||[]).push([[550],{8550:function(e,l,t){t.r(l),t.d(l,{default:function(){return ge}});var a=t(3396),o=t(7139),n=t(6357),r=t(2425),u=t(8302),i=t(9242),s=t(3289),d=t(7302),c=t(8717),m=t(4870),v=t(131),p=t(9888);const g=Symbol.for("vuetify:selection-control-group");(0,a.aZ)({name:"VSelectionControlGroup",props:{disabled:Boolean,id:String,inline:Boolean,name:String,falseIcon:String,trueIcon:String,multiple:{type:Boolean,default:null},readonly:Boolean,type:String,modelValue:null},emits:{"update:modelValue":e=>!0},setup(e,l){let{slots:t}=l;const o=(0,c.z)(e,"modelValue"),n=(0,v.sq)(),r=(0,a.Fl)((()=>e.id||`v-selection-control-group-${n}`)),u=(0,a.Fl)((()=>e.name||r.value));return(0,a.JJ)(g,{disabled:(0,m.Vh)(e,"disabled"),inline:(0,m.Vh)(e,"inline"),modelValue:o,multiple:(0,a.Fl)((()=>!!e.multiple||null==e.multiple&&Array.isArray(o.value))),name:u,falseIcon:(0,m.Vh)(e,"falseIcon"),trueIcon:(0,m.Vh)(e,"trueIcon"),readonly:(0,m.Vh)(e,"readonly"),type:(0,m.Vh)(e,"type")}),(0,p.L)((()=>{var l;return(0,a.Wm)("div",{class:"v-selection-control-group","aria-labelled-by":"radio"===e.type?r.value:void 0,role:"radio"===e.type?"radiogroup":void 0},[null==t||null==(l=t.default)?void 0:l.call(t)])})),{}}});var f=t(9694),h=t(7041),y=t(2370),b=t(3824),V=t(3766),k=t(1107),w=t(2385);const _=(0,V.U)({color:String,disabled:Boolean,error:Boolean,id:String,inline:Boolean,label:String,falseIcon:String,trueIcon:String,ripple:{type:Boolean,default:!0},multiple:{type:Boolean,default:null},name:String,readonly:Boolean,trueValue:null,falseValue:null,modelValue:null,type:String,value:null,valueComparator:{type:Function,default:v.vZ},...(0,h.x$)(),...(0,f.f)()});function I(e){const l=(0,a.f3)(g,void 0),{densityClasses:t}=(0,f.t)(e),o=(0,c.z)(e,"modelValue"),n=(0,a.Fl)((()=>void 0!==e.trueValue?e.trueValue:void 0===e.value||e.value)),r=(0,a.Fl)((()=>void 0!==e.falseValue&&e.falseValue)),u=(0,a.Fl)((()=>(null==l?void 0:l.multiple.value)||!!e.multiple||null==e.multiple&&Array.isArray(o.value))),i=(0,a.Fl)({get(){const t=l?l.modelValue.value:o.value;return u.value?t.some((l=>e.valueComparator(l,n.value))):e.valueComparator(t,n.value)},set(t){const a=t?n.value:r.value;let i=a;u.value&&(i=t?[...(0,v.FT)(o.value),a]:(0,v.FT)(o.value).filter((l=>!e.valueComparator(l,n.value)))),l?l.modelValue.value=i:o.value=i}}),{textColorClasses:s,textColorStyles:d}=(0,y.rY)((0,a.Fl)((()=>!i.value||e.error||e.disabled?void 0:e.color))),m=(0,a.Fl)((()=>{var t,a;return i.value?null!=(t=null==l?void 0:l.trueIcon.value)?t:e.trueIcon:null!=(a=null==l?void 0:l.falseIcon.value)?a:e.falseIcon}));return{group:l,densityClasses:t,trueValue:n,falseValue:r,model:i,textColorClasses:s,textColorStyles:d,icon:m}}const x=(0,k.e)()({name:"VSelectionControl",directives:{Ripple:b.H},inheritAttrs:!1,props:_(),emits:{"update:modelValue":e=>!0},setup(e,l){let{attrs:t,slots:o}=l;const{densityClasses:n,group:r,icon:u,model:c,textColorClasses:g,textColorStyles:f,trueValue:h}=I(e),y=(0,v.sq)(),b=(0,a.Fl)((()=>e.id||`input-${y}`)),V=(0,m.iH)(!1),k=(0,m.iH)(!1),_=(0,m.iH)();function x(e){V.value=!0,(!w.Z1||w.Z1&&e.target.matches(":focus-visible"))&&(k.value=!0)}function S(){V.value=!1,k.value=!1}return(0,p.L)((()=>{var l,m,v,p;const y=o.label?o.label({label:e.label,props:{for:b.value}}):e.label,w=null!=(l=null==r?void 0:r.type.value)?l:e.type;return(0,a.Wm)("div",{class:["v-selection-control",{"v-selection-control--dirty":c.value,"v-selection-control--disabled":e.disabled,"v-selection-control--error":e.error,"v-selection-control--focused":V.value,"v-selection-control--focus-visible":k.value,"v-selection-control--inline":(null==r?void 0:r.inline.value)||e.inline},n.value]},[(0,a.Wm)("div",{class:["v-selection-control__wrapper",g.value]},[null==(m=o.default)?void 0:m.call(o),(0,a.wy)((0,a.Wm)("div",{class:["v-selection-control__input"],style:f.value},[u.value&&(0,a.Wm)(s.t,{icon:u.value},null),(0,a.wy)((0,a.Wm)("input",(0,a.dG)({"onUpdate:modelValue":e=>c.value=e,ref:_,disabled:e.disabled,id:b.value,onBlur:S,onFocus:x,readonly:e.readonly,type:w,value:h.value,name:null!=(v=null==r?void 0:r.name.value)?v:e.name,"aria-checked":"checkbox"===w?c.value:void 0},t),null),[[i.YZ,c.value]]),null==(p=o.input)?void 0:p.call(o,{model:c,textColorClasses:g,props:{onFocus:x,onBlur:S,id:b.value}})]),[[(0,a.Q2)("ripple"),e.ripple&&[!e.disabled&&!e.readonly,null,["center","circle"]]]])]),(0,a.Wm)(d.J,{for:b.value},{default:()=>[y]})])})),{isFocused:V,input:_}}});function S(e){return(0,v.ei)(e,Object.keys(x.props))}const C=(0,k.a)({name:"VCheckbox",inheritAttrs:!1,props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},...(0,u.co)(),..._(),falseIcon:{type:String,default:"$checkboxOff"},trueIcon:{type:String,default:"$checkboxOn"}},emits:{"update:indeterminate":e=>!0},setup(e,l){let{attrs:t,slots:o}=l;const n=(0,c.z)(e,"indeterminate"),r=(0,a.Fl)((()=>n.value?e.indeterminateIcon:e.falseIcon)),i=(0,a.Fl)((()=>n.value?e.indeterminateIcon:e.trueIcon));function s(){n.value&&(n.value=!1)}return(0,p.L)((()=>{const[l,d]=(0,v.An)(t),[c,m]=(0,u.PE)(e),[p,g]=S(e);return(0,a.Wm)(u.q8,(0,a.dG)({class:"v-checkbox"},l,c),{...o,default:e=>{let{isDisabled:l,isReadonly:t}=e;return(0,a.Wm)(x,(0,a.dG)(p,{type:"checkbox","onUpdate:modelValue":s,falseIcon:r.value,trueIcon:i.value,"aria-checked":n.value?"mixed":void 0,disabled:l.value,readonly:t.value},d),null)}})})),{}}});var U=t(3369),W=t(2902);const $={key:0},A={class:"red"},B=(0,a.Uk)(" Üye değilim, "),F=(0,a._)("br",null,null,-1),E={class:"fg-red"},z={class:"d-flex pa-2"},G=(0,a.Uk)("Giriş Yap");function H(e,l,t,u,i,s){const d=(0,a.up)("forgot-password"),c=(0,a.up)("google-auth");return(0,a.wg)(),(0,a.j4)(U.K,null,{default:(0,a.w5)((()=>[(0,a.Wm)(r._,{"max-width":"1200",class:"ma-auto pa-6"},{default:(0,a.w5)((()=>[this.$store.getters._isAuthenticated?((0,a.wg)(),(0,a.iD)("h2",$,[(0,a.Uk)((0,o.zw)(this.$store.getters._getCurrentUser.name)+" olarak giriş yapıldı ",1),(0,a._)("a",{onClick:l[0]||(l[0]=e=>s.logout()),class:"text-blue"},"Çıkış Yap")])):((0,a.wg)(),(0,a.iD)(a.HY,{key:1},[(0,a.Wm)(W.h,{modelValue:i.Userdata.email,"onUpdate:modelValue":l[1]||(l[1]=e=>i.Userdata.email=e),color:"teal darken-1",label:"Email"},null,8,["modelValue"]),(0,a.Wm)(W.h,{modelValue:i.Userdata.password,"onUpdate:modelValue":l[2]||(l[2]=e=>i.Userdata.password=e),color:"teal darken-1",label:"Şifre"},null,8,["modelValue"]),(0,a.Wm)(C,{color:"teal darken-1",modelValue:i.rememberMe,"onUpdate:modelValue":l[3]||(l[3]=e=>i.rememberMe=e),label:"Beni hatırla"},null,8,["modelValue"]),(0,a.Wm)(d),(0,a._)("p",A,[B,(0,a._)("a",{class:"text-blue",onClick:l[4]||(l[4]=e=>this.$router.push({name:"register"}))},"üye olmak istiyorum.")]),F,(0,a._)("p",E,(0,o.zw)(i.response),1),(0,a._)("div",z,[(0,a.Wm)(n.T,{class:"mr-3",onClick:l[5]||(l[5]=e=>s.loginEvent())},{default:(0,a.w5)((()=>[G])),_:1}),(0,a.Wm)(c)])],64))])),_:1})])),_:1})}var L=t(6572),Y=t(1888),Z=t(1334),D=t(2583),M=t(993),T=t(4544),N=t(4906);const O=(0,k.e)()({name:"VDialog",inheritAttrs:!1,props:{fullscreen:Boolean,origin:{type:String,default:"center center"},retainFocus:{type:Boolean,default:!0},scrollable:Boolean,modelValue:Boolean,...(0,T.x)({width:"auto"}),...(0,N.X)({transition:{component:D.v}})},emits:{"update:modelValue":e=>!0},setup(e,l){let{attrs:t,slots:o}=l;const n=(0,c.z)(e,"modelValue"),{dimensionStyles:r}=(0,T.$)(e),u=(0,m.iH)();function i(e){var l;const t=e.relatedTarget,a=e.target;if(t!==a&&null!=(l=u.value)&&l.contentEl&&![document,u.value.contentEl].includes(a)&&!u.value.contentEl.contains(a)){const e=[...u.value.contentEl.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')].filter((e=>!e.hasAttribute("disabled")));if(!e.length)return;const l=e[0],a=e[e.length-1];t===l?a.focus():l.focus()}}return w.BR&&(0,a.YP)((()=>n.value&&e.retainFocus),(e=>{e?document.addEventListener("focusin",i):document.removeEventListener("focusin",i)}),{immediate:!0}),(0,a.YP)(n,(async e=>{var l,t;(await(0,a.Y3)(),e)?null==(l=u.value.contentEl)||l.focus({preventScroll:!0}):null==(t=u.value.activatorEl)||t.focus({preventScroll:!0})})),()=>(0,a.Wm)(M.y,(0,a.dG)({modelValue:n.value,"onUpdate:modelValue":e=>n.value=e,class:["v-dialog",{"v-dialog--fullscreen":e.fullscreen}],style:r.value,transition:e.transition,ref:u,"aria-role":"dialog","aria-modal":"true",activatorProps:{"aria-haspopup":"dialog","aria-expanded":String(n.value)}},t),{default:o.default,activator:o.activator})}});var P=t(9234);const j=e=>((0,a.dD)("data-v-2cc9d042"),e=e(),(0,a.Cn)(),e),q=j((()=>(0,a._)("p",null,null,-1))),K=j((()=>(0,a._)("h1",null,"Şifrenizi mi unuttunuz",-1))),J=(0,a.Uk)(" Kayıt olduğunuz email adresinize bir link göndereceğiz. Linke tıklayarak şifrenizi yenileyebilirsiniz. "),R=(0,a.Uk)(" Kapat "),Q=(0,a.Uk)(" Gönder ");function X(e,l,t,o,u,i){return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.Wm)(O,{modelValue:u.dialog,"onUpdate:modelValue":l[1]||(l[1]=e=>u.dialog=e)},{activator:(0,a.w5)((({props:e})=>[(0,a._)("a",(0,a.dG)({class:"text-decoration-underline text-blue"},e),"Şifremi Unuttum",16),q])),default:(0,a.w5)((()=>[(0,a.Wm)(r._,null,{default:(0,a.w5)((()=>[(0,a.Wm)(L.E,null,{default:(0,a.w5)((()=>[K])),_:1}),(0,a.Wm)(Y.Z,null,{default:(0,a.w5)((()=>[(0,a.Wm)(W.h,{color:"blue",label:"Emailinizi giriniz"}),J])),_:1}),(0,a.Wm)(Z.h,null,{default:(0,a.w5)((()=>[(0,a.Wm)(P.C),(0,a.Wm)(n.T,{color:"teal darken-1",type:"email",onClick:l[0]||(l[0]=e=>u.dialog=!1)},{default:(0,a.w5)((()=>[R])),_:1}),(0,a.Wm)(n.T,{color:"teal darken-1",text:"",onClick:i.sendLink},{default:(0,a.w5)((()=>[Q])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1},8,["modelValue"])])}var ee={data(){return{dialog:!1}},methods:{sendLink(){}}},le=t(89);const te=(0,le.Z)(ee,[["render",X],["__scopeId","data-v-2cc9d042"]]);var ae=te,oe=t(8082),ne=t.n(oe);const re=e=>((0,a.dD)("data-v-824034c4"),e=e(),(0,a.Cn)(),e),ue=(0,a.Uk)("mdi-google"),ie=re((()=>(0,a._)("strong",null,"google ",-1)));function se(e,l,t,o,r,u){return(0,a.wg)(),(0,a.j4)(n.T,{disabled:!o.Vue3GoogleOauth.isInit,color:"red red-darken-1",class:"text-white d-flex justify-between",onClick:l[0]||(l[0]=e=>u.signIn())},{default:(0,a.w5)((()=>[(0,a.Wm)(s.t,null,{default:(0,a.w5)((()=>[ue])),_:1}),ie])),_:1},8,["disabled"])}var de={setup(){const e=(0,a.f3)("Vue3GoogleOauth");return{Vue3GoogleOauth:e}},data(){return{isLogin:!1,user:{}}},methods:{async signIn(){const e=await this.$gAuth.signIn();if(!e)return null;{this.user=e.getBasicProfile();const l={name:this.user.getName(),avatar:this.user.getImageUrl(),googleImg:this.user.getImageUrl(),email:this.user.getEmail(),createdVia:"gAuth"};console.log(l),this.$appAxios.post("/fetch",{filter:{email:this.user.getEmail()}}).then((e=>{0==e.data.result.length?this.$appAxios.post("/create",l).then((e=>{console.log(e),this.$appAxios.post("/setavatarurl",{_id:e.data.result._id,avatar:l.avatar}).then((e=>{console.log("img upload result : ",e),this.$appAxios.post("/fetch",{filter:{email:this.user.getEmail()}}).then((e=>{this.$store.commit("setUser",e.data.result[0]),localStorage.setItem("currentUserName",this.user.getName()),this.$router.push({name:"home"}),console.log("login with sign up ")}))}))})):(console.log("login withoud sign up "),this.$store.commit("setUser",e.data.result[0]),localStorage.setItem("currentUserName",this.user.getName()),this.$router.push({name:"login"}))}))}}}};const ce=(0,le.Z)(de,[["render",se],["__scopeId","data-v-824034c4"]]);var me=ce,ve={data(){return{rememberMe:!1,Userdata:{email:"",password:""},response:""}},methods:{loginEvent(){this.rememberMe?localStorage.setItem("rememberMe",!0):localStorage.setItem("rememberMe",!1),console.log(),this.$appAxios.post("/find",{email:this.Userdata.email}).catch((e=>{console.log("err : "+e),this.response="Hata : Hesap bulunamadı"})).then((e=>{console.log(e),this.Userdata.password==ne().AES.decrypt(e.data.result[0].password,this.$saltKey).toString(ne().enc.Utf8)?(this.$store.commit("setUser",e.data.result[0]),localStorage.setItem("currentUserName",e.data.result[0].name),this.$router.push({name:"home"})):(console.log("response error"),this.response="Hata : Yanlış Şifre")}))},logout(){"true"==localStorage.getItem("rememberMe")?localStorage.removeItem("vuex"):sessionStorage.removeItem("vuex"),this.$router.go({name:"login"})}},components:{forgotPassword:ae,googleAuth:me}};const pe=(0,le.Z)(ve,[["render",H]]);var ge=pe}}]);
//# sourceMappingURL=550.82a8ccb1.js.map