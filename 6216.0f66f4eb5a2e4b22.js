"use strict";(self.webpackChunkng_zorro_antd_doc=self.webpackChunkng_zorro_antd_doc||[]).push([[6216],{4854:(j,I,l)=>{l.d(I,{i:()=>k,m:()=>K});var u=l(7582),e=l(6028),P=l(6814),a=l(9212),w=l(6223),U=l(8645),E=l(2438),m=l(9773),M=l(2196),y=l(2755),O=l(6700),x=l(2987),T=l(227),A=l(6034),L=l(9388);const S=["switchElement"];function v(c,D){1&c&&a._UZ(0,"span",8)}function b(c,D){if(1&c&&(a.ynx(0),a._uU(1),a.BQk()),2&c){const o=a.oxw(2);a.xp6(1),a.Oqu(o.nzCheckedChildren)}}function N(c,D){if(1&c&&(a.ynx(0),a.YNc(1,b,2,1,"ng-container",9),a.BQk()),2&c){const o=a.oxw();a.xp6(1),a.Q6J("nzStringTemplateOutlet",o.nzCheckedChildren)}}function g(c,D){if(1&c&&(a.ynx(0),a._uU(1),a.BQk()),2&c){const o=a.oxw(2);a.xp6(1),a.Oqu(o.nzUnCheckedChildren)}}function F(c,D){if(1&c&&a.YNc(0,g,2,1,"ng-container",9),2&c){const o=a.oxw();a.Q6J("nzStringTemplateOutlet",o.nzUnCheckedChildren)}}let k=(()=>{class c{updateValue(o){this.isChecked!==o&&(this.isChecked=o,this.onChange(this.isChecked))}focus(){this.focusMonitor.focusVia(this.switchElement.nativeElement,"keyboard")}blur(){this.switchElement.nativeElement.blur()}constructor(o,d,f,z,Z,B){this.nzConfigService=o,this.host=d,this.ngZone=f,this.cdr=z,this.focusMonitor=Z,this.directionality=B,this._nzModuleName="switch",this.isChecked=!1,this.onChange=()=>{},this.onTouched=()=>{},this.nzLoading=!1,this.nzDisabled=!1,this.nzControl=!1,this.nzCheckedChildren=null,this.nzUnCheckedChildren=null,this.nzSize="default",this.nzId=null,this.dir="ltr",this.destroy$=new U.x,this.isNzDisableFirstChange=!0}ngOnInit(){this.directionality.change.pipe((0,m.R)(this.destroy$)).subscribe(o=>{this.dir=o,this.cdr.detectChanges()}),this.dir=this.directionality.value,this.ngZone.runOutsideAngular(()=>{(0,E.R)(this.host.nativeElement,"click").pipe((0,m.R)(this.destroy$)).subscribe(o=>{o.preventDefault(),!(this.nzControl||this.nzDisabled||this.nzLoading)&&this.ngZone.run(()=>{this.updateValue(!this.isChecked),this.cdr.markForCheck()})}),(0,E.R)(this.switchElement.nativeElement,"keydown").pipe((0,m.R)(this.destroy$)).subscribe(o=>{if(this.nzControl||this.nzDisabled||this.nzLoading)return;const{keyCode:d}=o;d!==e.oh&&d!==e.SV&&d!==e.L_&&d!==e.K5||(o.preventDefault(),this.ngZone.run(()=>{d===e.oh?this.updateValue(!1):d===e.SV?this.updateValue(!0):(d===e.L_||d===e.K5)&&this.updateValue(!this.isChecked),this.cdr.markForCheck()}))})})}ngAfterViewInit(){this.focusMonitor.monitor(this.switchElement.nativeElement,!0).pipe((0,m.R)(this.destroy$)).subscribe(o=>{o||Promise.resolve().then(()=>this.onTouched())})}ngOnDestroy(){this.focusMonitor.stopMonitoring(this.switchElement.nativeElement),this.destroy$.next(),this.destroy$.complete()}writeValue(o){this.isChecked=o,this.cdr.markForCheck()}registerOnChange(o){this.onChange=o}registerOnTouched(o){this.onTouched=o}setDisabledState(o){this.nzDisabled=this.isNzDisableFirstChange&&this.nzDisabled||o,this.isNzDisableFirstChange=!1,this.cdr.markForCheck()}static#e=this.\u0275fac=function(d){return new(d||c)(a.Y36(M.jY),a.Y36(a.SBq),a.Y36(a.R0b),a.Y36(a.sBO),a.Y36(A.tE),a.Y36(L.Is,8))};static#t=this.\u0275cmp=a.Xpm({type:c,selectors:[["nz-switch"]],viewQuery:function(d,f){if(1&d&&a.Gf(S,7),2&d){let z;a.iGM(z=a.CRH())&&(f.switchElement=z.first)}},inputs:{nzLoading:"nzLoading",nzDisabled:"nzDisabled",nzControl:"nzControl",nzCheckedChildren:"nzCheckedChildren",nzUnCheckedChildren:"nzUnCheckedChildren",nzSize:"nzSize",nzId:"nzId"},exportAs:["nzSwitch"],standalone:!0,features:[a._Bn([{provide:w.JU,useExisting:(0,a.Gpc)(()=>c),multi:!0}]),a.jDz],decls:9,vars:16,consts:[["nz-wave","","type","button",1,"ant-switch",3,"disabled","nzWaveExtraNode"],["switchElement",""],[1,"ant-switch-handle"],["nz-icon","","nzType","loading","class","ant-switch-loading-icon",4,"ngIf"],[1,"ant-switch-inner"],[4,"ngIf","ngIfElse"],["uncheckTemplate",""],[1,"ant-click-animating-node"],["nz-icon","","nzType","loading",1,"ant-switch-loading-icon"],[4,"nzStringTemplateOutlet"]],template:function(d,f){if(1&d&&(a.TgZ(0,"button",0,1)(2,"span",2),a.YNc(3,v,1,0,"span",3),a.qZA(),a.TgZ(4,"span",4),a.YNc(5,N,2,1,"ng-container",5)(6,F,1,1,"ng-template",null,6,a.W1O),a.qZA(),a._UZ(8,"div",7),a.qZA()),2&d){const z=a.MAs(7);a.ekj("ant-switch-checked",f.isChecked)("ant-switch-loading",f.nzLoading)("ant-switch-disabled",f.nzDisabled)("ant-switch-small","small"===f.nzSize)("ant-switch-rtl","rtl"===f.dir),a.Q6J("disabled",f.nzDisabled)("nzWaveExtraNode",!0),a.uIk("id",f.nzId),a.xp6(3),a.Q6J("ngIf",f.nzLoading),a.xp6(2),a.Q6J("ngIf",f.isChecked)("ngIfElse",z)}},dependencies:[x.vG,x.dQ,T.PV,T.Ls,P.O5,y.T,y.f],encapsulation:2,changeDetection:0})}return(0,u.gn)([(0,O.yF)()],c.prototype,"nzLoading",void 0),(0,u.gn)([(0,O.yF)()],c.prototype,"nzDisabled",void 0),(0,u.gn)([(0,O.yF)()],c.prototype,"nzControl",void 0),(0,u.gn)([(0,M.oS)()],c.prototype,"nzSize",void 0),c})(),K=(()=>{class c{static#e=this.\u0275fac=function(d){return new(d||c)};static#t=this.\u0275mod=a.oAB({type:c});static#n=this.\u0275inj=a.cJS({imports:[k]})}return c})()},9438:(j,I,l)=>{l.d(I,{BC:()=>Y,st:()=>ue});var u=l(6814),e=l(9212),P=l(5592),a=l(3019),w=l(2438),U=l(8645),E=l(2096),m=l(7921),M=l(4664),y=l(3997),O=l(2460),x=l(7398),T=l(9773),A=l(2907),L=l(1778),S=l(6223),v=l(227),b=l(7582),N=l(4119),g=l(6700),F=l(7191),R=l(9388),k=l(8188),K=l(1687),c=l(2987);const D=["nz-transfer-search",""];function o(s,_){if(1&s){const t=e.EpF();e.TgZ(0,"span",4),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n._clear())}),e._UZ(1,"span",5),e.qZA()}}const d=s=>({"ant-input-disabled":s}),f=["headerCheckbox"],z=["checkboxes"];function Z(s,_){if(1&s&&(e.ynx(0),e._uU(1),e.BQk()),2&s){const t=e.oxw().$implicit;e.xp6(1),e.Oqu(t.title)}}function B(s,_){}const H=s=>({"ant-transfer-list-content-item-disabled":s}),Q=s=>({$implicit:s});function G(s,_){if(1&s){const t=e.EpF();e.TgZ(0,"li",13),e.NdJ("click",function(){const r=e.CHM(t).$implicit,h=e.oxw(3);return e.KtG(h.onItemSelect(r))}),e.TgZ(1,"label",14,15),e.NdJ("nzCheckedChange",function(){const r=e.CHM(t).$implicit,h=e.oxw(3);return e.KtG(h.onItemSelect(r))}),e.YNc(3,Z,2,1,"ng-container",7)(4,B,0,0,"ng-template",16,17,e.W1O),e.qZA()()}if(2&s){const t=_.$implicit,i=e.MAs(5),n=e.oxw(3);e.Q6J("ngClass",e.VKq(7,H,n.disabled||t.disabled)),e.xp6(1),e.Q6J("nzChecked",t.checked)("nzDisabled",n.disabled||t.disabled),e.xp6(2),e.Q6J("ngIf",!n.render)("ngIfElse",i),e.xp6(1),e.Q6J("ngTemplateOutlet",n.render)("ngTemplateOutletContext",e.VKq(9,Q,t))}}function V(s,_){if(1&s&&(e.TgZ(0,"ul",11),e.YNc(1,G,6,11,"li",12),e.qZA()),2&s){const t=e.oxw(2);e.xp6(1),e.Q6J("ngForOf",t.validData)("ngForTrackBy",t.trackByHide)}}function $(s,_){if(1&s&&(e.TgZ(0,"div",18),e._UZ(1,"nz-embed-empty",19),e.qZA()),2&s){const t=e.oxw(2);e.xp6(1),e.Q6J("nzComponentName","transfer")("specificContent",t.notFoundContent)}}function q(s,_){if(1&s&&e.YNc(0,V,2,2,"ul",9)(1,$,2,2,"div",10),2&s){const t=e.oxw();e.Q6J("ngIf",t.stat.shownCount>0),e.xp6(1),e.Q6J("ngIf",0===t.stat.shownCount)}}function X(s,_){if(1&s){const t=e.EpF();e.TgZ(0,"label",20,21),e.NdJ("nzCheckedChange",function(n){e.CHM(t);const r=e.oxw();return e.KtG(r.onItemSelectAll(n))}),e.qZA()}if(2&s){const t=e.oxw();e.Q6J("nzChecked",t.stat.checkAll)("nzIndeterminate",t.stat.checkHalf)("nzDisabled",0===t.stat.shownCount||t.disabled)}}function ee(s,_){if(1&s&&(e.TgZ(0,"span",22),e._uU(1),e.qZA()),2&s){const t=e.oxw();e.xp6(1),e.Oqu(t.titleText)}}function te(s,_){if(1&s){const t=e.EpF();e.TgZ(0,"div",23)(1,"span",24),e.NdJ("valueChanged",function(n){e.CHM(t);const r=e.oxw();return e.KtG(r.handleFilter(n))})("valueClear",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.handleClear())}),e.qZA()()}if(2&s){const t=e.oxw();e.xp6(1),e.Q6J("placeholder",t.searchPlaceholder)("disabled",t.disabled)("value",t.filter)}}function ne(s,_){1&s&&e.GkF(0)}const ie=(s,_,t,i,n,r)=>({$implicit:s,direction:_,disabled:t,onItemSelectAll:i,onItemSelect:n,stat:r});function se(s,_){if(1&s&&(e.ynx(0),e.TgZ(1,"div",25),e.YNc(2,ne,1,0,"ng-container",26),e.qZA(),e.BQk()),2&s){const t=e.oxw();e.xp6(2),e.Q6J("ngTemplateOutlet",t.renderList)("ngTemplateOutletContext",e.HTZ(2,ie,t.validData,t.direction,t.disabled,t.onItemSelectAll,t.onItemSelect,t.stat))}}function ae(s,_){}function re(s,_){if(1&s&&(e.TgZ(0,"div",27),e.YNc(1,ae,0,0,"ng-template",16),e.qZA()),2&s){const t=e.oxw();e.xp6(1),e.Q6J("ngTemplateOutlet",t.footer)("ngTemplateOutletContext",e.VKq(2,Q,t.direction))}}const le=s=>({"ant-transfer__nodata":s});function oe(s,_){if(1&s&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&s){const t=e.oxw(2);e.xp6(1),e.Oqu(t.nzOperations[1])}}function ce(s,_){if(1&s&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&s){const t=e.oxw(2);e.xp6(1),e.Oqu(t.nzOperations[0])}}function he(s,_){if(1&s){const t=e.EpF();e.TgZ(0,"div",3)(1,"button",4),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.moveToLeft())}),e._UZ(2,"span",5),e.YNc(3,oe,2,1,"span",6),e.qZA(),e.TgZ(4,"button",4),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.moveToRight())}),e._UZ(5,"span",7),e.YNc(6,ce,2,1,"span",6),e.qZA()()}if(2&s){const t=e.oxw();e.xp6(1),e.Q6J("disabled",t.nzDisabled||!t.leftActive)("nzType","primary")("nzSize","small"),e.xp6(2),e.Q6J("ngIf",t.nzOperations[1]),e.xp6(1),e.Q6J("disabled",t.nzDisabled||!t.rightActive)("nzType","primary")("nzSize","small"),e.xp6(2),e.Q6J("ngIf",t.nzOperations[0])}}function de(s,_){if(1&s&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&s){const t=e.oxw(2);e.xp6(1),e.Oqu(t.nzOperations[0])}}function _e(s,_){if(1&s&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&s){const t=e.oxw(2);e.xp6(1),e.Oqu(t.nzOperations[1])}}function fe(s,_){if(1&s){const t=e.EpF();e.TgZ(0,"div",3)(1,"button",4),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.moveToRight())}),e._UZ(2,"span",5),e.YNc(3,de,2,1,"span",6),e.qZA(),e.TgZ(4,"button",4),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.moveToLeft())}),e._UZ(5,"span",7),e.YNc(6,_e,2,1,"span",6),e.qZA()()}if(2&s){const t=e.oxw();e.xp6(1),e.Q6J("disabled",t.nzDisabled||!t.rightActive)("nzType","primary")("nzSize","small"),e.xp6(2),e.Q6J("ngIf",t.nzOperations[0]),e.xp6(1),e.Q6J("disabled",t.nzDisabled||!t.leftActive)("nzType","primary")("nzSize","small"),e.xp6(2),e.Q6J("ngIf",t.nzOperations[1])}}let W=(()=>{class s{constructor(t){this.cdr=t,this.disabled=!1,this.valueChanged=new e.vpe,this.valueClear=new e.vpe}_handle(){this.valueChanged.emit(this.value)}_clear(){this.disabled||(this.value="",this.valueClear.emit())}ngOnChanges(){this.cdr.detectChanges()}static#e=this.\u0275fac=function(i){return new(i||s)(e.Y36(e.sBO))};static#t=this.\u0275cmp=e.Xpm({type:s,selectors:[["","nz-transfer-search",""]],inputs:{placeholder:"placeholder",value:"value",disabled:"disabled"},outputs:{valueChanged:"valueChanged",valueClear:"valueClear"},exportAs:["nzTransferSearch"],standalone:!0,features:[e.TTD,e.jDz],attrs:D,decls:4,vars:7,consts:[[1,"ant-input-prefix"],["nz-icon","","nzType","search"],[1,"ant-input",3,"ngModel","disabled","placeholder","ngClass","ngModelChange"],["class","ant-input-suffix",3,"click",4,"ngIf"],[1,"ant-input-suffix",3,"click"],["nz-icon","","nzType","close-circle",1,"ant-input-clear-icon"]],template:function(i,n){1&i&&(e.TgZ(0,"span",0),e._UZ(1,"span",1),e.qZA(),e.TgZ(2,"input",2),e.NdJ("ngModelChange",function(h){return n.value=h})("ngModelChange",function(){return n._handle()}),e.qZA(),e.YNc(3,o,2,0,"span",3)),2&i&&(e.xp6(2),e.Q6J("ngModel",n.value)("disabled",n.disabled)("placeholder",n.placeholder)("ngClass",e.VKq(5,d,n.disabled)),e.xp6(1),e.Q6J("ngIf",n.value&&n.value.length>0))},dependencies:[S.u5,S.Fj,S.JJ,S.On,v.PV,v.Ls,u.mk,u.O5],encapsulation:2,changeDetection:0})}return s})(),J=(()=>{class s{get validData(){return this.dataSource.filter(t=>!t.hide)}trackByHide(t,i){return i.hide}updateCheckStatus(){const t=this.dataSource.filter(i=>!i.disabled).length;this.stat.checkCount=this.dataSource.filter(i=>i.checked&&!i.disabled).length,this.stat.shownCount=this.validData.length,this.stat.checkAll=t>0&&t===this.stat.checkCount,this.stat.checkHalf=this.stat.checkCount>0&&!this.stat.checkAll,this.headerCheckbox&&(this.headerCheckbox.nzChecked=this.stat.checkAll)}handleFilter(t){this.filter=t,this.dataSource.forEach(i=>{i.hide=t.length>0&&!this.matchFilter(t,i)}),this.stat.shownCount=this.validData.length,this.filterChange.emit({direction:this.direction,value:t})}handleClear(){this.handleFilter("")}matchFilter(t,i){return this.filterOption?this.filterOption(t,i):i.title.includes(t)}constructor(t,i){this.ngZone=t,this.cdr=i,this.direction="left",this.titleText="",this.showSelectAll=!0,this.dataSource=[],this.itemUnit="",this.itemsUnit="",this.filter="",this.disabled=!1,this.renderList=null,this.render=null,this.footer=null,this.handleSelectAll=new e.vpe,this.handleSelect=new e.vpe,this.filterChange=new e.vpe,this.stat={checkAll:!1,checkHalf:!1,checkCount:0,shownCount:0},this.onItemSelect=n=>{this.disabled||n.disabled||(n.checked=!n.checked,this.updateCheckStatus(),this.handleSelect.emit(n))},this.onItemSelectAll=n=>{this.dataSource.forEach(r=>{!r.disabled&&!r.hide&&(r.checked=n)}),this.updateCheckStatus(),this.handleSelectAll.emit(n)}}markForCheck(){this.updateCheckStatus(),this.cdr.markForCheck()}ngAfterViewInit(){this.checkboxes.changes.pipe((0,m.O)(this.checkboxes),(0,M.w)(()=>{const t=this.checkboxes.toArray();return new P.y(i=>this.ngZone.runOutsideAngular(()=>(0,a.T)(...t.map(n=>(0,w.R)(n.nativeElement,"click"))).subscribe(i)))})).subscribe(t=>{t.stopPropagation()})}static#e=this.\u0275fac=function(i){return new(i||s)(e.Y36(e.R0b),e.Y36(e.sBO))};static#t=this.\u0275cmp=e.Xpm({type:s,selectors:[["nz-transfer-list"]],viewQuery:function(i,n){if(1&i&&(e.Gf(f,5,A.Ie),e.Gf(z,5,e.SBq)),2&i){let r;e.iGM(r=e.CRH())&&(n.headerCheckbox=r.first),e.iGM(r=e.CRH())&&(n.checkboxes=r)}},hostAttrs:[1,"ant-transfer-list"],hostVars:2,hostBindings:function(i,n){2&i&&e.ekj("ant-transfer-list-with-footer",!!n.footer)},inputs:{direction:"direction",titleText:"titleText",showSelectAll:"showSelectAll",dataSource:"dataSource",itemUnit:"itemUnit",itemsUnit:"itemsUnit",filter:"filter",disabled:"disabled",showSearch:"showSearch",searchPlaceholder:"searchPlaceholder",notFoundContent:"notFoundContent",filterOption:"filterOption",renderList:"renderList",render:"render",footer:"footer"},outputs:{handleSelectAll:"handleSelectAll",handleSelect:"handleSelect",filterChange:"filterChange"},exportAs:["nzTransferList"],standalone:!0,features:[e.jDz],decls:12,vars:14,consts:[["defaultRenderList",""],[1,"ant-transfer-list-header"],["class","ant-transfer-list-checkbox","nz-checkbox","",3,"nzChecked","nzIndeterminate","nzDisabled","nzCheckedChange",4,"ngIf"],[1,"ant-transfer-list-header-selected"],["class","ant-transfer-list-header-title",4,"ngIf"],[3,"ngClass"],["class","ant-transfer-list-body-search-wrapper",4,"ngIf"],[4,"ngIf","ngIfElse"],["class","ant-transfer-list-footer",4,"ngIf"],["class","ant-transfer-list-content",4,"ngIf"],["class","ant-transfer-list-body-not-found",4,"ngIf"],[1,"ant-transfer-list-content"],["class","ant-transfer-list-content-item",3,"ngClass","click",4,"ngFor","ngForOf","ngForTrackBy"],[1,"ant-transfer-list-content-item",3,"ngClass","click"],["nz-checkbox","",3,"nzChecked","nzDisabled","nzCheckedChange"],["checkboxes",""],[3,"ngTemplateOutlet","ngTemplateOutletContext"],["renderContainer",""],[1,"ant-transfer-list-body-not-found"],[3,"nzComponentName","specificContent"],["nz-checkbox","",1,"ant-transfer-list-checkbox",3,"nzChecked","nzIndeterminate","nzDisabled","nzCheckedChange"],["headerCheckbox",""],[1,"ant-transfer-list-header-title"],[1,"ant-transfer-list-body-search-wrapper"],["nz-transfer-search","",1,"ant-input-affix-wrapper","ant-transfer-list-search",3,"placeholder","disabled","value","valueChanged","valueClear"],[1,"ant-transfer-list-body-customize-wrapper"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"ant-transfer-list-footer"]],template:function(i,n){if(1&i&&(e.YNc(0,q,2,2,"ng-template",null,0,e.W1O),e.TgZ(2,"div",1),e.YNc(3,X,2,3,"label",2),e.TgZ(4,"span",3)(5,"span"),e._uU(6),e.qZA()(),e.YNc(7,ee,2,1,"span",4),e.qZA(),e.TgZ(8,"div",5),e.YNc(9,te,2,3,"div",6)(10,se,3,9,"ng-container",7),e.qZA(),e.YNc(11,re,2,4,"div",8)),2&i){const r=e.MAs(1);e.xp6(3),e.Q6J("ngIf",n.showSelectAll),e.xp6(3),e.AsE(" ",(n.stat.checkCount>0?n.stat.checkCount+"/":"")+n.stat.shownCount," ",n.validData.length>1?n.itemsUnit:n.itemUnit," "),e.xp6(1),e.Q6J("ngIf",n.titleText),e.xp6(1),e.Tol(n.showSearch?"ant-transfer-list-body ant-transfer-list-body-with-search":"ant-transfer-list-body"),e.Q6J("ngClass",e.VKq(12,le,0===n.stat.shownCount)),e.xp6(1),e.Q6J("ngIf",n.showSearch),e.xp6(1),e.Q6J("ngIf",n.renderList)("ngIfElse",r),e.xp6(1),e.Q6J("ngIf",n.footer)}},dependencies:[u.O5,u.sg,u.mk,A.Wr,A.Ie,u.tP,L.Xo,L.gB,W],encapsulation:2,changeDetection:0})}return s})(),Y=(()=>{class s{splitDataSource(){this.leftDataSource=[],this.rightDataSource=[],this.nzDataSource.forEach(t=>{"right"===t.direction?(t.direction="right",this.rightDataSource.push(t)):(t.direction="left",this.leftDataSource.push(t))})}getCheckedData(t){return this["left"===t?"leftDataSource":"rightDataSource"].filter(i=>i.checked)}handleSelect(t,i,n){const r=this.getCheckedData(t);this.updateOperationStatus(t,r.length),this.nzSelectChange.emit({direction:t,checked:i,list:r,item:n})}handleFilterChange(t){this.nzSearchChange.emit(t)}updateOperationStatus(t,i){this["right"===t?"leftActive":"rightActive"]=(typeof i>"u"?this.getCheckedData(t).filter(n=>!n.disabled).length:i)>0}moveTo(t){this.updateOperationStatus("left"===t?"right":"left",0);const r=("left"===t?this.rightDataSource:this.leftDataSource).filter(h=>!0===h.checked&&!h.disabled);this.nzCanMove({direction:t,list:r}).subscribe(h=>this.truthMoveTo(t,h.filter(C=>!!C)),()=>r.forEach(h=>h.checked=!1))}truthMoveTo(t,i){const n="left"===t?"right":"left",r="left"===t?this.rightDataSource:this.leftDataSource,h="left"===t?this.leftDataSource:this.rightDataSource;for(const C of i)C.checked=!1,C.hide=!1,C.direction=t,r.splice(r.indexOf(C),1);h.splice(0,0,...i),this.updateOperationStatus(n),this.nzChange.emit({from:n,to:t,list:i}),this.markForCheckAllList()}constructor(t,i,n,r,h,C,pe){this.cdr=t,this.i18n=i,this.elementRef=n,this.renderer=r,this.directionality=h,this.nzFormStatusService=C,this.nzFormNoStatusService=pe,this.unsubscribe$=new U.x,this.leftFilter="",this.rightFilter="",this.dir="ltr",this.prefixCls="ant-transfer",this.statusCls={},this.hasFeedback=!1,this.nzDisabled=!1,this.nzDataSource=[],this.nzTitles=["",""],this.nzOperations=[],this.nzListStyle={},this.nzShowSelectAll=!0,this.nzCanMove=p=>(0,E.of)(p.list),this.nzRenderList=null,this.nzRender=null,this.nzFooter=null,this.nzShowSearch=!1,this.nzTargetKeys=[],this.nzSelectedKeys=[],this.nzStatus="",this.nzChange=new e.vpe,this.nzSearchChange=new e.vpe,this.nzSelectChange=new e.vpe,this.leftDataSource=[],this.rightDataSource=[],this.handleLeftSelectAll=p=>this.handleSelect("left",p),this.handleRightSelectAll=p=>this.handleSelect("right",p),this.handleLeftSelect=p=>this.handleSelect("left",!!p.checked,p),this.handleRightSelect=p=>this.handleSelect("right",!!p.checked,p),this.leftActive=!1,this.rightActive=!1,this.moveToLeft=()=>this.moveTo("left"),this.moveToRight=()=>this.moveTo("right")}markForCheckAllList(){this.lists&&this.lists.forEach(t=>t.markForCheck())}handleNzTargetKeys(){const t=(0,g.qo)(this.nzTargetKeys);this.leftDataSource.forEach(n=>{(n=>n.hasOwnProperty("key"))(n)&&-1!==t.indexOf(n.key)&&!n.disabled&&(n.checked=!0)}),this.moveToRight()}handleNzSelectedKeys(){const t=(0,g.qo)(this.nzSelectedKeys);this.nzDataSource.forEach(n=>{-1!==t.indexOf(n.key)&&(n.checked=!0)});const i=n=>!1===n.disabled&&!0===n.checked;this.rightActive=this.leftDataSource.some(i),this.leftActive=this.rightDataSource.some(i)}ngOnInit(){this.nzFormStatusService?.formStatusChanges.pipe((0,y.x)((t,i)=>t.status===i.status&&t.hasFeedback===i.hasFeedback),(0,O.M)(this.nzFormNoStatusService?this.nzFormNoStatusService.noFormStatus:(0,E.of)(!1)),(0,x.U)(([{status:t,hasFeedback:i},n])=>({status:n?"":t,hasFeedback:i})),(0,T.R)(this.unsubscribe$)).subscribe(({status:t,hasFeedback:i})=>{this.setStatusStyles(t,i)}),this.i18n.localeChange.pipe((0,T.R)(this.unsubscribe$)).subscribe(()=>{this.locale=this.i18n.getLocaleData("Transfer"),this.markForCheckAllList()}),this.dir=this.directionality.value,this.directionality.change?.pipe((0,T.R)(this.unsubscribe$)).subscribe(t=>{this.dir=t,this.cdr.detectChanges()})}ngOnChanges(t){const{nzStatus:i,nzDataSource:n,nzTargetKeys:r,nzSelectedKeys:h}=t;n&&(this.splitDataSource(),this.updateOperationStatus("left"),this.updateOperationStatus("right"),this.cdr.detectChanges(),this.markForCheckAllList()),r&&this.handleNzTargetKeys(),h&&this.handleNzSelectedKeys(),i&&this.setStatusStyles(this.nzStatus,this.hasFeedback)}ngOnDestroy(){this.unsubscribe$.next(),this.unsubscribe$.complete()}setStatusStyles(t,i){this.hasFeedback=i,this.cdr.markForCheck(),this.statusCls=(0,g.Zu)(this.prefixCls,t,i),Object.keys(this.statusCls).forEach(n=>{this.statusCls[n]?this.renderer.addClass(this.elementRef.nativeElement,n):this.renderer.removeClass(this.elementRef.nativeElement,n)})}static#e=this.\u0275fac=function(i){return new(i||s)(e.Y36(e.sBO),e.Y36(F.wi),e.Y36(e.SBq),e.Y36(e.Qsj),e.Y36(R.Is,8),e.Y36(k.kH,8),e.Y36(k.yW,8))};static#t=this.\u0275cmp=e.Xpm({type:s,selectors:[["nz-transfer"]],viewQuery:function(i,n){if(1&i&&e.Gf(J,5),2&i){let r;e.iGM(r=e.CRH())&&(n.lists=r)}},hostAttrs:[1,"ant-transfer"],hostVars:6,hostBindings:function(i,n){2&i&&e.ekj("ant-transfer-rtl","rtl"===n.dir)("ant-transfer-disabled",n.nzDisabled)("ant-transfer-customize-list",n.nzRenderList)},inputs:{nzDisabled:"nzDisabled",nzDataSource:"nzDataSource",nzTitles:"nzTitles",nzOperations:"nzOperations",nzListStyle:"nzListStyle",nzShowSelectAll:"nzShowSelectAll",nzItemUnit:"nzItemUnit",nzItemsUnit:"nzItemsUnit",nzCanMove:"nzCanMove",nzRenderList:"nzRenderList",nzRender:"nzRender",nzFooter:"nzFooter",nzShowSearch:"nzShowSearch",nzFilterOption:"nzFilterOption",nzSearchPlaceholder:"nzSearchPlaceholder",nzNotFoundContent:"nzNotFoundContent",nzTargetKeys:"nzTargetKeys",nzSelectedKeys:"nzSelectedKeys",nzStatus:"nzStatus"},outputs:{nzChange:"nzChange",nzSearchChange:"nzSearchChange",nzSelectChange:"nzSelectChange"},exportAs:["nzTransfer"],standalone:!0,features:[e.TTD,e.jDz],decls:4,vars:32,consts:[["data-direction","left","direction","left",1,"ant-transfer-list",3,"ngStyle","titleText","showSelectAll","dataSource","filter","filterOption","renderList","render","disabled","showSearch","searchPlaceholder","notFoundContent","itemUnit","itemsUnit","footer","filterChange","handleSelect","handleSelectAll"],["class","ant-transfer-operation",4,"ngIf"],["data-direction","right","direction","right",1,"ant-transfer-list",3,"ngStyle","titleText","showSelectAll","dataSource","filter","filterOption","renderList","render","disabled","showSearch","searchPlaceholder","notFoundContent","itemUnit","itemsUnit","footer","filterChange","handleSelect","handleSelectAll"],[1,"ant-transfer-operation"],["nz-button","","type","button",3,"disabled","nzType","nzSize","click"],["nz-icon","","nzType","left"],[4,"ngIf"],["nz-icon","","nzType","right"]],template:function(i,n){1&i&&(e.TgZ(0,"nz-transfer-list",0),e.NdJ("filterChange",function(h){return n.handleFilterChange(h)})("handleSelect",function(h){return n.handleLeftSelect(h)})("handleSelectAll",function(h){return n.handleLeftSelectAll(h)}),e.qZA(),e.YNc(1,he,7,8,"div",1)(2,fe,7,8,"div",1),e.TgZ(3,"nz-transfer-list",2),e.NdJ("filterChange",function(h){return n.handleFilterChange(h)})("handleSelect",function(h){return n.handleRightSelect(h)})("handleSelectAll",function(h){return n.handleRightSelectAll(h)}),e.qZA()),2&i&&(e.Q6J("ngStyle",n.nzListStyle)("titleText",n.nzTitles[0])("showSelectAll",n.nzShowSelectAll)("dataSource",n.leftDataSource)("filter",n.leftFilter)("filterOption",n.nzFilterOption)("renderList",n.nzRenderList&&n.nzRenderList[0])("render",n.nzRender)("disabled",n.nzDisabled)("showSearch",n.nzShowSearch)("searchPlaceholder",n.nzSearchPlaceholder||(null==n.locale?null:n.locale.searchPlaceholder))("notFoundContent",n.nzNotFoundContent)("itemUnit",n.nzItemUnit||(null==n.locale?null:n.locale.itemUnit))("itemsUnit",n.nzItemsUnit||(null==n.locale?null:n.locale.itemsUnit))("footer",n.nzFooter),e.xp6(1),e.Q6J("ngIf","rtl"!==n.dir),e.xp6(1),e.Q6J("ngIf","rtl"===n.dir),e.xp6(1),e.Q6J("ngStyle",n.nzListStyle)("titleText",n.nzTitles[1])("showSelectAll",n.nzShowSelectAll)("dataSource",n.rightDataSource)("filter",n.rightFilter)("filterOption",n.nzFilterOption)("renderList",n.nzRenderList&&n.nzRenderList[1])("render",n.nzRender)("disabled",n.nzDisabled)("showSearch",n.nzShowSearch)("searchPlaceholder",n.nzSearchPlaceholder||(null==n.locale?null:n.locale.searchPlaceholder))("notFoundContent",n.nzNotFoundContent)("itemUnit",n.nzItemUnit||(null==n.locale?null:n.locale.itemUnit))("itemsUnit",n.nzItemsUnit||(null==n.locale?null:n.locale.itemsUnit))("footer",n.nzFooter))},dependencies:[J,u.PC,v.PV,v.Ls,N.sL,N.ix,K.w,c.dQ,u.O5],encapsulation:2,changeDetection:0})}return(0,b.gn)([(0,g.yF)()],s.prototype,"nzDisabled",void 0),(0,b.gn)([(0,g.yF)()],s.prototype,"nzShowSelectAll",void 0),(0,b.gn)([(0,g.yF)()],s.prototype,"nzShowSearch",void 0),s})(),ue=(()=>{class s{static#e=this.\u0275fac=function(i){return new(i||s)};static#t=this.\u0275mod=e.oAB({type:s});static#n=this.\u0275inj=e.cJS({imports:[Y,J,W]})}return s})()}}]);