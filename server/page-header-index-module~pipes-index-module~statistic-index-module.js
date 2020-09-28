exports.ids = ["page-header-index-module~pipes-index-module~statistic-index-module"];
exports.modules = {

/***/ "3hSY":
/*!******************************************************************!*\
  !*** ./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-pipe.js ***!
  \******************************************************************/
/*! exports provided: NzPipesModule, NzTimeRangePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzPipesModule", function() { return NzPipesModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzTimeRangePipe", function() { return NzTimeRangePipe; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_core_time__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/core/time */ "H8ly");
/* harmony import */ var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/core/util */ "d1+9");





/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

class NzTimeRangePipe {
    transform(value, format = 'HH:mm:ss') {
        let duration = Number(value || 0);
        return ng_zorro_antd_core_time__WEBPACK_IMPORTED_MODULE_2__["timeUnits"].reduce((current, [name, unit]) => {
            if (current.indexOf(name) !== -1) {
                const v = Math.floor(duration / unit);
                duration -= v * unit;
                return current.replace(new RegExp(`${name}+`, 'g'), (match) => {
                    return Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_3__["padStart"])(v.toString(), match.length, '0');
                });
            }
            return current;
        }, format);
    }
}
/** @nocollapse */
NzTimeRangePipe.ɵfac = function NzTimeRangePipe_Factory(t) { return new (t || NzTimeRangePipe)(); };
/** @nocollapse */
NzTimeRangePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "nzTimeRange", type: NzTimeRangePipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NzTimeRangePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"],
        args: [{
                name: 'nzTimeRange',
                pure: true
            }]
    }], null, null); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzPipesModule {
}
/** @nocollapse */
NzPipesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: NzPipesModule });
/** @nocollapse */
NzPipesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function NzPipesModule_Factory(t) { return new (t || NzPipesModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NzPipesModule, { declarations: function () { return [NzTimeRangePipe]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]]; }, exports: function () { return [NzTimeRangePipe]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NzPipesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]],
                exports: [NzTimeRangePipe],
                declarations: [NzTimeRangePipe]
            }]
    }], null, null); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=ng-zorro-antd-core-pipe.js.map

/***/ }),

/***/ "pvw4":
/*!******************************************************************!*\
  !*** ./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-statistic.js ***!
  \******************************************************************/
/*! exports provided: NzCountdownComponent, NzStatisticComponent, NzStatisticModule, NzStatisticNumberComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzCountdownComponent", function() { return NzCountdownComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzStatisticComponent", function() { return NzStatisticComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzStatisticModule", function() { return NzStatisticModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzStatisticNumberComponent", function() { return NzStatisticNumberComponent; });
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/platform */ "nLfN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/outlet */ "fwD0");
/* harmony import */ var ng_zorro_antd_core_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/core/pipe */ "3hSY");







/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */






function NzStatisticComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.nzTitle);
} }
function NzStatisticComponent_span_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3.nzPrefix);
} }
function NzStatisticComponent_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NzStatisticComponent_span_4_ng_container_1_Template, 2, 1, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r1.nzPrefix);
} }
function NzStatisticComponent_span_6_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r4.nzSuffix);
} }
function NzStatisticComponent_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NzStatisticComponent_span_6_ng_container_1_Template, 2, 1, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r2.nzSuffix);
} }
function NzCountdownComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "nzTimeRange");
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](1, 1, ctx_r1.diff, ctx_r1.nzFormat));
} }
const _c0 = function (a0) { return { $implicit: a0 }; };
function NzStatisticNumberComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0, 3);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.nzValueTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c0, ctx_r0.nzValue));
} }
function NzStatisticNumberComponent_ng_container_2_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.displayInt);
} }
function NzStatisticNumberComponent_ng_container_2_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3.displayDecimal);
} }
function NzStatisticNumberComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NzStatisticNumberComponent_ng_container_2_span_1_Template, 2, 1, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, NzStatisticNumberComponent_ng_container_2_span_2_Template, 2, 1, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.displayInt);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.displayDecimal);
} }
class NzStatisticComponent {
    constructor() {
        this.nzValueStyle = {};
    }
}
/** @nocollapse */
NzStatisticComponent.ɵfac = function NzStatisticComponent_Factory(t) { return new (t || NzStatisticComponent)(); };
/** @nocollapse */
NzStatisticComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NzStatisticComponent, selectors: [["nz-statistic"]], inputs: { nzValueStyle: "nzValueStyle", nzPrefix: "nzPrefix", nzSuffix: "nzSuffix", nzTitle: "nzTitle", nzValue: "nzValue", nzValueTemplate: "nzValueTemplate" }, exportAs: ["nzStatistic"], decls: 7, vars: 6, consts: [[1, "ant-statistic"], [1, "ant-statistic-title"], [4, "nzStringTemplateOutlet"], [1, "ant-statistic-content", 3, "ngStyle"], ["class", "ant-statistic-content-prefix", 4, "ngIf"], [3, "nzValue", "nzValueTemplate"], ["class", "ant-statistic-content-suffix", 4, "ngIf"], [1, "ant-statistic-content-prefix"], [1, "ant-statistic-content-suffix"]], template: function NzStatisticComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, NzStatisticComponent_ng_container_2_Template, 2, 1, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, NzStatisticComponent_span_4_Template, 2, 1, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "nz-statistic-number", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, NzStatisticComponent_span_6_Template, 2, 1, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzStringTemplateOutlet", ctx.nzTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx.nzValueStyle);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.nzPrefix);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzValue", ctx.nzValue)("nzValueTemplate", ctx.nzValueTemplate);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.nzSuffix);
    } }, directives: function () { return [ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_4__["NzStringTemplateOutletDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], NzStatisticNumberComponent]; }, encapsulation: 2, changeDetection: 0 });
NzStatisticComponent.propDecorators = {
    nzPrefix: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    nzSuffix: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    nzTitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    nzValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    nzValueStyle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    nzValueTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NzStatisticComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                selector: 'nz-statistic',
                exportAs: 'nzStatistic',
                template: `
    <div class="ant-statistic">
      <div class="ant-statistic-title">
        <ng-container *nzStringTemplateOutlet="nzTitle">{{ nzTitle }}</ng-container>
      </div>
      <div class="ant-statistic-content" [ngStyle]="nzValueStyle">
        <span *ngIf="nzPrefix" class="ant-statistic-content-prefix">
          <ng-container *nzStringTemplateOutlet="nzPrefix">{{ nzPrefix }}</ng-container>
        </span>
        <nz-statistic-number [nzValue]="nzValue" [nzValueTemplate]="nzValueTemplate"> </nz-statistic-number>
        <span *ngIf="nzSuffix" class="ant-statistic-content-suffix">
          <ng-container *nzStringTemplateOutlet="nzSuffix">{{ nzSuffix }}</ng-container>
        </span>
      </div>
    </div>
  `
            }]
    }], function () { return []; }, { nzValueStyle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], nzPrefix: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], nzSuffix: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], nzTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], nzValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], nzValueTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
