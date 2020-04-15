exports.ids = ["code-editor-index-module~mention-index-module~space-index-module"];
exports.modules = {

/***/ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-mention.js":
/*!****************************************************************!*\
  !*** ./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-mention.js ***!
  \****************************************************************/
/*! exports provided: NZ_MENTION_TRIGGER_ACCESSOR, NzMentionComponent, NzMentionModule, NzMentionService, NzMentionSuggestionDirective, NzMentionTriggerDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NZ_MENTION_TRIGGER_ACCESSOR", function() { return NZ_MENTION_TRIGGER_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzMentionComponent", function() { return NzMentionComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzMentionModule", function() { return NzMentionModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzMentionService", function() { return NzMentionService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzMentionSuggestionDirective", function() { return NzMentionSuggestionDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzMentionTriggerDirective", function() { return NzMentionTriggerDirective; });
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/overlay.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/icon */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-icon.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/keycodes.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/portal.js");
/* harmony import */ var ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/core/overlay */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-overlay.js");
/* harmony import */ var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/core/util */ "./publish/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-util.js");












/**
 * @fileoverview added by tsickle
 * Generated from: mention-suggestions.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */





function NzMentionComponent_ng_template_1_li_1_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
} }
const _c0 = function (a0) { return { $implicit: a0 }; };
function NzMentionComponent_ng_template_1_li_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzMentionComponent_ng_template_1_li_1_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const suggestion_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", ctx_r107.suggestionTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c0, suggestion_r105));
} }
function NzMentionComponent_ng_template_1_li_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0);
} if (rf & 2) {
    const suggestion_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r109.nzValueWith(suggestion_r105));
} }
function NzMentionComponent_ng_template_1_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r114 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mousedown", function NzMentionComponent_ng_template_1_li_1_Template_li_mousedown_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r114); return $event.preventDefault(); })("click", function NzMentionComponent_ng_template_1_li_1_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r114); const suggestion_r105 = ctx.$implicit; const ctx_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r115.selectSuggestion(suggestion_r105); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzMentionComponent_ng_template_1_li_1_ng_container_1_Template, 2, 4, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NzMentionComponent_ng_template_1_li_1_ng_template_2_Template, 1, 1, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r106 = ctx.index;
    const _r108 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](3);
    const ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("focus", i_r106 === ctx_r103.activeIndex);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r103.suggestionTemplate)("ngIfElse", _r108);
} }
function NzMentionComponent_ng_template_1_li_2_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function NzMentionComponent_ng_template_1_li_2_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r117 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r117.nzNotFoundContent);
} }
function NzMentionComponent_ng_template_1_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzMentionComponent_ng_template_1_li_2_span_1_Template, 2, 0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NzMentionComponent_ng_template_1_li_2_span_2_Template, 2, 1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r104.nzLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r104.nzLoading);
} }
function NzMentionComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ul", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzMentionComponent_ng_template_1_li_1_Template, 4, 4, "li", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NzMentionComponent_ng_template_1_li_2_Template, 3, 2, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r102.filteredSuggestions);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r102.filteredSuggestions.length === 0);
} }
const _c1 = ["*"];
class NzMentionSuggestionDirective {
}
NzMentionSuggestionDirective.ɵfac = function NzMentionSuggestionDirective_Factory(t) { return new (t || NzMentionSuggestionDirective)(); };
NzMentionSuggestionDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: NzMentionSuggestionDirective, selectors: [["", "nzMentionSuggestion", ""]], exportAs: ["nzMentionSuggestion"] });

