exports.ids = ["code-editor-index-module~empty-index-module~space-index-module~transfer-index-module~tree-index-modu~a995d4e0"];
exports.modules = {

/***/ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-highlight.js":
/*!***********************************************************************!*\
  !*** ./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-highlight.js ***!
  \***********************************************************************/
/*! exports provided: NzHighlightModule, NzHighlightPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzHighlightModule", function() { return NzHighlightModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzHighlightPipe", function() { return NzHighlightPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



/**
 * @fileoverview added by tsickle
 * Generated from: highlight.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Regular Expressions for parsing tags and attributes
/** @type {?} */

const SURROGATE_PAIR_REGEXP = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
// ! to ~ is the ASCII range.
/** @type {?} */
const NON_ALPHANUMERIC_REGEXP = /([^\#-~ |!])/g;
/**
 * Escapes all potentially dangerous characters, so that the
 * resulting string can be safely inserted into attribute or
 * element text.
 * @param {?} value
 * @return {?}
 */
function encodeEntities(value) {
    return value
        .replace(/&/g, '&amp;')
        .replace(SURROGATE_PAIR_REGEXP, (/**
     * @param {?} match
     * @return {?}
     */
    (match) => {
        /** @type {?} */
        const hi = match.charCodeAt(0);
        /** @type {?} */
        const low = match.charCodeAt(1);
        return `&#${(hi - 0xd800) * 0x400 + (low - 0xdc00) + 0x10000};`;
    }))
        .replace(NON_ALPHANUMERIC_REGEXP, (/**
     * @param {?} match
     * @return {?}
     */
    (match) => `&#${match.charCodeAt(0)};`))
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
}
class NzHighlightPipe {
    constructor() {
        this.UNIQUE_WRAPPERS = ['##==-open_tag-==##', '##==-close_tag-==##'];
    }
    /**
     * @param {?} value
     * @param {?} highlightValue
     * @param {?=} flags
     * @param {?=} klass
     * @return {?}
     */
    transform(value, highlightValue, flags, klass) {
        if (!highlightValue) {
            return value;
        }
        // Escapes regex keyword to interpret these characters literally
        /** @type {?} */
        const searchValue = new RegExp(highlightValue.replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$&'), flags);
        /** @type {?} */
        const wrapValue = value.replace(searchValue, `${this.UNIQUE_WRAPPERS[0]}$&${this.UNIQUE_WRAPPERS[1]}`);
        return encodeEntities(wrapValue)
            .replace(new RegExp(this.UNIQUE_WRAPPERS[0], 'g'), klass ? `<span class="${klass}">` : '<span>')
            .replace(new RegExp(this.UNIQUE_WRAPPERS[1], 'g'), '</span>');
    }
}
NzHighlightPipe.ɵfac = function NzHighlightPipe_Factory(t) { return new (t || NzHighlightPipe)(); };
NzHighlightPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "nzHighlight", type: NzHighlightPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzHighlightPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'nzHighlight',
                pure: true
            }]
    }], function () { return []; }, null); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: highlight.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzHighlightModule {
}
NzHighlightModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NzHighlightModule });
NzHighlightModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NzHighlightModule_Factory(t) { return new (t || NzHighlightModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NzHighlightModule, { declarations: function () { return [NzHighlightPipe]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]; }, exports: function () { return [NzHighlightPipe]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzHighlightModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                exports: [NzHighlightPipe],
                declarations: [NzHighlightPipe]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ng-zorro-antd-core-highlight.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ng-zorro-antd-core-highlight.js.map

/***/ }),

/***/ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-tree.js":
/*!******************************************************************!*\
  !*** ./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-tree.js ***!
  \******************************************************************/
/*! exports provided: NzTreeBase, NzTreeBaseService, NzTreeHigherOrderServiceToken, NzTreeNode, flattenTreeData, getKey, getPosition, isCheckDisabled, isInArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzTreeBase", function() { return NzTreeBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzTreeBaseService", function() { return NzTreeBaseService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzTreeHigherOrderServiceToken", function() { return NzTreeHigherOrderServiceToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzTreeNode", function() { return NzTreeNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flattenTreeData", function() { return flattenTreeData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getKey", function() { return getKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPosition", function() { return getPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isCheckDisabled", function() { return isCheckDisabled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isInArray", function() { return isInArray; });
/* harmony import */ var ng_zorro_antd_core_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng-zorro-antd/core/logger */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-logger.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




/**
 * @fileoverview added by tsickle
 * Generated from: nz-tree-base-node.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */

function FlattenNode() { }
if (false) {}
/**
 * @record
 */
function NzTreeNodeOptions() { }
if (false) {}
class NzTreeNode {
    /**
     * Init nzTreeNode
     * @param {?} option
     * @param {?=} parent
     * @param {?=} service
     */
    constructor(option, parent = null, service = null) {
        this.level = 0;
        if (option instanceof NzTreeNode) {
            return option;
        }
        this.service = service || null;
        this.origin = option;
        this.key = option.key;
        this.parentNode = parent;
        this._title = option.title || '---';
        this._icon = option.icon || '';
        this._isLeaf = option.isLeaf || false;
        this._children = [];
        // option params
        this._isChecked = option.checked || false;
        this._isSelectable = option.disabled || option.selectable !== false;
        this._isDisabled = option.disabled || false;
        this._isDisableCheckbox = option.disableCheckbox || false;
        this._isExpanded = option.isLeaf ? false : option.expanded || false;
        this._isHalfChecked = false;
        this._isSelected = (!option.disabled && option.selected) || false;
        this._isLoading = false;
        this.isMatched = false;
        /**
         * parent's checked status will affect children while initializing
         */
        if (parent) {
            this.level = parent.level + 1;
        }
        else {
            this.level = 0;
        }
        if (typeof option.children !== 'undefined' && option.children !== null) {
            option.children.forEach((/**
             * @param {?} nodeOptions
             * @return {?}
             */
            nodeOptions => {
                /** @type {?} */
                const s = this.treeService;
                if (s && !s.isCheckStrictly && option.checked && !option.disabled && !nodeOptions.disabled && !nodeOptions.disableCheckbox) {
                    nodeOptions.checked = option.checked;
                }
                this._children.push(new NzTreeNode(nodeOptions, this));
            }));
        }
    }
    /**
     * @return {?}
     */
    get treeService() {
        return this.service || (this.parentNode && this.parentNode.treeService);
    }
    /**
     * auto generate
     * get
     * set
     * @return {?}
     */
    get title() {
        return this._title;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set title(value) {
        this._title = value;
        this.update();
    }
    /**
     * @return {?}
     */
    get icon() {
        return this._icon;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set icon(value) {
        this._icon = value;
        this.update();
    }
    /**
     * @return {?}
     */
    get children() {
        return this._children;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set children(value) {
        this._children = value;
        this.update();
    }
    /**
     * @return {?}
     */
    get isLeaf() {
        return this._isLeaf;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set isLeaf(value) {
        this._isLeaf = value;
        this.update();
    }
    /**
     * @return {?}
     */
    get isChecked() {
        return this._isChecked;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set isChecked(value) {
        this._isChecked = value;
        this._isAllChecked = value;
        this.origin.checked = value;
        this.afterValueChange('isChecked');
    }
    /**
     * @return {?}
     */
    get isAllChecked() {
        return this._isAllChecked;
    }
    /**
     * @deprecated Maybe removed in next major version, use `isChecked` instead.
     * @param {?} value
     * @return {?}
     */
    set isAllChecked(value) {
        Object(ng_zorro_antd_core_logger__WEBPACK_IMPORTED_MODULE_0__["warnDeprecation"])(`'isAllChecked' is going to be removed in 9.0.0. Please use 'isChecked' instead.`);
        this._isAllChecked = value;
    }
    /**
     * @return {?}
     */
    get isHalfChecked() {
        return this._isHalfChecked;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set isHalfChecked(value) {
        this._isHalfChecked = value;
        this.afterValueChange('isHalfChecked');
    }
    /**
     * @return {?}
     */
    get isSelectable() {
        return this._isSelectable;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set isSelectable(value) {
        this._isSelectable = value;
        this.update();
    }
    /**
     * @return {?}
     */
    get isDisabled() {
        return this._isDisabled;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set isDisabled(value) {
        this._isDisabled = value;
        this.update();
    }
    /**
     * @return {?}
     */
    get isDisableCheckbox() {
        return this._isDisableCheckbox;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set isDisableCheckbox(value) {
        this._isDisableCheckbox = value;
        this.update();
    }
    /**
     * @return {?}
     */
    get isExpanded() {
        return this._isExpanded;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set isExpanded(value) {
        this._isExpanded = value;
        this.origin.expanded = value;
        this.afterValueChange('isExpanded');
        this.afterValueChange('reRender');
    }
    /**
     * @return {?}
     */
    get isSelected() {
        return this._isSelected;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set isSelected(value) {
        this._isSelected = value;
        this.origin.selected = value;
        this.afterValueChange('isSelected');
    }
    /**
     * @return {?}
     */
    get isLoading() {
        return this._isLoading;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set isLoading(value) {
        this._isLoading = value;
        this.update();
    }
    /**
     * @param {?=} checked
     * @param {?=} halfChecked
     * @return {?}
     */
    setSyncChecked(checked = false, halfChecked = false) {
        this.setChecked(checked, halfChecked);
        if (this.treeService && !this.treeService.isCheckStrictly) {
            this.treeService.conduct(this);
        }
    }
    /**
     * @deprecated Maybe removed in next major version, use `isChecked` instead.
     * @param {?=} checked
     * @param {?=} halfChecked
     * @return {?}
     */
    setChecked(checked = false, halfChecked = false) {
        Object(ng_zorro_antd_core_logger__WEBPACK_IMPORTED_MODULE_0__["warnDeprecation"])(`'setChecked' is going to be removed in 9.0.0. Please use 'isChecked' instead.`);
        this.origin.checked = checked;
        this.isChecked = checked;
        this.isAllChecked = checked;
        this.isHalfChecked = halfChecked;
    }
    /**
     * \@not-deprecated Maybe removed in next major version, use `isExpanded` instead.
     * We need it until tree refactoring is finished
     * @param {?} value
     * @return {?}
     */
    setExpanded(value) {
        this._isExpanded = value;
        this.origin.expanded = value;
        this.afterValueChange('isExpanded');
    }
    /**
     * @deprecated Maybe removed in next major version, use `isSelected` instead.
     * @param {?} value
     * @return {?}
     */
    setSelected(value) {
        Object(ng_zorro_antd_core_logger__WEBPACK_IMPORTED_MODULE_0__["warnDeprecation"])(`'setSelected' is going to be removed in 9.0.0. Please use 'isExpanded' isSelected.`);
        if (this.isDisabled) {
            return;
        }
        this.isSelected = value;
    }
    /**
     * @return {?}
     */
    getParentNode() {
        return this.parentNode;
    }
    /**
     * @return {?}
     */
    getChildren() {
        return this.children;
    }
    /**
     * Support appending child nodes by position. Leaf node cannot be appended.
     * @param {?} children
     * @param {?=} childPos
     * @return {?}
     */
    addChildren(children, childPos = -1) {
        if (!this.isLeaf) {
            children.forEach((/**
             * @param {?} node
             * @return {?}
             */
            node => {
                /** @type {?} */
                const refreshLevel = (/**
                 * @param {?} n
                 * @return {?}
                 */
                (n) => {
                    n.getChildren().forEach((/**
                     * @param {?} c
                     * @return {?}
                     */
                    c => {
                        c.level = (/** @type {?} */ (c.getParentNode())).level + 1;
                        // flush origin
                        c.origin.level = c.level;
                        refreshLevel(c);
                    }));
                });
                /** @type {?} */
                let child = node;
                if (child instanceof NzTreeNode) {
                    child.parentNode = this;
                }
                else {
                    child = new NzTreeNode(node, this);
                }
                child.level = this.level + 1;
                child.origin.level = child.level;
                refreshLevel(child);
                try {
                    childPos === -1 ? this.children.push(child) : this.children.splice(childPos, 0, child);
                    // flush origin
                }
                catch (e) { }
            }));
            this.origin.children = this.getChildren().map((/**
             * @param {?} v
             * @return {?}
             */
            v => v.origin));
            // remove loading state
            this.isLoading = false;
        }
        this.afterValueChange('addChildren');
        this.afterValueChange('reRender');
    }
    /**
     * @return {?}
     */
    clearChildren() {
        // refresh checked state
        this.afterValueChange('clearChildren');
        this.children = [];
        this.origin.children = [];
        this.afterValueChange('reRender');
    }
    /**
     * @return {?}
     */
    remove() {
        /** @type {?} */
        const parentNode = this.getParentNode();
        if (parentNode) {
            parentNode.children = parentNode.getChildren().filter((/**
             * @param {?} v
             * @return {?}
             */
            v => v.key !== this.key));
            parentNode.origin.children = (/** @type {?} */ (parentNode.origin.children)).filter((/**
             * @param {?} v
             * @return {?}
             */
            v => v.key !== this.key));
            this.afterValueChange('remove');
            this.afterValueChange('reRender');
        }
    }
    /**
     * @param {?} key
     * @return {?}
     */
    afterValueChange(key) {
        if (this.treeService) {
            switch (key) {
                case 'isChecked':
                    this.treeService.setCheckedNodeList(this);
                    break;
                case 'isHalfChecked':
                    this.treeService.setHalfCheckedNodeList(this);
                    break;
                case 'isExpanded':
                    this.treeService.setExpandedNodeList(this);
                    break;
                case 'isSelected':
                    this.treeService.setNodeActive(this);
                    break;
                case 'clearChildren':
                    this.treeService.afterRemove(this.getChildren());
                    break;
                case 'remove':
                    this.treeService.afterRemove([this]);
                    break;
                case 'reRender':
                    this.treeService.flattenTreeData(this.treeService.rootNodes, this.treeService.getExpandedNodeList().map((/**
                     * @param {?} v
                     * @return {?}
                     */
                    v => v.key)));
                    break;
            }
        }
        this.update();
    }
    /**
     * @return {?}
     */
    update() {
        if (this.component) {
            this.component.markForCheck();
        }
    }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: nz-tree-base.definitions.ts
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
function NzFormatEmitEvent() { }
if (false) {}
/**
 * @record
 */
function NzFormatBeforeDropEvent() { }
if (false) {}
/**
 * @record
 */
function NzTreeNodeBaseComponent() { }
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: nz-tree-base-util.ts
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
 * @param {?} node
 * @return {?}
 */
function isCheckDisabled(node) {
    const { isDisabled, isDisableCheckbox } = node;
    return !!(isDisabled || isDisableCheckbox);
}
/**
 * @param {?} needle
 * @param {?} haystack
 * @return {?}
 */
function isInArray(needle, haystack) {
    return haystack.length > 0 && haystack.indexOf(needle) > -1;
}
/**
 * @param {?} level
 * @param {?} index
 * @return {?}
 */
function getPosition(level, index) {
    return `${level}-${index}`;
}
/**
 * @param {?} key
 * @param {?} pos
 * @return {?}
 */
function getKey(key, pos) {
    if (key !== null && key !== undefined) {
        return key;
    }
    return pos;
}
/**
 * Flat nest tree data into flatten list. This is used for virtual list render.
 * @param {?=} treeNodeList Origin data node list
 * @param {?=} expandedKeys
 * need expanded keys, provides `true` means all expanded (used in `rc-tree-select`).
 * @return {?}
 */
function flattenTreeData(treeNodeList = [], expandedKeys = []) {
    /** @type {?} */
    const expandedKeySet = new Set(expandedKeys === true ? [] : expandedKeys);
    /** @type {?} */
    const flattenList = [];
    /**
     * @param {?} list
     * @param {?=} parent
     * @return {?}
     */
    function dig(list, parent = null) {
        return list.map((/**
         * @param {?} treeNode
         * @param {?} index
         * @return {?}
         */
        (treeNode, index) => {
            /** @type {?} */
            const pos = getPosition(parent ? parent.pos : '0', index);
            /** @type {?} */
            const mergedKey = getKey(treeNode.key, pos);
            treeNode.isStart = [...(parent ? parent.isStart : []), index === 0];
            treeNode.isEnd = [...(parent ? parent.isEnd : []), index === list.length - 1];
            // Add FlattenDataNode into list
            // TODO: only need data here.
            /** @type {?} */
            const flattenNode = {
                parent,
                pos,
                children: [],
                data: treeNode,
                isStart: [...(parent ? parent.isStart : []), index === 0],
                isEnd: [...(parent ? parent.isEnd : []), index === list.length - 1]
            };
            flattenList.push(flattenNode);
            // Loop treeNode children
            if (expandedKeys === true || expandedKeySet.has(mergedKey) || treeNode.isExpanded) {
                flattenNode.children = dig(treeNode.children || [], flattenNode);
            }
            else {
                flattenNode.children = [];
            }
            return flattenNode;
        }));
    }
    dig(treeNodeList);
    return flattenList;
}

/**
 * @fileoverview added by tsickle
 * Generated from: nz-tree-base.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzTreeBaseService {
    constructor() {
        this.DRAG_SIDE_RANGE = 0.25;
        this.DRAG_MIN_GAP = 2;
        this.isCheckStrictly = false;
        this.isMultiple = false;
        this.rootNodes = [];
        this.flattenNodes$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.selectedNodeList = [];
        this.expandedNodeList = [];
        this.checkedNodeList = [];
        this.halfCheckedNodeList = [];
        this.matchedNodeList = [];
    }
    /**
     * reset tree nodes will clear default node list
     * @param {?} nzNodes
     * @return {?}
     */
    initTree(nzNodes) {
        this.rootNodes = nzNodes;
        this.expandedNodeList = [];
        this.selectedNodeList = [];
        this.halfCheckedNodeList = [];
        this.checkedNodeList = [];
        this.matchedNodeList = [];
    }
    /**
     * @param {?} nzNodes
     * @param {?=} expandedKeys
     * @return {?}
     */
    flattenTreeData(nzNodes, expandedKeys = []) {
        this.flattenNodes$.next(flattenTreeData(nzNodes, expandedKeys).map((/**
         * @param {?} item
         * @return {?}
         */
        item => item.data)));
    }
    /**
     * @return {?}
     */
    getSelectedNode() {
        return this.selectedNode;
    }
    /**
     * get some list
     * @return {?}
     */
    getSelectedNodeList() {
        return this.conductNodeState('select');
    }
    /**
     * return checked nodes
     * @return {?}
     */
    getCheckedNodeList() {
        return this.conductNodeState('check');
    }
    /**
     * @return {?}
     */
    getHalfCheckedNodeList() {
        return this.conductNodeState('halfCheck');
    }
    /**
     * return expanded nodes
     * @return {?}
     */
    getExpandedNodeList() {
        return this.conductNodeState('expand');
    }
    /**
     * return search matched nodes
     * @return {?}
     */
    getMatchedNodeList() {
        return this.conductNodeState('match');
    }
    /**
     * @param {?} value
     * @return {?}
     */
    isArrayOfNzTreeNode(value) {
        return value.every((/**
         * @param {?} item
         * @return {?}
         */
        item => item instanceof NzTreeNode));
    }
    /**
     * set drag node
     * @param {?} node
     * @return {?}
     */
    setSelectedNode(node) {
        this.selectedNode = node;
    }
    /**
     * set node selected status
     * @param {?} node
     * @return {?}
     */
    setNodeActive(node) {
        if (!this.isMultiple && node.isSelected) {
            this.selectedNodeList.forEach((/**
             * @param {?} n
             * @return {?}
             */
            n => {
                if (node.key !== n.key) {
                    // reset other nodes
                    n.isSelected = false;
                }
            }));
            // single mode: remove pre node
            this.selectedNodeList = [];
        }
        this.setSelectedNodeList(node, this.isMultiple);
    }
    /**
     * add or remove node to selectedNodeList
     * @param {?} node
     * @param {?=} isMultiple
     * @return {?}
     */
    setSelectedNodeList(node, isMultiple = false) {
        /** @type {?} */
        const index = this.getIndexOfArray(this.selectedNodeList, node.key);
        if (isMultiple) {
            if (node.isSelected && index === -1) {
                this.selectedNodeList.push(node);
            }
        }
        else {
            if (node.isSelected && index === -1) {
                this.selectedNodeList = [node];
            }
        }
        if (!node.isSelected) {
            this.selectedNodeList = this.selectedNodeList.filter((/**
             * @param {?} n
             * @return {?}
             */
            n => n.key !== node.key));
        }
    }
    /**
     * merge checked nodes
     * @param {?} node
     * @return {?}
     */
    setHalfCheckedNodeList(node) {
        /** @type {?} */
        const index = this.getIndexOfArray(this.halfCheckedNodeList, node.key);
        if (node.isHalfChecked && index === -1) {
            this.halfCheckedNodeList.push(node);
        }
        else if (!node.isHalfChecked && index > -1) {
            this.halfCheckedNodeList = this.halfCheckedNodeList.filter((/**
             * @param {?} n
             * @return {?}
             */
            n => node.key !== n.key));
        }
    }
    /**
     * @param {?} node
     * @return {?}
     */
    setCheckedNodeList(node) {
        /** @type {?} */
        const index = this.getIndexOfArray(this.checkedNodeList, node.key);
        if (node.isChecked && index === -1) {
            this.checkedNodeList.push(node);
        }
        else if (!node.isChecked && index > -1) {
            this.checkedNodeList = this.checkedNodeList.filter((/**
             * @param {?} n
             * @return {?}
             */
            n => node.key !== n.key));
        }
    }
    /**
     * conduct checked/selected/expanded keys
     * @param {?=} type
     * @return {?}
     */
    conductNodeState(type = 'check') {
        /** @type {?} */
        let resultNodesList = [];
        switch (type) {
            case 'select':
                resultNodesList = this.selectedNodeList;
                break;
            case 'expand':
                resultNodesList = this.expandedNodeList;
                break;
            case 'match':
                resultNodesList = this.matchedNodeList;
                break;
            case 'check':
                resultNodesList = this.checkedNodeList;
                /** @type {?} */
                const isIgnore = (/**
                 * @param {?} node
                 * @return {?}
                 */
                (node) => {
                    /** @type {?} */
                    const parentNode = node.getParentNode();
                    if (parentNode) {
                        if (this.checkedNodeList.findIndex((/**
                         * @param {?} n
                         * @return {?}
                         */
                        n => n.key === parentNode.key)) > -1) {
                            return true;
                        }
                        else {
                            return isIgnore(parentNode);
                        }
                    }
                    return false;
                });
                // merge checked
                if (!this.isCheckStrictly) {
                    resultNodesList = this.checkedNodeList.filter((/**
                     * @param {?} n
                     * @return {?}
                     */
                    n => !isIgnore(n)));
                }
                break;
            case 'halfCheck':
                if (!this.isCheckStrictly) {
                    resultNodesList = this.halfCheckedNodeList;
                }
                break;
        }
        return resultNodesList;
    }
    /**
     * set expanded nodes
     * @param {?} node
     * @return {?}
     */
    setExpandedNodeList(node) {
        if (node.isLeaf) {
            return;
        }
        /** @type {?} */
        const index = this.getIndexOfArray(this.expandedNodeList, node.key);
        if (node.isExpanded && index === -1) {
            this.expandedNodeList.push(node);
        }
        else if (!node.isExpanded && index > -1) {
            this.expandedNodeList.splice(index, 1);
        }
    }
    /**
     * @param {?} node
     * @return {?}
     */
    setMatchedNodeList(node) {
        /** @type {?} */
        const index = this.getIndexOfArray(this.matchedNodeList, node.key);
        if (node.isMatched && index === -1) {
            this.matchedNodeList.push(node);
        }
        else if (!node.isMatched && index > -1) {
            this.matchedNodeList.splice(index, 1);
        }
    }
    /**
     * check state
     * @param {?=} isCheckStrictly
     * @return {?}
     */
    refreshCheckState(isCheckStrictly = false) {
        if (isCheckStrictly) {
            return;
        }
        this.checkedNodeList.forEach((/**
         * @param {?} node
         * @return {?}
         */
        node => {
            this.conduct(node);
        }));
    }
    // reset other node checked state based current node
    /**
     * @param {?} node
     * @return {?}
     */
    conduct(node) {
        /** @type {?} */
        const isChecked = node.isChecked;
        if (node) {
            this.conductUp(node);
            this.conductDown(node, isChecked);
        }
    }
    /**
     * 1、children half checked
     * 2、children all checked, parent checked
     * 3、no children checked
     * @param {?} node
     * @return {?}
     */
    conductUp(node) {
        /** @type {?} */
        const parentNode = node.getParentNode();
        if (parentNode) {
            if (!isCheckDisabled(parentNode)) {
                if (parentNode.children.every((/**
                 * @param {?} child
                 * @return {?}
                 */
                child => isCheckDisabled(child) || (!child.isHalfChecked && child.isChecked)))) {
                    parentNode.isChecked = true;
                    parentNode.isHalfChecked = false;
                }
                else if (parentNode.children.some((/**
                 * @param {?} child
                 * @return {?}
                 */
                child => child.isHalfChecked || child.isChecked))) {
                    parentNode.isChecked = false;
                    parentNode.isHalfChecked = true;
                }
                else {
                    parentNode.isChecked = false;
                    parentNode.isHalfChecked = false;
                }
            }
            this.setCheckedNodeList(parentNode);
            this.setHalfCheckedNodeList(parentNode);
            this.conductUp(parentNode);
        }
    }
    /**
     * reset child check state
     * @param {?} node
     * @param {?} value
     * @return {?}
     */
    conductDown(node, value) {
        if (!isCheckDisabled(node)) {
            node.isChecked = value;
            node.isHalfChecked = false;
            this.setCheckedNodeList(node);
            this.setHalfCheckedNodeList(node);
            node.children.forEach((/**
             * @param {?} n
             * @return {?}
             */
            n => {
                this.conductDown(n, value);
            }));
        }
    }
    /**
     * flush after delete node
     * @param {?} nodes
     * @return {?}
     */
    afterRemove(nodes) {
        // to reset selectedNodeList & expandedNodeList
        /** @type {?} */
        const loopNode = (/**
         * @param {?} node
         * @return {?}
         */
        (node) => {
            // remove selected node
            this.selectedNodeList = this.selectedNodeList.filter((/**
             * @param {?} n
             * @return {?}
             */
            n => n.key !== node.key));
            // remove expanded node
            this.expandedNodeList = this.expandedNodeList.filter((/**
             * @param {?} n
             * @return {?}
             */
            n => n.key !== node.key));
            // remove checked node
            this.checkedNodeList = this.checkedNodeList.filter((/**
             * @param {?} n
             * @return {?}
             */
            n => n.key !== node.key));
            if (node.children) {
                node.children.forEach((/**
                 * @param {?} child
                 * @return {?}
                 */
                child => {
                    loopNode(child);
                }));
            }
        });
        nodes.forEach((/**
         * @param {?} n
         * @return {?}
         */
        n => {
            loopNode(n);
        }));
        this.refreshCheckState(this.isCheckStrictly);
    }
    /**
     * drag event
     * @param {?} node
     * @return {?}
     */
    refreshDragNode(node) {
        if (node.children.length === 0) {
            // until root
            this.conductUp(node);
        }
        else {
            node.children.forEach((/**
             * @param {?} child
             * @return {?}
             */
            child => {
                this.refreshDragNode(child);
            }));
        }
    }
    // reset node level
    /**
     * @param {?} node
     * @return {?}
     */
    resetNodeLevel(node) {
        /** @type {?} */
        const parentNode = node.getParentNode();
        if (parentNode) {
            node.level = parentNode.level + 1;
        }
        else {
            node.level = 0;
        }
        for (const child of node.children) {
            this.resetNodeLevel(child);
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    calcDropPosition(event) {
        const { clientY } = event;
        // to fix firefox undefined
        const { top, bottom, height } = event.srcElement
            ? ((/** @type {?} */ (event.srcElement))).getBoundingClientRect()
            : ((/** @type {?} */ (event.target))).getBoundingClientRect();
        /** @type {?} */
        const des = Math.max(height * this.DRAG_SIDE_RANGE, this.DRAG_MIN_GAP);
        if (clientY <= top + des) {
            return -1;
        }
        else if (clientY >= bottom - des) {
            return 1;
        }
        return 0;
    }
    /**
     * drop
     * 0: inner -1: pre 1: next
     * @param {?} targetNode
     * @param {?=} dragPos
     * @return {?}
     */
    dropAndApply(targetNode, dragPos = -1) {
        if (!targetNode || dragPos > 1) {
            return;
        }
        /** @type {?} */
        const treeService = targetNode.treeService;
        /** @type {?} */
        const targetParent = targetNode.getParentNode();
        /** @type {?} */
        const isSelectedRootNode = this.selectedNode.getParentNode();
        // remove the dragNode
        if (isSelectedRootNode) {
            isSelectedRootNode.children = isSelectedRootNode.children.filter((/**
             * @param {?} n
             * @return {?}
             */
            n => n.key !== this.selectedNode.key));
        }
        else {
            this.rootNodes = this.rootNodes.filter((/**
             * @param {?} n
             * @return {?}
             */
            n => n.key !== this.selectedNode.key));
        }
        switch (dragPos) {
            case 0:
                targetNode.addChildren([this.selectedNode]);
                this.resetNodeLevel(targetNode);
                break;
            case -1:
            case 1:
                /** @type {?} */
                const tIndex = dragPos === 1 ? 1 : 0;
                if (targetParent) {
                    targetParent.addChildren([this.selectedNode], targetParent.children.indexOf(targetNode) + tIndex);
                    /** @type {?} */
                    const parentNode = this.selectedNode.getParentNode();
                    if (parentNode) {
                        this.resetNodeLevel(parentNode);
                    }
                }
                else {
                    /** @type {?} */
                    const targetIndex = this.rootNodes.indexOf(targetNode) + tIndex;
                    // Insert root node.
                    this.rootNodes.splice(targetIndex, 0, this.selectedNode);
                    this.rootNodes[targetIndex].parentNode = null;
                    this.resetNodeLevel(this.rootNodes[targetIndex]);
                }
                break;
        }
        // flush all nodes
        this.rootNodes.forEach((/**
         * @param {?} child
         * @return {?}
         */
        child => {
            if (!child.treeService) {
                child.service = treeService;
            }
            this.refreshDragNode(child);
        }));
    }
    /**
     * emit Structure
     * eventName
     * node
     * event: MouseEvent / DragEvent
     * dragNode
     * @param {?} eventName
     * @param {?} node
     * @param {?} event
     * @return {?}
     */
    formatEvent(eventName, node, event) {
        /** @type {?} */
        const emitStructure = {
            eventName: eventName,
            node: node,
            event: event
        };
        switch (eventName) {
            case 'dragstart':
            case 'dragenter':
            case 'dragover':
            case 'dragleave':
            case 'drop':
            case 'dragend':
                Object.assign(emitStructure, { dragNode: this.getSelectedNode() });
                break;
            case 'click':
            case 'dblclick':
                Object.assign(emitStructure, { selectedKeys: this.selectedNodeList });
                Object.assign(emitStructure, { nodes: this.selectedNodeList });
                Object.assign(emitStructure, { keys: this.selectedNodeList.map((/**
                     * @param {?} n
                     * @return {?}
                     */
                    n => n.key)) });
                break;
            case 'check':
                /** @type {?} */
                const checkedNodeList = this.getCheckedNodeList();
                Object.assign(emitStructure, { checkedKeys: checkedNodeList });
                Object.assign(emitStructure, { nodes: checkedNodeList });
                Object.assign(emitStructure, { keys: checkedNodeList.map((/**
                     * @param {?} n
                     * @return {?}
                     */
                    n => n.key)) });
                break;
            case 'search':
                Object.assign(emitStructure, { matchedKeys: this.getMatchedNodeList() });
                Object.assign(emitStructure, { nodes: this.getMatchedNodeList() });
                Object.assign(emitStructure, { keys: this.getMatchedNodeList().map((/**
                     * @param {?} n
                     * @return {?}
                     */
                    n => n.key)) });
                break;
            case 'expand':
                Object.assign(emitStructure, { nodes: this.expandedNodeList });
                Object.assign(emitStructure, { keys: this.expandedNodeList.map((/**
                     * @param {?} n
                     * @return {?}
                     */
                    n => n.key)) });
                break;
        }
        return emitStructure;
    }
    /**
     * New functions for flatten nodes
     * @param {?} list
     * @param {?} key
     * @return {?}
     */
    getIndexOfArray(list, key) {
        return list.findIndex((/**
         * @param {?} v
         * @return {?}
         */
        v => v.key === key));
    }
    /**
     * Render by nzCheckedKeys
     * @param {?} keys
     * @param {?} checkStrictly
     * @return {?}
     */
    conductCheck(keys, checkStrictly) {
        this.checkedNodeList = [];
        this.halfCheckedNodeList = [];
        /** @type {?} */
        const calc = (/**
         * @param {?} nodes
         * @return {?}
         */
        (nodes) => {
            nodes.forEach((/**
             * @param {?} node
             * @return {?}
             */
            node => {
                if (isInArray(node.key, keys)) {
                    node.isChecked = true;
                    node.isHalfChecked = false;
                }
                else {
                    node.isChecked = false;
                    node.isHalfChecked = false;
                }
                if (node.children.length > 0) {
                    calc(node.children);
                }
            }));
        });
        calc(this.rootNodes);
        this.refreshCheckState(checkStrictly);
    }
    /**
     * @param {?=} keys
     * @return {?}
     */
    conductExpandedKeys(keys = []) {
        /** @type {?} */
        const expandedKeySet = new Set(keys === true ? [] : keys);
        this.expandedNodeList = [];
        /** @type {?} */
        const calc = (/**
         * @param {?} nodes
         * @return {?}
         */
        (nodes) => {
            nodes.forEach((/**
             * @param {?} node
             * @return {?}
             */
            node => {
                node.setExpanded(keys === true || expandedKeySet.has(node.key) || node.isExpanded === true);
                if (node.isExpanded) {
                    this.setExpandedNodeList(node);
                }
                if (node.children.length > 0) {
                    calc(node.children);
                }
            }));
        });
        calc(this.rootNodes);
    }
    /**
     * @param {?} keys
     * @param {?} isMulti
     * @return {?}
     */
    conductSelectedKeys(keys, isMulti) {
        this.selectedNodeList = [];
        /** @type {?} */
        const calc = (/**
         * @param {?} nodes
         * @return {?}
         */
        (nodes) => {
            return nodes.every((/**
             * @param {?} node
             * @return {?}
             */
            node => {
                if (isInArray(node.key, keys)) {
                    node.isSelected = true;
                    this.setSelectedNodeList(node);
                    if (!isMulti) {
                        // if not support multi select
                        return false;
                    }
                }
                else {
                    node.isSelected = false;
                }
                if (node.children.length > 0) {
                    // Recursion
                    return calc(node.children);
                }
                return true;
            }));
        });
        calc(this.rootNodes);
    }
    /**
     * Expand parent nodes by child node
     * @param {?} node
     * @return {?}
     */
    expandNodeAllParentBySearch(node) {
        /** @type {?} */
        const calc = (/**
         * @param {?} n
         * @return {?}
         */
        (n) => {
            if (n) {
                n.canHide = false;
                n.setExpanded(true);
                this.setExpandedNodeList(n);
                if (n.getParentNode()) {
                    return calc(n.getParentNode());
                }
            }
        });
        calc(node.getParentNode());
    }
}
NzTreeBaseService.ɵfac = function NzTreeBaseService_Factory(t) { return new (t || NzTreeBaseService)(); };
NzTreeBaseService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: NzTreeBaseService, factory: NzTreeBaseService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NzTreeBaseService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return []; }, null); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: nz-tree-service.resolver.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const NzTreeHigherOrderServiceToken = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('NzTreeHigherOrder');

/**
 * @fileoverview added by tsickle
 * Generated from: nz-tree-base.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzTreeBase {
    /**
     * @param {?} nzTreeService
     */
    constructor(nzTreeService) {
        this.nzTreeService = nzTreeService;
    }
    /**
     * Coerces a value({\@link any[]}) to a TreeNodes({\@link NzTreeNode[]})
     * @param {?} value
     * @return {?}
     */
    coerceTreeNodes(value) {
        /** @type {?} */
        let nodes = [];
        if (!this.nzTreeService.isArrayOfNzTreeNode(value)) {
            // has not been new NzTreeNode
            nodes = value.map((/**
             * @param {?} item
             * @return {?}
             */
            item => new NzTreeNode(item, null, this.nzTreeService)));
        }
        else {
            nodes = value.map((/**
             * @param {?} item
             * @return {?}
             */
            (item) => {
                item.service = this.nzTreeService;
                return item;
            }));
        }
        return nodes;
    }
    /**
     * Get all nodes({\@link NzTreeNode})
     * @return {?}
     */
    getTreeNodes() {
        return this.nzTreeService.rootNodes;
    }
    /**
     * Get {\@link NzTreeNode} with key
     * @param {?} key
     * @return {?}
     */
    getTreeNodeByKey(key) {
        // flat tree nodes
        /** @type {?} */
        const nodes = [];
        /** @type {?} */
        const getNode = (/**
         * @param {?} node
         * @return {?}
         */
        (node) => {
            nodes.push(node);
            node.getChildren().forEach((/**
             * @param {?} n
             * @return {?}
             */
            n => {
                getNode(n);
            }));
        });
        this.getTreeNodes().forEach((/**
         * @param {?} n
         * @return {?}
         */
        n => {
            getNode(n);
        }));
        return nodes.find((/**
         * @param {?} n
         * @return {?}
         */
        n => n.key === key)) || null;
    }
    /**
     * Get checked nodes(merged)
     * @return {?}
     */
    getCheckedNodeList() {
        return this.nzTreeService.getCheckedNodeList();
    }
    /**
     * Get selected nodes
     * @return {?}
     */
    getSelectedNodeList() {
        return this.nzTreeService.getSelectedNodeList();
    }
    /**
     * Get half checked nodes
     * @return {?}
     */
    getHalfCheckedNodeList() {
        return this.nzTreeService.getHalfCheckedNodeList();
    }
    /**
     * Get expanded nodes
     * @return {?}
     */
    getExpandedNodeList() {
        return this.nzTreeService.getExpandedNodeList();
    }
    /**
     * Get matched nodes(if nzSearchValue is not null)
     * @return {?}
     */
    getMatchedNodeList() {
        return this.nzTreeService.getMatchedNodeList();
    }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ng-zorro-antd-core-tree.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ng-zorro-antd-core-tree.js.map

/***/ }),

/***/ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-tree.js":
/*!*************************************************************!*\
  !*** ./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-tree.js ***!
  \*************************************************************/
/*! exports provided: NzTreeNode, NzTreeComponent, NzTreeIndentComponent, NzTreeModule, NzTreeNodeCheckboxComponent, NzTreeNodeComponent, NzTreeNodeSwitcherComponent, NzTreeNodeTitleComponent, NzTreeService, NzTreeServiceFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzTreeComponent", function() { return NzTreeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzTreeIndentComponent", function() { return NzTreeIndentComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzTreeModule", function() { return NzTreeModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzTreeNodeCheckboxComponent", function() { return NzTreeNodeCheckboxComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzTreeNodeComponent", function() { return NzTreeNodeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzTreeNodeSwitcherComponent", function() { return NzTreeNodeSwitcherComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzTreeNodeTitleComponent", function() { return NzTreeNodeTitleComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzTreeService", function() { return NzTreeService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzTreeServiceFactory", function() { return NzTreeServiceFactory; });
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ng_zorro_antd_core_highlight__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/core/highlight */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-highlight.js");
/* harmony import */ var ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/no-animation */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-no-animation.js");
/* harmony import */ var ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/core/outlet */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-outlet.js");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/icon */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-icon.js");
/* harmony import */ var ng_zorro_antd_core_tree__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/core/tree */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-tree.js");
/* harmony import */ var ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/core/config */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-config.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NzTreeNode", function() { return ng_zorro_antd_core_tree__WEBPACK_IMPORTED_MODULE_7__["NzTreeNode"]; });

/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/core/util */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-util.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ng_zorro_antd_core_animation__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/core/animation */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-animation.js");


















function NzTreeIndentComponent_span_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "span");
} if (rf & 2) {
    const index_r37 = ctx.index;
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx_r35.unitMapOfClass(index_r37));
} }
function NzTreeNodeSwitcherComponent_ng_container_0_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("ant-select-tree-switcher-icon", ctx_r43.nzSelectMode)("ant-tree-switcher-icon", !ctx_r43.nzSelectMode);
} }
const _c0 = function (a0, a1) { return { $implicit: a0, origin: a1 }; };
function NzTreeNodeSwitcherComponent_ng_container_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzTreeNodeSwitcherComponent_ng_container_0_ng_container_1_ng_container_1_Template, 2, 4, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r42.nzExpandedIcon)("nzStringTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](2, _c0, ctx_r42.context, ctx_r42.context.origin));
} }
function NzTreeNodeSwitcherComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzTreeNodeSwitcherComponent_ng_container_0_ng_container_1_Template, 2, 5, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r38.isLoading)("ngIfElse", _r40);
} }
function NzTreeNodeSwitcherComponent_ng_container_1_ng_container_1_ng_container_1_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 7);
} if (rf & 2) {
    const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzType", ctx_r46.isSwitcherOpen ? "minus-square" : "plus-square");
} }
function NzTreeNodeSwitcherComponent_ng_container_1_ng_container_1_ng_container_1_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 8);
} }
function NzTreeNodeSwitcherComponent_ng_container_1_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzTreeNodeSwitcherComponent_ng_container_1_ng_container_1_ng_container_1_i_1_Template, 1, 1, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NzTreeNodeSwitcherComponent_ng_container_1_ng_container_1_ng_container_1_i_2_Template, 1, 0, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r45.isShowLineIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r45.isShowLineIcon);
} }
function NzTreeNodeSwitcherComponent_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzTreeNodeSwitcherComponent_ng_container_1_ng_container_1_ng_container_1_Template, 3, 2, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r44.nzExpandedIcon)("nzStringTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](2, _c0, ctx_r44.context, ctx_r44.context.origin));
} }
function NzTreeNodeSwitcherComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzTreeNodeSwitcherComponent_ng_container_1_ng_container_1_Template, 2, 5, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r39.isLoading)("ngIfElse", _r40);
} }
function NzTreeNodeSwitcherComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 9);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzSpin", true);
} }
function NzTreeNodeTitleComponent_ng_template_0_Template(rf, ctx) { }
function NzTreeNodeTitleComponent_ng_container_1_span_1_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 5);
} if (rf & 2) {
    const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzType", ctx_r51.icon);
} }
function NzTreeNodeTitleComponent_ng_container_1_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NzTreeNodeTitleComponent_ng_container_1_span_1_i_2_Template, 1, 1, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("ant-tree-icon__open", ctx_r50.isSwitcherOpen)("ant-tree-icon__close", ctx_r50.isSwitcherClose)("ant-tree-icon_loading", ctx_r50.isLoading)("ant-select-tree-iconEle", ctx_r50.selectMode)("ant-tree-iconEle", !ctx_r50.selectMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("ant-select-tree-iconEle", ctx_r50.selectMode)("ant-select-tree-icon__customize", ctx_r50.selectMode)("ant-tree-iconEle", !ctx_r50.selectMode)("ant-tree-icon__customize", !ctx_r50.selectMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r50.icon);
} }
function NzTreeNodeTitleComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzTreeNodeTitleComponent_ng_container_1_span_1_Template, 3, 19, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "nzHighlight");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r49.icon && ctx_r49.showIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind4"](3, 2, ctx_r49.title, ctx_r49.matchedValue, "i", "font-highlight"), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
} }
function NzTreeNodeComponent_nz_tree_node_switcher_1_Template(rf, ctx) { if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nz-tree-node-switcher", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NzTreeNodeComponent_nz_tree_node_switcher_1_Template_nz_tree_node_switcher_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r55); const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r54.clickExpand($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzShowExpand", ctx_r52.nzShowExpand)("nzShowLine", ctx_r52.nzShowLine)("nzExpandedIcon", ctx_r52.nzExpandedIcon)("nzSelectMode", ctx_r52.nzSelectMode)("context", ctx_r52.nzTreeNode)("isLeaf", ctx_r52.isLeaf)("isExpanded", ctx_r52.isExpanded)("isLoading", ctx_r52.isLoading);
} }
function NzTreeNodeComponent_nz_tree_node_checkbox_2_Template(rf, ctx) { if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nz-tree-node-checkbox", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NzTreeNodeComponent_nz_tree_node_checkbox_2_Template_nz_tree_node_checkbox_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r57); const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r56.clickCheckBox($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzSelectMode", ctx_r53.nzSelectMode)("isChecked", ctx_r53.isChecked)("isHalfChecked", ctx_r53.isHalfChecked)("isDisabled", ctx_r53.isDisabled)("isDisableCheckbox", ctx_r53.isDisableCheckbox);
} }
const _c1 = ["nzTreeTemplate"];
function NzTreeComponent_cdk_virtual_scroll_viewport_4_ng_container_1_ng_template_1_Template(rf, ctx) { }
const _c2 = function (a0) { return { $implicit: a0 }; };
function NzTreeComponent_cdk_virtual_scroll_viewport_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzTreeComponent_cdk_virtual_scroll_viewport_4_ng_container_1_ng_template_1_Template, 0, 0, "ng-template", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const node_r63 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r60)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c2, node_r63));
} }
function NzTreeComponent_cdk_virtual_scroll_viewport_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "cdk-virtual-scroll-viewport", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzTreeComponent_cdk_virtual_scroll_viewport_4_ng_container_1_Template, 2, 4, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("height", ctx_r58.nzVirtualHeight);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("ant-select-tree-list-holder-inner", ctx_r58.nzSelectMode)("ant-tree-list-holder-inner", ctx_r58.nzSelectMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("itemSize", ctx_r58.nzVirtualItemSize)("minBufferPx", ctx_r58.nzVirtualMinBufferPx)("maxBufferPx", ctx_r58.nzVirtualMaxBufferPx);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("cdkVirtualForOf", ctx_r58.nzFlattenNodes)("cdkVirtualForTrackBy", ctx_r58.trackByFlattenNode);
} }
function NzTreeComponent_div_5_ng_container_1_ng_template_1_Template(rf, ctx) { }
function NzTreeComponent_div_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzTreeComponent_div_5_ng_container_1_ng_template_1_Template, 0, 0, "ng-template", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const node_r66 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r60)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c2, node_r66));
} }
function NzTreeComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzTreeComponent_div_5_ng_container_1_Template, 2, 4, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("ant-select-tree-list-holder-inner", ctx_r59.nzSelectMode)("ant-tree-list-holder-inner", ctx_r59.nzSelectMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@.disabled", ctx_r59.beforeInit || (ctx_r59.noAnimation == null ? null : ctx_r59.noAnimation.nzNoAnimation))("nzNoAnimation", ctx_r59.noAnimation == null ? null : ctx_r59.noAnimation.nzNoAnimation)("@treeCollapseMotion", ctx_r59.nzFlattenNodes.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r59.nzFlattenNodes)("ngForTrackBy", ctx_r59.trackByFlattenNode);
} }
function NzTreeComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    const _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nz-tree-node", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("nzExpandChange", function NzTreeComponent_ng_template_6_Template_nz_tree_node_nzExpandChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r70); const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r69.eventTriggerChanged($event); })("nzClick", function NzTreeComponent_ng_template_6_Template_nz_tree_node_nzClick_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r70); const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r71.eventTriggerChanged($event); })("nzDblClick", function NzTreeComponent_ng_template_6_Template_nz_tree_node_nzDblClick_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r70); const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r72.eventTriggerChanged($event); })("nzContextMenu", function NzTreeComponent_ng_template_6_Template_nz_tree_node_nzContextMenu_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r70); const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r73.eventTriggerChanged($event); })("nzCheckBoxChange", function NzTreeComponent_ng_template_6_Template_nz_tree_node_nzCheckBoxChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r70); const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r74.eventTriggerChanged($event); })("nzOnDragStart", function NzTreeComponent_ng_template_6_Template_nz_tree_node_nzOnDragStart_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r70); const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r75.eventTriggerChanged($event); })("nzOnDragEnter", function NzTreeComponent_ng_template_6_Template_nz_tree_node_nzOnDragEnter_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r70); const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r76.eventTriggerChanged($event); })("nzOnDragOver", function NzTreeComponent_ng_template_6_Template_nz_tree_node_nzOnDragOver_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r70); const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r77.eventTriggerChanged($event); })("nzOnDragLeave", function NzTreeComponent_ng_template_6_Template_nz_tree_node_nzOnDragLeave_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r70); const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r78.eventTriggerChanged($event); })("nzOnDragEnd", function NzTreeComponent_ng_template_6_Template_nz_tree_node_nzOnDragEnd_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r70); const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r79.eventTriggerChanged($event); })("nzOnDrop", function NzTreeComponent_ng_template_6_Template_nz_tree_node_nzOnDrop_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r70); const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r80.eventTriggerChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const treeNode_r68 = ctx.$implicit;
    const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", treeNode_r68.icon)("title", treeNode_r68.title)("isLoading", treeNode_r68.isLoading)("isSelected", treeNode_r68.isSelected)("isDisabled", treeNode_r68.isDisabled)("isMatched", treeNode_r68.isMatched)("isExpanded", treeNode_r68.isExpanded)("isLeaf", treeNode_r68.isLeaf)("isStart", treeNode_r68.isStart)("isEnd", treeNode_r68.isEnd)("isChecked", treeNode_r68.isChecked)("isHalfChecked", treeNode_r68.isHalfChecked)("isDisableCheckbox", treeNode_r68.isDisableCheckbox)("isSelectable", treeNode_r68.isSelectable)("canHide", treeNode_r68.canHide)("nzTreeNode", treeNode_r68)("nzSelectMode", ctx_r61.nzSelectMode)("nzShowLine", ctx_r61.nzShowLine)("nzExpandedIcon", ctx_r61.nzExpandedIcon)("nzDraggable", ctx_r61.nzDraggable)("nzCheckable", ctx_r61.nzCheckable)("nzShowExpand", ctx_r61.nzShowExpand)("nzAsyncData", ctx_r61.nzAsyncData)("nzSearchValue", ctx_r61.nzSearchValue)("nzHideUnMatched", ctx_r61.nzHideUnMatched)("nzBeforeDrop", ctx_r61.nzBeforeDrop)("nzShowIcon", ctx_r61.nzShowIcon)("nzTreeTemplate", ctx_r61.nzTreeTemplate || ctx_r61.nzTreeTemplateChild);
} }









