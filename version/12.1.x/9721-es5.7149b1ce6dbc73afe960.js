!function(){"use strict";function e(e){return function(e){if(Array.isArray(e))return n(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return n(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);"Object"===i&&e.constructor&&(i=e.constructor.name);if("Map"===i||"Set"===i)return Array.from(e);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return n(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,i=new Array(n);t<n;t++)i[t]=e[t];return i}function t(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function i(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function s(e,n,t){return n&&i(e.prototype,n),t&&i(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}(self.webpackChunkng_zorro_antd=self.webpackChunkng_zorro_antd||[]).push([[9721],{49721:function(n,i,o){o.d(i,{m4:function(){return te},wY:function(){return ue},Iv:function(){return oe}});var u=o(64762),l=o(70946),r=o(90625),a=o(37716),c=o(3679),d=o(79765),h=o(25917),p=o(22759),f=o(88002),v=o(46782),m=o(69282),z=o(20125),k=o(27520),g=o(61055),b=o(14176),y=o(27266),H=o(38583),x=o(11959),S=o(79874),O=o(2080),T=o(48095),D=o(30409),C=o(80521),w=o(16905),A=o(57669),M=["inputElement"];function E(e,n){if(1&e&&(a.ynx(0),a._UZ(1,"i",7),a.BQk()),2&e){var t=n.$implicit;a.xp6(1),a.Q6J("nzType",t)}}function _(e,n){if(1&e){var t=a.EpF();a.TgZ(0,"span",8),a.NdJ("click",function(e){return a.CHM(t),a.oxw().onClickClearBtn(e)}),a._UZ(1,"i",9),a.qZA()}if(2&e){var i=a.oxw();a.xp6(1),a.uIk("aria-label",i.nzClearText)("title",i.nzClearText)}}function Z(e,n){if(1&e){var t=a.EpF();a.TgZ(0,"div",10),a.TgZ(1,"div",11),a.TgZ(2,"div",12),a.TgZ(3,"nz-time-picker-panel",13),a.NdJ("ngModelChange",function(e){return a.CHM(t),a.oxw().value=e})("ngModelChange",function(e){return a.CHM(t),a.oxw().onPanelValueChange(e)})("closePanel",function(){return a.CHM(t),a.oxw().setCurrentValueAndClose()}),a.ALo(4,"async"),a.qZA(),a.qZA(),a.qZA(),a.qZA()}if(2&e){var i=a.oxw();a.Q6J("@slideMotion","enter"),a.xp6(3),a.Q6J("ngClass",i.nzPopupClassName)("format",i.nzFormat)("nzHourStep",i.nzHourStep)("nzMinuteStep",i.nzMinuteStep)("nzSecondStep",i.nzSecondStep)("nzDisabledHours",i.nzDisabledHours)("nzDisabledMinutes",i.nzDisabledMinutes)("nzDisabledSeconds",i.nzDisabledSeconds)("nzPlaceHolder",i.nzPlaceHolder||a.lcZ(4,19,i.i18nPlaceHolder$))("nzHideDisabledOptions",i.nzHideDisabledOptions)("nzUse12Hours",i.nzUse12Hours)("nzDefaultOpenValue",i.nzDefaultOpenValue)("nzAddOn",i.nzAddOn)("nzClearText",i.nzClearText)("nzNowText",i.nzNowText)("nzOkText",i.nzOkText)("nzAllowEmpty",i.nzAllowEmpty)("ngModel",i.value)}}var I=["hourListElement"],V=["minuteListElement"],F=["secondListElement"],P=["use12HoursListElement"];function N(e,n){if(1&e&&(a.TgZ(0,"div",4),a.TgZ(1,"div",5),a._uU(2),a.qZA(),a.qZA()),2&e){var t=a.oxw();a.xp6(2),a.Oqu(t.dateHelper.format(null==t.time?null:t.time.value,t.format)||"\xa0")}}function Y(e,n){if(1&e){var t=a.EpF();a.TgZ(0,"li",10),a.NdJ("click",function(){a.CHM(t);var e=a.oxw().$implicit;return a.oxw(2).selectHour(e)}),a.TgZ(1,"div",11),a._uU(2),a.ALo(3,"number"),a.qZA(),a.qZA()}if(2&e){var i=a.oxw().$implicit,s=a.oxw(2);a.ekj("ant-picker-time-panel-cell-selected",s.isSelectedHour(i))("ant-picker-time-panel-cell-disabled",i.disabled),a.xp6(2),a.Oqu(a.xi3(3,5,i.index,"2.0-0"))}}function J(e,n){if(1&e&&(a.ynx(0),a.YNc(1,Y,4,8,"li",9),a.BQk()),2&e){var t=n.$implicit,i=a.oxw(2);a.xp6(1),a.Q6J("ngIf",!(i.nzHideDisabledOptions&&t.disabled))}}function R(e,n){if(1&e&&(a.TgZ(0,"ul",6,7),a.YNc(2,J,2,1,"ng-container",8),a.qZA()),2&e){var t=a.oxw();a.xp6(2),a.Q6J("ngForOf",t.hourRange)("ngForTrackBy",t.trackByFn)}}function q(e,n){if(1&e){var t=a.EpF();a.TgZ(0,"li",10),a.NdJ("click",function(){a.CHM(t);var e=a.oxw().$implicit;return a.oxw(2).selectMinute(e)}),a.TgZ(1,"div",11),a._uU(2),a.ALo(3,"number"),a.qZA(),a.qZA()}if(2&e){var i=a.oxw().$implicit,s=a.oxw(2);a.ekj("ant-picker-time-panel-cell-selected",s.isSelectedMinute(i))("ant-picker-time-panel-cell-disabled",i.disabled),a.xp6(2),a.Oqu(a.xi3(3,5,i.index,"2.0-0"))}}function U(e,n){if(1&e&&(a.ynx(0),a.YNc(1,q,4,8,"li",9),a.BQk()),2&e){var t=n.$implicit,i=a.oxw(2);a.xp6(1),a.Q6J("ngIf",!(i.nzHideDisabledOptions&&t.disabled))}}function Q(e,n){if(1&e&&(a.TgZ(0,"ul",6,12),a.YNc(2,U,2,1,"ng-container",8),a.qZA()),2&e){var t=a.oxw();a.xp6(2),a.Q6J("ngForOf",t.minuteRange)("ngForTrackBy",t.trackByFn)}}function B(e,n){if(1&e){var t=a.EpF();a.TgZ(0,"li",10),a.NdJ("click",function(){a.CHM(t);var e=a.oxw().$implicit;return a.oxw(2).selectSecond(e)}),a.TgZ(1,"div",11),a._uU(2),a.ALo(3,"number"),a.qZA(),a.qZA()}if(2&e){var i=a.oxw().$implicit,s=a.oxw(2);a.ekj("ant-picker-time-panel-cell-selected",s.isSelectedSecond(i))("ant-picker-time-panel-cell-disabled",i.disabled),a.xp6(2),a.Oqu(a.xi3(3,5,i.index,"2.0-0"))}}function L(e,n){if(1&e&&(a.ynx(0),a.YNc(1,B,4,8,"li",9),a.BQk()),2&e){var t=n.$implicit,i=a.oxw(2);a.xp6(1),a.Q6J("ngIf",!(i.nzHideDisabledOptions&&t.disabled))}}function X(e,n){if(1&e&&(a.TgZ(0,"ul",6,13),a.YNc(2,L,2,1,"ng-container",8),a.qZA()),2&e){var t=a.oxw();a.xp6(2),a.Q6J("ngForOf",t.secondRange)("ngForTrackBy",t.trackByFn)}}function $(e,n){if(1&e){var t=a.EpF();a.TgZ(0,"li",10),a.NdJ("click",function(){a.CHM(t);var e=a.oxw().$implicit;return a.oxw(2).select12Hours(e)}),a.TgZ(1,"div",11),a._uU(2),a.qZA(),a.qZA()}if(2&e){var i=a.oxw().$implicit,s=a.oxw(2);a.ekj("ant-picker-time-panel-cell-selected",s.isSelected12Hours(i)),a.xp6(2),a.Oqu(i.value)}}function j(e,n){if(1&e&&(a.ynx(0),a.YNc(1,$,3,3,"li",16),a.BQk()),2&e){var t=a.oxw(2);a.xp6(1),a.Q6J("ngIf",!t.nzHideDisabledOptions)}}function G(e,n){if(1&e&&(a.TgZ(0,"ul",6,14),a.YNc(2,j,2,1,"ng-container",15),a.qZA()),2&e){var t=a.oxw();a.xp6(2),a.Q6J("ngForOf",t.use12HoursRange)}}function K(e,n){}function W(e,n){if(1&e&&(a.TgZ(0,"div",24),a.YNc(1,K,0,0,"ng-template",25),a.qZA()),2&e){var t=a.oxw(2);a.xp6(1),a.Q6J("ngTemplateOutlet",t.nzAddOn)}}function ee(e,n){if(1&e){var t=a.EpF();a.TgZ(0,"div",17),a.YNc(1,W,2,1,"div",18),a.TgZ(2,"ul",19),a.TgZ(3,"li",20),a.TgZ(4,"a",21),a.NdJ("click",function(){return a.CHM(t),a.oxw().onClickNow()}),a._uU(5),a.ALo(6,"nzI18n"),a.qZA(),a.qZA(),a.TgZ(7,"li",22),a.TgZ(8,"button",23),a.NdJ("click",function(){return a.CHM(t),a.oxw().onClickOk()}),a._uU(9),a.ALo(10,"nzI18n"),a.qZA(),a.qZA(),a.qZA(),a.qZA()}if(2&e){var i=a.oxw();a.xp6(1),a.Q6J("ngIf",i.nzAddOn),a.xp6(4),a.hij(" ",i.nzNowText||a.lcZ(6,3,"Calendar.lang.now")," "),a.xp6(4),a.hij(" ",i.nzOkText||a.lcZ(10,5,"Calendar.lang.ok")," ")}}var ne,te=((ne=function(){function e(n,i,s,o,u,l,r,c,p){t(this,e),this.nzConfigService=n,this.i18n=i,this.element=s,this.renderer=o,this.cdr=u,this.dateHelper=l,this.platform=r,this.elementRef=c,this.directionality=p,this._nzModuleName="timePicker",this.destroy$=new d.xQ,this.isInit=!1,this.focused=!1,this.inputValue="",this.value=null,this.preValue=null,this.i18nPlaceHolder$=(0,h.of)(void 0),this.overlayPositions=[{offsetY:3,originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{offsetY:-3,originX:"start",originY:"top",overlayX:"start",overlayY:"bottom"},{offsetY:3,originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"},{offsetY:-3,originX:"end",originY:"top",overlayX:"end",overlayY:"bottom"}],this.dir="ltr",this.nzId=null,this.nzSize=null,this.nzHourStep=1,this.nzMinuteStep=1,this.nzSecondStep=1,this.nzClearText="clear",this.nzNowText="",this.nzOkText="",this.nzPopupClassName="",this.nzPlaceHolder="",this.nzFormat="HH:mm:ss",this.nzOpen=!1,this.nzUse12Hours=!1,this.nzSuffixIcon="clock-circle",this.nzOpenChange=new a.vpe,this.nzHideDisabledOptions=!1,this.nzAllowEmpty=!0,this.nzDisabled=!1,this.nzAutoFocus=!1,this.nzBackdrop=!1,this.elementRef.nativeElement.classList.add("ant-picker")}return s(e,[{key:"emitValue",value:function(e){this.setValue(e,!0),this._onChange&&this._onChange(this.value),this._onTouched&&this._onTouched()}},{key:"setValue",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];n&&(this.preValue=(0,m.Z)(e)?new Date(e):null),this.value=(0,m.Z)(e)?new Date(e):null,this.inputValue=this.dateHelper.format(e,this.nzFormat),this.cdr.markForCheck()}},{key:"open",value:function(){this.nzDisabled||this.nzOpen||(this.focus(),this.nzOpen=!0,this.nzOpenChange.emit(this.nzOpen))}},{key:"close",value:function(){this.nzOpen=!1,this.cdr.markForCheck(),this.nzOpenChange.emit(this.nzOpen)}},{key:"updateAutoFocus",value:function(){this.isInit&&!this.nzDisabled&&(this.nzAutoFocus?this.renderer.setAttribute(this.inputRef.nativeElement,"autofocus","autofocus"):this.renderer.removeAttribute(this.inputRef.nativeElement,"autofocus"))}},{key:"onClickClearBtn",value:function(e){e.stopPropagation(),this.emitValue(null)}},{key:"onClickOutside",value:function(e){this.element.nativeElement.contains(e.target)||this.setCurrentValueAndClose()}},{key:"onFocus",value:function(e){this.focused=e,e||(this.checkTimeValid(this.value)?this.setCurrentValueAndClose():(this.setValue(this.preValue),this.close()))}},{key:"focus",value:function(){this.inputRef.nativeElement&&this.inputRef.nativeElement.focus()}},{key:"blur",value:function(){this.inputRef.nativeElement&&this.inputRef.nativeElement.blur()}},{key:"onKeyupEsc",value:function(){this.setValue(this.preValue)}},{key:"onKeyupEnter",value:function(){this.nzOpen&&(0,m.Z)(this.value)?this.setCurrentValueAndClose():this.nzOpen||this.open()}},{key:"onInputChange",value:function(e){!this.platform.TRIDENT&&document.activeElement===this.inputRef.nativeElement&&(this.open(),this.parseTimeString(e))}},{key:"onPanelValueChange",value:function(e){this.setValue(e),this.focus()}},{key:"setCurrentValueAndClose",value:function(){this.emitValue(this.value),this.close()}},{key:"ngOnInit",value:function(){var e,n=this;this.inputSize=Math.max(8,this.nzFormat.length)+2,this.origin=new r.xu(this.element),this.i18nPlaceHolder$=this.i18n.localeChange.pipe((0,f.U)(function(e){return e.TimePicker.placeholder})),this.dir=this.directionality.value,null===(e=this.directionality.change)||void 0===e||e.pipe((0,v.R)(this.destroy$)).subscribe(function(e){n.dir=e})}},{key:"ngOnDestroy",value:function(){this.destroy$.next(),this.destroy$.complete()}},{key:"ngOnChanges",value:function(e){var n=e.nzUse12Hours,t=e.nzFormat,i=e.nzDisabled,s=e.nzAutoFocus;if(n&&!n.previousValue&&n.currentValue&&!t&&(this.nzFormat="h:mm:ss a"),i){var o=this.inputRef.nativeElement;i.currentValue?this.renderer.setAttribute(o,"disabled",""):this.renderer.removeAttribute(o,"disabled")}s&&this.updateAutoFocus()}},{key:"parseTimeString",value:function(e){var n=this.dateHelper.parseTime(e,this.nzFormat)||null;(0,m.Z)(n)&&(this.value=n,this.cdr.markForCheck())}},{key:"ngAfterViewInit",value:function(){this.isInit=!0,this.updateAutoFocus()}},{key:"writeValue",value:function(e){var n;e instanceof Date?n=e:(0,b.kK)(e)?n=null:((0,g.ZK)('Non-Date type is not recommended for time-picker, use "Date" type.'),n=new Date(e)),this.setValue(n,!0)}},{key:"registerOnChange",value:function(e){this._onChange=e}},{key:"registerOnTouched",value:function(e){this._onTouched=e}},{key:"setDisabledState",value:function(e){this.nzDisabled=e,this.cdr.markForCheck()}},{key:"checkTimeValid",value:function(e){var n,t,i;if(!e)return!0;var s=null===(n=this.nzDisabledHours)||void 0===n?void 0:n.call(this),o=null===(t=this.nzDisabledMinutes)||void 0===t?void 0:t.call(this,e.getHours()),u=null===(i=this.nzDisabledSeconds)||void 0===i?void 0:i.call(this,e.getHours(),e.getMinutes());return!((null==s?void 0:s.includes(e.getHours()))||(null==o?void 0:o.includes(e.getMinutes()))||(null==u?void 0:u.includes(e.getSeconds())))}}]),e}()).\u0275fac=function(e){return new(e||ne)(a.Y36(k.jY),a.Y36(y.wi),a.Y36(a.SBq),a.Y36(a.Qsj),a.Y36(a.sBO),a.Y36(y.mx),a.Y36(C.t4),a.Y36(a.SBq),a.Y36(l.Is,8))},ne.\u0275cmp=a.Xpm({type:ne,selectors:[["nz-time-picker"]],viewQuery:function(e,n){var t;1&e&&a.Gf(M,7),2&e&&a.iGM(t=a.CRH())&&(n.inputRef=t.first)},hostVars:10,hostBindings:function(e,n){1&e&&a.NdJ("click",function(){return n.open()}),2&e&&a.ekj("ant-picker-large","large"===n.nzSize)("ant-picker-small","small"===n.nzSize)("ant-picker-disabled",n.nzDisabled)("ant-picker-focused",n.focused)("ant-picker-rtl","rtl"===n.dir)},inputs:{nzId:"nzId",nzSize:"nzSize",nzHourStep:"nzHourStep",nzMinuteStep:"nzMinuteStep",nzSecondStep:"nzSecondStep",nzClearText:"nzClearText",nzNowText:"nzNowText",nzOkText:"nzOkText",nzPopupClassName:"nzPopupClassName",nzPlaceHolder:"nzPlaceHolder",nzFormat:"nzFormat",nzOpen:"nzOpen",nzUse12Hours:"nzUse12Hours",nzSuffixIcon:"nzSuffixIcon",nzHideDisabledOptions:"nzHideDisabledOptions",nzAllowEmpty:"nzAllowEmpty",nzDisabled:"nzDisabled",nzAutoFocus:"nzAutoFocus",nzBackdrop:"nzBackdrop",nzAddOn:"nzAddOn",nzDefaultOpenValue:"nzDefaultOpenValue",nzDisabledHours:"nzDisabledHours",nzDisabledMinutes:"nzDisabledMinutes",nzDisabledSeconds:"nzDisabledSeconds"},outputs:{nzOpenChange:"nzOpenChange"},exportAs:["nzTimePicker"],features:[a._Bn([{provide:c.JU,useExisting:ne,multi:!0}]),a.TTD],decls:8,vars:14,consts:[[1,"ant-picker-input"],["type","text","autocomplete","off",3,"size","placeholder","ngModel","disabled","ngModelChange","focus","blur","keyup.enter","keyup.escape"],["inputElement",""],[1,"ant-picker-suffix"],[4,"nzStringTemplateOutlet"],["class","ant-picker-clear",3,"click",4,"ngIf"],["cdkConnectedOverlay","","nzConnectedOverlay","",3,"cdkConnectedOverlayHasBackdrop","cdkConnectedOverlayPositions","cdkConnectedOverlayOrigin","cdkConnectedOverlayOpen","cdkConnectedOverlayTransformOriginOn","detach","overlayOutsideClick"],["nz-icon","",3,"nzType"],[1,"ant-picker-clear",3,"click"],["nz-icon","","nzType","close-circle","nzTheme","fill"],[1,"ant-picker-dropdown",2,"position","relative"],[1,"ant-picker-panel-container"],["tabindex","-1",1,"ant-picker-panel"],[3,"ngClass","format","nzHourStep","nzMinuteStep","nzSecondStep","nzDisabledHours","nzDisabledMinutes","nzDisabledSeconds","nzPlaceHolder","nzHideDisabledOptions","nzUse12Hours","nzDefaultOpenValue","nzAddOn","nzClearText","nzNowText","nzOkText","nzAllowEmpty","ngModel","ngModelChange","closePanel"]],template:function(e,n){1&e&&(a.TgZ(0,"div",0),a.TgZ(1,"input",1,2),a.NdJ("ngModelChange",function(e){return n.inputValue=e})("focus",function(){return n.onFocus(!0)})("blur",function(){return n.onFocus(!1)})("keyup.enter",function(){return n.onKeyupEnter()})("keyup.escape",function(){return n.onKeyupEsc()})("ngModelChange",function(e){return n.onInputChange(e)}),a.ALo(3,"async"),a.qZA(),a.TgZ(4,"span",3),a.YNc(5,E,2,1,"ng-container",4),a.qZA(),a.YNc(6,_,2,2,"span",5),a.qZA(),a.YNc(7,Z,5,21,"ng-template",6),a.NdJ("detach",function(){return n.close()})("overlayOutsideClick",function(e){return n.onClickOutside(e)})),2&e&&(a.xp6(1),a.Q6J("size",n.inputSize)("placeholder",n.nzPlaceHolder||a.lcZ(3,12,n.i18nPlaceHolder$))("ngModel",n.inputValue)("disabled",n.nzDisabled),a.uIk("id",n.nzId),a.xp6(4),a.Q6J("nzStringTemplateOutlet",n.nzSuffixIcon),a.xp6(1),a.Q6J("ngIf",n.nzAllowEmpty&&!n.nzDisabled&&n.value),a.xp6(1),a.Q6J("cdkConnectedOverlayHasBackdrop",n.nzBackdrop)("cdkConnectedOverlayPositions",n.overlayPositions)("cdkConnectedOverlayOrigin",n.origin)("cdkConnectedOverlayOpen",n.nzOpen)("cdkConnectedOverlayTransformOriginOn",".ant-picker-dropdown"))},directives:function(){return[c.Fj,c.JJ,c.On,S.f,H.O5,r.pI,O.hQ,T.Ls,w.w,oe,H.mk]},pipes:function(){return[H.Ov]},encapsulation:2,data:{animation:[z.mF]},changeDetection:0}),(0,u.gn)([(0,k.oS)()],ne.prototype,"nzHourStep",void 0),(0,u.gn)([(0,k.oS)()],ne.prototype,"nzMinuteStep",void 0),(0,u.gn)([(0,k.oS)()],ne.prototype,"nzSecondStep",void 0),(0,u.gn)([(0,k.oS)()],ne.prototype,"nzClearText",void 0),(0,u.gn)([(0,k.oS)()],ne.prototype,"nzNowText",void 0),(0,u.gn)([(0,k.oS)()],ne.prototype,"nzOkText",void 0),(0,u.gn)([(0,k.oS)()],ne.prototype,"nzPopupClassName",void 0),(0,u.gn)([(0,k.oS)()],ne.prototype,"nzFormat",void 0),(0,u.gn)([(0,k.oS)(),(0,b.yF)()],ne.prototype,"nzUse12Hours",void 0),(0,u.gn)([(0,k.oS)()],ne.prototype,"nzSuffixIcon",void 0),(0,u.gn)([(0,b.yF)()],ne.prototype,"nzHideDisabledOptions",void 0),(0,u.gn)([(0,k.oS)(),(0,b.yF)()],ne.prototype,"nzAllowEmpty",void 0),(0,u.gn)([(0,b.yF)()],ne.prototype,"nzDisabled",void 0),(0,u.gn)([(0,b.yF)()],ne.prototype,"nzAutoFocus",void 0),(0,u.gn)([(0,k.oS)()],ne.prototype,"nzBackdrop",void 0),ne),ie=function(){function e(){t(this,e),this.selected12Hours=void 0,this._use12Hours=!1,this._changes=new d.xQ}return s(e,[{key:"setMinutes",value:function(e,n){return n||(this.initValue(),this.value.setMinutes(e),this.update()),this}},{key:"setHours",value:function(e,n){return n||(this.initValue(),this.value.setHours(this._use12Hours?"PM"===this.selected12Hours&&12!==e?e+12:"AM"===this.selected12Hours&&12===e?0:e:e),this.update()),this}},{key:"setSeconds",value:function(e,n){return n||(this.initValue(),this.value.setSeconds(e),this.update()),this}},{key:"setUse12Hours",value:function(e){return this._use12Hours=e,this}},{key:"changes",get:function(){return this._changes.asObservable()}},{key:"setValue",value:function(e,n){return(0,b.DX)(n)&&(this._use12Hours=n),e!==this.value&&(this._value=e,(0,b.DX)(this.value)?this._use12Hours&&(0,b.DX)(this.hours)&&(this.selected12Hours=this.hours>=12?"PM":"AM"):this._clear()),this}},{key:"initValue",value:function(){(0,b.kK)(this.value)&&this.setValue(new Date,this._use12Hours)}},{key:"clear",value:function(){this._clear(),this.update()}},{key:"isEmpty",get:function(){return!((0,b.DX)(this.hours)||(0,b.DX)(this.minutes)||(0,b.DX)(this.seconds))}},{key:"_clear",value:function(){this._value=void 0,this.selected12Hours=void 0}},{key:"update",value:function(){this.isEmpty?this._value=void 0:((0,b.DX)(this.hours)&&this.value.setHours(this.hours),(0,b.DX)(this.minutes)&&this.value.setMinutes(this.minutes),(0,b.DX)(this.seconds)&&this.value.setSeconds(this.seconds),this._use12Hours&&("PM"===this.selected12Hours&&this.hours<12&&this.value.setHours(this.hours+12),"AM"===this.selected12Hours&&this.hours>=12&&this.value.setHours(this.hours-12))),this.changed()}},{key:"changed",value:function(){this._changes.next(this.value)}},{key:"viewHours",get:function(){return this._use12Hours&&(0,b.DX)(this.hours)?this.calculateViewHour(this.hours):this.hours}},{key:"setSelected12Hours",value:function(e){e.toUpperCase()!==this.selected12Hours&&(this.selected12Hours=e.toUpperCase(),this.update())}},{key:"value",get:function(){return this._value||this._defaultOpenValue}},{key:"hours",get:function(){var e;return null===(e=this.value)||void 0===e?void 0:e.getHours()}},{key:"minutes",get:function(){var e;return null===(e=this.value)||void 0===e?void 0:e.getMinutes()}},{key:"seconds",get:function(){var e;return null===(e=this.value)||void 0===e?void 0:e.getSeconds()}},{key:"setDefaultOpenValue",value:function(e){return this._defaultOpenValue=e,this}},{key:"calculateViewHour",value:function(e){var n=this.selected12Hours;return"PM"===n&&e>12?e-12:"AM"===n&&0===e?12:e}}]),e}();function se(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return new Array(Math.ceil(e/n)).fill(0).map(function(e,i){return(i+t)*n})}var oe=function(){var n=function(){function n(e,i,s,o){t(this,n),this.ngZone=e,this.cdr=i,this.dateHelper=s,this.elementRef=o,this._nzHourStep=1,this._nzMinuteStep=1,this._nzSecondStep=1,this.unsubscribe$=new d.xQ,this._format="HH:mm:ss",this._disabledHours=function(){return[]},this._disabledMinutes=function(){return[]},this._disabledSeconds=function(){return[]},this._allowEmpty=!0,this.time=new ie,this.hourEnabled=!0,this.minuteEnabled=!0,this.secondEnabled=!0,this.firstScrolled=!1,this.enabledColumns=3,this.nzInDatePicker=!1,this.nzHideDisabledOptions=!1,this.nzUse12Hours=!1,this.closePanel=new a.vpe,this.elementRef.nativeElement.classList.add("ant-picker-time-panel")}return s(n,[{key:"nzAllowEmpty",get:function(){return this._allowEmpty},set:function(e){(0,b.DX)(e)&&(this._allowEmpty=e)}},{key:"nzDisabledHours",get:function(){return this._disabledHours},set:function(e){this._disabledHours=e,this._disabledHours&&this.buildHours()}},{key:"nzDisabledMinutes",get:function(){return this._disabledMinutes},set:function(e){(0,b.DX)(e)&&(this._disabledMinutes=e,this.buildMinutes())}},{key:"nzDisabledSeconds",get:function(){return this._disabledSeconds},set:function(e){(0,b.DX)(e)&&(this._disabledSeconds=e,this.buildSeconds())}},{key:"format",get:function(){return this._format},set:function(e){if((0,b.DX)(e)){this._format=e,this.enabledColumns=0;var n=new Set(e);this.hourEnabled=n.has("H")||n.has("h"),this.minuteEnabled=n.has("m"),this.secondEnabled=n.has("s"),this.hourEnabled&&this.enabledColumns++,this.minuteEnabled&&this.enabledColumns++,this.secondEnabled&&this.enabledColumns++,this.nzUse12Hours&&this.build12Hours()}}},{key:"nzHourStep",get:function(){return this._nzHourStep},set:function(e){(0,b.DX)(e)&&(this._nzHourStep=e,this.buildHours())}},{key:"nzMinuteStep",get:function(){return this._nzMinuteStep},set:function(e){(0,b.DX)(e)&&(this._nzMinuteStep=e,this.buildMinutes())}},{key:"nzSecondStep",get:function(){return this._nzSecondStep},set:function(e){(0,b.DX)(e)&&(this._nzSecondStep=e,this.buildSeconds())}},{key:"trackByFn",value:function(e){return e}},{key:"buildHours",value:function(){var n,t=24,i=null===(n=this.nzDisabledHours)||void 0===n?void 0:n.call(this),s=0;if(this.nzUse12Hours&&(t=12,i&&(i="PM"===this.time.selected12Hours?i.filter(function(e){return e>=12}).map(function(e){return e>12?e-12:e}):i.filter(function(e){return e<12||24===e}).map(function(e){return 24===e||0===e?12:e})),s=1),this.hourRange=se(t,this.nzHourStep,s).map(function(e){return{index:e,disabled:!!i&&-1!==i.indexOf(e)}}),this.nzUse12Hours&&12===this.hourRange[this.hourRange.length-1].index){var o=e(this.hourRange);o.unshift(o[o.length-1]),o.splice(o.length-1,1),this.hourRange=o}}},{key:"buildMinutes",value:function(){var e=this;this.minuteRange=se(60,this.nzMinuteStep).map(function(n){return{index:n,disabled:!!e.nzDisabledMinutes&&-1!==e.nzDisabledMinutes(e.time.hours).indexOf(n)}})}},{key:"buildSeconds",value:function(){var e=this;this.secondRange=se(60,this.nzSecondStep).map(function(n){return{index:n,disabled:!!e.nzDisabledSeconds&&-1!==e.nzDisabledSeconds(e.time.hours,e.time.minutes).indexOf(n)}})}},{key:"build12Hours",value:function(){var e=this._format.includes("A");this.use12HoursRange=[{index:0,value:e?"AM":"am"},{index:1,value:e?"PM":"pm"}]}},{key:"buildTimes",value:function(){this.buildHours(),this.buildMinutes(),this.buildSeconds(),this.build12Hours()}},{key:"scrollToTime",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.hourEnabled&&this.hourListElement&&this.scrollToSelected(this.hourListElement.nativeElement,this.time.viewHours,e,"hour"),this.minuteEnabled&&this.minuteListElement&&this.scrollToSelected(this.minuteListElement.nativeElement,this.time.minutes,e,"minute"),this.secondEnabled&&this.secondListElement&&this.scrollToSelected(this.secondListElement.nativeElement,this.time.seconds,e,"second"),this.nzUse12Hours&&this.use12HoursListElement&&this.scrollToSelected(this.use12HoursListElement.nativeElement,"AM"===this.time.selected12Hours?0:1,e,"12-hour")}},{key:"selectHour",value:function(e){this.time.setHours(e.index,e.disabled),this._disabledMinutes&&this.buildMinutes(),(this._disabledSeconds||this._disabledMinutes)&&this.buildSeconds()}},{key:"selectMinute",value:function(e){this.time.setMinutes(e.index,e.disabled),this._disabledSeconds&&this.buildSeconds()}},{key:"selectSecond",value:function(e){this.time.setSeconds(e.index,e.disabled)}},{key:"select12Hours",value:function(e){this.time.setSelected12Hours(e.value),this._disabledHours&&this.buildHours(),this._disabledMinutes&&this.buildMinutes(),this._disabledSeconds&&this.buildSeconds()}},{key:"scrollToSelected",value:function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,i=arguments.length>3?arguments[3]:void 0;if(e){var s=this.translateIndex(n,i);this.scrollTo(e,(e.children[s]||e.children[0]).offsetTop,t)}}},{key:"translateIndex",value:function(e,n){var t,i,s;return"hour"===n?this.calcIndex(null===(t=this.nzDisabledHours)||void 0===t?void 0:t.call(this),this.hourRange.map(function(e){return e.index}).indexOf(e)):"minute"===n?this.calcIndex(null===(i=this.nzDisabledMinutes)||void 0===i?void 0:i.call(this,this.time.hours),this.minuteRange.map(function(e){return e.index}).indexOf(e)):"second"===n?this.calcIndex(null===(s=this.nzDisabledSeconds)||void 0===s?void 0:s.call(this,this.time.hours,this.time.minutes),this.secondRange.map(function(e){return e.index}).indexOf(e)):this.calcIndex([],this.use12HoursRange.map(function(e){return e.index}).indexOf(e))}},{key:"scrollTo",value:function(e,n,t){var i=this;if(t<=0)e.scrollTop=n;else{var s=(n-e.scrollTop)/t*10;this.ngZone.runOutsideAngular(function(){(0,D.e)(function(){e.scrollTop=e.scrollTop+s,e.scrollTop!==n&&i.scrollTo(e,n,t-10)})})}}},{key:"calcIndex",value:function(e,n){return(null==e?void 0:e.length)&&this.nzHideDisabledOptions?n-e.reduce(function(e,t){return e+(t<n?1:0)},0):n}},{key:"changed",value:function(){this.onChange&&this.onChange(this.time.value)}},{key:"touched",value:function(){this.onTouch&&this.onTouch()}},{key:"timeDisabled",value:function(e){var n,t,i,s,o,u,l=e.getHours(),r=e.getMinutes(),a=e.getSeconds();return(null!==(t=null===(n=this.nzDisabledHours)||void 0===n?void 0:n.call(this).indexOf(l))&&void 0!==t?t:-1)>-1||(null!==(s=null===(i=this.nzDisabledMinutes)||void 0===i?void 0:i.call(this,l).indexOf(r))&&void 0!==s?s:-1)>-1||(null!==(u=null===(o=this.nzDisabledSeconds)||void 0===o?void 0:o.call(this,l,r).indexOf(a))&&void 0!==u?u:-1)>-1}},{key:"onClickNow",value:function(){var e=new Date;this.timeDisabled(e)||(this.time.setValue(e),this.changed(),this.closePanel.emit())}},{key:"onClickOk",value:function(){this.time.setValue(this.time.value,this.nzUse12Hours),this.changed(),this.closePanel.emit()}},{key:"isSelectedHour",value:function(e){return e.index===this.time.viewHours}},{key:"isSelectedMinute",value:function(e){return e.index===this.time.minutes}},{key:"isSelectedSecond",value:function(e){return e.index===this.time.seconds}},{key:"isSelected12Hours",value:function(e){return e.value.toUpperCase()===this.time.selected12Hours}},{key:"ngOnInit",value:function(){var e=this;this.time.changes.pipe((0,v.R)(this.unsubscribe$)).subscribe(function(){e.changed(),e.touched(),e.scrollToTime(120)}),this.buildTimes(),setTimeout(function(){e.scrollToTime(),e.firstScrolled=!0}),this.ngZone.runOutsideAngular(function(){(0,p.R)(e.elementRef.nativeElement,"mousedown").pipe((0,v.R)(e.unsubscribe$)).subscribe(function(e){e.preventDefault()})})}},{key:"ngOnDestroy",value:function(){this.unsubscribe$.next(),this.unsubscribe$.complete()}},{key:"ngOnChanges",value:function(e){var n=e.nzUse12Hours,t=e.nzDefaultOpenValue;!(null==n?void 0:n.previousValue)&&(null==n?void 0:n.currentValue)&&(this.build12Hours(),this.enabledColumns++),(null==t?void 0:t.currentValue)&&this.time.setDefaultOpenValue(this.nzDefaultOpenValue||new Date)}},{key:"writeValue",value:function(e){this.time.setValue(e,this.nzUse12Hours),this.buildTimes(),e&&this.firstScrolled&&this.scrollToTime(120),this.cdr.markForCheck()}},{key:"registerOnChange",value:function(e){this.onChange=e}},{key:"registerOnTouched",value:function(e){this.onTouch=e}}]),n}();return n.\u0275fac=function(e){return new(e||n)(a.Y36(a.R0b),a.Y36(a.sBO),a.Y36(y.mx),a.Y36(a.SBq))},n.\u0275cmp=a.Xpm({type:n,selectors:[["nz-time-picker-panel"]],viewQuery:function(e,n){var t;(1&e&&(a.Gf(I,5),a.Gf(V,5),a.Gf(F,5),a.Gf(P,5)),2&e)&&(a.iGM(t=a.CRH())&&(n.hourListElement=t.first),a.iGM(t=a.CRH())&&(n.minuteListElement=t.first),a.iGM(t=a.CRH())&&(n.secondListElement=t.first),a.iGM(t=a.CRH())&&(n.use12HoursListElement=t.first))},hostVars:12,hostBindings:function(e,n){2&e&&a.ekj("ant-picker-time-panel-column-0",0===n.enabledColumns&&!n.nzInDatePicker)("ant-picker-time-panel-column-1",1===n.enabledColumns&&!n.nzInDatePicker)("ant-picker-time-panel-column-2",2===n.enabledColumns&&!n.nzInDatePicker)("ant-picker-time-panel-column-3",3===n.enabledColumns&&!n.nzInDatePicker)("ant-picker-time-panel-narrow",n.enabledColumns<3)("ant-picker-time-panel-placement-bottomLeft",!n.nzInDatePicker)},inputs:{nzInDatePicker:"nzInDatePicker",nzHideDisabledOptions:"nzHideDisabledOptions",nzUse12Hours:"nzUse12Hours",nzAllowEmpty:"nzAllowEmpty",nzDisabledHours:"nzDisabledHours",nzDisabledMinutes:"nzDisabledMinutes",nzDisabledSeconds:"nzDisabledSeconds",format:"format",nzHourStep:"nzHourStep",nzMinuteStep:"nzMinuteStep",nzSecondStep:"nzSecondStep",nzAddOn:"nzAddOn",nzClearText:"nzClearText",nzNowText:"nzNowText",nzOkText:"nzOkText",nzPlaceHolder:"nzPlaceHolder",nzDefaultOpenValue:"nzDefaultOpenValue"},outputs:{closePanel:"closePanel"},exportAs:["nzTimePickerPanel"],features:[a._Bn([{provide:c.JU,useExisting:n,multi:!0}]),a.TTD],decls:7,vars:6,consts:[["class","ant-picker-header",4,"ngIf"],[1,"ant-picker-content"],["class","ant-picker-time-panel-column","style","position: relative;",4,"ngIf"],["class","ant-picker-footer",4,"ngIf"],[1,"ant-picker-header"],[1,"ant-picker-header-view"],[1,"ant-picker-time-panel-column",2,"position","relative"],["hourListElement",""],[4,"ngFor","ngForOf","ngForTrackBy"],["class","ant-picker-time-panel-cell",3,"ant-picker-time-panel-cell-selected","ant-picker-time-panel-cell-disabled","click",4,"ngIf"],[1,"ant-picker-time-panel-cell",3,"click"],[1,"ant-picker-time-panel-cell-inner"],["minuteListElement",""],["secondListElement",""],["use12HoursListElement",""],[4,"ngFor","ngForOf"],["class","ant-picker-time-panel-cell",3,"ant-picker-time-panel-cell-selected","click",4,"ngIf"],[1,"ant-picker-footer"],["class","ant-picker-footer-extra",4,"ngIf"],[1,"ant-picker-ranges"],[1,"ant-picker-now"],[3,"click"],[1,"ant-picker-ok"],["nz-button","","type","button","nzSize","small","nzType","primary",3,"click"],[1,"ant-picker-footer-extra"],[3,"ngTemplateOutlet"]],template:function(e,n){1&e&&(a.YNc(0,N,3,1,"div",0),a.TgZ(1,"div",1),a.YNc(2,R,3,2,"ul",2),a.YNc(3,Q,3,2,"ul",2),a.YNc(4,X,3,2,"ul",2),a.YNc(5,G,3,1,"ul",2),a.qZA(),a.YNc(6,ee,11,7,"div",3)),2&e&&(a.Q6J("ngIf",n.nzInDatePicker),a.xp6(2),a.Q6J("ngIf",n.hourEnabled),a.xp6(1),a.Q6J("ngIf",n.minuteEnabled),a.xp6(1),a.Q6J("ngIf",n.secondEnabled),a.xp6(1),a.Q6J("ngIf",n.nzUse12Hours),a.xp6(1),a.Q6J("ngIf",!n.nzInDatePicker))},directives:[H.O5,H.sg,x.ix,A.dQ,w.w,H.tP],pipes:[H.JJ,y.o9],encapsulation:2,changeDetection:0}),(0,u.gn)([(0,b.yF)()],n.prototype,"nzUse12Hours",void 0),n}(),ue=function(){var e=s(function e(){t(this,e)});return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=a.oAB({type:e}),e.\u0275inj=a.cJS({imports:[[l.vT,H.ez,c.u5,y.YI,r.U8,T.PV,O.e4,S.T,x.sL]]}),e}()}}])}();