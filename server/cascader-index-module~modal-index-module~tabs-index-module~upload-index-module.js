exports.ids = ["cascader-index-module~modal-index-module~tabs-index-module~upload-index-module"];
exports.modules = {

/***/ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-pipe.js":
/*!******************************************************************!*\
  !*** ./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-pipe.js ***!
  \******************************************************************/
/*! exports provided: NzPipesModule, NzTimeRangePipe, NzToCssUnitPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzPipesModule", function() { return NzPipesModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzTimeRangePipe", function() { return NzTimeRangePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzToCssUnitPipe", function() { return NzToCssUnitPipe; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ng_zorro_antd_core_time__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/core/time */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-time.js");
/* harmony import */ var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/core/util */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-util.js");





/**
 * @fileoverview added by tsickle
 * Generated from: nz-css-unit.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

class NzToCssUnitPipe {
    /**
     * @param {?} value
     * @param {?=} defaultUnit
     * @return {?}
     */
    transform(value, defaultUnit = 'px') {
        /** @type {?} */
        const formatted = +value;
        return isNaN(formatted) ? `${value}` : `${formatted}${defaultUnit}`;
    }
}
NzToCssUnitPipe.ɵfac = function NzToCssUnitPipe_Factory(t) { return new (t || NzToCssUnitPipe)(); };
NzToCssUnitPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "nzToCssUnit", type: NzToCssUnitPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NzToCssUnitPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"],
        args: [{
                name: 'nzToCssUnit'
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: time-range.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzTimeRangePipe {
    /**
     * @param {?} value
     * @param {?=} format
     * @return {?}
     */
    transform(value, format = 'HH:mm:ss') {
        /** @type {?} */
        let duration = Number(value || 0);
        return ng_zorro_antd_core_time__WEBPACK_IMPORTED_MODULE_2__["timeUnits"].reduce((/**
         * @param {?} current
         * @param {?} __1
         * @return {?}
         */
        (current, [name, unit]) => {
            if (current.indexOf(name) !== -1) {
                /** @type {?} */
                const v = Math.floor(duration / unit);
                duration -= v * unit;
                return current.replace(new RegExp(`${name}+`, 'g'), (/**
                 * @param {?} match
                 * @return {?}
                 */
                (match) => {
                    return Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_3__["padStart"])(v.toString(), match.length, '0');
                }));
            }
            return current;
        }), format);
    }
}
NzTimeRangePipe.ɵfac = function NzTimeRangePipe_Factory(t) { return new (t || NzTimeRangePipe)(); };
NzTimeRangePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "nzTimeRange", type: NzTimeRangePipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NzTimeRangePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"],
        args: [{
                name: 'nzTimeRange',
                pure: true
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: nz-pipe.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzPipesModule {
}
NzPipesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: NzPipesModule });
NzPipesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function NzPipesModule_Factory(t) { return new (t || NzPipesModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NzPipesModule, { declarations: function () { return [NzTimeRangePipe,
        NzToCssUnitPipe]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]]; }, exports: function () { return [NzTimeRangePipe,
        NzToCssUnitPipe]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NzPipesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]],
                exports: [NzTimeRangePipe, NzToCssUnitPipe],
                declarations: [NzTimeRangePipe, NzToCssUnitPipe]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ng-zorro-antd-core-pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ng-zorro-antd-core-pipe.js.map

/***/ }),

/***/ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-modal.js":
/*!**************************************************************!*\
  !*** ./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-modal.js ***!
  \**************************************************************/
/*! exports provided: BaseModalContainer, FADE_CLASS_NAME_MAP, MODAL_MASK_CLASS_NAME, ModalOptions, NZ_MODAL_CONFIG, NzModalCloseComponent, NzModalComponent, NzModalConfirmContainerComponent, NzModalContainerComponent, NzModalFooterComponent, NzModalFooterDirective, NzModalLegacyAPI, NzModalModule, NzModalRef, NzModalService, NzModalTitleComponent, ZOOM_CLASS_NAME_MAP, applyConfigDefaults, getConfigFromComponent, nzModalAnimations, setContentInstanceParams, throwNzModalContentAlreadyAttachedError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseModalContainer", function() { return BaseModalContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FADE_CLASS_NAME_MAP", function() { return FADE_CLASS_NAME_MAP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MODAL_MASK_CLASS_NAME", function() { return MODAL_MASK_CLASS_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalOptions", function() { return ModalOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NZ_MODAL_CONFIG", function() { return NZ_MODAL_CONFIG; });
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nzModalAnimations", function() { return nzModalAnimations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setContentInstanceParams", function() { return setContentInstanceParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throwNzModalContentAlreadyAttachedError", function() { return throwNzModalContentAlreadyAttachedError; });
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/overlay.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/portal.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ng_zorro_antd_core_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/core/logger */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-logger.js");
/* harmony import */ var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/util */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-util.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/i18n */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-i18n.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/keycodes.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/core/config */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-config.js");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/button */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-button.js");
/* harmony import */ var ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/core/no-animation */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-no-animation.js");
/* harmony import */ var ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/core/outlet */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-outlet.js");
/* harmony import */ var ng_zorro_antd_core_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/core/pipe */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-pipe.js");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/icon */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-icon.js");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-transition-patch.js");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-wave.js");





















/**
 * @fileoverview added by tsickle
 * Generated from: modal-types.ts
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
 * @record
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
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzLoading", ctx_r5.config.nzCancelLoading)("disabled", ctx_r5.config.nzCancelDisabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("cdkFocusInitial", ctx_r5.config.nzAutofocus === "cancel");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzType", ctx_r6.config.nzOkType)("nzLoading", ctx_r6.config.nzOkLoading)("disabled", ctx_r6.config.nzOkDisabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("cdkFocusInitial", ctx_r6.config.nzAutofocus === "ok");
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
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzType", ctx_r0.config == null ? null : ctx_r0.config.nzCloseIcon);
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
function NzModalFooterComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzModalFooterComponent_ng_container_0_ng_container_1_Template, 3, 2, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r0.config.nzFooter);
} }
function NzModalFooterComponent_ng_template_1_button_0_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NzModalFooterComponent_ng_template_1_button_0_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r12.onCancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzLoading", ctx_r10.config.nzCancelLoading)("disabled", ctx_r10.config.nzCancelDisabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("cdkFocusInitial", ctx_r10.config.nzAutofocus === "cancel");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzType", ctx_r11.config.nzOkType)("nzLoading", ctx_r11.config.nzOkLoading)("disabled", ctx_r11.config.nzOkDisabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("cdkFocusInitial", ctx_r11.config.nzAutofocus === "ok");
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
const _c4 = ["nz-modal-title", ""];
function NzModalTitleComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", ctx_r0.config.nzTitle, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
} }
function StyleObjectLike() { }
/** @type {?} */
const noopFun = (/**
 * @return {?}
 */
() => void 0);
const ɵ0 = noopFun;
/**
 * @template T, R
 */
class ModalOptions {
    constructor() {
        this.nzClosable = true;
        this.nzOkLoading = false;
        this.nzOkDisabled = false;
        this.nzCancelDisabled = false;
        this.nzCancelLoading = false;
        this.nzNoAnimation = false;
        this.nzAutofocus = 'auto';
        this.nzMask = true;
        this.nzMaskClosable = true;
        this.nzKeyboard = true;
        this.nzZIndex = 1000;
        this.nzWidth = 520;
        this.nzCloseIcon = 'close';
        this.nzOkType = 'primary';
        this.nzModalType = 'default';
        this.nzOnCancel = noopFun;
        this.nzOnOk = noopFun;
        this.nzCloseOnNavigation = true;
        // Confirm
        this.nzIconType = 'question-circle';
    }
}
if (false) {}
/**
 * @record
 * @template T
 */
