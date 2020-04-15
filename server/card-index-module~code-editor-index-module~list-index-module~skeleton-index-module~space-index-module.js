exports.ids = ["card-index-module~code-editor-index-module~list-index-module~skeleton-index-module~space-index-module"];
exports.modules = {

/***/ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-skeleton.js":
/*!*****************************************************************!*\
  !*** ./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-skeleton.js ***!
  \*****************************************************************/
/*! exports provided: NzSkeletonComponent, NzSkeletonElementAvatarComponent, NzSkeletonElementButtonComponent, NzSkeletonElementDirective, NzSkeletonElementInputComponent, NzSkeletonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzSkeletonComponent", function() { return NzSkeletonComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzSkeletonElementAvatarComponent", function() { return NzSkeletonElementAvatarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzSkeletonElementButtonComponent", function() { return NzSkeletonElementButtonComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzSkeletonElementDirective", function() { return NzSkeletonElementDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzSkeletonElementInputComponent", function() { return NzSkeletonElementInputComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzSkeletonModule", function() { return NzSkeletonModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/core/util */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-util.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




/**
 * @fileoverview added by tsickle
 * Generated from: skeleton.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



function NzSkeletonComponent_ng_container_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "nz-skeleton-element", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSize", ctx_r11.avatar.size)("nzShape", ctx_r11.avatar.shape);
} }
function NzSkeletonComponent_ng_container_0_h3_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "h3", 7);
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx_r12.toCSSUnit(ctx_r12.title.width));
} }
function NzSkeletonComponent_ng_container_0_ul_4_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "li");
} if (rf & 2) {
    const i_r16 = ctx.index;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx_r14.toCSSUnit(ctx_r14.widthList[i_r16]));
} }
function NzSkeletonComponent_ng_container_0_ul_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzSkeletonComponent_ng_container_0_ul_4_li_1_Template, 1, 2, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r13.rowsList);
} }
function NzSkeletonComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzSkeletonComponent_ng_container_0_div_1_Template, 2, 2, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NzSkeletonComponent_ng_container_0_h3_3_Template, 1, 2, "h3", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NzSkeletonComponent_ng_container_0_ul_4_Template, 2, 1, "ul", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r9.nzAvatar);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r9.nzTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r9.nzParagraph);
} }
function NzSkeletonComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
const _c0 = ["*"];
const _c1 = ["nzType", "button"];
const _c2 = ["nzType", "avatar"];
const _c3 = ["nzType", "input"];
class NzSkeletonComponent {
    /**
     * @param {?} cdr
     * @param {?} renderer
     * @param {?} elementRef
     */
    constructor(cdr, renderer, elementRef) {
        this.cdr = cdr;
        this.nzActive = false;
        this.nzLoading = true;
        this.nzTitle = true;
        this.nzAvatar = false;
        this.nzParagraph = true;
        this.rowsList = [];
        this.widthList = [];
        renderer.addClass(elementRef.nativeElement, 'ant-skeleton');
    }
    /**
     * @param {?=} value
     * @return {?}
     */
    toCSSUnit(value = '') {
        return Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_1__["toCssPixel"])(value);
    }
    /**
     * @private
     * @return {?}
     */
    getTitleProps() {
        /** @type {?} */
        const hasAvatar = !!this.nzAvatar;
        /** @type {?} */
        const hasParagraph = !!this.nzParagraph;
        /** @type {?} */
        let width = '';
        if (!hasAvatar && hasParagraph) {
            width = '38%';
        }
        else if (hasAvatar && hasParagraph) {
            width = '50%';
        }
        return Object.assign({ width }, this.getProps(this.nzTitle));
    }
    /**
     * @private
     * @return {?}
     */
    getAvatarProps() {
        /** @type {?} */
        const shape = !!this.nzTitle && !this.nzParagraph ? 'square' : 'circle';
        /** @type {?} */
        const size = 'large';
        return Object.assign({ shape, size }, this.getProps(this.nzAvatar));
    }
    /**
     * @private
     * @return {?}
     */
    getParagraphProps() {
        /** @type {?} */
        const hasAvatar = !!this.nzAvatar;
        /** @type {?} */
        const hasTitle = !!this.nzTitle;
        /** @type {?} */
        const basicProps = {};
        // Width
        if (!hasAvatar || !hasTitle) {
            basicProps.width = '61%';
        }
        // Rows
        if (!hasAvatar && hasTitle) {
            basicProps.rows = 3;
        }
        else {
            basicProps.rows = 2;
        }
        return Object.assign(Object.assign({}, basicProps), this.getProps(this.nzParagraph));
    }
    /**
     * @private
     * @template T
     * @param {?} prop
     * @return {?}
     */
    getProps(prop) {
        return prop && typeof prop === 'object' ? prop : {};
    }
    /**
     * @private
     * @return {?}
     */
    getWidthList() {
        const { width, rows } = this.paragraph;
        /** @type {?} */
        let widthList = [];
        if (width && Array.isArray(width)) {
            widthList = width;
        }
        else if (width && !Array.isArray(width)) {
            widthList = [];
            widthList[(/** @type {?} */ (rows)) - 1] = width;
        }
        return widthList;
    }
    /**
     * @private
     * @return {?}
     */
    updateProps() {
        this.title = this.getTitleProps();
        this.avatar = this.getAvatarProps();
        this.paragraph = this.getParagraphProps();
        this.rowsList = [...Array(this.paragraph.rows)];
        this.widthList = this.getWidthList();
        this.cdr.markForCheck();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.updateProps();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.nzTitle || changes.nzAvatar || changes.nzParagraph) {
            this.updateProps();
        }
    }
}
NzSkeletonComponent.ɵfac = function NzSkeletonComponent_Factory(t) { return new (t || NzSkeletonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
NzSkeletonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzSkeletonComponent, selectors: [["nz-skeleton"]], hostVars: 4, hostBindings: function NzSkeletonComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-skeleton-with-avatar", !!ctx.nzAvatar)("ant-skeleton-active", ctx.nzActive);
    } }, inputs: { nzActive: "nzActive", nzLoading: "nzLoading", nzTitle: "nzTitle", nzAvatar: "nzAvatar", nzParagraph: "nzParagraph" }, exportAs: ["nzSkeleton"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c0, decls: 2, vars: 2, consts: [[4, "ngIf"], ["class", "ant-skeleton-header", 4, "ngIf"], [1, "ant-skeleton-content"], ["class", "ant-skeleton-title", 3, "width", 4, "ngIf"], ["class", "ant-skeleton-paragraph", 4, "ngIf"], [1, "ant-skeleton-header"], ["nzType", "avatar", 3, "nzSize", "nzShape"], [1, "ant-skeleton-title"], [1, "ant-skeleton-paragraph"], [3, "width", 4, "ngFor", "ngForOf"]], template: function NzSkeletonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzSkeletonComponent_ng_container_0_Template, 5, 3, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzSkeletonComponent_ng_container_1_Template, 2, 0, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nzLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.nzLoading);
    } }, directives: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], NzSkeletonElementDirective,
        NzSkeletonElementAvatarComponent, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]]; }, encapsulation: 2, changeDetection: 0 });
