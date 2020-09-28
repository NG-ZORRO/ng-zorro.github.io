exports.ids = ["drawer-index-module~resizable-index-module"];
exports.modules = {

/***/ "2WCl":
/*!***************************************************************!*\
  !*** ./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-drawer.js ***!
  \***************************************************************/
/*! exports provided: DRAWER_ANIMATE_DURATION, DrawerBuilderForService, NzDrawerComponent, NzDrawerModule, NzDrawerRef, NzDrawerService, NzDrawerServiceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DRAWER_ANIMATE_DURATION", function() { return DRAWER_ANIMATE_DURATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawerBuilderForService", function() { return DrawerBuilderForService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDrawerComponent", function() { return NzDrawerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDrawerModule", function() { return NzDrawerModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDrawerRef", function() { return NzDrawerRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDrawerService", function() { return NzDrawerService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDrawerServiceModule", function() { return NzDrawerServiceModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "zOht");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/a11y */ "u47x");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/keycodes */ "FtGj");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/overlay */ "rDax");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/portal */ "+rOU");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/core/config */ "8IHs");
/* harmony import */ var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/core/util */ "d1+9");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/core/no-animation */ "H3Kp");
/* harmony import */ var ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/core/outlet */ "fwD0");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/icon */ "MOHP");















/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */










