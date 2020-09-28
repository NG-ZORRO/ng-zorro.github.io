exports.ids = ["grid-index-module~pipes-index-module~slider-index-module~space-index-module~typography-index-module"];
exports.modules = {

/***/ "Dkbx":
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "zOht");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/keycodes */ "FtGj");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/platform */ "nLfN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/core/util */ "d1+9");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ "pk25");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");











/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
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
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("vertical", ctx_r2.nzVertical)("reverse", ctx_r2.nzReverse)("offset", handle_r4.offset)("value", handle_r4.value)("active", handle_r4.active)("tooltipFormatter", ctx_r2.nzTipFormatter)("tooltipVisible", ctx_r2.nzTooltipVisible)("tooltipPlacement", ctx_r2.nzTooltipPlacement);
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
/** @nocollapse */
NzSliderService.ɵfac = function NzSliderService_Factory(t) { return new (t || NzSliderService)(); };
/** @nocollapse */
NzSliderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: NzSliderService, factory: NzSliderService.ɵfac });

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzSliderHandleComponent {
    constructor(sliderService, cdr) {
        this.sliderService = sliderService;
        this.cdr = cdr;
        this.tooltipVisible = 'default';
        this.active = false;
        this.style = {};
        this.enterHandle = () => {
            if (!this.sliderService.isDragging) {
                this.toggleTooltip(true);
                this.updateTooltipPosition();
                this.cdr.detectChanges();
            }
        };
        this.leaveHandle = () => {
            if (!this.sliderService.isDragging) {
                this.toggleTooltip(false);
                this.cdr.detectChanges();
            }
        };
    }
    ngOnChanges(changes) {
        const { offset, value, active, tooltipVisible, reverse } = changes;
        if (offset || reverse) {
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
            Promise.resolve().then(() => this.toggleTooltip(true, true));
        }
    }
    focus() {
        var _a;
        (_a = this.handleEl) === null || _a === void 0 ? void 0 : _a.nativeElement.focus();
    }
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
    updateTooltipTitle() {
        this.tooltipTitle = this.tooltipFormatter ? this.tooltipFormatter(this.value) : `${this.value}`;
    }
    updateTooltipPosition() {
        if (this.tooltip) {
            Promise.resolve().then(() => { var _a; return (_a = this.tooltip) === null || _a === void 0 ? void 0 : _a.updatePosition(); });
        }
    }
    updateStyle() {
        const vertical = this.vertical;
        const reverse = this.reverse;
        const offset = this.offset;
        const positionStyle = vertical
            ? {
                [reverse ? 'top' : 'bottom']: `${offset}%`,
                [reverse ? 'bottom' : 'top']: 'auto',
                transform: reverse ? null : `translateY(+50%)`
            }
            : {
                [reverse ? 'right' : 'left']: `${offset}%`,
                [reverse ? 'left' : 'right']: 'auto',
                transform: `translateX(${reverse ? '+' : '-'}50%)`
            };
        this.style = positionStyle;
        this.cdr.markForCheck();
    }
}
/** @nocollapse */
NzSliderHandleComponent.ɵfac = function NzSliderHandleComponent_Factory(t) { return new (t || NzSliderHandleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](NzSliderService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"])); };
/** @nocollapse */
NzSliderHandleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: NzSliderHandleComponent, selectors: [["nz-slider-handle"]], viewQuery: function NzSliderHandleComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_8__["NzTooltipDirective"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.handleEl = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.tooltip = _t.first);
    } }, hostBindings: function NzSliderHandleComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("mouseenter", function NzSliderHandleComponent_mouseenter_HostBindingHandler() { return ctx.enterHandle(); })("mouseleave", function NzSliderHandleComponent_mouseleave_HostBindingHandler() { return ctx.leaveHandle(); });
    } }, inputs: { tooltipVisible: "tooltipVisible", active: "active", vertical: "vertical", reverse: "reverse", offset: "offset", value: "value", tooltipPlacement: "tooltipPlacement", tooltipFormatter: "tooltipFormatter" }, exportAs: ["nzSliderHandle"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]], decls: 2, vars: 4, consts: [["tabindex", "0", "nz-tooltip", "", 1, "ant-slider-handle", 3, "ngStyle", "nzTooltipTitle", "nzTooltipTrigger", "nzTooltipPlacement"], ["handle", ""]], template: function NzSliderHandleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 0, 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", ctx.style)("nzTooltipTitle", ctx.tooltipFormatter === null || ctx.tooltipVisible === "never" ? null : ctx.tooltipTitle)("nzTooltipTrigger", null)("nzTooltipPlacement", ctx.tooltipPlacement);
    } }, directives: [ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_8__["NzTooltipDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgStyle"]], encapsulation: 2, changeDetection: 0 });
