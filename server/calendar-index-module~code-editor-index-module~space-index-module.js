exports.ids = ["calendar-index-module~code-editor-index-module~space-index-module"];
exports.modules = {

/***/ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-calendar.js":
/*!*****************************************************************!*\
  !*** ./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-calendar.js ***!
  \*****************************************************************/
/*! exports provided: NzCalendarComponent, NzCalendarHeaderComponent, NzCalendarModule, NzDateCellDirective, NzDateFullCellDirective, NzMonthCellDirective, NzMonthFullCellDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzCalendarComponent", function() { return NzCalendarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzCalendarHeaderComponent", function() { return NzCalendarHeaderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzCalendarModule", function() { return NzCalendarModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDateCellDirective", function() { return NzDateCellDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDateFullCellDirective", function() { return NzDateFullCellDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzMonthCellDirective", function() { return NzMonthCellDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzMonthFullCellDirective", function() { return NzMonthFullCellDirective; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/date-picker */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-date-picker.js");
/* harmony import */ var ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/i18n */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-i18n.js");
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/radio */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-radio.js");
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/select */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-select.js");
/* harmony import */ var ng_zorro_antd_core_time__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/core/time */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-time.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/core/util */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-util.js");











/**
 * @fileoverview added by tsickle
 * Generated from: calendar-cells.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */








function NzCalendarHeaderComponent_nz_option_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nz-option", 7);
} if (rf & 2) {
    const year_r323 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzLabel", year_r323.label)("nzValue", year_r323.value);
} }
function NzCalendarHeaderComponent_nz_select_3_nz_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nz-option", 7);
} if (rf & 2) {
    const month_r325 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzLabel", month_r325.label)("nzValue", month_r325.value);
} }
function NzCalendarHeaderComponent_nz_select_3_Template(rf, ctx) { if (rf & 1) {
    const _r327 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nz-select", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function NzCalendarHeaderComponent_nz_select_3_Template_nz_select_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r327); const ctx_r326 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r326.monthChange.emit($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NzCalendarHeaderComponent_nz_select_3_nz_option_1_Template, 1, 2, "nz-option", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r322 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSize", ctx_r322.size)("nzDropdownMatchSelectWidth", false)("ngModel", ctx_r322.activeMonth);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r322.months);
} }
function NzCalendarComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
} }
function NzCalendarComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r334 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "date-table", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("valueChange", function NzCalendarComponent_ng_template_5_Template_date_table_valueChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r334); const ctx_r333 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r333.onDateSelect($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r330 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("prefixCls", ctx_r330.prefixCls)("value", ctx_r330.activeDate)("activeDate", ctx_r330.activeDate)("cellRender", ctx_r330.dateCell)("fullCellRender", ctx_r330.dateFullCell);
} }
function NzCalendarComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    const _r336 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "month-table", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("valueChange", function NzCalendarComponent_ng_template_7_Template_month_table_valueChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r336); const ctx_r335 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r335.onDateSelect($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r332 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("prefixCls", ctx_r332.prefixCls)("value", ctx_r332.activeDate)("activeDate", ctx_r332.activeDate)("cellRender", ctx_r332.monthCell)("fullCellRender", ctx_r332.monthFullCell);
} }
class NzDateCellDirective {
}
NzDateCellDirective.ɵfac = function NzDateCellDirective_Factory(t) { return new (t || NzDateCellDirective)(); };
NzDateCellDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: NzDateCellDirective, selectors: [["", "nzDateCell", ""]], exportAs: ["nzDateCell"] });
class NzMonthCellDirective {
}
NzMonthCellDirective.ɵfac = function NzMonthCellDirective_Factory(t) { return new (t || NzMonthCellDirective)(); };
NzMonthCellDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: NzMonthCellDirective, selectors: [["", "nzMonthCell", ""]], exportAs: ["nzMonthCell"] });
class NzDateFullCellDirective {
}
NzDateFullCellDirective.ɵfac = function NzDateFullCellDirective_Factory(t) { return new (t || NzDateFullCellDirective)(); };
NzDateFullCellDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: NzDateFullCellDirective, selectors: [["", "nzDateFullCell", ""]], exportAs: ["nzDateFullCell"] });
class NzMonthFullCellDirective {
}
NzMonthFullCellDirective.ɵfac = function NzMonthFullCellDirective_Factory(t) { return new (t || NzMonthFullCellDirective)(); };
NzMonthFullCellDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: NzMonthFullCellDirective, selectors: [["", "nzMonthFullCell", ""]], exportAs: ["nzMonthFullCell"] });

