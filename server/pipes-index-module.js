exports.ids = ["pipes-index-module"];
exports.modules = {

/***/ "/OUW":
/*!****************************************!*\
  !*** ./site/doc/app/pipes/ellipsis.ts ***!
  \****************************************/
/*! exports provided: NzDemoPipesEllipsisComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoPipesEllipsisComponent", function() { return NzDemoPipesEllipsisComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/input */ "klHs");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng_zorro_antd_pipes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/pipes */ "jeS+");





class NzDemoPipesEllipsisComponent {
    constructor() {
        this.str = 'Ant Design, a design language for background applications';
    }
}
/** @nocollapse */ NzDemoPipesEllipsisComponent.ɵfac = function NzDemoPipesEllipsisComponent_Factory(t) { return new (t || NzDemoPipesEllipsisComponent)(); };
/** @nocollapse */ NzDemoPipesEllipsisComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoPipesEllipsisComponent, selectors: [["nz-demo-pipes-ellipsis"]], decls: 5, vars: 6, consts: [["type", "text", "nz-input", "", 3, "ngModel", "ngModelChange"]], template: function NzDemoPipesEllipsisComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoPipesEllipsisComponent_Template_input_ngModelChange_0_listener($event) { return ctx.str = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "nzEllipsis");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.str);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](4, 2, ctx.str, 36, "..."));
    } }, directives: [ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_1__["NzInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]], pipes: [ng_zorro_antd_pipes__WEBPACK_IMPORTED_MODULE_3__["NzEllipsisPipe"]], styles: ["p[_ngcontent-%COMP%] {\n        padding: 8px 12px;\n      }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoPipesEllipsisComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-demo-pipes-ellipsis',
                template: `
    <input type="text" nz-input [(ngModel)]="str" />
    <br />
    <p>{{ str | nzEllipsis: 36:'...' }}</p>
  `,
                styles: [
                    `
      p {
        padding: 8px 12px;
      }
    `
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "FN2R":
/*!*****************************************!*\
  !*** ./site/doc/app/pipes/safe-null.ts ***!
  \*****************************************/
/*! exports provided: NzDemoPipesSafeNullComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoPipesSafeNullComponent", function() { return NzDemoPipesSafeNullComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/table */ "mK+R");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_pipes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/pipes */ "jeS+");





function NzDemoPipesSafeNullComponent_tr_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "nzSafeNull");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r2.age);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 3, data_r2.address, "-"));
} }
class NzDemoPipesSafeNullComponent {
    constructor() {
        this.listOfData = [
            {
                name: 'John Brown',
                age: 32
            },
            {
                name: 'Jim Green',
                age: 42
            },
            {
                name: 'Joe Black',
                age: 32,
                address: 'Sidney No. 1 Lake Park'
            }
        ];
    }
}
/** @nocollapse */ NzDemoPipesSafeNullComponent.ɵfac = function NzDemoPipesSafeNullComponent_Factory(t) { return new (t || NzDemoPipesSafeNullComponent)(); };
/** @nocollapse */ NzDemoPipesSafeNullComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoPipesSafeNullComponent, selectors: [["nz-demo-pipes-safe-null"]], decls: 12, vars: 2, consts: [[3, "nzData"], ["basicTable", ""], [4, "ngFor", "ngForOf"]], template: function NzDemoPipesSafeNullComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, NzDemoPipesSafeNullComponent_tr_11_Template, 8, 6, "tr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzData", ctx.listOfData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _r0.data);
    } }, directives: [ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzTableComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzTheadComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzTrDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzTableCellDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzThMeasureDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_1__["NzTbodyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], pipes: [ng_zorro_antd_pipes__WEBPACK_IMPORTED_MODULE_3__["NzSafeNullPipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoPipesSafeNullComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-demo-pipes-safe-null',
                template: `
    <nz-table #basicTable [nzData]="listOfData">
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let data of basicTable.data">
          <td>{{ data.name }}</td>
          <td>{{ data.age }}</td>
          <td>{{ data.address | nzSafeNull: '-' }}</td>
        </tr>
      </tbody>
    </nz-table>
  `
            }]
    }], null, null); })();


/***/ }),

/***/ "I1Xa":
/*!**************************************!*\
  !*** ./site/doc/app/pipes/module.ts ***!
  \**************************************/
/*! exports provided: moduleList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moduleList", function() { return moduleList; });
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng-zorro-antd/grid */ "T+9E");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/input */ "klHs");
/* harmony import */ var ng_zorro_antd_pipes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/pipes */ "jeS+");
/* harmony import */ var ng_zorro_antd_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/slider */ "Dkbx");
/* harmony import */ var ng_zorro_antd_statistic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/statistic */ "pvw4");
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/table */ "mK+R");






const moduleList = [ng_zorro_antd_pipes__WEBPACK_IMPORTED_MODULE_2__["NzPipesModule"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_5__["NzTableModule"], ng_zorro_antd_slider__WEBPACK_IMPORTED_MODULE_3__["NzSliderModule"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_1__["NzInputModule"], ng_zorro_antd_statistic__WEBPACK_IMPORTED_MODULE_4__["NzStatisticModule"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_0__["NzGridModule"]];


/***/ }),

/***/ "LkIp":
/*!********************************************!*\
  !*** ./site/doc/app/pipes/zh.component.ts ***!
  \********************************************/
/*! exports provided: NzDemoPipesZhComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoPipesZhComponent", function() { return NzDemoPipesZhComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _share_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../share/codebox/codebox.component */ "rKiv");
/* harmony import */ var ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/affix */ "utH8");
/* harmony import */ var ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/anchor */ "l83q");
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ "pk25");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/grid */ "T+9E");
/* harmony import */ var _bytes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bytes */ "UO73");
/* harmony import */ var _css_unit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./css-unit */ "gvWY");
/* harmony import */ var _ellipsis__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ellipsis */ "/OUW");
/* harmony import */ var _aggregate__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./aggregate */ "UVml");
/* harmony import */ var _safe_null__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./safe-null */ "FN2R");
/* harmony import */ var _sanitizer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sanitizer */ "NQGD");
/* harmony import */ var _trim__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./trim */ "j4C4");
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/table */ "mK+R");
















