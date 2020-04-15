exports.ids = ["code-editor-index-module~space-index-module~upload-index-module"];
exports.modules = {

/***/ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-upload.js":
/*!***************************************************************!*\
  !*** ./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-upload.js ***!
  \***************************************************************/
/*! exports provided: NzUploadBtnComponent, NzUploadComponent, NzUploadListComponent, NzUploadModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzUploadBtnComponent", function() { return NzUploadBtnComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzUploadComponent", function() { return NzUploadComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzUploadListComponent", function() { return NzUploadListComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzUploadModule", function() { return NzUploadModule; });
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/keycodes.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ng_zorro_antd_core_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/core/logger */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-logger.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/platform.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/core/util */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-util.js");
/* harmony import */ var ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/i18n */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-i18n.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/icon */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-icon.js");
/* harmony import */ var ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/progress */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-progress.js");
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-tooltip.js");

















/**
 * @fileoverview added by tsickle
 * Generated from: interface.ts
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
 * File object.
 * @record
 */









const _c0 = ["file"];
const _c1 = ["nz-upload-btn", ""];
const _c2 = ["*"];
function NzUploadListComponent_div_0_ng_template_1_div_1_ng_template_1_Template(rf, ctx) { }
const _c3 = function (a0) { return { $implicit: a0 }; };
function NzUploadListComponent_div_0_ng_template_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzUploadListComponent_div_0_ng_template_1_div_1_ng_template_1_Template, 0, 0, "ng-template", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const file_r339 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    const _r342 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("ant-upload-list-item-file", !file_r339.isUploading);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r342)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](4, _c3, file_r339));
} }
function NzUploadListComponent_div_0_ng_template_1_a_2_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 21);
} if (rf & 2) {
    const file_r339 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", file_r339.thumbUrl || file_r339.url, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("alt", file_r339.name);
} }
function NzUploadListComponent_div_0_ng_template_1_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r367 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NzUploadListComponent_div_0_ng_template_1_a_2_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r367); const file_r339 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit; const ctx_r365 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r365.handlePreview(file_r339, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzUploadListComponent_div_0_ng_template_1_a_2_img_1_Template, 1, 2, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r359 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](5);
    const file_r339 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("ant-upload-list-item-file", !file_r339.isImageUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", file_r339.url || file_r339.thumbUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", file_r339.isImageUrl)("ngIfElse", _r359);
} }
function NzUploadListComponent_div_0_ng_template_1_span_3_ng_template_1_Template(rf, ctx) { }
function NzUploadListComponent_div_0_ng_template_1_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzUploadListComponent_div_0_ng_template_1_span_3_ng_template_1_Template, 0, 0, "ng-template", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const file_r339 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    const _r342 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r342)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c3, file_r339));
} }
function NzUploadListComponent_div_0_ng_template_1_ng_template_4_ng_template_0_Template(rf, ctx) { }
function NzUploadListComponent_div_0_ng_template_1_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, NzUploadListComponent_div_0_ng_template_1_ng_template_4_ng_template_0_Template, 0, 0, "ng-template", 18);
} if (rf & 2) {
    const file_r339 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    const _r342 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r342)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c3, file_r339));
} }
function NzUploadListComponent_div_0_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzUploadListComponent_div_0_ng_template_1_div_1_Template, 2, 6, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NzUploadListComponent_div_0_ng_template_1_a_2_Template, 2, 5, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, NzUploadListComponent_div_0_ng_template_1_span_3_Template, 2, 4, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, NzUploadListComponent_div_0_ng_template_1_ng_template_4_Template, 1, 4, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const file_r339 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitch", file_r339.iconType);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "uploading");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "thumbnail");
} }
function NzUploadListComponent_div_0_ng_template_3_ng_container_0_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} }
function NzUploadListComponent_div_0_ng_template_3_ng_container_0_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzUploadListComponent_div_0_ng_template_3_ng_container_0_ng_container_2_ng_container_1_Template, 2, 0, "ng-container", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const file_r374 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    const _r376 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", file_r374.isUploading)("ngIfElse", _r376);
} }
function NzUploadListComponent_div_0_ng_template_3_ng_container_0_ng_container_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r383 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r383.locale.uploading);
} }
function NzUploadListComponent_div_0_ng_template_3_ng_container_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzUploadListComponent_div_0_ng_template_3_ng_container_0_ng_container_3_ng_container_1_Template, 2, 1, "ng-container", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const file_r374 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    const _r376 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", file_r374.isUploading)("ngIfElse", _r376);
} }
function NzUploadListComponent_div_0_ng_template_3_ng_container_0_i_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 28);
} if (rf & 2) {
    const file_r374 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzType", file_r374.isUploading ? "loading" : "paper-clip");
} }
function NzUploadListComponent_div_0_ng_template_3_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](1, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NzUploadListComponent_div_0_ng_template_3_ng_container_0_ng_container_2_Template, 2, 2, "ng-container", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, NzUploadListComponent_div_0_ng_template_3_ng_container_0_ng_container_3_Template, 2, 2, "ng-container", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, NzUploadListComponent_div_0_ng_template_3_ng_container_0_i_4_Template, 1, 1, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r375 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitch", ctx_r375.listType);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "picture");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "picture-card");
} }
function NzUploadListComponent_div_0_ng_template_3_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 29);
} if (rf & 2) {
    const file_r374 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzType", file_r374.isImageUrl ? "picture" : "file");
} }
function NzUploadListComponent_div_0_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, NzUploadListComponent_div_0_ng_template_3_ng_container_0_Template, 5, 3, "ng-container", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzUploadListComponent_div_0_ng_template_3_ng_template_1_Template, 1, 1, "ng-template", null, 24, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const ctx_r343 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r343.iconRender)("ngIfElse", ctx_r343.iconRender);
} }
function NzUploadListComponent_div_0_ng_template_5_span_0_a_1_ng_template_1_Template(rf, ctx) { }
function NzUploadListComponent_div_0_ng_template_5_span_0_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzUploadListComponent_div_0_ng_template_5_span_0_a_1_ng_template_1_Template, 0, 0, "ng-template", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    const _r350 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](12);
    const ctx_r388 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("title", ctx_r388.locale.downloadFile);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r350);
} }
function NzUploadListComponent_div_0_ng_template_5_span_0_a_2_ng_template_1_Template(rf, ctx) { }
function NzUploadListComponent_div_0_ng_template_5_span_0_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzUploadListComponent_div_0_ng_template_5_span_0_a_2_ng_template_1_Template, 0, 0, "ng-template", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    const _r348 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](10);
    const ctx_r389 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("title", ctx_r389.locale.removeFile);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r348);
} }
function NzUploadListComponent_div_0_ng_template_5_span_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzUploadListComponent_div_0_ng_template_5_span_0_a_1_Template, 2, 2, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NzUploadListComponent_div_0_ng_template_5_span_0_a_2_Template, 2, 2, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const file_r339 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    const ctx_r387 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("ant-upload-list-item-card-actions ", ctx_r387.listType === "picture" ? "picture" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", file_r339.showDownload);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r387.icons.showRemoveIcon);
} }
function NzUploadListComponent_div_0_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, NzUploadListComponent_div_0_ng_template_5_span_0_Template, 3, 5, "span", 30);
} if (rf & 2) {
    const ctx_r345 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r345.listType !== "picture-card");
} }
function NzUploadListComponent_div_0_ng_template_7_a_0_Template(rf, ctx) { if (rf & 1) {
    const _r398 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NzUploadListComponent_div_0_ng_template_7_a_0_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r398); const file_r339 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit; const ctx_r396 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r396.handlePreview(file_r339, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const file_r339 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("title", file_r339.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", file_r339.listItemNameCls)("href", file_r339.url, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("download", file_r339.linkProps && file_r339.linkProps.download);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](file_r339.name);
} }
function NzUploadListComponent_div_0_ng_template_7_span_1_Template(rf, ctx) { if (rf & 1) {
    const _r402 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NzUploadListComponent_div_0_ng_template_7_span_1_Template_span_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r402); const file_r339 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit; const ctx_r400 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r400.handlePreview(file_r339, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const file_r339 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("title", file_r339.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", file_r339.listItemNameCls);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](file_r339.name);
} }
function NzUploadListComponent_div_0_ng_template_7_ng_template_2_Template(rf, ctx) { }
function NzUploadListComponent_div_0_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, NzUploadListComponent_div_0_ng_template_7_a_0_Template, 2, 5, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzUploadListComponent_div_0_ng_template_7_span_1_Template, 2, 3, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NzUploadListComponent_div_0_ng_template_7_ng_template_2_Template, 0, 0, "ng-template", 9);
} if (rf & 2) {
    const file_r339 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const _r344 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", file_r339.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !file_r339.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r344);
} }
function NzUploadListComponent_div_0_ng_template_9_i_0_Template(rf, ctx) { if (rf & 1) {
    const _r408 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NzUploadListComponent_div_0_ng_template_9_i_0_Template_i_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r408); const file_r339 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit; const ctx_r406 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r406.handleRemove(file_r339, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r405 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("title", ctx_r405.locale.removeFile);
} }
function NzUploadListComponent_div_0_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, NzUploadListComponent_div_0_ng_template_9_i_0_Template, 1, 1, "i", 37);
} if (rf & 2) {
    const ctx_r349 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r349.icons.showRemoveIcon);
} }
function NzUploadListComponent_div_0_ng_template_11_i_0_Template(rf, ctx) { if (rf & 1) {
    const _r412 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NzUploadListComponent_div_0_ng_template_11_i_0_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r412); const file_r339 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit; const ctx_r410 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r410.handleDownload(file_r339); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r409 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("title", ctx_r409.locale.downloadFile);
} }
function NzUploadListComponent_div_0_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, NzUploadListComponent_div_0_ng_template_11_i_0_Template, 1, 1, "i", 39);
} if (rf & 2) {
    const file_r339 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", file_r339.showDownload);
} }
function NzUploadListComponent_div_0_ng_template_15_Template(rf, ctx) { }
function NzUploadListComponent_div_0_ng_template_16_Template(rf, ctx) { }
const _c4 = function () { return { opacity: 0.5, "pointer-events": "none" }; };
function NzUploadListComponent_div_0_span_17_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r419 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NzUploadListComponent_div_0_span_17_a_1_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r419); const file_r339 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit; const ctx_r417 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r417.handlePreview(file_r339, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const file_r339 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    const ctx_r414 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("title", ctx_r414.locale.previewFile);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", file_r339.url || file_r339.thumbUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("ngStyle", !(file_r339.url || file_r339.thumbUrl) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](3, _c4));
} }
function NzUploadListComponent_div_0_span_17_ng_template_2_Template(rf, ctx) { }
function NzUploadListComponent_div_0_span_17_ng_template_3_Template(rf, ctx) { }
function NzUploadListComponent_div_0_span_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzUploadListComponent_div_0_span_17_a_1_Template, 2, 4, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NzUploadListComponent_div_0_span_17_ng_template_2_Template, 0, 0, "ng-template", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, NzUploadListComponent_div_0_span_17_ng_template_3_Template, 0, 0, "ng-template", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r350 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](12);
    const _r348 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](10);
    const ctx_r354 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r354.icons.showPreviewIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r350);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r348);
} }
function NzUploadListComponent_div_0_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "nz-progress", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const file_r339 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzPercent", file_r339.percent)("nzShowInfo", false)("nzStrokeWidth", 2);
} }
function NzUploadListComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzUploadListComponent_div_0_ng_template_1_Template, 6, 3, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, NzUploadListComponent_div_0_ng_template_3_Template, 3, 2, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, NzUploadListComponent_div_0_ng_template_5_Template, 1, 1, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, NzUploadListComponent_div_0_ng_template_7_Template, 3, 3, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, NzUploadListComponent_div_0_ng_template_9_Template, 1, 1, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, NzUploadListComponent_div_0_ng_template_11_Template, 1, 1, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, NzUploadListComponent_div_0_ng_template_15_Template, 0, 0, "ng-template", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, NzUploadListComponent_div_0_ng_template_16_Template, 0, 0, "ng-template", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, NzUploadListComponent_div_0_span_17_Template, 4, 3, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, NzUploadListComponent_div_0_div_18_Template, 2, 3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const file_r339 = ctx.$implicit;
    const _r340 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2);
    const _r346 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](8);
    const ctx_r338 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate2"]("ant-upload-list-item ant-upload-list-item-", file_r339.status, " ant-upload-list-item-list-type-", ctx_r338.listType, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@itemState", undefined)("nzTooltipTitle", file_r339.status === "error" ? file_r339.message : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("data-key", file_r339.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r340);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r346);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r338.listType === "picture-card" && !file_r339.isUploading);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", file_r339.isUploading);
} }
const _c5 = ["uploadComp"];
const _c6 = ["listComp"];
const _c7 = function () { return []; };
function NzUploadComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "nz-upload-list", 6, 7);
} if (rf & 2) {
    const ctx_r423 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("display", ctx_r423.nzShowUploadList ? "" : "none");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("locale", ctx_r423.locale)("listType", ctx_r423.nzListType)("items", ctx_r423.nzFileList || _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](11, _c7))("icons", ctx_r423.nzShowUploadList)("iconRender", ctx_r423.nzIconRender)("previewFile", ctx_r423.nzPreviewFile)("onPreview", ctx_r423.nzPreview)("onRemove", ctx_r423.onRemove)("onDownload", ctx_r423.nzDownload);
} }
function NzUploadComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](0);
} }
function NzUploadComponent_ng_template_4_ng_template_3_Template(rf, ctx) { }
function NzUploadComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 9, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, NzUploadComponent_ng_template_4_ng_template_3_Template, 0, 0, "ng-template", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r427 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r424 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("display", ctx_r427.nzShowButton ? "" : "none");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r427.classList);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx_r427._btnOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r424);
} }
function NzUploadComponent_ng_container_6_ng_template_5_Template(rf, ctx) { }
function NzUploadComponent_ng_container_6_ng_template_6_Template(rf, ctx) { }
const _c8 = function () { return { "ant-upload-btn": true }; };
function NzUploadComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    const _r440 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("drop", function NzUploadComponent_ng_container_6_Template_div_drop_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r440); const ctx_r439 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r439.fileDrop($event); })("dragover", function NzUploadComponent_ng_container_6_Template_div_dragover_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r440); const ctx_r441 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r441.fileDrop($event); })("dragleave", function NzUploadComponent_ng_container_6_Template_div_dragleave_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r440); const ctx_r442 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r442.fileDrop($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 13, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, NzUploadComponent_ng_container_6_ng_template_5_Template, 0, 0, "ng-template", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, NzUploadComponent_ng_container_6_ng_template_6_Template, 0, 0, "ng-template", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r428 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r424 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](3);
    const _r422 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r428.classList);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx_r428._btnOptions)("classes", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](5, _c8));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r424);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r422);
} }
function NzUploadComponent_ng_template_7_ng_container_0_ng_template_1_Template(rf, ctx) { }
function NzUploadComponent_ng_template_7_ng_container_0_ng_template_2_Template(rf, ctx) { }
function NzUploadComponent_ng_template_7_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzUploadComponent_ng_template_7_ng_container_0_ng_template_1_Template, 0, 0, "ng-template", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NzUploadComponent_ng_template_7_ng_container_0_ng_template_2_Template, 0, 0, "ng-template", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    const _r422 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1);
    const _r426 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r422);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r426);
} }
function NzUploadComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, NzUploadComponent_ng_template_7_ng_container_0_Template, 3, 2, "ng-container", 3);
} if (rf & 2) {
    const ctx_r430 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r431 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r430.nzListType === "picture-card")("ngIfElse", _r431);
} }
function NzUploadComponent_ng_template_9_ng_template_0_Template(rf, ctx) { }
function NzUploadComponent_ng_template_9_ng_template_1_Template(rf, ctx) { }
function NzUploadComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, NzUploadComponent_ng_template_9_ng_template_0_Template, 0, 0, "ng-template", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzUploadComponent_ng_template_9_ng_template_1_Template, 0, 0, "ng-template", 11);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r426 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](5);
    const _r422 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r426);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r422);
} }
function UploadFile() { }
if (false) {}
/**
 * @record
 */
