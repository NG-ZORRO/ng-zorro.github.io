exports.ids = ["card-index-module~mention-index-module~page-header-index-module~tabs-index-module"];
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
NzResizeObserversModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NzResizeObserversModule });
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

/***/ "iimT":
/*!*************************************************************!*\
  !*** ./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-tabs.js ***!
  \*************************************************************/
/*! exports provided: NZ_TAB_SET, NzTabChangeEvent, NzTabComponent, NzTabDirective, NzTabLinkDirective, NzTabLinkTemplateDirective, NzTabSetComponent, NzTabsModule, ɵNzTabAddButtonComponent, ɵNzTabBodyComponent, ɵNzTabCloseButtonComponent, ɵNzTabNavBarComponent, ɵNzTabNavItemDirective, ɵNzTabNavOperationComponent, ɵNzTabScrollListDirective, ɵNzTabsInkBarDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NZ_TAB_SET", function() { return NZ_TAB_SET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzTabChangeEvent", function() { return NzTabChangeEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzTabComponent", function() { return NzTabComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzTabDirective", function() { return NzTabDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzTabLinkDirective", function() { return NzTabLinkDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzTabLinkTemplateDirective", function() { return NzTabLinkTemplateDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzTabSetComponent", function() { return NzTabSetComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzTabsModule", function() { return NzTabsModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵNzTabAddButtonComponent", function() { return NzTabAddButtonComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵNzTabBodyComponent", function() { return NzTabBodyComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵNzTabCloseButtonComponent", function() { return NzTabCloseButtonComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵNzTabNavBarComponent", function() { return NzTabNavBarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵNzTabNavItemDirective", function() { return NzTabNavItemDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵNzTabNavOperationComponent", function() { return NzTabNavOperationComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵNzTabScrollListDirective", function() { return NzTabScrollListDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵNzTabsInkBarDirective", function() { return NzTabsInkBarDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var ng_zorro_antd_core_polyfill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/core/polyfill */ "yTbr");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/a11y */ "u47x");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/bidi */ "cH1L");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/coercion */ "8LU1");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/keycodes */ "FtGj");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/overlay */ "rDax");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var ng_zorro_antd_core_resize_observers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/core/resize-observers */ "/YeP");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ "zOht");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/core/util */ "d1+9");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/observers */ "GU7r");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/platform */ "nLfN");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/cdk/scrolling */ "vxfF");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/core/outlet */ "fwD0");
/* harmony import */ var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/dropdown */ "43SU");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/icon */ "MOHP");
/* harmony import */ var ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/core/config */ "8IHs");
/* harmony import */ var ng_zorro_antd_core_logger__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-zorro-antd/core/logger */ "RuSR");
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng-zorro-antd/menu */ "Z9Oo");
























/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */













function NzTabAddButtonComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const icon_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", icon_r1);
} }
const _c0 = ["contentTemplate"];
function NzTabComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
} }
function NzTabComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0, 1);
} }
const _c1 = [[["", "nz-tab-link", ""]], "*"];
const _c2 = ["[nz-tab-link]", "*"];
function NzTabNavOperationComponent_ul_5_li_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r5.tab.label);
} }
const _c3 = function () { return { visible: false }; };
function NzTabNavOperationComponent_ul_5_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzTabNavOperationComponent_ul_5_li_1_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const item_r5 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.onSelect(item_r5); })("contextmenu", function NzTabNavOperationComponent_ul_5_li_1_Template_li_contextmenu_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const item_r5 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r10.onContextmenu(item_r5, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzTabNavOperationComponent_ul_5_li_1_ng_container_1_Template, 2, 1, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-tabs-dropdown-menu-item-disabled", item_r5.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSelected", item_r5.active)("nzDisabled", item_r5.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzStringTemplateOutlet", item_r5.tab.label)("nzStringTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c3));
} }
function NzTabNavOperationComponent_ul_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzTabNavOperationComponent_ul_5_li_1_Template, 2, 7, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.items);
} }
function NzTabNavOperationComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzTabNavOperationComponent_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.addClicked.emit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("addIcon", ctx_r3.addIcon);
} }
const _c4 = function () { return { minWidth: "46px" }; };
const _c5 = ["navWarp"];
const _c6 = ["navList"];
function NzTabNavBarComponent_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzTabNavBarComponent_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.addClicked.emit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("addIcon", ctx_r2.addIcon);
} }
function NzTabNavBarComponent_div_8_ng_template_1_Template(rf, ctx) { }
function NzTabNavBarComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzTabNavBarComponent_div_8_ng_template_1_Template, 0, 0, "ng-template", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r3.extraTemplate);
} }
const _c7 = ["*"];
const _c8 = ["nz-tab-body", ""];
function NzTabBodyComponent_ng_container_0_ng_template_1_Template(rf, ctx) { }
function NzTabBodyComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzTabBodyComponent_ng_container_0_ng_template_1_Template, 0, 0, "ng-template", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.content);
} }
function NzTabCloseButtonComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const icon_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", icon_r1);
} }
function NzTabSetComponent_nz_tabs_nav_0_div_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const tab_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tab_r3.label);
} }
function NzTabSetComponent_nz_tabs_nav_0_div_1_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzTabSetComponent_nz_tabs_nav_0_div_1_button_3_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const i_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.onClose(i_r4, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tab_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("closeIcon", tab_r3.nzCloseIcon);
} }
const _c9 = function () { return { visible: true }; };
function NzTabSetComponent_nz_tabs_nav_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzTabSetComponent_nz_tabs_nav_0_div_1_Template_div_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const tab_r3 = ctx.$implicit; const i_r4 = ctx.index; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r12.clickNavItem(tab_r3, i_r4, $event); })("contextmenu", function NzTabSetComponent_nz_tabs_nav_0_div_1_Template_div_contextmenu_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const tab_r3 = ctx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r14.contextmenuNavItem(tab_r3, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzTabSetComponent_nz_tabs_nav_0_div_1_ng_container_2_Template, 2, 1, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NzTabSetComponent_nz_tabs_nav_0_div_1_button_3_Template, 1, 1, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tab_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("margin-right", ctx_r2.position === "horizontal" ? ctx_r2.nzTabBarGutter : null, "px")("margin-bottom", ctx_r2.position === "vertical" ? ctx_r2.nzTabBarGutter : null, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-tabs-tab-active", ctx_r2.nzSelectedIndex === i_r4)("ant-tabs-tab-disabled", tab_r3.nzDisabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", tab_r3.nzDisabled)("tab", tab_r3)("active", ctx_r2.nzSelectedIndex === i_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabIndex", ctx_r2.getTabIndex(tab_r3, i_r4))("aria-disabled", tab_r3.nzDisabled)("aria-selected", ctx_r2.nzSelectedIndex === i_r4 && !ctx_r2.nzHideAll)("aria-controls", ctx_r2.getTabContentId(i_r4));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzStringTemplateOutlet", tab_r3.label)("nzStringTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c9));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", tab_r3.nzClosable && ctx_r2.closable && !tab_r3.nzDisabled);
} }
function NzTabSetComponent_nz_tabs_nav_0_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-tabs-nav", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("tabScroll", function NzTabSetComponent_nz_tabs_nav_0_Template_nz_tabs_nav_tabScroll_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.nzTabListScroll.emit($event); })("selectFocusedIndex", function NzTabSetComponent_nz_tabs_nav_0_Template_nz_tabs_nav_selectFocusedIndex_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.setSelectedIndex($event); })("addClicked", function NzTabSetComponent_nz_tabs_nav_0_Template_nz_tabs_nav_addClicked_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.onAdd(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzTabSetComponent_nz_tabs_nav_0_div_1_Template, 4, 19, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r0.nzTabBarStyle)("selectedIndex", ctx_r0.nzSelectedIndex || 0)("inkBarAnimated", ctx_r0.inkBarAnimated)("addable", ctx_r0.addable)("addIcon", ctx_r0.nzAddIcon)("hideBar", ctx_r0.nzHideAll)("position", ctx_r0.position)("extraTemplate", ctx_r0.nzTabBarExtraContent);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.tabs);
} }
function NzTabSetComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 11);
} if (rf & 2) {
    const tab_r19 = ctx.$implicit;
    const i_r20 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("active", ctx_r1.nzSelectedIndex == i_r20 && !ctx_r1.nzHideAll)("content", tab_r19.content)("forceRender", tab_r19.nzForceRender)("tabPaneAnimated", ctx_r1.tabPaneAnimated);
} }
class NzTabAddButtonComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.addIcon = 'plus';
        this.element = this.elementRef.nativeElement;
    }
    getElementWidth() {
        var _a;
        return ((_a = this.element) === null || _a === void 0 ? void 0 : _a.offsetWidth) || 0;
    }
    getElementHeight() {
        var _a;
        return ((_a = this.element) === null || _a === void 0 ? void 0 : _a.offsetHeight) || 0;
    }
}
NzTabAddButtonComponent.ɵfac = function NzTabAddButtonComponent_Factory(t) { return new (t || NzTabAddButtonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
NzTabAddButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzTabAddButtonComponent, selectors: [["nz-tab-add-button"], ["button", "nz-tab-add-button", ""]], hostAttrs: ["aria-label", "Add tab", "type", "button", 1, "ant-tabs-nav-add"], inputs: { addIcon: "addIcon" }, decls: 1, vars: 1, consts: [[4, "nzStringTemplateOutlet"], ["nz-icon", "", "nzTheme", "outline", 3, "nzType"]], template: function NzTabAddButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzTabAddButtonComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzStringTemplateOutlet", ctx.addIcon);
    } }, directives: [ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_18__["NzStringTemplateOutletDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_20__["NzIconDirective"]], encapsulation: 2 });
NzTabAddButtonComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
];
NzTabAddButtonComponent.propDecorators = {
    addIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzTabsInkBarDirective {
    constructor(elementRef, ngZone, animationMode) {
        this.elementRef = elementRef;
        this.ngZone = ngZone;
        this.animationMode = animationMode;
        this.position = 'horizontal';
        this.animated = true;
    }
    get _animated() {
        return this.animationMode !== 'NoopAnimations' && this.animated;
    }
    alignToElement(element) {
        this.ngZone.runOutsideAngular(() => {
            Object(ng_zorro_antd_core_polyfill__WEBPACK_IMPORTED_MODULE_2__["reqAnimFrame"])(() => this.setStyles(element));
        });
    }
    setStyles(element) {
        const inkBar = this.elementRef.nativeElement;
        if (this.position === 'horizontal') {
            inkBar.style.top = '';
            inkBar.style.height = '';
            inkBar.style.left = this.getLeftPosition(element);
            inkBar.style.width = this.getElementWidth(element);
        }
        else {
            inkBar.style.left = '';
            inkBar.style.width = '';
            inkBar.style.top = this.getTopPosition(element);
            inkBar.style.height = this.getElementHeight(element);
        }
    }
    getLeftPosition(element) {
        return element ? (element.offsetLeft || 0) + 'px' : '0';
    }
    getElementWidth(element) {
        return element ? (element.offsetWidth || 0) + 'px' : '0';
    }
    getTopPosition(element) {
        return element ? (element.offsetTop || 0) + 'px' : '0';
    }
    getElementHeight(element) {
        return element ? (element.offsetHeight || 0) + 'px' : '0';
    }
}
NzTabsInkBarDirective.ɵfac = function NzTabsInkBarDirective_Factory(t) { return new (t || NzTabsInkBarDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["ANIMATION_MODULE_TYPE"], 8)); };
NzTabsInkBarDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NzTabsInkBarDirective, selectors: [["nz-tabs-ink-bar"], ["", "nz-tabs-ink-bar", ""]], hostAttrs: [1, "ant-tabs-ink-bar"], hostVars: 2, hostBindings: function NzTabsInkBarDirective_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-tabs-ink-bar-animated", ctx._animated);
    } }, inputs: { position: "position", animated: "animated" } });
NzTabsInkBarDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["ANIMATION_MODULE_TYPE"],] }] }
];
NzTabsInkBarDirective.propDecorators = {
    position: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    animated: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
/**
 * Fix https://github.com/angular/angular/issues/8563
 */
class NzTabLinkTemplateDirective {
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
}
NzTabLinkTemplateDirective.ɵfac = function NzTabLinkTemplateDirective_Factory(t) { return new (t || NzTabLinkTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], 1)); };
NzTabLinkTemplateDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NzTabLinkTemplateDirective, selectors: [["ng-template", "nzTabLink", ""]], exportAs: ["nzTabLinkTemplate"] });
NzTabLinkTemplateDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"] }] }
];
/**
 * This component is for catching `routerLink` directive.
 */
class NzTabLinkDirective {
    constructor(elementRef, routerLink, routerLinkWithHref) {
        this.elementRef = elementRef;
        this.routerLink = routerLink;
        this.routerLinkWithHref = routerLinkWithHref;
    }
}
NzTabLinkDirective.ɵfac = function NzTabLinkDirective_Factory(t) { return new (t || NzTabLinkDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterLink"], 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterLinkWithHref"], 10)); };
NzTabLinkDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NzTabLinkDirective, selectors: [["a", "nz-tab-link", ""]], exportAs: ["nzTabLink"] });
NzTabLinkDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterLink"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterLinkWithHref"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }] }
];

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
/** Decorates the `ng-template` tags and reads out the template from it. */
class NzTabDirective {
}
NzTabDirective.ɵfac = function NzTabDirective_Factory(t) { return new (t || NzTabDirective)(); };
NzTabDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NzTabDirective, selectors: [["", "nz-tab", ""]], exportAs: ["nzTab"] });

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
/**
 * Used to provide a tab set to a tab without causing a circular dependency.
 */
const NZ_TAB_SET = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('NZ_TAB_SET');
class NzTabComponent {
    constructor(closestTabSet) {
        this.closestTabSet = closestTabSet;
        this.nzTitle = '';
        this.nzClosable = false;
        this.nzCloseIcon = 'close';
        this.nzDisabled = false;
        this.nzForceRender = false;
        this.nzSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.nzDeselect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.nzClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.nzContextmenu = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.template = null;
        this.isActive = false;
        this.position = null;
        this.origin = null;
        this.stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
    }
    get content() {
        return this.template || this.contentTemplate;
    }
    get label() {
        var _a;
        return this.nzTitle || ((_a = this.nzTabLinkTemplateDirective) === null || _a === void 0 ? void 0 : _a.templateRef);
    }
    ngOnChanges(changes) {
        const { nzTitle, nzDisabled, nzForceRender } = changes;
        if (nzTitle || nzDisabled || nzForceRender) {
            this.stateChanges.next();
        }
    }
    ngOnDestroy() {
        this.stateChanges.complete();
    }
}
NzTabComponent.ɵfac = function NzTabComponent_Factory(t) { return new (t || NzTabComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NZ_TAB_SET)); };
NzTabComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzTabComponent, selectors: [["nz-tab"]], contentQueries: function NzTabComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NzTabDirective, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NzTabLinkTemplateDirective, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NzTabLinkDirective, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.template = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.nzTabLinkTemplateDirective = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.linkDirective = _t.first);
    } }, viewQuery: function NzTabComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.contentTemplate = _t.first);
    } }, inputs: { nzTitle: "nzTitle", nzClosable: "nzClosable", nzCloseIcon: "nzCloseIcon", nzDisabled: "nzDisabled", nzForceRender: "nzForceRender" }, outputs: { nzSelect: "nzSelect", nzDeselect: "nzDeselect", nzClick: "nzClick", nzContextmenu: "nzContextmenu" }, exportAs: ["nzTab"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c2, decls: 4, vars: 0, consts: [["tabLinkTemplate", ""], ["contentTemplate", ""]], template: function NzTabComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzTabComponent_ng_template_0_Template, 1, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzTabComponent_ng_template_2_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } }, encapsulation: 2, changeDetection: 0 });
NzTabComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NZ_TAB_SET,] }] }
];
NzTabComponent.propDecorators = {
    nzTitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzClosable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzCloseIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzForceRender: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzSelect: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    nzDeselect: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    nzClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    nzContextmenu: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    nzTabLinkTemplateDirective: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [NzTabLinkTemplateDirective, { static: false },] }],
    template: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [NzTabDirective, { static: false, read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] },] }],
    linkDirective: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [NzTabLinkDirective, { static: false },] }],
    contentTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['contentTemplate', { static: true },] }]
};
Object(tslib__WEBPACK_IMPORTED_MODULE_11__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_12__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_11__["__metadata"])("design:type", Object)
], NzTabComponent.prototype, "nzClosable", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_11__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_12__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_11__["__metadata"])("design:type", Object)
], NzTabComponent.prototype, "nzDisabled", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_11__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_12__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_11__["__metadata"])("design:type", Object)
], NzTabComponent.prototype, "nzForceRender", void 0);

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzTabNavItemDirective {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.disabled = false;
        this.active = false;
        this.el = elementRef.nativeElement;
        this.parentElement = this.el.parentElement;
    }
    focus() {
        this.el.focus();
    }
    get width() {
        return this.parentElement.offsetWidth;
    }
    get height() {
        return this.parentElement.offsetHeight;
    }
    get left() {
        return this.parentElement.offsetLeft;
    }
    get top() {
        return this.parentElement.offsetTop;
    }
}
NzTabNavItemDirective.ɵfac = function NzTabNavItemDirective_Factory(t) { return new (t || NzTabNavItemDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
NzTabNavItemDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NzTabNavItemDirective, selectors: [["", "nzTabNavItem", ""]], inputs: { disabled: "disabled", active: "active", tab: "tab" } });
NzTabNavItemDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
];
NzTabNavItemDirective.propDecorators = {
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    tab: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    active: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzTabNavOperationComponent {
    constructor(cdr, elementRef) {
        this.cdr = cdr;
        this.elementRef = elementRef;
        this.items = [];
        this.addable = false;
        this.addIcon = 'plus';
        this.addClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.closeAnimationWaitTimeoutId = -1;
        this.menuOpened = false;
        this.element = this.elementRef.nativeElement;
    }
    onSelect(item) {
        if (!item.disabled) {
            // ignore nzCanDeactivate
            item.tab.nzClick.emit();
            this.selected.emit(item);
        }
    }
    onContextmenu(item, e) {
        if (!item.disabled) {
            item.tab.nzContextmenu.emit(e);
        }
    }
    showItems() {
        clearTimeout(this.closeAnimationWaitTimeoutId);
        this.menuOpened = true;
        this.cdr.markForCheck();
    }
    menuVisChange(visible) {
        if (!visible) {
            this.closeAnimationWaitTimeoutId = setTimeout(() => {
                this.menuOpened = false;
                this.cdr.markForCheck();
            }, 150);
        }
    }
    getElementWidth() {
        var _a;
        return ((_a = this.element) === null || _a === void 0 ? void 0 : _a.offsetWidth) || 0;
    }
    getElementHeight() {
        var _a;
        return ((_a = this.element) === null || _a === void 0 ? void 0 : _a.offsetHeight) || 0;
    }
    ngOnDestroy() {
        clearTimeout(this.closeAnimationWaitTimeoutId);
    }
}
NzTabNavOperationComponent.ɵfac = function NzTabNavOperationComponent_Factory(t) { return new (t || NzTabNavOperationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
NzTabNavOperationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzTabNavOperationComponent, selectors: [["nz-tab-nav-operation"]], hostAttrs: [1, "ant-tabs-nav-operations"], hostVars: 2, hostBindings: function NzTabNavOperationComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-tabs-nav-operations-hidden", ctx.items.length === 0);
    } }, inputs: { items: "items", addable: "addable", addIcon: "addIcon" }, outputs: { addClicked: "addClicked", selected: "selected" }, exportAs: ["nzTabNavOperation"], decls: 7, vars: 6, consts: [["nz-dropdown", "", "type", "button", "tabindex", "-1", "aria-hidden", "true", "nzOverlayClassName", "nz-tabs-dropdown", 1, "ant-tabs-nav-more", 3, "nzDropdownMenu", "nzOverlayStyle", "nzMatchWidthElement", "nzVisibleChange", "mouseenter"], ["dropdownTrigger", "nzDropdown"], ["nz-icon", "", "nzType", "ellipsis"], ["menu", "nzDropdownMenu"], ["nz-menu", "", 4, "ngIf"], ["nz-tab-add-button", "", 3, "addIcon", "click", 4, "ngIf"], ["nz-menu", ""], ["nz-menu-item", "", "class", "ant-tabs-dropdown-menu-item", 3, "ant-tabs-dropdown-menu-item-disabled", "nzSelected", "nzDisabled", "click", "contextmenu", 4, "ngFor", "ngForOf"], ["nz-menu-item", "", 1, "ant-tabs-dropdown-menu-item", 3, "nzSelected", "nzDisabled", "click", "contextmenu"], [4, "nzStringTemplateOutlet", "nzStringTemplateOutletContext"], ["nz-tab-add-button", "", 3, "addIcon", "click"]], template: function NzTabNavOperationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzVisibleChange", function NzTabNavOperationComponent_Template_button_nzVisibleChange_0_listener($event) { return ctx.menuVisChange($event); })("mouseenter", function NzTabNavOperationComponent_Template_button_mouseenter_0_listener() { return ctx.showItems(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nz-dropdown-menu", null, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NzTabNavOperationComponent_ul_5_Template, 2, 1, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NzTabNavOperationComponent_button_6_Template, 1, 1, "button", 5);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzDropdownMenu", _r1)("nzOverlayStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c4))("nzMatchWidthElement", null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.menuOpened);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.addable);
    } }, directives: [ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_19__["NzDropDownDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_20__["NzIconDirective"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_19__["NzDropdownMenuComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgIf"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_23__["NzMenuDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgForOf"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_23__["NzMenuItemDirective"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_18__["NzStringTemplateOutletDirective"], NzTabAddButtonComponent], encapsulation: 2, changeDetection: 0 });
NzTabNavOperationComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
];
NzTabNavOperationComponent.propDecorators = {
    items: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    addable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    addIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    addClicked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    selected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
const RESIZE_SCHEDULER = typeof requestAnimationFrame !== 'undefined' ? rxjs__WEBPACK_IMPORTED_MODULE_8__["animationFrameScheduler"] : rxjs__WEBPACK_IMPORTED_MODULE_8__["asapScheduler"];
const CSS_TRANSFORM_TIME = 150;
class NzTabNavBarComponent {
    constructor(cdr, ngZone, viewportRuler, nzResizeObserver, dir) {
        this.cdr = cdr;
        this.ngZone = ngZone;
        this.viewportRuler = viewportRuler;
        this.nzResizeObserver = nzResizeObserver;
        this.dir = dir;
        this.indexFocused = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.selectFocusedIndex = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.addClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.tabScroll = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.position = 'horizontal';
        this.addable = false;
        this.hideBar = false;
        this.addIcon = 'plus';
        this.inkBarAnimated = true;
        this.translate = null;
        this.transformX = 0;
        this.transformY = 0;
        this.pingLeft = false;
        this.pingRight = false;
        this.pingTop = false;
        this.pingBottom = false;
        this.hiddenItems = [];
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        this._selectedIndex = 0;
        this.wrapperWidth = 0;
        this.wrapperHeight = 0;
        this.scrollListWidth = 0;
        this.scrollListHeight = 0;
        this.operationWidth = 0;
        this.operationHeight = 0;
        this.addButtonWidth = 0;
        this.addButtonHeight = 0;
        this.selectedIndexChanged = false;
        this.lockAnimationTimeoutId = -1;
        this.cssTransformTimeWaitingId = -1;
    }
    get selectedIndex() {
        return this._selectedIndex;
    }
    set selectedIndex(value) {
        const newValue = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceNumberProperty"])(value);
        if (this._selectedIndex !== newValue) {
            this._selectedIndex = value;
            this.selectedIndexChanged = true;
            if (this.keyManager) {
                this.keyManager.updateActiveItem(value);
            }
        }
    }
    /** Tracks which element has focus; used for keyboard navigation */
    get focusIndex() {
        return this.keyManager ? this.keyManager.activeItemIndex : 0;
    }
    /** When the focus index is set, we must manually send focus to the correct label */
    set focusIndex(value) {
        if (!this.isValidIndex(value) || this.focusIndex === value || !this.keyManager) {
            return;
        }
        this.keyManager.setActiveItem(value);
    }
    get showAddButton() {
        return this.hiddenItems.length === 0 && this.addable;
    }
    ngOnInit() { }
    ngAfterViewInit() {
        const dirChange = this.dir ? this.dir.change : Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["of"])(null);
        const resize = this.viewportRuler.change(150);
        const realign = () => {
            this.updateScrollListPosition();
            this.alignInkBarToSelectedTab();
        };
        this.keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["FocusKeyManager"](this.items)
            .withHorizontalOrientation(this.getLayoutDirection())
            .withWrap();
        this.keyManager.updateActiveItem(0);
        Object(ng_zorro_antd_core_polyfill__WEBPACK_IMPORTED_MODULE_2__["reqAnimFrame"])(realign);
        Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["merge"])(this.nzResizeObserver.observe(this.navWarpRef), this.nzResizeObserver.observe(this.navListRef))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["takeUntil"])(this.destroy$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["auditTime"])(16, RESIZE_SCHEDULER))
            .subscribe(() => {
            realign();
        });
        Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["merge"])(dirChange, resize, this.items.changes)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["takeUntil"])(this.destroy$))
            .subscribe(() => {
            Promise.resolve().then(realign);
            this.keyManager.withHorizontalOrientation(this.getLayoutDirection());
        });
        this.keyManager.change.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["takeUntil"])(this.destroy$)).subscribe(newFocusIndex => {
            this.indexFocused.emit(newFocusIndex);
            this.setTabFocus(newFocusIndex);
            this.scrollToTab(this.keyManager.activeItem);
        });
    }
    ngAfterContentChecked() {
        if (this.selectedIndexChanged) {
            this.updateScrollListPosition();
            this.alignInkBarToSelectedTab();
            this.selectedIndexChanged = false;
            this.cdr.markForCheck();
        }
    }
    ngOnDestroy() {
        clearTimeout(this.lockAnimationTimeoutId);
        clearTimeout(this.cssTransformTimeWaitingId);
        this.destroy$.next();
        this.destroy$.complete();
    }
    onSelectedFromMenu(tab) {
        const tabIndex = this.items.toArray().findIndex(e => e === tab);
        if (tabIndex !== -1) {
            this.keyManager.updateActiveItem(tabIndex);
            if (this.focusIndex !== this.selectedIndex) {
                this.selectFocusedIndex.emit(this.focusIndex);
                this.scrollToTab(tab);
            }
        }
    }
    onOffsetChange(e) {
        if (this.position === 'horizontal') {
            if (this.lockAnimationTimeoutId === -1) {
                if (this.transformX >= 0 && e.x > 0) {
                    return;
                }
                if (this.transformX <= this.wrapperWidth - this.scrollListWidth && e.x < 0) {
                    return;
                }
            }
            e.event.preventDefault();
            this.transformX = this.clampTransformX(this.transformX + e.x);
            this.setTransform(this.transformX, 0);
        }
        else {
            if (this.lockAnimationTimeoutId === -1) {
                if (this.transformY >= 0 && e.y > 0) {
                    return;
                }
                if (this.transformY <= this.wrapperHeight - this.scrollListHeight && e.y < 0) {
                    return;
                }
            }
            e.event.preventDefault();
            this.transformY = this.clampTransformY(this.transformY + e.y);
            this.setTransform(0, this.transformY);
        }
        this.lockAnimation();
        this.setVisibleRange();
        this.setPingStatus();
    }
    handleKeydown(event) {
        const inNavigationList = this.navWarpRef.nativeElement.contains(event.target);
        if (Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["hasModifierKey"])(event) || !inNavigationList) {
            return;
        }
        switch (event.keyCode) {
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["LEFT_ARROW"]:
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["UP_ARROW"]:
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["RIGHT_ARROW"]:
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["DOWN_ARROW"]:
                this.lockAnimation();
                this.keyManager.onKeydown(event);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["ENTER"]:
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["SPACE"]:
                if (this.focusIndex !== this.selectedIndex) {
                    this.selectFocusedIndex.emit(this.focusIndex);
                }
                break;
            default:
                this.keyManager.onKeydown(event);
        }
    }
    isValidIndex(index) {
        if (!this.items) {
            return true;
        }
        const tab = this.items ? this.items.toArray()[index] : null;
        return !!tab && !tab.disabled;
    }
    scrollToTab(tab) {
        if (!this.items.find(e => e === tab)) {
            return;
        }
        const tabs = this.items.toArray();
        if (this.position === 'horizontal') {
            let newTransform = this.transformX;
            if (this.getLayoutDirection() === 'rtl') {
                const right = tabs[0].left + tabs[0].width - tab.left - tab.width;
                if (right < this.transformX) {
                    newTransform = right;
                }
                else if (right + tab.width > this.transformX + this.wrapperWidth) {
                    newTransform = right + tab.width - this.wrapperWidth;
                }
            }
            else if (tab.left < -this.transformX) {
                newTransform = -tab.left;
            }
            else if (tab.left + tab.width > -this.transformX + this.wrapperWidth) {
                newTransform = -(tab.left + tab.width - this.wrapperWidth);
            }
            this.transformX = newTransform;
            this.transformY = 0;
            this.setTransform(newTransform, 0);
        }
        else {
            let newTransform = this.transformY;
            if (tab.top < -this.transformY) {
                newTransform = -tab.top;
            }
            else if (tab.top + tab.height > -this.transformY + this.wrapperHeight) {
                newTransform = -(tab.top + tab.height - this.wrapperHeight);
            }
            this.transformY = newTransform;
            this.transformX = 0;
            this.setTransform(0, newTransform);
        }
        clearTimeout(this.cssTransformTimeWaitingId);
        this.cssTransformTimeWaitingId = setTimeout(() => {
            this.setVisibleRange();
        }, CSS_TRANSFORM_TIME);
    }
    lockAnimation() {
        if (this.lockAnimationTimeoutId === -1) {
            this.ngZone.runOutsideAngular(() => {
                this.navListRef.nativeElement.style.transition = 'none';
                this.lockAnimationTimeoutId = setTimeout(() => {
                    this.navListRef.nativeElement.style.transition = '';
                    this.lockAnimationTimeoutId = -1;
                }, CSS_TRANSFORM_TIME);
            });
        }
    }
    setTransform(x, y) {
        this.navListRef.nativeElement.style.transform = `translate(${x}px, ${y}px)`;
    }
    clampTransformX(transform) {
        const scrollWidth = this.wrapperWidth - this.scrollListWidth;
        if (this.getLayoutDirection() === 'rtl') {
            return Math.max(Math.min(scrollWidth, transform), 0);
        }
        else {
            return Math.min(Math.max(scrollWidth, transform), 0);
        }
    }
    clampTransformY(transform) {
        return Math.min(Math.max(this.wrapperHeight - this.scrollListHeight, transform), 0);
    }
    updateScrollListPosition() {
        this.resetSizes();
        this.transformX = this.clampTransformX(this.transformX);
        this.transformY = this.clampTransformY(this.transformY);
        this.setVisibleRange();
        this.setPingStatus();
        if (this.keyManager) {
            this.keyManager.updateActiveItem(this.keyManager.activeItemIndex);
            if (this.keyManager.activeItem) {
                this.scrollToTab(this.keyManager.activeItem);
            }
        }
    }
    resetSizes() {
        this.addButtonWidth = this.addBtnRef ? this.addBtnRef.getElementWidth() : 0;
        this.addButtonHeight = this.addBtnRef ? this.addBtnRef.getElementHeight() : 0;
        this.operationWidth = this.operationRef.getElementWidth();
        this.operationHeight = this.operationRef.getElementHeight();
        this.wrapperWidth = this.navWarpRef.nativeElement.offsetWidth || 0;
        this.wrapperHeight = this.navWarpRef.nativeElement.offsetHeight || 0;
        this.scrollListHeight = this.navListRef.nativeElement.offsetHeight || 0;
        this.scrollListWidth = this.navListRef.nativeElement.offsetWidth || 0;
    }
    alignInkBarToSelectedTab() {
        const selectedItem = this.items && this.items.length ? this.items.toArray()[this.selectedIndex] : null;
        const selectedItemElement = selectedItem ? selectedItem.elementRef.nativeElement : null;
        if (selectedItemElement) {
            /**
             * .ant-tabs-nav-list - Target offset parent element
             *   └──.ant-tabs-tab
             *        └──.ant-tabs-tab-btn - Currently focused element
             */
            this.inkBar.alignToElement(selectedItemElement.parentElement);
        }
    }
    setPingStatus() {
        const ping = {
            top: false,
            right: false,
            bottom: false,
            left: false
        };
        const navWarp = this.navWarpRef.nativeElement;
        if (this.position === 'horizontal') {
            if (this.getLayoutDirection() === 'rtl') {
                ping.right = this.transformX > 0;
                ping.left = this.transformX + this.wrapperWidth < this.scrollListWidth;
            }
            else {
                ping.left = this.transformX < 0;
                ping.right = -this.transformX + this.wrapperWidth < this.scrollListWidth;
            }
        }
        else {
            ping.top = this.transformY < 0;
            ping.bottom = -this.transformY + this.wrapperHeight < this.scrollListHeight;
        }
        Object.keys(ping).forEach(pos => {
            const className = `ant-tabs-nav-wrap-ping-${pos}`;
            if (ping[pos]) {
                navWarp.classList.add(className);
            }
            else {
                navWarp.classList.remove(className);
            }
        });
    }
    setVisibleRange() {
        let unit;
        let position;
        let transformSize;
        let basicSize;
        let tabContentSize;
        let addSize;
        const tabs = this.items.toArray();
        const DEFAULT_SIZE = { width: 0, height: 0, left: 0, top: 0, right: 0 };
        const getOffset = (index) => {
            let offset;
            const size = tabs[index] || DEFAULT_SIZE;
            if (position === 'right') {
                offset = tabs[0].left + tabs[0].width - tabs[index].left - tabs[index].width;
            }
            else {
                offset = size[position];
            }
            return offset;
        };
        if (this.position === 'horizontal') {
            unit = 'width';
            basicSize = this.wrapperWidth;
            tabContentSize = this.scrollListWidth - (this.hiddenItems.length ? this.operationWidth : 0);
            addSize = this.addButtonWidth;
            transformSize = Math.abs(this.transformX);
            if (this.getLayoutDirection() === 'rtl') {
                position = 'right';
                this.pingRight = this.transformX > 0;
                this.pingLeft = this.transformX + this.wrapperWidth < this.scrollListWidth;
            }
            else {
                this.pingLeft = this.transformX < 0;
                this.pingRight = -this.transformX + this.wrapperWidth < this.scrollListWidth;
                position = 'left';
            }
        }
        else {
            unit = 'height';
            basicSize = this.wrapperHeight;
            tabContentSize = this.scrollListHeight - (this.hiddenItems.length ? this.operationHeight : 0);
            addSize = this.addButtonHeight;
            position = 'top';
            transformSize = -this.transformY;
            this.pingTop = this.transformY < 0;
            this.pingBottom = -this.transformY + this.wrapperHeight < this.scrollListHeight;
        }
        let mergedBasicSize = basicSize;
        if (tabContentSize + addSize > basicSize) {
            mergedBasicSize = basicSize - addSize;
        }
        if (!tabs.length) {
            this.hiddenItems = [];
            this.cdr.markForCheck();
            return;
        }
        const len = tabs.length;
        let endIndex = len;
        for (let i = 0; i < len; i += 1) {
            const offset = getOffset(i);
            const size = tabs[i] || DEFAULT_SIZE;
            if (offset + size[unit] > transformSize + mergedBasicSize) {
                endIndex = i - 1;
                break;
            }
        }
        let startIndex = 0;
        for (let i = len - 1; i >= 0; i -= 1) {
            const offset = getOffset(i);
            if (offset < transformSize) {
                startIndex = i + 1;
                break;
            }
        }
        const startHiddenTabs = tabs.slice(0, startIndex);
        const endHiddenTabs = tabs.slice(endIndex + 1);
        this.hiddenItems = [...startHiddenTabs, ...endHiddenTabs];
        this.cdr.markForCheck();
    }
    getLayoutDirection() {
        return this.dir && this.dir.value === 'rtl' ? 'rtl' : 'ltr';
    }
    setTabFocus(_tabIndex) { }
    ngOnChanges(changes) {
        const { position } = changes;
        // The first will be aligning in ngAfterViewInit
        if (position && !position.isFirstChange()) {
            this.alignInkBarToSelectedTab();
            this.lockAnimation();
            this.updateScrollListPosition();
        }
    }
}
NzTabNavBarComponent.ɵfac = function NzTabNavBarComponent_Factory(t) { return new (t || NzTabNavBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__["ViewportRuler"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_core_resize_observers__WEBPACK_IMPORTED_MODULE_10__["NzResizeObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"], 8)); };
NzTabNavBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzTabNavBarComponent, selectors: [["nz-tabs-nav"]], contentQueries: function NzTabNavBarComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NzTabNavItemDirective, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.items = _t);
    } }, viewQuery: function NzTabNavBarComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c5, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c6, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](NzTabNavOperationComponent, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](NzTabAddButtonComponent, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](NzTabsInkBarDirective, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.navWarpRef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.navListRef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.operationRef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.addBtnRef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.inkBar = _t.first);
    } }, hostAttrs: ["role", "tablist", 1, "ant-tabs-nav"], hostBindings: function NzTabNavBarComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function NzTabNavBarComponent_keydown_HostBindingHandler($event) { return ctx.handleKeydown($event); });
    } }, inputs: { position: "position", addable: "addable", hideBar: "hideBar", addIcon: "addIcon", inkBarAnimated: "inkBarAnimated", selectedIndex: "selectedIndex", extraTemplate: "extraTemplate" }, outputs: { indexFocused: "indexFocused", selectFocusedIndex: "selectFocusedIndex", addClicked: "addClicked", tabScroll: "tabScroll" }, exportAs: ["nzTabsNav"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c7, decls: 9, vars: 16, consts: [[1, "ant-tabs-nav-wrap"], ["navWarp", ""], ["nzTabScrollList", "", 1, "ant-tabs-nav-list", 3, "offsetChange", "tabScroll"], ["navList", ""], ["nz-tab-add-button", "", 3, "addIcon", "click", 4, "ngIf"], ["nz-tabs-ink-bar", "", 3, "hidden", "position", "animated"], [3, "addIcon", "addable", "items", "addClicked", "selected"], ["class", "ant-tabs-extra-content", 4, "ngIf"], ["nz-tab-add-button", "", 3, "addIcon", "click"], [1, "ant-tabs-extra-content"], [3, "ngTemplateOutlet"]], template: function NzTabNavBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("offsetChange", function NzTabNavBarComponent_Template_div_offsetChange_2_listener($event) { return ctx.onOffsetChange($event); })("tabScroll", function NzTabNavBarComponent_Template_div_tabScroll_2_listener($event) { return ctx.tabScroll.emit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NzTabNavBarComponent_button_5_Template, 1, 1, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nz-tab-nav-operation", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("addClicked", function NzTabNavBarComponent_Template_nz_tab_nav_operation_addClicked_7_listener() { return ctx.addClicked.emit(); })("selected", function NzTabNavBarComponent_Template_nz_tab_nav_operation_selected_7_listener($event) { return ctx.onSelectedFromMenu($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NzTabNavBarComponent_div_8_Template, 2, 1, "div", 7);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-tabs-nav-wrap-ping-left", ctx.pingLeft)("ant-tabs-nav-wrap-ping-right", ctx.pingRight)("ant-tabs-nav-wrap-ping-top", ctx.pingTop)("ant-tabs-nav-wrap-ping-bottom", ctx.pingBottom);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showAddButton);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.hideBar)("position", ctx.position)("animated", ctx.inkBarAnimated);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("addIcon", ctx.addIcon)("addable", ctx.addable)("items", ctx.hiddenItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.extraTemplate);
    } }, directives: function () { return [NzTabScrollListDirective, _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgIf"], NzTabsInkBarDirective, NzTabNavOperationComponent, NzTabAddButtonComponent, _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgTemplateOutlet"]]; }, encapsulation: 2, changeDetection: 0 });
NzTabNavBarComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
    { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__["ViewportRuler"] },
    { type: ng_zorro_antd_core_resize_observers__WEBPACK_IMPORTED_MODULE_10__["NzResizeObserver"] },
    { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] }
];
NzTabNavBarComponent.propDecorators = {
    indexFocused: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    selectFocusedIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    addClicked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    tabScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    position: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    addable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    hideBar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    addIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    inkBarAnimated: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    extraTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    selectedIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    navWarpRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['navWarp', { static: true },] }],
    navListRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['navList', { static: true },] }],
    operationRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [NzTabNavOperationComponent, { static: true },] }],
    addBtnRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [NzTabAddButtonComponent, { static: false },] }],
    inkBar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [NzTabsInkBarDirective, { static: true },] }],
    items: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [NzTabNavItemDirective, { descendants: true },] }]
};

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzTabBodyComponent {
    constructor() {
        this.content = null;
        this.active = false;
        this.tabPaneAnimated = true;
        this.forceRender = false;
    }
}
NzTabBodyComponent.ɵfac = function NzTabBodyComponent_Factory(t) { return new (t || NzTabBodyComponent)(); };
NzTabBodyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzTabBodyComponent, selectors: [["", "nz-tab-body", ""]], hostAttrs: [1, "ant-tabs-tabpane"], hostVars: 12, hostBindings: function NzTabBodyComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", ctx.active ? 0 : -1)("aria-hidden", !ctx.active);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("visibility", ctx.tabPaneAnimated ? ctx.active ? null : "hidden" : null)("height", ctx.tabPaneAnimated ? ctx.active ? null : 0 : null)("overflow-y", ctx.tabPaneAnimated ? ctx.active ? null : "none" : null)("display", !ctx.tabPaneAnimated ? ctx.active ? null : "none" : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-tabs-tabpane-active", ctx.active);
    } }, inputs: { content: "content", active: "active", tabPaneAnimated: "tabPaneAnimated", forceRender: "forceRender" }, exportAs: ["nzTabBody"], attrs: _c8, decls: 1, vars: 1, consts: [[4, "ngIf"], [3, "ngTemplateOutlet"]], template: function NzTabBodyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzTabBodyComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.active || ctx.forceRender);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_17__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgTemplateOutlet"]], encapsulation: 2, changeDetection: 0 });
