exports.ids = ["affix-index-module~alert-index-module~anchor-index-module~auto-complete-index-module~avatar-index-mo~4c119977"];
exports.modules = {

/***/ "4w5G":
/*!***************************************************************!*\
  !*** ./site/doc/app/online-ide/files/dot_angular-cli.json.ts ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (`
{
  "apps": [
    {
      "root": "src",
      "outDir": "dist",
      "assets": ["assets", "favicon.ico"],
      "index": "index.html",
      "main": "main.ts",
      "polyfills": "polyfills.ts",
      "prefix": "app",
      "styles": [
        "styles.css",
        "node_modules/ng-zorro-antd/src/ng-zorro-antd.min.css",
        "node_modules/ng-zorro-antd/resizable/style/index.min.css"
      ],
      "scripts": [],
      "environmentSource": "environments/environment.ts",
      "environments": {
        "dev": "environments/environment.ts",
        "prod": "environments/environment.prod.ts"
      }
    }
  ]
}
`);


/***/ }),

/***/ "KMdG":
/*!******************************************************!*\
  !*** ./site/doc/app/share/codebox/codebox.module.ts ***!
  \******************************************************/
/*! exports provided: NzCodeBoxModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzCodeBoxModule", function() { return NzCodeBoxModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/icon */ "MOHP");
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ "pk25");
/* harmony import */ var _highlight_highlight_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../highlight/highlight.module */ "vBS8");
/* harmony import */ var _codebox_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./codebox.component */ "rKiv");







class NzCodeBoxModule {
}
/** @nocollapse */ NzCodeBoxModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: NzCodeBoxModule });
/** @nocollapse */ NzCodeBoxModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function NzCodeBoxModule_Factory(t) { return new (t || NzCodeBoxModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _highlight_highlight_module__WEBPACK_IMPORTED_MODULE_4__["NzHighlightModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_2__["NzIconModule"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_3__["NzToolTipModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NzCodeBoxModule, { declarations: [_codebox_component__WEBPACK_IMPORTED_MODULE_5__["NzCodeBoxComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _highlight_highlight_module__WEBPACK_IMPORTED_MODULE_4__["NzHighlightModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_2__["NzIconModule"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_3__["NzToolTipModule"]], exports: [_codebox_component__WEBPACK_IMPORTED_MODULE_5__["NzCodeBoxComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NzCodeBoxModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _highlight_highlight_module__WEBPACK_IMPORTED_MODULE_4__["NzHighlightModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_2__["NzIconModule"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_3__["NzToolTipModule"]],
                declarations: [_codebox_component__WEBPACK_IMPORTED_MODULE_5__["NzCodeBoxComponent"]],
                exports: [_codebox_component__WEBPACK_IMPORTED_MODULE_5__["NzCodeBoxComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "WGB2":
/*!********************************************!*\
  !*** ./site/doc/app/share/share.module.ts ***!
  \********************************************/
/*! exports provided: ShareModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareModule", function() { return ShareModule; });
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/scrolling */ "vxfF");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/affix */ "utH8");
/* harmony import */ var ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/anchor */ "l83q");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/grid */ "T+9E");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/icon */ "MOHP");
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ "pk25");
/* harmony import */ var ngx_quicklink__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-quicklink */ "FDOz");
/* harmony import */ var _codebox_codebox_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./codebox/codebox.module */ "KMdG");
/* harmony import */ var _github_btn_github_btn_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./github-btn/github-btn.module */ "pHN7");
/* harmony import */ var _highlight_highlight_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./highlight/highlight.module */ "vBS8");
















class ShareModule {
}
/** @nocollapse */ ShareModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: ShareModule });
/** @nocollapse */ ShareModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function ShareModule_Factory(t) { return new (t || ShareModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _codebox_codebox_module__WEBPACK_IMPORTED_MODULE_12__["NzCodeBoxModule"],
            _highlight_highlight_module__WEBPACK_IMPORTED_MODULE_14__["NzHighlightModule"],
            _github_btn_github_btn_module__WEBPACK_IMPORTED_MODULE_13__["NzGithubBtnModule"],
            ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_10__["NzToolTipModule"],
            ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_7__["NzAnchorModule"],
            ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_6__["NzAffixModule"],
            ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__["NzGridModule"],
            ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_9__["NzIconModule"],
            // third libs
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["DragDropModule"],
            ngx_quicklink__WEBPACK_IMPORTED_MODULE_11__["QuicklinkModule"]
        ], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
        _codebox_codebox_module__WEBPACK_IMPORTED_MODULE_12__["NzCodeBoxModule"],
        _highlight_highlight_module__WEBPACK_IMPORTED_MODULE_14__["NzHighlightModule"],
        ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_7__["NzAnchorModule"],
        ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_6__["NzAffixModule"],
        _github_btn_github_btn_module__WEBPACK_IMPORTED_MODULE_13__["NzGithubBtnModule"],
        ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__["NzGridModule"],
        ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_10__["NzToolTipModule"],
        ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_9__["NzIconModule"],
        // third libs
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ScrollingModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["DragDropModule"],
        ngx_quicklink__WEBPACK_IMPORTED_MODULE_11__["QuicklinkModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ShareModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        _codebox_codebox_module__WEBPACK_IMPORTED_MODULE_12__["NzCodeBoxModule"],
        _highlight_highlight_module__WEBPACK_IMPORTED_MODULE_14__["NzHighlightModule"],
        _github_btn_github_btn_module__WEBPACK_IMPORTED_MODULE_13__["NzGithubBtnModule"],
        ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_10__["NzToolTipModule"],
        ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_7__["NzAnchorModule"],
        ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_6__["NzAffixModule"],
        ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__["NzGridModule"],
        ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_9__["NzIconModule"],
        // third libs
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["DragDropModule"],
        ngx_quicklink__WEBPACK_IMPORTED_MODULE_11__["QuicklinkModule"]], exports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
        _codebox_codebox_module__WEBPACK_IMPORTED_MODULE_12__["NzCodeBoxModule"],
        _highlight_highlight_module__WEBPACK_IMPORTED_MODULE_14__["NzHighlightModule"],
        ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_7__["NzAnchorModule"],
        ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_6__["NzAffixModule"],
        _github_btn_github_btn_module__WEBPACK_IMPORTED_MODULE_13__["NzGithubBtnModule"],
        ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__["NzGridModule"],
        ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_10__["NzToolTipModule"],
        ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_9__["NzIconModule"],
        // third libs
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ScrollingModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["DragDropModule"],
        ngx_quicklink__WEBPACK_IMPORTED_MODULE_11__["QuicklinkModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](ShareModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                    _codebox_codebox_module__WEBPACK_IMPORTED_MODULE_12__["NzCodeBoxModule"],
                    _highlight_highlight_module__WEBPACK_IMPORTED_MODULE_14__["NzHighlightModule"],
                    _github_btn_github_btn_module__WEBPACK_IMPORTED_MODULE_13__["NzGithubBtnModule"],
                    ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_10__["NzToolTipModule"],
                    ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_7__["NzAnchorModule"],
                    ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_6__["NzAffixModule"],
                    ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__["NzGridModule"],
                    ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_9__["NzIconModule"],
                    // third libs
                    _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["DragDropModule"],
                    ngx_quicklink__WEBPACK_IMPORTED_MODULE_11__["QuicklinkModule"]
                ],
                exports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                    _codebox_codebox_module__WEBPACK_IMPORTED_MODULE_12__["NzCodeBoxModule"],
                    _highlight_highlight_module__WEBPACK_IMPORTED_MODULE_14__["NzHighlightModule"],
                    ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_7__["NzAnchorModule"],
                    ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_6__["NzAffixModule"],
                    _github_btn_github_btn_module__WEBPACK_IMPORTED_MODULE_13__["NzGithubBtnModule"],
                    ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__["NzGridModule"],
                    ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_10__["NzToolTipModule"],
                    ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_9__["NzIconModule"],
                    // third libs
                    _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ScrollingModule"],
                    _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["DragDropModule"],
                    ngx_quicklink__WEBPACK_IMPORTED_MODULE_11__["QuicklinkModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "Wm1L":
/*!******************************************************!*\
  !*** ./site/doc/app/online-ide/files/environment.ts ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (`export const environment = {
  production: false
};
`);


/***/ }),

/***/ "Z4zo":
/*!*************************************************************!*\
  !*** ./site/doc/app/share/highlight/highlight.component.ts ***!
  \*************************************************************/
