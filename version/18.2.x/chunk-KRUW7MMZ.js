import{a as Y}from"./chunk-QKKRINFW.js";import{Fc as X,Ha as A,ec as j,hc as N,ic as q,oc as J,sc as K}from"./chunk-BYER7FCH.js";import{$ as c,$b as I,Cb as y,Ea as z,Fa as g,Gb as P,Hb as F,Jb as p,Ma as x,Na as R,Pa as v,Tb as W,Ub as L,Vb as d,Vc as _,Wb as l,Xb as G,_c as h,cc as w,ec as M,f as m,fa as b,fc as E,gc as S,ha as T,lc as B,ma as k,mb as D,mc as Q,nb as r,nc as Z,pc as H,qc as U,ra as u,sa as $,xc as V,y as f,yc as C}from"./chunk-U274QCT3.js";var ee=["*"],ne=["inputElement"],oe=["nz-checkbox",""],se=(o,t)=>t.value;function re(o,t){if(o&1){let a=I();d(0,"label",1),w("nzCheckedChange",function(i){let n=z(a).$implicit,s=M();return g(s.onCheckedChange(n,i))}),d(1,"span"),H(2),l()()}if(o&2){let a=t.$implicit,e=M();F("nzDisabled",a.disabled||e.nzDisabled)("nzChecked",a.checked),D(2),U(a.label)}}var ce=(()=>{let t=class t{constructor(){this.nzOnChange=new x,this.checkboxList=[]}addCheckbox(e){this.checkboxList.push(e)}removeCheckbox(e){this.checkboxList.splice(this.checkboxList.indexOf(e),1)}onChange(){let e=this.checkboxList.filter(i=>i.nzChecked).map(i=>i.nzValue);this.nzOnChange.emit(e)}};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=u({type:t,selectors:[["nz-checkbox-wrapper"]],hostAttrs:[1,"ant-checkbox-group"],outputs:{nzOnChange:"nzOnChange"},exportAs:["nzCheckboxWrapper"],standalone:!0,features:[C],ngContentSelectors:ee,decls:1,vars:0,template:function(i,n){i&1&&(E(),S(0))},encapsulation:2,changeDetection:0});let o=t;return o})(),te=(()=>{let t=class t{innerCheckedChange(e){this.nzDisabled||(this.nzChecked=e,this.onChange(this.nzChecked),this.nzCheckedChange.emit(this.nzChecked),this.nzCheckboxWrapperComponent&&this.nzCheckboxWrapperComponent.onChange())}writeValue(e){this.nzChecked=e,this.cdr.markForCheck()}registerOnChange(e){this.onChange=e}registerOnTouched(e){this.onTouched=e}setDisabledState(e){this.nzDisabled=this.isNzDisableFirstChange&&this.nzDisabled||e,this.isNzDisableFirstChange=!1,this.cdr.markForCheck()}focus(){this.focusMonitor.focusVia(this.inputElement,"keyboard")}blur(){this.inputElement.nativeElement.blur()}constructor(e,i,n,s,O){this.ngZone=e,this.elementRef=i,this.cdr=n,this.focusMonitor=s,this.directionality=O,this.dir="ltr",this.destroy$=new m,this.isNzDisableFirstChange=!0,this.onChange=()=>{},this.onTouched=()=>{},this.nzCheckedChange=new x,this.nzValue=null,this.nzAutoFocus=!1,this.nzDisabled=!1,this.nzIndeterminate=!1,this.nzChecked=!1,this.nzId=null,this.nzCheckboxWrapperComponent=k(ce,{optional:!0}),this.nzFormStatusService=k(Y,{optional:!0})}ngOnInit(){this.focusMonitor.monitor(this.elementRef,!0).pipe(c(this.destroy$)).subscribe(e=>{e||Promise.resolve().then(()=>this.onTouched())}),this.nzCheckboxWrapperComponent&&this.nzCheckboxWrapperComponent.addCheckbox(this),this.directionality.change.pipe(c(this.destroy$)).subscribe(e=>{this.dir=e,this.cdr.detectChanges()}),this.dir=this.directionality.value,this.ngZone.runOutsideAngular(()=>{f(this.elementRef.nativeElement,"click").pipe(c(this.destroy$)).subscribe(e=>{e.preventDefault(),this.focus(),!this.nzDisabled&&this.ngZone.run(()=>{this.innerCheckedChange(!this.nzChecked),this.cdr.markForCheck()})}),f(this.inputElement.nativeElement,"click").pipe(c(this.destroy$)).subscribe(e=>e.stopPropagation())})}ngAfterViewInit(){this.nzAutoFocus&&this.focus()}ngOnDestroy(){this.focusMonitor.stopMonitoring(this.elementRef),this.nzCheckboxWrapperComponent&&this.nzCheckboxWrapperComponent.removeCheckbox(this),this.destroy$.next(),this.destroy$.complete()}};t.\u0275fac=function(i){return new(i||t)(r(R),r(v),r(_),r(j),r(A))},t.\u0275cmp=u({type:t,selectors:[["","nz-checkbox",""]],viewQuery:function(i,n){if(i&1&&B(ne,7),i&2){let s;Q(s=Z())&&(n.inputElement=s.first)}},hostAttrs:[1,"ant-checkbox-wrapper"],hostVars:6,hostBindings:function(i,n){i&2&&p("ant-checkbox-wrapper-in-form-item",!!n.nzFormStatusService)("ant-checkbox-wrapper-checked",n.nzChecked)("ant-checkbox-rtl",n.dir==="rtl")},inputs:{nzValue:"nzValue",nzAutoFocus:[2,"nzAutoFocus","nzAutoFocus",h],nzDisabled:[2,"nzDisabled","nzDisabled",h],nzIndeterminate:[2,"nzIndeterminate","nzIndeterminate",h],nzChecked:[2,"nzChecked","nzChecked",h],nzId:"nzId"},outputs:{nzCheckedChange:"nzCheckedChange"},exportAs:["nzCheckbox"],standalone:!0,features:[V([{provide:N,useExisting:b(()=>t),multi:!0}]),y,C],attrs:oe,ngContentSelectors:ee,decls:6,vars:11,consts:[["inputElement",""],[1,"ant-checkbox"],["type","checkbox",1,"ant-checkbox-input",3,"ngModelChange","checked","ngModel","disabled"],[1,"ant-checkbox-inner"]],template:function(i,n){if(i&1){let s=I();E(),d(0,"span",1)(1,"input",2,0),w("ngModelChange",function(ie){return z(s),g(n.innerCheckedChange(ie))}),l(),G(3,"span",3),l(),d(4,"span"),S(5),l()}i&2&&(p("ant-checkbox-checked",n.nzChecked&&!n.nzIndeterminate)("ant-checkbox-disabled",n.nzDisabled)("ant-checkbox-indeterminate",n.nzIndeterminate),D(),F("checked",n.nzChecked)("ngModel",n.nzChecked)("disabled",n.nzDisabled),P("autofocus",n.nzAutoFocus?"autofocus":null)("id",n.nzId))},dependencies:[X,q,J,K],encapsulation:2,changeDetection:0});let o=t;return o})(),he=(()=>{let t=class t{onCheckedChange(e,i){e.checked=i,this.onChange(this.options)}constructor(e,i,n,s){this.elementRef=e,this.focusMonitor=i,this.cdr=n,this.directionality=s,this.onChange=()=>{},this.onTouched=()=>{},this.options=[],this.nzDisabled=!1,this.dir="ltr",this.destroy$=new m,this.isNzDisableFirstChange=!0}ngOnInit(){this.focusMonitor.monitor(this.elementRef,!0).pipe(c(this.destroy$)).subscribe(e=>{e||Promise.resolve().then(()=>this.onTouched())}),this.directionality.change?.pipe(c(this.destroy$)).subscribe(e=>{this.dir=e,this.cdr.detectChanges()}),this.dir=this.directionality.value}ngOnDestroy(){this.focusMonitor.stopMonitoring(this.elementRef),this.destroy$.next(),this.destroy$.complete()}writeValue(e){this.options=e,this.cdr.markForCheck()}registerOnChange(e){this.onChange=e}registerOnTouched(e){this.onTouched=e}setDisabledState(e){this.nzDisabled=this.isNzDisableFirstChange&&this.nzDisabled||e,this.isNzDisableFirstChange=!1,this.cdr.markForCheck()}};t.\u0275fac=function(i){return new(i||t)(r(v),r(j),r(_),r(A))},t.\u0275cmp=u({type:t,selectors:[["nz-checkbox-group"]],hostAttrs:[1,"ant-checkbox-group"],hostVars:2,hostBindings:function(i,n){i&2&&p("ant-checkbox-group-rtl",n.dir==="rtl")},inputs:{nzDisabled:[2,"nzDisabled","nzDisabled",h]},exportAs:["nzCheckboxGroup"],standalone:!0,features:[V([{provide:N,useExisting:b(()=>t),multi:!0}]),y,C],decls:2,vars:0,consts:[["nz-checkbox","",1,"ant-checkbox-group-item",3,"nzDisabled","nzChecked"],["nz-checkbox","",1,"ant-checkbox-group-item",3,"nzCheckedChange","nzDisabled","nzChecked"]],template:function(i,n){i&1&&W(0,re,3,3,"label",0,se),i&2&&L(n.options)},dependencies:[te],encapsulation:2});let o=t;return o})(),Fe=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=$({type:t}),t.\u0275inj=T({imports:[te,he]});let o=t;return o})();export{ce as a,te as b,he as c,Fe as d};