NzTabBodyComponent.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    active: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    tabPaneAnimated: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    forceRender: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
const MIN_SWIPE_DISTANCE = 0.1;
const STOP_SWIPE_DISTANCE = 0.01;
const REFRESH_INTERVAL = 20;
const SPEED_OFF_MULTIPLE = Math.pow(0.995, REFRESH_INTERVAL);
class NzTabScrollListDirective {
    constructor(ngZone, elementRef) {
        this.ngZone = ngZone;
        this.elementRef = elementRef;
        this.lastWheelDirection = null;
        this.lastWheelTimestamp = 0;
        this.lastTimestamp = 0;
        this.lastTimeDiff = 0;
        this.lastMixedWheel = 0;
        this.lastWheelPrevent = false;
        this.touchPosition = null;
        this.lastOffset = null;
        this.motion = -1;
        this.unsubscribe = () => void 0;
        this.offsetChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.tabScroll = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onTouchEnd = (e) => {
            if (!this.touchPosition) {
                return;
            }
            const lastOffset = this.lastOffset;
            const lastTimeDiff = this.lastTimeDiff;
            this.lastOffset = this.touchPosition = null;
            if (lastOffset) {
                const distanceX = lastOffset.x / lastTimeDiff;
                const distanceY = lastOffset.y / lastTimeDiff;
                const absX = Math.abs(distanceX);
                const absY = Math.abs(distanceY);
                // Skip swipe if low distance
                if (Math.max(absX, absY) < MIN_SWIPE_DISTANCE) {
                    return;
                }
                let currentX = distanceX;
                let currentY = distanceY;
                this.motion = window.setInterval(() => {
                    if (Math.abs(currentX) < STOP_SWIPE_DISTANCE && Math.abs(currentY) < STOP_SWIPE_DISTANCE) {
                        window.clearInterval(this.motion);
                        return;
                    }
                    currentX *= SPEED_OFF_MULTIPLE;
                    currentY *= SPEED_OFF_MULTIPLE;
                    this.onOffset(currentX * REFRESH_INTERVAL, currentY * REFRESH_INTERVAL, e);
                }, REFRESH_INTERVAL);
            }
        };
        this.onTouchMove = (e) => {
            if (!this.touchPosition) {
                return;
            }
            e.preventDefault();
            const { screenX, screenY } = e.touches[0];
            const offsetX = screenX - this.touchPosition.x;
            const offsetY = screenY - this.touchPosition.y;
            this.onOffset(offsetX, offsetY, e);
            const now = Date.now();
            this.lastTimeDiff = now - this.lastTimestamp;
            this.lastTimestamp = now;
            this.lastOffset = { x: offsetX, y: offsetY };
            this.touchPosition = { x: screenX, y: screenY };
        };
        this.onTouchStart = (e) => {
            const { screenX, screenY } = e.touches[0];
            this.touchPosition = { x: screenX, y: screenY };
            window.clearInterval(this.motion);
        };
        this.onWheel = (e) => {
            const { deltaX, deltaY } = e;
            let mixed;
            const absX = Math.abs(deltaX);
            const absY = Math.abs(deltaY);
            if (absX === absY) {
                mixed = this.lastWheelDirection === 'x' ? deltaX : deltaY;
            }
            else if (absX > absY) {
                mixed = deltaX;
                this.lastWheelDirection = 'x';
            }
            else {
                mixed = deltaY;
                this.lastWheelDirection = 'y';
            }
            // Optimize mac touch scroll
            const now = Date.now();
            const absMixed = Math.abs(mixed);
            if (now - this.lastWheelTimestamp > 100 || absMixed - this.lastMixedWheel > 10) {
                this.lastWheelPrevent = false;
            }
            this.onOffset(-mixed, -mixed, e);
            if (e.defaultPrevented || this.lastWheelPrevent) {
                this.lastWheelPrevent = true;
            }
            this.lastWheelTimestamp = now;
            this.lastMixedWheel = absMixed;
        };
    }
    ngOnInit() {
        this.unsubscribe = this.ngZone.runOutsideAngular(() => {
            const el = this.elementRef.nativeElement;
            const wheel$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["fromEvent"])(el, 'wheel');
            const touchstart$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["fromEvent"])(el, 'touchstart');
            const touchmove$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["fromEvent"])(el, 'touchmove');
            const touchend$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["fromEvent"])(el, 'touchend');
            const subscription = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subscription"]();
            subscription.add(this.subscribeWrap('wheel', wheel$, this.onWheel));
            subscription.add(this.subscribeWrap('touchstart', touchstart$, this.onTouchStart));
            subscription.add(this.subscribeWrap('touchmove', touchmove$, this.onTouchMove));
            subscription.add(this.subscribeWrap('touchend', touchend$, this.onTouchEnd));
            return () => {
                subscription.unsubscribe();
            };
        });
    }
    subscribeWrap(type, observable, handler) {
        return observable.subscribe(event => {
            this.tabScroll.emit({
                type,
                event
            });
            if (!event.defaultPrevented) {
                handler(event);
            }
        });
    }
    onOffset(x, y, event) {
        this.ngZone.run(() => {
            this.offsetChange.emit({
                x,
                y,
                event
            });
        });
    }
    ngOnDestroy() {
        this.unsubscribe();
    }
}
NzTabScrollListDirective.ɵfac = function NzTabScrollListDirective_Factory(t) { return new (t || NzTabScrollListDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
NzTabScrollListDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NzTabScrollListDirective, selectors: [["", "nzTabScrollList", ""]], outputs: { offsetChange: "offsetChange", tabScroll: "tabScroll" } });
NzTabScrollListDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
];
NzTabScrollListDirective.propDecorators = {
    offsetChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    tabScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzTabCloseButtonComponent {
    constructor() {
        this.closeIcon = 'close';
    }
}
NzTabCloseButtonComponent.ɵfac = function NzTabCloseButtonComponent_Factory(t) { return new (t || NzTabCloseButtonComponent)(); };
NzTabCloseButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzTabCloseButtonComponent, selectors: [["nz-tab-close-button"], ["button", "nz-tab-close-button", ""]], hostAttrs: ["aria-label", "Close tab", "type", "button", 1, "ant-tabs-tab-remove"], inputs: { closeIcon: "closeIcon" }, decls: 1, vars: 1, consts: [[4, "nzStringTemplateOutlet"], ["nz-icon", "", "nzTheme", "outline", 3, "nzType"]], template: function NzTabCloseButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzTabCloseButtonComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzStringTemplateOutlet", ctx.closeIcon);
    } }, directives: [ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_18__["NzStringTemplateOutletDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_20__["NzIconDirective"]], encapsulation: 2 });
NzTabCloseButtonComponent.ctorParameters = () => [];
NzTabCloseButtonComponent.propDecorators = {
    closeIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzTabChangeEvent {
}

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
const NZ_CONFIG_MODULE_NAME = 'tabs';
let nextId = 0;
class NzTabSetComponent {
    constructor(nzConfigService, cdr, directionality, router) {
        this.nzConfigService = nzConfigService;
        this.cdr = cdr;
        this.directionality = directionality;
        this.router = router;
        this._nzModuleName = NZ_CONFIG_MODULE_NAME;
        this.nzTabPosition = 'top';
        this.nzCanDeactivate = null;
        this.nzAddIcon = 'plus';
        this.nzTabBarStyle = null;
        this.nzType = 'line';
        this.nzSize = 'default';
        this.nzAnimated = true;
        this.nzTabBarGutter = undefined;
        this.nzHideAdd = false;
        this.nzCentered = false;
        this.nzHideAll = false;
        this.nzLinkRouter = false;
        this.nzLinkExact = true;
        this.nzSelectChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
        this.nzSelectedIndexChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.nzTabListScroll = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.nzClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.nzAdd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // Pick up only direct descendants under ivy rendering engine
        // We filter out only the tabs that belong to this tab set in `tabs`.
        this.allTabs = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"]();
        // All the direct tabs for this tab set
        this.tabs = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"]();
        this.dir = 'ltr';
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        this.indexToSelect = 0;
        this.selectedIndex = null;
        this.tabLabelSubscription = rxjs__WEBPACK_IMPORTED_MODULE_8__["Subscription"].EMPTY;
        this.tabsSubscription = rxjs__WEBPACK_IMPORTED_MODULE_8__["Subscription"].EMPTY;
        this.canDeactivateSubscription = rxjs__WEBPACK_IMPORTED_MODULE_8__["Subscription"].EMPTY;
        this.tabSetId = nextId++;
    }
    get nzSelectedIndex() {
        return this.selectedIndex;
    }
    set nzSelectedIndex(value) {
        this.indexToSelect = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceNumberProperty"])(value, null);
    }
    get position() {
        return ['top', 'bottom'].indexOf(this.nzTabPosition) === -1 ? 'vertical' : 'horizontal';
    }
    get addable() {
        return this.nzType === 'editable-card' && !this.nzHideAdd;
    }
    get closable() {
        return this.nzType === 'editable-card';
    }
    get line() {
        return this.nzType === 'line';
    }
    get inkBarAnimated() {
        return this.line && (typeof this.nzAnimated === 'boolean' ? this.nzAnimated : this.nzAnimated.inkBar);
    }
    get tabPaneAnimated() {
        return (this.position === 'horizontal' && this.line && (typeof this.nzAnimated === 'boolean' ? this.nzAnimated : this.nzAnimated.tabPane));
    }
    ngOnInit() {
        var _a;
        this.dir = this.directionality.value;
        (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["takeUntil"])(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
            this.cdr.detectChanges();
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
        this.tabs.destroy();
        this.tabLabelSubscription.unsubscribe();
        this.tabsSubscription.unsubscribe();
        this.canDeactivateSubscription.unsubscribe();
    }
    ngAfterContentInit() {
        Promise.resolve().then(() => {
            this.setUpRouter();
        });
        this.subscribeToTabLabels();
        this.subscribeToAllTabChanges();
        // Subscribe to changes in the amount of tabs, in order to be
        // able to re-render the content as new tabs are added or removed.
        this.tabsSubscription = this.tabs.changes.subscribe(() => {
            const indexToSelect = this.clampTabIndex(this.indexToSelect);
            // Maintain the previously-selected tab if a new tab is added or removed and there is no
            // explicit change that selects a different tab.
            if (indexToSelect === this.selectedIndex) {
                const tabs = this.tabs.toArray();
                for (let i = 0; i < tabs.length; i++) {
                    if (tabs[i].isActive) {
                        // Assign both to the `indexToSelect` and `selectedIndex` so we don't fire a changed
                        // event, otherwise the consumer may end up in an infinite loop in some edge cases like
                        // adding a tab within the `nzSelectedIndexChange` event.
                        this.indexToSelect = this.selectedIndex = i;
                        break;
                    }
                }
            }
            this.subscribeToTabLabels();
            this.cdr.markForCheck();
        });
    }
    ngAfterContentChecked() {
        // Don't clamp the `indexToSelect` immediately in the setter because it can happen that
        // the amount of tabs changes before the actual change detection runs.
        const indexToSelect = (this.indexToSelect = this.clampTabIndex(this.indexToSelect));
        // If there is a change in selected index, emit a change event. Should not trigger if
        // the selected index has not yet been initialized.
        if (this.selectedIndex !== indexToSelect) {
            const isFirstRun = this.selectedIndex == null;
            if (!isFirstRun) {
                this.nzSelectChange.emit(this.createChangeEvent(indexToSelect));
            }
            // Changing these values after change detection has run
            // since the checked content may contain references to them.
            Promise.resolve().then(() => {
                this.tabs.forEach((tab, index) => (tab.isActive = index === indexToSelect));
                if (!isFirstRun) {
                    this.nzSelectedIndexChange.emit(indexToSelect);
                }
            });
        }
        // Setup the position for each tab and optionally setup an origin on the next selected tab.
        this.tabs.forEach((tab, index) => {
            tab.position = index - indexToSelect;
            // If there is already a selected tab, then set up an origin for the next selected tab
            // if it doesn't have one already.
            if (this.selectedIndex != null && tab.position === 0 && !tab.origin) {
                tab.origin = indexToSelect - this.selectedIndex;
            }
        });
        if (this.selectedIndex !== indexToSelect) {
            this.selectedIndex = indexToSelect;
            this.cdr.markForCheck();
        }
    }
    onClose(index, e) {
        e.preventDefault();
        e.stopPropagation();
        this.nzClose.emit({ index });
    }
    onAdd() {
        this.nzAdd.emit();
    }
    clampTabIndex(index) {
        return Math.min(this.tabs.length - 1, Math.max(index || 0, 0));
    }
    createChangeEvent(index) {
        const event = new NzTabChangeEvent();
        event.index = index;
        if (this.tabs && this.tabs.length) {
            event.tab = this.tabs.toArray()[index];
            this.tabs.forEach((tab, i) => {
                if (i !== index) {
                    tab.nzDeselect.emit();
                }
            });
            event.tab.nzSelect.emit();
        }
        return event;
    }
    subscribeToTabLabels() {
        if (this.tabLabelSubscription) {
            this.tabLabelSubscription.unsubscribe();
        }
        this.tabLabelSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["merge"])(...this.tabs.map(tab => tab.stateChanges)).subscribe(() => this.cdr.markForCheck());
    }
    subscribeToAllTabChanges() {
        this.allTabs.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["startWith"])(this.allTabs)).subscribe((tabs) => {
            this.tabs.reset(tabs.filter(tab => tab.closestTabSet === this));
            this.tabs.notifyOnChanges();
        });
    }
    canDeactivateFun(pre, next) {
        if (typeof this.nzCanDeactivate === 'function') {
            const observable = Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_12__["wrapIntoObservable"])(this.nzCanDeactivate(pre, next));
            return observable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["takeUntil"])(this.destroy$));
        }
        else {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["of"])(true);
        }
    }
    clickNavItem(tab, index, e) {
        if (!tab.nzDisabled) {
            // ignore nzCanDeactivate
            tab.nzClick.emit();
            if (!this.isRouterLinkClickEvent(index, e)) {
                this.setSelectedIndex(index);
            }
        }
    }
    isRouterLinkClickEvent(index, event) {
        var _a, _b;
        const target = event.target;
        if (this.nzLinkRouter) {
            return !!((_b = (_a = this.tabs.toArray()[index]) === null || _a === void 0 ? void 0 : _a.linkDirective) === null || _b === void 0 ? void 0 : _b.elementRef.nativeElement.contains(target));
        }
        else {
            return false;
        }
    }
    contextmenuNavItem(tab, e) {
        if (!tab.nzDisabled) {
            // ignore nzCanDeactivate
            tab.nzContextmenu.emit(e);
        }
    }
    setSelectedIndex(index) {
        this.canDeactivateSubscription.unsubscribe();
        this.canDeactivateSubscription = this.canDeactivateFun(this.selectedIndex, index).subscribe(can => {
            if (can) {
                this.nzSelectedIndex = index;
                this.tabNavBarRef.focusIndex = index;
                this.cdr.markForCheck();
            }
        });
    }
    getTabIndex(tab, index) {
        if (tab.nzDisabled) {
            return null;
        }
        return this.selectedIndex === index ? 0 : -1;
    }
    getTabContentId(i) {
        return `nz-tabs-${this.tabSetId}-tab-${i}`;
    }
    setUpRouter() {
        if (this.nzLinkRouter) {
            if (!this.router) {
                throw new Error(`${ng_zorro_antd_core_logger__WEBPACK_IMPORTED_MODULE_22__["PREFIX"]} you should import 'RouterModule' if you want to use 'nzLinkRouter'!`);
            }
            this.router.events
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["takeUntil"])(this.destroy$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["filter"])(e => e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_13__["NavigationEnd"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["startWith"])(true), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["delay"])(0))
                .subscribe(() => {
                this.updateRouterActive();
                this.cdr.markForCheck();
            });
        }
    }
    updateRouterActive() {
        if (this.router.navigated) {
            const index = this.findShouldActiveTabIndex();
            if (index !== this.selectedIndex) {
                this.setSelectedIndex(index);
            }
            this.nzHideAll = index === -1;
        }
    }
    findShouldActiveTabIndex() {
        const tabs = this.tabs.toArray();
        const isActive = this.isLinkActive(this.router);
        return tabs.findIndex(tab => {
            const c = tab.linkDirective;
            return c ? isActive(c.routerLink) || isActive(c.routerLinkWithHref) : false;
        });
    }
    isLinkActive(router) {
        return (link) => (link ? router.isActive(link.urlTree, this.nzLinkExact) : false);
    }
    getTabContentMarginValue() {
        return -(this.nzSelectedIndex || 0) * 100;
    }
    getTabContentMarginLeft() {
        if (this.tabPaneAnimated) {
            if (this.dir !== 'rtl') {
                return this.getTabContentMarginValue() + '%';
            }
        }
        return '';
    }
    getTabContentMarginRight() {
        if (this.tabPaneAnimated) {
            if (this.dir === 'rtl') {
                return this.getTabContentMarginValue() + '%';
            }
        }
        return '';
    }
}
NzTabSetComponent.ɵfac = function NzTabSetComponent_Factory(t) { return new (t || NzTabSetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_21__["NzConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"], 8)); };
NzTabSetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzTabSetComponent, selectors: [["nz-tabset"]], contentQueries: function NzTabSetComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NzTabComponent, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.allTabs = _t);
    } }, viewQuery: function NzTabSetComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](NzTabNavBarComponent, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.tabNavBarRef = _t.first);
    } }, hostAttrs: [1, "ant-tabs"], hostVars: 24, hostBindings: function NzTabSetComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-tabs-card", ctx.nzType === "card" || ctx.nzType === "editable-card")("ant-tabs-editable", ctx.nzType === "editable-card")("ant-tabs-editable-card", ctx.nzType === "editable-card")("ant-tabs-centered", ctx.nzCentered)("ant-tabs-rtl", ctx.dir === "rtl")("ant-tabs-top", ctx.nzTabPosition === "top")("ant-tabs-bottom", ctx.nzTabPosition === "bottom")("ant-tabs-left", ctx.nzTabPosition === "left")("ant-tabs-right", ctx.nzTabPosition === "right")("ant-tabs-default", ctx.nzSize === "default")("ant-tabs-small", ctx.nzSize === "small")("ant-tabs-large", ctx.nzSize === "large");
    } }, inputs: { nzTabPosition: "nzTabPosition", nzCanDeactivate: "nzCanDeactivate", nzAddIcon: "nzAddIcon", nzTabBarStyle: "nzTabBarStyle", nzType: "nzType", nzSize: "nzSize", nzAnimated: "nzAnimated", nzTabBarGutter: "nzTabBarGutter", nzHideAdd: "nzHideAdd", nzCentered: "nzCentered", nzHideAll: "nzHideAll", nzLinkRouter: "nzLinkRouter", nzLinkExact: "nzLinkExact", nzSelectedIndex: "nzSelectedIndex", nzTabBarExtraContent: "nzTabBarExtraContent" }, outputs: { nzSelectChange: "nzSelectChange", nzSelectedIndexChange: "nzSelectedIndexChange", nzTabListScroll: "nzTabListScroll", nzClose: "nzClose", nzAdd: "nzAdd" }, exportAs: ["nzTabset"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: NZ_TAB_SET,
                useExisting: NzTabSetComponent
            }
        ])], decls: 4, vars: 16, consts: [[3, "ngStyle", "selectedIndex", "inkBarAnimated", "addable", "addIcon", "hideBar", "position", "extraTemplate", "tabScroll", "selectFocusedIndex", "addClicked", 4, "ngIf"], [1, "ant-tabs-content-holder"], [1, "ant-tabs-content"], ["nz-tab-body", "", 3, "active", "content", "forceRender", "tabPaneAnimated", 4, "ngFor", "ngForOf"], [3, "ngStyle", "selectedIndex", "inkBarAnimated", "addable", "addIcon", "hideBar", "position", "extraTemplate", "tabScroll", "selectFocusedIndex", "addClicked"], ["class", "ant-tabs-tab", 3, "margin-right", "margin-bottom", "ant-tabs-tab-active", "ant-tabs-tab-disabled", "click", "contextmenu", 4, "ngFor", "ngForOf"], [1, "ant-tabs-tab", 3, "click", "contextmenu"], ["role", "tab", "nzTabNavItem", "", "cdkMonitorElementFocus", "", 1, "ant-tabs-tab-btn", 3, "disabled", "tab", "active"], [4, "nzStringTemplateOutlet", "nzStringTemplateOutletContext"], ["nz-tab-close-button", "", 3, "closeIcon", "click", 4, "ngIf"], ["nz-tab-close-button", "", 3, "closeIcon", "click"], ["nz-tab-body", "", 3, "active", "content", "forceRender", "tabPaneAnimated"]], template: function NzTabSetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzTabSetComponent_nz_tabs_nav_0_Template, 2, 9, "nz-tabs-nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NzTabSetComponent_div_3_Template, 1, 4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tabs.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("margin-left", ctx.getTabContentMarginLeft())("margin-right", ctx.getTabContentMarginRight());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-tabs-content-top", ctx.nzTabPosition === "top")("ant-tabs-content-bottom", ctx.nzTabPosition === "bottom")("ant-tabs-content-left", ctx.nzTabPosition === "left")("ant-tabs-content-right", ctx.nzTabPosition === "right")("ant-tabs-content-animated", ctx.tabPaneAnimated);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tabs);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_17__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgForOf"], NzTabNavBarComponent, _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgStyle"], NzTabNavItemDirective, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["CdkMonitorFocus"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_18__["NzStringTemplateOutletDirective"], NzTabCloseButtonComponent, NzTabBodyComponent], encapsulation: 2 });
