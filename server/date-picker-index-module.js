exports.ids = ["date-picker-index-module"];
exports.modules = {

/***/ "./node_modules/date-fns/esm/setHours/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/setHours/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return setHours; });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name setHours
 * @category Hour Helpers
 * @summary Set the hours to the given date.
 *
 * @description
 * Set the hours to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} hours - the hours of the new date
 * @returns {Date} the new date with the hours set
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Set 4 hours to 1 September 2014 11:30:00:
 * var result = setHours(new Date(2014, 8, 1, 11, 30), 4)
 * //=> Mon Sep 01 2014 04:30:00
 */

function setHours(dirtyDate, dirtyHours) {
  Object(_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(2, arguments);
  var date = Object(_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var hours = Object(_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dirtyHours);
  date.setHours(hours);
  return date;
}

/***/ }),

/***/ "./site/doc/app/date-picker/basic.ts":
/*!*******************************************!*\
  !*** ./site/doc/app/date-picker/basic.ts ***!
  \*******************************************/
/*! exports provided: NzDemoDatePickerBasicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoDatePickerBasicComponent", function() { return NzDemoDatePickerBasicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var date_fns_getISOWeek__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns/getISOWeek */ "./node_modules/date-fns/esm/getISOWeek/index.js");
/* harmony import */ var ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/i18n */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-i18n.js");
/* harmony import */ var ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/date-picker */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-date-picker.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/button */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-button.js");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-wave.js");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-transition-patch.js");










class NzDemoDatePickerBasicComponent {
    constructor(i18n) {
        this.i18n = i18n;
        this.date = null;
        this.dateRange = [];
        this.isEnglish = false;
    }
    onChange(result) {
        console.log('onChange: ', result);
    }
    getWeek(result) {
        console.log('week: ', Object(date_fns_getISOWeek__WEBPACK_IMPORTED_MODULE_1__["default"])(result));
    }
    changeLanguage() {
        this.i18n.setLocale(this.isEnglish ? ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_2__["zh_CN"] : ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_2__["en_US"]);
        this.isEnglish = !this.isEnglish;
    }
}
/** @nocollapse */ NzDemoDatePickerBasicComponent.ɵfac = function NzDemoDatePickerBasicComponent_Factory(t) { return new (t || NzDemoDatePickerBasicComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_2__["NzI18nService"])); };
/** @nocollapse */ NzDemoDatePickerBasicComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoDatePickerBasicComponent, selectors: [["nz-demo-date-picker-basic"]], decls: 12, vars: 5, consts: [[3, "ngModel", "ngModelChange"], ["nzPlaceHolder", "Select month", 3, "ngModel", "ngModelChange"], ["nzPlaceHolder", "Select year", 3, "ngModel", "ngModelChange"], ["nzPlaceHolder", "Select week", 3, "ngModel", "ngModelChange"], ["nz-button", "", "nzType", "default", 3, "click"]], template: function NzDemoDatePickerBasicComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-date-picker", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoDatePickerBasicComponent_Template_nz_date_picker_ngModelChange_0_listener($event) { return ctx.date = $event; })("ngModelChange", function NzDemoDatePickerBasicComponent_Template_nz_date_picker_ngModelChange_0_listener($event) { return ctx.onChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nz-month-picker", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoDatePickerBasicComponent_Template_nz_month_picker_ngModelChange_2_listener($event) { return ctx.date = $event; })("ngModelChange", function NzDemoDatePickerBasicComponent_Template_nz_month_picker_ngModelChange_2_listener($event) { return ctx.onChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nz-year-picker", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoDatePickerBasicComponent_Template_nz_year_picker_ngModelChange_4_listener($event) { return ctx.date = $event; })("ngModelChange", function NzDemoDatePickerBasicComponent_Template_nz_year_picker_ngModelChange_4_listener($event) { return ctx.onChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nz-range-picker", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoDatePickerBasicComponent_Template_nz_range_picker_ngModelChange_6_listener($event) { return ctx.dateRange = $event; })("ngModelChange", function NzDemoDatePickerBasicComponent_Template_nz_range_picker_ngModelChange_6_listener($event) { return ctx.onChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nz-week-picker", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoDatePickerBasicComponent_Template_nz_week_picker_ngModelChange_8_listener($event) { return ctx.date = $event; })("ngModelChange", function NzDemoDatePickerBasicComponent_Template_nz_week_picker_ngModelChange_8_listener($event) { return ctx.getWeek($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoDatePickerBasicComponent_Template_button_click_10_listener() { return ctx.changeLanguage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Switch language for all pickers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.date);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.date);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.date);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.dateRange);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.date);
    } }, directives: [ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_3__["NzDatePickerComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_3__["NzMonthPickerComponent"], ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_3__["NzYearPickerComponent"], ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_3__["NzRangePickerComponent"], ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_3__["NzWeekPickerComponent"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_6__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_7__["ɵNzTransitionPatchDirective"]], styles: ["nz-date-picker[_ngcontent-%COMP%], nz-month-picker[_ngcontent-%COMP%], nz-year-picker[_ngcontent-%COMP%], nz-range-picker[_ngcontent-%COMP%], nz-week-picker[_ngcontent-%COMP%] {\n        margin: 0 8px 12px 0;\n      }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoDatePickerBasicComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-demo-date-picker-basic',
                template: `
    <nz-date-picker [(ngModel)]="date" (ngModelChange)="onChange($event)"></nz-date-picker>
    <br />
    <nz-month-picker [(ngModel)]="date" (ngModelChange)="onChange($event)" nzPlaceHolder="Select month"></nz-month-picker>
    <br />
    <nz-year-picker [(ngModel)]="date" (ngModelChange)="onChange($event)" nzPlaceHolder="Select year"></nz-year-picker>
    <br />
    <nz-range-picker [(ngModel)]="dateRange" (ngModelChange)="onChange($event)"></nz-range-picker>
    <br />
    <nz-week-picker [(ngModel)]="date" (ngModelChange)="getWeek($event)" nzPlaceHolder="Select week"></nz-week-picker>
    <br />
    <button nz-button nzType="default" (click)="changeLanguage()">Switch language for all pickers</button>
  `,
                styles: [
                    `
      nz-date-picker,
      nz-month-picker,
      nz-year-picker,
      nz-range-picker,
      nz-week-picker {
        margin: 0 8px 12px 0;
      }
    `
                ]
            }]
    }], function () { return [{ type: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_2__["NzI18nService"] }]; }, null); })();


/***/ }),

/***/ "./site/doc/app/date-picker/date-render.ts":
/*!*************************************************!*\
  !*** ./site/doc/app/date-picker/date-render.ts ***!
  \*************************************************/
/*! exports provided: NzDemoDatePickerDateRenderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoDatePickerDateRenderComponent", function() { return NzDemoDatePickerDateRenderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/date-picker */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-date-picker.js");



function NzDemoDatePickerDateRenderComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const current_r168 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("border", current_r168.getDate() === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", current_r168.getDate(), " ");
} }
class NzDemoDatePickerDateRenderComponent {
}
/** @nocollapse */ NzDemoDatePickerDateRenderComponent.ɵfac = function NzDemoDatePickerDateRenderComponent_Factory(t) { return new (t || NzDemoDatePickerDateRenderComponent)(); };
/** @nocollapse */ NzDemoDatePickerDateRenderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoDatePickerDateRenderComponent, selectors: [["nz-demo-date-picker-date-render"]], decls: 4, vars: 2, consts: [[3, "nzDateRender"], ["tplRender", ""], [1, "ant-picker-cell-inner"]], template: function NzDemoDatePickerDateRenderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-date-picker", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "nz-range-picker", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzDemoDatePickerDateRenderComponent_ng_template_2_Template, 2, 3, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r166 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzDateRender", _r166);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzDateRender", _r166);
    } }, directives: [ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_1__["NzDatePickerComponent"], ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_1__["NzRangePickerComponent"]], styles: ["nz-date-picker[_ngcontent-%COMP%], nz-month-picker[_ngcontent-%COMP%], nz-range-picker[_ngcontent-%COMP%], nz-week-picker[_ngcontent-%COMP%] {\n        margin: 0 8px 12px 0;\n      }\n      .border[_ngcontent-%COMP%] {\n        border: 1px solid #1890ff;\n        border-radius: 50%;\n      }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoDatePickerDateRenderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-demo-date-picker-date-render',
                template: `
    <nz-date-picker [nzDateRender]="tplRender"></nz-date-picker>
    <nz-range-picker [nzDateRender]="tplRender"></nz-range-picker>

    <ng-template #tplRender let-current>
      <div class="ant-picker-cell-inner" [class.border]="current.getDate() === 1">
        {{ current.getDate() }}
      </div>
    </ng-template>
  `,
                styles: [
                    `
      nz-date-picker,
      nz-month-picker,
      nz-range-picker,
      nz-week-picker {
        margin: 0 8px 12px 0;
      }
      .border {
        border: 1px solid #1890ff;
        border-radius: 50%;
      }
    `
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./site/doc/app/date-picker/disabled-date.ts":
/*!***************************************************!*\
  !*** ./site/doc/app/date-picker/disabled-date.ts ***!
  \***************************************************/
/*! exports provided: NzDemoDatePickerDisabledDateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoDatePickerDisabledDateComponent", function() { return NzDemoDatePickerDisabledDateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var date_fns_differenceInCalendarDays__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns/differenceInCalendarDays */ "./node_modules/date-fns/esm/differenceInCalendarDays/index.js");
/* harmony import */ var date_fns_setHours__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns/setHours */ "./node_modules/date-fns/esm/setHours/index.js");
/* harmony import */ var ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/date-picker */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-date-picker.js");





