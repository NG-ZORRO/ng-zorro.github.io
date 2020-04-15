exports.ids = ["modal-index-module"];
exports.modules = {

/***/ "./site/doc/app/modal/async.ts":
/*!*************************************!*\
  !*** ./site/doc/app/modal/async.ts ***!
  \*************************************/
/*! exports provided: NzDemoModalAsyncComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoModalAsyncComponent", function() { return NzDemoModalAsyncComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/button */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-button.js");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-wave.js");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-transition-patch.js");
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/modal */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-modal.js");






class NzDemoModalAsyncComponent {
    constructor() {
        this.isVisible = false;
        this.isOkLoading = false;
    }
    showModal() {
        this.isVisible = true;
    }
    handleOk() {
        this.isOkLoading = true;
        setTimeout(() => {
            this.isVisible = false;
            this.isOkLoading = false;
        }, 3000);
    }
    handleCancel() {
        this.isVisible = false;
    }
}
/** @nocollapse */ NzDemoModalAsyncComponent.ɵfac = function NzDemoModalAsyncComponent_Factory(t) { return new (t || NzDemoModalAsyncComponent)(); };
/** @nocollapse */ NzDemoModalAsyncComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoModalAsyncComponent, selectors: [["nz-demo-modal-async"]], decls: 6, vars: 2, consts: [["nz-button", "", "nzType", "primary", 3, "click"], ["nzTitle", "Modal Title", 3, "nzVisible", "nzOkLoading", "nzVisibleChange", "nzOnCancel", "nzOnOk"]], template: function NzDemoModalAsyncComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoModalAsyncComponent_Template_button_click_0_listener() { return ctx.showModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Show Modal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nz-modal", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzVisibleChange", function NzDemoModalAsyncComponent_Template_nz_modal_nzVisibleChange_3_listener($event) { return ctx.isVisible = $event; })("nzOnCancel", function NzDemoModalAsyncComponent_Template_nz_modal_nzOnCancel_3_listener() { return ctx.handleCancel(); })("nzOnOk", function NzDemoModalAsyncComponent_Template_nz_modal_nzOnOk_3_listener() { return ctx.handleOk(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Modal Content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzVisible", ctx.isVisible)("nzOkLoading", ctx.isOkLoading);
    } }, directives: [ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_1__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_2__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_3__["ɵNzTransitionPatchDirective"], ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_4__["NzModalComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoModalAsyncComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-demo-modal-async',
                template: `
    <button nz-button nzType="primary" (click)="showModal()">
      <span>Show Modal</span>
    </button>
    <nz-modal
      [(nzVisible)]="isVisible"
      nzTitle="Modal Title"
      (nzOnCancel)="handleCancel()"
      (nzOnOk)="handleOk()"
      [nzOkLoading]="isOkLoading"
    >
      <p>Modal Content</p>
    </nz-modal>
  `
            }]
    }], null, null); })();


/***/ }),

/***/ "./site/doc/app/modal/basic.ts":
/*!*************************************!*\
  !*** ./site/doc/app/modal/basic.ts ***!
  \*************************************/
/*! exports provided: NzDemoModalBasicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoModalBasicComponent", function() { return NzDemoModalBasicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/button */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-button.js");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-wave.js");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-transition-patch.js");
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/modal */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-modal.js");






class NzDemoModalBasicComponent {
    constructor() {
        this.isVisible = false;
    }
    showModal() {
        this.isVisible = true;
    }
    handleOk() {
        console.log('Button ok clicked!');
        this.isVisible = false;
    }
    handleCancel() {
        console.log('Button cancel clicked!');
        this.isVisible = false;
    }
}
/** @nocollapse */ NzDemoModalBasicComponent.ɵfac = function NzDemoModalBasicComponent_Factory(t) { return new (t || NzDemoModalBasicComponent)(); };
/** @nocollapse */ NzDemoModalBasicComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoModalBasicComponent, selectors: [["nz-demo-modal-basic"]], decls: 12, vars: 2, consts: [["nz-button", "", 3, "nzType", "click"], ["nzTitle", "The first Modal", 3, "nzVisible", "nzVisibleChange", "nzOnCancel", "nzOnOk"]], template: function NzDemoModalBasicComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoModalBasicComponent_Template_button_click_0_listener() { return ctx.showModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Show Modal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nz-modal", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzVisibleChange", function NzDemoModalBasicComponent_Template_nz_modal_nzVisibleChange_3_listener($event) { return ctx.isVisible = $event; })("nzOnCancel", function NzDemoModalBasicComponent_Template_nz_modal_nzOnCancel_3_listener() { return ctx.handleCancel(); })("nzOnOk", function NzDemoModalBasicComponent_Template_nz_modal_nzOnOk_3_listener() { return ctx.handleOk(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Content one");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Content two");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Content three");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Content three");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", "primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzVisible", ctx.isVisible);
    } }, directives: [ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_1__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_2__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_3__["ɵNzTransitionPatchDirective"], ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_4__["NzModalComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoModalBasicComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-demo-modal-basic',
                template: `
    <button nz-button [nzType]="'primary'" (click)="showModal()"><span>Show Modal</span></button>
    <nz-modal [(nzVisible)]="isVisible" nzTitle="The first Modal" (nzOnCancel)="handleCancel()" (nzOnOk)="handleOk()">
      <p>Content one</p>
      <p>Content two</p>
      <p>Content three</p>
      <p>Content three</p>
    </nz-modal>
  `
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./site/doc/app/modal/confirm-promise.ts":
/*!***********************************************!*\
  !*** ./site/doc/app/modal/confirm-promise.ts ***!
  \***********************************************/
/*! exports provided: NzDemoModalConfirmPromiseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoModalConfirmPromiseComponent", function() { return NzDemoModalConfirmPromiseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/modal */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-modal.js");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/button */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-button.js");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-wave.js");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-transition-patch.js");







class NzDemoModalConfirmPromiseComponent {
    constructor(modal) {
        this.modal = modal;
    }
    showConfirm() {
        this.confirmModal = this.modal.confirm({
            nzTitle: 'Do you Want to delete these items?',
            nzContent: 'When clicked the OK button, this dialog will be closed after 1 second',
            nzOnOk: () => new Promise((resolve, reject) => {
                setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
            }).catch(() => console.log('Oops errors!'))
        });
    }
}
/** @nocollapse */ NzDemoModalConfirmPromiseComponent.ɵfac = function NzDemoModalConfirmPromiseComponent_Factory(t) { return new (t || NzDemoModalConfirmPromiseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_1__["NzModalService"])); };
/** @nocollapse */ NzDemoModalConfirmPromiseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoModalConfirmPromiseComponent, selectors: [["nz-demo-modal-confirm-promise"]], decls: 2, vars: 0, consts: [["nz-button", "", "nzType", "info", 3, "click"]], template: function NzDemoModalConfirmPromiseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoModalConfirmPromiseComponent_Template_button_click_0_listener() { return ctx.showConfirm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Confirm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_3__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__["ɵNzTransitionPatchDirective"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoModalConfirmPromiseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-demo-modal-confirm-promise',
                template: `
    <button nz-button nzType="info" (click)="showConfirm()">Confirm</button>
  `
            }]
    }], function () { return [{ type: ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_1__["NzModalService"] }]; }, null); })();


/***/ }),

/***/ "./site/doc/app/modal/confirm.ts":
/*!***************************************!*\
  !*** ./site/doc/app/modal/confirm.ts ***!
  \***************************************/
/*! exports provided: NzDemoModalConfirmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoModalConfirmComponent", function() { return NzDemoModalConfirmComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/modal */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-modal.js");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/button */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-button.js");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-wave.js");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-transition-patch.js");







class NzDemoModalConfirmComponent {
    constructor(modal) {
        this.modal = modal;
    }
    showConfirm() {
        this.modal.confirm({
            nzTitle: '<i>Do you Want to delete these items?</i>',
            nzContent: '<b>Some descriptions</b>',
            nzOnOk: () => console.log('OK')
        });
    }
    showDeleteConfirm() {
        this.modal.confirm({
            nzTitle: 'Are you sure delete this task?',
            nzContent: '<b style="color: red;">Some descriptions</b>',
            nzOkText: 'Yes',
            nzOkType: 'danger',
            nzOnOk: () => console.log('OK'),
            nzCancelText: 'No',
            nzOnCancel: () => console.log('Cancel')
        });
    }
}
/** @nocollapse */ NzDemoModalConfirmComponent.ɵfac = function NzDemoModalConfirmComponent_Factory(t) { return new (t || NzDemoModalConfirmComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_1__["NzModalService"])); };
/** @nocollapse */ NzDemoModalConfirmComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoModalConfirmComponent, selectors: [["nz-demo-modal-confirm"]], decls: 4, vars: 0, consts: [["nz-button", "", "nzType", "info", 3, "click"], ["nz-button", "", "nzType", "dashed", 3, "click"]], template: function NzDemoModalConfirmComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoModalConfirmComponent_Template_button_click_0_listener() { return ctx.showConfirm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Confirm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoModalConfirmComponent_Template_button_click_2_listener() { return ctx.showDeleteConfirm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_3__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__["ɵNzTransitionPatchDirective"]], styles: ["button[_ngcontent-%COMP%] {\n        margin-right: 8px;\n      }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoModalConfirmComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-demo-modal-confirm',
                template: `
    <button nz-button nzType="info" (click)="showConfirm()">Confirm</button>
    <button nz-button nzType="dashed" (click)="showDeleteConfirm()">Delete</button>
  `,
                styles: [
                    `
      button {
        margin-right: 8px;
      }
    `
                ]
            }]
    }], function () { return [{ type: ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_1__["NzModalService"] }]; }, null); })();


/***/ }),

/***/ "./site/doc/app/modal/en.component.ts":
/*!********************************************!*\
  !*** ./site/doc/app/modal/en.component.ts ***!
  \********************************************/
/*! exports provided: NzDemoModalEnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoModalEnComponent", function() { return NzDemoModalEnComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _share_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../share/codebox/codebox.component */ "./site/doc/app/share/codebox/codebox.component.ts");
/* harmony import */ var ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/affix */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-affix.js");
/* harmony import */ var ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/anchor */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-anchor.js");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-transition-patch.js");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/icon */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-icon.js");
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-tooltip.js");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/grid */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-grid.js");
/* harmony import */ var _basic__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./basic */ "./site/doc/app/modal/basic.ts");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./footer */ "./site/doc/app/modal/footer.ts");
/* harmony import */ var _confirm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./confirm */ "./site/doc/app/modal/confirm.ts");
/* harmony import */ var _info__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./info */ "./site/doc/app/modal/info.ts");
/* harmony import */ var _manual__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./manual */ "./site/doc/app/modal/manual.ts");
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./service */ "./site/doc/app/modal/service.ts");
/* harmony import */ var _async__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./async */ "./site/doc/app/modal/async.ts");
/* harmony import */ var _footer2__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./footer2 */ "./site/doc/app/modal/footer2.ts");
/* harmony import */ var _confirm_promise__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./confirm-promise */ "./site/doc/app/modal/confirm-promise.ts");
/* harmony import */ var _locale__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./locale */ "./site/doc/app/modal/locale.ts");
/* harmony import */ var _position__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./position */ "./site/doc/app/modal/position.ts");





