function ModalButtonOptions() { }
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: modal-config.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function NzModalConfig() { }
if (false) {}
/** @type {?} */
const NZ_MODAL_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('NZ_MODAL_CONFIG');
/** @type {?} */
const ZOOM_CLASS_NAME_MAP = {
    enter: 'zoom-enter',
    enterActive: 'zoom-enter-active',
    leave: 'zoom-leave',
    leaveActive: 'zoom-leave-active'
};
/** @type {?} */
const FADE_CLASS_NAME_MAP = {
    enter: 'fade-enter',
    enterActive: 'fade-enter-active',
    leave: 'fade-leave',
    leaveActive: 'fade-leave-active'
};
/** @type {?} */
const MODAL_MASK_CLASS_NAME = 'ant-modal-mask';

/**
 * @fileoverview added by tsickle
 * Generated from: modal-animations.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const nzModalAnimations = {
    modalContainer: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["trigger"])('modalContainer', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["state"])('void, exit', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["state"])('enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["transition"])('* => enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["animate"])('.24s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["style"])({}))),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["transition"])('* => void, * => exit', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["animate"])('.2s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_11__["style"])({})))
    ])
};

/**
 * @fileoverview added by tsickle
 * Generated from: modal-container.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */
function throwNzModalContentAlreadyAttachedError() {
    throw Error('Attempting to attach modal content after content is already attached');
}
class BaseModalContainer extends _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["BasePortalOutlet"] {
    /**
     * @param {?} elementRef
     * @param {?} focusTrapFactory
     * @param {?} cdr
     * @param {?} render
     * @param {?} zone
     * @param {?} overlayRef
     * @param {?} config
     * @param {?=} document
     * @param {?=} animationType
     */
    constructor(elementRef, focusTrapFactory, cdr, render, zone, overlayRef, config, document, animationType) {
        super();
        this.elementRef = elementRef;
        this.focusTrapFactory = focusTrapFactory;
        this.cdr = cdr;
        this.render = render;
        this.zone = zone;
        this.overlayRef = overlayRef;
        this.config = config;
        this.animationType = animationType;
        this.animationStateChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.containerClick = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.cancelTriggered = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.okTriggered = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.state = 'enter';
        this.isStringContent = false;
        this.elementFocusedBeforeModalWasOpened = null;
        this.latestMousedownTarget = null;
        this.oldMaskStyle = null;
        this.document = document;
        this.isStringContent = typeof config.nzContent === 'string';
        this.setContainer();
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onMousedown(e) {
        this.latestMousedownTarget = ((/** @type {?} */ (e.target))) || null;
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onMouseup(e) {
        if (e.target === this.latestMousedownTarget && e.target === this.elementRef.nativeElement) {
            this.containerClick.emit();
        }
        this.latestMousedownTarget = null;
    }
    /**
     * @return {?}
     */
    onCloseClick() {
        this.cancelTriggered.emit();
    }
    /**
     * @return {?}
     */
    onOkClick() {
        this.okTriggered.emit();
    }
    /**
     * @template T
     * @param {?} portal
     * @return {?}
     */
    attachComponentPortal(portal) {
        if (this.portalOutlet.hasAttached()) {
            throwNzModalContentAlreadyAttachedError();
        }
        this.savePreviouslyFocusedElement();
        this.setModalTransformOrigin();
        return this.portalOutlet.attachComponentPortal(portal);
    }
    /**
     * @template C
     * @param {?} portal
     * @return {?}
     */
    attachTemplatePortal(portal) {
        if (this.portalOutlet.hasAttached()) {
            throwNzModalContentAlreadyAttachedError();
        }
        this.savePreviouslyFocusedElement();
        return this.portalOutlet.attachTemplatePortal(portal);
    }
    /**
     * @return {?}
     */
    getNativeElement() {
        return this.elementRef.nativeElement;
    }
    /**
     * @private
     * @return {?}
     */
    animationDisabled() {
        return this.config.nzNoAnimation || this.animationType === 'NoopAnimations';
    }
    /**
     * @private
     * @return {?}
     */
    setModalTransformOrigin() {
        /** @type {?} */
        const modalElement = this.modalElementRef.nativeElement;
        if ((/** @type {?} */ (this.elementFocusedBeforeModalWasOpened))) {
            /** @type {?} */
            const previouslyDOMRect = (/** @type {?} */ (this.elementFocusedBeforeModalWasOpened)).getBoundingClientRect();
            /** @type {?} */
            const lastPosition = Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__["getElementOffset"])((/** @type {?} */ (this.elementFocusedBeforeModalWasOpened)));
            /** @type {?} */
            const x = lastPosition.left + previouslyDOMRect.width / 2;
            /** @type {?} */
            const y = lastPosition.top + previouslyDOMRect.height / 2;
            /** @type {?} */
            const transformOrigin = `${x - modalElement.offsetLeft}px ${y - modalElement.offsetTop}px 0px`;
            this.render.setStyle(modalElement, 'transform-origin', transformOrigin);
        }
    }
    /**
     * @private
     * @return {?}
     */
    savePreviouslyFocusedElement() {
        if (this.document) {
            this.elementFocusedBeforeModalWasOpened = (/** @type {?} */ (this.document.activeElement));
            if (this.elementRef.nativeElement.focus) {
                Promise.resolve().then((/**
                 * @return {?}
                 */
                () => this.elementRef.nativeElement.focus()));
            }
        }
    }
    /**
     * @private
     * @return {?}
     */
    trapFocus() {
        /** @type {?} */
        const element = this.elementRef.nativeElement;
        if (!this.focusTrap) {
            this.focusTrap = this.focusTrapFactory.create(element);
        }
        if (this.config.nzAutofocus) {
            this.focusTrap.focusInitialElementWhenReady().then();
        }
        else {
            /** @type {?} */
            const activeElement = this.document.activeElement;
            if (activeElement !== element && !element.contains(activeElement)) {
                element.focus();
            }
        }
    }
    /**
     * @private
     * @return {?}
     */
    restoreFocus() {
        /** @type {?} */
        const toFocus = (/** @type {?} */ (this.elementFocusedBeforeModalWasOpened));
        // We need the extra check, because IE can set the `activeElement` to null in some cases.
        if (toFocus && typeof toFocus.focus === 'function') {
            /** @type {?} */
            const activeElement = (/** @type {?} */ (this.document.activeElement));
            /** @type {?} */
            const element = this.elementRef.nativeElement;
            if (!activeElement || activeElement === this.document.body || activeElement === element || element.contains(activeElement)) {
                toFocus.focus();
            }
        }
        if (this.focusTrap) {
            this.focusTrap.destroy();
        }
    }
    /**
     * @private
     * @return {?}
     */
    setEnterAnimationClass() {
        if (this.animationDisabled()) {
            return;
        }
        this.zone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            // Make sure to set the `TransformOrigin` style before set the modelElement's class names
            this.setModalTransformOrigin();
            /** @type {?} */
            const modalElement = this.modalElementRef.nativeElement;
            /** @type {?} */
            const backdropElement = this.overlayRef.backdropElement;
            this.render.addClass(modalElement, ZOOM_CLASS_NAME_MAP.enter);
            this.render.addClass(modalElement, ZOOM_CLASS_NAME_MAP.enterActive);
            this.render.addClass(backdropElement, FADE_CLASS_NAME_MAP.enter);
            this.render.addClass(backdropElement, FADE_CLASS_NAME_MAP.enterActive);
        }));
    }
    /**
     * @private
     * @return {?}
     */
    setExitAnimationClass() {
        this.zone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const modalElement = this.modalElementRef.nativeElement;
            /** @type {?} */
            const backdropElement = this.overlayRef.backdropElement;
            if (this.animationDisabled()) {
                // https://github.com/angular/components/issues/18645
                this.render.removeClass(backdropElement, MODAL_MASK_CLASS_NAME);
                return;
            }
            this.render.addClass(modalElement, ZOOM_CLASS_NAME_MAP.leave);
            this.render.addClass(modalElement, ZOOM_CLASS_NAME_MAP.leaveActive);
            this.render.addClass(backdropElement, FADE_CLASS_NAME_MAP.leave);
            this.render.addClass(backdropElement, FADE_CLASS_NAME_MAP.leaveActive);
        }));
    }
    /**
     * @private
     * @return {?}
     */
    cleanAnimationClass() {
        if (this.animationDisabled()) {
            return;
        }
        this.zone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const backdropElement = this.overlayRef.backdropElement;
            /** @type {?} */
            const modalElement = this.modalElementRef.nativeElement;
            this.render.removeClass(modalElement, ZOOM_CLASS_NAME_MAP.enter);
            this.render.removeClass(modalElement, ZOOM_CLASS_NAME_MAP.enterActive);
            this.render.removeClass(modalElement, ZOOM_CLASS_NAME_MAP.leave);
            this.render.removeClass(modalElement, ZOOM_CLASS_NAME_MAP.leaveActive);
            this.render.removeClass(backdropElement, FADE_CLASS_NAME_MAP.enter);
            this.render.removeClass(backdropElement, FADE_CLASS_NAME_MAP.enterActive);
        }));
    }
    /**
     * @private
     * @return {?}
     */
    bindBackdropStyle() {
        this.zone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            if (this.oldMaskStyle) {
                /** @type {?} */
                const backdropElement = this.overlayRef.backdropElement;
                /** @type {?} */
                const styles = (/** @type {?} */ (this.oldMaskStyle));
                Object.keys(styles).forEach((/**
                 * @param {?} key
                 * @return {?}
                 */
                key => {
                    this.render.removeStyle(backdropElement, key);
                }));
                this.oldMaskStyle = null;
            }
            if (typeof this.config.nzMaskStyle === 'object' && Object.keys(this.config.nzMaskStyle).length) {
                /** @type {?} */
                const backdropElement = this.overlayRef.backdropElement;
                /** @type {?} */
                const styles = Object.assign({}, this.config.nzMaskStyle);
                Object.keys(styles).forEach((/**
                 * @param {?} key
                 * @return {?}
                 */
                key => {
                    this.render.setStyle(backdropElement, key, styles[key]);
                }));
                this.oldMaskStyle = styles;
            }
        }));
    }
    /**
     * Set the container element.
     * @deprecated Not supported.
     * \@breaking-change 10.0.0
     * @private
     * @return {?}
     */
    setContainer() {
        /** @type {?} */
        const container = this.getContainer();
        if (container) {
            this.render.appendChild(container, this.elementRef.nativeElement);
        }
    }
    /**
     * Reset the container element.
     * @deprecated Not supported.
     * \@breaking-change 10.0.0
     * @private
     * @return {?}
     */
    resetContainer() {
        /** @type {?} */
        const container = this.getContainer();
        if (container) {
            this.render.appendChild(this.overlayRef.overlayElement, this.elementRef.nativeElement);
        }
    }
    /**
     * @private
     * @return {?}
     */
    getContainer() {
        const { nzGetContainer } = this.config;
        /** @type {?} */
        const container = typeof nzGetContainer === 'function' ? nzGetContainer() : nzGetContainer;
        return container instanceof HTMLElement ? container : null;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onAnimationDone(event) {
        if (event.toState === 'void') {
            return;
        }
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
    /**
     * @param {?} event
     * @return {?}
     */
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
    /**
     * @return {?}
     */
    startExitAnimation() {
        this.state = 'exit';
        this.cdr.markForCheck();
    }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: modal-confirm-container.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzModalConfirmContainerComponent extends BaseModalContainer {
    /**
     * @param {?} i18n
     * @param {?} elementRef
     * @param {?} focusTrapFactory
     * @param {?} cdr
     * @param {?} render
     * @param {?} zone
     * @param {?} overlayRef
     * @param {?} config
     * @param {?} document
     * @param {?} animationType
     */
    constructor(i18n, elementRef, focusTrapFactory, cdr, render, zone, overlayRef, config, document, animationType) {
        super(elementRef, focusTrapFactory, cdr, render, zone, overlayRef, config, document, animationType);
        this.i18n = i18n;
        this.config = config;
        this.cancelTriggered = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.okTriggered = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.locale = {};
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.i18n.localeChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroy$)).subscribe((/**
         * @return {?}
         */
        () => {
            this.locale = this.i18n.getLocaleData('Modal');
        }));
    }
    /**
     * @return {?}
     */
    onCancel() {
        this.cancelTriggered.emit();
    }
    /**
     * @return {?}
     */
    onOk() {
        this.okTriggered.emit();
    }
    /**
     * @template T
     * @param {?} _portal
     * @return {?}
     */
    attachComponentPortal(_portal) {
        throw new Error('The confirm mode does not support using component as content');
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NzModalConfirmContainerComponent.ɵfac = function NzModalConfirmContainerComponent_Factory(t) { return new (t || NzModalConfirmContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_10__["NzI18nService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__["FocusTrapFactory"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ModalOptions), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ANIMATION_MODULE_TYPE"], 8)); };
NzModalConfirmContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NzModalConfirmContainerComponent, selectors: [["nz-modal-confirm-container"]], viewQuery: function NzModalConfirmContainerComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstaticViewQuery"](_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["CdkPortalOutlet"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.portalOutlet = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.modalElementRef = _t.first);
    } }, hostAttrs: ["tabindex", "-1", "role", "dialog"], hostVars: 6, hostBindings: function NzModalConfirmContainerComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcomponentHostSyntheticListener"]("@modalContainer.start", function NzModalConfirmContainerComponent_animation_modalContainer_start_HostBindingHandler($event) { return ctx.onAnimationStart($event); })("@modalContainer.done", function NzModalConfirmContainerComponent_animation_modalContainer_done_HostBindingHandler($event) { return ctx.onAnimationDone($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mousedown", function NzModalConfirmContainerComponent_mousedown_HostBindingHandler($event) { return ctx.onMousedown($event); })("mouseup", function NzModalConfirmContainerComponent_mouseup_HostBindingHandler($event) { return ctx.onMouseup($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵupdateSyntheticHostBinding"]("@.disabled", ctx.config.nzNoAnimation)("@modalContainer", ctx.state);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx.config.nzWrapClassName ? "ant-modal-wrap " + ctx.config.nzWrapClassName : "ant-modal-wrap");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("z-index", ctx.config.nzZIndex);
    } }, outputs: { cancelTriggered: "cancelTriggered", okTriggered: "okTriggered" }, exportAs: ["nzModalConfirmContainer"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 17, vars: 13, consts: [["role", "document", 1, "ant-modal", 3, "ngClass", "ngStyle"], ["modalElement", ""], [1, "ant-modal-content"], ["nz-modal-close", "", 3, "click", 4, "ngIf"], [1, "ant-modal-body", 3, "ngStyle"], [1, "ant-modal-confirm-body-wrapper"], [1, "ant-modal-confirm-body"], ["nz-icon", "", 3, "nzType"], [1, "ant-modal-confirm-title"], [4, "nzStringTemplateOutlet"], [1, "ant-modal-confirm-content"], ["cdkPortalOutlet", ""], [3, "innerHTML", 4, "ngIf"], [1, "ant-modal-confirm-btns"], ["nz-button", "", 3, "nzLoading", "disabled", "click", 4, "ngIf"], ["nz-button", "", 3, "nzType", "nzLoading", "disabled", "click", 4, "ngIf"], ["nz-modal-close", "", 3, "click"], [3, "innerHTML"], ["nz-button", "", 3, "nzLoading", "disabled", "click"], ["nz-button", "", 3, "nzType", "nzLoading", "disabled", "click"]], template: function NzModalConfirmContainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0, 1);
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
    } }, directives: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_20__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_19__["NzIconDirective"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_17__["NzStringTemplateOutletDirective"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["CdkPortalOutlet"], NzModalCloseComponent, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_15__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_21__["NzWaveDirective"]]; }, pipes: function () { return [ng_zorro_antd_core_pipe__WEBPACK_IMPORTED_MODULE_18__["NzToCssUnitPipe"]]; }, encapsulation: 2, data: { animation: [nzModalAnimations.modalContainer] } });
