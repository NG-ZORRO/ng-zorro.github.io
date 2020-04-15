exports.ids = ["code-editor-index-module~drawer-index-module~notification-index-module~page-header-index-module~spac~c18835ab"];
exports.modules = {

/***/ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-tag.js":
/*!************************************************************!*\
  !*** ./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-tag.js ***!
  \************************************************************/
/*! exports provided: NzTagComponent, NzTagModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzTagComponent", function() { return NzTagComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzTagModule", function() { return NzTagModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ng_zorro_antd_core_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/core/animation */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-animation.js");
/* harmony import */ var ng_zorro_antd_core_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/core/logger */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-logger.js");
/* harmony import */ var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/util */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-util.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/icon */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-icon.js");









/**
 * @fileoverview added by tsickle
 * Generated from: tag.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */




function NzTagComponent_i_1_Template(rf, ctx) { if (rf & 1) {
    const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "i", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NzTagComponent_i_1_Template_i_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r60); const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r59.closeTag($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c0 = ["*"];
class NzTagComponent {
    /**
     * @param {?} renderer
     * @param {?} elementRef
     */
    constructor(renderer, elementRef) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.presetColor = false;
        this.hostClassMap = {};
        this.nzMode = 'default';
        this.nzChecked = false;
        this.nzNoAnimation = false;
        this.nzAfterClose = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.nzOnClose = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.nzCheckedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    /**
     * @private
     * @param {?=} color
     * @return {?}
     */
    isPresetColor(color) {
        if (!color) {
            return false;
        }
        return (/^(pink|red|yellow|orange|cyan|green|blue|purple|geekblue|magenta|volcano|gold|lime)(-inverse)?$/.test(color) ||
            /^(success|processing|error|default|warning)$/.test(color));
    }
    /**
     * @private
     * @return {?}
     */
    updateClassMap() {
        this.presetColor = this.isPresetColor(this.nzColor);
        this.hostClassMap = {
            ['ant-tag']: true,
            ['ant-tag-has-color']: this.nzColor && !this.presetColor,
            ['ant-tag-checkable']: this.nzMode === 'checkable',
            ['ant-tag-checkable-checked']: this.nzChecked,
            [`ant-tag-${this.nzColor}`]: this.presetColor
        };
    }
    /**
     * @return {?}
     */
    updateCheckedStatus() {
        if (this.nzMode === 'checkable') {
            this.nzChecked = !this.nzChecked;
            this.nzCheckedChange.emit(this.nzChecked);
            this.updateClassMap();
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    closeTag(e) {
        this.nzOnClose.emit(e);
        if (!e.defaultPrevented) {
            this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement), this.elementRef.nativeElement);
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    afterAnimation(e) {
        if (e.toState === 'void') {
            this.nzAfterClose.emit();
            if (this.nzAfterClose.observers.length) {
                Object(ng_zorro_antd_core_logger__WEBPACK_IMPORTED_MODULE_3__["warnDeprecation"])(`'(nzAfterClose)' Output is going to be removed in 9.0.0. Please use '(nzOnClose)' instead.`);
            }
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.updateClassMap();
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.updateClassMap();
    }
}
NzTagComponent.ɵfac = function NzTagComponent_Factory(t) { return new (t || NzTagComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])); };
NzTagComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NzTagComponent, selectors: [["nz-tag"]], hostVars: 6, hostBindings: function NzTagComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcomponentHostSyntheticListener"]("@fadeMotion.done", function NzTagComponent_animation_fadeMotion_done_HostBindingHandler($event) { return ctx.afterAnimation($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NzTagComponent_click_HostBindingHandler() { return ctx.updateCheckedStatus(); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵupdateSyntheticHostBinding"]("@fadeMotion", undefined)("@.disabled", ctx.nzNoAnimation);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.hostClassMap);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background-color", ctx.presetColor ? null : ctx.nzColor);
    } }, inputs: { nzMode: "nzMode", nzChecked: "nzChecked", nzNoAnimation: "nzNoAnimation", nzColor: "nzColor" }, outputs: { nzAfterClose: "nzAfterClose", nzOnClose: "nzOnClose", nzCheckedChange: "nzCheckedChange" }, exportAs: ["nzTag"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c0, decls: 2, vars: 1, consts: [["nz-icon", "", "nzType", "close", "tabindex", "-1", 3, "click", 4, "ngIf"], ["nz-icon", "", "nzType", "close", "tabindex", "-1", 3, "click"]], template: function NzTagComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NzTagComponent_i_1_Template, 1, 0, "i", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.nzMode === "closeable");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__["NzIconDirective"]], encapsulation: 2, data: { animation: [ng_zorro_antd_core_animation__WEBPACK_IMPORTED_MODULE_2__["fadeMotion"]] }, changeDetection: 0 });
/** @nocollapse */
NzTagComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
NzTagComponent.propDecorators = {
    nzMode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    nzColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    nzChecked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    nzNoAnimation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    nzAfterClose: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    nzOnClose: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    nzCheckedChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], NzTagComponent.prototype, "nzChecked", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], NzTagComponent.prototype, "nzNoAnimation", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NzTagComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'nz-tag',
                exportAs: 'nzTag',
                preserveWhitespaces: false,
                animations: [ng_zorro_antd_core_animation__WEBPACK_IMPORTED_MODULE_2__["fadeMotion"]],
                template: `
    <ng-content></ng-content>
    <i nz-icon nzType="close" *ngIf="nzMode === 'closeable'" tabindex="-1" (click)="closeTag($event)"></i>
  `,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                host: {
                    '[@fadeMotion]': '',
                    '[@.disabled]': 'nzNoAnimation',
                    '[style.background-color]': 'presetColor? null : nzColor',
                    '[class]': 'hostClassMap',
                    '(click)': 'updateCheckedStatus()',
                    '(@fadeMotion.done)': 'afterAnimation($event)'
                }
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }]; }, { nzMode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], nzChecked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], nzNoAnimation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], nzAfterClose: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], nzOnClose: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], nzCheckedChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], nzColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: tag.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzTagModule {
}
NzTagModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: NzTagModule });
NzTagModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function NzTagModule_Factory(t) { return new (t || NzTagModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__["NzIconModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NzTagModule, { declarations: function () { return [NzTagComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__["NzIconModule"]]; }, exports: function () { return [NzTagComponent]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NzTagModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__["NzIconModule"]],
                declarations: [NzTagComponent],
                exports: [NzTagComponent]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ng-zorro-antd-tag.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ng-zorro-antd-tag.js.map

/***/ })

};;
//# sourceMappingURL=code-editor-index-module~drawer-index-module~notification-index-module~page-header-index-module~spac~c18835ab.js.map