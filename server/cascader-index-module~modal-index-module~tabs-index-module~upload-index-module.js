exports.ids = ["cascader-index-module~modal-index-module~tabs-index-module~upload-index-module"];
exports.modules = {

/***/ "KIP6":
/*!**************************************************************!*\
  !*** ./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-modal.js ***!
  \**************************************************************/
/*! exports provided: BaseModalContainerComponent, FADE_CLASS_NAME_MAP, MODAL_MASK_CLASS_NAME, ModalOptions, NZ_CONFIG_MODULE_NAME, NzModalCloseComponent, NzModalComponent, NzModalConfirmContainerComponent, NzModalContainerComponent, NzModalFooterComponent, NzModalFooterDirective, NzModalLegacyAPI, NzModalModule, NzModalRef, NzModalService, NzModalTitleComponent, ZOOM_CLASS_NAME_MAP, applyConfigDefaults, getConfigFromComponent, getValueWithConfig, nzModalAnimations, setContentInstanceParams, throwNzModalContentAlreadyAttachedError, ɵ0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseModalContainerComponent", function() { return BaseModalContainerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FADE_CLASS_NAME_MAP", function() { return FADE_CLASS_NAME_MAP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MODAL_MASK_CLASS_NAME", function() { return MODAL_MASK_CLASS_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalOptions", function() { return ModalOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NZ_CONFIG_MODULE_NAME", function() { return NZ_CONFIG_MODULE_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzModalCloseComponent", function() { return NzModalCloseComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzModalComponent", function() { return NzModalComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzModalConfirmContainerComponent", function() { return NzModalConfirmContainerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzModalContainerComponent", function() { return NzModalContainerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzModalFooterComponent", function() { return NzModalFooterComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzModalFooterDirective", function() { return NzModalFooterDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzModalLegacyAPI", function() { return NzModalLegacyAPI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzModalModule", function() { return NzModalModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzModalRef", function() { return NzModalRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzModalService", function() { return NzModalService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzModalTitleComponent", function() { return NzModalTitleComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZOOM_CLASS_NAME_MAP", function() { return ZOOM_CLASS_NAME_MAP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyConfigDefaults", function() { return applyConfigDefaults; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getConfigFromComponent", function() { return getConfigFromComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getValueWithConfig", function() { return getValueWithConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nzModalAnimations", function() { return nzModalAnimations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setContentInstanceParams", function() { return setContentInstanceParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throwNzModalContentAlreadyAttachedError", function() { return throwNzModalContentAlreadyAttachedError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ0", function() { return ɵ0; });
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/overlay */ "rDax");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/portal */ "+rOU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/core/config */ "8IHs");
/* harmony import */ var ng_zorro_antd_core_logger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/logger */ "RuSR");
/* harmony import */ var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/core/util */ "d1+9");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/a11y */ "u47x");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/i18n */ "d4FC");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/keycodes */ "FtGj");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tslib */ "zOht");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/button */ "TZWX");
/* harmony import */ var ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/core/no-animation */ "H3Kp");
/* harmony import */ var ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/core/outlet */ "fwD0");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/icon */ "MOHP");
/* harmony import */ var ng_zorro_antd_pipes__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/pipes */ "jeS+");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "uLhK");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "vdzw");





















/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */














const _c0 = ["modalElement"];
function NzModalConfirmContainerComponent_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NzModalConfirmContainerComponent_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r7.onCloseClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function NzModalConfirmContainerComponent_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", ctx_r2.config.nzTitle, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
} }
function NzModalConfirmContainerComponent_ng_template_12_Template(rf, ctx) { }
function NzModalConfirmContainerComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 17);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", ctx_r4.config.nzContent, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
} }
function NzModalConfirmContainerComponent_button_15_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NzModalConfirmContainerComponent_button_15_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r9.onCancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzLoading", !!ctx_r5.config.nzCancelLoading)("disabled", ctx_r5.config.nzCancelDisabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("cdkFocusInitial", ctx_r5.config.nzAutofocus === "cancel" || null);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r5.config.nzCancelText || ctx_r5.locale.cancelText, " ");
} }
function NzModalConfirmContainerComponent_button_16_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NzModalConfirmContainerComponent_button_16_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r11.onOk(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzType", ctx_r6.config.nzOkType)("nzLoading", !!ctx_r6.config.nzOkLoading)("disabled", ctx_r6.config.nzOkDisabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("cdkFocusInitial", ctx_r6.config.nzAutofocus === "ok" || null);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r6.config.nzOkText || ctx_r6.locale.okText, " ");
} }
function NzModalContainerComponent_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NzModalContainerComponent_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r6.onCloseClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function NzModalContainerComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 10);
} }
function NzModalContainerComponent_ng_template_7_Template(rf, ctx) { }
function NzModalContainerComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 11);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", ctx_r4.config.nzContent, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
} }
function NzModalContainerComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("cancelTriggered", function NzModalContainerComponent_div_9_Template_div_cancelTriggered_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r8.onCloseClick(); })("okTriggered", function NzModalContainerComponent_div_9_Template_div_okTriggered_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r10.onOkClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("modalRef", ctx_r5.modalRef);
} }
function NzModalComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](0);
} }
const _c1 = ["*"];
const _c2 = ["nz-modal-close", ""];
function NzModalCloseComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const closeIcon_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzType", closeIcon_r1);
} }
const _c3 = ["nz-modal-footer", ""];
function NzModalFooterComponent_ng_container_0_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 5);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", ctx_r4.config.nzTitle, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
} }
function NzModalFooterComponent_ng_container_0_ng_container_1_ng_container_2_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NzModalFooterComponent_ng_container_0_ng_container_1_ng_container_2_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const button_r7 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4); return ctx_r8.onButtonClick(button_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const button_r7 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", !ctx_r6.getButtonCallableProp(button_r7, "show"))("nzLoading", ctx_r6.getButtonCallableProp(button_r7, "loading"))("disabled", ctx_r6.getButtonCallableProp(button_r7, "disabled"))("nzType", button_r7.type)("nzShape", button_r7.shape)("nzSize", button_r7.size)("nzGhost", button_r7.ghost);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", button_r7.label, " ");
} }
function NzModalFooterComponent_ng_container_0_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzModalFooterComponent_ng_container_0_ng_container_1_ng_container_2_button_1_Template, 2, 8, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r5.buttons);
} }
function NzModalFooterComponent_ng_container_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzModalFooterComponent_ng_container_0_ng_container_1_div_1_Template, 1, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NzModalFooterComponent_ng_container_0_ng_container_1_ng_container_2_Template, 2, 1, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r3.buttonsFooter);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.buttonsFooter);
} }
const _c4 = function (a0, a1) { return { $implicit: a0, modalRef: a1 }; };
function NzModalFooterComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzModalFooterComponent_ng_container_0_ng_container_1_Template, 3, 2, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r0.config.nzFooter)("nzStringTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](2, _c4, ctx_r0.config.nzComponentParams, ctx_r0.modalRef));
} }
function NzModalFooterComponent_ng_template_1_button_0_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NzModalFooterComponent_ng_template_1_button_0_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r12.onCancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzLoading", !!ctx_r10.config.nzCancelLoading)("disabled", ctx_r10.config.nzCancelDisabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("cdkFocusInitial", ctx_r10.config.nzAutofocus === "cancel" || null);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r10.config.nzCancelText || ctx_r10.locale.cancelText, " ");
} }
function NzModalFooterComponent_ng_template_1_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NzModalFooterComponent_ng_template_1_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r14.onOk(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzType", ctx_r11.config.nzOkType)("nzLoading", !!ctx_r11.config.nzOkLoading)("disabled", ctx_r11.config.nzOkDisabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("cdkFocusInitial", ctx_r11.config.nzAutofocus === "ok" || null);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r11.config.nzOkText || ctx_r11.locale.okText, " ");
} }
function NzModalFooterComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, NzModalFooterComponent_ng_template_1_button_0_Template, 2, 4, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzModalFooterComponent_ng_template_1_button_1_Template, 2, 5, "button", 9);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.config.nzCancelText !== null);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.config.nzOkText !== null);
} }
const _c5 = ["nz-modal-title", ""];
function NzModalTitleComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", ctx_r0.config.nzTitle, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
} }
const noopFun = () => void 0;
const ɵ0 = noopFun;
class ModalOptions {
    constructor() {
        this.nzClosable = true;
        this.nzOkLoading = false;
        this.nzOkDisabled = false;
        this.nzCancelDisabled = false;
        this.nzCancelLoading = false;
        this.nzNoAnimation = false;
        this.nzAutofocus = 'auto';
        this.nzKeyboard = true;
        this.nzZIndex = 1000;
        this.nzWidth = 520;
        this.nzCloseIcon = 'close';
        this.nzOkType = 'primary';
        this.nzModalType = 'default';
        this.nzOnCancel = noopFun;
        this.nzOnOk = noopFun;
        // Confirm
        this.nzIconType = 'question-circle';
    }
}

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
const ZOOM_CLASS_NAME_MAP = {
    enter: 'zoom-enter',
    enterActive: 'zoom-enter-active',
    leave: 'zoom-leave',
    leaveActive: 'zoom-leave-active'
};
const FADE_CLASS_NAME_MAP = {
    enter: 'fade-enter',
    enterActive: 'fade-enter-active',
    leave: 'fade-leave',
    leaveActive: 'fade-leave-active'
};
const MODAL_MASK_CLASS_NAME = 'ant-modal-mask';
const NZ_CONFIG_MODULE_NAME = 'modal';

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
const nzModalAnimations = {
    modalContainer: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_12__["trigger"])('modalContainer', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_12__["state"])('void, exit', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_12__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_12__["state"])('enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_12__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_12__["transition"])('* => enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_12__["animate"])('.24s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_12__["style"])({}))),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_12__["transition"])('* => void, * => exit', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_12__["animate"])('.2s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_12__["style"])({})))
    ])
};

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
function applyConfigDefaults(config, defaultOptions) {
    return Object.assign(Object.assign({}, defaultOptions), config);
}
function getValueWithConfig(userValue, configValue, defaultValue) {
    return typeof userValue === 'undefined' ? (typeof configValue === 'undefined' ? defaultValue : configValue) : userValue;
}
/**
 * Assign the params into the content component instance.
 * @deprecated Should use dependency injection to get the params for user
 * @breaking-change 11.0.0
 */
