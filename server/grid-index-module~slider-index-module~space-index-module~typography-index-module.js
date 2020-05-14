exports.ids = ["grid-index-module~slider-index-module~space-index-module~typography-index-module"];
exports.modules = {

/***/ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-slider.js":
/*!***************************************************************!*\
  !*** ./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-slider.js ***!
  \***************************************************************/
/*! exports provided: NzMarks, NzSliderComponent, NzSliderModule, ɵNzSliderHandleComponent, ɵNzSliderMarksComponent, ɵNzSliderService, ɵNzSliderStepComponent, ɵNzSliderTrackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzMarks", function() { return NzMarks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzSliderComponent", function() { return NzSliderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzSliderModule", function() { return NzSliderModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵNzSliderHandleComponent", function() { return NzSliderHandleComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵNzSliderMarksComponent", function() { return NzSliderMarksComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵNzSliderService", function() { return NzSliderService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵNzSliderStepComponent", function() { return NzSliderStepComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵNzSliderTrackComponent", function() { return NzSliderTrackComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/keycodes.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/platform.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/core/util */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-util.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-tooltip.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");











/**
 * @fileoverview added by tsickle
 * Generated from: slider.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */





const _c0 = ["handle"];
const _c1 = ["slider"];
function NzSliderComponent_nz_slider_step_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "nz-slider-step", 7);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("vertical", ctx_r1.nzVertical)("lowerBound", ctx_r1.bounds.lower)("upperBound", ctx_r1.bounds.upper)("marksArray", ctx_r1.marksArray)("included", ctx_r1.nzIncluded);
} }
function NzSliderComponent_nz_slider_handle_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "nz-slider-handle", 8);
} if (rf & 2) {
    const handle_r4 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("vertical", ctx_r2.nzVertical)("offset", handle_r4.offset)("value", handle_r4.value)("active", handle_r4.active)("tooltipFormatter", ctx_r2.nzTipFormatter)("tooltipVisible", ctx_r2.nzTooltipVisible)("tooltipPlacement", ctx_r2.nzTooltipPlacement);
} }
function NzSliderComponent_nz_slider_marks_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "nz-slider-marks", 9);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("vertical", ctx_r3.nzVertical)("min", ctx_r3.nzMin)("max", ctx_r3.nzMax)("lowerBound", ctx_r3.bounds.lower)("upperBound", ctx_r3.bounds.upper)("marksArray", ctx_r3.marksArray)("included", ctx_r3.nzIncluded);
} }
function NzSliderMarksComponent_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "span", 2);
} if (rf & 2) {
    const attr_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("ant-slider-mark-active", attr_r1.active);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", attr_r1.style)("innerHTML", attr_r1.label, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
} }
function NzSliderStepComponent_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "span", 2);
} if (rf & 2) {
    const mark_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("ant-slider-dot-active", mark_r1.active);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", mark_r1.style);
} }
class NzSliderService {
    constructor() {
        this.isDragging = false;
    }
}
NzSliderService.ɵfac = function NzSliderService_Factory(t) { return new (t || NzSliderService)(); };
NzSliderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: NzSliderService, factory: NzSliderService.ɵfac });
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: handle.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzSliderHandleComponent {
    /**
     * @param {?} sliderService
     * @param {?} cdr
     */
    constructor(sliderService, cdr) {
        this.sliderService = sliderService;
        this.cdr = cdr;
        this.tooltipVisible = 'default';
        this.active = false;
        this.style = {};
        this.enterHandle = (/**
         * @return {?}
         */
        () => {
            if (!this.sliderService.isDragging) {
                this.toggleTooltip(true);
                this.updateTooltipPosition();
                this.cdr.detectChanges();
            }
        });
        this.leaveHandle = (/**
         * @return {?}
         */
        () => {
            if (!this.sliderService.isDragging) {
                this.toggleTooltip(false);
                this.cdr.detectChanges();
            }
        });
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        const { offset, value, active, tooltipVisible } = changes;
        if (offset) {
            this.updateStyle();
        }
        if (value) {
            this.updateTooltipTitle();
            this.updateTooltipPosition();
        }
        if (active) {
            if (active.currentValue) {
                this.toggleTooltip(true);
            }
            else {
                this.toggleTooltip(false);
            }
        }
        if ((tooltipVisible === null || tooltipVisible === void 0 ? void 0 : tooltipVisible.currentValue) === 'always') {
            Promise.resolve().then((/**
             * @return {?}
             */
            () => this.toggleTooltip(true, true)));
        }
    }
    /**
     * @return {?}
     */
    focus() {
        var _a;
        (_a = this.handleEl) === null || _a === void 0 ? void 0 : _a.nativeElement.focus();
    }
    /**
     * @private
     * @param {?} show
     * @param {?=} force
     * @return {?}
     */
    toggleTooltip(show, force = false) {
        var _a, _b;
        if (!force && (this.tooltipVisible !== 'default' || !this.tooltip)) {
            return;
        }
        if (show) {
            (_a = this.tooltip) === null || _a === void 0 ? void 0 : _a.show();
        }
        else {
            (_b = this.tooltip) === null || _b === void 0 ? void 0 : _b.hide();
        }
    }
    /**
     * @private
     * @return {?}
     */
    updateTooltipTitle() {
        this.tooltipTitle = this.tooltipFormatter ? this.tooltipFormatter((/** @type {?} */ (this.value))) : `${this.value}`;
    }
    /**
     * @private
     * @return {?}
     */
    updateTooltipPosition() {
        if (this.tooltip) {
            Promise.resolve().then((/**
             * @return {?}
             */
            () => { var _a; return (_a = this.tooltip) === null || _a === void 0 ? void 0 : _a.updatePosition(); }));
        }
    }
    /**
     * @private
     * @return {?}
     */
    updateStyle() {
        this.style = {
            [this.vertical ? 'bottom' : 'left']: `${this.offset}%`,
            transform: this.vertical ? 'translateY(50%)' : 'translateX(-50%)'
        };
        this.cdr.markForCheck();
    }
}
NzSliderHandleComponent.ɵfac = function NzSliderHandleComponent_Factory(t) { return new (t || NzSliderHandleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](NzSliderService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"])); };
NzSliderHandleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: NzSliderHandleComponent, selectors: [["nz-slider-handle"]], viewQuery: function NzSliderHandleComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_8__["NzTooltipDirective"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.handleEl = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.tooltip = _t.first);
    } }, hostBindings: function NzSliderHandleComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("mouseenter", function NzSliderHandleComponent_mouseenter_HostBindingHandler() { return ctx.enterHandle(); })("mouseleave", function NzSliderHandleComponent_mouseleave_HostBindingHandler() { return ctx.leaveHandle(); });
    } }, inputs: { tooltipVisible: "tooltipVisible", active: "active", vertical: "vertical", offset: "offset", value: "value", tooltipPlacement: "tooltipPlacement", tooltipFormatter: "tooltipFormatter" }, exportAs: ["nzSliderHandle"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]], decls: 2, vars: 4, consts: [["tabindex", "0", "nz-tooltip", "", 1, "ant-slider-handle", 3, "ngStyle", "nzTooltipTitle", "nzTooltipTrigger", "nzTooltipPlacement"], ["handle", ""]], template: function NzSliderHandleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 0, 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", ctx.style)("nzTooltipTitle", ctx.tooltipFormatter === null || ctx.tooltipVisible === "never" ? null : ctx.tooltipTitle)("nzTooltipTrigger", null)("nzTooltipPlacement", ctx.tooltipPlacement);
    } }, directives: [ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_8__["NzTooltipDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgStyle"]], encapsulation: 2, changeDetection: 0 });
