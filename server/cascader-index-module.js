exports.ids = ["cascader-index-module"];
exports.modules = {

/***/ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-highlight.js":
/*!***********************************************************************!*\
  !*** ./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-highlight.js ***!
  \***********************************************************************/
/*! exports provided: NzHighlightModule, NzHighlightPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzHighlightModule", function() { return NzHighlightModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzHighlightPipe", function() { return NzHighlightPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



/**
 * @fileoverview added by tsickle
 * Generated from: highlight.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Regular Expressions for parsing tags and attributes
/** @type {?} */

const SURROGATE_PAIR_REGEXP = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
// ! to ~ is the ASCII range.
/** @type {?} */
const NON_ALPHANUMERIC_REGEXP = /([^\#-~ |!])/g;
/**
 * Escapes all potentially dangerous characters, so that the
 * resulting string can be safely inserted into attribute or
 * element text.
 * @param {?} value
 * @return {?}
 */
function encodeEntities(value) {
    return value
        .replace(/&/g, '&amp;')
        .replace(SURROGATE_PAIR_REGEXP, (/**
     * @param {?} match
     * @return {?}
     */
    (match) => {
        /** @type {?} */
        const hi = match.charCodeAt(0);
        /** @type {?} */
        const low = match.charCodeAt(1);
        return `&#${(hi - 0xd800) * 0x400 + (low - 0xdc00) + 0x10000};`;
    }))
        .replace(NON_ALPHANUMERIC_REGEXP, (/**
     * @param {?} match
     * @return {?}
     */
    (match) => `&#${match.charCodeAt(0)};`))
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
}
class NzHighlightPipe {
    constructor() {
        this.UNIQUE_WRAPPERS = ['##==-open_tag-==##', '##==-close_tag-==##'];
    }
    /**
     * @param {?} value
     * @param {?} highlightValue
     * @param {?=} flags
     * @param {?=} klass
     * @return {?}
     */
    transform(value, highlightValue, flags, klass) {
        if (!highlightValue) {
            return value;
        }
        // Escapes regex keyword to interpret these characters literally
        /** @type {?} */
        const searchValue = new RegExp(highlightValue.replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$&'), flags);
        /** @type {?} */
        const wrapValue = value.replace(searchValue, `${this.UNIQUE_WRAPPERS[0]}$&${this.UNIQUE_WRAPPERS[1]}`);
        return encodeEntities(wrapValue)
            .replace(new RegExp(this.UNIQUE_WRAPPERS[0], 'g'), klass ? `<span class="${klass}">` : '<span>')
            .replace(new RegExp(this.UNIQUE_WRAPPERS[1], 'g'), '</span>');
    }
}
NzHighlightPipe.ɵfac = function NzHighlightPipe_Factory(t) { return new (t || NzHighlightPipe)(); };
NzHighlightPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "nzHighlight", type: NzHighlightPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzHighlightPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'nzHighlight',
                pure: true
            }]
    }], function () { return []; }, null); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: highlight.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzHighlightModule {
}
NzHighlightModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NzHighlightModule });
NzHighlightModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NzHighlightModule_Factory(t) { return new (t || NzHighlightModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NzHighlightModule, { declarations: function () { return [NzHighlightPipe]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]; }, exports: function () { return [NzHighlightPipe]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzHighlightModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                exports: [NzHighlightPipe],
                declarations: [NzHighlightPipe]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ng-zorro-antd-core-highlight.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ng-zorro-antd-core-highlight.js.map

/***/ }),

/***/ "./site/doc/app/cascader/basic.ts":
/*!****************************************!*\
  !*** ./site/doc/app/cascader/basic.ts ***!
  \****************************************/
/*! exports provided: NzDemoCascaderBasicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoCascaderBasicComponent", function() { return NzDemoCascaderBasicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ng_zorro_antd_cascader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/cascader */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-cascader.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
// tslint:disable:no-any




const options = [
    {
        value: 'zhejiang',
        label: 'Zhejiang',
        children: [
            {
                value: 'hangzhou',
                label: 'Hangzhou',
                children: [
                    {
                        value: 'xihu',
                        label: 'West Lake',
                        isLeaf: true
                    }
                ]
            },
            {
                value: 'ningbo',
                label: 'Ningbo',
                isLeaf: true
            }
        ]
    },
    {
        value: 'jiangsu',
        label: 'Jiangsu',
        children: [
            {
                value: 'nanjing',
                label: 'Nanjing',
                children: [
                    {
                        value: 'zhonghuamen',
                        label: 'Zhong Hua Men',
                        isLeaf: true
                    }
                ]
            }
        ]
    }
];
const otherOptions = [
    {
        value: 'fujian',
        label: 'Fujian',
        children: [
            {
                value: 'xiamen',
                label: 'Xiamen',
                children: [
                    {
                        value: 'Kulangsu',
                        label: 'Kulangsu',
                        isLeaf: true
                    }
                ]
            }
        ]
    },
    {
        value: 'guangxi',
        label: 'Guangxi',
        children: [
            {
                value: 'guilin',
                label: 'Guilin',
                children: [
                    {
                        value: 'Lijiang',
                        label: 'Li Jiang River',
                        isLeaf: true
                    }
                ]
            }
        ]
    }
];
class NzDemoCascaderBasicComponent {
    constructor() {
        this.nzOptions = null;
        this.values = null;
    }
    ngOnInit() {
        setTimeout(() => {
            this.nzOptions = options;
        }, 100);
    }
    changeNzOptions() {
        if (this.nzOptions === options) {
            this.nzOptions = otherOptions;
        }
        else {
            this.nzOptions = options;
        }
    }
    onChanges(values) {
        console.log(values, this.values);
    }
}
/** @nocollapse */ NzDemoCascaderBasicComponent.ɵfac = function NzDemoCascaderBasicComponent_Factory(t) { return new (t || NzDemoCascaderBasicComponent)(); };
/** @nocollapse */ NzDemoCascaderBasicComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoCascaderBasicComponent, selectors: [["nz-demo-cascader-basic"]], decls: 4, vars: 2, consts: [[3, "nzOptions", "ngModel", "ngModelChange"], ["href", "javascript:;", 1, "change-options", 3, "click"]], template: function NzDemoCascaderBasicComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-cascader", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoCascaderBasicComponent_Template_nz_cascader_ngModelChange_0_listener($event) { return ctx.values = $event; })("ngModelChange", function NzDemoCascaderBasicComponent_Template_nz_cascader_ngModelChange_0_listener($event) { return ctx.onChanges($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoCascaderBasicComponent_Template_a_click_2_listener() { return ctx.changeNzOptions(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Change Options ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzOptions", ctx.nzOptions)("ngModel", ctx.values);
    } }, directives: [ng_zorro_antd_cascader__WEBPACK_IMPORTED_MODULE_1__["NzCascaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]], styles: [".change-options[_ngcontent-%COMP%] {\n        display: inline-block;\n        font-size: 12px;\n        margin-top: 8px;\n      }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoCascaderBasicComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-demo-cascader-basic',
                template: `
    <nz-cascader [nzOptions]="nzOptions" [(ngModel)]="values" (ngModelChange)="onChanges($event)"></nz-cascader>
    &nbsp;
    <a href="javascript:;" (click)="changeNzOptions()" class="change-options">
      Change Options
    </a>
  `,
                styles: [
                    `
      .change-options {
        display: inline-block;
        font-size: 12px;
        margin-top: 8px;
      }
    `
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./site/doc/app/cascader/change-on-function.ts":
/*!*****************************************************!*\
  !*** ./site/doc/app/cascader/change-on-function.ts ***!
  \*****************************************************/
/*! exports provided: NzDemoCascaderChangeOnFunctionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoCascaderChangeOnFunctionComponent", function() { return NzDemoCascaderChangeOnFunctionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ng_zorro_antd_cascader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/cascader */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-cascader.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");




const options = [
    {
        value: 'zhejiang',
        label: 'Zhejiang',
        children: [
            {
                value: 'hangzhou',
                label: 'Hangzhou',
                children: [
                    {
                        value: 'xihu',
                        label: 'West Lake',
                        isLeaf: true
                    }
                ]
            },
            {
                value: 'ningbo',
                label: 'Ningbo',
                children: [
                    {
                        value: 'dongqianlake',
                        label: 'Dongqian Lake',
                        isLeaf: true
                    }
                ]
            }
        ]
    },
    {
        value: 'jiangsu',
        label: 'Jiangsu',
        children: [
            {
                value: 'nanjing',
                label: 'Nanjing',
                children: [
                    {
                        value: 'zhonghuamen',
                        label: 'Zhong Hua Men',
                        isLeaf: true
                    }
                ]
            }
        ]
    }
];
class NzDemoCascaderChangeOnFunctionComponent {
    constructor() {
        this.nzOptions = options;
        this.values = null;
    }
    onChanges(values) {
        console.log(values, this.values);
    }
    validate(option, _index) {
        const value = option.value;
        return ['hangzhou', 'xihu', 'nanjing', 'zhonghuamen'].indexOf(value) >= 0;
    }
}
/** @nocollapse */ NzDemoCascaderChangeOnFunctionComponent.ɵfac = function NzDemoCascaderChangeOnFunctionComponent_Factory(t) { return new (t || NzDemoCascaderChangeOnFunctionComponent)(); };
/** @nocollapse */ NzDemoCascaderChangeOnFunctionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoCascaderChangeOnFunctionComponent, selectors: [["nz-demo-cascader-change-on-function"]], decls: 1, vars: 3, consts: [[3, "nzChangeOn", "nzOptions", "ngModel", "ngModelChange"]], template: function NzDemoCascaderChangeOnFunctionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-cascader", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoCascaderChangeOnFunctionComponent_Template_nz_cascader_ngModelChange_0_listener($event) { return ctx.values = $event; })("ngModelChange", function NzDemoCascaderChangeOnFunctionComponent_Template_nz_cascader_ngModelChange_0_listener($event) { return ctx.onChanges($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzChangeOn", ctx.validate)("nzOptions", ctx.nzOptions)("ngModel", ctx.values);
    } }, directives: [ng_zorro_antd_cascader__WEBPACK_IMPORTED_MODULE_1__["NzCascaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoCascaderChangeOnFunctionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-demo-cascader-change-on-function',
                template: `
    <nz-cascader [nzChangeOn]="validate" [nzOptions]="nzOptions" [(ngModel)]="values" (ngModelChange)="onChanges($event)"> </nz-cascader>
  `
            }]
    }], null, null); })();


/***/ }),

/***/ "./site/doc/app/cascader/change-on-select.ts":
/*!***************************************************!*\
  !*** ./site/doc/app/cascader/change-on-select.ts ***!
  \***************************************************/
/*! exports provided: NzDemoCascaderChangeOnSelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoCascaderChangeOnSelectComponent", function() { return NzDemoCascaderChangeOnSelectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ng_zorro_antd_cascader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/cascader */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-cascader.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");




const options = [
    {
        value: 'zhejiang',
        label: 'Zhejiang',
        children: [
            {
                value: 'hangzhou',
                label: 'Hangzhou',
                children: [
                    {
                        value: 'xihu',
                        label: 'West Lake',
                        isLeaf: true
                    }
                ]
            },
            {
                value: 'ningbo',
                label: 'Ningbo',
                isLeaf: true
            }
        ]
    },
    {
        value: 'jiangsu',
        label: 'Jiangsu',
        children: [
            {
                value: 'nanjing',
                label: 'Nanjing',
                children: [
                    {
                        value: 'zhonghuamen',
                        label: 'Zhong Hua Men',
                        isLeaf: true
                    }
                ]
            }
        ]
    }
];
class NzDemoCascaderChangeOnSelectComponent {
    constructor() {
        this.nzOptions = options;
        this.values = null;
    }
    onChanges(values) {
        console.log(values, this.values);
    }
}
/** @nocollapse */ NzDemoCascaderChangeOnSelectComponent.ɵfac = function NzDemoCascaderChangeOnSelectComponent_Factory(t) { return new (t || NzDemoCascaderChangeOnSelectComponent)(); };
/** @nocollapse */ NzDemoCascaderChangeOnSelectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoCascaderChangeOnSelectComponent, selectors: [["nz-demo-cascader-change-on-select"]], decls: 1, vars: 2, consts: [["nzChangeOnSelect", "", 3, "nzOptions", "ngModel", "ngModelChange"]], template: function NzDemoCascaderChangeOnSelectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-cascader", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoCascaderChangeOnSelectComponent_Template_nz_cascader_ngModelChange_0_listener($event) { return ctx.values = $event; })("ngModelChange", function NzDemoCascaderChangeOnSelectComponent_Template_nz_cascader_ngModelChange_0_listener($event) { return ctx.onChanges($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzOptions", ctx.nzOptions)("ngModel", ctx.values);
    } }, directives: [ng_zorro_antd_cascader__WEBPACK_IMPORTED_MODULE_1__["NzCascaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoCascaderChangeOnSelectComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-demo-cascader-change-on-select',
                template: `
    <nz-cascader nzChangeOnSelect [nzOptions]="nzOptions" [(ngModel)]="values" (ngModelChange)="onChanges($event)"> </nz-cascader>
  `
            }]
    }], null, null); })();


/***/ }),

/***/ "./site/doc/app/cascader/custom-field-names.ts":
/*!*****************************************************!*\
  !*** ./site/doc/app/cascader/custom-field-names.ts ***!
  \*****************************************************/
/*! exports provided: NzDemoCascaderCustomFieldNamesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoCascaderCustomFieldNamesComponent", function() { return NzDemoCascaderCustomFieldNamesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ng_zorro_antd_cascader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/cascader */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-cascader.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");




const options = [
    {
        code: 'zhejiang',
        name: 'Zhejiang',
        children: [
            {
                code: 'hangzhou',
                name: 'Hangzhou',
                children: [
                    {
                        code: 'xihu',
                        name: 'West Lake',
                        isLeaf: true
                    }
                ]
            },
            {
                code: 'ningbo',
                name: 'Ningbo',
                children: [
                    {
                        code: 'dongqianlake',
                        name: 'Dongqian Lake',
                        isLeaf: true
                    }
                ]
            }
        ]
    },
    {
        code: 'jiangsu',
        name: 'Jiangsu',
        children: [
            {
                code: 'nanjing',
                name: 'Nanjing',
                children: [
                    {
                        code: 'zhonghuamen',
                        name: 'Zhong Hua Men',
                        isLeaf: true
                    }
                ]
            }
        ]
    }
];
class NzDemoCascaderCustomFieldNamesComponent {
    constructor() {
        this.nzOptions = options;
        this.values = null;
    }
    onChanges(values) {
        console.log(values, this.values);
    }
    validate(option, _index) {
        const value = option.value;
        return ['hangzhou', 'xihu', 'nanjing', 'zhonghuamen'].indexOf(value) >= 0;
    }
}
/** @nocollapse */ NzDemoCascaderCustomFieldNamesComponent.ɵfac = function NzDemoCascaderCustomFieldNamesComponent_Factory(t) { return new (t || NzDemoCascaderCustomFieldNamesComponent)(); };
/** @nocollapse */ NzDemoCascaderCustomFieldNamesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoCascaderCustomFieldNamesComponent, selectors: [["nz-demo-cascader-custom-field-names"]], decls: 1, vars: 6, consts: [[3, "nzChangeOn", "nzOptions", "nzLabelProperty", "nzValueProperty", "nzShowSearch", "ngModel", "ngModelChange"]], template: function NzDemoCascaderCustomFieldNamesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-cascader", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoCascaderCustomFieldNamesComponent_Template_nz_cascader_ngModelChange_0_listener($event) { return ctx.values = $event; })("ngModelChange", function NzDemoCascaderCustomFieldNamesComponent_Template_nz_cascader_ngModelChange_0_listener($event) { return ctx.onChanges($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzChangeOn", ctx.validate)("nzOptions", ctx.nzOptions)("nzLabelProperty", "name")("nzValueProperty", "code")("nzShowSearch", true)("ngModel", ctx.values);
    } }, directives: [ng_zorro_antd_cascader__WEBPACK_IMPORTED_MODULE_1__["NzCascaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoCascaderCustomFieldNamesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-demo-cascader-custom-field-names',
                template: `
    <nz-cascader
      [nzChangeOn]="validate"
      [nzOptions]="nzOptions"
      [nzLabelProperty]="'name'"
      [nzValueProperty]="'code'"
      [nzShowSearch]="true"
      [(ngModel)]="values"
      (ngModelChange)="onChanges($event)"
    >
    </nz-cascader>
  `
            }]
    }], null, null); })();


