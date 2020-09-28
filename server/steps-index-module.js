exports.ids = ["steps-index-module"];
exports.modules = {

/***/ "/zTT":
/*!**************************************!*\
  !*** ./site/doc/app/steps/simple.ts ***!
  \**************************************/
/*! exports provided: NzDemoStepsSimpleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoStepsSimpleComponent", function() { return NzDemoStepsSimpleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/steps */ "43Vo");



class NzDemoStepsSimpleComponent {
}
/** @nocollapse */ NzDemoStepsSimpleComponent.ɵfac = function NzDemoStepsSimpleComponent_Factory(t) { return new (t || NzDemoStepsSimpleComponent)(); };
/** @nocollapse */ NzDemoStepsSimpleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoStepsSimpleComponent, selectors: [["nz-demo-steps-simple"]], decls: 4, vars: 1, consts: [[3, "nzCurrent"], ["nzTitle", "Finished", "nzDescription", "This is a description."], ["nzTitle", "In Progress", "nzSubtitle", "Left 00:00:08", "nzDescription", "This is a description."], ["nzTitle", "Waiting", "nzDescription", "This is a description."]], template: function NzDemoStepsSimpleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-steps", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "nz-step", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "nz-step", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "nz-step", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzCurrent", 1);
    } }, directives: [ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_1__["NzStepsComponent"], ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_1__["NzStepComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoStepsSimpleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-demo-steps-simple',
                template: `
    <nz-steps [nzCurrent]="1">
      <nz-step nzTitle="Finished" nzDescription="This is a description."></nz-step>
      <nz-step nzTitle="In Progress" nzSubtitle="Left 00:00:08" nzDescription="This is a description."> </nz-step>
      <nz-step nzTitle="Waiting" nzDescription="This is a description."></nz-step>
    </nz-steps>
  `
            }]
    }], null, null); })();


/***/ }),

/***/ "14/K":
/*!******************************************!*\
  !*** ./site/doc/app/steps/small-size.ts ***!
  \******************************************/
/*! exports provided: NzDemoStepsSmallSizeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoStepsSmallSizeComponent", function() { return NzDemoStepsSmallSizeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/steps */ "43Vo");



class NzDemoStepsSmallSizeComponent {
    constructor() {
        this.current = 1;
    }
}
/** @nocollapse */ NzDemoStepsSmallSizeComponent.ɵfac = function NzDemoStepsSmallSizeComponent_Factory(t) { return new (t || NzDemoStepsSmallSizeComponent)(); };
/** @nocollapse */ NzDemoStepsSmallSizeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoStepsSmallSizeComponent, selectors: [["nz-demo-steps-small-size"]], decls: 4, vars: 1, consts: [["nzSize", "small", 3, "nzCurrent"], ["nzTitle", "Finished"], ["nzTitle", "In Progress"], ["nzTitle", "Waiting"]], template: function NzDemoStepsSmallSizeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-steps", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "nz-step", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "nz-step", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "nz-step", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzCurrent", ctx.current);
    } }, directives: [ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_1__["NzStepsComponent"], ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_1__["NzStepComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoStepsSmallSizeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-demo-steps-small-size',
                template: `
    <nz-steps [nzCurrent]="current" nzSize="small">
      <nz-step nzTitle="Finished"></nz-step>
      <nz-step nzTitle="In Progress"></nz-step>
      <nz-step nzTitle="Waiting"></nz-step>
    </nz-steps>
  `
            }]
    }], null, null); })();


/***/ }),

/***/ "43Vo":
/*!**************************************************************!*\
  !*** ./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-steps.js ***!
  \**************************************************************/
/*! exports provided: NzStepComponent, NzStepsComponent, NzStepsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzStepComponent", function() { return NzStepComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzStepsComponent", function() { return NzStepsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzStepsModule", function() { return NzStepsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/core/util */ "d1+9");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ "zOht");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/core/outlet */ "fwD0");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/icon */ "MOHP");









/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */





const _c0 = ["processDotTemplate"];
function NzStepComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 9);
} }
function NzStepComponent_ng_template_3_span_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NzStepComponent_ng_template_3_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NzStepComponent_ng_template_3_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r8.index + 1);
} }
function NzStepComponent_ng_template_3_span_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const icon_r11 = ctx.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", !ctx_r10.oldAPIIcon && icon_r11)("ngClass", ctx_r10.oldAPIIcon && icon_r11);
} }
function NzStepComponent_ng_template_3_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzStepComponent_ng_template_3_span_3_ng_container_1_Template, 2, 2, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r9.nzIcon);
} }
function NzStepComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzStepComponent_ng_template_3_span_0_Template, 2, 0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzStepComponent_ng_template_3_span_1_Template, 2, 0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzStepComponent_ng_template_3_span_2_Template, 2, 1, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NzStepComponent_ng_template_3_span_3_Template, 2, 1, "span", 10);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.nzStatus === "finish" && !ctx_r1.nzIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.nzStatus === "error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r1.nzStatus === "process" || ctx_r1.nzStatus === "wait") && !ctx_r1.nzIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.nzIcon);
} }
function NzStepComponent_ng_template_4_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 17);
} }
function NzStepComponent_ng_template_4_ng_template_3_Template(rf, ctx) { }
const _c1 = function (a0, a1, a2) { return { $implicit: a0, status: a1, index: a2 }; };
function NzStepComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzStepComponent_ng_template_4_ng_template_1_Template, 1, 0, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NzStepComponent_ng_template_4_ng_template_3_Template, 0, 0, "ng-template", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r2.customProcessTemplate || _r12)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](2, _c1, _r12, ctx_r2.nzStatus, ctx_r2.index));
} }
function NzStepComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.nzTitle);
} }
function NzStepComponent_div_8_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r15.nzSubtitle);
} }
function NzStepComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzStepComponent_div_8_ng_container_1_Template, 2, 1, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r4.nzSubtitle);
} }
function NzStepComponent_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.nzDescription);
} }
const _c2 = ["*"];
class NzStepComponent {
    constructor(cdr) {
        this.cdr = cdr;
        this.nzDisabled = false;
        this.isCustomStatus = false;
        this._status = 'wait';
        this.oldAPIIcon = true;
        this.direction = 'horizontal';
        this.index = 0;
        this.last = false;
        this.outStatus = 'process';
        this.showProcessDot = false;
        this.clickable = false;
        this.click$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this._currentIndex = 0;
    }
    get nzStatus() {
        return this._status;
    }
    set nzStatus(status) {
        this._status = status;
        this.isCustomStatus = true;
    }
    get nzIcon() {
        return this._icon;
    }
    set nzIcon(value) {
        if (!(value instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])) {
            this.oldAPIIcon = typeof value === 'string' && value.indexOf('anticon') > -1;
        }
        else {
        }
        this._icon = value;
    }
    get currentIndex() {
        return this._currentIndex;
    }
    set currentIndex(current) {
        this._currentIndex = current;
        if (!this.isCustomStatus) {
            this._status = current > this.index ? 'finish' : current === this.index ? this.outStatus || '' : 'wait';
        }
    }
    onClick() {
        if (this.clickable && this.currentIndex !== this.index && !this.nzDisabled) {
            this.click$.next(this.index);
        }
    }
    markForCheck() {
        this.cdr.markForCheck();
    }
    ngOnDestroy() {
        this.click$.complete();
    }
}
/** @nocollapse */
NzStepComponent.ɵfac = function NzStepComponent_Factory(t) { return new (t || NzStepComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
/** @nocollapse */
NzStepComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzStepComponent, selectors: [["nz-step"]], viewQuery: function NzStepComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.processDotTemplate = _t.first);
    } }, hostAttrs: [1, "ant-steps-item"], hostVars: 16, hostBindings: function NzStepComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-steps-item-wait", ctx.nzStatus === "wait")("ant-steps-item-process", ctx.nzStatus === "process")("ant-steps-item-finish", ctx.nzStatus === "finish")("ant-steps-item-error", ctx.nzStatus === "error")("ant-steps-item-active", ctx.currentIndex === ctx.index)("ant-steps-item-disabled", ctx.nzDisabled)("ant-steps-item-custom", !!ctx.nzIcon)("ant-steps-next-error", ctx.outStatus === "error" && ctx.currentIndex === ctx.index + 1);
    } }, inputs: { nzDisabled: "nzDisabled", nzStatus: "nzStatus", nzIcon: "nzIcon", nzTitle: "nzTitle", nzSubtitle: "nzSubtitle", nzDescription: "nzDescription" }, exportAs: ["nzStep"], decls: 11, vars: 8, consts: [[1, "ant-steps-item-container", 3, "tabindex", "click"], ["class", "ant-steps-item-tail", 4, "ngIf"], [1, "ant-steps-item-icon"], [3, "ngIf"], [1, "ant-steps-item-content"], [1, "ant-steps-item-title"], [4, "nzStringTemplateOutlet"], ["class", "ant-steps-item-subtitle", 4, "ngIf"], [1, "ant-steps-item-description"], [1, "ant-steps-item-tail"], ["class", "ant-steps-icon", 4, "ngIf"], [1, "ant-steps-icon"], ["nz-icon", "", "nzType", "check"], ["nz-icon", "", "nzType", "close"], ["nz-icon", "", 3, "nzType", "ngClass"], ["processDotTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "ant-steps-icon-dot"], [1, "ant-steps-item-subtitle"]], template: function NzStepComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzStepComponent_Template_div_click_0_listener() { return ctx.onClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzStepComponent_div_1_Template, 1, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NzStepComponent_ng_template_3_Template, 4, 4, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NzStepComponent_ng_template_4_Template, 4, 6, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, NzStepComponent_ng_container_7_Template, 2, 1, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NzStepComponent_div_8_Template, 2, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, NzStepComponent_ng_container_10_Template, 2, 1, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tabindex", ctx.clickable && !ctx.nzDisabled ? 0 : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("role", ctx.clickable && !ctx.nzDisabled ? "button" : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.last !== true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showProcessDot);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showProcessDot);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzStringTemplateOutlet", ctx.nzTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nzSubtitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzStringTemplateOutlet", ctx.nzDescription);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_6__["NzStringTemplateOutletDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__["NzIconDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgTemplateOutlet"]], encapsulation: 2, changeDetection: 0 });
NzStepComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
];
NzStepComponent.propDecorators = {
    processDotTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['processDotTemplate', { static: false },] }],
    nzTitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzSubtitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzDescription: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzStatus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_1__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__metadata"])("design:type", Object)
], NzStepComponent.prototype, "nzDisabled", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzStepComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                selector: 'nz-step',
                exportAs: 'nzStep',
                preserveWhitespaces: false,
                template: `
    <div
      class="ant-steps-item-container"
      [attr.role]="clickable && !nzDisabled ? 'button' : null"
      [tabindex]="clickable && !nzDisabled ? 0 : null"
      (click)="onClick()"
    >
      <div class="ant-steps-item-tail" *ngIf="last !== true"></div>
      <div class="ant-steps-item-icon">
        <ng-template [ngIf]="!showProcessDot">
          <span class="ant-steps-icon" *ngIf="nzStatus === 'finish' && !nzIcon"><i nz-icon nzType="check"></i></span>
          <span class="ant-steps-icon" *ngIf="nzStatus === 'error'"><i nz-icon nzType="close"></i></span>
          <span class="ant-steps-icon" *ngIf="(nzStatus === 'process' || nzStatus === 'wait') && !nzIcon">{{ index + 1 }}</span>
          <span class="ant-steps-icon" *ngIf="nzIcon">
            <ng-container *nzStringTemplateOutlet="nzIcon; let icon">
              <i nz-icon [nzType]="!oldAPIIcon && icon" [ngClass]="oldAPIIcon && icon"></i>
            </ng-container>
          </span>
        </ng-template>
        <ng-template [ngIf]="showProcessDot">
          <span class="ant-steps-icon">
            <ng-template #processDotTemplate>
              <span class="ant-steps-icon-dot"></span>
            </ng-template>
            <ng-template
              [ngTemplateOutlet]="customProcessTemplate || processDotTemplate"
              [ngTemplateOutletContext]="{
                $implicit: processDotTemplate,
                status: nzStatus,
                index: index
              }"
            >
            </ng-template>
          </span>
        </ng-template>
      </div>
      <div class="ant-steps-item-content">
        <div class="ant-steps-item-title">
          <ng-container *nzStringTemplateOutlet="nzTitle">{{ nzTitle }}</ng-container>
          <div *ngIf="nzSubtitle" class="ant-steps-item-subtitle">
            <ng-container *nzStringTemplateOutlet="nzSubtitle">{{ nzSubtitle }}</ng-container>
          </div>
        </div>
        <div class="ant-steps-item-description">
          <ng-container *nzStringTemplateOutlet="nzDescription">{{ nzDescription }}</ng-container>
        </div>
      </div>
    </div>
  `,
                host: {
                    class: 'ant-steps-item',
                    '[class.ant-steps-item-wait]': 'nzStatus === "wait"',
                    '[class.ant-steps-item-process]': 'nzStatus === "process"',
                    '[class.ant-steps-item-finish]': 'nzStatus === "finish"',
                    '[class.ant-steps-item-error]': 'nzStatus === "error"',
                    '[class.ant-steps-item-active]': 'currentIndex === index',
                    '[class.ant-steps-item-disabled]': 'nzDisabled',
                    '[class.ant-steps-item-custom]': '!!nzIcon',
                    '[class.ant-steps-next-error]': '(outStatus === "error") && (currentIndex === index + 1)'
                }
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { nzDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzStatus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], processDotTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['processDotTemplate', { static: false }]
        }], nzTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzSubtitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzDescription: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzStepsComponent {
    constructor() {
        this.nzCurrent = 0;
        this.nzDirection = 'horizontal';
        this.nzLabelPlacement = 'horizontal';
        this.nzType = 'default';
        this.nzSize = 'default';
        this.nzStartIndex = 0;
        this.nzStatus = 'process';
        this.nzIndexChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.showProcessDot = false;
        this.classMap = {};
    }
    set nzProgressDot(value) {
        if (value instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]) {
            this.showProcessDot = true;
            this.customProcessDotTemplate = value;
        }
        else {
            this.showProcessDot = Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_1__["toBoolean"])(value);
        }
        this.updateChildrenSteps();
    }
    ngOnChanges(changes) {
        if (changes.nzStartIndex || changes.nzDirection || changes.nzStatus || changes.nzCurrent) {
            this.updateChildrenSteps();
        }
        if (changes.nzDirection || changes.nzProgressDot || changes.nzLabelPlacement || changes.nzSize) {
            this.setClassMap();
        }
    }
    ngOnInit() {
        this.setClassMap();
        this.updateChildrenSteps();
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
        if (this.indexChangeSubscription) {
            this.indexChangeSubscription.unsubscribe();
        }
    }
    ngAfterContentInit() {
        if (this.steps) {
            this.steps.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$)).subscribe(() => {
                this.updateChildrenSteps();
            });
        }
    }
    updateChildrenSteps() {
        if (this.steps) {
            const length = this.steps.length;
            this.steps.toArray().forEach((step, index) => {
                Promise.resolve().then(() => {
                    step.outStatus = this.nzStatus;
                    step.showProcessDot = this.showProcessDot;
                    if (this.customProcessDotTemplate) {
                        step.customProcessTemplate = this.customProcessDotTemplate;
                    }
                    step.clickable = this.nzIndexChange.observers.length > 0;
                    step.direction = this.nzDirection;
                    step.index = index + this.nzStartIndex;
                    step.currentIndex = this.nzCurrent;
                    step.last = length === index + 1;
                    step.markForCheck();
                });
            });
            if (this.indexChangeSubscription) {
                this.indexChangeSubscription.unsubscribe();
            }
            this.indexChangeSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(...this.steps.map(step => step.click$)).subscribe(index => this.nzIndexChange.emit(index));
        }
    }
    setClassMap() {
        this.classMap = {
            [`ant-steps-${this.nzDirection}`]: true,
            [`ant-steps-label-horizontal`]: this.nzDirection === 'horizontal',
            [`ant-steps-label-vertical`]: (this.showProcessDot || this.nzLabelPlacement === 'vertical') && this.nzDirection === 'horizontal',
            [`ant-steps-dot`]: this.showProcessDot,
            ['ant-steps-small']: this.nzSize === 'small',
            ['ant-steps-navigation']: this.nzType === 'navigation'
        };
    }
}
/** @nocollapse */
NzStepsComponent.ɵfac = function NzStepsComponent_Factory(t) { return new (t || NzStepsComponent)(); };
/** @nocollapse */
NzStepsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzStepsComponent, selectors: [["nz-steps"]], contentQueries: function NzStepsComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NzStepComponent, false);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.steps = _t);
    } }, inputs: { nzCurrent: "nzCurrent", nzDirection: "nzDirection", nzLabelPlacement: "nzLabelPlacement", nzType: "nzType", nzSize: "nzSize", nzStartIndex: "nzStartIndex", nzStatus: "nzStatus", nzProgressDot: "nzProgressDot" }, outputs: { nzIndexChange: "nzIndexChange" }, exportAs: ["nzSteps"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c2, decls: 2, vars: 1, consts: [[1, "ant-steps", 3, "ngClass"]], template: function NzStepsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.classMap);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"]], encapsulation: 2, changeDetection: 0 });
