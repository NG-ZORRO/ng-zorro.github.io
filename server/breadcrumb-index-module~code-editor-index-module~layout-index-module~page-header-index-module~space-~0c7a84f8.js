exports.ids = ["breadcrumb-index-module~code-editor-index-module~layout-index-module~page-header-index-module~space-~0c7a84f8"];
exports.modules = {

/***/ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-breadcrumb.js":
/*!*******************************************************************!*\
  !*** ./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-breadcrumb.js ***!
  \*******************************************************************/
/*! exports provided: NzBreadCrumbComponent, NzBreadCrumbItemComponent, NzBreadCrumbModule, NzBreadCrumbSeparatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzBreadCrumbComponent", function() { return NzBreadCrumbComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzBreadCrumbItemComponent", function() { return NzBreadCrumbItemComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzBreadCrumbModule", function() { return NzBreadCrumbModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzBreadCrumbSeparatorComponent", function() { return NzBreadCrumbSeparatorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/dropdown */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-dropdown.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ng_zorro_antd_core_logger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/logger */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-logger.js");
/* harmony import */ var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/core/util */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-util.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/overlay.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/core/outlet */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-outlet.js");
/* harmony import */ var ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/core/overlay */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-overlay.js");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/icon */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-icon.js");














/**
 * @fileoverview added by tsickle
 * Generated from: breadcrumb.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */






function NzBreadCrumbComponent_ng_container_1_nz_breadcrumb_item_1_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-breadcrumb-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzBreadCrumbComponent_ng_container_1_nz_breadcrumb_item_1_Template_a_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43); const breadcrumb_r41 = ctx.$implicit; const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r42.navigate(breadcrumb_r41.url, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const breadcrumb_r41 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("href", breadcrumb_r41.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](breadcrumb_r41.label);
} }
function NzBreadCrumbComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzBreadCrumbComponent_ng_container_1_nz_breadcrumb_item_1_Template, 3, 2, "nz-breadcrumb-item", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r39.breadcrumbs);
} }
const _c0 = ["*"];
function NzBreadCrumbItemComponent_ng_container_0_ng_template_2_Template(rf, ctx) { }
function NzBreadCrumbItemComponent_ng_container_0_i_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 6);
} }
function NzBreadCrumbItemComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzBreadCrumbItemComponent_ng_container_0_ng_template_2_Template, 0, 0, "ng-template", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NzBreadCrumbItemComponent_ng_container_0_i_3_Template, 1, 0, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzDropdownMenu", ctx_r44.nzOverlay);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r44.nzOverlay);
} }
function NzBreadCrumbItemComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NzBreadCrumbItemComponent_span_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r50.nzBreadCrumbComponent.nzSeparator, " ");
} }
function NzBreadCrumbItemComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzBreadCrumbItemComponent_span_3_ng_container_1_Template, 2, 1, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r47.nzBreadCrumbComponent.nzSeparator);
} }
function BreadcrumbOption() { }
if (false) {}
class NzBreadCrumbComponent {
    /**
     * @param {?} injector
     * @param {?} ngZone
     * @param {?} cdr
     * @param {?} elementRef
     * @param {?} renderer
     */
    constructor(injector, ngZone, cdr, elementRef, renderer) {
        this.injector = injector;
        this.ngZone = ngZone;
        this.cdr = cdr;
        this.nzAutoGenerate = false;
        this.nzSeparator = '/';
        this.nzRouteLabel = 'breadcrumb';
        this.breadcrumbs = [];
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        renderer.addClass(elementRef.nativeElement, 'ant-breadcrumb');
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.nzAutoGenerate) {
            this.registerRouterChange();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    /**
     * @param {?} url
     * @param {?} e
     * @return {?}
     */
    navigate(url, e) {
        e.preventDefault();
        this.ngZone.run((/**
         * @return {?}
         */
        () => this.injector.get(_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]).navigateByUrl(url).then())).then();
    }
    /**
     * @private
     * @return {?}
     */
    registerRouterChange() {
        try {
            /** @type {?} */
            const router = this.injector.get(_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]);
            /** @type {?} */
            const activatedRoute = this.injector.get(_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]);
            router.events
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])((/**
             * @param {?} e
             * @return {?}
             */
            e => e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.destroy$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(true) // Trigger initial render.
            )
                .subscribe((/**
             * @return {?}
             */
            () => {
                this.breadcrumbs = this.getBreadcrumbs(activatedRoute.root);
                this.cdr.markForCheck();
            }));
        }
        catch (e) {
            throw new Error(`${ng_zorro_antd_core_logger__WEBPACK_IMPORTED_MODULE_4__["PREFIX"]} You should import RouterModule if you want to use 'NzAutoGenerate'.`);
        }
    }
    /**
     * @private
     * @param {?} route
     * @param {?=} url
     * @param {?=} breadcrumbs
     * @return {?}
     */
    getBreadcrumbs(route, url = '', breadcrumbs = []) {
        /** @type {?} */
        const children = route.children;
        // If there's no sub root, then stop the recurse and returns the generated breadcrumbs.
        if (children.length === 0) {
            return breadcrumbs;
        }
        for (const child of children) {
            if (child.outlet === _angular_router__WEBPACK_IMPORTED_MODULE_3__["PRIMARY_OUTLET"]) {
                // Only parse components in primary router-outlet (in another word, router-outlet without a specific name).
                // Parse this layer and generate a breadcrumb item.
                /** @type {?} */
                const routeURL = child.snapshot.url.map((/**
                 * @param {?} segment
                 * @return {?}
                 */
                segment => segment.path)).join('/');
                /** @type {?} */
                const nextUrl = url + `/${routeURL}`;
                /** @type {?} */
                const breadcrumbLabel = child.snapshot.data[this.nzRouteLabel];
                // If have data, go to generate a breadcrumb for it.
                if (routeURL && breadcrumbLabel) {
                    /** @type {?} */
                    const breadcrumb = {
                        label: breadcrumbLabel,
                        params: child.snapshot.params,
                        url: nextUrl
                    };
                    breadcrumbs.push(breadcrumb);
                }
                return this.getBreadcrumbs(child, nextUrl, breadcrumbs);
            }
        }
        return undefined;
    }
}
NzBreadCrumbComponent.ɵfac = function NzBreadCrumbComponent_Factory(t) { return new (t || NzBreadCrumbComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
NzBreadCrumbComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzBreadCrumbComponent, selectors: [["nz-breadcrumb"]], inputs: { nzAutoGenerate: "nzAutoGenerate", nzSeparator: "nzSeparator", nzRouteLabel: "nzRouteLabel" }, exportAs: ["nzBreadcrumb"], ngContentSelectors: _c0, decls: 2, vars: 1, consts: [[4, "ngIf"], [4, "ngFor", "ngForOf"], [3, "click"]], template: function NzBreadCrumbComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzBreadCrumbComponent_ng_container_1_Template, 2, 1, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nzAutoGenerate);
    } }, directives: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], NzBreadCrumbItemComponent]; }, encapsulation: 2, changeDetection: 0 });