/***/ }),

/***/ "./site/doc/app/cascader/custom-render.ts":
/*!************************************************!*\
  !*** ./site/doc/app/cascader/custom-render.ts ***!
  \************************************************/
/*! exports provided: NzDemoCascaderCustomRenderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoCascaderCustomRenderComponent", function() { return NzDemoCascaderCustomRenderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ng_zorro_antd_cascader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/cascader */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-cascader.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function NzDemoCascaderCustomRenderComponent_ng_template_1_ng_container_0_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const label_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", label_r5, " / ");
} }
function NzDemoCascaderCustomRenderComponent_ng_template_1_ng_container_0_span_2_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoCascaderCustomRenderComponent_ng_template_1_ng_container_0_span_2_Template_a_click_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const label_r5 = ctx_r13.$implicit; const i_r6 = ctx_r13.index; const selectedOptions_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().selectedOptions; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.handleAreaClick($event, label_r5, selectedOptions_r3[i_r6]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const label_r5 = ctx_r15.$implicit;
    const i_r6 = ctx_r15.index;
    const selectedOptions_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().selectedOptions;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", label_r5, " (");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", selectedOptions_r3[i_r6].code, " ");
} }
function NzDemoCascaderCustomRenderComponent_ng_template_1_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzDemoCascaderCustomRenderComponent_ng_template_1_ng_container_0_span_1_Template, 2, 1, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzDemoCascaderCustomRenderComponent_ng_template_1_ng_container_0_span_2_Template, 5, 2, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const isLast_r7 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !isLast_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", isLast_r7);
} }
function NzDemoCascaderCustomRenderComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzDemoCascaderCustomRenderComponent_ng_template_1_ng_container_0_Template, 3, 2, "ng-container", 2);
} if (rf & 2) {
    const labels_r2 = ctx.labels;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", labels_r2);
} }
const options = [
    {
        value: 'zhejiang',
        label: 'Zhejiang',
        children: [
            {
                value: 'hangzhou',
                label: 'Hangzhou',
                children: [
                    {
                        value: 'xihu',
                        label: 'West Lake',
                        code: 752100,
                        isLeaf: true
                    }
                ]
            },
            {
                value: 'ningbo',
                label: 'Ningbo',
                code: '315000',
                isLeaf: true
            }
        ]
    },
    {
        value: 'jiangsu',
        label: 'Jiangsu',
        children: [
            {
                value: 'nanjing',
                label: 'Nanjing',
                children: [
                    {
                        value: 'zhonghuamen',
                        label: 'Zhong Hua Men',
                        code: 453400,
                        isLeaf: true
                    }
                ]
            }
        ]
    }
];
class NzDemoCascaderCustomRenderComponent {
    constructor() {
        this.nzOptions = options;
        this.values = null;
    }
    onChanges(values) {
        console.log(values, this.values);
    }
    handleAreaClick(e, label, option) {
        e.preventDefault();
        e.stopPropagation();
        console.log('clicked "', label, '"', option);
    }
}
/** @nocollapse */ NzDemoCascaderCustomRenderComponent.ɵfac = function NzDemoCascaderCustomRenderComponent_Factory(t) { return new (t || NzDemoCascaderCustomRenderComponent)(); };
/** @nocollapse */ NzDemoCascaderCustomRenderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoCascaderCustomRenderComponent, selectors: [["nz-demo-cascader-custom-render"]], decls: 3, vars: 3, consts: [[3, "nzLabelRender", "nzOptions", "ngModel", "ngModelChange"], ["renderTpl", ""], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["href", "javascript:;", 3, "click"]], template: function NzDemoCascaderCustomRenderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-cascader", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoCascaderCustomRenderComponent_Template_nz_cascader_ngModelChange_0_listener($event) { return ctx.values = $event; })("ngModelChange", function NzDemoCascaderCustomRenderComponent_Template_nz_cascader_ngModelChange_0_listener($event) { return ctx.onChanges($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzDemoCascaderCustomRenderComponent_ng_template_1_Template, 1, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzLabelRender", _r0)("nzOptions", ctx.nzOptions)("ngModel", ctx.values);
    } }, directives: [ng_zorro_antd_cascader__WEBPACK_IMPORTED_MODULE_1__["NzCascaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoCascaderCustomRenderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-demo-cascader-custom-render',
                template: `
    <nz-cascader [nzLabelRender]="renderTpl" [nzOptions]="nzOptions" [(ngModel)]="values" (ngModelChange)="onChanges($event)">
    </nz-cascader>

    <ng-template #renderTpl let-labels="labels" let-selectedOptions="selectedOptions">
      <ng-container *ngFor="let label of labels; let i = index; let isLast = last">
        <span *ngIf="!isLast">{{ label }} / </span>
        <span *ngIf="isLast">
          {{ label }} (<a href="javascript:;" (click)="handleAreaClick($event, label, selectedOptions[i])">
            {{ selectedOptions[i].code }} </a
          >)
        </span>
      </ng-container>
    </ng-template>
  `
            }]
    }], null, null); })();


/***/ }),

/***/ "./site/doc/app/cascader/custom-template.ts":
/*!**************************************************!*\
  !*** ./site/doc/app/cascader/custom-template.ts ***!
  \**************************************************/
/*! exports provided: NzDemoCascaderCustomTemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoCascaderCustomTemplateComponent", function() { return NzDemoCascaderCustomTemplateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ng_zorro_antd_cascader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/cascader */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-cascader.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
// tslint:disable:no-any




function NzDemoCascaderCustomTemplateComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const option_r2 = ctx.$implicit;
    const index_r3 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", index_r3 + 1, ". ", option_r2.label, " ");
} }
const options = [
    {
        label: 'Ant Design',
        value: 'antd',
        children: [
            {
                label: 'ng-zorro-antd',
                value: 'ng-zorro-antd',
                isLeaf: true
            }
        ]
    },
    {
        label: 'Angular',
        value: 'angular',
        children: [
            {
                label: 'CDK',
                value: 'cdk',
                isLeaf: true
            }
        ]
    }
];
class NzDemoCascaderCustomTemplateComponent {
    constructor() {
        this.nzOptions = options;
        this.values = null;
    }
    onChanges(values) {
        console.log(values, this.values);
    }
}
/** @nocollapse */ NzDemoCascaderCustomTemplateComponent.ɵfac = function NzDemoCascaderCustomTemplateComponent_Factory(t) { return new (t || NzDemoCascaderCustomTemplateComponent)(); };
/** @nocollapse */ NzDemoCascaderCustomTemplateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoCascaderCustomTemplateComponent, selectors: [["nz-demo-cascader-custom-template"]], decls: 3, vars: 3, consts: [[3, "nzOptionRender", "nzOptions", "ngModel", "ngModelChange"], ["renderTpl", ""]], template: function NzDemoCascaderCustomTemplateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-cascader", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoCascaderCustomTemplateComponent_Template_nz_cascader_ngModelChange_0_listener($event) { return ctx.values = $event; })("ngModelChange", function NzDemoCascaderCustomTemplateComponent_Template_nz_cascader_ngModelChange_0_listener($event) { return ctx.onChanges($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzDemoCascaderCustomTemplateComponent_ng_template_1_Template, 1, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzOptionRender", _r0)("nzOptions", ctx.nzOptions)("ngModel", ctx.values);
    } }, directives: [ng_zorro_antd_cascader__WEBPACK_IMPORTED_MODULE_1__["NzCascaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoCascaderCustomTemplateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-demo-cascader-custom-template',
                template: `
    <nz-cascader [nzOptionRender]="renderTpl" [nzOptions]="nzOptions" [(ngModel)]="values" (ngModelChange)="onChanges($event)">
    </nz-cascader>
    <ng-template #renderTpl let-option let-index="index"> {{ index + 1 }}. {{ option.label }} </ng-template>
  `
            }]
    }], null, null); })();


/***/ }),

/***/ "./site/doc/app/cascader/default-value-and-asyn-options.ts":
/*!*****************************************************************!*\
  !*** ./site/doc/app/cascader/default-value-and-asyn-options.ts ***!
  \*****************************************************************/
/*! exports provided: NzDemoCascaderDefaultValueAndAsynOptionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoCascaderDefaultValueAndAsynOptionsComponent", function() { return NzDemoCascaderDefaultValueAndAsynOptionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ng_zorro_antd_cascader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/cascader */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-cascader.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");




const options = [
    {
        value: 'zhejiang',
        label: 'Zhejiang',
        children: [
            {
                value: 'hangzhou',
                label: 'Hangzhou',
                children: [
                    {
                        value: 'xihu',
                        label: 'West Lake',
                        isLeaf: true
                    }
                ]
            },
            {
                value: 'ningbo',
                label: 'Ningbo',
                isLeaf: true
            }
        ]
    },
    {
        value: 'jiangsu',
        label: 'Jiangsu',
        children: [
            {
                value: 'nanjing',
                label: 'Nanjing',
                children: [
                    {
                        value: 'zhonghuamen',
                        label: 'Zhong Hua Men',
                        isLeaf: true
                    }
                ]
            }
        ]
    }
];
class NzDemoCascaderDefaultValueAndAsynOptionsComponent {
    constructor() {
        this.nzOptions = null;
        this.values = ['zhejiang', 'hangzhou', 'xihu'];
    }
    onChanges(values) {
        console.log(values, this.values);
    }
    ngOnInit() {
        setTimeout(() => {
            this.nzOptions = options;
        }, 500);
    }
}
/** @nocollapse */ NzDemoCascaderDefaultValueAndAsynOptionsComponent.ɵfac = function NzDemoCascaderDefaultValueAndAsynOptionsComponent_Factory(t) { return new (t || NzDemoCascaderDefaultValueAndAsynOptionsComponent)(); };
/** @nocollapse */ NzDemoCascaderDefaultValueAndAsynOptionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoCascaderDefaultValueAndAsynOptionsComponent, selectors: [["nz-demo-cascader-default-value-and-asyn-options"]], decls: 1, vars: 2, consts: [[3, "ngModel", "nzOptions", "ngModelChange"]], template: function NzDemoCascaderDefaultValueAndAsynOptionsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-cascader", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoCascaderDefaultValueAndAsynOptionsComponent_Template_nz_cascader_ngModelChange_0_listener($event) { return ctx.values = $event; })("ngModelChange", function NzDemoCascaderDefaultValueAndAsynOptionsComponent_Template_nz_cascader_ngModelChange_0_listener($event) { return ctx.onChanges($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.values)("nzOptions", ctx.nzOptions);
    } }, directives: [ng_zorro_antd_cascader__WEBPACK_IMPORTED_MODULE_1__["NzCascaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoCascaderDefaultValueAndAsynOptionsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-demo-cascader-default-value-and-asyn-options',
                template: `
    <nz-cascader [(ngModel)]="values" [nzOptions]="nzOptions" (ngModelChange)="onChanges($event)"> </nz-cascader>
  `
            }]
    }], null, null); })();


/***/ }),

/***/ "./site/doc/app/cascader/default-value-and-lazyload.ts":
/*!*************************************************************!*\
  !*** ./site/doc/app/cascader/default-value-and-lazyload.ts ***!
  \*************************************************************/
/*! exports provided: NzDemoCascaderDefaultValueAndLazyloadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoCascaderDefaultValueAndLazyloadComponent", function() { return NzDemoCascaderDefaultValueAndLazyloadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ng_zorro_antd_cascader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/cascader */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-cascader.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");




const provinces = [
    {
        value: 'zhejiang',
        label: 'Zhejiang'
    },
    {
        value: 'jiangsu',
        label: 'Jiangsu'
    }
];
const cities = {
    zhejiang: [
        {
            value: 'hangzhou',
            label: 'Hangzhou'
        },
        {
            value: 'ningbo',
            label: 'Ningbo',
            isLeaf: true
        }
    ],
    jiangsu: [
        {
            value: 'nanjing',
            label: 'Nanjing'
        }
    ]
};
const scenicspots = {
    hangzhou: [
        {
            value: 'xihu',
            label: 'West Lake',
            isLeaf: true
        }
    ],
    nanjing: [
        {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
            isLeaf: true
        }
    ]
};
class NzDemoCascaderDefaultValueAndLazyloadComponent {
    constructor() {
        this.values = ['zhejiang', 'hangzhou', 'xihu'];
    }
    onChanges(values) {
        console.log(values, this.values);
    }
    /** load data async execute by `nzLoadData` method */
    loadData(node, index) {
        return new Promise(resolve => {
            setTimeout(() => {
                if (index < 0) {
                    // if index less than 0 it is root node
                    node.children = provinces;
                }
                else if (index === 0) {
                    node.children = cities[node.value];
                }
                else {
                    node.children = scenicspots[node.value];
                }
                resolve();
            }, 1000);
        });
    }
}
/** @nocollapse */ NzDemoCascaderDefaultValueAndLazyloadComponent.ɵfac = function NzDemoCascaderDefaultValueAndLazyloadComponent_Factory(t) { return new (t || NzDemoCascaderDefaultValueAndLazyloadComponent)(); };
/** @nocollapse */ NzDemoCascaderDefaultValueAndLazyloadComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoCascaderDefaultValueAndLazyloadComponent, selectors: [["nz-demo-cascader-default-value-and-lazyload"]], decls: 1, vars: 2, consts: [[3, "ngModel", "nzLoadData", "ngModelChange"]], template: function NzDemoCascaderDefaultValueAndLazyloadComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-cascader", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoCascaderDefaultValueAndLazyloadComponent_Template_nz_cascader_ngModelChange_0_listener($event) { return ctx.values = $event; })("ngModelChange", function NzDemoCascaderDefaultValueAndLazyloadComponent_Template_nz_cascader_ngModelChange_0_listener($event) { return ctx.onChanges($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.values)("nzLoadData", ctx.loadData);
    } }, directives: [ng_zorro_antd_cascader__WEBPACK_IMPORTED_MODULE_1__["NzCascaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoCascaderDefaultValueAndLazyloadComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-demo-cascader-default-value-and-lazyload',
                template: `
    <nz-cascader [(ngModel)]="values" [nzLoadData]="loadData" (ngModelChange)="onChanges($event)"> </nz-cascader>
  `
            }]
    }], null, null); })();


/***/ }),

/***/ "./site/doc/app/cascader/default-value.ts":
/*!************************************************!*\
  !*** ./site/doc/app/cascader/default-value.ts ***!
  \************************************************/
/*! exports provided: NzDemoCascaderDefaultValueComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoCascaderDefaultValueComponent", function() { return NzDemoCascaderDefaultValueComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ng_zorro_antd_cascader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/cascader */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-cascader.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");




const options = [
    {
        value: 'zhejiang',
        label: 'Zhejiang',
        children: [
            {
                value: 'hangzhou',
                label: 'Hangzhou',
                children: [
                    {
                        value: 'xihu',
                        label: 'West Lake',
                        isLeaf: true
                    }
                ]
            },
            {
                value: 'ningbo',
                label: 'Ningbo',
                isLeaf: true
            }
        ]
    },
    {
        value: 'jiangsu',
        label: 'Jiangsu',
        children: [
            {
                value: 'nanjing',
                label: 'Nanjing',
                children: [
                    {
                        value: 'zhonghuamen',
                        label: 'Zhong Hua Men',
                        isLeaf: true
                    }
                ]
            }
        ]
    }
];
class NzDemoCascaderDefaultValueComponent {
    constructor() {
        this.nzOptions = options;
        this.values = ['zhejiang', 'hangzhou', 'xihu'];
    }
    /* // or like this:
    values: any[] = [{
      value: 'zhejiang',
      label: 'Zhejiang'
    }, {
      value: 'hangzhou',
      label: 'Hangzhou'
    }, {
      value: 'xihu',
      label: 'West Lake'
    }]; */
    onChanges(values) {
        console.log(values, this.values);
    }
}
/** @nocollapse */ NzDemoCascaderDefaultValueComponent.ɵfac = function NzDemoCascaderDefaultValueComponent_Factory(t) { return new (t || NzDemoCascaderDefaultValueComponent)(); };
/** @nocollapse */ NzDemoCascaderDefaultValueComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoCascaderDefaultValueComponent, selectors: [["nz-demo-cascader-default-value"]], decls: 1, vars: 2, consts: [[3, "nzOptions", "ngModel", "ngModelChange"]], template: function NzDemoCascaderDefaultValueComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-cascader", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoCascaderDefaultValueComponent_Template_nz_cascader_ngModelChange_0_listener($event) { return ctx.values = $event; })("ngModelChange", function NzDemoCascaderDefaultValueComponent_Template_nz_cascader_ngModelChange_0_listener($event) { return ctx.onChanges($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzOptions", ctx.nzOptions)("ngModel", ctx.values);
    } }, directives: [ng_zorro_antd_cascader__WEBPACK_IMPORTED_MODULE_1__["NzCascaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoCascaderDefaultValueComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-demo-cascader-default-value',
                template: `
    <nz-cascader [nzOptions]="nzOptions" [(ngModel)]="values" (ngModelChange)="onChanges($event)"> </nz-cascader>
  `
            }]
    }], null, null); })();