const _c0 = function (a0) { return { nzDefaultOpenValue: a0 }; };
const _c1 = function (a1) { return { nzHideDisabledOptions: true, nzDefaultOpenValue: a1 }; };
class NzDemoDatePickerDisabledDateComponent {
    constructor() {
        this.today = new Date();
        this.timeDefaultValue = Object(date_fns_setHours__WEBPACK_IMPORTED_MODULE_2__["default"])(new Date(), 0);
        this.disabledDate = (current) => {
            // Can not select days before today and today
            return Object(date_fns_differenceInCalendarDays__WEBPACK_IMPORTED_MODULE_1__["default"])(current, this.today) > 0;
        };
        this.disabledDateTime = () => {
            return {
                nzDisabledHours: () => this.range(0, 24).splice(4, 20),
                nzDisabledMinutes: () => this.range(30, 60),
                nzDisabledSeconds: () => [55, 56]
            };
        };
        this.disabledRangeTime = (_value, type) => {
            if (type === 'start') {
                return {
                    nzDisabledHours: () => this.range(0, 60).splice(4, 20),
                    nzDisabledMinutes: () => this.range(30, 60),
                    nzDisabledSeconds: () => [55, 56]
                };
            }
            return {
                nzDisabledHours: () => this.range(0, 60).splice(20, 4),
                nzDisabledMinutes: () => this.range(0, 31),
                nzDisabledSeconds: () => [55, 56]
            };
        };
    }
    range(start, end) {
        const result = [];
        for (let i = start; i < end; i++) {
            result.push(i);
        }
        return result;
    }
}
/** @nocollapse */ NzDemoDatePickerDisabledDateComponent.ɵfac = function NzDemoDatePickerDisabledDateComponent_Factory(t) { return new (t || NzDemoDatePickerDisabledDateComponent)(); };
/** @nocollapse */ NzDemoDatePickerDisabledDateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoDatePickerDisabledDateComponent, selectors: [["nz-demo-date-picker-disabled-date"]], decls: 7, vars: 12, consts: [["nzFormat", "yyyy-MM-dd HH:mm:ss", 3, "nzDisabledDate", "nzDisabledTime", "nzShowTime"], ["nzPlaceHolder", "Select month", 3, "nzDisabledDate"], ["nzPlaceHolder", "Select year", 3, "nzDisabledDate"]], template: function NzDemoDatePickerDisabledDateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-date-picker", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "nz-month-picker", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "nz-year-picker", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "nz-range-picker", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzDisabledDate", ctx.disabledDate)("nzDisabledTime", ctx.disabledDateTime)("nzShowTime", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx.timeDefaultValue));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzDisabledDate", ctx.disabledDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzDisabledDate", ctx.disabledDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzDisabledDate", ctx.disabledDate)("nzDisabledTime", ctx.disabledRangeTime)("nzShowTime", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c1, ctx.timeDefaultValue));
    } }, directives: [ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_3__["NzDatePickerComponent"], ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_3__["NzMonthPickerComponent"], ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_3__["NzYearPickerComponent"], ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_3__["NzRangePickerComponent"]], styles: ["nz-date-picker[_ngcontent-%COMP%], nz-month-picker[_ngcontent-%COMP%], nz-year-picker[_ngcontent-%COMP%], nz-range-picker[_ngcontent-%COMP%], nz-week-picker[_ngcontent-%COMP%] {\n        margin: 0 8px 12px 0;\n      }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoDatePickerDisabledDateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-demo-date-picker-disabled-date',
                template: `
    <nz-date-picker
      nzFormat="yyyy-MM-dd HH:mm:ss"
      [nzDisabledDate]="disabledDate"
      [nzDisabledTime]="disabledDateTime"
      [nzShowTime]="{ nzDefaultOpenValue: timeDefaultValue }"
    >
    </nz-date-picker>
    <br />
    <nz-month-picker [nzDisabledDate]="disabledDate" nzPlaceHolder="Select month"></nz-month-picker>
    <br />
    <nz-year-picker [nzDisabledDate]="disabledDate" nzPlaceHolder="Select year"></nz-year-picker>
    <br />
    <nz-range-picker
      [nzDisabledDate]="disabledDate"
      [nzDisabledTime]="disabledRangeTime"
      [nzShowTime]="{ nzHideDisabledOptions: true, nzDefaultOpenValue: timeDefaultValue }"
      nzFormat="yyyy-MM-dd HH:mm:ss"
    ></nz-range-picker>
  `,
                styles: [
                    `
      nz-date-picker,
      nz-month-picker,
      nz-year-picker,
      nz-range-picker,
      nz-week-picker {
        margin: 0 8px 12px 0;
      }
    `
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./site/doc/app/date-picker/disabled.ts":
/*!**********************************************!*\
  !*** ./site/doc/app/date-picker/disabled.ts ***!
  \**********************************************/
/*! exports provided: NzDemoDatePickerDisabledComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoDatePickerDisabledComponent", function() { return NzDemoDatePickerDisabledComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/date-picker */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-date-picker.js");



class NzDemoDatePickerDisabledComponent {
}
/** @nocollapse */ NzDemoDatePickerDisabledComponent.ɵfac = function NzDemoDatePickerDisabledComponent_Factory(t) { return new (t || NzDemoDatePickerDisabledComponent)(); };
/** @nocollapse */ NzDemoDatePickerDisabledComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoDatePickerDisabledComponent, selectors: [["nz-demo-date-picker-disabled"]], decls: 5, vars: 0, consts: [["nzDisabled", ""]], template: function NzDemoDatePickerDisabledComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-date-picker", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "nz-month-picker", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "nz-range-picker", 0);
    } }, directives: [ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_1__["NzDatePickerComponent"], ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_1__["NzMonthPickerComponent"], ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_1__["NzRangePickerComponent"]], styles: ["nz-date-picker[_ngcontent-%COMP%], nz-month-picker[_ngcontent-%COMP%], nz-range-picker[_ngcontent-%COMP%], nz-week-picker[_ngcontent-%COMP%] {\n        margin: 0 8px 12px 0;\n      }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoDatePickerDisabledComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-demo-date-picker-disabled',
                template: `
    <nz-date-picker nzDisabled></nz-date-picker>
    <br />
    <nz-month-picker nzDisabled></nz-month-picker>
    <br />
    <nz-range-picker nzDisabled></nz-range-picker>
  `,
                styles: [
                    `
      nz-date-picker,
      nz-month-picker,
      nz-range-picker,
      nz-week-picker {
        margin: 0 8px 12px 0;
      }
    `
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./site/doc/app/date-picker/en.component.ts":
/*!**************************************************!*\
  !*** ./site/doc/app/date-picker/en.component.ts ***!
  \**************************************************/
/*! exports provided: NzDemoDatePickerEnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoDatePickerEnComponent", function() { return NzDemoDatePickerEnComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _share_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../share/codebox/codebox.component */ "./site/doc/app/share/codebox/codebox.component.ts");
/* harmony import */ var ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/affix */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-affix.js");
/* harmony import */ var ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/anchor */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-anchor.js");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-transition-patch.js");
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-tooltip.js");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/grid */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-grid.js");
/* harmony import */ var _basic__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./basic */ "./site/doc/app/date-picker/basic.ts");
/* harmony import */ var _size__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./size */ "./site/doc/app/date-picker/size.ts");
/* harmony import */ var _disabled__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./disabled */ "./site/doc/app/date-picker/disabled.ts");
/* harmony import */ var _start_end__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./start-end */ "./site/doc/app/date-picker/start-end.ts");
/* harmony import */ var _extra_footer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./extra-footer */ "./site/doc/app/date-picker/extra-footer.ts");
/* harmony import */ var _date_render__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./date-render */ "./site/doc/app/date-picker/date-render.ts");
/* harmony import */ var _format__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./format */ "./site/doc/app/date-picker/format.ts");
/* harmony import */ var _time__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./time */ "./site/doc/app/date-picker/time.ts");
/* harmony import */ var _disabled_date__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./disabled-date */ "./site/doc/app/date-picker/disabled-date.ts");
/* harmony import */ var _presetted_ranges__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./presetted-ranges */ "./site/doc/app/date-picker/presetted-ranges.ts");
/* harmony import */ var _mode__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./mode */ "./site/doc/app/date-picker/mode.ts");




















