exports.ids = ["table-index-module"];
exports.modules = {

/***/ "0yNJ":
/*!********************************************!*\
  !*** ./site/doc/app/table/en.component.ts ***!
  \********************************************/
/*! exports provided: NzDemoTableEnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoTableEnComponent", function() { return NzDemoTableEnComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _share_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../share/codebox/codebox.component */ "rKiv");
/* harmony import */ var ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/affix */ "utH8");
/* harmony import */ var ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/anchor */ "l83q");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/icon */ "MOHP");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "uLhK");
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ "pk25");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/grid */ "T+9E");
/* harmony import */ var _basic__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./basic */ "mXrf");
/* harmony import */ var _row_selection_and_operation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./row-selection-and-operation */ "7OiN");
/* harmony import */ var _row_selection_custom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./row-selection-custom */ "kVUP");
/* harmony import */ var _sort_filter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sort-filter */ "v+Nj");
/* harmony import */ var _multiple_sorter__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./multiple-sorter */ "G10C");
/* harmony import */ var _reset_filter__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./reset-filter */ "V3E5");
/* harmony import */ var _custom_filter_panel__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./custom-filter-panel */ "cNqO");
/* harmony import */ var _ajax__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./ajax */ "OFDT");
/* harmony import */ var _size__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./size */ "rc0e");
/* harmony import */ var _bordered__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./bordered */ "Zgf6");
/* harmony import */ var _expand__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./expand */ "6pFZ");
/* harmony import */ var _colspan_rowspan__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./colspan-rowspan */ "x+js");
/* harmony import */ var _expand_children__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./expand-children */ "q/+K");
/* harmony import */ var _fixed_header__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./fixed-header */ "HhJM");
/* harmony import */ var _fixed_columns__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./fixed-columns */ "fJNJ");
/* harmony import */ var _fixed_columns_header__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./fixed-columns-header */ "u5qx");
/* harmony import */ var _grouping_columns__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./grouping-columns */ "LkeO");
/* harmony import */ var _edit_cell__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./edit-cell */ "4SUl");
/* harmony import */ var _edit_row__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./edit-row */ "ScYO");
/* harmony import */ var _nested_table__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./nested-table */ "EYm2");
/* harmony import */ var _virtual__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./virtual */ "JINn");
/* harmony import */ var _drag_sorting__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./drag-sorting */ "tXfh");
/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./template */ "grK3");
/* harmony import */ var _break_word__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./break-word */ "pwEb");
/* harmony import */ var _ellipsis__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./ellipsis */ "ip+q");
/* harmony import */ var _dynamic_settings__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./dynamic-settings */ "PHiq");
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ng-zorro-antd/table */ "mK+R");





































class NzDemoTableEnComponent {
    constructor() {
        this.expanded = false;
    }
    goLink(link) {
        if (window) {
            window.location.hash = link;
        }
    }
    expandAllCode() {
        this.expanded = !this.expanded;
        this.codeBoxes.forEach(code => {
            code.nzExpanded = this.expanded;
            code.expandCode(this.expanded);
            code.check();
        });
    }
}
NzDemoTableEnComponent.ɵfac = function NzDemoTableEnComponent_Factory(t) { return new (t || NzDemoTableEnComponent)(); };
NzDemoTableEnComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoTableEnComponent, selectors: [["nz-demo-table"]], viewQuery: function NzDemoTableEnComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_share_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_1__["NzCodeBoxComponent"], true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.codeBoxes = _t);
    } }, decls: 2299, vars: 108, consts: [[1, "toc-affix", 3, "nzOffsetTop"], ["nzShowInkInFixed", "", 3, "nzAffix", "nzClick"], ["nzHref", "#components-table-demo-basic", "nzTitle", "Basic Usage"], ["nzHref", "#components-table-demo-row-selection-and-operation", "nzTitle", "Selection and operation"], ["nzHref", "#components-table-demo-row-selection-custom", "nzTitle", "Custom selection"], ["nzHref", "#components-table-demo-sort-filter", "nzTitle", "Filter and sorter"], ["nzHref", "#components-table-demo-multiple-sorter", "nzTitle", "Multiple sorter"], ["nzHref", "#components-table-demo-reset-filter", "nzTitle", "Reset filters and sorters"], ["nzHref", "#components-table-demo-custom-filter-panel", "nzTitle", "Customized filter panel"], ["nzHref", "#components-table-demo-ajax", "nzTitle", "Ajax"], ["nzHref", "#components-table-demo-size", "nzTitle", "size"], ["nzHref", "#components-table-demo-bordered", "nzTitle", "border, title and footer"], ["nzHref", "#components-table-demo-expand", "nzTitle", "Expandable Row"], ["nzHref", "#components-table-demo-colspan-rowspan", "nzTitle", "colSpan and rowSpan"], ["nzHref", "#components-table-demo-expand-children", "nzTitle", "Tree data"], ["nzHref", "#components-table-demo-fixed-header", "nzTitle", "Fixed Header"], ["nzHref", "#components-table-demo-fixed-columns", "nzTitle", "Fixed Columns"], ["nzHref", "#components-table-demo-fixed-columns-header", "nzTitle", "Fixed Columns and Header"], ["nzHref", "#components-table-demo-grouping-columns", "nzTitle", "Grouping table head"], ["nzHref", "#components-table-demo-edit-cell", "nzTitle", "Editable Cells"], ["nzHref", "#components-table-demo-edit-row", "nzTitle", "Editable Rows"], ["nzHref", "#components-table-demo-nested-table", "nzTitle", "Nested tables"], ["nzHref", "#components-table-demo-virtual", "nzTitle", "Virtual Scroll"], ["nzHref", "#components-table-demo-drag-sorting", "nzTitle", "Drag sorting"], ["nzHref", "#components-table-demo-template", "nzTitle", "Template"], ["nzHref", "#components-table-demo-break-word", "nzTitle", "Break Word"], ["nzHref", "#components-table-demo-ellipsis", "nzTitle", "ellipsis column"], ["nzHref", "#components-table-demo-dynamic-settings", "nzTitle", "Dynamic Settings"], ["nzHref", "#api", "nzTitle", "API"], [1, "markdown"], [1, "subtitle"], [1, "widget"], ["aria-label", "Edit this page on Github", "href", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/table/doc/index.en-US.md", "target", "_blank", "rel", "noopener noreferrer", 1, "edit-button"], ["nz-icon", "", "nzType", "edit"], ["id", "when-to-use"], ["onclick", "window.location.hash = 'when-to-use'", 1, "anchor"], [1, "language-ts"], [1, "token", "keyword"], [1, "token", "punctuation"], [1, "token", "string"], ["id", "how-to-use"], ["onclick", "window.location.hash = 'how-to-use'", 1, "anchor"], ["id", "highly-customizable"], ["onclick", "window.location.hash = 'highly-customizable'", 1, "anchor"], ["href", "https://www.w3.org/TR/html401/struct/tables.html", "target", "_blank", "rel", "noopener"], ["id", "component-enhancements"], ["onclick", "window.location.hash = 'component-enhancements'", 1, "anchor"], ["id", "data-processing"], ["onclick", "window.location.hash = 'data-processing'", 1, "anchor"], ["href", "https://angular.io/guide/template-syntax#statement-context", "target", "_blank", "rel", "noopener"], [1, "language-html"], [1, "token", "tag"], [1, "token", "attr-name"], [1, "token", "attr-value"], ["nz-icon", "", "nzType", "appstore", "nz-tooltip", "", "nzTooltipTitle", "Expand All Code", 1, "code-box-expand-trigger", 3, "click"], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", 3, "nzSpan"], ["nzTitle", "Basic Usage", "nzSelector", "nz-demo-table-basic", "nzGenerateCommand", "ng g ng-zorro-antd:table-basic <name>", "nzComponentName", "NzDemoTableBasicComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], ["demo", ""], ["intro", ""], ["nzTitle", "Selection and operation", "nzSelector", "nz-demo-table-row-selection-and-operation", "nzGenerateCommand", "ng g ng-zorro-antd:table-row-selection-and-operation <name>", "nzComponentName", "NzDemoTableRowSelectionAndOperationComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], ["nzTitle", "Custom selection", "nzSelector", "nz-demo-table-row-selection-custom", "nzGenerateCommand", "ng g ng-zorro-antd:table-row-selection-custom <name>", "nzComponentName", "NzDemoTableRowSelectionCustomComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], ["nzTitle", "Filter and sorter", "nzSelector", "nz-demo-table-sort-filter", "nzGenerateCommand", "ng g ng-zorro-antd:table-sort-filter <name>", "nzComponentName", "NzDemoTableSortFilterComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], ["nzTitle", "Multiple sorter", "nzSelector", "nz-demo-table-multiple-sorter", "nzGenerateCommand", "ng g ng-zorro-antd:table-multiple-sorter <name>", "nzComponentName", "NzDemoTableMultipleSorterComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], ["nzTitle", "Reset filters and sorters", "nzSelector", "nz-demo-table-reset-filter", "nzGenerateCommand", "ng g ng-zorro-antd:table-reset-filter <name>", "nzComponentName", "NzDemoTableResetFilterComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], ["nzTitle", "Customized filter panel", "nzSelector", "nz-demo-table-custom-filter-panel", "nzGenerateCommand", "ng g ng-zorro-antd:table-custom-filter-panel <name>", "nzComponentName", "NzDemoTableCustomFilterPanelComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], ["nzTitle", "Ajax", "nzSelector", "nz-demo-table-ajax", "nzGenerateCommand", "ng g ng-zorro-antd:table-ajax <name>", "nzComponentName", "NzDemoTableAjaxComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], [1, "language-typescript"], [1, "token", "operator"], ["href", "https://randomuser.me", "target", "_blank", "rel", "noopener"], ["nzTitle", "size", "nzSelector", "nz-demo-table-size", "nzGenerateCommand", "ng g ng-zorro-antd:table-size <name>", "nzComponentName", "NzDemoTableSizeComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], ["nzTitle", "border, title and footer", "nzSelector", "nz-demo-table-bordered", "nzGenerateCommand", "ng g ng-zorro-antd:table-bordered <name>", "nzComponentName", "NzDemoTableBorderedComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], ["nzTitle", "Expandable Row", "nzSelector", "nz-demo-table-expand", "nzGenerateCommand", "ng g ng-zorro-antd:table-expand <name>", "nzComponentName", "NzDemoTableExpandComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], ["nzTitle", "colSpan and rowSpan", "nzSelector", "nz-demo-table-colspan-rowspan", "nzGenerateCommand", "ng g ng-zorro-antd:table-colspan-rowspan <name>", "nzComponentName", "NzDemoTableColspanRowspanComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], ["nzTitle", "Tree data", "nzSelector", "nz-demo-table-expand-children", "nzGenerateCommand", "ng g ng-zorro-antd:table-expand-children <name>", "nzComponentName", "NzDemoTableExpandChildrenComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], ["nzTitle", "Fixed Header", "nzSelector", "nz-demo-table-fixed-header", "nzGenerateCommand", "ng g ng-zorro-antd:table-fixed-header <name>", "nzComponentName", "NzDemoTableFixedHeaderComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], ["nzTitle", "Fixed Columns", "nzSelector", "nz-demo-table-fixed-columns", "nzGenerateCommand", "ng g ng-zorro-antd:table-fixed-columns <name>", "nzComponentName", "NzDemoTableFixedColumnsComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], ["nzTitle", "Fixed Columns and Header", "nzSelector", "nz-demo-table-fixed-columns-header", "nzGenerateCommand", "ng g ng-zorro-antd:table-fixed-columns-header <name>", "nzComponentName", "NzDemoTableFixedColumnsHeaderComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], ["nzTitle", "Grouping table head", "nzSelector", "nz-demo-table-grouping-columns", "nzGenerateCommand", "ng g ng-zorro-antd:table-grouping-columns <name>", "nzComponentName", "NzDemoTableGroupingColumnsComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], ["nzTitle", "Editable Cells", "nzSelector", "nz-demo-table-edit-cell", "nzGenerateCommand", "ng g ng-zorro-antd:table-edit-cell <name>", "nzComponentName", "NzDemoTableEditCellComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], ["href", "https://angular.io/api/core/ChangeDetectionStrategy", "target", "_blank", "rel", "noopener"], ["nzTitle", "Editable Rows", "nzSelector", "nz-demo-table-edit-row", "nzGenerateCommand", "ng g ng-zorro-antd:table-edit-row <name>", "nzComponentName", "NzDemoTableEditRowComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], ["nzTitle", "Nested tables", "nzSelector", "nz-demo-table-nested-table", "nzGenerateCommand", "ng g ng-zorro-antd:table-nested-table <name>", "nzComponentName", "NzDemoTableNestedTableComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], ["nzTitle", "Virtual Scroll", "nzSelector", "nz-demo-table-virtual", "nzGenerateCommand", "ng g ng-zorro-antd:table-virtual <name>", "nzComponentName", "NzDemoTableVirtualComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], ["href", "https://material.angular.io/cdk/scrolling/overview", "target", "_blank", "rel", "noopener"], ["href", "https://material.angular.io/cdk/scrolling/api#CdkVirtualScrollViewport", "target", "_blank", "rel", "noopener"], ["nzTitle", "Drag sorting", "nzSelector", "nz-demo-table-drag-sorting", "nzGenerateCommand", "ng g ng-zorro-antd:table-drag-sorting <name>", "nzComponentName", "NzDemoTableDragSortingComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], ["href", "https://material.angular.io/cdk/drag-drop/overview", "target", "_blank", "rel", "noopener"], ["nzTitle", "Template", "nzSelector", "nz-demo-table-template", "nzGenerateCommand", "ng g ng-zorro-antd:table-template <name>", "nzComponentName", "NzDemoTableTemplateComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], ["nzTitle", "Break Word", "nzSelector", "nz-demo-table-break-word", "nzGenerateCommand", "ng g ng-zorro-antd:table-break-word <name>", "nzComponentName", "NzDemoTableBreakWordComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], ["nzTitle", "ellipsis column", "nzSelector", "nz-demo-table-ellipsis", "nzGenerateCommand", "ng g ng-zorro-antd:table-ellipsis <name>", "nzComponentName", "NzDemoTableEllipsisComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], ["nzTitle", "Dynamic Settings", "nzSelector", "nz-demo-table-dynamic-settings", "nzGenerateCommand", "ng g ng-zorro-antd:table-dynamic-settings <name>", "nzComponentName", "NzDemoTableDynamicSettingsComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], [1, "markdown", "api-container"], ["id", "api"], ["onclick", "window.location.hash = 'api'", 1, "anchor"], ["id", "nz-table"], [1, "api-type-label", "component"], ["onclick", "window.location.hash = 'nz-table'", 1, "anchor"], ["href", "https://material.angular.io/cdk/scrolling/api", "target", "_blank", "rel", "noopener"], ["id", "th"], ["onclick", "window.location.hash = 'th'", 1, "anchor"], ["id", "td"], ["onclick", "window.location.hash = 'td'", 1, "anchor"], ["id", "tr"], ["onclick", "window.location.hash = 'tr'", 1, "anchor"], ["id", "nz-filter-trigger"], ["onclick", "window.location.hash = 'nz-filter-trigger'", 1, "anchor"], ["id", "[nz-virtual-scroll]"], [1, "api-type-label", "directive"], ["onclick", "window.location.hash = '[nz-virtual-scroll]'", 1, "anchor"], ["id", "note"], ["onclick", "window.location.hash = 'note'", 1, "anchor"], ["spellcheck", "true", 1, "token", "comment"], [1, "token", "template-string"], [1, "token", "interpolation"], [1, "token", "interpolation-punctuation", "punctuation"], [1, "token", "function"], ["href", "https://immerjs.github.io/immer/docs/introduction", "target", "_blank", "rel", "noopener"]], template: function NzDemoTableEnComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-affix", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nz-anchor", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzClick", function NzDemoTableEnComponent_Template_nz_anchor_nzClick_2_listener($event) { return ctx.goLink($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "nz-link", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "nz-link", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "nz-link", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "nz-link", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "nz-link", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "nz-link", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "nz-link", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "nz-link", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "nz-link", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "nz-link", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "nz-link", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "nz-link", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "nz-link", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "nz-link", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "nz-link", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "nz-link", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "nz-link", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "nz-link", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "nz-link", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "nz-link", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "nz-link", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "nz-link", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "nz-link", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "nz-link", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "nz-link", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "nz-link", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "nz-link", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "section", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "i", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "section", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "A table displays rows of data.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h2", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "When To Use");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " To display a collection of structured data.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " To sort, search, paginate and filter data.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "pre", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "import");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "{");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " NzTableModule ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "from");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "'ng-zorro-antd/table'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "h2", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "How To Use");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "a", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "The Table component is both easy to use and highly customizable.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "h3", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Highly Customizable");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "a", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "The ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "nz-table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, " can be used like ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, " W3C Standard <table>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, ". Developers can control every part of the table as they wish.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "h3", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Component Enhancements");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "a", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "The component in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "nz-table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, " such as ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, " etc. are enhanced. Developers can make the table sortable, filterable, with fixed header, perform server side rendering etc. easily with the provided api.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "h3", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Data Processing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "a", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "The data passed to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "[nzData]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, " is exported with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "a", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Template Context");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, " after processing (including paging, sorting and filtering). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "*ngFor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, " can be used to render current page data in table.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "pre", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "nz-table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "span", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "#basicTable");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "span", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "[nzData]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "span", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "dataSet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, "Age");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](211, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](216, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](219, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](223, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](226, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](227, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](231, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](232, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](234, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](235, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](239, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](240, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](242, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](243, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](247, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](248, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](250, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](251, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](255, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](256, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](257, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "span", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](259, "*ngFor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "span", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](262, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](264, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](265, "let data of basicTable.data");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](267, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](269, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](270, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](274, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](275, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](277, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](278, "{{data.name}}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](282, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](283, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](284, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](285, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](286, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](290, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](291, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](293, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](294, "{{data.age}}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](295, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](297, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](298, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](299, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](301, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](302, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](303, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](304, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](306, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](307, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](308, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](309, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](310, "{{data.address}}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](311, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](312, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](313, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](314, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](315, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](316, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](317, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](318, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](319, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](320, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](321, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](322, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](323, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](324, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](325, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](326, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](327, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](328, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](329, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](330, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](331, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](332, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](333, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](334, "Action \u4E00 {{data.name}}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](335, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](336, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](337, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](338, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](339, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](340, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](341, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](342, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](343, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](344, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](345, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](346, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](347, "nz-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](348, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](349, "span", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](350, "nzType");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](351, "span", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](352, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](353, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](354, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](355, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](356, "vertical");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](357, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](358, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](359, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](360, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](361, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](362, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](363, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](364, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](365, "nz-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](366, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](367, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](368, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](369, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](370, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](371, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](372, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](373, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](374, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](375, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](376, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](377, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](378, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](379, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](380, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](381, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](382, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](383, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](384, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](385, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](386, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](387, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](388, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](389, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](390, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](391, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](392, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](393, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](394, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](395, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](396, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](397, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](398, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](399, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](400, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](401, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](402, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](403, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](404, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](405, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](406, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](407, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](408, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](409, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](410, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](411, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](412, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](413, "nz-table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](414, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](415, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](416, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](417, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](418, "Examples");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](419, "i", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoTableEnComponent_Template_i_click_419_listener() { return ctx.expandAllCode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](420, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](421, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](422, "nz-code-box", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](423, "nz-demo-table-basic", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](424, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](425, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](426, "Simple table with actions.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](427, "nz-code-box", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](428, "nz-demo-table-row-selection-and-operation", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](429, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](430, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](431, "Rows can be selectable by making first column as a selectable column, to perform operations and clear selections after selecting some rows, all data strategy should be controlled by the developers.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](432, "nz-code-box", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](433, "nz-demo-table-row-selection-custom", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](434, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](435, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](436, "Use ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](437, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](438, "nzSelections");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](439, " to custom selections.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](440, "nz-code-box", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](441, "nz-demo-table-sort-filter", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](442, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](443, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](444, "Filter: Use ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](445, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](446, "[nzFilters]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](447, " to define options of the filter menu, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](448, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](449, "[nzFilterFn]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](450, " to determine filtered result, and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](451, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](452, "[nzFilterMultiple]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](453, " to indicate whether it's multiple or single selection, you can enable a filter by default by setting a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](454, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](455, "[nzFilters]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](456, " object's property: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](457, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](458, "{ byDefault: true }");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](459, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](460, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](461, "Sort: Use ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](462, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](463, "[nzSortOrder]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](464, " to make a column sorted by default, use ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](465, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](466, "[nzSortFn]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](467, " to determine sort result, and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](468, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](469, "[nzSortDirections]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](470, " to define available sort methods.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](471, "nz-code-box", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](472, "nz-demo-table-multiple-sorter", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](473, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](474, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](475, "\u4F7F\u7528 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](476, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](477, "[nzSortPriority]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](478, " to config the priority of sort columns. Though ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](479, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](480, "[nzSortFn]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](481, " to customize compare function.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](482, "nz-code-box", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](483, "nz-demo-table-reset-filter", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](484, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](485, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](486, "Control sorters and filters by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](487, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](488, "[nzSortOrder]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](489, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](490, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](491, "[nzFilters]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](492, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](493, "nz-code-box", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](494, "nz-demo-table-custom-filter-panel", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](495, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](496, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](497, "Implement a customized column search example via ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](498, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](499, "<nz-filter-trigger>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](500, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](501, "nz-code-box", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](502, "nz-demo-table-ajax", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](503, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](504, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](505, "This example shows how to fetch and present data from remote server, and how to implement filtering and sorting in server side by sending related parameters to server.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](506, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](507, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](508, " Pagination\uFF1ASet ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](509, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](510, "[nzFrontPagination]=\"false\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](511, " to disable frontend pagination.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](512, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](513, " Sort\uFF1ASet ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](514, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](515, "[nzSortFn]=\"true\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](516, " to enable server sort, if you need multiple sort, set ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](517, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](518, "[nzSortPriority]=\"true\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](519, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](520, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](521, " Filter\uFF1APass options to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](522, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](523, "[nzFilters]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](524, " and set ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](525, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](526, "[nzFilterFn]=\"true\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](527, " to enable server filter.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](528, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](529, " Params\uFF1AGet all params from ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](530, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](531, "(nzQueryParams)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](532, ", the data structure is");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](533, "pre", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](534, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](535, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](536, "{");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](537, "\n  pageIndex");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](538, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](539, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](540, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](541, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](542, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](543, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](544, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](545, "\n  pageSize");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](546, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](547, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](548, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](549, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](550, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](551, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](552, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](553, "\n  sort");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](554, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](555, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](556, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](557, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](558, "Array");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](559, "span", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](560, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](561, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](562, "{");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](563, " key");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](564, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](565, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](566, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](567, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](568, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](569, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](570, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](571, " value");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](572, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](573, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](574, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](575, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](576, "'ascend'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](577, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](578, "span", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](579, "|");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](580, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](581, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](582, "'descend'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](583, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](584, "span", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](585, "|");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](586, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](587, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](588, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](589, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](590, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](591, "}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](592, "span", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](593, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](594, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](595, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](596, "\n  filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](597, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](598, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](599, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](600, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](601, "Array");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](602, "span", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](603, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](604, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](605, "{");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](606, " key");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](607, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](608, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](609, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](610, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](611, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](612, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](613, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](614, " value");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](615, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](616, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](617, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](618, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](619, "any");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](620, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](621, "span", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](622, "|");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](623, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](624, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](625, "any");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](626, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](627, "[");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](628, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](629, "]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](630, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](631, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](632, "}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](633, "span", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](634, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](635, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](636, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](637, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](638, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](639, "}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](640, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](641, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](642, "Note, this example uses a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](643, "a", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](644, "Mock API");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](645, " that you can look up in Network Console.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](646, "nz-code-box", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](647, "nz-demo-table-size", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](648, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](649, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](650, "Two compacted table size: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](651, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](652, "middle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](653, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](654, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](655, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](656, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](657, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](658, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](659, " size is used in Modal only.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](660, "nz-code-box", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](661, "nz-demo-table-bordered", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](662, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](663, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](664, "Add border, title and footer for table.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](665, "nz-code-box", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](666, "nz-demo-table-expand", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](667, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](668, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](669, "When there's too much information to show and the table can't display all at once.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](670, "nz-code-box", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](671, "nz-demo-table-colspan-rowspan", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](672, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](673, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](674, "Use ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](675, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](676, "colspan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](677, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](678, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](679, "rowspan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](680, " like ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](681, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](682, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](683, "W3C standards <table>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](684, "nz-code-box", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](685, "nz-demo-table-expand-children", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](686, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](687, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](688, "Display tree structure data in Table, control the indent width by setting ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](689, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](690, "nzIndentSize");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](691, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](692, "nz-code-box", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](693, "nz-demo-table-fixed-header", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](694, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](695, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](696, "Display large amounts of data in scrollable view via set ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](697, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](698, "y");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](699, " of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](700, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](701, "[nzScroll]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](702, ", you can specify column width via ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](703, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](704, "[nzWidth]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](705, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](706, "nz-code-box", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](707, "nz-demo-table-fixed-columns", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](708, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](709, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](710, "To fix some columns and scroll inside other columns, and you must set ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](711, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](712, "[nzScroll].x");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](713, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](714, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](715, "[nzLeft]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](716, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](717, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](718, "[nzRight]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](719, " meanwhile.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](720, "blockquote");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](721, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](722, "Specify the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](723, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](724, "[nzWidth]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](725, " of columns if header and cell do not align properly. If specified width is not working or have gutter between columns, please try to leave one column at least without width to fit fluid layout, or make sure no long word to break table layout.\nA fixed value which is greater than table width for ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](726, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](727, "nzScroll.x");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](728, " is recommended. The sum of unfixed columns should not greater than ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](729, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](730, "nzScroll.x");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](731, ".\nNote: We using sticky to implement fixed effect. IE 11 will downgrade to horizontal scroll.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](732, "nz-code-box", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](733, "nz-demo-table-fixed-columns-header", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](734, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](735, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](736, "Fixed header and column at the same time, a solution for displaying large amounts of data with long columns.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](737, "blockquote");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](738, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](739, "Specify the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](740, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](741, "[nzWidth]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](742, " of columns if header and cell do not align properly. If specified width is not working or have gutter between columns, please try to leave one column at least without width to fit fluid layout, or make sure no long word to break table layout.\nA fixed value which is greater than table width for ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](743, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](744, "nzScroll.x");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](745, " is recommended. The sum of unfixed columns should not greater than ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](746, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](747, "nzScroll.x");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](748, ".\nNote: We using sticky to implement fixed effect. IE 11 will downgrade to horizontal scroll.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](749, "nz-code-box", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](750, "nz-demo-table-grouping-columns", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](751, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](752, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](753, "Group table head with fixed columns.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](754, "nz-code-box", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](755, "nz-demo-table-edit-cell", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](756, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](757, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](758, "Table with editable cells.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](759, "blockquote");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](760, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](761, "In order to get better performance, all NG-ZORRO's components are running under ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](762, "a", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](763, "OnPush");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](764, " mode, this means any mutate to the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](765, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](766, "@Input()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](767, " data won't trigger change detection, please use immutable way to update array or object.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](768, "blockquote");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](769, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](770, "User can refer to this example to customize the way of editing forms.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](771, "nz-code-box", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](772, "nz-demo-table-edit-row", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](773, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](774, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](775, "Table with editable rows.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](776, "blockquote");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](777, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](778, "In order to get better performance, all NG-ZORRO's components are running under ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](779, "a", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](780, "OnPush");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](781, " mode, this means any mutate to the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](782, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](783, "@Input()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](784, " data won't trigger change detection, please use immutable way to update array or object.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](785, "blockquote");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](786, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](787, "User can refer to this example to customize the way of editing forms.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](788, "nz-code-box", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](789, "nz-demo-table-nested-table", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](790, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](791, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](792, "Showing more detailed info of every row.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](793, "nz-code-box", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](794, "nz-demo-table-virtual", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](795, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](796, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](797, "Virtual scrolling combine with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](798, "a", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](799, "cdk scrolling");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](800, " used to display large data, you can get ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](801, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](802, "cdkVirtualScrollViewport");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](803, " in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](804, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](805, "NzTableComponent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](806, " and find more API ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](807, "a", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](808, "here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](809, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](810, "nz-code-box", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](811, "nz-demo-table-drag-sorting", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](812, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](813, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](814, "By using custom components, we can integrate table with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](815, "a", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](816, "@angular/cdk/drag-drop");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](817, " to implement drag sorting.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](818, "blockquote");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](819, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](820, "Note: Need to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](821, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](822, "import {DragDropModule} from '@angular/cdk/drag-drop'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](823, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](824, "nz-code-box", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](825, "nz-demo-table-template", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](826, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](827, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](828, "Template mode, same usage as ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](829, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](830, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](831, ", there is no need to data to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](832, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](833, "nzData");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](834, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](835, "nz-code-box", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](836, "nz-demo-table-break-word", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](837, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](838, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](839, "Insert line breaks within words with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](840, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](841, "nzBreakWord");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](842, " to prevent text from overflowing its content box");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](843, "nz-code-box", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](844, "nz-demo-table-ellipsis", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](845, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](846, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](847, "Ellipsis cell content via setting ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](848, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](849, "nzEllipsis");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](850, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](851, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](852, "nzTableLayout=\"fixed\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](853, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](854, "blockquote");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](855, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](856, "can not working with sorter and filters for now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](857, "nz-code-box", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](858, "nz-demo-table-dynamic-settings", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](859, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](860, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](861, "Select different settings to see the result.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](862, "section", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](863, "h2", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](864, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](865, "API");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](866, "a", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](867, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](868, "h3", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](869, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](870, "nz-table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](871, "label", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](872, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](873, "a", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](874, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](875, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](876, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](877, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](878, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](879, "Property");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](880, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](881, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](882, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](883, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](884, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](885, "Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](886, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](887, "Global Config");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](888, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](889, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](890, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](891, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](892, "[nzData]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](893, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](894, "Data record array to be rendered");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](895, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](896, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](897, "any[]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](898, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](899, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](900, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](901, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](902, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](903, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](904, "[nzFrontPagination]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](905, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](906, "Whether to paginate data on client. Should be set to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](907, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](908, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](909, " if data is to be paginated on server side or if all the data is to be displayed at once in the table without any pagination");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](910, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](911, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](912, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](913, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](914, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](915, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](916, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](917, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](918, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](919, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](920, "[nzTotal]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](921, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](922, "Total data count. Should set when ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](923, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](924, "nzServerRender");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](925, " is ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](926, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](927, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](928, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](929, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](930, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](931, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](932, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](933, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](934, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](935, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](936, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](937, "[nzPageIndex]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](938, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](939, "pageIndex , double binding");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](940, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](941, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](942, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](943, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](944, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](945, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](946, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](947, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](948, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](949, "[nzPageSize]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](950, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](951, "pageSize, double binding");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](952, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](953, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](954, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](955, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](956, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](957, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](958, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](959, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](960, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](961, "[nzShowPagination]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](962, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](963, "Whether to show pagination component at bottom of the table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](964, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](965, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](966, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](967, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](968, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](969, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](970, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](971, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](972, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](973, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](974, "[nzPaginationPosition]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](975, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](976, "Specify the position of pagination");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](977, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](978, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](979, "'top' | 'bottom' | 'both'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](980, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](981, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](982, "bottom");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](983, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](984, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](985, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](986, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](987, "[nzBordered]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](988, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](989, "Whether to show all table borders");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](990, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](991, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](992, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](993, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](994, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](995, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](996, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](997, "\u2705");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](998, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](999, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1000, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1001, "[nzOuterBordered]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1002, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1003, "Whether to show table outer borders");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1004, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1005, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1006, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1007, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1008, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1009, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1010, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1011, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1012, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1013, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1014, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1015, "[nzWidthConfig]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1016, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1017, "Set col width can not used with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1018, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1019, "[nzWidth]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1020, " of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1021, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1022, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1023, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1024, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1025, "string[]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1026, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1027, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1028, "[]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1029, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1030, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1031, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1032, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1033, "[nzSize]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1034, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1035, "Size of table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1036, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1037, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1038, "'middle' | 'small' | 'default'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1039, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1040, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1041, "'default'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1042, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1043, "\u2705");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1044, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1045, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1046, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1047, "[nzLoading]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1048, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1049, "Loading status of table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1050, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1051, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1052, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1053, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1054, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1055, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1056, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1057, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1058, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1059, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1060, "[nzLoadingIndicator]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1061, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1062, "The loading indicator");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1063, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1064, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1065, "TemplateRef<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1066, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1067, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1068, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1069, "\u2705");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1070, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1071, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1072, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1073, "[nzLoadingDelay]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1074, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1075, "Specifies a delay in milliseconds for loading state (prevents flush)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1076, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1077, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1078, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1079, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1080, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1081, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1082, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1083, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1084, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1085, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1086, "[nzScroll]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1087, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1088, "Whether table can be scrolled in x/y direction. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1089, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1090, "x");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1091, " or ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1092, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1093, "y");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1094, " can be a string that indicates the width and height of table body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1095, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1096, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1097, "object");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1098, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1099, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1100, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1101, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1102, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1103, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1104, "[nzTitle]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1105, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1106, "Table title renderer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1107, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1108, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1109, "string | TemplateRef<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1110, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1111, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1112, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1113, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1114, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1115, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1116, "[nzFooter]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1117, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1118, "Table footer renderer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1119, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1120, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1121, "string | TemplateRef<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1122, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1123, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1124, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1125, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1126, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1127, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1128, "[nzNoResult]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1129, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1130, "Custom no result content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1131, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1132, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1133, "string | TemplateRef<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1134, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1135, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1136, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1137, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1138, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1139, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1140, "[nzPageSizeOptions]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1141, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1142, "Specify the sizeChanger options");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1143, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1144, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1145, "number[]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1146, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1147, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1148, "[10, 20, 30, 40]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1149, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1150, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1151, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1152, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1153, "[nzShowQuickJumper]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1154, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1155, "Determine whether you can jump to pages directly");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1156, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1157, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1158, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1159, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1160, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1161, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1162, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1163, "\u2705");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1164, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1165, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1166, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1167, "[nzShowSizeChanger]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1168, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1169, "Determine whether ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1170, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1171, "nzPageSize");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1172, " can be changed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1173, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1174, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1175, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1176, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1177, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1178, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1179, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1180, "\u2705");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1181, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1182, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1183, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1184, "[nzShowTotal]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1185, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1186, "To display Pagination total number and range, same as Pagination");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1187, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1188, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1189, "TemplateRef<{ $implicit: number, range: [ number, number ] }>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1190, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1191, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1192, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1193, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1194, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1195, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1196, "[nzItemRender]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1197, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1198, "To customize Pagination item, same as Pagination");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1199, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1200, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1201, "TemplateRef<{ $implicit: 'page' | 'prev' | 'next', page: number }>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1202, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1203, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1204, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1205, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1206, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1207, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1208, "[nzHideOnSinglePage]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1209, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1210, "Whether to hide pagination on single page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1211, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1212, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1213, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1214, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1215, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1216, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1217, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1218, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1219, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1220, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1221, "[nzSimple]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1222, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1223, "Whether to use simple mode");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1224, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1225, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1226, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1227, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1228, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1229, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1230, "\u2705");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1231, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1232, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1233, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1234, "[nzTemplateMode]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1235, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1236, "Template mode\uFF0Cno need to pass data to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1237, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1238, "nzData");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1239, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1240, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1241, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1242, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1243, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1244, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1245, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1246, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1247, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1248, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1249, "[nzVirtualItemSize]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1250, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1251, "The size of the items in the list, same as ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1252, "a", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1253, "cdk itemSize");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1254, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1255, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1256, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1257, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1258, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1259, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1260, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1261, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1262, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1263, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1264, "[nzVirtualMaxBufferPx]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1265, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1266, "The number of pixels worth of buffer to render for when rendering new items, same as ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1267, "a", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1268, "cdk maxBufferPx");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1269, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1270, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1271, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1272, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1273, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1274, "200");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1275, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1276, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1277, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1278, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1279, "[nzVirtualMinBufferPx]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1280, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1281, "The minimum amount of buffer rendered beyond the viewport (in pixels),same as ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1282, "a", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1283, "cdk minBufferPx");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1284, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1285, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1286, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1287, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1288, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1289, "100");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1290, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1291, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1292, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1293, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1294, "[nzVirtualForTrackBy]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1295, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1296, "The TrackByFunction to be used for tracking changes.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1297, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1298, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1299, "TrackByFunction<T>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1300, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1301, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1302, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1303, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1304, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1305, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1306, "(nzPageIndexChange)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1307, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1308, "Callback when ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1309, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1310, "pageIndex");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1311, " changes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1312, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1313, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1314, "EventEmitter<number>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1315, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1316, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1317, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1318, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1319, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1320, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1321, "(nzPageSizeChange)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1322, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1323, "Callback when ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1324, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1325, "pageSize");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1326, " changes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1327, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1328, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1329, "EventEmitter<number>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1330, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1331, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1332, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1333, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1334, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1335, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1336, "(nzCurrentPageDataChange)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1337, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1338, "Callback when current pageData changes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1339, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1340, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1341, "EventEmitter<any[]>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1342, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1343, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1344, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1345, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1346, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1347, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1348, "(nzQueryParams)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1349, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1350, "Callback with params when working with server side pagination, sorting and filtering");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1351, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1352, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1353, "EventEmitter<NzTableQueryParams>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1354, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1355, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1356, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1357, "h3", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1358, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1359, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1360, "a", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1361, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1362, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1363, "Checkbox property");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1364, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1365, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1366, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1367, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1368, "Property");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1369, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1370, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1371, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1372, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1373, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1374, "Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1375, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1376, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1377, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1378, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1379, "[nzShowCheckbox]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1380, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1381, "Whether ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1382, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1383, "nz-checkbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1384, " should be shown in the header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1385, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1386, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1387, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1388, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1389, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1390, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1391, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1392, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1393, "[nzDisabled]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1394, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1395, "Whether the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1396, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1397, "nz-checkbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1398, " is disabled");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1399, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1400, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1401, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1402, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1403, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1404, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1405, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1406, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1407, "[nzIndeterminate]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1408, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1409, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1410, "nz-checkbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1411, " indeterminate status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1412, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1413, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1414, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1415, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1416, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1417, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1418, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1419, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1420, "[nzChecked]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1421, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1422, "Checked status, double binding");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1423, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1424, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1425, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1426, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1427, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1428, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1429, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1430, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1431, "(nzCheckedChange)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1432, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1433, "Callback when checked status changes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1434, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1435, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1436, "EventEmitter<boolean>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1437, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1438, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1439, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1440, "Selection property");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1441, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1442, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1443, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1444, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1445, "Property");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1446, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1447, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1448, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1449, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1450, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1451, "Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1452, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1453, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1454, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1455, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1456, "[nzShowRowSelection]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1457, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1458, "Whether to show row selection options");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1459, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1460, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1461, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1462, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1463, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1464, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1465, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1466, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1467, "[nzSelections]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1468, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1469, "Selection options including ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1470, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1471, "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1472, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1473, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1474, "onSelect");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1475, " callback function");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1476, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1477, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1478, "Array<{ text: string, onSelect: any }>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1479, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1480, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1481, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1482, "Sort property");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1483, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1484, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1485, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1486, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1487, "Property");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1488, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1489, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1490, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1491, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1492, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1493, "Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1494, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1495, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1496, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1497, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1498, "[nzSortFn]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1499, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1500, "Sort function used to sort the data on client side (ref to Array.sort compareFunction). Should be set to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1501, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1502, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1503, " when using server side sorting");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1504, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1505, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1506, "((a: any, b: any, sortOrder?: string) => number)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1507, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1508, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1509, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1510, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1511, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1512, "[nzSortOrder]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1513, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1514, "Sort direction");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1515, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1516, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1517, "'ascend' | 'descend' | null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1518, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1519, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1520, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1521, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1522, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1523, "[nzSortDirections]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1524, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1525, "Supported sort order, could be ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1526, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1527, "'ascend'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1528, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1529, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1530, "'descend'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1531, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1532, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1533, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1534, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1535, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1536, "Array<'ascend' | 'descend' | null>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1537, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1538, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1539, "['ascend', 'descend', null]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1540, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1541, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1542, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1543, "(nzSortOrderChange)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1544, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1545, "Callback when sort direction changes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1546, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1547, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1548, "EventEmitter<'ascend' | 'descend' | null>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1549, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1550, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1551, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1552, "Filter property");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1553, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1554, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1555, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1556, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1557, "Property");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1558, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1559, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1560, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1561, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1562, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1563, "Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1564, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1565, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1566, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1567, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1568, "[nzShowFilter]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1569, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1570, "Whether to show filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1571, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1572, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1573, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1574, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1575, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1576, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1577, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1578, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1579, "[nzFilterFn]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1580, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1581, "Filter function used to filter the data on client side. Set to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1582, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1583, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1584, " when using server side filtering");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1585, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1586, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1587, "((value: any, data: any) => boolean;)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1588, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1589, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1590, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1591, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1592, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1593, "[nzFilters]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1594, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1595, "Filter options, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1596, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1597, "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1598, ", and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1599, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1600, "value");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1601, " for callback, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1602, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1603, "byDefault");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1604, " to enable filter by default");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1605, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1606, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1607, "Array<{ text: string; value: any; byDefault?: boolean }>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1608, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1609, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1610, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1611, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1612, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1613, "[nzFilterMultiple]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1614, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1615, "Whether multiple mode filtering is enabled");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1616, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1617, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1618, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1619, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1620, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1621, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1622, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1623, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1624, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1625, "(nzFilterChange)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1626, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1627, "Callback when filter ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1628, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1629, "value");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1630, " changes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1631, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1632, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1633, "EventEmitter<any[] | any>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1634, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1635, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1636, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1637, "Style property");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1638, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1639, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1640, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1641, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1642, "Property");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1643, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1644, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1645, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1646, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1647, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1648, "Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1649, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1650, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1651, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1652, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1653, "[nzWidth]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1654, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1655, "Specify the column width, can not used when grouping columns");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1656, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1657, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1658, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1659, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1660, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1661, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1662, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1663, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1664, "[nzLeft]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1665, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1666, "Left pixels, used to fixed column to left, auto calc when set to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1667, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1668, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1669, " and disable fixed when ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1670, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1671, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1672, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1673, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1674, "string | boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1675, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1676, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1677, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1678, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1679, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1680, "[nzRight]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1681, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1682, "Right pixels, used to fixed column to right, auto calc when set to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1683, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1684, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1685, " and disable fixed when ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1686, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1687, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1688, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1689, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1690, "string | boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1691, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1692, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1693, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1694, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1695, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1696, "[nzAlign]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1697, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1698, "Specify how content is aligned");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1699, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1700, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1701, "'left' | 'right' | 'center'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1702, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1703, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1704, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1705, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1706, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1707, "[nzBreakWord]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1708, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1709, "Whether insert line breaks within words");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1710, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1711, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1712, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1713, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1714, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1715, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1716, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1717, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1718, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1719, "[nzEllipsis]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1720, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1721, "ellipsis cell content, not working with sorter and filters for now. Only work when nzTableLayout was ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1722, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1723, "fixed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1724, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1725, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1726, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1727, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1728, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1729, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1730, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1731, "Other");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1732, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1733, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1734, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1735, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1736, "Property");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1737, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1738, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1739, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1740, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1741, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1742, "Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1743, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1744, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1745, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1746, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1747, "[nzColumnKey]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1748, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1749, "column key, work with server sort and filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1750, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1751, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1752, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1753, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1754, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1755, "h3", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1756, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1757, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1758, "a", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1759, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1760, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1761, "Checkbox property");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1762, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1763, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1764, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1765, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1766, "Property");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1767, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1768, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1769, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1770, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1771, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1772, "Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1773, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1774, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1775, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1776, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1777, "[nzShowCheckbox]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1778, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1779, "Whether add nz-checkbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1780, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1781, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1782, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1783, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1784, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1785, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1786, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1787, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1788, "[nzDisabled]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1789, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1790, "Whether disable checkbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1791, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1792, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1793, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1794, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1795, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1796, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1797, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1798, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1799, "[nzIndeterminate]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1800, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1801, "Indeterminate status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1802, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1803, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1804, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1805, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1806, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1807, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1808, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1809, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1810, "[nzChecked]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1811, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1812, "Checked status, double binding");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1813, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1814, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1815, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1816, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1817, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1818, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1819, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1820, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1821, "(nzCheckedChange)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1822, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1823, "Checked status change callback");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1824, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1825, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1826, "EventEmitter<boolean>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1827, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1828, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1829, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1830, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1831, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1832, "[colSpan]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1833, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1834, "how many columns the cell extends");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1835, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1836, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1837, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1838, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1839, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1840, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1841, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1842, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1843, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1844, "[rowSpan]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1845, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1846, "how many rows the cell extends");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1847, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1848, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1849, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1850, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1851, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1852, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1853, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1854, "Expand property");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1855, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1856, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1857, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1858, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1859, "Property");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1860, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1861, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1862, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1863, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1864, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1865, "Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1866, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1867, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1868, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1869, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1870, "[nzShowExpand]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1871, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1872, "Whether show expand icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1873, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1874, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1875, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1876, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1877, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1878, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1879, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1880, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1881, "[nzExpand]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1882, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1883, "Current expand status, double binding");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1884, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1885, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1886, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1887, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1888, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1889, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1890, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1891, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1892, "(nzExpandChange)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1893, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1894, "Expand status change callback");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1895, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1896, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1897, "EventEmitter<boolean>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1898, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1899, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1900, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1901, "Style property");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1902, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1903, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1904, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1905, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1906, "Property");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1907, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1908, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1909, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1910, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1911, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1912, "Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1913, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1914, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1915, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1916, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1917, "[nzLeft]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1918, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1919, "Left pixels, used to fixed column to left, auto calc when set to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1920, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1921, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1922, " and disable fixed when ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1923, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1924, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1925, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1926, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1927, "string | boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1928, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1929, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1930, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1931, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1932, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1933, "[nzRight]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1934, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1935, "Right pixels, used to fixed column to right, auto calc when set to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1936, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1937, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1938, " and disable fixed when ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1939, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1940, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1941, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1942, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1943, "string | boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1944, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1945, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1946, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1947, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1948, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1949, "[nzAlign]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1950, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1951, "Specify how content is aligned");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1952, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1953, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1954, "'left' | 'right' | 'center'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1955, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1956, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1957, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1958, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1959, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1960, "[nzBreakWord]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1961, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1962, "Whether insert line breaks within words");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1963, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1964, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1965, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1966, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1967, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1968, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1969, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1970, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1971, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1972, "[nzEllipsis]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1973, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1974, "ellipsis cell content, not working with sorter and filters for now. Only work when nzTableLayout was ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1975, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1976, "fixed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1977, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1978, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1979, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1980, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1981, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1982, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1983, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1984, "Other property");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1985, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1986, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1987, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1988, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1989, "Property");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1990, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1991, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1992, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1993, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1994, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1995, "Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1996, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1997, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1998, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1999, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2000, "[nzIndentSize]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2001, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2002, "Indent size in pixels of tree data");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2003, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2004, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2005, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2006, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2007, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2008, "h3", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2009, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2010, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2011, "a", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2012, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2013, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2014, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2015, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2016, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2017, "Property");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2018, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2019, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2020, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2021, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2022, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2023, "Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2024, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2025, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2026, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2027, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2028, "[nzExpand]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2029, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2030, "Whether expand current row\uFF0Cused with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2031, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2032, "nzExpand");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2033, " of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2034, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2035, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2036, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2037, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2038, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2039, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2040, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2041, "h3", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2042, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2043, "nz-filter-trigger");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2044, "label", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2045, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2046, "a", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2047, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2048, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2049, "Customized filter panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2050, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2051, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2052, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2053, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2054, "Property");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2055, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2056, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2057, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2058, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2059, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2060, "Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2061, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2062, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2063, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2064, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2065, "[nzDropdownMenu]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2066, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2067, "Dropdown menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2068, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2069, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2070, "NzDropdownMenuComponent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2071, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2072, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2073, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2074, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2075, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2076, "[nzVisible]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2077, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2078, "whether the dropdown menu is visible, double binding");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2079, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2080, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2081, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2082, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2083, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2084, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2085, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2086, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2087, "[nzActive]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2088, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2089, "whether the icon status is activated");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2090, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2091, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2092, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2093, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2094, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2095, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2096, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2097, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2098, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2099, "[nzHasBackdrop]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2100, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2101, "Whether or not attach a backdrop.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2102, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2103, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2104, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2105, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2106, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2107, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2108, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2109, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2110, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2111, "(nzVisibleChange)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2112, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2113, "a callback function takes an argument: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2114, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2115, "nzVisible");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2116, ", is executed when the visible state is changed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2117, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2118, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2119, "EventEmitter<boolean>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2120, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2121, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2122, "h3", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2123, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2124, "[nz-virtual-scroll]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2125, "label", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2126, "directive");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2127, "a", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2128, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2129, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2130, "virtual scroll directive work with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2131, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2132, "ng-template");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2133, ", type: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2134, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2135, "TemplateRef<{ $implicit: any, index: number }>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2136, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2137, "h2", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2138, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2139, "Note");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2140, "a", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2141, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2142, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2143, "In order to get better performance, all NG-ZORRO's components are running under ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2144, "a", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2145, "OnPush");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2146, " mode, this means any mutate to the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2147, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2148, "@Input()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2149, " data won't trigger change detection, please use immutable way to update array or object.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2150, "pre", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2151, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2152, "    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2153, "span", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2154, "// add data");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2155, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2156, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2157, "this");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2158, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2159, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2160, "dataSet ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2161, "span", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2162, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2163, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2164, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2165, "[");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2166, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2167, "span", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2168, "...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2169, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2170, "this");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2171, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2172, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2173, "dataSet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2174, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2175, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2176, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2177, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2178, "{");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2179, "\n      key    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2180, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2181, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2182, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2183, "span", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2184, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2185, "`");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2186, "span", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2187, "span", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2188, "${");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2189, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2190, "this");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2191, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2192, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2193, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2194, "span", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2195, "}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2196, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2197, "`");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2198, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2199, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2200, "\n      name   ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2201, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2202, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2203, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2204, "span", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2205, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2206, "`Edward King ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2207, "span", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2208, "span", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2209, "${");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2210, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2211, "this");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2212, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2213, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2214, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2215, "span", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2216, "}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2217, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2218, "`");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2219, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2220, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2221, "\n      age    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2222, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2223, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2224, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2225, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2226, "'32'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2227, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2228, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2229, "\n      address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2230, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2231, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2232, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2233, "span", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2234, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2235, "`London, Park Lane no. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2236, "span", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2237, "span", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2238, "${");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2239, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2240, "this");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2241, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2242, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2243, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2244, "span", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2245, "}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2246, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2247, "`");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2248, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2249, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2250, "}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2251, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2252, "]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2253, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2254, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2255, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2256, "span", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2257, "// remove data");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2258, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2259, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2260, "this");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2261, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2262, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2263, "dataSet ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2264, "span", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2265, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2266, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2267, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2268, "this");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2269, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2270, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2271, "dataSet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2272, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2273, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2274, "span", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2275, "filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2276, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2277, "(");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2278, "d ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2279, "span", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2280, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2281, "span", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2282, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2283, " d");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2284, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2285, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2286, "key ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2287, "span", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2288, "!==");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2289, " i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2290, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2291, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2292, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2293, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2294, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2295, "Recommend using ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2296, "a", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2297, "immer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2298, " for a better development experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzOffsetTop", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzAffix", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](418);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzGutter", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-table-demo-basic")("nzLink", "components-table-demo-basic")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/table/demo/basic.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-table-demo-row-selection-and-operation")("nzLink", "components-table-demo-row-selection-and-operation")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/table/demo/row-selection-and-operation.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-table-demo-row-selection-custom")("nzLink", "components-table-demo-row-selection-custom")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/table/demo/row-selection-custom.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-table-demo-sort-filter")("nzLink", "components-table-demo-sort-filter")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/table/demo/sort-filter.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-table-demo-multiple-sorter")("nzLink", "components-table-demo-multiple-sorter")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/table/demo/multiple-sorter.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-table-demo-reset-filter")("nzLink", "components-table-demo-reset-filter")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/table/demo/reset-filter.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-table-demo-custom-filter-panel")("nzLink", "components-table-demo-custom-filter-panel")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/table/demo/custom-filter-panel.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-table-demo-ajax")("nzLink", "components-table-demo-ajax")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/table/demo/ajax.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](145);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-table-demo-size")("nzLink", "components-table-demo-size")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/table/demo/size.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-table-demo-bordered")("nzLink", "components-table-demo-bordered")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/table/demo/bordered.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-table-demo-expand")("nzLink", "components-table-demo-expand")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/table/demo/expand.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-table-demo-colspan-rowspan")("nzLink", "components-table-demo-colspan-rowspan")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/table/demo/colspan-rowspan.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-table-demo-expand-children")("nzLink", "components-table-demo-expand-children")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/table/demo/expand-children.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-table-demo-fixed-header")("nzLink", "components-table-demo-fixed-header")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/table/demo/fixed-header.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-table-demo-fixed-columns")("nzLink", "components-table-demo-fixed-columns")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/table/demo/fixed-columns.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-table-demo-fixed-columns-header")("nzLink", "components-table-demo-fixed-columns-header")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/table/demo/fixed-columns-header.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-table-demo-grouping-columns")("nzLink", "components-table-demo-grouping-columns")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/table/demo/grouping-columns.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-table-demo-edit-cell")("nzLink", "components-table-demo-edit-cell")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/table/demo/edit-cell.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-table-demo-edit-row")("nzLink", "components-table-demo-edit-row")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/table/demo/edit-row.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-table-demo-nested-table")("nzLink", "components-table-demo-nested-table")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/table/demo/nested-table.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-table-demo-virtual")("nzLink", "components-table-demo-virtual")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/table/demo/virtual.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-table-demo-drag-sorting")("nzLink", "components-table-demo-drag-sorting")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/table/demo/drag-sorting.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-table-demo-template")("nzLink", "components-table-demo-template")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/table/demo/template.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-table-demo-break-word")("nzLink", "components-table-demo-break-word")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/table/demo/break-word.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-table-demo-ellipsis")("nzLink", "components-table-demo-ellipsis")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/table/demo/ellipsis.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-table-demo-dynamic-settings")("nzLink", "components-table-demo-dynamic-settings")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/table/demo/dynamic-settings.md");
    } }, directives: [ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_2__["NzAffixComponent"], ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_3__["NzAnchorComponent"], ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_3__["NzAnchorLinkComponent"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__["NzIconDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__["ɵNzTransitionPatchDirective"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_6__["NzTooltipDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__["NzRowDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__["NzColDirective"], _share_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_1__["NzCodeBoxComponent"], _basic__WEBPACK_IMPORTED_MODULE_8__["NzDemoTableBasicComponent"], _row_selection_and_operation__WEBPACK_IMPORTED_MODULE_9__["NzDemoTableRowSelectionAndOperationComponent"], _row_selection_custom__WEBPACK_IMPORTED_MODULE_10__["NzDemoTableRowSelectionCustomComponent"], _sort_filter__WEBPACK_IMPORTED_MODULE_11__["NzDemoTableSortFilterComponent"], _multiple_sorter__WEBPACK_IMPORTED_MODULE_12__["NzDemoTableMultipleSorterComponent"], _reset_filter__WEBPACK_IMPORTED_MODULE_13__["NzDemoTableResetFilterComponent"], _custom_filter_panel__WEBPACK_IMPORTED_MODULE_14__["NzDemoTableCustomFilterPanelComponent"], _ajax__WEBPACK_IMPORTED_MODULE_15__["NzDemoTableAjaxComponent"], _size__WEBPACK_IMPORTED_MODULE_16__["NzDemoTableSizeComponent"], _bordered__WEBPACK_IMPORTED_MODULE_17__["NzDemoTableBorderedComponent"], _expand__WEBPACK_IMPORTED_MODULE_18__["NzDemoTableExpandComponent"], _colspan_rowspan__WEBPACK_IMPORTED_MODULE_19__["NzDemoTableColspanRowspanComponent"], _expand_children__WEBPACK_IMPORTED_MODULE_20__["NzDemoTableExpandChildrenComponent"], _fixed_header__WEBPACK_IMPORTED_MODULE_21__["NzDemoTableFixedHeaderComponent"], _fixed_columns__WEBPACK_IMPORTED_MODULE_22__["NzDemoTableFixedColumnsComponent"], _fixed_columns_header__WEBPACK_IMPORTED_MODULE_23__["NzDemoTableFixedColumnsHeaderComponent"], _grouping_columns__WEBPACK_IMPORTED_MODULE_24__["NzDemoTableGroupingColumnsComponent"], _edit_cell__WEBPACK_IMPORTED_MODULE_25__["NzDemoTableEditCellComponent"], _edit_row__WEBPACK_IMPORTED_MODULE_26__["NzDemoTableEditRowComponent"], _nested_table__WEBPACK_IMPORTED_MODULE_27__["NzDemoTableNestedTableComponent"], _virtual__WEBPACK_IMPORTED_MODULE_28__["NzDemoTableVirtualComponent"], _drag_sorting__WEBPACK_IMPORTED_MODULE_29__["NzDemoTableDragSortingComponent"], _template__WEBPACK_IMPORTED_MODULE_30__["NzDemoTableTemplateComponent"], _break_word__WEBPACK_IMPORTED_MODULE_31__["NzDemoTableBreakWordComponent"], _ellipsis__WEBPACK_IMPORTED_MODULE_32__["NzDemoTableEllipsisComponent"], _dynamic_settings__WEBPACK_IMPORTED_MODULE_33__["NzDemoTableDynamicSettingsComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_34__["NzTheadComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_34__["NzTrDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_34__["NzTableCellDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_34__["NzThMeasureDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_34__["NzTbodyComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoTableEnComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-demo-table',
                preserveWhitespaces: false,
                templateUrl: './en.html'
            }]
    }], null, { codeBoxes: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"],
            args: [_share_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_1__["NzCodeBoxComponent"]]
        }] }); })();