NzTabSetComponent.ctorParameters = () => [
    { type: ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_21__["NzConfigService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
    { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] }
];
NzTabSetComponent.propDecorators = {
    nzSelectedIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzTabPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzTabBarExtraContent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzCanDeactivate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzAddIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzTabBarStyle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzAnimated: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzTabBarGutter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzHideAdd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzCentered: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzHideAll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzLinkRouter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzLinkExact: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzSelectChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    nzSelectedIndexChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    nzTabListScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    nzClose: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    nzAdd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    allTabs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [NzTabComponent, { descendants: true },] }],
    tabNavBarRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [NzTabNavBarComponent, { static: false },] }]
};
Object(tslib__WEBPACK_IMPORTED_MODULE_11__["__decorate"])([
    Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_21__["WithConfig"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_11__["__metadata"])("design:type", String)
], NzTabSetComponent.prototype, "nzType", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_11__["__decorate"])([
    Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_21__["WithConfig"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_11__["__metadata"])("design:type", String)
], NzTabSetComponent.prototype, "nzSize", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_11__["__decorate"])([
    Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_21__["WithConfig"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_11__["__metadata"])("design:type", Object)
], NzTabSetComponent.prototype, "nzAnimated", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_11__["__decorate"])([
    Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_21__["WithConfig"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_11__["__metadata"])("design:type", Number)
], NzTabSetComponent.prototype, "nzTabBarGutter", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_11__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_12__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_11__["__metadata"])("design:type", Boolean)
], NzTabSetComponent.prototype, "nzHideAdd", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_11__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_12__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_11__["__metadata"])("design:type", Boolean)
], NzTabSetComponent.prototype, "nzCentered", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_11__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_12__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_11__["__metadata"])("design:type", Object)
], NzTabSetComponent.prototype, "nzHideAll", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_11__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_12__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_11__["__metadata"])("design:type", Object)
], NzTabSetComponent.prototype, "nzLinkRouter", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_11__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_12__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_11__["__metadata"])("design:type", Object)
], NzTabSetComponent.prototype, "nzLinkExact", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzTabAddButtonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-tab-add-button, button[nz-tab-add-button]',
                template: `
    <ng-container *nzStringTemplateOutlet="addIcon; let icon">
      <i nz-icon [nzType]="icon" nzTheme="outline"></i>
    </ng-container>
  `,
                host: {
                    class: 'ant-tabs-nav-add',
                    'aria-label': 'Add tab',
                    type: 'button'
                }
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { addIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzTabsInkBarDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: 'nz-tabs-ink-bar, [nz-tabs-ink-bar]',
                host: {
                    class: 'ant-tabs-ink-bar',
                    '[class.ant-tabs-ink-bar-animated]': '_animated'
                }
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["ANIMATION_MODULE_TYPE"]]
            }] }]; }, { position: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], animated: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzTabLinkTemplateDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: 'ng-template[nzTabLink]',
                exportAs: 'nzTabLinkTemplate'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]
            }] }]; }, null); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzTabLinkDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: 'a[nz-tab-link]',
                exportAs: 'nzTabLink'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterLink"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
            }] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterLinkWithHref"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
            }] }]; }, null); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzTabDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[nz-tab]',
                exportAs: 'nzTab'
            }]
    }], null, null); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzTabComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-tab',
                exportAs: 'nzTab',
                preserveWhitespaces: false,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                template: `
    <ng-template #tabLinkTemplate>
      <ng-content select="[nz-tab-link]"></ng-content>
    </ng-template>
    <ng-template #contentTemplate><ng-content></ng-content></ng-template>
  `
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [NZ_TAB_SET]
            }] }]; }, { nzTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzClosable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzCloseIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzForceRender: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzSelect: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], nzDeselect: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], nzClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], nzContextmenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], template: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [NzTabDirective, { static: false, read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }]
        }], nzTabLinkTemplateDirective: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [NzTabLinkTemplateDirective, { static: false }]
        }], linkDirective: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [NzTabLinkDirective, { static: false }]
        }], contentTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['contentTemplate', { static: true }]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzTabNavItemDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[nzTabNavItem]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], active: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], tab: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzTabNavOperationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-tab-nav-operation',
                exportAs: 'nzTabNavOperation',
                preserveWhitespaces: false,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                template: `
    <button
      nz-dropdown
      class="ant-tabs-nav-more"
      type="button"
      tabindex="-1"
      aria-hidden="true"
      nzOverlayClassName="nz-tabs-dropdown"
      #dropdownTrigger="nzDropdown"
      [nzDropdownMenu]="menu"
      [nzOverlayStyle]="{ minWidth: '46px' }"
      [nzMatchWidthElement]="null"
      (nzVisibleChange)="menuVisChange($event)"
      (mouseenter)="showItems()"
    >
      <i nz-icon nzType="ellipsis"></i>
    </button>
    <nz-dropdown-menu #menu="nzDropdownMenu">
      <ul nz-menu *ngIf="menuOpened">
        <li
          nz-menu-item
          *ngFor="let item of items"
          class="ant-tabs-dropdown-menu-item"
          [class.ant-tabs-dropdown-menu-item-disabled]="item.disabled"
          [nzSelected]="item.active"
          [nzDisabled]="item.disabled"
          (click)="onSelect(item)"
          (contextmenu)="onContextmenu(item, $event)"
        >
          <ng-container *nzStringTemplateOutlet="item.tab.label; context: { visible: false }">{{ item.tab.label }}</ng-container>
        </li>
      </ul>
    </nz-dropdown-menu>
    <button *ngIf="addable" nz-tab-add-button [addIcon]="addIcon" (click)="addClicked.emit()"></button>
  `,
                host: {
                    class: 'ant-tabs-nav-operations',
                    '[class.ant-tabs-nav-operations-hidden]': 'items.length === 0'
                }
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { items: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], addable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], addIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], addClicked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], selected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzTabNavBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-tabs-nav',
                exportAs: 'nzTabsNav',
                preserveWhitespaces: false,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                template: `
    <div
      class="ant-tabs-nav-wrap"
      [class.ant-tabs-nav-wrap-ping-left]="pingLeft"
      [class.ant-tabs-nav-wrap-ping-right]="pingRight"
      [class.ant-tabs-nav-wrap-ping-top]="pingTop"
      [class.ant-tabs-nav-wrap-ping-bottom]="pingBottom"
      #navWarp
    >
      <div class="ant-tabs-nav-list" #navList nzTabScrollList (offsetChange)="onOffsetChange($event)" (tabScroll)="tabScroll.emit($event)">
        <ng-content></ng-content>
        <button *ngIf="showAddButton" nz-tab-add-button [addIcon]="addIcon" (click)="addClicked.emit()"></button>
        <div nz-tabs-ink-bar [hidden]="hideBar" [position]="position" [animated]="inkBarAnimated"></div>
      </div>
    </div>
    <nz-tab-nav-operation
      (addClicked)="addClicked.emit()"
      (selected)="onSelectedFromMenu($event)"
      [addIcon]="addIcon"
      [addable]="addable"
      [items]="hiddenItems"
    ></nz-tab-nav-operation>
    <div class="ant-tabs-extra-content" *ngIf="extraTemplate">
      <ng-template [ngTemplateOutlet]="extraTemplate"></ng-template>
    </div>
  `,
                host: {
                    role: 'tablist',
                    class: 'ant-tabs-nav',
                    '(keydown)': 'handleKeydown($event)'
                }
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }, { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__["ViewportRuler"] }, { type: ng_zorro_antd_core_resize_observers__WEBPACK_IMPORTED_MODULE_10__["NzResizeObserver"] }, { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }] }]; }, { indexFocused: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], selectFocusedIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], addClicked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], tabScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], position: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], addable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], hideBar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], addIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], inkBarAnimated: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], selectedIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], extraTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], navWarpRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['navWarp', { static: true }]
        }], navListRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['navList', { static: true }]
        }], operationRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [NzTabNavOperationComponent, { static: true }]
        }], addBtnRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [NzTabAddButtonComponent, { static: false }]
        }], inkBar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [NzTabsInkBarDirective, { static: true }]
        }], items: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
            args: [NzTabNavItemDirective, { descendants: true }]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzTabBodyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: '[nz-tab-body]',
                exportAs: 'nzTabBody',
                preserveWhitespaces: false,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                template: `
    <ng-container *ngIf="active || forceRender">
      <ng-template [ngTemplateOutlet]="content"></ng-template>
    </ng-container>
  `,
                host: {
                    class: 'ant-tabs-tabpane',
                    '[class.ant-tabs-tabpane-active]': 'active',
                    '[attr.tabindex]': 'active ? 0 : -1',
                    '[attr.aria-hidden]': '!active',
                    '[style.visibility]': 'tabPaneAnimated ? active ? null : "hidden" : null',
                    '[style.height]': 'tabPaneAnimated ? active ? null : 0 : null',
                    '[style.overflow-y]': 'tabPaneAnimated ? active ? null : "none" : null',
                    '[style.display]': '!tabPaneAnimated ? active ? null : "none" : null'
                }
            }]
    }], function () { return []; }, { content: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], active: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], tabPaneAnimated: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], forceRender: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzTabScrollListDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[nzTabScrollList]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { offsetChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], tabScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzTabCloseButtonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-tab-close-button, button[nz-tab-close-button]',
                template: `
    <ng-container *nzStringTemplateOutlet="closeIcon; let icon">
      <i nz-icon [nzType]="icon" nzTheme="outline"></i>
    </ng-container>
  `,
                host: {
                    class: 'ant-tabs-tab-remove',
                    'aria-label': 'Close tab',
                    type: 'button'
                }
            }]
    }], function () { return []; }, { closeIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzTabSetComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-tabset',
                exportAs: 'nzTabset',
                preserveWhitespaces: false,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].Default,
                providers: [
                    {
                        provide: NZ_TAB_SET,
                        useExisting: NzTabSetComponent
                    }
                ],
                template: `
    <nz-tabs-nav
      *ngIf="tabs.length"
      [ngStyle]="nzTabBarStyle"
      [selectedIndex]="nzSelectedIndex || 0"
      [inkBarAnimated]="inkBarAnimated"
      [addable]="addable"
      [addIcon]="nzAddIcon"
      [hideBar]="nzHideAll"
      [position]="position"
      [extraTemplate]="nzTabBarExtraContent"
      (tabScroll)="nzTabListScroll.emit($event)"
      (selectFocusedIndex)="setSelectedIndex($event)"
      (addClicked)="onAdd()"
    >
      <div
        class="ant-tabs-tab"
        [style.margin-right.px]="position === 'horizontal' ? nzTabBarGutter : null"
        [style.margin-bottom.px]="position === 'vertical' ? nzTabBarGutter : null"
        [class.ant-tabs-tab-active]="nzSelectedIndex === i"
        [class.ant-tabs-tab-disabled]="tab.nzDisabled"
        (click)="clickNavItem(tab, i, $event)"
        (contextmenu)="contextmenuNavItem(tab, $event)"
        *ngFor="let tab of tabs; let i = index"
      >
        <div
          role="tab"
          [attr.tabIndex]="getTabIndex(tab, i)"
          [attr.aria-disabled]="tab.nzDisabled"
          [attr.aria-selected]="nzSelectedIndex === i && !nzHideAll"
          [attr.aria-controls]="getTabContentId(i)"
          [disabled]="tab.nzDisabled"
          [tab]="tab"
          [active]="nzSelectedIndex === i"
          class="ant-tabs-tab-btn"
          nzTabNavItem
          cdkMonitorElementFocus
        >
          <ng-container *nzStringTemplateOutlet="tab.label; context: { visible: true }">{{ tab.label }}</ng-container>
          <button
            nz-tab-close-button
            *ngIf="tab.nzClosable && closable && !tab.nzDisabled"
            [closeIcon]="tab.nzCloseIcon"
            (click)="onClose(i, $event)"
          ></button>
        </div>
      </div>
    </nz-tabs-nav>
    <div class="ant-tabs-content-holder">
      <div
        class="ant-tabs-content"
        [class.ant-tabs-content-top]="nzTabPosition === 'top'"
        [class.ant-tabs-content-bottom]="nzTabPosition === 'bottom'"
        [class.ant-tabs-content-left]="nzTabPosition === 'left'"
        [class.ant-tabs-content-right]="nzTabPosition === 'right'"
        [class.ant-tabs-content-animated]="tabPaneAnimated"
        [style.margin-left]="getTabContentMarginLeft()"
        [style.margin-right]="getTabContentMarginRight()"
      >
        <div
          nz-tab-body
          *ngFor="let tab of tabs; let i = index"
          [active]="nzSelectedIndex == i && !nzHideAll"
          [content]="tab.content"
          [forceRender]="tab.nzForceRender"
          [tabPaneAnimated]="tabPaneAnimated"
        ></div>
      </div>
    </div>
  `,
                host: {
                    class: 'ant-tabs',
                    '[class.ant-tabs-card]': `nzType === 'card' || nzType === 'editable-card'`,
                    '[class.ant-tabs-editable]': `nzType === 'editable-card'`,
                    '[class.ant-tabs-editable-card]': `nzType === 'editable-card'`,
                    '[class.ant-tabs-centered]': `nzCentered`,
                    '[class.ant-tabs-rtl]': `dir === 'rtl'`,
                    '[class.ant-tabs-top]': `nzTabPosition === 'top'`,
                    '[class.ant-tabs-bottom]': `nzTabPosition === 'bottom'`,
                    '[class.ant-tabs-left]': `nzTabPosition === 'left'`,
                    '[class.ant-tabs-right]': `nzTabPosition === 'right'`,
                    '[class.ant-tabs-default]': `nzSize === 'default'`,
                    '[class.ant-tabs-small]': `nzSize === 'small'`,
                    '[class.ant-tabs-large]': `nzSize === 'large'`
                }
            }]
    }], function () { return [{ type: ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_21__["NzConfigService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }] }]; }, { nzTabPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzCanDeactivate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzAddIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzTabBarStyle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzAnimated: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzTabBarGutter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzHideAdd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzCentered: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzHideAll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzLinkRouter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzLinkExact: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzSelectChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], nzSelectedIndexChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], nzTabListScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], nzClose: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], nzAdd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], allTabs: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
            args: [NzTabComponent, { descendants: true }]
        }], nzSelectedIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzTabBarExtraContent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], tabNavBarRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [NzTabNavBarComponent, { static: false }]
        }] }); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
