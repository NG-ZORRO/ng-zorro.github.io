"use strict";(self.webpackChunkng_zorro_antd_doc=self.webpackChunkng_zorro_antd_doc||[]).push([[9356],{9594:(Tn,H,i)=>{i.r(H),i.d(H,{NzDemoCommentModule:()=>Qn});var x=i(4190),E=i(6242),n=i(9212),k=i(8484),j=i(8645),X=i(9773),M=i(2755),Y=i(9388);function $(t,u){1&t&&n.Hsn(0)}const V=["*"];function P(t,u){if(1&t&&(n.ynx(0),n._uU(1),n.BQk()),2&t){const e=n.oxw(2);n.xp6(),n.Oqu(e.nzAuthor)}}function W(t,u){if(1&t&&(n.TgZ(0,"span",8),n.YNc(1,P,2,1,"ng-container",9),n.qZA()),2&t){const e=n.oxw();n.xp6(),n.Q6J("nzStringTemplateOutlet",e.nzAuthor)}}function w(t,u){if(1&t&&(n.ynx(0),n._uU(1),n.BQk()),2&t){const e=n.oxw(2);n.xp6(),n.Oqu(e.nzDatetime)}}function K(t,u){if(1&t&&(n.TgZ(0,"span",10),n.YNc(1,w,2,1,"ng-container",9),n.qZA()),2&t){const e=n.oxw();n.xp6(),n.Q6J("nzStringTemplateOutlet",e.nzDatetime)}}function nn(t,u){}function S(t,u){if(1&t&&(n.TgZ(0,"li")(1,"span"),n.YNc(2,nn,0,0,"ng-template",12),n.qZA()()),2&t){const e=u.$implicit;n.xp6(2),n.Q6J("nzCommentActionHost",e.content)}}function Q(t,u){if(1&t&&(n.TgZ(0,"ul",11),n.SjG(1,S,3,1,"li",null,n.x6l),n.qZA()),2&t){const e=n.oxw();n.xp6(),n.wJu(e.actions)}}const q=[[["nz-avatar","nz-comment-avatar",""]],[["nz-comment-content"]],"*"],tn=["nz-avatar[nz-comment-avatar]","nz-comment-content","*"];let Z=(()=>{class t{static#n=this.\u0275fac=function(o){return new(o||t)};static#t=this.\u0275dir=n.lG2({type:t,selectors:[["nz-avatar","nz-comment-avatar",""]],exportAs:["nzCommentAvatar"],standalone:!0})}return t})(),T=(()=>{class t{static#n=this.\u0275fac=function(o){return new(o||t)};static#t=this.\u0275dir=n.lG2({type:t,selectors:[["nz-comment-content"],["","nz-comment-content",""]],hostAttrs:[1,"ant-comment-content-detail"],exportAs:["nzCommentContent"],standalone:!0})}return t})(),L=(()=>{class t extends k.Pl{constructor(e,o){super(e,o)}ngOnInit(){super.ngOnInit()}ngOnDestroy(){super.ngOnDestroy()}ngAfterViewInit(){this.attach(this.nzCommentActionHost)}static#n=this.\u0275fac=function(o){return new(o||t)(n.Y36(n._Vd),n.Y36(n.s_b))};static#t=this.\u0275dir=n.lG2({type:t,selectors:[["","nzCommentActionHost",""]],inputs:{nzCommentActionHost:"nzCommentActionHost"},exportAs:["nzCommentActionHost"],standalone:!0,features:[n.qOj]})}return t})(),C=(()=>{class t{get content(){return this.contentPortal}constructor(e){this.viewContainerRef=e,this.contentPortal=null}ngOnInit(){this.contentPortal=new k.UE(this.implicitContent,this.viewContainerRef)}static#n=this.\u0275fac=function(o){return new(o||t)(n.Y36(n.s_b))};static#t=this.\u0275cmp=n.Xpm({type:t,selectors:[["nz-comment-action"]],viewQuery:function(o,a){if(1&o&&n.Gf(n.Rgc,7),2&o){let c;n.iGM(c=n.CRH())&&(a.implicitContent=c.first)}},exportAs:["nzCommentAction"],standalone:!0,features:[n.jDz],ngContentSelectors:V,decls:1,vars:0,template:function(o,a){1&o&&(n.F$t(),n.YNc(0,$,1,0,"ng-template"))},encapsulation:2,changeDetection:0})}return t})(),A=(()=>{class t{constructor(e,o){this.cdr=e,this.directionality=o,this.dir="ltr",this.destroy$=new j.x}ngOnInit(){this.directionality.change?.pipe((0,X.R)(this.destroy$)).subscribe(e=>{this.dir=e,this.cdr.detectChanges()}),this.dir=this.directionality.value}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}static#n=this.\u0275fac=function(o){return new(o||t)(n.Y36(n.sBO),n.Y36(Y.Is,8))};static#t=this.\u0275cmp=n.Xpm({type:t,selectors:[["nz-comment"]],contentQueries:function(o,a,c){if(1&o&&n.Suo(c,C,4),2&o){let m;n.iGM(m=n.CRH())&&(a.actions=m)}},hostVars:4,hostBindings:function(o,a){2&o&&n.ekj("ant-comment",!0)("ant-comment-rtl","rtl"===a.dir)},inputs:{nzAuthor:"nzAuthor",nzDatetime:"nzDatetime"},exportAs:["nzComment"],standalone:!0,features:[n.jDz],ngContentSelectors:tn,decls:11,vars:3,consts:[[1,"ant-comment-inner"],[1,"ant-comment-avatar"],[1,"ant-comment-content"],[1,"ant-comment-content-author"],["class","ant-comment-content-author-name"],["class","ant-comment-content-author-time"],["class","ant-comment-actions"],[1,"ant-comment-nested"],[1,"ant-comment-content-author-name"],[4,"nzStringTemplateOutlet"],[1,"ant-comment-content-author-time"],[1,"ant-comment-actions"],[3,"nzCommentActionHost"]],template:function(o,a){1&o&&(n.F$t(q),n.TgZ(0,"div",0)(1,"div",1),n.Hsn(2),n.qZA(),n.TgZ(3,"div",2)(4,"div",3),n.YNc(5,W,2,1,"span",4)(6,K,2,1,"span",5),n.qZA(),n.Hsn(7,1),n.YNc(8,Q,3,0,"ul",6),n.qZA()(),n.TgZ(9,"div",7),n.Hsn(10,2),n.qZA()),2&o&&(n.xp6(5),n.um2(5,a.nzAuthor?5:-1),n.xp6(),n.um2(6,a.nzDatetime?6:-1),n.xp6(2),n.um2(8,null!=a.actions&&a.actions.length?8:-1))},dependencies:[M.T,M.f,L],encapsulation:2,changeDetection:0})}return t})(),J=(()=>{class t{static#n=this.\u0275fac=function(o){return new(o||t)};static#t=this.\u0275mod=n.oAB({type:t});static#e=this.\u0275inj=n.cJS({imports:[A]})}return t})();var y=i(227),I=i(4007),s=i(8271),h=i(9730),r=i(4119),l=i(337);const p=[J,y.PV,I.Ph,s.U5,h.Rt,r.sL,l.o7];var z=i(379),v=i(5393),_=i(8101),b=i(3185),en=i(8332),R=i(1687),Cn=i(5227),f=i(581),on=i(2816);function G(t,u){(0,on.Z)(2,arguments);var e=(0,f.Z)(t),o=(0,f.Z)(u),a=e.getTime()-o.getTime();return a<0?-1:a>0?1:a}var An=i(275),vn=i(8279),xn=i(3061),yn=i(6719),rn=i(8292),ln=i(5351);function B(t,u,e){var o,a;(0,on.Z)(2,arguments);var c=(0,Cn.j)(),m=null!==(o=null!==(a=e?.locale)&&void 0!==a?a:c.locale)&&void 0!==o?o:yn.Z;if(!m.formatDistance)throw new RangeError("locale must contain formatDistance property");var D=G(t,u);if(isNaN(D))throw new RangeError("Invalid time value");var F,O,d=(0,rn.Z)(function Dn(t){return(0,rn.Z)({},t)}(e),{addSuffix:!!e?.addSuffix,comparison:D});D>0?(F=(0,f.Z)(u),O=(0,f.Z)(t)):(F=(0,f.Z)(t),O=(0,f.Z)(u));var N,U=(0,xn.Z)(O,F),Ln=((0,ln.Z)(O)-(0,ln.Z)(F))/1e3,g=Math.round((U-Ln)/60);if(g<2)return null!=e&&e.includeSeconds?U<5?m.formatDistance("lessThanXSeconds",5,d):U<10?m.formatDistance("lessThanXSeconds",10,d):U<20?m.formatDistance("lessThanXSeconds",20,d):U<40?m.formatDistance("halfAMinute",0,d):m.formatDistance(U<60?"lessThanXMinutes":"xMinutes",1,d):0===g?m.formatDistance("lessThanXMinutes",1,d):m.formatDistance("xMinutes",g,d);if(g<45)return m.formatDistance("xMinutes",g,d);if(g<90)return m.formatDistance("aboutXHours",1,d);if(g<1440){var Jn=Math.round(g/60);return m.formatDistance("aboutXHours",Jn,d)}if(g<2520)return m.formatDistance("xDays",1,d);if(g<43200){var Rn=Math.round(g/1440);return m.formatDistance("xDays",Rn,d)}if(g<86400)return N=Math.round(g/43200),m.formatDistance("aboutXMonths",N,d);if(N=function _n(t,u){(0,on.Z)(2,arguments);var m,e=(0,f.Z)(t),o=(0,f.Z)(u),a=G(e,o),c=Math.abs((0,An.Z)(e,o));if(c<1)m=0;else{1===e.getMonth()&&e.getDate()>27&&e.setDate(30),e.setMonth(e.getMonth()-a*c);var D=G(e,o)===-a;(0,vn.Z)((0,f.Z)(t))&&1===c&&1===G(t,o)&&(D=!1),m=a*(c-Number(D))}return 0===m?0:m}(O,F),N<12){var Gn=Math.round(g/43200);return m.formatDistance("xMonths",Gn,d)}var Zn=N%12,sn=Math.floor(N/12);return Zn<3?m.formatDistance("aboutXYears",sn,d):Zn<9?m.formatDistance("overXYears",sn,d):m.formatDistance("almostXYears",sn+1,d)}let dn=(()=>{class t{constructor(){this.likes=0,this.dislikes=0,this.time=B(new Date,new Date)}like(){this.likes=1,this.dislikes=0}dislike(){this.likes=0,this.dislikes=1}static#n=this.\u0275fac=function(o){return new(o||t)};static#t=this.\u0275cmp=n.Xpm({type:t,selectors:[["nz-demo-comment-basic"]],decls:15,vars:5,consts:[["nzAuthor","Han Solo",3,"nzDatetime"],["nz-comment-avatar","","nzIcon","user","nzSrc","//zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"],["nz-tooltip","","nzTitle","Like","nz-icon","","nzType","like",3,"nzTheme","click"],[1,"count","like"],["nz-tooltip","","nzTitle","Dislike","nz-icon","","nzType","dislike",3,"nzTheme","click"],[1,"count","dislike"]],template:function(o,a){1&o&&(n.TgZ(0,"nz-comment",0),n._UZ(1,"nz-avatar",1),n.TgZ(2,"nz-comment-content")(3,"p"),n._uU(4," We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently. "),n.qZA()(),n.TgZ(5,"nz-comment-action")(6,"span",2),n.NdJ("click",function(){return a.like()}),n.qZA(),n.TgZ(7,"span",3),n._uU(8),n.qZA()(),n.TgZ(9,"nz-comment-action")(10,"span",4),n.NdJ("click",function(){return a.dislike()}),n.qZA(),n.TgZ(11,"span",5),n._uU(12),n.qZA()(),n.TgZ(13,"nz-comment-action"),n._uU(14,"Reply to"),n.qZA()()),2&o&&(n.Q6J("nzDatetime",a.time),n.xp6(6),n.Q6J("nzTheme",a.likes>0?"twotone":"outline"),n.xp6(2),n.Oqu(a.likes),n.xp6(2),n.Q6J("nzTheme",a.dislikes>0?"twotone":"outline"),n.xp6(2),n.Oqu(a.dislikes))},dependencies:[en.SY,y.Ls,A,Z,T,C,h.Dz,R.w],styles:[".count[_ngcontent-%COMP%]{padding-left:8px;cursor:auto}.ant-comment-rtl[_ngcontent-%COMP%]   .count[_ngcontent-%COMP%]{padding-right:8px;padding-left:0}"]})}return t})();var mn=i(6223),Sn=i(2987);function qn(t,u){if(1&t&&(n.TgZ(0,"nz-comment",5),n._UZ(1,"nz-avatar",1),n.TgZ(2,"nz-comment-content")(3,"p"),n._uU(4),n.qZA()()()),2&t){const e=u.$implicit;n.Q6J("nzAuthor",e.author)("nzDatetime",e.displayTime),n.xp6(),n.Q6J("nzSrc",e.avatar),n.xp6(3),n.Oqu(e.content)}}function In(t,u){if(1&t&&(n.TgZ(0,"nz-list",0),n.YNc(1,qn,5,4,"ng-template",null,4,n.W1O),n.qZA()),2&t){const e=n.MAs(2),o=n.oxw();n.Q6J("nzDataSource",o.data)("nzRenderItem",e)("nzItemLayout","horizontal")}}let pn=(()=>{class t{constructor(){this.data=[],this.submitting=!1,this.user={author:"Han Solo",avatar:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"},this.inputValue=""}handleSubmit(){this.submitting=!0;const e=this.inputValue;this.inputValue="",setTimeout(()=>{this.submitting=!1,this.data=[...this.data,{...this.user,content:e,datetime:new Date,displayTime:B(new Date,new Date)}].map(o=>({...o,displayTime:B(new Date,o.datetime)}))},800)}static#n=this.\u0275fac=function(o){return new(o||t)};static#t=this.\u0275cmp=n.Xpm({type:t,selectors:[["nz-demo-comment-editor"]],decls:9,vars:5,consts:[[3,"nzDataSource","nzRenderItem","nzItemLayout"],["nz-comment-avatar","","nzIcon","user",3,"nzSrc"],["nz-input","","rows","4",3,"ngModel","ngModelChange"],["nz-button","","nzType","primary",3,"nzLoading","disabled","click"],["item",""],[3,"nzAuthor","nzDatetime"]],template:function(o,a){1&o&&(n.YNc(0,In,3,3,"nz-list",0),n.TgZ(1,"nz-comment"),n._UZ(2,"nz-avatar",1),n.TgZ(3,"nz-comment-content")(4,"nz-form-item")(5,"textarea",2),n.NdJ("ngModelChange",function(m){return a.inputValue=m}),n.qZA()(),n.TgZ(6,"nz-form-item")(7,"button",3),n.NdJ("click",function(){return a.handleSubmit()}),n._uU(8," Add Comment "),n.qZA()()()()),2&o&&(n.um2(0,a.data.length?0:-1),n.xp6(2),n.Q6J("nzSrc",a.user.avatar),n.xp6(3),n.Q6J("ngModel",a.inputValue),n.xp6(2),n.Q6J("nzLoading",a.submitting)("disabled",!a.inputValue))},dependencies:[mn.Fj,mn.JJ,mn.On,b.SK,A,Z,T,I.n_,s.Nx,h.Dz,r.ix,R.w,Sn.dQ,l.Zp],encapsulation:2})}return t})();var zn=i(8584);function bn(t,u){if(1&t&&(n.TgZ(0,"nz-comment",2),n._UZ(1,"nz-avatar",3),n.TgZ(2,"nz-comment-content")(3,"p"),n._uU(4),n.qZA()(),n.TgZ(5,"nz-comment-action"),n._uU(6,"Reply to"),n.qZA()()),2&t){const e=u.$implicit;n.Q6J("nzAuthor",e.author)("nzDatetime",e.datetime),n.xp6(),n.Q6J("nzSrc",e.avatar),n.xp6(3),n.Oqu(e.content)}}let gn=(()=>{class t{constructor(){this.data=[{author:"Han Solo",avatar:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",content:"We supply a series of design principles, practical patterns and high quality design resources(Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",datetime:B(new Date,(0,zn.Z)(new Date,1))},{author:"Han Solo",avatar:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",content:"We supply a series of design principles, practical patterns and high quality design resources(Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",datetime:B(new Date,(0,zn.Z)(new Date,2))}]}static#n=this.\u0275fac=function(o){return new(o||t)};static#t=this.\u0275cmp=n.Xpm({type:t,selectors:[["nz-demo-comment-list"]],decls:3,vars:3,consts:[[3,"nzDataSource","nzRenderItem","nzItemLayout"],["item",""],[3,"nzAuthor","nzDatetime"],["nz-comment-avatar","","nzIcon","user",3,"nzSrc"]],template:function(o,a){if(1&o&&(n.TgZ(0,"nz-list",0),n.YNc(1,bn,7,4,"ng-template",null,1,n.W1O),n.qZA()),2&o){const c=n.MAs(2);n.Q6J("nzDataSource",a.data)("nzRenderItem",c)("nzItemLayout","horizontal")}},dependencies:[A,Z,T,C,I.n_,h.Dz],encapsulation:2})}return t})();var Bn=i(6814);function Fn(t,u){}const hn=t=>({comment:t});function On(t,u){if(1&t&&n.YNc(0,Fn,0,0,"ng-template",1),2&t){const e=u.$implicit;n.oxw(3);const o=n.MAs(1);n.Q6J("ngTemplateOutlet",o)("ngTemplateOutletContext",n.VKq(2,hn,e))}}function Hn(t,u){if(1&t&&n.SjG(0,On,1,4,null,1,n.x6l),2&t){const e=n.oxw().comment;n.wJu(e.children)}}function En(t,u){if(1&t&&(n.TgZ(0,"nz-comment",2),n._UZ(1,"nz-avatar",3),n.TgZ(2,"nz-comment-content")(3,"p"),n._uU(4),n.qZA()(),n.TgZ(5,"nz-comment-action"),n._uU(6,"Reply to"),n.qZA(),n.YNc(7,Hn,2,0),n.qZA()),2&t){const e=u.comment;n.Q6J("nzAuthor",e.author),n.xp6(),n.Q6J("nzSrc",e.avatar),n.xp6(3),n.Oqu(e.content),n.xp6(3),n.um2(7,e.children&&e.children.length?7:-1)}}function kn(t,u){}let fn=(()=>{class t{constructor(){this.data={author:"Han Solo",avatar:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",content:"We supply a series of design principles, practical patterns and high quality design resources(Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",children:[{author:"Han Solo",avatar:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",content:"We supply a series of design principles, practical patterns and high quality design resources(Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",children:[{author:"Han Solo",avatar:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",content:"We supply a series of design principles, practical patterns and high quality design resources(Sketch and Axure), to help people create their product prototypes beautifully and efficiently."},{author:"Han Solo",avatar:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",content:"We supply a series of design principles, practical patterns and high quality design resources(Sketch and Axure), to help people create their product prototypes beautifully and efficiently."}]}]}}static#n=this.\u0275fac=function(o){return new(o||t)};static#t=this.\u0275cmp=n.Xpm({type:t,selectors:[["nz-demo-comment-nested"]],decls:3,vars:4,consts:[["commentTemplateRef",""],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"nzAuthor"],["nz-comment-avatar","","nzIcon","user",3,"nzSrc"]],template:function(o,a){if(1&o&&n.YNc(0,En,8,4,"ng-template",null,0,n.W1O)(2,kn,0,0,"ng-template",1),2&o){const c=n.MAs(1);n.xp6(2),n.Q6J("ngTemplateOutlet",c)("ngTemplateOutletContext",n.VKq(2,hn,a.data))}},dependencies:[Bn.tP,A,Z,T,C,h.Dz],encapsulation:2})}return t})(),Mn=(()=>{class t{constructor(){this.expanded=!1}goLink(e){window&&(window.location.hash=e)}expandAllCode(){this.expanded=!this.expanded,this.codeBoxes.forEach(e=>{e.nzExpanded=this.expanded,e.expandCode(this.expanded),e.check()})}static#n=this.\u0275fac=function(o){return new(o||t)};static#t=this.\u0275cmp=n.Xpm({type:t,selectors:[["nz-demo-comment"]],viewQuery:function(o,a){if(1&o&&n.Gf(z.G,5),2&o){let c;n.iGM(c=n.CRH())&&(a.codeBoxes=c)}},decls:153,vars:20,consts:[[1,"toc-affix",3,"nzOffsetTop"],["nzShowInkInFixed","",3,"nzAffix","nzClick"],["nzHref","#components-comment-demo-basic","nzTitle","\u57fa\u672c\u8bc4\u8bba"],["nzHref","#components-comment-demo-list","nzTitle","\u914d\u5408\u5217\u8868\u7ec4\u4ef6"],["nzHref","#components-comment-demo-nested","nzTitle","\u5d4c\u5957\u8bc4\u8bba"],["nzHref","#components-comment-demo-editor","nzTitle","\u56de\u590d\u6846"],["nzHref","#api","nzTitle","API"],[1,"markdown"],[1,"subtitle"],[1,"widget"],["aria-label","Edit this page on Github","href","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/comment/doc/index.zh-CN.md","target","_blank","rel","noopener noreferrer",1,"edit-button"],["nz-icon","","nzType","edit"],["id","\u4f55\u65f6\u4f7f\u7528"],["onclick","window.location.hash = '\u4f55\u65f6\u4f7f\u7528'",1,"anchor"],[1,"language-ts"],[1,"token","keyword"],[1,"token","punctuation"],[1,"token","string"],["nz-icon","","nzType","appstore","nz-tooltip","","nzTooltipTitle","\u5c55\u5f00\u5168\u90e8\u4ee3\u7801",1,"code-box-expand-trigger",3,"click"],["nz-row","",3,"nzGutter"],["nz-col","",3,"nzSpan"],["nzTitle","\u57fa\u672c\u8bc4\u8bba","nzSelector","nz-demo-comment-basic","nzGenerateCommand","ng g ng-zorro-antd:comment-basic <name>","nzComponentName","NzDemoCommentBasicComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["demo",""],["intro",""],["nzTitle","\u914d\u5408\u5217\u8868\u7ec4\u4ef6","nzSelector","nz-demo-comment-list","nzGenerateCommand","ng g ng-zorro-antd:comment-list <name>","nzComponentName","NzDemoCommentListComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","\u5d4c\u5957\u8bc4\u8bba","nzSelector","nz-demo-comment-nested","nzGenerateCommand","ng g ng-zorro-antd:comment-nested <name>","nzComponentName","NzDemoCommentNestedComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","\u56de\u590d\u6846","nzSelector","nz-demo-comment-editor","nzGenerateCommand","ng g ng-zorro-antd:comment-editor <name>","nzComponentName","NzDemoCommentEditorComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],[1,"markdown","api-container"],["id","api"],["onclick","window.location.hash = 'api'",1,"anchor"],["id","nz-comment:standalone"],[1,"api-type-label","component"],[1,"api-type-label","standalone"],["onclick","window.location.hash = 'nz-comment:standalone'",1,"anchor"],["id","[nz-comment-avatar]:standalone"],[1,"api-type-label","directive"],["onclick","window.location.hash = '[nz-comment-avatar]:standalone'",1,"anchor"],["id","nz-comment-content:standalone"],["onclick","window.location.hash = 'nz-comment-content:standalone'",1,"anchor"],["id","nz-comment-action:standalone"],["onclick","window.location.hash = 'nz-comment-action:standalone'",1,"anchor"]],template:function(o,a){1&o&&(n.TgZ(0,"article")(1,"nz-affix",0)(2,"nz-anchor",1),n.NdJ("nzClick",function(m){return a.goLink(m)}),n._UZ(3,"nz-link",2)(4,"nz-link",3)(5,"nz-link",4)(6,"nz-link",5)(7,"nz-link",6),n.qZA()(),n.TgZ(8,"section",7)(9,"h1"),n._uU(10,"Comment"),n.TgZ(11,"span",8),n._uU(12,"\u8bc4\u8bba"),n.qZA(),n._UZ(13,"span",9),n.TgZ(14,"a",10),n._UZ(15,"span",11),n.qZA()(),n.TgZ(16,"section",7),n.IAx(),n.TgZ(17,"p"),n._uU(18,"\u5bf9\u7f51\u7ad9\u5185\u5bb9\u7684\u53cd\u9988\u3001\u8bc4\u4ef7\u548c\u8ba8\u8bba\u3002"),n.qZA(),n.TgZ(19,"h2",12)(20,"span"),n._uU(21,"\u4f55\u65f6\u4f7f\u7528"),n.qZA(),n.TgZ(22,"a",13),n._uU(23,"#"),n.qZA()(),n.TgZ(24,"p"),n._uU(25,"\u8bc4\u8bba\u7ec4\u4ef6\u53ef\u7528\u4e8e\u5bf9\u4e8b\u7269\u7684\u8ba8\u8bba\uff0c\u4f8b\u5982\u9875\u9762\u3001\u535a\u5ba2\u6587\u7ae0\u3001\u95ee\u9898\u7b49\u7b49\u3002"),n.qZA(),n.TgZ(26,"pre",14)(27,"code")(28,"span",15),n._uU(29,"import"),n.qZA(),n._uU(30," "),n.TgZ(31,"span",16),n._uU(32,"{"),n.qZA(),n._uU(33," NzCommentModule "),n.TgZ(34,"span",16),n._uU(35,"}"),n.qZA(),n._uU(36," "),n.TgZ(37,"span",15),n._uU(38,"from"),n.qZA(),n._uU(39," "),n.TgZ(40,"span",17),n._uU(41,"'ng-zorro-antd/comment'"),n.qZA(),n.TgZ(42,"span",16),n._uU(43,";"),n.qZA()()(),n.fQ9(),n.qZA(),n.TgZ(44,"h2")(45,"span"),n._uU(46,"\u4ee3\u7801\u6f14\u793a"),n.qZA(),n.TgZ(47,"span",18),n.NdJ("click",function(){return a.expandAllCode()}),n.qZA()()(),n.TgZ(48,"div",19)(49,"div",20)(50,"nz-code-box",21),n._UZ(51,"nz-demo-comment-basic",22),n.TgZ(52,"div",23),n.IAx(),n.TgZ(53,"p"),n._uU(54,"\u4e00\u4e2a\u57fa\u672c\u7684\u8bc4\u8bba\u7ec4\u4ef6\uff0c\u5e26\u6709\u4f5c\u8005\u3001\u5934\u50cf\u3001\u65f6\u95f4\u548c\u64cd\u4f5c\u3002"),n.qZA(),n.fQ9(),n.qZA()(),n.TgZ(55,"nz-code-box",24),n._UZ(56,"nz-demo-comment-list",22),n.TgZ(57,"div",23),n.IAx(),n.TgZ(58,"p"),n._uU(59,"\u914d\u5408 "),n.TgZ(60,"code"),n._uU(61,"nz-list"),n.qZA(),n._uU(62," \u7ec4\u4ef6\u5c55\u73b0\u8bc4\u8bba\u5217\u8868\u3002"),n.qZA(),n.fQ9(),n.qZA()(),n.TgZ(63,"nz-code-box",25),n._UZ(64,"nz-demo-comment-nested",22),n.TgZ(65,"div",23),n.IAx(),n.TgZ(66,"p"),n._uU(67,"\u8bc4\u8bba\u53ef\u4ee5\u5d4c\u5957\u3002"),n.qZA(),n.fQ9(),n.qZA()(),n.TgZ(68,"nz-code-box",26),n._UZ(69,"nz-demo-comment-editor",22),n.TgZ(70,"div",23),n.IAx(),n.TgZ(71,"p"),n._uU(72,"\u8bc4\u8bba\u7f16\u8f91\u5668\u7ec4\u4ef6\u63d0\u4f9b\u4e86\u76f8\u540c\u6837\u5f0f\u7684\u5c01\u88c5\u4ee5\u652f\u6301\u81ea\u5b9a\u4e49\u8bc4\u8bba\u7f16\u8f91\u5668\u3002"),n.qZA(),n.fQ9(),n.qZA()()()(),n.TgZ(73,"section",27),n.IAx(),n.TgZ(74,"h2",28)(75,"span"),n._uU(76,"API"),n.qZA(),n.TgZ(77,"a",29),n._uU(78,"#"),n.qZA()(),n.TgZ(79,"h3",30)(80,"span"),n._uU(81,"nz-comment"),n.qZA(),n.TgZ(82,"label",31),n._uU(83,"component"),n.qZA(),n.TgZ(84,"label",32),n._uU(85,"standalone"),n.qZA(),n.TgZ(86,"a",33),n._uU(87,"#"),n.qZA()(),n.TgZ(88,"table")(89,"thead")(90,"tr")(91,"th"),n._uU(92,"Property"),n.qZA(),n.TgZ(93,"th"),n._uU(94,"Description"),n.qZA(),n.TgZ(95,"th"),n._uU(96,"Type"),n.qZA(),n.TgZ(97,"th"),n._uU(98,"Default"),n.qZA()()(),n.TgZ(99,"tbody")(100,"tr")(101,"td"),n._uU(102,"[nzAuthor]"),n.qZA(),n.TgZ(103,"td"),n._uU(104,"\u663e\u793a\u8bc4\u8bba\u7684\u4f5c\u8005"),n.qZA(),n.TgZ(105,"td")(106,"code"),n._uU(107,"string | TemplateRef<void>"),n.qZA()(),n.TgZ(108,"td"),n._uU(109,"-"),n.qZA()(),n.TgZ(110,"tr")(111,"td"),n._uU(112,"[nzDatetime]"),n.qZA(),n.TgZ(113,"td"),n._uU(114,"\u5c55\u793a\u65f6\u95f4\u63cf\u8ff0"),n.qZA(),n.TgZ(115,"td")(116,"code"),n._uU(117,"string | TemplateRef<void>"),n.qZA()(),n.TgZ(118,"td"),n._uU(119,"-"),n.qZA()()()(),n.TgZ(120,"h3",34)(121,"span"),n._uU(122,"[nz-comment-avatar]"),n.qZA(),n.TgZ(123,"label",35),n._uU(124,"directive"),n.qZA(),n.TgZ(125,"label",32),n._uU(126,"standalone"),n.qZA(),n.TgZ(127,"a",36),n._uU(128,"#"),n.qZA()(),n.TgZ(129,"p"),n._uU(130,"\u8981\u663e\u793a\u4e3a\u8bc4\u8bba\u5934\u50cf\u7684\u5143\u7d20\u3002"),n.qZA(),n.TgZ(131,"h3",37)(132,"span"),n._uU(133,"nz-comment-content"),n.qZA(),n.TgZ(134,"label",31),n._uU(135,"component"),n.qZA(),n.TgZ(136,"label",32),n._uU(137,"standalone"),n.qZA(),n.TgZ(138,"a",38),n._uU(139,"#"),n.qZA()(),n.TgZ(140,"p"),n._uU(141,"\u8bc4\u8bba\u7684\u4e3b\u8981\u5185\u5bb9\u3002"),n.qZA(),n.TgZ(142,"h3",39)(143,"span"),n._uU(144,"nz-comment-action"),n.qZA(),n.TgZ(145,"label",31),n._uU(146,"component"),n.qZA(),n.TgZ(147,"label",32),n._uU(148,"standalone"),n.qZA(),n.TgZ(149,"a",40),n._uU(150,"#"),n.qZA()(),n.TgZ(151,"p"),n._uU(152,"\u5728\u8bc4\u8bba\u5185\u5bb9\u4e0b\u9762\u5448\u73b0\u7684\u64cd\u4f5c\u9879\u3002"),n.qZA(),n.fQ9(),n.qZA()()),2&o&&(n.xp6(),n.Q6J("nzOffsetTop",16),n.xp6(),n.Q6J("nzAffix",!1),n.xp6(46),n.Q6J("nzGutter",8),n.xp6(),n.Q6J("nzSpan",24),n.xp6(),n.Q6J("nzId","components-comment-demo-basic")("nzLink","components-comment-demo-basic")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/comment/demo/basic.md"),n.xp6(5),n.Q6J("nzId","components-comment-demo-list")("nzLink","components-comment-demo-list")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/comment/demo/list.md"),n.xp6(8),n.Q6J("nzId","components-comment-demo-nested")("nzLink","components-comment-demo-nested")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/comment/demo/nested.md"),n.xp6(5),n.Q6J("nzId","components-comment-demo-editor")("nzLink","components-comment-demo-editor")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/comment/demo/editor.md"))},dependencies:[z.G,v.IT,v.Fp,_.$,b.t3,b.SK,en.SY,y.Ls,R.w,dn,pn,gn,fn],encapsulation:2})}return t})(),wn=(()=>{class t{constructor(){this.expanded=!1}goLink(e){window&&(window.location.hash=e)}expandAllCode(){this.expanded=!this.expanded,this.codeBoxes.forEach(e=>{e.nzExpanded=this.expanded,e.expandCode(this.expanded),e.check()})}static#n=this.\u0275fac=function(o){return new(o||t)};static#t=this.\u0275cmp=n.Xpm({type:t,selectors:[["nz-demo-comment"]],viewQuery:function(o,a){if(1&o&&n.Gf(z.G,5),2&o){let c;n.iGM(c=n.CRH())&&(a.codeBoxes=c)}},decls:152,vars:20,consts:[[1,"toc-affix",3,"nzOffsetTop"],["nzShowInkInFixed","",3,"nzAffix","nzClick"],["nzHref","#components-comment-demo-basic","nzTitle","Basic comment"],["nzHref","#components-comment-demo-list","nzTitle","Usage with list"],["nzHref","#components-comment-demo-nested","nzTitle","Nested comments"],["nzHref","#components-comment-demo-editor","nzTitle","Reply Editor"],["nzHref","#api","nzTitle","API"],[1,"markdown"],[1,"subtitle"],[1,"widget"],["aria-label","Edit this page on Github","href","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/comment/doc/index.en-US.md","target","_blank","rel","noopener noreferrer",1,"edit-button"],["nz-icon","","nzType","edit"],["id","when-to-use"],["onclick","window.location.hash = 'when-to-use'",1,"anchor"],[1,"language-ts"],[1,"token","keyword"],[1,"token","punctuation"],[1,"token","string"],["nz-icon","","nzType","appstore","nz-tooltip","","nzTooltipTitle","Expand All Code",1,"code-box-expand-trigger",3,"click"],["nz-row","",3,"nzGutter"],["nz-col","",3,"nzSpan"],["nzTitle","Basic comment","nzSelector","nz-demo-comment-basic","nzGenerateCommand","ng g ng-zorro-antd:comment-basic <name>","nzComponentName","NzDemoCommentBasicComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["demo",""],["intro",""],["nzTitle","Usage with list","nzSelector","nz-demo-comment-list","nzGenerateCommand","ng g ng-zorro-antd:comment-list <name>","nzComponentName","NzDemoCommentListComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","Nested comments","nzSelector","nz-demo-comment-nested","nzGenerateCommand","ng g ng-zorro-antd:comment-nested <name>","nzComponentName","NzDemoCommentNestedComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","Reply Editor","nzSelector","nz-demo-comment-editor","nzGenerateCommand","ng g ng-zorro-antd:comment-editor <name>","nzComponentName","NzDemoCommentEditorComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],[1,"markdown","api-container"],["id","api"],["onclick","window.location.hash = 'api'",1,"anchor"],["id","nz-comment:standalone"],[1,"api-type-label","component"],[1,"api-type-label","standalone"],["onclick","window.location.hash = 'nz-comment:standalone'",1,"anchor"],["id","[nz-comment-avatar]:standalone"],[1,"api-type-label","directive"],["onclick","window.location.hash = '[nz-comment-avatar]:standalone'",1,"anchor"],["id","nz-comment-content:standalone"],["onclick","window.location.hash = 'nz-comment-content:standalone'",1,"anchor"],["id","nz-comment-action:standalone"],["onclick","window.location.hash = 'nz-comment-action:standalone'",1,"anchor"]],template:function(o,a){1&o&&(n.TgZ(0,"article")(1,"nz-affix",0)(2,"nz-anchor",1),n.NdJ("nzClick",function(m){return a.goLink(m)}),n._UZ(3,"nz-link",2)(4,"nz-link",3)(5,"nz-link",4)(6,"nz-link",5)(7,"nz-link",6),n.qZA()(),n.TgZ(8,"section",7)(9,"h1"),n._uU(10,"Comment"),n._UZ(11,"span",8)(12,"span",9),n.TgZ(13,"a",10),n._UZ(14,"span",11),n.qZA()(),n.TgZ(15,"section",7),n.IAx(),n.TgZ(16,"p"),n._uU(17,"A comment displays user feedback and discussion to website content."),n.qZA(),n.TgZ(18,"h2",12)(19,"span"),n._uU(20,"When To Use"),n.qZA(),n.TgZ(21,"a",13),n._uU(22,"#"),n.qZA()(),n.TgZ(23,"p"),n._uU(24,"Comments can be used to enable discussions on an entity such as a page, blog post, issue or other."),n.qZA(),n.TgZ(25,"pre",14)(26,"code")(27,"span",15),n._uU(28,"import"),n.qZA(),n._uU(29," "),n.TgZ(30,"span",16),n._uU(31,"{"),n.qZA(),n._uU(32," NzCommentModule "),n.TgZ(33,"span",16),n._uU(34,"}"),n.qZA(),n._uU(35," "),n.TgZ(36,"span",15),n._uU(37,"from"),n.qZA(),n._uU(38," "),n.TgZ(39,"span",17),n._uU(40,"'ng-zorro-antd/comment'"),n.qZA(),n.TgZ(41,"span",16),n._uU(42,";"),n.qZA()()(),n.fQ9(),n.qZA(),n.TgZ(43,"h2")(44,"span"),n._uU(45,"Examples"),n.qZA(),n.TgZ(46,"span",18),n.NdJ("click",function(){return a.expandAllCode()}),n.qZA()()(),n.TgZ(47,"div",19)(48,"div",20)(49,"nz-code-box",21),n._UZ(50,"nz-demo-comment-basic",22),n.TgZ(51,"div",23),n.IAx(),n.TgZ(52,"p"),n._uU(53,"A basic comment with author, avatar, time and actions."),n.qZA(),n.fQ9(),n.qZA()(),n.TgZ(54,"nz-code-box",24),n._UZ(55,"nz-demo-comment-list",22),n.TgZ(56,"div",23),n.IAx(),n.TgZ(57,"p"),n._uU(58,"Displaying a series of comments using the "),n.TgZ(59,"code"),n._uU(60,"nz-list"),n.qZA(),n._uU(61," Component."),n.qZA(),n.fQ9(),n.qZA()(),n.TgZ(62,"nz-code-box",25),n._UZ(63,"nz-demo-comment-nested",22),n.TgZ(64,"div",23),n.IAx(),n.TgZ(65,"p"),n._uU(66,"Comments can be nested."),n.qZA(),n.fQ9(),n.qZA()(),n.TgZ(67,"nz-code-box",26),n._UZ(68,"nz-demo-comment-editor",22),n.TgZ(69,"div",23),n.IAx(),n.TgZ(70,"p"),n._uU(71,"Comment can be used as editor, user can customize the editor component."),n.qZA(),n.fQ9(),n.qZA()()()(),n.TgZ(72,"section",27),n.IAx(),n.TgZ(73,"h2",28)(74,"span"),n._uU(75,"API"),n.qZA(),n.TgZ(76,"a",29),n._uU(77,"#"),n.qZA()(),n.TgZ(78,"h3",30)(79,"span"),n._uU(80,"nz-comment"),n.qZA(),n.TgZ(81,"label",31),n._uU(82,"component"),n.qZA(),n.TgZ(83,"label",32),n._uU(84,"standalone"),n.qZA(),n.TgZ(85,"a",33),n._uU(86,"#"),n.qZA()(),n.TgZ(87,"table")(88,"thead")(89,"tr")(90,"th"),n._uU(91,"Property"),n.qZA(),n.TgZ(92,"th"),n._uU(93,"Description"),n.qZA(),n.TgZ(94,"th"),n._uU(95,"Type"),n.qZA(),n.TgZ(96,"th"),n._uU(97,"Default"),n.qZA()()(),n.TgZ(98,"tbody")(99,"tr")(100,"td"),n._uU(101,"[nzAuthor]"),n.qZA(),n.TgZ(102,"td"),n._uU(103,"The element to display as the comment author"),n.qZA(),n.TgZ(104,"td")(105,"code"),n._uU(106,"string | TemplateRef<void>"),n.qZA()(),n.TgZ(107,"td"),n._uU(108,"-"),n.qZA()(),n.TgZ(109,"tr")(110,"td"),n._uU(111,"[nzDatetime]"),n.qZA(),n.TgZ(112,"td"),n._uU(113,"A datetime element containing the time to be displayed"),n.qZA(),n.TgZ(114,"td")(115,"code"),n._uU(116,"string | TemplateRef<void>"),n.qZA()(),n.TgZ(117,"td"),n._uU(118,"-"),n.qZA()()()(),n.TgZ(119,"h3",34)(120,"span"),n._uU(121,"[nz-comment-avatar]"),n.qZA(),n.TgZ(122,"label",35),n._uU(123,"directive"),n.qZA(),n.TgZ(124,"label",32),n._uU(125,"standalone"),n.qZA(),n.TgZ(126,"a",36),n._uU(127,"#"),n.qZA()(),n.TgZ(128,"p"),n._uU(129,"The element to display as the comment avatar."),n.qZA(),n.TgZ(130,"h3",37)(131,"span"),n._uU(132,"nz-comment-content"),n.qZA(),n.TgZ(133,"label",31),n._uU(134,"component"),n.qZA(),n.TgZ(135,"label",32),n._uU(136,"standalone"),n.qZA(),n.TgZ(137,"a",38),n._uU(138,"#"),n.qZA()(),n.TgZ(139,"p"),n._uU(140,"The main content of the comment."),n.qZA(),n.TgZ(141,"h3",39)(142,"span"),n._uU(143,"nz-comment-action"),n.qZA(),n.TgZ(144,"label",31),n._uU(145,"component"),n.qZA(),n.TgZ(146,"label",32),n._uU(147,"standalone"),n.qZA(),n.TgZ(148,"a",40),n._uU(149,"#"),n.qZA()(),n.TgZ(150,"p"),n._uU(151,"The element items rendered below the comment content."),n.qZA(),n.fQ9(),n.qZA()()),2&o&&(n.xp6(),n.Q6J("nzOffsetTop",16),n.xp6(),n.Q6J("nzAffix",!1),n.xp6(45),n.Q6J("nzGutter",8),n.xp6(),n.Q6J("nzSpan",24),n.xp6(),n.Q6J("nzId","components-comment-demo-basic")("nzLink","components-comment-demo-basic")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/comment/demo/basic.md"),n.xp6(5),n.Q6J("nzId","components-comment-demo-list")("nzLink","components-comment-demo-list")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/comment/demo/list.md"),n.xp6(8),n.Q6J("nzId","components-comment-demo-nested")("nzLink","components-comment-demo-nested")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/comment/demo/nested.md"),n.xp6(5),n.Q6J("nzId","components-comment-demo-editor")("nzLink","components-comment-demo-editor")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/comment/demo/editor.md"))},dependencies:[z.G,v.IT,v.Fp,_.$,b.t3,b.SK,en.SY,y.Ls,R.w,dn,pn,gn,fn],encapsulation:2})}return t})(),Qn=(()=>{class t{static#n=this.\u0275fac=function(o){return new(o||t)};static#t=this.\u0275mod=n.oAB({type:t});static#e=this.\u0275inj=n.cJS({imports:[E.G,p,x.Bz.forChild([{path:"en",component:wn},{path:"zh",component:Mn}])]})}return t})()},5589:(Tn,H,i)=>{i.d(H,{W:()=>y,j:()=>I});var x=i(7582),E=i(6814),n=i(9212),k=i(8645),j=i(5619),X=i(7328),M=i(4825),Y=i(7921),$=i(3997),V=i(4664),P=i(9360),W=i(2420),w=i(8251),K=i(4829),S=i(9773),Q=i(2196),q=i(6700),tn=i(9388);function Z(s,h){1&s&&(n.TgZ(0,"span",3),n._UZ(1,"i",4)(2,"i",4)(3,"i",4)(4,"i",4),n.qZA())}function T(s,h){}function L(s,h){if(1&s&&(n.TgZ(0,"div",8),n._uU(1),n.qZA()),2&s){const r=n.oxw(2);n.xp6(),n.Oqu(r.nzTip)}}function C(s,h){if(1&s&&(n.TgZ(0,"div")(1,"div",5),n.YNc(2,T,0,0,"ng-template",6)(3,L,2,1,"div",7),n.qZA()()),2&s){const r=n.oxw(),l=n.MAs(1);n.xp6(),n.ekj("ant-spin-rtl","rtl"===r.dir)("ant-spin-spinning",r.isLoading)("ant-spin-lg","large"===r.nzSize)("ant-spin-sm","small"===r.nzSize)("ant-spin-show-text",r.nzTip),n.xp6(),n.Q6J("ngTemplateOutlet",r.nzIndicator||l),n.xp6(),n.Q6J("ngIf",r.nzTip)}}function A(s,h){if(1&s&&(n.TgZ(0,"div",9),n.Hsn(1),n.qZA()),2&s){const r=n.oxw();n.ekj("ant-spin-blur",r.isLoading)}}const cn=["*"],J="spin";let y=(()=>{class s{constructor(r,l,p){this.nzConfigService=r,this.cdr=l,this.directionality=p,this._nzModuleName=J,this.nzIndicator=null,this.nzSize="default",this.nzTip=null,this.nzDelay=0,this.nzSimple=!1,this.nzSpinning=!0,this.destroy$=new k.x,this.spinning$=new j.X(this.nzSpinning),this.delay$=new X.t(1),this.isLoading=!1,this.dir="ltr"}ngOnInit(){this.delay$.pipe((0,Y.O)(this.nzDelay),(0,$.x)(),(0,V.w)(l=>0===l?this.spinning$:this.spinning$.pipe(function nn(s){return(0,P.e)((h,r)=>{let l=!1,p=null,z=null;const v=()=>{if(z?.unsubscribe(),z=null,l){l=!1;const _=p;p=null,r.next(_)}};h.subscribe((0,w.x)(r,_=>{z?.unsubscribe(),l=!0,p=_,z=(0,w.x)(r,v,W.Z),(0,K.Xf)(s(_)).subscribe(z)},()=>{v(),r.complete()},void 0,()=>{p=z=null}))})}(p=>(0,M.H)(p?l:0)))),(0,S.R)(this.destroy$)).subscribe(l=>{this.isLoading=l,this.cdr.markForCheck()}),this.nzConfigService.getConfigChangeEventForComponent(J).pipe((0,S.R)(this.destroy$)).subscribe(()=>this.cdr.markForCheck()),this.directionality.change?.pipe((0,S.R)(this.destroy$)).subscribe(l=>{this.dir=l,this.cdr.detectChanges()}),this.dir=this.directionality.value}ngOnChanges(r){const{nzSpinning:l,nzDelay:p}=r;l&&this.spinning$.next(this.nzSpinning),p&&this.delay$.next(this.nzDelay)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}static#n=this.\u0275fac=function(l){return new(l||s)(n.Y36(Q.jY),n.Y36(n.sBO),n.Y36(tn.Is,8))};static#t=this.\u0275cmp=n.Xpm({type:s,selectors:[["nz-spin"]],hostVars:2,hostBindings:function(l,p){2&l&&n.ekj("ant-spin-nested-loading",!p.nzSimple)},inputs:{nzIndicator:"nzIndicator",nzSize:"nzSize",nzTip:"nzTip",nzDelay:"nzDelay",nzSimple:"nzSimple",nzSpinning:"nzSpinning"},exportAs:["nzSpin"],standalone:!0,features:[n.TTD,n.jDz],ngContentSelectors:cn,decls:4,vars:2,consts:[["defaultTemplate",""],[4,"ngIf"],["class","ant-spin-container",3,"ant-spin-blur",4,"ngIf"],[1,"ant-spin-dot","ant-spin-dot-spin"],[1,"ant-spin-dot-item"],[1,"ant-spin"],[3,"ngTemplateOutlet"],["class","ant-spin-text",4,"ngIf"],[1,"ant-spin-text"],[1,"ant-spin-container"]],template:function(l,p){1&l&&(n.F$t(),n.YNc(0,Z,5,0,"ng-template",null,0,n.W1O)(2,C,4,12,"div",1)(3,A,2,2,"div",2)),2&l&&(n.xp6(2),n.Q6J("ngIf",p.isLoading),n.xp6(),n.Q6J("ngIf",!p.nzSimple))},dependencies:[E.O5,E.tP],encapsulation:2})}return(0,x.gn)([(0,Q.oS)()],s.prototype,"nzIndicator",void 0),(0,x.gn)([(0,q.Rn)()],s.prototype,"nzDelay",void 0),(0,x.gn)([(0,q.yF)()],s.prototype,"nzSimple",void 0),(0,x.gn)([(0,q.yF)()],s.prototype,"nzSpinning",void 0),s})(),I=(()=>{class s{static#n=this.\u0275fac=function(l){return new(l||s)};static#t=this.\u0275mod=n.oAB({type:s});static#e=this.\u0275inj=n.cJS({})}return s})()}}]);