/***/ }),

/***/ "4SUl":
/*!*****************************************!*\
  !*** ./site/doc/app/table/edit-cell.ts ***!
  \*****************************************/
/*! exports provided: NzDemoTableEditCellComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoTableEditCellComponent", function() { return NzDemoTableEditCellComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/button */ "TZWX");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "vdzw");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "uLhK");
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/table */ "mK+R");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/input */ "klHs");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/popconfirm */ "sgt3");










function NzDemoTableEditCellComponent_tr_17_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoTableEditCellComponent_tr_17_Template_div_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const data_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.startEdit(data_r2.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoTableEditCellComponent_tr_17_Template_input_ngModelChange_4_listener($event) { const data_r2 = ctx.$implicit; return data_r2.name = $event; })("blur", function NzDemoTableEditCellComponent_tr_17_Template_input_blur_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.stopEdit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzOnConfirm", function NzDemoTableEditCellComponent_tr_17_Template_a_nzOnConfirm_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const data_r2 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.deleteRow(data_r2.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r1.editId === data_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r2.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r1.editId !== data_r2.id)("ngModel", data_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.age);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.address);
} }
class NzDemoTableEditCellComponent {
    constructor() {
        this.i = 0;
        this.editId = null;
        this.listOfData = [];
    }
    startEdit(id) {
        this.editId = id;
    }
    stopEdit() {
        this.editId = null;
    }
    addRow() {
        this.listOfData = [
            ...this.listOfData,
            {
                id: `${this.i}`,
                name: `Edward King ${this.i}`,
                age: '32',
                address: `London, Park Lane no. ${this.i}`
            }
        ];
        this.i++;
    }
    deleteRow(id) {
        this.listOfData = this.listOfData.filter(d => d.id !== id);
    }
    ngOnInit() {
        this.addRow();
        this.addRow();
    }
}
NzDemoTableEditCellComponent.ɵfac = function NzDemoTableEditCellComponent_Factory(t) { return new (t || NzDemoTableEditCellComponent)(); };
NzDemoTableEditCellComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoTableEditCellComponent, selectors: [["nz-demo-table-edit-cell"]], decls: 18, vars: 2, consts: [["nz-button", "", "nzType", "primary", 3, "click"], ["nzBordered", "", 3, "nzData"], ["editRowTable", ""], ["nzWidth", "30%"], ["class", "editable-row", 4, "ngFor", "ngForOf"], [1, "editable-row"], [1, "editable-cell", 3, "hidden", "click"], ["type", "text", "nz-input", "", 3, "hidden", "ngModel", "ngModelChange", "blur"], ["nz-popconfirm", "", "nzPopconfirmTitle", "Sure to delete?", 3, "nzOnConfirm"]], template: function NzDemoTableEditCellComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoTableEditCellComponent_Template_button_click_0_listener() { return ctx.addRow(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nz-table", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Age");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, NzDemoTableEditCellComponent_tr_17_Template, 12, 6, "tr", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzData", ctx.listOfData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _r0.data);
    } }, directives: [ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_1__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_2__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_3__["ɵNzTransitionPatchDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_4__["NzTableComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_4__["NzTheadComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_4__["NzTrDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_4__["NzTableCellDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_4__["NzThMeasureDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_4__["NzTbodyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_6__["NzInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_8__["NzPopconfirmDirective"]], styles: [".editable-cell[_ngcontent-%COMP%] {\n        position: relative;\n        padding: 5px 12px;\n        cursor: pointer;\n      }\n\n      .editable-row[_ngcontent-%COMP%]:hover   .editable-cell[_ngcontent-%COMP%] {\n        border: 1px solid #d9d9d9;\n        border-radius: 4px;\n        padding: 4px 11px;\n      }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoTableEditCellComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-demo-table-edit-cell',
                template: `
    <button nz-button (click)="addRow()" nzType="primary">Add</button>
    <br />
    <br />
    <nz-table #editRowTable nzBordered [nzData]="listOfData">
      <thead>
        <tr>
          <th nzWidth="30%">Name</th>
          <th>Age</th>
          <th>Address</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let data of editRowTable.data" class="editable-row">
          <td>
            <div class="editable-cell" [hidden]="editId === data.id" (click)="startEdit(data.id)">
              {{ data.name }}
            </div>
            <input [hidden]="editId !== data.id" type="text" nz-input [(ngModel)]="data.name" (blur)="stopEdit()" />
          </td>
          <td>{{ data.age }}</td>
          <td>{{ data.address }}</td>
          <td>
            <a nz-popconfirm nzPopconfirmTitle="Sure to delete?" (nzOnConfirm)="deleteRow(data.id)">Delete</a>
          </td>
        </tr>
      </tbody>
    </nz-table>
  `,
                styles: [
                    `
      .editable-cell {
        position: relative;
        padding: 5px 12px;
        cursor: pointer;
      }

      .editable-row:hover .editable-cell {
        border: 1px solid #d9d9d9;
        border-radius: 4px;
        padding: 4px 11px;
      }
    `
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "658v":
/*!****************************************************************!*\
  !*** ./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-divider.js ***!
  \****************************************************************/
/*! exports provided: NzDividerComponent, NzDividerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDividerComponent", function() { return NzDividerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDividerModule", function() { return NzDividerModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "zOht");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/core/util */ "d1+9");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/bidi */ "cH1L");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/core/outlet */ "fwD0");







/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
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
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.nzType = 'horizontal';
        this.nzOrientation = 'center';
        this.nzDashed = false;
        this.nzPlain = false;
        // TODO: move to host after View Engine deprecation
        this.elementRef.nativeElement.classList.add('ant-divider');
    }
}
NzDividerComponent.ɵfac = function NzDividerComponent_Factory(t) { return new (t || NzDividerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])); };
NzDividerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NzDividerComponent, selectors: [["nz-divider"]], hostVars: 16, hostBindings: function NzDividerComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("ant-divider-horizontal", ctx.nzType === "horizontal")("ant-divider-vertical", ctx.nzType === "vertical")("ant-divider-with-text", ctx.nzText)("ant-divider-plain", ctx.nzPlain)("ant-divider-with-text-left", ctx.nzText && ctx.nzOrientation === "left")("ant-divider-with-text-right", ctx.nzText && ctx.nzOrientation === "right")("ant-divider-with-text-center", ctx.nzText && ctx.nzOrientation === "center")("ant-divider-dashed", ctx.nzDashed);
    } }, inputs: { nzType: "nzType", nzOrientation: "nzOrientation", nzDashed: "nzDashed", nzPlain: "nzPlain", nzText: "nzText" }, exportAs: ["nzDivider"], decls: 1, vars: 1, consts: [["class", "ant-divider-inner-text", 4, "ngIf"], [1, "ant-divider-inner-text"], [4, "nzStringTemplateOutlet"]], template: function NzDividerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, NzDividerComponent_span_0_Template, 2, 1, "span", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.nzText);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_5__["NzStringTemplateOutletDirective"]], encapsulation: 2, changeDetection: 0 });
NzDividerComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
NzDividerComponent.propDecorators = {
    nzText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    nzType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    nzOrientation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    nzDashed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    nzPlain: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_2__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], NzDividerComponent.prototype, "nzDashed", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_2__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], NzDividerComponent.prototype, "nzPlain", void 0);
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
                    '[class.ant-divider-horizontal]': `nzType === 'horizontal'`,
                    '[class.ant-divider-vertical]': `nzType === 'vertical'`,
                    '[class.ant-divider-with-text]': `nzText`,
                    '[class.ant-divider-plain]': `nzPlain`,
                    '[class.ant-divider-with-text-left]': `nzText && nzOrientation === 'left'`,
                    '[class.ant-divider-with-text-right]': `nzText && nzOrientation === 'right'`,
                    '[class.ant-divider-with-text-center]': `nzText && nzOrientation === 'center'`,
                    '[class.ant-divider-dashed]': `nzDashed`
                }
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }]; }, { nzType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], nzOrientation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], nzDashed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], nzPlain: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], nzText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzDividerModule {
}
NzDividerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: NzDividerModule });
NzDividerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function NzDividerModule_Factory(t) { return new (t || NzDividerModule)(); }, imports: [[_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["BidiModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_5__["NzOutletModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NzDividerModule, { declarations: function () { return [NzDividerComponent]; }, imports: function () { return [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["BidiModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_5__["NzOutletModule"]]; }, exports: function () { return [NzDividerComponent]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NzDividerModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["BidiModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_5__["NzOutletModule"]],
                declarations: [NzDividerComponent],
                exports: [NzDividerComponent]
            }]
    }], null, null); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=ng-zorro-antd-divider.js.map

/***/ }),

/***/ "6pFZ":
/*!**************************************!*\
  !*** ./site/doc/app/table/expand.ts ***!
  \**************************************/
/*! exports provided: NzDemoTableExpandComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoTableExpandComponent", function() { return NzDemoTableExpandComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/table */ "mK+R");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function NzDemoTableExpandComponent_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzExpandChange", function NzDemoTableExpandComponent_ng_container_12_Template_td_nzExpandChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const data_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.onExpandChange(data_r2.id, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tr", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const data_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzExpand", ctx_r1.expandSet.has(data_r2.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.age);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzExpand", ctx_r1.expandSet.has(data_r2.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.description);
} }
class NzDemoTableExpandComponent {
    constructor() {
        this.expandSet = new Set();
        this.listOfData = [
            {
                id: 1,
                name: 'John Brown',
                age: 32,
                expand: false,
                address: 'New York No. 1 Lake Park',
                description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.'
            },
            {
                id: 2,
                name: 'Jim Green',
                age: 42,
                expand: false,
                address: 'London No. 1 Lake Park',
                description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.'
            },
            {
                id: 3,
                name: 'Joe Black',
                age: 32,
                expand: false,
                address: 'Sidney No. 1 Lake Park',
                description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.'
            }
        ];
    }
    onExpandChange(id, checked) {
        if (checked) {
            this.expandSet.add(id);
        }
        else {
            this.expandSet.delete(id);
        }
    }
}
NzDemoTableExpandComponent.ɵfac = function NzDemoTableExpandComponent_Factory(t) { return new (t || NzDemoTableExpandComponent)(); };
NzDemoTableExpandComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoTableExpandComponent, selectors: [["nz-demo-table-expand"]], decls: 13, vars: 2, consts: [["nzTableLayout", "fixed", 3, "nzData"], ["nzTable", ""], ["nzWidth", "60px"], [4, "ngFor", "ngForOf"], [3, "nzExpand", "nzExpandChange"], [3, "nzExpand"]], template: function NzDemoTableExpandComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-table", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Age");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, NzDemoTableExpandComponent_ng_container_12_Template, 12, 6, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzData", ctx.listOfData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _r0.data);
    } }, directives: [ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzTableComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzTheadComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzTrDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzTableCellDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzThMeasureDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzTbodyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzTdAddOnComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzTrExpandDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzTableFixedRowComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoTableExpandComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-demo-table-expand',
                template: `
    <nz-table #nzTable [nzData]="listOfData" nzTableLayout="fixed">
      <thead>
        <tr>
          <th nzWidth="60px"></th>
          <th>Name</th>
          <th>Age</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        <ng-container *ngFor="let data of nzTable.data">
          <tr>
            <td [nzExpand]="expandSet.has(data.id)" (nzExpandChange)="onExpandChange(data.id, $event)"></td>
            <td>{{ data.name }}</td>
            <td>{{ data.age }}</td>
            <td>{{ data.address }}</td>
          </tr>
          <tr [nzExpand]="expandSet.has(data.id)">
            <span>{{ data.description }}</span>
          </tr>
        </ng-container>
      </tbody>
    </nz-table>
  `
            }]
    }], null, null); })();


/***/ }),

/***/ "7OiN":
/*!***********************************************************!*\
  !*** ./site/doc/app/table/row-selection-and-operation.ts ***!
  \***********************************************************/