/** @nocollapse */
NzSliderHandleComponent.ctorParameters = () => [
    { type: NzSliderService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] }
];
NzSliderHandleComponent.propDecorators = {
    handleEl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['handle', { static: false },] }],
    tooltip: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_8__["NzTooltipDirective"], { static: false },] }],
    vertical: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    offset: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    tooltipVisible: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    tooltipPlacement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    tooltipFormatter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    active: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], NzSliderHandleComponent.prototype, "active", void 0);
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: slider.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzSliderComponent {
    /**
     * @param {?} sliderService
     * @param {?} cdr
     * @param {?} platform
     */
    constructor(sliderService, cdr, platform) {
        this.sliderService = sliderService;
        this.cdr = cdr;
        this.platform = platform;
        this.nzDisabled = false;
        this.nzDots = false;
        this.nzIncluded = true;
        this.nzRange = false;
        this.nzVertical = false;
        this.nzMarks = null;
        this.nzMax = 100;
        this.nzMin = 0;
        this.nzStep = 1;
        this.nzTooltipVisible = 'default';
        this.nzTooltipPlacement = 'top';
        this.nzOnAfterChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.value = null;
        this.cacheSliderStart = null;
        this.cacheSliderLength = null;
        this.activeValueIndex = undefined; // Current activated handle's index ONLY for range=true
        // Current activated handle's index ONLY for range=true
        this.track = { offset: null, length: null }; // Track's offset and length
        // Track's offset and length
        this.handles = []; // Handles' offset
        // Handles' offset
        this.marksArray = null; // "steps" in array type with more data & FILTER out the invalid mark
        // "steps" in array type with more data & FILTER out the invalid mark
        this.bounds = { lower: null, upper: null }; // now for nz-slider-step
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.handles = generateHandlers(this.nzRange ? 2 : 1);
        this.marksArray = this.nzMarks ? this.generateMarkItems(this.nzMarks) : null;
        this.bindDraggingHandlers();
        this.toggleDragDisabled(this.nzDisabled);
        if (this.getValue() === null) {
            this.setValue(this.formatValue(null));
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        const { nzDisabled, nzMarks, nzRange } = changes;
        if (nzDisabled && !nzDisabled.firstChange) {
            this.toggleDragDisabled(nzDisabled.currentValue);
        }
        else if (nzMarks && !nzMarks.firstChange) {
            this.marksArray = this.nzMarks ? this.generateMarkItems(this.nzMarks) : null;
        }
        else if (nzRange && !nzRange.firstChange) {
            this.setValue(this.formatValue(null));
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.unsubscribeDrag();
    }
    /**
     * @param {?} val
     * @return {?}
     */
    writeValue(val) {
        this.setValue(val, true);
    }
    /**
     * @param {?} _value
     * @return {?}
     */
    onValueChange(_value) { }
    /**
     * @return {?}
     */
    onTouched() { }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onValueChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.nzDisabled = isDisabled;
        this.toggleDragDisabled(isDisabled);
    }
    /**
     * Event handler is only triggered when a slider handler is focused.
     * @param {?} e
     * @return {?}
     */
    onKeyDown(e) {
        /** @type {?} */
        const code = e.keyCode;
        /** @type {?} */
        const isIncrease = code === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__["RIGHT_ARROW"] || code === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__["UP_ARROW"];
        /** @type {?} */
        const isDecrease = code === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__["LEFT_ARROW"] || code === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__["DOWN_ARROW"];
        if (!(isIncrease || isDecrease)) {
            return;
        }
        e.preventDefault();
        /** @type {?} */
        const step = isDecrease ? -this.nzStep : this.nzStep;
        /** @type {?} */
        const newVal = this.nzRange ? ((/** @type {?} */ (this.value)))[(/** @type {?} */ (this.activeValueIndex))] + step : ((/** @type {?} */ (this.value))) + step;
        this.setActiveValue(Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__["ensureNumberInRange"])(newVal, this.nzMin, this.nzMax));
    }
    /**
     * @private
     * @param {?} value
     * @param {?=} isWriteValue
     * @return {?}
     */
    setValue(value, isWriteValue = false) {
        if (isWriteValue) {
            this.value = this.formatValue(value);
            this.updateTrackAndHandles();
        }
        else if (!valuesEqual((/** @type {?} */ (this.value)), (/** @type {?} */ (value)))) {
            this.value = value;
            this.updateTrackAndHandles();
            this.onValueChange(this.getValue(true));
        }
    }
    /**
     * @private
     * @param {?=} cloneAndSort
     * @return {?}
     */
    getValue(cloneAndSort = false) {
        if (cloneAndSort && this.value && isValueRange(this.value)) {
            return [...this.value].sort((/**
             * @param {?} a
             * @param {?} b
             * @return {?}
             */
            (a, b) => a - b));
        }
        return (/** @type {?} */ (this.value));
    }
    /**
     * Clone & sort current value and convert them to offsets, then return the new one.
     * @private
     * @param {?=} value
     * @return {?}
     */
    getValueToOffset(value) {
        /** @type {?} */
        let normalizedValue = value;
        if (typeof normalizedValue === 'undefined') {
            normalizedValue = this.getValue(true);
        }
        return isValueRange(normalizedValue) ? normalizedValue.map((/**
         * @param {?} val
         * @return {?}
         */
        val => this.valueToOffset(val))) : this.valueToOffset(normalizedValue);
    }
    /**
     * Find the closest value to be activated.
     * @private
     * @param {?} pointerValue
     * @return {?}
     */
    setActiveValueIndex(pointerValue) {
        /** @type {?} */
        const value = this.getValue();
        if (isValueRange(value)) {
            /** @type {?} */
            let minimal = null;
            /** @type {?} */
            let gap;
            /** @type {?} */
            let activeIndex = -1;
            value.forEach((/**
             * @param {?} val
             * @param {?} index
             * @return {?}
             */
            (val, index) => {
                gap = Math.abs(pointerValue - val);
                if (minimal === null || gap < (/** @type {?} */ (minimal))) {
                    minimal = gap;
                    activeIndex = index;
                }
            }));
            this.activeValueIndex = activeIndex;
            this.handlerComponents.toArray()[activeIndex].focus();
        }
        else {
            this.handlerComponents.toArray()[0].focus();
        }
    }
    /**
     * @private
     * @param {?} pointerValue
     * @return {?}
     */
    setActiveValue(pointerValue) {
        if (isValueRange((/** @type {?} */ (this.value)))) {
            /** @type {?} */
            const newValue = [...((/** @type {?} */ (this.value)))];
            newValue[(/** @type {?} */ (this.activeValueIndex))] = pointerValue;
            this.setValue(newValue);
        }
        else {
            this.setValue(pointerValue);
        }
    }
    /**
     * Update track and handles' position and length.
     * @private
     * @return {?}
     */
    updateTrackAndHandles() {
        /** @type {?} */
        const value = this.getValue();
        /** @type {?} */
        const offset = this.getValueToOffset(value);
        /** @type {?} */
        const valueSorted = this.getValue(true);
        /** @type {?} */
        const offsetSorted = this.getValueToOffset(valueSorted);
        /** @type {?} */
        const boundParts = isValueRange(valueSorted) ? valueSorted : [0, valueSorted];
        /** @type {?} */
        const trackParts = isValueRange(offsetSorted) ? [offsetSorted[0], offsetSorted[1] - offsetSorted[0]] : [0, offsetSorted];
        this.handles.forEach((/**
         * @param {?} handle
         * @param {?} index
         * @return {?}
         */
        (handle, index) => {
            handle.offset = isValueRange(offset) ? offset[index] : offset;
            handle.value = isValueRange(value) ? value[index] : value || 0;
        }));
        [this.bounds.lower, this.bounds.upper] = boundParts;
        [this.track.offset, this.track.length] = trackParts;
        this.cdr.markForCheck();
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    onDragStart(value) {
        this.toggleDragMoving(true);
        this.cacheSliderProperty();
        this.setActiveValueIndex(value);
        this.setActiveValue(value);
        this.showHandleTooltip(this.nzRange ? this.activeValueIndex : 0);
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    onDragMove(value) {
        this.setActiveValue(value);
        this.cdr.markForCheck();
    }
    /**
     * @private
     * @return {?}
     */
    onDragEnd() {
        this.nzOnAfterChange.emit(this.getValue(true));
        this.toggleDragMoving(false);
        this.cacheSliderProperty(true);
        this.hideAllHandleTooltip();
        this.cdr.markForCheck();
    }
    /**
     * Create user interactions handles.
     * @private
     * @return {?}
     */
    bindDraggingHandlers() {
        if (!this.platform.isBrowser) {
            return;
        }
        /** @type {?} */
        const sliderDOM = this.slider.nativeElement;
        /** @type {?} */
        const orientField = this.nzVertical ? 'pageY' : 'pageX';
        /** @type {?} */
        const mouse = {
            start: 'mousedown',
            move: 'mousemove',
            end: 'mouseup',
            pluckKey: [orientField]
        };
        /** @type {?} */
        const touch = {
            start: 'touchstart',
            move: 'touchmove',
            end: 'touchend',
            pluckKey: ['touches', '0', orientField],
            filter: (/**
             * @param {?} e
             * @return {?}
             */
            (e) => e instanceof TouchEvent)
        };
        [mouse, touch].forEach((/**
         * @param {?} source
         * @return {?}
         */
        source => {
            const { start, move, end, pluckKey, filter: filterFunc = (/**
             * @return {?}
             */
            () => true) } = source;
            source.startPlucked$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["fromEvent"])(sliderDOM, start).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])(filterFunc), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__["silentEvent"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["pluck"])(...pluckKey), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])((/**
             * @param {?} position
             * @return {?}
             */
            (position) => this.findClosestValue(position))));
            source.end$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["fromEvent"])(document, end);
            source.moveResolved$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["fromEvent"])(document, move).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])(filterFunc), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__["silentEvent"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["pluck"])(...pluckKey), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])((/**
             * @param {?} position
             * @return {?}
             */
            (position) => this.findClosestValue(position))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(source.end$));
        }));
        this.dragStart$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["merge"])((/** @type {?} */ (mouse.startPlucked$)), (/** @type {?} */ (touch.startPlucked$)));
        this.dragMove$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["merge"])((/** @type {?} */ (mouse.moveResolved$)), (/** @type {?} */ (touch.moveResolved$)));
        this.dragEnd$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["merge"])((/** @type {?} */ (mouse.end$)), (/** @type {?} */ (touch.end$)));
    }
    /**
     * @private
     * @param {?=} periods
     * @return {?}
     */
    subscribeDrag(periods = ['start', 'move', 'end']) {
        if (periods.indexOf('start') !== -1 && this.dragStart$ && !this.dragStart_) {
            this.dragStart_ = this.dragStart$.subscribe(this.onDragStart.bind(this));
        }
        if (periods.indexOf('move') !== -1 && this.dragMove$ && !this.dragMove_) {
            this.dragMove_ = this.dragMove$.subscribe(this.onDragMove.bind(this));
        }
        if (periods.indexOf('end') !== -1 && this.dragEnd$ && !this.dragEnd_) {
            this.dragEnd_ = this.dragEnd$.subscribe(this.onDragEnd.bind(this));
        }
    }
    /**
     * @private
     * @param {?=} periods
     * @return {?}
     */
    unsubscribeDrag(periods = ['start', 'move', 'end']) {
        if (periods.indexOf('start') !== -1 && this.dragStart_) {
            this.dragStart_.unsubscribe();
            this.dragStart_ = null;
        }
        if (periods.indexOf('move') !== -1 && this.dragMove_) {
            this.dragMove_.unsubscribe();
            this.dragMove_ = null;
        }
        if (periods.indexOf('end') !== -1 && this.dragEnd_) {
            this.dragEnd_.unsubscribe();
            this.dragEnd_ = null;
        }
    }
    /**
     * @private
     * @param {?} movable
     * @return {?}
     */
    toggleDragMoving(movable) {
        /** @type {?} */
        const periods = ['move', 'end'];
        if (movable) {
            this.sliderService.isDragging = true;
            this.subscribeDrag(periods);
        }
        else {
            this.sliderService.isDragging = false;
            this.unsubscribeDrag(periods);
        }
    }
    /**
     * @private
     * @param {?} disabled
     * @return {?}
     */
    toggleDragDisabled(disabled) {
        if (disabled) {
            this.unsubscribeDrag();
        }
        else {
            this.subscribeDrag(['start']);
        }
    }
    /**
     * @private
     * @param {?} position
     * @return {?}
     */
    findClosestValue(position) {
        /** @type {?} */
        const sliderStart = this.getSliderStartPosition();
        /** @type {?} */
        const sliderLength = this.getSliderLength();
        /** @type {?} */
        const ratio = Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__["ensureNumberInRange"])((position - sliderStart) / sliderLength, 0, 1);
        /** @type {?} */
        const val = (this.nzMax - this.nzMin) * (this.nzVertical ? 1 - ratio : ratio) + this.nzMin;
        /** @type {?} */
        const points = this.nzMarks === null ? [] : Object.keys(this.nzMarks).map(parseFloat);
        if (this.nzStep !== 0 && !this.nzDots) {
            /** @type {?} */
            const closestOne = Math.round(val / this.nzStep) * this.nzStep;
            points.push(closestOne);
        }
        /** @type {?} */
        const gaps = points.map((/**
         * @param {?} point
         * @return {?}
         */
        point => Math.abs(val - point)));
        /** @type {?} */
        const closest = points[gaps.indexOf(Math.min(...gaps))];
        return this.nzStep === null ? closest : parseFloat(closest.toFixed(Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__["getPrecision"])(this.nzStep)));
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    valueToOffset(value) {
        return Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__["getPercent"])(this.nzMin, this.nzMax, value);
    }
    /**
     * @private
     * @return {?}
     */
    getSliderStartPosition() {
        if (this.cacheSliderStart !== null) {
            return this.cacheSliderStart;
        }
        /** @type {?} */
        const offset = Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__["getElementOffset"])(this.slider.nativeElement);
        return this.nzVertical ? offset.top : offset.left;
    }
    /**
     * @private
     * @return {?}
     */
    getSliderLength() {
        if (this.cacheSliderLength !== null) {
            return this.cacheSliderLength;
        }
        /** @type {?} */
        const sliderDOM = this.slider.nativeElement;
        return this.nzVertical ? sliderDOM.clientHeight : sliderDOM.clientWidth;
    }
    /**
     * Cache DOM layout/reflow operations for performance (may not necessary?)
     * @private
     * @param {?=} remove
     * @return {?}
     */
    cacheSliderProperty(remove = false) {
        this.cacheSliderStart = remove ? null : this.getSliderStartPosition();
        this.cacheSliderLength = remove ? null : this.getSliderLength();
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    formatValue(value) {
        if (!value) {
            return this.nzRange ? [this.nzMin, this.nzMax] : this.nzMin;
        }
        else if (assertValueValid(value, this.nzRange)) {
            return isValueRange(value)
                ? value.map((/**
                 * @param {?} val
                 * @return {?}
                 */
                val => Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__["ensureNumberInRange"])(val, this.nzMin, this.nzMax)))
                : Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__["ensureNumberInRange"])(value, this.nzMin, this.nzMax);
        }
        else {
            return this.nzDefaultValue ? this.nzDefaultValue : this.nzRange ? [this.nzMin, this.nzMax] : this.nzMin;
        }
    }
    /**
     * Show one handle's tooltip and hide others'.
     * @private
     * @param {?=} handleIndex
     * @return {?}
     */
    showHandleTooltip(handleIndex = 0) {
        this.handles.forEach((/**
         * @param {?} handle
         * @param {?} index
         * @return {?}
         */
        (handle, index) => {
            handle.active = index === handleIndex;
        }));
    }
    /**
     * @private
     * @return {?}
     */
    hideAllHandleTooltip() {
        this.handles.forEach((/**
         * @param {?} handle
         * @return {?}
         */
        handle => (handle.active = false)));
    }
    /**
     * @private
     * @param {?} marks
     * @return {?}
     */
    generateMarkItems(marks) {
        /** @type {?} */
        const marksArray = [];
        for (const key in marks) {
            /** @type {?} */
            const mark = marks[key];
            /** @type {?} */
            const val = typeof key === 'number' ? key : parseFloat(key);
            if (val >= this.nzMin && val <= this.nzMax) {
                marksArray.push({ value: val, offset: this.valueToOffset(val), config: mark });
            }
        }
        return marksArray.length ? marksArray : null;
    }
}
NzSliderComponent.ɵfac = function NzSliderComponent_Factory(t) { return new (t || NzSliderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](NzSliderService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"])); };
NzSliderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: NzSliderComponent, selectors: [["nz-slider"]], viewQuery: function NzSliderComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstaticViewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](NzSliderHandleComponent, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.slider = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.handlerComponents = _t);
    } }, hostBindings: function NzSliderComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keydown", function NzSliderComponent_keydown_HostBindingHandler($event) { return ctx.onKeyDown($event); });
    } }, inputs: { nzDisabled: "nzDisabled", nzDots: "nzDots", nzIncluded: "nzIncluded", nzRange: "nzRange", nzVertical: "nzVertical", nzMarks: "nzMarks", nzMax: "nzMax", nzMin: "nzMin", nzStep: "nzStep", nzTooltipVisible: "nzTooltipVisible", nzTooltipPlacement: "nzTooltipPlacement", nzDefaultValue: "nzDefaultValue", nzTipFormatter: "nzTipFormatter" }, outputs: { nzOnAfterChange: "nzOnAfterChange" }, exportAs: ["nzSlider"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["forwardRef"])(( /**
                 * @return {?}
                 */() => NzSliderComponent)),
                multi: true
            },
            NzSliderService
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]], decls: 7, vars: 13, consts: [[1, "ant-slider"], ["slider", ""], [1, "ant-slider-rail"], [3, "vertical", "included", "offset", "length"], [3, "vertical", "lowerBound", "upperBound", "marksArray", "included", 4, "ngIf"], [3, "vertical", "offset", "value", "active", "tooltipFormatter", "tooltipVisible", "tooltipPlacement", 4, "ngFor", "ngForOf"], [3, "vertical", "min", "max", "lowerBound", "upperBound", "marksArray", "included", 4, "ngIf"], [3, "vertical", "lowerBound", "upperBound", "marksArray", "included"], [3, "vertical", "offset", "value", "active", "tooltipFormatter", "tooltipVisible", "tooltipPlacement"], [3, "vertical", "min", "max", "lowerBound", "upperBound", "marksArray", "included"]], template: function NzSliderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "nz-slider-track", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, NzSliderComponent_nz_slider_step_4_Template, 1, 5, "nz-slider-step", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, NzSliderComponent_nz_slider_handle_5_Template, 1, 7, "nz-slider-handle", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, NzSliderComponent_nz_slider_marks_6_Template, 1, 7, "nz-slider-marks", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("ant-slider-disabled", ctx.nzDisabled)("ant-slider-vertical", ctx.nzVertical)("ant-slider-with-marks", ctx.marksArray);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("vertical", ctx.nzVertical)("included", ctx.nzIncluded)("offset", ctx.track.offset)("length", ctx.track.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.marksArray);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.handles);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.marksArray);
    } }, directives: function () { return [NzSliderTrackComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], NzSliderStepComponent,
        NzSliderHandleComponent,
        NzSliderMarksComponent]; }, encapsulation: 2, changeDetection: 0 });