/**
 * @fileoverview added by tsickle
 * Generated from: tree-indent.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzTreeIndentComponent {
    constructor() {
        this.nzSelectMode = false;
        this.listOfUnit = [];
    }
    /**
     * @param {?} index
     * @return {?}
     */
    unitMapOfClass(index) {
        return {
            [`ant-tree-indent-unit`]: !this.nzSelectMode,
            [`ant-tree-indent-unit-start`]: !this.nzSelectMode && this.nzIsStart[index + 1],
            [`ant-tree-indent-unit-end`]: !this.nzSelectMode && this.nzIsEnd[index + 1],
            [`ant-select-tree-indent-unit`]: this.nzSelectMode,
            [`ant-select-tree-indent-unit-start`]: this.nzSelectMode && this.nzIsStart[index + 1],
            [`ant-select-tree-indent-unit-end`]: this.nzSelectMode && this.nzIsEnd[index + 1]
        };
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        const { nzTreeLevel } = changes;
        if (nzTreeLevel) {
            this.listOfUnit = [...new Array(nzTreeLevel.currentValue || 0)];
        }
    }
}
NzTreeIndentComponent.ɵfac = function NzTreeIndentComponent_Factory(t) { return new (t || NzTreeIndentComponent)(); };
NzTreeIndentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NzTreeIndentComponent, selectors: [["nz-tree-indent"]], hostVars: 5, hostBindings: function NzTreeIndentComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-hidden", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("ant-tree-indent", !ctx.nzSelectMode)("ant-select-tree-indent", ctx.nzSelectMode);
    } }, inputs: { nzSelectMode: "nzSelectMode", nzTreeLevel: "nzTreeLevel", nzIsStart: "nzIsStart", nzIsEnd: "nzIsEnd" }, exportAs: ["nzTreeIndent"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]], decls: 1, vars: 1, consts: [[3, "class", 4, "ngFor", "ngForOf"]], template: function NzTreeIndentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, NzTreeIndentComponent_span_0_Template, 1, 2, "span", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.listOfUnit);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], encapsulation: 2, changeDetection: 0 });
