exports.ids = ["select-index-module"];
exports.modules = {

/***/ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-divider.js":
/*!****************************************************************!*\
  !*** ./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-divider.js ***!
  \****************************************************************/
/*! exports provided: NzDividerComponent, NzDividerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDividerComponent", function() { return NzDividerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDividerModule", function() { return NzDividerModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/core/util */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-util.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/outlet */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-outlet.js");






/**
 * @fileoverview added by tsickle
 * Generated from: divider.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */




function NzDividerComponent_span_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.nzText);
} }
function NzDividerComponent_span_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NzDividerComponent_span_0_ng_container_1_Template, 2, 1, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r0.nzText);
} }
class NzDividerComponent {
    constructor() {
        this.nzType = 'horizontal';
        this.nzOrientation = 'center';
        this.nzDashed = false;
    }
}
NzDividerComponent.ɵfac = function NzDividerComponent_Factory(t) { return new (t || NzDividerComponent)(); };
NzDividerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NzDividerComponent, selectors: [["nz-divider"]], hostVars: 14, hostBindings: function NzDividerComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("ant-divider", true)("ant-divider-horizontal", ctx.nzType === "horizontal")("ant-divider-vertical", ctx.nzType === "vertical")("ant-divider-with-text-left", ctx.nzText && ctx.nzOrientation === "left")("ant-divider-with-text-right", ctx.nzText && ctx.nzOrientation === "right")("ant-divider-with-text-center", ctx.nzText && ctx.nzOrientation === "center")("ant-divider-dashed", ctx.nzDashed);
    } }, inputs: { nzType: "nzType", nzOrientation: "nzOrientation", nzDashed: "nzDashed", nzText: "nzText" }, exportAs: ["nzDivider"], decls: 1, vars: 1, consts: [["class", "ant-divider-inner-text", 4, "ngIf"], [1, "ant-divider-inner-text"], [4, "nzStringTemplateOutlet"]], template: function NzDividerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, NzDividerComponent_span_0_Template, 2, 1, "span", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.nzText);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_4__["NzStringTemplateOutletDirective"]], encapsulation: 2, changeDetection: 0 });