NzStepsComponent.propDecorators = {
    steps: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [NzStepComponent,] }],
    nzCurrent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzDirection: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzLabelPlacement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzStartIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzStatus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzProgressDot: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzIndexChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzStepsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                preserveWhitespaces: false,
                selector: 'nz-steps',
                exportAs: 'nzSteps',
                template: `
    <div class="ant-steps" [ngClass]="classMap">
      <ng-content></ng-content>
    </div>
  `
            }]
    }], function () { return []; }, { nzCurrent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzDirection: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzLabelPlacement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzStartIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzStatus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzIndexChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], nzProgressDot: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], steps: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
            args: [NzStepComponent]
        }] }); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzStepsModule {
}
/** @nocollapse */
NzStepsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NzStepsModule });
/** @nocollapse */
NzStepsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NzStepsModule_Factory(t) { return new (t || NzStepsModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__["NzIconModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_6__["NzOutletModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NzStepsModule, { declarations: function () { return [NzStepsComponent, NzStepComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__["NzIconModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_6__["NzOutletModule"]]; }, exports: function () { return [NzStepsComponent, NzStepComponent]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzStepsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__["NzIconModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_6__["NzOutletModule"]],
                exports: [NzStepsComponent, NzStepComponent],
                declarations: [NzStepsComponent, NzStepComponent]
            }]
    }], null, null); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=ng-zorro-antd-steps.js.map

/***/ }),

/***/ "658v":
/*!****************************************************************!*\
  !*** ./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-divider.js ***!
  \****************************************************************/
/*! exports provided: NzDividerComponent, NzDividerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDividerComponent", function() { return NzDividerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDividerModule", function() { return NzDividerModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "zOht");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/core/util */ "d1+9");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/outlet */ "fwD0");






/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
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
        this.nzPlain = false;
    }
}
/** @nocollapse */
NzDividerComponent.ɵfac = function NzDividerComponent_Factory(t) { return new (t || NzDividerComponent)(); };
/** @nocollapse */
NzDividerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NzDividerComponent, selectors: [["nz-divider"]], hostVars: 18, hostBindings: function NzDividerComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("ant-divider", true)("ant-divider-horizontal", ctx.nzType === "horizontal")("ant-divider-vertical", ctx.nzType === "vertical")("ant-divider-with-text", ctx.nzText)("ant-divider-plain", ctx.nzPlain)("ant-divider-with-text-left", ctx.nzText && ctx.nzOrientation === "left")("ant-divider-with-text-right", ctx.nzText && ctx.nzOrientation === "right")("ant-divider-with-text-center", ctx.nzText && ctx.nzOrientation === "center")("ant-divider-dashed", ctx.nzDashed);
    } }, inputs: { nzType: "nzType", nzOrientation: "nzOrientation", nzDashed: "nzDashed", nzPlain: "nzPlain", nzText: "nzText" }, exportAs: ["nzDivider"], decls: 1, vars: 1, consts: [["class", "ant-divider-inner-text", 4, "ngIf"], [1, "ant-divider-inner-text"], [4, "nzStringTemplateOutlet"]], template: function NzDividerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, NzDividerComponent_span_0_Template, 2, 1, "span", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.nzText);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_4__["NzStringTemplateOutletDirective"]], encapsulation: 2, changeDetection: 0 });
NzDividerComponent.propDecorators = {
    nzText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    nzType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    nzOrientation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    nzDashed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    nzPlain: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_2__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], NzDividerComponent.prototype, "nzDashed", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_2__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], NzDividerComponent.prototype, "nzPlain", void 0);
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
                    '[class.ant-divider-with-text]': `nzText`,
                    '[class.ant-divider-plain]': `nzPlain`,
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
        }], nzPlain: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], nzText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzDividerModule {
}
/** @nocollapse */
NzDividerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: NzDividerModule });
/** @nocollapse */
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
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=ng-zorro-antd-divider.js.map

/***/ }),

/***/ "7pml":
/*!*******************************************************!*\
  !*** ./site/doc/app/steps/customized-progress-dot.ts ***!
  \*******************************************************/
/*! exports provided: NzDemoStepsCustomizedProgressDotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoStepsCustomizedProgressDotComponent", function() { return NzDemoStepsCustomizedProgressDotComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/steps */ "43Vo");
/* harmony import */ var ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/popover */ "T9nw");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function NzDemoStepsCustomizedProgressDotComponent_ng_template_5_ng_template_1_Template(rf, ctx) { }
function NzDemoStepsCustomizedProgressDotComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzDemoStepsCustomizedProgressDotComponent_ng_template_5_ng_template_1_Template, 0, 0, "ng-template", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dot_r2 = ctx.$implicit;
    const status_r3 = ctx.status;
    const index_r4 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("nzPopoverContent", "steps ", index_r4, " status: ", status_r3, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", dot_r2);
} }
class NzDemoStepsCustomizedProgressDotComponent {
}
/** @nocollapse */ NzDemoStepsCustomizedProgressDotComponent.ɵfac = function NzDemoStepsCustomizedProgressDotComponent_Factory(t) { return new (t || NzDemoStepsCustomizedProgressDotComponent)(); };
/** @nocollapse */ NzDemoStepsCustomizedProgressDotComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoStepsCustomizedProgressDotComponent, selectors: [["nz-demo-steps-customized-progress-dot"]], decls: 7, vars: 2, consts: [[3, "nzCurrent", "nzProgressDot"], ["nzTitle", "Finished", "nzDescription", "You can hover on the dot."], ["nzTitle", "In Progress", "nzDescription", "You can hover on the dot."], ["nzTitle", "Waiting", "nzDescription", "You can hover on the dot."], ["progressTemplate", ""], ["nz-popover", "", 2, "margin-left", "-100%", 3, "nzPopoverContent"], [3, "ngTemplateOutlet"]], template: function NzDemoStepsCustomizedProgressDotComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-steps", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "nz-step", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "nz-step", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "nz-step", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "nz-step", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NzDemoStepsCustomizedProgressDotComponent_ng_template_5_Template, 2, 3, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzCurrent", 1)("nzProgressDot", _r0);
    } }, directives: [ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_1__["NzStepsComponent"], ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_1__["NzStepComponent"], ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_2__["NzPopoverDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgTemplateOutlet"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoStepsCustomizedProgressDotComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-demo-steps-customized-progress-dot',
                template: `
    <nz-steps [nzCurrent]="1" [nzProgressDot]="progressTemplate">
      <nz-step nzTitle="Finished" nzDescription="You can hover on the dot."></nz-step>
      <nz-step nzTitle="In Progress" nzDescription="You can hover on the dot."></nz-step>
      <nz-step nzTitle="Waiting" nzDescription="You can hover on the dot."></nz-step>
      <nz-step nzTitle="Waiting" nzDescription="You can hover on the dot."></nz-step>
    </nz-steps>
    <ng-template #progressTemplate let-dot let-status="status" let-index="index">
      <span nz-popover nzPopoverContent="steps {{ index }} status: {{ status }}" style="margin-left: -100%;">
        <ng-template [ngTemplateOutlet]="dot"></ng-template>
      </span>
    </ng-template>
  `
            }]
    }], null, null); })();