/*! exports provided: NzHighlightComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzHighlightComponent", function() { return NzHighlightComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




const _c0 = ["code"];
class NzHighlightComponent {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
        this.code = '';
    }
    get nzCode() {
        return this.code || '';
    }
    set nzCode(value) {
        this.code = this.sanitizer.bypassSecurityTrustHtml(value);
    }
    ngOnInit() { }
}
/** @nocollapse */ NzHighlightComponent.ɵfac = function NzHighlightComponent_Factory(t) { return new (t || NzHighlightComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"])); };
/** @nocollapse */ NzHighlightComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzHighlightComponent, selectors: [["nz-highlight"]], viewQuery: function NzHighlightComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.codeElement = _t.first);
    } }, inputs: { nzLanguage: "nzLanguage", nzCode: "nzCode" }, decls: 2, vars: 1, consts: [[1, "language-angular"], [3, "innerHTML"]], template: function NzHighlightComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pre", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "code", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.code, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    } }, encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzHighlightComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-highlight',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                template: `
    <pre class="language-angular"><code [innerHTML]="code"></code></pre>
  `
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"] }]; }, { codeElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['code', { static: true }]
        }], nzLanguage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzCode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "bEZI":
/*!***************************************************************!*\
  !*** ./site/doc/app/online-ide/files/ng-zorro-antd.module.ts ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (`
import { NgModule } from '@angular/core';

import { NzAffixModule } from 'ng-zorro-antd/affix';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzAnchorModule } from 'ng-zorro-antd/anchor';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzBackTopModule } from 'ng-zorro-antd/back-top';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCalendarModule } from 'ng-zorro-antd/calendar';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzCascaderModule } from 'ng-zorro-antd/cascader';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzCommentModule } from 'ng-zorro-antd/comment';
import { NzNoAnimationModule } from 'ng-zorro-antd/core/no-animation';
import { NzTransButtonModule } from 'ng-zorro-antd/core/trans-button';
import { NzWaveModule } from 'ng-zorro-antd/core/wave';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzI18nModule } from 'ng-zorro-antd/i18n';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzMentionModule } from 'ng-zorro-antd/mention';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { NzResultModule } from 'ng-zorro-antd/result';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzSliderModule } from 'ng-zorro-antd/slider';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';
import { NzTimelineModule } from 'ng-zorro-antd/timeline';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzTransferModule } from 'ng-zorro-antd/transfer';
import { NzTreeModule } from 'ng-zorro-antd/tree';
import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzResizableModule } from 'ng-zorro-antd/resizable';
import { NzPipesModule } from 'ng-zorro-antd/pipes';

