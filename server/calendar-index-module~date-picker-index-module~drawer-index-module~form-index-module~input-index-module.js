exports.ids = ["calendar-index-module~date-picker-index-module~drawer-index-module~form-index-module~input-index-module"];
exports.modules = {

/***/ "/YeP":
/*!******************************************************************************!*\
  !*** ./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-resize-observers.js ***!
  \******************************************************************************/
/*! exports provided: NzResizeObserver, NzResizeObserversModule, ɵNzResizeObserverFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzResizeObserver", function() { return NzResizeObserver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzResizeObserversModule", function() { return NzResizeObserversModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵNzResizeObserverFactory", function() { return NzResizeObserverFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/coercion */ "8LU1");
/* harmony import */ var resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! resize-observer-polyfill */ "jpn6");
/* harmony import */ var resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");





/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
/**
 * Factory that creates a new ResizeObserver and allows us to stub it out in unit tests.
 */

class NzResizeObserverFactory {
    create(callback) {
        return typeof resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_2___default.a === 'undefined' ? null : new resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_2___default.a(callback);
    }
}
/** @nocollapse */
NzResizeObserverFactory.ɵfac = function NzResizeObserverFactory_Factory(t) { return new (t || NzResizeObserverFactory)(); };
NzResizeObserverFactory.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function NzResizeObserverFactory_Factory() { return new NzResizeObserverFactory(); }, token: NzResizeObserverFactory, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzResizeObserverFactory, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], null, null); })();
/** An injectable service that allows watching elements for changes to their content. */
class NzResizeObserver {
    constructor(nzResizeObserverFactory) {
        this.nzResizeObserverFactory = nzResizeObserverFactory;
        /** Keeps track of the existing ResizeObservers so they can be reused. */
        this.observedElements = new Map();
    }
    ngOnDestroy() {
        this.observedElements.forEach((_, element) => this.cleanupObserver(element));
    }
    observe(elementOrRef) {
        const element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceElement"])(elementOrRef);
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"]((observer) => {
            const stream = this.observeElement(element);
            const subscription = stream.subscribe(observer);
            return () => {
                subscription.unsubscribe();
                this.unobserveElement(element);
            };
        });
    }
    /**
     * Observes the given element by using the existing ResizeObserver if available, or creating a
     * new one if not.
     */
    observeElement(element) {
        if (!this.observedElements.has(element)) {
            const stream = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
            const observer = this.nzResizeObserverFactory.create(mutations => stream.next(mutations));
            if (observer) {
                observer.observe(element);
            }
            this.observedElements.set(element, { observer, stream, count: 1 });
        }
        else {
            this.observedElements.get(element).count++;
        }
        return this.observedElements.get(element).stream;
    }
    /**
     * Un-observes the given element and cleans up the underlying ResizeObserver if nobody else is
     * observing this element.
     */
    unobserveElement(element) {
        if (this.observedElements.has(element)) {
            this.observedElements.get(element).count--;
            if (!this.observedElements.get(element).count) {
                this.cleanupObserver(element);
            }
        }
    }
    /** Clean up the underlying ResizeObserver for the specified element. */
    cleanupObserver(element) {
        if (this.observedElements.has(element)) {
            const { observer, stream } = this.observedElements.get(element);
            if (observer) {
                observer.disconnect();
            }
            stream.complete();
            this.observedElements.delete(element);
        }
    }
}
/** @nocollapse */
NzResizeObserver.ɵfac = function NzResizeObserver_Factory(t) { return new (t || NzResizeObserver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](NzResizeObserverFactory)); };
NzResizeObserver.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function NzResizeObserver_Factory() { return new NzResizeObserver(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(NzResizeObserverFactory)); }, token: NzResizeObserver, providedIn: "root" });
NzResizeObserver.ctorParameters = () => [
    { type: NzResizeObserverFactory }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzResizeObserver, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: NzResizeObserverFactory }]; }, null); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzResizeObserversModule {
}
/** @nocollapse */
NzResizeObserversModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NzResizeObserversModule });
/** @nocollapse */
NzResizeObserversModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NzResizeObserversModule_Factory(t) { return new (t || NzResizeObserversModule)(); }, providers: [NzResizeObserverFactory] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzResizeObserversModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                providers: [NzResizeObserverFactory]
            }]
    }], null, null); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=ng-zorro-antd-core-resize-observers.js.map

/***/ }),

/***/ "WE/1":
/*!********************************************************************!*\
  !*** ./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-date-picker.js ***!
  \********************************************************************/
/*! exports provided: LibPackerModule, NzDatePickerComponent, NzDatePickerModule, NzMonthPickerComponent, NzRangePickerComponent, NzWeekPickerComponent, NzYearPickerComponent, PREFIX_CLASS, getTimeConfig, isAllowedDate, isTimeValid, isTimeValidByConfig, transCompatFormat, ɵAbstractPanelHeader, ɵAbstractTable, ɵCalendarFooterComponent, ɵDateHeaderComponent, ɵDatePickerService, ɵDateRangePopupComponent, ɵDateTableComponent, ɵDecadeHeaderComponent, ɵDecadeTableComponent, ɵInnerPopupComponent, ɵMonthHeaderComponent, ɵMonthTableComponent, ɵNzPickerComponent, ɵYearHeaderComponent, ɵYearTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LibPackerModule", function() { return LibPackerModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDatePickerComponent", function() { return NzDatePickerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDatePickerModule", function() { return NzDatePickerModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzMonthPickerComponent", function() { return NzMonthPickerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzRangePickerComponent", function() { return NzRangePickerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzWeekPickerComponent", function() { return NzWeekPickerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzYearPickerComponent", function() { return NzYearPickerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PREFIX_CLASS", function() { return PREFIX_CLASS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTimeConfig", function() { return getTimeConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAllowedDate", function() { return isAllowedDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTimeValid", function() { return isTimeValid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTimeValidByConfig", function() { return isTimeValidByConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transCompatFormat", function() { return transCompatFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵAbstractPanelHeader", function() { return AbstractPanelHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵAbstractTable", function() { return AbstractTable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵCalendarFooterComponent", function() { return CalendarFooterComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵDateHeaderComponent", function() { return DateHeaderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵDatePickerService", function() { return DatePickerService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵDateRangePopupComponent", function() { return DateRangePopupComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵDateTableComponent", function() { return DateTableComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵDecadeHeaderComponent", function() { return DecadeHeaderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵDecadeTableComponent", function() { return DecadeTableComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵInnerPopupComponent", function() { return InnerPopupComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵMonthHeaderComponent", function() { return MonthHeaderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵMonthTableComponent", function() { return MonthTableComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵNzPickerComponent", function() { return NzPickerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵYearHeaderComponent", function() { return YearHeaderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵYearTableComponent", function() { return YearTableComponent; });
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/overlay */ "rDax");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/button */ "TZWX");
/* harmony import */ var ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/core/no-animation */ "H3Kp");
/* harmony import */ var ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/core/outlet */ "fwD0");
/* harmony import */ var ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/core/overlay */ "EOB0");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/icon */ "MOHP");
/* harmony import */ var ng_zorro_antd_time_picker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/time-picker */ "wvnp");
/* harmony import */ var ng_zorro_antd_core_time__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/core/time */ "H8ly");
/* harmony import */ var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/core/util */ "d1+9");
/* harmony import */ var ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/i18n */ "d4FC");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ "zOht");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/core/config */ "8IHs");
/* harmony import */ var ng_zorro_antd_core_logger__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/core/logger */ "RuSR");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/cdk/keycodes */ "FtGj");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/cdk/platform */ "nLfN");
/* harmony import */ var ng_zorro_antd_core_animation__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/core/animation */ "eczo");
/* harmony import */ var ng_zorro_antd_core_resize_observers__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/core/resize-observers */ "/YeP");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "vdzw");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "uLhK");























/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

