/** @nocollapse */
NzSliderComponent.ctorParameters = () => [
    { type: NzSliderService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] },
    { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"] }
];
NzSliderComponent.propDecorators = {
    slider: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['slider', { static: true },] }],
    handlerComponents: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChildren"], args: [NzSliderHandleComponent,] }],
    nzDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzDots: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzIncluded: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzRange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzVertical: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzDefaultValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzMarks: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzMax: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzMin: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzStep: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzTooltipVisible: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzTooltipPlacement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzTipFormatter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzOnAfterChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], NzSliderComponent.prototype, "nzDisabled", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], NzSliderComponent.prototype, "nzDots", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], NzSliderComponent.prototype, "nzIncluded", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], NzSliderComponent.prototype, "nzRange", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], NzSliderComponent.prototype, "nzVertical", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__["InputNumber"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], NzSliderComponent.prototype, "nzMax", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__["InputNumber"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], NzSliderComponent.prototype, "nzMin", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__["InputNumber"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], NzSliderComponent.prototype, "nzStep", void 0);
if (false) {}
/**
 * @return {?}
 */
function getValueTypeNotMatchError() {
    return new Error(`The "nzRange" can't match the "ngModel"'s type, please check these properties: "nzRange", "ngModel", "nzDefaultValue".`);
}
/**
 * @param {?} value
 * @return {?}
 */