/** @nocollapse */
NzModalConfirmContainerComponent.ctorParameters = () => [
    { type: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_10__["NzI18nService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
    { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__["FocusTrapFactory"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"] },
    { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayRef"] },
    { type: ModalOptions },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"],] }] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ANIMATION_MODULE_TYPE"],] }] }
];
NzModalConfirmContainerComponent.propDecorators = {
    portalOutlet: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["CdkPortalOutlet"], { static: true },] }],
    modalElementRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['modalElement', { static: true },] }],
    cancelTriggered: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
    okTriggered: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: modal-container.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzModalContainerComponent extends BaseModalContainer {
    /**
     * @param {?} elementRef
     * @param {?} focusTrapFactory
     * @param {?} cdr
     * @param {?} render
     * @param {?} zone
     * @param {?} overlayRef
     * @param {?} config
     * @param {?} document
     * @param {?} animationType
     */
    constructor(elementRef, focusTrapFactory, cdr, render, zone, overlayRef, config, document, animationType) {
        super(elementRef, focusTrapFactory, cdr, render, zone, overlayRef, config, document, animationType);
        this.config = config;
    }
}
NzModalContainerComponent.ɵfac = function NzModalContainerComponent_Factory(t) { return new (t || NzModalContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__["FocusTrapFactory"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ModalOptions), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ANIMATION_MODULE_TYPE"], 8)); };
NzModalContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NzModalContainerComponent, selectors: [["nz-modal-container"]], viewQuery: function NzModalContainerComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstaticViewQuery"](_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["CdkPortalOutlet"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.portalOutlet = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.modalElementRef = _t.first);
    } }, hostAttrs: ["tabindex", "-1", "role", "dialog"], hostVars: 6, hostBindings: function NzModalContainerComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcomponentHostSyntheticListener"]("@modalContainer.start", function NzModalContainerComponent_animation_modalContainer_start_HostBindingHandler($event) { return ctx.onAnimationStart($event); })("@modalContainer.done", function NzModalContainerComponent_animation_modalContainer_done_HostBindingHandler($event) { return ctx.onAnimationDone($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mousedown", function NzModalContainerComponent_mousedown_HostBindingHandler($event) { return ctx.onMousedown($event); })("mouseup", function NzModalContainerComponent_mouseup_HostBindingHandler($event) { return ctx.onMouseup($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵupdateSyntheticHostBinding"]("@.disabled", ctx.config.nzNoAnimation)("@modalContainer", ctx.state);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx.config.nzWrapClassName ? "ant-modal-wrap " + ctx.config.nzWrapClassName : "ant-modal-wrap");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("z-index", ctx.config.nzZIndex);
    } }, exportAs: ["nzModalContainer"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 10, vars: 11, consts: [["role", "document", 1, "ant-modal", 3, "ngClass", "ngStyle"], ["modalElement", ""], [1, "ant-modal-content"], ["nz-modal-close", "", 3, "click", 4, "ngIf"], ["nz-modal-title", "", 4, "ngIf"], [1, "ant-modal-body", 3, "ngStyle"], ["cdkPortalOutlet", ""], [3, "innerHTML", 4, "ngIf"], ["nz-modal-footer", "", 3, "modalRef", "cancelTriggered", "okTriggered", 4, "ngIf"], ["nz-modal-close", "", 3, "click"], ["nz-modal-title", ""], [3, "innerHTML"], ["nz-modal-footer", "", 3, "modalRef", "cancelTriggered", "okTriggered"]], template: function NzModalContainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0, 1);
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
    } }, directives: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["CdkPortalOutlet"], NzModalCloseComponent,
        NzModalTitleComponent,
        NzModalFooterComponent]; }, pipes: function () { return [ng_zorro_antd_core_pipe__WEBPACK_IMPORTED_MODULE_18__["NzToCssUnitPipe"]]; }, encapsulation: 2, data: { animation: [nzModalAnimations.modalContainer] } });