function CalendarFooterComponent_div_1_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
} }
function CalendarFooterComponent_div_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CalendarFooterComponent_div_1_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", ctx_r3.extraFooter);
} }
function CalendarFooterComponent_div_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", ctx_r4.extraFooter, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
} }
function CalendarFooterComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](1, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, CalendarFooterComponent_div_1_ng_container_2_Template, 2, 1, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, CalendarFooterComponent_div_1_ng_container_3_Template, 2, 1, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("", ctx_r0.prefixCls, "-footer-extra");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitch", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", ctx_r0.isTemplateRef(ctx_r0.extraFooter));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", ctx_r0.isNonEmptyString(ctx_r0.extraFooter));
} }
function CalendarFooterComponent_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CalendarFooterComponent_a_2_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r6.isTodayDisabled ? null : ctx_r6.onClickToday(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate2"]("", ctx_r1.prefixCls, "-today-btn ", ctx_r1.isTodayDisabled ? ctx_r1.prefixCls + "-today-btn-disabled" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("title", ctx_r1.todayTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r1.locale.today, " ");
} }
function CalendarFooterComponent_ul_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
} }
function CalendarFooterComponent_ul_3_li_2_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CalendarFooterComponent_ul_3_li_2_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r11.isTodayDisabled ? null : ctx_r11.onClickToday(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("", ctx_r9.prefixCls, "-now");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("", ctx_r9.prefixCls, "-now-btn");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r9.locale.now, " ");
} }
function CalendarFooterComponent_ul_3_li_3_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CalendarFooterComponent_ul_3_li_3_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r13.okDisabled ? null : ctx_r13.clickOk.emit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("", ctx_r10.prefixCls, "-ok");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r10.okDisabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r10.locale.ok, " ");
} }
function CalendarFooterComponent_ul_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CalendarFooterComponent_ul_3_ng_container_1_Template, 1, 0, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, CalendarFooterComponent_ul_3_li_2_Template, 3, 7, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, CalendarFooterComponent_ul_3_li_3_Template, 3, 5, "li", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("", ctx_r2.prefixCls, "-ranges");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", ctx_r2.rangeQuickSelector);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.hasTimePicker && !ctx_r2.isRange);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.hasTimePicker);
} }
function DateRangePopupComponent_ng_container_0_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
} }
function DateRangePopupComponent_ng_container_0_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
} }
function DateRangePopupComponent_ng_container_0_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
} }
const _c0 = function () { return { partType: "left" }; };
const _c1 = function () { return { partType: "right" }; };
function DateRangePopupComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, DateRangePopupComponent_ng_container_0_ng_container_5_Template, 1, 0, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, DateRangePopupComponent_ng_container_0_ng_container_6_Template, 1, 0, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, DateRangePopupComponent_ng_container_0_ng_container_7_Template, 1, 0, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](8);
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate2"]("", ctx_r0.prefixCls, "-range-wrapper ", ctx_r0.prefixCls, "-date-range-wrapper");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("", ctx_r0.prefixCls, "-range-arrow");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("left", ctx_r0.datePickerService == null ? null : ctx_r0.datePickerService.arrowLeft, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("", ctx_r0.prefixCls, "-panel-container");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("", ctx_r0.prefixCls, "-panels");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r7)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](20, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r7)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](21, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r5);
} }
function DateRangePopupComponent_ng_template_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
} }
function DateRangePopupComponent_ng_template_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
} }
function DateRangePopupComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, DateRangePopupComponent_ng_template_1_ng_container_2_Template, 1, 0, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, DateRangePopupComponent_ng_template_1_ng_container_3_Template, 1, 0, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](4);
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate4"]("", ctx_r2.prefixCls, "-panel-container ", ctx_r2.showWeek ? ctx_r2.prefixCls + "-week-number" : "", " ", ctx_r2.hasTimePicker ? ctx_r2.prefixCls + "-time" : "", " ", ctx_r2.isRange ? ctx_r2.prefixCls + "-range" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("", ctx_r2.prefixCls, "-panel");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r5);
} }
function DateRangePopupComponent_ng_template_3_inner_popup_0_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "inner-popup", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("panelModeChange", function DateRangePopupComponent_ng_template_3_inner_popup_0_Template_inner_popup_panelModeChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19); const partType_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().partType; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r18.onPanelModeChange($event, partType_r16); })("cellHover", function DateRangePopupComponent_ng_template_3_inner_popup_0_Template_inner_popup_cellHover_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r21.onCellHover($event); })("selectDate", function DateRangePopupComponent_ng_template_3_inner_popup_0_Template_inner_popup_selectDate_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r22.changeValueFromSelect($event, !ctx_r22.showTime); })("selectTime", function DateRangePopupComponent_ng_template_3_inner_popup_0_Template_inner_popup_selectTime_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19); const partType_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().partType; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r23.onSelectTime($event, partType_r16); })("headerChange", function DateRangePopupComponent_ng_template_3_inner_popup_0_Template_inner_popup_headerChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19); const partType_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().partType; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r25.onActiveDateChange($event, partType_r16); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const partType_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().partType;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("showWeek", ctx_r17.showWeek)("endPanelMode", ctx_r17.getPanelMode(ctx_r17.endPanelMode, partType_r16))("partType", partType_r16)("locale", ctx_r17.locale)("showTimePicker", ctx_r17.hasTimePicker)("timeOptions", ctx_r17.getTimeOptions(partType_r16))("panelMode", ctx_r17.getPanelMode(ctx_r17.panelMode, partType_r16))("activeDate", ctx_r17.getActiveDate(partType_r16))("value", ctx_r17.getValue(partType_r16))("disabledDate", ctx_r17.disabledDate)("dateRender", ctx_r17.dateRender)("selectedValue", ctx_r17.datePickerService == null ? null : ctx_r17.datePickerService.value)("hoverValue", ctx_r17.hoverValue);
} }
function DateRangePopupComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, DateRangePopupComponent_ng_template_3_inner_popup_0_Template, 1, 13, "inner-popup", 9);
} if (rf & 2) {
    const partType_r16 = ctx.partType;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r4.show(partType_r16));
} }
function DateRangePopupComponent_ng_template_5_calendar_footer_0_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "calendar-footer", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("clickOk", function DateRangePopupComponent_ng_template_5_calendar_footer_0_Template_calendar_footer_clickOk_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r29.onClickOk(); })("clickToday", function DateRangePopupComponent_ng_template_5_calendar_footer_0_Template_calendar_footer_clickToday_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r30); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r31.onClickToday($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("locale", ctx_r28.locale)("isRange", ctx_r28.isRange)("showToday", ctx_r28.showToday)("hasTimePicker", ctx_r28.hasTimePicker)("okDisabled", !ctx_r28.isAllowed(ctx_r28.datePickerService == null ? null : ctx_r28.datePickerService.value))("extraFooter", ctx_r28.extraFooter)("rangeQuickSelector", ctx_r28.ranges ? _r9 : null);
} }
function DateRangePopupComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, DateRangePopupComponent_ng_template_5_calendar_footer_0_Template, 1, 7, "calendar-footer", 11);
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r6.hasFooter);
} }
function DateRangePopupComponent_ng_template_7_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
} }
const _c2 = function (a0) { return { partType: a0 }; };
function DateRangePopupComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, DateRangePopupComponent_ng_template_7_ng_container_1_Template, 1, 0, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const partType_r32 = ctx.partType;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("", ctx_r8.prefixCls, "-panel");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](5, _c2, partType_r32));
} }
function DateRangePopupComponent_ng_template_9_li_0_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DateRangePopupComponent_ng_template_9_li_0_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r37); const name_r35 = ctx.$implicit; const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r36.onClickPresetRange(ctx_r36.ranges[name_r35]); })("mouseenter", function DateRangePopupComponent_ng_template_9_li_0_Template_li_mouseenter_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r37); const name_r35 = ctx.$implicit; const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r38.onHoverPresetRange(ctx_r38.ranges[name_r35]); })("mouseleave", function DateRangePopupComponent_ng_template_9_li_0_Template_li_mouseleave_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r37); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r39.onPresetRangeMouseLeave(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const name_r35 = ctx.$implicit;
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("", ctx_r34.prefixCls, "-preset");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](name_r35);
} }
function DateRangePopupComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, DateRangePopupComponent_ng_template_9_li_0_Template, 3, 4, "li", 13);
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r10.getObjectKeys(ctx_r10.ranges));
} }
const _c3 = ["separatorElement"];
const _c4 = ["pickerInput"];
const _c5 = ["rangePickerInput"];
const _c6 = ["nz-picker", ""];
function NzPickerComponent_div_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
} }
function NzPickerComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "input", 5, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function NzPickerComponent_div_0_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r9.inputValue = $event; })("focus", function NzPickerComponent_div_0_Template_input_focus_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r11.onFocus($event); })("blur", function NzPickerComponent_div_0_Template_input_blur_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r12.onBlur($event); })("ngModelChange", function NzPickerComponent_div_0_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r13.onInputChange($event); })("keyup.enter", function NzPickerComponent_div_0_Template_input_keyup_enter_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r14.onKeyupEnter($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, NzPickerComponent_div_0_ng_container_3_Template, 1, 0, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("", ctx_r0.prefixCls, "-input");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("ant-input-disabled", ctx_r0.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", ctx_r0.getPlaceholder());
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r0.disabled)("readOnly", ctx_r0.inputReadOnly)("ngModel", ctx_r0.inputValue)("size", ctx_r0.inputSize);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r4);
} }
function NzPickerComponent_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
} }
function NzPickerComponent_ng_container_1_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r17.separator);
} }
function NzPickerComponent_ng_container_1_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 12);
} }
function NzPickerComponent_ng_container_1_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
} }
function NzPickerComponent_ng_container_1_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
} }
function NzPickerComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NzPickerComponent_ng_container_1_ng_container_2_Template, 1, 0, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", null, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, NzPickerComponent_ng_container_1_ng_container_6_Template, 2, 1, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, NzPickerComponent_ng_container_1_ng_template_7_Template, 1, 0, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, NzPickerComponent_ng_container_1_ng_container_10_Template, 1, 0, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, NzPickerComponent_ng_container_1_ng_container_11_Template, 1, 0, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](8);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](3);
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("", ctx_r1.prefixCls, "-input");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r2)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](19, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("", ctx_r1.prefixCls, "-range-separator");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("", ctx_r1.prefixCls, "-separator");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.separator)("ngIfElse", _r18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("", ctx_r1.prefixCls, "-input");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r2)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](20, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r4);
} }
function NzPickerComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "input", 13, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NzPickerComponent_ng_template_2_Template_input_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r24.onClickInputBox($event); })("blur", function NzPickerComponent_ng_template_2_Template_input_blur_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r25); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r26.onBlur($event); })("focus", function NzPickerComponent_ng_template_2_Template_input_focus_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r25); const partType_r22 = ctx.partType; const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r27.onFocus($event, partType_r22); })("keyup.enter", function NzPickerComponent_ng_template_2_Template_input_keyup_enter_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r25); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r28.onKeyupEnter($event); })("ngModelChange", function NzPickerComponent_ng_template_2_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r25); const partType_r22 = ctx.partType; const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return (ctx_r29.inputValue[ctx_r29.datePickerService.getActiveIndex(partType_r22)] = $event); })("ngModelChange", function NzPickerComponent_ng_template_2_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r25); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r30.onInputChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const partType_r22 = ctx.partType;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", ctx_r3.getPlaceholder(partType_r22));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r3.disabled)("readOnly", ctx_r3.inputReadOnly)("size", ctx_r3.inputSize)("ngModel", ctx_r3.inputValue[ctx_r3.datePickerService.getActiveIndex(partType_r22)]);
} }
function NzPickerComponent_ng_template_4_span_1_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NzPickerComponent_ng_template_4_span_1_Template_span_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r34); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r33.onClickClear($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("", ctx_r31.prefixCls, "-clear");
} }
function NzPickerComponent_ng_template_4_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const suffixIcon_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzType", suffixIcon_r35);
} }
function NzPickerComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzPickerComponent_ng_template_4_span_1_Template, 2, 3, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, NzPickerComponent_ng_template_4_ng_container_3_Template, 2, 1, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("", ctx_r5.prefixCls, "-active-bar");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("width", ctx_r5.inputWidth, "px")("left", ctx_r5.datePickerService == null ? null : ctx_r5.datePickerService.arrowLeft, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r5.showClear());
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("", ctx_r5.prefixCls, "-suffix");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r5.suffixIcon);
} }
function NzPickerComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzNoAnimation", ctx_r6.noAnimation)("@slideMotion", "enter");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate2"]("", ctx_r6.prefixCls, "-dropdown ", ctx_r6.dropdownClassName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("ant-picker-dropdown-placement-bottomLeft", ctx_r6.currentPositionY === "bottom" && ctx_r6.currentPositionX === "start")("ant-picker-dropdown-placement-topLeft", ctx_r6.currentPositionY === "top" && ctx_r6.currentPositionX === "start")("ant-picker-dropdown-placement-bottomRight", ctx_r6.currentPositionY === "bottom" && ctx_r6.currentPositionX === "end")("ant-picker-dropdown-placement-topRight", ctx_r6.currentPositionY === "top" && ctx_r6.currentPositionX === "end")("ant-picker-dropdown-range", ctx_r6.isRange);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", ctx_r6.popupStyle);
} }
const _c7 = ["*"];
function InnerPopupComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "decade-header", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("valueChange", function InnerPopupComponent_ng_container_3_Template_decade_header_valueChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r5.activeDate = $event; })("panelModeChange", function InnerPopupComponent_ng_container_3_Template_decade_header_panelModeChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r7.panelModeChange.emit($event); })("valueChange", function InnerPopupComponent_ng_container_3_Template_decade_header_valueChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r8.headerChange.emit($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "decade-table", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("valueChange", function InnerPopupComponent_ng_container_3_Template_decade_table_valueChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r9.onChooseDecade($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx_r0.activeDate)("locale", ctx_r0.locale)("showSuperPreBtn", ctx_r0.enablePrevNext("prev", "decade"))("showSuperNextBtn", ctx_r0.enablePrevNext("next", "decade"))("showNextBtn", false)("showPreBtn", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("", ctx_r0.prefixCls, "-body");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("activeDate", ctx_r0.activeDate)("value", ctx_r0.value)("locale", ctx_r0.locale)("disabledDate", ctx_r0.disabledDate);
} }
function InnerPopupComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "year-header", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("valueChange", function InnerPopupComponent_ng_container_4_Template_year_header_valueChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r10.activeDate = $event; })("panelModeChange", function InnerPopupComponent_ng_container_4_Template_year_header_panelModeChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r12.panelModeChange.emit($event); })("valueChange", function InnerPopupComponent_ng_container_4_Template_year_header_valueChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r13.headerChange.emit($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "year-table", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("valueChange", function InnerPopupComponent_ng_container_4_Template_year_table_valueChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r14.onChooseYear($event); })("cellHover", function InnerPopupComponent_ng_container_4_Template_year_table_cellHover_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r15.cellHover.emit($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx_r1.activeDate)("locale", ctx_r1.locale)("showSuperPreBtn", ctx_r1.enablePrevNext("prev", "year"))("showSuperNextBtn", ctx_r1.enablePrevNext("next", "year"))("showNextBtn", false)("showPreBtn", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("", ctx_r1.prefixCls, "-body");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("activeDate", ctx_r1.activeDate)("value", ctx_r1.value)("locale", ctx_r1.locale)("disabledDate", ctx_r1.disabledDate)("selectedValue", ctx_r1.selectedValue)("hoverValue", ctx_r1.hoverValue);
} }
function InnerPopupComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "month-header", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("valueChange", function InnerPopupComponent_ng_container_5_Template_month_header_valueChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r16.activeDate = $event; })("panelModeChange", function InnerPopupComponent_ng_container_5_Template_month_header_panelModeChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r17); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r18.panelModeChange.emit($event); })("valueChange", function InnerPopupComponent_ng_container_5_Template_month_header_valueChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r17); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r19.headerChange.emit($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "month-table", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("valueChange", function InnerPopupComponent_ng_container_5_Template_month_table_valueChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r17); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r20.onChooseMonth($event); })("cellHover", function InnerPopupComponent_ng_container_5_Template_month_table_cellHover_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r17); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r21.cellHover.emit($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx_r2.activeDate)("locale", ctx_r2.locale)("showSuperPreBtn", ctx_r2.enablePrevNext("prev", "month"))("showSuperNextBtn", ctx_r2.enablePrevNext("next", "month"))("showNextBtn", false)("showPreBtn", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("", ctx_r2.prefixCls, "-body");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx_r2.value)("activeDate", ctx_r2.activeDate)("locale", ctx_r2.locale)("disabledDate", ctx_r2.disabledDate)("selectedValue", ctx_r2.selectedValue)("hoverValue", ctx_r2.hoverValue);
} }
function InnerPopupComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "date-header", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("valueChange", function InnerPopupComponent_ng_container_6_Template_date_header_valueChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r22.activeDate = $event; })("panelModeChange", function InnerPopupComponent_ng_container_6_Template_date_header_panelModeChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r23); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r24.panelModeChange.emit($event); })("valueChange", function InnerPopupComponent_ng_container_6_Template_date_header_valueChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r23); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r25.headerChange.emit($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "date-table", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("valueChange", function InnerPopupComponent_ng_container_6_Template_date_table_valueChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r23); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r26.onSelectDate($event); })("cellHover", function InnerPopupComponent_ng_container_6_Template_date_table_cellHover_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r23); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r27.cellHover.emit($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx_r3.activeDate)("locale", ctx_r3.locale)("showSuperPreBtn", ctx_r3.showWeek ? ctx_r3.enablePrevNext("prev", "week") : ctx_r3.enablePrevNext("prev", "date"))("showSuperNextBtn", ctx_r3.showWeek ? ctx_r3.enablePrevNext("next", "week") : ctx_r3.enablePrevNext("next", "date"))("showPreBtn", ctx_r3.showWeek ? ctx_r3.enablePrevNext("prev", "week") : ctx_r3.enablePrevNext("prev", "date"))("showNextBtn", ctx_r3.showWeek ? ctx_r3.enablePrevNext("next", "week") : ctx_r3.enablePrevNext("next", "date"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("", ctx_r3.prefixCls, "-body");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("locale", ctx_r3.locale)("showWeek", ctx_r3.showWeek)("value", ctx_r3.value)("activeDate", ctx_r3.activeDate)("disabledDate", ctx_r3.disabledDate)("cellRender", ctx_r3.dateRender)("selectedValue", ctx_r3.selectedValue)("hoverValue", ctx_r3.hoverValue);
} }
function InnerPopupComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "nz-time-picker-panel", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function InnerPopupComponent_ng_container_7_Template_nz_time_picker_panel_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r28.onSelectTime($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzInDatePicker", true)("ngModel", ctx_r4.value == null ? null : ctx_r4.value.nativeDate)("format", ctx_r4.timeOptions.nzFormat)("nzHourStep", ctx_r4.timeOptions.nzHourStep)("nzMinuteStep", ctx_r4.timeOptions.nzMinuteStep)("nzSecondStep", ctx_r4.timeOptions.nzSecondStep)("nzDisabledHours", ctx_r4.timeOptions.nzDisabledHours)("nzDisabledMinutes", ctx_r4.timeOptions.nzDisabledMinutes)("nzDisabledSeconds", ctx_r4.timeOptions.nzDisabledSeconds)("nzHideDisabledOptions", !!ctx_r4.timeOptions.nzHideDisabledOptions)("nzDefaultOpenValue", ctx_r4.timeOptions.nzDefaultOpenValue)("nzUse12Hours", !!ctx_r4.timeOptions.nzUse12Hours)("nzAddOn", ctx_r4.timeOptions.nzAddOn);
} }
function DateHeaderComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DateHeaderComponent_ng_container_6_Template_button_click_1_listener() { const selector_r1 = ctx.$implicit; return selector_r1.onClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const selector_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](selector_r1.className);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("title", selector_r1.title || null);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", selector_r1.label, " ");
} }
function DateTableComponent_thead_1_th_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "th", 6);
} }
function DateTableComponent_thead_1_th_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cell_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("title", cell_r4.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", cell_r4.content, " ");
} }
function DateTableComponent_thead_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "tr", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, DateTableComponent_thead_1_th_2_Template, 1, 0, "th", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, DateTableComponent_thead_1_th_3_Template, 2, 2, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.showWeek);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.headRow);
} }
function DateTableComponent_tr_3_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("", ctx_r6.prefixCls, "-cell-week");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", row_r5.weekNum, " ");
} }
function DateTableComponent_tr_3_td_2_ng_container_2_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
} }
const _c8 = function (a0) { return { $implicit: a0 }; };
function DateTableComponent_tr_3_td_2_ng_container_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, DateTableComponent_tr_3_td_2_ng_container_2_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const cell_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", cell_r9.cellRender)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c8, cell_r9.value));
} }
function DateTableComponent_tr_3_td_2_ng_container_2_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const cell_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", cell_r9.cellRender, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
} }
function DateTableComponent_tr_3_td_2_ng_container_2_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const cell_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("", ctx_r14.prefixCls, "-cell-inner");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-selected", cell_r9.isSelected)("aria-disabled", cell_r9.isDisabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", cell_r9.content, " ");
} }
function DateTableComponent_tr_3_td_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](1, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, DateTableComponent_tr_3_td_2_ng_container_2_ng_container_2_Template, 2, 4, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, DateTableComponent_tr_3_td_2_ng_container_2_ng_container_3_Template, 2, 1, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, DateTableComponent_tr_3_td_2_ng_container_2_ng_container_4_Template, 3, 6, "ng-container", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const cell_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitch", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", ctx_r10.isTemplateRef(cell_r9.cellRender));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", ctx_r10.isNonEmptyString(cell_r9.cellRender));
} }
function DateTableComponent_tr_3_td_2_ng_container_3_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
} }
function DateTableComponent_tr_3_td_2_ng_container_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, DateTableComponent_tr_3_td_2_ng_container_3_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const cell_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", cell_r9.fullCellRender)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c8, cell_r9.value));
} }
function DateTableComponent_tr_3_td_2_ng_container_3_ng_template_3_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
} }
function DateTableComponent_tr_3_td_2_ng_container_3_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, DateTableComponent_tr_3_td_2_ng_container_3_ng_template_3_ng_container_3_Template, 1, 0, "ng-container", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cell_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("", ctx_r22.prefixCls, "-date-value");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](cell_r9.content);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("", ctx_r22.prefixCls, "-date-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", cell_r9.cellRender)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](9, _c8, cell_r9.value));
} }
function DateTableComponent_tr_3_td_2_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, DateTableComponent_tr_3_td_2_ng_container_3_ng_container_2_Template, 2, 4, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, DateTableComponent_tr_3_td_2_ng_container_3_ng_template_3_Template, 4, 11, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](4);
    const cell_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("", ctx_r11.prefixCls, "-date ant-picker-cell-inner");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("ant-picker-calendar-date-today", cell_r9.isToday);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", cell_r9.fullCellRender)("ngIfElse", _r21);
} }
function DateTableComponent_tr_3_td_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DateTableComponent_tr_3_td_2_Template_td_click_0_listener() { const cell_r9 = ctx.$implicit; return cell_r9.isDisabled ? null : cell_r9.onClick(); })("mouseenter", function DateTableComponent_tr_3_td_2_Template_td_mouseenter_0_listener() { const cell_r9 = ctx.$implicit; return cell_r9.onMouseEnter(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](1, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, DateTableComponent_tr_3_td_2_ng_container_2_Template, 5, 3, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, DateTableComponent_tr_3_td_2_ng_container_3_Template, 5, 7, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cell_r9 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("title", cell_r9.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", cell_r9.classMap);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitch", ctx_r7.prefixCls);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "ant-picker");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "ant-picker-calendar");
} }
function DateTableComponent_tr_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, DateTableComponent_tr_3_td_1_Template, 2, 4, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, DateTableComponent_tr_3_td_2_Template, 4, 5, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r5 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", row_r5.classMap);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", row_r5.weekNum);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", row_r5.dateCells)("ngForTrackBy", ctx_r1.trackByBodyColumn);
} }
function DecadeHeaderComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DecadeHeaderComponent_ng_container_6_Template_button_click_1_listener() { const selector_r1 = ctx.$implicit; return selector_r1.onClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const selector_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](selector_r1.className);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("title", selector_r1.title || null);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", selector_r1.label, " ");
} }
function DecadeTableComponent_thead_1_th_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "th", 6);
} }
function DecadeTableComponent_thead_1_th_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cell_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("title", cell_r4.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", cell_r4.content, " ");
} }
function DecadeTableComponent_thead_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "tr", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, DecadeTableComponent_thead_1_th_2_Template, 1, 0, "th", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, DecadeTableComponent_thead_1_th_3_Template, 2, 2, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.showWeek);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.headRow);
} }
function DecadeTableComponent_tr_3_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("", ctx_r6.prefixCls, "-cell-week");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", row_r5.weekNum, " ");
} }
function DecadeTableComponent_tr_3_td_2_ng_container_2_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
} }
function DecadeTableComponent_tr_3_td_2_ng_container_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, DecadeTableComponent_tr_3_td_2_ng_container_2_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const cell_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", cell_r9.cellRender)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c8, cell_r9.value));
} }
function DecadeTableComponent_tr_3_td_2_ng_container_2_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const cell_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", cell_r9.cellRender, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
} }
function DecadeTableComponent_tr_3_td_2_ng_container_2_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const cell_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("", ctx_r14.prefixCls, "-cell-inner");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-selected", cell_r9.isSelected)("aria-disabled", cell_r9.isDisabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", cell_r9.content, " ");
} }
function DecadeTableComponent_tr_3_td_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](1, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, DecadeTableComponent_tr_3_td_2_ng_container_2_ng_container_2_Template, 2, 4, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, DecadeTableComponent_tr_3_td_2_ng_container_2_ng_container_3_Template, 2, 1, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, DecadeTableComponent_tr_3_td_2_ng_container_2_ng_container_4_Template, 3, 6, "ng-container", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const cell_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitch", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", ctx_r10.isTemplateRef(cell_r9.cellRender));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", ctx_r10.isNonEmptyString(cell_r9.cellRender));
} }
function DecadeTableComponent_tr_3_td_2_ng_container_3_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
} }
function DecadeTableComponent_tr_3_td_2_ng_container_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, DecadeTableComponent_tr_3_td_2_ng_container_3_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const cell_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", cell_r9.fullCellRender)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c8, cell_r9.value));
} }
function DecadeTableComponent_tr_3_td_2_ng_container_3_ng_template_3_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
} }
function DecadeTableComponent_tr_3_td_2_ng_container_3_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, DecadeTableComponent_tr_3_td_2_ng_container_3_ng_template_3_ng_container_3_Template, 1, 0, "ng-container", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cell_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("", ctx_r22.prefixCls, "-date-value");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](cell_r9.content);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("", ctx_r22.prefixCls, "-date-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", cell_r9.cellRender)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](9, _c8, cell_r9.value));
} }
function DecadeTableComponent_tr_3_td_2_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, DecadeTableComponent_tr_3_td_2_ng_container_3_ng_container_2_Template, 2, 4, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, DecadeTableComponent_tr_3_td_2_ng_container_3_ng_template_3_Template, 4, 11, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](4);
    const cell_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("", ctx_r11.prefixCls, "-date ant-picker-cell-inner");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("ant-picker-calendar-date-today", cell_r9.isToday);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", cell_r9.fullCellRender)("ngIfElse", _r21);
} }
function DecadeTableComponent_tr_3_td_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DecadeTableComponent_tr_3_td_2_Template_td_click_0_listener() { const cell_r9 = ctx.$implicit; return cell_r9.isDisabled ? null : cell_r9.onClick(); })("mouseenter", function DecadeTableComponent_tr_3_td_2_Template_td_mouseenter_0_listener() { const cell_r9 = ctx.$implicit; return cell_r9.onMouseEnter(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](1, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, DecadeTableComponent_tr_3_td_2_ng_container_2_Template, 5, 3, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, DecadeTableComponent_tr_3_td_2_ng_container_3_Template, 5, 7, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cell_r9 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("title", cell_r9.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", cell_r9.classMap);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitch", ctx_r7.prefixCls);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "ant-picker");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "ant-picker-calendar");
} }
function DecadeTableComponent_tr_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, DecadeTableComponent_tr_3_td_1_Template, 2, 4, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, DecadeTableComponent_tr_3_td_2_Template, 4, 5, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r5 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", row_r5.classMap);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", row_r5.weekNum);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", row_r5.dateCells)("ngForTrackBy", ctx_r1.trackByBodyColumn);
} }
function MonthHeaderComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MonthHeaderComponent_ng_container_6_Template_button_click_1_listener() { const selector_r1 = ctx.$implicit; return selector_r1.onClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const selector_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](selector_r1.className);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("title", selector_r1.title || null);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", selector_r1.label, " ");
} }
function MonthTableComponent_thead_1_th_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "th", 6);
} }
function MonthTableComponent_thead_1_th_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cell_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("title", cell_r4.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", cell_r4.content, " ");
} }
function MonthTableComponent_thead_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "tr", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, MonthTableComponent_thead_1_th_2_Template, 1, 0, "th", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, MonthTableComponent_thead_1_th_3_Template, 2, 2, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.showWeek);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.headRow);
} }
function MonthTableComponent_tr_3_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("", ctx_r6.prefixCls, "-cell-week");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", row_r5.weekNum, " ");
} }
function MonthTableComponent_tr_3_td_2_ng_container_2_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
} }
function MonthTableComponent_tr_3_td_2_ng_container_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MonthTableComponent_tr_3_td_2_ng_container_2_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const cell_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", cell_r9.cellRender)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c8, cell_r9.value));
} }
function MonthTableComponent_tr_3_td_2_ng_container_2_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const cell_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", cell_r9.cellRender, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
} }
function MonthTableComponent_tr_3_td_2_ng_container_2_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const cell_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("", ctx_r14.prefixCls, "-cell-inner");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-selected", cell_r9.isSelected)("aria-disabled", cell_r9.isDisabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", cell_r9.content, " ");
} }
function MonthTableComponent_tr_3_td_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](1, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, MonthTableComponent_tr_3_td_2_ng_container_2_ng_container_2_Template, 2, 4, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, MonthTableComponent_tr_3_td_2_ng_container_2_ng_container_3_Template, 2, 1, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, MonthTableComponent_tr_3_td_2_ng_container_2_ng_container_4_Template, 3, 6, "ng-container", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const cell_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitch", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", ctx_r10.isTemplateRef(cell_r9.cellRender));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", ctx_r10.isNonEmptyString(cell_r9.cellRender));
} }
function MonthTableComponent_tr_3_td_2_ng_container_3_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
} }
function MonthTableComponent_tr_3_td_2_ng_container_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MonthTableComponent_tr_3_td_2_ng_container_3_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const cell_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", cell_r9.fullCellRender)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c8, cell_r9.value));
} }
function MonthTableComponent_tr_3_td_2_ng_container_3_ng_template_3_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
} }
function MonthTableComponent_tr_3_td_2_ng_container_3_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, MonthTableComponent_tr_3_td_2_ng_container_3_ng_template_3_ng_container_3_Template, 1, 0, "ng-container", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cell_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("", ctx_r22.prefixCls, "-date-value");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](cell_r9.content);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("", ctx_r22.prefixCls, "-date-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", cell_r9.cellRender)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](9, _c8, cell_r9.value));
} }
function MonthTableComponent_tr_3_td_2_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, MonthTableComponent_tr_3_td_2_ng_container_3_ng_container_2_Template, 2, 4, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, MonthTableComponent_tr_3_td_2_ng_container_3_ng_template_3_Template, 4, 11, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](4);
    const cell_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("", ctx_r11.prefixCls, "-date ant-picker-cell-inner");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("ant-picker-calendar-date-today", cell_r9.isToday);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", cell_r9.fullCellRender)("ngIfElse", _r21);
} }
function MonthTableComponent_tr_3_td_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MonthTableComponent_tr_3_td_2_Template_td_click_0_listener() { const cell_r9 = ctx.$implicit; return cell_r9.isDisabled ? null : cell_r9.onClick(); })("mouseenter", function MonthTableComponent_tr_3_td_2_Template_td_mouseenter_0_listener() { const cell_r9 = ctx.$implicit; return cell_r9.onMouseEnter(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](1, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, MonthTableComponent_tr_3_td_2_ng_container_2_Template, 5, 3, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, MonthTableComponent_tr_3_td_2_ng_container_3_Template, 5, 7, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cell_r9 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("title", cell_r9.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", cell_r9.classMap);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitch", ctx_r7.prefixCls);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "ant-picker");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "ant-picker-calendar");
} }
function MonthTableComponent_tr_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MonthTableComponent_tr_3_td_1_Template, 2, 4, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, MonthTableComponent_tr_3_td_2_Template, 4, 5, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r5 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", row_r5.classMap);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", row_r5.weekNum);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", row_r5.dateCells)("ngForTrackBy", ctx_r1.trackByBodyColumn);
} }
function YearHeaderComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function YearHeaderComponent_ng_container_6_Template_button_click_1_listener() { const selector_r1 = ctx.$implicit; return selector_r1.onClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const selector_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](selector_r1.className);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("title", selector_r1.title || null);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", selector_r1.label, " ");
} }
function YearTableComponent_thead_1_th_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "th", 6);
} }
function YearTableComponent_thead_1_th_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cell_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("title", cell_r4.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", cell_r4.content, " ");
} }
function YearTableComponent_thead_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "tr", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, YearTableComponent_thead_1_th_2_Template, 1, 0, "th", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, YearTableComponent_thead_1_th_3_Template, 2, 2, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.showWeek);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.headRow);
} }
function YearTableComponent_tr_3_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("", ctx_r6.prefixCls, "-cell-week");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", row_r5.weekNum, " ");
} }
function YearTableComponent_tr_3_td_2_ng_container_2_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
} }
function YearTableComponent_tr_3_td_2_ng_container_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, YearTableComponent_tr_3_td_2_ng_container_2_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const cell_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", cell_r9.cellRender)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c8, cell_r9.value));
} }
function YearTableComponent_tr_3_td_2_ng_container_2_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const cell_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", cell_r9.cellRender, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
} }
function YearTableComponent_tr_3_td_2_ng_container_2_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const cell_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("", ctx_r14.prefixCls, "-cell-inner");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-selected", cell_r9.isSelected)("aria-disabled", cell_r9.isDisabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", cell_r9.content, " ");
} }
function YearTableComponent_tr_3_td_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](1, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, YearTableComponent_tr_3_td_2_ng_container_2_ng_container_2_Template, 2, 4, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, YearTableComponent_tr_3_td_2_ng_container_2_ng_container_3_Template, 2, 1, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, YearTableComponent_tr_3_td_2_ng_container_2_ng_container_4_Template, 3, 6, "ng-container", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const cell_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitch", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", ctx_r10.isTemplateRef(cell_r9.cellRender));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", ctx_r10.isNonEmptyString(cell_r9.cellRender));
} }
function YearTableComponent_tr_3_td_2_ng_container_3_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
} }
function YearTableComponent_tr_3_td_2_ng_container_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, YearTableComponent_tr_3_td_2_ng_container_3_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const cell_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", cell_r9.fullCellRender)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c8, cell_r9.value));
} }
function YearTableComponent_tr_3_td_2_ng_container_3_ng_template_3_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
} }
function YearTableComponent_tr_3_td_2_ng_container_3_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, YearTableComponent_tr_3_td_2_ng_container_3_ng_template_3_ng_container_3_Template, 1, 0, "ng-container", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cell_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("", ctx_r22.prefixCls, "-date-value");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](cell_r9.content);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("", ctx_r22.prefixCls, "-date-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", cell_r9.cellRender)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](9, _c8, cell_r9.value));
} }
function YearTableComponent_tr_3_td_2_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, YearTableComponent_tr_3_td_2_ng_container_3_ng_container_2_Template, 2, 4, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, YearTableComponent_tr_3_td_2_ng_container_3_ng_template_3_Template, 4, 11, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](4);
    const cell_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("", ctx_r11.prefixCls, "-date ant-picker-cell-inner");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("ant-picker-calendar-date-today", cell_r9.isToday);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", cell_r9.fullCellRender)("ngIfElse", _r21);
} }
function YearTableComponent_tr_3_td_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function YearTableComponent_tr_3_td_2_Template_td_click_0_listener() { const cell_r9 = ctx.$implicit; return cell_r9.isDisabled ? null : cell_r9.onClick(); })("mouseenter", function YearTableComponent_tr_3_td_2_Template_td_mouseenter_0_listener() { const cell_r9 = ctx.$implicit; return cell_r9.onMouseEnter(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](1, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, YearTableComponent_tr_3_td_2_ng_container_2_Template, 5, 3, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, YearTableComponent_tr_3_td_2_ng_container_3_Template, 5, 7, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cell_r9 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("title", cell_r9.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", cell_r9.classMap);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitch", ctx_r7.prefixCls);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "ant-picker");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "ant-picker-calendar");
} }
function YearTableComponent_tr_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, YearTableComponent_tr_3_td_1_Template, 2, 4, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, YearTableComponent_tr_3_td_2_Template, 4, 5, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r5 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", row_r5.classMap);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", row_r5.weekNum);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", row_r5.dateCells)("ngForTrackBy", ctx_r1.trackByBodyColumn);
} }
const PREFIX_CLASS = 'ant-picker';
const defaultDisabledTime = {
    nzDisabledHours() {
        return [];
    },
    nzDisabledMinutes() {
        return [];
    },
    nzDisabledSeconds() {
        return [];
    }
};
function getTimeConfig(value, disabledTime) {
    let disabledTimeConfig = disabledTime ? disabledTime(value && value.nativeDate) : {};
    disabledTimeConfig = Object.assign(Object.assign({}, defaultDisabledTime), disabledTimeConfig);
    return disabledTimeConfig;
}
function isTimeValidByConfig(value, disabledTimeConfig) {
    let invalidTime = false;
    if (value) {
        const hour = value.getHours();
        const minutes = value.getMinutes();
        const seconds = value.getSeconds();
        const disabledHours = disabledTimeConfig.nzDisabledHours();
        if (disabledHours.indexOf(hour) === -1) {
            const disabledMinutes = disabledTimeConfig.nzDisabledMinutes(hour);
            if (disabledMinutes.indexOf(minutes) === -1) {
                const disabledSeconds = disabledTimeConfig.nzDisabledSeconds(hour, minutes);
                invalidTime = disabledSeconds.indexOf(seconds) !== -1;
            }
            else {
                invalidTime = true;
            }
        }
        else {
            invalidTime = true;
        }
    }
    return !invalidTime;
}
function isTimeValid(value, disabledTime) {
    const disabledTimeConfig = getTimeConfig(value, disabledTime);
    return isTimeValidByConfig(value, disabledTimeConfig);
}
function isAllowedDate(value, disabledDate, disabledTime) {
    if (!value) {
        return false;
    }
    if (disabledDate) {
        if (disabledDate(value.nativeDate)) {
            return false;
        }
    }
    if (disabledTime) {
        if (!isTimeValid(value, disabledTime)) {
            return false;
        }
    }
    return true;
}

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
/**
 * Compatible translate the moment-like format pattern to angular's pattern
 * Why? For now, we need to support the existing language formats in AntD, and AntD uses the default temporal syntax.
 *
 * TODO: compare and complete all format patterns
 * Each format docs as below:
 * @link https://momentjs.com/docs/#/displaying/format/
 * @link https://angular.io/api/common/DatePipe#description
 * @param format input format pattern
 */