/***/ }),

/***/ "./site/doc/app/cascader/disabled.ts":
/*!*******************************************!*\
  !*** ./site/doc/app/cascader/disabled.ts ***!
  \*******************************************/
/*! exports provided: NzDemoCascaderDisabledComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoCascaderDisabledComponent", function() { return NzDemoCascaderDisabledComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ng_zorro_antd_cascader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/cascader */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-cascader.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");




const options = [
    {
        value: 'zhejiang',
        label: 'Zhejiang',
        children: [
            {
                value: 'hangzhou',
                label: 'Hangzhou',
                children: [
                    {
                        value: 'xihu',
                        label: 'West Lake',
                        isLeaf: true
                    }
                ]
            },
            {
                value: 'ningbo',
                label: 'Ningbo',
                isLeaf: true
            }
        ]
    },
    {
        value: 'jiangsu',
        label: 'Jiangsu',
        disabled: true,
        children: [
            {
                value: 'nanjing',
                label: 'Nanjing',
                children: [
                    {
                        value: 'zhonghuamen',
                        label: 'Zhong Hua Men',
                        isLeaf: true
                    }
                ]
            }
        ]
    }
];
class NzDemoCascaderDisabledComponent {
    constructor() {
        this.nzOptions = options;
        this.values = null;
    }
    onChanges(values) {
        console.log(values, this.values);
    }
}
/** @nocollapse */ NzDemoCascaderDisabledComponent.ɵfac = function NzDemoCascaderDisabledComponent_Factory(t) { return new (t || NzDemoCascaderDisabledComponent)(); };
/** @nocollapse */ NzDemoCascaderDisabledComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoCascaderDisabledComponent, selectors: [["nz-demo-cascader-disabled"]], decls: 1, vars: 2, consts: [[3, "nzOptions", "ngModel", "ngModelChange"]], template: function NzDemoCascaderDisabledComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-cascader", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoCascaderDisabledComponent_Template_nz_cascader_ngModelChange_0_listener($event) { return ctx.values = $event; })("ngModelChange", function NzDemoCascaderDisabledComponent_Template_nz_cascader_ngModelChange_0_listener($event) { return ctx.onChanges($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzOptions", ctx.nzOptions)("ngModel", ctx.values);
    } }, directives: [ng_zorro_antd_cascader__WEBPACK_IMPORTED_MODULE_1__["NzCascaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoCascaderDisabledComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-demo-cascader-disabled',
                template: `
    <nz-cascader [nzOptions]="nzOptions" [(ngModel)]="values" (ngModelChange)="onChanges($event)"> </nz-cascader>
  `
            }]
    }], null, null); })();


/***/ }),

/***/ "./site/doc/app/cascader/en.component.ts":
/*!***********************************************!*\
  !*** ./site/doc/app/cascader/en.component.ts ***!
  \***********************************************/
/*! exports provided: NzDemoCascaderEnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoCascaderEnComponent", function() { return NzDemoCascaderEnComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _share_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../share/codebox/codebox.component */ "./site/doc/app/share/codebox/codebox.component.ts");
/* harmony import */ var ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/affix */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-affix.js");
/* harmony import */ var ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/anchor */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-anchor.js");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-transition-patch.js");
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-tooltip.js");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/grid */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-grid.js");
/* harmony import */ var _basic__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./basic */ "./site/doc/app/cascader/basic.ts");
/* harmony import */ var _trigger__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./trigger */ "./site/doc/app/cascader/trigger.ts");
/* harmony import */ var _disabled__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./disabled */ "./site/doc/app/cascader/disabled.ts");
/* harmony import */ var _size__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./size */ "./site/doc/app/cascader/size.ts");
/* harmony import */ var _reactive_form__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./reactive-form */ "./site/doc/app/cascader/reactive-form.ts");
/* harmony import */ var _change_on_function__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./change-on-function */ "./site/doc/app/cascader/change-on-function.ts");
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./search */ "./site/doc/app/cascader/search.ts");
/* harmony import */ var _default_value_and_lazyload__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./default-value-and-lazyload */ "./site/doc/app/cascader/default-value-and-lazyload.ts");
/* harmony import */ var _custom_field_names__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./custom-field-names */ "./site/doc/app/cascader/custom-field-names.ts");
/* harmony import */ var _default_value__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./default-value */ "./site/doc/app/cascader/default-value.ts");
/* harmony import */ var _hover__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./hover */ "./site/doc/app/cascader/hover.ts");
/* harmony import */ var _change_on_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./change-on-select */ "./site/doc/app/cascader/change-on-select.ts");
/* harmony import */ var _custom_render__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./custom-render */ "./site/doc/app/cascader/custom-render.ts");
/* harmony import */ var _lazy__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./lazy */ "./site/doc/app/cascader/lazy.ts");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./modal */ "./site/doc/app/cascader/modal.ts");
/* harmony import */ var _trigger_action__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./trigger-action */ "./site/doc/app/cascader/trigger-action.ts");
/* harmony import */ var _default_value_and_asyn_options__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./default-value-and-asyn-options */ "./site/doc/app/cascader/default-value-and-asyn-options.ts");
/* harmony import */ var _custom_template__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./custom-template */ "./site/doc/app/cascader/custom-template.ts");



























