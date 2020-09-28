exports.ids = ["tabs-index-module"];
exports.modules = {

/***/ "+57U":
/*!*******************************************!*\
  !*** ./site/doc/app/tabs/index.module.ts ***!
  \*******************************************/
/*! exports provided: NzDemoTabsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoTabsModule", function() { return NzDemoTabsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _share_share_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../share/share.module */ "WGB2");
/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./module */ "fJ/l");
/* harmony import */ var _basic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./basic */ "PLD8");
/* harmony import */ var _card_top__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./card-top */ "ZomC");
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./card */ "BME6");
/* harmony import */ var _custom_add_trigger__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./custom-add-trigger */ "M0uS");
/* harmony import */ var _disabled__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./disabled */ "R4j6");
/* harmony import */ var _editable_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./editable-card */ "nFcJ");
/* harmony import */ var _extra__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./extra */ "vXZ+");
/* harmony import */ var _guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./guard */ "Uyq6");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./icon */ "bCcK");
/* harmony import */ var _lazy__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./lazy */ "p3n0");
/* harmony import */ var _link_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./link-router */ "tgpG");
/* harmony import */ var _position__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./position */ "ZBp+");
/* harmony import */ var _size__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./size */ "3HWu");
/* harmony import */ var _slide__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./slide */ "1iOz");
/* harmony import */ var _zh_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./zh.component */ "reCB");
/* harmony import */ var _en_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./en.component */ "romM");
/* harmony import */ var ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/tabs */ "iimT");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/icon */ "MOHP");
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-zorro-antd/select */ "sBNc");
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng-zorro-antd/radio */ "WqIj");
/* harmony import */ var ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ng-zorro-antd/input-number */ "nJzI");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ng-zorro-antd/button */ "TZWX");
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ng-zorro-antd/modal */ "KIP6");





























class NzDemoTabsModule {
}
/** @nocollapse */ NzDemoTabsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NzDemoTabsModule });
/** @nocollapse */ NzDemoTabsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NzDemoTabsModule_Factory(t) { return new (t || NzDemoTabsModule)(); }, imports: [[
            _share_share_module__WEBPACK_IMPORTED_MODULE_2__["ShareModule"],
            ..._module__WEBPACK_IMPORTED_MODULE_3__["moduleList"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                { path: 'en', component: _en_component__WEBPACK_IMPORTED_MODULE_19__["NzDemoTabsEnComponent"] },
                { path: 'zh', component: _zh_component__WEBPACK_IMPORTED_MODULE_18__["NzDemoTabsZhComponent"] }
            ])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NzDemoTabsModule, { declarations: [_basic__WEBPACK_IMPORTED_MODULE_4__["NzDemoTabsBasicComponent"],
        _card_top__WEBPACK_IMPORTED_MODULE_5__["NzDemoTabsCardTopComponent"],
        _card__WEBPACK_IMPORTED_MODULE_6__["NzDemoTabsCardComponent"],
        _custom_add_trigger__WEBPACK_IMPORTED_MODULE_7__["NzDemoTabsCustomAddTriggerComponent"],
        _disabled__WEBPACK_IMPORTED_MODULE_8__["NzDemoTabsDisabledComponent"],
        _editable_card__WEBPACK_IMPORTED_MODULE_9__["NzDemoTabsEditableCardComponent"],
        _extra__WEBPACK_IMPORTED_MODULE_10__["NzDemoTabsExtraComponent"],
        _guard__WEBPACK_IMPORTED_MODULE_11__["NzDemoTabsGuardComponent"],
        _icon__WEBPACK_IMPORTED_MODULE_12__["NzDemoTabsIconComponent"],
        _lazy__WEBPACK_IMPORTED_MODULE_13__["NzDemoTabsLazyComponent"],
        _lazy__WEBPACK_IMPORTED_MODULE_13__["NzDemoTabContentLazyComponent"],
        _lazy__WEBPACK_IMPORTED_MODULE_13__["NzDemoTabContentEagerlyComponent"],
        _link_router__WEBPACK_IMPORTED_MODULE_14__["NzDemoTabsLinkRouterComponent"],
        _position__WEBPACK_IMPORTED_MODULE_15__["NzDemoTabsPositionComponent"],
        _size__WEBPACK_IMPORTED_MODULE_16__["NzDemoTabsSizeComponent"],
        _slide__WEBPACK_IMPORTED_MODULE_17__["NzDemoTabsSlideComponent"],
        _zh_component__WEBPACK_IMPORTED_MODULE_18__["NzDemoTabsZhComponent"],
        _en_component__WEBPACK_IMPORTED_MODULE_19__["NzDemoTabsEnComponent"]], imports: [_share_share_module__WEBPACK_IMPORTED_MODULE_2__["ShareModule"], ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_20__["NzTabsModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_21__["NzIconModule"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_22__["NzSelectModule"], ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_23__["NzRadioModule"], ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_24__["NzInputNumberModule"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_25__["NzButtonModule"], ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_26__["NzModalModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoTabsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _share_share_module__WEBPACK_IMPORTED_MODULE_2__["ShareModule"],
                    ..._module__WEBPACK_IMPORTED_MODULE_3__["moduleList"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                        { path: 'en', component: _en_component__WEBPACK_IMPORTED_MODULE_19__["NzDemoTabsEnComponent"] },
                        { path: 'zh', component: _zh_component__WEBPACK_IMPORTED_MODULE_18__["NzDemoTabsZhComponent"] }
                    ])
                ],
                declarations: [
                    _basic__WEBPACK_IMPORTED_MODULE_4__["NzDemoTabsBasicComponent"],
                    _card_top__WEBPACK_IMPORTED_MODULE_5__["NzDemoTabsCardTopComponent"],
                    _card__WEBPACK_IMPORTED_MODULE_6__["NzDemoTabsCardComponent"],
                    _custom_add_trigger__WEBPACK_IMPORTED_MODULE_7__["NzDemoTabsCustomAddTriggerComponent"],
                    _disabled__WEBPACK_IMPORTED_MODULE_8__["NzDemoTabsDisabledComponent"],
                    _editable_card__WEBPACK_IMPORTED_MODULE_9__["NzDemoTabsEditableCardComponent"],
                    _extra__WEBPACK_IMPORTED_MODULE_10__["NzDemoTabsExtraComponent"],
                    _guard__WEBPACK_IMPORTED_MODULE_11__["NzDemoTabsGuardComponent"],
                    _icon__WEBPACK_IMPORTED_MODULE_12__["NzDemoTabsIconComponent"],
                    _lazy__WEBPACK_IMPORTED_MODULE_13__["NzDemoTabsLazyComponent"],
                    _lazy__WEBPACK_IMPORTED_MODULE_13__["NzDemoTabContentLazyComponent"],
                    _lazy__WEBPACK_IMPORTED_MODULE_13__["NzDemoTabContentEagerlyComponent"],
                    _link_router__WEBPACK_IMPORTED_MODULE_14__["NzDemoTabsLinkRouterComponent"],
                    _position__WEBPACK_IMPORTED_MODULE_15__["NzDemoTabsPositionComponent"],
                    _size__WEBPACK_IMPORTED_MODULE_16__["NzDemoTabsSizeComponent"],
                    _slide__WEBPACK_IMPORTED_MODULE_17__["NzDemoTabsSlideComponent"],
                    _zh_component__WEBPACK_IMPORTED_MODULE_18__["NzDemoTabsZhComponent"],
                    _en_component__WEBPACK_IMPORTED_MODULE_19__["NzDemoTabsEnComponent"],
                ],
                entryComponents: [
                    _lazy__WEBPACK_IMPORTED_MODULE_13__["NzDemoTabContentLazyComponent"],
                    _lazy__WEBPACK_IMPORTED_MODULE_13__["NzDemoTabContentEagerlyComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "1iOz":
/*!************************************!*\
  !*** ./site/doc/app/tabs/slide.ts ***!
  \************************************/
/*! exports provided: NzDemoTabsSlideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoTabsSlideComponent", function() { return NzDemoTabsSlideComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/radio */ "WqIj");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/input-number */ "nJzI");
/* harmony import */ var ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/tabs */ "iimT");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function NzDemoTabsSlideComponent_nz_tab_7_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-tab", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzSelect", function NzDemoTabsSlideComponent_nz_tab_7_Template_nz_tab_nzSelect_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const tab_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.log(["select", tab_r1]); })("nzClick", function NzDemoTabsSlideComponent_nz_tab_7_Template_nz_tab_nzClick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const tab_r1 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.log(["click", tab_r1]); })("nzContextmenu", function NzDemoTabsSlideComponent_nz_tab_7_Template_nz_tab_nzContextmenu_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const tab_r1 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.log(["contextmenu", tab_r1]); })("nzDeselect", function NzDemoTabsSlideComponent_nz_tab_7_Template_nz_tab_nzDeselect_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const tab_r1 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.log(["deselect", tab_r1]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tab_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzTitle", tab_r1.name)("nzDisabled", tab_r1.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", tab_r1.content, " ");
} }
class NzDemoTabsSlideComponent {
    constructor() {
        this.tabs = [];
        this.nzTabPosition = 'top';
        this.selectedIndex = 0;
    }
    /* tslint:disable-next-line:no-any */
    log(args) {
        console.log(args);
    }
    ngOnInit() {
        for (let i = 0; i < 30; i++) {
            this.tabs.push({
                name: `Tab ${i}`,
                disabled: i === 28,
                content: `Content of tab ${i}`
            });
        }
    }
}
/** @nocollapse */ NzDemoTabsSlideComponent.ɵfac = function NzDemoTabsSlideComponent_Factory(t) { return new (t || NzDemoTabsSlideComponent)(); };
/** @nocollapse */ NzDemoTabsSlideComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoTabsSlideComponent, selectors: [["nz-demo-tabs-slide"]], decls: 8, vars: 9, consts: [[2, "margin-bottom", "8px", 3, "ngModel", "ngModelChange"], ["nz-radio-button", "", 3, "nzValue"], [2, "float", "right", 3, "nzMin", "nzMax", "ngModel", "ngModelChange"], [2, "height", "220px", 3, "nzTabPosition", "nzSelectedIndex", "nzSelectedIndexChange", "nzSelectChange"], [3, "nzTitle", "nzDisabled", "nzSelect", "nzClick", "nzContextmenu", "nzDeselect", 4, "ngFor", "ngForOf"], [3, "nzTitle", "nzDisabled", "nzSelect", "nzClick", "nzContextmenu", "nzDeselect"]], template: function NzDemoTabsSlideComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-radio-group", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoTabsSlideComponent_Template_nz_radio_group_ngModelChange_0_listener($event) { return ctx.nzTabPosition = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Horizontal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Vertical");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nz-input-number", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoTabsSlideComponent_Template_nz_input_number_ngModelChange_5_listener($event) { return ctx.selectedIndex = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nz-tabset", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzSelectedIndexChange", function NzDemoTabsSlideComponent_Template_nz_tabset_nzSelectedIndexChange_6_listener($event) { return ctx.selectedIndex = $event; })("nzSelectChange", function NzDemoTabsSlideComponent_Template_nz_tabset_nzSelectChange_6_listener($event) { return ctx.log([$event]); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, NzDemoTabsSlideComponent_nz_tab_7_Template, 2, 3, "nz-tab", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.nzTabPosition);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", "top");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", "left");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzMin", 0)("nzMax", 29)("ngModel", ctx.selectedIndex);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzTabPosition", ctx.nzTabPosition)("nzSelectedIndex", ctx.selectedIndex);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tabs);
    } }, directives: [ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_1__["NzRadioGroupComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_1__["NzRadioComponent"], ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_1__["NzRadioButtonDirective"], ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_3__["NzInputNumberComponent"], ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_4__["NzTabSetComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_4__["NzTabComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoTabsSlideComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-demo-tabs-slide',
                template: `
    <nz-radio-group [(ngModel)]="nzTabPosition" style="margin-bottom: 8px;">
      <label nz-radio-button [nzValue]="'top'">Horizontal</label>
      <label nz-radio-button [nzValue]="'left'">Vertical</label>
    </nz-radio-group>
    <nz-input-number style="float:right;" [nzMin]="0" [nzMax]="29" [(ngModel)]="selectedIndex"></nz-input-number>

    <nz-tabset style="height:220px;" [nzTabPosition]="nzTabPosition" [(nzSelectedIndex)]="selectedIndex" (nzSelectChange)="log([$event])">
      <nz-tab
        *ngFor="let tab of tabs"
        [nzTitle]="tab.name"
        [nzDisabled]="tab.disabled"
        (nzSelect)="log(['select', tab])"
        (nzClick)="log(['click', tab])"
        (nzContextmenu)="log(['contextmenu', tab])"
        (nzDeselect)="log(['deselect', tab])"
      >
        {{ tab.content }}
      </nz-tab>
    </nz-tabset>
  `
            }]
    }], null, null); })();


/***/ }),

/***/ "3HWu":
/*!***********************************!*\
  !*** ./site/doc/app/tabs/size.ts ***!
  \***********************************/
