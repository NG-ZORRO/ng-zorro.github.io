"use strict";(self.webpackChunkng_zorro_antd_doc=self.webpackChunkng_zorro_antd_doc||[]).push([[64],{64:(I,y,u)=>{u.r(y),u.d(y,{NzDemoFlexModule:()=>R});var i=u(4190),U=u(6242),e=u(9212);let z=(()=>{class o{constructor(){this.nzVertical=!1,this.nzJustify="normal",this.nzAlign="normal",this.nzGap=0,this.nzWrap="nowrap",this.nzFlex="unset"}get gap(){switch(this.nzGap){case"small":return"8px";case"middle":return"16px";case"large":return"24px";default:return"number"==typeof this.nzGap?`${this.nzGap}px`:this.nzGap}}static#e=this.\u0275fac=function(a){return new(a||o)};static#n=this.\u0275dir=e.lG2({type:o,selectors:[["","nz-flex",""],["nz-flex"]],hostAttrs:[1,"ant-flex"],hostVars:60,hostBindings:function(a,n){2&a&&(e.Udp("gap",n.gap)("flex",n.nzFlex),e.ekj("ant-flex-vertical",n.nzVertical)("ant-flex-justify-flex-start","flex-start"===n.nzJustify)("ant-flex-justify-center","center"===n.nzJustify)("ant-flex-justify-flex-end","flex-end"===n.nzJustify)("ant-flex-justify-space-between","space-between"===n.nzJustify)("ant-flex-justify-space-around","space-around"===n.nzJustify)("ant-flex-justify-space-evenly","space-evenly"===n.nzJustify)("ant-flex-justify-start","start"===n.nzJustify)("ant-flex-justify-end","end"===n.nzJustify)("ant-flex-justify-right","right"===n.nzJustify)("ant-flex-justify-left","left"===n.nzJustify)("ant-flex-justify-stretch","stretch"===n.nzJustify)("ant-flex-justify-normal","normal"===n.nzJustify)("ant-flex-align-flex-start","flex-start"===n.nzAlign)("ant-flex-align-center","center"===n.nzAlign)("ant-flex-align-flex-end","flex-end"===n.nzAlign)("ant-flex-align-space-between","space-between"===n.nzAlign)("ant-flex-align-space-around","space-around"===n.nzAlign)("ant-flex-align-space-evenly","space-evenly"===n.nzAlign)("ant-flex-align-start","start"===n.nzAlign)("ant-flex-align-end","end"===n.nzAlign)("ant-flex-align-right","right"===n.nzAlign)("ant-flex-align-left","left"===n.nzAlign)("ant-flex-align-stretch","stretch"===n.nzAlign)("ant-flex-align-normal","normal"===n.nzAlign)("ant-flex-wrap-wrap","wrap"===n.nzWrap)("ant-flex-wrap-wrap-reverse","wrap-reverse"===n.nzWrap)("ant-flex-wrap-nowrap","nowrap"===n.nzWrap))},inputs:{nzVertical:"nzVertical",nzJustify:"nzJustify",nzAlign:"nzAlign",nzGap:"nzGap",nzWrap:"nzWrap",nzFlex:"nzFlex"},exportAs:["nzFlex"],standalone:!0})}return o})(),F=(()=>{class o{static#e=this.\u0275fac=function(a){return new(a||o)};static#n=this.\u0275mod=e.oAB({type:o});static#t=this.\u0275inj=e.cJS({})}return o})();var A=u(9118),p=u(4119),T=u(4104),x=u(7225),w=u(6814);const E=[F,A.KW,p.sL,T.N3,x.aF,w.ez];var f=u(379),C=u(5393),D=u(8101),h=u(3185),b=u(8332),v=u(227),Z=u(1687),m=u(6223),r=u(2987);let N=(()=>{class o{constructor(){this.justifySegment=["flex-start","center","flex-end","space-between","space-around","space-evenly"],this.alignSegment=["flex-start","center","flex-end"],this.selectedJustification=0,this.selectedLAlignment=0}static#e=this.\u0275fac=function(a){return new(a||o)};static#n=this.\u0275cmp=e.Xpm({type:o,selectors:[["nz-demo-flex-align"]],decls:17,vars:6,consts:[[1,"segment-wrapper"],[3,"nzOptions","ngModel","ngModelChange"],["nz-flex","",1,"btn-wrappers",3,"nzJustify","nzAlign"],["nz-button","","nzType","primary"]],template:function(a,n){1&a&&(e.TgZ(0,"div",0)(1,"span"),e._uU(2,"Select justify:"),e.qZA(),e.TgZ(3,"nz-segmented",1),e.NdJ("ngModelChange",function(g){return n.selectedJustification=g}),e.qZA()(),e.TgZ(4,"div",0)(5,"span"),e._uU(6,"Select align:"),e.qZA(),e.TgZ(7,"nz-segmented",1),e.NdJ("ngModelChange",function(g){return n.selectedLAlignment=g}),e.qZA()(),e.TgZ(8,"div",2)(9,"button",3),e._uU(10,"Primary"),e.qZA(),e.TgZ(11,"button",3),e._uU(12,"Primary"),e.qZA(),e.TgZ(13,"button",3),e._uU(14,"Primary"),e.qZA(),e.TgZ(15,"button",3),e._uU(16,"Primary"),e.qZA()()),2&a&&(e.xp6(3),e.Q6J("nzOptions",n.justifySegment)("ngModel",n.selectedJustification),e.xp6(4),e.Q6J("nzOptions",n.alignSegment)("ngModel",n.selectedLAlignment),e.xp6(),e.Q6J("nzJustify",n.justifySegment[n.selectedJustification])("nzAlign",n.alignSegment[n.selectedLAlignment]))},dependencies:[m.JJ,m.On,z,A.wY,p.ix,Z.w,r.dQ],styles:[".segment-wrapper[_ngcontent-%COMP%]{display:flex;align-items:center;gap:1rem;margin-block-end:1rem}.btn-wrappers[_ngcontent-%COMP%]{block-size:10rem;border:1px solid var(--ant-primary-6)}"]})}return o})(),t=(()=>{class o{constructor(){this.isVertical=!1}static#e=this.\u0275fac=function(a){return new(a||o)};static#n=this.\u0275cmp=e.Xpm({type:o,selectors:[["nz-demo-flex-basic"]],decls:10,vars:4,consts:[[3,"ngModel","ngModelChange"],["nz-radio","",3,"nzValue"],["nz-flex","",3,"nzVertical"],[1,"flex-item"],[1,"flex-item","even"]],template:function(a,n){1&a&&(e.TgZ(0,"nz-radio-group",0),e.NdJ("ngModelChange",function(g){return n.isVertical=g}),e.TgZ(1,"label",1),e._uU(2,"horizontal"),e.qZA(),e.TgZ(3,"label",1),e._uU(4,"vertical"),e.qZA()(),e.TgZ(5,"div",2),e._UZ(6,"div",3)(7,"div",4)(8,"div",3)(9,"div",4),e.qZA()),2&a&&(e.Q6J("ngModel",n.isVertical),e.xp6(),e.Q6J("nzValue",!1),e.xp6(2),e.Q6J("nzValue",!0),e.xp6(2),e.Q6J("nzVertical",n.isVertical))},dependencies:[m.JJ,m.On,z,x.Of,x.Dg],styles:["nz-radio-group[_ngcontent-%COMP%]{margin-block-end:1rem}.flex-item[_ngcontent-%COMP%]{inline-size:25%;block-size:54px;background-color:var(--ant-primary-6)}.even[_ngcontent-%COMP%]{background-color:var(--ant-primary-5)}"]})}return o})(),d=(()=>{class o{static#e=this.\u0275fac=function(a){return new(a||o)};static#n=this.\u0275cmp=e.Xpm({type:o,selectors:[["nz-demo-flex-combination"]],decls:7,vars:3,consts:[["nz-flex","",1,"combination-wrapper",3,"nzGap"],["alt","Angular","width","150","height","150","src","https://img.alicdn.com/tfs/TB1g.mWZAL0gK0jSZFtXXXQCXXa-200-200.svg"],["nz-flex","",3,"nzVertical","nzGap"]],template:function(a,n){1&a&&(e.TgZ(0,"div",0),e._UZ(1,"img",1),e.TgZ(2,"div",2)(3,"h2"),e._uU(4," Ant Design of Angular "),e.qZA(),e.TgZ(5,"h3"),e._uU(6," An enterprise-class Angular UI component library based on Ant Design, all components are open source and free to use under MIT license. "),e.qZA()()()),2&a&&(e.Q6J("nzGap",80),e.xp6(2),e.Q6J("nzVertical",!0)("nzGap","large"))},dependencies:[z],styles:[".combination-wrapper[_ngcontent-%COMP%]{inline-size:40rem;padding:2rem;border:1px solid #f0f0f0;border-radius:2px}"]})}return o})();function s(o,M){if(1&o){const l=e.EpF();e.TgZ(0,"nz-slider",8),e.NdJ("ngModelChange",function(n){e.CHM(l);const c=e.oxw();return e.KtG(c.customGapValue=n)}),e.qZA()}if(2&o){const l=e.oxw();e.Q6J("nzMin",0)("nzMax",100)("ngModel",l.customGapValue)}}let _=(()=>{class o{constructor(){this.gapSegment=["small","middle","large","custom"],this.selectedGap=0,this.customGapValue=0}static#e=this.\u0275fac=function(a){return new(a||o)};static#n=this.\u0275cmp=e.Xpm({type:o,selectors:[["nz-demo-flex-gap"]],decls:14,vars:4,consts:[[1,"segment-wrapper"],[3,"nzOptions","ngModel","ngModelChange"],[3,"nzMin","nzMax","ngModel"],["nz-flex","",3,"nzGap"],["nz-button","","nzType","primary"],["nz-button","","nzType","dashed"],["nz-button","","nzType","default"],["nz-button","","nzType","link"],[3,"nzMin","nzMax","ngModel","ngModelChange"]],template:function(a,n){1&a&&(e.TgZ(0,"div",0)(1,"span"),e._uU(2,"Select gap:"),e.qZA(),e.TgZ(3,"nz-segmented",1),e.NdJ("ngModelChange",function(g){return n.selectedGap=g}),e.qZA()(),e.YNc(4,s,1,3,"nz-slider",2),e.TgZ(5,"div",3)(6,"button",4),e._uU(7,"Primary"),e.qZA(),e.TgZ(8,"button",5),e._uU(9,"Dashed"),e.qZA(),e.TgZ(10,"button",6),e._uU(11,"Default"),e.qZA(),e.TgZ(12,"button",7),e._uU(13,"Link"),e.qZA()()),2&a&&(e.xp6(3),e.Q6J("nzOptions",n.gapSegment)("ngModel",n.selectedGap),e.xp6(),e.um2(4,"custom"===n.gapSegment[n.selectedGap]?4:-1),e.xp6(),e.Q6J("nzGap",0===n.selectedGap?"small":1===n.selectedGap?"middle":2===n.selectedGap?"large":n.customGapValue))},dependencies:[m.JJ,m.On,z,A.wY,p.ix,Z.w,r.dQ,T.jS],styles:[".segment-wrapper[_ngcontent-%COMP%]{display:flex;align-items:center;gap:1rem;margin-block-end:1rem}"]})}return o})();function S(o,M){if(1&o&&(e.TgZ(0,"button",3),e._uU(1),e.qZA()),2&o){const l=M.$implicit;e.xp6(),e.hij("Button ",l,"")}}let q=(()=>{class o{constructor(){this.wrapSegment=["wrap","wrap-reverse","nowrap"],this.selectedWrap=0,this.array=Array.from({length:20},(l,a)=>a+1)}static#e=this.\u0275fac=function(a){return new(a||o)};static#n=this.\u0275cmp=e.Xpm({type:o,selectors:[["nz-demo-flex-wrap"]],decls:7,vars:4,consts:[[1,"segment-wrapper"],[3,"nzOptions","ngModel","ngModelChange"],["nz-flex","",1,"btn-wrapper",3,"nzGap","nzWrap"],["nz-button","","nzType","primary",2,"width","100px"],["style","width: 100px","nz-button","","nzType","primary"]],template:function(a,n){1&a&&(e.TgZ(0,"div",0)(1,"span"),e._uU(2,"Select wrap:"),e.qZA(),e.TgZ(3,"nz-segmented",1),e.NdJ("ngModelChange",function(g){return n.selectedWrap=g}),e.qZA()(),e.TgZ(4,"div",2),e.SjG(5,S,2,1,"button",4,e.x6l),e.qZA()),2&a&&(e.xp6(3),e.Q6J("nzOptions",n.wrapSegment)("ngModel",n.selectedWrap),e.xp6(),e.Q6J("nzGap","middle")("nzWrap",n.wrapSegment[n.selectedWrap]),e.xp6(),e.wJu(n.array))},dependencies:[m.JJ,m.On,z,A.wY,p.ix,Z.w,r.dQ],styles:[".segment-wrapper[_ngcontent-%COMP%]{display:flex;align-items:center;gap:1rem;margin-block-end:1rem}.btn-wrapper[_ngcontent-%COMP%]{overflow:auto;padding-block:10px}"]})}return o})(),k=(()=>{class o{constructor(){this.expanded=!1}goLink(l){window&&(window.location.hash=l)}expandAllCode(){this.expanded=!this.expanded,this.codeBoxes.forEach(l=>{l.nzExpanded=this.expanded,l.expandCode(this.expanded),l.check()})}static#e=this.\u0275fac=function(a){return new(a||o)};static#n=this.\u0275cmp=e.Xpm({type:o,selectors:[["nz-demo-flex"]],viewQuery:function(a,n){if(1&a&&e.Gf(f.G,5),2&a){let c;e.iGM(c=e.CRH())&&(n.codeBoxes=c)}},decls:211,vars:24,consts:[[1,"toc-affix",3,"nzOffsetTop"],["nzShowInkInFixed","",3,"nzAffix","nzClick"],["nzHref","#components-flex-demo-basic","nzTitle","\u57fa\u672c\u5e03\u5c40"],["nzHref","#components-flex-demo-align","nzTitle","\u5bf9\u9f50\u65b9\u5f0f"],["nzHref","#components-flex-demo-gap","nzTitle","\u8bbe\u7f6e\u95f4\u9699"],["nzHref","#components-flex-demo-wrap","nzTitle","\u81ea\u52a8\u6362\u884c"],["nzHref","#components-flex-demo-combination","nzTitle","\u7ec4\u5408\u4f7f\u7528"],["nzHref","#api","nzTitle","API"],[1,"markdown"],[1,"subtitle"],[1,"widget"],["aria-label","Edit this page on Github","href","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/flex/doc/index.zh-CN.md","target","_blank","rel","noopener noreferrer",1,"edit-button"],["nz-icon","","nzType","edit"],["id","\u4f55\u65f6\u4f7f\u7528"],["onclick","window.location.hash = '\u4f55\u65f6\u4f7f\u7528'",1,"anchor"],["id","\u4e0e-space-\u7ec4\u4ef6\u7684\u533a\u522b"],["onclick","window.location.hash = '\u4e0e-space-\u7ec4\u4ef6\u7684\u533a\u522b'",1,"anchor"],["id","\u5f15\u5165\u6a21\u5757"],["onclick","window.location.hash = '\u5f15\u5165\u6a21\u5757'",1,"anchor"],[1,"language-ts"],[1,"token","keyword"],[1,"token","punctuation"],[1,"token","string"],["nz-icon","","nzType","appstore","nz-tooltip","","nzTooltipTitle","\u5c55\u5f00\u5168\u90e8\u4ee3\u7801",1,"code-box-expand-trigger",3,"click"],["nz-row","",3,"nzGutter"],["nz-col","",3,"nzSpan"],["nzTitle","\u57fa\u672c\u5e03\u5c40","nzSelector","nz-demo-flex-basic","nzGenerateCommand","ng g ng-zorro-antd:flex-basic <name>","nzComponentName","NzDemoFlexBasicComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["demo",""],["intro",""],["nzTitle","\u5bf9\u9f50\u65b9\u5f0f","nzSelector","nz-demo-flex-align","nzGenerateCommand","ng g ng-zorro-antd:flex-align <name>","nzComponentName","NzDemoFlexAlignComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","\u8bbe\u7f6e\u95f4\u9699","nzSelector","nz-demo-flex-gap","nzGenerateCommand","ng g ng-zorro-antd:flex-gap <name>","nzComponentName","NzDemoFlexGapComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","\u81ea\u52a8\u6362\u884c","nzSelector","nz-demo-flex-wrap","nzGenerateCommand","ng g ng-zorro-antd:flex-wrap <name>","nzComponentName","NzDemoFlexWrapComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","\u7ec4\u5408\u4f7f\u7528","nzSelector","nz-demo-flex-combination","nzGenerateCommand","ng g ng-zorro-antd:flex-combination <name>","nzComponentName","NzDemoFlexCombinationComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],[1,"markdown","api-container"],["id","api"],["onclick","window.location.hash = 'api'",1,"anchor"],["id","[nz-flex]:standalone"],[1,"api-type-label","directive"],[1,"api-type-label","standalone"],["onclick","window.location.hash = '[nz-flex]:standalone'",1,"anchor"],["href","https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content","target","_blank","rel","noopener"],["href","https://developer.mozilla.org/en-US/docs/Web/CSS/align-items","target","_blank","rel","noopener"],["href","https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap","target","_blank","rel","noopener"],["href","https://developer.mozilla.org/en-US/docs/Web/CSS/flex","target","_blank","rel","noopener"]],template:function(a,n){1&a&&(e.TgZ(0,"article")(1,"nz-affix",0)(2,"nz-anchor",1),e.NdJ("nzClick",function(g){return n.goLink(g)}),e._UZ(3,"nz-link",2)(4,"nz-link",3)(5,"nz-link",4)(6,"nz-link",5)(7,"nz-link",6)(8,"nz-link",7),e.qZA()(),e.TgZ(9,"section",8)(10,"h1"),e._uU(11,"Flex"),e.TgZ(12,"span",9),e._uU(13,"\u6805\u683c"),e.qZA(),e._UZ(14,"span",10),e.TgZ(15,"a",11),e._UZ(16,"span",12),e.qZA()(),e.TgZ(17,"section",8),e.IAx(),e.TgZ(18,"p"),e._uU(19,"\u5f39\u6027\u5e03\u5c40"),e.qZA(),e.TgZ(20,"h2",13)(21,"span"),e._uU(22,"\u4f55\u65f6\u4f7f\u7528"),e.qZA(),e.TgZ(23,"a",14),e._uU(24,"#"),e.qZA()(),e.TgZ(25,"ul")(26,"li"),e._uU(27,"\u9002\u5408\u8bbe\u7f6e\u5143\u7d20\u4e4b\u95f4\u7684\u95f4\u8ddd\u3002"),e.qZA(),e.TgZ(28,"li"),e._uU(29,"\u9002\u5408\u8bbe\u7f6e\u5404\u79cd\u6c34\u5e73\u3001\u5782\u76f4\u5bf9\u9f50\u65b9\u5f0f\u3002"),e.qZA()(),e.TgZ(30,"h3",15)(31,"span"),e._uU(32,"\u4e0e Space \u7ec4\u4ef6\u7684\u533a\u522b"),e.qZA(),e.TgZ(33,"a",16),e._uU(34,"#"),e.qZA()(),e.TgZ(35,"ul")(36,"li"),e._uU(37,"Space \u4e3a\u5185\u8054\u5143\u7d20\u63d0\u4f9b\u95f4\u8ddd\uff0c\u5176\u672c\u8eab\u4f1a\u4e3a\u6bcf\u4e00\u4e2a\u5b50\u5143\u7d20\u6dfb\u52a0\u5305\u88f9\u5143\u7d20\u7528\u4e8e\u5185\u8054\u5bf9\u9f50\u3002\u9002\u7528\u4e8e\u884c\u3001\u5217\u4e2d\u591a\u4e2a\u5b50\u5143\u7d20\u7684\u7b49\u8ddd\u6392\u5217\u3002"),e.qZA(),e.TgZ(38,"li"),e._uU(39,"Flex \u4e3a\u5757\u7ea7\u5143\u7d20\u63d0\u4f9b\u95f4\u8ddd\uff0c\u5176\u672c\u8eab\u4e0d\u4f1a\u6dfb\u52a0\u5305\u88f9\u5143\u7d20\u3002\u9002\u7528\u4e8e\u5782\u76f4\u6216\u6c34\u5e73\u65b9\u5411\u4e0a\u7684\u5b50\u5143\u7d20\u5e03\u5c40\uff0c\u5e76\u63d0\u4f9b\u4e86\u66f4\u591a\u7684\u7075\u6d3b\u6027\u548c\u63a7\u5236\u80fd\u529b\u3002"),e.qZA()(),e.TgZ(40,"h3",17)(41,"span"),e._uU(42,"\u5f15\u5165\u6a21\u5757"),e.qZA(),e.TgZ(43,"a",18),e._uU(44,"#"),e.qZA()(),e.TgZ(45,"pre",19)(46,"code")(47,"span",20),e._uU(48,"import"),e.qZA(),e._uU(49," "),e.TgZ(50,"span",21),e._uU(51,"{"),e.qZA(),e._uU(52," NzFlexModule "),e.TgZ(53,"span",21),e._uU(54,"}"),e.qZA(),e._uU(55," "),e.TgZ(56,"span",20),e._uU(57,"from"),e.qZA(),e._uU(58," "),e.TgZ(59,"span",22),e._uU(60,"'ng-zorro-antd/flex'"),e.qZA(),e.TgZ(61,"span",21),e._uU(62,";"),e.qZA()()(),e.fQ9(),e.qZA(),e.TgZ(63,"h2")(64,"span"),e._uU(65,"\u4ee3\u7801\u6f14\u793a"),e.qZA(),e.TgZ(66,"span",23),e.NdJ("click",function(){return n.expandAllCode()}),e.qZA()()(),e.TgZ(67,"div",24)(68,"div",25)(69,"nz-code-box",26),e._UZ(70,"nz-demo-flex-basic",27),e.TgZ(71,"div",28),e.IAx(),e.TgZ(72,"p"),e._uU(73,"\u6700\u7b80\u5355\u7684\u7528\u6cd5\u3002"),e.qZA(),e.fQ9(),e.qZA()(),e.TgZ(74,"nz-code-box",29),e._UZ(75,"nz-demo-flex-align",27),e.TgZ(76,"div",28),e.IAx(),e.TgZ(77,"p"),e._uU(78,"\u8bbe\u7f6e\u5bf9\u9f50\u65b9\u5f0f\u3002"),e.qZA(),e.fQ9(),e.qZA()(),e.TgZ(79,"nz-code-box",30),e._UZ(80,"nz-demo-flex-gap",27),e.TgZ(81,"div",28),e.IAx(),e.TgZ(82,"p"),e._uU(83,"\u4f7f\u7528 "),e.TgZ(84,"code"),e._uU(85,"gap"),e.qZA(),e._uU(86," \u8bbe\u7f6e\u5143\u7d20\u4e4b\u95f4\u7684\u95f4\u8ddd\uff0c\u9884\u8bbe\u4e86 "),e.TgZ(87,"code"),e._uU(88,"small"),e.qZA(),e._uU(89,"\u3001"),e.TgZ(90,"code"),e._uU(91,"middle"),e.qZA(),e._uU(92,"\u3001"),e.TgZ(93,"code"),e._uU(94,"large"),e.qZA(),e._uU(95," \u4e09\u79cd\u5c3a\u5bf8\uff0c\u4e5f\u53ef\u4ee5\u81ea\u5b9a\u4e49\u95f4\u8ddd\u3002"),e.qZA(),e.fQ9(),e.qZA()(),e.TgZ(96,"nz-code-box",31),e._UZ(97,"nz-demo-flex-wrap",27),e.TgZ(98,"div",28),e.IAx(),e.TgZ(99,"p"),e._uU(100,"\u81ea\u52a8\u6362\u884c\u3002"),e.qZA(),e.fQ9(),e.qZA()(),e.TgZ(101,"nz-code-box",32),e._UZ(102,"nz-demo-flex-combination",27),e.TgZ(103,"div",28),e.IAx(),e.TgZ(104,"p"),e._uU(105,"\u5d4c\u5957\u4f7f\u7528\uff0c\u53ef\u4ee5\u5b9e\u73b0\u66f4\u590d\u6742\u7684\u5e03\u5c40\u3002"),e.qZA(),e.fQ9(),e.qZA()()()(),e.TgZ(106,"section",33),e.IAx(),e.TgZ(107,"h2",34)(108,"span"),e._uU(109,"API"),e.qZA(),e.TgZ(110,"a",35),e._uU(111,"#"),e.qZA()(),e.TgZ(112,"h3",36)(113,"span"),e._uU(114,"[nz-flex]"),e.qZA(),e.TgZ(115,"label",37),e._uU(116,"directive"),e.qZA(),e.TgZ(117,"label",38),e._uU(118,"standalone"),e.qZA(),e.TgZ(119,"a",39),e._uU(120,"#"),e.qZA()(),e.TgZ(121,"table")(122,"thead")(123,"tr")(124,"th"),e._uU(125,"Property"),e.qZA(),e.TgZ(126,"th"),e._uU(127,"Description"),e.qZA(),e.TgZ(128,"th"),e._uU(129,"Type"),e.qZA(),e.TgZ(130,"th"),e._uU(131,"Default"),e.qZA()()(),e.TgZ(132,"tbody")(133,"tr")(134,"td")(135,"code"),e._uU(136,"[nzVertical]"),e.qZA()(),e.TgZ(137,"td"),e._uU(138,"Is direction of the flex vertical, use "),e.TgZ(139,"code"),e._uU(140,"flex-direction: column"),e.qZA()(),e.TgZ(141,"td")(142,"code"),e._uU(143,"boolean"),e.qZA()(),e.TgZ(144,"td")(145,"code"),e._uU(146,"false"),e.qZA()()(),e.TgZ(147,"tr")(148,"td")(149,"code"),e._uU(150,"[nzJustify]"),e.qZA()(),e.TgZ(151,"td"),e._uU(152,"Sets the alignment of elements in the direction of the main axis"),e.qZA(),e.TgZ(153,"td"),e._uU(154,"reference "),e.TgZ(155,"a",40),e._uU(156,"justify-content"),e.qZA()(),e.TgZ(157,"td")(158,"code"),e._uU(159,"'normal'"),e.qZA()()(),e.TgZ(160,"tr")(161,"td")(162,"code"),e._uU(163,"[nzAlign]"),e.qZA()(),e.TgZ(164,"td"),e._uU(165,"Sets the alignment of elements in the direction of the cross axis"),e.qZA(),e.TgZ(166,"td"),e._uU(167,"reference "),e.TgZ(168,"a",41),e._uU(169,"align-items"),e.qZA()(),e.TgZ(170,"td")(171,"code"),e._uU(172,"'normal'"),e.qZA()()(),e.TgZ(173,"tr")(174,"td")(175,"code"),e._uU(176,"[nzGap]"),e.qZA()(),e.TgZ(177,"td"),e._uU(178,"Sets the gap between items"),e.qZA(),e.TgZ(179,"td")(180,"code"),e._uU(181,"'small' | 'middle' | 'large' | number | string"),e.qZA()(),e.TgZ(182,"td")(183,"code"),e._uU(184,"0"),e.qZA()()(),e.TgZ(185,"tr")(186,"td")(187,"code"),e._uU(188,"[nzWrap]"),e.qZA()(),e.TgZ(189,"td"),e._uU(190,"Set whether the element is displayed in a single line or in multiple lines"),e.qZA(),e.TgZ(191,"td"),e._uU(192,"reference "),e.TgZ(193,"a",42),e._uU(194,"flex-wrap"),e.qZA()(),e.TgZ(195,"td")(196,"code"),e._uU(197,"'nowrap'"),e.qZA()()(),e.TgZ(198,"tr")(199,"td")(200,"code"),e._uU(201,"[nzFlex]"),e.qZA()(),e.TgZ(202,"td"),e._uU(203,"Flex CSS shorthand properties"),e.qZA(),e.TgZ(204,"td"),e._uU(205,"reference "),e.TgZ(206,"a",43),e._uU(207,"flex"),e.qZA()(),e.TgZ(208,"td")(209,"code"),e._uU(210,"'unset'"),e.qZA()()()()(),e.fQ9(),e.qZA()()),2&a&&(e.xp6(),e.Q6J("nzOffsetTop",16),e.xp6(),e.Q6J("nzAffix",!1),e.xp6(65),e.Q6J("nzGutter",8),e.xp6(),e.Q6J("nzSpan",24),e.xp6(),e.Q6J("nzId","components-flex-demo-basic")("nzLink","components-flex-demo-basic")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/flex/demo/basic.md"),e.xp6(5),e.Q6J("nzId","components-flex-demo-align")("nzLink","components-flex-demo-align")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/flex/demo/align.md"),e.xp6(5),e.Q6J("nzId","components-flex-demo-gap")("nzLink","components-flex-demo-gap")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/flex/demo/gap.md"),e.xp6(17),e.Q6J("nzId","components-flex-demo-wrap")("nzLink","components-flex-demo-wrap")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/flex/demo/wrap.md"),e.xp6(5),e.Q6J("nzId","components-flex-demo-combination")("nzLink","components-flex-demo-combination")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/flex/demo/combination.md"))},dependencies:[f.G,C.IT,C.Fp,D.$,h.t3,h.SK,b.SY,v.Ls,Z.w,N,t,d,_,q],encapsulation:2})}return o})(),B=(()=>{class o{constructor(){this.expanded=!1}goLink(l){window&&(window.location.hash=l)}expandAllCode(){this.expanded=!this.expanded,this.codeBoxes.forEach(l=>{l.nzExpanded=this.expanded,l.expandCode(this.expanded),l.check()})}static#e=this.\u0275fac=function(a){return new(a||o)};static#n=this.\u0275cmp=e.Xpm({type:o,selectors:[["nz-demo-flex"]],viewQuery:function(a,n){if(1&a&&e.Gf(f.G,5),2&a){let c;e.iGM(c=e.CRH())&&(n.codeBoxes=c)}},decls:213,vars:24,consts:[[1,"toc-affix",3,"nzOffsetTop"],["nzShowInkInFixed","",3,"nzAffix","nzClick"],["nzHref","#components-flex-demo-basic","nzTitle","Basic"],["nzHref","#components-flex-demo-align","nzTitle","Align"],["nzHref","#components-flex-demo-gap","nzTitle","Gap"],["nzHref","#components-flex-demo-wrap","nzTitle","Wrap"],["nzHref","#components-flex-demo-combination","nzTitle","Combination"],["nzHref","#api","nzTitle","API"],[1,"markdown"],[1,"subtitle"],[1,"widget"],["aria-label","Edit this page on Github","href","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/flex/doc/index.en-US.md","target","_blank","rel","noopener noreferrer",1,"edit-button"],["nz-icon","","nzType","edit"],["id","when-to-use"],["onclick","window.location.hash = 'when-to-use'",1,"anchor"],["id","difference-with-space-component"],["onclick","window.location.hash = 'difference-with-space-component'",1,"anchor"],["id","import-module"],["onclick","window.location.hash = 'import-module'",1,"anchor"],[1,"language-ts"],[1,"token","keyword"],[1,"token","punctuation"],[1,"token","string"],["nz-icon","","nzType","appstore","nz-tooltip","","nzTooltipTitle","Expand All Code",1,"code-box-expand-trigger",3,"click"],["nz-row","",3,"nzGutter"],["nz-col","",3,"nzSpan"],["nzTitle","Basic","nzSelector","nz-demo-flex-basic","nzGenerateCommand","ng g ng-zorro-antd:flex-basic <name>","nzComponentName","NzDemoFlexBasicComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["demo",""],["intro",""],["nzTitle","Align","nzSelector","nz-demo-flex-align","nzGenerateCommand","ng g ng-zorro-antd:flex-align <name>","nzComponentName","NzDemoFlexAlignComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","Gap","nzSelector","nz-demo-flex-gap","nzGenerateCommand","ng g ng-zorro-antd:flex-gap <name>","nzComponentName","NzDemoFlexGapComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","Wrap","nzSelector","nz-demo-flex-wrap","nzGenerateCommand","ng g ng-zorro-antd:flex-wrap <name>","nzComponentName","NzDemoFlexWrapComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","Combination","nzSelector","nz-demo-flex-combination","nzGenerateCommand","ng g ng-zorro-antd:flex-combination <name>","nzComponentName","NzDemoFlexCombinationComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],[1,"markdown","api-container"],["id","api"],["onclick","window.location.hash = 'api'",1,"anchor"],["id","[nz-flex]:standalone"],[1,"api-type-label","directive"],[1,"api-type-label","standalone"],["onclick","window.location.hash = '[nz-flex]:standalone'",1,"anchor"],["href","https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content","target","_blank","rel","noopener"],["href","https://developer.mozilla.org/en-US/docs/Web/CSS/align-items","target","_blank","rel","noopener"],["href","https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap","target","_blank","rel","noopener"],["href","https://developer.mozilla.org/en-US/docs/Web/CSS/flex","target","_blank","rel","noopener"]],template:function(a,n){1&a&&(e.TgZ(0,"article")(1,"nz-affix",0)(2,"nz-anchor",1),e.NdJ("nzClick",function(g){return n.goLink(g)}),e._UZ(3,"nz-link",2)(4,"nz-link",3)(5,"nz-link",4)(6,"nz-link",5)(7,"nz-link",6)(8,"nz-link",7),e.qZA()(),e.TgZ(9,"section",8)(10,"h1"),e._uU(11,"Flex"),e._UZ(12,"span",9)(13,"span",10),e.TgZ(14,"a",11),e._UZ(15,"span",12),e.qZA()(),e.TgZ(16,"section",8),e.IAx(),e.TgZ(17,"p"),e._uU(18,"Wrapper for "),e.TgZ(19,"code"),e._uU(20,"Display: flex"),e.qZA(),e._uU(21,"."),e.qZA(),e.TgZ(22,"h2",13)(23,"span"),e._uU(24,"When To Use"),e.qZA(),e.TgZ(25,"a",14),e._uU(26,"#"),e.qZA()(),e.TgZ(27,"ul")(28,"li"),e._uU(29,"Good for setting spacing between elements."),e.qZA(),e.TgZ(30,"li"),e._uU(31,"Suitable for setting various horizontal and vertical alignments."),e.qZA()(),e.TgZ(32,"h3",15)(33,"span"),e._uU(34,"Difference with Space component"),e.qZA(),e.TgZ(35,"a",16),e._uU(36,"#"),e.qZA()(),e.TgZ(37,"ul")(38,"li"),e._uU(39,"Space is used to set the spacing between inline elements. It will add a wrapper element for each child element for inline alignment. Suitable for equidistant arrangement of multiple child elements in rows and columns."),e.qZA(),e.TgZ(40,"li"),e._uU(41,"Flex is used to set the layout of block-level elements. It does not add a wrapper element. Suitable for layout of child elements in vertical or horizontal direction, and provides more flexibility and control."),e.qZA()(),e.TgZ(42,"h3",17)(43,"span"),e._uU(44,"Import Module"),e.qZA(),e.TgZ(45,"a",18),e._uU(46,"#"),e.qZA()(),e.TgZ(47,"pre",19)(48,"code")(49,"span",20),e._uU(50,"import"),e.qZA(),e._uU(51," "),e.TgZ(52,"span",21),e._uU(53,"{"),e.qZA(),e._uU(54," NzFlexModule "),e.TgZ(55,"span",21),e._uU(56,"}"),e.qZA(),e._uU(57," "),e.TgZ(58,"span",20),e._uU(59,"from"),e.qZA(),e._uU(60," "),e.TgZ(61,"span",22),e._uU(62,"'ng-zorro-antd/flex'"),e.qZA(),e.TgZ(63,"span",21),e._uU(64,";"),e.qZA()()(),e.fQ9(),e.qZA(),e.TgZ(65,"h2")(66,"span"),e._uU(67,"Examples"),e.qZA(),e.TgZ(68,"span",23),e.NdJ("click",function(){return n.expandAllCode()}),e.qZA()()(),e.TgZ(69,"div",24)(70,"div",25)(71,"nz-code-box",26),e._UZ(72,"nz-demo-flex-basic",27),e.TgZ(73,"div",28),e.IAx(),e.TgZ(74,"p"),e._uU(75,"The basic usage."),e.qZA(),e.fQ9(),e.qZA()(),e.TgZ(76,"nz-code-box",29),e._UZ(77,"nz-demo-flex-align",27),e.TgZ(78,"div",28),e.IAx(),e.TgZ(79,"p"),e._uU(80,"Set align."),e.qZA(),e.fQ9(),e.qZA()(),e.TgZ(81,"nz-code-box",30),e._UZ(82,"nz-demo-flex-gap",27),e.TgZ(83,"div",28),e.IAx(),e.TgZ(84,"p"),e._uU(85,"Set the "),e.TgZ(86,"code"),e._uU(87,"gap"),e.qZA(),e._uU(88," between elements, which has three preset sizes: "),e.TgZ(89,"code"),e._uU(90,"small"),e.qZA(),e._uU(91,", "),e.TgZ(92,"code"),e._uU(93,"middle"),e.qZA(),e._uU(94,", "),e.TgZ(95,"code"),e._uU(96,"large"),e.qZA(),e._uU(97,", You can also customize the gap size."),e.qZA(),e.fQ9(),e.qZA()(),e.TgZ(98,"nz-code-box",31),e._UZ(99,"nz-demo-flex-wrap",27),e.TgZ(100,"div",28),e.IAx(),e.TgZ(101,"p"),e._uU(102,"Wrap line."),e.qZA(),e.fQ9(),e.qZA()(),e.TgZ(103,"nz-code-box",32),e._UZ(104,"nz-demo-flex-combination",27),e.TgZ(105,"div",28),e.IAx(),e.TgZ(106,"p"),e._uU(107,"Nesting can achieve more complex layouts."),e.qZA(),e.fQ9(),e.qZA()()()(),e.TgZ(108,"section",33),e.IAx(),e.TgZ(109,"h2",34)(110,"span"),e._uU(111,"API"),e.qZA(),e.TgZ(112,"a",35),e._uU(113,"#"),e.qZA()(),e.TgZ(114,"h3",36)(115,"span"),e._uU(116,"[nz-flex]"),e.qZA(),e.TgZ(117,"label",37),e._uU(118,"directive"),e.qZA(),e.TgZ(119,"label",38),e._uU(120,"standalone"),e.qZA(),e.TgZ(121,"a",39),e._uU(122,"#"),e.qZA()(),e.TgZ(123,"table")(124,"thead")(125,"tr")(126,"th"),e._uU(127,"Property"),e.qZA(),e.TgZ(128,"th"),e._uU(129,"Description"),e.qZA(),e.TgZ(130,"th"),e._uU(131,"Type"),e.qZA(),e.TgZ(132,"th"),e._uU(133,"Default"),e.qZA()()(),e.TgZ(134,"tbody")(135,"tr")(136,"td")(137,"code"),e._uU(138,"[nzVertical]"),e.qZA()(),e.TgZ(139,"td"),e._uU(140,"Is direction of the flex vertical, use "),e.TgZ(141,"code"),e._uU(142,"flex-direction: column"),e.qZA()(),e.TgZ(143,"td")(144,"code"),e._uU(145,"boolean"),e.qZA()(),e.TgZ(146,"td")(147,"code"),e._uU(148,"false"),e.qZA()()(),e.TgZ(149,"tr")(150,"td")(151,"code"),e._uU(152,"[nzJustify]"),e.qZA()(),e.TgZ(153,"td"),e._uU(154,"Sets the alignment of elements in the direction of the main axis"),e.qZA(),e.TgZ(155,"td"),e._uU(156,"reference "),e.TgZ(157,"a",40),e._uU(158,"justify-content"),e.qZA()(),e.TgZ(159,"td")(160,"code"),e._uU(161,"'normal'"),e.qZA()()(),e.TgZ(162,"tr")(163,"td")(164,"code"),e._uU(165,"[nzAlign]"),e.qZA()(),e.TgZ(166,"td"),e._uU(167,"Sets the alignment of elements in the direction of the cross axis"),e.qZA(),e.TgZ(168,"td"),e._uU(169,"reference "),e.TgZ(170,"a",41),e._uU(171,"align-items"),e.qZA()(),e.TgZ(172,"td")(173,"code"),e._uU(174,"'normal'"),e.qZA()()(),e.TgZ(175,"tr")(176,"td")(177,"code"),e._uU(178,"[nzGap]"),e.qZA()(),e.TgZ(179,"td"),e._uU(180,"Sets the gap between items"),e.qZA(),e.TgZ(181,"td")(182,"code"),e._uU(183,"'small' | 'middle' | 'large' | number | string"),e.qZA()(),e.TgZ(184,"td")(185,"code"),e._uU(186,"0"),e.qZA()()(),e.TgZ(187,"tr")(188,"td")(189,"code"),e._uU(190,"[nzWrap]"),e.qZA()(),e.TgZ(191,"td"),e._uU(192,"Set whether the element is displayed in a single line or in multiple lines"),e.qZA(),e.TgZ(193,"td"),e._uU(194,"reference "),e.TgZ(195,"a",42),e._uU(196,"flex-wrap"),e.qZA()(),e.TgZ(197,"td")(198,"code"),e._uU(199,"'nowrap'"),e.qZA()()(),e.TgZ(200,"tr")(201,"td")(202,"code"),e._uU(203,"[nzFlex]"),e.qZA()(),e.TgZ(204,"td"),e._uU(205,"Flex CSS shorthand properties"),e.qZA(),e.TgZ(206,"td"),e._uU(207,"reference "),e.TgZ(208,"a",43),e._uU(209,"flex"),e.qZA()(),e.TgZ(210,"td")(211,"code"),e._uU(212,"'unset'"),e.qZA()()()()(),e.fQ9(),e.qZA()()),2&a&&(e.xp6(),e.Q6J("nzOffsetTop",16),e.xp6(),e.Q6J("nzAffix",!1),e.xp6(67),e.Q6J("nzGutter",8),e.xp6(),e.Q6J("nzSpan",24),e.xp6(),e.Q6J("nzId","components-flex-demo-basic")("nzLink","components-flex-demo-basic")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/flex/demo/basic.md"),e.xp6(5),e.Q6J("nzId","components-flex-demo-align")("nzLink","components-flex-demo-align")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/flex/demo/align.md"),e.xp6(5),e.Q6J("nzId","components-flex-demo-gap")("nzLink","components-flex-demo-gap")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/flex/demo/gap.md"),e.xp6(17),e.Q6J("nzId","components-flex-demo-wrap")("nzLink","components-flex-demo-wrap")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/flex/demo/wrap.md"),e.xp6(5),e.Q6J("nzId","components-flex-demo-combination")("nzLink","components-flex-demo-combination")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/flex/demo/combination.md"))},dependencies:[f.G,C.IT,C.Fp,D.$,h.t3,h.SK,b.SY,v.Ls,Z.w,N,t,d,_,q],encapsulation:2})}return o})(),R=(()=>{class o{static#e=this.\u0275fac=function(a){return new(a||o)};static#n=this.\u0275mod=e.oAB({type:o});static#t=this.\u0275inj=e.cJS({imports:[U.G,E,i.Bz.forChild([{path:"en",component:B},{path:"zh",component:k}])]})}return o})()},7225:(I,y,u)=>{u.d(y,{Bq:()=>h,Dg:()=>v,Of:()=>Z,aF:()=>m});var i=u(9212),U=u(7582),e=u(6223),z=u(7328),F=u(8645),A=u(2438),p=u(9773),T=u(6700),x=u(9388),w=u(6034),E=u(8188);const f=["*"],C=["inputElement"],D=["nz-radio",""];let h=(()=>{class r{static#e=this.\u0275fac=function(d){return new(d||r)};static#n=this.\u0275dir=i.lG2({type:r,selectors:[["","nz-radio-button",""]],standalone:!0})}return r})(),b=(()=>{class r{constructor(){this.selected$=new z.t(1),this.touched$=new F.x,this.disabled$=new z.t(1),this.name$=new z.t(1)}touch(){this.touched$.next()}select(t){this.selected$.next(t)}setDisabled(t){this.disabled$.next(t)}setName(t){this.name$.next(t)}static#e=this.\u0275fac=function(d){return new(d||r)};static#n=this.\u0275prov=i.Yz7({token:r,factory:r.\u0275fac})}return r})(),v=(()=>{class r{constructor(t,d,s){this.cdr=t,this.nzRadioService=d,this.directionality=s,this.value=null,this.destroy$=new F.x,this.isNzDisableFirstChange=!0,this.onChange=()=>{},this.onTouched=()=>{},this.nzDisabled=!1,this.nzButtonStyle="outline",this.nzSize="default",this.nzName=null,this.dir="ltr"}ngOnInit(){this.nzRadioService.selected$.pipe((0,p.R)(this.destroy$)).subscribe(t=>{this.value!==t&&(this.value=t,this.onChange(this.value))}),this.nzRadioService.touched$.pipe((0,p.R)(this.destroy$)).subscribe(()=>{Promise.resolve().then(()=>this.onTouched())}),this.directionality.change?.pipe((0,p.R)(this.destroy$)).subscribe(t=>{this.dir=t,this.cdr.detectChanges()}),this.dir=this.directionality.value}ngOnChanges(t){const{nzDisabled:d,nzName:s}=t;d&&this.nzRadioService.setDisabled(this.nzDisabled),s&&this.nzRadioService.setName(this.nzName)}ngOnDestroy(){this.destroy$.next(!0),this.destroy$.complete()}writeValue(t){this.value=t,this.nzRadioService.select(t),this.cdr.markForCheck()}registerOnChange(t){this.onChange=t}registerOnTouched(t){this.onTouched=t}setDisabledState(t){this.nzDisabled=this.isNzDisableFirstChange&&this.nzDisabled||t,this.isNzDisableFirstChange=!1,this.nzRadioService.setDisabled(this.nzDisabled),this.cdr.markForCheck()}static#e=this.\u0275fac=function(d){return new(d||r)(i.Y36(i.sBO),i.Y36(b),i.Y36(x.Is,8))};static#n=this.\u0275cmp=i.Xpm({type:r,selectors:[["nz-radio-group"]],hostAttrs:[1,"ant-radio-group"],hostVars:8,hostBindings:function(d,s){2&d&&i.ekj("ant-radio-group-large","large"===s.nzSize)("ant-radio-group-small","small"===s.nzSize)("ant-radio-group-solid","solid"===s.nzButtonStyle)("ant-radio-group-rtl","rtl"===s.dir)},inputs:{nzDisabled:"nzDisabled",nzButtonStyle:"nzButtonStyle",nzSize:"nzSize",nzName:"nzName"},exportAs:["nzRadioGroup"],standalone:!0,features:[i._Bn([b,{provide:e.JU,useExisting:(0,i.Gpc)(()=>r),multi:!0}]),i.TTD,i.jDz],ngContentSelectors:f,decls:1,vars:0,template:function(d,s){1&d&&(i.F$t(),i.Hsn(0))},encapsulation:2,changeDetection:0})}return(0,U.gn)([(0,T.yF)()],r.prototype,"nzDisabled",void 0),r})(),Z=(()=>{class r{focus(){this.focusMonitor.focusVia(this.inputElement,"keyboard")}blur(){this.inputElement.nativeElement.blur()}constructor(t,d,s,_,S,q,k,B){this.ngZone=t,this.elementRef=d,this.cdr=s,this.focusMonitor=_,this.directionality=S,this.nzRadioService=q,this.nzRadioButtonDirective=k,this.nzFormStatusService=B,this.isNgModel=!1,this.destroy$=new F.x,this.isNzDisableFirstChange=!0,this.isChecked=!1,this.name=null,this.isRadioButton=!!this.nzRadioButtonDirective,this.onChange=()=>{},this.onTouched=()=>{},this.nzValue=null,this.nzDisabled=!1,this.nzAutoFocus=!1,this.dir="ltr"}setDisabledState(t){this.nzDisabled=this.isNzDisableFirstChange&&this.nzDisabled||t,this.isNzDisableFirstChange=!1,this.cdr.markForCheck()}writeValue(t){this.isChecked=t,this.cdr.markForCheck()}registerOnChange(t){this.isNgModel=!0,this.onChange=t}registerOnTouched(t){this.onTouched=t}ngOnInit(){this.nzRadioService&&(this.nzRadioService.name$.pipe((0,p.R)(this.destroy$)).subscribe(t=>{this.name=t,this.cdr.markForCheck()}),this.nzRadioService.disabled$.pipe((0,p.R)(this.destroy$)).subscribe(t=>{this.nzDisabled=this.isNzDisableFirstChange&&this.nzDisabled||t,this.isNzDisableFirstChange=!1,this.cdr.markForCheck()}),this.nzRadioService.selected$.pipe((0,p.R)(this.destroy$)).subscribe(t=>{const d=this.isChecked;this.isChecked=this.nzValue===t,this.isNgModel&&d!==this.isChecked&&!1===this.isChecked&&this.onChange(!1),this.cdr.markForCheck()})),this.focusMonitor.monitor(this.elementRef,!0).pipe((0,p.R)(this.destroy$)).subscribe(t=>{t||(Promise.resolve().then(()=>this.onTouched()),this.nzRadioService&&this.nzRadioService.touch())}),this.directionality.change.pipe((0,p.R)(this.destroy$)).subscribe(t=>{this.dir=t,this.cdr.detectChanges()}),this.dir=this.directionality.value,this.setupClickListener()}ngAfterViewInit(){this.nzAutoFocus&&this.focus()}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete(),this.focusMonitor.stopMonitoring(this.elementRef)}setupClickListener(){this.ngZone.runOutsideAngular(()=>{(0,A.R)(this.elementRef.nativeElement,"click").pipe((0,p.R)(this.destroy$)).subscribe(t=>{t.stopPropagation(),t.preventDefault(),!this.nzDisabled&&!this.isChecked&&this.ngZone.run(()=>{this.focus(),this.nzRadioService?.select(this.nzValue),this.isNgModel&&(this.isChecked=!0,this.onChange(!0)),this.cdr.markForCheck()})})})}static#e=this.\u0275fac=function(d){return new(d||r)(i.Y36(i.R0b),i.Y36(i.SBq),i.Y36(i.sBO),i.Y36(w.tE),i.Y36(x.Is,8),i.Y36(b,8),i.Y36(h,8),i.Y36(E.kH,8))};static#n=this.\u0275cmp=i.Xpm({type:r,selectors:[["","nz-radio",""],["","nz-radio-button",""]],viewQuery:function(d,s){if(1&d&&i.Gf(C,7),2&d){let _;i.iGM(_=i.CRH())&&(s.inputElement=_.first)}},hostVars:18,hostBindings:function(d,s){2&d&&i.ekj("ant-radio-wrapper-in-form-item",!!s.nzFormStatusService)("ant-radio-wrapper",!s.isRadioButton)("ant-radio-button-wrapper",s.isRadioButton)("ant-radio-wrapper-checked",s.isChecked&&!s.isRadioButton)("ant-radio-button-wrapper-checked",s.isChecked&&s.isRadioButton)("ant-radio-wrapper-disabled",s.nzDisabled&&!s.isRadioButton)("ant-radio-button-wrapper-disabled",s.nzDisabled&&s.isRadioButton)("ant-radio-wrapper-rtl",!s.isRadioButton&&"rtl"===s.dir)("ant-radio-button-wrapper-rtl",s.isRadioButton&&"rtl"===s.dir)},inputs:{nzValue:"nzValue",nzDisabled:"nzDisabled",nzAutoFocus:"nzAutoFocus"},exportAs:["nzRadio"],standalone:!0,features:[i._Bn([{provide:e.JU,useExisting:(0,i.Gpc)(()=>r),multi:!0}]),i.jDz],attrs:D,ngContentSelectors:f,decls:6,vars:24,consts:[["type","radio",3,"disabled","checked"],["inputElement",""]],template:function(d,s){1&d&&(i.F$t(),i.TgZ(0,"span"),i._UZ(1,"input",0,1)(3,"span"),i.qZA(),i.TgZ(4,"span"),i.Hsn(5),i.qZA()),2&d&&(i.ekj("ant-radio",!s.isRadioButton)("ant-radio-checked",s.isChecked&&!s.isRadioButton)("ant-radio-disabled",s.nzDisabled&&!s.isRadioButton)("ant-radio-button",s.isRadioButton)("ant-radio-button-checked",s.isChecked&&s.isRadioButton)("ant-radio-button-disabled",s.nzDisabled&&s.isRadioButton),i.xp6(),i.ekj("ant-radio-input",!s.isRadioButton)("ant-radio-button-input",s.isRadioButton),i.Q6J("disabled",s.nzDisabled)("checked",s.isChecked),i.uIk("autofocus",s.nzAutoFocus?"autofocus":null)("name",s.name),i.xp6(2),i.ekj("ant-radio-inner",!s.isRadioButton)("ant-radio-button-inner",s.isRadioButton))},encapsulation:2,changeDetection:0})}return(0,U.gn)([(0,T.yF)()],r.prototype,"nzDisabled",void 0),(0,U.gn)([(0,T.yF)()],r.prototype,"nzAutoFocus",void 0),r})(),m=(()=>{class r{static#e=this.\u0275fac=function(d){return new(d||r)};static#n=this.\u0275mod=i.oAB({type:r});static#t=this.\u0275inj=i.cJS({})}return r})()}}]);