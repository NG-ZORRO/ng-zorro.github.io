"use strict";(self.webpackChunkng_zorro_antd_doc=self.webpackChunkng_zorro_antd_doc||[]).push([[1014],{1014:(se,C,i)=>{i.r(C),i.d(C,{NzDemoRateModule:()=>ie});var k=i(4190),B=i(6242),d=i(227),z=i(7582),U=i(6028),p=i(6814),e=i(9212),l=i(6223),q=i(2438),g=i(9773),T=i(2196),v=i(2189),Z=i(6700),h=i(8332),O=i(9388);const S=["nz-rate-item",""];function J(t,s){}function Q(t,s){}function M(t,s){1&t&&e._UZ(0,"span",4)}const x=t=>({$implicit:t}),G=["ulElement"];function L(t,s){if(1&t){const n=e.EpF();e.TgZ(0,"li",3)(1,"div",4),e.NdJ("itemHover",function(a){const u=e.CHM(n).index,m=e.oxw();return e.KtG(m.onItemHover(u,a))})("itemClick",function(a){const u=e.CHM(n).index,m=e.oxw();return e.KtG(m.onItemClick(u,a))}),e.qZA()()}if(2&t){const n=s.index,o=e.oxw();e.Q6J("ngClass",o.starStyleArray[n]||"")("nzTooltipTitle",o.nzTooltips[n]),e.xp6(),e.Q6J("allowHalf",o.nzAllowHalf)("character",o.nzCharacter)("index",n)}}let b=(()=>{class t{constructor(){this.index=0,this.allowHalf=!1,this.itemHover=new e.vpe,this.itemClick=new e.vpe}hoverRate(n){this.itemHover.next(n&&this.allowHalf)}clickRate(n){this.itemClick.next(n&&this.allowHalf)}static#e=this.\u0275fac=function(o){return new(o||t)};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["","nz-rate-item",""]],inputs:{character:"character",index:"index",allowHalf:"allowHalf"},outputs:{itemHover:"itemHover",itemClick:"itemClick"},exportAs:["nzRateItem"],standalone:!0,features:[e.jDz],attrs:S,decls:6,vars:8,consts:[[1,"ant-rate-star-second",3,"mouseover","click"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"ant-rate-star-first",3,"mouseover","click"],["defaultCharacter",""],["nz-icon","","nzType","star","nzTheme","fill"]],template:function(o,a){if(1&o&&(e.TgZ(0,"div",0),e.NdJ("mouseover",function(u){return a.hoverRate(!1),u.stopPropagation()})("click",function(){return a.clickRate(!1)}),e.YNc(1,J,0,0,"ng-template",1),e.qZA(),e.TgZ(2,"div",2),e.NdJ("mouseover",function(u){return a.hoverRate(!0),u.stopPropagation()})("click",function(){return a.clickRate(!0)}),e.YNc(3,Q,0,0,"ng-template",1),e.qZA(),e.YNc(4,M,1,0,"ng-template",null,3,e.W1O)),2&o){const r=e.MAs(5);e.xp6(),e.Q6J("ngTemplateOutlet",a.character||r)("ngTemplateOutletContext",e.VKq(4,x,a.index)),e.xp6(2),e.Q6J("ngTemplateOutlet",a.character||r)("ngTemplateOutletContext",e.VKq(6,x,a.index))}},dependencies:[p.tP,d.PV,d.Ls],encapsulation:2,changeDetection:0})}return(0,z.gn)([(0,Z.yF)()],t.prototype,"allowHalf",void 0),t})();const F="rate";let c=(()=>{class t{get nzValue(){return this._value}set nzValue(n){this._value!==n&&(this._value=n,this.hasHalf=!Number.isInteger(n),this.hoverValue=Math.ceil(n))}constructor(n,o,a,r,u,m){this.nzConfigService=n,this.ngZone=o,this.renderer=a,this.cdr=r,this.directionality=u,this.destroy$=m,this._nzModuleName=F,this.nzAllowClear=!0,this.nzAllowHalf=!1,this.nzDisabled=!1,this.nzAutoFocus=!1,this.nzCount=5,this.nzTooltips=[],this.nzOnBlur=new e.vpe,this.nzOnFocus=new e.vpe,this.nzOnHoverChange=new e.vpe,this.nzOnKeyDown=new e.vpe,this.classMap={},this.starArray=[],this.starStyleArray=[],this.dir="ltr",this.hasHalf=!1,this.hoverValue=0,this.isFocused=!1,this._value=0,this.isNzDisableFirstChange=!0,this.onChange=()=>null,this.onTouched=()=>null}ngOnChanges(n){const{nzAutoFocus:o,nzCount:a,nzValue:r}=n;if(o&&!o.isFirstChange()){const u=this.ulElement.nativeElement;this.nzAutoFocus&&!this.nzDisabled?this.renderer.setAttribute(u,"autofocus","autofocus"):this.renderer.removeAttribute(u,"autofocus")}a&&this.updateStarArray(),r&&this.updateStarStyle()}ngOnInit(){this.nzConfigService.getConfigChangeEventForComponent(F).pipe((0,g.R)(this.destroy$)).subscribe(()=>this.cdr.markForCheck()),this.directionality.change.pipe((0,g.R)(this.destroy$)).subscribe(n=>{this.dir=n,this.cdr.detectChanges()}),this.dir=this.directionality.value,this.ngZone.runOutsideAngular(()=>{(0,q.R)(this.ulElement.nativeElement,"focus").pipe((0,g.R)(this.destroy$)).subscribe(n=>{this.isFocused=!0,this.nzOnFocus.observers.length&&this.ngZone.run(()=>this.nzOnFocus.emit(n))}),(0,q.R)(this.ulElement.nativeElement,"blur").pipe((0,g.R)(this.destroy$)).subscribe(n=>{this.isFocused=!1,this.nzOnBlur.observers.length&&this.ngZone.run(()=>this.nzOnBlur.emit(n))})})}onItemClick(n,o){if(this.nzDisabled)return;this.hoverValue=n+1;const a=o?n+.5:n+1;this.nzValue===a?this.nzAllowClear&&(this.nzValue=0,this.onChange(this.nzValue)):(this.nzValue=a,this.onChange(this.nzValue)),this.updateStarStyle()}onItemHover(n,o){this.nzDisabled||this.hoverValue===n+1&&o===this.hasHalf||(this.hoverValue=n+1,this.hasHalf=o,this.nzOnHoverChange.emit(this.hoverValue),this.updateStarStyle())}onRateLeave(){this.hasHalf=!Number.isInteger(this.nzValue),this.hoverValue=Math.ceil(this.nzValue),this.updateStarStyle()}focus(){this.ulElement.nativeElement.focus()}blur(){this.ulElement.nativeElement.blur()}onKeyDown(n){const o=this.nzValue;n.keyCode===U.SV&&this.nzValue<this.nzCount?this.nzValue+=this.nzAllowHalf?.5:1:n.keyCode===U.oh&&this.nzValue>0&&(this.nzValue-=this.nzAllowHalf?.5:1),o!==this.nzValue&&(this.onChange(this.nzValue),this.nzOnKeyDown.emit(n),this.updateStarStyle(),this.cdr.markForCheck())}updateStarArray(){this.starArray=Array(this.nzCount).fill(0).map((n,o)=>o),this.updateStarStyle()}updateStarStyle(){this.starStyleArray=this.starArray.map(n=>{const o="ant-rate-star",a=n+1;return{[`${o}-full`]:a<this.hoverValue||!this.hasHalf&&a===this.hoverValue,[`${o}-half`]:this.hasHalf&&a===this.hoverValue,[`${o}-active`]:this.hasHalf&&a===this.hoverValue,[`${o}-zero`]:a>this.hoverValue,[`${o}-focused`]:this.hasHalf&&a===this.hoverValue&&this.isFocused}})}writeValue(n){this.nzValue=n||0,this.updateStarArray(),this.cdr.markForCheck()}setDisabledState(n){this.nzDisabled=this.isNzDisableFirstChange&&this.nzDisabled||n,this.isNzDisableFirstChange=!1,this.cdr.markForCheck()}registerOnChange(n){this.onChange=n}registerOnTouched(n){this.onTouched=n}static#e=this.\u0275fac=function(o){return new(o||t)(e.Y36(T.jY),e.Y36(e.R0b),e.Y36(e.Qsj),e.Y36(e.sBO),e.Y36(O.Is,8),e.Y36(v.kn))};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["nz-rate"]],viewQuery:function(o,a){if(1&o&&e.Gf(G,7),2&o){let r;e.iGM(r=e.CRH())&&(a.ulElement=r.first)}},inputs:{nzAllowClear:"nzAllowClear",nzAllowHalf:"nzAllowHalf",nzDisabled:"nzDisabled",nzAutoFocus:"nzAutoFocus",nzCharacter:"nzCharacter",nzCount:"nzCount",nzTooltips:"nzTooltips"},outputs:{nzOnBlur:"nzOnBlur",nzOnFocus:"nzOnFocus",nzOnHoverChange:"nzOnHoverChange",nzOnKeyDown:"nzOnKeyDown"},exportAs:["nzRate"],standalone:!0,features:[e._Bn([v.kn,{provide:l.JU,useExisting:(0,e.Gpc)(()=>t),multi:!0}]),e.TTD,e.jDz],decls:3,vars:7,consts:[[1,"ant-rate",3,"ngClass","tabindex","keydown","mouseleave"],["ulElement",""],["class","ant-rate-star","nz-tooltip","",3,"ngClass","nzTooltipTitle",4,"ngFor","ngForOf"],["nz-tooltip","",1,"ant-rate-star",3,"ngClass","nzTooltipTitle"],["nz-rate-item","",3,"allowHalf","character","index","itemHover","itemClick"]],template:function(o,a){1&o&&(e.TgZ(0,"ul",0,1),e.NdJ("keydown",function(u){return a.onKeyDown(u),u.preventDefault()})("mouseleave",function(u){return a.onRateLeave(),u.stopPropagation()}),e.YNc(2,L,2,5,"li",2),e.qZA()),2&o&&(e.ekj("ant-rate-disabled",a.nzDisabled)("ant-rate-rtl","rtl"===a.dir),e.Q6J("ngClass",a.classMap)("tabindex",a.nzDisabled?-1:1),e.xp6(2),e.Q6J("ngForOf",a.starArray))},dependencies:[p.mk,p.sg,h.cg,h.SY,b],encapsulation:2,changeDetection:0})}return(0,z.gn)([(0,T.oS)(),(0,Z.yF)()],t.prototype,"nzAllowClear",void 0),(0,z.gn)([(0,T.oS)(),(0,Z.yF)()],t.prototype,"nzAllowHalf",void 0),(0,z.gn)([(0,Z.yF)()],t.prototype,"nzDisabled",void 0),(0,z.gn)([(0,Z.yF)()],t.prototype,"nzAutoFocus",void 0),(0,z.gn)([(0,Z.Rn)()],t.prototype,"nzCount",void 0),t})();const Y=[d.PV,(()=>{class t{static#e=this.\u0275fac=function(o){return new(o||t)};static#t=this.\u0275mod=e.oAB({type:t});static#n=this.\u0275inj=e.cJS({imports:[c,b]})}return t})()];var _=i(379),f=i(5393),D=i(8101),A=i(3185);let R=(()=>{class t{static#e=this.\u0275fac=function(o){return new(o||t)};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["nz-demo-rate-basic"]],decls:1,vars:1,consts:[[3,"ngModel"]],template:function(o,a){1&o&&e._UZ(0,"nz-rate",0),2&o&&e.Q6J("ngModel",0)},dependencies:[l.JJ,l.On,c],encapsulation:2})}return t})();function X(t,s){1&t&&e._UZ(0,"span",5)}function K(t,s){1&t&&e._uU(0,"\u597d")}function $(t,s){1&t&&e._uU(0,"A")}let N=(()=>{class t{static#e=this.\u0275fac=function(o){return new(o||t)};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["nz-demo-rate-character"]],decls:11,vars:6,consts:[["nzAllowHalf","",3,"ngModel","nzCharacter"],["nzAllowHalf","",1,"large",3,"ngModel","nzCharacter"],["characterIcon",""],["characterZhLetter",""],["characterEnLetter",""],["nz-icon","","nzType","heart"]],template:function(o,a){if(1&o&&(e._UZ(0,"nz-rate",0)(1,"br")(2,"nz-rate",1)(3,"br")(4,"nz-rate",0),e.YNc(5,X,1,0,"ng-template",null,2,e.W1O)(7,K,1,0,"ng-template",null,3,e.W1O)(9,$,1,0,"ng-template",null,4,e.W1O)),2&o){const r=e.MAs(6),u=e.MAs(8),m=e.MAs(10);e.Q6J("ngModel",0)("nzCharacter",r),e.xp6(2),e.Q6J("ngModel",0)("nzCharacter",m),e.xp6(2),e.Q6J("ngModel",0)("nzCharacter",u)}},dependencies:[l.JJ,l.On,d.Ls,c],styles:[".large[_ngcontent-%COMP%]     .ant-rate-star{font-size:36px}"]})}return t})(),E=(()=>{class t{constructor(){this.value=0}static#e=this.\u0275fac=function(o){return new(o||t)};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["nz-demo-rate-clear"]],decls:7,vars:3,consts:[["nzAllowHalf","",3,"ngModel","ngModelChange"],[1,"ant-rate-text"],["nzAllowHalf","",3,"ngModel","nzAllowClear","ngModelChange"]],template:function(o,a){1&o&&(e.TgZ(0,"nz-rate",0),e.NdJ("ngModelChange",function(u){return a.value=u}),e.qZA(),e.TgZ(1,"span",1),e._uU(2,"allowClear: true"),e.qZA(),e._UZ(3,"br"),e.TgZ(4,"nz-rate",2),e.NdJ("ngModelChange",function(u){return a.value=u}),e.qZA(),e.TgZ(5,"span",1),e._uU(6,"allowClear: false"),e.qZA()),2&o&&(e.Q6J("ngModel",a.value),e.xp6(4),e.Q6J("ngModel",a.value)("nzAllowClear",!1))},dependencies:[l.JJ,l.On,c],encapsulation:2})}return t})();function P(t,s){1&t&&e._uU(0),2&t&&e.hij(" ",s.$implicit+1," ")}function j(t,s){1&t&&e._UZ(0,"span",7)}function W(t,s){1&t&&e._UZ(0,"span",7)}function ee(t,s){1&t&&e._UZ(0,"span",8)}function te(t,s){1&t&&e._UZ(0,"span",9)}function ne(t,s){1&t&&e._UZ(0,"span",9)}function oe(t,s){1&t&&(e.ynx(0,3),e.YNc(1,j,1,0,"span",4)(2,W,1,0,"span",4)(3,ee,1,0,"span",5)(4,te,1,0,"span",6)(5,ne,1,0,"span",6),e.BQk()),2&t&&(e.Q6J("ngSwitch",s.$implicit),e.xp6(),e.Q6J("ngSwitchCase",0),e.xp6(),e.Q6J("ngSwitchCase",1),e.xp6(),e.Q6J("ngSwitchCase",2),e.xp6(),e.Q6J("ngSwitchCase",3),e.xp6(),e.Q6J("ngSwitchCase",4))}let y=(()=>{class t{static#e=this.\u0275fac=function(o){return new(o||t)};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["nz-demo-rate-customize"]],decls:8,vars:4,consts:[[3,"ngModel","nzCharacter"],["characterNumber",""],["characterIcon",""],[3,"ngSwitch"],["nz-icon","","nzType","frown",4,"ngSwitchCase"],["nz-icon","","nzType","meh",4,"ngSwitchCase"],["nz-icon","","nzType","smile",4,"ngSwitchCase"],["nz-icon","","nzType","frown"],["nz-icon","","nzType","meh"],["nz-icon","","nzType","smile"]],template:function(o,a){if(1&o&&(e._UZ(0,"nz-rate",0)(1,"br")(2,"nz-rate",0)(3,"br"),e.YNc(4,P,1,1,"ng-template",null,1,e.W1O)(6,oe,6,6,"ng-template",null,2,e.W1O)),2&o){const r=e.MAs(5),u=e.MAs(7);e.Q6J("ngModel",2)("nzCharacter",r),e.xp6(2),e.Q6J("ngModel",3)("nzCharacter",u)}},dependencies:[p.RF,p.n9,l.JJ,l.On,d.Ls,c],styles:[".large[_ngcontent-%COMP%]     .ant-rate-star{font-size:36px}"]})}return t})(),H=(()=>{class t{static#e=this.\u0275fac=function(o){return new(o||t)};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["nz-demo-rate-disabled"]],decls:1,vars:1,consts:[["nzDisabled","",3,"ngModel"]],template:function(o,a){1&o&&e._UZ(0,"nz-rate",0),2&o&&e.Q6J("ngModel",2)},dependencies:[l.JJ,l.On,c],encapsulation:2})}return t})(),w=(()=>{class t{static#e=this.\u0275fac=function(o){return new(o||t)};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["nz-demo-rate-half"]],decls:1,vars:1,consts:[["nzAllowHalf","",3,"ngModel"]],template:function(o,a){1&o&&e._UZ(0,"nz-rate",0),2&o&&e.Q6J("ngModel",2.5)},dependencies:[l.JJ,l.On,c],encapsulation:2})}return t})();function ae(t,s){if(1&t&&(e.TgZ(0,"span",2),e._uU(1),e.qZA()),2&t){const n=e.oxw();e.xp6(),e.Oqu(n.value?n.tooltips[n.value-1]:"")}}let I=(()=>{class t{constructor(){this.tooltips=["terrible","bad","normal","good","wonderful"],this.value=3}static#e=this.\u0275fac=function(o){return new(o||t)};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["nz-demo-rate-text"]],decls:2,vars:3,consts:[[3,"ngModel","nzTooltips","ngModelChange"],["class","ant-rate-text",4,"ngIf"],[1,"ant-rate-text"]],template:function(o,a){1&o&&(e.TgZ(0,"nz-rate",0),e.NdJ("ngModelChange",function(u){return a.value=u}),e.qZA(),e.YNc(1,ae,2,1,"span",1)),2&o&&(e.Q6J("ngModel",a.value)("nzTooltips",a.tooltips),e.xp6(),e.Q6J("ngIf",a.value))},dependencies:[p.O5,l.JJ,l.On,c],encapsulation:2})}return t})(),re=(()=>{class t{constructor(){this.expanded=!1}goLink(n){window&&(window.location.hash=n)}expandAllCode(){this.expanded=!this.expanded,this.codeBoxes.forEach(n=>{n.nzExpanded=this.expanded,n.expandCode(this.expanded),n.check()})}static#e=this.\u0275fac=function(o){return new(o||t)};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["nz-demo-rate"]],viewQuery:function(o,a){if(1&o&&e.Gf(_.G,5),2&o){let r;e.iGM(r=e.CRH())&&(a.codeBoxes=r)}},decls:310,vars:35,consts:[[1,"toc-affix",3,"nzOffsetTop"],["nzShowInkInFixed","",3,"nzAffix","nzClick"],["nzHref","#components-rate-demo-basic","nzTitle","\u57fa\u672c"],["nzHref","#components-rate-demo-half","nzTitle","\u534a\u661f"],["nzHref","#components-rate-demo-text","nzTitle","\u6587\u6848\u5c55\u73b0"],["nzHref","#components-rate-demo-disabled","nzTitle","\u53ea\u8bfb"],["nzHref","#components-rate-demo-clear","nzTitle","\u6e05\u9664"],["nzHref","#components-rate-demo-character","nzTitle","\u5176\u4ed6\u5b57\u7b26"],["nzHref","#components-rate-demo-customize","nzTitle","\u81ea\u5b9a\u4e49\u5b57\u7b26"],["nzHref","#api","nzTitle","API"],[1,"markdown"],[1,"subtitle"],[1,"widget"],["aria-label","Edit this page on Github","href","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/rate/doc/index.zh-CN.md","target","_blank","rel","noopener noreferrer",1,"edit-button"],["nz-icon","","nzType","edit"],["id","\u4f55\u65f6\u4f7f\u7528"],["onclick","window.location.hash = '\u4f55\u65f6\u4f7f\u7528'",1,"anchor"],[1,"language-ts"],[1,"token","keyword"],[1,"token","punctuation"],[1,"token","string"],["nz-icon","","nzType","appstore","nz-tooltip","","nzTooltipTitle","\u5c55\u5f00\u5168\u90e8\u4ee3\u7801",1,"code-box-expand-trigger",3,"click"],["nz-row","",3,"nzGutter"],["nz-col","",3,"nzXl","nzSpan"],["nzTitle","\u57fa\u672c","nzSelector","nz-demo-rate-basic","nzGenerateCommand","ng g ng-zorro-antd:rate-basic <name>","nzComponentName","NzDemoRateBasicComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["demo",""],["intro",""],["nzTitle","\u6587\u6848\u5c55\u73b0","nzSelector","nz-demo-rate-text","nzGenerateCommand","ng g ng-zorro-antd:rate-text <name>","nzComponentName","NzDemoRateTextComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","\u6e05\u9664","nzSelector","nz-demo-rate-clear","nzGenerateCommand","ng g ng-zorro-antd:rate-clear <name>","nzComponentName","NzDemoRateClearComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","\u81ea\u5b9a\u4e49\u5b57\u7b26","nzSelector","nz-demo-rate-customize","nzGenerateCommand","ng g ng-zorro-antd:rate-customize <name>","nzComponentName","NzDemoRateCustomizeComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","\u534a\u661f","nzSelector","nz-demo-rate-half","nzGenerateCommand","ng g ng-zorro-antd:rate-half <name>","nzComponentName","NzDemoRateHalfComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","\u53ea\u8bfb","nzSelector","nz-demo-rate-disabled","nzGenerateCommand","ng g ng-zorro-antd:rate-disabled <name>","nzComponentName","NzDemoRateDisabledComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","\u5176\u4ed6\u5b57\u7b26","nzSelector","nz-demo-rate-character","nzGenerateCommand","ng g ng-zorro-antd:rate-character <name>","nzComponentName","NzDemoRateCharacterComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],[1,"markdown","api-container"],["id","api"],["onclick","window.location.hash = 'api'",1,"anchor"],["id","nz-rate:standalone"],[1,"api-type-label","component"],[1,"api-type-label","standalone"],["onclick","window.location.hash = 'nz-rate:standalone'",1,"anchor"],["id","\u65b9\u6cd5"],["onclick","window.location.hash = '\u65b9\u6cd5'",1,"anchor"]],template:function(o,a){1&o&&(e.TgZ(0,"article")(1,"nz-affix",0)(2,"nz-anchor",1),e.NdJ("nzClick",function(u){return a.goLink(u)}),e._UZ(3,"nz-link",2)(4,"nz-link",3)(5,"nz-link",4)(6,"nz-link",5)(7,"nz-link",6)(8,"nz-link",7)(9,"nz-link",8)(10,"nz-link",9),e.qZA()(),e.TgZ(11,"section",10)(12,"h1"),e._uU(13,"Rate"),e.TgZ(14,"span",11),e._uU(15,"\u8bc4\u5206"),e.qZA(),e._UZ(16,"span",12),e.TgZ(17,"a",13),e._UZ(18,"span",14),e.qZA()(),e.TgZ(19,"section",10),e.IAx(),e.TgZ(20,"p"),e._uU(21,"\u8bc4\u5206\u7ec4\u4ef6\u3002"),e.qZA(),e.TgZ(22,"h2",15)(23,"span"),e._uU(24,"\u4f55\u65f6\u4f7f\u7528"),e.qZA(),e.TgZ(25,"a",16),e._uU(26,"#"),e.qZA()(),e.TgZ(27,"ul")(28,"li"),e._uU(29,"\u5bf9\u8bc4\u4ef7\u8fdb\u884c\u5c55\u793a\u3002"),e.qZA(),e.TgZ(30,"li"),e._uU(31,"\u5bf9\u4e8b\u7269\u8fdb\u884c\u5feb\u901f\u7684\u8bc4\u7ea7\u64cd\u4f5c\u3002"),e.qZA()(),e.TgZ(32,"pre",17)(33,"code")(34,"span",18),e._uU(35,"import"),e.qZA(),e._uU(36," "),e.TgZ(37,"span",19),e._uU(38,"{"),e.qZA(),e._uU(39," NzRateModule "),e.TgZ(40,"span",19),e._uU(41,"}"),e.qZA(),e._uU(42," "),e.TgZ(43,"span",18),e._uU(44,"from"),e.qZA(),e._uU(45," "),e.TgZ(46,"span",20),e._uU(47,"'ng-zorro-antd/rate'"),e.qZA(),e.TgZ(48,"span",19),e._uU(49,";"),e.qZA()()(),e.fQ9(),e.qZA(),e.TgZ(50,"h2")(51,"span"),e._uU(52,"\u4ee3\u7801\u6f14\u793a"),e.qZA(),e.TgZ(53,"span",21),e.NdJ("click",function(){return a.expandAllCode()}),e.qZA()()(),e.TgZ(54,"div",22)(55,"div",23)(56,"nz-code-box",24),e._UZ(57,"nz-demo-rate-basic",25),e.TgZ(58,"div",26),e.IAx(),e.TgZ(59,"p"),e._uU(60,"\u6700\u7b80\u5355\u7684\u7528\u6cd5\u3002"),e.qZA(),e.fQ9(),e.qZA()(),e.TgZ(61,"nz-code-box",27),e._UZ(62,"nz-demo-rate-text",25),e.TgZ(63,"div",26),e.IAx(),e.TgZ(64,"p"),e._uU(65,"\u7ed9\u8bc4\u5206\u7ec4\u4ef6\u52a0\u4e0a\u6587\u6848\u5c55\u793a\u3002"),e.qZA(),e.fQ9(),e.qZA()(),e.TgZ(66,"nz-code-box",28),e._UZ(67,"nz-demo-rate-clear",25),e.TgZ(68,"div",26),e.IAx(),e.TgZ(69,"p"),e._uU(70,"\u652f\u6301\u5141\u8bb8\u6216\u8005\u7981\u7528\u6e05\u9664\u3002"),e.qZA(),e.fQ9(),e.qZA()(),e.TgZ(71,"nz-code-box",29),e._UZ(72,"nz-demo-rate-customize",25),e.TgZ(73,"div",26),e.IAx(),e.TgZ(74,"p"),e._uU(75,"\u53ef\u4ee5\u901a\u8fc7\u7d22\u5f15\u81ea\u5b9a\u4e49\u6bcf\u4e00\u4e2a\u5b57\u7b26\u3002"),e.qZA(),e.fQ9(),e.qZA()()(),e.TgZ(76,"div",23)(77,"nz-code-box",30),e._UZ(78,"nz-demo-rate-half",25),e.TgZ(79,"div",26),e.IAx(),e.TgZ(80,"p"),e._uU(81,"\u652f\u6301\u9009\u4e2d\u534a\u661f\u3002"),e.qZA(),e.fQ9(),e.qZA()(),e.TgZ(82,"nz-code-box",31),e._UZ(83,"nz-demo-rate-disabled",25),e.TgZ(84,"div",26),e.IAx(),e.TgZ(85,"p"),e._uU(86,"\u53ea\u8bfb\uff0c\u65e0\u6cd5\u8fdb\u884c\u9f20\u6807\u4ea4\u4e92\u3002"),e.qZA(),e.fQ9(),e.qZA()(),e.TgZ(87,"nz-code-box",32),e._UZ(88,"nz-demo-rate-character",25),e.TgZ(89,"div",26),e.IAx(),e.TgZ(90,"p"),e._uU(91,"\u53ef\u4ee5\u5c06\u661f\u661f\u66ff\u6362\u4e3a\u5176\u4ed6\u5b57\u7b26\uff0c\u6bd4\u5982\u5b57\u6bcd\uff0c\u6570\u5b57\uff0c\u5b57\u4f53\u56fe\u6807\u751a\u81f3\u4e2d\u6587\u3002"),e.qZA(),e.fQ9(),e.qZA()()()(),e.TgZ(92,"section",33),e.IAx(),e.TgZ(93,"h2",34)(94,"span"),e._uU(95,"API"),e.qZA(),e.TgZ(96,"a",35),e._uU(97,"#"),e.qZA()(),e.TgZ(98,"h3",36)(99,"span"),e._uU(100,"nz-rate"),e.qZA(),e.TgZ(101,"label",37),e._uU(102,"component"),e.qZA(),e.TgZ(103,"label",38),e._uU(104,"standalone"),e.qZA(),e.TgZ(105,"a",39),e._uU(106,"#"),e.qZA()(),e.TgZ(107,"table")(108,"thead")(109,"tr")(110,"th"),e._uU(111,"\u5c5e\u6027"),e.qZA(),e.TgZ(112,"th"),e._uU(113,"\u8bf4\u660e"),e.qZA(),e.TgZ(114,"th"),e._uU(115,"\u7c7b\u578b"),e.qZA(),e.TgZ(116,"th"),e._uU(117,"\u9ed8\u8ba4\u503c"),e.qZA(),e.TgZ(118,"th"),e._uU(119,"\u652f\u6301\u5168\u5c40\u914d\u7f6e"),e.qZA()()(),e.TgZ(120,"tbody")(121,"tr")(122,"td")(123,"code"),e._uU(124,"[nzAllowClear]"),e.qZA()(),e.TgZ(125,"td"),e._uU(126,"\u662f\u5426\u5141\u8bb8\u518d\u6b21\u70b9\u51fb\u540e\u6e05\u9664"),e.qZA(),e.TgZ(127,"td")(128,"code"),e._uU(129,"boolean"),e.qZA()(),e.TgZ(130,"td")(131,"code"),e._uU(132,"true"),e.qZA()(),e.TgZ(133,"td"),e._uU(134,"\u2705"),e.qZA()(),e.TgZ(135,"tr")(136,"td")(137,"code"),e._uU(138,"[nzAllowHalf]"),e.qZA()(),e.TgZ(139,"td"),e._uU(140,"\u662f\u5426\u5141\u8bb8\u534a\u9009"),e.qZA(),e.TgZ(141,"td")(142,"code"),e._uU(143,"boolean"),e.qZA()(),e.TgZ(144,"td")(145,"code"),e._uU(146,"false"),e.qZA()(),e.TgZ(147,"td"),e._uU(148,"\u2705"),e.qZA()(),e.TgZ(149,"tr")(150,"td")(151,"code"),e._uU(152,"[nzAutoFocus]"),e.qZA()(),e.TgZ(153,"td"),e._uU(154,"\u81ea\u52a8\u83b7\u53d6\u7126\u70b9"),e.qZA(),e.TgZ(155,"td")(156,"code"),e._uU(157,"boolean"),e.qZA()(),e.TgZ(158,"td")(159,"code"),e._uU(160,"false"),e.qZA()(),e._UZ(161,"td"),e.qZA(),e.TgZ(162,"tr")(163,"td")(164,"code"),e._uU(165,"[nzCharacter]"),e.qZA()(),e.TgZ(166,"td"),e._uU(167,"\u81ea\u5b9a\u4e49\u5b57\u7b26"),e.qZA(),e.TgZ(168,"td")(169,"code"),e._uU(170,"TemplateRef<void>"),e.qZA()(),e.TgZ(171,"td")(172,"code"),e._uU(173,'<span nz-icon nzType="star"></span>'),e.qZA()(),e._UZ(174,"td"),e.qZA(),e.TgZ(175,"tr")(176,"td")(177,"code"),e._uU(178,"[nzCount]"),e.qZA()(),e.TgZ(179,"td"),e._uU(180,"star \u603b\u6570"),e.qZA(),e.TgZ(181,"td")(182,"code"),e._uU(183,"number"),e.qZA()(),e.TgZ(184,"td")(185,"code"),e._uU(186,"5"),e.qZA()(),e._UZ(187,"td"),e.qZA(),e.TgZ(188,"tr")(189,"td")(190,"code"),e._uU(191,"[nzDisabled]"),e.qZA()(),e.TgZ(192,"td"),e._uU(193,"\u53ea\u8bfb\uff0c\u65e0\u6cd5\u8fdb\u884c\u4ea4\u4e92"),e.qZA(),e.TgZ(194,"td")(195,"code"),e._uU(196,"boolean"),e.qZA()(),e.TgZ(197,"td")(198,"code"),e._uU(199,"false"),e.qZA()(),e._UZ(200,"td"),e.qZA(),e.TgZ(201,"tr")(202,"td")(203,"code"),e._uU(204,"[nzTooltips]"),e.qZA()(),e.TgZ(205,"td"),e._uU(206,"\u81ea\u5b9a\u4e49\u6bcf\u9879\u7684\u63d0\u793a\u4fe1\u606f"),e.qZA(),e.TgZ(207,"td")(208,"code"),e._uU(209,"string[]"),e.qZA()(),e.TgZ(210,"td")(211,"code"),e._uU(212,"[]"),e.qZA()(),e._UZ(213,"td"),e.qZA(),e.TgZ(214,"tr")(215,"td")(216,"code"),e._uU(217,"[ngModel]"),e.qZA()(),e.TgZ(218,"td"),e._uU(219,"\u5f53\u524d\u6570\uff0c\u53ef\u4ee5\u53cc\u5411\u7ed1\u5b9a"),e.qZA(),e.TgZ(220,"td")(221,"code"),e._uU(222,"number"),e.qZA()(),e.TgZ(223,"td")(224,"code"),e._uU(225,"0"),e.qZA()(),e._UZ(226,"td"),e.qZA(),e.TgZ(227,"tr")(228,"td")(229,"code"),e._uU(230,"(ngModelChange)"),e.qZA()(),e.TgZ(231,"td"),e._uU(232,"\u5f53\u524d\u6570\u6539\u53d8\u65f6\u7684\u56de\u8c03"),e.qZA(),e.TgZ(233,"td")(234,"code"),e._uU(235,"EventEmitter<number>"),e.qZA()(),e.TgZ(236,"td"),e._uU(237,"-"),e.qZA(),e._UZ(238,"td"),e.qZA(),e.TgZ(239,"tr")(240,"td")(241,"code"),e._uU(242,"(nzOnBlur)"),e.qZA()(),e.TgZ(243,"td"),e._uU(244,"\u5931\u53bb\u7126\u70b9\u65f6\u7684\u56de\u8c03"),e.qZA(),e.TgZ(245,"td")(246,"code"),e._uU(247,"EventEmitter<FocusEvent>"),e.qZA()(),e.TgZ(248,"td"),e._uU(249,"-"),e.qZA(),e._UZ(250,"td"),e.qZA(),e.TgZ(251,"tr")(252,"td")(253,"code"),e._uU(254,"(nzOnFocus)"),e.qZA()(),e.TgZ(255,"td"),e._uU(256,"\u83b7\u53d6\u7126\u70b9\u65f6\u7684\u56de\u8c03"),e.qZA(),e.TgZ(257,"td")(258,"code"),e._uU(259,"EventEmitter<FocusEvent>"),e.qZA()(),e.TgZ(260,"td"),e._uU(261,"-"),e.qZA(),e._UZ(262,"td"),e.qZA(),e.TgZ(263,"tr")(264,"td")(265,"code"),e._uU(266,"(nzOnHoverChange)"),e.qZA()(),e.TgZ(267,"td"),e._uU(268,"\u9f20\u6807\u7ecf\u8fc7\u65f6\u6570\u503c\u53d8\u5316\u7684\u56de\u8c03"),e.qZA(),e.TgZ(269,"td")(270,"code"),e._uU(271,"EventEmitter<number>"),e.qZA()(),e.TgZ(272,"td"),e._uU(273,"-"),e.qZA(),e._UZ(274,"td"),e.qZA(),e.TgZ(275,"tr")(276,"td")(277,"code"),e._uU(278,"(nzOnKeyDown)"),e.qZA()(),e.TgZ(279,"td"),e._uU(280,"\u6309\u952e\u56de\u8c03"),e.qZA(),e.TgZ(281,"td")(282,"code"),e._uU(283,"EventEmitter<KeyboardEvent>"),e.qZA()(),e.TgZ(284,"td"),e._uU(285,"-"),e.qZA(),e._UZ(286,"td"),e.qZA()()(),e.TgZ(287,"h4",40)(288,"span"),e._uU(289,"\u65b9\u6cd5"),e.qZA(),e.TgZ(290,"a",41),e._uU(291,"#"),e.qZA()(),e.TgZ(292,"table")(293,"thead")(294,"tr")(295,"th"),e._uU(296,"\u540d\u79f0"),e.qZA(),e.TgZ(297,"th"),e._uU(298,"\u63cf\u8ff0"),e.qZA()()(),e.TgZ(299,"tbody")(300,"tr")(301,"td"),e._uU(302,"blur()"),e.qZA(),e.TgZ(303,"td"),e._uU(304,"\u79fb\u9664\u7126\u70b9"),e.qZA()(),e.TgZ(305,"tr")(306,"td"),e._uU(307,"focus()"),e.qZA(),e.TgZ(308,"td"),e._uU(309,"\u83b7\u53d6\u7126\u70b9"),e.qZA()()()(),e.fQ9(),e.qZA()()),2&o&&(e.xp6(),e.Q6J("nzOffsetTop",16),e.xp6(),e.Q6J("nzAffix",!1),e.xp6(52),e.Q6J("nzGutter",16),e.xp6(),e.Q6J("nzXl",12)("nzSpan",24),e.xp6(),e.Q6J("nzId","components-rate-demo-basic")("nzLink","components-rate-demo-basic")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/rate/demo/basic.md"),e.xp6(5),e.Q6J("nzId","components-rate-demo-text")("nzLink","components-rate-demo-text")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/rate/demo/text.md"),e.xp6(5),e.Q6J("nzId","components-rate-demo-clear")("nzLink","components-rate-demo-clear")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/rate/demo/clear.md"),e.xp6(5),e.Q6J("nzId","components-rate-demo-customize")("nzLink","components-rate-demo-customize")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/rate/demo/customize.md"),e.xp6(5),e.Q6J("nzXl",12)("nzSpan",24),e.xp6(),e.Q6J("nzId","components-rate-demo-half")("nzLink","components-rate-demo-half")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/rate/demo/half.md"),e.xp6(5),e.Q6J("nzId","components-rate-demo-disabled")("nzLink","components-rate-demo-disabled")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/rate/demo/disabled.md"),e.xp6(5),e.Q6J("nzId","components-rate-demo-character")("nzLink","components-rate-demo-character")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/rate/demo/character.md"))},dependencies:[_.G,f.IT,f.Fp,D.$,A.t3,A.SK,h.SY,d.Ls,R,N,E,y,H,w,I],encapsulation:2})}return t})(),ue=(()=>{class t{constructor(){this.expanded=!1}goLink(n){window&&(window.location.hash=n)}expandAllCode(){this.expanded=!this.expanded,this.codeBoxes.forEach(n=>{n.nzExpanded=this.expanded,n.expandCode(this.expanded),n.check()})}static#e=this.\u0275fac=function(o){return new(o||t)};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["nz-demo-rate"]],viewQuery:function(o,a){if(1&o&&e.Gf(_.G,5),2&o){let r;e.iGM(r=e.CRH())&&(a.codeBoxes=r)}},decls:308,vars:35,consts:[[1,"toc-affix",3,"nzOffsetTop"],["nzShowInkInFixed","",3,"nzAffix","nzClick"],["nzHref","#components-rate-demo-basic","nzTitle","Basic"],["nzHref","#components-rate-demo-half","nzTitle","Half star"],["nzHref","#components-rate-demo-text","nzTitle","Show copywriting"],["nzHref","#components-rate-demo-disabled","nzTitle","Read only"],["nzHref","#components-rate-demo-clear","nzTitle","Clear star"],["nzHref","#components-rate-demo-character","nzTitle","Other Character"],["nzHref","#components-rate-demo-customize","nzTitle","Customize Character"],["nzHref","#api","nzTitle","API"],[1,"markdown"],[1,"subtitle"],[1,"widget"],["aria-label","Edit this page on Github","href","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/rate/doc/index.en-US.md","target","_blank","rel","noopener noreferrer",1,"edit-button"],["nz-icon","","nzType","edit"],["id","when-to-use"],["onclick","window.location.hash = 'when-to-use'",1,"anchor"],[1,"language-ts"],[1,"token","keyword"],[1,"token","punctuation"],[1,"token","string"],["nz-icon","","nzType","appstore","nz-tooltip","","nzTooltipTitle","Expand All Code",1,"code-box-expand-trigger",3,"click"],["nz-row","",3,"nzGutter"],["nz-col","",3,"nzXl","nzSpan"],["nzTitle","Basic","nzSelector","nz-demo-rate-basic","nzGenerateCommand","ng g ng-zorro-antd:rate-basic <name>","nzComponentName","NzDemoRateBasicComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["demo",""],["intro",""],["nzTitle","Show copywriting","nzSelector","nz-demo-rate-text","nzGenerateCommand","ng g ng-zorro-antd:rate-text <name>","nzComponentName","NzDemoRateTextComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","Clear star","nzSelector","nz-demo-rate-clear","nzGenerateCommand","ng g ng-zorro-antd:rate-clear <name>","nzComponentName","NzDemoRateClearComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","Customize Character","nzSelector","nz-demo-rate-customize","nzGenerateCommand","ng g ng-zorro-antd:rate-customize <name>","nzComponentName","NzDemoRateCustomizeComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","Half star","nzSelector","nz-demo-rate-half","nzGenerateCommand","ng g ng-zorro-antd:rate-half <name>","nzComponentName","NzDemoRateHalfComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","Read only","nzSelector","nz-demo-rate-disabled","nzGenerateCommand","ng g ng-zorro-antd:rate-disabled <name>","nzComponentName","NzDemoRateDisabledComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","Other Character","nzSelector","nz-demo-rate-character","nzGenerateCommand","ng g ng-zorro-antd:rate-character <name>","nzComponentName","NzDemoRateCharacterComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],[1,"markdown","api-container"],["id","api"],["onclick","window.location.hash = 'api'",1,"anchor"],["id","nz-rate:standalone"],[1,"api-type-label","component"],[1,"api-type-label","standalone"],["onclick","window.location.hash = 'nz-rate:standalone'",1,"anchor"],["id","methods"],["onclick","window.location.hash = 'methods'",1,"anchor"]],template:function(o,a){1&o&&(e.TgZ(0,"article")(1,"nz-affix",0)(2,"nz-anchor",1),e.NdJ("nzClick",function(u){return a.goLink(u)}),e._UZ(3,"nz-link",2)(4,"nz-link",3)(5,"nz-link",4)(6,"nz-link",5)(7,"nz-link",6)(8,"nz-link",7)(9,"nz-link",8)(10,"nz-link",9),e.qZA()(),e.TgZ(11,"section",10)(12,"h1"),e._uU(13,"Rate"),e._UZ(14,"span",11)(15,"span",12),e.TgZ(16,"a",13),e._UZ(17,"span",14),e.qZA()(),e.TgZ(18,"section",10),e.IAx(),e.TgZ(19,"p"),e._uU(20,"Rate component."),e.qZA(),e.TgZ(21,"h2",15)(22,"span"),e._uU(23,"When To Use"),e.qZA(),e.TgZ(24,"a",16),e._uU(25,"#"),e.qZA()(),e.TgZ(26,"ul")(27,"li"),e._uU(28,"Show evaluation."),e.qZA(),e.TgZ(29,"li"),e._uU(30,"A quick rating operation on something."),e.qZA()(),e.TgZ(31,"pre",17)(32,"code")(33,"span",18),e._uU(34,"import"),e.qZA(),e._uU(35," "),e.TgZ(36,"span",19),e._uU(37,"{"),e.qZA(),e._uU(38," NzRateModule "),e.TgZ(39,"span",19),e._uU(40,"}"),e.qZA(),e._uU(41," "),e.TgZ(42,"span",18),e._uU(43,"from"),e.qZA(),e._uU(44," "),e.TgZ(45,"span",20),e._uU(46,"'ng-zorro-antd/rate'"),e.qZA(),e.TgZ(47,"span",19),e._uU(48,";"),e.qZA()()(),e.fQ9(),e.qZA(),e.TgZ(49,"h2")(50,"span"),e._uU(51,"Examples"),e.qZA(),e.TgZ(52,"span",21),e.NdJ("click",function(){return a.expandAllCode()}),e.qZA()()(),e.TgZ(53,"div",22)(54,"div",23)(55,"nz-code-box",24),e._UZ(56,"nz-demo-rate-basic",25),e.TgZ(57,"div",26),e.IAx(),e.TgZ(58,"p"),e._uU(59,"The simplest usage."),e.qZA(),e.fQ9(),e.qZA()(),e.TgZ(60,"nz-code-box",27),e._UZ(61,"nz-demo-rate-text",25),e.TgZ(62,"div",26),e.IAx(),e.TgZ(63,"p"),e._uU(64,"Add copywriting in rate components."),e.qZA(),e.fQ9(),e.qZA()(),e.TgZ(65,"nz-code-box",28),e._UZ(66,"nz-demo-rate-clear",25),e.TgZ(67,"div",26),e.IAx(),e.TgZ(68,"p"),e._uU(69,"Support set allow to clear star when click again."),e.qZA(),e.fQ9(),e.qZA()(),e.TgZ(70,"nz-code-box",29),e._UZ(71,"nz-demo-rate-customize",25),e.TgZ(72,"div",26),e.IAx(),e.TgZ(73,"p"),e._uU(74,"Each character can be customized by index."),e.qZA(),e.fQ9(),e.qZA()()(),e.TgZ(75,"div",23)(76,"nz-code-box",30),e._UZ(77,"nz-demo-rate-half",25),e.TgZ(78,"div",26),e.IAx(),e.TgZ(79,"p"),e._uU(80,"Support select half star."),e.qZA(),e.fQ9(),e.qZA()(),e.TgZ(81,"nz-code-box",31),e._UZ(82,"nz-demo-rate-disabled",25),e.TgZ(83,"div",26),e.IAx(),e.TgZ(84,"p"),e._uU(85,"Read only, can't use mouse to interact."),e.qZA(),e.fQ9(),e.qZA()(),e.TgZ(86,"nz-code-box",32),e._UZ(87,"nz-demo-rate-character",25),e.TgZ(88,"div",26),e.IAx(),e.TgZ(89,"p"),e._uU(90,"Replace the default star to other character like alphabet, digit, iconfont or even Chinese word."),e.qZA(),e.fQ9(),e.qZA()()()(),e.TgZ(91,"section",33),e.IAx(),e.TgZ(92,"h2",34)(93,"span"),e._uU(94,"API"),e.qZA(),e.TgZ(95,"a",35),e._uU(96,"#"),e.qZA()(),e.TgZ(97,"h3",36)(98,"span"),e._uU(99,"nz-rate"),e.qZA(),e.TgZ(100,"label",37),e._uU(101,"component"),e.qZA(),e.TgZ(102,"label",38),e._uU(103,"standalone"),e.qZA(),e.TgZ(104,"a",39),e._uU(105,"#"),e.qZA()(),e.TgZ(106,"table")(107,"thead")(108,"tr")(109,"th"),e._uU(110,"Property"),e.qZA(),e.TgZ(111,"th"),e._uU(112,"Description"),e.qZA(),e.TgZ(113,"th"),e._uU(114,"type"),e.qZA(),e.TgZ(115,"th"),e._uU(116,"Default"),e.qZA(),e.TgZ(117,"th"),e._uU(118,"Global Config"),e.qZA()()(),e.TgZ(119,"tbody")(120,"tr")(121,"td")(122,"code"),e._uU(123,"[nzAllowClear]"),e.qZA()(),e.TgZ(124,"td"),e._uU(125,"whether to allow clear when click again"),e.qZA(),e.TgZ(126,"td")(127,"code"),e._uU(128,"boolean"),e.qZA()(),e.TgZ(129,"td")(130,"code"),e._uU(131,"true"),e.qZA()(),e.TgZ(132,"td"),e._uU(133,"\u2705"),e.qZA()(),e.TgZ(134,"tr")(135,"td")(136,"code"),e._uU(137,"[nzAllowHalf]"),e.qZA()(),e.TgZ(138,"td"),e._uU(139,"whether to allow semi selection"),e.qZA(),e.TgZ(140,"td")(141,"code"),e._uU(142,"boolean"),e.qZA()(),e.TgZ(143,"td")(144,"code"),e._uU(145,"false"),e.qZA()(),e.TgZ(146,"td"),e._uU(147,"\u2705"),e.qZA()(),e.TgZ(148,"tr")(149,"td")(150,"code"),e._uU(151,"[nzAutoFocus]"),e.qZA()(),e.TgZ(152,"td"),e._uU(153,"get focus when component mounted"),e.qZA(),e.TgZ(154,"td")(155,"code"),e._uU(156,"boolean"),e.qZA()(),e.TgZ(157,"td")(158,"code"),e._uU(159,"false"),e.qZA()(),e._UZ(160,"td"),e.qZA(),e.TgZ(161,"tr")(162,"td")(163,"code"),e._uU(164,"[nzCharacter]"),e.qZA()(),e.TgZ(165,"td"),e._uU(166,"custom character of rate"),e.qZA(),e.TgZ(167,"td")(168,"code"),e._uU(169,"TemplateRef<void>"),e.qZA()(),e.TgZ(170,"td")(171,"code"),e._uU(172,'<span nz-icon nzType="star"></span>'),e.qZA()(),e._UZ(173,"td"),e.qZA(),e.TgZ(174,"tr")(175,"td")(176,"code"),e._uU(177,"[nzCount]"),e.qZA()(),e.TgZ(178,"td"),e._uU(179,"star count"),e.qZA(),e.TgZ(180,"td")(181,"code"),e._uU(182,"number"),e.qZA()(),e.TgZ(183,"td")(184,"code"),e._uU(185,"5"),e.qZA()(),e._UZ(186,"td"),e.qZA(),e.TgZ(187,"tr")(188,"td")(189,"code"),e._uU(190,"[nzDisabled]"),e.qZA()(),e.TgZ(191,"td"),e._uU(192,"read only, unable to interact"),e.qZA(),e.TgZ(193,"td")(194,"code"),e._uU(195,"boolean"),e.qZA()(),e.TgZ(196,"td")(197,"code"),e._uU(198,"false"),e.qZA()(),e._UZ(199,"td"),e.qZA(),e.TgZ(200,"tr")(201,"td")(202,"code"),e._uU(203,"[nzTooltips]"),e.qZA()(),e.TgZ(204,"td"),e._uU(205,"Customize tooltip by each character"),e.qZA(),e.TgZ(206,"td")(207,"code"),e._uU(208,"string[]"),e.qZA()(),e.TgZ(209,"td")(210,"code"),e._uU(211,"[]"),e.qZA()(),e._UZ(212,"td"),e.qZA(),e.TgZ(213,"tr")(214,"td")(215,"code"),e._uU(216,"[ngModel]"),e.qZA()(),e.TgZ(217,"td"),e._uU(218,"current value , double binding"),e.qZA(),e.TgZ(219,"td")(220,"code"),e._uU(221,"number"),e.qZA()(),e.TgZ(222,"td"),e._uU(223,"-"),e.qZA(),e._UZ(224,"td"),e.qZA(),e.TgZ(225,"tr")(226,"td")(227,"code"),e._uU(228,"(ngModelChange)"),e.qZA()(),e.TgZ(229,"td"),e._uU(230,"callback when select value"),e.qZA(),e.TgZ(231,"td")(232,"code"),e._uU(233,"EventEmitter<number>"),e.qZA()(),e.TgZ(234,"td"),e._uU(235,"-"),e.qZA(),e._UZ(236,"td"),e.qZA(),e.TgZ(237,"tr")(238,"td")(239,"code"),e._uU(240,"(nzOnBlur)"),e.qZA()(),e.TgZ(241,"td"),e._uU(242,"callback when component lose focus"),e.qZA(),e.TgZ(243,"td")(244,"code"),e._uU(245,"EventEmitter<FocusEvent>"),e.qZA()(),e.TgZ(246,"td"),e._uU(247,"-"),e.qZA(),e._UZ(248,"td"),e.qZA(),e.TgZ(249,"tr")(250,"td")(251,"code"),e._uU(252,"(nzOnFocus)"),e.qZA()(),e.TgZ(253,"td"),e._uU(254,"callback when component get focus"),e.qZA(),e.TgZ(255,"td")(256,"code"),e._uU(257,"EventEmitter<FocusEvent>"),e.qZA()(),e.TgZ(258,"td"),e._uU(259,"-"),e.qZA(),e._UZ(260,"td"),e.qZA(),e.TgZ(261,"tr")(262,"td")(263,"code"),e._uU(264,"(nzOnHoverChange)"),e.qZA()(),e.TgZ(265,"td"),e._uU(266,"callback when hover item"),e.qZA(),e.TgZ(267,"td")(268,"code"),e._uU(269,"EventEmitter<number>"),e.qZA()(),e.TgZ(270,"td"),e._uU(271,"-"),e.qZA(),e._UZ(272,"td"),e.qZA(),e.TgZ(273,"tr")(274,"td")(275,"code"),e._uU(276,"(nzOnKeyDown)"),e.qZA()(),e.TgZ(277,"td"),e._uU(278,"callback when keydown on component"),e.qZA(),e.TgZ(279,"td")(280,"code"),e._uU(281,"EventEmitter<KeyboardEvent>"),e.qZA()(),e.TgZ(282,"td"),e._uU(283,"-"),e.qZA(),e._UZ(284,"td"),e.qZA()()(),e.TgZ(285,"h4",40)(286,"span"),e._uU(287,"Methods"),e.qZA(),e.TgZ(288,"a",41),e._uU(289,"#"),e.qZA()(),e.TgZ(290,"table")(291,"thead")(292,"tr")(293,"th"),e._uU(294,"Name"),e.qZA(),e.TgZ(295,"th"),e._uU(296,"Description"),e.qZA()()(),e.TgZ(297,"tbody")(298,"tr")(299,"td"),e._uU(300,"blur()"),e.qZA(),e.TgZ(301,"td"),e._uU(302,"remove focus"),e.qZA()(),e.TgZ(303,"tr")(304,"td"),e._uU(305,"focus()"),e.qZA(),e.TgZ(306,"td"),e._uU(307,"get focus"),e.qZA()()()(),e.fQ9(),e.qZA()()),2&o&&(e.xp6(),e.Q6J("nzOffsetTop",16),e.xp6(),e.Q6J("nzAffix",!1),e.xp6(51),e.Q6J("nzGutter",16),e.xp6(),e.Q6J("nzXl",12)("nzSpan",24),e.xp6(),e.Q6J("nzId","components-rate-demo-basic")("nzLink","components-rate-demo-basic")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/rate/demo/basic.md"),e.xp6(5),e.Q6J("nzId","components-rate-demo-text")("nzLink","components-rate-demo-text")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/rate/demo/text.md"),e.xp6(5),e.Q6J("nzId","components-rate-demo-clear")("nzLink","components-rate-demo-clear")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/rate/demo/clear.md"),e.xp6(5),e.Q6J("nzId","components-rate-demo-customize")("nzLink","components-rate-demo-customize")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/rate/demo/customize.md"),e.xp6(5),e.Q6J("nzXl",12)("nzSpan",24),e.xp6(),e.Q6J("nzId","components-rate-demo-half")("nzLink","components-rate-demo-half")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/rate/demo/half.md"),e.xp6(5),e.Q6J("nzId","components-rate-demo-disabled")("nzLink","components-rate-demo-disabled")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/rate/demo/disabled.md"),e.xp6(5),e.Q6J("nzId","components-rate-demo-character")("nzLink","components-rate-demo-character")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/rate/demo/character.md"))},dependencies:[_.G,f.IT,f.Fp,D.$,A.t3,A.SK,h.SY,d.Ls,R,N,E,y,H,w,I],encapsulation:2})}return t})(),ie=(()=>{class t{static#e=this.\u0275fac=function(o){return new(o||t)};static#t=this.\u0275mod=e.oAB({type:t});static#n=this.\u0275inj=e.cJS({imports:[B.G,Y,k.Bz.forChild([{path:"en",component:ue},{path:"zh",component:re}])]})}return t})()}}]);