/** @nocollapse */
NzSkeletonComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
];
NzSkeletonComponent.propDecorators = {
    nzActive: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzLoading: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzTitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzAvatar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzParagraph: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzSkeletonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                selector: 'nz-skeleton',
                exportAs: 'nzSkeleton',
                host: {
                    '[class.ant-skeleton-with-avatar]': '!!nzAvatar',
                    '[class.ant-skeleton-active]': 'nzActive'
                },
                template: `
    <ng-container *ngIf="nzLoading">
      <div class="ant-skeleton-header" *ngIf="!!nzAvatar">
        <nz-skeleton-element nzType="avatar" [nzSize]="avatar.size" [nzShape]="avatar.shape"></nz-skeleton-element>
      </div>
      <div class="ant-skeleton-content">
        <h3 *ngIf="!!nzTitle" class="ant-skeleton-title" [style.width]="toCSSUnit(title.width)"></h3>
        <ul *ngIf="!!nzParagraph" class="ant-skeleton-paragraph">
          <li *ngFor="let row of rowsList; let i = index" [style.width]="toCSSUnit(widthList[i])"></li>
        </ul>
      </div>
    </ng-container>
    <ng-container *ngIf="!nzLoading">
      <ng-content></ng-content>
    </ng-container>
  `
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { nzActive: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzLoading: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzAvatar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzParagraph: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: skeleton-element.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzSkeletonElementDirective {
    constructor() {
        this.nzActive = false;
    }
}
NzSkeletonElementDirective.ɵfac = function NzSkeletonElementDirective_Factory(t) { return new (t || NzSkeletonElementDirective)(); };
NzSkeletonElementDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NzSkeletonElementDirective, selectors: [["nz-skeleton-element"]], hostVars: 6, hostBindings: function NzSkeletonElementDirective_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-skeleton", true)("ant-skeleton-element", true)("ant-skeleton-active", ctx.nzActive);
    } }, inputs: { nzActive: "nzActive", nzType: "nzType" } });