class NzDemoPipesZhComponent {
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
/** @nocollapse */ NzDemoPipesZhComponent.ɵfac = function NzDemoPipesZhComponent_Factory(t) { return new (t || NzDemoPipesZhComponent)(); };
/** @nocollapse */ NzDemoPipesZhComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoPipesZhComponent, selectors: [["nz-demo-pipes"]], viewQuery: function NzDemoPipesZhComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_share_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_1__["NzCodeBoxComponent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.codeBoxes = _t);
    } }, decls: 428, vars: 32, consts: [[1, "toc-affix", 3, "nzOffsetTop"], ["nzShowInkInFixed", "", 3, "nzAffix", "nzClick"], ["nzHref", "#components-pipes-demo-bytes", "nzTitle", "nzBytes"], ["nzHref", "#components-pipes-demo-css-unit", "nzTitle", "nzToCssUnit"], ["nzHref", "#components-pipes-demo-ellipsis", "nzTitle", "nzEllipsis"], ["nzHref", "#components-pipes-demo-aggregate", "nzTitle", "nzAggregate"], ["nzHref", "#components-pipes-demo-safe-null", "nzTitle", "nzSafeNull"], ["nzHref", "#components-pipes-demo-sanitizer", "nzTitle", "nzSanitizer"], ["nzHref", "#components-pipes-demo-trim", "nzTitle", "nzTrim"], ["nzHref", "#api", "nzTitle", "API"], [1, "markdown"], [1, "subtitle"], [1, "widget"], ["href", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/pipes/doc/index.zh-CN.md", "target", "_blank", "rel", "noopener noreferrer", 1, "edit-button"], ["nz-icon", "", "nzType", "edit"], [2, "border-color", "#faad14"], ["id", "\u4F55\u65F6\u4F7F\u7528"], ["onclick", "window.location.hash = '\u4F55\u65F6\u4F7F\u7528'", 1, "anchor"], [1, "language-ts"], [1, "token", "keyword"], [1, "token", "punctuation"], [1, "token", "string"], ["nz-icon", "", "nzType", "appstore", "nz-tooltip", "", "nzTooltipTitle", "\u5C55\u5F00\u5168\u90E8\u4EE3\u7801", 1, "code-box-expand-trigger", 3, "click"], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", 3, "nzSpan"], ["nzTitle", "nzBytes", "nzSelector", "nz-demo-pipes-bytes", "nzGenerateCommand", "ng g ng-zorro-antd:pipes-bytes <name>", "nzComponentName", "NzDemoPipesBytesComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], ["demo", ""], ["intro", ""], ["nzTitle", "nzToCssUnit", "nzSelector", "nz-demo-pipes-css-unit", "nzGenerateCommand", "ng g ng-zorro-antd:pipes-css-unit <name>", "nzComponentName", "NzDemoPipesCssUnitComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], ["nzTitle", "nzEllipsis", "nzSelector", "nz-demo-pipes-ellipsis", "nzGenerateCommand", "ng g ng-zorro-antd:pipes-ellipsis <name>", "nzComponentName", "NzDemoPipesEllipsisComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], ["nzTitle", "nzAggregate", "nzSelector", "nz-demo-pipes-aggregate", "nzGenerateCommand", "ng g ng-zorro-antd:pipes-aggregate <name>", "nzComponentName", "NzDemoPipesAggregateComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], ["nzTitle", "nzSafeNull", "nzSelector", "nz-demo-pipes-safe-null", "nzGenerateCommand", "ng g ng-zorro-antd:pipes-safe-null <name>", "nzComponentName", "NzDemoPipesSafeNullComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], ["nzTitle", "nzSanitizer", "nzSelector", "nz-demo-pipes-sanitizer", "nzGenerateCommand", "ng g ng-zorro-antd:pipes-sanitizer <name>", "nzComponentName", "NzDemoPipesSanitizerComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], [1, "language-html"], [1, "token", "tag"], [1, "token", "attr-name"], [1, "token", "attr-value"], ["nzTitle", "nzTrim", "nzSelector", "nz-demo-pipes-trim", "nzGenerateCommand", "ng g ng-zorro-antd:pipes-trim <name>", "nzComponentName", "NzDemoPipesTrimComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], [1, "markdown", "api-container"], ["id", "api"], ["onclick", "window.location.hash = 'api'", 1, "anchor"], ["id", "<strong>nzsafenull</strong>"], ["onclick", "window.location.hash = '<strong>nzsafenull</strong>'", 1, "anchor"], ["id", "<strong>nzbytes</strong>"], ["onclick", "window.location.hash = '<strong>nzbytes</strong>'", 1, "anchor"], ["id", "<strong>nztocssunit</strong>"], ["onclick", "window.location.hash = '<strong>nztocssunit</strong>'", 1, "anchor"], ["id", "<strong>nzellipsis</strong>"], ["onclick", "window.location.hash = '<strong>nzellipsis</strong>'", 1, "anchor"], ["id", "<strong>nzaggregate</strong>"], ["onclick", "window.location.hash = '<strong>nzaggregate</strong>'", 1, "anchor"], ["id", "<strong>nzsanitizer</strong>"], ["onclick", "window.location.hash = '<strong>nzsanitizer</strong>'", 1, "anchor"]], template: function NzDemoPipesZhComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-affix", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nz-anchor", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzClick", function NzDemoPipesZhComponent_Template_nz_anchor_nzClick_2_listener($event) { return ctx.goLink($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "nz-link", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "nz-link", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "nz-link", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "nz-link", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "nz-link", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "nz-link", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "nz-link", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "nz-link", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "section", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Pipes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "section", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "blockquote", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "NG-ZORRO \u5B9E\u9A8C\u6027\u529F\u80FD\u662F\u6307\u5DF2\u53D1\u5E03\u4F46\u4E0D\u7A33\u5B9A\u6216\u8005\u8FD8\u672A\u51C6\u5907\u597D\u7528\u4E8E\u751F\u4EA7\u73AF\u5883\u7684\u529F\u80FD\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\u5F00\u53D1\u8005\u6216\u7528\u6237\u53EF\u4EE5\u9009\u62E9\u5728\u6B63\u5F0F\u53D1\u5E03\u524D\u4F7F\u7528\u8FD9\u4E9B\u529F\u80FD\uFF0C\u4F46\u662F\u6BCF\u6B21\u53D1\u5E03\u7248\u672C\u65F6\u90FD\u53EF\u80FD\u5B58\u5728 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "breaking changes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\u9879\u76EE\u4E2D\u5E38\u7528 Pipe \u96C6\u5408");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h2", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\u4F55\u65F6\u4F7F\u7528");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "\u5F15\u5165 Pipe \u540E\uFF0C\u50CF angular \u7684\u9ED8\u8BA4 Pipe \u4E00\u6837\u4F7F\u7528");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "pre", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "import");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "{");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " NzPipesModule ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "from");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "'ng-zorro-antd/pipes'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "\u4EE3\u7801\u6F14\u793A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoPipesZhComponent_Template_i_click_58_listener() { return ctx.expandAllCode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "nz-code-box", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "nz-demo-pipes-bytes", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "\u5B58\u50A8\u5355\u4F4D\u7684\u6362\u7B97\uFF0C\u589E\u52A0\u53EF\u8BFB\u6027");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "nz-code-box", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "nz-demo-pipes-css-unit", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Css \u5355\u4F4D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "nz-code-box", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "nz-demo-pipes-ellipsis", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "\u622A\u65AD\u5B57\u7B26\u4E32\uFF0C\u7528\u6307\u5B9A\u7684\u5B57\u7B26\u4E32\u7ED3\u5C3E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "nz-code-box", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "nz-demo-pipes-aggregate", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "\u6570\u7EC4\u7684Sum\u3001Min\u3001Max\u3001Average\u7B49\u805A\u5408\u64CD\u4F5C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "nz-code-box", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "nz-demo-pipes-safe-null", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "\u8F6C\u6362 Null \u548C Undefined \u4E3A\u6307\u5B9A\u5B57\u7B26\u4E32");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "nz-code-box", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "nz-demo-pipes-sanitizer", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "DomSanitizer \u7684 Pipe \u5B9E\u73B0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "pre", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "[innerHTML]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "html | nzSanitizer: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "html");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "[style]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "style | nzSanitizer: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "style");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "img");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "[src]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "url | nzSanitizer: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, "'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "url");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "/>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, "iframe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, "[src]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, "resourceUrl | nzSanitizer: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, "'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, "resourceUrl");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, "'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, "iframe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "nz-code-box", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](211, "nz-demo-pipes-trim", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](214, "\u53BB\u9664\u5B57\u7B26\u4E32\u5DE6\u53F3\u7A7A\u5B57\u7B26\u4E32");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "section", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "h2", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218, "API");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "h3", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, "nzSafeNull");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](226, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](231, "\u53C2\u6570");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](233, "\u8BF4\u660E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](235, "\u7C7B\u578B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](237, "\u9ED8\u8BA4\u503C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](242, "replace");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](244, "\u66FF\u6362\u5B57\u7B26");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](247, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](249, "''");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "h3", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](253, "nzBytes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](255, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](260, "\u53C2\u6570");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](262, "\u8BF4\u660E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](264, "\u7C7B\u578B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](266, "\u9ED8\u8BA4\u503C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](271, "decimal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](273, "\u4FDD\u7559\u5C0F\u6570\u4F4D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](276, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](278, "'0'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](282, "from");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](284, "\u5F53\u524D\u503C\u7684\u5355\u4F4D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](287, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](289, "'B'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](293, "to");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](295, "\u8F6C\u6362\u5230\u76EE\u6807\u503C\u7684\u5355\u4F4D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](297, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](298, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](300, "''");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](301, "h3", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](303, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](304, "nzToCssUnit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "a", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](306, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](307, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](308, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](309, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](310, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](311, "\u53C2\u6570");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](312, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](313, "\u8BF4\u660E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](314, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](315, "\u7C7B\u578B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](316, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](317, "\u9ED8\u8BA4\u503C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](318, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](319, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](320, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](321, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](322, "defaultUnit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](323, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](324, "\u9ED8\u8BA4\u5355\u4F4D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](325, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](326, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](327, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](328, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](329, "'px'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](330, "h3", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](331, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](332, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](333, "nzEllipsis");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](334, "a", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](335, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](336, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](337, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](338, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](339, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](340, "\u53C2\u6570");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](341, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](342, "\u8BF4\u660E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](343, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](344, "\u7C7B\u578B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](345, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](346, "\u9ED8\u8BA4\u503C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](347, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](348, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](349, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](350, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](351, "length");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](352, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](353, "\u622A\u53D6\u957F\u5EA6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](354, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](355, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](356, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](357, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](358, "''");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](359, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](360, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](361, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](362, "suffix");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](363, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](364, "\u66FF\u6362\u5B57\u7B26");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](365, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](366, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](367, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](368, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](369, "''");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](370, "h3", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](371, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](372, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](373, "nzAggregate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](374, "a", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](375, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](376, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](377, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](378, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](379, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](380, "\u53C2\u6570");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](381, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](382, "\u8BF4\u660E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](383, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](384, "\u7C7B\u578B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](385, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](386, "\u9ED8\u8BA4\u503C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](387, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](388, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](389, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](390, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](391, "method");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](392, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](393, "\u805A\u5408\u65B9\u5F0F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](394, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](395, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](396, "'sum' | 'max' | 'min' | 'avg'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](397, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](398, "''");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](399, "h3", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](400, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](401, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](402, "nzSanitizer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](403, "a", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](404, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](405, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](406, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](407, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](408, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](409, "\u53C2\u6570");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](410, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](411, "\u8BF4\u660E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](412, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](413, "\u7C7B\u578B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](414, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](415, "\u9ED8\u8BA4\u503C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](416, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](417, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](418, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](419, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](420, "type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](421, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](422, "sanitizer \u7C7B\u578B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](423, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](424, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](425, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](426, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](427, "'html'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzOffsetTop", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzAffix", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzGutter", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-pipes-demo-bytes")("nzLink", "components-pipes-demo-bytes")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/pipes/demo/bytes.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-pipes-demo-css-unit")("nzLink", "components-pipes-demo-css-unit")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/pipes/demo/css-unit.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-pipes-demo-ellipsis")("nzLink", "components-pipes-demo-ellipsis")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/pipes/demo/ellipsis.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-pipes-demo-aggregate")("nzLink", "components-pipes-demo-aggregate")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/pipes/demo/aggregate.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-pipes-demo-safe-null")("nzLink", "components-pipes-demo-safe-null")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/pipes/demo/safe-null.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-pipes-demo-sanitizer")("nzLink", "components-pipes-demo-sanitizer")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/pipes/demo/sanitizer.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](124);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-pipes-demo-trim")("nzLink", "components-pipes-demo-trim")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/pipes/demo/trim.md");
    } }, directives: [ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_2__["NzAffixComponent"], ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_3__["NzAnchorComponent"], ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_3__["NzAnchorLinkComponent"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_4__["NzTooltipDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_5__["NzRowDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_5__["NzColDirective"], _share_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_1__["NzCodeBoxComponent"], _bytes__WEBPACK_IMPORTED_MODULE_6__["NzDemoPipesBytesComponent"], _css_unit__WEBPACK_IMPORTED_MODULE_7__["NzDemoPipesCssUnitComponent"], _ellipsis__WEBPACK_IMPORTED_MODULE_8__["NzDemoPipesEllipsisComponent"], _aggregate__WEBPACK_IMPORTED_MODULE_9__["NzDemoPipesAggregateComponent"], _safe_null__WEBPACK_IMPORTED_MODULE_10__["NzDemoPipesSafeNullComponent"], _sanitizer__WEBPACK_IMPORTED_MODULE_11__["NzDemoPipesSanitizerComponent"], _trim__WEBPACK_IMPORTED_MODULE_12__["NzDemoPipesTrimComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_13__["NzTheadComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_13__["NzTrDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_13__["NzTableCellDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_13__["NzThMeasureDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_13__["NzTbodyComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoPipesZhComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-demo-pipes',
                preserveWhitespaces: false,
                templateUrl: './zh.html'
            }]
    }], null, { codeBoxes: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"],
            args: [_share_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_1__["NzCodeBoxComponent"]]
        }] }); })();


