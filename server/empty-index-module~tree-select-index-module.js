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
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/keycodes */ "FtGj");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/overlay */ "rDax");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng_zorro_antd_core_animation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/core/animation */ "eczo");
/* harmony import */ var ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/core/config */ "8IHs");
/* harmony import */ var ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/core/no-animation */ "H3Kp");
/* harmony import */ var ng_zorro_antd_core_tree__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/core/tree */ "e9+n");
/* harmony import */ var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/core/util */ "d1+9");
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/select */ "sBNc");
/* harmony import */ var ng_zorro_antd_tree__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/tree */ "hFqz");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/core/overlay */ "EOB0");
/* harmony import */ var ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/empty */ "vqhg");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/icon */ "MOHP");



















/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */










const _c0 = ["nzTreeTemplate"];
const _c1 = ["treeRef"];
function NzTreeSelectComponent_ng_template_0_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "nz-embed-empty", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzComponentName", "tree-select")("specificContent", ctx_r8.nzNotFoundContent);
} }
const _c2 = function () { return []; };
function NzTreeSelectComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "nz-tree", 8, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("nzExpandChange", function NzTreeSelectComponent_ng_template_0_Template_nz_tree_nzExpandChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r9.onExpandedKeysChange($event); })("nzClick", function NzTreeSelectComponent_ng_template_0_Template_nz_tree_nzClick_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r11.nzTreeClick.emit($event); })("nzCheckedKeysChange", function NzTreeSelectComponent_ng_template_0_Template_nz_tree_nzCheckedKeysChange_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r12.updateSelectedNodes(); })("nzSelectedKeysChange", function NzTreeSelectComponent_ng_template_0_Template_nz_tree_nzSelectedKeysChange_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r13.updateSelectedNodes(); })("nzCheckBoxChange", function NzTreeSelectComponent_ng_template_0_Template_nz_tree_nzCheckBoxChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r14.nzTreeCheckBoxChange.emit($event); })("nzSearchValueChange", function NzTreeSelectComponent_ng_template_0_Template_nz_tree_nzSearchValueChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r15.setSearchValues($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, NzTreeSelectComponent_ng_template_0_span_3_Template, 2, 2, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("ant-select-dropdown-placement-bottomLeft", ctx_r0.dropDownPosition === "bottom")("ant-select-dropdown-placement-topLeft", ctx_r0.dropDownPosition === "top");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@slideMotion", "enter")("ngClass", ctx_r0.dropdownClassName)("@.disabled", ctx_r0.noAnimation == null ? null : ctx_r0.noAnimation.nzNoAnimation)("nzNoAnimation", ctx_r0.noAnimation == null ? null : ctx_r0.noAnimation.nzNoAnimation)("ngStyle", ctx_r0.nzDropdownStyle);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", ctx_r0.isNotFound)("nzData", ctx_r0.nzNodes)("nzMultiple", ctx_r0.nzMultiple)("nzSearchValue", ctx_r0.inputValue)("nzHideUnMatched", ctx_r0.nzHideUnMatched)("nzShowIcon", ctx_r0.nzShowIcon)("nzCheckable", ctx_r0.nzCheckable)("nzAsyncData", ctx_r0.nzAsyncData)("nzShowExpand", ctx_r0.nzShowExpand)("nzShowLine", ctx_r0.nzShowLine)("nzExpandedIcon", ctx_r0.nzExpandedIcon)("nzExpandAll", ctx_r0.nzDefaultExpandAll)("nzExpandedKeys", ctx_r0.expandedKeys)("nzCheckedKeys", ctx_r0.nzCheckable ? ctx_r0.value : _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](31, _c2))("nzSelectedKeys", !ctx_r0.nzCheckable ? ctx_r0.value : _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](32, _c2))("nzTreeTemplate", ctx_r0.treeTemplate)("nzCheckStrictly", ctx_r0.nzCheckStrictly)("nzVirtualItemSize", ctx_r0.nzVirtualItemSize)("nzVirtualMaxBufferPx", ctx_r0.nzVirtualMaxBufferPx)("nzVirtualMinBufferPx", ctx_r0.nzVirtualMinBufferPx)("nzVirtualHeight", ctx_r0.nzVirtualHeight);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.nzNodes.length === 0 || ctx_r0.isNotFound);
} }
function NzTreeSelectComponent_ng_container_2_nz_select_item_1_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nz-select-item", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("@zoomMotion.done", function NzTreeSelectComponent_ng_container_2_nz_select_item_1_Template_nz_select_item_animation_zoomMotion_done_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r19.updatePosition(); })("delete", function NzTreeSelectComponent_ng_container_2_nz_select_item_1_Template_nz_select_item_delete_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r20); const node_r18 = ctx.$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r21.removeSelected(node_r18, true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const node_r18 = ctx.$implicit;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@zoomMotion", undefined)("@.disabled", ctx_r16.noAnimation == null ? null : ctx_r16.noAnimation.nzNoAnimation)("nzNoAnimation", ctx_r16.noAnimation == null ? null : ctx_r16.noAnimation.nzNoAnimation)("deletable", true)("disabled", node_r18.isDisabled || ctx_r16.nzDisabled)("label", ctx_r16.nzDisplayWith(node_r18));
} }
function NzTreeSelectComponent_ng_container_2_nz_select_item_3_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nz-select-item", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("@zoomMotion.done", function NzTreeSelectComponent_ng_container_2_nz_select_item_3_Template_nz_select_item_animation_zoomMotion_done_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r22.updatePosition(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@zoomMotion", undefined)("@.disabled", ctx_r17.noAnimation == null ? null : ctx_r17.noAnimation.nzNoAnimation)("nzNoAnimation", ctx_r17.noAnimation == null ? null : ctx_r17.noAnimation.nzNoAnimation)("contentTemplateOutlet", ctx_r17.nzMaxTagPlaceholder)("contentTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](1, 8, ctx_r17.selectedNodes, ctx_r17.nzMaxTagCount))("deletable", false)("disabled", false)("label", "+ " + (ctx_r17.selectedNodes.length - ctx_r17.nzMaxTagCount) + " ...");
} }
function NzTreeSelectComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, NzTreeSelectComponent_ng_container_2_nz_select_item_1_Template, 1, 6, "nz-select-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, NzTreeSelectComponent_ng_container_2_nz_select_item_3_Template, 2, 11, "nz-select-item", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](2, 3, ctx_r1.selectedNodes, 0, ctx_r1.nzMaxTagCount))("ngForTrackBy", ctx_r1.trackValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.selectedNodes.length > ctx_r1.nzMaxTagCount);
} }
function NzTreeSelectComponent_nz_select_search_3_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nz-select-search", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keydown", function NzTreeSelectComponent_nz_select_search_3_Template_nz_select_search_keydown_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r24.onKeyDownInput($event); })("isComposingChange", function NzTreeSelectComponent_nz_select_search_3_Template_nz_select_search_isComposingChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r25); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r26.isComposing = $event; })("valueChange", function NzTreeSelectComponent_nz_select_search_3_Template_nz_select_search_valueChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r25); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r27.setInputValue($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx_r2.inputValue)("mirrorSync", ctx_r2.isMultiple)("disabled", ctx_r2.nzDisabled)("showInput", ctx_r2.nzOpen);
} }
function NzTreeSelectComponent_nz_select_placeholder_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "nz-select-placeholder", 18);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("display", ctx_r3.placeHolderDisplay);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("placeholder", ctx_r3.nzPlaceHolder);
} }
function NzTreeSelectComponent_nz_select_item_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "nz-select-item", 19);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("deletable", false)("disabled", false)("label", ctx_r4.nzDisplayWith(ctx_r4.selectedNodes[0]));
} }
function NzTreeSelectComponent_nz_select_arrow_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "nz-select-arrow");
} }
function NzTreeSelectComponent_nz_select_clear_7_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nz-select-clear", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("clear", function NzTreeSelectComponent_nz_select_clear_7_Template_nz_select_clear_clear_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r28.onClearSelection(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
class NzTreeSelectService extends ng_zorro_antd_core_tree__WEBPACK_IMPORTED_MODULE_8__["NzTreeBaseService"] {
}
/** @nocollapse */
NzTreeSelectService.ɵfac = function NzTreeSelectService_Factory(t) { return ɵNzTreeSelectService_BaseFactory(t || NzTreeSelectService); };
/** @nocollapse */
NzTreeSelectService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: NzTreeSelectService, factory: NzTreeSelectService.ɵfac });

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
function higherOrderServiceFactory(injector) {
    return injector.get(NzTreeSelectService);
}
const NZ_CONFIG_MODULE_NAME = 'treeSelect';
const TREE_SELECT_DEFAULT_CLASS = 'ant-select-dropdown ant-select-tree-dropdown';
class NzTreeSelectComponent extends ng_zorro_antd_core_tree__WEBPACK_IMPORTED_MODULE_8__["NzTreeBase"] {
    constructor(nzTreeService, nzConfigService, renderer, cdr, elementRef, noAnimation) {
        super(nzTreeService);
        this.nzConfigService = nzConfigService;
        this.renderer = renderer;
        this.cdr = cdr;
        this.elementRef = elementRef;
        this.noAnimation = noAnimation;
        this._nzModuleName = NZ_CONFIG_MODULE_NAME;
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
        this.nzDisplayWith = (node) => node.title;
        this.nzMaxTagPlaceholder = null;
        this.nzOpenChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.nzCleared = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.nzRemoved = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.nzExpandChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.nzTreeClick = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.nzTreeCheckBoxChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.dropdownClassName = TREE_SELECT_DEFAULT_CLASS;
        this.isComposing = false;
        this.isDestroy = true;
        this.isNotFound = false;
        this.inputValue = '';
        this.dropDownPosition = 'bottom';
        this.selectedNodes = [];
        this.expandedKeys = [];
        this.value = [];
        this.onChange = _value => { };
        this.onTouched = () => { };
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
        this.isDestroy = false;
        this.selectionChangeSubscription = this.subscribeSelectionChange();
    }
    ngOnDestroy() {
        this.isDestroy = true;
        this.closeDropDown();
        this.selectionChangeSubscription.unsubscribe();
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
        if (Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_9__["isNotNil"])(value)) {
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
    trigger() {
        if (this.nzDisabled || (!this.nzDisabled && this.nzOpen)) {
            this.closeDropDown();
        }
        else {
            this.openDropdown();
            if (this.nzShowSearch || this.isMultiple) {
                this.focusOnInput();
            }
        }
    }
    openDropdown() {
        if (!this.nzDisabled) {
            this.nzOpen = true;
            this.nzOpenChange.emit(this.nzOpen);
            this.updateCdkConnectedOverlayStatus();
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
        if (this.isMultiple && !eventTarget.value && keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__["BACKSPACE"]) {
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
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["merge"])(this.nzTreeClick.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["tap"])((event) => {
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
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["filter"])((event) => {
            const node = event.node;
            return this.nzCheckable ? !node.isDisabled && !node.isDisableCheckbox : !node.isDisabled && node.isSelectable;
        })), this.nzCheckable ? this.nzTreeCheckBoxChange : Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["of"])(), this.nzCleared, this.nzRemoved).subscribe(() => {
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
        setTimeout(() => {
            if (this.cdkConnectedOverlay && this.cdkConnectedOverlay.overlayRef) {
                this.cdkConnectedOverlay.overlayRef.updatePosition();
            }
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
/** @nocollapse */
NzTreeSelectComponent.ɵfac = function NzTreeSelectComponent_Factory(t) { return new (t || NzTreeSelectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](NzTreeSelectService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_6__["NzConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_7__["NzNoAnimationDirective"], 9)); };
/** @nocollapse */
NzTreeSelectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: NzTreeSelectComponent, selectors: [["nz-tree-select"]], contentQueries: function NzTreeSelectComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstaticContentQuery"](dirIndex, _c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.nzTreeTemplateChild = _t.first);
    } }, viewQuery: function NzTreeSelectComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_10__["NzSelectSearchComponent"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstaticViewQuery"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["CdkOverlayOrigin"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["CdkConnectedOverlay"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.nzSelectSearchComponent = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.treeRef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.cdkOverlayOrigin = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.cdkConnectedOverlay = _t.first);
    } }, hostVars: 20, hostBindings: function NzTreeSelectComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NzTreeSelectComponent_click_HostBindingHandler() { return ctx.trigger(); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("ant-select-lg", ctx.nzSize === "large")("ant-select-sm", ctx.nzSize === "small")("ant-select-enabled", !ctx.nzDisabled)("ant-select-disabled", ctx.nzDisabled)("ant-select-single", !ctx.isMultiple)("ant-select-show-arrow", !ctx.isMultiple)("ant-select-show-search", !ctx.isMultiple)("ant-select-multiple", ctx.isMultiple)("ant-select-allow-clear", ctx.nzAllowClear)("ant-select-open", ctx.nzOpen);
    } }, inputs: { nzAllowClear: "nzAllowClear", nzShowExpand: "nzShowExpand", nzShowLine: "nzShowLine", nzDropdownMatchSelectWidth: "nzDropdownMatchSelectWidth", nzCheckable: "nzCheckable", nzHideUnMatched: "nzHideUnMatched", nzShowIcon: "nzShowIcon", nzShowSearch: "nzShowSearch", nzDisabled: "nzDisabled", nzAsyncData: "nzAsyncData", nzMultiple: "nzMultiple", nzDefaultExpandAll: "nzDefaultExpandAll", nzCheckStrictly: "nzCheckStrictly", nzVirtualItemSize: "nzVirtualItemSize", nzVirtualMaxBufferPx: "nzVirtualMaxBufferPx", nzVirtualMinBufferPx: "nzVirtualMinBufferPx", nzVirtualHeight: "nzVirtualHeight", nzNodes: "nzNodes", nzOpen: "nzOpen", nzSize: "nzSize", nzPlaceHolder: "nzPlaceHolder", nzDropdownStyle: "nzDropdownStyle", nzDisplayWith: "nzDisplayWith", nzMaxTagPlaceholder: "nzMaxTagPlaceholder", nzExpandedKeys: "nzExpandedKeys", nzExpandedIcon: "nzExpandedIcon", nzNotFoundContent: "nzNotFoundContent", nzDropdownClassName: "nzDropdownClassName", nzMaxTagCount: "nzMaxTagCount", nzTreeTemplate: "nzTreeTemplate" }, outputs: { nzOpenChange: "nzOpenChange", nzCleared: "nzCleared", nzRemoved: "nzRemoved", nzExpandChange: "nzExpandChange", nzTreeClick: "nzTreeClick", nzTreeCheckBoxChange: "nzTreeCheckBoxChange" }, exportAs: ["nzTreeSelect"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([
            NzTreeSelectService,
            {
                provide: ng_zorro_antd_core_tree__WEBPACK_IMPORTED_MODULE_8__["NzTreeHigherOrderServiceToken"],
                useFactory: higherOrderServiceFactory,
                deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_3__["Self"](), _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injector"]]]
            },
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["forwardRef"])((() => NzTreeSelectComponent)),
                multi: true
            }
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]], decls: 8, vars: 12, consts: [["cdkConnectedOverlay", "", "nzConnectedOverlay", "", 3, "cdkConnectedOverlayOrigin", "cdkConnectedOverlayOpen", "cdkConnectedOverlayHasBackdrop", "cdkConnectedOverlayTransformOriginOn", "cdkConnectedOverlayMinWidth", "cdkConnectedOverlayWidth", "backdropClick", "detach", "positionChange"], ["cdkOverlayOrigin", "", 1, "ant-select-selector"], [4, "ngIf"], [3, "value", "mirrorSync", "disabled", "showInput", "keydown", "isComposingChange", "valueChange", 4, "ngIf"], [3, "placeholder", "display", 4, "ngIf"], [3, "deletable", "disabled", "label", 4, "ngIf"], [3, "clear", 4, "ngIf"], [3, "ngClass", "nzNoAnimation", "ngStyle"], ["nzNoAnimation", "", "nzSelectMode", "", "nzBlockNode", "", 3, "hidden", "nzData", "nzMultiple", "nzSearchValue", "nzHideUnMatched", "nzShowIcon", "nzCheckable", "nzAsyncData", "nzShowExpand", "nzShowLine", "nzExpandedIcon", "nzExpandAll", "nzExpandedKeys", "nzCheckedKeys", "nzSelectedKeys", "nzTreeTemplate", "nzCheckStrictly", "nzVirtualItemSize", "nzVirtualMaxBufferPx", "nzVirtualMinBufferPx", "nzVirtualHeight", "nzExpandChange", "nzClick", "nzCheckedKeysChange", "nzSelectedKeysChange", "nzCheckBoxChange", "nzSearchValueChange"], ["treeRef", ""], ["class", "ant-select-not-found", 4, "ngIf"], [1, "ant-select-not-found"], [3, "nzComponentName", "specificContent"], [3, "nzNoAnimation", "deletable", "disabled", "label", "delete", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "nzNoAnimation", "contentTemplateOutlet", "contentTemplateOutletContext", "deletable", "disabled", "label", 4, "ngIf"], [3, "nzNoAnimation", "deletable", "disabled", "label", "delete"], [3, "nzNoAnimation", "contentTemplateOutlet", "contentTemplateOutletContext", "deletable", "disabled", "label"], [3, "value", "mirrorSync", "disabled", "showInput", "keydown", "isComposingChange", "valueChange"], [3, "placeholder"], [3, "deletable", "disabled", "label"], [3, "clear"]], template: function NzTreeSelectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, NzTreeSelectComponent_ng_template_0_Template, 4, 33, "ng-template", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("backdropClick", function NzTreeSelectComponent_Template_ng_template_backdropClick_0_listener() { return ctx.closeDropDown(); })("detach", function NzTreeSelectComponent_Template_ng_template_detach_0_listener() { return ctx.closeDropDown(); })("positionChange", function NzTreeSelectComponent_Template_ng_template_positionChange_0_listener($event) { return ctx.onPositionChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, NzTreeSelectComponent_ng_container_2_Template, 4, 7, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, NzTreeSelectComponent_nz_select_search_3_Template, 1, 4, "nz-select-search", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, NzTreeSelectComponent_nz_select_placeholder_4_Template, 1, 3, "nz-select-placeholder", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, NzTreeSelectComponent_nz_select_item_5_Template, 1, 3, "nz-select-item", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, NzTreeSelectComponent_nz_select_arrow_6_Template, 1, 0, "nz-select-arrow", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, NzTreeSelectComponent_nz_select_clear_7_Template, 1, 0, "nz-select-clear", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("cdkConnectedOverlayOrigin", ctx.cdkOverlayOrigin)("cdkConnectedOverlayOpen", ctx.nzOpen)("cdkConnectedOverlayHasBackdrop", true)("cdkConnectedOverlayTransformOriginOn", ".ant-select-tree-dropdown")("cdkConnectedOverlayMinWidth", ctx.nzDropdownMatchSelectWidth ? null : ctx.triggerWidth)("cdkConnectedOverlayWidth", ctx.nzDropdownMatchSelectWidth ? ctx.triggerWidth : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isMultiple);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.nzShowSearch);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.nzPlaceHolder && ctx.selectedNodes.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isMultiple && ctx.selectedNodes.length === 1 && !ctx.isComposing && ctx.inputValue === "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isMultiple);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.nzAllowClear && !ctx.nzDisabled && ctx.selectedNodes.length);
    } }, directives: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["CdkConnectedOverlay"], ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_15__["NzConnectedOverlayDirective"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["CdkOverlayOrigin"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgClass"], ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_7__["NzNoAnimationDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgStyle"], ng_zorro_antd_tree__WEBPACK_IMPORTED_MODULE_11__["NzTreeComponent"], ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_16__["NzEmbedEmptyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_10__["NzSelectItemComponent"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_10__["NzSelectSearchComponent"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_10__["NzSelectPlaceholderComponent"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_10__["NzSelectArrowComponent"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_10__["NzSelectClearComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_14__["SlicePipe"]], encapsulation: 2, data: { animation: [ng_zorro_antd_core_animation__WEBPACK_IMPORTED_MODULE_5__["slideMotion"], ng_zorro_antd_core_animation__WEBPACK_IMPORTED_MODULE_5__["zoomMotion"]] } });
NzTreeSelectComponent.ctorParameters = () => [
    { type: NzTreeSelectService },
    { type: ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_6__["NzConfigService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },
    { type: ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_7__["NzNoAnimationDirective"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Host"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }] }
];
NzTreeSelectComponent.propDecorators = {
    nzAllowClear: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzShowExpand: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzShowLine: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzDropdownMatchSelectWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzCheckable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzHideUnMatched: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzShowIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzShowSearch: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzAsyncData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzMultiple: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzDefaultExpandAll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzCheckStrictly: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzVirtualItemSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzVirtualMaxBufferPx: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzVirtualMinBufferPx: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzVirtualHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzExpandedIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzNotFoundContent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzNodes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzPlaceHolder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzDropdownStyle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzDropdownClassName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzExpandedKeys: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzDisplayWith: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzMaxTagCount: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzMaxTagPlaceholder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzOpenChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    nzCleared: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    nzRemoved: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    nzExpandChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    nzTreeClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    nzTreeCheckBoxChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    nzSelectSearchComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_10__["NzSelectSearchComponent"], { static: false },] }],
    treeRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['treeRef', { static: false },] }],
    cdkOverlayOrigin: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["CdkOverlayOrigin"], { static: true },] }],
    cdkConnectedOverlay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["CdkConnectedOverlay"], { static: false },] }],
    nzTreeTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    nzTreeTemplateChild: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"], args: ['nzTreeTemplate', { static: true },] }]
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_9__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], NzTreeSelectComponent.prototype, "nzAllowClear", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_9__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], NzTreeSelectComponent.prototype, "nzShowExpand", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_9__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], NzTreeSelectComponent.prototype, "nzShowLine", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_9__["InputBoolean"])(),
    Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_6__["WithConfig"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], NzTreeSelectComponent.prototype, "nzDropdownMatchSelectWidth", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_9__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], NzTreeSelectComponent.prototype, "nzCheckable", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_9__["InputBoolean"])(),
    Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_6__["WithConfig"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], NzTreeSelectComponent.prototype, "nzHideUnMatched", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_9__["InputBoolean"])(),
    Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_6__["WithConfig"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], NzTreeSelectComponent.prototype, "nzShowIcon", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_9__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], NzTreeSelectComponent.prototype, "nzShowSearch", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_9__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], NzTreeSelectComponent.prototype, "nzDisabled", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_9__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], NzTreeSelectComponent.prototype, "nzAsyncData", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_9__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], NzTreeSelectComponent.prototype, "nzMultiple", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_9__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], NzTreeSelectComponent.prototype, "nzDefaultExpandAll", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_9__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], NzTreeSelectComponent.prototype, "nzCheckStrictly", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_6__["WithConfig"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], NzTreeSelectComponent.prototype, "nzSize", void 0);