class NzDemoModalEnComponent {
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
/** @nocollapse */ NzDemoModalEnComponent.ɵfac = function NzDemoModalEnComponent_Factory(t) { return new (t || NzDemoModalEnComponent)(); };
/** @nocollapse */ NzDemoModalEnComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoModalEnComponent, selectors: [["nz-demo-modal"]], viewQuery: function NzDemoModalEnComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_share_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_1__["NzCodeBoxComponent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.codeBoxes = _t);
    } }, decls: 1466, vars: 40, consts: [[1, "toc-affix", 3, "nzOffsetTop"], ["nzShowInkInFixed", "", 3, "nzAffix", "nzClick"], ["nzHref", "#components-modal-demo-basic", "nzTitle", "Basic"], ["nzHref", "#components-modal-demo-async", "nzTitle", "Asynchronously close"], ["nzHref", "#components-modal-demo-footer", "nzTitle", "Customized Footer"], ["nzHref", "#components-modal-demo-footer2", "nzTitle", "Customized Footer(2)"], ["nzHref", "#components-modal-demo-confirm", "nzTitle", "Confirmation modal dialog"], ["nzHref", "#components-modal-demo-confirm-promise", "nzTitle", "Confirmation modal dialog"], ["nzHref", "#components-modal-demo-info", "nzTitle", "Information modal dialog"], ["nzHref", "#components-modal-demo-locale", "nzTitle", "Internationalization"], ["nzHref", "#components-modal-demo-manual", "nzTitle", "Manual to destroy"], ["nzHref", "#components-modal-demo-position", "nzTitle", "To customize the position of modal"], ["nzHref", "#components-modal-demo-service", "nzTitle", "Modal's service"], ["nzHref", "#api", "nzTitle", "API"], [1, "markdown"], [1, "subtitle"], [1, "widget"], ["href", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/modal/doc/index.en-US.md", "target", "_blank", "rel", "noopener noreferrer", 1, "edit-button"], ["nz-icon", "", "nzType", "edit"], ["id", "when-to-use"], ["onclick", "window.location.hash = 'when-to-use'", 1, "anchor"], [1, "language-ts"], [1, "token", "keyword"], [1, "token", "punctuation"], [1, "token", "string"], ["nz-icon", "", "nzType", "appstore", "nz-tooltip", "", "nzTooltipTitle", "Expand All Code", 1, "code-box-expand-trigger", 3, "click"], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", 3, "nzXl", "nzSpan"], ["nzTitle", "Basic", "nzSelector", "nz-demo-modal-basic", "nzGenerateCommand", "ng g ng-zorro-antd:modal-basic <name>", "nzComponentName", "NzDemoModalBasicComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["demo", ""], ["intro", ""], ["nzTitle", "Customized Footer", "nzSelector", "nz-demo-modal-footer", "nzGenerateCommand", "ng g ng-zorro-antd:modal-footer <name>", "nzComponentName", "NzDemoModalFooterComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Confirmation modal dialog", "nzSelector", "nz-demo-modal-confirm", "nzGenerateCommand", "ng g ng-zorro-antd:modal-confirm <name>", "nzComponentName", "NzDemoModalConfirmComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Information modal dialog", "nzSelector", "nz-demo-modal-info", "nzGenerateCommand", "ng g ng-zorro-antd:modal-info <name>", "nzComponentName", "NzDemoModalInfoComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Manual to destroy", "nzSelector", "nz-demo-modal-manual", "nzGenerateCommand", "ng g ng-zorro-antd:modal-manual <name>", "nzComponentName", "NzDemoModalManualComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Modal's service", "nzSelector", "nz-demo-modal-service", "nzGenerateCommand", "ng g ng-zorro-antd:modal-service <name>", "nzComponentName", "NzDemoModalServiceComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Asynchronously close", "nzSelector", "nz-demo-modal-async", "nzGenerateCommand", "ng g ng-zorro-antd:modal-async <name>", "nzComponentName", "NzDemoModalAsyncComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Customized Footer(2)", "nzSelector", "nz-demo-modal-footer2", "nzGenerateCommand", "ng g ng-zorro-antd:modal-footer2 <name>", "nzComponentName", "NzDemoModalFooter2Component", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Confirmation modal dialog", "nzSelector", "nz-demo-modal-confirm-promise", "nzGenerateCommand", "ng g ng-zorro-antd:modal-confirm-promise <name>", "nzComponentName", "NzDemoModalConfirmPromiseComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "Internationalization", "nzSelector", "nz-demo-modal-locale", "nzGenerateCommand", "ng g ng-zorro-antd:modal-locale <name>", "nzComponentName", "NzDemoModalLocaleComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "To customize the position of modal", "nzSelector", "nz-demo-modal-position", "nzGenerateCommand", "ng g ng-zorro-antd:modal-position <name>", "nzComponentName", "NzDemoModalPositionComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], [1, "markdown", "api-container"], ["id", "api"], ["onclick", "window.location.hash = 'api'", 1, "anchor"], ["id", "nzmodalservice"], [1, "api-type-label", "service"], ["onclick", "window.location.hash = 'nzmodalservice'", 1, "anchor"], ["id", "attentions"], ["onclick", "window.location.hash = 'attentions'", 1, "anchor"], ["id", "using-service-to-create-normal-mode-modal"], ["onclick", "window.location.hash = 'using-service-to-create-normal-mode-modal'", 1, "anchor"], ["id", "confirm-box-mode---nzmodalservice-method()"], ["onclick", "window.location.hash = 'confirm-box-mode---nzmodalservice-method()'", 1, "anchor"], [1, "token", "operator"], [1, "token", "function"], ["spellcheck", "true", 1, "token", "comment"], ["id", "related-type-definition"], ["onclick", "window.location.hash = 'related-type-definition'", 1, "anchor"], ["id", "other-methods/attributes-for-nzmodalservice"], ["onclick", "window.location.hash = 'other-methods/attributes-for-nzmodalservice'", 1, "anchor"], ["id", "nzmodalref"], ["onclick", "window.location.hash = 'nzmodalref'", 1, "anchor"], ["id", "modalbuttonoptions-(used-to-customize-the-bottom-button)"], ["onclick", "window.location.hash = 'modalbuttonoptions-(used-to-customize-the-bottom-button)'", 1, "anchor"], ["id", "[nzmodalfooter]"], [1, "api-type-label", "directive"], ["onclick", "window.location.hash = '[nzmodalfooter]'", 1, "anchor"], [1, "language-html"], [1, "token", "tag"], [1, "token", "attr-name"], [1, "token", "attr-value"]], template: function NzDemoModalEnComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-affix", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nz-anchor", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzClick", function NzDemoModalEnComponent_Template_nz_anchor_nzClick_2_listener($event) { return ctx.goLink($event); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "section", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Modal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "section", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Modal dialogs.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h2", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "When To Use");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "When requiring users to interact with application, but without jumping to a new page to interrupt\nthe user's workflow, you can use ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Modal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " to create a new floating layer over the current page for user\ngetting feedback or information purposes.\nAdditionally, if you need show a simple confirmation dialog, you can use ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "NzModalService.confirm()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, ",\nand so on.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "It is recommended to use the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Component");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " way to pop up the Modal, so that the component logic of the popup layer can be completely isolated from the outer component, and can be reused at any time. In the popup layer component, you can obtain Modal's component instance by injecting ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "NzModalRef");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " to control the behavior of the modal box.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "pre", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "import");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "{");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " NzModalModule ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "from");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "'ng-zorro-antd/modal'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Examples");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoModalEnComponent_Template_i_click_67_listener() { return ctx.expandAllCode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "nz-code-box", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "nz-demo-modal-basic", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Basic modal.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "nz-code-box", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "nz-demo-modal-footer", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "A more complex example which define a customized footer button bar,\nthe dialog will change to loading state after clicking submit button, when the loading is over,\nthe modal dialog will be closed.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "You could set ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "nzFooter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, " to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, " if you don't need default footer buttons.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "nz-code-box", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "nz-demo-modal-confirm", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "To use ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "NzModalService.confirm()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, " to popup a confirmation modal dialog.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "nz-code-box", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "nz-demo-modal-info", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "In the various types of information modal dialog, only one button to close dialog is provided.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "nz-code-box", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "nz-demo-modal-manual", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Manually destroying a modal.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "nz-code-box", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "nz-demo-modal-service", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Usage of Modal's service, examples demonstrate user-defined templates, custom components, and methods for injecting modal instances.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "The template context is ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "{ $implicit: nzComponentParams, modalRef: NzModalRef }");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, " when the content is templates.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "nz-code-box", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "nz-demo-modal-async", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "Asynchronously close a modal dialog when a user clicked OK button, for example,\nyou can use this pattern when you submit a form.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "nz-code-box", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "nz-demo-modal-footer2", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "use ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "nzModalFooter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, " directive to customized footer button bar.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "nz-code-box", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "nz-demo-modal-confirm-promise", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "To use ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "NzModalService.confirm()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, " to popup confirmation modal dialog. Let NzOnCancel/NzOnOk function return a promise object to\ndelay closing the dialog.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "nz-code-box", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](139, "nz-demo-modal-locale", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "To customize the text of the buttons, you need to set ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "nzOkText");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "nzCancelText");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, " props.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "nz-code-box", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](150, "nz-demo-modal-position", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "You can use ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "nzStyle.top");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, " or other styles to set position of modal dialog.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "blockquote");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "NOTE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, " Due to Angular's style isolation, you may need to override the NgZorro style with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, ":: ng-deep");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, " within a custom style if ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "encapsulation: ViewEncapsulation.None");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, " is not included in the Component");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "section", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "h2", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "API");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "a", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "h3", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "NzModalService");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "label", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "service");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "a", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "The dialog is currently divided into 2 modes, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, "normal mode");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, "confirm box mode");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, " (ie the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, "Confirm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, " dialog, which is called by calling ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, "confirm/info/success/error/warning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, "). The degree of API support for the two modes is slightly different.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, "Property");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](205, "Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](206, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, "nzAfterOpen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](212, "Specify a EventEmitter that will be emitted when modal opened");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](214, "EventEmitter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](216, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](217, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, "nzAfterClose");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](222, "Specify a EventEmitter that will be emitted when modal is closed completely (Can listen for parameters passed in the close/destroy method)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, "EventEmitter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](226, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](227, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](230, "nzBodyStyle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](232, "Body style for modal body element. Such as height, padding etc.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](235, "object");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](237, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](238, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](241, "nzCancelText");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](243, "Text of the Cancel button. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](245, "Set to null to show no cancel button (this value is invalid if the nzFooter parameter is used in normal mode)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](248, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](250, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](251, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](254, "nzClosable");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](256, "Whether a close (x) button is visible on top right of the modal dialog or not. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](258, "Invalid value in confirm box mode (default will be hidden)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](261, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](264, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](265, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](268, "nzOkLoading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](270, "Whether to apply loading visual effect for OK button or not");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](273, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](276, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](277, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](280, "nzCancelLoading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](282, "Whether to apply loading visual effect for Cancel button or not");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](284, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](285, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](288, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](289, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](292, "nzOkDisabled");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](294, "Whether to disable Ok button or not");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](295, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](297, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](298, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](300, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](301, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](303, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](304, "nzCancelDisabled");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](306, "Whether to disable Cancel button or not");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](307, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](308, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](309, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](310, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](311, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](312, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](313, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](314, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](315, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](316, "nzFooter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](317, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](318, "Footer content, set as footer=null when you don't need default buttons. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](319, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](320, "1. Only valid in normal mode.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](321, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](322, "2. You can customize the buttons to the maximum extent by passing a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](323, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](324, "ModalButtonOptions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](325, " configuration (see the case or the instructions below).");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](326, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](327, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](328, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](329, "TemplateRef");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](330, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](331, "ModalButtonOptions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](332, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](333, "OK and Cancel buttons");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](334, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](335, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](336, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](337, "nzGetContainer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](338, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](339, "The mount node for Modal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](340, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](341, "HTMLElement / () => HTMLElement");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](342, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](343, "A default container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](344, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](345, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](346, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](347, "nzKeyboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](348, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](349, "Whether support press esc to close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](350, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](351, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](352, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](353, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](354, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](355, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](356, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](357, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](358, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](359, "nzMask");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](360, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](361, "Whether show mask or not.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](362, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](363, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](364, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](365, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](366, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](367, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](368, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](369, "\u2705");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](370, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](371, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](372, "nzMaskClosable");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](373, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](374, "Whether to close the modal dialog when the mask (area outside the modal) is clicked");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](375, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](376, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](377, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](378, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](379, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](380, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](381, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](382, "\u2705");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](383, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](384, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](385, "nzMaskStyle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](386, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](387, "Style for modal's mask element.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](388, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](389, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](390, "object");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](391, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](392, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](393, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](394, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](395, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](396, "nzOkText");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](397, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](398, "Text of the OK button. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](399, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](400, "Set to null to show no ok button (this value is invalid if the nzFooter parameter is used in normal mode)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](401, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](402, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](403, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](404, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](405, "OK");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](406, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](407, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](408, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](409, "nzOkType");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](410, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](411, "Button type of the OK button. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](412, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](413, "Consistent with the type of the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](414, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](415, "nz-button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](416, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](417, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](418, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](419, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](420, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](421, "primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](422, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](423, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](424, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](425, "nzStyle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](426, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](427, "Style of floating layer, typically used at least for adjusting the position.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](428, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](429, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](430, "object");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](431, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](432, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](433, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](434, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](435, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](436, "nzCloseIcon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](437, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](438, "Custom close icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](439, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](440, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](441, "string|TemplateRef<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](442, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](443, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](444, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](445, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](446, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](447, "nzTitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](448, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](449, "The modal dialog's title. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](450, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](451, "Leave blank to show no title. The usage of TemplateRef can refer to the case");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](452, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](453, "string / TemplateRef");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](454, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](455, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](456, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](457, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](458, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](459, "nzVisible");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](460, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](461, "Whether the modal dialog is visible or not. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](462, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](463, "When using the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](464, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](465, "<nz-modal>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](466, " tag, be sure to use two-way binding, for example: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](467, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](468, "[(nzVisible)]=\"visible\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](469, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](470, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](471, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](472, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](473, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](474, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](475, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](476, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](477, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](478, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](479, "nzWidth");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](480, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](481, "Width of the modal dialog. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](482, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](483, "When using numbers, the default unit is ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](484, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](485, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](486, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](487, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](488, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](489, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](490, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](491, "520");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](492, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](493, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](494, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](495, "nzClassName");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](496, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](497, "The class name of the modal dialog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](498, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](499, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](500, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](501, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](502, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](503, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](504, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](505, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](506, "nzWrapClassName");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](507, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](508, "The class name of the container of the modal dialog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](509, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](510, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](511, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](512, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](513, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](514, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](515, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](516, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](517, "nzZIndex");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](518, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](519, "The z-index of the Modal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](520, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](521, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](522, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](523, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](524, "1000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](525, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](526, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](527, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](528, "nzOnCancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](529, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](530, "Specify a function that will be called when a user clicks mask, close button on top right or Cancel button (If nzContent is Component, the Component instance will be put in as an argument). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](531, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](532, "Note: When created with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](533, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](534, "NzModalService.create");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](535, ", this parameter should be passed into the type of function (callback function). This function returns a promise, which is automatically closed when the execution is complete or the promise ends (return ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](536, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](537, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](538, " to prevent closing)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](539, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](540, "EventEmitter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](541, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](542, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](543, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](544, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](545, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](546, "nzOnOk");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](547, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](548, "Specify a EventEmitter that will be emitted when a user clicks the OK button (If nzContent is Component, the Component instance will be put in as an argument). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](549, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](550, "Note: When created with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](551, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](552, "NzModalService.create");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](553, ", this parameter should be passed into the type of function (callback function). This function returns a promise, which is automatically closed when the execution is complete or the promise ends (return ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](554, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](555, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](556, " to prevent closing)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](557, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](558, "EventEmitter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](559, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](560, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](561, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](562, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](563, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](564, "nzContent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](565, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](566, "Content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](567, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](568, "string / TemplateRef / Component / ng-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](569, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](570, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](571, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](572, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](573, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](574, "nzComponentParams");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](575, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](576, "When nzContent is a Component, the attributes in this parameter will be passed to the nzContent instance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](577, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](578, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](579, "object");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](580, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](581, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](582, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](583, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](584, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](585, "nzIconType");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](586, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](587, "Icon type of the Icon component. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](588, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](589, "Only valid in confirm box mode");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](590, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](591, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](592, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](593, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](594, "question-circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](595, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](596, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](597, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](598, "nzAutofocus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](599, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](600, "autofocus and the position\uFF0Cdisabled when is ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](601, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](602, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](603, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](604, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](605, "'ok' | 'cancel' | 'auto' | null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](606, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](607, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](608, "'auto'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](609, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](610, "h4", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](611, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](612, "Attentions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](613, "a", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](614, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](615, "blockquote");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](616, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](617, "The default state of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](618, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](619, "<nz-modal>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](620, " will not be automatically cleared. If you wish to open new content each time, use the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](621, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](622, "NzModalService");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](623, " service to create modals (when created as a service, the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](624, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](625, "nzAfterClose");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](626, " event will be listened by default aim to destroy the modal).");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](627, "blockquote");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](628, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](629, "Modals created through the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](630, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](631, "NzModalService");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](632, " service need you to manage their own life cycle. For example, when you switch the page route, the modal box created by service will not be destroyed automatically. You need to use the modal box's reference to manually destroy it (");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](633, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](634, "NzModalRef.close()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](635, " or ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](636, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](637, "NzModalRef.destroy()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](638, ").");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](639, "h4", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](640, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](641, "Using service to create Normal Mode modal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](642, "a", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](643, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](644, "blockquote");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](645, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](646, "You can call ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](647, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](648, "NzModalService.create(options)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](649, " to dynamically create ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](650, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](651, "normal mode");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](652, " modals, where ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](653, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](654, "options");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](655, " is an object that supports the support given in the API above ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](656, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](657, "normal mode");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](658, " parameters");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](659, "h3", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](660, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](661, "Confirm box mode - NzModalService.method()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](662, "a", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](663, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](664, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](665, "There are five ways to display the information based on the content's nature:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](666, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](667, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](668, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](669, "NzModalService.info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](670, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](671, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](672, "NzModalService.success");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](673, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](674, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](675, "NzModalService.error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](676, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](677, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](678, "NzModalService.warning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](679, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](680, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](681, "NzModalService.confirm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](682, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](683, "The items listed above are all functions, expecting a settings object as parameter.\nConsistent with the above API, some property types or initial values are different as follows:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](684, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](685, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](686, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](687, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](688, "Property");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](689, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](690, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](691, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](692, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](693, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](694, "Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](695, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](696, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](697, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](698, "nzOnOk");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](699, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](700, "Specify a EventEmitter that will be emitted when a user clicks the OK button (If nzContent is Component, the Component instance will be put in as an argument.). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](701, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](702, "This function returns a promise, which is automatically closed when the execution is complete or the promise ends (return ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](703, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](704, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](705, " to prevent closing)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](706, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](707, "function");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](708, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](709, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](710, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](711, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](712, "nzOnCancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](713, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](714, "Specify a function that will be called when a user clicks mask, close button on top right or Cancel button (If nzContent is Component, the Component instance will be put in as an argument.). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](715, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](716, "This function returns a promise, which is automatically closed when the execution is complete or the promise ends (return ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](717, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](718, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](719, " to prevent closing)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](720, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](721, "function");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](722, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](723, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](724, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](725, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](726, "nzWidth");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](727, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](728, "Width of the modal dialog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](729, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](730, "string / number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](731, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](732, "416");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](733, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](734, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](735, "nzMaskClosable");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](736, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](737, "Whether to close the modal dialog when the mask (area outside the modal) is clicked");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](738, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](739, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](740, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](741, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](742, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](743, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](744, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](745, "All the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](746, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](747, "NzModalService.method");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](748, "s will return a reference, and then we can close the popup by the reference.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](749, "pre", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](750, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](751, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](752, "constructor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](753, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](754, "(");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](755, "modal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](756, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](757, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](758, " NzModalService");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](759, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](760, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](761, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](762, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](763, "{");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](764, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](765, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](766, "const");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](767, " ref");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](768, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](769, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](770, " NzModalRef ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](771, "span", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](772, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](773, " modal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](774, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](775, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](776, "span", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](777, "info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](778, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](779, "(");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](780, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](781, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](782, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](783, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](784, "\n  ref");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](785, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](786, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](787, "span", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](788, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](789, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](790, "(");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](791, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](792, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](793, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](794, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](795, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](796, "span", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](797, "// Or ref.destroy(); This dialog will be destroyed directly");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](798, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](799, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](800, "}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](801, "h3", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](802, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](803, "Related type definition");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](804, "a", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](805, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](806, "h4", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](807, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](808, "Other Methods/Attributes for NzModalService");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](809, "a", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](810, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](811, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](812, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](813, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](814, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](815, "Methods/Attributes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](816, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](817, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](818, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](819, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](820, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](821, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](822, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](823, "openModals");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](824, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](825, "All currently open Modal list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](826, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](827, "NzModalRef[]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](828, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](829, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](830, "afterAllClose");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](831, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](832, "Callback called after all Modals closed completely");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](833, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](834, "Observable<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](835, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](836, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](837, "closeAll()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](838, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](839, "Close all modals");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](840, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](841, "function");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](842, "h4", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](843, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](844, "NzModalRef");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](845, "a", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](846, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](847, "blockquote");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](848, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](849, "NzModalRef object is used to control dialogs and communicate with inside content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](850, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](851, "The dialog created by the service method ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](852, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](853, "NzModalService.xxx()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](854, " will return a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](855, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](856, "NzModalRef");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](857, " object that is used to manipulate the dialog (this object can also be obtained by dependency injection ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](858, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](859, "NzModalRef");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](860, " if ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](861, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](862, "nzContent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](863, " is used as Component) , This object has the following methods:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](864, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](865, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](866, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](867, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](868, "Method");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](869, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](870, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](871, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](872, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](873, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](874, "afterOpen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](875, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](876, "Same as nzAfterOpen but of type Observable<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](877, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](878, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](879, "afterClose");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](880, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](881, "Same as nzAfterClose, but of type Observable<result:any>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](882, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](883, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](884, "open()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](885, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](886, "Open (display) dialog box. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](887, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](888, "Calling this function will fail if the dialog is already destroyed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](889, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](890, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](891, "close()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](892, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](893, "Close (hide) the dialog. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](894, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](895, "Note: When used for a dialog created as a service, this method will destroy the dialog directly (as with the destroy method)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](896, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](897, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](898, "destroy()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](899, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](900, "Destroy the dialog. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](901, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](902, "Note: Used only for dialogs created by the service (non-service created dialogs, this method only hides the dialog)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](903, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](904, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](905, "getContentComponent()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](906, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](907, "Gets the Component instance in the contents of the dialog for ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](908, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](909, "nzContent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](910, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](911, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](912, " Note: When the dialog is not initialized (");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](913, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](914, "ngOnInit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](915, " is not executed), this function will return ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](916, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](917, "undefined");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](918, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](919, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](920, "triggerOk()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](921, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](922, "Manually trigger nzOnOk");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](923, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](924, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](925, "triggerCancel()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](926, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](927, "Manually trigger nzOnCancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](928, "h3", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](929, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](930, "ModalButtonOptions (used to customize the bottom button)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](931, "a", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](932, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](933, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](934, "An array of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](935, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](936, "ModalButtonOptions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](937, " type can be passed to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](938, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](939, "nzFooter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](940, " for custom bottom buttons.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](941, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](942, "The button configuration items are as follows (along with the button component):");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](943, "pre", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](944, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](945, "nzFooter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](946, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](947, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](948, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](949, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](950, "[");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](951, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](952, "{");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](953, "\n  label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](954, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](955, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](956, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](957, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](958, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](959, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](960, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](961, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](962, "span", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](963, "// Button text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](964, "\n  type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](965, "span", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](966, "?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](967, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](968, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](969, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](970, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](971, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](972, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](973, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](974, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](975, "span", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](976, "// Types");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](977, "\n  shape");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](978, "span", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](979, "?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](980, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](981, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](982, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](983, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](984, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](985, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](986, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](987, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](988, "span", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](989, "// Shape");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](990, "\n  ghost");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](991, "span", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](992, "?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](993, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](994, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](995, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](996, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](997, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](998, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](999, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1000, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1001, "span", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1002, "// Whether ghost");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1003, "\n  size");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1004, "span", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1005, "?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1006, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1007, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1008, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1009, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1010, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1011, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1012, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1013, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1014, "span", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1015, "// Size");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1016, "\n  autoLoading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1017, "span", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1018, "?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1019, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1020, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1021, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1022, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1023, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1024, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1025, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1026, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1027, "span", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1028, "// The default is true. If true, this button will automatically be set to the loading state when onClick returns a promise.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1029, "\n\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1030, "span", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1031, "// Tip: The `this` of below methods points to the configuration object itself. When nzContent is a component class, the contentComponentInstance parameter passed in by the method below is an instance of the component class");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1032, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1033, "span", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1034, "// Whether to show this button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1035, "\n  show");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1036, "span", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1037, "?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1038, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1039, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1040, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1041, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1042, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1043, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1044, "span", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1045, "|");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1046, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1047, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1048, "(");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1049, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1050, "(");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1051, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1052, "this");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1053, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1054, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1055, " ModalButtonOptions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1056, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1057, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1058, " contentComponentInstance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1059, "span", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1060, "?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1061, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1062, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1063, " object");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1064, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1065, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1066, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1067, "span", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1068, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1069, "span", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1070, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1071, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1072, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1073, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1074, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1075, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1076, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1077, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1078, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1079, "span", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1080, "// Whether to display loading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1081, "\n  loading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1082, "span", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1083, "?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1084, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1085, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1086, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1087, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1088, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1089, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1090, "span", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1091, "|");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1092, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1093, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1094, "(");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1095, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1096, "(");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1097, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1098, "this");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1099, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1100, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1101, " ModalButtonOptions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1102, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1103, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1104, " contentComponentInstance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1105, "span", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1106, "?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1107, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1108, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1109, " object");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1110, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1111, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1112, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1113, "span", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1114, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1115, "span", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1116, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1117, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1118, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1119, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1120, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1121, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1122, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1123, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1124, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1125, "span", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1126, "// Is it disabled");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1127, "\n  disabled");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1128, "span", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1129, "?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1130, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1131, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1132, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1133, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1134, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1135, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1136, "span", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1137, "|");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1138, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1139, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1140, "(");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1141, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1142, "(");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1143, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1144, "this");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1145, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1146, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1147, " ModalButtonOptions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1148, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1149, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1150, " contentComponentInstance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1151, "span", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1152, "?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1153, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1154, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1155, " object");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1156, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1157, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1158, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1159, "span", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1160, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1161, "span", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1162, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1163, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1164, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1165, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1166, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1167, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1168, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1169, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1170, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1171, "span", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1172, "// Callback of clicking");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1173, "\n  onClick");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1174, "span", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1175, "?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1176, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1177, "(");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1178, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1179, "this");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1180, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1181, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1182, " ModalButtonOptions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1183, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1184, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1185, " contentComponentInstance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1186, "span", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1187, "?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1188, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1189, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1190, " object");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1191, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1192, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1193, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1194, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1195, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1196, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1197, "void");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1198, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1199, "span", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1200, "|");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1201, " Promise");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1202, "span", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1203, "&");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1204, "lt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1205, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1206, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1207, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1208, "void");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1209, "span", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1210, "&");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1211, "gt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1212, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1213, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1214, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1215, "span", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1216, "|");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1217, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1218, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1219, "any");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1220, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1221, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1222, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1223, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1224, "}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1225, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1226, "]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1227, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1228, "The above configuration items can also be changed in real-time to trigger the button behavior change.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1229, "h3", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1230, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1231, "[nzModalFooter]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1232, "label", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1233, "directive");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1234, "a", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1235, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1236, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1237, "Another way to customize the footer button.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1238, "pre", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1239, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1240, "span", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1241, "span", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1242, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1243, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1244, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1245, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1246, "span", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1247, "*nzModalFooter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1248, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1249, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1250, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1251, "span", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1252, "span", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1253, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1254, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1255, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1256, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1257, "span", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1258, "nz-button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1259, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1260, "span", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1261, "nzType");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1262, "span", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1263, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1264, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1265, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1266, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1267, "default");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1268, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1269, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1270, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1271, "span", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1272, "(click)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1273, "span", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1274, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1275, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1276, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1277, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1278, "handleCancel()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1279, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1280, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1281, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1282, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1283, "Custom Callback");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1284, "span", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1285, "span", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1286, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1287, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1288, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1289, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1290, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1291, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1292, "span", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1293, "span", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1294, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1295, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1296, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1297, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1298, "span", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1299, "nz-button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1300, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1301, "span", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1302, "nzType");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1303, "span", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1304, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1305, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1306, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1307, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1308, "primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1309, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1310, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1311, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1312, "span", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1313, "(click)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1314, "span", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1315, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1316, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1317, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1318, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1319, "handleOk()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1320, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1321, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1322, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1323, "span", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1324, "[nzLoading]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1325, "span", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1326, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1327, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1328, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1329, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1330, "isConfirmLoading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1331, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1332, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1333, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1334, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1335, "Custom Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1336, "span", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1337, "span", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1338, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1339, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1340, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1341, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1342, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1343, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1344, "span", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1345, "span", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1346, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1347, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1348, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1349, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1350, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1351, "\n\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1352, "span", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1353, "<!-- or -->");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1354, "\n\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1355, "span", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1356, "span", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1357, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1358, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1359, "ng-template");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1360, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1361, "span", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1362, "[nzModalFooter]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1363, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1364, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1365, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1366, "span", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1367, "span", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1368, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1369, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1370, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1371, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1372, "span", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1373, "nz-button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1374, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1375, "span", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1376, "nzType");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1377, "span", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1378, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1379, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1380, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1381, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1382, "default");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1383, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1384, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1385, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1386, "span", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1387, "(click)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1388, "span", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1389, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1390, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1391, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1392, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1393, "handleCancel()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1394, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1395, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1396, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1397, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1398, "Custom Callback");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1399, "span", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1400, "span", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1401, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1402, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1403, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1404, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1405, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1406, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1407, "span", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1408, "span", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1409, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1410, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1411, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1412, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1413, "span", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1414, "nz-button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1415, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1416, "span", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1417, "nzType");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1418, "span", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1419, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1420, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1421, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1422, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1423, "primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1424, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1425, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1426, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1427, "span", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1428, "(click)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1429, "span", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1430, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1431, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1432, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1433, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1434, "handleOk()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1435, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1436, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1437, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1438, "span", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1439, "[nzLoading]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1440, "span", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1441, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1442, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1443, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1444, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1445, "isConfirmLoading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1446, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1447, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1448, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1449, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1450, "Custom Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1451, "span", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1452, "span", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1453, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1454, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1455, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1456, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1457, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1458, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1459, "span", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1460, "span", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1461, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1462, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1463, "ng-template");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1464, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1465, ">");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzGutter", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzXl", 12)("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-modal-demo-basic")("nzLink", "components-modal-demo-basic")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/modal/demo/basic.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-modal-demo-footer")("nzLink", "components-modal-demo-footer")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/modal/demo/footer.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-modal-demo-confirm")("nzLink", "components-modal-demo-confirm")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/modal/demo/confirm.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-modal-demo-info")("nzLink", "components-modal-demo-info")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/modal/demo/info.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-modal-demo-manual")("nzLink", "components-modal-demo-manual")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/modal/demo/manual.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-modal-demo-service")("nzLink", "components-modal-demo-service")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/modal/demo/service.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzXl", 12)("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-modal-demo-async")("nzLink", "components-modal-demo-async")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/modal/demo/async.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-modal-demo-footer2")("nzLink", "components-modal-demo-footer2")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/modal/demo/footer2.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-modal-demo-confirm-promise")("nzLink", "components-modal-demo-confirm-promise")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/modal/demo/confirm-promise.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-modal-demo-locale")("nzLink", "components-modal-demo-locale")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/modal/demo/locale.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-modal-demo-position")("nzLink", "components-modal-demo-position")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/modal/demo/position.md");
    } }, directives: [ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_2__["NzAffixComponent"], ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_3__["NzAnchorComponent"], ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_3__["NzAnchorLinkComponent"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__["NzIconDirective"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_6__["NzTooltipDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__["NzRowDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__["NzColDirective"], _share_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_1__["NzCodeBoxComponent"], _basic__WEBPACK_IMPORTED_MODULE_8__["NzDemoModalBasicComponent"], _footer__WEBPACK_IMPORTED_MODULE_9__["NzDemoModalFooterComponent"], _confirm__WEBPACK_IMPORTED_MODULE_10__["NzDemoModalConfirmComponent"], _info__WEBPACK_IMPORTED_MODULE_11__["NzDemoModalInfoComponent"], _manual__WEBPACK_IMPORTED_MODULE_12__["NzDemoModalManualComponent"], _service__WEBPACK_IMPORTED_MODULE_13__["NzDemoModalServiceComponent"], _async__WEBPACK_IMPORTED_MODULE_14__["NzDemoModalAsyncComponent"], _footer2__WEBPACK_IMPORTED_MODULE_15__["NzDemoModalFooter2Component"], _confirm_promise__WEBPACK_IMPORTED_MODULE_16__["NzDemoModalConfirmPromiseComponent"], _locale__WEBPACK_IMPORTED_MODULE_17__["NzDemoModalLocaleComponent"], _position__WEBPACK_IMPORTED_MODULE_18__["NzDemoModalPositionComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoModalEnComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-demo-modal',
                preserveWhitespaces: false,
                templateUrl: './en.html'
            }]
    }], null, { codeBoxes: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"],
            args: [_share_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_1__["NzCodeBoxComponent"]]
        }] }); })();