/***/ }),

/***/ "NQGD":
/*!*****************************************!*\
  !*** ./site/doc/app/pipes/sanitizer.ts ***!
  \*****************************************/
/*! exports provided: NzDemoPipesSanitizerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoPipesSanitizerComponent", function() { return NzDemoPipesSanitizerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_pipes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/pipes */ "jeS+");



class NzDemoPipesSanitizerComponent {
    constructor() {
        this.html = `<span>I am <code>innerHTML</code></span>`;
    }
}
/** @nocollapse */ NzDemoPipesSanitizerComponent.ɵfac = function NzDemoPipesSanitizerComponent_Factory(t) { return new (t || NzDemoPipesSanitizerComponent)(); };
/** @nocollapse */ NzDemoPipesSanitizerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoPipesSanitizerComponent, selectors: [["nz-demo-pipes-sanitizer"]], decls: 2, vars: 4, consts: [[3, "innerHTML"]], template: function NzDemoPipesSanitizerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "nzSanitizer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](1, 1, ctx.html, "html"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    } }, pipes: [ng_zorro_antd_pipes__WEBPACK_IMPORTED_MODULE_1__["NzSanitizerPipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoPipesSanitizerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-demo-pipes-sanitizer',
                template: `
    <div [innerHTML]="html | nzSanitizer: 'html'"></div>
  `
            }]
    }], null, null); })();


