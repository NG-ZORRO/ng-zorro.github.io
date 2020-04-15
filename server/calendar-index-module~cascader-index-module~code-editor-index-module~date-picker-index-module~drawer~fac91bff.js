exports.ids = ["calendar-index-module~cascader-index-module~code-editor-index-module~date-picker-index-module~drawer~fac91bff"];
exports.modules = {

/***/ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-time.js":
/*!******************************************************************!*\
  !*** ./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-time.js ***!
  \******************************************************************/
/*! exports provided: CandyDate, cloneDate, normalizeRangeValue, sortRangeValue, timeUnits */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CandyDate", function() { return CandyDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneDate", function() { return cloneDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeRangeValue", function() { return normalizeRangeValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortRangeValue", function() { return sortRangeValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeUnits", function() { return timeUnits; });
/* harmony import */ var date_fns_addMonths__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns/addMonths */ "./node_modules/date-fns/esm/addMonths/index.js");
/* harmony import */ var date_fns_addYears__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns/addYears */ "./node_modules/date-fns/esm/addYears/index.js");
/* harmony import */ var date_fns_differenceInCalendarDays__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns/differenceInCalendarDays */ "./node_modules/date-fns/esm/differenceInCalendarDays/index.js");
/* harmony import */ var date_fns_differenceInCalendarMonths__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns/differenceInCalendarMonths */ "./node_modules/date-fns/esm/differenceInCalendarMonths/index.js");
/* harmony import */ var date_fns_differenceInCalendarYears__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns/differenceInCalendarYears */ "./node_modules/date-fns/esm/differenceInCalendarYears/index.js");
/* harmony import */ var date_fns_differenceInHours__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns/differenceInHours */ "./node_modules/date-fns/esm/differenceInHours/index.js");
/* harmony import */ var date_fns_differenceInMinutes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns/differenceInMinutes */ "./node_modules/date-fns/esm/differenceInMinutes/index.js");
/* harmony import */ var date_fns_differenceInSeconds__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns/differenceInSeconds */ "./node_modules/date-fns/esm/differenceInSeconds/index.js");
/* harmony import */ var date_fns_isFirstDayOfMonth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns/isFirstDayOfMonth */ "./node_modules/date-fns/esm/isFirstDayOfMonth/index.js");
/* harmony import */ var date_fns_isLastDayOfMonth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! date-fns/isLastDayOfMonth */ "./node_modules/date-fns/esm/isLastDayOfMonth/index.js");
/* harmony import */ var date_fns_isSameDay__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! date-fns/isSameDay */ "./node_modules/date-fns/esm/isSameDay/index.js");
/* harmony import */ var date_fns_isSameHour__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! date-fns/isSameHour */ "./node_modules/date-fns/esm/isSameHour/index.js");
/* harmony import */ var date_fns_isSameMinute__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! date-fns/isSameMinute */ "./node_modules/date-fns/esm/isSameMinute/index.js");
/* harmony import */ var date_fns_isSameMonth__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! date-fns/isSameMonth */ "./node_modules/date-fns/esm/isSameMonth/index.js");
/* harmony import */ var date_fns_isSameSecond__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! date-fns/isSameSecond */ "./node_modules/date-fns/esm/isSameSecond/index.js");
/* harmony import */ var date_fns_isSameYear__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! date-fns/isSameYear */ "./node_modules/date-fns/esm/isSameYear/index.js");
/* harmony import */ var date_fns_isToday__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! date-fns/isToday */ "./node_modules/date-fns/esm/isToday/index.js");
/* harmony import */ var date_fns_isValid__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! date-fns/isValid */ "./node_modules/date-fns/esm/isValid/index.js");
/* harmony import */ var date_fns_setDay__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! date-fns/setDay */ "./node_modules/date-fns/esm/setDay/index.js");
/* harmony import */ var date_fns_setMonth__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! date-fns/setMonth */ "./node_modules/date-fns/esm/setMonth/index.js");
/* harmony import */ var date_fns_setYear__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! date-fns/setYear */ "./node_modules/date-fns/esm/setYear/index.js");
/* harmony import */ var date_fns_startOfMonth__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! date-fns/startOfMonth */ "./node_modules/date-fns/esm/startOfMonth/index.js");
/* harmony import */ var date_fns_startOfWeek__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! date-fns/startOfWeek */ "./node_modules/date-fns/esm/startOfWeek/index.js");
/* harmony import */ var ng_zorro_antd_core_logger__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng-zorro-antd/core/logger */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-logger.js");

























