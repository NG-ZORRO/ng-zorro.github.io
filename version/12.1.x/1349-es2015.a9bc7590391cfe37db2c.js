"use strict";(self.webpackChunkng_zorro_antd=self.webpackChunkng_zorro_antd||[]).push([[1349],{71019:function(n,e,t){t.d(e,{i:function(){return f},m:function(){return b}});var o=t(64762),i=t(70946),c=t(36461),d=t(37716),s=t(3679),Z=t(79765),a=t(22759),r=t(46782),g=t(27520),l=t(14176),h=t(38583),z=t(79874),u=t(57669),m=t(48095),T=t(19238);const p=["switchElement"];function A(n,e){1&n&&d._UZ(0,"i",8)}function q(n,e){if(1&n&&(d.ynx(0),d._uU(1),d.BQk()),2&n){const n=d.oxw(2);d.xp6(1),d.Oqu(n.nzCheckedChildren)}}function w(n,e){if(1&n&&(d.ynx(0),d.YNc(1,q,2,1,"ng-container",9),d.BQk()),2&n){const n=d.oxw();d.xp6(1),d.Q6J("nzStringTemplateOutlet",n.nzCheckedChildren)}}function U(n,e){if(1&n&&(d.ynx(0),d._uU(1),d.BQk()),2&n){const n=d.oxw(2);d.xp6(1),d.Oqu(n.nzUnCheckedChildren)}}function _(n,e){if(1&n&&d.YNc(0,U,2,1,"ng-container",9),2&n){const n=d.oxw();d.Q6J("nzStringTemplateOutlet",n.nzUnCheckedChildren)}}let f=(()=>{class n{constructor(n,e,t,o,i,c){this.nzConfigService=n,this.host=e,this.ngZone=t,this.cdr=o,this.focusMonitor=i,this.directionality=c,this._nzModuleName="switch",this.isChecked=!1,this.onChange=()=>{},this.onTouched=()=>{},this.nzLoading=!1,this.nzDisabled=!1,this.nzControl=!1,this.nzCheckedChildren=null,this.nzUnCheckedChildren=null,this.nzSize="default",this.dir="ltr",this.destroy$=new Z.xQ}updateValue(n){this.isChecked!==n&&(this.isChecked=n,this.onChange(this.isChecked))}focus(){this.focusMonitor.focusVia(this.switchElement.nativeElement,"keyboard")}blur(){this.switchElement.nativeElement.blur()}ngOnInit(){this.directionality.change.pipe((0,r.R)(this.destroy$)).subscribe(n=>{this.dir=n,this.cdr.detectChanges()}),this.dir=this.directionality.value,this.ngZone.runOutsideAngular(()=>{(0,a.R)(this.host.nativeElement,"click").pipe((0,r.R)(this.destroy$)).subscribe(n=>{n.preventDefault(),!(this.nzControl||this.nzDisabled||this.nzLoading)&&this.ngZone.run(()=>{this.updateValue(!this.isChecked),this.cdr.markForCheck()})}),(0,a.R)(this.switchElement.nativeElement,"keydown").pipe((0,r.R)(this.destroy$)).subscribe(n=>{if(this.nzControl||this.nzDisabled||this.nzLoading)return;const{keyCode:e}=n;e!==c.oh&&e!==c.SV&&e!==c.L_&&e!==c.K5||(n.preventDefault(),this.ngZone.run(()=>{e===c.oh?this.updateValue(!1):e===c.SV?this.updateValue(!0):(e===c.L_||e===c.K5)&&this.updateValue(!this.isChecked),this.cdr.markForCheck()}))})})}ngAfterViewInit(){this.focusMonitor.monitor(this.switchElement.nativeElement,!0).pipe((0,r.R)(this.destroy$)).subscribe(n=>{n||Promise.resolve().then(()=>this.onTouched())})}ngOnDestroy(){this.focusMonitor.stopMonitoring(this.switchElement.nativeElement),this.destroy$.next(),this.destroy$.complete()}writeValue(n){this.isChecked=n,this.cdr.markForCheck()}registerOnChange(n){this.onChange=n}registerOnTouched(n){this.onTouched=n}setDisabledState(n){this.nzDisabled=n,this.cdr.markForCheck()}}return n.\u0275fac=function(e){return new(e||n)(d.Y36(g.jY),d.Y36(d.SBq),d.Y36(d.R0b),d.Y36(d.sBO),d.Y36(T.tE),d.Y36(i.Is,8))},n.\u0275cmp=d.Xpm({type:n,selectors:[["nz-switch"]],viewQuery:function(n,e){if(1&n&&d.Gf(p,7),2&n){let n;d.iGM(n=d.CRH())&&(e.switchElement=n.first)}},inputs:{nzLoading:"nzLoading",nzDisabled:"nzDisabled",nzControl:"nzControl",nzCheckedChildren:"nzCheckedChildren",nzUnCheckedChildren:"nzUnCheckedChildren",nzSize:"nzSize"},exportAs:["nzSwitch"],features:[d._Bn([{provide:s.JU,useExisting:(0,d.Gpc)(()=>n),multi:!0}])],decls:9,vars:15,consts:[["nz-wave","","type","button",1,"ant-switch",3,"disabled","nzWaveExtraNode"],["switchElement",""],[1,"ant-switch-handle"],["nz-icon","","nzType","loading","class","ant-switch-loading-icon",4,"ngIf"],[1,"ant-switch-inner"],[4,"ngIf","ngIfElse"],["uncheckTemplate",""],[1,"ant-click-animating-node"],["nz-icon","","nzType","loading",1,"ant-switch-loading-icon"],[4,"nzStringTemplateOutlet"]],template:function(n,e){if(1&n&&(d.TgZ(0,"button",0,1),d.TgZ(2,"span",2),d.YNc(3,A,1,0,"i",3),d.qZA(),d.TgZ(4,"span",4),d.YNc(5,w,2,1,"ng-container",5),d.YNc(6,_,1,1,"ng-template",null,6,d.W1O),d.qZA(),d._UZ(8,"div",7),d.qZA()),2&n){const n=d.MAs(7);d.ekj("ant-switch-checked",e.isChecked)("ant-switch-loading",e.nzLoading)("ant-switch-disabled",e.nzDisabled)("ant-switch-small","small"===e.nzSize)("ant-switch-rtl","rtl"===e.dir),d.Q6J("disabled",e.nzDisabled)("nzWaveExtraNode",!0),d.xp6(3),d.Q6J("ngIf",e.nzLoading),d.xp6(2),d.Q6J("ngIf",e.isChecked)("ngIfElse",n)}},directives:[u.dQ,h.O5,m.Ls,z.f],encapsulation:2,changeDetection:0}),(0,o.gn)([(0,l.yF)()],n.prototype,"nzLoading",void 0),(0,o.gn)([(0,l.yF)()],n.prototype,"nzDisabled",void 0),(0,o.gn)([(0,l.yF)()],n.prototype,"nzControl",void 0),(0,o.gn)([(0,g.oS)()],n.prototype,"nzSize",void 0),n})(),b=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=d.oAB({type:n}),n.\u0275inj=d.cJS({imports:[[i.vT,h.ez,u.vG,m.PV,z.T]]}),n})()},1349:function(n,e,t){t.r(e),t.d(e,{NzDemoSwitchModule:function(){return x}});var o=t(95987),i=t(30742),c=t(71019),d=t(11959),s=t(48095);const Z=[c.m,d.sL,s.PV];var a=t(56236),r=t(37716),g=t(18423),l=t(23540),h=t(16905),z=t(82949),u=t(38870),m=t(3679);let T=(()=>{class n{constructor(){this.switchValue=!1}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=r.Xpm({type:n,selectors:[["nz-demo-switch-basic"]],decls:1,vars:1,consts:[[3,"ngModel","ngModelChange"]],template:function(n,e){1&n&&(r.TgZ(0,"nz-switch",0),r.NdJ("ngModelChange",function(n){return e.switchValue=n}),r.qZA()),2&n&&r.Q6J("ngModel",e.switchValue)},directives:[c.i,m.JJ,m.On],encapsulation:2}),n})();function p(n,e){1&n&&r._UZ(0,"i",5)}function A(n,e){1&n&&r._UZ(0,"i",6)}let q=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=r.Xpm({type:n,selectors:[["nz-demo-switch-text"]],decls:11,vars:5,consts:[["nzCheckedChildren","\u5f00","nzUnCheckedChildren","\u5173",3,"ngModel"],["nzCheckedChildren","1","nzUnCheckedChildren","0",3,"ngModel"],[3,"ngModel","nzCheckedChildren","nzUnCheckedChildren"],["checkedTemplate",""],["unCheckedTemplate",""],["nz-icon","","nzType","check"],["nz-icon","","nzType","close"]],template:function(n,e){if(1&n&&(r._UZ(0,"nz-switch",0),r._UZ(1,"br"),r._UZ(2,"br"),r._UZ(3,"nz-switch",1),r._UZ(4,"br"),r._UZ(5,"br"),r._UZ(6,"nz-switch",2),r.YNc(7,p,1,0,"ng-template",null,3,r.W1O),r.YNc(9,A,1,0,"ng-template",null,4,r.W1O)),2&n){const n=r.MAs(8),e=r.MAs(10);r.Q6J("ngModel",!0),r.xp6(3),r.Q6J("ngModel",!1),r.xp6(3),r.Q6J("ngModel",!0)("nzCheckedChildren",n)("nzUnCheckedChildren",e)}},directives:[c.i,m.JJ,m.On,s.Ls,h.w],encapsulation:2}),n})(),w=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=r.Xpm({type:n,selectors:[["nz-demo-switch-loading"]],decls:4,vars:2,consts:[["nzLoading","",3,"ngModel"],["nzSize","small","nzLoading","",3,"ngModel"]],template:function(n,e){1&n&&(r._UZ(0,"nz-switch",0),r._UZ(1,"br"),r._UZ(2,"br"),r._UZ(3,"nz-switch",1)),2&n&&(r.Q6J("ngModel",!0),r.xp6(3),r.Q6J("ngModel",!1))},directives:[c.i,m.JJ,m.On],encapsulation:2}),n})();var U=t(57669);let _=(()=>{class n{constructor(){this.switchValue=!1,this.isDisabled=!0}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=r.Xpm({type:n,selectors:[["nz-demo-switch-disabled"]],decls:5,vars:3,consts:[[3,"ngModel","nzDisabled","ngModelChange"],["nz-button","",3,"nzType","click"]],template:function(n,e){1&n&&(r.TgZ(0,"nz-switch",0),r.NdJ("ngModelChange",function(n){return e.switchValue=n}),r.qZA(),r._UZ(1,"br"),r._UZ(2,"br"),r.TgZ(3,"button",1),r.NdJ("click",function(){return e.isDisabled=!e.isDisabled}),r._uU(4,"Toggle disabled"),r.qZA()),2&n&&(r.Q6J("ngModel",e.switchValue)("nzDisabled",e.isDisabled),r.xp6(3),r.Q6J("nzType","primary"))},directives:[c.i,m.JJ,m.On,d.ix,U.dQ,h.w],encapsulation:2}),n})(),f=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=r.Xpm({type:n,selectors:[["nz-demo-switch-size"]],decls:4,vars:2,consts:[[3,"ngModel"],["nzSize","small",3,"ngModel"]],template:function(n,e){1&n&&(r._UZ(0,"nz-switch",0),r._UZ(1,"br"),r._UZ(2,"br"),r._UZ(3,"nz-switch",1)),2&n&&(r.Q6J("ngModel",!0),r.xp6(3),r.Q6J("ngModel",!0))},directives:[c.i,m.JJ,m.On],encapsulation:2}),n})(),b=(()=>{class n{constructor(){this.switchValue=!1,this.loading=!1}clickSwitch(){this.loading||(this.loading=!0,setTimeout(()=>{this.switchValue=!this.switchValue,this.loading=!1},3e3))}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=r.Xpm({type:n,selectors:[["nz-demo-switch-control"]],decls:1,vars:3,consts:[[3,"ngModel","nzControl","nzLoading","ngModelChange","click"]],template:function(n,e){1&n&&(r.TgZ(0,"nz-switch",0),r.NdJ("ngModelChange",function(n){return e.switchValue=n})("click",function(){return e.clickSwitch()}),r.qZA()),2&n&&r.Q6J("ngModel",e.switchValue)("nzControl",!0)("nzLoading",e.loading)},directives:[c.i,m.JJ,m.On],encapsulation:2}),n})(),k=(()=>{class n{constructor(){this.expanded=!1}goLink(n){window&&(window.location.hash=n)}expandAllCode(){this.expanded=!this.expanded,this.codeBoxes.forEach(n=>{n.nzExpanded=this.expanded,n.expandCode(this.expanded),n.check()})}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=r.Xpm({type:n,selectors:[["nz-demo-switch"]],viewQuery:function(n,e){if(1&n&&r.Gf(a.G,5),2&n){let n;r.iGM(n=r.CRH())&&(e.codeBoxes=n)}},decls:256,vars:31,consts:[[1,"toc-affix",3,"nzOffsetTop"],["nzShowInkInFixed","",3,"nzAffix","nzClick"],["nzHref","#components-switch-demo-basic","nzTitle","\u57fa\u672c"],["nzHref","#components-switch-demo-disabled","nzTitle","\u4e0d\u53ef\u7528"],["nzHref","#components-switch-demo-text","nzTitle","\u6587\u5b57\u548c\u56fe\u6807"],["nzHref","#components-switch-demo-size","nzTitle","\u4e24\u79cd\u5927\u5c0f"],["nzHref","#components-switch-demo-loading","nzTitle","\u52a0\u8f7d\u4e2d"],["nzHref","#components-switch-demo-control","nzTitle","\u5b8c\u6574\u63a7\u5236"],["nzHref","#api","nzTitle","API"],[1,"markdown"],[1,"subtitle"],[1,"widget"],["aria-label","Edit this page on Github","href","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/switch/doc/index.zh-CN.md","target","_blank","rel","noopener noreferrer",1,"edit-button"],["nz-icon","","nzType","edit"],["id","\u4f55\u65f6\u4f7f\u7528"],["onclick","window.location.hash = '\u4f55\u65f6\u4f7f\u7528'",1,"anchor"],[1,"language-ts"],[1,"token","keyword"],[1,"token","punctuation"],[1,"token","string"],["nz-icon","","nzType","appstore","nz-tooltip","","nzTooltipTitle","\u5c55\u5f00\u5168\u90e8\u4ee3\u7801",1,"code-box-expand-trigger",3,"click"],["nz-row","",3,"nzGutter"],["nz-col","",3,"nzXl","nzSpan"],["nzTitle","\u57fa\u672c","nzSelector","nz-demo-switch-basic","nzGenerateCommand","ng g ng-zorro-antd:switch-basic <name>","nzComponentName","NzDemoSwitchBasicComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["demo",""],["intro",""],["nzTitle","\u6587\u5b57\u548c\u56fe\u6807","nzSelector","nz-demo-switch-text","nzGenerateCommand","ng g ng-zorro-antd:switch-text <name>","nzComponentName","NzDemoSwitchTextComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","\u52a0\u8f7d\u4e2d","nzSelector","nz-demo-switch-loading","nzGenerateCommand","ng g ng-zorro-antd:switch-loading <name>","nzComponentName","NzDemoSwitchLoadingComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","\u4e0d\u53ef\u7528","nzSelector","nz-demo-switch-disabled","nzGenerateCommand","ng g ng-zorro-antd:switch-disabled <name>","nzComponentName","NzDemoSwitchDisabledComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","\u4e24\u79cd\u5927\u5c0f","nzSelector","nz-demo-switch-size","nzGenerateCommand","ng g ng-zorro-antd:switch-size <name>","nzComponentName","NzDemoSwitchSizeComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","\u5b8c\u6574\u63a7\u5236","nzSelector","nz-demo-switch-control","nzGenerateCommand","ng g ng-zorro-antd:switch-control <name>","nzComponentName","NzDemoSwitchControlComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],[1,"markdown","api-container"],["id","api"],["onclick","window.location.hash = 'api'",1,"anchor"],["id","nz-switch"],[1,"api-type-label","component"],["onclick","window.location.hash = 'nz-switch'",1,"anchor"],["id","\u65b9\u6cd5"],["onclick","window.location.hash = '\u65b9\u6cd5'",1,"anchor"]],template:function(n,e){1&n&&(r.TgZ(0,"article"),r.TgZ(1,"nz-affix",0),r.TgZ(2,"nz-anchor",1),r.NdJ("nzClick",function(n){return e.goLink(n)}),r._UZ(3,"nz-link",2),r._UZ(4,"nz-link",3),r._UZ(5,"nz-link",4),r._UZ(6,"nz-link",5),r._UZ(7,"nz-link",6),r._UZ(8,"nz-link",7),r._UZ(9,"nz-link",8),r.qZA(),r.qZA(),r.TgZ(10,"section",9),r.TgZ(11,"h1"),r._uU(12,"Switch"),r.TgZ(13,"span",10),r._uU(14,"\u5f00\u5173"),r.qZA(),r._UZ(15,"span",11),r.TgZ(16,"a",12),r._UZ(17,"i",13),r.qZA(),r.qZA(),r.TgZ(18,"section",9),r.IAx(),r.TgZ(19,"p"),r._uU(20,"\u5f00\u5173\u9009\u62e9\u5668\u3002"),r.qZA(),r.TgZ(21,"h2",14),r.TgZ(22,"span"),r._uU(23,"\u4f55\u65f6\u4f7f\u7528"),r.qZA(),r.TgZ(24,"a",15),r._uU(25,"#"),r.qZA(),r.qZA(),r.TgZ(26,"ul"),r.TgZ(27,"li"),r._uU(28," \u9700\u8981\u8868\u793a\u5f00\u5173\u72b6\u6001/\u4e24\u79cd\u72b6\u6001\u4e4b\u95f4\u7684\u5207\u6362\u65f6\uff1b"),r.qZA(),r.TgZ(29,"li"),r._uU(30," \u548c "),r.TgZ(31,"code"),r._uU(32,"checkbox"),r.qZA(),r._uU(33,"\u7684\u533a\u522b\u662f\uff0c\u5207\u6362 "),r.TgZ(34,"code"),r._uU(35,"switch"),r.qZA(),r._uU(36," \u4f1a\u76f4\u63a5\u89e6\u53d1\u72b6\u6001\u6539\u53d8\uff0c\u800c "),r.TgZ(37,"code"),r._uU(38,"checkbox"),r.qZA(),r._uU(39," \u4e00\u822c\u7528\u4e8e\u72b6\u6001\u6807\u8bb0\uff0c\u9700\u8981\u548c\u63d0\u4ea4\u64cd\u4f5c\u914d\u5408\u3002"),r.qZA(),r.qZA(),r.TgZ(40,"pre",16),r.TgZ(41,"code"),r.TgZ(42,"span",17),r._uU(43,"import"),r.qZA(),r._uU(44," "),r.TgZ(45,"span",18),r._uU(46,"{"),r.qZA(),r._uU(47," NzSwitchModule "),r.TgZ(48,"span",18),r._uU(49,"}"),r.qZA(),r._uU(50," "),r.TgZ(51,"span",17),r._uU(52,"from"),r.qZA(),r._uU(53," "),r.TgZ(54,"span",19),r._uU(55,"'ng-zorro-antd/switch'"),r.qZA(),r.TgZ(56,"span",18),r._uU(57,";"),r.qZA(),r.qZA(),r.qZA(),r.fQ9(),r.qZA(),r.TgZ(58,"h2"),r.TgZ(59,"span"),r._uU(60,"\u4ee3\u7801\u6f14\u793a"),r.qZA(),r.TgZ(61,"i",20),r.NdJ("click",function(){return e.expandAllCode()}),r.qZA(),r.qZA(),r.qZA(),r.TgZ(62,"div",21),r.TgZ(63,"div",22),r.TgZ(64,"nz-code-box",23),r._UZ(65,"nz-demo-switch-basic",24),r.TgZ(66,"div",25),r.IAx(),r.TgZ(67,"p"),r._uU(68,"\u6700\u7b80\u5355\u7684\u7528\u6cd5\u3002"),r.qZA(),r.fQ9(),r.qZA(),r.qZA(),r.TgZ(69,"nz-code-box",26),r._UZ(70,"nz-demo-switch-text",24),r.TgZ(71,"div",25),r.IAx(),r.TgZ(72,"p"),r._uU(73,"\u5e26\u6709\u6587\u5b57\u548c\u56fe\u6807\u3002"),r.qZA(),r.fQ9(),r.qZA(),r.qZA(),r.TgZ(74,"nz-code-box",27),r._UZ(75,"nz-demo-switch-loading",24),r.TgZ(76,"div",25),r.IAx(),r.TgZ(77,"p"),r._uU(78,"\u6807\u8bc6\u5f00\u5173\u64cd\u4f5c\u4ecd\u5728\u6267\u884c\u4e2d\u3002"),r.qZA(),r.fQ9(),r.qZA(),r.qZA(),r.qZA(),r.TgZ(79,"div",22),r.TgZ(80,"nz-code-box",28),r._UZ(81,"nz-demo-switch-disabled",24),r.TgZ(82,"div",25),r.IAx(),r.TgZ(83,"p"),r._uU(84,"Switch \u5931\u6548\u72b6\u6001\u3002"),r.qZA(),r.fQ9(),r.qZA(),r.qZA(),r.TgZ(85,"nz-code-box",29),r._UZ(86,"nz-demo-switch-size",24),r.TgZ(87,"div",25),r.IAx(),r.TgZ(88,"p"),r.TgZ(89,"code"),r._uU(90,'nzSize="small"'),r.qZA(),r._uU(91," \u8868\u793a\u5c0f\u53f7\u5f00\u5173\u3002"),r.qZA(),r.fQ9(),r.qZA(),r.qZA(),r.TgZ(92,"nz-code-box",30),r._UZ(93,"nz-demo-switch-control",24),r.TgZ(94,"div",25),r.IAx(),r.TgZ(95,"p"),r.TgZ(96,"code"),r._uU(97,"Switch"),r.qZA(),r._uU(98," \u7684\u72b6\u6001\u5b8c\u5168\u7531\u7528\u6237\u63a5\u7ba1\uff0c\u4e0d\u518d\u81ea\u52a8\u6839\u636e\u70b9\u51fb\u4e8b\u4ef6\u6539\u53d8\u6570\u636e\u3002"),r.qZA(),r.fQ9(),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.TgZ(99,"section",31),r.IAx(),r.TgZ(100,"h2",32),r.TgZ(101,"span"),r._uU(102,"API"),r.qZA(),r.TgZ(103,"a",33),r._uU(104,"#"),r.qZA(),r.qZA(),r.TgZ(105,"h3",34),r.TgZ(106,"span"),r._uU(107,"nz-switch"),r.qZA(),r.TgZ(108,"label",35),r._uU(109,"component"),r.qZA(),r.TgZ(110,"a",36),r._uU(111,"#"),r.qZA(),r.qZA(),r.TgZ(112,"table"),r.TgZ(113,"thead"),r.TgZ(114,"tr"),r.TgZ(115,"th"),r._uU(116,"\u53c2\u6570"),r.qZA(),r.TgZ(117,"th"),r._uU(118,"\u8bf4\u660e"),r.qZA(),r.TgZ(119,"th"),r._uU(120,"\u7c7b\u578b"),r.qZA(),r.TgZ(121,"th"),r._uU(122,"\u9ed8\u8ba4\u503c"),r.qZA(),r.TgZ(123,"th"),r._uU(124,"\u5168\u5c40\u914d\u7f6e"),r.qZA(),r.qZA(),r.qZA(),r.TgZ(125,"tbody"),r.TgZ(126,"tr"),r.TgZ(127,"td"),r.TgZ(128,"code"),r._uU(129,"[ngModel]"),r.qZA(),r.qZA(),r.TgZ(130,"td"),r._uU(131,"\u6307\u5b9a\u5f53\u524d\u662f\u5426\u9009\u4e2d\uff0c\u53ef\u53cc\u5411\u7ed1\u5b9a"),r.qZA(),r.TgZ(132,"td"),r.TgZ(133,"code"),r._uU(134,"boolean"),r.qZA(),r.qZA(),r.TgZ(135,"td"),r.TgZ(136,"code"),r._uU(137,"false"),r.qZA(),r.qZA(),r._UZ(138,"td"),r.qZA(),r.TgZ(139,"tr"),r.TgZ(140,"td"),r.TgZ(141,"code"),r._uU(142,"[nzCheckedChildren]"),r.qZA(),r.qZA(),r.TgZ(143,"td"),r._uU(144,"\u9009\u4e2d\u65f6\u7684\u5185\u5bb9"),r.qZA(),r.TgZ(145,"td"),r.TgZ(146,"code"),r._uU(147,"string | TemplateRef<void>"),r.qZA(),r.qZA(),r.TgZ(148,"td"),r._uU(149,"-"),r.qZA(),r._UZ(150,"td"),r.qZA(),r.TgZ(151,"tr"),r.TgZ(152,"td"),r.TgZ(153,"code"),r._uU(154,"[nzUnCheckedChildren]"),r.qZA(),r.qZA(),r.TgZ(155,"td"),r._uU(156,"\u975e\u9009\u4e2d\u65f6\u7684\u5185\u5bb9"),r.qZA(),r.TgZ(157,"td"),r.TgZ(158,"code"),r._uU(159,"string | TemplateRef<void>"),r.qZA(),r.qZA(),r.TgZ(160,"td"),r._uU(161,"-"),r.qZA(),r._UZ(162,"td"),r.qZA(),r.TgZ(163,"tr"),r.TgZ(164,"td"),r.TgZ(165,"code"),r._uU(166,"[nzDisabled]"),r.qZA(),r.qZA(),r.TgZ(167,"td"),r._uU(168,"disable \u72b6\u6001"),r.qZA(),r.TgZ(169,"td"),r.TgZ(170,"code"),r._uU(171,"boolean"),r.qZA(),r.qZA(),r.TgZ(172,"td"),r.TgZ(173,"code"),r._uU(174,"false"),r.qZA(),r.qZA(),r._UZ(175,"td"),r.qZA(),r.TgZ(176,"tr"),r.TgZ(177,"td"),r.TgZ(178,"code"),r._uU(179,"[nzSize]"),r.qZA(),r.qZA(),r.TgZ(180,"td"),r._uU(181,"\u5f00\u5173\u5927\u5c0f\uff0c\u53ef\u9009\u503c\uff1a"),r.TgZ(182,"code"),r._uU(183,"default"),r.qZA(),r.TgZ(184,"code"),r._uU(185,"small"),r.qZA(),r.qZA(),r.TgZ(186,"td"),r.TgZ(187,"code"),r._uU(188,"'small' | 'default'"),r.qZA(),r.qZA(),r.TgZ(189,"td"),r.TgZ(190,"code"),r._uU(191,"'default'"),r.qZA(),r.qZA(),r.TgZ(192,"td"),r._uU(193,"\u2705"),r.qZA(),r.qZA(),r.TgZ(194,"tr"),r.TgZ(195,"td"),r.TgZ(196,"code"),r._uU(197,"[nzLoading]"),r.qZA(),r.qZA(),r.TgZ(198,"td"),r._uU(199,"\u52a0\u8f7d\u4e2d\u7684\u5f00\u5173"),r.qZA(),r.TgZ(200,"td"),r.TgZ(201,"code"),r._uU(202,"boolean"),r.qZA(),r.qZA(),r.TgZ(203,"td"),r.TgZ(204,"code"),r._uU(205,"false"),r.qZA(),r.qZA(),r._UZ(206,"td"),r.qZA(),r.TgZ(207,"tr"),r.TgZ(208,"td"),r.TgZ(209,"code"),r._uU(210,"[nzControl]"),r.qZA(),r.qZA(),r.TgZ(211,"td"),r._uU(212,"\u662f\u5426\u5b8c\u5168\u7531\u7528\u6237\u63a7\u5236\u72b6\u6001"),r.qZA(),r.TgZ(213,"td"),r.TgZ(214,"code"),r._uU(215,"boolean"),r.qZA(),r.qZA(),r.TgZ(216,"td"),r.TgZ(217,"code"),r._uU(218,"false"),r.qZA(),r.qZA(),r._UZ(219,"td"),r.qZA(),r.TgZ(220,"tr"),r.TgZ(221,"td"),r.TgZ(222,"code"),r._uU(223,"(ngModelChange)"),r.qZA(),r.qZA(),r.TgZ(224,"td"),r._uU(225,"\u5f53\u524d\u662f\u5426\u9009\u4e2d\u7684\u56de\u8c03"),r.qZA(),r.TgZ(226,"td"),r.TgZ(227,"code"),r._uU(228,"EventEmitter<boolean>"),r.qZA(),r.qZA(),r.TgZ(229,"td"),r.TgZ(230,"code"),r._uU(231,"false"),r.qZA(),r.qZA(),r._UZ(232,"td"),r.qZA(),r.qZA(),r.qZA(),r.TgZ(233,"h4",37),r.TgZ(234,"span"),r._uU(235,"\u65b9\u6cd5"),r.qZA(),r.TgZ(236,"a",38),r._uU(237,"#"),r.qZA(),r.qZA(),r.TgZ(238,"table"),r.TgZ(239,"thead"),r.TgZ(240,"tr"),r.TgZ(241,"th"),r._uU(242,"\u540d\u79f0"),r.qZA(),r.TgZ(243,"th"),r._uU(244,"\u63cf\u8ff0"),r.qZA(),r.qZA(),r.qZA(),r.TgZ(245,"tbody"),r.TgZ(246,"tr"),r.TgZ(247,"td"),r._uU(248,"focus()"),r.qZA(),r.TgZ(249,"td"),r._uU(250,"\u83b7\u53d6\u7126\u70b9"),r.qZA(),r.qZA(),r.TgZ(251,"tr"),r.TgZ(252,"td"),r._uU(253,"blur()"),r.qZA(),r.TgZ(254,"td"),r._uU(255,"\u79fb\u9664\u7126\u70b9"),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.fQ9(),r.qZA(),r.qZA()),2&n&&(r.xp6(1),r.Q6J("nzOffsetTop",16),r.xp6(1),r.Q6J("nzAffix",!1),r.xp6(60),r.Q6J("nzGutter",16),r.xp6(1),r.Q6J("nzXl",12)("nzSpan",24),r.xp6(1),r.Q6J("nzId","components-switch-demo-basic")("nzLink","components-switch-demo-basic")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/switch/demo/basic.md"),r.xp6(5),r.Q6J("nzId","components-switch-demo-text")("nzLink","components-switch-demo-text")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/switch/demo/text.md"),r.xp6(5),r.Q6J("nzId","components-switch-demo-loading")("nzLink","components-switch-demo-loading")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/switch/demo/loading.md"),r.xp6(5),r.Q6J("nzXl",12)("nzSpan",24),r.xp6(1),r.Q6J("nzId","components-switch-demo-disabled")("nzLink","components-switch-demo-disabled")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/switch/demo/disabled.md"),r.xp6(5),r.Q6J("nzId","components-switch-demo-size")("nzLink","components-switch-demo-size")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/switch/demo/size.md"),r.xp6(7),r.Q6J("nzId","components-switch-demo-control")("nzLink","components-switch-demo-control")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/switch/demo/control.md"))},directives:[g.$,l.IT,l.Fp,s.Ls,h.w,z.SY,u.SK,u.t3,a.G,T,q,w,_,f,b],encapsulation:2}),n})(),C=(()=>{class n{constructor(){this.expanded=!1}goLink(n){window&&(window.location.hash=n)}expandAllCode(){this.expanded=!this.expanded,this.codeBoxes.forEach(n=>{n.nzExpanded=this.expanded,n.expandCode(this.expanded),n.check()})}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=r.Xpm({type:n,selectors:[["nz-demo-switch"]],viewQuery:function(n,e){if(1&n&&r.Gf(a.G,5),2&n){let n;r.iGM(n=r.CRH())&&(e.codeBoxes=n)}},decls:267,vars:31,consts:[[1,"toc-affix",3,"nzOffsetTop"],["nzShowInkInFixed","",3,"nzAffix","nzClick"],["nzHref","#components-switch-demo-basic","nzTitle","Basic"],["nzHref","#components-switch-demo-disabled","nzTitle","Disabled"],["nzHref","#components-switch-demo-text","nzTitle","Text & icon"],["nzHref","#components-switch-demo-size","nzTitle","Two sizes"],["nzHref","#components-switch-demo-loading","nzTitle","Loading"],["nzHref","#components-switch-demo-control","nzTitle","Control"],["nzHref","#api","nzTitle","API"],[1,"markdown"],[1,"subtitle"],[1,"widget"],["aria-label","Edit this page on Github","href","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/switch/doc/index.en-US.md","target","_blank","rel","noopener noreferrer",1,"edit-button"],["nz-icon","","nzType","edit"],["id","when-to-use"],["onclick","window.location.hash = 'when-to-use'",1,"anchor"],[1,"language-ts"],[1,"token","keyword"],[1,"token","punctuation"],[1,"token","string"],["nz-icon","","nzType","appstore","nz-tooltip","","nzTooltipTitle","Expand All Code",1,"code-box-expand-trigger",3,"click"],["nz-row","",3,"nzGutter"],["nz-col","",3,"nzXl","nzSpan"],["nzTitle","Basic","nzSelector","nz-demo-switch-basic","nzGenerateCommand","ng g ng-zorro-antd:switch-basic <name>","nzComponentName","NzDemoSwitchBasicComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["demo",""],["intro",""],["nzTitle","Text & icon","nzSelector","nz-demo-switch-text","nzGenerateCommand","ng g ng-zorro-antd:switch-text <name>","nzComponentName","NzDemoSwitchTextComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","Loading","nzSelector","nz-demo-switch-loading","nzGenerateCommand","ng g ng-zorro-antd:switch-loading <name>","nzComponentName","NzDemoSwitchLoadingComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","Disabled","nzSelector","nz-demo-switch-disabled","nzGenerateCommand","ng g ng-zorro-antd:switch-disabled <name>","nzComponentName","NzDemoSwitchDisabledComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","Two sizes","nzSelector","nz-demo-switch-size","nzGenerateCommand","ng g ng-zorro-antd:switch-size <name>","nzComponentName","NzDemoSwitchSizeComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","Control","nzSelector","nz-demo-switch-control","nzGenerateCommand","ng g ng-zorro-antd:switch-control <name>","nzComponentName","NzDemoSwitchControlComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],[1,"markdown","api-container"],["id","api"],["onclick","window.location.hash = 'api'",1,"anchor"],["id","nz-switch"],[1,"api-type-label","component"],["onclick","window.location.hash = 'nz-switch'",1,"anchor"],["id","methods"],["onclick","window.location.hash = 'methods'",1,"anchor"]],template:function(n,e){1&n&&(r.TgZ(0,"article"),r.TgZ(1,"nz-affix",0),r.TgZ(2,"nz-anchor",1),r.NdJ("nzClick",function(n){return e.goLink(n)}),r._UZ(3,"nz-link",2),r._UZ(4,"nz-link",3),r._UZ(5,"nz-link",4),r._UZ(6,"nz-link",5),r._UZ(7,"nz-link",6),r._UZ(8,"nz-link",7),r._UZ(9,"nz-link",8),r.qZA(),r.qZA(),r.TgZ(10,"section",9),r.TgZ(11,"h1"),r._uU(12,"Switch"),r._UZ(13,"span",10),r._UZ(14,"span",11),r.TgZ(15,"a",12),r._UZ(16,"i",13),r.qZA(),r.qZA(),r.TgZ(17,"section",9),r.IAx(),r.TgZ(18,"p"),r._uU(19,"Switching Selector."),r.qZA(),r.TgZ(20,"h2",14),r.TgZ(21,"span"),r._uU(22,"When To Use"),r.qZA(),r.TgZ(23,"a",15),r._uU(24,"#"),r.qZA(),r.qZA(),r.TgZ(25,"ul"),r.TgZ(26,"li"),r._uU(27," If you need to represent the switching between two states or on-off state."),r.qZA(),r.TgZ(28,"li"),r._uU(29," The difference between "),r.TgZ(30,"code"),r._uU(31,"Switch"),r.qZA(),r._uU(32," and "),r.TgZ(33,"code"),r._uU(34,"Checkbox"),r.qZA(),r._uU(35," is that "),r.TgZ(36,"code"),r._uU(37,"Switch"),r.qZA(),r._uU(38," will trigger a state change directly when you toggle it, while "),r.TgZ(39,"code"),r._uU(40,"Checkbox"),r.qZA(),r._uU(41," is generally used for state marking, which should work in conjunction with submit operation."),r.qZA(),r.qZA(),r.TgZ(42,"pre",16),r.TgZ(43,"code"),r.TgZ(44,"span",17),r._uU(45,"import"),r.qZA(),r._uU(46," "),r.TgZ(47,"span",18),r._uU(48,"{"),r.qZA(),r._uU(49," NzSwitchModule "),r.TgZ(50,"span",18),r._uU(51,"}"),r.qZA(),r._uU(52," "),r.TgZ(53,"span",17),r._uU(54,"from"),r.qZA(),r._uU(55," "),r.TgZ(56,"span",19),r._uU(57,"'ng-zorro-antd/switch'"),r.qZA(),r.TgZ(58,"span",18),r._uU(59,";"),r.qZA(),r.qZA(),r.qZA(),r.fQ9(),r.qZA(),r.TgZ(60,"h2"),r.TgZ(61,"span"),r._uU(62,"Examples"),r.qZA(),r.TgZ(63,"i",20),r.NdJ("click",function(){return e.expandAllCode()}),r.qZA(),r.qZA(),r.qZA(),r.TgZ(64,"div",21),r.TgZ(65,"div",22),r.TgZ(66,"nz-code-box",23),r._UZ(67,"nz-demo-switch-basic",24),r.TgZ(68,"div",25),r.IAx(),r.TgZ(69,"p"),r._uU(70,"The most basic usage."),r.qZA(),r.fQ9(),r.qZA(),r.qZA(),r.TgZ(71,"nz-code-box",26),r._UZ(72,"nz-demo-switch-text",24),r.TgZ(73,"div",25),r.IAx(),r.TgZ(74,"p"),r._uU(75,"With text and icon."),r.qZA(),r.fQ9(),r.qZA(),r.qZA(),r.TgZ(76,"nz-code-box",27),r._UZ(77,"nz-demo-switch-loading",24),r.TgZ(78,"div",25),r.IAx(),r.TgZ(79,"p"),r._uU(80,"Mark a pending state of switch."),r.qZA(),r.fQ9(),r.qZA(),r.qZA(),r.qZA(),r.TgZ(81,"div",22),r.TgZ(82,"nz-code-box",28),r._UZ(83,"nz-demo-switch-disabled",24),r.TgZ(84,"div",25),r.IAx(),r.TgZ(85,"p"),r._uU(86,"Disabled state of "),r.TgZ(87,"code"),r._uU(88,"Switch"),r.qZA(),r._uU(89,"."),r.qZA(),r.fQ9(),r.qZA(),r.qZA(),r.TgZ(90,"nz-code-box",29),r._UZ(91,"nz-demo-switch-size",24),r.TgZ(92,"div",25),r.IAx(),r.TgZ(93,"p"),r.TgZ(94,"code"),r._uU(95,'nzSize="small"'),r.qZA(),r._uU(96," represents a small sized switch."),r.qZA(),r.fQ9(),r.qZA(),r.qZA(),r.TgZ(97,"nz-code-box",30),r._UZ(98,"nz-demo-switch-control",24),r.TgZ(99,"div",25),r.IAx(),r.TgZ(100,"p"),r._uU(101,"The status of "),r.TgZ(102,"code"),r._uU(103,"Switch"),r.qZA(),r._uU(104," is completely up to the user and no longer automatically changes the data based on the click event."),r.qZA(),r.fQ9(),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.TgZ(105,"section",31),r.IAx(),r.TgZ(106,"h2",32),r.TgZ(107,"span"),r._uU(108,"API"),r.qZA(),r.TgZ(109,"a",33),r._uU(110,"#"),r.qZA(),r.qZA(),r.TgZ(111,"h3",34),r.TgZ(112,"span"),r._uU(113,"nz-switch"),r.qZA(),r.TgZ(114,"label",35),r._uU(115,"component"),r.qZA(),r.TgZ(116,"a",36),r._uU(117,"#"),r.qZA(),r.qZA(),r.TgZ(118,"table"),r.TgZ(119,"thead"),r.TgZ(120,"tr"),r.TgZ(121,"th"),r._uU(122,"Property"),r.qZA(),r.TgZ(123,"th"),r._uU(124,"Description"),r.qZA(),r.TgZ(125,"th"),r._uU(126,"Type"),r.qZA(),r.TgZ(127,"th"),r._uU(128,"Default"),r.qZA(),r.TgZ(129,"th"),r._uU(130,"Global Config"),r.qZA(),r.qZA(),r.qZA(),r.TgZ(131,"tbody"),r.TgZ(132,"tr"),r.TgZ(133,"td"),r.TgZ(134,"code"),r._uU(135,"[ngModel]"),r.qZA(),r.qZA(),r.TgZ(136,"td"),r._uU(137,"determine whether the "),r.TgZ(138,"code"),r._uU(139,"nz-switch"),r.qZA(),r._uU(140," is checked, double binding"),r.qZA(),r.TgZ(141,"td"),r.TgZ(142,"code"),r._uU(143,"boolean"),r.qZA(),r.qZA(),r.TgZ(144,"td"),r.TgZ(145,"code"),r._uU(146,"false"),r.qZA(),r.qZA(),r._UZ(147,"td"),r.qZA(),r.TgZ(148,"tr"),r.TgZ(149,"td"),r.TgZ(150,"code"),r._uU(151,"[nzCheckedChildren]"),r.qZA(),r.qZA(),r.TgZ(152,"td"),r._uU(153,"content to be shown when the state is checked"),r.qZA(),r.TgZ(154,"td"),r.TgZ(155,"code"),r._uU(156,"string | TemplateRef<void>"),r.qZA(),r.qZA(),r.TgZ(157,"td"),r._uU(158,"-"),r.qZA(),r._UZ(159,"td"),r.qZA(),r.TgZ(160,"tr"),r.TgZ(161,"td"),r.TgZ(162,"code"),r._uU(163,"[nzUnCheckedChildren]"),r.qZA(),r.qZA(),r.TgZ(164,"td"),r._uU(165,"content to be shown when the state is unchecked"),r.qZA(),r.TgZ(166,"td"),r.TgZ(167,"code"),r._uU(168,"string | TemplateRef<void>"),r.qZA(),r.qZA(),r.TgZ(169,"td"),r._uU(170,"-"),r.qZA(),r._UZ(171,"td"),r.qZA(),r.TgZ(172,"tr"),r.TgZ(173,"td"),r.TgZ(174,"code"),r._uU(175,"[nzDisabled]"),r.qZA(),r.qZA(),r.TgZ(176,"td"),r._uU(177,"Disable switch"),r.qZA(),r.TgZ(178,"td"),r.TgZ(179,"code"),r._uU(180,"boolean"),r.qZA(),r.qZA(),r.TgZ(181,"td"),r.TgZ(182,"code"),r._uU(183,"false"),r.qZA(),r.qZA(),r._UZ(184,"td"),r.qZA(),r.TgZ(185,"tr"),r.TgZ(186,"td"),r.TgZ(187,"code"),r._uU(188,"[nzSize]"),r.qZA(),r.qZA(),r.TgZ(189,"td"),r._uU(190,"the size of the "),r.TgZ(191,"code"),r._uU(192,"nz-switch"),r.qZA(),r._uU(193,", options: "),r.TgZ(194,"code"),r._uU(195,"default"),r.qZA(),r.TgZ(196,"code"),r._uU(197,"small"),r.qZA(),r.qZA(),r.TgZ(198,"td"),r.TgZ(199,"code"),r._uU(200,"'small' | 'default'"),r.qZA(),r.qZA(),r.TgZ(201,"td"),r.TgZ(202,"code"),r._uU(203,"'default'"),r.qZA(),r.qZA(),r.TgZ(204,"td"),r._uU(205,"\u2705"),r.qZA(),r.qZA(),r.TgZ(206,"tr"),r.TgZ(207,"td"),r.TgZ(208,"code"),r._uU(209,"[nzLoading]"),r.qZA(),r.qZA(),r.TgZ(210,"td"),r._uU(211,"loading state of switch"),r.qZA(),r.TgZ(212,"td"),r.TgZ(213,"code"),r._uU(214,"boolean"),r.qZA(),r.qZA(),r.TgZ(215,"td"),r.TgZ(216,"code"),r._uU(217,"false"),r.qZA(),r.qZA(),r._UZ(218,"td"),r.qZA(),r.TgZ(219,"tr"),r.TgZ(220,"td"),r.TgZ(221,"code"),r._uU(222,"[nzControl]"),r.qZA(),r.qZA(),r.TgZ(223,"td"),r._uU(224,"determine whether fully control state by user"),r.qZA(),r.TgZ(225,"td"),r.TgZ(226,"code"),r._uU(227,"boolean"),r.qZA(),r.qZA(),r.TgZ(228,"td"),r.TgZ(229,"code"),r._uU(230,"false"),r.qZA(),r.qZA(),r._UZ(231,"td"),r.qZA(),r.TgZ(232,"tr"),r.TgZ(233,"td"),r.TgZ(234,"code"),r._uU(235,"(ngModelChange)"),r.qZA(),r.qZA(),r.TgZ(236,"td"),r._uU(237,"a callback function, can be executed when the checked state is changing"),r.qZA(),r.TgZ(238,"td"),r.TgZ(239,"code"),r._uU(240,"EventEmitter<boolean>"),r.qZA(),r.qZA(),r.TgZ(241,"td"),r._uU(242,"-"),r.qZA(),r._UZ(243,"td"),r.qZA(),r.qZA(),r.qZA(),r.TgZ(244,"h4",37),r.TgZ(245,"span"),r._uU(246,"Methods"),r.qZA(),r.TgZ(247,"a",38),r._uU(248,"#"),r.qZA(),r.qZA(),r.TgZ(249,"table"),r.TgZ(250,"thead"),r.TgZ(251,"tr"),r.TgZ(252,"th"),r._uU(253,"Name"),r.qZA(),r.TgZ(254,"th"),r._uU(255,"Description"),r.qZA(),r.qZA(),r.qZA(),r.TgZ(256,"tbody"),r.TgZ(257,"tr"),r.TgZ(258,"td"),r._uU(259,"focus()"),r.qZA(),r.TgZ(260,"td"),r._uU(261,"get focus"),r.qZA(),r.qZA(),r.TgZ(262,"tr"),r.TgZ(263,"td"),r._uU(264,"blur()"),r.qZA(),r.TgZ(265,"td"),r._uU(266,"remove focus"),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.fQ9(),r.qZA(),r.qZA()),2&n&&(r.xp6(1),r.Q6J("nzOffsetTop",16),r.xp6(1),r.Q6J("nzAffix",!1),r.xp6(62),r.Q6J("nzGutter",16),r.xp6(1),r.Q6J("nzXl",12)("nzSpan",24),r.xp6(1),r.Q6J("nzId","components-switch-demo-basic")("nzLink","components-switch-demo-basic")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/switch/demo/basic.md"),r.xp6(5),r.Q6J("nzId","components-switch-demo-text")("nzLink","components-switch-demo-text")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/switch/demo/text.md"),r.xp6(5),r.Q6J("nzId","components-switch-demo-loading")("nzLink","components-switch-demo-loading")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/switch/demo/loading.md"),r.xp6(5),r.Q6J("nzXl",12)("nzSpan",24),r.xp6(1),r.Q6J("nzId","components-switch-demo-disabled")("nzLink","components-switch-demo-disabled")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/switch/demo/disabled.md"),r.xp6(8),r.Q6J("nzId","components-switch-demo-size")("nzLink","components-switch-demo-size")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/switch/demo/size.md"),r.xp6(7),r.Q6J("nzId","components-switch-demo-control")("nzLink","components-switch-demo-control")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/switch/demo/control.md"))},directives:[g.$,l.IT,l.Fp,s.Ls,h.w,z.SY,u.SK,u.t3,a.G,T,q,w,_,f,b],encapsulation:2}),n})(),x=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=r.oAB({type:n}),n.\u0275inj=r.cJS({imports:[[i.G,...Z,o.Bz.forChild([{path:"en",component:C},{path:"zh",component:k}])]]}),n})()}}]);