/***/ }),

/***/ "D6Tb":
/*!*************************************!*\
  !*** ./site/doc/app/steps/error.ts ***!
  \*************************************/
/*! exports provided: NzDemoStepsErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoStepsErrorComponent", function() { return NzDemoStepsErrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/steps */ "43Vo");



class NzDemoStepsErrorComponent {
}
/** @nocollapse */ NzDemoStepsErrorComponent.ɵfac = function NzDemoStepsErrorComponent_Factory(t) { return new (t || NzDemoStepsErrorComponent)(); };
/** @nocollapse */ NzDemoStepsErrorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoStepsErrorComponent, selectors: [["nz-demo-steps-error"]], decls: 4, vars: 1, consts: [["nzStatus", "error", 3, "nzCurrent"], ["nzTitle", "Finished", "nzDescription", "This is a description."], ["nzTitle", "In Progress", "nzDescription", "This is a description."], ["nzTitle", "Waiting", "nzDescription", "This is a description."]], template: function NzDemoStepsErrorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-steps", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "nz-step", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "nz-step", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "nz-step", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzCurrent", 1);
    } }, directives: [ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_1__["NzStepsComponent"], ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_1__["NzStepComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoStepsErrorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-demo-steps-error',
                template: `
    <nz-steps [nzCurrent]="1" nzStatus="error">
      <nz-step nzTitle="Finished" nzDescription="This is a description."></nz-step>
      <nz-step nzTitle="In Progress" nzDescription="This is a description."></nz-step>
      <nz-step nzTitle="Waiting" nzDescription="This is a description."></nz-step>
    </nz-steps>
  `
            }]
    }], null, null); })();


/***/ }),

/***/ "LuT1":
/*!*****************************************!*\
  !*** ./site/doc/app/steps/step-next.ts ***!
  \*****************************************/
/*! exports provided: NzDemoStepsStepNextComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoStepsStepNextComponent", function() { return NzDemoStepsStepNextComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/steps */ "43Vo");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/button */ "TZWX");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "vdzw");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "uLhK");







function NzDemoStepsStepNextComponent_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoStepsStepNextComponent_button_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.pre(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Previous");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NzDemoStepsStepNextComponent_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoStepsStepNextComponent_button_8_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.next(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NzDemoStepsStepNextComponent_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoStepsStepNextComponent_button_9_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.done(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Done");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class NzDemoStepsStepNextComponent {
    constructor() {
        this.current = 0;
        this.index = 'First-content';
    }
    pre() {
        this.current -= 1;
        this.changeContent();
    }
    next() {
        this.current += 1;
        this.changeContent();
    }
    done() {
        console.log('done');
    }
    changeContent() {
        switch (this.current) {
            case 0: {
                this.index = 'First-content';
                break;
            }
            case 1: {
                this.index = 'Second-content';
                break;
            }
            case 2: {
                this.index = 'third-content';
                break;
            }
            default: {
                this.index = 'error';
            }
        }
    }
}
/** @nocollapse */ NzDemoStepsStepNextComponent.ɵfac = function NzDemoStepsStepNextComponent_Factory(t) { return new (t || NzDemoStepsStepNextComponent)(); };
/** @nocollapse */ NzDemoStepsStepNextComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoStepsStepNextComponent, selectors: [["nz-demo-steps-step-next"]], decls: 10, vars: 5, consts: [[3, "nzCurrent"], ["nzTitle", "Finished"], ["nzTitle", "In Progress"], ["nzTitle", "Waiting"], [1, "steps-content"], [1, "steps-action"], ["nz-button", "", "nzType", "default", 3, "click", 4, "ngIf"], ["nz-button", "", "nzType", "primary", 3, "click", 4, "ngIf"], ["nz-button", "", "nzType", "default", 3, "click"], ["nz-button", "", "nzType", "primary", 3, "click"]], template: function NzDemoStepsStepNextComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-steps", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "nz-step", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "nz-step", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "nz-step", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, NzDemoStepsStepNextComponent_button_7_Template, 3, 0, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NzDemoStepsStepNextComponent_button_8_Template, 3, 0, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, NzDemoStepsStepNextComponent_button_9_Template, 3, 0, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzCurrent", ctx.current);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.index);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.current > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.current < 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.current === 2);
    } }, directives: [ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_1__["NzStepsComponent"], ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_1__["NzStepComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_3__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_4__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__["ɵNzTransitionPatchDirective"]], styles: [".steps-content[_ngcontent-%COMP%] {\n        margin-top: 16px;\n        border: 1px dashed #e9e9e9;\n        border-radius: 6px;\n        background-color: #fafafa;\n        min-height: 200px;\n        text-align: center;\n        padding-top: 80px;\n      }\n\n      .steps-action[_ngcontent-%COMP%] {\n        margin-top: 24px;\n      }\n\n      button[_ngcontent-%COMP%] {\n        margin-right: 8px;\n      }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoStepsStepNextComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-demo-steps-step-next',
                template: `
    <nz-steps [nzCurrent]="current">
      <nz-step nzTitle="Finished"></nz-step>
      <nz-step nzTitle="In Progress"></nz-step>
      <nz-step nzTitle="Waiting"></nz-step>
    </nz-steps>

    <div class="steps-content">{{ index }}</div>
    <div class="steps-action">
      <button nz-button nzType="default" (click)="pre()" *ngIf="current > 0">
        <span>Previous</span>
      </button>
      <button nz-button nzType="default" (click)="next()" *ngIf="current < 2">
        <span>Next</span>
      </button>
      <button nz-button nzType="primary" (click)="done()" *ngIf="current === 2">
        <span>Done</span>
      </button>
    </div>
  `,
                styles: [
                    `
      .steps-content {
        margin-top: 16px;
        border: 1px dashed #e9e9e9;
        border-radius: 6px;
        background-color: #fafafa;
        min-height: 200px;
        text-align: center;
        padding-top: 80px;
      }

      .steps-action {
        margin-top: 24px;
      }

      button {
        margin-right: 8px;
      }
    `
                ]
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "MF7T":
/*!********************************************!*\
  !*** ./site/doc/app/steps/zh.component.ts ***!
  \********************************************/
/*! exports provided: NzDemoStepsZhComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoStepsZhComponent", function() { return NzDemoStepsZhComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _share_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../share/codebox/codebox.component */ "rKiv");
/* harmony import */ var ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/affix */ "utH8");
/* harmony import */ var ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/anchor */ "l83q");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "uLhK");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/icon */ "MOHP");
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ "pk25");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/grid */ "T+9E");
/* harmony import */ var _simple__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./simple */ "/zTT");
/* harmony import */ var _small_size__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./small-size */ "14/K");
/* harmony import */ var _start_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./start-index */ "cb24");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./icon */ "lCFB");
/* harmony import */ var _step_next__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./step-next */ "LuT1");
/* harmony import */ var _vertical__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./vertical */ "Zr8u");
/* harmony import */ var _vertical_small__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./vertical-small */ "kA6o");
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./error */ "D6Tb");
/* harmony import */ var _progress_dot__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./progress-dot */ "d/aV");
/* harmony import */ var _customized_progress_dot__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./customized-progress-dot */ "7pml");
/* harmony import */ var _clickable__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./clickable */ "bDV4");
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./nav */ "qCp6");






