function setContentInstanceParams(instance, params) {
    Object.assign(instance, params);
}
function getConfigFromComponent(component) {
    const { nzMask, nzMaskClosable, nzClosable, nzOkLoading, nzOkDisabled, nzCancelDisabled, nzCancelLoading, nzKeyboard, nzNoAnimation, nzContent, nzComponentParams, nzFooter, nzGetContainer, nzZIndex, nzWidth, nzWrapClassName, nzClassName, nzStyle, nzTitle, nzCloseIcon, nzMaskStyle, nzBodyStyle, nzOkText, nzCancelText, nzOkType, nzIconType, nzModalType, nzOnOk, nzOnCancel, nzAfterOpen, nzAfterClose, nzCloseOnNavigation, nzAutofocus } = component;
    return {
        nzMask,
        nzMaskClosable,
        nzClosable,
        nzOkLoading,
        nzOkDisabled,
        nzCancelDisabled,
        nzCancelLoading,
        nzKeyboard,
        nzNoAnimation,
        nzContent,
        nzComponentParams,
        nzFooter,
        nzGetContainer,
        nzZIndex,
        nzWidth,
        nzWrapClassName,
        nzClassName,
        nzStyle,
        nzTitle,
        nzCloseIcon,
        nzMaskStyle,
        nzBodyStyle,
        nzOkText,
        nzCancelText,
        nzOkType,
        nzIconType,
        nzModalType,
        nzOnOk,
        nzOnCancel,
        nzAfterOpen,
        nzAfterClose,
        nzCloseOnNavigation,
        nzAutofocus
    };
}

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
function throwNzModalContentAlreadyAttachedError() {
    throw Error('Attempting to attach modal content after content is already attached');
}
class BaseModalContainerComponent extends _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["BasePortalOutlet"] {
    constructor(elementRef, focusTrapFactory, cdr, render, overlayRef, nzConfigService, config, document, animationType) {
        super();
        this.elementRef = elementRef;
        this.focusTrapFactory = focusTrapFactory;
        this.cdr = cdr;
        this.render = render;
        this.overlayRef = overlayRef;
        this.nzConfigService = nzConfigService;
        this.config = config;
        this.animationType = animationType;
        this.animationStateChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.containerClick = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.cancelTriggered = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.okTriggered = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.state = 'enter';
        this.isStringContent = false;
        this.elementFocusedBeforeModalWasOpened = null;
        this.mouseDown = false;
        this.oldMaskStyle = null;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.document = document;
        this.isStringContent = typeof config.nzContent === 'string';
        this.setContainer();
        this.nzConfigService
            .getConfigChangeEventForComponent(NZ_CONFIG_MODULE_NAME)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.destroy$))
            .subscribe(() => {
            this.updateMaskClassname();
        });
    }
    get showMask() {
        const defaultConfig = this.nzConfigService.getConfigForComponent(NZ_CONFIG_MODULE_NAME) || {};
        return !!getValueWithConfig(this.config.nzMask, defaultConfig.nzMask, true);
    }
    get maskClosable() {
        const defaultConfig = this.nzConfigService.getConfigForComponent(NZ_CONFIG_MODULE_NAME) || {};
        return !!getValueWithConfig(this.config.nzMaskClosable, defaultConfig.nzMaskClosable, true);
    }
    onContainerClick(e) {
        if (e.target === e.currentTarget && !this.mouseDown && this.showMask && this.maskClosable) {
            this.containerClick.emit();
        }
    }
    onMousedown() {
        this.mouseDown = true;
    }
    onMouseup() {
        if (this.mouseDown) {
            setTimeout(() => {
                this.mouseDown = false;
            });
        }
    }
    onCloseClick() {
        this.cancelTriggered.emit();
    }
    onOkClick() {
        this.okTriggered.emit();
    }
    attachComponentPortal(portal) {
        if (this.portalOutlet.hasAttached()) {
            throwNzModalContentAlreadyAttachedError();
        }
        this.savePreviouslyFocusedElement();
        this.setModalTransformOrigin();
        return this.portalOutlet.attachComponentPortal(portal);
    }
    attachTemplatePortal(portal) {
        if (this.portalOutlet.hasAttached()) {
            throwNzModalContentAlreadyAttachedError();
        }
        this.savePreviouslyFocusedElement();
        return this.portalOutlet.attachTemplatePortal(portal);
    }
    attachStringContent() {
        this.savePreviouslyFocusedElement();
    }
    getNativeElement() {
        return this.elementRef.nativeElement;
    }
    animationDisabled() {
        return this.config.nzNoAnimation || this.animationType === 'NoopAnimations';
    }
    setModalTransformOrigin() {
        const modalElement = this.modalElementRef.nativeElement;
        if (this.elementFocusedBeforeModalWasOpened) {
            const previouslyDOMRect = this.elementFocusedBeforeModalWasOpened.getBoundingClientRect();
            const lastPosition = Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__["getElementOffset"])(this.elementFocusedBeforeModalWasOpened);
            const x = lastPosition.left + previouslyDOMRect.width / 2;
            const y = lastPosition.top + previouslyDOMRect.height / 2;
            const transformOrigin = `${x - modalElement.offsetLeft}px ${y - modalElement.offsetTop}px 0px`;
            this.render.setStyle(modalElement, 'transform-origin', transformOrigin);
        }
    }
    savePreviouslyFocusedElement() {
        if (!this.focusTrap) {
            this.focusTrap = this.focusTrapFactory.create(this.elementRef.nativeElement);
        }
        if (this.document) {
            this.elementFocusedBeforeModalWasOpened = this.document.activeElement;
            if (this.elementRef.nativeElement.focus) {
                Promise.resolve().then(() => this.elementRef.nativeElement.focus());
            }
        }
    }
    trapFocus() {
        const element = this.elementRef.nativeElement;
        if (this.config.nzAutofocus) {
            this.focusTrap.focusInitialElementWhenReady().then();
        }
        else {
            const activeElement = this.document.activeElement;
            if (activeElement !== element && !element.contains(activeElement)) {
                element.focus();
            }
        }
    }
    restoreFocus() {
        const toFocus = this.elementFocusedBeforeModalWasOpened;
        // We need the extra check, because IE can set the `activeElement` to null in some cases.
        if (toFocus && typeof toFocus.focus === 'function') {
            const activeElement = this.document.activeElement;
            const element = this.elementRef.nativeElement;
            if (!activeElement || activeElement === this.document.body || activeElement === element || element.contains(activeElement)) {
                toFocus.focus();
            }
        }
        if (this.focusTrap) {
            this.focusTrap.destroy();
        }
    }
    setEnterAnimationClass() {
        if (this.animationDisabled()) {
            return;
        }
        // Make sure to set the `TransformOrigin` style before set the modelElement's class names
        this.setModalTransformOrigin();
        const modalElement = this.modalElementRef.nativeElement;
        const backdropElement = this.overlayRef.backdropElement;
        modalElement.classList.add(ZOOM_CLASS_NAME_MAP.enter);
        modalElement.classList.add(ZOOM_CLASS_NAME_MAP.enterActive);
        if (backdropElement) {
            backdropElement.classList.add(FADE_CLASS_NAME_MAP.enter);
            backdropElement.classList.add(FADE_CLASS_NAME_MAP.enterActive);
        }
    }
    setExitAnimationClass() {
        const modalElement = this.modalElementRef.nativeElement;
        modalElement.classList.add(ZOOM_CLASS_NAME_MAP.leave);
        modalElement.classList.add(ZOOM_CLASS_NAME_MAP.leaveActive);
        this.setMaskExitAnimationClass();
    }
    setMaskExitAnimationClass(force = false) {
        const backdropElement = this.overlayRef.backdropElement;
        if (backdropElement) {
            if (this.animationDisabled() || force) {
                // https://github.com/angular/components/issues/18645
                backdropElement.classList.remove(MODAL_MASK_CLASS_NAME);
                return;
            }
            backdropElement.classList.add(FADE_CLASS_NAME_MAP.leave);
            backdropElement.classList.add(FADE_CLASS_NAME_MAP.leaveActive);
        }
    }
    cleanAnimationClass() {
        if (this.animationDisabled()) {
            return;
        }
        const backdropElement = this.overlayRef.backdropElement;
        const modalElement = this.modalElementRef.nativeElement;
        if (backdropElement) {
            backdropElement.classList.remove(FADE_CLASS_NAME_MAP.enter);
            backdropElement.classList.remove(FADE_CLASS_NAME_MAP.enterActive);
        }
        modalElement.classList.remove(ZOOM_CLASS_NAME_MAP.enter);
        modalElement.classList.remove(ZOOM_CLASS_NAME_MAP.enterActive);
        modalElement.classList.remove(ZOOM_CLASS_NAME_MAP.leave);
        modalElement.classList.remove(ZOOM_CLASS_NAME_MAP.leaveActive);
    }
    bindBackdropStyle() {
        const backdropElement = this.overlayRef.backdropElement;
        if (backdropElement) {
            if (this.oldMaskStyle) {
                const styles = this.oldMaskStyle;
                Object.keys(styles).forEach(key => {
                    this.render.removeStyle(backdropElement, key);
                });
                this.oldMaskStyle = null;
            }
            if (typeof this.config.nzMaskStyle === 'object' && Object.keys(this.config.nzMaskStyle).length) {
                const styles = Object.assign({}, this.config.nzMaskStyle);
                Object.keys(styles).forEach(key => {
                    this.render.setStyle(backdropElement, key, styles[key]);
                });
                this.oldMaskStyle = styles;
            }
        }
    }
    setContainer() {
        const container = this.getContainer();
        if (container) {
            this.render.appendChild(container, this.elementRef.nativeElement);
        }
    }
    resetContainer() {
        const container = this.getContainer();
        if (container) {
            this.render.appendChild(this.overlayRef.overlayElement, this.elementRef.nativeElement);
        }
    }
    /**
     * Set the container element.
     * @deprecated Not supported.
     * @breaking-change 11.0.0
     */
    getContainer() {
        const { nzGetContainer } = this.config;
        const container = typeof nzGetContainer === 'function' ? nzGetContainer() : nzGetContainer;
        if (container instanceof HTMLElement) {
            Object(ng_zorro_antd_core_logger__WEBPACK_IMPORTED_MODULE_4__["warnDeprecation"])('nzGetContainer of nz-modal is not support, will be removed in 11.0.0');
            return container;
        }
        else {
            return null;
        }
    }
    updateMaskClassname() {
        const backdropElement = this.overlayRef.backdropElement;
        if (backdropElement) {
            if (this.showMask) {
                backdropElement.classList.add(MODAL_MASK_CLASS_NAME);
            }
            else {
                backdropElement.classList.remove(MODAL_MASK_CLASS_NAME);
            }
        }
    }
    onAnimationDone(event) {
        if (event.toState === 'enter') {
            this.setContainer();
            this.trapFocus();
        }
        else if (event.toState === 'exit') {
            this.restoreFocus();
        }
        this.cleanAnimationClass();
        this.animationStateChanged.emit(event);
    }
    onAnimationStart(event) {
        if (event.toState === 'enter') {
            this.setEnterAnimationClass();
            this.bindBackdropStyle();
        }
        else if (event.toState === 'exit') {
            this.resetContainer();
            this.setExitAnimationClass();
        }
        this.animationStateChanged.emit(event);
    }
    startExitAnimation() {
        this.state = 'exit';
        this.cdr.markForCheck();
    }
    ngOnDestroy() {
        this.setMaskExitAnimationClass(true);
        this.destroy$.next();
        this.destroy$.complete();
    }
}
/** @nocollapse */
BaseModalContainerComponent.ɵfac = function BaseModalContainerComponent_Factory(t) { return new (t || BaseModalContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__["FocusTrapFactory"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_3__["NzConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ModalOptions), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](undefined), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](String)); };
/** @nocollapse */
BaseModalContainerComponent.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: BaseModalContainerComponent, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]] });
BaseModalContainerComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
    { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__["FocusTrapFactory"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"] },
    { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayRef"] },
    { type: ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_3__["NzConfigService"] },
    { type: ModalOptions },
    { type: undefined },
    { type: String }
];

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzModalConfirmContainerComponent extends BaseModalContainerComponent {
    constructor(i18n, elementRef, focusTrapFactory, cdr, render, overlayRef, nzConfigService, config, document, animationType) {
        super(elementRef, focusTrapFactory, cdr, render, overlayRef, nzConfigService, config, document, animationType);
        this.i18n = i18n;
        this.config = config;
        this.cancelTriggered = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.okTriggered = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.i18n.localeChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.destroy$)).subscribe(() => {
            this.locale = this.i18n.getLocaleData('Modal');
        });
    }
    onCancel() {
        this.cancelTriggered.emit();
    }
    onOk() {
        this.okTriggered.emit();
    }
}
/** @nocollapse */
NzModalConfirmContainerComponent.ɵfac = function NzModalConfirmContainerComponent_Factory(t) { return new (t || NzModalConfirmContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_11__["NzI18nService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__["FocusTrapFactory"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_3__["NzConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ModalOptions), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_9__["DOCUMENT"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ANIMATION_MODULE_TYPE"], 8)); };
/** @nocollapse */
NzModalConfirmContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NzModalConfirmContainerComponent, selectors: [["nz-modal-confirm-container"]], viewQuery: function NzModalConfirmContainerComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstaticViewQuery"](_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["CdkPortalOutlet"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.portalOutlet = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.modalElementRef = _t.first);
    } }, hostAttrs: ["tabindex", "-1", "role", "dialog"], hostVars: 6, hostBindings: function NzModalConfirmContainerComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsyntheticHostListener"]("@modalContainer.start", function NzModalConfirmContainerComponent_animation_modalContainer_start_HostBindingHandler($event) { return ctx.onAnimationStart($event); })("@modalContainer.done", function NzModalConfirmContainerComponent_animation_modalContainer_done_HostBindingHandler($event) { return ctx.onAnimationDone($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NzModalConfirmContainerComponent_click_HostBindingHandler($event) { return ctx.onContainerClick($event); })("mouseup", function NzModalConfirmContainerComponent_mouseup_HostBindingHandler() { return ctx.onMouseup(); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsyntheticHostProperty"]("@.disabled", ctx.config.nzNoAnimation)("@modalContainer", ctx.state);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx.config.nzWrapClassName ? "ant-modal-wrap " + ctx.config.nzWrapClassName : "ant-modal-wrap");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("z-index", ctx.config.nzZIndex);
    } }, outputs: { cancelTriggered: "cancelTriggered", okTriggered: "okTriggered" }, exportAs: ["nzModalConfirmContainer"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 17, vars: 13, consts: [["role", "document", 1, "ant-modal", 3, "ngClass", "ngStyle", "mousedown"], ["modalElement", ""], [1, "ant-modal-content"], ["nz-modal-close", "", 3, "click", 4, "ngIf"], [1, "ant-modal-body", 3, "ngStyle"], [1, "ant-modal-confirm-body-wrapper"], [1, "ant-modal-confirm-body"], ["nz-icon", "", 3, "nzType"], [1, "ant-modal-confirm-title"], [4, "nzStringTemplateOutlet"], [1, "ant-modal-confirm-content"], ["cdkPortalOutlet", ""], [3, "innerHTML", 4, "ngIf"], [1, "ant-modal-confirm-btns"], ["nz-button", "", 3, "nzLoading", "disabled", "click", 4, "ngIf"], ["nz-button", "", 3, "nzType", "nzLoading", "disabled", "click", 4, "ngIf"], ["nz-modal-close", "", 3, "click"], [3, "innerHTML"], ["nz-button", "", 3, "nzLoading", "disabled", "click"], ["nz-button", "", 3, "nzType", "nzLoading", "disabled", "click"]], template: function NzModalConfirmContainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mousedown", function NzModalConfirmContainerComponent_Template_div_mousedown_0_listener() { return ctx.onMousedown(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "nzToCssUnit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, NzModalConfirmContainerComponent_button_4_Template, 1, 0, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, NzModalConfirmContainerComponent_ng_container_10_Template, 2, 1, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, NzModalConfirmContainerComponent_ng_template_12_Template, 0, 0, "ng-template", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, NzModalConfirmContainerComponent_div_13_Template, 1, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, NzModalConfirmContainerComponent_button_15_Template, 2, 4, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, NzModalConfirmContainerComponent_button_16_Template, 2, 5, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("width", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 11, ctx.config == null ? null : ctx.config.nzWidth));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.config.nzClassName)("ngStyle", ctx.config.nzStyle);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.config.nzClosable);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", ctx.config.nzBodyStyle);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzType", ctx.config.nzIconType);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzStringTemplateOutlet", ctx.config.nzTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isStringContent);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.config.nzCancelText !== null);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.config.nzOkText !== null);
    } }, directives: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_20__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_18__["NzIconDirective"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_17__["NzStringTemplateOutletDirective"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["CdkPortalOutlet"], NzModalCloseComponent, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_15__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_21__["NzWaveDirective"]]; }, pipes: function () { return [ng_zorro_antd_pipes__WEBPACK_IMPORTED_MODULE_19__["NzToCssUnitPipe"]]; }, encapsulation: 2, data: { animation: [nzModalAnimations.modalContainer] } });