class NzDemoCascaderEnComponent {
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
/** @nocollapse */ NzDemoCascaderEnComponent.ɵfac = function NzDemoCascaderEnComponent_Factory(t) { return new (t || NzDemoCascaderEnComponent)(); };
/** @nocollapse */ NzDemoCascaderEnComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoCascaderEnComponent, selectors: [["nz-demo-cascader"]], viewQuery: function NzDemoCascaderEnComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_share_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_1__["NzCodeBoxComponent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.codeBoxes = _t);
    } }, decls: 659, vars: 61, consts: [[1, "toc-affix", 3, "nzOffsetTop"], ["nzShowInkInFixed", "", 3, "nzAffix", "nzClick"], ["nzHref", "#components-cascader-demo-basic", "nzTitle", "Basic"], ["nzHref", "#components-cascader-demo-default-value", "nzTitle", "Default value"], ["nzHref", "#components-cascader-demo-trigger", "nzTitle", "Custom trigger"], ["nzHref", "#components-cascader-demo-hover", "nzTitle", "Hover"], ["nzHref", "#components-cascader-demo-disabled", "nzTitle", "Disabled option"], ["nzHref", "#components-cascader-demo-change-on-select", "nzTitle", "Change on select"], ["nzHref", "#components-cascader-demo-size", "nzTitle", "Size"], ["nzHref", "#components-cascader-demo-custom-render", "nzTitle", "Custom render"], ["nzHref", "#components-cascader-demo-reactive-form", "nzTitle", "ReactiveForm"], ["nzHref", "#components-cascader-demo-lazy", "nzTitle", "Load Options Lazily"], ["nzHref", "#components-cascader-demo-change-on-function", "nzTitle", "Select specified"], ["nzHref", "#components-cascader-demo-modal", "nzTitle", "Modal Dialog"], ["nzHref", "#components-cascader-demo-search", "nzTitle", "Search"], ["nzHref", "#components-cascader-demo-trigger-action", "nzTitle", "Trigger Action"], ["nzHref", "#components-cascader-demo-default-value-and-lazyload", "nzTitle", "Default value and Lazy load"], ["nzHref", "#components-cascader-demo-default-value-and-asyn-options", "nzTitle", "Default value and asyc options"], ["nzHref", "#components-cascader-demo-custom-field-names", "nzTitle", "Custom Field Names"], ["nzHref", "#components-cascader-demo-custom-template", "nzTitle", "Custom option template"], ["nzHref", "#api", "nzTitle", "API"], [1, "markdown"], [1, "subtitle"], [1, "widget"], ["href", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/cascader/doc/index.en-US.md", "target", "_blank", "rel", "noopener noreferrer", 1, "edit-button"], ["nz-icon", "", "nzType", "edit"], ["id", "when-to-use"], ["onclick", "window.location.hash = 'when-to-use'", 1, "anchor"], [1, "language-ts"], [1, "token", "keyword"], [1, "token", "punctuation"], [1, "token", "string"], ["nz-icon", "", "nzType", "appstore", "nz-tooltip", "", "nzTooltipTitle", "Expand All Code", 1, "code-box-expand-trigger", 3, "click"], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", 3, "nzXl", "nzSpan"], ["nzTitle", "Basic", "nzSelector", "nz-demo-cascader-basic", "nzGenerateCommand", "ng g ng-zorro-antd:cascader-basic <name>", "nzComponentName", "NzDemoCascaderBasicComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["demo", ""], ["intro", ""], ["nzTitle", "Custom trigger", "nzSelector", "nz-demo-cascader-trigger", "nzGenerateCommand", "ng g ng-zorro-antd:cascader-trigger <name>", "nzComponentName", "NzDemoCascaderTriggerComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Disabled option", "nzSelector", "nz-demo-cascader-disabled", "nzGenerateCommand", "ng g ng-zorro-antd:cascader-disabled <name>", "nzComponentName", "NzDemoCascaderDisabledComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Size", "nzSelector", "nz-demo-cascader-size", "nzGenerateCommand", "ng g ng-zorro-antd:cascader-size <name>", "nzComponentName", "NzDemoCascaderSizeComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "ReactiveForm", "nzSelector", "nz-demo-cascader-reactive-form", "nzGenerateCommand", "ng g ng-zorro-antd:cascader-reactive-form <name>", "nzComponentName", "NzDemoCascaderReactiveFormComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Select specified", "nzSelector", "nz-demo-cascader-change-on-function", "nzGenerateCommand", "ng g ng-zorro-antd:cascader-change-on-function <name>", "nzComponentName", "NzDemoCascaderChangeOnFunctionComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Search", "nzSelector", "nz-demo-cascader-search", "nzGenerateCommand", "ng g ng-zorro-antd:cascader-search <name>", "nzComponentName", "NzDemoCascaderSearchComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Default value and Lazy load", "nzSelector", "nz-demo-cascader-default-value-and-lazyload", "nzGenerateCommand", "ng g ng-zorro-antd:cascader-default-value-and-lazyload <name>", "nzComponentName", "NzDemoCascaderDefaultValueAndLazyloadComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Custom Field Names", "nzSelector", "nz-demo-cascader-custom-field-names", "nzGenerateCommand", "ng g ng-zorro-antd:cascader-custom-field-names <name>", "nzComponentName", "NzDemoCascaderCustomFieldNamesComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Default value", "nzSelector", "nz-demo-cascader-default-value", "nzGenerateCommand", "ng g ng-zorro-antd:cascader-default-value <name>", "nzComponentName", "NzDemoCascaderDefaultValueComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Hover", "nzSelector", "nz-demo-cascader-hover", "nzGenerateCommand", "ng g ng-zorro-antd:cascader-hover <name>", "nzComponentName", "NzDemoCascaderHoverComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Change on select", "nzSelector", "nz-demo-cascader-change-on-select", "nzGenerateCommand", "ng g ng-zorro-antd:cascader-change-on-select <name>", "nzComponentName", "NzDemoCascaderChangeOnSelectComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Custom render", "nzSelector", "nz-demo-cascader-custom-render", "nzGenerateCommand", "ng g ng-zorro-antd:cascader-custom-render <name>", "nzComponentName", "NzDemoCascaderCustomRenderComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Load Options Lazily", "nzSelector", "nz-demo-cascader-lazy", "nzGenerateCommand", "ng g ng-zorro-antd:cascader-lazy <name>", "nzComponentName", "NzDemoCascaderLazyComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Modal Dialog", "nzSelector", "nz-demo-cascader-modal", "nzGenerateCommand", "ng g ng-zorro-antd:cascader-modal <name>", "nzComponentName", "NzDemoCascaderModalComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Trigger Action", "nzSelector", "nz-demo-cascader-trigger-action", "nzGenerateCommand", "ng g ng-zorro-antd:cascader-trigger-action <name>", "nzComponentName", "NzDemoCascaderTriggerActionComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Default value and asyc options", "nzSelector", "nz-demo-cascader-default-value-and-asyn-options", "nzGenerateCommand", "ng g ng-zorro-antd:cascader-default-value-and-asyn-options <name>", "nzComponentName", "NzDemoCascaderDefaultValueAndAsynOptionsComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Custom option template", "nzSelector", "nz-demo-cascader-custom-template", "nzGenerateCommand", "ng g ng-zorro-antd:cascader-custom-template <name>", "nzComponentName", "NzDemoCascaderCustomTemplateComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], [1, "markdown", "api-container"], ["id", "api"], ["onclick", "window.location.hash = 'api'", 1, "anchor"], [1, "language-html"], [1, "token", "tag"], [1, "token", "attr-name"], [1, "token", "attr-value"], ["id", "nz-cascader"], [1, "api-type-label", "component"], ["onclick", "window.location.hash = 'nz-cascader'", 1, "anchor"], ["id", "methods"], ["onclick", "window.location.hash = 'methods'", 1, "anchor"]], template: function NzDemoCascaderEnComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-affix", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nz-anchor", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzClick", function NzDemoCascaderEnComponent_Template_nz_anchor_nzClick_2_listener($event) { return ctx.goLink($event); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "nz-link", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "nz-link", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "nz-link", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "nz-link", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "nz-link", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "nz-link", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "nz-link", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "section", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Cascader");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "section", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Cascade selection box.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h2", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "When To Use");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "When you need to select from a set of associated data set. Such as province/city/district, company level, things classification.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "When selecting from a large data set, with multi-stage classification separated for easy selection.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Chooses cascade items in one float layer for better user experience.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "pre", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "import");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "{");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " NzCascaderModule ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "from");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "'ng-zorro-antd/cascader'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Examples");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoCascaderEnComponent_Template_i_click_65_listener() { return ctx.expandAllCode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "nz-code-box", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "nz-demo-cascader-basic", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Cascade selection box for selecting province/city/district.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "nz-code-box", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "nz-demo-cascader-trigger", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Separate trigger button and result.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "nz-code-box", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "nz-demo-cascader-disabled", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Disable option by specifying the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "disabled");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, " property in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "options");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "nz-code-box", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "nz-demo-cascader-size", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Cascade selection box of different sizes.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "nz-code-box", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "nz-demo-cascader-reactive-form", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Reset control value by Ng Reactive Form.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "nz-code-box", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "nz-demo-cascader-change-on-function", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Allow select option only on ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "nzChangeOn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, " return true.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "nz-code-box", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "nz-demo-cascader-search", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Search and select an option directly.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "nz-code-box", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "nz-demo-cascader-default-value-and-lazyload", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Specifies default value by an array, but ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "nzOptions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, " is ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "/empty, data are loaded by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "nzLoadData");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, " function.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "nz-code-box", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "nz-demo-cascader-custom-field-names", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "Custom field names.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "nz-code-box", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "nz-demo-cascader-default-value", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "Specifies default value by an array.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "nz-code-box", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "nz-demo-cascader-hover", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "Hover to expand sub menu, click to select option.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "nz-code-box", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](143, "nz-demo-cascader-change-on-select", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "Allow only select parent options.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "nz-code-box", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](148, "nz-demo-cascader-custom-render", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "For instance, add an external link after the selected value.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "nz-code-box", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](153, "nz-demo-cascader-lazy", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "Load options lazily with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "nzLoadData");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "nz-code-box", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](161, "nz-demo-cascader-modal", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "Show Cascade selection box in a modal dialog.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "nz-code-box", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](166, "nz-demo-cascader-trigger-action", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "Show menu on mouse enter and hide on mouse leave.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "nz-code-box", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](171, "nz-demo-cascader-default-value-and-asyn-options", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, "Specifies default value by an array, and setting ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "nzOptions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, " in a asynchronous way.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "nz-code-box", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](179, "nz-demo-cascader-custom-template", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "Custom cascader option template.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "section", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "h2", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, "API");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "a", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "pre", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "span", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "span", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, "nz-cascader");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "span", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, "[nzOptions]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "span", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, "options");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "span", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, "[(ngModel)]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "span", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](212, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](214, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, "values");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](219, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "span", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "span", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](223, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, "nz-cascader");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](226, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "h3", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](229, "nz-cascader");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "label", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](231, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "a", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](233, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](238, "Property");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](240, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](242, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](244, "Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](246, "Global Config");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](251, "[ngModel]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](253, "selected value");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](256, "any[]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](258, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](259, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](263, "[nzAllowClear]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](265, "whether allow clear");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](268, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](271, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](272, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](276, "[nzAutoFocus]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](278, "whether auto focus the input box");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](281, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](284, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](285, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](289, "[nzChangeOn]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](291, "change value on each selection if this function return ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](293, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](295, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](296, "(option: any, index: number) => boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](297, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](298, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](299, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](301, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](303, "[nzChangeOnSelect]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](304, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](305, "change value on each selection if set to true, see above demo for details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](306, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](307, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](308, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](309, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](310, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](311, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](312, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](313, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](314, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](315, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](316, "[nzColumnClassName]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](317, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](318, "additional className of column in the popup overlay");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](319, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](320, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](321, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](322, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](323, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](324, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](325, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](326, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](327, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](328, "[nzDisabled]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](329, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](330, "whether disabled select");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](331, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](332, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](333, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](334, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](335, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](336, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](337, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](338, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](339, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](340, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](341, "[nzExpandTrigger]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](342, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](343, "expand current item when click or hover, one of 'click' 'hover'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](344, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](345, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](346, "'click'|'hover'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](347, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](348, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](349, "'click'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](350, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](351, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](352, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](353, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](354, "[nzMenuClassName]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](355, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](356, "additional className of popup overlay");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](357, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](358, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](359, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](360, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](361, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](362, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](363, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](364, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](365, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](366, "[nzMenuStyle]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](367, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](368, "additional css style of popup overlay");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](369, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](370, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](371, "object");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](372, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](373, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](374, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](375, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](376, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](377, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](378, "[nzNotFoundContent]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](379, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](380, "Specify content to show when no result matches.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](381, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](382, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](383, "string|TemplateRef<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](384, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](385, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](386, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](387, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](388, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](389, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](390, "[nzLabelProperty]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](391, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](392, "the label property name of options");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](393, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](394, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](395, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](396, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](397, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](398, "'label'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](399, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](400, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](401, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](402, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](403, "[nzLabelRender]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](404, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](405, "render template of displaying selected options");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](406, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](407, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](408, "TemplateRef<any>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](409, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](410, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](411, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](412, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](413, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](414, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](415, "[nzOptionRender]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](416, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](417, "render template of cascader options");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](418, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](419, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](420, "TemplateRef<{ $implicit: NzCascaderOption, index: number }>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](421, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](422, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](423, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](424, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](425, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](426, "[nzLoadData]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](427, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](428, "To load option lazily. If setting ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](429, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](430, "ngModel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](431, " with an array value and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](432, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](433, "nzOptions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](434, " is not setting, lazy load will be call immediately");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](435, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](436, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](437, "(option: any, index?: index) => PromiseLike<any>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](438, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](439, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](440, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](441, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](442, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](443, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](444, "[nzOptions]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](445, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](446, "data options of cascade");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](447, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](448, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](449, "object[]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](450, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](451, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](452, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](453, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](454, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](455, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](456, "[nzPlaceHolder]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](457, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](458, "input placeholder");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](459, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](460, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](461, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](462, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](463, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](464, "'Please select'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](465, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](466, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](467, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](468, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](469, "[nzShowArrow]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](470, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](471, "Whether show arrow");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](472, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](473, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](474, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](475, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](476, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](477, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](478, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](479, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](480, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](481, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](482, "[nzShowInput]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](483, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](484, "Whether show input");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](491, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](492, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](493, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](494, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](495, "[nzShowSearch]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](496, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](497, "Whether support search. Cannot be used with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](498, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](499, "[nzLoadData]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](500, " at the same time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](501, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](502, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](503, "boolean|NzShowSearchOptions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](504, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](505, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](506, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](507, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](508, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](509, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](510, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](511, "[nzSize]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](512, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](513, "input size, one of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](514, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](515, "large");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](516, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](517, "default");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](518, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](519, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](520, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](521, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](522, "'large'|'small'|'default'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](523, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](524, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](525, "'default'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](526, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](527, "\u2705");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](528, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](529, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](530, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](531, "[nzValueProperty]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](532, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](533, "the value property name of options");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](534, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](535, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](536, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](537, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](538, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](539, "'value'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](540, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](541, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](542, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](543, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](544, "(ngModelChange)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](545, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](546, "Emit on values change");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](547, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](548, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](549, "EventEmitter<any[]>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](550, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](551, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](552, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](553, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](554, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](555, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](556, "(nzClear)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](557, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](558, "Emit on clear values");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](559, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](560, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](561, "EventEmitter<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](562, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](563, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](564, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](565, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](566, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](567, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](568, "(nzVisibleChange)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](569, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](570, "Emit on popup menu visible or hide");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](571, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](572, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](573, "EventEmitter<boolean>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](574, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](575, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](576, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](577, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](578, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](579, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](580, "(nzSelectionChange)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](581, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](582, "Emit on values change");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](583, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](584, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](585, "EventEmitter<NzCascaderOption[]>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](586, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](587, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](588, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](589, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](590, "When ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](591, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](592, "nzShowSearch");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](593, " is an object it should implements ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](594, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](595, "NzShowSearchOptions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](596, "\uFF1A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](597, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](598, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](599, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](600, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](601, "Params");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](602, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](603, "Explanation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](604, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](605, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](606, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](607, "Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](608, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](609, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](610, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](611, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](612, "filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](613, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](614, "Optional. Be aware that all non-leaf CascaderOptions would be filtered");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](615, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](616, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](617, "(inputValue: string, path: NzCascaderOption[]): boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](618, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](619, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](620, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](621, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](622, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](623, "sorter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](624, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](625, "Optional");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](626, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](627, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](628, "(a: NzCascaderOption[], b: NzCascaderOption[], inputValue: string): number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](629, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](630, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](631, "h4", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](632, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](633, "Methods");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](634, "a", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](635, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](636, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](637, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](638, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](639, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](640, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](641, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](642, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](643, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](644, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](645, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](646, "blur()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](647, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](648, "remove focus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](649, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](650, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](651, "focus()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](652, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](653, "get focus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](654, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](655, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](656, "closeMenu()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](657, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](658, "hide the menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzOffsetTop", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzAffix", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzGutter", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzXl", 12)("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-cascader-demo-basic")("nzLink", "components-cascader-demo-basic")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/cascader/demo/basic.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-cascader-demo-trigger")("nzLink", "components-cascader-demo-trigger")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/cascader/demo/trigger.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-cascader-demo-disabled")("nzLink", "components-cascader-demo-disabled")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/cascader/demo/disabled.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-cascader-demo-size")("nzLink", "components-cascader-demo-size")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/cascader/demo/size.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-cascader-demo-reactive-form")("nzLink", "components-cascader-demo-reactive-form")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/cascader/demo/reactive-form.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-cascader-demo-change-on-function")("nzLink", "components-cascader-demo-change-on-function")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/cascader/demo/change-on-function.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-cascader-demo-search")("nzLink", "components-cascader-demo-search")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/cascader/demo/search.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-cascader-demo-default-value-and-lazyload")("nzLink", "components-cascader-demo-default-value-and-lazyload")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/cascader/demo/default-value-and-lazyload.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-cascader-demo-custom-field-names")("nzLink", "components-cascader-demo-custom-field-names")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/cascader/demo/custom-field-names.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzXl", 12)("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-cascader-demo-default-value")("nzLink", "components-cascader-demo-default-value")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/cascader/demo/default-value.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-cascader-demo-hover")("nzLink", "components-cascader-demo-hover")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/cascader/demo/hover.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-cascader-demo-change-on-select")("nzLink", "components-cascader-demo-change-on-select")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/cascader/demo/change-on-select.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-cascader-demo-custom-render")("nzLink", "components-cascader-demo-custom-render")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/cascader/demo/custom-render.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-cascader-demo-lazy")("nzLink", "components-cascader-demo-lazy")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/cascader/demo/lazy.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-cascader-demo-modal")("nzLink", "components-cascader-demo-modal")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/cascader/demo/modal.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-cascader-demo-trigger-action")("nzLink", "components-cascader-demo-trigger-action")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/cascader/demo/trigger-action.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-cascader-demo-default-value-and-asyn-options")("nzLink", "components-cascader-demo-default-value-and-asyn-options")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/cascader/demo/default-value-and-asyn-options.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-cascader-demo-custom-template")("nzLink", "components-cascader-demo-custom-template")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/cascader/demo/custom-template.md");
    } }, directives: [ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_2__["NzAffixComponent"], ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_3__["NzAnchorComponent"], ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_3__["NzAnchorLinkComponent"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__["ɵNzTransitionPatchDirective"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_5__["NzTooltipDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__["NzRowDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__["NzColDirective"], _share_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_1__["NzCodeBoxComponent"], _basic__WEBPACK_IMPORTED_MODULE_7__["NzDemoCascaderBasicComponent"], _trigger__WEBPACK_IMPORTED_MODULE_8__["NzDemoCascaderTriggerComponent"], _disabled__WEBPACK_IMPORTED_MODULE_9__["NzDemoCascaderDisabledComponent"], _size__WEBPACK_IMPORTED_MODULE_10__["NzDemoCascaderSizeComponent"], _reactive_form__WEBPACK_IMPORTED_MODULE_11__["NzDemoCascaderReactiveFormComponent"], _change_on_function__WEBPACK_IMPORTED_MODULE_12__["NzDemoCascaderChangeOnFunctionComponent"], _search__WEBPACK_IMPORTED_MODULE_13__["NzDemoCascaderSearchComponent"], _default_value_and_lazyload__WEBPACK_IMPORTED_MODULE_14__["NzDemoCascaderDefaultValueAndLazyloadComponent"], _custom_field_names__WEBPACK_IMPORTED_MODULE_15__["NzDemoCascaderCustomFieldNamesComponent"], _default_value__WEBPACK_IMPORTED_MODULE_16__["NzDemoCascaderDefaultValueComponent"], _hover__WEBPACK_IMPORTED_MODULE_17__["NzDemoCascaderHoverComponent"], _change_on_select__WEBPACK_IMPORTED_MODULE_18__["NzDemoCascaderChangeOnSelectComponent"], _custom_render__WEBPACK_IMPORTED_MODULE_19__["NzDemoCascaderCustomRenderComponent"], _lazy__WEBPACK_IMPORTED_MODULE_20__["NzDemoCascaderLazyComponent"], _modal__WEBPACK_IMPORTED_MODULE_21__["NzDemoCascaderModalComponent"], _trigger_action__WEBPACK_IMPORTED_MODULE_22__["NzDemoCascaderTriggerActionComponent"], _default_value_and_asyn_options__WEBPACK_IMPORTED_MODULE_23__["NzDemoCascaderDefaultValueAndAsynOptionsComponent"], _custom_template__WEBPACK_IMPORTED_MODULE_24__["NzDemoCascaderCustomTemplateComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoCascaderEnComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-demo-cascader',
                preserveWhitespaces: false,
                templateUrl: './en.html'
            }]
    }], null, { codeBoxes: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"],
            args: [_share_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_1__["NzCodeBoxComponent"]]
        }] }); })();


/***/ }),

/***/ "./site/doc/app/cascader/hover.ts":
/*!****************************************!*\
  !*** ./site/doc/app/cascader/hover.ts ***!
  \****************************************/
/*! exports provided: NzDemoCascaderHoverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoCascaderHoverComponent", function() { return NzDemoCascaderHoverComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ng_zorro_antd_cascader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/cascader */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-cascader.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");




const options = [
    {
        value: 'zhejiang',
        label: 'Zhejiang',
        children: [
            {
                value: 'hangzhou',
                label: 'Hangzhou',
                children: [
                    {
                        value: 'xihu',
                        label: 'West Lake',
                        isLeaf: true
                    }
                ]
            },
            {
                value: 'ningbo',
                label: 'Ningbo',
                isLeaf: true
            }
        ]
    },
    {
        value: 'jiangsu',
        label: 'Jiangsu',
        children: [
            {
                value: 'nanjing',
                label: 'Nanjing',
                children: [
                    {
                        value: 'zhonghuamen',
                        label: 'Zhong Hua Men',
                        isLeaf: true
                    }
                ]
            }
        ]
    }
];
class NzDemoCascaderHoverComponent {
    constructor() {
        this.nzOptions = options;
        this.values = null;
    }
    onChanges(values) {
        console.log(values, this.values);
    }
}
/** @nocollapse */ NzDemoCascaderHoverComponent.ɵfac = function NzDemoCascaderHoverComponent_Factory(t) { return new (t || NzDemoCascaderHoverComponent)(); };
/** @nocollapse */ NzDemoCascaderHoverComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoCascaderHoverComponent, selectors: [["nz-demo-cascader-hover"]], decls: 1, vars: 3, consts: [[3, "nzExpandTrigger", "nzOptions", "ngModel", "ngModelChange"]], template: function NzDemoCascaderHoverComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-cascader", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoCascaderHoverComponent_Template_nz_cascader_ngModelChange_0_listener($event) { return ctx.values = $event; })("ngModelChange", function NzDemoCascaderHoverComponent_Template_nz_cascader_ngModelChange_0_listener($event) { return ctx.onChanges($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzExpandTrigger", "hover")("nzOptions", ctx.nzOptions)("ngModel", ctx.values);
    } }, directives: [ng_zorro_antd_cascader__WEBPACK_IMPORTED_MODULE_1__["NzCascaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoCascaderHoverComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-demo-cascader-hover',
                template: `
    <nz-cascader [nzExpandTrigger]="'hover'" [nzOptions]="nzOptions" [(ngModel)]="values" (ngModelChange)="onChanges($event)">
    </nz-cascader>
  `
            }]
    }], null, null); })();


/***/ }),

/***/ "./site/doc/app/cascader/index.module.ts":
/*!***********************************************!*\
  !*** ./site/doc/app/cascader/index.module.ts ***!
  \***********************************************/
/*! exports provided: NzDemoCascaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoCascaderModule", function() { return NzDemoCascaderModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _share_share_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../share/share.module */ "./site/doc/app/share/share.module.ts");
/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./module */ "./site/doc/app/cascader/module.ts");
/* harmony import */ var _basic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./basic */ "./site/doc/app/cascader/basic.ts");
/* harmony import */ var _change_on_function__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./change-on-function */ "./site/doc/app/cascader/change-on-function.ts");
/* harmony import */ var _change_on_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./change-on-select */ "./site/doc/app/cascader/change-on-select.ts");
/* harmony import */ var _custom_field_names__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./custom-field-names */ "./site/doc/app/cascader/custom-field-names.ts");
/* harmony import */ var _custom_render__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./custom-render */ "./site/doc/app/cascader/custom-render.ts");
/* harmony import */ var _custom_template__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./custom-template */ "./site/doc/app/cascader/custom-template.ts");
/* harmony import */ var _default_value_and_asyn_options__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./default-value-and-asyn-options */ "./site/doc/app/cascader/default-value-and-asyn-options.ts");
/* harmony import */ var _default_value_and_lazyload__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./default-value-and-lazyload */ "./site/doc/app/cascader/default-value-and-lazyload.ts");
/* harmony import */ var _default_value__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./default-value */ "./site/doc/app/cascader/default-value.ts");
/* harmony import */ var _disabled__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./disabled */ "./site/doc/app/cascader/disabled.ts");
/* harmony import */ var _hover__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./hover */ "./site/doc/app/cascader/hover.ts");
/* harmony import */ var _lazy__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./lazy */ "./site/doc/app/cascader/lazy.ts");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./modal */ "./site/doc/app/cascader/modal.ts");
/* harmony import */ var _reactive_form__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./reactive-form */ "./site/doc/app/cascader/reactive-form.ts");
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./search */ "./site/doc/app/cascader/search.ts");
/* harmony import */ var _size__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./size */ "./site/doc/app/cascader/size.ts");
/* harmony import */ var _trigger_action__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./trigger-action */ "./site/doc/app/cascader/trigger-action.ts");
/* harmony import */ var _trigger__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./trigger */ "./site/doc/app/cascader/trigger.ts");
/* harmony import */ var _zh_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./zh.component */ "./site/doc/app/cascader/zh.component.ts");
/* harmony import */ var _en_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./en.component */ "./site/doc/app/cascader/en.component.ts");
/* harmony import */ var ng_zorro_antd_cascader__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ng-zorro-antd/cascader */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-cascader.js");
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ng-zorro-antd/modal */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-modal.js");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ng-zorro-antd/button */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-button.js");





