/*! exports provided: NzDemoTabsSizeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoTabsSizeComponent", function() { return NzDemoTabsSizeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/radio */ "WqIj");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/tabs */ "iimT");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function NzDemoTabsSizeComponent_nz_tab_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-tab", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tab_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzTitle", "Tab " + tab_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Content of tab ", tab_r1, "");
} }
class NzDemoTabsSizeComponent {
    constructor() {
        this.size = 'small';
        this.tabs = [1, 2, 3];
    }
}
/** @nocollapse */ NzDemoTabsSizeComponent.ɵfac = function NzDemoTabsSizeComponent_Factory(t) { return new (t || NzDemoTabsSizeComponent)(); };
/** @nocollapse */ NzDemoTabsSizeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoTabsSizeComponent, selectors: [["nz-demo-tabs-size"]], decls: 12, vars: 3, consts: [[3, "ngModel", "ngModelChange"], ["nz-radio-button", "", "nzValue", "small"], ["nz-radio-button", "", "nzValue", "default"], ["nz-radio-button", "", "nzValue", "large"], [3, "nzSize"], [3, "nzTitle", 4, "ngFor", "ngForOf"], [3, "nzTitle"]], template: function NzDemoTabsSizeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-radio-group", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoTabsSizeComponent_Template_nz_radio_group_ngModelChange_0_listener($event) { return ctx.size = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Large");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "nz-tabset", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, NzDemoTabsSizeComponent_nz_tab_11_Template, 2, 2, "nz-tab", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.size);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSize", ctx.size);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tabs);
    } }, directives: [ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_1__["NzRadioGroupComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_1__["NzRadioComponent"], ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_1__["NzRadioButtonDirective"], ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_3__["NzTabSetComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_3__["NzTabComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoTabsSizeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-demo-tabs-size',
                template: `
    <nz-radio-group [(ngModel)]="size">
      <label nz-radio-button nzValue="small"><span>Small</span></label>
      <label nz-radio-button nzValue="default"><span>Default</span></label>
      <label nz-radio-button nzValue="large"><span>Large</span></label>
    </nz-radio-group>
    <nz-tabset [nzSize]="size">
      <nz-tab *ngFor="let tab of tabs" [nzTitle]="'Tab ' + tab">Content of tab {{ tab }}</nz-tab>
    </nz-tabset>
  `
            }]
    }], null, null); })();


/***/ }),

/***/ "BME6":
/*!***********************************!*\
  !*** ./site/doc/app/tabs/card.ts ***!
  \***********************************/
/*! exports provided: NzDemoTabsCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoTabsCardComponent", function() { return NzDemoTabsCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/tabs */ "iimT");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function NzDemoTabsCardComponent_nz_tab_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-tab", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tab_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzTitle", "Tab" + tab_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Content of Tab Pane ", tab_r1, "");
} }
class NzDemoTabsCardComponent {
    constructor() {
        this.tabs = [1, 2, 3];
    }
}
/** @nocollapse */ NzDemoTabsCardComponent.ɵfac = function NzDemoTabsCardComponent_Factory(t) { return new (t || NzDemoTabsCardComponent)(); };
/** @nocollapse */ NzDemoTabsCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoTabsCardComponent, selectors: [["nz-demo-tabs-card"]], decls: 2, vars: 1, consts: [["nzType", "card"], [3, "nzTitle", 4, "ngFor", "ngForOf"], [3, "nzTitle"]], template: function NzDemoTabsCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-tabset", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzDemoTabsCardComponent_nz_tab_1_Template, 2, 2, "nz-tab", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tabs);
    } }, directives: [ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_1__["NzTabSetComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_1__["NzTabComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoTabsCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-demo-tabs-card',
                template: `
    <nz-tabset nzType="card">
      <nz-tab *ngFor="let tab of tabs" [nzTitle]="'Tab' + tab">Content of Tab Pane {{ tab }}</nz-tab>
    </nz-tabset>
  `
            }]
    }], null, null); })();


/***/ }),

/***/ "M0uS":
/*!*************************************************!*\
  !*** ./site/doc/app/tabs/custom-add-trigger.ts ***!
  \*************************************************/
/*! exports provided: NzDemoTabsCustomAddTriggerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoTabsCustomAddTriggerComponent", function() { return NzDemoTabsCustomAddTriggerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/button */ "TZWX");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "vdzw");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "uLhK");
/* harmony import */ var ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/tabs */ "iimT");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function NzDemoTabsCustomAddTriggerComponent_nz_tab_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-tab", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tab_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzClosable", i_r2 > 1)("nzTitle", tab_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Content of ", tab_r1, "");
} }
class NzDemoTabsCustomAddTriggerComponent {
    constructor() {
        this.index = 0;
        this.tabs = ['Tab 1', 'Tab 2'];
    }
    closeTab({ index }) {
        this.tabs.splice(index, 1);
    }
    newTab() {
        this.tabs.push('New Tab');
        this.index = this.tabs.length - 1;
    }
}
/** @nocollapse */ NzDemoTabsCustomAddTriggerComponent.ɵfac = function NzDemoTabsCustomAddTriggerComponent_Factory(t) { return new (t || NzDemoTabsCustomAddTriggerComponent)(); };
/** @nocollapse */ NzDemoTabsCustomAddTriggerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoTabsCustomAddTriggerComponent, selectors: [["nz-demo-tabs-custom-add-trigger"]], decls: 5, vars: 2, consts: [[2, "margin-bottom", "16px"], ["nz-button", "", 3, "click"], ["nzType", "editable-card", "nzHideAdd", "", 3, "nzSelectedIndex", "nzSelectedIndexChange", "nzClose"], [3, "nzClosable", "nzTitle", 4, "ngFor", "ngForOf"], [3, "nzClosable", "nzTitle"]], template: function NzDemoTabsCustomAddTriggerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoTabsCustomAddTriggerComponent_Template_button_click_1_listener() { return ctx.newTab(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "ADD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nz-tabset", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzSelectedIndexChange", function NzDemoTabsCustomAddTriggerComponent_Template_nz_tabset_nzSelectedIndexChange_3_listener($event) { return ctx.index = $event; })("nzClose", function NzDemoTabsCustomAddTriggerComponent_Template_nz_tabset_nzClose_3_listener($event) { return ctx.closeTab($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NzDemoTabsCustomAddTriggerComponent_nz_tab_4_Template, 2, 3, "nz-tab", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSelectedIndex", ctx.index);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tabs);
    } }, directives: [ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_1__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_2__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_3__["ɵNzTransitionPatchDirective"], ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_4__["NzTabSetComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_4__["NzTabComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoTabsCustomAddTriggerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-demo-tabs-custom-add-trigger',
                template: `
    <div style="margin-bottom: 16px;">
      <button nz-button (click)="newTab()">ADD</button>
    </div>
    <nz-tabset [(nzSelectedIndex)]="index" nzType="editable-card" nzHideAdd (nzClose)="closeTab($event)">
      <nz-tab *ngFor="let tab of tabs; let i = index" [nzClosable]="i > 1" [nzTitle]="tab">Content of {{ tab }}</nz-tab>
    </nz-tabset>
  `
            }]
    }], null, null); })();


/***/ }),

/***/ "PLD8":
/*!************************************!*\
  !*** ./site/doc/app/tabs/basic.ts ***!
  \************************************/
/*! exports provided: NzDemoTabsBasicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoTabsBasicComponent", function() { return NzDemoTabsBasicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/tabs */ "iimT");



class NzDemoTabsBasicComponent {
}
/** @nocollapse */ NzDemoTabsBasicComponent.ɵfac = function NzDemoTabsBasicComponent_Factory(t) { return new (t || NzDemoTabsBasicComponent)(); };
/** @nocollapse */ NzDemoTabsBasicComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoTabsBasicComponent, selectors: [["nz-demo-tabs-basic"]], decls: 7, vars: 0, consts: [["nzTitle", "Tab 1"], ["nzTitle", "Tab 2"], ["nzTitle", "Tab 3"]], template: function NzDemoTabsBasicComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-tabset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-tab", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Content of Tab Pane 1 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nz-tab", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Content of Tab Pane 2 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nz-tab", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Content of Tab Pane 3 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_1__["NzTabSetComponent"], ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_1__["NzTabComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoTabsBasicComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-demo-tabs-basic',
                template: `
    <nz-tabset>
      <nz-tab nzTitle="Tab 1">
        Content of Tab Pane 1
      </nz-tab>
      <nz-tab nzTitle="Tab 2">
        Content of Tab Pane 2
      </nz-tab>
      <nz-tab nzTitle="Tab 3">
        Content of Tab Pane 3
      </nz-tab>
    </nz-tabset>
  `
            }]
    }], null, null); })();


/***/ }),

/***/ "R4j6":
/*!***************************************!*\
  !*** ./site/doc/app/tabs/disabled.ts ***!
  \***************************************/
/*! exports provided: NzDemoTabsDisabledComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoTabsDisabledComponent", function() { return NzDemoTabsDisabledComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/tabs */ "iimT");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function NzDemoTabsDisabledComponent_nz_tab_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-tab", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tab_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzTitle", tab_r1.name)("nzDisabled", tab_r1.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", tab_r1.name, " ");
} }
class NzDemoTabsDisabledComponent {
    constructor() {
        this.tabs = [
            {
                name: 'Tab 1',
                disabled: false
            },
            {
                name: 'Tab 2',
                disabled: true
            },
            {
                name: 'Tab 3',
                disabled: false
            }
        ];
    }
}
/** @nocollapse */ NzDemoTabsDisabledComponent.ɵfac = function NzDemoTabsDisabledComponent_Factory(t) { return new (t || NzDemoTabsDisabledComponent)(); };
/** @nocollapse */ NzDemoTabsDisabledComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoTabsDisabledComponent, selectors: [["nz-demo-tabs-disabled"]], decls: 2, vars: 1, consts: [[3, "nzTitle", "nzDisabled", 4, "ngFor", "ngForOf"], [3, "nzTitle", "nzDisabled"]], template: function NzDemoTabsDisabledComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-tabset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzDemoTabsDisabledComponent_nz_tab_1_Template, 2, 3, "nz-tab", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tabs);
    } }, directives: [ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_1__["NzTabSetComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_1__["NzTabComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoTabsDisabledComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-demo-tabs-disabled',
                template: `
    <nz-tabset>
      <nz-tab *ngFor="let tab of tabs" [nzTitle]="tab.name" [nzDisabled]="tab.disabled">
        {{ tab.name }}
      </nz-tab>
    </nz-tabset>
  `
            }]
    }], null, null); })();


/***/ }),

/***/ "Uyq6":
/*!************************************!*\
  !*** ./site/doc/app/tabs/guard.ts ***!
  \************************************/
/*! exports provided: NzDemoTabsGuardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoTabsGuardComponent", function() { return NzDemoTabsGuardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/modal */ "KIP6");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/tabs */ "iimT");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");







function NzDemoTabsGuardComponent_nz_tab_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-tab", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tab_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzTitle", "Tab" + tab_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Content of tab ", tab_r1, "");
} }
class NzDemoTabsGuardComponent {
    constructor(modal) {
        this.modal = modal;
        this.tabs = [1, 2, 3, 4];
        this.canDeactivate = (fromIndex, toIndex) => {
            switch (fromIndex) {
                case 0:
                    return toIndex === 1;
                case 1:
                    return Promise.resolve(toIndex === 2);
                case 2:
                    return this.confirm();
                default:
                    return true;
            }
        };
    }
    confirm() {
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](observer => {
            this.modal.confirm({
                nzTitle: 'Are you sure you want to leave this tab?',
                nzOnOk: () => {
                    observer.next(true);
                    observer.complete();
                },
                nzOnCancel: () => {
                    observer.next(false);
                    observer.complete();
                }
            });
        });
    }
}
/** @nocollapse */ NzDemoTabsGuardComponent.ɵfac = function NzDemoTabsGuardComponent_Factory(t) { return new (t || NzDemoTabsGuardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_1__["NzModalService"])); };
/** @nocollapse */ NzDemoTabsGuardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoTabsGuardComponent, selectors: [["nz-demo-tabs-guard"]], decls: 2, vars: 2, consts: [[3, "nzCanDeactivate"], [3, "nzTitle", 4, "ngFor", "ngForOf"], [3, "nzTitle"]], template: function NzDemoTabsGuardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-tabset", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzDemoTabsGuardComponent_nz_tab_1_Template, 2, 2, "nz-tab", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzCanDeactivate", ctx.canDeactivate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tabs);
    } }, directives: [ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_3__["NzTabSetComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_3__["NzTabComponent"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoTabsGuardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-demo-tabs-guard',
                template: `
    <nz-tabset [nzCanDeactivate]="canDeactivate">
      <nz-tab *ngFor="let tab of tabs" [nzTitle]="'Tab' + tab">Content of tab {{ tab }}</nz-tab>
    </nz-tabset>
  `,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_1__["NzModalService"] }]; }, null); })();


/***/ }),

/***/ "ZBp+":
/*!***************************************!*\
  !*** ./site/doc/app/tabs/position.ts ***!
  \***************************************/
/*! exports provided: NzDemoTabsPositionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoTabsPositionComponent", function() { return NzDemoTabsPositionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/select */ "sBNc");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/tabs */ "iimT");