function isValueRange(value) {
    if (value instanceof Array) {
        return value.length === 2;
    }
    else {
        return false;
    }
}
/**
 * @param {?} amount
 * @return {?}
 */
function generateHandlers(amount) {
    return Array(amount)
        .fill(0)
        .map((/**
     * @return {?}
     */
    () => ({ offset: null, value: null, active: false })));
}
/**
 * Check if value is valid and throw error if value-type/range not match.
 * @param {?} value
 * @param {?=} isRange
 * @return {?}
 */
function assertValueValid(value, isRange) {
    if ((!isValueRange(value) && isNaN(value)) || (isValueRange(value) && value.some((/**
     * @param {?} v
     * @return {?}
     */
    v => isNaN(v))))) {
        return false;
    }
    return assertValueTypeMatch(value, isRange);
}
/**
 * Assert that if `this.nzRange` is `true`, value is also a range, vice versa.
 * @param {?} value
 * @param {?=} isRange
 * @return {?}
 */
function assertValueTypeMatch(value, isRange = false) {
    if (isValueRange(value) !== isRange) {
        throw getValueTypeNotMatchError();
    }
    return true;
}
/**
 * @param {?} valA
 * @param {?} valB
 * @return {?}
 */
function valuesEqual(valA, valB) {
    if (typeof valA !== typeof valB) {
        return false;
    }
    return isValueRange(valA) && isValueRange(valB) ? Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__["arraysEqual"])(valA, valB) : valA === valB;
}