class NzDemoCascaderModule {
}
/** @nocollapse */ NzDemoCascaderModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NzDemoCascaderModule });
/** @nocollapse */ NzDemoCascaderModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NzDemoCascaderModule_Factory(t) { return new (t || NzDemoCascaderModule)(); }, imports: [[
            _share_share_module__WEBPACK_IMPORTED_MODULE_2__["ShareModule"],
            ..._module__WEBPACK_IMPORTED_MODULE_3__["moduleList"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                { path: 'en', component: _en_component__WEBPACK_IMPORTED_MODULE_23__["NzDemoCascaderEnComponent"] },
                { path: 'zh', component: _zh_component__WEBPACK_IMPORTED_MODULE_22__["NzDemoCascaderZhComponent"] }
            ])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NzDemoCascaderModule, { declarations: [_basic__WEBPACK_IMPORTED_MODULE_4__["NzDemoCascaderBasicComponent"],
        _change_on_function__WEBPACK_IMPORTED_MODULE_5__["NzDemoCascaderChangeOnFunctionComponent"],
        _change_on_select__WEBPACK_IMPORTED_MODULE_6__["NzDemoCascaderChangeOnSelectComponent"],
        _custom_field_names__WEBPACK_IMPORTED_MODULE_7__["NzDemoCascaderCustomFieldNamesComponent"],
        _custom_render__WEBPACK_IMPORTED_MODULE_8__["NzDemoCascaderCustomRenderComponent"],
        _custom_template__WEBPACK_IMPORTED_MODULE_9__["NzDemoCascaderCustomTemplateComponent"],
        _default_value_and_asyn_options__WEBPACK_IMPORTED_MODULE_10__["NzDemoCascaderDefaultValueAndAsynOptionsComponent"],
        _default_value_and_lazyload__WEBPACK_IMPORTED_MODULE_11__["NzDemoCascaderDefaultValueAndLazyloadComponent"],
        _default_value__WEBPACK_IMPORTED_MODULE_12__["NzDemoCascaderDefaultValueComponent"],
        _disabled__WEBPACK_IMPORTED_MODULE_13__["NzDemoCascaderDisabledComponent"],
        _hover__WEBPACK_IMPORTED_MODULE_14__["NzDemoCascaderHoverComponent"],
        _lazy__WEBPACK_IMPORTED_MODULE_15__["NzDemoCascaderLazyComponent"],
        _modal__WEBPACK_IMPORTED_MODULE_16__["NzDemoCascaderModalComponent"],
        _reactive_form__WEBPACK_IMPORTED_MODULE_17__["NzDemoCascaderReactiveFormComponent"],
        _search__WEBPACK_IMPORTED_MODULE_18__["NzDemoCascaderSearchComponent"],
        _size__WEBPACK_IMPORTED_MODULE_19__["NzDemoCascaderSizeComponent"],
        _trigger_action__WEBPACK_IMPORTED_MODULE_20__["NzDemoCascaderTriggerActionComponent"],
        _trigger__WEBPACK_IMPORTED_MODULE_21__["NzDemoCascaderTriggerComponent"],
        _zh_component__WEBPACK_IMPORTED_MODULE_22__["NzDemoCascaderZhComponent"],
        _en_component__WEBPACK_IMPORTED_MODULE_23__["NzDemoCascaderEnComponent"]], imports: [_share_share_module__WEBPACK_IMPORTED_MODULE_2__["ShareModule"], ng_zorro_antd_cascader__WEBPACK_IMPORTED_MODULE_24__["NzCascaderModule"], ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_25__["NzModalModule"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_26__["NzButtonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoCascaderModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _share_share_module__WEBPACK_IMPORTED_MODULE_2__["ShareModule"],
                    ..._module__WEBPACK_IMPORTED_MODULE_3__["moduleList"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                        { path: 'en', component: _en_component__WEBPACK_IMPORTED_MODULE_23__["NzDemoCascaderEnComponent"] },
                        { path: 'zh', component: _zh_component__WEBPACK_IMPORTED_MODULE_22__["NzDemoCascaderZhComponent"] }
                    ])
                ],
                declarations: [
                    _basic__WEBPACK_IMPORTED_MODULE_4__["NzDemoCascaderBasicComponent"],
                    _change_on_function__WEBPACK_IMPORTED_MODULE_5__["NzDemoCascaderChangeOnFunctionComponent"],
                    _change_on_select__WEBPACK_IMPORTED_MODULE_6__["NzDemoCascaderChangeOnSelectComponent"],
                    _custom_field_names__WEBPACK_IMPORTED_MODULE_7__["NzDemoCascaderCustomFieldNamesComponent"],
                    _custom_render__WEBPACK_IMPORTED_MODULE_8__["NzDemoCascaderCustomRenderComponent"],
                    _custom_template__WEBPACK_IMPORTED_MODULE_9__["NzDemoCascaderCustomTemplateComponent"],
                    _default_value_and_asyn_options__WEBPACK_IMPORTED_MODULE_10__["NzDemoCascaderDefaultValueAndAsynOptionsComponent"],
                    _default_value_and_lazyload__WEBPACK_IMPORTED_MODULE_11__["NzDemoCascaderDefaultValueAndLazyloadComponent"],
                    _default_value__WEBPACK_IMPORTED_MODULE_12__["NzDemoCascaderDefaultValueComponent"],
                    _disabled__WEBPACK_IMPORTED_MODULE_13__["NzDemoCascaderDisabledComponent"],
                    _hover__WEBPACK_IMPORTED_MODULE_14__["NzDemoCascaderHoverComponent"],
                    _lazy__WEBPACK_IMPORTED_MODULE_15__["NzDemoCascaderLazyComponent"],
                    _modal__WEBPACK_IMPORTED_MODULE_16__["NzDemoCascaderModalComponent"],
                    _reactive_form__WEBPACK_IMPORTED_MODULE_17__["NzDemoCascaderReactiveFormComponent"],
                    _search__WEBPACK_IMPORTED_MODULE_18__["NzDemoCascaderSearchComponent"],
                    _size__WEBPACK_IMPORTED_MODULE_19__["NzDemoCascaderSizeComponent"],
                    _trigger_action__WEBPACK_IMPORTED_MODULE_20__["NzDemoCascaderTriggerActionComponent"],
                    _trigger__WEBPACK_IMPORTED_MODULE_21__["NzDemoCascaderTriggerComponent"],
                    _zh_component__WEBPACK_IMPORTED_MODULE_22__["NzDemoCascaderZhComponent"],
                    _en_component__WEBPACK_IMPORTED_MODULE_23__["NzDemoCascaderEnComponent"],
                ],
                entryComponents: []
            }]
    }], null, null); })();


/***/ }),

/***/ "./site/doc/app/cascader/lazy.ts":
/*!***************************************!*\
  !*** ./site/doc/app/cascader/lazy.ts ***!
  \***************************************/
/*! exports provided: NzDemoCascaderLazyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoCascaderLazyComponent", function() { return NzDemoCascaderLazyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ng_zorro_antd_cascader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/cascader */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-cascader.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");




const provinces = [
    {
        value: 'zhejiang',
        label: 'Zhejiang'
    },
    {
        value: 'jiangsu',
        label: 'Jiangsu'
    }
];
const cities = {
    zhejiang: [
        {
            value: 'hangzhou',
            label: 'Hangzhou'
        },
        {
            value: 'ningbo',
            label: 'Ningbo',
            isLeaf: true
        }
    ],
    jiangsu: [
        {
            value: 'nanjing',
            label: 'Nanjing'
        }
    ]
};
const scenicspots = {
    hangzhou: [
        {
            value: 'xihu',
            label: 'West Lake',
            isLeaf: true
        }
    ],
    nanjing: [
        {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
            isLeaf: true
        }
    ]
};
class NzDemoCascaderLazyComponent {
    constructor() {
        this.values = null;
    }
    onChanges(values) {
        console.log(values);
    }
    /** load data async execute by `nzLoadData` method */
    loadData(node, index) {
        return new Promise(resolve => {
            setTimeout(() => {
                if (index < 0) {
                    // if index less than 0 it is root node
                    node.children = provinces;
                }
                else if (index === 0) {
                    node.children = cities[node.value];
                }
                else {
                    node.children = scenicspots[node.value];
                }
                resolve();
            }, 1000);
        });
    }
}
/** @nocollapse */ NzDemoCascaderLazyComponent.ɵfac = function NzDemoCascaderLazyComponent_Factory(t) { return new (t || NzDemoCascaderLazyComponent)(); };
/** @nocollapse */ NzDemoCascaderLazyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoCascaderLazyComponent, selectors: [["nz-demo-cascader-lazy"]], decls: 1, vars: 2, consts: [[3, "ngModel", "nzLoadData", "ngModelChange"]], template: function NzDemoCascaderLazyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-cascader", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoCascaderLazyComponent_Template_nz_cascader_ngModelChange_0_listener($event) { return ctx.values = $event; })("ngModelChange", function NzDemoCascaderLazyComponent_Template_nz_cascader_ngModelChange_0_listener($event) { return ctx.onChanges($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.values)("nzLoadData", ctx.loadData);
    } }, directives: [ng_zorro_antd_cascader__WEBPACK_IMPORTED_MODULE_1__["NzCascaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoCascaderLazyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-demo-cascader-lazy',
                template: `
    <nz-cascader [(ngModel)]="values" [nzLoadData]="loadData" (ngModelChange)="onChanges($event)"> </nz-cascader>
  `
            }]
    }], null, null); })();


/***/ }),

/***/ "./site/doc/app/cascader/modal.ts":
/*!****************************************!*\
  !*** ./site/doc/app/cascader/modal.ts ***!
  \****************************************/
/*! exports provided: NzDemoCascaderModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoCascaderModalComponent", function() { return NzDemoCascaderModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/modal */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-modal.js");
/* harmony import */ var ng_zorro_antd_cascader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/cascader */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-cascader.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/button */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-button.js");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-wave.js");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-transition-patch.js");








const options = [
    {
        value: 'zhejiang',
        label: 'Zhejiang',
        children: [
            {
                value: 'hangzhou',
                label: 'Hangzhou',
                children: [
                    {
                        value: 'xihu',
                        label: 'West Lake',
                        isLeaf: true
                    }
                ]
            },
            {
                value: 'ningbo',
                label: 'Ningbo',
                isLeaf: true
            }
        ]
    },
    {
        value: 'jiangsu',
        label: 'Jiangsu',
        children: [
            {
                value: 'nanjing',
                label: 'Nanjing',
                children: [
                    {
                        value: 'zhonghuamen',
                        label: 'Zhong Hua Men',
                        isLeaf: true
                    }
                ]
            }
        ]
    }
];
class NzDemoCascaderModalComponent {
    constructor() {
        this.nzOptions = options;
        this.values = null;
        this.isVisible = false;
    }
    onChanges(values) {
        console.log(values, this.values);
    }
    open() {
        this.isVisible = true;
    }
    handleOk($event) {
        console.log('Button ok clicked!', this.values, $event);
        this.isVisible = false;
    }
    handleCancel($event) {
        console.log('Button cancel clicked!', $event);
        this.isVisible = false;
    }
}
/** @nocollapse */ NzDemoCascaderModalComponent.ɵfac = function NzDemoCascaderModalComponent_Factory(t) { return new (t || NzDemoCascaderModalComponent)(); };
/** @nocollapse */ NzDemoCascaderModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoCascaderModalComponent, selectors: [["nz-demo-cascader-modal"]], decls: 4, vars: 3, consts: [["nzTitle", "Please select", 3, "nzVisible", "nzVisibleChange", "nzOnCancel", "nzOnOk"], [3, "nzOptions", "ngModel", "ngModelChange"], ["nz-button", "", 3, "click"]], template: function NzDemoCascaderModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-modal", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzVisibleChange", function NzDemoCascaderModalComponent_Template_nz_modal_nzVisibleChange_0_listener($event) { return ctx.isVisible = $event; })("nzOnCancel", function NzDemoCascaderModalComponent_Template_nz_modal_nzOnCancel_0_listener($event) { return ctx.handleCancel($event); })("nzOnOk", function NzDemoCascaderModalComponent_Template_nz_modal_nzOnOk_0_listener($event) { return ctx.handleOk($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-cascader", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoCascaderModalComponent_Template_nz_cascader_ngModelChange_1_listener($event) { return ctx.values = $event; })("ngModelChange", function NzDemoCascaderModalComponent_Template_nz_cascader_ngModelChange_1_listener($event) { return ctx.onChanges($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoCascaderModalComponent_Template_button_click_2_listener() { return ctx.open(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Open Dialog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzVisible", ctx.isVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzOptions", ctx.nzOptions)("ngModel", ctx.values);
    } }, directives: [ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_1__["NzModalComponent"], ng_zorro_antd_cascader__WEBPACK_IMPORTED_MODULE_2__["NzCascaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_5__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_6__["ɵNzTransitionPatchDirective"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoCascaderModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-demo-cascader-modal',
                template: `
    <nz-modal [(nzVisible)]="isVisible" nzTitle="Please select" (nzOnCancel)="handleCancel($event)" (nzOnOk)="handleOk($event)">
      <nz-cascader [nzOptions]="nzOptions" [(ngModel)]="values" (ngModelChange)="onChanges($event)"> </nz-cascader>
    </nz-modal>

    <button nz-button (click)="open()">Open Dialog</button>
  `
            }]
    }], null, null); })();


/***/ }),

/***/ "./site/doc/app/cascader/module.ts":
/*!*****************************************!*\
  !*** ./site/doc/app/cascader/module.ts ***!
  \*****************************************/
/*! exports provided: moduleList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moduleList", function() { return moduleList; });
/* harmony import */ var ng_zorro_antd_cascader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng-zorro-antd/cascader */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-cascader.js");
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/modal */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-modal.js");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/button */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-button.js");



const moduleList = [ng_zorro_antd_cascader__WEBPACK_IMPORTED_MODULE_0__["NzCascaderModule"], ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_1__["NzModalModule"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__["NzButtonModule"]];


/***/ }),

/***/ "./site/doc/app/cascader/reactive-form.ts":
/*!************************************************!*\
  !*** ./site/doc/app/cascader/reactive-form.ts ***!
  \************************************************/
/*! exports provided: NzDemoCascaderReactiveFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoCascaderReactiveFormComponent", function() { return NzDemoCascaderReactiveFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ng_zorro_antd_cascader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/cascader */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-cascader.js");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/button */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-button.js");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-wave.js");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-transition-patch.js");








