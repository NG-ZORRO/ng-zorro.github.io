"use strict";(self.webpackChunkng_zorro_antd_doc=self.webpackChunkng_zorro_antd_doc||[]).push([[1695],{1695:(ge,N,r)=>{r.d(N,{Iv:()=>y,m4:()=>_e,wY:()=>me});var u=r(655),k=r(8184),t=r(4650),p=r(4006),C=r(8929),A=r(3753),P=r(1086),z=r(7625),I=r(5778),F=r(7168),D=r(4850),f=r(900),w=r(1532),c=r(2661),R=r(1431),a=r(9218),_=r(309),U=r(3353),H=r(445),g=r(7360),h=r(6895),S=r(8751),E=r(9975),x=r(5250),v=r(9412),B=r(316),M=r(3616),V=r(488);const L=["hourListElement"],Z=["minuteListElement"],Y=["secondListElement"],K=["use12HoursListElement"];function J(i,o){if(1&i&&(t.TgZ(0,"div",4)(1,"div",5),t._uU(2),t.qZA()()),2&i){const e=t.oxw();t.xp6(2),t.Oqu(e.dateHelper.format(null==e.time?null:e.time.value,e.format)||"\xa0")}}function Q(i,o){if(1&i){const e=t.EpF();t.TgZ(0,"li",10),t.NdJ("click",function(){t.CHM(e);const s=t.oxw().$implicit,l=t.oxw(2);return t.KtG(l.selectHour(s))}),t.TgZ(1,"div",11),t._uU(2),t.ALo(3,"number"),t.qZA()()}if(2&i){const e=t.oxw().$implicit,n=t.oxw(2);t.ekj("ant-picker-time-panel-cell-selected",n.isSelectedHour(e))("ant-picker-time-panel-cell-disabled",e.disabled),t.xp6(2),t.Oqu(t.xi3(3,5,e.index,"2.0-0"))}}function W(i,o){if(1&i&&(t.ynx(0),t.YNc(1,Q,4,8,"li",9),t.BQk()),2&i){const e=o.$implicit,n=t.oxw(2);t.xp6(1),t.Q6J("ngIf",!(n.nzHideDisabledOptions&&e.disabled))}}function X(i,o){if(1&i&&(t.TgZ(0,"ul",6,7),t.YNc(2,W,2,1,"ng-container",8),t.qZA()),2&i){const e=t.oxw();t.xp6(2),t.Q6J("ngForOf",e.hourRange)("ngForTrackBy",e.trackByFn)}}function $(i,o){if(1&i){const e=t.EpF();t.TgZ(0,"li",10),t.NdJ("click",function(){t.CHM(e);const s=t.oxw().$implicit,l=t.oxw(2);return t.KtG(l.selectMinute(s))}),t.TgZ(1,"div",11),t._uU(2),t.ALo(3,"number"),t.qZA()()}if(2&i){const e=t.oxw().$implicit,n=t.oxw(2);t.ekj("ant-picker-time-panel-cell-selected",n.isSelectedMinute(e))("ant-picker-time-panel-cell-disabled",e.disabled),t.xp6(2),t.Oqu(t.xi3(3,5,e.index,"2.0-0"))}}function G(i,o){if(1&i&&(t.ynx(0),t.YNc(1,$,4,8,"li",9),t.BQk()),2&i){const e=o.$implicit,n=t.oxw(2);t.xp6(1),t.Q6J("ngIf",!(n.nzHideDisabledOptions&&e.disabled))}}function j(i,o){if(1&i&&(t.TgZ(0,"ul",6,12),t.YNc(2,G,2,1,"ng-container",8),t.qZA()),2&i){const e=t.oxw();t.xp6(2),t.Q6J("ngForOf",e.minuteRange)("ngForTrackBy",e.trackByFn)}}function q(i,o){if(1&i){const e=t.EpF();t.TgZ(0,"li",10),t.NdJ("click",function(){t.CHM(e);const s=t.oxw().$implicit,l=t.oxw(2);return t.KtG(l.selectSecond(s))}),t.TgZ(1,"div",11),t._uU(2),t.ALo(3,"number"),t.qZA()()}if(2&i){const e=t.oxw().$implicit,n=t.oxw(2);t.ekj("ant-picker-time-panel-cell-selected",n.isSelectedSecond(e))("ant-picker-time-panel-cell-disabled",e.disabled),t.xp6(2),t.Oqu(t.xi3(3,5,e.index,"2.0-0"))}}function ee(i,o){if(1&i&&(t.ynx(0),t.YNc(1,q,4,8,"li",9),t.BQk()),2&i){const e=o.$implicit,n=t.oxw(2);t.xp6(1),t.Q6J("ngIf",!(n.nzHideDisabledOptions&&e.disabled))}}function te(i,o){if(1&i&&(t.TgZ(0,"ul",6,13),t.YNc(2,ee,2,1,"ng-container",8),t.qZA()),2&i){const e=t.oxw();t.xp6(2),t.Q6J("ngForOf",e.secondRange)("ngForTrackBy",e.trackByFn)}}function ne(i,o){if(1&i){const e=t.EpF();t.ynx(0),t.TgZ(1,"li",10),t.NdJ("click",function(){const l=t.CHM(e).$implicit,d=t.oxw(2);return t.KtG(d.select12Hours(l))}),t.TgZ(2,"div",11),t._uU(3),t.qZA()(),t.BQk()}if(2&i){const e=o.$implicit,n=t.oxw(2);t.xp6(1),t.ekj("ant-picker-time-panel-cell-selected",n.isSelected12Hours(e)),t.xp6(2),t.Oqu(e.value)}}function ie(i,o){if(1&i&&(t.TgZ(0,"ul",6,14),t.YNc(2,ne,4,3,"ng-container",15),t.qZA()),2&i){const e=t.oxw();t.xp6(2),t.Q6J("ngForOf",e.use12HoursRange)}}function se(i,o){}function oe(i,o){if(1&i&&(t.TgZ(0,"div",23),t.YNc(1,se,0,0,"ng-template",24),t.qZA()),2&i){const e=t.oxw(2);t.xp6(1),t.Q6J("ngTemplateOutlet",e.nzAddOn)}}function le(i,o){if(1&i){const e=t.EpF();t.TgZ(0,"div",16),t.YNc(1,oe,2,1,"div",17),t.TgZ(2,"ul",18)(3,"li",19)(4,"a",20),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.onClickNow())}),t._uU(5),t.ALo(6,"nzI18n"),t.qZA()(),t.TgZ(7,"li",21)(8,"button",22),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.onClickOk())}),t._uU(9),t.ALo(10,"nzI18n"),t.qZA()()()()}if(2&i){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.nzAddOn),t.xp6(4),t.hij(" ",e.nzNowText||t.lcZ(6,3,"Calendar.lang.now")," "),t.xp6(4),t.hij(" ",e.nzOkText||t.lcZ(10,5,"Calendar.lang.ok")," ")}}const re=["inputElement"];function ae(i,o){if(1&i&&(t.ynx(0),t._UZ(1,"span",8),t.BQk()),2&i){const e=o.$implicit;t.xp6(1),t.Q6J("nzType",e)}}function ue(i,o){if(1&i&&t._UZ(0,"nz-form-item-feedback-icon",9),2&i){const e=t.oxw();t.Q6J("status",e.status)}}function ce(i,o){if(1&i){const e=t.EpF();t.TgZ(0,"span",10),t.NdJ("click",function(s){t.CHM(e);const l=t.oxw();return t.KtG(l.onClickClearBtn(s))}),t._UZ(1,"span",11),t.qZA()}if(2&i){const e=t.oxw();t.xp6(1),t.uIk("aria-label",e.nzClearText)("title",e.nzClearText)}}function de(i,o){if(1&i){const e=t.EpF();t.TgZ(0,"div",12)(1,"div",13)(2,"div",14)(3,"nz-time-picker-panel",15),t.NdJ("ngModelChange",function(s){t.CHM(e);const l=t.oxw();return t.KtG(l.value=s)})("ngModelChange",function(s){t.CHM(e);const l=t.oxw();return t.KtG(l.onPanelValueChange(s))})("closePanel",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.setCurrentValueAndClose())}),t.ALo(4,"async"),t.qZA()()()()}if(2&i){const e=t.oxw();t.Q6J("@slideMotion","enter"),t.xp6(3),t.Q6J("ngClass",e.nzPopupClassName)("format",e.nzFormat)("nzHourStep",e.nzHourStep)("nzMinuteStep",e.nzMinuteStep)("nzSecondStep",e.nzSecondStep)("nzDisabledHours",e.nzDisabledHours)("nzDisabledMinutes",e.nzDisabledMinutes)("nzDisabledSeconds",e.nzDisabledSeconds)("nzPlaceHolder",e.nzPlaceHolder||t.lcZ(4,19,e.i18nPlaceHolder$))("nzHideDisabledOptions",e.nzHideDisabledOptions)("nzUse12Hours",e.nzUse12Hours)("nzDefaultOpenValue",e.nzDefaultOpenValue)("nzAddOn",e.nzAddOn)("nzClearText",e.nzClearText)("nzNowText",e.nzNowText)("nzOkText",e.nzOkText)("nzAllowEmpty",e.nzAllowEmpty)("ngModel",e.value)}}class he{constructor(){this.selected12Hours=void 0,this._use12Hours=!1,this._changes=new C.xQ}setMinutes(o,e){return e||(this.initValue(),this.value.setMinutes(o),this.update()),this}setHours(o,e){return e||(this.initValue(),this.value.setHours(this._use12Hours?"PM"===this.selected12Hours&&12!==o?o+12:"AM"===this.selected12Hours&&12===o?0:o:o),this.update()),this}setSeconds(o,e){return e||(this.initValue(),this.value.setSeconds(o),this.update()),this}setUse12Hours(o){return this._use12Hours=o,this}get changes(){return this._changes.asObservable()}setValue(o,e){return(0,a.DX)(e)&&(this._use12Hours=e),o!==this.value&&(this._value=o,(0,a.DX)(this.value)?this._use12Hours&&(0,a.DX)(this.hours)&&(this.selected12Hours=this.hours>=12?"PM":"AM"):this._clear()),this}initValue(){(0,a.kK)(this.value)&&this.setValue(new Date,this._use12Hours)}clear(){this._clear(),this.update()}get isEmpty(){return!((0,a.DX)(this.hours)||(0,a.DX)(this.minutes)||(0,a.DX)(this.seconds))}_clear(){this._value=void 0,this.selected12Hours=void 0}update(){this.isEmpty?this._value=void 0:((0,a.DX)(this.hours)&&this.value.setHours(this.hours),(0,a.DX)(this.minutes)&&this.value.setMinutes(this.minutes),(0,a.DX)(this.seconds)&&this.value.setSeconds(this.seconds),this._use12Hours&&("PM"===this.selected12Hours&&this.hours<12&&this.value.setHours(this.hours+12),"AM"===this.selected12Hours&&this.hours>=12&&this.value.setHours(this.hours-12))),this.changed()}changed(){this._changes.next(this.value)}get viewHours(){return this._use12Hours&&(0,a.DX)(this.hours)?this.calculateViewHour(this.hours):this.hours}setSelected12Hours(o){o.toUpperCase()!==this.selected12Hours&&(this.selected12Hours=o.toUpperCase(),this.update())}get value(){return this._value||this._defaultOpenValue}get hours(){return this.value?.getHours()}get minutes(){return this.value?.getMinutes()}get seconds(){return this.value?.getSeconds()}setDefaultOpenValue(o){return this._defaultOpenValue=o,this}calculateViewHour(o){const e=this.selected12Hours;return"PM"===e&&o>12?o-12:"AM"===e&&0===o?12:o}}function O(i,o=1,e=0){return new Array(Math.ceil(i/o)).fill(0).map((n,s)=>(s+e)*o)}let y=(()=>{class i{constructor(e,n,s,l){this.ngZone=e,this.cdr=n,this.dateHelper=s,this.elementRef=l,this._nzHourStep=1,this._nzMinuteStep=1,this._nzSecondStep=1,this.unsubscribe$=new C.xQ,this._format="HH:mm:ss",this._disabledHours=()=>[],this._disabledMinutes=()=>[],this._disabledSeconds=()=>[],this._allowEmpty=!0,this.time=new he,this.hourEnabled=!0,this.minuteEnabled=!0,this.secondEnabled=!0,this.firstScrolled=!1,this.enabledColumns=3,this.nzInDatePicker=!1,this.nzHideDisabledOptions=!1,this.nzUse12Hours=!1,this.closePanel=new t.vpe}set nzAllowEmpty(e){(0,a.DX)(e)&&(this._allowEmpty=e)}get nzAllowEmpty(){return this._allowEmpty}set nzDisabledHours(e){this._disabledHours=e,this._disabledHours&&this.buildHours()}get nzDisabledHours(){return this._disabledHours}set nzDisabledMinutes(e){(0,a.DX)(e)&&(this._disabledMinutes=e,this.buildMinutes())}get nzDisabledMinutes(){return this._disabledMinutes}set nzDisabledSeconds(e){(0,a.DX)(e)&&(this._disabledSeconds=e,this.buildSeconds())}get nzDisabledSeconds(){return this._disabledSeconds}set format(e){if((0,a.DX)(e)){this._format=e,this.enabledColumns=0;const n=new Set(e);this.hourEnabled=n.has("H")||n.has("h"),this.minuteEnabled=n.has("m"),this.secondEnabled=n.has("s"),this.hourEnabled&&this.enabledColumns++,this.minuteEnabled&&this.enabledColumns++,this.secondEnabled&&this.enabledColumns++,this.nzUse12Hours&&this.build12Hours()}}get format(){return this._format}set nzHourStep(e){(0,a.DX)(e)&&(this._nzHourStep=e,this.buildHours())}get nzHourStep(){return this._nzHourStep}set nzMinuteStep(e){(0,a.DX)(e)&&(this._nzMinuteStep=e,this.buildMinutes())}get nzMinuteStep(){return this._nzMinuteStep}set nzSecondStep(e){(0,a.DX)(e)&&(this._nzSecondStep=e,this.buildSeconds())}get nzSecondStep(){return this._nzSecondStep}trackByFn(e){return e}buildHours(){let e=24,n=this.nzDisabledHours?.(),s=0;if(this.nzUse12Hours&&(e=12,n&&(n="PM"===this.time.selected12Hours?n.filter(l=>l>=12).map(l=>l>12?l-12:l):n.filter(l=>l<12||24===l).map(l=>24===l||0===l?12:l)),s=1),this.hourRange=O(e,this.nzHourStep,s).map(l=>({index:l,disabled:!!n&&-1!==n.indexOf(l)})),this.nzUse12Hours&&12===this.hourRange[this.hourRange.length-1].index){const l=[...this.hourRange];l.unshift(l[l.length-1]),l.splice(l.length-1,1),this.hourRange=l}}buildMinutes(){this.minuteRange=O(60,this.nzMinuteStep).map(e=>({index:e,disabled:!!this.nzDisabledMinutes&&-1!==this.nzDisabledMinutes(this.time.hours).indexOf(e)}))}buildSeconds(){this.secondRange=O(60,this.nzSecondStep).map(e=>({index:e,disabled:!!this.nzDisabledSeconds&&-1!==this.nzDisabledSeconds(this.time.hours,this.time.minutes).indexOf(e)}))}build12Hours(){const e=this._format.includes("A");this.use12HoursRange=[{index:0,value:e?"AM":"am"},{index:1,value:e?"PM":"pm"}]}buildTimes(){this.buildHours(),this.buildMinutes(),this.buildSeconds(),this.build12Hours()}scrollToTime(e=0){this.hourEnabled&&this.hourListElement&&this.scrollToSelected(this.hourListElement.nativeElement,this.time.viewHours,e,"hour"),this.minuteEnabled&&this.minuteListElement&&this.scrollToSelected(this.minuteListElement.nativeElement,this.time.minutes,e,"minute"),this.secondEnabled&&this.secondListElement&&this.scrollToSelected(this.secondListElement.nativeElement,this.time.seconds,e,"second"),this.nzUse12Hours&&this.use12HoursListElement&&this.scrollToSelected(this.use12HoursListElement.nativeElement,"AM"===this.time.selected12Hours?0:1,e,"12-hour")}selectHour(e){this.time.setHours(e.index,e.disabled),this._disabledMinutes&&this.buildMinutes(),(this._disabledSeconds||this._disabledMinutes)&&this.buildSeconds()}selectMinute(e){this.time.setMinutes(e.index,e.disabled),this._disabledSeconds&&this.buildSeconds()}selectSecond(e){this.time.setSeconds(e.index,e.disabled)}select12Hours(e){this.time.setSelected12Hours(e.value),this._disabledHours&&this.buildHours(),this._disabledMinutes&&this.buildMinutes(),this._disabledSeconds&&this.buildSeconds()}scrollToSelected(e,n,s=0,l){if(!e)return;const d=this.translateIndex(n,l);this.scrollTo(e,(e.children[d]||e.children[0]).offsetTop,s)}translateIndex(e,n){return"hour"===n?this.calcIndex(this.nzDisabledHours?.(),this.hourRange.map(s=>s.index).indexOf(e)):"minute"===n?this.calcIndex(this.nzDisabledMinutes?.(this.time.hours),this.minuteRange.map(s=>s.index).indexOf(e)):"second"===n?this.calcIndex(this.nzDisabledSeconds?.(this.time.hours,this.time.minutes),this.secondRange.map(s=>s.index).indexOf(e)):this.calcIndex([],this.use12HoursRange.map(s=>s.index).indexOf(e))}scrollTo(e,n,s){if(s<=0)return void(e.scrollTop=n);const d=(n-e.scrollTop)/s*10;this.ngZone.runOutsideAngular(()=>{(0,B.e)(()=>{e.scrollTop=e.scrollTop+d,e.scrollTop!==n&&this.scrollTo(e,n,s-10)})})}calcIndex(e,n){return e?.length&&this.nzHideDisabledOptions?n-e.reduce((s,l)=>s+(l<n?1:0),0):n}changed(){this.onChange&&this.onChange(this.time.value)}touched(){this.onTouch&&this.onTouch()}timeDisabled(e){const n=e.getHours(),s=e.getMinutes(),l=e.getSeconds();return(this.nzDisabledHours?.().indexOf(n)??-1)>-1||(this.nzDisabledMinutes?.(n).indexOf(s)??-1)>-1||(this.nzDisabledSeconds?.(n,s).indexOf(l)??-1)>-1}onClickNow(){const e=new Date;this.timeDisabled(e)||(this.time.setValue(e),this.changed(),this.closePanel.emit())}onClickOk(){this.time.setValue(this.time.value,this.nzUse12Hours),this.changed(),this.closePanel.emit()}isSelectedHour(e){return e.index===this.time.viewHours}isSelectedMinute(e){return e.index===this.time.minutes}isSelectedSecond(e){return e.index===this.time.seconds}isSelected12Hours(e){return e.value.toUpperCase()===this.time.selected12Hours}ngOnInit(){this.time.changes.pipe((0,z.R)(this.unsubscribe$)).subscribe(()=>{this.changed(),this.touched(),this.scrollToTime(120)}),this.buildTimes(),this.ngZone.runOutsideAngular(()=>{setTimeout(()=>{this.scrollToTime(),this.firstScrolled=!0}),(0,A.R)(this.elementRef.nativeElement,"mousedown").pipe((0,z.R)(this.unsubscribe$)).subscribe(e=>{e.preventDefault()})})}ngOnDestroy(){this.unsubscribe$.next(),this.unsubscribe$.complete()}ngOnChanges(e){const{nzUse12Hours:n,nzDefaultOpenValue:s}=e;!n?.previousValue&&n?.currentValue&&(this.build12Hours(),this.enabledColumns++),s?.currentValue&&this.time.setDefaultOpenValue(this.nzDefaultOpenValue||new Date)}writeValue(e){this.time.setValue(e,this.nzUse12Hours),this.buildTimes(),e&&this.firstScrolled&&this.scrollToTime(120),this.cdr.markForCheck()}registerOnChange(e){this.onChange=e}registerOnTouched(e){this.onTouch=e}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(t.R0b),t.Y36(t.sBO),t.Y36(_.mx),t.Y36(t.SBq))},i.\u0275cmp=t.Xpm({type:i,selectors:[["nz-time-picker-panel"]],viewQuery:function(e,n){if(1&e&&(t.Gf(L,5),t.Gf(Z,5),t.Gf(Y,5),t.Gf(K,5)),2&e){let s;t.iGM(s=t.CRH())&&(n.hourListElement=s.first),t.iGM(s=t.CRH())&&(n.minuteListElement=s.first),t.iGM(s=t.CRH())&&(n.secondListElement=s.first),t.iGM(s=t.CRH())&&(n.use12HoursListElement=s.first)}},hostAttrs:[1,"ant-picker-time-panel"],hostVars:12,hostBindings:function(e,n){2&e&&t.ekj("ant-picker-time-panel-column-0",0===n.enabledColumns&&!n.nzInDatePicker)("ant-picker-time-panel-column-1",1===n.enabledColumns&&!n.nzInDatePicker)("ant-picker-time-panel-column-2",2===n.enabledColumns&&!n.nzInDatePicker)("ant-picker-time-panel-column-3",3===n.enabledColumns&&!n.nzInDatePicker)("ant-picker-time-panel-narrow",n.enabledColumns<3)("ant-picker-time-panel-placement-bottomLeft",!n.nzInDatePicker)},inputs:{nzInDatePicker:"nzInDatePicker",nzAddOn:"nzAddOn",nzHideDisabledOptions:"nzHideDisabledOptions",nzClearText:"nzClearText",nzNowText:"nzNowText",nzOkText:"nzOkText",nzPlaceHolder:"nzPlaceHolder",nzUse12Hours:"nzUse12Hours",nzDefaultOpenValue:"nzDefaultOpenValue",nzAllowEmpty:"nzAllowEmpty",nzDisabledHours:"nzDisabledHours",nzDisabledMinutes:"nzDisabledMinutes",nzDisabledSeconds:"nzDisabledSeconds",format:"format",nzHourStep:"nzHourStep",nzMinuteStep:"nzMinuteStep",nzSecondStep:"nzSecondStep"},outputs:{closePanel:"closePanel"},exportAs:["nzTimePickerPanel"],features:[t._Bn([{provide:p.JU,useExisting:i,multi:!0}]),t.TTD],decls:7,vars:6,consts:[["class","ant-picker-header",4,"ngIf"],[1,"ant-picker-content"],["class","ant-picker-time-panel-column","style","position: relative;",4,"ngIf"],["class","ant-picker-footer",4,"ngIf"],[1,"ant-picker-header"],[1,"ant-picker-header-view"],[1,"ant-picker-time-panel-column",2,"position","relative"],["hourListElement",""],[4,"ngFor","ngForOf","ngForTrackBy"],["class","ant-picker-time-panel-cell",3,"ant-picker-time-panel-cell-selected","ant-picker-time-panel-cell-disabled","click",4,"ngIf"],[1,"ant-picker-time-panel-cell",3,"click"],[1,"ant-picker-time-panel-cell-inner"],["minuteListElement",""],["secondListElement",""],["use12HoursListElement",""],[4,"ngFor","ngForOf"],[1,"ant-picker-footer"],["class","ant-picker-footer-extra",4,"ngIf"],[1,"ant-picker-ranges"],[1,"ant-picker-now"],[3,"click"],[1,"ant-picker-ok"],["nz-button","","type","button","nzSize","small","nzType","primary",3,"click"],[1,"ant-picker-footer-extra"],[3,"ngTemplateOutlet"]],template:function(e,n){1&e&&(t.YNc(0,J,3,1,"div",0),t.TgZ(1,"div",1),t.YNc(2,X,3,2,"ul",2),t.YNc(3,j,3,2,"ul",2),t.YNc(4,te,3,2,"ul",2),t.YNc(5,ie,3,1,"ul",2),t.qZA(),t.YNc(6,le,11,7,"div",3)),2&e&&(t.Q6J("ngIf",n.nzInDatePicker),t.xp6(2),t.Q6J("ngIf",n.hourEnabled),t.xp6(1),t.Q6J("ngIf",n.minuteEnabled),t.xp6(1),t.Q6J("ngIf",n.secondEnabled),t.xp6(1),t.Q6J("ngIf",n.nzUse12Hours),t.xp6(1),t.Q6J("ngIf",!n.nzInDatePicker))},dependencies:[h.sg,h.O5,h.tP,M.ix,v.w,V.dQ,h.JJ,_.o9],encapsulation:2,changeDetection:0}),(0,u.gn)([(0,a.yF)()],i.prototype,"nzUse12Hours",void 0),i})(),_e=(()=>{class i{constructor(e,n,s,l,d,m,b,T,ze,fe){this.nzConfigService=e,this.i18n=n,this.element=s,this.renderer=l,this.cdr=d,this.dateHelper=m,this.platform=b,this.directionality=T,this.nzFormStatusService=ze,this.nzFormNoStatusService=fe,this._nzModuleName="timePicker",this.destroy$=new C.xQ,this.isNzDisableFirstChange=!0,this.isInit=!1,this.focused=!1,this.inputValue="",this.value=null,this.preValue=null,this.i18nPlaceHolder$=(0,P.of)(void 0),this.overlayPositions=[{offsetY:3,originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{offsetY:-3,originX:"start",originY:"top",overlayX:"start",overlayY:"bottom"},{offsetY:3,originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"},{offsetY:-3,originX:"end",originY:"top",overlayX:"end",overlayY:"bottom"}],this.dir="ltr",this.prefixCls="ant-picker",this.statusCls={},this.status="",this.hasFeedback=!1,this.nzId=null,this.nzSize=null,this.nzStatus="",this.nzHourStep=1,this.nzMinuteStep=1,this.nzSecondStep=1,this.nzClearText="clear",this.nzNowText="",this.nzOkText="",this.nzPopupClassName="",this.nzPlaceHolder="",this.nzFormat="HH:mm:ss",this.nzOpen=!1,this.nzUse12Hours=!1,this.nzSuffixIcon="clock-circle",this.nzOpenChange=new t.vpe,this.nzHideDisabledOptions=!1,this.nzAllowEmpty=!0,this.nzDisabled=!1,this.nzAutoFocus=!1,this.nzBackdrop=!1,this.nzBorderless=!1,this.nzInputReadOnly=!1}emitValue(e){this.setValue(e,!0),this._onChange&&this._onChange(this.value),this._onTouched&&this._onTouched()}setValue(e,n=!1){n&&(this.preValue=(0,f.Z)(e)?new Date(e):null),this.value=(0,f.Z)(e)?new Date(e):null,this.inputValue=this.dateHelper.format(e,this.nzFormat),this.cdr.markForCheck()}open(){this.nzDisabled||this.nzOpen||(this.focus(),this.nzOpen=!0,this.nzOpenChange.emit(this.nzOpen))}close(){this.nzOpen=!1,this.cdr.markForCheck(),this.nzOpenChange.emit(this.nzOpen)}updateAutoFocus(){this.isInit&&!this.nzDisabled&&(this.nzAutoFocus?this.renderer.setAttribute(this.inputRef.nativeElement,"autofocus","autofocus"):this.renderer.removeAttribute(this.inputRef.nativeElement,"autofocus"))}onClickClearBtn(e){e.stopPropagation(),this.emitValue(null)}onClickOutside(e){this.element.nativeElement.contains(e.target)||this.setCurrentValueAndClose()}onFocus(e){this.focused=e,e||(this.checkTimeValid(this.value)?this.setCurrentValueAndClose():(this.setValue(this.preValue),this.close()))}focus(){this.inputRef.nativeElement&&this.inputRef.nativeElement.focus()}blur(){this.inputRef.nativeElement&&this.inputRef.nativeElement.blur()}onKeyupEsc(){this.setValue(this.preValue)}onKeyupEnter(){this.nzOpen&&(0,f.Z)(this.value)?this.setCurrentValueAndClose():this.nzOpen||this.open()}onInputChange(e){!this.platform.TRIDENT&&document.activeElement===this.inputRef.nativeElement&&(this.open(),this.parseTimeString(e))}onPanelValueChange(e){this.setValue(e),this.focus()}setCurrentValueAndClose(){this.emitValue(this.value),this.close()}ngOnInit(){this.nzFormStatusService?.formStatusChanges.pipe((0,I.x)((e,n)=>e.status===n.status&&e.hasFeedback===n.hasFeedback),(0,F.M)(this.nzFormNoStatusService?this.nzFormNoStatusService.noFormStatus:(0,P.of)(!1)),(0,D.U)(([{status:e,hasFeedback:n},s])=>({status:s?"":e,hasFeedback:n})),(0,z.R)(this.destroy$)).subscribe(({status:e,hasFeedback:n})=>{this.setStatusStyles(e,n)}),this.inputSize=Math.max(8,this.nzFormat.length)+2,this.origin=new k.xu(this.element),this.i18nPlaceHolder$=this.i18n.localeChange.pipe((0,D.U)(e=>e.TimePicker.placeholder)),this.dir=this.directionality.value,this.directionality.change?.pipe((0,z.R)(this.destroy$)).subscribe(e=>{this.dir=e})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}ngOnChanges(e){const{nzUse12Hours:n,nzFormat:s,nzDisabled:l,nzAutoFocus:d,nzStatus:m}=e;if(n&&!n.previousValue&&n.currentValue&&!s&&(this.nzFormat="h:mm:ss a"),l){const T=this.inputRef.nativeElement;l.currentValue?this.renderer.setAttribute(T,"disabled",""):this.renderer.removeAttribute(T,"disabled")}d&&this.updateAutoFocus(),m&&this.setStatusStyles(this.nzStatus,this.hasFeedback)}parseTimeString(e){const n=this.dateHelper.parseTime(e,this.nzFormat)||null;(0,f.Z)(n)&&(this.value=n,this.cdr.markForCheck())}ngAfterViewInit(){this.isInit=!0,this.updateAutoFocus()}writeValue(e){let n;e instanceof Date?n=e:(0,a.kK)(e)?n=null:((0,R.ZK)('Non-Date type is not recommended for time-picker, use "Date" type.'),n=new Date(e)),this.setValue(n,!0)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.nzDisabled=this.isNzDisableFirstChange&&this.nzDisabled||e,this.isNzDisableFirstChange=!1,this.cdr.markForCheck()}checkTimeValid(e){if(!e)return!0;const n=this.nzDisabledHours?.(),s=this.nzDisabledMinutes?.(e.getHours()),l=this.nzDisabledSeconds?.(e.getHours(),e.getMinutes());return!(n?.includes(e.getHours())||s?.includes(e.getMinutes())||l?.includes(e.getSeconds()))}setStatusStyles(e,n){this.status=e,this.hasFeedback=n,this.cdr.markForCheck(),this.statusCls=(0,a.Zu)(this.prefixCls,e,n),Object.keys(this.statusCls).forEach(s=>{this.statusCls[s]?this.renderer.addClass(this.element.nativeElement,s):this.renderer.removeClass(this.element.nativeElement,s)})}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(c.jY),t.Y36(_.wi),t.Y36(t.SBq),t.Y36(t.Qsj),t.Y36(t.sBO),t.Y36(_.mx),t.Y36(U.t4),t.Y36(H.Is,8),t.Y36(g.kH,8),t.Y36(g.yW,8))},i.\u0275cmp=t.Xpm({type:i,selectors:[["nz-time-picker"]],viewQuery:function(e,n){if(1&e&&t.Gf(re,7),2&e){let s;t.iGM(s=t.CRH())&&(n.inputRef=s.first)}},hostAttrs:[1,"ant-picker"],hostVars:12,hostBindings:function(e,n){1&e&&t.NdJ("click",function(){return n.open()}),2&e&&t.ekj("ant-picker-large","large"===n.nzSize)("ant-picker-small","small"===n.nzSize)("ant-picker-disabled",n.nzDisabled)("ant-picker-focused",n.focused)("ant-picker-rtl","rtl"===n.dir)("ant-picker-borderless",n.nzBorderless)},inputs:{nzId:"nzId",nzSize:"nzSize",nzStatus:"nzStatus",nzHourStep:"nzHourStep",nzMinuteStep:"nzMinuteStep",nzSecondStep:"nzSecondStep",nzClearText:"nzClearText",nzNowText:"nzNowText",nzOkText:"nzOkText",nzPopupClassName:"nzPopupClassName",nzPlaceHolder:"nzPlaceHolder",nzAddOn:"nzAddOn",nzDefaultOpenValue:"nzDefaultOpenValue",nzDisabledHours:"nzDisabledHours",nzDisabledMinutes:"nzDisabledMinutes",nzDisabledSeconds:"nzDisabledSeconds",nzFormat:"nzFormat",nzOpen:"nzOpen",nzUse12Hours:"nzUse12Hours",nzSuffixIcon:"nzSuffixIcon",nzHideDisabledOptions:"nzHideDisabledOptions",nzAllowEmpty:"nzAllowEmpty",nzDisabled:"nzDisabled",nzAutoFocus:"nzAutoFocus",nzBackdrop:"nzBackdrop",nzBorderless:"nzBorderless",nzInputReadOnly:"nzInputReadOnly"},outputs:{nzOpenChange:"nzOpenChange"},exportAs:["nzTimePicker"],features:[t._Bn([{provide:p.JU,useExisting:i,multi:!0}]),t.TTD],decls:9,vars:16,consts:[[1,"ant-picker-input"],["type","text","autocomplete","off",3,"size","placeholder","ngModel","disabled","readOnly","ngModelChange","focus","blur","keyup.enter","keyup.escape"],["inputElement",""],[1,"ant-picker-suffix"],[4,"nzStringTemplateOutlet"],[3,"status",4,"ngIf"],["class","ant-picker-clear",3,"click",4,"ngIf"],["cdkConnectedOverlay","","nzConnectedOverlay","",3,"cdkConnectedOverlayHasBackdrop","cdkConnectedOverlayPositions","cdkConnectedOverlayOrigin","cdkConnectedOverlayOpen","cdkConnectedOverlayTransformOriginOn","detach","overlayOutsideClick"],["nz-icon","",3,"nzType"],[3,"status"],[1,"ant-picker-clear",3,"click"],["nz-icon","","nzType","close-circle","nzTheme","fill"],[1,"ant-picker-dropdown",2,"position","relative"],[1,"ant-picker-panel-container"],["tabindex","-1",1,"ant-picker-panel"],[3,"ngClass","format","nzHourStep","nzMinuteStep","nzSecondStep","nzDisabledHours","nzDisabledMinutes","nzDisabledSeconds","nzPlaceHolder","nzHideDisabledOptions","nzUse12Hours","nzDefaultOpenValue","nzAddOn","nzClearText","nzNowText","nzOkText","nzAllowEmpty","ngModel","ngModelChange","closePanel"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"input",1,2),t.NdJ("ngModelChange",function(l){return n.inputValue=l})("focus",function(){return n.onFocus(!0)})("blur",function(){return n.onFocus(!1)})("keyup.enter",function(){return n.onKeyupEnter()})("keyup.escape",function(){return n.onKeyupEsc()})("ngModelChange",function(l){return n.onInputChange(l)}),t.ALo(3,"async"),t.qZA(),t.TgZ(4,"span",3),t.YNc(5,ae,2,1,"ng-container",4),t.YNc(6,ue,1,1,"nz-form-item-feedback-icon",5),t.qZA(),t.YNc(7,ce,2,2,"span",6),t.qZA(),t.YNc(8,de,5,21,"ng-template",7),t.NdJ("detach",function(){return n.close()})("overlayOutsideClick",function(l){return n.onClickOutside(l)})),2&e&&(t.xp6(1),t.Q6J("size",n.inputSize)("placeholder",n.nzPlaceHolder||t.lcZ(3,14,n.i18nPlaceHolder$))("ngModel",n.inputValue)("disabled",n.nzDisabled)("readOnly",n.nzInputReadOnly),t.uIk("id",n.nzId),t.xp6(4),t.Q6J("nzStringTemplateOutlet",n.nzSuffixIcon),t.xp6(1),t.Q6J("ngIf",n.hasFeedback&&!!n.status),t.xp6(1),t.Q6J("ngIf",n.nzAllowEmpty&&!n.nzDisabled&&n.value),t.xp6(1),t.Q6J("cdkConnectedOverlayHasBackdrop",n.nzBackdrop)("cdkConnectedOverlayPositions",n.overlayPositions)("cdkConnectedOverlayOrigin",n.origin)("cdkConnectedOverlayOpen",n.nzOpen)("cdkConnectedOverlayTransformOriginOn",".ant-picker-dropdown"))},dependencies:[h.mk,h.O5,p.Fj,p.JJ,p.On,k.pI,S.Ls,E.hQ,x.f,v.w,g.w_,y,h.Ov],encapsulation:2,data:{animation:[w.mF]},changeDetection:0}),(0,u.gn)([(0,c.oS)()],i.prototype,"nzHourStep",void 0),(0,u.gn)([(0,c.oS)()],i.prototype,"nzMinuteStep",void 0),(0,u.gn)([(0,c.oS)()],i.prototype,"nzSecondStep",void 0),(0,u.gn)([(0,c.oS)()],i.prototype,"nzClearText",void 0),(0,u.gn)([(0,c.oS)()],i.prototype,"nzNowText",void 0),(0,u.gn)([(0,c.oS)()],i.prototype,"nzOkText",void 0),(0,u.gn)([(0,c.oS)()],i.prototype,"nzPopupClassName",void 0),(0,u.gn)([(0,c.oS)()],i.prototype,"nzFormat",void 0),(0,u.gn)([(0,c.oS)(),(0,a.yF)()],i.prototype,"nzUse12Hours",void 0),(0,u.gn)([(0,c.oS)()],i.prototype,"nzSuffixIcon",void 0),(0,u.gn)([(0,a.yF)()],i.prototype,"nzHideDisabledOptions",void 0),(0,u.gn)([(0,c.oS)(),(0,a.yF)()],i.prototype,"nzAllowEmpty",void 0),(0,u.gn)([(0,a.yF)()],i.prototype,"nzDisabled",void 0),(0,u.gn)([(0,a.yF)()],i.prototype,"nzAutoFocus",void 0),(0,u.gn)([(0,c.oS)()],i.prototype,"nzBackdrop",void 0),(0,u.gn)([(0,a.yF)()],i.prototype,"nzBorderless",void 0),(0,u.gn)([(0,a.yF)()],i.prototype,"nzInputReadOnly",void 0),i})(),me=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[H.vT,h.ez,p.u5,_.YI,k.U8,S.PV,E.e4,x.T,M.sL,g.mJ]}),i})()}}]);