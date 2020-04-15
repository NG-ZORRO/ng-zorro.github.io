exports.ids = ["carousel-index-module~code-editor-index-module~space-index-module"];
exports.modules = {

/***/ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-carousel.js":
/*!*****************************************************************!*\
  !*** ./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-carousel.js ***!
  \*****************************************************************/
/*! exports provided: NZ_CAROUSEL_CUSTOM_STRATEGIES, NzCarouselBaseStrategy, NzCarouselComponent, NzCarouselContentDirective, NzCarouselModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NZ_CAROUSEL_CUSTOM_STRATEGIES", function() { return NZ_CAROUSEL_CUSTOM_STRATEGIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzCarouselBaseStrategy", function() { return NzCarouselBaseStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzCarouselComponent", function() { return NzCarouselComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzCarouselContentDirective", function() { return NzCarouselContentDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzCarouselModule", function() { return NzCarouselModule; });
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/platform.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/keycodes.js");
/* harmony import */ var ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/core/config */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-config.js");
/* harmony import */ var ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/core/services */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-services.js");
/* harmony import */ var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/core/util */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-util.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");











/**
 * @fileoverview added by tsickle
 * Generated from: carousel-content.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */






const _c0 = ["slickList"];
const _c1 = ["slickTrack"];
function NzCarouselComponent_ul_6_li_1_ng_template_1_Template(rf, ctx) { }
const _c2 = function (a0) { return { $implicit: a0 }; };
function NzCarouselComponent_ul_6_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NzCarouselComponent_ul_6_li_1_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11); const i_r8 = ctx.index; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r10.goTo(i_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzCarouselComponent_ul_6_li_1_ng_template_1_Template, 0, 0, "ng-template", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const content_r7 = ctx.$implicit;
    const i_r8 = ctx.index;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("slick-active", content_r7.isActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", ctx_r6.nzDotRender || _r4)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](4, _c2, i_r8));
} }
function NzCarouselComponent_ul_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ul", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzCarouselComponent_ul_6_li_1_Template, 2, 6, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("slick-dots-top", ctx_r3.nzDotPosition === "top")("slick-dots-bottom", ctx_r3.nzDotPosition === "bottom")("slick-dots-left", ctx_r3.nzDotPosition === "left")("slick-dots-right", ctx_r3.nzDotPosition === "right");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r3.carouselContents);
} }
function NzCarouselComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const index_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](index_r12 + 1);
} }
const _c3 = ["*"];
class NzCarouselContentDirective {
    /**
     * @param {?} elementRef
     * @param {?} renderer
     */
    constructor(elementRef, renderer) {
        this.renderer = renderer;
        this._active = false;
        this.el = elementRef.nativeElement;
        this.renderer.addClass(elementRef.nativeElement, 'slick-slide');
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set isActive(value) {
        this._active = value;
        if (this.isActive) {
            this.renderer.addClass(this.el, 'slick-active');
        }
        else {
            this.renderer.removeClass(this.el, 'slick-active');
        }
    }
    /**
     * @return {?}
     */
    get isActive() {
        return this._active;
    }
}
NzCarouselContentDirective.ɵfac = function NzCarouselContentDirective_Factory(t) { return new (t || NzCarouselContentDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"])); };
NzCarouselContentDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: NzCarouselContentDirective, selectors: [["", "nz-carousel-content", ""]], exportAs: ["nzCarouselContent"] });
/** @nocollapse */
NzCarouselContentDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"] }
];
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: strategies/base-strategy.ts
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
 */
