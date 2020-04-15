exports.ids = ["cascader-index-module~code-editor-index-module~empty-index-module~input-index-module~space-index-module"];
exports.modules = {

/***/ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-cascader.js":
/*!*****************************************************************!*\
  !*** ./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-cascader.js ***!
  \*****************************************************************/
/*! exports provided: NzCascaderComponent, NzCascaderModule, NzCascaderOptionComponent, NzCascaderService, isChildOption, isParentOption, isShowSearchObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzCascaderComponent", function() { return NzCascaderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzCascaderModule", function() { return NzCascaderModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzCascaderOptionComponent", function() { return NzCascaderOptionComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzCascaderService", function() { return NzCascaderService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isChildOption", function() { return isChildOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isParentOption", function() { return isParentOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isShowSearchObject", function() { return isShowSearchObject; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/keycodes.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/overlay.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ng_zorro_antd_core_animation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/core/animation */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-animation.js");
/* harmony import */ var ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/core/config */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-config.js");
/* harmony import */ var ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/core/no-animation */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-no-animation.js");
/* harmony import */ var ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/core/overlay */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-overlay.js");
/* harmony import */ var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/core/util */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-util.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/i18n */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-i18n.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ng_zorro_antd_core_highlight__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/core/highlight */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-highlight.js");
/* harmony import */ var ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/core/outlet */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-outlet.js");
/* harmony import */ var ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/empty */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-empty.js");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/icon */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-icon.js");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/input */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-input.js");




















/**
 * @fileoverview added by tsickle
 * Generated from: typings.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @deprecated Use the prefixed version.
 * @record
 */













const _c0 = ["nz-cascader-option", ""];
function NzCascaderOptionComponent_ng_container_0_ng_template_1_Template(rf, ctx) { }
const _c1 = function (a0, a1) { return { $implicit: a0, index: a1 }; };
function NzCascaderOptionComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, NzCascaderOptionComponent_ng_container_0_ng_template_1_Template, 0, 0, "ng-template", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", ctx_r58.optionTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](2, _c1, ctx_r58.option, ctx_r58.columnIndex));
} }
function NzCascaderOptionComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "nzHighlight");
} if (rf & 2) {
    const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind4"](1, 1, ctx_r60.optionLabel, ctx_r60.highlightText, "g", "ant-cascader-menu-item-keyword"), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
} }
function NzCascaderOptionComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzType", ctx_r61.option.loading ? "loading" : "right");
} }
const _c2 = ["input"];
const _c3 = ["menu"];
function NzCascaderComponent_div_3_i_3_Template(rf, ctx) { if (rf & 1) {
    const _r75 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NzCascaderComponent_div_3_i_3_Template_i_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r75); const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r74.clearSelection($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function NzCascaderComponent_div_3_i_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 13);
} if (rf & 2) {
    const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("ant-cascader-picker-arrow-expand", ctx_r69.menuVisible);
} }
function NzCascaderComponent_div_3_i_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 14);
} }
function NzCascaderComponent_div_3_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r71.labelRenderText);
} }
function NzCascaderComponent_div_3_ng_template_8_ng_template_0_Template(rf, ctx) { }
function NzCascaderComponent_div_3_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, NzCascaderComponent_div_3_ng_template_8_ng_template_0_Template, 0, 0, "ng-template", 15);
} if (rf & 2) {
    const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", ctx_r73.nzLabelRender)("ngTemplateOutletContext", ctx_r73.labelRenderContext);
} }
function NzCascaderComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r78 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "input", 4, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function NzCascaderComponent_div_3_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r78); const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r77.inputValue = $event; })("blur", function NzCascaderComponent_div_3_Template_input_blur_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r78); const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r79.handleInputBlur(); })("focus", function NzCascaderComponent_div_3_Template_input_focus_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r78); const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r80.handleInputFocus(); })("change", function NzCascaderComponent_div_3_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r78); return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, NzCascaderComponent_div_3_i_3_Template, 1, 0, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, NzCascaderComponent_div_3_i_4_Template, 1, 2, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, NzCascaderComponent_div_3_i_5_Template, 1, 0, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, NzCascaderComponent_div_3_ng_container_7_Template, 2, 1, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, NzCascaderComponent_div_3_ng_template_8_Template, 1, 2, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r72 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](9);
    const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("ant-cascader-input-disabled", ctx_r65.nzDisabled)("ant-cascader-input-lg", ctx_r65.nzSize === "large")("ant-cascader-input-sm", ctx_r65.nzSize === "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("readonly", !ctx_r65.nzShowSearch)("disabled", ctx_r65.nzDisabled)("nzSize", ctx_r65.nzSize)("ngModel", ctx_r65.inputValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("autoComplete", "off")("placeholder", ctx_r65.showPlaceholder ? ctx_r65.nzPlaceHolder || (ctx_r65.locale == null ? null : ctx_r65.locale.placeholder) : null)("autofocus", ctx_r65.nzAutoFocus ? "autofocus" : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r65.clearIconVisible);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r65.nzShowArrow && !ctx_r65.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r65.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("ant-cascader-show-search", !!ctx_r65.nzShowSearch)("ant-focusd", !!ctx_r65.nzShowSearch && ctx_r65.isFocused && !ctx_r65.inputValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r65.isLabelRenderTemplate)("ngIfElse", _r72);
} }
function NzCascaderComponent_ng_template_5_ul_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ul", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "li", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "nz-embed-empty", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("width", ctx_r83.dropdownWidthStyle)("height", ctx_r83.dropdownHeightStyle);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzComponentName", "cascader")("specificContent", ctx_r83.nzNotFoundContent);
} }
function NzCascaderComponent_ng_template_5_ng_template_3_ul_0_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r93 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("mouseenter", function NzCascaderComponent_ng_template_5_ng_template_3_ul_0_li_1_Template_li_mouseenter_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r93); const option_r90 = ctx.$implicit; const i_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index; const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3); return ctx_r91.onOptionMouseEnter(option_r90, i_r88, $event); })("mouseleave", function NzCascaderComponent_ng_template_5_ng_template_3_ul_0_li_1_Template_li_mouseleave_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r93); const option_r90 = ctx.$implicit; const i_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index; const ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3); return ctx_r94.onOptionMouseLeave(option_r90, i_r88, $event); })("click", function NzCascaderComponent_ng_template_5_ng_template_3_ul_0_li_1_Template_li_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r93); const option_r90 = ctx.$implicit; const i_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index; const ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3); return ctx_r96.onOptionClick(option_r90, i_r88, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r90 = ctx.$implicit;
    const i_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index;
    const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("columnIndex", i_r88)("nzLabelProperty", ctx_r89.nzLabelProperty)("optionTemplate", ctx_r89.nzOptionRender)("activated", ctx_r89.isOptionActivated(option_r90, i_r88))("highlightText", ctx_r89.inSearchingMode ? ctx_r89.inputValue : "")("option", option_r90);
} }
function NzCascaderComponent_ng_template_5_ng_template_3_ul_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ul", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, NzCascaderComponent_ng_template_5_ng_template_3_ul_0_li_1_Template, 1, 6, "li", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const options_r87 = ctx.$implicit;
    const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("height", ctx_r86.dropdownHeightStyle)("width", ctx_r86.dropdownWidthStyle);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r86.menuColumnCls);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", options_r87);
} }
function NzCascaderComponent_ng_template_5_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, NzCascaderComponent_ng_template_5_ng_template_3_ul_0_Template, 2, 6, "ul", 23);
} if (rf & 2) {
    const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r85.cascaderService.columns);
} }
function NzCascaderComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r100 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 16, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("mouseleave", function NzCascaderComponent_ng_template_5_Template_div_mouseleave_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r100); const ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r99.onTriggerMouseLeave($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, NzCascaderComponent_ng_template_5_ul_2_Template, 3, 6, "ul", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, NzCascaderComponent_ng_template_5_ng_template_3_Template, 1, 1, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r84 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](4);
    const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("ant-cascader-menus-hidden", !ctx_r66.menuVisible);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r66.menuCls)("ngStyle", ctx_r66.nzMenuStyle)("@.disabled", ctx_r66.noAnimation == null ? null : ctx_r66.noAnimation.nzNoAnimation)("nzNoAnimation", ctx_r66.noAnimation == null ? null : ctx_r66.noAnimation.nzNoAnimation)("@slideMotion", ctx_r66.dropDownPosition);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r66.shouldShowEmpty)("ngIfElse", _r84);
} }
const _c4 = ["*"];
function CascaderOption() { }
if (false) {}
/**
 * @deprecated Use the prefixed version.
 * @record
 */