NzTreeIndentComponent.propDecorators = {
    nzTreeLevel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzIsStart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzIsEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzSelectMode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: tree-node-checkbox.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzTreeNodeCheckboxComponent {
    constructor() {
        this.nzSelectMode = false;
    }
}
NzTreeNodeCheckboxComponent.ɵfac = function NzTreeNodeCheckboxComponent_Factory(t) { return new (t || NzTreeNodeCheckboxComponent)(); };
NzTreeNodeCheckboxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NzTreeNodeCheckboxComponent, selectors: [["nz-tree-node-checkbox"]], hostVars: 16, hostBindings: function NzTreeNodeCheckboxComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("ant-select-tree-checkbox", ctx.nzSelectMode)("ant-select-tree-checkbox-checked", ctx.nzSelectMode && ctx.isChecked)("ant-select-tree-checkbox-indeterminate", ctx.nzSelectMode && ctx.isHalfChecked)("ant-select-tree-checkbox-disabled", ctx.nzSelectMode && (ctx.isDisabled || ctx.isDisableCheckbox))("ant-tree-checkbox", !ctx.nzSelectMode)("ant-tree-checkbox-checked", !ctx.nzSelectMode && ctx.isChecked)("ant-tree-checkbox-indeterminate", !ctx.nzSelectMode && ctx.isHalfChecked)("ant-tree-checkbox-disabled", !ctx.nzSelectMode && (ctx.isDisabled || ctx.isDisableCheckbox));
    } }, inputs: { nzSelectMode: "nzSelectMode", isChecked: "isChecked", isHalfChecked: "isHalfChecked", isDisabled: "isDisabled", isDisableCheckbox: "isDisableCheckbox" }, decls: 1, vars: 4, template: function NzTreeNodeCheckboxComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "span");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("ant-tree-checkbox-inner", !ctx.nzSelectMode)("ant-select-tree-checkbox-inner", ctx.nzSelectMode);
    } }, encapsulation: 2, changeDetection: 0 });
