!function(){"use strict";function t(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==e)return;var i,o,s=[],r=!0,l=!1;try{for(e=e.call(t);!(r=(i=e.next()).done)&&(s.push(i.value),!n||s.length!==n);r=!0);}catch(a){l=!0,o=a}finally{try{r||null==e.return||e.return()}finally{if(l)throw o}}return s}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return n(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);"Object"===i&&t.constructor&&(i=t.constructor.name);if("Map"===i||"Set"===i)return Array.from(t);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return n(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,i=new Array(n);e<n;e++)i[e]=t[e];return i}function e(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function i(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function o(t,n,e){return n&&i(t.prototype,n),e&&i(t,e),Object.defineProperty(t,"prototype",{writable:!1}),t}(self.webpackChunkng_zorro_antd=self.webpackChunkng_zorro_antd||[]).push([[2575],{82575:function(n,i,s){s.d(i,{ZU:function(){return tt},ZJ:function(){return nt}});var r,l=s(70946),a=s(38583),c=s(37716),p=function(){function t(n,i){e(this,t),this._document=i;var o=this._textarea=this._document.createElement("textarea"),s=o.style;s.position="fixed",s.top=s.opacity="0",s.left="-999em",o.setAttribute("aria-hidden","true"),o.value=n,this._document.body.appendChild(o)}return o(t,[{key:"copy",value:function(){var t=this._textarea,n=!1;try{if(t){var e=this._document.activeElement;t.select(),t.setSelectionRange(0,t.value.length),n=this._document.execCommand("copy"),e&&e.focus()}}catch(e){}return n}},{key:"destroy",value:function(){var t=this._textarea;t&&(t.parentNode&&t.parentNode.removeChild(t),this._textarea=void 0)}}]),t}(),u=((r=function(){function t(n){e(this,t),this._document=n}return o(t,[{key:"copy",value:function(t){var n=this.beginCopy(t),e=n.copy();return n.destroy(),e}},{key:"beginCopy",value:function(t){return new p(t,this._document)}}]),t}()).\u0275fac=function(t){return new(t||r)(c.LFG(a.K0))},r.\u0275prov=c.Yz7({factory:function(){return new r(c.LFG(a.K0))},token:r,providedIn:"root"}),r),h=function(){var t=o(function t(){e(this,t)});return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=c.oAB({type:t}),t.\u0275inj=c.cJS({}),t}(),d=s(80521),f=s(79874),y=function(){var t=o(function t(){e(this,t)});return t.\u0275fac=function(n){return new(n||t)},t.\u0275dir=c.lG2({type:t,selectors:[["button","nz-trans-button",""]],hostVars:8,hostBindings:function(t,n){2&t&&c.Udp("border","0")("background","transparent")("padding","0")("line-height","inherit")}}),t}(),g=function(){var t=o(function t(){e(this,t)});return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=c.oAB({type:t}),t.\u0275inj=c.cJS({imports:[[a.ez]]}),t}(),z=s(27266),v=s(48095),x=s(31262),E=s(82949),C=s(79765),b=s(75319),m=s(46782),w=s(15257),T=s(64762),k=s(27520),I=s(30409),S=s(14176),O=s(40907);function R(t,n){if(1&t&&(c.ynx(0),c._UZ(1,"i",2),c.BQk()),2&t){var e=n.$implicit;c.xp6(1),c.Q6J("nzType",e)}}var Y=["textarea"];function N(t,n){if(1&t&&(c.ynx(0),c._UZ(1,"i",4),c.BQk()),2&t){var e=n.$implicit;c.xp6(1),c.Q6J("nzType",e)}}function Q(t,n){if(1&t){var e=c.EpF();c.TgZ(0,"button",2),c.NdJ("click",function(){return c.CHM(e),c.oxw().onClick()}),c.YNc(1,N,2,1,"ng-container",3),c.qZA()}if(2&t){var i=c.oxw();c.Q6J("nzTooltipTitle",null===i.tooltip?null:i.tooltip||(null==i.locale?null:i.locale.edit)),c.xp6(1),c.Q6J("nzStringTemplateOutlet",i.icon)}}function A(t,n){if(1&t){var e=c.EpF();c.ynx(0),c.TgZ(1,"textarea",5,6),c.NdJ("input",function(t){return c.CHM(e),c.oxw().onInput(t)})("blur",function(){return c.CHM(e),c.oxw().confirm()})("keydown.esc",function(){return c.CHM(e),c.oxw().onCancel()})("keydown.enter",function(t){return c.CHM(e),c.oxw().onEnter(t)}),c.qZA(),c.TgZ(3,"button",7),c.NdJ("click",function(){return c.CHM(e),c.oxw().confirm()}),c._UZ(4,"i",8),c.qZA(),c.BQk()}}var J=["ellipsisContainer"],B=["expandable"],F=["contentTemplate"];function _(t,n){1&t&&c.Hsn(0,0,["*ngIf","!content"])}function M(t,n){if(1&t&&(c.YNc(0,_,1,0,"ng-content",1),c._uU(1)),2&t){var e=n.content;c.Q6J("ngIf",!e),c.xp6(1),c.hij(" ",e," ")}}function Z(t,n){}function D(t,n){if(1&t&&(c.ynx(0),c._uU(1),c.BQk()),2&t){var e=c.oxw(3);c.xp6(1),c.Oqu(e.nzSuffix)}}var $=function(t){return{content:t}};function G(t,n){if(1&t&&(c.ynx(0),c.YNc(1,Z,0,0,"ng-template",6),c.YNc(2,D,2,1,"ng-container",1),c.BQk()),2&t){var e=c.oxw(2),i=c.MAs(1);c.xp6(1),c.Q6J("ngTemplateOutlet",i)("ngTemplateOutletContext",c.VKq(3,$,e.nzContent)),c.xp6(1),c.Q6J("ngIf",e.nzSuffix)}}function H(t,n){if(1&t&&(c.ynx(0),c._uU(1),c.BQk()),2&t){var e=c.oxw(3);c.xp6(1),c.Oqu(e.ellipsisStr)}}function j(t,n){if(1&t&&(c.ynx(0),c._uU(1),c.BQk()),2&t){var e=c.oxw(3);c.xp6(1),c.Oqu(e.nzSuffix)}}function q(t,n){if(1&t){var e=c.EpF();c.TgZ(0,"a",9,10),c.NdJ("click",function(){return c.CHM(e),c.oxw(3).onExpand()}),c._uU(2),c.qZA()}if(2&t){var i=c.oxw(3);c.xp6(2),c.hij(" ",null==i.locale?null:i.locale.expand," ")}}function U(t,n){if(1&t&&(c._UZ(0,"span",null,7),c.YNc(2,H,2,1,"ng-container",1),c.YNc(3,j,2,1,"ng-container",1),c.YNc(4,q,3,1,"a",8)),2&t){var e=c.oxw(2);c.xp6(2),c.Q6J("ngIf",e.isEllipsis),c.xp6(1),c.Q6J("ngIf",e.nzSuffix),c.xp6(1),c.Q6J("ngIf",e.nzExpandable&&e.isEllipsis)}}function V(t,n){if(1&t&&(c.ynx(0),c.YNc(1,G,3,5,"ng-container",4),c.YNc(2,U,5,3,"ng-template",null,5,c.W1O),c.BQk()),2&t){var e=c.MAs(3),i=c.oxw();c.xp6(1),c.Q6J("ngIf",i.expanded||!i.hasOperationsWithEllipsis&&1===i.nzEllipsisRows&&!i.hasEllipsisObservers||i.canCssEllipsis||i.nzSuffix&&i.expanded)("ngIfElse",e)}}function L(t,n){if(1&t){var e=c.EpF();c.TgZ(0,"nz-text-edit",11),c.NdJ("endEditing",function(t){return c.CHM(e),c.oxw().onEndEditing(t)})("startEditing",function(){return c.CHM(e),c.oxw().onStartEditing()}),c.qZA()}if(2&t){var i=c.oxw();c.Q6J("text",i.nzContent)("icon",i.nzEditIcon)("tooltip",i.nzEditTooltip)}}function W(t,n){if(1&t){var e=c.EpF();c.TgZ(0,"nz-text-copy",12),c.NdJ("textCopy",function(t){return c.CHM(e),c.oxw().onTextCopy(t)}),c.qZA()}if(2&t){var i=c.oxw();c.Q6J("text",i.copyText)("tooltips",i.nzCopyTooltips)("icons",i.nzCopyIcons)}}var P=["*"],K=function(){var n=function(){function n(t,i,o,s){e(this,n),this.host=t,this.cdr=i,this.clipboard=o,this.i18n=s,this.copied=!1,this.copyId=-1,this.nativeElement=this.host.nativeElement,this.copyTooltip=null,this.copedTooltip=null,this.copyIcon="copy",this.copedIcon="check",this.destroy$=new C.xQ,this.icons=["copy","check"],this.textCopy=new c.vpe}return o(n,[{key:"ngOnInit",value:function(){var t=this;this.i18n.localeChange.pipe((0,m.R)(this.destroy$)).subscribe(function(){t.locale=t.i18n.getLocaleData("Text"),t.updateTooltips(),t.cdr.markForCheck()})}},{key:"ngOnChanges",value:function(t){var n=t.tooltips,e=t.icons;n&&this.updateTooltips(),e&&this.updateIcons()}},{key:"ngOnDestroy",value:function(){clearTimeout(this.copyId),this.destroy$.next(),this.destroy$.complete()}},{key:"onClick",value:function(){if(!this.copied){this.copied=!0,this.cdr.detectChanges();var t=this.text;this.textCopy.emit(t),this.clipboard.copy(t),this.onCopied()}}},{key:"onCopied",value:function(){var t=this;clearTimeout(this.copyId),this.copyId=setTimeout(function(){t.copied=!1,t.cdr.detectChanges()},3e3)}},{key:"updateTooltips",value:function(){var n,e,i,o;if(null===this.tooltips)this.copedTooltip=null,this.copyTooltip=null;else if(Array.isArray(this.tooltips)){var s=t(this.tooltips,2),r=s[0],l=s[1];this.copyTooltip=r||(null===(n=this.locale)||void 0===n?void 0:n.copy),this.copedTooltip=l||(null===(e=this.locale)||void 0===e?void 0:e.copied)}else this.copyTooltip=null===(i=this.locale)||void 0===i?void 0:i.copy,this.copedTooltip=null===(o=this.locale)||void 0===o?void 0:o.copied;this.cdr.markForCheck()}},{key:"updateIcons",value:function(){var n=t(this.icons,2),e=n[0],i=n[1];this.copyIcon=e,this.copedIcon=i,this.cdr.markForCheck()}}]),n}();return n.\u0275fac=function(t){return new(t||n)(c.Y36(c.SBq),c.Y36(c.sBO),c.Y36(u),c.Y36(z.wi))},n.\u0275cmp=c.Xpm({type:n,selectors:[["nz-text-copy"]],inputs:{icons:"icons",text:"text",tooltips:"tooltips"},outputs:{textCopy:"textCopy"},exportAs:["nzTextCopy"],features:[c.TTD],decls:2,vars:4,consts:[["type","button","nz-tooltip","","nz-trans-button","",1,"ant-typography-copy",3,"nzTooltipTitle","click"],[4,"nzStringTemplateOutlet"],["nz-icon","",3,"nzType"]],template:function(t,n){1&t&&(c.TgZ(0,"button",0),c.NdJ("click",function(){return n.onClick()}),c.YNc(1,R,2,1,"ng-container",1),c.qZA()),2&t&&(c.ekj("ant-typography-copy-success",n.copied),c.Q6J("nzTooltipTitle",n.copied?n.copedTooltip:n.copyTooltip),c.xp6(1),c.Q6J("nzStringTemplateOutlet",n.copied?n.copedIcon:n.copyIcon))},directives:[y,E.SY,f.f,v.Ls],encapsulation:2,changeDetection:0}),n}(),X=function(){var t=function(){function t(n,i,o,s){e(this,t),this.zone=n,this.host=i,this.cdr=o,this.i18n=s,this.editing=!1,this.destroy$=new C.xQ,this.icon="edit",this.startEditing=new c.vpe,this.endEditing=new c.vpe(!0),this.nativeElement=this.host.nativeElement}return o(t,[{key:"ngOnInit",value:function(){var t=this;this.i18n.localeChange.pipe((0,m.R)(this.destroy$)).subscribe(function(){t.locale=t.i18n.getLocaleData("Text"),t.cdr.markForCheck()})}},{key:"ngOnDestroy",value:function(){this.destroy$.next(),this.destroy$.complete()}},{key:"onClick",value:function(){this.beforeText=this.text,this.currentText=this.beforeText,this.editing=!0,this.startEditing.emit(),this.focusAndSetValue()}},{key:"confirm",value:function(){this.editing=!1,this.endEditing.emit(this.currentText)}},{key:"onInput",value:function(t){this.currentText=t.target.value}},{key:"onEnter",value:function(t){t.stopPropagation(),t.preventDefault(),this.confirm()}},{key:"onCancel",value:function(){this.currentText=this.beforeText,this.confirm()}},{key:"focusAndSetValue",value:function(){var t=this;this.zone.onStable.pipe((0,w.q)(1),(0,m.R)(this.destroy$)).subscribe(function(){var n;(null===(n=t.textarea)||void 0===n?void 0:n.nativeElement)&&(t.textarea.nativeElement.focus(),t.textarea.nativeElement.value=t.currentText||"",t.autosizeDirective.resizeToFitContent(),t.cdr.markForCheck())})}}]),t}();return t.\u0275fac=function(n){return new(n||t)(c.Y36(c.R0b),c.Y36(c.SBq),c.Y36(c.sBO),c.Y36(z.wi))},t.\u0275cmp=c.Xpm({type:t,selectors:[["nz-text-edit"]],viewQuery:function(t,n){var e;(1&t&&(c.Gf(Y,5),c.Gf(x.rh,5)),2&t)&&(c.iGM(e=c.CRH())&&(n.textarea=e.first),c.iGM(e=c.CRH())&&(n.autosizeDirective=e.first))},inputs:{icon:"icon",text:"text",tooltip:"tooltip"},outputs:{startEditing:"startEditing",endEditing:"endEditing"},exportAs:["nzTextEdit"],decls:2,vars:2,consts:[["nz-tooltip","","nz-trans-button","","class","ant-typography-edit",3,"nzTooltipTitle","click",4,"ngIf"],[4,"ngIf"],["nz-tooltip","","nz-trans-button","",1,"ant-typography-edit",3,"nzTooltipTitle","click"],[4,"nzStringTemplateOutlet"],["nz-icon","",3,"nzType"],["nz-input","","nzAutosize","",3,"input","blur","keydown.esc","keydown.enter"],["textarea",""],["nz-trans-button","",1,"ant-typography-edit-content-confirm",3,"click"],["nz-icon","","nzType","enter"]],template:function(t,n){1&t&&(c.YNc(0,Q,2,2,"button",0),c.YNc(1,A,5,0,"ng-container",1)),2&t&&(c.Q6J("ngIf",!n.editing),c.xp6(1),c.Q6J("ngIf",n.editing))},directives:[a.O5,y,E.SY,f.f,v.Ls,x.Zp,x.rh],encapsulation:2,changeDetection:0}),t}(),tt=function(){var t=function(){function t(n,i,o,s,r,l,a,p,u,h){e(this,t),this.nzConfigService=n,this.host=i,this.cdr=o,this.viewContainerRef=s,this.renderer=r,this.platform=l,this.i18n=a,this.resizeService=u,this.directionality=h,this._nzModuleName="typography",this.nzCopyable=!1,this.nzEditable=!1,this.nzDisabled=!1,this.nzExpandable=!1,this.nzEllipsis=!1,this.nzCopyTooltips=void 0,this.nzCopyIcons=["copy","check"],this.nzEditTooltip=void 0,this.nzEditIcon="edit",this.nzEllipsisRows=1,this.nzContentChange=new c.vpe,this.nzCopy=new c.vpe,this.nzExpandChange=new c.vpe,this.nzOnEllipsis=new c.vpe,this.expandableBtnElementCache=null,this.editing=!1,this.cssEllipsis=!1,this.isEllipsis=!0,this.expanded=!1,this.ellipsisStr="...",this.dir="ltr",this.viewInit=!1,this.rfaId=-1,this.destroy$=new C.xQ,this.windowResizeSubscription=b.w.EMPTY,this.document=p}return o(t,[{key:"hasEllipsisObservers",get:function(){return this.nzOnEllipsis.observers.length>0}},{key:"canCssEllipsis",get:function(){return this.nzEllipsis&&this.cssEllipsis&&!this.expanded&&!this.hasEllipsisObservers}},{key:"hasOperationsWithEllipsis",get:function(){return(this.nzCopyable||this.nzEditable||this.nzExpandable)&&this.nzEllipsis}},{key:"copyText",get:function(){return"string"==typeof this.nzCopyText?this.nzCopyText:this.nzContent}},{key:"onTextCopy",value:function(t){this.nzCopy.emit(t)}},{key:"onStartEditing",value:function(){this.editing=!0}},{key:"onEndEditing",value:function(t){this.editing=!1,this.nzContentChange.emit(t),this.nzContent===t&&this.renderOnNextFrame(),this.cdr.markForCheck()}},{key:"onExpand",value:function(){this.isEllipsis=!1,this.expanded=!0,this.nzExpandChange.emit(),this.nzOnEllipsis.emit(!1)}},{key:"canUseCSSEllipsis",value:function(){return!(this.nzEditable||this.nzCopyable||this.nzExpandable||this.nzSuffix||this.hasEllipsisObservers)&&(0,S.GL)(1===this.nzEllipsisRows?"textOverflow":"webkitLineClamp")}},{key:"renderOnNextFrame",value:function(){var t=this;(0,I.h)(this.rfaId),this.viewInit&&this.nzEllipsis&&!(this.nzEllipsisRows<0)&&!this.expanded&&this.platform.isBrowser&&(this.rfaId=(0,I.e)(function(){t.syncEllipsis()}))}},{key:"getOriginContentViewRef",value:function(){var t=this,n=this.viewContainerRef.createEmbeddedView(this.contentTemplate,{content:this.nzContent});return n.detectChanges(),{viewRef:n,removeView:function(){t.viewContainerRef.remove(t.viewContainerRef.indexOf(n))}}}},{key:"syncEllipsis",value:function(){var t=this;if(!this.cssEllipsis){var n=this.getOriginContentViewRef(),e=n.viewRef,i=n.removeView,o=[this.textCopyRef,this.textEditRef].filter(function(t){return t&&t.nativeElement}).map(function(t){return t.nativeElement}),s=this.getExpandableBtnElement();s&&o.push(s);var r=(0,S.L8)(this.host.nativeElement,this.nzEllipsisRows,e.rootNodes,o,this.ellipsisStr,this.nzSuffix),l=r.contentNodes,a=r.text,c=r.ellipsis;i(),this.ellipsisText=a,c!==this.isEllipsis&&(this.isEllipsis=c,this.nzOnEllipsis.emit(c));for(var p=this.ellipsisContainer.nativeElement;p.firstChild;)this.renderer.removeChild(p,p.firstChild);l.forEach(function(n){t.renderer.appendChild(p,n.cloneNode(!0))}),this.cdr.markForCheck()}}},{key:"getExpandableBtnElement",value:function(){if(this.nzExpandable){var t=this.locale?this.locale.expand:"",n=this.expandableBtnElementCache;if(!n||n.innerText===t){var e=this.document.createElement("a");e.className="ant-typography-expand",e.innerText=t,this.expandableBtnElementCache=e}return this.expandableBtnElementCache}return this.expandableBtnElementCache=null,null}},{key:"renderAndSubscribeWindowResize",value:function(){var t=this;this.platform.isBrowser&&(this.windowResizeSubscription.unsubscribe(),this.cssEllipsis=this.canUseCSSEllipsis(),this.renderOnNextFrame(),this.windowResizeSubscription=this.resizeService.subscribe().pipe((0,m.R)(this.destroy$)).subscribe(function(){return t.renderOnNextFrame()}))}},{key:"ngOnInit",value:function(){var t,n=this;this.i18n.localeChange.pipe((0,m.R)(this.destroy$)).subscribe(function(){n.locale=n.i18n.getLocaleData("Text"),n.cdr.markForCheck()}),null===(t=this.directionality.change)||void 0===t||t.pipe((0,m.R)(this.destroy$)).subscribe(function(t){n.dir=t,n.cdr.detectChanges()}),this.dir=this.directionality.value}},{key:"ngAfterViewInit",value:function(){this.viewInit=!0,this.renderAndSubscribeWindowResize()}},{key:"ngOnChanges",value:function(t){var n=t.nzCopyable,e=t.nzEditable,i=t.nzExpandable,o=t.nzEllipsis,s=t.nzContent,r=t.nzEllipsisRows,l=t.nzSuffix;(n||e||i||o||s||r||l)&&this.nzEllipsis&&(this.expanded?this.windowResizeSubscription.unsubscribe():this.renderAndSubscribeWindowResize())}},{key:"ngOnDestroy",value:function(){this.destroy$.next(),this.destroy$.complete(),this.expandableBtnElementCache=null,this.windowResizeSubscription.unsubscribe()}}]),t}();return t.\u0275fac=function(n){return new(n||t)(c.Y36(k.jY),c.Y36(c.SBq),c.Y36(c.sBO),c.Y36(c.s_b),c.Y36(c.Qsj),c.Y36(d.t4),c.Y36(z.wi),c.Y36(a.K0),c.Y36(O.rI),c.Y36(l.Is,8))},t.\u0275cmp=c.Xpm({type:t,selectors:[["nz-typography"],["","nz-typography",""],["p","nz-paragraph",""],["span","nz-text",""],["h1","nz-title",""],["h2","nz-title",""],["h3","nz-title",""],["h4","nz-title",""]],viewQuery:function(t,n){var e;(1&t&&(c.Gf(X,5),c.Gf(K,5),c.Gf(J,5),c.Gf(B,5),c.Gf(F,5)),2&t)&&(c.iGM(e=c.CRH())&&(n.textEditRef=e.first),c.iGM(e=c.CRH())&&(n.textCopyRef=e.first),c.iGM(e=c.CRH())&&(n.ellipsisContainer=e.first),c.iGM(e=c.CRH())&&(n.expandableBtn=e.first),c.iGM(e=c.CRH())&&(n.contentTemplate=e.first))},hostVars:26,hostBindings:function(t,n){2&t&&(c.Udp("-webkit-line-clamp",n.canCssEllipsis&&n.nzEllipsisRows>1?n.nzEllipsisRows:null),c.ekj("ant-typography",!n.editing)("ant-typography-rtl","rtl"===n.dir)("ant-typography-edit-content",n.editing)("ant-typography-secondary","secondary"===n.nzType)("ant-typography-warning","warning"===n.nzType)("ant-typography-danger","danger"===n.nzType)("ant-typography-success","success"===n.nzType)("ant-typography-disabled",n.nzDisabled)("ant-typography-ellipsis",n.nzEllipsis&&!n.expanded)("ant-typography-single-line",n.nzEllipsis&&1===n.nzEllipsisRows)("ant-typography-ellipsis-single-line",n.canCssEllipsis&&1===n.nzEllipsisRows)("ant-typography-ellipsis-multiple-line",n.canCssEllipsis&&n.nzEllipsisRows>1))},inputs:{nzCopyable:"nzCopyable",nzEditable:"nzEditable",nzDisabled:"nzDisabled",nzExpandable:"nzExpandable",nzEllipsis:"nzEllipsis",nzCopyTooltips:"nzCopyTooltips",nzCopyIcons:"nzCopyIcons",nzEditTooltip:"nzEditTooltip",nzEditIcon:"nzEditIcon",nzEllipsisRows:"nzEllipsisRows",nzContent:"nzContent",nzType:"nzType",nzCopyText:"nzCopyText",nzSuffix:"nzSuffix"},outputs:{nzContentChange:"nzContentChange",nzCopy:"nzCopy",nzExpandChange:"nzExpandChange",nzOnEllipsis:"nzOnEllipsis"},exportAs:["nzTypography"],features:[c.TTD],ngContentSelectors:P,decls:5,vars:3,consts:[["contentTemplate",""],[4,"ngIf"],[3,"text","icon","tooltip","endEditing","startEditing",4,"ngIf"],[3,"text","tooltips","icons","textCopy",4,"ngIf"],[4,"ngIf","ngIfElse"],["jsEllipsis",""],[3,"ngTemplateOutlet","ngTemplateOutletContext"],["ellipsisContainer",""],["class","ant-typography-expand",3,"click",4,"ngIf"],[1,"ant-typography-expand",3,"click"],["expandable",""],[3,"text","icon","tooltip","endEditing","startEditing"],[3,"text","tooltips","icons","textCopy"]],template:function(t,n){1&t&&(c.F$t(),c.YNc(0,M,2,2,"ng-template",null,0,c.W1O),c.YNc(2,V,4,2,"ng-container",1),c.YNc(3,L,1,3,"nz-text-edit",2),c.YNc(4,W,1,3,"nz-text-copy",3)),2&t&&(c.xp6(2),c.Q6J("ngIf",!n.editing),c.xp6(1),c.Q6J("ngIf",n.nzEditable),c.xp6(1),c.Q6J("ngIf",n.nzCopyable&&!n.editing))},directives:[a.O5,a.tP,X,K],encapsulation:2,changeDetection:0}),(0,T.gn)([(0,S.yF)()],t.prototype,"nzCopyable",void 0),(0,T.gn)([(0,S.yF)()],t.prototype,"nzEditable",void 0),(0,T.gn)([(0,S.yF)()],t.prototype,"nzDisabled",void 0),(0,T.gn)([(0,S.yF)()],t.prototype,"nzExpandable",void 0),(0,T.gn)([(0,S.yF)()],t.prototype,"nzEllipsis",void 0),(0,T.gn)([(0,k.oS)()],t.prototype,"nzCopyTooltips",void 0),(0,T.gn)([(0,k.oS)()],t.prototype,"nzCopyIcons",void 0),(0,T.gn)([(0,k.oS)()],t.prototype,"nzEditTooltip",void 0),(0,T.gn)([(0,k.oS)()],t.prototype,"nzEditIcon",void 0),(0,T.gn)([(0,k.oS)(),(0,S.Rn)()],t.prototype,"nzEllipsisRows",void 0),t}(),nt=function(){var t=o(function t(){e(this,t)});return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=c.oAB({type:t}),t.\u0275inj=c.cJS({imports:[[l.vT,a.ez,v.PV,E.cg,x.o7,z.YI,g,h,f.T],d.ud]}),t}()}}])}();