/*! exports provided: NzDemoTableRowSelectionAndOperationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoTableRowSelectionAndOperationComponent", function() { return NzDemoTableRowSelectionAndOperationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/button */ "TZWX");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "vdzw");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "uLhK");
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/table */ "mK+R");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function NzDemoTableRowSelectionAndOperationComponent_tr_17_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzCheckedChange", function NzDemoTableRowSelectionAndOperationComponent_tr_17_Template_td_nzCheckedChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const data_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.onItemChecked(data_r2.id, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzChecked", ctx_r1.setOfCheckedId.has(data_r2.id))("nzDisabled", data_r2.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.age);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.address);
} }
class NzDemoTableRowSelectionAndOperationComponent {
    constructor() {
        this.checked = false;
        this.loading = false;
        this.indeterminate = false;
        this.listOfData = [];
        this.listOfCurrentPageData = [];
        this.setOfCheckedId = new Set();
    }
    updateCheckedSet(id, checked) {
        if (checked) {
            this.setOfCheckedId.add(id);
        }
        else {
            this.setOfCheckedId.delete(id);
        }
    }
    onCurrentPageDataChange(listOfCurrentPageData) {
        this.listOfCurrentPageData = listOfCurrentPageData;
        this.refreshCheckedStatus();
    }
    refreshCheckedStatus() {
        const listOfEnabledData = this.listOfCurrentPageData.filter(({ disabled }) => !disabled);
        this.checked = listOfEnabledData.every(({ id }) => this.setOfCheckedId.has(id));
        this.indeterminate = listOfEnabledData.some(({ id }) => this.setOfCheckedId.has(id)) && !this.checked;
    }
    onItemChecked(id, checked) {
        this.updateCheckedSet(id, checked);
        this.refreshCheckedStatus();
    }
    onAllChecked(checked) {
        this.listOfCurrentPageData.filter(({ disabled }) => !disabled).forEach(({ id }) => this.updateCheckedSet(id, checked));
        this.refreshCheckedStatus();
    }
    sendRequest() {
        this.loading = true;
        const requestData = this.listOfData.filter(data => this.setOfCheckedId.has(data.id));
        console.log(requestData);
        setTimeout(() => {
            this.setOfCheckedId.clear();
            this.refreshCheckedStatus();
            this.loading = false;
        }, 1000);
    }
    ngOnInit() {
        this.listOfData = new Array(100).fill(0).map((_, index) => {
            return {
                id: index,
                name: `Edward King ${index}`,
                age: 32,
                address: `London, Park Lane no. ${index}`,
                disabled: index % 2 === 0
            };
        });
    }
}
NzDemoTableRowSelectionAndOperationComponent.ɵfac = function NzDemoTableRowSelectionAndOperationComponent_Factory(t) { return new (t || NzDemoTableRowSelectionAndOperationComponent)(); };
NzDemoTableRowSelectionAndOperationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoTableRowSelectionAndOperationComponent, selectors: [["nz-demo-table-row-selection-and-operation"]], decls: 18, vars: 7, consts: [[1, "send-request"], ["nz-button", "", "nzType", "primary", 3, "disabled", "nzLoading", "click"], ["nzShowPagination", "", "nzShowSizeChanger", "", 3, "nzData", "nzCurrentPageDataChange"], ["rowSelectionTable", ""], [3, "nzChecked", "nzIndeterminate", "nzCheckedChange"], [4, "ngFor", "ngForOf"], [3, "nzChecked", "nzDisabled", "nzCheckedChange"]], template: function NzDemoTableRowSelectionAndOperationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoTableRowSelectionAndOperationComponent_Template_button_click_1_listener() { return ctx.sendRequest(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Send Request ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nz-table", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzCurrentPageDataChange", function NzDemoTableRowSelectionAndOperationComponent_Template_nz_table_nzCurrentPageDataChange_5_listener($event) { return ctx.onCurrentPageDataChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzCheckedChange", function NzDemoTableRowSelectionAndOperationComponent_Template_th_nzCheckedChange_9_listener($event) { return ctx.onAllChecked($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Age");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, NzDemoTableRowSelectionAndOperationComponent_tr_17_Template, 8, 5, "tr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.setOfCheckedId.size === 0)("nzLoading", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Selected ", ctx.setOfCheckedId.size, " items");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzData", ctx.listOfData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzChecked", ctx.checked)("nzIndeterminate", ctx.indeterminate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _r0.data);
    } }, directives: [ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_1__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_2__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_3__["ɵNzTransitionPatchDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_4__["NzTableComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_4__["NzTheadComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_4__["NzTrDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_4__["NzTableCellDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_4__["NzThMeasureDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_4__["NzThSelectionComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_4__["NzTbodyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_4__["NzTdAddOnComponent"]], styles: [".send-request[_ngcontent-%COMP%] {\n        margin-bottom: 16px;\n      }\n\n      .send-request[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n        margin-left: 8px;\n      }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoTableRowSelectionAndOperationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-demo-table-row-selection-and-operation',
                template: `
    <div class="send-request">
      <button nz-button nzType="primary" [disabled]="setOfCheckedId.size === 0" [nzLoading]="loading" (click)="sendRequest()">
        Send Request
      </button>
      <span>Selected {{ setOfCheckedId.size }} items</span>
    </div>
    <nz-table
      #rowSelectionTable
      nzShowPagination
      nzShowSizeChanger
      [nzData]="listOfData"
      (nzCurrentPageDataChange)="onCurrentPageDataChange($event)"
    >
      <thead>
        <tr>
          <th [nzChecked]="checked" [nzIndeterminate]="indeterminate" (nzCheckedChange)="onAllChecked($event)"></th>
          <th>Name</th>
          <th>Age</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let data of rowSelectionTable.data">
          <td
            [nzChecked]="setOfCheckedId.has(data.id)"
            [nzDisabled]="data.disabled"
            (nzCheckedChange)="onItemChecked(data.id, $event)"
          ></td>
          <td>{{ data.name }}</td>
          <td>{{ data.age }}</td>
          <td>{{ data.address }}</td>
        </tr>
      </tbody>
    </nz-table>
  `,
                styles: [
                    `
      .send-request {
        margin-bottom: 16px;
      }

      .send-request span {
        margin-left: 8px;
      }
    `
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "A6Qe":
/*!********************************************!*\
  !*** ./site/doc/app/table/zh.component.ts ***!
  \********************************************/
/*! exports provided: NzDemoTableZhComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoTableZhComponent", function() { return NzDemoTableZhComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _share_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../share/codebox/codebox.component */ "rKiv");
/* harmony import */ var ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/affix */ "utH8");
/* harmony import */ var ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/anchor */ "l83q");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/icon */ "MOHP");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "uLhK");
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ "pk25");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/grid */ "T+9E");
/* harmony import */ var _basic__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./basic */ "mXrf");
/* harmony import */ var _row_selection_and_operation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./row-selection-and-operation */ "7OiN");
/* harmony import */ var _row_selection_custom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./row-selection-custom */ "kVUP");
/* harmony import */ var _sort_filter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sort-filter */ "v+Nj");
/* harmony import */ var _multiple_sorter__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./multiple-sorter */ "G10C");
/* harmony import */ var _reset_filter__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./reset-filter */ "V3E5");
/* harmony import */ var _custom_filter_panel__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./custom-filter-panel */ "cNqO");
/* harmony import */ var _ajax__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./ajax */ "OFDT");
/* harmony import */ var _size__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./size */ "rc0e");
/* harmony import */ var _bordered__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./bordered */ "Zgf6");
/* harmony import */ var _expand__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./expand */ "6pFZ");
/* harmony import */ var _colspan_rowspan__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./colspan-rowspan */ "x+js");
/* harmony import */ var _expand_children__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./expand-children */ "q/+K");
/* harmony import */ var _fixed_header__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./fixed-header */ "HhJM");
/* harmony import */ var _fixed_columns__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./fixed-columns */ "fJNJ");
/* harmony import */ var _fixed_columns_header__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./fixed-columns-header */ "u5qx");
/* harmony import */ var _grouping_columns__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./grouping-columns */ "LkeO");
/* harmony import */ var _edit_cell__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./edit-cell */ "4SUl");
/* harmony import */ var _edit_row__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./edit-row */ "ScYO");
/* harmony import */ var _nested_table__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./nested-table */ "EYm2");
/* harmony import */ var _virtual__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./virtual */ "JINn");
/* harmony import */ var _drag_sorting__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./drag-sorting */ "tXfh");
/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./template */ "grK3");
/* harmony import */ var _break_word__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./break-word */ "pwEb");
/* harmony import */ var _ellipsis__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./ellipsis */ "ip+q");
/* harmony import */ var _dynamic_settings__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./dynamic-settings */ "PHiq");
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ng-zorro-antd/table */ "mK+R");





