class NzCarouselBaseStrategy {
    /**
     * @param {?} carouselComponent
     * @param {?} cdr
     * @param {?} renderer
     */
    constructor(carouselComponent, cdr, renderer) {
        this.cdr = cdr;
        this.renderer = renderer;
        this.carouselComponent = carouselComponent;
    }
    /**
     * @protected
     * @return {?}
     */
    get maxIndex() {
        return this.length - 1;
    }
    /**
     * @protected
     * @return {?}
     */
    get firstEl() {
        return this.contents[0].el;
    }
    /**
     * @protected
     * @return {?}
     */
    get lastEl() {
        return this.contents[this.maxIndex].el;
    }
    /**
     * Initialize dragging sequences.
     * @param {?} contents
     * @return {?}
     */
    withCarouselContents(contents) {
        // TODO: carousel and its contents should be separated.
        /** @type {?} */
        const carousel = (/** @type {?} */ (this.carouselComponent));
        /** @type {?} */
        const rect = carousel.el.getBoundingClientRect();
        this.slickListEl = carousel.slickListEl;
        this.slickTrackEl = carousel.slickTrackEl;
        this.unitWidth = rect.width;
        this.unitHeight = rect.height;
        this.contents = contents ? contents.toArray() : [];
        this.length = this.contents.length;
    }
    /**
     * When user drag the carousel component.
     * \@optional
     * @param {?} _vector
     * @return {?}
     */
    dragging(_vector) { }
    /**
     * Destroy a scroll strategy.
     * @return {?}
     */
    dispose() { }
    /**
     * @protected
     * @param {?} f
     * @param {?} t
     * @return {?}
     */
    getFromToInBoundary(f, t) {
        /** @type {?} */
        const length = this.maxIndex + 1;
        return { from: (f + length) % length, to: (t + length) % length };
    }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: strategies/opacity-strategy.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzCarouselOpacityStrategy extends NzCarouselBaseStrategy {
    /**
     * @param {?} contents
     * @return {?}
     */
    withCarouselContents(contents) {
        super.withCarouselContents(contents);
        if (this.contents) {
            this.slickTrackEl.style.width = `${this.length * this.unitWidth}px`;
            this.contents.forEach((/**
             * @param {?} content
             * @param {?} i
             * @return {?}
             */
            (content, i) => {
                this.renderer.setStyle(content.el, 'opacity', (/** @type {?} */ (this.carouselComponent)).activeIndex === i ? '1' : '0');
                this.renderer.setStyle(content.el, 'position', 'relative');
                this.renderer.setStyle(content.el, 'width', `${this.unitWidth}px`);
                this.renderer.setStyle(content.el, 'left', `${-this.unitWidth * i}px`);
                this.renderer.setStyle(content.el, 'transition', ['opacity 500ms ease 0s', 'visibility 500ms ease 0s']);
            }));
        }
    }
    /**
     * @param {?} _f
     * @param {?} _t
     * @return {?}
     */
    switch(_f, _t) {
        const { to: t } = this.getFromToInBoundary(_f, _t);
        /** @type {?} */
        const complete$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        this.contents.forEach((/**
         * @param {?} content
         * @param {?} i
         * @return {?}
         */
        (content, i) => {
            this.renderer.setStyle(content.el, 'opacity', t === i ? '1' : '0');
        }));
        setTimeout((/**
         * @return {?}
         */
        () => {
            complete$.next();
            complete$.complete();
        }), (/** @type {?} */ (this.carouselComponent)).nzTransitionSpeed);
        return complete$;
    }
    /**
     * @return {?}
     */
    dispose() {
        this.contents.forEach((/**
         * @param {?} content
         * @return {?}
         */
        (content) => {
            this.renderer.setStyle(content.el, 'transition', null);
        }));
        super.dispose();
    }
}

/**
 * @fileoverview added by tsickle
 * Generated from: strategies/transform-strategy.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzCarouselTransformStrategy extends NzCarouselBaseStrategy {
    constructor() {
        super(...arguments);
        this.isDragging = false;
        this.isTransitioning = false;
    }
    /**
     * @private
     * @return {?}
     */
    get vertical() {
        return (/** @type {?} */ (this.carouselComponent)).vertical;
    }
    /**
     * @return {?}
     */
    dispose() {
        super.dispose();
        this.renderer.setStyle(this.slickTrackEl, 'transform', null);
    }
    /**
     * @param {?} contents
     * @return {?}
     */
    withCarouselContents(contents) {
        super.withCarouselContents(contents);
        /** @type {?} */
        const carousel = (/** @type {?} */ (this.carouselComponent));
        /** @type {?} */
        const activeIndex = carousel.activeIndex;
        if (this.contents.length) {
            this.renderer.setStyle(this.slickListEl, 'height', `${this.unitHeight}px`);
            if (this.vertical) {
                this.renderer.setStyle(this.slickTrackEl, 'width', `${this.unitWidth}px`);
                this.renderer.setStyle(this.slickTrackEl, 'height', `${this.length * this.unitHeight}px`);
                this.renderer.setStyle(this.slickTrackEl, 'transform', `translate3d(0, ${-activeIndex * this.unitHeight}px, 0)`);
            }
            else {
                this.renderer.setStyle(this.slickTrackEl, 'height', `${this.unitHeight}px`);
                this.renderer.setStyle(this.slickTrackEl, 'width', `${this.length * this.unitWidth}px`);
                this.renderer.setStyle(this.slickTrackEl, 'transform', `translate3d(${-activeIndex * this.unitWidth}px, 0, 0)`);
            }
            this.contents.forEach((/**
             * @param {?} content
             * @return {?}
             */
            (content) => {
                this.renderer.setStyle(content.el, 'position', 'relative');
                this.renderer.setStyle(content.el, 'width', `${this.unitWidth}px`);
                this.renderer.setStyle(content.el, 'height', `${this.unitHeight}px`);
            }));
        }
    }
    /**
     * @param {?} _f
     * @param {?} _t
     * @return {?}
     */
    switch(_f, _t) {
        const { to: t } = this.getFromToInBoundary(_f, _t);
        /** @type {?} */
        const complete$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        this.renderer.setStyle(this.slickTrackEl, 'transition', `transform ${(/** @type {?} */ (this.carouselComponent)).nzTransitionSpeed}ms ease`);
        if (this.vertical) {
            this.verticalTransform(_f, _t);
        }
        else {
            this.horizontalTransform(_f, _t);
        }
        this.isTransitioning = true;
        this.isDragging = false;
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.renderer.setStyle(this.slickTrackEl, 'transition', null);
            this.contents.forEach((/**
             * @param {?} content
             * @return {?}
             */
            (content) => {
                this.renderer.setStyle(content.el, this.vertical ? 'top' : 'left', null);
            }));
            if (this.vertical) {
                this.renderer.setStyle(this.slickTrackEl, 'transform', `translate3d(0, ${-t * this.unitHeight}px, 0)`);
            }
            else {
                this.renderer.setStyle(this.slickTrackEl, 'transform', `translate3d(${-t * this.unitWidth}px, 0, 0)`);
            }
            this.isTransitioning = false;
            complete$.next();
            complete$.complete();
        }), (/** @type {?} */ (this.carouselComponent)).nzTransitionSpeed);
        return complete$.asObservable();
    }
    /**
     * @param {?} _vector
     * @return {?}
     */
    dragging(_vector) {
        if (this.isTransitioning) {
            return;
        }
        /** @type {?} */
        const activeIndex = (/** @type {?} */ (this.carouselComponent)).activeIndex;
        if ((/** @type {?} */ (this.carouselComponent)).vertical) {
            if (!this.isDragging && this.length > 2) {
                if (activeIndex === this.maxIndex) {
                    this.prepareVerticalContext(true);
                }
                else if (activeIndex === 0) {
                    this.prepareVerticalContext(false);
                }
            }
            this.renderer.setStyle(this.slickTrackEl, 'transform', `translate3d(0, ${-activeIndex * this.unitHeight + _vector.x}px, 0)`);
        }
        else {
            if (!this.isDragging && this.length > 2) {
                if (activeIndex === this.maxIndex) {
                    this.prepareHorizontalContext(true);
                }
                else if (activeIndex === 0) {
                    this.prepareHorizontalContext(false);
                }
            }
            this.renderer.setStyle(this.slickTrackEl, 'transform', `translate3d(${-activeIndex * this.unitWidth + _vector.x}px, 0, 0)`);
        }
        this.isDragging = true;
    }
    /**
     * @private
     * @param {?} _f
     * @param {?} _t
     * @return {?}
     */
    verticalTransform(_f, _t) {
        const { from: f, to: t } = this.getFromToInBoundary(_f, _t);
        /** @type {?} */
        const needToAdjust = this.length > 2 && _t !== t;
        if (needToAdjust) {
            this.prepareVerticalContext(t < f);
            this.renderer.setStyle(this.slickTrackEl, 'transform', `translate3d(0, ${-_t * this.unitHeight}px, 0)`);
        }
        else {
            this.renderer.setStyle(this.slickTrackEl, 'transform', `translate3d(0, ${-t * this.unitHeight}px, 0`);
        }
    }
    /**
     * @private
     * @param {?} _f
     * @param {?} _t
     * @return {?}
     */
    horizontalTransform(_f, _t) {
        const { from: f, to: t } = this.getFromToInBoundary(_f, _t);
        /** @type {?} */
        const needToAdjust = this.length > 2 && _t !== t;
        if (needToAdjust) {
            this.prepareHorizontalContext(t < f);
            this.renderer.setStyle(this.slickTrackEl, 'transform', `translate3d(${-_t * this.unitWidth}px, 0, 0)`);
        }
        else {
            this.renderer.setStyle(this.slickTrackEl, 'transform', `translate3d(${-t * this.unitWidth}px, 0, 0`);
        }
    }
    /**
     * @private
     * @param {?} lastToFirst
     * @return {?}
     */
    prepareVerticalContext(lastToFirst) {
        if (lastToFirst) {
            this.renderer.setStyle(this.firstEl, 'top', `${this.length * this.unitHeight}px`);
            this.renderer.setStyle(this.lastEl, 'top', null);
        }
        else {
            this.renderer.setStyle(this.firstEl, 'top', null);
            this.renderer.setStyle(this.lastEl, 'top', `${-this.unitHeight * this.length}px`);
        }
    }
    /**
     * @private
     * @param {?} lastToFirst
     * @return {?}
     */
    prepareHorizontalContext(lastToFirst) {
        if (lastToFirst) {
            this.renderer.setStyle(this.firstEl, 'left', `${this.length * this.unitWidth}px`);
            this.renderer.setStyle(this.lastEl, 'left', null);
        }
        else {
            this.renderer.setStyle(this.firstEl, 'left', null);
            this.renderer.setStyle(this.lastEl, 'left', `${-this.unitWidth * this.length}px`);
        }
    }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: typings.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function NzCarouselComponentAsSource() { }
