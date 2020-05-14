exports.ids = ["calendar-index-module~date-picker-index-module~drawer-index-module~form-index-module~input-index-mod~3a4f451d"];
exports.modules = {

/***/ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-time-picker.js":
/*!********************************************************************!*\
  !*** ./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-time-picker.js ***!
  \********************************************************************/
/*! exports provided: NzTimePickerComponent, NzTimePickerModule, NzTimePickerPanelComponent, NzTimeValueAccessorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzTimePickerComponent", function() { return NzTimePickerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzTimePickerModule", function() { return NzTimePickerModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzTimePickerPanelComponent", function() { return NzTimePickerPanelComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzTimeValueAccessorDirective", function() { return NzTimeValueAccessorDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/overlay.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ng_zorro_antd_core_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/animation */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-animation.js");
/* harmony import */ var ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/core/config */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-config.js");
/* harmony import */ var ng_zorro_antd_core_logger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/core/logger */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-logger.js");
/* harmony import */ var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/core/util */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-util.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/core/outlet */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-outlet.js");
/* harmony import */ var ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/core/overlay */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-overlay.js");
/* harmony import */ var ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/i18n */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-i18n.js");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/icon */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-icon.js");
/* harmony import */ var ng_zorro_antd_core_polyfill__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/core/polyfill */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-polyfill.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");

















/**
 * @fileoverview added by tsickle
 * Generated from: time-picker.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */










const _c0 = ["inputElement"];
function NzTimePickerComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const suffixIcon_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzType", suffixIcon_r4);
} }
function NzTimePickerComponent_span_6_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NzTimePickerComponent_span_6_Template_span_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r5.onClickClearBtn($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-label", ctx_r2.nzClearText)("title", ctx_r2.nzClearText);
} }
function NzTimePickerComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "nz-time-picker-panel", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function NzTimePickerComponent_ng_template_7_Template_nz_time_picker_panel_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r7.value = $event; })("ngModelChange", function NzTimePickerComponent_ng_template_7_Template_nz_time_picker_panel_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r9.setValue($event); })("closePanel", function NzTimePickerComponent_ng_template_7_Template_nz_time_picker_panel_closePanel_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r10.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "nzI18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@slideMotion", "bottom");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r3.nzPopupClassName)("format", ctx_r3.nzFormat)("nzHourStep", ctx_r3.nzHourStep)("nzMinuteStep", ctx_r3.nzMinuteStep)("nzSecondStep", ctx_r3.nzSecondStep)("nzDisabledHours", ctx_r3.nzDisabledHours)("nzDisabledMinutes", ctx_r3.nzDisabledMinutes)("nzDisabledSeconds", ctx_r3.nzDisabledSeconds)("nzPlaceHolder", ctx_r3.nzPlaceHolder || _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 17, "TimePicker.placeholder"))("nzHideDisabledOptions", ctx_r3.nzHideDisabledOptions)("nzUse12Hours", ctx_r3.nzUse12Hours)("nzDefaultOpenValue", ctx_r3.nzDefaultOpenValue)("nzAddOn", ctx_r3.nzAddOn)("nzClearText", ctx_r3.nzClearText)("nzAllowEmpty", ctx_r3.nzAllowEmpty)("ngModel", ctx_r3.value);
} }
const _c1 = ["hourListElement"];
const _c2 = ["minuteListElement"];
const _c3 = ["secondListElement"];
const _c4 = ["use12HoursListElement"];
function NzTimePickerPanelComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.dateHelper.format(ctx_r0.time == null ? null : ctx_r0.time.value, ctx_r0.format) || "\u00A0");
} }
function NzTimePickerPanelComponent_ul_2_ng_container_2_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NzTimePickerPanelComponent_ul_2_ng_container_2_li_1_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12); const hour_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r10.selectHour(hour_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const hour_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("ant-picker-time-panel-cell-selected", ctx_r9.isSelectedHour(hour_r8))("ant-picker-time-panel-cell-disabled", hour_r8.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](3, 5, hour_r8.index, "2.0-0"));
} }
function NzTimePickerPanelComponent_ul_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzTimePickerPanelComponent_ul_2_ng_container_2_li_1_Template, 4, 8, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const hour_r8 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !(ctx_r7.nzHideDisabledOptions && hour_r8.disabled));
} }
function NzTimePickerPanelComponent_ul_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ul", 6, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NzTimePickerPanelComponent_ul_2_ng_container_2_Template, 2, 1, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.hourRange);
} }
function NzTimePickerPanelComponent_ul_3_ng_container_2_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NzTimePickerPanelComponent_ul_3_ng_container_2_li_1_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r20); const minute_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r18.selectMinute(minute_r16); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const minute_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("ant-picker-time-panel-cell-selected", ctx_r17.isSelectedMinute(minute_r16))("ant-picker-time-panel-cell-disabled", minute_r16.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](3, 5, minute_r16.index, "2.0-0"));
} }
function NzTimePickerPanelComponent_ul_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzTimePickerPanelComponent_ul_3_ng_container_2_li_1_Template, 4, 8, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const minute_r16 = ctx.$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !(ctx_r15.nzHideDisabledOptions && minute_r16.disabled));
} }
function NzTimePickerPanelComponent_ul_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ul", 6, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NzTimePickerPanelComponent_ul_3_ng_container_2_Template, 2, 1, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.minuteRange);
} }
function NzTimePickerPanelComponent_ul_4_ng_container_2_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NzTimePickerPanelComponent_ul_4_ng_container_2_li_1_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r28); const second_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r26.selectSecond(second_r24); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const second_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("ant-picker-time-panel-cell-selected", ctx_r25.isSelectedSecond(second_r24))("ant-picker-time-panel-cell-disabled", second_r24.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](3, 5, second_r24.index, "2.0-0"));
} }
function NzTimePickerPanelComponent_ul_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzTimePickerPanelComponent_ul_4_ng_container_2_li_1_Template, 4, 8, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const second_r24 = ctx.$implicit;
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !(ctx_r23.nzHideDisabledOptions && second_r24.disabled));
} }
function NzTimePickerPanelComponent_ul_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ul", 6, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NzTimePickerPanelComponent_ul_4_ng_container_2_Template, 2, 1, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r3.secondRange);
} }
function NzTimePickerPanelComponent_ul_5_ng_container_2_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NzTimePickerPanelComponent_ul_5_ng_container_2_li_1_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r36); const range_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r34.select12Hours(range_r32); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const range_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("ant-picker-time-panel-cell-selected", ctx_r33.isSelected12Hours(range_r32));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](range_r32.value);
} }
function NzTimePickerPanelComponent_ul_5_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzTimePickerPanelComponent_ul_5_ng_container_2_li_1_Template, 3, 3, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r31.nzHideDisabledOptions);
} }
function NzTimePickerPanelComponent_ul_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ul", 6, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NzTimePickerPanelComponent_ul_5_ng_container_2_Template, 2, 1, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r4.use12HoursRange);
} }
function NzTimePickerPanelComponent_div_6_div_1_ng_template_1_Template(rf, ctx) { }
function NzTimePickerPanelComponent_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzTimePickerPanelComponent_div_6_div_1_ng_template_1_Template, 0, 0, "ng-template", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", ctx_r38.nzAddOn);
} }
function NzTimePickerPanelComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzTimePickerPanelComponent_div_6_div_1_Template, 2, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ul", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NzTimePickerPanelComponent_div_6_Template_a_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r41); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r40.onClickNow(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "nzI18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r5.nzAddOn);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](6, 2, "Calendar.now"), " ");
} }
const NZ_CONFIG_COMPONENT_NAME = 'timePicker';
class NzTimePickerComponent {
    /**
     * @param {?} nzConfigService
     * @param {?} element
     * @param {?} renderer
     * @param {?} cdr
     */
    constructor(nzConfigService, element, renderer, cdr) {
        this.nzConfigService = nzConfigService;
        this.element = element;
        this.renderer = renderer;
        this.cdr = cdr;
        this.isInit = false;
        this.focused = false;
        this.value = null;
        this.overlayPositions = [
            {
                originX: 'start',
                originY: 'bottom',
                overlayX: 'start',
                overlayY: 'top',
                offsetX: 0,
                offsetY: 3
            }
        ];
        this.nzSize = null;
        this.nzHourStep = 1;
        this.nzMinuteStep = 1;
        this.nzSecondStep = 1;
        this.nzClearText = 'clear';
        this.nzPopupClassName = '';
        this.nzPlaceHolder = '';
        this.nzFormat = 'HH:mm:ss';
        this.nzOpen = false;
        this.nzUse12Hours = false;
        this.nzSuffixIcon = 'clock-circle';
        this.nzOpenChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.nzHideDisabledOptions = false;
        this.nzAllowEmpty = true;
        this.nzDisabled = false;
        this.nzAutoFocus = false;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setValue(value) {
        this.value = value ? new Date(value) : null;
        if (this._onChange) {
            this._onChange(this.value);
        }
        if (this._onTouched) {
            this._onTouched();
        }
    }
    /**
     * @return {?}
     */
    open() {
        if (this.nzDisabled) {
            return;
        }
        this.focus();
        this.nzOpen = true;
        this.nzOpenChange.emit(this.nzOpen);
    }
    /**
     * @return {?}
     */
    close() {
        this.nzOpen = false;
        this.cdr.markForCheck();
        this.nzOpenChange.emit(this.nzOpen);
    }
    /**
     * @return {?}
     */
    updateAutoFocus() {
        if (this.isInit && !this.nzDisabled) {
            if (this.nzAutoFocus) {
                this.renderer.setAttribute(this.inputRef.nativeElement, 'autofocus', 'autofocus');
            }
            else {
                this.renderer.removeAttribute(this.inputRef.nativeElement, 'autofocus');
            }
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onClickClearBtn(event) {
        event.stopPropagation();
        this.setValue(null);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onFocus(value) {
        this.focused = value;
    }
    /**
     * @return {?}
     */
    focus() {
        if (this.inputRef.nativeElement) {
            this.inputRef.nativeElement.focus();
        }
    }
    /**
     * @return {?}
     */
    blur() {
        if (this.inputRef.nativeElement) {
            this.inputRef.nativeElement.blur();
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.inputSize = Math.max(8, this.nzFormat.length) + 2;
        this.origin = new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["CdkOverlayOrigin"](this.element);
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        const { nzUse12Hours, nzFormat, nzDisabled, nzAutoFocus } = changes;
        if (nzUse12Hours && !nzUse12Hours.previousValue && nzUse12Hours.currentValue && !nzFormat) {
            this.nzFormat = 'h:mm:ss a';
        }
        if (nzDisabled) {
            /** @type {?} */
            const value = nzDisabled.currentValue;
            /** @type {?} */
            const input = (/** @type {?} */ (this.inputRef.nativeElement));
            if (value) {
                this.renderer.setAttribute(input, 'disabled', '');
            }
            else {
                this.renderer.removeAttribute(input, 'disabled');
            }
        }
        if (nzAutoFocus) {
            this.updateAutoFocus();
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.isInit = true;
        this.updateAutoFocus();
    }
    /**
     * @param {?} time
     * @return {?}
     */
    writeValue(time) {
        if (time instanceof Date) {
            this.value = time;
        }
        else if (Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_7__["isNil"])(time)) {
            this.value = null;
        }
        else {
            Object(ng_zorro_antd_core_logger__WEBPACK_IMPORTED_MODULE_6__["warn"])('Non-Date type is not recommended for time-picker, use "Date" type.');
            this.value = new Date(time);
        }
        this.cdr.markForCheck();
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this._onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this._onTouched = fn;
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.nzDisabled = isDisabled;
        this.cdr.markForCheck();
    }
}
NzTimePickerComponent.ɵfac = function NzTimePickerComponent_Factory(t) { return new (t || NzTimePickerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_5__["NzConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"])); };
NzTimePickerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NzTimePickerComponent, selectors: [["nz-time-picker"]], viewQuery: function NzTimePickerComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.inputRef = _t.first);
    } }, hostVars: 10, hostBindings: function NzTimePickerComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NzTimePickerComponent_click_HostBindingHandler() { return ctx.open(); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("ant-picker", true)("ant-picker-large", ctx.nzSize === "large")("ant-picker-small", ctx.nzSize === "small")("ant-picker-disabled", ctx.nzDisabled)("ant-picker-focused", ctx.focused);
    } }, inputs: { nzSize: "nzSize", nzHourStep: "nzHourStep", nzMinuteStep: "nzMinuteStep", nzSecondStep: "nzSecondStep", nzClearText: "nzClearText", nzPopupClassName: "nzPopupClassName", nzPlaceHolder: "nzPlaceHolder", nzFormat: "nzFormat", nzOpen: "nzOpen", nzUse12Hours: "nzUse12Hours", nzSuffixIcon: "nzSuffixIcon", nzHideDisabledOptions: "nzHideDisabledOptions", nzAllowEmpty: "nzAllowEmpty", nzDisabled: "nzDisabled", nzAutoFocus: "nzAutoFocus", nzAddOn: "nzAddOn", nzDefaultOpenValue: "nzDefaultOpenValue", nzDisabledHours: "nzDisabledHours", nzDisabledMinutes: "nzDisabledMinutes", nzDisabledSeconds: "nzDisabledSeconds" }, outputs: { nzOpenChange: "nzOpenChange" }, exportAs: ["nzTimePicker"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"], useExisting: NzTimePickerComponent, multi: true }]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]], decls: 8, vars: 13, consts: [[1, "ant-picker-input"], ["type", "text", 3, "size", "nzTime", "placeholder", "ngModel", "disabled", "ngModelChange", "focus", "blur"], ["inputElement", ""], [1, "ant-picker-suffix"], [4, "nzStringTemplateOutlet"], ["class", "ant-picker-clear", 3, "click", 4, "ngIf"], ["cdkConnectedOverlay", "", "nzConnectedOverlay", "", "cdkConnectedOverlayHasBackdrop", "", 3, "cdkConnectedOverlayPositions", "cdkConnectedOverlayOrigin", "cdkConnectedOverlayOpen", "cdkConnectedOverlayOffsetY", "detach", "backdropClick"], ["nz-icon", "", 3, "nzType"], [1, "ant-picker-clear", 3, "click"], ["nz-icon", "", "nzType", "close-circle", "nzTheme", "fill"], [1, "ant-picker-dropdown"], [1, "ant-picker-panel-container"], ["tabindex", "-1", 1, "ant-picker-panel"], [3, "ngClass", "format", "nzHourStep", "nzMinuteStep", "nzSecondStep", "nzDisabledHours", "nzDisabledMinutes", "nzDisabledSeconds", "nzPlaceHolder", "nzHideDisabledOptions", "nzUse12Hours", "nzDefaultOpenValue", "nzAddOn", "nzClearText", "nzAllowEmpty", "ngModel", "ngModelChange", "closePanel"]], template: function NzTimePickerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "input", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function NzTimePickerComponent_Template_input_ngModelChange_1_listener($event) { return ctx.value = $event; })("focus", function NzTimePickerComponent_Template_input_focus_1_listener() { return ctx.onFocus(true); })("blur", function NzTimePickerComponent_Template_input_blur_1_listener() { return ctx.onFocus(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "nzI18n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, NzTimePickerComponent_ng_container_5_Template, 2, 1, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, NzTimePickerComponent_span_6_Template, 2, 2, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, NzTimePickerComponent_ng_template_7_Template, 5, 19, "ng-template", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("detach", function NzTimePickerComponent_Template_ng_template_detach_7_listener() { return ctx.close(); })("backdropClick", function NzTimePickerComponent_Template_ng_template_backdropClick_7_listener() { return ctx.close(); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("size", ctx.inputSize)("nzTime", ctx.nzFormat)("placeholder", ctx.nzPlaceHolder || _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 11, "TimePicker.placeholder"))("ngModel", ctx.value)("disabled", ctx.nzDisabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzStringTemplateOutlet", ctx.nzSuffixIcon);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.nzAllowEmpty && ctx.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("cdkConnectedOverlayPositions", ctx.overlayPositions)("cdkConnectedOverlayOrigin", ctx.origin)("cdkConnectedOverlayOpen", ctx.nzOpen)("cdkConnectedOverlayOffsetY", 0 - 2);
    } }, directives: function () { return [NzTimeValueAccessorDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_9__["NzStringTemplateOutletDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["CdkConnectedOverlay"], ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_10__["NzConnectedOverlayDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_12__["NzIconDirective"], NzTimePickerPanelComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"]]; }, pipes: function () { return [ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_11__["NzI18nPipe"]]; }, encapsulation: 2, data: { animation: [ng_zorro_antd_core_animation__WEBPACK_IMPORTED_MODULE_4__["slideMotion"]] }, changeDetection: 0 });
/** @nocollapse */
NzTimePickerComponent.ctorParameters = () => [
    { type: ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_5__["NzConfigService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] }
];
NzTimePickerComponent.propDecorators = {
    inputRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['inputElement', { static: true },] }],
    nzSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzHourStep: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzMinuteStep: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzSecondStep: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzClearText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzPopupClassName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzPlaceHolder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzAddOn: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzDefaultOpenValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzDisabledHours: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzDisabledMinutes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzDisabledSeconds: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzFormat: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzUse12Hours: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzSuffixIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzOpenChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
    nzHideDisabledOptions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzAllowEmpty: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzAutoFocus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_5__["WithConfig"])(NZ_CONFIG_COMPONENT_NAME),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], NzTimePickerComponent.prototype, "nzHourStep", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_5__["WithConfig"])(NZ_CONFIG_COMPONENT_NAME),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], NzTimePickerComponent.prototype, "nzMinuteStep", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_5__["WithConfig"])(NZ_CONFIG_COMPONENT_NAME),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], NzTimePickerComponent.prototype, "nzSecondStep", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_5__["WithConfig"])(NZ_CONFIG_COMPONENT_NAME),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], NzTimePickerComponent.prototype, "nzClearText", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_5__["WithConfig"])(NZ_CONFIG_COMPONENT_NAME),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], NzTimePickerComponent.prototype, "nzPopupClassName", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_5__["WithConfig"])(NZ_CONFIG_COMPONENT_NAME),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], NzTimePickerComponent.prototype, "nzFormat", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_5__["WithConfig"])(NZ_CONFIG_COMPONENT_NAME), Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_7__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], NzTimePickerComponent.prototype, "nzUse12Hours", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_5__["WithConfig"])(NZ_CONFIG_COMPONENT_NAME),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], NzTimePickerComponent.prototype, "nzSuffixIcon", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_7__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], NzTimePickerComponent.prototype, "nzHideDisabledOptions", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_5__["WithConfig"])(NZ_CONFIG_COMPONENT_NAME), Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_7__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], NzTimePickerComponent.prototype, "nzAllowEmpty", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_7__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], NzTimePickerComponent.prototype, "nzDisabled", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_7__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], NzTimePickerComponent.prototype, "nzAutoFocus", void 0);
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: time-holder.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TimeHolder {
    constructor() {
        this.selected12Hours = undefined;
        this._use12Hours = false;
        this._changes = new rxjs__WEBPACK_IMPORTED_MODULE_14__["Subject"]();
    }
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} value
     * @param {?} disabled
     * @return {THIS}
     */
    setMinutes(value, disabled) {
        if (value !== (/** @type {?} */ (this)).minutes && !disabled) {
            (/** @type {?} */ (this)).initValue();
            (/** @type {?} */ (this)).value.setMinutes(value);
            (/** @type {?} */ (this)).update();
        }
        return (/** @type {?} */ (this));
    }
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} value
     * @param {?} disabled
     * @return {THIS}
     */
    setHours(value, disabled) {
        if (value !== (/** @type {?} */ (this)).hours && !disabled) {
            (/** @type {?} */ (this)).initValue();
            if ((/** @type {?} */ (this))._use12Hours) {
                if ((/** @type {?} */ (this)).selected12Hours === 'PM' && value !== 12) {
                    (/** @type {?} */ (this)).value.setHours(((/** @type {?} */ (value))) + 12);
                }
                else if ((/** @type {?} */ (this)).selected12Hours === 'AM' && value === 12) {
                    (/** @type {?} */ (this)).value.setHours(0);
                }
                else {
                    (/** @type {?} */ (this)).value.setHours(value);
                }
            }
            else {
                (/** @type {?} */ (this)).value.setHours(value);
            }
            (/** @type {?} */ (this)).update();
        }
        return (/** @type {?} */ (this));
    }
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} value
     * @param {?} disabled
     * @return {THIS}
     */
    setSeconds(value, disabled) {
        if (value !== (/** @type {?} */ (this)).seconds && !disabled) {
            (/** @type {?} */ (this)).initValue();
            (/** @type {?} */ (this)).value.setSeconds(value);
            (/** @type {?} */ (this)).update();
        }
        return (/** @type {?} */ (this));
    }
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} value
     * @return {THIS}
     */
    setUse12Hours(value) {
        (/** @type {?} */ (this))._use12Hours = value;
        return (/** @type {?} */ (this));
    }
    /**
     * @return {?}
     */
    get changes() {
        return this._changes.asObservable();
    }
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} value
     * @param {?=} use12Hours
     * @return {THIS}
     */
    setValue(value, use12Hours) {
        if (Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_7__["isNotNil"])(use12Hours)) {
            (/** @type {?} */ (this))._use12Hours = (/** @type {?} */ (use12Hours));
        }
        if (value !== (/** @type {?} */ (this)).value) {
            (/** @type {?} */ (this))._value = value;
            if (Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_7__["isNotNil"])((/** @type {?} */ (this)).value)) {
                if ((/** @type {?} */ (this))._use12Hours && Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_7__["isNotNil"])((/** @type {?} */ (this)).hours)) {
                    (/** @type {?} */ (this)).selected12Hours = (/** @type {?} */ (this)).hours >= 12 ? 'PM' : 'AM';
                }
            }
            else {
                (/** @type {?} */ (this))._clear();
            }
        }
        return (/** @type {?} */ (this));
    }
    /**
     * @return {?}
     */
    initValue() {
        if (Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_7__["isNil"])(this.value)) {
            this.setValue(new Date(), this._use12Hours);
        }
    }
    /**
     * @return {?}
     */
    clear() {
        this._clear();
        this.update();
    }
    /**
     * @return {?}
     */
    get isEmpty() {
        return !(Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_7__["isNotNil"])(this.hours) || Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_7__["isNotNil"])(this.minutes) || Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_7__["isNotNil"])(this.seconds));
    }
    /**
     * @private
     * @return {?}
     */
    _clear() {
        this._value = undefined;
        this.selected12Hours = undefined;
    }
    /**
     * @private
     * @return {?}
     */
    update() {
        if (this.isEmpty) {
            this._value = undefined;
        }
        else {
            if (Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_7__["isNotNil"])(this.hours)) {
                (/** @type {?} */ (this.value)).setHours((/** @type {?} */ (this.hours)));
            }
            if (Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_7__["isNotNil"])(this.minutes)) {
                (/** @type {?} */ (this.value)).setMinutes((/** @type {?} */ (this.minutes)));
            }
            if (Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_7__["isNotNil"])(this.seconds)) {
                (/** @type {?} */ (this.value)).setSeconds((/** @type {?} */ (this.seconds)));
            }
            if (this._use12Hours) {
                if (this.selected12Hours === 'PM' && (/** @type {?} */ (this.hours)) < 12) {
                    (/** @type {?} */ (this.value)).setHours((/** @type {?} */ (this.hours)) + 12);
                }
                if (this.selected12Hours === 'AM' && (/** @type {?} */ (this.hours)) >= 12) {
                    (/** @type {?} */ (this.value)).setHours((/** @type {?} */ (this.hours)) - 12);
                }
            }
        }
        this.changed();
    }
    /**
     * @return {?}
     */
    changed() {
        this._changes.next(this.value);
    }
    /**
     * \@description
     * UI view hours
     * Get viewHours which is selected in `time-picker-panel` and its range is [12, 1, 2, ..., 11]
     * @return {?}
     */
    get viewHours() {
        return this._use12Hours && Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_7__["isNotNil"])(this.hours) ? this.calculateViewHour((/** @type {?} */ (this.hours))) : this.hours;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setSelected12Hours(value) {
        if ((/** @type {?} */ (value)).toUpperCase() !== this.selected12Hours) {
            this.selected12Hours = (/** @type {?} */ (value)).toUpperCase();
            this.update();
        }
    }
    /**
     * @return {?}
     */
    get value() {
        return this._value || this._defaultOpenValue;
    }
    /**
     * @return {?}
     */
    get hours() {
        var _a;
        return (_a = this.value) === null || _a === void 0 ? void 0 : _a.getHours();
    }
    /**
     * @return {?}
     */
    get minutes() {
        var _a;
        return (_a = this.value) === null || _a === void 0 ? void 0 : _a.getMinutes();
    }
    /**
     * @return {?}
     */
    get seconds() {
        var _a;
        return (_a = this.value) === null || _a === void 0 ? void 0 : _a.getSeconds();
    }
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} value
     * @return {THIS}
     */
    setDefaultOpenValue(value) {
        (/** @type {?} */ (this))._defaultOpenValue = value;
        return (/** @type {?} */ (this));
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    calculateViewHour(value) {
        /** @type {?} */
        const selected12Hours = this.selected12Hours;
        if (selected12Hours === 'PM' && value > 12) {
            return value - 12;
        }
        if (selected12Hours === 'AM' && value === 0) {
            return 12;
        }
        return value;
    }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: time-value-accessor.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzTimeValueAccessorDirective {
    /**
     * @param {?} dateHelper
     * @param {?} elementRef
     */
    constructor(dateHelper, elementRef) {
        this.dateHelper = dateHelper;
        this.elementRef = elementRef;
    }
    /**
     * @return {?}
     */
    keyup() {
        this.changed();
    }
    /**
     * @return {?}
     */
    blur() {
        this.touched();
    }
    /**
     * @return {?}
     */
    changed() {
        if (this._onChange) {
            /** @type {?} */
            const value = this.dateHelper.parseTime(this.elementRef.nativeElement.value, this.nzTime);
            this._onChange((/** @type {?} */ (value)));
        }
    }
    /**
     * @return {?}
     */
    touched() {
        if (this._onTouch) {
            this._onTouch();
        }
    }
    /**
     * @return {?}
     */
    setRange() {
        this.elementRef.nativeElement.focus();
        this.elementRef.nativeElement.setSelectionRange(0, this.elementRef.nativeElement.value.length);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.elementRef.nativeElement.value = this.dateHelper.format(value, (/** @type {?} */ (this.nzTime)));
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this._onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this._onTouch = fn;
    }
}
NzTimeValueAccessorDirective.ɵfac = function NzTimeValueAccessorDirective_Factory(t) { return new (t || NzTimeValueAccessorDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_11__["DateHelperService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"])); };
NzTimeValueAccessorDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: NzTimeValueAccessorDirective, selectors: [["input", "nzTime", ""]], hostBindings: function NzTimeValueAccessorDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keyup", function NzTimeValueAccessorDirective_keyup_HostBindingHandler() { return ctx.keyup(); })("blur", function NzTimeValueAccessorDirective_blur_HostBindingHandler() { return ctx.blur(); });
    } }, inputs: { nzTime: "nzTime" }, exportAs: ["nzTime"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"], useExisting: NzTimeValueAccessorDirective, multi: true }])] });
/** @nocollapse */
NzTimeValueAccessorDirective.ctorParameters = () => [
    { type: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_11__["DateHelperService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }
];
NzTimeValueAccessorDirective.propDecorators = {
    nzTime: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    keyup: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"], args: ['keyup',] }],
    blur: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"], args: ['blur',] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: time-picker-panel.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} length
 * @param {?=} step
 * @param {?=} start
 * @return {?}
 */
function makeRange(length, step = 1, start = 0) {
    return new Array(Math.ceil(length / step)).fill(0).map((/**
     * @param {?} _
     * @param {?} i
     * @return {?}
     */
    (_, i) => (i + start) * step));
}
class NzTimePickerPanelComponent {
    /**
     * @param {?} cdr
     * @param {?} dateHelper
     */
    constructor(cdr, dateHelper) {
        this.cdr = cdr;
        this.dateHelper = dateHelper;
        this._nzHourStep = 1;
        this._nzMinuteStep = 1;
        this._nzSecondStep = 1;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_14__["Subject"]();
        this._format = 'HH:mm:ss';
        this._disabledHours = (/**
         * @return {?}
         */
        () => []);
        this._disabledMinutes = (/**
         * @return {?}
         */
        () => []);
        this._disabledSeconds = (/**
         * @return {?}
         */
        () => []);
        this._allowEmpty = true;
        this.time = new TimeHolder();
        this.hourEnabled = true;
        this.minuteEnabled = true;
        this.secondEnabled = true;
        this.firstScrolled = false;
        this.enabledColumns = 3;
        this.nzInDatePicker = false; // If inside a date-picker, more diff works need to be done
        this.nzHideDisabledOptions = false;
        this.nzUse12Hours = false;
        this.closePanel = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzAllowEmpty(value) {
        if (Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_7__["isNotNil"])(value)) {
            this._allowEmpty = value;
        }
    }
    /**
     * @return {?}
     */
    get nzAllowEmpty() {
        return this._allowEmpty;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzDisabledHours(value) {
        this._disabledHours = value;
        if (!!this._disabledHours) {
            this.buildHours();
        }
    }
    /**
     * @return {?}
     */
    get nzDisabledHours() {
        return this._disabledHours;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzDisabledMinutes(value) {
        if (Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_7__["isNotNil"])(value)) {
            this._disabledMinutes = value;
            this.buildMinutes();
        }
    }
    /**
     * @return {?}
     */
    get nzDisabledMinutes() {
        return this._disabledMinutes;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzDisabledSeconds(value) {
        if (Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_7__["isNotNil"])(value)) {
            this._disabledSeconds = value;
            this.buildSeconds();
        }
    }
    /**
     * @return {?}
     */
    get nzDisabledSeconds() {
        return this._disabledSeconds;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set format(value) {
        if (Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_7__["isNotNil"])(value)) {
            this._format = value;
            this.enabledColumns = 0;
            /** @type {?} */
            const charSet = new Set(value);
            this.hourEnabled = charSet.has('H') || charSet.has('h');
            this.minuteEnabled = charSet.has('m');
            this.secondEnabled = charSet.has('s');
            if (this.hourEnabled) {
                this.enabledColumns++;
            }
            if (this.minuteEnabled) {
                this.enabledColumns++;
            }
            if (this.secondEnabled) {
                this.enabledColumns++;
            }
            if (this.nzUse12Hours) {
                this.build12Hours();
            }
        }
    }
    /**
     * @return {?}
     */
    get format() {
        return this._format;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzHourStep(value) {
        if (Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_7__["isNotNil"])(value)) {
            this._nzHourStep = value;
            this.buildHours();
        }
    }
    /**
     * @return {?}
     */
    get nzHourStep() {
        return this._nzHourStep;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzMinuteStep(value) {
        if (Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_7__["isNotNil"])(value)) {
            this._nzMinuteStep = value;
            this.buildMinutes();
        }
    }
    /**
     * @return {?}
     */
    get nzMinuteStep() {
        return this._nzMinuteStep;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzSecondStep(value) {
        if (Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_7__["isNotNil"])(value)) {
            this._nzSecondStep = value;
            this.buildSeconds();
        }
    }
    /**
     * @return {?}
     */
    get nzSecondStep() {
        return this._nzSecondStep;
    }
    /**
     * @return {?}
     */
    selectInputRange() {
        setTimeout((/**
         * @return {?}
         */
        () => {
            if (this.nzTimeValueAccessorDirective) {
                this.nzTimeValueAccessorDirective.setRange();
            }
        }));
    }
    /**
     * @return {?}
     */
    buildHours() {
        var _a;
        /** @type {?} */
        let hourRanges = 24;
        /** @type {?} */
        let disabledHours = (_a = this.nzDisabledHours) === null || _a === void 0 ? void 0 : _a.call(this);
        /** @type {?} */
        let startIndex = 0;
        if (this.nzUse12Hours) {
            hourRanges = 12;
            if (disabledHours) {
                if (this.time.selected12Hours === 'PM') {
                    /**
                     * Filter and transform hours which greater or equal to 12
                     * [0, 1, 2, ..., 12, 13, 14, 15, ..., 23] => [12, 1, 2, 3, ..., 11]
                     */
                    disabledHours = disabledHours.filter((/**
                     * @param {?} i
                     * @return {?}
                     */
                    i => i >= 12)).map((/**
                     * @param {?} i
                     * @return {?}
                     */
                    i => (i > 12 ? i - 12 : i)));
                }
                else {
                    /**
                     * Filter and transform hours which less than 12
                     * [0, 1, 2,..., 12, 13, 14, 15, ...23] => [12, 1, 2, 3, ..., 11]
                     */
                    disabledHours = disabledHours.filter((/**
                     * @param {?} i
                     * @return {?}
                     */
                    i => i < 12 || i === 24)).map((/**
                     * @param {?} i
                     * @return {?}
                     */
                    i => (i === 24 || i === 0 ? 12 : i)));
                }
            }
            startIndex = 1;
        }
        this.hourRange = makeRange(hourRanges, this.nzHourStep, startIndex).map((/**
         * @param {?} r
         * @return {?}
         */
        r => {
            return {
                index: r,
                disabled: !!disabledHours && disabledHours.indexOf(r) !== -1
            };
        }));
        if (this.nzUse12Hours && this.hourRange[this.hourRange.length - 1].index === 12) {
            /** @type {?} */
            const temp = [...this.hourRange];
            temp.unshift(temp[temp.length - 1]);
            temp.splice(temp.length - 1, 1);
            this.hourRange = temp;
        }
    }
    /**
     * @return {?}
     */
    buildMinutes() {
        this.minuteRange = makeRange(60, this.nzMinuteStep).map((/**
         * @param {?} r
         * @return {?}
         */
        r => {
            return {
                index: r,
                disabled: !!this.nzDisabledMinutes && this.nzDisabledMinutes((/** @type {?} */ (this.time.hours))).indexOf(r) !== -1
            };
        }));
    }
    /**
     * @return {?}
     */
    buildSeconds() {
        this.secondRange = makeRange(60, this.nzSecondStep).map((/**
         * @param {?} r
         * @return {?}
         */
        r => {
            return {
                index: r,
                disabled: !!this.nzDisabledSeconds && this.nzDisabledSeconds((/** @type {?} */ (this.time.hours)), (/** @type {?} */ (this.time.minutes))).indexOf(r) !== -1
            };
        }));
    }
    /**
     * @return {?}
     */
    build12Hours() {
        /** @type {?} */
        const isUpperFormat = this._format.includes('A');
        this.use12HoursRange = [
            {
                index: 0,
                value: isUpperFormat ? 'AM' : 'am'
            },
            {
                index: 1,
                value: isUpperFormat ? 'PM' : 'pm'
            }
        ];
    }
    /**
     * @return {?}
     */
    buildTimes() {
        this.buildHours();
        this.buildMinutes();
        this.buildSeconds();
        this.build12Hours();
    }
    /**
     * @param {?=} delay
     * @return {?}
     */
    scrollToTime(delay = 0) {
        if (this.hourEnabled && this.hourListElement) {
            this.scrollToSelected(this.hourListElement.nativeElement, (/** @type {?} */ (this.time.viewHours)), delay, 'hour');
        }
        if (this.minuteEnabled && this.minuteListElement) {
            this.scrollToSelected(this.minuteListElement.nativeElement, (/** @type {?} */ (this.time.minutes)), delay, 'minute');
        }
        if (this.secondEnabled && this.secondListElement) {
            this.scrollToSelected(this.secondListElement.nativeElement, (/** @type {?} */ (this.time.seconds)), delay, 'second');
        }
        if (this.nzUse12Hours && this.use12HoursListElement) {
            /** @type {?} */
            const selectedHours = this.time.selected12Hours;
            /** @type {?} */
            const index = selectedHours === 'AM' ? 0 : 1;
            this.scrollToSelected(this.use12HoursListElement.nativeElement, index, delay, '12-hour');
        }
    }
    /**
     * @param {?} hour
     * @return {?}
     */
    selectHour(hour) {
        this.time.setHours(hour.index, hour.disabled);
        if (!!this._disabledMinutes) {
            this.buildMinutes();
        }
        if (this._disabledSeconds || this._disabledMinutes) {
            this.buildSeconds();
        }
    }
    /**
     * @param {?} minute
     * @return {?}
     */
    selectMinute(minute) {
        this.time.setMinutes(minute.index, minute.disabled);
        if (!!this._disabledSeconds) {
            this.buildSeconds();
        }
    }
    /**
     * @param {?} second
     * @return {?}
     */
    selectSecond(second) {
        this.time.setSeconds(second.index, second.disabled);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    select12Hours(value) {
        this.time.setSelected12Hours(value.value);
        if (!!this._disabledHours) {
            this.buildHours();
        }
        if (!!this._disabledMinutes) {
            this.buildMinutes();
        }
        if (!!this._disabledSeconds) {
            this.buildSeconds();
        }
    }
    /**
     * @param {?} instance
     * @param {?} index
     * @param {?=} duration
     * @param {?=} unit
     * @return {?}
     */
    scrollToSelected(instance, index, duration = 0, unit) {
        if (!instance) {
            return;
        }
        /** @type {?} */
        const transIndex = this.translateIndex(index, unit);
        /** @type {?} */
        const currentOption = (/** @type {?} */ ((instance.children[transIndex] || instance.children[0])));
        this.scrollTo(instance, currentOption.offsetTop, duration);
    }
    /**
     * @param {?} index
     * @param {?} unit
     * @return {?}
     */
    translateIndex(index, unit) {
        var _a, _b, _c;
        if (unit === 'hour') {
            return this.calcIndex((_a = this.nzDisabledHours) === null || _a === void 0 ? void 0 : _a.call(this), this.hourRange.map((/**
             * @param {?} item
             * @return {?}
             */
            item => item.index)).indexOf(index));
        }
        else if (unit === 'minute') {
            return this.calcIndex((_b = this.nzDisabledMinutes) === null || _b === void 0 ? void 0 : _b.call(this, (/** @type {?} */ (this.time.hours))), this.minuteRange.map((/**
             * @param {?} item
             * @return {?}
             */
            item => item.index)).indexOf(index));
        }
        else if (unit === 'second') {
            // second
            return this.calcIndex((_c = this.nzDisabledSeconds) === null || _c === void 0 ? void 0 : _c.call(this, (/** @type {?} */ (this.time.hours)), (/** @type {?} */ (this.time.minutes))), this.secondRange.map((/**
             * @param {?} item
             * @return {?}
             */
            item => item.index)).indexOf(index));
        }
        else {
            // 12-hour
            return this.calcIndex([], this.use12HoursRange.map((/**
             * @param {?} item
             * @return {?}
             */
            item => item.index)).indexOf(index));
        }
    }
    /**
     * @param {?} element
     * @param {?} to
     * @param {?} duration
     * @return {?}
     */
    scrollTo(element, to, duration) {
        if (duration <= 0) {
            element.scrollTop = to;
            return;
        }
        /** @type {?} */
        const difference = to - element.scrollTop;
        /** @type {?} */
        const perTick = (difference / duration) * 10;
        Object(ng_zorro_antd_core_polyfill__WEBPACK_IMPORTED_MODULE_13__["reqAnimFrame"])((/**
         * @return {?}
         */
        () => {
            element.scrollTop = element.scrollTop + perTick;
            if (element.scrollTop === to) {
                return;
            }
            this.scrollTo(element, to, duration - 10);
        }));
    }
    /**
     * @param {?} array
     * @param {?} index
     * @return {?}
     */
    calcIndex(array, index) {
        if ((array === null || array === void 0 ? void 0 : array.length) && this.nzHideDisabledOptions) {
            return (index -
                array.reduce((/**
                 * @param {?} pre
                 * @param {?} value
                 * @return {?}
                 */
                (pre, value) => {
                    return pre + (value < index ? 1 : 0);
                }), 0));
        }
        else {
            return index;
        }
    }
    /**
     * @protected
     * @return {?}
     */
    changed() {
        if (this.onChange) {
            this.onChange((/** @type {?} */ (this.time.value)));
        }
    }
    /**
     * @protected
     * @return {?}
     */
    touched() {
        if (this.onTouch) {
            this.onTouch();
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    timeDisabled(value) {
        var _a, _b, _c, _d, _e, _f;
        /** @type {?} */
        const hour = value.getHours();
        /** @type {?} */
        const minute = value.getMinutes();
        /** @type {?} */
        const second = value.getSeconds();
        return (((_b = (_a = this.nzDisabledHours) === null || _a === void 0 ? void 0 : _a.call(this).indexOf(hour)) !== null && _b !== void 0 ? _b : -1) > -1) ||
            (((_d = (_c = this.nzDisabledMinutes) === null || _c === void 0 ? void 0 : _c.call(this, hour).indexOf(minute)) !== null && _d !== void 0 ? _d : -1) > -1) ||
            (((_f = (_e = this.nzDisabledSeconds) === null || _e === void 0 ? void 0 : _e.call(this, hour, minute).indexOf(second)) !== null && _f !== void 0 ? _f : -1) > -1);
    }
    /**
     * @return {?}
     */
    onClickNow() {
        /** @type {?} */
        const now = new Date();
        if (this.timeDisabled(now)) {
            return;
        }
        this.time.setValue(now);
        this.changed();
        this.closePanel.emit();
    }
    /**
     * @param {?} hour
     * @return {?}
     */
    isSelectedHour(hour) {
        return hour.index === this.time.viewHours;
    }
    /**
     * @param {?} minute
     * @return {?}
     */
    isSelectedMinute(minute) {
        return minute.index === this.time.minutes;
    }
    /**
     * @param {?} second
     * @return {?}
     */
    isSelectedSecond(second) {
        return second.index === this.time.seconds;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    isSelected12Hours(value) {
        return value.value.toUpperCase() === this.time.selected12Hours;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.time.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["takeUntil"])(this.unsubscribe$)).subscribe((/**
         * @return {?}
         */
        () => {
            this.changed();
            this.touched();
        }));
        this.buildTimes();
        this.selectInputRange();
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.scrollToTime();
            this.firstScrolled = true;
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        const { nzUse12Hours, nzDefaultOpenValue } = changes;
        if (!(nzUse12Hours === null || nzUse12Hours === void 0 ? void 0 : nzUse12Hours.previousValue) && (nzUse12Hours === null || nzUse12Hours === void 0 ? void 0 : nzUse12Hours.currentValue)) {
            this.build12Hours();
            this.enabledColumns++;
        }
        if (nzDefaultOpenValue === null || nzDefaultOpenValue === void 0 ? void 0 : nzDefaultOpenValue.currentValue) {
            this.time.setDefaultOpenValue(this.nzDefaultOpenValue || new Date());
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.time.setValue(value, this.nzUse12Hours);
        this.buildTimes();
        if (value && this.firstScrolled) {
            this.scrollToTime(120);
        }
        // Mark this component to be checked manually with internal properties changing (see: https://github.com/angular/angular/issues/10816)
        this.cdr.markForCheck();
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouch = fn;
    }
}
NzTimePickerPanelComponent.ɵfac = function NzTimePickerPanelComponent_Factory(t) { return new (t || NzTimePickerPanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_11__["DateHelperService"])); };
NzTimePickerPanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NzTimePickerPanelComponent, selectors: [["nz-time-picker-panel"]], viewQuery: function NzTimePickerPanelComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](NzTimeValueAccessorDirective, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c2, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c3, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c4, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.nzTimeValueAccessorDirective = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.hourListElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.minuteListElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.secondListElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.use12HoursListElement = _t.first);
    } }, hostVars: 14, hostBindings: function NzTimePickerPanelComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("ant-picker-time-panel", true)("ant-picker-time-panel-column-0", ctx.enabledColumns === 0 && !ctx.nzInDatePicker)("ant-picker-time-panel-column-1", ctx.enabledColumns === 1 && !ctx.nzInDatePicker)("ant-picker-time-panel-column-2", ctx.enabledColumns === 2 && !ctx.nzInDatePicker)("ant-picker-time-panel-column-3", ctx.enabledColumns === 3 && !ctx.nzInDatePicker)("ant-picker-time-panel-narrow", ctx.enabledColumns < 3)("ant-picker-time-panel-placement-bottomLeft", !ctx.nzInDatePicker);
    } }, inputs: { nzInDatePicker: "nzInDatePicker", nzHideDisabledOptions: "nzHideDisabledOptions", nzUse12Hours: "nzUse12Hours", nzAllowEmpty: "nzAllowEmpty", nzDisabledHours: "nzDisabledHours", nzDisabledMinutes: "nzDisabledMinutes", nzDisabledSeconds: "nzDisabledSeconds", format: "format", nzHourStep: "nzHourStep", nzMinuteStep: "nzMinuteStep", nzSecondStep: "nzSecondStep", nzAddOn: "nzAddOn", nzClearText: "nzClearText", nzPlaceHolder: "nzPlaceHolder", nzDefaultOpenValue: "nzDefaultOpenValue" }, outputs: { closePanel: "closePanel" }, exportAs: ["nzTimePickerPanel"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"], useExisting: NzTimePickerPanelComponent, multi: true }]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]], decls: 7, vars: 6, consts: [["class", "ant-picker-header", 4, "ngIf"], [1, "ant-picker-content"], ["class", "ant-picker-time-panel-column", "style", "position: relative;", 4, "ngIf"], ["class", "ant-picker-footer", 4, "ngIf"], [1, "ant-picker-header"], [1, "ant-picker-header-view"], [1, "ant-picker-time-panel-column", 2, "position", "relative"], ["hourListElement", ""], [4, "ngFor", "ngForOf"], ["class", "ant-picker-time-panel-cell", 3, "ant-picker-time-panel-cell-selected", "ant-picker-time-panel-cell-disabled", "click", 4, "ngIf"], [1, "ant-picker-time-panel-cell", 3, "click"], [1, "ant-picker-time-panel-cell-inner"], ["minuteListElement", ""], ["secondListElement", ""], ["use12HoursListElement", ""], ["class", "ant-picker-time-panel-cell", 3, "ant-picker-time-panel-cell-selected", "click", 4, "ngIf"], [1, "ant-picker-footer"], ["class", "ant-picker-footer-extra", 4, "ngIf"], [1, "ant-picker-ranges"], [1, "ant-picker-now"], [3, "click"], [1, "ant-picker-footer-extra"], [3, "ngTemplateOutlet"]], template: function NzTimePickerPanelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, NzTimePickerPanelComponent_div_0_Template, 3, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NzTimePickerPanelComponent_ul_2_Template, 3, 1, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, NzTimePickerPanelComponent_ul_3_Template, 3, 1, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, NzTimePickerPanelComponent_ul_4_Template, 3, 1, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, NzTimePickerPanelComponent_ul_5_Template, 3, 1, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, NzTimePickerPanelComponent_div_6_Template, 7, 4, "div", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.nzInDatePicker);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.hourEnabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.minuteEnabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.secondEnabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.nzUse12Hours);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.nzInDatePicker);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgTemplateOutlet"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DecimalPipe"], ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_11__["NzI18nPipe"]], encapsulation: 2, changeDetection: 0 });
/** @nocollapse */
NzTimePickerPanelComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
    { type: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_11__["DateHelperService"] }
];
NzTimePickerPanelComponent.propDecorators = {
    nzTimeValueAccessorDirective: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [NzTimeValueAccessorDirective, { static: false },] }],
    hourListElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['hourListElement', { static: false },] }],
    minuteListElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['minuteListElement', { static: false },] }],
    secondListElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['secondListElement', { static: false },] }],
    use12HoursListElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['use12HoursListElement', { static: false },] }],
    nzInDatePicker: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzAddOn: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzHideDisabledOptions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzClearText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzPlaceHolder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzUse12Hours: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzDefaultOpenValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    closePanel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
    nzAllowEmpty: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzDisabledHours: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzDisabledMinutes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzDisabledSeconds: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    format: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzHourStep: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzMinuteStep: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzSecondStep: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_7__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], NzTimePickerPanelComponent.prototype, "nzUse12Hours", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NzTimePickerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
                selector: 'nz-time-picker',
                exportAs: 'nzTimePicker',
                template: `
    <div class="ant-picker-input">
      <input
        #inputElement
        type="text"
        [size]="inputSize"
        [nzTime]="nzFormat"
        [placeholder]="nzPlaceHolder || ('TimePicker.placeholder' | nzI18n)"
        [(ngModel)]="value"
        [disabled]="nzDisabled"
        (focus)="onFocus(true)"
        (blur)="onFocus(false)"
      />
      <span class="ant-picker-suffix">
        <ng-container *nzStringTemplateOutlet="nzSuffixIcon; let suffixIcon">
          <i nz-icon [nzType]="suffixIcon"></i>
        </ng-container>
      </span>
      <span *ngIf="nzAllowEmpty && value" class="ant-picker-clear" (click)="onClickClearBtn($event)">
        <i nz-icon nzType="close-circle" nzTheme="fill" [attr.aria-label]="nzClearText" [attr.title]="nzClearText"></i>
      </span>
    </div>

    <ng-template
      cdkConnectedOverlay
      nzConnectedOverlay
      cdkConnectedOverlayHasBackdrop
      [cdkConnectedOverlayPositions]="overlayPositions"
      [cdkConnectedOverlayOrigin]="origin"
      [cdkConnectedOverlayOpen]="nzOpen"
      [cdkConnectedOverlayOffsetY]="-2"
      (detach)="close()"
      (backdropClick)="close()"
    >
      <div [@slideMotion]="'bottom'" class="ant-picker-dropdown">
        <div class="ant-picker-panel-container">
          <div tabindex="-1" class="ant-picker-panel">
            <nz-time-picker-panel
              [ngClass]="nzPopupClassName"
              [format]="nzFormat"
              [nzHourStep]="nzHourStep"
              [nzMinuteStep]="nzMinuteStep"
              [nzSecondStep]="nzSecondStep"
              [nzDisabledHours]="nzDisabledHours"
              [nzDisabledMinutes]="nzDisabledMinutes"
              [nzDisabledSeconds]="nzDisabledSeconds"
              [nzPlaceHolder]="nzPlaceHolder || ('TimePicker.placeholder' | nzI18n)"
              [nzHideDisabledOptions]="nzHideDisabledOptions"
              [nzUse12Hours]="nzUse12Hours"
              [nzDefaultOpenValue]="nzDefaultOpenValue"
              [nzAddOn]="nzAddOn"
              [nzClearText]="nzClearText"
              [nzAllowEmpty]="nzAllowEmpty"
              [(ngModel)]="value"
              (ngModelChange)="setValue($event)"
              (closePanel)="close()"
            >
            </nz-time-picker-panel>
          </div>
        </div>
      </div>
    </ng-template>
  `,
                host: {
                    '[class.ant-picker]': `true`,
                    '[class.ant-picker-large]': `nzSize === 'large'`,
                    '[class.ant-picker-small]': `nzSize === 'small'`,
                    '[class.ant-picker-disabled]': `nzDisabled`,
                    '[class.ant-picker-focused]': `focused`,
                    '(click)': 'open()'
                },
                animations: [ng_zorro_antd_core_animation__WEBPACK_IMPORTED_MODULE_4__["slideMotion"]],
                providers: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"], useExisting: NzTimePickerComponent, multi: true }]
            }]
    }], function () { return [{ type: ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_5__["NzConfigService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] }]; }, { nzSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzHourStep: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzMinuteStep: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzSecondStep: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzClearText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzPopupClassName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzPlaceHolder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzFormat: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzOpen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzUse12Hours: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzSuffixIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzOpenChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], nzHideDisabledOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzAllowEmpty: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzAutoFocus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], inputRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ['inputElement', { static: true }]
        }], nzAddOn: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzDefaultOpenValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzDisabledHours: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzDisabledMinutes: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzDisabledSeconds: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NzTimeValueAccessorDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
        args: [{
                selector: 'input[nzTime]',
                exportAs: 'nzTime',
                providers: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"], useExisting: NzTimeValueAccessorDirective, multi: true }]
            }]
    }], function () { return [{ type: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_11__["DateHelperService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }]; }, { keyup: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
            args: ['keyup']
        }], blur: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
            args: ['blur']
        }], nzTime: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NzTimePickerPanelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
                selector: 'nz-time-picker-panel',
                exportAs: 'nzTimePickerPanel',
                template: `
    <div *ngIf="nzInDatePicker" class="ant-picker-header">
      <div class="ant-picker-header-view">{{ dateHelper.format($any(time?.value), format) || '&nbsp;' }}</div>
    </div>
    <div class="ant-picker-content">
      <ul *ngIf="hourEnabled" #hourListElement class="ant-picker-time-panel-column" style="position: relative;">
        <ng-container *ngFor="let hour of hourRange">
          <li
            *ngIf="!(nzHideDisabledOptions && hour.disabled)"
            class="ant-picker-time-panel-cell"
            (click)="selectHour(hour)"
            [class.ant-picker-time-panel-cell-selected]="isSelectedHour(hour)"
            [class.ant-picker-time-panel-cell-disabled]="hour.disabled"
          >
            <div class="ant-picker-time-panel-cell-inner">{{ hour.index | number: '2.0-0' }}</div>
          </li>
        </ng-container>
      </ul>
      <ul *ngIf="minuteEnabled" #minuteListElement class="ant-picker-time-panel-column" style="position: relative;">
        <ng-container *ngFor="let minute of minuteRange">
          <li
            *ngIf="!(nzHideDisabledOptions && minute.disabled)"
            class="ant-picker-time-panel-cell"
            (click)="selectMinute(minute)"
            [class.ant-picker-time-panel-cell-selected]="isSelectedMinute(minute)"
            [class.ant-picker-time-panel-cell-disabled]="minute.disabled"
          >
            <div class="ant-picker-time-panel-cell-inner">{{ minute.index | number: '2.0-0' }}</div>
          </li>
        </ng-container>
      </ul>
      <ul *ngIf="secondEnabled" #secondListElement class="ant-picker-time-panel-column" style="position: relative;">
        <ng-container *ngFor="let second of secondRange">
          <li
            *ngIf="!(nzHideDisabledOptions && second.disabled)"
            class="ant-picker-time-panel-cell"
            (click)="selectSecond(second)"
            [class.ant-picker-time-panel-cell-selected]="isSelectedSecond(second)"
            [class.ant-picker-time-panel-cell-disabled]="second.disabled"
          >
            <div class="ant-picker-time-panel-cell-inner">{{ second.index | number: '2.0-0' }}</div>
          </li>
        </ng-container>
      </ul>
      <ul *ngIf="nzUse12Hours" #use12HoursListElement class="ant-picker-time-panel-column" style="position: relative;">
        <ng-container *ngFor="let range of use12HoursRange">
          <li
            *ngIf="!nzHideDisabledOptions"
            (click)="select12Hours(range)"
            class="ant-picker-time-panel-cell"
            [class.ant-picker-time-panel-cell-selected]="isSelected12Hours(range)"
          >
            <div class="ant-picker-time-panel-cell-inner">{{ range.value }}</div>
          </li>
        </ng-container>
      </ul>
    </div>
    <div *ngIf="!nzInDatePicker" class="ant-picker-footer">
      <div *ngIf="nzAddOn" class="ant-picker-footer-extra">
        <ng-template [ngTemplateOutlet]="nzAddOn"></ng-template>
      </div>
      <ul class="ant-picker-ranges">
        <li class="ant-picker-now">
          <a (click)="onClickNow()">
            {{ 'Calendar.now' | nzI18n }}
          </a>
        </li>
      </ul>
    </div>
  `,
                host: {
                    '[class.ant-picker-time-panel]': `true`,
                    '[class.ant-picker-time-panel-column-0]': `enabledColumns === 0 && !nzInDatePicker`,
                    '[class.ant-picker-time-panel-column-1]': `enabledColumns === 1 && !nzInDatePicker`,
                    '[class.ant-picker-time-panel-column-2]': `enabledColumns === 2 && !nzInDatePicker`,
                    '[class.ant-picker-time-panel-column-3]': `enabledColumns === 3 && !nzInDatePicker`,
                    '[class.ant-picker-time-panel-narrow]': `enabledColumns < 3`,
                    '[class.ant-picker-time-panel-placement-bottomLeft]': `!nzInDatePicker`
                },
                providers: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"], useExisting: NzTimePickerPanelComponent, multi: true }]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] }, { type: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_11__["DateHelperService"] }]; }, { nzInDatePicker: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzHideDisabledOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzUse12Hours: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], closePanel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], nzAllowEmpty: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzDisabledHours: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzDisabledMinutes: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzDisabledSeconds: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], format: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzHourStep: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzMinuteStep: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzSecondStep: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzTimeValueAccessorDirective: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: [NzTimeValueAccessorDirective, { static: false }]
        }], hourListElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ['hourListElement', { static: false }]
        }], minuteListElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ['minuteListElement', { static: false }]
        }], secondListElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ['secondListElement', { static: false }]
        }], use12HoursListElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ['use12HoursListElement', { static: false }]
        }], nzAddOn: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzClearText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzPlaceHolder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzDefaultOpenValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: time-picker.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzTimePickerModule {
}
NzTimePickerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: NzTimePickerModule });
NzTimePickerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function NzTimePickerModule_Factory(t) { return new (t || NzTimePickerModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_11__["NzI18nModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["OverlayModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_12__["NzIconModule"], ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_10__["NzOverlayModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_9__["NzOutletModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](NzTimePickerModule, { declarations: function () { return [NzTimePickerComponent,
        NzTimePickerPanelComponent,
        NzTimeValueAccessorDirective]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_11__["NzI18nModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["OverlayModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_12__["NzIconModule"], ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_10__["NzOverlayModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_9__["NzOutletModule"]]; }, exports: function () { return [NzTimePickerPanelComponent,
        NzTimePickerComponent]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NzTimePickerModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [NzTimePickerComponent, NzTimePickerPanelComponent, NzTimeValueAccessorDirective],
                exports: [NzTimePickerPanelComponent, NzTimePickerComponent],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_11__["NzI18nModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["OverlayModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_12__["NzIconModule"], ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_10__["NzOverlayModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_9__["NzOutletModule"]]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ng-zorro-antd-time-picker.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ng-zorro-antd-time-picker.js.map

/***/ })

};;
//# sourceMappingURL=calendar-index-module~date-picker-index-module~drawer-index-module~form-index-module~input-index-mod~3a4f451d.js.map