NzTreeNodeCheckboxComponent.propDecorators = {
    nzSelectMode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    isChecked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    isHalfChecked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    isDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    isDisableCheckbox: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: tree-node-switcher.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzTreeNodeSwitcherComponent {
    constructor() {
        this.nzSelectMode = false;
    }
    /**
     * @return {?}
     */
    get isShowLineIcon() {
        return !this.isLeaf && this.nzShowLine;
    }
    /**
     * @return {?}
     */
    get isShowSwitchIcon() {
        return !this.isLeaf && !this.nzShowLine;
    }
    /**
     * @return {?}
     */
    get isSwitcherOpen() {
        return this.isExpanded && !this.isLeaf;
    }
    /**
     * @return {?}
     */
    get isSwitcherClose() {
        return !this.isExpanded && !this.isLeaf;
    }
}
NzTreeNodeSwitcherComponent.ɵfac = function NzTreeNodeSwitcherComponent_Factory(t) { return new (t || NzTreeNodeSwitcherComponent)(); };
NzTreeNodeSwitcherComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NzTreeNodeSwitcherComponent, selectors: [["nz-tree-node-switcher"]], hostVars: 16, hostBindings: function NzTreeNodeSwitcherComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("ant-select-tree-switcher", ctx.nzSelectMode)("ant-select-tree-switcher-noop", ctx.nzSelectMode && ctx.isLeaf)("ant-select-tree-switcher_open", ctx.nzSelectMode && ctx.isSwitcherOpen)("ant-select-tree-switcher_close", ctx.nzSelectMode && ctx.isSwitcherClose)("ant-tree-switcher", !ctx.nzSelectMode)("ant-tree-switcher-noop", !ctx.nzSelectMode && ctx.isLeaf)("ant-tree-switcher_open", !ctx.nzSelectMode && ctx.isSwitcherOpen)("ant-tree-switcher_close", !ctx.nzSelectMode && ctx.isSwitcherClose);
    } }, inputs: { nzSelectMode: "nzSelectMode", nzShowExpand: "nzShowExpand", nzShowLine: "nzShowLine", nzExpandedIcon: "nzExpandedIcon", context: "context", isLeaf: "isLeaf", isLoading: "isLoading", isExpanded: "isExpanded" }, decls: 4, vars: 2, consts: [[4, "ngIf"], ["loadingTemplate", ""], [4, "ngIf", "ngIfElse"], [4, "nzStringTemplateOutlet", "nzStringTemplateOutletContext"], ["nz-icon", "", "nzType", "caret-down"], ["nz-icon", "", "class", "ant-tree-switcher-line-icon", 3, "nzType", 4, "ngIf"], ["nz-icon", "", "nzType", "file", "class", "ant-tree-switcher-line-icon", 4, "ngIf"], ["nz-icon", "", 1, "ant-tree-switcher-line-icon", 3, "nzType"], ["nz-icon", "", "nzType", "file", 1, "ant-tree-switcher-line-icon"], ["nz-icon", "", "nzType", "loading", 1, "ant-tree-switcher-loading-icon", 3, "nzSpin"]], template: function NzTreeNodeSwitcherComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, NzTreeNodeSwitcherComponent_ng_container_0_Template, 2, 2, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzTreeNodeSwitcherComponent_ng_container_1_Template, 2, 2, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NzTreeNodeSwitcherComponent_ng_template_2_Template, 1, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isShowSwitchIcon);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.nzShowLine);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_5__["NzStringTemplateOutletDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__["NzIconDirective"]], encapsulation: 2, changeDetection: 0 });
NzTreeNodeSwitcherComponent.propDecorators = {
    nzShowExpand: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzShowLine: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzExpandedIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzSelectMode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    context: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    isLeaf: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    isLoading: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    isExpanded: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: tree-node-title.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzTreeNodeTitleComponent {
    constructor() {
        this.selectMode = false;
    }
    /**
     * @return {?}
     */
    get canDraggable() {
        return this.draggable && !this.isDisabled ? true : null;
    }
    /**
     * @return {?}
     */
    get matchedValue() {
        return this.isMatched ? this.searchValue : '';
    }
    /**
     * @return {?}
     */
    get isSwitcherOpen() {
        return this.isExpanded && !this.isLeaf;
    }
    /**
     * @return {?}
     */
    get isSwitcherClose() {
        return !this.isExpanded && !this.isLeaf;
    }
}
NzTreeNodeTitleComponent.ɵfac = function NzTreeNodeTitleComponent_Factory(t) { return new (t || NzTreeNodeTitleComponent)(); };
NzTreeNodeTitleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NzTreeNodeTitleComponent, selectors: [["nz-tree-node-title"]], hostVars: 21, hostBindings: function NzTreeNodeTitleComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("title", ctx.title)("draggable", ctx.canDraggable)("aria-grabbed", ctx.canDraggable);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("draggable", ctx.canDraggable)("ant-select-tree-node-content-wrapper", ctx.selectMode)("ant-select-tree-node-content-wrapper-open", ctx.selectMode && ctx.isSwitcherOpen)("ant-select-tree-node-content-wrapper-close", ctx.selectMode && ctx.isSwitcherClose)("ant-select-tree-node-selected", ctx.selectMode && ctx.isSelected)("ant-tree-node-content-wrapper", !ctx.selectMode)("ant-tree-node-content-wrapper-open", !ctx.selectMode && ctx.isSwitcherOpen)("ant-tree-node-content-wrapper-close", !ctx.selectMode && ctx.isSwitcherClose)("ant-tree-node-selected", !ctx.selectMode && ctx.isSelected);
    } }, inputs: { selectMode: "selectMode", searchValue: "searchValue", treeTemplate: "treeTemplate", draggable: "draggable", showIcon: "showIcon", context: "context", icon: "icon", title: "title", isLoading: "isLoading", isSelected: "isSelected", isDisabled: "isDisabled", isMatched: "isMatched", isExpanded: "isExpanded", isLeaf: "isLeaf" }, decls: 2, vars: 6, consts: [[3, "ngTemplateOutlet", "ngTemplateOutletContext"], [4, "ngIf"], [3, "ant-tree-icon__open", "ant-tree-icon__close", "ant-tree-icon_loading", "ant-select-tree-iconEle", "ant-tree-iconEle", 4, "ngIf"], [1, "ant-tree-title", 3, "innerHTML"], ["nz-icon", "", 3, "nzType", 4, "ngIf"], ["nz-icon", "", 3, "nzType"]], template: function NzTreeNodeTitleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, NzTreeNodeTitleComponent_ng_template_0_Template, 0, 0, "ng-template", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzTreeNodeTitleComponent_ng_container_1_Template, 4, 7, "ng-container", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", ctx.treeTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](3, _c0, ctx.context, ctx.context.origin));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.treeTemplate);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__["NzIconDirective"]], pipes: [ng_zorro_antd_core_highlight__WEBPACK_IMPORTED_MODULE_3__["NzHighlightPipe"]], encapsulation: 2, changeDetection: 0 });