function CascaderSearchOption() { }
if (false) {}
/**
 * @record
 */
function NzShowSearchOptions() { }
if (false) {}
/**
 * @param {?} options
 * @return {?}
 */
function isShowSearchObject(options) {
    return typeof options !== 'boolean';
}
/**
 * To avoid circular dependency, provide an interface of `NzCascaderComponent`
 * for `NzCascaderService`.
 * @record
 */
function NzCascaderComponentAsSource() { }
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: utils.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
/**
 * @param {?} o
 * @return {?}
 */
function isChildOption(o) {
    return o.isLeaf || !o.children || !o.children.length;
}
/**
 * @param {?} o
 * @return {?}
 */
function isParentOption(o) {
    return !!o.children && !!o.children.length && !o.isLeaf;
}

/**
 * @fileoverview added by tsickle
 * Generated from: cascader-li.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzCascaderOptionComponent {
    /**
     * @param {?} cdr
     * @param {?} elementRef
     * @param {?} renderer
     */
    constructor(cdr, elementRef, renderer) {
        this.cdr = cdr;
        this.optionTemplate = null;
        this.activated = false;
        this.nzLabelProperty = 'label';
        renderer.addClass(elementRef.nativeElement, 'ant-cascader-menu-item');
    }
    /**
     * @return {?}
     */
    get optionLabel() {
        return this.option[this.nzLabelProperty];
    }
    /**
     * @return {?}
     */
    markForCheck() {
        this.cdr.markForCheck();
    }
}
NzCascaderOptionComponent.ɵfac = function NzCascaderOptionComponent_Factory(t) { return new (t || NzCascaderOptionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"])); };
NzCascaderOptionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: NzCascaderOptionComponent, selectors: [["", "nz-cascader-option", ""]], hostVars: 7, hostBindings: function NzCascaderOptionComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("title", ctx.option.title || ctx.optionLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("ant-cascader-menu-item-active", ctx.activated)("ant-cascader-menu-item-expand", !ctx.option.isLeaf)("ant-cascader-menu-item-disabled", ctx.option.disabled);
    } }, inputs: { optionTemplate: "optionTemplate", activated: "activated", nzLabelProperty: "nzLabelProperty", option: "option", highlightText: "highlightText", columnIndex: "columnIndex" }, exportAs: ["nzCascaderOption"], attrs: _c0, decls: 4, vars: 3, consts: [[4, "ngIf", "ngIfElse"], ["defaultOptionTemplate", ""], ["class", "ant-cascader-menu-item-expand-icon", 4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "innerHTML"], [1, "ant-cascader-menu-item-expand-icon"], ["nz-icon", "", 3, "nzType"]], template: function NzCascaderOptionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, NzCascaderOptionComponent_ng_container_0_Template, 2, 5, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, NzCascaderOptionComponent_ng_template_1_Template, 2, 6, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, NzCascaderOptionComponent_span_3_Template, 2, 1, "span", 2);
    } if (rf & 2) {
        const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.optionTemplate)("ngIfElse", _r59);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.option.isLeaf || (ctx.option.children == null ? null : ctx.option.children.length) || ctx.option.loading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgTemplateOutlet"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_17__["NzIconDirective"]], pipes: [ng_zorro_antd_core_highlight__WEBPACK_IMPORTED_MODULE_14__["NzHighlightPipe"]], encapsulation: 2, changeDetection: 0 });