/** @nocollapse */
NzModalContainerComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
    { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__["FocusTrapFactory"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"] },
    { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayRef"] },
    { type: ModalOptions },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"],] }] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ANIMATION_MODULE_TYPE"],] }] }
];
NzModalContainerComponent.propDecorators = {
    portalOutlet: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["CdkPortalOutlet"], { static: true },] }],
    modalElementRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['modalElement', { static: true },] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: modal-ref.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const NzModalState = {
    OPEN: 0,
    CLOSING: 1,
    CLOSED: 2,
};
/** @enum {string} */
const NzTriggerAction = {
    CANCEL: "cancel",
    OK: "ok",
};
/**
 * @template T, R
 */
class NzModalRef {
    /**
     * @param {?} overlayRef
     * @param {?} config
     * @param {?} containerInstance
     */
    constructor(overlayRef, config, containerInstance) {
        this.overlayRef = overlayRef;
        this.config = config;
        this.containerInstance = containerInstance;
        this.state = 0 /* OPEN */;
        this.afterClose = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.afterOpen = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        containerInstance.animationStateChanged
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])((/**
         * @param {?} event
         * @return {?}
         */
        event => event.phaseName === 'done' && event.toState === 'enter')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1))
            .subscribe((/**
         * @return {?}
         */
        () => {
            this.afterOpen.next();
            this.afterOpen.complete();
            if (config.nzAfterOpen instanceof _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]) {
                config.nzAfterOpen.emit();
            }
        }));
        containerInstance.animationStateChanged
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])((/**
         * @param {?} event
         * @return {?}
         */
        event => event.phaseName === 'done' && event.toState === 'exit')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1))
            .subscribe((/**
         * @return {?}
         */
        () => {
            clearTimeout(this.closeTimeout);
            this.overlayRef.dispose();
        }));
        containerInstance.containerClick.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1)).subscribe((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const cancelable = !this.config.nzCancelLoading && !this.config.nzOkLoading && config.nzMask && config.nzMaskClosable;
            if (cancelable) {
                this.trigger("cancel" /* CANCEL */);
            }
        }));
        overlayRef
            .keydownEvents()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])((/**
         * @param {?} event
         * @return {?}
         */
        event => {
            return (((/** @type {?} */ (this.config.nzKeyboard))) &&
                !this.config.nzCancelLoading &&
                !this.config.nzOkLoading &&
                event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_12__["ESCAPE"] &&
                !Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_12__["hasModifierKey"])(event));
        })))
            .subscribe((/**
         * @param {?} event
         * @return {?}
         */
        event => {
            event.preventDefault();
            this.trigger("cancel" /* CANCEL */);
        }));
        containerInstance.cancelTriggered.subscribe((/**
         * @return {?}
         */
        () => this.trigger("cancel" /* CANCEL */)));
        containerInstance.okTriggered.subscribe((/**
         * @return {?}
         */
        () => this.trigger("ok" /* OK */)));
        overlayRef.detachments().subscribe((/**
         * @return {?}
         */
        () => {
            this.afterClose.next(this.result);
            this.afterClose.complete();
            if (config.nzAfterClose instanceof _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]) {
                config.nzAfterClose.emit(this.result);
            }
            this.componentInstance = null;
            this.overlayRef.dispose();
        }));
    }
    /**
     * @return {?}
     */
    getContentComponent() {
        return (/** @type {?} */ (this.componentInstance));
    }
    /**
     * @return {?}
     */
    getElement() {
        return this.containerInstance.getNativeElement();
    }
    /**
     * @param {?=} result
     * @return {?}
     */
    destroy(result) {
        this.close(result);
    }
    /**
     * @return {?}
     */
    triggerOk() {
        this.trigger("ok" /* OK */);
    }
    /**
     * @return {?}
     */
    triggerCancel() {
        this.trigger("cancel" /* CANCEL */);
    }
    /**
     * Open the modal.
     * @deprecated Opened when create, this method is useless.
     * \@breaking-change 10.0.0
     * @return {?}
     */
    open() {
        // noop
    }
    /**
     * @param {?=} result
     * @return {?}
     */
    close(result) {
        this.result = result;
        this.containerInstance.animationStateChanged
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])((/**
         * @param {?} event
         * @return {?}
         */
        event => event.phaseName === 'start')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1))
            .subscribe((/**
         * @param {?} event
         * @return {?}
         */
        event => {
            this.state = 2 /* CLOSED */;
            this.overlayRef.detachBackdrop();
            this.closeTimeout = setTimeout((/**
             * @return {?}
             */
            () => {
                this.overlayRef.dispose();
            }), event.totalTime + 100);
        }));
        this.containerInstance.startExitAnimation();
        this.state = 1 /* CLOSING */;
    }
    /**
     * @param {?} config
     * @return {?}
     */
    updateConfig(config) {
        Object.assign(this.config, config);
        this.containerInstance.cdr.markForCheck();
    }
    /**
     * @return {?}
     */
    getState() {
        return this.state;
    }
    /**
     * @return {?}
     */
    getConfig() {
        return this.config;
    }
    /**
     * @return {?}
     */
    getBackdropElement() {
        return this.overlayRef.backdropElement;
    }
    /**
     * @private
     * @param {?} action
     * @return {?}
     */
    trigger(action) {
        /** @type {?} */
        const trigger = { ok: this.config.nzOnOk, cancel: this.config.nzOnCancel }[action];
        /** @type {?} */
        const loadingKey = (/** @type {?} */ ({ ok: 'nzOkLoading', cancel: 'nzCancelLoading' }[action]));
        /** @type {?} */
        const loading = this.config[loadingKey];
        if (loading) {
            return;
        }
        if (trigger instanceof _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]) {
            trigger.emit(this.getContentComponent());
        }
        else if (typeof trigger === 'function') {
            /** @type {?} */
            const result = trigger(this.getContentComponent());
            /** @type {?} */
            const caseClose = (/**
             * @param {?} doClose
             * @return {?}
             */
            (doClose) => doClose !== false && this.close((/** @type {?} */ (doClose))));
            if (Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__["isPromise"])(result)) {
                this.config[loadingKey] = true;
                /** @type {?} */
                const handleThen = (/**
                 * @param {?} doClose
                 * @return {?}
                 */
                (doClose) => {
                    this.config[loadingKey] = false;
                    this.closeWhitResult(doClose);
                });
                result.then(handleThen).catch(handleThen);
            }
            else {
                caseClose(result);
            }
        }
    }
    /**
     * @private
     * @param {?} result
     * @return {?}
     */
    closeWhitResult(result) {
        if (result !== false) {
            this.close(result);
        }
    }
}
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
 * @param {?} config
 * @param {?} defaultOptions
 * @return {?}
 */