NzSkeletonElementDirective.propDecorators = {
    nzActive: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzSkeletonElementDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: 'nz-skeleton-element',
                host: {
                    '[class.ant-skeleton]': 'true',
                    '[class.ant-skeleton-element]': 'true',
                    '[class.ant-skeleton-active]': 'nzActive'
                }
            }]
    }], function () { return []; }, { nzActive: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
if (false) {}
class NzSkeletonElementButtonComponent {
}
NzSkeletonElementButtonComponent.ɵfac = function NzSkeletonElementButtonComponent_Factory(t) { return new (t || NzSkeletonElementButtonComponent)(); };
NzSkeletonElementButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzSkeletonElementButtonComponent, selectors: [["nz-skeleton-element", "nzType", "button"]], inputs: { nzShape: "nzShape", nzSize: "nzSize" }, attrs: _c1, decls: 1, vars: 10, template: function NzSkeletonElementButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-skeleton-button", true)("ant-skeleton-button-round", ctx.nzShape === "round")("ant-skeleton-button-circle", ctx.nzShape === "circle")("ant-skeleton-button-lg", ctx.nzSize === "large")("ant-skeleton-button-sm", ctx.nzSize === "small");
    } }, encapsulation: 2, changeDetection: 0 });
NzSkeletonElementButtonComponent.propDecorators = {
    nzShape: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzSkeletonElementButtonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                selector: 'nz-skeleton-element[nzType="button"]',
                template: `
    <span
      [class.ant-skeleton-button]="true"
      [class.ant-skeleton-button-round]="nzShape === 'round'"
      [class.ant-skeleton-button-circle]="nzShape === 'circle'"
      [class.ant-skeleton-button-lg]="nzSize === 'large'"
      [class.ant-skeleton-button-sm]="nzSize === 'small'"
    >
    </span>
  `
            }]
    }], null, { nzShape: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
if (false) {}
class NzSkeletonElementAvatarComponent {
    constructor() {
        this.styleMap = {};
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.nzSize && typeof this.nzSize === 'number') {
            /** @type {?} */
            const sideLength = `${this.nzSize}px`;
            this.styleMap = { width: sideLength, height: sideLength, 'line-height': sideLength };
        }
        else {
            this.styleMap = {};
        }
    }
}
NzSkeletonElementAvatarComponent.ɵfac = function NzSkeletonElementAvatarComponent_Factory(t) { return new (t || NzSkeletonElementAvatarComponent)(); };
NzSkeletonElementAvatarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzSkeletonElementAvatarComponent, selectors: [["nz-skeleton-element", "nzType", "avatar"]], inputs: { nzShape: "nzShape", nzSize: "nzSize" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], attrs: _c2, decls: 1, vars: 12, template: function NzSkeletonElementAvatarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx.styleMap);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-skeleton-avatar", true)("ant-skeleton-avatar-square", ctx.nzShape === "square")("ant-skeleton-avatar-circle", ctx.nzShape === "circle")("ant-skeleton-avatar-lg", ctx.nzSize === "large")("ant-skeleton-avatar-sm", ctx.nzSize === "small");
    } }, encapsulation: 2, changeDetection: 0 });