class NzDemoStepsZhComponent {
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
/** @nocollapse */ NzDemoStepsZhComponent.ɵfac = function NzDemoStepsZhComponent_Factory(t) { return new (t || NzDemoStepsZhComponent)(); };
/** @nocollapse */ NzDemoStepsZhComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoStepsZhComponent, selectors: [["nz-demo-steps"]], viewQuery: function NzDemoStepsZhComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_share_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_1__["NzCodeBoxComponent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.codeBoxes = _t);
    } }, decls: 512, vars: 52, consts: [[1, "toc-affix", 3, "nzOffsetTop"], ["nzShowInkInFixed", "", 3, "nzAffix", "nzClick"], ["nzHref", "#components-steps-demo-simple", "nzTitle", "\u57FA\u672C\u7528\u6CD5"], ["nzHref", "#components-steps-demo-small-size", "nzTitle", "\u8FF7\u4F60\u7248"], ["nzHref", "#components-steps-demo-start-index", "nzTitle", "\u8D77\u59CB\u5E8F\u53F7"], ["nzHref", "#components-steps-demo-icon", "nzTitle", "\u5E26\u56FE\u6807\u7684\u6B65\u9AA4\u6761"], ["nzHref", "#components-steps-demo-step-next", "nzTitle", "\u6B65\u9AA4\u5207\u6362"], ["nzHref", "#components-steps-demo-vertical", "nzTitle", "\u7AD6\u76F4\u65B9\u5411\u7684\u6B65\u9AA4\u6761"], ["nzHref", "#components-steps-demo-vertical-small", "nzTitle", "\u7AD6\u76F4\u65B9\u5411\u7684\u5C0F\u578B\u6B65\u9AA4\u6761"], ["nzHref", "#components-steps-demo-error", "nzTitle", "\u6B65\u9AA4\u8FD0\u884C\u9519\u8BEF"], ["nzHref", "#components-steps-demo-progress-dot", "nzTitle", "\u70B9\u72B6\u6B65\u9AA4\u6761"], ["nzHref", "#components-steps-demo-customized-progress-dot", "nzTitle", "\u81EA\u5B9A\u4E49\u70B9\u72B6\u6B65\u9AA4\u6761"], ["nzHref", "#components-steps-demo-clickable", "nzTitle", "\u53EF\u70B9\u51FB"], ["nzHref", "#components-steps-demo-nav", "nzTitle", "\u5BFC\u822A\u6B65\u9AA4"], ["nzHref", "#api", "nzTitle", "API"], [1, "markdown"], [1, "subtitle"], [1, "widget"], ["href", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/steps/doc/index.zh-CN.md", "target", "_blank", "rel", "noopener noreferrer", 1, "edit-button"], ["nz-icon", "", "nzType", "edit"], ["id", "\u4F55\u65F6\u4F7F\u7528"], ["onclick", "window.location.hash = '\u4F55\u65F6\u4F7F\u7528'", 1, "anchor"], [1, "language-ts"], [1, "token", "keyword"], [1, "token", "punctuation"], [1, "token", "string"], ["nz-icon", "", "nzType", "appstore", "nz-tooltip", "", "nzTooltipTitle", "\u5C55\u5F00\u5168\u90E8\u4EE3\u7801", 1, "code-box-expand-trigger", 3, "click"], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", 3, "nzSpan"], ["nzTitle", "\u57FA\u672C\u7528\u6CD5", "nzSelector", "nz-demo-steps-simple", "nzGenerateCommand", "ng g ng-zorro-antd:steps-simple <name>", "nzComponentName", "NzDemoStepsSimpleComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], ["demo", ""], ["intro", ""], ["nzTitle", "\u8FF7\u4F60\u7248", "nzSelector", "nz-demo-steps-small-size", "nzGenerateCommand", "ng g ng-zorro-antd:steps-small-size <name>", "nzComponentName", "NzDemoStepsSmallSizeComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], ["nzTitle", "\u8D77\u59CB\u5E8F\u53F7", "nzSelector", "nz-demo-steps-start-index", "nzGenerateCommand", "ng g ng-zorro-antd:steps-start-index <name>", "nzComponentName", "NzDemoStepsStartIndexComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], ["nzTitle", "\u5E26\u56FE\u6807\u7684\u6B65\u9AA4\u6761", "nzSelector", "nz-demo-steps-icon", "nzGenerateCommand", "ng g ng-zorro-antd:steps-icon <name>", "nzComponentName", "NzDemoStepsIconComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], ["nzTitle", "\u6B65\u9AA4\u5207\u6362", "nzSelector", "nz-demo-steps-step-next", "nzGenerateCommand", "ng g ng-zorro-antd:steps-step-next <name>", "nzComponentName", "NzDemoStepsStepNextComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], ["nzTitle", "\u7AD6\u76F4\u65B9\u5411\u7684\u6B65\u9AA4\u6761", "nzSelector", "nz-demo-steps-vertical", "nzGenerateCommand", "ng g ng-zorro-antd:steps-vertical <name>", "nzComponentName", "NzDemoStepsVerticalComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], ["nzTitle", "\u7AD6\u76F4\u65B9\u5411\u7684\u5C0F\u578B\u6B65\u9AA4\u6761", "nzSelector", "nz-demo-steps-vertical-small", "nzGenerateCommand", "ng g ng-zorro-antd:steps-vertical-small <name>", "nzComponentName", "NzDemoStepsVerticalSmallComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], ["nzTitle", "\u6B65\u9AA4\u8FD0\u884C\u9519\u8BEF", "nzSelector", "nz-demo-steps-error", "nzGenerateCommand", "ng g ng-zorro-antd:steps-error <name>", "nzComponentName", "NzDemoStepsErrorComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], ["nzTitle", "\u70B9\u72B6\u6B65\u9AA4\u6761", "nzSelector", "nz-demo-steps-progress-dot", "nzGenerateCommand", "ng g ng-zorro-antd:steps-progress-dot <name>", "nzComponentName", "NzDemoStepsProgressDotComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], ["nzTitle", "\u81EA\u5B9A\u4E49\u70B9\u72B6\u6B65\u9AA4\u6761", "nzSelector", "nz-demo-steps-customized-progress-dot", "nzGenerateCommand", "ng g ng-zorro-antd:steps-customized-progress-dot <name>", "nzComponentName", "NzDemoStepsCustomizedProgressDotComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], ["nzTitle", "\u53EF\u70B9\u51FB", "nzSelector", "nz-demo-steps-clickable", "nzGenerateCommand", "ng g ng-zorro-antd:steps-clickable <name>", "nzComponentName", "NzDemoStepsClickableComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], ["nzTitle", "\u5BFC\u822A\u6B65\u9AA4", "nzSelector", "nz-demo-steps-nav", "nzGenerateCommand", "ng g ng-zorro-antd:steps-nav <name>", "nzComponentName", "NzDemoStepsNavComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], [1, "markdown", "api-container"], ["id", "api"], ["onclick", "window.location.hash = 'api'", 1, "anchor"], [1, "language-html"], [1, "token", "tag"], [1, "token", "attr-name"], [1, "token", "attr-value"], ["id", "nz-steps"], [1, "api-type-label", "component"], ["onclick", "window.location.hash = 'nz-steps'", 1, "anchor"], ["id", "nz-step"], ["onclick", "window.location.hash = 'nz-step'", 1, "anchor"]], template: function NzDemoStepsZhComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-affix", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nz-anchor", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzClick", function NzDemoStepsZhComponent_Template_nz_anchor_nzClick_2_listener($event) { return ctx.goLink($event); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "section", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Steps");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\u6B65\u9AA4\u6761");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "section", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\u5F15\u5BFC\u7528\u6237\u6309\u7167\u6D41\u7A0B\u5B8C\u6210\u4EFB\u52A1\u7684\u5BFC\u822A\u6761\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h2", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\u4F55\u65F6\u4F7F\u7528");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "\u5F53\u4EFB\u52A1\u590D\u6742\u6216\u8005\u5B58\u5728\u5148\u540E\u5173\u7CFB\u65F6\uFF0C\u5C06\u5176\u5206\u89E3\u6210\u4E00\u7CFB\u5217\u6B65\u9AA4\uFF0C\u4ECE\u800C\u7B80\u5316\u4EFB\u52A1\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "pre", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "import");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "{");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " NzStepsModule ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "from");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "'ng-zorro-antd/steps'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "\u4EE3\u7801\u6F14\u793A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoStepsZhComponent_Template_i_click_55_listener() { return ctx.expandAllCode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "nz-code-box", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "nz-demo-steps-simple", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "\u7B80\u5355\u7684\u6B65\u9AA4\u6761\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "nz-code-box", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "nz-demo-steps-small-size", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "\u8FF7\u4F60\u7248\u7684\u6B65\u9AA4\u6761\uFF0C\u901A\u8FC7\u8BBE\u7F6E ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "<nz-steps nzSize=\"small\">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " \u542F\u7528.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "nz-code-box", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "nz-demo-steps-start-index", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "\u901A\u8FC7 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "nzStartIndex");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, " \u6765\u8BBE\u7F6E\u6B65\u9AA4\u6761\u7684\u8D77\u59CB\u5E8F\u53F7. \u8BF7\u6CE8\u610F ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "nzCurrent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, " \u4E5F\u5E94\u8BE5\u6709\u5BF9\u5E94\u7684\u504F\u79FB.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "nz-code-box", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "nz-demo-steps-icon", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "\u901A\u8FC7\u8BBE\u7F6E ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "nz-step");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, " \u7684 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "nzIcon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, " \u5C5E\u6027\uFF0C\u53EF\u4EE5\u542F\u7528\u81EA\u5B9A\u4E49\u56FE\u6807\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "nz-code-box", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "nz-demo-steps-step-next", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "\u901A\u5E38\u914D\u5408\u5185\u5BB9\u53CA\u6309\u94AE\u4F7F\u7528\uFF0C\u8868\u793A\u4E00\u4E2A\u6D41\u7A0B\u7684\u5904\u7406\u8FDB\u5EA6\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "nz-code-box", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "nz-demo-steps-vertical", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "\u7B80\u5355\u7684\u7AD6\u76F4\u65B9\u5411\u7684\u6B65\u9AA4\u6761\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "nz-code-box", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "nz-demo-steps-vertical-small", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "\u7B80\u5355\u7684\u7AD6\u76F4\u65B9\u5411\u7684\u5C0F\u578B\u6B65\u9AA4\u6761\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "nz-code-box", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "nz-demo-steps-error", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "\u4F7F\u7528 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "nz-steps");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, " \u7684 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "nzStatus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, " \u5C5E\u6027\u6765\u6307\u5B9A\u5F53\u524D\u6B65\u9AA4\u7684\u72B6\u6001\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "nz-code-box", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "nz-demo-steps-progress-dot", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "\u5305\u542B\u6B65\u9AA4\u70B9\u7684\u8FDB\u5EA6\u6761\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "nz-code-box", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "nz-demo-steps-customized-progress-dot", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "\u4E3A\u70B9\u72B6\u6B65\u9AA4\u6761\u589E\u52A0\u81EA\u5B9A\u4E49\u5C55\u793A\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "nz-code-box", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "nz-demo-steps-clickable", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "\u8BA2\u9605 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "(nzIndexChange)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, " \u540E\uFF0CSteps \u53D8\u4E3A\u53EF\u70B9\u51FB\u72B6\u6001\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "nz-code-box", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "nz-demo-steps-nav", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "\u5BFC\u822A\u7C7B\u578B\u7684\u6B65\u9AA4\u6761\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "section", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "h2", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "API");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "pre", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "span", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "span", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "nz-steps");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "span", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "span", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "nz-step");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "span", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "nzTitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "span", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "\u7B2C\u4E00\u6B65");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "span", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "span", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "nz-step");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "span", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "span", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "nz-step");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "span", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, "nzTitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "span", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, "\u7B2C\u4E8C\u6B65");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "span", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "span", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](205, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, "nz-step");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "span", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "span", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](214, "nz-step");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "span", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, "nzTitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "span", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](222, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](223, "\u7B2C\u4E09\u6B65");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](225, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](227, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "span", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "span", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](231, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](232, "nz-step");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](234, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](235, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "span", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "span", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](239, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](240, "nz-steps");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](242, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "h3", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](245, "nz-steps");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "label", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](247, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "a", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](249, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](251, "\u6574\u4F53\u6B65\u9AA4\u6761\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](256, "\u53C2\u6570");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](258, "\u8BF4\u660E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](260, "\u7C7B\u578B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](262, "\u9ED8\u8BA4\u503C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](267, "[nzType]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](269, "\u6B65\u9AA4\u6761\u7C7B\u578B\uFF0C\u6709 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](271, "default");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](272, " \u548C ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](274, "navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](275, " \u4E24\u79CD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](278, "'default' | 'navigation'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](281, "default");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](284, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](285, "[nzCurrent]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](287, "\u6307\u5B9A\u5F53\u524D\u6B65\u9AA4\uFF0C\u4ECE 0 \u5F00\u59CB\u8BB0\u6570\u3002\u5728\u5B50 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](289, "nz-step");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](290, " \u5143\u7D20\u4E2D\uFF0C\u53EF\u4EE5\u901A\u8FC7 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](292, "nzStatus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](293, " \u5C5E\u6027\u8986\u76D6\u72B6\u6001");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](295, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](296, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](297, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](298, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](299, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](301, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](303, "[nzDirection]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](304, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](305, "\u6307\u5B9A\u6B65\u9AA4\u6761\u65B9\u5411\u3002\u76EE\u524D\u652F\u6301\u6C34\u5E73\uFF08");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](306, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](307, "horizontal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](308, "\uFF09\u548C\u7AD6\u76F4\uFF08");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](309, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](310, "vertical");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](311, "\uFF09\u4E24\u79CD\u65B9\u5411");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](312, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](313, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](314, "'vertical' | 'horizontal'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](315, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](316, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](317, "horizontal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](318, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](319, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](320, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](321, "[nzLabelPlacement]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](322, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](323, "\u6307\u5B9A\u6807\u7B7E\u653E\u7F6E\u4F4D\u7F6E\uFF0C\u9ED8\u8BA4\u6C34\u5E73\u653E\u56FE\u6807\u53F3\u4FA7\uFF0C\u53EF\u9009 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](324, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](325, "vertical");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](326, " \u653E\u56FE\u6807\u4E0B\u65B9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](327, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](328, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](329, "'vertical' | 'horizontal'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](330, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](331, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](332, "horizontal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](333, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](334, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](335, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](336, "[nzProgressDot]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](337, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](338, "\u70B9\u72B6\u6B65\u9AA4\u6761\uFF0C\u53EF\u4EE5\u8BBE\u7F6E\u4E3A\u4E00\u4E2A TemplateRef");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](339, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](340, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](341, "boolean | TemplateRef<{ $implicit: TemplateRef<void>, status: string, index: number }>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](342, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](343, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](344, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](345, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](346, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](347, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](348, "[nzSize]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](349, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](350, "\u6307\u5B9A\u5927\u5C0F\uFF0C\u76EE\u524D\u652F\u6301\u666E\u901A\uFF08");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](351, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](352, "default");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](353, "\uFF09\u548C\u8FF7\u4F60\uFF08");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](354, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](355, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](356, "\uFF09");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](357, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](358, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](359, "'small' | 'default'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](360, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](361, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](362, "'default'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](363, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](364, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](365, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](366, "[nzStatus]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](367, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](368, "\u6307\u5B9A\u5F53\u524D\u6B65\u9AA4\u7684\u72B6\u6001\uFF0C\u53EF\u9009 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](369, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](370, "wait");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](371, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](372, "process");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](373, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](374, "finish");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](375, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](376, "error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](377, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](378, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](379, "'wait' | 'process' | 'finish' | 'error'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](380, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](381, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](382, "'process'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](383, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](384, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](385, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](386, "[nzStartIndex]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](387, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](388, "\u6307\u5B9A\u8D77\u59CB\u4F4D\u7F6E\u7684\u5E8F\u53F7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](389, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](390, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](391, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](392, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](393, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](394, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](395, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](396, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](397, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](398, "(nzIndexChange)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](399, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](400, "\u70B9\u51FB\u5355\u4E2A\u6B65\u9AA4\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](401, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](402, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](403, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](404, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](405, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](406, "h3", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](407, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](408, "nz-step");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](409, "label", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](410, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](411, "a", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](412, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](413, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](414, "\u6B65\u9AA4\u6761\u5185\u7684\u6BCF\u4E00\u4E2A\u6B65\u9AA4\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](415, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](416, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](417, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](418, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](419, "\u53C2\u6570");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](420, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](421, "\u8BF4\u660E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](422, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](423, "\u7C7B\u578B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](424, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](425, "\u9ED8\u8BA4\u503C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](426, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](427, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](428, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](429, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](430, "[nzDescription]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](431, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](432, "\u6B65\u9AA4\u7684\u8BE6\u60C5\u63CF\u8FF0\uFF0C\u53EF\u9009");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](433, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](434, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](435, "string | TemplateRef<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](436, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](437, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](438, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](439, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](440, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](441, "[nzIcon]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](442, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](443, "\u6B65\u9AA4\u56FE\u6807\u7684\u7C7B\u578B\uFF0C\u53EF\u9009");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](444, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](445, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](446, "string | string[] | Set<string> | { [klass: string]: any; }");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](447, " | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](448, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](449, "TemplateRef<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](450, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](451, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](452, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](453, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](454, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](455, "[nzStatus]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](456, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](457, "\u6307\u5B9A\u72B6\u6001\u3002\u5F53\u4E0D\u914D\u7F6E\u8BE5\u5C5E\u6027\u65F6\uFF0C\u4F1A\u4F7F\u7528 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](458, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](459, "nz-steps");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](460, " \u7684 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](461, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](462, "nzCurrent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](463, " \u6765\u81EA\u52A8\u6307\u5B9A\u72B6\u6001\u3002\u53EF\u9009\uFF1A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](464, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](465, "wait");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](466, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](467, "process");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](468, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](469, "finish");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](470, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](471, "error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](472, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](473, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](474, "'wait' | 'process' | 'finish' | 'error'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](475, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](476, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](477, "'wait'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](478, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](479, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](480, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](481, "[nzTitle]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](482, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](483, "\u6807\u9898");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](484, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](485, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](486, "string | TemplateRef<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](487, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](488, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](489, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](490, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](491, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](492, "[nzSubtitle]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](493, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](494, "\u5B50\u6807\u9898");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](495, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](496, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](497, "string | TemplateRef<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](498, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](499, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](500, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](501, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](502, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](503, "[nzDisabled]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](504, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](505, "\u7981\u7528\u70B9\u51FB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](506, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](507, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](508, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](509, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](510, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](511, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzGutter", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-steps-demo-simple")("nzLink", "components-steps-demo-simple")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/steps/demo/simple.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-steps-demo-small-size")("nzLink", "components-steps-demo-small-size")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/steps/demo/small-size.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-steps-demo-start-index")("nzLink", "components-steps-demo-start-index")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/steps/demo/start-index.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-steps-demo-icon")("nzLink", "components-steps-demo-icon")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/steps/demo/icon.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-steps-demo-step-next")("nzLink", "components-steps-demo-step-next")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/steps/demo/step-next.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-steps-demo-vertical")("nzLink", "components-steps-demo-vertical")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/steps/demo/vertical.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-steps-demo-vertical-small")("nzLink", "components-steps-demo-vertical-small")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/steps/demo/vertical-small.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-steps-demo-error")("nzLink", "components-steps-demo-error")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/steps/demo/error.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-steps-demo-progress-dot")("nzLink", "components-steps-demo-progress-dot")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/steps/demo/progress-dot.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-steps-demo-customized-progress-dot")("nzLink", "components-steps-demo-customized-progress-dot")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/steps/demo/customized-progress-dot.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-steps-demo-clickable")("nzLink", "components-steps-demo-clickable")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/steps/demo/clickable.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-steps-demo-nav")("nzLink", "components-steps-demo-nav")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/steps/demo/nav.md");
    } }, directives: [ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_2__["NzAffixComponent"], ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_3__["NzAnchorComponent"], ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_3__["NzAnchorLinkComponent"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__["NzIconDirective"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_6__["NzTooltipDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__["NzRowDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__["NzColDirective"], _share_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_1__["NzCodeBoxComponent"], _simple__WEBPACK_IMPORTED_MODULE_8__["NzDemoStepsSimpleComponent"], _small_size__WEBPACK_IMPORTED_MODULE_9__["NzDemoStepsSmallSizeComponent"], _start_index__WEBPACK_IMPORTED_MODULE_10__["NzDemoStepsStartIndexComponent"], _icon__WEBPACK_IMPORTED_MODULE_11__["NzDemoStepsIconComponent"], _step_next__WEBPACK_IMPORTED_MODULE_12__["NzDemoStepsStepNextComponent"], _vertical__WEBPACK_IMPORTED_MODULE_13__["NzDemoStepsVerticalComponent"], _vertical_small__WEBPACK_IMPORTED_MODULE_14__["NzDemoStepsVerticalSmallComponent"], _error__WEBPACK_IMPORTED_MODULE_15__["NzDemoStepsErrorComponent"], _progress_dot__WEBPACK_IMPORTED_MODULE_16__["NzDemoStepsProgressDotComponent"], _customized_progress_dot__WEBPACK_IMPORTED_MODULE_17__["NzDemoStepsCustomizedProgressDotComponent"], _clickable__WEBPACK_IMPORTED_MODULE_18__["NzDemoStepsClickableComponent"], _nav__WEBPACK_IMPORTED_MODULE_19__["NzDemoStepsNavComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoStepsZhComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-demo-steps',
                preserveWhitespaces: false,
                templateUrl: './zh.html'
            }]
    }], null, { codeBoxes: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"],
            args: [_share_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_1__["NzCodeBoxComponent"]]
        }] }); })();


