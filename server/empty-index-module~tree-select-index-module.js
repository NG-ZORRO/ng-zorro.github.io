exports.ids = ["empty-index-module~tree-select-index-module"];
exports.modules = {

/***/ "3HGA":
/*!********************************************************************!*\
  !*** ./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-tree-select.js ***!
  \********************************************************************/
/*! exports provided: NzTreeSelectComponent, NzTreeSelectModule, NzTreeSelectService, higherOrderServiceFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzTreeSelectComponent", function() { return NzTreeSelectComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzTreeSelectModule", function() { return NzTreeSelectModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzTreeSelectService", function() { return NzTreeSelectService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "higherOrderServiceFactory", function() { return higherOrderServiceFactory; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "zOht");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/a11y */ "u47x");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/bidi */ "cH1L");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/keycodes */ "FtGj");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/overlay */ "rDax");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng_zorro_antd_core_animation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/core/animation */ "eczo");
/* harmony import */ var ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/core/config */ "8IHs");
/* harmony import */ var ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/core/no-animation */ "H3Kp");
/* harmony import */ var ng_zorro_antd_core_polyfill__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/core/polyfill */ "yTbr");
/* harmony import */ var ng_zorro_antd_core_tree__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/core/tree */ "e9+n");
/* harmony import */ var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/core/util */ "d1+9");
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/select */ "sBNc");
/* harmony import */ var ng_zorro_antd_tree__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/tree */ "hFqz");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/core/overlay */ "EOB0");
/* harmony import */ var ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/empty */ "vqhg");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/icon */ "MOHP");






















/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */












const _c0 = ["nzTreeTemplate"];
const _c1 = ["treeRef"];
function NzTreeSelectComponent_ng_template_0_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "nz-embed-empty", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzComponentName", "tree-select")("specificContent", ctx_r7.nzNotFoundContent);
} }
const _c2 = function () { return []; };
function NzTreeSelectComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "nz-tree", 8, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("nzExpandChange", function NzTreeSelectComponent_ng_template_0_Template_nz_tree_nzExpandChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r8.onExpandedKeysChange($event); })("nzClick", function NzTreeSelectComponent_ng_template_0_Template_nz_tree_nzClick_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r10.nzTreeClick.emit($event); })("nzCheckedKeysChange", function NzTreeSelectComponent_ng_template_0_Template_nz_tree_nzCheckedKeysChange_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r9); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r11.updateSelectedNodes(); })("nzSelectedKeysChange", function NzTreeSelectComponent_ng_template_0_Template_nz_tree_nzSelectedKeysChange_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r9); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r12.updateSelectedNodes(); })("nzCheckBoxChange", function NzTreeSelectComponent_ng_template_0_Template_nz_tree_nzCheckBoxChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r9); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r13.nzTreeCheckBoxChange.emit($event); })("nzSearchValueChange", function NzTreeSelectComponent_ng_template_0_Template_nz_tree_nzSearchValueChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r9); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r14.setSearchValues($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, NzTreeSelectComponent_ng_template_0_span_3_Template, 2, 2, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("ant-select-dropdown-placement-bottomLeft", ctx_r0.dropDownPosition === "bottom")("ant-select-dropdown-placement-topLeft", ctx_r0.dropDownPosition === "top")("ant-tree-select-dropdown-rtl", ctx_r0.dir === "rtl");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("@slideMotion", "enter")("ngClass", ctx_r0.dropdownClassName)("@.disabled", ctx_r0.noAnimation == null ? null : ctx_r0.noAnimation.nzNoAnimation)("nzNoAnimation", ctx_r0.noAnimation == null ? null : ctx_r0.noAnimation.nzNoAnimation)("dir", ctx_r0.dir)("ngStyle", ctx_r0.nzDropdownStyle);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hidden", ctx_r0.isNotFound)("nzData", ctx_r0.nzNodes)("nzMultiple", ctx_r0.nzMultiple)("nzSearchValue", ctx_r0.inputValue)("nzHideUnMatched", ctx_r0.nzHideUnMatched)("nzShowIcon", ctx_r0.nzShowIcon)("nzCheckable", ctx_r0.nzCheckable)("nzAsyncData", ctx_r0.nzAsyncData)("nzShowExpand", ctx_r0.nzShowExpand)("nzShowLine", ctx_r0.nzShowLine)("nzExpandedIcon", ctx_r0.nzExpandedIcon)("nzExpandAll", ctx_r0.nzDefaultExpandAll)("nzExpandedKeys", ctx_r0.expandedKeys)("nzCheckedKeys", ctx_r0.nzCheckable ? ctx_r0.value : _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](34, _c2))("nzSelectedKeys", !ctx_r0.nzCheckable ? ctx_r0.value : _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](35, _c2))("nzTreeTemplate", ctx_r0.treeTemplate)("nzCheckStrictly", ctx_r0.nzCheckStrictly)("nzVirtualItemSize", ctx_r0.nzVirtualItemSize)("nzVirtualMaxBufferPx", ctx_r0.nzVirtualMaxBufferPx)("nzVirtualMinBufferPx", ctx_r0.nzVirtualMinBufferPx)("nzVirtualHeight", ctx_r0.nzVirtualHeight);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.nzNodes.length === 0 || ctx_r0.isNotFound);
} }
function NzTreeSelectComponent_ng_container_2_nz_select_item_1_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "nz-select-item", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("delete", function NzTreeSelectComponent_ng_container_2_nz_select_item_1_Template_nz_select_item_delete_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r19); const node_r17 = ctx.$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r18.removeSelected(node_r17, true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const node_r17 = ctx.$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("deletable", true)("disabled", node_r17.isDisabled || ctx_r15.nzDisabled)("label", ctx_r15.nzDisplayWith(node_r17));
} }
function NzTreeSelectComponent_ng_container_2_nz_select_item_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "nz-select-item", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "slice");
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("contentTemplateOutlet", ctx_r16.nzMaxTagPlaceholder)("contentTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](1, 5, ctx_r16.selectedNodes, ctx_r16.nzMaxTagCount))("deletable", false)("disabled", false)("label", "+ " + (ctx_r16.selectedNodes.length - ctx_r16.nzMaxTagCount) + " ...");
} }
function NzTreeSelectComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, NzTreeSelectComponent_ng_container_2_nz_select_item_1_Template, 1, 3, "nz-select-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, NzTreeSelectComponent_ng_container_2_nz_select_item_3_Template, 2, 8, "nz-select-item", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind3"](2, 3, ctx_r1.selectedNodes, 0, ctx_r1.nzMaxTagCount))("ngForTrackBy", ctx_r1.trackValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.selectedNodes.length > ctx_r1.nzMaxTagCount);
} }
function NzTreeSelectComponent_nz_select_placeholder_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "nz-select-placeholder", 17);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("display", ctx_r2.placeHolderDisplay);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("placeholder", ctx_r2.nzPlaceHolder);
} }
function NzTreeSelectComponent_nz_select_item_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "nz-select-item", 18);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("deletable", false)("disabled", false)("label", ctx_r3.nzDisplayWith(ctx_r3.selectedNodes[0]));
} }
function NzTreeSelectComponent_nz_select_arrow_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "nz-select-arrow");
} }
function NzTreeSelectComponent_nz_select_clear_7_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "nz-select-clear", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("clear", function NzTreeSelectComponent_nz_select_clear_7_Template_nz_select_clear_clear_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r20.onClearSelection(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
class NzTreeSelectService extends ng_zorro_antd_core_tree__WEBPACK_IMPORTED_MODULE_11__["NzTreeBaseService"] {
}
NzTreeSelectService.ɵfac = function NzTreeSelectService_Factory(t) { return ɵNzTreeSelectService_BaseFactory(t || NzTreeSelectService); };
NzTreeSelectService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: NzTreeSelectService, factory: NzTreeSelectService.ɵfac });

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
function higherOrderServiceFactory(injector) {
    return injector.get(NzTreeSelectService);
}
const NZ_CONFIG_MODULE_NAME = 'treeSelect';
const TREE_SELECT_DEFAULT_CLASS = 'ant-select-dropdown ant-select-tree-dropdown';
class NzTreeSelectComponent extends ng_zorro_antd_core_tree__WEBPACK_IMPORTED_MODULE_11__["NzTreeBase"] {
    constructor(nzTreeService, nzConfigService, renderer, cdr, elementRef, directionality, focusMonitor, noAnimation) {
        super(nzTreeService);
        this.nzConfigService = nzConfigService;
        this.renderer = renderer;
        this.cdr = cdr;
        this.elementRef = elementRef;
        this.directionality = directionality;
        this.focusMonitor = focusMonitor;
        this.noAnimation = noAnimation;
        this._nzModuleName = NZ_CONFIG_MODULE_NAME;
        this.nzId = null;
        this.nzAllowClear = true;
        this.nzShowExpand = true;
        this.nzShowLine = false;
        this.nzDropdownMatchSelectWidth = true;
        this.nzCheckable = false;
        this.nzHideUnMatched = false;
        this.nzShowIcon = false;
        this.nzShowSearch = false;
        this.nzDisabled = false;
        this.nzAsyncData = false;
        this.nzMultiple = false;
        this.nzDefaultExpandAll = false;
        this.nzCheckStrictly = false;
        this.nzVirtualItemSize = 28;
        this.nzVirtualMaxBufferPx = 500;
        this.nzVirtualMinBufferPx = 28;
        this.nzVirtualHeight = null;
        this.nzNodes = [];
        this.nzOpen = false;
        this.nzSize = 'default';
        this.nzPlaceHolder = '';
        this.nzDropdownStyle = null;
        this.nzBackdrop = false;
        this.nzDisplayWith = (node) => node.title;
        this.nzMaxTagPlaceholder = null;
        this.nzOpenChange = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
        this.nzCleared = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
        this.nzRemoved = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
        this.nzExpandChange = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
        this.nzTreeClick = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
        this.nzTreeCheckBoxChange = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
        this.dropdownClassName = TREE_SELECT_DEFAULT_CLASS;
        this.isComposing = false;
        this.isDestroy = true;
        this.isNotFound = false;
        this.focused = false;
        this.inputValue = '';
        this.dropDownPosition = 'bottom';
        this.selectedNodes = [];
        this.expandedKeys = [];
        this.value = [];
        this.dir = 'ltr';
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_15__["Subject"]();
        this.onChange = _value => { };
        this.onTouched = () => { };
        // TODO: move to host after View Engine deprecation
        this.elementRef.nativeElement.classList.add('ant-select');
        this.renderer.addClass(this.elementRef.nativeElement, 'ant-select');
        this.renderer.addClass(this.elementRef.nativeElement, 'ant-tree-select');
    }
    set nzExpandedKeys(value) {
        this.expandedKeys = value;
    }
    get nzExpandedKeys() {
        return this.expandedKeys;
    }
    get treeTemplate() {
        return this.nzTreeTemplate || this.nzTreeTemplateChild;
    }
    get placeHolderDisplay() {
        return this.inputValue || this.isComposing || this.selectedNodes.length ? 'none' : 'block';
    }
    get isMultiple() {
        return this.nzMultiple || this.nzCheckable;
    }
    ngOnInit() {
        var _a;
        this.isDestroy = false;
        this.subscribeSelectionChange();
        (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_16__["takeUntil"])(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
            this.cdr.detectChanges();
        });
        this.dir = this.directionality.value;
        this.focusMonitor
            .monitor(this.elementRef, true)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_16__["takeUntil"])(this.destroy$))
            .subscribe(focusOrigin => {
            if (!focusOrigin) {
                this.focused = false;
                this.cdr.markForCheck();
                Promise.resolve().then(() => {
                    this.onTouched();
                });
            }
            else {
                this.focused = true;
                this.cdr.markForCheck();
            }
        });
    }
    ngOnDestroy() {
        this.isDestroy = true;
        this.closeDropDown();
        this.destroy$.next();
        this.destroy$.complete();
    }
    isComposingChange(isComposing) {
        this.isComposing = isComposing;
    }
    setDisabledState(isDisabled) {
        this.nzDisabled = isDisabled;
        this.closeDropDown();
    }
    ngOnChanges(changes) {
        const { nzNodes, nzDropdownClassName } = changes;
        if (nzNodes) {
            this.updateSelectedNodes(true);
        }
        if (nzDropdownClassName) {
            const className = this.nzDropdownClassName && this.nzDropdownClassName.trim();
            this.dropdownClassName = className ? `${TREE_SELECT_DEFAULT_CLASS} ${className}` : TREE_SELECT_DEFAULT_CLASS;
        }
    }
    writeValue(value) {
        if (Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_12__["isNotNil"])(value)) {
            if (this.isMultiple && Array.isArray(value)) {
                this.value = value;
            }
            else {
                this.value = [value];
            }
            this.updateSelectedNodes(true);
        }
        else {
            this.value = [];
            this.selectedNodes.forEach(node => {
                this.removeSelected(node, false);
            });
            this.selectedNodes = [];
        }
        this.cdr.markForCheck();
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    onKeydown(event) {
        if (this.nzDisabled) {
            return;
        }
        switch (event.keyCode) {
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["ESCAPE"]:
                /**
                 * Skip the ESCAPE processing, it will be handled in {@link onOverlayKeyDown}.
                 */
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["TAB"]:
                this.closeDropDown();
                break;
            default:
                if (!this.nzOpen) {
                    this.openDropdown();
                }
        }
    }
    trigger() {
        if (this.nzDisabled || (!this.nzDisabled && this.nzOpen)) {
            this.closeDropDown();
        }
        else {
            this.openDropdown();
        }
    }
    openDropdown() {
        if (!this.nzDisabled) {
            this.nzOpen = true;
            this.nzOpenChange.emit(this.nzOpen);
            this.updateCdkConnectedOverlayStatus();
            if (this.nzShowSearch || this.isMultiple) {
                this.focusOnInput();
            }
        }
    }
    closeDropDown() {
        this.onTouched();
        this.nzOpen = false;
        this.inputValue = '';
        this.isNotFound = false;
        this.nzOpenChange.emit(this.nzOpen);
        this.cdr.markForCheck();
    }
    onKeyDownInput(e) {
        const keyCode = e.keyCode;
        const eventTarget = e.target;
        if (this.isMultiple && !eventTarget.value && keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["BACKSPACE"]) {
            e.preventDefault();
            if (this.selectedNodes.length) {
                const removeNode = this.selectedNodes[this.selectedNodes.length - 1];
                this.removeSelected(removeNode);
            }
        }
    }
    onExpandedKeysChange(value) {
        this.nzExpandChange.emit(value);
        this.expandedKeys = [...value.keys];
    }
    setInputValue(value) {
        this.inputValue = value;
        this.updatePosition();
    }
    removeSelected(node, emit = true) {
        node.isSelected = false;
        node.isChecked = false;
        if (this.nzCheckable) {
            this.nzTreeService.conduct(node, this.nzCheckStrictly);
        }
        else {
            this.nzTreeService.setSelectedNodeList(node, this.nzMultiple);
        }
        if (emit) {
            this.nzRemoved.emit(node);
        }
    }
    focusOnInput() {
        if (this.nzSelectSearchComponent) {
            this.nzSelectSearchComponent.focus();
        }
    }
    subscribeSelectionChange() {
        Object(rxjs__WEBPACK_IMPORTED_MODULE_15__["merge"])(this.nzTreeClick.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_16__["tap"])((event) => {
            const node = event.node;
            if (this.nzCheckable && !node.isDisabled && !node.isDisableCheckbox) {
                node.isChecked = !node.isChecked;
                node.isHalfChecked = false;
                if (!this.nzCheckStrictly) {
                    this.nzTreeService.conduct(node);
                }
            }
            if (this.nzCheckable) {
                node.isSelected = false;
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_16__["filter"])((event) => {
            const node = event.node;
            return this.nzCheckable ? !node.isDisabled && !node.isDisableCheckbox : !node.isDisabled && node.isSelectable;
        })), this.nzCheckable ? this.nzTreeCheckBoxChange : Object(rxjs__WEBPACK_IMPORTED_MODULE_15__["of"])(), this.nzCleared, this.nzRemoved)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_16__["takeUntil"])(this.destroy$))
            .subscribe(() => {
            this.updateSelectedNodes();
            const value = this.selectedNodes.map(node => node.key);
            this.value = [...value];
            if (this.nzShowSearch || this.isMultiple) {
                this.inputValue = '';
                this.isNotFound = false;
            }
            if (this.isMultiple) {
                this.onChange(value);
                this.focusOnInput();
                this.updatePosition();
            }
            else {
                this.closeDropDown();
                this.onChange(value.length ? value[0] : null);
            }
        });
    }
    updateSelectedNodes(init = false) {
        if (init) {
            const nodes = this.coerceTreeNodes(this.nzNodes);
            this.nzTreeService.isMultiple = this.isMultiple;
            this.nzTreeService.isCheckStrictly = this.nzCheckStrictly;
            this.nzTreeService.initTree(nodes);
            if (this.nzCheckable) {
                this.nzTreeService.conductCheck(this.value, this.nzCheckStrictly);
            }
            else {
                this.nzTreeService.conductSelectedKeys(this.value, this.isMultiple);
            }
        }
        this.selectedNodes = [...(this.nzCheckable ? this.getCheckedNodeList() : this.getSelectedNodeList())];
    }
    updatePosition() {
        Object(ng_zorro_antd_core_polyfill__WEBPACK_IMPORTED_MODULE_10__["reqAnimFrame"])(() => {
            var _a, _b;
            (_b = (_a = this.cdkConnectedOverlay) === null || _a === void 0 ? void 0 : _a.overlayRef) === null || _b === void 0 ? void 0 : _b.updatePosition();
        });
    }
    onPositionChange(position) {
        this.dropDownPosition = position.connectionPair.originY;
    }
    onClearSelection() {
        this.selectedNodes.forEach(node => {
            this.removeSelected(node, false);
        });
        this.nzCleared.emit();
    }
    onClickOutside(event) {
        if (!this.elementRef.nativeElement.contains(event.target)) {
            this.closeDropDown();
        }
    }
    setSearchValues($event) {
        Promise.resolve().then(() => {
            this.isNotFound = (this.nzShowSearch || this.isMultiple) && !!this.inputValue && $event.matchedKeys.length === 0;
        });
    }
    updateCdkConnectedOverlayStatus() {
        this.triggerWidth = this.cdkOverlayOrigin.elementRef.nativeElement.getBoundingClientRect().width;
    }
    trackValue(_index, option) {
        return option.key;
    }
}
NzTreeSelectComponent.ɵfac = function NzTreeSelectComponent_Factory(t) { return new (t || NzTreeSelectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](NzTreeSelectService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_8__["NzConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["FocusMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_9__["NzNoAnimationDirective"], 9)); };
NzTreeSelectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: NzTreeSelectComponent, selectors: [["nz-tree-select"]], contentQueries: function NzTreeSelectComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵcontentQuery"](dirIndex, _c0, 3);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.nzTreeTemplateChild = _t.first);
    } }, viewQuery: function NzTreeSelectComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_13__["NzSelectSearchComponent"], 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__["CdkOverlayOrigin"], 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__["CdkConnectedOverlay"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.nzSelectSearchComponent = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.treeRef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.cdkOverlayOrigin = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.cdkConnectedOverlay = _t.first);
    } }, hostVars: 22, hostBindings: function NzTreeSelectComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function NzTreeSelectComponent_click_HostBindingHandler() { return ctx.trigger(); })("keydown", function NzTreeSelectComponent_keydown_HostBindingHandler($event) { return ctx.onKeydown($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("ant-select-lg", ctx.nzSize === "large")("ant-select-rtl", ctx.dir === "rtl")("ant-select-sm", ctx.nzSize === "small")("ant-select-disabled", ctx.nzDisabled)("ant-select-single", !ctx.isMultiple)("ant-select-show-arrow", !ctx.isMultiple)("ant-select-show-search", !ctx.isMultiple)("ant-select-multiple", ctx.isMultiple)("ant-select-allow-clear", ctx.nzAllowClear)("ant-select-open", ctx.nzOpen)("ant-select-focused", ctx.nzOpen || ctx.focused);
    } }, inputs: { nzId: "nzId", nzAllowClear: "nzAllowClear", nzShowExpand: "nzShowExpand", nzShowLine: "nzShowLine", nzDropdownMatchSelectWidth: "nzDropdownMatchSelectWidth", nzCheckable: "nzCheckable", nzHideUnMatched: "nzHideUnMatched", nzShowIcon: "nzShowIcon", nzShowSearch: "nzShowSearch", nzDisabled: "nzDisabled", nzAsyncData: "nzAsyncData", nzMultiple: "nzMultiple", nzDefaultExpandAll: "nzDefaultExpandAll", nzCheckStrictly: "nzCheckStrictly", nzVirtualItemSize: "nzVirtualItemSize", nzVirtualMaxBufferPx: "nzVirtualMaxBufferPx", nzVirtualMinBufferPx: "nzVirtualMinBufferPx", nzVirtualHeight: "nzVirtualHeight", nzNodes: "nzNodes", nzOpen: "nzOpen", nzSize: "nzSize", nzPlaceHolder: "nzPlaceHolder", nzDropdownStyle: "nzDropdownStyle", nzBackdrop: "nzBackdrop", nzDisplayWith: "nzDisplayWith", nzMaxTagPlaceholder: "nzMaxTagPlaceholder", nzExpandedKeys: "nzExpandedKeys", nzExpandedIcon: "nzExpandedIcon", nzNotFoundContent: "nzNotFoundContent", nzDropdownClassName: "nzDropdownClassName", nzMaxTagCount: "nzMaxTagCount", nzTreeTemplate: "nzTreeTemplate" }, outputs: { nzOpenChange: "nzOpenChange", nzCleared: "nzCleared", nzRemoved: "nzRemoved", nzExpandChange: "nzExpandChange", nzTreeClick: "nzTreeClick", nzTreeCheckBoxChange: "nzTreeCheckBoxChange" }, exportAs: ["nzTreeSelect"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵProvidersFeature"]([
            NzTreeSelectService,
            {
                provide: ng_zorro_antd_core_tree__WEBPACK_IMPORTED_MODULE_11__["NzTreeHigherOrderServiceToken"],
                useFactory: higherOrderServiceFactory,
                deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_5__["Self"](), _angular_core__WEBPACK_IMPORTED_MODULE_5__["Injector"]]]
            },
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NG_VALUE_ACCESSOR"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["forwardRef"])(() => NzTreeSelectComponent),
                multi: true
            }
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵNgOnChangesFeature"]], decls: 8, vars: 17, consts: [["cdkConnectedOverlay", "", "nzConnectedOverlay", "", 3, "cdkConnectedOverlayHasBackdrop", "cdkConnectedOverlayOrigin", "cdkConnectedOverlayOpen", "cdkConnectedOverlayTransformOriginOn", "cdkConnectedOverlayMinWidth", "cdkConnectedOverlayWidth", "overlayOutsideClick", "detach", "positionChange"], ["cdkOverlayOrigin", "", 1, "ant-select-selector"], [4, "ngIf"], [3, "nzId", "showInput", "value", "mirrorSync", "disabled", "focusTrigger", "keydown", "isComposingChange", "valueChange"], [3, "placeholder", "display", 4, "ngIf"], [3, "deletable", "disabled", "label", 4, "ngIf"], [3, "clear", 4, "ngIf"], [3, "ngClass", "nzNoAnimation", "dir", "ngStyle"], ["nzNoAnimation", "", "nzSelectMode", "", "nzBlockNode", "", 3, "hidden", "nzData", "nzMultiple", "nzSearchValue", "nzHideUnMatched", "nzShowIcon", "nzCheckable", "nzAsyncData", "nzShowExpand", "nzShowLine", "nzExpandedIcon", "nzExpandAll", "nzExpandedKeys", "nzCheckedKeys", "nzSelectedKeys", "nzTreeTemplate", "nzCheckStrictly", "nzVirtualItemSize", "nzVirtualMaxBufferPx", "nzVirtualMinBufferPx", "nzVirtualHeight", "nzExpandChange", "nzClick", "nzCheckedKeysChange", "nzSelectedKeysChange", "nzCheckBoxChange", "nzSearchValueChange"], ["treeRef", ""], ["class", "ant-select-not-found", 4, "ngIf"], [1, "ant-select-not-found"], [3, "nzComponentName", "specificContent"], [3, "deletable", "disabled", "label", "delete", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "contentTemplateOutlet", "contentTemplateOutletContext", "deletable", "disabled", "label", 4, "ngIf"], [3, "deletable", "disabled", "label", "delete"], [3, "contentTemplateOutlet", "contentTemplateOutletContext", "deletable", "disabled", "label"], [3, "placeholder"], [3, "deletable", "disabled", "label"], [3, "clear"]], template: function NzTreeSelectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, NzTreeSelectComponent_ng_template_0_Template, 4, 36, "ng-template", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("overlayOutsideClick", function NzTreeSelectComponent_Template_ng_template_overlayOutsideClick_0_listener($event) { return ctx.onClickOutside($event); })("detach", function NzTreeSelectComponent_Template_ng_template_detach_0_listener() { return ctx.closeDropDown(); })("positionChange", function NzTreeSelectComponent_Template_ng_template_positionChange_0_listener($event) { return ctx.onPositionChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, NzTreeSelectComponent_ng_container_2_Template, 4, 7, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "nz-select-search", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keydown", function NzTreeSelectComponent_Template_nz_select_search_keydown_3_listener($event) { return ctx.onKeyDownInput($event); })("isComposingChange", function NzTreeSelectComponent_Template_nz_select_search_isComposingChange_3_listener($event) { return ctx.isComposing = $event; })("valueChange", function NzTreeSelectComponent_Template_nz_select_search_valueChange_3_listener($event) { return ctx.setInputValue($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, NzTreeSelectComponent_nz_select_placeholder_4_Template, 1, 3, "nz-select-placeholder", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, NzTreeSelectComponent_nz_select_item_5_Template, 1, 3, "nz-select-item", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, NzTreeSelectComponent_nz_select_arrow_6_Template, 1, 0, "nz-select-arrow", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, NzTreeSelectComponent_nz_select_clear_7_Template, 1, 0, "nz-select-clear", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("cdkConnectedOverlayHasBackdrop", ctx.nzBackdrop)("cdkConnectedOverlayOrigin", ctx.cdkOverlayOrigin)("cdkConnectedOverlayOpen", ctx.nzOpen)("cdkConnectedOverlayTransformOriginOn", ".ant-select-tree-dropdown")("cdkConnectedOverlayMinWidth", ctx.nzDropdownMatchSelectWidth ? null : ctx.triggerWidth)("cdkConnectedOverlayWidth", ctx.nzDropdownMatchSelectWidth ? ctx.triggerWidth : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isMultiple);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzId", ctx.nzId)("showInput", ctx.nzShowSearch)("value", ctx.inputValue)("mirrorSync", ctx.isMultiple)("disabled", ctx.nzDisabled)("focusTrigger", ctx.nzOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.nzPlaceHolder && ctx.selectedNodes.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.isMultiple && ctx.selectedNodes.length === 1 && !ctx.isComposing && ctx.inputValue === "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.isMultiple);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.nzAllowClear && !ctx.nzDisabled && ctx.selectedNodes.length);
    } }, directives: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__["CdkConnectedOverlay"], ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_18__["NzConnectedOverlayDirective"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__["CdkOverlayOrigin"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgIf"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_13__["NzSelectSearchComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgClass"], ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_9__["NzNoAnimationDirective"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["Dir"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgStyle"], ng_zorro_antd_tree__WEBPACK_IMPORTED_MODULE_14__["NzTreeComponent"], ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_19__["NzEmbedEmptyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgForOf"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_13__["NzSelectItemComponent"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_13__["NzSelectPlaceholderComponent"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_13__["NzSelectArrowComponent"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_13__["NzSelectClearComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_17__["SlicePipe"]], encapsulation: 2, data: { animation: [ng_zorro_antd_core_animation__WEBPACK_IMPORTED_MODULE_7__["slideMotion"]] } });
NzTreeSelectComponent.ctorParameters = () => [
    { type: NzTreeSelectService },
    { type: ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_8__["NzConfigService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Renderer2"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"] },
    { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Optional"] }] },
    { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["FocusMonitor"] },
    { type: ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_9__["NzNoAnimationDirective"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Host"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Optional"] }] }
];
NzTreeSelectComponent.propDecorators = {
    nzId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
    nzAllowClear: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
    nzShowExpand: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
    nzShowLine: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
    nzDropdownMatchSelectWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
    nzCheckable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
    nzHideUnMatched: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
    nzShowIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
    nzShowSearch: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
    nzDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
    nzAsyncData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
    nzMultiple: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
    nzDefaultExpandAll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
    nzCheckStrictly: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
    nzVirtualItemSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
    nzVirtualMaxBufferPx: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
    nzVirtualMinBufferPx: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
    nzVirtualHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
    nzExpandedIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
    nzNotFoundContent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
    nzNodes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
    nzOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
    nzSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
    nzPlaceHolder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
    nzDropdownStyle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
    nzDropdownClassName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
    nzBackdrop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
    nzExpandedKeys: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
    nzDisplayWith: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
    nzMaxTagCount: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
    nzMaxTagPlaceholder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
    nzOpenChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"] }],
    nzCleared: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"] }],
    nzRemoved: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"] }],
    nzExpandChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"] }],
    nzTreeClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"] }],
    nzTreeCheckBoxChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"] }],
    nzSelectSearchComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"], args: [ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_13__["NzSelectSearchComponent"], { static: false },] }],
    treeRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"], args: ['treeRef', { static: false },] }],
    cdkOverlayOrigin: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"], args: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__["CdkOverlayOrigin"], { static: true },] }],
    cdkConnectedOverlay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"], args: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__["CdkConnectedOverlay"], { static: false },] }],
    nzTreeTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
    nzTreeTemplateChild: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ContentChild"], args: ['nzTreeTemplate', { static: true },] }]
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_12__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], NzTreeSelectComponent.prototype, "nzAllowClear", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_12__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], NzTreeSelectComponent.prototype, "nzShowExpand", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_12__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], NzTreeSelectComponent.prototype, "nzShowLine", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_12__["InputBoolean"])(),
    Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_8__["WithConfig"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], NzTreeSelectComponent.prototype, "nzDropdownMatchSelectWidth", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_12__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], NzTreeSelectComponent.prototype, "nzCheckable", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_12__["InputBoolean"])(),
    Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_8__["WithConfig"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], NzTreeSelectComponent.prototype, "nzHideUnMatched", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_12__["InputBoolean"])(),
    Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_8__["WithConfig"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], NzTreeSelectComponent.prototype, "nzShowIcon", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_12__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], NzTreeSelectComponent.prototype, "nzShowSearch", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_12__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], NzTreeSelectComponent.prototype, "nzDisabled", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_12__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], NzTreeSelectComponent.prototype, "nzAsyncData", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_12__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], NzTreeSelectComponent.prototype, "nzMultiple", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_12__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], NzTreeSelectComponent.prototype, "nzDefaultExpandAll", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_12__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], NzTreeSelectComponent.prototype, "nzCheckStrictly", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_8__["WithConfig"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], NzTreeSelectComponent.prototype, "nzSize", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_8__["WithConfig"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], NzTreeSelectComponent.prototype, "nzBackdrop", void 0);