function applyConfigDefaults(config, defaultOptions) {
    return Object.assign(Object.assign({}, defaultOptions), config);
}
/**
 * Assign the params into the content component instance.
 * @deprecated Should use dependency injection to get the params for user
 * \@breaking-change 10.0.0
 * @template T
 * @param {?} instance
 * @param {?} params
 * @return {?}
 */
function setContentInstanceParams(instance, params) {
    Object.assign(instance, params);
}
/**
 * @param {?} component
 * @return {?}
 */
function getConfigFromComponent(component) {
    const { nzMask, nzMaskClosable, nzClosable, nzOkLoading, nzOkDisabled, nzCancelDisabled, nzCancelLoading, nzKeyboard, nzNoAnimation, nzContent, nzComponentParams, nzFooter, nzGetContainer, nzZIndex, nzWidth, nzWrapClassName, nzClassName, nzStyle, nzTitle, nzCloseIcon, nzMaskStyle, nzBodyStyle, nzOkText, nzCancelText, nzOkType, nzIconType, nzModalType, nzOnOk, nzOnCancel, nzAfterOpen, nzAfterClose } = component;
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
        nzAfterClose
    };
}

/**
 * @fileoverview added by tsickle
 * Generated from: modal.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzModalService {
    /**
     * @param {?} overlay
     * @param {?} injector
     * @param {?} parentModal
     */
    constructor(overlay, injector, parentModal) {
        this.overlay = overlay;
        this.injector = injector;
        this.parentModal = parentModal;
        this.openModalsAtThisLevel = [];
        this.afterAllClosedAtThisLevel = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.afterAllClose = (/** @type {?} */ (Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["defer"])((/**
         * @return {?}
         */
        () => this.openModals.length ? this._afterAllClosed : this._afterAllClosed.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(undefined))))));
    }
    /**
     * @return {?}
     */
    get openModals() {
        return this.parentModal ? this.parentModal.openModals : this.openModalsAtThisLevel;
    }
    /**
     * @return {?}
     */
    get _afterAllClosed() {
        /** @type {?} */
        const parent = this.parentModal;
        return parent ? parent._afterAllClosed : this.afterAllClosedAtThisLevel;
    }
    /**
     * @template T, R
     * @param {?} config
     * @return {?}
     */
    create(config) {
        return this.open((/** @type {?} */ (config.nzContent)), config);
    }
    /**
     * @return {?}
     */
    closeAll() {
        this.closeModals(this.openModals);
    }
    /**
     * @template T
     * @param {?=} options
     * @param {?=} confirmType
     * @return {?}
     */
    confirm(options = {}, confirmType = 'confirm') {
        if ('nzFooter' in options) {
            Object(ng_zorro_antd_core_logger__WEBPACK_IMPORTED_MODULE_3__["warn"])(`The Confirm-Modal doesn't support "nzFooter", this property will be ignored.`);
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
    /**
     * @template T
     * @param {?=} options
     * @return {?}
     */
    info(options = {}) {
        return this.confirmFactory(options, 'info');
    }
    /**
     * @template T
     * @param {?=} options
     * @return {?}
     */
    success(options = {}) {
        return this.confirmFactory(options, 'success');
    }
    /**
     * @template T
     * @param {?=} options
     * @return {?}
     */
    error(options = {}) {
        return this.confirmFactory(options, 'error');
    }
    /**
     * @template T
     * @param {?=} options
     * @return {?}
     */
    warning(options = {}) {
        return this.confirmFactory(options, 'warning');
    }
    /**
     * @private
     * @template T, R
     * @param {?} componentOrTemplateRef
     * @param {?=} config
     * @return {?}
     */
    open(componentOrTemplateRef, config) {
        /** @type {?} */
        const configMerged = applyConfigDefaults(config || {}, new ModalOptions());
        /** @type {?} */
        const overlayRef = this.createOverlay(configMerged);
        /** @type {?} */
        const modalContainer = this.attachModalContainer(overlayRef, configMerged);
        /** @type {?} */
        const modalRef = this.attachModalContent(componentOrTemplateRef, modalContainer, overlayRef, configMerged);
        modalContainer.modalRef = modalRef;
        this.openModals.push(modalRef);
        modalRef.afterClose.subscribe((/**
         * @return {?}
         */
        () => this.removeOpenModal(modalRef)));
        return modalRef;
    }
    /**
     * @private
     * @param {?} modalRef
     * @return {?}
     */
    removeOpenModal(modalRef) {
        /** @type {?} */
        const index = this.openModals.indexOf(modalRef);
        if (index > -1) {
            this.openModals.splice(index, 1);
            if (!this.openModals.length) {
                this._afterAllClosed.next();
            }
        }
    }
    /**
     * @private
     * @param {?} dialogs
     * @return {?}
     */
    closeModals(dialogs) {
        /** @type {?} */
        let i = dialogs.length;
        while (i--) {
            dialogs[i].close();
            if (!this.openModals.length) {
                this._afterAllClosed.next();
            }
        }
    }
    /**
     * @private
     * @param {?} config
     * @return {?}
     */
    createOverlay(config) {
        /** @type {?} */
        const overlayConfig = new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayConfig"]({
            hasBackdrop: true,
            scrollStrategy: this.overlay.scrollStrategies.block(),
            positionStrategy: this.overlay.position().global(),
            disposeOnNavigation: config.nzCloseOnNavigation
        });
        if (config.nzMask) {
            overlayConfig.backdropClass = MODAL_MASK_CLASS_NAME;
        }
        return this.overlay.create(overlayConfig);
    }
    /**
     * @private
     * @param {?} overlayRef
     * @param {?} config
     * @return {?}
     */
    attachModalContainer(overlayRef, config) {
        /** @type {?} */
        const userInjector = config && config.nzViewContainerRef && config.nzViewContainerRef.injector;
        /** @type {?} */
        const injector = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["PortalInjector"](userInjector || this.injector, new WeakMap([
            [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayRef"], overlayRef],
            [ModalOptions, config]
        ]));
        /** @type {?} */
        const ContainerComponent = config.nzModalType === 'confirm'
            ? // If the mode is `confirm`, use `NzModalConfirmContainerComponent`
                NzModalConfirmContainerComponent
            : // If the mode is not `confirm`, use `NzModalContainerComponent`
                NzModalContainerComponent;
        /** @type {?} */
        const containerPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["ComponentPortal"](ContainerComponent, config.nzViewContainerRef, injector);
        /** @type {?} */
        const containerRef = overlayRef.attach(containerPortal);
        return containerRef.instance;
    }
    /**
     * @private
     * @template T, R
     * @param {?} componentOrTemplateRef
     * @param {?} modalContainer
     * @param {?} overlayRef
     * @param {?} config
     * @return {?}
     */
    attachModalContent(componentOrTemplateRef, modalContainer, overlayRef, config) {
        /** @type {?} */
        const modalRef = new NzModalRef(overlayRef, config, modalContainer);
        if (componentOrTemplateRef instanceof _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"]) {
            modalContainer.attachTemplatePortal(new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["TemplatePortal"](componentOrTemplateRef, (/** @type {?} */ (null)), (/** @type {?} */ ({ $implicit: config.nzComponentParams, modalRef }))));
        }
        else if (Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__["isNotNil"])(componentOrTemplateRef) && typeof componentOrTemplateRef !== 'string') {
            /** @type {?} */
            const injector = this.createInjector(modalRef, config);
            /** @type {?} */
            const contentRef = modalContainer.attachComponentPortal(new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["ComponentPortal"](componentOrTemplateRef, config.nzViewContainerRef, injector));
            setContentInstanceParams(contentRef.instance, config.nzComponentParams);
            modalRef.componentInstance = contentRef.instance;
        }
        return modalRef;
    }
    /**
     * @private
     * @template T, R
     * @param {?} modalRef
     * @param {?} config
     * @return {?}
     */
    createInjector(modalRef, config) {
        /** @type {?} */
        const userInjector = config && config.nzViewContainerRef && config.nzViewContainerRef.injector;
        /** @type {?} */
        const injectionTokens = new WeakMap([[NzModalRef, modalRef]]);
        return new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["PortalInjector"](userInjector || this.injector, injectionTokens);
    }
    /**
     * @private
     * @template T
     * @param {?=} options
     * @param {?=} confirmType
     * @return {?}
     */
    confirmFactory(options = {}, confirmType) {
        /** @type {?} */
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
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.closeModals(this.openModalsAtThisLevel);
        this.afterAllClosedAtThisLevel.complete();
    }
}
NzModalService.ɵfac = function NzModalService_Factory(t) { return new (t || NzModalService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](NzModalService, 12)); };
NzModalService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: NzModalService, factory: NzModalService.ɵfac });
/** @nocollapse */
NzModalService.ctorParameters = () => [
    { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"] },
    { type: NzModalService, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["SkipSelf"] }] }
];
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: modal-footer.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzModalFooterDirective {
    /**
     * @param {?} nzModalRef
     * @param {?} templateRef
     */
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
NzModalFooterDirective.ɵfac = function NzModalFooterDirective_Factory(t) { return new (t || NzModalFooterDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](NzModalRef, 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"])); };
NzModalFooterDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: NzModalFooterDirective, selectors: [["", "nzModalFooter", ""]], exportAs: ["nzModalFooter"] });
/** @nocollapse */
NzModalFooterDirective.ctorParameters = () => [
    { type: NzModalRef, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"] }
];
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: modal.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const NZ_CONFIG_COMPONENT_NAME = 'modal';
/**
 * @template T, R
 */
class NzModalComponent {
    /**
     * @param {?} nzConfigService
     * @param {?} cdr
     * @param {?} modal
     * @param {?} viewContainerRef
     */
    constructor(nzConfigService, cdr, modal, viewContainerRef) {
        this.nzConfigService = nzConfigService;
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
        // Confirm Modal ONLY
        this.nzModalType = 'default';
        this.nzOnOk = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.nzOnCancel = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.nzAfterOpen = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.nzAfterClose = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.nzVisibleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.modalRef = null;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set modalFooter(value) {
        if (value && value.templateRef) {
            this.setFooterWithTemplate(value.templateRef);
        }
    }
    /**
     * @return {?}
     */
    get afterOpen() {
        // Observable alias for nzAfterOpen
        return this.nzAfterOpen.asObservable();
    }
    /**
     * @return {?}
     */
    get afterClose() {
        // Observable alias for nzAfterClose
        return this.nzAfterClose.asObservable();
    }
    /**
     * @return {?}
     */
    open() {
        if (!this.nzVisible) {
            this.nzVisible = true;
            this.nzVisibleChange.emit(true);
        }
        if (!this.modalRef) {
            /** @type {?} */
            const config = this.getConfig();
            this.modalRef = this.modal.create(config);
        }
    }
    /**
     * @param {?=} result
     * @return {?}
     */
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
    /**
     * @param {?=} result
     * @return {?}
     */
    destroy(result) {
        this.close(result);
    }
    /**
     * @return {?}
     */
    triggerOk() {
        var _a;
        (_a = this.modalRef) === null || _a === void 0 ? void 0 : _a.triggerOk();
    }
    /**
     * @return {?}
     */
    triggerCancel() {
        var _a;
        (_a = this.modalRef) === null || _a === void 0 ? void 0 : _a.triggerCancel();
    }
    /**
     * @return {?}
     */
    getContentComponent() {
        var _a;
        return (_a = this.modalRef) === null || _a === void 0 ? void 0 : _a.getContentComponent();
    }
    /**
     * @return {?}
     */
    getElement() {
        var _a;
        return (_a = this.modalRef) === null || _a === void 0 ? void 0 : _a.getElement();
    }
    /**
     * @return {?}
     */
    getModalRef() {
        return this.modalRef;
    }
    /**
     * @private
     * @param {?} templateRef
     * @return {?}
     */
    setFooterWithTemplate(templateRef) {
        this.nzFooter = templateRef;
        if (this.modalRef) {
            // If modalRef already created, set the footer in next tick
            Promise.resolve().then((/**
             * @return {?}
             */
            () => {
                (/** @type {?} */ (this.modalRef)).updateConfig({
                    nzFooter: this.nzFooter
                });
            }));
        }
        this.cdr.markForCheck();
    }
    /**
     * @private
     * @return {?}
     */
    getConfig() {
        /** @type {?} */
        const componentConfig = getConfigFromComponent(this);
        componentConfig.nzViewContainerRef = this.viewContainerRef;
        if (!this.nzContent) {
            componentConfig.nzContent = this.contentTemplateRef;
        }
        return componentConfig;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        const { nzVisible } = changes, otherChanges = Object(tslib__WEBPACK_IMPORTED_MODULE_13__["__rest"])(changes, ["nzVisible"]);
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
}
NzModalComponent.ɵfac = function NzModalComponent_Factory(t) { return new (t || NzModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_14__["NzConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](NzModalService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"])); };
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
    } }, inputs: { nzVisible: "nzVisible", nzClosable: "nzClosable", nzOkLoading: "nzOkLoading", nzOkDisabled: "nzOkDisabled", nzCancelDisabled: "nzCancelDisabled", nzCancelLoading: "nzCancelLoading", nzKeyboard: "nzKeyboard", nzNoAnimation: "nzNoAnimation", nzZIndex: "nzZIndex", nzWidth: "nzWidth", nzCloseIcon: "nzCloseIcon", nzOkType: "nzOkType", nzIconType: "nzIconType", nzModalType: "nzModalType", nzOnOk: "nzOnOk", nzOnCancel: "nzOnCancel", nzFooter: "nzFooter", nzMask: "nzMask", nzMaskClosable: "nzMaskClosable", nzContent: "nzContent", nzComponentParams: "nzComponentParams", nzGetContainer: "nzGetContainer", nzWrapClassName: "nzWrapClassName", nzClassName: "nzClassName", nzStyle: "nzStyle", nzTitle: "nzTitle", nzMaskStyle: "nzMaskStyle", nzBodyStyle: "nzBodyStyle", nzOkText: "nzOkText", nzCancelText: "nzCancelText" }, outputs: { nzOnOk: "nzOnOk", nzOnCancel: "nzOnCancel", nzAfterOpen: "nzAfterOpen", nzAfterClose: "nzAfterClose", nzVisibleChange: "nzVisibleChange" }, exportAs: ["nzModal"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c1, decls: 1, vars: 0, template: function NzModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, NzModalComponent_ng_template_0_Template, 1, 0, "ng-template");
    } }, encapsulation: 2, changeDetection: 0 });