function NzDemoTabsPositionComponent_nz_option_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-option", 5);
} if (rf & 2) {
    const option_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzLabel", option_r2.label)("nzValue", option_r2.value);
} }
function NzDemoTabsPositionComponent_nz_tab_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-tab", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tab_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzTitle", "Tab " + tab_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Content of tab ", tab_r3, "");
} }
class NzDemoTabsPositionComponent {
    constructor() {
        this.position = 'top';
        this.tabs = [1, 2, 3];
        this.options = [
            { value: 'top', label: 'top' },
            { value: 'left', label: 'left' },
            { value: 'right', label: 'right' },
            { value: 'bottom', label: 'bottom' }
        ];
    }
}
/** @nocollapse */ NzDemoTabsPositionComponent.ɵfac = function NzDemoTabsPositionComponent_Factory(t) { return new (t || NzDemoTabsPositionComponent)(); };
/** @nocollapse */ NzDemoTabsPositionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoTabsPositionComponent, selectors: [["nz-demo-tabs-position"]], decls: 6, vars: 4, consts: [[2, "margin-bottom", "16px"], [2, "width", "80px", 3, "ngModel", "ngModelChange"], [3, "nzLabel", "nzValue", 4, "ngFor", "ngForOf"], [3, "nzTabPosition"], [3, "nzTitle", 4, "ngFor", "ngForOf"], [3, "nzLabel", "nzValue"], [3, "nzTitle"]], template: function NzDemoTabsPositionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Tab position\uFF1A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nz-select", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzDemoTabsPositionComponent_Template_nz_select_ngModelChange_2_listener($event) { return ctx.position = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NzDemoTabsPositionComponent_nz_option_3_Template, 1, 2, "nz-option", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nz-tabset", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NzDemoTabsPositionComponent_nz_tab_5_Template, 2, 2, "nz-tab", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.position);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.options);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzTabPosition", ctx.position);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tabs);
    } }, directives: [ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_1__["NzSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_4__["NzTabSetComponent"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_1__["NzOptionComponent"], ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_4__["NzTabComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoTabsPositionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-demo-tabs-position',
                template: `
    <div style="margin-bottom: 16px;">
      Tab position：
      <nz-select [(ngModel)]="position" style="width: 80px;">
        <nz-option *ngFor="let option of options" [nzLabel]="option.label" [nzValue]="option.value"></nz-option>
      </nz-select>
    </div>
    <nz-tabset [nzTabPosition]="position">
      <nz-tab *ngFor="let tab of tabs" [nzTitle]="'Tab ' + tab">Content of tab {{ tab }}</nz-tab>
    </nz-tabset>
  `
            }]
    }], null, null); })();


/***/ }),

/***/ "ZomC":
/*!***************************************!*\
  !*** ./site/doc/app/tabs/card-top.ts ***!
  \***************************************/
/*! exports provided: NzDemoTabsCardTopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoTabsCardTopComponent", function() { return NzDemoTabsCardTopComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/tabs */ "iimT");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function NzDemoTabsCardTopComponent_nz_tab_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-tab", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tab_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzTitle", "Tab Title " + tab_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Content of Tab Pane ", tab_r1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Content of Tab Pane ", tab_r1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Content of Tab Pane ", tab_r1, "");
} }
class NzDemoTabsCardTopComponent {
    constructor() {
        this.tabs = [1, 2, 3];
    }
}
/** @nocollapse */ NzDemoTabsCardTopComponent.ɵfac = function NzDemoTabsCardTopComponent_Factory(t) { return new (t || NzDemoTabsCardTopComponent)(); };
/** @nocollapse */ NzDemoTabsCardTopComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoTabsCardTopComponent, selectors: [["nz-demo-tabs-card-top"]], decls: 3, vars: 1, consts: [[1, "card-container"], ["nzType", "card"], [3, "nzTitle", 4, "ngFor", "ngForOf"], [3, "nzTitle"]], template: function NzDemoTabsCardTopComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-tabset", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzDemoTabsCardTopComponent_nz_tab_2_Template, 7, 4, "nz-tab", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tabs);
    } }, directives: [ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_1__["NzTabSetComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_1__["NzTabComponent"]], styles: ["[_nghost-%COMP%] {\n        background: #f5f5f5;\n        overflow: hidden;\n        padding: 24px;\n        display: block;\n      }\n\n      .card-container[_ngcontent-%COMP%]     p {\n        margin: 0;\n      }\n      .card-container[_ngcontent-%COMP%]     > .ant-tabs-card .ant-tabs-content {\n        height: 120px;\n        margin-top: -16px;\n      }\n      .card-container[_ngcontent-%COMP%]     > .ant-tabs-card .ant-tabs-content > .ant-tabs-tabpane {\n        background: #fff;\n        padding: 16px;\n      }\n      .card-container[_ngcontent-%COMP%]     > .ant-tabs-card > .ant-tabs-nav::before {\n        display: none;\n      }\n      .card-container[_ngcontent-%COMP%]     > .ant-tabs-card .ant-tabs-tab {\n        border-color: transparent;\n        background: transparent;\n      }\n      .card-container[_ngcontent-%COMP%]     > .ant-tabs-card .ant-tabs-tab-active {\n        border-color: #fff;\n        background: #fff;\n      }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoTabsCardTopComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-demo-tabs-card-top',
                template: `
    <div class="card-container">
      <nz-tabset nzType="card">
        <nz-tab *ngFor="let tab of tabs" [nzTitle]="'Tab Title ' + tab">
          <p>Content of Tab Pane {{ tab }}</p>
          <p>Content of Tab Pane {{ tab }}</p>
          <p>Content of Tab Pane {{ tab }}</p>
        </nz-tab>
      </nz-tabset>
    </div>
  `,
                styles: [
                    `
      :host {
        background: #f5f5f5;
        overflow: hidden;
        padding: 24px;
        display: block;
      }

      .card-container ::ng-deep p {
        margin: 0;
      }
      .card-container ::ng-deep > .ant-tabs-card .ant-tabs-content {
        height: 120px;
        margin-top: -16px;
      }
      .card-container ::ng-deep > .ant-tabs-card .ant-tabs-content > .ant-tabs-tabpane {
        background: #fff;
        padding: 16px;
      }
      .card-container ::ng-deep > .ant-tabs-card > .ant-tabs-nav::before {
        display: none;
      }
      .card-container ::ng-deep > .ant-tabs-card .ant-tabs-tab {
        border-color: transparent;
        background: transparent;
      }
      .card-container ::ng-deep > .ant-tabs-card .ant-tabs-tab-active {
        border-color: #fff;
        background: #fff;
      }
    `
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "bCcK":
/*!***********************************!*\
  !*** ./site/doc/app/tabs/icon.ts ***!
  \***********************************/
/*! exports provided: NzDemoTabsIconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoTabsIconComponent", function() { return NzDemoTabsIconComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/tabs */ "iimT");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/icon */ "MOHP");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "uLhK");






function NzDemoTabsIconComponent_nz_tab_1_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
} if (rf & 2) {
    const tab_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", tab_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", tab_r1.name, " ");
} }
function NzDemoTabsIconComponent_nz_tab_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-tab", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzDemoTabsIconComponent_nz_tab_1_ng_template_1_Template, 2, 2, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tab_r1 = ctx.$implicit;
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzTitle", _r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", tab_r1.name, " ");
} }
class NzDemoTabsIconComponent {
    constructor() {
        this.tabs = [
            {
                name: 'Tab 1',
                icon: 'apple'
            },
            {
                name: 'Tab 2',
                icon: 'android'
            }
        ];
    }
}
/** @nocollapse */ NzDemoTabsIconComponent.ɵfac = function NzDemoTabsIconComponent_Factory(t) { return new (t || NzDemoTabsIconComponent)(); };
/** @nocollapse */ NzDemoTabsIconComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoTabsIconComponent, selectors: [["nz-demo-tabs-icon"]], decls: 2, vars: 1, consts: [[3, "nzTitle", 4, "ngFor", "ngForOf"], [3, "nzTitle"], ["titleTemplate", ""], ["nz-icon", "", 3, "nzType"]], template: function NzDemoTabsIconComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-tabset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzDemoTabsIconComponent_nz_tab_1_Template, 4, 2, "nz-tab", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tabs);
    } }, directives: [ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_1__["NzTabSetComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_1__["NzTabComponent"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_3__["NzIconDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_4__["ɵNzTransitionPatchDirective"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoTabsIconComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-demo-tabs-icon',
                template: `
    <nz-tabset>
      <nz-tab *ngFor="let tab of tabs" [nzTitle]="titleTemplate">
        <ng-template #titleTemplate>
          <i nz-icon [nzType]="tab.icon"></i>
          {{ tab.name }}
        </ng-template>
        {{ tab.name }}
      </nz-tab>
    </nz-tabset>
  `
            }]
    }], null, null); })();


/***/ }),

/***/ "fJ/l":
/*!*************************************!*\
  !*** ./site/doc/app/tabs/module.ts ***!
  \*************************************/
/*! exports provided: moduleList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moduleList", function() { return moduleList; });
/* harmony import */ var ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng-zorro-antd/tabs */ "iimT");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/icon */ "MOHP");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/button */ "TZWX");
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/select */ "sBNc");
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/radio */ "WqIj");
/* harmony import */ var ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/input-number */ "nJzI");
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/modal */ "KIP6");







const moduleList = [ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_0__["NzTabsModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_1__["NzIconModule"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_3__["NzSelectModule"], ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_4__["NzRadioModule"], ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_5__["NzInputNumberModule"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__["NzButtonModule"], ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_6__["NzModalModule"]];


/***/ }),

/***/ "nFcJ":
/*!********************************************!*\
  !*** ./site/doc/app/tabs/editable-card.ts ***!
  \********************************************/
/*! exports provided: NzDemoTabsEditableCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoTabsEditableCardComponent", function() { return NzDemoTabsEditableCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/tabs */ "iimT");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function NzDemoTabsEditableCardComponent_nz_tab_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-tab", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tab_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzTitle", tab_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Content of ", tab_r1, "");
} }
class NzDemoTabsEditableCardComponent {
    constructor() {
        this.tabs = ['Tab 1', 'Tab 2'];
        this.selectedIndex = 0;
    }
    closeTab({ index }) {
        this.tabs.splice(index, 1);
    }
    newTab() {
        this.tabs.push('New Tab');
        this.selectedIndex = this.tabs.length;
    }
}
/** @nocollapse */ NzDemoTabsEditableCardComponent.ɵfac = function NzDemoTabsEditableCardComponent_Factory(t) { return new (t || NzDemoTabsEditableCardComponent)(); };
/** @nocollapse */ NzDemoTabsEditableCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoTabsEditableCardComponent, selectors: [["nz-demo-tabs-editable-card"]], decls: 2, vars: 2, consts: [["nzType", "editable-card", 3, "nzSelectedIndex", "nzSelectedIndexChange", "nzAdd", "nzClose"], ["nzClosable", "", 3, "nzTitle", 4, "ngFor", "ngForOf"], ["nzClosable", "", 3, "nzTitle"]], template: function NzDemoTabsEditableCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-tabset", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzSelectedIndexChange", function NzDemoTabsEditableCardComponent_Template_nz_tabset_nzSelectedIndexChange_0_listener($event) { return ctx.selectedIndex = $event; })("nzAdd", function NzDemoTabsEditableCardComponent_Template_nz_tabset_nzAdd_0_listener() { return ctx.newTab(); })("nzClose", function NzDemoTabsEditableCardComponent_Template_nz_tabset_nzClose_0_listener($event) { return ctx.closeTab($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzDemoTabsEditableCardComponent_nz_tab_1_Template, 2, 2, "nz-tab", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSelectedIndex", ctx.selectedIndex);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tabs);
    } }, directives: [ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_1__["NzTabSetComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_1__["NzTabComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoTabsEditableCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-demo-tabs-editable-card',
                template: `
    <nz-tabset [(nzSelectedIndex)]="selectedIndex" nzType="editable-card" (nzAdd)="newTab()" (nzClose)="closeTab($event)">
      <nz-tab *ngFor="let tab of tabs" nzClosable [nzTitle]="tab">Content of {{ tab }}</nz-tab>
    </nz-tabset>
  `
            }]
    }], null, null); })();


/***/ }),

/***/ "p3n0":
/*!***********************************!*\
  !*** ./site/doc/app/tabs/lazy.ts ***!
  \***********************************/
/*! exports provided: NzDemoTabsLazyComponent, NzDemoTabContentLazyComponent, NzDemoTabContentEagerlyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoTabsLazyComponent", function() { return NzDemoTabsLazyComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoTabContentLazyComponent", function() { return NzDemoTabContentLazyComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoTabContentEagerlyComponent", function() { return NzDemoTabContentEagerlyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/tabs */ "iimT");
/* declarations: NzDemoTabContentLazyComponent,NzDemoTabContentEagerlyComponent */



function NzDemoTabsLazyComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-demo-tab-content-lazy");
} }
function NzDemoTabsLazyComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-demo-tab-content-lazy");
} }
class NzDemoTabsLazyComponent {
}
/** @nocollapse */ NzDemoTabsLazyComponent.ɵfac = function NzDemoTabsLazyComponent_Factory(t) { return new (t || NzDemoTabsLazyComponent)(); };
/** @nocollapse */ NzDemoTabsLazyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoTabsLazyComponent, selectors: [["nz-demo-tabs-lazy"]], decls: 9, vars: 0, consts: [["nzTitle", "Tab Eagerly 1"], ["nzTitle", "Tab Eagerly 2"], ["nzTitle", "Tab Lazy 1"], ["nz-tab", ""], ["nzTitle", "Tab Lazy 2"]], template: function NzDemoTabsLazyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-tabset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-tab", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "nz-demo-tab-content-eagerly");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nz-tab", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "nz-demo-tab-content-eagerly");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nz-tab", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NzDemoTabsLazyComponent_ng_template_6_Template, 1, 0, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nz-tab", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NzDemoTabsLazyComponent_ng_template_8_Template, 1, 0, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: function () { return [ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_1__["NzTabSetComponent"], ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_1__["NzTabComponent"], NzDemoTabContentEagerlyComponent, ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_1__["NzTabDirective"], NzDemoTabContentLazyComponent]; }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoTabsLazyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-demo-tabs-lazy',
                template: `
    <nz-tabset>
      <nz-tab nzTitle="Tab Eagerly 1">
        <nz-demo-tab-content-eagerly></nz-demo-tab-content-eagerly>
      </nz-tab>
      <nz-tab nzTitle="Tab Eagerly 2">
        <nz-demo-tab-content-eagerly></nz-demo-tab-content-eagerly>
      </nz-tab>
      <nz-tab nzTitle="Tab Lazy 1">
        <ng-template nz-tab>
          <nz-demo-tab-content-lazy></nz-demo-tab-content-lazy>
        </ng-template>
      </nz-tab>
      <nz-tab nzTitle="Tab Lazy 2">
        <ng-template nz-tab>
          <nz-demo-tab-content-lazy></nz-demo-tab-content-lazy>
        </ng-template>
      </nz-tab>
    </nz-tabset>
  `
            }]
    }], null, null); })();
class NzDemoTabContentLazyComponent {
    ngOnInit() {
        console.log(`I will init when tab active`);
    }
}
/** @nocollapse */ NzDemoTabContentLazyComponent.ɵfac = function NzDemoTabContentLazyComponent_Factory(t) { return new (t || NzDemoTabContentLazyComponent)(); };
/** @nocollapse */ NzDemoTabContentLazyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoTabContentLazyComponent, selectors: [["nz-demo-tab-content-lazy"]], decls: 1, vars: 0, template: function NzDemoTabContentLazyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " lazy ");
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoTabContentLazyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-demo-tab-content-lazy',
                template: `
    lazy
  `
            }]
    }], null, null); })();
class NzDemoTabContentEagerlyComponent {
    ngOnInit() {
        console.log(`I will init eagerly`);
    }
}
/** @nocollapse */ NzDemoTabContentEagerlyComponent.ɵfac = function NzDemoTabContentEagerlyComponent_Factory(t) { return new (t || NzDemoTabContentEagerlyComponent)(); };
/** @nocollapse */ NzDemoTabContentEagerlyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoTabContentEagerlyComponent, selectors: [["nz-demo-tab-content-eagerly"]], decls: 1, vars: 0, template: function NzDemoTabContentEagerlyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " eagerly ");
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoTabContentEagerlyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-demo-tab-content-eagerly',
                template: `
    eagerly
  `
            }]
    }], null, null); })();


/***/ }),

/***/ "reCB":
/*!*******************************************!*\
  !*** ./site/doc/app/tabs/zh.component.ts ***!
  \*******************************************/
/*! exports provided: NzDemoTabsZhComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoTabsZhComponent", function() { return NzDemoTabsZhComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _share_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../share/codebox/codebox.component */ "rKiv");
/* harmony import */ var ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/affix */ "utH8");
/* harmony import */ var ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/anchor */ "l83q");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/icon */ "MOHP");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "uLhK");
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ "pk25");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/grid */ "T+9E");
/* harmony import */ var _basic__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./basic */ "PLD8");
/* harmony import */ var _disabled__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./disabled */ "R4j6");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./icon */ "bCcK");
/* harmony import */ var _slide__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./slide */ "1iOz");
/* harmony import */ var _extra__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./extra */ "vXZ+");
/* harmony import */ var _size__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./size */ "3HWu");
/* harmony import */ var _position__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./position */ "ZBp+");
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./card */ "BME6");
/* harmony import */ var _editable_card__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./editable-card */ "nFcJ");
/* harmony import */ var _card_top__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./card-top */ "ZomC");
/* harmony import */ var _custom_add_trigger__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./custom-add-trigger */ "M0uS");
/* harmony import */ var _lazy__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./lazy */ "p3n0");
/* harmony import */ var _link_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./link-router */ "tgpG");
/* harmony import */ var _guard__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./guard */ "Uyq6");
