class NzDemoTableZhComponent {
    constructor() {
        this.expanded = false;
    }
    goLink(link) {
        if (window) {
            window.location.hash = link;
        }
    }
    expandAllCode() {
        this.expanded = !this.expanded;
        this.codeBoxes.forEach(code => {
            code.nzExpanded = this.expanded;
            code.expandCode(this.expanded);
            code.check();
        });
    }
}
NzDemoTableZhComponent.ɵfac = function NzDemoTableZhComponent_Factory(t) { return new (t || NzDemoTableZhComponent)(); };
NzDemoTableZhComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoTableZhComponent, selectors: [["nz-demo-table"]], viewQuery: function NzDemoTableZhComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_share_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_1__["NzCodeBoxComponent"], true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.codeBoxes = _t);
    } }, decls: 2296, vars: 108, consts: [[1, "toc-affix", 3, "nzOffsetTop"], ["nzShowInkInFixed", "", 3, "nzAffix", "nzClick"], ["nzHref", "#components-table-demo-basic", "nzTitle", "\u57FA\u672C\u7528\u6CD5"], ["nzHref", "#components-table-demo-row-selection-and-operation", "nzTitle", "\u9009\u62E9\u548C\u64CD\u4F5C"], ["nzHref", "#components-table-demo-row-selection-custom", "nzTitle", "\u81EA\u5B9A\u4E49\u9009\u62E9\u9879"], ["nzHref", "#components-table-demo-sort-filter", "nzTitle", "\u7B5B\u9009\u548C\u6392\u5E8F"], ["nzHref", "#components-table-demo-multiple-sorter", "nzTitle", "\u591A\u5217\u6392\u5E8F"], ["nzHref", "#components-table-demo-reset-filter", "nzTitle", "\u53EF\u63A7\u7684\u7B5B\u9009\u548C\u6392\u5E8F"], ["nzHref", "#components-table-demo-custom-filter-panel", "nzTitle", "\u81EA\u5B9A\u4E49\u7B5B\u9009\u83DC\u5355"], ["nzHref", "#components-table-demo-ajax", "nzTitle", "\u8FDC\u7A0B\u52A0\u8F7D\u6570\u636E"], ["nzHref", "#components-table-demo-size", "nzTitle", "\u7D27\u51D1\u578B"], ["nzHref", "#components-table-demo-bordered", "nzTitle", "\u5E26\u8FB9\u6846"], ["nzHref", "#components-table-demo-expand", "nzTitle", "\u53EF\u5C55\u5F00"], ["nzHref", "#components-table-demo-colspan-rowspan", "nzTitle", "\u8868\u683C\u884C/\u5217\u5408\u5E76"], ["nzHref", "#components-table-demo-expand-children", "nzTitle", "\u6811\u5F62\u6570\u636E\u5C55\u793A"], ["nzHref", "#components-table-demo-fixed-header", "nzTitle", "\u56FA\u5B9A\u8868\u5934"], ["nzHref", "#components-table-demo-fixed-columns", "nzTitle", "\u56FA\u5B9A\u5217"], ["nzHref", "#components-table-demo-fixed-columns-header", "nzTitle", "\u56FA\u5B9A\u5934\u548C\u5217"], ["nzHref", "#components-table-demo-grouping-columns", "nzTitle", "\u8868\u5934\u5206\u7EC4"], ["nzHref", "#components-table-demo-edit-cell", "nzTitle", "\u53EF\u7F16\u8F91\u5355\u5143\u683C"], ["nzHref", "#components-table-demo-edit-row", "nzTitle", "\u53EF\u7F16\u8F91\u884C"], ["nzHref", "#components-table-demo-nested-table", "nzTitle", "\u5D4C\u5957\u5B50\u8868\u683C"], ["nzHref", "#components-table-demo-virtual", "nzTitle", "\u865A\u62DF\u6EDA\u52A8"], ["nzHref", "#components-table-demo-drag-sorting", "nzTitle", "\u62D6\u62FD\u6392\u5E8F"], ["nzHref", "#components-table-demo-template", "nzTitle", "\u6A21\u677F\u7528\u6CD5"], ["nzHref", "#components-table-demo-break-word", "nzTitle", "\u6298\u884C\u663E\u793A"], ["nzHref", "#components-table-demo-ellipsis", "nzTitle", "\u5355\u5143\u683C\u81EA\u52A8\u7701\u7565"], ["nzHref", "#components-table-demo-dynamic-settings", "nzTitle", "\u52A8\u6001\u63A7\u5236\u8868\u683C\u5C5E\u6027"], ["nzHref", "#api", "nzTitle", "API"], [1, "markdown"], [1, "subtitle"], [1, "widget"], ["aria-label", "Edit this page on Github", "href", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/table/doc/index.zh-CN.md", "target", "_blank", "rel", "noopener noreferrer", 1, "edit-button"], ["nz-icon", "", "nzType", "edit"], ["id", "\u4F55\u65F6\u4F7F\u7528"], ["onclick", "window.location.hash = '\u4F55\u65F6\u4F7F\u7528'", 1, "anchor"], [1, "language-ts"], [1, "token", "keyword"], [1, "token", "punctuation"], [1, "token", "string"], ["id", "\u5982\u4F55\u4F7F\u7528"], ["onclick", "window.location.hash = '\u5982\u4F55\u4F7F\u7528'", 1, "anchor"], ["id", "\u9AD8\u5EA6\u5B9A\u5236"], ["onclick", "window.location.hash = '\u9AD8\u5EA6\u5B9A\u5236'", 1, "anchor"], ["href", "https://www.w3.org/TR/html401/struct/tables.html", "target", "_blank", "rel", "noopener"], ["id", "\u7EC4\u4EF6\u589E\u5F3A"], ["onclick", "window.location.hash = '\u7EC4\u4EF6\u589E\u5F3A'", 1, "anchor"], ["id", "\u6570\u636E\u5904\u7406"], ["onclick", "window.location.hash = '\u6570\u636E\u5904\u7406'", 1, "anchor"], ["href", "https://angular.io/guide/template-syntax#statement-context", "target", "_blank", "rel", "noopener"], [1, "language-html"], [1, "token", "tag"], [1, "token", "attr-name"], [1, "token", "attr-value"], ["nz-icon", "", "nzType", "appstore", "nz-tooltip", "", "nzTooltipTitle", "\u5C55\u5F00\u5168\u90E8\u4EE3\u7801", 1, "code-box-expand-trigger", 3, "click"], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", 3, "nzSpan"], ["nzTitle", "\u57FA\u672C\u7528\u6CD5", "nzSelector", "nz-demo-table-basic", "nzGenerateCommand", "ng g ng-zorro-antd:table-basic <name>", "nzComponentName", "NzDemoTableBasicComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], ["demo", ""], ["intro", ""], ["nzTitle", "\u9009\u62E9\u548C\u64CD\u4F5C", "nzSelector", "nz-demo-table-row-selection-and-operation", "nzGenerateCommand", "ng g ng-zorro-antd:table-row-selection-and-operation <name>", "nzComponentName", "NzDemoTableRowSelectionAndOperationComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], ["nzTitle", "\u81EA\u5B9A\u4E49\u9009\u62E9\u9879", "nzSelector", "nz-demo-table-row-selection-custom", "nzGenerateCommand", "ng g ng-zorro-antd:table-row-selection-custom <name>", "nzComponentName", "NzDemoTableRowSelectionCustomComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], ["nzTitle", "\u7B5B\u9009\u548C\u6392\u5E8F", "nzSelector", "nz-demo-table-sort-filter", "nzGenerateCommand", "ng g ng-zorro-antd:table-sort-filter <name>", "nzComponentName", "NzDemoTableSortFilterComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], ["nzTitle", "\u591A\u5217\u6392\u5E8F", "nzSelector", "nz-demo-table-multiple-sorter", "nzGenerateCommand", "ng g ng-zorro-antd:table-multiple-sorter <name>", "nzComponentName", "NzDemoTableMultipleSorterComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], ["nzTitle", "\u53EF\u63A7\u7684\u7B5B\u9009\u548C\u6392\u5E8F", "nzSelector", "nz-demo-table-reset-filter", "nzGenerateCommand", "ng g ng-zorro-antd:table-reset-filter <name>", "nzComponentName", "NzDemoTableResetFilterComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], ["nzTitle", "\u81EA\u5B9A\u4E49\u7B5B\u9009\u83DC\u5355", "nzSelector", "nz-demo-table-custom-filter-panel", "nzGenerateCommand", "ng g ng-zorro-antd:table-custom-filter-panel <name>", "nzComponentName", "NzDemoTableCustomFilterPanelComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], ["nzTitle", "\u8FDC\u7A0B\u52A0\u8F7D\u6570\u636E", "nzSelector", "nz-demo-table-ajax", "nzGenerateCommand", "ng g ng-zorro-antd:table-ajax <name>", "nzComponentName", "NzDemoTableAjaxComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], [1, "language-typescript"], [1, "token", "operator"], ["href", "https://randomuser.me", "target", "_blank", "rel", "noopener"], ["nzTitle", "\u7D27\u51D1\u578B", "nzSelector", "nz-demo-table-size", "nzGenerateCommand", "ng g ng-zorro-antd:table-size <name>", "nzComponentName", "NzDemoTableSizeComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], ["nzTitle", "\u5E26\u8FB9\u6846", "nzSelector", "nz-demo-table-bordered", "nzGenerateCommand", "ng g ng-zorro-antd:table-bordered <name>", "nzComponentName", "NzDemoTableBorderedComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], ["nzTitle", "\u53EF\u5C55\u5F00", "nzSelector", "nz-demo-table-expand", "nzGenerateCommand", "ng g ng-zorro-antd:table-expand <name>", "nzComponentName", "NzDemoTableExpandComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], ["nzTitle", "\u8868\u683C\u884C/\u5217\u5408\u5E76", "nzSelector", "nz-demo-table-colspan-rowspan", "nzGenerateCommand", "ng g ng-zorro-antd:table-colspan-rowspan <name>", "nzComponentName", "NzDemoTableColspanRowspanComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], ["nzTitle", "\u6811\u5F62\u6570\u636E\u5C55\u793A", "nzSelector", "nz-demo-table-expand-children", "nzGenerateCommand", "ng g ng-zorro-antd:table-expand-children <name>", "nzComponentName", "NzDemoTableExpandChildrenComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], ["nzTitle", "\u56FA\u5B9A\u8868\u5934", "nzSelector", "nz-demo-table-fixed-header", "nzGenerateCommand", "ng g ng-zorro-antd:table-fixed-header <name>", "nzComponentName", "NzDemoTableFixedHeaderComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], ["nzTitle", "\u56FA\u5B9A\u5217", "nzSelector", "nz-demo-table-fixed-columns", "nzGenerateCommand", "ng g ng-zorro-antd:table-fixed-columns <name>", "nzComponentName", "NzDemoTableFixedColumnsComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], ["nzTitle", "\u56FA\u5B9A\u5934\u548C\u5217", "nzSelector", "nz-demo-table-fixed-columns-header", "nzGenerateCommand", "ng g ng-zorro-antd:table-fixed-columns-header <name>", "nzComponentName", "NzDemoTableFixedColumnsHeaderComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], ["nzTitle", "\u8868\u5934\u5206\u7EC4", "nzSelector", "nz-demo-table-grouping-columns", "nzGenerateCommand", "ng g ng-zorro-antd:table-grouping-columns <name>", "nzComponentName", "NzDemoTableGroupingColumnsComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], ["nzTitle", "\u53EF\u7F16\u8F91\u5355\u5143\u683C", "nzSelector", "nz-demo-table-edit-cell", "nzGenerateCommand", "ng g ng-zorro-antd:table-edit-cell <name>", "nzComponentName", "NzDemoTableEditCellComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], ["href", "https://angular.io/api/core/ChangeDetectionStrategy", "target", "_blank", "rel", "noopener"], ["nzTitle", "\u53EF\u7F16\u8F91\u884C", "nzSelector", "nz-demo-table-edit-row", "nzGenerateCommand", "ng g ng-zorro-antd:table-edit-row <name>", "nzComponentName", "NzDemoTableEditRowComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], ["nzTitle", "\u5D4C\u5957\u5B50\u8868\u683C", "nzSelector", "nz-demo-table-nested-table", "nzGenerateCommand", "ng g ng-zorro-antd:table-nested-table <name>", "nzComponentName", "NzDemoTableNestedTableComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], ["nzTitle", "\u865A\u62DF\u6EDA\u52A8", "nzSelector", "nz-demo-table-virtual", "nzGenerateCommand", "ng g ng-zorro-antd:table-virtual <name>", "nzComponentName", "NzDemoTableVirtualComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], ["href", "https://material.angular.io/cdk/scrolling/overview", "target", "_blank", "rel", "noopener"], ["href", "https://material.angular.io/cdk/scrolling/api#CdkVirtualScrollViewport", "target", "_blank", "rel", "noopener"], ["nzTitle", "\u62D6\u62FD\u6392\u5E8F", "nzSelector", "nz-demo-table-drag-sorting", "nzGenerateCommand", "ng g ng-zorro-antd:table-drag-sorting <name>", "nzComponentName", "NzDemoTableDragSortingComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], ["href", "https://material.angular.io/cdk/drag-drop/overview", "target", "_blank", "rel", "noopener"], ["nzTitle", "\u6A21\u677F\u7528\u6CD5", "nzSelector", "nz-demo-table-template", "nzGenerateCommand", "ng g ng-zorro-antd:table-template <name>", "nzComponentName", "NzDemoTableTemplateComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], ["nzTitle", "\u6298\u884C\u663E\u793A", "nzSelector", "nz-demo-table-break-word", "nzGenerateCommand", "ng g ng-zorro-antd:table-break-word <name>", "nzComponentName", "NzDemoTableBreakWordComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], ["nzTitle", "\u5355\u5143\u683C\u81EA\u52A8\u7701\u7565", "nzSelector", "nz-demo-table-ellipsis", "nzGenerateCommand", "ng g ng-zorro-antd:table-ellipsis <name>", "nzComponentName", "NzDemoTableEllipsisComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], ["nzTitle", "\u52A8\u6001\u63A7\u5236\u8868\u683C\u5C5E\u6027", "nzSelector", "nz-demo-table-dynamic-settings", "nzGenerateCommand", "ng g ng-zorro-antd:table-dynamic-settings <name>", "nzComponentName", "NzDemoTableDynamicSettingsComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], [1, "markdown", "api-container"], ["id", "api"], ["onclick", "window.location.hash = 'api'", 1, "anchor"], ["id", "nz-table"], [1, "api-type-label", "component"], ["onclick", "window.location.hash = 'nz-table'", 1, "anchor"], ["href", "https://material.angular.io/cdk/scrolling/api", "target", "_blank", "rel", "noopener"], ["id", "th"], ["onclick", "window.location.hash = 'th'", 1, "anchor"], ["id", "td"], ["onclick", "window.location.hash = 'td'", 1, "anchor"], ["id", "tr"], ["onclick", "window.location.hash = 'tr'", 1, "anchor"], ["id", "nz-filter-trigger"], ["onclick", "window.location.hash = 'nz-filter-trigger'", 1, "anchor"], ["id", "[nz-virtual-scroll]"], [1, "api-type-label", "directive"], ["onclick", "window.location.hash = '[nz-virtual-scroll]'", 1, "anchor"], ["id", "\u6CE8\u610F"], ["onclick", "window.location.hash = '\u6CE8\u610F'", 1, "anchor"], ["spellcheck", "true", 1, "token", "comment"], [1, "token", "template-string"], [1, "token", "interpolation"], [1, "token", "interpolation-punctuation", "punctuation"], [1, "token", "function"], ["href", "https://immerjs.github.io/immer/docs/introduction", "target", "_blank", "rel", "noopener"]], template: function NzDemoTableZhComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-affix", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nz-anchor", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzClick", function NzDemoTableZhComponent_Template_nz_anchor_nzClick_2_listener($event) { return ctx.goLink($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "nz-link", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "nz-link", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "nz-link", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "nz-link", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "nz-link", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "nz-link", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "nz-link", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "nz-link", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "nz-link", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "nz-link", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "nz-link", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "nz-link", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "nz-link", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "nz-link", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "nz-link", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "nz-link", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "nz-link", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "nz-link", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "nz-link", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "nz-link", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "nz-link", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "nz-link", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "nz-link", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "nz-link", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "nz-link", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "nz-link", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "nz-link", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "section", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\u8868\u683C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "i", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "section", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "\u5C55\u793A\u884C\u5217\u6570\u636E\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h2", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "\u4F55\u65F6\u4F7F\u7528");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " \u5F53\u6709\u5927\u91CF\u7ED3\u6784\u5316\u7684\u6570\u636E\u9700\u8981\u5C55\u73B0\u65F6\uFF1B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " \u5F53\u9700\u8981\u5BF9\u6570\u636E\u8FDB\u884C\u6392\u5E8F\u3001\u641C\u7D22\u3001\u5206\u9875\u3001\u81EA\u5B9A\u4E49\u64CD\u4F5C\u7B49\u590D\u6742\u884C\u4E3A\u65F6\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "pre", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "import");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "{");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " NzTableModule ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "from");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "'ng-zorro-antd/table'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "h2", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "\u5982\u4F55\u4F7F\u7528");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "a", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Table \u7EC4\u4EF6\u540C\u65F6\u5177\u5907\u4E86\u6613\u7528\u6027\u548C\u9AD8\u5EA6\u53EF\u5B9A\u5236\u6027");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "h3", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "\u9AD8\u5EA6\u5B9A\u5236");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "a", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "\u5728 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "nz-table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, " \u7EC4\u4EF6\u4E2D\u5B8C\u6574\u7684\u66B4\u9732\u4E86 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "W3C\u6807\u51C6 <table>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, " \u7684\u6240\u6709\u7EC4\u6210\u90E8\u5206\uFF0C\u4F60\u53EF\u4EE5\u50CF\u4F7F\u7528 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, " \u5143\u7D20\u4E00\u6837\u4F7F\u7528 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "nz-table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, " \uFF0C\u6839\u636E\u4F9D\u636E\u4E1A\u52A1\u9700\u6C42\uFF0C\u4F7F\u7528\u8005\u53EF\u4EE5\u81EA\u7531\u7684\u63A7\u5236\u4EFB\u4F55\u4E00\u4E2A\u90E8\u5206\u7684\u6837\u5F0F\u3001\u5185\u5BB9\u3001\u903B\u8F91\u548C\u4E8B\u4EF6\u7ED1\u5B9A\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "h3", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "\u7EC4\u4EF6\u589E\u5F3A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "a", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "\u5728 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "nz-table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, " \u7B49\u591A\u4E2A\u66B4\u9732\u7684\u5143\u7D20\u4E0A\uFF0C\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u589E\u5F3A\u8BED\u6CD5\uFF0C\u7ECF\u8FC7\u914D\u7F6E\u4E4B\u540E\u53EF\u4EE5\u5F88\u65B9\u4FBF\u7684\u5B9E\u73B0\u591A\u9009\u3001\u8FC7\u6EE4\u3001\u6392\u5E8F\u3001\u56FA\u5B9A\u5217\u3001\u56FA\u5B9A\u8868\u5934\u3001\u670D\u52A1\u7AEF\u5206\u9875\u7B49\u529F\u80FD\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "h3", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "\u6570\u636E\u5904\u7406");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "a", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "\u5C06\u6570\u636E\u4F20\u5165");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "[nzData]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "\uFF0C\u7ECF\u8FC7\u7EC4\u4EF6\u5904\u7406\u4E4B\u540E\uFF08\u5305\u62EC\u5206\u9875\u3001\u6392\u5E8F\u3001\u7B5B\u9009\u7B49\uFF09\uFF0C\u901A\u8FC7 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "a", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "\u6A21\u677F\u53D8\u91CF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, " \u83B7\u53D6\u5F53\u524D\u5C55\u793A\u8868\u683C\u90E8\u5206\u7684\u6570\u636E\uFF0C\u4F7F\u7528 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "*ngFor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, " \u4F9D\u636E\u9700\u6C42\u5C06\u6570\u636E\u6E32\u67D3\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "pre", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "nz-table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "span", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "#basicTable");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "span", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "[nzData]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "span", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "dataSet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, "Age");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](214, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](222, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](223, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](225, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](226, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](230, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](231, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](233, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](234, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](238, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](239, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](241, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](242, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](246, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](247, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](249, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](250, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](254, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](255, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](257, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](258, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](262, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](263, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](264, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "span", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](266, "*ngFor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "span", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](269, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](271, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](272, "let data of basicTable.data");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](274, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](276, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](277, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](281, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](282, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](284, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](285, "{{data.name}}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](289, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](290, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](292, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](293, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](295, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](297, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](298, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](300, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](301, "{{data.age}}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](303, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](304, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](305, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](306, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](307, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](308, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](309, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](310, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](311, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](312, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](313, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](314, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](315, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](316, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](317, "{{data.address}}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](318, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](319, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](320, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](321, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](322, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](323, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](324, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](325, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](326, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](327, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](328, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](329, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](330, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](331, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](332, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](333, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](334, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](335, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](336, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](337, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](338, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](339, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](340, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](341, "Action \u4E00 {{data.name}}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](342, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](343, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](344, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](345, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](346, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](347, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](348, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](349, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](350, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](351, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](352, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](353, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](354, "nz-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](355, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](356, "span", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](357, "nzType");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](358, "span", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](359, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](360, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](361, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](362, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](363, "vertical");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](364, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](365, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](366, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](367, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](368, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](369, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](370, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](371, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](372, "nz-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](373, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](374, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](375, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](376, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](377, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](378, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](379, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](380, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](381, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](382, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](383, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](384, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](385, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](386, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](387, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](388, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](389, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](390, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](391, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](392, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](393, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](394, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](395, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](396, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](397, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](398, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](399, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](400, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](401, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](402, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](403, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](404, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](405, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](406, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](407, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](408, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](409, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](410, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](411, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](412, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](413, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](414, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](415, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](416, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](417, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](418, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](419, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](420, "nz-table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](421, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](422, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](423, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](424, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](425, "\u4EE3\u7801\u6F14\u793A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](426, "i", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoTableZhComponent_Template_i_click_426_listener() { return ctx.expandAllCode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](427, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](428, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](429, "nz-code-box", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](430, "nz-demo-table-basic", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](431, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](432, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](433, "\u7B80\u5355\u7684\u8868\u683C\uFF0C\u6700\u540E\u4E00\u5217\u662F\u5404\u79CD\u64CD\u4F5C\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](434, "nz-code-box", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](435, "nz-demo-table-row-selection-and-operation", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](436, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](437, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](438, "\u7B2C\u4E00\u5217\u662F\u8054\u52A8\u7684\u9009\u62E9\u6846\uFF0C\u589E\u52A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](439, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](440, "[nzChecked]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](441, " \u540E\uFF0C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](442, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](443, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](444, " \u83B7\u5F97\u548C ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](445, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](446, "nz-checkbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](447, " \u4E00\u6837\u7684\u529F\u80FD\uFF0C\u9009\u62E9\u540E\u8FDB\u884C\u64CD\u4F5C\uFF0C\u5B8C\u6210\u540E\u6E05\u7A7A\u9009\u62E9\uFF0C\u8BF7\u6CE8\u610F\uFF1A\u6570\u636E\u903B\u8F91\u9700\u8981\u81EA\u884C\u63A7\u5236\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](448, "nz-code-box", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](449, "nz-demo-table-row-selection-custom", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](450, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](451, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](452, "\u901A\u8FC7 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](453, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](454, "nzSelections");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](455, " \u81EA\u5B9A\u4E49\u9009\u62E9\u9879.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](456, "nz-code-box", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](457, "nz-demo-table-sort-filter", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](458, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](459, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](460, "\u7B5B\u9009\uFF1A\u5BF9\u67D0\u4E00\u5217\u6570\u636E\u8FDB\u884C\u7B5B\u9009\uFF0C\u901A\u8FC7\u6307\u5B9A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](461, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](462, "[nzFilters]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](463, " \u5C5E\u6027\u6765\u6307\u5B9A\u7B5B\u9009\u83DC\u5355\uFF0C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](464, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](465, "[nzFilterFn]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](466, " \u6307\u5B9A\u7B5B\u9009\u51FD\u6570\uFF0C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](467, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](468, "[nzFilterMultiple]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](469, " \u7528\u4E8E\u6307\u5B9A\u591A\u9009\u548C\u5355\u9009\uFF0C\u901A\u8FC7\u8BBE\u7F6E ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](470, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](471, "[nzFilters]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](472, " \u4E2D\u7684 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](473, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](474, "{ byDefault: true }");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](475, " \u5C5E\u6027\u6765\u9ED8\u8BA4\u542F\u7528\u4E00\u4E2A\u7B5B\u9009\u5668\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](476, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](477, "\u6392\u5E8F\uFF1A\u5BF9\u67D0\u4E00\u5217\u6570\u636E\u8FDB\u884C\u6392\u5E8F\uFF0C\u901A\u8FC7\u6307\u5B9A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](478, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](479, "[nzSortOrder]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](480, " \u6765\u6307\u5B9A\u9ED8\u8BA4\u6392\u5E8F\u987A\u5E8F\uFF0C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](481, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](482, "[nzSortFn]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](483, " \u6307\u5B9A\u6392\u5E8F\u51FD\u6570 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](484, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](485, "[nzSortDirections]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](486, " \u6539\u53D8\u6BCF\u5217\u53EF\u7528\u7684\u6392\u5E8F\u65B9\u5F0F\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](487, "nz-code-box", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](488, "nz-demo-table-multiple-sorter", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](489, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](490, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](491, "\u4F7F\u7528 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](492, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](493, "[nzSortPriority]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](494, " \u5B57\u6BB5\u4EE5\u914D\u7F6E\u591A\u5217\u6392\u5E8F\u4F18\u5148\u7EA7\u3002\u901A\u8FC7 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](495, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](496, "[nzSortFn]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](497, " \u914D\u7F6E\u6392\u5E8F\u903B\u8F91\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](498, "nz-code-box", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](499, "nz-demo-table-reset-filter", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](500, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](501, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](502, "\u4FEE\u6539 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](503, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](504, "[nzSortOrder]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](505, " \u548C ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](506, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](507, "[nzFilters]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](508, " \u6765\u6307\u5B9A\u5F53\u524D\u5217\u7684\u6392\u5E8F\u4E0E\u7B5B\u9009\u72B6\u6001\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](509, "nz-code-box", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](510, "nz-demo-table-custom-filter-panel", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](511, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](512, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](513, "\u901A\u8FC7 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](514, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](515, "<nz-filter-trigger>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](516, " \u7EC4\u4EF6\u5B9A\u4E49\u81EA\u5B9A\u4E49\u7684\u5217\u7B5B\u9009\u529F\u80FD\uFF0C\u5E76\u5B9E\u73B0\u4E00\u4E2A\u641C\u7D22\u5217\u7684\u793A\u4F8B\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](517, "nz-code-box", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](518, "nz-demo-table-ajax", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](519, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](520, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](521, "\u8FD9\u4E2A\u4F8B\u5B50\u901A\u8FC7\u7B80\u5355\u7684 ajax \u8BFB\u53D6\u65B9\u5F0F\uFF0C\u6F14\u793A\u4E86\u5982\u4F55\u4ECE\u670D\u52A1\u7AEF\u8BFB\u53D6\u5E76\u5C55\u73B0\u6570\u636E\uFF0C\u5177\u6709\u7B5B\u9009\u3001\u6392\u5E8F\u7B49\u529F\u80FD\u4EE5\u53CA\u9875\u9762 loading \u6548\u679C\u3002\u5F00\u53D1\u8005\u53EF\u4EE5\u81EA\u884C\u63A5\u5165\u5176\u4ED6\u6570\u636E\u5904\u7406\u65B9\u5F0F\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](522, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](523, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](524, " \u5206\u9875\uFF1A\u4F7F\u7528 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](525, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](526, "[nzFrontPagination]=\"false\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](527, " \u6307\u5B9A\u7531\u670D\u52A1\u7AEF\u5206\u9875\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](528, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](529, " \u6392\u5E8F\uFF1A\u4F7F\u7528 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](530, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](531, "[nzSortFn]=\"true\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](532, " \u6307\u5B9A\u7531\u670D\u52A1\u7AEF\u6392\u5E8F\uFF0C\u5982\u679C\u9700\u8981\u591A\u5217\u6392\u5E8F\u53EF\u4F7F\u7528 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](533, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](534, "[nzSortPriority]=\"true\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](535, "\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](536, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](537, " \u7B5B\u9009\uFF1A\u4F7F\u7528 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](538, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](539, "[nzFilters]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](540, " \u6765\u6307\u5B9A\u7B5B\u9009\u9879\uFF0C\u4F7F\u7528 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](541, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](542, "[nzFilterFn]=\"true\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](543, " \u6307\u5B9A\u7531\u670D\u52A1\u7AEF\u7B5B\u9009");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](544, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](545, " \u53C2\u6570\u4F20\u8F93\uFF1A\u901A\u8FC7 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](546, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](547, "(nzQueryParams)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](548, " \u670D\u52A1\u7AEF\u9700\u8981\u7684\u53C2\u6570\uFF0C\u6570\u636E\u7ED3\u6784\u4E3A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](549, "pre", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](550, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](551, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](552, "{");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](553, "\n  pageIndex");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](554, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](555, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](556, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](557, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](558, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](559, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](560, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](561, "\n  pageSize");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](562, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](563, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](564, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](565, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](566, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](567, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](568, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](569, "\n  sort");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](570, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](571, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](572, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](573, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](574, "Array");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](575, "span", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](576, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](577, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](578, "{");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](579, " key");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](580, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](581, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](582, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](583, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](584, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](585, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](586, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](587, " value");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](588, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](589, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](590, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](591, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](592, "'ascend'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](593, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](594, "span", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](595, "|");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](596, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](597, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](598, "'descend'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](599, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](600, "span", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](601, "|");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](602, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](603, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](604, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](605, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](606, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](607, "}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](608, "span", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](609, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](610, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](611, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](612, "\n  filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](613, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](614, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](615, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](616, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](617, "Array");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](618, "span", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](619, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](620, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](621, "{");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](622, " key");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](623, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](624, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](625, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](626, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](627, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](628, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](629, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](630, " value");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](631, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](632, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](633, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](634, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](635, "any");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](636, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](637, "span", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](638, "|");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](639, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](640, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](641, "any");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](642, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](643, "[");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](644, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](645, "]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](646, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](647, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](648, "}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](649, "span", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](650, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](651, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](652, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](653, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](654, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](655, "}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](656, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](657, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](658, "\u6CE8\u610F\uFF0C\u6B64\u793A\u4F8B\u4F7F\u7528 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](659, "a", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](660, "\u6A21\u62DF\u63A5\u53E3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](661, "\uFF0C\u5C55\u793A\u6570\u636E\u53EF\u80FD\u4E0D\u51C6\u786E\uFF0C\u8BF7\u6253\u5F00\u7F51\u7EDC\u9762\u677F\u67E5\u770B\u8BF7\u6C42\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](662, "nz-code-box", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](663, "nz-demo-table-size", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](664, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](665, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](666, "\u4E24\u79CD\u7D27\u51D1\u578B\u7684\u5217\u8868\uFF0C\u5C0F\u578B\u5217\u8868\u53EA\u7528\u4E8E\u5BF9\u8BDD\u6846\u5185\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](667, "nz-code-box", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](668, "nz-demo-table-bordered", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](669, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](670, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](671, "\u6DFB\u52A0\u8868\u683C\u8FB9\u6846\u7EBF\uFF0C\u9875\u5934\u548C\u9875\u811A\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](672, "nz-code-box", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](673, "nz-demo-table-expand", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](674, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](675, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](676, "\u5F53\u8868\u683C\u5185\u5BB9\u8F83\u591A\u4E0D\u80FD\u4E00\u6B21\u6027\u5B8C\u5168\u5C55\u793A\u65F6\uFF0C\u53EF\u4EE5\u901A\u8FC7 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](677, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](678, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](679, " \u4E0A\u7684 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](680, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](681, "nzExpand");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](682, " \u5C5E\u6027\u5C55\u5F00\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](683, "nz-code-box", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](684, "nz-demo-table-colspan-rowspan", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](685, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](686, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](687, "\u50CF ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](688, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](689, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](690, "W3C\u6807\u51C6 <table>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](691, " \u4E00\u6837\uFF0C\u4F7F\u7528 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](692, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](693, "colspan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](694, " \u548C ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](695, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](696, "rowspan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](697, " \u5408\u5E76\u884C/\u5217\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](698, "nz-code-box", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](699, "nz-demo-table-expand-children", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](700, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](701, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](702, "\u8868\u683C\u652F\u6301\u6811\u5F62\u6570\u636E\u7684\u5C55\u793A\uFF0C\u53EF\u4EE5\u901A\u8FC7\u8BBE\u7F6E ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](703, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](704, "nzIndentSize");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](705, " \u4EE5\u63A7\u5236\u6BCF\u4E00\u5C42\u7684\u7F29\u8FDB\u5BBD\u5EA6\uFF0C\u672C\u4F8B\u5B50\u4E2D\u63D0\u4F9B\u4E86\u6811\u4E0E\u6570\u7EC4\u4E4B\u95F4\u7684\u8F6C\u6362\u51FD\u6570\uFF0C\u5B9E\u9645\u4E1A\u52A1\u4E2D\u8BF7\u6839\u636E\u9700\u6C42\u4FEE\u6539\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](706, "nz-code-box", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](707, "nz-demo-table-fixed-header", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](708, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](709, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](710, "\u6307\u5B9A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](711, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](712, "[nzScroll]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](713, " \u7684 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](714, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](715, "y");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](716, " \u6570\u503C \u65B9\u4FBF\u4E00\u9875\u5185\u5C55\u793A\u5927\u91CF\u6570\u636E\uFF0C\u6BCF\u4E00\u5217\u7684\u5BBD\u5EA6\u53EF\u4EE5\u7531 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](717, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](718, "[nzWidth]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](719, " \u6307\u5B9A\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](720, "nz-code-box", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](721, "nz-demo-table-fixed-columns", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](722, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](723, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](724, "\u5BF9\u4E8E\u5217\u6570\u5F88\u591A\u7684\u6570\u636E\uFF0C\u53EF\u4EE5\u4F7F\u7528 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](725, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](726, "[nzLeft]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](727, " \u548C ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](728, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](729, "[nzRight]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](730, " \u56FA\u5B9A\u524D\u540E\u7684\u5217\uFF0C\u6A2A\u5411\u6EDA\u52A8\u67E5\u770B\u5176\u5B83\u6570\u636E\uFF0C\u9700\u8981\u548C ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](731, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](732, "[nzScroll].x");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](733, " \u914D\u5408\u4F7F\u7528\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](734, "blockquote");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](735, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](736, "\u5217\u5934\u4E0E\u5185\u5BB9\u4E0D\u5BF9\u9F50\u6216\u51FA\u73B0\u5217\u91CD\u590D\uFF0C\u8BF7\u6307\u5B9A\u56FA\u5B9A\u5217\u7684\u5BBD\u5EA6 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](737, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](738, "[nzWidth]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](739, "\u3002\u5982\u679C\u6307\u5B9A width \u4E0D\u751F\u6548\u6216\u51FA\u73B0\u767D\u8272\u5782\u76F4\u7A7A\u9699\uFF0C\u8BF7\u5C1D\u8BD5\u5EFA\u8BAE\u7559\u4E00\u5217\u4E0D\u8BBE\u5BBD\u5EA6\u4EE5\u9002\u5E94\u5F39\u6027\u5E03\u5C40\uFF0C\u6216\u8005\u68C0\u67E5\u662F\u5426\u6709\u8D85\u957F\u8FDE\u7EED\u5B57\u6BB5\u7834\u574F\u5E03\u5C40\u3002\n\u5EFA\u8BAE\u6307\u5B9A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](740, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](741, "nzScroll.x");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](742, " \u4E3A\u5927\u4E8E\u8868\u683C\u5BBD\u5EA6\u7684\u56FA\u5B9A\u503C\u6216\u767E\u5206\u6BD4\u3002\u6CE8\u610F\uFF0C\u4E14\u975E\u56FA\u5B9A\u5217\u5BBD\u5EA6\u4E4B\u548C\u4E0D\u8981\u8D85\u8FC7 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](743, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](744, "nzScroll.x");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](745, "\u3002\n\u6CE8\u610F\uFF1A\u56FA\u5B9A\u5217\u901A\u8FC7 sticky \u5B9E\u73B0\uFF0CIE 11 \u4F1A\u964D\u7EA7\u6210\u6A2A\u5411\u6EDA\u52A8\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](746, "nz-code-box", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](747, "nz-demo-table-fixed-columns-header", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](748, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](749, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](750, "\u540C\u65F6\u56FA\u5B9A\u5934\u548C\u5217\uFF0C\u9002\u5408\u540C\u65F6\u5C55\u793A\u6709\u5927\u91CF\u6570\u636E\u548C\u6570\u636E\u5217\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](751, "blockquote");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](752, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](753, "\u5217\u5934\u4E0E\u5185\u5BB9\u4E0D\u5BF9\u9F50\u6216\u51FA\u73B0\u5217\u91CD\u590D\uFF0C\u8BF7\u6307\u5B9A\u56FA\u5B9A\u5217\u7684\u5BBD\u5EA6 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](754, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](755, "[nzWidth]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](756, "\u3002\u5982\u679C\u6307\u5B9A width \u4E0D\u751F\u6548\u6216\u51FA\u73B0\u767D\u8272\u5782\u76F4\u7A7A\u9699\uFF0C\u8BF7\u5C1D\u8BD5\u5EFA\u8BAE\u7559\u4E00\u5217\u4E0D\u8BBE\u5BBD\u5EA6\u4EE5\u9002\u5E94\u5F39\u6027\u5E03\u5C40\uFF0C\u6216\u8005\u68C0\u67E5\u662F\u5426\u6709\u8D85\u957F\u8FDE\u7EED\u5B57\u6BB5\u7834\u574F\u5E03\u5C40\u3002\n\u5EFA\u8BAE\u6307\u5B9A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](757, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](758, "nzScroll.x");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](759, " \u4E3A\u5927\u4E8E\u8868\u683C\u5BBD\u5EA6\u7684\u56FA\u5B9A\u503C\u6216\u767E\u5206\u6BD4\u3002\u6CE8\u610F\uFF0C\u4E14\u975E\u56FA\u5B9A\u5217\u5BBD\u5EA6\u4E4B\u548C\u4E0D\u8981\u8D85\u8FC7 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](760, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](761, "nzScroll.x");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](762, "\u3002\n\u6CE8\u610F\uFF1A\u56FA\u5B9A\u5217\u901A\u8FC7 sticky \u5B9E\u73B0\uFF0CIE 11 \u4F1A\u964D\u7EA7\u6210\u6A2A\u5411\u6EDA\u52A8\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](763, "nz-code-box", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](764, "nz-demo-table-grouping-columns", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](765, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](766, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](767, "\u56FA\u5B9A\u5217\u4E0E\u5206\u7EC4\u8868\u5934\u8054\u5408\u4F7F\u7528\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](768, "nz-code-box", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](769, "nz-demo-table-edit-cell", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](770, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](771, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](772, "\u5B9A\u5236\u5E26\u5355\u5143\u683C\u7F16\u8F91\u529F\u80FD\u7684\u8868\u683C\uFF0C\u81EA\u7531\u64CD\u4F5C\u5355\u5143\u683C\u5185\u5BB9\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](773, "blockquote");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](774, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](775, "\u4E3A\u4E86\u83B7\u5F97\u66F4\u597D\u7684\u6027\u80FD\uFF0CNG-ZORRO \u6240\u6709\u7EC4\u4EF6\u90FD\u8FD0\u884C\u5728 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](776, "a", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](777, "OnPush");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](778, " \u6A21\u5F0F\u4E0B\uFF0C\u8FD9\u610F\u5473\u7740\u5BF9 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](779, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](780, "@Input()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](781, " \u6570\u636E\u7684 mutate \u5C06\u4E0D\u4F1A\u751F\u6548\uFF0C\u8BF7\u4F7F\u7528 immutable \u65B9\u5F0F\u64CD\u4F5C\u6570\u7EC4\u6216\u8005\u5BF9\u8C61\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](782, "blockquote");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](783, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](784, "\u5F00\u53D1\u8005\u53EF\u4EE5\u53C2\u7167\u8BE5\u4F8B\u5B50\u6839\u636E\u81EA\u5DF1\u9700\u6C42\u81EA\u7531\u5B9A\u5236\u8868\u683C\u7684\u7F16\u8F91\u529F\u80FD\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](785, "nz-code-box", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](786, "nz-demo-table-edit-row", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](787, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](788, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](789, "\u5B9A\u5236\u5E26\u884C\u7F16\u8F91\u529F\u80FD\u7684\u8868\u683C\uFF0C\u81EA\u7531\u64CD\u4F5C\u884C\u5185\u5BB9\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](790, "blockquote");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](791, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](792, "\u4E3A\u4E86\u83B7\u5F97\u66F4\u597D\u7684\u6027\u80FD\uFF0CNG-ZORRO \u6240\u6709\u7EC4\u4EF6\u90FD\u8FD0\u884C\u5728 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](793, "a", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](794, "OnPush");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](795, " \u6A21\u5F0F\u4E0B\uFF0C\u8FD9\u610F\u5473\u7740\u5BF9 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](796, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](797, "@Input()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](798, " \u6570\u636E\u7684 mutate \u5C06\u4E0D\u4F1A\u751F\u6548\uFF0C\u8BF7\u4F7F\u7528 immutable \u65B9\u5F0F\u64CD\u4F5C\u6570\u7EC4\u6216\u8005\u5BF9\u8C61\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](799, "blockquote");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](800, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](801, "\u5F00\u53D1\u8005\u53EF\u4EE5\u53C2\u7167\u8BE5\u4F8B\u5B50\u6839\u636E\u81EA\u5DF1\u9700\u6C42\u81EA\u7531\u5B9A\u5236\u8868\u683C\u7684\u7F16\u8F91\u529F\u80FD\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](802, "nz-code-box", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](803, "nz-demo-table-nested-table", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](804, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](805, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](806, "\u5C55\u793A\u6BCF\u884C\u6570\u636E\u66F4\u8BE6\u7EC6\u7684\u4FE1\u606F\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](807, "nz-code-box", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](808, "nz-demo-table-virtual", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](809, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](810, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](811, "\u865A\u62DF\u6EDA\u52A8\uFF0C\u7ED3\u5408 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](812, "a", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](813, "cdk scrolling");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](814, " \u7684\u865A\u62DF\u6EDA\u52A8\uFF0C\u7528\u4E8E\u5DE8\u91CF\u6570\u636E\u52A0\u8F7D\u3002\u53EF\u4EE5\u901A\u8FC7\u83B7\u5F97 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](815, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](816, "cdkVirtualScrollViewport");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](817, " \u8FDB\u884C\u8FDB\u4E00\u6B65\u64CD\u4F5C\uFF0C\u89C1\u672C\u793A\u4F8B\u53CA ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](818, "a", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](819, "API");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](820, "\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](821, "nz-code-box", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](822, "nz-demo-table-drag-sorting", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](823, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](824, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](825, "\u4F7F\u7528\u81EA\u5B9A\u4E49\u5143\u7D20\uFF0C\u7528\u6237\u53EF\u4EE5\u5BFC\u5165 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](826, "a", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](827, "@angular/cdk/drag-drop");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](828, " \u6765\u5B9E\u73B0\u62D6\u62FD\u6392\u5E8F\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](829, "blockquote");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](830, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](831, "\u6CE8\u610F\uFF1A\u9700\u8981\u624B\u52A8\u5BFC\u5165 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](832, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](833, "import {DragDropModule} from '@angular/cdk/drag-drop'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](834, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](835, "nz-code-box", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](836, "nz-demo-table-template", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](837, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](838, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](839, "\u6A21\u677F\u6A21\u5F0F\uFF0C\u663E\u793A\u5185\u5BB9\u4EC5\u7531\u6A21\u677F\u5185\u5BB9\u63A7\u5236\uFF0C\u4E0D\u518D\u9700\u8981\u5411 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](840, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](841, "nzData");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](842, " \u4F20\u5165\u6570\u636E\uFF0C\u5B8C\u5168\u50CF\u666E\u901A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](843, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](844, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](845, " \u4E00\u6837\u4F7F\u7528\uFF0C\u4F7F\u7528 ant-design \u7684\u6837\u5F0F\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](846, "nz-code-box", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](847, "nz-demo-table-break-word", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](848, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](849, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](850, "\u5F53\u6709\u8FDE\u7EED\u8D85\u957F\u5B57\u7B26\u4E32\u65F6\uFF0C\u53EF\u4EE5\u4F7F\u7528 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](851, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](852, "nzBreakWord");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](853, " \u6765\u6298\u884C\u663E\u793A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](854, "nz-code-box", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](855, "nz-demo-table-ellipsis", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](856, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](857, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](858, "\u8BBE\u7F6E ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](859, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](860, "nzTableLayout=\"fixed\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](861, " \u4E0E ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](862, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](863, "nzEllipsis");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](864, " \u53EF\u4EE5\u8BA9\u5355\u5143\u683C\u5185\u5BB9\u6839\u636E\u5BBD\u5EA6\u81EA\u52A8\u7701\u7565\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](865, "blockquote");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](866, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](867, "\u5217\u5934\u7F29\u7565\u6682\u4E0D\u652F\u6301\u548C\u6392\u5E8F\u7B5B\u9009\u4E00\u8D77\u4F7F\u7528\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](868, "nz-code-box", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](869, "nz-demo-table-dynamic-settings", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](870, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](871, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](872, "\u9009\u62E9\u4E0D\u540C\u914D\u7F6E\u7EC4\u5408\u67E5\u770B\u6548\u679C\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](873, "section", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](874, "h2", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](875, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](876, "API");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](877, "a", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](878, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](879, "h3", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](880, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](881, "nz-table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](882, "label", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](883, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](884, "a", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](885, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](886, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](887, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](888, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](889, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](890, "\u53C2\u6570");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](891, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](892, "\u8BF4\u660E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](893, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](894, "\u7C7B\u578B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](895, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](896, "\u9ED8\u8BA4\u503C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](897, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](898, "\u5168\u5C40\u914D\u7F6E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](899, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](900, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](901, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](902, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](903, "[nzData]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](904, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](905, "\u6570\u636E\u6570\u7EC4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](906, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](907, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](908, "any[]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](909, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](910, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](911, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](912, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](913, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](914, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](915, "[nzFrontPagination]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](916, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](917, "\u662F\u5426\u5728\u524D\u7AEF\u5BF9\u6570\u636E\u8FDB\u884C\u5206\u9875\uFF0C\u5982\u679C\u5728\u670D\u52A1\u5668\u5206\u9875\u6570\u636E\u6216\u8005\u9700\u8981\u5728\u524D\u7AEF\u663E\u793A\u5168\u90E8\u6570\u636E\u65F6\u4F20\u5165 false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](918, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](919, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](920, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](921, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](922, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](923, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](924, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](925, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](926, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](927, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](928, "[nzTotal]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](929, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](930, "\u5F53\u524D\u603B\u6570\u636E\uFF0C\u5728\u670D\u52A1\u5668\u6E32\u67D3\u65F6\u9700\u8981\u4F20\u5165");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](931, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](932, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](933, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](934, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](935, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](936, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](937, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](938, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](939, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](940, "[nzPageIndex]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](941, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](942, "\u5F53\u524D\u9875\u7801\uFF0C\u53EF\u53CC\u5411\u7ED1\u5B9A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](943, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](944, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](945, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](946, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](947, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](948, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](949, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](950, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](951, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](952, "[nzPageSize]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](953, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](954, "\u6BCF\u9875\u5C55\u793A\u591A\u5C11\u6570\u636E\uFF0C\u53EF\u53CC\u5411\u7ED1\u5B9A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](955, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](956, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](957, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](958, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](959, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](960, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](961, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](962, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](963, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](964, "[nzShowPagination]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](965, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](966, "\u662F\u5426\u663E\u793A\u5206\u9875\u5668");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](967, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](968, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](969, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](970, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](971, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](972, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](973, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](974, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](975, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](976, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](977, "[nzPaginationPosition]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](978, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](979, "\u6307\u5B9A\u5206\u9875\u663E\u793A\u7684\u4F4D\u7F6E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](980, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](981, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](982, "'top' | 'bottom' | 'both'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](983, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](984, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](985, "bottom");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](986, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](987, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](988, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](989, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](990, "[nzBordered]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](991, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](992, "\u662F\u5426\u5C55\u793A\u5916\u8FB9\u6846\u548C\u5217\u8FB9\u6846");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](993, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](994, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](995, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](996, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](997, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](998, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](999, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1000, "\u2705");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1001, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1002, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1003, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1004, "[nzOuterBordered]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1005, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1006, "\u662F\u5426\u663E\u793A\u5916\u8FB9\u6846");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1007, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1008, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1009, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1010, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1011, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1012, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1013, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1014, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1015, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1016, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1017, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1018, "[nzWidthConfig]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1019, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1020, "\u8868\u5934\u5206\u7EC4\u65F6\u6307\u5B9A\u6BCF\u5217\u5BBD\u5EA6\uFF0C\u4E0E ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1021, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1022, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1023, " \u7684 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1024, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1025, "[nzWidth]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1026, " \u4E0D\u53EF\u6DF7\u7528");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1027, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1028, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1029, "string[]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1030, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1031, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1032, "[]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1033, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1034, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1035, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1036, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1037, "[nzSize]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1038, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1039, "\u6B63\u5E38\u6216\u8FF7\u4F60\u7C7B\u578B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1040, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1041, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1042, "'middle' | 'small' | 'default'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1043, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1044, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1045, "'default'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1046, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1047, "\u2705");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1048, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1049, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1050, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1051, "[nzLoading]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1052, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1053, "\u9875\u9762\u662F\u5426\u52A0\u8F7D\u4E2D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1054, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1055, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1056, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1057, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1058, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1059, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1060, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1061, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1062, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1063, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1064, "[nzLoadingIndicator]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1065, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1066, "\u52A0\u8F7D\u6307\u793A\u7B26");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1067, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1068, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1069, "TemplateRef<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1070, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1071, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1072, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1073, "\u2705");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1074, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1075, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1076, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1077, "[nzLoadingDelay]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1078, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1079, "\u5EF6\u8FDF\u663E\u793A\u52A0\u8F7D\u6548\u679C\u7684\u65F6\u95F4\uFF08\u9632\u6B62\u95EA\u70C1\uFF09");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1080, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1081, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1082, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1083, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1084, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1085, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1086, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1087, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1088, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1089, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1090, "[nzScroll]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1091, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1092, "\u6A2A\u5411\u6216\u7EB5\u5411\u652F\u6301\u6EDA\u52A8\uFF0C\u4E5F\u53EF\u7528\u4E8E\u6307\u5B9A\u6EDA\u52A8\u533A\u57DF\u7684\u5BBD\u9AD8\u5EA6\uFF1A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1093, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1094, "{ x: \"300px\", y: \"300px\" }");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1095, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1096, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1097, "object");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1098, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1099, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1100, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1101, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1102, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1103, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1104, "[nzTitle]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1105, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1106, "\u8868\u683C\u6807\u9898");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1107, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1108, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1109, "string | TemplateRef<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1110, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1111, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1112, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1113, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1114, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1115, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1116, "[nzFooter]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1117, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1118, "\u8868\u683C\u5C3E\u90E8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1119, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1120, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1121, "string | TemplateRef<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1122, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1123, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1124, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1125, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1126, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1127, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1128, "[nzNoResult]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1129, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1130, "\u65E0\u6570\u636E\u65F6\u663E\u793A\u5185\u5BB9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1131, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1132, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1133, "string | TemplateRef<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1134, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1135, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1136, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1137, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1138, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1139, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1140, "[nzPageSizeOptions]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1141, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1142, "\u9875\u6570\u9009\u62E9\u5668\u53EF\u9009\u503C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1143, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1144, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1145, "number[]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1146, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1147, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1148, "[ 10, 20, 30, 40, 50 ]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1149, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1150, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1151, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1152, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1153, "[nzShowQuickJumper]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1154, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1155, "\u662F\u5426\u53EF\u4EE5\u5FEB\u901F\u8DF3\u8F6C\u81F3\u67D0\u9875");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1156, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1157, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1158, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1159, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1160, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1161, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1162, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1163, "\u2705");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1164, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1165, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1166, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1167, "[nzShowSizeChanger]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1168, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1169, "\u662F\u5426\u53EF\u4EE5\u6539\u53D8 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1170, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1171, "nzPageSize");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1172, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1173, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1174, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1175, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1176, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1177, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1178, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1179, "\u2705");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1180, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1181, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1182, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1183, "[nzShowTotal]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1184, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1185, "\u7528\u4E8E\u663E\u793A\u6570\u636E\u603B\u91CF\u548C\u5F53\u524D\u6570\u636E\u8303\u56F4\uFF0C\u7528\u6CD5\u53C2\u7167 Pagination \u7EC4\u4EF6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1186, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1187, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1188, "TemplateRef<{ $implicit: number, range: [ number, number ] }>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1189, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1190, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1191, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1192, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1193, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1194, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1195, "[nzItemRender]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1196, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1197, "\u7528\u4E8E\u81EA\u5B9A\u4E49\u9875\u7801\u7684\u7ED3\u6784\uFF0C\u7528\u6CD5\u53C2\u7167 Pagination \u7EC4\u4EF6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1198, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1199, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1200, "TemplateRef<{ $implicit: 'page' | 'prev' | 'next', page: number }>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1201, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1202, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1203, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1204, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1205, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1206, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1207, "[nzHideOnSinglePage]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1208, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1209, "\u53EA\u6709\u4E00\u9875\u65F6\u662F\u5426\u9690\u85CF\u5206\u9875\u5668");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1210, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1211, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1212, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1213, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1214, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1215, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1216, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1217, "\u2705");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1218, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1219, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1220, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1221, "[nzSimple]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1222, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1223, "\u5F53\u6DFB\u52A0\u8BE5\u5C5E\u6027\u65F6\uFF0C\u663E\u793A\u4E3A\u7B80\u5355\u5206\u9875");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1224, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1225, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1226, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1227, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1228, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1229, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1230, "\u2705");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1231, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1232, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1233, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1234, "[nzTemplateMode]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1235, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1236, "\u6A21\u677F\u6A21\u5F0F\uFF0C\u65E0\u9700\u5C06\u6570\u636E\u4F20\u9012\u7ED9 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1237, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1238, "nzData");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1239, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1240, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1241, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1242, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1243, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1244, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1245, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1246, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1247, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1248, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1249, "[nzVirtualItemSize]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1250, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1251, "\u865A\u62DF\u6EDA\u52A8\u65F6\u6BCF\u4E00\u5217\u7684\u9AD8\u5EA6\uFF0C\u4E0E ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1252, "a", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1253, "cdk itemSize");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1254, " \u76F8\u540C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1255, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1256, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1257, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1258, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1259, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1260, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1261, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1262, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1263, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1264, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1265, "[nzVirtualMaxBufferPx]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1266, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1267, "\u7F13\u51B2\u533A\u6700\u5927\u50CF\u7D20\u9AD8\u5EA6\uFF0C\u4E0E ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1268, "a", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1269, "cdk maxBufferPx");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1270, " \u76F8\u540C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1271, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1272, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1273, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1274, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1275, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1276, "200");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1277, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1278, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1279, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1280, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1281, "[nzVirtualMinBufferPx]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1282, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1283, "\u7F13\u51B2\u533A\u6700\u5C0F\u50CF\u7D20\u9AD8\u5EA6\uFF0C\u4F4E\u4E8E\u8BE5\u503C\u65F6\u5C06\u52A0\u8F7D\u65B0\u7ED3\u6784\uFF0C\u4E0E ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1284, "a", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1285, "cdk minBufferPx");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1286, " \u76F8\u540C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1287, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1288, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1289, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1290, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1291, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1292, "100");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1293, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1294, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1295, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1296, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1297, "[nzVirtualForTrackBy]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1298, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1299, "\u865A\u62DF\u6EDA\u52A8\u6570\u636E ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1300, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1301, "TrackByFunction");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1302, " \u51FD\u6570");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1303, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1304, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1305, "TrackByFunction<T>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1306, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1307, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1308, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1309, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1310, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1311, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1312, "(nzPageIndexChange)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1313, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1314, "\u5F53\u524D\u9875\u7801\u6539\u53D8\u65F6\u7684\u56DE\u8C03\u51FD\u6570");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1315, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1316, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1317, "EventEmitter<number>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1318, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1319, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1320, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1321, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1322, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1323, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1324, "(nzPageSizeChange)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1325, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1326, "\u9875\u6570\u6539\u53D8\u65F6\u7684\u56DE\u8C03\u51FD\u6570");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1327, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1328, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1329, "EventEmitter<number>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1330, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1331, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1332, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1333, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1334, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1335, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1336, "(nzCurrentPageDataChange)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1337, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1338, "\u5F53\u524D\u9875\u9762\u5C55\u793A\u6570\u636E\u6539\u53D8\u7684\u56DE\u8C03\u51FD\u6570");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1339, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1340, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1341, "EventEmitter<any[]>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1342, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1343, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1344, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1345, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1346, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1347, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1348, "(nzQueryParams)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1349, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1350, "\u5F53\u670D\u52A1\u7AEF\u5206\u9875\u3001\u7B5B\u9009\u3001\u6392\u5E8F\u65F6\uFF0C\u7528\u4E8E\u83B7\u5F97\u53C2\u6570\uFF0C\u5177\u4F53\u89C1\u793A\u4F8B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1351, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1352, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1353, "EventEmitter<NzTableQueryParams>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1354, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1355, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1356, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1357, "h3", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1358, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1359, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1360, "a", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1361, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1362, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1363, "\u52FE\u9009\u5C5E\u6027");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1364, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1365, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1366, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1367, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1368, "\u53C2\u6570");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1369, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1370, "\u8BF4\u660E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1371, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1372, "\u7C7B\u578B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1373, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1374, "\u9ED8\u8BA4\u503C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1375, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1376, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1377, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1378, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1379, "[nzShowCheckbox]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1380, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1381, "\u662F\u5426\u6DFB\u52A0checkbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1382, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1383, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1384, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1385, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1386, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1387, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1388, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1389, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1390, "[nzDisabled]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1391, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1392, "checkbox \u662F\u5426\u7981\u7528");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1393, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1394, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1395, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1396, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1397, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1398, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1399, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1400, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1401, "[nzIndeterminate]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1402, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1403, "checkbox indeterminate \u72B6\u6001");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1404, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1405, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1406, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1407, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1408, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1409, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1410, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1411, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1412, "[nzChecked]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1413, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1414, "checkbox \u662F\u5426\u88AB\u9009\u4E2D\uFF0C\u53EF\u53CC\u5411\u7ED1\u5B9A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1415, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1416, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1417, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1418, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1419, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1420, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1421, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1422, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1423, "(nzCheckedChange)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1424, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1425, "\u9009\u4E2D\u7684\u56DE\u8C03");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1426, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1427, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1428, "EventEmitter<boolean>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1429, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1430, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1431, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1432, "\u4E0B\u62C9\u9009\u62E9\u5C5E\u6027");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1433, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1434, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1435, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1436, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1437, "\u53C2\u6570");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1438, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1439, "\u8BF4\u660E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1440, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1441, "\u7C7B\u578B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1442, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1443, "\u9ED8\u8BA4\u503C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1444, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1445, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1446, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1447, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1448, "[nzShowRowSelection]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1449, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1450, "\u662F\u5426\u663E\u793A\u4E0B\u62C9\u9009\u62E9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1451, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1452, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1453, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1454, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1455, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1456, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1457, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1458, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1459, "[nzSelections]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1460, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1461, "\u4E0B\u62C9\u9009\u62E9\u7684\u5185\u5BB9 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1462, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1463, "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1464, " \u53CA\u56DE\u8C03\u51FD\u6570 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1465, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1466, "onSelect");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1467, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1468, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1469, "Array<{ text: string, onSelect: any }>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1470, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1471, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1472, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1473, "\u6392\u5E8F\u5C5E\u6027");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1474, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1475, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1476, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1477, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1478, "\u53C2\u6570");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1479, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1480, "\u8BF4\u660E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1481, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1482, "\u7C7B\u578B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1483, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1484, "\u9ED8\u8BA4\u503C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1485, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1486, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1487, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1488, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1489, "[nzShowSort]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1490, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1491, "\u662F\u5426\u663E\u793A\u6392\u5E8F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1492, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1493, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1494, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1495, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1496, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1497, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1498, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1499, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1500, "[nzSortFn]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1501, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1502, "\u6392\u5E8F\u51FD\u6570\uFF0C\u524D\u7AEF\u6392\u5E8F\u4F7F\u7528\u4E00\u4E2A\u51FD\u6570(\u53C2\u8003 Array.sort \u7684 compareFunction)\uFF0C\u670D\u52A1\u7AEF\u6392\u5E8F\u65F6\u4F20\u5165 true");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1503, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1504, "`((a: any, b: any, sortOrder?: string) => number)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1505, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1506, "boolean`");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1507, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1508, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1509, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1510, "[nzSortDirections]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1511, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1512, "\u652F\u6301\u7684\u6392\u5E8F\u65B9\u5F0F\uFF0C\u53D6\u503C\u4E3A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1513, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1514, "'ascend'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1515, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1516, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1517, "'descend'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1518, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1519, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1520, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1521, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1522, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1523, "Array<'ascend' | 'descend' | null>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1524, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1525, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1526, "['ascend', 'descend', null]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1527, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1528, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1529, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1530, "[nzSortOrder]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1531, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1532, "\u5F53\u524D\u6392\u5E8F\u72B6\u6001\uFF0C\u53EF\u53CC\u5411\u7ED1\u5B9A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1533, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1534, "'descend'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1535, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1536, "'ascend'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1537, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1538, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1539, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1540, "(nzSortOrderChange)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1541, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1542, "\u6392\u5E8F\u72B6\u6001\u6539\u53D8\u56DE\u8C03");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1543, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1544, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1545, "EventEmitter<'descend' | 'ascend' | null>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1546, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1547, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1548, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1549, "\u8FC7\u6EE4\u5C5E\u6027");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1550, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1551, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1552, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1553, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1554, "\u53C2\u6570");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1555, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1556, "\u8BF4\u660E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1557, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1558, "\u7C7B\u578B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1559, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1560, "\u9ED8\u8BA4\u503C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1561, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1562, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1563, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1564, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1565, "[nzShowFilter]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1566, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1567, "\u662F\u5426\u663E\u793A\u8FC7\u6EE4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1568, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1569, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1570, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1571, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1572, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1573, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1574, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1575, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1576, "[nzFilterFn]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1577, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1578, "\u524D\u7AEF\u6392\u5E8F\u65F6\uFF0C\u786E\u5B9A\u7B5B\u9009\u7684\u8FD0\u884C\u51FD\u6570\uFF0C\u670D\u52A1\u7AEF\u6392\u5E8F\u65F6\uFF0C\u4F20\u5165 true");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1579, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1580, "`((value: any, data: any) => boolean;)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1581, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1582, "boolean`");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1583, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1584, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1585, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1586, "[nzFilters]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1587, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1588, "\u8FC7\u6EE4\u5668\u5185\u5BB9, \u663E\u793A\u6570\u636E ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1589, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1590, "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1591, "\uFF0C\u56DE\u8C03\u51FD\u6570\u4F20\u51FA ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1592, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1593, "value");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1594, "\uFF0C\u8BBE\u7F6E ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1595, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1596, "byDefault");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1597, " \u4EE5\u9ED8\u8BA4\u5E94\u7528\u8FC7\u6EE4\u89C4\u5219");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1598, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1599, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1600, "Array<{ text: string; value: any; byDefault?: boolean }>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1601, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1602, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1603, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1604, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1605, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1606, "[nzFilterMultiple]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1607, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1608, "\u662F\u5426\u4E3A\u591A\u9009\u8FC7\u6EE4\u5668");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1609, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1610, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1611, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1612, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1613, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1614, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1615, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1616, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1617, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1618, "(nzFilterChange)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1619, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1620, "\u8FC7\u6EE4\u5668\u5185\u5BB9\u9009\u62E9\u7684 value \u6570\u636E\u56DE\u8C03");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1621, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1622, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1623, "EventEmitter<any[] | any>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1624, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1625, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1626, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1627, "\u6837\u5F0F\u5C5E\u6027");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1628, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1629, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1630, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1631, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1632, "\u53C2\u6570");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1633, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1634, "\u8BF4\u660E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1635, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1636, "\u7C7B\u578B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1637, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1638, "\u9ED8\u8BA4\u503C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1639, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1640, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1641, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1642, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1643, "[nzWidth]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1644, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1645, "\u6307\u5B9A\u8BE5\u5217\u5BBD\u5EA6\uFF0C\u8868\u5934\u672A\u5206\u7EC4\u65F6\u53EF\u7528");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1646, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1647, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1648, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1649, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1650, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1651, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1652, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1653, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1654, "[nzLeft]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1655, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1656, "\u5DE6\u4FA7\u8DDD\u79BB\uFF0C\u7528\u4E8E\u56FA\u5B9A\u5DE6\u4FA7\u5217\uFF0C\u5F53\u4E3A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1657, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1658, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1659, " \u65F6\u81EA\u52A8\u8BA1\u7B97\uFF0C\u4E3A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1660, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1661, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1662, " \u65F6\u505C\u6B62\u56FA\u5B9A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1663, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1664, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1665, "string | boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1666, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1667, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1668, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1669, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1670, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1671, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1672, "[nzRight]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1673, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1674, "\u53F3\u4FA7\u8DDD\u79BB\uFF0C\u7528\u4E8E\u56FA\u5B9A\u53F3\u4FA7\u5217\uFF0C\u5F53\u4E3A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1675, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1676, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1677, " \u65F6\u81EA\u52A8\u8BA1\u7B97\uFF0C\u4E3A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1678, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1679, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1680, " \u65F6\u505C\u6B62\u56FA\u5B9A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1681, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1682, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1683, "string | boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1684, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1685, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1686, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1687, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1688, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1689, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1690, "[nzAlign]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1691, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1692, "\u8BBE\u7F6E\u5217\u5185\u5BB9\u7684\u5BF9\u9F50\u65B9\u5F0F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1693, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1694, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1695, "'left' | 'right' | 'center'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1696, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1697, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1698, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1699, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1700, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1701, "[nzBreakWord]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1702, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1703, "\u662F\u5426\u6298\u884C\u663E\u793A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1704, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1705, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1706, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1707, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1708, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1709, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1710, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1711, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1712, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1713, "[nzEllipsis]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1714, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1715, "\u8D85\u8FC7\u5BBD\u5EA6\u5C06\u81EA\u52A8\u7701\u7565\uFF0C\u6682\u4E0D\u652F\u6301\u548C\u6392\u5E8F\u7B5B\u9009\u4E00\u8D77\u4F7F\u7528\u3002\u4EC5\u5F53\u8868\u683C\u5E03\u5C40\u5C06\u4E3A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1716, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1717, "nzTableLayout=\"fixed\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1718, "\u65F6\u53EF\u7528");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1719, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1720, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1721, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1722, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1723, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1724, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1725, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1726, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1727, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1728, "[colSpan]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1729, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1730, "\u6BCF\u5355\u5143\u683C\u4E2D\u6269\u5C55\u5217\u7684\u6570\u91CF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1731, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1732, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1733, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1734, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1735, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1736, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1737, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1738, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1739, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1740, "[rowSpan]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1741, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1742, "\u6BCF\u5355\u5143\u683C\u4E2D\u6269\u5C55\u884C\u7684\u6570\u91CF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1743, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1744, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1745, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1746, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1747, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1748, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1749, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1750, "\u5176\u4ED6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1751, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1752, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1753, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1754, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1755, "\u53C2\u6570");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1756, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1757, "\u8BF4\u660E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1758, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1759, "\u7C7B\u578B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1760, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1761, "\u9ED8\u8BA4\u503C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1762, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1763, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1764, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1765, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1766, "[nzColumnKey]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1767, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1768, "\u5F53\u524D\u5217\u7684key\uFF0C\u7528\u4E8E\u670D\u52A1\u7AEF\u7B5B\u9009\u548C\u6392\u5E8F\u4F7F\u7528");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1769, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1770, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1771, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1772, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1773, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1774, "h3", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1775, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1776, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1777, "a", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1778, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1779, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1780, "\u52FE\u9009\u5C5E\u6027");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1781, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1782, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1783, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1784, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1785, "\u53C2\u6570");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1786, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1787, "\u8BF4\u660E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1788, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1789, "\u7C7B\u578B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1790, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1791, "\u9ED8\u8BA4\u503C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1792, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1793, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1794, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1795, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1796, "[nzShowCheckbox]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1797, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1798, "\u662F\u5426\u6DFB\u52A0checkbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1799, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1800, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1801, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1802, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1803, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1804, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1805, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1806, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1807, "[nzDisabled]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1808, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1809, "checkbox \u662F\u5426\u7981\u7528");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1810, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1811, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1812, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1813, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1814, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1815, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1816, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1817, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1818, "[nzIndeterminate]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1819, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1820, "checkbox indeterminate \u72B6\u6001");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1821, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1822, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1823, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1824, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1825, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1826, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1827, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1828, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1829, "[nzChecked]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1830, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1831, "checkbox \u662F\u5426\u88AB\u9009\u4E2D\uFF0C\u53EF\u53CC\u5411\u7ED1\u5B9A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1832, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1833, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1834, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1835, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1836, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1837, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1838, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1839, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1840, "(nzCheckedChange)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1841, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1842, "\u9009\u4E2D\u7684\u56DE\u8C03");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1843, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1844, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1845, "EventEmitter<boolean>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1846, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1847, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1848, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1849, "\u5C55\u5F00\u5C5E\u6027");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1850, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1851, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1852, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1853, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1854, "\u53C2\u6570");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1855, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1856, "\u8BF4\u660E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1857, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1858, "\u7C7B\u578B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1859, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1860, "\u9ED8\u8BA4\u503C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1861, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1862, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1863, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1864, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1865, "[nzShowExpand]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1866, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1867, "\u662F\u5426\u663E\u793A\u5C55\u5F00\u6309\u94AE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1868, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1869, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1870, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1871, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1872, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1873, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1874, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1875, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1876, "[nzExpand]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1877, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1878, "\u5F53\u524D\u5C55\u5F00\u6309\u94AE\u72B6\u6001\uFF0C\u53EF\u53CC\u5411\u7ED1\u5B9A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1879, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1880, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1881, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1882, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1883, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1884, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1885, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1886, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1887, "(nzExpandChange)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1888, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1889, "\u5F53\u524D\u5C55\u5F00\u6309\u94AE\u72B6\u6001\u6539\u53D8\u56DE\u8C03\u51FD\u6570");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1890, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1891, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1892, "EventEmitter<boolean>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1893, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1894, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1895, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1896, "\u6837\u5F0F\u5C5E\u6027");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1897, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1898, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1899, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1900, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1901, "\u53C2\u6570");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1902, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1903, "\u8BF4\u660E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1904, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1905, "\u7C7B\u578B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1906, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1907, "\u9ED8\u8BA4\u503C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1908, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1909, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1910, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1911, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1912, "[nzLeft]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1913, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1914, "\u5DE6\u4FA7\u8DDD\u79BB\uFF0C\u7528\u4E8E\u56FA\u5B9A\u5DE6\u4FA7\u5217\uFF0C\u5F53\u4E3A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1915, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1916, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1917, " \u65F6\u81EA\u52A8\u8BA1\u7B97\uFF0C\u4E3A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1918, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1919, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1920, " \u65F6\u505C\u6B62\u56FA\u5B9A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1921, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1922, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1923, "string | boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1924, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1925, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1926, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1927, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1928, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1929, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1930, "[nzRight]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1931, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1932, "\u53F3\u4FA7\u8DDD\u79BB\uFF0C\u7528\u4E8E\u56FA\u5B9A\u53F3\u4FA7\u5217\uFF0C\u5F53\u4E3A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1933, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1934, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1935, " \u65F6\u81EA\u52A8\u8BA1\u7B97\uFF0C\u4E3A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1936, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1937, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1938, " \u65F6\u505C\u6B62\u56FA\u5B9A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1939, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1940, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1941, "string | boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1942, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1943, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1944, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1945, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1946, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1947, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1948, "[nzAlign]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1949, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1950, "\u8BBE\u7F6E\u5217\u5185\u5BB9\u7684\u5BF9\u9F50\u65B9\u5F0F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1951, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1952, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1953, "'left' | 'right' | 'center'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1954, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1955, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1956, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1957, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1958, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1959, "[nzBreakWord]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1960, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1961, "\u662F\u5426\u6298\u884C\u663E\u793A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1962, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1963, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1964, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1965, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1966, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1967, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1968, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1969, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1970, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1971, "[nzEllipsis]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1972, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1973, "\u8D85\u8FC7\u5BBD\u5EA6\u5C06\u81EA\u52A8\u7701\u7565\uFF0C\u6682\u4E0D\u652F\u6301\u548C\u6392\u5E8F\u7B5B\u9009\u4E00\u8D77\u4F7F\u7528\u3002\u4EC5\u5F53\u8868\u683C\u5E03\u5C40\u5C06\u4E3A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1974, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1975, "nzTableLayout=\"fixed\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1976, "\u65F6\u53EF\u7528");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1977, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1978, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1979, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1980, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1981, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1982, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1983, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1984, "\u5176\u4ED6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1985, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1986, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1987, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1988, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1989, "\u53C2\u6570");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1990, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1991, "\u8BF4\u660E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1992, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1993, "\u7C7B\u578B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1994, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1995, "\u9ED8\u8BA4\u503C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1996, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1997, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1998, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1999, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2000, "[nzIndentSize]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2001, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2002, "\u5C55\u793A\u6811\u5F62\u6570\u636E\u65F6\uFF0C\u6BCF\u5C42\u7F29\u8FDB\u7684\u5BBD\u5EA6\uFF0C\u4EE5 px \u4E3A\u5355\u4F4D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2003, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2004, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2005, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2006, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2007, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2008, "h3", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2009, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2010, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2011, "a", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2012, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2013, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2014, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2015, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2016, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2017, "\u53C2\u6570");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2018, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2019, "\u8BF4\u660E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2020, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2021, "\u7C7B\u578B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2022, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2023, "\u9ED8\u8BA4\u503C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2024, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2025, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2026, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2027, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2028, "[nzExpand]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2029, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2030, "\u5F53\u524D\u5217\u662F\u5426\u5C55\u5F00\uFF0C\u4E0E ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2031, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2032, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2033, " \u4E0A\u7684 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2034, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2035, "nzExpand");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2036, " \u5C5E\u6027\u914D\u5408\u4F7F\u7528");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2037, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2038, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2039, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2040, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2041, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2042, "h3", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2043, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2044, "nz-filter-trigger");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2045, "label", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2046, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2047, "a", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2048, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2049, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2050, "\u7528\u4E8E\u81EA\u5B9A\u4E49\u7B5B\u9009\u529F\u80FD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2051, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2052, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2053, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2054, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2055, "\u53C2\u6570");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2056, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2057, "\u8BF4\u660E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2058, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2059, "\u7C7B\u578B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2060, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2061, "\u9ED8\u8BA4\u503C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2062, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2063, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2064, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2065, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2066, "[nzDropdownMenu]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2067, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2068, "Dropdown \u4E0B\u62C9\u83DC\u5355\u7EC4\u4EF6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2069, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2070, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2071, "NzDropdownMenuComponent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2072, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2073, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2074, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2075, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2076, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2077, "[nzVisible]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2078, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2079, "\u83DC\u5355\u662F\u5426\u663E\u793A\uFF0C\u53EF\u53CC\u5411\u7ED1\u5B9A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2080, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2081, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2082, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2083, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2084, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2085, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2086, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2087, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2088, "[nzActive]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2089, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2090, "\u662F\u5426\u6FC0\u6D3B\u9009\u4E2D\u56FE\u6807\u6548\u679C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2091, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2092, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2093, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2094, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2095, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2096, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2097, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2098, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2099, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2100, "[nzHasBackdrop]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2101, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2102, "\u662F\u5426\u9644\u5E26\u80CC\u666F\u677F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2103, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2104, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2105, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2106, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2107, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2108, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2109, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2110, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2111, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2112, "(nzVisibleChange)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2113, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2114, "\u83DC\u5355\u663E\u793A\u72B6\u6001\u6539\u53D8\u65F6\u8C03\u7528\uFF0C\u53C2\u6570\u4E3A nzVisible");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2115, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2116, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2117, "EventEmitter<boolean>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2118, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2119, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2120, "h3", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2121, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2122, "[nz-virtual-scroll]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2123, "label", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2124, "directive");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2125, "a", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2126, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2127, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2128, "\u865A\u62DF\u6EDA\u52A8\u65F6\u914D\u5408 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2129, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2130, "ng-template");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2131, " \u4F7F\u7528, \u683C\u5F0F\u4E3A\uFF1A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2132, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2133, "TemplateRef<{ $implicit: any, index: number }>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2134, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2135, "h2", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2136, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2137, "\u6CE8\u610F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2138, "a", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2139, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2140, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2141, "\u4E3A\u4E86\u83B7\u5F97\u66F4\u597D\u7684\u6027\u80FD\uFF0CNG-ZORRO \u6240\u6709\u7EC4\u4EF6\u90FD\u8FD0\u884C\u5728 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2142, "a", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2143, "OnPush");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2144, " \u6A21\u5F0F\u4E0B\uFF0C\u8FD9\u610F\u5473\u7740\u5BF9 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2145, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2146, "@Input()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2147, " \u6570\u636E\u7684 mutate \u5C06\u4E0D\u4F1A\u751F\u6548\uFF0C\u8BF7\u4F7F\u7528 immutable \u65B9\u5F0F\u64CD\u4F5C\u6570\u7EC4\u6216\u8005\u5BF9\u8C61\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2148, "pre", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2149, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2150, "span", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2151, "// \u589E\u52A0\u6570\u636E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2152, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2153, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2154, "this");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2155, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2156, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2157, "dataSet ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2158, "span", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2159, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2160, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2161, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2162, "[");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2163, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2164, "span", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2165, "...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2166, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2167, "this");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2168, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2169, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2170, "dataSet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2171, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2172, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2173, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2174, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2175, "{");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2176, "\n  key    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2177, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2178, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2179, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2180, "span", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2181, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2182, "`");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2183, "span", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2184, "span", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2185, "${");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2186, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2187, "this");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2188, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2189, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2190, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2191, "span", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2192, "}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2193, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2194, "`");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2195, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2196, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2197, "\n  name   ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2198, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2199, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2200, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2201, "span", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2202, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2203, "`Edward King ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2204, "span", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2205, "span", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2206, "${");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2207, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2208, "this");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2209, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2210, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2211, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2212, "span", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2213, "}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2214, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2215, "`");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2216, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2217, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2218, "\n  age    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2219, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2220, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2221, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2222, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2223, "'32'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2224, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2225, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2226, "\n  address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2227, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2228, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2229, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2230, "span", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2231, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2232, "`London, Park Lane no. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2233, "span", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2234, "span", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2235, "${");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2236, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2237, "this");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2238, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2239, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2240, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2241, "span", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2242, "}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2243, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2244, "`");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2245, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2246, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2247, "}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2248, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2249, "]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2250, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2251, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2252, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2253, "span", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2254, "// \u5220\u9664\u6570\u636E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2255, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2256, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2257, "this");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2258, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2259, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2260, "dataSet ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2261, "span", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2262, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2263, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2264, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2265, "this");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2266, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2267, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2268, "dataSet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2269, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2270, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2271, "span", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2272, "filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2273, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2274, "(");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2275, "d ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2276, "span", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2277, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2278, "span", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2279, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2280, " d");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2281, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2282, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2283, "key ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2284, "span", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2285, "!==");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2286, " i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2287, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2288, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2289, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2290, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2291, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2292, "\u5F00\u53D1\u8005\u4E5F\u53EF\u4EE5\u4F7F\u7528 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2293, "a", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2294, "immer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2295, " \u83B7\u5F97\u66F4\u597D\u7684\u64CD\u4F5C\u4F53\u9A8C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzOffsetTop", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzAffix", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](425);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzGutter", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-table-demo-basic")("nzLink", "components-table-demo-basic")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/table/demo/basic.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-table-demo-row-selection-and-operation")("nzLink", "components-table-demo-row-selection-and-operation")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/table/demo/row-selection-and-operation.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-table-demo-row-selection-custom")("nzLink", "components-table-demo-row-selection-custom")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/table/demo/row-selection-custom.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-table-demo-sort-filter")("nzLink", "components-table-demo-sort-filter")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/table/demo/sort-filter.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-table-demo-multiple-sorter")("nzLink", "components-table-demo-multiple-sorter")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/table/demo/multiple-sorter.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-table-demo-reset-filter")("nzLink", "components-table-demo-reset-filter")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/table/demo/reset-filter.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-table-demo-custom-filter-panel")("nzLink", "components-table-demo-custom-filter-panel")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/table/demo/custom-filter-panel.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-table-demo-ajax")("nzLink", "components-table-demo-ajax")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/table/demo/ajax.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](145);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-table-demo-size")("nzLink", "components-table-demo-size")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/table/demo/size.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-table-demo-bordered")("nzLink", "components-table-demo-bordered")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/table/demo/bordered.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-table-demo-expand")("nzLink", "components-table-demo-expand")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/table/demo/expand.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-table-demo-colspan-rowspan")("nzLink", "components-table-demo-colspan-rowspan")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/table/demo/colspan-rowspan.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-table-demo-expand-children")("nzLink", "components-table-demo-expand-children")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/table/demo/expand-children.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-table-demo-fixed-header")("nzLink", "components-table-demo-fixed-header")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/table/demo/fixed-header.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-table-demo-fixed-columns")("nzLink", "components-table-demo-fixed-columns")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/table/demo/fixed-columns.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-table-demo-fixed-columns-header")("nzLink", "components-table-demo-fixed-columns-header")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/table/demo/fixed-columns-header.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-table-demo-grouping-columns")("nzLink", "components-table-demo-grouping-columns")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/table/demo/grouping-columns.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-table-demo-edit-cell")("nzLink", "components-table-demo-edit-cell")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/table/demo/edit-cell.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-table-demo-edit-row")("nzLink", "components-table-demo-edit-row")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/table/demo/edit-row.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-table-demo-nested-table")("nzLink", "components-table-demo-nested-table")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/table/demo/nested-table.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-table-demo-virtual")("nzLink", "components-table-demo-virtual")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/table/demo/virtual.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-table-demo-drag-sorting")("nzLink", "components-table-demo-drag-sorting")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/table/demo/drag-sorting.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-table-demo-template")("nzLink", "components-table-demo-template")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/table/demo/template.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-table-demo-break-word")("nzLink", "components-table-demo-break-word")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/table/demo/break-word.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-table-demo-ellipsis")("nzLink", "components-table-demo-ellipsis")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/table/demo/ellipsis.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-table-demo-dynamic-settings")("nzLink", "components-table-demo-dynamic-settings")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/table/demo/dynamic-settings.md");
    } }, directives: [ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_2__["NzAffixComponent"], ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_3__["NzAnchorComponent"], ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_3__["NzAnchorLinkComponent"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__["NzIconDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__["ɵNzTransitionPatchDirective"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_6__["NzTooltipDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__["NzRowDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__["NzColDirective"], _share_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_1__["NzCodeBoxComponent"], _basic__WEBPACK_IMPORTED_MODULE_8__["NzDemoTableBasicComponent"], _row_selection_and_operation__WEBPACK_IMPORTED_MODULE_9__["NzDemoTableRowSelectionAndOperationComponent"], _row_selection_custom__WEBPACK_IMPORTED_MODULE_10__["NzDemoTableRowSelectionCustomComponent"], _sort_filter__WEBPACK_IMPORTED_MODULE_11__["NzDemoTableSortFilterComponent"], _multiple_sorter__WEBPACK_IMPORTED_MODULE_12__["NzDemoTableMultipleSorterComponent"], _reset_filter__WEBPACK_IMPORTED_MODULE_13__["NzDemoTableResetFilterComponent"], _custom_filter_panel__WEBPACK_IMPORTED_MODULE_14__["NzDemoTableCustomFilterPanelComponent"], _ajax__WEBPACK_IMPORTED_MODULE_15__["NzDemoTableAjaxComponent"], _size__WEBPACK_IMPORTED_MODULE_16__["NzDemoTableSizeComponent"], _bordered__WEBPACK_IMPORTED_MODULE_17__["NzDemoTableBorderedComponent"], _expand__WEBPACK_IMPORTED_MODULE_18__["NzDemoTableExpandComponent"], _colspan_rowspan__WEBPACK_IMPORTED_MODULE_19__["NzDemoTableColspanRowspanComponent"], _expand_children__WEBPACK_IMPORTED_MODULE_20__["NzDemoTableExpandChildrenComponent"], _fixed_header__WEBPACK_IMPORTED_MODULE_21__["NzDemoTableFixedHeaderComponent"], _fixed_columns__WEBPACK_IMPORTED_MODULE_22__["NzDemoTableFixedColumnsComponent"], _fixed_columns_header__WEBPACK_IMPORTED_MODULE_23__["NzDemoTableFixedColumnsHeaderComponent"], _grouping_columns__WEBPACK_IMPORTED_MODULE_24__["NzDemoTableGroupingColumnsComponent"], _edit_cell__WEBPACK_IMPORTED_MODULE_25__["NzDemoTableEditCellComponent"], _edit_row__WEBPACK_IMPORTED_MODULE_26__["NzDemoTableEditRowComponent"], _nested_table__WEBPACK_IMPORTED_MODULE_27__["NzDemoTableNestedTableComponent"], _virtual__WEBPACK_IMPORTED_MODULE_28__["NzDemoTableVirtualComponent"], _drag_sorting__WEBPACK_IMPORTED_MODULE_29__["NzDemoTableDragSortingComponent"], _template__WEBPACK_IMPORTED_MODULE_30__["NzDemoTableTemplateComponent"], _break_word__WEBPACK_IMPORTED_MODULE_31__["NzDemoTableBreakWordComponent"], _ellipsis__WEBPACK_IMPORTED_MODULE_32__["NzDemoTableEllipsisComponent"], _dynamic_settings__WEBPACK_IMPORTED_MODULE_33__["NzDemoTableDynamicSettingsComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_34__["NzTheadComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_34__["NzTrDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_34__["NzTableCellDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_34__["NzThMeasureDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_34__["NzTbodyComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoTableZhComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-demo-table',
                preserveWhitespaces: false,
                templateUrl: './zh.html'
            }]
    }], null, { codeBoxes: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"],
            args: [_share_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_1__["NzCodeBoxComponent"]]
        }] }); })();


