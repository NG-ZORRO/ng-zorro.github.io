exports.ids = ["popconfirm-index-module~space-index-module~table-index-module"];
exports.modules = {

/***/ "sgt3":
/*!*******************************************************************!*\
  !*** ./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-popconfirm.js ***!
  \*******************************************************************/
/*! exports provided: NzPopconfirmComponent, NzPopconfirmDirective, NzPopconfirmModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzPopconfirmComponent", function() { return NzPopconfirmComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzPopconfirmDirective", function() { return NzPopconfirmDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzPopconfirmModule", function() { return NzPopconfirmModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "zOht");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_core_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/core/animation */ "eczo");
/* harmony import */ var ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/core/no-animation */ "H3Kp");
/* harmony import */ var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/util */ "d1+9");
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ "pk25");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/overlay */ "rDax");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/button */ "TZWX");
/* harmony import */ var ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/core/outlet */ "fwD0");
/* harmony import */ var ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/core/overlay */ "EOB0");
/* harmony import */ var ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/i18n */ "d4FC");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/icon */ "MOHP");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "vdzw");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "uLhK");
















/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */












function NzPopconfirmComponent_ng_template_0_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 13);
} }
function NzPopconfirmComponent_ng_template_0_ng_container_7_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const icon_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzType", icon_r9 || "exclamation-circle");
} }
function NzPopconfirmComponent_ng_template_0_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NzPopconfirmComponent_ng_template_0_ng_container_7_ng_container_1_Template, 2, 1, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r3.nzIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3.nzTitle);
} }
function NzPopconfirmComponent_ng_template_0_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r4.nzCancelText);
} }
function NzPopconfirmComponent_ng_template_0_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "nzI18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "Modal.cancelText"));
} }
function NzPopconfirmComponent_ng_template_0_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r6.nzOkText);
} }
function NzPopconfirmComponent_ng_template_0_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "nzI18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "Modal.okText"));
} }
function NzPopconfirmComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, NzPopconfirmComponent_ng_template_0_div_2_Template, 1, 0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, NzPopconfirmComponent_ng_template_0_ng_container_7_Template, 4, 2, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NzPopconfirmComponent_ng_template_0_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r10.onCancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, NzPopconfirmComponent_ng_template_0_ng_container_10_Template, 2, 1, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, NzPopconfirmComponent_ng_template_0_ng_container_11_Template, 3, 3, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NzPopconfirmComponent_ng_template_0_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r12.onConfirm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, NzPopconfirmComponent_ng_template_0_ng_container_13_Template, 2, 1, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, NzPopconfirmComponent_ng_template_0_ng_container_14_Template, 3, 3, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r1._classMap)("ngStyle", ctx_r1.nzOverlayStyle)("@.disabled", ctx_r1.noAnimation == null ? null : ctx_r1.noAnimation.nzNoAnimation)("nzNoAnimation", ctx_r1.noAnimation == null ? null : ctx_r1.noAnimation.nzNoAnimation)("@zoomBigMotion", "active");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.nzPopconfirmShowArrow);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r1.nzTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSize", "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.nzCancelText);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r1.nzCancelText);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSize", "small")("nzType", ctx_r1.nzOkType);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.nzOkText);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r1.nzOkText);
} }
class NzPopconfirmDirective extends ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_5__["NzTooltipBaseDirective"] {
    constructor(elementRef, hostView, resolver, renderer, noAnimation) {
        super(elementRef, hostView, resolver, renderer, noAnimation);
        this.specificTrigger = 'click';
        this.specificPlacement = 'top';
        this.nzCondition = false;
        this.nzPopconfirmShowArrow = true;
        /**
         * @deprecated 10.0.0. This is deprecated and going to be removed in 10.0.0.
         * Please use a more specific API. Like `nzTooltipTrigger`.
         */
        this.nzTrigger = 'click';
        // tslint:disable-next-line:no-output-rename
        this.specificVisibleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.nzOnCancel = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.nzOnConfirm = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.componentFactory = this.resolver.resolveComponentFactory(NzPopconfirmComponent);
        this.needProxyProperties = [
            'nzOverlayClassName',
            'nzOverlayStyle',
            'nzMouseEnterDelay',
            'nzMouseLeaveDelay',
            'nzVisible',
            'nzOkText',
            'nzOkType',
            'nzCancelText',
            'nzCondition',
            'nzIcon',
            'nzPopconfirmShowArrow'
        ];
    }
    /**
     * @override
     */
    createComponent() {
        super.createComponent();
        this.component.nzOnCancel.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.destroy$)).subscribe(() => {
            this.nzOnCancel.emit();
        });
        this.component.nzOnConfirm.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.destroy$)).subscribe(() => {
            this.nzOnConfirm.emit();
        });
    }
}
/** @nocollapse */
NzPopconfirmDirective.ɵfac = function NzPopconfirmDirective_Factory(t) { return new (t || NzPopconfirmDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_3__["NzNoAnimationDirective"], 9)); };
/** @nocollapse */
NzPopconfirmDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: NzPopconfirmDirective, selectors: [["", "nz-popconfirm", ""]], hostVars: 2, hostBindings: function NzPopconfirmDirective_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("ant-popover-open", ctx.visible);
    } }, inputs: { specificTrigger: ["nzPopconfirmTrigger", "specificTrigger"], specificPlacement: ["nzPopconfirmPlacement", "specificPlacement"], nzCondition: "nzCondition", nzPopconfirmShowArrow: "nzPopconfirmShowArrow", nzTrigger: "nzTrigger", specificTitle: ["nzPopconfirmTitle", "specificTitle"], directiveNameTitle: ["nz-popconfirm", "directiveNameTitle"], specificOrigin: ["nzPopconfirmOrigin", "specificOrigin"], specificMouseEnterDelay: ["nzPopconfirmMouseEnterDelay", "specificMouseEnterDelay"], specificMouseLeaveDelay: ["nzPopconfirmMouseLeaveDelay", "specificMouseLeaveDelay"], specificOverlayClassName: ["nzPopconfirmOverlayClassName", "specificOverlayClassName"], specificOverlayStyle: ["nzPopconfirmOverlayStyle", "specificOverlayStyle"], nzOkText: "nzOkText", nzOkType: "nzOkType", nzCancelText: "nzCancelText", nzIcon: "nzIcon", specificVisible: ["nzPopconfirmVisible", "specificVisible"] }, outputs: { specificVisibleChange: "nzPopconfirmVisibleChange", nzOnCancel: "nzOnCancel", nzOnConfirm: "nzOnConfirm" }, exportAs: ["nzPopconfirm"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
NzPopconfirmDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
    { type: ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_3__["NzNoAnimationDirective"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }] }
];
NzPopconfirmDirective.propDecorators = {
    specificTitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['nzPopconfirmTitle',] }],
    directiveNameTitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['nz-popconfirm',] }],
    specificTrigger: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['nzPopconfirmTrigger',] }],
    specificPlacement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['nzPopconfirmPlacement',] }],
    specificOrigin: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['nzPopconfirmOrigin',] }],
    specificMouseEnterDelay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['nzPopconfirmMouseEnterDelay',] }],
    specificMouseLeaveDelay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['nzPopconfirmMouseLeaveDelay',] }],
    specificOverlayClassName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['nzPopconfirmOverlayClassName',] }],
    specificOverlayStyle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['nzPopconfirmOverlayStyle',] }],
    nzOkText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    nzOkType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    nzCancelText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    nzIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    nzCondition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    nzPopconfirmShowArrow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    nzTrigger: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    specificVisible: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['nzPopconfirmVisible',] }],
    specificVisibleChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"], args: ['nzPopconfirmVisibleChange',] }],
    nzOnCancel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    nzOnConfirm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], NzPopconfirmDirective.prototype, "nzCondition", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], NzPopconfirmDirective.prototype, "nzPopconfirmShowArrow", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NzPopconfirmDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: '[nz-popconfirm]',
                exportAs: 'nzPopconfirm',
                host: {
                    '[class.ant-popover-open]': 'visible'
                }
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }, { type: ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_3__["NzNoAnimationDirective"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }] }]; }, { specificTrigger: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['nzPopconfirmTrigger']
        }], specificPlacement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['nzPopconfirmPlacement']
        }], nzCondition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], nzPopconfirmShowArrow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], nzTrigger: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], specificVisibleChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
            args: ['nzPopconfirmVisibleChange']
        }], nzOnCancel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], nzOnConfirm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], specificTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['nzPopconfirmTitle']
        }], directiveNameTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['nz-popconfirm']
        }], specificOrigin: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['nzPopconfirmOrigin']
        }], specificMouseEnterDelay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['nzPopconfirmMouseEnterDelay']
        }], specificMouseLeaveDelay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['nzPopconfirmMouseLeaveDelay']
        }], specificOverlayClassName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['nzPopconfirmOverlayClassName']
        }], specificOverlayStyle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['nzPopconfirmOverlayStyle']
        }], nzOkText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], nzOkType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], nzCancelText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], nzIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], specificVisible: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['nzPopconfirmVisible']
        }] }); })();
