(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{wvnp:function(e,t,n){"use strict";n.d(t,"a",(function(){return q})),n.d(t,"b",(function(){return Y})),n.d(t,"c",(function(){return X}));var i=n("mrSG"),s=n("rDax"),c=n("fXoL"),l=n("3Pt+"),o=n("eczo"),u=n("8IHs"),a=n("RuSR"),r=n("d1+9"),d=n("ofXK"),h=n("fwD0"),b=n("EOB0"),p=n("d4FC"),m=n("MOHP"),z=n("yTbr"),f=n("XNiG"),v=n("1G5W");const g=["inputElement"];function O(e,t){if(1&e&&(c.Yb(0),c.Vb(1,"i",7),c.Xb()),2&e){const e=t.$implicit;c.Db(1),c.vc("nzType",e)}}function H(e,t){if(1&e){const e=c.cc();c.ac(0,"span",8),c.jc("click",(function(t){return c.Ic(e),c.nc().onClickClearBtn(t)})),c.Vb(1,"i",9),c.Zb()}if(2&e){const e=c.nc();c.Db(1),c.Eb("aria-label",e.nzClearText)("title",e.nzClearText)}}function S(e,t){if(1&e){const e=c.cc();c.ac(0,"div",10),c.ac(1,"div",11),c.ac(2,"div",12),c.ac(3,"nz-time-picker-panel",13),c.jc("ngModelChange",(function(t){return c.Ic(e),c.nc().value=t}))("ngModelChange",(function(t){return c.Ic(e),c.nc().setValue(t)}))("closePanel",(function(){return c.Ic(e),c.nc().close()})),c.oc(4,"nzI18n"),c.Zb(),c.Zb(),c.Zb(),c.Zb()}if(2&e){const e=c.nc();c.vc("@slideMotion","bottom"),c.Db(3),c.vc("ngClass",e.nzPopupClassName)("format",e.nzFormat)("nzHourStep",e.nzHourStep)("nzMinuteStep",e.nzMinuteStep)("nzSecondStep",e.nzSecondStep)("nzDisabledHours",e.nzDisabledHours)("nzDisabledMinutes",e.nzDisabledMinutes)("nzDisabledSeconds",e.nzDisabledSeconds)("nzPlaceHolder",e.nzPlaceHolder||c.pc(4,17,"TimePicker.placeholder"))("nzHideDisabledOptions",e.nzHideDisabledOptions)("nzUse12Hours",e.nzUse12Hours)("nzDefaultOpenValue",e.nzDefaultOpenValue)("nzAddOn",e.nzAddOn)("nzClearText",e.nzClearText)("nzAllowEmpty",e.nzAllowEmpty)("ngModel",e.value)}}const D=["hourListElement"],k=["minuteListElement"],T=["secondListElement"],C=["use12HoursListElement"];function E(e,t){if(1&e&&(c.ac(0,"div",4),c.ac(1,"div",5),c.Tc(2),c.Zb(),c.Zb()),2&e){const e=c.nc();c.Db(2),c.Uc(e.dateHelper.format(null==e.time?null:e.time.value,e.format)||"\xa0")}}function j(e,t){if(1&e){const e=c.cc();c.ac(0,"li",10),c.jc("click",(function(){c.Ic(e);const t=c.nc().$implicit;return c.nc(2).selectHour(t)})),c.ac(1,"div",11),c.Tc(2),c.oc(3,"number"),c.Zb(),c.Zb()}if(2&e){const e=c.nc().$implicit,t=c.nc(2);c.Jb("ant-picker-time-panel-cell-selected",t.isSelectedHour(e))("ant-picker-time-panel-cell-disabled",e.disabled),c.Db(2),c.Uc(c.qc(3,5,e.index,"2.0-0"))}}function y(e,t){if(1&e&&(c.Yb(0),c.Rc(1,j,4,8,"li",9),c.Xb()),2&e){const e=t.$implicit,n=c.nc(2);c.Db(1),c.vc("ngIf",!(n.nzHideDisabledOptions&&e.disabled))}}function M(e,t){if(1&e&&(c.ac(0,"ul",6,7),c.Rc(2,y,2,1,"ng-container",8),c.Zb()),2&e){const e=c.nc();c.Db(2),c.vc("ngForOf",e.hourRange)}}function x(e,t){if(1&e){const e=c.cc();c.ac(0,"li",10),c.jc("click",(function(){c.Ic(e);const t=c.nc().$implicit;return c.nc(2).selectMinute(t)})),c.ac(1,"div",11),c.Tc(2),c.oc(3,"number"),c.Zb(),c.Zb()}if(2&e){const e=c.nc().$implicit,t=c.nc(2);c.Jb("ant-picker-time-panel-cell-selected",t.isSelectedMinute(e))("ant-picker-time-panel-cell-disabled",e.disabled),c.Db(2),c.Uc(c.qc(3,5,e.index,"2.0-0"))}}function _(e,t){if(1&e&&(c.Yb(0),c.Rc(1,x,4,8,"li",9),c.Xb()),2&e){const e=t.$implicit,n=c.nc(2);c.Db(1),c.vc("ngIf",!(n.nzHideDisabledOptions&&e.disabled))}}function I(e,t){if(1&e&&(c.ac(0,"ul",6,12),c.Rc(2,_,2,1,"ng-container",8),c.Zb()),2&e){const e=c.nc();c.Db(2),c.vc("ngForOf",e.minuteRange)}}function w(e,t){if(1&e){const e=c.cc();c.ac(0,"li",10),c.jc("click",(function(){c.Ic(e);const t=c.nc().$implicit;return c.nc(2).selectSecond(t)})),c.ac(1,"div",11),c.Tc(2),c.oc(3,"number"),c.Zb(),c.Zb()}if(2&e){const e=c.nc().$implicit,t=c.nc(2);c.Jb("ant-picker-time-panel-cell-selected",t.isSelectedSecond(e))("ant-picker-time-panel-cell-disabled",e.disabled),c.Db(2),c.Uc(c.qc(3,5,e.index,"2.0-0"))}}function P(e,t){if(1&e&&(c.Yb(0),c.Rc(1,w,4,8,"li",9),c.Xb()),2&e){const e=t.$implicit,n=c.nc(2);c.Db(1),c.vc("ngIf",!(n.nzHideDisabledOptions&&e.disabled))}}function R(e,t){if(1&e&&(c.ac(0,"ul",6,13),c.Rc(2,P,2,1,"ng-container",8),c.Zb()),2&e){const e=c.nc();c.Db(2),c.vc("ngForOf",e.secondRange)}}function A(e,t){if(1&e){const e=c.cc();c.ac(0,"li",10),c.jc("click",(function(){c.Ic(e);const t=c.nc().$implicit;return c.nc(2).select12Hours(t)})),c.ac(1,"div",11),c.Tc(2),c.Zb(),c.Zb()}if(2&e){const e=c.nc().$implicit,t=c.nc(2);c.Jb("ant-picker-time-panel-cell-selected",t.isSelected12Hours(e)),c.Db(2),c.Uc(e.value)}}function V(e,t){if(1&e&&(c.Yb(0),c.Rc(1,A,3,3,"li",15),c.Xb()),2&e){const e=c.nc(2);c.Db(1),c.vc("ngIf",!e.nzHideDisabledOptions)}}function Z(e,t){if(1&e&&(c.ac(0,"ul",6,14),c.Rc(2,V,2,1,"ng-container",8),c.Zb()),2&e){const e=c.nc();c.Db(2),c.vc("ngForOf",e.use12HoursRange)}}function F(e,t){}function U(e,t){if(1&e&&(c.ac(0,"div",21),c.Rc(1,F,0,0,"ng-template",22),c.Zb()),2&e){const e=c.nc(2);c.Db(1),c.vc("ngTemplateOutlet",e.nzAddOn)}}function L(e,t){if(1&e){const e=c.cc();c.ac(0,"div",16),c.Rc(1,U,2,1,"div",17),c.ac(2,"ul",18),c.ac(3,"li",19),c.ac(4,"a",20),c.jc("click",(function(){return c.Ic(e),c.nc().onClickNow()})),c.Tc(5),c.oc(6,"nzI18n"),c.Zb(),c.Zb(),c.Zb(),c.Zb()}if(2&e){const e=c.nc();c.Db(1),c.vc("ngIf",e.nzAddOn),c.Db(4),c.Vc(" ",c.pc(6,2,"Calendar.now")," ")}}let q=(()=>{class e{constructor(e,t,n,i){this.nzConfigService=e,this.element=t,this.renderer=n,this.cdr=i,this.isInit=!1,this.focused=!1,this.value=null,this.overlayPositions=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top",offsetX:0,offsetY:3}],this.nzSize=null,this.nzHourStep=1,this.nzMinuteStep=1,this.nzSecondStep=1,this.nzClearText="clear",this.nzPopupClassName="",this.nzPlaceHolder="",this.nzFormat="HH:mm:ss",this.nzOpen=!1,this.nzUse12Hours=!1,this.nzSuffixIcon="clock-circle",this.nzOpenChange=new c.n,this.nzHideDisabledOptions=!1,this.nzAllowEmpty=!0,this.nzDisabled=!1,this.nzAutoFocus=!1}setValue(e){this.value=e?new Date(e):null,this._onChange&&this._onChange(this.value),this._onTouched&&this._onTouched()}open(){this.nzDisabled||(this.focus(),this.nzOpen=!0,this.nzOpenChange.emit(this.nzOpen))}close(){this.nzOpen=!1,this.cdr.markForCheck(),this.nzOpenChange.emit(this.nzOpen)}updateAutoFocus(){this.isInit&&!this.nzDisabled&&(this.nzAutoFocus?this.renderer.setAttribute(this.inputRef.nativeElement,"autofocus","autofocus"):this.renderer.removeAttribute(this.inputRef.nativeElement,"autofocus"))}onClickClearBtn(e){e.stopPropagation(),this.setValue(null)}onFocus(e){this.focused=e}focus(){this.inputRef.nativeElement&&this.inputRef.nativeElement.focus()}blur(){this.inputRef.nativeElement&&this.inputRef.nativeElement.blur()}ngOnInit(){this.inputSize=Math.max(8,this.nzFormat.length)+2,this.origin=new s.b(this.element)}ngOnChanges(e){const{nzUse12Hours:t,nzFormat:n,nzDisabled:i,nzAutoFocus:s}=e;if(t&&!t.previousValue&&t.currentValue&&!n&&(this.nzFormat="h:mm:ss a"),i){const e=this.inputRef.nativeElement;i.currentValue?this.renderer.setAttribute(e,"disabled",""):this.renderer.removeAttribute(e,"disabled")}s&&this.updateAutoFocus()}ngAfterViewInit(){this.isInit=!0,this.updateAutoFocus()}writeValue(e){e instanceof Date?this.value=e:Object(r.o)(e)?this.value=null:(Object(a.b)('Non-Date type is not recommended for time-picker, use "Date" type.'),this.value=new Date(e)),this.cdr.markForCheck()}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.nzDisabled=e,this.cdr.markForCheck()}}return e.\u0275fac=function(t){return new(t||e)(c.Tb(u.b),c.Tb(c.l),c.Tb(c.E),c.Tb(c.h))},e.\u0275cmp=c.Nb({type:e,selectors:[["nz-time-picker"]],viewQuery:function(e,t){var n;1&e&&c.Oc(g,!0),2&e&&c.Ec(n=c.kc())&&(t.inputRef=n.first)},hostVars:10,hostBindings:function(e,t){1&e&&c.jc("click",(function(){return t.open()})),2&e&&c.Jb("ant-picker",!0)("ant-picker-large","large"===t.nzSize)("ant-picker-small","small"===t.nzSize)("ant-picker-disabled",t.nzDisabled)("ant-picker-focused",t.focused)},inputs:{nzSize:"nzSize",nzHourStep:"nzHourStep",nzMinuteStep:"nzMinuteStep",nzSecondStep:"nzSecondStep",nzClearText:"nzClearText",nzPopupClassName:"nzPopupClassName",nzPlaceHolder:"nzPlaceHolder",nzFormat:"nzFormat",nzOpen:"nzOpen",nzUse12Hours:"nzUse12Hours",nzSuffixIcon:"nzSuffixIcon",nzHideDisabledOptions:"nzHideDisabledOptions",nzAllowEmpty:"nzAllowEmpty",nzDisabled:"nzDisabled",nzAutoFocus:"nzAutoFocus",nzAddOn:"nzAddOn",nzDefaultOpenValue:"nzDefaultOpenValue",nzDisabledHours:"nzDisabledHours",nzDisabledMinutes:"nzDisabledMinutes",nzDisabledSeconds:"nzDisabledSeconds"},outputs:{nzOpenChange:"nzOpenChange"},exportAs:["nzTimePicker"],features:[c.Cb([{provide:l.l,useExisting:e,multi:!0}]),c.Bb],decls:8,vars:13,consts:[[1,"ant-picker-input"],["type","text",3,"size","nzTime","placeholder","ngModel","disabled","ngModelChange","focus","blur"],["inputElement",""],[1,"ant-picker-suffix"],[4,"nzStringTemplateOutlet"],["class","ant-picker-clear",3,"click",4,"ngIf"],["cdkConnectedOverlay","","nzConnectedOverlay","","cdkConnectedOverlayHasBackdrop","",3,"cdkConnectedOverlayPositions","cdkConnectedOverlayOrigin","cdkConnectedOverlayOpen","cdkConnectedOverlayOffsetY","detach","backdropClick"],["nz-icon","",3,"nzType"],[1,"ant-picker-clear",3,"click"],["nz-icon","","nzType","close-circle","nzTheme","fill"],[1,"ant-picker-dropdown"],[1,"ant-picker-panel-container"],["tabindex","-1",1,"ant-picker-panel"],[3,"ngClass","format","nzHourStep","nzMinuteStep","nzSecondStep","nzDisabledHours","nzDisabledMinutes","nzDisabledSeconds","nzPlaceHolder","nzHideDisabledOptions","nzUse12Hours","nzDefaultOpenValue","nzAddOn","nzClearText","nzAllowEmpty","ngModel","ngModelChange","closePanel"]],template:function(e,t){1&e&&(c.ac(0,"div",0),c.ac(1,"input",1,2),c.jc("ngModelChange",(function(e){return t.value=e}))("focus",(function(){return t.onFocus(!0)}))("blur",(function(){return t.onFocus(!1)})),c.oc(3,"nzI18n"),c.Zb(),c.ac(4,"span",3),c.Rc(5,O,2,1,"ng-container",4),c.Zb(),c.Rc(6,H,2,2,"span",5),c.Zb(),c.Rc(7,S,5,19,"ng-template",6),c.jc("detach",(function(){return t.close()}))("backdropClick",(function(){return t.close()}))),2&e&&(c.Db(1),c.vc("size",t.inputSize)("nzTime",t.nzFormat)("placeholder",t.nzPlaceHolder||c.pc(3,11,"TimePicker.placeholder"))("ngModel",t.value)("disabled",t.nzDisabled),c.Db(4),c.vc("nzStringTemplateOutlet",t.nzSuffixIcon),c.Db(1),c.vc("ngIf",t.nzAllowEmpty&&t.value),c.Db(1),c.vc("cdkConnectedOverlayPositions",t.overlayPositions)("cdkConnectedOverlayOrigin",t.origin)("cdkConnectedOverlayOpen",t.nzOpen)("cdkConnectedOverlayOffsetY",-2))},directives:function(){return[N,l.b,l.n,l.q,h.b,d.n,s.a,b.e,m.a,X,d.l]},pipes:function(){return[p.c]},encapsulation:2,data:{animation:[o.g]},changeDetection:0}),Object(i.b)([Object(u.c)("timePicker"),Object(i.c)("design:type",Number)],e.prototype,"nzHourStep",void 0),Object(i.b)([Object(u.c)("timePicker"),Object(i.c)("design:type",Number)],e.prototype,"nzMinuteStep",void 0),Object(i.b)([Object(u.c)("timePicker"),Object(i.c)("design:type",Number)],e.prototype,"nzSecondStep",void 0),Object(i.b)([Object(u.c)("timePicker"),Object(i.c)("design:type",String)],e.prototype,"nzClearText",void 0),Object(i.b)([Object(u.c)("timePicker"),Object(i.c)("design:type",String)],e.prototype,"nzPopupClassName",void 0),Object(i.b)([Object(u.c)("timePicker"),Object(i.c)("design:type",String)],e.prototype,"nzFormat",void 0),Object(i.b)([Object(u.c)("timePicker"),Object(r.a)(),Object(i.c)("design:type",Boolean)],e.prototype,"nzUse12Hours",void 0),Object(i.b)([Object(u.c)("timePicker"),Object(i.c)("design:type",Object)],e.prototype,"nzSuffixIcon",void 0),Object(i.b)([Object(r.a)(),Object(i.c)("design:type",Object)],e.prototype,"nzHideDisabledOptions",void 0),Object(i.b)([Object(u.c)("timePicker"),Object(r.a)(),Object(i.c)("design:type",Boolean)],e.prototype,"nzAllowEmpty",void 0),Object(i.b)([Object(r.a)(),Object(i.c)("design:type",Object)],e.prototype,"nzDisabled",void 0),Object(i.b)([Object(r.a)(),Object(i.c)("design:type",Object)],e.prototype,"nzAutoFocus",void 0),e})();class ${constructor(){this.selected12Hours=void 0,this._use12Hours=!1,this._changes=new f.a}setMinutes(e,t){return e===this.minutes||t||(this.initValue(),this.value.setMinutes(e),this.update()),this}setHours(e,t){return e===this.hours||t||(this.initValue(),this.value.setHours(this._use12Hours?"PM"===this.selected12Hours&&12!==e?e+12:"AM"===this.selected12Hours&&12===e?0:e:e),this.update()),this}setSeconds(e,t){return e===this.seconds||t||(this.initValue(),this.value.setSeconds(e),this.update()),this}setUse12Hours(e){return this._use12Hours=e,this}get changes(){return this._changes.asObservable()}setValue(e,t){return Object(r.q)(t)&&(this._use12Hours=t),e!==this.value&&(this._value=e,Object(r.q)(this.value)?this._use12Hours&&Object(r.q)(this.hours)&&(this.selected12Hours=this.hours>=12?"PM":"AM"):this._clear()),this}initValue(){Object(r.o)(this.value)&&this.setValue(new Date,this._use12Hours)}clear(){this._clear(),this.update()}get isEmpty(){return!(Object(r.q)(this.hours)||Object(r.q)(this.minutes)||Object(r.q)(this.seconds))}_clear(){this._value=void 0,this.selected12Hours=void 0}update(){this.isEmpty?this._value=void 0:(Object(r.q)(this.hours)&&this.value.setHours(this.hours),Object(r.q)(this.minutes)&&this.value.setMinutes(this.minutes),Object(r.q)(this.seconds)&&this.value.setSeconds(this.seconds),this._use12Hours&&("PM"===this.selected12Hours&&this.hours<12&&this.value.setHours(this.hours+12),"AM"===this.selected12Hours&&this.hours>=12&&this.value.setHours(this.hours-12))),this.changed()}changed(){this._changes.next(this.value)}get viewHours(){return this._use12Hours&&Object(r.q)(this.hours)?this.calculateViewHour(this.hours):this.hours}setSelected12Hours(e){e.toUpperCase()!==this.selected12Hours&&(this.selected12Hours=e.toUpperCase(),this.update())}get value(){return this._value||this._defaultOpenValue}get hours(){var e;return null===(e=this.value)||void 0===e?void 0:e.getHours()}get minutes(){var e;return null===(e=this.value)||void 0===e?void 0:e.getMinutes()}get seconds(){var e;return null===(e=this.value)||void 0===e?void 0:e.getSeconds()}setDefaultOpenValue(e){return this._defaultOpenValue=e,this}calculateViewHour(e){const t=this.selected12Hours;return"PM"===t&&e>12?e-12:"AM"===t&&0===e?12:e}}let N=(()=>{class e{constructor(e,t){this.dateHelper=e,this.elementRef=t}keyup(){this.changed()}blur(){this.touched()}changed(){if(this._onChange){const e=this.dateHelper.parseTime(this.elementRef.nativeElement.value,this.nzTime);this._onChange(e)}}touched(){this._onTouch&&this._onTouch()}setRange(){this.elementRef.nativeElement.focus(),this.elementRef.nativeElement.setSelectionRange(0,this.elementRef.nativeElement.value.length)}writeValue(e){this.elementRef.nativeElement.value=this.dateHelper.format(e,this.nzTime)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouch=e}}return e.\u0275fac=function(t){return new(t||e)(c.Tb(p.a),c.Tb(c.l))},e.\u0275dir=c.Ob({type:e,selectors:[["input","nzTime",""]],hostBindings:function(e,t){1&e&&c.jc("keyup",(function(){return t.keyup()}))("blur",(function(){return t.blur()}))},inputs:{nzTime:"nzTime"},exportAs:["nzTime"],features:[c.Cb([{provide:l.l,useExisting:e,multi:!0}])]}),e})();function B(e,t=1,n=0){return new Array(Math.ceil(e/t)).fill(0).map((e,i)=>(i+n)*t)}let X=(()=>{class e{constructor(e,t){this.cdr=e,this.dateHelper=t,this._nzHourStep=1,this._nzMinuteStep=1,this._nzSecondStep=1,this.unsubscribe$=new f.a,this._format="HH:mm:ss",this._disabledHours=()=>[],this._disabledMinutes=()=>[],this._disabledSeconds=()=>[],this._allowEmpty=!0,this.time=new $,this.hourEnabled=!0,this.minuteEnabled=!0,this.secondEnabled=!0,this.firstScrolled=!1,this.enabledColumns=3,this.nzInDatePicker=!1,this.nzHideDisabledOptions=!1,this.nzUse12Hours=!1,this.closePanel=new c.n}set nzAllowEmpty(e){Object(r.q)(e)&&(this._allowEmpty=e)}get nzAllowEmpty(){return this._allowEmpty}set nzDisabledHours(e){this._disabledHours=e,this._disabledHours&&this.buildHours()}get nzDisabledHours(){return this._disabledHours}set nzDisabledMinutes(e){Object(r.q)(e)&&(this._disabledMinutes=e,this.buildMinutes())}get nzDisabledMinutes(){return this._disabledMinutes}set nzDisabledSeconds(e){Object(r.q)(e)&&(this._disabledSeconds=e,this.buildSeconds())}get nzDisabledSeconds(){return this._disabledSeconds}set format(e){if(Object(r.q)(e)){this._format=e,this.enabledColumns=0;const t=new Set(e);this.hourEnabled=t.has("H")||t.has("h"),this.minuteEnabled=t.has("m"),this.secondEnabled=t.has("s"),this.hourEnabled&&this.enabledColumns++,this.minuteEnabled&&this.enabledColumns++,this.secondEnabled&&this.enabledColumns++,this.nzUse12Hours&&this.build12Hours()}}get format(){return this._format}set nzHourStep(e){Object(r.q)(e)&&(this._nzHourStep=e,this.buildHours())}get nzHourStep(){return this._nzHourStep}set nzMinuteStep(e){Object(r.q)(e)&&(this._nzMinuteStep=e,this.buildMinutes())}get nzMinuteStep(){return this._nzMinuteStep}set nzSecondStep(e){Object(r.q)(e)&&(this._nzSecondStep=e,this.buildSeconds())}get nzSecondStep(){return this._nzSecondStep}selectInputRange(){setTimeout(()=>{this.nzTimeValueAccessorDirective&&this.nzTimeValueAccessorDirective.setRange()})}buildHours(){var e;let t=24,n=null===(e=this.nzDisabledHours)||void 0===e?void 0:e.call(this),i=0;if(this.nzUse12Hours&&(t=12,n&&(n="PM"===this.time.selected12Hours?n.filter(e=>e>=12).map(e=>e>12?e-12:e):n.filter(e=>e<12||24===e).map(e=>24===e||0===e?12:e)),i=1),this.hourRange=B(t,this.nzHourStep,i).map(e=>({index:e,disabled:!!n&&-1!==n.indexOf(e)})),this.nzUse12Hours&&12===this.hourRange[this.hourRange.length-1].index){const e=[...this.hourRange];e.unshift(e[e.length-1]),e.splice(e.length-1,1),this.hourRange=e}}buildMinutes(){this.minuteRange=B(60,this.nzMinuteStep).map(e=>({index:e,disabled:!!this.nzDisabledMinutes&&-1!==this.nzDisabledMinutes(this.time.hours).indexOf(e)}))}buildSeconds(){this.secondRange=B(60,this.nzSecondStep).map(e=>({index:e,disabled:!!this.nzDisabledSeconds&&-1!==this.nzDisabledSeconds(this.time.hours,this.time.minutes).indexOf(e)}))}build12Hours(){const e=this._format.includes("A");this.use12HoursRange=[{index:0,value:e?"AM":"am"},{index:1,value:e?"PM":"pm"}]}buildTimes(){this.buildHours(),this.buildMinutes(),this.buildSeconds(),this.build12Hours()}scrollToTime(e=0){this.hourEnabled&&this.hourListElement&&this.scrollToSelected(this.hourListElement.nativeElement,this.time.viewHours,e,"hour"),this.minuteEnabled&&this.minuteListElement&&this.scrollToSelected(this.minuteListElement.nativeElement,this.time.minutes,e,"minute"),this.secondEnabled&&this.secondListElement&&this.scrollToSelected(this.secondListElement.nativeElement,this.time.seconds,e,"second"),this.nzUse12Hours&&this.use12HoursListElement&&this.scrollToSelected(this.use12HoursListElement.nativeElement,"AM"===this.time.selected12Hours?0:1,e,"12-hour")}selectHour(e){this.time.setHours(e.index,e.disabled),this._disabledMinutes&&this.buildMinutes(),(this._disabledSeconds||this._disabledMinutes)&&this.buildSeconds()}selectMinute(e){this.time.setMinutes(e.index,e.disabled),this._disabledSeconds&&this.buildSeconds()}selectSecond(e){this.time.setSeconds(e.index,e.disabled)}select12Hours(e){this.time.setSelected12Hours(e.value),this._disabledHours&&this.buildHours(),this._disabledMinutes&&this.buildMinutes(),this._disabledSeconds&&this.buildSeconds()}scrollToSelected(e,t,n=0,i){if(!e)return;const s=this.translateIndex(t,i);this.scrollTo(e,(e.children[s]||e.children[0]).offsetTop,n)}translateIndex(e,t){var n,i,s;return"hour"===t?this.calcIndex(null===(n=this.nzDisabledHours)||void 0===n?void 0:n.call(this),this.hourRange.map(e=>e.index).indexOf(e)):"minute"===t?this.calcIndex(null===(i=this.nzDisabledMinutes)||void 0===i?void 0:i.call(this,this.time.hours),this.minuteRange.map(e=>e.index).indexOf(e)):"second"===t?this.calcIndex(null===(s=this.nzDisabledSeconds)||void 0===s?void 0:s.call(this,this.time.hours,this.time.minutes),this.secondRange.map(e=>e.index).indexOf(e)):this.calcIndex([],this.use12HoursRange.map(e=>e.index).indexOf(e))}scrollTo(e,t,n){if(n<=0)return void(e.scrollTop=t);const i=(t-e.scrollTop)/n*10;Object(z.b)(()=>{e.scrollTop=e.scrollTop+i,e.scrollTop!==t&&this.scrollTo(e,t,n-10)})}calcIndex(e,t){return(null==e?void 0:e.length)&&this.nzHideDisabledOptions?t-e.reduce((e,n)=>e+(n<t?1:0),0):t}changed(){this.onChange&&this.onChange(this.time.value)}touched(){this.onTouch&&this.onTouch()}timeDisabled(e){var t,n,i,s,c,l;const o=e.getHours(),u=e.getMinutes(),a=e.getSeconds();return(null!==(n=null===(t=this.nzDisabledHours)||void 0===t?void 0:t.call(this).indexOf(o))&&void 0!==n?n:-1)>-1||(null!==(s=null===(i=this.nzDisabledMinutes)||void 0===i?void 0:i.call(this,o).indexOf(u))&&void 0!==s?s:-1)>-1||(null!==(l=null===(c=this.nzDisabledSeconds)||void 0===c?void 0:c.call(this,o,u).indexOf(a))&&void 0!==l?l:-1)>-1}onClickNow(){const e=new Date;this.timeDisabled(e)||(this.time.setValue(e),this.changed(),this.closePanel.emit())}isSelectedHour(e){return e.index===this.time.viewHours}isSelectedMinute(e){return e.index===this.time.minutes}isSelectedSecond(e){return e.index===this.time.seconds}isSelected12Hours(e){return e.value.toUpperCase()===this.time.selected12Hours}ngOnInit(){this.time.changes.pipe(Object(v.a)(this.unsubscribe$)).subscribe(()=>{this.changed(),this.touched()}),this.buildTimes(),this.selectInputRange(),setTimeout(()=>{this.scrollToTime(),this.firstScrolled=!0})}ngOnDestroy(){this.unsubscribe$.next(),this.unsubscribe$.complete()}ngOnChanges(e){const{nzUse12Hours:t,nzDefaultOpenValue:n}=e;!(null==t?void 0:t.previousValue)&&(null==t?void 0:t.currentValue)&&(this.build12Hours(),this.enabledColumns++),(null==n?void 0:n.currentValue)&&this.time.setDefaultOpenValue(this.nzDefaultOpenValue||new Date)}writeValue(e){this.time.setValue(e,this.nzUse12Hours),this.buildTimes(),e&&this.firstScrolled&&this.scrollToTime(120),this.cdr.markForCheck()}registerOnChange(e){this.onChange=e}registerOnTouched(e){this.onTouch=e}}return e.\u0275fac=function(t){return new(t||e)(c.Tb(c.h),c.Tb(p.a))},e.\u0275cmp=c.Nb({type:e,selectors:[["nz-time-picker-panel"]],viewQuery:function(e,t){var n;1&e&&(c.Zc(N,!0),c.Zc(D,!0),c.Zc(k,!0),c.Zc(T,!0),c.Zc(C,!0)),2&e&&(c.Ec(n=c.kc())&&(t.nzTimeValueAccessorDirective=n.first),c.Ec(n=c.kc())&&(t.hourListElement=n.first),c.Ec(n=c.kc())&&(t.minuteListElement=n.first),c.Ec(n=c.kc())&&(t.secondListElement=n.first),c.Ec(n=c.kc())&&(t.use12HoursListElement=n.first))},hostVars:14,hostBindings:function(e,t){2&e&&c.Jb("ant-picker-time-panel",!0)("ant-picker-time-panel-column-0",0===t.enabledColumns&&!t.nzInDatePicker)("ant-picker-time-panel-column-1",1===t.enabledColumns&&!t.nzInDatePicker)("ant-picker-time-panel-column-2",2===t.enabledColumns&&!t.nzInDatePicker)("ant-picker-time-panel-column-3",3===t.enabledColumns&&!t.nzInDatePicker)("ant-picker-time-panel-narrow",t.enabledColumns<3)("ant-picker-time-panel-placement-bottomLeft",!t.nzInDatePicker)},inputs:{nzInDatePicker:"nzInDatePicker",nzHideDisabledOptions:"nzHideDisabledOptions",nzUse12Hours:"nzUse12Hours",nzAllowEmpty:"nzAllowEmpty",nzDisabledHours:"nzDisabledHours",nzDisabledMinutes:"nzDisabledMinutes",nzDisabledSeconds:"nzDisabledSeconds",format:"format",nzHourStep:"nzHourStep",nzMinuteStep:"nzMinuteStep",nzSecondStep:"nzSecondStep",nzAddOn:"nzAddOn",nzClearText:"nzClearText",nzPlaceHolder:"nzPlaceHolder",nzDefaultOpenValue:"nzDefaultOpenValue"},outputs:{closePanel:"closePanel"},exportAs:["nzTimePickerPanel"],features:[c.Cb([{provide:l.l,useExisting:e,multi:!0}]),c.Bb],decls:7,vars:6,consts:[["class","ant-picker-header",4,"ngIf"],[1,"ant-picker-content"],["class","ant-picker-time-panel-column","style","position: relative;",4,"ngIf"],["class","ant-picker-footer",4,"ngIf"],[1,"ant-picker-header"],[1,"ant-picker-header-view"],[1,"ant-picker-time-panel-column",2,"position","relative"],["hourListElement",""],[4,"ngFor","ngForOf"],["class","ant-picker-time-panel-cell",3,"ant-picker-time-panel-cell-selected","ant-picker-time-panel-cell-disabled","click",4,"ngIf"],[1,"ant-picker-time-panel-cell",3,"click"],[1,"ant-picker-time-panel-cell-inner"],["minuteListElement",""],["secondListElement",""],["use12HoursListElement",""],["class","ant-picker-time-panel-cell",3,"ant-picker-time-panel-cell-selected","click",4,"ngIf"],[1,"ant-picker-footer"],["class","ant-picker-footer-extra",4,"ngIf"],[1,"ant-picker-ranges"],[1,"ant-picker-now"],[3,"click"],[1,"ant-picker-footer-extra"],[3,"ngTemplateOutlet"]],template:function(e,t){1&e&&(c.Rc(0,E,3,1,"div",0),c.ac(1,"div",1),c.Rc(2,M,3,1,"ul",2),c.Rc(3,I,3,1,"ul",2),c.Rc(4,R,3,1,"ul",2),c.Rc(5,Z,3,1,"ul",2),c.Zb(),c.Rc(6,L,7,4,"div",3)),2&e&&(c.vc("ngIf",t.nzInDatePicker),c.Db(2),c.vc("ngIf",t.hourEnabled),c.Db(1),c.vc("ngIf",t.minuteEnabled),c.Db(1),c.vc("ngIf",t.secondEnabled),c.Db(1),c.vc("ngIf",t.nzUse12Hours),c.Db(1),c.vc("ngIf",!t.nzInDatePicker))},directives:[d.n,d.m,d.s],pipes:[d.f,p.c],encapsulation:2,changeDetection:0}),Object(i.b)([Object(r.a)(),Object(i.c)("design:type",Object)],e.prototype,"nzUse12Hours",void 0),e})(),Y=(()=>{class e{}return e.\u0275mod=c.Rb({type:e}),e.\u0275inj=c.Qb({factory:function(t){return new(t||e)},imports:[[d.c,l.i,p.b,s.g,m.b,b.f,h.a]]}),e})()}}]);