NzTreeNodeTitleComponent.propDecorators = {
    searchValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    treeTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    draggable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    showIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    selectMode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    context: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    icon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    isLoading: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    isSelected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    isDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    isMatched: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    isExpanded: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    isLeaf: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: tree-node.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzTreeNodeComponent {
    /**
     * @param {?} nzTreeService
     * @param {?} ngZone
     * @param {?} renderer
     * @param {?} elementRef
     * @param {?} cdr
     * @param {?=} noAnimation
     */
    constructor(nzTreeService, ngZone, renderer, elementRef, cdr, noAnimation) {
        this.nzTreeService = nzTreeService;
        this.ngZone = ngZone;
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.cdr = cdr;
        this.noAnimation = noAnimation;
        this.nzHideUnMatched = false;
        this.nzNoAnimation = false;
        this.nzSelectMode = false;
        this.nzShowIcon = false;
        this.nzSearchValue = '';
        this.nzClick = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.nzDblClick = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.nzContextMenu = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.nzCheckBoxChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.nzExpandChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.nzOnDragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.nzOnDragEnter = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.nzOnDragOver = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.nzOnDragLeave = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.nzOnDrop = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.nzOnDragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        /**
         * drag var
         */
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_11__["Subject"]();
        this.dragPos = 2;
        this.dragPosClass = {
            '0': 'drag-over',
            '1': 'drag-over-gap-bottom',
            '-1': 'drag-over-gap-top'
        };
    }
    /**
     * default set
     * @return {?}
     */
    get displayStyle() {
        // to hide unmatched nodes
        return this.nzSearchValue && this.nzHideUnMatched && !this.isMatched && !this.isExpanded && this.canHide ? 'none' : '';
    }
    /**
     * @return {?}
     */
    get isSwitcherOpen() {
        return this.isExpanded && !this.isLeaf;
    }
    /**
     * @return {?}
     */
    get isSwitcherClose() {
        return !this.isExpanded && !this.isLeaf;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onMousedown(event) {
        if (this.nzSelectMode) {
            event.preventDefault();
        }
    }
    /**
     * collapse node
     * @param {?} event
     * @return {?}
     */
    clickExpand(event) {
        event.preventDefault();
        if (!this.isLoading && !this.isLeaf) {
            // set async state
            if (this.nzAsyncData && this.nzTreeNode.children.length === 0 && !this.isExpanded) {
                this.nzTreeNode.isLoading = true;
            }
            this.nzTreeNode.setExpanded(!this.isExpanded);
        }
        this.nzTreeService.setExpandedNodeList(this.nzTreeNode);
        /** @type {?} */
        const eventNext = this.nzTreeService.formatEvent('expand', this.nzTreeNode, event);
        this.nzExpandChange.emit(eventNext);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    clickSelect(event) {
        event.preventDefault();
        if (this.isSelectable && !this.isDisabled) {
            this.nzTreeNode.isSelected = !this.nzTreeNode.isSelected;
        }
        this.nzTreeService.setSelectedNodeList(this.nzTreeNode);
        /** @type {?} */
        const eventNext = this.nzTreeService.formatEvent('click', this.nzTreeNode, event);
        this.nzClick.emit(eventNext);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    dblClick(event) {
        event.preventDefault();
        /** @type {?} */
        const eventNext = this.nzTreeService.formatEvent('dblclick', this.nzTreeNode, event);
        this.nzDblClick.emit(eventNext);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    contextMenu(event) {
        event.preventDefault();
        /** @type {?} */
        const eventNext = this.nzTreeService.formatEvent('contextmenu', this.nzTreeNode, event);
        this.nzContextMenu.emit(eventNext);
    }
    /**
     * check node
     * @param {?} event
     * @return {?}
     */
    clickCheckBox(event) {
        event.preventDefault();
        // return if node is disabled
        if (this.isDisabled || this.isDisableCheckbox) {
            return;
        }
        this.nzTreeNode.isChecked = !this.nzTreeNode.isChecked;
        this.nzTreeNode.isHalfChecked = false;
        this.nzTreeService.setCheckedNodeList(this.nzTreeNode);
        /** @type {?} */
        const eventNext = this.nzTreeService.formatEvent('check', this.nzTreeNode, event);
        this.nzCheckBoxChange.emit(eventNext);
    }
    /**
     * @return {?}
     */
    clearDragClass() {
        /** @type {?} */
        const dragClass = ['drag-over-gap-top', 'drag-over-gap-bottom', 'drag-over'];
        dragClass.forEach((/**
         * @param {?} e
         * @return {?}
         */
        e => {
            this.renderer.removeClass(this.elementRef.nativeElement, e);
        }));
    }
    /**
     * drag event
     * @param {?} e
     * @return {?}
     */
    handleDragStart(e) {
        try {
            // ie throw error
            // firefox-need-it
            (/** @type {?} */ (e.dataTransfer)).setData('text/plain', (/** @type {?} */ (this.nzTreeNode.key)));
        }
        catch (error) {
            // empty
        }
        this.nzTreeService.setSelectedNode(this.nzTreeNode);
        /** @type {?} */
        const eventNext = this.nzTreeService.formatEvent('dragstart', this.nzTreeNode, e);
        this.nzOnDragStart.emit(eventNext);
    }
    /**
     * @param {?} e
     * @return {?}
     */
    handleDragEnter(e) {
        e.preventDefault();
        // reset position
        this.dragPos = 2;
        this.ngZone.run((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const eventNext = this.nzTreeService.formatEvent('dragenter', this.nzTreeNode, e);
            this.nzOnDragEnter.emit(eventNext);
        }));
    }
    /**
     * @param {?} e
     * @return {?}
     */
    handleDragOver(e) {
        e.preventDefault();
        /** @type {?} */
        const dropPosition = this.nzTreeService.calcDropPosition(e);
        if (this.dragPos !== dropPosition) {
            this.clearDragClass();
            this.dragPos = dropPosition;
            // leaf node will pass
            if (!(this.dragPos === 0 && this.isLeaf)) {
                this.renderer.addClass(this.elementRef.nativeElement, this.dragPosClass[this.dragPos]);
            }
        }
        /** @type {?} */
        const eventNext = this.nzTreeService.formatEvent('dragover', this.nzTreeNode, e);
        this.nzOnDragOver.emit(eventNext);
    }
    /**
     * @param {?} e
     * @return {?}
     */
    handleDragLeave(e) {
        e.preventDefault();
        this.clearDragClass();
        /** @type {?} */
        const eventNext = this.nzTreeService.formatEvent('dragleave', this.nzTreeNode, e);
        this.nzOnDragLeave.emit(eventNext);
    }
    /**
     * @param {?} e
     * @return {?}
     */
    handleDragDrop(e) {
        this.ngZone.run((/**
         * @return {?}
         */
        () => {
            this.clearDragClass();
            /** @type {?} */
            const node = this.nzTreeService.getSelectedNode();
            if (!node || (node && node.key === this.nzTreeNode.key) || (this.dragPos === 0 && this.isLeaf)) {
                return;
            }
            // pass if node is leafNo
            /** @type {?} */
            const dropEvent = this.nzTreeService.formatEvent('drop', this.nzTreeNode, e);
            /** @type {?} */
            const dragEndEvent = this.nzTreeService.formatEvent('dragend', this.nzTreeNode, e);
            if (this.nzBeforeDrop) {
                this.nzBeforeDrop({
                    dragNode: (/** @type {?} */ (this.nzTreeService.getSelectedNode())),
                    node: this.nzTreeNode,
                    pos: this.dragPos
                }).subscribe((/**
                 * @param {?} canDrop
                 * @return {?}
                 */
                (canDrop) => {
                    if (canDrop) {
                        this.nzTreeService.dropAndApply(this.nzTreeNode, this.dragPos);
                    }
                    this.nzOnDrop.emit(dropEvent);
                    this.nzOnDragEnd.emit(dragEndEvent);
                }));
            }
            else if (this.nzTreeNode) {
                this.nzTreeService.dropAndApply(this.nzTreeNode, this.dragPos);
                this.nzOnDrop.emit(dropEvent);
            }
        }));
    }
    /**
     * @param {?} e
     * @return {?}
     */
    handleDragEnd(e) {
        e.preventDefault();
        this.ngZone.run((/**
         * @return {?}
         */
        () => {
            // if user do not custom beforeDrop
            if (!this.nzBeforeDrop) {
                /** @type {?} */
                const eventNext = this.nzTreeService.formatEvent('dragend', this.nzTreeNode, e);
                this.nzOnDragEnd.emit(eventNext);
            }
        }));
    }
    /**
     * Listening to dragging events.
     * @return {?}
     */
    handDragEvent() {
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            if (this.nzDraggable) {
                /** @type {?} */
                const nativeElement = this.elementRef.nativeElement;
                this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_11__["Subject"]();
                Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["fromEvent"])(nativeElement, 'dragstart')
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["takeUntil"])(this.destroy$))
                    .subscribe((/**
                 * @param {?} e
                 * @return {?}
                 */
                (e) => this.handleDragStart(e)));
                Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["fromEvent"])(nativeElement, 'dragenter')
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["takeUntil"])(this.destroy$))
                    .subscribe((/**
                 * @param {?} e
                 * @return {?}
                 */
                (e) => this.handleDragEnter(e)));
                Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["fromEvent"])(nativeElement, 'dragover')
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["takeUntil"])(this.destroy$))
                    .subscribe((/**
                 * @param {?} e
                 * @return {?}
                 */
                (e) => this.handleDragOver(e)));
                Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["fromEvent"])(nativeElement, 'dragleave')
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["takeUntil"])(this.destroy$))
                    .subscribe((/**
                 * @param {?} e
                 * @return {?}
                 */
                (e) => this.handleDragLeave(e)));
                Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["fromEvent"])(nativeElement, 'drop')
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["takeUntil"])(this.destroy$))
                    .subscribe((/**
                 * @param {?} e
                 * @return {?}
                 */
                (e) => this.handleDragDrop(e)));
                Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["fromEvent"])(nativeElement, 'dragend')
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["takeUntil"])(this.destroy$))
                    .subscribe((/**
                 * @param {?} e
                 * @return {?}
                 */
                (e) => this.handleDragEnd(e)));
            }
            else {
                this.destroy$.next();
                this.destroy$.complete();
            }
        }));
    }
    /**
     * @return {?}
     */
    markForCheck() {
        this.cdr.markForCheck();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.nzTreeNode.component = this;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        const { nzDraggable } = changes;
        if (nzDraggable) {
            this.handDragEvent();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NzTreeNodeComponent.ɵfac = function NzTreeNodeComponent_Factory(t) { return new (t || NzTreeNodeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ng_zorro_antd_core_tree__WEBPACK_IMPORTED_MODULE_7__["NzTreeBaseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_4__["NzNoAnimationDirective"], 9)); };
NzTreeNodeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NzTreeNodeComponent, selectors: [["nz-tree-node"]], hostVars: 34, hostBindings: function NzTreeNodeComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mousedown", function NzTreeNodeComponent_mousedown_HostBindingHandler($event) { return ctx.onMousedown($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("display", ctx.displayStyle);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("ant-select-tree-treenode", ctx.nzSelectMode)("ant-select-tree-treenode-disabled", ctx.nzSelectMode && ctx.isDisabled)("ant-select-tree-treenode-switcher-open", ctx.nzSelectMode && ctx.isSwitcherOpen)("ant-select-tree-treenode-switcher-close", ctx.nzSelectMode && ctx.isSwitcherClose)("ant-select-tree-treenode-checkbox-checked", ctx.nzSelectMode && ctx.isChecked)("ant-select-tree-treenode-checkbox-indeterminate", ctx.nzSelectMode && ctx.isHalfChecked)("ant-select-tree-treenode-selected", ctx.nzSelectMode && ctx.isSelected)("ant-select-tree-treenode-loading", ctx.nzSelectMode && ctx.isLoading)("ant-tree-treenode", !ctx.nzSelectMode)("ant-tree-treenode-disabled", !ctx.nzSelectMode && ctx.isDisabled)("ant-tree-treenode-switcher-open", !ctx.nzSelectMode && ctx.isSwitcherOpen)("ant-tree-treenode-switcher-close", !ctx.nzSelectMode && ctx.isSwitcherClose)("ant-tree-treenode-checkbox-checked", !ctx.nzSelectMode && ctx.isChecked)("ant-tree-treenode-checkbox-indeterminate", !ctx.nzSelectMode && ctx.isHalfChecked)("ant-tree-treenode-selected", !ctx.nzSelectMode && ctx.isSelected)("ant-tree-treenode-loading", !ctx.nzSelectMode && ctx.isLoading);
    } }, inputs: { nzHideUnMatched: "nzHideUnMatched", nzNoAnimation: "nzNoAnimation", nzSelectMode: "nzSelectMode", nzShowIcon: "nzShowIcon", nzSearchValue: "nzSearchValue", icon: "icon", title: "title", isLoading: "isLoading", isSelected: "isSelected", isDisabled: "isDisabled", isMatched: "isMatched", isExpanded: "isExpanded", isLeaf: "isLeaf", isChecked: "isChecked", isHalfChecked: "isHalfChecked", isDisableCheckbox: "isDisableCheckbox", isSelectable: "isSelectable", canHide: "canHide", isStart: "isStart", isEnd: "isEnd", nzTreeNode: "nzTreeNode", nzShowLine: "nzShowLine", nzShowExpand: "nzShowExpand", nzCheckable: "nzCheckable", nzAsyncData: "nzAsyncData", nzExpandedIcon: "nzExpandedIcon", nzTreeTemplate: "nzTreeTemplate", nzBeforeDrop: "nzBeforeDrop", nzDraggable: "nzDraggable" }, outputs: { nzClick: "nzClick", nzDblClick: "nzDblClick", nzContextMenu: "nzContextMenu", nzCheckBoxChange: "nzCheckBoxChange", nzExpandChange: "nzExpandChange", nzOnDragStart: "nzOnDragStart", nzOnDragEnter: "nzOnDragEnter", nzOnDragOver: "nzOnDragOver", nzOnDragLeave: "nzOnDragLeave", nzOnDrop: "nzOnDrop", nzOnDragEnd: "nzOnDragEnd" }, exportAs: ["nzTreeNode"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]], decls: 4, vars: 20, consts: [[3, "nzTreeLevel", "nzSelectMode", "nzIsStart", "nzIsEnd"], [3, "nzShowExpand", "nzShowLine", "nzExpandedIcon", "nzSelectMode", "context", "isLeaf", "isExpanded", "isLoading", "click", 4, "ngIf"], [3, "nzSelectMode", "isChecked", "isHalfChecked", "isDisabled", "isDisableCheckbox", "click", 4, "ngIf"], [3, "icon", "title", "isLoading", "isSelected", "isDisabled", "isMatched", "isExpanded", "isLeaf", "searchValue", "treeTemplate", "draggable", "showIcon", "selectMode", "context", "dblclick", "click", "contextmenu"], [3, "nzShowExpand", "nzShowLine", "nzExpandedIcon", "nzSelectMode", "context", "isLeaf", "isExpanded", "isLoading", "click"], [3, "nzSelectMode", "isChecked", "isHalfChecked", "isDisabled", "isDisableCheckbox", "click"]], template: function NzTreeNodeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "nz-tree-indent", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzTreeNodeComponent_nz_tree_node_switcher_1_Template, 1, 8, "nz-tree-node-switcher", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NzTreeNodeComponent_nz_tree_node_checkbox_2_Template, 1, 5, "nz-tree-node-checkbox", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "nz-tree-node-title", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("dblclick", function NzTreeNodeComponent_Template_nz_tree_node_title_dblclick_3_listener($event) { return ctx.dblClick($event); })("click", function NzTreeNodeComponent_Template_nz_tree_node_title_click_3_listener($event) { return ctx.clickSelect($event); })("contextmenu", function NzTreeNodeComponent_Template_nz_tree_node_title_contextmenu_3_listener($event) { return ctx.contextMenu($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzTreeLevel", ctx.nzTreeNode.level)("nzSelectMode", ctx.nzSelectMode)("nzIsStart", ctx.isStart)("nzIsEnd", ctx.isEnd);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.nzShowExpand);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.nzCheckable);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx.icon)("title", ctx.title)("isLoading", ctx.isLoading)("isSelected", ctx.isSelected)("isDisabled", ctx.isDisabled)("isMatched", ctx.isMatched)("isExpanded", ctx.isExpanded)("isLeaf", ctx.isLeaf)("searchValue", ctx.nzSearchValue)("treeTemplate", ctx.nzTreeTemplate)("draggable", ctx.nzDraggable)("showIcon", ctx.nzShowIcon)("selectMode", ctx.nzSelectMode)("context", ctx.nzTreeNode);
    } }, directives: [NzTreeIndentComponent, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], NzTreeNodeTitleComponent,
        NzTreeNodeSwitcherComponent,
        NzTreeNodeCheckboxComponent], encapsulation: 2, changeDetection: 0 });