class NzDemoDatePickerEnComponent {
    constructor() {
        this.expanded = false;
    }
    goLink(link) {
        if (window) {
            window.location.hash = link;
        }
    }
    expandAllCode() {
        this.expanded = !this.expanded;
        this.codeBoxes.forEach(code => {
            code.nzExpanded = this.expanded;
            code.expandCode(this.expanded);
            code.check();
        });
    }
}
/** @nocollapse */ NzDemoDatePickerEnComponent.ɵfac = function NzDemoDatePickerEnComponent_Factory(t) { return new (t || NzDemoDatePickerEnComponent)(); };
/** @nocollapse */ NzDemoDatePickerEnComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoDatePickerEnComponent, selectors: [["nz-demo-date-picker"]], viewQuery: function NzDemoDatePickerEnComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_share_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_1__["NzCodeBoxComponent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.codeBoxes = _t);
    } }, decls: 961, vars: 40, consts: [[1, "toc-affix", 3, "nzOffsetTop"], ["nzShowInkInFixed", "", 3, "nzAffix", "nzClick"], ["nzHref", "#components-date-picker-demo-basic", "nzTitle", "Basic"], ["nzHref", "#components-date-picker-demo-format", "nzTitle", "Date Format"], ["nzHref", "#components-date-picker-demo-size", "nzTitle", "Three Sizes"], ["nzHref", "#components-date-picker-demo-time", "nzTitle", "Choose Time"], ["nzHref", "#components-date-picker-demo-disabled", "nzTitle", "Disabled"], ["nzHref", "#components-date-picker-demo-disabled-date", "nzTitle", "Disabled Date & Time"], ["nzHref", "#components-date-picker-demo-start-end", "nzTitle", "Customized Range Picker"], ["nzHref", "#components-date-picker-demo-presetted-ranges", "nzTitle", "Presetted Ranges"], ["nzHref", "#components-date-picker-demo-extra-footer", "nzTitle", "Extra Footer"], ["nzHref", "#components-date-picker-demo-mode", "nzTitle", "Controlled Panels"], ["nzHref", "#components-date-picker-demo-date-render", "nzTitle", "Customized Date Rendering"], ["nzHref", "#api", "nzTitle", "API"], [1, "markdown"], [1, "subtitle"], [1, "widget"], ["href", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/date-picker/doc/index.en-US.md", "target", "_blank", "rel", "noopener noreferrer", 1, "edit-button"], ["nz-icon", "", "nzType", "edit"], ["id", "when-to-use"], ["onclick", "window.location.hash = 'when-to-use'", 1, "anchor"], [1, "language-ts"], [1, "token", "keyword"], [1, "token", "punctuation"], [1, "token", "string"], ["nz-icon", "", "nzType", "appstore", "nz-tooltip", "", "nzTooltipTitle", "Expand All Code", 1, "code-box-expand-trigger", 3, "click"], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", 3, "nzXl", "nzSpan"], ["nzTitle", "Basic", "nzSelector", "nz-demo-date-picker-basic", "nzGenerateCommand", "ng g ng-zorro-antd:date-picker-basic <name>", "nzComponentName", "NzDemoDatePickerBasicComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["demo", ""], ["intro", ""], ["nzTitle", "Three Sizes", "nzSelector", "nz-demo-date-picker-size", "nzGenerateCommand", "ng g ng-zorro-antd:date-picker-size <name>", "nzComponentName", "NzDemoDatePickerSizeComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Disabled", "nzSelector", "nz-demo-date-picker-disabled", "nzGenerateCommand", "ng g ng-zorro-antd:date-picker-disabled <name>", "nzComponentName", "NzDemoDatePickerDisabledComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Customized Range Picker", "nzSelector", "nz-demo-date-picker-start-end", "nzGenerateCommand", "ng g ng-zorro-antd:date-picker-start-end <name>", "nzComponentName", "NzDemoDatePickerStartEndComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Extra Footer", "nzSelector", "nz-demo-date-picker-extra-footer", "nzGenerateCommand", "ng g ng-zorro-antd:date-picker-extra-footer <name>", "nzComponentName", "NzDemoDatePickerExtraFooterComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Customized Date Rendering", "nzSelector", "nz-demo-date-picker-date-render", "nzGenerateCommand", "ng g ng-zorro-antd:date-picker-date-render <name>", "nzComponentName", "NzDemoDatePickerDateRenderComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Date Format", "nzSelector", "nz-demo-date-picker-format", "nzGenerateCommand", "ng g ng-zorro-antd:date-picker-format <name>", "nzComponentName", "NzDemoDatePickerFormatComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Choose Time", "nzSelector", "nz-demo-date-picker-time", "nzGenerateCommand", "ng g ng-zorro-antd:date-picker-time <name>", "nzComponentName", "NzDemoDatePickerTimeComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Disabled Date & Time", "nzSelector", "nz-demo-date-picker-disabled-date", "nzGenerateCommand", "ng g ng-zorro-antd:date-picker-disabled-date <name>", "nzComponentName", "NzDemoDatePickerDisabledDateComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Presetted Ranges", "nzSelector", "nz-demo-date-picker-presetted-ranges", "nzGenerateCommand", "ng g ng-zorro-antd:date-picker-presetted-ranges <name>", "nzComponentName", "NzDemoDatePickerPresettedRangesComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Controlled Panels", "nzSelector", "nz-demo-date-picker-mode", "nzGenerateCommand", "ng g ng-zorro-antd:date-picker-mode <name>", "nzComponentName", "NzDemoDatePickerModeComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], [1, "markdown", "api-container"], ["id", "api"], ["onclick", "window.location.hash = 'api'", 1, "anchor"], ["href", "https://angular.io/guide/i18n"], [1, "language-typescript"], [1, "token", "function"], ["href", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date"], ["href", "https://date-fns.org/"], ["id", "common-api"], ["onclick", "window.location.hash = 'common-api'", 1, "anchor"], ["href", "https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json"], ["id", "nz-date-picker"], [1, "api-type-label", "component"], ["onclick", "window.location.hash = 'nz-date-picker'", 1, "anchor"], ["href", "/components/time-picker/en#api"], ["id", "nz-year-picker"], ["onclick", "window.location.hash = 'nz-year-picker'", 1, "anchor"], ["id", "nz-month-picker"], ["onclick", "window.location.hash = 'nz-month-picker'", 1, "anchor"], ["id", "nz-week-picker"], ["onclick", "window.location.hash = 'nz-week-picker'", 1, "anchor"], ["id", "nz-range-picker"], ["onclick", "window.location.hash = 'nz-range-picker'", 1, "anchor"], ["id", "nzformat-special-instructions"], ["onclick", "window.location.hash = 'nzformat-special-instructions'", 1, "anchor"], ["href", "https://angular.io/api/common/DatePipe"], ["href", "https://date-fns.org/docs/format#description"], ["href", "/docs/i18n/en#How%20to%20format%20a%20date%20using%20Date-fns"]], template: function NzDemoDatePickerEnComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-affix", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nz-anchor", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzClick", function NzDemoDatePickerEnComponent_Template_nz_anchor_nzClick_2_listener($event) { return ctx.goLink($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "nz-link", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "nz-link", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "nz-link", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "nz-link", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "nz-link", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "nz-link", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "nz-link", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "nz-link", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "nz-link", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "nz-link", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "nz-link", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "nz-link", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "section", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "DatePicker");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "section", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "To select or input a date.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h2", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "When To Use");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "By clicking the input box, you can select a date from a popup calendar.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "pre", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "import");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "{");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " NzDatePickerModule ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "from");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "'ng-zorro-antd/date-picker'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Examples");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoDatePickerEnComponent_Template_i_click_53_listener() { return ctx.expandAllCode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "nz-code-box", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "nz-demo-date-picker-basic", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Basic use case. Users can select or input a date in panel.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "nz-code-box", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "nz-demo-date-picker-size", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "The input box comes in three sizes. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "default");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " will be used if ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "nzSize");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " is omitted.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "nz-code-box", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "nz-demo-date-picker-disabled", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "A disabled state of the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "DatePicker");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "nz-code-box", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "nz-demo-date-picker-start-end", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "When ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "RangePicker");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, " does not satisfied your requirements, try to implement similar functionality with two ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "DatePicker");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "blockquote");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Use the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "nzDisabledDate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, " property to limit the start and end dates.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Improve user experience with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "nzOpen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "nzOnOpenChange");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "nz-code-box", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "nz-demo-date-picker-extra-footer", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Render extra footer in panel for customized requirements.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "nz-code-box", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "nz-demo-date-picker-date-render", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "We can customize the rendering of date cells in the calendar by providing a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "nzDateRender");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, " function to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "DatePicker");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "nz-code-box", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "nz-demo-date-picker-format", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "We can set the date format by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "nzFormat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "nz-code-box", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "nz-demo-date-picker-time", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "This property provide an additional time selection. When ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "nzShowTime");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, " is an Object, its properties will be passed on to built-in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "TimePicker");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "nz-code-box", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](143, "nz-demo-date-picker-disabled-date", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "Disabled part of dates and time by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "nzDisabledDate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "nzDisabledTime");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, " respectively.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "nz-code-box", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](154, "nz-demo-date-picker-presetted-ranges", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "We can set presetted ranges to RangePicker to improve user experience.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "nz-code-box", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](159, "nz-demo-date-picker-mode", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "Determing which panel to show with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "nzMode");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "nzOnPanelChange");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "section", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "h2", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, "API");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "a", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "Note:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, " Some of nz-date-picker's locale are coming from ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "Angular i18n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, ", that should be provided in the file of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "app.module.ts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, "For example:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "pre", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, "import");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, "{");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, " registerLocaleData ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, "}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, "from");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, "'@angular/common'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](205, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, "import");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, " en ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, "from");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](211, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, "'@angular/common/locales/en'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](216, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218, "registerLocaleData");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, "(");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](221, "en");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](223, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](225, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](227, "There are four kinds of picker:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](230, "nz-date-picker");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](232, "nz-month-picker");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](234, "nz-range-picker");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](236, "nz-week-picker");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](239, "Note:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](240, " All input and output date objects are ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](242, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](243, ", you can manpulate it with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "a", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](245, "date-fns");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](246, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "h3", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](249, "Common API");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "a", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](251, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](253, "The following APIs are shared by nz-date-picker, nz-month-picker, nz-range-picker, nz-week-picker.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](258, "Property");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](260, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](262, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](264, "Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](269, "[nzAllowClear]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](271, "Whether to show clear button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](274, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](277, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](281, "[nzAutoFocus]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](283, "get focus when component mounted");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](284, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](286, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](289, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](293, "[nzDateRender]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](295, "custom rendering function for date cells (Not support by month-picker/year-picker)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](297, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](298, "TemplateRef<Date> | string | ((d: Date) => TemplateRef<Date> | string)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](300, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](301, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](303, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](304, "[nzDisabled]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](306, "determine whether the nz-date-picker is disabled");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](307, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](308, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](309, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](310, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](311, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](312, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](313, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](314, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](315, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](316, "[nzDisabledDate]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](317, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](318, "specify the date that cannot be selected");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](319, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](320, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](321, "(current: Date) => boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](322, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](323, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](324, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](325, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](326, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](327, "[nzLocale]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](328, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](329, "localization configuration");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](330, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](331, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](332, "object");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](333, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](334, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](335, "default");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](336, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](337, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](338, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](339, "[nzOpen]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](340, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](341, "open state of picker");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](342, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](343, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](344, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](345, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](346, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](347, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](348, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](349, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](350, "[nzPopupStyle]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](351, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](352, "to customize the style of the popup calendar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](353, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](354, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](355, "object");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](356, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](357, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](358, "{}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](359, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](360, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](361, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](362, "[nzDropdownClassName]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](363, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](364, "to customize the className of the popup calendar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](365, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](366, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](367, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](368, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](369, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](370, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](371, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](372, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](373, "[nzSize]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](374, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](375, "determine the size of the input box, the height of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](376, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](377, "large");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](378, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](379, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](380, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](381, ", are 40px and 24px respectively, while default size is 32px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](382, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](383, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](384, "'large' | 'small'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](385, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](386, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](387, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](388, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](389, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](390, "[nzDefaultPickerValue]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](391, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](392, "default picker date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](393, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](394, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](395, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](396, " | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](397, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](398, "Date[]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](399, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](400, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](401, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](402, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](403, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](404, "(nzOnOpenChange)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](405, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](406, "a callback emitter, can be executed whether the popup calendar is popped up or closed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](407, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](408, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](409, "EventEmitter<boolean>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](410, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](411, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](412, "h3", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](413, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](414, "nz-date-picker");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](415, "label", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](416, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](417, "a", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](418, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](419, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](420, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](421, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](422, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](423, "Property");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](424, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](425, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](426, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](427, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](428, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](429, "Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](430, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](431, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](432, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](433, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](434, "[ngModel]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](435, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](436, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](437, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](438, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](439, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](440, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](441, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](442, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](443, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](444, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](445, "[nzDisabledTime]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](446, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](447, "to specify the time that cannot be selected");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](448, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](449, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](450, "(current: Date) => { nzDisabledHours, nzDisabledMinutes, nzDisabledSeconds }");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](451, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](452, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](453, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](454, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](455, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](456, "[nzFormat]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](457, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](458, "to set the date format, see ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](459, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](460, "nzFormat special instructions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](461, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](462, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](463, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](464, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](465, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](466, "'yyyy-MM-DD'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](467, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](468, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](469, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](470, "[nzRenderExtraFooter]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](471, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](472, "render extra footer in panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](473, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](474, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](475, "TemplateRef | string | (() => TemplateRef | string)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](476, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](477, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](478, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](479, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](480, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](481, "[nzShowTime]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](482, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](483, "to provide an additional time selection");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](484, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](485, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](486, "object | boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](487, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](488, "a", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](489, "TimePicker Options");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](490, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](491, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](492, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](493, "[nzShowToday]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](494, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](495, "whether to show 'Today' button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](496, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](497, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](498, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](499, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](500, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](501, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](502, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](503, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](504, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](505, "[nzPlaceHolder]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](506, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](507, "placeholder of date input");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](508, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](509, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](510, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](511, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](512, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](513, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](514, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](515, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](516, "(nzOnOk)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](517, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](518, "callback when click ok button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](519, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](520, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](521, "EventEmitter<Date>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](522, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](523, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](524, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](525, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](526, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](527, "(ngModelChange)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](528, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](529, "Date change callback");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](530, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](531, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](532, "EventEmitter<Date>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](533, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](534, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](535, "h3", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](536, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](537, "nz-year-picker");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](538, "label", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](539, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](540, "a", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](541, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](542, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](543, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](544, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](545, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](546, "Property");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](547, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](548, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](549, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](550, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](551, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](552, "Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](553, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](554, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](555, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](556, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](557, "[ngModel]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](558, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](559, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](560, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](561, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](562, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](563, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](564, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](565, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](566, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](567, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](568, "[nzFormat]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](569, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](570, "to set the date format, see ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](571, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](572, "nzFormat special instructions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](573, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](574, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](575, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](576, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](577, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](578, "'yyyy'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](579, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](580, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](581, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](582, "[nzRenderExtraFooter]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](583, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](584, "render extra footer in panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](585, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](586, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](587, "TemplateRef | string | (() => TemplateRef | string)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](588, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](589, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](590, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](591, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](592, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](593, "[nzPlaceHolder]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](594, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](595, "placeholder of date input");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](596, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](597, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](598, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](599, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](600, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](601, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](602, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](603, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](604, "(ngModelChange)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](605, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](606, "Date change callback");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](607, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](608, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](609, "EventEmitter<Date>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](610, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](611, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](612, "h3", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](613, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](614, "nz-month-picker");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](615, "label", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](616, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](617, "a", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](618, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](619, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](620, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](621, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](622, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](623, "Property");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](624, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](625, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](626, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](627, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](628, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](629, "Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](630, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](631, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](632, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](633, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](634, "[ngModel]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](635, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](636, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](637, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](638, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](639, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](640, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](641, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](642, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](643, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](644, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](645, "[nzFormat]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](646, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](647, "to set the date format, see ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](648, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](649, "nzFormat special instructions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](650, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](651, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](652, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](653, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](654, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](655, "'yyyy-MM'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](656, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](657, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](658, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](659, "[nzRenderExtraFooter]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](660, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](661, "render extra footer in panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](662, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](663, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](664, "TemplateRef | string | (() => TemplateRef | string)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](665, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](666, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](667, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](668, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](669, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](670, "[nzPlaceHolder]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](671, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](672, "placeholder of date input");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](673, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](674, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](675, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](676, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](677, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](678, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](679, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](680, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](681, "(ngModelChange)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](682, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](683, "Date change callback");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](684, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](685, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](686, "EventEmitter<Date>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](687, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](688, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](689, "h3", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](690, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](691, "nz-week-picker");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](692, "label", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](693, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](694, "a", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](695, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](696, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](697, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](698, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](699, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](700, "Property");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](701, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](702, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](703, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](704, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](705, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](706, "Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](707, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](708, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](709, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](710, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](711, "[ngModel]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](712, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](713, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](714, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](715, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](716, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](717, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](718, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](719, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](720, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](721, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](722, "[nzFormat]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](723, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](724, "to set the date format, see ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](725, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](726, "nzFormat special instructions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](727, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](728, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](729, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](730, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](731, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](732, "'yyyy-ww'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](733, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](734, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](735, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](736, "[nzPlaceHolder]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](737, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](738, "placeholder of date input");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](739, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](740, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](741, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](742, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](743, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](744, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](745, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](746, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](747, "(ngModelChange)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](748, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](749, "Date change callback");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](750, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](751, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](752, "EventEmitter<Date>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](753, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](754, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](755, "h3", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](756, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](757, "nz-range-picker");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](758, "label", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](759, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](760, "a", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](761, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](762, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](763, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](764, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](765, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](766, "Property");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](767, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](768, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](769, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](770, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](771, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](772, "Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](773, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](774, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](775, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](776, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](777, "[ngModel]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](778, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](779, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](780, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](781, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](782, "Date[]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](783, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](784, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](785, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](786, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](787, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](788, "[nzDisabledTime]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](789, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](790, "to specify the time that cannot be selected");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](791, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](792, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](793, "(current: Date, partial: 'start' | 'end') => { nzDisabledHours, nzDisabledMinutes, nzDisabledSeconds }");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](794, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](795, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](796, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](797, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](798, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](799, "[nzFormat]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](800, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](801, "to set the date format, see ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](802, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](803, "nzFormat special instructions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](804, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](805, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](806, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](807, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](808, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](809, "'yyyy-MM-dd'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](810, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](811, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](812, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](813, "[nzRanges]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](814, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](815, "preseted ranges for quick selection");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](816, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](817, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](818, "{ [ key: string ]: Date[] } | { [ key: string ]: () => Date[] }");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](819, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](820, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](821, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](822, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](823, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](824, "[nzRenderExtraFooter]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](825, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](826, "render extra footer in panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](827, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](828, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](829, "TemplateRef | string | (() => TemplateRef | string)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](830, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](831, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](832, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](833, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](834, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](835, "[nzShowTime]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](836, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](837, "to provide an additional time selection");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](838, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](839, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](840, "object | boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](841, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](842, "a", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](843, "TimePicker Options");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](844, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](845, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](846, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](847, "[nzPlaceHolder]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](848, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](849, "placeholder of date input");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](850, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](851, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](852, "string[]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](853, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](854, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](855, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](856, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](857, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](858, "[nzSeparator]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](859, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](860, "separator");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](861, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](862, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](863, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](864, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](865, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](866, "'~'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](867, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](868, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](869, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](870, "(nzOnOk)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](871, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](872, "click ok callback");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](873, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](874, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](875, "EventEmitter<Date[]>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](876, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](877, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](878, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](879, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](880, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](881, "(ngModelChange)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](882, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](883, "Date change callback");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](884, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](885, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](886, "EventEmitter<Date[]>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](887, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](888, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](889, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](890, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](891, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](892, "(nzOnCalendarChange)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](893, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](894, "The start time or the end time of the range change callback");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](895, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](896, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](897, "EventEmitter<Date[]>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](898, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](899, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](900, "blockquote");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](901, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](902, "Currently supported ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](903, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](904, "nz-time-picker");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](905, " parameters in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](906, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](907, "nzShowTime");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](908, " are: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](909, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](910, "nzFormat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](911, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](912, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](913, "nzHourStep");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](914, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](915, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](916, "nzMinuteStep");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](917, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](918, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](919, "nzSecondStep");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](920, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](921, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](922, "nzDisabledHours");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](923, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](924, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](925, "nzDisabledMinutes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](926, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](927, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](928, "nzDisabledSeconds");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](929, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](930, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](931, "nzHideDisabledOptions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](932, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](933, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](934, "nzDefaultOpenValue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](935, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](936, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](937, "nzAddOn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](938, "h3", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](939, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](940, "nzFormat special instructions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](941, "a", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](942, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](943, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](944, "Date formatting currently supports two methods: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](945, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](946, "DatePipe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](947, " (default, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](948, "a", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](949, "syntax reference");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](950, ") and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](951, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](952, "Date-fns");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](953, " (");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](954, "a", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](955, "syntax reference");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](956, ", see ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](957, "a", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](958, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](959, "How to format a date using Date-fns");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](960, ").");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzOffsetTop", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzAffix", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzGutter", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzXl", 12)("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-date-picker-demo-basic")("nzLink", "components-date-picker-demo-basic")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/date-picker/demo/basic.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-date-picker-demo-size")("nzLink", "components-date-picker-demo-size")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/date-picker/demo/size.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-date-picker-demo-disabled")("nzLink", "components-date-picker-demo-disabled")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/date-picker/demo/disabled.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-date-picker-demo-start-end")("nzLink", "components-date-picker-demo-start-end")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/date-picker/demo/start-end.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-date-picker-demo-extra-footer")("nzLink", "components-date-picker-demo-extra-footer")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/date-picker/demo/extra-footer.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-date-picker-demo-date-render")("nzLink", "components-date-picker-demo-date-render")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/date-picker/demo/date-render.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzXl", 12)("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-date-picker-demo-format")("nzLink", "components-date-picker-demo-format")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/date-picker/demo/format.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-date-picker-demo-time")("nzLink", "components-date-picker-demo-time")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/date-picker/demo/time.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-date-picker-demo-disabled-date")("nzLink", "components-date-picker-demo-disabled-date")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/date-picker/demo/disabled-date.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-date-picker-demo-presetted-ranges")("nzLink", "components-date-picker-demo-presetted-ranges")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/date-picker/demo/presetted-ranges.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-date-picker-demo-mode")("nzLink", "components-date-picker-demo-mode")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/date-picker/demo/mode.md");
    } }, directives: [ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_2__["NzAffixComponent"], ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_3__["NzAnchorComponent"], ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_3__["NzAnchorLinkComponent"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__["ɵNzTransitionPatchDirective"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_5__["NzTooltipDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__["NzRowDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__["NzColDirective"], _share_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_1__["NzCodeBoxComponent"], _basic__WEBPACK_IMPORTED_MODULE_7__["NzDemoDatePickerBasicComponent"], _size__WEBPACK_IMPORTED_MODULE_8__["NzDemoDatePickerSizeComponent"], _disabled__WEBPACK_IMPORTED_MODULE_9__["NzDemoDatePickerDisabledComponent"], _start_end__WEBPACK_IMPORTED_MODULE_10__["NzDemoDatePickerStartEndComponent"], _extra_footer__WEBPACK_IMPORTED_MODULE_11__["NzDemoDatePickerExtraFooterComponent"], _date_render__WEBPACK_IMPORTED_MODULE_12__["NzDemoDatePickerDateRenderComponent"], _format__WEBPACK_IMPORTED_MODULE_13__["NzDemoDatePickerFormatComponent"], _time__WEBPACK_IMPORTED_MODULE_14__["NzDemoDatePickerTimeComponent"], _disabled_date__WEBPACK_IMPORTED_MODULE_15__["NzDemoDatePickerDisabledDateComponent"], _presetted_ranges__WEBPACK_IMPORTED_MODULE_16__["NzDemoDatePickerPresettedRangesComponent"], _mode__WEBPACK_IMPORTED_MODULE_17__["NzDemoDatePickerModeComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoDatePickerEnComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-demo-date-picker',
                preserveWhitespaces: false,
                templateUrl: './en.html'
            }]
    }], null, { codeBoxes: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"],
            args: [_share_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_1__["NzCodeBoxComponent"]]
        }] }); })();