function transCompatFormat(format) {
    return (format &&
        format
            .replace(/Y/g, 'y') // only support y, yy, yyy, yyyy
            .replace(/D/g, 'd')); // d, dd represent of D, DD for momentjs, others are not support
}

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class CalendarFooterComponent {
    constructor(dateHelper) {
        this.dateHelper = dateHelper;
        this.showToday = false;
        this.hasTimePicker = false;
        this.isRange = false;
        this.okDisabled = false;
        this.rangeQuickSelector = null;
        this.clickOk = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.clickToday = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.prefixCls = PREFIX_CLASS;
        this.isTemplateRef = ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_11__["isTemplateRef"];
        this.isNonEmptyString = ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_11__["isNonEmptyString"];
        this.isTodayDisabled = false;
        this.todayTitle = '';
        this.now = new ng_zorro_antd_core_time__WEBPACK_IMPORTED_MODULE_10__["CandyDate"]();
    }
    ngOnChanges(changes) {
        if (changes.disabledDate) {
            this.isTodayDisabled = !!(this.disabledDate && this.disabledDate(this.now.nativeDate));
        }
        if (changes.locale) {
            // NOTE: Compat for DatePipe formatting rules
            const dateFormat = transCompatFormat(this.locale.dateFormat);
            this.todayTitle = this.dateHelper.format(this.now.nativeDate, dateFormat);
        }
    }
    onClickToday() {
        this.clickToday.emit(this.now.clone()); // To prevent the "now" being modified from outside, we use clone
    }
}
/** @nocollapse */
CalendarFooterComponent.ɵfac = function CalendarFooterComponent_Factory(t) { return new (t || CalendarFooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_12__["DateHelperService"])); };
/** @nocollapse */
CalendarFooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CalendarFooterComponent, selectors: [["calendar-footer"]], inputs: { showToday: "showToday", hasTimePicker: "hasTimePicker", isRange: "isRange", okDisabled: "okDisabled", rangeQuickSelector: "rangeQuickSelector", locale: "locale", disabledDate: "disabledDate", extraFooter: "extraFooter" }, outputs: { clickOk: "clickOk", clickToday: "clickToday" }, exportAs: ["calendarFooter"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]], decls: 4, vars: 6, consts: [[3, "class", 4, "ngIf"], ["role", "button", 3, "class", "title", "click", 4, "ngIf"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngTemplateOutlet"], [3, "innerHTML"], ["role", "button", 3, "title", "click"], [3, "click"], ["nz-button", "", "type", "button", "nzType", "primary", "nzSize", "small", 3, "disabled", "click"]], template: function CalendarFooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CalendarFooterComponent_div_1_Template, 4, 6, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, CalendarFooterComponent_a_2_Template, 2, 6, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, CalendarFooterComponent_ul_3_Template, 4, 6, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("", ctx.prefixCls, "-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.extraFooter);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showToday);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.hasTimePicker || ctx.rangeQuickSelector);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgTemplateOutlet"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_22__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_23__["ɵNzTransitionPatchDirective"]], encapsulation: 2, changeDetection: 0 });
CalendarFooterComponent.ctorParameters = () => [
    { type: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_12__["DateHelperService"] }
];
CalendarFooterComponent.propDecorators = {
    locale: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    showToday: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    hasTimePicker: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    isRange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    okDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    disabledDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    extraFooter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    rangeQuickSelector: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    clickOk: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
    clickToday: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }]
};

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class DatePickerService {
    constructor() {
        this.activeInput = 'left';
        this.arrowLeft = 0;
        this.isRange = false;
        this.valueChange$ = new rxjs__WEBPACK_IMPORTED_MODULE_14__["ReplaySubject"](1);
        this.emitValue$ = new rxjs__WEBPACK_IMPORTED_MODULE_14__["Subject"]();
        this.inputPartChange$ = new rxjs__WEBPACK_IMPORTED_MODULE_14__["Subject"]();
    }
    initValue() {
        if (this.isRange) {
            this.setActiveDate([]);
            this.value = this.initialValue = [];
        }
        else {
            this.value = this.initialValue = null;
        }
    }
    hasValue(value = this.value) {
        if (Array.isArray(value)) {
            return !!value[0] || !!value[1];
        }
        else {
            return !!value;
        }
    }
    makeValue(value) {
        if (this.isRange) {
            return value ? value.map(val => new ng_zorro_antd_core_time__WEBPACK_IMPORTED_MODULE_10__["CandyDate"](val)) : [];
        }
        else {
            return value ? new ng_zorro_antd_core_time__WEBPACK_IMPORTED_MODULE_10__["CandyDate"](value) : null;
        }
    }
    setActiveDate(value, allowSameInTwoPanel = false, mode = 'month') {
        const parentPanels = {
            date: 'month',
            month: 'year',
            year: 'decade'
        };
        if (this.isRange) {
            this.activeDate = Object(ng_zorro_antd_core_time__WEBPACK_IMPORTED_MODULE_10__["normalizeRangeValue"])(value, allowSameInTwoPanel, parentPanels[mode]);
        }
        else {
            this.activeDate = Object(ng_zorro_antd_core_time__WEBPACK_IMPORTED_MODULE_10__["cloneDate"])(value);
        }
    }
    setValue(value) {
        this.value = value;
        this.valueChange$.next(this.value);
    }
    getActiveIndex(part = this.activeInput) {
        return { left: 0, right: 1 }[part];
    }
    ngOnDestroy() {
        this.valueChange$.complete();
        this.emitValue$.complete();
        this.inputPartChange$.complete();
    }
}
/** @nocollapse */
DatePickerService.ɵfac = function DatePickerService_Factory(t) { return new (t || DatePickerService)(); };
/** @nocollapse */
DatePickerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: DatePickerService, factory: DatePickerService.ɵfac });

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class DateRangePopupComponent {
    constructor(datePickerService, cdr) {
        this.datePickerService = datePickerService;
        this.cdr = cdr;
        this.panelModeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.calendarChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.resultOk = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"](); // Emitted when done with date selecting
        this.prefixCls = PREFIX_CLASS;
        this.endPanelMode = 'date';
        this.timeOptions = null;
        this.hoverValue = []; // Range ONLY
        this.checkedPartArr = [false, false];
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_14__["Subject"]();
        this.disabledStartTime = (value) => {
            return this.disabledTime && this.disabledTime(value, 'start');
        };
        this.disabledEndTime = (value) => {
            return this.disabledTime && this.disabledTime(value, 'end');
        };
    }
    get hasTimePicker() {
        return !!this.showTime;
    }
    get hasFooter() {
        return this.showToday || this.hasTimePicker || !!this.extraFooter || !!this.ranges;
    }
    ngOnInit() {
        this.datePickerService.valueChange$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["takeUntil"])(this.destroy$)).subscribe(() => {
            this.updateActiveDate();
            this.cdr.markForCheck();
        });
    }
    ngOnChanges(changes) {
        // Parse showTime options
        if (changes.showTime || changes.disabledTime) {
            if (this.showTime) {
                this.buildTimeOptions();
            }
        }
        if (changes.panelMode) {
            this.endPanelMode = this.panelMode;
        }
        if (changes.defaultPickerValue) {
            this.updateActiveDate();
        }
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    updateActiveDate() {
        const activeDate = this.datePickerService.hasValue()
            ? this.datePickerService.value
            : this.datePickerService.makeValue(this.defaultPickerValue);
        this.datePickerService.setActiveDate(activeDate, this.hasTimePicker, this.getPanelMode(this.endPanelMode));
    }
    init() {
        this.checkedPartArr = [false, false];
        this.updateActiveDate();
    }
    onClickOk() {
        const inputIndex = { left: 0, right: 1 }[this.datePickerService.activeInput];
        const value = this.isRange
            ? this.datePickerService.value[inputIndex]
            : this.datePickerService.value;
        this.changeValueFromSelect(value);
        this.resultOk.emit();
    }
    onClickToday(value) {
        this.changeValueFromSelect(value, !this.showTime);
    }
    onCellHover(value) {
        if (!this.isRange) {
            return;
        }
        const otherInputIndex = { left: 1, right: 0 }[this.datePickerService.activeInput];
        const base = this.datePickerService.value[otherInputIndex];
        if (base) {
            if (base.isBeforeDay(value)) {
                this.hoverValue = [base, value];
            }
            else {
                this.hoverValue = [value, base];
            }
        }
    }
    onPanelModeChange(mode, partType) {
        if (this.isRange) {
            const index = this.datePickerService.getActiveIndex(partType);
            if (index === 0) {
                this.panelMode = [mode, this.panelMode[1]];
            }
            else {
                this.panelMode = [this.panelMode[0], mode];
            }
        }
        else {
            this.panelMode = mode;
        }
        this.panelModeChange.emit(this.panelMode);
    }
    onActiveDateChange(value, partType) {
        if (this.isRange) {
            const activeDate = [];
            activeDate[this.datePickerService.getActiveIndex(partType)] = value;
            this.datePickerService.setActiveDate(activeDate, this.hasTimePicker, this.getPanelMode(this.endPanelMode, partType));
        }
        else {
            this.datePickerService.setActiveDate(value);
        }
    }
    onSelectTime(value, partType) {
        if (this.isRange) {
            const newValue = Object(ng_zorro_antd_core_time__WEBPACK_IMPORTED_MODULE_10__["cloneDate"])(this.datePickerService.value);
            const index = this.datePickerService.getActiveIndex(partType);
            newValue[index] = this.overrideHms(value, newValue[index]);
            this.datePickerService.setValue(newValue);
        }
        else {
            const newValue = this.overrideHms(value, this.datePickerService.value);
            this.datePickerService.setValue(newValue); // If not select a date currently, use today
        }
        this.datePickerService.inputPartChange$.next();
        this.buildTimeOptions();
    }
    changeValueFromSelect(value, emitValue = true) {
        if (this.isRange) {
            const selectedValue = Object(ng_zorro_antd_core_time__WEBPACK_IMPORTED_MODULE_10__["cloneDate"])(this.datePickerService.value);
            const checkedPart = this.datePickerService.activeInput;
            let nextPart = checkedPart;
            selectedValue[this.datePickerService.getActiveIndex(checkedPart)] = value;
            this.checkedPartArr[this.datePickerService.getActiveIndex(checkedPart)] = true;
            this.hoverValue = selectedValue;
            if (emitValue) {
                /**
                 * if sort order is wrong, clear the other part's value
                 */
                if (Object(ng_zorro_antd_core_time__WEBPACK_IMPORTED_MODULE_10__["wrongSortOrder"])(selectedValue)) {
                    nextPart = this.reversedPart(checkedPart);
                    selectedValue[this.datePickerService.getActiveIndex(nextPart)] = null;
                    this.checkedPartArr[this.datePickerService.getActiveIndex(nextPart)] = false;
                }
                this.datePickerService.setValue(selectedValue);
                /**
                 * range date usually selected paired,
                 * so we emit the date value only both date is allowed and both part are checked
                 */
                if (this.isBothAllowed(selectedValue) && this.checkedPartArr[0] && this.checkedPartArr[1]) {
                    this.calendarChange.emit(selectedValue);
                    this.clearHoverValue();
                    this.datePickerService.emitValue$.next();
                }
                else if (this.isAllowed(selectedValue)) {
                    nextPart = this.reversedPart(checkedPart);
                    this.calendarChange.emit([value.clone()]);
                }
            }
            else {
                this.datePickerService.setValue(selectedValue);
            }
            this.datePickerService.inputPartChange$.next(nextPart);
        }
        else {
            this.datePickerService.setValue(value);
            this.datePickerService.inputPartChange$.next();
            if (emitValue && this.isAllowed(value)) {
                this.datePickerService.emitValue$.next();
            }
        }
    }
    reversedPart(part) {
        return part === 'left' ? 'right' : 'left';
    }
    getPanelMode(panelMode, partType) {
        if (this.isRange) {
            return panelMode[this.datePickerService.getActiveIndex(partType)];
        }
        else {
            return panelMode;
        }
    }
    // Get single value or part value of a range
    getValue(partType) {
        if (this.isRange) {
            return (this.datePickerService.value || [])[this.datePickerService.getActiveIndex(partType)];
        }
        else {
            return this.datePickerService.value;
        }
    }
    getActiveDate(partType) {
        if (this.isRange) {
            return this.datePickerService.activeDate[this.datePickerService.getActiveIndex(partType)];
        }
        else {
            return this.datePickerService.activeDate;
        }
    }
    isOneAllowed(selectedValue) {
        const index = this.datePickerService.getActiveIndex();
        const disabledTimeArr = [this.disabledStartTime, this.disabledEndTime];
        return isAllowedDate(selectedValue[index], this.disabledDate, disabledTimeArr[index]);
    }
    isBothAllowed(selectedValue) {
        return (isAllowedDate(selectedValue[0], this.disabledDate, this.disabledStartTime) &&
            isAllowedDate(selectedValue[1], this.disabledDate, this.disabledEndTime));
    }
    isAllowed(value, isBoth = false) {
        if (this.isRange) {
            return isBoth ? this.isBothAllowed(value) : this.isOneAllowed(value);
        }
        else {
            return isAllowedDate(value, this.disabledDate, this.disabledTime);
        }
    }
    getTimeOptions(partType) {
        if (this.showTime && this.timeOptions) {
            return this.timeOptions instanceof Array ? this.timeOptions[this.datePickerService.getActiveIndex(partType)] : this.timeOptions;
        }
        return null;
    }
    onClickPresetRange(val) {
        const value = typeof val === 'function' ? val() : val;
        if (value) {
            this.datePickerService.setValue([new ng_zorro_antd_core_time__WEBPACK_IMPORTED_MODULE_10__["CandyDate"](value[0]), new ng_zorro_antd_core_time__WEBPACK_IMPORTED_MODULE_10__["CandyDate"](value[1])]);
            this.datePickerService.emitValue$.next();
        }
    }
    onPresetRangeMouseLeave() {
        this.clearHoverValue();
    }
    onHoverPresetRange(val) {
        if (typeof val !== 'function') {
            this.hoverValue = [new ng_zorro_antd_core_time__WEBPACK_IMPORTED_MODULE_10__["CandyDate"](val[0]), new ng_zorro_antd_core_time__WEBPACK_IMPORTED_MODULE_10__["CandyDate"](val[1])];
        }
    }
    getObjectKeys(obj) {
        return obj ? Object.keys(obj) : [];
    }
    show(partType) {
        const hide = this.showTime && this.isRange && this.datePickerService.activeInput !== partType;
        return !hide;
    }
    clearHoverValue() {
        this.hoverValue = [];
    }
    buildTimeOptions() {
        if (this.showTime) {
            const showTime = typeof this.showTime === 'object' ? this.showTime : {};
            if (this.isRange) {
                const value = this.datePickerService.value;
                this.timeOptions = [this.overrideTimeOptions(showTime, value[0], 'start'), this.overrideTimeOptions(showTime, value[1], 'end')];
            }
            else {
                this.timeOptions = this.overrideTimeOptions(showTime, this.datePickerService.value);
            }
        }
        else {
            this.timeOptions = null;
        }
    }
    overrideTimeOptions(origin, value, partial) {
        let disabledTimeFn;
        if (partial) {
            disabledTimeFn = partial === 'start' ? this.disabledStartTime : this.disabledEndTime;
        }
        else {
            disabledTimeFn = this.disabledTime;
        }
        return Object.assign(Object.assign({}, origin), getTimeConfig(value, disabledTimeFn));
    }
    overrideHms(newValue, oldValue) {
        // tslint:disable-next-line:no-parameter-reassignment
        newValue = newValue || new ng_zorro_antd_core_time__WEBPACK_IMPORTED_MODULE_10__["CandyDate"]();
        // tslint:disable-next-line:no-parameter-reassignment
        oldValue = oldValue || new ng_zorro_antd_core_time__WEBPACK_IMPORTED_MODULE_10__["CandyDate"]();
        return oldValue.setHms(newValue.getHours(), newValue.getMinutes(), newValue.getSeconds());
    }
}
/** @nocollapse */
DateRangePopupComponent.ɵfac = function DateRangePopupComponent_Factory(t) { return new (t || DateRangePopupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](DatePickerService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"])); };
/** @nocollapse */
DateRangePopupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: DateRangePopupComponent, selectors: [["date-range-popup"]], inputs: { panelMode: "panelMode", isRange: "isRange", showWeek: "showWeek", locale: "locale", disabledDate: "disabledDate", disabledTime: "disabledTime", showToday: "showToday", showTime: "showTime", extraFooter: "extraFooter", ranges: "ranges", dateRender: "dateRender", defaultPickerValue: "defaultPickerValue" }, outputs: { panelModeChange: "panelModeChange", calendarChange: "calendarChange", resultOk: "resultOk" }, exportAs: ["dateRangePopup"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]], decls: 11, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["singlePanel", ""], ["tplInnerPopup", ""], ["tplFooter", ""], ["tplRangePart", ""], ["tplRangeQuickSelector", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [4, "ngTemplateOutlet"], ["tabindex", "-1"], [3, "showWeek", "endPanelMode", "partType", "locale", "showTimePicker", "timeOptions", "panelMode", "activeDate", "value", "disabledDate", "dateRender", "selectedValue", "hoverValue", "panelModeChange", "cellHover", "selectDate", "selectTime", "headerChange", 4, "ngIf"], [3, "showWeek", "endPanelMode", "partType", "locale", "showTimePicker", "timeOptions", "panelMode", "activeDate", "value", "disabledDate", "dateRender", "selectedValue", "hoverValue", "panelModeChange", "cellHover", "selectDate", "selectTime", "headerChange"], [3, "locale", "isRange", "showToday", "hasTimePicker", "okDisabled", "extraFooter", "rangeQuickSelector", "clickOk", "clickToday", 4, "ngIf"], [3, "locale", "isRange", "showToday", "hasTimePicker", "okDisabled", "extraFooter", "rangeQuickSelector", "clickOk", "clickToday"], [3, "class", "click", "mouseenter", "mouseleave", 4, "ngFor", "ngForOf"], [3, "click", "mouseenter", "mouseleave"], [1, "ant-tag", "ant-tag-blue"]], template: function DateRangePopupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, DateRangePopupComponent_ng_container_0_Template, 8, 22, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, DateRangePopupComponent_ng_template_1_Template, 4, 11, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, DateRangePopupComponent_ng_template_3_Template, 1, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, DateRangePopupComponent_ng_template_5_Template, 1, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, DateRangePopupComponent_ng_template_7_Template, 2, 7, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, DateRangePopupComponent_ng_template_9_Template, 1, 1, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isRange)("ngIfElse", _r1);
    } }, directives: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgTemplateOutlet"], InnerPopupComponent, CalendarFooterComponent, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]]; }, encapsulation: 2, changeDetection: 0 });