/***/ }),

/***/ "./site/doc/app/modal/footer.ts":
/*!**************************************!*\
  !*** ./site/doc/app/modal/footer.ts ***!
  \**************************************/
/*! exports provided: NzDemoModalFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoModalFooterComponent", function() { return NzDemoModalFooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/button */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-button.js");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-wave.js");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-transition-patch.js");
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/modal */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-modal.js");






function NzDemoModalFooterComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Custom Modal Title ");
} }
function NzDemoModalFooterComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Modal Content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Modal Content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Modal Content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Modal Content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Modal Content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NzDemoModalFooterComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    const _r376 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Modal Footer: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoModalFooterComponent_ng_template_8_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r376); const ctx_r375 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r375.handleCancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Custom Callback");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoModalFooterComponent_ng_template_8_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r376); const ctx_r377 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r377.handleOk(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Custom Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r374 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzLoading", ctx_r374.isConfirmLoading);
} }
class NzDemoModalFooterComponent {
    constructor() {
        this.isVisible = false;
        this.isConfirmLoading = false;
    }
    showModal() {
        this.isVisible = true;
    }
    handleOk() {
        this.isConfirmLoading = true;
        setTimeout(() => {
            this.isVisible = false;
            this.isConfirmLoading = false;
        }, 3000);
    }
    handleCancel() {
        this.isVisible = false;
    }
}
/** @nocollapse */ NzDemoModalFooterComponent.ɵfac = function NzDemoModalFooterComponent_Factory(t) { return new (t || NzDemoModalFooterComponent)(); };
/** @nocollapse */ NzDemoModalFooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoModalFooterComponent, selectors: [["nz-demo-modal-footer"]], decls: 10, vars: 4, consts: [["nz-button", "", "nzType", "primary", 3, "click"], [3, "nzVisible", "nzTitle", "nzContent", "nzFooter", "nzVisibleChange", "nzOnCancel"], ["modalTitle", ""], ["modalContent", ""], ["modalFooter", ""], ["nz-button", "", "nzType", "default", 3, "click"], ["nz-button", "", "nzType", "primary", 3, "nzLoading", "click"]], template: function NzDemoModalFooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoModalFooterComponent_Template_button_click_0_listener() { return ctx.showModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Show Modal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nz-modal", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzVisibleChange", function NzDemoModalFooterComponent_Template_nz_modal_nzVisibleChange_3_listener($event) { return ctx.isVisible = $event; })("nzOnCancel", function NzDemoModalFooterComponent_Template_nz_modal_nzOnCancel_3_listener() { return ctx.handleCancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NzDemoModalFooterComponent_ng_template_4_Template, 1, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NzDemoModalFooterComponent_ng_template_6_Template, 10, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NzDemoModalFooterComponent_ng_template_8_Template, 6, 1, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r369 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
        const _r371 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
        const _r373 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzVisible", ctx.isVisible)("nzTitle", _r369)("nzContent", _r371)("nzFooter", _r373);
    } }, directives: [ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_1__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_2__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_3__["ɵNzTransitionPatchDirective"], ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_4__["NzModalComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoModalFooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-demo-modal-footer',
                template: `
    <button nz-button nzType="primary" (click)="showModal()">
      <span>Show Modal</span>
    </button>
    <nz-modal
      [(nzVisible)]="isVisible"
      [nzTitle]="modalTitle"
      [nzContent]="modalContent"
      [nzFooter]="modalFooter"
      (nzOnCancel)="handleCancel()"
    >
      <ng-template #modalTitle>
        Custom Modal Title
      </ng-template>

      <ng-template #modalContent>
        <p>Modal Content</p>
        <p>Modal Content</p>
        <p>Modal Content</p>
        <p>Modal Content</p>
        <p>Modal Content</p>
      </ng-template>

      <ng-template #modalFooter>
        <span>Modal Footer: </span>
        <button nz-button nzType="default" (click)="handleCancel()">Custom Callback</button>
        <button nz-button nzType="primary" (click)="handleOk()" [nzLoading]="isConfirmLoading">Custom Submit</button>
      </ng-template>
    </nz-modal>
  `
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./site/doc/app/modal/footer2.ts":
/*!***************************************!*\
  !*** ./site/doc/app/modal/footer2.ts ***!
  \***************************************/
/*! exports provided: NzDemoModalFooter2Component, NzModalCustomFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoModalFooter2Component", function() { return NzDemoModalFooter2Component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzModalCustomFooterComponent", function() { return NzModalCustomFooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/modal */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-modal.js");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/button */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-button.js");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-wave.js");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-transition-patch.js");
/* declarations: NzModalCustomFooterComponent */







function NzDemoModalFooter2Component_div_20_Template(rf, ctx) { if (rf & 1) {
    const _r380 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Modal Footer: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoModalFooter2Component_div_20_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r380); const ctx_r379 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r379.handleCancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Custom Callback");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoModalFooter2Component_div_20_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r380); const ctx_r381 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r381.handleOk(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Custom Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r378 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzLoading", ctx_r378.isConfirmLoading);
} }
function NzModalCustomFooterComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r384 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzModalCustomFooterComponent_div_11_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r384); const ctx_r383 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r383.destroyModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Custom Callback");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzModalCustomFooterComponent_div_11_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r384); const ctx_r385 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r385.destroyModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Custom Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class NzDemoModalFooter2Component {
    constructor(modalService) {
        this.modalService = modalService;
        this.isVisible = false;
        this.isConfirmLoading = false;
    }
    showModal1() {
        this.isVisible = true;
    }
    showModal2() {
        this.modalService.create({
            nzTitle: 'Modal Title',
            nzContent: NzModalCustomFooterComponent
        });
    }
    handleOk() {
        this.isConfirmLoading = true;
        setTimeout(() => {
            this.isVisible = false;
            this.isConfirmLoading = false;
        }, 3000);
    }
    handleCancel() {
        this.isVisible = false;
    }
}
/** @nocollapse */ NzDemoModalFooter2Component.ɵfac = function NzDemoModalFooter2Component_Factory(t) { return new (t || NzDemoModalFooter2Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_1__["NzModalService"])); };
/** @nocollapse */ NzDemoModalFooter2Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoModalFooter2Component, selectors: [["nz-demo-modal-footer2"]], decls: 21, vars: 1, consts: [["nz-button", "", "nzType", "primary", 3, "click"], ["nzTitle", "Custom Modal Title", 3, "nzVisible", "nzVisibleChange", "nzOnCancel"], [4, "nzModalFooter"], ["nz-button", "", "nzType", "default", 3, "click"], ["nz-button", "", "nzType", "primary", 3, "nzLoading", "click"]], template: function NzDemoModalFooter2Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoModalFooter2Component_Template_button_click_0_listener() { return ctx.showModal1(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "In Template");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoModalFooter2Component_Template_button_click_5_listener() { return ctx.showModal2(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "In Component");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nz-modal", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzVisibleChange", function NzDemoModalFooter2Component_Template_nz_modal_nzVisibleChange_8_listener($event) { return ctx.isVisible = $event; })("nzOnCancel", function NzDemoModalFooter2Component_Template_nz_modal_nzOnCancel_8_listener() { return ctx.handleCancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Modal Content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Modal Content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Modal Content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Modal Content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Modal Content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, NzDemoModalFooter2Component_div_20_Template, 7, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzVisible", ctx.isVisible);
    } }, directives: [ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_3__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__["ɵNzTransitionPatchDirective"], ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_1__["NzModalComponent"], ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_1__["NzModalFooterDirective"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoModalFooter2Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-demo-modal-footer2',
                template: `
    <button nz-button nzType="primary" (click)="showModal1()">
      <span>In Template</span>
    </button>
    <br />
    <br />
    <button nz-button nzType="primary" (click)="showModal2()">
      <span>In Component</span>
    </button>
    <nz-modal [(nzVisible)]="isVisible" nzTitle="Custom Modal Title" (nzOnCancel)="handleCancel()">
      <div>
        <p>Modal Content</p>
        <p>Modal Content</p>
        <p>Modal Content</p>
        <p>Modal Content</p>
        <p>Modal Content</p>
      </div>
      <div *nzModalFooter>
        <span>Modal Footer: </span>
        <button nz-button nzType="default" (click)="handleCancel()">Custom Callback</button>
        <button nz-button nzType="primary" (click)="handleOk()" [nzLoading]="isConfirmLoading">Custom Submit</button>
      </div>
    </nz-modal>
  `,
                styles: []
            }]
    }], function () { return [{ type: ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_1__["NzModalService"] }]; }, null); })();