/** @nocollapse */
NzBreadCrumbComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }
];
NzBreadCrumbComponent.propDecorators = {
    nzAutoGenerate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzSeparator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzRouteLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__metadata"])("design:type", Object)
], NzBreadCrumbComponent.prototype, "nzAutoGenerate", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzBreadCrumbComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                selector: 'nz-breadcrumb',
                exportAs: 'nzBreadcrumb',
                preserveWhitespaces: false,
                template: `
    <ng-content></ng-content>
    <ng-container *ngIf="nzAutoGenerate">
      <nz-breadcrumb-item *ngFor="let breadcrumb of breadcrumbs">
        <a [attr.href]="breadcrumb.url" (click)="navigate(breadcrumb.url, $event)">{{ breadcrumb.label }}</a>
      </nz-breadcrumb-item>
    </ng-container>
  `
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, { nzAutoGenerate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzSeparator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzRouteLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: breadcrumb-item.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzBreadCrumbItemComponent {
    /**
     * @param {?} nzBreadCrumbComponent
     */
    constructor(nzBreadCrumbComponent) {
        this.nzBreadCrumbComponent = nzBreadCrumbComponent;
    }
}
NzBreadCrumbItemComponent.ɵfac = function NzBreadCrumbItemComponent_Factory(t) { return new (t || NzBreadCrumbItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NzBreadCrumbComponent)); };
NzBreadCrumbItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzBreadCrumbItemComponent, selectors: [["nz-breadcrumb-item"]], inputs: { nzOverlay: "nzOverlay" }, exportAs: ["nzBreadcrumbItem"], ngContentSelectors: _c0, decls: 4, vars: 3, consts: [[4, "ngIf", "ngIfElse"], ["noMenuTpl", ""], ["class", "ant-breadcrumb-separator", 4, "ngIf"], ["nz-dropdown", "", 1, "ant-breadcrumb-overlay-link", 3, "nzDropdownMenu"], [3, "ngTemplateOutlet"], ["nz-icon", "", "nzType", "down", 4, "ngIf"], ["nz-icon", "", "nzType", "down"], [1, "ant-breadcrumb-link"], [1, "ant-breadcrumb-separator"], [4, "nzStringTemplateOutlet"]], template: function NzBreadCrumbItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzBreadCrumbItemComponent_ng_container_0_Template, 4, 3, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzBreadCrumbItemComponent_ng_template_1_Template, 2, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NzBreadCrumbItemComponent_span_3_Template, 2, 1, "span", 2);
    } if (rf & 2) {
        const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx.nzOverlay)("ngIfElse", _r45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nzBreadCrumbComponent.nzSeparator);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_1__["NzDropDownDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgTemplateOutlet"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_12__["NzIconDirective"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_10__["NzStringTemplateOutletDirective"]], encapsulation: 2, changeDetection: 0 });