NzModalConfirmContainerComponent.ctorParameters = () => [
    { type: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_11__["NzI18nService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
    { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__["FocusTrapFactory"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"] },
    { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayRef"] },
    { type: ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_3__["NzConfigService"] },
    { type: ModalOptions },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["DOCUMENT"],] }] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ANIMATION_MODULE_TYPE"],] }] }
];
NzModalConfirmContainerComponent.propDecorators = {
    portalOutlet: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["CdkPortalOutlet"], { static: true },] }],
    modalElementRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['modalElement', { static: true },] }],
    cancelTriggered: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
    okTriggered: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }]
};

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzModalContainerComponent extends BaseModalContainerComponent {
    constructor(elementRef, focusTrapFactory, cdr, render, overlayRef, nzConfigService, config, document, animationType) {
        super(elementRef, focusTrapFactory, cdr, render, overlayRef, nzConfigService, config, document, animationType);
        this.config = config;
    }
}
/** @nocollapse */
NzModalContainerComponent.ɵfac = function NzModalContainerComponent_Factory(t) { return new (t || NzModalContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__["FocusTrapFactory"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_3__["NzConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ModalOptions), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_9__["DOCUMENT"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ANIMATION_MODULE_TYPE"], 8)); };
/** @nocollapse */
NzModalContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NzModalContainerComponent, selectors: [["nz-modal-container"]], viewQuery: function NzModalContainerComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstaticViewQuery"](_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["CdkPortalOutlet"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.portalOutlet = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.modalElementRef = _t.first);
    } }, hostAttrs: ["tabindex", "-1", "role", "dialog"], hostVars: 6, hostBindings: function NzModalContainerComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsyntheticHostListener"]("@modalContainer.start", function NzModalContainerComponent_animation_modalContainer_start_HostBindingHandler($event) { return ctx.onAnimationStart($event); })("@modalContainer.done", function NzModalContainerComponent_animation_modalContainer_done_HostBindingHandler($event) { return ctx.onAnimationDone($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NzModalContainerComponent_click_HostBindingHandler($event) { return ctx.onContainerClick($event); })("mouseup", function NzModalContainerComponent_mouseup_HostBindingHandler() { return ctx.onMouseup(); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsyntheticHostProperty"]("@.disabled", ctx.config.nzNoAnimation)("@modalContainer", ctx.state);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx.config.nzWrapClassName ? "ant-modal-wrap " + ctx.config.nzWrapClassName : "ant-modal-wrap");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("z-index", ctx.config.nzZIndex);
    } }, exportAs: ["nzModalContainer"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 10, vars: 11, consts: [["role", "document", 1, "ant-modal", 3, "ngClass", "ngStyle", "mousedown"], ["modalElement", ""], [1, "ant-modal-content"], ["nz-modal-close", "", 3, "click", 4, "ngIf"], ["nz-modal-title", "", 4, "ngIf"], [1, "ant-modal-body", 3, "ngStyle"], ["cdkPortalOutlet", ""], [3, "innerHTML", 4, "ngIf"], ["nz-modal-footer", "", 3, "modalRef", "cancelTriggered", "okTriggered", 4, "ngIf"], ["nz-modal-close", "", 3, "click"], ["nz-modal-title", ""], [3, "innerHTML"], ["nz-modal-footer", "", 3, "modalRef", "cancelTriggered", "okTriggered"]], template: function NzModalContainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mousedown", function NzModalContainerComponent_Template_div_mousedown_0_listener() { return ctx.onMousedown(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "nzToCssUnit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, NzModalContainerComponent_button_4_Template, 1, 0, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, NzModalContainerComponent_div_5_Template, 1, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, NzModalContainerComponent_ng_template_7_Template, 0, 0, "ng-template", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, NzModalContainerComponent_div_8_Template, 1, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, NzModalContainerComponent_div_9_Template, 1, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("width", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 9, ctx.config == null ? null : ctx.config.nzWidth));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.config.nzClassName)("ngStyle", ctx.config.nzStyle);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.config.nzClosable);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.config.nzTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", ctx.config.nzBodyStyle);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isStringContent);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.config.nzFooter !== null);
    } }, directives: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["CdkPortalOutlet"], NzModalCloseComponent, NzModalTitleComponent, NzModalFooterComponent]; }, pipes: function () { return [ng_zorro_antd_pipes__WEBPACK_IMPORTED_MODULE_19__["NzToCssUnitPipe"]]; }, encapsulation: 2, data: { animation: [nzModalAnimations.modalContainer] } });
NzModalContainerComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
    { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__["FocusTrapFactory"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"] },
    { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayRef"] },
    { type: ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_3__["NzConfigService"] },
    { type: ModalOptions },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["DOCUMENT"],] }] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ANIMATION_MODULE_TYPE"],] }] }
];
NzModalContainerComponent.propDecorators = {
    portalOutlet: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["CdkPortalOutlet"], { static: true },] }],
    modalElementRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['modalElement', { static: true },] }]
};

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzModalRef {
    constructor(overlayRef, config, containerInstance) {
        this.overlayRef = overlayRef;
        this.config = config;
        this.containerInstance = containerInstance;
        this.componentInstance = null;
        this.state = 0 /* OPEN */;
        this.afterClose = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.afterOpen = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        containerInstance.animationStateChanged
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])(event => event.phaseName === 'done' && event.toState === 'enter'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1))
            .subscribe(() => {
            this.afterOpen.next();
            this.afterOpen.complete();
            if (config.nzAfterOpen instanceof _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]) {
                config.nzAfterOpen.emit();
            }
        });
        containerInstance.animationStateChanged
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])(event => event.phaseName === 'done' && event.toState === 'exit'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1))
            .subscribe(() => {
            clearTimeout(this.closeTimeout);
            this._finishDialogClose();
        });
        containerInstance.containerClick.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1)).subscribe(() => {
            const cancelable = !this.config.nzCancelLoading && !this.config.nzOkLoading;
            if (cancelable) {
                this.trigger("cancel" /* CANCEL */);
            }
        });
        overlayRef
            .keydownEvents()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])(event => {
            return (this.config.nzKeyboard &&
                !this.config.nzCancelLoading &&
                !this.config.nzOkLoading &&
                event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_13__["ESCAPE"] &&
                !Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_13__["hasModifierKey"])(event));
        }))
            .subscribe(event => {
            event.preventDefault();
            this.trigger("cancel" /* CANCEL */);
        });
        containerInstance.cancelTriggered.subscribe(() => this.trigger("cancel" /* CANCEL */));
        containerInstance.okTriggered.subscribe(() => this.trigger("ok" /* OK */));
        overlayRef.detachments().subscribe(() => {
            this.afterClose.next(this.result);
            this.afterClose.complete();
            if (config.nzAfterClose instanceof _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]) {
                config.nzAfterClose.emit(this.result);
            }
            this.componentInstance = null;
            this.overlayRef.dispose();
        });
    }
    getContentComponent() {
        return this.componentInstance;
    }
    getElement() {
        return this.containerInstance.getNativeElement();
    }
    destroy(result) {
        this.close(result);
    }
    triggerOk() {
        this.trigger("ok" /* OK */);
    }
    triggerCancel() {
        this.trigger("cancel" /* CANCEL */);
    }
    /**
     * Open the modal.
     * @deprecated Opened when create, this method is useless.
     * @breaking-change 11.0.0
     */
    open() {
        Object(ng_zorro_antd_core_logger__WEBPACK_IMPORTED_MODULE_4__["warnDeprecation"])('open of NzModalRef is not support, will be removed in 11.0.0');
    }
    close(result) {
        this.result = result;
        this.containerInstance.animationStateChanged
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])(event => event.phaseName === 'start'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1))
            .subscribe(event => {
            this.overlayRef.detachBackdrop();
            this.closeTimeout = setTimeout(() => {
                this._finishDialogClose();
            }, event.totalTime + 100);
        });
        this.containerInstance.startExitAnimation();
        this.state = 1 /* CLOSING */;
    }
    updateConfig(config) {
        Object.assign(this.config, config);
        this.containerInstance.bindBackdropStyle();
        this.containerInstance.cdr.markForCheck();
    }
    getState() {
        return this.state;
    }
    getConfig() {
        return this.config;
    }
    getBackdropElement() {
        return this.overlayRef.backdropElement;
    }
    trigger(action) {
        const trigger = { ok: this.config.nzOnOk, cancel: this.config.nzOnCancel }[action];
        const loadingKey = { ok: 'nzOkLoading', cancel: 'nzCancelLoading' }[action];
        const loading = this.config[loadingKey];
        if (loading) {
            return;
        }
        if (trigger instanceof _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]) {
            trigger.emit(this.getContentComponent());
        }
        else if (typeof trigger === 'function') {
            const result = trigger(this.getContentComponent());
            const caseClose = (doClose) => doClose !== false && this.close(doClose);
            if (Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__["isPromise"])(result)) {
                this.config[loadingKey] = true;
                const handleThen = (doClose) => {
                    this.config[loadingKey] = false;
                    this.closeWhitResult(doClose);
                };
                result.then(handleThen).catch(handleThen);
            }
            else {
                caseClose(result);
            }
        }
    }
    closeWhitResult(result) {
        if (result !== false) {
            this.close(result);
        }
    }
    _finishDialogClose() {
        this.state = 2 /* CLOSED */;
        this.overlayRef.dispose();
    }
}

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzModalService {
    constructor(overlay, injector, nzConfigService, parentModal) {
        this.overlay = overlay;
        this.injector = injector;
        this.nzConfigService = nzConfigService;
        this.parentModal = parentModal;
        this.openModalsAtThisLevel = [];
        this.afterAllClosedAtThisLevel = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.afterAllClose = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["defer"])(() => this.openModals.length ? this._afterAllClosed : this._afterAllClosed.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(undefined)));
    }
    get openModals() {
        return this.parentModal ? this.parentModal.openModals : this.openModalsAtThisLevel;
    }
    get _afterAllClosed() {
        const parent = this.parentModal;
        return parent ? parent._afterAllClosed : this.afterAllClosedAtThisLevel;
    }
    create(config) {
        return this.open(config.nzContent, config);
    }
    closeAll() {
        this.closeModals(this.openModals);
    }
    confirm(options = {}, confirmType = 'confirm') {
        if ('nzFooter' in options) {
            Object(ng_zorro_antd_core_logger__WEBPACK_IMPORTED_MODULE_4__["warn"])(`The Confirm-Modal doesn't support "nzFooter", this property will be ignored.`);
        }
        if (!('nzWidth' in options)) {
            options.nzWidth = 416;
        }
        if (!('nzMaskClosable' in options)) {
            options.nzMaskClosable = false;
        }
        options.nzModalType = 'confirm';
        options.nzClassName = `ant-modal-confirm ant-modal-confirm-${confirmType} ${options.nzClassName || ''}`;
        return this.create(options);
    }
    info(options = {}) {
        return this.confirmFactory(options, 'info');
    }
    success(options = {}) {
        return this.confirmFactory(options, 'success');
    }
    error(options = {}) {
        return this.confirmFactory(options, 'error');
    }
    warning(options = {}) {
        return this.confirmFactory(options, 'warning');
    }
    open(componentOrTemplateRef, config) {
        const configMerged = applyConfigDefaults(config || {}, new ModalOptions());
        const overlayRef = this.createOverlay(configMerged);
        const modalContainer = this.attachModalContainer(overlayRef, configMerged);
        const modalRef = this.attachModalContent(componentOrTemplateRef, modalContainer, overlayRef, configMerged);
        modalContainer.modalRef = modalRef;
        this.openModals.push(modalRef);
        modalRef.afterClose.subscribe(() => this.removeOpenModal(modalRef));
        return modalRef;
    }
    removeOpenModal(modalRef) {
        const index = this.openModals.indexOf(modalRef);
        if (index > -1) {
            this.openModals.splice(index, 1);
            if (!this.openModals.length) {
                this._afterAllClosed.next();
            }
        }
    }
    closeModals(dialogs) {
        let i = dialogs.length;
        while (i--) {
            dialogs[i].close();
            if (!this.openModals.length) {
                this._afterAllClosed.next();
            }
        }
    }
    createOverlay(config) {
        const globalConfig = this.nzConfigService.getConfigForComponent(NZ_CONFIG_MODULE_NAME) || {};
        const overlayConfig = new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayConfig"]({
            hasBackdrop: true,
            scrollStrategy: this.overlay.scrollStrategies.block(),
            positionStrategy: this.overlay.position().global(),
            disposeOnNavigation: getValueWithConfig(config.nzCloseOnNavigation, globalConfig.nzCloseOnNavigation, true)
        });
        if (getValueWithConfig(config.nzMask, globalConfig.nzMask, true)) {
            overlayConfig.backdropClass = MODAL_MASK_CLASS_NAME;
        }
        return this.overlay.create(overlayConfig);
    }
    attachModalContainer(overlayRef, config) {
        const userInjector = config && config.nzViewContainerRef && config.nzViewContainerRef.injector;
        const injector = _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"].create({
            parent: userInjector || this.injector,
            providers: [
                { provide: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayRef"], useValue: overlayRef },
                { provide: ModalOptions, useValue: config }
            ]
        });
        const ContainerComponent = config.nzModalType === 'confirm'
            ? // If the mode is `confirm`, use `NzModalConfirmContainerComponent`
                NzModalConfirmContainerComponent
            : // If the mode is not `confirm`, use `NzModalContainerComponent`
                NzModalContainerComponent;
        const containerPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["ComponentPortal"](ContainerComponent, config.nzViewContainerRef, injector);
        const containerRef = overlayRef.attach(containerPortal);
        return containerRef.instance;
    }
    attachModalContent(componentOrTemplateRef, modalContainer, overlayRef, config) {
        const modalRef = new NzModalRef(overlayRef, config, modalContainer);
        if (componentOrTemplateRef instanceof _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"]) {
            modalContainer.attachTemplatePortal(new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["TemplatePortal"](componentOrTemplateRef, null, { $implicit: config.nzComponentParams, modalRef }));
        }
        else if (Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__["isNotNil"])(componentOrTemplateRef) && typeof componentOrTemplateRef !== 'string') {
            const injector = this.createInjector(modalRef, config);
            const contentRef = modalContainer.attachComponentPortal(new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["ComponentPortal"](componentOrTemplateRef, config.nzViewContainerRef, injector));
            setContentInstanceParams(contentRef.instance, config.nzComponentParams);
            modalRef.componentInstance = contentRef.instance;
        }
        else {
            modalContainer.attachStringContent();
        }
        return modalRef;
    }
    createInjector(modalRef, config) {
        const userInjector = config && config.nzViewContainerRef && config.nzViewContainerRef.injector;
        return _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"].create({
            parent: userInjector || this.injector,
            providers: [{ provide: NzModalRef, useValue: modalRef }]
        });
    }
    confirmFactory(options = {}, confirmType) {
        const iconMap = {
            info: 'info-circle',
            success: 'check-circle',
            error: 'close-circle',
            warning: 'exclamation-circle'
        };
        if (!('nzIconType' in options)) {
            options.nzIconType = iconMap[confirmType];
        }
        if (!('nzCancelText' in options)) {
            // Remove the Cancel button if the user not specify a Cancel button
            options.nzCancelText = null;
        }
        return this.confirm(options, confirmType);
    }
    ngOnDestroy() {
        this.closeModals(this.openModalsAtThisLevel);
        this.afterAllClosedAtThisLevel.complete();
    }
}
/** @nocollapse */
NzModalService.ɵfac = function NzModalService_Factory(t) { return new (t || NzModalService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_3__["NzConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](NzModalService, 12)); };
/** @nocollapse */
NzModalService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: NzModalService, factory: NzModalService.ɵfac });
NzModalService.ctorParameters = () => [
    { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"] },
    { type: ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_3__["NzConfigService"] },
    { type: NzModalService, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["SkipSelf"] }] }
];

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzModalFooterDirective {
    constructor(nzModalRef, templateRef) {
        this.nzModalRef = nzModalRef;
        this.templateRef = templateRef;
        if (this.nzModalRef) {
            this.nzModalRef.updateConfig({
                nzFooter: this.templateRef
            });
        }
    }
}
/** @nocollapse */
NzModalFooterDirective.ɵfac = function NzModalFooterDirective_Factory(t) { return new (t || NzModalFooterDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](NzModalRef, 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"])); };
/** @nocollapse */
NzModalFooterDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: NzModalFooterDirective, selectors: [["", "nzModalFooter", ""]], exportAs: ["nzModalFooter"] });
NzModalFooterDirective.ctorParameters = () => [
    { type: NzModalRef, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"] }
];

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzModalComponent {
    constructor(cdr, modal, viewContainerRef) {
        this.cdr = cdr;
        this.modal = modal;
        this.viewContainerRef = viewContainerRef;
        this.nzVisible = false;
        this.nzClosable = true;
        this.nzOkLoading = false;
        this.nzOkDisabled = false;
        this.nzCancelDisabled = false;
        this.nzCancelLoading = false;
        this.nzKeyboard = true;
        this.nzNoAnimation = false;
        this.nzZIndex = 1000;
        this.nzWidth = 520;
        this.nzCloseIcon = 'close';
        this.nzOkType = 'primary';
        this.nzIconType = 'question-circle'; // Confirm Modal ONLY
        this.nzModalType = 'default';
        this.nzAutofocus = 'auto';
        // TODO(@hsuanxyz) Input will not be supported
        this.nzOnOk = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        // TODO(@hsuanxyz) Input will not be supported
        this.nzOnCancel = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.nzAfterOpen = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.nzAfterClose = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.nzVisibleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.modalRef = null;
    }
    set modalFooter(value) {
        if (value && value.templateRef) {
            this.setFooterWithTemplate(value.templateRef);
        }
    }
    get afterOpen() {
        // Observable alias for nzAfterOpen
        return this.nzAfterOpen.asObservable();
    }
    get afterClose() {
        // Observable alias for nzAfterClose
        return this.nzAfterClose.asObservable();
    }
    open() {
        if (!this.nzVisible) {
            this.nzVisible = true;
            this.nzVisibleChange.emit(true);
        }
        if (!this.modalRef) {
            const config = this.getConfig();
            this.modalRef = this.modal.create(config);
        }
    }
    close(result) {
        if (this.nzVisible) {
            this.nzVisible = false;
            this.nzVisibleChange.emit(false);
        }
        if (this.modalRef) {
            this.modalRef.close(result);
            this.modalRef = null;
        }
    }
    destroy(result) {
        this.close(result);
    }
    triggerOk() {
        var _a;
        (_a = this.modalRef) === null || _a === void 0 ? void 0 : _a.triggerOk();
    }
    triggerCancel() {
        var _a;
        (_a = this.modalRef) === null || _a === void 0 ? void 0 : _a.triggerCancel();
    }
    getContentComponent() {
        var _a;
        return (_a = this.modalRef) === null || _a === void 0 ? void 0 : _a.getContentComponent();
    }
    getElement() {
        var _a;
        return (_a = this.modalRef) === null || _a === void 0 ? void 0 : _a.getElement();
    }
    getModalRef() {
        return this.modalRef;
    }
    setFooterWithTemplate(templateRef) {
        this.nzFooter = templateRef;
        if (this.modalRef) {
            // If modalRef already created, set the footer in next tick
            Promise.resolve().then(() => {
                this.modalRef.updateConfig({
                    nzFooter: this.nzFooter
                });
            });
        }
        this.cdr.markForCheck();
    }
    getConfig() {
        const componentConfig = getConfigFromComponent(this);
        componentConfig.nzViewContainerRef = this.viewContainerRef;
        if (!this.nzContent) {
            componentConfig.nzContent = this.contentTemplateRef;
        }
        return componentConfig;
    }
    ngOnChanges(changes) {
        const { nzVisible } = changes, otherChanges = Object(tslib__WEBPACK_IMPORTED_MODULE_14__["__rest"])(changes, ["nzVisible"]);
        if (Object.keys(otherChanges).length && this.modalRef) {
            this.modalRef.updateConfig(getConfigFromComponent(this));
        }
        if (nzVisible) {
            if (this.nzVisible) {
                this.open();
            }
            else {
                this.close();
            }
        }
    }
    ngOnDestroy() {
        var _a;
        (_a = this.modalRef) === null || _a === void 0 ? void 0 : _a._finishDialogClose();
    }
}
/** @nocollapse */
NzModalComponent.ɵfac = function NzModalComponent_Factory(t) { return new (t || NzModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](NzModalService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"])); };
/** @nocollapse */
NzModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NzModalComponent, selectors: [["nz-modal"]], contentQueries: function NzModalComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, NzModalFooterDirective, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.modalFooter = _t.first);
    } }, viewQuery: function NzModalComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstaticViewQuery"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.contentTemplateRef = _t.first);
    } }, inputs: { nzVisible: "nzVisible", nzClosable: "nzClosable", nzOkLoading: "nzOkLoading", nzOkDisabled: "nzOkDisabled", nzCancelDisabled: "nzCancelDisabled", nzCancelLoading: "nzCancelLoading", nzKeyboard: "nzKeyboard", nzNoAnimation: "nzNoAnimation", nzZIndex: "nzZIndex", nzWidth: "nzWidth", nzCloseIcon: "nzCloseIcon", nzOkType: "nzOkType", nzIconType: "nzIconType", nzModalType: "nzModalType", nzAutofocus: "nzAutofocus", nzOnOk: "nzOnOk", nzOnCancel: "nzOnCancel", nzFooter: "nzFooter", nzMask: "nzMask", nzMaskClosable: "nzMaskClosable", nzCloseOnNavigation: "nzCloseOnNavigation", nzContent: "nzContent", nzComponentParams: "nzComponentParams", nzGetContainer: "nzGetContainer", nzWrapClassName: "nzWrapClassName", nzClassName: "nzClassName", nzStyle: "nzStyle", nzTitle: "nzTitle", nzMaskStyle: "nzMaskStyle", nzBodyStyle: "nzBodyStyle", nzOkText: "nzOkText", nzCancelText: "nzCancelText" }, outputs: { nzOnOk: "nzOnOk", nzOnCancel: "nzOnCancel", nzAfterOpen: "nzAfterOpen", nzAfterClose: "nzAfterClose", nzVisibleChange: "nzVisibleChange" }, exportAs: ["nzModal"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c1, decls: 1, vars: 0, template: function NzModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, NzModalComponent_ng_template_0_Template, 1, 0, "ng-template");
    } }, encapsulation: 2, changeDetection: 0 });
NzModalComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
    { type: NzModalService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"] }
];
NzModalComponent.propDecorators = {
    nzMask: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzMaskClosable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzCloseOnNavigation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzVisible: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzClosable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzOkLoading: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzOkDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzCancelDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzCancelLoading: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzKeyboard: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzNoAnimation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzContent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzComponentParams: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzFooter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzGetContainer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzZIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzWrapClassName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzClassName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzStyle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzTitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzCloseIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzMaskStyle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzBodyStyle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzOkText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzCancelText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzOkType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzIconType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzModalType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzAutofocus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzOnOk: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
    nzOnCancel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
    nzAfterOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
    nzAfterClose: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
    nzVisibleChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
    contentTemplateRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"], { static: true },] }],
    modalFooter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"], args: [NzModalFooterDirective,] }]
};
Object(tslib__WEBPACK_IMPORTED_MODULE_14__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_14__["__metadata"])("design:type", Boolean)
], NzModalComponent.prototype, "nzMask", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_14__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_14__["__metadata"])("design:type", Boolean)
], NzModalComponent.prototype, "nzMaskClosable", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_14__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_14__["__metadata"])("design:type", Boolean)
], NzModalComponent.prototype, "nzCloseOnNavigation", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_14__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_14__["__metadata"])("design:type", Boolean)
], NzModalComponent.prototype, "nzVisible", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_14__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_14__["__metadata"])("design:type", Boolean)
], NzModalComponent.prototype, "nzClosable", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_14__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_14__["__metadata"])("design:type", Boolean)
], NzModalComponent.prototype, "nzOkLoading", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_14__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_14__["__metadata"])("design:type", Boolean)
], NzModalComponent.prototype, "nzOkDisabled", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_14__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_14__["__metadata"])("design:type", Boolean)
], NzModalComponent.prototype, "nzCancelDisabled", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_14__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_14__["__metadata"])("design:type", Boolean)
], NzModalComponent.prototype, "nzCancelLoading", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_14__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_14__["__metadata"])("design:type", Boolean)
], NzModalComponent.prototype, "nzKeyboard", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_14__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_14__["__metadata"])("design:type", Object)
], NzModalComponent.prototype, "nzNoAnimation", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](BaseModalContainerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }, { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__["FocusTrapFactory"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"] }, { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayRef"] }, { type: ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_3__["NzConfigService"] }, { type: ModalOptions }, { type: undefined }, { type: String }]; }, null); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NzModalConfirmContainerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'nz-modal-confirm-container',
                exportAs: 'nzModalConfirmContainer',
                template: `
    <div
      #modalElement
      role="document"
      class="ant-modal"
      (mousedown)="onMousedown()"
      [ngClass]="config.nzClassName!"
      [ngStyle]="config.nzStyle!"
      [style.width]="config?.nzWidth! | nzToCssUnit"
    >
      <div class="ant-modal-content">
        <button *ngIf="config.nzClosable" nz-modal-close (click)="onCloseClick()"></button>
        <div class="ant-modal-body" [ngStyle]="config.nzBodyStyle!">
          <div class="ant-modal-confirm-body-wrapper">
            <div class="ant-modal-confirm-body">
              <i nz-icon [nzType]="config.nzIconType!"></i>
              <span class="ant-modal-confirm-title">
                <ng-container *nzStringTemplateOutlet="config.nzTitle">
                  <span [innerHTML]="config.nzTitle"></span>
                </ng-container>
              </span>
              <div class="ant-modal-confirm-content">
                <ng-template cdkPortalOutlet></ng-template>
                <div *ngIf="isStringContent" [innerHTML]="config.nzContent"></div>
              </div>
            </div>
            <div class="ant-modal-confirm-btns">
              <button
                *ngIf="config.nzCancelText !== null"
                [attr.cdkFocusInitial]="config.nzAutofocus === 'cancel' || null"
                nz-button
                (click)="onCancel()"
                [nzLoading]="!!config.nzCancelLoading"
                [disabled]="config.nzCancelDisabled"
              >
                {{ config.nzCancelText || locale.cancelText }}
              </button>
              <button
                *ngIf="config.nzOkText !== null"
                [attr.cdkFocusInitial]="config.nzAutofocus === 'ok' || null"
                nz-button
                [nzType]="config.nzOkType!"
                (click)="onOk()"
                [nzLoading]="!!config.nzOkLoading"
                [disabled]="config.nzOkDisabled"
              >
                {{ config.nzOkText || locale.okText }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
                animations: [nzModalAnimations.modalContainer],
                // Using OnPush for modal caused footer can not to detect changes. we can fix it when 8.x.
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].Default,
                host: {
                    tabindex: '-1',
                    role: 'dialog',
                    '[class]': 'config.nzWrapClassName ? "ant-modal-wrap " + config.nzWrapClassName : "ant-modal-wrap"',
                    '[style.zIndex]': 'config.nzZIndex',
                    '[@.disabled]': 'config.nzNoAnimation',
                    '[@modalContainer]': 'state',
                    '(@modalContainer.start)': 'onAnimationStart($event)',
                    '(@modalContainer.done)': 'onAnimationDone($event)',
                    '(click)': 'onContainerClick($event)',
                    '(mouseup)': 'onMouseup()'
                }
            }]
    }], function () { return [{ type: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_11__["NzI18nService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }, { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__["FocusTrapFactory"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"] }, { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayRef"] }, { type: ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_3__["NzConfigService"] }, { type: ModalOptions }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["DOCUMENT"]]
            }] }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ANIMATION_MODULE_TYPE"]]
            }] }]; }, { cancelTriggered: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], okTriggered: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], portalOutlet: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["CdkPortalOutlet"], { static: true }]
        }], modalElementRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ['modalElement', { static: true }]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NzModalContainerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'nz-modal-container',
                exportAs: 'nzModalContainer',
                template: `
    <div
      #modalElement
      role="document"
      class="ant-modal"
      (mousedown)="onMousedown()"
      [ngClass]="config.nzClassName!"
      [ngStyle]="config.nzStyle!"
      [style.width]="config?.nzWidth! | nzToCssUnit"
    >
      <div class="ant-modal-content">
        <button *ngIf="config.nzClosable" nz-modal-close (click)="onCloseClick()"></button>
        <div *ngIf="config.nzTitle" nz-modal-title></div>
        <div class="ant-modal-body" [ngStyle]="config.nzBodyStyle!">
          <ng-template cdkPortalOutlet></ng-template>
          <div *ngIf="isStringContent" [innerHTML]="config.nzContent"></div>
        </div>
        <div
          *ngIf="config.nzFooter !== null"
          nz-modal-footer
          [modalRef]="modalRef"
          (cancelTriggered)="onCloseClick()"
          (okTriggered)="onOkClick()"
        ></div>
      </div>
    </div>
  `,
                animations: [nzModalAnimations.modalContainer],
                // Using OnPush for modal caused footer can not to detect changes. we can fix it when 8.x.
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].Default,
                host: {
                    tabindex: '-1',
                    role: 'dialog',
                    '[class]': 'config.nzWrapClassName ? "ant-modal-wrap " + config.nzWrapClassName : "ant-modal-wrap"',
                    '[style.zIndex]': 'config.nzZIndex',
                    '[@.disabled]': 'config.nzNoAnimation',
                    '[@modalContainer]': 'state',
                    '(@modalContainer.start)': 'onAnimationStart($event)',
                    '(@modalContainer.done)': 'onAnimationDone($event)',
                    '(click)': 'onContainerClick($event)',
                    '(mouseup)': 'onMouseup()'
                }
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }, { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__["FocusTrapFactory"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"] }, { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayRef"] }, { type: ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_3__["NzConfigService"] }, { type: ModalOptions }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["DOCUMENT"]]
            }] }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ANIMATION_MODULE_TYPE"]]
            }] }]; }, { portalOutlet: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["CdkPortalOutlet"], { static: true }]
        }], modalElementRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ['modalElement', { static: true }]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NzModalService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
    }], function () { return [{ type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"] }, { type: ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_3__["NzConfigService"] }, { type: NzModalService, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["SkipSelf"]
            }] }]; }, null); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NzModalFooterDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
        args: [{
                selector: '[nzModalFooter]',
                exportAs: 'nzModalFooter'
            }]
    }], function () { return [{ type: NzModalRef, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"] }]; }, null); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NzModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'nz-modal',
                exportAs: 'nzModal',
                template: `
    <ng-template><ng-content></ng-content></ng-template>
  `,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] }, { type: NzModalService }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"] }]; }, { nzVisible: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzClosable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzOkLoading: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzOkDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzCancelDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzCancelLoading: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzKeyboard: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzNoAnimation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzZIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzCloseIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzOkType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzIconType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzModalType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzAutofocus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzOnOk: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], nzOnCancel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], nzAfterOpen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], nzAfterClose: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], nzVisibleChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], modalFooter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"],
            args: [NzModalFooterDirective]
        }], nzFooter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzMask: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzMaskClosable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzCloseOnNavigation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzContent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzComponentParams: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzGetContainer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzWrapClassName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzClassName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzStyle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzMaskStyle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzBodyStyle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzOkText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzCancelText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], contentTemplateRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"], { static: true }]
        }] }); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzModalCloseComponent {
    constructor(config) {
        this.config = config;
    }
}
/** @nocollapse */
NzModalCloseComponent.ɵfac = function NzModalCloseComponent_Factory(t) { return new (t || NzModalCloseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ModalOptions)); };
/** @nocollapse */
NzModalCloseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NzModalCloseComponent, selectors: [["button", "nz-modal-close", ""]], hostAttrs: ["aria-label", "Close", 1, "ant-modal-close"], exportAs: ["NzModalCloseBuiltin"], attrs: _c2, decls: 2, vars: 1, consts: [[1, "ant-modal-close-x"], [4, "nzStringTemplateOutlet"], ["nz-icon", "", 1, "ant-modal-close-icon", 3, "nzType"]], template: function NzModalCloseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzModalCloseComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzStringTemplateOutlet", ctx.config.nzCloseIcon);
    } }, directives: [ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_17__["NzStringTemplateOutletDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_20__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_18__["NzIconDirective"]], encapsulation: 2, changeDetection: 0 });
NzModalCloseComponent.ctorParameters = () => [
    { type: ModalOptions }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NzModalCloseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'button[nz-modal-close]',
                exportAs: 'NzModalCloseBuiltin',
                template: `
    <span class="ant-modal-close-x">
      <ng-container *nzStringTemplateOutlet="config.nzCloseIcon; let closeIcon">
        <i nz-icon [nzType]="closeIcon" class="ant-modal-close-icon"></i>
      </ng-container>
    </span>
  `,
                host: {
                    class: 'ant-modal-close',
                    'aria-label': 'Close'
                },
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: ModalOptions }]; }, null); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzModalFooterComponent {
    constructor(i18n, config) {
        this.i18n = i18n;
        this.config = config;
        this.buttonsFooter = false;
        this.buttons = [];
        this.cancelTriggered = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.okTriggered = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        if (Array.isArray(config.nzFooter)) {
            this.buttonsFooter = true;
            this.buttons = config.nzFooter.map(mergeDefaultOption);
        }
        this.i18n.localeChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.destroy$)).subscribe(() => {
            this.locale = this.i18n.getLocaleData('Modal');
        });
    }
    onCancel() {
        this.cancelTriggered.emit();
    }
    onOk() {
        this.okTriggered.emit();
    }
    /**
     * Returns the value of the specified key.
     * If it is a function, run and return the return value of the function.
     */
    getButtonCallableProp(options, prop) {
        const value = options[prop];
        const componentInstance = this.modalRef.getContentComponent();
        return typeof value === 'function' ? value.apply(options, componentInstance && [componentInstance]) : value;
    }
    /**
     * Run function based on the type and set its `loading` prop if needed.
     */
    onButtonClick(options) {
        const loading = this.getButtonCallableProp(options, 'loading');
        if (!loading) {
            const result = this.getButtonCallableProp(options, 'onClick');
            if (options.autoLoading && Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__["isPromise"])(result)) {
                options.loading = true;
                result.then(() => (options.loading = false)).catch(() => (options.loading = false));
            }
        }
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
/** @nocollapse */
NzModalFooterComponent.ɵfac = function NzModalFooterComponent_Factory(t) { return new (t || NzModalFooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_11__["NzI18nService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ModalOptions)); };
/** @nocollapse */
NzModalFooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NzModalFooterComponent, selectors: [["div", "nz-modal-footer", ""]], hostAttrs: [1, "ant-modal-footer"], inputs: { modalRef: "modalRef" }, outputs: { cancelTriggered: "cancelTriggered", okTriggered: "okTriggered" }, exportAs: ["NzModalFooterBuiltin"], attrs: _c3, decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["defaultFooterButtons", ""], [4, "nzStringTemplateOutlet", "nzStringTemplateOutletContext"], [3, "innerHTML", 4, "ngIf"], [4, "ngIf"], [3, "innerHTML"], ["nz-button", "", 3, "hidden", "nzLoading", "disabled", "nzType", "nzShape", "nzSize", "nzGhost", "click", 4, "ngFor", "ngForOf"], ["nz-button", "", 3, "hidden", "nzLoading", "disabled", "nzType", "nzShape", "nzSize", "nzGhost", "click"], ["nz-button", "", 3, "nzLoading", "disabled", "click", 4, "ngIf"], ["nz-button", "", 3, "nzType", "nzLoading", "disabled", "click", 4, "ngIf"], ["nz-button", "", 3, "nzLoading", "disabled", "click"], ["nz-button", "", 3, "nzType", "nzLoading", "disabled", "click"]], template: function NzModalFooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, NzModalFooterComponent_ng_container_0_Template, 2, 5, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzModalFooterComponent_ng_template_1_Template, 2, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.config.nzFooter)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_17__["NzStringTemplateOutletDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_15__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_21__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_20__["ɵNzTransitionPatchDirective"]], encapsulation: 2 });
NzModalFooterComponent.ctorParameters = () => [
    { type: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_11__["NzI18nService"] },
    { type: ModalOptions }
];
NzModalFooterComponent.propDecorators = {
    cancelTriggered: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
    okTriggered: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
    modalRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NzModalFooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'div[nz-modal-footer]',
                exportAs: 'NzModalFooterBuiltin',
                template: `
    <ng-container *ngIf="config.nzFooter; else defaultFooterButtons">
      <ng-container *nzStringTemplateOutlet="config.nzFooter; context: { $implicit: config.nzComponentParams, modalRef: modalRef }">
        <div *ngIf="!buttonsFooter" [innerHTML]="config.nzTitle"></div>
        <ng-container *ngIf="buttonsFooter">
          <button
            *ngFor="let button of buttons"
            nz-button
            (click)="onButtonClick(button)"
            [hidden]="!getButtonCallableProp(button, 'show')"
            [nzLoading]="getButtonCallableProp(button, 'loading')"
            [disabled]="getButtonCallableProp(button, 'disabled')"
            [nzType]="button.type!"
            [nzShape]="button.shape!"
            [nzSize]="button.size!"
            [nzGhost]="button.ghost!"
          >
            {{ button.label }}
          </button>
        </ng-container>
      </ng-container>
    </ng-container>
    <ng-template #defaultFooterButtons>
      <button
        *ngIf="config.nzCancelText !== null"
        [attr.cdkFocusInitial]="config.nzAutofocus === 'cancel' || null"
        nz-button
        (click)="onCancel()"
        [nzLoading]="!!config.nzCancelLoading"
        [disabled]="config.nzCancelDisabled"
      >
        {{ config.nzCancelText || locale.cancelText }}
      </button>
      <button
        *ngIf="config.nzOkText !== null"
        [attr.cdkFocusInitial]="config.nzAutofocus === 'ok' || null"
        nz-button
        [nzType]="config.nzOkType!"
        (click)="onOk()"
        [nzLoading]="!!config.nzOkLoading"
        [disabled]="config.nzOkDisabled"
      >
        {{ config.nzOkText || locale.okText }}
      </button>
    </ng-template>
  `,
                host: {
                    class: 'ant-modal-footer'
                },
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].Default
            }]
    }], function () { return [{ type: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_11__["NzI18nService"] }, { type: ModalOptions }]; }, { cancelTriggered: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], okTriggered: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], modalRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }] }); })();
function mergeDefaultOption(options) {
    return Object.assign({ type: null, size: 'default', autoLoading: true, show: true, loading: false, disabled: false }, options);
}

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzModalTitleComponent {
    constructor(config) {
        this.config = config;
    }
}
/** @nocollapse */
NzModalTitleComponent.ɵfac = function NzModalTitleComponent_Factory(t) { return new (t || NzModalTitleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ModalOptions)); };
/** @nocollapse */
NzModalTitleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NzModalTitleComponent, selectors: [["div", "nz-modal-title", ""]], hostAttrs: [1, "ant-modal-header"], exportAs: ["NzModalTitleBuiltin"], attrs: _c5, decls: 2, vars: 1, consts: [[1, "ant-modal-title"], [4, "nzStringTemplateOutlet"], [3, "innerHTML"]], template: function NzModalTitleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzModalTitleComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzStringTemplateOutlet", ctx.config.nzTitle);
    } }, directives: [ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_17__["NzStringTemplateOutletDirective"]], encapsulation: 2, changeDetection: 0 });
NzModalTitleComponent.ctorParameters = () => [
    { type: ModalOptions }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NzModalTitleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'div[nz-modal-title]',
                exportAs: 'NzModalTitleBuiltin',
                template: `
    <div class="ant-modal-title">
      <ng-container *nzStringTemplateOutlet="config.nzTitle">
        <div [innerHTML]="config.nzTitle"></div>
      </ng-container>
    </div>
  `,
                host: {
                    class: 'ant-modal-header'
                },
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: ModalOptions }]; }, null); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzModalModule {
}
/** @nocollapse */
NzModalModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: NzModalModule });
/** @nocollapse */
NzModalModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function NzModalModule_Factory(t) { return new (t || NzModalModule)(); }, providers: [NzModalService], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"],
            _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayModule"],
            ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_17__["NzOutletModule"],
            _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["PortalModule"],
            ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_11__["NzI18nModule"],
            ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_15__["NzButtonModule"],
            ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_18__["NzIconModule"],
            ng_zorro_antd_pipes__WEBPACK_IMPORTED_MODULE_19__["NzPipesModule"],
            ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_16__["NzNoAnimationModule"],
            ng_zorro_antd_pipes__WEBPACK_IMPORTED_MODULE_19__["NzPipesModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](NzModalModule, { declarations: function () { return [NzModalComponent, NzModalFooterDirective, NzModalCloseComponent, NzModalFooterComponent, NzModalTitleComponent, NzModalContainerComponent, NzModalConfirmContainerComponent, NzModalComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"],
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayModule"],
        ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_17__["NzOutletModule"],
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["PortalModule"],
        ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_11__["NzI18nModule"],
        ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_15__["NzButtonModule"],
        ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_18__["NzIconModule"],
        ng_zorro_antd_pipes__WEBPACK_IMPORTED_MODULE_19__["NzPipesModule"],
        ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_16__["NzNoAnimationModule"],
        ng_zorro_antd_pipes__WEBPACK_IMPORTED_MODULE_19__["NzPipesModule"]]; }, exports: function () { return [NzModalComponent, NzModalFooterDirective]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NzModalModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"],
                    _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayModule"],
                    ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_17__["NzOutletModule"],
                    _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["PortalModule"],
                    ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_11__["NzI18nModule"],
                    ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_15__["NzButtonModule"],
                    ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_18__["NzIconModule"],
                    ng_zorro_antd_pipes__WEBPACK_IMPORTED_MODULE_19__["NzPipesModule"],
                    ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_16__["NzNoAnimationModule"],
                    ng_zorro_antd_pipes__WEBPACK_IMPORTED_MODULE_19__["NzPipesModule"]
                ],
                exports: [NzModalComponent, NzModalFooterDirective],
                providers: [NzModalService],
                entryComponents: [NzModalContainerComponent, NzModalConfirmContainerComponent],
                declarations: [
                    NzModalComponent,
                    NzModalFooterDirective,
                    NzModalCloseComponent,
                    NzModalFooterComponent,
                    NzModalTitleComponent,
                    NzModalContainerComponent,
                    NzModalConfirmContainerComponent,
                    NzModalComponent
                ]
            }]
    }], null, null); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzModalLegacyAPI {
}

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=ng-zorro-antd-modal.js.map

/***/ })

};;
//# sourceMappingURL=cascader-index-module~modal-index-module~tabs-index-module~upload-index-module.js.map