/** @nocollapse */
NzTreeNodeComponent.ctorParameters = () => [
    { type: ng_zorro_antd_core_tree__WEBPACK_IMPORTED_MODULE_7__["NzTreeBaseService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
    { type: ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_4__["NzNoAnimationDirective"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Host"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }] }
];
NzTreeNodeComponent.propDecorators = {
    icon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    isLoading: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    isSelected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    isDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    isMatched: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    isExpanded: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    isLeaf: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    isChecked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    isHalfChecked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    isDisableCheckbox: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    isSelectable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    canHide: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    isStart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    isEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzTreeNode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzShowLine: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzShowExpand: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzCheckable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzAsyncData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzHideUnMatched: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzNoAnimation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzSelectMode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzShowIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzExpandedIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzTreeTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzBeforeDrop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzSearchValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzDraggable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
    nzDblClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
    nzContextMenu: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
    nzCheckBoxChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
    nzExpandChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
    nzOnDragStart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
    nzOnDragEnter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
    nzOnDragOver: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
    nzOnDragLeave: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
    nzOnDrop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
    nzOnDragEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }]
};
Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_10__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__metadata"])("design:type", Boolean)
], NzTreeNodeComponent.prototype, "nzShowLine", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_10__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__metadata"])("design:type", Boolean)
], NzTreeNodeComponent.prototype, "nzShowExpand", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_10__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__metadata"])("design:type", Boolean)
], NzTreeNodeComponent.prototype, "nzCheckable", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_10__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__metadata"])("design:type", Boolean)
], NzTreeNodeComponent.prototype, "nzAsyncData", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_10__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__metadata"])("design:type", Object)
], NzTreeNodeComponent.prototype, "nzHideUnMatched", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_10__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__metadata"])("design:type", Object)
], NzTreeNodeComponent.prototype, "nzNoAnimation", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_10__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__metadata"])("design:type", Object)
], NzTreeNodeComponent.prototype, "nzSelectMode", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_10__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__metadata"])("design:type", Object)
], NzTreeNodeComponent.prototype, "nzShowIcon", void 0);
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: tree.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzTreeService extends ng_zorro_antd_core_tree__WEBPACK_IMPORTED_MODULE_7__["NzTreeBaseService"] {
    constructor() {
        super();
    }
}
NzTreeService.ɵfac = function NzTreeService_Factory(t) { return new (t || NzTreeService)(); };
NzTreeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: NzTreeService, factory: NzTreeService.ɵfac });
/** @nocollapse */
NzTreeService.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * Generated from: tree.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} higherOrderService
 * @param {?} treeService
 * @return {?}
 */