/***/ }),

/***/ "UO73":
/*!*************************************!*\
  !*** ./site/doc/app/pipes/bytes.ts ***!
  \*************************************/
/*! exports provided: NzDemoPipesBytesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoPipesBytesComponent", function() { return NzDemoPipesBytesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_pipes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/pipes */ "jeS+");



class NzDemoPipesBytesComponent {
}
/** @nocollapse */ NzDemoPipesBytesComponent.ɵfac = function NzDemoPipesBytesComponent_Factory(t) { return new (t || NzDemoPipesBytesComponent)(); };
/** @nocollapse */ NzDemoPipesBytesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoPipesBytesComponent, selectors: [["nz-demo-pipes-bytes"]], decls: 22, vars: 26, template: function NzDemoPipesBytesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "nzBytes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "nzBytes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "nzBytes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "nzBytes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "nzBytes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "nzBytes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "nzBytes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 7, 200));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 9, 1024));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 11, 1048576));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](12, 13, 1024, 0, "KB"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 17, 1073741824));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 19, 1099511627776));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](21, 21, 1073741824, 0, "B", "MB"));
    } }, pipes: [ng_zorro_antd_pipes__WEBPACK_IMPORTED_MODULE_1__["NzBytesPipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoPipesBytesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-demo-pipes-bytes',
                template: `
    <ul>
      <li>{{ 200 | nzBytes }}</li>
      <li>{{ 1024 | nzBytes }}</li>
      <li>{{ 1048576 | nzBytes }}</li>
      <li>{{ 1024 | nzBytes: 0:'KB' }}</li>
      <li>{{ 1073741824 | nzBytes }}</li>
      <li>{{ 1099511627776 | nzBytes }}</li>
      <li>{{ 1073741824 | nzBytes: 0:'B':'MB' }}</li>
    </ul>
  `
            }]
    }], null, null); })();


/***/ }),

/***/ "UVml":
/*!*****************************************!*\
  !*** ./site/doc/app/pipes/aggregate.ts ***!
  \*****************************************/
/*! exports provided: NzDemoPipesAggregateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoPipesAggregateComponent", function() { return NzDemoPipesAggregateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/grid */ "T+9E");
/* harmony import */ var ng_zorro_antd_statistic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/statistic */ "pvw4");
/* harmony import */ var ng_zorro_antd_pipes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/pipes */ "jeS+");