/***/ }),

/***/ "./site/doc/app/date-picker/extra-footer.ts":
/*!**************************************************!*\
  !*** ./site/doc/app/date-picker/extra-footer.ts ***!
  \**************************************************/
/*! exports provided: NzDemoDatePickerExtraFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoDatePickerExtraFooterComponent", function() { return NzDemoDatePickerExtraFooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/date-picker */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-date-picker.js");



class NzDemoDatePickerExtraFooterComponent {
    constructor() {
        this.plainFooter = 'plain extra footer';
        this.footerRender = () => 'extra footer';
    }
}
/** @nocollapse */ NzDemoDatePickerExtraFooterComponent.ɵfac = function NzDemoDatePickerExtraFooterComponent_Factory(t) { return new (t || NzDemoDatePickerExtraFooterComponent)(); };
/** @nocollapse */ NzDemoDatePickerExtraFooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoDatePickerExtraFooterComponent, selectors: [["nz-demo-date-picker-extra-footer"]], decls: 5, vars: 5, consts: [[3, "nzRenderExtraFooter"], ["nzShowTime", "", 3, "nzRenderExtraFooter"], ["nzPlaceHolder", "Select month", 3, "nzRenderExtraFooter"]], template: function NzDemoDatePickerExtraFooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-date-picker", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "nz-date-picker", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "nz-range-picker", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "nz-range-picker", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "nz-month-picker", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzRenderExtraFooter", ctx.footerRender);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzRenderExtraFooter", ctx.plainFooter);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzRenderExtraFooter", ctx.footerRender);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzRenderExtraFooter", ctx.plainFooter);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzRenderExtraFooter", ctx.footerRender);
    } }, directives: [ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_1__["NzDatePickerComponent"], ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_1__["NzRangePickerComponent"], ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_1__["NzMonthPickerComponent"]], styles: ["nz-date-picker[_ngcontent-%COMP%], nz-month-picker[_ngcontent-%COMP%], nz-range-picker[_ngcontent-%COMP%], nz-week-picker[_ngcontent-%COMP%] {\n        margin: 0 8px 12px 0;\n      }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoDatePickerExtraFooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-demo-date-picker-extra-footer',
                template: `
    <nz-date-picker [nzRenderExtraFooter]="footerRender"></nz-date-picker>
    <nz-date-picker [nzRenderExtraFooter]="plainFooter" nzShowTime></nz-date-picker>
    <nz-range-picker [nzRenderExtraFooter]="footerRender"></nz-range-picker>
    <nz-range-picker [nzRenderExtraFooter]="plainFooter" nzShowTime></nz-range-picker>
    <nz-month-picker [nzRenderExtraFooter]="footerRender" nzPlaceHolder="Select month"></nz-month-picker>
  `,
                styles: [
                    `
      nz-date-picker,
      nz-month-picker,
      nz-range-picker,
      nz-week-picker {
        margin: 0 8px 12px 0;
      }
    `
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./site/doc/app/date-picker/format.ts":
/*!********************************************!*\
  !*** ./site/doc/app/date-picker/format.ts ***!
  \********************************************/
/*! exports provided: NzDemoDatePickerFormatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoDatePickerFormatComponent", function() { return NzDemoDatePickerFormatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/date-picker */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-date-picker.js");



class NzDemoDatePickerFormatComponent {
    constructor() {
        this.dateFormat = 'yyyy/MM/dd';
        this.monthFormat = 'yyyy/MM';
    }
}
/** @nocollapse */ NzDemoDatePickerFormatComponent.ɵfac = function NzDemoDatePickerFormatComponent_Factory(t) { return new (t || NzDemoDatePickerFormatComponent)(); };
/** @nocollapse */ NzDemoDatePickerFormatComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoDatePickerFormatComponent, selectors: [["nz-demo-date-picker-format"]], decls: 5, vars: 3, consts: [[3, "nzFormat"], ["nzPlaceHolder", "Select month", 3, "nzFormat"]], template: function NzDemoDatePickerFormatComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-date-picker", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "nz-month-picker", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "nz-range-picker", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzFormat", ctx.dateFormat);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzFormat", ctx.monthFormat);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzFormat", ctx.dateFormat);
    } }, directives: [ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_1__["NzDatePickerComponent"], ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_1__["NzMonthPickerComponent"], ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_1__["NzRangePickerComponent"]], styles: ["nz-date-picker[_ngcontent-%COMP%], nz-month-picker[_ngcontent-%COMP%], nz-range-picker[_ngcontent-%COMP%], nz-week-picker[_ngcontent-%COMP%] {\n        margin: 0 8px 12px 0;\n      }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoDatePickerFormatComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-demo-date-picker-format',
                template: `
    <nz-date-picker [nzFormat]="dateFormat"></nz-date-picker>
    <br />
    <nz-month-picker [nzFormat]="monthFormat" nzPlaceHolder="Select month"></nz-month-picker>
    <br />
    <nz-range-picker [nzFormat]="dateFormat"></nz-range-picker>
  `,
                styles: [
                    `
      nz-date-picker,
      nz-month-picker,
      nz-range-picker,
      nz-week-picker {
        margin: 0 8px 12px 0;
      }
    `
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./site/doc/app/date-picker/index.module.ts":
/*!**************************************************!*\
  !*** ./site/doc/app/date-picker/index.module.ts ***!
  \**************************************************/
/*! exports provided: NzDemoDatePickerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoDatePickerModule", function() { return NzDemoDatePickerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _share_share_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../share/share.module */ "./site/doc/app/share/share.module.ts");
/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./module */ "./site/doc/app/date-picker/module.ts");
/* harmony import */ var _basic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./basic */ "./site/doc/app/date-picker/basic.ts");
/* harmony import */ var _date_render__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./date-render */ "./site/doc/app/date-picker/date-render.ts");
/* harmony import */ var _disabled_date__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./disabled-date */ "./site/doc/app/date-picker/disabled-date.ts");
/* harmony import */ var _disabled__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./disabled */ "./site/doc/app/date-picker/disabled.ts");
/* harmony import */ var _extra_footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./extra-footer */ "./site/doc/app/date-picker/extra-footer.ts");
/* harmony import */ var _format__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./format */ "./site/doc/app/date-picker/format.ts");
/* harmony import */ var _mode__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./mode */ "./site/doc/app/date-picker/mode.ts");
/* harmony import */ var _presetted_ranges__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./presetted-ranges */ "./site/doc/app/date-picker/presetted-ranges.ts");
/* harmony import */ var _size__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./size */ "./site/doc/app/date-picker/size.ts");
/* harmony import */ var _start_end__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./start-end */ "./site/doc/app/date-picker/start-end.ts");
/* harmony import */ var _time__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./time */ "./site/doc/app/date-picker/time.ts");
/* harmony import */ var _zh_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./zh.component */ "./site/doc/app/date-picker/zh.component.ts");
/* harmony import */ var _en_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./en.component */ "./site/doc/app/date-picker/en.component.ts");
/* harmony import */ var ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/date-picker */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-date-picker.js");
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/radio */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-radio.js");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/button */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-button.js");






