/**
 * @fileoverview added by tsickle
 * Generated from: calendar-header.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzCalendarHeaderComponent {
    /**
     * @param {?} i18n
     * @param {?} dateHelper
     */
    constructor(i18n, dateHelper) {
        this.i18n = i18n;
        this.dateHelper = dateHelper;
        this.mode = 'month';
        this.fullscreen = true;
        this.activeDate = new ng_zorro_antd_core_time__WEBPACK_IMPORTED_MODULE_7__["CandyDate"]();
        this.modeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.yearChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.monthChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        // @Output() readonly valueChange: EventEmitter<CandyDate> = new EventEmitter();
        this.yearOffset = 10;
        this.yearTotal = 20;
    }
    /**
     * @return {?}
     */
    get activeYear() {
        return this.activeDate.getYear();
    }
    /**
     * @return {?}
     */
    get activeMonth() {
        return this.activeDate.getMonth();
    }
    /**
     * @return {?}
     */
    get size() {
        return this.fullscreen ? 'default' : 'small';
    }
    /**
     * @return {?}
     */
    get yearTypeText() {
        return this.i18n.getLocale().Calendar.year;
    }
    /**
     * @return {?}
     */
    get monthTypeText() {
        return this.i18n.getLocale().Calendar.month;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.setUpYears();
        this.setUpMonths();
    }
    /**
     * @param {?} year
     * @return {?}
     */
    updateYear(year) {
        this.yearChange.emit(year);
        this.setUpYears(year);
    }
    /**
     * @private
     * @param {?=} year
     * @return {?}
     */
    setUpYears(year) {
        /** @type {?} */
        const start = (year || this.activeYear) - this.yearOffset;
        /** @type {?} */
        const end = start + this.yearTotal;
        this.years = [];
        for (let i = start; i < end; i++) {
            this.years.push({ label: `${i}`, value: i });
        }
    }
    /**
     * @private
     * @return {?}
     */
    setUpMonths() {
        this.months = [];
        for (let i = 0; i < 12; i++) {
            /** @type {?} */
            const dateInMonth = this.activeDate.setMonth(i);
            /** @type {?} */
            const monthText = this.dateHelper.format(dateInMonth.nativeDate, 'MMM');
            this.months.push({ label: monthText, value: i });
        }
    }
}
NzCalendarHeaderComponent.ɵfac = function NzCalendarHeaderComponent_Factory(t) { return new (t || NzCalendarHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_4__["NzI18nService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_4__["DateHelperService"])); };
NzCalendarHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NzCalendarHeaderComponent, selectors: [["nz-calendar-header"]], hostVars: 4, hostBindings: function NzCalendarHeaderComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("display", "block");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("ant-fullcalendar-header", true);
    } }, inputs: { mode: "mode", fullscreen: "fullscreen", activeDate: "activeDate" }, outputs: { modeChange: "modeChange", yearChange: "yearChange", monthChange: "monthChange" }, exportAs: ["nzCalendarHeader"], decls: 9, vars: 9, consts: [[1, "ant-picker-calendar-header"], [1, "ant-picker-calendar-year-select", 3, "nzSize", "nzDropdownMatchSelectWidth", "ngModel", "ngModelChange"], [3, "nzLabel", "nzValue", 4, "ngFor", "ngForOf"], ["class", "ant-picker-calendar-month-select", 3, "nzSize", "nzDropdownMatchSelectWidth", "ngModel", "ngModelChange", 4, "ngIf"], [1, "ant-picker-calendar-mode-switch", 3, "ngModel", "nzSize", "ngModelChange"], ["nz-radio-button", "", "nzValue", "month"], ["nz-radio-button", "", "nzValue", "year"], [3, "nzLabel", "nzValue"], [1, "ant-picker-calendar-month-select", 3, "nzSize", "nzDropdownMatchSelectWidth", "ngModel", "ngModelChange"]], template: function NzCalendarHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nz-select", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function NzCalendarHeaderComponent_Template_nz_select_ngModelChange_1_listener($event) { return ctx.updateYear($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, NzCalendarHeaderComponent_nz_option_2_Template, 1, 2, "nz-option", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, NzCalendarHeaderComponent_nz_select_3_Template, 2, 4, "nz-select", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "nz-radio-group", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function NzCalendarHeaderComponent_Template_nz_radio_group_ngModelChange_4_listener($event) { return ctx.mode = $event; })("ngModelChange", function NzCalendarHeaderComponent_Template_nz_radio_group_ngModelChange_4_listener($event) { return ctx.modeChange.emit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSize", ctx.size)("nzDropdownMatchSelectWidth", false)("ngModel", ctx.activeYear);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.years);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.mode === "month");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.mode)("nzSize", ctx.size);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.monthTypeText);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.yearTypeText);
    } }, directives: [ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_6__["NzSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgIf"], ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_5__["NzRadioGroupComponent"], ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_5__["NzRadioComponent"], ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_5__["NzRadioButtonDirective"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_6__["NzOptionComponent"]], encapsulation: 2, changeDetection: 0 });