if (false) {}
/**
 * @record
 */
function NzCarouselStrategyRegistryItem() { }
if (false) {}
/** @type {?} */
const NZ_CAROUSEL_CUSTOM_STRATEGIES = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('nz-carousel-custom-strategies');
/**
 * @record
 */
function PointerVector() { }
if (false) {}
/**
 * @record
 */
function FromToInterface() { }
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: carousel.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const NZ_CONFIG_COMPONENT_NAME = 'carousel';
class NzCarouselComponent {
    /**
     * @param {?} elementRef
     * @param {?} nzConfigService
     * @param {?} renderer
     * @param {?} cdr
     * @param {?} platform
     * @param {?} resizeService
     * @param {?} nzDragService
     * @param {?} customStrategies
     */
    constructor(elementRef, nzConfigService, renderer, cdr, platform, resizeService, nzDragService, customStrategies) {
        this.nzConfigService = nzConfigService;
        this.renderer = renderer;
        this.cdr = cdr;
        this.platform = platform;
        this.resizeService = resizeService;
        this.nzDragService = nzDragService;
        this.customStrategies = customStrategies;
        this.nzTransitionSpeed = 500;
        this.nzBeforeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.nzAfterChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.activeIndex = 0;
        this.vertical = false;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        this.gestureRect = null;
        this.pointerDelta = null;
        this.isTransiting = false;
        this.isDragging = false;
        /**
         * Drag carousel.
         */
        this.pointerDown = (/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            if (!this.isDragging && !this.isTransiting && this.nzEnableSwipe) {
                this.clearScheduledTransition();
                this.gestureRect = this.slickListEl.getBoundingClientRect();
                this.nzDragService.requestDraggingSequence(event).subscribe((/**
                 * @param {?} delta
                 * @return {?}
                 */
                delta => {
                    this.pointerDelta = delta;
                    this.isDragging = true;
                    this.strategy.dragging(this.pointerDelta);
                }), (/**
                 * @return {?}
                 */
                () => { }), (/**
                 * @return {?}
                 */
                () => {
                    if (this.nzEnableSwipe && this.isDragging) {
                        /** @type {?} */
                        const xDelta = this.pointerDelta ? this.pointerDelta.x : 0;
                        // Switch to another slide if delta is bigger than third of the width.
                        if (Math.abs(xDelta) > (/** @type {?} */ (this.gestureRect)).width / 3) {
                            this.goTo(xDelta > 0 ? this.activeIndex - 1 : this.activeIndex + 1);
                        }
                        else {
                            this.goTo(this.activeIndex);
                        }
                        this.gestureRect = null;
                        this.pointerDelta = null;
                    }
                    this.isDragging = false;
                }));
            }
        });
        this.renderer.addClass(elementRef.nativeElement, 'ant-carousel');
        this.el = elementRef.nativeElement;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzDotPosition(value) {
        this._dotPosition = value;
        if (value === 'left' || value === 'right') {
            this.vertical = true;
        }
        else {
            this.vertical = false;
        }
    }
    /**
     * @return {?}
     */
    get nzDotPosition() {
        return this._dotPosition;
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.markContentActive(0);
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (!this.platform.isBrowser) {
            return;
        }
        this.slickListEl = this.slickList.nativeElement;
        this.slickTrackEl = this.slickTrack.nativeElement;
        this.carouselContents.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["takeUntil"])(this.destroy$)).subscribe((/**
         * @return {?}
         */
        () => {
            this.markContentActive(0);
            this.syncStrategy();
        }));
        this.resizeService
            .subscribe()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["takeUntil"])(this.destroy$))
            .subscribe((/**
         * @return {?}
         */
        () => {
            this.syncStrategy();
        }));
        this.switchStrategy();
        this.markContentActive(0);
        this.syncStrategy();
        // If embedded in an entry component, it may do initial render at a inappropriate time.
        // ngZone.onStable won't do this trick
        Promise.resolve().then((/**
         * @return {?}
         */
        () => {
            this.syncStrategy();
        }));
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        const { nzEffect, nzDotPosition } = changes;
        if (nzEffect && !nzEffect.isFirstChange()) {
            this.switchStrategy();
            this.markContentActive(0);
            this.syncStrategy();
        }
        if (nzDotPosition && !nzDotPosition.isFirstChange()) {
            this.switchStrategy();
            this.markContentActive(0);
            this.syncStrategy();
        }
        if (!this.nzAutoPlay || !this.nzAutoPlaySpeed) {
            this.clearScheduledTransition();
        }
        else {
            this.scheduleNextTransition();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.clearScheduledTransition();
        if (this.strategy) {
            this.strategy.dispose();
        }
        this.destroy$.next();
        this.destroy$.complete();
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onKeyDown(e) {
        if (e.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__["LEFT_ARROW"]) {
            e.preventDefault();
            this.pre();
        }
        else if (e.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__["RIGHT_ARROW"]) {
            this.next();
            e.preventDefault();
        }
    }
    /**
     * @return {?}
     */
    next() {
        this.goTo(this.activeIndex + 1);
    }
    /**
     * @return {?}
     */
    pre() {
        this.goTo(this.activeIndex - 1);
    }
    /**
     * @param {?} index
     * @return {?}
     */
    goTo(index) {
        if (this.carouselContents && this.carouselContents.length && !this.isTransiting) {
            /** @type {?} */
            const length = this.carouselContents.length;
            /** @type {?} */
            const from = this.activeIndex;
            /** @type {?} */
            const to = (index + length) % length;
            this.isTransiting = true;
            this.nzBeforeChange.emit({ from, to });
            this.strategy.switch(this.activeIndex, index).subscribe((/**
             * @return {?}
             */
            () => {
                this.scheduleNextTransition();
                this.nzAfterChange.emit(index);
                this.isTransiting = false;
            }));
            this.markContentActive(to);
            this.cdr.markForCheck();
        }
    }
    /**
     * @private
     * @return {?}
     */
    switchStrategy() {
        if (this.strategy) {
            this.strategy.dispose();
        }
        // Load custom strategies first.
        /** @type {?} */
        const customStrategy = this.customStrategies ? this.customStrategies.find((/**
         * @param {?} s
         * @return {?}
         */
        s => s.name === this.nzEffect)) : null;
        if (customStrategy) {
            this.strategy = new ((/** @type {?} */ (customStrategy.strategy)))(this, this.cdr, this.renderer);
            return;
        }
        this.strategy =
            this.nzEffect === 'scrollx'
                ? new NzCarouselTransformStrategy(this, this.cdr, this.renderer)
                : new NzCarouselOpacityStrategy(this, this.cdr, this.renderer);
    }
    /**
     * @private
     * @return {?}
     */
    scheduleNextTransition() {
        this.clearScheduledTransition();
        if (this.nzAutoPlay && this.nzAutoPlaySpeed > 0 && this.platform.isBrowser) {
            this.transitionInProgress = setTimeout((/**
             * @return {?}
             */
            () => {
                this.goTo(this.activeIndex + 1);
            }), this.nzAutoPlaySpeed);
        }
    }
    /**
     * @private
     * @return {?}
     */
    clearScheduledTransition() {
        if (this.transitionInProgress) {
            clearTimeout(this.transitionInProgress);
            this.transitionInProgress = null;
        }
    }
    /**
     * @private
     * @param {?} index
     * @return {?}
     */
    markContentActive(index) {
        this.activeIndex = index;
        if (this.carouselContents) {
            this.carouselContents.forEach((/**
             * @param {?} slide
             * @param {?} i
             * @return {?}
             */
            (slide, i) => {
                slide.isActive = index === i;
            }));
        }
        this.cdr.markForCheck();
    }
    /**
     * @private
     * @return {?}
     */
    syncStrategy() {
        if (this.strategy) {
            this.strategy.withCarouselContents(this.carouselContents);
        }
    }
}
NzCarouselComponent.ɵfac = function NzCarouselComponent_Factory(t) { return new (t || NzCarouselComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_5__["NzConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_6__["NzResizeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_6__["NzDragService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](NZ_CAROUSEL_CUSTOM_STRATEGIES, 8)); };
NzCarouselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NzCarouselComponent, selectors: [["nz-carousel"]], contentQueries: function NzCarouselComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, NzCarouselContentDirective, false);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.carouselContents = _t);
    } }, viewQuery: function NzCarouselComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.slickList = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.slickTrack = _t.first);
    } }, hostVars: 2, hostBindings: function NzCarouselComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("ant-carousel-vertical", ctx.vertical);
    } }, inputs: { nzTransitionSpeed: "nzTransitionSpeed", nzDotPosition: "nzDotPosition", nzDotRender: "nzDotRender", nzEffect: "nzEffect", nzEnableSwipe: "nzEnableSwipe", nzDots: "nzDots", nzAutoPlay: "nzAutoPlay", nzAutoPlaySpeed: "nzAutoPlaySpeed" }, outputs: { nzBeforeChange: "nzBeforeChange", nzAfterChange: "nzAfterChange" }, exportAs: ["nzCarousel"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c3, decls: 9, vars: 3, consts: [[1, "slick-initialized", "slick-slider"], ["tabindex", "-1", 1, "slick-list", 3, "keydown", "mousedown", "touchstart"], ["slickList", ""], [1, "slick-track"], ["slickTrack", ""], ["class", "slick-dots", 3, "slick-dots-top", "slick-dots-bottom", "slick-dots-left", "slick-dots-right", 4, "ngIf"], ["renderDotTemplate", ""], [1, "slick-dots"], [3, "slick-active", "click", 4, "ngFor", "ngForOf"], [3, "click"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]], template: function NzCarouselComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keydown", function NzCarouselComponent_Template_div_keydown_1_listener($event) { return ctx.onKeyDown($event); })("mousedown", function NzCarouselComponent_Template_div_mousedown_1_listener($event) { return ctx.pointerDown($event); })("touchstart", function NzCarouselComponent_Template_div_touchstart_1_listener($event) { return ctx.pointerDown($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, NzCarouselComponent_ul_6_Template, 2, 9, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, NzCarouselComponent_ng_template_7_Template, 2, 1, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("slick-vertical", ctx.nzDotPosition === "left" || ctx.nzDotPosition === "right");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.nzDots);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgTemplateOutlet"]], encapsulation: 2, changeDetection: 0 });