class NzDemoDatePickerModule {
}
/** @nocollapse */ NzDemoDatePickerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NzDemoDatePickerModule });
/** @nocollapse */ NzDemoDatePickerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NzDemoDatePickerModule_Factory(t) { return new (t || NzDemoDatePickerModule)(); }, imports: [[
            _share_share_module__WEBPACK_IMPORTED_MODULE_2__["ShareModule"],
            ..._module__WEBPACK_IMPORTED_MODULE_3__["moduleList"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                { path: 'en', component: _en_component__WEBPACK_IMPORTED_MODULE_16__["NzDemoDatePickerEnComponent"] },
                { path: 'zh', component: _zh_component__WEBPACK_IMPORTED_MODULE_15__["NzDemoDatePickerZhComponent"] }
            ])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NzDemoDatePickerModule, { declarations: [_basic__WEBPACK_IMPORTED_MODULE_4__["NzDemoDatePickerBasicComponent"],
        _date_render__WEBPACK_IMPORTED_MODULE_5__["NzDemoDatePickerDateRenderComponent"],
        _disabled_date__WEBPACK_IMPORTED_MODULE_6__["NzDemoDatePickerDisabledDateComponent"],
        _disabled__WEBPACK_IMPORTED_MODULE_7__["NzDemoDatePickerDisabledComponent"],
        _extra_footer__WEBPACK_IMPORTED_MODULE_8__["NzDemoDatePickerExtraFooterComponent"],
        _format__WEBPACK_IMPORTED_MODULE_9__["NzDemoDatePickerFormatComponent"],
        _mode__WEBPACK_IMPORTED_MODULE_10__["NzDemoDatePickerModeComponent"],
        _presetted_ranges__WEBPACK_IMPORTED_MODULE_11__["NzDemoDatePickerPresettedRangesComponent"],
        _size__WEBPACK_IMPORTED_MODULE_12__["NzDemoDatePickerSizeComponent"],
        _start_end__WEBPACK_IMPORTED_MODULE_13__["NzDemoDatePickerStartEndComponent"],
        _time__WEBPACK_IMPORTED_MODULE_14__["NzDemoDatePickerTimeComponent"],
        _zh_component__WEBPACK_IMPORTED_MODULE_15__["NzDemoDatePickerZhComponent"],
        _en_component__WEBPACK_IMPORTED_MODULE_16__["NzDemoDatePickerEnComponent"]], imports: [_share_share_module__WEBPACK_IMPORTED_MODULE_2__["ShareModule"], ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_17__["NzDatePickerModule"], ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_18__["NzRadioModule"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_19__["NzButtonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoDatePickerModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _share_share_module__WEBPACK_IMPORTED_MODULE_2__["ShareModule"],
                    ..._module__WEBPACK_IMPORTED_MODULE_3__["moduleList"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                        { path: 'en', component: _en_component__WEBPACK_IMPORTED_MODULE_16__["NzDemoDatePickerEnComponent"] },
                        { path: 'zh', component: _zh_component__WEBPACK_IMPORTED_MODULE_15__["NzDemoDatePickerZhComponent"] }
                    ])
                ],
                declarations: [
                    _basic__WEBPACK_IMPORTED_MODULE_4__["NzDemoDatePickerBasicComponent"],
                    _date_render__WEBPACK_IMPORTED_MODULE_5__["NzDemoDatePickerDateRenderComponent"],
                    _disabled_date__WEBPACK_IMPORTED_MODULE_6__["NzDemoDatePickerDisabledDateComponent"],
                    _disabled__WEBPACK_IMPORTED_MODULE_7__["NzDemoDatePickerDisabledComponent"],
                    _extra_footer__WEBPACK_IMPORTED_MODULE_8__["NzDemoDatePickerExtraFooterComponent"],
                    _format__WEBPACK_IMPORTED_MODULE_9__["NzDemoDatePickerFormatComponent"],
                    _mode__WEBPACK_IMPORTED_MODULE_10__["NzDemoDatePickerModeComponent"],
                    _presetted_ranges__WEBPACK_IMPORTED_MODULE_11__["NzDemoDatePickerPresettedRangesComponent"],
                    _size__WEBPACK_IMPORTED_MODULE_12__["NzDemoDatePickerSizeComponent"],
                    _start_end__WEBPACK_IMPORTED_MODULE_13__["NzDemoDatePickerStartEndComponent"],
                    _time__WEBPACK_IMPORTED_MODULE_14__["NzDemoDatePickerTimeComponent"],
                    _zh_component__WEBPACK_IMPORTED_MODULE_15__["NzDemoDatePickerZhComponent"],
                    _en_component__WEBPACK_IMPORTED_MODULE_16__["NzDemoDatePickerEnComponent"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./site/doc/app/date-picker/mode.ts":
/*!******************************************!*\
  !*** ./site/doc/app/date-picker/mode.ts ***!
  \******************************************/
/*! exports provided: NzDemoDatePickerModeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoDatePickerModeComponent", function() { return NzDemoDatePickerModeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/date-picker */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-date-picker.js");



class NzDemoDatePickerModeComponent {
    constructor() {
        this.dateMode = 'time';
    }
    handleDateOpenChange(open) {
        if (open) {
            this.dateMode = 'time';
        }
    }
    handleDatePanelChange(mode) {
        console.log('handleDatePanelChange: ', mode);
    }
}
/** @nocollapse */ NzDemoDatePickerModeComponent.ɵfac = function NzDemoDatePickerModeComponent_Factory(t) { return new (t || NzDemoDatePickerModeComponent)(); };
/** @nocollapse */ NzDemoDatePickerModeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoDatePickerModeComponent, selectors: [["nz-demo-date-picker-mode"]], decls: 1, vars: 1, consts: [["nzShowTime", "", 3, "nzMode", "nzOnOpenChange", "nzOnPanelChange"]], template: function NzDemoDatePickerModeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-date-picker", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzOnOpenChange", function NzDemoDatePickerModeComponent_Template_nz_date_picker_nzOnOpenChange_0_listener($event) { return ctx.handleDateOpenChange($event); })("nzOnPanelChange", function NzDemoDatePickerModeComponent_Template_nz_date_picker_nzOnPanelChange_0_listener($event) { return ctx.handleDatePanelChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzMode", ctx.dateMode);
    } }, directives: [ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_1__["NzDatePickerComponent"]], styles: ["nz-date-picker[_ngcontent-%COMP%], nz-month-picker[_ngcontent-%COMP%], nz-range-picker[_ngcontent-%COMP%], nz-week-picker[_ngcontent-%COMP%] {\n        margin: 0 8px 12px 0;\n      }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoDatePickerModeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-demo-date-picker-mode',
                template: `
    <nz-date-picker
      [nzMode]="dateMode"
      nzShowTime
      (nzOnOpenChange)="handleDateOpenChange($event)"
      (nzOnPanelChange)="handleDatePanelChange($event)"
    >
    </nz-date-picker>
  `,
                styles: [
                    `
      nz-date-picker,
      nz-month-picker,
      nz-range-picker,
      nz-week-picker {
        margin: 0 8px 12px 0;
      }
    `
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./site/doc/app/date-picker/module.ts":
/*!********************************************!*\
  !*** ./site/doc/app/date-picker/module.ts ***!
  \********************************************/
/*! exports provided: moduleList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moduleList", function() { return moduleList; });
/* harmony import */ var ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng-zorro-antd/date-picker */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-date-picker.js");
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/radio */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-radio.js");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/button */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-button.js");



const moduleList = [ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_0__["NzDatePickerModule"], ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_1__["NzRadioModule"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__["NzButtonModule"]];


/***/ }),

/***/ "./site/doc/app/date-picker/presetted-ranges.ts":
/*!******************************************************!*\
  !*** ./site/doc/app/date-picker/presetted-ranges.ts ***!
  \******************************************************/
/*! exports provided: NzDemoDatePickerPresettedRangesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoDatePickerPresettedRangesComponent", function() { return NzDemoDatePickerPresettedRangesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var date_fns_endOfMonth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns/endOfMonth */ "./node_modules/date-fns/esm/endOfMonth/index.js");
/* harmony import */ var ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/date-picker */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-date-picker.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");





class NzDemoDatePickerPresettedRangesComponent {
    constructor() {
        this.ranges1 = { Today: [new Date(), new Date()], 'This Month': [new Date(), Object(date_fns_endOfMonth__WEBPACK_IMPORTED_MODULE_1__["default"])(new Date())] };
        this.ranges2 = { Today: [new Date(), new Date()], 'This Month': [new Date(), Object(date_fns_endOfMonth__WEBPACK_IMPORTED_MODULE_1__["default"])(new Date())] };
    }
    onChange(result) {
        console.log('From: ', result[0], ', to: ', result[1]);
    }
}
/** @nocollapse */ NzDemoDatePickerPresettedRangesComponent.ɵfac = function NzDemoDatePickerPresettedRangesComponent_Factory(t) { return new (t || NzDemoDatePickerPresettedRangesComponent)(); };
/** @nocollapse */ NzDemoDatePickerPresettedRangesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoDatePickerPresettedRangesComponent, selectors: [["nz-demo-date-picker-presetted-ranges"]], decls: 3, vars: 2, consts: [["ngModel", "", 3, "nzRanges", "ngModelChange"], ["nzShowTime", "", "nzFormat", "yyyy/MM/dd HH:mm:ss", "ngModel", "", 3, "nzRanges", "ngModelChange"]], template: function NzDemoDatePickerPresettedRangesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-range-picker", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoDatePickerPresettedRangesComponent_Template_nz_range_picker_ngModelChange_0_listener($event) { return ctx.onChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nz-range-picker", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoDatePickerPresettedRangesComponent_Template_nz_range_picker_ngModelChange_2_listener($event) { return ctx.onChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzRanges", ctx.ranges1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzRanges", ctx.ranges1);
    } }, directives: [ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_2__["NzDatePickerComponent"], ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_2__["NzRangePickerComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]], styles: ["nz-date-picker[_ngcontent-%COMP%], nz-month-picker[_ngcontent-%COMP%], nz-range-picker[_ngcontent-%COMP%], nz-week-picker[_ngcontent-%COMP%] {\n        margin: 0 8px 12px 0;\n      }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoDatePickerPresettedRangesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-demo-date-picker-presetted-ranges',
                template: `
    <nz-range-picker [nzRanges]="ranges1" ngModel (ngModelChange)="onChange($event)"></nz-range-picker>
    <br />
    <nz-range-picker
      [nzRanges]="ranges1"
      nzShowTime
      nzFormat="yyyy/MM/dd HH:mm:ss"
      ngModel
      (ngModelChange)="onChange($event)"
    ></nz-range-picker>
  `,
                styles: [
                    `
      nz-date-picker,
      nz-month-picker,
      nz-range-picker,
      nz-week-picker {
        margin: 0 8px 12px 0;
      }
    `
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./site/doc/app/date-picker/size.ts":
/*!******************************************!*\
  !*** ./site/doc/app/date-picker/size.ts ***!
  \******************************************/
/*! exports provided: NzDemoDatePickerSizeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoDatePickerSizeComponent", function() { return NzDemoDatePickerSizeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/radio */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-radio.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/date-picker */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-date-picker.js");





class NzDemoDatePickerSizeComponent {
    constructor() {
        this.size = 'default';
    }
}
/** @nocollapse */ NzDemoDatePickerSizeComponent.ɵfac = function NzDemoDatePickerSizeComponent_Factory(t) { return new (t || NzDemoDatePickerSizeComponent)(); };
/** @nocollapse */ NzDemoDatePickerSizeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoDatePickerSizeComponent, selectors: [["nz-demo-date-picker-size"]], decls: 16, vars: 5, consts: [[3, "ngModel", "ngModelChange"], ["nz-radio-button", "", "nzValue", "large"], ["nz-radio-button", "", "nzValue", "default"], ["nz-radio-button", "", "nzValue", "small"], [3, "nzSize"], ["nzPlaceHolder", "Select Month", 3, "nzSize"], ["nzPlaceHolder", "Select Week", 3, "nzSize"]], template: function NzDemoDatePickerSizeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-radio-group", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoDatePickerSizeComponent_Template_nz_radio_group_ngModelChange_0_listener($event) { return ctx.size = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "large");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "default");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "nz-date-picker", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "nz-month-picker", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "nz-range-picker", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "nz-week-picker", 6);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.size);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSize", ctx.size);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSize", ctx.size);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSize", ctx.size);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSize", ctx.size);
    } }, directives: [ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_1__["NzRadioGroupComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_1__["NzRadioComponent"], ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_1__["NzRadioButtonDirective"], ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_3__["NzDatePickerComponent"], ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_3__["NzMonthPickerComponent"], ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_3__["NzRangePickerComponent"], ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_3__["NzWeekPickerComponent"]], styles: ["nz-date-picker[_ngcontent-%COMP%], nz-month-picker[_ngcontent-%COMP%], nz-range-picker[_ngcontent-%COMP%], nz-week-picker[_ngcontent-%COMP%] {\n        margin: 0 8px 12px 0;\n      }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoDatePickerSizeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-demo-date-picker-size',
                template: `
    <nz-radio-group [(ngModel)]="size">
      <label nz-radio-button nzValue="large">large</label>
      <label nz-radio-button nzValue="default">default</label>
      <label nz-radio-button nzValue="small">small</label>
    </nz-radio-group>
    <br /><br />
    <nz-date-picker [nzSize]="size"></nz-date-picker>
    <br />
    <nz-month-picker [nzSize]="size" nzPlaceHolder="Select Month"></nz-month-picker>
    <br />
    <nz-range-picker [nzSize]="size"></nz-range-picker>
    <br />
    <nz-week-picker [nzSize]="size" nzPlaceHolder="Select Week"></nz-week-picker>
  `,
                styles: [
                    `
      nz-date-picker,
      nz-month-picker,
      nz-range-picker,
      nz-week-picker {
        margin: 0 8px 12px 0;
      }
    `
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./site/doc/app/date-picker/start-end.ts":
/*!***********************************************!*\
  !*** ./site/doc/app/date-picker/start-end.ts ***!
  \***********************************************/
/*! exports provided: NzDemoDatePickerStartEndComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoDatePickerStartEndComponent", function() { return NzDemoDatePickerStartEndComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/date-picker */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-date-picker.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");




class NzDemoDatePickerStartEndComponent {
    constructor() {
        this.startValue = null;
        this.endValue = null;
        this.endOpen = false;
        this.disabledStartDate = (startValue) => {
            if (!startValue || !this.endValue) {
                return false;
            }
            return startValue.getTime() > this.endValue.getTime();
        };
        this.disabledEndDate = (endValue) => {
            if (!endValue || !this.startValue) {
                return false;
            }
            return endValue.getTime() <= this.startValue.getTime();
        };
    }
    onStartChange(date) {
        this.startValue = date;
    }
    onEndChange(date) {
        this.endValue = date;
    }
    handleStartOpenChange(open) {
        if (!open) {
            this.endOpen = true;
        }
        console.log('handleStartOpenChange', open, this.endOpen);
    }
    handleEndOpenChange(open) {
        console.log(open);
        this.endOpen = open;
    }
}
/** @nocollapse */ NzDemoDatePickerStartEndComponent.ɵfac = function NzDemoDatePickerStartEndComponent_Factory(t) { return new (t || NzDemoDatePickerStartEndComponent)(); };
/** @nocollapse */ NzDemoDatePickerStartEndComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoDatePickerStartEndComponent, selectors: [["nz-demo-date-picker-start-end"]], decls: 2, vars: 5, consts: [["nzShowTime", "", "nzFormat", "yyyy-MM-dd HH:mm:ss", "nzPlaceHolder", "Start", 3, "nzDisabledDate", "ngModel", "ngModelChange", "nzOnOpenChange"], ["nzShowTime", "", "nzFormat", "yyyy-MM-dd HH:mm:ss", "nzPlaceHolder", "End", 3, "nzDisabledDate", "ngModel", "nzOpen", "ngModelChange", "nzOnOpenChange"]], template: function NzDemoDatePickerStartEndComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-date-picker", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoDatePickerStartEndComponent_Template_nz_date_picker_ngModelChange_0_listener($event) { return ctx.startValue = $event; })("ngModelChange", function NzDemoDatePickerStartEndComponent_Template_nz_date_picker_ngModelChange_0_listener($event) { return ctx.onStartChange($event); })("nzOnOpenChange", function NzDemoDatePickerStartEndComponent_Template_nz_date_picker_nzOnOpenChange_0_listener($event) { return ctx.handleStartOpenChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-date-picker", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoDatePickerStartEndComponent_Template_nz_date_picker_ngModelChange_1_listener($event) { return ctx.endValue = $event; })("ngModelChange", function NzDemoDatePickerStartEndComponent_Template_nz_date_picker_ngModelChange_1_listener($event) { return ctx.onEndChange($event); })("nzOnOpenChange", function NzDemoDatePickerStartEndComponent_Template_nz_date_picker_nzOnOpenChange_1_listener($event) { return ctx.handleEndOpenChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzDisabledDate", ctx.disabledStartDate)("ngModel", ctx.startValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzDisabledDate", ctx.disabledEndDate)("ngModel", ctx.endValue)("nzOpen", ctx.endOpen);
    } }, directives: [ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_1__["NzDatePickerComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]], styles: ["nz-date-picker[_ngcontent-%COMP%] {\n        margin: 0 8px 12px 0;\n      }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoDatePickerStartEndComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-demo-date-picker-start-end',
                template: `
    <nz-date-picker
      [nzDisabledDate]="disabledStartDate"
      nzShowTime
      nzFormat="yyyy-MM-dd HH:mm:ss"
      [(ngModel)]="startValue"
      nzPlaceHolder="Start"
      (ngModelChange)="onStartChange($event)"
      (nzOnOpenChange)="handleStartOpenChange($event)"
    >
    </nz-date-picker>
    <nz-date-picker
      [nzDisabledDate]="disabledEndDate"
      nzShowTime
      nzFormat="yyyy-MM-dd HH:mm:ss"
      [(ngModel)]="endValue"
      nzPlaceHolder="End"
      [nzOpen]="endOpen"
      (ngModelChange)="onEndChange($event)"
      (nzOnOpenChange)="handleEndOpenChange($event)"
    >
    </nz-date-picker>
  `,
                styles: [
                    `
      nz-date-picker {
        margin: 0 8px 12px 0;
      }
    `
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./site/doc/app/date-picker/time.ts":
/*!******************************************!*\
  !*** ./site/doc/app/date-picker/time.ts ***!
  \******************************************/
/*! exports provided: NzDemoDatePickerTimeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoDatePickerTimeComponent", function() { return NzDemoDatePickerTimeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/date-picker */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-date-picker.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");




const _c0 = function () { return { nzFormat: "HH:mm" }; };
const _c1 = function () { return ["Start Time", "End Time"]; };
class NzDemoDatePickerTimeComponent {
    onChange(result) {
        console.log('Selected Time: ', result);
    }
    onOk(result) {
        console.log('onOk', result);
    }
}
/** @nocollapse */ NzDemoDatePickerTimeComponent.ɵfac = function NzDemoDatePickerTimeComponent_Factory(t) { return new (t || NzDemoDatePickerTimeComponent)(); };
/** @nocollapse */ NzDemoDatePickerTimeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoDatePickerTimeComponent, selectors: [["nz-demo-date-picker-time"]], decls: 3, vars: 4, consts: [["nzShowTime", "", "nzFormat", "yyyy-MM-dd HH:mm:ss", "nzPlaceHolder", "Select Time", "ngModel", "", 3, "ngModelChange", "nzOnOk"], ["nzFormat", "yyyy-MM-dd HH:mm", "ngModel", "", 3, "nzShowTime", "nzPlaceHolder", "ngModelChange", "nzOnOk"]], template: function NzDemoDatePickerTimeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-date-picker", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoDatePickerTimeComponent_Template_nz_date_picker_ngModelChange_0_listener($event) { return ctx.onChange($event); })("nzOnOk", function NzDemoDatePickerTimeComponent_Template_nz_date_picker_nzOnOk_0_listener($event) { return ctx.onOk($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nz-range-picker", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoDatePickerTimeComponent_Template_nz_range_picker_ngModelChange_2_listener($event) { return ctx.onChange($event); })("nzOnOk", function NzDemoDatePickerTimeComponent_Template_nz_range_picker_nzOnOk_2_listener($event) { return ctx.onOk($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzShowTime", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0))("nzPlaceHolder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
    } }, directives: [ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_1__["NzDatePickerComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_1__["NzRangePickerComponent"]], styles: ["nz-date-picker[_ngcontent-%COMP%], nz-month-picker[_ngcontent-%COMP%], nz-range-picker[_ngcontent-%COMP%], nz-week-picker[_ngcontent-%COMP%] {\n        margin: 0 8px 12px 0;\n      }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoDatePickerTimeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-demo-date-picker-time',
                template: `
    <nz-date-picker
      nzShowTime
      nzFormat="yyyy-MM-dd HH:mm:ss"
      nzPlaceHolder="Select Time"
      ngModel
      (ngModelChange)="onChange($event)"
      (nzOnOk)="onOk($event)"
    ></nz-date-picker>
    <br />
    <nz-range-picker
      [nzShowTime]="{ nzFormat: 'HH:mm' }"
      nzFormat="yyyy-MM-dd HH:mm"
      [nzPlaceHolder]="['Start Time', 'End Time']"
      ngModel
      (ngModelChange)="onChange($event)"
      (nzOnOk)="onOk($event)"
    ></nz-range-picker>
  `,
                styles: [
                    `
      nz-date-picker,
      nz-month-picker,
      nz-range-picker,
      nz-week-picker {
        margin: 0 8px 12px 0;
      }
    `
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./site/doc/app/date-picker/zh.component.ts":
/*!**************************************************!*\
  !*** ./site/doc/app/date-picker/zh.component.ts ***!
  \**************************************************/
/*! exports provided: NzDemoDatePickerZhComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoDatePickerZhComponent", function() { return NzDemoDatePickerZhComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _share_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../share/codebox/codebox.component */ "./site/doc/app/share/codebox/codebox.component.ts");
/* harmony import */ var ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/affix */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-affix.js");
/* harmony import */ var ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/anchor */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-anchor.js");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-transition-patch.js");
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-tooltip.js");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/grid */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-grid.js");
/* harmony import */ var _basic__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./basic */ "./site/doc/app/date-picker/basic.ts");
/* harmony import */ var _size__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./size */ "./site/doc/app/date-picker/size.ts");
/* harmony import */ var _disabled__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./disabled */ "./site/doc/app/date-picker/disabled.ts");
/* harmony import */ var _start_end__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./start-end */ "./site/doc/app/date-picker/start-end.ts");
/* harmony import */ var _extra_footer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./extra-footer */ "./site/doc/app/date-picker/extra-footer.ts");
/* harmony import */ var _date_render__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./date-render */ "./site/doc/app/date-picker/date-render.ts");
/* harmony import */ var _format__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./format */ "./site/doc/app/date-picker/format.ts");
/* harmony import */ var _time__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./time */ "./site/doc/app/date-picker/time.ts");
/* harmony import */ var _disabled_date__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./disabled-date */ "./site/doc/app/date-picker/disabled-date.ts");
/* harmony import */ var _presetted_ranges__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./presetted-ranges */ "./site/doc/app/date-picker/presetted-ranges.ts");
/* harmony import */ var _mode__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./mode */ "./site/doc/app/date-picker/mode.ts");




















