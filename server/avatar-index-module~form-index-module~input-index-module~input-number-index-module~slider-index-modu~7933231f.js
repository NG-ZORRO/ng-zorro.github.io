exports.ids = ["avatar-index-module~form-index-module~input-index-module~input-number-index-module~slider-index-modu~7933231f"];
exports.modules = {

/***/ "nJzI":
/*!*********************************************************************!*\
  !*** ./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-input-number.js ***!
  \*********************************************************************/
/*! exports provided: NzInputNumberComponent, NzInputNumberModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzInputNumberComponent", function() { return NzInputNumberComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzInputNumberModule", function() { return NzInputNumberModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "zOht");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/a11y */ "u47x");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/keycodes */ "FtGj");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/core/util */ "d1+9");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/icon */ "MOHP");









/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */





const _c0 = ["inputElement"];
class NzInputNumberComponent {
    constructor(elementRef, cdr, focusMonitor) {
        this.elementRef = elementRef;
        this.cdr = cdr;
        this.focusMonitor = focusMonitor;
        this.isFocused = false;
        this.disabledUp = false;
        this.disabledDown = false;
        this.onChange = () => { };
        this.onTouched = () => { };
        this.nzBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.nzFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.nzSize = 'default';
        this.nzMin = -Infinity;
        this.nzMax = Infinity;
        this.nzParser = (value) => value
            .trim()
            .replace(/。/g, '.')
            .replace(/[^\w\.-]+/g, '');
        this.nzPrecisionMode = 'toFixed';
        this.nzPlaceHolder = '';
        this.nzStep = 1;
        this.nzInputMode = 'decimal';
        this.nzId = null;
        this.nzDisabled = false;
        this.nzAutoFocus = false;
        this.nzFormatter = value => value;
        // TODO: move to host after View Engine deprecation
        this.elementRef.nativeElement.classList.add('ant-input-number');
    }
    onModelChange(value) {
        this.parsedValue = this.nzParser(value);
        this.inputElement.nativeElement.value = `${this.parsedValue}`;
        const validValue = this.getCurrentValidValue(this.parsedValue);
        this.setValue(validValue);
    }
    getCurrentValidValue(value) {
        let val = value;
        if (val === '') {
            val = '';
        }
        else if (!this.isNotCompleteNumber(val)) {
            val = `${this.getValidValue(val)}`;
        }
        else {
            val = this.value;
        }
        return this.toNumber(val);
    }
    // '1.' '1x' 'xx' '' => are not complete numbers
    isNotCompleteNumber(num) {
        return isNaN(num) || num === '' || num === null || !!(num && num.toString().indexOf('.') === num.toString().length - 1);
    }
    getValidValue(value) {
        let val = parseFloat(value);
        // https://github.com/ant-design/ant-design/issues/7358
        if (isNaN(val)) {
            return value;
        }
        if (val < this.nzMin) {
            val = this.nzMin;
        }
        if (val > this.nzMax) {
            val = this.nzMax;
        }
        return val;
    }
    toNumber(num) {
        if (this.isNotCompleteNumber(num)) {
            return num;
        }
        const numStr = String(num);
        if (numStr.indexOf('.') >= 0 && Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__["isNotNil"])(this.nzPrecision)) {
            if (typeof this.nzPrecisionMode === 'function') {
                return this.nzPrecisionMode(num, this.nzPrecision);
            }
            else if (this.nzPrecisionMode === 'cut') {
                const numSplit = numStr.split('.');
                numSplit[1] = numSplit[1].slice(0, this.nzPrecision);
                return Number(numSplit.join('.'));
            }
            return Number(Number(num).toFixed(this.nzPrecision));
        }
        return Number(num);
    }
    getRatio(e) {
        let ratio = 1;
        if (e.metaKey || e.ctrlKey) {
            ratio = 0.1;
        }
        else if (e.shiftKey) {
            ratio = 10;
        }
        return ratio;
    }
    down(e, ratio) {
        if (!this.isFocused) {
            this.focus();
        }
        this.step('down', e, ratio);
    }
    up(e, ratio) {
        if (!this.isFocused) {
            this.focus();
        }
        this.step('up', e, ratio);
    }
    getPrecision(value) {
        const valueString = value.toString();
        if (valueString.indexOf('e-') >= 0) {
            return parseInt(valueString.slice(valueString.indexOf('e-') + 2), 10);
        }
        let precision = 0;
        if (valueString.indexOf('.') >= 0) {
            precision = valueString.length - valueString.indexOf('.') - 1;
        }
        return precision;
    }
    // step={1.0} value={1.51}
    // press +
    // then value should be 2.51, rather than 2.5
    // if this.props.precision is undefined
    // https://github.com/react-component/input-number/issues/39
    getMaxPrecision(currentValue, ratio) {
        if (Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__["isNotNil"])(this.nzPrecision)) {
            return this.nzPrecision;
        }
        const ratioPrecision = this.getPrecision(ratio);
        const stepPrecision = this.getPrecision(this.nzStep);
        const currentValuePrecision = this.getPrecision(currentValue);
        if (!currentValue) {
            return ratioPrecision + stepPrecision;
        }
        return Math.max(currentValuePrecision, ratioPrecision + stepPrecision);
    }
    getPrecisionFactor(currentValue, ratio) {
        const precision = this.getMaxPrecision(currentValue, ratio);
        return Math.pow(10, precision);
    }
    upStep(val, rat) {
        const precisionFactor = this.getPrecisionFactor(val, rat);
        const precision = Math.abs(this.getMaxPrecision(val, rat));
        let result;
        if (typeof val === 'number') {
            result = ((precisionFactor * val + precisionFactor * this.nzStep * rat) / precisionFactor).toFixed(precision);
        }
        else {
            result = this.nzMin === -Infinity ? this.nzStep : this.nzMin;
        }
        return this.toNumber(result);
    }
    downStep(val, rat) {
        const precisionFactor = this.getPrecisionFactor(val, rat);
        const precision = Math.abs(this.getMaxPrecision(val, rat));
        let result;
        if (typeof val === 'number') {
            result = ((precisionFactor * val - precisionFactor * this.nzStep * rat) / precisionFactor).toFixed(precision);
        }
        else {
            result = this.nzMin === -Infinity ? -this.nzStep : this.nzMin;
        }
        return this.toNumber(result);
    }
    step(type, e, ratio = 1) {
        this.stop();
        e.preventDefault();
        if (this.nzDisabled) {
            return;
        }
        const value = this.getCurrentValidValue(this.parsedValue) || 0;
        let val = 0;
        if (type === 'up') {
            val = this.upStep(value, ratio);
        }
        else if (type === 'down') {
            val = this.downStep(value, ratio);
        }
        const outOfRange = val > this.nzMax || val < this.nzMin;
        if (val > this.nzMax) {
            val = this.nzMax;
        }
        else if (val < this.nzMin) {
            val = this.nzMin;
        }
        this.setValue(val);
        this.updateDisplayValue(val);
        this.isFocused = true;
        if (outOfRange) {
            return;
        }
        this.autoStepTimer = setTimeout(() => {
            this[type](e, ratio);
        }, 300);
    }
    stop() {
        if (this.autoStepTimer) {
            clearTimeout(this.autoStepTimer);
        }
    }
    setValue(value) {
        if (`${this.value}` !== `${value}`) {
            this.onChange(value);
        }
        this.value = value;
        this.parsedValue = value;
        this.disabledUp = this.disabledDown = false;
        if (value || value === 0) {
            const val = Number(value);
            if (val >= this.nzMax) {
                this.disabledUp = true;
            }
            if (val <= this.nzMin) {
                this.disabledDown = true;
            }
        }
    }
    updateDisplayValue(value) {
        const displayValue = Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__["isNotNil"])(this.nzFormatter(value)) ? this.nzFormatter(value) : '';
        this.displayValue = displayValue;
        this.inputElement.nativeElement.value = `${displayValue}`;
    }
    onKeyDown(e) {
        if (e.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["UP_ARROW"]) {
            const ratio = this.getRatio(e);
            this.up(e, ratio);
            this.stop();
        }
        else if (e.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["DOWN_ARROW"]) {
            const ratio = this.getRatio(e);
            this.down(e, ratio);
            this.stop();
        }
        else if (e.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["ENTER"]) {
            this.updateDisplayValue(this.value);
        }
    }
    writeValue(value) {
        this.value = value;
        this.setValue(value);
        this.updateDisplayValue(value);
        this.cdr.markForCheck();
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(disabled) {
        this.nzDisabled = disabled;
        this.cdr.markForCheck();
    }
    focus() {
        this.focusMonitor.focusVia(this.inputElement, 'keyboard');
    }
    blur() {
        this.inputElement.nativeElement.blur();
    }
    ngOnInit() {
        this.focusMonitor.monitor(this.elementRef, true).subscribe(focusOrigin => {
            if (!focusOrigin) {
                this.isFocused = false;
                this.updateDisplayValue(this.value);
                this.nzBlur.emit();
                Promise.resolve().then(() => this.onTouched());
            }
            else {
                this.isFocused = true;
                this.nzFocus.emit();
            }
        });
    }
    ngOnChanges(changes) {
        if (changes.nzFormatter && !changes.nzFormatter.isFirstChange()) {
            const validValue = this.getCurrentValidValue(this.parsedValue);
            this.setValue(validValue);
            this.updateDisplayValue(validValue);
        }
    }
    ngAfterViewInit() {
        if (this.nzAutoFocus) {
            this.focus();
        }
    }
    ngOnDestroy() {
        this.focusMonitor.stopMonitoring(this.elementRef);
    }
}
/** @nocollapse */
NzInputNumberComponent.ɵfac = function NzInputNumberComponent_Factory(t) { return new (t || NzInputNumberComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["FocusMonitor"])); };
/** @nocollapse */
NzInputNumberComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: NzInputNumberComponent, selectors: [["nz-input-number"]], viewQuery: function NzInputNumberComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.inputElement = _t.first);
    } }, hostVars: 8, hostBindings: function NzInputNumberComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("ant-input-number-focused", ctx.isFocused)("ant-input-number-lg", ctx.nzSize === "large")("ant-input-number-sm", ctx.nzSize === "small")("ant-input-number-disabled", ctx.nzDisabled);
    } }, inputs: { nzSize: "nzSize", nzMin: "nzMin", nzMax: "nzMax", nzParser: "nzParser", nzPrecisionMode: "nzPrecisionMode", nzPlaceHolder: "nzPlaceHolder", nzStep: "nzStep", nzInputMode: "nzInputMode", nzId: "nzId", nzDisabled: "nzDisabled", nzAutoFocus: "nzAutoFocus", nzFormatter: "nzFormatter", nzPrecision: "nzPrecision" }, outputs: { nzBlur: "nzBlur", nzFocus: "nzFocus" }, exportAs: ["nzInputNumber"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["forwardRef"])((() => NzInputNumberComponent)),
                multi: true
            }
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]], decls: 8, vars: 13, consts: [[1, "ant-input-number-handler-wrap"], ["unselectable", "unselectable", 1, "ant-input-number-handler", "ant-input-number-handler-up", 3, "mousedown", "mouseup", "mouseleave"], ["nz-icon", "", "nzType", "up", 1, "ant-input-number-handler-up-inner"], ["unselectable", "unselectable", 1, "ant-input-number-handler", "ant-input-number-handler-down", 3, "mousedown", "mouseup", "mouseleave"], ["nz-icon", "", "nzType", "down", 1, "ant-input-number-handler-down-inner"], [1, "ant-input-number-input-wrap"], ["autocomplete", "off", 1, "ant-input-number-input", 3, "disabled", "placeholder", "ngModel", "keydown", "keyup", "ngModelChange"], ["inputElement", ""]], template: function NzInputNumberComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("mousedown", function NzInputNumberComponent_Template_span_mousedown_1_listener($event) { return ctx.up($event); })("mouseup", function NzInputNumberComponent_Template_span_mouseup_1_listener() { return ctx.stop(); })("mouseleave", function NzInputNumberComponent_Template_span_mouseleave_1_listener() { return ctx.stop(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("mousedown", function NzInputNumberComponent_Template_span_mousedown_3_listener($event) { return ctx.down($event); })("mouseup", function NzInputNumberComponent_Template_span_mouseup_3_listener() { return ctx.stop(); })("mouseleave", function NzInputNumberComponent_Template_span_mouseleave_3_listener() { return ctx.stop(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "input", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keydown", function NzInputNumberComponent_Template_input_keydown_6_listener($event) { return ctx.onKeyDown($event); })("keyup", function NzInputNumberComponent_Template_input_keyup_6_listener() { return ctx.stop(); })("ngModelChange", function NzInputNumberComponent_Template_input_ngModelChange_6_listener($event) { return ctx.onModelChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("ant-input-number-handler-up-disabled", ctx.disabledUp);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("ant-input-number-handler-down-disabled", ctx.disabledDown);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.nzDisabled)("placeholder", ctx.nzPlaceHolder)("ngModel", ctx.displayValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("id", ctx.nzId)("autofocus", ctx.nzAutoFocus ? "autofocus" : null)("min", ctx.nzMin)("max", ctx.nzMax)("step", ctx.nzStep)("inputmode", ctx.nzInputMode);
    } }, directives: [ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__["NzIconDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], encapsulation: 2, changeDetection: 0 });
NzInputNumberComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] },
    { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["FocusMonitor"] }
];
NzInputNumberComponent.propDecorators = {
    nzBlur: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    nzFocus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    inputElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['inputElement', { static: true },] }],
    nzSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzMin: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzMax: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzParser: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzPrecision: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzPrecisionMode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzPlaceHolder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzStep: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzInputMode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzAutoFocus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzFormatter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], NzInputNumberComponent.prototype, "nzDisabled", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], NzInputNumberComponent.prototype, "nzAutoFocus", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](NzInputNumberComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                selector: 'nz-input-number',
                exportAs: 'nzInputNumber',
                template: `
    <div class="ant-input-number-handler-wrap">
      <span
        unselectable="unselectable"
        class="ant-input-number-handler ant-input-number-handler-up"
        (mousedown)="up($event)"
        (mouseup)="stop()"
        (mouseleave)="stop()"
        [class.ant-input-number-handler-up-disabled]="disabledUp"
      >
        <i nz-icon nzType="up" class="ant-input-number-handler-up-inner"></i>
      </span>
      <span
        unselectable="unselectable"
        class="ant-input-number-handler ant-input-number-handler-down"
        (mousedown)="down($event)"
        (mouseup)="stop()"
        (mouseleave)="stop()"
        [class.ant-input-number-handler-down-disabled]="disabledDown"
      >
        <i nz-icon nzType="down" class="ant-input-number-handler-down-inner"></i>
      </span>
    </div>
    <div class="ant-input-number-input-wrap">
      <input
        #inputElement
        autocomplete="off"
        class="ant-input-number-input"
        [attr.id]="nzId"
        [attr.autofocus]="nzAutoFocus ? 'autofocus' : null"
        [disabled]="nzDisabled"
        [attr.min]="nzMin"
        [attr.max]="nzMax"
        [placeholder]="nzPlaceHolder"
        [attr.step]="nzStep"
        [attr.inputmode]="nzInputMode"
        (keydown)="onKeyDown($event)"
        (keyup)="stop()"
        [ngModel]="displayValue"
        (ngModelChange)="onModelChange($event)"
      />
    </div>
  `,
                providers: [
                    {
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["forwardRef"])((() => NzInputNumberComponent)),
                        multi: true
                    }
                ],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
                host: {
                    '[class.ant-input-number-focused]': 'isFocused',
                    '[class.ant-input-number-lg]': `nzSize === 'large'`,
                    '[class.ant-input-number-sm]': `nzSize === 'small'`,
                    '[class.ant-input-number-disabled]': 'nzDisabled'
                }
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] }, { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["FocusMonitor"] }]; }, { nzBlur: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }], nzFocus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }], nzSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzMin: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzMax: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzParser: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzPrecisionMode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzPlaceHolder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzStep: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzInputMode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzAutoFocus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzFormatter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], inputElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: ['inputElement', { static: true }]
        }], nzPrecision: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }] }); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzInputNumberModule {
}
/** @nocollapse */
NzInputNumberModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: NzInputNumberModule });
/** @nocollapse */
NzInputNumberModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function NzInputNumberModule_Factory(t) { return new (t || NzInputNumberModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__["NzIconModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](NzInputNumberModule, { declarations: function () { return [NzInputNumberComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__["NzIconModule"]]; }, exports: function () { return [NzInputNumberComponent]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](NzInputNumberModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__["NzIconModule"]],
                declarations: [NzInputNumberComponent],
                exports: [NzInputNumberComponent]
            }]
    }], null, null); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=ng-zorro-antd-input-number.js.map

/***/ })

};;
//# sourceMappingURL=avatar-index-module~form-index-module~input-index-module~input-number-index-module~slider-index-modu~7933231f.js.map