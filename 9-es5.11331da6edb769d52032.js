function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{Zmph:function(t,e,n){"use strict";n.d(e,"a",(function(){return K})),n.d(e,"b",(function(){return tt}));var i,s,c,o,a=n("ofXK"),r=n("fXoL"),l=function(){function t(e,n){_classCallCheck(this,t),this._document=n;var i=this._textarea=this._document.createElement("textarea"),s=i.style;s.opacity="0",s.position="absolute",s.left=s.top="-999em",i.setAttribute("aria-hidden","true"),i.value=e,this._document.body.appendChild(i)}return _createClass(t,[{key:"copy",value:function(){var t=this._textarea,e=!1;try{if(t){var n=this._document.activeElement;t.select(),t.setSelectionRange(0,t.value.length),e=this._document.execCommand("copy"),n&&n.focus()}}catch(i){}return e}},{key:"destroy",value:function(){var t=this._textarea;t&&(t.parentNode&&t.parentNode.removeChild(t),this._textarea=void 0)}}]),t}(),p=((s=function(){function t(e){_classCallCheck(this,t),this._document=e}return _createClass(t,[{key:"copy",value:function(t){var e=this.beginCopy(t),n=e.copy();return e.destroy(),n}},{key:"beginCopy",value:function(t){return new l(t,this._document)}}]),t}()).\u0275fac=function(t){return new(t||s)(r.fc(a.d))},s.\u0275prov=Object(r.Pb)({factory:function(){return new s(Object(r.fc)(a.d))},token:s,providedIn:"root"}),s),u=((i=function t(){_classCallCheck(this,t)}).\u0275mod=r.Rb({type:i}),i.\u0275inj=r.Qb({factory:function(t){return new(t||i)}}),i),h=n("nLfN"),d=((o=function t(){_classCallCheck(this,t)}).\u0275fac=function(t){return new(t||o)},o.\u0275dir=r.Ob({type:o,selectors:[["button","nz-trans-button",""]],hostVars:8,hostBindings:function(t,e){2&t&&r.Qc("border","0")("background","transparent",r.Mb)("padding","0")("line-height","inherit")}}),o),f=((c=function t(){_classCallCheck(this,t)}).\u0275mod=r.Rb({type:c}),c.\u0275inj=r.Qb({factory:function(t){return new(t||c)},imports:[[a.c]]}),c),b=n("d4FC"),y=n("MOHP"),v=n("klHs"),g=n("pk25"),z=n("XNiG"),x=n("quSY"),C=n("1G5W"),E=n("mrSG"),m=n("8IHs"),k=n("yTbr"),w=n("d1+9"),T=n("amOf"),O=["textarea"];function R(t,e){if(1&t){var n=r.cc();r.ac(0,"button",2),r.jc("click",(function(){return r.Ic(n),r.nc().onClick()})),r.Vb(1,"i",3),r.Zb()}if(2&t){var i=r.nc();r.vc("nzTooltipTitle",null==i.locale?null:i.locale.edit)}}function j(t,e){if(1&t){var n=r.cc();r.Yb(0),r.ac(1,"textarea",4,5),r.jc("input",(function(t){return r.Ic(n),r.nc().onInput(t)}))("blur",(function(){return r.Ic(n),r.nc().confirm()}))("keydown.esc",(function(){return r.Ic(n),r.nc().onCancel()}))("keydown.enter",(function(t){return r.Ic(n),r.nc().onEnter(t)})),r.Tc(3,"      "),r.Zb(),r.ac(4,"button",6),r.jc("click",(function(){return r.Ic(n),r.nc().confirm()})),r.Vb(5,"i",7),r.Zb(),r.Xb()}}var I=["ellipsisContainer"],S=["expandable"],D=["contentTemplate"];function _(t,e){1&t&&r.tc(0,0,["*ngIf","!content"])}function N(t,e){if(1&t&&(r.Rc(0,_,1,0,void 0,1),r.Tc(1)),2&t){var n=e.content;r.vc("ngIf",!n),r.Db(1),r.Vc(" ",n," ")}}function V(t,e){}var Z=function(t){return{content:t}};function B(t,e){if(1&t&&(r.Yb(0),r.Rc(1,V,0,0,"ng-template",4),r.Xb()),2&t){var n=r.nc(2),i=r.Fc(1);r.Db(1),r.vc("ngTemplateOutlet",i)("ngTemplateOutletContext",r.Ac(2,Z,n.nzContent))}}function $(t,e){1&t&&r.Vb(0,"span",null,6)}function A(t,e){if(1&t&&(r.Yb(0),r.Tc(1),r.Xb()),2&t){var n=r.nc(3);r.Db(1),r.Uc(n.ellipsisStr)}}function F(t,e){if(1&t&&(r.Yb(0),r.Tc(1),r.Xb()),2&t){var n=r.nc(3);r.Db(1),r.Uc(n.nzSuffix)}}function X(t,e){if(1&t){var n=r.cc();r.ac(0,"a",7,8),r.jc("click",(function(){return r.Ic(n),r.nc(3).onExpand()})),r.Tc(2),r.Zb()}if(2&t){var i=r.nc(3);r.Db(2),r.Uc(null==i.locale?null:i.locale.expand)}}function P(t,e){if(1&t&&(r.Yb(0),r.Rc(1,$,2,0,"span",1),r.Rc(2,A,2,1,"ng-container",1),r.Rc(3,F,2,1,"ng-container",1),r.Rc(4,X,3,1,"a",5),r.Xb()),2&t){var n=r.nc(2);r.Db(1),r.vc("ngIf",!n.expanded),r.Db(1),r.vc("ngIf",n.isEllipsis),r.Db(1),r.vc("ngIf",n.nzSuffix),r.Db(1),r.vc("ngIf",n.nzExpandable&&n.isEllipsis)}}function Q(t,e){if(1&t&&(r.Yb(0),r.Rc(1,B,2,4,"ng-container",1),r.Rc(2,P,5,4,"ng-container",1),r.Xb()),2&t){var n=r.nc();r.Db(1),r.vc("ngIf",n.expanded||!n.nzExpandable&&!n.nzSuffix&&1===n.nzEllipsisRows||n.canCssEllipsis),r.Db(1),r.vc("ngIf",n.nzEllipsis&&!n.expanded&&(n.nzEllipsisRows>1||n.nzExpandable)||n.nzSuffix)}}function Y(t,e){if(1&t){var n=r.cc();r.ac(0,"nz-text-edit",9),r.jc("endEditing",(function(t){return r.Ic(n),r.nc().onEndEditing(t)}))("startEditing",(function(){return r.Ic(n),r.nc().onStartEditing()})),r.Zb()}if(2&t){var i=r.nc();r.vc("text",i.nzContent)}}function L(t,e){if(1&t){var n=r.cc();r.ac(0,"nz-text-copy",10),r.jc("textCopy",(function(t){return r.Ic(n),r.nc().onTextCopy(t)})),r.Zb()}if(2&t){var i=r.nc();r.vc("text",i.copyText)}}var U,J,W,G,H=["*"],M=((G=function(){function t(e,n,i,s){_classCallCheck(this,t),this.host=e,this.cdr=n,this.clipboard=i,this.i18n=s,this.copied=!1,this.locale={},this.nativeElement=this.host.nativeElement,this.destroy$=new z.a,this.textCopy=new r.n}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this;this.i18n.localeChange.pipe(Object(C.a)(this.destroy$)).subscribe((function(){t.locale=t.i18n.getLocaleData("Text"),t.cdr.markForCheck()}))}},{key:"ngOnDestroy",value:function(){clearTimeout(this.copyId),this.destroy$.next(),this.destroy$.complete()}},{key:"onClick",value:function(){if(!this.copied){this.copied=!0,this.cdr.detectChanges();var t=this.text;this.textCopy.emit(t),this.clipboard.copy(t),this.onCopied()}}},{key:"onCopied",value:function(){var t=this;clearTimeout(this.copyId),this.copyId=setTimeout((function(){t.copied=!1,t.cdr.detectChanges()}),3e3)}}]),t}()).\u0275fac=function(t){return new(t||G)(r.Tb(r.l),r.Tb(r.h),r.Tb(p),r.Tb(b.d))},G.\u0275cmp=r.Nb({type:G,selectors:[["nz-text-copy"]],inputs:{text:"text"},outputs:{textCopy:"textCopy"},exportAs:["nzTextCopy"],decls:2,vars:4,consts:[["nz-tooltip","","nz-trans-button","",1,"ant-typography-copy",3,"nzTooltipTitle","click"],["nz-icon","",3,"nzType"]],template:function(t,e){1&t&&(r.ac(0,"button",0),r.jc("click",(function(){return e.onClick()})),r.Vb(1,"i",1),r.Zb()),2&t&&(r.Jb("ant-typography-copy-success",e.copied),r.vc("nzTooltipTitle",e.copied?null==e.locale?null:e.locale.copied:null==e.locale?null:e.locale.copy),r.Db(1),r.vc("nzType",e.copied?"check":"copy"))},directives:[d,g.d,y.a],encapsulation:2,changeDetection:0}),G),q=((W=function(){function t(e,n,i){_classCallCheck(this,t),this.host=e,this.cdr=n,this.i18n=i,this.editing=!1,this.locale={},this.destroy$=new z.a,this.startEditing=new r.n,this.endEditing=new r.n,this.nativeElement=this.host.nativeElement}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this;this.i18n.localeChange.pipe(Object(C.a)(this.destroy$)).subscribe((function(){t.locale=t.i18n.getLocaleData("Text"),t.cdr.markForCheck()}))}},{key:"ngOnDestroy",value:function(){this.destroy$.next(),this.destroy$.complete()}},{key:"onClick",value:function(){this.beforeText=this.text,this.currentText=this.beforeText,this.editing=!0,this.startEditing.emit(),this.focusAndSetValue()}},{key:"confirm",value:function(){this.editing=!1,this.endEditing.emit(this.currentText)}},{key:"onInput",value:function(t){this.currentText=t.target.value}},{key:"onEnter",value:function(t){t.stopPropagation(),t.preventDefault(),this.confirm()}},{key:"onCancel",value:function(){this.currentText=this.beforeText,this.confirm()}},{key:"focusAndSetValue",value:function(){var t=this;setTimeout((function(){var e;(null===(e=t.textarea)||void 0===e?void 0:e.nativeElement)&&(t.textarea.nativeElement.focus(),t.textarea.nativeElement.value=t.currentText,t.autosizeDirective.resizeToFitContent())}))}}]),t}()).\u0275fac=function(t){return new(t||W)(r.Tb(r.l),r.Tb(r.h),r.Tb(b.d))},W.\u0275cmp=r.Nb({type:W,selectors:[["nz-text-edit"]],viewQuery:function(t,e){var n;1&t&&(r.Zc(O,!0),r.Zc(v.a,!0)),2&t&&(r.Ec(n=r.kc())&&(e.textarea=n.first),r.Ec(n=r.kc())&&(e.autosizeDirective=n.first))},inputs:{text:"text"},outputs:{startEditing:"startEditing",endEditing:"endEditing"},exportAs:["nzTextEdit"],decls:2,vars:2,consts:[["nz-tooltip","","nz-trans-button","","class","ant-typography-edit",3,"nzTooltipTitle","click",4,"ngIf"],[4,"ngIf"],["nz-tooltip","","nz-trans-button","",1,"ant-typography-edit",3,"nzTooltipTitle","click"],["nz-icon","","nzType","edit"],["nz-input","","nzAutosize","",3,"input","blur","keydown.esc","keydown.enter"],["textarea",""],["nz-trans-button","",1,"ant-typography-edit-content-confirm",3,"click"],["nz-icon","","nzType","enter"]],template:function(t,e){1&t&&(r.Rc(0,R,2,1,"button",0),r.Rc(1,j,6,0,"ng-container",1)),2&t&&(r.vc("ngIf",!e.editing),r.Db(1),r.vc("ngIf",e.editing))},directives:[a.n,d,g.d,y.a,v.b,v.a],encapsulation:2,changeDetection:0}),W),K=((J=function(){function t(e,n,i,s,c,o,a,l,p){_classCallCheck(this,t),this.nzConfigService=e,this.host=n,this.cdr=i,this.viewContainerRef=s,this.renderer=c,this.platform=o,this.i18n=a,this.resizeService=p,this.nzCopyable=!1,this.nzEditable=!1,this.nzDisabled=!1,this.nzExpandable=!1,this.nzEllipsis=!1,this.nzContentChange=new r.n,this.nzCopy=new r.n,this.nzExpandChange=new r.n,this.locale={},this.expandableBtnElementCache=null,this.editing=!1,this.cssEllipsis=!1,this.isEllipsis=!0,this.expanded=!1,this.ellipsisStr="...",this.viewInit=!1,this.rfaId=-1,this.destroy$=new z.a,this.windowResizeSubscription=x.a.EMPTY,this.document=l}return _createClass(t,[{key:"onTextCopy",value:function(t){this.nzCopy.emit(t)}},{key:"onStartEditing",value:function(){this.editing=!0}},{key:"onEndEditing",value:function(t){this.editing=!1,this.nzContentChange.emit(t),this.nzContent===t&&this.renderOnNextFrame()}},{key:"onExpand",value:function(){this.isEllipsis=!1,this.expanded=!0,this.nzExpandChange.emit()}},{key:"canUseCSSEllipsis",value:function(){return!(this.nzEditable||this.nzCopyable||this.nzExpandable||this.nzSuffix)&&(1===this.nzEllipsisRows?Object(w.s)("textOverflow"):Object(w.s)("webkitLineClamp"))}},{key:"renderOnNextFrame",value:function(){var t=this;Object(k.a)(this.rfaId),!this.viewInit||!this.nzEllipsis||this.nzEllipsisRows<0||this.expanded||!this.platform.isBrowser||(this.rfaId=Object(k.b)((function(){t.syncEllipsis()})))}},{key:"getOriginContentViewRef",value:function(){var t=this,e=this.viewContainerRef.createEmbeddedView(this.contentTemplate,{content:this.nzContent});return e.detectChanges(),{viewRef:e,removeView:function(){t.viewContainerRef.remove(t.viewContainerRef.indexOf(e))}}}},{key:"syncEllipsis",value:function(){var t=this;if(!this.cssEllipsis){var e=this.getOriginContentViewRef(),n=e.viewRef,i=e.removeView,s=[this.textCopyRef,this.textEditRef].filter((function(t){return t&&t.nativeElement})).map((function(t){return t.nativeElement})),c=this.getExpandableBtnElement();c&&s.push(c);var o=Object(w.v)(this.host.nativeElement,this.nzEllipsisRows,n.rootNodes,s,this.ellipsisStr,this.nzSuffix),a=o.contentNodes,r=o.text,l=o.ellipsis;i(),this.ellipsisText=r,this.isEllipsis=l;for(var p=this.ellipsisContainer.nativeElement;p.firstChild;)this.renderer.removeChild(p,p.firstChild);a.forEach((function(e){t.renderer.appendChild(p,e.cloneNode(!0))})),this.cdr.markForCheck()}}},{key:"getExpandableBtnElement",value:function(){if(this.nzExpandable){var t=this.locale?this.locale.expand:"",e=this.expandableBtnElementCache;if(!e||e.innerText===t){var n=this.document.createElement("a");n.className="ant-typography-expand",n.innerText=t,this.expandableBtnElementCache=n}return this.expandableBtnElementCache}return this.expandableBtnElementCache=null,null}},{key:"renderAndSubscribeWindowResize",value:function(){var t=this;this.platform.isBrowser&&(this.windowResizeSubscription.unsubscribe(),this.cssEllipsis=this.canUseCSSEllipsis(),this.renderOnNextFrame(),this.windowResizeSubscription=this.resizeService.subscribe().pipe(Object(C.a)(this.destroy$)).subscribe((function(){return t.renderOnNextFrame()})))}},{key:"ngOnInit",value:function(){var t=this;this.i18n.localeChange.pipe(Object(C.a)(this.destroy$)).subscribe((function(){t.locale=t.i18n.getLocaleData("Text"),t.cdr.markForCheck()}))}},{key:"ngAfterViewInit",value:function(){this.viewInit=!0,this.renderAndSubscribeWindowResize()}},{key:"ngOnChanges",value:function(t){var e=t.nzCopyable,n=t.nzEditable,i=t.nzExpandable,s=t.nzEllipsis,c=t.nzContent,o=t.nzEllipsisRows,a=t.nzSuffix;(e||n||i||s||c||o||a)&&this.nzEllipsis&&(this.expanded?this.windowResizeSubscription.unsubscribe():this.renderAndSubscribeWindowResize())}},{key:"ngOnDestroy",value:function(){this.destroy$.next(),this.destroy$.complete(),this.expandableBtnElementCache=null,this.windowResizeSubscription.unsubscribe()}},{key:"canCssEllipsis",get:function(){return this.nzEllipsis&&this.cssEllipsis&&!this.expanded}},{key:"copyText",get:function(){return"string"==typeof this.nzCopyText?this.nzCopyText:this.nzContent}}]),t}()).\u0275fac=function(t){return new(t||J)(r.Tb(m.b),r.Tb(r.l),r.Tb(r.h),r.Tb(r.Q),r.Tb(r.E),r.Tb(h.a),r.Tb(b.d),r.Tb(a.d),r.Tb(T.d))},J.\u0275cmp=r.Nb({type:J,selectors:[["nz-typography"],["","nz-typography",""],["p","nz-paragraph",""],["span","nz-text",""],["h1","nz-title",""],["h2","nz-title",""],["h3","nz-title",""],["h4","nz-title",""]],viewQuery:function(t,e){var n;1&t&&(r.Zc(q,!0),r.Zc(M,!0),r.Zc(I,!0),r.Zc(S,!0),r.Zc(D,!0)),2&t&&(r.Ec(n=r.kc())&&(e.textEditRef=n.first),r.Ec(n=r.kc())&&(e.textCopyRef=n.first),r.Ec(n=r.kc())&&(e.ellipsisContainer=n.first),r.Ec(n=r.kc())&&(e.expandableBtn=n.first),r.Ec(n=r.kc())&&(e.contentTemplate=n.first))},hostVars:20,hostBindings:function(t,e){2&t&&(r.Qc("-webkit-line-clamp",e.canCssEllipsis&&e.nzEllipsisRows>1?e.nzEllipsisRows:null),r.Jb("ant-typography",!e.editing)("ant-typography-edit-content",e.editing)("ant-typography-secondary","secondary"===e.nzType)("ant-typography-warning","warning"===e.nzType)("ant-typography-danger","danger"===e.nzType)("ant-typography-disabled",e.nzDisabled)("ant-typography-ellipsis",e.nzEllipsis&&!e.expanded)("ant-typography-ellipsis-single-line",e.canCssEllipsis&&1===e.nzEllipsisRows)("ant-typography-ellipsis-multiple-line",e.canCssEllipsis&&e.nzEllipsisRows>1))},inputs:{nzCopyable:"nzCopyable",nzEditable:"nzEditable",nzDisabled:"nzDisabled",nzExpandable:"nzExpandable",nzEllipsis:"nzEllipsis",nzContent:"nzContent",nzEllipsisRows:"nzEllipsisRows",nzType:"nzType",nzCopyText:"nzCopyText",nzSuffix:"nzSuffix"},outputs:{nzContentChange:"nzContentChange",nzCopy:"nzCopy",nzExpandChange:"nzExpandChange"},exportAs:["nzTypography"],features:[r.Bb],ngContentSelectors:H,decls:5,vars:3,consts:[["contentTemplate",""],[4,"ngIf"],[3,"text","endEditing","startEditing",4,"ngIf"],[3,"text","textCopy",4,"ngIf"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],["class","ant-typography-expand",3,"click",4,"ngIf"],["ellipsisContainer",""],[1,"ant-typography-expand",3,"click"],["expandable",""],[3,"text","endEditing","startEditing"],[3,"text","textCopy"]],template:function(t,e){1&t&&(r.uc(),r.Rc(0,N,2,2,"ng-template",null,0,r.Sc),r.Rc(2,Q,3,2,"ng-container",1),r.Rc(3,Y,1,1,"nz-text-edit",2),r.Rc(4,L,1,1,"nz-text-copy",3)),2&t&&(r.Db(2),r.vc("ngIf",!e.editing),r.Db(1),r.vc("ngIf",e.nzEditable),r.Db(1),r.vc("ngIf",e.nzCopyable&&!e.editing))},directives:[a.n,a.s,q,M],encapsulation:2,changeDetection:0}),Object(E.b)([Object(w.a)(),Object(E.c)("design:type",Object)],J.prototype,"nzCopyable",void 0),Object(E.b)([Object(w.a)(),Object(E.c)("design:type",Object)],J.prototype,"nzEditable",void 0),Object(E.b)([Object(w.a)(),Object(E.c)("design:type",Object)],J.prototype,"nzDisabled",void 0),Object(E.b)([Object(w.a)(),Object(E.c)("design:type",Object)],J.prototype,"nzExpandable",void 0),Object(E.b)([Object(w.a)(),Object(E.c)("design:type",Object)],J.prototype,"nzEllipsis",void 0),Object(E.b)([Object(m.c)("typography",1),Object(w.b)(),Object(E.c)("design:type",Number)],J.prototype,"nzEllipsisRows",void 0),J),tt=((U=function t(){_classCallCheck(this,t)}).\u0275mod=r.Rb({type:U}),U.\u0275inj=r.Qb({factory:function(t){return new(t||U)},imports:[[a.c,y.b,g.b,v.e,b.b,f,u],h.b]}),U)}}]);