/** @nocollapse */
NzBreadCrumbItemComponent.ctorParameters = () => [
    { type: NzBreadCrumbComponent }
];
NzBreadCrumbItemComponent.propDecorators = {
    nzOverlay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzBreadCrumbItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                selector: 'nz-breadcrumb-item',
                exportAs: 'nzBreadcrumbItem',
                preserveWhitespaces: false,
                template: `
    <ng-container *ngIf="!!nzOverlay; else noMenuTpl">
      <span class="ant-breadcrumb-overlay-link" nz-dropdown [nzDropdownMenu]="nzOverlay">
        <ng-template [ngTemplateOutlet]="noMenuTpl"></ng-template>
        <i *ngIf="!!nzOverlay" nz-icon nzType="down"></i>
      </span>
    </ng-container>

    <ng-template #noMenuTpl>
      <span class="ant-breadcrumb-link">
        <ng-content></ng-content>
      </span>
    </ng-template>

    <span class="ant-breadcrumb-separator" *ngIf="nzBreadCrumbComponent.nzSeparator">
      <ng-container *nzStringTemplateOutlet="nzBreadCrumbComponent.nzSeparator">
        {{ nzBreadCrumbComponent.nzSeparator }}
      </ng-container>
    </span>
  `
            }]
    }], function () { return [{ type: NzBreadCrumbComponent }]; }, { nzOverlay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: breadcrumb-separator.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzBreadCrumbSeparatorComponent {
}
NzBreadCrumbSeparatorComponent.ɵfac = function NzBreadCrumbSeparatorComponent_Factory(t) { return new (t || NzBreadCrumbSeparatorComponent)(); };
NzBreadCrumbSeparatorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzBreadCrumbSeparatorComponent, selectors: [["nz-breadcrumb-separator"]], exportAs: ["nzBreadcrumbSeparator"], ngContentSelectors: _c0, decls: 2, vars: 0, consts: [[1, "ant-breadcrumb-separator"]], template: function NzBreadCrumbSeparatorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzBreadCrumbSeparatorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-breadcrumb-separator',
                exportAs: 'nzBreadcrumbSeparator',
                template: `
    <span class="ant-breadcrumb-separator">
      <ng-content></ng-content>
    </span>
  `
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: breadcrumb.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzBreadCrumbModule {
}
NzBreadCrumbModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NzBreadCrumbModule });
NzBreadCrumbModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NzBreadCrumbModule_Factory(t) { return new (t || NzBreadCrumbModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_10__["NzOutletModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__["OverlayModule"], ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_11__["NzOverlayModule"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_1__["NzDropDownModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_12__["NzIconModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NzBreadCrumbModule, { declarations: function () { return [NzBreadCrumbComponent,
        NzBreadCrumbItemComponent,
        NzBreadCrumbSeparatorComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_10__["NzOutletModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__["OverlayModule"], ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_11__["NzOverlayModule"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_1__["NzDropDownModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_12__["NzIconModule"]]; }, exports: function () { return [NzBreadCrumbComponent,
        NzBreadCrumbItemComponent,
        NzBreadCrumbSeparatorComponent]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzBreadCrumbModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_10__["NzOutletModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__["OverlayModule"], ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_11__["NzOverlayModule"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_1__["NzDropDownModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_12__["NzIconModule"]],
                declarations: [NzBreadCrumbComponent, NzBreadCrumbItemComponent, NzBreadCrumbSeparatorComponent],
                exports: [NzBreadCrumbComponent, NzBreadCrumbItemComponent, NzBreadCrumbSeparatorComponent]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ng-zorro-antd-breadcrumb.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ng-zorro-antd-breadcrumb.js.map

/***/ })

};;
//# sourceMappingURL=breadcrumb-index-module~code-editor-index-module~layout-index-module~page-header-index-module~space-~0c7a84f8.js.map