const _c0 = function () { return [7, 8, 2, 3]; };
class NzDemoPipesAggregateComponent {
}
/** @nocollapse */ NzDemoPipesAggregateComponent.ɵfac = function NzDemoPipesAggregateComponent_Factory(t) { return new (t || NzDemoPipesAggregateComponent)(); };
/** @nocollapse */ NzDemoPipesAggregateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoPipesAggregateComponent, selectors: [["nz-demo-pipes-aggregate"]], decls: 13, vars: 29, consts: [[3, "nzGutter"], [3, "nzSpan"], [3, "nzValue", "nzTitle"]], template: function NzDemoPipesAggregateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-row", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-col", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "nz-statistic", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "nzAggregate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nz-col", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "nz-statistic", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "nzAggregate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nz-col", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "nz-statistic", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "nzAggregate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "nz-col", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "nz-statistic", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "nzAggregate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzGutter", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 13, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](25, _c0), "max"))("nzTitle", "Max [7, 8, 2, 3]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 16, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](26, _c0), "min"))("nzTitle", "Min [7, 8, 2, 3]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](9, 19, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](27, _c0), "sum"))("nzTitle", "Sum [7, 8, 2, 3]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](12, 22, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](28, _c0), "avg"))("nzTitle", "Avg [7, 8, 2, 3]");
    } }, directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_1__["NzRowDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_1__["NzColDirective"], ng_zorro_antd_statistic__WEBPACK_IMPORTED_MODULE_2__["NzStatisticComponent"]], pipes: [ng_zorro_antd_pipes__WEBPACK_IMPORTED_MODULE_3__["NzAggregatePipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoPipesAggregateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-demo-pipes-aggregate',
                template: `
    <nz-row [nzGutter]="16">
      <nz-col [nzSpan]="6">
        <nz-statistic [nzValue]="[7, 8, 2, 3] | nzAggregate: 'max'" [nzTitle]="'Max [7, 8, 2, 3]'"></nz-statistic>
      </nz-col>
      <nz-col [nzSpan]="6">
        <nz-statistic [nzValue]="[7, 8, 2, 3] | nzAggregate: 'min'" [nzTitle]="'Min [7, 8, 2, 3]'"></nz-statistic>
      </nz-col>
      <nz-col [nzSpan]="6">
        <nz-statistic [nzValue]="[7, 8, 2, 3] | nzAggregate: 'sum'" [nzTitle]="'Sum [7, 8, 2, 3]'"></nz-statistic>
      </nz-col>
      <nz-col [nzSpan]="6">
        <nz-statistic [nzValue]="[7, 8, 2, 3] | nzAggregate: 'avg'" [nzTitle]="'Avg [7, 8, 2, 3]'"></nz-statistic>
      </nz-col>
    </nz-row>
  `
            }]
    }], null, null); })();


/***/ }),

/***/ "c7a5":
/*!********************************************!*\
  !*** ./site/doc/app/pipes/en.component.ts ***!
  \********************************************/
/*! exports provided: NzDemoPipesEnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoPipesEnComponent", function() { return NzDemoPipesEnComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _share_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../share/codebox/codebox.component */ "rKiv");
/* harmony import */ var ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/affix */ "utH8");
/* harmony import */ var ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/anchor */ "l83q");
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ "pk25");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/grid */ "T+9E");
/* harmony import */ var _bytes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bytes */ "UO73");
/* harmony import */ var _css_unit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./css-unit */ "gvWY");
/* harmony import */ var _ellipsis__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ellipsis */ "/OUW");
/* harmony import */ var _aggregate__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./aggregate */ "UVml");
/* harmony import */ var _safe_null__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./safe-null */ "FN2R");
/* harmony import */ var _sanitizer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sanitizer */ "NQGD");
/* harmony import */ var _trim__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./trim */ "j4C4");
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/table */ "mK+R");
