/** @nocollapse */
NzModalComponent.ctorParameters = () => [
    { type: ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_14__["NzConfigService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
    { type: NzModalService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"] }
];
NzModalComponent.propDecorators = {
    nzMask: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzMaskClosable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
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
    nzOnOk: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
    nzOnCancel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
    nzAfterOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
    nzAfterClose: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
    nzVisibleChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
    contentTemplateRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"], { static: true },] }],
    modalFooter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"], args: [NzModalFooterDirective,] }]
};
Object(tslib__WEBPACK_IMPORTED_MODULE_13__["__decorate"])([
    Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_14__["WithConfig"])(NZ_CONFIG_COMPONENT_NAME, true), Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_13__["__metadata"])("design:type", Boolean)
], NzModalComponent.prototype, "nzMask", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_13__["__decorate"])([
    Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_14__["WithConfig"])(NZ_CONFIG_COMPONENT_NAME, true), Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_13__["__metadata"])("design:type", Boolean)
], NzModalComponent.prototype, "nzMaskClosable", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_13__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_13__["__metadata"])("design:type", Boolean)
], NzModalComponent.prototype, "nzVisible", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_13__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_13__["__metadata"])("design:type", Boolean)
], NzModalComponent.prototype, "nzClosable", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_13__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_13__["__metadata"])("design:type", Boolean)
], NzModalComponent.prototype, "nzOkLoading", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_13__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_13__["__metadata"])("design:type", Boolean)
], NzModalComponent.prototype, "nzOkDisabled", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_13__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_13__["__metadata"])("design:type", Boolean)
], NzModalComponent.prototype, "nzCancelDisabled", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_13__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_13__["__metadata"])("design:type", Boolean)
], NzModalComponent.prototype, "nzCancelLoading", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_13__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_13__["__metadata"])("design:type", Boolean)
], NzModalComponent.prototype, "nzKeyboard", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_13__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_13__["__metadata"])("design:type", Object)
], NzModalComponent.prototype, "nzNoAnimation", void 0);
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
      [ngClass]="config.nzClassName"
      [ngStyle]="config.nzStyle"
      [style.width]="config?.nzWidth | nzToCssUnit"
    >
      <div class="ant-modal-content">
        <button *ngIf="config.nzClosable" nz-modal-close (click)="onCloseClick()"></button>
        <div class="ant-modal-body" [ngStyle]="config.nzBodyStyle">
          <div class="ant-modal-confirm-body-wrapper">
            <div class="ant-modal-confirm-body">
              <i nz-icon [nzType]="config.nzIconType"></i>
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
                [attr.cdkFocusInitial]="config.nzAutofocus === 'cancel'"
                nz-button
                (click)="onCancel()"
                [nzLoading]="config.nzCancelLoading"
                [disabled]="config.nzCancelDisabled"
              >
                {{ config.nzCancelText || locale.cancelText }}
              </button>
              <button
                *ngIf="config.nzOkText !== null"
                [attr.cdkFocusInitial]="config.nzAutofocus === 'ok'"
                nz-button
                [nzType]="config.nzOkType"
                (click)="onOk()"
                [nzLoading]="config.nzOkLoading"
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
                    '(mousedown)': 'onMousedown($event)',
                    '(mouseup)': 'onMouseup($event)'
                }
            }]
    }], function () { return [{ type: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_10__["NzI18nService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }, { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__["FocusTrapFactory"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"] }, { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayRef"] }, { type: ModalOptions }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"]]
            }] }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ANIMATION_MODULE_TYPE"]]
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
      [ngClass]="config.nzClassName"
      [ngStyle]="config.nzStyle"
      [style.width]="config?.nzWidth | nzToCssUnit"
    >
      <div class="ant-modal-content">
        <button *ngIf="config.nzClosable" nz-modal-close (click)="onCloseClick()"></button>
        <div *ngIf="config.nzTitle" nz-modal-title></div>
        <div class="ant-modal-body" [ngStyle]="config.nzBodyStyle">
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
                    '(mousedown)': 'onMousedown($event)',
                    '(mouseup)': 'onMouseup($event)'
                }
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }, { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__["FocusTrapFactory"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"] }, { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayRef"] }, { type: ModalOptions }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"]]
            }] }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ANIMATION_MODULE_TYPE"]]
            }] }]; }, { portalOutlet: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["CdkPortalOutlet"], { static: true }]
        }], modalElementRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ['modalElement', { static: true }]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NzModalService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
    }], function () { return [{ type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"] }, { type: NzModalService, decorators: [{
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
                template: ` <ng-template><ng-content></ng-content></ng-template> `,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_14__["NzConfigService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] }, { type: NzModalService }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"] }]; }, { nzVisible: [{
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
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: modal-close.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzModalCloseComponent {
    /**
     * @param {?} config
     */
    constructor(config) {
        this.config = config;
    }
}
NzModalCloseComponent.ɵfac = function NzModalCloseComponent_Factory(t) { return new (t || NzModalCloseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ModalOptions)); };
NzModalCloseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NzModalCloseComponent, selectors: [["button", "nz-modal-close", ""]], hostAttrs: ["aria-label", "Close", 1, "ant-modal-close"], exportAs: ["NzModalCloseBuiltin"], attrs: _c2, decls: 2, vars: 1, consts: [[1, "ant-modal-close-x"], [4, "nzStringTemplateOutlet"], ["nz-icon", "", 1, "ant-modal-close-icon", 3, "nzType"]], template: function NzModalCloseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzModalCloseComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzStringTemplateOutlet", ctx.config == null ? null : ctx.config.nzCloseIcon);
    } }, directives: [ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_17__["NzStringTemplateOutletDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_20__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_19__["NzIconDirective"]], encapsulation: 2, changeDetection: 0 });
/** @nocollapse */
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
      <ng-container *nzStringTemplateOutlet="config?.nzCloseIcon">
        <i nz-icon [nzType]="config?.nzCloseIcon" class="ant-modal-close-icon"></i>
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
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: modal-footer.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzModalFooterComponent {
    /**
     * @param {?} i18n
     * @param {?} config
     */
    constructor(i18n, config) {
        this.i18n = i18n;
        this.config = config;
        this.buttonsFooter = false;
        this.buttons = [];
        this.locale = {};
        this.cancelTriggered = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.okTriggered = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        if (Array.isArray(config.nzFooter)) {
            this.buttonsFooter = true;
            this.buttons = ((/** @type {?} */ (config.nzFooter))).map(mergeDefaultOption);
        }
        this.i18n.localeChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroy$)).subscribe((/**
         * @return {?}
         */
        () => {
            this.locale = this.i18n.getLocaleData('Modal');
        }));
    }
    /**
     * @return {?}
     */
    onCancel() {
        this.cancelTriggered.emit();
    }
    /**
     * @return {?}
     */
    onOk() {
        this.okTriggered.emit();
    }
    /**
     * Returns the value of the specified key.
     * If it is a function, run and return the return value of the function.
     * @deprecated Not support use function type.
     * \@breaking-change 10.0.0
     * @param {?} options
     * @param {?} prop
     * @return {?}
     */
    getButtonCallableProp(options, prop) {
        /** @type {?} */
        const value = options[prop];
        /** @type {?} */
        const componentInstance = this.modalRef.getContentComponent();
        return typeof value === 'function' ? value.apply(options, componentInstance && [componentInstance]) : value;
    }
    /**
     * Run function based on the type and set its `loading` prop if needed.
     * @deprecated Should be set options' value by the user, not library.
     * \@breaking-change 10.0.0
     * @param {?} options
     * @return {?}
     */
    onButtonClick(options) {
        /** @type {?} */
        const loading = this.getButtonCallableProp(options, 'loading');
        if (!loading) {
            /** @type {?} */
            const result = this.getButtonCallableProp(options, 'onClick');
            if (options.autoLoading && Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__["isPromise"])(result)) {
                options.loading = true;
                result.then((/**
                 * @return {?}
                 */
                () => (options.loading = false))).catch((/**
                 * @return {?}
                 */
                () => (options.loading = false)));
            }
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NzModalFooterComponent.ɵfac = function NzModalFooterComponent_Factory(t) { return new (t || NzModalFooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_10__["NzI18nService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ModalOptions)); };
NzModalFooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NzModalFooterComponent, selectors: [["div", "nz-modal-footer", ""]], hostAttrs: [1, "ant-modal-footer"], inputs: { modalRef: "modalRef" }, outputs: { cancelTriggered: "cancelTriggered", okTriggered: "okTriggered" }, exportAs: ["NzModalFooterBuiltin"], attrs: _c3, decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["defaultFooterButtons", ""], [4, "nzStringTemplateOutlet"], [3, "innerHTML", 4, "ngIf"], [4, "ngIf"], [3, "innerHTML"], ["nz-button", "", 3, "hidden", "nzLoading", "disabled", "nzType", "nzShape", "nzSize", "nzGhost", "click", 4, "ngFor", "ngForOf"], ["nz-button", "", 3, "hidden", "nzLoading", "disabled", "nzType", "nzShape", "nzSize", "nzGhost", "click"], ["nz-button", "", 3, "nzLoading", "disabled", "click", 4, "ngIf"], ["nz-button", "", 3, "nzType", "nzLoading", "disabled", "click", 4, "ngIf"], ["nz-button", "", 3, "nzLoading", "disabled", "click"], ["nz-button", "", 3, "nzType", "nzLoading", "disabled", "click"]], template: function NzModalFooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, NzModalFooterComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzModalFooterComponent_ng_template_1_Template, 2, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.config.nzFooter)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_17__["NzStringTemplateOutletDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_15__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_21__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_20__["ɵNzTransitionPatchDirective"]], encapsulation: 2 });
/** @nocollapse */
NzModalFooterComponent.ctorParameters = () => [
    { type: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_10__["NzI18nService"] },
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
      <ng-container *nzStringTemplateOutlet="config.nzFooter">
        <div *ngIf="!buttonsFooter" [innerHTML]="config.nzTitle"></div>
        <ng-container *ngIf="buttonsFooter">
          <button
            *ngFor="let button of buttons"
            nz-button
            (click)="onButtonClick(button)"
            [hidden]="!getButtonCallableProp(button, 'show')"
            [nzLoading]="getButtonCallableProp(button, 'loading')"
            [disabled]="getButtonCallableProp(button, 'disabled')"
            [nzType]="button.type"
            [nzShape]="button.shape"
            [nzSize]="button.size"
            [nzGhost]="button.ghost"
          >
            {{ button.label }}
          </button>
        </ng-container>
      </ng-container>
    </ng-container>
    <ng-template #defaultFooterButtons>
      <button
        *ngIf="config.nzCancelText !== null"
        [attr.cdkFocusInitial]="config.nzAutofocus === 'cancel'"
        nz-button
        (click)="onCancel()"
        [nzLoading]="config.nzCancelLoading"
        [disabled]="config.nzCancelDisabled"
      >
        {{ config.nzCancelText || locale.cancelText }}
      </button>
      <button
        *ngIf="config.nzOkText !== null"
        [attr.cdkFocusInitial]="config.nzAutofocus === 'ok'"
        nz-button
        [nzType]="config.nzOkType"
        (click)="onOk()"
        [nzLoading]="config.nzOkLoading"
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
    }], function () { return [{ type: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_10__["NzI18nService"] }, { type: ModalOptions }]; }, { cancelTriggered: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], okTriggered: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], modalRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }] }); })();