function UploadChangeParam() { }
if (false) {}
/**
 * @record
 */
function ShowUploadListInterface() { }
if (false) {}
/**
 * @record
 */
function ZipButtonOptions() { }
if (false) {}
/**
 * @record
 */
function UploadFilter() { }
if (false) {}
/**
 * @record
 */
function UploadXHRArgs() { }
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: upload-btn.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzUploadBtnComponent {
    // #endregion
    /**
     * @param {?} http
     */
    constructor(http) {
        this.http = http;
        this.reqs = {};
        this.hostClassMap = {};
        this.inited = false;
        this.destroy = false;
        // #region fields
        this.classes = {};
        // #region styles
        this.prefixCls = 'ant-upload';
        if (!http) {
            throw new Error(`Not found 'HttpClient', You can import 'HttpClientModule' in your root module.`);
        }
    }
    // #endregion
    /**
     * @return {?}
     */
    onClick() {
        if (this.options.disabled || !this.options.openFileDialogOnClick) {
            return;
        }
        ((/** @type {?} */ (this.file.nativeElement))).click();
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onKeyDown(e) {
        if (this.options.disabled) {
            return;
        }
        if (e.key === 'Enter' || e.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["ENTER"]) {
            this.onClick();
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    // skip safari bug
    onFileDrop(e) {
        if (this.options.disabled || e.type === 'dragover') {
            e.preventDefault();
            return;
        }
        if (this.options.directory) {
            this.traverseFileTree((/** @type {?} */ (e.dataTransfer)).items);
        }
        else {
            /** @type {?} */
            const files = Array.prototype.slice
                .call((/** @type {?} */ (e.dataTransfer)).files)
                .filter((/**
             * @param {?} file
             * @return {?}
             */
            (file) => this.attrAccept(file, this.options.accept)));
            if (files.length) {
                this.uploadFiles(files);
            }
        }
        e.preventDefault();
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onChange(e) {
        if (this.options.disabled) {
            return;
        }
        /** @type {?} */
        const hie = (/** @type {?} */ (e.target));
        this.uploadFiles((/** @type {?} */ (hie.files)));
        hie.value = '';
    }
    /**
     * @private
     * @param {?} files
     * @return {?}
     */
    traverseFileTree(files) {
        /** @type {?} */
        const _traverseFileTree = (/**
         * @param {?} item
         * @param {?} path
         * @return {?}
         */
        (item, path) => {
            if (item.isFile) {
                item.file((/**
                 * @param {?} file
                 * @return {?}
                 */
                (file) => {
                    if (this.attrAccept(file, this.options.accept)) {
                        this.uploadFiles([file]);
                    }
                }));
            }
            else if (item.isDirectory) {
                /** @type {?} */
                const dirReader = item.createReader();
                dirReader.readEntries((/**
                 * @param {?} entries
                 * @return {?}
                 */
                (entries) => {
                    for (const entrieItem of entries) {
                        _traverseFileTree(entrieItem, `${path}${item.name}/`);
                    }
                }));
            }
        });
        for (const file of (/** @type {?} */ (files))) {
            _traverseFileTree(file.webkitGetAsEntry(), '');
        }
    }
    /**
     * @private
     * @param {?} file
     * @param {?=} acceptedFiles
     * @return {?}
     */
    attrAccept(file, acceptedFiles) {
        if (file && acceptedFiles) {
            /** @type {?} */
            const acceptedFilesArray = Array.isArray(acceptedFiles) ? acceptedFiles : acceptedFiles.split(',');
            /** @type {?} */
            const fileName = '' + file.name;
            /** @type {?} */
            const mimeType = '' + file.type;
            /** @type {?} */
            const baseMimeType = mimeType.replace(/\/.*$/, '');
            return acceptedFilesArray.some((/**
             * @param {?} type
             * @return {?}
             */
            type => {
                /** @type {?} */
                const validType = type.trim();
                if (validType.charAt(0) === '.') {
                    return (fileName.toLowerCase().indexOf(validType.toLowerCase(), fileName.toLowerCase().length - validType.toLowerCase().length) !== -1);
                }
                else if (/\/\*$/.test(validType)) {
                    // This is something like a image/* mime type
                    return baseMimeType === validType.replace(/\/.*$/, '');
                }
                return mimeType === validType;
            }));
        }
        return true;
    }
    /**
     * @private
     * @param {?} file
     * @return {?}
     */
    attachUid(file) {
        if (!file.uid) {
            file.uid = Math.random()
                .toString(36)
                .substring(2);
        }
        return file;
    }
    /**
     * @param {?} fileList
     * @return {?}
     */
    uploadFiles(fileList) {
        /** @type {?} */
        let filters$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(Array.prototype.slice.call(fileList));
        if (this.options.filters) {
            this.options.filters.forEach((/**
             * @param {?} f
             * @return {?}
             */
            f => {
                filters$ = filters$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])((/**
                 * @param {?} list
                 * @return {?}
                 */
                list => {
                    /** @type {?} */
                    const fnRes = f.fn(list);
                    return fnRes instanceof rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"] ? fnRes : Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(fnRes);
                })));
            }));
        }
        filters$.subscribe((/**
         * @param {?} list
         * @return {?}
         */
        list => {
            list.forEach((/**
             * @param {?} file
             * @return {?}
             */
            (file) => {
                this.attachUid(file);
                this.upload(file, list);
            }));
        }), (/**
         * @param {?} e
         * @return {?}
         */
        e => {
            Object(ng_zorro_antd_core_logger__WEBPACK_IMPORTED_MODULE_3__["warn"])(`Unhandled upload filter error`, e);
        }));
    }
    /**
     * @private
     * @param {?} file
     * @param {?} fileList
     * @return {?}
     */
    upload(file, fileList) {
        if (!this.options.beforeUpload) {
            return this.post(file);
        }
        /** @type {?} */
        const before = this.options.beforeUpload(file, fileList);
        if (before instanceof rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"]) {
            before.subscribe((/**
             * @param {?} processedFile
             * @return {?}
             */
            (processedFile) => {
                /** @type {?} */
                const processedFileType = Object.prototype.toString.call(processedFile);
                if (processedFileType === '[object File]' || processedFileType === '[object Blob]') {
                    this.attachUid(processedFile);
                    this.post(processedFile);
                }
                else if (typeof processedFile === 'boolean' && processedFile !== false) {
                    this.post(file);
                }
            }), (/**
             * @param {?} e
             * @return {?}
             */
            e => {
                Object(ng_zorro_antd_core_logger__WEBPACK_IMPORTED_MODULE_3__["warn"])(`Unhandled upload beforeUpload error`, e);
            }));
        }
        else if (before !== false) {
            return this.post(file);
        }
    }
    /**
     * @private
     * @param {?} file
     * @return {?}
     */
    post(file) {
        if (this.destroy) {
            return;
        }
        /** @type {?} */
        let process$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(file);
        /** @type {?} */
        const opt = this.options;
        const { uid } = file;
        const { action, data, headers, transformFile } = opt;
        /** @type {?} */
        const args = {
            action: typeof action === 'string' ? action : '',
            name: opt.name,
            headers,
            file,
            postFile: file,
            data,
            withCredentials: opt.withCredentials,
            onProgress: opt.onProgress
                ? (/**
                 * @param {?} e
                 * @return {?}
                 */
                e => {
                    (/** @type {?} */ (opt.onProgress))(e, file);
                })
                : undefined,
            onSuccess: (/**
             * @param {?} ret
             * @param {?} xhr
             * @return {?}
             */
            (ret, xhr) => {
                this.clean(uid);
                (/** @type {?} */ (opt.onSuccess))(ret, file, xhr);
            }),
            onError: (/**
             * @param {?} xhr
             * @return {?}
             */
            xhr => {
                this.clean(uid);
                (/** @type {?} */ (opt.onError))(xhr, file);
            })
        };
        if (typeof action === 'function') {
            /** @type {?} */
            const actionResult = ((/** @type {?} */ (action)))(file);
            if (actionResult instanceof rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"]) {
                process$ = process$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])((/**
                 * @return {?}
                 */
                () => actionResult)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((/**
                 * @param {?} res
                 * @return {?}
                 */
                res => {
                    args.action = res;
                    return file;
                })));
            }
            else {
                args.action = actionResult;
            }
        }
        if (typeof transformFile === 'function') {
            /** @type {?} */
            const transformResult = transformFile(file);
            process$ = process$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])((/**
             * @return {?}
             */
            () => (transformResult instanceof rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"] ? transformResult : Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(transformResult)))));
        }
        if (typeof data === 'function') {
            /** @type {?} */
            const dataResult = ((/** @type {?} */ (data)))(file);
            if (dataResult instanceof rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"]) {
                process$ = process$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])((/**
                 * @return {?}
                 */
                () => dataResult)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((/**
                 * @param {?} res
                 * @return {?}
                 */
                res => {
                    args.data = res;
                    return file;
                })));
            }
            else {
                args.data = dataResult;
            }
        }
        if (typeof headers === 'function') {
            /** @type {?} */
            const headersResult = ((/** @type {?} */ (headers)))(file);
            if (headersResult instanceof rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"]) {
                process$ = process$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])((/**
                 * @return {?}
                 */
                () => headersResult)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((/**
                 * @param {?} res
                 * @return {?}
                 */
                res => {
                    args.headers = res;
                    return file;
                })));
            }
            else {
                args.headers = headersResult;
            }
        }
        process$.subscribe((/**
         * @param {?} newFile
         * @return {?}
         */
        newFile => {
            args.postFile = newFile;
            /** @type {?} */
            const req$ = (opt.customRequest || this.xhr).call(this, args);
            if (!(req$ instanceof rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"])) {
                Object(ng_zorro_antd_core_logger__WEBPACK_IMPORTED_MODULE_3__["warn"])(`Must return Subscription type in '[nzCustomRequest]' property`);
            }
            this.reqs[uid] = req$;
            (/** @type {?} */ (opt.onStart))(file);
        }));
    }
    /**
     * @private
     * @param {?} args
     * @return {?}
     */
    xhr(args) {
        /** @type {?} */
        const formData = new FormData();
        if (args.data) {
            Object.keys(args.data).map((/**
             * @param {?} key
             * @return {?}
             */
            key => {
                formData.append(key, (/** @type {?} */ (args.data))[key]);
            }));
        }
        formData.append((/** @type {?} */ (args.name)), (/** @type {?} */ (args.postFile)));
        if (!args.headers) {
            args.headers = {};
        }
        if (args.headers['X-Requested-With'] !== null) {
            args.headers['X-Requested-With'] = `XMLHttpRequest`;
        }
        else {
            delete args.headers['X-Requested-With'];
        }
        /** @type {?} */
        const req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpRequest"]('POST', (/** @type {?} */ (args.action)), formData, {
            reportProgress: true,
            withCredentials: args.withCredentials,
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"](args.headers)
        });
        return this.http.request(req).subscribe((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpEventType"].UploadProgress) {
                if ((/** @type {?} */ (event.total)) > 0) {
                    ((/** @type {?} */ (event))).percent = (event.loaded / (/** @type {?} */ (event.total))) * 100;
                }
                (/** @type {?} */ (args.onProgress))(event, args.file);
            }
            else if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]) {
                (/** @type {?} */ (args.onSuccess))(event.body, args.file, event);
            }
        }), (/**
         * @param {?} err
         * @return {?}
         */
        err => {
            this.abort(args.file);
            (/** @type {?} */ (args.onError))(err, args.file);
        }));
    }
    /**
     * @private
     * @param {?} uid
     * @return {?}
     */
    clean(uid) {
        /** @type {?} */
        const req$ = this.reqs[uid];
        if (req$ instanceof rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"]) {
            req$.unsubscribe();
        }
        delete this.reqs[uid];
    }
    /**
     * @param {?=} file
     * @return {?}
     */
    abort(file) {
        if (file) {
            this.clean(file && file.uid);
        }
        else {
            Object.keys(this.reqs).forEach((/**
             * @param {?} uid
             * @return {?}
             */
            uid => this.clean(uid)));
        }
    }
    /**
     * @private
     * @return {?}
     */
    setClassMap() {
        this.hostClassMap = Object.assign({ [this.prefixCls]: true, [`${this.prefixCls}-disabled`]: this.options.disabled }, this.classes);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.inited = true;
        this.setClassMap();
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        if (this.inited) {
            this.setClassMap();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy = true;
        this.abort();
    }
}
NzUploadBtnComponent.ɵfac = function NzUploadBtnComponent_Factory(t) { return new (t || NzUploadBtnComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], 8)); };
NzUploadBtnComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NzUploadBtnComponent, selectors: [["", "nz-upload-btn", ""]], viewQuery: function NzUploadBtnComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.file = _t.first);
    } }, hostVars: 4, hostBindings: function NzUploadBtnComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NzUploadBtnComponent_click_HostBindingHandler() { return ctx.onClick(); })("keydown", function NzUploadBtnComponent_keydown_HostBindingHandler($event) { return ctx.onKeyDown($event); })("drop", function NzUploadBtnComponent_drop_HostBindingHandler($event) { return ctx.onFileDrop($event); })("dragover", function NzUploadBtnComponent_dragover_HostBindingHandler($event) { return ctx.onFileDrop($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("tabindex", "0")("role", "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx.hostClassMap);
    } }, inputs: { classes: "classes", options: "options" }, exportAs: ["nzUploadBtn"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]], attrs: _c1, ngContentSelectors: _c2, decls: 3, vars: 4, consts: [["type", "file", 2, "display", "none", 3, "multiple", "change"], ["file", ""]], template: function NzUploadBtnComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "input", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function NzUploadBtnComponent_Template_input_change_0_listener($event) { return ctx.onChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("multiple", ctx.options.multiple);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("accept", ctx.options.accept)("directory", ctx.options.directory ? "directory" : null)("webkitdirectory", ctx.options.directory ? "webkitdirectory" : null);
    } }, encapsulation: 2 });