const options = [
    {
        value: 'zhejiang',
        label: 'Zhejiang',
        children: [
            {
                value: 'hangzhou',
                label: 'Hangzhou',
                children: [
                    {
                        value: 'xihu',
                        label: 'West Lake',
                        isLeaf: true
                    }
                ]
            },
            {
                value: 'ningbo',
                label: 'Ningbo',
                isLeaf: true
            }
        ]
    },
    {
        value: 'jiangsu',
        label: 'Jiangsu',
        children: [
            {
                value: 'nanjing',
                label: 'Nanjing',
                children: [
                    {
                        value: 'zhonghuamen',
                        label: 'Zhong Hua Men',
                        isLeaf: true
                    }
                ]
            }
        ]
    }
];
class NzDemoCascaderReactiveFormComponent {
    constructor(fb) {
        this.fb = fb;
        this.nzOptions = options;
        this.createForm();
        const control = this.form.get('name');
        this.changeSubscription = control.valueChanges.subscribe(data => {
            this.onChanges(data);
        });
    }
    createForm() {
        this.form = this.fb.group({
            name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    reset() {
        this.form.reset();
        console.log(this.form.value);
    }
    submit() {
        console.log(this.form.value);
    }
    onChanges(values) {
        console.log(values);
    }
    ngOnDestroy() {
        this.changeSubscription.unsubscribe();
    }
}
/** @nocollapse */ NzDemoCascaderReactiveFormComponent.ɵfac = function NzDemoCascaderReactiveFormComponent_Factory(t) { return new (t || NzDemoCascaderReactiveFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
/** @nocollapse */ NzDemoCascaderReactiveFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoCascaderReactiveFormComponent, selectors: [["nz-demo-cascader-reactive-form"]], decls: 7, vars: 3, consts: [["novalidate", "", 3, "formGroup"], [3, "nzOptions", "formControlName"], ["nz-button", "", 3, "click"]], template: function NzDemoCascaderReactiveFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "nz-cascader", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoCascaderReactiveFormComponent_Template_button_click_3_listener() { return ctx.reset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Reset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoCascaderReactiveFormComponent_Template_button_click_5_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzOptions", ctx.nzOptions)("formControlName", "name");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], ng_zorro_antd_cascader__WEBPACK_IMPORTED_MODULE_2__["NzCascaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_3__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_4__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__["ɵNzTransitionPatchDirective"]], styles: ["button[_ngcontent-%COMP%] {\n        margin-right: 8px;\n      }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoCascaderReactiveFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-demo-cascader-reactive-form',
                template: `
    <form [formGroup]="form" novalidate>
      <nz-cascader [nzOptions]="nzOptions" [formControlName]="'name'"> </nz-cascader>
    </form>
    <br />
    <button nz-button (click)="reset()">Reset</button>
    <button nz-button (click)="submit()">Submit</button>
  `,
                styles: [
                    `
      button {
        margin-right: 8px;
      }
    `
                ]
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "./site/doc/app/cascader/search.ts":
/*!*****************************************!*\
  !*** ./site/doc/app/cascader/search.ts ***!
  \*****************************************/
/*! exports provided: NzDemoCascaderSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoCascaderSearchComponent", function() { return NzDemoCascaderSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ng_zorro_antd_cascader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/cascader */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-cascader.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");




const options = [
    {
        value: 'zhejiang',
        label: 'Zhejiang',
        children: [
            {
                value: 'hangzhou',
                label: 'Hangzhou',
                children: [
                    {
                        value: 'xihu',
                        label: 'West Lake',
                        isLeaf: true
                    }
                ]
            },
            {
                value: 'ningbo',
                label: 'Ningbo',
                isLeaf: true,
                disabled: true
            }
        ]
    },
    {
        value: 'jiangsu',
        label: 'Jiangsu',
        children: [
            {
                value: 'nanjing',
                label: 'Nanjing',
                children: [
                    {
                        value: 'zhonghuamen',
                        label: 'Zhong Hua Men',
                        isLeaf: true
                    }
                ]
            }
        ]
    }
];
const otherOptions = [
    {
        value: 'fujian',
        label: 'Fujian',
        children: [
            {
                value: 'xiamen',
                label: 'Xiamen',
                children: [
                    {
                        value: 'Kulangsu',
                        label: 'Kulangsu',
                        isLeaf: true
                    }
                ]
            }
        ]
    },
    {
        value: 'guangxi',
        label: 'Guangxi',
        children: [
            {
                value: 'guilin',
                label: 'Guilin',
                children: [
                    {
                        value: 'Lijiang',
                        label: 'Li Jiang River',
                        isLeaf: true
                    }
                ]
            }
        ]
    }
];
class NzDemoCascaderSearchComponent {
    constructor() {
        this.nzOptions = null;
        this.values = null;
    }
    ngOnInit() {
        setTimeout(() => {
            this.nzOptions = options;
        }, 100);
    }
    changeNzOptions() {
        if (this.nzOptions === options) {
            this.nzOptions = otherOptions;
        }
        else {
            this.nzOptions = options;
        }
    }
    onChanges(values) {
        console.log(values, this.values);
    }
}
/** @nocollapse */ NzDemoCascaderSearchComponent.ɵfac = function NzDemoCascaderSearchComponent_Factory(t) { return new (t || NzDemoCascaderSearchComponent)(); };
/** @nocollapse */ NzDemoCascaderSearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoCascaderSearchComponent, selectors: [["nz-demo-cascader-search"]], decls: 4, vars: 3, consts: [[3, "nzOptions", "ngModel", "nzShowSearch", "ngModelChange"], ["href", "javascript:;", 1, "change-options", 3, "click"]], template: function NzDemoCascaderSearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-cascader", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoCascaderSearchComponent_Template_nz_cascader_ngModelChange_0_listener($event) { return ctx.values = $event; })("ngModelChange", function NzDemoCascaderSearchComponent_Template_nz_cascader_ngModelChange_0_listener($event) { return ctx.onChanges($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoCascaderSearchComponent_Template_a_click_2_listener() { return ctx.changeNzOptions(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Change Options ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzOptions", ctx.nzOptions)("ngModel", ctx.values)("nzShowSearch", true);
    } }, directives: [ng_zorro_antd_cascader__WEBPACK_IMPORTED_MODULE_1__["NzCascaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]], styles: [".change-options[_ngcontent-%COMP%] {\n        display: inline-block;\n        font-size: 12px;\n        margin-top: 8px;\n      }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoCascaderSearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-demo-cascader-search',
                template: `
    <nz-cascader [nzOptions]="nzOptions" [(ngModel)]="values" [nzShowSearch]="true" (ngModelChange)="onChanges($event)"> </nz-cascader>
    &nbsp;
    <a href="javascript:;" (click)="changeNzOptions()" class="change-options">
      Change Options
    </a>
  `,
                styles: [
                    `
      .change-options {
        display: inline-block;
        font-size: 12px;
        margin-top: 8px;
      }
    `
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./site/doc/app/cascader/size.ts":
/*!***************************************!*\
  !*** ./site/doc/app/cascader/size.ts ***!
  \***************************************/
/*! exports provided: NzDemoCascaderSizeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoCascaderSizeComponent", function() { return NzDemoCascaderSizeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ng_zorro_antd_cascader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/cascader */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-cascader.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");




const options = [
    {
        value: 'zhejiang',
        label: 'Zhejiang',
        children: [
            {
                value: 'hangzhou',
                label: 'Hangzhou',
                children: [
                    {
                        value: 'xihu',
                        label: 'West Lake',
                        isLeaf: true
                    }
                ]
            },
            {
                value: 'ningbo',
                label: 'Ningbo',
                isLeaf: true
            }
        ]
    },
    {
        value: 'jiangsu',
        label: 'Jiangsu',
        children: [
            {
                value: 'nanjing',
                label: 'Nanjing',
                children: [
                    {
                        value: 'zhonghuamen',
                        label: 'Zhong Hua Men',
                        isLeaf: true
                    }
                ]
            }
        ]
    }
];
class NzDemoCascaderSizeComponent {
    constructor() {
        this.nzOptions = options;
        this.value1 = null;
        this.value2 = null;
        this.value3 = null;
    }
    onChanges(values) {
        console.log(values);
    }
}
/** @nocollapse */ NzDemoCascaderSizeComponent.ɵfac = function NzDemoCascaderSizeComponent_Factory(t) { return new (t || NzDemoCascaderSizeComponent)(); };
/** @nocollapse */ NzDemoCascaderSizeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoCascaderSizeComponent, selectors: [["nz-demo-cascader-size"]], decls: 3, vars: 8, consts: [[3, "nzSize", "nzOptions", "ngModel", "ngModelChange"], [3, "nzOptions", "ngModel", "ngModelChange"]], template: function NzDemoCascaderSizeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-cascader", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoCascaderSizeComponent_Template_nz_cascader_ngModelChange_0_listener($event) { return ctx.value1 = $event; })("ngModelChange", function NzDemoCascaderSizeComponent_Template_nz_cascader_ngModelChange_0_listener($event) { return ctx.onChanges($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-cascader", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoCascaderSizeComponent_Template_nz_cascader_ngModelChange_1_listener($event) { return ctx.value2 = $event; })("ngModelChange", function NzDemoCascaderSizeComponent_Template_nz_cascader_ngModelChange_1_listener($event) { return ctx.onChanges($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nz-cascader", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoCascaderSizeComponent_Template_nz_cascader_ngModelChange_2_listener($event) { return ctx.value3 = $event; })("ngModelChange", function NzDemoCascaderSizeComponent_Template_nz_cascader_ngModelChange_2_listener($event) { return ctx.onChanges($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSize", "large")("nzOptions", ctx.nzOptions)("ngModel", ctx.value1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzOptions", ctx.nzOptions)("ngModel", ctx.value2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSize", "small")("nzOptions", ctx.nzOptions)("ngModel", ctx.value3);
    } }, directives: [ng_zorro_antd_cascader__WEBPACK_IMPORTED_MODULE_1__["NzCascaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]], styles: [".ant-cascader-picker[_ngcontent-%COMP%] {\n        width: 300px;\n        margin-bottom: 8px;\n      }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoCascaderSizeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-demo-cascader-size',
                template: `
    <nz-cascader [nzSize]="'large'" [nzOptions]="nzOptions" [(ngModel)]="value1" (ngModelChange)="onChanges($event)"> </nz-cascader>
    <nz-cascader [nzOptions]="nzOptions" [(ngModel)]="value2" (ngModelChange)="onChanges($event)"> </nz-cascader>
    <nz-cascader [nzSize]="'small'" [nzOptions]="nzOptions" [(ngModel)]="value3" (ngModelChange)="onChanges($event)"> </nz-cascader>
  `,
                styles: [
                    `
      .ant-cascader-picker {
        width: 300px;
        margin-bottom: 8px;
      }
    `
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./site/doc/app/cascader/trigger-action.ts":
/*!*************************************************!*\
  !*** ./site/doc/app/cascader/trigger-action.ts ***!
  \*************************************************/
/*! exports provided: NzDemoCascaderTriggerActionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoCascaderTriggerActionComponent", function() { return NzDemoCascaderTriggerActionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ng_zorro_antd_cascader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/cascader */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-cascader.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");




const options = [
    {
        value: 'zhejiang',
        label: 'Zhejiang',
        children: [
            {
                value: 'hangzhou',
                label: 'Hangzhou',
                children: [
                    {
                        value: 'xihu',
                        label: 'West Lake',
                        isLeaf: true
                    }
                ]
            },
            {
                value: 'ningbo',
                label: 'Ningbo',
                isLeaf: true
            }
        ]
    },
    {
        value: 'jiangsu',
        label: 'Jiangsu',
        children: [
            {
                value: 'nanjing',
                label: 'Nanjing',
                children: [
                    {
                        value: 'zhonghuamen',
                        label: 'Zhong Hua Men',
                        isLeaf: true
                    }
                ]
            }
        ]
    }
];
class NzDemoCascaderTriggerActionComponent {
    constructor() {
        this.nzOptions = options;
        this.values = null;
    }
    onChanges(values) {
        console.log(values, this.values);
    }
}
/** @nocollapse */ NzDemoCascaderTriggerActionComponent.ɵfac = function NzDemoCascaderTriggerActionComponent_Factory(t) { return new (t || NzDemoCascaderTriggerActionComponent)(); };
/** @nocollapse */ NzDemoCascaderTriggerActionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoCascaderTriggerActionComponent, selectors: [["nz-demo-cascader-trigger-action"]], decls: 1, vars: 4, consts: [[3, "nzTriggerAction", "nzExpandTrigger", "nzOptions", "ngModel", "ngModelChange"]], template: function NzDemoCascaderTriggerActionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-cascader", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoCascaderTriggerActionComponent_Template_nz_cascader_ngModelChange_0_listener($event) { return ctx.values = $event; })("ngModelChange", function NzDemoCascaderTriggerActionComponent_Template_nz_cascader_ngModelChange_0_listener($event) { return ctx.onChanges($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzTriggerAction", "hover")("nzExpandTrigger", "hover")("nzOptions", ctx.nzOptions)("ngModel", ctx.values);
    } }, directives: [ng_zorro_antd_cascader__WEBPACK_IMPORTED_MODULE_1__["NzCascaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoCascaderTriggerActionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-demo-cascader-trigger-action',
                template: `
    <nz-cascader
      [nzTriggerAction]="'hover'"
      [nzExpandTrigger]="'hover'"
      [nzOptions]="nzOptions"
      [(ngModel)]="values"
      (ngModelChange)="onChanges($event)"
    >
    </nz-cascader>
  `
            }]
    }], null, null); })();


/***/ }),

/***/ "./site/doc/app/cascader/trigger.ts":
/*!******************************************!*\
  !*** ./site/doc/app/cascader/trigger.ts ***!
  \******************************************/
/*! exports provided: NzDemoCascaderTriggerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoCascaderTriggerComponent", function() { return NzDemoCascaderTriggerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ng_zorro_antd_cascader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/cascader */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-cascader.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");




const options = [
    {
        value: 'zhejiang',
        label: 'Zhejiang',
        children: [
            {
                value: 'hangzhou',
                label: 'Hangzhou',
                children: [
                    {
                        value: 'xihu',
                        label: 'West Lake',
                        isLeaf: true
                    }
                ]
            },
            {
                value: 'ningbo',
                label: 'Ningbo',
                isLeaf: true
            }
        ]
    },
    {
        value: 'jiangsu',
        label: 'Jiangsu',
        children: [
            {
                value: 'nanjing',
                label: 'Nanjing',
                children: [
                    {
                        value: 'zhonghuamen',
                        label: 'Zhong Hua Men',
                        isLeaf: true
                    }
                ]
            }
        ]
    }
];
class NzDemoCascaderTriggerComponent {
    constructor() {
        this.nzOptions = options;
        this.values = null;
        this.text = 'Unselect';
    }
    onChanges(values) {
        console.log(values, this.values);
    }
    onSelectionChange(selectedOptions) {
        this.text = selectedOptions.map(o => o.label).join(', ');
    }
}
/** @nocollapse */ NzDemoCascaderTriggerComponent.ɵfac = function NzDemoCascaderTriggerComponent_Factory(t) { return new (t || NzDemoCascaderTriggerComponent)(); };
/** @nocollapse */ NzDemoCascaderTriggerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoCascaderTriggerComponent, selectors: [["nz-demo-cascader-trigger"]], decls: 4, vars: 4, consts: [[3, "nzShowInput", "nzOptions", "ngModel", "ngModelChange", "nzSelectionChange"], ["href", "javascript: void(0)"]], template: function NzDemoCascaderTriggerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-cascader", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoCascaderTriggerComponent_Template_nz_cascader_ngModelChange_1_listener($event) { return ctx.values = $event; })("ngModelChange", function NzDemoCascaderTriggerComponent_Template_nz_cascader_ngModelChange_1_listener($event) { return ctx.onChanges($event); })("nzSelectionChange", function NzDemoCascaderTriggerComponent_Template_nz_cascader_nzSelectionChange_1_listener($event) { return ctx.onSelectionChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Change city");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.text, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzShowInput", false)("nzOptions", ctx.nzOptions)("ngModel", ctx.values);
    } }, directives: [ng_zorro_antd_cascader__WEBPACK_IMPORTED_MODULE_1__["NzCascaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoCascaderTriggerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-demo-cascader-trigger',
                template: `
    {{ text }}
    <nz-cascader
      [nzShowInput]="false"
      [nzOptions]="nzOptions"
      [(ngModel)]="values"
      (ngModelChange)="onChanges($event)"
      (nzSelectionChange)="onSelectionChange($event)"
    >
      <a href="javascript: void(0)">Change city</a>
    </nz-cascader>
  `
            }]
    }], null, null); })();


/***/ }),

/***/ "./site/doc/app/cascader/zh.component.ts":
/*!***********************************************!*\
  !*** ./site/doc/app/cascader/zh.component.ts ***!
  \***********************************************/