const REFRESH_INTERVAL = 1000 / 30;
class NzCountdownComponent extends NzStatisticComponent {
    constructor(cdr, ngZone, platform) {
        super();
        this.cdr = cdr;
        this.ngZone = ngZone;
        this.platform = platform;
        this.nzFormat = 'HH:mm:ss';
        this.nzCountdownFinish = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.target = 0;
    }
    ngOnChanges(changes) {
        if (changes.nzValue) {
            this.target = Number(changes.nzValue.currentValue);
            if (!changes.nzValue.isFirstChange()) {
                this.syncTimer();
            }
        }
    }
    ngOnInit() {
        this.syncTimer();
    }
    ngOnDestroy() {
        this.stopTimer();
    }
    syncTimer() {
        if (this.target >= Date.now()) {
            this.startTimer();
        }
        else {
            this.stopTimer();
        }
    }
    startTimer() {
        if (this.platform.isBrowser) {
            this.ngZone.runOutsideAngular(() => {
                this.stopTimer();
                this.updater_ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(REFRESH_INTERVAL).subscribe(() => {
                    this.updateValue();
                    this.cdr.detectChanges();
                });
            });
        }
    }
    stopTimer() {
        if (this.updater_) {
            this.updater_.unsubscribe();
            this.updater_ = null;
        }
    }
    /**
     * Update time that should be displayed on the screen.
     */
    updateValue() {
        this.diff = Math.max(this.target - Date.now(), 0);
        if (this.diff === 0) {
            this.stopTimer();
            this.nzCountdownFinish.emit();
        }
    }
}
/** @nocollapse */
NzCountdownComponent.ɵfac = function NzCountdownComponent_Factory(t) { return new (t || NzCountdownComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["Platform"])); };
/** @nocollapse */
NzCountdownComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NzCountdownComponent, selectors: [["nz-countdown"]], inputs: { nzFormat: "nzFormat" }, outputs: { nzCountdownFinish: "nzCountdownFinish" }, exportAs: ["nzCountdown"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 3, vars: 6, consts: [[3, "nzValue", "nzValueStyle", "nzValueTemplate", "nzTitle", "nzPrefix", "nzSuffix"], ["countDownTpl", ""]], template: function NzCountdownComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nz-statistic", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NzCountdownComponent_ng_template_1_Template, 2, 4, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzValue", ctx.diff)("nzValueStyle", ctx.nzValueStyle)("nzValueTemplate", ctx.nzValueTemplate || _r0)("nzTitle", ctx.nzTitle)("nzPrefix", ctx.nzPrefix)("nzSuffix", ctx.nzSuffix);
    } }, directives: [NzStatisticComponent], pipes: [ng_zorro_antd_core_pipe__WEBPACK_IMPORTED_MODULE_5__["NzTimeRangePipe"]], encapsulation: 2, changeDetection: 0 });
NzCountdownComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["Platform"] }
];
NzCountdownComponent.propDecorators = {
    nzFormat: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    nzCountdownFinish: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NzCountdownComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                selector: 'nz-countdown',
                exportAs: 'nzCountdown',
                template: `
    <nz-statistic
      [nzValue]="diff"
      [nzValueStyle]="nzValueStyle"
      [nzValueTemplate]="nzValueTemplate || countDownTpl"
      [nzTitle]="nzTitle"
      [nzPrefix]="nzPrefix"
      [nzSuffix]="nzSuffix"
    >
    </nz-statistic>

    <ng-template #countDownTpl>{{ diff | nzTimeRange: nzFormat }}</ng-template>
  `
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }, { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["Platform"] }]; }, { nzFormat: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], nzCountdownFinish: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }] }); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzStatisticNumberComponent {
    constructor(locale_id) {
        this.locale_id = locale_id;
        this.displayInt = '';
        this.displayDecimal = '';
    }
    ngOnChanges() {
        this.formatNumber();
    }
    formatNumber() {
        const decimalSeparator = typeof this.nzValue === 'number' ? '.' : Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["getLocaleNumberSymbol"])(this.locale_id, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NumberSymbol"].Decimal);
        const value = String(this.nzValue);
        const [int, decimal] = value.split(decimalSeparator);
        this.displayInt = int;
        this.displayDecimal = decimal ? `${decimalSeparator}${decimal}` : '';
    }
}
/** @nocollapse */
NzStatisticNumberComponent.ɵfac = function NzStatisticNumberComponent_Factory(t) { return new (t || NzStatisticNumberComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"])); };
/** @nocollapse */
NzStatisticNumberComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NzStatisticNumberComponent, selectors: [["nz-statistic-number"]], inputs: { nzValue: "nzValue", nzValueTemplate: "nzValueTemplate" }, exportAs: ["nzStatisticNumber"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 3, vars: 2, consts: [[1, "ant-statistic-content-value"], [3, "ngTemplateOutlet", "ngTemplateOutletContext", 4, "ngIf"], [4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "ant-statistic-content-value-int", 4, "ngIf"], ["class", "ant-statistic-content-value-decimal", 4, "ngIf"], [1, "ant-statistic-content-value-int"], [1, "ant-statistic-content-value-decimal"]], template: function NzStatisticNumberComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NzStatisticNumberComponent_ng_container_1_Template, 1, 4, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, NzStatisticNumberComponent_ng_container_2_Template, 3, 2, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.nzValueTemplate);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.nzValueTemplate);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgTemplateOutlet"]], encapsulation: 2, changeDetection: 0 });
NzStatisticNumberComponent.ctorParameters = () => [
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"],] }] }
];
NzStatisticNumberComponent.propDecorators = {
    nzValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    nzValueTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NzStatisticNumberComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                preserveWhitespaces: false,
                selector: 'nz-statistic-number',
                exportAs: 'nzStatisticNumber',
                template: `
    <span class="ant-statistic-content-value">
      <ng-container *ngIf="nzValueTemplate" [ngTemplateOutlet]="nzValueTemplate" [ngTemplateOutletContext]="{ $implicit: nzValue }">
      </ng-container>
      <ng-container *ngIf="!nzValueTemplate">
        <span *ngIf="displayInt" class="ant-statistic-content-value-int">{{ displayInt }}</span>
        <span *ngIf="displayDecimal" class="ant-statistic-content-value-decimal">{{ displayDecimal }}</span>
      </ng-container>
    </span>
  `
            }]
    }], function () { return [{ type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]]
            }] }]; }, { nzValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], nzValueTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzStatisticModule {
}
/** @nocollapse */
NzStatisticModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: NzStatisticModule });
/** @nocollapse */
NzStatisticModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function NzStatisticModule_Factory(t) { return new (t || NzStatisticModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["PlatformModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_4__["NzOutletModule"], ng_zorro_antd_core_pipe__WEBPACK_IMPORTED_MODULE_5__["NzPipesModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NzStatisticModule, { declarations: function () { return [NzStatisticComponent, NzCountdownComponent, NzStatisticNumberComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["PlatformModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_4__["NzOutletModule"], ng_zorro_antd_core_pipe__WEBPACK_IMPORTED_MODULE_5__["NzPipesModule"]]; }, exports: function () { return [NzStatisticComponent, NzCountdownComponent, NzStatisticNumberComponent]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NzStatisticModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["PlatformModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_4__["NzOutletModule"], ng_zorro_antd_core_pipe__WEBPACK_IMPORTED_MODULE_5__["NzPipesModule"]],
                declarations: [NzStatisticComponent, NzCountdownComponent, NzStatisticNumberComponent],
                exports: [NzStatisticComponent, NzCountdownComponent, NzStatisticNumberComponent]
            }]
    }], null, null); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=ng-zorro-antd-statistic.js.map

/***/ })

};;
//# sourceMappingURL=page-header-index-module~pipes-index-module~statistic-index-module.js.map