/** @nocollapse */
NzUploadBtnComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }] }
];
NzUploadBtnComponent.propDecorators = {
    file: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['file', { static: false },] }],
    classes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    onClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"], args: ['click',] }],
    onKeyDown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"], args: ['keydown', ['$event'],] }],
    onFileDrop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"], args: ['drop', ['$event'],] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"], args: ['dragover', ['$event'],] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: upload-list.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const isImageFileType = (/**
 * @param {?} type
 * @return {?}
 */
(type) => !!type && type.indexOf('image/') === 0);
const ɵ0 = isImageFileType;
/** @type {?} */
const MEASURE_SIZE = 200;
/**
 * @record
 */
function UploadListFile() { }
if (false) {}
class NzUploadListComponent {
    // #endregion
    /**
     * @param {?} cdr
     * @param {?} doc
     * @param {?} ngZone
     * @param {?} platform
     */
    constructor(cdr, doc, ngZone, platform) {
        this.cdr = cdr;
        this.doc = doc;
        this.ngZone = ngZone;
        this.platform = platform;
        this.hostClassMap = {};
        // #region fields
        this.locale = {};
        // #endregion
        // #region styles
        this.prefixCls = 'ant-upload-list';
    }
    /**
     * @private
     * @return {?}
     */
    get showPic() {
        return this.listType === 'picture' || this.listType === 'picture-card';
    }
    /**
     * @param {?} list
     * @return {?}
     */
    set items(list) {
        this.list = list;
    }
    /**
     * @private
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    setClassMap() {
        (/** @type {?} */ (this)).hostClassMap = {
            [(/** @type {?} */ (this)).prefixCls]: true,
            [`${(/** @type {?} */ (this)).prefixCls}-${(/** @type {?} */ (this)).listType}`]: true
        };
        return (/** @type {?} */ (this));
    }
    // #endregion
    // #region render
    /**
     * @private
     * @param {?} file
     * @return {?}
     */
    genErr(file) {
        if (file.response && typeof file.response === 'string') {
            return file.response;
        }
        return (file.error && file.error.statusText) || this.locale.uploadError;
    }
    /**
     * @private
     * @param {?} url
     * @return {?}
     */
    extname(url) {
        /** @type {?} */
        const temp = url.split('/');
        /** @type {?} */
        const filename = temp[temp.length - 1];
        /** @type {?} */
        const filenameWithoutSuffix = filename.split(/#|\?/)[0];
        return (/\.[^./\\]*$/.exec(filenameWithoutSuffix) || [''])[0];
    }
    /**
     * @param {?} file
     * @return {?}
     */
    isImageUrl(file) {
        if (isImageFileType((/** @type {?} */ (file.type)))) {
            return true;
        }
        /** @type {?} */
        const url = (/** @type {?} */ ((file.thumbUrl || file.url || '')));
        if (!url) {
            return false;
        }
        /** @type {?} */
        const extension = this.extname(url);
        if (/^data:image\//.test(url) || /(webp|svg|png|gif|jpg|jpeg|jfif|bmp|dpg)$/i.test(extension)) {
            return true;
        }
        else if (/^data:/.test(url)) {
            // other file types of base64
            return false;
        }
        else if (extension) {
            // other file types which have extension
            return false;
        }
        return true;
    }
    /**
     * @private
     * @param {?} file
     * @return {?}
     */
    getIconType(file) {
        if (!this.showPic) {
            return '';
        }
        if (file.isUploading || (!file.thumbUrl && !file.url)) {
            return 'uploading';
        }
        else {
            return 'thumbnail';
        }
    }
    /**
     * @private
     * @param {?} file
     * @return {?}
     */
    previewImage(file) {
        return new Promise((/**
         * @param {?} resolve
         * @return {?}
         */
        resolve => {
            if (!isImageFileType(file.type)) {
                resolve('');
                return;
            }
            this.ngZone.runOutsideAngular((/**
             * @return {?}
             */
            () => {
                /** @type {?} */
                const canvas = this.doc.createElement('canvas');
                canvas.width = MEASURE_SIZE;
                canvas.height = MEASURE_SIZE;
                canvas.style.cssText = `position: fixed; left: 0; top: 0; width: ${MEASURE_SIZE}px; height: ${MEASURE_SIZE}px; z-index: 9999; display: none;`;
                this.doc.body.appendChild(canvas);
                /** @type {?} */
                const ctx = canvas.getContext('2d');
                /** @type {?} */
                const img = new Image();
                img.onload = (/**
                 * @return {?}
                 */
                () => {
                    const { width, height } = img;
                    /** @type {?} */
                    let drawWidth = MEASURE_SIZE;
                    /** @type {?} */
                    let drawHeight = MEASURE_SIZE;
                    /** @type {?} */
                    let offsetX = 0;
                    /** @type {?} */
                    let offsetY = 0;
                    if (width < height) {
                        drawHeight = height * (MEASURE_SIZE / width);
                        offsetY = -(drawHeight - drawWidth) / 2;
                    }
                    else {
                        drawWidth = width * (MEASURE_SIZE / height);
                        offsetX = -(drawWidth - drawHeight) / 2;
                    }
                    try {
                        (/** @type {?} */ (ctx)).drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
                    }
                    catch (_a) { }
                    /** @type {?} */
                    const dataURL = canvas.toDataURL();
                    this.doc.body.removeChild(canvas);
                    resolve(dataURL);
                });
                img.src = window.URL.createObjectURL(file);
            }));
        }));
    }
    /**
     * @private
     * @return {?}
     */
    genThumb() {
        if (!this.platform.isBrowser) {
            return;
        }
        /** @type {?} */
        const win = (/** @type {?} */ (window));
        if (!this.showPic || typeof document === 'undefined' || typeof win === 'undefined' || !win.FileReader || !win.File) {
            return;
        }
        this.list
            .filter((/**
         * @param {?} file
         * @return {?}
         */
        file => file.originFileObj instanceof File && file.thumbUrl === undefined))
            .forEach((/**
         * @param {?} file
         * @return {?}
         */
        file => {
            file.thumbUrl = '';
            (this.previewFile ? this.previewFile(file).toPromise() : this.previewImage((/** @type {?} */ (file.originFileObj)))).then((/**
             * @param {?} dataUrl
             * @return {?}
             */
            dataUrl => {
                file.thumbUrl = dataUrl;
                this.detectChanges();
            }));
        }));
    }
    /**
     * @private
     * @param {?} file
     * @return {?}
     */
    listItemNameCls(file) {
        /** @type {?} */
        const count = [this.showDownload(file), this.icons.showRemoveIcon].filter((/**
         * @param {?} x
         * @return {?}
         */
        x => x)).length;
        return {
            [`${this.prefixCls}-item-name`]: true,
            [`${this.prefixCls}-item-name-icon-count-${count}`]: true
        };
    }
    /**
     * @private
     * @param {?} file
     * @return {?}
     */
    showDownload(file) {
        return !!(this.icons.showDownloadIcon && file.status === 'done');
    }
    /**
     * @private
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    fixData() {
        (/** @type {?} */ (this)).list.forEach((/**
         * @param {?} file
         * @return {?}
         */
        file => {
            file.message = (/** @type {?} */ (this)).genErr(file);
            file.linkProps = typeof file.linkProps === 'string' ? JSON.parse(file.linkProps) : file.linkProps;
            file.isImageUrl = (/** @type {?} */ (this)).isImageUrl(file);
            file.iconType = (/** @type {?} */ (this)).getIconType(file);
            file.isUploading = file.status === 'uploading';
            file.listItemNameCls = (/** @type {?} */ (this)).listItemNameCls(file);
            file.showDownload = (/** @type {?} */ (this)).showDownload(file);
        }));
        return (/** @type {?} */ (this));
    }
    /**
     * @param {?} file
     * @param {?} e
     * @return {?}
     */
    handlePreview(file, e) {
        if (!this.onPreview) {
            return;
        }
        e.preventDefault();
        return this.onPreview(file);
    }
    /**
     * @param {?} file
     * @param {?} e
     * @return {?}
     */
    handleRemove(file, e) {
        e.preventDefault();
        if (this.onRemove) {
            this.onRemove(file);
        }
        return;
    }
    /**
     * @param {?} file
     * @return {?}
     */
    handleDownload(file) {
        if (typeof this.onDownload === 'function') {
            this.onDownload(file);
        }
        else if (file.url) {
            window.open(file.url);
        }
    }
    /**
     * @return {?}
     */
    detectChanges() {
        this.fixData();
        this.cdr.detectChanges();
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.fixData()
            .setClassMap()
            .genThumb();
    }
}
NzUploadListComponent.ɵfac = function NzUploadListComponent_Factory(t) { return new (t || NzUploadListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"])); };
NzUploadListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NzUploadListComponent, selectors: [["nz-upload-list"]], hostVars: 2, hostBindings: function NzUploadListComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx.hostClassMap);
    } }, inputs: { locale: "locale", items: "items", listType: "listType", icons: "icons", onPreview: "onPreview", onRemove: "onRemove", onDownload: "onDownload", previewFile: "previewFile", iconRender: "iconRender" }, exportAs: ["nzUploadList"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]], decls: 1, vars: 1, consts: [["nz-tooltip", "", 3, "class", "nzTooltipTitle", 4, "ngFor", "ngForOf"], ["nz-tooltip", "", 3, "nzTooltipTitle"], ["icon", ""], ["iconNode", ""], ["downloadOrDelete", ""], ["preview", ""], ["removeIcon", ""], ["downloadIcon", ""], [1, "ant-upload-list-item-info"], [3, "ngTemplateOutlet"], ["class", "ant-upload-list-item-actions", 4, "ngIf"], ["class", "ant-upload-list-item-progress", 4, "ngIf"], [3, "ngSwitch"], ["class", "ant-upload-list-item-thumbnail", 3, "ant-upload-list-item-file", 4, "ngSwitchCase"], ["class", "ant-upload-list-item-thumbnail", "target", "_blank", "rel", "noopener noreferrer", 3, "ant-upload-list-item-file", "href", "click", 4, "ngSwitchCase"], ["class", "ant-upload-text-icon", 4, "ngSwitchDefault"], ["noImageThumbTpl", ""], [1, "ant-upload-list-item-thumbnail"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["target", "_blank", "rel", "noopener noreferrer", 1, "ant-upload-list-item-thumbnail", 3, "href", "click"], ["class", "ant-upload-list-item-image", 3, "src", 4, "ngIf", "ngIfElse"], [1, "ant-upload-list-item-image", 3, "src"], [1, "ant-upload-text-icon"], [4, "ngIf", "ngIfElse"], ["iconNodeFileIcon", ""], [4, "ngSwitchCase"], ["nz-icon", "", 3, "nzType", 4, "ngSwitchDefault"], ["nz-icon", "", "nzType", "loading"], ["nz-icon", "", 3, "nzType"], ["nz-icon", "", "nzTheme", "twotone", 3, "nzType"], [3, "class", 4, "ngIf"], [3, "title", 4, "ngIf"], [3, "title"], ["target", "_blank", "rel", "noopener noreferrer", 3, "ngClass", "title", "href", "click", 4, "ngIf"], [3, "ngClass", "title", "click", 4, "ngIf"], ["target", "_blank", "rel", "noopener noreferrer", 3, "ngClass", "title", "href", "click"], [3, "ngClass", "title", "click"], ["nz-icon", "", "nzType", "delete", 3, "title", "click", 4, "ngIf"], ["nz-icon", "", "nzType", "delete", 3, "title", "click"], ["nz-icon", "", "nzType", "download", 3, "title", "click", 4, "ngIf"], ["nz-icon", "", "nzType", "download", 3, "title", "click"], [1, "ant-upload-list-item-actions"], ["target", "_blank", "rel", "noopener noreferrer", 3, "href", "title", "ngStyle", "click", 4, "ngIf"], ["target", "_blank", "rel", "noopener noreferrer", 3, "href", "title", "ngStyle", "click"], ["nz-icon", "", "nzType", "eye"], [1, "ant-upload-list-item-progress"], ["nzType", "line", 3, "nzPercent", "nzShowInfo", "nzStrokeWidth"]], template: function NzUploadListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, NzUploadListComponent_div_0_Template, 19, 11, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.list);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_15__["NzTooltipDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgSwitchDefault"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_13__["NzIconDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgStyle"], ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_14__["NzProgressComponent"]], encapsulation: 2, data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('itemState', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ height: '0', width: '0', opacity: 0 }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])(150, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ height: '*', width: '*', opacity: 1 }))]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])(150, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ height: '0', width: '0', opacity: 0 }))])
            ])
        ] }, changeDetection: 0 });