/** @nocollapse */
NzCarouselComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
    { type: ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_5__["NzConfigService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
    { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["Platform"] },
    { type: ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_6__["NzResizeService"] },
    { type: ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_6__["NzDragService"] },
    { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [NZ_CAROUSEL_CUSTOM_STRATEGIES,] }] }
];
NzCarouselComponent.propDecorators = {
    carouselContents: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"], args: [NzCarouselContentDirective,] }],
    slickList: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['slickList', { static: false },] }],
    slickTrack: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['slickTrack', { static: false },] }],
    nzDotRender: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzEffect: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzEnableSwipe: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzDots: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzAutoPlay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzAutoPlaySpeed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzTransitionSpeed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzDotPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzBeforeChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
    nzAfterChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }]
};
Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([
    Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_5__["WithConfig"])(NZ_CONFIG_COMPONENT_NAME, 'scrollx'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", String)
], NzCarouselComponent.prototype, "nzEffect", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([
    Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_5__["WithConfig"])(NZ_CONFIG_COMPONENT_NAME, true), Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_7__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Boolean)
], NzCarouselComponent.prototype, "nzEnableSwipe", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([
    Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_5__["WithConfig"])(NZ_CONFIG_COMPONENT_NAME, true), Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_7__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Boolean)
], NzCarouselComponent.prototype, "nzDots", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([
    Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_5__["WithConfig"])(NZ_CONFIG_COMPONENT_NAME, false), Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_7__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Boolean)
], NzCarouselComponent.prototype, "nzAutoPlay", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([
    Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_5__["WithConfig"])(NZ_CONFIG_COMPONENT_NAME, 3000), Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_7__["InputNumber"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Number)
], NzCarouselComponent.prototype, "nzAutoPlaySpeed", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_7__["InputNumber"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Object)
], NzCarouselComponent.prototype, "nzTransitionSpeed", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([
    Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_5__["WithConfig"])(NZ_CONFIG_COMPONENT_NAME, 'bottom'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", String),
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:paramtypes", [String])
], NzCarouselComponent.prototype, "nzDotPosition", null);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NzCarouselContentDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
        args: [{
                selector: '[nz-carousel-content]',
                exportAs: 'nzCarouselContent'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"] }]; }, null); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NzCarouselComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
                selector: 'nz-carousel',
                exportAs: 'nzCarousel',
                preserveWhitespaces: false,
                template: `
    <div class="slick-initialized slick-slider" [class.slick-vertical]="nzDotPosition === 'left' || nzDotPosition === 'right'">
      <div
        #slickList
        class="slick-list"
        tabindex="-1"
        (keydown)="onKeyDown($event)"
        (mousedown)="pointerDown($event)"
        (touchstart)="pointerDown($event)"
      >
        <!-- Render carousel items. -->
        <div class="slick-track" #slickTrack>
          <ng-content></ng-content>
        </div>
      </div>
      <!-- Render dots. -->
      <ul
        class="slick-dots"
        *ngIf="nzDots"
        [class.slick-dots-top]="nzDotPosition === 'top'"
        [class.slick-dots-bottom]="nzDotPosition === 'bottom'"
        [class.slick-dots-left]="nzDotPosition === 'left'"
        [class.slick-dots-right]="nzDotPosition === 'right'"
      >
        <li *ngFor="let content of carouselContents; let i = index" [class.slick-active]="content.isActive" (click)="goTo(i)">
          <ng-template [ngTemplateOutlet]="nzDotRender || renderDotTemplate" [ngTemplateOutletContext]="{ $implicit: i }"> </ng-template>
        </li>
      </ul>
    </div>

    <ng-template #renderDotTemplate let-index>
      <button>{{ index + 1 }}</button>
    </ng-template>
  `,
                host: {
                    '[class.ant-carousel-vertical]': 'vertical'
                }
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }, { type: ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_5__["NzConfigService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] }, { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["Platform"] }, { type: ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_6__["NzResizeService"] }, { type: ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_6__["NzDragService"] }, { type: Array, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [NZ_CAROUSEL_CUSTOM_STRATEGIES]
            }] }]; }, { nzTransitionSpeed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzBeforeChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], nzAfterChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], nzDotPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], carouselContents: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"],
            args: [NzCarouselContentDirective]
        }], slickList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ['slickList', { static: false }]
        }], slickTrack: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ['slickTrack', { static: false }]
        }], nzDotRender: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzEffect: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzEnableSwipe: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzDots: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzAutoPlay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzAutoPlaySpeed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: carousel.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzCarouselModule {
}
NzCarouselModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: NzCarouselModule });
NzCarouselModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function NzCarouselModule_Factory(t) { return new (t || NzCarouselModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["PlatformModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](NzCarouselModule, { declarations: function () { return [NzCarouselComponent,
        NzCarouselContentDirective]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["PlatformModule"]]; }, exports: function () { return [NzCarouselComponent,
        NzCarouselContentDirective]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NzCarouselModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [NzCarouselComponent, NzCarouselContentDirective],
                exports: [NzCarouselComponent, NzCarouselContentDirective],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["PlatformModule"]]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ng-zorro-antd-carousel.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ng-zorro-antd-carousel.js.map

/***/ })

};;
//# sourceMappingURL=carousel-index-module~code-editor-index-module~space-index-module.js.map