class NzDemoTabsZhComponent {
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
/** @nocollapse */ NzDemoTabsZhComponent.ɵfac = function NzDemoTabsZhComponent_Factory(t) { return new (t || NzDemoTabsZhComponent)(); };
/** @nocollapse */ NzDemoTabsZhComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoTabsZhComponent, selectors: [["nz-demo-tabs"]], viewQuery: function NzDemoTabsZhComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_share_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_1__["NzCodeBoxComponent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.codeBoxes = _t);
    } }, decls: 871, vars: 60, consts: [[1, "toc-affix", 3, "nzOffsetTop"], ["nzShowInkInFixed", "", 3, "nzAffix", "nzClick"], ["nzHref", "#components-tabs-demo-basic", "nzTitle", "\u57FA\u672C"], ["nzHref", "#components-tabs-demo-disabled", "nzTitle", "\u7981\u7528"], ["nzHref", "#components-tabs-demo-icon", "nzTitle", "\u56FE\u6807"], ["nzHref", "#components-tabs-demo-slide", "nzTitle", "\u6ED1\u52A8"], ["nzHref", "#components-tabs-demo-extra", "nzTitle", "\u9644\u52A0\u5185\u5BB9"], ["nzHref", "#components-tabs-demo-size", "nzTitle", "\u5927\u5C0F"], ["nzHref", "#components-tabs-demo-position", "nzTitle", "\u4F4D\u7F6E"], ["nzHref", "#components-tabs-demo-card", "nzTitle", "\u5361\u7247\u5F0F\u9875\u7B7E"], ["nzHref", "#components-tabs-demo-editable-card", "nzTitle", "\u65B0\u589E\u548C\u5173\u95ED\u9875\u7B7E"], ["nzHref", "#components-tabs-demo-card-top", "nzTitle", "\u5361\u7247\u5F0F\u9875\u7B7E\u5BB9\u5668"], ["nzHref", "#components-tabs-demo-custom-add-trigger", "nzTitle", "\u81EA\u5B9A\u4E49\u65B0\u589E\u9875\u7B7E\u89E6\u53D1\u5668"], ["nzHref", "#components-tabs-demo-lazy", "nzTitle", "\u61D2\u52A0\u8F7D"], ["nzHref", "#components-tabs-demo-link-router", "nzTitle", "\u8DEF\u7531\u8054\u52A8"], ["nzHref", "#components-tabs-demo-guard", "nzTitle", "\u6807\u7B7E\u5B88\u536B"], ["nzHref", "#api", "nzTitle", "API"], [1, "markdown"], [1, "subtitle"], [1, "widget"], ["href", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/tabs/doc/index.zh-CN.md", "target", "_blank", "rel", "noopener noreferrer", 1, "edit-button"], ["nz-icon", "", "nzType", "edit"], ["id", "\u4F55\u65F6\u4F7F\u7528"], ["onclick", "window.location.hash = '\u4F55\u65F6\u4F7F\u7528'", 1, "anchor"], ["href", "/components/radio/zh/#components-radio-demo-radiobutton"], [1, "language-ts"], [1, "token", "keyword"], [1, "token", "punctuation"], [1, "token", "string"], ["nz-icon", "", "nzType", "appstore", "nz-tooltip", "", "nzTooltipTitle", "\u5C55\u5F00\u5168\u90E8\u4EE3\u7801", 1, "code-box-expand-trigger", 3, "click"], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", 3, "nzSpan"], ["nzTitle", "\u57FA\u672C", "nzSelector", "nz-demo-tabs-basic", "nzGenerateCommand", "ng g ng-zorro-antd:tabs-basic <name>", "nzComponentName", "NzDemoTabsBasicComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], ["demo", ""], ["intro", ""], ["nzTitle", "\u7981\u7528", "nzSelector", "nz-demo-tabs-disabled", "nzGenerateCommand", "ng g ng-zorro-antd:tabs-disabled <name>", "nzComponentName", "NzDemoTabsDisabledComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], ["nzTitle", "\u56FE\u6807", "nzSelector", "nz-demo-tabs-icon", "nzGenerateCommand", "ng g ng-zorro-antd:tabs-icon <name>", "nzComponentName", "NzDemoTabsIconComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], ["nzTitle", "\u6ED1\u52A8", "nzSelector", "nz-demo-tabs-slide", "nzGenerateCommand", "ng g ng-zorro-antd:tabs-slide <name>", "nzComponentName", "NzDemoTabsSlideComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], ["nzTitle", "\u9644\u52A0\u5185\u5BB9", "nzSelector", "nz-demo-tabs-extra", "nzGenerateCommand", "ng g ng-zorro-antd:tabs-extra <name>", "nzComponentName", "NzDemoTabsExtraComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], ["nzTitle", "\u5927\u5C0F", "nzSelector", "nz-demo-tabs-size", "nzGenerateCommand", "ng g ng-zorro-antd:tabs-size <name>", "nzComponentName", "NzDemoTabsSizeComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], ["nzTitle", "\u4F4D\u7F6E", "nzSelector", "nz-demo-tabs-position", "nzGenerateCommand", "ng g ng-zorro-antd:tabs-position <name>", "nzComponentName", "NzDemoTabsPositionComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], ["nzTitle", "\u5361\u7247\u5F0F\u9875\u7B7E", "nzSelector", "nz-demo-tabs-card", "nzGenerateCommand", "ng g ng-zorro-antd:tabs-card <name>", "nzComponentName", "NzDemoTabsCardComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], ["nzTitle", "\u65B0\u589E\u548C\u5173\u95ED\u9875\u7B7E", "nzSelector", "nz-demo-tabs-editable-card", "nzGenerateCommand", "ng g ng-zorro-antd:tabs-editable-card <name>", "nzComponentName", "NzDemoTabsEditableCardComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], ["nzTitle", "\u5361\u7247\u5F0F\u9875\u7B7E\u5BB9\u5668", "nzSelector", "nz-demo-tabs-card-top", "nzGenerateCommand", "ng g ng-zorro-antd:tabs-card-top <name>", "nzComponentName", "NzDemoTabsCardTopComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], ["nzTitle", "\u81EA\u5B9A\u4E49\u65B0\u589E\u9875\u7B7E\u89E6\u53D1\u5668", "nzSelector", "nz-demo-tabs-custom-add-trigger", "nzGenerateCommand", "ng g ng-zorro-antd:tabs-custom-add-trigger <name>", "nzComponentName", "NzDemoTabsCustomAddTriggerComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], ["nzTitle", "\u61D2\u52A0\u8F7D", "nzSelector", "nz-demo-tabs-lazy", "nzGenerateCommand", "ng g ng-zorro-antd:tabs-lazy <name>", "nzComponentName", "NzDemoTabsLazyComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], ["nzTitle", "\u8DEF\u7531\u8054\u52A8", "nzSelector", "nz-demo-tabs-link-router", "nzGenerateCommand", "ng g ng-zorro-antd:tabs-link-router <name>", "nzComponentName", "NzDemoTabsLinkRouterComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], ["nzTitle", "\u6807\u7B7E\u5B88\u536B", "nzSelector", "nz-demo-tabs-guard", "nzGenerateCommand", "ng g ng-zorro-antd:tabs-guard <name>", "nzComponentName", "NzDemoTabsGuardComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], [1, "markdown", "api-container"], ["id", "api"], ["onclick", "window.location.hash = 'api'", 1, "anchor"], ["id", "nz-tabset"], [1, "api-type-label", "component"], ["onclick", "window.location.hash = 'nz-tabset'", 1, "anchor"], ["id", "nz-tabset[nztype=\"editable-card\"]"], ["onclick", "window.location.hash = 'nz-tabset[nztype=\"editable-card\"]'", 1, "anchor"], ["id", "nz-tab"], ["onclick", "window.location.hash = 'nz-tab'", 1, "anchor"], ["id", "nz-tabset[nztype=\"editable-card\"]->-nz-tab"], ["onclick", "window.location.hash = 'nz-tabset[nztype=\"editable-card\"]->-nz-tab'", 1, "anchor"], ["id", "<code>nz-tab[nztitle]</code>-\u7684\u6A21\u7248\u5F15\u7528\u53D8\u91CF"], ["onclick", "window.location.hash = '<code>nz-tab[nztitle]</code>-\u7684\u6A21\u7248\u5F15\u7528\u53D8\u91CF'", 1, "anchor"], [1, "language-html"], [1, "token", "tag"], [1, "token", "attr-name"], [1, "token", "attr-value"], ["id", "[nz-tab]"], [1, "api-type-label", "directive"], ["onclick", "window.location.hash = '[nz-tab]'", 1, "anchor"], ["id", "ng-template[nztablink]->-a[nz-tab-link]"], ["onclick", "window.location.hash = 'ng-template[nztablink]->-a[nz-tab-link]'", 1, "anchor"]], template: function NzDemoTabsZhComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-affix", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nz-anchor", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzClick", function NzDemoTabsZhComponent_Template_nz_anchor_nzClick_2_listener($event) { return ctx.goLink($event); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "section", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Tabs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\u6807\u7B7E\u9875");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "section", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\u9009\u9879\u5361\u5207\u6362\u7EC4\u4EF6\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h2", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\u4F55\u65F6\u4F7F\u7528");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "\u63D0\u4F9B\u5E73\u7EA7\u7684\u533A\u57DF\u5C06\u5927\u5757\u5185\u5BB9\u8FDB\u884C\u6536\u7EB3\u548C\u5C55\u73B0\uFF0C\u4FDD\u6301\u754C\u9762\u6574\u6D01\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Ant Design \u4F9D\u6B21\u63D0\u4F9B\u4E86\u4E09\u7EA7\u9009\u9879\u5361\uFF0C\u5206\u522B\u7528\u4E8E\u4E0D\u540C\u7684\u573A\u666F\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "\u5361\u7247\u5F0F\u7684\u9875\u7B7E\uFF0C\u63D0\u4F9B\u53EF\u5173\u95ED\u7684\u6837\u5F0F\uFF0C\u5E38\u7528\u4E8E\u5BB9\u5668\u9876\u90E8\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "\u6807\u51C6\u7EBF\u6761\u5F0F\u9875\u7B7E\uFF0C\u7528\u4E8E\u5BB9\u5668\u5185\u90E8\u7684\u4E3B\u529F\u80FD\u5207\u6362\uFF0C\u8FD9\u662F\u6700\u5E38\u7528\u7684 Tabs\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "RadioButton");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " \u53EF\u4F5C\u4E3A\u66F4\u6B21\u7EA7\u7684\u9875\u7B7E\u6765\u4F7F\u7528\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "pre", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "import");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "{");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " NzTabsModule ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "from");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "'ng-zorro-antd/tabs'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "\u4EE3\u7801\u6F14\u793A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoTabsZhComponent_Template_i_click_68_listener() { return ctx.expandAllCode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "nz-code-box", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "nz-demo-tabs-basic", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "\u9ED8\u8BA4\u9009\u4E2D\u7B2C\u4E00\u9879\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "nz-code-box", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "nz-demo-tabs-disabled", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "\u7981\u7528\u67D0\u4E00\u9879\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "nz-code-box", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "nz-demo-tabs-icon", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "\u6709\u56FE\u6807\u7684\u6807\u7B7E\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "nz-code-box", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "nz-demo-tabs-slide", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "\u53EF\u4EE5\u5DE6\u53F3\u3001\u4E0A\u4E0B\u6ED1\u52A8\uFF0C\u5BB9\u7EB3\u66F4\u591A\u6807\u7B7E\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "nz-code-box", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "nz-demo-tabs-extra", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "\u53EF\u4EE5\u5728\u9875\u7B7E\u53F3\u8FB9\u6DFB\u52A0\u9644\u52A0\u64CD\u4F5C\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "nz-code-box", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "nz-demo-tabs-size", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "\u5927\u53F7\u9875\u7B7E\u7528\u5728\u9875\u5934\u533A\u57DF\uFF0C\u5C0F\u53F7\u7528\u5728\u5F39\u51FA\u6846\u7B49\u8F83\u72ED\u7A84\u7684\u5BB9\u5668\u5185\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "nz-code-box", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "nz-demo-tabs-position", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "\u6709\u56DB\u4E2A\u4F4D\u7F6E\uFF0C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "nzTabPosition=\"left|right|top|bottom\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "nz-code-box", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "nz-demo-tabs-card", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "\u53E6\u4E00\u79CD\u6837\u5F0F\u7684\u9875\u7B7E\uFF0C\u4E0D\u63D0\u4F9B\u5BF9\u5E94\u7684\u5782\u76F4\u6837\u5F0F\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "nz-code-box", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "nz-demo-tabs-editable-card", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "\u53EA\u6709\u5361\u7247\u6837\u5F0F\u7684\u9875\u7B7E\u652F\u6301\u65B0\u589E\u548C\u5173\u95ED\u9009\u9879\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "nz-code-box", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "nz-demo-tabs-card-top", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "\u7528\u4E8E\u5BB9\u5668\u9876\u90E8\uFF0C\u9700\u8981\u4E00\u70B9\u989D\u5916\u7684\u6837\u5F0F\u8986\u76D6\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "nz-code-box", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "nz-demo-tabs-custom-add-trigger", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "\u7ED9\u81EA\u5B9A\u4E49\u89E6\u53D1\u5668\u7ED1\u5B9A\u4E8B\u4EF6\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "nz-code-box", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "nz-demo-tabs-lazy", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "nz-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, " \u4E2D\u7684\u7EC4\u4EF6\u7684 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "ngOnInit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, " \u4F1A\u63D0\u524D\u89E6\u53D1\uFF0C\u5982\u679C\u5E0C\u671B\u5F53 Tab \u88AB\u6FC0\u6D3B\u65F6\u518D\u89E6\u53D1 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "ngOnInit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "\uFF0C\u53EF\u4EE5\u4F7F\u7528\u8BE5\u793A\u4F8B\u4E2D\u7684\u61D2\u52A0\u8F7D\u65B9\u5F0F\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "nz-code-box", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](144, "nz-demo-tabs-link-router", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "\u4E0E\u8DEF\u7531\u8054\u52A8\uFF0C\u70B9\u51FB tab \u66F4\u6539\u8DEF\u7531\uFF0C\u5E76\u4E14\u5728\u8DEF\u7531\u6539\u53D8\u65F6\u81EA\u52A8\u5207\u6362 tab\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "nz-code-box", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](149, "nz-demo-tabs-guard", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "\u901A\u8FC7 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "nzCanDeactivate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, " \u51B3\u5B9A\u4E00\u4E2A tab \u662F\u5426\u53EF\u4EE5\u88AB\u5207\u6362\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "section", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "h2", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "API");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "a", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "h3", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "nz-tabset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "label", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "a", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "\u53C2\u6570");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, "\u8BF4\u660E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "\u7C7B\u578B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "\u9ED8\u8BA4\u503C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, "\u5168\u5C40\u914D\u7F6E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, "[nzSelectedIndex]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "\u5F53\u524D\u6FC0\u6D3B tab \u9762\u677F\u7684 \u5E8F\u5217\u53F7\uFF0C\u53EF\u53CC\u5411\u7ED1\u5B9A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](194, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, "[nzAnimated]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, "\u662F\u5426\u4F7F\u7528\u52A8\u753B\u5207\u6362 Tabs\uFF0C\u5728 nzTabPosition=top | bottom \u65F6\u6709\u6548");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, "boolean | {inkBar:boolean, tabPane:boolean}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, ", \u5F53 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, "type=\"card\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, " \u65F6\u4E3A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](212, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](214, "\u2705");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218, "[nzSize]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, "\u5927\u5C0F\uFF0C\u63D0\u4F9B ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](222, "large");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, "default");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](225, " \u548C ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](227, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](228, " \u4E09\u79CD\u5927\u5C0F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](231, "'large' | 'small' | 'default'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](234, "'default'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](236, "\u2705");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](240, "[nzTabBarExtraContent]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](242, "tab bar \u4E0A\u989D\u5916\u7684\u5143\u7D20");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](245, "TemplateRef<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](247, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](248, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](252, "[nzTabBarStyle]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](254, "tab bar \u7684\u6837\u5F0F\u5BF9\u8C61");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](257, "object");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](259, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](260, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](264, "[nzTabPosition]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](266, "\u9875\u7B7E\u4F4D\u7F6E\uFF0C\u53EF\u9009\u503C\u6709 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](268, "top");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](270, "right");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](272, "bottom");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](274, "left");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](277, "'top' | 'right' | 'bottom' | 'left'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](280, "'top'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](281, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](284, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](285, "[nzType]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](287, "\u9875\u7B7E\u7684\u57FA\u672C\u6837\u5F0F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](290, "'line' | 'card' | 'editable-card'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](293, "'line'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](295, "\u2705");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](297, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](298, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](299, "[nzTabBarGutter]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](301, "tabs \u4E4B\u95F4\u7684\u95F4\u9699");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](303, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](304, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](306, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](307, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](308, "\u2705");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](309, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](310, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](311, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](312, "[nzHideAll]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](313, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](314, "\u662F\u5426\u9690\u85CF\u6240\u6709tab\u5185\u5BB9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](315, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](316, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](317, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](318, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](319, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](320, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](321, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](322, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](323, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](324, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](325, "[nzLinkRouter]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](326, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](327, "\u4E0E Angular \u8DEF\u7531\u8054\u52A8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](328, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](329, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](330, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](331, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](332, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](333, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](334, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](335, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](336, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](337, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](338, "[nzLinkExact]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](339, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](340, "\u4EE5\u4E25\u683C\u5339\u914D\u6A21\u5F0F\u786E\u5B9A\u8054\u52A8\u7684\u8DEF\u7531");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](341, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](342, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](343, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](344, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](345, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](346, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](347, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](348, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](349, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](350, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](351, "[nzCanDeactivate]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](352, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](353, "\u51B3\u5B9A\u4E00\u4E2A tab \u662F\u5426\u53EF\u4EE5\u88AB\u5207\u6362");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](354, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](355, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](356, "NzTabsCanDeactivateFn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](357, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](358, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](359, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](360, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](361, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](362, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](363, "[nzCentered]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](364, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](365, "\u6807\u7B7E\u5C45\u4E2D\u5C55\u793A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](366, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](367, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](368, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](369, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](370, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](371, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](372, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](373, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](374, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](375, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](376, "(nzSelectedIndexChange)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](377, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](378, "\u5F53\u524D\u6FC0\u6D3B tab \u9762\u677F\u7684 \u5E8F\u5217\u53F7\u53D8\u66F4\u56DE\u8C03\u51FD\u6570");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](379, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](380, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](381, "EventEmitter<number>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](382, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](383, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](384, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](385, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](386, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](387, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](388, "(nzSelectChange)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](389, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](390, "\u5F53\u524D\u6FC0\u6D3B tab \u9762\u677F\u53D8\u66F4\u56DE\u8C03\u51FD\u6570");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](391, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](392, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](393, "EventEmitter<{index: number,tab: NzTabComponent}>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](394, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](395, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](396, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](397, "h3", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](398, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](399, "nz-tabset[nzType=\"editable-card\"]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](400, "label", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](401, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](402, "a", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](403, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](404, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](405, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](406, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](407, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](408, "\u53C2\u6570");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](409, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](410, "\u8BF4\u660E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](411, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](412, "\u7C7B\u578B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](413, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](414, "\u9ED8\u8BA4\u503C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](415, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](416, "\u5168\u5C40\u914D\u7F6E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](417, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](418, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](419, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](420, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](421, "[nzHideAdd]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](422, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](423, "\u9690\u85CF\u6DFB\u52A0\u6309\u94AE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](424, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](425, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](426, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](427, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](428, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](429, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](430, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](431, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](432, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](433, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](434, "[nzAddIcon]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](435, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](436, "\u6DFB\u52A0\u6309\u94AE\u56FE\u6807");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](437, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](438, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](439, "string | TemplateRef<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](440, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](441, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](442, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](443, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](444, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](445, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](446, "(nzAdd)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](447, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](448, "\u70B9\u51FB\u6DFB\u52A0\u6309\u94AE\u65F6\u7684\u4E8B\u4EF6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](449, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](450, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](451, "EventEmitter<>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](452, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](453, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](454, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](455, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](456, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](457, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](458, "(nzClose)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](459, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](460, "\u70B9\u51FB\u5220\u9664\u6309\u94AE\u65F6\u7684\u4E8B\u4EF6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](461, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](462, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](463, "EventEmitter<{ index: number }>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](464, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](465, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](466, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](467, "h3", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](468, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](469, "nz-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](470, "label", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](471, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](472, "a", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](473, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](474, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](475, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](476, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](477, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](478, "\u53C2\u6570");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](479, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](480, "\u8BF4\u660E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](481, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](482, "\u7C7B\u578B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](483, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](484, "\u9ED8\u8BA4\u503C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](485, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](486, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](487, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](488, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](489, "[nzTitle]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](490, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](491, "\u9009\u9879\u5361\u5934\u663E\u793A\u6587\u5B57");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](492, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](493, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](494, "string | TemplateRef<TabTemplateContext>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](495, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](496, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](497, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](498, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](499, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](500, "[nzForceRender]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](501, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](502, "\u88AB\u9690\u85CF\u65F6\u662F\u5426\u6E32\u67D3 DOM \u7ED3\u6784");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](503, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](504, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](505, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](506, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](507, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](508, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](509, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](510, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](511, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](512, "[nzDisabled]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](513, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](514, "\u662F\u5426\u7981\u7528");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](515, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](516, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](517, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](518, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](519, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](520, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](521, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](522, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](523, "(nzClick)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](524, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](525, "\u5355\u51FB title \u7684\u56DE\u8C03\u51FD\u6570");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](526, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](527, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](528, "EventEmitter<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](529, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](530, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](531, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](532, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](533, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](534, "(nzContextmenu)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](535, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](536, "\u53F3\u952E title \u7684\u56DE\u8C03\u51FD\u6570");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](537, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](538, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](539, "EventEmitter<MouseEvent>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](540, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](541, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](542, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](543, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](544, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](545, "(nzSelect)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](546, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](547, "tab \u88AB\u9009\u4E2D\u7684\u56DE\u8C03\u51FD\u6570");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](548, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](549, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](550, "EventEmitter<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](551, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](552, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](553, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](554, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](555, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](556, "(nzDeselect)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](557, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](558, "tab \u88AB\u53D6\u6D88\u9009\u4E2D\u7684\u56DE\u8C03\u51FD\u6570");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](559, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](560, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](561, "EventEmitter<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](562, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](563, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](564, "h3", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](565, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](566, "nz-tabset[nzType=\"editable-card\"] > nz-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](567, "label", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](568, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](569, "a", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](570, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](571, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](572, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](573, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](574, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](575, "\u53C2\u6570");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](576, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](577, "\u8BF4\u660E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](578, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](579, "\u7C7B\u578B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](580, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](581, "\u9ED8\u8BA4\u503C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](582, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](583, "\u5168\u5C40\u914D\u7F6E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](584, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](585, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](586, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](587, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](588, "[nzClosable]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](589, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](590, "\u663E\u793A\u5220\u9664\u6309\u94AE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](591, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](592, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](593, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](594, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](595, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](596, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](597, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](598, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](599, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](600, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](601, "[nzCloseIcon]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](602, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](603, "\u5173\u95ED\u6309\u94AE\u56FE\u6807");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](604, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](605, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](606, "string | TemplateRef<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](607, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](608, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](609, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](610, "h4", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](611, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](612, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](613, "nz-tab[nzTitle]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](614, " \u7684\u6A21\u7248\u5F15\u7528\u53D8\u91CF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](615, "a", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](616, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](617, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](618, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](619, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](620, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](621, "\u5C5E\u6027");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](622, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](623, "\u8BF4\u660E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](624, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](625, "\u7C7B\u578B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](626, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](627, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](628, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](629, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](630, "visible");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](631, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](632, "\u8868\u793A\u662F\u5426\u5728\u53EF\u89C1\u533A\u57DF, \u4E3A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](633, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](634, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](635, " \u65F6\u5C06\u4F1A\u88AB\u6E32\u67D3\u5230\u4E0B\u62C9\u83DC\u5355\u4E2D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](636, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](637, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](638, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](639, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](640, "\u5728 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](641, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](642, "nz-tab[nzTitle]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](643, " \u4E2D\u4F7F\u7528");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](644, "pre", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](645, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](646, "span", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](647, "span", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](648, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](649, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](650, "nz-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](651, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](652, "span", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](653, "[nzTitle]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](654, "span", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](655, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](656, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](657, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](658, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](659, "titleTemplate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](660, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](661, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](662, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](663, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](664, "\n  ...\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](665, "span", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](666, "span", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](667, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](668, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](669, "ng-template");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](670, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](671, "span", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](672, "#titleTemplate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](673, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](674, "span", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](675, "let-visible");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](676, "span", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](677, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](678, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](679, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](680, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](681, "visible");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](682, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](683, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](684, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](685, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](686, "...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](687, "span", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](688, "span", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](689, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](690, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](691, "ng-template");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](692, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](693, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](694, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](695, "span", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](696, "span", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](697, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](698, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](699, "nz-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](700, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](701, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](702, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](703, "\u5728 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](704, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](705, "*nzTabLink");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](706, " \u4E2D\u4F7F\u7528");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](707, "pre", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](708, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](709, "span", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](710, "span", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](711, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](712, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](713, "nz-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](714, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](715, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](716, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](717, "span", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](718, "span", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](719, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](720, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](721, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](722, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](723, "span", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](724, "*nzTabLink");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](725, "span", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](726, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](727, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](728, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](729, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](730, "let visible ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](731, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](732, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](733, " visible");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](734, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](735, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](736, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](737, "span", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](738, "nz-tab-link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](739, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](740, "span", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](741, "[routerLink]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](742, "span", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](743, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](744, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](745, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](746, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](747, "[");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](748, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](749, "'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](750, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](751, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](752, "'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](753, "]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](754, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](755, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](756, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](757, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](758, "...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](759, "span", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](760, "span", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](761, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](762, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](763, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](764, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](765, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](766, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](767, "span", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](768, "span", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](769, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](770, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](771, "nz-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](772, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](773, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](774, "h3", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](775, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](776, "[nz-tab]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](777, "label", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](778, "directive");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](779, "a", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](780, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](781, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](782, "\u4E0E ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](783, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](784, "ng-template");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](785, " \u4E00\u540C\u4F7F\u7528\uFF0C\u7528\u4E8E\u6807\u8BB0\u9700\u8981\u61D2\u52A0\u8F7D\u7684 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](786, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](787, "tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](788, " \u5185\u5BB9\uFF0C\u5177\u4F53\u7528\u6CD5\u89C1\u793A\u4F8B\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](789, "h3", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](790, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](791, "ng-template[nzTabLink] > a[nz-tab-link]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](792, "a", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](793, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](794, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](795, "\u8DEF\u7531\u8054\u52A8\u53EF\u4EE5\u8BA9 tab \u7684\u5207\u6362\u548C\u8DEF\u7531\u884C\u4E3A\u76F8\u4E00\u81F4\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](796, "pre", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](797, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](798, "span", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](799, "span", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](800, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](801, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](802, "nz-tabset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](803, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](804, "span", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](805, "nzLinkRouter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](806, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](807, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](808, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](809, "span", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](810, "span", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](811, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](812, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](813, "nz-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](814, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](815, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](816, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](817, "span", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](818, "span", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](819, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](820, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](821, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](822, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](823, "span", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](824, "*nzTabLink");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](825, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](826, "span", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](827, "nz-tab-link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](828, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](829, "span", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](830, "[routerLink]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](831, "span", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](832, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](833, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](834, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](835, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](836, "[");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](837, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](838, "'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](839, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](840, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](841, "'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](842, "]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](843, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](844, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](845, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](846, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](847, "Link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](848, "span", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](849, "span", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](850, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](851, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](852, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](853, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](854, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](855, "\n    Default.\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](856, "span", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](857, "span", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](858, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](859, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](860, "nz-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](861, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](862, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](863, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](864, "span", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](865, "span", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](866, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](867, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](868, "nz-tabset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](869, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](870, ">");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzGutter", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-tabs-demo-basic")("nzLink", "components-tabs-demo-basic")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/tabs/demo/basic.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-tabs-demo-disabled")("nzLink", "components-tabs-demo-disabled")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/tabs/demo/disabled.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-tabs-demo-icon")("nzLink", "components-tabs-demo-icon")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/tabs/demo/icon.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-tabs-demo-slide")("nzLink", "components-tabs-demo-slide")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/tabs/demo/slide.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-tabs-demo-extra")("nzLink", "components-tabs-demo-extra")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/tabs/demo/extra.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-tabs-demo-size")("nzLink", "components-tabs-demo-size")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/tabs/demo/size.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-tabs-demo-position")("nzLink", "components-tabs-demo-position")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/tabs/demo/position.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-tabs-demo-card")("nzLink", "components-tabs-demo-card")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/tabs/demo/card.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-tabs-demo-editable-card")("nzLink", "components-tabs-demo-editable-card")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/tabs/demo/editable-card.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-tabs-demo-card-top")("nzLink", "components-tabs-demo-card-top")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/tabs/demo/card-top.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-tabs-demo-custom-add-trigger")("nzLink", "components-tabs-demo-custom-add-trigger")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/tabs/demo/custom-add-trigger.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-tabs-demo-lazy")("nzLink", "components-tabs-demo-lazy")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/tabs/demo/lazy.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-tabs-demo-link-router")("nzLink", "components-tabs-demo-link-router")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/tabs/demo/link-router.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-tabs-demo-guard")("nzLink", "components-tabs-demo-guard")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/tabs/demo/guard.md");
    } }, directives: [ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_2__["NzAffixComponent"], ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_3__["NzAnchorComponent"], ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_3__["NzAnchorLinkComponent"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__["NzIconDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__["ɵNzTransitionPatchDirective"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_6__["NzTooltipDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__["NzRowDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__["NzColDirective"], _share_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_1__["NzCodeBoxComponent"], _basic__WEBPACK_IMPORTED_MODULE_8__["NzDemoTabsBasicComponent"], _disabled__WEBPACK_IMPORTED_MODULE_9__["NzDemoTabsDisabledComponent"], _icon__WEBPACK_IMPORTED_MODULE_10__["NzDemoTabsIconComponent"], _slide__WEBPACK_IMPORTED_MODULE_11__["NzDemoTabsSlideComponent"], _extra__WEBPACK_IMPORTED_MODULE_12__["NzDemoTabsExtraComponent"], _size__WEBPACK_IMPORTED_MODULE_13__["NzDemoTabsSizeComponent"], _position__WEBPACK_IMPORTED_MODULE_14__["NzDemoTabsPositionComponent"], _card__WEBPACK_IMPORTED_MODULE_15__["NzDemoTabsCardComponent"], _editable_card__WEBPACK_IMPORTED_MODULE_16__["NzDemoTabsEditableCardComponent"], _card_top__WEBPACK_IMPORTED_MODULE_17__["NzDemoTabsCardTopComponent"], _custom_add_trigger__WEBPACK_IMPORTED_MODULE_18__["NzDemoTabsCustomAddTriggerComponent"], _lazy__WEBPACK_IMPORTED_MODULE_19__["NzDemoTabsLazyComponent"], _link_router__WEBPACK_IMPORTED_MODULE_20__["NzDemoTabsLinkRouterComponent"], _guard__WEBPACK_IMPORTED_MODULE_21__["NzDemoTabsGuardComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoTabsZhComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-demo-tabs',
                preserveWhitespaces: false,
                templateUrl: './zh.html'
            }]
    }], null, { codeBoxes: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"],
            args: [_share_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_1__["NzCodeBoxComponent"]]
        }] }); })();