@NgModule({
  exports: [
    NzAffixModule,
    NzAlertModule,
    NzAnchorModule,
    NzAutocompleteModule,
    NzAvatarModule,
    NzBackTopModule,
    NzBadgeModule,
    NzButtonModule,
    NzBreadCrumbModule,
    NzCalendarModule,
    NzCardModule,
    NzCarouselModule,
    NzCascaderModule,
    NzCheckboxModule,
    NzCollapseModule,
    NzCommentModule,
    NzDatePickerModule,
    NzDescriptionsModule,
    NzDividerModule,
    NzDrawerModule,
    NzDropDownModule,
    NzEmptyModule,
    NzFormModule,
    NzGridModule,
    NzI18nModule,
    NzIconModule,
    NzInputModule,
    NzInputNumberModule,
    NzLayoutModule,
    NzListModule,
    NzMentionModule,
    NzMenuModule,
    NzMessageModule,
    NzModalModule,
    NzNoAnimationModule,
    NzNotificationModule,
    NzPageHeaderModule,
    NzPaginationModule,
    NzPopconfirmModule,
    NzPopoverModule,
    NzProgressModule,
    NzRadioModule,
    NzRateModule,
    NzResultModule,
    NzSelectModule,
    NzSkeletonModule,
    NzSliderModule,
    NzSpinModule,
    NzStatisticModule,
    NzStepsModule,
    NzSwitchModule,
    NzTableModule,
    NzTabsModule,
    NzTagModule,
    NzTimePickerModule,
    NzTimelineModule,
    NzToolTipModule,
    NzTransButtonModule,
    NzTransferModule,
    NzTreeModule,
    NzTreeSelectModule,
    NzTypographyModule,
    NzUploadModule,
    NzWaveModule,
    NzResizableModule,
    NzPipesModule,
  ]
})
export class DemoNgZorroAntdModule {

}
`);


/***/ }),

/***/ "l+0x":
/*!*******************************************************!*\
  !*** ./site/doc/app/online-ide/files/angular.json.ts ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
    $schema: './node_modules/@angular/cli/lib/config/schema.json',
    version: 1,
    newProjectRoot: 'projects',
    projects: {
        demo: {
            root: '',
            sourceRoot: 'src',
            projectType: 'application',
            prefix: 'app',
            architect: {
                build: {
                    builder: '@angular-devkit/build-angular:browser',
                    options: {
                        outputPath: 'dist/demo',
                        index: 'src/index.html',
                        main: 'src/main.ts',
                        polyfills: 'src/polyfills.ts',
                        tsConfig: 'src/tsconfig.app.json',
                        assets: ['src/favicon.ico', 'src/assets'],
                        styles: [
                            'node_modules/ng-zorro-antd/src/ng-zorro-antd.min.css',
                            'node_modules/ng-zorro-antd/resizable/style/index.min.css',
                            'src/styles.css'
                        ]
                    }
                }
            }
        }
    },
    defaultProject: 'demo'
});


/***/ }),

/***/ "l83q":
/*!***************************************************************!*\
  !*** ./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-anchor.js ***!
  \***************************************************************/
/*! exports provided: NzAnchorComponent, NzAnchorLinkComponent, NzAnchorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzAnchorComponent", function() { return NzAnchorComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzAnchorLinkComponent", function() { return NzAnchorLinkComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzAnchorModule", function() { return NzAnchorModule; });
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/platform */ "nLfN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "zOht");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/config */ "8IHs");
/* harmony import */ var ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/core/services */ "amOf");
/* harmony import */ var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/core/util */ "d1+9");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/affix */ "utH8");











/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */







const _c0 = ["ink"];
function NzAnchorComponent_nz_affix_0_ng_template_1_Template(rf, ctx) { }
function NzAnchorComponent_nz_affix_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nz-affix", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NzAnchorComponent_nz_affix_0_ng_template_1_Template, 0, 0, "ng-template", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzOffsetTop", ctx_r0.nzOffsetTop)("nzTarget", ctx_r0.container);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r1);
} }
const _c1 = function (a0) { return { fixed: a0 }; };
function NzAnchorComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 7, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx_r2.wrapperStyle);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c1, !ctx_r2.nzAffix && !ctx_r2.nzShowInkInFixed));
} }
const _c2 = ["*"];
const _c3 = ["nzTemplate"];
const _c4 = ["linkTitle"];
function NzAnchorLinkComponent_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.titleStr);
} }
function getOffsetTop(element, container) {
    if (!element || !element.getClientRects().length) {
        return 0;
    }
    const rect = element.getBoundingClientRect();
    if (rect.width || rect.height) {
        if (container === window) {
            const documentElement = element.ownerDocument.documentElement;
            return rect.top - documentElement.clientTop;
        }
        return rect.top - container.getBoundingClientRect().top;
    }
    return rect.top;
}

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
const NZ_CONFIG_MODULE_NAME = 'anchor';
const sharpMatcherRegx = /#([^#]+)$/;
class NzAnchorComponent {
    constructor(doc, nzConfigService, scrollSrv, cdr, platform, zone, renderer) {
        this.doc = doc;
        this.nzConfigService = nzConfigService;
        this.scrollSrv = scrollSrv;
        this.cdr = cdr;
        this.platform = platform;
        this.zone = zone;
        this.renderer = renderer;
        this._nzModuleName = NZ_CONFIG_MODULE_NAME;
        this.nzAffix = true;
        this.nzShowInkInFixed = false;
        this.nzBounds = 5;
        this.nzOffsetTop = undefined;
        this.nzClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.nzScroll = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.visible = false;
        this.wrapperStyle = { 'max-height': '100vh' };
        this.links = [];
        this.animating = false;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.handleScrollTimeoutID = -1;
    }
    registerLink(link) {
        this.links.push(link);
    }
    unregisterLink(link) {
        this.links.splice(this.links.indexOf(link), 1);
    }
    getContainer() {
        return this.container || window;
    }
    ngAfterViewInit() {
        this.registerScrollEvent();
    }
    ngOnDestroy() {
        clearTimeout(this.handleScrollTimeoutID);
        this.destroy$.next();
        this.destroy$.complete();
    }
    registerScrollEvent() {
        if (!this.platform.isBrowser) {
            return;
        }
        this.destroy$.next();
        this.zone.runOutsideAngular(() => {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["fromEvent"])(this.getContainer(), 'scroll')
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["throttleTime"])(50), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this.destroy$))
                .subscribe(() => this.handleScroll());
        });
        // Browser would maintain the scrolling position when refreshing.
        // So we have to delay calculation in avoid of getting a incorrect result.
        this.handleScrollTimeoutID = setTimeout(() => this.handleScroll());
    }
    handleScroll() {
        if (typeof document === 'undefined' || this.animating) {
            return;
        }
        const sections = [];
        const scope = (this.nzOffsetTop || 0) + this.nzBounds;
        this.links.forEach(comp => {
            const sharpLinkMatch = sharpMatcherRegx.exec(comp.nzHref.toString());
            if (!sharpLinkMatch) {
                return;
            }
            const target = this.doc.getElementById(sharpLinkMatch[1]);
            if (target) {
                const top = getOffsetTop(target, this.getContainer());
                if (top < scope) {
                    sections.push({
                        top,
                        comp
                    });
                }
            }
        });
        this.visible = !!sections.length;
        if (!this.visible) {
            this.clearActive();
            this.cdr.detectChanges();
        }
        else {
            const maxSection = sections.reduce((prev, curr) => (curr.top > prev.top ? curr : prev));
            this.handleActive(maxSection.comp);
        }
        this.setVisible();
    }
    clearActive() {
        this.links.forEach(i => {
            i.unsetActive();
        });
    }
    handleActive(comp) {
        this.clearActive();
        comp.setActive();
        const linkNode = comp.getLinkTitleElement();
        this.ink.nativeElement.style.top = `${linkNode.offsetTop + linkNode.clientHeight / 2 - 4.5}px`;
        this.visible = true;
        this.setVisible();
        this.nzScroll.emit(comp);
    }
    setVisible() {
        const visible = this.visible;
        const visibleClassname = 'visible';
        if (this.ink) {
            if (visible) {
                this.renderer.addClass(this.ink.nativeElement, visibleClassname);
            }
            else {
                this.renderer.removeClass(this.ink.nativeElement, visibleClassname);
            }
        }
    }
    handleScrollTo(linkComp) {
        const el = this.doc.querySelector(linkComp.nzHref);
        if (!el) {
            return;
        }
        this.animating = true;
        const containerScrollTop = this.scrollSrv.getScroll(this.getContainer());
        const elOffsetTop = getOffsetTop(el, this.getContainer());
        const targetScrollTop = containerScrollTop + elOffsetTop - (this.nzOffsetTop || 0);
        this.scrollSrv.scrollTo(this.getContainer(), targetScrollTop, undefined, () => {
            this.animating = false;
            this.handleActive(linkComp);
        });
        this.nzClick.emit(linkComp.nzHref);
    }
    ngOnChanges(changes) {
        const { nzOffsetTop, nzContainer } = changes;
        if (nzOffsetTop) {
            this.wrapperStyle = {
                'max-height': `calc(100vh - ${this.nzOffsetTop}px)`
            };
        }
        if (nzContainer) {
            const container = this.nzContainer;
            this.container = typeof container === 'string' ? this.doc.querySelector(container) : container;
            this.registerScrollEvent();
        }
    }
}
/** @nocollapse */
NzAnchorComponent.ɵfac = function NzAnchorComponent_Factory(t) { return new (t || NzAnchorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_4__["NzConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_5__["NzScrollService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"])); };
/** @nocollapse */
NzAnchorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NzAnchorComponent, selectors: [["nz-anchor"]], viewQuery: function NzAnchorComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.ink = _t.first);
    } }, inputs: { nzAffix: "nzAffix", nzShowInkInFixed: "nzShowInkInFixed", nzBounds: "nzBounds", nzOffsetTop: "nzOffsetTop", nzContainer: "nzContainer" }, outputs: { nzClick: "nzClick", nzScroll: "nzScroll" }, exportAs: ["nzAnchor"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c2, decls: 3, vars: 2, consts: [[3, "nzOffsetTop", "nzTarget", 4, "ngIf", "ngIfElse"], ["content", ""], [3, "nzOffsetTop", "nzTarget"], [3, "ngTemplateOutlet"], [1, "ant-anchor-wrapper", 3, "ngStyle"], [1, "ant-anchor", 3, "ngClass"], [1, "ant-anchor-ink"], [1, "ant-anchor-ink-ball"], ["ink", ""]], template: function NzAnchorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, NzAnchorComponent_nz_affix_0_Template, 2, 3, "nz-affix", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NzAnchorComponent_ng_template_1_Template, 6, 4, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.nzAffix)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_9__["NzAffixComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]], encapsulation: 2, changeDetection: 0 });
NzAnchorComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"],] }] },
    { type: ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_4__["NzConfigService"] },
    { type: ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_5__["NzScrollService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["Platform"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }
];
NzAnchorComponent.propDecorators = {
    ink: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['ink', { static: false },] }],
    nzAffix: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    nzShowInkInFixed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    nzBounds: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    nzOffsetTop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    nzContainer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    nzClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    nzScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
};
Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_6__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__metadata"])("design:type", Object)
], NzAnchorComponent.prototype, "nzAffix", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([
    Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_4__["WithConfig"])(),
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_6__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__metadata"])("design:type", Boolean)
], NzAnchorComponent.prototype, "nzShowInkInFixed", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([
    Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_4__["WithConfig"])(),
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_6__["InputNumber"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__metadata"])("design:type", Number)
], NzAnchorComponent.prototype, "nzBounds", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_6__["InputNumber"])(undefined),
    Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_4__["WithConfig"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__metadata"])("design:type", Number)
], NzAnchorComponent.prototype, "nzOffsetTop", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NzAnchorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'nz-anchor',
                exportAs: 'nzAnchor',
                preserveWhitespaces: false,
                template: `
    <nz-affix *ngIf="nzAffix; else content" [nzOffsetTop]="nzOffsetTop" [nzTarget]="container">
      <ng-template [ngTemplateOutlet]="content"></ng-template>
    </nz-affix>
    <ng-template #content>
      <div class="ant-anchor-wrapper" [ngStyle]="wrapperStyle">
        <div class="ant-anchor" [ngClass]="{ fixed: !nzAffix && !nzShowInkInFixed }">
          <div class="ant-anchor-ink">
            <div class="ant-anchor-ink-ball" #ink></div>
          </div>
          <ng-content></ng-content>
        </div>
      </div>
    </ng-template>
  `,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]
            }] }, { type: ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_4__["NzConfigService"] }, { type: ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_5__["NzScrollService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["Platform"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }]; }, { nzAffix: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], nzShowInkInFixed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], nzBounds: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], nzOffsetTop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], nzClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], nzScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], ink: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['ink', { static: false }]
        }], nzContainer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzAnchorLinkComponent {
    constructor(elementRef, anchorComp, platform, renderer) {
        this.elementRef = elementRef;
        this.anchorComp = anchorComp;
        this.platform = platform;
        this.renderer = renderer;
        this.nzHref = '#';
        this.titleStr = '';
        this.renderer.addClass(elementRef.nativeElement, 'ant-anchor-link');
    }
    set nzTitle(value) {
        if (value instanceof _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]) {
            this.titleStr = null;
            this.titleTpl = value;
        }
        else {
            this.titleStr = value;
        }
    }
    ngOnInit() {
        this.anchorComp.registerLink(this);
    }
    getLinkTitleElement() {
        return this.linkTitle.nativeElement;
    }
    setActive() {
        this.renderer.addClass(this.elementRef.nativeElement, 'ant-anchor-link-active');
    }
    unsetActive() {
        this.renderer.removeClass(this.elementRef.nativeElement, 'ant-anchor-link-active');
    }
    goToClick(e) {
        e.preventDefault();
        e.stopPropagation();
        if (this.platform.isBrowser) {
            this.anchorComp.handleScrollTo(this);
        }
    }
    ngOnDestroy() {
        this.anchorComp.unregisterLink(this);
    }
}
/** @nocollapse */
NzAnchorLinkComponent.ɵfac = function NzAnchorLinkComponent_Factory(t) { return new (t || NzAnchorLinkComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](NzAnchorComponent), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"])); };
/** @nocollapse */
NzAnchorLinkComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NzAnchorLinkComponent, selectors: [["nz-link"]], contentQueries: function NzAnchorLinkComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, _c3, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.nzTemplate = _t.first);
    } }, viewQuery: function NzAnchorLinkComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c4, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.linkTitle = _t.first);
    } }, inputs: { nzHref: "nzHref", nzTitle: "nzTitle" }, exportAs: ["nzLink"], ngContentSelectors: _c2, decls: 4, vars: 4, consts: [[1, "ant-anchor-link-title", 3, "href", "title", "click"], ["linkTitle", ""], [4, "ngIf", "ngIfElse"]], template: function NzAnchorLinkComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NzAnchorLinkComponent_Template_a_click_0_listener($event) { return ctx.goToClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, NzAnchorLinkComponent_span_2_Template, 2, 1, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", ctx.nzHref, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("title", ctx.titleStr);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.titleStr)("ngIfElse", ctx.titleTpl || ctx.nzTemplate);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], encapsulation: 2, changeDetection: 0 });
NzAnchorLinkComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: NzAnchorComponent },
    { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["Platform"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }
];
NzAnchorLinkComponent.propDecorators = {
    nzHref: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    nzTitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    nzTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"], args: ['nzTemplate', { static: false },] }],
    linkTitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['linkTitle',] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NzAnchorLinkComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'nz-link',
                exportAs: 'nzLink',
                preserveWhitespaces: false,
                template: `
    <a #linkTitle (click)="goToClick($event)" href="{{ nzHref }}" class="ant-anchor-link-title" title="{{ titleStr }}">
      <span *ngIf="titleStr; else titleTpl || nzTemplate">{{ titleStr }}</span>
    </a>
    <ng-content></ng-content>
  `,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: NzAnchorComponent }, { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["Platform"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }]; }, { nzHref: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], nzTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], nzTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
            args: ['nzTemplate', { static: false }]
        }], linkTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['linkTitle']
        }] }); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzAnchorModule {
}
/** @nocollapse */
NzAnchorModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: NzAnchorModule });
/** @nocollapse */
NzAnchorModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function NzAnchorModule_Factory(t) { return new (t || NzAnchorModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_9__["NzAffixModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["PlatformModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NzAnchorModule, { declarations: function () { return [NzAnchorComponent, NzAnchorLinkComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_9__["NzAffixModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["PlatformModule"]]; }, exports: function () { return [NzAnchorComponent, NzAnchorLinkComponent]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NzAnchorModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [NzAnchorComponent, NzAnchorLinkComponent],
                exports: [NzAnchorComponent, NzAnchorLinkComponent],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_9__["NzAffixModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["PlatformModule"]]
            }]
    }], null, null); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=ng-zorro-antd-anchor.js.map

/***/ }),

/***/ "nLPR":
/*!***************************************************************!*\
  !*** ./site/doc/app/share/github-btn/github-btn.component.ts ***!
  \***************************************************************/
/*! exports provided: NzGithubBtnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzGithubBtnComponent", function() { return NzGithubBtnComponent; });
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/platform */ "nLfN");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");







function NzGithubBtnComponent_a_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", "https://github.com/" + ctx_r0.org + "/" + ctx_r0.repo + "/stargazers", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-label", ctx_r0.starCount + " stargazers on GitHub");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](5, 3, ctx_r0.starCount, ".0-0"));
} }
class NzGithubBtnComponent {
    constructor(http, cdr, platform) {
        this.http = http;
        this.cdr = cdr;
        this.platform = platform;
        this.starCount = 0;
        this.org = 'NG-ZORRO';
        this.repo = 'ng-zorro-antd';
    }
    getStar() {
        this.http
            .get(`https://api.github.com/repos/${this.org}/${this.repo}`)
            .subscribe((res) => {
            this.starCount = res.stargazers_count;
            this.cdr.markForCheck();
        });
    }
    ngOnInit() {
        if (!this.platform.isBrowser) {
            return;
        }
        this.getStar();
    }
}
/** @nocollapse */ NzGithubBtnComponent.ɵfac = function NzGithubBtnComponent_Factory(t) { return new (t || NzGithubBtnComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["Platform"])); };
/** @nocollapse */ NzGithubBtnComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NzGithubBtnComponent, selectors: [["nz-github-btn"]], decls: 6, vars: 3, consts: [["target", "_blank", 1, "btn", 3, "href"], ["version", "1.1", "width", "16", "height", "16", "viewBox", "0 0 16 16", "aria-hidden", "true", 1, "octicon", "octicon-mark-github"], ["fill-rule", "evenodd", "d", "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"], ["class", "social-count", "target", "_blank", 3, "href", 4, "ngIf"], ["target", "_blank", 1, "social-count", 3, "href"]], template: function NzGithubBtnComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "svg", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "path", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Star");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, NzGithubBtnComponent_a_5_Template, 6, 6, "a", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", "https://github.com/" + ctx.org + "/" + ctx.repo, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-label", "Star " + ctx.org + "/" + ctx.repo + " on GitHub");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.starCount > 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DecimalPipe"]], styles: ["nz-github-btn a {\n  color: #24292e;\n  text-decoration: none;\n  outline: 0;\n}\nnz-github-btn .btn,\nnz-github-btn .social-count {\n  display: inline-block;\n  height: 14px;\n  padding: 2px 5px;\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 14px;\n  vertical-align: middle;\n  cursor: pointer;\n  border: 1px solid #c5c9cc;\n  border-radius: 0.25em;\n  box-sizing: initial;\n  margin-bottom: 2px;\n}\nnz-github-btn .octicon {\n  display: inline-block;\n  vertical-align: text-top;\n  fill: currentColor;\n  margin-right: 4px;\n}\nnz-github-btn .btn {\n  height: 16px;\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 16px;\n  background-color: #eff3f6;\n  background-image: linear-gradient(180deg, #fafbfc, #eff3f6 90%);\n  background-position: -1px -1px;\n  background-repeat: repeat-x;\n  background-size: 110% 110%;\n  border-color: rgba(27, 31, 35, 0.2);\n  ms-filter: \"progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FFFAFBFC', endColorstr='#FFEEF2F5')\";\n}\nnz-github-btn .btn:hover,\nnz-github-btn .btn:focus {\n  color: #24292e;\n  background-color: #e6ebf1;\n  background-image: linear-gradient(180deg, #f0f3f6, #e6ebf1 90%);\n  border-color: #a5a9ac;\n  border-color: rgba(27, 31, 35, 0.35);\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FFF0F3F6', endColorstr='#FFE5EAF0')\";\n}\nnz-github-btn .social-count {\n  margin-left: 6px;\n  height: 16px;\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 16px;\n  position: relative;\n  background-color: #fff;\n}\nnz-github-btn .social-count b,\nnz-github-btn .social-count i {\n  position: absolute;\n  top: 50%;\n  left: 0;\n  display: block;\n  width: 0;\n  height: 0;\n  margin: -4px 0 0 -4px;\n  border: solid transparent;\n  border-width: 4px 4px 4px 0;\n}\nnz-github-btn .social-count b {\n  border-right-color: #c5c9cc;\n  margin: -5px 0 0 -5px;\n  border-width: 5px 5px 5px 0;\n}\nnz-github-btn .social-count i {\n  margin: -5px 0 0 -4px;\n  border-width: 5px 5px 5px 0;\n  border-right-color: #fff;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZzdHMvd29yay8xL3Mvc2l0ZS9kb2MvYXBwL3NoYXJlL2dpdGh1Yi1idG4vZ2l0aHViLWJ0bi5jb21wb25lbnQubGVzcyIsInNpdGUvZG9jL2FwcC9zaGFyZS9naXRodWItYnRuL2dpdGh1Yi1idG4uY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxVQUFBO0FDQUo7QURKQTs7RUFRSSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNBSjtBRG5CQTtFQXVCSSxxQkFBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ0RKO0FEekJBO0VBOEJJLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBR0EsK0RBQUE7RUFDQSw4QkFBQTtFQUNBLDJCQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQ0FBQTtFQUNBLDJHQUFBO0FDRko7QURJSTs7RUFDRSxjQUFBO0VBQ0EseUJBQUE7RUFHQSwrREFBQTtFQUNBLHFCQUFBO0VBQ0Esb0NBQUE7RUFDQSw0R0FBQTtBQ0ROO0FEbkRBO0VBeURJLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQ0hKO0FENURBOztFQW1FSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0VBQ0EsY0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLDJCQUFBO0FDSEo7QUR4RUE7RUErRUksMkJBQUE7RUFDQSxxQkFBQTtFQUNBLDJCQUFBO0FDSko7QUQ3RUE7RUFxRkkscUJBQUE7RUFDQSwyQkFBQTtFQUNBLHdCQUFBO0FDTEoiLCJmaWxlIjoic2l0ZS9kb2MvYXBwL3NoYXJlL2dpdGh1Yi1idG4vZ2l0aHViLWJ0bi5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIm56LWdpdGh1Yi1idG4ge1xuICBhIHtcbiAgICBjb2xvcjogIzI0MjkyZTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgb3V0bGluZTogMDtcbiAgfVxuXG4gIC5idG4sIC5zb2NpYWwtY291bnQge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBoZWlnaHQ6IDE0cHg7XG4gICAgcGFkZGluZzogMnB4IDVweDtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBsaW5lLWhlaWdodDogMTRweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYzVjOWNjO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVlbTtcbiAgICBib3gtc2l6aW5nOiBpbml0aWFsO1xuICAgIG1hcmdpbi1ib3R0b206IDJweDtcbiAgfVxuXG4gIC5vY3RpY29uIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdmVydGljYWwtYWxpZ246IHRleHQtdG9wO1xuICAgIGZpbGw6IGN1cnJlbnRDb2xvcjtcbiAgICBtYXJnaW4tcmlnaHQ6IDRweDtcbiAgfVxuXG4gIC5idG4ge1xuICAgIGhlaWdodDogMTZweDtcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VmZjNmNjtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICNmYWZiZmMsICNlZmYzZjYgOTAlKTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsICNmYWZiZmMsICNlZmYzZjYgOTAlKTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjZmFmYmZjLCAjZWZmM2Y2IDkwJSk7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTFweCAtMXB4O1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDExMCUgMTEwJTtcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMjcsIDMxLCAzNSwgMC4yKTtcbiAgICBtcy1maWx0ZXI6IFwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkdyYWRpZW50KHN0YXJ0Q29sb3JzdHI9JyNGRkZBRkJGQycsIGVuZENvbG9yc3RyPScjRkZFRUYyRjUnKVwiO1xuXG4gICAgJjpob3ZlciwgJjpmb2N1cyB7XG4gICAgICBjb2xvcjogIzI0MjkyZTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlNmViZjE7XG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICNmMGYzZjYsICNlNmViZjEgOTAlKTtcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgI2YwZjNmNiwgI2U2ZWJmMSA5MCUpO1xuICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgI2YwZjNmNiwgI2U2ZWJmMSA5MCUpO1xuICAgICAgYm9yZGVyLWNvbG9yOiAjYTVhOWFjO1xuICAgICAgYm9yZGVyLWNvbG9yOiByZ2JhKDI3LDMxLDM1LDAuMzUpO1xuICAgICAgLW1zLWZpbHRlcjogXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuR3JhZGllbnQoc3RhcnRDb2xvcnN0cj0nI0ZGRjBGM0Y2JywgZW5kQ29sb3JzdHI9JyNGRkU1RUFGMCcpXCI7XG4gICAgfVxuICB9XG5cbiAgLnNvY2lhbC1jb3VudCB7XG4gICAgbWFyZ2luLWxlZnQ6IDZweDtcbiAgICBoZWlnaHQ6IDE2cHg7XG4gICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB9XG5cbiAgLnNvY2lhbC1jb3VudCBiLCAuc29jaWFsLWNvdW50IGkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiAwO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAwO1xuICAgIGhlaWdodDogMDtcbiAgICBtYXJnaW46IC00cHggMCAwIC00cHg7XG4gICAgYm9yZGVyOiBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItd2lkdGg6IDRweCA0cHggNHB4IDA7XG4gIH1cblxuICAuc29jaWFsLWNvdW50IGIge1xuICAgIGJvcmRlci1yaWdodC1jb2xvcjogI2M1YzljYztcbiAgICBtYXJnaW46IC01cHggMCAwIC01cHg7XG4gICAgYm9yZGVyLXdpZHRoOiA1cHggNXB4IDVweCAwO1xuICB9XG5cbiAgLnNvY2lhbC1jb3VudCBpIHtcbiAgICBtYXJnaW46IC01cHggMCAwIC00cHg7XG4gICAgYm9yZGVyLXdpZHRoOiA1cHggNXB4IDVweCAwO1xuICAgIGJvcmRlci1yaWdodC1jb2xvcjogI2ZmZjtcbiAgfVxufSIsIm56LWdpdGh1Yi1idG4gYSB7XG4gIGNvbG9yOiAjMjQyOTJlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIG91dGxpbmU6IDA7XG59XG5uei1naXRodWItYnRuIC5idG4sXG5uei1naXRodWItYnRuIC5zb2NpYWwtY291bnQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGhlaWdodDogMTRweDtcbiAgcGFkZGluZzogMnB4IDVweDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBsaW5lLWhlaWdodDogMTRweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXI6IDFweCBzb2xpZCAjYzVjOWNjO1xuICBib3JkZXItcmFkaXVzOiAwLjI1ZW07XG4gIGJveC1zaXppbmc6IGluaXRpYWw7XG4gIG1hcmdpbi1ib3R0b206IDJweDtcbn1cbm56LWdpdGh1Yi1idG4gLm9jdGljb24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiB0ZXh0LXRvcDtcbiAgZmlsbDogY3VycmVudENvbG9yO1xuICBtYXJnaW4tcmlnaHQ6IDRweDtcbn1cbm56LWdpdGh1Yi1idG4gLmJ0biB7XG4gIGhlaWdodDogMTZweDtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZmYzZjY7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgI2ZhZmJmYywgI2VmZjNmNiA5MCUpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsICNmYWZiZmMsICNlZmYzZjYgOTAlKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgI2ZhZmJmYywgI2VmZjNmNiA5MCUpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMXB4IC0xcHg7XG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcbiAgYmFja2dyb3VuZC1zaXplOiAxMTAlIDExMCU7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgyNywgMzEsIDM1LCAwLjIpO1xuICBtcy1maWx0ZXI6IFwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkdyYWRpZW50KHN0YXJ0Q29sb3JzdHI9JyNGRkZBRkJGQycsIGVuZENvbG9yc3RyPScjRkZFRUYyRjUnKVwiO1xufVxubnotZ2l0aHViLWJ0biAuYnRuOmhvdmVyLFxubnotZ2l0aHViLWJ0biAuYnRuOmZvY3VzIHtcbiAgY29sb3I6ICMyNDI5MmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNmViZjE7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgI2YwZjNmNiwgI2U2ZWJmMSA5MCUpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsICNmMGYzZjYsICNlNmViZjEgOTAlKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgI2YwZjNmNiwgI2U2ZWJmMSA5MCUpO1xuICBib3JkZXItY29sb3I6ICNhNWE5YWM7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgyNywgMzEsIDM1LCAwLjM1KTtcbiAgLW1zLWZpbHRlcjogXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuR3JhZGllbnQoc3RhcnRDb2xvcnN0cj0nI0ZGRjBGM0Y2JywgZW5kQ29sb3JzdHI9JyNGRkU1RUFGMCcpXCI7XG59XG5uei1naXRodWItYnRuIC5zb2NpYWwtY291bnQge1xuICBtYXJnaW4tbGVmdDogNnB4O1xuICBoZWlnaHQ6IDE2cHg7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5uei1naXRodWItYnRuIC5zb2NpYWwtY291bnQgYixcbm56LWdpdGh1Yi1idG4gLnNvY2lhbC1jb3VudCBpIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIG1hcmdpbjogLTRweCAwIDAgLTRweDtcbiAgYm9yZGVyOiBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXdpZHRoOiA0cHggNHB4IDRweCAwO1xufVxubnotZ2l0aHViLWJ0biAuc29jaWFsLWNvdW50IGIge1xuICBib3JkZXItcmlnaHQtY29sb3I6ICNjNWM5Y2M7XG4gIG1hcmdpbjogLTVweCAwIDAgLTVweDtcbiAgYm9yZGVyLXdpZHRoOiA1cHggNXB4IDVweCAwO1xufVxubnotZ2l0aHViLWJ0biAuc29jaWFsLWNvdW50IGkge1xuICBtYXJnaW46IC01cHggMCAwIC00cHg7XG4gIGJvcmRlci13aWR0aDogNXB4IDVweCA1cHggMDtcbiAgYm9yZGVyLXJpZ2h0LWNvbG9yOiAjZmZmO1xufVxuIl19 */"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NzGithubBtnComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'nz-github-btn',
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
                templateUrl: './github-btn.component.html',
                styleUrls: ['./github-btn.component.less']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] }, { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["Platform"] }]; }, null); })();