class NzDemoPipesEnComponent {
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
/** @nocollapse */ NzDemoPipesEnComponent.ɵfac = function NzDemoPipesEnComponent_Factory(t) { return new (t || NzDemoPipesEnComponent)(); };
/** @nocollapse */ NzDemoPipesEnComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoPipesEnComponent, selectors: [["nz-demo-pipes"]], viewQuery: function NzDemoPipesEnComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_share_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_1__["NzCodeBoxComponent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.codeBoxes = _t);
    } }, decls: 428, vars: 32, consts: [[1, "toc-affix", 3, "nzOffsetTop"], ["nzShowInkInFixed", "", 3, "nzAffix", "nzClick"], ["nzHref", "#components-pipes-demo-bytes", "nzTitle", "nzBytes"], ["nzHref", "#components-pipes-demo-css-unit", "nzTitle", "nzToCssUnit"], ["nzHref", "#components-pipes-demo-ellipsis", "nzTitle", "nzEllipsis"], ["nzHref", "#components-pipes-demo-aggregate", "nzTitle", "nzAggregate"], ["nzHref", "#components-pipes-demo-safe-null", "nzTitle", "nzSafeNull"], ["nzHref", "#components-pipes-demo-sanitizer", "nzTitle", "nzSanitizer"], ["nzHref", "#components-pipes-demo-trim", "nzTitle", "nzTrim"], ["nzHref", "#api", "nzTitle", "API"], [1, "markdown"], [1, "subtitle"], [1, "widget"], ["href", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/pipes/doc/index.en-US.md", "target", "_blank", "rel", "noopener noreferrer", 1, "edit-button"], ["nz-icon", "", "nzType", "edit"], [2, "border-color", "#faad14"], ["id", "when-to-use"], ["onclick", "window.location.hash = 'when-to-use'", 1, "anchor"], [1, "language-ts"], [1, "token", "keyword"], [1, "token", "punctuation"], [1, "token", "string"], ["nz-icon", "", "nzType", "appstore", "nz-tooltip", "", "nzTooltipTitle", "Expand All Code", 1, "code-box-expand-trigger", 3, "click"], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", 3, "nzSpan"], ["nzTitle", "nzBytes", "nzSelector", "nz-demo-pipes-bytes", "nzGenerateCommand", "ng g ng-zorro-antd:pipes-bytes <name>", "nzComponentName", "NzDemoPipesBytesComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], ["demo", ""], ["intro", ""], ["nzTitle", "nzToCssUnit", "nzSelector", "nz-demo-pipes-css-unit", "nzGenerateCommand", "ng g ng-zorro-antd:pipes-css-unit <name>", "nzComponentName", "NzDemoPipesCssUnitComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], ["nzTitle", "nzEllipsis", "nzSelector", "nz-demo-pipes-ellipsis", "nzGenerateCommand", "ng g ng-zorro-antd:pipes-ellipsis <name>", "nzComponentName", "NzDemoPipesEllipsisComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], ["nzTitle", "nzAggregate", "nzSelector", "nz-demo-pipes-aggregate", "nzGenerateCommand", "ng g ng-zorro-antd:pipes-aggregate <name>", "nzComponentName", "NzDemoPipesAggregateComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], ["nzTitle", "nzSafeNull", "nzSelector", "nz-demo-pipes-safe-null", "nzGenerateCommand", "ng g ng-zorro-antd:pipes-safe-null <name>", "nzComponentName", "NzDemoPipesSafeNullComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], ["nzTitle", "nzSanitizer", "nzSelector", "nz-demo-pipes-sanitizer", "nzGenerateCommand", "ng g ng-zorro-antd:pipes-sanitizer <name>", "nzComponentName", "NzDemoPipesSanitizerComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], [1, "language-html"], [1, "token", "tag"], [1, "token", "attr-name"], [1, "token", "attr-value"], ["nzTitle", "nzTrim", "nzSelector", "nz-demo-pipes-trim", "nzGenerateCommand", "ng g ng-zorro-antd:pipes-trim <name>", "nzComponentName", "NzDemoPipesTrimComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], [1, "markdown", "api-container"], ["id", "api"], ["onclick", "window.location.hash = 'api'", 1, "anchor"], ["id", "<strong>nzsafenull</strong>"], ["onclick", "window.location.hash = '<strong>nzsafenull</strong>'", 1, "anchor"], ["id", "<strong>nzbytes</strong>"], ["onclick", "window.location.hash = '<strong>nzbytes</strong>'", 1, "anchor"], ["id", "<strong>nztocssunit</strong>"], ["onclick", "window.location.hash = '<strong>nztocssunit</strong>'", 1, "anchor"], ["id", "<strong>nzellipsis</strong>"], ["onclick", "window.location.hash = '<strong>nzellipsis</strong>'", 1, "anchor"], ["id", "<strong>nzaggregate</strong>"], ["onclick", "window.location.hash = '<strong>nzaggregate</strong>'", 1, "anchor"], ["id", "<strong>nzsanitizer</strong>"], ["onclick", "window.location.hash = '<strong>nzsanitizer</strong>'", 1, "anchor"]], template: function NzDemoPipesEnComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-affix", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nz-anchor", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzClick", function NzDemoPipesEnComponent_Template_nz_anchor_nzClick_2_listener($event) { return ctx.goLink($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "nz-link", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "nz-link", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "nz-link", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "nz-link", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "nz-link", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "nz-link", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "nz-link", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "nz-link", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "section", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Pipes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "section", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "blockquote", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "NG-ZORRO experiments are features that are released but not yet considered stable or production ready");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Developers and users can opt-in into these features before they are fully released. But ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "breaking changes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " may occur with any release.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Common Pipe Collections in Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h2", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "When To Use");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "After introducing Pipe, use it like angular's default Pipe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "pre", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "import");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "{");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " NzPipesModule ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "from");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "'ng-zorro-antd/pipes'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Examples");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoPipesEnComponent_Template_i_click_58_listener() { return ctx.expandAllCode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "nz-code-box", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "nz-demo-pipes-bytes", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Conversion of storage units to increase readability");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "nz-code-box", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "nz-demo-pipes-css-unit", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Css unit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "nz-code-box", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "nz-demo-pipes-ellipsis", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Truncate the string, ending with the specified string");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "nz-code-box", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "nz-demo-pipes-aggregate", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Sum, Min, Max, Average and other operations on arrays");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "nz-code-box", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "nz-demo-pipes-safe-null", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Convert Null and Undefined to the specified string");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "nz-code-box", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "nz-demo-pipes-sanitizer", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Pipe implementation of DomSanitizer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "pre", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "[innerHTML]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "html | nzSanitizer: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "html");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "[style]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "style | nzSanitizer: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "style");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "img");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "[src]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "url | nzSanitizer: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, "'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "url");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "/>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, "iframe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, "[src]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, "resourceUrl | nzSanitizer: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, "'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, "resourceUrl");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, "'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, "iframe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "nz-code-box", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](211, "nz-demo-pipes-trim", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](214, "Strip left and right empty string");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "section", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "h2", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218, "API");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "h3", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, "nzSafeNull");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](226, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](231, "Property");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](233, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](235, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](237, "Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](242, "replace");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](244, "Replace character");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](247, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](249, "''");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "h3", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](253, "nzBytes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](255, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](260, "Property");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](262, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](264, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](266, "Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](271, "decimal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](273, "Decimal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](276, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](278, "'0'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](282, "from");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](284, "Unit of current value");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](287, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](289, "'B'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](293, "to");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](295, "Units converted to target value");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](297, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](298, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](300, "''");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](301, "h3", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](303, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](304, "nzToCssUnit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "a", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](306, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](307, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](308, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](309, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](310, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](311, "Property");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](312, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](313, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](314, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](315, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](316, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](317, "Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](318, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](319, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](320, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](321, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](322, "defaultUnit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](323, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](324, "Default Unit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](325, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](326, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](327, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](328, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](329, "'px'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](330, "h3", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](331, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](332, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](333, "nzEllipsis");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](334, "a", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](335, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](336, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](337, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](338, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](339, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](340, "Property");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](341, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](342, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](343, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](344, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](345, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](346, "Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](347, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](348, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](349, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](350, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](351, "length");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](352, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](353, "Truncate length");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](354, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](355, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](356, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](357, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](358, "''");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](359, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](360, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](361, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](362, "suffix");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](363, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](364, "Replace character");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](365, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](366, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](367, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](368, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](369, "''");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](370, "h3", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](371, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](372, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](373, "nzAggregate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](374, "a", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](375, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](376, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](377, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](378, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](379, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](380, "Property");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](381, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](382, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](383, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](384, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](385, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](386, "Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](387, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](388, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](389, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](390, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](391, "type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](392, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](393, "Aggregation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](394, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](395, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](396, "'sum' | 'max' | 'min' | 'avg'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](397, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](398, "''");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](399, "h3", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](400, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](401, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](402, "nzSanitizer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](403, "a", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](404, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](405, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](406, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](407, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](408, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](409, "Property");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](410, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](411, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](412, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](413, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](414, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](415, "Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](416, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](417, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](418, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](419, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](420, "type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](421, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](422, "sanitizer type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](423, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](424, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](425, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](426, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](427, "'html'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzOffsetTop", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzAffix", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzGutter", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-pipes-demo-bytes")("nzLink", "components-pipes-demo-bytes")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/pipes/demo/bytes.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-pipes-demo-css-unit")("nzLink", "components-pipes-demo-css-unit")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/pipes/demo/css-unit.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-pipes-demo-ellipsis")("nzLink", "components-pipes-demo-ellipsis")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/pipes/demo/ellipsis.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-pipes-demo-aggregate")("nzLink", "components-pipes-demo-aggregate")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/pipes/demo/aggregate.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-pipes-demo-safe-null")("nzLink", "components-pipes-demo-safe-null")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/pipes/demo/safe-null.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-pipes-demo-sanitizer")("nzLink", "components-pipes-demo-sanitizer")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/pipes/demo/sanitizer.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](124);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-pipes-demo-trim")("nzLink", "components-pipes-demo-trim")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/pipes/demo/trim.md");
    } }, directives: [ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_2__["NzAffixComponent"], ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_3__["NzAnchorComponent"], ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_3__["NzAnchorLinkComponent"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_4__["NzTooltipDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_5__["NzRowDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_5__["NzColDirective"], _share_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_1__["NzCodeBoxComponent"], _bytes__WEBPACK_IMPORTED_MODULE_6__["NzDemoPipesBytesComponent"], _css_unit__WEBPACK_IMPORTED_MODULE_7__["NzDemoPipesCssUnitComponent"], _ellipsis__WEBPACK_IMPORTED_MODULE_8__["NzDemoPipesEllipsisComponent"], _aggregate__WEBPACK_IMPORTED_MODULE_9__["NzDemoPipesAggregateComponent"], _safe_null__WEBPACK_IMPORTED_MODULE_10__["NzDemoPipesSafeNullComponent"], _sanitizer__WEBPACK_IMPORTED_MODULE_11__["NzDemoPipesSanitizerComponent"], _trim__WEBPACK_IMPORTED_MODULE_12__["NzDemoPipesTrimComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_13__["NzTheadComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_13__["NzTrDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_13__["NzTableCellDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_13__["NzThMeasureDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_13__["NzTbodyComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoPipesEnComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-demo-pipes',
                preserveWhitespaces: false,
                templateUrl: './en.html'
            }]
    }], null, { codeBoxes: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"],
            args: [_share_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_1__["NzCodeBoxComponent"]]
        }] }); })();