/***/ }),

/***/ "QC+E":
/*!**************************************!*\
  !*** ./site/doc/app/steps/module.ts ***!
  \**************************************/
/*! exports provided: moduleList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moduleList", function() { return moduleList; });
/* harmony import */ var ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng-zorro-antd/steps */ "43Vo");
/* harmony import */ var ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/popover */ "T9nw");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/button */ "TZWX");
/* harmony import */ var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/divider */ "658v");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/icon */ "MOHP");





const moduleList = [ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_0__["NzStepsModule"], ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_1__["NzPopoverModule"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__["NzButtonModule"], ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_3__["NzDividerModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__["NzIconModule"]];


/***/ }),

/***/ "Zr8u":
/*!****************************************!*\
  !*** ./site/doc/app/steps/vertical.ts ***!
  \****************************************/
/*! exports provided: NzDemoStepsVerticalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoStepsVerticalComponent", function() { return NzDemoStepsVerticalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/steps */ "43Vo");



class NzDemoStepsVerticalComponent {
}
/** @nocollapse */ NzDemoStepsVerticalComponent.ɵfac = function NzDemoStepsVerticalComponent_Factory(t) { return new (t || NzDemoStepsVerticalComponent)(); };
/** @nocollapse */ NzDemoStepsVerticalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoStepsVerticalComponent, selectors: [["nz-demo-steps-vertical"]], decls: 4, vars: 1, consts: [["nzDirection", "vertical", 3, "nzCurrent"], ["nzTitle", "Finished", "nzDescription", "This is a description."], ["nzTitle", "In Progress", "nzDescription", "This is a description."], ["nzTitle", "Waiting", "nzDescription", "This is a description."]], template: function NzDemoStepsVerticalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-steps", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "nz-step", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "nz-step", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "nz-step", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzCurrent", 1);
    } }, directives: [ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_1__["NzStepsComponent"], ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_1__["NzStepComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoStepsVerticalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-demo-steps-vertical',
                template: `
    <nz-steps [nzCurrent]="1" nzDirection="vertical">
      <nz-step nzTitle="Finished" nzDescription="This is a description."></nz-step>
      <nz-step nzTitle="In Progress" nzDescription="This is a description."></nz-step>
      <nz-step nzTitle="Waiting" nzDescription="This is a description."></nz-step>
    </nz-steps>
  `
            }]
    }], null, null); })();


/***/ }),

/***/ "bDV4":
/*!*****************************************!*\
  !*** ./site/doc/app/steps/clickable.ts ***!
  \*****************************************/
/*! exports provided: NzDemoStepsClickableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoStepsClickableComponent", function() { return NzDemoStepsClickableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/steps */ "43Vo");
/* harmony import */ var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/divider */ "658v");




class NzDemoStepsClickableComponent {
    constructor() {
        this.index = 0;
        this.disable = false;
    }
    onIndexChange(index) {
        this.index = index;
    }
}
/** @nocollapse */ NzDemoStepsClickableComponent.ɵfac = function NzDemoStepsClickableComponent_Factory(t) { return new (t || NzDemoStepsClickableComponent)(); };
/** @nocollapse */ NzDemoStepsClickableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoStepsClickableComponent, selectors: [["nz-demo-steps-clickable"]], decls: 9, vars: 3, consts: [[3, "nzCurrent", "nzIndexChange"], ["nzTitle", "Finished", "nzDescription", "This is a description.", 3, "nzDisabled"], ["nzTitle", "In Progress", "nzDescription", "This is a description."], ["nzTitle", "Waiting", "nzDescription", "This is a description."], ["nzDirection", "vertical", 3, "nzCurrent", "nzIndexChange"], ["nzTitle", "Finished", "nzDescription", "This is a description."]], template: function NzDemoStepsClickableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-steps", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzIndexChange", function NzDemoStepsClickableComponent_Template_nz_steps_nzIndexChange_0_listener($event) { return ctx.onIndexChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "nz-step", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "nz-step", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "nz-step", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "nz-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nz-steps", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzIndexChange", function NzDemoStepsClickableComponent_Template_nz_steps_nzIndexChange_5_listener($event) { return ctx.onIndexChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "nz-step", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "nz-step", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "nz-step", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzCurrent", ctx.index);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzDisabled", ctx.disable);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzCurrent", ctx.index);
    } }, directives: [ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_1__["NzStepsComponent"], ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_1__["NzStepComponent"], ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_2__["NzDividerComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoStepsClickableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-demo-steps-clickable',
                template: `
    <nz-steps [nzCurrent]="index" (nzIndexChange)="onIndexChange($event)">
      <nz-step nzTitle="Finished" [nzDisabled]="disable" nzDescription="This is a description."></nz-step>
      <nz-step nzTitle="In Progress" nzDescription="This is a description."></nz-step>
      <nz-step nzTitle="Waiting" nzDescription="This is a description."></nz-step>
    </nz-steps>
    <nz-divider></nz-divider>
    <nz-steps nzDirection="vertical" [nzCurrent]="index" (nzIndexChange)="onIndexChange($event)">
      <nz-step nzTitle="Finished" nzDescription="This is a description."></nz-step>
      <nz-step nzTitle="In Progress" nzDescription="This is a description."></nz-step>
      <nz-step nzTitle="Waiting" nzDescription="This is a description."></nz-step>
    </nz-steps>
  `
            }]
    }], null, null); })();


/***/ }),

/***/ "cb24":
/*!*******************************************!*\
  !*** ./site/doc/app/steps/start-index.ts ***!
  \*******************************************/
/*! exports provided: NzDemoStepsStartIndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoStepsStartIndexComponent", function() { return NzDemoStepsStartIndexComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/steps */ "43Vo");