NzDividerComponent.propDecorators = {
    nzText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    nzType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    nzOrientation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    nzDashed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_2__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], NzDividerComponent.prototype, "nzDashed", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NzDividerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'nz-divider',
                exportAs: 'nzDivider',
                preserveWhitespaces: false,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                template: `
    <span *ngIf="nzText" class="ant-divider-inner-text">
      <ng-container *nzStringTemplateOutlet="nzText">{{ nzText }}</ng-container>
    </span>
  `,
                host: {
                    '[class.ant-divider]': 'true',
                    '[class.ant-divider-horizontal]': `nzType === 'horizontal'`,
                    '[class.ant-divider-vertical]': `nzType === 'vertical'`,
                    '[class.ant-divider-with-text-left]': `nzText && nzOrientation === 'left'`,
                    '[class.ant-divider-with-text-right]': `nzText && nzOrientation === 'right'`,
                    '[class.ant-divider-with-text-center]': `nzText && nzOrientation === 'center'`,
                    '[class.ant-divider-dashed]': `nzDashed`
                }
            }]
    }], function () { return []; }, { nzType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], nzOrientation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], nzDashed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], nzText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: divider.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzDividerModule {
}
NzDividerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: NzDividerModule });
NzDividerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function NzDividerModule_Factory(t) { return new (t || NzDividerModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_4__["NzOutletModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NzDividerModule, { declarations: function () { return [NzDividerComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_4__["NzOutletModule"]]; }, exports: function () { return [NzDividerComponent]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NzDividerModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_4__["NzOutletModule"]],
                declarations: [NzDividerComponent],
                exports: [NzDividerComponent]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ng-zorro-antd-divider.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ng-zorro-antd-divider.js.map

/***/ }),

/***/ "./site/doc/app/select/automatic-tokenization.ts":
/*!*******************************************************!*\
  !*** ./site/doc/app/select/automatic-tokenization.ts ***!
  \*******************************************************/
/*! exports provided: NzDemoSelectAutomaticTokenizationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoSelectAutomaticTokenizationComponent", function() { return NzDemoSelectAutomaticTokenizationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/select */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-select.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function NzDemoSelectAutomaticTokenizationComponent_nz_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-option", 2);
} if (rf & 2) {
    const option_r473 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzLabel", option_r473.label)("nzValue", option_r473.value);
} }
const _c0 = function () { return [","]; };
class NzDemoSelectAutomaticTokenizationComponent {
    constructor() {
        this.listOfOption = [];
        this.listOfTagOptions = [];
    }
    ngOnInit() {
        const children = [];
        for (let i = 10; i < 36; i++) {
            children.push({ label: i.toString(36) + i, value: i.toString(36) + i });
        }
        this.listOfOption = children;
    }
}
/** @nocollapse */ NzDemoSelectAutomaticTokenizationComponent.ɵfac = function NzDemoSelectAutomaticTokenizationComponent_Factory(t) { return new (t || NzDemoSelectAutomaticTokenizationComponent)(); };
/** @nocollapse */ NzDemoSelectAutomaticTokenizationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoSelectAutomaticTokenizationComponent, selectors: [["nz-demo-select-automatic-tokenization"]], decls: 2, vars: 4, consts: [["nzMode", "tags", "nzPlaceHolder", "automatic tokenization", 3, "ngModel", "nzTokenSeparators", "ngModelChange"], [3, "nzLabel", "nzValue", 4, "ngFor", "ngForOf"], [3, "nzLabel", "nzValue"]], template: function NzDemoSelectAutomaticTokenizationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-select", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoSelectAutomaticTokenizationComponent_Template_nz_select_ngModelChange_0_listener($event) { return ctx.listOfTagOptions = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzDemoSelectAutomaticTokenizationComponent_nz_option_1_Template, 1, 2, "nz-option", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.listOfTagOptions)("nzTokenSeparators", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listOfOption);
    } }, directives: [ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_1__["NzSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_1__["NzOptionComponent"]], styles: ["nz-select[_ngcontent-%COMP%] {\n        width: 100%;\n      }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoSelectAutomaticTokenizationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-demo-select-automatic-tokenization',
                template: `
    <nz-select [(ngModel)]="listOfTagOptions" nzMode="tags" [nzTokenSeparators]="[',']" nzPlaceHolder="automatic tokenization">
      <nz-option *ngFor="let option of listOfOption" [nzLabel]="option.label" [nzValue]="option.value"></nz-option>
    </nz-select>
  `,
                styles: [
                    `
      nz-select {
        width: 100%;
      }
    `
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./site/doc/app/select/basic.ts":
/*!**************************************!*\
  !*** ./site/doc/app/select/basic.ts ***!
  \**************************************/
/*! exports provided: NzDemoSelectBasicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoSelectBasicComponent", function() { return NzDemoSelectBasicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/select */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-select.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");




class NzDemoSelectBasicComponent {
}
/** @nocollapse */ NzDemoSelectBasicComponent.ɵfac = function NzDemoSelectBasicComponent_Factory(t) { return new (t || NzDemoSelectBasicComponent)(); };
/** @nocollapse */ NzDemoSelectBasicComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoSelectBasicComponent, selectors: [["nz-demo-select-basic"]], decls: 10, vars: 0, consts: [["ngModel", "lucy"], ["nzValue", "jack", "nzLabel", "Jack"], ["nzValue", "lucy", "nzLabel", "Lucy"], ["nzValue", "disabled", "nzLabel", "Disabled", "nzDisabled", ""], ["ngModel", "lucy", "nzDisabled", ""], ["ngModel", "lucy", "nzLoading", ""], ["ngModel", "lucy", "nzAllowClear", "", "nzPlaceHolder", "Choose"]], template: function NzDemoSelectBasicComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-select", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "nz-option", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "nz-option", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "nz-option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nz-select", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "nz-option", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nz-select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "nz-option", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nz-select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "nz-option", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_1__["NzSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_1__["NzOptionComponent"]], styles: ["nz-select[_ngcontent-%COMP%] {\n        margin: 0 8px 10px 0;\n        width: 120px;\n      }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoSelectBasicComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-demo-select-basic',
                template: `
    <nz-select ngModel="lucy">
      <nz-option nzValue="jack" nzLabel="Jack"></nz-option>
      <nz-option nzValue="lucy" nzLabel="Lucy"></nz-option>
      <nz-option nzValue="disabled" nzLabel="Disabled" nzDisabled></nz-option>
    </nz-select>
    <nz-select ngModel="lucy" nzDisabled>
      <nz-option nzValue="lucy" nzLabel="Lucy"></nz-option>
    </nz-select>
    <nz-select ngModel="lucy" nzLoading>
      <nz-option nzValue="lucy" nzLabel="Lucy"></nz-option>
    </nz-select>
    <nz-select ngModel="lucy" nzAllowClear nzPlaceHolder="Choose">
      <nz-option nzValue="lucy" nzLabel="Lucy"></nz-option>
    </nz-select>
  `,
                styles: [
                    `
      nz-select {
        margin: 0 8px 10px 0;
        width: 120px;
      }
    `
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./site/doc/app/select/big-data.ts":
/*!*****************************************!*\
  !*** ./site/doc/app/select/big-data.ts ***!
  \*****************************************/
/*! exports provided: NzDemoSelectBigDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoSelectBigDataComponent", function() { return NzDemoSelectBigDataComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/select */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-select.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function NzDemoSelectBigDataComponent_nz_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-option", 2);
} if (rf & 2) {
    const item_r475 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzLabel", item_r475)("nzValue", item_r475);
} }
class NzDemoSelectBigDataComponent {
    constructor() {
        this.listOfOption = [];
        this.listOfSelectedValue = ['a10', 'c12'];
    }
    ngOnInit() {
        const children = [];
        for (let i = 10; i < 10000; i++) {
            children.push(`${i.toString(36)}${i}`);
        }
        this.listOfOption = children;
    }
}
/** @nocollapse */ NzDemoSelectBigDataComponent.ɵfac = function NzDemoSelectBigDataComponent_Factory(t) { return new (t || NzDemoSelectBigDataComponent)(); };
/** @nocollapse */ NzDemoSelectBigDataComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoSelectBigDataComponent, selectors: [["nz-demo-select-big-data"]], decls: 2, vars: 2, consts: [["nzMode", "multiple", "nzPlaceHolder", "Please select", 3, "ngModel", "ngModelChange"], [3, "nzLabel", "nzValue", 4, "ngFor", "ngForOf"], [3, "nzLabel", "nzValue"]], template: function NzDemoSelectBigDataComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-select", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoSelectBigDataComponent_Template_nz_select_ngModelChange_0_listener($event) { return ctx.listOfSelectedValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzDemoSelectBigDataComponent_nz_option_1_Template, 1, 2, "nz-option", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.listOfSelectedValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listOfOption);
    } }, directives: [ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_1__["NzSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_1__["NzOptionComponent"]], styles: ["nz-select[_ngcontent-%COMP%] {\n        width: 100%;\n      }"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoSelectBigDataComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-demo-select-big-data',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                template: `
    <nz-select nzMode="multiple" nzPlaceHolder="Please select" [(ngModel)]="listOfSelectedValue">
      <nz-option *ngFor="let item of listOfOption" [nzLabel]="item" [nzValue]="item"></nz-option>
    </nz-select>
  `,
                styles: [
                    `
      nz-select {
        width: 100%;
      }
    `
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./site/doc/app/select/border-less.ts":
/*!********************************************!*\
  !*** ./site/doc/app/select/border-less.ts ***!
  \********************************************/
/*! exports provided: NzDemoSelectBorderLessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoSelectBorderLessComponent", function() { return NzDemoSelectBorderLessComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/select */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-select.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");




class NzDemoSelectBorderLessComponent {
}
/** @nocollapse */ NzDemoSelectBorderLessComponent.ɵfac = function NzDemoSelectBorderLessComponent_Factory(t) { return new (t || NzDemoSelectBorderLessComponent)(); };
/** @nocollapse */ NzDemoSelectBorderLessComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoSelectBorderLessComponent, selectors: [["nz-demo-select-border-less"]], decls: 6, vars: 0, consts: [["ngModel", "lucy", "nzBorderless", ""], ["nzValue", "jack", "nzLabel", "Jack"], ["nzValue", "lucy", "nzLabel", "Lucy"], ["nzValue", "disabled", "nzLabel", "Disabled", "nzDisabled", ""], ["ngModel", "lucy", "nzDisabled", "", "nzBorderless", ""]], template: function NzDemoSelectBorderLessComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-select", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "nz-option", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "nz-option", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "nz-option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nz-select", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "nz-option", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_1__["NzSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_1__["NzOptionComponent"]], styles: ["nz-select[_ngcontent-%COMP%] {\n        margin: 0 8px 10px 0;\n        width: 120px;\n      }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoSelectBorderLessComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-demo-select-border-less',
                template: `
    <nz-select ngModel="lucy" nzBorderless>
      <nz-option nzValue="jack" nzLabel="Jack"></nz-option>
      <nz-option nzValue="lucy" nzLabel="Lucy"></nz-option>
      <nz-option nzValue="disabled" nzLabel="Disabled" nzDisabled></nz-option>
    </nz-select>
    <nz-select ngModel="lucy" nzDisabled nzBorderless>
      <nz-option nzValue="lucy" nzLabel="Lucy"></nz-option>
    </nz-select>
  `,
                styles: [
                    `
      nz-select {
        margin: 0 8px 10px 0;
        width: 120px;
      }
    `
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./site/doc/app/select/coordinate.ts":
/*!*******************************************!*\
  !*** ./site/doc/app/select/coordinate.ts ***!
  \*******************************************/
/*! exports provided: NzDemoSelectCoordinateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoSelectCoordinateComponent", function() { return NzDemoSelectCoordinateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/select */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-select.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function NzDemoSelectCoordinateComponent_nz_option_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-option", 2);
} if (rf & 2) {
    const p_r478 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", p_r478)("nzLabel", p_r478);
} }
function NzDemoSelectCoordinateComponent_nz_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-option", 2);
} if (rf & 2) {
    const c_r479 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", c_r479)("nzLabel", c_r479);
} }
class NzDemoSelectCoordinateComponent {
    constructor() {
        this.selectedProvince = 'Zhejiang';
        this.selectedCity = 'Hangzhou';
        this.provinceData = ['Zhejiang', 'Jiangsu'];
        this.cityData = {
            Zhejiang: ['Hangzhou', 'Ningbo', 'Wenzhou'],
            Jiangsu: ['Nanjing', 'Suzhou', 'Zhenjiang']
        };
    }
    provinceChange(value) {
        this.selectedCity = this.cityData[value][0];
    }
}
/** @nocollapse */ NzDemoSelectCoordinateComponent.ɵfac = function NzDemoSelectCoordinateComponent_Factory(t) { return new (t || NzDemoSelectCoordinateComponent)(); };
/** @nocollapse */ NzDemoSelectCoordinateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoSelectCoordinateComponent, selectors: [["nz-demo-select-coordinate"]], decls: 5, vars: 4, consts: [[3, "ngModel", "ngModelChange"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], [3, "nzValue", "nzLabel"]], template: function NzDemoSelectCoordinateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-select", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoSelectCoordinateComponent_Template_nz_select_ngModelChange_1_listener($event) { return ctx.selectedProvince = $event; })("ngModelChange", function NzDemoSelectCoordinateComponent_Template_nz_select_ngModelChange_1_listener($event) { return ctx.provinceChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzDemoSelectCoordinateComponent_nz_option_2_Template, 1, 2, "nz-option", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nz-select", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoSelectCoordinateComponent_Template_nz_select_ngModelChange_3_listener($event) { return ctx.selectedCity = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NzDemoSelectCoordinateComponent_nz_option_4_Template, 1, 2, "nz-option", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedProvince);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.provinceData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedCity);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cityData[ctx.selectedProvince]);
    } }, directives: [ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_1__["NzSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_1__["NzOptionComponent"]], styles: ["nz-select[_ngcontent-%COMP%] {\n        margin-right: 8px;\n        width: 120px;\n      }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoSelectCoordinateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-demo-select-coordinate',
                template: `
    <div>
      <nz-select [(ngModel)]="selectedProvince" (ngModelChange)="provinceChange($event)">
        <nz-option *ngFor="let p of provinceData" [nzValue]="p" [nzLabel]="p"></nz-option>
      </nz-select>
      <nz-select [(ngModel)]="selectedCity">
        <nz-option *ngFor="let c of cityData[selectedProvince]" [nzValue]="c" [nzLabel]="c"></nz-option>
      </nz-select>
    </div>
  `,
                styles: [
                    `
      nz-select {
        margin-right: 8px;
        width: 120px;
      }
    `
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./site/doc/app/select/custom-content.ts":
/*!***********************************************!*\
  !*** ./site/doc/app/select/custom-content.ts ***!
  \***********************************************/
/*! exports provided: NzDemoSelectCustomContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoSelectCustomContentComponent", function() { return NzDemoSelectCustomContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/select */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-select.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/icon */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-icon.js");





class NzDemoSelectCustomContentComponent {
    constructor() {
        this.selectedOS = null;
    }
}
/** @nocollapse */ NzDemoSelectCustomContentComponent.ɵfac = function NzDemoSelectCustomContentComponent_Factory(t) { return new (t || NzDemoSelectCustomContentComponent)(); };
/** @nocollapse */ NzDemoSelectCustomContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoSelectCustomContentComponent, selectors: [["nz-demo-select-custom-content"]], decls: 10, vars: 1, consts: [["nzShowSearch", "", "nzAllowClear", "", "nzPlaceHolder", "Select OS", 3, "ngModel", "ngModelChange"], ["nzCustomContent", "", "nzLabel", "Windows", "nzValue", "windows"], ["nz-icon", "", "nzType", "windows"], ["nzCustomContent", "", "nzLabel", "Mac", "nzValue", "mac"], ["nz-icon", "", "nzType", "apple"], ["nzCustomContent", "", "nzLabel", "Android", "nzValue", "android"], ["nz-icon", "", "nzType", "android"]], template: function NzDemoSelectCustomContentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-select", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoSelectCustomContentComponent_Template_nz_select_ngModelChange_0_listener($event) { return ctx.selectedOS = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-option", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Windows");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nz-option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Mac");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nz-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Android ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedOS);
    } }, directives: [ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_1__["NzSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_1__["NzOptionComponent"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_3__["NzIconDirective"]], styles: ["nz-select[_ngcontent-%COMP%] {\n        width: 200px;\n      }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoSelectCustomContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-demo-select-custom-content',
                template: `
    <nz-select nzShowSearch nzAllowClear nzPlaceHolder="Select OS" [(ngModel)]="selectedOS">
      <nz-option nzCustomContent nzLabel="Windows" nzValue="windows"><i nz-icon nzType="windows"></i> Windows</nz-option>
      <nz-option nzCustomContent nzLabel="Mac" nzValue="mac"><i nz-icon nzType="apple"></i> Mac</nz-option>
      <nz-option nzCustomContent nzLabel="Android" nzValue="android"><i nz-icon nzType="android"></i> Android </nz-option>
    </nz-select>
  `,
                styles: [
                    `
      nz-select {
        width: 200px;
      }
    `
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./site/doc/app/select/custom-dropdown-menu.ts":
/*!*****************************************************!*\
  !*** ./site/doc/app/select/custom-dropdown-menu.ts ***!
  \*****************************************************/
/*! exports provided: NzDemoSelectCustomDropdownMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoSelectCustomDropdownMenuComponent", function() { return NzDemoSelectCustomDropdownMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/select */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-select.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/divider */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-divider.js");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/input */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-input.js");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/icon */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-icon.js");







function NzDemoSelectCustomDropdownMenuComponent_nz_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-option", 3);
} if (rf & 2) {
    const item_r483 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzLabel", item_r483)("nzValue", item_r483);
} }
function NzDemoSelectCustomDropdownMenuComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r486 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 5, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoSelectCustomDropdownMenuComponent_ng_template_2_Template_a_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r486); const _r484 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); const ctx_r485 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r485.addItem(_r484); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Add item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class NzDemoSelectCustomDropdownMenuComponent {
    constructor() {
        this.listOfItem = ['jack', 'lucy'];
        this.index = 0;
    }
    addItem(input) {
        const value = input.value;
        if (this.listOfItem.indexOf(value) === -1) {
            this.listOfItem = [...this.listOfItem, input.value || `New item ${this.index++}`];
        }
    }
}
/** @nocollapse */ NzDemoSelectCustomDropdownMenuComponent.ɵfac = function NzDemoSelectCustomDropdownMenuComponent_Factory(t) { return new (t || NzDemoSelectCustomDropdownMenuComponent)(); };
/** @nocollapse */ NzDemoSelectCustomDropdownMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoSelectCustomDropdownMenuComponent, selectors: [["nz-demo-select-custom-dropdown-menu"]], decls: 4, vars: 2, consts: [["nzShowSearch", "", "nzAllowClear", "", "nzPlaceHolder", "custom dropdown render", 3, "nzDropdownRender"], [3, "nzLabel", "nzValue", 4, "ngFor", "ngForOf"], ["renderTemplate", ""], [3, "nzLabel", "nzValue"], [1, "container"], ["type", "text", "nz-input", ""], ["inputElement", ""], [1, "add-item", 3, "click"], ["nz-icon", "", "nzType", "plus"]], template: function NzDemoSelectCustomDropdownMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-select", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzDemoSelectCustomDropdownMenuComponent_nz_option_1_Template, 1, 2, "nz-option", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzDemoSelectCustomDropdownMenuComponent_ng_template_2_Template, 7, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r481 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzDropdownRender", _r481);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listOfItem);
    } }, directives: [ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_1__["NzSelectComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_1__["NzOptionComponent"], ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_3__["NzDividerComponent"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_4__["NzInputDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__["NzIconDirective"]], styles: ["nz-select[_ngcontent-%COMP%] {\n        width: 240px;\n      }\n      nz-divider[_ngcontent-%COMP%] {\n        margin: 4px 0;\n      }\n      .container[_ngcontent-%COMP%] {\n        display: flex;\n        flex-wrap: nowrap;\n        padding: 8px;\n      }\n      input[_ngcontent-%COMP%] {\n      }\n      .add-item[_ngcontent-%COMP%] {\n        flex: 0 0 auto;\n        padding: 8px;\n        display: block;\n      }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoSelectCustomDropdownMenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-demo-select-custom-dropdown-menu',
                template: `
    <nz-select nzShowSearch nzAllowClear [nzDropdownRender]="renderTemplate" nzPlaceHolder="custom dropdown render">
      <nz-option *ngFor="let item of listOfItem" [nzLabel]="item" [nzValue]="item"></nz-option>
    </nz-select>
    <ng-template #renderTemplate>
      <nz-divider></nz-divider>
      <div class="container">
        <input type="text" nz-input #inputElement />
        <a class="add-item" (click)="addItem(inputElement)"><i nz-icon nzType="plus"></i> Add item</a>
      </div>
    </ng-template>
  `,
                styles: [
                    `
      nz-select {
        width: 240px;
      }
      nz-divider {
        margin: 4px 0;
      }
      .container {
        display: flex;
        flex-wrap: nowrap;
        padding: 8px;
      }
      input {
      }
      .add-item {
        flex: 0 0 auto;
        padding: 8px;
        display: block;
      }
    `
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./site/doc/app/select/custom-template.ts":
/*!************************************************!*\
  !*** ./site/doc/app/select/custom-template.ts ***!
  \************************************************/
/*! exports provided: NzDemoSelectCustomTemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoSelectCustomTemplateComponent", function() { return NzDemoSelectCustomTemplateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/select */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-select.js");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/icon */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-icon.js");




function NzDemoSelectCustomTemplateComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
} if (rf & 2) {
    const selected_r491 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", selected_r491.nzValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", selected_r491.nzLabel, " ");
} }
function NzDemoSelectCustomTemplateComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const selected_r492 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", selected_r492.nzValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", selected_r492.nzLabel, "");
} }
class NzDemoSelectCustomTemplateComponent {
}
/** @nocollapse */ NzDemoSelectCustomTemplateComponent.ɵfac = function NzDemoSelectCustomTemplateComponent_Factory(t) { return new (t || NzDemoSelectCustomTemplateComponent)(); };
/** @nocollapse */ NzDemoSelectCustomTemplateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoSelectCustomTemplateComponent, selectors: [["nz-demo-select-custom-template"]], decls: 14, vars: 2, consts: [["nzAllowClear", "", "nzPlaceHolder", "Select OS", 3, "nzCustomTemplate"], ["nzLabel", "Windows", "nzValue", "windows"], ["nzLabel", "Apple", "nzValue", "apple"], ["nzLabel", "Android", "nzValue", "android"], ["defaultTemplate", ""], ["nzAllowClear", "", "nzPlaceHolder", "Select OS", "nzMode", "multiple", 3, "nzCustomTemplate"], ["multipleTemplate", ""], ["nz-icon", "", 3, "nzType"], [1, "ant-select-selection-item-content"]], template: function NzDemoSelectCustomTemplateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-select", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "nz-option", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "nz-option", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "nz-option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NzDemoSelectCustomTemplateComponent_ng_template_4_Template, 2, 2, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nz-select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "nz-option", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "nz-option", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "nz-option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, NzDemoSelectCustomTemplateComponent_ng_template_12_Template, 3, 2, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r487 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
        const _r489 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzCustomTemplate", _r487);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzCustomTemplate", _r489);
    } }, directives: [ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_1__["NzSelectComponent"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_1__["NzOptionComponent"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_2__["NzIconDirective"]], styles: ["nz-select[_ngcontent-%COMP%] {\n        width: 100%;\n      }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoSelectCustomTemplateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-demo-select-custom-template',
                template: `
    <nz-select nzAllowClear nzPlaceHolder="Select OS" [nzCustomTemplate]="defaultTemplate">
      <nz-option nzLabel="Windows" nzValue="windows"></nz-option>
      <nz-option nzLabel="Apple" nzValue="apple"></nz-option>
      <nz-option nzLabel="Android" nzValue="android"></nz-option>
    </nz-select>
    <ng-template #defaultTemplate let-selected> <i nz-icon [nzType]="selected.nzValue"></i> {{ selected.nzLabel }} </ng-template>
    <br />
    <br />
    <nz-select nzAllowClear nzPlaceHolder="Select OS" nzMode="multiple" [nzCustomTemplate]="multipleTemplate">
      <nz-option nzLabel="Windows" nzValue="windows"></nz-option>
      <nz-option nzLabel="Apple" nzValue="apple"></nz-option>
      <nz-option nzLabel="Android" nzValue="android"></nz-option>
    </nz-select>
    <ng-template #multipleTemplate let-selected>
      <div class="ant-select-selection-item-content"><i nz-icon [nzType]="selected.nzValue"></i> {{ selected.nzLabel }}</div>
    </ng-template>
  `,
                styles: [
                    `
      nz-select {
        width: 100%;
      }
    `
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./site/doc/app/select/default-value.ts":
/*!**********************************************!*\
  !*** ./site/doc/app/select/default-value.ts ***!
  \**********************************************/
/*! exports provided: NzDemoSelectDefaultValueComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoSelectDefaultValueComponent", function() { return NzDemoSelectDefaultValueComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/select */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-select.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function NzDemoSelectDefaultValueComponent_nz_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-option", 5);
} if (rf & 2) {
    const option_r496 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzLabel", option_r496)("nzValue", option_r496);
} }
function NzDemoSelectDefaultValueComponent_nz_option_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-option", 6);
} if (rf & 2) {
    const option_r497 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzLabel", option_r497)("nzValue", option_r497);
} }
function NzDemoSelectDefaultValueComponent_nz_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-option", 5);
} if (rf & 2) {
    const option_r498 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzLabel", option_r498)("nzValue", option_r498);
} }
class NzDemoSelectDefaultValueComponent {
    constructor() {
        this.listOfOption = ['Option 01', 'Option 02'];
        this.listOfSelectedValue = ['Default 01', 'Default 02'];
        this.defaultOption = [...this.listOfSelectedValue];
        this.selectedValue = 'Default';
    }
}
/** @nocollapse */ NzDemoSelectDefaultValueComponent.ɵfac = function NzDemoSelectDefaultValueComponent_Factory(t) { return new (t || NzDemoSelectDefaultValueComponent)(); };
/** @nocollapse */ NzDemoSelectDefaultValueComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoSelectDefaultValueComponent, selectors: [["nz-demo-select-default-value"]], decls: 8, vars: 5, consts: [["nzMode", "multiple", "nzPlaceHolder", "Inserted are removed", 3, "ngModel", "ngModelChange"], [3, "nzLabel", "nzValue", 4, "ngFor", "ngForOf"], ["nzHide", "", 3, "nzLabel", "nzValue", 4, "ngFor", "ngForOf"], [3, "ngModel", "ngModelChange"], ["nzLabel", "Default Value", "nzValue", "Default", "nzHide", ""], [3, "nzLabel", "nzValue"], ["nzHide", "", 3, "nzLabel", "nzValue"]], template: function NzDemoSelectDefaultValueComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-select", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoSelectDefaultValueComponent_Template_nz_select_ngModelChange_0_listener($event) { return ctx.listOfSelectedValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzDemoSelectDefaultValueComponent_nz_option_1_Template, 1, 2, "nz-option", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzDemoSelectDefaultValueComponent_nz_option_2_Template, 1, 2, "nz-option", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nz-select", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoSelectDefaultValueComponent_Template_nz_select_ngModelChange_5_listener($event) { return ctx.selectedValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NzDemoSelectDefaultValueComponent_nz_option_6_Template, 1, 2, "nz-option", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "nz-option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.listOfSelectedValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listOfOption);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.defaultOption);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listOfOption);
    } }, directives: [ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_1__["NzSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_1__["NzOptionComponent"]], styles: ["nz-select[_ngcontent-%COMP%] {\n        width: 100%;\n      }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoSelectDefaultValueComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-demo-select-default-value',
                template: `
    <nz-select nzMode="multiple" nzPlaceHolder="Inserted are removed" [(ngModel)]="listOfSelectedValue">
      <nz-option *ngFor="let option of listOfOption" [nzLabel]="option" [nzValue]="option"></nz-option>
      <nz-option *ngFor="let option of defaultOption" [nzLabel]="option" [nzValue]="option" nzHide></nz-option>
    </nz-select>
    <br />
    <br />
    <nz-select [(ngModel)]="selectedValue">
      <nz-option *ngFor="let option of listOfOption" [nzLabel]="option" [nzValue]="option"></nz-option>
      <nz-option nzLabel="Default Value" nzValue="Default" nzHide></nz-option>
    </nz-select>
  `,
                styles: [
                    `
      nz-select {
        width: 100%;
      }
    `
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./site/doc/app/select/en.component.ts":
/*!*********************************************!*\
  !*** ./site/doc/app/select/en.component.ts ***!
  \*********************************************/
/*! exports provided: NzDemoSelectEnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoSelectEnComponent", function() { return NzDemoSelectEnComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _share_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../share/codebox/codebox.component */ "./site/doc/app/share/codebox/codebox.component.ts");
/* harmony import */ var ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/affix */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-affix.js");
/* harmony import */ var ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/anchor */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-anchor.js");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/icon */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-icon.js");
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-tooltip.js");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/grid */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-grid.js");
/* harmony import */ var _basic__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./basic */ "./site/doc/app/select/basic.ts");
/* harmony import */ var _multiple__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./multiple */ "./site/doc/app/select/multiple.ts");
/* harmony import */ var _tags__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tags */ "./site/doc/app/select/tags.ts");
/* harmony import */ var _coordinate__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./coordinate */ "./site/doc/app/select/coordinate.ts");
/* harmony import */ var _label_in_value__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./label-in-value */ "./site/doc/app/select/label-in-value.ts");
/* harmony import */ var _select_users__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./select-users */ "./site/doc/app/select/select-users.ts");
/* harmony import */ var _hide_selected__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./hide-selected */ "./site/doc/app/select/hide-selected.ts");
/* harmony import */ var _scroll_load__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./scroll-load */ "./site/doc/app/select/scroll-load.ts");
/* harmony import */ var _big_data__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./big-data */ "./site/doc/app/select/big-data.ts");
/* harmony import */ var _custom_template__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./custom-template */ "./site/doc/app/select/custom-template.ts");
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./search */ "./site/doc/app/select/search.ts");
/* harmony import */ var _size__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./size */ "./site/doc/app/select/size.ts");
/* harmony import */ var _optgroup__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./optgroup */ "./site/doc/app/select/optgroup.ts");
/* harmony import */ var _search_box__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./search-box */ "./site/doc/app/select/search-box.ts");
/* harmony import */ var _automatic_tokenization__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./automatic-tokenization */ "./site/doc/app/select/automatic-tokenization.ts");
/* harmony import */ var _custom_dropdown_menu__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./custom-dropdown-menu */ "./site/doc/app/select/custom-dropdown-menu.ts");
/* harmony import */ var _custom_content__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./custom-content */ "./site/doc/app/select/custom-content.ts");
/* harmony import */ var _default_value__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./default-value */ "./site/doc/app/select/default-value.ts");
/* harmony import */ var _border_less__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./border-less */ "./site/doc/app/select/border-less.ts");




























class NzDemoSelectEnComponent {
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
/** @nocollapse */ NzDemoSelectEnComponent.ɵfac = function NzDemoSelectEnComponent_Factory(t) { return new (t || NzDemoSelectEnComponent)(); };
/** @nocollapse */ NzDemoSelectEnComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoSelectEnComponent, selectors: [["nz-demo-select"]], viewQuery: function NzDemoSelectEnComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_share_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_1__["NzCodeBoxComponent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.codeBoxes = _t);
    } }, decls: 853, vars: 64, consts: [[1, "toc-affix", 3, "nzOffsetTop"], ["nzShowInkInFixed", "", 3, "nzAffix", "nzClick"], ["nzHref", "#components-select-demo-basic", "nzTitle", "Basic Usage"], ["nzHref", "#components-select-demo-search", "nzTitle", "Select with search field"], ["nzHref", "#components-select-demo-multiple", "nzTitle", "multiple selection"], ["nzHref", "#components-select-demo-size", "nzTitle", "Sizes"], ["nzHref", "#components-select-demo-tags", "nzTitle", "Tags"], ["nzHref", "#components-select-demo-optgroup", "nzTitle", "Option Group"], ["nzHref", "#components-select-demo-coordinate", "nzTitle", "coordinate"], ["nzHref", "#components-select-demo-search-box", "nzTitle", "Search Box"], ["nzHref", "#components-select-demo-label-in-value", "nzTitle", "Get option object of selected item"], ["nzHref", "#components-select-demo-automatic-tokenization", "nzTitle", "Automatic tokenization"], ["nzHref", "#components-select-demo-select-users", "nzTitle", "Search and Select Users"], ["nzHref", "#components-select-demo-custom-dropdown-menu", "nzTitle", "Custom dropdown"], ["nzHref", "#components-select-demo-hide-selected", "nzTitle", "Hide Already Selected"], ["nzHref", "#components-select-demo-custom-content", "nzTitle", "Custom Option Template"], ["nzHref", "#components-select-demo-scroll-load", "nzTitle", "Load Data on Scroll"], ["nzHref", "#components-select-demo-default-value", "nzTitle", "Default Value"], ["nzHref", "#components-select-demo-big-data", "nzTitle", "Large amounts of data"], ["nzHref", "#components-select-demo-border-less", "nzTitle", "Bordered-less"], ["nzHref", "#components-select-demo-custom-template", "nzTitle", "Custom Top Render"], ["nzHref", "#api", "nzTitle", "API"], [1, "markdown"], [1, "subtitle"], [1, "widget"], ["href", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/select/doc/index.en-US.md", "target", "_blank", "rel", "noopener noreferrer", 1, "edit-button"], ["nz-icon", "", "nzType", "edit"], ["id", "when-to-use"], ["onclick", "window.location.hash = 'when-to-use'", 1, "anchor"], ["href", "/components/radio/en"], [1, "language-ts"], [1, "token", "keyword"], [1, "token", "punctuation"], [1, "token", "string"], ["nz-icon", "", "nzType", "appstore", "nz-tooltip", "", "nzTooltipTitle", "Expand All Code", 1, "code-box-expand-trigger", 3, "click"], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", 3, "nzXl", "nzSpan"], ["nzTitle", "Basic Usage", "nzSelector", "nz-demo-select-basic", "nzGenerateCommand", "ng g ng-zorro-antd:select-basic <name>", "nzComponentName", "NzDemoSelectBasicComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["demo", ""], ["intro", ""], ["nzTitle", "multiple selection", "nzSelector", "nz-demo-select-multiple", "nzGenerateCommand", "ng g ng-zorro-antd:select-multiple <name>", "nzComponentName", "NzDemoSelectMultipleComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Tags", "nzSelector", "nz-demo-select-tags", "nzGenerateCommand", "ng g ng-zorro-antd:select-tags <name>", "nzComponentName", "NzDemoSelectTagsComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "coordinate", "nzSelector", "nz-demo-select-coordinate", "nzGenerateCommand", "ng g ng-zorro-antd:select-coordinate <name>", "nzComponentName", "NzDemoSelectCoordinateComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["href", "/components/cascader/en"], ["nzTitle", "Get option object of selected item", "nzSelector", "nz-demo-select-label-in-value", "nzGenerateCommand", "ng g ng-zorro-antd:select-label-in-value <name>", "nzComponentName", "NzDemoSelectLabelInValueComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["href", "https://angular.io/api/forms/SelectControlValueAccessor#caveat-option-selection"], ["nzTitle", "Search and Select Users", "nzSelector", "nz-demo-select-select-users", "nzGenerateCommand", "ng g ng-zorro-antd:select-select-users <name>", "nzComponentName", "NzDemoSelectSelectUsersComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Hide Already Selected", "nzSelector", "nz-demo-select-hide-selected", "nzGenerateCommand", "ng g ng-zorro-antd:select-hide-selected <name>", "nzComponentName", "NzDemoSelectHideSelectedComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Load Data on Scroll", "nzSelector", "nz-demo-select-scroll-load", "nzGenerateCommand", "ng g ng-zorro-antd:select-scroll-load <name>", "nzComponentName", "NzDemoSelectScrollLoadComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Large amounts of data", "nzSelector", "nz-demo-select-big-data", "nzGenerateCommand", "ng g ng-zorro-antd:select-big-data <name>", "nzComponentName", "NzDemoSelectBigDataComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Custom Top Render", "nzSelector", "nz-demo-select-custom-template", "nzGenerateCommand", "ng g ng-zorro-antd:select-custom-template <name>", "nzComponentName", "NzDemoSelectCustomTemplateComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Select with search field", "nzSelector", "nz-demo-select-search", "nzGenerateCommand", "ng g ng-zorro-antd:select-search <name>", "nzComponentName", "NzDemoSelectSearchComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Sizes", "nzSelector", "nz-demo-select-size", "nzGenerateCommand", "ng g ng-zorro-antd:select-size <name>", "nzComponentName", "NzDemoSelectSizeComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Option Group", "nzSelector", "nz-demo-select-optgroup", "nzGenerateCommand", "ng g ng-zorro-antd:select-optgroup <name>", "nzComponentName", "NzDemoSelectOptgroupComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Search Box", "nzSelector", "nz-demo-select-search-box", "nzGenerateCommand", "ng g ng-zorro-antd:select-search-box <name>", "nzComponentName", "NzDemoSelectSearchBoxComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Automatic tokenization", "nzSelector", "nz-demo-select-automatic-tokenization", "nzGenerateCommand", "ng g ng-zorro-antd:select-automatic-tokenization <name>", "nzComponentName", "NzDemoSelectAutomaticTokenizationComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Custom dropdown", "nzSelector", "nz-demo-select-custom-dropdown-menu", "nzGenerateCommand", "ng g ng-zorro-antd:select-custom-dropdown-menu <name>", "nzComponentName", "NzDemoSelectCustomDropdownMenuComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Custom Option Template", "nzSelector", "nz-demo-select-custom-content", "nzGenerateCommand", "ng g ng-zorro-antd:select-custom-content <name>", "nzComponentName", "NzDemoSelectCustomContentComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Default Value", "nzSelector", "nz-demo-select-default-value", "nzGenerateCommand", "ng g ng-zorro-antd:select-default-value <name>", "nzComponentName", "NzDemoSelectDefaultValueComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Bordered-less", "nzSelector", "nz-demo-select-border-less", "nzGenerateCommand", "ng g ng-zorro-antd:select-border-less <name>", "nzComponentName", "NzDemoSelectBorderLessComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], [1, "markdown", "api-container"], ["id", "api"], ["onclick", "window.location.hash = 'api'", 1, "anchor"], [1, "language-html"], [1, "token", "tag"], [1, "token", "attr-name"], [1, "token", "attr-value"], ["id", "nz-select"], [1, "api-type-label", "component"], ["onclick", "window.location.hash = 'nz-select'", 1, "anchor"], ["id", "nz-option"], ["onclick", "window.location.hash = 'nz-option'", 1, "anchor"], ["id", "nz-option-group"], ["onclick", "window.location.hash = 'nz-option-group'", 1, "anchor"], ["id", "methods"], ["onclick", "window.location.hash = 'methods'", 1, "anchor"]], template: function NzDemoSelectEnComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-affix", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nz-anchor", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzClick", function NzDemoSelectEnComponent_Template_nz_anchor_nzClick_2_listener($event) { return ctx.goLink($event); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "nz-link", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "section", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Select");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "section", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Select component to select value from options.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h2", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "When To Use");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "A dropdown menu for displaying choices - an elegant alternative to the native ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "<select>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " element.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Utilizing ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Radio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " is recommended when there are fewer total options (less than 5).");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "pre", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "import");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "{");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " NzSelectModule ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "from");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "'ng-zorro-antd/select'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Examples");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoSelectEnComponent_Template_i_click_70_listener() { return ctx.expandAllCode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "nz-code-box", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "nz-demo-select-basic", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Basic Usage.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "nz-code-box", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "nz-demo-select-multiple", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Multiple selection, selecting from existing items, max 3 option will display at the same time by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "nzMaxTagCount");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "nz-code-box", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "nz-demo-select-tags", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Select with tags, transform input to tag (scroll the menu)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "nz-code-box", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "nz-demo-select-coordinate", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Coordinating the selection of provinces and cities is a common use case and demonstrates how selection can be coordinated.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Using the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "a", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Cascader");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, " component is strongly recommended instead as it is more flexible and capable.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "nz-code-box", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "nz-demo-select-label-in-value", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "The value of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "ngModel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, " comes from the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "nzValue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, " of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "nz-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, ", when the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "nzValue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, " of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "nz-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, " is an object, the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "ngModel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, " will be an object too, the usage of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "compareWith");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, " is the same as ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "SelectControlValueAccessor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "nz-code-box", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "nz-demo-select-select-users", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "A complete multiple select sample with remote search, debounce fetch, ajax callback order flow, and loading state.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "nz-code-box", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](136, "nz-demo-select-hide-selected", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "Hide already selected options in the dropdown via ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "nzHide");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "nz-code-box", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](144, "nz-demo-select-scroll-load", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "Load data on scroll.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "nz-code-box", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](149, "nz-demo-select-big-data", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "With the help of virtual scroll, select component can deal with Large amounts of data.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "nz-code-box", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](154, "nz-demo-select-custom-template", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "Custom the content of nz-select via ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "nzCustomTemplate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "nz-code-box", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](163, "nz-demo-select-search", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "Search the options while expanded.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "nz-code-box", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](168, "nz-demo-select-size", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "The height of the input field for the select defaults to 32px. If ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "nzSize");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, " is set to large, the height will be 40px, and if set to small, 24px.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "nz-code-box", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](176, "nz-demo-select-optgroup", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "Using ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, "nz-option-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, " to group the options.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "nz-code-box", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](184, "nz-demo-select-search-box", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, "Search with remote data.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "nz-code-box", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](189, "nz-demo-select-automatic-tokenization", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, "Try to copy ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, "Lucy,Jack");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, " to the input. Only available in tags and multiple mode.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "nz-code-box", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](197, "nz-demo-select-custom-dropdown-menu", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, "Customize the dropdown menu via ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, "nzDropdownRender");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "nz-code-box", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](205, "nz-demo-select-custom-content", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, "Custom the content of nz-option via ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, "nzCustomContent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](211, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "nz-code-box", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](213, "nz-demo-select-default-value", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](216, "Display a default value that not in the option list with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218, "nzHide");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](219, " in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](221, "nz-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "nz-code-box", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](223, "nz-demo-select-border-less", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](226, "Bordered-less style component.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "section", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "h2", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](230, "API");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "a", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](232, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "pre", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "span", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "span", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](238, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](239, "nz-select");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](241, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](242, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "span", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "span", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](246, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](247, "nz-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](248, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "span", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](250, "nzValue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "span", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](253, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](255, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](256, "lucy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](258, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](259, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "span", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](261, "nzLabel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "span", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](264, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](266, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](267, "Lucy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](269, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](271, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "span", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "span", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](275, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](276, "nz-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](278, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](279, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "span", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "span", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](283, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](284, "nz-select");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](286, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "h3", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](289, "nz-select");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "label", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](291, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "a", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](293, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](295, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](297, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](298, "Property");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](300, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](301, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](302, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](303, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](304, "Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](306, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](307, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](308, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](309, "[ngModel]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](310, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](311, "Current selected nz-option value, double binding.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](312, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](313, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](314, "any | any[]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](315, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](316, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](317, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](318, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](319, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](320, "[compareWith]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](321, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](322, "Same as ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](323, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](324, "SelectControlValueAccessor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](325, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](326, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](327, "(o1: any, o2: any) => boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](328, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](329, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](330, "(o1: any, o2: any) => o1===o2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](331, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](332, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](333, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](334, "[nzAutoClearSearchValue]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](335, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](336, "Whether the current search will be cleared on selecting an item. Only applies when ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](337, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](338, "mode");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](339, " is set to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](340, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](341, "multiple");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](342, " or ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](343, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](344, "tags");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](345, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](346, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](347, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](348, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](349, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](350, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](351, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](352, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](353, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](354, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](355, "[nzAllowClear]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](356, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](357, "Show clear button.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](358, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](359, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](360, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](361, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](362, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](363, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](364, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](365, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](366, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](367, "[nzOpen]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](368, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](369, "dropdown expand state, double binding");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](370, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](371, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](372, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](373, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](374, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](375, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](376, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](377, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](378, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](379, "[nzAutoFocus]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](380, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](381, "Get focus by default");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](382, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](383, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](384, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](385, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](386, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](387, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](388, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](389, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](390, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](391, "[nzDisabled]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](392, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](393, "Whether disabled select");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](394, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](395, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](396, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](397, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](398, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](399, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](400, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](401, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](402, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](403, "[nzDropdownClassName]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](404, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](405, "className of dropdown menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](406, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](407, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](408, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](409, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](410, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](411, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](412, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](413, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](414, "[nzDropdownMatchSelectWidth]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](415, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](416, "Whether dropdown's with is same with select.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](417, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](418, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](419, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](420, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](421, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](422, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](423, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](424, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](425, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](426, "[nzDropdownStyle]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](427, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](428, "style of dropdown menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](429, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](430, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](431, "object");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](432, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](433, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](434, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](435, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](436, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](437, "[nzCustomTemplate]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](438, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](439, "The custom template of select");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](440, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](441, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](442, "TemplateRef<{ $implicit: NzOptionComponent }>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](443, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](444, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](445, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](446, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](447, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](448, "[nzServerSearch]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](449, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](450, "nz-option will not be filtered when set to true");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](451, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](452, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](453, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](454, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](455, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](456, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](457, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](458, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](459, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](460, "[nzFilterOption]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](461, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](462, "Filter options against it. The function will receive two arguments, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](463, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](464, "inputValue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](465, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](466, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](467, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](468, ", if the function returns ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](469, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](470, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](471, ", the option will be included in the filtered set; Otherwise, it will be excluded.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](472, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](473, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](474, "(input?: string, option?: NzOptionComponent) => boolean;");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](475, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](476, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](477, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](478, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](479, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](480, "[nzMaxMultipleCount]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](481, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](482, "Max selected option can be selected");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](483, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](484, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](485, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](486, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](487, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](488, "Infinity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](489, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](490, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](491, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](492, "[nzMode]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](493, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](494, "Set mode of Select");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](495, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](496, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](497, "'multiple' | 'tags' | 'default'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](498, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](499, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](500, "'default'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](501, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](502, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](503, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](504, "[nzNotFoundContent]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](505, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](506, "Specify content to show when no result matches..");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](507, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](508, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](509, "string | TemplateRef<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](510, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](511, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](512, "'Not Found'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](513, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](514, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](515, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](516, "[nzPlaceHolder]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](517, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](518, "Placeholder of select");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](519, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](520, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](521, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](522, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](523, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](524, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](525, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](526, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](527, "[nzShowArrow]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](528, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](529, "Whether to show the drop-down arrow");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](530, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](531, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](532, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](533, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](534, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](535, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](536, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](537, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](538, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](539, "[nzShowSearch]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](540, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](541, "Whether show search input in single mode.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](542, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](543, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](544, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](545, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](546, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](547, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](548, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](549, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](550, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](551, "[nzSize]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](552, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](553, "Size of Select input");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](554, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](555, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](556, "'large' | 'small' | 'default'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](557, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](558, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](559, "'default'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](560, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](561, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](562, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](563, "[nzSuffixIcon]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](564, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](565, "The custom suffix icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](566, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](567, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](568, "TemplateRef<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](569, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](570, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](571, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](572, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](573, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](574, "[nzRemoveIcon]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](575, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](576, "The custom remove icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](577, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](578, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](579, "TemplateRef<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](580, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](581, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](582, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](583, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](584, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](585, "[nzClearIcon]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](586, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](587, "The custom clear icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](588, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](589, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](590, "TemplateRef<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](591, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](592, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](593, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](594, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](595, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](596, "[nzMenuItemSelectedIcon]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](597, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](598, "The custom menuItemSelected icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](599, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](600, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](601, "TemplateRef<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](602, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](603, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](604, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](605, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](606, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](607, "[nzTokenSeparators]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](608, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](609, "Separator used to tokenize on tag/multiple mode");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](610, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](611, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](612, "string[]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](613, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](614, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](615, "[]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](616, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](617, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](618, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](619, "[nzLoading]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](620, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](621, "indicate loading state");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](622, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](623, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](624, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](625, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](626, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](627, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](628, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](629, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](630, "[nzMaxTagCount]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](631, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](632, "Max tag count to show");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](633, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](634, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](635, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](636, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](637, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](638, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](639, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](640, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](641, "[nzMaxTagPlaceholder]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](642, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](643, "Placeholder for not showing tags");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](644, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](645, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](646, "TemplateRef<{ $implicit: any[] }>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](647, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](648, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](649, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](650, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](651, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](652, "(ngModelChange)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](653, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](654, "Current selected nz-option value change callback.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](655, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](656, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](657, "EventEmitter<any[]>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](658, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](659, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](660, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](661, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](662, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](663, "(nzOpenChange)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](664, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](665, "dropdown expand change callback");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](666, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](667, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](668, "EventEmitter<boolean>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](669, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](670, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](671, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](672, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](673, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](674, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](675, "(nzScrollToBottom)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](676, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](677, "Called when dropdown scrolls to bottom");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](678, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](679, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](680, "EventEmitter<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](681, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](682, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](683, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](684, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](685, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](686, "(nzOnSearch)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](687, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](688, "Callback function that is fired when input changed.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](689, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](690, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](691, "EventEmitter<string>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](692, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](693, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](694, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](695, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](696, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](697, "(nzFocus)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](698, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](699, "focus callback");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](700, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](701, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](702, "EventEmitter<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](703, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](704, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](705, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](706, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](707, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](708, "(nzBlur)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](709, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](710, "blur callback");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](711, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](712, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](713, "EventEmitter<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](714, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](715, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](716, "h3", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](717, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](718, "nz-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](719, "label", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](720, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](721, "a", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](722, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](723, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](724, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](725, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](726, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](727, "Property");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](728, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](729, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](730, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](731, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](732, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](733, "Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](734, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](735, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](736, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](737, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](738, "[nzDisabled]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](739, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](740, "Disable this option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](741, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](742, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](743, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](744, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](745, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](746, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](747, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](748, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](749, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](750, "[nzLabel]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](751, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](752, "The text show in nz-select and dropdown menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](753, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](754, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](755, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](756, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](757, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](758, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](759, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](760, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](761, "[nzValue]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](762, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](763, "The value passed to ngModel of nz-select");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](764, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](765, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](766, "any");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](767, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](768, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](769, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](770, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](771, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](772, "[nzHide]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](773, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](774, "Whether hide the option in the option list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](775, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](776, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](777, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](778, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](779, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](780, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](781, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](782, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](783, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](784, "[nzCustomContent]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](785, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](786, "Whether custom nz-option content in drodown menu, the ng-content in nz-option will relace nzLabel when it was set to true");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](787, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](788, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](789, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](790, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](791, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](792, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](793, "h3", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](794, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](795, "nz-option-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](796, "label", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](797, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](798, "a", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](799, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](800, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](801, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](802, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](803, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](804, "Property");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](805, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](806, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](807, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](808, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](809, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](810, "Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](811, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](812, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](813, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](814, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](815, "[nzLabel]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](816, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](817, "Group label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](818, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](819, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](820, "string | TemplateRef<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](821, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](822, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](823, "h2", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](824, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](825, "Methods");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](826, "a", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](827, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](828, "h3", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](829, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](830, "nz-select");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](831, "label", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](832, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](833, "a", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](834, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](835, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](836, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](837, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](838, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](839, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](840, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](841, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](842, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](843, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](844, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](845, "blur()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](846, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](847, "Remove focus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](848, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](849, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](850, "focus()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](851, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](852, "Get focus");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzGutter", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzXl", 12)("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-select-demo-basic")("nzLink", "components-select-demo-basic")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/select/demo/basic.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-select-demo-multiple")("nzLink", "components-select-demo-multiple")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/select/demo/multiple.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-select-demo-tags")("nzLink", "components-select-demo-tags")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/select/demo/tags.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-select-demo-coordinate")("nzLink", "components-select-demo-coordinate")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/select/demo/coordinate.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-select-demo-label-in-value")("nzLink", "components-select-demo-label-in-value")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/select/demo/label-in-value.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-select-demo-select-users")("nzLink", "components-select-demo-select-users")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/select/demo/select-users.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-select-demo-hide-selected")("nzLink", "components-select-demo-hide-selected")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/select/demo/hide-selected.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-select-demo-scroll-load")("nzLink", "components-select-demo-scroll-load")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/select/demo/scroll-load.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-select-demo-big-data")("nzLink", "components-select-demo-big-data")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/select/demo/big-data.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-select-demo-custom-template")("nzLink", "components-select-demo-custom-template")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/select/demo/custom-template.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzXl", 12)("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-select-demo-search")("nzLink", "components-select-demo-search")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/select/demo/search.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-select-demo-size")("nzLink", "components-select-demo-size")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/select/demo/size.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-select-demo-optgroup")("nzLink", "components-select-demo-optgroup")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/select/demo/optgroup.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-select-demo-search-box")("nzLink", "components-select-demo-search-box")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/select/demo/search-box.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-select-demo-automatic-tokenization")("nzLink", "components-select-demo-automatic-tokenization")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/select/demo/automatic-tokenization.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-select-demo-custom-dropdown-menu")("nzLink", "components-select-demo-custom-dropdown-menu")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/select/demo/custom-dropdown-menu.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-select-demo-custom-content")("nzLink", "components-select-demo-custom-content")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/select/demo/custom-content.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-select-demo-default-value")("nzLink", "components-select-demo-default-value")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/select/demo/default-value.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-select-demo-border-less")("nzLink", "components-select-demo-border-less")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/select/demo/border-less.md");
    } }, directives: [ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_2__["NzAffixComponent"], ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_3__["NzAnchorComponent"], ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_3__["NzAnchorLinkComponent"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__["NzIconDirective"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_5__["NzTooltipDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__["NzRowDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__["NzColDirective"], _share_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_1__["NzCodeBoxComponent"], _basic__WEBPACK_IMPORTED_MODULE_7__["NzDemoSelectBasicComponent"], _multiple__WEBPACK_IMPORTED_MODULE_8__["NzDemoSelectMultipleComponent"], _tags__WEBPACK_IMPORTED_MODULE_9__["NzDemoSelectTagsComponent"], _coordinate__WEBPACK_IMPORTED_MODULE_10__["NzDemoSelectCoordinateComponent"], _label_in_value__WEBPACK_IMPORTED_MODULE_11__["NzDemoSelectLabelInValueComponent"], _select_users__WEBPACK_IMPORTED_MODULE_12__["NzDemoSelectSelectUsersComponent"], _hide_selected__WEBPACK_IMPORTED_MODULE_13__["NzDemoSelectHideSelectedComponent"], _scroll_load__WEBPACK_IMPORTED_MODULE_14__["NzDemoSelectScrollLoadComponent"], _big_data__WEBPACK_IMPORTED_MODULE_15__["NzDemoSelectBigDataComponent"], _custom_template__WEBPACK_IMPORTED_MODULE_16__["NzDemoSelectCustomTemplateComponent"], _search__WEBPACK_IMPORTED_MODULE_17__["NzDemoSelectSearchComponent"], _size__WEBPACK_IMPORTED_MODULE_18__["NzDemoSelectSizeComponent"], _optgroup__WEBPACK_IMPORTED_MODULE_19__["NzDemoSelectOptgroupComponent"], _search_box__WEBPACK_IMPORTED_MODULE_20__["NzDemoSelectSearchBoxComponent"], _automatic_tokenization__WEBPACK_IMPORTED_MODULE_21__["NzDemoSelectAutomaticTokenizationComponent"], _custom_dropdown_menu__WEBPACK_IMPORTED_MODULE_22__["NzDemoSelectCustomDropdownMenuComponent"], _custom_content__WEBPACK_IMPORTED_MODULE_23__["NzDemoSelectCustomContentComponent"], _default_value__WEBPACK_IMPORTED_MODULE_24__["NzDemoSelectDefaultValueComponent"], _border_less__WEBPACK_IMPORTED_MODULE_25__["NzDemoSelectBorderLessComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoSelectEnComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-demo-select',
                preserveWhitespaces: false,
                templateUrl: './en.html'
            }]
    }], null, { codeBoxes: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"],
            args: [_share_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_1__["NzCodeBoxComponent"]]
        }] }); })();


/***/ }),

/***/ "./site/doc/app/select/hide-selected.ts":
/*!**********************************************!*\
  !*** ./site/doc/app/select/hide-selected.ts ***!
  \**********************************************/
/*! exports provided: NzDemoSelectHideSelectedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoSelectHideSelectedComponent", function() { return NzDemoSelectHideSelectedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/select */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-select.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function NzDemoSelectHideSelectedComponent_nz_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-option", 2);
} if (rf & 2) {
    const option_r500 = ctx.$implicit;
    const ctx_r499 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzLabel", option_r500)("nzValue", option_r500)("nzHide", !ctx_r499.isNotSelected(option_r500));
} }
class NzDemoSelectHideSelectedComponent {
    constructor() {
        this.listOfOption = ['Apples', 'Nails', 'Bananas', 'Helicopters'];
        this.listOfSelectedValue = [];
    }
    isNotSelected(value) {
        return this.listOfSelectedValue.indexOf(value) === -1;
    }
}
/** @nocollapse */ NzDemoSelectHideSelectedComponent.ɵfac = function NzDemoSelectHideSelectedComponent_Factory(t) { return new (t || NzDemoSelectHideSelectedComponent)(); };
/** @nocollapse */ NzDemoSelectHideSelectedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoSelectHideSelectedComponent, selectors: [["nz-demo-select-hide-selected"]], decls: 2, vars: 2, consts: [["nzMode", "multiple", "nzPlaceHolder", "Inserted are removed", 3, "ngModel", "ngModelChange"], [3, "nzLabel", "nzValue", "nzHide", 4, "ngFor", "ngForOf"], [3, "nzLabel", "nzValue", "nzHide"]], template: function NzDemoSelectHideSelectedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-select", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoSelectHideSelectedComponent_Template_nz_select_ngModelChange_0_listener($event) { return ctx.listOfSelectedValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzDemoSelectHideSelectedComponent_nz_option_1_Template, 1, 3, "nz-option", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.listOfSelectedValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listOfOption);
    } }, directives: [ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_1__["NzSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_1__["NzOptionComponent"]], styles: ["nz-select[_ngcontent-%COMP%] {\n        width: 100%;\n      }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoSelectHideSelectedComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-demo-select-hide-selected',
                template: `
    <nz-select nzMode="multiple" nzPlaceHolder="Inserted are removed" [(ngModel)]="listOfSelectedValue">
      <nz-option *ngFor="let option of listOfOption" [nzLabel]="option" [nzValue]="option" [nzHide]="!isNotSelected(option)"></nz-option>
    </nz-select>
  `,
                styles: [
                    `
      nz-select {
        width: 100%;
      }
    `
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./site/doc/app/select/index.module.ts":
/*!*********************************************!*\
  !*** ./site/doc/app/select/index.module.ts ***!
  \*********************************************/
/*! exports provided: NzDemoSelectModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoSelectModule", function() { return NzDemoSelectModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _share_share_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../share/share.module */ "./site/doc/app/share/share.module.ts");
/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./module */ "./site/doc/app/select/module.ts");
/* harmony import */ var _automatic_tokenization__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./automatic-tokenization */ "./site/doc/app/select/automatic-tokenization.ts");
/* harmony import */ var _basic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./basic */ "./site/doc/app/select/basic.ts");
/* harmony import */ var _big_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./big-data */ "./site/doc/app/select/big-data.ts");
/* harmony import */ var _border_less__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./border-less */ "./site/doc/app/select/border-less.ts");
/* harmony import */ var _coordinate__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./coordinate */ "./site/doc/app/select/coordinate.ts");
/* harmony import */ var _custom_content__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./custom-content */ "./site/doc/app/select/custom-content.ts");
/* harmony import */ var _custom_dropdown_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./custom-dropdown-menu */ "./site/doc/app/select/custom-dropdown-menu.ts");
/* harmony import */ var _custom_template__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./custom-template */ "./site/doc/app/select/custom-template.ts");
/* harmony import */ var _default_value__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./default-value */ "./site/doc/app/select/default-value.ts");
/* harmony import */ var _hide_selected__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./hide-selected */ "./site/doc/app/select/hide-selected.ts");
/* harmony import */ var _label_in_value__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./label-in-value */ "./site/doc/app/select/label-in-value.ts");
/* harmony import */ var _multiple__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./multiple */ "./site/doc/app/select/multiple.ts");
/* harmony import */ var _optgroup__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./optgroup */ "./site/doc/app/select/optgroup.ts");
/* harmony import */ var _scroll_load__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./scroll-load */ "./site/doc/app/select/scroll-load.ts");
/* harmony import */ var _search_box__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./search-box */ "./site/doc/app/select/search-box.ts");
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./search */ "./site/doc/app/select/search.ts");
/* harmony import */ var _select_users__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./select-users */ "./site/doc/app/select/select-users.ts");
/* harmony import */ var _size__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./size */ "./site/doc/app/select/size.ts");
/* harmony import */ var _tags__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./tags */ "./site/doc/app/select/tags.ts");
/* harmony import */ var _zh_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./zh.component */ "./site/doc/app/select/zh.component.ts");
/* harmony import */ var _en_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./en.component */ "./site/doc/app/select/en.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ng-zorro-antd/spin */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-spin.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ng-zorro-antd/select */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-select.js");
/* harmony import */ var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ng-zorro-antd/divider */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-divider.js");
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ng-zorro-antd/radio */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-radio.js");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ng-zorro-antd/icon */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-icon.js");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ng-zorro-antd/input */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-input.js");



































class NzDemoSelectModule {
}
/** @nocollapse */ NzDemoSelectModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NzDemoSelectModule });
/** @nocollapse */ NzDemoSelectModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NzDemoSelectModule_Factory(t) { return new (t || NzDemoSelectModule)(); }, imports: [[
            _share_share_module__WEBPACK_IMPORTED_MODULE_2__["ShareModule"],
            ..._module__WEBPACK_IMPORTED_MODULE_3__["moduleList"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                { path: 'en', component: _en_component__WEBPACK_IMPORTED_MODULE_24__["NzDemoSelectEnComponent"] },
                { path: 'zh', component: _zh_component__WEBPACK_IMPORTED_MODULE_23__["NzDemoSelectZhComponent"] }
            ])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NzDemoSelectModule, { declarations: [_automatic_tokenization__WEBPACK_IMPORTED_MODULE_4__["NzDemoSelectAutomaticTokenizationComponent"],
        _basic__WEBPACK_IMPORTED_MODULE_5__["NzDemoSelectBasicComponent"],
        _big_data__WEBPACK_IMPORTED_MODULE_6__["NzDemoSelectBigDataComponent"],
        _border_less__WEBPACK_IMPORTED_MODULE_7__["NzDemoSelectBorderLessComponent"],
        _coordinate__WEBPACK_IMPORTED_MODULE_8__["NzDemoSelectCoordinateComponent"],
        _custom_content__WEBPACK_IMPORTED_MODULE_9__["NzDemoSelectCustomContentComponent"],
        _custom_dropdown_menu__WEBPACK_IMPORTED_MODULE_10__["NzDemoSelectCustomDropdownMenuComponent"],
        _custom_template__WEBPACK_IMPORTED_MODULE_11__["NzDemoSelectCustomTemplateComponent"],
        _default_value__WEBPACK_IMPORTED_MODULE_12__["NzDemoSelectDefaultValueComponent"],
        _hide_selected__WEBPACK_IMPORTED_MODULE_13__["NzDemoSelectHideSelectedComponent"],
        _label_in_value__WEBPACK_IMPORTED_MODULE_14__["NzDemoSelectLabelInValueComponent"],
        _multiple__WEBPACK_IMPORTED_MODULE_15__["NzDemoSelectMultipleComponent"],
        _optgroup__WEBPACK_IMPORTED_MODULE_16__["NzDemoSelectOptgroupComponent"],
        _scroll_load__WEBPACK_IMPORTED_MODULE_17__["NzDemoSelectScrollLoadComponent"],
        _search_box__WEBPACK_IMPORTED_MODULE_18__["NzDemoSelectSearchBoxComponent"],
        _search__WEBPACK_IMPORTED_MODULE_19__["NzDemoSelectSearchComponent"],
        _select_users__WEBPACK_IMPORTED_MODULE_20__["NzDemoSelectSelectUsersComponent"],
        _size__WEBPACK_IMPORTED_MODULE_21__["NzDemoSelectSizeComponent"],
        _tags__WEBPACK_IMPORTED_MODULE_22__["NzDemoSelectTagsComponent"],
        _zh_component__WEBPACK_IMPORTED_MODULE_23__["NzDemoSelectZhComponent"],
        _en_component__WEBPACK_IMPORTED_MODULE_24__["NzDemoSelectEnComponent"]], imports: [_share_share_module__WEBPACK_IMPORTED_MODULE_2__["ShareModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_25__["FormsModule"], ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_26__["NzSpinModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_27__["HttpClientJsonpModule"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_28__["NzSelectModule"], ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_29__["NzDividerModule"], ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_30__["NzRadioModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_31__["NzIconModule"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_32__["NzInputModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoSelectModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _share_share_module__WEBPACK_IMPORTED_MODULE_2__["ShareModule"],
                    ..._module__WEBPACK_IMPORTED_MODULE_3__["moduleList"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                        { path: 'en', component: _en_component__WEBPACK_IMPORTED_MODULE_24__["NzDemoSelectEnComponent"] },
                        { path: 'zh', component: _zh_component__WEBPACK_IMPORTED_MODULE_23__["NzDemoSelectZhComponent"] }
                    ])
                ],
                declarations: [
                    _automatic_tokenization__WEBPACK_IMPORTED_MODULE_4__["NzDemoSelectAutomaticTokenizationComponent"],
                    _basic__WEBPACK_IMPORTED_MODULE_5__["NzDemoSelectBasicComponent"],
                    _big_data__WEBPACK_IMPORTED_MODULE_6__["NzDemoSelectBigDataComponent"],
                    _border_less__WEBPACK_IMPORTED_MODULE_7__["NzDemoSelectBorderLessComponent"],
                    _coordinate__WEBPACK_IMPORTED_MODULE_8__["NzDemoSelectCoordinateComponent"],
                    _custom_content__WEBPACK_IMPORTED_MODULE_9__["NzDemoSelectCustomContentComponent"],
                    _custom_dropdown_menu__WEBPACK_IMPORTED_MODULE_10__["NzDemoSelectCustomDropdownMenuComponent"],
                    _custom_template__WEBPACK_IMPORTED_MODULE_11__["NzDemoSelectCustomTemplateComponent"],
                    _default_value__WEBPACK_IMPORTED_MODULE_12__["NzDemoSelectDefaultValueComponent"],
                    _hide_selected__WEBPACK_IMPORTED_MODULE_13__["NzDemoSelectHideSelectedComponent"],
                    _label_in_value__WEBPACK_IMPORTED_MODULE_14__["NzDemoSelectLabelInValueComponent"],
                    _multiple__WEBPACK_IMPORTED_MODULE_15__["NzDemoSelectMultipleComponent"],
                    _optgroup__WEBPACK_IMPORTED_MODULE_16__["NzDemoSelectOptgroupComponent"],
                    _scroll_load__WEBPACK_IMPORTED_MODULE_17__["NzDemoSelectScrollLoadComponent"],
                    _search_box__WEBPACK_IMPORTED_MODULE_18__["NzDemoSelectSearchBoxComponent"],
                    _search__WEBPACK_IMPORTED_MODULE_19__["NzDemoSelectSearchComponent"],
                    _select_users__WEBPACK_IMPORTED_MODULE_20__["NzDemoSelectSelectUsersComponent"],
                    _size__WEBPACK_IMPORTED_MODULE_21__["NzDemoSelectSizeComponent"],
                    _tags__WEBPACK_IMPORTED_MODULE_22__["NzDemoSelectTagsComponent"],
                    _zh_component__WEBPACK_IMPORTED_MODULE_23__["NzDemoSelectZhComponent"],
                    _en_component__WEBPACK_IMPORTED_MODULE_24__["NzDemoSelectEnComponent"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./site/doc/app/select/label-in-value.ts":
/*!***********************************************!*\
  !*** ./site/doc/app/select/label-in-value.ts ***!
  \***********************************************/
/*! exports provided: NzDemoSelectLabelInValueComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoSelectLabelInValueComponent", function() { return NzDemoSelectLabelInValueComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/select */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-select.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function NzDemoSelectLabelInValueComponent_nz_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-option", 2);
} if (rf & 2) {
    const option_r502 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", option_r502)("nzLabel", option_r502.label);
} }
class NzDemoSelectLabelInValueComponent {
    constructor() {
        this.optionList = [
            { label: 'Lucy', value: 'lucy', age: 20 },
            { label: 'Jack', value: 'jack', age: 22 }
        ];
        this.selectedValue = { label: 'Jack', value: 'jack', age: 22 };
        // tslint:disable-next-line:no-any
        this.compareFn = (o1, o2) => (o1 && o2 ? o1.value === o2.value : o1 === o2);
    }
    log(value) {
        console.log(value);
    }
}
/** @nocollapse */ NzDemoSelectLabelInValueComponent.ɵfac = function NzDemoSelectLabelInValueComponent_Factory(t) { return new (t || NzDemoSelectLabelInValueComponent)(); };
/** @nocollapse */ NzDemoSelectLabelInValueComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoSelectLabelInValueComponent, selectors: [["nz-demo-select-label-in-value"]], decls: 5, vars: 4, consts: [["nzAllowClear", "", "nzPlaceHolder", "Choose", 3, "ngModel", "compareWith", "ngModelChange"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], [3, "nzValue", "nzLabel"]], template: function NzDemoSelectLabelInValueComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nz-select", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoSelectLabelInValueComponent_Template_nz_select_ngModelChange_3_listener($event) { return ctx.selectedValue = $event; })("ngModelChange", function NzDemoSelectLabelInValueComponent_Template_nz_select_ngModelChange_3_listener($event) { return ctx.log($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NzDemoSelectLabelInValueComponent_nz_option_4_Template, 1, 2, "nz-option", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("The selected option's age is ", ctx.selectedValue == null ? null : ctx.selectedValue.age, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedValue)("compareWith", ctx.compareFn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.optionList);
    } }, directives: [ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_1__["NzSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_1__["NzOptionComponent"]], styles: ["nz-select[_ngcontent-%COMP%] {\n        width: 120px;\n      }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoSelectLabelInValueComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-demo-select-label-in-value',
                template: `
    <p>The selected option's age is {{ selectedValue?.age }}</p>
    <br />
    <nz-select [(ngModel)]="selectedValue" [compareWith]="compareFn" (ngModelChange)="log($event)" nzAllowClear nzPlaceHolder="Choose">
      <nz-option *ngFor="let option of optionList" [nzValue]="option" [nzLabel]="option.label"></nz-option>
    </nz-select>
  `,
                styles: [
                    `
      nz-select {
        width: 120px;
      }
    `
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./site/doc/app/select/module.ts":
/*!***************************************!*\
  !*** ./site/doc/app/select/module.ts ***!
  \***************************************/
/*! exports provided: moduleList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moduleList", function() { return moduleList; });
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng-zorro-antd/select */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-select.js");
/* harmony import */ var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/divider */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-divider.js");
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/radio */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-radio.js");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/icon */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-icon.js");
/* harmony import */ var ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/spin */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-spin.js");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/input */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-input.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");








const moduleList = [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_4__["NzSpinModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientJsonpModule"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_0__["NzSelectModule"], ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_1__["NzDividerModule"], ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_2__["NzRadioModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_3__["NzIconModule"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_5__["NzInputModule"]];


/***/ }),

/***/ "./site/doc/app/select/multiple.ts":
/*!*****************************************!*\
  !*** ./site/doc/app/select/multiple.ts ***!
  \*****************************************/
/*! exports provided: NzDemoSelectMultipleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoSelectMultipleComponent", function() { return NzDemoSelectMultipleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/select */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-select.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function NzDemoSelectMultipleComponent_nz_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-option", 3);
} if (rf & 2) {
    const item_r506 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzLabel", item_r506)("nzValue", item_r506);
} }
function NzDemoSelectMultipleComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const selectedList_r507 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" and ", selectedList_r507.length, " more selected ");
} }
class NzDemoSelectMultipleComponent {
    constructor() {
        this.listOfOption = [];
        this.listOfSelectedValue = ['a10', 'c12'];
    }
    ngOnInit() {
        const children = [];
        for (let i = 10; i < 36; i++) {
            children.push(`${i.toString(36)}${i}`);
        }
        this.listOfOption = children;
    }
}
/** @nocollapse */ NzDemoSelectMultipleComponent.ɵfac = function NzDemoSelectMultipleComponent_Factory(t) { return new (t || NzDemoSelectMultipleComponent)(); };
/** @nocollapse */ NzDemoSelectMultipleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoSelectMultipleComponent, selectors: [["nz-demo-select-multiple"]], decls: 4, vars: 4, consts: [["nzMode", "multiple", "nzPlaceHolder", "Please select", 3, "nzMaxTagCount", "nzMaxTagPlaceholder", "ngModel", "ngModelChange"], [3, "nzLabel", "nzValue", 4, "ngFor", "ngForOf"], ["tagPlaceHolder", ""], [3, "nzLabel", "nzValue"]], template: function NzDemoSelectMultipleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-select", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoSelectMultipleComponent_Template_nz_select_ngModelChange_0_listener($event) { return ctx.listOfSelectedValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzDemoSelectMultipleComponent_nz_option_1_Template, 1, 2, "nz-option", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzDemoSelectMultipleComponent_ng_template_2_Template, 1, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r504 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzMaxTagCount", 3)("nzMaxTagPlaceholder", _r504)("ngModel", ctx.listOfSelectedValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listOfOption);
    } }, directives: [ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_1__["NzSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_1__["NzOptionComponent"]], styles: ["nz-select[_ngcontent-%COMP%] {\n        width: 100%;\n      }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoSelectMultipleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-demo-select-multiple',
                template: `
    <nz-select
      [nzMaxTagCount]="3"
      [nzMaxTagPlaceholder]="tagPlaceHolder"
      nzMode="multiple"
      nzPlaceHolder="Please select"
      [(ngModel)]="listOfSelectedValue"
    >
      <nz-option *ngFor="let item of listOfOption" [nzLabel]="item" [nzValue]="item"></nz-option>
    </nz-select>
    <ng-template #tagPlaceHolder let-selectedList> and {{ selectedList.length }} more selected </ng-template>
  `,
                styles: [
                    `
      nz-select {
        width: 100%;
      }
    `
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./site/doc/app/select/optgroup.ts":
/*!*****************************************!*\
  !*** ./site/doc/app/select/optgroup.ts ***!
  \*****************************************/
/*! exports provided: NzDemoSelectOptgroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoSelectOptgroupComponent", function() { return NzDemoSelectOptgroupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/select */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-select.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");




class NzDemoSelectOptgroupComponent {
    constructor() {
        this.selectedValue = 'lucy';
    }
}
/** @nocollapse */ NzDemoSelectOptgroupComponent.ɵfac = function NzDemoSelectOptgroupComponent_Factory(t) { return new (t || NzDemoSelectOptgroupComponent)(); };
/** @nocollapse */ NzDemoSelectOptgroupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoSelectOptgroupComponent, selectors: [["nz-demo-select-optgroup"]], decls: 6, vars: 1, consts: [["nzAllowClear", "", "nzPlaceHolder", "Choose", 3, "ngModel", "ngModelChange"], ["nzLabel", "Manager"], ["nzValue", "jack", "nzLabel", "Jack"], ["nzValue", "lucy", "nzLabel", "Lucy"], ["nzLabel", "Engineer"], ["nzValue", "tom", "nzLabel", "Tom"]], template: function NzDemoSelectOptgroupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-select", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoSelectOptgroupComponent_Template_nz_select_ngModelChange_0_listener($event) { return ctx.selectedValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-option-group", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "nz-option", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "nz-option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nz-option-group", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "nz-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedValue);
    } }, directives: [ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_1__["NzSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_1__["NzOptionGroupComponent"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_1__["NzOptionComponent"]], styles: ["nz-select[_ngcontent-%COMP%] {\n        width: 120px;\n      }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoSelectOptgroupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-demo-select-optgroup',
                template: `
    <nz-select [(ngModel)]="selectedValue" nzAllowClear nzPlaceHolder="Choose">
      <nz-option-group nzLabel="Manager">
        <nz-option nzValue="jack" nzLabel="Jack"></nz-option>
        <nz-option nzValue="lucy" nzLabel="Lucy"></nz-option>
      </nz-option-group>
      <nz-option-group nzLabel="Engineer">
        <nz-option nzValue="tom" nzLabel="Tom"></nz-option>
      </nz-option-group>
    </nz-select>
  `,
                styles: [
                    `
      nz-select {
        width: 120px;
      }
    `
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./site/doc/app/select/scroll-load.ts":
/*!********************************************!*\
  !*** ./site/doc/app/select/scroll-load.ts ***!
  \********************************************/
/*! exports provided: NzDemoSelectScrollLoadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoSelectScrollLoadComponent", function() { return NzDemoSelectScrollLoadComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/select */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-select.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/spin */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-spin.js");









function NzDemoSelectScrollLoadComponent_nz_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nz-option", 3);
} if (rf & 2) {
    const o_r511 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzValue", o_r511)("nzLabel", o_r511);
} }
function NzDemoSelectScrollLoadComponent_ng_template_2_nz_spin_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nz-spin");
} }
function NzDemoSelectScrollLoadComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, NzDemoSelectScrollLoadComponent_ng_template_2_nz_spin_0_Template, 1, 0, "nz-spin", 4);
} if (rf & 2) {
    const ctx_r510 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r510.isLoading);
} }
class NzDemoSelectScrollLoadComponent {
    constructor(http) {
        this.http = http;
        this.randomUserUrl = 'https://api.randomuser.me/?results=10';
        this.optionList = [];
        this.selectedUser = null;
        this.isLoading = false;
        // tslint:disable:no-any
        this.getRandomNameList = this.http
            .get(`${this.randomUserUrl}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((res) => res.results))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((list) => {
            return list.map((item) => `${item.name.first}`);
        }));
    }
    loadMore() {
        this.isLoading = true;
        this.getRandomNameList.subscribe(data => {
            this.isLoading = false;
            this.optionList = [...this.optionList, ...data];
        });
    }
    ngOnInit() {
        this.loadMore();
    }
}
/** @nocollapse */ NzDemoSelectScrollLoadComponent.ɵfac = function NzDemoSelectScrollLoadComponent_Factory(t) { return new (t || NzDemoSelectScrollLoadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
/** @nocollapse */ NzDemoSelectScrollLoadComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NzDemoSelectScrollLoadComponent, selectors: [["nz-demo-select-scroll-load"]], decls: 4, vars: 3, consts: [["nzPlaceHolder", "Select users", "nzAllowClear", "", 3, "ngModel", "nzDropdownRender", "ngModelChange", "nzScrollToBottom"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], ["renderTemplate", ""], [3, "nzValue", "nzLabel"], [4, "ngIf"]], template: function NzDemoSelectScrollLoadComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nz-select", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function NzDemoSelectScrollLoadComponent_Template_nz_select_ngModelChange_0_listener($event) { return ctx.selectedUser = $event; })("nzScrollToBottom", function NzDemoSelectScrollLoadComponent_Template_nz_select_nzScrollToBottom_0_listener() { return ctx.loadMore(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NzDemoSelectScrollLoadComponent_nz_option_1_Template, 1, 2, "nz-option", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, NzDemoSelectScrollLoadComponent_ng_template_2_Template, 1, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r509 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.selectedUser)("nzDropdownRender", _r509);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.optionList);
    } }, directives: [ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_3__["NzSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_3__["NzOptionComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_6__["NzSpinComponent"]], styles: ["nz-select[_ngcontent-%COMP%] {\n        width: 100%;\n      }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NzDemoSelectScrollLoadComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'nz-demo-select-scroll-load',
                template: `
    <nz-select
      [(ngModel)]="selectedUser"
      (nzScrollToBottom)="loadMore()"
      nzPlaceHolder="Select users"
      nzAllowClear
      [nzDropdownRender]="renderTemplate"
    >
      <nz-option *ngFor="let o of optionList" [nzValue]="o" [nzLabel]="o"></nz-option>
    </nz-select>
    <ng-template #renderTemplate>
      <nz-spin *ngIf="isLoading"></nz-spin>
    </ng-template>
  `,
                styles: [
                    `
      nz-select {
        width: 100%;
      }
    `
                ]
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./site/doc/app/select/search-box.ts":
/*!*******************************************!*\
  !*** ./site/doc/app/select/search-box.ts ***!
  \*******************************************/
/*! exports provided: NzDemoSelectSearchBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoSelectSearchBoxComponent", function() { return NzDemoSelectSearchBoxComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/select */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-select.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function NzDemoSelectSearchBoxComponent_nz_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nz-option", 2);
} if (rf & 2) {
    const o_r514 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzLabel", o_r514.text)("nzValue", o_r514.value);
} }
class NzDemoSelectSearchBoxComponent {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.selectedValue = null;
        this.listOfOption = [];
        this.nzFilterOption = () => true;
    }
    search(value) {
        this.httpClient
            .jsonp(`https://suggest.taobao.com/sug?code=utf-8&q=${value}`, 'callback')
            .subscribe(data => {
            const listOfOption = [];
            data.result.forEach(item => {
                listOfOption.push({
                    value: item[0],
                    text: item[0]
                });
            });
            this.listOfOption = listOfOption;
        });
    }
}
/** @nocollapse */ NzDemoSelectSearchBoxComponent.ɵfac = function NzDemoSelectSearchBoxComponent_Factory(t) { return new (t || NzDemoSelectSearchBoxComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
/** @nocollapse */ NzDemoSelectSearchBoxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NzDemoSelectSearchBoxComponent, selectors: [["nz-demo-select-search-box"]], decls: 2, vars: 4, consts: [["nzShowSearch", "", "nzServerSearch", "", "nzPlaceHolder", "input search text", 3, "ngModel", "nzShowArrow", "nzFilterOption", "ngModelChange", "nzOnSearch"], [3, "nzLabel", "nzValue", 4, "ngFor", "ngForOf"], [3, "nzLabel", "nzValue"]], template: function NzDemoSelectSearchBoxComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nz-select", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function NzDemoSelectSearchBoxComponent_Template_nz_select_ngModelChange_0_listener($event) { return ctx.selectedValue = $event; })("nzOnSearch", function NzDemoSelectSearchBoxComponent_Template_nz_select_nzOnSearch_0_listener($event) { return ctx.search($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NzDemoSelectSearchBoxComponent_nz_option_1_Template, 1, 2, "nz-option", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.selectedValue)("nzShowArrow", false)("nzFilterOption", ctx.nzFilterOption);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.listOfOption);
    } }, directives: [ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_2__["NzSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_2__["NzOptionComponent"]], styles: ["nz-select[_ngcontent-%COMP%] {\n        width: 200px;\n      }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NzDemoSelectSearchBoxComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'nz-demo-select-search-box',
                template: `
    <nz-select
      nzShowSearch
      nzServerSearch
      nzPlaceHolder="input search text"
      [(ngModel)]="selectedValue"
      [nzShowArrow]="false"
      [nzFilterOption]="nzFilterOption"
      (nzOnSearch)="search($event)"
    >
      <nz-option *ngFor="let o of listOfOption" [nzLabel]="o.text" [nzValue]="o.value"> </nz-option>
    </nz-select>
  `,
                styles: [
                    `
      nz-select {
        width: 200px;
      }
    `
                ]
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./site/doc/app/select/search.ts":
/*!***************************************!*\
  !*** ./site/doc/app/select/search.ts ***!
  \***************************************/
/*! exports provided: NzDemoSelectSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoSelectSearchComponent", function() { return NzDemoSelectSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/select */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-select.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");




class NzDemoSelectSearchComponent {
    constructor() {
        this.selectedValue = null;
    }
}
/** @nocollapse */ NzDemoSelectSearchComponent.ɵfac = function NzDemoSelectSearchComponent_Factory(t) { return new (t || NzDemoSelectSearchComponent)(); };
/** @nocollapse */ NzDemoSelectSearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoSelectSearchComponent, selectors: [["nz-demo-select-search"]], decls: 4, vars: 1, consts: [["nzShowSearch", "", "nzAllowClear", "", "nzPlaceHolder", "Select a person", 3, "ngModel", "ngModelChange"], ["nzLabel", "Jack", "nzValue", "jack"], ["nzLabel", "Lucy", "nzValue", "lucy"], ["nzLabel", "Tom", "nzValue", "tom"]], template: function NzDemoSelectSearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-select", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoSelectSearchComponent_Template_nz_select_ngModelChange_0_listener($event) { return ctx.selectedValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "nz-option", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "nz-option", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "nz-option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedValue);
    } }, directives: [ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_1__["NzSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_1__["NzOptionComponent"]], styles: ["nz-select[_ngcontent-%COMP%] {\n        width: 200px;\n      }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoSelectSearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-demo-select-search',
                template: `
    <nz-select nzShowSearch nzAllowClear nzPlaceHolder="Select a person" [(ngModel)]="selectedValue">
      <nz-option nzLabel="Jack" nzValue="jack"></nz-option>
      <nz-option nzLabel="Lucy" nzValue="lucy"></nz-option>
      <nz-option nzLabel="Tom" nzValue="tom"></nz-option>
    </nz-select>
  `,
                styles: [
                    `
      nz-select {
        width: 200px;
      }
    `
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./site/doc/app/select/select-users.ts":
/*!*********************************************!*\
  !*** ./site/doc/app/select/select-users.ts ***!
  \*********************************************/
/*! exports provided: NzDemoSelectSelectUsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoSelectSelectUsersComponent", function() { return NzDemoSelectSelectUsersComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/select */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-select.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/icon */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-icon.js");










function NzDemoSelectSelectUsersComponent_ng_container_1_nz_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nz-option", 4);
} if (rf & 2) {
    const o_r517 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzValue", o_r517)("nzLabel", o_r517);
} }
function NzDemoSelectSelectUsersComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NzDemoSelectSelectUsersComponent_ng_container_1_nz_option_1_Template, 1, 2, "nz-option", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r515 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r515.isLoading);
} }
function NzDemoSelectSelectUsersComponent_nz_option_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nz-option", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Loading Data... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class NzDemoSelectSelectUsersComponent {
    constructor(http) {
        this.http = http;
        this.randomUserUrl = 'https://api.randomuser.me/?results=5';
        this.searchChange$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('');
        this.optionList = [];
        this.isLoading = false;
    }
    onSearch(value) {
        this.isLoading = true;
        this.searchChange$.next(value);
    }
    ngOnInit() {
        // tslint:disable:no-any
        const getRandomNameList = (name) => this.http
            .get(`${this.randomUserUrl}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((res) => res.results))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((list) => {
            return list.map((item) => `${item.name.first} ${name}`);
        }));
        const optionList$ = this.searchChange$
            .asObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(500))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(getRandomNameList));
        optionList$.subscribe(data => {
            this.optionList = data;
            this.isLoading = false;
        });
    }
}
/** @nocollapse */ NzDemoSelectSelectUsersComponent.ɵfac = function NzDemoSelectSelectUsersComponent_Factory(t) { return new (t || NzDemoSelectSelectUsersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
/** @nocollapse */ NzDemoSelectSelectUsersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NzDemoSelectSelectUsersComponent, selectors: [["nz-demo-select-select-users"]], decls: 3, vars: 3, consts: [["nzMode", "multiple", "nzPlaceHolder", "Select users", "nzAllowClear", "", "nzShowSearch", "", "nzServerSearch", "", 3, "ngModel", "ngModelChange", "nzOnSearch"], [4, "ngFor", "ngForOf"], ["nzDisabled", "", "nzCustomContent", "", 4, "ngIf"], [3, "nzValue", "nzLabel", 4, "ngIf"], [3, "nzValue", "nzLabel"], ["nzDisabled", "", "nzCustomContent", ""], ["nz-icon", "", "nzType", "loading", 1, "loading-icon"]], template: function NzDemoSelectSelectUsersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nz-select", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function NzDemoSelectSelectUsersComponent_Template_nz_select_ngModelChange_0_listener($event) { return ctx.selectedUser = $event; })("nzOnSearch", function NzDemoSelectSelectUsersComponent_Template_nz_select_nzOnSearch_0_listener($event) { return ctx.onSearch($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NzDemoSelectSelectUsersComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, NzDemoSelectSelectUsersComponent_nz_option_2_Template, 3, 0, "nz-option", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.selectedUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.optionList);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoading);
    } }, directives: [ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_4__["NzSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_4__["NzOptionComponent"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__["NzIconDirective"]], styles: ["nz-select[_ngcontent-%COMP%] {\n        width: 100%;\n      }\n\n      .loading-icon[_ngcontent-%COMP%] {\n        margin-right: 8px;\n      }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NzDemoSelectSelectUsersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'nz-demo-select-select-users',
                template: `
    <nz-select
      nzMode="multiple"
      nzPlaceHolder="Select users"
      nzAllowClear
      nzShowSearch
      nzServerSearch
      [(ngModel)]="selectedUser"
      (nzOnSearch)="onSearch($event)"
    >
      <ng-container *ngFor="let o of optionList">
        <nz-option *ngIf="!isLoading" [nzValue]="o" [nzLabel]="o"></nz-option>
      </ng-container>
      <nz-option *ngIf="isLoading" nzDisabled nzCustomContent>
        <i nz-icon nzType="loading" class="loading-icon"></i> Loading Data...
      </nz-option>
    </nz-select>
  `,
                styles: [
                    `
      nz-select {
        width: 100%;
      }

      .loading-icon {
        margin-right: 8px;
      }
    `
                ]
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./site/doc/app/select/size.ts":
/*!*************************************!*\
  !*** ./site/doc/app/select/size.ts ***!
  \*************************************/
/*! exports provided: NzDemoSelectSizeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoSelectSizeComponent", function() { return NzDemoSelectSizeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/radio */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-radio.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/select */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-select.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function NzDemoSelectSizeComponent_nz_option_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-option", 9);
} if (rf & 2) {
    const option_r524 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzLabel", option_r524.label)("nzValue", option_r524.value);
} }
function NzDemoSelectSizeComponent_nz_option_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-option", 9);
} if (rf & 2) {
    const option_r525 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzLabel", option_r525.label)("nzValue", option_r525.value);
} }
function NzDemoSelectSizeComponent_nz_option_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-option", 9);
} if (rf & 2) {
    const option_r526 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzLabel", option_r526.label)("nzValue", option_r526.value);
} }
function NzDemoSelectSizeComponent_nz_option_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-option", 9);
} if (rf & 2) {
    const option_r527 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzLabel", option_r527.label)("nzValue", option_r527.value);
} }
class NzDemoSelectSizeComponent {
    constructor() {
        this.listOfOption = [];
        this.size = 'default';
        this.singleValue = 'a10';
        this.multipleValue = ['a10', 'c12'];
        this.tagValue = ['a10', 'c12', 'tag'];
    }
    ngOnInit() {
        const children = [];
        for (let i = 10; i < 36; i++) {
            children.push({ label: i.toString(36) + i, value: i.toString(36) + i });
        }
        this.listOfOption = children;
    }
}
/** @nocollapse */ NzDemoSelectSizeComponent.ɵfac = function NzDemoSelectSizeComponent_Factory(t) { return new (t || NzDemoSelectSizeComponent)(); };
/** @nocollapse */ NzDemoSelectSizeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoSelectSizeComponent, selectors: [["nz-demo-select-size"]], decls: 26, vars: 13, consts: [[3, "ngModel", "ngModelChange"], ["nz-radio-button", "", "nzValue", "large"], ["nz-radio-button", "", "nzValue", "default"], ["nz-radio-button", "", "nzValue", "small"], [3, "ngModel", "nzSize", "ngModelChange"], [3, "nzLabel", "nzValue", 4, "ngFor", "ngForOf"], ["nzShowSearch", "", 3, "ngModel", "nzSize", "ngModelChange"], ["nzMode", "multiple", "nzPlaceHolder", "Please select", 3, "ngModel", "nzSize", "ngModelChange"], ["nzMode", "tags", "nzPlaceHolder", "Please select", 3, "ngModel", "nzSize", "ngModelChange"], [3, "nzLabel", "nzValue"]], template: function NzDemoSelectSizeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-radio-group", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoSelectSizeComponent_Template_nz_radio_group_ngModelChange_0_listener($event) { return ctx.size = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Large");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "nz-select", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoSelectSizeComponent_Template_nz_select_ngModelChange_12_listener($event) { return ctx.singleValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, NzDemoSelectSizeComponent_nz_option_13_Template, 1, 2, "nz-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "nz-select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoSelectSizeComponent_Template_nz_select_ngModelChange_16_listener($event) { return ctx.singleValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, NzDemoSelectSizeComponent_nz_option_17_Template, 1, 2, "nz-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "nz-select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoSelectSizeComponent_Template_nz_select_ngModelChange_20_listener($event) { return ctx.multipleValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, NzDemoSelectSizeComponent_nz_option_21_Template, 1, 2, "nz-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "nz-select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoSelectSizeComponent_Template_nz_select_ngModelChange_24_listener($event) { return ctx.tagValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, NzDemoSelectSizeComponent_nz_option_25_Template, 1, 2, "nz-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.size);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.singleValue)("nzSize", ctx.size);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listOfOption);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.singleValue)("nzSize", ctx.size);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listOfOption);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.multipleValue)("nzSize", ctx.size);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listOfOption);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.tagValue)("nzSize", ctx.size);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listOfOption);
    } }, directives: [ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_1__["NzRadioGroupComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_1__["NzRadioComponent"], ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_1__["NzRadioButtonDirective"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_3__["NzSelectComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_3__["NzOptionComponent"]], styles: ["nz-select[_ngcontent-%COMP%] {\n        width: 100%;\n      }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoSelectSizeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-demo-select-size',
                template: `
    <nz-radio-group [(ngModel)]="size">
      <label nz-radio-button nzValue="large"><span>Large</span></label>
      <label nz-radio-button nzValue="default"><span>Default</span></label>
      <label nz-radio-button nzValue="small"><span>Small</span></label>
    </nz-radio-group>
    <br /><br />
    <nz-select [(ngModel)]="singleValue" [nzSize]="size">
      <nz-option *ngFor="let option of listOfOption" [nzLabel]="option.label" [nzValue]="option.value"></nz-option>
    </nz-select>
    <br /><br />
    <nz-select [(ngModel)]="singleValue" [nzSize]="size" nzShowSearch>
      <nz-option *ngFor="let option of listOfOption" [nzLabel]="option.label" [nzValue]="option.value"></nz-option>
    </nz-select>
    <br /><br />
    <nz-select [(ngModel)]="multipleValue" [nzSize]="size" nzMode="multiple" nzPlaceHolder="Please select">
      <nz-option *ngFor="let option of listOfOption" [nzLabel]="option.label" [nzValue]="option.value"></nz-option>
    </nz-select>
    <br /><br />
    <nz-select [(ngModel)]="tagValue" [nzSize]="size" nzMode="tags" nzPlaceHolder="Please select">
      <nz-option *ngFor="let option of listOfOption" [nzLabel]="option.label" [nzValue]="option.value"></nz-option>
    </nz-select>
  `,
                styles: [
                    `
      nz-select {
        width: 100%;
      }
    `
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./site/doc/app/select/tags.ts":
/*!*************************************!*\
  !*** ./site/doc/app/select/tags.ts ***!
  \*************************************/
/*! exports provided: NzDemoSelectTagsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoSelectTagsComponent", function() { return NzDemoSelectTagsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/select */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-select.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function NzDemoSelectTagsComponent_nz_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-option", 2);
} if (rf & 2) {
    const option_r529 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzLabel", option_r529.label)("nzValue", option_r529.value);
} }
class NzDemoSelectTagsComponent {
    constructor() {
        this.listOfOption = [];
        this.listOfTagOptions = [];
    }
    ngOnInit() {
        const children = [];
        for (let i = 10; i < 36; i++) {
            children.push({ label: i.toString(36) + i, value: i.toString(36) + i });
        }
        this.listOfOption = children;
    }
}
/** @nocollapse */ NzDemoSelectTagsComponent.ɵfac = function NzDemoSelectTagsComponent_Factory(t) { return new (t || NzDemoSelectTagsComponent)(); };
/** @nocollapse */ NzDemoSelectTagsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoSelectTagsComponent, selectors: [["nz-demo-select-tags"]], decls: 2, vars: 2, consts: [["nzMode", "tags", "nzPlaceHolder", "Tag Mode", 3, "ngModel", "ngModelChange"], [3, "nzLabel", "nzValue", 4, "ngFor", "ngForOf"], [3, "nzLabel", "nzValue"]], template: function NzDemoSelectTagsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-select", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoSelectTagsComponent_Template_nz_select_ngModelChange_0_listener($event) { return ctx.listOfTagOptions = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzDemoSelectTagsComponent_nz_option_1_Template, 1, 2, "nz-option", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.listOfTagOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listOfOption);
    } }, directives: [ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_1__["NzSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_1__["NzOptionComponent"]], styles: ["nz-select[_ngcontent-%COMP%] {\n        width: 100%;\n      }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoSelectTagsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-demo-select-tags',
                template: `
    <nz-select nzMode="tags" nzPlaceHolder="Tag Mode" [(ngModel)]="listOfTagOptions">
      <nz-option *ngFor="let option of listOfOption" [nzLabel]="option.label" [nzValue]="option.value"></nz-option>
    </nz-select>
  `,
                styles: [
                    `
      nz-select {
        width: 100%;
      }
    `
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./site/doc/app/select/zh.component.ts":
/*!*********************************************!*\
  !*** ./site/doc/app/select/zh.component.ts ***!
  \*********************************************/
/*! exports provided: NzDemoSelectZhComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoSelectZhComponent", function() { return NzDemoSelectZhComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _share_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../share/codebox/codebox.component */ "./site/doc/app/share/codebox/codebox.component.ts");
/* harmony import */ var ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/affix */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-affix.js");
/* harmony import */ var ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/anchor */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-anchor.js");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/icon */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-icon.js");
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-tooltip.js");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/grid */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-grid.js");
/* harmony import */ var _basic__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./basic */ "./site/doc/app/select/basic.ts");
/* harmony import */ var _multiple__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./multiple */ "./site/doc/app/select/multiple.ts");
/* harmony import */ var _tags__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tags */ "./site/doc/app/select/tags.ts");
/* harmony import */ var _coordinate__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./coordinate */ "./site/doc/app/select/coordinate.ts");
/* harmony import */ var _label_in_value__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./label-in-value */ "./site/doc/app/select/label-in-value.ts");
/* harmony import */ var _select_users__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./select-users */ "./site/doc/app/select/select-users.ts");
/* harmony import */ var _hide_selected__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./hide-selected */ "./site/doc/app/select/hide-selected.ts");
/* harmony import */ var _scroll_load__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./scroll-load */ "./site/doc/app/select/scroll-load.ts");
/* harmony import */ var _big_data__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./big-data */ "./site/doc/app/select/big-data.ts");
/* harmony import */ var _custom_template__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./custom-template */ "./site/doc/app/select/custom-template.ts");
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./search */ "./site/doc/app/select/search.ts");
/* harmony import */ var _size__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./size */ "./site/doc/app/select/size.ts");
/* harmony import */ var _optgroup__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./optgroup */ "./site/doc/app/select/optgroup.ts");
/* harmony import */ var _search_box__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./search-box */ "./site/doc/app/select/search-box.ts");
/* harmony import */ var _automatic_tokenization__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./automatic-tokenization */ "./site/doc/app/select/automatic-tokenization.ts");
/* harmony import */ var _custom_dropdown_menu__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./custom-dropdown-menu */ "./site/doc/app/select/custom-dropdown-menu.ts");
/* harmony import */ var _custom_content__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./custom-content */ "./site/doc/app/select/custom-content.ts");
/* harmony import */ var _default_value__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./default-value */ "./site/doc/app/select/default-value.ts");
/* harmony import */ var _border_less__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./border-less */ "./site/doc/app/select/border-less.ts");




























class NzDemoSelectZhComponent {
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
/** @nocollapse */ NzDemoSelectZhComponent.ɵfac = function NzDemoSelectZhComponent_Factory(t) { return new (t || NzDemoSelectZhComponent)(); };
/** @nocollapse */ NzDemoSelectZhComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoSelectZhComponent, selectors: [["nz-demo-select"]], viewQuery: function NzDemoSelectZhComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_share_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_1__["NzCodeBoxComponent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.codeBoxes = _t);
    } }, decls: 876, vars: 64, consts: [[1, "toc-affix", 3, "nzOffsetTop"], ["nzShowInkInFixed", "", 3, "nzAffix", "nzClick"], ["nzHref", "#components-select-demo-basic", "nzTitle", "\u57FA\u672C\u4F7F\u7528"], ["nzHref", "#components-select-demo-search", "nzTitle", "\u5E26\u641C\u7D22\u6846"], ["nzHref", "#components-select-demo-multiple", "nzTitle", "\u591A\u9009"], ["nzHref", "#components-select-demo-size", "nzTitle", "\u4E09\u79CD\u5927\u5C0F"], ["nzHref", "#components-select-demo-tags", "nzTitle", "\u6807\u7B7E"], ["nzHref", "#components-select-demo-optgroup", "nzTitle", "\u5206\u7EC4"], ["nzHref", "#components-select-demo-coordinate", "nzTitle", "\u8054\u52A8"], ["nzHref", "#components-select-demo-search-box", "nzTitle", "\u641C\u7D22\u6846"], ["nzHref", "#components-select-demo-label-in-value", "nzTitle", "\u83B7\u5F97\u9009\u9879\u7684\u5BF9\u8C61"], ["nzHref", "#components-select-demo-automatic-tokenization", "nzTitle", "\u81EA\u52A8\u5206\u8BCD"], ["nzHref", "#components-select-demo-select-users", "nzTitle", "\u641C\u7D22\u7528\u6237"], ["nzHref", "#components-select-demo-custom-dropdown-menu", "nzTitle", "\u6269\u5C55\u83DC\u5355"], ["nzHref", "#components-select-demo-hide-selected", "nzTitle", "\u9690\u85CF\u5DF2\u9009\u62E9\u9009\u9879"], ["nzHref", "#components-select-demo-custom-content", "nzTitle", "\u81EA\u5B9A\u4E49\u4E0B\u62C9\u83DC\u5355\u5185\u5BB9"], ["nzHref", "#components-select-demo-scroll-load", "nzTitle", "\u4E0B\u62C9\u52A0\u8F7D"], ["nzHref", "#components-select-demo-default-value", "nzTitle", "\u9ED8\u8BA4\u6570\u636E"], ["nzHref", "#components-select-demo-big-data", "nzTitle", "\u5927\u91CF\u6570\u636E"], ["nzHref", "#components-select-demo-border-less", "nzTitle", "\u65E0\u8FB9\u6846"], ["nzHref", "#components-select-demo-custom-template", "nzTitle", "\u81EA\u5B9A\u4E49\u9009\u62E9\u6807\u7B7E"], ["nzHref", "#api", "nzTitle", "API"], [1, "markdown"], [1, "subtitle"], [1, "widget"], ["href", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/select/doc/index.zh-CN.md", "target", "_blank", "rel", "noopener noreferrer", 1, "edit-button"], ["nz-icon", "", "nzType", "edit"], ["id", "\u4F55\u65F6\u4F7F\u7528"], ["onclick", "window.location.hash = '\u4F55\u65F6\u4F7F\u7528'", 1, "anchor"], ["href", "/components/radio/zh"], [1, "language-ts"], [1, "token", "keyword"], [1, "token", "punctuation"], [1, "token", "string"], ["nz-icon", "", "nzType", "appstore", "nz-tooltip", "", "nzTooltipTitle", "\u5C55\u5F00\u5168\u90E8\u4EE3\u7801", 1, "code-box-expand-trigger", 3, "click"], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", 3, "nzXl", "nzSpan"], ["nzTitle", "\u57FA\u672C\u4F7F\u7528", "nzSelector", "nz-demo-select-basic", "nzGenerateCommand", "ng g ng-zorro-antd:select-basic <name>", "nzComponentName", "NzDemoSelectBasicComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["demo", ""], ["intro", ""], ["nzTitle", "\u591A\u9009", "nzSelector", "nz-demo-select-multiple", "nzGenerateCommand", "ng g ng-zorro-antd:select-multiple <name>", "nzComponentName", "NzDemoSelectMultipleComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u6807\u7B7E", "nzSelector", "nz-demo-select-tags", "nzGenerateCommand", "ng g ng-zorro-antd:select-tags <name>", "nzComponentName", "NzDemoSelectTagsComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u8054\u52A8", "nzSelector", "nz-demo-select-coordinate", "nzGenerateCommand", "ng g ng-zorro-antd:select-coordinate <name>", "nzComponentName", "NzDemoSelectCoordinateComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["href", "/components/cascader/zh"], ["nzTitle", "\u83B7\u5F97\u9009\u9879\u7684\u5BF9\u8C61", "nzSelector", "nz-demo-select-label-in-value", "nzGenerateCommand", "ng g ng-zorro-antd:select-label-in-value <name>", "nzComponentName", "NzDemoSelectLabelInValueComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["href", "https://angular.io/api/forms/SelectControlValueAccessor#caveat-option-selection"], ["nzTitle", "\u641C\u7D22\u7528\u6237", "nzSelector", "nz-demo-select-select-users", "nzGenerateCommand", "ng g ng-zorro-antd:select-select-users <name>", "nzComponentName", "NzDemoSelectSelectUsersComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u9690\u85CF\u5DF2\u9009\u62E9\u9009\u9879", "nzSelector", "nz-demo-select-hide-selected", "nzGenerateCommand", "ng g ng-zorro-antd:select-hide-selected <name>", "nzComponentName", "NzDemoSelectHideSelectedComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u4E0B\u62C9\u52A0\u8F7D", "nzSelector", "nz-demo-select-scroll-load", "nzGenerateCommand", "ng g ng-zorro-antd:select-scroll-load <name>", "nzComponentName", "NzDemoSelectScrollLoadComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u5927\u91CF\u6570\u636E", "nzSelector", "nz-demo-select-big-data", "nzGenerateCommand", "ng g ng-zorro-antd:select-big-data <name>", "nzComponentName", "NzDemoSelectBigDataComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u81EA\u5B9A\u4E49\u9009\u62E9\u6807\u7B7E", "nzSelector", "nz-demo-select-custom-template", "nzGenerateCommand", "ng g ng-zorro-antd:select-custom-template <name>", "nzComponentName", "NzDemoSelectCustomTemplateComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u5E26\u641C\u7D22\u6846", "nzSelector", "nz-demo-select-search", "nzGenerateCommand", "ng g ng-zorro-antd:select-search <name>", "nzComponentName", "NzDemoSelectSearchComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u4E09\u79CD\u5927\u5C0F", "nzSelector", "nz-demo-select-size", "nzGenerateCommand", "ng g ng-zorro-antd:select-size <name>", "nzComponentName", "NzDemoSelectSizeComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u5206\u7EC4", "nzSelector", "nz-demo-select-optgroup", "nzGenerateCommand", "ng g ng-zorro-antd:select-optgroup <name>", "nzComponentName", "NzDemoSelectOptgroupComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u641C\u7D22\u6846", "nzSelector", "nz-demo-select-search-box", "nzGenerateCommand", "ng g ng-zorro-antd:select-search-box <name>", "nzComponentName", "NzDemoSelectSearchBoxComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u81EA\u52A8\u5206\u8BCD", "nzSelector", "nz-demo-select-automatic-tokenization", "nzGenerateCommand", "ng g ng-zorro-antd:select-automatic-tokenization <name>", "nzComponentName", "NzDemoSelectAutomaticTokenizationComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u6269\u5C55\u83DC\u5355", "nzSelector", "nz-demo-select-custom-dropdown-menu", "nzGenerateCommand", "ng g ng-zorro-antd:select-custom-dropdown-menu <name>", "nzComponentName", "NzDemoSelectCustomDropdownMenuComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u81EA\u5B9A\u4E49\u4E0B\u62C9\u83DC\u5355\u5185\u5BB9", "nzSelector", "nz-demo-select-custom-content", "nzGenerateCommand", "ng g ng-zorro-antd:select-custom-content <name>", "nzComponentName", "NzDemoSelectCustomContentComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u9ED8\u8BA4\u6570\u636E", "nzSelector", "nz-demo-select-default-value", "nzGenerateCommand", "ng g ng-zorro-antd:select-default-value <name>", "nzComponentName", "NzDemoSelectDefaultValueComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u65E0\u8FB9\u6846", "nzSelector", "nz-demo-select-border-less", "nzGenerateCommand", "ng g ng-zorro-antd:select-border-less <name>", "nzComponentName", "NzDemoSelectBorderLessComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], [1, "markdown", "api-container"], ["id", "api"], ["onclick", "window.location.hash = 'api'", 1, "anchor"], [1, "language-html"], [1, "token", "tag"], [1, "token", "attr-name"], [1, "token", "attr-value"], ["id", "nz-select"], [1, "api-type-label", "component"], ["onclick", "window.location.hash = 'nz-select'", 1, "anchor"], ["id", "nz-option"], ["onclick", "window.location.hash = 'nz-option'", 1, "anchor"], ["id", "nz-option-group"], ["onclick", "window.location.hash = 'nz-option-group'", 1, "anchor"], ["id", "\u65B9\u6CD5"], ["onclick", "window.location.hash = '\u65B9\u6CD5'", 1, "anchor"]], template: function NzDemoSelectZhComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-affix", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nz-anchor", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzClick", function NzDemoSelectZhComponent_Template_nz_anchor_nzClick_2_listener($event) { return ctx.goLink($event); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "nz-link", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "section", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Select");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\u9009\u62E9\u5668");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "section", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "\u4E0B\u62C9\u9009\u62E9\u5668\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h2", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "\u4F55\u65F6\u4F7F\u7528");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "\u5F39\u51FA\u4E00\u4E2A\u4E0B\u62C9\u83DC\u5355\u7ED9\u7528\u6237\u9009\u62E9\u64CD\u4F5C\uFF0C\u7528\u4E8E\u4EE3\u66FF\u539F\u751F\u7684\u9009\u62E9\u5668\uFF0C\u6216\u8005\u9700\u8981\u4E00\u4E2A\u66F4\u4F18\u96C5\u7684\u591A\u9009\u5668\u65F6\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "\u5F53\u9009\u9879\u5C11\u65F6\uFF08\u5C11\u4E8E 5 \u9879\uFF09\uFF0C\u5EFA\u8BAE\u76F4\u63A5\u5C06\u9009\u9879\u5E73\u94FA\uFF0C\u4F7F\u7528 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Radio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " \u662F\u66F4\u597D\u7684\u9009\u62E9\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "pre", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "import");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "{");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " NzSelectModule ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "from");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "'ng-zorro-antd/select'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "\u4EE3\u7801\u6F14\u793A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoSelectZhComponent_Template_i_click_68_listener() { return ctx.expandAllCode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "nz-code-box", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "nz-demo-select-basic", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "\u57FA\u672C\u4F7F\u7528\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "nz-code-box", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "nz-demo-select-multiple", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "\u591A\u9009\uFF0C\u4ECE\u5DF2\u6709\u6761\u76EE\u4E2D\u9009\u62E9\uFF0C\u4F8B\u5B50\u4E2D\u901A\u8FC7 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "nzMaxTagCount");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, " \u9650\u5236\u6700\u591A\u663E\u793A3\u4E2A\u9009\u9879\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "nz-code-box", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "nz-demo-select-tags", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "tags select\uFF0C\u968F\u610F\u8F93\u5165\u7684\u5185\u5BB9\uFF08scroll the menu\uFF09");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "nz-code-box", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "nz-demo-select-coordinate", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "\u7701\u5E02\u8054\u52A8\u662F\u5178\u578B\u7684\u4F8B\u5B50\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "\u63A8\u8350\u4F7F\u7528 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "a", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Cascader");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, " \u7EC4\u4EF6\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "nz-code-box", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "nz-demo-select-label-in-value", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "ngModel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, " \u53D6\u5230\u7684\u503C\u4E3A\u9009\u4E2D ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "nz-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, " \u7684 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "nzValue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, " \u503C\uFF0C\u5F53 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "nzValue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, " \u4F20\u5165\u4E3A\u4E00\u4E2A\u5BF9\u8C61\u65F6\uFF0C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "ngModel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, " \u83B7\u53D6\u7684\u503C\u4E5F\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "compareWith");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, " \u7684\u7528\u6CD5\u53C2\u89C1 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "\u8FD9\u91CC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "nz-code-box", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "nz-demo-select-select-users", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "\u4E00\u4E2A\u5E26\u6709\u8FDC\u7A0B\u641C\u7D22\uFF0C\u8282\u6D41\u63A7\u5236\uFF0C\u8BF7\u6C42\u65F6\u5E8F\u63A7\u5236\uFF0C\u52A0\u8F7D\u72B6\u6001\u7684\u591A\u9009\u793A\u4F8B\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "nz-code-box", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "nz-demo-select-hide-selected", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "\u901A\u8FC7 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "nzHide");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, " \u9690\u85CF\u4E0B\u62C9\u5217\u8868\u4E2D\u5DF2\u9009\u62E9\u7684\u9009\u9879\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "nz-code-box", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "nz-demo-select-scroll-load", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "\u4E00\u4E2A\u5E26\u6709\u4E0B\u62C9\u52A0\u8F7D\u8FDC\u7A0B\u6570\u636E\u7684\u4F8B\u5B50\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "nz-code-box", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](143, "nz-demo-select-big-data", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "\u7EC4\u4EF6\u4F7F\u7528\u4E86\u865A\u62DF\u6EDA\u52A8\u6280\u672F\uFF0C\u53EF\u4EE5\u540C\u65F6\u5904\u7406\u5927\u91CF\u6570\u636E\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "nz-code-box", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](148, "nz-demo-select-custom-template", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "\u901A\u8FC7 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "nzCustomTemplate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, " \u81EA\u5B9A\u4E49 nz-select \u663E\u793A\u7684\u5185\u5BB9\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "nz-code-box", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](157, "nz-demo-select-search", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "\u5C55\u5F00\u540E\u53EF\u5BF9\u9009\u9879\u8FDB\u884C\u641C\u7D22\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "nz-code-box", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](162, "nz-demo-select-size", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "\u4E09\u79CD\u5927\u5C0F\u7684\u9009\u62E9\u6846\uFF0C\u5F53 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "nzSize");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, " \u5206\u522B\u4E3A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, "large");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, " \u548C ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, " \u65F6\uFF0C\u8F93\u5165\u6846\u9AD8\u5EA6\u4E3A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "40px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, " \u548C ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "24px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, " \uFF0C\u9ED8\u8BA4\u9AD8\u5EA6\u4E3A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "32px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "nz-code-box", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](185, "nz-demo-select-optgroup", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "\u7528 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, "nz-option-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, " \u8FDB\u884C\u9009\u9879\u5206\u7EC4\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "nz-code-box", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](193, "nz-demo-select-search-box", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, "\u641C\u7D22\u548C\u8FDC\u7A0B\u6570\u636E\u7ED3\u5408\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "nz-code-box", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](198, "nz-demo-select-automatic-tokenization", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, "\u8BD5\u4E0B\u590D\u5236 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, "\u9732\u897F,\u6770\u514B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, " \u5230\u8F93\u5165\u6846\u91CC\u3002\u53EA\u5728 tags \u548C multiple \u6A21\u5F0F\u4E0B\u53EF\u7528\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "nz-code-box", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](206, "nz-demo-select-custom-dropdown-menu", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, "\u4F7F\u7528 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](211, "nzDropdownRender");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](212, " \u5BF9\u4E0B\u62C9\u83DC\u5355\u8FDB\u884C\u81EA\u7531\u6269\u5C55\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "nz-code-box", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](214, "nz-demo-select-custom-content", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, "\u901A\u8FC7 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](219, "nzCustomContent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, " \u81EA\u5B9A\u4E49\u4E0B\u62C9\u83DC\u5355\u9009\u9879\u663E\u793A\u7684\u5185\u5BB9\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "nz-code-box", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](222, "nz-demo-select-default-value", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](225, "\u5F53\u9700\u8981\u663E\u793A\u9ED8\u8BA4\u503C\uFF0C\u540C\u65F6\u9ED8\u8BA4\u503C\u53C8\u4E0D\u5728\u9009\u9879\u5217\u8868\u4E2D\u65F6\uFF0C\u53EF\u4EE5\u4F7F\u7528 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](227, "nzHide");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](228, " \u5728 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](230, "nz-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](231, " \u4E2D\u5C06\u9ED8\u8BA4\u9009\u9879\u9690\u85CF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "nz-code-box", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](233, "nz-demo-select-border-less", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](236, "\u65E0\u8FB9\u6846\u6837\u5F0F\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "section", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "h2", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](240, "API");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "a", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](242, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "pre", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "span", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "span", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](248, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](249, "nz-select");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](251, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](252, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "span", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "span", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](256, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](257, "nz-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](258, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "span", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](260, "nzValue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "span", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](263, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](265, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](266, "lucy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](268, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](269, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "span", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](271, "nzLabel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "span", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](274, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](276, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](277, "Lucy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](279, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](281, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "span", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "span", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](284, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](285, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](286, "nz-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](288, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](289, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "span", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "span", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](293, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](294, "nz-select");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](295, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](296, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](297, "h3", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](298, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](299, "nz-select");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "label", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](301, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "a", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](303, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](304, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](306, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](307, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](308, "\u53C2\u6570");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](309, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](310, "\u8BF4\u660E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](311, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](312, "\u7C7B\u578B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](313, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](314, "\u9ED8\u8BA4\u503C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](315, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](316, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](317, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](318, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](319, "[ngModel]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](320, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](321, "\u5F53\u524D\u9009\u4E2D\u7684 nz-option \u7684 nzValue \u503C\uFF0C\u53EF\u53CC\u5411\u7ED1\u5B9A\uFF0C\u5F53 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](322, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](323, "nzMode");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](324, " \u4E3A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](325, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](326, "multiple");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](327, " \u6216 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](328, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](329, "tags");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](330, " \u65F6\uFF0CngModel \u4E3A\u6570\u7EC4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](331, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](332, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](333, "any | any[]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](334, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](335, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](336, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](337, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](338, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](339, "[compareWith]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](340, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](341, "\u4E0E ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](342, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](343, "SelectControlValueAccessor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](344, " \u76F8\u540C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](345, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](346, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](347, "(o1: any, o2: any) => boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](348, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](349, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](350, "(o1: any, o2: any) => o1===o2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](351, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](352, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](353, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](354, "[nzAutoClearSearchValue]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](355, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](356, "\u662F\u5426\u5728\u9009\u4E2D\u9879\u540E\u6E05\u7A7A\u641C\u7D22\u6846\uFF0C\u53EA\u5728 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](357, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](358, "mode");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](359, " \u4E3A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](360, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](361, "multiple");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](362, " \u6216 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](363, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](364, "tags");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](365, " \u65F6\u6709\u6548\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](366, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](367, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](368, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](369, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](370, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](371, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](372, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](373, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](374, "[nzAllowClear]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](375, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](376, "\u652F\u6301\u6E05\u9664");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](377, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](378, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](379, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](380, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](381, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](382, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](383, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](384, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](385, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](386, "[nzOpen]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](387, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](388, "\u4E0B\u62C9\u83DC\u5355\u662F\u5426\u6253\u5F00\uFF0C\u53EF\u53CC\u5411\u7ED1\u5B9A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](389, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](390, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](391, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](392, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](393, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](394, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](395, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](396, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](397, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](398, "[nzAutoFocus]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](399, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](400, "\u9ED8\u8BA4\u83B7\u53D6\u7126\u70B9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](401, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](402, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](403, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](404, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](405, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](406, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](407, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](408, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](409, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](410, "[nzDisabled]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](411, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](412, "\u662F\u5426\u7981\u7528");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](413, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](414, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](415, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](416, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](417, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](418, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](419, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](420, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](421, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](422, "[nzDropdownClassName]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](423, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](424, "\u4E0B\u62C9\u83DC\u5355\u7684 className \u5C5E\u6027");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](425, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](426, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](427, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](428, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](429, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](430, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](431, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](432, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](433, "[nzDropdownMatchSelectWidth]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](434, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](435, "\u4E0B\u62C9\u83DC\u5355\u548C\u9009\u62E9\u5668\u540C\u5BBD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](436, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](437, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](438, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](439, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](440, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](441, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](442, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](443, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](444, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](445, "[nzDropdownStyle]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](446, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](447, "\u4E0B\u62C9\u83DC\u5355\u7684 style \u5C5E\u6027");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](448, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](449, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](450, "object");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](451, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](452, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](453, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](454, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](455, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](456, "[nzCustomTemplate]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](457, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](458, "\u81EA\u5B9A\u4E49\u9009\u62E9\u6846\u7684Template\u5185\u5BB9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](459, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](460, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](461, "TemplateRef<{ $implicit: NzOptionComponent }>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](462, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](463, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](464, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](465, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](466, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](467, "[nzServerSearch]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](468, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](469, "\u662F\u5426\u4F7F\u7528\u670D\u52A1\u7AEF\u641C\u7D22\uFF0C\u5F53\u4E3A true \u65F6\uFF0C\u5C06\u4E0D\u518D\u5728\u524D\u7AEF\u5BF9 nz-option \u8FDB\u884C\u8FC7\u6EE4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](470, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](471, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](472, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](473, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](474, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](475, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](476, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](477, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](478, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](479, "[nzFilterOption]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](480, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](481, "\u662F\u5426\u6839\u636E\u8F93\u5165\u9879\u8FDB\u884C\u7B5B\u9009\u3002\u5F53\u5176\u4E3A\u4E00\u4E2A\u51FD\u6570\u65F6\uFF0C\u4F1A\u63A5\u6536 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](482, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](483, "inputValue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](484, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](485, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](486, " \u4E24\u4E2A\u53C2\u6570\uFF0C\u5F53 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](487, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](488, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](489, " \u7B26\u5408\u7B5B\u9009\u6761\u4EF6\u65F6\uFF0C\u5E94\u8FD4\u56DE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](490, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](491, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](492, "\uFF0C\u53CD\u4E4B\u5219\u8FD4\u56DE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](493, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](494, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](495, "\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](496, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](497, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](498, "(input?: string, option?: NzOptionComponent) => boolean;");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](499, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](500, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](501, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](502, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](503, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](504, "[nzMaxMultipleCount]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](505, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](506, "\u6700\u591A\u9009\u4E2D\u591A\u5C11\u4E2A\u6807\u7B7E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](507, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](508, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](509, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](510, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](511, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](512, "Infinity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](513, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](514, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](515, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](516, "[nzMode]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](517, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](518, "\u8BBE\u7F6E nz-select \u7684\u6A21\u5F0F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](519, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](520, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](521, "'multiple' | 'tags' | 'default'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](522, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](523, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](524, "'default'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](525, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](526, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](527, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](528, "[nzNotFoundContent]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](529, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](530, "\u5F53\u4E0B\u62C9\u5217\u8868\u4E3A\u7A7A\u65F6\u663E\u793A\u7684\u5185\u5BB9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](531, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](532, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](533, "string | TemplateRef<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](534, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](535, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](536, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](537, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](538, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](539, "[nzPlaceHolder]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](540, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](541, "\u9009\u62E9\u6846\u9ED8\u8BA4\u6587\u5B57");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](542, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](543, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](544, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](545, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](546, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](547, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](548, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](549, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](550, "[nzShowArrow]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](551, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](552, "\u662F\u5426\u663E\u793A\u4E0B\u62C9\u5C0F\u7BAD\u5934");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](553, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](554, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](555, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](556, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](557, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](558, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](559, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](560, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](561, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](562, "[nzShowSearch]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](563, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](564, "\u4F7F\u5355\u9009\u6A21\u5F0F\u53EF\u641C\u7D22");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](565, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](566, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](567, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](568, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](569, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](570, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](571, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](572, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](573, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](574, "[nzSize]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](575, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](576, "\u9009\u62E9\u6846\u5927\u5C0F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](577, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](578, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](579, "'large' | 'small' | 'default'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](580, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](581, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](582, "'default'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](583, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](584, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](585, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](586, "[nzSuffixIcon]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](587, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](588, "\u81EA\u5B9A\u4E49\u7684\u9009\u62E9\u6846\u540E\u7F00\u56FE\u6807");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](589, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](590, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](591, "TemplateRef<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](592, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](593, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](594, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](595, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](596, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](597, "[nzRemoveIcon]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](598, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](599, "\u81EA\u5B9A\u4E49\u7684\u591A\u9009\u6846\u6E05\u9664\u56FE\u6807");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](600, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](601, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](602, "TemplateRef<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](603, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](604, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](605, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](606, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](607, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](608, "[nzClearIcon]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](609, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](610, "\u81EA\u5B9A\u4E49\u7684\u591A\u9009\u6846\u6E05\u7A7A\u56FE\u6807");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](611, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](612, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](613, "TemplateRef<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](614, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](615, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](616, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](617, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](618, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](619, "[nzMenuItemSelectedIcon]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](620, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](621, "\u81EA\u5B9A\u4E49\u5F53\u524D\u9009\u4E2D\u7684\u6761\u76EE\u56FE\u6807");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](622, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](623, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](624, "TemplateRef<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](625, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](626, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](627, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](628, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](629, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](630, "[nzTokenSeparators]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](631, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](632, "\u5728 tags \u548C multiple \u6A21\u5F0F\u4E0B\u81EA\u52A8\u5206\u8BCD\u7684\u5206\u9694\u7B26");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](633, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](634, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](635, "string[]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](636, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](637, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](638, "[]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](639, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](640, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](641, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](642, "[nzLoading]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](643, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](644, "\u52A0\u8F7D\u4E2D\u72B6\u6001");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](645, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](646, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](647, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](648, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](649, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](650, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](651, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](652, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](653, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](654, "[nzMaxTagCount]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](655, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](656, "\u6700\u591A\u663E\u793A\u591A\u5C11\u4E2A tag");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](657, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](658, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](659, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](660, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](661, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](662, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](663, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](664, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](665, "[nzMaxTagPlaceholder]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](666, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](667, "\u9690\u85CF tag \u65F6\u663E\u793A\u7684\u5185\u5BB9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](668, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](669, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](670, "TemplateRef<{ $implicit: any[] }>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](671, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](672, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](673, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](674, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](675, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](676, "(ngModelChange)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](677, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](678, "\u9009\u4E2D\u7684 nz-option \u53D1\u751F\u53D8\u5316\u65F6\uFF0C\u8C03\u7528\u6B64\u51FD\u6570");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](679, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](680, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](681, "EventEmitter<any[]>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](682, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](683, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](684, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](685, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](686, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](687, "(nzOpenChange)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](688, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](689, "\u4E0B\u62C9\u83DC\u5355\u6253\u5F00\u72B6\u6001\u53D8\u5316\u56DE\u8C03");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](690, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](691, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](692, "EventEmitter<boolean>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](693, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](694, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](695, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](696, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](697, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](698, "(nzScrollToBottom)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](699, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](700, "\u4E0B\u62C9\u5217\u8868\u6EDA\u52A8\u5230\u5E95\u90E8\u7684\u56DE\u8C03");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](701, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](702, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](703, "EventEmitter<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](704, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](705, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](706, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](707, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](708, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](709, "(nzOnSearch)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](710, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](711, "\u6587\u672C\u6846\u503C\u53D8\u5316\u65F6\u56DE\u8C03");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](712, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](713, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](714, "EventEmitter<string>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](715, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](716, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](717, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](718, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](719, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](720, "(nzFocus)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](721, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](722, "focus\u65F6\u56DE\u8C03");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](723, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](724, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](725, "EventEmitter<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](726, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](727, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](728, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](729, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](730, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](731, "(nzBlur)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](732, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](733, "blur\u65F6\u56DE\u8C03");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](734, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](735, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](736, "EventEmitter<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](737, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](738, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](739, "h3", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](740, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](741, "nz-option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](742, "label", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](743, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](744, "a", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](745, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](746, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](747, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](748, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](749, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](750, "\u53C2\u6570");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](751, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](752, "\u8BF4\u660E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](753, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](754, "\u7C7B\u578B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](755, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](756, "\u9ED8\u8BA4\u503C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](757, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](758, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](759, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](760, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](761, "[nzDisabled]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](762, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](763, "\u662F\u5426\u7981\u7528");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](764, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](765, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](766, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](767, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](768, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](769, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](770, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](771, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](772, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](773, "[nzLabel]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](774, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](775, "\u9009\u4E2D\u8BE5 nz-option \u540E\uFF0Cnz-select \u4E2D\u663E\u793A\u7684\u6587\u5B57");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](776, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](777, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](778, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](779, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](780, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](781, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](782, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](783, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](784, "[nzValue]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](785, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](786, "nz-select \u4E2D ngModel \u7684\u503C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](787, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](788, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](789, "any");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](790, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](791, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](792, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](793, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](794, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](795, "[nzHide]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](796, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](797, "\u662F\u5426\u5728\u9009\u9879\u5217\u8868\u4E2D\u9690\u85CF\u6539\u9009\u9879");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](798, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](799, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](800, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](801, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](802, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](803, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](804, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](805, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](806, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](807, "[nzCustomContent]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](808, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](809, "\u662F\u5426\u81EA\u5B9A\u4E49\u5728\u4E0B\u62C9\u83DC\u5355\u4E2D\u7684Template\u5185\u5BB9\uFF0C\u5F53\u4E3A true \u65F6\uFF0Cnz-option \u5305\u88F9\u7684\u5185\u5BB9\u5C06\u76F4\u63A5\u6E32\u67D3\u5728\u4E0B\u62C9\u83DC\u5355\u4E2D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](810, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](811, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](812, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](813, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](814, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](815, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](816, "h3", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](817, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](818, "nz-option-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](819, "label", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](820, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](821, "a", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](822, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](823, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](824, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](825, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](826, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](827, "\u53C2\u6570");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](828, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](829, "\u8BF4\u660E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](830, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](831, "\u7C7B\u578B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](832, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](833, "\u9ED8\u8BA4\u503C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](834, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](835, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](836, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](837, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](838, "[nzLabel]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](839, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](840, "\u7EC4\u540D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](841, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](842, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](843, "string | TemplateRef<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](844, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](845, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](846, "h2", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](847, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](848, "\u65B9\u6CD5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](849, "a", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](850, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](851, "h3", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](852, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](853, "nz-select");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](854, "label", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](855, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](856, "a", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](857, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](858, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](859, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](860, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](861, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](862, "\u540D\u79F0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](863, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](864, "\u8BF4\u660E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](865, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](866, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](867, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](868, "blur()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](869, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](870, "\u53D6\u6D88\u7126\u70B9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](871, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](872, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](873, "focus()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](874, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](875, "\u83B7\u53D6\u7126\u70B9");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzGutter", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzXl", 12)("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-select-demo-basic")("nzLink", "components-select-demo-basic")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/select/demo/basic.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-select-demo-multiple")("nzLink", "components-select-demo-multiple")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/select/demo/multiple.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-select-demo-tags")("nzLink", "components-select-demo-tags")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/select/demo/tags.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-select-demo-coordinate")("nzLink", "components-select-demo-coordinate")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/select/demo/coordinate.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-select-demo-label-in-value")("nzLink", "components-select-demo-label-in-value")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/select/demo/label-in-value.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-select-demo-select-users")("nzLink", "components-select-demo-select-users")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/select/demo/select-users.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-select-demo-hide-selected")("nzLink", "components-select-demo-hide-selected")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/select/demo/hide-selected.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-select-demo-scroll-load")("nzLink", "components-select-demo-scroll-load")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/select/demo/scroll-load.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-select-demo-big-data")("nzLink", "components-select-demo-big-data")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/select/demo/big-data.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-select-demo-custom-template")("nzLink", "components-select-demo-custom-template")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/select/demo/custom-template.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzXl", 12)("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-select-demo-search")("nzLink", "components-select-demo-search")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/select/demo/search.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-select-demo-size")("nzLink", "components-select-demo-size")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/select/demo/size.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-select-demo-optgroup")("nzLink", "components-select-demo-optgroup")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/select/demo/optgroup.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-select-demo-search-box")("nzLink", "components-select-demo-search-box")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/select/demo/search-box.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-select-demo-automatic-tokenization")("nzLink", "components-select-demo-automatic-tokenization")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/select/demo/automatic-tokenization.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-select-demo-custom-dropdown-menu")("nzLink", "components-select-demo-custom-dropdown-menu")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/select/demo/custom-dropdown-menu.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-select-demo-custom-content")("nzLink", "components-select-demo-custom-content")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/select/demo/custom-content.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-select-demo-default-value")("nzLink", "components-select-demo-default-value")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/select/demo/default-value.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-select-demo-border-less")("nzLink", "components-select-demo-border-less")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/select/demo/border-less.md");
    } }, directives: [ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_2__["NzAffixComponent"], ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_3__["NzAnchorComponent"], ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_3__["NzAnchorLinkComponent"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__["NzIconDirective"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_5__["NzTooltipDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__["NzRowDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__["NzColDirective"], _share_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_1__["NzCodeBoxComponent"], _basic__WEBPACK_IMPORTED_MODULE_7__["NzDemoSelectBasicComponent"], _multiple__WEBPACK_IMPORTED_MODULE_8__["NzDemoSelectMultipleComponent"], _tags__WEBPACK_IMPORTED_MODULE_9__["NzDemoSelectTagsComponent"], _coordinate__WEBPACK_IMPORTED_MODULE_10__["NzDemoSelectCoordinateComponent"], _label_in_value__WEBPACK_IMPORTED_MODULE_11__["NzDemoSelectLabelInValueComponent"], _select_users__WEBPACK_IMPORTED_MODULE_12__["NzDemoSelectSelectUsersComponent"], _hide_selected__WEBPACK_IMPORTED_MODULE_13__["NzDemoSelectHideSelectedComponent"], _scroll_load__WEBPACK_IMPORTED_MODULE_14__["NzDemoSelectScrollLoadComponent"], _big_data__WEBPACK_IMPORTED_MODULE_15__["NzDemoSelectBigDataComponent"], _custom_template__WEBPACK_IMPORTED_MODULE_16__["NzDemoSelectCustomTemplateComponent"], _search__WEBPACK_IMPORTED_MODULE_17__["NzDemoSelectSearchComponent"], _size__WEBPACK_IMPORTED_MODULE_18__["NzDemoSelectSizeComponent"], _optgroup__WEBPACK_IMPORTED_MODULE_19__["NzDemoSelectOptgroupComponent"], _search_box__WEBPACK_IMPORTED_MODULE_20__["NzDemoSelectSearchBoxComponent"], _automatic_tokenization__WEBPACK_IMPORTED_MODULE_21__["NzDemoSelectAutomaticTokenizationComponent"], _custom_dropdown_menu__WEBPACK_IMPORTED_MODULE_22__["NzDemoSelectCustomDropdownMenuComponent"], _custom_content__WEBPACK_IMPORTED_MODULE_23__["NzDemoSelectCustomContentComponent"], _default_value__WEBPACK_IMPORTED_MODULE_24__["NzDemoSelectDefaultValueComponent"], _border_less__WEBPACK_IMPORTED_MODULE_25__["NzDemoSelectBorderLessComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoSelectZhComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-demo-select',
                preserveWhitespaces: false,
                templateUrl: './zh.html'
            }]
    }], null, { codeBoxes: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"],
            args: [_share_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_1__["NzCodeBoxComponent"]]
        }] }); })();


/***/ })

};;
//# sourceMappingURL=select-index-module.js.map