/***/ }),

/***/ "EYm2":
/*!********************************************!*\
  !*** ./site/doc/app/table/nested-table.ts ***!
  \********************************************/
/*! exports provided: NzDemoTableNestedTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoTableNestedTableComponent", function() { return NzDemoTableNestedTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/table */ "mK+R");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/badge */ "lysd");
/* harmony import */ var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/dropdown */ "43SU");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/icon */ "MOHP");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "uLhK");
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/menu */ "Z9Oo");
/* harmony import */ var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/divider */ "658v");










function NzDemoTableNestedTableComponent_ng_template_20_tr_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "nz-badge", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Pause ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "nz-dropdown-menu", null, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ul", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Action 1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Action 2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "nz-divider", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Stop");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "nz-divider", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "More");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r5 = ctx.$implicit;
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r5.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzStatus", "success")("nzText", "Finished");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r5.upgradeNum);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzDropdownMenu", _r6);
} }
function NzDemoTableNestedTableComponent_ng_template_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzExpandChange", function NzDemoTableNestedTableComponent_ng_template_20_Template_td_nzExpandChange_1_listener($event) { const data_r2 = ctx.$implicit; return data_r2.expand = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Publish");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tr", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "nz-table", 5, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Upgrade Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, NzDemoTableNestedTableComponent_ng_template_20_tr_33_Template, 29, 6, "tr", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r2 = ctx.$implicit;
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzExpand", data_r2.expand);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.platform);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.version);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.upgradeNum);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.creator);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.createdAt);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzExpand", data_r2.expand);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzData", ctx_r1.listOfChildrenData)("nzShowPagination", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _r3.data);
} }
class NzDemoTableNestedTableComponent {
    constructor() {
        this.listOfParentData = [];
        this.listOfChildrenData = [];
    }
    ngOnInit() {
        for (let i = 0; i < 3; ++i) {
            this.listOfParentData.push({
                key: i,
                name: 'Screem',
                platform: 'iOS',
                version: '10.3.4.5654',
                upgradeNum: 500,
                creator: 'Jack',
                createdAt: '2014-12-24 23:12:00',
                expand: false
            });
        }
        for (let i = 0; i < 3; ++i) {
            this.listOfChildrenData.push({
                key: i,
                date: '2014-12-24 23:12:00',
                name: 'This is production name',
                upgradeNum: 'Upgraded: 56'
            });
        }
    }
}
NzDemoTableNestedTableComponent.ɵfac = function NzDemoTableNestedTableComponent_Factory(t) { return new (t || NzDemoTableNestedTableComponent)(); };
NzDemoTableNestedTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoTableNestedTableComponent, selectors: [["nz-demo-table-nested-table"]], decls: 21, vars: 3, consts: [[3, "nzData", "nzPageSize"], ["nestedTable", ""], ["ngFor", "", 3, "ngForOf"], [3, "nzExpand", "nzExpandChange"], [3, "nzExpand"], ["nzSize", "middle", 3, "nzData", "nzShowPagination"], ["innerTable", ""], [4, "ngFor", "ngForOf"], [3, "nzStatus", "nzText"], [1, "table-operation"], ["nz-dropdown", "", 1, "operation", 3, "nzDropdownMenu"], ["nz-icon", "", "nzType", "down"], ["menu", "nzDropdownMenu"], ["nz-menu", ""], ["nz-menu-item", ""], ["nzType", "vertical"], [1, "operation"]], template: function NzDemoTableNestedTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-table", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Platform");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Version");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Upgraded");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Creator");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, NzDemoTableNestedTableComponent_ng_template_20_Template, 34, 11, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzData", ctx.listOfParentData)("nzPageSize", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _r0.data);
    } }, directives: [ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzTableComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzTheadComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzTrDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzTableCellDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzThMeasureDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzTbodyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzTdAddOnComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzTrExpandDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzTableFixedRowComponent"], ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_3__["NzBadgeComponent"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_4__["NzDropDownADirective"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_4__["NzDropDownDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__["NzIconDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_6__["ɵNzTransitionPatchDirective"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_4__["NzDropdownMenuComponent"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_7__["NzMenuDirective"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_7__["NzMenuItemDirective"], ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_8__["NzDividerComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoTableNestedTableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-demo-table-nested-table',
                template: `
    <nz-table #nestedTable [nzData]="listOfParentData" [nzPageSize]="10">
      <thead>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Platform</th>
          <th>Version</th>
          <th>Upgraded</th>
          <th>Creator</th>
          <th>Date</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <ng-template ngFor let-data [ngForOf]="nestedTable.data">
          <tr>
            <td [(nzExpand)]="data.expand"></td>
            <td>{{ data.name }}</td>
            <td>{{ data.platform }}</td>
            <td>{{ data.version }}</td>
            <td>{{ data.upgradeNum }}</td>
            <td>{{ data.creator }}</td>
            <td>{{ data.createdAt }}</td>
            <td>
              <a>Publish</a>
            </td>
          </tr>
          <tr [nzExpand]="data.expand">
            <nz-table #innerTable [nzData]="listOfChildrenData" nzSize="middle" [nzShowPagination]="false">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Name</th>
                  <th>Status</th>
                  <th>Upgrade Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr *ngFor="let data of innerTable.data">
                  <td>{{ data.date }}</td>
                  <td>{{ data.name }}</td>
                  <td>
                    <nz-badge [nzStatus]="'success'" [nzText]="'Finished'"></nz-badge>
                  </td>
                  <td>{{ data.upgradeNum }}</td>
                  <td>
                    <span class="table-operation">
                      <a nz-dropdown class="operation" [nzDropdownMenu]="menu"> Pause <i nz-icon nzType="down"></i> </a>
                      <nz-dropdown-menu #menu="nzDropdownMenu">
                        <ul nz-menu>
                          <li nz-menu-item>
                            <a>Action 1</a>
                          </li>
                          <li nz-menu-item>
                            <a>Action 2</a>
                          </li>
                        </ul>
                      </nz-dropdown-menu>
                      <nz-divider nzType="vertical"></nz-divider>
                      <a class="operation">Stop</a>
                      <nz-divider nzType="vertical"></nz-divider>
                      <a>More</a>
                    </span>
                  </td>
                </tr>
              </tbody>
            </nz-table>
          </tr>
        </ng-template>
      </tbody>
    </nz-table>
  `
            }]
    }], null, null); })();


/***/ }),

/***/ "G10C":
/*!***********************************************!*\
  !*** ./site/doc/app/table/multiple-sorter.ts ***!
  \***********************************************/
/*! exports provided: NzDemoTableMultipleSorterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoTableMultipleSorterComponent", function() { return NzDemoTableMultipleSorterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/table */ "mK+R");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function NzDemoTableMultipleSorterComponent_th_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const column_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSortFn", column_r3.compare)("nzSortPriority", column_r3.priority);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](column_r3.title);
} }
function NzDemoTableMultipleSorterComponent_tr_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r4.chinese);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r4.math);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r4.english);
} }
class NzDemoTableMultipleSorterComponent {
    constructor() {
        this.listOfColumn = [
            {
                title: 'Name',
                compare: null,
                priority: false
            },
            {
                title: 'Chinese Score',
                compare: (a, b) => a.chinese - b.chinese,
                priority: 3
            },
            {
                title: 'Math Score',
                compare: (a, b) => a.math - b.math,
                priority: 2
            },
            {
                title: 'English Score',
                compare: (a, b) => a.english - b.english,
                priority: 1
            }
        ];
        this.listOfData = [
            {
                name: 'John Brown',
                chinese: 98,
                math: 60,
                english: 70
            },
            {
                name: 'Jim Green',
                chinese: 98,
                math: 66,
                english: 89
            },
            {
                name: 'Joe Black',
                chinese: 98,
                math: 90,
                english: 70
            },
            {
                name: 'Jim Red',
                chinese: 88,
                math: 99,
                english: 89
            }
        ];
    }
}
NzDemoTableMultipleSorterComponent.ɵfac = function NzDemoTableMultipleSorterComponent_Factory(t) { return new (t || NzDemoTableMultipleSorterComponent)(); };
NzDemoTableMultipleSorterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoTableMultipleSorterComponent, selectors: [["nz-demo-table-multiple-sorter"]], decls: 7, vars: 3, consts: [["nzTableLayout", "fixed", 3, "nzData"], ["sortTable", ""], [3, "nzSortFn", "nzSortPriority", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], [3, "nzSortFn", "nzSortPriority"]], template: function NzDemoTableMultipleSorterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-table", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NzDemoTableMultipleSorterComponent_th_4_Template, 2, 3, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NzDemoTableMultipleSorterComponent_tr_6_Template, 9, 4, "tr", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzData", ctx.listOfData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listOfColumn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _r0.data);
    } }, directives: [ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzTableComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzTheadComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzTrDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzTbodyComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzTableCellDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzThMeasureDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzThAddOnComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoTableMultipleSorterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-demo-table-multiple-sorter',
                template: `
    <nz-table #sortTable [nzData]="listOfData" nzTableLayout="fixed">
      <thead>
        <tr>
          <th *ngFor="let column of listOfColumn" [nzSortFn]="column.compare" [nzSortPriority]="column.priority">{{ column.title }}</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let data of sortTable.data">
          <td>{{ data.name }}</td>
          <td>{{ data.chinese }}</td>
          <td>{{ data.math }}</td>
          <td>{{ data.english }}</td>
        </tr>
      </tbody>
    </nz-table>
  `
            }]
    }], null, null); })();


/***/ }),

/***/ "HhJM":
/*!********************************************!*\
  !*** ./site/doc/app/table/fixed-header.ts ***!
  \********************************************/