/**
 * @fileoverview added by tsickle
 * Generated from: mention.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzMentionService {
    constructor() {
        this.triggerChange$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
    }
    /**
     * @return {?}
     */
    triggerChanged() {
        return this.triggerChange$.asObservable();
    }
    /**
     * @param {?} trigger
     * @return {?}
     */
    registerTrigger(trigger) {
        if (this.trigger !== trigger) {
            this.trigger = trigger;
            this.triggerChange$.next(trigger);
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.triggerChange$.complete();
    }
}
NzMentionService.ɵfac = function NzMentionService_Factory(t) { return new (t || NzMentionService)(); };
NzMentionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: NzMentionService, factory: NzMentionService.ɵfac });
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: mention-trigger.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const NZ_MENTION_TRIGGER_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])((/**
     * @return {?}
     */
    () => NzMentionTriggerDirective)),
    multi: true
};
class NzMentionTriggerDirective {
    /**
     * @param {?} el
     * @param {?} nzMentionService
     */
    constructor(el, nzMentionService) {
        this.el = el;
        this.nzMentionService = nzMentionService;
        this.onChange = (/**
         * @return {?}
         */
        () => { });
        this.onTouched = (/**
         * @return {?}
         */
        () => { });
        this.onFocusin = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.onBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.onInput = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.onKeydown = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    completeEvents() {
        this.onFocusin.complete();
        this.onBlur.complete();
        this.onInput.complete();
        this.onKeydown.complete();
        this.onClick.complete();
    }
    /**
     * @param {?=} caretPos
     * @return {?}
     */
    focus(caretPos) {
        this.el.nativeElement.focus();
        this.el.nativeElement.setSelectionRange(caretPos, caretPos);
    }
    /**
     * @param {?} mention
     * @return {?}
     */
    insertMention(mention) {
        /** @type {?} */
        const value = this.el.nativeElement.value;
        /** @type {?} */
        const insertValue = mention.mention.trim() + ' ';
        /** @type {?} */
        const newValue = [value.slice(0, mention.startPos + 1), insertValue, value.slice(mention.endPos, value.length)].join('');
        this.el.nativeElement.value = newValue;
        this.focus(mention.startPos + insertValue.length + 1);
        this.onChange(newValue);
        this.value = newValue;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.value = value;
        if (typeof value === 'string') {
            this.el.nativeElement.value = value;
        }
        else {
            this.el.nativeElement.value = '';
        }
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
     * @return {?}
     */
    ngAfterViewInit() {
        this.nzMentionService.registerTrigger(this);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.completeEvents();
    }
}
NzMentionTriggerDirective.ɵfac = function NzMentionTriggerDirective_Factory(t) { return new (t || NzMentionTriggerDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](NzMentionService)); };
NzMentionTriggerDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: NzMentionTriggerDirective, selectors: [["input", "nzMentionTrigger", ""], ["textarea", "nzMentionTrigger", ""]], hostAttrs: ["autocomplete", "off"], hostBindings: function NzMentionTriggerDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("focusin", function NzMentionTriggerDirective_focusin_HostBindingHandler() { return ctx.onFocusin.emit(); })("blur", function NzMentionTriggerDirective_blur_HostBindingHandler() { return ctx.onBlur.emit(); })("input", function NzMentionTriggerDirective_input_HostBindingHandler($event) { return ctx.onInput.emit($event); })("keydown", function NzMentionTriggerDirective_keydown_HostBindingHandler($event) { return ctx.onKeydown.emit($event); })("click", function NzMentionTriggerDirective_click_HostBindingHandler($event) { return ctx.onClick.emit($event); });
    } }, exportAs: ["nzMentionTrigger"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([NZ_MENTION_TRIGGER_ACCESSOR])] });
/** @nocollapse */
NzMentionTriggerDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
    { type: NzMentionService }
];
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: mention.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function MentionOnSearchTypes() { }
if (false) {}
/**
 * @record
 */