/** @nocollapse */
NzUploadListComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"],] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"] },
    { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"] }
];
NzUploadListComponent.propDecorators = {
    locale: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    listType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    items: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    icons: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    onPreview: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    onRemove: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    onDownload: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    previewFile: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    iconRender: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: upload.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzUploadComponent {
    // #endregion
    /**
     * @param {?} cdr
     * @param {?} i18n
     */
    constructor(cdr, i18n) {
        this.cdr = cdr;
        this.i18n = i18n;
        this.locale = {};
        // #region fields
        this.nzType = 'select';
        this.nzLimit = 0;
        this.nzSize = 0;
        this.nzDirectory = false;
        this.nzOpenFileDialogOnClick = true;
        this.nzFilter = [];
        this.nzFileList = [];
        this.nzDisabled = false;
        this.nzListType = 'text';
        this.nzMultiple = false;
        this.nzName = 'file';
        this._showUploadList = true;
        this.nzShowButton = true;
        this.nzWithCredentials = false;
        this.nzChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.nzFileListChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.onStart = (/**
         * @param {?} file
         * @return {?}
         */
        (file) => {
            if (!this.nzFileList) {
                this.nzFileList = [];
            }
            /** @type {?} */
            const targetItem = this.fileToObject(file);
            targetItem.status = 'uploading';
            this.nzFileList = this.nzFileList.concat(targetItem);
            this.nzFileListChange.emit(this.nzFileList);
            this.nzChange.emit({ file: targetItem, fileList: this.nzFileList, type: 'start' });
            this.detectChangesList();
        });
        this.onProgress = (/**
         * @param {?} e
         * @param {?} file
         * @return {?}
         */
        (e, file) => {
            /** @type {?} */
            const fileList = this.nzFileList;
            /** @type {?} */
            const targetItem = this.getFileItem(file, fileList);
            targetItem.percent = e.percent;
            this.nzChange.emit({
                event: e,
                file: Object.assign({}, targetItem),
                fileList: this.nzFileList,
                type: 'progress'
            });
            this.detectChangesList();
        });
        this.onSuccess = (/**
         * @param {?} res
         * @param {?} file
         * @return {?}
         */
        (res, file) => {
            /** @type {?} */
            const fileList = this.nzFileList;
            /** @type {?} */
            const targetItem = this.getFileItem(file, fileList);
            targetItem.status = 'done';
            targetItem.response = res;
            this.nzChange.emit({
                file: Object.assign({}, targetItem),
                fileList,
                type: 'success'
            });
            this.detectChangesList();
        });
        this.onError = (/**
         * @param {?} err
         * @param {?} file
         * @return {?}
         */
        (err, file) => {
            /** @type {?} */
            const fileList = this.nzFileList;
            /** @type {?} */
            const targetItem = this.getFileItem(file, fileList);
            targetItem.error = err;
            targetItem.status = 'error';
            this.nzChange.emit({
                file: Object.assign({}, targetItem),
                fileList,
                type: 'error'
            });
            this.detectChangesList();
        });
        this.onRemove = (/**
         * @param {?} file
         * @return {?}
         */
        (file) => {
            this.uploadComp.abort(file);
            file.status = 'removed';
            /** @type {?} */
            const fnRes = typeof this.nzRemove === 'function' ? this.nzRemove(file) : this.nzRemove == null ? true : this.nzRemove;
            (fnRes instanceof rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"] ? fnRes : Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(fnRes)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])((/**
             * @param {?} res
             * @return {?}
             */
            (res) => res))).subscribe((/**
             * @return {?}
             */
            () => {
                this.nzFileList = this.removeFileItem(file, this.nzFileList);
                this.nzChange.emit({
                    file,
                    fileList: this.nzFileList,
                    type: 'removed'
                });
                this.nzFileListChange.emit(this.nzFileList);
                this.cdr.detectChanges();
            }));
        });
        // #endregion
        // #region styles
        this.prefixCls = 'ant-upload';
        this.classList = [];
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzShowUploadList(value) {
        this._showUploadList = typeof value === 'boolean' ? Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_10__["toBoolean"])(value) : value;
    }
    /**
     * @return {?}
     */
    get nzShowUploadList() {
        return this._showUploadList;
    }
    /**
     * @private
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    zipOptions() {
        if (typeof (/** @type {?} */ (this)).nzShowUploadList === 'boolean' && (/** @type {?} */ (this)).nzShowUploadList) {
            (/** @type {?} */ (this)).nzShowUploadList = {
                showPreviewIcon: true,
                showRemoveIcon: true,
                showDownloadIcon: true
            };
        }
        // filters
        /** @type {?} */
        const filters = (/** @type {?} */ (this)).nzFilter.slice();
        if ((/** @type {?} */ (this)).nzMultiple && (/** @type {?} */ (this)).nzLimit > 0 && filters.findIndex((/**
         * @param {?} w
         * @return {?}
         */
        w => w.name === 'limit')) === -1) {
            filters.push({
                name: 'limit',
                fn: (/**
                 * @param {?} fileList
                 * @return {?}
                 */
                (fileList) => fileList.slice(-(/** @type {?} */ (this)).nzLimit))
            });
        }
        if ((/** @type {?} */ (this)).nzSize > 0 && filters.findIndex((/**
         * @param {?} w
         * @return {?}
         */
        w => w.name === 'size')) === -1) {
            filters.push({
                name: 'size',
                fn: (/**
                 * @param {?} fileList
                 * @return {?}
                 */
                (fileList) => fileList.filter((/**
                 * @param {?} w
                 * @return {?}
                 */
                w => (/** @type {?} */ (w.size)) / 1024 <= (/** @type {?} */ (this)).nzSize)))
            });
        }
        if ((/** @type {?} */ (this)).nzFileType && (/** @type {?} */ (this)).nzFileType.length > 0 && filters.findIndex((/**
         * @param {?} w
         * @return {?}
         */
        w => w.name === 'type')) === -1) {
            /** @type {?} */
            const types = (/** @type {?} */ (this)).nzFileType.split(',');
            filters.push({
                name: 'type',
                fn: (/**
                 * @param {?} fileList
                 * @return {?}
                 */
                (fileList) => fileList.filter((/**
                 * @param {?} w
                 * @return {?}
                 */
                w => ~types.indexOf((/** @type {?} */ (w.type))))))
            });
        }
        (/** @type {?} */ (this))._btnOptions = {
            disabled: (/** @type {?} */ (this)).nzDisabled,
            accept: (/** @type {?} */ (this)).nzAccept,
            action: (/** @type {?} */ (this)).nzAction,
            directory: (/** @type {?} */ (this)).nzDirectory,
            openFileDialogOnClick: (/** @type {?} */ (this)).nzOpenFileDialogOnClick,
            beforeUpload: (/** @type {?} */ (this)).nzBeforeUpload,
            customRequest: (/** @type {?} */ (this)).nzCustomRequest,
            data: (/** @type {?} */ (this)).nzData,
            headers: (/** @type {?} */ (this)).nzHeaders,
            name: (/** @type {?} */ (this)).nzName,
            multiple: (/** @type {?} */ (this)).nzMultiple,
            withCredentials: (/** @type {?} */ (this)).nzWithCredentials,
            filters,
            transformFile: (/** @type {?} */ (this)).nzTransformFile,
            onStart: (/** @type {?} */ (this)).onStart,
            onProgress: (/** @type {?} */ (this)).onProgress,
            onSuccess: (/** @type {?} */ (this)).onSuccess,
            onError: (/** @type {?} */ (this)).onError
        };
        return (/** @type {?} */ (this));
    }
    // #region upload
    /**
     * @private
     * @param {?} file
     * @return {?}
     */
    fileToObject(file) {
        return {
            lastModified: file.lastModified,
            lastModifiedDate: file.lastModifiedDate,
            name: file.filename || file.name,
            size: file.size,
            type: file.type,
            uid: file.uid,
            response: file.response,
            error: file.error,
            percent: 0,
            originFileObj: (/** @type {?} */ (file))
        };
    }
    /**
     * @private
     * @param {?} file
     * @param {?} fileList
     * @return {?}
     */
    getFileItem(file, fileList) {
        return fileList.filter((/**
         * @param {?} item
         * @return {?}
         */
        item => item.uid === file.uid))[0];
    }
    /**
     * @private
     * @param {?} file
     * @param {?} fileList
     * @return {?}
     */
    removeFileItem(file, fileList) {
        return fileList.filter((/**
         * @param {?} item
         * @return {?}
         */
        item => item.uid !== file.uid));
    }
    // skip safari bug
    /**
     * @param {?} e
     * @return {?}
     */
    fileDrop(e) {
        if (e.type === this.dragState) {
            return;
        }
        this.dragState = e.type;
        this.setClassMap();
    }
    // #endregion
    // #region list
    /**
     * @private
     * @return {?}
     */
    detectChangesList() {
        this.cdr.detectChanges();
        this.listComp.detectChanges();
    }
    /**
     * @private
     * @return {?}
     */
    setClassMap() {
        /** @type {?} */
        let subCls = [];
        if (this.nzType === 'drag') {
            if (this.nzFileList.some((/**
             * @param {?} file
             * @return {?}
             */
            file => file.status === 'uploading'))) {
                subCls.push(`${this.prefixCls}-drag-uploading`);
            }
            if (this.dragState === 'dragover') {
                subCls.push(`${this.prefixCls}-drag-hover`);
            }
        }
        else {
            subCls = [`${this.prefixCls}-select-${this.nzListType}`];
        }
        this.classList = [
            this.prefixCls,
            `${this.prefixCls}-${this.nzType}`,
            ...subCls,
            (this.nzDisabled && `${this.prefixCls}-disabled`) || ''
        ].filter((/**
         * @param {?} item
         * @return {?}
         */
        item => !!item));
        this.cdr.detectChanges();
    }
    // #endregion
    /**
     * @return {?}
     */
    ngOnInit() {
        this.i18n$ = this.i18n.localeChange.subscribe((/**
         * @return {?}
         */
        () => {
            this.locale = this.i18n.getLocaleData('Upload');
            this.detectChangesList();
        }));
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.zipOptions().setClassMap();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.i18n$.unsubscribe();
    }
}
NzUploadComponent.ɵfac = function NzUploadComponent_Factory(t) { return new (t || NzUploadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_11__["NzI18nService"])); };
NzUploadComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NzUploadComponent, selectors: [["nz-upload"]], viewQuery: function NzUploadComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c5, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c6, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.uploadComp = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.listComp = _t.first);
    } }, hostVars: 2, hostBindings: function NzUploadComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("ant-upload-picture-card-wrapper", ctx.nzListType === "picture-card");
    } }, inputs: { nzType: "nzType", nzLimit: "nzLimit", nzSize: "nzSize", nzDirectory: "nzDirectory", nzOpenFileDialogOnClick: "nzOpenFileDialogOnClick", nzFilter: "nzFilter", nzFileList: "nzFileList", nzDisabled: "nzDisabled", nzListType: "nzListType", nzMultiple: "nzMultiple", nzName: "nzName", nzShowButton: "nzShowButton", nzWithCredentials: "nzWithCredentials", nzShowUploadList: "nzShowUploadList", nzFileType: "nzFileType", nzAccept: "nzAccept", nzAction: "nzAction", nzBeforeUpload: "nzBeforeUpload", nzCustomRequest: "nzCustomRequest", nzData: "nzData", nzHeaders: "nzHeaders", nzRemove: "nzRemove", nzPreview: "nzPreview", nzPreviewFile: "nzPreviewFile", nzTransformFile: "nzTransformFile", nzDownload: "nzDownload", nzIconRender: "nzIconRender" }, outputs: { nzChange: "nzChange", nzFileListChange: "nzFileListChange" }, exportAs: ["nzUpload"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c2, decls: 11, vars: 2, consts: [["list", ""], ["con", ""], ["btn", ""], [4, "ngIf", "ngIfElse"], ["select", ""], ["pic", ""], [3, "locale", "listType", "items", "icons", "iconRender", "previewFile", "onPreview", "onRemove", "onDownload"], ["listComp", ""], [3, "ngClass"], ["nz-upload-btn", "", 3, "options"], ["uploadComp", ""], [3, "ngTemplateOutlet"], [3, "ngClass", "drop", "dragover", "dragleave"], ["nz-upload-btn", "", 3, "options", "classes"], [1, "ant-upload-drag-container"]], template: function NzUploadComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, NzUploadComponent_ng_template_0_Template, 2, 12, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NzUploadComponent_ng_template_2_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, NzUploadComponent_ng_template_4_Template, 4, 5, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, NzUploadComponent_ng_container_6_Template, 7, 6, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, NzUploadComponent_ng_template_7_Template, 1, 2, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, NzUploadComponent_ng_template_9_Template, 2, 2, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r429 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.nzType === "drag")("ngIfElse", _r429);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], NzUploadListComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], NzUploadBtnComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgTemplateOutlet"]], encapsulation: 2, changeDetection: 0 });
