!function(){"use strict";function n(n){return function(n){if(Array.isArray(n))return e(n)}(n)||function(n){if("undefined"!=typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||function(n,t){if(!n)return;if("string"==typeof n)return e(n,t);var o=Object.prototype.toString.call(n).slice(8,-1);"Object"===o&&n.constructor&&(o=n.constructor.name);if("Map"===o||"Set"===o)return Array.from(n);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return e(n,t)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,o=new Array(e);t<e;t++)o[t]=n[t];return o}function t(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function o(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}function a(n,e,t){return e&&o(n.prototype,e),t&&o(n,t),Object.defineProperty(n,"prototype",{writable:!1}),n}(self.webpackChunkng_zorro_antd=self.webpackChunkng_zorro_antd||[]).push([[1665],{91665:function(e,o,g){g.r(o),g.d(o,{NzDemoTagModule:function(){return O}});var c,r=g(95987),i=g(30742),Z=g(24061),u=g(31262),d=g(48095),l=[Z.X,u.o7,d.PV],z=g(56236),s=g(37716),m=g(18423),p=g(23540),T=g(82949),f=g(38870),A=((c=function(){function n(){t(this,n)}return a(n,[{key:"onClose",value:function(){console.log("tag was closed.")}},{key:"preventDefault",value:function(n){n.preventDefault(),n.stopPropagation(),console.log("tag can not be closed.")}}]),n}()).\u0275fac=function(n){return new(n||c)},c.\u0275cmp=s.Xpm({type:c,selectors:[["nz-demo-tag-basic"]],decls:9,vars:0,consts:[["href","https://github.com/NG-ZORRO/ng-zorro-antd"],["nzMode","closeable",3,"nzOnClose"]],template:function(n,e){1&n&&(s.TgZ(0,"nz-tag"),s._uU(1,"Tag 1"),s.qZA(),s.TgZ(2,"nz-tag"),s.TgZ(3,"a",0),s._uU(4,"Link"),s.qZA(),s.qZA(),s.TgZ(5,"nz-tag",1),s.NdJ("nzOnClose",function(){return e.onClose()}),s._uU(6,"Tag 2"),s.qZA(),s.TgZ(7,"nz-tag",1),s.NdJ("nzOnClose",function(n){return e.preventDefault(n)}),s._uU(8,"Prevent Default"),s.qZA())},directives:[Z.j],encapsulation:2}),c),h=g(38583),q=g(3679),_=["inputElement"];function U(n,e){if(1&n){var t=s.EpF();s.TgZ(0,"nz-tag",3),s.NdJ("nzOnClose",function(){var n=s.CHM(t).$implicit;return s.oxw().handleClose(n)}),s._uU(1),s.qZA()}if(2&n){var o=e.$implicit,a=e.index,g=s.oxw();s.Q6J("nzMode",0===a?"default":"closeable"),s.xp6(1),s.hij(" ",g.sliceTagName(o)," ")}}function k(n,e){if(1&n){var t=s.EpF();s.TgZ(0,"nz-tag",4),s.NdJ("click",function(){return s.CHM(t),s.oxw().showInput()}),s._UZ(1,"i",5),s._uU(2," New Tag "),s.qZA()}}function C(n,e){if(1&n){var t=s.EpF();s.TgZ(0,"input",6,7),s.NdJ("ngModelChange",function(n){return s.CHM(t),s.oxw().inputValue=n})("blur",function(){return s.CHM(t),s.oxw().handleInputConfirm()})("keydown.enter",function(){return s.CHM(t),s.oxw().handleInputConfirm()}),s.qZA()}if(2&n){var o=s.oxw();s.Q6J("ngModel",o.inputValue)}}var b=function(){var e=function(){function e(){t(this,e),this.tags=["Unremovable","Tag 2","Tag 3"],this.inputVisible=!1,this.inputValue=""}return a(e,[{key:"handleClose",value:function(n){this.tags=this.tags.filter(function(e){return e!==n})}},{key:"sliceTagName",value:function(n){return n.length>20?"".concat(n.slice(0,20),"..."):n}},{key:"showInput",value:function(){var n=this;this.inputVisible=!0,setTimeout(function(){var e;null===(e=n.inputElement)||void 0===e||e.nativeElement.focus()},10)}},{key:"handleInputConfirm",value:function(){this.inputValue&&-1===this.tags.indexOf(this.inputValue)&&(this.tags=[].concat(n(this.tags),[this.inputValue])),this.inputValue="",this.inputVisible=!1}}]),e}();return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=s.Xpm({type:e,selectors:[["nz-demo-tag-control"]],viewQuery:function(n,e){var t;(1&n&&s.Gf(_,5),2&n)&&(s.iGM(t=s.CRH())&&(e.inputElement=t.first))},decls:3,vars:3,consts:[[3,"nzMode","nzOnClose",4,"ngFor","ngForOf"],["class","editable-tag","nzNoAnimation","",3,"click",4,"ngIf"],["nz-input","","nzSize","small","type","text","style","width: 78px;",3,"ngModel","ngModelChange","blur","keydown.enter",4,"ngIf"],[3,"nzMode","nzOnClose"],["nzNoAnimation","",1,"editable-tag",3,"click"],["nz-icon","","nzType","plus"],["nz-input","","nzSize","small","type","text",2,"width","78px",3,"ngModel","ngModelChange","blur","keydown.enter"],["inputElement",""]],template:function(n,e){1&n&&(s.YNc(0,U,2,2,"nz-tag",0),s.YNc(1,k,3,0,"nz-tag",1),s.YNc(2,C,2,1,"input",2)),2&n&&(s.Q6J("ngForOf",e.tags),s.xp6(1),s.Q6J("ngIf",!e.inputVisible),s.xp6(1),s.Q6J("ngIf",e.inputVisible))},directives:[h.sg,h.O5,Z.j,d.Ls,u.Zp,q.Fj,q.JJ,q.On],styles:[".editable-tag[_ngcontent-%COMP%]{background:rgb(255,255,255);border-style:dashed}"]}),e}();function x(n,e){if(1&n){var t=s.EpF();s.TgZ(0,"nz-tag",1),s.NdJ("nzCheckedChange",function(n){var e=s.CHM(t).$implicit;return s.oxw().handleChange(n,e)}),s._uU(1),s.qZA()}if(2&n){var o=e.$implicit,a=s.oxw();s.Q6J("nzChecked",a.selectedTags.indexOf(o)>-1),s.xp6(1),s.hij(" ",o," ")}}var I=["Movie","Books","Music","Sports"],v=function(){var n=function(){function n(){t(this,n),this.hotTags=I,this.selectedTags=[]}return a(n,[{key:"handleChange",value:function(n,e){n?this.selectedTags.push(e):this.selectedTags=this.selectedTags.filter(function(n){return n!==e}),console.log("You are interested in: ",this.selectedTags)}}]),n}();return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=s.Xpm({type:n,selectors:[["nz-demo-tag-hot-tags"]],decls:3,vars:1,consts:[["nzMode","checkable",3,"nzChecked","nzCheckedChange",4,"ngFor","ngForOf"],["nzMode","checkable",3,"nzChecked","nzCheckedChange"]],template:function(n,e){1&n&&(s.TgZ(0,"strong"),s._uU(1,"Categories:"),s.qZA(),s.YNc(2,x,2,2,"nz-tag",0)),2&n&&(s.xp6(2),s.Q6J("ngForOf",e.hotTags))},directives:[h.sg,Z.j],encapsulation:2}),n}(),y=function(){var n=a(function n(){t(this,n)});return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=s.Xpm({type:n,selectors:[["nz-demo-tag-status"]],decls:36,vars:0,consts:[["nzColor","success"],["nzColor","processing"],["nzColor","error"],["nzColor","warning"],["nzColor","default"],["nz-icon","","nzType","check-circle"],["nz-icon","","nzType","sync","nzSpin",""],["nz-icon","","nzType","close-circle"],["nz-icon","","nzType","exclamation-circle"],["nz-icon","","nzType","clock-circle"]],template:function(n,e){1&n&&(s.TgZ(0,"div"),s.TgZ(1,"h4"),s._uU(2,"Without icon"),s.qZA(),s.TgZ(3,"nz-tag",0),s._uU(4,"success"),s.qZA(),s.TgZ(5,"nz-tag",1),s._uU(6,"processing"),s.qZA(),s.TgZ(7,"nz-tag",2),s._uU(8,"error"),s.qZA(),s.TgZ(9,"nz-tag",3),s._uU(10,"warning"),s.qZA(),s.TgZ(11,"nz-tag",4),s._uU(12,"default"),s.qZA(),s.qZA(),s.TgZ(13,"div"),s.TgZ(14,"h4"),s._uU(15,"With icon"),s.qZA(),s.TgZ(16,"nz-tag",0),s._UZ(17,"i",5),s.TgZ(18,"span"),s._uU(19,"success"),s.qZA(),s.qZA(),s.TgZ(20,"nz-tag",1),s._UZ(21,"i",6),s.TgZ(22,"span"),s._uU(23,"processing"),s.qZA(),s.qZA(),s.TgZ(24,"nz-tag",2),s._UZ(25,"i",7),s.TgZ(26,"span"),s._uU(27,"error"),s.qZA(),s.qZA(),s.TgZ(28,"nz-tag",3),s._UZ(29,"i",8),s.TgZ(30,"span"),s._uU(31,"warning"),s.qZA(),s.qZA(),s.TgZ(32,"nz-tag",4),s._UZ(33,"i",9),s.TgZ(34,"span"),s._uU(35,"default"),s.qZA(),s.qZA(),s.qZA())},directives:[Z.j,d.Ls],encapsulation:2}),n}(),w=function(){var n=a(function n(){t(this,n)});return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=s.Xpm({type:n,selectors:[["nz-demo-tag-colorful"]],decls:36,vars:15,consts:[[2,"margin-bottom","16px"],[3,"nzColor"],[2,"margin","16px 0px"]],template:function(n,e){1&n&&(s.TgZ(0,"h4",0),s._uU(1,"Presets:"),s.qZA(),s.TgZ(2,"div"),s.TgZ(3,"nz-tag",1),s._uU(4,"magenta"),s.qZA(),s.TgZ(5,"nz-tag",1),s._uU(6,"red"),s.qZA(),s.TgZ(7,"nz-tag",1),s._uU(8,"volcano"),s.qZA(),s.TgZ(9,"nz-tag",1),s._uU(10,"orange"),s.qZA(),s.TgZ(11,"nz-tag",1),s._uU(12,"gold"),s.qZA(),s.TgZ(13,"nz-tag",1),s._uU(14,"lime"),s.qZA(),s.TgZ(15,"nz-tag",1),s._uU(16,"green"),s.qZA(),s.TgZ(17,"nz-tag",1),s._uU(18,"cyan"),s.qZA(),s.TgZ(19,"nz-tag",1),s._uU(20,"blue"),s.qZA(),s.TgZ(21,"nz-tag",1),s._uU(22,"geekblue"),s.qZA(),s.TgZ(23,"nz-tag",1),s._uU(24,"purple"),s.qZA(),s.qZA(),s.TgZ(25,"h4",2),s._uU(26,"Custom:"),s.qZA(),s.TgZ(27,"div"),s.TgZ(28,"nz-tag",1),s._uU(29,"#f50"),s.qZA(),s.TgZ(30,"nz-tag",1),s._uU(31,"#2db7f5"),s.qZA(),s.TgZ(32,"nz-tag",1),s._uU(33,"#87d068"),s.qZA(),s.TgZ(34,"nz-tag",1),s._uU(35,"#108ee9"),s.qZA(),s.qZA()),2&n&&(s.xp6(3),s.Q6J("nzColor","magenta"),s.xp6(2),s.Q6J("nzColor","red"),s.xp6(2),s.Q6J("nzColor","volcano"),s.xp6(2),s.Q6J("nzColor","orange"),s.xp6(2),s.Q6J("nzColor","gold"),s.xp6(2),s.Q6J("nzColor","lime"),s.xp6(2),s.Q6J("nzColor","green"),s.xp6(2),s.Q6J("nzColor","cyan"),s.xp6(2),s.Q6J("nzColor","blue"),s.xp6(2),s.Q6J("nzColor","geekblue"),s.xp6(2),s.Q6J("nzColor","purple"),s.xp6(5),s.Q6J("nzColor","#f50"),s.xp6(2),s.Q6J("nzColor","#2db7f5"),s.xp6(2),s.Q6J("nzColor","#87d068"),s.xp6(2),s.Q6J("nzColor","#108ee9"))},directives:[Z.j],styles:[".ant-tag{margin-bottom:8px}\n"],encapsulation:2}),n}(),H=function(){var n=function(){function n(){t(this,n)}return a(n,[{key:"checkChange",value:function(n){console.log(n)}}]),n}();return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=s.Xpm({type:n,selectors:[["nz-demo-tag-checkable"]],decls:6,vars:3,consts:[["nzMode","checkable",3,"nzChecked","nzCheckedChange"]],template:function(n,e){1&n&&(s.TgZ(0,"nz-tag",0),s.NdJ("nzCheckedChange",function(n){return e.checkChange(n)}),s._uU(1,"Tag1"),s.qZA(),s.TgZ(2,"nz-tag",0),s.NdJ("nzCheckedChange",function(n){return e.checkChange(n)}),s._uU(3,"Tag2"),s.qZA(),s.TgZ(4,"nz-tag",0),s.NdJ("nzCheckedChange",function(n){return e.checkChange(n)}),s._uU(5,"Tag3"),s.qZA()),2&n&&(s.Q6J("nzChecked",!0),s.xp6(2),s.Q6J("nzChecked",!0),s.xp6(2),s.Q6J("nzChecked",!0))},directives:[Z.j],encapsulation:2}),n}(),N=function(){var n=a(function n(){t(this,n)});return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=s.Xpm({type:n,selectors:[["nz-demo-tag-icon"]],decls:16,vars:0,consts:[["nzColor","#55acee"],["nz-icon","","nzType","twitter"],["nzColor","#cd201f"],["nz-icon","","nzType","youtube"],["nzColor","#3b5999"],["nz-icon","","nzType","facebook"],["nz-icon","","nzType","linkedin"]],template:function(n,e){1&n&&(s.TgZ(0,"nz-tag",0),s._UZ(1,"i",1),s.TgZ(2,"span"),s._uU(3,"Twitter"),s.qZA(),s.qZA(),s.TgZ(4,"nz-tag",2),s._UZ(5,"i",3),s.TgZ(6,"span"),s._uU(7,"Youtube"),s.qZA(),s.qZA(),s.TgZ(8,"nz-tag",4),s._UZ(9,"i",5),s.TgZ(10,"span"),s._uU(11,"Facebook"),s.qZA(),s.qZA(),s.TgZ(12,"nz-tag",0),s._UZ(13,"i",6),s.TgZ(14,"span"),s._uU(15,"LinkedIn"),s.qZA(),s.qZA())},directives:[Z.j,d.Ls],encapsulation:2}),n}(),Q=function(){var n=function(){function n(){t(this,n),this.expanded=!1}return a(n,[{key:"goLink",value:function(n){window&&(window.location.hash=n)}},{key:"expandAllCode",value:function(){var n=this;this.expanded=!this.expanded,this.codeBoxes.forEach(function(e){e.nzExpanded=n.expanded,e.expandCode(n.expanded),e.check()})}}]),n}();return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=s.Xpm({type:n,selectors:[["nz-demo-tag"]],viewQuery:function(n,e){var t;(1&n&&s.Gf(z.G,5),2&n)&&(s.iGM(t=s.CRH())&&(e.codeBoxes=t))},decls:210,vars:35,consts:[[1,"toc-affix",3,"nzOffsetTop"],["nzShowInkInFixed","",3,"nzAffix","nzClick"],["nzHref","#components-tag-demo-basic","nzTitle","\u57fa\u672c"],["nzHref","#components-tag-demo-colorful","nzTitle","\u591a\u5f69\u6807\u7b7e"],["nzHref","#components-tag-demo-control","nzTitle","\u52a8\u6001\u6dfb\u52a0\u548c\u5220\u9664"],["nzHref","#components-tag-demo-checkable","nzTitle","\u53ef\u9009\u62e9"],["nzHref","#components-tag-demo-hot-tags","nzTitle","\u70ed\u95e8\u6807\u7b7e"],["nzHref","#components-tag-demo-icon","nzTitle","\u56fe\u6807\u6309\u94ae"],["nzHref","#components-tag-demo-status","nzTitle","\u9884\u8bbe\u72b6\u6001\u7684\u6807\u7b7e"],["nzHref","#api","nzTitle","API"],[1,"markdown"],[1,"subtitle"],[1,"widget"],["aria-label","Edit this page on Github","href","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/tag/doc/index.zh-CN.md","target","_blank","rel","noopener noreferrer",1,"edit-button"],["nz-icon","","nzType","edit"],["id","\u4f55\u65f6\u4f7f\u7528"],["onclick","window.location.hash = '\u4f55\u65f6\u4f7f\u7528'",1,"anchor"],[1,"language-ts"],[1,"token","keyword"],[1,"token","punctuation"],[1,"token","string"],["nz-icon","","nzType","appstore","nz-tooltip","","nzTooltipTitle","\u5c55\u5f00\u5168\u90e8\u4ee3\u7801",1,"code-box-expand-trigger",3,"click"],["nz-row","",3,"nzGutter"],["nz-col","",3,"nzXl","nzSpan"],["nzTitle","\u57fa\u672c","nzSelector","nz-demo-tag-basic","nzGenerateCommand","ng g ng-zorro-antd:tag-basic <name>","nzComponentName","NzDemoTagBasicComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["demo",""],["intro",""],["nzTitle","\u52a8\u6001\u6dfb\u52a0\u548c\u5220\u9664","nzSelector","nz-demo-tag-control","nzGenerateCommand","ng g ng-zorro-antd:tag-control <name>","nzComponentName","NzDemoTagControlComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","\u70ed\u95e8\u6807\u7b7e","nzSelector","nz-demo-tag-hot-tags","nzGenerateCommand","ng g ng-zorro-antd:tag-hot-tags <name>","nzComponentName","NzDemoTagHotTagsComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","\u9884\u8bbe\u72b6\u6001\u7684\u6807\u7b7e","nzSelector","nz-demo-tag-status","nzGenerateCommand","ng g ng-zorro-antd:tag-status <name>","nzComponentName","NzDemoTagStatusComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","\u591a\u5f69\u6807\u7b7e","nzSelector","nz-demo-tag-colorful","nzGenerateCommand","ng g ng-zorro-antd:tag-colorful <name>","nzComponentName","NzDemoTagColorfulComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","\u53ef\u9009\u62e9","nzSelector","nz-demo-tag-checkable","nzGenerateCommand","ng g ng-zorro-antd:tag-checkable <name>","nzComponentName","NzDemoTagCheckableComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","\u56fe\u6807\u6309\u94ae","nzSelector","nz-demo-tag-icon","nzGenerateCommand","ng g ng-zorro-antd:tag-icon <name>","nzComponentName","NzDemoTagIconComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],[1,"markdown","api-container"],["id","api"],["onclick","window.location.hash = 'api'",1,"anchor"],["id","nz-tag"],[1,"api-type-label","component"],["onclick","window.location.hash = 'nz-tag'",1,"anchor"]],template:function(n,e){1&n&&(s.TgZ(0,"article"),s.TgZ(1,"nz-affix",0),s.TgZ(2,"nz-anchor",1),s.NdJ("nzClick",function(n){return e.goLink(n)}),s._UZ(3,"nz-link",2),s._UZ(4,"nz-link",3),s._UZ(5,"nz-link",4),s._UZ(6,"nz-link",5),s._UZ(7,"nz-link",6),s._UZ(8,"nz-link",7),s._UZ(9,"nz-link",8),s._UZ(10,"nz-link",9),s.qZA(),s.qZA(),s.TgZ(11,"section",10),s.TgZ(12,"h1"),s._uU(13,"Tag"),s.TgZ(14,"span",11),s._uU(15,"\u6807\u7b7e"),s.qZA(),s._UZ(16,"span",12),s.TgZ(17,"a",13),s._UZ(18,"i",14),s.qZA(),s.qZA(),s.TgZ(19,"section",10),s.IAx(),s.TgZ(20,"p"),s._uU(21,"\u8fdb\u884c\u6807\u8bb0\u548c\u5206\u7c7b\u7684\u5c0f\u6807\u7b7e\u3002"),s.qZA(),s.TgZ(22,"h2",15),s.TgZ(23,"span"),s._uU(24,"\u4f55\u65f6\u4f7f\u7528"),s.qZA(),s.TgZ(25,"a",16),s._uU(26,"#"),s.qZA(),s.qZA(),s.TgZ(27,"ul"),s.TgZ(28,"li"),s._uU(29," \u7528\u4e8e\u6807\u8bb0\u4e8b\u7269\u7684\u5c5e\u6027\u548c\u7ef4\u5ea6\u3002"),s.qZA(),s.TgZ(30,"li"),s._uU(31," \u8fdb\u884c\u5206\u7c7b\u3002"),s.qZA(),s.qZA(),s.TgZ(32,"pre",17),s.TgZ(33,"code"),s.TgZ(34,"span",18),s._uU(35,"import"),s.qZA(),s._uU(36," "),s.TgZ(37,"span",19),s._uU(38,"{"),s.qZA(),s._uU(39," NzTagModule "),s.TgZ(40,"span",19),s._uU(41,"}"),s.qZA(),s._uU(42," "),s.TgZ(43,"span",18),s._uU(44,"from"),s.qZA(),s._uU(45," "),s.TgZ(46,"span",20),s._uU(47,"'ng-zorro-antd/tag'"),s.qZA(),s.TgZ(48,"span",19),s._uU(49,";"),s.qZA(),s.qZA(),s.qZA(),s.fQ9(),s.qZA(),s.TgZ(50,"h2"),s.TgZ(51,"span"),s._uU(52,"\u4ee3\u7801\u6f14\u793a"),s.qZA(),s.TgZ(53,"i",21),s.NdJ("click",function(){return e.expandAllCode()}),s.qZA(),s.qZA(),s.qZA(),s.TgZ(54,"div",22),s.TgZ(55,"div",23),s.TgZ(56,"nz-code-box",24),s._UZ(57,"nz-demo-tag-basic",25),s.TgZ(58,"div",26),s.IAx(),s.TgZ(59,"p"),s._uU(60,"\u57fa\u672c\u6807\u7b7e\u7684\u7528\u6cd5\uff0c\u53ef\u4ee5\u901a\u8fc7\u6dfb\u52a0 "),s.TgZ(61,"code"),s._uU(62,'nzMode="closeable"'),s.qZA(),s._uU(63," \u53d8\u4e3a\u53ef\u5173\u95ed\u6807\u7b7e\u3002\u53ef\u5173\u95ed\u6807\u7b7e\u5177\u6709 "),s.TgZ(64,"code"),s._uU(65,"nzOnClose"),s.qZA(),s._uU(66," \u4e8b\u4ef6\u3002"),s.qZA(),s.fQ9(),s.qZA(),s.qZA(),s.TgZ(67,"nz-code-box",27),s._UZ(68,"nz-demo-tag-control",25),s.TgZ(69,"div",26),s.IAx(),s.TgZ(70,"p"),s._uU(71,"\u7528\u6570\u7ec4\u751f\u6210\u4e00\u7ec4\u6807\u7b7e\uff0c\u53ef\u4ee5\u52a8\u6001\u6dfb\u52a0\u548c\u5220\u9664\u3002"),s.qZA(),s.fQ9(),s.qZA(),s.qZA(),s.TgZ(72,"nz-code-box",28),s._UZ(73,"nz-demo-tag-hot-tags",25),s.TgZ(74,"div",26),s.IAx(),s.TgZ(75,"p"),s._uU(76,"\u9009\u62e9\u4f60\u611f\u5174\u8da3\u7684\u8bdd\u9898\u3002"),s.qZA(),s.fQ9(),s.qZA(),s.qZA(),s.TgZ(77,"nz-code-box",29),s._UZ(78,"nz-demo-tag-status",25),s.TgZ(79,"div",26),s.IAx(),s.TgZ(80,"p"),s._uU(81,"\u9884\u8bbe\u4e94\u79cd\u72b6\u6001\u989c\u8272\uff0c\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e "),s.TgZ(82,"code"),s._uU(83,"nzColor"),s.qZA(),s._uU(84," \u4e3a "),s.TgZ(85,"code"),s._uU(86,"success"),s.qZA(),s._uU(87,"\u3001 "),s.TgZ(88,"code"),s._uU(89,"processing"),s.qZA(),s._uU(90,"\u3001"),s.TgZ(91,"code"),s._uU(92,"error"),s.qZA(),s._uU(93,"\u3001"),s.TgZ(94,"code"),s._uU(95,"default"),s.qZA(),s._uU(96,"\u3001"),s.TgZ(97,"code"),s._uU(98,"warning"),s.qZA(),s._uU(99," \u6765\u4ee3\u8868\u4e0d\u540c\u7684\u72b6\u6001\u3002"),s.qZA(),s.fQ9(),s.qZA(),s.qZA(),s.qZA(),s.TgZ(100,"div",23),s.TgZ(101,"nz-code-box",30),s._UZ(102,"nz-demo-tag-colorful",25),s.TgZ(103,"div",26),s.IAx(),s.TgZ(104,"p"),s._uU(105,"\u6211\u4eec\u6dfb\u52a0\u4e86\u591a\u79cd\u9884\u8bbe\u8272\u5f69\u7684\u6807\u7b7e\u6837\u5f0f\uff0c\u7528\u4f5c\u4e0d\u540c\u573a\u666f\u4f7f\u7528\u3002\u5982\u679c\u9884\u8bbe\u503c\u4e0d\u80fd\u6ee1\u8db3\u4f60\u7684\u9700\u6c42\uff0c\u53ef\u4ee5\u8bbe\u7f6e\u4e3a\u5177\u4f53\u7684\u8272\u503c\u3002"),s.qZA(),s.fQ9(),s.qZA(),s.qZA(),s.TgZ(106,"nz-code-box",31),s._UZ(107,"nz-demo-tag-checkable",25),s.TgZ(108,"div",26),s.IAx(),s.TgZ(109,"p"),s._uU(110,"\u53ef\u901a\u8fc7 "),s.TgZ(111,"code"),s._uU(112,'nzMode="checkable"'),s.qZA(),s._uU(113," \u5b9e\u73b0\u7c7b\u4f3c Checkbox \u7684\u6548\u679c\uff0c\u70b9\u51fb\u5207\u6362\u9009\u4e2d\u6548\u679c\u3002"),s.qZA(),s.fQ9(),s.qZA(),s.qZA(),s.TgZ(114,"nz-code-box",32),s._UZ(115,"nz-demo-tag-icon",25),s.TgZ(116,"div",26),s.IAx(),s.TgZ(117,"p"),s._uU(118,"\u5728 tag \u7ec4\u4ef6\u5185\u5d4c\u5165 icon\u3002"),s.qZA(),s.fQ9(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.TgZ(119,"section",33),s.IAx(),s.TgZ(120,"h2",34),s.TgZ(121,"span"),s._uU(122,"API"),s.qZA(),s.TgZ(123,"a",35),s._uU(124,"#"),s.qZA(),s.qZA(),s.TgZ(125,"h3",36),s.TgZ(126,"span"),s._uU(127,"nz-tag"),s.qZA(),s.TgZ(128,"label",37),s._uU(129,"component"),s.qZA(),s.TgZ(130,"a",38),s._uU(131,"#"),s.qZA(),s.qZA(),s.TgZ(132,"table"),s.TgZ(133,"thead"),s.TgZ(134,"tr"),s.TgZ(135,"th"),s._uU(136,"\u53c2\u6570"),s.qZA(),s.TgZ(137,"th"),s._uU(138,"\u8bf4\u660e"),s.qZA(),s.TgZ(139,"th"),s._uU(140,"\u7c7b\u578b"),s.qZA(),s.TgZ(141,"th"),s._uU(142,"\u9ed8\u8ba4\u503c"),s.qZA(),s.qZA(),s.qZA(),s.TgZ(143,"tbody"),s.TgZ(144,"tr"),s.TgZ(145,"td"),s.TgZ(146,"code"),s._uU(147,"[nzMode]"),s.qZA(),s.qZA(),s.TgZ(148,"td"),s._uU(149,"\u8bbe\u5b9a\u6807\u7b7e\u5de5\u4f5c\u7684\u6a21\u5f0f"),s.qZA(),s.TgZ(150,"td"),s.TgZ(151,"code"),s._uU(152,"'closeable' | 'default' | 'checkable'"),s.qZA(),s.qZA(),s.TgZ(153,"td"),s.TgZ(154,"code"),s._uU(155,"'default'"),s.qZA(),s.qZA(),s.qZA(),s.TgZ(156,"tr"),s.TgZ(157,"td"),s.TgZ(158,"code"),s._uU(159,"[nzChecked]"),s.qZA(),s.qZA(),s.TgZ(160,"td"),s._uU(161,"\u8bbe\u7f6e\u6807\u7b7e\u7684\u9009\u4e2d\u72b6\u6001\uff0c\u53ef\u53cc\u5411\u7ed1\u5b9a\uff0c\u5728 "),s.TgZ(162,"code"),s._uU(163,'nzMode="checkable"'),s.qZA(),s._uU(164," \u65f6\u53ef\u7528"),s.qZA(),s.TgZ(165,"td"),s.TgZ(166,"code"),s._uU(167,"boolean"),s.qZA(),s.qZA(),s.TgZ(168,"td"),s.TgZ(169,"code"),s._uU(170,"false"),s.qZA(),s.qZA(),s.qZA(),s.TgZ(171,"tr"),s.TgZ(172,"td"),s.TgZ(173,"code"),s._uU(174,"[nzColor]"),s.qZA(),s.qZA(),s.TgZ(175,"td"),s._uU(176,"\u6807\u7b7e\u8272"),s.qZA(),s.TgZ(177,"td"),s.TgZ(178,"code"),s._uU(179,"string"),s.qZA(),s.qZA(),s.TgZ(180,"td"),s._uU(181,"-"),s.qZA(),s.qZA(),s.TgZ(182,"tr"),s.TgZ(183,"td"),s.TgZ(184,"code"),s._uU(185,"(nzOnClose)"),s.qZA(),s.qZA(),s.TgZ(186,"td"),s._uU(187,"\u5173\u95ed\u65f6\u7684\u56de\u8c03\uff0c\u5728 "),s.TgZ(188,"code"),s._uU(189,'nzMode="closable"'),s.qZA(),s._uU(190," \u65f6\u53ef\u7528"),s.qZA(),s.TgZ(191,"td"),s.TgZ(192,"code"),s._uU(193,"EventEmitter<MouseEvent>"),s.qZA(),s.qZA(),s.TgZ(194,"td"),s._uU(195,"-"),s.qZA(),s.qZA(),s.TgZ(196,"tr"),s.TgZ(197,"td"),s.TgZ(198,"code"),s._uU(199,"(nzCheckedChange)"),s.qZA(),s.qZA(),s.TgZ(200,"td"),s._uU(201,"\u8bbe\u7f6e\u6807\u7b7e\u7684\u9009\u4e2d\u72b6\u6001\u7684\u56de\u8c03\uff0c\u5728 "),s.TgZ(202,"code"),s._uU(203,'nzMode="checkable"'),s.qZA(),s._uU(204," \u65f6\u53ef\u7528"),s.qZA(),s.TgZ(205,"td"),s.TgZ(206,"code"),s._uU(207,"EventEmitter<void>"),s.qZA(),s.qZA(),s.TgZ(208,"td"),s._uU(209,"-"),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.fQ9(),s.qZA(),s.qZA()),2&n&&(s.xp6(1),s.Q6J("nzOffsetTop",16),s.xp6(1),s.Q6J("nzAffix",!1),s.xp6(52),s.Q6J("nzGutter",16),s.xp6(1),s.Q6J("nzXl",12)("nzSpan",24),s.xp6(1),s.Q6J("nzId","components-tag-demo-basic")("nzLink","components-tag-demo-basic")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/tag/demo/basic.md"),s.xp6(11),s.Q6J("nzId","components-tag-demo-control")("nzLink","components-tag-demo-control")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/tag/demo/control.md"),s.xp6(5),s.Q6J("nzId","components-tag-demo-hot-tags")("nzLink","components-tag-demo-hot-tags")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/tag/demo/hot-tags.md"),s.xp6(5),s.Q6J("nzId","components-tag-demo-status")("nzLink","components-tag-demo-status")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/tag/demo/status.md"),s.xp6(23),s.Q6J("nzXl",12)("nzSpan",24),s.xp6(1),s.Q6J("nzId","components-tag-demo-colorful")("nzLink","components-tag-demo-colorful")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/tag/demo/colorful.md"),s.xp6(5),s.Q6J("nzId","components-tag-demo-checkable")("nzLink","components-tag-demo-checkable")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/tag/demo/checkable.md"),s.xp6(8),s.Q6J("nzId","components-tag-demo-icon")("nzLink","components-tag-demo-icon")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/tag/demo/icon.md"))},directives:[m.$,p.IT,p.Fp,d.Ls,T.SY,f.SK,f.t3,z.G,A,b,v,y,w,H,N],encapsulation:2}),n}(),J=function(){var n=function(){function n(){t(this,n),this.expanded=!1}return a(n,[{key:"goLink",value:function(n){window&&(window.location.hash=n)}},{key:"expandAllCode",value:function(){var n=this;this.expanded=!this.expanded,this.codeBoxes.forEach(function(e){e.nzExpanded=n.expanded,e.expandCode(n.expanded),e.check()})}}]),n}();return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=s.Xpm({type:n,selectors:[["nz-demo-tag"]],viewQuery:function(n,e){var t;(1&n&&s.Gf(z.G,5),2&n)&&(s.iGM(t=s.CRH())&&(e.codeBoxes=t))},decls:207,vars:35,consts:[[1,"toc-affix",3,"nzOffsetTop"],["nzShowInkInFixed","",3,"nzAffix","nzClick"],["nzHref","#components-tag-demo-basic","nzTitle","Basic"],["nzHref","#components-tag-demo-colorful","nzTitle","Colorful Tag"],["nzHref","#components-tag-demo-control","nzTitle","Add & Remove Dynamically"],["nzHref","#components-tag-demo-checkable","nzTitle","Checkable"],["nzHref","#components-tag-demo-hot-tags","nzTitle","Hot Tags"],["nzHref","#components-tag-demo-icon","nzTitle","Icon"],["nzHref","#components-tag-demo-status","nzTitle","Status Tag"],["nzHref","#api","nzTitle","API"],[1,"markdown"],[1,"subtitle"],[1,"widget"],["aria-label","Edit this page on Github","href","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/tag/doc/index.en-US.md","target","_blank","rel","noopener noreferrer",1,"edit-button"],["nz-icon","","nzType","edit"],["id","when-to-use"],["onclick","window.location.hash = 'when-to-use'",1,"anchor"],[1,"language-ts"],[1,"token","keyword"],[1,"token","punctuation"],[1,"token","string"],["nz-icon","","nzType","appstore","nz-tooltip","","nzTooltipTitle","Expand All Code",1,"code-box-expand-trigger",3,"click"],["nz-row","",3,"nzGutter"],["nz-col","",3,"nzXl","nzSpan"],["nzTitle","Basic","nzSelector","nz-demo-tag-basic","nzGenerateCommand","ng g ng-zorro-antd:tag-basic <name>","nzComponentName","NzDemoTagBasicComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["demo",""],["intro",""],["nzTitle","Add & Remove Dynamically","nzSelector","nz-demo-tag-control","nzGenerateCommand","ng g ng-zorro-antd:tag-control <name>","nzComponentName","NzDemoTagControlComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","Hot Tags","nzSelector","nz-demo-tag-hot-tags","nzGenerateCommand","ng g ng-zorro-antd:tag-hot-tags <name>","nzComponentName","NzDemoTagHotTagsComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","Status Tag","nzSelector","nz-demo-tag-status","nzGenerateCommand","ng g ng-zorro-antd:tag-status <name>","nzComponentName","NzDemoTagStatusComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","Colorful Tag","nzSelector","nz-demo-tag-colorful","nzGenerateCommand","ng g ng-zorro-antd:tag-colorful <name>","nzComponentName","NzDemoTagColorfulComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","Checkable","nzSelector","nz-demo-tag-checkable","nzGenerateCommand","ng g ng-zorro-antd:tag-checkable <name>","nzComponentName","NzDemoTagCheckableComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","Icon","nzSelector","nz-demo-tag-icon","nzGenerateCommand","ng g ng-zorro-antd:tag-icon <name>","nzComponentName","NzDemoTagIconComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],[1,"markdown","api-container"],["id","api"],["onclick","window.location.hash = 'api'",1,"anchor"],["id","nz-tag"],[1,"api-type-label","component"],["onclick","window.location.hash = 'nz-tag'",1,"anchor"]],template:function(n,e){1&n&&(s.TgZ(0,"article"),s.TgZ(1,"nz-affix",0),s.TgZ(2,"nz-anchor",1),s.NdJ("nzClick",function(n){return e.goLink(n)}),s._UZ(3,"nz-link",2),s._UZ(4,"nz-link",3),s._UZ(5,"nz-link",4),s._UZ(6,"nz-link",5),s._UZ(7,"nz-link",6),s._UZ(8,"nz-link",7),s._UZ(9,"nz-link",8),s._UZ(10,"nz-link",9),s.qZA(),s.qZA(),s.TgZ(11,"section",10),s.TgZ(12,"h1"),s._uU(13,"Tag"),s._UZ(14,"span",11),s._UZ(15,"span",12),s.TgZ(16,"a",13),s._UZ(17,"i",14),s.qZA(),s.qZA(),s.TgZ(18,"section",10),s.IAx(),s.TgZ(19,"p"),s._uU(20,"Tag for categorizing or markup."),s.qZA(),s.TgZ(21,"h2",15),s.TgZ(22,"span"),s._uU(23,"When To Use"),s.qZA(),s.TgZ(24,"a",16),s._uU(25,"#"),s.qZA(),s.qZA(),s.TgZ(26,"ul"),s.TgZ(27,"li"),s.TgZ(28,"p"),s._uU(29," It can be used to tag by dimension or property."),s.qZA(),s.qZA(),s.TgZ(30,"li"),s.TgZ(31,"p"),s._uU(32," When categorizing."),s.qZA(),s.qZA(),s.qZA(),s.TgZ(33,"pre",17),s.TgZ(34,"code"),s.TgZ(35,"span",18),s._uU(36,"import"),s.qZA(),s._uU(37," "),s.TgZ(38,"span",19),s._uU(39,"{"),s.qZA(),s._uU(40," NzTagModule "),s.TgZ(41,"span",19),s._uU(42,"}"),s.qZA(),s._uU(43," "),s.TgZ(44,"span",18),s._uU(45,"from"),s.qZA(),s._uU(46," "),s.TgZ(47,"span",20),s._uU(48,"'ng-zorro-antd/tag'"),s.qZA(),s.TgZ(49,"span",19),s._uU(50,";"),s.qZA(),s.qZA(),s.qZA(),s.fQ9(),s.qZA(),s.TgZ(51,"h2"),s.TgZ(52,"span"),s._uU(53,"Examples"),s.qZA(),s.TgZ(54,"i",21),s.NdJ("click",function(){return e.expandAllCode()}),s.qZA(),s.qZA(),s.qZA(),s.TgZ(55,"div",22),s.TgZ(56,"div",23),s.TgZ(57,"nz-code-box",24),s._UZ(58,"nz-demo-tag-basic",25),s.TgZ(59,"div",26),s.IAx(),s.TgZ(60,"p"),s._uU(61,"Usage of basic Tag, and it could be closeable by set "),s.TgZ(62,"code"),s._uU(63,'nzMode="closeable"'),s.qZA(),s._uU(64," property. Closeable Tag supports "),s.TgZ(65,"code"),s._uU(66,"nzOnClose"),s.qZA(),s._uU(67," events."),s.qZA(),s.fQ9(),s.qZA(),s.qZA(),s.TgZ(68,"nz-code-box",27),s._UZ(69,"nz-demo-tag-control",25),s.TgZ(70,"div",26),s.IAx(),s.TgZ(71,"p"),s._uU(72,"Generating a set of Tags by array, you can add and remove dynamically."),s.qZA(),s.fQ9(),s.qZA(),s.qZA(),s.TgZ(73,"nz-code-box",28),s._UZ(74,"nz-demo-tag-hot-tags",25),s.TgZ(75,"div",26),s.IAx(),s.TgZ(76,"p"),s._uU(77,"Select your favourite topics."),s.qZA(),s.fQ9(),s.qZA(),s.qZA(),s.TgZ(78,"nz-code-box",29),s._UZ(79,"nz-demo-tag-status",25),s.TgZ(80,"div",26),s.IAx(),s.TgZ(81,"p"),s._uU(82,"We preset five different colors, you can set "),s.TgZ(83,"code"),s._uU(84,"nzColor"),s.qZA(),s._uU(85," property such as "),s.TgZ(86,"code"),s._uU(87,"success"),s.qZA(),s._uU(88,","),s.TgZ(89,"code"),s._uU(90,"processing"),s.qZA(),s._uU(91,","),s.TgZ(92,"code"),s._uU(93,"error"),s.qZA(),s._uU(94,","),s.TgZ(95,"code"),s._uU(96,"default"),s.qZA(),s._uU(97," and "),s.TgZ(98,"code"),s._uU(99,"warning"),s.qZA(),s._uU(100," to indicate specific status."),s.qZA(),s.fQ9(),s.qZA(),s.qZA(),s.qZA(),s.TgZ(101,"div",23),s.TgZ(102,"nz-code-box",30),s._UZ(103,"nz-demo-tag-colorful",25),s.TgZ(104,"div",26),s.IAx(),s.TgZ(105,"p"),s._uU(106,"We preset a series of colorful tag style for different situation usage.\nAnd you can always set it to a hex color string for custom color."),s.qZA(),s.fQ9(),s.qZA(),s.qZA(),s.TgZ(107,"nz-code-box",31),s._UZ(108,"nz-demo-tag-checkable",25),s.TgZ(109,"div",26),s.IAx(),s.TgZ(110,"p"),s.TgZ(111,"code"),s._uU(112,'nzMode="checkable"'),s.qZA(),s._uU(113," works like Checkbox, click it to toggle checked state."),s.qZA(),s.fQ9(),s.qZA(),s.qZA(),s.TgZ(114,"nz-code-box",32),s._UZ(115,"nz-demo-tag-icon",25),s.TgZ(116,"div",26),s.IAx(),s.TgZ(117,"p"),s._uU(118,"Tag components can contain an icon."),s.qZA(),s.fQ9(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.TgZ(119,"section",33),s.IAx(),s.TgZ(120,"h2",34),s.TgZ(121,"span"),s._uU(122,"API"),s.qZA(),s.TgZ(123,"a",35),s._uU(124,"#"),s.qZA(),s.qZA(),s.TgZ(125,"h3",36),s.TgZ(126,"span"),s._uU(127,"nz-tag"),s.qZA(),s.TgZ(128,"label",37),s._uU(129,"component"),s.qZA(),s.TgZ(130,"a",38),s._uU(131,"#"),s.qZA(),s.qZA(),s.TgZ(132,"table"),s.TgZ(133,"thead"),s.TgZ(134,"tr"),s.TgZ(135,"th"),s._uU(136,"Property"),s.qZA(),s.TgZ(137,"th"),s._uU(138,"Description"),s.qZA(),s.TgZ(139,"th"),s._uU(140,"Type"),s.qZA(),s.TgZ(141,"th"),s._uU(142,"Default"),s.qZA(),s.qZA(),s.qZA(),s.TgZ(143,"tbody"),s.TgZ(144,"tr"),s.TgZ(145,"td"),s.TgZ(146,"code"),s._uU(147,"[nzMode]"),s.qZA(),s.qZA(),s.TgZ(148,"td"),s._uU(149,"Mode of tag"),s.qZA(),s.TgZ(150,"td"),s.TgZ(151,"code"),s._uU(152,"'closeable' | 'default' | 'checkable'"),s.qZA(),s.qZA(),s.TgZ(153,"td"),s.TgZ(154,"code"),s._uU(155,"'default'"),s.qZA(),s.qZA(),s.qZA(),s.TgZ(156,"tr"),s.TgZ(157,"td"),s.TgZ(158,"code"),s._uU(159,"[nzChecked]"),s.qZA(),s.qZA(),s.TgZ(160,"td"),s._uU(161,"Checked status of Tag, double binding, only works when "),s.TgZ(162,"code"),s._uU(163,'nzMode="checkable"'),s.qZA(),s.qZA(),s.TgZ(164,"td"),s.TgZ(165,"code"),s._uU(166,"boolean"),s.qZA(),s.qZA(),s.TgZ(167,"td"),s.TgZ(168,"code"),s._uU(169,"false"),s.qZA(),s.qZA(),s.qZA(),s.TgZ(170,"tr"),s.TgZ(171,"td"),s.TgZ(172,"code"),s._uU(173,"[nzColor]"),s.qZA(),s.qZA(),s.TgZ(174,"td"),s._uU(175,"Color of the Tag"),s.qZA(),s.TgZ(176,"td"),s.TgZ(177,"code"),s._uU(178,"string"),s.qZA(),s.qZA(),s.TgZ(179,"td"),s._uU(180,"-"),s.qZA(),s.qZA(),s.TgZ(181,"tr"),s.TgZ(182,"td"),s.TgZ(183,"code"),s._uU(184,"(nzOnClose)"),s.qZA(),s.qZA(),s.TgZ(185,"td"),s._uU(186,"Callback executed when tag is closed, only works when "),s.TgZ(187,"code"),s._uU(188,'nzMode="closable"'),s.qZA(),s.qZA(),s.TgZ(189,"td"),s.TgZ(190,"code"),s._uU(191,"EventEmitter<MouseEvent>"),s.qZA(),s.qZA(),s.TgZ(192,"td"),s._uU(193,"-"),s.qZA(),s.qZA(),s.TgZ(194,"tr"),s.TgZ(195,"td"),s.TgZ(196,"code"),s._uU(197,"(nzCheckedChange)"),s.qZA(),s.qZA(),s.TgZ(198,"td"),s._uU(199,"Checked status change call back, only works when "),s.TgZ(200,"code"),s._uU(201,'nzMode="checkable"'),s.qZA(),s.qZA(),s.TgZ(202,"td"),s.TgZ(203,"code"),s._uU(204,"EventEmitter<boolean>"),s.qZA(),s.qZA(),s.TgZ(205,"td"),s._uU(206,"-"),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.fQ9(),s.qZA(),s.qZA()),2&n&&(s.xp6(1),s.Q6J("nzOffsetTop",16),s.xp6(1),s.Q6J("nzAffix",!1),s.xp6(53),s.Q6J("nzGutter",16),s.xp6(1),s.Q6J("nzXl",12)("nzSpan",24),s.xp6(1),s.Q6J("nzId","components-tag-demo-basic")("nzLink","components-tag-demo-basic")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/tag/demo/basic.md"),s.xp6(11),s.Q6J("nzId","components-tag-demo-control")("nzLink","components-tag-demo-control")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/tag/demo/control.md"),s.xp6(5),s.Q6J("nzId","components-tag-demo-hot-tags")("nzLink","components-tag-demo-hot-tags")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/tag/demo/hot-tags.md"),s.xp6(5),s.Q6J("nzId","components-tag-demo-status")("nzLink","components-tag-demo-status")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/tag/demo/status.md"),s.xp6(23),s.Q6J("nzXl",12)("nzSpan",24),s.xp6(1),s.Q6J("nzId","components-tag-demo-colorful")("nzLink","components-tag-demo-colorful")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/tag/demo/colorful.md"),s.xp6(5),s.Q6J("nzId","components-tag-demo-checkable")("nzLink","components-tag-demo-checkable")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/tag/demo/checkable.md"),s.xp6(7),s.Q6J("nzId","components-tag-demo-icon")("nzLink","components-tag-demo-icon")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/tag/demo/icon.md"))},directives:[m.$,p.IT,p.Fp,d.Ls,T.SY,f.SK,f.t3,z.G,A,b,v,y,w,H,N],encapsulation:2}),n}(),O=function(){var n=a(function n(){t(this,n)});return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=s.oAB({type:n}),n.\u0275inj=s.cJS({imports:[[i.G].concat(l,[r.Bz.forChild([{path:"en",component:J},{path:"zh",component:Q}])])]}),n}()}}])}();