DateRangePopupComponent.ctorParameters = () => [
    { type: DatePickerService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] }
];
DateRangePopupComponent.propDecorators = {
    isRange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    showWeek: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    locale: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    disabledDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    disabledTime: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    showToday: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    showTime: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    extraFooter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    ranges: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    dateRender: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    panelMode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    defaultPickerValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    panelModeChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
    calendarChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
    resultOk: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }]
};

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzPickerComponent {
    constructor(elementRef, dateHelper, cdr, platform, nzResizeObserver, datePickerService, doc) {
        this.elementRef = elementRef;
        this.dateHelper = dateHelper;
        this.cdr = cdr;
        this.platform = platform;
        this.nzResizeObserver = nzResizeObserver;
        this.datePickerService = datePickerService;
        this.noAnimation = false;
        this.isRange = false;
        this.open = undefined;
        this.disabled = false;
        this.inputReadOnly = false;
        this.popupStyle = null;
        this.focusChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.openChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"](); // Emitted when overlay's open state change
        this.inputSize = 12;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_14__["Subject"]();
        this.prefixCls = PREFIX_CLASS;
        this.overlayOpen = false; // Available when "open"=undefined
        this.overlayPositions = [
            {
                offsetX: -12,
                offsetY: 8,
                originX: 'start',
                originY: 'bottom',
                overlayX: 'start',
                overlayY: 'top'
            },
            {
                offsetX: -12,
                offsetY: -8,
                originX: 'start',
                originY: 'top',
                overlayX: 'start',
                overlayY: 'bottom'
            },
            {
                offsetX: 12,
                offsetY: 8,
                originX: 'end',
                originY: 'bottom',
                overlayX: 'end',
                overlayY: 'top'
            },
            {
                offsetX: 12,
                offsetY: -8,
                originX: 'end',
                originY: 'top',
                overlayX: 'end',
                overlayY: 'bottom'
            }
        ];
        this.currentPositionX = 'start';
        this.currentPositionY = 'bottom';
        this.document = doc;
        this.origin = new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["CdkOverlayOrigin"](this.elementRef);
    }
    get realOpenState() {
        // The value that really decide the open state of overlay
        return this.isOpenHandledByUser() ? !!this.open : this.overlayOpen;
    }
    ngOnInit() {
        this.inputValue = this.isRange ? ['', ''] : '';
        this.datePickerService.valueChange$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["takeUntil"])(this.destroy$)).subscribe(() => {
            this.updateInputValue();
        });
    }
    ngAfterViewInit() {
        if (this.autoFocus) {
            this.focus();
        }
        if (this.isRange && this.platform.isBrowser) {
            this.nzResizeObserver
                .observe(this.elementRef)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["takeUntil"])(this.destroy$))
                .subscribe(() => {
                this.updateInputWidthAndArrowLeft();
            });
        }
        this.datePickerService.inputPartChange$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["takeUntil"])(this.destroy$)).subscribe(partType => {
            if (partType) {
                this.datePickerService.activeInput = partType;
            }
            this.focus();
            this.updateInputWidthAndArrowLeft();
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    ngOnChanges(changes) {
        var _a, _b;
        if (((_a = changes.format) === null || _a === void 0 ? void 0 : _a.currentValue) !== ((_b = changes.format) === null || _b === void 0 ? void 0 : _b.previousValue)) {
            this.inputSize = Math.max(10, this.format.length) + 2;
            this.updateInputValue();
        }
    }
    updateInputWidthAndArrowLeft() {
        var _a, _b, _c;
        this.inputWidth = ((_b = (_a = this.rangePickerInputs) === null || _a === void 0 ? void 0 : _a.first) === null || _b === void 0 ? void 0 : _b.nativeElement.offsetWidth) || 0;
        this.datePickerService.arrowLeft =
            this.datePickerService.activeInput === 'left' ? 0 : this.inputWidth + ((_c = this.separatorElement) === null || _c === void 0 ? void 0 : _c.nativeElement.offsetWidth) || 0;
        this.panel.cdr.markForCheck();
        this.cdr.markForCheck();
    }
    getInput(partType) {
        var _a, _b;
        return this.isRange
            ? partType === 'left'
                ? (_a = this.rangePickerInputs) === null || _a === void 0 ? void 0 : _a.first.nativeElement : (_b = this.rangePickerInputs) === null || _b === void 0 ? void 0 : _b.last.nativeElement
            : this.pickerInput.nativeElement;
    }
    focus() {
        const activeInputElement = this.getInput(this.datePickerService.activeInput);
        if (this.document.activeElement !== activeInputElement) {
            activeInputElement === null || activeInputElement === void 0 ? void 0 : activeInputElement.focus();
        }
    }
    onFocus(event, partType) {
        event.preventDefault();
        this.focusChange.emit(true);
        if (partType) {
            this.datePickerService.inputPartChange$.next(partType);
        }
    }
    onBlur(event) {
        event.preventDefault();
        this.focusChange.emit(false);
    }
    // Show overlay content
    showOverlay() {
        if (!this.realOpenState && !this.disabled) {
            this.updateInputWidthAndArrowLeft();
            this.overlayOpen = true;
            this.focus();
            this.panel.init();
            this.openChange.emit(true);
            this.cdr.markForCheck();
        }
    }
    hideOverlay() {
        if (this.realOpenState) {
            this.overlayOpen = false;
            this.openChange.emit(false);
        }
    }
    showClear() {
        return !this.disabled && !this.isEmptyValue(this.datePickerService.value) && !!this.allowClear;
    }
    onClickInputBox(event) {
        event.stopPropagation();
        this.focus();
        if (!this.isOpenHandledByUser()) {
            this.showOverlay();
        }
    }
    onClickOutside(event) {
        if (this.elementRef.nativeElement.contains(event.target)) {
            return;
        }
        if (this.panel.isAllowed(this.datePickerService.value, true)) {
            if (Array.isArray(this.datePickerService.value) && Object(ng_zorro_antd_core_time__WEBPACK_IMPORTED_MODULE_10__["wrongSortOrder"])(this.datePickerService.value)) {
                const index = this.datePickerService.getActiveIndex(this.datePickerService.activeInput);
                const value = this.datePickerService.value[index];
                this.panel.changeValueFromSelect(value, true);
                return;
            }
            this.updateInputValue();
            this.datePickerService.emitValue$.next();
        }
        else {
            this.datePickerService.setValue(this.datePickerService.initialValue);
            this.hideOverlay();
        }
    }
    onOverlayDetach() {
        this.hideOverlay();
    }
    onOverlayKeydown(event) {
        if (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_18__["ESCAPE"]) {
            this.datePickerService.setValue(this.datePickerService.initialValue);
        }
    }
    // NOTE: A issue here, the first time position change, the animation will not be triggered.
    // Because the overlay's "positionChange" event is emitted after the content's full shown up.
    // All other components like "nz-dropdown" which depends on overlay also has the same issue.
    // See: https://github.com/NG-ZORRO/ng-zorro-antd/issues/1429
    onPositionChange(position) {
        this.currentPositionX = position.connectionPair.originX;
        this.currentPositionY = position.connectionPair.originY;
        this.cdr.detectChanges(); // Take side-effects to position styles
    }
    onClickClear(event) {
        event.preventDefault();
        event.stopPropagation();
        this.datePickerService.setValue(this.isRange ? [] : null);
        this.datePickerService.emitValue$.next();
    }
    updateInputValue() {
        const newValue = this.datePickerService.value;
        if (this.isRange) {
            this.inputValue = newValue ? newValue.map(v => this.formatValue(v)) : ['', ''];
        }
        else {
            this.inputValue = this.formatValue(newValue);
        }
        this.cdr.markForCheck();
    }
    formatValue(value) {
        return this.dateHelper.format(value && value.nativeDate, this.format);
    }
    onInputChange(value, isEnter = false) {
        /**
         * in IE11 focus/blur will trigger ngModelChange if has placeholder
         * so we forbidden IE11 to open panel through input change
         */
        if (!this.platform.TRIDENT &&
            this.document.activeElement === this.getInput(this.datePickerService.activeInput) &&
            !this.realOpenState) {
            this.showOverlay();
            return;
        }
        const date = this.checkValidDate(value);
        if (date) {
            this.panel.changeValueFromSelect(date, isEnter);
        }
    }
    onKeyupEnter(event) {
        this.onInputChange(event.target.value, true);
    }
    checkValidDate(value) {
        const date = new ng_zorro_antd_core_time__WEBPACK_IMPORTED_MODULE_10__["CandyDate"](this.dateHelper.parseDate(value, this.format));
        if (!date.isValid() || value !== this.dateHelper.format(date.nativeDate, this.format)) {
            return null;
        }
        return date;
    }
    getPlaceholder(partType) {
        return this.isRange ? this.placeholder[this.datePickerService.getActiveIndex(partType)] : this.placeholder;
    }
    isEmptyValue(value) {
        if (value === null) {
            return true;
        }
        else if (this.isRange) {
            return !value || !Array.isArray(value) || value.every(val => !val);
        }
        else {
            return !value;
        }
    }
    // Whether open state is permanently controlled by user himself
    isOpenHandledByUser() {
        return this.open !== undefined;
    }
}
/** @nocollapse */
NzPickerComponent.ɵfac = function NzPickerComponent_Factory(t) { return new (t || NzPickerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_12__["DateHelperService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_19__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ng_zorro_antd_core_resize_observers__WEBPACK_IMPORTED_MODULE_21__["NzResizeObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](DatePickerService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])); };
/** @nocollapse */
NzPickerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NzPickerComponent, selectors: [["", "nz-picker", ""]], contentQueries: function NzPickerComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, DateRangePopupComponent, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.panel = _t.first);
    } }, viewQuery: function NzPickerComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["CdkConnectedOverlay"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c3, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c4, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c5, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.cdkConnectedOverlay = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.separatorElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.pickerInput = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.rangePickerInputs = _t);
    } }, inputs: { noAnimation: "noAnimation", isRange: "isRange", open: "open", disabled: "disabled", inputReadOnly: "inputReadOnly", popupStyle: "popupStyle", placeholder: "placeholder", allowClear: "allowClear", autoFocus: "autoFocus", format: "format", separator: "separator", dropdownClassName: "dropdownClassName", suffixIcon: "suffixIcon" }, outputs: { focusChange: "focusChange", valueChange: "valueChange", openChange: "openChange" }, exportAs: ["nzPicker"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]], attrs: _c6, ngContentSelectors: _c7, decls: 7, vars: 6, consts: [[3, "class", 4, "ngIf"], [4, "ngIf"], ["tplRangeInput", ""], ["tplRightRest", ""], ["cdkConnectedOverlay", "", "nzConnectedOverlay", "", 3, "cdkConnectedOverlayOrigin", "cdkConnectedOverlayOpen", "cdkConnectedOverlayPositions", "cdkConnectedOverlayTransformOriginOn", "positionChange", "detach", "overlayKeydown", "overlayOutsideClick"], [3, "disabled", "readOnly", "ngModel", "placeholder", "size", "ngModelChange", "focus", "blur", "keyup.enter"], ["pickerInput", ""], [4, "ngTemplateOutlet"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["separatorElement", ""], [4, "ngIf", "ngIfElse"], ["defaultSeparator", ""], ["nz-icon", "", "nzType", "swap-right", "nzTheme", "outline"], [3, "disabled", "readOnly", "size", "ngModel", "placeholder", "click", "blur", "focus", "keyup.enter", "ngModelChange"], ["rangePickerInput", ""], [2, "position", "absolute"], [3, "class", "click", 4, "ngIf"], [4, "nzStringTemplateOutlet"], [3, "click"], ["nz-icon", "", "nzType", "close-circle", "nzTheme", "fill"], ["nz-icon", "", 3, "nzType"], [1, "ant-picker-wrapper", 2, "position", "relative", 3, "nzNoAnimation"], [3, "ngStyle"]], template: function NzPickerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, NzPickerComponent_div_0_Template, 4, 11, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzPickerComponent_ng_container_1_Template, 12, 21, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NzPickerComponent_ng_template_2_Template, 2, 5, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, NzPickerComponent_ng_template_4_Template, 4, 12, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, NzPickerComponent_ng_template_6_Template, 3, 17, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("positionChange", function NzPickerComponent_Template_ng_template_positionChange_6_listener($event) { return ctx.onPositionChange($event); })("detach", function NzPickerComponent_Template_ng_template_detach_6_listener() { return ctx.onOverlayDetach(); })("overlayKeydown", function NzPickerComponent_Template_ng_template_overlayKeydown_6_listener($event) { return ctx.onOverlayKeydown($event); })("overlayOutsideClick", function NzPickerComponent_Template_ng_template_overlayOutsideClick_6_listener($event) { return ctx.onClickOutside($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isRange);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isRange);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("cdkConnectedOverlayOrigin", ctx.origin)("cdkConnectedOverlayOpen", ctx.realOpenState)("cdkConnectedOverlayPositions", ctx.overlayPositions)("cdkConnectedOverlayTransformOriginOn", ".ant-picker-wrapper");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["CdkConnectedOverlay"], ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_7__["NzConnectedOverlayDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgTemplateOutlet"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_8__["NzIconDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_23__["ɵNzTransitionPatchDirective"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_6__["NzStringTemplateOutletDirective"], ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_5__["NzNoAnimationDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"]], encapsulation: 2, data: { animation: [ng_zorro_antd_core_animation__WEBPACK_IMPORTED_MODULE_20__["slideMotion"]] }, changeDetection: 0 });
NzPickerComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
    { type: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_12__["DateHelperService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
    { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_19__["Platform"] },
    { type: ng_zorro_antd_core_resize_observers__WEBPACK_IMPORTED_MODULE_21__["NzResizeObserver"] },
    { type: DatePickerService },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"],] }] }
];
NzPickerComponent.propDecorators = {
    noAnimation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    isRange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    open: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    inputReadOnly: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    placeholder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    allowClear: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    autoFocus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    format: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    separator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    popupStyle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    dropdownClassName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    suffixIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    focusChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
    valueChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
    openChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
    cdkConnectedOverlay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["CdkConnectedOverlay"], { static: false },] }],
    separatorElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['separatorElement', { static: false },] }],
    pickerInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['pickerInput', { static: false },] }],
    rangePickerInputs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChildren"], args: ['rangePickerInput',] }],
    panel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"], args: [DateRangePopupComponent,] }]
};

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
const POPUP_STYLE_PATCH = { position: 'relative' }; // Aim to override antd's style to support overlay's position strategy (position:absolute will cause it not working beacuse the overlay can't get the height/width of it's content)
const NZ_CONFIG_MODULE_NAME = 'datePicker';
/**
 * The base picker for all common APIs
 */