/***/ }),

/***/ "romM":
/*!*******************************************!*\
  !*** ./site/doc/app/tabs/en.component.ts ***!
  \*******************************************/
/*! exports provided: NzDemoTabsEnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoTabsEnComponent", function() { return NzDemoTabsEnComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _share_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../share/codebox/codebox.component */ "rKiv");
/* harmony import */ var ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/affix */ "utH8");
/* harmony import */ var ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/anchor */ "l83q");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/icon */ "MOHP");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "uLhK");
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ "pk25");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/grid */ "T+9E");
/* harmony import */ var _basic__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./basic */ "PLD8");
/* harmony import */ var _disabled__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./disabled */ "R4j6");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./icon */ "bCcK");
/* harmony import */ var _slide__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./slide */ "1iOz");
/* harmony import */ var _extra__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./extra */ "vXZ+");
/* harmony import */ var _size__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./size */ "3HWu");
/* harmony import */ var _position__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./position */ "ZBp+");
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./card */ "BME6");
/* harmony import */ var _editable_card__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./editable-card */ "nFcJ");
/* harmony import */ var _card_top__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./card-top */ "ZomC");
/* harmony import */ var _custom_add_trigger__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./custom-add-trigger */ "M0uS");
/* harmony import */ var _lazy__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./lazy */ "p3n0");
/* harmony import */ var _link_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./link-router */ "tgpG");
/* harmony import */ var _guard__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./guard */ "Uyq6");
