const DIRECTIVES = [
    NzTabSetComponent,
    NzTabComponent,
    NzTabNavBarComponent,
    NzTabNavItemDirective,
    NzTabsInkBarDirective,
    NzTabScrollListDirective,
    NzTabNavOperationComponent,
    NzTabAddButtonComponent,
    NzTabCloseButtonComponent,
    NzTabDirective,
    NzTabBodyComponent,
    NzTabLinkDirective,
    NzTabLinkTemplateDirective
];
class NzTabsModule {
}
NzTabsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NzTabsModule });
NzTabsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NzTabsModule_Factory(t) { return new (t || NzTabsModule)(); }, imports: [[
            _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["BidiModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_17__["CommonModule"],
            _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_14__["ObserversModule"],
            ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_20__["NzIconModule"],
            ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_18__["NzOutletModule"],
            _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_15__["PlatformModule"],
            _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["A11yModule"],
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_16__["CdkScrollableModule"],
            ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_19__["NzDropDownModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NzTabsModule, { declarations: function () { return [NzTabSetComponent, NzTabComponent, NzTabNavBarComponent, NzTabNavItemDirective, NzTabsInkBarDirective, NzTabScrollListDirective, NzTabNavOperationComponent, NzTabAddButtonComponent, NzTabCloseButtonComponent, NzTabDirective, NzTabBodyComponent, NzTabLinkDirective, NzTabLinkTemplateDirective]; }, imports: function () { return [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["BidiModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_17__["CommonModule"],
        _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_14__["ObserversModule"],
        ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_20__["NzIconModule"],
        ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_18__["NzOutletModule"],
        _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_15__["PlatformModule"],
        _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["A11yModule"],
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_16__["CdkScrollableModule"],
        ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_19__["NzDropDownModule"]]; }, exports: function () { return [NzTabSetComponent, NzTabComponent, NzTabNavBarComponent, NzTabNavItemDirective, NzTabsInkBarDirective, NzTabScrollListDirective, NzTabNavOperationComponent, NzTabAddButtonComponent, NzTabCloseButtonComponent, NzTabDirective, NzTabBodyComponent, NzTabLinkDirective, NzTabLinkTemplateDirective]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzTabsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [DIRECTIVES],
                exports: [DIRECTIVES],
                imports: [
                    _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["BidiModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_17__["CommonModule"],
                    _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_14__["ObserversModule"],
                    ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_20__["NzIconModule"],
                    ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_18__["NzOutletModule"],
                    _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_15__["PlatformModule"],
                    _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["A11yModule"],
                    _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_16__["CdkScrollableModule"],
                    ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_19__["NzDropDownModule"]
                ]
            }]
    }], null, null); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=ng-zorro-antd-tabs.js.map

/***/ })

};;
//# sourceMappingURL=card-index-module~mention-index-module~page-header-index-module~tabs-index-module.js.map