class NzDatePickerComponent {
    constructor(nzConfigService, datePickerService, i18n, cdr, renderer, elementRef, dateHelper, noAnimation) {
        this.nzConfigService = nzConfigService;
        this.datePickerService = datePickerService;
        this.i18n = i18n;
        this.cdr = cdr;
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.dateHelper = dateHelper;
        this.noAnimation = noAnimation;
        this._nzModuleName = NZ_CONFIG_MODULE_NAME;
        this.isRange = false; // Indicate whether the value is a range value
        this.focused = false;
        this.panelMode = 'date';
        this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_14__["Subject"]();
        this.isCustomPlaceHolder = false;
        this.isCustomFormat = false;
        this.showTime = false;
        // --- Common API
        this.nzAllowClear = true;
        this.nzAutoFocus = false;
        this.nzDisabled = false;
        this.nzBorderless = false;
        this.nzInputReadOnly = false;
        this.nzPlaceHolder = '';
        this.nzPopupStyle = POPUP_STYLE_PATCH;
        this.nzSize = 'default';
        this.nzShowToday = true;
        this.nzMode = 'date';
        this.nzDefaultPickerValue = null;
        this.nzSeparator = undefined;
        this.nzSuffixIcon = 'calendar';
        // TODO(@wenqi73) The PanelMode need named for each pickers and export
        this.nzOnPanelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.nzOnCalendarChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.nzOnOk = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.nzOnOpenChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        // ------------------------------------------------------------------------
        // | Control value accessor implements
        // ------------------------------------------------------------------------
        // NOTE: onChangeFn/onTouchedFn will not be assigned if user not use as ngModel
        this.onChangeFn = () => void 0;
        this.onTouchedFn = () => void 0;
        // TODO: move to host after View Engine deprecation
        this.elementRef.nativeElement.classList.add('ant-picker');
    }
    get nzShowTime() {
        return this.showTime;
    }
    set nzShowTime(value) {
        this.showTime = typeof value === 'object' ? value : Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_11__["toBoolean"])(value);
    }
    ngOnInit() {
        // Subscribe the every locale change if the nzLocale is not handled by user
        if (!this.nzLocale) {
            this.i18n.localeChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["takeUntil"])(this.destroyed$)).subscribe(() => this.setLocale());
        }
        // Default value
        this.datePickerService.isRange = this.isRange;
        this.datePickerService.initValue();
        this.datePickerService.emitValue$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["takeUntil"])(this.destroyed$)).subscribe(_ => {
            var _a, _b, _c, _d;
            const value = this.datePickerService.value;
            this.datePickerService.initialValue = Object(ng_zorro_antd_core_time__WEBPACK_IMPORTED_MODULE_10__["cloneDate"])(value);
            if (this.isRange) {
                const vAsRange = value;
                if (vAsRange.length) {
                    this.onChangeFn([(_b = (_a = vAsRange[0]) === null || _a === void 0 ? void 0 : _a.nativeDate) !== null && _b !== void 0 ? _b : null, (_d = (_c = vAsRange[1]) === null || _c === void 0 ? void 0 : _c.nativeDate) !== null && _d !== void 0 ? _d : null]);
                }
                else {
                    this.onChangeFn([]);
                }
            }
            else {
                if (value) {
                    this.onChangeFn(value.nativeDate);
                }
                else {
                    this.onChangeFn(null);
                }
            }
            this.onTouchedFn();
            // When value emitted, overlay will be closed
            this.close();
        });
        this.setModeAndFormat();
    }
    ngOnChanges(changes) {
        var _a, _b;
        if (changes.nzPopupStyle) {
            // Always assign the popup style patch
            this.nzPopupStyle = this.nzPopupStyle ? Object.assign(Object.assign({}, this.nzPopupStyle), POPUP_STYLE_PATCH) : POPUP_STYLE_PATCH;
        }
        // Mark as customized placeholder by user once nzPlaceHolder assigned at the first time
        if ((_a = changes.nzPlaceHolder) === null || _a === void 0 ? void 0 : _a.currentValue) {
            this.isCustomPlaceHolder = true;
        }
        if ((_b = changes.nzFormat) === null || _b === void 0 ? void 0 : _b.currentValue) {
            this.isCustomFormat = true;
        }
        if (changes.nzLocale) {
            // The nzLocale is currently handled by user
            this.setDefaultPlaceHolder();
        }
        if (changes.nzRenderExtraFooter) {
            this.extraFooter = Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_11__["valueFunctionProp"])(this.nzRenderExtraFooter);
        }
        if (changes.nzOpen) {
            Object(ng_zorro_antd_core_logger__WEBPACK_IMPORTED_MODULE_17__["warnDeprecation"])(`'nzOpen' in DatePicker is going to be removed in 11.0.0. Please use open() or close() method instead.`);
        }
        if (changes.nzMode) {
            this.setDefaultPlaceHolder();
            this.setModeAndFormat();
        }
    }
    ngOnDestroy() {
        this.destroyed$.next();
        this.destroyed$.complete();
    }
    setModeAndFormat() {
        const inputFormats = {
            year: 'yyyy',
            month: 'yyyy-MM',
            week: this.i18n.getDateLocale() ? 'RRRR-II' : 'yyyy-ww',
            date: this.nzShowTime ? 'yyyy-MM-dd HH:mm:ss' : 'yyyy-MM-dd'
        };
        if (!this.nzMode) {
            this.nzMode = 'date';
        }
        // TODO: compatible for array type
        if (Array.isArray(this.nzMode)) {
            Object(ng_zorro_antd_core_logger__WEBPACK_IMPORTED_MODULE_17__["warnDeprecation"])(`'nzMode' in DatePicker will not be string[], only can be 'decade' | 'year' | 'month' | 'week' | 'date' type in 11.0.0.`);
            this.nzMode = this.nzMode[0];
        }
        this.panelMode = this.isRange ? [this.nzMode, this.nzMode] : this.nzMode;
        // Default format when it's empty
        if (!this.isCustomFormat) {
            this.nzFormat = inputFormats[this.nzMode];
        }
    }
    /**
     * Triggered when overlayOpen changes (different with realOpenState)
     * @param open The overlayOpen in picker component
     */
    onOpenChange(open) {
        this.nzOnOpenChange.emit(open);
    }
    open() {
        this.picker.showOverlay();
    }
    close() {
        this.picker.hideOverlay();
    }
    writeValue(value) {
        this.setValue(value);
        this.cdr.markForCheck();
    }
    registerOnChange(fn) {
        this.onChangeFn = fn;
    }
    registerOnTouched(fn) {
        this.onTouchedFn = fn;
    }
    setDisabledState(isDisabled) {
        this.nzDisabled = isDisabled;
        this.cdr.markForCheck();
    }
    // ------------------------------------------------------------------------
    // | Internal methods
    // ------------------------------------------------------------------------
    // Reload locale from i18n with side effects
    setLocale() {
        this.nzLocale = this.i18n.getLocaleData('DatePicker', {});
        this.setDefaultPlaceHolder();
        this.cdr.markForCheck();
    }
    setDefaultPlaceHolder() {
        if (!this.isCustomPlaceHolder && this.nzLocale) {
            const defaultPlaceholder = {
                year: this.getPropertyOfLocale('yearPlaceholder'),
                month: this.getPropertyOfLocale('monthPlaceholder'),
                week: this.getPropertyOfLocale('weekPlaceholder'),
                date: this.getPropertyOfLocale('placeholder')
            };
            const defaultRangePlaceholder = {
                year: this.getPropertyOfLocale('rangeYearPlaceholder'),
                month: this.getPropertyOfLocale('rangeMonthPlaceholder'),
                week: this.getPropertyOfLocale('rangeWeekPlaceholder'),
                date: this.getPropertyOfLocale('rangePlaceholder')
            };
            this.nzPlaceHolder = this.isRange
                ? defaultRangePlaceholder[this.nzMode]
                : defaultPlaceholder[this.nzMode];
        }
    }
    getPropertyOfLocale(type) {
        return this.nzLocale.lang[type] || this.i18n.getLocaleData(`DatePicker.lang.${type}`);
    }
    // Safe way of setting value with default
    setValue(value) {
        const newValue = this.datePickerService.makeValue(value);
        this.datePickerService.setValue(newValue);
        this.datePickerService.initialValue = newValue;
    }
    onFocusChange(value) {
        this.focused = value;
        // TODO: avoid autoFocus cause change after checked error
        if (this.focused) {
            this.renderer.addClass(this.elementRef.nativeElement, 'ant-picker-focused');
        }
        else {
            this.renderer.removeClass(this.elementRef.nativeElement, 'ant-picker-focused');
        }
    }
    onPanelModeChange(panelMode) {
        this.nzOnPanelChange.emit(panelMode);
    }
    // Emit nzOnCalendarChange when select date by nz-range-picker
    onCalendarChange(value) {
        if (this.isRange && Array.isArray(value)) {
            const rangeValue = value.filter(x => x instanceof ng_zorro_antd_core_time__WEBPACK_IMPORTED_MODULE_10__["CandyDate"]).map(x => x.nativeDate);
            this.nzOnCalendarChange.emit(rangeValue);
        }
    }
    onResultOk() {
        var _a, _b;
        if (this.isRange) {
            const value = this.datePickerService.value;
            if (value.length) {
                this.nzOnOk.emit([((_a = value[0]) === null || _a === void 0 ? void 0 : _a.nativeDate) || null, ((_b = value[1]) === null || _b === void 0 ? void 0 : _b.nativeDate) || null]);
            }
            else {
                this.nzOnOk.emit([]);
            }
        }
        else {
            if (this.datePickerService.value) {
                this.nzOnOk.emit(this.datePickerService.value.nativeDate);
            }
            else {
                this.nzOnOk.emit(null);
            }
        }
    }
}
/** @nocollapse */
NzDatePickerComponent.ɵfac = function NzDatePickerComponent_Factory(t) { return new (t || NzDatePickerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_16__["NzConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](DatePickerService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_12__["NzI18nService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_12__["DateHelperService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_5__["NzNoAnimationDirective"], 9)); };
/** @nocollapse */
NzDatePickerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NzDatePickerComponent, selectors: [["nz-date-picker"], ["nz-week-picker"], ["nz-month-picker"], ["nz-year-picker"], ["nz-range-picker"]], viewQuery: function NzDatePickerComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstaticViewQuery"](NzPickerComponent, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.picker = _t.first);
    } }, hostVars: 10, hostBindings: function NzDatePickerComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NzDatePickerComponent_click_HostBindingHandler($event) { return ctx.picker.onClickInputBox($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("ant-picker-range", ctx.isRange)("ant-picker-large", ctx.nzSize === "large")("ant-picker-small", ctx.nzSize === "small")("ant-picker-disabled", ctx.nzDisabled)("ant-picker-borderless", ctx.nzBorderless);
    } }, inputs: { nzAllowClear: "nzAllowClear", nzAutoFocus: "nzAutoFocus", nzDisabled: "nzDisabled", nzBorderless: "nzBorderless", nzInputReadOnly: "nzInputReadOnly", nzPlaceHolder: "nzPlaceHolder", nzPopupStyle: "nzPopupStyle", nzSize: "nzSize", nzShowToday: "nzShowToday", nzMode: "nzMode", nzDefaultPickerValue: "nzDefaultPickerValue", nzSeparator: "nzSeparator", nzSuffixIcon: "nzSuffixIcon", nzShowTime: "nzShowTime", nzFormat: "nzFormat", nzLocale: "nzLocale", nzOpen: "nzOpen", nzDisabledDate: "nzDisabledDate", nzDropdownClassName: "nzDropdownClassName", nzDateRender: "nzDateRender", nzDisabledTime: "nzDisabledTime", nzRenderExtraFooter: "nzRenderExtraFooter", nzRanges: "nzRanges" }, outputs: { nzOnPanelChange: "nzOnPanelChange", nzOnCalendarChange: "nzOnCalendarChange", nzOnOk: "nzOnOk", nzOnOpenChange: "nzOnOpenChange" }, exportAs: ["nzDatePicker"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([
            DatePickerService,
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
                multi: true,
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])((() => NzDatePickerComponent))
            }
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]], decls: 2, vars: 25, consts: [["nz-picker", "", 2, "display", "inherit", "align-items", "center", "width", "100%", 3, "isRange", "open", "separator", "disabled", "inputReadOnly", "format", "allowClear", "autoFocus", "placeholder", "dropdownClassName", "popupStyle", "noAnimation", "suffixIcon", "openChange", "focusChange"], [3, "isRange", "defaultPickerValue", "showWeek", "panelMode", "locale", "showToday", "showTime", "dateRender", "disabledDate", "disabledTime", "extraFooter", "ranges", "panelModeChange", "calendarChange", "resultOk"]], template: function NzDatePickerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("openChange", function NzDatePickerComponent_Template_div_openChange_0_listener($event) { return ctx.onOpenChange($event); })("focusChange", function NzDatePickerComponent_Template_div_focusChange_0_listener($event) { return ctx.onFocusChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "date-range-popup", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("panelModeChange", function NzDatePickerComponent_Template_date_range_popup_panelModeChange_1_listener($event) { return ctx.onPanelModeChange($event); })("calendarChange", function NzDatePickerComponent_Template_date_range_popup_calendarChange_1_listener($event) { return ctx.onCalendarChange($event); })("resultOk", function NzDatePickerComponent_Template_date_range_popup_resultOk_1_listener() { return ctx.onResultOk(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("isRange", ctx.isRange)("open", ctx.nzOpen)("separator", ctx.nzSeparator)("disabled", ctx.nzDisabled)("inputReadOnly", ctx.nzInputReadOnly)("format", ctx.nzFormat)("allowClear", ctx.nzAllowClear)("autoFocus", ctx.nzAutoFocus)("placeholder", ctx.nzPlaceHolder)("dropdownClassName", ctx.nzDropdownClassName)("popupStyle", ctx.nzPopupStyle)("noAnimation", !!(ctx.noAnimation == null ? null : ctx.noAnimation.nzNoAnimation))("suffixIcon", ctx.nzSuffixIcon);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("isRange", ctx.isRange)("defaultPickerValue", ctx.nzDefaultPickerValue)("showWeek", ctx.nzMode === "week")("panelMode", ctx.panelMode)("locale", ctx.nzLocale == null ? null : ctx.nzLocale.lang)("showToday", ctx.nzMode === "date" && ctx.nzShowToday && !ctx.isRange && !ctx.nzShowTime)("showTime", ctx.nzShowTime)("dateRender", ctx.nzDateRender)("disabledDate", ctx.nzDisabledDate)("disabledTime", ctx.nzDisabledTime)("extraFooter", ctx.extraFooter)("ranges", ctx.nzRanges);
    } }, directives: [NzPickerComponent, DateRangePopupComponent], encapsulation: 2, changeDetection: 0 });
NzDatePickerComponent.ctorParameters = () => [
    { type: ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_16__["NzConfigService"] },
    { type: DatePickerService },
    { type: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_12__["NzI18nService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
    { type: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_12__["DateHelperService"] },
    { type: ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_5__["NzNoAnimationDirective"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Host"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }] }
];
NzDatePickerComponent.propDecorators = {
    nzAllowClear: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzAutoFocus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzBorderless: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzInputReadOnly: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzDisabledDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzLocale: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzPlaceHolder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzPopupStyle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzDropdownClassName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzFormat: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzDateRender: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzDisabledTime: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzRenderExtraFooter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzShowToday: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzMode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzRanges: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzDefaultPickerValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzSeparator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzSuffixIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzOnPanelChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
    nzOnCalendarChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
    nzOnOk: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
    nzOnOpenChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
    picker: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [NzPickerComponent, { static: true },] }],
    nzShowTime: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
};
Object(tslib__WEBPACK_IMPORTED_MODULE_13__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_11__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_13__["__metadata"])("design:type", Boolean)
], NzDatePickerComponent.prototype, "nzAllowClear", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_13__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_11__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_13__["__metadata"])("design:type", Boolean)
], NzDatePickerComponent.prototype, "nzAutoFocus", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_13__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_11__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_13__["__metadata"])("design:type", Boolean)
], NzDatePickerComponent.prototype, "nzDisabled", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_13__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_11__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_13__["__metadata"])("design:type", Boolean)
], NzDatePickerComponent.prototype, "nzBorderless", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_13__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_11__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_13__["__metadata"])("design:type", Boolean)
], NzDatePickerComponent.prototype, "nzInputReadOnly", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_13__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_11__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_13__["__metadata"])("design:type", Boolean)
], NzDatePickerComponent.prototype, "nzOpen", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_13__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_11__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_13__["__metadata"])("design:type", Boolean)
], NzDatePickerComponent.prototype, "nzShowToday", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_13__["__decorate"])([
    Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_16__["WithConfig"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_13__["__metadata"])("design:type", String)
], NzDatePickerComponent.prototype, "nzSeparator", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_13__["__decorate"])([
    Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_16__["WithConfig"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_13__["__metadata"])("design:type", Object)
], NzDatePickerComponent.prototype, "nzSuffixIcon", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CalendarFooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
                // tslint:disable-next-line:component-selector
                selector: 'calendar-footer',
                exportAs: 'calendarFooter',
                template: `
    <div class="{{ prefixCls }}-footer">
      <div *ngIf="extraFooter" class="{{ prefixCls }}-footer-extra">
        <ng-container [ngSwitch]="true">
          <ng-container *ngSwitchCase="isTemplateRef(extraFooter)">
            <ng-container *ngTemplateOutlet="$any(extraFooter)"></ng-container>
          </ng-container>
          <ng-container *ngSwitchCase="isNonEmptyString(extraFooter)">
            <span [innerHTML]="extraFooter"></span>
          </ng-container>
        </ng-container>
      </div>
      <a
        *ngIf="showToday"
        class="{{ prefixCls }}-today-btn {{ isTodayDisabled ? prefixCls + '-today-btn-disabled' : '' }}"
        role="button"
        (click)="isTodayDisabled ? null : onClickToday()"
        title="{{ todayTitle }}"
      >
        {{ locale.today }}
      </a>
      <ul *ngIf="hasTimePicker || rangeQuickSelector" class="{{ prefixCls }}-ranges">
        <ng-container *ngTemplateOutlet="rangeQuickSelector"></ng-container>
        <li *ngIf="hasTimePicker && !isRange" class="{{ prefixCls }}-now">
          <a class="{{ prefixCls }}-now-btn" (click)="isTodayDisabled ? null : onClickToday()">
            {{ locale.now }}
          </a>
        </li>
        <li *ngIf="hasTimePicker" class="{{ prefixCls }}-ok">
          <button
            nz-button
            type="button"
            nzType="primary"
            nzSize="small"
            [disabled]="okDisabled"
            (click)="okDisabled ? null : clickOk.emit()"
          >
            {{ locale.ok }}
          </button>
        </li>
      </ul>
    </div>
  `
            }]
    }], function () { return [{ type: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_12__["DateHelperService"] }]; }, { showToday: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], hasTimePicker: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], isRange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], okDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], rangeQuickSelector: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], clickOk: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], clickToday: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], locale: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], disabledDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], extraFooter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](DatePickerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
    }], function () { return []; }, null); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](DateRangePopupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
                // tslint:disable-next-line:component-selector
                selector: 'date-range-popup',
                exportAs: 'dateRangePopup',
                template: `
    <ng-container *ngIf="isRange; else singlePanel">
      <div class="{{ prefixCls }}-range-wrapper {{ prefixCls }}-date-range-wrapper">
        <div class="{{ prefixCls }}-range-arrow" [style.left.px]="datePickerService?.arrowLeft"></div>
        <div class="{{ prefixCls }}-panel-container">
          <div class="{{ prefixCls }}-panels">
            <ng-container *ngTemplateOutlet="tplRangePart; context: { partType: 'left' }"></ng-container>
            <ng-container *ngTemplateOutlet="tplRangePart; context: { partType: 'right' }"></ng-container>
          </div>
          <ng-container *ngTemplateOutlet="tplFooter"></ng-container>
        </div>
      </div>
    </ng-container>
    <ng-template #singlePanel>
      <div
        class="{{ prefixCls }}-panel-container {{ showWeek ? prefixCls + '-week-number' : '' }} {{
          hasTimePicker ? prefixCls + '-time' : ''
        }} {{ isRange ? prefixCls + '-range' : '' }}"
      >
        <div class="{{ prefixCls }}-panel" tabindex="-1">
          <!-- Single ONLY -->
          <ng-container *ngTemplateOutlet="tplInnerPopup"></ng-container>
          <ng-container *ngTemplateOutlet="tplFooter"></ng-container>
        </div>
      </div>
    </ng-template>

    <ng-template #tplInnerPopup let-partType="partType">
      <!-- TODO(@wenqi73) [selectedValue] [hoverValue] types-->
      <inner-popup
        *ngIf="show(partType)"
        [showWeek]="showWeek"
        [endPanelMode]="getPanelMode(endPanelMode, partType)"
        [partType]="partType"
        [locale]="locale!"
        [showTimePicker]="hasTimePicker"
        [timeOptions]="getTimeOptions(partType)"
        [panelMode]="getPanelMode(panelMode, partType)"
        (panelModeChange)="onPanelModeChange($event, partType)"
        [activeDate]="getActiveDate(partType)"
        [value]="getValue(partType)"
        [disabledDate]="disabledDate"
        [dateRender]="dateRender"
        [selectedValue]="$any(datePickerService?.value)"
        [hoverValue]="$any(hoverValue)"
        (cellHover)="onCellHover($event)"
        (selectDate)="changeValueFromSelect($event, !showTime)"
        (selectTime)="onSelectTime($event, partType)"
        (headerChange)="onActiveDateChange($event, partType)"
      ></inner-popup>
    </ng-template>

    <ng-template #tplFooter>
      <calendar-footer
        *ngIf="hasFooter"
        [locale]="locale!"
        [isRange]="isRange"
        [showToday]="showToday"
        [hasTimePicker]="hasTimePicker"
        [okDisabled]="!isAllowed($any(datePickerService?.value))"
        [extraFooter]="extraFooter"
        [rangeQuickSelector]="ranges ? tplRangeQuickSelector : null"
        (clickOk)="onClickOk()"
        (clickToday)="onClickToday($event)"
      ></calendar-footer>
    </ng-template>

    <ng-template #tplRangePart let-partType="partType">
      <div class="{{ prefixCls }}-panel">
        <ng-container *ngTemplateOutlet="tplInnerPopup; context: { partType: partType }"></ng-container>
      </div>
    </ng-template>

    <!-- Range ONLY: Range Quick Selector -->
    <ng-template #tplRangeQuickSelector>
      <li
        *ngFor="let name of getObjectKeys(ranges)"
        class="{{ prefixCls }}-preset"
        (click)="onClickPresetRange(ranges![name])"
        (mouseenter)="onHoverPresetRange(ranges![name])"
        (mouseleave)="onPresetRangeMouseLeave()"
      >
        <span class="ant-tag ant-tag-blue">{{ name }}</span>
      </li>
    </ng-template>
  `
            }]
    }], function () { return [{ type: DatePickerService }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] }]; }, { panelModeChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], calendarChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], resultOk: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], panelMode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], isRange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], showWeek: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], locale: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], disabledDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], disabledTime: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], showToday: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], showTime: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], extraFooter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], ranges: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], dateRender: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], defaultPickerValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NzPickerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
                selector: '[nz-picker]',
                exportAs: 'nzPicker',
                template: `
    <!-- Content of single picker -->
    <div *ngIf="!isRange" class="{{ prefixCls }}-input">
      <input
        #pickerInput
        [class.ant-input-disabled]="disabled"
        [disabled]="disabled"
        [readOnly]="inputReadOnly"
        [(ngModel)]="inputValue"
        placeholder="{{ getPlaceholder() }}"
        [size]="inputSize"
        (focus)="onFocus($event)"
        (blur)="onBlur($event)"
        (ngModelChange)="onInputChange($event)"
        (keyup.enter)="onKeyupEnter($event)"
      />
      <ng-container *ngTemplateOutlet="tplRightRest"></ng-container>
    </div>

    <!-- Content of range picker -->
    <ng-container *ngIf="isRange">
      <div class="{{ prefixCls }}-input">
        <ng-container *ngTemplateOutlet="tplRangeInput; context: { partType: 'left' }"></ng-container>
      </div>
      <div #separatorElement class="{{ prefixCls }}-range-separator">
        <span class="{{ prefixCls }}-separator">
          <ng-container *ngIf="separator; else defaultSeparator">{{ separator }}</ng-container>
        </span>
        <ng-template #defaultSeparator>
          <i nz-icon nzType="swap-right" nzTheme="outline"></i>
        </ng-template>
      </div>
      <div class="{{ prefixCls }}-input">
        <ng-container *ngTemplateOutlet="tplRangeInput; context: { partType: 'right' }"></ng-container>
      </div>
      <ng-container *ngTemplateOutlet="tplRightRest"></ng-container>
    </ng-container>
    <!-- Input for Range ONLY -->
    <ng-template #tplRangeInput let-partType="partType">
      <input
        #rangePickerInput
        [disabled]="disabled"
        [readOnly]="inputReadOnly"
        [size]="inputSize"
        (click)="onClickInputBox($event)"
        (blur)="onBlur($event)"
        (focus)="onFocus($event, partType)"
        (keyup.enter)="onKeyupEnter($event)"
        [(ngModel)]="inputValue[datePickerService.getActiveIndex(partType)]"
        (ngModelChange)="onInputChange($event)"
        placeholder="{{ getPlaceholder(partType) }}"
      />
    </ng-template>

    <!-- Right operator icons -->
    <ng-template #tplRightRest>
      <div
        class="{{ prefixCls }}-active-bar"
        style="position: absolute"
        [style.width.px]="inputWidth"
        [style.left.px]="datePickerService?.arrowLeft"
      ></div>
      <span *ngIf="showClear()" class="{{ prefixCls }}-clear" (click)="onClickClear($event)">
        <i nz-icon nzType="close-circle" nzTheme="fill"></i>
      </span>
      <span class="{{ prefixCls }}-suffix">
        <ng-container *nzStringTemplateOutlet="suffixIcon; let suffixIcon">
          <i nz-icon [nzType]="suffixIcon"></i>
        </ng-container>
      </span>
    </ng-template>

    <!-- Overlay -->
    <ng-template
      cdkConnectedOverlay
      nzConnectedOverlay
      [cdkConnectedOverlayOrigin]="origin"
      [cdkConnectedOverlayOpen]="realOpenState"
      [cdkConnectedOverlayPositions]="overlayPositions"
      [cdkConnectedOverlayTransformOriginOn]="'.ant-picker-wrapper'"
      (positionChange)="onPositionChange($event)"
      (detach)="onOverlayDetach()"
      (overlayKeydown)="onOverlayKeydown($event)"
      (overlayOutsideClick)="onClickOutside($event)"
    >
      <div class="ant-picker-wrapper" [nzNoAnimation]="noAnimation" [@slideMotion]="'enter'" style="position: relative;">
        <div
          class="{{ prefixCls }}-dropdown {{ dropdownClassName }}"
          [class.ant-picker-dropdown-placement-bottomLeft]="currentPositionY === 'bottom' && currentPositionX === 'start'"
          [class.ant-picker-dropdown-placement-topLeft]="currentPositionY === 'top' && currentPositionX === 'start'"
          [class.ant-picker-dropdown-placement-bottomRight]="currentPositionY === 'bottom' && currentPositionX === 'end'"
          [class.ant-picker-dropdown-placement-topRight]="currentPositionY === 'top' && currentPositionX === 'end'"
          [class.ant-picker-dropdown-range]="isRange"
          [ngStyle]="popupStyle"
        >
          <!-- Compatible for overlay that not support offset dynamically and immediately -->
          <ng-content></ng-content>
        </div>
      </div>
    </ng-template>
  `,
                animations: [ng_zorro_antd_core_animation__WEBPACK_IMPORTED_MODULE_20__["slideMotion"]],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }, { type: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_12__["DateHelperService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] }, { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_19__["Platform"] }, { type: ng_zorro_antd_core_resize_observers__WEBPACK_IMPORTED_MODULE_21__["NzResizeObserver"] }, { type: DatePickerService }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
            }] }]; }, { noAnimation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], isRange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], open: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], inputReadOnly: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], popupStyle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], focusChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], valueChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], openChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], placeholder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], allowClear: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], autoFocus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], format: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], separator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], dropdownClassName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], suffixIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], cdkConnectedOverlay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["CdkConnectedOverlay"], { static: false }]
        }], separatorElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ['separatorElement', { static: false }]
        }], pickerInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ['pickerInput', { static: false }]
        }], rangePickerInputs: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChildren"],
            args: ['rangePickerInput']
        }], panel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"],
            args: [DateRangePopupComponent]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NzDatePickerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
                selector: 'nz-date-picker,nz-week-picker,nz-month-picker,nz-year-picker,nz-range-picker',
                exportAs: 'nzDatePicker',
                template: `
    <div
      nz-picker
      [isRange]="isRange"
      [open]="nzOpen"
      [separator]="nzSeparator"
      [disabled]="nzDisabled"
      [inputReadOnly]="nzInputReadOnly"
      [format]="nzFormat"
      [allowClear]="nzAllowClear"
      [autoFocus]="nzAutoFocus"
      [placeholder]="nzPlaceHolder"
      style="display: inherit; align-items: center; width: 100%;"
      [dropdownClassName]="nzDropdownClassName"
      [popupStyle]="nzPopupStyle"
      [noAnimation]="!!noAnimation?.nzNoAnimation"
      [suffixIcon]="nzSuffixIcon"
      (openChange)="onOpenChange($event)"
      (focusChange)="onFocusChange($event)"
    >
      <date-range-popup
        [isRange]="isRange"
        [defaultPickerValue]="nzDefaultPickerValue"
        [showWeek]="nzMode === 'week'"
        [panelMode]="panelMode"
        (panelModeChange)="onPanelModeChange($event)"
        (calendarChange)="onCalendarChange($event)"
        [locale]="nzLocale?.lang!"
        [showToday]="nzMode === 'date' && nzShowToday && !isRange && !nzShowTime"
        [showTime]="nzShowTime"
        [dateRender]="nzDateRender"
        [disabledDate]="nzDisabledDate"
        [disabledTime]="nzDisabledTime"
        [extraFooter]="extraFooter"
        [ranges]="nzRanges"
        (resultOk)="onResultOk()"
      ></date-range-popup>
    </div>
  `,
                host: {
                    '[class.ant-picker-range]': `isRange`,
                    '[class.ant-picker-large]': `nzSize === 'large'`,
                    '[class.ant-picker-small]': `nzSize === 'small'`,
                    '[class.ant-picker-disabled]': `nzDisabled`,
                    '[class.ant-picker-borderless]': `nzBorderless`,
                    '(click)': 'picker.onClickInputBox($event)'
                },
                providers: [
                    DatePickerService,
                    {
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
                        multi: true,
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])((() => NzDatePickerComponent))
                    }
                ]
            }]
    }], function () { return [{ type: ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_16__["NzConfigService"] }, { type: DatePickerService }, { type: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_12__["NzI18nService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }, { type: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_12__["DateHelperService"] }, { type: ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_5__["NzNoAnimationDirective"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Host"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }] }]; }, { nzAllowClear: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzAutoFocus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzBorderless: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzInputReadOnly: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzPlaceHolder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzPopupStyle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzShowToday: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzMode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzDefaultPickerValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzSeparator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzSuffixIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzOnPanelChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], nzOnCalendarChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], nzOnOk: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], nzOnOpenChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], nzShowTime: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzFormat: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzLocale: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzOpen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzDisabledDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzDropdownClassName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzDateRender: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzDisabledTime: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzRenderExtraFooter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzRanges: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], picker: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: [NzPickerComponent, { static: true }]
        }] }); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class InnerPopupComponent {
    constructor() {
        this.panelModeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        // TODO: name is not proper
        this.headerChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"](); // Emitted when user changed the header's value
        this.selectDate = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"](); // Emitted when the date is selected by click the date panel
        this.selectTime = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.cellHover = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"](); // Emitted when hover on a day by mouse enter
        this.prefixCls = PREFIX_CLASS;
    }
    /**
     * Hide "next" arrow in left panel,
     * hide "prev" arrow in right panel
     * @param direction
     * @param panelMode
     */
    enablePrevNext(direction, panelMode) {
        if (!this.showTimePicker &&
            panelMode === this.endPanelMode &&
            ((this.partType === 'left' && direction === 'next') || (this.partType === 'right' && direction === 'prev'))) {
            return false;
        }
        return true;
    }
    onSelectTime(date) {
        this.selectTime.emit(new ng_zorro_antd_core_time__WEBPACK_IMPORTED_MODULE_10__["CandyDate"](date));
    }
    // The value real changed to outside
    onSelectDate(date) {
        const value = date instanceof ng_zorro_antd_core_time__WEBPACK_IMPORTED_MODULE_10__["CandyDate"] ? date : new ng_zorro_antd_core_time__WEBPACK_IMPORTED_MODULE_10__["CandyDate"](date);
        const timeValue = this.timeOptions && this.timeOptions.nzDefaultOpenValue;
        // Display timeValue when value is null
        if (!this.value && timeValue) {
            value.setHms(timeValue.getHours(), timeValue.getMinutes(), timeValue.getSeconds());
        }
        this.selectDate.emit(value);
    }
    onChooseMonth(value) {
        this.activeDate = this.activeDate.setMonth(value.getMonth());
        if (this.endPanelMode === 'month') {
            this.value = value;
            this.selectDate.emit(value);
        }
        else {
            this.headerChange.emit(value);
            this.panelModeChange.emit(this.endPanelMode);
        }
    }
    onChooseYear(value) {
        this.activeDate = this.activeDate.setYear(value.getYear());
        if (this.endPanelMode === 'year') {
            this.value = value;
            this.selectDate.emit(value);
        }
        else {
            this.headerChange.emit(value);
            this.panelModeChange.emit(this.endPanelMode);
        }
    }
    onChooseDecade(value) {
        this.activeDate = this.activeDate.setYear(value.getYear());
        if (this.endPanelMode === 'decade') {
            this.value = value;
            this.selectDate.emit(value);
        }
        else {
            this.headerChange.emit(value);
            this.panelModeChange.emit('year');
        }
    }
    ngOnChanges(changes) {
        if (changes.activeDate && !changes.activeDate.currentValue) {
            this.activeDate = new ng_zorro_antd_core_time__WEBPACK_IMPORTED_MODULE_10__["CandyDate"]();
        }
        // New Antd vesion has merged 'date' ant 'time' to one panel,
        // So there is not 'time' panel
        if (changes.panelMode && changes.panelMode.currentValue === 'time') {
            this.panelMode = 'date';
        }
    }
}
/** @nocollapse */
InnerPopupComponent.ɵfac = function InnerPopupComponent_Factory(t) { return new (t || InnerPopupComponent)(); };
/** @nocollapse */
InnerPopupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: InnerPopupComponent, selectors: [["inner-popup"]], inputs: { activeDate: "activeDate", value: "value", panelMode: "panelMode", endPanelMode: "endPanelMode", showWeek: "showWeek", locale: "locale", showTimePicker: "showTimePicker", timeOptions: "timeOptions", disabledDate: "disabledDate", dateRender: "dateRender", selectedValue: "selectedValue", hoverValue: "hoverValue", partType: "partType" }, outputs: { panelModeChange: "panelModeChange", headerChange: "headerChange", selectDate: "selectDate", selectTime: "selectTime", cellHover: "cellHover" }, exportAs: ["innerPopup"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]], decls: 8, vars: 11, consts: [[3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [4, "ngIf"], [3, "value", "locale", "showSuperPreBtn", "showSuperNextBtn", "showNextBtn", "showPreBtn", "valueChange", "panelModeChange"], [3, "activeDate", "value", "locale", "disabledDate", "valueChange"], [3, "activeDate", "value", "locale", "disabledDate", "selectedValue", "hoverValue", "valueChange", "cellHover"], [3, "value", "activeDate", "locale", "disabledDate", "selectedValue", "hoverValue", "valueChange", "cellHover"], [3, "value", "locale", "showSuperPreBtn", "showSuperNextBtn", "showPreBtn", "showNextBtn", "valueChange", "panelModeChange"], [3, "locale", "showWeek", "value", "activeDate", "disabledDate", "cellRender", "selectedValue", "hoverValue", "valueChange", "cellHover"], [3, "nzInDatePicker", "ngModel", "format", "nzHourStep", "nzMinuteStep", "nzSecondStep", "nzDisabledHours", "nzDisabledMinutes", "nzDisabledSeconds", "nzHideDisabledOptions", "nzDefaultOpenValue", "nzUse12Hours", "nzAddOn", "ngModelChange"]], template: function InnerPopupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](2, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, InnerPopupComponent_ng_container_3_Template, 4, 13, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, InnerPopupComponent_ng_container_4_Template, 4, 15, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, InnerPopupComponent_ng_container_5_Template, 4, 15, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, InnerPopupComponent_ng_container_6_Template, 4, 17, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, InnerPopupComponent_ng_container_7_Template, 2, 13, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("ant-picker-datetime-panel", ctx.showTimePicker);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate2"]("", ctx.prefixCls, "-", ctx.panelMode, "-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitch", ctx.panelMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "decade");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "year");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "month");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showTimePicker && ctx.timeOptions);
    } }, directives: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], DecadeHeaderComponent, DecadeTableComponent, YearHeaderComponent, YearTableComponent, MonthHeaderComponent, MonthTableComponent, DateHeaderComponent, DateTableComponent, ng_zorro_antd_time_picker__WEBPACK_IMPORTED_MODULE_9__["NzTimePickerPanelComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]]; }, encapsulation: 2, changeDetection: 0 });
InnerPopupComponent.propDecorators = {
    activeDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    endPanelMode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    panelMode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    showWeek: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    locale: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    showTimePicker: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    timeOptions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    disabledDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    dateRender: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    selectedValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    hoverValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    partType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    panelModeChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
    headerChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
    selectDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
    selectTime: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
    cellHover: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](InnerPopupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
                // tslint:disable-next-line:component-selector
                selector: 'inner-popup',
                exportAs: 'innerPopup',
                template: `
    <div [class.ant-picker-datetime-panel]="showTimePicker">
      <div class="{{ prefixCls }}-{{ panelMode }}-panel">
        <ng-container [ngSwitch]="panelMode">
          <ng-container *ngSwitchCase="'decade'">
            <decade-header
              [(value)]="activeDate"
              [locale]="locale"
              [showSuperPreBtn]="enablePrevNext('prev', 'decade')"
              [showSuperNextBtn]="enablePrevNext('next', 'decade')"
              [showNextBtn]="false"
              [showPreBtn]="false"
              (panelModeChange)="panelModeChange.emit($event)"
              (valueChange)="headerChange.emit($event)"
            ></decade-header>
            <div class="{{ prefixCls }}-body">
              <decade-table
                [activeDate]="activeDate"
                [value]="value"
                [locale]="locale"
                (valueChange)="onChooseDecade($event)"
                [disabledDate]="disabledDate"
              ></decade-table>
            </div>
          </ng-container>
          <ng-container *ngSwitchCase="'year'">
            <year-header
              [(value)]="activeDate"
              [locale]="locale"
              [showSuperPreBtn]="enablePrevNext('prev', 'year')"
              [showSuperNextBtn]="enablePrevNext('next', 'year')"
              [showNextBtn]="false"
              [showPreBtn]="false"
              (panelModeChange)="panelModeChange.emit($event)"
              (valueChange)="headerChange.emit($event)"
            ></year-header>
            <div class="{{ prefixCls }}-body">
              <year-table
                [activeDate]="activeDate"
                [value]="value"
                [locale]="locale"
                [disabledDate]="disabledDate"
                [selectedValue]="selectedValue"
                [hoverValue]="hoverValue"
                (valueChange)="onChooseYear($event)"
                (cellHover)="cellHover.emit($event)"
              ></year-table>
            </div>
          </ng-container>
          <ng-container *ngSwitchCase="'month'">
            <month-header
              [(value)]="activeDate"
              [locale]="locale"
              [showSuperPreBtn]="enablePrevNext('prev', 'month')"
              [showSuperNextBtn]="enablePrevNext('next', 'month')"
              [showNextBtn]="false"
              [showPreBtn]="false"
              (panelModeChange)="panelModeChange.emit($event)"
              (valueChange)="headerChange.emit($event)"
            ></month-header>
            <div class="{{ prefixCls }}-body">
              <month-table
                [value]="value"
                [activeDate]="activeDate"
                [locale]="locale"
                [disabledDate]="disabledDate"
                [selectedValue]="selectedValue"
                [hoverValue]="hoverValue"
                (valueChange)="onChooseMonth($event)"
                (cellHover)="cellHover.emit($event)"
              ></month-table>
            </div>
          </ng-container>

          <ng-container *ngSwitchDefault>
            <date-header
              [(value)]="activeDate"
              [locale]="locale"
              [showSuperPreBtn]="showWeek ? enablePrevNext('prev', 'week') : enablePrevNext('prev', 'date')"
              [showSuperNextBtn]="showWeek ? enablePrevNext('next', 'week') : enablePrevNext('next', 'date')"
              [showPreBtn]="showWeek ? enablePrevNext('prev', 'week') : enablePrevNext('prev', 'date')"
              [showNextBtn]="showWeek ? enablePrevNext('next', 'week') : enablePrevNext('next', 'date')"
              (panelModeChange)="panelModeChange.emit($event)"
              (valueChange)="headerChange.emit($event)"
            ></date-header>
            <div class="{{ prefixCls }}-body">
              <date-table
                [locale]="locale"
                [showWeek]="showWeek"
                [value]="value"
                [activeDate]="activeDate"
                [disabledDate]="disabledDate"
                [cellRender]="dateRender"
                [selectedValue]="selectedValue"
                [hoverValue]="hoverValue"
                (valueChange)="onSelectDate($event)"
                (cellHover)="cellHover.emit($event)"
              ></date-table>
            </div>
          </ng-container>
        </ng-container>
      </div>
      <ng-container *ngIf="showTimePicker && timeOptions">
        <nz-time-picker-panel
          [nzInDatePicker]="true"
          [ngModel]="value?.nativeDate"
          (ngModelChange)="onSelectTime($event)"
          [format]="$any(timeOptions.nzFormat)"
          [nzHourStep]="$any(timeOptions.nzHourStep)"
          [nzMinuteStep]="$any(timeOptions.nzMinuteStep)"
          [nzSecondStep]="$any(timeOptions.nzSecondStep)"
          [nzDisabledHours]="$any(timeOptions.nzDisabledHours)"
          [nzDisabledMinutes]="$any(timeOptions.nzDisabledMinutes)"
          [nzDisabledSeconds]="$any(timeOptions.nzDisabledSeconds)"
          [nzHideDisabledOptions]="!!timeOptions.nzHideDisabledOptions"
          [nzDefaultOpenValue]="$any(timeOptions.nzDefaultOpenValue)"
          [nzUse12Hours]="!!timeOptions.nzUse12Hours"
          [nzAddOn]="$any(timeOptions.nzAddOn)"
        ></nz-time-picker-panel>
        <!-- use [opened] to trigger time panel \`initPosition()\` -->
      </ng-container>
    </div>
  `
            }]
    }], function () { return []; }, { panelModeChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], headerChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], selectDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], selectTime: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], cellHover: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], activeDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], panelMode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], endPanelMode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], showWeek: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], locale: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], showTimePicker: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], timeOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], disabledDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], dateRender: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], selectedValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], hoverValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], partType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }] }); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