class NzDemoTabsEnComponent {
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
/** @nocollapse */ NzDemoTabsEnComponent.ɵfac = function NzDemoTabsEnComponent_Factory(t) { return new (t || NzDemoTabsEnComponent)(); };
/** @nocollapse */ NzDemoTabsEnComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoTabsEnComponent, selectors: [["nz-demo-tabs"]], viewQuery: function NzDemoTabsEnComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_share_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_1__["NzCodeBoxComponent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.codeBoxes = _t);
    } }, decls: 849, vars: 60, consts: [[1, "toc-affix", 3, "nzOffsetTop"], ["nzShowInkInFixed", "", 3, "nzAffix", "nzClick"], ["nzHref", "#components-tabs-demo-basic", "nzTitle", "Basic"], ["nzHref", "#components-tabs-demo-disabled", "nzTitle", "Disabled"], ["nzHref", "#components-tabs-demo-icon", "nzTitle", "Icon"], ["nzHref", "#components-tabs-demo-slide", "nzTitle", "Slide"], ["nzHref", "#components-tabs-demo-extra", "nzTitle", "Extra content"], ["nzHref", "#components-tabs-demo-size", "nzTitle", "Size"], ["nzHref", "#components-tabs-demo-position", "nzTitle", "Position"], ["nzHref", "#components-tabs-demo-card", "nzTitle", "Card type tab"], ["nzHref", "#components-tabs-demo-editable-card", "nzTitle", "Add & close tab"], ["nzHref", "#components-tabs-demo-card-top", "nzTitle", "Container of card type Tab"], ["nzHref", "#components-tabs-demo-custom-add-trigger", "nzTitle", "Customized trigger of new tab"], ["nzHref", "#components-tabs-demo-lazy", "nzTitle", "LazyLoad"], ["nzHref", "#components-tabs-demo-link-router", "nzTitle", "With Router"], ["nzHref", "#components-tabs-demo-guard", "nzTitle", "Tab guard"], ["nzHref", "#api", "nzTitle", "API"], [1, "markdown"], [1, "subtitle"], [1, "widget"], ["href", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/tabs/doc/index.en-US.md", "target", "_blank", "rel", "noopener noreferrer", 1, "edit-button"], ["nz-icon", "", "nzType", "edit"], ["id", "when-to-use"], ["onclick", "window.location.hash = 'when-to-use'", 1, "anchor"], ["href", "/components/radio/en/#components-radio-demo-radiobutton"], [1, "language-ts"], [1, "token", "keyword"], [1, "token", "punctuation"], [1, "token", "string"], ["nz-icon", "", "nzType", "appstore", "nz-tooltip", "", "nzTooltipTitle", "Expand All Code", 1, "code-box-expand-trigger", 3, "click"], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", 3, "nzSpan"], ["nzTitle", "Basic", "nzSelector", "nz-demo-tabs-basic", "nzGenerateCommand", "ng g ng-zorro-antd:tabs-basic <name>", "nzComponentName", "NzDemoTabsBasicComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], ["demo", ""], ["intro", ""], ["nzTitle", "Disabled", "nzSelector", "nz-demo-tabs-disabled", "nzGenerateCommand", "ng g ng-zorro-antd:tabs-disabled <name>", "nzComponentName", "NzDemoTabsDisabledComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], ["nzTitle", "Icon", "nzSelector", "nz-demo-tabs-icon", "nzGenerateCommand", "ng g ng-zorro-antd:tabs-icon <name>", "nzComponentName", "NzDemoTabsIconComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], ["nzTitle", "Slide", "nzSelector", "nz-demo-tabs-slide", "nzGenerateCommand", "ng g ng-zorro-antd:tabs-slide <name>", "nzComponentName", "NzDemoTabsSlideComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], ["nzTitle", "Extra content", "nzSelector", "nz-demo-tabs-extra", "nzGenerateCommand", "ng g ng-zorro-antd:tabs-extra <name>", "nzComponentName", "NzDemoTabsExtraComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], ["nzTitle", "Size", "nzSelector", "nz-demo-tabs-size", "nzGenerateCommand", "ng g ng-zorro-antd:tabs-size <name>", "nzComponentName", "NzDemoTabsSizeComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], ["nzTitle", "Position", "nzSelector", "nz-demo-tabs-position", "nzGenerateCommand", "ng g ng-zorro-antd:tabs-position <name>", "nzComponentName", "NzDemoTabsPositionComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], ["nzTitle", "Card type tab", "nzSelector", "nz-demo-tabs-card", "nzGenerateCommand", "ng g ng-zorro-antd:tabs-card <name>", "nzComponentName", "NzDemoTabsCardComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], ["nzTitle", "Add & close tab", "nzSelector", "nz-demo-tabs-editable-card", "nzGenerateCommand", "ng g ng-zorro-antd:tabs-editable-card <name>", "nzComponentName", "NzDemoTabsEditableCardComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], ["nzTitle", "Container of card type Tab", "nzSelector", "nz-demo-tabs-card-top", "nzGenerateCommand", "ng g ng-zorro-antd:tabs-card-top <name>", "nzComponentName", "NzDemoTabsCardTopComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], ["nzTitle", "Customized trigger of new tab", "nzSelector", "nz-demo-tabs-custom-add-trigger", "nzGenerateCommand", "ng g ng-zorro-antd:tabs-custom-add-trigger <name>", "nzComponentName", "NzDemoTabsCustomAddTriggerComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], ["nzTitle", "LazyLoad", "nzSelector", "nz-demo-tabs-lazy", "nzGenerateCommand", "ng g ng-zorro-antd:tabs-lazy <name>", "nzComponentName", "NzDemoTabsLazyComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], ["nzTitle", "With Router", "nzSelector", "nz-demo-tabs-link-router", "nzGenerateCommand", "ng g ng-zorro-antd:tabs-link-router <name>", "nzComponentName", "NzDemoTabsLinkRouterComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], ["nzTitle", "Tab guard", "nzSelector", "nz-demo-tabs-guard", "nzGenerateCommand", "ng g ng-zorro-antd:tabs-guard <name>", "nzComponentName", "NzDemoTabsGuardComponent", "nzIframeSource", "null", 3, "nzId", "nzLink", "nzIframeHeight", "nzHref"], [1, "markdown", "api-container"], ["id", "api"], ["onclick", "window.location.hash = 'api'", 1, "anchor"], ["id", "nz-tabset"], [1, "api-type-label", "component"], ["onclick", "window.location.hash = 'nz-tabset'", 1, "anchor"], ["id", "nz-tabset[nztype=\"editable-card\"]"], ["onclick", "window.location.hash = 'nz-tabset[nztype=\"editable-card\"]'", 1, "anchor"], ["id", "nz-tab"], ["onclick", "window.location.hash = 'nz-tab'", 1, "anchor"], ["id", "nz-tabset[nztype=\"editable-card\"]->-nz-tab"], ["onclick", "window.location.hash = 'nz-tabset[nztype=\"editable-card\"]->-nz-tab'", 1, "anchor"], ["id", "template-variable-references-of-<code>nz-tab[nztitle]</code>"], ["onclick", "window.location.hash = 'template-variable-references-of-<code>nz-tab[nztitle]</code>'", 1, "anchor"], [1, "language-html"], [1, "token", "tag"], [1, "token", "attr-name"], [1, "token", "attr-value"], ["id", "[nz-tab]"], [1, "api-type-label", "directive"], ["onclick", "window.location.hash = '[nz-tab]'", 1, "anchor"], ["id", "ng-template[nztablink]->-a[nz-tab-link]"], ["onclick", "window.location.hash = 'ng-template[nztablink]->-a[nz-tab-link]'", 1, "anchor"]], template: function NzDemoTabsEnComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-affix", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nz-anchor", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzClick", function NzDemoTabsEnComponent_Template_nz_anchor_nzClick_2_listener($event) { return ctx.goLink($event); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "section", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Tabs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "section", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Tabs make it easy to switch between different views.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h2", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "When To Use");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Ant Design has 3 types of Tabs for different situations.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Card Tabs: for managing too many closeable views.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Normal Tabs: for functional aspects of a page.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "RadioButton");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, ": for secondary tabs.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "pre", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "import");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "{");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " NzTabsModule ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "from");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "'ng-zorro-antd/tabs'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Examples");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzDemoTabsEnComponent_Template_i_click_65_listener() { return ctx.expandAllCode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "nz-code-box", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "nz-demo-tabs-basic", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Default activate first tab.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "nz-code-box", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "nz-demo-tabs-disabled", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Disabled a tab.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "nz-code-box", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "nz-demo-tabs-icon", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "The Tab with Icon.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "nz-code-box", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "nz-demo-tabs-slide", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Tab can be slide to left or right(up or down), which is used for a lot of tabs.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "nz-code-box", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "nz-demo-tabs-extra", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "You can add extra actions to the right of Tabs.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "nz-code-box", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "nz-demo-tabs-size", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Large size tabs are usally used in page header, and small size could be used in Modal.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "nz-code-box", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "nz-demo-tabs-position", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Tab's position: left, right, top or bottom.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "nz-code-box", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "nz-demo-tabs-card", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Another type Tabs, which doesn't support vertical mode.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "nz-code-box", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "nz-demo-tabs-editable-card", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Only card type Tabs support adding & closable.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "nz-code-box", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "nz-demo-tabs-card-top", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Should be used at the top of container, needs to override styles.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "nz-code-box", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "nz-demo-tabs-custom-add-trigger", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Bind event for customized trigger.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "nz-code-box", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "nz-demo-tabs-lazy", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "By default, the contents in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "nz-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, " are eagerly loaded. Tab contents can be lazy loaded by declaring the body in a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "ng-template");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, " with the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "[nz-tab]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, " attribute.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "nz-code-box", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "nz-demo-tabs-link-router", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "Link with router.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "nz-code-box", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](143, "nz-demo-tabs-guard", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "Via ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "nzCanDeactivate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, " to determine if a tab can be deactivated.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "section", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "h2", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "API");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "a", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "h3", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "nz-tabset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "label", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "a", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "Property");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, "Global Config");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "[nzSelectedIndex]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "Current tab's index");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](188, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, "[nzAnimated]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, "Whether to change tabs with animation. Only works while ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, "nzTabPosition=\"top\" | \"bottom\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, "boolean | {inkBar:boolean, tabPane:boolean}");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](205, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, " when ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, "type=\"card\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, "\u2705");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](214, "[nzSize]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](216, "preset tab bar size");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](219, "'large' | 'small' | 'default'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](222, "'default'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, "\u2705");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](228, "[nzTabBarExtraContent]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](230, "Extra content in tab bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](233, "TemplateRef<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](235, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](236, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](240, "[nzTabBarStyle]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](242, "Tab bar style object");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](245, "object");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](247, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](248, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](252, "[nzTabPosition]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](254, "Position of tabs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](257, "'top' | 'right' | 'bottom' | 'left'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](260, "'top'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](261, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](265, "[nzType]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](267, "Basic style of tabs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](270, "'line' | 'card' | 'editable-card'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](273, "'line'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](275, "\u2705");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](279, "[nzTabBarGutter]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](281, "The gap between tabs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](284, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](286, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](288, "\u2705");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](292, "[nzHideAll]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](294, "Whether hide all tabs");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](304, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](305, "[nzLinkRouter]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](306, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](307, "Link with Angular router. It supports child mode and query param mode");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](308, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](309, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](310, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](311, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](312, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](313, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](314, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](315, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](316, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](317, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](318, "[nzLinkExact]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](319, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](320, "Use exact routing matching");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](321, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](322, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](323, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](324, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](325, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](326, "true");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](327, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](328, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](329, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](330, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](331, "[nzCanDeactivate]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](332, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](333, "Determine if a tab can be deactivated");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](334, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](335, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](336, "NzTabsCanDeactivateFn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](337, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](338, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](339, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](340, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](341, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](342, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](343, "[nzCentered]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](344, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](345, "Centers tabs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](346, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](347, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](348, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](349, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](350, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](351, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](352, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](353, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](354, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](355, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](356, "(nzSelectedIndexChange)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](357, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](358, "Current tab's index change callback");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](359, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](360, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](361, "EventEmitter<number>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](362, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](363, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](364, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](365, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](366, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](367, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](368, "(nzSelectChange)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](369, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](370, "Current tab's change callback");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](371, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](372, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](373, "EventEmitter<{index: number,tab: NzTabComponent}>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](374, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](375, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](376, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](377, "h3", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](378, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](379, "nz-tabset[nzType=\"editable-card\"]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](380, "label", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](381, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](382, "a", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](383, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](384, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](385, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](386, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](387, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](388, "Property");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](389, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](390, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](391, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](392, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](393, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](394, "Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](395, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](396, "Global Config");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](397, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](398, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](399, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](400, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](401, "[nzHideAdd]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](402, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](403, "Hide plus icon or not");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](404, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](405, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](406, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](407, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](408, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](409, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](410, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](411, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](412, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](413, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](414, "[nzAddIcon]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](415, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](416, "Add icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](417, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](418, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](419, "string | TemplateRef<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](420, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](421, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](422, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](423, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](424, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](425, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](426, "(nzAdd)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](427, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](428, "When add button clicked emit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](429, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](430, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](431, "EventEmitter<>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](432, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](433, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](434, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](435, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](436, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](437, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](438, "(nzClose)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](439, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](440, "When close button clicked emit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](441, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](442, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](443, "EventEmitter<{ index: number }>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](444, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](445, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](446, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](447, "h3", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](448, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](449, "nz-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](450, "label", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](451, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](452, "a", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](453, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](454, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](455, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](456, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](457, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](458, "Property");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](459, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](460, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](461, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](462, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](463, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](464, "Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](465, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](466, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](467, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](468, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](469, "[nzTitle]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](470, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](471, "Show text in tab's head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](472, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](473, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](474, "string | TemplateRef<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](475, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](476, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](477, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](478, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](479, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](480, "[nzForceRender]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](481, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](482, "Forced render of content in tabs, not lazy render after clicking on tabs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](483, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](484, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](485, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](486, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](487, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](488, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](489, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](490, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](491, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](492, "[nzDisabled]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](493, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](494, "tab disable");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](495, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](496, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](497, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](498, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](499, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](500, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](501, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](502, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](503, "(nzClick)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](504, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](505, "title click callback");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](506, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](507, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](508, "EventEmitter<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](509, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](510, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](511, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](512, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](513, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](514, "(nzContextmenu)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](515, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](516, "title contextmenu callback");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](517, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](518, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](519, "EventEmitter<MouseEvent>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](520, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](521, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](522, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](523, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](524, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](525, "(nzSelect)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](526, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](527, "title select callback");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](528, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](529, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](530, "EventEmitter<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](531, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](532, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](533, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](534, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](535, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](536, "(nzDeselect)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](537, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](538, "title deselect callback");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](539, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](540, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](541, "EventEmitter<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](542, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](543, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](544, "h3", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](545, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](546, "nz-tabset[nzType=\"editable-card\"] > nz-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](547, "label", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](548, "component");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](549, "a", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](550, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](551, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](552, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](553, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](554, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](555, "Property");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](556, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](557, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](558, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](559, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](560, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](561, "Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](562, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](563, "Global Config");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](564, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](565, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](566, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](567, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](568, "[nzClosable]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](569, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](570, "Show close icon or not");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](571, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](572, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](573, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](574, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](575, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](576, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](577, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](578, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](579, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](580, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](581, "[nzCloseIcon]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](582, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](583, "Close icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](584, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](585, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](586, "string | TemplateRef<void>");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](587, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](588, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](589, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](590, "h4", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](591, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](592, "Template variable references of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](593, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](594, "nz-tab[nzTitle]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](595, "a", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](596, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](597, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](598, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](599, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](600, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](601, "Property");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](602, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](603, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](604, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](605, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](606, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](607, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](608, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](609, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](610, "visible");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](611, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](612, "Is the title in the visible area, will be rendered to the dropdown menu if ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](613, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](614, "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](615, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](616, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](617, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](618, "boolean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](619, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](620, "Use in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](621, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](622, "nz-tab[nzTitle]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](623, "pre", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](624, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](625, "span", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](626, "span", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](627, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](628, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](629, "nz-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](630, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](631, "span", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](632, "[nzTitle]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](633, "span", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](634, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](635, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](636, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](637, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](638, "titleTemplate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](639, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](640, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](641, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](642, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](643, "\n  ...\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](644, "span", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](645, "span", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](646, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](647, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](648, "ng-template");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](649, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](650, "span", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](651, "#titleTemplate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](652, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](653, "span", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](654, "let-visible");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](655, "span", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](656, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](657, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](658, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](659, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](660, "visible");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](661, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](662, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](663, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](664, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](665, "...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](666, "span", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](667, "span", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](668, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](669, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](670, "ng-template");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](671, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](672, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](673, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](674, "span", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](675, "span", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](676, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](677, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](678, "nz-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](679, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](680, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](681, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](682, "Use in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](683, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](684, "*nzTabLink");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](685, "pre", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](686, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](687, "span", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](688, "span", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](689, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](690, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](691, "nz-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](692, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](693, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](694, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](695, "span", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](696, "span", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](697, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](698, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](699, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](700, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](701, "span", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](702, "*nzTabLink");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](703, "span", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](704, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](705, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](706, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](707, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](708, "let visible ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](709, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](710, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](711, " visible");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](712, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](713, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](714, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](715, "span", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](716, "nz-tab-link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](717, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](718, "span", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](719, "[routerLink]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](720, "span", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](721, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](722, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](723, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](724, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](725, "[");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](726, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](727, "'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](728, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](729, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](730, "'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](731, "]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](732, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](733, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](734, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](735, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](736, "...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](737, "span", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](738, "span", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](739, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](740, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](741, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](742, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](743, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](744, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](745, "span", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](746, "span", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](747, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](748, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](749, "nz-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](750, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](751, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](752, "h3", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](753, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](754, "[nz-tab]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](755, "label", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](756, "directive");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](757, "a", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](758, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](759, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](760, "Tab contents can be lazy loaded by declaring the body in a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](761, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](762, "ng-template");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](763, " with the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](764, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](765, "[nz-tab]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](766, " attribute.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](767, "h3", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](768, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](769, "ng-template[nzTabLink] > a[nz-tab-link]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](770, "a", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](771, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](772, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](773, "Show a link in tab's head. Used in router link mode.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](774, "pre", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](775, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](776, "span", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](777, "span", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](778, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](779, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](780, "nz-tabset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](781, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](782, "span", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](783, "nzLinkRouter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](784, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](785, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](786, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](787, "span", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](788, "span", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](789, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](790, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](791, "nz-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](792, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](793, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](794, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](795, "span", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](796, "span", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](797, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](798, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](799, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](800, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](801, "span", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](802, "*nzTabLink");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](803, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](804, "span", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](805, "nz-tab-link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](806, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](807, "span", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](808, "[routerLink]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](809, "span", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](810, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](811, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](812, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](813, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](814, "[");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](815, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](816, "'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](817, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](818, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](819, "'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](820, "]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](821, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](822, "\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](823, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](824, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](825, "Link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](826, "span", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](827, "span", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](828, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](829, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](830, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](831, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](832, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](833, "\n    Default.\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](834, "span", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](835, "span", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](836, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](837, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](838, "nz-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](839, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](840, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](841, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](842, "span", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](843, "span", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](844, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](845, "</");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](846, "nz-tabset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](847, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](848, ">");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzGutter", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSpan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-tabs-demo-basic")("nzLink", "components-tabs-demo-basic")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/tabs/demo/basic.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-tabs-demo-disabled")("nzLink", "components-tabs-demo-disabled")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/tabs/demo/disabled.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-tabs-demo-icon")("nzLink", "components-tabs-demo-icon")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/tabs/demo/icon.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-tabs-demo-slide")("nzLink", "components-tabs-demo-slide")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/tabs/demo/slide.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-tabs-demo-extra")("nzLink", "components-tabs-demo-extra")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/tabs/demo/extra.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-tabs-demo-size")("nzLink", "components-tabs-demo-size")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/tabs/demo/size.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-tabs-demo-position")("nzLink", "components-tabs-demo-position")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/tabs/demo/position.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-tabs-demo-card")("nzLink", "components-tabs-demo-card")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/tabs/demo/card.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-tabs-demo-editable-card")("nzLink", "components-tabs-demo-editable-card")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/tabs/demo/editable-card.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-tabs-demo-card-top")("nzLink", "components-tabs-demo-card-top")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/tabs/demo/card-top.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-tabs-demo-custom-add-trigger")("nzLink", "components-tabs-demo-custom-add-trigger")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/tabs/demo/custom-add-trigger.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-tabs-demo-lazy")("nzLink", "components-tabs-demo-lazy")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/tabs/demo/lazy.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-tabs-demo-link-router")("nzLink", "components-tabs-demo-link-router")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/tabs/demo/link-router.md");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzId", "components-tabs-demo-guard")("nzLink", "components-tabs-demo-guard")("nzIframeHeight", null)("nzHref", "https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/tabs/demo/guard.md");
    } }, directives: [ng_zorro_antd_affix__WEBPACK_IMPORTED_MODULE_2__["NzAffixComponent"], ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_3__["NzAnchorComponent"], ng_zorro_antd_anchor__WEBPACK_IMPORTED_MODULE_3__["NzAnchorLinkComponent"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__["NzIconDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__["ɵNzTransitionPatchDirective"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_6__["NzTooltipDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__["NzRowDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__["NzColDirective"], _share_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_1__["NzCodeBoxComponent"], _basic__WEBPACK_IMPORTED_MODULE_8__["NzDemoTabsBasicComponent"], _disabled__WEBPACK_IMPORTED_MODULE_9__["NzDemoTabsDisabledComponent"], _icon__WEBPACK_IMPORTED_MODULE_10__["NzDemoTabsIconComponent"], _slide__WEBPACK_IMPORTED_MODULE_11__["NzDemoTabsSlideComponent"], _extra__WEBPACK_IMPORTED_MODULE_12__["NzDemoTabsExtraComponent"], _size__WEBPACK_IMPORTED_MODULE_13__["NzDemoTabsSizeComponent"], _position__WEBPACK_IMPORTED_MODULE_14__["NzDemoTabsPositionComponent"], _card__WEBPACK_IMPORTED_MODULE_15__["NzDemoTabsCardComponent"], _editable_card__WEBPACK_IMPORTED_MODULE_16__["NzDemoTabsEditableCardComponent"], _card_top__WEBPACK_IMPORTED_MODULE_17__["NzDemoTabsCardTopComponent"], _custom_add_trigger__WEBPACK_IMPORTED_MODULE_18__["NzDemoTabsCustomAddTriggerComponent"], _lazy__WEBPACK_IMPORTED_MODULE_19__["NzDemoTabsLazyComponent"], _link_router__WEBPACK_IMPORTED_MODULE_20__["NzDemoTabsLinkRouterComponent"], _guard__WEBPACK_IMPORTED_MODULE_21__["NzDemoTabsGuardComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoTabsEnComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-demo-tabs',
                preserveWhitespaces: false,
                templateUrl: './en.html'
            }]
    }], null, { codeBoxes: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"],
            args: [_share_codebox_codebox_component__WEBPACK_IMPORTED_MODULE_1__["NzCodeBoxComponent"]]
        }] }); })();