class NzPopconfirmComponent extends ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_5__["NzToolTipComponent"] {
    constructor(cdr, noAnimation) {
        super(cdr, noAnimation);
        this.noAnimation = noAnimation;
        this.nzCondition = false;
        this.nzPopconfirmShowArrow = true;
        this.nzOkType = 'primary';
        this.nzOnCancel = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.nzOnConfirm = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this._trigger = 'click';
        this._prefix = 'ant-popover-placement';
        this._hasBackdrop = true;
    }
    ngOnDestroy() {
        super.ngOnDestroy();
        this.nzOnCancel.complete();
        this.nzOnConfirm.complete();
    }
    /**
     * @override
     */
    show() {
        if (!this.nzCondition) {
            super.show();
        }
        else {
            this.onConfirm();
        }
    }
    onCancel() {
        this.nzOnCancel.next();
        super.hide();
    }
    onConfirm() {
        this.nzOnConfirm.next();
        super.hide();
    }
}
/** @nocollapse */
NzPopconfirmComponent.ɵfac = function NzPopconfirmComponent_Factory(t) { return new (t || NzPopconfirmComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_3__["NzNoAnimationDirective"], 9)); };
/** @nocollapse */
NzPopconfirmComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NzPopconfirmComponent, selectors: [["nz-popconfirm"]], exportAs: ["nzPopconfirmComponent"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 5, consts: [["cdkConnectedOverlay", "", "nzConnectedOverlay", "", 3, "cdkConnectedOverlayOrigin", "cdkConnectedOverlayHasBackdrop", "cdkConnectedOverlayPositions", "cdkConnectedOverlayOpen", "cdkConnectedOverlayPush", "backdropClick", "detach", "positionChange"], ["overlay", "cdkConnectedOverlay"], [1, "ant-popover", 3, "ngClass", "ngStyle", "nzNoAnimation"], [1, "ant-popover-content"], ["class", "ant-popover-arrow", 4, "ngIf"], [1, "ant-popover-inner"], [1, "ant-popover-inner-content"], [1, "ant-popover-message"], [4, "nzStringTemplateOutlet"], [1, "ant-popover-buttons"], ["nz-button", "", 3, "nzSize", "click"], [4, "ngIf"], ["nz-button", "", 3, "nzSize", "nzType", "click"], [1, "ant-popover-arrow"], [1, "ant-popover-message-title"], ["nz-icon", "", "nzTheme", "fill", 3, "nzType"]], template: function NzPopconfirmComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, NzPopconfirmComponent_ng_template_0_Template, 15, 14, "ng-template", 0, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("backdropClick", function NzPopconfirmComponent_Template_ng_template_backdropClick_0_listener() { return ctx.hide(); })("detach", function NzPopconfirmComponent_Template_ng_template_detach_0_listener() { return ctx.hide(); })("positionChange", function NzPopconfirmComponent_Template_ng_template_positionChange_0_listener($event) { return ctx.onPositionChange($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("cdkConnectedOverlayOrigin", ctx.origin)("cdkConnectedOverlayHasBackdrop", ctx._hasBackdrop)("cdkConnectedOverlayPositions", ctx._positions)("cdkConnectedOverlayOpen", ctx._visible)("cdkConnectedOverlayPush", true);
    } }, directives: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__["CdkConnectedOverlay"], ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_12__["NzConnectedOverlayDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgStyle"], ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_3__["NzNoAnimationDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_11__["NzStringTemplateOutletDirective"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_10__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_15__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_16__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_14__["NzIconDirective"]], pipes: [ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_13__["NzI18nPipe"]], encapsulation: 2, data: { animation: [ng_zorro_antd_core_animation__WEBPACK_IMPORTED_MODULE_2__["zoomBigMotion"]] }, changeDetection: 0 });
NzPopconfirmComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_3__["NzNoAnimationDirective"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NzPopconfirmComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                selector: 'nz-popconfirm',
                exportAs: 'nzPopconfirmComponent',
                preserveWhitespaces: false,
                animations: [ng_zorro_antd_core_animation__WEBPACK_IMPORTED_MODULE_2__["zoomBigMotion"]],
                template: `
    <ng-template
      #overlay="cdkConnectedOverlay"
      cdkConnectedOverlay
      nzConnectedOverlay
      [cdkConnectedOverlayOrigin]="origin"
      [cdkConnectedOverlayHasBackdrop]="_hasBackdrop"
      (backdropClick)="hide()"
      (detach)="hide()"
      (positionChange)="onPositionChange($event)"
      [cdkConnectedOverlayPositions]="_positions"
      [cdkConnectedOverlayOpen]="_visible"
      [cdkConnectedOverlayPush]="true"
    >
      <div
        class="ant-popover"
        [ngClass]="_classMap"
        [ngStyle]="nzOverlayStyle"
        [@.disabled]="noAnimation?.nzNoAnimation"
        [nzNoAnimation]="noAnimation?.nzNoAnimation"
        [@zoomBigMotion]="'active'"
      >
        <div class="ant-popover-content">
          <div class="ant-popover-arrow" *ngIf="nzPopconfirmShowArrow"></div>
          <div class="ant-popover-inner">
            <div>
              <div class="ant-popover-inner-content">
                <div class="ant-popover-message">
                  <ng-container *nzStringTemplateOutlet="nzTitle">
                    <ng-container *nzStringTemplateOutlet="nzIcon; let icon">
                      <i nz-icon [nzType]="icon || 'exclamation-circle'" nzTheme="fill"></i>
                    </ng-container>
                    <div class="ant-popover-message-title">{{ nzTitle }}</div>
                  </ng-container>
                </div>
                <div class="ant-popover-buttons">
                  <button nz-button [nzSize]="'small'" (click)="onCancel()">
                    <ng-container *ngIf="nzCancelText">{{ nzCancelText }}</ng-container>
                    <ng-container *ngIf="!nzCancelText">{{ 'Modal.cancelText' | nzI18n }}</ng-container>
                  </button>
                  <button nz-button [nzSize]="'small'" [nzType]="nzOkType" (click)="onConfirm()">
                    <ng-container *ngIf="nzOkText">{{ nzOkText }}</ng-container>
                    <ng-container *ngIf="!nzOkText">{{ 'Modal.okText' | nzI18n }}</ng-container>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ng-template>
  `
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_3__["NzNoAnimationDirective"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }] }]; }, null); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzPopconfirmModule {
}
/** @nocollapse */
NzPopconfirmModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: NzPopconfirmModule });
/** @nocollapse */
NzPopconfirmModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function NzPopconfirmModule_Factory(t) { return new (t || NzPopconfirmModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"],
            ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_10__["NzButtonModule"],
            _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__["OverlayModule"],
            ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_13__["NzI18nModule"],
            ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_14__["NzIconModule"],
            ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_11__["NzOutletModule"],
            ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_12__["NzOverlayModule"],
            ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_3__["NzNoAnimationModule"],
            ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_5__["NzToolTipModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NzPopconfirmModule, { declarations: function () { return [NzPopconfirmComponent, NzPopconfirmDirective]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"],
        ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_10__["NzButtonModule"],
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__["OverlayModule"],
        ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_13__["NzI18nModule"],
        ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_14__["NzIconModule"],
        ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_11__["NzOutletModule"],
        ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_12__["NzOverlayModule"],
        ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_3__["NzNoAnimationModule"],
        ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_5__["NzToolTipModule"]]; }, exports: function () { return [NzPopconfirmComponent, NzPopconfirmDirective]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NzPopconfirmModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [NzPopconfirmComponent, NzPopconfirmDirective],
                exports: [NzPopconfirmComponent, NzPopconfirmDirective],
                entryComponents: [NzPopconfirmComponent],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"],
                    ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_10__["NzButtonModule"],
                    _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__["OverlayModule"],
                    ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_13__["NzI18nModule"],
                    ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_14__["NzIconModule"],
                    ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_11__["NzOutletModule"],
                    ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_12__["NzOverlayModule"],
                    ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_3__["NzNoAnimationModule"],
                    ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_5__["NzToolTipModule"]
                ]
            }]
    }], null, null); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=ng-zorro-antd-popconfirm.js.map

/***/ })

};;
//# sourceMappingURL=popconfirm-index-module~space-index-module~table-index-module.js.map