if (false) {}
/**
 * @param {?} options
 * @return {?}
 */
function mergeDefaultOption(options) {
    return Object.assign({ type: null, size: 'default', autoLoading: true, show: true, loading: false, disabled: false }, options);
}

/**
 * @fileoverview added by tsickle
 * Generated from: modal-title.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzModalTitleComponent {
    /**
     * @param {?} config
     */
    constructor(config) {
        this.config = config;
    }
}
NzModalTitleComponent.ɵfac = function NzModalTitleComponent_Factory(t) { return new (t || NzModalTitleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ModalOptions)); };
NzModalTitleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NzModalTitleComponent, selectors: [["div", "nz-modal-title", ""]], hostAttrs: [1, "ant-modal-header"], exportAs: ["NzModalTitleBuiltin"], attrs: _c4, decls: 2, vars: 1, consts: [[1, "ant-modal-title"], [4, "nzStringTemplateOutlet"], [3, "innerHTML"]], template: function NzModalTitleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzModalTitleComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzStringTemplateOutlet", ctx.config.nzTitle);
    } }, directives: [ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_17__["NzStringTemplateOutletDirective"]], encapsulation: 2, changeDetection: 0 });
/** @nocollapse */
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
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: modal.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzModalModule {
}
NzModalModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: NzModalModule });
NzModalModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function NzModalModule_Factory(t) { return new (t || NzModalModule)(); }, providers: [NzModalService], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"],
            _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayModule"],
            ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_17__["NzOutletModule"],
            _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["PortalModule"],
            ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_10__["NzI18nModule"],
            ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_15__["NzButtonModule"],
            ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_19__["NzIconModule"],
            ng_zorro_antd_core_pipe__WEBPACK_IMPORTED_MODULE_18__["NzPipesModule"],
            ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_16__["NzNoAnimationModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](NzModalModule, { declarations: function () { return [NzModalComponent,
        NzModalFooterDirective,
        NzModalCloseComponent,
        NzModalFooterComponent,
        NzModalTitleComponent,
        NzModalContainerComponent,
        NzModalConfirmContainerComponent,
        NzModalComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"],
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayModule"],
        ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_17__["NzOutletModule"],
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["PortalModule"],
        ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_10__["NzI18nModule"],
        ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_15__["NzButtonModule"],
        ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_19__["NzIconModule"],
        ng_zorro_antd_core_pipe__WEBPACK_IMPORTED_MODULE_18__["NzPipesModule"],
        ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_16__["NzNoAnimationModule"]]; }, exports: function () { return [NzModalComponent,
        NzModalFooterDirective]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NzModalModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"],
                    _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayModule"],
                    ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_17__["NzOutletModule"],
                    _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["PortalModule"],
                    ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_10__["NzI18nModule"],
                    ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_15__["NzButtonModule"],
                    ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_19__["NzIconModule"],
                    ng_zorro_antd_core_pipe__WEBPACK_IMPORTED_MODULE_18__["NzPipesModule"],
                    ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_16__["NzNoAnimationModule"]
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
 * @fileoverview added by tsickle
 * Generated from: modal-legacy-api.ts
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
 * @abstract
 * @template T, R
 */
class NzModalLegacyAPI {
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ng-zorro-antd-modal.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ng-zorro-antd-modal.js.map

/***/ })

};;
//# sourceMappingURL=cascader-index-module~modal-index-module~tabs-index-module~upload-index-module.js.map