NzSkeletonElementAvatarComponent.propDecorators = {
    nzShape: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzSkeletonElementAvatarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                selector: 'nz-skeleton-element[nzType="avatar"]',
                template: `
    <span
      [class.ant-skeleton-avatar]="true"
      [class.ant-skeleton-avatar-square]="nzShape === 'square'"
      [class.ant-skeleton-avatar-circle]="nzShape === 'circle'"
      [class.ant-skeleton-avatar-lg]="nzSize === 'large'"
      [class.ant-skeleton-avatar-sm]="nzSize === 'small'"
      [style]="styleMap"
    >
    </span>
  `
            }]
    }], function () { return []; }, { nzShape: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
if (false) {}
class NzSkeletonElementInputComponent {
}
NzSkeletonElementInputComponent.ɵfac = function NzSkeletonElementInputComponent_Factory(t) { return new (t || NzSkeletonElementInputComponent)(); };
NzSkeletonElementInputComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzSkeletonElementInputComponent, selectors: [["nz-skeleton-element", "nzType", "input"]], inputs: { nzSize: "nzSize" }, attrs: _c3, decls: 1, vars: 6, template: function NzSkeletonElementInputComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-skeleton-input", true)("ant-skeleton-input-lg", ctx.nzSize === "large")("ant-skeleton-input-sm", ctx.nzSize === "small");
    } }, encapsulation: 2, changeDetection: 0 });
NzSkeletonElementInputComponent.propDecorators = {
    nzSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzSkeletonElementInputComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                selector: 'nz-skeleton-element[nzType="input"]',
                template: `
    <span
      [class.ant-skeleton-input]="true"
      [class.ant-skeleton-input-lg]="nzSize === 'large'"
      [class.ant-skeleton-input-sm]="nzSize === 'small'"
    >
    </span>
  `
            }]
    }], null, { nzSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: skeleton.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzSkeletonModule {
}
NzSkeletonModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NzSkeletonModule });
NzSkeletonModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NzSkeletonModule_Factory(t) { return new (t || NzSkeletonModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NzSkeletonModule, { declarations: function () { return [NzSkeletonComponent,
        NzSkeletonElementDirective,
        NzSkeletonElementButtonComponent,
        NzSkeletonElementAvatarComponent,
        NzSkeletonElementInputComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]; }, exports: function () { return [NzSkeletonComponent,
        NzSkeletonElementDirective,
        NzSkeletonElementButtonComponent,
        NzSkeletonElementAvatarComponent,
        NzSkeletonElementInputComponent]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzSkeletonModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    NzSkeletonComponent,
                    NzSkeletonElementDirective,
                    NzSkeletonElementButtonComponent,
                    NzSkeletonElementAvatarComponent,
                    NzSkeletonElementInputComponent
                ],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
                exports: [
                    NzSkeletonComponent,
                    NzSkeletonElementDirective,
                    NzSkeletonElementButtonComponent,
                    NzSkeletonElementAvatarComponent,
                    NzSkeletonElementInputComponent
                ]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: skeleton.type.ts
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
 */
function NzSkeletonAvatar() { }
if (false) {}
/**
 * @record
 */
function NzSkeletonTitle() { }
if (false) {}
/**
 * @record
 */
function NzSkeletonParagraph() { }
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ng-zorro-antd-skeleton.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ng-zorro-antd-skeleton.js.map

/***/ })

};;
//# sourceMappingURL=card-index-module~code-editor-index-module~list-index-module~skeleton-index-module~space-index-module.js.map