/*! exports provided: NzDemoTableFixedHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoTableFixedHeaderComponent", function() { return NzDemoTableFixedHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/table */ "mK+R");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function NzDemoTableFixedHeaderComponent_tr_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.age);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.address);
} }
const _c0 = function () { return { y: "240px" }; };
class NzDemoTableFixedHeaderComponent {
    constructor() {
        this.listOfData = [];
    }
    ngOnInit() {
        const data = [];
        for (let i = 0; i < 100; i++) {
            data.push({
                name: `Edward King ${i}`,
                age: 32,
                address: `London, Park Lane no. ${i}`
            });
        }
        this.listOfData = data;
    }
}
NzDemoTableFixedHeaderComponent.ɵfac = function NzDemoTableFixedHeaderComponent_Factory(t) { return new (t || NzDemoTableFixedHeaderComponent)(); };
NzDemoTableFixedHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoTableFixedHeaderComponent, selectors: [["nz-demo-table-fixed-header"]], decls: 12, vars: 5, consts: [[3, "nzData", "nzPageSize", "nzScroll"], ["headerTable", ""], ["nzWidth", "100px"], [4, "ngFor", "ngForOf"]], template: function NzDemoTableFixedHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-table", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Age");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, NzDemoTableFixedHeaderComponent_tr_11_Template, 7, 3, "tr", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzData", ctx.listOfData)("nzPageSize", 50)("nzScroll", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _r0.data);
    } }, directives: [ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzTableComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzTheadComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzTrDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzTableCellDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzThMeasureDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzTbodyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoTableFixedHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-demo-table-fixed-header',
                template: `
    <nz-table #headerTable [nzData]="listOfData" [nzPageSize]="50" [nzScroll]="{ y: '240px' }">
      <thead>
        <tr>
          <th>Name</th>
          <th nzWidth="100px">Age</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let data of headerTable.data">
          <td>{{ data.name }}</td>
          <td>{{ data.age }}</td>
          <td>{{ data.address }}</td>
        </tr>
      </tbody>
    </nz-table>
  `
            }]
    }], null, null); })();


/***/ }),

/***/ "JINn":
/*!***************************************!*\
  !*** ./site/doc/app/table/virtual.ts ***!
  \***************************************/
/*! exports provided: NzDemoTableVirtualComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoTableVirtualComponent", function() { return NzDemoTableVirtualComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/table */ "mK+R");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/button */ "TZWX");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "vdzw");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "uLhK");









const _c0 = ["virtualTable"];
function NzDemoTableVirtualComponent_ng_template_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "action");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.age);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.index);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.address);
} }
const _c1 = function () { return { x: "1200px", y: "240px" }; };
class NzDemoTableVirtualComponent {
    constructor() {
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.listOfData = [];
    }
    scrollToIndex(index) {
        var _a, _b;
        (_b = (_a = this.nzTableComponent) === null || _a === void 0 ? void 0 : _a.cdkVirtualScrollViewport) === null || _b === void 0 ? void 0 : _b.scrollToIndex(index);
    }
    trackByIndex(_, data) {
        return data.index;
    }
    ngOnInit() {
        const data = [];
        for (let i = 0; i < 20000; i++) {
            data.push({
                index: i,
                name: `Edward`,
                age: i,
                address: `London`
            });
        }
        this.listOfData = data;
    }
    ngAfterViewInit() {
        var _a, _b;
        (_b = (_a = this.nzTableComponent) === null || _a === void 0 ? void 0 : _a.cdkVirtualScrollViewport) === null || _b === void 0 ? void 0 : _b.scrolledIndexChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$)).subscribe((data) => {
            console.log('scroll index to', data);
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NzDemoTableVirtualComponent.ɵfac = function NzDemoTableVirtualComponent_Factory(t) { return new (t || NzDemoTableVirtualComponent)(); };
NzDemoTableVirtualComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoTableVirtualComponent, selectors: [["nz-demo-table-virtual"]], viewQuery: function NzDemoTableVirtualComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.nzTableComponent = _t.first);
    } }, decls: 34, vars: 7, consts: [["nz-button", "", 3, "click"], [3, "nzVirtualItemSize", "nzData", "nzVirtualForTrackBy", "nzFrontPagination", "nzShowPagination", "nzScroll"], ["virtualTable", ""], ["nzLeft", ""], ["nzRight", ""], ["nz-virtual-scroll", ""]], template: function NzDemoTableVirtualComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoTableVirtualComponent_Template_button_click_0_listener() { return ctx.scrollToIndex(200); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Scroll To Index 200");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nz-table", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Full Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Age");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Index");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Column 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Column 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Column 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Column 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Column 5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Column 6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Column 7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Column 8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, NzDemoTableVirtualComponent_ng_template_33_Template, 26, 11, "ng-template", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzVirtualItemSize", 54)("nzData", ctx.listOfData)("nzVirtualForTrackBy", ctx.trackByIndex)("nzFrontPagination", false)("nzShowPagination", false)("nzScroll", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c1));
    } }, directives: [ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_5__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_6__["ɵNzTransitionPatchDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzTableComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzTheadComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzTrDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzTableCellDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzThMeasureDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzCellFixedDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzTbodyComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzTableVirtualScrollDirective"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoTableVirtualComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-demo-table-virtual',
                template: `
    <button nz-button (click)="scrollToIndex(200)">Scroll To Index 200</button>
    <br />
    <br />
    <nz-table
      #virtualTable
      [nzVirtualItemSize]="54"
      [nzData]="listOfData"
      [nzVirtualForTrackBy]="trackByIndex"
      [nzFrontPagination]="false"
      [nzShowPagination]="false"
      [nzScroll]="{ x: '1200px', y: '240px' }"
    >
      <thead>
        <tr>
          <th nzLeft>Full Name</th>
          <th nzLeft>Age</th>
          <th>Index</th>
          <th>Column 1</th>
          <th>Column 2</th>
          <th>Column 3</th>
          <th>Column 4</th>
          <th>Column 5</th>
          <th>Column 6</th>
          <th>Column 7</th>
          <th>Column 8</th>
          <th nzRight>Action</th>
        </tr>
      </thead>
      <tbody>
        <ng-template nz-virtual-scroll let-data let-index="index">
          <tr>
            <td nzLeft>{{ data.name }}</td>
            <td nzLeft>{{ data.age }}</td>
            <td>{{ data.index }}</td>
            <td>{{ data.address }}</td>
            <td>{{ data.address }}</td>
            <td>{{ data.address }}</td>
            <td>{{ data.address }}</td>
            <td>{{ data.address }}</td>
            <td>{{ data.address }}</td>
            <td>{{ data.address }}</td>
            <td>{{ data.address }}</td>
            <td nzRight>
              <a>action</a>
            </td>
          </tr>
        </ng-template>
      </tbody>
    </nz-table>
  `
            }]
    }], null, { nzTableComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['virtualTable', { static: false }]
        }] }); })();


/***/ }),

/***/ "LkeO":
/*!************************************************!*\
  !*** ./site/doc/app/table/grouping-columns.ts ***!
  \************************************************/
/*! exports provided: NzDemoTableGroupingColumnsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoTableGroupingColumnsComponent", function() { return NzDemoTableGroupingColumnsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/table */ "mK+R");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function NzDemoTableGroupingColumnsComponent_tr_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.age);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.street);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.building);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.number);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.companyAddress);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.companyName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.gender);
} }
const _c0 = function () { return { x: "1200px", y: "240px" }; };
class NzDemoTableGroupingColumnsComponent {
    constructor() {
        this.listOfData = [];
        this.sortAgeFn = (a, b) => a.age - b.age;
        this.nameFilterFn = (list, item) => list.some(name => item.name.indexOf(name) !== -1);
        this.filterName = [
            { text: 'Joe', value: 'Joe' },
            { text: 'John', value: 'John' }
        ];
    }
    ngOnInit() {
        const data = [];
        for (let i = 0; i < 100; i++) {
            data.push({
                name: 'John Brown',
                age: i + 1,
                street: 'Lake Park',
                building: 'C',
                number: 2035,
                companyAddress: 'Lake Street 42',
                companyName: 'SoftLake Co',
                gender: 'M'
            });
        }
        this.listOfData = data;
    }
}
NzDemoTableGroupingColumnsComponent.ɵfac = function NzDemoTableGroupingColumnsComponent_Factory(t) { return new (t || NzDemoTableGroupingColumnsComponent)(); };
NzDemoTableGroupingColumnsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoTableGroupingColumnsComponent, selectors: [["nz-demo-table-grouping-columns"]], decls: 33, vars: 7, consts: [["nzBordered", "", "nzSize", "middle", 3, "nzData", "nzScroll"], ["groupingTable", ""], ["rowspan", "4", "nzLeft", "", 3, "nzFilters", "nzFilterFn"], ["colspan", "4"], ["colspan", "2"], ["rowspan", "4", "nzRight", ""], ["rowspan", "3", 3, "nzSortFn"], ["colspan", "3"], ["rowspan", "3"], ["rowspan", "2"], [4, "ngFor", "ngForOf"], ["nzLeft", ""], ["nzRight", ""]], template: function NzDemoTableGroupingColumnsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-table", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Other");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Company");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Gender");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Age");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Company Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Company Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Street");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Block");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Building");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Door No.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, NzDemoTableGroupingColumnsComponent_tr_32_Template, 17, 8, "tr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzData", ctx.listOfData)("nzScroll", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzFilters", ctx.filterName)("nzFilterFn", ctx.nameFilterFn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSortFn", ctx.sortAgeFn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _r0.data);
    } }, directives: [ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzTableComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzTheadComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzTrDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzTableCellDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzThMeasureDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzCellFixedDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzThAddOnComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzTbodyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoTableGroupingColumnsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-demo-table-grouping-columns',
                template: `
    <nz-table #groupingTable [nzData]="listOfData" nzBordered nzSize="middle" [nzScroll]="{ x: '1200px', y: '240px' }">
      <thead>
        <tr>
          <th rowspan="4" nzLeft [nzFilters]="filterName" [nzFilterFn]="nameFilterFn">Name</th>
          <th colspan="4">Other</th>
          <th colspan="2">Company</th>
          <th rowspan="4" nzRight>Gender</th>
        </tr>
        <tr>
          <th rowspan="3" [nzSortFn]="sortAgeFn">Age</th>
          <th colspan="3">Address</th>
          <th rowspan="3">Company Address</th>
          <th rowspan="3">Company Name</th>
        </tr>
        <tr>
          <th rowspan="2">Street</th>
          <th colspan="2">Block</th>
        </tr>
        <tr>
          <th>Building</th>
          <th>Door No.</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let data of groupingTable.data">
          <td nzLeft>{{ data.name }}</td>
          <td>{{ data.age }}</td>
          <td>{{ data.street }}</td>
          <td>{{ data.building }}</td>
          <td>{{ data.number }}</td>
          <td>{{ data.companyAddress }}</td>
          <td>{{ data.companyName }}</td>
          <td nzRight>{{ data.gender }}</td>
        </tr>
      </tbody>
    </nz-table>
  `
            }]
    }], null, null); })();


/***/ }),

/***/ "OFDT":
/*!************************************!*\
  !*** ./site/doc/app/table/ajax.ts ***!
  \************************************/
/*! exports provided: RandomUserService, NzDemoTableAjaxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RandomUserService", function() { return RandomUserService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoTableAjaxComponent", function() { return NzDemoTableAjaxComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/table */ "mK+R");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");






function NzDemoTableAjaxComponent_tr_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", data_r1.name.first, " ", data_r1.name.last, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r1.gender);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r1.email);
} }
class RandomUserService {
    constructor(http) {
        this.http = http;
        this.randomUserUrl = 'https://api.randomuser.me/';
    }
    getUsers(pageIndex, pageSize, sortField, sortOrder, filters) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]()
            .append('page', `${pageIndex}`)
            .append('results', `${pageSize}`)
            .append('sortField', `${sortField}`)
            .append('sortOrder', `${sortOrder}`);
        filters.forEach(filter => {
            filter.value.forEach(value => {
                params = params.append(filter.key, value);
            });
        });
        return this.http.get(`${this.randomUserUrl}`, { params });
    }
}
RandomUserService.ɵfac = function RandomUserService_Factory(t) { return new (t || RandomUserService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
RandomUserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: RandomUserService, factory: RandomUserService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RandomUserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();
class NzDemoTableAjaxComponent {
    constructor(randomUserService) {
        this.randomUserService = randomUserService;
        this.total = 1;
        this.listOfRandomUser = [];
        this.loading = true;
        this.pageSize = 10;
        this.pageIndex = 1;
        this.filterGender = [
            { text: 'male', value: 'male' },
            { text: 'female', value: 'female' }
        ];
    }
    loadDataFromServer(pageIndex, pageSize, sortField, sortOrder, filter) {
        this.loading = true;
        this.randomUserService.getUsers(pageIndex, pageSize, sortField, sortOrder, filter).subscribe(data => {
            this.loading = false;
            this.total = 200; // mock the total data here
            this.listOfRandomUser = data.results;
        });
    }
    onQueryParamsChange(params) {
        console.log(params);
        const { pageSize, pageIndex, sort, filter } = params;
        const currentSort = sort.find(item => item.value !== null);
        const sortField = (currentSort && currentSort.key) || null;
        const sortOrder = (currentSort && currentSort.value) || null;
        this.loadDataFromServer(pageIndex, pageSize, sortField, sortOrder, filter);
    }
    ngOnInit() {
        this.loadDataFromServer(this.pageIndex, this.pageSize, null, null, []);
    }
}
NzDemoTableAjaxComponent.ɵfac = function NzDemoTableAjaxComponent_Factory(t) { return new (t || NzDemoTableAjaxComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](RandomUserService)); };
NzDemoTableAjaxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NzDemoTableAjaxComponent, selectors: [["nz-demo-table-ajax"]], decls: 11, vars: 11, consts: [["nzShowSizeChanger", "", 3, "nzData", "nzFrontPagination", "nzLoading", "nzTotal", "nzPageSize", "nzPageIndex", "nzQueryParams"], ["nzColumnKey", "name", 3, "nzSortFn"], ["nzColumnKey", "gender", 3, "nzFilters", "nzFilterFn"], ["nzColumnKey", "email", 3, "nzSortFn"], [4, "ngFor", "ngForOf"]], template: function NzDemoTableAjaxComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nz-table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("nzQueryParams", function NzDemoTableAjaxComponent_Template_nz_table_nzQueryParams_0_listener($event) { return ctx.onQueryParamsChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Gender");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, NzDemoTableAjaxComponent_tr_10_Template, 7, 4, "tr", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzData", ctx.listOfRandomUser)("nzFrontPagination", false)("nzLoading", ctx.loading)("nzTotal", ctx.total)("nzPageSize", ctx.pageSize)("nzPageIndex", ctx.pageIndex);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSortFn", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzFilters", ctx.filterGender)("nzFilterFn", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSortFn", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.listOfRandomUser);
    } }, directives: [ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_2__["NzTableComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_2__["NzTheadComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_2__["NzTrDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_2__["NzTableCellDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_2__["NzThMeasureDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_2__["NzThAddOnComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_2__["NzTbodyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NzDemoTableAjaxComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'nz-demo-table-ajax',
                template: `
    <nz-table
      nzShowSizeChanger
      [nzData]="listOfRandomUser"
      [nzFrontPagination]="false"
      [nzLoading]="loading"
      [nzTotal]="total"
      [nzPageSize]="pageSize"
      [nzPageIndex]="pageIndex"
      (nzQueryParams)="onQueryParamsChange($event)"
    >
      <thead>
        <tr>
          <th nzColumnKey="name" [nzSortFn]="true">Name</th>
          <th nzColumnKey="gender" [nzFilters]="filterGender" [nzFilterFn]="true">Gender</th>
          <th nzColumnKey="email" [nzSortFn]="true">Email</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let data of listOfRandomUser">
          <td>{{ data.name.first }} {{ data.name.last }}</td>
          <td>{{ data.gender }}</td>
          <td>{{ data.email }}</td>
        </tr>
      </tbody>
    </nz-table>
  `
            }]
    }], function () { return [{ type: RandomUserService }]; }, null); })();


/***/ }),

/***/ "PHiq":
/*!************************************************!*\
  !*** ./site/doc/app/table/dynamic-settings.ts ***!
  \************************************************/
/*! exports provided: NzDemoTableDynamicSettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoTableDynamicSettingsComponent", function() { return NzDemoTableDynamicSettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/form */ "J4sT");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/table */ "mK+R");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/grid */ "T+9E");
/* harmony import */ var ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/switch */ "uPy1");
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/radio */ "WqIj");
/* harmony import */ var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/divider */ "658v");











function NzDemoTableDynamicSettingsComponent_nz_form_item_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-form-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nz-form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "nz-switch", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const switch_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", switch_r5.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", switch_r5.formControlName);
} }
function NzDemoTableDynamicSettingsComponent_nz_form_item_3_label_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const o_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", o_r8.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](o_r8.label);
} }
function NzDemoTableDynamicSettingsComponent_nz_form_item_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-form-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nz-form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nz-radio-group", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NzDemoTableDynamicSettingsComponent_nz_form_item_3_label_5_Template, 2, 2, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const radio_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", radio_r6.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", radio_r6.formControlName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", radio_r6.listOfOption);
} }
function NzDemoTableDynamicSettingsComponent_tr_7_th_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "th", 13);
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzLeft", ctx_r9.fixedColumn);
} }
function NzDemoTableDynamicSettingsComponent_tr_7_th_2_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzCheckedChange", function NzDemoTableDynamicSettingsComponent_tr_7_th_2_Template_th_nzCheckedChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r11.allChecked = $event; })("nzCheckedChange", function NzDemoTableDynamicSettingsComponent_tr_7_th_2_Template_th_nzCheckedChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r13.checkAll($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzChecked", ctx_r10.allChecked)("nzLeft", ctx_r10.fixedColumn)("nzIndeterminate", ctx_r10.indeterminate);
} }
function NzDemoTableDynamicSettingsComponent_tr_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzDemoTableDynamicSettingsComponent_tr_7_th_1_Template, 1, 1, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzDemoTableDynamicSettingsComponent_tr_7_th_2_Template, 1, 3, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Age");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.settingValue.expandable);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.settingValue.checkbox);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzLeft", ctx_r3.fixedColumn);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzRight", ctx_r3.fixedColumn);
} }
function NzDemoTableDynamicSettingsComponent_ng_container_9_td_2_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzExpandChange", function NzDemoTableDynamicSettingsComponent_ng_container_9_td_2_Template_td_nzExpandChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const data_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return data_r14.expand = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzLeft", ctx_r15.fixedColumn)("nzExpand", data_r14.expand);
} }
function NzDemoTableDynamicSettingsComponent_ng_container_9_td_3_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzCheckedChange", function NzDemoTableDynamicSettingsComponent_ng_container_9_td_3_Template_td_nzCheckedChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const data_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return data_r14.checked = $event; })("nzCheckedChange", function NzDemoTableDynamicSettingsComponent_ng_container_9_td_3_Template_td_nzCheckedChange_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r25.refreshStatus(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzLeft", ctx_r16.fixedColumn)("nzChecked", data_r14.checked);
} }
function NzDemoTableDynamicSettingsComponent_ng_container_9_tr_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzExpand", data_r14.expand);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r14.description, "");
} }
function NzDemoTableDynamicSettingsComponent_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzDemoTableDynamicSettingsComponent_ng_container_9_td_2_Template, 1, 2, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NzDemoTableDynamicSettingsComponent_ng_container_9_td_3_Template, 1, 2, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "nz-divider", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "More action");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, NzDemoTableDynamicSettingsComponent_ng_container_9_tr_16_Template, 3, 2, "tr", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const data_r14 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.settingValue.expandable);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.settingValue.checkbox);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzLeft", ctx_r4.fixedColumn);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r14.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r14.age);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzEllipsis", ctx_r4.settingValue.ellipsis);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r14.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzRight", ctx_r4.fixedColumn)("nzEllipsis", ctx_r4.settingValue.ellipsis);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.settingValue.expandable);
} }
const _c0 = function (a0, a1) { return { x: a0, y: a1 }; };
class NzDemoTableDynamicSettingsComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.listOfData = [];
        this.displayData = [];
        this.allChecked = false;
        this.indeterminate = false;
        this.fixedColumn = false;
        this.scrollX = null;
        this.scrollY = null;
        this.listOfSwitch = [
            { name: 'Bordered', formControlName: 'bordered' },
            { name: 'Loading', formControlName: 'loading' },
            { name: 'Pagination', formControlName: 'pagination' },
            { name: 'PageSizeChanger', formControlName: 'sizeChanger' },
            { name: 'Title', formControlName: 'title' },
            { name: 'Column Header', formControlName: 'header' },
            { name: 'Footer', formControlName: 'footer' },
            { name: 'Expandable', formControlName: 'expandable' },
            { name: 'Checkbox', formControlName: 'checkbox' },
            { name: 'Fixed Header', formControlName: 'fixHeader' },
            { name: 'No Result', formControlName: 'noResult' },
            { name: 'Ellipsis', formControlName: 'ellipsis' },
            { name: 'Simple Pagination', formControlName: 'simple' }
        ];
        this.listOfRadio = [
            {
                name: 'Size',
                formControlName: 'size',
                listOfOption: [
                    { value: 'default', label: 'Default' },
                    { value: 'middle', label: 'Middle' },
                    { value: 'small', label: 'Small' }
                ]
            },
            {
                name: 'Table Scroll',
                formControlName: 'tableScroll',
                listOfOption: [
                    { value: 'unset', label: 'Unset' },
                    { value: 'scroll', label: 'Scroll' },
                    { value: 'fixed', label: 'Fixed' }
                ]
            },
            {
                name: 'Table Layout',
                formControlName: 'tableLayout',
                listOfOption: [
                    { value: 'auto', label: 'Auto' },
                    { value: 'fixed', label: 'Fixed' }
                ]
            },
            {
                name: 'Pagination Position',
                formControlName: 'position',
                listOfOption: [
                    { value: 'top', label: 'Top' },
                    { value: 'bottom', label: 'Bottom' },
                    { value: 'both', label: 'Both' }
                ]
            }
        ];
    }
    currentPageDataChange($event) {
        this.displayData = $event;
        this.refreshStatus();
    }
    refreshStatus() {
        const validData = this.displayData.filter(value => !value.disabled);
        const allChecked = validData.length > 0 && validData.every(value => value.checked === true);
        const allUnChecked = validData.every(value => !value.checked);
        this.allChecked = allChecked;
        this.indeterminate = !allChecked && !allUnChecked;
    }
    checkAll(value) {
        this.displayData.forEach(data => {
            if (!data.disabled) {
                data.checked = value;
            }
        });
        this.refreshStatus();
    }
    generateData() {
        const data = [];
        for (let i = 1; i <= 100; i++) {
            data.push({
                name: 'John Brown',
                age: `${i}2`,
                address: `New York No. ${i} Lake Park`,
                description: `My name is John Brown, I am ${i}2 years old, living in New York No. ${i} Lake Park.`,
                checked: false,
                expand: false
            });
        }
        return data;
    }
    ngOnInit() {
        this.settingForm = this.formBuilder.group({
            bordered: false,
            loading: false,
            pagination: true,
            sizeChanger: false,
            title: true,
            header: true,
            footer: true,
            expandable: true,
            checkbox: true,
            fixHeader: false,
            noResult: false,
            ellipsis: false,
            simple: false,
            size: 'small',
            tableScroll: 'unset',
            tableLayout: 'auto',
            position: 'bottom'
        });
        this.settingValue = this.settingForm.value;
        this.settingForm.valueChanges.subscribe(value => (this.settingValue = value));
        this.settingForm.get('tableScroll').valueChanges.subscribe(scroll => {
            this.fixedColumn = scroll === 'fixed';
            this.scrollX = scroll === 'scroll' || scroll === 'fixed' ? '100vw' : null;
        });
        this.settingForm.get('fixHeader').valueChanges.subscribe(fixed => {
            this.scrollY = fixed ? '240px' : null;
        });
        this.settingForm.get('noResult').valueChanges.subscribe(empty => {
            if (empty) {
                this.listOfData = [];
            }
            else {
                this.listOfData = this.generateData();
            }
        });
        this.listOfData = this.generateData();
    }
}
NzDemoTableDynamicSettingsComponent.ɵfac = function NzDemoTableDynamicSettingsComponent_Factory(t) { return new (t || NzDemoTableDynamicSettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
NzDemoTableDynamicSettingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoTableDynamicSettingsComponent, selectors: [["nz-demo-table-dynamic-settings"]], decls: 10, vars: 21, consts: [[1, "components-table-demo-control-bar"], ["nz-form", "", "nzLayout", "inline", 3, "formGroup"], [4, "ngFor", "ngForOf"], [3, "nzScroll", "nzData", "nzTableLayout", "nzBordered", "nzSimple", "nzLoading", "nzPaginationPosition", "nzShowSizeChanger", "nzFrontPagination", "nzShowPagination", "nzFooter", "nzTitle", "nzSize", "nzCurrentPageDataChange"], ["dynamicTable", ""], [4, "ngIf"], [3, "formControlName"], ["nz-radio-button", "", 3, "nzValue", 4, "ngFor", "ngForOf"], ["nz-radio-button", "", 3, "nzValue"], ["nzWidth", "40px", 3, "nzLeft", 4, "ngIf"], ["nzWidth", "60px", 3, "nzChecked", "nzLeft", "nzIndeterminate", "nzCheckedChange", 4, "ngIf"], [3, "nzLeft"], [3, "nzRight"], ["nzWidth", "40px", 3, "nzLeft"], ["nzWidth", "60px", 3, "nzChecked", "nzLeft", "nzIndeterminate", "nzCheckedChange"], [3, "nzLeft", "nzExpand", "nzExpandChange", 4, "ngIf"], [3, "nzLeft", "nzChecked", "nzCheckedChange", 4, "ngIf"], [3, "nzEllipsis"], [3, "nzRight", "nzEllipsis"], ["href", "#"], ["nzType", "vertical"], [3, "nzExpand", 4, "ngIf"], [3, "nzLeft", "nzExpand", "nzExpandChange"], [3, "nzLeft", "nzChecked", "nzCheckedChange"], [3, "nzExpand"]], template: function NzDemoTableDynamicSettingsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzDemoTableDynamicSettingsComponent_nz_form_item_2_Template, 5, 2, "nz-form-item", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NzDemoTableDynamicSettingsComponent_nz_form_item_3_Template, 6, 3, "nz-form-item", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nz-table", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzCurrentPageDataChange", function NzDemoTableDynamicSettingsComponent_Template_nz_table_nzCurrentPageDataChange_4_listener($event) { return ctx.currentPageDataChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, NzDemoTableDynamicSettingsComponent_tr_7_Template, 11, 4, "tr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, NzDemoTableDynamicSettingsComponent_ng_container_9_Template, 17, 10, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.settingForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listOfSwitch);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listOfRadio);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzScroll", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](18, _c0, ctx.scrollX, ctx.scrollY))("nzData", ctx.listOfData)("nzTableLayout", ctx.settingValue.tableLayout)("nzBordered", ctx.settingValue.bordered)("nzSimple", ctx.settingValue.simple)("nzLoading", ctx.settingValue.loading)("nzPaginationPosition", ctx.settingValue.position)("nzShowSizeChanger", ctx.settingValue.sizeChanger)("nzFrontPagination", ctx.settingValue.pagination)("nzShowPagination", ctx.settingValue.pagination)("nzFooter", ctx.settingValue.footer ? "Here is Footer" : null)("nzTitle", ctx.settingValue.title ? "Here is Title" : null)("nzSize", ctx.settingValue.size);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.settingValue.header);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _r2.data);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_2__["NzFormDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_4__["NzTableComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_4__["NzTheadComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_4__["NzTbodyComponent"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_5__["NzRowDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_2__["NzFormItemComponent"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_5__["NzColDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_2__["NzFormLabelComponent"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_2__["NzFormControlComponent"], ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_6__["NzSwitchComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_7__["NzRadioGroupComponent"], ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_7__["NzRadioComponent"], ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_7__["NzRadioButtonDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_4__["NzTrDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_4__["NzTableCellDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_4__["NzThMeasureDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_4__["NzCellFixedDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_4__["NzThSelectionComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_4__["NzCellEllipsisDirective"], ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_8__["NzDividerComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_4__["NzTdAddOnComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_4__["NzTrExpandDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_4__["NzTableFixedRowComponent"]], styles: ["form[_ngcontent-%COMP%]   nz-form-item[_ngcontent-%COMP%] {\n        margin-right: 16px;\n        margin-bottom: 8px;\n      }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoTableDynamicSettingsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-demo-table-dynamic-settings',
                template: `
    <div class="components-table-demo-control-bar">
      <form nz-form nzLayout="inline" [formGroup]="settingForm!">
        <nz-form-item *ngFor="let switch of listOfSwitch">
          <nz-form-label> {{ switch.name }} </nz-form-label>
          <nz-form-control><nz-switch [formControlName]="switch.formControlName"></nz-switch></nz-form-control>
        </nz-form-item>
        <nz-form-item *ngFor="let radio of listOfRadio">
          <nz-form-label> {{ radio.name }} </nz-form-label>
          <nz-form-control>
            <nz-radio-group [formControlName]="radio.formControlName">
              <label *ngFor="let o of radio.listOfOption" nz-radio-button [nzValue]="o.value">{{ o.label }}</label>
            </nz-radio-group>
          </nz-form-control>
        </nz-form-item>
      </form>
    </div>
    <nz-table
      #dynamicTable
      [nzScroll]="{ x: scrollX, y: scrollY }"
      [nzData]="listOfData"
      [nzTableLayout]="settingValue.tableLayout"
      [nzBordered]="settingValue.bordered"
      [nzSimple]="settingValue.simple"
      [nzLoading]="settingValue.loading"
      [nzPaginationPosition]="settingValue.position"
      [nzShowSizeChanger]="settingValue.sizeChanger"
      [nzFrontPagination]="settingValue.pagination"
      [nzShowPagination]="settingValue.pagination"
      [nzFooter]="settingValue.footer ? 'Here is Footer' : null"
      [nzTitle]="settingValue.title ? 'Here is Title' : null"
      [nzSize]="settingValue.size"
      (nzCurrentPageDataChange)="currentPageDataChange($event)"
    >
      <thead>
        <tr *ngIf="settingValue.header">
          <th nzWidth="40px" *ngIf="settingValue.expandable" [nzLeft]="fixedColumn"></th>
          <th
            *ngIf="settingValue.checkbox"
            nzWidth="60px"
            [(nzChecked)]="allChecked"
            [nzLeft]="fixedColumn"
            [nzIndeterminate]="indeterminate"
            (nzCheckedChange)="checkAll($event)"
          ></th>
          <th [nzLeft]="fixedColumn">Name</th>
          <th>Age</th>
          <th>Address</th>
          <th [nzRight]="fixedColumn">Action</th>
        </tr>
      </thead>
      <tbody>
        <ng-container *ngFor="let data of dynamicTable.data">
          <tr>
            <td [nzLeft]="fixedColumn" *ngIf="settingValue.expandable" [(nzExpand)]="data.expand"></td>
            <td [nzLeft]="fixedColumn" *ngIf="settingValue.checkbox" [(nzChecked)]="data.checked" (nzCheckedChange)="refreshStatus()"></td>
            <td [nzLeft]="fixedColumn">{{ data.name }}</td>
            <td>{{ data.age }}</td>
            <td [nzEllipsis]="settingValue.ellipsis">{{ data.address }}</td>
            <td [nzRight]="fixedColumn" [nzEllipsis]="settingValue.ellipsis">
              <a href="#">Delete</a>
              <nz-divider nzType="vertical"></nz-divider>
              <a href="#">More action</a>
            </td>
          </tr>
          <tr *ngIf="settingValue.expandable" [nzExpand]="data.expand">
            <span> {{ data.description }}</span>
          </tr>
        </ng-container>
      </tbody>
    </nz-table>
  `,
                styles: [
                    `
      form nz-form-item {
        margin-right: 16px;
        margin-bottom: 8px;
      }
    `
                ]
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "ScYO":
/*!****************************************!*\
  !*** ./site/doc/app/table/edit-row.ts ***!
  \****************************************/
/*! exports provided: NzDemoTableEditRowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoTableEditRowComponent", function() { return NzDemoTableEditRowComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/table */ "mK+R");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/input */ "klHs");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/popconfirm */ "sgt3");







function NzDemoTableEditRowComponent_tr_13_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoTableEditRowComponent_tr_13_ng_container_1_Template_a_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const data_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.startEdit(data_r2.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const data_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.age);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.address);
} }
function NzDemoTableEditRowComponent_tr_13_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoTableEditRowComponent_tr_13_ng_template_2_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const data_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.editCache[data_r2.id].data.name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoTableEditRowComponent_tr_13_ng_template_2_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const data_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.editCache[data_r2.id].data.age = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoTableEditRowComponent_tr_13_ng_template_2_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const data_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.editCache[data_r2.id].data.address = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoTableEditRowComponent_tr_13_ng_template_2_Template_a_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const data_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.saveEdit(data_r2.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzOnConfirm", function NzDemoTableEditRowComponent_tr_13_ng_template_2_Template_a_nzOnConfirm_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const data_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.cancelEdit(data_r2.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.editCache[data_r2.id].data.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.editCache[data_r2.id].data.age);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.editCache[data_r2.id].data.address);
} }
function NzDemoTableEditRowComponent_tr_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzDemoTableEditRowComponent_tr_13_ng_container_1_Template, 10, 3, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzDemoTableEditRowComponent_tr_13_ng_template_2_Template, 11, 3, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r2 = ctx.$implicit;
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.editCache[data_r2.id].edit)("ngIfElse", _r4);
} }
class NzDemoTableEditRowComponent {
    constructor() {
        this.editCache = {};
        this.listOfData = [];
    }
    startEdit(id) {
        this.editCache[id].edit = true;
    }
    cancelEdit(id) {
        const index = this.listOfData.findIndex(item => item.id === id);
        this.editCache[id] = {
            data: Object.assign({}, this.listOfData[index]),
            edit: false
        };
    }
    saveEdit(id) {
        const index = this.listOfData.findIndex(item => item.id === id);
        Object.assign(this.listOfData[index], this.editCache[id].data);
        this.editCache[id].edit = false;
    }
    updateEditCache() {
        this.listOfData.forEach(item => {
            this.editCache[item.id] = {
                edit: false,
                data: Object.assign({}, item)
            };
        });
    }
    ngOnInit() {
        const data = [];
        for (let i = 0; i < 100; i++) {
            data.push({
                id: `${i}`,
                name: `Edrward ${i}`,
                age: 32,
                address: `London Park no. ${i}`
            });
        }
        this.listOfData = data;
        this.updateEditCache();
    }
}
NzDemoTableEditRowComponent.ɵfac = function NzDemoTableEditRowComponent_Factory(t) { return new (t || NzDemoTableEditRowComponent)(); };
NzDemoTableEditRowComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoTableEditRowComponent, selectors: [["nz-demo-table-edit-row"]], decls: 14, vars: 2, consts: [["nzBordered", "", "nzTableLayout", "fixed", 3, "nzData"], ["editRowTable", ""], ["nzWidth", "25%"], ["nzWidth", "15%"], ["nzWidth", "40%"], [4, "ngFor", "ngForOf"], [4, "ngIf", "ngIfElse"], ["editTemplate", ""], [3, "click"], ["type", "text", "nz-input", "", 3, "ngModel", "ngModelChange"], [1, "save", 3, "click"], ["nz-popconfirm", "", "nzTitle", "Sure to cancel?", 3, "nzOnConfirm"]], template: function NzDemoTableEditRowComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-table", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Age");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, NzDemoTableEditRowComponent_tr_13_Template, 4, 2, "tr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzData", ctx.listOfData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _r0.data);
    } }, directives: [ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzTableComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzTheadComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzTrDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzTableCellDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzThMeasureDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzTbodyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_3__["NzInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_5__["NzPopconfirmDirective"]], styles: [".save[_ngcontent-%COMP%] {\n        margin-right: 8px;\n      }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoTableEditRowComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-demo-table-edit-row',
                template: `
    <nz-table #editRowTable nzBordered [nzData]="listOfData" nzTableLayout="fixed">
      <thead>
        <tr>
          <th nzWidth="25%">Name</th>
          <th nzWidth="15%">Age</th>
          <th nzWidth="40%">Address</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let data of editRowTable.data">
          <ng-container *ngIf="!editCache[data.id].edit; else editTemplate">
            <td>{{ data.name }}</td>
            <td>{{ data.age }}</td>
            <td>{{ data.address }}</td>
            <td><a (click)="startEdit(data.id)">Edit</a></td>
          </ng-container>
          <ng-template #editTemplate>
            <td><input type="text" nz-input [(ngModel)]="editCache[data.id].data.name" /></td>
            <td><input type="text" nz-input [(ngModel)]="editCache[data.id].data.age" /></td>
            <td><input type="text" nz-input [(ngModel)]="editCache[data.id].data.address" /></td>
            <td>
              <a (click)="saveEdit(data.id)" class="save">Save</a>
              <a nz-popconfirm nzTitle="Sure to cancel?" (nzOnConfirm)="cancelEdit(data.id)">Cancel</a>
            </td>
          </ng-template>
        </tr>
      </tbody>
    </nz-table>
  `,
                styles: [
                    `
      .save {
        margin-right: 8px;
      }
    `
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "V3E5":
/*!********************************************!*\
  !*** ./site/doc/app/table/reset-filter.ts ***!
  \********************************************/
/*! exports provided: NzDemoTableResetFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoTableResetFilterComponent", function() { return NzDemoTableResetFilterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/button */ "TZWX");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "vdzw");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "uLhK");
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/table */ "mK+R");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function NzDemoTableResetFilterComponent_th_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzSortOrderChange", function NzDemoTableResetFilterComponent_th_11_Template_th_nzSortOrderChange_0_listener($event) { const column_r3 = ctx.$implicit; return column_r3.sortOrder = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const column_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSortOrder", column_r3.sortOrder)("nzSortFn", column_r3.sortFn)("nzFilters", column_r3.listOfFilter)("nzFilterFn", column_r3.filterFn);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", column_r3.name, " ");
} }
function NzDemoTableResetFilterComponent_tr_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r5.age);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r5.address);
} }
class NzDemoTableResetFilterComponent {
    constructor() {
        this.listOfColumns = [
            {
                name: 'Name',
                sortOrder: null,
                sortFn: (a, b) => a.name.localeCompare(b.name),
                listOfFilter: [
                    { text: 'Joe', value: 'Joe' },
                    { text: 'Jim', value: 'Jim' }
                ],
                filterFn: (list, item) => list.some(name => item.name.indexOf(name) !== -1)
            },
            {
                name: 'Age',
                sortOrder: null,
                sortFn: (a, b) => a.age - b.age,
                listOfFilter: [],
                filterFn: null
            },
            {
                name: 'Address',
                sortFn: null,
                sortOrder: null,
                listOfFilter: [
                    { text: 'London', value: 'London' },
                    { text: 'Sidney', value: 'Sidney' }
                ],
                filterFn: (address, item) => item.address.indexOf(address) !== -1
            }
        ];
        this.listOfData = [
            {
                name: 'John Brown',
                age: 32,
                address: 'New York No. 1 Lake Park'
            },
            {
                name: 'Jim Green',
                age: 42,
                address: 'London No. 1 Lake Park'
            },
            {
                name: 'Joe Black',
                age: 32,
                address: 'Sidney No. 1 Lake Park'
            },
            {
                name: 'Jim Red',
                age: 32,
                address: 'London No. 2 Lake Park'
            }
        ];
    }
    trackByName(_, item) {
        return item.name;
    }
    sortByAge() {
        this.listOfColumns.forEach(item => {
            if (item.name === 'Age') {
                item.sortOrder = 'descend';
            }
            else {
                item.sortOrder = null;
            }
        });
    }
    resetFilters() {
        this.listOfColumns.forEach(item => {
            if (item.name === 'Name') {
                item.listOfFilter = [
                    { text: 'Joe', value: 'Joe' },
                    { text: 'Jim', value: 'Jim' }
                ];
            }
            else if (item.name === 'Address') {
                item.listOfFilter = [
                    { text: 'London', value: 'London' },
                    { text: 'Sidney', value: 'Sidney' }
                ];
            }
        });
    }
    resetSortAndFilters() {
        this.listOfColumns.forEach(item => {
            item.sortOrder = null;
        });
        this.resetFilters();
    }
}
NzDemoTableResetFilterComponent.ɵfac = function NzDemoTableResetFilterComponent_Factory(t) { return new (t || NzDemoTableResetFilterComponent)(); };
NzDemoTableResetFilterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoTableResetFilterComponent, selectors: [["nz-demo-table-reset-filter"]], decls: 14, vars: 4, consts: [[1, "table-operations"], ["nz-button", "", 3, "click"], ["nzTableLayout", "fixed", 3, "nzData"], ["filterTable", ""], [3, "nzSortOrder", "nzSortFn", "nzFilters", "nzFilterFn", "nzSortOrderChange", 4, "ngFor", "ngForOf", "ngForTrackBy"], [4, "ngFor", "ngForOf"], [3, "nzSortOrder", "nzSortFn", "nzFilters", "nzFilterFn", "nzSortOrderChange"]], template: function NzDemoTableResetFilterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoTableResetFilterComponent_Template_button_click_1_listener() { return ctx.sortByAge(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Sort age");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoTableResetFilterComponent_Template_button_click_3_listener() { return ctx.resetFilters(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Clear filters");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoTableResetFilterComponent_Template_button_click_5_listener() { return ctx.resetSortAndFilters(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Clear filters and sorters");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nz-table", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, NzDemoTableResetFilterComponent_th_11_Template, 2, 5, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, NzDemoTableResetFilterComponent_tr_13_Template, 7, 3, "tr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzData", ctx.listOfData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listOfColumns)("ngForTrackBy", ctx.trackByName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _r0.data);
    } }, directives: [ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_1__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_2__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_3__["ɵNzTransitionPatchDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_4__["NzTableComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_4__["NzTheadComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_4__["NzTrDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_4__["NzTbodyComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_4__["NzTableCellDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_4__["NzThMeasureDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_4__["NzThAddOnComponent"]], styles: [".table-operations[_ngcontent-%COMP%] {\n        margin-bottom: 16px;\n      }\n\n      .table-operations[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n        margin-right: 8px;\n      }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoTableResetFilterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-demo-table-reset-filter',
                template: `
    <div class="table-operations">
      <button nz-button (click)="sortByAge()">Sort age</button>
      <button nz-button (click)="resetFilters()">Clear filters</button>
      <button nz-button (click)="resetSortAndFilters()">Clear filters and sorters</button>
    </div>
    <nz-table #filterTable [nzData]="listOfData" nzTableLayout="fixed">
      <thead>
        <tr>
          <th
            *ngFor="let column of listOfColumns; trackBy: trackByName"
            [(nzSortOrder)]="column.sortOrder"
            [nzSortFn]="column.sortFn"
            [nzFilters]="column.listOfFilter"
            [nzFilterFn]="column.filterFn"
          >
            {{ column.name }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let data of filterTable.data">
          <td>{{ data.name }}</td>
          <td>{{ data.age }}</td>
          <td>{{ data.address }}</td>
        </tr>
      </tbody>
    </nz-table>
  `,
                styles: [
                    `
      .table-operations {
        margin-bottom: 16px;
      }

      .table-operations > button {
        margin-right: 8px;
      }
    `
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "Zgf6":
/*!****************************************!*\
  !*** ./site/doc/app/table/bordered.ts ***!
  \****************************************/
/*! exports provided: NzDemoTableBorderedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoTableBorderedComponent", function() { return NzDemoTableBorderedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/table */ "mK+R");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function NzDemoTableBorderedComponent_tr_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r4.age);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r4.address);
} }
function NzDemoTableBorderedComponent_tr_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r5.age);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r5.address);
} }
class NzDemoTableBorderedComponent {
    constructor() {
        this.dataSet = [
            {
                name: 'John Brown',
                age: 32,
                address: 'New York No. 1 Lake Park'
            },
            {
                name: 'Jim Green',
                age: 42,
                address: 'London No. 1 Lake Park'
            },
            {
                name: 'Joe Black',
                age: 32,
                address: 'Sidney No. 1 Lake Park'
            }
        ];
    }
}
NzDemoTableBorderedComponent.ɵfac = function NzDemoTableBorderedComponent_Factory(t) { return new (t || NzDemoTableBorderedComponent)(); };
NzDemoTableBorderedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoTableBorderedComponent, selectors: [["nz-demo-table-bordered"]], decls: 24, vars: 4, consts: [["nzBordered", "", "nzFooter", "Footer", "nzTitle", "Header", 3, "nzData"], ["borderedTable", ""], [4, "ngFor", "ngForOf"], ["nzOuterBordered", "", "nzFooter", "Footer", "nzTitle", "Header", 3, "nzData"], ["outBordered", ""]], template: function NzDemoTableBorderedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-table", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Age");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, NzDemoTableBorderedComponent_tr_11_Template, 7, 3, "tr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "nz-table", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Age");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, NzDemoTableBorderedComponent_tr_23_Template, 7, 3, "tr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzData", ctx.dataSet);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _r0.data);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzData", ctx.dataSet);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _r2.data);
    } }, directives: [ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzTableComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzTheadComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzTrDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzTableCellDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzThMeasureDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzTbodyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoTableBorderedComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-demo-table-bordered',
                template: `
    <nz-table #borderedTable nzBordered nzFooter="Footer" nzTitle="Header" [nzData]="dataSet">
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let data of borderedTable.data">
          <td>{{ data.name }}</td>
          <td>{{ data.age }}</td>
          <td>{{ data.address }}</td>
        </tr>
      </tbody>
    </nz-table>

    <nz-table #outBordered nzOuterBordered nzFooter="Footer" nzTitle="Header" [nzData]="dataSet">
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let data of outBordered.data">
          <td>{{ data.name }}</td>
          <td>{{ data.age }}</td>
          <td>{{ data.address }}</td>
        </tr>
      </tbody>
    </nz-table>
  `
            }]
    }], null, null); })();