class NzModalCustomFooterComponent {
    constructor(modal) {
        this.modal = modal;
    }
    destroyModal() {
        this.modal.destroy();
    }
}
/** @nocollapse */ NzModalCustomFooterComponent.ɵfac = function NzModalCustomFooterComponent_Factory(t) { return new (t || NzModalCustomFooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_1__["NzModalRef"])); };
/** @nocollapse */ NzModalCustomFooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzModalCustomFooterComponent, selectors: [["nz-modal-custom-footer-component"]], decls: 12, vars: 0, consts: [[4, "nzModalFooter"], ["nz-button", "", "nzType", "default", 3, "click"], ["nz-button", "", "nzType", "primary", 3, "click"]], template: function NzModalCustomFooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Modal Content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Modal Content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Modal Content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Modal Content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Modal Content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, NzModalCustomFooterComponent_div_11_Template, 5, 0, "div", 0);
    } }, directives: [ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_1__["NzModalFooterDirective"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_3__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__["ɵNzTransitionPatchDirective"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzModalCustomFooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-modal-custom-footer-component',
                template: `
    <div>
      <p>Modal Content</p>
      <p>Modal Content</p>
      <p>Modal Content</p>
      <p>Modal Content</p>
      <p>Modal Content</p>
    </div>
    <div *nzModalFooter>
      <button nz-button nzType="default" (click)="destroyModal()">Custom Callback</button>
      <button nz-button nzType="primary" (click)="destroyModal()">Custom Submit</button>
    </div>
  `
            }]
    }], function () { return [{ type: ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_1__["NzModalRef"] }]; }, null); })();


/***/ }),

/***/ "./site/doc/app/modal/index.module.ts":
/*!********************************************!*\
  !*** ./site/doc/app/modal/index.module.ts ***!
  \********************************************/
/*! exports provided: NzDemoModalModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoModalModule", function() { return NzDemoModalModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _share_share_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../share/share.module */ "./site/doc/app/share/share.module.ts");
/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./module */ "./site/doc/app/modal/module.ts");
/* harmony import */ var _async__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./async */ "./site/doc/app/modal/async.ts");
/* harmony import */ var _basic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./basic */ "./site/doc/app/modal/basic.ts");
/* harmony import */ var _confirm_promise__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./confirm-promise */ "./site/doc/app/modal/confirm-promise.ts");
/* harmony import */ var _confirm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./confirm */ "./site/doc/app/modal/confirm.ts");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./footer */ "./site/doc/app/modal/footer.ts");
/* harmony import */ var _footer2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./footer2 */ "./site/doc/app/modal/footer2.ts");
/* harmony import */ var _info__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./info */ "./site/doc/app/modal/info.ts");
/* harmony import */ var _locale__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./locale */ "./site/doc/app/modal/locale.ts");
/* harmony import */ var _manual__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./manual */ "./site/doc/app/modal/manual.ts");
/* harmony import */ var _position__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./position */ "./site/doc/app/modal/position.ts");
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./service */ "./site/doc/app/modal/service.ts");
/* harmony import */ var _zh_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./zh.component */ "./site/doc/app/modal/zh.component.ts");
/* harmony import */ var _en_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./en.component */ "./site/doc/app/modal/en.component.ts");
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/modal */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-modal.js");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/button */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-button.js");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/icon */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-icon.js");






















class NzDemoModalModule {
}
/** @nocollapse */ NzDemoModalModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NzDemoModalModule });
/** @nocollapse */ NzDemoModalModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NzDemoModalModule_Factory(t) { return new (t || NzDemoModalModule)(); }, imports: [[
            _share_share_module__WEBPACK_IMPORTED_MODULE_2__["ShareModule"],
            ..._module__WEBPACK_IMPORTED_MODULE_3__["moduleList"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                { path: 'en', component: _en_component__WEBPACK_IMPORTED_MODULE_16__["NzDemoModalEnComponent"] },
                { path: 'zh', component: _zh_component__WEBPACK_IMPORTED_MODULE_15__["NzDemoModalZhComponent"] }
            ])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NzDemoModalModule, { declarations: [_async__WEBPACK_IMPORTED_MODULE_4__["NzDemoModalAsyncComponent"],
        _basic__WEBPACK_IMPORTED_MODULE_5__["NzDemoModalBasicComponent"],
        _confirm_promise__WEBPACK_IMPORTED_MODULE_6__["NzDemoModalConfirmPromiseComponent"],
        _confirm__WEBPACK_IMPORTED_MODULE_7__["NzDemoModalConfirmComponent"],
        _footer__WEBPACK_IMPORTED_MODULE_8__["NzDemoModalFooterComponent"],
        _footer2__WEBPACK_IMPORTED_MODULE_9__["NzDemoModalFooter2Component"],
        _footer2__WEBPACK_IMPORTED_MODULE_9__["NzModalCustomFooterComponent"],
        _info__WEBPACK_IMPORTED_MODULE_10__["NzDemoModalInfoComponent"],
        _locale__WEBPACK_IMPORTED_MODULE_11__["NzDemoModalLocaleComponent"],
        _manual__WEBPACK_IMPORTED_MODULE_12__["NzDemoModalManualComponent"],
        _position__WEBPACK_IMPORTED_MODULE_13__["NzDemoModalPositionComponent"],
        _service__WEBPACK_IMPORTED_MODULE_14__["NzDemoModalServiceComponent"],
        _service__WEBPACK_IMPORTED_MODULE_14__["NzModalCustomComponent"],
        _zh_component__WEBPACK_IMPORTED_MODULE_15__["NzDemoModalZhComponent"],
        _en_component__WEBPACK_IMPORTED_MODULE_16__["NzDemoModalEnComponent"]], imports: [_share_share_module__WEBPACK_IMPORTED_MODULE_2__["ShareModule"], ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_17__["NzModalModule"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_18__["NzButtonModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_19__["NzIconModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoModalModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _share_share_module__WEBPACK_IMPORTED_MODULE_2__["ShareModule"],
                    ..._module__WEBPACK_IMPORTED_MODULE_3__["moduleList"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                        { path: 'en', component: _en_component__WEBPACK_IMPORTED_MODULE_16__["NzDemoModalEnComponent"] },
                        { path: 'zh', component: _zh_component__WEBPACK_IMPORTED_MODULE_15__["NzDemoModalZhComponent"] }
                    ])
                ],
                declarations: [
                    _async__WEBPACK_IMPORTED_MODULE_4__["NzDemoModalAsyncComponent"],
                    _basic__WEBPACK_IMPORTED_MODULE_5__["NzDemoModalBasicComponent"],
                    _confirm_promise__WEBPACK_IMPORTED_MODULE_6__["NzDemoModalConfirmPromiseComponent"],
                    _confirm__WEBPACK_IMPORTED_MODULE_7__["NzDemoModalConfirmComponent"],
                    _footer__WEBPACK_IMPORTED_MODULE_8__["NzDemoModalFooterComponent"],
                    _footer2__WEBPACK_IMPORTED_MODULE_9__["NzDemoModalFooter2Component"],
                    _footer2__WEBPACK_IMPORTED_MODULE_9__["NzModalCustomFooterComponent"],
                    _info__WEBPACK_IMPORTED_MODULE_10__["NzDemoModalInfoComponent"],
                    _locale__WEBPACK_IMPORTED_MODULE_11__["NzDemoModalLocaleComponent"],
                    _manual__WEBPACK_IMPORTED_MODULE_12__["NzDemoModalManualComponent"],
                    _position__WEBPACK_IMPORTED_MODULE_13__["NzDemoModalPositionComponent"],
                    _service__WEBPACK_IMPORTED_MODULE_14__["NzDemoModalServiceComponent"],
                    _service__WEBPACK_IMPORTED_MODULE_14__["NzModalCustomComponent"],
                    _zh_component__WEBPACK_IMPORTED_MODULE_15__["NzDemoModalZhComponent"],
                    _en_component__WEBPACK_IMPORTED_MODULE_16__["NzDemoModalEnComponent"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./site/doc/app/modal/info.ts":
/*!************************************!*\
  !*** ./site/doc/app/modal/info.ts ***!
  \************************************/
/*! exports provided: NzDemoModalInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoModalInfoComponent", function() { return NzDemoModalInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/modal */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-modal.js");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/button */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-button.js");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-wave.js");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-transition-patch.js");







class NzDemoModalInfoComponent {
    constructor(modal) {
        this.modal = modal;
    }
    info() {
        this.modal.info({
            nzTitle: 'This is a notification message',
            nzContent: '<p>some messages...some messages...</p><p>some messages...some messages...</p>',
            nzOnOk: () => console.log('Info OK')
        });
    }
    success() {
        this.modal.success({
            nzTitle: 'This is a success message',
            nzContent: 'some messages...some messages...'
        });
    }
    error() {
        this.modal.error({
            nzTitle: 'This is an error message',
            nzContent: 'some messages...some messages...'
        });
    }
    warning() {
        this.modal.warning({
            nzTitle: 'This is an warning message',
            nzContent: 'some messages...some messages...'
        });
    }
}
/** @nocollapse */ NzDemoModalInfoComponent.ɵfac = function NzDemoModalInfoComponent_Factory(t) { return new (t || NzDemoModalInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_1__["NzModalService"])); };
/** @nocollapse */ NzDemoModalInfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoModalInfoComponent, selectors: [["nz-demo-modal-info"]], decls: 8, vars: 0, consts: [["nz-button", "", 3, "click"]], template: function NzDemoModalInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoModalInfoComponent_Template_button_click_0_listener() { return ctx.info(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoModalInfoComponent_Template_button_click_2_listener() { return ctx.success(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Success");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoModalInfoComponent_Template_button_click_4_listener() { return ctx.error(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoModalInfoComponent_Template_button_click_6_listener() { return ctx.warning(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Warning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_3__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__["ɵNzTransitionPatchDirective"]], styles: ["button[_ngcontent-%COMP%] {\n        margin-right: 8px;\n      }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoModalInfoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-demo-modal-info',
                template: `
    <button nz-button (click)="info()">Info</button>
    <button nz-button (click)="success()">Success</button>
    <button nz-button (click)="error()">Error</button>
    <button nz-button (click)="warning()">Warning</button>
  `,
                styles: [
                    `
      button {
        margin-right: 8px;
      }
    `
                ]
            }]
    }], function () { return [{ type: ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_1__["NzModalService"] }]; }, null); })();


/***/ }),

/***/ "./site/doc/app/modal/locale.ts":
/*!**************************************!*\
  !*** ./site/doc/app/modal/locale.ts ***!
  \**************************************/
/*! exports provided: NzDemoModalLocaleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoModalLocaleComponent", function() { return NzDemoModalLocaleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/modal */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-modal.js");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/button */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-button.js");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-wave.js");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-transition-patch.js");







class NzDemoModalLocaleComponent {
    constructor(modalService) {
        this.modalService = modalService;
        this.isVisible = false;
    }
    showModal() {
        this.isVisible = true;
    }
    handleOk() {
        this.isVisible = false;
    }
    handleCancel() {
        this.isVisible = false;
    }
    showConfirm() {
        this.modalService.confirm({
            nzTitle: 'Confirm',
            nzContent: 'Bla bla ...',
            nzOkText: 'OK',
            nzCancelText: 'Cancel'
        });
    }
}
/** @nocollapse */ NzDemoModalLocaleComponent.ɵfac = function NzDemoModalLocaleComponent_Factory(t) { return new (t || NzDemoModalLocaleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_1__["NzModalService"])); };
/** @nocollapse */ NzDemoModalLocaleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoModalLocaleComponent, selectors: [["nz-demo-modal-locale"]], decls: 13, vars: 1, consts: [["nz-button", "", "nzType", "primary", 3, "click"], ["nzTitle", "Modal", "nzOkText", "Ok", "nzCancelText", "Cancel", 3, "nzVisible", "nzVisibleChange", "nzOnOk", "nzOnCancel"], ["nz-button", "", "nzType", "info", 3, "click"]], template: function NzDemoModalLocaleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoModalLocaleComponent_Template_button_click_1_listener() { return ctx.showModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Modal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nz-modal", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzVisibleChange", function NzDemoModalLocaleComponent_Template_nz_modal_nzVisibleChange_3_listener($event) { return ctx.isVisible = $event; })("nzOnOk", function NzDemoModalLocaleComponent_Template_nz_modal_nzOnOk_3_listener() { return ctx.handleOk(); })("nzOnCancel", function NzDemoModalLocaleComponent_Template_nz_modal_nzOnCancel_3_listener() { return ctx.handleCancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Bla bla ...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Bla bla ...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Bla bla ...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoModalLocaleComponent_Template_button_click_11_listener() { return ctx.showConfirm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Confirm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzVisible", ctx.isVisible);
    } }, directives: [ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_3__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__["ɵNzTransitionPatchDirective"], ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_1__["NzModalComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoModalLocaleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-demo-modal-locale',
                template: `
    <div>
      <button nz-button nzType="primary" (click)="showModal()">Modal</button>
      <nz-modal
        [(nzVisible)]="isVisible"
        nzTitle="Modal"
        nzOkText="Ok"
        nzCancelText="Cancel"
        (nzOnOk)="handleOk()"
        (nzOnCancel)="handleCancel()"
      >
        <p>Bla bla ...</p>
        <p>Bla bla ...</p>
        <p>Bla bla ...</p>
      </nz-modal>
    </div>
    <br />
    <button nz-button nzType="info" (click)="showConfirm()">Confirm</button>
  `
            }]
    }], function () { return [{ type: ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_1__["NzModalService"] }]; }, null); })();


/***/ }),

/***/ "./site/doc/app/modal/manual.ts":
/*!**************************************!*\
  !*** ./site/doc/app/modal/manual.ts ***!
  \**************************************/
/*! exports provided: NzDemoModalManualComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoModalManualComponent", function() { return NzDemoModalManualComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/modal */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-modal.js");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/button */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-button.js");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-wave.js");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-transition-patch.js");







class NzDemoModalManualComponent {
    constructor(modalService) {
        this.modalService = modalService;
    }
    success() {
        const modal = this.modalService.success({
            nzTitle: 'This is a notification message',
            nzContent: 'This modal will be destroyed after 1 second'
        });
        setTimeout(() => modal.destroy(), 1000);
    }
}
/** @nocollapse */ NzDemoModalManualComponent.ɵfac = function NzDemoModalManualComponent_Factory(t) { return new (t || NzDemoModalManualComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_1__["NzModalService"])); };
/** @nocollapse */ NzDemoModalManualComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoModalManualComponent, selectors: [["nz-demo-modal-manual"]], decls: 2, vars: 0, consts: [["nz-button", "", 3, "click"]], template: function NzDemoModalManualComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoModalManualComponent_Template_button_click_0_listener() { return ctx.success(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Success");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_3__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__["ɵNzTransitionPatchDirective"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoModalManualComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-demo-modal-manual',
                template: `
    <button nz-button (click)="success()">Success</button>
  `
            }]
    }], function () { return [{ type: ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_1__["NzModalService"] }]; }, null); })();


/***/ }),

/***/ "./site/doc/app/modal/module.ts":
/*!**************************************!*\
  !*** ./site/doc/app/modal/module.ts ***!
  \**************************************/
/*! exports provided: moduleList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moduleList", function() { return moduleList; });
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng-zorro-antd/modal */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-modal.js");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/button */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-button.js");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/icon */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-icon.js");



const moduleList = [ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_0__["NzModalModule"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_1__["NzButtonModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_2__["NzIconModule"]];


/***/ }),

/***/ "./site/doc/app/modal/position.ts":
/*!****************************************!*\
  !*** ./site/doc/app/modal/position.ts ***!
  \****************************************/
/*! exports provided: NzDemoModalPositionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoModalPositionComponent", function() { return NzDemoModalPositionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/button */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-button.js");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-wave.js");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-transition-patch.js");
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/modal */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-modal.js");






