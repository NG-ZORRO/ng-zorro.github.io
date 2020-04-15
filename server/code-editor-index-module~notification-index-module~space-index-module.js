exports.ids = ["code-editor-index-module~notification-index-module~space-index-module"];
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

/***/ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-notification.js":
/*!*********************************************************************!*\
  !*** ./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-notification.js ***!
  \*********************************************************************/
/*! exports provided: NzNotificationComponent, NzNotificationContainerComponent, NzNotificationModule, NzNotificationService, NzNotificationServiceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzNotificationComponent", function() { return NzNotificationComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzNotificationContainerComponent", function() { return NzNotificationContainerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzNotificationModule", function() { return NzNotificationModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzNotificationService", function() { return NzNotificationService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzNotificationServiceModule", function() { return NzNotificationServiceModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ng_zorro_antd_core_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/core/animation */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-animation.js");
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/message */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-message.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/overlay.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/core/outlet */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-outlet.js");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/icon */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-icon.js");
/* harmony import */ var ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/core/config */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-config.js");
/* harmony import */ var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/core/util */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-util.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/core/services */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-services.js");













/**
 * @fileoverview added by tsickle
 * Generated from: notification.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */








function NzNotificationComponent_div_1_i_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 16);
} }
function NzNotificationComponent_div_1_i_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 17);
} }
function NzNotificationComponent_div_1_i_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 18);
} }
function NzNotificationComponent_div_1_i_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 19);
} }
const _c0 = function (a0) { return { "ant-notification-notice-with-icon": a0 }; };
function NzNotificationComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](3, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NzNotificationComponent_div_1_i_4_Template, 1, 0, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NzNotificationComponent_div_1_i_5_Template, 1, 0, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NzNotificationComponent_div_1_i_6_Template, 1, 0, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, NzNotificationComponent_div_1_i_7_Template, 1, 0, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r124 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, ctx_r124.instance.type !== "blank"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-notification-notice-with-icon", ctx_r124.instance.type !== "blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx_r124.instance.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "success");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "info");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "warning");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r124.instance.title, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r124.instance.content, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function NzNotificationComponent_ng_template_2_Template(rf, ctx) { }
function NzNotificationComponent_ng_container_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r133 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", ctx_r133.instance.options == null ? null : ctx_r133.instance.options.nzCloseIcon);
} }
function NzNotificationComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzNotificationComponent_ng_container_5_ng_container_1_Template, 2, 1, "ng-container", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r126.instance.options == null ? null : ctx_r126.instance.options.nzCloseIcon);
} }
function NzNotificationComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 22);
} }
const _c1 = function (a0, a1) { return { $implicit: a0, data: a1 }; };
function NzNotificationContainerComponent_nz_notification_1_Template(rf, ctx) { if (rf & 1) {
    const _r140 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-notification", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("destroyed", function NzNotificationContainerComponent_nz_notification_1_Template_nz_notification_destroyed_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r140); const ctx_r139 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r139.remove($event.id, $event.userAction); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const instance_r138 = ctx.$implicit;
    const ctx_r134 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("instance", instance_r138)("placement", ctx_r134.config.nzPlacement);
} }
function NzNotificationContainerComponent_nz_notification_3_Template(rf, ctx) { if (rf & 1) {
    const _r143 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-notification", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("destroyed", function NzNotificationContainerComponent_nz_notification_3_Template_nz_notification_destroyed_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r143); const ctx_r142 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r142.remove($event.id, $event.userAction); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const instance_r141 = ctx.$implicit;
    const ctx_r135 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("instance", instance_r141)("placement", ctx_r135.config.nzPlacement);
} }
function NzNotificationContainerComponent_nz_notification_5_Template(rf, ctx) { if (rf & 1) {
    const _r146 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-notification", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("destroyed", function NzNotificationContainerComponent_nz_notification_5_Template_nz_notification_destroyed_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r146); const ctx_r145 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r145.remove($event.id, $event.userAction); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const instance_r144 = ctx.$implicit;
    const ctx_r136 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("instance", instance_r144)("placement", ctx_r136.config.nzPlacement);
} }
function NzNotificationContainerComponent_nz_notification_7_Template(rf, ctx) { if (rf & 1) {
    const _r149 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-notification", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("destroyed", function NzNotificationContainerComponent_nz_notification_7_Template_nz_notification_destroyed_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r149); const ctx_r148 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r148.remove($event.id, $event.userAction); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const instance_r147 = ctx.$implicit;
    const ctx_r137 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("instance", instance_r147)("placement", ctx_r137.config.nzPlacement);
} }
class NzNotificationComponent extends ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_2__["NzMNComponent"] {
    /**
     * @param {?} cdr
     */
    constructor(cdr) {
        super(cdr);
        this.destroyed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        super.ngOnDestroy();
        this.instance.onClick.complete();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onClick(event) {
        this.instance.onClick.next(event);
    }
    /**
     * @return {?}
     */
    close() {
        this.destroy(true);
    }
    /**
     * @return {?}
     */
    get state() {
        if (this.instance.state === 'enter') {
            if (this.placement === 'topLeft' || this.placement === 'bottomLeft') {
                return 'enterLeft';
            }
            else {
                return 'enterRight';
            }
        }
        else {
            return this.instance.state;
        }
    }
}
NzNotificationComponent.ɵfac = function NzNotificationComponent_Factory(t) { return new (t || NzNotificationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
NzNotificationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzNotificationComponent, selectors: [["nz-notification"]], inputs: { instance: "instance", placement: "placement", index: "index" }, outputs: { destroyed: "destroyed" }, exportAs: ["nzNotification"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 8, vars: 12, consts: [[1, "ant-notification-notice", "ant-notification-notice-closable", 3, "ngStyle", "ngClass", "click", "mouseenter", "mouseleave"], ["class", "ant-notification-notice-content", 4, "ngIf"], [3, "ngIf", "ngTemplateOutlet", "ngTemplateOutletContext"], ["tabindex", "0", 1, "ant-notification-notice-close", 3, "click"], [1, "ant-notification-notice-close-x"], [4, "ngIf", "ngIfElse"], ["iconTpl", ""], [1, "ant-notification-notice-content"], [1, "ant-notification-notice-content", 3, "ngClass"], [3, "ngSwitch"], ["nz-icon", "", "nzType", "check-circle", "class", "ant-notification-notice-icon ant-notification-notice-icon-success", 4, "ngSwitchCase"], ["nz-icon", "", "nzType", "info-circle", "class", "ant-notification-notice-icon ant-notification-notice-icon-info", 4, "ngSwitchCase"], ["nz-icon", "", "nzType", "exclamation-circle", "class", "ant-notification-notice-icon ant-notification-notice-icon-warning", 4, "ngSwitchCase"], ["nz-icon", "", "nzType", "close-circle", "class", "ant-notification-notice-icon ant-notification-notice-icon-error", 4, "ngSwitchCase"], [1, "ant-notification-notice-message", 3, "innerHTML"], [1, "ant-notification-notice-description", 3, "innerHTML"], ["nz-icon", "", "nzType", "check-circle", 1, "ant-notification-notice-icon", "ant-notification-notice-icon-success"], ["nz-icon", "", "nzType", "info-circle", 1, "ant-notification-notice-icon", "ant-notification-notice-icon-info"], ["nz-icon", "", "nzType", "exclamation-circle", 1, "ant-notification-notice-icon", "ant-notification-notice-icon-warning"], ["nz-icon", "", "nzType", "close-circle", 1, "ant-notification-notice-icon", "ant-notification-notice-icon-error"], [4, "nzStringTemplateOutlet"], ["nz-icon", "", 3, "nzType"], ["nz-icon", "", "nzType", "close", 1, "ant-notification-close-icon"]], template: function NzNotificationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzNotificationComponent_Template_div_click_0_listener($event) { return ctx.onClick($event); })("mouseenter", function NzNotificationComponent_Template_div_mouseenter_0_listener() { return ctx.onEnter(); })("mouseleave", function NzNotificationComponent_Template_div_mouseleave_0_listener() { return ctx.onLeave(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzNotificationComponent_div_1_Template, 10, 12, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzNotificationComponent_ng_template_2_Template, 0, 0, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzNotificationComponent_Template_a_click_3_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NzNotificationComponent_ng_container_5_Template, 2, 1, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NzNotificationComponent_ng_template_6_Template, 1, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r127 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.instance.options == null ? null : ctx.instance.options.nzStyle)("ngClass", ctx.instance.options == null ? null : ctx.instance.options.nzClass)("@notificationMotion", ctx.state);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.instance.template);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.instance.template)("ngTemplateOutlet", ctx.instance.template)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](9, _c1, ctx, ctx.instance.options == null ? null : ctx.instance.options.nzData));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.instance.options == null ? null : ctx.instance.options.nzCloseIcon)("ngIfElse", _r127);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgSwitchCase"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__["NzIconDirective"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_5__["NzStringTemplateOutletDirective"]], encapsulation: 2, data: { animation: [ng_zorro_antd_core_animation__WEBPACK_IMPORTED_MODULE_1__["notificationMotion"]] } });
/** @nocollapse */
NzNotificationComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
];
NzNotificationComponent.propDecorators = {
    instance: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    placement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    index: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    destroyed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzNotificationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                selector: 'nz-notification',
                exportAs: 'nzNotification',
                preserveWhitespaces: false,
                animations: [ng_zorro_antd_core_animation__WEBPACK_IMPORTED_MODULE_1__["notificationMotion"]],
                template: `
    <div
      class="ant-notification-notice ant-notification-notice-closable"
      [ngStyle]="instance.options?.nzStyle"
      [ngClass]="instance.options?.nzClass"
      [@notificationMotion]="state"
      (click)="onClick($event)"
      (mouseenter)="onEnter()"
      (mouseleave)="onLeave()"
    >
      <div *ngIf="!instance.template" class="ant-notification-notice-content">
        <div class="ant-notification-notice-content" [ngClass]="{ 'ant-notification-notice-with-icon': instance.type !== 'blank' }">
          <div [class.ant-notification-notice-with-icon]="instance.type !== 'blank'">
            <ng-container [ngSwitch]="instance.type">
              <i
                *ngSwitchCase="'success'"
                nz-icon
                nzType="check-circle"
                class="ant-notification-notice-icon ant-notification-notice-icon-success"
              ></i>
              <i
                *ngSwitchCase="'info'"
                nz-icon
                nzType="info-circle"
                class="ant-notification-notice-icon ant-notification-notice-icon-info"
              ></i>
              <i
                *ngSwitchCase="'warning'"
                nz-icon
                nzType="exclamation-circle"
                class="ant-notification-notice-icon ant-notification-notice-icon-warning"
              ></i>
              <i
                *ngSwitchCase="'error'"
                nz-icon
                nzType="close-circle"
                class="ant-notification-notice-icon ant-notification-notice-icon-error"
              ></i>
            </ng-container>
            <div class="ant-notification-notice-message" [innerHTML]="instance.title"></div>
            <div class="ant-notification-notice-description" [innerHTML]="instance.content"></div>
          </div>
        </div>
      </div>
      <ng-template
        [ngIf]="instance.template"
        [ngTemplateOutlet]="instance.template"
        [ngTemplateOutletContext]="{ $implicit: this, data: instance.options?.nzData }"
      >
      </ng-template>
      <a tabindex="0" class="ant-notification-notice-close" (click)="close()">
        <span class="ant-notification-notice-close-x">
          <ng-container *ngIf="instance.options?.nzCloseIcon; else iconTpl">
            <ng-container *nzStringTemplateOutlet="instance.options?.nzCloseIcon">
              <i nz-icon [nzType]="instance.options?.nzCloseIcon"></i>
            </ng-container>
          </ng-container>
          <ng-template #iconTpl>
            <i nz-icon nzType="close" class="ant-notification-close-icon"></i>
          </ng-template>
        </span>
      </a>
    </div>
  `
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { destroyed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], instance: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], placement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], index: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: notification-container.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const NZ_CONFIG_COMPONENT_NAME = 'notification';
/** @type {?} */
const NZ_NOTIFICATION_DEFAULT_CONFIG = {
    nzTop: '24px',
    nzBottom: '24px',
    nzPlacement: 'topRight',
    nzDuration: 4500,
    nzMaxStack: 7,
    nzPauseOnHover: true,
    nzAnimate: true
};
class NzNotificationContainerComponent extends ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_2__["NzMNContainerComponent"] {
    /**
     * @param {?} cdr
     * @param {?} nzConfigService
     */
    constructor(cdr, nzConfigService) {
        super(cdr, nzConfigService);
        this.instances = [];
        this.topLeftInstances = [];
        this.topRightInstances = [];
        this.bottomLeftInstances = [];
        this.bottomRightInstances = [];
    }
    /**
     * @param {?} notification
     * @return {?}
     */
    create(notification) {
        /** @type {?} */
        const noti = this.onCreate(notification);
        /** @type {?} */
        const key = noti.options.nzKey;
        /** @type {?} */
        const notificationWithSameKey = this.instances.find((/**
         * @param {?} msg
         * @return {?}
         */
        msg => msg.options.nzKey === ((/** @type {?} */ (notification.options))).nzKey));
        if (key && notificationWithSameKey) {
            this.replaceNotification(notificationWithSameKey, noti);
        }
        else {
            if (this.instances.length >= this.config.nzMaxStack) {
                this.instances = this.instances.slice(1);
            }
            this.instances = [...this.instances, noti];
        }
        this.readyInstances();
        return noti;
    }
    /**
     * @protected
     * @param {?} instance
     * @return {?}
     */
    onCreate(instance) {
        instance.options = this.mergeOptions(instance.options);
        instance.onClose = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
        instance.onClick = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
        return (/** @type {?} */ (instance));
    }
    /**
     * @protected
     * @return {?}
     */
    subscribeConfigChange() {
        this.nzConfigService
            .getConfigChangeEventForComponent(NZ_CONFIG_COMPONENT_NAME)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this.destroy$))
            .subscribe((/**
         * @return {?}
         */
        () => this.updateConfig()));
    }
    /**
     * @protected
     * @return {?}
     */
    updateConfig() {
        this.config = Object.assign(Object.assign(Object.assign({}, NZ_NOTIFICATION_DEFAULT_CONFIG), this.config), this.nzConfigService.getConfigForComponent(NZ_CONFIG_COMPONENT_NAME));
        this.top = Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_8__["toCssPixel"])((/** @type {?} */ (this.config.nzTop)));
        this.bottom = Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_8__["toCssPixel"])((/** @type {?} */ (this.config.nzBottom)));
        this.cdr.markForCheck();
    }
    /**
     * @private
     * @param {?} old
     * @param {?} _new
     * @return {?}
     */
    replaceNotification(old, _new) {
        old.title = _new.title;
        old.content = _new.content;
        old.template = _new.template;
        old.type = _new.type;
    }
    /**
     * @protected
     * @return {?}
     */
    readyInstances() {
        this.topLeftInstances = this.instances.filter((/**
         * @param {?} m
         * @return {?}
         */
        m => m.options.nzPosition === 'topLeft'));
        this.topRightInstances = this.instances.filter((/**
         * @param {?} m
         * @return {?}
         */
        m => m.options.nzPosition === 'topRight' || !m.options.nzPosition));
        this.bottomLeftInstances = this.instances.filter((/**
         * @param {?} m
         * @return {?}
         */
        m => m.options.nzPosition === 'bottomLeft'));
        this.bottomRightInstances = this.instances.filter((/**
         * @param {?} m
         * @return {?}
         */
        m => m.options.nzPosition === 'bottomRight'));
        this.cdr.detectChanges();
    }
}
NzNotificationContainerComponent.ɵfac = function NzNotificationContainerComponent_Factory(t) { return new (t || NzNotificationContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_7__["NzConfigService"])); };
NzNotificationContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzNotificationContainerComponent, selectors: [["nz-notification-container"]], exportAs: ["nzNotificationContainer"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 8, vars: 20, consts: [[1, "ant-notification", "ant-notification-topLeft"], [3, "instance", "placement", "destroyed", 4, "ngFor", "ngForOf"], [1, "ant-notification", "ant-notification-topRight"], [1, "ant-notification", "ant-notification-bottomLeft"], [1, "ant-notification", "ant-notification-bottomRight"], [3, "instance", "placement", "destroyed"]], template: function NzNotificationContainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzNotificationContainerComponent_nz_notification_1_Template, 1, 2, "nz-notification", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NzNotificationContainerComponent_nz_notification_3_Template, 1, 2, "nz-notification", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NzNotificationContainerComponent_nz_notification_5_Template, 1, 2, "nz-notification", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, NzNotificationContainerComponent_nz_notification_7_Template, 1, 2, "nz-notification", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("top", ctx.top)("left", "0px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.topLeftInstances);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("top", ctx.top)("right", "0px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.topRightInstances);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("bottom", ctx.bottom)("left", "0px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.bottomLeftInstances);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("bottom", ctx.bottom)("right", "0px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.bottomRightInstances);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], NzNotificationComponent], encapsulation: 2, changeDetection: 0 });
/** @nocollapse */
NzNotificationContainerComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
    { type: ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_7__["NzConfigService"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzNotificationContainerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                selector: 'nz-notification-container',
                exportAs: 'nzNotificationContainer',
                preserveWhitespaces: false,
                template: `
    <div class="ant-notification ant-notification-topLeft" [style.top]="top" [style.left]="'0px'">
      <nz-notification
        *ngFor="let instance of topLeftInstances"
        [instance]="instance"
        [placement]="config.nzPlacement"
        (destroyed)="remove($event.id, $event.userAction)"
      ></nz-notification>
    </div>
    <div class="ant-notification ant-notification-topRight" [style.top]="top" [style.right]="'0px'">
      <nz-notification
        *ngFor="let instance of topRightInstances"
        [instance]="instance"
        [placement]="config.nzPlacement"
        (destroyed)="remove($event.id, $event.userAction)"
      ></nz-notification>
    </div>
    <div class="ant-notification ant-notification-bottomLeft" [style.bottom]="bottom" [style.left]="'0px'">
      <nz-notification
        *ngFor="let instance of bottomLeftInstances"
        [instance]="instance"
        [placement]="config.nzPlacement"
        (destroyed)="remove($event.id, $event.userAction)"
      ></nz-notification>
    </div>
    <div class="ant-notification ant-notification-bottomRight" [style.bottom]="bottom" [style.right]="'0px'">
      <nz-notification
        *ngFor="let instance of bottomRightInstances"
        [instance]="instance"
        [placement]="config.nzPlacement"
        (destroyed)="remove($event.id, $event.userAction)"
      ></nz-notification>
    </div>
  `
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_7__["NzConfigService"] }]; }, null); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: notification.service.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzNotificationServiceModule {
}
NzNotificationServiceModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NzNotificationServiceModule });
NzNotificationServiceModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NzNotificationServiceModule_Factory(t) { return new (t || NzNotificationServiceModule)(); } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzNotificationServiceModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: notification.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzNotificationModule {
}
NzNotificationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NzNotificationModule });
NzNotificationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NzNotificationModule_Factory(t) { return new (t || NzNotificationModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["OverlayModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__["NzIconModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_5__["NzOutletModule"], NzNotificationServiceModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NzNotificationModule, { declarations: function () { return [NzNotificationComponent,
        NzNotificationContainerComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["OverlayModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__["NzIconModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_5__["NzOutletModule"],
        NzNotificationServiceModule]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzNotificationModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["OverlayModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__["NzIconModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_5__["NzOutletModule"], NzNotificationServiceModule],
                declarations: [NzNotificationComponent, NzNotificationContainerComponent]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: typings.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
/**
 * @record
 * @template T
 */
function NzNotificationDataOptions() { }
if (false) {}
/**
 * @record
 */
function NzNotificationData() { }
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: notification.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
let notificationId = 0;
class NzNotificationService extends ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_2__["NzMNService"] {
    /**
     * @param {?} nzSingletonService
     * @param {?} overlay
     * @param {?} injector
     */
    constructor(nzSingletonService, overlay, injector) {
        super(nzSingletonService, overlay, injector);
        this.componentPrefix = 'notification-';
    }
    /**
     * @param {?} title
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    success(title, content, options) {
        return this.createInstance({ type: 'success', title, content }, options);
    }
    /**
     * @param {?} title
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    error(title, content, options) {
        return this.createInstance({ type: 'error', title, content }, options);
    }
    /**
     * @param {?} title
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    info(title, content, options) {
        return this.createInstance({ type: 'info', title, content }, options);
    }
    /**
     * @param {?} title
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    warning(title, content, options) {
        return this.createInstance({ type: 'warning', title, content }, options);
    }
    /**
     * @param {?} title
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    blank(title, content, options) {
        return this.createInstance({ type: 'blank', title, content }, options);
    }
    /**
     * @param {?} type
     * @param {?} title
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    create(type, title, content, options) {
        return this.createInstance({ type, title, content }, options);
    }
    /**
     * @param {?} template
     * @param {?=} options
     * @return {?}
     */
    template(template, options) {
        return this.createInstance({ template }, options);
    }
    /**
     * @protected
     * @return {?}
     */
    generateMessageId() {
        return `${this.componentPrefix}-${notificationId++}`;
    }
    /**
     * @private
     * @param {?} message
     * @param {?=} options
     * @return {?}
     */
    createInstance(message, options) {
        this.container = this.withContainer(NzNotificationContainerComponent);
        return this.container.create(Object.assign(Object.assign({}, message), {
            createdAt: new Date(),
            messageId: this.generateMessageId(),
            options
        }));
    }
}
NzNotificationService.ɵfac = function NzNotificationService_Factory(t) { return new (t || NzNotificationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_11__["NzSingletonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["Overlay"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"])); };
/** @nocollapse */
NzNotificationService.ctorParameters = () => [
    { type: ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_11__["NzSingletonService"] },
    { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["Overlay"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }
];
/** @nocollapse */ NzNotificationService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function NzNotificationService_Factory() { return new NzNotificationService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_11__["NzSingletonService"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["Overlay"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["INJECTOR"])); }, token: NzNotificationService, providedIn: NzNotificationServiceModule });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzNotificationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: NzNotificationServiceModule
            }]
    }], function () { return [{ type: ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_11__["NzSingletonService"] }, { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["Overlay"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }]; }, null); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ng-zorro-antd-notification.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ng-zorro-antd-notification.js.map

/***/ })

};;
//# sourceMappingURL=code-editor-index-module~notification-index-module~space-index-module.js.map