const ɵNzTreeSelectService_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](NzTreeSelectService);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](NzTreeSelectService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"]
    }], null, null); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](NzTreeSelectComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                selector: 'nz-tree-select',
                exportAs: 'nzTreeSelect',
                animations: [ng_zorro_antd_core_animation__WEBPACK_IMPORTED_MODULE_5__["slideMotion"], ng_zorro_antd_core_animation__WEBPACK_IMPORTED_MODULE_5__["zoomMotion"]],
                template: `
    <ng-template
      cdkConnectedOverlay
      nzConnectedOverlay
      [cdkConnectedOverlayOrigin]="cdkOverlayOrigin"
      [cdkConnectedOverlayOpen]="nzOpen"
      [cdkConnectedOverlayHasBackdrop]="true"
      [cdkConnectedOverlayTransformOriginOn]="'.ant-select-tree-dropdown'"
      [cdkConnectedOverlayMinWidth]="$any(nzDropdownMatchSelectWidth ? null : triggerWidth)"
      [cdkConnectedOverlayWidth]="$any(nzDropdownMatchSelectWidth ? triggerWidth : null)"
      (backdropClick)="closeDropDown()"
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
          [@zoomMotion]
          [@.disabled]="noAnimation?.nzNoAnimation"
          [nzNoAnimation]="noAnimation?.nzNoAnimation"
          [deletable]="true"
          [disabled]="node.isDisabled || nzDisabled"
          [label]="nzDisplayWith(node)"
          (@zoomMotion.done)="updatePosition()"
          (delete)="removeSelected(node, true)"
        ></nz-select-item>

        <nz-select-item
          *ngIf="selectedNodes.length > nzMaxTagCount"
          [@zoomMotion]
          (@zoomMotion.done)="updatePosition()"
          [@.disabled]="noAnimation?.nzNoAnimation"
          [nzNoAnimation]="noAnimation?.nzNoAnimation"
          [contentTemplateOutlet]="nzMaxTagPlaceholder"
          [contentTemplateOutletContext]="selectedNodes | slice: nzMaxTagCount"
          [deletable]="false"
          [disabled]="false"
          [label]="'+ ' + (selectedNodes.length - nzMaxTagCount) + ' ...'"
        ></nz-select-item>
      </ng-container>

      <nz-select-search
        *ngIf="nzShowSearch"
        (keydown)="onKeyDownInput($event)"
        (isComposingChange)="isComposing = $event"
        (valueChange)="setInputValue($event)"
        [value]="inputValue"
        [mirrorSync]="isMultiple"
        [disabled]="nzDisabled"
        [showInput]="nzOpen"
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
                        provide: ng_zorro_antd_core_tree__WEBPACK_IMPORTED_MODULE_8__["NzTreeHigherOrderServiceToken"],
                        useFactory: higherOrderServiceFactory,
                        deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_3__["Self"](), _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injector"]]]
                    },
                    {
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["forwardRef"])((() => NzTreeSelectComponent)),
                        multi: true
                    }
                ],
                host: {
                    '[class.ant-select-lg]': 'nzSize==="large"',
                    '[class.ant-select-sm]': 'nzSize==="small"',
                    '[class.ant-select-enabled]': '!nzDisabled',
                    '[class.ant-select-disabled]': 'nzDisabled',
                    '[class.ant-select-single]': '!isMultiple',
                    '[class.ant-select-show-arrow]': '!isMultiple',
                    '[class.ant-select-show-search]': '!isMultiple',
                    '[class.ant-select-multiple]': 'isMultiple',
                    '[class.ant-select-allow-clear]': 'nzAllowClear',
                    '[class.ant-select-open]': 'nzOpen',
                    '(click)': 'trigger()'
                }
            }]
    }], function () { return [{ type: NzTreeSelectService }, { type: ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_6__["NzConfigService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }, { type: ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_7__["NzNoAnimationDirective"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Host"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }] }]; }, { nzAllowClear: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzShowExpand: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzShowLine: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzDropdownMatchSelectWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzCheckable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzHideUnMatched: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzShowIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzShowSearch: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzAsyncData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzMultiple: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzDefaultExpandAll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzCheckStrictly: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzVirtualItemSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzVirtualMaxBufferPx: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzVirtualMinBufferPx: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzVirtualHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzNodes: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzOpen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzPlaceHolder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzDropdownStyle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzDisplayWith: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzMaxTagPlaceholder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzOpenChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }], nzCleared: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }], nzRemoved: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }], nzExpandChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }], nzTreeClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }], nzTreeCheckBoxChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }], nzExpandedKeys: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzExpandedIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzNotFoundContent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzDropdownClassName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzMaxTagCount: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzSelectSearchComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: [ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_10__["NzSelectSearchComponent"], { static: false }]
        }], treeRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: ['treeRef', { static: false }]
        }], cdkOverlayOrigin: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["CdkOverlayOrigin"], { static: true }]
        }], cdkConnectedOverlay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["CdkConnectedOverlay"], { static: false }]
        }], nzTreeTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], nzTreeTemplateChild: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"],
            args: ['nzTreeTemplate', { static: true }]
        }] }); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzTreeSelectModule {
}
/** @nocollapse */
NzTreeSelectModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: NzTreeSelectModule });
/** @nocollapse */
NzTreeSelectModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function NzTreeSelectModule_Factory(t) { return new (t || NzTreeSelectModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_14__["CommonModule"],
            _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["OverlayModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_10__["NzSelectModule"],
            ng_zorro_antd_tree__WEBPACK_IMPORTED_MODULE_11__["NzTreeModule"],
            ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_17__["NzIconModule"],
            ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_16__["NzEmptyModule"],
            ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_15__["NzOverlayModule"],
            ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_7__["NzNoAnimationModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](NzTreeSelectModule, { declarations: function () { return [NzTreeSelectComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_14__["CommonModule"],
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["OverlayModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_10__["NzSelectModule"],
        ng_zorro_antd_tree__WEBPACK_IMPORTED_MODULE_11__["NzTreeModule"],
        ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_17__["NzIconModule"],
        ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_16__["NzEmptyModule"],
        ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_15__["NzOverlayModule"],
        ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_7__["NzNoAnimationModule"]]; }, exports: function () { return [NzTreeSelectComponent]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](NzTreeSelectModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_14__["CommonModule"],
                    _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["OverlayModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_10__["NzSelectModule"],
                    ng_zorro_antd_tree__WEBPACK_IMPORTED_MODULE_11__["NzTreeModule"],
                    ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_17__["NzIconModule"],
                    ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_16__["NzEmptyModule"],
                    ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_15__["NzOverlayModule"],
                    ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_7__["NzNoAnimationModule"]
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



//# sourceMappingURL=ng-zorro-antd-tree-select.js.map

/***/ })

};;
//# sourceMappingURL=empty-index-module~tree-select-index-module.js.map