/***/ }),

/***/ "pHN7":
/*!************************************************************!*\
  !*** ./site/doc/app/share/github-btn/github-btn.module.ts ***!
  \************************************************************/
/*! exports provided: NzGithubBtnModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzGithubBtnModule", function() { return NzGithubBtnModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _github_btn_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./github-btn.component */ "nLPR");





class NzGithubBtnModule {
}
/** @nocollapse */ NzGithubBtnModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: NzGithubBtnModule });
/** @nocollapse */ NzGithubBtnModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function NzGithubBtnModule_Factory(t) { return new (t || NzGithubBtnModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](NzGithubBtnModule, { declarations: [_github_btn_component__WEBPACK_IMPORTED_MODULE_3__["NzGithubBtnComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]], exports: [_github_btn_component__WEBPACK_IMPORTED_MODULE_3__["NzGithubBtnComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NzGithubBtnModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]],
                declarations: [_github_btn_component__WEBPACK_IMPORTED_MODULE_3__["NzGithubBtnComponent"]],
                exports: [_github_btn_component__WEBPACK_IMPORTED_MODULE_3__["NzGithubBtnComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "qUPp":
/*!***************************************************!*\
  !*** ./site/doc/app/online-ide/files/polyfill.ts ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (`
import 'zone.js/dist/zone';
import "core-js/proposals/reflect-metadata";
`);


/***/ }),

/***/ "rKiv":
/*!*********************************************************!*\
  !*** ./site/doc/app/share/codebox/codebox.component.ts ***!
  \*********************************************************/
/*! exports provided: NzCodeBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzCodeBoxComponent", function() { return NzCodeBoxComponent; });
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/platform */ "nLfN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../environments/environment */ "t0Bl");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../app.service */ "cXWt");
/* harmony import */ var _online_ide_online_ide_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../online-ide/online-ide.service */ "v2Gw");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/icon */ "MOHP");
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ "pk25");
/* harmony import */ var _highlight_highlight_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../highlight/highlight.component */ "Z4zo");


















function NzCodeBoxComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](1, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("height", ctx_r0.simulateIFrame && ctx_r0.nzIframeHeight, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("simulate-iframe", ctx_r0.simulateIFrame)("browser-mockup", ctx_r0.simulateIFrame)("with-url", ctx_r0.simulateIFrame);
} }
function NzCodeBoxComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "iframe", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r1.iframe, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeResourceUrl"])("height", ctx_r1.nzIframeHeight);
} }
function NzCodeBoxComponent_i_16_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NzCodeBoxComponent_i_16_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r5.copyGenerateCommand(ctx_r5.nzGenerateCommand); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("ant-tooltip-open", ctx_r2.commandCopied);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzTooltipTitle", ctx_r2.language === "zh" ? "\u590D\u5236\u751F\u6210\u4EE3\u7801\u547D\u4EE4" : "Copy Generate Command")("nzType", ctx_r2.commandCopied ? "check" : "code");
} }
function NzCodeBoxComponent_ng_container_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("code-expand-icon-show", ctx_r3.nzExpanded)("code-expand-icon-hide", !ctx_r3.nzExpanded);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("code-expand-icon-show", !ctx_r3.nzExpanded)("code-expand-icon-hide", ctx_r3.nzExpanded);
} }
function NzCodeBoxComponent_ng_container_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("code-expand-icon-show", ctx_r4.nzExpanded)("code-expand-icon-hide", !ctx_r4.nzExpanded);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("code-expand-icon-show", !ctx_r4.nzExpanded)("code-expand-icon-hide", ctx_r4.nzExpanded);
} }
const _c0 = [[["", "intro", ""]], [["", "code", ""]], [["", "demo", ""]]];
const _c1 = function (a0) { return { expand: a0 }; };
const _c2 = function (a0) { return { "highlight-wrapper-expand": a0 }; };
const _c3 = ["[intro]", "[code]", "[demo]"];
class NzCodeBoxComponent {
    // tslint:disable-next-line:no-any
    constructor(dom, sanitizer, cdr, appService, platform, onlineIdeService) {
        this.dom = dom;
        this.sanitizer = sanitizer;
        this.cdr = cdr;
        this.appService = appService;
        this.platform = platform;
        this.onlineIdeService = onlineIdeService;
        this.copied = false;
        this.commandCopied = false;
        this.showIframe = false;
        this.simulateIFrame = false;
        this.language = 'zh';
        this.theme = 'default';
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.codeLoaded = false;
        this.onlineIDELoading = false;
        this.copyLoading = false;
        this.nzExpanded = false;
        this.nzIframeHeight = 360;
        this.nzComponentName = '';
        this.nzSelector = '';
        this.nzGenerateCommand = '';
    }
    set nzIframeSource(value) {
        this.showIframe = value !== 'null' && _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].production;
        this.simulateIFrame = value !== 'null' && !_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].production;
        this.iframe = this.sanitizer.bypassSecurityTrustResourceUrl(value);
    }
    navigateToFragment() {
        if (this.platform.isBrowser) {
            window.location.hash = this.nzLink;
        }
    }
    copyCode() {
        setTimeout(() => {
            this.copyLoading = !this.codeLoaded;
            this.check();
        }, 120);
        this.getDemoCode().subscribe(data => {
            this.copyLoading = false;
            this.check();
            this.copy(data.rawCode).then(() => {
                this.copied = true;
                setTimeout(() => {
                    this.copied = false;
                    this.check();
                }, 1000);
            });
        });
    }
    copyGenerateCommand(command) {
        this.copy(command).then(() => {
            this.commandCopied = true;
            setTimeout(() => {
                this.commandCopied = false;
                this.check();
            }, 1000);
        });
    }
    copy(value) {
        const promise = new Promise((resolve) => {
            // @ts-ignore
            let copyTextArea = null;
            try {
                copyTextArea = this.dom.createElement('textarea');
                copyTextArea.style.height = '0px';
                copyTextArea.style.opacity = '0';
                copyTextArea.style.width = '0px';
                this.dom.body.appendChild(copyTextArea);
                copyTextArea.value = value;
                copyTextArea.select();
                this.dom.execCommand('copy');
                resolve(value);
            }
            finally {
                if (copyTextArea && copyTextArea.parentNode) {
                    copyTextArea.parentNode.removeChild(copyTextArea);
                }
            }
        });
        return promise;
    }
    expandCode(expanded) {
        this.nzExpanded = expanded;
        if (expanded) {
            this.getDemoCode().subscribe();
        }
    }
    openOnlineIDE(ide = 'StackBlitz') {
        setTimeout(() => {
            this.onlineIDELoading = !this.codeLoaded;
            this.check();
        }, 120);
        this.getDemoCode().subscribe(data => {
            this.onlineIDELoading = false;
            this.check();
            if (ide === 'StackBlitz') {
                this.onlineIdeService.openOnStackBlitz(this.nzComponentName, data.rawCode, this.nzSelector);
            }
            else {
                this.onlineIdeService.openOnCodeSandbox(this.nzComponentName, data.rawCode, this.nzSelector);
            }
        });
    }
    check() {
        this.cdr.markForCheck();
    }
    ngOnInit() {
        this.appService.theme$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$)).subscribe(data => {
            this.theme = data;
            this.check();
        });
        this.appService.language$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$)).subscribe(data => {
            this.language = data;
            this.check();
        });
    }
    getDemoCode() {
        return this.appService.getCode(this.nzId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(data => {
            if (data) {
                this.highlightCode = data.highlightCode;
                this.codeLoaded = true;
                this.check();
            }
        }));
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
/** @nocollapse */ NzCodeBoxComponent.ɵfac = function NzCodeBoxComponent_Factory(t) { return new (t || NzCodeBoxComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_app_service__WEBPACK_IMPORTED_MODULE_7__["AppService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_online_ide_online_ide_service__WEBPACK_IMPORTED_MODULE_8__["OnlineIdeService"])); };
/** @nocollapse */ NzCodeBoxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NzCodeBoxComponent, selectors: [["nz-code-box"]], inputs: { nzTitle: "nzTitle", nzExpanded: "nzExpanded", nzHref: "nzHref", nzLink: "nzLink", nzId: "nzId", nzIframeHeight: "nzIframeHeight", nzComponentName: "nzComponentName", nzSelector: "nzSelector", nzGenerateCommand: "nzGenerateCommand", nzIframeSource: "nzIframeSource" }, ngContentSelectors: _c3, decls: 25, vars: 23, consts: [[1, "code-box", 3, "ngClass"], [1, "code-box-demo"], [3, "simulate-iframe", "browser-mockup", "with-url", "height", 4, "ngIf"], ["class", "browser-mockup with-url", 4, "ngIf"], [1, "code-box-meta", "markdown"], [1, "code-box-title"], [3, "click"], ["target", "_blank", "rel", "noopener noreferrer", 1, "edit-button"], ["nz-icon", "", "nzType", "edit"], [1, "code-box-description"], [1, "code-box-actions"], ["nz-tooltip", "", "nz-icon", "", "nzType", "code-sandbox", 1, "code-box-code-copy", 3, "nzTooltipTitle", "click"], ["nz-tooltip", "", "nz-icon", "", "nzType", "thunderbolt", "nzTheme", "fill", 1, "code-box-code-copy", 3, "nzTooltipTitle", "click"], ["nz-tooltip", "", "nz-icon", "", 1, "code-box-code-copy", 3, "nzTooltipTitle", "nzType", "click"], ["nz-tooltip", "", "nz-icon", "", "class", "code-box-code-copy", 3, "nzTooltipTitle", "nzType", "ant-tooltip-open", "click", 4, "ngIf"], ["nz-tooltip", "", 1, "code-expand-icon", 3, "nzTooltipTitle", "click"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [1, "highlight-wrapper", 3, "ngClass"], [1, "highlight"], [3, "nzCode", "nzLanguage"], [1, "browser-mockup", "with-url"], ["title", "demo", 3, "src", "height"], ["alt", "expand code", "src", "https://gw.alipayobjects.com/zos/antfincdn/btT3qDZn1U/wSAkBuJFbdxsosKKpqyq.svg"], ["alt", "expand code", "src", "https://gw.alipayobjects.com/zos/antfincdn/CjZPwcKUG3/OpROPHYqWmrMDBFMZtKF.svg"], ["alt", "expand code", "src", "https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg"], ["alt", "expand code", "src", "https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg"]], template: function NzCodeBoxComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NzCodeBoxComponent_div_2_Template, 2, 8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, NzCodeBoxComponent_div_3_Template, 2, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NzCodeBoxComponent_Template_a_click_6_listener() { return ctx.navigateToFragment(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NzCodeBoxComponent_Template_i_click_13_listener() { return ctx.openOnlineIDE("CodeSandbox"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NzCodeBoxComponent_Template_i_click_14_listener() { return ctx.openOnlineIDE(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NzCodeBoxComponent_Template_i_click_15_listener() { return ctx.copyCode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, NzCodeBoxComponent_i_16_Template, 1, 4, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NzCodeBoxComponent_Template_span_click_17_listener() { return ctx.expandCode(!ctx.nzExpanded); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](18, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, NzCodeBoxComponent_ng_container_19_Template, 3, 8, "ng-container", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, NzCodeBoxComponent_ng_container_20_Template, 3, 8, "ng-container", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "section", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](23, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "nz-highlight", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](19, _c1, ctx.nzExpanded));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("id", ctx.nzId);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.showIframe);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showIframe);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx.nzTitle, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("href", ctx.nzHref, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzTooltipTitle", !ctx.onlineIDELoading ? ctx.language === "zh" ? "\u5728 CodeSandbox \u4E0A\u6253\u5F00" : "Edit On CodeSandbox" : ctx.language === "zh" ? "\u52A0\u8F7D\u4E2D..." : "Loading...");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzTooltipTitle", !ctx.onlineIDELoading ? ctx.language === "zh" ? "\u5728 StackBlitz \u4E0A\u6253\u5F00" : "Edit On StackBlitz" : ctx.language === "zh" ? "\u52A0\u8F7D\u4E2D..." : "Loading...");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("ant-tooltip-open", ctx.copied);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzTooltipTitle", !ctx.copyLoading ? ctx.language === "zh" ? "\u590D\u5236\u4EE3\u7801" : "Copy Code" : ctx.language === "zh" ? "\u52A0\u8F7D\u4E2D..." : "Loading...")("nzType", ctx.copied ? "check" : "snippets");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.nzGenerateCommand);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzTooltipTitle", ctx.nzExpanded ? ctx.language === "zh" ? "\u6536\u8D77\u4EE3\u7801" : "Hide Code" : ctx.language === "zh" ? "\u663E\u793A\u4EE3\u7801" : "Show Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitch", ctx.theme);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "dark");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](21, _c2, ctx.nzExpanded));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzCode", ctx.codeLoaded ? ctx.highlightCode : ctx.language === "zh" ? "\u52A0\u8F7D\u4E2D" : "Loading...")("nzLanguage", "typescript");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_9__["NzIconDirective"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_10__["NzTooltipDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchDefault"], _highlight_highlight_component__WEBPACK_IMPORTED_MODULE_11__["NzHighlightComponent"]], styles: [".simulate-iframe {\n  transform: translateX(0px);\n  display: block;\n}\n.simulate-iframe > * {\n  display: block;\n  height: 100%;\n  overflow: auto;\n  transform: translateX(0px);\n}\n.simulate-iframe > * > * {\n  overflow: auto;\n  height: 100%;\n}\nnz-code-box {\n  display: block;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZzdHMvd29yay8xL3Mvc2l0ZS9kb2MvYXBwL3NoYXJlL2NvZGVib3gvY29kZWJveC5jb21wb25lbnQubGVzcyIsInNpdGUvZG9jL2FwcC9zaGFyZS9jb2RlYm94L2NvZGVib3guY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSwwQkFBQTtFQUNBLGNBQUE7QUNERjtBRERBO0VBSUksY0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsMEJBQUE7QUNBSjtBRFBBO0VBU00sY0FBQTtFQUNBLFlBQUE7QUNDTjtBRElBO0VBQ0UsY0FBQTtBQ0ZGIiwiZmlsZSI6InNpdGUvZG9jL2FwcC9zaGFyZS9jb2RlYm94L2NvZGVib3guY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuLnNpbXVsYXRlLWlmcmFtZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xuICBkaXNwbGF5OiBibG9jaztcbiAgPiAqIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XG4gICAgPiAqIHtcbiAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cbiAgfVxufVxuXG5uei1jb2RlLWJveCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuIiwiLnNpbXVsYXRlLWlmcmFtZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5zaW11bGF0ZS1pZnJhbWUgPiAqIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xufVxuLnNpbXVsYXRlLWlmcmFtZSA+ICogPiAqIHtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGhlaWdodDogMTAwJTtcbn1cbm56LWNvZGUtYm94IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4iXX0= */"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NzCodeBoxComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'nz-code-box',
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
                templateUrl: './codebox.component.html',
                styleUrls: ['./codebox.component.less']
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
            }] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] }, { type: _app_service__WEBPACK_IMPORTED_MODULE_7__["AppService"] }, { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["Platform"] }, { type: _online_ide_online_ide_service__WEBPACK_IMPORTED_MODULE_8__["OnlineIdeService"] }]; }, { nzTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzExpanded: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzHref: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzLink: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzIframeHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzComponentName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzSelector: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzGenerateCommand: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzIframeSource: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }] }); })();