/** @nocollapse */
NzUploadComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
    { type: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_11__["NzI18nService"] }
];
NzUploadComponent.propDecorators = {
    uploadComp: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['uploadComp', { static: false },] }],
    listComp: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['listComp', { static: false },] }],
    nzType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzLimit: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzFileType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzAccept: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzAction: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzDirectory: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzOpenFileDialogOnClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzBeforeUpload: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzCustomRequest: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzFilter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzFileList: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzHeaders: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzListType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzMultiple: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzShowUploadList: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzShowButton: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzWithCredentials: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzRemove: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzPreview: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzPreviewFile: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzTransformFile: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzDownload: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzIconRender: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
    nzFileListChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }]
};
Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_10__["InputNumber"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__metadata"])("design:type", Object)
], NzUploadComponent.prototype, "nzLimit", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_10__["InputNumber"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__metadata"])("design:type", Object)
], NzUploadComponent.prototype, "nzSize", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_10__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__metadata"])("design:type", Object)
], NzUploadComponent.prototype, "nzDirectory", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_10__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__metadata"])("design:type", Object)
], NzUploadComponent.prototype, "nzOpenFileDialogOnClick", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_10__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__metadata"])("design:type", Object)
], NzUploadComponent.prototype, "nzDisabled", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_10__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__metadata"])("design:type", Object)
], NzUploadComponent.prototype, "nzMultiple", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_10__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__metadata"])("design:type", Object)
], NzUploadComponent.prototype, "nzShowButton", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_10__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_9__["__metadata"])("design:type", Object)
], NzUploadComponent.prototype, "nzWithCredentials", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NzUploadBtnComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: '[nz-upload-btn]',
                exportAs: 'nzUploadBtn',
                template: "<input\n  type=\"file\"\n  #file\n  (change)=\"onChange($event)\"\n  [attr.accept]=\"options.accept\"\n  [attr.directory]=\"options.directory ? 'directory' : null\"\n  [attr.webkitdirectory]=\"options.directory ? 'webkitdirectory' : null\"\n  [multiple]=\"options.multiple\"\n  style=\"display: none;\"\n/>\n<ng-content></ng-content>\n",
                host: {
                    '[attr.tabindex]': '"0"',
                    '[attr.role]': '"button"',
                    '[class]': 'hostClassMap'
                },
                preserveWhitespaces: false,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }] }]; }, { classes: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
            args: ['click']
        }], onKeyDown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
            args: ['keydown', ['$event']]
        }], onFileDrop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
            args: ['drop', ['$event']]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
            args: ['dragover', ['$event']]
        }], file: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ['file', { static: false }]
        }], options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NzUploadListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'nz-upload-list',
                exportAs: 'nzUploadList',
                template: "<div\n  *ngFor=\"let file of list\"\n  class=\"ant-upload-list-item ant-upload-list-item-{{\n    file.status\n  }} ant-upload-list-item-list-type-{{ listType }}\"\n  [attr.data-key]=\"file.key\"\n  @itemState\n  nz-tooltip\n  [nzTooltipTitle]=\"file.status === 'error' ? file.message : null\"\n>\n  <ng-template #icon>\n    <ng-container [ngSwitch]=\"file.iconType\">\n      <div\n        *ngSwitchCase=\"'uploading'\"\n        class=\"ant-upload-list-item-thumbnail\"\n        [class.ant-upload-list-item-file]=\"!file.isUploading\"\n      >\n        <ng-template\n          [ngTemplateOutlet]=\"iconNode\"\n          [ngTemplateOutletContext]=\"{ $implicit: file }\"\n        ></ng-template>\n      </div>\n      <a\n        *ngSwitchCase=\"'thumbnail'\"\n        class=\"ant-upload-list-item-thumbnail\"\n        [class.ant-upload-list-item-file]=\"!file.isImageUrl\"\n        target=\"_blank\"\n        rel=\"noopener noreferrer\"\n        [href]=\"file.url || file.thumbUrl\"\n        (click)=\"handlePreview(file, $event)\"\n      >\n        <img\n          *ngIf=\"file.isImageUrl; else noImageThumbTpl\"\n          class=\"ant-upload-list-item-image\"\n          [src]=\"file.thumbUrl || file.url\"\n          [attr.alt]=\"file.name\"\n        />\n      </a>\n      <span *ngSwitchDefault class=\"ant-upload-text-icon\">\n        <ng-template\n          [ngTemplateOutlet]=\"iconNode\"\n          [ngTemplateOutletContext]=\"{ $implicit: file }\"\n        ></ng-template>\n      </span>\n    </ng-container>\n    <ng-template #noImageThumbTpl>\n      <ng-template\n        [ngTemplateOutlet]=\"iconNode\"\n        [ngTemplateOutletContext]=\"{ $implicit: file }\"\n      ></ng-template>\n    </ng-template>\n  </ng-template>\n  <ng-template #iconNode let-file>\n    <ng-container *ngIf=\"!iconRender; else iconRender\">\n      <ng-container [ngSwitch]=\"listType\">\n        <ng-container *ngSwitchCase=\"'picture'\">\n          <ng-container *ngIf=\"file.isUploading; else iconNodeFileIcon\">\n            <i nz-icon nzType=\"loading\"></i>\n          </ng-container>\n        </ng-container>\n        <ng-container *ngSwitchCase=\"'picture-card'\">\n          <ng-container *ngIf=\"file.isUploading; else iconNodeFileIcon\">{{\n            locale.uploading\n          }}</ng-container>\n        </ng-container>\n        <i *ngSwitchDefault nz-icon [nzType]=\"file.isUploading ? 'loading' : 'paper-clip'\"></i>\n      </ng-container>\n    </ng-container>\n    <ng-template #iconNodeFileIcon>\n      <i nz-icon [nzType]=\"file.isImageUrl ? 'picture' : 'file'\" nzTheme=\"twotone\"></i>\n    </ng-template>\n  </ng-template>\n  <ng-template #downloadOrDelete>\n    <span\n      *ngIf=\"listType !== 'picture-card'\"\n      class=\"ant-upload-list-item-card-actions {{ listType === 'picture' ? 'picture' : '' }}\"\n    >\n      <a *ngIf=\"file.showDownload\" title=\"{{ locale.downloadFile }}\">\n        <ng-template [ngTemplateOutlet]=\"downloadIcon\"></ng-template>\n      </a>\n      <a *ngIf=\"icons.showRemoveIcon\" title=\"{{ locale.removeFile }}\">\n        <ng-template [ngTemplateOutlet]=\"removeIcon\"></ng-template>\n      </a>\n    </span>\n  </ng-template>\n  <ng-template #preview>\n    <a\n      *ngIf=\"file.url\"\n      target=\"_blank\"\n      rel=\"noopener noreferrer\"\n      [ngClass]=\"file.listItemNameCls\"\n      title=\"{{ file.name }}\"\n      [href]=\"file.url\"\n      [attr.download]=\"file.linkProps && file.linkProps.download\"\n      (click)=\"handlePreview(file, $event)\"\n      >{{ file.name }}</a\n    >\n    <span\n      *ngIf=\"!file.url\"\n      [ngClass]=\"file.listItemNameCls\"\n      title=\"{{ file.name }}\"\n      (click)=\"handlePreview(file, $event)\"\n      >{{ file.name }}</span\n    >\n    <ng-template [ngTemplateOutlet]=\"downloadOrDelete\"></ng-template>\n  </ng-template>\n  <ng-template #removeIcon>\n    <i\n      *ngIf=\"icons.showRemoveIcon\"\n      (click)=\"handleRemove(file, $event)\"\n      nz-icon\n      nzType=\"delete\"\n      title=\"{{ locale.removeFile }}\"\n    ></i>\n  </ng-template>\n  <ng-template #downloadIcon>\n    <i\n      *ngIf=\"file.showDownload\"\n      (click)=\"handleDownload(file)\"\n      nz-icon\n      nzType=\"download\"\n      title=\"{{ locale.downloadFile }}\"\n    ></i>\n  </ng-template>\n  <div class=\"ant-upload-list-item-info\">\n    <span>\n      <ng-template [ngTemplateOutlet]=\"icon\"></ng-template>\n      <ng-template [ngTemplateOutlet]=\"preview\"></ng-template>\n    </span>\n  </div>\n  <span\n    *ngIf=\"listType === 'picture-card' && !file.isUploading\"\n    class=\"ant-upload-list-item-actions\"\n  >\n    <a\n      *ngIf=\"icons.showPreviewIcon\"\n      [href]=\"file.url || file.thumbUrl\"\n      target=\"_blank\"\n      rel=\"noopener noreferrer\"\n      title=\"{{ locale.previewFile }}\"\n      [ngStyle]=\"!(file.url || file.thumbUrl) && { opacity: 0.5, 'pointer-events': 'none' }\"\n      (click)=\"handlePreview(file, $event)\"\n    >\n      <i nz-icon nzType=\"eye\"></i>\n    </a>\n    <ng-template [ngTemplateOutlet]=\"downloadIcon\"></ng-template>\n    <ng-template [ngTemplateOutlet]=\"removeIcon\"></ng-template>\n  </span>\n  <div *ngIf=\"file.isUploading\" class=\"ant-upload-list-item-progress\">\n    <nz-progress\n      [nzPercent]=\"file.percent\"\n      nzType=\"line\"\n      [nzShowInfo]=\"false\"\n      [nzStrokeWidth]=\"2\"\n    ></nz-progress>\n  </div>\n</div>\n",
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('itemState', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ height: '0', width: '0', opacity: 0 }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])(150, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ height: '*', width: '*', opacity: 1 }))]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])(150, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ height: '0', width: '0', opacity: 0 }))])
                    ])
                ],
                host: {
                    '[class]': 'hostClassMap'
                },
                preserveWhitespaces: false,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"]]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"] }, { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"] }]; }, { locale: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], items: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], listType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], icons: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], onPreview: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], onRemove: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], onDownload: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], previewFile: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], iconRender: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NzUploadComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'nz-upload',
                exportAs: 'nzUpload',
                template: "<ng-template #list>\n  <nz-upload-list\n    #listComp\n    [style.display]=\"nzShowUploadList ? '' : 'none'\"\n    [locale]=\"locale\"\n    [listType]=\"nzListType\"\n    [items]=\"nzFileList || []\"\n    [icons]=\"nzShowUploadList\"\n    [iconRender]=\"nzIconRender\"\n    [previewFile]=\"nzPreviewFile\"\n    [onPreview]=\"nzPreview\"\n    [onRemove]=\"onRemove\"\n    [onDownload]=\"nzDownload\"\n  ></nz-upload-list>\n</ng-template>\n<ng-template #con><ng-content></ng-content></ng-template>\n<ng-template #btn>\n  <div [ngClass]=\"classList\" [style.display]=\"nzShowButton ? '' : 'none'\">\n    <div nz-upload-btn #uploadComp [options]=\"_btnOptions\">\n      <ng-template [ngTemplateOutlet]=\"con\"></ng-template>\n    </div>\n  </div>\n</ng-template>\n<ng-container *ngIf=\"nzType === 'drag'; else select\">\n  <div\n    [ngClass]=\"classList\"\n    (drop)=\"fileDrop($event)\"\n    (dragover)=\"fileDrop($event)\"\n    (dragleave)=\"fileDrop($event)\"\n  >\n    <div nz-upload-btn #uploadComp [options]=\"_btnOptions\" [classes]=\"{ 'ant-upload-btn': true }\">\n      <div class=\"ant-upload-drag-container\">\n        <ng-template [ngTemplateOutlet]=\"con\"></ng-template>\n      </div>\n    </div>\n  </div>\n  <ng-template [ngTemplateOutlet]=\"list\"></ng-template>\n</ng-container>\n<ng-template #select>\n  <ng-container *ngIf=\"nzListType === 'picture-card'; else pic\">\n    <ng-template [ngTemplateOutlet]=\"list\"></ng-template>\n    <ng-template [ngTemplateOutlet]=\"btn\"></ng-template>\n  </ng-container>\n</ng-template>\n<ng-template #pic>\n  <ng-template [ngTemplateOutlet]=\"btn\"></ng-template>\n  <ng-template [ngTemplateOutlet]=\"list\"></ng-template>\n</ng-template>\n",
                preserveWhitespaces: false,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
                host: {
                    '[class.ant-upload-picture-card-wrapper]': 'nzListType === "picture-card"'
                }
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] }, { type: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_11__["NzI18nService"] }]; }, { nzType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzLimit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzDirectory: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzOpenFileDialogOnClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzFilter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzFileList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzListType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzMultiple: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzShowButton: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzWithCredentials: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], nzFileListChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], nzShowUploadList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], uploadComp: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ['uploadComp', { static: false }]
        }], listComp: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ['listComp', { static: false }]
        }], nzFileType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzAccept: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzAction: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzBeforeUpload: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzCustomRequest: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzHeaders: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzRemove: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzPreview: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzPreviewFile: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzTransformFile: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzDownload: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzIconRender: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: upload.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzUploadModule {
}
NzUploadModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: NzUploadModule });
NzUploadModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function NzUploadModule_Factory(t) { return new (t || NzUploadModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["PlatformModule"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_15__["NzToolTipModule"], ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_14__["NzProgressModule"], ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_11__["NzI18nModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_13__["NzIconModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](NzUploadModule, { declarations: function () { return [NzUploadComponent,
        NzUploadBtnComponent,
        NzUploadListComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["PlatformModule"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_15__["NzToolTipModule"], ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_14__["NzProgressModule"], ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_11__["NzI18nModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_13__["NzIconModule"]]; }, exports: function () { return [NzUploadComponent]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NzUploadModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["PlatformModule"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_15__["NzToolTipModule"], ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_14__["NzProgressModule"], ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_11__["NzI18nModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_13__["NzIconModule"]],
                declarations: [NzUploadComponent, NzUploadBtnComponent, NzUploadListComponent],
                exports: [NzUploadComponent]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ng-zorro-antd-upload.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ng-zorro-antd-upload.js.map

/***/ })

};;
//# sourceMappingURL=code-editor-index-module~space-index-module~upload-index-module.js.map