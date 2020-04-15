exports.ids = ["back-top-index-module~code-editor-index-module~space-index-module"];
exports.modules = {

/***/ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-back-top.js":
/*!*****************************************************************!*\
  !*** ./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-back-top.js ***!
  \*****************************************************************/
/*! exports provided: NzBackTopComponent, NzBackTopModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzBackTopComponent", function() { return NzBackTopComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzBackTopModule", function() { return NzBackTopModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/platform.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ng_zorro_antd_core_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/animation */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-animation.js");
/* harmony import */ var ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/core/config */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-config.js");
/* harmony import */ var ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/core/services */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-services.js");
/* harmony import */ var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/core/util */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-util.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");











/**
 * @fileoverview added by tsickle
 * Generated from: back-top.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */






function NzBackTopComponent_div_0_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function NzBackTopComponent_div_0_ng_template_3_Template(rf, ctx) { }
function NzBackTopComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NzBackTopComponent_div_0_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r10.clickBackTop(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, NzBackTopComponent_div_0_ng_template_1_Template, 2, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, NzBackTopComponent_div_0_ng_template_3_Template, 0, 0, "ng-template", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](2);
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@fadeMotion", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", ctx_r6.nzTemplate || _r7);
} }
const NZ_CONFIG_COMPONENT_NAME = 'backTop';
class NzBackTopComponent {
    /**
     * @param {?} doc
     * @param {?} nzConfigService
     * @param {?} scrollSrv
     * @param {?} platform
     * @param {?} cd
     * @param {?} zone
     */
    constructor(doc, nzConfigService, scrollSrv, platform, cd, zone) {
        this.doc = doc;
        this.nzConfigService = nzConfigService;
        this.scrollSrv = scrollSrv;
        this.platform = platform;
        this.cd = cd;
        this.zone = zone;
        this.scrollListenerDestroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        this.target = null;
        this.visible = false;
        this.nzClick = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.registerScrollEvent();
    }
    /**
     * @return {?}
     */
    clickBackTop() {
        this.scrollSrv.scrollTo(this.getTarget(), 0);
        this.nzClick.emit(true);
    }
    /**
     * @private
     * @return {?}
     */
    getTarget() {
        return this.target || window;
    }
    /**
     * @private
     * @return {?}
     */
    handleScroll() {
        if (this.visible === this.scrollSrv.getScroll(this.getTarget()) > this.nzVisibilityHeight) {
            return;
        }
        this.visible = !this.visible;
        this.cd.detectChanges();
    }
    /**
     * @private
     * @return {?}
     */
    registerScrollEvent() {
        if (!this.platform.isBrowser) {
            return;
        }
        this.scrollListenerDestroy$.next();
        this.handleScroll();
        this.zone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["fromEvent"])(this.getTarget(), 'scroll')
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["throttleTime"])(50), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["takeUntil"])(this.scrollListenerDestroy$))
                .subscribe((/**
             * @return {?}
             */
            () => this.handleScroll()));
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.scrollListenerDestroy$.next();
        this.scrollListenerDestroy$.complete();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        const { nzTarget } = changes;
        if (nzTarget) {
            this.target = typeof this.nzTarget === 'string' ? this.doc.querySelector(this.nzTarget) : this.nzTarget;
            this.registerScrollEvent();
        }
    }
}
NzBackTopComponent.ɵfac = function NzBackTopComponent_Factory(t) { return new (t || NzBackTopComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_5__["NzConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_6__["NzScrollService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"])); };
NzBackTopComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: NzBackTopComponent, selectors: [["nz-back-top"]], inputs: { nzTemplate: "nzTemplate", nzVisibilityHeight: "nzVisibilityHeight", nzTarget: "nzTarget" }, outputs: { nzClick: "nzClick" }, exportAs: ["nzBackTop"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]], decls: 1, vars: 1, consts: [["class", "ant-back-top", 3, "click", 4, "ngIf"], [1, "ant-back-top", 3, "click"], ["defaultContent", ""], [3, "ngTemplateOutlet"], [1, "ant-back-top-content"], [1, "ant-back-top-icon"]], template: function NzBackTopComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, NzBackTopComponent_div_0_Template, 4, 2, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.visible);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"]], encapsulation: 2, data: { animation: [ng_zorro_antd_core_animation__WEBPACK_IMPORTED_MODULE_4__["fadeMotion"]] }, changeDetection: 0 });
/** @nocollapse */
NzBackTopComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"],] }] },
    { type: ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_5__["NzConfigService"] },
    { type: ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_6__["NzScrollService"] },
    { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__["Platform"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] }
];
NzBackTopComponent.propDecorators = {
    nzTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzVisibilityHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzTarget: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_5__["WithConfig"])(NZ_CONFIG_COMPONENT_NAME, 400), Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_7__["InputNumber"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], NzBackTopComponent.prototype, "nzVisibilityHeight", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](NzBackTopComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                selector: 'nz-back-top',
                exportAs: 'nzBackTop',
                animations: [ng_zorro_antd_core_animation__WEBPACK_IMPORTED_MODULE_4__["fadeMotion"]],
                template: `
    <div class="ant-back-top" (click)="clickBackTop()" @fadeMotion *ngIf="visible">
      <ng-template #defaultContent>
        <div class="ant-back-top-content">
          <div class="ant-back-top-icon"></div>
        </div>
      </ng-template>
      <ng-template [ngTemplateOutlet]="nzTemplate || defaultContent"></ng-template>
    </div>
  `,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
                preserveWhitespaces: false
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
            }] }, { type: ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_5__["NzConfigService"] }, { type: ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_6__["NzScrollService"] }, { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__["Platform"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] }]; }, { nzClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }], nzTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzVisibilityHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzTarget: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: back-top.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzBackTopModule {
}
NzBackTopModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: NzBackTopModule });
NzBackTopModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function NzBackTopModule_Factory(t) { return new (t || NzBackTopModule)(); }, providers: [ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_6__["SCROLL_SERVICE_PROVIDER"]], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__["PlatformModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](NzBackTopModule, { declarations: function () { return [NzBackTopComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__["PlatformModule"]]; }, exports: function () { return [NzBackTopComponent]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](NzBackTopModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
                declarations: [NzBackTopComponent],
                exports: [NzBackTopComponent],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__["PlatformModule"]],
                providers: [ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_6__["SCROLL_SERVICE_PROVIDER"]]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ng-zorro-antd-back-top.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ng-zorro-antd-back-top.js.map

/***/ })

};;
//# sourceMappingURL=back-top-index-module~code-editor-index-module~space-index-module.js.map