const ɵNzTreeSelectService_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetInheritedFactory"](NzTreeSelectService);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](NzTreeSelectService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Injectable"]
    }], null, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](NzTreeSelectComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"],
        args: [{
                selector: 'nz-tree-select',
                exportAs: 'nzTreeSelect',
                animations: [ng_zorro_antd_core_animation__WEBPACK_IMPORTED_MODULE_7__["slideMotion"]],
                template: `
    <ng-template
      cdkConnectedOverlay
      nzConnectedOverlay
      [cdkConnectedOverlayHasBackdrop]="nzBackdrop"
      [cdkConnectedOverlayOrigin]="cdkOverlayOrigin"
      [cdkConnectedOverlayOpen]="nzOpen"
      [cdkConnectedOverlayTransformOriginOn]="'.ant-select-tree-dropdown'"
      [cdkConnectedOverlayMinWidth]="$any(nzDropdownMatchSelectWidth ? null : triggerWidth)"
      [cdkConnectedOverlayWidth]="$any(nzDropdownMatchSelectWidth ? triggerWidth : null)"
      (overlayOutsideClick)="onClickOutside($event)"
      (detach)="closeDropDown()"
      (positionChange)="onPositionChange($event)"
    >
      <div
        [@slideMotion]="'enter'"
        [ngClass]="dropdownClassName"
        [@.disabled]="noAnimation?.nzNoAnimation"
        [nzNoAnimation]="noAnimation?.nzNoAnimation"
        [class.ant-select-dropdown-placement-bottomLeft]="dropDownPosition === 'bottom'"
        [class.ant-select-dropdown-placement-topLeft]="dropDownPosition === 'top'"
        [class.ant-tree-select-dropdown-rtl]="dir === 'rtl'"
        [dir]="dir"
        [ngStyle]="nzDropdownStyle"
      >
        <nz-tree
          #treeRef
          [hidden]="isNotFound"
          nzNoAnimation
          nzSelectMode
          nzBlockNode
          [nzData]="nzNodes"
          [nzMultiple]="nzMultiple"
          [nzSearchValue]="inputValue"
          [nzHideUnMatched]="nzHideUnMatched"
          [nzShowIcon]="nzShowIcon"
          [nzCheckable]="nzCheckable"
          [nzAsyncData]="nzAsyncData"
          [nzShowExpand]="nzShowExpand"
          [nzShowLine]="nzShowLine"
          [nzExpandedIcon]="nzExpandedIcon"
          [nzExpandAll]="nzDefaultExpandAll"
          [nzExpandedKeys]="expandedKeys"
          [nzCheckedKeys]="nzCheckable ? value : []"
          [nzSelectedKeys]="!nzCheckable ? value : []"
          [nzTreeTemplate]="treeTemplate"
          [nzCheckStrictly]="nzCheckStrictly"
          [nzVirtualItemSize]="nzVirtualItemSize"
          [nzVirtualMaxBufferPx]="nzVirtualMaxBufferPx"
          [nzVirtualMinBufferPx]="nzVirtualMinBufferPx"
          [nzVirtualHeight]="nzVirtualHeight"
          (nzExpandChange)="onExpandedKeysChange($event)"
          (nzClick)="nzTreeClick.emit($event)"
          (nzCheckedKeysChange)="updateSelectedNodes()"
          (nzSelectedKeysChange)="updateSelectedNodes()"
          (nzCheckBoxChange)="nzTreeCheckBoxChange.emit($event)"
          (nzSearchValueChange)="setSearchValues($event)"
        ></nz-tree>
        <span *ngIf="nzNodes.length === 0 || isNotFound" class="ant-select-not-found">
          <nz-embed-empty [nzComponentName]="'tree-select'" [specificContent]="nzNotFoundContent"></nz-embed-empty>
        </span>
      </div>
    </ng-template>

    <div cdkOverlayOrigin class="ant-select-selector">
      <ng-container *ngIf="isMultiple">
        <nz-select-item
          *ngFor="let node of selectedNodes | slice: 0:nzMaxTagCount; trackBy: trackValue"
          [deletable]="true"
          [disabled]="node.isDisabled || nzDisabled"
          [label]="nzDisplayWith(node)"
          (delete)="removeSelected(node, true)"
        ></nz-select-item>

        <nz-select-item
          *ngIf="selectedNodes.length > nzMaxTagCount"
          [contentTemplateOutlet]="nzMaxTagPlaceholder"
          [contentTemplateOutletContext]="selectedNodes | slice: nzMaxTagCount"
          [deletable]="false"
          [disabled]="false"
          [label]="'+ ' + (selectedNodes.length - nzMaxTagCount) + ' ...'"
        ></nz-select-item>
      </ng-container>

      <nz-select-search
        [nzId]="nzId"
        [showInput]="nzShowSearch"
        (keydown)="onKeyDownInput($event)"
        (isComposingChange)="isComposing = $event"
        (valueChange)="setInputValue($event)"
        [value]="inputValue"
        [mirrorSync]="isMultiple"
        [disabled]="nzDisabled"
        [focusTrigger]="nzOpen"
      ></nz-select-search>

      <nz-select-placeholder
        *ngIf="nzPlaceHolder && selectedNodes.length === 0"
        [placeholder]="nzPlaceHolder"
        [style.display]="placeHolderDisplay"
      ></nz-select-placeholder>

      <nz-select-item
        *ngIf="!isMultiple && selectedNodes.length === 1 && !isComposing && inputValue === ''"
        [deletable]="false"
        [disabled]="false"
        [label]="nzDisplayWith(selectedNodes[0])"
      ></nz-select-item>

      <nz-select-arrow *ngIf="!isMultiple"></nz-select-arrow>

      <nz-select-clear *ngIf="nzAllowClear && !nzDisabled && selectedNodes.length" (clear)="onClearSelection()"></nz-select-clear>
    </div>
  `,
                providers: [
                    NzTreeSelectService,
                    {
                        provide: ng_zorro_antd_core_tree__WEBPACK_IMPORTED_MODULE_11__["NzTreeHigherOrderServiceToken"],
                        useFactory: higherOrderServiceFactory,
                        deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_5__["Self"](), _angular_core__WEBPACK_IMPORTED_MODULE_5__["Injector"]]]
                    },
                    {
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NG_VALUE_ACCESSOR"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["forwardRef"])(() => NzTreeSelectComponent),
                        multi: true
                    }
                ],
                host: {
                    '[class.ant-select-lg]': 'nzSize==="large"',
                    '[class.ant-select-rtl]': 'dir==="rtl"',
                    '[class.ant-select-sm]': 'nzSize==="small"',
                    '[class.ant-select-disabled]': 'nzDisabled',
                    '[class.ant-select-single]': '!isMultiple',
                    '[class.ant-select-show-arrow]': '!isMultiple',
                    '[class.ant-select-show-search]': '!isMultiple',
                    '[class.ant-select-multiple]': 'isMultiple',
                    '[class.ant-select-allow-clear]': 'nzAllowClear',
                    '[class.ant-select-open]': 'nzOpen',
                    '[class.ant-select-focused]': 'nzOpen || focused',
                    '(click)': 'trigger()',
                    '(keydown)': 'onKeydown($event)'
                }
            }]
    }], function () { return [{ type: NzTreeSelectService }, { type: ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_8__["NzConfigService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Renderer2"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"] }, { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["Directionality"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Optional"]
            }] }, { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["FocusMonitor"] }, { type: ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_9__["NzNoAnimationDirective"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Host"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Optional"]
            }] }]; }, { nzId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }], nzAllowClear: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }], nzShowExpand: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }], nzShowLine: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }], nzDropdownMatchSelectWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }], nzCheckable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }], nzHideUnMatched: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }], nzShowIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }], nzShowSearch: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }], nzDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }], nzAsyncData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }], nzMultiple: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }], nzDefaultExpandAll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }], nzCheckStrictly: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }], nzVirtualItemSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }], nzVirtualMaxBufferPx: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }], nzVirtualMinBufferPx: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }], nzVirtualHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }], nzNodes: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }], nzOpen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }], nzSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }], nzPlaceHolder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }], nzDropdownStyle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }], nzBackdrop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }], nzDisplayWith: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }], nzMaxTagPlaceholder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }], nzOpenChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"]
        }], nzCleared: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"]
        }], nzRemoved: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"]
        }], nzExpandChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"]
        }], nzTreeClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"]
        }], nzTreeCheckBoxChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"]
        }], nzExpandedKeys: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }], nzExpandedIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }], nzNotFoundContent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }], nzDropdownClassName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }], nzMaxTagCount: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }], nzSelectSearchComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"],
            args: [ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_13__["NzSelectSearchComponent"], { static: false }]
        }], treeRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"],
            args: ['treeRef', { static: false }]
        }], cdkOverlayOrigin: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"],
            args: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__["CdkOverlayOrigin"], { static: true }]
        }], cdkConnectedOverlay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"],
            args: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__["CdkConnectedOverlay"], { static: false }]
        }], nzTreeTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
        }], nzTreeTemplateChild: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ContentChild"],
            args: ['nzTreeTemplate', { static: true }]
        }] }); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzTreeSelectModule {
}
NzTreeSelectModule.ɵfac = function NzTreeSelectModule_Factory(t) { return new (t || NzTreeSelectModule)(); };
NzTreeSelectModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: NzTreeSelectModule });
NzTreeSelectModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["BidiModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_17__["CommonModule"],
            _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__["OverlayModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_13__["NzSelectModule"],
            ng_zorro_antd_tree__WEBPACK_IMPORTED_MODULE_14__["NzTreeModule"],
            ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_20__["NzIconModule"],
            ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_19__["NzEmptyModule"],
            ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_18__["NzOverlayModule"],
            ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_9__["NzNoAnimationModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](NzTreeSelectModule, { declarations: function () { return [NzTreeSelectComponent]; }, imports: function () { return [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["BidiModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_17__["CommonModule"],
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__["OverlayModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
        ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_13__["NzSelectModule"],
        ng_zorro_antd_tree__WEBPACK_IMPORTED_MODULE_14__["NzTreeModule"],
        ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_20__["NzIconModule"],
        ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_19__["NzEmptyModule"],
        ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_18__["NzOverlayModule"],
        ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_9__["NzNoAnimationModule"]]; }, exports: function () { return [NzTreeSelectComponent]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](NzTreeSelectModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"],
        args: [{
                imports: [
                    _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["BidiModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_17__["CommonModule"],
                    _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__["OverlayModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                    ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_13__["NzSelectModule"],
                    ng_zorro_antd_tree__WEBPACK_IMPORTED_MODULE_14__["NzTreeModule"],
                    ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_20__["NzIconModule"],
                    ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_19__["NzEmptyModule"],
                    ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_18__["NzOverlayModule"],
                    ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_9__["NzNoAnimationModule"]
                ],
                declarations: [NzTreeSelectComponent],
                exports: [NzTreeSelectComponent]
            }]
    }], null, null); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/**
 * Generated bundle index. Do not edit.
 */





/***/ })

};;
//# sourceMappingURL=empty-index-module~tree-select-index-module.js.map