/** @nocollapse */
NzCascaderOptionComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"] }
];
NzCascaderOptionComponent.propDecorators = {
    optionTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    option: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    activated: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    highlightText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzLabelProperty: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    columnIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: cascader.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * All data is stored and parsed in NzCascaderService.
 */
class NzCascaderService {
    constructor() {
        /**
         * Activated options in each column.
         */
        this.activatedOptions = [];
        /**
         * An array to store cascader items arranged in different layers.
         */
        this.columns = [];
        /**
         * If user has entered searching mode.
         */
        this.inSearchingMode = false;
        /**
         * Selected options would be output to user.
         */
        this.selectedOptions = [];
        this.values = [];
        this.$loading = new rxjs__WEBPACK_IMPORTED_MODULE_10__["BehaviorSubject"](false);
        /**
         * Emit an event to notify cascader it needs to redraw because activated or
         * selected options are changed.
         */
        this.$redraw = new rxjs__WEBPACK_IMPORTED_MODULE_10__["Subject"]();
        /**
         * Emit an event when an option gets selected.
         * Emit true if a leaf options is selected.
         */
        this.$optionSelected = new rxjs__WEBPACK_IMPORTED_MODULE_10__["Subject"]();
        /**
         * Emit an event to notify cascader it needs to quit searching mode.
         * Only emit when user do select a searching option.
         */
        this.$quitSearching = new rxjs__WEBPACK_IMPORTED_MODULE_10__["Subject"]();
        /**
         * To hold columns before entering searching mode.
         */
        this.columnsSnapshot = [[]];
        /**
         * To hold activated options before entering searching mode.
         */
        this.activatedOptionsSnapshot = [];
    }
    /**
     * Return cascader options in the first layer.
     * @return {?}
     */
    get nzOptions() {
        return this.columns[0];
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.$redraw.complete();
        this.$quitSearching.complete();
        this.$optionSelected.complete();
        this.$loading.complete();
    }
    /**
     * Make sure that value matches what is displayed in the dropdown.
     * @param {?=} first
     * @return {?}
     */
    syncOptions(first = false) {
        /** @type {?} */
        const values = this.values;
        /** @type {?} */
        const hasValue = values && values.length;
        /** @type {?} */
        const lastColumnIndex = values.length - 1;
        /** @type {?} */
        const initColumnWithIndex = (/**
         * @param {?} columnIndex
         * @return {?}
         */
        (columnIndex) => {
            /** @type {?} */
            const activatedOptionSetter = (/**
             * @return {?}
             */
            () => {
                /** @type {?} */
                const currentValue = values[columnIndex];
                if (!Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_9__["isNotNil"])(currentValue)) {
                    this.$redraw.next();
                    return;
                }
                /** @type {?} */
                const option = this.findOptionWithValue(columnIndex, values[columnIndex]) ||
                    (typeof currentValue === 'object'
                        ? currentValue
                        : {
                            [`${this.cascaderComponent.nzValueProperty}`]: currentValue,
                            [`${this.cascaderComponent.nzLabelProperty}`]: currentValue
                        });
                this.setOptionActivated(option, columnIndex, false, false);
                if (columnIndex < lastColumnIndex) {
                    initColumnWithIndex(columnIndex + 1);
                }
                else {
                    this.dropBehindColumns(columnIndex);
                    this.selectedOptions = [...this.activatedOptions];
                    this.$redraw.next();
                }
            });
            if (this.isLoaded(columnIndex) || !this.cascaderComponent.nzLoadData) {
                activatedOptionSetter();
            }
            else {
                /** @type {?} */
                const option = this.activatedOptions[columnIndex - 1] || {};
                this.loadChildren(option, columnIndex - 1, activatedOptionSetter);
            }
        });
        this.activatedOptions = [];
        this.selectedOptions = [];
        if (first && this.cascaderComponent.nzLoadData && !hasValue) {
            // Should also notify the component that value changes. Fix #3480.
            this.$redraw.next();
            return;
        }
        else {
            initColumnWithIndex(0);
        }
    }
    /**
     * Bind cascader component so this service could use inputs.
     * @param {?} cascaderComponent
     * @return {?}
     */
    withComponent(cascaderComponent) {
        this.cascaderComponent = cascaderComponent;
    }
    /**
     * Reset all options. Rebuild searching options if in searching mode.
     * @param {?} options
     * @return {?}
     */
    withOptions(options) {
        this.columnsSnapshot = this.columns = options && options.length ? [options] : [];
        if (this.inSearchingMode) {
            this.prepareSearchOptions(this.cascaderComponent.inputValue);
        }
        else if (this.columns.length) {
            this.syncOptions();
        }
    }
    /**
     * Try to set a option as activated.
     * @param {?} option Cascader option
     * @param {?} columnIndex Of which column this option is in
     * @param {?=} performSelect Select
     * @param {?=} loadingChildren Try to load children asynchronously.
     * @return {?}
     */
    setOptionActivated(option, columnIndex, performSelect = false, loadingChildren = true) {
        if (option.disabled) {
            return;
        }
        this.activatedOptions[columnIndex] = option;
        this.trackAncestorActivatedOptions(columnIndex);
        this.dropBehindActivatedOptions(columnIndex);
        /** @type {?} */
        const isParent = isParentOption(option);
        if (isParent) {
            // Parent option that has children.
            this.setColumnData((/** @type {?} */ (option.children)), columnIndex + 1, option);
        }
        else if (!option.isLeaf && loadingChildren) {
            // Parent option that should try to load children asynchronously.
            this.loadChildren(option, columnIndex);
        }
        else if (option.isLeaf) {
            // Leaf option.
            this.dropBehindColumns(columnIndex);
        }
        // Actually perform selection to make an options not only activated but also selected.
        if (performSelect) {
            this.setOptionSelected(option, columnIndex);
        }
        this.$redraw.next();
    }
    /**
     * @param {?} option
     * @param {?} index
     * @return {?}
     */
    setOptionSelected(option, index) {
        /** @type {?} */
        const changeOn = this.cascaderComponent.nzChangeOn;
        /** @type {?} */
        const shouldPerformSelection = (/**
         * @param {?} o
         * @param {?} i
         * @return {?}
         */
        (o, i) => {
            return typeof changeOn === 'function' ? changeOn(o, i) : false;
        });
        if (option.isLeaf || this.cascaderComponent.nzChangeOnSelect || shouldPerformSelection(option, index)) {
            this.selectedOptions = [...this.activatedOptions];
            this.prepareEmitValue();
            this.$redraw.next();
            this.$optionSelected.next({ option, index });
        }
    }
    /**
     * @param {?} column
     * @return {?}
     */
    setOptionDeactivatedSinceColumn(column) {
        this.dropBehindActivatedOptions(column - 1);
        this.dropBehindColumns(column);
        this.$redraw.next();
    }
    /**
     * Set a searching option as selected, finishing up things.
     * @param {?} option
     * @return {?}
     */
    setSearchOptionSelected(option) {
        this.activatedOptions = [option];
        this.selectedOptions = [...option.path];
        this.prepareEmitValue();
        this.$redraw.next();
        this.$optionSelected.next({ option, index: 0 });
        setTimeout((/**
         * @return {?}
         */
        () => {
            // Reset data and tell UI only to remove input and reset dropdown width style.
            this.$quitSearching.next();
            this.$redraw.next();
            this.inSearchingMode = false;
            this.columns = [...this.columnsSnapshot];
            this.activatedOptions = [...this.selectedOptions];
        }), 200);
    }
    /**
     * Filter cascader options to reset `columns`.
     * @param {?} searchValue The string user wants to search.
     * @return {?}
     */
    prepareSearchOptions(searchValue) {
        /** @type {?} */
        const results = [];
        // Search results only have one layer.
        /** @type {?} */
        const path = [];
        /** @type {?} */
        const defaultFilter = (/**
         * @param {?} i
         * @param {?} p
         * @return {?}
         */
        (i, p) => {
            return p.some((/**
             * @param {?} o
             * @return {?}
             */
            o => {
                /** @type {?} */
                const label = this.getOptionLabel(o);
                return !!label && label.indexOf(i) !== -1;
            }));
        });
        /** @type {?} */
        const showSearch = this.cascaderComponent.nzShowSearch;
        /** @type {?} */
        const filter = isShowSearchObject(showSearch) && showSearch.filter ? showSearch.filter : defaultFilter;
        /** @type {?} */
        const sorter = isShowSearchObject(showSearch) && showSearch.sorter ? showSearch.sorter : null;
        /** @type {?} */
        const loopChild = (/**
         * @param {?} node
         * @param {?=} forceDisabled
         * @return {?}
         */
        (node, forceDisabled = false) => {
            path.push(node);
            /** @type {?} */
            const cPath = Array.from(path);
            if (filter(searchValue, cPath)) {
                /** @type {?} */
                const disabled = forceDisabled || node.disabled;
                /** @type {?} */
                const option = {
                    disabled,
                    isLeaf: true,
                    path: cPath,
                    [this.cascaderComponent.nzLabelProperty]: cPath.map((/**
                     * @param {?} p
                     * @return {?}
                     */
                    p => this.getOptionLabel(p))).join(' / ')
                };
                results.push(option);
            }
            path.pop();
        });
        /** @type {?} */
        const loopParent = (/**
         * @param {?} node
         * @param {?=} forceDisabled
         * @return {?}
         */
        (node, forceDisabled = false) => {
            /** @type {?} */
            const disabled = forceDisabled || node.disabled;
            path.push(node);
            (/** @type {?} */ (node.children)).forEach((/**
             * @param {?} sNode
             * @return {?}
             */
            sNode => {
                if (!sNode.parent) {
                    sNode.parent = node;
                }
                if (!sNode.isLeaf) {
                    loopParent(sNode, disabled);
                }
                if (sNode.isLeaf || !sNode.children || !sNode.children.length) {
                    loopChild(sNode, disabled);
                }
            }));
            path.pop();
        });
        if (!this.columnsSnapshot.length) {
            this.columns = [[]];
            return;
        }
        this.columnsSnapshot[0].forEach((/**
         * @param {?} o
         * @return {?}
         */
        o => (isChildOption(o) ? loopChild(o) : loopParent(o))));
        if (sorter) {
            results.sort((/**
             * @param {?} a
             * @param {?} b
             * @return {?}
             */
            (a, b) => sorter(a.path, b.path, searchValue)));
        }
        this.columns = [results];
        this.$redraw.next(); // Search results may be empty, so should redraw.
    }
    /**
     * Toggle searching mode by UI. It deals with things not directly related to UI.
     * @param {?} toSearching If this cascader is entering searching mode
     * @return {?}
     */
    toggleSearchingMode(toSearching) {
        this.inSearchingMode = toSearching;
        if (toSearching) {
            this.activatedOptionsSnapshot = [...this.activatedOptions];
            this.activatedOptions = [];
            this.selectedOptions = [];
            this.$redraw.next();
        }
        else {
            // User quit searching mode without selecting an option.
            this.activatedOptions = [...this.activatedOptionsSnapshot];
            this.selectedOptions = [...this.activatedOptions];
            this.columns = [...this.columnsSnapshot];
            this.syncOptions();
            this.$redraw.next();
        }
    }
    /**
     * Clear selected options.
     * @return {?}
     */
    clear() {
        this.values = [];
        this.selectedOptions = [];
        this.activatedOptions = [];
        this.dropBehindColumns(0);
        this.prepareEmitValue();
        this.$redraw.next();
        this.$optionSelected.next(null);
    }
    /**
     * @param {?} o
     * @return {?}
     */
    getOptionLabel(o) {
        return (/** @type {?} */ (o[this.cascaderComponent.nzLabelProperty || 'label']));
    }
    /**
     * @param {?} o
     * @return {?}
     */
    getOptionValue(o) {
        return o[this.cascaderComponent.nzValueProperty || 'value'];
    }
    /**
     * Try to insert options into a column.
     * @private
     * @param {?} options Options to insert
     * @param {?} columnIndex Position
     * @param {?} parent
     * @return {?}
     */
    setColumnData(options, columnIndex, parent) {
        /** @type {?} */
        const existingOptions = this.columns[columnIndex];
        if (!Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_9__["arraysEqual"])(existingOptions, options)) {
            options.forEach((/**
             * @param {?} o
             * @return {?}
             */
            o => (o.parent = parent)));
            this.columns[columnIndex] = options;
            this.dropBehindColumns(columnIndex);
        }
    }
    /**
     * Set all ancestor options as activated.
     * @private
     * @param {?} startIndex
     * @return {?}
     */
    trackAncestorActivatedOptions(startIndex) {
        for (let i = startIndex - 1; i >= 0; i--) {
            if (!this.activatedOptions[i]) {
                this.activatedOptions[i] = (/** @type {?} */ (this.activatedOptions[i + 1].parent));
            }
        }
    }
    /**
     * @private
     * @param {?} lastReserveIndex
     * @return {?}
     */
    dropBehindActivatedOptions(lastReserveIndex) {
        this.activatedOptions = this.activatedOptions.splice(0, lastReserveIndex + 1);
    }
    /**
     * @private
     * @param {?} lastReserveIndex
     * @return {?}
     */
    dropBehindColumns(lastReserveIndex) {
        if (lastReserveIndex < this.columns.length - 1) {
            this.columns = this.columns.slice(0, lastReserveIndex + 1);
        }
    }
    /**
     * Load children of an option asynchronously.
     * @param {?} option
     * @param {?} columnIndex
     * @param {?=} success
     * @param {?=} failure
     * @return {?}
     */
    loadChildren(option, columnIndex, success, failure) {
        /** @type {?} */
        const loadFn = this.cascaderComponent.nzLoadData;
        if (loadFn) {
            // If there isn't any option in columns.
            this.$loading.next(columnIndex < 0);
            if (typeof option === 'object') {
                option.loading = true;
            }
            loadFn(option, columnIndex).then((/**
             * @return {?}
             */
            () => {
                option.loading = false;
                if (option.children) {
                    this.setColumnData(option.children, columnIndex + 1, option);
                }
                if (success) {
                    success();
                }
                this.$loading.next(false);
                this.$redraw.next();
            }), (/**
             * @return {?}
             */
            () => {
                option.loading = false;
                option.isLeaf = true;
                if (failure) {
                    failure();
                }
                this.$redraw.next();
            }));
        }
    }
    /**
     * @private
     * @param {?} index
     * @return {?}
     */
    isLoaded(index) {
        return this.columns[index] && this.columns[index].length > 0;
    }
    /**
     * Find a option that has a given value in a given column.
     * @private
     * @param {?} columnIndex
     * @param {?} value
     * @return {?}
     */
    findOptionWithValue(columnIndex, value) {
        /** @type {?} */
        const targetColumn = this.columns[columnIndex];
        if (targetColumn) {
            /** @type {?} */
            const v = typeof value === 'object' ? this.getOptionValue(value) : value;
            return (/** @type {?} */ (targetColumn.find((/**
             * @param {?} o
             * @return {?}
             */
            o => v === this.getOptionValue(o)))));
        }
        return null;
    }
    /**
     * @private
     * @return {?}
     */
    prepareEmitValue() {
        this.values = this.selectedOptions.map((/**
         * @param {?} o
         * @return {?}
         */
        o => this.getOptionValue(o)));
    }
}
NzCascaderService.ɵfac = function NzCascaderService_Factory(t) { return new (t || NzCascaderService)(); };
NzCascaderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: NzCascaderService, factory: NzCascaderService.ɵfac });
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: cascader.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const NZ_CONFIG_COMPONENT_NAME = 'cascader';
/** @type {?} */
const defaultDisplayRender = (/**
 * @param {?} labels
 * @return {?}
 */
(labels) => labels.join(' / '));
const ɵ0 = defaultDisplayRender;
class NzCascaderComponent {
    /**
     * @param {?} cascaderService
     * @param {?} i18nService
     * @param {?} nzConfigService
     * @param {?} cdr
     * @param {?} elementRef
     * @param {?} renderer
     * @param {?=} noAnimation
     */
    constructor(cascaderService, i18nService, nzConfigService, cdr, elementRef, renderer, noAnimation) {
        this.cascaderService = cascaderService;
        this.i18nService = i18nService;
        this.nzConfigService = nzConfigService;
        this.cdr = cdr;
        this.noAnimation = noAnimation;
        this.nzOptionRender = null;
        this.nzShowInput = true;
        this.nzShowArrow = true;
        this.nzAllowClear = true;
        this.nzAutoFocus = false;
        this.nzChangeOnSelect = false;
        this.nzDisabled = false;
        this.nzExpandTrigger = 'click';
        this.nzValueProperty = 'value';
        this.nzLabelProperty = 'label';
        this.nzMouseEnterDelay = 150; // ms
        // ms
        this.nzMouseLeaveDelay = 150; // ms
        // ms
        this.nzTriggerAction = (/** @type {?} */ (['click']));
        this.nzVisibleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.nzSelectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.nzSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.nzClear = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * If the dropdown should show the empty content.
         * `true` if there's no options.
         */
        this.shouldShowEmpty = false;
        this.dropDownPosition = 'bottom';
        this.menuVisible = false;
        this.isLoading = false;
        this.labelRenderContext = {};
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
        this.positions = [...ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_8__["DEFAULT_CASCADER_POSITIONS"]];
        this.dropdownHeightStyle = '';
        this.isFocused = false;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_10__["Subject"]();
        this.inputString = '';
        this.isOpening = false;
        this.el = elementRef.nativeElement;
        this.cascaderService.withComponent(this);
        renderer.addClass(elementRef.nativeElement, 'ant-cascader');
        renderer.addClass(elementRef.nativeElement, 'ant-cascader-picker');
    }
    /**
     * @return {?}
     */
    get nzOptions() {
        return this.cascaderService.nzOptions;
    }
    /**
     * @param {?} options
     * @return {?}
     */
    set nzOptions(options) {
        this.cascaderService.withOptions(options);
    }
    /**
     * @return {?}
     */
    get inSearchingMode() {
        return this.cascaderService.inSearchingMode;
    }
    /**
     * @param {?} inputValue
     * @return {?}
     */
    set inputValue(inputValue) {
        this.inputString = inputValue;
        this.toggleSearchingMode(!!inputValue);
    }
    /**
     * @return {?}
     */
    get inputValue() {
        return this.inputString;
    }
    /**
     * @return {?}
     */
    get menuCls() {
        return { [`${this.nzMenuClassName}`]: !!this.nzMenuClassName };
    }
    /**
     * @return {?}
     */
    get menuColumnCls() {
        return { [`${this.nzColumnClassName}`]: !!this.nzColumnClassName };
    }
    /**
     * @private
     * @return {?}
     */
    get hasInput() {
        return !!this.inputValue;
    }
    /**
     * @private
     * @return {?}
     */
    get hasValue() {
        return this.cascaderService.values && this.cascaderService.values.length > 0;
    }
    /**
     * @return {?}
     */
    get showPlaceholder() {
        return !(this.hasInput || this.hasValue);
    }
    /**
     * @return {?}
     */
    get clearIconVisible() {
        return this.nzAllowClear && !this.nzDisabled && (this.hasValue || this.hasInput);
    }
    /**
     * @return {?}
     */
    get isLabelRenderTemplate() {
        return !!this.nzLabelRender;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /** @type {?} */
        const srv = this.cascaderService;
        srv.$redraw.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["takeUntil"])(this.destroy$)).subscribe((/**
         * @return {?}
         */
        () => {
            // These operations would not mutate data.
            this.checkChildren();
            this.setDisplayLabel();
            this.reposition();
            this.setDropdownStyles();
            this.cdr.markForCheck();
        }));
        srv.$loading.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["takeUntil"])(this.destroy$)).subscribe((/**
         * @param {?} loading
         * @return {?}
         */
        loading => {
            this.isLoading = loading;
        }));
        srv.$optionSelected.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["takeUntil"])(this.destroy$)).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            if (!data) {
                this.onChange([]);
                this.nzSelect.emit(null);
                this.nzSelectionChange.emit([]);
            }
            else {
                const { option, index } = data;
                /** @type {?} */
                const shouldClose = option.isLeaf;
                if (shouldClose) {
                    this.delaySetMenuVisible(false);
                }
                this.onChange(this.cascaderService.values);
                this.nzSelectionChange.emit(this.cascaderService.selectedOptions);
                this.nzSelect.emit({ option, index });
                this.cdr.markForCheck();
            }
        }));
        srv.$quitSearching.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["takeUntil"])(this.destroy$)).subscribe((/**
         * @return {?}
         */
        () => {
            this.inputString = '';
            this.dropdownWidthStyle = '';
        }));
        this.i18nService.localeChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["startWith"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["takeUntil"])(this.destroy$)).subscribe((/**
         * @return {?}
         */
        () => {
            this.setLocale();
        }));
        this.nzConfigService
            .getConfigChangeEventForComponent(NZ_CONFIG_COMPONENT_NAME)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["takeUntil"])(this.destroy$))
            .subscribe((/**
         * @return {?}
         */
        () => {
            this.cdr.markForCheck();
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
        this.clearDelayMenuTimer();
        this.clearDelaySelectTimer();
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
        this.onTouched = fn;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.cascaderService.values = Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_9__["toArray"])(value);
        this.cascaderService.syncOptions(true);
    }
    /**
     * @param {?} visible
     * @param {?=} delay
     * @param {?=} setOpening
     * @return {?}
     */
    delaySetMenuVisible(visible, delay = 100, setOpening = false) {
        this.clearDelayMenuTimer();
        if (delay) {
            if (visible && setOpening) {
                this.isOpening = true;
            }
            this.delayMenuTimer = setTimeout((/**
             * @return {?}
             */
            () => {
                this.setMenuVisible(visible);
                this.cdr.detectChanges();
                this.clearDelayMenuTimer();
                if (visible) {
                    setTimeout((/**
                     * @return {?}
                     */
                    () => {
                        this.isOpening = false;
                    }), 100);
                }
            }), delay);
        }
        else {
            this.setMenuVisible(visible);
        }
    }
    /**
     * @param {?} visible
     * @return {?}
     */
    setMenuVisible(visible) {
        if (this.nzDisabled || this.menuVisible === visible) {
            return;
        }
        if (visible) {
            this.cascaderService.syncOptions();
        }
        this.menuVisible = visible;
        this.nzVisibleChange.emit(visible);
        this.cdr.detectChanges();
    }
    /**
     * @private
     * @return {?}
     */
    clearDelayMenuTimer() {
        if (this.delayMenuTimer) {
            clearTimeout(this.delayMenuTimer);
            this.delayMenuTimer = null;
        }
    }
    /**
     * @param {?=} event
     * @return {?}
     */
    clearSelection(event) {
        if (event) {
            event.preventDefault();
            event.stopPropagation();
        }
        this.labelRenderText = '';
        this.labelRenderContext = {};
        this.inputValue = '';
        this.setMenuVisible(false);
        this.cascaderService.clear();
    }
    /**
     * @return {?}
     */
    getSubmitValue() {
        return this.cascaderService.selectedOptions.map((/**
         * @param {?} o
         * @return {?}
         */
        o => this.cascaderService.getOptionValue(o)));
    }
    /**
     * @return {?}
     */
    focus() {
        if (!this.isFocused) {
            (this.input ? this.input.nativeElement : this.el).focus();
            this.isFocused = true;
        }
    }
    /**
     * @return {?}
     */
    blur() {
        if (this.isFocused) {
            (this.input ? this.input.nativeElement : this.el).blur();
            this.isFocused = false;
        }
    }
    /**
     * @return {?}
     */
    handleInputBlur() {
        this.menuVisible ? this.focus() : this.blur();
    }
    /**
     * @return {?}
     */
    handleInputFocus() {
        this.focus();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onKeyDown(event) {
        /** @type {?} */
        const keyCode = event.keyCode;
        if (keyCode !== _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__["DOWN_ARROW"] &&
            keyCode !== _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__["UP_ARROW"] &&
            keyCode !== _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__["LEFT_ARROW"] &&
            keyCode !== _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__["RIGHT_ARROW"] &&
            keyCode !== _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__["ENTER"] &&
            keyCode !== _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__["BACKSPACE"] &&
            keyCode !== _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__["ESCAPE"]) {
            return;
        }
        // Press any keys above to reopen menu.
        if (!this.menuVisible && keyCode !== _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__["BACKSPACE"] && keyCode !== _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__["ESCAPE"]) {
            return this.setMenuVisible(true);
        }
        // Make these keys work as default in searching mode.
        if (this.inSearchingMode && (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__["BACKSPACE"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__["LEFT_ARROW"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__["RIGHT_ARROW"])) {
            return;
        }
        // Interact with the component.
        if (this.menuVisible) {
            event.preventDefault();
            if (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__["DOWN_ARROW"]) {
                this.moveUpOrDown(false);
            }
            else if (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__["UP_ARROW"]) {
                this.moveUpOrDown(true);
            }
            else if (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__["LEFT_ARROW"]) {
                this.moveLeft();
            }
            else if (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__["RIGHT_ARROW"]) {
                this.moveRight();
            }
            else if (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__["ENTER"]) {
                this.onEnter();
            }
        }
    }
    /**
     * @return {?}
     */
    onTriggerClick() {
        if (this.nzDisabled) {
            return;
        }
        if (this.nzShowSearch) {
            this.focus();
        }
        if (this.isActionTrigger('click')) {
            this.delaySetMenuVisible(!this.menuVisible, 100);
        }
        this.onTouched();
    }
    /**
     * @return {?}
     */
    onTriggerMouseEnter() {
        if (this.nzDisabled || !this.isActionTrigger('hover')) {
            return;
        }
        this.delaySetMenuVisible(true, this.nzMouseEnterDelay, true);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onTriggerMouseLeave(event) {
        if (this.nzDisabled || !this.menuVisible || this.isOpening || !this.isActionTrigger('hover')) {
            event.preventDefault();
            return;
        }
        /** @type {?} */
        const mouseTarget = (/** @type {?} */ (event.relatedTarget));
        /** @type {?} */
        const hostEl = this.el;
        /** @type {?} */
        const menuEl = this.menu && ((/** @type {?} */ (this.menu.nativeElement)));
        if (hostEl.contains(mouseTarget) || (menuEl && menuEl.contains(mouseTarget))) {
            return;
        }
        this.delaySetMenuVisible(false, this.nzMouseLeaveDelay);
    }
    /**
     * @param {?} option
     * @param {?} columnIndex
     * @param {?} event
     * @return {?}
     */
    onOptionMouseEnter(option, columnIndex, event) {
        event.preventDefault();
        if (this.nzExpandTrigger === 'hover') {
            if (!option.isLeaf) {
                this.delaySetOptionActivated(option, columnIndex, false);
            }
            else {
                this.cascaderService.setOptionDeactivatedSinceColumn(columnIndex);
            }
        }
    }
    /**
     * @param {?} option
     * @param {?} _columnIndex
     * @param {?} event
     * @return {?}
     */
    onOptionMouseLeave(option, _columnIndex, event) {
        event.preventDefault();
        if (this.nzExpandTrigger === 'hover' && !option.isLeaf) {
            this.clearDelaySelectTimer();
        }
    }
    /**
     * @param {?} option
     * @param {?} columnIndex
     * @param {?} event
     * @return {?}
     */
    onOptionClick(option, columnIndex, event) {
        if (event) {
            event.preventDefault();
        }
        if (option && option.disabled) {
            return;
        }
        this.el.focus();
        this.inSearchingMode
            ? this.cascaderService.setSearchOptionSelected((/** @type {?} */ (option)))
            : this.cascaderService.setOptionActivated(option, columnIndex, true);
    }
    /**
     * @private
     * @param {?} action
     * @return {?}
     */
    isActionTrigger(action) {
        return typeof this.nzTriggerAction === 'string' ? this.nzTriggerAction === action : this.nzTriggerAction.indexOf(action) !== -1;
    }
    /**
     * @private
     * @return {?}
     */
    onEnter() {
        /** @type {?} */
        const columnIndex = Math.max(this.cascaderService.activatedOptions.length - 1, 0);
        /** @type {?} */
        const option = this.cascaderService.activatedOptions[columnIndex];
        if (option && !option.disabled) {
            this.inSearchingMode
                ? this.cascaderService.setSearchOptionSelected((/** @type {?} */ (option)))
                : this.cascaderService.setOptionActivated(option, columnIndex, true);
        }
    }
    /**
     * @private
     * @param {?} isUp
     * @return {?}
     */
    moveUpOrDown(isUp) {
        /** @type {?} */
        const columnIndex = Math.max(this.cascaderService.activatedOptions.length - 1, 0);
        /** @type {?} */
        const activeOption = this.cascaderService.activatedOptions[columnIndex];
        /** @type {?} */
        const options = this.cascaderService.columns[columnIndex] || [];
        /** @type {?} */
        const length = options.length;
        /** @type {?} */
        let nextIndex = -1;
        if (!activeOption) {
            // Not selected options in this column
            nextIndex = isUp ? length : -1;
        }
        else {
            nextIndex = options.indexOf(activeOption);
        }
        while (true) {
            nextIndex = isUp ? nextIndex - 1 : nextIndex + 1;
            if (nextIndex < 0 || nextIndex >= length) {
                break;
            }
            /** @type {?} */
            const nextOption = options[nextIndex];
            if (!nextOption || nextOption.disabled) {
                continue;
            }
            this.cascaderService.setOptionActivated(nextOption, columnIndex);
            break;
        }
    }
    /**
     * @private
     * @return {?}
     */
    moveLeft() {
        /** @type {?} */
        const options = this.cascaderService.activatedOptions;
        if (options.length) {
            options.pop(); // Remove the last one
        }
    }
    /**
     * @private
     * @return {?}
     */
    moveRight() {
        /** @type {?} */
        const length = this.cascaderService.activatedOptions.length;
        /** @type {?} */
        const options = this.cascaderService.columns[length];
        if (options && options.length) {
            /** @type {?} */
            const nextOpt = options.find((/**
             * @param {?} o
             * @return {?}
             */
            o => !o.disabled));
            if (nextOpt) {
                this.cascaderService.setOptionActivated(nextOpt, length);
            }
        }
    }
    /**
     * @private
     * @return {?}
     */
    clearDelaySelectTimer() {
        if (this.delaySelectTimer) {
            clearTimeout(this.delaySelectTimer);
            this.delaySelectTimer = null;
        }
    }
    /**
     * @private
     * @param {?} option
     * @param {?} columnIndex
     * @param {?} performSelect
     * @return {?}
     */
    delaySetOptionActivated(option, columnIndex, performSelect) {
        this.clearDelaySelectTimer();
        this.delaySelectTimer = setTimeout((/**
         * @return {?}
         */
        () => {
            this.cascaderService.setOptionActivated(option, columnIndex, performSelect);
            this.delaySelectTimer = null;
        }), 150);
    }
    /**
     * @private
     * @param {?} toSearching
     * @return {?}
     */
    toggleSearchingMode(toSearching) {
        if (this.inSearchingMode !== toSearching) {
            this.cascaderService.toggleSearchingMode(toSearching);
        }
        if (this.inSearchingMode) {
            this.cascaderService.prepareSearchOptions(this.inputValue);
        }
    }
    /**
     * @param {?} option
     * @param {?} index
     * @return {?}
     */
    isOptionActivated(option, index) {
        /** @type {?} */
        const activeOpt = this.cascaderService.activatedOptions[index];
        return activeOpt === option;
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        if (isDisabled) {
            this.closeMenu();
        }
        this.nzDisabled = isDisabled;
    }
    /**
     * @return {?}
     */
    closeMenu() {
        this.blur();
        this.clearDelayMenuTimer();
        this.setMenuVisible(false);
    }
    /**
     * @param {?} position
     * @return {?}
     */
    onPositionChange(position) {
        /** @type {?} */
        const newValue = position.connectionPair.originY === 'bottom' ? 'bottom' : 'top';
        if (this.dropDownPosition !== newValue) {
            this.dropDownPosition = newValue;
            this.cdr.detectChanges();
        }
    }
    /**
     * Reposition the cascader panel. When a menu opens, the cascader expands
     * and may exceed the boundary of browser's window.
     * @private
     * @return {?}
     */
    reposition() {
        if (this.overlay && this.overlay.overlayRef && this.menuVisible) {
            Promise.resolve().then((/**
             * @return {?}
             */
            () => {
                this.overlay.overlayRef.updatePosition();
            }));
        }
    }
    /**
     * When a cascader options is changed, a child needs to know that it should re-render.
     * @private
     * @return {?}
     */
    checkChildren() {
        if (this.cascaderItems) {
            this.cascaderItems.forEach((/**
             * @param {?} item
             * @return {?}
             */
            item => item.markForCheck()));
        }
    }
    /**
     * @private
     * @return {?}
     */
    setDisplayLabel() {
        /** @type {?} */
        const selectedOptions = this.cascaderService.selectedOptions;
        /** @type {?} */
        const labels = selectedOptions.map((/**
         * @param {?} o
         * @return {?}
         */
        o => this.cascaderService.getOptionLabel(o)));
        if (this.isLabelRenderTemplate) {
            this.labelRenderContext = { labels, selectedOptions };
        }
        else {
            this.labelRenderText = defaultDisplayRender.call(this, labels, selectedOptions);
        }
    }
    /**
     * @private
     * @return {?}
     */
    setDropdownStyles() {
        /** @type {?} */
        const firstColumn = this.cascaderService.columns[0];
        this.shouldShowEmpty =
            (this.inSearchingMode && (!firstColumn || !firstColumn.length)) || // Should show empty when there's no searching result
                (!(this.nzOptions && this.nzOptions.length) && !this.nzLoadData); // Should show when there's no options and developer does not use nzLoadData
        this.dropdownHeightStyle = this.shouldShowEmpty ? 'auto' : '';
        if (this.input) {
            this.dropdownWidthStyle = this.inSearchingMode || this.shouldShowEmpty ? `${this.input.nativeElement.offsetWidth}px` : '';
        }
    }
    /**
     * @private
     * @return {?}
     */
    setLocale() {
        this.locale = this.i18nService.getLocaleData('global');
        this.cdr.markForCheck();
    }
}
NzCascaderComponent.ɵfac = function NzCascaderComponent_Factory(t) { return new (t || NzCascaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](NzCascaderService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_12__["NzI18nService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_6__["NzConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_7__["NzNoAnimationDirective"], 9)); };
NzCascaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: NzCascaderComponent, selectors: [["nz-cascader"], ["", "nz-cascader", ""]], viewQuery: function NzCascaderComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c2, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c3, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["CdkConnectedOverlay"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](NzCascaderOptionComponent, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.input = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.menu = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.overlay = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.cascaderItems = _t);
    } }, hostVars: 13, hostBindings: function NzCascaderComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keydown", function NzCascaderComponent_keydown_HostBindingHandler($event) { return ctx.onKeyDown($event); })("click", function NzCascaderComponent_click_HostBindingHandler() { return ctx.onTriggerClick(); })("mouseenter", function NzCascaderComponent_mouseenter_HostBindingHandler() { return ctx.onTriggerMouseEnter(); })("mouseleave", function NzCascaderComponent_mouseleave_HostBindingHandler($event) { return ctx.onTriggerMouseLeave($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("tabIndex", "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("ant-cascader-lg", ctx.nzSize === "large")("ant-cascader-sm", ctx.nzSize === "small")("ant-cascader-picker-disabled", ctx.nzDisabled)("ant-cascader-picker-open", ctx.menuVisible)("ant-cascader-picker-with-value", !!ctx.inputValue)("ant-cascader-focused", ctx.isFocused);
    } }, inputs: { nzOptionRender: "nzOptionRender", nzShowInput: "nzShowInput", nzShowArrow: "nzShowArrow", nzAllowClear: "nzAllowClear", nzAutoFocus: "nzAutoFocus", nzChangeOnSelect: "nzChangeOnSelect", nzDisabled: "nzDisabled", nzExpandTrigger: "nzExpandTrigger", nzValueProperty: "nzValueProperty", nzLabelProperty: "nzLabelProperty", nzMouseEnterDelay: "nzMouseEnterDelay", nzMouseLeaveDelay: "nzMouseLeaveDelay", nzTriggerAction: "nzTriggerAction", nzOptions: "nzOptions", nzColumnClassName: "nzColumnClassName", nzLabelRender: "nzLabelRender", nzNotFoundContent: "nzNotFoundContent", nzSize: "nzSize", nzShowSearch: "nzShowSearch", nzPlaceHolder: "nzPlaceHolder", nzMenuClassName: "nzMenuClassName", nzMenuStyle: "nzMenuStyle", nzChangeOn: "nzChangeOn", nzLoadData: "nzLoadData" }, outputs: { nzVisibleChange: "nzVisibleChange", nzSelectionChange: "nzSelectionChange", nzSelect: "nzSelect", nzClear: "nzClear" }, exportAs: ["nzCascader"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["forwardRef"])(( /**
                 * @return {?}
                 */() => NzCascaderComponent)),
                multi: true
            },
            NzCascaderService
        ])], ngContentSelectors: _c4, decls: 6, vars: 4, consts: [["cdkOverlayOrigin", ""], ["origin", "cdkOverlayOrigin", "trigger", ""], [4, "ngIf"], ["cdkConnectedOverlay", "", "nzConnectedOverlay", "", "cdkConnectedOverlayHasBackdrop", "", 3, "cdkConnectedOverlayOrigin", "cdkConnectedOverlayPositions", "cdkConnectedOverlayOpen", "backdropClick", "detach", "positionChange"], ["nz-input", "", 1, "ant-cascader-input", 3, "readonly", "disabled", "nzSize", "ngModel", "ngModelChange", "blur", "focus", "change"], ["input", ""], ["nz-icon", "", "nzType", "close-circle", "nzTheme", "fill", "class", "ant-cascader-picker-clear", 3, "click", 4, "ngIf"], ["nz-icon", "", "nzType", "down", "class", "ant-cascader-picker-arrow", 3, "ant-cascader-picker-arrow-expand", 4, "ngIf"], ["nz-icon", "", "nzType", "loading", "class", "ant-cascader-picker-arrow", 4, "ngIf"], [1, "ant-cascader-picker-label"], [4, "ngIf", "ngIfElse"], ["labelTemplate", ""], ["nz-icon", "", "nzType", "close-circle", "nzTheme", "fill", 1, "ant-cascader-picker-clear", 3, "click"], ["nz-icon", "", "nzType", "down", 1, "ant-cascader-picker-arrow"], ["nz-icon", "", "nzType", "loading", 1, "ant-cascader-picker-arrow"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "ant-cascader-menus", 3, "ngClass", "ngStyle", "nzNoAnimation", "mouseleave"], ["menu", ""], ["class", "ant-cascader-menu", 3, "width", "height", 4, "ngIf", "ngIfElse"], ["hasOptionsTemplate", ""], [1, "ant-cascader-menu"], [1, "ant-cascader-menu-item", "ant-cascader-menu-item-expanded", "ant-cascader-menu-item-disabled"], [3, "nzComponentName", "specificContent"], ["class", "ant-cascader-menu", 3, "ngClass", "height", "width", 4, "ngFor", "ngForOf"], [1, "ant-cascader-menu", 3, "ngClass"], ["nz-cascader-option", "", 3, "columnIndex", "nzLabelProperty", "optionTemplate", "activated", "highlightText", "option", "mouseenter", "mouseleave", "click", 4, "ngFor", "ngForOf"], ["nz-cascader-option", "", 3, "columnIndex", "nzLabelProperty", "optionTemplate", "activated", "highlightText", "option", "mouseenter", "mouseleave", "click"]], template: function NzCascaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, NzCascaderComponent_div_3_Template, 10, 22, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, NzCascaderComponent_ng_template_5_Template, 5, 9, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("backdropClick", function NzCascaderComponent_Template_ng_template_backdropClick_5_listener() { return ctx.closeMenu(); })("detach", function NzCascaderComponent_Template_ng_template_detach_5_listener() { return ctx.closeMenu(); })("positionChange", function NzCascaderComponent_Template_ng_template_positionChange_5_listener($event) { return ctx.onPositionChange($event); });
    } if (rf & 2) {
        const _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.nzShowInput);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("cdkConnectedOverlayOrigin", _r63)("cdkConnectedOverlayPositions", ctx.positions)("cdkConnectedOverlayOpen", ctx.menuVisible);
    } }, directives: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["CdkOverlayOrigin"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["CdkConnectedOverlay"], ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_8__["NzConnectedOverlayDirective"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_18__["NzInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_17__["NzIconDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgStyle"], ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_7__["NzNoAnimationDirective"], ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_16__["NzEmbedEmptyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], NzCascaderOptionComponent], encapsulation: 2, data: { animation: [ng_zorro_antd_core_animation__WEBPACK_IMPORTED_MODULE_5__["slideMotion"]] }, changeDetection: 0 });