/**
 * @fileoverview added by tsickle
 * Generated from: marks.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzSliderMarksComponent {
    constructor() {
        this.lowerBound = null;
        this.upperBound = null;
        this.marksArray = [];
        this.vertical = false;
        this.included = false;
        this.marks = [];
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        const { marksArray, lowerBound, upperBound } = changes;
        if (marksArray) {
            this.buildMarks();
        }
        if (marksArray || lowerBound || upperBound) {
            this.togglePointActive();
        }
    }
    /**
     * @param {?} _index
     * @param {?} mark
     * @return {?}
     */
    trackById(_index, mark) {
        return mark.value;
    }
    /**
     * @private
     * @return {?}
     */
    buildMarks() {
        /** @type {?} */
        const range = this.max - this.min;
        this.marks = this.marksArray.map((/**
         * @param {?} mark
         * @return {?}
         */
        mark => {
            const { value, offset, config } = mark;
            /** @type {?} */
            const style = this.getMarkStyles(value, range, config);
            /** @type {?} */
            const label = isConfigObject(config) ? config.label : config;
            return {
                label,
                offset,
                style,
                value,
                config,
                active: false
            };
        }));
    }
    /**
     * @private
     * @param {?} value
     * @param {?} range
     * @param {?} config
     * @return {?}
     */
    getMarkStyles(value, range, config) {
        /** @type {?} */
        let style;
        if (this.vertical) {
            style = {
                marginBottom: '-50%',
                bottom: `${((value - this.min) / range) * 100}%`
            };
        }
        else {
            style = {
                transform: `translate3d(-50%, 0, 0)`,
                left: `${((value - this.min) / range) * 100}%`
            };
        }
        if (isConfigObject(config) && config.style) {
            style = Object.assign(Object.assign({}, style), config.style);
        }
        return style;
    }
    /**
     * @private
     * @return {?}
     */
    togglePointActive() {
        if (this.marks && this.lowerBound !== null && this.upperBound !== null) {
            this.marks.forEach((/**
             * @param {?} mark
             * @return {?}
             */
            mark => {
                /** @type {?} */
                const value = mark.value;
                /** @type {?} */
                const isActive = (!this.included && value === this.upperBound) || (this.included && value <= (/** @type {?} */ (this.upperBound)) && value >= (/** @type {?} */ (this.lowerBound)));
                mark.active = isActive;
            }));
        }
    }
}
NzSliderMarksComponent.ɵfac = function NzSliderMarksComponent_Factory(t) { return new (t || NzSliderMarksComponent)(); };
NzSliderMarksComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: NzSliderMarksComponent, selectors: [["nz-slider-marks"]], inputs: { lowerBound: "lowerBound", upperBound: "upperBound", marksArray: "marksArray", vertical: "vertical", included: "included", min: "min", max: "max" }, exportAs: ["nzSliderMarks"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]], decls: 2, vars: 2, consts: [[1, "ant-slider-mark"], ["class", "ant-slider-mark-text", 3, "ant-slider-mark-active", "ngStyle", "innerHTML", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "ant-slider-mark-text", 3, "ngStyle", "innerHTML"]], template: function NzSliderMarksComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, NzSliderMarksComponent_span_1_Template, 1, 4, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.marks)("ngForTrackBy", ctx.trackById);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgStyle"]], encapsulation: 2, changeDetection: 0 });
NzSliderMarksComponent.propDecorators = {
    lowerBound: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    upperBound: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    marksArray: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    min: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    max: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    vertical: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    included: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], NzSliderMarksComponent.prototype, "vertical", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], NzSliderMarksComponent.prototype, "included", void 0);