const _c0 = ["drawerTemplate"];
function NzDrawerComponent_ng_template_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function NzDrawerComponent_ng_template_0_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r8.maskClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngStyle", ctx_r2.nzMaskStyle);
} }
function NzDrawerComponent_ng_template_0_div_5_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("innerHTML", ctx_r12.nzTitle, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeHtml"]);
} }
function NzDrawerComponent_ng_template_0_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, NzDrawerComponent_ng_template_0_div_5_div_1_ng_container_1_Template, 2, 1, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r10.nzTitle);
} }
function NzDrawerComponent_ng_template_0_div_5_button_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const closeIcon_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzType", closeIcon_r14);
} }
function NzDrawerComponent_ng_template_0_div_5_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function NzDrawerComponent_ng_template_0_div_5_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3); return ctx_r15.closeClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, NzDrawerComponent_ng_template_0_div_5_button_2_ng_container_1_Template, 2, 1, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r11.nzCloseIcon);
} }
function NzDrawerComponent_ng_template_0_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, NzDrawerComponent_ng_template_0_div_5_div_1_Template, 2, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, NzDrawerComponent_ng_template_0_div_5_button_2_Template, 2, 1, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("ant-drawer-header", !!ctx_r3.nzTitle)("ant-drawer-header-no-title", !ctx_r3.nzTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r3.nzTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r3.nzClosable);
} }
function NzDrawerComponent_ng_template_0_ng_template_7_Template(rf, ctx) { }
function NzDrawerComponent_ng_template_0_ng_container_8_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainer"](0);
} }
function NzDrawerComponent_ng_template_0_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, NzDrawerComponent_ng_template_0_ng_container_8_ng_container_1_Template, 1, 0, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngTemplateOutlet", ctx_r5.nzContent)("ngTemplateOutletContext", ctx_r5.templateContext);
} }
function NzDrawerComponent_ng_template_0_ng_content_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵprojection"](0, 0, ["*ngIf", "!nzContent"]);
} }
function NzDrawerComponent_ng_template_0_div_10_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("innerHTML", ctx_r18.nzFooter, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeHtml"]);
} }
function NzDrawerComponent_ng_template_0_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, NzDrawerComponent_ng_template_0_div_10_ng_container_1_Template, 2, 1, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r7.nzFooter);
} }
function NzDrawerComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, NzDrawerComponent_ng_template_0_div_1_Template, 1, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, NzDrawerComponent_ng_template_0_div_5_Template, 3, 6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, NzDrawerComponent_ng_template_0_ng_template_7_Template, 0, 0, "ng-template", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, NzDrawerComponent_ng_template_0_ng_container_8_Template, 2, 2, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, NzDrawerComponent_ng_template_0_ng_content_9_Template, 1, 0, "ng-content", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, NzDrawerComponent_ng_template_0_div_10_Template, 2, 1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("transform", ctx_r1.offsetTransform)("transition", ctx_r1.placementChanging ? "none" : null)("z-index", ctx_r1.nzZIndex);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("ant-drawer-open", ctx_r1.isOpen)("no-mask", !ctx_r1.nzMask)("ant-drawer-top", ctx_r1.nzPlacement === "top")("ant-drawer-bottom", ctx_r1.nzPlacement === "bottom")("ant-drawer-right", ctx_r1.nzPlacement === "right")("ant-drawer-left", ctx_r1.nzPlacement === "left");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzNoAnimation", ctx_r1.nzNoAnimation);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.nzMask);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMapInterpolate1"]("ant-drawer-content-wrapper ", ctx_r1.nzWrapClassName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("width", ctx_r1.width)("height", ctx_r1.height)("transform", ctx_r1.transform)("transition", ctx_r1.placementChanging ? "none" : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("height", ctx_r1.isLeftOrRight ? "100%" : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.nzTitle || ctx_r1.nzClosable);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngStyle", ctx_r1.nzBodyStyle);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.isTemplateRef(ctx_r1.nzContent));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r1.nzContent);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.nzFooter);
} }
const _c1 = ["*"];
class NzDrawerRef {
}

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
const DRAWER_ANIMATE_DURATION = 300;
const NZ_CONFIG_MODULE_NAME = 'drawer';
class NzDrawerComponent extends NzDrawerRef {
    constructor(document, nzConfigService, renderer, overlay, injector, changeDetectorRef, focusTrapFactory, viewContainerRef, overlayKeyboardDispatcher) {
        super();
        this.document = document;
        this.nzConfigService = nzConfigService;
        this.renderer = renderer;
        this.overlay = overlay;
        this.injector = injector;
        this.changeDetectorRef = changeDetectorRef;
        this.focusTrapFactory = focusTrapFactory;
        this.viewContainerRef = viewContainerRef;
        this.overlayKeyboardDispatcher = overlayKeyboardDispatcher;
        this._nzModuleName = NZ_CONFIG_MODULE_NAME;
        this.nzCloseIcon = 'close';
        this.nzClosable = true;
        this.nzMaskClosable = true;
        this.nzMask = true;
        this.nzCloseOnNavigation = true;
        this.nzNoAnimation = false;
        this.nzKeyboard = true;
        this.nzPlacement = 'right';
        this.nzMaskStyle = {};
        this.nzBodyStyle = {};
        this.nzWidth = 256;
        this.nzHeight = 256;
        this.nzZIndex = 1000;
        this.nzOffsetX = 0;
        this.nzOffsetY = 0;
        this.componentInstance = null;
        this.nzOnViewInit = new _angular_core__WEBPACK_IMPORTED_MODULE_6__["EventEmitter"]();
        this.nzOnClose = new _angular_core__WEBPACK_IMPORTED_MODULE_6__["EventEmitter"]();
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
        this.placementChanging = false;
        this.placementChangeTimeoutId = -1;
        this.isOpen = false;
        this.templateContext = {
            $implicit: undefined,
            drawerRef: this
        };
        this.nzAfterOpen = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
        this.nzAfterClose = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
    }
    set nzVisible(value) {
        this.isOpen = value;
    }
    get nzVisible() {
        return this.isOpen;
    }
    get offsetTransform() {
        if (!this.isOpen || this.nzOffsetX + this.nzOffsetY === 0) {
            return null;
        }
        switch (this.nzPlacement) {
            case 'left':
                return `translateX(${this.nzOffsetX}px)`;
            case 'right':
                return `translateX(-${this.nzOffsetX}px)`;
            case 'top':
                return `translateY(${this.nzOffsetY}px)`;
            case 'bottom':
                return `translateY(-${this.nzOffsetY}px)`;
        }
    }
    get transform() {
        if (this.isOpen) {
            return null;
        }
        switch (this.nzPlacement) {
            case 'left':
                return `translateX(-100%)`;
            case 'right':
                return `translateX(100%)`;
            case 'top':
                return `translateY(-100%)`;
            case 'bottom':
                return `translateY(100%)`;
        }
    }
    get width() {
        return this.isLeftOrRight ? Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_8__["toCssPixel"])(this.nzWidth) : null;
    }
    get height() {
        return !this.isLeftOrRight ? Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_8__["toCssPixel"])(this.nzHeight) : null;
    }
    get isLeftOrRight() {
        return this.nzPlacement === 'left' || this.nzPlacement === 'right';
    }
    get afterOpen() {
        return this.nzAfterOpen.asObservable();
    }
    get afterClose() {
        return this.nzAfterClose.asObservable();
    }
    isTemplateRef(value) {
        return value instanceof _angular_core__WEBPACK_IMPORTED_MODULE_6__["TemplateRef"];
    }
    ngOnInit() {
        this.attachOverlay();
        this.updateOverlayStyle();
        this.updateBodyOverflow();
        this.templateContext = { $implicit: this.nzContentParams, drawerRef: this };
        this.changeDetectorRef.detectChanges();
    }
    ngAfterViewInit() {
        this.attachBodyContent();
        setTimeout(() => {
            this.nzOnViewInit.emit();
        });
    }
    ngOnChanges(changes) {
        const { nzPlacement, nzVisible } = changes;
        if (nzVisible) {
            const value = changes.nzVisible.currentValue;
            if (value) {
                this.open();
            }
            else {
                this.close();
            }
        }
        if (nzPlacement && !nzPlacement.isFirstChange()) {
            this.triggerPlacementChangeCycleOnce();
        }
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
        clearTimeout(this.placementChangeTimeoutId);
        this.disposeOverlay();
    }
    getAnimationDuration() {
        return this.nzNoAnimation ? 0 : DRAWER_ANIMATE_DURATION;
    }
    // Disable the transition animation temporarily when the placement changing
    triggerPlacementChangeCycleOnce() {
        if (!this.nzNoAnimation) {
            this.placementChanging = true;
            this.changeDetectorRef.markForCheck();
            clearTimeout(this.placementChangeTimeoutId);
            this.placementChangeTimeoutId = setTimeout(() => {
                this.placementChanging = false;
                this.changeDetectorRef.markForCheck();
            }, this.getAnimationDuration());
        }
    }
    close(result) {
        this.isOpen = false;
        this.updateOverlayStyle();
        this.overlayKeyboardDispatcher.remove(this.overlayRef);
        this.changeDetectorRef.detectChanges();
        setTimeout(() => {
            this.updateBodyOverflow();
            this.restoreFocus();
            this.nzAfterClose.next(result);
            this.nzAfterClose.complete();
            this.componentInstance = null;
        }, this.getAnimationDuration());
    }
    open() {
        this.attachOverlay();
        this.isOpen = true;
        this.overlayKeyboardDispatcher.add(this.overlayRef);
        this.updateOverlayStyle();
        this.updateBodyOverflow();
        this.savePreviouslyFocusedElement();
        this.trapFocus();
        this.changeDetectorRef.detectChanges();
        setTimeout(() => {
            this.nzAfterOpen.next();
        }, this.getAnimationDuration());
    }
    getContentComponent() {
        return this.componentInstance;
    }
    closeClick() {
        this.nzOnClose.emit();
    }
    maskClick() {
        if (this.nzMaskClosable && this.nzMask) {
            this.nzOnClose.emit();
        }
    }
    attachBodyContent() {
        this.bodyPortalOutlet.dispose();
        if (this.nzContent instanceof _angular_core__WEBPACK_IMPORTED_MODULE_6__["Type"]) {
            const childInjector = _angular_core__WEBPACK_IMPORTED_MODULE_6__["Injector"].create({
                parent: this.injector,
                providers: [{ provide: NzDrawerRef, useValue: this }]
            });
            const componentPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["ComponentPortal"](this.nzContent, null, childInjector);
            const componentRef = this.bodyPortalOutlet.attachComponentPortal(componentPortal);
            this.componentInstance = componentRef.instance;
            Object.assign(componentRef.instance, this.nzContentParams);
            componentRef.changeDetectorRef.detectChanges();
        }
    }
    attachOverlay() {
        if (!this.overlayRef) {
            this.portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["TemplatePortal"](this.drawerTemplate, this.viewContainerRef);
            this.overlayRef = this.overlay.create(this.getOverlayConfig());
        }
        if (this.overlayRef && !this.overlayRef.hasAttached()) {
            this.overlayRef.attach(this.portal);
            this.overlayRef.keydownEvents()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this.destroy$))
                .subscribe((event) => {
                if (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["ESCAPE"] && this.isOpen && this.nzKeyboard) {
                    this.nzOnClose.emit();
                }
            });
            this.overlayRef
                .detachments()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this.destroy$))
                .subscribe(() => {
                this.disposeOverlay();
            });
        }
    }
    disposeOverlay() {
        var _a;
        (_a = this.overlayRef) === null || _a === void 0 ? void 0 : _a.dispose();
        this.overlayRef = null;
    }
    getOverlayConfig() {
        return new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["OverlayConfig"]({
            disposeOnNavigation: this.nzCloseOnNavigation,
            positionStrategy: this.overlay.position().global(),
            scrollStrategy: this.overlay.scrollStrategies.block()
        });
    }
    updateOverlayStyle() {
        if (this.overlayRef && this.overlayRef.overlayElement) {
            this.renderer.setStyle(this.overlayRef.overlayElement, 'pointer-events', this.isOpen ? 'auto' : 'none');
        }
    }
    updateBodyOverflow() {
        if (this.overlayRef) {
            if (this.isOpen) {
                this.overlayRef.getConfig().scrollStrategy.enable();
            }
            else {
                this.overlayRef.getConfig().scrollStrategy.disable();
            }
        }
    }
    savePreviouslyFocusedElement() {
        if (this.document && !this.previouslyFocusedElement) {
            this.previouslyFocusedElement = this.document.activeElement;
            // We need the extra check, because IE's svg element has no blur method.
            if (this.previouslyFocusedElement && typeof this.previouslyFocusedElement.blur === 'function') {
                this.previouslyFocusedElement.blur();
            }
        }
    }
    trapFocus() {
        if (!this.focusTrap && this.overlayRef && this.overlayRef.overlayElement) {
            this.focusTrap = this.focusTrapFactory.create(this.overlayRef.overlayElement);
            this.focusTrap.focusInitialElement();
        }
    }
    restoreFocus() {
        // We need the extra check, because IE can set the `activeElement` to null in some cases.
        if (this.previouslyFocusedElement && typeof this.previouslyFocusedElement.focus === 'function') {
            this.previouslyFocusedElement.focus();
        }
        if (this.focusTrap) {
            this.focusTrap.destroy();
        }
    }
}
/** @nocollapse */
NzDrawerComponent.ɵfac = function NzDrawerComponent_Factory(t) { return new (t || NzDrawerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_7__["NzConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["Overlay"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["FocusTrapFactory"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["OverlayKeyboardDispatcher"])); };
/** @nocollapse */
NzDrawerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: NzDrawerComponent, selectors: [["nz-drawer"]], viewQuery: function NzDrawerComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstaticViewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["CdkPortalOutlet"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.drawerTemplate = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.bodyPortalOutlet = _t.first);
    } }, inputs: { nzCloseIcon: "nzCloseIcon", nzClosable: "nzClosable", nzMaskClosable: "nzMaskClosable", nzMask: "nzMask", nzCloseOnNavigation: "nzCloseOnNavigation", nzNoAnimation: "nzNoAnimation", nzKeyboard: "nzKeyboard", nzPlacement: "nzPlacement", nzMaskStyle: "nzMaskStyle", nzBodyStyle: "nzBodyStyle", nzWidth: "nzWidth", nzHeight: "nzHeight", nzZIndex: "nzZIndex", nzOffsetX: "nzOffsetX", nzOffsetY: "nzOffsetY", nzVisible: "nzVisible", nzContent: "nzContent", nzTitle: "nzTitle", nzFooter: "nzFooter", nzWrapClassName: "nzWrapClassName" }, outputs: { nzOnViewInit: "nzOnViewInit", nzOnClose: "nzOnClose" }, exportAs: ["nzDrawer"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c1, decls: 2, vars: 0, consts: [["drawerTemplate", ""], [1, "ant-drawer", 3, "nzNoAnimation"], ["class", "ant-drawer-mask", 3, "ngStyle", "click", 4, "ngIf"], [1, "ant-drawer-content"], [1, "ant-drawer-wrapper-body"], [3, "ant-drawer-header", "ant-drawer-header-no-title", 4, "ngIf"], [1, "ant-drawer-body", 3, "ngStyle"], ["cdkPortalOutlet", ""], [4, "ngIf"], ["class", "ant-drawer-footer", 4, "ngIf"], [1, "ant-drawer-mask", 3, "ngStyle", "click"], ["class", "ant-drawer-title", 4, "ngIf"], ["aria-label", "Close", "class", "ant-drawer-close", "style", "--scroll-bar: 0px;", 3, "click", 4, "ngIf"], [1, "ant-drawer-title"], [4, "nzStringTemplateOutlet"], [3, "innerHTML"], ["aria-label", "Close", 1, "ant-drawer-close", 2, "--scroll-bar", "0px", 3, "click"], ["nz-icon", "", 3, "nzType"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "ant-drawer-footer"]], template: function NzDrawerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, NzDrawerComponent_ng_template_0_Template, 11, 38, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
    } }, directives: [ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_11__["NzNoAnimationDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgStyle"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["CdkPortalOutlet"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_12__["NzStringTemplateOutletDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_13__["NzIconDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgTemplateOutlet"]], encapsulation: 2, changeDetection: 0 });
NzDrawerComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"],] }] },
    { type: ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_7__["NzConfigService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Renderer2"] },
    { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["Overlay"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Injector"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ChangeDetectorRef"] },
    { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["FocusTrapFactory"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewContainerRef"] },
    { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["OverlayKeyboardDispatcher"] }
];
NzDrawerComponent.propDecorators = {
    nzContent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
    nzCloseIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
    nzClosable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
    nzMaskClosable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
    nzMask: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
    nzCloseOnNavigation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
    nzNoAnimation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
    nzKeyboard: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
    nzTitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
    nzFooter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
    nzPlacement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
    nzMaskStyle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
    nzBodyStyle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
    nzWrapClassName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
    nzWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
    nzHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
    nzZIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
    nzOffsetX: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
    nzOffsetY: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
    nzVisible: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"] }],
    nzOnViewInit: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Output"] }],
    nzOnClose: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Output"] }],
    drawerTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"], args: ['drawerTemplate', { static: true },] }],
    bodyPortalOutlet: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"], args: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["CdkPortalOutlet"], { static: false },] }]
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_8__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], NzDrawerComponent.prototype, "nzClosable", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_7__["WithConfig"])(),
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_8__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], NzDrawerComponent.prototype, "nzMaskClosable", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_7__["WithConfig"])(),
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_8__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], NzDrawerComponent.prototype, "nzMask", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_7__["WithConfig"])(),
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_8__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], NzDrawerComponent.prototype, "nzCloseOnNavigation", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_8__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], NzDrawerComponent.prototype, "nzNoAnimation", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_8__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], NzDrawerComponent.prototype, "nzKeyboard", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](NzDrawerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"],
        args: [{
                selector: 'nz-drawer',
                exportAs: 'nzDrawer',
                template: `
    <ng-template #drawerTemplate>
      <div
        class="ant-drawer"
        [nzNoAnimation]="nzNoAnimation"
        [class.ant-drawer-open]="isOpen"
        [class.no-mask]="!nzMask"
        [class.ant-drawer-top]="nzPlacement === 'top'"
        [class.ant-drawer-bottom]="nzPlacement === 'bottom'"
        [class.ant-drawer-right]="nzPlacement === 'right'"
        [class.ant-drawer-left]="nzPlacement === 'left'"
        [style.transform]="offsetTransform"
        [style.transition]="placementChanging ? 'none' : null"
        [style.zIndex]="nzZIndex"
      >
        <div class="ant-drawer-mask" (click)="maskClick()" *ngIf="nzMask" [ngStyle]="nzMaskStyle"></div>
        <div
          class="ant-drawer-content-wrapper {{ nzWrapClassName }}"
          [style.width]="width"
          [style.height]="height"
          [style.transform]="transform"
          [style.transition]="placementChanging ? 'none' : null"
        >
          <div class="ant-drawer-content">
            <div class="ant-drawer-wrapper-body" [style.height]="isLeftOrRight ? '100%' : null">
              <div *ngIf="nzTitle || nzClosable" [class.ant-drawer-header]="!!nzTitle" [class.ant-drawer-header-no-title]="!nzTitle">
                <div *ngIf="nzTitle" class="ant-drawer-title">
                  <ng-container *nzStringTemplateOutlet="nzTitle"><div [innerHTML]="nzTitle"></div></ng-container>
                </div>
                <button *ngIf="nzClosable" (click)="closeClick()" aria-label="Close" class="ant-drawer-close" style="--scroll-bar: 0px;">
                  <ng-container *nzStringTemplateOutlet="nzCloseIcon; let closeIcon">
                    <i nz-icon [nzType]="closeIcon"></i>
                  </ng-container>
                </button>
              </div>
              <div class="ant-drawer-body" [ngStyle]="nzBodyStyle">
                <ng-template cdkPortalOutlet></ng-template>
                <ng-container *ngIf="isTemplateRef(nzContent)">
                  <ng-container *ngTemplateOutlet="$any(nzContent); context: templateContext"></ng-container>
                </ng-container>
                <ng-content *ngIf="!nzContent"></ng-content>
              </div>
              <div *ngIf="nzFooter" class="ant-drawer-footer">
                <ng-container *nzStringTemplateOutlet="nzFooter"><div [innerHTML]="nzFooter"></div></ng-container>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ng-template>
  `,
                preserveWhitespaces: false,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
            }] }, { type: ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_7__["NzConfigService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Renderer2"] }, { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["Overlay"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Injector"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ChangeDetectorRef"] }, { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["FocusTrapFactory"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewContainerRef"] }, { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["OverlayKeyboardDispatcher"] }]; }, { nzCloseIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
        }], nzClosable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
        }], nzMaskClosable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
        }], nzMask: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
        }], nzCloseOnNavigation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
        }], nzNoAnimation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
        }], nzKeyboard: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
        }], nzPlacement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
        }], nzMaskStyle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
        }], nzBodyStyle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
        }], nzWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
        }], nzHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
        }], nzZIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
        }], nzOffsetX: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
        }], nzOffsetY: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
        }], nzOnViewInit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Output"]
        }], nzOnClose: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Output"]
        }], nzVisible: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
        }], nzContent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
        }], nzTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
        }], nzFooter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
        }], nzWrapClassName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
        }], drawerTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"],
            args: ['drawerTemplate', { static: true }]
        }], bodyPortalOutlet: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"],
            args: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["CdkPortalOutlet"], { static: false }]
        }] }); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzDrawerServiceModule {
}
/** @nocollapse */
NzDrawerServiceModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: NzDrawerServiceModule });
/** @nocollapse */
NzDrawerServiceModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ factory: function NzDrawerServiceModule_Factory(t) { return new (t || NzDrawerServiceModule)(); } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](NzDrawerServiceModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"]
    }], null, null); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzDrawerModule {
}
/** @nocollapse */
NzDrawerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: NzDrawerModule });
/** @nocollapse */
NzDrawerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ factory: function NzDrawerModule_Factory(t) { return new (t || NzDrawerModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["OverlayModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_13__["NzIconModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_12__["NzOutletModule"], ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_11__["NzNoAnimationModule"], NzDrawerServiceModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](NzDrawerModule, { declarations: function () { return [NzDrawerComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["OverlayModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_13__["NzIconModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_12__["NzOutletModule"], ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_11__["NzNoAnimationModule"], NzDrawerServiceModule]; }, exports: function () { return [NzDrawerComponent]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](NzDrawerModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["OverlayModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_13__["NzIconModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_12__["NzOutletModule"], ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_11__["NzNoAnimationModule"], NzDrawerServiceModule],
                exports: [NzDrawerComponent],
                declarations: [NzDrawerComponent],
                entryComponents: [NzDrawerComponent]
            }]
    }], null, null); })();