// tslint:disable-next-line:directive-class-suffix
class AbstractPanelHeader {
    constructor() {
        this.prefixCls = `ant-picker-header`;
        this.selectors = [];
        this.showSuperPreBtn = true;
        this.showSuperNextBtn = true;
        this.showPreBtn = true;
        this.showNextBtn = true;
        this.panelModeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    }
    superPreviousTitle() {
        return this.locale.previousYear;
    }
    previousTitle() {
        return this.locale.previousMonth;
    }
    superNextTitle() {
        return this.locale.nextYear;
    }
    nextTitle() {
        return this.locale.nextMonth;
    }
    superPrevious() {
        this.changeValue(this.value.addYears(-1));
    }
    superNext() {
        this.changeValue(this.value.addYears(1));
    }
    previous() {
        this.changeValue(this.value.addMonths(-1));
    }
    next() {
        this.changeValue(this.value.addMonths(1));
    }
    changeValue(value) {
        if (this.value !== value) {
            this.value = value;
            this.valueChange.emit(this.value);
            this.render();
        }
    }
    changeMode(mode) {
        this.panelModeChange.emit(mode);
    }
    render() {
        if (this.value) {
            this.selectors = this.getSelectors();
        }
    }
    ngOnInit() {
        if (!this.value) {
            this.value = new ng_zorro_antd_core_time__WEBPACK_IMPORTED_MODULE_10__["CandyDate"](); // Show today by default
        }
        this.selectors = this.getSelectors();
    }
    ngOnChanges(changes) {
        if (changes.value || changes.locale) {
            this.render();
        }
    }
}
/** @nocollapse */
AbstractPanelHeader.ɵfac = function AbstractPanelHeader_Factory(t) { return new (t || AbstractPanelHeader)(); };
/** @nocollapse */
AbstractPanelHeader.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: AbstractPanelHeader, inputs: { showSuperPreBtn: "showSuperPreBtn", showSuperNextBtn: "showSuperNextBtn", showPreBtn: "showPreBtn", showNextBtn: "showNextBtn", value: "value", locale: "locale" }, outputs: { panelModeChange: "panelModeChange", valueChange: "valueChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]] });
AbstractPanelHeader.propDecorators = {
    value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    locale: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    showSuperPreBtn: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    showSuperNextBtn: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    showPreBtn: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    showNextBtn: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    panelModeChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
    valueChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AbstractPanelHeader, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"]
    }], function () { return []; }, { showSuperPreBtn: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], showSuperNextBtn: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], showPreBtn: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], showNextBtn: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], panelModeChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], valueChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], locale: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }] }); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class DateHeaderComponent extends AbstractPanelHeader {
    constructor(dateHelper) {
        super();
        this.dateHelper = dateHelper;
    }
    getSelectors() {
        return [
            {
                className: `${this.prefixCls}-year-btn`,
                title: this.locale.yearSelect,
                onClick: () => this.changeMode('year'),
                label: this.dateHelper.format(this.value.nativeDate, transCompatFormat(this.locale.yearFormat))
            },
            {
                className: `${this.prefixCls}-month-btn`,
                title: this.locale.monthSelect,
                onClick: () => this.changeMode('month'),
                label: this.dateHelper.format(this.value.nativeDate, this.locale.monthFormat || 'MMM')
            }
        ];
    }
}
/** @nocollapse */
DateHeaderComponent.ɵfac = function DateHeaderComponent_Factory(t) { return new (t || DateHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_12__["DateHelperService"])); };
/** @nocollapse */
DateHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: DateHeaderComponent, selectors: [["date-header"]], exportAs: ["dateHeader"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 11, vars: 31, consts: [["role", "button", "tabindex", "-1", 3, "title", "click"], [1, "ant-picker-super-prev-icon"], [1, "ant-picker-prev-icon"], [4, "ngFor", "ngForOf"], [1, "ant-picker-next-icon"], [1, "ant-picker-super-next-icon"], ["role", "button", "type", "button", 3, "title", "click"]], template: function DateHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DateHeaderComponent_Template_button_click_1_listener() { return ctx.superPrevious(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DateHeaderComponent_Template_button_click_3_listener() { return ctx.previous(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, DateHeaderComponent_ng_container_6_Template, 3, 5, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DateHeaderComponent_Template_button_click_7_listener() { return ctx.next(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DateHeaderComponent_Template_button_click_9_listener() { return ctx.superNext(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx.prefixCls);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("", ctx.prefixCls, "-super-prev-btn");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("visibility", ctx.showSuperPreBtn ? "visible" : "hidden");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("title", ctx.superPreviousTitle());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("", ctx.prefixCls, "-prev-btn");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("visibility", ctx.showPreBtn ? "visible" : "hidden");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("title", ctx.previousTitle());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("", ctx.prefixCls, "-view");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.selectors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("", ctx.prefixCls, "-next-btn");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("visibility", ctx.showNextBtn ? "visible" : "hidden");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("title", ctx.nextTitle());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("", ctx.prefixCls, "-super-next-btn");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("visibility", ctx.showSuperNextBtn ? "visible" : "hidden");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("title", ctx.superNextTitle());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], encapsulation: 2, changeDetection: 0 });
DateHeaderComponent.ctorParameters = () => [
    { type: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_12__["DateHelperService"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](DateHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
                selector: 'date-header',
                exportAs: 'dateHeader',
                template: "<div class=\"{{ prefixCls }}\">\n  <button\n    [style.visibility]=\"showSuperPreBtn ? 'visible' : 'hidden'\"\n    class=\"{{ prefixCls }}-super-prev-btn\"\n    role=\"button\"\n    tabindex=\"-1\"\n    title=\"{{ superPreviousTitle() }}\"\n    (click)=\"superPrevious()\"\n  >\n    <span class=\"ant-picker-super-prev-icon\"></span>\n  </button>\n  <button\n    [style.visibility]=\"showPreBtn ? 'visible' : 'hidden'\"\n    class=\"{{ prefixCls }}-prev-btn\"\n    role=\"button\"\n    title=\"{{ previousTitle() }}\"\n    tabindex=\"-1\"\n    (click)=\"previous()\"\n  >\n    <span class=\"ant-picker-prev-icon\"></span>\n  </button>\n\n  <div class=\"{{ prefixCls }}-view\">\n    <ng-container *ngFor=\"let selector of selectors\">\n      <button\n        class=\"{{ selector.className }}\"\n        role=\"button\"\n        type=\"button\"\n        title=\"{{ selector.title || null }}\"\n        (click)=\"selector.onClick()\"\n      >\n        {{ selector.label }}\n      </button>\n    </ng-container>\n  </div>\n  <button\n    [style.visibility]=\"showNextBtn ? 'visible' : 'hidden'\"\n    class=\"{{ prefixCls }}-next-btn\"\n    role=\"button\"\n    tabindex=\"-1\"\n    title=\"{{ nextTitle() }}\"\n    (click)=\"next()\"\n  >\n    <span class=\"ant-picker-next-icon\"></span>\n  </button>\n  <button\n    [style.visibility]=\"showSuperNextBtn ? 'visible' : 'hidden'\"\n    class=\"{{ prefixCls }}-super-next-btn\"\n    role=\"button\"\n    tabindex=\"-1\"\n    title=\"{{ superNextTitle() }}\"\n    (click)=\"superNext()\"\n  >\n    <span class=\"ant-picker-super-next-icon\"></span>\n  </button>\n</div>\n"
            }]
    }], function () { return [{ type: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_12__["DateHelperService"] }]; }, null); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
// tslint:disable-next-line:directive-class-suffix
class AbstractTable {
    constructor() {
        this.isTemplateRef = ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_11__["isTemplateRef"];
        this.isNonEmptyString = ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_11__["isNonEmptyString"];
        this.headRow = [];
        this.bodyRows = [];
        this.MAX_ROW = 6;
        this.MAX_COL = 7;
        this.prefixCls = 'ant-picker';
        this.activeDate = new ng_zorro_antd_core_time__WEBPACK_IMPORTED_MODULE_10__["CandyDate"]();
        this.showWeek = false;
        this.selectedValue = []; // Range ONLY
        this.hoverValue = []; // Range ONLY
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.cellHover = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"](); // Emitted when hover on a day by mouse enter
    }
    render() {
        if (this.activeDate) {
            this.headRow = this.makeHeadRow();
            this.bodyRows = this.makeBodyRows();
        }
    }
    trackByBodyRow(_index, item) {
        return item.trackByIndex;
    }
    trackByBodyColumn(_index, item) {
        return item.trackByIndex;
    }
    hasRangeValue() {
        var _a, _b;
        return ((_a = this.selectedValue) === null || _a === void 0 ? void 0 : _a.length) > 0 || ((_b = this.hoverValue) === null || _b === void 0 ? void 0 : _b.length) > 0;
    }
    getClassMap(cell) {
        return {
            [`ant-picker-cell`]: true,
            [`ant-picker-cell-in-view`]: true,
            [`ant-picker-cell-selected`]: cell.isSelected,
            [`ant-picker-cell-disabled`]: cell.isDisabled,
            [`ant-picker-cell-in-range`]: !!cell.isInSelectedRange,
            [`ant-picker-cell-range-start`]: !!cell.isSelectedStart,
            [`ant-picker-cell-range-end`]: !!cell.isSelectedEnd,
            [`ant-picker-cell-range-start-single`]: !!cell.isStartSingle,
            [`ant-picker-cell-range-end-single`]: !!cell.isEndSingle,
            [`ant-picker-cell-range-hover`]: !!cell.isInHoverRange,
            [`ant-picker-cell-range-hover-start`]: !!cell.isHoverStart,
            [`ant-picker-cell-range-hover-end`]: !!cell.isHoverEnd,
            [`ant-picker-cell-range-hover-edge-start`]: !!cell.isFirstCellInPanel,
            [`ant-picker-cell-range-hover-edge-end`]: !!cell.isLastCellInPanel,
            [`ant-picker-cell-range-start-near-hover`]: !!cell.isRangeStartNearHover,
            [`ant-picker-cell-range-end-near-hover`]: !!cell.isRangeEndNearHover
        };
    }
    ngOnInit() {
        this.render();
    }
    ngOnChanges(changes) {
        if (changes.activeDate && !changes.activeDate.currentValue) {
            this.activeDate = new ng_zorro_antd_core_time__WEBPACK_IMPORTED_MODULE_10__["CandyDate"]();
        }
        if (changes.disabledDate ||
            changes.locale ||
            changes.showWeek ||
            this.isDateRealChange(changes.activeDate) ||
            this.isDateRealChange(changes.value) ||
            this.isDateRealChange(changes.selectedValue) ||
            this.isDateRealChange(changes.hoverValue)) {
            this.render();
        }
    }
    isDateRealChange(change) {
        if (change) {
            const previousValue = change.previousValue;
            const currentValue = change.currentValue;
            if (Array.isArray(currentValue)) {
                return (!Array.isArray(previousValue) ||
                    currentValue.length !== previousValue.length ||
                    currentValue.some((value, index) => {
                        const previousCandyDate = previousValue[index];
                        return previousCandyDate instanceof ng_zorro_antd_core_time__WEBPACK_IMPORTED_MODULE_10__["CandyDate"] ? previousCandyDate.isSameDay(value) : previousCandyDate !== value;
                    }));
            }
            else {
                return !this.isSameDate(previousValue, currentValue);
            }
        }
        return false;
    }
    isSameDate(left, right) {
        return (!left && !right) || (left && right && right.isSameDay(left));
    }
}
/** @nocollapse */
AbstractTable.ɵfac = function AbstractTable_Factory(t) { return new (t || AbstractTable)(); };
/** @nocollapse */
AbstractTable.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: AbstractTable, inputs: { prefixCls: "prefixCls", activeDate: "activeDate", showWeek: "showWeek", selectedValue: "selectedValue", hoverValue: "hoverValue", value: "value", locale: "locale", disabledDate: "disabledDate", cellRender: "cellRender", fullCellRender: "fullCellRender" }, outputs: { valueChange: "valueChange", cellHover: "cellHover" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]] });
AbstractTable.propDecorators = {
    prefixCls: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    locale: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    activeDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    showWeek: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    selectedValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    hoverValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    disabledDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    cellRender: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    fullCellRender: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    valueChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
    cellHover: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AbstractTable, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"]
    }], function () { return []; }, { prefixCls: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], activeDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], showWeek: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], selectedValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], hoverValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], valueChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], cellHover: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], locale: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], disabledDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], cellRender: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], fullCellRender: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }] }); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class DateTableComponent extends AbstractTable {
    constructor(i18n, dateHelper) {
        super();
        this.i18n = i18n;
        this.dateHelper = dateHelper;
    }
    changeValueFromInside(value) {
        // Only change date not change time
        this.activeDate = this.activeDate.setYear(value.getYear()).setMonth(value.getMonth()).setDate(value.getDate());
        this.valueChange.emit(this.activeDate);
        if (!this.activeDate.isSameMonth(this.value)) {
            this.render();
        }
    }
    makeHeadRow() {
        const weekDays = [];
        const start = this.activeDate.calendarStart({ weekStartsOn: this.dateHelper.getFirstDayOfWeek() });
        for (let colIndex = 0; colIndex < this.MAX_COL; colIndex++) {
            const day = start.addDays(colIndex);
            weekDays.push({
                trackByIndex: null,
                value: day.nativeDate,
                title: this.dateHelper.format(day.nativeDate, 'E'),
                content: this.dateHelper.format(day.nativeDate, this.getVeryShortWeekFormat()),
                isSelected: false,
                isDisabled: false,
                onClick() { },
                onMouseEnter() { }
            });
        }
        return weekDays;
    }
    getVeryShortWeekFormat() {
        return this.i18n.getLocaleId().toLowerCase().indexOf('zh') === 0 ? 'EEEEE' : 'EEEEEE'; // Use extreme short for chinese
    }
    makeBodyRows() {
        const weekRows = [];
        const firstDayOfMonth = this.activeDate.calendarStart({ weekStartsOn: this.dateHelper.getFirstDayOfWeek() });
        for (let week = 0; week < this.MAX_ROW; week++) {
            const weekStart = firstDayOfMonth.addDays(week * 7);
            const row = {
                isActive: false,
                dateCells: [],
                trackByIndex: `${weekStart.getYear()}`
            };
            for (let day = 0; day < 7; day++) {
                const date = weekStart.addDays(day);
                const dateFormat = transCompatFormat(this.i18n.getLocaleData('DatePicker.lang.dateFormat', 'YYYY-MM-DD'));
                const title = this.dateHelper.format(date.nativeDate, dateFormat);
                const label = this.dateHelper.format(date.nativeDate, 'dd');
                const cell = {
                    trackByIndex: title,
                    value: date.nativeDate,
                    label: label,
                    isSelected: false,
                    isDisabled: false,
                    isToday: false,
                    title: title,
                    cellRender: Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_11__["valueFunctionProp"])(this.cellRender, date),
                    fullCellRender: Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_11__["valueFunctionProp"])(this.fullCellRender, date),
                    content: `${date.getDate()}`,
                    onClick: () => this.changeValueFromInside(date),
                    onMouseEnter: () => this.cellHover.emit(date)
                };
                this.addCellProperty(cell, date);
                if (this.showWeek && !row.weekNum) {
                    row.weekNum = this.dateHelper.getISOWeek(date.nativeDate);
                }
                if (date.isSameDay(this.value)) {
                    row.isActive = date.isSameDay(this.value);
                }
                row.dateCells.push(cell);
            }
            row.classMap = {
                [`ant-picker-week-panel-row`]: this.showWeek,
                [`ant-picker-week-panel-row-selected`]: this.showWeek && row.isActive
            };
            weekRows.push(row);
        }
        return weekRows;
    }
    addCellProperty(cell, date) {
        var _a;
        if (this.hasRangeValue() && !this.showWeek) {
            const [startHover, endHover] = this.hoverValue;
            const [startSelected, endSelected] = this.selectedValue;
            // Selected
            if (startSelected === null || startSelected === void 0 ? void 0 : startSelected.isSameDay(date)) {
                cell.isSelectedStart = true;
                cell.isSelected = true;
            }
            if (endSelected === null || endSelected === void 0 ? void 0 : endSelected.isSameDay(date)) {
                cell.isSelectedEnd = true;
                cell.isSelected = true;
            }
            if (startHover && endHover) {
                cell.isHoverStart = startHover.isSameDay(date);
                cell.isHoverEnd = endHover.isSameDay(date);
                cell.isLastCellInPanel = date.isLastDayOfMonth();
                cell.isFirstCellInPanel = date.isFirstDayOfMonth();
                cell.isInHoverRange = startHover.isBeforeDay(date) && date.isBeforeDay(endHover);
            }
            cell.isStartSingle = startSelected && !endSelected;
            cell.isEndSingle = !startSelected && endSelected;
            cell.isInSelectedRange = (startSelected === null || startSelected === void 0 ? void 0 : startSelected.isBeforeDay(date)) && date.isBeforeDay(endSelected);
            cell.isRangeStartNearHover = startSelected && cell.isInHoverRange;
            cell.isRangeEndNearHover = endSelected && cell.isInHoverRange;
        }
        cell.isToday = date.isToday();
        cell.isSelected = date.isSameDay(this.value);
        cell.isDisabled = !!((_a = this.disabledDate) === null || _a === void 0 ? void 0 : _a.call(this, date.nativeDate));
        cell.classMap = this.getClassMap(cell);
    }
    getClassMap(cell) {
        const date = new ng_zorro_antd_core_time__WEBPACK_IMPORTED_MODULE_10__["CandyDate"](cell.value);
        return Object.assign(Object.assign({}, super.getClassMap(cell)), { [`ant-picker-cell-today`]: !!cell.isToday, [`ant-picker-cell-in-view`]: date.isSameMonth(this.activeDate) });
    }
}
/** @nocollapse */
DateTableComponent.ɵfac = function DateTableComponent_Factory(t) { return new (t || DateTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_12__["NzI18nService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_12__["DateHelperService"])); };
/** @nocollapse */
DateTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: DateTableComponent, selectors: [["date-table"]], inputs: { locale: "locale" }, exportAs: ["dateTable"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 4, vars: 3, consts: [["cellspacing", "0", "role", "grid", 1, "ant-picker-content"], [4, "ngIf"], ["role", "row", 3, "ngClass", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["role", "row"], ["role", "columnheader", 4, "ngIf"], ["role", "columnheader", 3, "title", 4, "ngFor", "ngForOf"], ["role", "columnheader"], ["role", "columnheader", 3, "title"], ["role", "row", 3, "ngClass"], ["role", "gridcell", 3, "class", 4, "ngIf"], ["role", "gridcell", 3, "title", "ngClass", "click", "mouseenter", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["role", "gridcell"], ["role", "gridcell", 3, "title", "ngClass", "click", "mouseenter"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "innerHTML"], [4, "ngIf", "ngIfElse"], ["defaultCell", ""]], template: function DateTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, DateTableComponent_thead_1_Template, 4, 2, "thead", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, DateTableComponent_tr_3_Template, 3, 4, "tr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.headRow && ctx.headRow.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.bodyRows)("ngForTrackBy", ctx.trackByBodyRow);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgTemplateOutlet"]], encapsulation: 2, changeDetection: 0 });
DateTableComponent.ctorParameters = () => [
    { type: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_12__["NzI18nService"] },
    { type: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_12__["DateHelperService"] }
];
DateTableComponent.propDecorators = {
    locale: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](DateTableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
                // tslint:disable-next-line:component-selector
                selector: 'date-table',
                exportAs: 'dateTable',
                template: "<table class=\"ant-picker-content\" cellspacing=\"0\" role=\"grid\">\n  <thead *ngIf=\"headRow && headRow.length > 0\">\n    <tr role=\"row\">\n      <th *ngIf=\"showWeek\" role=\"columnheader\"></th>\n      <th *ngFor=\"let cell of headRow\" role=\"columnheader\" title=\"{{ cell.title }}\">\n        {{ cell.content }}\n      </th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let row of bodyRows; trackBy: trackByBodyRow\" [ngClass]=\"row.classMap!\" role=\"row\">\n      <td *ngIf=\"row.weekNum\" role=\"gridcell\" class=\"{{ prefixCls }}-cell-week\">\n        {{ row.weekNum }}\n      </td>\n      <td\n        *ngFor=\"let cell of row.dateCells; trackBy: trackByBodyColumn\"\n        title=\"{{ cell.title }}\"\n        role=\"gridcell\"\n        [ngClass]=\"cell.classMap!\"\n        (click)=\"cell.isDisabled ? null : cell.onClick()\"\n        (mouseenter)=\"cell.onMouseEnter()\"\n      >\n        <ng-container [ngSwitch]=\"prefixCls\">\n          <ng-container *ngSwitchCase=\"'ant-picker'\">\n            <ng-container [ngSwitch]=\"true\">\n              <ng-container *ngSwitchCase=\"isTemplateRef(cell.cellRender)\">\n                <!--           *ngSwitchCase not has type assertion support, the cellRender type here is TemplateRef -->\n                <ng-container\n                  *ngTemplateOutlet=\"$any(cell.cellRender); context: { $implicit: cell.value }\"\n                ></ng-container>\n              </ng-container>\n              <ng-container *ngSwitchCase=\"isNonEmptyString(cell.cellRender)\">\n                <span [innerHTML]=\"cell.cellRender\"></span>\n              </ng-container>\n              <ng-container *ngSwitchDefault>\n                <div\n                  class=\"{{ prefixCls }}-cell-inner\"\n                  [attr.aria-selected]=\"cell.isSelected\"\n                  [attr.aria-disabled]=\"cell.isDisabled\"\n                >\n                  {{ cell.content }}\n                </div>\n              </ng-container>\n            </ng-container>\n          </ng-container>\n          <ng-container *ngSwitchCase=\"'ant-picker-calendar'\">\n            <div\n              class=\"{{ prefixCls }}-date ant-picker-cell-inner\"\n              [class.ant-picker-calendar-date-today]=\"cell.isToday\"\n            >\n              <ng-container *ngIf=\"cell.fullCellRender; else defaultCell\">\n                <ng-container\n                  *ngTemplateOutlet=\"$any(cell.fullCellRender); context: { $implicit: cell.value }\"\n                >\n                </ng-container>\n              </ng-container>\n              <ng-template #defaultCell>\n                <div class=\"{{ prefixCls }}-date-value\">{{ cell.content }}</div>\n                <div class=\"{{ prefixCls }}-date-content\">\n                  <ng-container\n                    *ngTemplateOutlet=\"$any(cell.cellRender); context: { $implicit: cell.value }\"\n                  >\n                  </ng-container>\n                </div>\n              </ng-template>\n            </div>\n          </ng-container>\n        </ng-container>\n      </td>\n    </tr>\n  </tbody>\n</table>\n"
            }]
    }], function () { return [{ type: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_12__["NzI18nService"] }, { type: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_12__["DateHelperService"] }]; }, { locale: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }] }); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class DecadeHeaderComponent extends AbstractPanelHeader {
    previous() { }
    next() { }
    get startYear() {
        return parseInt(`${this.value.getYear() / 100}`, 10) * 100;
    }
    get endYear() {
        return this.startYear + 99;
    }
    superPrevious() {
        this.changeValue(this.value.addYears(-100));
    }
    superNext() {
        this.changeValue(this.value.addYears(100));
    }
    getSelectors() {
        return [
            {
                className: `${this.prefixCls}-decade-btn`,
                title: '',
                onClick: () => {
                    // noop
                },
                label: `${this.startYear}-${this.endYear}`
            }
        ];
    }
}
/** @nocollapse */
DecadeHeaderComponent.ɵfac = function DecadeHeaderComponent_Factory(t) { return ɵDecadeHeaderComponent_BaseFactory(t || DecadeHeaderComponent); };
/** @nocollapse */
DecadeHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: DecadeHeaderComponent, selectors: [["decade-header"]], exportAs: ["decadeHeader"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 11, vars: 31, consts: [["role", "button", "tabindex", "-1", 3, "title", "click"], [1, "ant-picker-super-prev-icon"], [1, "ant-picker-prev-icon"], [4, "ngFor", "ngForOf"], [1, "ant-picker-next-icon"], [1, "ant-picker-super-next-icon"], ["role", "button", "type", "button", 3, "title", "click"]], template: function DecadeHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DecadeHeaderComponent_Template_button_click_1_listener() { return ctx.superPrevious(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DecadeHeaderComponent_Template_button_click_3_listener() { return ctx.previous(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, DecadeHeaderComponent_ng_container_6_Template, 3, 5, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DecadeHeaderComponent_Template_button_click_7_listener() { return ctx.next(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DecadeHeaderComponent_Template_button_click_9_listener() { return ctx.superNext(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx.prefixCls);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("", ctx.prefixCls, "-super-prev-btn");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("visibility", ctx.showSuperPreBtn ? "visible" : "hidden");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("title", ctx.superPreviousTitle());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("", ctx.prefixCls, "-prev-btn");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("visibility", ctx.showPreBtn ? "visible" : "hidden");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("title", ctx.previousTitle());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("", ctx.prefixCls, "-view");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.selectors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("", ctx.prefixCls, "-next-btn");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("visibility", ctx.showNextBtn ? "visible" : "hidden");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("title", ctx.nextTitle());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("", ctx.prefixCls, "-super-next-btn");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("visibility", ctx.showSuperNextBtn ? "visible" : "hidden");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("title", ctx.superNextTitle());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], encapsulation: 2, changeDetection: 0 });
const ɵDecadeHeaderComponent_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](DecadeHeaderComponent);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](DecadeHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
                selector: 'decade-header',
                exportAs: 'decadeHeader',
                template: "<div class=\"{{ prefixCls }}\">\n  <button\n    [style.visibility]=\"showSuperPreBtn ? 'visible' : 'hidden'\"\n    class=\"{{ prefixCls }}-super-prev-btn\"\n    role=\"button\"\n    tabindex=\"-1\"\n    title=\"{{ superPreviousTitle() }}\"\n    (click)=\"superPrevious()\"\n  >\n    <span class=\"ant-picker-super-prev-icon\"></span>\n  </button>\n  <button\n    [style.visibility]=\"showPreBtn ? 'visible' : 'hidden'\"\n    class=\"{{ prefixCls }}-prev-btn\"\n    role=\"button\"\n    title=\"{{ previousTitle() }}\"\n    tabindex=\"-1\"\n    (click)=\"previous()\"\n  >\n    <span class=\"ant-picker-prev-icon\"></span>\n  </button>\n\n  <div class=\"{{ prefixCls }}-view\">\n    <ng-container *ngFor=\"let selector of selectors\">\n      <button\n        class=\"{{ selector.className }}\"\n        role=\"button\"\n        type=\"button\"\n        title=\"{{ selector.title || null }}\"\n        (click)=\"selector.onClick()\"\n      >\n        {{ selector.label }}\n      </button>\n    </ng-container>\n  </div>\n  <button\n    [style.visibility]=\"showNextBtn ? 'visible' : 'hidden'\"\n    class=\"{{ prefixCls }}-next-btn\"\n    role=\"button\"\n    tabindex=\"-1\"\n    title=\"{{ nextTitle() }}\"\n    (click)=\"next()\"\n  >\n    <span class=\"ant-picker-next-icon\"></span>\n  </button>\n  <button\n    [style.visibility]=\"showSuperNextBtn ? 'visible' : 'hidden'\"\n    class=\"{{ prefixCls }}-super-next-btn\"\n    role=\"button\"\n    tabindex=\"-1\"\n    title=\"{{ superNextTitle() }}\"\n    (click)=\"superNext()\"\n  >\n    <span class=\"ant-picker-super-next-icon\"></span>\n  </button>\n</div>\n"
            }]
    }], null, null); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