if (false) {}
/**
 * @param {?} config
 * @return {?}
 */
function isConfigObject(config) {
    return typeof config !== 'string';
}

/**
 * @fileoverview added by tsickle
 * Generated from: step.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzSliderStepComponent {
    constructor() {
        this.lowerBound = null;
        this.upperBound = null;
        this.marksArray = [];
        this.vertical = false;
        this.included = false;
        this.steps = [];
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.marksArray) {
            this.buildSteps();
        }
        if (changes.marksArray || changes.lowerBound || changes.upperBound) {
            this.togglePointActive();
        }
    }
    /**
     * @param {?} _index
     * @param {?} step
     * @return {?}
     */
    trackById(_index, step) {
        return step.value;
    }
    /**
     * @private
     * @return {?}
     */
    buildSteps() {
        /** @type {?} */
        const orient = this.vertical ? 'bottom' : 'left';
        this.steps = this.marksArray.map((/**
         * @param {?} mark
         * @return {?}
         */
        mark => {
            const { value, offset, config } = mark;
            return {
                value,
                offset,
                config,
                active: false,
                style: {
                    [orient]: `${offset}%`
                }
            };
        }));
    }
    /**
     * @private
     * @return {?}
     */
    togglePointActive() {
        if (this.steps && this.lowerBound !== null && this.upperBound !== null) {
            this.steps.forEach((/**
             * @param {?} step
             * @return {?}
             */
            step => {
                /** @type {?} */
                const value = step.value;
                /** @type {?} */
                const isActive = (!this.included && value === this.upperBound) || (this.included && value <= (/** @type {?} */ (this.upperBound)) && value >= (/** @type {?} */ (this.lowerBound)));
                step.active = isActive;
            }));
        }
    }
}
NzSliderStepComponent.ɵfac = function NzSliderStepComponent_Factory(t) { return new (t || NzSliderStepComponent)(); };
NzSliderStepComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: NzSliderStepComponent, selectors: [["nz-slider-step"]], inputs: { lowerBound: "lowerBound", upperBound: "upperBound", marksArray: "marksArray", vertical: "vertical", included: "included" }, exportAs: ["nzSliderStep"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]], decls: 2, vars: 2, consts: [[1, "ant-slider-step"], ["class", "ant-slider-dot", 3, "ant-slider-dot-active", "ngStyle", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "ant-slider-dot", 3, "ngStyle"]], template: function NzSliderStepComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, NzSliderStepComponent_span_1_Template, 1, 3, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.steps)("ngForTrackBy", ctx.trackById);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgStyle"]], encapsulation: 2, changeDetection: 0 });
NzSliderStepComponent.propDecorators = {
    lowerBound: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    upperBound: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    marksArray: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    vertical: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    included: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], NzSliderStepComponent.prototype, "vertical", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], NzSliderStepComponent.prototype, "included", void 0);
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: track.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function NzSliderTrackStyle() { }
if (false) {}
class NzSliderTrackComponent {
    constructor() {
        this.offset = 0;
        this.length = 0;
        this.vertical = false;
        this.included = false;
        this.style = {};
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.included) {
            this.style.visibility = this.included ? 'visible' : 'hidden';
        }
        if (changes.vertical || changes.offset || changes.length) {
            if (this.vertical) {
                this.style.bottom = `${this.offset}%`;
                this.style.height = `${this.length}%`;
                this.style.left = null;
                this.style.width = null;
            }
            else {
                this.style.left = `${this.offset}%`;
                this.style.width = `${this.length}%`;
                this.style.bottom = null;
                this.style.height = null;
            }
        }
    }
}
NzSliderTrackComponent.ɵfac = function NzSliderTrackComponent_Factory(t) { return new (t || NzSliderTrackComponent)(); };
NzSliderTrackComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: NzSliderTrackComponent, selectors: [["nz-slider-track"]], inputs: { offset: "offset", length: "length", vertical: "vertical", included: "included" }, exportAs: ["nzSliderTrack"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]], decls: 1, vars: 1, consts: [[1, "ant-slider-track", 3, "ngStyle"]], template: function NzSliderTrackComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", ctx.style);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgStyle"]], encapsulation: 2, changeDetection: 0 });
NzSliderTrackComponent.propDecorators = {
    offset: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    length: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    vertical: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    included: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__["InputNumber"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], NzSliderTrackComponent.prototype, "offset", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__["InputNumber"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], NzSliderTrackComponent.prototype, "length", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], NzSliderTrackComponent.prototype, "vertical", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], NzSliderTrackComponent.prototype, "included", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](NzSliderService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"]
    }], function () { return []; }, null); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](NzSliderHandleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
                selector: 'nz-slider-handle',
                exportAs: 'nzSliderHandle',
                preserveWhitespaces: false,
                template: `
    <div
      #handle
      class="ant-slider-handle"
      tabindex="0"
      nz-tooltip
      [ngStyle]="style"
      [nzTooltipTitle]="tooltipFormatter === null || tooltipVisible === 'never' ? null : tooltipTitle"
      [nzTooltipTrigger]="null"
      [nzTooltipPlacement]="tooltipPlacement"
    ></div>
  `,
                host: {
                    '(mouseenter)': 'enterHandle()',
                    '(mouseleave)': 'leaveHandle()'
                }
            }]
    }], function () { return [{ type: NzSliderService }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] }]; }, { tooltipVisible: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], active: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], handleEl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: ['handle', { static: false }]
        }], tooltip: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: [ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_8__["NzTooltipDirective"], { static: false }]
        }], vertical: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], offset: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], tooltipPlacement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], tooltipFormatter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](NzSliderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
                selector: 'nz-slider',
                exportAs: 'nzSlider',
                preserveWhitespaces: false,
                providers: [
                    {
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["forwardRef"])(( /**
                         * @return {?}
                         */() => NzSliderComponent)),
                        multi: true
                    },
                    NzSliderService
                ],
                host: {
                    '(keydown)': 'onKeyDown($event)'
                },
                template: `
    <div
      #slider
      class="ant-slider"
      [class.ant-slider-disabled]="nzDisabled"
      [class.ant-slider-vertical]="nzVertical"
      [class.ant-slider-with-marks]="marksArray"
    >
      <div class="ant-slider-rail"></div>
      <nz-slider-track [vertical]="nzVertical" [included]="nzIncluded" [offset]="track.offset!" [length]="track.length!"></nz-slider-track>
      <nz-slider-step
        *ngIf="marksArray"
        [vertical]="nzVertical"
        [lowerBound]="$any(bounds.lower)"
        [upperBound]="$any(bounds.upper)"
        [marksArray]="marksArray"
        [included]="nzIncluded"
      ></nz-slider-step>
      <nz-slider-handle
        *ngFor="let handle of handles"
        [vertical]="nzVertical"
        [offset]="handle.offset!"
        [value]="handle.value!"
        [active]="handle.active"
        [tooltipFormatter]="nzTipFormatter"
        [tooltipVisible]="nzTooltipVisible"
        [tooltipPlacement]="nzTooltipPlacement"
      ></nz-slider-handle>
      <nz-slider-marks
        *ngIf="marksArray"
        [vertical]="nzVertical"
        [min]="nzMin"
        [max]="nzMax"
        [lowerBound]="$any(bounds.lower)"
        [upperBound]="$any(bounds.upper)"
        [marksArray]="marksArray"
        [included]="nzIncluded"
      ></nz-slider-marks>
    </div>
  `
            }]
    }], function () { return [{ type: NzSliderService }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] }, { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"] }]; }, { nzDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzDots: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzIncluded: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzRange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzVertical: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzMarks: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzMax: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzMin: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzStep: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzTooltipVisible: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzTooltipPlacement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzOnAfterChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }], slider: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: ['slider', { static: true }]
        }], handlerComponents: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChildren"],
            args: [NzSliderHandleComponent]
        }], nzDefaultValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzTipFormatter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](NzSliderMarksComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
                preserveWhitespaces: false,
                selector: 'nz-slider-marks',
                exportAs: 'nzSliderMarks',
                template: `
    <div class="ant-slider-mark">
      <span
        class="ant-slider-mark-text"
        *ngFor="let attr of marks; trackBy: trackById"
        [class.ant-slider-mark-active]="attr.active"
        [ngStyle]="attr.style!"
        [innerHTML]="attr.label"
      >
      </span>
    </div>
  `
            }]
    }], function () { return []; }, { lowerBound: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], upperBound: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], marksArray: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], vertical: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], included: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], min: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], max: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](NzSliderStepComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
                selector: 'nz-slider-step',
                exportAs: 'nzSliderStep',
                preserveWhitespaces: false,
                template: `
    <div class="ant-slider-step">
      <span
        class="ant-slider-dot"
        *ngFor="let mark of steps; trackBy: trackById"
        [class.ant-slider-dot-active]="mark.active"
        [ngStyle]="mark.style!"
      >
      </span>
    </div>
  `
            }]
    }], function () { return []; }, { lowerBound: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], upperBound: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], marksArray: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], vertical: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], included: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](NzSliderTrackComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
                selector: 'nz-slider-track',
                exportAs: 'nzSliderTrack',
                preserveWhitespaces: false,
                template: ` <div class="ant-slider-track" [ngStyle]="style"></div> `
            }]
    }], function () { return []; }, { offset: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], length: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], vertical: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], included: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: slider.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzSliderModule {
}
NzSliderModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: NzSliderModule });
NzSliderModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function NzSliderModule_Factory(t) { return new (t || NzSliderModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["PlatformModule"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_8__["NzToolTipModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](NzSliderModule, { declarations: function () { return [NzSliderComponent,
        NzSliderTrackComponent,
        NzSliderHandleComponent,
        NzSliderStepComponent,
        NzSliderMarksComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["PlatformModule"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_8__["NzToolTipModule"]]; }, exports: function () { return [NzSliderComponent,
        NzSliderTrackComponent,
        NzSliderHandleComponent,
        NzSliderStepComponent,
        NzSliderMarksComponent]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](NzSliderModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
                exports: [NzSliderComponent, NzSliderTrackComponent, NzSliderHandleComponent, NzSliderStepComponent, NzSliderMarksComponent],
                declarations: [NzSliderComponent, NzSliderTrackComponent, NzSliderHandleComponent, NzSliderStepComponent, NzSliderMarksComponent],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["PlatformModule"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_8__["NzToolTipModule"]]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: typings.ts
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
function NzMarkObj() { }
if (false) {}
class NzMarks {
}
/**
 * Processed steps that would be passed to sub components.
 * @record
 */
function NzExtendedMark() { }
if (false) {}
/**
 * Marks that would be rendered.
 * @record
 */
function NzDisplayedMark() { }
if (false) {}
/**
 * Steps that would be rendered.
 * @record
 */
function NzDisplayedStep() { }
if (false) {}
/**
 * @record
 */
function NzSliderHandler() { }
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ng-zorro-antd-slider.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ng-zorro-antd-slider.js.map

/***/ })

};;
//# sourceMappingURL=grid-index-module~slider-index-module~space-index-module~typography-index-module.js.map