/***/ }),

/***/ "siHv":
/*!***********************************************!*\
  !*** ./site/doc/app/online-ide/files/main.ts ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (`import './polyfills';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule).then(ref => {
  // Ensure Angular destroys itself on hot reloads.
  if (window['ngRef']) {
    window['ngRef'].destroy();
  }
  window['ngRef'] = ref;

  // Otherwise, log the boot error
}).catch(err => console.error(err));`);


/***/ }),

/***/ "v2Gw":
/*!*******************************************************!*\
  !*** ./site/doc/app/online-ide/online-ide.service.ts ***!
  \*******************************************************/
/*! exports provided: OnlineIdeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnlineIdeService", function() { return OnlineIdeService; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _stackblitz_sdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stackblitz/sdk */ "+48l");
/* harmony import */ var _stackblitz_sdk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_stackblitz_sdk__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var codesandbox_lib_api_define__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! codesandbox/lib/api/define */ "nvu9");
/* harmony import */ var codesandbox_lib_api_define__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(codesandbox_lib_api_define__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ng_zorro_antd_version__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/version */ "GddV");
/* harmony import */ var _files_angular_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./files/angular.json */ "l+0x");
/* harmony import */ var _files_app_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./files/app.module */ "wUSt");
/* harmony import */ var _files_dot_angular_cli_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./files/dot_angular-cli.json */ "4w5G");
/* harmony import */ var _files_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./files/environment */ "Wm1L");
/* harmony import */ var _files_main__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./files/main */ "siHv");
/* harmony import */ var _files_ng_zorro_antd_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./files/ng-zorro-antd.module */ "bEZI");
/* harmony import */ var _files_polyfill__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./files/polyfill */ "qUPp");