/**
 * @fileoverview added by tsickle
 * Generated from: candy-date.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} rangeValue
 * @return {?}
 */
function sortRangeValue(rangeValue) {
    if (Array.isArray(rangeValue)) {
        const [start, end] = rangeValue;
        return start && end && start.isAfterSecond(end) ? [end, start] : [start, end];
    }
    return rangeValue;
}
/**
 * @param {?} value
 * @return {?}
 */
function normalizeRangeValue(value) {
    const [start, end] = value || [];
    /** @type {?} */
    const newStart = start || new CandyDate();
    /** @type {?} */
    const newEnd = (end === null || end === void 0 ? void 0 : end.isSameMonth(newStart)) ? end.addMonths(1) : end || newStart.addMonths(1);
    return [newStart, newEnd];
}
/**
 * @param {?} value
 * @return {?}
 */
function cloneDate(value) {
    if (Array.isArray(value)) {
        return value.map((/**
         * @param {?} v
         * @return {?}
         */
        v => (v instanceof CandyDate ? v.clone() : null)));
    }
    else {
        return value instanceof CandyDate ? value.clone() : null;
    }
}
/**
 * Wrapping kind APIs for date operating and unify
 * NOTE: every new API return new CandyDate object without side effects to the former Date object
 * NOTE: most APIs are based on local time other than customized locale id (this needs tobe support in future)
 * TODO: support format() against to angular's core API
 */