/*! exports provided: NzDemoCascaderZhComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoCascaderZhComponent", function() { return NzDemoCascaderZhComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _share_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../share/codebox/codebox.component */ "./site/doc/app/share/codebox/codebox.component.ts");
/* harmony import */ var ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/affix */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-affix.js");
/* harmony import */ var ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/anchor */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-anchor.js");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-transition-patch.js");
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-tooltip.js");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/grid */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-grid.js");
/* harmony import */ var _basic__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./basic */ "./site/doc/app/cascader/basic.ts");
/* harmony import */ var _trigger__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./trigger */ "./site/doc/app/cascader/trigger.ts");
/* harmony import */ var _disabled__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./disabled */ "./site/doc/app/cascader/disabled.ts");
/* harmony import */ var _size__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./size */ "./site/doc/app/cascader/size.ts");
/* harmony import */ var _reactive_form__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./reactive-form */ "./site/doc/app/cascader/reactive-form.ts");
/* harmony import */ var _change_on_function__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./change-on-function */ "./site/doc/app/cascader/change-on-function.ts");
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./search */ "./site/doc/app/cascader/search.ts");
/* harmony import */ var _default_value_and_lazyload__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./default-value-and-lazyload */ "./site/doc/app/cascader/default-value-and-lazyload.ts");
/* harmony import */ var _custom_field_names__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./custom-field-names */ "./site/doc/app/cascader/custom-field-names.ts");
/* harmony import */ var _default_value__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./default-value */ "./site/doc/app/cascader/default-value.ts");
/* harmony import */ var _hover__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./hover */ "./site/doc/app/cascader/hover.ts");
/* harmony import */ var _change_on_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./change-on-select */ "./site/doc/app/cascader/change-on-select.ts");
/* harmony import */ var _custom_render__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./custom-render */ "./site/doc/app/cascader/custom-render.ts");
/* harmony import */ var _lazy__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./lazy */ "./site/doc/app/cascader/lazy.ts");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./modal */ "./site/doc/app/cascader/modal.ts");
/* harmony import */ var _trigger_action__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./trigger-action */ "./site/doc/app/cascader/trigger-action.ts");
/* harmony import */ var _default_value_and_asyn_options__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./default-value-and-asyn-options */ "./site/doc/app/cascader/default-value-and-asyn-options.ts");
/* harmony import */ var _custom_template__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./custom-template */ "./site/doc/app/cascader/custom-template.ts");



