/***/ }),

/***/ "gvWY":
/*!****************************************!*\
  !*** ./site/doc/app/pipes/css-unit.ts ***!
  \****************************************/
/*! exports provided: NzDemoPipesCssUnitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoPipesCssUnitComponent", function() { return NzDemoPipesCssUnitComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/slider */ "Dkbx");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng_zorro_antd_pipes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/pipes */ "jeS+");





class NzDemoPipesCssUnitComponent {
    constructor() {
        this.radiusValue = 0;
    }
}
/** @nocollapse */ NzDemoPipesCssUnitComponent.ɵfac = function NzDemoPipesCssUnitComponent_Factory(t) { return new (t || NzDemoPipesCssUnitComponent)(); };
/** @nocollapse */ NzDemoPipesCssUnitComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoPipesCssUnitComponent, selectors: [["nz-demo-pipes-css-unit"]], decls: 11, vars: 17, consts: [[3, "ngModel", "nzMax", "nzMin", "ngModelChange"], [1, "wrap"], [1, "box"]], template: function NzDemoPipesCssUnitComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-slider", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoPipesCssUnitComponent_Template_nz_slider_ngModelChange_0_listener($event) { return ctx.radiusValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "nzToCssUnit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "nzToCssUnit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "nzToCssUnit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "rem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.radiusValue)("nzMax", 100)("nzMin", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("border-radius", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 9, ctx.radiusValue));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("border-radius", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 11, ctx.radiusValue, "%"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("border-radius", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](9, 14, ctx.radiusValue, "rem"));
    } }, directives: [ng_zorro_antd_slider__WEBPACK_IMPORTED_MODULE_1__["NzSliderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]], pipes: [ng_zorro_antd_pipes__WEBPACK_IMPORTED_MODULE_3__["NzToCssUnitPipe"]], styles: [".wrap[_ngcontent-%COMP%] {\n        display: flex;\n      }\n      .box[_ngcontent-%COMP%] {\n        margin-top: 20px;\n        margin-right: 20px;\n        text-align: center;\n        line-height: 50px;\n        color: #fff;\n        width: 50px;\n        height: 50px;\n        background: #4183c4;\n      }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoPipesCssUnitComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-demo-pipes-css-unit',
                template: `
    <nz-slider [(ngModel)]="radiusValue" [nzMax]="100" [nzMin]="0"></nz-slider>

    <div class="wrap">
      <div class="box" [style.border-radius]="radiusValue | nzToCssUnit">Default</div>
      <div class="box" [style.border-radius]="radiusValue | nzToCssUnit: '%'">%</div>
      <div class="box" [style.border-radius]="radiusValue | nzToCssUnit: 'rem'">rem</div>
    </div>
  `,
                styles: [
                    `
      .wrap {
        display: flex;
      }
      .box {
        margin-top: 20px;
        margin-right: 20px;
        text-align: center;
        line-height: 50px;
        color: #fff;
        width: 50px;
        height: 50px;
        background: #4183c4;
      }
    `
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "j4C4":
/*!************************************!*\
  !*** ./site/doc/app/pipes/trim.ts ***!
  \************************************/
/*! exports provided: NzDemoPipesTrimComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoPipesTrimComponent", function() { return NzDemoPipesTrimComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/input */ "klHs");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng_zorro_antd_pipes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/pipes */ "jeS+");





class NzDemoPipesTrimComponent {
    constructor() {
        this.str = ' Ant Design ';
    }
}
/** @nocollapse */ NzDemoPipesTrimComponent.ɵfac = function NzDemoPipesTrimComponent_Factory(t) { return new (t || NzDemoPipesTrimComponent)(); };
/** @nocollapse */ NzDemoPipesTrimComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoPipesTrimComponent, selectors: [["nz-demo-pipes-trim"]], decls: 9, vars: 5, consts: [["type", "text", "nz-input", "", 3, "ngModel", "ngModelChange"]], template: function NzDemoPipesTrimComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoPipesTrimComponent_Template_input_ngModelChange_0_listener($event) { return ctx.str = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "nzTrim");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.str);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.str);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 3, ctx.str));
    } }, directives: [ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_1__["NzInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]], pipes: [ng_zorro_antd_pipes__WEBPACK_IMPORTED_MODULE_3__["NzTrimPipe"]], styles: ["div[_ngcontent-%COMP%] {\n        padding: 8px 12px;\n      }\n      pre[_ngcontent-%COMP%] {\n        display: inline-block;\n        background: #eee;\n      }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoPipesTrimComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-demo-pipes-trim',
                template: `
    <input type="text" nz-input [(ngModel)]="str" />
    <br />
    <div>
      <pre>{{ str }}</pre>
    </div>
    <div>
      <pre>{{ str | nzTrim }}</pre>
    </div>
  `,
                styles: [
                    `
      div {
        padding: 8px 12px;
      }
      pre {
        display: inline-block;
        background: #eee;
      }
    `
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "of0f":
/*!********************************************!*\
  !*** ./site/doc/app/pipes/index.module.ts ***!
  \********************************************/
/*! exports provided: NzDemoPipesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoPipesModule", function() { return NzDemoPipesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _share_share_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../share/share.module */ "WGB2");
/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./module */ "I1Xa");
/* harmony import */ var _aggregate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./aggregate */ "UVml");
/* harmony import */ var _bytes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bytes */ "UO73");
/* harmony import */ var _css_unit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./css-unit */ "gvWY");
/* harmony import */ var _ellipsis__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ellipsis */ "/OUW");
/* harmony import */ var _safe_null__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./safe-null */ "FN2R");
/* harmony import */ var _sanitizer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sanitizer */ "NQGD");
/* harmony import */ var _trim__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./trim */ "j4C4");
/* harmony import */ var _zh_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./zh.component */ "LkIp");
/* harmony import */ var _en_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./en.component */ "c7a5");
/* harmony import */ var ng_zorro_antd_pipes__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/pipes */ "jeS+");
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/table */ "mK+R");
/* harmony import */ var ng_zorro_antd_slider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/slider */ "Dkbx");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/input */ "klHs");
/* harmony import */ var ng_zorro_antd_statistic__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/statistic */ "pvw4");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/grid */ "T+9E");





