/***/ }),

/***/ "cNqO":
/*!***************************************************!*\
  !*** ./site/doc/app/table/custom-filter-panel.ts ***!
  \***************************************************/
/*! exports provided: NzDemoTableCustomFilterPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoTableCustomFilterPanelComponent", function() { return NzDemoTableCustomFilterPanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/table */ "mK+R");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/icon */ "MOHP");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "uLhK");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/dropdown */ "43SU");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/input */ "klHs");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/button */ "TZWX");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "vdzw");











function NzDemoTableCustomFilterPanelComponent_tr_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r3.age);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r3.address);
} }
class NzDemoTableCustomFilterPanelComponent {
    constructor() {
        this.searchValue = '';
        this.visible = false;
        this.listOfData = [
            {
                name: 'John Brown',
                age: 32,
                address: 'New York No. 1 Lake Park'
            },
            {
                name: 'Jim Green',
                age: 42,
                address: 'London No. 1 Lake Park'
            },
            {
                name: 'Joe Black',
                age: 32,
                address: 'Sidney No. 1 Lake Park'
            },
            {
                name: 'Jim Red',
                age: 32,
                address: 'London No. 2 Lake Park'
            }
        ];
        this.listOfDisplayData = [...this.listOfData];
    }
    reset() {
        this.searchValue = '';
        this.search();
    }
    search() {
        this.visible = false;
        this.listOfDisplayData = this.listOfData.filter((item) => item.name.indexOf(this.searchValue) !== -1);
    }
}
NzDemoTableCustomFilterPanelComponent.ɵfac = function NzDemoTableCustomFilterPanelComponent_Factory(t) { return new (t || NzDemoTableCustomFilterPanelComponent)(); };
NzDemoTableCustomFilterPanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoTableCustomFilterPanelComponent, selectors: [["nz-demo-table-custom-filter-panel"]], decls: 23, vars: 6, consts: [["nzTableLayout", "fixed", 3, "nzData"], ["nzTable", ""], ["nzCustomFilter", ""], [3, "nzVisible", "nzActive", "nzDropdownMenu", "nzVisibleChange"], ["nz-icon", "", "nzType", "search"], [4, "ngFor", "ngForOf"], ["menu", "nzDropdownMenu"], [1, "ant-table-filter-dropdown"], [1, "search-box"], ["type", "text", "nz-input", "", "placeholder", "Search name", 3, "ngModel", "ngModelChange"], ["nz-button", "", "nzSize", "small", "nzType", "primary", 1, "search-button", 3, "click"], ["nz-button", "", "nzSize", "small", 3, "click"]], template: function NzDemoTableCustomFilterPanelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-table", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nz-filter-trigger", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzVisibleChange", function NzDemoTableCustomFilterPanelComponent_Template_nz_filter_trigger_nzVisibleChange_6_listener($event) { return ctx.visible = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Age");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, NzDemoTableCustomFilterPanelComponent_tr_13_Template, 7, 3, "tr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "nz-dropdown-menu", null, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoTableCustomFilterPanelComponent_Template_input_ngModelChange_18_listener($event) { return ctx.searchValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoTableCustomFilterPanelComponent_Template_button_click_19_listener() { return ctx.search(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Search ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoTableCustomFilterPanelComponent_Template_button_click_21_listener() { return ctx.reset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Reset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzData", ctx.listOfDisplayData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzVisible", ctx.visible)("nzActive", ctx.searchValue.length > 0)("nzDropdownMenu", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _r0.data);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchValue);
    } }, directives: [ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzTableComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzTheadComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzTrDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzTableCellDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzThMeasureDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzThAddOnComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzFilterTriggerComponent"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_2__["NzIconDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_3__["ɵNzTransitionPatchDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzTbodyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_5__["NzDropdownMenuComponent"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_6__["NzInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_8__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_9__["NzWaveDirective"]], styles: [".search-box[_ngcontent-%COMP%] {\n        padding: 8px;\n      }\n\n      .search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n        width: 188px;\n        margin-bottom: 8px;\n        display: block;\n      }\n\n      .search-box[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n        width: 90px;\n      }\n\n      .search-button[_ngcontent-%COMP%] {\n        margin-right: 8px;\n      }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoTableCustomFilterPanelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-demo-table-custom-filter-panel',
                template: `
    <nz-table #nzTable [nzData]="listOfDisplayData" nzTableLayout="fixed">
      <thead>
        <tr>
          <th nzCustomFilter>
            Name
            <nz-filter-trigger [(nzVisible)]="visible" [nzActive]="searchValue.length > 0" [nzDropdownMenu]="menu">
              <i nz-icon nzType="search"></i>
            </nz-filter-trigger>
          </th>
          <th>Age</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let data of nzTable.data">
          <td>{{ data.name }}</td>
          <td>{{ data.age }}</td>
          <td>{{ data.address }}</td>
        </tr>
      </tbody>
    </nz-table>
    <nz-dropdown-menu #menu="nzDropdownMenu">
      <div class="ant-table-filter-dropdown">
        <div class="search-box">
          <input type="text" nz-input placeholder="Search name" [(ngModel)]="searchValue" />
          <button nz-button nzSize="small" nzType="primary" (click)="search()" class="search-button">
            Search
          </button>
          <button nz-button nzSize="small" (click)="reset()">Reset</button>
        </div>
      </div>
    </nz-dropdown-menu>
  `,
                styles: [
                    `
      .search-box {
        padding: 8px;
      }

      .search-box input {
        width: 188px;
        margin-bottom: 8px;
        display: block;
      }

      .search-box button {
        width: 90px;
      }

      .search-button {
        margin-right: 8px;
      }
    `
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "d4hB":
/*!********************************************!*\
  !*** ./site/doc/app/table/index.module.ts ***!
  \********************************************/
/*! exports provided: NzDemoTableModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoTableModule", function() { return NzDemoTableModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _share_share_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../share/share.module */ "WGB2");
/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./module */ "ne00");
/* harmony import */ var _ajax__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ajax */ "OFDT");
/* harmony import */ var _basic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./basic */ "mXrf");
/* harmony import */ var _bordered__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bordered */ "Zgf6");
/* harmony import */ var _break_word__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./break-word */ "pwEb");
/* harmony import */ var _colspan_rowspan__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./colspan-rowspan */ "x+js");
/* harmony import */ var _custom_filter_panel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./custom-filter-panel */ "cNqO");
/* harmony import */ var _drag_sorting__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./drag-sorting */ "tXfh");
/* harmony import */ var _dynamic_settings__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dynamic-settings */ "PHiq");
/* harmony import */ var _edit_cell__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./edit-cell */ "4SUl");
/* harmony import */ var _edit_row__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./edit-row */ "ScYO");
/* harmony import */ var _ellipsis__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ellipsis */ "ip+q");
/* harmony import */ var _expand_children__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./expand-children */ "q/+K");
/* harmony import */ var _expand__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./expand */ "6pFZ");
/* harmony import */ var _fixed_columns_header__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./fixed-columns-header */ "u5qx");
/* harmony import */ var _fixed_columns__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./fixed-columns */ "fJNJ");
/* harmony import */ var _fixed_header__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./fixed-header */ "HhJM");
/* harmony import */ var _grouping_columns__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./grouping-columns */ "LkeO");
/* harmony import */ var _multiple_sorter__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./multiple-sorter */ "G10C");
/* harmony import */ var _nested_table__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./nested-table */ "EYm2");
/* harmony import */ var _reset_filter__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./reset-filter */ "V3E5");
/* harmony import */ var _row_selection_and_operation__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./row-selection-and-operation */ "7OiN");
/* harmony import */ var _row_selection_custom__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./row-selection-custom */ "kVUP");
/* harmony import */ var _size__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./size */ "rc0e");
/* harmony import */ var _sort_filter__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./sort-filter */ "v+Nj");
/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./template */ "grK3");
/* harmony import */ var _virtual__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./virtual */ "JINn");
/* harmony import */ var _zh_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./zh.component */ "A6Qe");
/* harmony import */ var _en_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./en.component */ "0yNJ");
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ng-zorro-antd/table */ "mK+R");
/* harmony import */ var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ng-zorro-antd/divider */ "658v");
/* harmony import */ var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ng-zorro-antd/dropdown */ "43SU");
/* harmony import */ var ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ng-zorro-antd/switch */ "uPy1");
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ng-zorro-antd/form */ "J4sT");
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ng-zorro-antd/radio */ "WqIj");
/* harmony import */ var ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ng-zorro-antd/badge */ "lysd");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ng-zorro-antd/button */ "TZWX");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ng-zorro-antd/input */ "klHs");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ng-zorro-antd/icon */ "MOHP");
/* harmony import */ var ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ng-zorro-antd/popconfirm */ "sgt3");













































class NzDemoTableModule {
}
NzDemoTableModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NzDemoTableModule });
NzDemoTableModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NzDemoTableModule_Factory(t) { return new (t || NzDemoTableModule)(); }, imports: [[
            _share_share_module__WEBPACK_IMPORTED_MODULE_2__["ShareModule"],
            ..._module__WEBPACK_IMPORTED_MODULE_3__["moduleList"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                { path: 'en', component: _en_component__WEBPACK_IMPORTED_MODULE_31__["NzDemoTableEnComponent"] },
                { path: 'zh', component: _zh_component__WEBPACK_IMPORTED_MODULE_30__["NzDemoTableZhComponent"] }
            ])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NzDemoTableModule, { declarations: [_ajax__WEBPACK_IMPORTED_MODULE_4__["NzDemoTableAjaxComponent"],
        _basic__WEBPACK_IMPORTED_MODULE_5__["NzDemoTableBasicComponent"],
        _bordered__WEBPACK_IMPORTED_MODULE_6__["NzDemoTableBorderedComponent"],
        _break_word__WEBPACK_IMPORTED_MODULE_7__["NzDemoTableBreakWordComponent"],
        _colspan_rowspan__WEBPACK_IMPORTED_MODULE_8__["NzDemoTableColspanRowspanComponent"],
        _custom_filter_panel__WEBPACK_IMPORTED_MODULE_9__["NzDemoTableCustomFilterPanelComponent"],
        _drag_sorting__WEBPACK_IMPORTED_MODULE_10__["NzDemoTableDragSortingComponent"],
        _dynamic_settings__WEBPACK_IMPORTED_MODULE_11__["NzDemoTableDynamicSettingsComponent"],
        _edit_cell__WEBPACK_IMPORTED_MODULE_12__["NzDemoTableEditCellComponent"],
        _edit_row__WEBPACK_IMPORTED_MODULE_13__["NzDemoTableEditRowComponent"],
        _ellipsis__WEBPACK_IMPORTED_MODULE_14__["NzDemoTableEllipsisComponent"],
        _expand_children__WEBPACK_IMPORTED_MODULE_15__["NzDemoTableExpandChildrenComponent"],
        _expand__WEBPACK_IMPORTED_MODULE_16__["NzDemoTableExpandComponent"],
        _fixed_columns_header__WEBPACK_IMPORTED_MODULE_17__["NzDemoTableFixedColumnsHeaderComponent"],
        _fixed_columns__WEBPACK_IMPORTED_MODULE_18__["NzDemoTableFixedColumnsComponent"],
        _fixed_header__WEBPACK_IMPORTED_MODULE_19__["NzDemoTableFixedHeaderComponent"],
        _grouping_columns__WEBPACK_IMPORTED_MODULE_20__["NzDemoTableGroupingColumnsComponent"],
        _multiple_sorter__WEBPACK_IMPORTED_MODULE_21__["NzDemoTableMultipleSorterComponent"],
        _nested_table__WEBPACK_IMPORTED_MODULE_22__["NzDemoTableNestedTableComponent"],
        _reset_filter__WEBPACK_IMPORTED_MODULE_23__["NzDemoTableResetFilterComponent"],
        _row_selection_and_operation__WEBPACK_IMPORTED_MODULE_24__["NzDemoTableRowSelectionAndOperationComponent"],
        _row_selection_custom__WEBPACK_IMPORTED_MODULE_25__["NzDemoTableRowSelectionCustomComponent"],
        _size__WEBPACK_IMPORTED_MODULE_26__["NzDemoTableSizeComponent"],
        _sort_filter__WEBPACK_IMPORTED_MODULE_27__["NzDemoTableSortFilterComponent"],
        _template__WEBPACK_IMPORTED_MODULE_28__["NzDemoTableTemplateComponent"],
        _virtual__WEBPACK_IMPORTED_MODULE_29__["NzDemoTableVirtualComponent"],
        _zh_component__WEBPACK_IMPORTED_MODULE_30__["NzDemoTableZhComponent"],
        _en_component__WEBPACK_IMPORTED_MODULE_31__["NzDemoTableEnComponent"]], imports: [_share_share_module__WEBPACK_IMPORTED_MODULE_2__["ShareModule"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_32__["NzTableModule"], ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_33__["NzDividerModule"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_34__["NzDropDownModule"], ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_35__["NzSwitchModule"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_36__["NzFormModule"], ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_37__["NzRadioModule"], ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_38__["NzBadgeModule"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_39__["NzButtonModule"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_40__["NzInputModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_41__["NzIconModule"], ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_42__["NzPopconfirmModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoTableModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _share_share_module__WEBPACK_IMPORTED_MODULE_2__["ShareModule"],
                    ..._module__WEBPACK_IMPORTED_MODULE_3__["moduleList"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                        { path: 'en', component: _en_component__WEBPACK_IMPORTED_MODULE_31__["NzDemoTableEnComponent"] },
                        { path: 'zh', component: _zh_component__WEBPACK_IMPORTED_MODULE_30__["NzDemoTableZhComponent"] }
                    ])
                ],
                declarations: [
                    _ajax__WEBPACK_IMPORTED_MODULE_4__["NzDemoTableAjaxComponent"],
                    _basic__WEBPACK_IMPORTED_MODULE_5__["NzDemoTableBasicComponent"],
                    _bordered__WEBPACK_IMPORTED_MODULE_6__["NzDemoTableBorderedComponent"],
                    _break_word__WEBPACK_IMPORTED_MODULE_7__["NzDemoTableBreakWordComponent"],
                    _colspan_rowspan__WEBPACK_IMPORTED_MODULE_8__["NzDemoTableColspanRowspanComponent"],
                    _custom_filter_panel__WEBPACK_IMPORTED_MODULE_9__["NzDemoTableCustomFilterPanelComponent"],
                    _drag_sorting__WEBPACK_IMPORTED_MODULE_10__["NzDemoTableDragSortingComponent"],
                    _dynamic_settings__WEBPACK_IMPORTED_MODULE_11__["NzDemoTableDynamicSettingsComponent"],
                    _edit_cell__WEBPACK_IMPORTED_MODULE_12__["NzDemoTableEditCellComponent"],
                    _edit_row__WEBPACK_IMPORTED_MODULE_13__["NzDemoTableEditRowComponent"],
                    _ellipsis__WEBPACK_IMPORTED_MODULE_14__["NzDemoTableEllipsisComponent"],
                    _expand_children__WEBPACK_IMPORTED_MODULE_15__["NzDemoTableExpandChildrenComponent"],
                    _expand__WEBPACK_IMPORTED_MODULE_16__["NzDemoTableExpandComponent"],
                    _fixed_columns_header__WEBPACK_IMPORTED_MODULE_17__["NzDemoTableFixedColumnsHeaderComponent"],
                    _fixed_columns__WEBPACK_IMPORTED_MODULE_18__["NzDemoTableFixedColumnsComponent"],
                    _fixed_header__WEBPACK_IMPORTED_MODULE_19__["NzDemoTableFixedHeaderComponent"],
                    _grouping_columns__WEBPACK_IMPORTED_MODULE_20__["NzDemoTableGroupingColumnsComponent"],
                    _multiple_sorter__WEBPACK_IMPORTED_MODULE_21__["NzDemoTableMultipleSorterComponent"],
                    _nested_table__WEBPACK_IMPORTED_MODULE_22__["NzDemoTableNestedTableComponent"],
                    _reset_filter__WEBPACK_IMPORTED_MODULE_23__["NzDemoTableResetFilterComponent"],
                    _row_selection_and_operation__WEBPACK_IMPORTED_MODULE_24__["NzDemoTableRowSelectionAndOperationComponent"],
                    _row_selection_custom__WEBPACK_IMPORTED_MODULE_25__["NzDemoTableRowSelectionCustomComponent"],
                    _size__WEBPACK_IMPORTED_MODULE_26__["NzDemoTableSizeComponent"],
                    _sort_filter__WEBPACK_IMPORTED_MODULE_27__["NzDemoTableSortFilterComponent"],
                    _template__WEBPACK_IMPORTED_MODULE_28__["NzDemoTableTemplateComponent"],
                    _virtual__WEBPACK_IMPORTED_MODULE_29__["NzDemoTableVirtualComponent"],
                    _zh_component__WEBPACK_IMPORTED_MODULE_30__["NzDemoTableZhComponent"],
                    _en_component__WEBPACK_IMPORTED_MODULE_31__["NzDemoTableEnComponent"],
                ],
                entryComponents: []
            }]
    }], null, null); })();


/***/ }),

/***/ "fJNJ":
/*!*********************************************!*\
  !*** ./site/doc/app/table/fixed-columns.ts ***!
  \*********************************************/
/*! exports provided: NzDemoTableFixedColumnsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoTableFixedColumnsComponent", function() { return NzDemoTableFixedColumnsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/table */ "mK+R");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function NzDemoTableFixedColumnsComponent_tr_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "action");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.age);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.address);
} }
const _c0 = function () { return { x: "1100px" }; };
class NzDemoTableFixedColumnsComponent {
    constructor() {
        this.listOfData = [
            {
                key: '1',
                name: 'John Brown',
                age: 32,
                address: 'New York'
            },
            {
                key: '2',
                name: 'Jim Green',
                age: 40,
                address: 'London'
            }
        ];
    }
}
NzDemoTableFixedColumnsComponent.ɵfac = function NzDemoTableFixedColumnsComponent_Factory(t) { return new (t || NzDemoTableFixedColumnsComponent)(); };
NzDemoTableFixedColumnsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoTableFixedColumnsComponent, selectors: [["nz-demo-table-fixed-columns"]], decls: 28, vars: 4, consts: [[3, "nzData", "nzScroll"], ["columnTable", ""], ["nzLeft", ""], ["nzRight", ""], [4, "ngFor", "ngForOf"]], template: function NzDemoTableFixedColumnsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-table", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Full Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Age");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Column 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Column 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Column 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Column 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Column 5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Column 6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Column 7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Column 8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, NzDemoTableFixedColumnsComponent_tr_27_Template, 24, 10, "tr", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzData", ctx.listOfData)("nzScroll", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _r0.data);
    } }, directives: [ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzTableComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzTheadComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzTrDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzTableCellDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzThMeasureDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzCellFixedDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzTbodyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoTableFixedColumnsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-demo-table-fixed-columns',
                template: `
    <nz-table #columnTable [nzData]="listOfData" [nzScroll]="{ x: '1100px' }">
      <thead>
        <tr>
          <th nzLeft>Full Name</th>
          <th nzLeft>Age</th>
          <th>Column 1</th>
          <th>Column 2</th>
          <th>Column 3</th>
          <th>Column 4</th>
          <th>Column 5</th>
          <th>Column 6</th>
          <th>Column 7</th>
          <th nzRight>Column 8</th>
          <th nzRight>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let data of columnTable.data">
          <td nzLeft>{{ data.name }}</td>
          <td nzLeft>{{ data.age }}</td>
          <td>{{ data.address }}</td>
          <td>{{ data.address }}</td>
          <td>{{ data.address }}</td>
          <td>{{ data.address }}</td>
          <td>{{ data.address }}</td>
          <td>{{ data.address }}</td>
          <td>{{ data.address }}</td>
          <td nzRight>{{ data.address }}</td>
          <td nzRight>
            <a>action</a>
          </td>
        </tr>
      </tbody>
    </nz-table>
  `
            }]
    }], null, null); })();


/***/ }),

/***/ "grK3":
/*!****************************************!*\
  !*** ./site/doc/app/table/template.ts ***!
  \****************************************/
/*! exports provided: NzDemoTableTemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoTableTemplateComponent", function() { return NzDemoTableTemplateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/table */ "mK+R");



class NzDemoTableTemplateComponent {
}
NzDemoTableTemplateComponent.ɵfac = function NzDemoTableTemplateComponent_Factory(t) { return new (t || NzDemoTableTemplateComponent)(); };
NzDemoTableTemplateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoTableTemplateComponent, selectors: [["nz-demo-table-template"]], decls: 52, vars: 0, consts: [["nzTemplateMode", ""]], template: function NzDemoTableTemplateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Company");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Country");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Alfreds Futterkiste");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Maria Anders");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Germany");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Centro comercial Moctezuma");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Francisco Chang");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Mexico");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Ernst Handel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Roland Mendel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Austria");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Island Trading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Helen Bennett");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "UK");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Laughing Bacchus Winecellars");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Yoshi Tannamuri");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Canada");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Magazzini Alimentari Riuniti");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Giovanni Rovelli");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Italy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzTableComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzTheadComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzTrDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzTableCellDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzThMeasureDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzTbodyComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoTableTemplateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-demo-table-template',
                template: `
    <nz-table nzTemplateMode>
      <thead>
        <tr>
          <th>Company</th>
          <th>Contact</th>
          <th>Country</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Alfreds Futterkiste</td>
          <td>Maria Anders</td>
          <td>Germany</td>
        </tr>
        <tr>
          <td>Centro comercial Moctezuma</td>
          <td>Francisco Chang</td>
          <td>Mexico</td>
        </tr>
        <tr>
          <td>Ernst Handel</td>
          <td>Roland Mendel</td>
          <td>Austria</td>
        </tr>
        <tr>
          <td>Island Trading</td>
          <td>Helen Bennett</td>
          <td>UK</td>
        </tr>
        <tr>
          <td>Laughing Bacchus Winecellars</td>
          <td>Yoshi Tannamuri</td>
          <td>Canada</td>
        </tr>
        <tr>
          <td>Magazzini Alimentari Riuniti</td>
          <td>Giovanni Rovelli</td>
          <td>Italy</td>
        </tr>
      </tbody>
    </nz-table>
  `
            }]
    }], null, null); })();


/***/ }),

/***/ "ip+q":
/*!****************************************!*\
  !*** ./site/doc/app/table/ellipsis.ts ***!
  \****************************************/
/*! exports provided: NzDemoTableEllipsisComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoTableEllipsisComponent", function() { return NzDemoTableEllipsisComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/table */ "mK+R");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function NzDemoTableEllipsisComponent_tr_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.age);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.address);
} }
class NzDemoTableEllipsisComponent {
    constructor() {
        this.listOfData = [];
    }
    ngOnInit() {
        for (let i = 0; i < 3; i++) {
            this.listOfData.push({
                name: `Edward King`,
                age: 32,
                address: `LondonLondonLondonLondonLondon`
            });
        }
    }
}
NzDemoTableEllipsisComponent.ɵfac = function NzDemoTableEllipsisComponent_Factory(t) { return new (t || NzDemoTableEllipsisComponent)(); };
NzDemoTableEllipsisComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoTableEllipsisComponent, selectors: [["nz-demo-table-ellipsis"]], decls: 18, vars: 2, consts: [["nzTableLayout", "fixed", 3, "nzData"], ["fixedTable", ""], ["nzEllipsis", ""], [4, "ngFor", "ngForOf"]], template: function NzDemoTableEllipsisComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-table", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Full Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Age");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Column 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Column 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Column ColumnColumn 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Column 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, NzDemoTableEllipsisComponent_tr_17_Template, 13, 6, "tr", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzData", ctx.listOfData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _r0.data);
    } }, directives: [ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzTableComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzTheadComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzTrDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzTableCellDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzThMeasureDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzCellEllipsisDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzTbodyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoTableEllipsisComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-demo-table-ellipsis',
                template: `
    <nz-table #fixedTable [nzData]="listOfData" nzTableLayout="fixed">
      <thead>
        <tr>
          <th>Full Name</th>
          <th>Age</th>
          <th>Column 1</th>
          <th>Column 2</th>
          <th nzEllipsis>Column ColumnColumn 3</th>
          <th>Column 4</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let data of fixedTable.data">
          <td>{{ data.name }}</td>
          <td>{{ data.age }}</td>
          <td nzEllipsis>{{ data.address }}</td>
          <td nzEllipsis>{{ data.address }}</td>
          <td nzEllipsis>{{ data.address }}</td>
          <td nzEllipsis>{{ data.address }}</td>
        </tr>
      </tbody>
    </nz-table>
  `
            }]
    }], null, null); })();