const _c0 = function () { return { top: "20px" }; };
class NzDemoModalPositionComponent {
    constructor() {
        this.isVisibleTop = false;
        this.isVisibleMiddle = false;
    }
    showModalTop() {
        this.isVisibleTop = true;
    }
    showModalMiddle() {
        this.isVisibleMiddle = true;
    }
    handleOkTop() {
        console.log('点击了确定');
        this.isVisibleTop = false;
    }
    handleCancelTop() {
        this.isVisibleTop = false;
    }
    handleOkMiddle() {
        console.log('click ok');
        this.isVisibleMiddle = false;
    }
    handleCancelMiddle() {
        this.isVisibleMiddle = false;
    }
}
/** @nocollapse */ NzDemoModalPositionComponent.ɵfac = function NzDemoModalPositionComponent_Factory(t) { return new (t || NzDemoModalPositionComponent)(); };
/** @nocollapse */ NzDemoModalPositionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoModalPositionComponent, selectors: [["nz-demo-modal-position"]], decls: 20, vars: 4, consts: [["nz-button", "", "nzType", "primary", 3, "click"], ["nzTitle", "20px to Top", 3, "nzStyle", "nzVisible", "nzVisibleChange", "nzOnCancel", "nzOnOk"], ["nzWrapClassName", "vertical-center-modal", "nzTitle", "Vertically centered modal dialog", 3, "nzVisible", "nzVisibleChange", "nzOnCancel", "nzOnOk"]], template: function NzDemoModalPositionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoModalPositionComponent_Template_button_click_0_listener() { return ctx.showModalTop(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Display a modal dialog at 20px to Top");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nz-modal", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzVisibleChange", function NzDemoModalPositionComponent_Template_nz_modal_nzVisibleChange_2_listener($event) { return ctx.isVisibleTop = $event; })("nzOnCancel", function NzDemoModalPositionComponent_Template_nz_modal_nzOnCancel_2_listener() { return ctx.handleCancelTop(); })("nzOnOk", function NzDemoModalPositionComponent_Template_nz_modal_nzOnOk_2_listener() { return ctx.handleOkTop(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "some contents...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "some contents...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "some contents...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoModalPositionComponent_Template_button_click_11_listener() { return ctx.showModalMiddle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Vertically centered modal dialog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "nz-modal", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzVisibleChange", function NzDemoModalPositionComponent_Template_nz_modal_nzVisibleChange_13_listener($event) { return ctx.isVisibleMiddle = $event; })("nzOnCancel", function NzDemoModalPositionComponent_Template_nz_modal_nzOnCancel_13_listener() { return ctx.handleCancelMiddle(); })("nzOnOk", function NzDemoModalPositionComponent_Template_nz_modal_nzOnOk_13_listener() { return ctx.handleOkMiddle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "some contents...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "some contents...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "some contents...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0))("nzVisible", ctx.isVisibleTop);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzVisible", ctx.isVisibleMiddle);
    } }, directives: [ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_1__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_2__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_3__["ɵNzTransitionPatchDirective"], ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_4__["NzModalComponent"]], styles: [".vertical-center-modal {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n      }\n\n        .vertical-center-modal .ant-modal {\n        top: 0;\n      }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoModalPositionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-demo-modal-position',
                template: `
    <button nz-button nzType="primary" (click)="showModalTop()">Display a modal dialog at 20px to Top</button>
    <nz-modal
      [nzStyle]="{ top: '20px' }"
      [(nzVisible)]="isVisibleTop"
      nzTitle="20px to Top"
      (nzOnCancel)="handleCancelTop()"
      (nzOnOk)="handleOkTop()"
    >
      <p>some contents...</p>
      <p>some contents...</p>
      <p>some contents...</p>
    </nz-modal>

    <br /><br />

    <button nz-button nzType="primary" (click)="showModalMiddle()">Vertically centered modal dialog</button>
    <nz-modal
      nzWrapClassName="vertical-center-modal"
      [(nzVisible)]="isVisibleMiddle"
      nzTitle="Vertically centered modal dialog"
      (nzOnCancel)="handleCancelMiddle()"
      (nzOnOk)="handleOkMiddle()"
    >
      <p>some contents...</p>
      <p>some contents...</p>
      <p>some contents...</p>
    </nz-modal>
  `,
                styles: [
                    `
      ::ng-deep .vertical-center-modal {
        display: flex;
        align-items: center;
        justify-content: center;
      }

      ::ng-deep .vertical-center-modal .ant-modal {
        top: 0;
      }
    `
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./site/doc/app/modal/service.ts":
/*!***************************************!*\
  !*** ./site/doc/app/modal/service.ts ***!
  \***************************************/
/*! exports provided: NzDemoModalServiceComponent, NzModalCustomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoModalServiceComponent", function() { return NzDemoModalServiceComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzModalCustomComponent", function() { return NzModalCustomComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/modal */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-modal.js");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/button */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-button.js");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-wave.js");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-transition-patch.js");
/* declarations: NzModalCustomComponent */







function NzDemoModalServiceComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Title Template");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NzDemoModalServiceComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "some contents...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "some contents...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoModalServiceComponent_ng_template_8_Template_button_click_6_listener() { const ref_r393 = ctx.modalRef; return ref_r393.destroy(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Destroy");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const params_r392 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](params_r392.value);
} }
function NzDemoModalServiceComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    const _r396 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoModalServiceComponent_ng_template_10_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r396); const ctx_r395 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r395.destroyTplModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Close after submit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r391 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzLoading", ctx_r391.tplModalButtonLoading);
} }
class NzDemoModalServiceComponent {
    constructor(modal) {
        this.modal = modal;
        this.tplModalButtonLoading = false;
        this.htmlModalVisible = false;
        this.disabled = false;
    }
    createModal() {
        this.modal.create({
            nzTitle: 'Modal Title',
            nzContent: 'string, will close after 1 sec',
            nzClosable: false,
            nzOnOk: () => new Promise(resolve => setTimeout(resolve, 1000))
        });
    }
    createTplModal(tplTitle, tplContent, tplFooter) {
        this.tplModal = this.modal.create({
            nzTitle: tplTitle,
            nzContent: tplContent,
            nzFooter: tplFooter,
            nzMaskClosable: false,
            nzClosable: false,
            nzComponentParams: {
                value: 'Template Context'
            },
            nzOnOk: () => console.log('Click ok')
        });
    }
    destroyTplModal() {
        this.tplModalButtonLoading = true;
        setTimeout(() => {
            this.tplModalButtonLoading = false;
            this.tplModal.destroy();
        }, 1000);
    }
    createComponentModal() {
        const modal = this.modal.create({
            nzTitle: 'Modal Title',
            nzContent: NzModalCustomComponent,
            nzGetContainer: () => document.body,
            nzComponentParams: {
                title: 'title in component',
                subtitle: 'component sub title，will be changed after 2 sec'
            },
            nzOnOk: () => new Promise(resolve => setTimeout(resolve, 1000)),
            nzFooter: [
                {
                    label: 'change component title from outside',
                    onClick: componentInstance => {
                        componentInstance.title = 'title in inner component is changed';
                    }
                }
            ]
        });
        const instance = modal.getContentComponent();
        modal.afterOpen.subscribe(() => console.log('[afterOpen] emitted!'));
        // Return a result when closed
        modal.afterClose.subscribe(result => console.log('[afterClose] The result is:', result));
        // delay until modal instance created
        setTimeout(() => {
            instance.subtitle = 'sub title is changed';
        }, 2000);
    }
    createCustomButtonModal() {
        const modal = this.modal.create({
            nzTitle: 'custom button demo',
            nzContent: 'pass array of button config to nzFooter to create multiple buttons',
            nzFooter: [
                {
                    label: 'Close',
                    shape: 'round',
                    onClick: () => modal.destroy()
                },
                {
                    label: 'Confirm',
                    type: 'primary',
                    onClick: () => this.modal.confirm({ nzTitle: 'Confirm Modal Title', nzContent: 'Confirm Modal Content' })
                },
                {
                    label: 'Change Button Status',
                    type: 'danger',
                    loading: false,
                    onClick() {
                        this.loading = true;
                        setTimeout(() => (this.loading = false), 1000);
                        setTimeout(() => {
                            this.loading = false;
                            this.disabled = true;
                            this.label = 'can not be clicked！';
                        }, 2000);
                    }
                },
                {
                    label: 'async load',
                    type: 'dashed',
                    onClick: () => new Promise(resolve => setTimeout(resolve, 2000))
                }
            ]
        });
    }
    openAndCloseAll() {
        let pos = 0;
        ['create', 'info', 'success', 'error'].forEach(method => 
        // @ts-ignore
        this.modal[method]({
            nzMask: false,
            nzTitle: `Test ${method} title`,
            nzContent: `Test content: <b>${method}</b>`,
            nzStyle: { position: 'absolute', top: `${pos * 70}px`, left: `${pos++ * 300}px` }
        }));
        this.htmlModalVisible = true;
        this.modal.afterAllClose.subscribe(() => console.log('afterAllClose emitted!'));
        setTimeout(() => this.modal.closeAll(), 2000);
    }
}
/** @nocollapse */ NzDemoModalServiceComponent.ɵfac = function NzDemoModalServiceComponent_Factory(t) { return new (t || NzDemoModalServiceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_1__["NzModalService"])); };
/** @nocollapse */ NzDemoModalServiceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoModalServiceComponent, selectors: [["nz-demo-modal-service"]], decls: 25, vars: 1, consts: [["nz-button", "", "nzType", "primary", 3, "click"], ["tplTitle", ""], ["tplContent", ""], ["tplFooter", ""], ["nzMask", "false", "nzZIndex", "1001", "nzTitle", "Non-service html modal", 3, "nzVisible", "nzVisibleChange"], ["nz-button", "", 3, "click"], ["nz-button", "", "nzType", "primary", 3, "nzLoading", "click"]], template: function NzDemoModalServiceComponent_Template(rf, ctx) { if (rf & 1) {
        const _r397 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoModalServiceComponent_Template_button_click_0_listener() { return ctx.createModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "String");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoModalServiceComponent_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r397); const _r386 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7); const _r388 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9); const _r390 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11); return ctx.createTplModal(_r386, _r388, _r390); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Template");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NzDemoModalServiceComponent_ng_template_6_Template, 2, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NzDemoModalServiceComponent_ng_template_8_Template, 8, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, NzDemoModalServiceComponent_ng_template_10_Template, 2, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoModalServiceComponent_Template_button_click_14_listener() { return ctx.createComponentModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Use Component");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoModalServiceComponent_Template_button_click_17_listener() { return ctx.createCustomButtonModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Custom Button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoModalServiceComponent_Template_button_click_21_listener() { return ctx.openAndCloseAll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Open more modals then close all after 2s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "nz-modal", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzVisibleChange", function NzDemoModalServiceComponent_Template_nz_modal_nzVisibleChange_23_listener($event) { return ctx.htmlModalVisible = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "This is a non-service html modal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzVisible", ctx.htmlModalVisible);
    } }, directives: [ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_3__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__["ɵNzTransitionPatchDirective"], ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_1__["NzModalComponent"]], styles: ["button[_ngcontent-%COMP%] {\n        margin-right: 8px;\n      }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoModalServiceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-demo-modal-service',
                template: `
    <button nz-button nzType="primary" (click)="createModal()">
      <span>String</span>
    </button>

    <button nz-button nzType="primary" (click)="createTplModal(tplTitle, tplContent, tplFooter)">
      <span>Template</span>
    </button>
    <ng-template #tplTitle>
      <span>Title Template</span>
    </ng-template>
    <ng-template #tplContent let-params let-ref="modalRef">
      <p>some contents...</p>
      <p>some contents...</p>
      <p>{{ params.value }}</p>
      <button nz-button (click)="ref.destroy()">Destroy</button>
    </ng-template>
    <ng-template #tplFooter>
      <button nz-button nzType="primary" (click)="destroyTplModal()" [nzLoading]="tplModalButtonLoading">
        Close after submit
      </button>
    </ng-template>

    <br /><br />

    <button nz-button nzType="primary" (click)="createComponentModal()">
      <span>Use Component</span>
    </button>

    <button nz-button nzType="primary" (click)="createCustomButtonModal()">Custom Button</button>

    <br /><br />

    <button nz-button nzType="primary" (click)="openAndCloseAll()">Open more modals then close all after 2s</button>
    <nz-modal [(nzVisible)]="htmlModalVisible" nzMask="false" nzZIndex="1001" nzTitle="Non-service html modal"
      >This is a non-service html modal</nz-modal
    >
  `,
                styles: [
                    `
      button {
        margin-right: 8px;
      }
    `
                ]
            }]
    }], function () { return [{ type: ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_1__["NzModalService"] }]; }, null); })();
class NzModalCustomComponent {
    constructor(modal) {
        this.modal = modal;
    }
    destroyModal() {
        this.modal.destroy({ data: 'this the result data' });
    }
}
/** @nocollapse */ NzModalCustomComponent.ɵfac = function NzModalCustomComponent_Factory(t) { return new (t || NzModalCustomComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_1__["NzModalRef"])); };
/** @nocollapse */ NzModalCustomComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzModalCustomComponent, selectors: [["nz-modal-custom-component"]], inputs: { title: "title", subtitle: "subtitle" }, decls: 10, vars: 3, consts: [["nz-button", "", 3, "nzType", "click"]], template: function NzModalCustomComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Get Modal instance in component");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzModalCustomComponent_Template_button_click_8_listener() { return ctx.destroyModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "destroy modal in the component");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.subtitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", "primary");
    } }, directives: [ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_3__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__["ɵNzTransitionPatchDirective"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzModalCustomComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-modal-custom-component',
                template: `
    <div>
      <h2>{{ title }}</h2>
      <h4>{{ subtitle }}</h4>
      <p>
        <span>Get Modal instance in component</span>
        <button nz-button [nzType]="'primary'" (click)="destroyModal()">destroy modal in the component</button>
      </p>
    </div>
  `
            }]
    }], function () { return [{ type: ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_1__["NzModalRef"] }]; }, { title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], subtitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./site/doc/app/modal/zh.component.ts":
/*!********************************************!*\
  !*** ./site/doc/app/modal/zh.component.ts ***!
  \********************************************/
/*! exports provided: NzDemoModalZhComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoModalZhComponent", function() { return NzDemoModalZhComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _share_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../share/codebox/codebox.component */ "./site/doc/app/share/codebox/codebox.component.ts");
/* harmony import */ var ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/affix */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-affix.js");
/* harmony import */ var ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/anchor */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-anchor.js");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-transition-patch.js");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/icon */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-icon.js");
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-tooltip.js");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/grid */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-grid.js");
/* harmony import */ var _basic__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./basic */ "./site/doc/app/modal/basic.ts");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./footer */ "./site/doc/app/modal/footer.ts");
/* harmony import */ var _confirm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./confirm */ "./site/doc/app/modal/confirm.ts");
/* harmony import */ var _info__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./info */ "./site/doc/app/modal/info.ts");
/* harmony import */ var _manual__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./manual */ "./site/doc/app/modal/manual.ts");
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./service */ "./site/doc/app/modal/service.ts");
/* harmony import */ var _async__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./async */ "./site/doc/app/modal/async.ts");
/* harmony import */ var _footer2__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./footer2 */ "./site/doc/app/modal/footer2.ts");
/* harmony import */ var _confirm_promise__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./confirm-promise */ "./site/doc/app/modal/confirm-promise.ts");
/* harmony import */ var _locale__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./locale */ "./site/doc/app/modal/locale.ts");
/* harmony import */ var _position__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./position */ "./site/doc/app/modal/position.ts");





