const MAX_ROW = 4;
const MAX_COL = 3;
class DecadeTableComponent extends AbstractTable {
    get startYear() {
        return parseInt(`${this.activeDate.getYear() / 100}`, 10) * 100;
    }
    get endYear() {
        return this.startYear + 99;
    }
    makeHeadRow() {
        return [];
    }
    makeBodyRows() {
        const decades = [];
        const currentYear = this.value && this.value.getYear();
        const startYear = this.startYear;
        const endYear = this.endYear;
        const previousYear = startYear - 10;
        let index = 0;
        for (let rowIndex = 0; rowIndex < MAX_ROW; rowIndex++) {
            const row = {
                dateCells: [],
                trackByIndex: previousYear
            };
            for (let colIndex = 0; colIndex < MAX_COL; colIndex++) {
                const start = previousYear + index * 10;
                const end = previousYear + index * 10 + 9;
                const content = `${start}-${end}`;
                const cell = {
                    trackByIndex: content,
                    value: this.activeDate.setYear(start).nativeDate,
                    content,
                    title: content,
                    isDisabled: false,
                    isSelected: currentYear >= start && currentYear <= end,
                    isLowerThanStart: end < startYear,
                    isBiggerThanEnd: start > endYear,
                    classMap: {},
                    onClick() { },
                    onMouseEnter() { }
                };
                cell.classMap = this.getClassMap(cell);
                cell.onClick = () => this.chooseDecade(start);
                index++;
                row.dateCells.push(cell);
            }
            decades.push(row);
        }
        return decades;
    }
    getClassMap(cell) {
        return {
            [`${this.prefixCls}-cell`]: true,
            [`${this.prefixCls}-cell-in-view`]: !cell.isBiggerThanEnd && !cell.isLowerThanStart,
            [`${this.prefixCls}-cell-selected`]: cell.isSelected,
            [`${this.prefixCls}-cell-disabled`]: cell.isDisabled
        };
    }
    chooseDecade(year) {
        this.value = this.activeDate.setYear(year);
        this.valueChange.emit(this.value);
    }
}
/** @nocollapse */
DecadeTableComponent.ɵfac = function DecadeTableComponent_Factory(t) { return ɵDecadeTableComponent_BaseFactory(t || DecadeTableComponent); };
/** @nocollapse */
DecadeTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: DecadeTableComponent, selectors: [["decade-table"]], exportAs: ["decadeTable"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 4, vars: 3, consts: [["cellspacing", "0", "role", "grid", 1, "ant-picker-content"], [4, "ngIf"], ["role", "row", 3, "ngClass", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["role", "row"], ["role", "columnheader", 4, "ngIf"], ["role", "columnheader", 3, "title", 4, "ngFor", "ngForOf"], ["role", "columnheader"], ["role", "columnheader", 3, "title"], ["role", "row", 3, "ngClass"], ["role", "gridcell", 3, "class", 4, "ngIf"], ["role", "gridcell", 3, "title", "ngClass", "click", "mouseenter", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["role", "gridcell"], ["role", "gridcell", 3, "title", "ngClass", "click", "mouseenter"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "innerHTML"], [4, "ngIf", "ngIfElse"], ["defaultCell", ""]], template: function DecadeTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, DecadeTableComponent_thead_1_Template, 4, 2, "thead", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, DecadeTableComponent_tr_3_Template, 3, 4, "tr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.headRow && ctx.headRow.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.bodyRows)("ngForTrackBy", ctx.trackByBodyRow);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgTemplateOutlet"]], encapsulation: 2, changeDetection: 0 });
const ɵDecadeTableComponent_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](DecadeTableComponent);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](DecadeTableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
                // tslint:disable-next-line:component-selector
                selector: 'decade-table',
                exportAs: 'decadeTable',
                template: "<table class=\"ant-picker-content\" cellspacing=\"0\" role=\"grid\">\n  <thead *ngIf=\"headRow && headRow.length > 0\">\n    <tr role=\"row\">\n      <th *ngIf=\"showWeek\" role=\"columnheader\"></th>\n      <th *ngFor=\"let cell of headRow\" role=\"columnheader\" title=\"{{ cell.title }}\">\n        {{ cell.content }}\n      </th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let row of bodyRows; trackBy: trackByBodyRow\" [ngClass]=\"row.classMap!\" role=\"row\">\n      <td *ngIf=\"row.weekNum\" role=\"gridcell\" class=\"{{ prefixCls }}-cell-week\">\n        {{ row.weekNum }}\n      </td>\n      <td\n        *ngFor=\"let cell of row.dateCells; trackBy: trackByBodyColumn\"\n        title=\"{{ cell.title }}\"\n        role=\"gridcell\"\n        [ngClass]=\"cell.classMap!\"\n        (click)=\"cell.isDisabled ? null : cell.onClick()\"\n        (mouseenter)=\"cell.onMouseEnter()\"\n      >\n        <ng-container [ngSwitch]=\"prefixCls\">\n          <ng-container *ngSwitchCase=\"'ant-picker'\">\n            <ng-container [ngSwitch]=\"true\">\n              <ng-container *ngSwitchCase=\"isTemplateRef(cell.cellRender)\">\n                <!--           *ngSwitchCase not has type assertion support, the cellRender type here is TemplateRef -->\n                <ng-container\n                  *ngTemplateOutlet=\"$any(cell.cellRender); context: { $implicit: cell.value }\"\n                ></ng-container>\n              </ng-container>\n              <ng-container *ngSwitchCase=\"isNonEmptyString(cell.cellRender)\">\n                <span [innerHTML]=\"cell.cellRender\"></span>\n              </ng-container>\n              <ng-container *ngSwitchDefault>\n                <div\n                  class=\"{{ prefixCls }}-cell-inner\"\n                  [attr.aria-selected]=\"cell.isSelected\"\n                  [attr.aria-disabled]=\"cell.isDisabled\"\n                >\n                  {{ cell.content }}\n                </div>\n              </ng-container>\n            </ng-container>\n          </ng-container>\n          <ng-container *ngSwitchCase=\"'ant-picker-calendar'\">\n            <div\n              class=\"{{ prefixCls }}-date ant-picker-cell-inner\"\n              [class.ant-picker-calendar-date-today]=\"cell.isToday\"\n            >\n              <ng-container *ngIf=\"cell.fullCellRender; else defaultCell\">\n                <ng-container\n                  *ngTemplateOutlet=\"$any(cell.fullCellRender); context: { $implicit: cell.value }\"\n                >\n                </ng-container>\n              </ng-container>\n              <ng-template #defaultCell>\n                <div class=\"{{ prefixCls }}-date-value\">{{ cell.content }}</div>\n                <div class=\"{{ prefixCls }}-date-content\">\n                  <ng-container\n                    *ngTemplateOutlet=\"$any(cell.cellRender); context: { $implicit: cell.value }\"\n                  >\n                  </ng-container>\n                </div>\n              </ng-template>\n            </div>\n          </ng-container>\n        </ng-container>\n      </td>\n    </tr>\n  </tbody>\n</table>\n"
            }]
    }], null, null); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class MonthHeaderComponent extends AbstractPanelHeader {
    constructor(dateHelper) {
        super();
        this.dateHelper = dateHelper;
    }
    getSelectors() {
        return [
            {
                className: `${this.prefixCls}-month-btn`,
                title: this.locale.yearSelect,
                onClick: () => this.changeMode('year'),
                label: this.dateHelper.format(this.value.nativeDate, transCompatFormat(this.locale.yearFormat))
            }
        ];
    }
}
/** @nocollapse */
MonthHeaderComponent.ɵfac = function MonthHeaderComponent_Factory(t) { return new (t || MonthHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_12__["DateHelperService"])); };
/** @nocollapse */
MonthHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: MonthHeaderComponent, selectors: [["month-header"]], exportAs: ["monthHeader"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 11, vars: 31, consts: [["role", "button", "tabindex", "-1", 3, "title", "click"], [1, "ant-picker-super-prev-icon"], [1, "ant-picker-prev-icon"], [4, "ngFor", "ngForOf"], [1, "ant-picker-next-icon"], [1, "ant-picker-super-next-icon"], ["role", "button", "type", "button", 3, "title", "click"]], template: function MonthHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MonthHeaderComponent_Template_button_click_1_listener() { return ctx.superPrevious(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MonthHeaderComponent_Template_button_click_3_listener() { return ctx.previous(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, MonthHeaderComponent_ng_container_6_Template, 3, 5, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MonthHeaderComponent_Template_button_click_7_listener() { return ctx.next(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MonthHeaderComponent_Template_button_click_9_listener() { return ctx.superNext(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx.prefixCls);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("", ctx.prefixCls, "-super-prev-btn");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("visibility", ctx.showSuperPreBtn ? "visible" : "hidden");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("title", ctx.superPreviousTitle());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("", ctx.prefixCls, "-prev-btn");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("visibility", ctx.showPreBtn ? "visible" : "hidden");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("title", ctx.previousTitle());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("", ctx.prefixCls, "-view");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.selectors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("", ctx.prefixCls, "-next-btn");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("visibility", ctx.showNextBtn ? "visible" : "hidden");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("title", ctx.nextTitle());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("", ctx.prefixCls, "-super-next-btn");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("visibility", ctx.showSuperNextBtn ? "visible" : "hidden");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("title", ctx.superNextTitle());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], encapsulation: 2, changeDetection: 0 });
MonthHeaderComponent.ctorParameters = () => [
    { type: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_12__["DateHelperService"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MonthHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
                selector: 'month-header',
                exportAs: 'monthHeader',
                template: "<div class=\"{{ prefixCls }}\">\n  <button\n    [style.visibility]=\"showSuperPreBtn ? 'visible' : 'hidden'\"\n    class=\"{{ prefixCls }}-super-prev-btn\"\n    role=\"button\"\n    tabindex=\"-1\"\n    title=\"{{ superPreviousTitle() }}\"\n    (click)=\"superPrevious()\"\n  >\n    <span class=\"ant-picker-super-prev-icon\"></span>\n  </button>\n  <button\n    [style.visibility]=\"showPreBtn ? 'visible' : 'hidden'\"\n    class=\"{{ prefixCls }}-prev-btn\"\n    role=\"button\"\n    title=\"{{ previousTitle() }}\"\n    tabindex=\"-1\"\n    (click)=\"previous()\"\n  >\n    <span class=\"ant-picker-prev-icon\"></span>\n  </button>\n\n  <div class=\"{{ prefixCls }}-view\">\n    <ng-container *ngFor=\"let selector of selectors\">\n      <button\n        class=\"{{ selector.className }}\"\n        role=\"button\"\n        type=\"button\"\n        title=\"{{ selector.title || null }}\"\n        (click)=\"selector.onClick()\"\n      >\n        {{ selector.label }}\n      </button>\n    </ng-container>\n  </div>\n  <button\n    [style.visibility]=\"showNextBtn ? 'visible' : 'hidden'\"\n    class=\"{{ prefixCls }}-next-btn\"\n    role=\"button\"\n    tabindex=\"-1\"\n    title=\"{{ nextTitle() }}\"\n    (click)=\"next()\"\n  >\n    <span class=\"ant-picker-next-icon\"></span>\n  </button>\n  <button\n    [style.visibility]=\"showSuperNextBtn ? 'visible' : 'hidden'\"\n    class=\"{{ prefixCls }}-super-next-btn\"\n    role=\"button\"\n    tabindex=\"-1\"\n    title=\"{{ superNextTitle() }}\"\n    (click)=\"superNext()\"\n  >\n    <span class=\"ant-picker-super-next-icon\"></span>\n  </button>\n</div>\n"
            }]
    }], function () { return [{ type: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_12__["DateHelperService"] }]; }, null); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class MonthTableComponent extends AbstractTable {
    constructor(dateHelper) {
        super();
        this.dateHelper = dateHelper;
        this.MAX_ROW = 4;
        this.MAX_COL = 3;
    }
    makeHeadRow() {
        return [];
    }
    makeBodyRows() {
        const months = [];
        let monthValue = 0;
        for (let rowIndex = 0; rowIndex < this.MAX_ROW; rowIndex++) {
            const row = {
                dateCells: [],
                trackByIndex: this.activeDate.getYear()
            };
            for (let colIndex = 0; colIndex < this.MAX_COL; colIndex++) {
                const month = this.activeDate.setMonth(monthValue);
                const isDisabled = this.isDisabledMonth(month);
                const content = this.dateHelper.format(month.nativeDate, 'MMM');
                const cell = {
                    trackByIndex: content,
                    value: month.nativeDate,
                    isDisabled,
                    isSelected: month.isSameMonth(this.value),
                    content,
                    title: content,
                    classMap: {},
                    cellRender: Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_11__["valueFunctionProp"])(this.cellRender, month),
                    fullCellRender: Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_11__["valueFunctionProp"])(this.fullCellRender, month),
                    onClick: () => this.chooseMonth(cell.value.getMonth()),
                    onMouseEnter: () => this.cellHover.emit(month)
                };
                this.addCellProperty(cell, month);
                row.dateCells.push(cell);
                monthValue++;
            }
            months.push(row);
        }
        return months;
    }
    isDisabledMonth(month) {
        if (!this.disabledDate) {
            return false;
        }
        const firstOfMonth = month.setDate(1);
        for (let date = firstOfMonth; date.getMonth() === month.getMonth(); date = date.addDays(1)) {
            if (!this.disabledDate(date.nativeDate)) {
                return false;
            }
        }
        return true;
    }
    addCellProperty(cell, month) {
        if (this.hasRangeValue()) {
            const [startHover, endHover] = this.hoverValue;
            const [startSelected, endSelected] = this.selectedValue;
            // Selected
            if (startSelected === null || startSelected === void 0 ? void 0 : startSelected.isSameMonth(month)) {
                cell.isSelectedStart = true;
                cell.isSelected = true;
            }
            if (endSelected === null || endSelected === void 0 ? void 0 : endSelected.isSameMonth(month)) {
                cell.isSelectedEnd = true;
                cell.isSelected = true;
            }
            if (startHover && endHover) {
                cell.isHoverStart = startHover.isSameMonth(month);
                cell.isHoverEnd = endHover.isSameMonth(month);
                cell.isLastCellInPanel = month.getMonth() === 11;
                cell.isFirstCellInPanel = month.getMonth() === 0;
                cell.isInHoverRange = startHover.isBeforeMonth(month) && month.isBeforeMonth(endHover);
            }
            cell.isStartSingle = startSelected && !endSelected;
            cell.isEndSingle = !startSelected && endSelected;
            cell.isInSelectedRange = (startSelected === null || startSelected === void 0 ? void 0 : startSelected.isBeforeMonth(month)) && (month === null || month === void 0 ? void 0 : month.isBeforeMonth(endSelected));
            cell.isRangeStartNearHover = startSelected && cell.isInHoverRange;
            cell.isRangeEndNearHover = endSelected && cell.isInHoverRange;
        }
        else if (month.isSameMonth(this.value)) {
            cell.isSelected = true;
        }
        cell.classMap = this.getClassMap(cell);
    }
    chooseMonth(month) {
        this.value = this.activeDate.setMonth(month);
        this.valueChange.emit(this.value);
    }
}
/** @nocollapse */
MonthTableComponent.ɵfac = function MonthTableComponent_Factory(t) { return new (t || MonthTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_12__["DateHelperService"])); };
/** @nocollapse */
MonthTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: MonthTableComponent, selectors: [["month-table"]], exportAs: ["monthTable"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 4, vars: 3, consts: [["cellspacing", "0", "role", "grid", 1, "ant-picker-content"], [4, "ngIf"], ["role", "row", 3, "ngClass", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["role", "row"], ["role", "columnheader", 4, "ngIf"], ["role", "columnheader", 3, "title", 4, "ngFor", "ngForOf"], ["role", "columnheader"], ["role", "columnheader", 3, "title"], ["role", "row", 3, "ngClass"], ["role", "gridcell", 3, "class", 4, "ngIf"], ["role", "gridcell", 3, "title", "ngClass", "click", "mouseenter", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["role", "gridcell"], ["role", "gridcell", 3, "title", "ngClass", "click", "mouseenter"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "innerHTML"], [4, "ngIf", "ngIfElse"], ["defaultCell", ""]], template: function MonthTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MonthTableComponent_thead_1_Template, 4, 2, "thead", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, MonthTableComponent_tr_3_Template, 3, 4, "tr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.headRow && ctx.headRow.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.bodyRows)("ngForTrackBy", ctx.trackByBodyRow);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgTemplateOutlet"]], encapsulation: 2, changeDetection: 0 });
MonthTableComponent.ctorParameters = () => [
    { type: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_12__["DateHelperService"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MonthTableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
                // tslint:disable-next-line:component-selector
                selector: 'month-table',
                exportAs: 'monthTable',
                template: "<table class=\"ant-picker-content\" cellspacing=\"0\" role=\"grid\">\n  <thead *ngIf=\"headRow && headRow.length > 0\">\n    <tr role=\"row\">\n      <th *ngIf=\"showWeek\" role=\"columnheader\"></th>\n      <th *ngFor=\"let cell of headRow\" role=\"columnheader\" title=\"{{ cell.title }}\">\n        {{ cell.content }}\n      </th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let row of bodyRows; trackBy: trackByBodyRow\" [ngClass]=\"row.classMap!\" role=\"row\">\n      <td *ngIf=\"row.weekNum\" role=\"gridcell\" class=\"{{ prefixCls }}-cell-week\">\n        {{ row.weekNum }}\n      </td>\n      <td\n        *ngFor=\"let cell of row.dateCells; trackBy: trackByBodyColumn\"\n        title=\"{{ cell.title }}\"\n        role=\"gridcell\"\n        [ngClass]=\"cell.classMap!\"\n        (click)=\"cell.isDisabled ? null : cell.onClick()\"\n        (mouseenter)=\"cell.onMouseEnter()\"\n      >\n        <ng-container [ngSwitch]=\"prefixCls\">\n          <ng-container *ngSwitchCase=\"'ant-picker'\">\n            <ng-container [ngSwitch]=\"true\">\n              <ng-container *ngSwitchCase=\"isTemplateRef(cell.cellRender)\">\n                <!--           *ngSwitchCase not has type assertion support, the cellRender type here is TemplateRef -->\n                <ng-container\n                  *ngTemplateOutlet=\"$any(cell.cellRender); context: { $implicit: cell.value }\"\n                ></ng-container>\n              </ng-container>\n              <ng-container *ngSwitchCase=\"isNonEmptyString(cell.cellRender)\">\n                <span [innerHTML]=\"cell.cellRender\"></span>\n              </ng-container>\n              <ng-container *ngSwitchDefault>\n                <div\n                  class=\"{{ prefixCls }}-cell-inner\"\n                  [attr.aria-selected]=\"cell.isSelected\"\n                  [attr.aria-disabled]=\"cell.isDisabled\"\n                >\n                  {{ cell.content }}\n                </div>\n              </ng-container>\n            </ng-container>\n          </ng-container>\n          <ng-container *ngSwitchCase=\"'ant-picker-calendar'\">\n            <div\n              class=\"{{ prefixCls }}-date ant-picker-cell-inner\"\n              [class.ant-picker-calendar-date-today]=\"cell.isToday\"\n            >\n              <ng-container *ngIf=\"cell.fullCellRender; else defaultCell\">\n                <ng-container\n                  *ngTemplateOutlet=\"$any(cell.fullCellRender); context: { $implicit: cell.value }\"\n                >\n                </ng-container>\n              </ng-container>\n              <ng-template #defaultCell>\n                <div class=\"{{ prefixCls }}-date-value\">{{ cell.content }}</div>\n                <div class=\"{{ prefixCls }}-date-content\">\n                  <ng-container\n                    *ngTemplateOutlet=\"$any(cell.cellRender); context: { $implicit: cell.value }\"\n                  >\n                  </ng-container>\n                </div>\n              </ng-template>\n            </div>\n          </ng-container>\n        </ng-container>\n      </td>\n    </tr>\n  </tbody>\n</table>\n"
            }]
    }], function () { return [{ type: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_12__["DateHelperService"] }]; }, null); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class YearHeaderComponent extends AbstractPanelHeader {
    get startYear() {
        return parseInt(`${this.value.getYear() / 10}`, 10) * 10;
    }
    get endYear() {
        return this.startYear + 9;
    }
    superPrevious() {
        this.changeValue(this.value.addYears(-10));
    }
    superNext() {
        this.changeValue(this.value.addYears(10));
    }
    getSelectors() {
        return [
            {
                className: `${this.prefixCls}-year-btn`,
                title: '',
                onClick: () => this.changeMode('decade'),
                label: `${this.startYear}-${this.endYear}`
            }
        ];
    }
}
/** @nocollapse */
YearHeaderComponent.ɵfac = function YearHeaderComponent_Factory(t) { return ɵYearHeaderComponent_BaseFactory(t || YearHeaderComponent); };
/** @nocollapse */
YearHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: YearHeaderComponent, selectors: [["year-header"]], exportAs: ["yearHeader"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 11, vars: 31, consts: [["role", "button", "tabindex", "-1", 3, "title", "click"], [1, "ant-picker-super-prev-icon"], [1, "ant-picker-prev-icon"], [4, "ngFor", "ngForOf"], [1, "ant-picker-next-icon"], [1, "ant-picker-super-next-icon"], ["role", "button", "type", "button", 3, "title", "click"]], template: function YearHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function YearHeaderComponent_Template_button_click_1_listener() { return ctx.superPrevious(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function YearHeaderComponent_Template_button_click_3_listener() { return ctx.previous(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, YearHeaderComponent_ng_container_6_Template, 3, 5, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function YearHeaderComponent_Template_button_click_7_listener() { return ctx.next(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function YearHeaderComponent_Template_button_click_9_listener() { return ctx.superNext(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx.prefixCls);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("", ctx.prefixCls, "-super-prev-btn");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("visibility", ctx.showSuperPreBtn ? "visible" : "hidden");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("title", ctx.superPreviousTitle());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("", ctx.prefixCls, "-prev-btn");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("visibility", ctx.showPreBtn ? "visible" : "hidden");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("title", ctx.previousTitle());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("", ctx.prefixCls, "-view");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.selectors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("", ctx.prefixCls, "-next-btn");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("visibility", ctx.showNextBtn ? "visible" : "hidden");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("title", ctx.nextTitle());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("", ctx.prefixCls, "-super-next-btn");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("visibility", ctx.showSuperNextBtn ? "visible" : "hidden");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("title", ctx.superNextTitle());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], encapsulation: 2, changeDetection: 0 });
const ɵYearHeaderComponent_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](YearHeaderComponent);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](YearHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
                selector: 'year-header',
                exportAs: 'yearHeader',
                template: "<div class=\"{{ prefixCls }}\">\n  <button\n    [style.visibility]=\"showSuperPreBtn ? 'visible' : 'hidden'\"\n    class=\"{{ prefixCls }}-super-prev-btn\"\n    role=\"button\"\n    tabindex=\"-1\"\n    title=\"{{ superPreviousTitle() }}\"\n    (click)=\"superPrevious()\"\n  >\n    <span class=\"ant-picker-super-prev-icon\"></span>\n  </button>\n  <button\n    [style.visibility]=\"showPreBtn ? 'visible' : 'hidden'\"\n    class=\"{{ prefixCls }}-prev-btn\"\n    role=\"button\"\n    title=\"{{ previousTitle() }}\"\n    tabindex=\"-1\"\n    (click)=\"previous()\"\n  >\n    <span class=\"ant-picker-prev-icon\"></span>\n  </button>\n\n  <div class=\"{{ prefixCls }}-view\">\n    <ng-container *ngFor=\"let selector of selectors\">\n      <button\n        class=\"{{ selector.className }}\"\n        role=\"button\"\n        type=\"button\"\n        title=\"{{ selector.title || null }}\"\n        (click)=\"selector.onClick()\"\n      >\n        {{ selector.label }}\n      </button>\n    </ng-container>\n  </div>\n  <button\n    [style.visibility]=\"showNextBtn ? 'visible' : 'hidden'\"\n    class=\"{{ prefixCls }}-next-btn\"\n    role=\"button\"\n    tabindex=\"-1\"\n    title=\"{{ nextTitle() }}\"\n    (click)=\"next()\"\n  >\n    <span class=\"ant-picker-next-icon\"></span>\n  </button>\n  <button\n    [style.visibility]=\"showSuperNextBtn ? 'visible' : 'hidden'\"\n    class=\"{{ prefixCls }}-super-next-btn\"\n    role=\"button\"\n    tabindex=\"-1\"\n    title=\"{{ superNextTitle() }}\"\n    (click)=\"superNext()\"\n  >\n    <span class=\"ant-picker-super-next-icon\"></span>\n  </button>\n</div>\n"
            }]
    }], null, null); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class YearTableComponent extends AbstractTable {
    constructor(dateHelper) {
        super();
        this.dateHelper = dateHelper;
        this.MAX_ROW = 4;
        this.MAX_COL = 3;
    }
    makeHeadRow() {
        return [];
    }
    makeBodyRows() {
        const currentYear = this.activeDate && this.activeDate.getYear();
        const startYear = parseInt(`${currentYear / 10}`, 10) * 10;
        const endYear = startYear + 9;
        const previousYear = startYear - 1;
        const years = [];
        let yearValue = 0;
        for (let rowIndex = 0; rowIndex < this.MAX_ROW; rowIndex++) {
            const row = {
                dateCells: [],
                trackByIndex: startYear
            };
            for (let colIndex = 0; colIndex < this.MAX_COL; colIndex++) {
                const yearNum = previousYear + yearValue;
                const year = this.activeDate.setYear(yearNum);
                const content = this.dateHelper.format(year.nativeDate, 'yyyy');
                const isDisabled = this.isDisabledYear(year);
                const cell = {
                    trackByIndex: content,
                    value: year.nativeDate,
                    isDisabled,
                    isSameDecade: yearNum >= startYear && yearNum <= endYear,
                    isSelected: yearNum === (this.value && this.value.getYear()),
                    content,
                    title: content,
                    classMap: {},
                    isLastCellInPanel: year.getYear() === endYear,
                    isFirstCellInPanel: year.getYear() === startYear,
                    cellRender: Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_11__["valueFunctionProp"])(this.cellRender, year),
                    fullCellRender: Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_11__["valueFunctionProp"])(this.fullCellRender, year),
                    onClick: () => this.chooseYear(cell.value.getFullYear()),
                    onMouseEnter: () => this.cellHover.emit(year)
                };
                this.addCellProperty(cell, year);
                row.dateCells.push(cell);
                yearValue++;
            }
            years.push(row);
        }
        return years;
    }
    getClassMap(cell) {
        return Object.assign(Object.assign({}, super.getClassMap(cell)), { [`ant-picker-cell-in-view`]: !!cell.isSameDecade });
    }
    isDisabledYear(year) {
        if (!this.disabledDate) {
            return false;
        }
        const firstOfMonth = year.setMonth(0).setDate(1);
        for (let date = firstOfMonth; date.getYear() === year.getYear(); date = date.addDays(1)) {
            if (!this.disabledDate(date.nativeDate)) {
                return false;
            }
        }
        return true;
    }
    addCellProperty(cell, year) {
        if (this.hasRangeValue()) {
            const [startHover, endHover] = this.hoverValue;
            const [startSelected, endSelected] = this.selectedValue;
            // Selected
            if (startSelected === null || startSelected === void 0 ? void 0 : startSelected.isSameYear(year)) {
                cell.isSelectedStart = true;
                cell.isSelected = true;
            }
            if (endSelected === null || endSelected === void 0 ? void 0 : endSelected.isSameYear(year)) {
                cell.isSelectedEnd = true;
                cell.isSelected = true;
            }
            if (startHover && endHover) {
                cell.isHoverStart = startHover.isSameYear(year);
                cell.isHoverEnd = endHover.isSameYear(year);
                cell.isInHoverRange = startHover.isBeforeYear(year) && year.isBeforeYear(endHover);
            }
            cell.isStartSingle = startSelected && !endSelected;
            cell.isEndSingle = !startSelected && endSelected;
            cell.isInSelectedRange = (startSelected === null || startSelected === void 0 ? void 0 : startSelected.isBeforeYear(year)) && (year === null || year === void 0 ? void 0 : year.isBeforeYear(endSelected));
            cell.isRangeStartNearHover = startSelected && cell.isInHoverRange;
            cell.isRangeEndNearHover = endSelected && cell.isInHoverRange;
        }
        else if (year.isSameYear(this.value)) {
            cell.isSelected = true;
        }
        cell.classMap = this.getClassMap(cell);
    }
    chooseYear(year) {
        this.value = this.activeDate.setYear(year);
        this.valueChange.emit(this.value);
        this.render();
    }
}
/** @nocollapse */
YearTableComponent.ɵfac = function YearTableComponent_Factory(t) { return new (t || YearTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_12__["DateHelperService"])); };
/** @nocollapse */
YearTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: YearTableComponent, selectors: [["year-table"]], exportAs: ["yearTable"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 4, vars: 3, consts: [["cellspacing", "0", "role", "grid", 1, "ant-picker-content"], [4, "ngIf"], ["role", "row", 3, "ngClass", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["role", "row"], ["role", "columnheader", 4, "ngIf"], ["role", "columnheader", 3, "title", 4, "ngFor", "ngForOf"], ["role", "columnheader"], ["role", "columnheader", 3, "title"], ["role", "row", 3, "ngClass"], ["role", "gridcell", 3, "class", 4, "ngIf"], ["role", "gridcell", 3, "title", "ngClass", "click", "mouseenter", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["role", "gridcell"], ["role", "gridcell", 3, "title", "ngClass", "click", "mouseenter"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "innerHTML"], [4, "ngIf", "ngIfElse"], ["defaultCell", ""]], template: function YearTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, YearTableComponent_thead_1_Template, 4, 2, "thead", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, YearTableComponent_tr_3_Template, 3, 4, "tr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.headRow && ctx.headRow.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.bodyRows)("ngForTrackBy", ctx.trackByBodyRow);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgTemplateOutlet"]], encapsulation: 2, changeDetection: 0 });
YearTableComponent.ctorParameters = () => [
    { type: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_12__["DateHelperService"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](YearTableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
                // tslint:disable-next-line:component-selector
                selector: 'year-table',
                exportAs: 'yearTable',
                template: "<table class=\"ant-picker-content\" cellspacing=\"0\" role=\"grid\">\n  <thead *ngIf=\"headRow && headRow.length > 0\">\n    <tr role=\"row\">\n      <th *ngIf=\"showWeek\" role=\"columnheader\"></th>\n      <th *ngFor=\"let cell of headRow\" role=\"columnheader\" title=\"{{ cell.title }}\">\n        {{ cell.content }}\n      </th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let row of bodyRows; trackBy: trackByBodyRow\" [ngClass]=\"row.classMap!\" role=\"row\">\n      <td *ngIf=\"row.weekNum\" role=\"gridcell\" class=\"{{ prefixCls }}-cell-week\">\n        {{ row.weekNum }}\n      </td>\n      <td\n        *ngFor=\"let cell of row.dateCells; trackBy: trackByBodyColumn\"\n        title=\"{{ cell.title }}\"\n        role=\"gridcell\"\n        [ngClass]=\"cell.classMap!\"\n        (click)=\"cell.isDisabled ? null : cell.onClick()\"\n        (mouseenter)=\"cell.onMouseEnter()\"\n      >\n        <ng-container [ngSwitch]=\"prefixCls\">\n          <ng-container *ngSwitchCase=\"'ant-picker'\">\n            <ng-container [ngSwitch]=\"true\">\n              <ng-container *ngSwitchCase=\"isTemplateRef(cell.cellRender)\">\n                <!--           *ngSwitchCase not has type assertion support, the cellRender type here is TemplateRef -->\n                <ng-container\n                  *ngTemplateOutlet=\"$any(cell.cellRender); context: { $implicit: cell.value }\"\n                ></ng-container>\n              </ng-container>\n              <ng-container *ngSwitchCase=\"isNonEmptyString(cell.cellRender)\">\n                <span [innerHTML]=\"cell.cellRender\"></span>\n              </ng-container>\n              <ng-container *ngSwitchDefault>\n                <div\n                  class=\"{{ prefixCls }}-cell-inner\"\n                  [attr.aria-selected]=\"cell.isSelected\"\n                  [attr.aria-disabled]=\"cell.isDisabled\"\n                >\n                  {{ cell.content }}\n                </div>\n              </ng-container>\n            </ng-container>\n          </ng-container>\n          <ng-container *ngSwitchCase=\"'ant-picker-calendar'\">\n            <div\n              class=\"{{ prefixCls }}-date ant-picker-cell-inner\"\n              [class.ant-picker-calendar-date-today]=\"cell.isToday\"\n            >\n              <ng-container *ngIf=\"cell.fullCellRender; else defaultCell\">\n                <ng-container\n                  *ngTemplateOutlet=\"$any(cell.fullCellRender); context: { $implicit: cell.value }\"\n                >\n                </ng-container>\n              </ng-container>\n              <ng-template #defaultCell>\n                <div class=\"{{ prefixCls }}-date-value\">{{ cell.content }}</div>\n                <div class=\"{{ prefixCls }}-date-content\">\n                  <ng-container\n                    *ngTemplateOutlet=\"$any(cell.cellRender); context: { $implicit: cell.value }\"\n                  >\n                  </ng-container>\n                </div>\n              </ng-template>\n            </div>\n          </ng-container>\n        </ng-container>\n      </td>\n    </tr>\n  </tbody>\n</table>\n"
            }]
    }], function () { return [{ type: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_12__["DateHelperService"] }]; }, null); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class LibPackerModule {
}
/** @nocollapse */
LibPackerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: LibPackerModule });
/** @nocollapse */
LibPackerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function LibPackerModule_Factory(t) { return new (t || LibPackerModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_12__["NzI18nModule"], ng_zorro_antd_time_picker__WEBPACK_IMPORTED_MODULE_9__["NzTimePickerModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_6__["NzOutletModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](LibPackerModule, { declarations: function () { return [DateHeaderComponent, DateTableComponent, DecadeHeaderComponent, DecadeTableComponent, MonthHeaderComponent, MonthTableComponent, YearHeaderComponent, YearTableComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_12__["NzI18nModule"], ng_zorro_antd_time_picker__WEBPACK_IMPORTED_MODULE_9__["NzTimePickerModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_6__["NzOutletModule"]]; }, exports: function () { return [DateHeaderComponent, DateTableComponent, DecadeHeaderComponent, DecadeTableComponent, MonthHeaderComponent, MonthTableComponent, YearHeaderComponent, YearTableComponent]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](LibPackerModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_12__["NzI18nModule"], ng_zorro_antd_time_picker__WEBPACK_IMPORTED_MODULE_9__["NzTimePickerModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_6__["NzOutletModule"]],
                exports: [
                    DateHeaderComponent,
                    DateTableComponent,
                    DecadeHeaderComponent,
                    DecadeTableComponent,
                    MonthHeaderComponent,
                    MonthTableComponent,
                    YearHeaderComponent,
                    YearTableComponent
                ],
                declarations: [
                    DateHeaderComponent,
                    DateTableComponent,
                    DecadeHeaderComponent,
                    DecadeTableComponent,
                    MonthHeaderComponent,
                    MonthTableComponent,
                    YearHeaderComponent,
                    YearTableComponent
                ]
            }]
    }], null, null); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
// tslint:disable-next-line:directive-class-suffix
class NzMonthPickerComponent {
    constructor(datePicker) {
        this.datePicker = datePicker;
        this.datePicker.nzMode = 'month';
    }
}
/** @nocollapse */
NzMonthPickerComponent.ɵfac = function NzMonthPickerComponent_Factory(t) { return new (t || NzMonthPickerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](NzDatePickerComponent, 9)); };
/** @nocollapse */
NzMonthPickerComponent.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: NzMonthPickerComponent, selectors: [["nz-month-picker"]], exportAs: ["nzMonthPicker"] });
NzMonthPickerComponent.ctorParameters = () => [
    { type: NzDatePickerComponent, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Host"] }] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NzMonthPickerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
        args: [{
                selector: 'nz-month-picker',
                exportAs: 'nzMonthPicker'
            }]
    }], function () { return [{ type: NzDatePickerComponent, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Host"]
            }] }]; }, null); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