/***/ }),

/***/ "kVUP":
/*!****************************************************!*\
  !*** ./site/doc/app/table/row-selection-custom.ts ***!
  \****************************************************/
/*! exports provided: NzDemoTableRowSelectionCustomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoTableRowSelectionCustomComponent", function() { return NzDemoTableRowSelectionCustomComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/table */ "mK+R");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function NzDemoTableRowSelectionCustomComponent_tr_12_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzCheckedChange", function NzDemoTableRowSelectionCustomComponent_tr_12_Template_td_nzCheckedChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const data_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.onItemChecked(data_r2.id, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzChecked", ctx_r1.setOfCheckedId.has(data_r2.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.age);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.address);
} }
class NzDemoTableRowSelectionCustomComponent {
    constructor() {
        this.listOfSelection = [
            {
                text: 'Select All Row',
                onSelect: () => {
                    this.onAllChecked(true);
                }
            },
            {
                text: 'Select Odd Row',
                onSelect: () => {
                    this.listOfCurrentPageData.forEach((data, index) => this.updateCheckedSet(data.id, index % 2 !== 0));
                    this.refreshCheckedStatus();
                }
            },
            {
                text: 'Select Even Row',
                onSelect: () => {
                    this.listOfCurrentPageData.forEach((data, index) => this.updateCheckedSet(data.id, index % 2 === 0));
                    this.refreshCheckedStatus();
                }
            }
        ];
        this.checked = false;
        this.indeterminate = false;
        this.listOfCurrentPageData = [];
        this.listOfData = [];
        this.setOfCheckedId = new Set();
    }
    updateCheckedSet(id, checked) {
        if (checked) {
            this.setOfCheckedId.add(id);
        }
        else {
            this.setOfCheckedId.delete(id);
        }
    }
    onItemChecked(id, checked) {
        this.updateCheckedSet(id, checked);
        this.refreshCheckedStatus();
    }
    onAllChecked(value) {
        this.listOfCurrentPageData.forEach(item => this.updateCheckedSet(item.id, value));
        this.refreshCheckedStatus();
    }
    onCurrentPageDataChange($event) {
        this.listOfCurrentPageData = $event;
        this.refreshCheckedStatus();
    }
    refreshCheckedStatus() {
        this.checked = this.listOfCurrentPageData.every(item => this.setOfCheckedId.has(item.id));
        this.indeterminate = this.listOfCurrentPageData.some(item => this.setOfCheckedId.has(item.id)) && !this.checked;
    }
    ngOnInit() {
        this.listOfData = new Array(200).fill(0).map((_, index) => {
            return {
                id: index,
                name: `Edward King ${index}`,
                age: 32,
                address: `London, Park Lane no. ${index}`
            };
        });
    }
}
NzDemoTableRowSelectionCustomComponent.ɵfac = function NzDemoTableRowSelectionCustomComponent_Factory(t) { return new (t || NzDemoTableRowSelectionCustomComponent)(); };
NzDemoTableRowSelectionCustomComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoTableRowSelectionCustomComponent, selectors: [["nz-demo-table-row-selection-custom"]], decls: 13, vars: 5, consts: [["nzShowSizeChanger", "", 3, "nzData", "nzCurrentPageDataChange"], ["rowSelectionTable", ""], [3, "nzSelections", "nzChecked", "nzIndeterminate", "nzCheckedChange"], [4, "ngFor", "ngForOf"], [3, "nzChecked", "nzCheckedChange"]], template: function NzDemoTableRowSelectionCustomComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-table", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzCurrentPageDataChange", function NzDemoTableRowSelectionCustomComponent_Template_nz_table_nzCurrentPageDataChange_0_listener($event) { return ctx.onCurrentPageDataChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzCheckedChange", function NzDemoTableRowSelectionCustomComponent_Template_th_nzCheckedChange_4_listener($event) { return ctx.checked = $event; })("nzCheckedChange", function NzDemoTableRowSelectionCustomComponent_Template_th_nzCheckedChange_4_listener($event) { return ctx.onAllChecked($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Age");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, NzDemoTableRowSelectionCustomComponent_tr_12_Template, 8, 4, "tr", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzData", ctx.listOfData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSelections", ctx.listOfSelection)("nzChecked", ctx.checked)("nzIndeterminate", ctx.indeterminate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _r0.data);
    } }, directives: [ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzTableComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzTheadComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzTrDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzTableCellDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzThMeasureDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzThSelectionComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzTbodyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzTdAddOnComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoTableRowSelectionCustomComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-demo-table-row-selection-custom',
                template: `
    <nz-table #rowSelectionTable nzShowSizeChanger [nzData]="listOfData" (nzCurrentPageDataChange)="onCurrentPageDataChange($event)">
      <thead>
        <tr>
          <th
            [nzSelections]="listOfSelection"
            [(nzChecked)]="checked"
            [nzIndeterminate]="indeterminate"
            (nzCheckedChange)="onAllChecked($event)"
          ></th>
          <th>Name</th>
          <th>Age</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let data of rowSelectionTable.data">
          <td [nzChecked]="setOfCheckedId.has(data.id)" (nzCheckedChange)="onItemChecked(data.id, $event)"></td>
          <td>{{ data.name }}</td>
          <td>{{ data.age }}</td>
          <td>{{ data.address }}</td>
        </tr>
      </tbody>
    </nz-table>
  `
            }]
    }], null, null); })();


/***/ }),

/***/ "mXrf":
/*!*************************************!*\
  !*** ./site/doc/app/table/basic.ts ***!
  \*************************************/
/*! exports provided: NzDemoTableBasicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoTableBasicComponent", function() { return NzDemoTableBasicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/table */ "mK+R");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/divider */ "658v");





function NzDemoTableBasicComponent_tr_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "nz-divider", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.age);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Action \u4E00 ", data_r2.name, "");
} }
class NzDemoTableBasicComponent {
    constructor() {
        this.listOfData = [
            {
                key: '1',
                name: 'John Brown',
                age: 32,
                address: 'New York No. 1 Lake Park'
            },
            {
                key: '2',
                name: 'Jim Green',
                age: 42,
                address: 'London No. 1 Lake Park'
            },
            {
                key: '3',
                name: 'Joe Black',
                age: 32,
                address: 'Sidney No. 1 Lake Park'
            }
        ];
    }
}
NzDemoTableBasicComponent.ɵfac = function NzDemoTableBasicComponent_Factory(t) { return new (t || NzDemoTableBasicComponent)(); };
NzDemoTableBasicComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoTableBasicComponent, selectors: [["nz-demo-table-basic"]], decls: 14, vars: 2, consts: [[3, "nzData"], ["basicTable", ""], [4, "ngFor", "ngForOf"], ["nzType", "vertical"]], template: function NzDemoTableBasicComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-table", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Age");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, NzDemoTableBasicComponent_tr_13_Template, 13, 4, "tr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzData", ctx.listOfData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _r0.data);
    } }, directives: [ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzTableComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzTheadComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzTrDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzTableCellDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzThMeasureDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzTbodyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_3__["NzDividerComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoTableBasicComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-demo-table-basic',
                template: `
    <nz-table #basicTable [nzData]="listOfData">
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Address</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let data of basicTable.data">
          <td>{{ data.name }}</td>
          <td>{{ data.age }}</td>
          <td>{{ data.address }}</td>
          <td>
            <a>Action 一 {{ data.name }}</a>
            <nz-divider nzType="vertical"></nz-divider>
            <a>Delete</a>
          </td>
        </tr>
      </tbody>
    </nz-table>
  `
            }]
    }], null, null); })();


/***/ }),

/***/ "ne00":
/*!**************************************!*\
  !*** ./site/doc/app/table/module.ts ***!
  \**************************************/
/*! exports provided: moduleList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moduleList", function() { return moduleList; });
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng-zorro-antd/table */ "mK+R");
/* harmony import */ var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/divider */ "658v");
/* harmony import */ var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/dropdown */ "43SU");
/* harmony import */ var ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/switch */ "uPy1");
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/form */ "J4sT");
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/radio */ "WqIj");
/* harmony import */ var ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/badge */ "lysd");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/button */ "TZWX");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/input */ "klHs");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/icon */ "MOHP");
/* harmony import */ var ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/popconfirm */ "sgt3");











const moduleList = [
    ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_0__["NzTableModule"],
    ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_1__["NzDividerModule"],
    ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_2__["NzDropDownModule"],
    ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_3__["NzSwitchModule"],
    ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_4__["NzFormModule"],
    ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_5__["NzRadioModule"],
    ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_6__["NzBadgeModule"],
    ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_7__["NzButtonModule"],
    ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_8__["NzInputModule"],
    ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_9__["NzIconModule"],
    ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_10__["NzPopconfirmModule"]
];


/***/ }),

/***/ "pwEb":
/*!******************************************!*\
  !*** ./site/doc/app/table/break-word.ts ***!
  \******************************************/
/*! exports provided: NzDemoTableBreakWordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoTableBreakWordComponent", function() { return NzDemoTableBreakWordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/table */ "mK+R");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function NzDemoTableBreakWordComponent_tr_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "action");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.age);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.address);
} }
const _c0 = function () { return { x: "1000px", y: "240px" }; };
class NzDemoTableBreakWordComponent {
    constructor() {
        this.listOfData = [];
    }
    ngOnInit() {
        for (let i = 0; i < 100; i++) {
            this.listOfData.push({
                name: `Edward King`,
                age: 32,
                address: `LondonLondonLondonLondonLondon`
            });
        }
    }
}
NzDemoTableBreakWordComponent.ɵfac = function NzDemoTableBreakWordComponent_Factory(t) { return new (t || NzDemoTableBreakWordComponent)(); };
NzDemoTableBreakWordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoTableBreakWordComponent, selectors: [["nz-demo-table-break-word"]], decls: 28, vars: 4, consts: [[3, "nzData", "nzScroll"], ["fixedTable", ""], ["nzLeft", ""], ["nzRight", ""], [4, "ngFor", "ngForOf"], ["nzBreakWord", ""]], template: function NzDemoTableBreakWordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-table", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Full Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Age");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Column 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Column 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Column 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Column 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Column 5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Column 6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Column 7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Column 8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, NzDemoTableBreakWordComponent_tr_27_Template, 24, 10, "tr", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzData", ctx.listOfData)("nzScroll", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _r0.data);
    } }, directives: [ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzTableComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzTheadComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzTrDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzTableCellDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzThMeasureDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzCellFixedDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzTbodyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzCellBreakWordDirective"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoTableBreakWordComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-demo-table-break-word',
                template: `
    <nz-table #fixedTable [nzData]="listOfData" [nzScroll]="{ x: '1000px', y: '240px' }">
      <thead>
        <tr>
          <th nzLeft>Full Name</th>
          <th nzLeft>Age</th>
          <th>Column 1</th>
          <th>Column 2</th>
          <th>Column 3</th>
          <th>Column 4</th>
          <th>Column 5</th>
          <th>Column 6</th>
          <th>Column 7</th>
          <th>Column 8</th>
          <th nzRight>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let data of fixedTable.data">
          <td nzLeft>{{ data.name }}</td>
          <td nzLeft>{{ data.age }}</td>
          <td nzBreakWord>{{ data.address }}</td>
          <td nzBreakWord>{{ data.address }}</td>
          <td nzBreakWord>{{ data.address }}</td>
          <td nzBreakWord>{{ data.address }}</td>
          <td nzBreakWord>{{ data.address }}</td>
          <td nzBreakWord>{{ data.address }}</td>
          <td nzBreakWord>{{ data.address }}</td>
          <td nzBreakWord>{{ data.address }}</td>
          <td nzRight>
            <a>action</a>
          </td>
        </tr>
      </tbody>
    </nz-table>
  `
            }]
    }], null, null); })();


/***/ }),

/***/ "q/+K":
/*!***********************************************!*\
  !*** ./site/doc/app/table/expand-children.ts ***!
  \***********************************************/
/*! exports provided: NzDemoTableExpandChildrenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoTableExpandChildrenComponent", function() { return NzDemoTableExpandChildrenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/table */ "mK+R");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function NzDemoTableExpandChildrenComponent_ng_container_11_ng_container_1_tr_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzExpandChange", function NzDemoTableExpandChildrenComponent_ng_container_11_ng_container_1_tr_1_Template_td_nzExpandChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return item_r4.expand = $event; })("nzExpandChange", function NzDemoTableExpandChildrenComponent_ng_container_11_ng_container_1_tr_1_Template_td_nzExpandChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const data_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.collapse(ctx_r9.mapOfExpandedData[data_r2.key], item_r4, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzIndentSize", item_r4.level * 20)("nzShowExpand", !!item_r4.children)("nzExpand", item_r4.expand);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r4.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r4.age);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r4.address);
} }
function NzDemoTableExpandChildrenComponent_ng_container_11_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzDemoTableExpandChildrenComponent_ng_container_11_ng_container_1_tr_1_Template, 7, 6, "tr", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r4.parent && item_r4.parent.expand || !item_r4.parent);
} }
function NzDemoTableExpandChildrenComponent_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzDemoTableExpandChildrenComponent_ng_container_11_ng_container_1_Template, 2, 1, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const data_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.mapOfExpandedData[data_r2.key]);
} }
class NzDemoTableExpandChildrenComponent {
    constructor() {
        this.listOfMapData = [
            {
                key: `1`,
                name: 'John Brown sr.',
                age: 60,
                address: 'New York No. 1 Lake Park',
                children: [
                    {
                        key: `1-1`,
                        name: 'John Brown',
                        age: 42,
                        address: 'New York No. 2 Lake Park'
                    },
                    {
                        key: `1-2`,
                        name: 'John Brown jr.',
                        age: 30,
                        address: 'New York No. 3 Lake Park',
                        children: [
                            {
                                key: `1-2-1`,
                                name: 'Jimmy Brown',
                                age: 16,
                                address: 'New York No. 3 Lake Park'
                            }
                        ]
                    },
                    {
                        key: `1-3`,
                        name: 'Jim Green sr.',
                        age: 72,
                        address: 'London No. 1 Lake Park',
                        children: [
                            {
                                key: `1-3-1`,
                                name: 'Jim Green',
                                age: 42,
                                address: 'London No. 2 Lake Park',
                                children: [
                                    {
                                        key: `1-3-1-1`,
                                        name: 'Jim Green jr.',
                                        age: 25,
                                        address: 'London No. 3 Lake Park'
                                    },
                                    {
                                        key: `1-3-1-2`,
                                        name: 'Jimmy Green sr.',
                                        age: 18,
                                        address: 'London No. 4 Lake Park'
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                key: `2`,
                name: 'Joe Black',
                age: 32,
                address: 'Sidney No. 1 Lake Park'
            }
        ];
        this.mapOfExpandedData = {};
    }
    collapse(array, data, $event) {
        if (!$event) {
            if (data.children) {
                data.children.forEach(d => {
                    const target = array.find(a => a.key === d.key);
                    target.expand = false;
                    this.collapse(array, target, false);
                });
            }
            else {
                return;
            }
        }
    }
    convertTreeToList(root) {
        const stack = [];
        const array = [];
        const hashMap = {};
        stack.push(Object.assign(Object.assign({}, root), { level: 0, expand: false }));
        while (stack.length !== 0) {
            const node = stack.pop();
            this.visitNode(node, hashMap, array);
            if (node.children) {
                for (let i = node.children.length - 1; i >= 0; i--) {
                    stack.push(Object.assign(Object.assign({}, node.children[i]), { level: node.level + 1, expand: false, parent: node }));
                }
            }
        }
        return array;
    }
    visitNode(node, hashMap, array) {
        if (!hashMap[node.key]) {
            hashMap[node.key] = true;
            array.push(node);
        }
    }
    ngOnInit() {
        this.listOfMapData.forEach(item => {
            this.mapOfExpandedData[item.key] = this.convertTreeToList(item);
        });
    }
}
NzDemoTableExpandChildrenComponent.ɵfac = function NzDemoTableExpandChildrenComponent_Factory(t) { return new (t || NzDemoTableExpandChildrenComponent)(); };
NzDemoTableExpandChildrenComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoTableExpandChildrenComponent, selectors: [["nz-demo-table-expand-children"]], decls: 12, vars: 2, consts: [["nzTableLayout", "fixed", 3, "nzData"], ["expandTable", ""], [4, "ngFor", "ngForOf"], [4, "ngIf"], [3, "nzIndentSize", "nzShowExpand", "nzExpand", "nzExpandChange"]], template: function NzDemoTableExpandChildrenComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-table", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Age");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, NzDemoTableExpandChildrenComponent_ng_container_11_Template, 2, 1, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzData", ctx.listOfMapData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _r0.data);
    } }, directives: [ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzTableComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzTheadComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzTrDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzTableCellDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzThMeasureDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzTbodyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzTdAddOnComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoTableExpandChildrenComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-demo-table-expand-children',
                template: `
    <nz-table #expandTable [nzData]="listOfMapData" nzTableLayout="fixed">
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        <ng-container *ngFor="let data of expandTable.data">
          <ng-container *ngFor="let item of mapOfExpandedData[data.key]">
            <tr *ngIf="(item.parent && item.parent.expand) || !item.parent">
              <td
                [nzIndentSize]="item.level! * 20"
                [nzShowExpand]="!!item.children"
                [(nzExpand)]="item.expand"
                (nzExpandChange)="collapse(mapOfExpandedData[data.key], item, $event)"
              >
                {{ item.name }}
              </td>
              <td>{{ item.age }}</td>
              <td>{{ item.address }}</td>
            </tr>
          </ng-container>
        </ng-container>
      </tbody>
    </nz-table>
  `
            }]
    }], null, null); })();


/***/ }),

/***/ "rc0e":
/*!************************************!*\
  !*** ./site/doc/app/table/size.ts ***!
  \************************************/
/*! exports provided: NzDemoTableSizeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoTableSizeComponent", function() { return NzDemoTableSizeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/table */ "mK+R");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function NzDemoTableSizeComponent_tr_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r4.age);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r4.address);
} }
function NzDemoTableSizeComponent_tr_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r5.age);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r5.address);
} }
class NzDemoTableSizeComponent {
    constructor() {
        this.data = [
            {
                name: 'John Brown',
                age: 32,
                address: 'New York No. 1 Lake Park'
            },
            {
                name: 'Jim Green',
                age: 42,
                address: 'London No. 1 Lake Park'
            },
            {
                name: 'Joe Black',
                age: 32,
                address: 'Sidney No. 1 Lake Park'
            }
        ];
    }
}
NzDemoTableSizeComponent.ɵfac = function NzDemoTableSizeComponent_Factory(t) { return new (t || NzDemoTableSizeComponent)(); };
NzDemoTableSizeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoTableSizeComponent, selectors: [["nz-demo-table-size"]], decls: 28, vars: 4, consts: [["nzSize", "middle", 3, "nzData"], ["middleTable", ""], [4, "ngFor", "ngForOf"], ["nzSize", "small", 3, "nzData"], ["smallTable", ""]], template: function NzDemoTableSizeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Middle size table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nz-table", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Age");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, NzDemoTableSizeComponent_tr_13_Template, 7, 3, "tr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Small size table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "nz-table", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Age");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, NzDemoTableSizeComponent_tr_27_Template, 7, 3, "tr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzData", ctx.data);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _r0.data);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzData", ctx.data);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _r2.data);
    } }, directives: [ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzTableComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzTheadComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzTrDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzTableCellDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzThMeasureDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzTbodyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["h4[_ngcontent-%COMP%] {\n        margin-bottom: 16px;\n      }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoTableSizeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-demo-table-size',
                template: `
    <h4>Middle size table</h4>
    <nz-table #middleTable nzSize="middle" [nzData]="data">
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let data of middleTable.data">
          <td>{{ data.name }}</td>
          <td>{{ data.age }}</td>
          <td>{{ data.address }}</td>
        </tr>
      </tbody>
    </nz-table>
    <h4>Small size table</h4>
    <nz-table #smallTable nzSize="small" [nzData]="data">
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let data of smallTable.data">
          <td>{{ data.name }}</td>
          <td>{{ data.age }}</td>
          <td>{{ data.address }}</td>
        </tr>
      </tbody>
    </nz-table>
  `,
                styles: [
                    `
      h4 {
        margin-bottom: 16px;
      }
    `
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "tXfh":
/*!********************************************!*\
  !*** ./site/doc/app/table/drag-sorting.ts ***!
  \********************************************/
/*! exports provided: NzDemoTableDragSortingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoTableDragSortingComponent", function() { return NzDemoTableDragSortingComponent; });
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/table */ "mK+R");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");






function NzDemoTableDragSortingComponent_tr_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r1.age);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r1.address);
} }
class NzDemoTableDragSortingComponent {
    constructor() {
        this.listOfData = [
            {
                key: '1',
                name: 'John Brown',
                age: 32,
                address: 'New York No. 1 Lake Park'
            },
            {
                key: '2',
                name: 'Jim Green',
                age: 42,
                address: 'London No. 1 Lake Park'
            },
            {
                key: '3',
                name: 'Joe Black',
                age: 32,
                address: 'Sidney No. 1 Lake Park'
            }
        ];
    }
    drop(event) {
        Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["moveItemInArray"])(this.listOfData, event.previousIndex, event.currentIndex);
    }
}
NzDemoTableDragSortingComponent.ɵfac = function NzDemoTableDragSortingComponent_Factory(t) { return new (t || NzDemoTableDragSortingComponent)(); };
NzDemoTableDragSortingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NzDemoTableDragSortingComponent, selectors: [["nz-demo-table-drag-sorting"]], decls: 11, vars: 4, consts: [[3, "nzData", "nzFrontPagination", "nzShowPagination"], ["cdkDropList", "", 3, "cdkDropListDropped"], ["cdkDrag", "", 4, "ngFor", "ngForOf"], ["cdkDrag", ""]], template: function NzDemoTableDragSortingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nz-table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Age");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "tbody", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("cdkDropListDropped", function NzDemoTableDragSortingComponent_Template_tbody_cdkDropListDropped_9_listener($event) { return ctx.drop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, NzDemoTableDragSortingComponent_tr_10_Template, 7, 3, "tr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzData", ctx.listOfData)("nzFrontPagination", false)("nzShowPagination", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.listOfData);
    } }, directives: [ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_2__["NzTableComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_2__["NzTheadComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_2__["NzTrDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_2__["NzTableCellDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_2__["NzThMeasureDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_2__["NzTbodyComponent"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["CdkDropList"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["CdkDrag"]], styles: [".cdk-drag-preview {\n        display: table;\n      }\n\n        .cdk-drag-placeholder {\n        opacity: 0;\n      }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NzDemoTableDragSortingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'nz-demo-table-drag-sorting',
                template: `
    <nz-table [nzData]="listOfData" [nzFrontPagination]="false" [nzShowPagination]="false">
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody cdkDropList (cdkDropListDropped)="drop($event)">
        <tr *ngFor="let data of listOfData" cdkDrag>
          <td>{{ data.name }}</td>
          <td>{{ data.age }}</td>
          <td>{{ data.address }}</td>
        </tr>
      </tbody>
    </nz-table>
  `,
                styles: [
                    `
      ::ng-deep .cdk-drag-preview {
        display: table;
      }

      ::ng-deep .cdk-drag-placeholder {
        opacity: 0;
      }
    `
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "u5qx":
/*!****************************************************!*\
  !*** ./site/doc/app/table/fixed-columns-header.ts ***!
  \****************************************************/
/*! exports provided: NzDemoTableFixedColumnsHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoTableFixedColumnsHeaderComponent", function() { return NzDemoTableFixedColumnsHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/table */ "mK+R");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function NzDemoTableFixedColumnsHeaderComponent_tr_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "action");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.age);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.address);
} }
const _c0 = function () { return { x: "1150px", y: "240px" }; };
class NzDemoTableFixedColumnsHeaderComponent {
    constructor() {
        this.listOfData = [];
    }
    ngOnInit() {
        for (let i = 0; i < 100; i++) {
            this.listOfData.push({
                name: `Edward King ${i}`,
                age: 32,
                address: `London`
            });
        }
    }
}
NzDemoTableFixedColumnsHeaderComponent.ɵfac = function NzDemoTableFixedColumnsHeaderComponent_Factory(t) { return new (t || NzDemoTableFixedColumnsHeaderComponent)(); };
NzDemoTableFixedColumnsHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoTableFixedColumnsHeaderComponent, selectors: [["nz-demo-table-fixed-columns-header"]], decls: 28, vars: 4, consts: [[3, "nzData", "nzScroll"], ["fixedTable", ""], ["nzLeft", ""], ["nzRight", ""], [4, "ngFor", "ngForOf"]], template: function NzDemoTableFixedColumnsHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-table", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Full Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Age");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Column 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Column 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Column 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Column 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Column 5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Column 6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Column 7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Column 8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, NzDemoTableFixedColumnsHeaderComponent_tr_27_Template, 24, 10, "tr", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzData", ctx.listOfData)("nzScroll", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _r0.data);
    } }, directives: [ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzTableComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzTheadComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzTrDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzTableCellDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzThMeasureDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzCellFixedDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzTbodyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoTableFixedColumnsHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-demo-table-fixed-columns-header',
                template: `
    <nz-table #fixedTable [nzData]="listOfData" [nzScroll]="{ x: '1150px', y: '240px' }">
      <thead>
        <tr>
          <th nzLeft>Full Name</th>
          <th nzLeft>Age</th>
          <th>Column 1</th>
          <th>Column 2</th>
          <th>Column 3</th>
          <th>Column 4</th>
          <th>Column 5</th>
          <th>Column 6</th>
          <th>Column 7</th>
          <th>Column 8</th>
          <th nzRight>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let data of fixedTable.data">
          <td nzLeft>{{ data.name }}</td>
          <td nzLeft>{{ data.age }}</td>
          <td>{{ data.address }}</td>
          <td>{{ data.address }}</td>
          <td>{{ data.address }}</td>
          <td>{{ data.address }}</td>
          <td>{{ data.address }}</td>
          <td>{{ data.address }}</td>
          <td>{{ data.address }}</td>
          <td>{{ data.address }}</td>
          <td nzRight>
            <a>action</a>
          </td>
        </tr>
      </tbody>
    </nz-table>
  `
            }]
    }], null, null); })();


/***/ }),

/***/ "v+Nj":
/*!*******************************************!*\
  !*** ./site/doc/app/table/sort-filter.ts ***!
  \*******************************************/
/*! exports provided: NzDemoTableSortFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoTableSortFilterComponent", function() { return NzDemoTableSortFilterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/table */ "mK+R");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function NzDemoTableSortFilterComponent_th_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const column_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSortOrder", column_r3.sortOrder)("nzSortFn", column_r3.sortFn)("nzSortDirections", column_r3.sortDirections)("nzFilterMultiple", column_r3.filterMultiple)("nzFilters", column_r3.listOfFilter)("nzFilterFn", column_r3.filterFn);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", column_r3.name, " ");
} }
function NzDemoTableSortFilterComponent_tr_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r4.age);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r4.address);
} }
class NzDemoTableSortFilterComponent {
    constructor() {
        this.listOfColumns = [
            {
                name: 'Name',
                sortOrder: null,
                sortFn: (a, b) => a.name.localeCompare(b.name),
                sortDirections: ['ascend', 'descend', null],
                filterMultiple: true,
                listOfFilter: [
                    { text: 'Joe', value: 'Joe' },
                    { text: 'Jim', value: 'Jim', byDefault: true }
                ],
                filterFn: (list, item) => list.some(name => item.name.indexOf(name) !== -1)
            },
            {
                name: 'Age',
                sortOrder: 'descend',
                sortFn: (a, b) => a.age - b.age,
                sortDirections: ['descend', null],
                listOfFilter: [],
                filterFn: null,
                filterMultiple: true
            },
            {
                name: 'Address',
                sortOrder: null,
                sortDirections: ['ascend', 'descend', null],
                sortFn: (a, b) => a.address.length - b.address.length,
                filterMultiple: false,
                listOfFilter: [
                    { text: 'London', value: 'London' },
                    { text: 'Sidney', value: 'Sidney' }
                ],
                filterFn: (address, item) => item.address.indexOf(address) !== -1
            }
        ];
        this.listOfData = [
            {
                name: 'John Brown',
                age: 32,
                address: 'New York No. 1 Lake Park'
            },
            {
                name: 'Jim Green',
                age: 42,
                address: 'London No. 1 Lake Park'
            },
            {
                name: 'Joe Black',
                age: 32,
                address: 'Sidney No. 1 Lake Park'
            },
            {
                name: 'Jim Red',
                age: 32,
                address: 'London No. 2 Lake Park'
            }
        ];
    }
}
NzDemoTableSortFilterComponent.ɵfac = function NzDemoTableSortFilterComponent_Factory(t) { return new (t || NzDemoTableSortFilterComponent)(); };
NzDemoTableSortFilterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoTableSortFilterComponent, selectors: [["nz-demo-table-sort-filter"]], decls: 7, vars: 3, consts: [["nzTableLayout", "fixed", 3, "nzData"], ["filterTable", ""], [3, "nzSortOrder", "nzSortFn", "nzSortDirections", "nzFilterMultiple", "nzFilters", "nzFilterFn", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], [3, "nzSortOrder", "nzSortFn", "nzSortDirections", "nzFilterMultiple", "nzFilters", "nzFilterFn"]], template: function NzDemoTableSortFilterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-table", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NzDemoTableSortFilterComponent_th_4_Template, 2, 7, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NzDemoTableSortFilterComponent_tr_6_Template, 7, 3, "tr", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzData", ctx.listOfData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listOfColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _r0.data);
    } }, directives: [ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzTableComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzTheadComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzTrDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzTbodyComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzTableCellDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzThMeasureDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzThAddOnComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoTableSortFilterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-demo-table-sort-filter',
                template: `
    <nz-table #filterTable [nzData]="listOfData" nzTableLayout="fixed">
      <thead>
        <tr>
          <th
            *ngFor="let column of listOfColumns"
            [nzSortOrder]="column.sortOrder"
            [nzSortFn]="column.sortFn"
            [nzSortDirections]="column.sortDirections"
            [nzFilterMultiple]="column.filterMultiple"
            [nzFilters]="column.listOfFilter"
            [nzFilterFn]="column.filterFn"
          >
            {{ column.name }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let data of filterTable.data">
          <td>{{ data.name }}</td>
          <td>{{ data.age }}</td>
          <td>{{ data.address }}</td>
        </tr>
      </tbody>
    </nz-table>
  `
            }]
    }], null, null); })();


/***/ }),

/***/ "x+js":
/*!***********************************************!*\
  !*** ./site/doc/app/table/colspan-rowspan.ts ***!
  \***********************************************/
/*! exports provided: NzDemoTableColspanRowspanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoTableColspanRowspanComponent", function() { return NzDemoTableColspanRowspanComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/table */ "mK+R");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function NzDemoTableColspanRowspanComponent_tr_13_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const data_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.age);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.tel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.address);
} }
function NzDemoTableColspanRowspanComponent_tr_13_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const data_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.age);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.address);
} }
function NzDemoTableColspanRowspanComponent_tr_13_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const data_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.age);
} }
function NzDemoTableColspanRowspanComponent_tr_13_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const data_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.age);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.tel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.address);
} }
function NzDemoTableColspanRowspanComponent_tr_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](3, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NzDemoTableColspanRowspanComponent_tr_13_ng_container_4_Template, 9, 4, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NzDemoTableColspanRowspanComponent_tr_13_ng_container_5_Template, 7, 3, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NzDemoTableColspanRowspanComponent_tr_13_ng_container_6_Template, 3, 1, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, NzDemoTableColspanRowspanComponent_tr_13_ng_container_7_Template, 9, 4, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", i_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", 4);
} }
class NzDemoTableColspanRowspanComponent {
    constructor() {
        this.listOfData = [
            {
                key: '1',
                name: 'John Brown',
                age: 32,
                tel: '0571-22098909',
                phone: 18889898989,
                address: 'New York No. 1 Lake Park'
            },
            {
                key: '2',
                name: 'Jim Green',
                tel: '0571-22098333',
                phone: 18889898888,
                age: 42,
                address: 'London No. 1 Lake Park'
            },
            {
                key: '3',
                name: 'Joe Black',
                age: 32,
                tel: '0575-22098909',
                phone: 18900010002,
                address: 'Sidney No. 1 Lake Park'
            },
            {
                key: '4',
                name: 'Jim Red',
                age: 18,
                tel: '0575-22098909',
                phone: 18900010002,
                address: 'London No. 2 Lake Park'
            },
            {
                key: '5',
                name: 'Jake White',
                age: 18,
                tel: '0575-22098909',
                phone: 18900010002,
                address: 'Dublin No. 2 Lake Park'
            }
        ];
    }
}
NzDemoTableColspanRowspanComponent.ɵfac = function NzDemoTableColspanRowspanComponent_Factory(t) { return new (t || NzDemoTableColspanRowspanComponent)(); };
NzDemoTableColspanRowspanComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoTableColspanRowspanComponent, selectors: [["nz-demo-table-colspan-rowspan"]], decls: 14, vars: 2, consts: [["nzBordered", "", 3, "nzData"], ["colSpanTable", ""], ["colspan", "2"], [4, "ngFor", "ngForOf"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], ["rowspan", "2"], ["colspan", "5"]], template: function NzDemoTableColspanRowspanComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-table", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Age");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Home phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, NzDemoTableColspanRowspanComponent_tr_13_Template, 8, 5, "tr", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzData", ctx.listOfData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _r0.data);
    } }, directives: [ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzTableComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzTheadComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzTrDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzTableCellDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzThMeasureDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzTbodyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchDefault"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoTableColspanRowspanComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-demo-table-colspan-rowspan',
                template: `
    <nz-table #colSpanTable [nzData]="listOfData" nzBordered>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th colspan="2">Home phone</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let data of colSpanTable.data; index as i">
          <td>{{ data.name }}</td>
          <ng-container [ngSwitch]="i">
            <ng-container *ngSwitchCase="2">
              <td>{{ data.age }}</td>
              <td rowspan="2">{{ data.tel }}</td>
              <td>{{ data.phone }}</td>
              <td>{{ data.address }}</td>
            </ng-container>
            <ng-container *ngSwitchCase="3">
              <td>{{ data.age }}</td>
              <td>{{ data.phone }}</td>
              <td>{{ data.address }}</td>
            </ng-container>
            <ng-container *ngSwitchCase="4">
              <td colspan="5">{{ data.age }}</td>
            </ng-container>
            <ng-container *ngSwitchDefault>
              <td>{{ data.age }}</td>
              <td>{{ data.tel }}</td>
              <td>{{ data.phone }}</td>
              <td>{{ data.address }}</td>
            </ng-container>
          </ng-container>
        </tr>
      </tbody>
    </nz-table>
  `
            }]
    }], null, null); })();


/***/ })

};;
//# sourceMappingURL=table-index-module.js.map