class OnlineIdeService {
    // tslint:disable-next-line:no-any
    constructor(document) {
        this.template = 'angular-cli';
        this.dependencies = {
            '@angular/animations': '^10.0.0',
            '@angular/cdk': '^10.0.0',
            '@angular/common': '^10.0.0',
            '@angular/compiler': '^10.0.0',
            '@angular/core': '^10.0.0',
            '@angular/forms': '^10.0.0',
            '@angular/platform-browser': '^10.0.0',
            '@angular/platform-browser-dynamic': '^10.0.0',
            '@angular/router': '^10.0.0',
            '@ant-design/icons-angular': '10.0.0-beta.0',
            'rxjs': '~6.5.4',
            'core-js': '~3.6.5',
            'date-fns': '^2.0.0',
            'tslib': '^2.0.0',
            'zone.js': '~0.11.1',
            'ng-zorro-antd': `^${ng_zorro_antd_version__WEBPACK_IMPORTED_MODULE_4__["VERSION"].full}`
        };
        this.document = document;
    }
    openOnStackBlitz(componentName, appComponentCode, selector) {
        _stackblitz_sdk__WEBPACK_IMPORTED_MODULE_2___default.a.openProject({
            title: 'NG-ZORRO',
            description: 'Ant Design of Angular',
            tags: ['NG-ZORRO', 'ng-zorro-antd', 'Ant Design', 'Angular', 'ng'],
            template: this.template,
            dependencies: this.dependencies,
            files: {
                'angular.json': `${JSON.stringify(_files_angular_json__WEBPACK_IMPORTED_MODULE_5__["default"], null, 2)}`,
                'src/index.html': `<${selector}>loading</${selector}>`,
                'src/main.ts': _files_main__WEBPACK_IMPORTED_MODULE_9__["default"],
                'src/app/app.component.ts': appComponentCode,
                'src/polyfills.ts': _files_polyfill__WEBPACK_IMPORTED_MODULE_11__["default"],
                'src/app/app.module.ts': Object(_files_app_module__WEBPACK_IMPORTED_MODULE_6__["default"])(componentName),
                'src/app/ng-zorro-antd.module.ts': _files_ng_zorro_antd_module__WEBPACK_IMPORTED_MODULE_10__["default"],
                'environments/environment.ts': _files_environment__WEBPACK_IMPORTED_MODULE_8__["default"],
                'src/styles.css': `/* Add application styles & imports to this file! */;`
            }
        });
    }
    openOnCodeSandbox(componentName, appComponentCode, selector) {
        const parameters = Object(codesandbox_lib_api_define__WEBPACK_IMPORTED_MODULE_3__["getParameters"])({
            files: {
                'package.json': {
                    content: JSON.stringify({
                        dependencies: this.dependencies
                    }, null, 2),
                    isBinary: false
                },
                '.angular-cli.json': {
                    content: _files_dot_angular_cli_json__WEBPACK_IMPORTED_MODULE_7__["default"],
                    isBinary: false
                },
                'src/index.html': {
                    content: `
<!DOCTYPE html>
<html>
  <body>
    <${selector}>loading</${selector}>
   </body>
</html>`,
                    isBinary: false
                },
                'src/app/app.module.ts': {
                    content: Object(_files_app_module__WEBPACK_IMPORTED_MODULE_6__["default"])(componentName),
                    isBinary: false
                },
                'src/main.ts': {
                    content: _files_main__WEBPACK_IMPORTED_MODULE_9__["default"],
                    isBinary: false
                },
                'src/polyfills.ts': {
                    content: _files_polyfill__WEBPACK_IMPORTED_MODULE_11__["default"],
                    isBinary: false
                },
                'src/app/app.component.ts': {
                    content: appComponentCode,
                    isBinary: false
                },
                'src/app/ng-zorro-antd.module.ts': {
                    content: _files_ng_zorro_antd_module__WEBPACK_IMPORTED_MODULE_10__["default"],
                    isBinary: false
                },
                'src/styles.css': {
                    content: '/* Add application styles & imports to this file! */;',
                    isBinary: false
                },
                'environments/environment.ts': {
                    content: _files_environment__WEBPACK_IMPORTED_MODULE_8__["default"],
                    isBinary: false
                }
            }
        });
        const form = this.document.createElement('form');
        const parametersInput = this.document.createElement('input');
        form.method = 'POST';
        form.action = 'https://codesandbox.io/api/v1/sandboxes/define?module=/src/app/app.component.ts';
        form.target = '_blank';
        parametersInput.name = 'parameters';
        parametersInput.value = parameters;
        form.appendChild(parametersInput);
        this.document.body.append(form);
        form.submit();
        this.document.body.removeChild(form);
    }
}
/** @nocollapse */ OnlineIdeService.ɵfac = function OnlineIdeService_Factory(t) { return new (t || OnlineIdeService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"])); };
/** @nocollapse */ OnlineIdeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: OnlineIdeService, factory: OnlineIdeService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OnlineIdeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
            }] }]; }, null); })();