class NzDemoStepsStartIndexComponent {
    constructor() {
        this.current = 3;
    }
}
/** @nocollapse */ NzDemoStepsStartIndexComponent.ɵfac = function NzDemoStepsStartIndexComponent_Factory(t) { return new (t || NzDemoStepsStartIndexComponent)(); };
/** @nocollapse */ NzDemoStepsStartIndexComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoStepsStartIndexComponent, selectors: [["nz-demo-steps-start-index"]], decls: 4, vars: 2, consts: [["nzSize", "small", 3, "nzCurrent", "nzStartIndex"], ["nzTitle", "Finished"], ["nzTitle", "In Progress"], ["nzTitle", "Waiting"]], template: function NzDemoStepsStartIndexComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-steps", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "nz-step", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "nz-step", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "nz-step", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzCurrent", ctx.current)("nzStartIndex", 3);
    } }, directives: [ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_1__["NzStepsComponent"], ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_1__["NzStepComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoStepsStartIndexComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-demo-steps-start-index',
                template: `
    <nz-steps [nzCurrent]="current" [nzStartIndex]="3" nzSize="small">
      <nz-step nzTitle="Finished"></nz-step>
      <nz-step nzTitle="In Progress"></nz-step>
      <nz-step nzTitle="Waiting"></nz-step>
    </nz-steps>
  `
            }]
    }], null, null); })();


/***/ }),

/***/ "d/aV":
/*!********************************************!*\
  !*** ./site/doc/app/steps/progress-dot.ts ***!
  \********************************************/
/*! exports provided: NzDemoStepsProgressDotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoStepsProgressDotComponent", function() { return NzDemoStepsProgressDotComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/steps */ "43Vo");
/* harmony import */ var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/divider */ "658v");




class NzDemoStepsProgressDotComponent {
}
/** @nocollapse */ NzDemoStepsProgressDotComponent.ɵfac = function NzDemoStepsProgressDotComponent_Factory(t) { return new (t || NzDemoStepsProgressDotComponent)(); };
/** @nocollapse */ NzDemoStepsProgressDotComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoStepsProgressDotComponent, selectors: [["nz-demo-steps-progress-dot"]], decls: 11, vars: 2, consts: [["nzProgressDot", "", 3, "nzCurrent"], ["nzTitle", "Finished", "nzDescription", "This is a description."], ["nzTitle", "In Progress", "nzDescription", "This is a description."], ["nzTitle", "Waiting", "nzDescription", "This is a description."], ["nzProgressDot", "", "nzDirection", "vertical", 3, "nzCurrent"], ["nzTitle", "Finished", "nzDescription", "This is a description. This is a description."], ["nzTitle", "In Progress", "nzDescription", "This is a description. This is a description."]], template: function NzDemoStepsProgressDotComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-steps", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "nz-step", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "nz-step", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "nz-step", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "nz-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nz-steps", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "nz-step", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "nz-step", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "nz-step", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "nz-step", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "nz-step", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzCurrent", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzCurrent", 1);
    } }, directives: [ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_1__["NzStepsComponent"], ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_1__["NzStepComponent"], ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_2__["NzDividerComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoStepsProgressDotComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-demo-steps-progress-dot',
                template: `
    <nz-steps [nzCurrent]="1" nzProgressDot>
      <nz-step nzTitle="Finished" nzDescription="This is a description."></nz-step>
      <nz-step nzTitle="In Progress" nzDescription="This is a description."></nz-step>
      <nz-step nzTitle="Waiting" nzDescription="This is a description."></nz-step>
    </nz-steps>
    <nz-divider></nz-divider>
    <nz-steps [nzCurrent]="1" nzProgressDot nzDirection="vertical">
      <nz-step nzTitle="Finished" nzDescription="This is a description. This is a description."></nz-step>
      <nz-step nzTitle="Finished" nzDescription="This is a description. This is a description."></nz-step>
      <nz-step nzTitle="In Progress" nzDescription="This is a description. This is a description."></nz-step>
      <nz-step nzTitle="Waiting" nzDescription="This is a description."></nz-step>
      <nz-step nzTitle="Waiting" nzDescription="This is a description."></nz-step>
    </nz-steps>
  `
            }]
    }], null, null); })();


/***/ }),

/***/ "kA6o":
/*!**********************************************!*\
  !*** ./site/doc/app/steps/vertical-small.ts ***!
  \**********************************************/
/*! exports provided: NzDemoStepsVerticalSmallComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoStepsVerticalSmallComponent", function() { return NzDemoStepsVerticalSmallComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/steps */ "43Vo");



class NzDemoStepsVerticalSmallComponent {
}
/** @nocollapse */ NzDemoStepsVerticalSmallComponent.ɵfac = function NzDemoStepsVerticalSmallComponent_Factory(t) { return new (t || NzDemoStepsVerticalSmallComponent)(); };
/** @nocollapse */ NzDemoStepsVerticalSmallComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoStepsVerticalSmallComponent, selectors: [["nz-demo-steps-vertical-small"]], decls: 4, vars: 1, consts: [["nzDirection", "vertical", "nzSize", "small", 3, "nzCurrent"], ["nzTitle", "Finished", "nzDescription", "This is a description."], ["nzTitle", "In Progress", "nzDescription", "This is a description."], ["nzTitle", "Waiting", "nzDescription", "This is a description."]], template: function NzDemoStepsVerticalSmallComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-steps", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "nz-step", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "nz-step", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "nz-step", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzCurrent", 1);
    } }, directives: [ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_1__["NzStepsComponent"], ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_1__["NzStepComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoStepsVerticalSmallComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-demo-steps-vertical-small',
                template: `
    <nz-steps [nzCurrent]="1" nzDirection="vertical" nzSize="small">
      <nz-step nzTitle="Finished" nzDescription="This is a description."></nz-step>
      <nz-step nzTitle="In Progress" nzDescription="This is a description."></nz-step>
      <nz-step nzTitle="Waiting" nzDescription="This is a description."></nz-step>
    </nz-steps>
  `
            }]
    }], null, null); })();


/***/ }),

/***/ "lCFB":
/*!************************************!*\
  !*** ./site/doc/app/steps/icon.ts ***!
  \************************************/
/*! exports provided: NzDemoStepsIconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoStepsIconComponent", function() { return NzDemoStepsIconComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/steps */ "43Vo");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "uLhK");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/icon */ "MOHP");





function NzDemoStepsIconComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 5);
} }
class NzDemoStepsIconComponent {
}
/** @nocollapse */ NzDemoStepsIconComponent.ɵfac = function NzDemoStepsIconComponent_Factory(t) { return new (t || NzDemoStepsIconComponent)(); };
/** @nocollapse */ NzDemoStepsIconComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoStepsIconComponent, selectors: [["nz-demo-steps-icon"]], decls: 7, vars: 1, consts: [["nzTitle", "Login", "nzStatus", "finish", "nzIcon", "user"], ["nzTitle", "Verification", "nzStatus", "finish", "nzIcon", "solution"], ["nzTitle", "Pay", "nzStatus", "process", "nzIcon", "loading"], ["nzTitle", "Done", "nzStatus", "wait", 3, "nzIcon"], ["iconTemplate", ""], ["nz-icon", "", "nzType", "smile"]], template: function NzDemoStepsIconComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-steps");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "nz-step", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "nz-step", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "nz-step", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "nz-step", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NzDemoStepsIconComponent_ng_template_5_Template, 1, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzIcon", _r0);
    } }, directives: [ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_1__["NzStepsComponent"], ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_1__["NzStepComponent"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_2__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_3__["NzIconDirective"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoStepsIconComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-demo-steps-icon',
                template: `
    <nz-steps>
      <nz-step nzTitle="Login" nzStatus="finish" nzIcon="user"></nz-step>
      <nz-step nzTitle="Verification" nzStatus="finish" nzIcon="solution"></nz-step>
      <nz-step nzTitle="Pay" nzStatus="process" nzIcon="loading"></nz-step>
      <nz-step nzTitle="Done" nzStatus="wait" [nzIcon]="iconTemplate"></nz-step>
      <ng-template #iconTemplate><i nz-icon nzType="smile"></i></ng-template>
    </nz-steps>
  `
            }]
    }], null, null); })();


/***/ }),

/***/ "lehi":
/*!********************************************!*\
  !*** ./site/doc/app/steps/index.module.ts ***!
  \********************************************/
/*! exports provided: NzDemoStepsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoStepsModule", function() { return NzDemoStepsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _share_share_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../share/share.module */ "WGB2");
/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./module */ "QC+E");
/* harmony import */ var _clickable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./clickable */ "bDV4");
/* harmony import */ var _customized_progress_dot__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./customized-progress-dot */ "7pml");
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./error */ "D6Tb");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./icon */ "lCFB");
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./nav */ "qCp6");
/* harmony import */ var _progress_dot__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./progress-dot */ "d/aV");
/* harmony import */ var _simple__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./simple */ "/zTT");
/* harmony import */ var _small_size__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./small-size */ "14/K");
/* harmony import */ var _start_index__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./start-index */ "cb24");
/* harmony import */ var _step_next__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./step-next */ "LuT1");
/* harmony import */ var _vertical_small__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./vertical-small */ "kA6o");
/* harmony import */ var _vertical__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./vertical */ "Zr8u");
/* harmony import */ var _zh_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./zh.component */ "MF7T");
/* harmony import */ var _en_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./en.component */ "v25D");
/* harmony import */ var ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/steps */ "43Vo");
/* harmony import */ var ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/popover */ "T9nw");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/button */ "TZWX");
/* harmony import */ var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/divider */ "658v");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-zorro-antd/icon */ "MOHP");

























class NzDemoStepsModule {
}
/** @nocollapse */ NzDemoStepsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NzDemoStepsModule });
/** @nocollapse */ NzDemoStepsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NzDemoStepsModule_Factory(t) { return new (t || NzDemoStepsModule)(); }, imports: [[
            _share_share_module__WEBPACK_IMPORTED_MODULE_2__["ShareModule"],
            ..._module__WEBPACK_IMPORTED_MODULE_3__["moduleList"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                { path: 'en', component: _en_component__WEBPACK_IMPORTED_MODULE_17__["NzDemoStepsEnComponent"] },
                { path: 'zh', component: _zh_component__WEBPACK_IMPORTED_MODULE_16__["NzDemoStepsZhComponent"] }
            ])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NzDemoStepsModule, { declarations: [_clickable__WEBPACK_IMPORTED_MODULE_4__["NzDemoStepsClickableComponent"],
        _customized_progress_dot__WEBPACK_IMPORTED_MODULE_5__["NzDemoStepsCustomizedProgressDotComponent"],
        _error__WEBPACK_IMPORTED_MODULE_6__["NzDemoStepsErrorComponent"],
        _icon__WEBPACK_IMPORTED_MODULE_7__["NzDemoStepsIconComponent"],
        _nav__WEBPACK_IMPORTED_MODULE_8__["NzDemoStepsNavComponent"],
        _progress_dot__WEBPACK_IMPORTED_MODULE_9__["NzDemoStepsProgressDotComponent"],
        _simple__WEBPACK_IMPORTED_MODULE_10__["NzDemoStepsSimpleComponent"],
        _small_size__WEBPACK_IMPORTED_MODULE_11__["NzDemoStepsSmallSizeComponent"],
        _start_index__WEBPACK_IMPORTED_MODULE_12__["NzDemoStepsStartIndexComponent"],
        _step_next__WEBPACK_IMPORTED_MODULE_13__["NzDemoStepsStepNextComponent"],
        _vertical_small__WEBPACK_IMPORTED_MODULE_14__["NzDemoStepsVerticalSmallComponent"],
        _vertical__WEBPACK_IMPORTED_MODULE_15__["NzDemoStepsVerticalComponent"],
        _zh_component__WEBPACK_IMPORTED_MODULE_16__["NzDemoStepsZhComponent"],
        _en_component__WEBPACK_IMPORTED_MODULE_17__["NzDemoStepsEnComponent"]], imports: [_share_share_module__WEBPACK_IMPORTED_MODULE_2__["ShareModule"], ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_18__["NzStepsModule"], ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_19__["NzPopoverModule"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_20__["NzButtonModule"], ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_21__["NzDividerModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_22__["NzIconModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoStepsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _share_share_module__WEBPACK_IMPORTED_MODULE_2__["ShareModule"],
                    ..._module__WEBPACK_IMPORTED_MODULE_3__["moduleList"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                        { path: 'en', component: _en_component__WEBPACK_IMPORTED_MODULE_17__["NzDemoStepsEnComponent"] },
                        { path: 'zh', component: _zh_component__WEBPACK_IMPORTED_MODULE_16__["NzDemoStepsZhComponent"] }
                    ])
                ],
                declarations: [
                    _clickable__WEBPACK_IMPORTED_MODULE_4__["NzDemoStepsClickableComponent"],
                    _customized_progress_dot__WEBPACK_IMPORTED_MODULE_5__["NzDemoStepsCustomizedProgressDotComponent"],
                    _error__WEBPACK_IMPORTED_MODULE_6__["NzDemoStepsErrorComponent"],
                    _icon__WEBPACK_IMPORTED_MODULE_7__["NzDemoStepsIconComponent"],
                    _nav__WEBPACK_IMPORTED_MODULE_8__["NzDemoStepsNavComponent"],
                    _progress_dot__WEBPACK_IMPORTED_MODULE_9__["NzDemoStepsProgressDotComponent"],
                    _simple__WEBPACK_IMPORTED_MODULE_10__["NzDemoStepsSimpleComponent"],
                    _small_size__WEBPACK_IMPORTED_MODULE_11__["NzDemoStepsSmallSizeComponent"],
                    _start_index__WEBPACK_IMPORTED_MODULE_12__["NzDemoStepsStartIndexComponent"],
                    _step_next__WEBPACK_IMPORTED_MODULE_13__["NzDemoStepsStepNextComponent"],
                    _vertical_small__WEBPACK_IMPORTED_MODULE_14__["NzDemoStepsVerticalSmallComponent"],
                    _vertical__WEBPACK_IMPORTED_MODULE_15__["NzDemoStepsVerticalComponent"],
                    _zh_component__WEBPACK_IMPORTED_MODULE_16__["NzDemoStepsZhComponent"],
                    _en_component__WEBPACK_IMPORTED_MODULE_17__["NzDemoStepsEnComponent"],
                ],
                entryComponents: []
            }]
    }], null, null); })();