class DrawerBuilderForService {
    constructor(overlay, options) {
        this.overlay = overlay;
        this.options = options;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
        /** pick {@link NzDrawerOptions.nzOnCancel} and omit this option */
        const _a = this.options, { nzOnCancel } = _a, componentOption = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["nzOnCancel"]);
        this.overlayRef = this.overlay.create();
        this.drawerRef = this.overlayRef.attach(new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["ComponentPortal"](NzDrawerComponent)).instance;
        this.updateOptions(componentOption);
        // Prevent repeatedly open drawer when tap focus element.
        this.drawerRef.savePreviouslyFocusedElement();
        this.drawerRef.nzOnViewInit.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this.unsubscribe$)).subscribe(() => {
            this.drawerRef.open();
        });
        this.drawerRef.nzOnClose.subscribe(() => {
            if (nzOnCancel) {
                nzOnCancel().then(canClose => {
                    if (canClose !== false) {
                        this.drawerRef.close();
                    }
                });
            }
            else {
                this.drawerRef.close();
            }
        });
        this.drawerRef.afterClose.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this.unsubscribe$)).subscribe(() => {
            this.overlayRef.dispose();
            this.drawerRef = null;
            this.unsubscribe$.next();
            this.unsubscribe$.complete();
        });
    }
    getInstance() {
        return this.drawerRef;
    }
    updateOptions(options) {
        Object.assign(this.drawerRef, options);
    }
}
class NzDrawerService {
    constructor(overlay) {
        this.overlay = overlay;
    }
    create(options) {
        return new DrawerBuilderForService(this.overlay, options).getInstance();
    }
}
/** @nocollapse */
NzDrawerService.ɵfac = function NzDrawerService_Factory(t) { return new (t || NzDrawerService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["Overlay"])); };
NzDrawerService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"])({ factory: function NzDrawerService_Factory() { return new NzDrawerService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"])(_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["Overlay"])); }, token: NzDrawerService, providedIn: NzDrawerServiceModule });
NzDrawerService.ctorParameters = () => [
    { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["Overlay"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](NzDrawerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Injectable"],
        args: [{ providedIn: NzDrawerServiceModule }]
    }], function () { return [{ type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["Overlay"] }]; }, null); })();

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



//# sourceMappingURL=ng-zorro-antd-drawer.js.map

/***/ })

};;
//# sourceMappingURL=drawer-index-module~resizable-index-module.js.map