class NzDemoModalZhComponent {
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
/** @nocollapse */ NzDemoModalZhComponent.ɵfac = function NzDemoModalZhComponent_Factory(t) { return new (t || NzDemoModalZhComponent)(); };
/** @nocollapse */ NzDemoModalZhComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoModalZhComponent, selectors: [["nz-demo-modal"]], viewQuery: function NzDemoModalZhComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_share_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_1__["NzCodeBoxComponent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.codeBoxes = _t);
    } }, decls: 1457, vars: 40, consts: [[1, "toc-affix", 3, "nzOffsetTop"], ["nzShowInkInFixed", "", 3, "nzAffix", "nzClick"], ["nzHref", "#components-modal-demo-basic", "nzTitle", "\u57FA\u672C"], ["nzHref", "#components-modal-demo-async", "nzTitle", "\u5F02\u6B65\u5173\u95ED"], ["nzHref", "#components-modal-demo-footer", "nzTitle", "\u81EA\u5B9A\u4E49\u9875\u811A"], ["nzHref", "#components-modal-demo-footer2", "nzTitle", "\u81EA\u5B9A\u4E49\u9875\u811A(2)"], ["nzHref", "#components-modal-demo-confirm", "nzTitle", "\u786E\u8BA4\u5BF9\u8BDD\u6846"], ["nzHref", "#components-modal-demo-confirm-promise", "nzTitle", "\u786E\u8BA4\u5BF9\u8BDD\u6846"], ["nzHref", "#components-modal-demo-info", "nzTitle", "\u4FE1\u606F\u63D0\u793A"], ["nzHref", "#components-modal-demo-locale", "nzTitle", "\u56FD\u9645\u5316"], ["nzHref", "#components-modal-demo-manual", "nzTitle", "\u624B\u52A8\u79FB\u9664"], ["nzHref", "#components-modal-demo-position", "nzTitle", "\u81EA\u5B9A\u4E49\u4F4D\u7F6E"], ["nzHref", "#components-modal-demo-service", "nzTitle", "\u670D\u52A1\u65B9\u5F0F\u521B\u5EFA"], ["nzHref", "#api", "nzTitle", "API"], [1, "markdown"], [1, "subtitle"], [1, "widget"], ["href", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/modal/doc/index.zh-CN.md", "target", "_blank", "rel", "noopener noreferrer", 1, "edit-button"], ["nz-icon", "", "nzType", "edit"], ["id", "\u4F55\u65F6\u4F7F\u7528"], ["onclick", "window.location.hash = '\u4F55\u65F6\u4F7F\u7528'", 1, "anchor"], [1, "language-ts"], [1, "token", "keyword"], [1, "token", "punctuation"], [1, "token", "string"], ["nz-icon", "", "nzType", "appstore", "nz-tooltip", "", "nzTooltipTitle", "\u5C55\u5F00\u5168\u90E8\u4EE3\u7801", 1, "code-box-expand-trigger", 3, "click"], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", 3, "nzXl", "nzSpan"], ["nzTitle", "\u57FA\u672C", "nzSelector", "nz-demo-modal-basic", "nzGenerateCommand", "ng g ng-zorro-antd:modal-basic <name>", "nzComponentName", "NzDemoModalBasicComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["demo", ""], ["intro", ""], ["nzTitle", "\u81EA\u5B9A\u4E49\u9875\u811A", "nzSelector", "nz-demo-modal-footer", "nzGenerateCommand", "ng g ng-zorro-antd:modal-footer <name>", "nzComponentName", "NzDemoModalFooterComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u786E\u8BA4\u5BF9\u8BDD\u6846", "nzSelector", "nz-demo-modal-confirm", "nzGenerateCommand", "ng g ng-zorro-antd:modal-confirm <name>", "nzComponentName", "NzDemoModalConfirmComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u4FE1\u606F\u63D0\u793A", "nzSelector", "nz-demo-modal-info", "nzGenerateCommand", "ng g ng-zorro-antd:modal-info <name>", "nzComponentName", "NzDemoModalInfoComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u624B\u52A8\u79FB\u9664", "nzSelector", "nz-demo-modal-manual", "nzGenerateCommand", "ng g ng-zorro-antd:modal-manual <name>", "nzComponentName", "NzDemoModalManualComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u670D\u52A1\u65B9\u5F0F\u521B\u5EFA", "nzSelector", "nz-demo-modal-service", "nzGenerateCommand", "ng g ng-zorro-antd:modal-service <name>", "nzComponentName", "NzDemoModalServiceComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u5F02\u6B65\u5173\u95ED", "nzSelector", "nz-demo-modal-async", "nzGenerateCommand", "ng g ng-zorro-antd:modal-async <name>", "nzComponentName", "NzDemoModalAsyncComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u81EA\u5B9A\u4E49\u9875\u811A(2)", "nzSelector", "nz-demo-modal-footer2", "nzGenerateCommand", "ng g ng-zorro-antd:modal-footer2 <name>", "nzComponentName", "NzDemoModalFooter2Component", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u786E\u8BA4\u5BF9\u8BDD\u6846", "nzSelector", "nz-demo-modal-confirm-promise", "nzGenerateCommand", "ng g ng-zorro-antd:modal-confirm-promise <name>", "nzComponentName", "NzDemoModalConfirmPromiseComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u56FD\u9645\u5316", "nzSelector", "nz-demo-modal-locale", "nzGenerateCommand", "ng g ng-zorro-antd:modal-locale <name>", "nzComponentName", "NzDemoModalLocaleComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], ["nzTitle", "\u81EA\u5B9A\u4E49\u4F4D\u7F6E", "nzSelector", "nz-demo-modal-position", "nzGenerateCommand", "ng g ng-zorro-antd:modal-position <name>", "nzComponentName", "NzDemoModalPositionComponent", "nzIframeSource", "null", "nzIframeHeight", "null", 3, "nzId", "nzLink", "nzHref"], [1, "markdown", "api-container"], ["id", "api"], ["onclick", "window.location.hash = 'api'", 1, "anchor"], ["id", "nzmodalservice"], [1, "api-type-label", "service"], ["onclick", "window.location.hash = 'nzmodalservice'", 1, "anchor"], ["id", "\u6CE8\u610F"], ["onclick", "window.location.hash = '\u6CE8\u610F'", 1, "anchor"], ["id", "\u91C7\u7528\u670D\u52A1\u65B9\u5F0F\u521B\u5EFA\u666E\u901A\u6A21\u5F0F\u5BF9\u8BDD\u6846"], ["onclick", "window.location.hash = '\u91C7\u7528\u670D\u52A1\u65B9\u5F0F\u521B\u5EFA\u666E\u901A\u6A21\u5F0F\u5BF9\u8BDD\u6846'", 1, "anchor"], ["id", "\u786E\u8BA4\u6846\u6A21\u5F0F---nzmodalservice-method()"], ["onclick", "window.location.hash = '\u786E\u8BA4\u6846\u6A21\u5F0F---nzmodalservice-method()'", 1, "anchor"], [1, "token", "operator"], [1, "token", "function"], ["spellcheck", "true", 1, "token", "comment"], ["id", "\u76F8\u5173\u7C7B\u578B\u5B9A\u4E49"], ["onclick", "window.location.hash = '\u76F8\u5173\u7C7B\u578B\u5B9A\u4E49'", 1, "anchor"], ["id", "nzmodalservice\u7684\u5176\u4ED6\u65B9\u6CD5/\u5C5E\u6027"], ["onclick", "window.location.hash = 'nzmodalservice\u7684\u5176\u4ED6\u65B9\u6CD5/\u5C5E\u6027'", 1, "anchor"], ["id", "nzmodalref"], ["onclick", "window.location.hash = 'nzmodalref'", 1, "anchor"], ["id", "modalbuttonoptions\uFF08\u7528\u4E8E\u81EA\u5B9A\u4E49\u5E95\u90E8\u6309\u94AE\uFF09"], ["onclick", "window.location.hash = 'modalbuttonoptions\uFF08\u7528\u4E8E\u81EA\u5B9A\u4E49\u5E95\u90E8\u6309\u94AE\uFF09'", 1, "anchor"], ["id", "[nzmodalfooter]"], [1, "api-type-label", "directive"], ["onclick", "window.location.hash = '[nzmodalfooter]'", 1, "anchor"], [1, "language-html"], [1, "token", "tag"], [1, "token", "attr-name"], [1, "token", "attr-value"]], template: function NzDemoModalZhComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-affix", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nz-anchor", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzClick", function NzDemoModalZhComponent_Template_nz_anchor_nzClick_2_listener($event) { return ctx.goLink($event); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "section", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Modal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u5BF9\u8BDD\u6846");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "section", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\u6A21\u6001\u5BF9\u8BDD\u6846\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h2", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\u4F55\u65F6\u4F7F\u7528");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\u9700\u8981\u7528\u6237\u5904\u7406\u4E8B\u52A1\uFF0C\u53C8\u4E0D\u5E0C\u671B\u8DF3\u8F6C\u9875\u9762\u4EE5\u81F4\u6253\u65AD\u5DE5\u4F5C\u6D41\u7A0B\u65F6\uFF0C\u53EF\u4EE5\u4F7F\u7528 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Modal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " \u5728\u5F53\u524D\u9875\u9762\u6B63\u4E2D\u6253\u5F00\u4E00\u4E2A\u6D6E\u5C42\uFF0C\u627F\u8F7D\u76F8\u5E94\u7684\u64CD\u4F5C\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "\u53E6\u5916\u5F53\u9700\u8981\u4E00\u4E2A\u7B80\u6D01\u7684\u786E\u8BA4\u6846\u8BE2\u95EE\u7528\u6237\u65F6\uFF0C\u53EF\u4EE5\u4F7F\u7528\u7CBE\u5FC3\u5C01\u88C5\u597D\u7684 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "NzModalService.confirm()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " \u7B49\u65B9\u6CD5\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "\u63A8\u8350\u4F7F\u7528\u52A0\u8F7DComponent\u7684\u65B9\u5F0F\u5F39\u51FAModal\uFF0C\u8FD9\u6837\u5F39\u51FA\u5C42\u7684Component\u903B\u8F91\u53EF\u4EE5\u4E0E\u5916\u5C42Component\u5B8C\u5168\u9694\u79BB\uFF0C\u5E76\u4E14\u505A\u5230\u53EF\u4EE5\u968F\u65F6\u590D\u7528\uFF0C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "\u5728\u5F39\u51FA\u5C42Component\u4E2D\u53EF\u4EE5\u901A\u8FC7\u4F9D\u8D56\u6CE8\u5165");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "NzModalRef");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "\u65B9\u5F0F\u76F4\u63A5\u83B7\u53D6\u6A21\u6001\u6846\u7684\u7EC4\u4EF6\u5B9E\u4F8B\uFF0C\u7528\u4E8E\u63A7\u5236\u5728\u5F39\u51FA\u5C42\u7EC4\u4EF6\u4E2D\u63A7\u5236\u6A21\u6001\u6846\u884C\u4E3A\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "pre", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "import");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "{");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " NzModalModule ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "from");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "'ng-zorro-antd/modal'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "\u4EE3\u7801\u6F14\u793A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoModalZhComponent_Template_i_click_69_listener() { return ctx.expandAllCode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "nz-code-box", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "nz-demo-modal-basic", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "\u7B2C\u4E00\u4E2A\u5BF9\u8BDD\u6846\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "nz-code-box", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "nz-demo-modal-footer", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "\u66F4\u590D\u6742\u7684\u4F8B\u5B50\uFF0C\u81EA\u5B9A\u4E49\u4E86\u9875\u811A\u7684\u6309\u94AE\uFF0C\u70B9\u51FB\u63D0\u4EA4\u540E\u8FDB\u5165 loading \u72B6\u6001\uFF0C\u5B8C\u6210\u540E\u5173\u95ED\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "\u4E0D\u9700\u8981\u9ED8\u8BA4\u786E\u5B9A\u53D6\u6D88\u6309\u94AE\u65F6\uFF0C\u4F60\u53EF\u4EE5\u628A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "nzFooter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, " \u8BBE\u4E3A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "nz-code-box", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "nz-demo-modal-confirm", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "\u4F7F\u7528 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "NzModalService.confirm()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, " \u53EF\u4EE5\u5FEB\u6377\u5730\u5F39\u51FA\u786E\u8BA4\u6846\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "nz-code-box", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "nz-demo-modal-info", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "\u5404\u79CD\u7C7B\u578B\u7684\u4FE1\u606F\u63D0\u793A\uFF0C\u53EA\u63D0\u4F9B\u4E00\u4E2A\u6309\u94AE\u7528\u4E8E\u5173\u95ED\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "nz-code-box", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "nz-demo-modal-manual", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "\u624B\u52A8\u5173\u95EDmodal\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "nz-code-box", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "nz-demo-modal-service", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Modal\u7684service\u7528\u6CD5\uFF0C\u793A\u4F8B\u4E2D\u6F14\u793A\u4E86\u7528\u6237\u81EA\u5B9A\u4E49\u6A21\u677F\u3001\u81EA\u5B9A\u4E49component\u3001\u4EE5\u53CA\u6CE8\u5165\u6A21\u6001\u6846\u5B9E\u4F8B\u7684\u65B9\u6CD5\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "\u4F7F\u7528\u6A21\u7248\u4F5C\u4E3A\u5185\u5BB9\u65F6\u4E0A\u4E0B\u6587\u4E3A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "{ $implicit: nzComponentParams, modalRef: NzModalRef }");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "nz-code-box", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "nz-demo-modal-async", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "\u70B9\u51FB\u786E\u5B9A\u540E\u5F02\u6B65\u5173\u95ED\u5BF9\u8BDD\u6846\uFF0C\u4F8B\u5982\u63D0\u4EA4\u8868\u5355\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "nz-code-box", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "nz-demo-modal-footer2", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "\u4F7F\u7528 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "nzModalFooter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, " \u6307\u4EE4\u81EA\u5B9A\u4E49\u4E86\u9875\u811A\u7684\u6309\u94AE\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "nz-code-box", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "nz-demo-modal-confirm-promise", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "\u4F7F\u7528 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "NzModalService.confirm()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, " \u53EF\u4EE5\u5FEB\u6377\u5730\u5F39\u51FA\u786E\u8BA4\u6846\u3002NzOnCancel/NzOnOk \u8FD4\u56DE promise \u53EF\u4EE5\u5EF6\u8FDF\u5173\u95ED");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "nz-code-box", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](140, "nz-demo-modal-locale", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "\u8BBE\u7F6E ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "nzOkText");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, " \u4E0E ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "nzCancelText");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, " \u4EE5\u81EA\u5B9A\u4E49\u6309\u94AE\u6587\u5B57\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "nz-code-box", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](151, "nz-demo-modal-position", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "\u60A8\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "nzStyle.top");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, " \u6216\u914D\u5408\u5176\u4ED6\u6837\u5F0F\u6765\u8BBE\u7F6E\u5BF9\u8BDD\u6846\u4F4D\u7F6E\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "blockquote");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "\u6CE8\u610F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, " \u7531\u4E8EAngular\u7684\u6837\u5F0F\u9694\u79BB\uFF0C\u82E5\u5728Component\u4E2D\u6CA1\u6709\u52A0\u5165");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "encapsulation: ViewEncapsulation.None");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "\uFF0C\u5219\u60A8\u53EF\u80FD\u9700\u8981\u5728\u81EA\u5B9A\u4E49\u6837\u5F0F\u5185\u91C7\u7528");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "::ng-deep");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "\u6765\u8986\u76D6NgZorro\u7684\u6837\u5F0F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "section", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "h2", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, "API");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "a", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "h3", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "NzModalService");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "label", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "service");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "a", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "\u5BF9\u8BDD\u6846\u5F53\u524D\u5206\u4E3A2\u79CD\u6A21\u5F0F\uFF0C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "\u666E\u901A\u6A21\u5F0F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, " \u548C ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "\u786E\u8BA4\u6846\u6A21\u5F0F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, "\uFF08\u5373");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, "Confirm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, "\u5BF9\u8BDD\u6846\uFF0C\u901A\u8FC7\u8C03\u7528");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, "confirm/info/success/error/warning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, "\u5F39\u51FA\uFF09\uFF0C\u4E24\u79CD\u6A21\u5F0F\u5BF9API\u7684\u652F\u6301\u7A0B\u5EA6\u7A0D\u6709\u4E0D\u540C\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, "\u53C2\u6570");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, "\u8BF4\u660E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, "\u7C7B\u578B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, "\u9ED8\u8BA4\u503C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, "\u5168\u5C40\u914D\u7F6E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](212, "nzAfterOpen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](214, "Modal \u6253\u5F00\u540E\u7684\u56DE\u8C03");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](216, "EventEmitter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](219, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](222, "nzAfterClose");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, "Modal \u5B8C\u5168\u5173\u95ED\u540E\u7684\u56DE\u8C03\uFF0C\u53EF\u76D1\u542Cclose/destroy\u65B9\u6CD5\u4F20\u5165\u7684\u53C2\u6570");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](226, "EventEmitter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](228, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](229, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](232, "nzBodyStyle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](234, "Modal body \u6837\u5F0F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](237, "object");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](239, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](240, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](243, "nzCancelText");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](245, "\u53D6\u6D88\u6309\u94AE\u6587\u5B57\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](247, "\u8BBE\u4E3A null \u8868\u793A\u4E0D\u663E\u793A\u53D6\u6D88\u6309\u94AE\uFF08\u82E5\u5728\u666E\u901A\u6A21\u5F0F\u4E0B\u4F7F\u7528\u4E86 nzFooter \u53C2\u6570\uFF0C\u5219\u8BE5\u503C\u65E0\u6548\uFF09");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](250, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](252, "\u53D6\u6D88");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](253, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](256, "nzClosable");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](258, "\u662F\u5426\u663E\u793A\u53F3\u4E0A\u89D2\u7684\u5173\u95ED\u6309\u94AE\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](260, "\u786E\u8BA4\u6846\u6A21\u5F0F\u4E0B\u8BE5\u503C\u65E0\u6548\uFF08\u9ED8\u8BA4\u4F1A\u88AB\u9690\u85CF\uFF09");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](263, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](266, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](267, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](270, "nzOkLoading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](272, "\u786E\u5B9A\u6309\u94AE loading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](275, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](278, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](279, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](282, "nzCancelLoading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](284, "\u53D6\u6D88\u6309\u94AE loading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](287, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](290, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](291, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](294, "nzOkDisabled");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](295, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](296, "\u662F\u5426\u7981\u7528\u786E\u5B9A\u6309\u94AE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](297, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](298, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](299, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](301, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](302, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](303, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](304, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](306, "nzCancelDisabled");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](307, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](308, "\u662F\u5426\u7981\u7528\u53D6\u6D88\u6309\u94AE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](309, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](310, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](311, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](312, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](313, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](314, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](315, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](316, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](317, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](318, "nzFooter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](319, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](320, "\u5E95\u90E8\u5185\u5BB9\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](321, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](322, "1. \u4EC5\u5728\u666E\u901A\u6A21\u5F0F\u4E0B\u6709\u6548\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](323, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](324, "2. \u53EF\u901A\u8FC7\u4F20\u5165 ModalButtonOptions \u6765\u6700\u5927\u7A0B\u5EA6\u81EA\u5B9A\u4E49\u6309\u94AE\uFF08\u8BE6\u89C1\u6848\u4F8B\u6216\u4E0B\u65B9\u8BF4\u660E\uFF09\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](325, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](326, "3. \u5F53\u4E0D\u9700\u8981\u5E95\u90E8\u65F6\uFF0C\u53EF\u4EE5\u8BBE\u4E3A null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](327, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](328, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](329, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](330, "TemplateRef");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](331, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](332, "ModalButtonOptions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](333, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](334, "\u9ED8\u8BA4\u7684\u786E\u5B9A\u53D6\u6D88\u6309\u94AE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](335, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](336, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](337, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](338, "nzGetContainer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](339, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](340, "\u6307\u5B9A Modal \u6302\u8F7D\u7684 HTML \u8282\u70B9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](341, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](342, "HTMLElement");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](343, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](344, "() => HTMLElement");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](345, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](346, "\u9ED8\u8BA4\u5BB9\u5668");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](347, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](348, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](349, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](350, "nzKeyboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](351, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](352, "\u662F\u5426\u652F\u6301\u952E\u76D8esc\u5173\u95ED");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](353, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](354, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](355, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](356, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](357, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](358, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](359, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](360, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](361, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](362, "nzMask");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](363, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](364, "\u662F\u5426\u5C55\u793A\u906E\u7F69");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](365, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](366, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](367, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](368, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](369, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](370, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](371, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](372, "\u2705");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](373, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](374, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](375, "nzMaskClosable");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](376, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](377, "\u70B9\u51FB\u8499\u5C42\u662F\u5426\u5141\u8BB8\u5173\u95ED");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](378, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](379, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](380, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](381, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](382, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](383, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](384, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](385, "\u2705");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](386, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](387, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](388, "nzMaskStyle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](389, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](390, "\u906E\u7F69\u6837\u5F0F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](391, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](392, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](393, "object");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](394, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](395, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](396, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](397, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](398, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](399, "nzOkText");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](400, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](401, "\u786E\u8BA4\u6309\u94AE\u6587\u5B57\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](402, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](403, "\u8BBE\u4E3A null \u8868\u793A\u4E0D\u663E\u793A\u786E\u8BA4\u6309\u94AE\uFF08\u82E5\u5728\u666E\u901A\u6A21\u5F0F\u4E0B\u4F7F\u7528\u4E86 nzFooter \u53C2\u6570\uFF0C\u5219\u8BE5\u503C\u65E0\u6548\uFF09");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](404, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](405, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](406, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](407, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](408, "\u786E\u5B9A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](409, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](410, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](411, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](412, "nzOkType");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](413, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](414, "\u786E\u8BA4\u6309\u94AE\u7C7B\u578B\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](415, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](416, "\u4E0Ebutton\u7684type\u7C7B\u578B\u503C\u4E00\u81F4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](417, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](418, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](419, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](420, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](421, "primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](422, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](423, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](424, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](425, "nzStyle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](426, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](427, "\u53EF\u7528\u4E8E\u8BBE\u7F6E\u6D6E\u5C42\u7684\u6837\u5F0F\uFF0C\u8C03\u6574\u6D6E\u5C42\u4F4D\u7F6E\u7B49");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](428, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](429, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](430, "object");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](431, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](432, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](433, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](434, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](435, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](436, "nzTitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](437, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](438, "\u6807\u9898\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](439, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](440, "\u7559\u7A7A\u8868\u793A\u4E0D\u5C55\u793A\u6807\u9898\u3002TemplateRef\u7684\u4F7F\u7528\u65B9\u6CD5\u53EF\u53C2\u8003\u6848\u4F8B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](441, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](442, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](443, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](444, "TemplateRef");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](445, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](446, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](447, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](448, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](449, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](450, "nzCloseIcon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](451, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](452, "\u81EA\u5B9A\u4E49\u5173\u95ED\u56FE\u6807");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](453, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](454, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](455, "string|TemplateRef<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](456, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](457, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](458, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](459, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](460, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](461, "nzVisible");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](462, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](463, "\u5BF9\u8BDD\u6846\u662F\u5426\u53EF\u89C1\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](464, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](465, "\u5F53\u4EE5 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](466, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](467, "<nz-modal>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](468, " \u6807\u7B7E\u4F7F\u7528\u65F6\uFF0C\u8BF7\u52A1\u5FC5\u4F7F\u7528\u53CC\u5411\u7ED1\u5B9A\uFF0C\u4F8B\u5982\uFF1A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](469, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](470, "[(nzVisible)]=\"visible\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](471, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](472, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](473, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](474, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](475, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](476, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](477, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](478, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](479, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](480, "nzWidth");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](481, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](482, "\u5BBD\u5EA6\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](483, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](484, "\u4F7F\u7528\u6570\u5B57\u65F6\uFF0C\u9ED8\u8BA4\u5355\u4F4D\u4E3Apx");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](485, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](486, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](487, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](488, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](489, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](490, "520");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](491, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](492, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](493, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](494, "nzClassName");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](495, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](496, "\u5BF9\u8BDD\u6846\u7684\u7C7B\u540D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](497, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](498, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](499, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](500, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](501, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](502, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](503, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](504, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](505, "nzWrapClassName");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](506, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](507, "\u5BF9\u8BDD\u6846\u5916\u5C42\u5BB9\u5668\u7684\u7C7B\u540D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](508, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](509, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](510, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](511, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](512, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](513, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](514, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](515, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](516, "nzZIndex");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](517, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](518, "\u8BBE\u7F6E Modal \u7684 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](519, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](520, "z-index");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](521, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](522, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](523, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](524, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](525, "1000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](526, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](527, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](528, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](529, "nzOnCancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](530, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](531, "\u70B9\u51FB\u906E\u7F69\u5C42\u6216\u53F3\u4E0A\u89D2\u53C9\u6216\u53D6\u6D88\u6309\u94AE\u7684\u56DE\u8C03\uFF08\u82E5nzContent\u4E3AComponent\uFF0C\u5219\u5C06\u4F1A\u4EE5\u8BE5Component\u5B9E\u4F8B\u4F5C\u4E3A\u53C2\u6570\uFF09\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](532, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](533, "\u6CE8\uFF1A\u5F53\u4EE5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](534, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](535, "NzModalService.create");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](536, "\u521B\u5EFA\u65F6\uFF0C\u6B64\u53C2\u6570\u5E94\u4F20\u5165function\uFF08\u56DE\u8C03\u51FD\u6570\uFF09\u3002\u8BE5\u51FD\u6570\u53EF\u8FD4\u56DEpromise\uFF0C\u5F85\u6267\u884C\u5B8C\u6BD5\u6216promise\u7ED3\u675F\u65F6\uFF0C\u5C06\u81EA\u52A8\u5173\u95ED\u5BF9\u8BDD\u6846\uFF08\u8FD4\u56DEfalse\u53EF\u963B\u6B62\u5173\u95ED\uFF09");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](537, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](538, "EventEmitter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](539, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](540, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](541, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](542, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](543, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](544, "nzOnOk");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](545, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](546, "\u70B9\u51FB\u786E\u5B9A\u56DE\u8C03\uFF08\u82E5nzContent\u4E3AComponent\uFF0C\u5219\u5C06\u4F1A\u4EE5\u8BE5Component\u5B9E\u4F8B\u4F5C\u4E3A\u53C2\u6570\uFF09\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](547, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](548, "\u6CE8\uFF1A\u5F53\u4EE5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](549, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](550, "NzModalService.create");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](551, "\u521B\u5EFA\u65F6\uFF0C\u6B64\u53C2\u6570\u5E94\u4F20\u5165function\uFF08\u56DE\u8C03\u51FD\u6570\uFF09\u3002\u8BE5\u51FD\u6570\u53EF\u8FD4\u56DEpromise\uFF0C\u5F85\u6267\u884C\u5B8C\u6BD5\u6216promise\u7ED3\u675F\u65F6\uFF0C\u5C06\u81EA\u52A8\u5173\u95ED\u5BF9\u8BDD\u6846\uFF08\u8FD4\u56DEfalse\u53EF\u963B\u6B62\u5173\u95ED\uFF09");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](552, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](553, "EventEmitter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](554, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](555, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](556, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](557, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](558, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](559, "nzContent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](560, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](561, "\u5185\u5BB9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](562, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](563, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](564, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](565, "TemplateRef");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](566, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](567, "Component");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](568, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](569, "ng-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](570, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](571, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](572, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](573, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](574, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](575, "nzComponentParams");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](576, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](577, "\u5F53nzContent\u4E3A\u7EC4\u4EF6\u7C7B(Component)\u65F6\uFF0C\u8BE5\u53C2\u6570\u4E2D\u7684\u5C5E\u6027\u5C06\u4F20\u5165nzContent\u5B9E\u4F8B\u4E2D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](578, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](579, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](580, "object");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](581, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](582, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](583, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](584, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](585, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](586, "nzIconType");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](587, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](588, "\u56FE\u6807 Icon \u7C7B\u578B\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](589, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](590, "\u4EC5 \u786E\u8BA4\u6846\u6A21\u5F0F \u4E0B\u6709\u6548");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](591, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](592, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](593, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](594, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](595, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](596, "'question-circle'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](597, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](598, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](599, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](600, "nzAutofocus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](601, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](602, "\u81EA\u52A8\u805A\u7126\u53CA\u805A\u7126\u4F4D\u7F6E\uFF0C\u4E3A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](603, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](604, "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](605, " \u65F6\u7981\u7528");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](606, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](607, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](608, "'ok' | 'cancel' | 'auto' | null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](609, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](610, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](611, "'auto'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](612, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](613, "h4", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](614, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](615, "\u6CE8\u610F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](616, "a", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](617, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](618, "blockquote");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](619, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](620, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](621, "<nz-modal>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](622, " \u9ED8\u8BA4\u5173\u95ED\u540E\u72B6\u6001\u4E0D\u4F1A\u81EA\u52A8\u6E05\u7A7A, \u5982\u679C\u5E0C\u671B\u6BCF\u6B21\u6253\u5F00\u90FD\u662F\u65B0\u5185\u5BB9\uFF0C\u8BF7\u91C7\u7528 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](623, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](624, "NzModalService");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](625, " \u670D\u52A1\u65B9\u5F0F\u521B\u5EFA\u5BF9\u8BDD\u6846\uFF08\u5F53\u4EE5\u670D\u52A1\u65B9\u5F0F\u521B\u5EFA\u65F6\uFF0C\u9ED8\u8BA4\u4F1A\u76D1\u542C ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](626, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](627, "nzAfterClose");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](628, " \u5E76\u9500\u6BC1\u5BF9\u8BDD\u6846\uFF09\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](629, "blockquote");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](630, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](631, "\u901A\u8FC7 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](632, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](633, "NzModalService");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](634, " \u670D\u52A1\u65B9\u5F0F\u521B\u5EFA\u7684\u5BF9\u8BDD\u6846\u9700\u8981\u81EA\u884C\u7BA1\u7406\u5176\u751F\u547D\u5468\u671F\u3002\u6BD4\u5982\u4F60\u5728\u9875\u9762\u8DEF\u7531\u5207\u6362\u65F6\uFF0C\u670D\u52A1\u65B9\u5F0F\u521B\u5EFA\u7684\u5BF9\u8BDD\u6846\u5E76\u4E0D\u4F1A\u88AB\u9500\u6BC1\uFF0C\u4F60\u9700\u8981\u4F7F\u7528\u5BF9\u8BDD\u6846\u5F15\u7528\u6765\u624B\u52A8\u9500\u6BC1\uFF08");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](635, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](636, "NzModalRef.close()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](637, " \u6216 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](638, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](639, "NzModalRef.destroy()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](640, "\uFF09\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](641, "h4", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](642, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](643, "\u91C7\u7528\u670D\u52A1\u65B9\u5F0F\u521B\u5EFA\u666E\u901A\u6A21\u5F0F\u5BF9\u8BDD\u6846");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](644, "a", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](645, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](646, "blockquote");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](647, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](648, "\u60A8\u53EF\u8C03\u7528 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](649, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](650, "NzModalService.create(options)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](651, " \u6765\u52A8\u6001\u521B\u5EFA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](652, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](653, "\u666E\u901A\u6A21\u5F0F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](654, "\u5BF9\u8BDD\u6846\uFF0C\u8FD9\u91CC\u7684 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](655, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](656, "options");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](657, " \u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u652F\u6301\u4E0A\u65B9API\u4E2D\u7ED9\u51FA\u7684\u652F\u6301 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](658, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](659, "\u666E\u901A\u6A21\u5F0F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](660, " \u7684\u53C2\u6570");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](661, "h3", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](662, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](663, "\u786E\u8BA4\u6846\u6A21\u5F0F - NzModalService.method()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](664, "a", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](665, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](666, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](667, "\u5305\u62EC\uFF1A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](668, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](669, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](670, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](671, "NzModalService.info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](672, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](673, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](674, "NzModalService.success");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](675, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](676, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](677, "NzModalService.error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](678, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](679, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](680, "NzModalService.warning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](681, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](682, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](683, "NzModalService.confirm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](684, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](685, "\u4EE5\u4E0A\u5747\u4E3A\u4E00\u4E2A\u51FD\u6570\uFF0C\u53C2\u6570\u4E3A object\uFF0C\u4E0E\u4E0A\u65B9API\u4E00\u81F4\u3002\u90E8\u5206\u5C5E\u6027\u7C7B\u578B\u6216\u521D\u59CB\u503C\u6709\u6240\u4E0D\u540C\uFF0C\u5DF2\u5217\u5728\u4E0B\u65B9\uFF1A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](686, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](687, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](688, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](689, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](690, "\u53C2\u6570");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](691, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](692, "\u8BF4\u660E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](693, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](694, "\u7C7B\u578B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](695, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](696, "\u9ED8\u8BA4\u503C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](697, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](698, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](699, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](700, "nzOnOk");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](701, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](702, "\u70B9\u51FB\u786E\u5B9A\u6309\u94AE\u65F6\u5C06\u6267\u884C\u7684\u56DE\u8C03\u51FD\u6570\uFF08\u82E5nzContent\u4E3AComponent\uFF0C\u5219\u5C06\u4F1A\u4EE5\u8BE5Component\u5B9E\u4F8B\u4F5C\u4E3A\u53C2\u6570\uFF09\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](703, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](704, "\u8BE5\u51FD\u6570\u53EF\u8FD4\u56DEpromise\uFF0C\u5F85\u6267\u884C\u5B8C\u6BD5\u6216promise\u7ED3\u675F\u65F6\uFF0C\u5C06\u81EA\u52A8\u5173\u95ED\u5BF9\u8BDD\u6846\uFF08\u8FD4\u56DEfalse\u53EF\u963B\u6B62\u5173\u95ED\uFF09");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](705, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](706, "function");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](707, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](708, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](709, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](710, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](711, "nzOnCancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](712, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](713, "\u70B9\u51FB\u906E\u7F69\u5C42\u6216\u53F3\u4E0A\u89D2\u53C9\u6216\u53D6\u6D88\u6309\u94AE\u7684\u56DE\u8C03\uFF08\u82E5nzContent\u4E3AComponent\uFF0C\u5219\u5C06\u4F1A\u4EE5\u8BE5Component\u5B9E\u4F8B\u4F5C\u4E3A\u53C2\u6570\uFF09\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](714, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](715, "\u8BE5\u51FD\u6570\u53EF\u8FD4\u56DEpromise\uFF0C\u5F85\u6267\u884C\u5B8C\u6BD5\u6216promise\u7ED3\u675F\u65F6\uFF0C\u5C06\u81EA\u52A8\u5173\u95ED\u5BF9\u8BDD\u6846\uFF08\u8FD4\u56DEfalse\u53EF\u963B\u6B62\u5173\u95ED\uFF09");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](716, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](717, "function");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](718, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](719, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](720, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](721, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](722, "nzWidth");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](723, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](724, "\u5BBD\u5EA6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](725, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](726, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](727, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](728, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](729, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](730, "416");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](731, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](732, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](733, "nzMaskClosable");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](734, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](735, "\u70B9\u51FB\u8499\u5C42\u662F\u5426\u5141\u8BB8\u5173\u95ED");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](736, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](737, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](738, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](739, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](740, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](741, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](742, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](743, "\u4EE5\u4E0A\u51FD\u6570\u8C03\u7528\u540E\uFF0C\u4F1A\u8FD4\u56DE\u4E00\u4E2A\u5F15\u7528\uFF0C\u53EF\u4EE5\u901A\u8FC7\u8BE5\u5F15\u7528\u5173\u95ED\u5F39\u7A97\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](744, "pre", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](745, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](746, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](747, "constructor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](748, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](749, "(");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](750, "modal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](751, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](752, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](753, " NzModalService");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](754, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](755, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](756, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](757, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](758, "{");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](759, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](760, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](761, "const");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](762, " ref");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](763, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](764, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](765, " NzModalRef ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](766, "span", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](767, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](768, " modal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](769, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](770, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](771, "span", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](772, "info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](773, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](774, "(");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](775, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](776, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](777, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](778, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](779, "\n  ref");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](780, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](781, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](782, "span", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](783, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](784, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](785, "(");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](786, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](787, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](788, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](789, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](790, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](791, "span", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](792, "// \u6216 ref.destroy(); \u5C06\u76F4\u63A5\u9500\u6BC1\u5BF9\u8BDD\u6846");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](793, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](794, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](795, "}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](796, "h3", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](797, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](798, "\u76F8\u5173\u7C7B\u578B\u5B9A\u4E49");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](799, "a", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](800, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](801, "h4", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](802, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](803, "NzModalService\u7684\u5176\u4ED6\u65B9\u6CD5/\u5C5E\u6027");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](804, "label", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](805, "service");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](806, "a", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](807, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](808, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](809, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](810, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](811, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](812, "\u65B9\u6CD5/\u5C5E\u6027");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](813, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](814, "\u8BF4\u660E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](815, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](816, "\u7C7B\u578B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](817, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](818, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](819, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](820, "openModals");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](821, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](822, "\u5F53\u524D\u6253\u5F00\u7684\u6240\u6709Modal\u5F15\u7528\u5217\u8868");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](823, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](824, "NzModalRef[]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](825, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](826, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](827, "afterAllClose");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](828, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](829, "\u6240\u6709Modal\u5B8C\u5168\u5173\u95ED\u540E\u7684\u56DE\u8C03");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](830, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](831, "Observable<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](832, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](833, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](834, "closeAll()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](835, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](836, "\u5173\u95ED\u6240\u6709\u6A21\u6001\u6846");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](837, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](838, "function");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](839, "h4", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](840, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](841, "NzModalRef");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](842, "a", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](843, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](844, "blockquote");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](845, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](846, "NzModalRef \u5BF9\u8C61\u7528\u4E8E\u63A7\u5236\u5BF9\u8BDD\u6846\u4EE5\u53CA\u8FDB\u884C\u5185\u5BB9\u95F4\u7684\u901A\u4FE1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](847, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](848, "\u901A\u8FC7\u670D\u52A1\u65B9\u5F0F ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](849, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](850, "NzModalService.xxx()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](851, " \u521B\u5EFA\u7684\u5BF9\u8BDD\u6846\uFF0C\u90FD\u4F1A\u8FD4\u56DE\u4E00\u4E2A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](852, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](853, "NzModalRef");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](854, " \u5BF9\u8C61\uFF0C\u7528\u4E8E\u64CD\u63A7\u8BE5\u5BF9\u8BDD\u6846\uFF08\u82E5\u4F7F\u7528nzContent\u4E3AComponent\u65F6\uFF0C\u4E5F\u53EF\u901A\u8FC7\u4F9D\u8D56\u6CE8\u5165 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](855, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](856, "NzModalRef");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](857, " \u65B9\u5F0F\u83B7\u5F97\u6B64\u5BF9\u8C61\uFF09\uFF0C\u8BE5\u5BF9\u8C61\u5177\u6709\u4EE5\u4E0B\u65B9\u6CD5\uFF1A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](858, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](859, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](860, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](861, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](862, "\u65B9\u6CD5/\u5C5E\u6027");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](863, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](864, "\u8BF4\u660E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](865, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](866, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](867, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](868, "afterOpen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](869, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](870, "\u540CnzAfterOpen\uFF0C\u4F46\u7C7B\u578B\u4E3AObservable<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](871, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](872, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](873, "afterClose");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](874, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](875, "\u540CnzAfterClose\uFF0C\u4F46\u7C7B\u578B\u4E3AObservable<result:any>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](876, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](877, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](878, "open()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](879, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](880, "\u6253\u5F00(\u663E\u793A)\u5BF9\u8BDD\u6846\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](881, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](882, "\u82E5\u5BF9\u8BDD\u6846\u5DF2\u9500\u6BC1\uFF0C\u5219\u8C03\u7528\u6B64\u51FD\u6570\u5C06\u5931\u6548");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](883, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](884, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](885, "close(result: any)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](886, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](887, "\u5173\u95ED(\u9690\u85CF)\u5BF9\u8BDD\u6846\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](888, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](889, "\u6CE8\uFF1A\u5F53\u7528\u4E8E\u4EE5\u670D\u52A1\u65B9\u5F0F\u521B\u5EFA\u7684\u5BF9\u8BDD\u6846\uFF0C\u6B64\u65B9\u6CD5\u5C06\u76F4\u63A5 \u9500\u6BC1 \u5BF9\u8BDD\u6846\uFF08\u540Cdestroy\u65B9\u6CD5\uFF09");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](890, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](891, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](892, "destroy(result: any)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](893, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](894, "\u9500\u6BC1\u5BF9\u8BDD\u6846\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](895, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](896, "\u6CE8\uFF1A\u4EC5\u7528\u4E8E\u670D\u52A1\u65B9\u5F0F\u521B\u5EFA\u7684\u5BF9\u8BDD\u6846\uFF08\u975E\u670D\u52A1\u65B9\u5F0F\u521B\u5EFA\u7684\u5BF9\u8BDD\u6846\uFF0C\u6B64\u65B9\u6CD5\u53EA\u4F1A\u9690\u85CF\u5BF9\u8BDD\u6846\uFF09");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](897, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](898, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](899, "getContentComponent()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](900, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](901, "\u83B7\u53D6\u5BF9\u8BDD\u6846\u5185\u5BB9\u4E2D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](902, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](903, "nzContent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](904, "\u7684Component\u5B9E\u4F8Binstance\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](905, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](906, "\u6CE8\uFF1A\u5F53\u5BF9\u8BDD\u6846\u8FD8\u672A\u521D\u59CB\u5316\u5B8C\u6BD5\uFF08");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](907, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](908, "ngOnInit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](909, "\u672A\u6267\u884C\uFF09\u65F6\uFF0C\u6B64\u51FD\u6570\u5C06\u8FD4\u56DE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](910, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](911, "undefined");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](912, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](913, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](914, "triggerOk()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](915, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](916, "\u624B\u52A8\u89E6\u53D1nzOnOk");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](917, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](918, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](919, "triggerCancel()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](920, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](921, "\u624B\u52A8\u89E6\u53D1nzOnCancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](922, "h3", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](923, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](924, "ModalButtonOptions\uFF08\u7528\u4E8E\u81EA\u5B9A\u4E49\u5E95\u90E8\u6309\u94AE\uFF09");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](925, "a", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](926, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](927, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](928, "\u53EF\u5C06\u6B64\u7C7B\u578B\u6570\u7EC4\u4F20\u5165 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](929, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](930, "nzFooter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](931, "\uFF0C\u7528\u4E8E\u81EA\u5B9A\u4E49\u5E95\u90E8\u6309\u94AE\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](932, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](933, "\u6309\u94AE\u914D\u7F6E\u9879\u5982\u4E0B\uFF08\u4E0Ebutton\u7EC4\u4EF6\u4FDD\u6301\u4E00\u81F4\uFF09\uFF1A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](934, "pre", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](935, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](936, "nzFooter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](937, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](938, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](939, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](940, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](941, "[");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](942, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](943, "{");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](944, "\n  label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](945, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](946, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](947, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](948, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](949, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](950, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](951, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](952, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](953, "span", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](954, "// \u6309\u94AE\u6587\u672C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](955, "\n  type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](956, "span", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](957, "?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](958, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](959, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](960, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](961, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](962, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](963, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](964, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](965, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](966, "span", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](967, "// \u7C7B\u578B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](968, "\n  shape");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](969, "span", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](970, "?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](971, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](972, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](973, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](974, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](975, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](976, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](977, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](978, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](979, "span", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](980, "// \u5F62\u72B6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](981, "\n  ghost");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](982, "span", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](983, "?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](984, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](985, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](986, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](987, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](988, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](989, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](990, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](991, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](992, "span", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](993, "// \u662F\u5426ghost");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](994, "\n  size");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](995, "span", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](996, "?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](997, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](998, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](999, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1000, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1001, "string");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1002, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1003, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1004, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1005, "span", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1006, "// \u5927\u5C0F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1007, "\n  autoLoading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1008, "span", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1009, "?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1010, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1011, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1012, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1013, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1014, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1015, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1016, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1017, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1018, "span", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1019, "// \u9ED8\u8BA4\u4E3Atrue\uFF0C\u82E5\u4E3Atrue\u65F6\uFF0C\u5F53onClick\u8FD4\u56DEpromise\u65F6\u6B64\u6309\u94AE\u5C06\u81EA\u52A8\u7F6E\u4E3Aloading\u72B6\u6001");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1020, "\n\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1021, "span", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1022, "// \u63D0\u793A\uFF1A\u4E0B\u65B9\u65B9\u6CD5\u7684this\u6307\u5411\u8BE5\u914D\u7F6E\u5BF9\u8C61\u81EA\u8EAB\u3002\u5F53nzContent\u4E3A\u7EC4\u4EF6\u7C7B\u65F6\uFF0C\u4E0B\u65B9\u65B9\u6CD5\u4F20\u5165\u7684contentComponentInstance\u53C2\u6570\u4E3A\u8BE5\u7EC4\u4EF6\u7C7B\u7684\u5B9E\u4F8B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1023, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1024, "span", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1025, "// \u662F\u5426\u663E\u793A\u8BE5\u6309\u94AE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1026, "\n  show");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1027, "span", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1028, "?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1029, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1030, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1031, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1032, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1033, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1034, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1035, "span", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1036, "|");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1037, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1038, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1039, "(");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1040, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1041, "(");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1042, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1043, "this");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1044, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1045, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1046, " ModalButtonOptions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1047, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1048, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1049, " contentComponentInstance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1050, "span", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1051, "?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1052, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1053, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1054, " object");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1055, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1056, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1057, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1058, "span", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1059, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1060, "span", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1061, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1062, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1063, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1064, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1065, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1066, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1067, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1068, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1069, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1070, "span", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1071, "// \u662F\u5426\u663E\u793A\u4E3Aloading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1072, "\n  loading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1073, "span", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1074, "?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1075, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1076, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1077, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1078, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1079, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1080, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1081, "span", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1082, "|");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1083, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1084, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1085, "(");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1086, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1087, "(");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1088, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1089, "this");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1090, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1091, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1092, " ModalButtonOptions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1093, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1094, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1095, " contentComponentInstance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1096, "span", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1097, "?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1098, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1099, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1100, " object");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1101, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1102, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1103, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1104, "span", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1105, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1106, "span", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1107, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1108, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1109, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1110, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1111, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1112, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1113, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1114, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1115, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1116, "span", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1117, "// \u662F\u5426\u7981\u7528");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1118, "\n  disabled");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1119, "span", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1120, "?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1121, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1122, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1123, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1124, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1125, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1126, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1127, "span", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1128, "|");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1129, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1130, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1131, "(");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1132, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1133, "(");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1134, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1135, "this");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1136, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1137, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1138, " ModalButtonOptions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1139, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1140, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1141, " contentComponentInstance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1142, "span", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1143, "?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1144, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1145, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1146, " object");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1147, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1148, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1149, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1150, "span", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1151, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1152, "span", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1153, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1154, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1155, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1156, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1157, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1158, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1159, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1160, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1161, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1162, "span", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1163, "// \u6309\u94AE\u70B9\u51FB\u56DE\u8C03");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1164, "\n  onClick");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1165, "span", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1166, "?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1167, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1168, "(");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1169, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1170, "this");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1171, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1172, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1173, " ModalButtonOptions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1174, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1175, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1176, " contentComponentInstance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1177, "span", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1178, "?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1179, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1180, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1181, " object");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1182, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1183, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1184, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1185, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1186, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1187, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1188, "void");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1189, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1190, "span", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1191, "|");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1192, " Promise");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1193, "span", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1194, "&");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1195, "lt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1196, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1197, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1198, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1199, "void");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1200, "span", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1201, "&");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1202, "gt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1203, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1204, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1205, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1206, "span", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1207, "|");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1208, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1209, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1210, "any");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1211, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1212, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1213, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1214, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1215, "}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1216, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1217, "]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1218, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1219, "\u4EE5\u4E0A\u914D\u7F6E\u9879\u4E5F\u53EF\u5728\u8FD0\u884C\u6001\u5B9E\u65F6\u6539\u53D8\uFF0C\u6765\u89E6\u53D1\u6309\u94AE\u884C\u4E3A\u6539\u53D8\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1220, "h3", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1221, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1222, "[nzModalFooter]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1223, "label", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1224, "directive");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1225, "a", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1226, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1227, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1228, "\u53E6\u4E00\u79CD\u81EA\u5B9A\u4E49\u9875\u811A\u6309\u94AE\u7684\u65B9\u5F0F\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1229, "pre", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1230, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1231, "span", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1232, "span", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1233, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1234, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1235, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1236, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1237, "span", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1238, "*nzModalFooter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1239, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1240, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1241, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1242, "span", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1243, "span", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1244, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1245, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1246, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1247, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1248, "span", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1249, "nz-button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1250, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1251, "span", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1252, "nzType");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1253, "span", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1254, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1255, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1256, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1257, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1258, "default");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1259, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1260, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1261, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1262, "span", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1263, "(click)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1264, "span", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1265, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1266, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1267, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1268, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1269, "handleCancel()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1270, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1271, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1272, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1273, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1274, "Custom Callback");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1275, "span", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1276, "span", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1277, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1278, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1279, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1280, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1281, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1282, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1283, "span", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1284, "span", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1285, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1286, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1287, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1288, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1289, "span", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1290, "nz-button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1291, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1292, "span", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1293, "nzType");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1294, "span", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1295, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1296, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1297, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1298, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1299, "primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1300, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1301, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1302, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1303, "span", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1304, "(click)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1305, "span", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1306, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1307, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1308, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1309, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1310, "handleOk()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1311, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1312, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1313, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1314, "span", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1315, "[nzLoading]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1316, "span", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1317, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1318, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1319, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1320, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1321, "isConfirmLoading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1322, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1323, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1324, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1325, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1326, "Custom Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1327, "span", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1328, "span", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1329, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1330, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1331, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1332, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1333, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1334, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1335, "span", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1336, "span", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1337, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1338, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1339, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1340, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1341, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1342, "\n\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1343, "span", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1344, "<!-- or -->");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1345, "\n\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1346, "span", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1347, "span", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1348, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1349, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1350, "ng-template");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1351, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1352, "span", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1353, "[nzModalFooter]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1354, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1355, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1356, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1357, "span", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1358, "span", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1359, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1360, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1361, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1362, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1363, "span", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1364, "nz-button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1365, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1366, "span", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1367, "nzType");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1368, "span", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1369, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1370, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1371, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1372, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1373, "default");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1374, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1375, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1376, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1377, "span", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1378, "(click)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1379, "span", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1380, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1381, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1382, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1383, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1384, "handleCancel()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1385, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1386, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1387, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1388, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1389, "Custom Callback");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1390, "span", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1391, "span", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1392, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1393, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1394, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1395, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1396, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1397, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1398, "span", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1399, "span", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1400, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1401, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1402, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1403, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1404, "span", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1405, "nz-button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1406, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1407, "span", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1408, "nzType");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1409, "span", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1410, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1411, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1412, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1413, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1414, "primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1415, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1416, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1417, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1418, "span", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1419, "(click)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1420, "span", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1421, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1422, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1423, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1424, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1425, "handleOk()");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1426, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1427, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1428, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1429, "span", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1430, "[nzLoading]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1431, "span", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1432, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1433, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1434, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1435, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1436, "isConfirmLoading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1437, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1438, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1439, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1440, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1441, "Custom Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1442, "span", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1443, "span", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1444, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1445, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1446, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1447, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1448, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1449, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1450, "span", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1451, "span", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1452, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1453, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1454, "ng-template");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1455, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1456, ">");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzGutter", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzXl", 12)("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-modal-demo-basic")("nzLink", "components-modal-demo-basic")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/modal/demo/basic.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-modal-demo-footer")("nzLink", "components-modal-demo-footer")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/modal/demo/footer.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-modal-demo-confirm")("nzLink", "components-modal-demo-confirm")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/modal/demo/confirm.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-modal-demo-info")("nzLink", "components-modal-demo-info")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/modal/demo/info.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-modal-demo-manual")("nzLink", "components-modal-demo-manual")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/modal/demo/manual.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-modal-demo-service")("nzLink", "components-modal-demo-service")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/modal/demo/service.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzXl", 12)("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-modal-demo-async")("nzLink", "components-modal-demo-async")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/modal/demo/async.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-modal-demo-footer2")("nzLink", "components-modal-demo-footer2")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/modal/demo/footer2.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-modal-demo-confirm-promise")("nzLink", "components-modal-demo-confirm-promise")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/modal/demo/confirm-promise.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-modal-demo-locale")("nzLink", "components-modal-demo-locale")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/modal/demo/locale.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-modal-demo-position")("nzLink", "components-modal-demo-position")("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/modal/demo/position.md");
    } }, directives: [ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_2__["NzAffixComponent"], ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_3__["NzAnchorComponent"], ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_3__["NzAnchorLinkComponent"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__["NzIconDirective"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_6__["NzTooltipDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__["NzRowDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__["NzColDirective"], _share_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_1__["NzCodeBoxComponent"], _basic__WEBPACK_IMPORTED_MODULE_8__["NzDemoModalBasicComponent"], _footer__WEBPACK_IMPORTED_MODULE_9__["NzDemoModalFooterComponent"], _confirm__WEBPACK_IMPORTED_MODULE_10__["NzDemoModalConfirmComponent"], _info__WEBPACK_IMPORTED_MODULE_11__["NzDemoModalInfoComponent"], _manual__WEBPACK_IMPORTED_MODULE_12__["NzDemoModalManualComponent"], _service__WEBPACK_IMPORTED_MODULE_13__["NzDemoModalServiceComponent"], _async__WEBPACK_IMPORTED_MODULE_14__["NzDemoModalAsyncComponent"], _footer2__WEBPACK_IMPORTED_MODULE_15__["NzDemoModalFooter2Component"], _confirm_promise__WEBPACK_IMPORTED_MODULE_16__["NzDemoModalConfirmPromiseComponent"], _locale__WEBPACK_IMPORTED_MODULE_17__["NzDemoModalLocaleComponent"], _position__WEBPACK_IMPORTED_MODULE_18__["NzDemoModalPositionComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoModalZhComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-demo-modal',
                preserveWhitespaces: false,
                templateUrl: './zh.html'
            }]
    }], null, { codeBoxes: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"],
            args: [_share_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_1__["NzCodeBoxComponent"]]
        }] }); })();


/***/ })

};;
//# sourceMappingURL=modal-index-module.js.map