class NzDemoCascaderZhComponent {
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
/** @nocollapse */ NzDemoCascaderZhComponent.ɵfac = function NzDemoCascaderZhComponent_Factory(t) { return new (t || NzDemoCascaderZhComponent)(); };
/** @nocollapse */ NzDemoCascaderZhComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoCascaderZhComponent, selectors: [["nz-demo-cascader"]], viewQuery: function NzDemoCascaderZhComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_share_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_1__["NzCodeBoxComponent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.codeBoxes = _t);
    } }, decls: 648, vars: 61, consts: [[1, "toc-affix", 3, "nzOffsetTop"], ["nzShowInkInFixed", "", 3, "nzAffix", "nzClick"], ["nzHref", "#components-cascader-demo-basic", "nzTitle", "\u57FA\u672C"], ["nzHref", "#components-cascader-demo-default-value", "nzTitle", "\u9ED8\u8BA4\u503C"], ["nzHref", "#components-cascader-demo-trigger", "nzTitle", "\u53EF\u4EE5\u81EA\u5B9A\u4E49\u663E\u793A"], ["nzHref", "#components-cascader-demo-hover", "nzTitle", "\u79FB\u5165\u5C55\u5F00"], ["nzHref", "#components-cascader-demo-disabled", "nzTitle", "\u7981\u7528\u9009\u9879"], ["nzHref", "#components-cascader-demo-change-on-select", "nzTitle", "\u9009\u62E9\u5373\u6539\u53D8"], ["nzHref", "#components-cascader-demo-size", "nzTitle", "\u5927\u5C0F"], ["nzHref", "#components-cascader-demo-custom-render", "nzTitle", "\u81EA\u5B9A\u4E49\u5DF2\u9009\u9879"], ["nzHref", "#components-cascader-demo-reactive-form", "nzTitle", "\u54CD\u5E94\u8868\u5355"], ["nzHref", "#components-cascader-demo-lazy", "nzTitle", "\u52A8\u6001\u52A0\u8F7D\u9009\u9879"], ["nzHref", "#components-cascader-demo-change-on-function", "nzTitle", "\u6307\u5B9A\u9009\u62E9"], ["nzHref", "#components-cascader-demo-modal", "nzTitle", "\u6A21\u6001\u7A97\u53E3"], ["nzHref", "#components-cascader-demo-search", "nzTitle", "\u641C\u7D22"], ["nzHref", "#components-cascader-demo-trigger-action", "nzTitle", "\u9F20\u6807\u79FB\u5165\u89E6\u53D1"], ["nzHref", "#components-cascader-demo-default-value-and-lazyload", "nzTitle", "\u9ED8\u8BA4\u503C\u4E0E\u5EF6\u8FDF\u52A0\u8F7D"], ["nzHref", "#components-cascader-demo-default-value-and-asyn-options", "nzTitle", "\u9ED8\u8BA4\u503C\u4E0E\u5F02\u6B65\u5217\u8868"], ["nzHref", "#components-cascader-demo-custom-field-names", "nzTitle", "\u81EA\u5B9A\u4E49\u5B57\u6BB5\u540D"], ["nzHref", "#components-cascader-demo-custom-template", "nzTitle", "\u81EA\u5B9A\u4E49\u9009\u62E9\u9879"], ["nzHref", "#api", "nzTitle", "API"], [1, "markdown"], [1, "subtitle"], [1, "widget"], ["href", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/cascader/doc/index.zh-CN.md", "target", "_blank", "rel", "noopener noreferrer", 1, "edit-button"], ["nz-icon", "", "nzType", "edit"], ["id", "\u4F55\u65F6\u4F7F\u7528"], ["onclick", "window.location.hash = '\u4F55\u65F6\u4F7F\u7528'", 1, "anchor"], [1, "language-ts"], [1, "token", "keyword"], [1, "token", "punctuation"], [1, "token", "string"], ["nz-icon", "", "nzType", "appstore", "nz-tooltip", "", "nzTooltipTitle", "\u5C55\u5F00\u5168\u90E8\u4EE3\u7801", 1, "code-box-expand-trigger", 3, "click"], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", 3, "nzXl", "nzSpan"], ["nzTitle", "\u57FA\u672C", "nzSelector", "nz-demo-cascader-basic", "nzGenerateCommand", "ng g ng-zorro-antd:cascader-basic <name>", "nzComponentName", "NzDemoCascaderBasicComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["demo", ""], ["intro", ""], ["nzTitle", "\u53EF\u4EE5\u81EA\u5B9A\u4E49\u663E\u793A", "nzSelector", "nz-demo-cascader-trigger", "nzGenerateCommand", "ng g ng-zorro-antd:cascader-trigger <name>", "nzComponentName", "NzDemoCascaderTriggerComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u7981\u7528\u9009\u9879", "nzSelector", "nz-demo-cascader-disabled", "nzGenerateCommand", "ng g ng-zorro-antd:cascader-disabled <name>", "nzComponentName", "NzDemoCascaderDisabledComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u5927\u5C0F", "nzSelector", "nz-demo-cascader-size", "nzGenerateCommand", "ng g ng-zorro-antd:cascader-size <name>", "nzComponentName", "NzDemoCascaderSizeComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u54CD\u5E94\u8868\u5355", "nzSelector", "nz-demo-cascader-reactive-form", "nzGenerateCommand", "ng g ng-zorro-antd:cascader-reactive-form <name>", "nzComponentName", "NzDemoCascaderReactiveFormComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u6307\u5B9A\u9009\u62E9", "nzSelector", "nz-demo-cascader-change-on-function", "nzGenerateCommand", "ng g ng-zorro-antd:cascader-change-on-function <name>", "nzComponentName", "NzDemoCascaderChangeOnFunctionComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u641C\u7D22", "nzSelector", "nz-demo-cascader-search", "nzGenerateCommand", "ng g ng-zorro-antd:cascader-search <name>", "nzComponentName", "NzDemoCascaderSearchComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u9ED8\u8BA4\u503C\u4E0E\u5EF6\u8FDF\u52A0\u8F7D", "nzSelector", "nz-demo-cascader-default-value-and-lazyload", "nzGenerateCommand", "ng g ng-zorro-antd:cascader-default-value-and-lazyload <name>", "nzComponentName", "NzDemoCascaderDefaultValueAndLazyloadComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u81EA\u5B9A\u4E49\u5B57\u6BB5\u540D", "nzSelector", "nz-demo-cascader-custom-field-names", "nzGenerateCommand", "ng g ng-zorro-antd:cascader-custom-field-names <name>", "nzComponentName", "NzDemoCascaderCustomFieldNamesComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u9ED8\u8BA4\u503C", "nzSelector", "nz-demo-cascader-default-value", "nzGenerateCommand", "ng g ng-zorro-antd:cascader-default-value <name>", "nzComponentName", "NzDemoCascaderDefaultValueComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u79FB\u5165\u5C55\u5F00", "nzSelector", "nz-demo-cascader-hover", "nzGenerateCommand", "ng g ng-zorro-antd:cascader-hover <name>", "nzComponentName", "NzDemoCascaderHoverComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u9009\u62E9\u5373\u6539\u53D8", "nzSelector", "nz-demo-cascader-change-on-select", "nzGenerateCommand", "ng g ng-zorro-antd:cascader-change-on-select <name>", "nzComponentName", "NzDemoCascaderChangeOnSelectComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u81EA\u5B9A\u4E49\u5DF2\u9009\u9879", "nzSelector", "nz-demo-cascader-custom-render", "nzGenerateCommand", "ng g ng-zorro-antd:cascader-custom-render <name>", "nzComponentName", "NzDemoCascaderCustomRenderComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u52A8\u6001\u52A0\u8F7D\u9009\u9879", "nzSelector", "nz-demo-cascader-lazy", "nzGenerateCommand", "ng g ng-zorro-antd:cascader-lazy <name>", "nzComponentName", "NzDemoCascaderLazyComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u6A21\u6001\u7A97\u53E3", "nzSelector", "nz-demo-cascader-modal", "nzGenerateCommand", "ng g ng-zorro-antd:cascader-modal <name>", "nzComponentName", "NzDemoCascaderModalComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u9F20\u6807\u79FB\u5165\u89E6\u53D1", "nzSelector", "nz-demo-cascader-trigger-action", "nzGenerateCommand", "ng g ng-zorro-antd:cascader-trigger-action <name>", "nzComponentName", "NzDemoCascaderTriggerActionComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u9ED8\u8BA4\u503C\u4E0E\u5F02\u6B65\u5217\u8868", "nzSelector", "nz-demo-cascader-default-value-and-asyn-options", "nzGenerateCommand", "ng g ng-zorro-antd:cascader-default-value-and-asyn-options <name>", "nzComponentName", "NzDemoCascaderDefaultValueAndAsynOptionsComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u81EA\u5B9A\u4E49\u9009\u62E9\u9879", "nzSelector", "nz-demo-cascader-custom-template", "nzGenerateCommand", "ng g ng-zorro-antd:cascader-custom-template <name>", "nzComponentName", "NzDemoCascaderCustomTemplateComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], [1, "markdown", "api-container"], ["id", "api"], ["onclick", "window.location.hash = 'api'", 1, "anchor"], [1, "language-html"], [1, "token", "tag"], [1, "token", "attr-name"], [1, "token", "attr-value"], ["id", "nz-cascader"], [1, "api-type-label", "component"], ["onclick", "window.location.hash = 'nz-cascader'", 1, "anchor"], ["id", "\u65B9\u6CD5"], ["onclick", "window.location.hash = '\u65B9\u6CD5'", 1, "anchor"], ["href", "https://gist.github.com/afc163/7582f35654fd03d5be7009444345ea17"]], template: function NzDemoCascaderZhComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-affix", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nz-anchor", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzClick", function NzDemoCascaderZhComponent_Template_nz_anchor_nzClick_2_listener($event) { return ctx.goLink($event); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "nz-link", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "nz-link", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "nz-link", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "nz-link", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "nz-link", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "nz-link", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "nz-link", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "section", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Cascader");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\u7EA7\u8054\u9009\u62E9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "section", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\u7EA7\u8054\u9009\u62E9\u6846\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h2", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "\u4F55\u65F6\u4F7F\u7528");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "\u9700\u8981\u4ECE\u4E00\u7EC4\u76F8\u5173\u8054\u7684\u6570\u636E\u96C6\u5408\u8FDB\u884C\u9009\u62E9\uFF0C\u4F8B\u5982\u7701\u5E02\u533A\uFF0C\u516C\u53F8\u5C42\u7EA7\uFF0C\u4E8B\u7269\u5206\u7C7B\u7B49\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "\u4ECE\u4E00\u4E2A\u8F83\u5927\u7684\u6570\u636E\u96C6\u5408\u4E2D\u8FDB\u884C\u9009\u62E9\u65F6\uFF0C\u7528\u591A\u7EA7\u5206\u7C7B\u8FDB\u884C\u5206\u9694\uFF0C\u65B9\u4FBF\u9009\u62E9\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "\u6BD4\u8D77 Select \u7EC4\u4EF6\uFF0C\u53EF\u4EE5\u5728\u540C\u4E00\u4E2A\u6D6E\u5C42\u4E2D\u5B8C\u6210\u9009\u62E9\uFF0C\u6709\u8F83\u597D\u7684\u4F53\u9A8C\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "pre", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "import");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "{");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " NzCascaderModule ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "from");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "'ng-zorro-antd/cascader'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "\u4EE3\u7801\u6F14\u793A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoCascaderZhComponent_Template_i_click_66_listener() { return ctx.expandAllCode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "nz-code-box", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "nz-demo-cascader-basic", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "\u7701\u5E02\u533A\u7EA7\u8054\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "nz-code-box", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "nz-demo-cascader-trigger", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "\u5207\u6362\u6309\u94AE\u548C\u7ED3\u679C\u5206\u5F00\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "nz-code-box", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "nz-demo-cascader-disabled", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "\u901A\u8FC7\u6307\u5B9A options \u91CC\u7684 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "disabled");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, " \u5B57\u6BB5\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "nz-code-box", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "nz-demo-cascader-size", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "\u4E0D\u540C\u5927\u5C0F\u7684\u7EA7\u8054\u9009\u62E9\u5668\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "nz-code-box", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "nz-demo-cascader-reactive-form", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "\u901A\u8FC7\u8868\u5355\u7684");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "\u91CD\u7F6E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "\u529F\u80FD\u6E05\u7A7A\u5DF2\u9009\u62E9\u7684\u503C\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "nz-code-box", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "nz-demo-cascader-change-on-function", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "\u901A\u8FC7\u51FD\u6570\u6765\u5224\u65AD\u9009\u9879\u662F\u5426\u53EF\u4EE5\u9009\u62E9\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "nz-code-box", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "nz-demo-cascader-search", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "\u53EF\u4EE5\u76F4\u63A5\u641C\u7D22\u9009\u9879\u5E76\u9009\u62E9\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "nz-code-box", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "nz-demo-cascader-default-value-and-lazyload", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "\u9ED8\u8BA4\u503C\u901A\u8FC7\u6570\u7EC4\u7684\u65B9\u5F0F\u6307\u5B9A\uFF0C\u4F46");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "nzOptions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "\u6CA1\u6709\u8D4B\u503C\uFF0C\u901A\u8FC7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "nzLoadData");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "\u51FD\u6570\u5EF6\u8FDF\u52A0\u8F7D\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "nz-code-box", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "nz-demo-cascader-custom-field-names", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "\u81EA\u5B9A\u4E49\u5B57\u6BB5\u540D\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "nz-code-box", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "nz-demo-cascader-default-value", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "\u9ED8\u8BA4\u503C\u901A\u8FC7\u6570\u7EC4\u7684\u65B9\u5F0F\u6307\u5B9A\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "nz-code-box", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "nz-demo-cascader-hover", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "\u901A\u8FC7\u79FB\u5165\u5C55\u5F00\u4E0B\u7EA7\u83DC\u5355\uFF0C\u70B9\u51FB\u5B8C\u6210\u9009\u62E9\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "nz-code-box", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "nz-demo-cascader-change-on-select", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "\u8FD9\u79CD\u4EA4\u4E92\u5141\u8BB8\u53EA\u9009\u4E2D\u7236\u7EA7\u9009\u9879\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "nz-code-box", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](143, "nz-demo-cascader-custom-render", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "\u4F8B\u5982\u7ED9\u6700\u540E\u4E00\u9879\u52A0\u4E0A\u90AE\u7F16\u94FE\u63A5\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "nz-code-box", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](148, "nz-demo-cascader-lazy", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "\u4F7F\u7528 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "nzLoadData");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, " \u5B9E\u73B0\u52A8\u6001\u52A0\u8F7D\u9009\u9879\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "nz-code-box", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](156, "nz-demo-cascader-modal", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "\u5728\u6A21\u6001\u7A97\u53E3\u4E2D\u4F7F\u7528\u7EA7\u8054\u63A7\u4EF6\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "nz-code-box", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](161, "nz-demo-cascader-trigger-action", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "\u9F20\u6807\u79FB\u5165\u89E6\u53D1\u663E\u793A\u83DC\u5355\uFF0C\u79FB\u51FA\u9690\u85CF\u83DC\u5355\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "nz-code-box", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](166, "nz-demo-cascader-default-value-and-asyn-options", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "\u9ED8\u8BA4\u503C\u901A\u8FC7\u6570\u7EC4\u7684\u65B9\u5F0F\u6307\u5B9A\uFF0C\u4F46");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "nzOptions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, "\u901A\u8FC7\u5F02\u6B65\u52A0\u8F7D\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "nz-code-box", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](174, "nz-demo-cascader-custom-template", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "\u81EA\u5B9A\u4E49\u9009\u9879\u7684\u6A21\u677F\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "section", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "h2", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, "API");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "a", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "pre", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "span", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "span", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, "nz-cascader");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "span", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, "[nzOptions]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "span", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, "options");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "span", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, "[(ngModel)]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "span", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, "values");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](212, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](214, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "span", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "span", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](219, "nz-cascader");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](221, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "h3", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, "nz-cascader");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "label", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](226, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "a", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](228, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](233, "\u53C2\u6570");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](235, "\u8BF4\u660E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](237, "\u7C7B\u578B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](239, "\u9ED8\u8BA4\u503C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](241, "\u652F\u6301\u5168\u5C40\u914D\u7F6E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](246, "[ngModel]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](248, "\u6307\u5B9A\u9009\u4E2D\u9879");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](251, "any[]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](253, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](254, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](258, "[nzAllowClear]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](260, "\u662F\u5426\u652F\u6301\u6E05\u9664");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](267, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](271, "[nzAutoFocus]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](273, "\u662F\u5426\u81EA\u52A8\u805A\u7126\uFF0C\u5F53\u5B58\u5728\u8F93\u5165\u6846\u65F6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](276, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](279, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](280, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](284, "[nzChangeOn]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](286, "\u70B9\u51FB\u7236\u7EA7\u83DC\u5355\u9009\u9879\u65F6\uFF0C\u53EF\u901A\u8FC7\u8BE5\u51FD\u6570\u5224\u65AD\u662F\u5426\u5141\u8BB8\u503C\u7684\u53D8\u5316");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](289, "(option: any, index: number) => boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](291, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](292, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](295, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](296, "[nzChangeOnSelect]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](297, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](298, "\u5F53\u6B64\u9879\u4E3A true \u65F6\uFF0C\u70B9\u9009\u6BCF\u7EA7\u83DC\u5355\u9009\u9879\u503C\u90FD\u4F1A\u53D1\u751F\u53D8\u5316\uFF0C\u5177\u4F53\u89C1\u4E0A\u9762\u7684\u6F14\u793A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](301, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](303, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](304, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](305, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](306, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](307, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](308, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](309, "[nzColumnClassName]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](310, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](311, "\u81EA\u5B9A\u4E49\u6D6E\u5C42\u5217\u7C7B\u540D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](312, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](313, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](314, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](315, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](316, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](317, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](318, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](319, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](320, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](321, "[nzDisabled]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](322, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](323, "\u7981\u7528");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](324, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](325, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](326, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](327, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](328, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](329, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](330, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](331, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](332, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](333, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](334, "[nzExpandTrigger]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](335, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](336, "\u6B21\u7EA7\u83DC\u5355\u7684\u5C55\u5F00\u65B9\u5F0F\uFF0C\u53EF\u9009 'click' \u548C 'hover'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](337, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](338, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](339, "'click'|'hover'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](340, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](341, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](342, "'click'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](343, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](344, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](345, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](346, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](347, "[nzMenuClassName]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](348, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](349, "\u81EA\u5B9A\u4E49\u6D6E\u5C42\u7C7B\u540D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](350, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](351, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](352, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](353, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](354, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](355, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](356, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](357, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](358, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](359, "[nzMenuStyle]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](360, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](361, "\u81EA\u5B9A\u4E49\u6D6E\u5C42\u6837\u5F0F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](362, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](363, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](364, "object");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](365, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](366, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](367, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](368, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](369, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](370, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](371, "[nzNotFoundContent]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](372, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](373, "\u5F53\u4E0B\u62C9\u5217\u8868\u4E3A\u7A7A\u65F6\u663E\u793A\u7684\u5185\u5BB9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](374, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](375, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](376, "string|TemplateRef<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](377, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](378, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](379, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](380, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](381, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](382, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](383, "[nzLabelProperty]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](384, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](385, "\u9009\u9879\u7684\u663E\u793A\u503C\u7684\u5C5E\u6027\u540D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](386, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](387, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](388, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](389, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](390, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](391, "'label'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](392, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](393, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](394, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](395, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](396, "[nzLabelRender]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](397, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](398, "\u9009\u62E9\u540E\u5C55\u793A\u7684\u6E32\u67D3\u6A21\u677F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](399, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](400, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](401, "TemplateRef<any>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](402, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](403, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](404, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](405, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](406, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](407, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](408, "[nzOptionRender]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](409, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](410, "\u9009\u9879\u7684\u6E32\u67D3\u6A21\u677F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](411, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](412, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](413, "TemplateRef<{ $implicit: NzCascaderOption, index: number }>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](414, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](415, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](416, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](417, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](418, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](419, "[nzLoadData]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](420, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](421, "\u7528\u4E8E\u52A8\u6001\u52A0\u8F7D\u9009\u9879\u3002\u5982\u679C\u63D0\u4F9B\u4E86");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](422, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](423, "ngModel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](424, "\u521D\u59CB\u503C\uFF0C\u4E14\u672A\u63D0\u4F9B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](425, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](426, "nzOptions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](427, "\u503C\uFF0C\u5219\u4F1A\u7ACB\u5373\u89E6\u53D1\u52A8\u6001\u52A0\u8F7D\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](428, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](429, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](430, "(option: any, index?: index) => PromiseLike<any>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](431, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](432, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](433, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](434, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](435, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](436, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](437, "[nzOptions]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](438, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](439, "\u53EF\u9009\u9879\u6570\u636E\u6E90");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](440, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](441, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](442, "object[]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](443, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](444, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](445, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](446, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](447, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](448, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](449, "[nzPlaceHolder]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](450, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](451, "\u8F93\u5165\u6846\u5360\u4F4D\u6587\u672C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](452, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](453, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](454, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](455, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](456, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](457, "'\u8BF7\u9009\u62E9'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](458, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](459, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](460, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](461, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](462, "[nzShowArrow]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](463, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](464, "\u662F\u5426\u663E\u793A\u7BAD\u5934");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](465, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](466, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](467, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](468, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](469, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](470, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](471, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](472, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](473, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](474, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](475, "[nzShowInput]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](476, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](477, "\u663E\u793A\u8F93\u5165\u6846");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](478, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](479, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](480, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](481, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](482, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](483, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](484, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](485, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](486, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](487, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](488, "[nzShowSearch]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](489, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](490, "\u662F\u5426\u652F\u6301\u641C\u7D22\uFF0C\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u5BF9 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](491, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](492, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](493, " \u8FDB\u884C\u5168\u5339\u914D\u641C\u7D22\uFF0C\u4E0D\u80FD\u548C ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](494, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](495, "[nzLoadData]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](496, " \u540C\u65F6\u4F7F\u7528");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](497, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](498, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](499, "boolean|NzShowSearchOptions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](500, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](501, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](502, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](503, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](504, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](505, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](506, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](507, "[nzSize]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](508, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](509, "\u8F93\u5165\u6846\u5927\u5C0F\uFF0C\u53EF\u9009 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](510, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](511, "large");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](512, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](513, "default");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](514, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](515, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](516, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](517, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](518, "'large'|'small'|'default'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](519, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](520, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](521, "'default'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](522, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](523, "\u2705");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](524, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](525, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](526, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](527, "[nzValueProperty]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](528, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](529, "\u9009\u9879\u7684\u5B9E\u9645\u503C\u7684\u5C5E\u6027\u540D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](530, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](531, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](532, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](533, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](534, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](535, "'value'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](536, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](537, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](538, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](539, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](540, "(ngModelChange)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](541, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](542, "\u503C\u53D1\u751F\u53D8\u5316\u65F6\u89E6\u53D1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](543, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](544, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](545, "EventEmitter<any[]>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](546, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](547, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](548, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](549, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](550, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](551, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](552, "(nzVisibleChange)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](553, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](554, "\u83DC\u5355\u6D6E\u5C42\u7684\u663E\u793A/\u9690\u85CF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](555, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](556, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](557, "EventEmitter<boolean>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](558, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](559, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](560, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](561, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](562, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](563, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](564, "(nzSelectionChange)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](565, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](566, "\u503C\u53D1\u751F\u53D8\u5316\u65F6\u89E6\u53D1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](567, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](568, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](569, "EventEmitter<NzCascaderOption[]>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](570, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](571, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](572, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](573, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](574, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](575, "nzShowSearch");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](576, " \u4E3A\u5BF9\u8C61\u65F6\u9700\u9075\u5B88 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](577, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](578, "NzShowSearchOptions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](579, " \u63A5\u53E3\uFF1A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](580, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](581, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](582, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](583, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](584, "\u53C2\u6570");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](585, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](586, "\u8BF4\u660E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](587, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](588, "\u7C7B\u578B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](589, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](590, "\u9ED8\u8BA4\u503C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](591, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](592, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](593, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](594, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](595, "filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](596, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](597, "\u53EF\u9009\uFF0C\u9009\u62E9\u662F\u5426\u4FDD\u7559\u9009\u9879\u7684\u8FC7\u6EE4\u51FD\u6570\uFF0C\u6BCF\u7EA7\u83DC\u5355\u7684\u9009\u9879\u90FD\u4F1A\u88AB\u5339\u914D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](598, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](599, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](600, "(inputValue: string, path: NzCascaderOption[]): boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](601, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](602, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](603, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](604, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](605, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](606, "sorter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](607, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](608, "\u53EF\u9009\uFF0C\u6309\u7167\u5230\u6BCF\u4E2A\u6700\u7EC8\u9009\u9879\u7684\u8DEF\u5F84\u8FDB\u884C\u6392\u5E8F\uFF0C\u9ED8\u8BA4\u6309\u7167\u539F\u59CB\u6570\u636E\u7684\u987A\u5E8F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](609, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](610, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](611, "(a: NzCascaderOption[], b: NzCascaderOption[], inputValue: string): number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](612, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](613, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](614, "h4", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](615, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](616, "\u65B9\u6CD5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](617, "a", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](618, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](619, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](620, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](621, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](622, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](623, "\u540D\u79F0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](624, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](625, "\u63CF\u8FF0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](626, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](627, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](628, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](629, "blur()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](630, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](631, "\u79FB\u9664\u7126\u70B9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](632, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](633, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](634, "focus()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](635, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](636, "\u83B7\u53D6\u7126\u70B9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](637, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](638, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](639, "closeMenu()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](640, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](641, "\u9690\u85CF\u83DC\u5355");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](642, "blockquote");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](643, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](644, "\u6CE8\u610F\uFF0C\u5982\u679C\u9700\u8981\u83B7\u5F97\u4E2D\u56FD\u7701\u5E02\u533A\u6570\u636E\uFF0C\u53EF\u4EE5\u53C2\u8003 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](645, "a", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](646, "china-division");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](647, "\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzOffsetTop", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzAffix", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzGutter", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzXl", 12)("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-cascader-demo-basic")("nzLink", "components-cascader-demo-basic")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/cascader/demo/basic.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-cascader-demo-trigger")("nzLink", "components-cascader-demo-trigger")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/cascader/demo/trigger.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-cascader-demo-disabled")("nzLink", "components-cascader-demo-disabled")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/cascader/demo/disabled.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-cascader-demo-size")("nzLink", "components-cascader-demo-size")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/cascader/demo/size.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-cascader-demo-reactive-form")("nzLink", "components-cascader-demo-reactive-form")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/cascader/demo/reactive-form.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-cascader-demo-change-on-function")("nzLink", "components-cascader-demo-change-on-function")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/cascader/demo/change-on-function.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-cascader-demo-search")("nzLink", "components-cascader-demo-search")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/cascader/demo/search.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-cascader-demo-default-value-and-lazyload")("nzLink", "components-cascader-demo-default-value-and-lazyload")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/cascader/demo/default-value-and-lazyload.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-cascader-demo-custom-field-names")("nzLink", "components-cascader-demo-custom-field-names")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/cascader/demo/custom-field-names.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzXl", 12)("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-cascader-demo-default-value")("nzLink", "components-cascader-demo-default-value")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/cascader/demo/default-value.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-cascader-demo-hover")("nzLink", "components-cascader-demo-hover")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/cascader/demo/hover.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-cascader-demo-change-on-select")("nzLink", "components-cascader-demo-change-on-select")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/cascader/demo/change-on-select.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-cascader-demo-custom-render")("nzLink", "components-cascader-demo-custom-render")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/cascader/demo/custom-render.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-cascader-demo-lazy")("nzLink", "components-cascader-demo-lazy")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/cascader/demo/lazy.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-cascader-demo-modal")("nzLink", "components-cascader-demo-modal")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/cascader/demo/modal.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-cascader-demo-trigger-action")("nzLink", "components-cascader-demo-trigger-action")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/cascader/demo/trigger-action.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-cascader-demo-default-value-and-asyn-options")("nzLink", "components-cascader-demo-default-value-and-asyn-options")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/cascader/demo/default-value-and-asyn-options.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-cascader-demo-custom-template")("nzLink", "components-cascader-demo-custom-template")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/cascader/demo/custom-template.md");
    } }, directives: [ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_2__["NzAffixComponent"], ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_3__["NzAnchorComponent"], ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_3__["NzAnchorLinkComponent"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__["ɵNzTransitionPatchDirective"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_5__["NzTooltipDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__["NzRowDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__["NzColDirective"], _share_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_1__["NzCodeBoxComponent"], _basic__WEBPACK_IMPORTED_MODULE_7__["NzDemoCascaderBasicComponent"], _trigger__WEBPACK_IMPORTED_MODULE_8__["NzDemoCascaderTriggerComponent"], _disabled__WEBPACK_IMPORTED_MODULE_9__["NzDemoCascaderDisabledComponent"], _size__WEBPACK_IMPORTED_MODULE_10__["NzDemoCascaderSizeComponent"], _reactive_form__WEBPACK_IMPORTED_MODULE_11__["NzDemoCascaderReactiveFormComponent"], _change_on_function__WEBPACK_IMPORTED_MODULE_12__["NzDemoCascaderChangeOnFunctionComponent"], _search__WEBPACK_IMPORTED_MODULE_13__["NzDemoCascaderSearchComponent"], _default_value_and_lazyload__WEBPACK_IMPORTED_MODULE_14__["NzDemoCascaderDefaultValueAndLazyloadComponent"], _custom_field_names__WEBPACK_IMPORTED_MODULE_15__["NzDemoCascaderCustomFieldNamesComponent"], _default_value__WEBPACK_IMPORTED_MODULE_16__["NzDemoCascaderDefaultValueComponent"], _hover__WEBPACK_IMPORTED_MODULE_17__["NzDemoCascaderHoverComponent"], _change_on_select__WEBPACK_IMPORTED_MODULE_18__["NzDemoCascaderChangeOnSelectComponent"], _custom_render__WEBPACK_IMPORTED_MODULE_19__["NzDemoCascaderCustomRenderComponent"], _lazy__WEBPACK_IMPORTED_MODULE_20__["NzDemoCascaderLazyComponent"], _modal__WEBPACK_IMPORTED_MODULE_21__["NzDemoCascaderModalComponent"], _trigger_action__WEBPACK_IMPORTED_MODULE_22__["NzDemoCascaderTriggerActionComponent"], _default_value_and_asyn_options__WEBPACK_IMPORTED_MODULE_23__["NzDemoCascaderDefaultValueAndAsynOptionsComponent"], _custom_template__WEBPACK_IMPORTED_MODULE_24__["NzDemoCascaderCustomTemplateComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoCascaderZhComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-demo-cascader',
                preserveWhitespaces: false,
                templateUrl: './zh.html'
            }]
    }], null, { codeBoxes: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"],
            args: [_share_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_1__["NzCodeBoxComponent"]]
        }] }); })();


/***/ })

};;
//# sourceMappingURL=cascader-index-module.js.map