/** @nocollapse */
NzCalendarHeaderComponent.ctorParameters = () => [
    { type: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_4__["NzI18nService"] },
    { type: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_4__["DateHelperService"] }
];
NzCalendarHeaderComponent.propDecorators = {
    mode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    fullscreen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    activeDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    modeChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    yearChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    monthChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: calendar.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzCalendarComponent {
    /**
     * @param {?} cdr
     */
    constructor(cdr) {
        this.cdr = cdr;
        this.activeDate = new ng_zorro_antd_core_time__WEBPACK_IMPORTED_MODULE_7__["CandyDate"]();
        this.prefixCls = 'ant-picker-calendar';
        this.onChangeFn = (/**
         * @return {?}
         */
        () => { });
        this.onTouchFn = (/**
         * @return {?}
         */
        () => { });
        this.nzMode = 'month';
        this.nzModeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.nzPanelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.nzSelectChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.nzValueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.nzFullscreen = true;
    }
    /**
     * @return {?}
     */
    get dateCell() {
        return this.nzDateCell || this.nzDateCellChild;
    }
    /**
     * @return {?}
     */
    get dateFullCell() {
        return this.nzDateFullCell || this.nzDateFullCellChild;
    }
    /**
     * @return {?}
     */
    get monthCell() {
        return this.nzMonthCell || this.nzMonthCellChild;
    }
    /**
     * @return {?}
     */
    get monthFullCell() {
        return this.nzMonthFullCell || this.nzMonthFullCellChild;
    }
    /**
     * @param {?} mode
     * @return {?}
     */
    onModeChange(mode) {
        this.nzModeChange.emit(mode);
        this.nzPanelChange.emit({ date: this.activeDate.nativeDate, mode });
    }
    /**
     * @param {?} year
     * @return {?}
     */
    onYearSelect(year) {
        /** @type {?} */
        const date = this.activeDate.setYear(year);
        this.updateDate(date);
    }
    /**
     * @param {?} month
     * @return {?}
     */
    onMonthSelect(month) {
        /** @type {?} */
        const date = this.activeDate.setMonth(month);
        this.updateDate(date);
    }
    /**
     * @param {?} date
     * @return {?}
     */
    onDateSelect(date) {
        // Only activeDate is enough in calendar
        // this.value = date;
        this.updateDate(date);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.updateDate(new ng_zorro_antd_core_time__WEBPACK_IMPORTED_MODULE_7__["CandyDate"]((/** @type {?} */ (value))), false);
        this.cdr.markForCheck();
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChangeFn = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouchFn = fn;
    }
    /**
     * @private
     * @param {?} date
     * @param {?=} touched
     * @return {?}
     */
    updateDate(date, touched = true) {
        this.activeDate = date;
        if (touched) {
            this.onChangeFn(date.nativeDate);
            this.onTouchFn();
            this.nzSelectChange.emit(date.nativeDate);
            this.nzValueChange.emit(date.nativeDate);
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.nzValue) {
            this.updateDate(new ng_zorro_antd_core_time__WEBPACK_IMPORTED_MODULE_7__["CandyDate"](this.nzValue), false);
        }
    }
}
NzCalendarComponent.ɵfac = function NzCalendarComponent_Factory(t) { return new (t || NzCalendarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"])); };
NzCalendarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NzCalendarComponent, selectors: [["nz-calendar"]], contentQueries: function NzCalendarComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, NzDateCellDirective, true, _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, NzDateFullCellDirective, true, _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, NzMonthCellDirective, true, _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, NzMonthFullCellDirective, true, _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.nzDateCellChild = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.nzDateFullCellChild = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.nzMonthCellChild = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.nzMonthFullCellChild = _t.first);
    } }, hostVars: 6, hostBindings: function NzCalendarComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("ant-picker-calendar", true)("ant-picker-calendar-full", ctx.nzFullscreen)("ant-picker-calendar-mini", !ctx.nzFullscreen);
    } }, inputs: { nzMode: "nzMode", nzFullscreen: "nzFullscreen", nzValue: "nzValue", nzDateCell: "nzDateCell", nzDateFullCell: "nzDateFullCell", nzMonthCell: "nzMonthCell", nzMonthFullCell: "nzMonthFullCell" }, outputs: { nzModeChange: "nzModeChange", nzPanelChange: "nzPanelChange", nzSelectChange: "nzSelectChange", nzValueChange: "nzValueChange" }, exportAs: ["nzCalendar"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(( /**
                         * @return {?}
                         */() => NzCalendarComponent)), multi: true }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 9, vars: 9, consts: [[3, "fullscreen", "activeDate", "mode", "modeChange", "yearChange", "monthChange"], [1, "ant-picker-panel"], [1, "ant-picker-body"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["monthModeTable", ""], ["yearModeTable", ""], [3, "prefixCls", "value", "activeDate", "cellRender", "fullCellRender", "valueChange"]], template: function NzCalendarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nz-calendar-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("modeChange", function NzCalendarComponent_Template_nz_calendar_header_modeChange_0_listener($event) { return ctx.nzMode = $event; })("modeChange", function NzCalendarComponent_Template_nz_calendar_header_modeChange_0_listener($event) { return ctx.onModeChange($event); })("yearChange", function NzCalendarComponent_Template_nz_calendar_header_yearChange_0_listener($event) { return ctx.onYearSelect($event); })("monthChange", function NzCalendarComponent_Template_nz_calendar_header_monthChange_0_listener($event) { return ctx.onMonthSelect($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, NzCalendarComponent_ng_container_4_Template, 1, 0, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, NzCalendarComponent_ng_template_5_Template, 1, 5, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, NzCalendarComponent_ng_template_7_Template, 1, 5, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r329 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6);
        const _r331 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("fullscreen", ctx.nzFullscreen)("activeDate", ctx.activeDate)("mode", ctx.nzMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("ant-picker-", ctx.nzMode === "month" ? "date" : "month", "-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.nzMode === "month")("ngIfThen", _r329)("ngIfElse", _r331);
    } }, directives: [NzCalendarHeaderComponent, _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgIf"], ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_3__["ɵDateTableComponent"], ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_3__["ɵMonthTableComponent"]], encapsulation: 2, changeDetection: 0 });
/** @nocollapse */
NzCalendarComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
NzCalendarComponent.propDecorators = {
    nzMode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    nzValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    nzModeChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    nzPanelChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    nzSelectChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    nzValueChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    nzDateCell: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    nzDateCellChild: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"], args: [NzDateCellDirective, { static: false, read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] },] }],
    nzDateFullCell: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    nzDateFullCellChild: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"], args: [NzDateFullCellDirective, { static: false, read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] },] }],
    nzMonthCell: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    nzMonthCellChild: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"], args: [NzMonthCellDirective, { static: false, read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] },] }],
    nzMonthFullCell: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    nzMonthFullCellChild: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"], args: [NzMonthFullCellDirective, { static: false, read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] },] }],
    nzFullscreen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
Object(tslib__WEBPACK_IMPORTED_MODULE_8__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_9__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_8__["__metadata"])("design:type", Boolean)
], NzCalendarComponent.prototype, "nzFullscreen", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NzDateCellDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: '[nzDateCell]',
                exportAs: 'nzDateCell'
            }]
    }], null, null); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NzMonthCellDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: '[nzMonthCell]',
                exportAs: 'nzMonthCell'
            }]
    }], null, null); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NzDateFullCellDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: '[nzDateFullCell]',
                exportAs: 'nzDateFullCell'
            }]
    }], null, null); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NzMonthFullCellDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: '[nzMonthFullCell]',
                exportAs: 'nzMonthFullCell'
            }]
    }], null, null); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NzCalendarHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                selector: 'nz-calendar-header',
                exportAs: 'nzCalendarHeader',
                template: `
    <div class="ant-picker-calendar-header">
      <nz-select
        class="ant-picker-calendar-year-select"
        [nzSize]="size"
        [nzDropdownMatchSelectWidth]="false"
        [ngModel]="activeYear"
        (ngModelChange)="updateYear($event)"
      >
        <nz-option *ngFor="let year of years" [nzLabel]="year.label" [nzValue]="year.value"></nz-option>
      </nz-select>

      <nz-select
        *ngIf="mode === 'month'"
        class="ant-picker-calendar-month-select"
        [nzSize]="size"
        [nzDropdownMatchSelectWidth]="false"
        [ngModel]="activeMonth"
        (ngModelChange)="monthChange.emit($event)"
      >
        <nz-option *ngFor="let month of months" [nzLabel]="month.label" [nzValue]="month.value"></nz-option>
      </nz-select>

      <nz-radio-group class="ant-picker-calendar-mode-switch" [(ngModel)]="mode" (ngModelChange)="modeChange.emit($event)" [nzSize]="size">
        <label nz-radio-button nzValue="month">{{ monthTypeText }}</label>
        <label nz-radio-button nzValue="year">{{ yearTypeText }}</label>
      </nz-radio-group>
    </div>
  `,
                host: {
                    '[style.display]': `'block'`,
                    '[class.ant-fullcalendar-header]': `true`
                }
            }]
    }], function () { return [{ type: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_4__["NzI18nService"] }, { type: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_4__["DateHelperService"] }]; }, { mode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], fullscreen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], activeDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], modeChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], yearChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], monthChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NzCalendarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                selector: 'nz-calendar',
                exportAs: 'nzCalendar',
                template: `
    <nz-calendar-header
      [fullscreen]="nzFullscreen"
      [activeDate]="activeDate"
      [(mode)]="nzMode"
      (modeChange)="onModeChange($event)"
      (yearChange)="onYearSelect($event)"
      (monthChange)="onMonthSelect($event)"
    >
    </nz-calendar-header>

    <div class="ant-picker-panel">
      <div class="ant-picker-{{ nzMode === 'month' ? 'date' : 'month' }}-panel">
        <div class="ant-picker-body">
          <ng-container *ngIf="nzMode === 'month'; then monthModeTable; else yearModeTable"></ng-container>
        </div>
      </div>
    </div>
    <ng-template #monthModeTable>
      <date-table
        [prefixCls]="prefixCls"
        [value]="activeDate"
        [activeDate]="activeDate"
        [cellRender]="dateCell"
        [fullCellRender]="dateFullCell"
        (valueChange)="onDateSelect($event)"
      ></date-table>
    </ng-template>

    <ng-template #yearModeTable>
      <month-table
        [prefixCls]="prefixCls"
        [value]="activeDate"
        [activeDate]="activeDate"
        [cellRender]="monthCell"
        [fullCellRender]="monthFullCell"
        (valueChange)="onDateSelect($event)"
      ></month-table>
    </ng-template>
  `,
                host: {
                    '[class.ant-picker-calendar]': 'true',
                    '[class.ant-picker-calendar-full]': 'nzFullscreen',
                    '[class.ant-picker-calendar-mini]': '!nzFullscreen'
                },
                providers: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(( /**
                                 * @return {?}
                                 */() => NzCalendarComponent)), multi: true }]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }]; }, { nzMode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], nzModeChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], nzPanelChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], nzSelectChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], nzValueChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], nzFullscreen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], nzValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], nzDateCell: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], nzDateCellChild: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
            args: [NzDateCellDirective, { static: false, read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] }]
        }], nzDateFullCell: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], nzDateFullCellChild: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
            args: [NzDateFullCellDirective, { static: false, read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] }]
        }], nzMonthCell: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], nzMonthCellChild: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
            args: [NzMonthCellDirective, { static: false, read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] }]
        }], nzMonthFullCell: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], nzMonthFullCellChild: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
            args: [NzMonthFullCellDirective, { static: false, read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] }]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: calendar.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzCalendarModule {
}
NzCalendarModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: NzCalendarModule });
NzCalendarModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function NzCalendarModule_Factory(t) { return new (t || NzCalendarModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_4__["NzI18nModule"], ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_5__["NzRadioModule"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_6__["NzSelectModule"], ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_3__["LibPackerModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NzCalendarModule, { declarations: function () { return [NzCalendarHeaderComponent,
        NzCalendarComponent,
        NzDateCellDirective,
        NzDateFullCellDirective,
        NzMonthCellDirective,
        NzMonthFullCellDirective]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_4__["NzI18nModule"], ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_5__["NzRadioModule"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_6__["NzSelectModule"], ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_3__["LibPackerModule"]]; }, exports: function () { return [NzCalendarComponent,
        NzDateCellDirective,
        NzDateFullCellDirective,
        NzMonthCellDirective,
        NzMonthFullCellDirective]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NzCalendarModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    NzCalendarHeaderComponent,
                    NzCalendarComponent,
                    NzDateCellDirective,
                    NzDateFullCellDirective,
                    NzMonthCellDirective,
                    NzMonthFullCellDirective
                ],
                exports: [NzCalendarComponent, NzDateCellDirective, NzDateFullCellDirective, NzMonthCellDirective, NzMonthFullCellDirective],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_4__["NzI18nModule"], ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_5__["NzRadioModule"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_6__["NzSelectModule"], ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_3__["LibPackerModule"]]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ng-zorro-antd-calendar.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ng-zorro-antd-calendar.js.map

/***/ })

};;
//# sourceMappingURL=calendar-index-module~code-editor-index-module~space-index-module.js.map