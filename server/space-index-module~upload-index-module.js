exports.ids = ["space-index-module~upload-index-module"];
exports.modules = {

/***/ "4PsB":
/*!***************************************************************!*\
  !*** ./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-upload.js ***!
  \***************************************************************/
/*! exports provided: NzUploadBtnComponent, NzUploadComponent, NzUploadListComponent, NzUploadModule, ɵ0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzUploadBtnComponent", function() { return NzUploadBtnComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzUploadComponent", function() { return NzUploadComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzUploadListComponent", function() { return NzUploadListComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzUploadModule", function() { return NzUploadModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ0", function() { return ɵ0; });
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/keycodes */ "FtGj");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_core_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/core/logger */ "RuSR");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/platform */ "nLfN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ "zOht");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/core/util */ "d1+9");
/* harmony import */ var ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/i18n */ "d4FC");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/button */ "TZWX");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/icon */ "MOHP");
/* harmony import */ var ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/progress */ "cpkz");
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ "pk25");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "uLhK");


















/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */











const _c0 = ["file"];
const _c1 = ["nz-upload-btn", ""];
const _c2 = ["*"];
function NzUploadListComponent_div_0_ng_template_2_div_1_ng_template_1_Template(rf, ctx) { }
const _c3 = function (a0) { return { $implicit: a0 }; };
function NzUploadListComponent_div_0_ng_template_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzUploadListComponent_div_0_ng_template_2_div_1_ng_template_1_Template, 0, 0, "ng-template", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const file_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("ant-upload-list-item-file", !file_r1.isUploading);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r4)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](4, _c3, file_r1));
} }
function NzUploadListComponent_div_0_ng_template_2_a_2_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 21);
} if (rf & 2) {
    const file_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", file_r1.thumbUrl || file_r1.url, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("alt", file_r1.name);
} }
function NzUploadListComponent_div_0_ng_template_2_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NzUploadListComponent_div_0_ng_template_2_a_2_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r29); const file_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit; const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r27.handlePreview(file_r1, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzUploadListComponent_div_0_ng_template_2_a_2_img_1_Template, 1, 2, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](5);
    const file_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("ant-upload-list-item-file", !file_r1.isImageUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", file_r1.url || file_r1.thumbUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", file_r1.isImageUrl)("ngIfElse", _r21);
} }
function NzUploadListComponent_div_0_ng_template_2_span_3_ng_template_1_Template(rf, ctx) { }
function NzUploadListComponent_div_0_ng_template_2_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzUploadListComponent_div_0_ng_template_2_span_3_ng_template_1_Template, 0, 0, "ng-template", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const file_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r4)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c3, file_r1));
} }
function NzUploadListComponent_div_0_ng_template_2_ng_template_4_ng_template_0_Template(rf, ctx) { }
function NzUploadListComponent_div_0_ng_template_2_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, NzUploadListComponent_div_0_ng_template_2_ng_template_4_ng_template_0_Template, 0, 0, "ng-template", 18);
} if (rf & 2) {
    const file_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r4)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c3, file_r1));
} }
function NzUploadListComponent_div_0_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzUploadListComponent_div_0_ng_template_2_div_1_Template, 2, 6, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NzUploadListComponent_div_0_ng_template_2_a_2_Template, 2, 5, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, NzUploadListComponent_div_0_ng_template_2_span_3_Template, 2, 4, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, NzUploadListComponent_div_0_ng_template_2_ng_template_4_Template, 1, 4, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const file_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitch", file_r1.iconType);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "uploading");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "thumbnail");
} }
function NzUploadListComponent_div_0_ng_template_4_ng_container_0_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} }
function NzUploadListComponent_div_0_ng_template_4_ng_container_0_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzUploadListComponent_div_0_ng_template_4_ng_container_0_ng_container_2_ng_container_1_Template, 2, 0, "ng-container", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const file_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", file_r36.isUploading)("ngIfElse", _r38);
} }
function NzUploadListComponent_div_0_ng_template_4_ng_container_0_ng_container_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r45.locale.uploading, " ");
} }
function NzUploadListComponent_div_0_ng_template_4_ng_container_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzUploadListComponent_div_0_ng_template_4_ng_container_0_ng_container_3_ng_container_1_Template, 2, 1, "ng-container", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const file_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", file_r36.isUploading)("ngIfElse", _r38);
} }
function NzUploadListComponent_div_0_ng_template_4_ng_container_0_i_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 28);
} if (rf & 2) {
    const file_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzType", file_r36.isUploading ? "loading" : "paper-clip");
} }
function NzUploadListComponent_div_0_ng_template_4_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](1, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NzUploadListComponent_div_0_ng_template_4_ng_container_0_ng_container_2_Template, 2, 2, "ng-container", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, NzUploadListComponent_div_0_ng_template_4_ng_container_0_ng_container_3_Template, 2, 2, "ng-container", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, NzUploadListComponent_div_0_ng_template_4_ng_container_0_i_4_Template, 1, 1, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitch", ctx_r37.listType);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "picture");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "picture-card");
} }
function NzUploadListComponent_div_0_ng_template_4_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 29);
} if (rf & 2) {
    const file_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzType", file_r36.isImageUrl ? "picture" : "file");
} }
function NzUploadListComponent_div_0_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, NzUploadListComponent_div_0_ng_template_4_ng_container_0_Template, 5, 3, "ng-container", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzUploadListComponent_div_0_ng_template_4_ng_template_1_Template, 1, 1, "ng-template", null, 24, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r5.iconRender)("ngIfElse", ctx_r5.iconRender);
} }
function NzUploadListComponent_div_0_ng_template_6_span_0_button_1_ng_template_1_Template(rf, ctx) { }
function NzUploadListComponent_div_0_ng_template_6_span_0_button_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzUploadListComponent_div_0_ng_template_6_span_0_button_1_ng_template_1_Template, 0, 0, "ng-template", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](13);
    const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("title", ctx_r50.locale.downloadFile);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r12);
} }
function NzUploadListComponent_div_0_ng_template_6_span_0_button_2_ng_template_1_Template(rf, ctx) { }
function NzUploadListComponent_div_0_ng_template_6_span_0_button_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzUploadListComponent_div_0_ng_template_6_span_0_button_2_ng_template_1_Template, 0, 0, "ng-template", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](11);
    const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("title", ctx_r51.locale.removeFile);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r10);
} }
function NzUploadListComponent_div_0_ng_template_6_span_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzUploadListComponent_div_0_ng_template_6_span_0_button_1_Template, 2, 2, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NzUploadListComponent_div_0_ng_template_6_span_0_button_2_Template, 2, 2, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const file_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("ant-upload-list-item-card-actions ", ctx_r49.listType === "picture" ? "picture" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", file_r1.showDownload);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r49.icons.showRemoveIcon);
} }
function NzUploadListComponent_div_0_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, NzUploadListComponent_div_0_ng_template_6_span_0_Template, 3, 5, "span", 30);
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r7.listType !== "picture-card");
} }
function NzUploadListComponent_div_0_ng_template_8_a_0_Template(rf, ctx) { if (rf & 1) {
    const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NzUploadListComponent_div_0_ng_template_8_a_0_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r60); const file_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit; const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r58.handlePreview(file_r1, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const file_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", file_r1.listItemNameCls)("href", file_r1.url, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("title", file_r1.name)("download", file_r1.linkProps && file_r1.linkProps.download);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", file_r1.name, " ");
} }
function NzUploadListComponent_div_0_ng_template_8_span_1_Template(rf, ctx) { if (rf & 1) {
    const _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NzUploadListComponent_div_0_ng_template_8_span_1_Template_span_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r64); const file_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit; const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r62.handlePreview(file_r1, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const file_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", file_r1.listItemNameCls);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("title", file_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", file_r1.name, " ");
} }
function NzUploadListComponent_div_0_ng_template_8_ng_template_2_Template(rf, ctx) { }
function NzUploadListComponent_div_0_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, NzUploadListComponent_div_0_ng_template_8_a_0_Template, 2, 5, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzUploadListComponent_div_0_ng_template_8_span_1_Template, 2, 3, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NzUploadListComponent_div_0_ng_template_8_ng_template_2_Template, 0, 0, "ng-template", 9);
} if (rf & 2) {
    const file_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", file_r1.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !file_r1.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r6);
} }
function NzUploadListComponent_div_0_ng_template_10_i_0_Template(rf, ctx) { if (rf & 1) {
    const _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NzUploadListComponent_div_0_ng_template_10_i_0_Template_i_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r70); const file_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit; const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r68.handleRemove(file_r1, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("title", ctx_r67.locale.removeFile);
} }
function NzUploadListComponent_div_0_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, NzUploadListComponent_div_0_ng_template_10_i_0_Template, 1, 1, "i", 37);
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r11.icons.showRemoveIcon);
} }
function NzUploadListComponent_div_0_ng_template_12_i_0_Template(rf, ctx) { if (rf & 1) {
    const _r74 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NzUploadListComponent_div_0_ng_template_12_i_0_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r74); const file_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit; const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r72.handleDownload(file_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("title", ctx_r71.locale.downloadFile);
} }
function NzUploadListComponent_div_0_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, NzUploadListComponent_div_0_ng_template_12_i_0_Template, 1, 1, "i", 39);
} if (rf & 2) {
    const file_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", file_r1.showDownload);
} }
function NzUploadListComponent_div_0_ng_template_16_Template(rf, ctx) { }
function NzUploadListComponent_div_0_ng_template_17_Template(rf, ctx) { }
const _c4 = function () { return { opacity: 0.5, "pointer-events": "none" }; };
function NzUploadListComponent_div_0_span_18_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r81 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NzUploadListComponent_div_0_span_18_a_1_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r81); const file_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit; const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r79.handlePreview(file_r1, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const file_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("title", ctx_r76.locale.previewFile);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", file_r1.url || file_r1.thumbUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("ngStyle", !(file_r1.url || file_r1.thumbUrl) ? _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](3, _c4) : null);
} }
function NzUploadListComponent_div_0_span_18_ng_template_2_Template(rf, ctx) { }
function NzUploadListComponent_div_0_span_18_ng_template_3_Template(rf, ctx) { }
function NzUploadListComponent_div_0_span_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzUploadListComponent_div_0_span_18_a_1_Template, 2, 4, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NzUploadListComponent_div_0_span_18_ng_template_2_Template, 0, 0, "ng-template", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, NzUploadListComponent_div_0_span_18_ng_template_3_Template, 0, 0, "ng-template", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](13);
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](11);
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r16.icons.showPreviewIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r10);
} }
function NzUploadListComponent_div_0_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "nz-progress", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const file_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzPercent", file_r1.percent)("nzShowInfo", false)("nzStrokeWidth", 2);
} }
function NzUploadListComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NzUploadListComponent_div_0_ng_template_2_Template, 6, 3, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, NzUploadListComponent_div_0_ng_template_4_Template, 3, 2, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, NzUploadListComponent_div_0_ng_template_6_Template, 1, 1, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, NzUploadListComponent_div_0_ng_template_8_Template, 3, 3, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, NzUploadListComponent_div_0_ng_template_10_Template, 1, 1, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, NzUploadListComponent_div_0_ng_template_12_Template, 1, 1, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, NzUploadListComponent_div_0_ng_template_16_Template, 0, 0, "ng-template", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, NzUploadListComponent_div_0_ng_template_17_Template, 0, 0, "ng-template", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, NzUploadListComponent_div_0_span_18_Template, 4, 3, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, NzUploadListComponent_div_0_div_19_Template, 2, 3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const file_r1 = ctx.$implicit;
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](3);
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](9);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("ant-upload-list-picture-card-container", ctx_r0.listType === "picture-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate2"]("ant-upload-list-item ant-upload-list-item-", file_r1.status, " ant-upload-list-item-list-type-", ctx_r0.listType, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@itemState", undefined)("nzTooltipTitle", file_r1.status === "error" ? file_r1.message : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("data-key", file_r1.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.listType === "picture-card" && !file_r1.isUploading);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", file_r1.isUploading);
} }
const _c5 = ["uploadComp"];
const _c6 = ["listComp"];
const _c7 = function () { return []; };
function NzUploadComponent_ng_template_0_nz_upload_list_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "nz-upload-list", 8, 9);
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("display", ctx_r11.nzShowUploadList ? "" : "none");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("locale", ctx_r11.locale)("listType", ctx_r11.nzListType)("items", ctx_r11.nzFileList || _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](12, _c7))("icons", ctx_r11.nzShowUploadList)("iconRender", ctx_r11.nzIconRender)("previewFile", ctx_r11.nzPreviewFile)("previewIsImage", ctx_r11.nzPreviewIsImage)("onPreview", ctx_r11.nzPreview)("onRemove", ctx_r11.onRemove)("onDownload", ctx_r11.nzDownload);
} }
function NzUploadComponent_ng_template_0_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
} }
function NzUploadComponent_ng_template_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzUploadComponent_ng_template_0_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", ctx_r12.nzFileListRender)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c3, ctx_r12.nzFileList));
} }
function NzUploadComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, NzUploadComponent_ng_template_0_nz_upload_list_0_Template, 2, 13, "nz-upload-list", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzUploadComponent_ng_template_0_ng_container_1_Template, 2, 4, "ng-container", 7);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.locale && !ctx_r1.nzFileListRender);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.nzFileListRender);
} }
function NzUploadComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](0);
} }
function NzUploadComponent_ng_template_4_ng_template_3_Template(rf, ctx) { }
function NzUploadComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 12, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, NzUploadComponent_ng_template_4_ng_template_3_Template, 0, 0, "ng-template", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("display", ctx_r5.nzShowButton ? "" : "none");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r5.classList);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx_r5._btnOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r2);
} }
function NzUploadComponent_ng_container_6_ng_template_5_Template(rf, ctx) { }
function NzUploadComponent_ng_container_6_ng_template_6_Template(rf, ctx) { }
function NzUploadComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("drop", function NzUploadComponent_ng_container_6_Template_div_drop_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r20.fileDrop($event); })("dragover", function NzUploadComponent_ng_container_6_Template_div_dragover_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r21); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r22.fileDrop($event); })("dragleave", function NzUploadComponent_ng_container_6_Template_div_dragleave_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r21); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r23.fileDrop($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 16, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, NzUploadComponent_ng_container_6_ng_template_5_Template, 0, 0, "ng-template", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, NzUploadComponent_ng_container_6_ng_template_6_Template, 0, 0, "ng-template", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](3);
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r6.classList);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx_r6._btnOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r0);
} }
function NzUploadComponent_ng_template_7_ng_container_0_ng_template_1_Template(rf, ctx) { }
function NzUploadComponent_ng_template_7_ng_container_0_ng_template_2_Template(rf, ctx) { }
function NzUploadComponent_ng_template_7_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzUploadComponent_ng_template_7_ng_container_0_ng_template_1_Template, 0, 0, "ng-template", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NzUploadComponent_ng_template_7_ng_container_0_ng_template_2_Template, 0, 0, "ng-template", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1);
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r4);
} }
function NzUploadComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, NzUploadComponent_ng_template_7_ng_container_0_Template, 3, 2, "ng-container", 3);
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r8.nzListType === "picture-card")("ngIfElse", _r9);
} }
function NzUploadComponent_ng_template_9_ng_template_0_Template(rf, ctx) { }
function NzUploadComponent_ng_template_9_ng_template_1_Template(rf, ctx) { }
function NzUploadComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, NzUploadComponent_ng_template_9_ng_template_0_Template, 0, 0, "ng-template", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzUploadComponent_ng_template_9_ng_template_1_Template, 0, 0, "ng-template", 14);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](5);
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r0);
} }
class NzUploadBtnComponent {
    constructor(http, elementRef) {
        this.http = http;
        this.elementRef = elementRef;
        this.reqs = {};
        this.destroy = false;
        // TODO: move to host after View Engine deprecation
        this.elementRef.nativeElement.classList.add('ant-upload');
        if (!http) {
            throw new Error(`Not found 'HttpClient', You can import 'HttpClientModule' in your root module.`);
        }
    }
    onClick() {
        if (this.options.disabled || !this.options.openFileDialogOnClick) {
            return;
        }
        this.file.nativeElement.click();
    }
    onKeyDown(e) {
        if (this.options.disabled) {
            return;
        }
        if (e.key === 'Enter' || e.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["ENTER"]) {
            this.onClick();
        }
    }
    // skip safari bug
    onFileDrop(e) {
        if (this.options.disabled || e.type === 'dragover') {
            e.preventDefault();
            return;
        }
        if (this.options.directory) {
            this.traverseFileTree(e.dataTransfer.items);
        }
        else {
            const files = Array.prototype.slice
                .call(e.dataTransfer.files)
                .filter((file) => this.attrAccept(file, this.options.accept));
            if (files.length) {
                this.uploadFiles(files);
            }
        }
        e.preventDefault();
    }
    onChange(e) {
        if (this.options.disabled) {
            return;
        }
        const hie = e.target;
        this.uploadFiles(hie.files);
        hie.value = '';
    }
    traverseFileTree(files) {
        const _traverseFileTree = (item, path) => {
            if (item.isFile) {
                item.file((file) => {
                    if (this.attrAccept(file, this.options.accept)) {
                        this.uploadFiles([file]);
                    }
                });
            }
            else if (item.isDirectory) {
                const dirReader = item.createReader();
                dirReader.readEntries((entries) => {
                    for (const entrieItem of entries) {
                        _traverseFileTree(entrieItem, `${path}${item.name}/`);
                    }
                });
            }
        };
        for (const file of files) {
            _traverseFileTree(file.webkitGetAsEntry(), '');
        }
    }
    attrAccept(file, acceptedFiles) {
        if (file && acceptedFiles) {
            const acceptedFilesArray = Array.isArray(acceptedFiles) ? acceptedFiles : acceptedFiles.split(',');
            const fileName = '' + file.name;
            const mimeType = '' + file.type;
            const baseMimeType = mimeType.replace(/\/.*$/, '');
            return acceptedFilesArray.some(type => {
                const validType = type.trim();
                if (validType.charAt(0) === '.') {
                    return (fileName.toLowerCase().indexOf(validType.toLowerCase(), fileName.toLowerCase().length - validType.toLowerCase().length) !== -1);
                }
                else if (/\/\*$/.test(validType)) {
                    // This is something like a image/* mime type
                    return baseMimeType === validType.replace(/\/.*$/, '');
                }
                return mimeType === validType;
            });
        }
        return true;
    }
    attachUid(file) {
        if (!file.uid) {
            file.uid = Math.random().toString(36).substring(2);
        }
        return file;
    }
    uploadFiles(fileList) {
        let filters$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(Array.prototype.slice.call(fileList));
        if (this.options.filters) {
            this.options.filters.forEach(f => {
                filters$ = filters$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(list => {
                    const fnRes = f.fn(list);
                    return fnRes instanceof rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"] ? fnRes : Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(fnRes);
                }));
            });
        }
        filters$.subscribe(list => {
            list.forEach((file) => {
                this.attachUid(file);
                this.upload(file, list);
            });
        }, e => {
            Object(ng_zorro_antd_core_logger__WEBPACK_IMPORTED_MODULE_3__["warn"])(`Unhandled upload filter error`, e);
        });
    }
    upload(file, fileList) {
        if (!this.options.beforeUpload) {
            return this.post(file);
        }
        const before = this.options.beforeUpload(file, fileList);
        if (before instanceof rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"]) {
            before.subscribe((processedFile) => {
                const processedFileType = Object.prototype.toString.call(processedFile);
                if (processedFileType === '[object File]' || processedFileType === '[object Blob]') {
                    this.attachUid(processedFile);
                    this.post(processedFile);
                }
                else if (typeof processedFile === 'boolean' && processedFile !== false) {
                    this.post(file);
                }
            }, e => {
                Object(ng_zorro_antd_core_logger__WEBPACK_IMPORTED_MODULE_3__["warn"])(`Unhandled upload beforeUpload error`, e);
            });
        }
        else if (before !== false) {
            return this.post(file);
        }
    }
    post(file) {
        if (this.destroy) {
            return;
        }
        let process$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(file);
        const opt = this.options;
        const { uid } = file;
        const { action, data, headers, transformFile } = opt;
        const args = {
            action: typeof action === 'string' ? action : '',
            name: opt.name,
            headers,
            file,
            postFile: file,
            data,
            withCredentials: opt.withCredentials,
            onProgress: opt.onProgress
                ? e => {
                    opt.onProgress(e, file);
                }
                : undefined,
            onSuccess: (ret, xhr) => {
                this.clean(uid);
                opt.onSuccess(ret, file, xhr);
            },
            onError: xhr => {
                this.clean(uid);
                opt.onError(xhr, file);
            }
        };
        if (typeof action === 'function') {
            const actionResult = action(file);
            if (actionResult instanceof rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"]) {
                process$ = process$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(() => actionResult), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(res => {
                    args.action = res;
                    return file;
                }));
            }
            else {
                args.action = actionResult;
            }
        }
        if (typeof transformFile === 'function') {
            const transformResult = transformFile(file);
            process$ = process$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(() => (transformResult instanceof rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"] ? transformResult : Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(transformResult))));
        }
        if (typeof data === 'function') {
            const dataResult = data(file);
            if (dataResult instanceof rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"]) {
                process$ = process$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(() => dataResult), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(res => {
                    args.data = res;
                    return file;
                }));
            }
            else {
                args.data = dataResult;
            }
        }
        if (typeof headers === 'function') {
            const headersResult = headers(file);
            if (headersResult instanceof rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"]) {
                process$ = process$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(() => headersResult), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(res => {
                    args.headers = res;
                    return file;
                }));
            }
            else {
                args.headers = headersResult;
            }
        }
        process$.subscribe(newFile => {
            args.postFile = newFile;
            const req$ = (opt.customRequest || this.xhr).call(this, args);
            if (!(req$ instanceof rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"])) {
                Object(ng_zorro_antd_core_logger__WEBPACK_IMPORTED_MODULE_3__["warn"])(`Must return Subscription type in '[nzCustomRequest]' property`);
            }
            this.reqs[uid] = req$;
            opt.onStart(file);
        });
    }
    xhr(args) {
        const formData = new FormData();
        if (args.data) {
            Object.keys(args.data).map(key => {
                formData.append(key, args.data[key]);
            });
        }
        formData.append(args.name, args.postFile);
        if (!args.headers) {
            args.headers = {};
        }
        if (args.headers['X-Requested-With'] !== null) {
            args.headers['X-Requested-With'] = `XMLHttpRequest`;
        }
        else {
            delete args.headers['X-Requested-With'];
        }
        const req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpRequest"]('POST', args.action, formData, {
            reportProgress: true,
            withCredentials: args.withCredentials,
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"](args.headers)
        });
        return this.http.request(req).subscribe((event) => {
            if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpEventType"].UploadProgress) {
                if (event.total > 0) {
                    event.percent = (event.loaded / event.total) * 100;
                }
                args.onProgress(event, args.file);
            }
            else if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]) {
                args.onSuccess(event.body, args.file, event);
            }
        }, err => {
            this.abort(args.file);
            args.onError(err, args.file);
        });
    }
    clean(uid) {
        const req$ = this.reqs[uid];
        if (req$ instanceof rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"]) {
            req$.unsubscribe();
        }
        delete this.reqs[uid];
    }
    abort(file) {
        if (file) {
            this.clean(file && file.uid);
        }
        else {
            Object.keys(this.reqs).forEach(uid => this.clean(uid));
        }
    }
    ngOnDestroy() {
        this.destroy = true;
        this.abort();
    }
}
/** @nocollapse */
NzUploadBtnComponent.ɵfac = function NzUploadBtnComponent_Factory(t) { return new (t || NzUploadBtnComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"])); };
/** @nocollapse */
NzUploadBtnComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NzUploadBtnComponent, selectors: [["", "nz-upload-btn", ""]], viewQuery: function NzUploadBtnComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.file = _t.first);
    } }, hostVars: 4, hostBindings: function NzUploadBtnComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NzUploadBtnComponent_click_HostBindingHandler() { return ctx.onClick(); })("keydown", function NzUploadBtnComponent_keydown_HostBindingHandler($event) { return ctx.onKeyDown($event); })("drop", function NzUploadBtnComponent_drop_HostBindingHandler($event) { return ctx.onFileDrop($event); })("dragover", function NzUploadBtnComponent_dragover_HostBindingHandler($event) { return ctx.onFileDrop($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("tabindex", "0")("role", "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("ant-upload-disabled", ctx.options.disabled);
    } }, inputs: { options: "options" }, exportAs: ["nzUploadBtn"], attrs: _c1, ngContentSelectors: _c2, decls: 3, vars: 4, consts: [["type", "file", 2, "display", "none", 3, "multiple", "change"], ["file", ""]], template: function NzUploadBtnComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "input", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function NzUploadBtnComponent_Template_input_change_0_listener($event) { return ctx.onChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("multiple", ctx.options.multiple);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("accept", ctx.options.accept)("directory", ctx.options.directory ? "directory" : null)("webkitdirectory", ctx.options.directory ? "webkitdirectory" : null);
    } }, encapsulation: 2 });
NzUploadBtnComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }
];
NzUploadBtnComponent.propDecorators = {
    file: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['file', { static: false },] }],
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
};

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
const isImageFileType = (type) => !!type && type.indexOf('image/') === 0;
const ɵ0 = isImageFileType;
const MEASURE_SIZE = 200;
class NzUploadListComponent {
    // #endregion
    constructor(cdr, doc, ngZone, platform, elementRef) {
        this.cdr = cdr;
        this.doc = doc;
        this.ngZone = ngZone;
        this.platform = platform;
        this.elementRef = elementRef;
        this.list = [];
        this.locale = {};
        this.iconRender = null;
        // TODO: move to host after View Engine deprecation
        this.elementRef.nativeElement.classList.add('ant-upload-list');
    }
    get showPic() {
        return this.listType === 'picture' || this.listType === 'picture-card';
    }
    set items(list) {
        this.list = list;
    }
    genErr(file) {
        if (file.response && typeof file.response === 'string') {
            return file.response;
        }
        return (file.error && file.error.statusText) || this.locale.uploadError;
    }
    extname(url) {
        const temp = url.split('/');
        const filename = temp[temp.length - 1];
        const filenameWithoutSuffix = filename.split(/#|\?/)[0];
        return (/\.[^./\\]*$/.exec(filenameWithoutSuffix) || [''])[0];
    }
    isImageUrl(file) {
        if (isImageFileType(file.type)) {
            return true;
        }
        const url = (file.thumbUrl || file.url || '');
        if (!url) {
            return false;
        }
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
    previewImage(file) {
        return new Promise(resolve => {
            if (!isImageFileType(file.type)) {
                resolve('');
                return;
            }
            this.ngZone.runOutsideAngular(() => {
                const canvas = this.doc.createElement('canvas');
                canvas.width = MEASURE_SIZE;
                canvas.height = MEASURE_SIZE;
                canvas.style.cssText = `position: fixed; left: 0; top: 0; width: ${MEASURE_SIZE}px; height: ${MEASURE_SIZE}px; z-index: 9999; display: none;`;
                this.doc.body.appendChild(canvas);
                const ctx = canvas.getContext('2d');
                const img = new Image();
                img.onload = () => {
                    const { width, height } = img;
                    let drawWidth = MEASURE_SIZE;
                    let drawHeight = MEASURE_SIZE;
                    let offsetX = 0;
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
                        ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
                    }
                    catch (_a) { }
                    const dataURL = canvas.toDataURL();
                    this.doc.body.removeChild(canvas);
                    resolve(dataURL);
                };
                img.src = window.URL.createObjectURL(file);
            });
        });
    }
    genThumb() {
        if (!this.platform.isBrowser) {
            return;
        }
        const win = window;
        if (!this.showPic || typeof document === 'undefined' || typeof win === 'undefined' || !win.FileReader || !win.File) {
            return;
        }
        this.list
            .filter(file => file.originFileObj instanceof File && file.thumbUrl === undefined)
            .forEach(file => {
            file.thumbUrl = '';
            (this.previewFile ? this.previewFile(file).toPromise() : this.previewImage(file.originFileObj)).then(dataUrl => {
                file.thumbUrl = dataUrl;
                this.detectChanges();
            });
        });
    }
    listItemNameCls(file) {
        const count = [this.showDownload(file), this.icons.showRemoveIcon].filter(x => x).length;
        return {
            [`ant-upload-list-item-name`]: true,
            [`ant-upload-list-item-name-icon-count-${count}`]: true
        };
    }
    showDownload(file) {
        return !!(this.icons.showDownloadIcon && file.status === 'done');
    }
    fixData() {
        this.list.forEach(file => {
            file.isUploading = file.status === 'uploading';
            file.message = this.genErr(file);
            file.linkProps = typeof file.linkProps === 'string' ? JSON.parse(file.linkProps) : file.linkProps;
            file.isImageUrl = this.previewIsImage ? this.previewIsImage(file) : this.isImageUrl(file);
            file.iconType = this.getIconType(file);
            file.listItemNameCls = this.listItemNameCls(file);
            file.showDownload = this.showDownload(file);
        });
    }
    handlePreview(file, e) {
        if (!this.onPreview) {
            return;
        }
        e.preventDefault();
        return this.onPreview(file);
    }
    handleRemove(file, e) {
        e.preventDefault();
        if (this.onRemove) {
            this.onRemove(file);
        }
        return;
    }
    handleDownload(file) {
        if (typeof this.onDownload === 'function') {
            this.onDownload(file);
        }
        else if (file.url) {
            window.open(file.url);
        }
    }
    detectChanges() {
        this.fixData();
        this.cdr.detectChanges();
    }
    ngOnChanges() {
        this.fixData();
        this.genThumb();
    }
}
/** @nocollapse */
NzUploadListComponent.ɵfac = function NzUploadListComponent_Factory(t) { return new (t || NzUploadListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"])); };
/** @nocollapse */
NzUploadListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NzUploadListComponent, selectors: [["nz-upload-list"]], hostVars: 6, hostBindings: function NzUploadListComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("ant-upload-list-text", ctx.listType === "text")("ant-upload-list-picture", ctx.listType === "picture")("ant-upload-list-picture-card", ctx.listType === "picture-card");
    } }, inputs: { locale: "locale", iconRender: "iconRender", items: "items", listType: "listType", icons: "icons", onPreview: "onPreview", onRemove: "onRemove", onDownload: "onDownload", previewFile: "previewFile", previewIsImage: "previewIsImage" }, exportAs: ["nzUploadList"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]], decls: 1, vars: 1, consts: [[3, "ant-upload-list-picture-card-container", 4, "ngFor", "ngForOf"], ["nz-tooltip", "", 3, "nzTooltipTitle"], ["icon", ""], ["iconNode", ""], ["downloadOrDelete", ""], ["preview", ""], ["removeIcon", ""], ["downloadIcon", ""], [1, "ant-upload-list-item-info"], [3, "ngTemplateOutlet"], ["class", "ant-upload-list-item-actions", 4, "ngIf"], ["class", "ant-upload-list-item-progress", 4, "ngIf"], [3, "ngSwitch"], ["class", "ant-upload-list-item-thumbnail", 3, "ant-upload-list-item-file", 4, "ngSwitchCase"], ["class", "ant-upload-list-item-thumbnail", "target", "_blank", "rel", "noopener noreferrer", 3, "ant-upload-list-item-file", "href", "click", 4, "ngSwitchCase"], ["class", "ant-upload-text-icon", 4, "ngSwitchDefault"], ["noImageThumbTpl", ""], [1, "ant-upload-list-item-thumbnail"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["target", "_blank", "rel", "noopener noreferrer", 1, "ant-upload-list-item-thumbnail", 3, "href", "click"], ["class", "ant-upload-list-item-image", 3, "src", 4, "ngIf", "ngIfElse"], [1, "ant-upload-list-item-image", 3, "src"], [1, "ant-upload-text-icon"], [4, "ngIf", "ngIfElse"], ["iconNodeFileIcon", ""], [4, "ngSwitchCase"], ["nz-icon", "", 3, "nzType", 4, "ngSwitchDefault"], ["nz-icon", "", "nzType", "loading"], ["nz-icon", "", 3, "nzType"], ["nz-icon", "", "nzTheme", "twotone", 3, "nzType"], [3, "class", 4, "ngIf"], ["type", "button", "nz-button", "", "nzType", "text", "nzSize", "small", 3, "title", 4, "ngIf"], ["type", "button", "nz-button", "", "nzType", "text", "nzSize", "small", 3, "title"], ["target", "_blank", "rel", "noopener noreferrer", 3, "ngClass", "href", "click", 4, "ngIf"], [3, "ngClass", "click", 4, "ngIf"], ["target", "_blank", "rel", "noopener noreferrer", 3, "ngClass", "href", "click"], [3, "ngClass", "click"], ["nz-icon", "", "nzType", "delete", 3, "title", "click", 4, "ngIf"], ["nz-icon", "", "nzType", "delete", 3, "title", "click"], ["nz-icon", "", "nzType", "download", 3, "title", "click", 4, "ngIf"], ["nz-icon", "", "nzType", "download", 3, "title", "click"], [1, "ant-upload-list-item-actions"], ["target", "_blank", "rel", "noopener noreferrer", 3, "href", "title", "ngStyle", "click", 4, "ngIf"], ["target", "_blank", "rel", "noopener noreferrer", 3, "href", "title", "ngStyle", "click"], ["nz-icon", "", "nzType", "eye"], [1, "ant-upload-list-item-progress"], ["nzType", "line", 3, "nzPercent", "nzShowInfo", "nzStrokeWidth"]], template: function NzUploadListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, NzUploadListComponent_div_0_Template, 20, 13, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.list);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_16__["NzTooltipDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgSwitchDefault"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_14__["NzIconDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_17__["ɵNzTransitionPatchDirective"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_13__["NzButtonComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgStyle"], ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_15__["NzProgressComponent"]], encapsulation: 2, data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('itemState', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ height: '0', width: '0', opacity: 0 }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])(150, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ height: '*', width: '*', opacity: 1 }))]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])(150, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ height: '0', width: '0', opacity: 0 }))])
            ])
        ] }, changeDetection: 0 });
NzUploadListComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"],] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"] },
    { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }
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
    previewIsImage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    iconRender: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
};

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzUploadComponent {
    // #endregion
    constructor(cdr, i18n) {
        this.cdr = cdr;
        this.i18n = i18n;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
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
        this.nzIconRender = null;
        this.nzFileListRender = null;
        this.nzChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.nzFileListChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.onStart = (file) => {
            if (!this.nzFileList) {
                this.nzFileList = [];
            }
            const targetItem = this.fileToObject(file);
            targetItem.status = 'uploading';
            this.nzFileList = this.nzFileList.concat(targetItem);
            this.nzFileListChange.emit(this.nzFileList);
            this.nzChange.emit({ file: targetItem, fileList: this.nzFileList, type: 'start' });
            this.detectChangesList();
        };
        this.onProgress = (e, file) => {
            const fileList = this.nzFileList;
            const targetItem = this.getFileItem(file, fileList);
            targetItem.percent = e.percent;
            this.nzChange.emit({
                event: e,
                file: Object.assign({}, targetItem),
                fileList: this.nzFileList,
                type: 'progress'
            });
            this.detectChangesList();
        };
        this.onSuccess = (res, file) => {
            const fileList = this.nzFileList;
            const targetItem = this.getFileItem(file, fileList);
            targetItem.status = 'done';
            targetItem.response = res;
            this.nzChange.emit({
                file: Object.assign({}, targetItem),
                fileList,
                type: 'success'
            });
            this.detectChangesList();
        };
        this.onError = (err, file) => {
            const fileList = this.nzFileList;
            const targetItem = this.getFileItem(file, fileList);
            targetItem.error = err;
            targetItem.status = 'error';
            this.nzChange.emit({
                file: Object.assign({}, targetItem),
                fileList,
                type: 'error'
            });
            this.detectChangesList();
        };
        this.onRemove = (file) => {
            this.uploadComp.abort(file);
            file.status = 'removed';
            const fnRes = typeof this.nzRemove === 'function' ? this.nzRemove(file) : this.nzRemove == null ? true : this.nzRemove;
            (fnRes instanceof rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"] ? fnRes : Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(fnRes)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])((res) => res)).subscribe(() => {
                this.nzFileList = this.removeFileItem(file, this.nzFileList);
                this.nzChange.emit({
                    file,
                    fileList: this.nzFileList,
                    type: 'removed'
                });
                this.nzFileListChange.emit(this.nzFileList);
                this.cdr.detectChanges();
            });
        };
        // #endregion
        // #region styles
        this.prefixCls = 'ant-upload';
        this.classList = [];
    }
    set nzShowUploadList(value) {
        this._showUploadList = typeof value === 'boolean' ? Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_10__["toBoolean"])(value) : value;
    }
    get nzShowUploadList() {
        return this._showUploadList;
    }
    zipOptions() {
        if (typeof this.nzShowUploadList === 'boolean' && this.nzShowUploadList) {
            this.nzShowUploadList = {
                showPreviewIcon: true,
                showRemoveIcon: true,
                showDownloadIcon: true
            };
        }
        // filters
        const filters = this.nzFilter.slice();
        if (this.nzMultiple && this.nzLimit > 0 && filters.findIndex(w => w.name === 'limit') === -1) {
            filters.push({
                name: 'limit',
                fn: (fileList) => fileList.slice(-this.nzLimit)
            });
        }
        if (this.nzSize > 0 && filters.findIndex(w => w.name === 'size') === -1) {
            filters.push({
                name: 'size',
                fn: (fileList) => fileList.filter(w => w.size / 1024 <= this.nzSize)
            });
        }
        if (this.nzFileType && this.nzFileType.length > 0 && filters.findIndex(w => w.name === 'type') === -1) {
            const types = this.nzFileType.split(',');
            filters.push({
                name: 'type',
                fn: (fileList) => fileList.filter(w => ~types.indexOf(w.type))
            });
        }
        this._btnOptions = {
            disabled: this.nzDisabled,
            accept: this.nzAccept,
            action: this.nzAction,
            directory: this.nzDirectory,
            openFileDialogOnClick: this.nzOpenFileDialogOnClick,
            beforeUpload: this.nzBeforeUpload,
            customRequest: this.nzCustomRequest,
            data: this.nzData,
            headers: this.nzHeaders,
            name: this.nzName,
            multiple: this.nzMultiple,
            withCredentials: this.nzWithCredentials,
            filters,
            transformFile: this.nzTransformFile,
            onStart: this.onStart,
            onProgress: this.onProgress,
            onSuccess: this.onSuccess,
            onError: this.onError
        };
        return this;
    }
    // #region upload
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
            originFileObj: file
        };
    }
    getFileItem(file, fileList) {
        return fileList.filter(item => item.uid === file.uid)[0];
    }
    removeFileItem(file, fileList) {
        return fileList.filter(item => item.uid !== file.uid);
    }
    // skip safari bug
    fileDrop(e) {
        if (e.type === this.dragState) {
            return;
        }
        this.dragState = e.type;
        this.setClassMap();
    }
    // #endregion
    // #region list
    detectChangesList() {
        var _a;
        this.cdr.detectChanges();
        (_a = this.listComp) === null || _a === void 0 ? void 0 : _a.detectChanges();
    }
    setClassMap() {
        let subCls = [];
        if (this.nzType === 'drag') {
            if (this.nzFileList.some(file => file.status === 'uploading')) {
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
        ].filter(item => !!item);
        this.cdr.detectChanges();
    }
    // #endregion
    ngOnInit() {
        this.i18n.localeChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$)).subscribe(() => {
            this.locale = this.i18n.getLocaleData('Upload');
            this.detectChangesList();
        });
    }
    ngOnChanges() {
        this.zipOptions().setClassMap();
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
/** @nocollapse */
NzUploadComponent.ɵfac = function NzUploadComponent_Factory(t) { return new (t || NzUploadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_11__["NzI18nService"])); };
/** @nocollapse */
NzUploadComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NzUploadComponent, selectors: [["nz-upload"]], viewQuery: function NzUploadComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c5, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c6, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.uploadComp = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.listComp = _t.first);
    } }, hostVars: 2, hostBindings: function NzUploadComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("ant-upload-picture-card-wrapper", ctx.nzListType === "picture-card");
    } }, inputs: { nzType: "nzType", nzLimit: "nzLimit", nzSize: "nzSize", nzDirectory: "nzDirectory", nzOpenFileDialogOnClick: "nzOpenFileDialogOnClick", nzFilter: "nzFilter", nzFileList: "nzFileList", nzDisabled: "nzDisabled", nzListType: "nzListType", nzMultiple: "nzMultiple", nzName: "nzName", nzShowButton: "nzShowButton", nzWithCredentials: "nzWithCredentials", nzIconRender: "nzIconRender", nzFileListRender: "nzFileListRender", nzShowUploadList: "nzShowUploadList", nzFileType: "nzFileType", nzAccept: "nzAccept", nzAction: "nzAction", nzBeforeUpload: "nzBeforeUpload", nzCustomRequest: "nzCustomRequest", nzData: "nzData", nzHeaders: "nzHeaders", nzRemove: "nzRemove", nzPreview: "nzPreview", nzPreviewFile: "nzPreviewFile", nzPreviewIsImage: "nzPreviewIsImage", nzTransformFile: "nzTransformFile", nzDownload: "nzDownload" }, outputs: { nzChange: "nzChange", nzFileListChange: "nzFileListChange" }, exportAs: ["nzUpload"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c2, decls: 11, vars: 2, consts: [["list", ""], ["con", ""], ["btn", ""], [4, "ngIf", "ngIfElse"], ["select", ""], ["pic", ""], [3, "display", "locale", "listType", "items", "icons", "iconRender", "previewFile", "previewIsImage", "onPreview", "onRemove", "onDownload", 4, "ngIf"], [4, "ngIf"], [3, "locale", "listType", "items", "icons", "iconRender", "previewFile", "previewIsImage", "onPreview", "onRemove", "onDownload"], ["listComp", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "ngClass"], ["nz-upload-btn", "", 3, "options"], ["uploadComp", ""], [3, "ngTemplateOutlet"], [3, "ngClass", "drop", "dragover", "dragleave"], ["nz-upload-btn", "", 1, "ant-upload-btn", 3, "options"], [1, "ant-upload-drag-container"]], template: function NzUploadComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, NzUploadComponent_ng_template_0_Template, 2, 2, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NzUploadComponent_ng_template_2_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, NzUploadComponent_ng_template_4_Template, 4, 5, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, NzUploadComponent_ng_container_6_Template, 7, 4, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, NzUploadComponent_ng_template_7_Template, 1, 2, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, NzUploadComponent_ng_template_9_Template, 2, 2, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.nzType === "drag")("ngIfElse", _r7);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], NzUploadListComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], NzUploadBtnComponent], encapsulation: 2, changeDetection: 0 });
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
    nzPreviewIsImage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzTransformFile: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzDownload: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzIconRender: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzFileListRender: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
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
                    '[class.ant-upload-disabled]': 'options.disabled',
                    '(click)': 'onClick()',
                    '(keydown)': 'onKeyDown($event)',
                    '(drop)': 'onFileDrop($event)',
                    '(dragover)': 'onFileDrop($event)'
                },
                preserveWhitespaces: false,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }]; }, { file: [{
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
                template: "<div\n  *ngFor=\"let file of list\"\n  [class.ant-upload-list-picture-card-container]=\"listType === 'picture-card'\"\n>\n  <div\n    class=\"ant-upload-list-item ant-upload-list-item-{{\n      file.status\n    }} ant-upload-list-item-list-type-{{ listType }}\"\n    [attr.data-key]=\"file.key\"\n    @itemState\n    nz-tooltip\n    [nzTooltipTitle]=\"file.status === 'error' ? file.message : null\"\n  >\n    <ng-template #icon>\n      <ng-container [ngSwitch]=\"file.iconType\">\n        <div\n          *ngSwitchCase=\"'uploading'\"\n          class=\"ant-upload-list-item-thumbnail\"\n          [class.ant-upload-list-item-file]=\"!file.isUploading\"\n        >\n          <ng-template\n            [ngTemplateOutlet]=\"iconNode\"\n            [ngTemplateOutletContext]=\"{ $implicit: file }\"\n          ></ng-template>\n        </div>\n        <a\n          *ngSwitchCase=\"'thumbnail'\"\n          class=\"ant-upload-list-item-thumbnail\"\n          [class.ant-upload-list-item-file]=\"!file.isImageUrl\"\n          target=\"_blank\"\n          rel=\"noopener noreferrer\"\n          [href]=\"file.url || file.thumbUrl\"\n          (click)=\"handlePreview(file, $event)\"\n        >\n          <img\n            *ngIf=\"file.isImageUrl; else noImageThumbTpl\"\n            class=\"ant-upload-list-item-image\"\n            [src]=\"file.thumbUrl || file.url\"\n            [attr.alt]=\"file.name\"\n          />\n        </a>\n        <span *ngSwitchDefault class=\"ant-upload-text-icon\">\n          <ng-template\n            [ngTemplateOutlet]=\"iconNode\"\n            [ngTemplateOutletContext]=\"{ $implicit: file }\"\n          ></ng-template>\n        </span>\n      </ng-container>\n      <ng-template #noImageThumbTpl>\n        <ng-template\n          [ngTemplateOutlet]=\"iconNode\"\n          [ngTemplateOutletContext]=\"{ $implicit: file }\"\n        ></ng-template>\n      </ng-template>\n    </ng-template>\n    <ng-template #iconNode let-file>\n      <ng-container *ngIf=\"!iconRender; else iconRender\">\n        <ng-container [ngSwitch]=\"listType\">\n          <ng-container *ngSwitchCase=\"'picture'\">\n            <ng-container *ngIf=\"file.isUploading; else iconNodeFileIcon\">\n              <i nz-icon nzType=\"loading\"></i>\n            </ng-container>\n          </ng-container>\n          <ng-container *ngSwitchCase=\"'picture-card'\">\n            <ng-container *ngIf=\"file.isUploading; else iconNodeFileIcon\">\n              {{ locale.uploading }}\n            </ng-container>\n          </ng-container>\n          <i *ngSwitchDefault nz-icon [nzType]=\"file.isUploading ? 'loading' : 'paper-clip'\"></i>\n        </ng-container>\n      </ng-container>\n      <ng-template #iconNodeFileIcon>\n        <i nz-icon [nzType]=\"file.isImageUrl ? 'picture' : 'file'\" nzTheme=\"twotone\"></i>\n      </ng-template>\n    </ng-template>\n    <ng-template #downloadOrDelete>\n      <span\n        *ngIf=\"listType !== 'picture-card'\"\n        class=\"ant-upload-list-item-card-actions {{ listType === 'picture' ? 'picture' : '' }}\"\n      >\n        <button\n          type=\"button\"\n          nz-button\n          nzType=\"text\"\n          nzSize=\"small\"\n          *ngIf=\"file.showDownload\"\n          title=\"{{ locale.downloadFile }}\"\n        >\n          <ng-template [ngTemplateOutlet]=\"downloadIcon\"></ng-template>\n        </button>\n        <button\n          type=\"button\"\n          nz-button\n          nzType=\"text\"\n          nzSize=\"small\"\n          *ngIf=\"icons.showRemoveIcon\"\n          title=\"{{ locale.removeFile }}\"\n        >\n          <ng-template [ngTemplateOutlet]=\"removeIcon\"></ng-template>\n        </button>\n      </span>\n    </ng-template>\n    <ng-template #preview>\n      <a\n        *ngIf=\"file.url\"\n        target=\"_blank\"\n        rel=\"noopener noreferrer\"\n        [ngClass]=\"file.listItemNameCls!\"\n        [attr.title]=\"file.name\"\n        [href]=\"file.url\"\n        [attr.download]=\"file.linkProps && file.linkProps.download\"\n        (click)=\"handlePreview(file, $event)\"\n      >\n        {{ file.name }}\n      </a>\n      <span\n        *ngIf=\"!file.url\"\n        [ngClass]=\"file.listItemNameCls!\"\n        [attr.title]=\"file.name\"\n        (click)=\"handlePreview(file, $event)\"\n      >\n        {{ file.name }}\n      </span>\n      <ng-template [ngTemplateOutlet]=\"downloadOrDelete\"></ng-template>\n    </ng-template>\n    <ng-template #removeIcon>\n      <i\n        *ngIf=\"icons.showRemoveIcon\"\n        (click)=\"handleRemove(file, $event)\"\n        nz-icon\n        nzType=\"delete\"\n        title=\"{{ locale.removeFile }}\"\n      ></i>\n    </ng-template>\n    <ng-template #downloadIcon>\n      <i\n        *ngIf=\"file.showDownload\"\n        (click)=\"handleDownload(file)\"\n        nz-icon\n        nzType=\"download\"\n        title=\"{{ locale.downloadFile }}\"\n      ></i>\n    </ng-template>\n    <div class=\"ant-upload-list-item-info\">\n      <span>\n        <ng-template [ngTemplateOutlet]=\"icon\"></ng-template>\n        <ng-template [ngTemplateOutlet]=\"preview\"></ng-template>\n      </span>\n    </div>\n    <span\n      *ngIf=\"listType === 'picture-card' && !file.isUploading\"\n      class=\"ant-upload-list-item-actions\"\n    >\n      <a\n        *ngIf=\"icons.showPreviewIcon\"\n        [href]=\"file.url || file.thumbUrl\"\n        target=\"_blank\"\n        rel=\"noopener noreferrer\"\n        title=\"{{ locale.previewFile }}\"\n        [ngStyle]=\"!(file.url || file.thumbUrl) ? { opacity: 0.5, 'pointer-events': 'none' } : null\"\n        (click)=\"handlePreview(file, $event)\"\n      >\n        <i nz-icon nzType=\"eye\"></i>\n      </a>\n      <ng-template [ngTemplateOutlet]=\"downloadIcon\"></ng-template>\n      <ng-template [ngTemplateOutlet]=\"removeIcon\"></ng-template>\n    </span>\n    <div *ngIf=\"file.isUploading\" class=\"ant-upload-list-item-progress\">\n      <nz-progress\n        [nzPercent]=\"file.percent!\"\n        nzType=\"line\"\n        [nzShowInfo]=\"false\"\n        [nzStrokeWidth]=\"2\"\n      ></nz-progress>\n    </div>\n  </div>\n</div>\n",
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('itemState', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ height: '0', width: '0', opacity: 0 }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])(150, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ height: '*', width: '*', opacity: 1 }))]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])(150, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ height: '0', width: '0', opacity: 0 }))])
                    ])
                ],
                host: {
                    '[class.ant-upload-list-text]': `listType === 'text'`,
                    '[class.ant-upload-list-picture]': `listType === 'picture'`,
                    '[class.ant-upload-list-picture-card]': `listType === 'picture-card'`
                },
                preserveWhitespaces: false,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"]]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"] }, { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }]; }, { locale: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], iconRender: [{
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
        }], previewIsImage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NzUploadComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'nz-upload',
                exportAs: 'nzUpload',
                template: "<ng-template #list>\n  <nz-upload-list\n    *ngIf=\"locale && !nzFileListRender\"\n    #listComp\n    [style.display]=\"nzShowUploadList ? '' : 'none'\"\n    [locale]=\"locale\"\n    [listType]=\"nzListType\"\n    [items]=\"nzFileList || []\"\n    [icons]=\"$any(nzShowUploadList)\"\n    [iconRender]=\"nzIconRender\"\n    [previewFile]=\"nzPreviewFile\"\n    [previewIsImage]=\"nzPreviewIsImage\"\n    [onPreview]=\"nzPreview\"\n    [onRemove]=\"onRemove\"\n    [onDownload]=\"nzDownload\"\n  ></nz-upload-list>\n  <ng-container *ngIf=\"nzFileListRender\">\n    <ng-container\n      *ngTemplateOutlet=\"nzFileListRender; context: { $implicit: nzFileList }\"\n    ></ng-container>\n  </ng-container>\n</ng-template>\n<ng-template #con><ng-content></ng-content></ng-template>\n<ng-template #btn>\n  <div [ngClass]=\"classList\" [style.display]=\"nzShowButton ? '' : 'none'\">\n    <div nz-upload-btn #uploadComp [options]=\"_btnOptions!\">\n      <ng-template [ngTemplateOutlet]=\"con\"></ng-template>\n    </div>\n  </div>\n</ng-template>\n<ng-container *ngIf=\"nzType === 'drag'; else select\">\n  <div\n    [ngClass]=\"classList\"\n    (drop)=\"fileDrop($event)\"\n    (dragover)=\"fileDrop($event)\"\n    (dragleave)=\"fileDrop($event)\"\n  >\n    <div nz-upload-btn #uploadComp [options]=\"_btnOptions!\" class=\"ant-upload-btn\">\n      <div class=\"ant-upload-drag-container\">\n        <ng-template [ngTemplateOutlet]=\"con\"></ng-template>\n      </div>\n    </div>\n  </div>\n  <ng-template [ngTemplateOutlet]=\"list\"></ng-template>\n</ng-container>\n<ng-template #select>\n  <ng-container *ngIf=\"nzListType === 'picture-card'; else pic\">\n    <ng-template [ngTemplateOutlet]=\"list\"></ng-template>\n    <ng-template [ngTemplateOutlet]=\"btn\"></ng-template>\n  </ng-container>\n</ng-template>\n<ng-template #pic>\n  <ng-template [ngTemplateOutlet]=\"btn\"></ng-template>\n  <ng-template [ngTemplateOutlet]=\"list\"></ng-template>\n</ng-template>\n",
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
        }], nzIconRender: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzFileListRender: [{
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
        }], nzPreviewIsImage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzTransformFile: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzDownload: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }] }); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzUploadModule {
}
/** @nocollapse */
NzUploadModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: NzUploadModule });
/** @nocollapse */
NzUploadModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function NzUploadModule_Factory(t) { return new (t || NzUploadModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["PlatformModule"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_16__["NzToolTipModule"], ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_15__["NzProgressModule"], ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_11__["NzI18nModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_14__["NzIconModule"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_13__["NzButtonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](NzUploadModule, { declarations: function () { return [NzUploadComponent, NzUploadBtnComponent, NzUploadListComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["PlatformModule"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_16__["NzToolTipModule"], ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_15__["NzProgressModule"], ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_11__["NzI18nModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_14__["NzIconModule"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_13__["NzButtonModule"]]; }, exports: function () { return [NzUploadComponent]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NzUploadModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["PlatformModule"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_16__["NzToolTipModule"], ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_15__["NzProgressModule"], ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_11__["NzI18nModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_14__["NzIconModule"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_13__["NzButtonModule"]],
                declarations: [NzUploadComponent, NzUploadBtnComponent, NzUploadListComponent],
                exports: [NzUploadComponent]
            }]
    }], null, null); })();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=ng-zorro-antd-upload.js.map

/***/ })

};;
//# sourceMappingURL=space-index-module~upload-index-module.js.map