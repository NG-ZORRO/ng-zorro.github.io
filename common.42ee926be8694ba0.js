"use strict";(self.webpackChunkng_zorro_antd_doc=self.webpackChunkng_zorro_antd_doc||[]).push([[8592],{207:(j,w,i)=>{i.d(w,{Dg:()=>a,MO:()=>z,l5:()=>d,lt:()=>p});var t=i(6814),n=i(9212),h=i(2755),B=i(266),e=i(227),I=i(7582),E=i(4190),S=i(8645),C=i(9773),b=i(2181),A=i(7921),M=i(5319),D=i(6700),P=i(9388);const R=["*"];function f(o,r){}function O(o,r){if(1&o&&(n.TgZ(0,"span",2),n.YNc(1,f,0,0,"ng-template",3),n._UZ(2,"span",4),n.qZA()),2&o){const s=n.oxw(),g=n.MAs(4);n.Q6J("nzDropdownMenu",s.nzOverlay),n.xp6(),n.Q6J("ngTemplateOutlet",g)}}function T(o,r){}function k(o,r){if(1&o&&n.YNc(0,T,0,0,"ng-template",3),2&o){n.oxw();const s=n.MAs(4);n.Q6J("ngTemplateOutlet",s)}}function U(o,r){if(1&o&&(n.ynx(0),n._uU(1),n.BQk()),2&o){const s=n.oxw(2);n.xp6(),n.hij(" ",s.nzBreadCrumbComponent.nzSeparator," ")}}function Z(o,r){if(1&o&&(n.TgZ(0,"nz-breadcrumb-separator"),n.YNc(1,U,2,1,"ng-container",5),n.qZA()),2&o){const s=n.oxw();n.xp6(),n.Q6J("nzStringTemplateOutlet",s.nzBreadCrumbComponent.nzSeparator)}}function K(o,r){1&o&&(n.TgZ(0,"span",6),n.Hsn(1),n.qZA())}const l=(o,r)=>r.url;function L(o,r){if(1&o){const s=n.EpF();n.TgZ(0,"nz-breadcrumb-item")(1,"a",0),n.NdJ("click",function(x){const _=n.CHM(s).$implicit,N=n.oxw(2);return n.KtG(N.navigate(_.url,x))}),n._uU(2),n.qZA()()}if(2&o){const s=r.$implicit;n.xp6(),n.uIk("href",s.url,n.LSH),n.xp6(),n.Oqu(s.label)}}function c(o,r){if(1&o&&n.SjG(0,L,3,2,"nz-breadcrumb-item",null,l),2&o){const s=n.oxw();n.wJu(s.breadcrumbs)}}let d=(()=>{class o{static#t=this.\u0275fac=function(g){return new(g||o)};static#n=this.\u0275cmp=n.Xpm({type:o,selectors:[["nz-breadcrumb-separator"]],hostAttrs:[1,"ant-breadcrumb-separator"],exportAs:["nzBreadcrumbSeparator"],standalone:!0,features:[n.jDz],ngContentSelectors:R,decls:1,vars:0,template:function(g,x){1&g&&(n.F$t(),n.Hsn(0))},encapsulation:2})}return o})();class m{}let z=(()=>{class o{constructor(s){this.nzBreadCrumbComponent=s}static#t=this.\u0275fac=function(g){return new(g||o)(n.Y36(m))};static#n=this.\u0275cmp=n.Xpm({type:o,selectors:[["nz-breadcrumb-item"]],inputs:{nzOverlay:"nzOverlay"},exportAs:["nzBreadcrumbItem"],standalone:!0,features:[n.jDz],ngContentSelectors:R,decls:5,vars:2,consts:[["class","ant-breadcrumb-overlay-link","nz-dropdown","",3,"nzDropdownMenu"],["noMenuTpl",""],["nz-dropdown","",1,"ant-breadcrumb-overlay-link",3,"nzDropdownMenu"],[3,"ngTemplateOutlet"],["nz-icon","","nzType","down"],[4,"nzStringTemplateOutlet"],[1,"ant-breadcrumb-link"]],template:function(g,x){1&g&&(n.F$t(),n.YNc(0,O,3,2,"span",0)(1,k,1,1)(2,Z,2,1,"nz-breadcrumb-separator")(3,K,2,0,"ng-template",null,1,n.W1O)),2&g&&(n.um2(0,x.nzOverlay?0:1),n.xp6(2),n.um2(2,x.nzBreadCrumbComponent.nzSeparator?2:-1))},dependencies:[t.tP,d,B.b1,B.cm,e.PV,e.Ls,h.T,h.f],encapsulation:2,changeDetection:0})}return o})(),a=(()=>{class o{constructor(s,g,x,W,_){this.injector=s,this.cdr=g,this.elementRef=x,this.renderer=W,this.directionality=_,this.nzAutoGenerate=!1,this.nzSeparator="/",this.nzRouteLabel="breadcrumb",this.nzRouteLabelFn=N=>N,this.breadcrumbs=[],this.dir="ltr",this.destroy$=new S.x}ngOnInit(){this.nzAutoGenerate&&this.registerRouterChange(),this.directionality.change?.pipe((0,C.R)(this.destroy$)).subscribe(s=>{this.dir=s,this.prepareComponentForRtl(),this.cdr.detectChanges()}),this.dir=this.directionality.value,this.prepareComponentForRtl()}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}navigate(s,g){g.preventDefault(),this.injector.get(E.F0).navigateByUrl(s)}registerRouterChange(){try{const s=this.injector.get(E.F0),g=this.injector.get(E.gz);s.events.pipe((0,b.h)(x=>x instanceof E.m2),(0,C.R)(this.destroy$),(0,A.O)(!0)).subscribe(()=>{this.breadcrumbs=this.getBreadcrumbs(g.root),this.cdr.markForCheck()})}catch{throw new Error(`${M.Bq} You should import RouterModule if you want to use 'NzAutoGenerate'.`)}}getBreadcrumbs(s,g="",x=[]){const W=s.children;if(0===W.length)return x;for(const _ of W)if(_.outlet===E.eC){const N=_.snapshot.url.map(v=>v.path).filter(v=>v).join("/"),u=N?`${g}/${N}`:g,y=this.nzRouteLabelFn(_.snapshot.data[this.nzRouteLabel]);return N&&y&&x.push({label:y,params:_.snapshot.params,url:u}),this.getBreadcrumbs(_,u,x)}return x}prepareComponentForRtl(){"rtl"===this.dir?this.renderer.addClass(this.elementRef.nativeElement,"ant-breadcrumb-rtl"):this.renderer.removeClass(this.elementRef.nativeElement,"ant-breadcrumb-rtl")}static#t=this.\u0275fac=function(g){return new(g||o)(n.Y36(n.zs3),n.Y36(n.sBO),n.Y36(n.SBq),n.Y36(n.Qsj),n.Y36(P.Is,8))};static#n=this.\u0275cmp=n.Xpm({type:o,selectors:[["nz-breadcrumb"]],hostAttrs:[1,"ant-breadcrumb"],inputs:{nzAutoGenerate:"nzAutoGenerate",nzSeparator:"nzSeparator",nzRouteLabel:"nzRouteLabel",nzRouteLabelFn:"nzRouteLabelFn"},exportAs:["nzBreadcrumb"],standalone:!0,features:[n._Bn([{provide:m,useExisting:o}]),n.jDz],ngContentSelectors:R,decls:2,vars:1,consts:[[3,"click"]],template:function(g,x){1&g&&(n.F$t(),n.Hsn(0),n.YNc(1,c,2,0)),2&g&&(n.xp6(),n.um2(1,x.nzAutoGenerate&&x.breadcrumbs.length?1:-1))},dependencies:[z],encapsulation:2,changeDetection:0})}return(0,I.gn)([(0,D.yF)()],o.prototype,"nzAutoGenerate",void 0),o})(),p=(()=>{class o{static#t=this.\u0275fac=function(g){return new(g||o)};static#n=this.\u0275mod=n.oAB({type:o});static#e=this.\u0275inj=n.cJS({imports:[a,z]})}return o})()},9079:(j,w,i)=>{i.d(w,{S:()=>S,g:()=>E});var t=i(7582),n=i(9212),h=i(2755),B=i(6700);function e(C,b){if(1&C&&(n.ynx(0),n._uU(1),n.BQk()),2&C){const A=n.oxw(2);n.xp6(),n.Oqu(A.nzText)}}function I(C,b){if(1&C&&(n.TgZ(0,"span",1),n.YNc(1,e,2,1,"ng-container",2),n.qZA()),2&C){const A=n.oxw();n.xp6(),n.Q6J("nzStringTemplateOutlet",A.nzText)}}let E=(()=>{class C{constructor(){this.nzType="horizontal",this.nzOrientation="center",this.nzDashed=!1,this.nzPlain=!1}static#t=this.\u0275fac=function(M){return new(M||C)};static#n=this.\u0275cmp=n.Xpm({type:C,selectors:[["nz-divider"]],hostAttrs:[1,"ant-divider"],hostVars:16,hostBindings:function(M,D){2&M&&n.ekj("ant-divider-horizontal","horizontal"===D.nzType)("ant-divider-vertical","vertical"===D.nzType)("ant-divider-with-text",D.nzText)("ant-divider-plain",D.nzPlain)("ant-divider-with-text-left",D.nzText&&"left"===D.nzOrientation)("ant-divider-with-text-right",D.nzText&&"right"===D.nzOrientation)("ant-divider-with-text-center",D.nzText&&"center"===D.nzOrientation)("ant-divider-dashed",D.nzDashed)},inputs:{nzText:"nzText",nzType:"nzType",nzOrientation:"nzOrientation",nzDashed:"nzDashed",nzPlain:"nzPlain"},exportAs:["nzDivider"],standalone:!0,features:[n.jDz],decls:1,vars:1,consts:[["class","ant-divider-inner-text"],[1,"ant-divider-inner-text"],[4,"nzStringTemplateOutlet"]],template:function(M,D){1&M&&n.YNc(0,I,2,1,"span",0),2&M&&n.um2(0,D.nzText?0:-1)},dependencies:[h.T,h.f],encapsulation:2,changeDetection:0})}return(0,t.gn)([(0,B.yF)()],C.prototype,"nzDashed",void 0),(0,t.gn)([(0,B.yF)()],C.prototype,"nzPlain",void 0),C})(),S=(()=>{class C{static#t=this.\u0275fac=function(M){return new(M||C)};static#n=this.\u0275mod=n.oAB({type:C});static#e=this.\u0275inj=n.cJS({imports:[E]})}return C})()},6830:(j,w,i)=>{i.d(w,{JW:()=>g,_p:()=>W});var t=i(7582),n=i(6034),h=i(3651),B=i(6814),e=i(9212),I=i(8645),E=i(9773),S=i(1374),C=i(4716),b=i(4119),A=i(8923),M=i(2196),D=i(8381),P=i(2755),R=i(612),f=i(6700),O=i(7191),T=i(227),k=i(8332),U=i(9388),Z=i(1687),K=i(2987);const l=["okBtn"],L=["cancelBtn"];function c(_,N){1&_&&(e.TgZ(0,"div",15),e._UZ(1,"span",16),e.qZA())}function d(_,N){if(1&_&&(e.ynx(0),e._UZ(1,"span",18),e.BQk()),2&_){const u=N.$implicit;e.xp6(),e.Q6J("nzType",u||"exclamation-circle")}}function m(_,N){if(1&_&&(e.ynx(0),e.YNc(1,d,2,1,"ng-container",8),e.TgZ(2,"div",17),e._uU(3),e.qZA(),e.BQk()),2&_){const u=e.oxw(2);e.xp6(),e.Q6J("nzStringTemplateOutlet",u.nzIcon),e.xp6(2),e.Oqu(u.nzTitle)}}function z(_,N){if(1&_&&(e.ynx(0),e._uU(1),e.BQk()),2&_){const u=e.oxw(2);e.xp6(),e.Oqu(u.nzCancelText)}}function a(_,N){1&_&&(e.ynx(0),e._uU(1),e.ALo(2,"nzI18n"),e.BQk()),2&_&&(e.xp6(),e.Oqu(e.lcZ(2,1,"Modal.cancelText")))}function p(_,N){if(1&_&&(e.ynx(0),e._uU(1),e.BQk()),2&_){const u=e.oxw(2);e.xp6(),e.Oqu(u.nzOkText)}}function o(_,N){1&_&&(e.ynx(0),e._uU(1),e.ALo(2,"nzI18n"),e.BQk()),2&_&&(e.xp6(),e.Oqu(e.lcZ(2,1,"Modal.okText")))}function r(_,N){if(1&_){const u=e.EpF();e.TgZ(0,"div",2)(1,"div",3),e.YNc(2,c,2,0,"div",4),e.TgZ(3,"div",5)(4,"div")(5,"div",6)(6,"div",7),e.YNc(7,m,4,2,"ng-container",8),e.qZA(),e.TgZ(8,"div",9)(9,"button",10,11),e.NdJ("click",function(){e.CHM(u);const v=e.oxw();return e.KtG(v.onCancel())}),e.YNc(11,z,2,1,"ng-container",12)(12,a,3,3,"ng-container",12),e.qZA(),e.TgZ(13,"button",13,14),e.NdJ("click",function(){e.CHM(u);const v=e.oxw();return e.KtG(v.onConfirm())}),e.YNc(15,p,2,1,"ng-container",12)(16,o,3,3,"ng-container",12),e.qZA()()()()()()()}if(2&_){const u=e.oxw();e.ekj("ant-popover-rtl","rtl"===u.dir),e.Q6J("cdkTrapFocusAutoCapture",null!==u.nzAutoFocus)("ngClass",u._classMap)("ngStyle",u.nzOverlayStyle)("@.disabled",!(null==u.noAnimation||!u.noAnimation.nzNoAnimation))("nzNoAnimation",null==u.noAnimation?null:u.noAnimation.nzNoAnimation)("@zoomBigMotion","active"),e.xp6(2),e.Q6J("ngIf",u.nzPopconfirmShowArrow),e.xp6(5),e.Q6J("nzStringTemplateOutlet",u.nzTitle),e.xp6(2),e.Q6J("nzSize","small"),e.uIk("cdkFocusInitial","cancel"===u.nzAutoFocus||null),e.xp6(2),e.Q6J("ngIf",u.nzCancelText),e.xp6(),e.Q6J("ngIf",!u.nzCancelText),e.xp6(),e.Q6J("nzSize","small")("nzType","danger"!==u.nzOkType?u.nzOkType:"primary")("nzDanger",u.nzOkDanger||"danger"===u.nzOkType)("nzLoading",u.confirmLoading),e.uIk("cdkFocusInitial","ok"===u.nzAutoFocus||null),e.xp6(2),e.Q6J("ngIf",u.nzOkText),e.xp6(),e.Q6J("ngIf",!u.nzOkText)}}let g=(()=>{class _ extends k.Mg{getProxyPropertyMap(){return{nzOkText:["nzOkText",()=>this.nzOkText],nzOkType:["nzOkType",()=>this.nzOkType],nzOkDanger:["nzOkDanger",()=>this.nzOkDanger],nzCancelText:["nzCancelText",()=>this.nzCancelText],nzBeforeConfirm:["nzBeforeConfirm",()=>this.nzBeforeConfirm],nzCondition:["nzCondition",()=>this.nzCondition],nzIcon:["nzIcon",()=>this.nzIcon],nzPopconfirmShowArrow:["nzPopconfirmShowArrow",()=>this.nzPopconfirmShowArrow],nzPopconfirmBackdrop:["nzBackdrop",()=>this.nzPopconfirmBackdrop],nzAutoFocus:["nzAutoFocus",()=>this.nzAutofocus],...super.getProxyPropertyMap()}}constructor(u,y,v,F,Q){super(u,y,v,F,Q),this._nzModuleName="popconfirm",this.trigger="click",this.placement="top",this.nzCondition=!1,this.nzPopconfirmShowArrow=!0,this.nzPopconfirmBackdrop=!1,this.nzAutofocus=null,this.visibleChange=new e.vpe,this.nzOnCancel=new e.vpe,this.nzOnConfirm=new e.vpe,this.componentRef=this.hostView.createComponent(x)}createComponent(){super.createComponent(),this.component.nzOnCancel.pipe((0,E.R)(this.destroy$)).subscribe(()=>{this.nzOnCancel.emit()}),this.component.nzOnConfirm.pipe((0,E.R)(this.destroy$)).subscribe(()=>{this.nzOnConfirm.emit()})}static#t=this.\u0275fac=function(y){return new(y||_)(e.Y36(e.SBq),e.Y36(e.s_b),e.Y36(e.Qsj),e.Y36(D.P,9),e.Y36(M.jY))};static#n=this.\u0275dir=e.lG2({type:_,selectors:[["","nz-popconfirm",""]],hostVars:2,hostBindings:function(y,v){2&y&&e.ekj("ant-popover-open",v.visible)},inputs:{arrowPointAtCenter:["nzPopconfirmArrowPointAtCenter","arrowPointAtCenter"],title:["nzPopconfirmTitle","title"],directiveTitle:["nz-popconfirm","directiveTitle"],trigger:["nzPopconfirmTrigger","trigger"],placement:["nzPopconfirmPlacement","placement"],origin:["nzPopconfirmOrigin","origin"],mouseEnterDelay:["nzPopconfirmMouseEnterDelay","mouseEnterDelay"],mouseLeaveDelay:["nzPopconfirmMouseLeaveDelay","mouseLeaveDelay"],overlayClassName:["nzPopconfirmOverlayClassName","overlayClassName"],overlayStyle:["nzPopconfirmOverlayStyle","overlayStyle"],visible:["nzPopconfirmVisible","visible"],nzOkText:"nzOkText",nzOkType:"nzOkType",nzOkDanger:"nzOkDanger",nzCancelText:"nzCancelText",nzBeforeConfirm:"nzBeforeConfirm",nzIcon:"nzIcon",nzCondition:"nzCondition",nzPopconfirmShowArrow:"nzPopconfirmShowArrow",nzPopconfirmBackdrop:"nzPopconfirmBackdrop",nzAutofocus:"nzAutofocus"},outputs:{visibleChange:"nzPopconfirmVisibleChange",nzOnCancel:"nzOnCancel",nzOnConfirm:"nzOnConfirm"},exportAs:["nzPopconfirm"],standalone:!0,features:[e.qOj]})}return(0,t.gn)([(0,f.yF)()],_.prototype,"arrowPointAtCenter",void 0),(0,t.gn)([(0,f.yF)()],_.prototype,"nzOkDanger",void 0),(0,t.gn)([(0,f.yF)()],_.prototype,"nzCondition",void 0),(0,t.gn)([(0,f.yF)()],_.prototype,"nzPopconfirmShowArrow",void 0),(0,t.gn)([(0,M.oS)()],_.prototype,"nzPopconfirmBackdrop",void 0),(0,t.gn)([(0,M.oS)()],_.prototype,"nzAutofocus",void 0),_})(),x=(()=>{class _ extends k.XK{constructor(u,y,v,F,Q){super(u,v,Q),this.elementRef=y,this.nzCondition=!1,this.nzPopconfirmShowArrow=!0,this.nzOkType="primary",this.nzOkDanger=!1,this.nzAutoFocus=null,this.nzBeforeConfirm=null,this.nzOnCancel=new I.x,this.nzOnConfirm=new I.x,this._trigger="click",this.elementFocusedBeforeModalWasOpened=null,this._prefix="ant-popover",this.confirmLoading=!1,this.document=F}ngOnDestroy(){super.ngOnDestroy(),this.nzOnCancel.complete(),this.nzOnConfirm.complete()}show(){this.nzCondition?this.onConfirm():(this.capturePreviouslyFocusedElement(),super.show())}hide(){super.hide(),this.restoreFocus()}handleConfirm(){this.nzOnConfirm.next(),super.hide()}onCancel(){this.nzOnCancel.next(),super.hide()}onConfirm(){if(this.nzBeforeConfirm){const u=(0,f.lN)(this.nzBeforeConfirm()).pipe((0,S.P)());this.confirmLoading=!0,u.pipe((0,C.x)(()=>{this.confirmLoading=!1,this.cdr.markForCheck()}),(0,E.R)(this.nzVisibleChange),(0,E.R)(this.destroy$)).subscribe(y=>{y&&this.handleConfirm()})}else this.handleConfirm()}capturePreviouslyFocusedElement(){this.document&&(this.elementFocusedBeforeModalWasOpened=this.document.activeElement)}restoreFocus(){const u=this.elementFocusedBeforeModalWasOpened;if(u&&"function"==typeof u.focus){const y=this.document.activeElement,v=this.elementRef.nativeElement;(!y||y===this.document.body||y===v||v.contains(y))&&u.focus()}}static#t=this.\u0275fac=function(y){return new(y||_)(e.Y36(e.sBO),e.Y36(e.SBq),e.Y36(U.Is,8),e.Y36(B.K0,8),e.Y36(D.P,9))};static#n=this.\u0275cmp=e.Xpm({type:_,selectors:[["nz-popconfirm"]],viewQuery:function(y,v){if(1&y&&(e.Gf(l,5,e.SBq),e.Gf(L,5,e.SBq)),2&y){let F;e.iGM(F=e.CRH())&&(v.okBtn=F),e.iGM(F=e.CRH())&&(v.cancelBtn=F)}},exportAs:["nzPopconfirmComponent"],standalone:!0,features:[e.qOj,e.jDz],decls:2,vars:6,consts:[["cdkConnectedOverlay","","nzConnectedOverlay","",3,"cdkConnectedOverlayHasBackdrop","cdkConnectedOverlayOrigin","cdkConnectedOverlayPositions","cdkConnectedOverlayOpen","cdkConnectedOverlayPush","nzArrowPointAtCenter","overlayOutsideClick","detach","positionChange"],["overlay","cdkConnectedOverlay"],["cdkTrapFocus","",1,"ant-popover",3,"cdkTrapFocusAutoCapture","ngClass","ngStyle","nzNoAnimation"],[1,"ant-popover-content"],["class","ant-popover-arrow",4,"ngIf"],[1,"ant-popover-inner"],[1,"ant-popover-inner-content"],[1,"ant-popover-message"],[4,"nzStringTemplateOutlet"],[1,"ant-popover-buttons"],["nz-button","",3,"nzSize","click"],["cancelBtn",""],[4,"ngIf"],["nz-button","",3,"nzSize","nzType","nzDanger","nzLoading","click"],["okBtn",""],[1,"ant-popover-arrow"],[1,"ant-popover-arrow-content"],[1,"ant-popover-message-title"],["nz-icon","","nzTheme","fill",3,"nzType"]],template:function(y,v){1&y&&(e.YNc(0,r,17,21,"ng-template",0,1,e.W1O),e.NdJ("overlayOutsideClick",function(Q){return v.onClickOutside(Q)})("detach",function(){return v.hide()})("positionChange",function(Q){return v.onPositionChange(Q)})),2&y&&e.Q6J("cdkConnectedOverlayHasBackdrop",v.nzBackdrop)("cdkConnectedOverlayOrigin",v.origin)("cdkConnectedOverlayPositions",v._positions)("cdkConnectedOverlayOpen",v._visible)("cdkConnectedOverlayPush",v.cdkConnectedOverlayPush)("nzArrowPointAtCenter",v.nzArrowPointAtCenter)},dependencies:[h.U8,h.pI,R.e4,R.hQ,n.rt,n.mK,B.mk,B.PC,D.P,B.O5,P.T,P.f,T.PV,T.Ls,b.sL,b.ix,Z.w,K.dQ,O.YI,O.o9],encapsulation:2,data:{animation:[A.$C]},changeDetection:0})}return _})(),W=(()=>{class _{static#t=this.\u0275fac=function(y){return new(y||_)};static#n=this.\u0275mod=e.oAB({type:_});static#e=this.\u0275inj=e.cJS({imports:[x]})}return _})()},9118:(j,w,i)=>{i.d(w,{KW:()=>m,wY:()=>c});var t=i(9212),n=i(7582),h=i(6814),B=i(6223),e=i(8645),I=i(9773),E=i(8923),S=i(2196),C=i(2755),b=i(6700),A=i(227),M=i(9388);const D=["itemLabels"],P=()=>({"ant-segmented-thumb":!0,"ant-segmented-thumb-motion":!0});function R(z,a){if(1&z){const p=t.EpF();t.TgZ(0,"div",3),t.NdJ("@thumbMotion.done",function(r){t.CHM(p);const s=t.oxw();return t.KtG(s.handleThumbAnimationDone(r))}),t.qZA()}if(2&z){const p=t.oxw();t.Q6J("ngClass",t.DdM(2,P))("@thumbMotion",p.animationState)}}function f(z,a){if(1&z&&(t.ynx(0),t._uU(1),t.BQk()),2&z){const p=t.oxw(2).$implicit;t.xp6(),t.hij(" ",p.label," ")}}const O=(z,a)=>({$implicit:z,index:a});function T(z,a){if(1&z&&(t.ynx(0),t.TgZ(1,"span",9),t._UZ(2,"span",10),t.qZA(),t.TgZ(3,"span"),t.YNc(4,f,2,1,"ng-container",11),t.qZA(),t.BQk()),2&z){const p=t.oxw(),o=p.$implicit,r=p.index,s=t.oxw();t.xp6(2),t.Q6J("nzType",o.icon),t.xp6(2),t.Q6J("nzStringTemplateOutlet",o.useTemplate&&s.nzLabelTemplate)("nzStringTemplateOutletContext",t.WLB(3,O,o,r))}}function k(z,a){if(1&z&&(t.ynx(0),t._uU(1),t.BQk()),2&z){const p=t.oxw(2).$implicit;t.xp6(),t.hij(" ",p.label," ")}}function U(z,a){if(1&z&&t.YNc(0,k,2,1,"ng-container",11),2&z){const p=t.oxw(),o=p.$implicit,r=p.index,s=t.oxw();t.Q6J("nzStringTemplateOutlet",o.useTemplate&&s.nzLabelTemplate)("nzStringTemplateOutletContext",t.WLB(2,O,o,r))}}const Z=(z,a)=>({"ant-segmented-item":!0,"ant-segmented-item-selected":z,"ant-segmented-item-disabled":a});function K(z,a){if(1&z){const p=t.EpF();t.TgZ(0,"label",3,4),t._UZ(2,"input",5),t.TgZ(3,"div",6),t.NdJ("click",function(){const r=t.CHM(p),s=r.$implicit,g=r.index,x=t.oxw();return t.KtG(!s.disabled&&x.handleOptionClick(g))}),t.YNc(4,T,5,6,"ng-container",7)(5,U,1,5,"ng-template",null,8,t.W1O),t.qZA()()}if(2&z){const p=a.$implicit,o=a.index,r=t.MAs(6),s=t.oxw();t.Q6J("ngClass",t.WLB(4,Z,o===s.selectedIndex,!!s.nzDisabled||p.disabled)),t.xp6(2),t.Q6J("checked",o===s.selectedIndex),t.xp6(2),t.Q6J("ngIf",p.icon)("ngIfElse",r)}}let c=(()=>{class z{constructor(p,o,r){this.nzConfigService=p,this.cdr=o,this.directionality=r,this._nzModuleName="segmented",this.nzBlock=!1,this.nzDisabled=!1,this.nzOptions=[],this.nzSize="default",this.nzLabelTemplate=null,this.nzValueChange=new t.vpe,this.dir="ltr",this.selectedIndex=0,this.transitionedToIndex=-1,this.animationState=null,this.normalizedOptions=[],this.destroy$=new e.x,this.onChange=()=>{},this.onTouched=()=>{},this.directionality.change?.pipe((0,I.R)(this.destroy$)).subscribe(s=>{this.dir=s,this.cdr.detectChanges()})}ngOnChanges(p){const{nzOptions:o}=p;o&&(this.normalizedOptions=function l(z){return z.map(a=>"string"==typeof a||"number"==typeof a?{label:`${a}`,value:a}:a)}(o.currentValue))}handleOptionClick(p){this.nzDisabled||(this.changeSelectedIndex(p),this.onChange(p),this.nzValueChange.emit(p))}handleThumbAnimationDone(p){"from"===p.fromState&&(this.selectedIndex=this.transitionedToIndex,this.transitionedToIndex=-1,this.animationState=null,this.cdr.detectChanges())}writeValue(p){"number"==typeof p&&p>-1&&(this.changeSelectedIndex(p),this.cdr.markForCheck())}registerOnChange(p){this.onChange=p}registerOnTouched(p){this.onTouched=p}changeSelectedIndex(p){!this.listOfOptions||-1===this.selectedIndex||this.selectedIndex===p||(this.animationState={value:"from",params:d(this.listOfOptions.get(this.selectedIndex).nativeElement)},this.selectedIndex=-1,this.cdr.detectChanges(),this.animationState={value:"to",params:d(this.listOfOptions.get(p).nativeElement)},this.transitionedToIndex=p,this.cdr.detectChanges())}static#t=this.\u0275fac=function(o){return new(o||z)(t.Y36(S.jY),t.Y36(t.sBO),t.Y36(M.Is,8))};static#n=this.\u0275cmp=t.Xpm({type:z,selectors:[["nz-segmented"]],viewQuery:function(o,r){if(1&o&&t.Gf(D,5,t.SBq),2&o){let s;t.iGM(s=t.CRH())&&(r.listOfOptions=s)}},hostAttrs:[1,"ant-segmented"],hostVars:10,hostBindings:function(o,r){2&o&&t.ekj("ant-segmented-disabled",!!r.nzDisabled)("ant-segmented-rtl","rtl"===r.dir)("ant-segmented-lg","large"===r.nzSize)("ant-segmented-sm","small"===r.nzSize)("ant-segmented-block",!!r.nzBlock)},inputs:{nzBlock:"nzBlock",nzDisabled:"nzDisabled",nzOptions:"nzOptions",nzSize:"nzSize",nzLabelTemplate:"nzLabelTemplate"},outputs:{nzValueChange:"nzValueChange"},exportAs:["nzSegmented"],standalone:!0,features:[t._Bn([{provide:B.JU,useExisting:(0,t.Gpc)(()=>z),multi:!0}]),t.TTD,t.jDz],decls:3,vars:2,consts:[[1,"ant-segmented-group"],[3,"ngClass",4,"ngIf"],[3,"ngClass",4,"ngFor","ngForOf"],[3,"ngClass"],["itemLabels",""],["type","radio",1,"ant-segmented-item-input",3,"checked"],[1,"ant-segmented-item-label",3,"click"],[4,"ngIf","ngIfElse"],["else_template",""],[1,"ant-segmented-item-icon"],["nz-icon","",3,"nzType"],[4,"nzStringTemplateOutlet","nzStringTemplateOutletContext"]],template:function(o,r){1&o&&(t.TgZ(0,"div",0),t.YNc(1,R,1,3,"div",1)(2,K,7,7,"label",2),t.qZA()),2&o&&(t.xp6(),t.Q6J("ngIf",r.animationState),t.xp6(),t.Q6J("ngForOf",r.normalizedOptions))},dependencies:[h.O5,h.mk,h.sg,A.PV,A.Ls,C.T,C.f],encapsulation:2,data:{animation:[E.Tw]},changeDetection:0})}return(0,n.gn)([(0,b.yF)()],z.prototype,"nzBlock",void 0),(0,n.gn)([(0,b.yF)()],z.prototype,"nzDisabled",void 0),(0,n.gn)([(0,S.oS)()],z.prototype,"nzSize",void 0),z})();function d(z){return{transform:z.offsetLeft,width:z.clientWidth}}let m=(()=>{class z{static#t=this.\u0275fac=function(o){return new(o||z)};static#n=this.\u0275mod=t.oAB({type:z});static#e=this.\u0275inj=t.cJS({imports:[c]})}return z})()},7818:(j,w,i)=>{i.d(w,{AD:()=>O,H0:()=>K,Ql:()=>U,Xw:()=>f,ng:()=>Z,yg:()=>k,yx:()=>T});var t=i(6814),n=i(9212),h=i(6700),B=i(7582);const e=["nzType","button"],I=["nzType","avatar"],E=["nzType","input"],S=["nzType","image"];function C(l,L){if(1&l&&(n.TgZ(0,"div",5),n._UZ(1,"nz-skeleton-element",6),n.qZA()),2&l){const c=n.oxw(2);n.xp6(),n.Q6J("nzSize",c.avatar.size||"default")("nzShape",c.avatar.shape||"circle")}}function b(l,L){if(1&l&&n._UZ(0,"h3",7),2&l){const c=n.oxw(2);n.Udp("width",c.toCSSUnit(c.title.width))}}function A(l,L){if(1&l&&n._UZ(0,"li"),2&l){const c=L.index,d=n.oxw(3);n.Udp("width",d.toCSSUnit(d.widthList[c]))}}function M(l,L){if(1&l&&(n.TgZ(0,"ul",8),n.YNc(1,A,1,2,"li",9),n.qZA()),2&l){const c=n.oxw(2);n.xp6(),n.Q6J("ngForOf",c.rowsList)}}function D(l,L){if(1&l&&(n.ynx(0),n.YNc(1,C,2,2,"div",1),n.TgZ(2,"div",2),n.YNc(3,b,1,2,"h3",3)(4,M,2,1,"ul",4),n.qZA(),n.BQk()),2&l){const c=n.oxw();n.xp6(),n.Q6J("ngIf",!!c.nzAvatar),n.xp6(2),n.Q6J("ngIf",!!c.nzTitle),n.xp6(),n.Q6J("ngIf",!!c.nzParagraph)}}function P(l,L){1&l&&(n.ynx(0),n.Hsn(1),n.BQk())}const R=["*"];let f=(()=>{class l{constructor(){this.nzActive=!1,this.nzBlock=!1}static#t=this.\u0275fac=function(d){return new(d||l)};static#n=this.\u0275dir=n.lG2({type:l,selectors:[["nz-skeleton-element"]],hostAttrs:[1,"ant-skeleton","ant-skeleton-element"],hostVars:4,hostBindings:function(d,m){2&d&&n.ekj("ant-skeleton-active",m.nzActive)("ant-skeleton-block",m.nzBlock)},inputs:{nzActive:"nzActive",nzType:"nzType",nzBlock:"nzBlock"},standalone:!0})}return(0,B.gn)([(0,h.yF)()],l.prototype,"nzBlock",void 0),l})(),O=(()=>{class l{constructor(){this.nzShape="default",this.nzSize="default"}static#t=this.\u0275fac=function(d){return new(d||l)};static#n=this.\u0275cmp=n.Xpm({type:l,selectors:[["nz-skeleton-element","nzType","button"]],inputs:{nzShape:"nzShape",nzSize:"nzSize"},standalone:!0,features:[n.jDz],attrs:e,decls:1,vars:8,consts:[[1,"ant-skeleton-button"]],template:function(d,m){1&d&&n._UZ(0,"span",0),2&d&&n.ekj("ant-skeleton-button-round","round"===m.nzShape)("ant-skeleton-button-circle","circle"===m.nzShape)("ant-skeleton-button-lg","large"===m.nzSize)("ant-skeleton-button-sm","small"===m.nzSize)},encapsulation:2,changeDetection:0})}return l})(),T=(()=>{class l{constructor(){this.nzShape="circle",this.nzSize="default",this.styleMap={}}ngOnChanges(c){if(c.nzSize&&"number"==typeof this.nzSize){const d=`${this.nzSize}px`;this.styleMap={width:d,height:d,"line-height":d}}else this.styleMap={}}static#t=this.\u0275fac=function(d){return new(d||l)};static#n=this.\u0275cmp=n.Xpm({type:l,selectors:[["nz-skeleton-element","nzType","avatar"]],inputs:{nzShape:"nzShape",nzSize:"nzSize"},standalone:!0,features:[n.TTD,n.jDz],attrs:I,decls:1,vars:9,consts:[[1,"ant-skeleton-avatar",3,"ngStyle"]],template:function(d,m){1&d&&n._UZ(0,"span",0),2&d&&(n.ekj("ant-skeleton-avatar-square","square"===m.nzShape)("ant-skeleton-avatar-circle","circle"===m.nzShape)("ant-skeleton-avatar-lg","large"===m.nzSize)("ant-skeleton-avatar-sm","small"===m.nzSize),n.Q6J("ngStyle",m.styleMap))},dependencies:[t.PC],encapsulation:2,changeDetection:0})}return l})(),k=(()=>{class l{constructor(){this.nzSize="default"}static#t=this.\u0275fac=function(d){return new(d||l)};static#n=this.\u0275cmp=n.Xpm({type:l,selectors:[["nz-skeleton-element","nzType","input"]],inputs:{nzSize:"nzSize"},standalone:!0,features:[n.jDz],attrs:E,decls:1,vars:4,consts:[[1,"ant-skeleton-input"]],template:function(d,m){1&d&&n._UZ(0,"span",0),2&d&&n.ekj("ant-skeleton-input-lg","large"===m.nzSize)("ant-skeleton-input-sm","small"===m.nzSize)},encapsulation:2,changeDetection:0})}return l})(),U=(()=>{class l{static#t=this.\u0275fac=function(d){return new(d||l)};static#n=this.\u0275cmp=n.Xpm({type:l,selectors:[["nz-skeleton-element","nzType","image"]],standalone:!0,features:[n.jDz],attrs:S,decls:3,vars:0,consts:[[1,"ant-skeleton-image"],["viewBox","0 0 1098 1024","xmlns","http://www.w3.org/2000/svg",1,"ant-skeleton-image-svg"],["d","M365.714286 329.142857q0 45.714286-32.036571 77.677714t-77.677714 32.036571-77.677714-32.036571-32.036571-77.677714 32.036571-77.677714 77.677714-32.036571 77.677714 32.036571 32.036571 77.677714zM950.857143 548.571429l0 256-804.571429 0 0-109.714286 182.857143-182.857143 91.428571 91.428571 292.571429-292.571429zM1005.714286 146.285714l-914.285714 0q-7.460571 0-12.873143 5.412571t-5.412571 12.873143l0 694.857143q0 7.460571 5.412571 12.873143t12.873143 5.412571l914.285714 0q7.460571 0 12.873143-5.412571t5.412571-12.873143l0-694.857143q0-7.460571-5.412571-12.873143t-12.873143-5.412571zM1097.142857 164.571429l0 694.857143q0 37.741714-26.843429 64.585143t-64.585143 26.843429l-914.285714 0q-37.741714 0-64.585143-26.843429t-26.843429-64.585143l0-694.857143q0-37.741714 26.843429-64.585143t64.585143-26.843429l914.285714 0q37.741714 0 64.585143 26.843429t26.843429 64.585143z",1,"ant-skeleton-image-path"]],template:function(d,m){1&d&&(n.TgZ(0,"span",0),n.O4$(),n.TgZ(1,"svg",1),n._UZ(2,"path",2),n.qZA()())},encapsulation:2,changeDetection:0})}return l})(),Z=(()=>{class l{constructor(c){this.cdr=c,this.nzActive=!1,this.nzLoading=!0,this.nzRound=!1,this.nzTitle=!0,this.nzAvatar=!1,this.nzParagraph=!0,this.rowsList=[],this.widthList=[]}toCSSUnit(c=""){return(0,h.WX)(c)}getTitleProps(){const c=!!this.nzAvatar,d=!!this.nzParagraph;let m="";return!c&&d?m="38%":c&&d&&(m="50%"),{width:m,...this.getProps(this.nzTitle)}}getAvatarProps(){return{shape:this.nzTitle&&!this.nzParagraph?"square":"circle",size:"large",...this.getProps(this.nzAvatar)}}getParagraphProps(){const c=!!this.nzAvatar,d=!!this.nzTitle,m={};return(!c||!d)&&(m.width="61%"),m.rows=!c&&d?3:2,{...m,...this.getProps(this.nzParagraph)}}getProps(c){return c&&"object"==typeof c?c:{}}getWidthList(){const{width:c,rows:d}=this.paragraph;let m=[];return c&&Array.isArray(c)?m=c:c&&!Array.isArray(c)&&(m=[],m[d-1]=c),m}updateProps(){this.title=this.getTitleProps(),this.avatar=this.getAvatarProps(),this.paragraph=this.getParagraphProps(),this.rowsList=[...Array(this.paragraph.rows)],this.widthList=this.getWidthList(),this.cdr.markForCheck()}ngOnInit(){this.updateProps()}ngOnChanges(c){(c.nzTitle||c.nzAvatar||c.nzParagraph)&&this.updateProps()}static#t=this.\u0275fac=function(d){return new(d||l)(n.Y36(n.sBO))};static#n=this.\u0275cmp=n.Xpm({type:l,selectors:[["nz-skeleton"]],hostAttrs:[1,"ant-skeleton"],hostVars:6,hostBindings:function(d,m){2&d&&n.ekj("ant-skeleton-with-avatar",!!m.nzAvatar)("ant-skeleton-active",m.nzActive)("ant-skeleton-round",!!m.nzRound)},inputs:{nzActive:"nzActive",nzLoading:"nzLoading",nzRound:"nzRound",nzTitle:"nzTitle",nzAvatar:"nzAvatar",nzParagraph:"nzParagraph"},exportAs:["nzSkeleton"],standalone:!0,features:[n.TTD,n.jDz],ngContentSelectors:R,decls:2,vars:2,consts:[[4,"ngIf"],["class","ant-skeleton-header",4,"ngIf"],[1,"ant-skeleton-content"],["class","ant-skeleton-title",3,"width",4,"ngIf"],["class","ant-skeleton-paragraph",4,"ngIf"],[1,"ant-skeleton-header"],["nzType","avatar",3,"nzSize","nzShape"],[1,"ant-skeleton-title"],[1,"ant-skeleton-paragraph"],[3,"width",4,"ngFor","ngForOf"]],template:function(d,m){1&d&&(n.F$t(),n.YNc(0,D,5,3,"ng-container",0)(1,P,2,0,"ng-container",0)),2&d&&(n.Q6J("ngIf",m.nzLoading),n.xp6(),n.Q6J("ngIf",!m.nzLoading))},dependencies:[f,T,t.O5,t.sg],encapsulation:2,changeDetection:0})}return l})(),K=(()=>{class l{static#t=this.\u0275fac=function(d){return new(d||l)};static#n=this.\u0275mod=n.oAB({type:l});static#e=this.\u0275inj=n.cJS({})}return l})()},6448:(j,w,i)=>{i.d(w,{F6:()=>m,my:()=>c,A2:()=>z});var t=i(9212),n=i(8645),h=i(8623),B=i(7687),e=i(6700);let I=(()=>{class a{transform(o,r="HH:mm:ss"){let s=Number(o||0);return B.FW.reduce((g,[x,W])=>{if(-1!==g.indexOf(x)){const _=Math.floor(s/W);return s-=_*W,g.replace(new RegExp(`${x}+`,"g"),N=>(0,e.Sk)(_.toString(),N.length,"0"))}return g},r)}static#t=this.\u0275fac=function(r){return new(r||a)};static#n=this.\u0275pipe=t.Yjl({name:"nzTimeRange",type:a,pure:!0,standalone:!0})}return a})(),E=(()=>{class a{static#t=this.\u0275fac=function(r){return new(r||a)};static#n=this.\u0275mod=t.oAB({type:a});static#e=this.\u0275inj=t.cJS({})}return a})();var S=i(6814),C=i(9773),b=i(2755),A=i(9388),M=i(2831);const D=a=>({$implicit:a});function P(a,p){if(1&a&&t.GkF(0,3),2&a){const o=t.oxw();t.Q6J("ngTemplateOutlet",o.nzValueTemplate)("ngTemplateOutletContext",t.VKq(2,D,o.nzValue))}}function R(a,p){if(1&a&&(t.TgZ(0,"span",6),t._uU(1),t.qZA()),2&a){const o=t.oxw(2);t.xp6(),t.Oqu(o.displayInt)}}function f(a,p){if(1&a&&(t.TgZ(0,"span",7),t._uU(1),t.qZA()),2&a){const o=t.oxw(2);t.xp6(),t.Oqu(o.displayDecimal)}}function O(a,p){if(1&a&&(t.ynx(0),t.YNc(1,R,2,1,"span",4)(2,f,2,1,"span",5),t.BQk()),2&a){const o=t.oxw();t.xp6(),t.Q6J("ngIf",o.displayInt),t.xp6(),t.Q6J("ngIf",o.displayDecimal)}}function T(a,p){if(1&a&&(t.ynx(0),t._uU(1),t.BQk()),2&a){const o=t.oxw();t.xp6(),t.Oqu(o.nzTitle)}}function k(a,p){if(1&a&&(t.ynx(0),t._uU(1),t.BQk()),2&a){const o=t.oxw(2);t.xp6(),t.Oqu(o.nzPrefix)}}function U(a,p){if(1&a&&(t.TgZ(0,"span",6),t.YNc(1,k,2,1,"ng-container",1),t.qZA()),2&a){const o=t.oxw();t.xp6(),t.Q6J("nzStringTemplateOutlet",o.nzPrefix)}}function Z(a,p){if(1&a&&(t.ynx(0),t._uU(1),t.BQk()),2&a){const o=t.oxw(2);t.xp6(),t.Oqu(o.nzSuffix)}}function K(a,p){if(1&a&&(t.TgZ(0,"span",7),t.YNc(1,Z,2,1,"ng-container",1),t.qZA()),2&a){const o=t.oxw();t.xp6(),t.Q6J("nzStringTemplateOutlet",o.nzSuffix)}}function l(a,p){if(1&a&&(t._uU(0),t.ALo(1,"nzTimeRange")),2&a){const o=t.oxw();t.Oqu(t.xi3(1,1,o.diff,o.nzFormat))}}let L=(()=>{class a{constructor(o){this.locale_id=o,this.displayInt="",this.displayDecimal=""}ngOnChanges(){this.formatNumber()}formatNumber(){const o="number"==typeof this.nzValue?".":(0,S.dv)(this.locale_id,S.wE.Decimal),r=String(this.nzValue),[s,g]=r.split(o);this.displayInt=s,this.displayDecimal=g?`${o}${g}`:""}static#t=this.\u0275fac=function(r){return new(r||a)(t.Y36(t.soG))};static#n=this.\u0275cmp=t.Xpm({type:a,selectors:[["nz-statistic-number"]],inputs:{nzValue:"nzValue",nzValueTemplate:"nzValueTemplate"},exportAs:["nzStatisticNumber"],standalone:!0,features:[t.TTD,t.jDz],decls:3,vars:2,consts:[[1,"ant-statistic-content-value"],[3,"ngTemplateOutlet","ngTemplateOutletContext",4,"ngIf"],[4,"ngIf"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],["class","ant-statistic-content-value-int",4,"ngIf"],["class","ant-statistic-content-value-decimal",4,"ngIf"],[1,"ant-statistic-content-value-int"],[1,"ant-statistic-content-value-decimal"]],template:function(r,s){1&r&&(t.TgZ(0,"span",0),t.YNc(1,P,1,4,"ng-container",1)(2,O,3,2,"ng-container",2),t.qZA()),2&r&&(t.xp6(),t.Q6J("ngIf",s.nzValueTemplate),t.xp6(),t.Q6J("ngIf",!s.nzValueTemplate))},dependencies:[S.O5,S.tP],encapsulation:2,changeDetection:0})}return a})(),c=(()=>{class a{constructor(o,r){this.cdr=o,this.directionality=r,this.nzValueStyle={},this.dir="ltr",this.destroy$=new n.x}ngOnInit(){this.directionality.change?.pipe((0,C.R)(this.destroy$)).subscribe(o=>{this.dir=o,this.cdr.detectChanges()}),this.dir=this.directionality.value}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}static#t=this.\u0275fac=function(r){return new(r||a)(t.Y36(t.sBO),t.Y36(A.Is,8))};static#n=this.\u0275cmp=t.Xpm({type:a,selectors:[["nz-statistic"]],hostAttrs:[1,"ant-statistic"],hostVars:2,hostBindings:function(r,s){2&r&&t.ekj("ant-statistic-rtl","rtl"===s.dir)},inputs:{nzPrefix:"nzPrefix",nzSuffix:"nzSuffix",nzTitle:"nzTitle",nzValue:"nzValue",nzValueStyle:"nzValueStyle",nzValueTemplate:"nzValueTemplate"},exportAs:["nzStatistic"],standalone:!0,features:[t.jDz],decls:6,vars:6,consts:[[1,"ant-statistic-title"],[4,"nzStringTemplateOutlet"],[1,"ant-statistic-content",3,"ngStyle"],["class","ant-statistic-content-prefix",4,"ngIf"],[3,"nzValue","nzValueTemplate"],["class","ant-statistic-content-suffix",4,"ngIf"],[1,"ant-statistic-content-prefix"],[1,"ant-statistic-content-suffix"]],template:function(r,s){1&r&&(t.TgZ(0,"div",0),t.YNc(1,T,2,1,"ng-container",1),t.qZA(),t.TgZ(2,"div",2),t.YNc(3,U,2,1,"span",3),t._UZ(4,"nz-statistic-number",4),t.YNc(5,K,2,1,"span",5),t.qZA()),2&r&&(t.xp6(),t.Q6J("nzStringTemplateOutlet",s.nzTitle),t.xp6(),t.Q6J("ngStyle",s.nzValueStyle),t.xp6(),t.Q6J("ngIf",s.nzPrefix),t.xp6(),t.Q6J("nzValue",s.nzValue)("nzValueTemplate",s.nzValueTemplate),t.xp6(),t.Q6J("ngIf",s.nzSuffix))},dependencies:[L,S.O5,b.T,b.f,S.PC],encapsulation:2,changeDetection:0})}return a})(),m=(()=>{class a extends c{constructor(o,r,s,g){super(o,g),this.ngZone=r,this.platform=s,this.nzFormat="HH:mm:ss",this.nzCountdownFinish=new t.vpe,this.target=0}ngOnChanges(o){o.nzValue&&(this.target=Number(o.nzValue.currentValue),o.nzValue.isFirstChange()||this.syncTimer())}ngOnInit(){super.ngOnInit(),this.syncTimer()}ngOnDestroy(){this.stopTimer()}syncTimer(){this.target>=Date.now()?this.startTimer():this.stopTimer()}startTimer(){this.platform.isBrowser&&this.ngZone.runOutsideAngular(()=>{this.stopTimer(),this.updater_=(0,h.F)(33.333333333333336).subscribe(()=>{this.updateValue(),this.cdr.detectChanges()})})}stopTimer(){this.updater_&&(this.updater_.unsubscribe(),this.updater_=null)}updateValue(){this.diff=Math.max(this.target-Date.now(),0),0===this.diff&&(this.stopTimer(),this.nzCountdownFinish.observers.length&&this.ngZone.run(()=>this.nzCountdownFinish.emit()))}static#t=this.\u0275fac=function(r){return new(r||a)(t.Y36(t.sBO),t.Y36(t.R0b),t.Y36(M.t4),t.Y36(A.Is,8))};static#n=this.\u0275cmp=t.Xpm({type:a,selectors:[["nz-countdown"]],inputs:{nzFormat:"nzFormat"},outputs:{nzCountdownFinish:"nzCountdownFinish"},exportAs:["nzCountdown"],standalone:!0,features:[t.qOj,t.TTD,t.jDz],decls:3,vars:6,consts:[[3,"nzValue","nzValueStyle","nzValueTemplate","nzTitle","nzPrefix","nzSuffix"],["countDownTpl",""]],template:function(r,s){if(1&r&&(t._UZ(0,"nz-statistic",0),t.YNc(1,l,2,4,"ng-template",null,1,t.W1O)),2&r){const g=t.MAs(2);t.Q6J("nzValue",s.diff)("nzValueStyle",s.nzValueStyle)("nzValueTemplate",s.nzValueTemplate||g)("nzTitle",s.nzTitle)("nzPrefix",s.nzPrefix)("nzSuffix",s.nzSuffix)}},dependencies:[c,E,I],encapsulation:2,changeDetection:0})}return a})(),z=(()=>{class a{static#t=this.\u0275fac=function(r){return new(r||a)};static#n=this.\u0275mod=t.oAB({type:a});static#e=this.\u0275inj=t.cJS({imports:[c,m]})}return a})()},5584:(j,w,i)=>{i.d(w,{X:()=>D,j:()=>M});var t=i(7582),n=i(6814),h=i(9212),B=i(8645),e=i(9773),I=i(8841),E=i(6700),S=i(227),C=i(9388);function b(P,R){if(1&P){const f=h.EpF();h.TgZ(0,"span",1),h.NdJ("click",function(T){h.CHM(f);const k=h.oxw();return h.KtG(k.closeTag(T))}),h.qZA()}}const A=["*"];let M=(()=>{class P{constructor(f,O,T,k){this.cdr=f,this.renderer=O,this.elementRef=T,this.directionality=k,this.isPresetColor=!1,this.nzMode="default",this.nzChecked=!1,this.nzBordered=!0,this.nzOnClose=new h.vpe,this.nzCheckedChange=new h.vpe,this.dir="ltr",this.destroy$=new B.x}updateCheckedStatus(){"checkable"===this.nzMode&&(this.nzChecked=!this.nzChecked,this.nzCheckedChange.emit(this.nzChecked))}closeTag(f){this.nzOnClose.emit(f),f.defaultPrevented||this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement),this.elementRef.nativeElement)}clearPresetColor(){const f=this.elementRef.nativeElement,O=new RegExp(`(ant-tag-(?:${[...I.uf,...I.Bh].join("|")}))`,"g"),T=f.classList.toString(),k=[];let U=O.exec(T);for(;null!==U;)k.push(U[1]),U=O.exec(T);f.classList.remove(...k)}setPresetColor(){const f=this.elementRef.nativeElement;this.clearPresetColor(),this.isPresetColor=!!this.nzColor&&((0,I.o2)(this.nzColor)||(0,I.M8)(this.nzColor)),this.isPresetColor&&f.classList.add(`ant-tag-${this.nzColor}`)}ngOnInit(){this.directionality.change?.pipe((0,e.R)(this.destroy$)).subscribe(f=>{this.dir=f,this.cdr.detectChanges()}),this.dir=this.directionality.value}ngOnChanges(f){const{nzColor:O}=f;O&&this.setPresetColor()}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}static#t=this.\u0275fac=function(O){return new(O||P)(h.Y36(h.sBO),h.Y36(h.Qsj),h.Y36(h.SBq),h.Y36(C.Is,8))};static#n=this.\u0275cmp=h.Xpm({type:P,selectors:[["nz-tag"]],hostAttrs:[1,"ant-tag"],hostVars:12,hostBindings:function(O,T){1&O&&h.NdJ("click",function(){return T.updateCheckedStatus()}),2&O&&(h.Udp("background-color",T.isPresetColor?"":T.nzColor),h.ekj("ant-tag-has-color",T.nzColor&&!T.isPresetColor)("ant-tag-checkable","checkable"===T.nzMode)("ant-tag-checkable-checked",T.nzChecked)("ant-tag-rtl","rtl"===T.dir)("ant-tag-borderless",!T.nzBordered))},inputs:{nzMode:"nzMode",nzColor:"nzColor",nzChecked:"nzChecked",nzBordered:"nzBordered"},outputs:{nzOnClose:"nzOnClose",nzCheckedChange:"nzCheckedChange"},exportAs:["nzTag"],standalone:!0,features:[h.TTD,h.jDz],ngContentSelectors:A,decls:2,vars:1,consts:[["nz-icon","","nzType","close","class","ant-tag-close-icon","tabindex","-1",3,"click",4,"ngIf"],["nz-icon","","nzType","close","tabindex","-1",1,"ant-tag-close-icon",3,"click"]],template:function(O,T){1&O&&(h.F$t(),h.Hsn(0),h.YNc(1,b,1,0,"span",0)),2&O&&(h.xp6(),h.Q6J("ngIf","closeable"===T.nzMode))},dependencies:[S.PV,S.Ls,n.O5],encapsulation:2,changeDetection:0})}return(0,t.gn)([(0,E.yF)()],P.prototype,"nzChecked",void 0),(0,t.gn)([(0,E.yF)()],P.prototype,"nzBordered",void 0),P})(),D=(()=>{class P{static#t=this.\u0275fac=function(O){return new(O||P)};static#n=this.\u0275mod=h.oAB({type:P});static#e=this.\u0275inj=h.cJS({imports:[M]})}return P})()}}]);