/***/ }),

/***/ "tgpG":
/*!******************************************!*\
  !*** ./site/doc/app/tabs/link-router.ts ***!
  \******************************************/
/*! exports provided: NzDemoTabsLinkRouterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoTabsLinkRouterComponent", function() { return NzDemoTabsLinkRouterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/tabs */ "iimT");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-quicklink */ "FDOz");





const _c0 = function () { return ["."]; };
const _c1 = function () { return { tab: "one" }; };
function NzDemoTabsLinkRouterComponent_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Default");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
} }
const _c2 = function () { return { tab: "two" }; };
function NzDemoTabsLinkRouterComponent_a_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Two");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c2));
} }
const _c3 = function () { return { tab: "three" }; };
function NzDemoTabsLinkRouterComponent_a_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Three");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c3));
} }
const _c4 = function () { return { tab: "four" }; };
function NzDemoTabsLinkRouterComponent_a_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Four");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c4));
} }
class NzDemoTabsLinkRouterComponent {
}
/** @nocollapse */ NzDemoTabsLinkRouterComponent.ɵfac = function NzDemoTabsLinkRouterComponent_Factory(t) { return new (t || NzDemoTabsLinkRouterComponent)(); };
/** @nocollapse */ NzDemoTabsLinkRouterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoTabsLinkRouterComponent, selectors: [["nz-demo-tabs-link-router"]], decls: 13, vars: 0, consts: [["nzLinkRouter", ""], ["nz-tab-link", "", "queryParamsHandling", "merge", 3, "routerLink", "queryParams", 4, "nzTabLink"], ["nz-tab-link", "", "queryParamsHandling", "merge", 3, "routerLink", "queryParams"]], template: function NzDemoTabsLinkRouterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-tabset", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzDemoTabsLinkRouterComponent_a_2_Template, 2, 4, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Default. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nz-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NzDemoTabsLinkRouterComponent_a_5_Template, 2, 4, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Two. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nz-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NzDemoTabsLinkRouterComponent_a_8_Template, 2, 4, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Three. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "nz-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, NzDemoTabsLinkRouterComponent_a_11_Template, 2, 4, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Four. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_1__["NzTabSetComponent"], ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_1__["NzTabComponent"], ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_1__["NzTabLinkTemplateDirective"], ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_1__["NzTabLinkDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__["ɵɵLinkDirective"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoTabsLinkRouterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-demo-tabs-link-router',
                template: `
    <nz-tabset nzLinkRouter>
      <nz-tab>
        <a *nzTabLink nz-tab-link [routerLink]="['.']" [queryParams]="{ tab: 'one' }" queryParamsHandling="merge">Default</a>
        Default.
      </nz-tab>
      <nz-tab>
        <a *nzTabLink nz-tab-link [routerLink]="['.']" [queryParams]="{ tab: 'two' }" queryParamsHandling="merge">Two</a>
        Two.
      </nz-tab>
      <nz-tab>
        <a *nzTabLink nz-tab-link [routerLink]="['.']" [queryParams]="{ tab: 'three' }" queryParamsHandling="merge">Three</a>
        Three.
      </nz-tab>
      <nz-tab>
        <a *nzTabLink nz-tab-link [routerLink]="['.']" [queryParams]="{ tab: 'four' }" queryParamsHandling="merge">Four</a>
        Four.
      </nz-tab>
    </nz-tabset>
  `
            }]
    }], null, null); })();


/***/ }),

/***/ "vXZ+":
/*!************************************!*\
  !*** ./site/doc/app/tabs/extra.ts ***!
  \************************************/
/*! exports provided: NzDemoTabsExtraComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzDemoTabsExtraComponent", function() { return NzDemoTabsExtraComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/tabs */ "iimT");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/button */ "TZWX");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "vdzw");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "uLhK");







function NzDemoTabsExtraComponent_nz_tab_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-tab", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tab_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzTitle", "Tab " + tab_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Content of tab ", tab_r3, "");
} }
function NzDemoTabsExtraComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Extra Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class NzDemoTabsExtraComponent {
    constructor() {
        this.tabs = [1, 2, 3];
    }
}
/** @nocollapse */ NzDemoTabsExtraComponent.ɵfac = function NzDemoTabsExtraComponent_Factory(t) { return new (t || NzDemoTabsExtraComponent)(); };
/** @nocollapse */ NzDemoTabsExtraComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzDemoTabsExtraComponent, selectors: [["nz-demo-tabs-extra"]], decls: 4, vars: 2, consts: [[3, "nzTabBarExtraContent"], [3, "nzTitle", 4, "ngFor", "ngForOf"], ["extraTemplate", ""], [3, "nzTitle"], ["nz-button", ""]], template: function NzDemoTabsExtraComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-tabset", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzDemoTabsExtraComponent_nz_tab_1_Template, 2, 2, "nz-tab", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzDemoTabsExtraComponent_ng_template_2_Template, 2, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzTabBarExtraContent", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tabs);
    } }, directives: [ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_1__["NzTabSetComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_1__["NzTabComponent"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_3__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_4__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__["ɵNzTransitionPatchDirective"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzDemoTabsExtraComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-demo-tabs-extra',
                template: `
    <nz-tabset [nzTabBarExtraContent]="extraTemplate">
      <nz-tab *ngFor="let tab of tabs" [nzTitle]="'Tab ' + tab">Content of tab {{ tab }}</nz-tab>
    </nz-tabset>
    <ng-template #extraTemplate>
      <button nz-button>Extra Action</button>
    </ng-template>
  `
            }]
    }], null, null); })();


/***/ })

};;
//# sourceMappingURL=tabs-index-module.js.map