class NzDemoPipesModule {
}
/** @nocollapse */ NzDemoPipesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NzDemoPipesModule });
/** @nocollapse */ NzDemoPipesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NzDemoPipesModule_Factory(t) { return new (t || NzDemoPipesModule)(); }, imports: [[
            _share_share_module__WEBPACK_IMPORTED_MODULE_2__["ShareModule"],
            ..._module__WEBPACK_IMPORTED_MODULE_3__["moduleList"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                { path: 'en', component: _en_component__WEBPACK_IMPORTED_MODULE_12__["NzDemoPipesEnComponent"] },
                { path: 'zh', component: _zh_component__WEBPACK_IMPORTED_MODULE_11__["NzDemoPipesZhComponent"] }
            ])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NzDemoPipesModule, { declarations: [_aggregate__WEBPACK_IMPORTED_MODULE_4__["NzDemoPipesAggregateComponent"],
        _bytes__WEBPACK_IMPORTED_MODULE_5__["NzDemoPipesBytesComponent"],
        _css_unit__WEBPACK_IMPORTED_MODULE_6__["NzDemoPipesCssUnitComponent"],
        _ellipsis__WEBPACK_IMPORTED_MODULE_7__["NzDemoPipesEllipsisComponent"],
        _safe_null__WEBPACK_IMPORTED_MODULE_8__["NzDemoPipesSafeNullComponent"],
        _sanitizer__WEBPACK_IMPORTED_MODULE_9__["NzDemoPipesSanitizerComponent"],
        _trim__WEBPACK_IMPORTED_MODULE_10__["NzDemoPipesTrimComponent"],
        _zh_component__WEBPACK_IMPORTED_MODULE_11__["NzDemoPipesZhComponent"],
        _en_component__WEBPACK_IMPORTED_MODULE_12__["NzDemoPipesEnComponent"]], imports: [_share_share_module__WEBPACK_IMPORTED_MODULE_2__["ShareModule"], ng_zorro_antd_pipes__WEBPACK_IMPORTED_MODULE_13__["NzPipesModule"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_14__["NzTableModule"], ng_zorro_antd_slider__WEBPACK_IMPORTED_MODULE_15__["NzSliderModule"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_16__["NzInputModule"], ng_zorro_antd_statistic__WEBPACK_IMPORTED_MODULE_17__["NzStatisticModule"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_18__["NzGridModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoPipesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _share_share_module__WEBPACK_IMPORTED_MODULE_2__["ShareModule"],
                    ..._module__WEBPACK_IMPORTED_MODULE_3__["moduleList"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                        { path: 'en', component: _en_component__WEBPACK_IMPORTED_MODULE_12__["NzDemoPipesEnComponent"] },
                        { path: 'zh', component: _zh_component__WEBPACK_IMPORTED_MODULE_11__["NzDemoPipesZhComponent"] }
                    ])
                ],
                declarations: [
                    _aggregate__WEBPACK_IMPORTED_MODULE_4__["NzDemoPipesAggregateComponent"],
                    _bytes__WEBPACK_IMPORTED_MODULE_5__["NzDemoPipesBytesComponent"],
                    _css_unit__WEBPACK_IMPORTED_MODULE_6__["NzDemoPipesCssUnitComponent"],
                    _ellipsis__WEBPACK_IMPORTED_MODULE_7__["NzDemoPipesEllipsisComponent"],
                    _safe_null__WEBPACK_IMPORTED_MODULE_8__["NzDemoPipesSafeNullComponent"],
                    _sanitizer__WEBPACK_IMPORTED_MODULE_9__["NzDemoPipesSanitizerComponent"],
                    _trim__WEBPACK_IMPORTED_MODULE_10__["NzDemoPipesTrimComponent"],
                    _zh_component__WEBPACK_IMPORTED_MODULE_11__["NzDemoPipesZhComponent"],
                    _en_component__WEBPACK_IMPORTED_MODULE_12__["NzDemoPipesEnComponent"],
                ],
                entryComponents: []
            }]
    }], null, null); })();


/***/ })

};;
//# sourceMappingURL=pipes-index-module.js.map