/***/ }),

/***/ "qCp6":
/*!***********************************!*\
  !*** ./site/doc/app/steps/nav.ts ***!
  \***********************************/
/*! exports provided: NzDemoStepsNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoStepsNavComponent", function() { return NzDemoStepsNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/steps */ "43Vo");



class NzDemoStepsNavComponent {
    constructor() {
        this.index = 0;
    }
    onIndexChange(event) {
        this.index = event;
    }
}
/** @nocollapse */ NzDemoStepsNavComponent.ɵfac = function NzDemoStepsNavComponent_Factory(t) { return new (t || NzDemoStepsNavComponent)(); };
/** @nocollapse */ NzDemoStepsNavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoStepsNavComponent, selectors: [["nz-demo-steps-nav"]], decls: 14, vars: 3, consts: [["nzType", "navigation", "nzSize", "small", 3, "nzCurrent", "nzIndexChange"], ["nzTitle", "Step 1", "nzSubtitle", "00:00:05", "nzStatus", "finish", "nzDescription", "This is a description."], ["nzTitle", "Step 2", "nzSubtitle", "00:01:02", "nzStatus", "process", "nzDescription", "This is a description."], ["nzTitle", "Step 3", "nzSubtitle", "waiting for long long time", "nzStatus", "wait", "nzDescription", "This is a description."], ["nzType", "navigation", 3, "nzCurrent", "nzIndexChange"], ["nzTitle", "Step 1", "nzStatus", "finish"], ["nzTitle", "Step 2", "nzStatus", "process"], ["nzTitle", "Step 3", "nzStatus", "wait"], ["nzTitle", "Step 4", "nzStatus", "wait"], ["nzTitle", "finish 1", "nzStatus", "finish"], ["nzTitle", "finish 2", "nzStatus", "finish"], ["nzTitle", "current process", "nzStatus", "process"], ["nzTitle", "wait", "nzStatus", "wait", "nzDisabled", ""]], template: function NzDemoStepsNavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-steps", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzIndexChange", function NzDemoStepsNavComponent_Template_nz_steps_nzIndexChange_0_listener($event) { return ctx.onIndexChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "nz-step", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "nz-step", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "nz-step", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nz-steps", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzIndexChange", function NzDemoStepsNavComponent_Template_nz_steps_nzIndexChange_4_listener($event) { return ctx.onIndexChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "nz-step", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "nz-step", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "nz-step", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "nz-step", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nz-steps", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzIndexChange", function NzDemoStepsNavComponent_Template_nz_steps_nzIndexChange_9_listener($event) { return ctx.onIndexChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "nz-step", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "nz-step", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "nz-step", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "nz-step", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzCurrent", ctx.index);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzCurrent", ctx.index);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzCurrent", ctx.index);
    } }, directives: [ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_1__["NzStepsComponent"], ng_zorro_antd_steps__WEBPACK_IMPORTED_MODULE_1__["NzStepComponent"]], styles: ["nz-steps[_ngcontent-%COMP%] {\n        display: block;\n        margin-bottom: 60px;\n        box-shadow: rgb(232, 232, 232) 0px -1px 0px 0 inset;\n      }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoStepsNavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-demo-steps-nav',
                template: `
    <nz-steps nzType="navigation" nzSize="small" [nzCurrent]="index" (nzIndexChange)="onIndexChange($event)">
      <nz-step nzTitle="Step 1" nzSubtitle="00:00:05" nzStatus="finish" nzDescription="This is a description."> </nz-step>
      <nz-step nzTitle="Step 2" nzSubtitle="00:01:02" nzStatus="process" nzDescription="This is a description."> </nz-step>
      <nz-step nzTitle="Step 3" nzSubtitle="waiting for long long time" nzStatus="wait" nzDescription="This is a description."> </nz-step>
    </nz-steps>
    <nz-steps nzType="navigation" [nzCurrent]="index" (nzIndexChange)="onIndexChange($event)">
      <nz-step nzTitle="Step 1" nzStatus="finish"></nz-step>
      <nz-step nzTitle="Step 2" nzStatus="process"></nz-step>
      <nz-step nzTitle="Step 3" nzStatus="wait"></nz-step>
      <nz-step nzTitle="Step 4" nzStatus="wait"></nz-step>
    </nz-steps>
    <nz-steps nzType="navigation" nzSize="small" [nzCurrent]="index" (nzIndexChange)="onIndexChange($event)">
      <nz-step nzTitle="finish 1" nzStatus="finish"></nz-step>
      <nz-step nzTitle="finish 2" nzStatus="finish"></nz-step>
      <nz-step nzTitle="current process" nzStatus="process"></nz-step>
      <nz-step nzTitle="wait" nzStatus="wait" nzDisabled></nz-step>
    </nz-steps>
  `,
                styles: [
                    `
      nz-steps {
        display: block;
        margin-bottom: 60px;
        box-shadow: rgb(232, 232, 232) 0px -1px 0px 0 inset;
      }
    `
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "v25D":
/*!********************************************!*\
  !*** ./site/doc/app/steps/en.component.ts ***!
  \********************************************/
/*! exports provided: NzDemoStepsEnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoStepsEnComponent", function() { return NzDemoStepsEnComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _share_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../share/codebox/codebox.component */ "rKiv");
/* harmony import */ var ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/affix */ "utH8");
/* harmony import */ var ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/anchor */ "l83q");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "uLhK");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/icon */ "MOHP");
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ "pk25");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/grid */ "T+9E");
/* harmony import */ var _simple__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./simple */ "/zTT");
/* harmony import */ var _small_size__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./small-size */ "14/K");
/* harmony import */ var _start_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./start-index */ "cb24");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./icon */ "lCFB");
/* harmony import */ var _step_next__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./step-next */ "LuT1");
/* harmony import */ var _vertical__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./vertical */ "Zr8u");
/* harmony import */ var _vertical_small__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./vertical-small */ "kA6o");
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./error */ "D6Tb");
/* harmony import */ var _progress_dot__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./progress-dot */ "d/aV");
/* harmony import */ var _customized_progress_dot__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./customized-progress-dot */ "7pml");
/* harmony import */ var _clickable__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./clickable */ "bDV4");
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./nav */ "qCp6");






