// tslint:disable-next-line:directive-class-suffix
class NzRangePickerComponent {
    constructor(datePicker) {
        this.datePicker = datePicker;
        this.datePicker.isRange = true;
    }
}
/** @nocollapse */
NzRangePickerComponent.ɵfac = function NzRangePickerComponent_Factory(t) { return new (t || NzRangePickerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](NzDatePickerComponent, 9)); };
/** @nocollapse */
NzRangePickerComponent.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: NzRangePickerComponent, selectors: [["nz-range-picker"]], exportAs: ["nzRangePicker"] });
NzRangePickerComponent.ctorParameters = () => [
    { type: NzDatePickerComponent, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Host"] }] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NzRangePickerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
        args: [{
                selector: 'nz-range-picker',
                exportAs: 'nzRangePicker'
            }]
    }], function () { return [{ type: NzDatePickerComponent, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Host"]
            }] }]; }, null); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
// tslint:disable-next-line:directive-class-suffix
class NzWeekPickerComponent {
    constructor(datePicker) {
        this.datePicker = datePicker;
        this.datePicker.nzMode = 'week';
    }
}
/** @nocollapse */
NzWeekPickerComponent.ɵfac = function NzWeekPickerComponent_Factory(t) { return new (t || NzWeekPickerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](NzDatePickerComponent, 9)); };
/** @nocollapse */
NzWeekPickerComponent.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: NzWeekPickerComponent, selectors: [["nz-week-picker"]], exportAs: ["nzWeekPicker"] });
NzWeekPickerComponent.ctorParameters = () => [
    { type: NzDatePickerComponent, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Host"] }] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NzWeekPickerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
        args: [{
                selector: 'nz-week-picker',
                exportAs: 'nzWeekPicker'
            }]
    }], function () { return [{ type: NzDatePickerComponent, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Host"]
            }] }]; }, null); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
// tslint:disable-next-line:directive-class-suffix
class NzYearPickerComponent {
    constructor(datePicker) {
        this.datePicker = datePicker;
        this.datePicker.nzMode = 'year';
    }
}
/** @nocollapse */
NzYearPickerComponent.ɵfac = function NzYearPickerComponent_Factory(t) { return new (t || NzYearPickerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](NzDatePickerComponent, 9)); };
/** @nocollapse */
NzYearPickerComponent.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: NzYearPickerComponent, selectors: [["nz-year-picker"]], exportAs: ["nzYearPicker"] });
NzYearPickerComponent.ctorParameters = () => [
    { type: NzDatePickerComponent, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Host"] }] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NzYearPickerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
        args: [{
                selector: 'nz-year-picker',
                exportAs: 'nzYearPicker'
            }]
    }], function () { return [{ type: NzDatePickerComponent, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Host"]
            }] }]; }, null); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzDatePickerModule {
}
/** @nocollapse */
NzDatePickerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: NzDatePickerModule });
/** @nocollapse */
NzDatePickerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function NzDatePickerModule_Factory(t) { return new (t || NzDatePickerModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayModule"],
            LibPackerModule,
            ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_8__["NzIconModule"],
            ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_7__["NzOverlayModule"],
            ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_5__["NzNoAnimationModule"],
            ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_6__["NzOutletModule"],
            ng_zorro_antd_time_picker__WEBPACK_IMPORTED_MODULE_9__["NzTimePickerModule"],
            ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__["NzButtonModule"],
            LibPackerModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](NzDatePickerModule, { declarations: function () { return [NzPickerComponent, NzDatePickerComponent, NzMonthPickerComponent, NzYearPickerComponent, NzWeekPickerComponent, NzRangePickerComponent, CalendarFooterComponent, InnerPopupComponent, DateRangePopupComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayModule"], LibPackerModule, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_8__["NzIconModule"],
        ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_7__["NzOverlayModule"],
        ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_5__["NzNoAnimationModule"],
        ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_6__["NzOutletModule"],
        ng_zorro_antd_time_picker__WEBPACK_IMPORTED_MODULE_9__["NzTimePickerModule"],
        ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__["NzButtonModule"], LibPackerModule]; }, exports: function () { return [NzDatePickerComponent, NzRangePickerComponent, NzMonthPickerComponent, NzYearPickerComponent, NzWeekPickerComponent]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NzDatePickerModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayModule"],
                    LibPackerModule,
                    ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_8__["NzIconModule"],
                    ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_7__["NzOverlayModule"],
                    ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_5__["NzNoAnimationModule"],
                    ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_6__["NzOutletModule"],
                    ng_zorro_antd_time_picker__WEBPACK_IMPORTED_MODULE_9__["NzTimePickerModule"],
                    ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__["NzButtonModule"],
                    LibPackerModule
                ],
                exports: [NzDatePickerComponent, NzRangePickerComponent, NzMonthPickerComponent, NzYearPickerComponent, NzWeekPickerComponent],
                declarations: [
                    NzPickerComponent,
                    NzDatePickerComponent,
                    NzMonthPickerComponent,
                    NzYearPickerComponent,
                    NzWeekPickerComponent,
                    NzRangePickerComponent,
                    CalendarFooterComponent,
                    InnerPopupComponent,
                    DateRangePopupComponent
                ]
            }]
    }], null, null); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=ng-zorro-antd-date-picker.js.map

/***/ })

};;
//# sourceMappingURL=calendar-index-module~date-picker-index-module~drawer-index-module~form-index-module~input-index-module.js.map