/***/ }),

/***/ "vBS8":
/*!**********************************************************!*\
  !*** ./site/doc/app/share/highlight/highlight.module.ts ***!
  \**********************************************************/
/*! exports provided: NzHighlightModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzHighlightModule", function() { return NzHighlightModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _highlight_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./highlight.component */ "Z4zo");




class NzHighlightModule {
}
/** @nocollapse */ NzHighlightModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: NzHighlightModule });
/** @nocollapse */ NzHighlightModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function NzHighlightModule_Factory(t) { return new (t || NzHighlightModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NzHighlightModule, { declarations: [_highlight_component__WEBPACK_IMPORTED_MODULE_2__["NzHighlightComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]], exports: [_highlight_component__WEBPACK_IMPORTED_MODULE_2__["NzHighlightComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NzHighlightModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]],
                declarations: [_highlight_component__WEBPACK_IMPORTED_MODULE_2__["NzHighlightComponent"]],
                exports: [_highlight_component__WEBPACK_IMPORTED_MODULE_2__["NzHighlightComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "wUSt":
/*!*****************************************************!*\
  !*** ./site/doc/app/online-ide/files/app.module.ts ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ((componentName) => {
    return `
import { NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import en from '@angular/common/locales/en';

import { NZ_ICONS } from 'ng-zorro-antd/icon';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { IconDefinition } from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';

import { DemoNgZorroAntdModule } from './ng-zorro-antd.module';

import { ${componentName} } from './app.component';

registerLocaleData(en);

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key])

@NgModule({
  imports: [
    BrowserModule,FormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    ReactiveFormsModule,
    DemoNgZorroAntdModule,
    BrowserAnimationsModule,
    ScrollingModule,
    DragDropModule
  ],
  declarations: [ ${componentName} ],
  bootstrap: [ ${componentName} ],
  providers: [ { provide: NZ_I18N, useValue: en_US }, { provide: NZ_ICONS, useValue: icons } ]
})
export class AppModule { }`;
});


/***/ })

};;
//# sourceMappingURL=affix-index-module~alert-index-module~anchor-index-module~auto-complete-index-module~avatar-index-mo~4c119977.js.map