NzSliderHandleComponent.ctorParameters = () => [
    { type: NzSliderService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] }
];
NzSliderHandleComponent.propDecorators = {
    handleEl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['handle', { static: false },] }],
    tooltip: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_8__["NzTooltipDirective"], { static: false },] }],
    vertical: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    reverse: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
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

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzSliderComponent {
    constructor(sliderService, cdr, platform) {
        this.sliderService = sliderService;
        this.cdr = cdr;
        this.platform = platform;
        this.nzDisabled = false;
        this.nzDots = false;
        this.nzIncluded = true;
        this.nzRange = false;
        this.nzVertical = false;
        this.nzReverse = false;
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
        this.track = { offset: null, length: null }; // Track's offset and length
        this.handles = []; // Handles' offset
        this.marksArray = null; // "steps" in array type with more data & FILTER out the invalid mark
        this.bounds = { lower: null, upper: null }; // now for nz-slider-step
    }
    ngOnInit() {
        this.handles = generateHandlers(this.nzRange ? 2 : 1);
        this.marksArray = this.nzMarks ? this.generateMarkItems(this.nzMarks) : null;
        this.bindDraggingHandlers();
        this.toggleDragDisabled(this.nzDisabled);
        if (this.getValue() === null) {
            this.setValue(this.formatValue(null));
        }
    }
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
    ngOnDestroy() {
        this.unsubscribeDrag();
    }
    writeValue(val) {
        this.setValue(val, true);
    }
    onValueChange(_value) { }
    onTouched() { }
    registerOnChange(fn) {
        this.onValueChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.nzDisabled = isDisabled;
        this.toggleDragDisabled(isDisabled);
    }
    /**
     * Event handler is only triggered when a slider handler is focused.
     */
    onKeyDown(e) {
        const code = e.keyCode;
        const isIncrease = code === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__["RIGHT_ARROW"] || code === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__["UP_ARROW"];
        const isDecrease = code === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__["LEFT_ARROW"] || code === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__["DOWN_ARROW"];
        if (!(isIncrease || isDecrease)) {
            return;
        }
        e.preventDefault();
        const step = (isDecrease ? -this.nzStep : this.nzStep) * (this.nzReverse ? -1 : 1);
        const newVal = this.nzRange ? this.value[this.activeValueIndex] + step : this.value + step;
        this.setActiveValue(Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__["ensureNumberInRange"])(newVal, this.nzMin, this.nzMax));
    }
    setValue(value, isWriteValue = false) {
        if (isWriteValue) {
            this.value = this.formatValue(value);
            this.updateTrackAndHandles();
        }
        else if (!valuesEqual(this.value, value)) {
            this.value = value;
            this.updateTrackAndHandles();
            this.onValueChange(this.getValue(true));
        }
    }
    getValue(cloneAndSort = false) {
        if (cloneAndSort && this.value && isValueRange(this.value)) {
            return [...this.value].sort((a, b) => a - b);
        }
        return this.value;
    }
    /**
     * Clone & sort current value and convert them to offsets, then return the new one.
     */
    getValueToOffset(value) {
        let normalizedValue = value;
        if (typeof normalizedValue === 'undefined') {
            normalizedValue = this.getValue(true);
        }
        return isValueRange(normalizedValue) ? normalizedValue.map(val => this.valueToOffset(val)) : this.valueToOffset(normalizedValue);
    }
    /**
     * Find the closest value to be activated.
     */
    setActiveValueIndex(pointerValue) {
        const value = this.getValue();
        if (isValueRange(value)) {
            let minimal = null;
            let gap;
            let activeIndex = -1;
            value.forEach((val, index) => {
                gap = Math.abs(pointerValue - val);
                if (minimal === null || gap < minimal) {
                    minimal = gap;
                    activeIndex = index;
                }
            });
            this.activeValueIndex = activeIndex;
            this.handlerComponents.toArray()[activeIndex].focus();
        }
        else {
            this.handlerComponents.toArray()[0].focus();
        }
    }
    setActiveValue(pointerValue) {
        if (isValueRange(this.value)) {
            const newValue = [...this.value];
            newValue[this.activeValueIndex] = pointerValue;
            this.setValue(newValue);
        }
        else {
            this.setValue(pointerValue);
        }
    }
    /**
     * Update track and handles' position and length.
     */
    updateTrackAndHandles() {
        const value = this.getValue();
        const offset = this.getValueToOffset(value);
        const valueSorted = this.getValue(true);
        const offsetSorted = this.getValueToOffset(valueSorted);
        const boundParts = isValueRange(valueSorted) ? valueSorted : [0, valueSorted];
        const trackParts = isValueRange(offsetSorted) ? [offsetSorted[0], offsetSorted[1] - offsetSorted[0]] : [0, offsetSorted];
        this.handles.forEach((handle, index) => {
            handle.offset = isValueRange(offset) ? offset[index] : offset;
            handle.value = isValueRange(value) ? value[index] : value || 0;
        });
        [this.bounds.lower, this.bounds.upper] = boundParts;
        [this.track.offset, this.track.length] = trackParts;
        this.cdr.markForCheck();
    }
    onDragStart(value) {
        this.toggleDragMoving(true);
        this.cacheSliderProperty();
        this.setActiveValueIndex(this.getLogicalValue(value));
        this.setActiveValue(this.getLogicalValue(value));
        this.showHandleTooltip(this.nzRange ? this.activeValueIndex : 0);
    }
    onDragMove(value) {
        this.setActiveValue(this.getLogicalValue(value));
        this.cdr.markForCheck();
    }
    getLogicalValue(value) {
        return this.nzReverse ? this.nzMax - value + this.nzMin : value;
    }
    onDragEnd() {
        this.nzOnAfterChange.emit(this.getValue(true));
        this.toggleDragMoving(false);
        this.cacheSliderProperty(true);
        this.hideAllHandleTooltip();
        this.cdr.markForCheck();
    }
    /**
     * Create user interactions handles.
     */
    bindDraggingHandlers() {
        if (!this.platform.isBrowser) {
            return;
        }
        const sliderDOM = this.slider.nativeElement;
        const orientField = this.nzVertical ? 'pageY' : 'pageX';
        const mouse = {
            start: 'mousedown',
            move: 'mousemove',
            end: 'mouseup',
            pluckKey: [orientField]
        };
        const touch = {
            start: 'touchstart',
            move: 'touchmove',
            end: 'touchend',
            pluckKey: ['touches', '0', orientField],
            filter: (e) => e instanceof TouchEvent
        };
        [mouse, touch].forEach(source => {
            const { start, move, end, pluckKey, filter: filterFunc = () => true } = source;
            source.startPlucked$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["fromEvent"])(sliderDOM, start).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])(filterFunc), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__["silentEvent"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["pluck"])(...pluckKey), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])((position) => this.findClosestValue(position)));
            source.end$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["fromEvent"])(document, end);
            source.moveResolved$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["fromEvent"])(document, move).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])(filterFunc), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__["silentEvent"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["pluck"])(...pluckKey), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])((position) => this.findClosestValue(position)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(source.end$));
        });
        this.dragStart$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["merge"])(mouse.startPlucked$, touch.startPlucked$);
        this.dragMove$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["merge"])(mouse.moveResolved$, touch.moveResolved$);
        this.dragEnd$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["merge"])(mouse.end$, touch.end$);
    }
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
    toggleDragMoving(movable) {
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
    toggleDragDisabled(disabled) {
        if (disabled) {
            this.unsubscribeDrag();
        }
        else {
            this.subscribeDrag(['start']);
        }
    }
    findClosestValue(position) {
        const sliderStart = this.getSliderStartPosition();
        const sliderLength = this.getSliderLength();
        const ratio = Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__["ensureNumberInRange"])((position - sliderStart) / sliderLength, 0, 1);
        const val = (this.nzMax - this.nzMin) * (this.nzVertical ? 1 - ratio : ratio) + this.nzMin;
        const points = this.nzMarks === null ? [] : Object.keys(this.nzMarks).map(parseFloat);
        if (this.nzStep !== 0 && !this.nzDots) {
            const closestOne = Math.round(val / this.nzStep) * this.nzStep;
            points.push(closestOne);
        }
        const gaps = points.map(point => Math.abs(val - point));
        const closest = points[gaps.indexOf(Math.min(...gaps))];
        return this.nzStep === null ? closest : parseFloat(closest.toFixed(Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__["getPrecision"])(this.nzStep)));
    }
    valueToOffset(value) {
        return Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__["getPercent"])(this.nzMin, this.nzMax, value);
    }
    getSliderStartPosition() {
        if (this.cacheSliderStart !== null) {
            return this.cacheSliderStart;
        }
        const offset = Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__["getElementOffset"])(this.slider.nativeElement);
        return this.nzVertical ? offset.top : offset.left;
    }
    getSliderLength() {
        if (this.cacheSliderLength !== null) {
            return this.cacheSliderLength;
        }
        const sliderDOM = this.slider.nativeElement;
        return this.nzVertical ? sliderDOM.clientHeight : sliderDOM.clientWidth;
    }
    /**
     * Cache DOM layout/reflow operations for performance (may not necessary?)
     */
    cacheSliderProperty(remove = false) {
        this.cacheSliderStart = remove ? null : this.getSliderStartPosition();
        this.cacheSliderLength = remove ? null : this.getSliderLength();
    }
    formatValue(value) {
        if (!value) {
            return this.nzRange ? [this.nzMin, this.nzMax] : this.nzMin;
        }
        else if (assertValueValid(value, this.nzRange)) {
            return isValueRange(value)
                ? value.map(val => Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__["ensureNumberInRange"])(val, this.nzMin, this.nzMax))
                : Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__["ensureNumberInRange"])(value, this.nzMin, this.nzMax);
        }
        else {
            return this.nzDefaultValue ? this.nzDefaultValue : this.nzRange ? [this.nzMin, this.nzMax] : this.nzMin;
        }
    }
    /**
     * Show one handle's tooltip and hide others'.
     */
    showHandleTooltip(handleIndex = 0) {
        this.handles.forEach((handle, index) => {
            handle.active = index === handleIndex;
        });
    }
    hideAllHandleTooltip() {
        this.handles.forEach(handle => (handle.active = false));
    }
    generateMarkItems(marks) {
        const marksArray = [];
        for (const key in marks) {
            const mark = marks[key];
            const val = typeof key === 'number' ? key : parseFloat(key);
            if (val >= this.nzMin && val <= this.nzMax) {
                marksArray.push({ value: val, offset: this.valueToOffset(val), config: mark });
            }
        }
        return marksArray.length ? marksArray : null;
    }
}
/** @nocollapse */
NzSliderComponent.ɵfac = function NzSliderComponent_Factory(t) { return new (t || NzSliderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](NzSliderService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"])); };
/** @nocollapse */
NzSliderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: NzSliderComponent, selectors: [["nz-slider"]], viewQuery: function NzSliderComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstaticViewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](NzSliderHandleComponent, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.slider = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.handlerComponents = _t);
    } }, hostBindings: function NzSliderComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keydown", function NzSliderComponent_keydown_HostBindingHandler($event) { return ctx.onKeyDown($event); });
    } }, inputs: { nzDisabled: "nzDisabled", nzDots: "nzDots", nzIncluded: "nzIncluded", nzRange: "nzRange", nzVertical: "nzVertical", nzReverse: "nzReverse", nzMarks: "nzMarks", nzMax: "nzMax", nzMin: "nzMin", nzStep: "nzStep", nzTooltipVisible: "nzTooltipVisible", nzTooltipPlacement: "nzTooltipPlacement", nzDefaultValue: "nzDefaultValue", nzTipFormatter: "nzTipFormatter" }, outputs: { nzOnAfterChange: "nzOnAfterChange" }, exportAs: ["nzSlider"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["forwardRef"])((() => NzSliderComponent)),
                multi: true
            },
            NzSliderService
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]], decls: 7, vars: 14, consts: [[1, "ant-slider"], ["slider", ""], [1, "ant-slider-rail"], [3, "vertical", "included", "offset", "length", "reverse"], [3, "vertical", "lowerBound", "upperBound", "marksArray", "included", 4, "ngIf"], [3, "vertical", "reverse", "offset", "value", "active", "tooltipFormatter", "tooltipVisible", "tooltipPlacement", 4, "ngFor", "ngForOf"], [3, "vertical", "min", "max", "lowerBound", "upperBound", "marksArray", "included", 4, "ngIf"], [3, "vertical", "lowerBound", "upperBound", "marksArray", "included"], [3, "vertical", "reverse", "offset", "value", "active", "tooltipFormatter", "tooltipVisible", "tooltipPlacement"], [3, "vertical", "min", "max", "lowerBound", "upperBound", "marksArray", "included"]], template: function NzSliderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "nz-slider-track", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, NzSliderComponent_nz_slider_step_4_Template, 1, 5, "nz-slider-step", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, NzSliderComponent_nz_slider_handle_5_Template, 1, 8, "nz-slider-handle", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, NzSliderComponent_nz_slider_marks_6_Template, 1, 7, "nz-slider-marks", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("ant-slider-disabled", ctx.nzDisabled)("ant-slider-vertical", ctx.nzVertical)("ant-slider-with-marks", ctx.marksArray);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("vertical", ctx.nzVertical)("included", ctx.nzIncluded)("offset", ctx.track.offset)("length", ctx.track.length)("reverse", ctx.nzReverse);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.marksArray);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.handles);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.marksArray);
    } }, directives: function () { return [NzSliderTrackComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], NzSliderStepComponent, NzSliderHandleComponent, NzSliderMarksComponent]; }, encapsulation: 2, changeDetection: 0 });
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
    nzReverse: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
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
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], NzSliderComponent.prototype, "nzReverse", void 0);
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
function getValueTypeNotMatchError() {
    return new Error(`The "nzRange" can't match the "ngModel"'s type, please check these properties: "nzRange", "ngModel", "nzDefaultValue".`);
}
function isValueRange(value) {
    if (value instanceof Array) {
        return value.length === 2;
    }
    else {
        return false;
    }
}
function generateHandlers(amount) {
    return Array(amount)
        .fill(0)
        .map(() => ({ offset: null, value: null, active: false }));
}
/**
 * Check if value is valid and throw error if value-type/range not match.
 */