function NzTreeServiceFactory(higherOrderService, treeService) {
    return higherOrderService ? higherOrderService : treeService;
}
/** @type {?} */
const NZ_CONFIG_COMPONENT_NAME = 'tree';
class NzTreeComponent extends ng_zorro_antd_core_tree__WEBPACK_IMPORTED_MODULE_7__["NzTreeBase"] {
    // Handle emit event end
    /**
     * @param {?} nzTreeService
     * @param {?} nzConfigService
     * @param {?} cdr
     * @param {?=} noAnimation
     */
    constructor(nzTreeService, nzConfigService, cdr, noAnimation) {
        super(nzTreeService);
        this.nzConfigService = nzConfigService;
        this.cdr = cdr;
        this.noAnimation = noAnimation;
        this.nzExpandAll = false;
        this.nzSelectMode = false;
        this.nzCheckStrictly = false;
        this.nzShowExpand = true;
        this.nzShowLine = false;
        this.nzCheckable = false;
        this.nzAsyncData = false;
        this.nzDraggable = false;
        this.nzMultiple = false;
        this.nzVirtualItemSize = 28;
        this.nzVirtualMaxBufferPx = 500;
        this.nzVirtualMinBufferPx = 28;
        this.nzVirtualHeight = false;
        this.nzData = [];
        this.nzExpandedKeys = [];
        this.nzSelectedKeys = [];
        this.nzCheckedKeys = [];
        this.nzFlattenNodes = [];
        this.beforeInit = true;
        this.nzExpandedKeysChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.nzSelectedKeysChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.nzCheckedKeysChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.nzSearchValueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.nzClick = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.nzDblClick = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.nzContextMenu = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.nzCheckBoxChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.nzExpandChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.nzOnDragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.nzOnDragEnter = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.nzOnDragOver = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.nzOnDragLeave = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.nzOnDrop = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.nzOnDragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.HIDDEN_STYLE = {
            width: 0,
            height: 0,
            display: 'flex',
            overflow: 'hidden',
            opacity: 0,
            border: 0,
            padding: 0,
            margin: 0
        };
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_11__["Subject"]();
        this.onChange = (/**
         * @return {?}
         */
        () => null);
        this.onTouched = (/**
         * @return {?}
         */
        () => null);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.handleNzData(value);
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * Render all properties of nzTree
     * @param {?} changes
     * @return {?}
     */
    renderTreeProperties(changes) {
        /** @type {?} */
        let useDefaultExpandedKeys = false;
        /** @type {?} */
        let expandAll = false;
        const { nzData, nzExpandedKeys, nzSelectedKeys, nzCheckedKeys, nzCheckStrictly, nzExpandAll, nzMultiple, nzSearchValue } = changes;
        if (nzExpandAll) {
            useDefaultExpandedKeys = true;
            expandAll = this.nzExpandAll;
        }
        if (nzMultiple) {
            this.nzTreeService.isMultiple = this.nzMultiple;
        }
        if (nzCheckStrictly) {
            this.nzTreeService.isCheckStrictly = this.nzCheckStrictly;
        }
        if (nzData) {
            this.handleNzData(this.nzData);
        }
        if (nzCheckedKeys || nzCheckStrictly) {
            this.handleCheckedKeys(this.nzCheckedKeys);
        }
        if (nzExpandedKeys || nzExpandAll) {
            useDefaultExpandedKeys = true;
            this.handleExpandedKeys(expandAll || this.nzExpandedKeys);
        }
        if (nzSelectedKeys) {
            this.handleSelectedKeys(this.nzSelectedKeys, this.nzMultiple);
        }
        if (nzSearchValue) {
            if (!(nzSearchValue.firstChange && !this.nzSearchValue)) {
                useDefaultExpandedKeys = false;
                this.handleSearchValue(this.nzSearchValue, this.nzSearchFunc);
                this.nzSearchValueChange.emit(this.nzTreeService.formatEvent('search', null, null));
            }
        }
        // flatten data
        /** @type {?} */
        const currentExpandedKeys = this.getExpandedNodeList().map((/**
         * @param {?} v
         * @return {?}
         */
        v => v.key));
        /** @type {?} */
        const newExpandedKeys = useDefaultExpandedKeys ? expandAll || this.nzExpandedKeys : currentExpandedKeys;
        this.handleFlattenNodes(this.nzTreeService.rootNodes, newExpandedKeys);
    }
    /**
     * @param {?} _
     * @param {?} node
     * @return {?}
     */
    trackByFlattenNode(_, node) {
        return node.key;
    }
    // Deal with properties
    /**
     * nzData
     * @param {?} value
     * @return {?}
     */
    handleNzData(value) {
        if (Array.isArray(value)) {
            /** @type {?} */
            const data = this.coerceTreeNodes(value);
            this.nzTreeService.initTree(data);
        }
    }
    /**
     * @param {?} data
     * @param {?=} expandKeys
     * @return {?}
     */
    handleFlattenNodes(data, expandKeys = []) {
        this.nzTreeService.flattenTreeData(data, expandKeys);
    }
    /**
     * @param {?} keys
     * @return {?}
     */
    handleCheckedKeys(keys) {
        this.nzTreeService.conductCheck(keys, this.nzCheckStrictly);
    }
    /**
     * @param {?=} keys
     * @return {?}
     */
    handleExpandedKeys(keys = []) {
        this.nzTreeService.conductExpandedKeys(keys);
    }
    /**
     * @param {?} keys
     * @param {?} isMulti
     * @return {?}
     */
    handleSelectedKeys(keys, isMulti) {
        this.nzTreeService.conductSelectedKeys(keys, isMulti);
    }
    /**
     * @param {?} value
     * @param {?=} searchFunc
     * @return {?}
     */
    handleSearchValue(value, searchFunc) {
        /** @type {?} */
        const dataList = Object(ng_zorro_antd_core_tree__WEBPACK_IMPORTED_MODULE_7__["flattenTreeData"])(this.nzTreeService.rootNodes, true).map((/**
         * @param {?} v
         * @return {?}
         */
        v => v.data));
        /** @type {?} */
        const checkIfMatched = (/**
         * @param {?} node
         * @return {?}
         */
        (node) => {
            if (searchFunc) {
                return searchFunc(node.origin);
            }
            return !value || !node.title.toLowerCase().includes(value.toLowerCase()) ? false : true;
        });
        dataList.forEach((/**
         * @param {?} v
         * @return {?}
         */
        v => {
            v.isMatched = checkIfMatched(v);
            v.canHide = !v.isMatched;
            if (!v.isMatched) {
                v.setExpanded(false);
                this.nzTreeService.setExpandedNodeList(v);
            }
            else {
                // expand
                this.nzTreeService.expandNodeAllParentBySearch(v);
            }
            this.nzTreeService.setMatchedNodeList(v);
        }));
    }
    /**
     * Handle emit event
     * @param {?} event
     * handle each event
     * @return {?}
     */
    eventTriggerChanged(event) {
        /** @type {?} */
        const node = (/** @type {?} */ (event.node));
        switch (event.eventName) {
            case 'expand':
                this.renderTree();
                this.nzExpandChange.emit(event);
                break;
            case 'click':
                this.nzClick.emit(event);
                break;
            case 'dblclick':
                this.nzDblClick.emit(event);
                break;
            case 'contextmenu':
                this.nzContextMenu.emit(event);
                break;
            case 'check':
                // Render checked state with nodes' property `isChecked`
                this.nzTreeService.setCheckedNodeList(node);
                if (!this.nzCheckStrictly) {
                    this.nzTreeService.conduct(node);
                }
                // Cause check method will rerender list, so we need recover it and next the new event to user
                /** @type {?} */
                const eventNext = this.nzTreeService.formatEvent('check', node, (/** @type {?} */ (event.event)));
                this.nzCheckBoxChange.emit(eventNext);
                break;
            case 'dragstart':
                // if node is expanded
                if (node.isExpanded) {
                    node.setExpanded(!node.isExpanded);
                    this.renderTree();
                }
                this.nzOnDragStart.emit(event);
                break;
            case 'dragenter':
                /** @type {?} */
                const selectedNode = this.nzTreeService.getSelectedNode();
                if (selectedNode && selectedNode.key !== node.key && !node.isExpanded && !node.isLeaf) {
                    node.setExpanded(true);
                    this.renderTree();
                }
                this.nzOnDragEnter.emit(event);
                break;
            case 'dragover':
                this.nzOnDragOver.emit(event);
                break;
            case 'dragleave':
                this.nzOnDragLeave.emit(event);
                break;
            case 'dragend':
                this.nzOnDragEnd.emit(event);
                break;
            case 'drop':
                this.renderTree();
                this.nzOnDrop.emit(event);
                break;
        }
    }
    /**
     * Click expand icon
     * @return {?}
     */
    renderTree() {
        this.handleFlattenNodes(this.nzTreeService.rootNodes, this.getExpandedNodeList().map((/**
         * @param {?} v
         * @return {?}
         */
        v => v.key)));
        this.cdr.markForCheck();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.nzTreeService.flattenNodes$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["takeUntil"])(this.destroy$)).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            this.nzFlattenNodes = data;
            this.cdr.markForCheck();
        }));
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        this.renderTreeProperties(changes);
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.beforeInit = false;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NzTreeComponent.ɵfac = function NzTreeComponent_Factory(t) { return new (t || NzTreeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ng_zorro_antd_core_tree__WEBPACK_IMPORTED_MODULE_7__["NzTreeBaseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_8__["NzConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_4__["NzNoAnimationDirective"], 9)); };
NzTreeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NzTreeComponent, selectors: [["nz-tree"]], contentQueries: function NzTreeComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstaticContentQuery"](dirIndex, _c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.nzTreeTemplateChild = _t.first);
    } }, viewQuery: function NzTreeComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["CdkVirtualScrollViewport"], true, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["CdkVirtualScrollViewport"]);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.cdkVirtualScrollViewport = _t.first);
    } }, hostVars: 18, hostBindings: function NzTreeComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("ant-select-tree", ctx.nzSelectMode)("ant-select-tree-show-line", ctx.nzSelectMode && ctx.nzShowLine)("ant-select-tree-icon-hide", ctx.nzSelectMode && !ctx.nzShowIcon)("ant-select-tree-block-node", ctx.nzSelectMode && ctx.nzBlockNode)("ant-tree", !ctx.nzSelectMode)("ant-tree-show-line", !ctx.nzSelectMode && ctx.nzShowLine)("ant-tree-icon-hide", !ctx.nzSelectMode && !ctx.nzShowIcon)("ant-tree-block-node", !ctx.nzSelectMode && ctx.nzBlockNode)("draggable-tree", ctx.nzDraggable);
    } }, inputs: { nzExpandAll: "nzExpandAll", nzSelectMode: "nzSelectMode", nzCheckStrictly: "nzCheckStrictly", nzShowExpand: "nzShowExpand", nzShowLine: "nzShowLine", nzCheckable: "nzCheckable", nzAsyncData: "nzAsyncData", nzDraggable: "nzDraggable", nzMultiple: "nzMultiple", nzVirtualItemSize: "nzVirtualItemSize", nzVirtualMaxBufferPx: "nzVirtualMaxBufferPx", nzVirtualMinBufferPx: "nzVirtualMinBufferPx", nzVirtualHeight: "nzVirtualHeight", nzData: "nzData", nzExpandedKeys: "nzExpandedKeys", nzSelectedKeys: "nzSelectedKeys", nzCheckedKeys: "nzCheckedKeys", nzShowIcon: "nzShowIcon", nzHideUnMatched: "nzHideUnMatched", nzBlockNode: "nzBlockNode", nzExpandedIcon: "nzExpandedIcon", nzTreeTemplate: "nzTreeTemplate", nzBeforeDrop: "nzBeforeDrop", nzSearchValue: "nzSearchValue", nzSearchFunc: "nzSearchFunc" }, outputs: { nzExpandedKeysChange: "nzExpandedKeysChange", nzSelectedKeysChange: "nzSelectedKeysChange", nzCheckedKeysChange: "nzCheckedKeysChange", nzSearchValueChange: "nzSearchValueChange", nzClick: "nzClick", nzDblClick: "nzDblClick", nzContextMenu: "nzContextMenu", nzCheckBoxChange: "nzCheckBoxChange", nzExpandChange: "nzExpandChange", nzOnDragStart: "nzOnDragStart", nzOnDragEnter: "nzOnDragEnter", nzOnDragOver: "nzOnDragOver", nzOnDragLeave: "nzOnDragLeave", nzOnDrop: "nzOnDrop", nzOnDragEnd: "nzOnDragEnd" }, exportAs: ["nzTree"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([
            NzTreeService,
            {
                provide: ng_zorro_antd_core_tree__WEBPACK_IMPORTED_MODULE_7__["NzTreeBaseService"],
                useFactory: NzTreeServiceFactory,
                deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_2__["SkipSelf"](), new _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"](), ng_zorro_antd_core_tree__WEBPACK_IMPORTED_MODULE_7__["NzTreeHigherOrderServiceToken"]], NzTreeService]
            },
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NG_VALUE_ACCESSOR"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])(( /**
                 * @return {?}
                 */() => NzTreeComponent)),
                multi: true
            }
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]], decls: 8, vars: 7, consts: [["role", "tree"], [3, "ngStyle"], [3, "ant-select-tree-list-holder-inner", "ant-tree-list-holder-inner", "itemSize", "minBufferPx", "maxBufferPx", "height", 4, "ngIf"], [3, "ant-select-tree-list-holder-inner", "ant-tree-list-holder-inner", "nzNoAnimation", 4, "ngIf"], ["nodeTemplate", ""], [3, "itemSize", "minBufferPx", "maxBufferPx"], [4, "cdkVirtualFor", "cdkVirtualForOf", "cdkVirtualForTrackBy"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "nzNoAnimation"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "icon", "title", "isLoading", "isSelected", "isDisabled", "isMatched", "isExpanded", "isLeaf", "isStart", "isEnd", "isChecked", "isHalfChecked", "isDisableCheckbox", "isSelectable", "canHide", "nzTreeNode", "nzSelectMode", "nzShowLine", "nzExpandedIcon", "nzDraggable", "nzCheckable", "nzShowExpand", "nzAsyncData", "nzSearchValue", "nzHideUnMatched", "nzBeforeDrop", "nzShowIcon", "nzTreeTemplate", "nzExpandChange", "nzClick", "nzDblClick", "nzContextMenu", "nzCheckBoxChange", "nzOnDragStart", "nzOnDragEnter", "nzOnDragOver", "nzOnDragLeave", "nzOnDragEnd", "nzOnDrop"]], template: function NzTreeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, NzTreeComponent_cdk_virtual_scroll_viewport_4_Template, 2, 11, "cdk-virtual-scroll-viewport", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, NzTreeComponent_div_5_Template, 2, 9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, NzTreeComponent_ng_template_6_Template, 1, 28, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", ctx.HIDDEN_STYLE);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("ant-select-tree-list", ctx.nzSelectMode)("ant-tree-list", ctx.nzSelectMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.nzVirtualHeight);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.nzVirtualHeight);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["CdkVirtualScrollViewport"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["CdkFixedSizeVirtualScroll"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["CdkVirtualForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgTemplateOutlet"], ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_4__["NzNoAnimationDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], NzTreeNodeComponent], encapsulation: 2, data: { animation: [ng_zorro_antd_core_animation__WEBPACK_IMPORTED_MODULE_14__["treeCollapseMotion"]] }, changeDetection: 0 });
/** @nocollapse */
NzTreeComponent.ctorParameters = () => [
    { type: ng_zorro_antd_core_tree__WEBPACK_IMPORTED_MODULE_7__["NzTreeBaseService"] },
    { type: ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_8__["NzConfigService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
    { type: ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_4__["NzNoAnimationDirective"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Host"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }] }
];
NzTreeComponent.propDecorators = {
    nzShowIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzHideUnMatched: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzBlockNode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzExpandAll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzSelectMode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzCheckStrictly: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzShowExpand: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzShowLine: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzCheckable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzAsyncData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzDraggable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzMultiple: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzExpandedIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzVirtualItemSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzVirtualMaxBufferPx: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzVirtualMinBufferPx: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzVirtualHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzTreeTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzBeforeDrop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzExpandedKeys: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzSelectedKeys: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzCheckedKeys: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzSearchValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzSearchFunc: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzTreeTemplateChild: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"], args: ['nzTreeTemplate', { static: true },] }],
    cdkVirtualScrollViewport: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["CdkVirtualScrollViewport"], { read: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["CdkVirtualScrollViewport"] },] }],
    nzExpandedKeysChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
    nzSelectedKeysChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
    nzCheckedKeysChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
    nzSearchValueChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
    nzClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
    nzDblClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
    nzContextMenu: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
    nzCheckBoxChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
    nzExpandChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
    nzOnDragStart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
    nzOnDragEnter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
    nzOnDragOver: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
    nzOnDragLeave: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
    nzOnDrop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
    nzOnDragEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }]
};
Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_10__["InputBoolean"])(), Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_8__["WithConfig"])(NZ_CONFIG_COMPONENT_NAME, false),
    Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__metadata"])("design:type", Boolean)
], NzTreeComponent.prototype, "nzShowIcon", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_10__["InputBoolean"])(), Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_8__["WithConfig"])(NZ_CONFIG_COMPONENT_NAME, false),
    Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__metadata"])("design:type", Boolean)
], NzTreeComponent.prototype, "nzHideUnMatched", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_10__["InputBoolean"])(), Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_8__["WithConfig"])(NZ_CONFIG_COMPONENT_NAME, false),
    Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__metadata"])("design:type", Boolean)
], NzTreeComponent.prototype, "nzBlockNode", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_10__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__metadata"])("design:type", Object)
], NzTreeComponent.prototype, "nzExpandAll", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_10__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__metadata"])("design:type", Object)
], NzTreeComponent.prototype, "nzSelectMode", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_10__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__metadata"])("design:type", Object)
], NzTreeComponent.prototype, "nzCheckStrictly", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_10__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__metadata"])("design:type", Boolean)
], NzTreeComponent.prototype, "nzShowExpand", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_10__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__metadata"])("design:type", Object)
], NzTreeComponent.prototype, "nzShowLine", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_10__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__metadata"])("design:type", Object)
], NzTreeComponent.prototype, "nzCheckable", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_10__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__metadata"])("design:type", Object)
], NzTreeComponent.prototype, "nzAsyncData", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_10__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__metadata"])("design:type", Boolean)
], NzTreeComponent.prototype, "nzDraggable", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_10__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__metadata"])("design:type", Object)
], NzTreeComponent.prototype, "nzMultiple", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NzTreeIndentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'nz-tree-indent',
                exportAs: 'nzTreeIndent',
                template: ` <span *ngFor="let i of listOfUnit; let index = index" [class]="unitMapOfClass(index)"></span> `,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
                preserveWhitespaces: false,
                host: {
                    '[attr.aria-hidden]': 'true',
                    '[class.ant-tree-indent]': '!nzSelectMode',
                    '[class.ant-select-tree-indent]': 'nzSelectMode'
                }
            }]
    }], function () { return []; }, { nzSelectMode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzTreeLevel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzIsStart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzIsEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NzTreeNodeCheckboxComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'nz-tree-node-checkbox',
                template: ` <span [class.ant-tree-checkbox-inner]="!nzSelectMode" [class.ant-select-tree-checkbox-inner]="nzSelectMode"></span> `,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
                preserveWhitespaces: false,
                host: {
                    '[class.ant-select-tree-checkbox]': `nzSelectMode`,
                    '[class.ant-select-tree-checkbox-checked]': `nzSelectMode && isChecked`,
                    '[class.ant-select-tree-checkbox-indeterminate]': `nzSelectMode && isHalfChecked`,
                    '[class.ant-select-tree-checkbox-disabled]': `nzSelectMode && (isDisabled || isDisableCheckbox)`,
                    '[class.ant-tree-checkbox]': `!nzSelectMode`,
                    '[class.ant-tree-checkbox-checked]': `!nzSelectMode && isChecked`,
                    '[class.ant-tree-checkbox-indeterminate]': `!nzSelectMode && isHalfChecked`,
                    '[class.ant-tree-checkbox-disabled]': `!nzSelectMode && (isDisabled || isDisableCheckbox)`
                }
            }]
    }], function () { return []; }, { nzSelectMode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], isChecked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], isHalfChecked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], isDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], isDisableCheckbox: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NzTreeNodeSwitcherComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'nz-tree-node-switcher',
                template: `
    <ng-container *ngIf="isShowSwitchIcon">
      <ng-container *ngIf="!isLoading; else loadingTemplate">
        <ng-container *nzStringTemplateOutlet="nzExpandedIcon; context: { $implicit: context, origin: context.origin }">
          <i
            nz-icon
            nzType="caret-down"
            [class.ant-select-tree-switcher-icon]="nzSelectMode"
            [class.ant-tree-switcher-icon]="!nzSelectMode"
          ></i>
        </ng-container>
      </ng-container>
    </ng-container>
    <ng-container *ngIf="nzShowLine">
      <ng-container *ngIf="!isLoading; else loadingTemplate">
        <ng-container *nzStringTemplateOutlet="nzExpandedIcon; context: { $implicit: context, origin: context.origin }">
          <i
            *ngIf="isShowLineIcon"
            nz-icon
            [nzType]="isSwitcherOpen ? 'minus-square' : 'plus-square'"
            class="ant-tree-switcher-line-icon"
          ></i>
          <i *ngIf="!isShowLineIcon" nz-icon nzType="file" class="ant-tree-switcher-line-icon"></i>
        </ng-container>
      </ng-container>
    </ng-container>
    <ng-template #loadingTemplate>
      <i nz-icon nzType="loading" [nzSpin]="true" class="ant-tree-switcher-loading-icon"></i>
    </ng-template>
  `,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
                preserveWhitespaces: false,
                host: {
                    '[class.ant-select-tree-switcher]': 'nzSelectMode',
                    '[class.ant-select-tree-switcher-noop]': 'nzSelectMode && isLeaf',
                    '[class.ant-select-tree-switcher_open]': 'nzSelectMode && isSwitcherOpen',
                    '[class.ant-select-tree-switcher_close]': 'nzSelectMode && isSwitcherClose',
                    '[class.ant-tree-switcher]': '!nzSelectMode',
                    '[class.ant-tree-switcher-noop]': '!nzSelectMode && isLeaf',
                    '[class.ant-tree-switcher_open]': '!nzSelectMode && isSwitcherOpen',
                    '[class.ant-tree-switcher_close]': '!nzSelectMode && isSwitcherClose'
                }
            }]
    }], function () { return []; }, { nzSelectMode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzShowExpand: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzShowLine: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzExpandedIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], context: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], isLeaf: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], isLoading: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], isExpanded: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NzTreeNodeTitleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'nz-tree-node-title',
                template: ` <ng-template [ngTemplateOutlet]="treeTemplate" [ngTemplateOutletContext]="{ $implicit: context, origin: context.origin }">
    </ng-template>
    <ng-container *ngIf="!treeTemplate">
      <span
        *ngIf="icon && showIcon"
        [class.ant-tree-icon__open]="isSwitcherOpen"
        [class.ant-tree-icon__close]="isSwitcherClose"
        [class.ant-tree-icon_loading]="isLoading"
        [class.ant-select-tree-iconEle]="selectMode"
        [class.ant-tree-iconEle]="!selectMode"
      >
        <span
          [class.ant-select-tree-iconEle]="selectMode"
          [class.ant-select-tree-icon__customize]="selectMode"
          [class.ant-tree-iconEle]="!selectMode"
          [class.ant-tree-icon__customize]="!selectMode"
        >
          <i nz-icon *ngIf="icon" [nzType]="icon"></i>
        </span>
      </span>
      <span class="ant-tree-title" [innerHTML]="title | nzHighlight: matchedValue:'i':'font-highlight'"> </span>
    </ng-container>`,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
                preserveWhitespaces: false,
                host: {
                    '[attr.title]': 'title',
                    '[attr.draggable]': 'canDraggable',
                    '[attr.aria-grabbed]': 'canDraggable',
                    '[class.draggable]': 'canDraggable',
                    '[class.ant-select-tree-node-content-wrapper]': `selectMode`,
                    '[class.ant-select-tree-node-content-wrapper-open]': `selectMode && isSwitcherOpen`,
                    '[class.ant-select-tree-node-content-wrapper-close]': `selectMode && isSwitcherClose`,
                    '[class.ant-select-tree-node-selected]': `selectMode && isSelected`,
                    '[class.ant-tree-node-content-wrapper]': `!selectMode`,
                    '[class.ant-tree-node-content-wrapper-open]': `!selectMode && isSwitcherOpen`,
                    '[class.ant-tree-node-content-wrapper-close]': `!selectMode && isSwitcherClose`,
                    '[class.ant-tree-node-selected]': `!selectMode && isSelected`
                }
            }]
    }], function () { return []; }, { selectMode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], searchValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], treeTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], draggable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], showIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], context: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], icon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], isLoading: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], isSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], isDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], isMatched: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], isExpanded: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], isLeaf: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NzTreeNodeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'nz-tree-node',
                exportAs: 'nzTreeNode',
                template: `
    <nz-tree-indent [nzTreeLevel]="nzTreeNode.level" [nzSelectMode]="nzSelectMode" [nzIsStart]="isStart" [nzIsEnd]="isEnd"></nz-tree-indent>
    <nz-tree-node-switcher
      *ngIf="nzShowExpand"
      [nzShowExpand]="nzShowExpand"
      [nzShowLine]="nzShowLine"
      [nzExpandedIcon]="nzExpandedIcon"
      [nzSelectMode]="nzSelectMode"
      [context]="nzTreeNode"
      [isLeaf]="isLeaf"
      [isExpanded]="isExpanded"
      [isLoading]="isLoading"
      (click)="clickExpand($event)"
    ></nz-tree-node-switcher>
    <nz-tree-node-checkbox
      *ngIf="nzCheckable"
      (click)="clickCheckBox($event)"
      [nzSelectMode]="nzSelectMode"
      [isChecked]="isChecked"
      [isHalfChecked]="isHalfChecked"
      [isDisabled]="isDisabled"
      [isDisableCheckbox]="isDisableCheckbox"
    ></nz-tree-node-checkbox>
    <nz-tree-node-title
      [icon]="icon"
      [title]="title"
      [isLoading]="isLoading"
      [isSelected]="isSelected"
      [isDisabled]="isDisabled"
      [isMatched]="isMatched"
      [isExpanded]="isExpanded"
      [isLeaf]="isLeaf"
      [searchValue]="nzSearchValue"
      [treeTemplate]="nzTreeTemplate"
      [draggable]="nzDraggable"
      [showIcon]="nzShowIcon"
      [selectMode]="nzSelectMode"
      [context]="nzTreeNode"
      (dblclick)="dblClick($event)"
      (click)="clickSelect($event)"
      (contextmenu)="contextMenu($event)"
    ></nz-tree-node-title>
  `,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
                preserveWhitespaces: false,
                host: {
                    '[class.ant-select-tree-treenode]': `nzSelectMode`,
                    '[class.ant-select-tree-treenode-disabled]': `nzSelectMode && isDisabled`,
                    '[class.ant-select-tree-treenode-switcher-open]': `nzSelectMode && isSwitcherOpen`,
                    '[class.ant-select-tree-treenode-switcher-close]': `nzSelectMode && isSwitcherClose`,
                    '[class.ant-select-tree-treenode-checkbox-checked]': `nzSelectMode && isChecked`,
                    '[class.ant-select-tree-treenode-checkbox-indeterminate]': `nzSelectMode && isHalfChecked`,
                    '[class.ant-select-tree-treenode-selected]': `nzSelectMode && isSelected`,
                    '[class.ant-select-tree-treenode-loading]': `nzSelectMode && isLoading`,
                    '[class.ant-tree-treenode]': `!nzSelectMode`,
                    '[class.ant-tree-treenode-disabled]': `!nzSelectMode && isDisabled`,
                    '[class.ant-tree-treenode-switcher-open]': `!nzSelectMode && isSwitcherOpen`,
                    '[class.ant-tree-treenode-switcher-close]': `!nzSelectMode && isSwitcherClose`,
                    '[class.ant-tree-treenode-checkbox-checked]': `!nzSelectMode && isChecked`,
                    '[class.ant-tree-treenode-checkbox-indeterminate]': `!nzSelectMode && isHalfChecked`,
                    '[class.ant-tree-treenode-selected]': `!nzSelectMode && isSelected`,
                    '[class.ant-tree-treenode-loading]': `!nzSelectMode && isLoading`,
                    '[style.display]': 'displayStyle',
                    '(mousedown)': 'onMousedown($event)'
                }
            }]
    }], function () { return [{ type: ng_zorro_antd_core_tree__WEBPACK_IMPORTED_MODULE_7__["NzTreeBaseService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] }, { type: ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_4__["NzNoAnimationDirective"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Host"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }] }]; }, { nzHideUnMatched: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzNoAnimation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzSelectMode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzShowIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzSearchValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], nzDblClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], nzContextMenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], nzCheckBoxChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], nzExpandChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], nzOnDragStart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], nzOnDragEnter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], nzOnDragOver: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], nzOnDragLeave: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], nzOnDrop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], nzOnDragEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], icon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], isLoading: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], isSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], isDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], isMatched: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], isExpanded: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], isLeaf: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], isChecked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], isHalfChecked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], isDisableCheckbox: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], isSelectable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], canHide: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], isStart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], isEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzTreeNode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzShowLine: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzShowExpand: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzCheckable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzAsyncData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzExpandedIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzTreeTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzBeforeDrop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzDraggable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NzTreeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
    }], function () { return []; }, null); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NzTreeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'nz-tree',
                exportAs: 'nzTree',
                animations: [ng_zorro_antd_core_animation__WEBPACK_IMPORTED_MODULE_14__["treeCollapseMotion"]],
                template: `
    <div role="tree">
      <input [ngStyle]="HIDDEN_STYLE" />
    </div>
    <div [class.ant-select-tree-list]="nzSelectMode" [class.ant-tree-list]="nzSelectMode">
      <div>
        <cdk-virtual-scroll-viewport
          *ngIf="nzVirtualHeight"
          [class.ant-select-tree-list-holder-inner]="nzSelectMode"
          [class.ant-tree-list-holder-inner]="nzSelectMode"
          [itemSize]="nzVirtualItemSize"
          [minBufferPx]="nzVirtualMinBufferPx"
          [maxBufferPx]="nzVirtualMaxBufferPx"
          [style.height]="nzVirtualHeight"
        >
          <ng-container *cdkVirtualFor="let node of nzFlattenNodes; trackBy: trackByFlattenNode">
            <ng-template [ngTemplateOutlet]="nodeTemplate" [ngTemplateOutletContext]="{ $implicit: node }"></ng-template>
          </ng-container>
        </cdk-virtual-scroll-viewport>

        <div
          *ngIf="!nzVirtualHeight"
          [class.ant-select-tree-list-holder-inner]="nzSelectMode"
          [class.ant-tree-list-holder-inner]="nzSelectMode"
          [@.disabled]="beforeInit || noAnimation?.nzNoAnimation"
          [nzNoAnimation]="noAnimation?.nzNoAnimation"
          [@treeCollapseMotion]="nzFlattenNodes.length"
        >
          <ng-container *ngFor="let node of nzFlattenNodes; trackBy: trackByFlattenNode">
            <ng-template [ngTemplateOutlet]="nodeTemplate" [ngTemplateOutletContext]="{ $implicit: node }"></ng-template>
          </ng-container>
        </div>
      </div>
    </div>
    <ng-template #nodeTemplate let-treeNode>
      <nz-tree-node
        [icon]="treeNode.icon"
        [title]="treeNode.title"
        [isLoading]="treeNode.isLoading"
        [isSelected]="treeNode.isSelected"
        [isDisabled]="treeNode.isDisabled"
        [isMatched]="treeNode.isMatched"
        [isExpanded]="treeNode.isExpanded"
        [isLeaf]="treeNode.isLeaf"
        [isStart]="treeNode.isStart"
        [isEnd]="treeNode.isEnd"
        [isChecked]="treeNode.isChecked"
        [isHalfChecked]="treeNode.isHalfChecked"
        [isDisableCheckbox]="treeNode.isDisableCheckbox"
        [isSelectable]="treeNode.isSelectable"
        [canHide]="treeNode.canHide"
        [nzTreeNode]="treeNode"
        [nzSelectMode]="nzSelectMode"
        [nzShowLine]="nzShowLine"
        [nzExpandedIcon]="nzExpandedIcon"
        [nzDraggable]="nzDraggable"
        [nzCheckable]="nzCheckable"
        [nzShowExpand]="nzShowExpand"
        [nzAsyncData]="nzAsyncData"
        [nzSearchValue]="nzSearchValue"
        [nzHideUnMatched]="nzHideUnMatched"
        [nzBeforeDrop]="nzBeforeDrop"
        [nzShowIcon]="nzShowIcon"
        [nzTreeTemplate]="nzTreeTemplate || nzTreeTemplateChild"
        (nzExpandChange)="eventTriggerChanged($event)"
        (nzClick)="eventTriggerChanged($event)"
        (nzDblClick)="eventTriggerChanged($event)"
        (nzContextMenu)="eventTriggerChanged($event)"
        (nzCheckBoxChange)="eventTriggerChanged($event)"
        (nzOnDragStart)="eventTriggerChanged($event)"
        (nzOnDragEnter)="eventTriggerChanged($event)"
        (nzOnDragOver)="eventTriggerChanged($event)"
        (nzOnDragLeave)="eventTriggerChanged($event)"
        (nzOnDragEnd)="eventTriggerChanged($event)"
        (nzOnDrop)="eventTriggerChanged($event)"
      >
      </nz-tree-node>
    </ng-template>
  `,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
                providers: [
                    NzTreeService,
                    {
                        provide: ng_zorro_antd_core_tree__WEBPACK_IMPORTED_MODULE_7__["NzTreeBaseService"],
                        useFactory: NzTreeServiceFactory,
                        deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_2__["SkipSelf"](), new _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"](), ng_zorro_antd_core_tree__WEBPACK_IMPORTED_MODULE_7__["NzTreeHigherOrderServiceToken"]], NzTreeService]
                    },
                    {
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NG_VALUE_ACCESSOR"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])(( /**
                         * @return {?}
                         */() => NzTreeComponent)),
                        multi: true
                    }
                ],
                host: {
                    '[class.ant-select-tree]': `nzSelectMode`,
                    '[class.ant-select-tree-show-line]': `nzSelectMode && nzShowLine`,
                    '[class.ant-select-tree-icon-hide]': `nzSelectMode && !nzShowIcon`,
                    '[class.ant-select-tree-block-node]': `nzSelectMode && nzBlockNode`,
                    '[class.ant-tree]': `!nzSelectMode`,
                    '[class.ant-tree-show-line]': `!nzSelectMode && nzShowLine`,
                    '[class.ant-tree-icon-hide]': `!nzSelectMode && !nzShowIcon`,
                    '[class.ant-tree-block-node]': `!nzSelectMode && nzBlockNode`,
                    '[class.draggable-tree]': `nzDraggable`
                }
            }]
    }], function () { return [{ type: ng_zorro_antd_core_tree__WEBPACK_IMPORTED_MODULE_7__["NzTreeBaseService"] }, { type: ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_8__["NzConfigService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] }, { type: ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_4__["NzNoAnimationDirective"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Host"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }] }]; }, { nzExpandAll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzSelectMode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzCheckStrictly: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzShowExpand: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzShowLine: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzCheckable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzAsyncData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzDraggable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzMultiple: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzVirtualItemSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzVirtualMaxBufferPx: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzVirtualMinBufferPx: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzVirtualHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzExpandedKeys: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzSelectedKeys: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzCheckedKeys: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzExpandedKeysChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], nzSelectedKeysChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], nzCheckedKeysChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], nzSearchValueChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], nzClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], nzDblClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], nzContextMenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], nzCheckBoxChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], nzExpandChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], nzOnDragStart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], nzOnDragEnter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], nzOnDragOver: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], nzOnDragLeave: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], nzOnDrop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], nzOnDragEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], nzShowIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzHideUnMatched: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzBlockNode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzExpandedIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzTreeTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzBeforeDrop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzSearchValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzSearchFunc: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzTreeTemplateChild: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"],
            args: ['nzTreeTemplate', { static: true }]
        }], cdkVirtualScrollViewport: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["CdkVirtualScrollViewport"], { read: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["CdkVirtualScrollViewport"] }]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: tree.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzTreeModule {
}
NzTreeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: NzTreeModule });
NzTreeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function NzTreeModule_Factory(t) { return new (t || NzTreeModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_5__["NzOutletModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__["NzIconModule"], ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_4__["NzNoAnimationModule"], ng_zorro_antd_core_highlight__WEBPACK_IMPORTED_MODULE_3__["NzHighlightModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollingModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](NzTreeModule, { declarations: function () { return [NzTreeComponent,
        NzTreeNodeComponent,
        NzTreeIndentComponent,
        NzTreeNodeSwitcherComponent,
        NzTreeNodeCheckboxComponent,
        NzTreeNodeTitleComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_5__["NzOutletModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__["NzIconModule"], ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_4__["NzNoAnimationModule"], ng_zorro_antd_core_highlight__WEBPACK_IMPORTED_MODULE_3__["NzHighlightModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollingModule"]]; }, exports: function () { return [NzTreeComponent,
        NzTreeNodeComponent,
        NzTreeIndentComponent]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NzTreeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_5__["NzOutletModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__["NzIconModule"], ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_4__["NzNoAnimationModule"], ng_zorro_antd_core_highlight__WEBPACK_IMPORTED_MODULE_3__["NzHighlightModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollingModule"]],
                declarations: [
                    NzTreeComponent,
                    NzTreeNodeComponent,
                    NzTreeIndentComponent,
                    NzTreeNodeSwitcherComponent,
                    NzTreeNodeCheckboxComponent,
                    NzTreeNodeTitleComponent
                ],
                exports: [NzTreeComponent, NzTreeNodeComponent, NzTreeIndentComponent]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ng-zorro-antd-tree.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ng-zorro-antd-tree.js.map

/***/ })

};;
//# sourceMappingURL=code-editor-index-module~empty-index-module~space-index-module~transfer-index-module~tree-index-modu~a995d4e0.js.map