function Mention() { }
if (false) {}
class NzMentionComponent {
    /**
     * @param {?} ngDocument
     * @param {?} cdr
     * @param {?} overlay
     * @param {?} viewContainerRef
     * @param {?} nzMentionService
     */
    constructor(ngDocument, cdr, overlay, viewContainerRef, nzMentionService) {
        this.ngDocument = ngDocument;
        this.cdr = cdr;
        this.overlay = overlay;
        this.viewContainerRef = viewContainerRef;
        this.nzMentionService = nzMentionService;
        this.nzValueWith = (/**
         * @param {?} value
         * @return {?}
         */
        value => value);
        this.nzPrefix = '@';
        this.nzLoading = false;
        this.nzNotFoundContent = '无匹配结果，轻敲空格完成输入';
        this.nzPlacement = 'bottom';
        this.nzSuggestions = [];
        this.nzOnSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.nzOnSearchChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.isOpen = false;
        this.filteredSuggestions = [];
        this.suggestionTemplate = null;
        this.activeIndex = -1;
        this.previousValue = null;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set suggestionChild(value) {
        if (value) {
            this.suggestionTemplate = value;
        }
    }
    /**
     * @private
     * @return {?}
     */
    get triggerNativeElement() {
        return this.trigger.el.nativeElement;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.nzMentionService.triggerChanged().subscribe((/**
         * @param {?} trigger
         * @return {?}
         */
        trigger => {
            this.trigger = trigger;
            this.bindTriggerEvents();
            this.closeDropdown();
            this.overlayRef = null;
        }));
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.hasOwnProperty('nzSuggestions')) {
            if (this.isOpen) {
                this.previousValue = null;
                this.activeIndex = -1;
                this.resetDropdown(false);
            }
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.closeDropdown();
    }
    /**
     * @return {?}
     */
    closeDropdown() {
        if (this.overlayRef && this.overlayRef.hasAttached()) {
            this.overlayRef.detach();
            this.overlayBackdropClickSubscription.unsubscribe();
            this.isOpen = false;
            this.cdr.markForCheck();
        }
    }
    /**
     * @return {?}
     */
    openDropdown() {
        this.attachOverlay();
        this.isOpen = true;
        this.cdr.markForCheck();
    }
    /**
     * @return {?}
     */
    getMentions() {
        return this.trigger ? Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_10__["getMentions"])(this.trigger.value, this.nzPrefix) : [];
    }
    /**
     * @param {?} suggestion
     * @return {?}
     */
    selectSuggestion(suggestion) {
        /** @type {?} */
        const value = this.nzValueWith(suggestion);
        this.trigger.insertMention({
            mention: value,
            startPos: this.cursorMentionStart,
            endPos: this.cursorMentionEnd
        });
        this.nzOnSelect.emit(suggestion);
        this.closeDropdown();
        this.activeIndex = -1;
    }
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    handleInput(event) {
        /** @type {?} */
        const target = (/** @type {?} */ (event.target));
        this.trigger.onChange(target.value);
        this.trigger.value = target.value;
        this.resetDropdown();
    }
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    handleKeydown(event) {
        /** @type {?} */
        const keyCode = event.keyCode;
        if (this.isOpen && keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__["ENTER"] && this.activeIndex !== -1 && this.filteredSuggestions.length) {
            this.selectSuggestion(this.filteredSuggestions[this.activeIndex]);
            event.preventDefault();
        }
        else if (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__["LEFT_ARROW"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__["RIGHT_ARROW"]) {
            this.resetDropdown();
            event.stopPropagation();
        }
        else {
            if (this.isOpen && (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__["TAB"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__["ESCAPE"])) {
                this.closeDropdown();
                return;
            }
            if (this.isOpen && keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__["UP_ARROW"]) {
                this.setPreviousItemActive();
                event.preventDefault();
                event.stopPropagation();
            }
            if (this.isOpen && keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__["DOWN_ARROW"]) {
                this.setNextItemActive();
                event.preventDefault();
                event.stopPropagation();
            }
        }
    }
    /**
     * @private
     * @return {?}
     */
    handleClick() {
        this.resetDropdown();
    }
    /**
     * @private
     * @return {?}
     */
    bindTriggerEvents() {
        this.trigger.onInput.subscribe((/**
         * @param {?} e
         * @return {?}
         */
        (e) => this.handleInput(e)));
        this.trigger.onKeydown.subscribe((/**
         * @param {?} e
         * @return {?}
         */
        (e) => this.handleKeydown(e)));
        this.trigger.onClick.subscribe((/**
         * @return {?}
         */
        () => this.handleClick()));
    }
    /**
     * @private
     * @param {?} value
     * @param {?} emit
     * @return {?}
     */
    suggestionsFilter(value, emit) {
        /** @type {?} */
        const suggestions = value.substring(1);
        if (this.previousValue === value) {
            return;
        }
        this.previousValue = value;
        if (emit) {
            this.nzOnSearchChange.emit({
                value: (/** @type {?} */ (this.cursorMention)).substring(1),
                prefix: (/** @type {?} */ (this.cursorMention))[0]
            });
        }
        /** @type {?} */
        const searchValue = suggestions.toLowerCase();
        this.filteredSuggestions = this.nzSuggestions.filter((/**
         * @param {?} suggestion
         * @return {?}
         */
        suggestion => this.nzValueWith(suggestion).toLowerCase().includes(searchValue)));
    }
    /**
     * @private
     * @param {?=} emit
     * @return {?}
     */
    resetDropdown(emit = true) {
        this.resetCursorMention();
        if (typeof this.cursorMention !== 'string' || !this.canOpen()) {
            this.closeDropdown();
            return;
        }
        this.suggestionsFilter(this.cursorMention, emit);
        /** @type {?} */
        const activeIndex = this.filteredSuggestions.indexOf(this.cursorMention.substring(1));
        this.activeIndex = activeIndex >= 0 ? activeIndex : 0;
        this.openDropdown();
    }
    /**
     * @private
     * @return {?}
     */
    setNextItemActive() {
        this.activeIndex = this.activeIndex + 1 <= this.filteredSuggestions.length - 1 ? this.activeIndex + 1 : 0;
        this.cdr.markForCheck();
    }
    /**
     * @private
     * @return {?}
     */
    setPreviousItemActive() {
        this.activeIndex = this.activeIndex - 1 < 0 ? this.filteredSuggestions.length - 1 : this.activeIndex - 1;
        this.cdr.markForCheck();
    }
    /**
     * @private
     * @return {?}
     */
    canOpen() {
        /** @type {?} */
        const element = this.triggerNativeElement;
        return !element.readOnly && !element.disabled;
    }
    /**
     * @private
     * @return {?}
     */
    resetCursorMention() {
        /** @type {?} */
        const value = this.triggerNativeElement.value.replace(/[\r\n]/g, ' ') || '';
        /** @type {?} */
        const selectionStart = (/** @type {?} */ (this.triggerNativeElement.selectionStart));
        /** @type {?} */
        const prefix = typeof this.nzPrefix === 'string' ? [this.nzPrefix] : this.nzPrefix;
        /** @type {?} */
        let i = prefix.length;
        while (i >= 0) {
            /** @type {?} */
            const startPos = value.lastIndexOf(prefix[i], selectionStart);
            /** @type {?} */
            const endPos = value.indexOf(' ', selectionStart) > -1 ? value.indexOf(' ', selectionStart) : value.length;
            /** @type {?} */
            const mention = value.substring(startPos, endPos);
            if ((startPos > 0 && value[startPos - 1] !== ' ') || startPos < 0 || mention.includes(prefix[i], 1) || mention.includes(' ')) {
                this.cursorMention = null;
                this.cursorMentionStart = -1;
                this.cursorMentionEnd = -1;
            }
            else {
                this.cursorMention = mention;
                this.cursorMentionStart = startPos;
                this.cursorMentionEnd = endPos;
                return;
            }
            i--;
        }
    }
    /**
     * @private
     * @return {?}
     */
    updatePositions() {
        /** @type {?} */
        const coordinates = Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_10__["getCaretCoordinates"])(this.triggerNativeElement, this.cursorMentionStart);
        /** @type {?} */
        const top = coordinates.top -
            this.triggerNativeElement.getBoundingClientRect().height -
            this.triggerNativeElement.scrollTop +
            (this.nzPlacement === 'bottom' ? coordinates.height - 6 : -6);
        /** @type {?} */
        const left = coordinates.left - this.triggerNativeElement.scrollLeft;
        this.positionStrategy.withDefaultOffsetX(left).withDefaultOffsetY(top);
        if (this.nzPlacement === 'bottom') {
            this.positionStrategy.withPositions([...ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_9__["DEFAULT_MENTION_BOTTOM_POSITIONS"]]);
        }
        if (this.nzPlacement === 'top') {
            this.positionStrategy.withPositions([...ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_9__["DEFAULT_MENTION_TOP_POSITIONS"]]);
        }
        this.positionStrategy.apply();
    }
    /**
     * @private
     * @return {?}
     */
    subscribeOverlayBackdropClick() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["merge"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["fromEvent"])(this.ngDocument, 'click'), Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["fromEvent"])(this.ngDocument, 'touchend')).subscribe((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            /** @type {?} */
            const clickTarget = (/** @type {?} */ (event.target));
            if (this.isOpen &&
                clickTarget !== this.trigger.el.nativeElement &&
                !!this.overlayRef &&
                !this.overlayRef.overlayElement.contains(clickTarget)) {
                this.closeDropdown();
            }
        }));
    }
    /**
     * @private
     * @return {?}
     */
    attachOverlay() {
        if (!this.overlayRef) {
            this.portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_8__["TemplatePortal"](this.suggestionsTemp, this.viewContainerRef);
            this.overlayRef = this.overlay.create(this.getOverlayConfig());
        }
        if (this.overlayRef && !this.overlayRef.hasAttached()) {
            this.overlayRef.attach(this.portal);
            this.overlayBackdropClickSubscription = this.subscribeOverlayBackdropClick();
        }
        this.updatePositions();
    }
    /**
     * @private
     * @return {?}
     */
    getOverlayConfig() {
        return new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayConfig"]({
            positionStrategy: this.getOverlayPosition(),
            scrollStrategy: this.overlay.scrollStrategies.reposition(),
            disposeOnNavigation: true
        });
    }
    /**
     * @private
     * @return {?}
     */
    getOverlayPosition() {
        /** @type {?} */
        const positions = [
            new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["ConnectionPositionPair"]({ originX: 'start', originY: 'bottom' }, { overlayX: 'start', overlayY: 'top' }),
            new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["ConnectionPositionPair"]({ originX: 'start', originY: 'top' }, { overlayX: 'start', overlayY: 'bottom' })
        ];
        this.positionStrategy = this.overlay
            .position()
            .flexibleConnectedTo(this.trigger.el)
            .withPositions(positions)
            .withFlexibleDimensions(false)
            .withPush(false);
        return this.positionStrategy;
    }
}
NzMentionComponent.ɵfac = function NzMentionComponent_Factory(t) { return new (t || NzMentionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](NzMentionService)); };
NzMentionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NzMentionComponent, selectors: [["nz-mention"]], contentQueries: function NzMentionComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, NzMentionSuggestionDirective, true, _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"]);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.suggestionChild = _t.first);
    } }, viewQuery: function NzMentionComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.suggestionsTemp = _t.first);
    } }, inputs: { nzValueWith: "nzValueWith", nzPrefix: "nzPrefix", nzLoading: "nzLoading", nzNotFoundContent: "nzNotFoundContent", nzPlacement: "nzPlacement", nzSuggestions: "nzSuggestions" }, outputs: { nzOnSelect: "nzOnSelect", nzOnSearchChange: "nzOnSearchChange" }, exportAs: ["nzMention"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([NzMentionService]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c1, decls: 3, vars: 0, consts: [["suggestions", ""], [1, "ant-mention-dropdown"], ["class", "ant-mention-dropdown-item", 3, "focus", "mousedown", "click", 4, "ngFor", "ngForOf"], ["class", "ant-mention-dropdown-notfound ant-mention-dropdown-item", 4, "ngIf"], [1, "ant-mention-dropdown-item", 3, "mousedown", "click"], [4, "ngIf", "ngIfElse"], ["defaultSuggestion", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "ant-mention-dropdown-notfound", "ant-mention-dropdown-item"], [4, "ngIf"], ["nz-icon", "", "nzType", "loading"]], template: function NzMentionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzMentionComponent_ng_template_1_Template, 3, 2, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgTemplateOutlet"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__["NzIconDirective"]], encapsulation: 2, changeDetection: 0 });
/** @nocollapse */
NzMentionComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"],] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
    { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"] },
    { type: NzMentionService }
];
NzMentionComponent.propDecorators = {
    nzValueWith: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzPrefix: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzLoading: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzNotFoundContent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzPlacement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzSuggestions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    nzOnSelect: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
    nzOnSearchChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
    suggestionsTemp: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"], { static: false },] }],
    suggestionChild: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"], args: [NzMentionSuggestionDirective, { static: false, read: _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"] },] }]
};
Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_10__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__metadata"])("design:type", Object)
], NzMentionComponent.prototype, "nzLoading", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NzMentionSuggestionDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
        args: [{
                selector: '[nzMentionSuggestion]',
                exportAs: 'nzMentionSuggestion'
            }]
    }], null, null); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NzMentionService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
    }], function () { return []; }, null); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NzMentionTriggerDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
        args: [{
                selector: 'input[nzMentionTrigger], textarea[nzMentionTrigger]',
                exportAs: 'nzMentionTrigger',
                providers: [NZ_MENTION_TRIGGER_ACCESSOR],
                host: {
                    autocomplete: 'off',
                    '(focusin)': 'onFocusin.emit()',
                    '(blur)': 'onBlur.emit()',
                    '(input)': 'onInput.emit($event)',
                    '(keydown)': 'onKeydown.emit($event)',
                    '(click)': 'onClick.emit($event)'
                }
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }, { type: NzMentionService }]; }, null); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NzMentionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'nz-mention',
                exportAs: 'nzMention',
                template: `
    <ng-content></ng-content>
    <ng-template #suggestions>
      <ul class="ant-mention-dropdown">
        <li
          class="ant-mention-dropdown-item"
          *ngFor="let suggestion of filteredSuggestions; let i = index"
          [class.focus]="i === activeIndex"
          (mousedown)="$event.preventDefault()"
          (click)="selectSuggestion(suggestion)"
        >
          <ng-container *ngIf="suggestionTemplate; else defaultSuggestion">
            <ng-container *ngTemplateOutlet="suggestionTemplate; context: { $implicit: suggestion }"></ng-container>
          </ng-container>
          <ng-template #defaultSuggestion>{{ nzValueWith(suggestion) }}</ng-template>
        </li>
        <li class="ant-mention-dropdown-notfound ant-mention-dropdown-item" *ngIf="filteredSuggestions.length === 0">
          <span *ngIf="nzLoading"><i nz-icon nzType="loading"></i></span>
          <span *ngIf="!nzLoading">{{ nzNotFoundContent }}</span>
        </li>
      </ul>
    </ng-template>
  `,
                preserveWhitespaces: false,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
                providers: [NzMentionService]
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] }, { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"] }, { type: NzMentionService }]; }, { nzValueWith: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzPrefix: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzLoading: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzNotFoundContent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzPlacement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzSuggestions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], nzOnSelect: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], nzOnSearchChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], suggestionChild: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"],
            args: [NzMentionSuggestionDirective, { static: false, read: _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"] }]
        }], suggestionsTemp: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"], { static: false }]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: mention.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const COMPONENTS = [NzMentionComponent, NzMentionTriggerDirective, NzMentionSuggestionDirective];
class NzMentionModule {
}
NzMentionModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: NzMentionModule });
NzMentionModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function NzMentionModule_Factory(t) { return new (t || NzMentionModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__["NzIconModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](NzMentionModule, { declarations: function () { return [NzMentionComponent,
        NzMentionTriggerDirective,
        NzMentionSuggestionDirective]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__["NzIconModule"]]; }, exports: function () { return [NzMentionComponent,
        NzMentionTriggerDirective,
        NzMentionSuggestionDirective]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NzMentionModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__["NzIconModule"]],
                declarations: [...COMPONENTS],
                exports: [...COMPONENTS]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ng-zorro-antd-mention.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ng-zorro-antd-mention.js.map

/***/ })

};;
//# sourceMappingURL=code-editor-index-module~mention-index-module~space-index-module.js.map