function assertValueValid(value, isRange) {
    if ((!isValueRange(value) && isNaN(value)) || (isValueRange(value) && value.some(v => isNaN(v)))) {
        return false;
    }
    return assertValueTypeMatch(value, isRange);
}
/**
 * Assert that if `this.nzRange` is `true`, value is also a range, vice versa.
 */
function assertValueTypeMatch(value, isRange = false) {
    if (isValueRange(value) !== isRange) {
        throw getValueTypeNotMatchError();
    }
    return true;
}
function valuesEqual(valA, valB) {
    if (typeof valA !== typeof valB) {
        return false;
    }
    return isValueRange(valA) && isValueRange(valB) ? Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__["arraysEqual"])(valA, valB) : valA === valB;
}

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
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
    ngOnChanges(changes) {
        const { marksArray, lowerBound, upperBound } = changes;
        if (marksArray) {
            this.buildMarks();
        }
        if (marksArray || lowerBound || upperBound) {
            this.togglePointActive();
        }
    }
    trackById(_index, mark) {
        return mark.value;
    }
    buildMarks() {
        const range = this.max - this.min;
        this.marks = this.marksArray.map(mark => {
            const { value, offset, config } = mark;
            const style = this.getMarkStyles(value, range, config);
            const label = isConfigObject(config) ? config.label : config;
            return {
                label,
                offset,
                style,
                value,
                config,
                active: false
            };
        });
    }
    getMarkStyles(value, range, config) {
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
    togglePointActive() {
        if (this.marks && this.lowerBound !== null && this.upperBound !== null) {
            this.marks.forEach(mark => {
                const value = mark.value;
                const isActive = (!this.included && value === this.upperBound) || (this.included && value <= this.upperBound && value >= this.lowerBound);
                mark.active = isActive;
            });
        }
    }
}
/** @nocollapse */
NzSliderMarksComponent.ɵfac = function NzSliderMarksComponent_Factory(t) { return new (t || NzSliderMarksComponent)(); };
/** @nocollapse */
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
function isConfigObject(config) {
    return typeof config !== 'string';
}

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
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
    ngOnChanges(changes) {
        if (changes.marksArray) {
            this.buildSteps();
        }
        if (changes.marksArray || changes.lowerBound || changes.upperBound) {
            this.togglePointActive();
        }
    }
    trackById(_index, step) {
        return step.value;
    }
    buildSteps() {
        const orient = this.vertical ? 'bottom' : 'left';
        this.steps = this.marksArray.map(mark => {
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
        });
    }
    togglePointActive() {
        if (this.steps && this.lowerBound !== null && this.upperBound !== null) {
            this.steps.forEach(step => {
                const value = step.value;
                const isActive = (!this.included && value === this.upperBound) || (this.included && value <= this.upperBound && value >= this.lowerBound);
                step.active = isActive;
            });
        }
    }
}
/** @nocollapse */
NzSliderStepComponent.ɵfac = function NzSliderStepComponent_Factory(t) { return new (t || NzSliderStepComponent)(); };
/** @nocollapse */
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

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzSliderTrackComponent {
    constructor() {
        this.offset = 0;
        this.reverse = false;
        this.length = 0;
        this.vertical = false;
        this.included = false;
        this.style = {};
    }
    ngOnChanges() {
        const vertical = this.vertical;
        const reverse = this.reverse;
        const visibility = this.included ? 'visible' : 'hidden';
        const offset = this.offset;
        const length = this.length;
        const positonStyle = vertical
            ? {
                [reverse ? 'top' : 'bottom']: `${offset}%`,
                [reverse ? 'bottom' : 'top']: 'auto',
                height: `${length}%`,
                visibility
            }
            : {
                [reverse ? 'right' : 'left']: `${offset}%`,
                [reverse ? 'left' : 'right']: 'auto',
                width: `${length}%`,
                visibility
            };
        this.style = positonStyle;
    }
}
/** @nocollapse */
NzSliderTrackComponent.ɵfac = function NzSliderTrackComponent_Factory(t) { return new (t || NzSliderTrackComponent)(); };
/** @nocollapse */
NzSliderTrackComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: NzSliderTrackComponent, selectors: [["nz-slider-track"]], inputs: { offset: "offset", reverse: "reverse", length: "length", vertical: "vertical", included: "included" }, exportAs: ["nzSliderTrack"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]], decls: 1, vars: 1, consts: [[1, "ant-slider-track", 3, "ngStyle"]], template: function NzSliderTrackComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", ctx.style);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgStyle"]], encapsulation: 2, changeDetection: 0 });
NzSliderTrackComponent.propDecorators = {
    offset: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    reverse: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    length: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    vertical: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    included: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__["InputNumber"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], NzSliderTrackComponent.prototype, "offset", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], NzSliderTrackComponent.prototype, "reverse", void 0);
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
        }], reverse: [{
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
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["forwardRef"])((() => NzSliderComponent)),
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
      <nz-slider-track
        [vertical]="nzVertical"
        [included]="nzIncluded"
        [offset]="track.offset!"
        [length]="track.length!"
        [reverse]="nzReverse"
      ></nz-slider-track>
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
        [reverse]="nzReverse"
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
        }], nzReverse: [{
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
        }], reverse: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], length: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], vertical: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], included: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }] }); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzSliderModule {
}
/** @nocollapse */
NzSliderModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: NzSliderModule });
/** @nocollapse */
NzSliderModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function NzSliderModule_Factory(t) { return new (t || NzSliderModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["PlatformModule"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_8__["NzToolTipModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](NzSliderModule, { declarations: function () { return [NzSliderComponent, NzSliderTrackComponent, NzSliderHandleComponent, NzSliderStepComponent, NzSliderMarksComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["PlatformModule"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_8__["NzToolTipModule"]]; }, exports: function () { return [NzSliderComponent, NzSliderTrackComponent, NzSliderHandleComponent, NzSliderStepComponent, NzSliderMarksComponent]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](NzSliderModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
                exports: [NzSliderComponent, NzSliderTrackComponent, NzSliderHandleComponent, NzSliderStepComponent, NzSliderMarksComponent],
                declarations: [NzSliderComponent, NzSliderTrackComponent, NzSliderHandleComponent, NzSliderStepComponent, NzSliderMarksComponent],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["PlatformModule"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_8__["NzToolTipModule"]]
            }]
    }], null, null); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzMarks {
}

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=ng-zorro-antd-slider.js.map

/***/ })

};;
//# sourceMappingURL=grid-index-module~pipes-index-module~slider-index-module~space-index-module~typography-index-module.js.map