/** @nocollapse */
NzCascaderComponent.ctorParameters = () => [
    { type: NzCascaderService },
    { type: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_12__["NzI18nService"] },
    { type: ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_6__["NzConfigService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"] },
    { type: ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_7__["NzNoAnimationDirective"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Host"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }] }
];
NzCascaderComponent.propDecorators = {
    input: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['input', { static: false },] }],
    menu: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['menu', { static: false },] }],
    overlay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["CdkConnectedOverlay"], { static: false },] }],
    cascaderItems: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChildren"], args: [NzCascaderOptionComponent,] }],
    nzOptionRender: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzShowInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzShowArrow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzAllowClear: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzAutoFocus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzChangeOnSelect: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzColumnClassName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzExpandTrigger: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzValueProperty: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzLabelRender: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzLabelProperty: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzNotFoundContent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzShowSearch: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzPlaceHolder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzMenuClassName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzMenuStyle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzMouseEnterDelay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzMouseLeaveDelay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzTriggerAction: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzChangeOn: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzLoadData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzOptions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzVisibleChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    nzSelectionChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    nzSelect: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    nzClear: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    onKeyDown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"], args: ['keydown', ['$event'],] }],
    onTriggerClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"], args: ['click',] }],
    onTriggerMouseEnter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"], args: ['mouseenter',] }],
    onTriggerMouseLeave: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"], args: ['mouseleave', ['$event'],] }]
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_9__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], NzCascaderComponent.prototype, "nzShowInput", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_9__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], NzCascaderComponent.prototype, "nzShowArrow", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_9__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], NzCascaderComponent.prototype, "nzAllowClear", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_9__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], NzCascaderComponent.prototype, "nzAutoFocus", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_9__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], NzCascaderComponent.prototype, "nzChangeOnSelect", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_9__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], NzCascaderComponent.prototype, "nzDisabled", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_6__["WithConfig"])(NZ_CONFIG_COMPONENT_NAME, 'default'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], NzCascaderComponent.prototype, "nzSize", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](NzCascaderOptionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
                selector: '[nz-cascader-option]',
                exportAs: 'nzCascaderOption',
                template: `
    <ng-container *ngIf="optionTemplate; else defaultOptionTemplate">
      <ng-template [ngTemplateOutlet]="optionTemplate" [ngTemplateOutletContext]="{ $implicit: option, index: columnIndex }"></ng-template>
    </ng-container>
    <ng-template #defaultOptionTemplate>
      <span [innerHTML]="optionLabel | nzHighlight: highlightText:'g':'ant-cascader-menu-item-keyword'"></span>
    </ng-template>
    <span *ngIf="!option.isLeaf || option.children?.length || option.loading" class="ant-cascader-menu-item-expand-icon">
      <i nz-icon [nzType]="option.loading ? 'loading' : 'right'"></i>
    </span>
  `,
                host: {
                    '[attr.title]': 'option.title || optionLabel',
                    '[class.ant-cascader-menu-item-active]': 'activated',
                    '[class.ant-cascader-menu-item-expand]': '!option.isLeaf',
                    '[class.ant-cascader-menu-item-disabled]': 'option.disabled'
                }
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"] }]; }, { optionTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], activated: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzLabelProperty: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], option: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], highlightText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], columnIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](NzCascaderService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"]
    }], function () { return []; }, null); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](NzCascaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
                selector: 'nz-cascader, [nz-cascader]',
                exportAs: 'nzCascader',
                preserveWhitespaces: false,
                template: `
    <div cdkOverlayOrigin #origin="cdkOverlayOrigin" #trigger>
      <div *ngIf="nzShowInput">
        <input
          #input
          nz-input
          class="ant-cascader-input"
          [class.ant-cascader-input-disabled]="nzDisabled"
          [class.ant-cascader-input-lg]="nzSize === 'large'"
          [class.ant-cascader-input-sm]="nzSize === 'small'"
          [attr.autoComplete]="'off'"
          [attr.placeholder]="showPlaceholder ? nzPlaceHolder || locale?.placeholder : null"
          [attr.autofocus]="nzAutoFocus ? 'autofocus' : null"
          [readonly]="!nzShowSearch"
          [disabled]="nzDisabled"
          [nzSize]="nzSize"
          [(ngModel)]="inputValue"
          (blur)="handleInputBlur()"
          (focus)="handleInputFocus()"
          (change)="$event.stopPropagation()"
        />
        <i
          *ngIf="clearIconVisible"
          nz-icon
          nzType="close-circle"
          nzTheme="fill"
          class="ant-cascader-picker-clear"
          (click)="clearSelection($event)"
        ></i>
        <i
          *ngIf="nzShowArrow && !isLoading"
          nz-icon
          nzType="down"
          class="ant-cascader-picker-arrow"
          [class.ant-cascader-picker-arrow-expand]="menuVisible"
        >
        </i>
        <i *ngIf="isLoading" nz-icon nzType="loading" class="ant-cascader-picker-arrow"></i>
        <span
          class="ant-cascader-picker-label"
          [class.ant-cascader-show-search]="!!nzShowSearch"
          [class.ant-focusd]="!!nzShowSearch && isFocused && !inputValue"
        >
          <ng-container *ngIf="!isLabelRenderTemplate; else labelTemplate">{{ labelRenderText }}</ng-container>
          <ng-template #labelTemplate>
            <ng-template [ngTemplateOutlet]="nzLabelRender" [ngTemplateOutletContext]="labelRenderContext"></ng-template>
          </ng-template>
        </span>
      </div>
      <ng-content></ng-content>
    </div>
    <ng-template
      cdkConnectedOverlay
      nzConnectedOverlay
      cdkConnectedOverlayHasBackdrop
      [cdkConnectedOverlayOrigin]="origin"
      [cdkConnectedOverlayPositions]="positions"
      (backdropClick)="closeMenu()"
      (detach)="closeMenu()"
      (positionChange)="onPositionChange($event)"
      [cdkConnectedOverlayOpen]="menuVisible"
    >
      <div
        #menu
        class="ant-cascader-menus"
        [class.ant-cascader-menus-hidden]="!menuVisible"
        [ngClass]="menuCls"
        [ngStyle]="nzMenuStyle"
        [@.disabled]="noAnimation?.nzNoAnimation"
        [nzNoAnimation]="noAnimation?.nzNoAnimation"
        [@slideMotion]="dropDownPosition"
        (mouseleave)="onTriggerMouseLeave($event)"
      >
        <ul
          *ngIf="shouldShowEmpty; else hasOptionsTemplate"
          class="ant-cascader-menu"
          [style.width]="dropdownWidthStyle"
          [style.height]="dropdownHeightStyle"
        >
          <li class="ant-cascader-menu-item ant-cascader-menu-item-expanded ant-cascader-menu-item-disabled">
            <nz-embed-empty [nzComponentName]="'cascader'" [specificContent]="nzNotFoundContent"></nz-embed-empty>
          </li>
        </ul>
        <ng-template #hasOptionsTemplate>
          <ul
            *ngFor="let options of cascaderService.columns; let i = index"
            class="ant-cascader-menu"
            [ngClass]="menuColumnCls"
            [style.height]="dropdownHeightStyle"
            [style.width]="dropdownWidthStyle"
          >
            <li
              nz-cascader-option
              *ngFor="let option of options"
              [columnIndex]="i"
              [nzLabelProperty]="nzLabelProperty"
              [optionTemplate]="nzOptionRender"
              [activated]="isOptionActivated(option, i)"
              [highlightText]="inSearchingMode ? inputValue : ''"
              [option]="option"
              (mouseenter)="onOptionMouseEnter(option, i, $event)"
              (mouseleave)="onOptionMouseLeave(option, i, $event)"
              (click)="onOptionClick(option, i, $event)"
            ></li>
          </ul>
        </ng-template>
      </div>
    </ng-template>
  `,
                animations: [ng_zorro_antd_core_animation__WEBPACK_IMPORTED_MODULE_5__["slideMotion"]],
                providers: [
                    {
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["forwardRef"])(( /**
                         * @return {?}
                         */() => NzCascaderComponent)),
                        multi: true
                    },
                    NzCascaderService
                ],
                host: {
                    '[attr.tabIndex]': '"0"',
                    '[class.ant-cascader-lg]': 'nzSize === "large"',
                    '[class.ant-cascader-sm]': 'nzSize === "small"',
                    '[class.ant-cascader-picker-disabled]': 'nzDisabled',
                    '[class.ant-cascader-picker-open]': 'menuVisible',
                    '[class.ant-cascader-picker-with-value]': '!!inputValue',
                    '[class.ant-cascader-focused]': 'isFocused'
                }
            }]
    }], function () { return [{ type: NzCascaderService }, { type: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_12__["NzI18nService"] }, { type: ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_6__["NzConfigService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"] }, { type: ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_7__["NzNoAnimationDirective"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Host"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }] }]; }, { nzOptionRender: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzShowInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzShowArrow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzAllowClear: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzAutoFocus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzChangeOnSelect: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzExpandTrigger: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzValueProperty: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzLabelProperty: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzMouseEnterDelay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzMouseLeaveDelay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzTriggerAction: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzVisibleChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }], nzSelectionChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }], nzSelect: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }], nzClear: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }], nzOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], onKeyDown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
            args: ['keydown', ['$event']]
        }], onTriggerClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
            args: ['click']
        }], onTriggerMouseEnter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
            args: ['mouseenter']
        }], onTriggerMouseLeave: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
            args: ['mouseleave', ['$event']]
        }], input: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: ['input', { static: false }]
        }], menu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: ['menu', { static: false }]
        }], overlay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["CdkConnectedOverlay"], { static: false }]
        }], cascaderItems: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChildren"],
            args: [NzCascaderOptionComponent]
        }], nzColumnClassName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzLabelRender: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzNotFoundContent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzShowSearch: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzPlaceHolder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzMenuClassName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzMenuStyle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzChangeOn: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzLoadData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: cascader.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzCascaderModule {
}
NzCascaderModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: NzCascaderModule });
NzCascaderModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function NzCascaderModule_Factory(t) { return new (t || NzCascaderModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_13__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["OverlayModule"],
            ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_15__["NzOutletModule"],
            ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_16__["NzEmptyModule"],
            ng_zorro_antd_core_highlight__WEBPACK_IMPORTED_MODULE_14__["NzHighlightModule"],
            ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_17__["NzIconModule"],
            ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_18__["NzInputModule"],
            ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_7__["NzNoAnimationModule"],
            ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_8__["NzOverlayModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](NzCascaderModule, { declarations: function () { return [NzCascaderComponent,
        NzCascaderOptionComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_13__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["OverlayModule"],
        ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_15__["NzOutletModule"],
        ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_16__["NzEmptyModule"],
        ng_zorro_antd_core_highlight__WEBPACK_IMPORTED_MODULE_14__["NzHighlightModule"],
        ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_17__["NzIconModule"],
        ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_18__["NzInputModule"],
        ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_7__["NzNoAnimationModule"],
        ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_8__["NzOverlayModule"]]; }, exports: function () { return [NzCascaderComponent]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](NzCascaderModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_13__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["OverlayModule"],
                    ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_15__["NzOutletModule"],
                    ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_16__["NzEmptyModule"],
                    ng_zorro_antd_core_highlight__WEBPACK_IMPORTED_MODULE_14__["NzHighlightModule"],
                    ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_17__["NzIconModule"],
                    ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_18__["NzInputModule"],
                    ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_7__["NzNoAnimationModule"],
                    ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_8__["NzOverlayModule"]
                ],
                declarations: [NzCascaderComponent, NzCascaderOptionComponent],
                exports: [NzCascaderComponent]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ng-zorro-antd-cascader.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ng-zorro-antd-cascader.js.map

/***/ })

};;
//# sourceMappingURL=cascader-index-module~code-editor-index-module~empty-index-module~input-index-module~space-index-module.js.map