class NzDemoStepsEnComponent {
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
/** @nocollapse */ NzDemoStepsEnComponent.ɵfac = function NzDemoStepsEnComponent_Factory(t) { return new (t || NzDemoStepsEnComponent)(); };
/** @nocollapse */ NzDemoStepsEnComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoStepsEnComponent, selectors: [["nz-demo-steps"]], viewQuery: function NzDemoStepsEnComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_share_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_1__["NzCodeBoxComponent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.codeBoxes = _t);
    } }, decls: 508, vars: 52, consts: [[1, "toc-affix", 3, "nzOffsetTop"], ["nzShowInkInFixed", "", 3, "nzAffix", "nzClick"], ["nzHref", "#components-steps-demo-simple", "nzTitle", "Basic"], ["nzHref", "#components-steps-demo-small-size", "nzTitle", "Mini version"], ["nzHref", "#components-steps-demo-start-index", "nzTitle", "Starting Index"], ["nzHref", "#components-steps-demo-icon", "nzTitle", "With icon"], ["nzHref", "#components-steps-demo-step-next", "nzTitle", "Switch Step"], ["nzHref", "#components-steps-demo-vertical", "nzTitle", "Vertical"], ["nzHref", "#components-steps-demo-vertical-small", "nzTitle", "Vertical mini version"], ["nzHref", "#components-steps-demo-error", "nzTitle", "Error status"], ["nzHref", "#components-steps-demo-progress-dot", "nzTitle", "Dot Style"], ["nzHref", "#components-steps-demo-customized-progress-dot", "nzTitle", "Customized Dot Style"], ["nzHref", "#components-steps-demo-clickable", "nzTitle", "Clickable"], ["nzHref", "#components-steps-demo-nav", "nzTitle", "Navigation Steps"], ["nzHref", "#api", "nzTitle", "API"], [1, "markdown"], [1, "subtitle"], [1, "widget"], ["href", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/steps/doc/index.en-US.md", "target", "_blank", "rel", "noopener noreferrer", 1, "edit-button"], ["nz-icon", "", "nzType", "edit"], ["id", "when-to-use"], ["onclick", "window.location.hash = 'when-to-use'", 1, "anchor"], [1, "language-ts"], [1, "token", "keyword"], [1, "token", "punctuation"], [1, "token", "string"], ["nz-icon", "", "nzType", "appstore", "nz-tooltip", "", "nzTooltipTitle", "Expand All Code", 1, "code-box-expand-trigger", 3, "click"], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", 3, "nzSpan"], ["nzTitle", "Basic", "nzSelector", "nz-demo-steps-simple", "nzGenerateCommand", "ng g ng-zorro-antd:steps-simple <name>", "nzComponentName", "NzDemoStepsSimpleComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], ["demo", ""], ["intro", ""], ["nzTitle", "Mini version", "nzSelector", "nz-demo-steps-small-size", "nzGenerateCommand", "ng g ng-zorro-antd:steps-small-size <name>", "nzComponentName", "NzDemoStepsSmallSizeComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], ["nzTitle", "Starting Index", "nzSelector", "nz-demo-steps-start-index", "nzGenerateCommand", "ng g ng-zorro-antd:steps-start-index <name>", "nzComponentName", "NzDemoStepsStartIndexComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], ["nzTitle", "With icon", "nzSelector", "nz-demo-steps-icon", "nzGenerateCommand", "ng g ng-zorro-antd:steps-icon <name>", "nzComponentName", "NzDemoStepsIconComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], ["nzTitle", "Switch Step", "nzSelector", "nz-demo-steps-step-next", "nzGenerateCommand", "ng g ng-zorro-antd:steps-step-next <name>", "nzComponentName", "NzDemoStepsStepNextComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], ["nzTitle", "Vertical", "nzSelector", "nz-demo-steps-vertical", "nzGenerateCommand", "ng g ng-zorro-antd:steps-vertical <name>", "nzComponentName", "NzDemoStepsVerticalComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], ["nzTitle", "Vertical mini version", "nzSelector", "nz-demo-steps-vertical-small", "nzGenerateCommand", "ng g ng-zorro-antd:steps-vertical-small <name>", "nzComponentName", "NzDemoStepsVerticalSmallComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], ["nzTitle", "Error status", "nzSelector", "nz-demo-steps-error", "nzGenerateCommand", "ng g ng-zorro-antd:steps-error <name>", "nzComponentName", "NzDemoStepsErrorComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], ["nzTitle", "Dot Style", "nzSelector", "nz-demo-steps-progress-dot", "nzGenerateCommand", "ng g ng-zorro-antd:steps-progress-dot <name>", "nzComponentName", "NzDemoStepsProgressDotComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], ["nzTitle", "Customized Dot Style", "nzSelector", "nz-demo-steps-customized-progress-dot", "nzGenerateCommand", "ng g ng-zorro-antd:steps-customized-progress-dot <name>", "nzComponentName", "NzDemoStepsCustomizedProgressDotComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], ["nzTitle", "Clickable", "nzSelector", "nz-demo-steps-clickable", "nzGenerateCommand", "ng g ng-zorro-antd:steps-clickable <name>", "nzComponentName", "NzDemoStepsClickableComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], ["nzTitle", "Navigation Steps", "nzSelector", "nz-demo-steps-nav", "nzGenerateCommand", "ng g ng-zorro-antd:steps-nav <name>", "nzComponentName", "NzDemoStepsNavComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], [1, "markdown", "api-container"], ["id", "api"], ["onclick", "window.location.hash = 'api'", 1, "anchor"], [1, "language-html"], [1, "token", "tag"], [1, "token", "attr-name"], [1, "token", "attr-value"], ["id", "nz-steps"], [1, "api-type-label", "component"], ["onclick", "window.location.hash = 'nz-steps'", 1, "anchor"], ["id", "nz-step"], ["onclick", "window.location.hash = 'nz-step'", 1, "anchor"]], template: function NzDemoStepsEnComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-affix", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nz-anchor", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzClick", function NzDemoStepsEnComponent_Template_nz_anchor_nzClick_2_listener($event) { return ctx.goLink($event); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "section", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Steps");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "section", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Steps");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " is a navigation bar that guides users through the steps of a task.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h2", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "When To Use");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "When the task is complicated or has a certain sequence in the series of subtasks, we can decompose it into several steps to make things easier.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "pre", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "import");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "{");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " NzStepsModule ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "from");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "'ng-zorro-antd/steps'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Examples");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoStepsEnComponent_Template_i_click_56_listener() { return ctx.expandAllCode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "nz-code-box", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "nz-demo-steps-simple", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "The most basic step bar.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "nz-code-box", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "nz-demo-steps-small-size", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "By setting like this: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "<nz-steps nzSize=\"small\">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, ", you can get a mini version.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "nz-code-box", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "nz-demo-steps-start-index", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "By setting ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "nzStartIndex");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, " to change starting index of a step component. Be sure to add an offset to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "nzCurrent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, " as well.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "nz-code-box", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "nz-demo-steps-icon", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "You can use your own custom icons by setting the property ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "nzIcon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, " for ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "nz-step");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, ". Old API is still compatible but we strongly suggest the new API.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "nz-code-box", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "nz-demo-steps-step-next", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Cooperate with the content and buttons, to represent the progress of a process.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "nz-code-box", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "nz-demo-steps-vertical", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "A simple step bar in the vertical direction.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "nz-code-box", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "nz-demo-steps-vertical-small", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "A simple mini version step bar in the vertical direction.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "nz-code-box", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "nz-demo-steps-error", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "By using ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "nzStatus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, " of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "nz-steps");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, ", you can specify the state for current step.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "nz-code-box", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "nz-demo-steps-progress-dot", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "Steps with progress dot style.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "nz-code-box", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "nz-demo-steps-customized-progress-dot", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "You can customize the display for Steps with progress dot style.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "nz-code-box", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "nz-demo-steps-clickable", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "subscribe ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "(nzIndexChange)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, " makes Steps clickable.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "nz-code-box", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](139, "nz-demo-steps-nav", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "Navigation steps.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "section", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "h2", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "API");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "pre", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "span", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "span", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "nz-steps");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "span", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "span", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "nz-step");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "span", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "nzTitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "span", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, "first step");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "span", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "span", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, "nz-step");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "span", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "span", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, "nz-step");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "span", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, "nzTitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "span", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, "second step");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "span", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "span", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, "nz-step");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "span", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "span", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](214, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, "nz-step");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](216, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "span", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218, "nzTitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "span", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](221, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](223, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, "third step");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](226, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](228, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "span", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "span", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](232, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](233, "nz-step");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](235, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](236, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "span", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "span", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](240, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](241, "nz-steps");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](243, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "h3", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](246, "nz-steps");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "label", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](248, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "a", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](250, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](252, "The whole of the step bar.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](257, "Property");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](259, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](261, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](263, "Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](268, "[nzType]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](270, "type of steps, can be set to one of the following values: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](272, "default");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](273, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](275, "navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](278, "'default' | 'navigation'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](281, "default");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](284, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](285, "[nzCurrent]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](287, "To set the current step, counting from 0. You can overwrite this state by using ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](289, "nzStatus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](290, " of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](292, "nz-step");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](295, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](297, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](298, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](301, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](302, "[nzDirection]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](303, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](304, "To specify the direction of the step bar, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](306, "horizontal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](307, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](308, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](309, "vertical");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](310, " are currently supported");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](311, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](312, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](313, "'vertical' | 'horizontal'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](314, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](315, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](316, "horizontal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](317, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](318, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](319, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](320, "[nzLabelPlacement]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](321, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](322, "Support vertical title and description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](323, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](324, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](325, "'vertical' | 'horizontal'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](326, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](327, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](328, "horizontal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](329, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](330, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](331, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](332, "[nzProgressDot]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](333, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](334, "Steps with progress dot style, customize the progress dot by setting it with TemplateRef");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](335, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](336, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](337, "boolean | TemplateRef<{ $implicit: TemplateRef<void>, status: string, index: number }>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](338, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](339, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](340, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](341, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](342, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](343, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](344, "[nzSize]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](345, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](346, "To specify the size of the step bar, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](347, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](348, "default");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](349, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](350, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](351, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](352, " are currently supported");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](353, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](354, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](355, "'small' | 'default'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](356, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](357, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](358, "'default'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](359, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](360, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](361, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](362, "[nzStatus]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](363, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](364, "To specify the status of current step, can be set to one of the following values: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](365, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](366, "wait");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](367, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](368, "process");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](369, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](370, "finish");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](371, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](372, "error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](373, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](374, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](375, "'wait' | 'process' | 'finish' | 'error'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](376, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](377, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](378, "'process'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](379, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](380, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](381, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](382, "[nzStartIndex]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](383, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](384, "To specify the starting number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](385, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](386, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](387, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](388, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](389, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](390, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](391, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](392, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](393, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](394, "(nzIndexChange)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](395, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](396, "Trigger event when step click");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](397, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](398, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](399, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](400, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](401, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](402, "h3", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](403, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](404, "nz-step");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](405, "label", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](406, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](407, "a", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](408, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](409, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](410, "A single step in the step bar.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](411, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](412, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](413, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](414, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](415, "Property");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](416, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](417, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](418, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](419, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](420, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](421, "Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](422, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](423, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](424, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](425, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](426, "[nzDescription]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](427, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](428, "description of the step, optional property");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](429, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](430, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](431, "string | TemplateRef<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](432, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](433, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](434, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](435, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](436, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](437, "[nzIcon]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](438, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](439, "icon of the step, optional property");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](440, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](441, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](442, "string | string[] | Set<string> | { [klass: string]: any; }");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](443, " | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](444, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](445, "TemplateRef<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](446, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](447, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](448, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](449, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](450, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](451, "[nzStatus]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](452, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](453, "to specify the status. It will be automatically set by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](454, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](455, "nzCurrent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](456, " of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](457, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](458, "nz-steps");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](459, " if not configured. Optional values are: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](460, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](461, "wait");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](462, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](463, "process");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](464, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](465, "finish");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](466, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](467, "error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](468, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](469, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](470, "'wait' | 'process' | 'finish' | 'error'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](471, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](472, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](473, "'wait'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](474, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](475, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](476, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](477, "[nzTitle]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](478, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](479, "title of the step");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](480, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](481, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](482, "string | TemplateRef<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](483, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](484, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](485, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](486, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](487, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](488, "[nzSubtitle]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](489, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](490, "subTitle of the step");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](491, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](492, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](493, "string | TemplateRef<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](494, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](495, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](496, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](497, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](498, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](499, "[nzDisabled]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](500, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](501, "disable click");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](502, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](503, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](504, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](505, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](506, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](507, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzGutter", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-steps-demo-simple")("nzLink", "components-steps-demo-simple")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/steps/demo/simple.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-steps-demo-small-size")("nzLink", "components-steps-demo-small-size")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/steps/demo/small-size.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-steps-demo-start-index")("nzLink", "components-steps-demo-start-index")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/steps/demo/start-index.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-steps-demo-icon")("nzLink", "components-steps-demo-icon")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/steps/demo/icon.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-steps-demo-step-next")("nzLink", "components-steps-demo-step-next")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/steps/demo/step-next.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-steps-demo-vertical")("nzLink", "components-steps-demo-vertical")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/steps/demo/vertical.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-steps-demo-vertical-small")("nzLink", "components-steps-demo-vertical-small")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/steps/demo/vertical-small.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-steps-demo-error")("nzLink", "components-steps-demo-error")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/steps/demo/error.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-steps-demo-progress-dot")("nzLink", "components-steps-demo-progress-dot")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/steps/demo/progress-dot.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-steps-demo-customized-progress-dot")("nzLink", "components-steps-demo-customized-progress-dot")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/steps/demo/customized-progress-dot.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-steps-demo-clickable")("nzLink", "components-steps-demo-clickable")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/steps/demo/clickable.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-steps-demo-nav")("nzLink", "components-steps-demo-nav")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/steps/demo/nav.md");
    } }, directives: [ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_2__["NzAffixComponent"], ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_3__["NzAnchorComponent"], ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_3__["NzAnchorLinkComponent"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__["NzIconDirective"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_6__["NzTooltipDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__["NzRowDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__["NzColDirective"], _share_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_1__["NzCodeBoxComponent"], _simple__WEBPACK_IMPORTED_MODULE_8__["NzDemoStepsSimpleComponent"], _small_size__WEBPACK_IMPORTED_MODULE_9__["NzDemoStepsSmallSizeComponent"], _start_index__WEBPACK_IMPORTED_MODULE_10__["NzDemoStepsStartIndexComponent"], _icon__WEBPACK_IMPORTED_MODULE_11__["NzDemoStepsIconComponent"], _step_next__WEBPACK_IMPORTED_MODULE_12__["NzDemoStepsStepNextComponent"], _vertical__WEBPACK_IMPORTED_MODULE_13__["NzDemoStepsVerticalComponent"], _vertical_small__WEBPACK_IMPORTED_MODULE_14__["NzDemoStepsVerticalSmallComponent"], _error__WEBPACK_IMPORTED_MODULE_15__["NzDemoStepsErrorComponent"], _progress_dot__WEBPACK_IMPORTED_MODULE_16__["NzDemoStepsProgressDotComponent"], _customized_progress_dot__WEBPACK_IMPORTED_MODULE_17__["NzDemoStepsCustomizedProgressDotComponent"], _clickable__WEBPACK_IMPORTED_MODULE_18__["NzDemoStepsClickableComponent"], _nav__WEBPACK_IMPORTED_MODULE_19__["NzDemoStepsNavComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoStepsEnComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-demo-steps',
                preserveWhitespaces: false,
                templateUrl: './en.html'
            }]
    }], null, { codeBoxes: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"],
            args: [_share_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_1__["NzCodeBoxComponent"]]
        }] }); })();


/***/ })

};;
//# sourceMappingURL=steps-index-module.js.map