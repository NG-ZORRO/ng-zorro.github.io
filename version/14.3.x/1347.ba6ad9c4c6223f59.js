"use strict";(self.webpackChunkng_zorro_antd_doc=self.webpackChunkng_zorro_antd_doc||[]).push([[1347],{1347:(ze,w,i)=>{i.d(w,{cq:()=>ae,zr:()=>le});var r=i(655),g=i(9521),p=i(8184),e=i(4650),O=i(4006),P=i(8929),E=i(1086),I=i(6787),b=i(5778),A=i(7168),B=i(4850),C=i(7625),K=i(2994),R=i(2198),F=i(1532),z=i(2661),d=i(9975),W=i(316),S=i(6223),c=i(9218),h=i(4186),y=i(445),L=i(2687),T=i(7022),f=i(7360),_=i(6895),N=i(3818),k=i(2619),U=i(8751);const V=["nzTreeTemplate"],H=["treeRef"];function J(o,a){if(1&o&&(e.TgZ(0,"span",12),e._UZ(1,"nz-embed-empty",13),e.qZA()),2&o){const t=e.oxw(2);e.xp6(1),e.Q6J("nzComponentName","tree-select")("specificContent",t.nzNotFoundContent)}}const D=function(){return[]};function Q(o,a){if(1&o){const t=e.EpF();e.TgZ(0,"div",8)(1,"nz-tree",9,10),e.NdJ("nzExpandChange",function(s){e.CHM(t);const l=e.oxw();return e.KtG(l.onExpandedKeysChange(s))})("nzClick",function(s){e.CHM(t);const l=e.oxw();return e.KtG(l.nzTreeClick.emit(s))})("nzCheckedKeysChange",function(){e.CHM(t);const s=e.oxw();return e.KtG(s.updateSelectedNodes())})("nzSelectedKeysChange",function(){e.CHM(t);const s=e.oxw();return e.KtG(s.updateSelectedNodes())})("nzCheckBoxChange",function(s){e.CHM(t);const l=e.oxw();return e.KtG(l.nzTreeCheckBoxChange.emit(s))})("nzSearchValueChange",function(s){e.CHM(t);const l=e.oxw();return e.KtG(l.setSearchValues(s))}),e.qZA(),e.YNc(3,J,2,2,"span",11),e.qZA()}if(2&o){const t=e.oxw();e.ekj("ant-select-dropdown-placement-bottomLeft","bottom"===t.dropDownPosition)("ant-select-dropdown-placement-topLeft","top"===t.dropDownPosition)("ant-tree-select-dropdown-rtl","rtl"===t.dir),e.Q6J("@slideMotion","enter")("ngClass",t.dropdownClassName)("@.disabled",!(null==t.noAnimation||!t.noAnimation.nzNoAnimation))("nzNoAnimation",null==t.noAnimation?null:t.noAnimation.nzNoAnimation)("dir",t.dir)("ngStyle",t.nzDropdownStyle),e.xp6(1),e.Q6J("hidden",t.isNotFound)("nzData",t.nzNodes)("nzMultiple",t.nzMultiple)("nzSearchValue",t.inputValue)("nzHideUnMatched",t.nzHideUnMatched)("nzShowIcon",t.nzShowIcon)("nzCheckable",t.nzCheckable)("nzAsyncData",t.nzAsyncData)("nzShowExpand",t.nzShowExpand)("nzShowLine",t.nzShowLine)("nzExpandedIcon",t.nzExpandedIcon)("nzExpandAll",t.nzDefaultExpandAll)("nzExpandedKeys",t.expandedKeys)("nzCheckedKeys",t.nzCheckable?t.value:e.DdM(34,D))("nzSelectedKeys",t.nzCheckable?e.DdM(35,D):t.value)("nzTreeTemplate",t.treeTemplate)("nzCheckStrictly",t.nzCheckStrictly)("nzVirtualItemSize",t.nzVirtualItemSize)("nzVirtualMaxBufferPx",t.nzVirtualMaxBufferPx)("nzVirtualMinBufferPx",t.nzVirtualMinBufferPx)("nzVirtualHeight",t.nzVirtualHeight),e.xp6(2),e.Q6J("ngIf",0===t.nzNodes.length||t.isNotFound)}}function Y(o,a){if(1&o){const t=e.EpF();e.TgZ(0,"nz-select-item",16),e.NdJ("delete",function(){const l=e.CHM(t).$implicit,u=e.oxw(2);return e.KtG(u.removeSelected(l,!0))}),e.qZA()}if(2&o){const t=a.$implicit,n=e.oxw(2);e.Q6J("deletable",!0)("disabled",t.isDisabled||n.nzDisabled)("label",n.nzDisplayWith(t))}}function Z(o,a){if(1&o&&(e._UZ(0,"nz-select-item",17),e.ALo(1,"slice")),2&o){const t=e.oxw(2);e.Q6J("contentTemplateOutlet",t.nzMaxTagPlaceholder)("contentTemplateOutletContext",e.xi3(1,5,t.selectedNodes,t.nzMaxTagCount))("deletable",!1)("disabled",!1)("label","+ "+(t.selectedNodes.length-t.nzMaxTagCount)+" ...")}}function G(o,a){if(1&o&&(e.ynx(0),e.YNc(1,Y,1,3,"nz-select-item",14),e.ALo(2,"slice"),e.YNc(3,Z,2,8,"nz-select-item",15),e.BQk()),2&o){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.Dn7(2,3,t.selectedNodes,0,t.nzMaxTagCount))("ngForTrackBy",t.trackValue),e.xp6(2),e.Q6J("ngIf",t.selectedNodes.length>t.nzMaxTagCount)}}function j(o,a){if(1&o&&e._UZ(0,"nz-select-placeholder",18),2&o){const t=e.oxw();e.Udp("display",t.placeHolderDisplay),e.Q6J("placeholder",t.nzPlaceHolder)}}function $(o,a){if(1&o&&e._UZ(0,"nz-select-item",19),2&o){const t=e.oxw();e.Q6J("deletable",!1)("disabled",!1)("label",t.nzDisplayWith(t.selectedNodes[0]))}}function X(o,a){1&o&&e._UZ(0,"nz-select-arrow")}function q(o,a){if(1&o&&e._UZ(0,"nz-form-item-feedback-icon",23),2&o){const t=e.oxw(3);e.Q6J("status",t.status)}}function ee(o,a){if(1&o&&e.YNc(0,q,1,1,"nz-form-item-feedback-icon",22),2&o){const t=e.oxw(2);e.Q6J("ngIf",t.hasFeedback&&!!t.status)}}function te(o,a){if(1&o&&(e.TgZ(0,"nz-select-arrow",20),e.YNc(1,ee,1,1,"ng-template",null,21,e.W1O),e.qZA()),2&o){const t=e.MAs(2),n=e.oxw();e.Q6J("showArrow",!n.isMultiple)("feedbackIcon",t)}}function ne(o,a){if(1&o){const t=e.EpF();e.TgZ(0,"nz-select-clear",24),e.NdJ("clear",function(){e.CHM(t);const s=e.oxw();return e.KtG(s.onClearSelection())}),e.qZA()}}let M=(()=>{class o extends S.kW{}return o.\u0275fac=function(){let a;return function(n){return(a||(a=e.n5z(o)))(n||o)}}(),o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac}),o})();function oe(o){return o.get(M)}const v="ant-select-dropdown ant-select-tree-dropdown",ie=[d.yW.bottomLeft,d.yW.bottomRight,d.yW.topRight,d.yW.topLeft];let le=(()=>{class o extends S.fP{constructor(t,n,s,l,u,m,re,ce,de,he){super(t),this.nzConfigService=n,this.renderer=s,this.cdr=l,this.elementRef=u,this.directionality=m,this.focusMonitor=re,this.noAnimation=ce,this.nzFormStatusService=de,this.nzFormNoStatusService=he,this._nzModuleName="treeSelect",this.nzId=null,this.nzAllowClear=!0,this.nzShowExpand=!0,this.nzShowLine=!1,this.nzDropdownMatchSelectWidth=!0,this.nzCheckable=!1,this.nzHideUnMatched=!1,this.nzShowIcon=!1,this.nzShowSearch=!1,this.nzDisabled=!1,this.nzAsyncData=!1,this.nzMultiple=!1,this.nzDefaultExpandAll=!1,this.nzCheckStrictly=!1,this.nzVirtualItemSize=28,this.nzVirtualMaxBufferPx=500,this.nzVirtualMinBufferPx=28,this.nzVirtualHeight=null,this.nzNodes=[],this.nzOpen=!1,this.nzSize="default",this.nzPlaceHolder="",this.nzDropdownStyle=null,this.nzBackdrop=!1,this.nzStatus="",this.nzPlacement="",this.nzDisplayWith=x=>x.title,this.nzMaxTagPlaceholder=null,this.nzOpenChange=new e.vpe,this.nzCleared=new e.vpe,this.nzRemoved=new e.vpe,this.nzExpandChange=new e.vpe,this.nzTreeClick=new e.vpe,this.nzTreeCheckBoxChange=new e.vpe,this.prefixCls="ant-select",this.statusCls={},this.status="",this.hasFeedback=!1,this.dropdownClassName=v,this.isComposing=!1,this.isDestroy=!0,this.isNotFound=!1,this.focused=!1,this.inputValue="",this.dropDownPosition="bottom",this.selectedNodes=[],this.expandedKeys=[],this.value=[],this.dir="ltr",this.positions=[],this.destroy$=new P.xQ,this.onChange=x=>{},this.onTouched=()=>{},this.renderer.addClass(this.elementRef.nativeElement,"ant-select"),this.renderer.addClass(this.elementRef.nativeElement,"ant-tree-select")}set nzExpandedKeys(t){this.expandedKeys=t}get nzExpandedKeys(){return this.expandedKeys}get treeTemplate(){return this.nzTreeTemplate||this.nzTreeTemplateChild}get placeHolderDisplay(){return this.inputValue||this.isComposing||this.selectedNodes.length?"none":"block"}get isMultiple(){return this.nzMultiple||this.nzCheckable}ngOnInit(){this.nzFormStatusService?.formStatusChanges.pipe((0,b.x)((t,n)=>t.status===n.status&&t.hasFeedback===n.hasFeedback),(0,A.M)(this.nzFormNoStatusService?this.nzFormNoStatusService.noFormStatus:(0,E.of)(!1)),(0,B.U)(([{status:t,hasFeedback:n},s])=>({status:s?"":t,hasFeedback:n})),(0,C.R)(this.destroy$)).subscribe(({status:t,hasFeedback:n})=>{this.setStatusStyles(t,n)}),this.isDestroy=!1,this.subscribeSelectionChange(),this.directionality.change?.pipe((0,C.R)(this.destroy$)).subscribe(t=>{this.dir=t,this.cdr.detectChanges()}),this.dir=this.directionality.value,this.focusMonitor.monitor(this.elementRef,!0).pipe((0,C.R)(this.destroy$)).subscribe(t=>{t?(this.focused=!0,this.cdr.markForCheck()):(this.focused=!1,this.cdr.markForCheck(),Promise.resolve().then(()=>{this.onTouched()}))})}ngOnDestroy(){this.isDestroy=!0,this.closeDropDown(),this.destroy$.next(),this.destroy$.complete()}isComposingChange(t){this.isComposing=t}setDisabledState(t){this.nzDisabled=t,this.closeDropDown()}setStatusStyles(t,n){this.status=t,this.hasFeedback=n,this.cdr.markForCheck(),this.statusCls=(0,c.Zu)(this.prefixCls,t,n),Object.keys(this.statusCls).forEach(s=>{this.statusCls[s]?this.renderer.addClass(this.elementRef.nativeElement,s):this.renderer.removeClass(this.elementRef.nativeElement,s)})}ngOnChanges(t){const{nzNodes:n,nzDropdownClassName:s,nzStatus:l,nzPlacement:u}=t;if(n&&this.updateSelectedNodes(!0),s){const m=this.nzDropdownClassName&&this.nzDropdownClassName.trim();this.dropdownClassName=m?`${v} ${m}`:v}l&&this.setStatusStyles(this.nzStatus,this.hasFeedback),u&&this.nzPlacement&&d.yW[this.nzPlacement]&&(this.positions=[d.yW[this.nzPlacement]])}writeValue(t){(0,c.DX)(t)?(this.value=this.isMultiple&&Array.isArray(t)?t:[t],this.updateSelectedNodes(!0)):(this.value=[],this.selectedNodes.forEach(n=>{this.removeSelected(n,!1)}),this.selectedNodes=[]),this.cdr.markForCheck()}registerOnChange(t){this.onChange=t}registerOnTouched(t){this.onTouched=t}onKeydown(t){if(!this.nzDisabled)switch(t.keyCode){case g.hY:break;case g.Mf:this.closeDropDown();break;default:this.nzOpen||this.openDropdown()}}trigger(){this.nzDisabled||!this.nzDisabled&&this.nzOpen?this.closeDropDown():this.openDropdown()}openDropdown(){this.nzDisabled||(this.nzOpen=!0,this.nzOpenChange.emit(this.nzOpen),this.updateCdkConnectedOverlayStatus(),(this.nzShowSearch||this.isMultiple)&&this.focusOnInput())}closeDropDown(){this.onTouched(),this.nzOpen=!1,this.inputValue="",this.isNotFound=!1,this.nzOpenChange.emit(this.nzOpen),this.cdr.markForCheck()}onKeyDownInput(t){this.isMultiple&&!t.target.value&&t.keyCode===g.ZH&&(t.preventDefault(),this.selectedNodes.length)&&this.removeSelected(this.selectedNodes[this.selectedNodes.length-1])}onExpandedKeysChange(t){this.nzExpandChange.emit(t),this.expandedKeys=[...t.keys]}setInputValue(t){this.inputValue=t,this.updatePosition()}removeSelected(t,n=!0){t.isSelected=!1,t.isChecked=!1,this.nzCheckable?this.nzTreeService.conduct(t,this.nzCheckStrictly):this.nzTreeService.setSelectedNodeList(t,this.nzMultiple),n&&this.nzRemoved.emit(t)}focusOnInput(){this.nzSelectSearchComponent&&this.nzSelectSearchComponent.focus()}subscribeSelectionChange(){(0,I.T)(this.nzTreeClick.pipe((0,K.b)(t=>{const n=t.node;this.nzCheckable&&!n.isDisabled&&!n.isDisableCheckbox&&(n.isChecked=!n.isChecked,n.isHalfChecked=!1,this.nzCheckStrictly||this.nzTreeService.conduct(n)),this.nzCheckable&&(n.isSelected=!1)}),(0,R.h)(t=>{const n=t.node;return this.nzCheckable?!n.isDisabled&&!n.isDisableCheckbox:!n.isDisabled&&n.isSelectable})),this.nzCheckable?this.nzTreeCheckBoxChange:(0,E.of)(),this.nzCleared,this.nzRemoved).pipe((0,C.R)(this.destroy$)).subscribe(()=>{this.updateSelectedNodes();const t=this.selectedNodes.map(n=>n.key);this.value=[...t],(this.nzShowSearch||this.isMultiple)&&(this.inputValue="",this.isNotFound=!1),this.isMultiple?(this.onChange(t),this.focusOnInput(),this.updatePosition()):(this.closeDropDown(),this.onChange(t.length?t[0]:null))})}updateSelectedNodes(t=!1){if(t){const n=this.coerceTreeNodes(this.nzNodes);this.nzTreeService.isMultiple=this.isMultiple,this.nzTreeService.isCheckStrictly=this.nzCheckStrictly,this.nzTreeService.initTree(n),this.nzCheckable?this.nzTreeService.conductCheck(this.value,this.nzCheckStrictly):this.nzTreeService.conductSelectedKeys(this.value,this.isMultiple)}this.selectedNodes=[...this.nzCheckable?this.getCheckedNodeList():this.getSelectedNodeList()]}updatePosition(){(0,W.e)(()=>{this.cdkConnectedOverlay?.overlayRef?.updatePosition()})}onPositionChange(t){this.dropDownPosition=t.connectionPair.originY}onClearSelection(){this.selectedNodes.forEach(t=>{this.removeSelected(t,!1)}),this.nzCleared.emit()}onClickOutside(t){this.elementRef.nativeElement.contains(t.target)||this.closeDropDown()}setSearchValues(t){Promise.resolve().then(()=>{this.isNotFound=(this.nzShowSearch||this.isMultiple)&&!!this.inputValue&&0===t.matchedKeys.length})}updateCdkConnectedOverlayStatus(){(!this.nzPlacement||!ie.includes(d.yW[this.nzPlacement]))&&(this.triggerWidth=this.cdkOverlayOrigin.elementRef.nativeElement.getBoundingClientRect().width)}trackValue(t,n){return n.key}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(M),e.Y36(z.jY),e.Y36(e.Qsj),e.Y36(e.sBO),e.Y36(e.SBq),e.Y36(y.Is,8),e.Y36(L.tE),e.Y36(T.P,9),e.Y36(f.kH,8),e.Y36(f.yW,8))},o.\u0275cmp=e.Xpm({type:o,selectors:[["nz-tree-select"]],contentQueries:function(t,n,s){if(1&t&&e.Suo(s,V,7),2&t){let l;e.iGM(l=e.CRH())&&(n.nzTreeTemplateChild=l.first)}},viewQuery:function(t,n){if(1&t&&(e.Gf(h.Gt,5),e.Gf(H,5),e.Gf(p.xu,7),e.Gf(p.pI,5)),2&t){let s;e.iGM(s=e.CRH())&&(n.nzSelectSearchComponent=s.first),e.iGM(s=e.CRH())&&(n.treeRef=s.first),e.iGM(s=e.CRH())&&(n.cdkOverlayOrigin=s.first),e.iGM(s=e.CRH())&&(n.cdkConnectedOverlay=s.first)}},hostAttrs:[1,"ant-select"],hostVars:24,hostBindings:function(t,n){1&t&&e.NdJ("click",function(){return n.trigger()})("keydown",function(l){return n.onKeydown(l)}),2&t&&e.ekj("ant-select-in-form-item",!!n.nzFormStatusService)("ant-select-lg","large"===n.nzSize)("ant-select-rtl","rtl"===n.dir)("ant-select-sm","small"===n.nzSize)("ant-select-disabled",n.nzDisabled)("ant-select-single",!n.isMultiple)("ant-select-show-arrow",!n.isMultiple)("ant-select-show-search",!n.isMultiple)("ant-select-multiple",n.isMultiple)("ant-select-allow-clear",n.nzAllowClear)("ant-select-open",n.nzOpen)("ant-select-focused",n.nzOpen||n.focused)},inputs:{nzId:"nzId",nzAllowClear:"nzAllowClear",nzShowExpand:"nzShowExpand",nzShowLine:"nzShowLine",nzDropdownMatchSelectWidth:"nzDropdownMatchSelectWidth",nzCheckable:"nzCheckable",nzHideUnMatched:"nzHideUnMatched",nzShowIcon:"nzShowIcon",nzShowSearch:"nzShowSearch",nzDisabled:"nzDisabled",nzAsyncData:"nzAsyncData",nzMultiple:"nzMultiple",nzDefaultExpandAll:"nzDefaultExpandAll",nzCheckStrictly:"nzCheckStrictly",nzVirtualItemSize:"nzVirtualItemSize",nzVirtualMaxBufferPx:"nzVirtualMaxBufferPx",nzVirtualMinBufferPx:"nzVirtualMinBufferPx",nzVirtualHeight:"nzVirtualHeight",nzExpandedIcon:"nzExpandedIcon",nzNotFoundContent:"nzNotFoundContent",nzNodes:"nzNodes",nzOpen:"nzOpen",nzSize:"nzSize",nzPlaceHolder:"nzPlaceHolder",nzDropdownStyle:"nzDropdownStyle",nzDropdownClassName:"nzDropdownClassName",nzBackdrop:"nzBackdrop",nzStatus:"nzStatus",nzPlacement:"nzPlacement",nzExpandedKeys:"nzExpandedKeys",nzDisplayWith:"nzDisplayWith",nzMaxTagCount:"nzMaxTagCount",nzMaxTagPlaceholder:"nzMaxTagPlaceholder",nzTreeTemplate:"nzTreeTemplate"},outputs:{nzOpenChange:"nzOpenChange",nzCleared:"nzCleared",nzRemoved:"nzRemoved",nzExpandChange:"nzExpandChange",nzTreeClick:"nzTreeClick",nzTreeCheckBoxChange:"nzTreeCheckBoxChange"},exportAs:["nzTreeSelect"],features:[e._Bn([M,{provide:S.g2,useFactory:oe,deps:[[new e.PiD,e.zs3]]},{provide:O.JU,useExisting:(0,e.Gpc)(()=>o),multi:!0}]),e.qOj,e.TTD],decls:9,vars:20,consts:[["cdkConnectedOverlay","","nzConnectedOverlay","",3,"cdkConnectedOverlayHasBackdrop","cdkConnectedOverlayOrigin","cdkConnectedOverlayPositions","cdkConnectedOverlayOpen","cdkConnectedOverlayTransformOriginOn","cdkConnectedOverlayMinWidth","cdkConnectedOverlayWidth","overlayOutsideClick","detach","positionChange"],["cdkOverlayOrigin","",1,"ant-select-selector"],[4,"ngIf"],[3,"nzId","showInput","value","mirrorSync","disabled","focusTrigger","keydown","isComposingChange","valueChange"],[3,"placeholder","display",4,"ngIf"],[3,"deletable","disabled","label",4,"ngIf"],[3,"showArrow","feedbackIcon",4,"ngIf"],[3,"clear",4,"ngIf"],[3,"ngClass","nzNoAnimation","dir","ngStyle"],["nzNoAnimation","","nzSelectMode","","nzBlockNode","",3,"hidden","nzData","nzMultiple","nzSearchValue","nzHideUnMatched","nzShowIcon","nzCheckable","nzAsyncData","nzShowExpand","nzShowLine","nzExpandedIcon","nzExpandAll","nzExpandedKeys","nzCheckedKeys","nzSelectedKeys","nzTreeTemplate","nzCheckStrictly","nzVirtualItemSize","nzVirtualMaxBufferPx","nzVirtualMinBufferPx","nzVirtualHeight","nzExpandChange","nzClick","nzCheckedKeysChange","nzSelectedKeysChange","nzCheckBoxChange","nzSearchValueChange"],["treeRef",""],["class","ant-select-not-found",4,"ngIf"],[1,"ant-select-not-found"],[3,"nzComponentName","specificContent"],[3,"deletable","disabled","label","delete",4,"ngFor","ngForOf","ngForTrackBy"],[3,"contentTemplateOutlet","contentTemplateOutletContext","deletable","disabled","label",4,"ngIf"],[3,"deletable","disabled","label","delete"],[3,"contentTemplateOutlet","contentTemplateOutletContext","deletable","disabled","label"],[3,"placeholder"],[3,"deletable","disabled","label"],[3,"showArrow","feedbackIcon"],["feedbackIconTpl",""],[3,"status",4,"ngIf"],[3,"status"],[3,"clear"]],template:function(t,n){1&t&&(e.YNc(0,Q,4,36,"ng-template",0),e.NdJ("overlayOutsideClick",function(l){return n.onClickOutside(l)})("detach",function(){return n.closeDropDown()})("positionChange",function(l){return n.onPositionChange(l)}),e.TgZ(1,"div",1),e.YNc(2,G,4,7,"ng-container",2),e.TgZ(3,"nz-select-search",3),e.NdJ("keydown",function(l){return n.onKeyDownInput(l)})("isComposingChange",function(l){return n.isComposing=l})("valueChange",function(l){return n.setInputValue(l)}),e.qZA(),e.YNc(4,j,1,3,"nz-select-placeholder",4),e.YNc(5,$,1,3,"nz-select-item",5),e.YNc(6,X,1,0,"nz-select-arrow",2),e.YNc(7,te,3,2,"nz-select-arrow",6),e.YNc(8,ne,1,0,"nz-select-clear",7),e.qZA()),2&t&&(e.Q6J("cdkConnectedOverlayHasBackdrop",n.nzBackdrop)("cdkConnectedOverlayOrigin",n.cdkOverlayOrigin)("cdkConnectedOverlayPositions",n.nzPlacement?n.positions:e.DdM(19,D))("cdkConnectedOverlayOpen",n.nzOpen)("cdkConnectedOverlayTransformOriginOn",".ant-select-tree-dropdown")("cdkConnectedOverlayMinWidth",n.nzDropdownMatchSelectWidth?null:n.triggerWidth)("cdkConnectedOverlayWidth",n.nzDropdownMatchSelectWidth?n.triggerWidth:null),e.xp6(2),e.Q6J("ngIf",n.isMultiple),e.xp6(1),e.Q6J("nzId",n.nzId)("showInput",n.nzShowSearch)("value",n.inputValue)("mirrorSync",n.isMultiple)("disabled",n.nzDisabled)("focusTrigger",n.nzOpen),e.xp6(1),e.Q6J("ngIf",n.nzPlaceHolder&&0===n.selectedNodes.length),e.xp6(1),e.Q6J("ngIf",!n.isMultiple&&1===n.selectedNodes.length&&!n.isComposing&&""===n.inputValue),e.xp6(1),e.Q6J("ngIf",!n.isMultiple),e.xp6(1),e.Q6J("ngIf",!n.isMultiple||n.hasFeedback&&!!n.status),e.xp6(1),e.Q6J("ngIf",n.nzAllowClear&&!n.nzDisabled&&n.selectedNodes.length))},dependencies:[y.Lv,_.mk,_.sg,_.O5,_.PC,p.pI,p.xu,h.uf,h.kq,h.Go,h.Y6,h.Gt,N.Hc,k.gB,d.hQ,T.P,f.w_,_.OU],encapsulation:2,data:{animation:[F.mF]}}),(0,r.gn)([(0,c.yF)()],o.prototype,"nzAllowClear",void 0),(0,r.gn)([(0,c.yF)()],o.prototype,"nzShowExpand",void 0),(0,r.gn)([(0,c.yF)()],o.prototype,"nzShowLine",void 0),(0,r.gn)([(0,c.yF)(),(0,z.oS)()],o.prototype,"nzDropdownMatchSelectWidth",void 0),(0,r.gn)([(0,c.yF)()],o.prototype,"nzCheckable",void 0),(0,r.gn)([(0,c.yF)(),(0,z.oS)()],o.prototype,"nzHideUnMatched",void 0),(0,r.gn)([(0,c.yF)(),(0,z.oS)()],o.prototype,"nzShowIcon",void 0),(0,r.gn)([(0,c.yF)()],o.prototype,"nzShowSearch",void 0),(0,r.gn)([(0,c.yF)()],o.prototype,"nzDisabled",void 0),(0,r.gn)([(0,c.yF)()],o.prototype,"nzAsyncData",void 0),(0,r.gn)([(0,c.yF)()],o.prototype,"nzMultiple",void 0),(0,r.gn)([(0,c.yF)()],o.prototype,"nzDefaultExpandAll",void 0),(0,r.gn)([(0,c.yF)()],o.prototype,"nzCheckStrictly",void 0),(0,r.gn)([(0,z.oS)()],o.prototype,"nzSize",void 0),(0,r.gn)([(0,z.oS)()],o.prototype,"nzBackdrop",void 0),o})(),ae=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[y.vT,_.ez,p.U8,O.u5,h.LV,N.vO,U.PV,k.Xo,d.e4,T.g,f.mJ]}),o})()}}]);