class CandyDate {
    // locale: string; // Custom specified locale ID
    /**
     * @param {?=} date
     */
    constructor(date) {
        if (date) {
            if (date instanceof Date) {
                this.nativeDate = date;
            }
            else if (typeof date === 'string' || typeof date === 'number') {
                Object(ng_zorro_antd_core_logger__WEBPACK_IMPORTED_MODULE_23__["warn"])('The string type is not recommended for date-picker, use "Date" type');
                this.nativeDate = new Date(date);
            }
            else {
                throw new Error('The input date type is not supported ("Date" is now recommended)');
            }
        }
        else {
            this.nativeDate = new Date();
        }
    }
    // getLocale(): string {
    //   return this.locale;
    // }
    // setLocale(locale: string): CandyDate {
    //   this.locale = locale;
    //   return this;
    // }
    /**
     * @param {?=} options
     * @return {?}
     */
    calendarStart(options) {
        return new CandyDate(Object(date_fns_startOfWeek__WEBPACK_IMPORTED_MODULE_22__["default"])(Object(date_fns_startOfMonth__WEBPACK_IMPORTED_MODULE_21__["default"])(this.nativeDate), options));
    }
    // ---------------------------------------------------------------------
    // | Native shortcuts
    // -----------------------------------------------------------------------------\
    /**
     * @return {?}
     */
    getYear() {
        return this.nativeDate.getFullYear();
    }
    /**
     * @return {?}
     */
    getMonth() {
        return this.nativeDate.getMonth();
    }
    /**
     * @return {?}
     */
    getDay() {
        return this.nativeDate.getDay();
    }
    /**
     * @return {?}
     */
    getTime() {
        return this.nativeDate.getTime();
    }
    /**
     * @return {?}
     */
    getDate() {
        return this.nativeDate.getDate();
    }
    /**
     * @return {?}
     */
    getHours() {
        return this.nativeDate.getHours();
    }
    /**
     * @return {?}
     */
    getMinutes() {
        return this.nativeDate.getMinutes();
    }
    /**
     * @return {?}
     */
    getSeconds() {
        return this.nativeDate.getSeconds();
    }
    /**
     * @return {?}
     */
    getMilliseconds() {
        return this.nativeDate.getMilliseconds();
    }
    // ---------------------------------------------------------------------
    // | New implementing APIs
    // ---------------------------------------------------------------------
    /**
     * @return {?}
     */
    clone() {
        return new CandyDate(new Date(this.nativeDate));
    }
    /**
     * @param {?} hour
     * @param {?} minute
     * @param {?} second
     * @return {?}
     */
    setHms(hour, minute, second) {
        return new CandyDate(this.nativeDate.setHours(hour, minute, second));
    }
    /**
     * @param {?} year
     * @return {?}
     */
    setYear(year) {
        return new CandyDate(Object(date_fns_setYear__WEBPACK_IMPORTED_MODULE_20__["default"])(this.nativeDate, year));
    }
    /**
     * @param {?} amount
     * @return {?}
     */
    addYears(amount) {
        return new CandyDate(Object(date_fns_addYears__WEBPACK_IMPORTED_MODULE_1__["default"])(this.nativeDate, amount));
    }
    // NOTE: month starts from 0
    // NOTE: Don't use the native API for month manipulation as it not restrict the date when it overflows, eg. (new Date('2018-7-31')).setMonth(1) will be date of 2018-3-03 instead of 2018-2-28
    /**
     * @param {?} month
     * @return {?}
     */
    setMonth(month) {
        return new CandyDate(Object(date_fns_setMonth__WEBPACK_IMPORTED_MODULE_19__["default"])(this.nativeDate, month));
    }
    /**
     * @param {?} amount
     * @return {?}
     */
    addMonths(amount) {
        return new CandyDate(Object(date_fns_addMonths__WEBPACK_IMPORTED_MODULE_0__["default"])(this.nativeDate, amount));
    }
    /**
     * @param {?} day
     * @param {?=} options
     * @return {?}
     */
    setDay(day, options) {
        return new CandyDate(Object(date_fns_setDay__WEBPACK_IMPORTED_MODULE_18__["default"])(this.nativeDate, day, options));
    }
    /**
     * @param {?} amount
     * @return {?}
     */
    setDate(amount) {
        /** @type {?} */
        const date = new Date(this.nativeDate);
        date.setDate(amount);
        return new CandyDate(date);
    }
    /**
     * @param {?} amount
     * @return {?}
     */
    addDays(amount) {
        return this.setDate(this.getDate() + amount);
    }
    /**
     * @param {?} date
     * @param {?=} grain
     * @return {?}
     */
    isSame(date, grain = 'day') {
        /** @type {?} */
        let fn;
        switch (grain) {
            case 'year':
                fn = date_fns_isSameYear__WEBPACK_IMPORTED_MODULE_15__["default"];
                break;
            case 'month':
                fn = date_fns_isSameMonth__WEBPACK_IMPORTED_MODULE_13__["default"];
                break;
            case 'day':
                fn = date_fns_isSameDay__WEBPACK_IMPORTED_MODULE_10__["default"];
                break;
            case 'hour':
                fn = date_fns_isSameHour__WEBPACK_IMPORTED_MODULE_11__["default"];
                break;
            case 'minute':
                fn = date_fns_isSameMinute__WEBPACK_IMPORTED_MODULE_12__["default"];
                break;
            case 'second':
                fn = date_fns_isSameSecond__WEBPACK_IMPORTED_MODULE_14__["default"];
                break;
            default:
                fn = date_fns_isSameDay__WEBPACK_IMPORTED_MODULE_10__["default"];
                break;
        }
        return fn(this.nativeDate, this.toNativeDate(date));
    }
    /**
     * @param {?} date
     * @return {?}
     */
    isSameYear(date) {
        return this.isSame(date, 'year');
    }
    /**
     * @param {?} date
     * @return {?}
     */
    isSameMonth(date) {
        return this.isSame(date, 'month');
    }
    /**
     * @param {?} date
     * @return {?}
     */
    isSameDay(date) {
        return this.isSame(date, 'day');
    }
    /**
     * @param {?} date
     * @return {?}
     */
    isSameHour(date) {
        return this.isSame(date, 'hour');
    }
    /**
     * @param {?} date
     * @return {?}
     */
    isSameMinute(date) {
        return this.isSame(date, 'minute');
    }
    /**
     * @param {?} date
     * @return {?}
     */
    isSameSecond(date) {
        return this.isSame(date, 'second');
    }
    /**
     * @param {?} date
     * @param {?=} grain
     * @param {?=} isBefore
     * @return {?}
     */
    compare(date, grain = 'day', isBefore = true) {
        if (date === null) {
            return false;
        }
        /** @type {?} */
        let fn;
        switch (grain) {
            case 'year':
                fn = date_fns_differenceInCalendarYears__WEBPACK_IMPORTED_MODULE_4__["default"];
                break;
            case 'month':
                fn = date_fns_differenceInCalendarMonths__WEBPACK_IMPORTED_MODULE_3__["default"];
                break;
            case 'day':
                fn = date_fns_differenceInCalendarDays__WEBPACK_IMPORTED_MODULE_2__["default"];
                break;
            case 'hour':
                fn = date_fns_differenceInHours__WEBPACK_IMPORTED_MODULE_5__["default"];
                break;
            case 'minute':
                fn = date_fns_differenceInMinutes__WEBPACK_IMPORTED_MODULE_6__["default"];
                break;
            case 'second':
                fn = date_fns_differenceInSeconds__WEBPACK_IMPORTED_MODULE_7__["default"];
                break;
            default:
                fn = date_fns_differenceInCalendarDays__WEBPACK_IMPORTED_MODULE_2__["default"];
                break;
        }
        return isBefore ? fn(this.nativeDate, this.toNativeDate(date)) < 0 : fn(this.nativeDate, this.toNativeDate(date)) > 0;
    }
    /**
     * @param {?} date
     * @return {?}
     */
    isBeforeYear(date) {
        return this.compare(date, 'year');
    }
    /**
     * @param {?} date
     * @return {?}
     */
    isBeforeMonth(date) {
        return this.compare(date, 'month');
    }
    /**
     * @param {?} date
     * @return {?}
     */
    isBeforeDay(date) {
        return this.compare(date, 'day');
    }
    /**
     * @param {?} date
     * @return {?}
     */
    isBeforeHour(date) {
        return this.compare(date, 'hour');
    }
    /**
     * @param {?} date
     * @return {?}
     */
    isBeforeMinute(date) {
        return this.compare(date, 'minute');
    }
    /**
     * @param {?} date
     * @return {?}
     */
    isBeforeSecond(date) {
        return this.compare(date, 'second');
    }
    // TODO: isBefore
    /**
     * @param {?} date
     * @return {?}
     */
    isAfterYear(date) {
        return this.compare(date, 'year', false);
    }
    /**
     * @param {?} date
     * @return {?}
     */
    isAfterMonth(date) {
        return this.compare(date, 'month', false);
    }
    /**
     * @param {?} date
     * @return {?}
     */
    isAfterDay(date) {
        return this.compare(date, 'day', false);
    }
    /**
     * @param {?} date
     * @return {?}
     */
    isAfterHour(date) {
        return this.compare(date, 'hour', false);
    }
    /**
     * @param {?} date
     * @return {?}
     */
    isAfterMinute(date) {
        return this.compare(date, 'minute', false);
    }
    /**
     * @param {?} date
     * @return {?}
     */
    isAfterSecond(date) {
        return this.compare(date, 'second', false);
    }
    // Equal to today accurate to "day"
    /**
     * @return {?}
     */
    isToday() {
        return Object(date_fns_isToday__WEBPACK_IMPORTED_MODULE_16__["default"])(this.nativeDate);
    }
    /**
     * @return {?}
     */
    isValid() {
        return Object(date_fns_isValid__WEBPACK_IMPORTED_MODULE_17__["default"])(this.nativeDate);
    }
    /**
     * @return {?}
     */
    isFirstDayOfMonth() {
        return Object(date_fns_isFirstDayOfMonth__WEBPACK_IMPORTED_MODULE_8__["default"])(this.nativeDate);
    }
    /**
     * @return {?}
     */
    isLastDayOfMonth() {
        return Object(date_fns_isLastDayOfMonth__WEBPACK_IMPORTED_MODULE_9__["default"])(this.nativeDate);
    }
    /**
     * @private
     * @param {?} date
     * @return {?}
     */
    toNativeDate(date) {
        return date instanceof CandyDate ? date.nativeDate : date;
    }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: time.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
/** @type {?} */
const timeUnits = [
    ['Y', 1000 * 60 * 60 * 24 * 365],
    ['M', 1000 * 60 * 60 * 24 * 30],
    ['D', 1000 * 60 * 60 * 24],
    ['H', 1000 * 60 * 60],
    ['m', 1000 * 60],
    ['s', 1000],
    ['S', 1] // million seconds
];

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ng-zorro-antd-core-time.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ng-zorro-antd-core-time.js.map

/***/ })

};;
//# sourceMappingURL=calendar-index-module~cascader-index-module~code-editor-index-module~date-picker-index-module~drawer~fac91bff.js.map