class NzDemoDatePickerZhComponent {
    constructor() {
        this.expanded = false;
    }
    goLink(link) {
        if (window) {
            window.location.hash = link;
        }
    }
    expandAllCode() {
        this.expanded = !this.expanded;
        this.codeBoxes.forEach(code => {
            code.nzExpanded = this.expanded;
            code.expandCode(this.expanded);
            code.check();
        });
    }
}
/** @nocollapse */ NzDemoDatePickerZhComponent.ɵfac = function NzDemoDatePickerZhComponent_Factory(t) { return new (t || NzDemoDatePickerZhComponent)(); };
/** @nocollapse */ NzDemoDatePickerZhComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoDatePickerZhComponent, selectors: [["nz-demo-date-picker"]], viewQuery: function NzDemoDatePickerZhComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_share_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_1__["NzCodeBoxComponent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.codeBoxes = _t);
    } }, decls: 950, vars: 40, consts: [[1, "toc-affix", 3, "nzOffsetTop"], ["nzShowInkInFixed", "", 3, "nzAffix", "nzClick"], ["nzHref", "#components-date-picker-demo-basic", "nzTitle", "\u57FA\u672C"], ["nzHref", "#components-date-picker-demo-format", "nzTitle", "\u65E5\u671F\u683C\u5F0F"], ["nzHref", "#components-date-picker-demo-size", "nzTitle", "\u4E09\u79CD\u5927\u5C0F"], ["nzHref", "#components-date-picker-demo-time", "nzTitle", "\u65E5\u671F\u65F6\u95F4\u9009\u62E9"], ["nzHref", "#components-date-picker-demo-disabled", "nzTitle", "\u7981\u7528"], ["nzHref", "#components-date-picker-demo-disabled-date", "nzTitle", "\u4E0D\u53EF\u9009\u62E9\u65E5\u671F\u548C\u65F6\u95F4"], ["nzHref", "#components-date-picker-demo-start-end", "nzTitle", "\u81EA\u5B9A\u4E49\u65E5\u671F\u8303\u56F4\u9009\u62E9"], ["nzHref", "#components-date-picker-demo-presetted-ranges", "nzTitle", "\u9884\u8BBE\u8303\u56F4"], ["nzHref", "#components-date-picker-demo-extra-footer", "nzTitle", "\u989D\u5916\u7684\u9875\u811A"], ["nzHref", "#components-date-picker-demo-mode", "nzTitle", "\u53D7\u63A7\u9762\u677F"], ["nzHref", "#components-date-picker-demo-date-render", "nzTitle", "\u5B9A\u5236\u65E5\u671F\u5355\u5143\u683C"], ["nzHref", "#api", "nzTitle", "API"], [1, "markdown"], [1, "subtitle"], [1, "widget"], ["href", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/date-picker/doc/index.zh-CN.md", "target", "_blank", "rel", "noopener noreferrer", 1, "edit-button"], ["nz-icon", "", "nzType", "edit"], ["id", "\u4F55\u65F6\u4F7F\u7528"], ["onclick", "window.location.hash = '\u4F55\u65F6\u4F7F\u7528'", 1, "anchor"], [1, "language-ts"], [1, "token", "keyword"], [1, "token", "punctuation"], [1, "token", "string"], ["nz-icon", "", "nzType", "appstore", "nz-tooltip", "", "nzTooltipTitle", "\u5C55\u5F00\u5168\u90E8\u4EE3\u7801", 1, "code-box-expand-trigger", 3, "click"], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", 3, "nzXl", "nzSpan"], ["nzTitle", "\u57FA\u672C", "nzSelector", "nz-demo-date-picker-basic", "nzGenerateCommand", "ng g ng-zorro-antd:date-picker-basic <name>", "nzComponentName", "NzDemoDatePickerBasicComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["demo", ""], ["intro", ""], ["nzTitle", "\u4E09\u79CD\u5927\u5C0F", "nzSelector", "nz-demo-date-picker-size", "nzGenerateCommand", "ng g ng-zorro-antd:date-picker-size <name>", "nzComponentName", "NzDemoDatePickerSizeComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u7981\u7528", "nzSelector", "nz-demo-date-picker-disabled", "nzGenerateCommand", "ng g ng-zorro-antd:date-picker-disabled <name>", "nzComponentName", "NzDemoDatePickerDisabledComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u81EA\u5B9A\u4E49\u65E5\u671F\u8303\u56F4\u9009\u62E9", "nzSelector", "nz-demo-date-picker-start-end", "nzGenerateCommand", "ng g ng-zorro-antd:date-picker-start-end <name>", "nzComponentName", "NzDemoDatePickerStartEndComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u989D\u5916\u7684\u9875\u811A", "nzSelector", "nz-demo-date-picker-extra-footer", "nzGenerateCommand", "ng g ng-zorro-antd:date-picker-extra-footer <name>", "nzComponentName", "NzDemoDatePickerExtraFooterComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u5B9A\u5236\u65E5\u671F\u5355\u5143\u683C", "nzSelector", "nz-demo-date-picker-date-render", "nzGenerateCommand", "ng g ng-zorro-antd:date-picker-date-render <name>", "nzComponentName", "NzDemoDatePickerDateRenderComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u65E5\u671F\u683C\u5F0F", "nzSelector", "nz-demo-date-picker-format", "nzGenerateCommand", "ng g ng-zorro-antd:date-picker-format <name>", "nzComponentName", "NzDemoDatePickerFormatComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u65E5\u671F\u65F6\u95F4\u9009\u62E9", "nzSelector", "nz-demo-date-picker-time", "nzGenerateCommand", "ng g ng-zorro-antd:date-picker-time <name>", "nzComponentName", "NzDemoDatePickerTimeComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u4E0D\u53EF\u9009\u62E9\u65E5\u671F\u548C\u65F6\u95F4", "nzSelector", "nz-demo-date-picker-disabled-date", "nzGenerateCommand", "ng g ng-zorro-antd:date-picker-disabled-date <name>", "nzComponentName", "NzDemoDatePickerDisabledDateComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u9884\u8BBE\u8303\u56F4", "nzSelector", "nz-demo-date-picker-presetted-ranges", "nzGenerateCommand", "ng g ng-zorro-antd:date-picker-presetted-ranges <name>", "nzComponentName", "NzDemoDatePickerPresettedRangesComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u53D7\u63A7\u9762\u677F", "nzSelector", "nz-demo-date-picker-mode", "nzGenerateCommand", "ng g ng-zorro-antd:date-picker-mode <name>", "nzComponentName", "NzDemoDatePickerModeComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], [1, "markdown", "api-container"], ["id", "api"], ["onclick", "window.location.hash = 'api'", 1, "anchor"], ["href", "https://angular.io/guide/i18n"], [1, "language-typescript"], [1, "token", "function"], ["href", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date"], ["href", "https://date-fns.org/"], ["id", "\u5171\u540C\u7684-api"], ["onclick", "window.location.hash = '\u5171\u540C\u7684-api'", 1, "anchor"], ["href", "https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json"], ["id", "nz-date-picker"], [1, "api-type-label", "component"], ["onclick", "window.location.hash = 'nz-date-picker'", 1, "anchor"], ["href", "/components/time-picker/zh#api"], ["id", "nz-year-picker"], ["onclick", "window.location.hash = 'nz-year-picker'", 1, "anchor"], ["id", "nz-month-picker"], ["onclick", "window.location.hash = 'nz-month-picker'", 1, "anchor"], ["id", "nz-week-picker"], ["onclick", "window.location.hash = 'nz-week-picker'", 1, "anchor"], ["id", "nz-range-picker"], ["onclick", "window.location.hash = 'nz-range-picker'", 1, "anchor"], ["id", "nzformat\u7279\u522B\u8BF4\u660E"], ["onclick", "window.location.hash = 'nzformat\u7279\u522B\u8BF4\u660E'", 1, "anchor"], ["href", "https://angular.io/api/common/DatePipe"], ["href", "https://date-fns.org/docs/format#description"], ["href", "/docs/i18n/zh#%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8Date-fns%E8%BF%9B%E8%A1%8C%E6%97%A5%E6%9C%9F%E6%A0%BC%E5%BC%8F%E5%8C%96"]], template: function NzDemoDatePickerZhComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-affix", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nz-anchor", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzClick", function NzDemoDatePickerZhComponent_Template_nz_anchor_nzClick_2_listener($event) { return ctx.goLink($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "nz-link", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "nz-link", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "nz-link", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "nz-link", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "nz-link", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "nz-link", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "nz-link", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "nz-link", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "nz-link", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "nz-link", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "nz-link", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "nz-link", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "section", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "DatePicker");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u65E5\u671F\u9009\u62E9\u6846");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "section", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\u8F93\u5165\u6216\u9009\u62E9\u65E5\u671F\u7684\u63A7\u4EF6\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h2", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\u4F55\u65F6\u4F7F\u7528");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\u5F53\u7528\u6237\u9700\u8981\u8F93\u5165\u4E00\u4E2A\u65E5\u671F\uFF0C\u53EF\u4EE5\u70B9\u51FB\u6807\u51C6\u8F93\u5165\u6846\uFF0C\u5F39\u51FA\u65E5\u671F\u9762\u677F\u8FDB\u884C\u9009\u62E9\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "pre", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "import");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "{");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " NzDatePickerModule ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "from");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "'ng-zorro-antd/date-picker'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "\u4EE3\u7801\u6F14\u793A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoDatePickerZhComponent_Template_i_click_54_listener() { return ctx.expandAllCode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "nz-code-box", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "nz-demo-date-picker-basic", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "\u6700\u7B80\u5355\u7684\u7528\u6CD5\uFF0C\u5728\u6D6E\u5C42\u4E2D\u53EF\u4EE5\u9009\u62E9\u6216\u8005\u8F93\u5165\u65E5\u671F\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "nz-code-box", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "nz-demo-date-picker-size", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "\u4E09\u79CD\u5927\u5C0F\u7684\u8F93\u5165\u6846\uFF0C\u82E5\u4E0D\u8BBE\u7F6E\uFF0C\u5219\u4E3A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "default");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "nz-code-box", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "nz-demo-date-picker-disabled", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "\u9009\u62E9\u6846\u7684\u4E0D\u53EF\u7528\u72B6\u6001\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "nz-code-box", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "nz-demo-date-picker-start-end", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "\u5F53 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "RangePicker");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, " \u65E0\u6CD5\u6EE1\u8DB3\u4E1A\u52A1\u9700\u6C42\u65F6\uFF0C\u53EF\u4EE5\u4F7F\u7528\u4E24\u4E2A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "DatePicker");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, " \u5B9E\u73B0\u7C7B\u4F3C\u7684\u529F\u80FD\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "blockquote");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "\u901A\u8FC7\u8BBE\u7F6E ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "nzDisabledDate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, " \u65B9\u6CD5\uFF0C\u6765\u7EA6\u675F\u5F00\u59CB\u548C\u7ED3\u675F\u65E5\u671F\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "\u901A\u8FC7 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "nzOpen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "nzOnOpenChange");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, " \u6765\u4F18\u5316\u4EA4\u4E92\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "nz-code-box", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "nz-demo-date-picker-extra-footer", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "\u5728\u6D6E\u5C42\u4E2D\u52A0\u5165\u989D\u5916\u7684\u9875\u811A\uFF0C\u4EE5\u6EE1\u8DB3\u67D0\u4E9B\u5B9A\u5236\u4FE1\u606F\u7684\u9700\u6C42\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "nz-code-box", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "nz-demo-date-picker-date-render", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "\u4F7F\u7528 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "nzDateRender");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, " \u53EF\u4EE5\u81EA\u5B9A\u4E49\u65E5\u671F\u5355\u5143\u683C\u7684\u5185\u5BB9\u548C\u6837\u5F0F\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "nz-code-box", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "nz-demo-date-picker-format", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "\u4F7F\u7528 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "nzFormat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, " \u5C5E\u6027\uFF0C\u53EF\u4EE5\u81EA\u5B9A\u4E49\u65E5\u671F\u663E\u793A\u683C\u5F0F\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "nz-code-box", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "nz-demo-date-picker-time", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "\u589E\u52A0\u9009\u62E9\u65F6\u95F4\u529F\u80FD\uFF0C\u5F53 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "nzShowTime");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, " \u4E3A\u4E00\u4E2A\u5BF9\u8C61\u65F6\uFF0C\u5176\u5C5E\u6027\u4F1A\u4F20\u9012\u7ED9\u5185\u5EFA\u7684 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "TimePicker");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "nz-code-box", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](134, "nz-demo-date-picker-disabled-date", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "\u53EF\u7528 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "nzDisabledDate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, " \u548C ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "nzDisabledTime");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, " \u5206\u522B\u7981\u6B62\u9009\u62E9\u90E8\u5206\u65E5\u671F\u548C\u65F6\u95F4\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "nz-code-box", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](145, "nz-demo-date-picker-presetted-ranges", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "RangePicker \u53EF\u4EE5\u8BBE\u7F6E\u5E38\u7528\u7684 \u9884\u8BBE\u8303\u56F4 \u63D0\u9AD8\u7528\u6237\u4F53\u9A8C\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "nz-code-box", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](150, "nz-demo-date-picker-mode", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "\u901A\u8FC7\u7EC4\u5408 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "nzMode");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, " \u4E0E ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "nzOnPanelChange");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, " \u63A7\u5236\u8981\u5C55\u793A\u7684\u9762\u677F\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "section", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "h2", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "API");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "a", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "\u6CE8\u610F\uFF1A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "nz-date-picker \u7684\u90E8\u5206 locale \u6765\u81EA\u4E8E Angular \u81EA\u8EAB\u7684");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "\u56FD\u9645\u5316\u652F\u6301");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, "\uFF0C\u9700\u8981\u5728 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, "app.module.ts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, " \u6587\u4EF6\u4E2D \u5F15\u5165\u76F8\u5E94\u7684 Angular \u8BED\u8A00\u5305\u3002\n\u4F8B\u5982\uFF1A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "pre", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "import");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "{");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, " registerLocaleData ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "from");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, "'@angular/common'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, "import");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, " zh ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, "from");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, "'@angular/common/locales/zh'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](205, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, "registerLocaleData");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, "(");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, "zh");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](212, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](214, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](216, "\u65E5\u671F\u7C7B\u7EC4\u4EF6\u5305\u62EC\u4EE5\u4E0B\u56DB\u79CD\u5F62\u5F0F\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](219, "nz-date-picker");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](221, "nz-month-picker");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](223, "nz-range-picker");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](225, "nz-week-picker");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](228, "\u6CE8\u610F\uFF1A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](229, " \u6240\u6709\u8F93\u5165\u8F93\u51FA\u65E5\u671F\u5BF9\u8C61\u5747\u4E3A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](231, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](232, "\uFF0C\u4F60\u53EF\u4EE5\u901A\u8FC7 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "a", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](234, "date-fns");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](235, " \u5DE5\u5177\u5E93\u83B7\u5F97\u4F60\u9700\u8981\u7684\u6570\u636E\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "h3", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](238, "\u5171\u540C\u7684 API");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "a", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](240, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](242, "\u4EE5\u4E0B API \u4E3A nz-date-picker\u3001nz-month-picker\u3001nz-range-picker, nz-week-picker \u5171\u4EAB\u7684 API\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](247, "\u53C2\u6570");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](249, "\u8BF4\u660E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](251, "\u7C7B\u578B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](253, "\u9ED8\u8BA4\u503C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](258, "[nzAllowClear]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](260, "\u662F\u5426\u663E\u793A\u6E05\u9664\u6309\u94AE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](263, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](266, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](270, "[nzAutoFocus]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](272, "\u81EA\u52A8\u83B7\u53D6\u7126\u70B9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](275, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](278, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](282, "[nzDateRender]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](284, "\u81EA\u5B9A\u4E49\u65E5\u671F\u5355\u5143\u683C\u7684\u5185\u5BB9\uFF08month-picker/year-picker\u4E0D\u652F\u6301\uFF09");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](287, "TemplateRef<Date> | string | ((d: Date) => TemplateRef<Date> | string)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](289, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](293, "[nzDisabled]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](295, "\u7981\u7528");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](297, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](298, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](301, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](303, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](304, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](305, "[nzDisabledDate]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](306, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](307, "\u4E0D\u53EF\u9009\u62E9\u7684\u65E5\u671F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](308, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](309, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](310, "(current: Date) => boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](311, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](312, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](313, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](314, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](315, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](316, "[nzLocale]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](317, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](318, "\u56FD\u9645\u5316\u914D\u7F6E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](319, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](320, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](321, "object");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](322, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](323, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](324, "\u9ED8\u8BA4\u914D\u7F6E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](325, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](326, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](327, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](328, "[nzOpen]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](329, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](330, "\u63A7\u5236\u5F39\u5C42\u662F\u5426\u5C55\u5F00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](331, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](332, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](333, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](334, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](335, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](336, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](337, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](338, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](339, "[nzPopupStyle]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](340, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](341, "\u989D\u5916\u7684\u5F39\u51FA\u65E5\u5386\u6837\u5F0F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](342, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](343, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](344, "object");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](345, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](346, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](347, "{}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](348, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](349, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](350, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](351, "[nzDropdownClassName]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](352, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](353, "\u989D\u5916\u7684\u5F39\u51FA\u65E5\u5386 className");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](354, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](355, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](356, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](357, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](358, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](359, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](360, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](361, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](362, "[nzSize]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](363, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](364, "\u8F93\u5165\u6846\u5927\u5C0F\uFF0C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](365, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](366, "large");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](367, " \u9AD8\u5EA6\u4E3A 40px\uFF0C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](368, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](369, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](370, " \u4E3A 24px\uFF0C\u9ED8\u8BA4\u662F 32px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](371, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](372, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](373, "'large' | 'small'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](374, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](375, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](376, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](377, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](378, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](379, "[nzDefaultPickerValue]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](380, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](381, "\u9ED8\u8BA4\u9762\u677F\u65E5\u671F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](382, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](383, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](384, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](385, " | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](386, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](387, "Date[]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](388, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](389, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](390, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](391, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](392, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](393, "(nzOnOpenChange)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](394, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](395, "\u5F39\u51FA\u65E5\u5386\u548C\u5173\u95ED\u65E5\u5386\u7684\u56DE\u8C03");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](396, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](397, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](398, "EventEmitter<boolean>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](399, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](400, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](401, "h3", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](402, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](403, "nz-date-picker");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](404, "label", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](405, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](406, "a", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](407, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](408, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](409, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](410, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](411, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](412, "\u53C2\u6570");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](413, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](414, "\u8BF4\u660E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](415, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](416, "\u7C7B\u578B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](417, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](418, "\u9ED8\u8BA4\u503C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](419, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](420, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](421, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](422, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](423, "[ngModel]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](424, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](425, "\u65E5\u671F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](426, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](427, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](428, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](429, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](430, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](431, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](432, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](433, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](434, "[nzDisabledTime]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](435, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](436, "\u4E0D\u53EF\u9009\u62E9\u7684\u65F6\u95F4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](437, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](438, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](439, "(current: Date) => { nzDisabledHours, nzDisabledMinutes, nzDisabledSeconds }");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](440, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](441, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](442, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](443, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](444, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](445, "[nzFormat]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](446, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](447, "\u5C55\u793A\u7684\u65E5\u671F\u683C\u5F0F\uFF0C\u89C1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](448, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](449, "nzFormat\u7279\u522B\u8BF4\u660E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](450, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](451, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](452, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](453, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](454, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](455, "'yyyy-MM-dd'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](456, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](457, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](458, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](459, "[nzRenderExtraFooter]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](460, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](461, "\u5728\u9762\u677F\u4E2D\u6DFB\u52A0\u989D\u5916\u7684\u9875\u811A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](462, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](463, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](464, "TemplateRef | string | (() => TemplateRef | string)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](465, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](466, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](467, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](468, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](469, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](470, "[nzShowTime]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](471, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](472, "\u589E\u52A0\u65F6\u95F4\u9009\u62E9\u529F\u80FD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](473, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](474, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](475, "object | boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](476, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](477, "a", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](478, "TimePicker Options");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](479, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](480, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](481, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](482, "[nzShowToday]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](483, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](484, "\u662F\u5426\u5C55\u793A\u201C\u4ECA\u5929\u201D\u6309\u94AE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](485, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](486, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](487, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](488, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](489, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](490, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](491, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](492, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](493, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](494, "[nzPlaceHolder]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](495, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](496, "\u8F93\u5165\u6846\u63D0\u793A\u6587\u5B57");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](497, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](498, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](499, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](500, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](501, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](502, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](503, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](504, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](505, "(nzOnOk)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](506, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](507, "\u70B9\u51FB\u786E\u5B9A\u6309\u94AE\u7684\u56DE\u8C03");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](508, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](509, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](510, "EventEmitter<Date>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](511, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](512, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](513, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](514, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](515, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](516, "(ngModelChange)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](517, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](518, "\u65F6\u95F4\u53D1\u751F\u53D8\u5316\u7684\u56DE\u8C03");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](519, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](520, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](521, "EventEmitter<Date>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](522, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](523, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](524, "h3", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](525, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](526, "nz-year-picker");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](527, "label", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](528, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](529, "a", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](530, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](531, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](532, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](533, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](534, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](535, "\u53C2\u6570");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](536, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](537, "\u8BF4\u660E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](538, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](539, "\u7C7B\u578B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](540, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](541, "\u9ED8\u8BA4\u503C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](542, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](543, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](544, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](545, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](546, "[ngModel]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](547, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](548, "\u65E5\u671F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](549, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](550, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](551, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](552, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](553, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](554, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](555, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](556, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](557, "[nzFormat]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](558, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](559, "\u5C55\u793A\u7684\u65E5\u671F\u683C\u5F0F\uFF0C\u89C1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](560, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](561, "nzFormat\u7279\u522B\u8BF4\u660E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](562, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](563, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](564, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](565, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](566, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](567, "'yyyy'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](568, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](569, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](570, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](571, "[nzRenderExtraFooter]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](572, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](573, "\u5728\u9762\u677F\u4E2D\u6DFB\u52A0\u989D\u5916\u7684\u9875\u811A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](574, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](575, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](576, "TemplateRef | string | (() => TemplateRef | string)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](577, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](578, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](579, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](580, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](581, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](582, "[nzPlaceHolder]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](583, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](584, "\u8F93\u5165\u6846\u63D0\u793A\u6587\u5B57");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](585, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](586, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](587, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](588, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](589, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](590, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](591, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](592, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](593, "(ngModelChange)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](594, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](595, "\u65F6\u95F4\u53D1\u751F\u53D8\u5316\u7684\u56DE\u8C03");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](596, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](597, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](598, "EventEmitter<Date>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](599, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](600, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](601, "h3", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](602, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](603, "nz-month-picker");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](604, "label", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](605, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](606, "a", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](607, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](608, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](609, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](610, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](611, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](612, "\u53C2\u6570");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](613, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](614, "\u8BF4\u660E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](615, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](616, "\u7C7B\u578B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](617, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](618, "\u9ED8\u8BA4\u503C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](619, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](620, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](621, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](622, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](623, "[ngModel]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](624, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](625, "\u65E5\u671F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](626, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](627, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](628, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](629, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](630, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](631, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](632, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](633, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](634, "[nzFormat]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](635, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](636, "\u5C55\u793A\u7684\u65E5\u671F\u683C\u5F0F\uFF0C\u89C1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](637, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](638, "nzFormat\u7279\u522B\u8BF4\u660E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](639, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](640, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](641, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](642, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](643, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](644, "'yyyy-MM'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](645, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](646, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](647, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](648, "[nzRenderExtraFooter]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](649, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](650, "\u5728\u9762\u677F\u4E2D\u6DFB\u52A0\u989D\u5916\u7684\u9875\u811A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](651, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](652, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](653, "TemplateRef | string | (() => TemplateRef | string)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](654, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](655, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](656, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](657, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](658, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](659, "[nzPlaceHolder]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](660, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](661, "\u8F93\u5165\u6846\u63D0\u793A\u6587\u5B57");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](662, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](663, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](664, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](665, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](666, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](667, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](668, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](669, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](670, "(ngModelChange)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](671, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](672, "\u65F6\u95F4\u53D1\u751F\u53D8\u5316\u7684\u56DE\u8C03");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](673, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](674, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](675, "EventEmitter<Date>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](676, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](677, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](678, "h3", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](679, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](680, "nz-week-picker");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](681, "label", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](682, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](683, "a", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](684, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](685, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](686, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](687, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](688, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](689, "\u53C2\u6570");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](690, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](691, "\u8BF4\u660E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](692, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](693, "\u7C7B\u578B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](694, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](695, "\u9ED8\u8BA4\u503C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](696, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](697, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](698, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](699, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](700, "[ngModel]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](701, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](702, "\u65E5\u671F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](703, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](704, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](705, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](706, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](707, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](708, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](709, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](710, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](711, "[nzFormat]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](712, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](713, "\u5C55\u793A\u7684\u65E5\u671F\u683C\u5F0F\uFF0C\u89C1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](714, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](715, "nzFormat\u7279\u522B\u8BF4\u660E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](716, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](717, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](718, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](719, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](720, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](721, "'yyyy-ww'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](722, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](723, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](724, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](725, "[nzPlaceHolder]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](726, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](727, "\u8F93\u5165\u6846\u63D0\u793A\u6587\u5B57");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](728, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](729, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](730, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](731, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](732, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](733, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](734, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](735, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](736, "(ngModelChange)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](737, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](738, "\u65F6\u95F4\u53D1\u751F\u53D8\u5316\u7684\u56DE\u8C03");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](739, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](740, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](741, "EventEmitter<Date>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](742, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](743, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](744, "h3", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](745, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](746, "nz-range-picker");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](747, "label", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](748, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](749, "a", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](750, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](751, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](752, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](753, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](754, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](755, "\u53C2\u6570");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](756, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](757, "\u8BF4\u660E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](758, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](759, "\u7C7B\u578B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](760, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](761, "\u9ED8\u8BA4\u503C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](762, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](763, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](764, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](765, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](766, "[ngModel]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](767, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](768, "\u65E5\u671F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](769, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](770, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](771, "Date[]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](772, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](773, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](774, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](775, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](776, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](777, "[nzDisabledTime]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](778, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](779, "\u4E0D\u53EF\u9009\u62E9\u7684\u65F6\u95F4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](780, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](781, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](782, "(current: Date, partial: 'start' | 'end') => { nzDisabledHours, nzDisabledMinutes, nzDisabledSeconds }");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](783, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](784, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](785, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](786, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](787, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](788, "[nzFormat]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](789, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](790, "\u5C55\u793A\u7684\u65E5\u671F\u683C\u5F0F\uFF0C\u89C1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](791, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](792, "nzFormat\u7279\u522B\u8BF4\u660E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](793, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](794, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](795, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](796, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](797, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](798, "'yyyy-MM-dd'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](799, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](800, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](801, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](802, "[nzRanges]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](803, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](804, "\u9884\u8BBE\u65F6\u95F4\u8303\u56F4\u5FEB\u6377\u9009\u62E9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](805, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](806, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](807, "{ [ key: string ]: Date[] } | { [ key: string ]: () => Date[] }");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](808, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](809, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](810, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](811, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](812, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](813, "[nzRenderExtraFooter]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](814, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](815, "\u5728\u9762\u677F\u4E2D\u6DFB\u52A0\u989D\u5916\u7684\u9875\u811A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](816, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](817, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](818, "TemplateRef | string | (() => TemplateRef | string)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](819, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](820, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](821, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](822, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](823, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](824, "[nzShowTime]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](825, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](826, "\u589E\u52A0\u65F6\u95F4\u9009\u62E9\u529F\u80FD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](827, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](828, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](829, "object | boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](830, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](831, "a", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](832, "TimePicker Options");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](833, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](834, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](835, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](836, "[nzPlaceHolder]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](837, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](838, "\u8F93\u5165\u6846\u63D0\u793A\u6587\u5B57");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](839, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](840, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](841, "string[]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](842, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](843, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](844, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](845, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](846, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](847, "[nzSeparator]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](848, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](849, "\u5206\u9694\u7B26");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](850, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](851, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](852, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](853, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](854, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](855, "'~'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](856, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](857, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](858, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](859, "(nzOnOk)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](860, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](861, "\u70B9\u51FB\u786E\u5B9A\u6309\u94AE\u7684\u56DE\u8C03");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](862, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](863, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](864, "EventEmitter<Date[]>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](865, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](866, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](867, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](868, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](869, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](870, "(ngModelChange)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](871, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](872, "\u65F6\u95F4\u53D1\u751F\u53D8\u5316\u7684\u56DE\u8C03");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](873, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](874, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](875, "EventEmitter<Date[]>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](876, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](877, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](878, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](879, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](880, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](881, "(nzOnCalendarChange)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](882, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](883, "\u5F85\u9009\u65E5\u671F\u53D1\u751F\u53D8\u5316\u7684\u56DE\u8C03");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](884, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](885, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](886, "EventEmitter<Date[]>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](887, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](888, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](889, "blockquote");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](890, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](891, "\b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](892, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](893, "nzShowTime");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](894, " \u4E2D\u5F53\u524D\u652F\u6301\u7684 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](895, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](896, "nz-time-picker");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](897, " \u53C2\u6570\u6709\uFF1A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](898, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](899, "nzFormat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](900, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](901, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](902, "nzHourStep");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](903, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](904, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](905, "nzMinuteStep");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](906, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](907, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](908, "nzSecondStep");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](909, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](910, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](911, "nzDisabledHours");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](912, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](913, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](914, "nzDisabledMinutes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](915, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](916, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](917, "nzDisabledSeconds");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](918, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](919, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](920, "nzHideDisabledOptions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](921, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](922, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](923, "nzDefaultOpenValue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](924, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](925, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](926, "nzAddOn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](927, "h3", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](928, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](929, "nzFormat\u7279\u522B\u8BF4\u660E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](930, "a", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](931, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](932, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](933, "\u65E5\u671F\u683C\u5F0F\u5316\u76EE\u524D\u540C\u65F6\u652F\u6301\u4E24\u79CD\u65B9\u5F0F\uFF1A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](934, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](935, "DatePipe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](936, "\uFF08\u9ED8\u8BA4\uFF0C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](937, "a", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](938, "\u8BED\u6CD5\u53C2\u8003");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](939, "\uFF09 \u548C ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](940, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](941, "Date-fns");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](942, "\uFF08");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](943, "a", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](944, "\u8BED\u6CD5\u53C2\u8003");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](945, "\uFF0C\u89C1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](946, "a", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](947, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](948, "\u5982\u4F55\u4F7F\u7528Date-fns\u8FDB\u884C\u65E5\u671F\u683C\u5F0F\u5316");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](949, "\uFF09\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzOffsetTop", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzAffix", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzGutter", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzXl", 12)("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-date-picker-demo-basic")("nzLink", "components-date-picker-demo-basic")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/date-picker/demo/basic.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-date-picker-demo-size")("nzLink", "components-date-picker-demo-size")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/date-picker/demo/size.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-date-picker-demo-disabled")("nzLink", "components-date-picker-demo-disabled")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/date-picker/demo/disabled.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-date-picker-demo-start-end")("nzLink", "components-date-picker-demo-start-end")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/date-picker/demo/start-end.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-date-picker-demo-extra-footer")("nzLink", "components-date-picker-demo-extra-footer")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/date-picker/demo/extra-footer.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-date-picker-demo-date-render")("nzLink", "components-date-picker-demo-date-render")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/date-picker/demo/date-render.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzXl", 12)("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-date-picker-demo-format")("nzLink", "components-date-picker-demo-format")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/date-picker/demo/format.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-date-picker-demo-time")("nzLink", "components-date-picker-demo-time")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/date-picker/demo/time.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-date-picker-demo-disabled-date")("nzLink", "components-date-picker-demo-disabled-date")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/date-picker/demo/disabled-date.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-date-picker-demo-presetted-ranges")("nzLink", "components-date-picker-demo-presetted-ranges")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/date-picker/demo/presetted-ranges.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-date-picker-demo-mode")("nzLink", "components-date-picker-demo-mode")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/date-picker/demo/mode.md");
    } }, directives: [ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_2__["NzAffixComponent"], ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_3__["NzAnchorComponent"], ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_3__["NzAnchorLinkComponent"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__["ɵNzTransitionPatchDirective"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_5__["NzTooltipDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__["NzRowDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__["NzColDirective"], _share_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_1__["NzCodeBoxComponent"], _basic__WEBPACK_IMPORTED_MODULE_7__["NzDemoDatePickerBasicComponent"], _size__WEBPACK_IMPORTED_MODULE_8__["NzDemoDatePickerSizeComponent"], _disabled__WEBPACK_IMPORTED_MODULE_9__["NzDemoDatePickerDisabledComponent"], _start_end__WEBPACK_IMPORTED_MODULE_10__["NzDemoDatePickerStartEndComponent"], _extra_footer__WEBPACK_IMPORTED_MODULE_11__["NzDemoDatePickerExtraFooterComponent"], _date_render__WEBPACK_IMPORTED_MODULE_12__["NzDemoDatePickerDateRenderComponent"], _format__WEBPACK_IMPORTED_MODULE_13__["NzDemoDatePickerFormatComponent"], _time__WEBPACK_IMPORTED_MODULE_14__["NzDemoDatePickerTimeComponent"], _disabled_date__WEBPACK_IMPORTED_MODULE_15__["NzDemoDatePickerDisabledDateComponent"], _presetted_ranges__WEBPACK_IMPORTED_MODULE_16__["NzDemoDatePickerPresettedRangesComponent"], _mode__WEBPACK_IMPORTED_MODULE_17__["NzDemoDatePickerModeComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoDatePickerZhComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-demo-date-picker',
                preserveWhitespaces: false,
                templateUrl: './zh.html'
            }]
    }], null, { codeBoxes: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"],
            args: [_share_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_1__["NzCodeBoxComponent"]]
        }] }); })();


/***/ })

};;
//# sourceMappingURL=date-picker-index-module.js.map