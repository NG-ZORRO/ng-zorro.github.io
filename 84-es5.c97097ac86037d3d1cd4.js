!function(){function n(n){return function(n){if(Array.isArray(n))return e(n)}(n)||function(n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(n))return Array.from(n)}(n)||function(n,t){if(!n)return;if("string"==typeof n)return e(n,t);var o=Object.prototype.toString.call(n).slice(8,-1);"Object"===o&&n.constructor&&(o=n.constructor.name);if("Map"===o||"Set"===o)return Array.from(n);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return e(n,t)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,o=new Array(e);t<e;t++)o[t]=n[t];return o}function t(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function o(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}function c(n,e,t){return e&&o(n.prototype,e),t&&o(n,t),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{DWCk:function(e,o,a){"use strict";a.r(o),a.d(o,"NzDemoTagModule",function(){return B});var b,i=a("tyNb"),r=a("WGB2"),d=a("tKaq"),l=a("klHs"),z=a("MOHP"),s=[d.b,l.e,z.b],g=a("rKiv"),m=a("fXoL"),p=a("utH8"),u=a("l83q"),f=a("pk25"),h=a("T+9E"),V=((b=function(){function n(){t(this,n)}return c(n,[{key:"onClose",value:function(){console.log("tag was closed.")}},{key:"preventDefault",value:function(n){n.preventDefault(),n.stopPropagation(),console.log("tag can not be closed.")}}]),n}()).\u0275fac=function(n){return new(n||b)},b.\u0275cmp=m.Ib({type:b,selectors:[["nz-demo-tag-basic"]],decls:9,vars:0,consts:[["href","https://github.com/NG-ZORRO/ng-zorro-antd"],["nzMode","closeable",3,"nzOnClose"]],template:function(n,e){1&n&&(m.Vb(0,"nz-tag"),m.Pc(1,"Tag 1"),m.Ub(),m.Vb(2,"nz-tag"),m.Vb(3,"a",0),m.Pc(4,"Link"),m.Ub(),m.Ub(),m.Vb(5,"nz-tag",1),m.dc("nzOnClose",function(){return e.onClose()}),m.Pc(6,"Tag 2"),m.Ub(),m.Vb(7,"nz-tag",1),m.dc("nzOnClose",function(n){return e.preventDefault(n)}),m.Pc(8,"Prevent Default"),m.Ub())},directives:[d.a],encapsulation:2}),b),U=a("ofXK"),P=a("3Pt+"),k=["inputElement"];function C(n,e){if(1&n){var t=m.Xb();m.Vb(0,"nz-tag",3),m.dc("nzOnClose",function(){m.Cc(t);var n=e.$implicit;return m.hc().handleClose(n)}),m.Pc(1),m.Ub()}if(2&n){var o=e.$implicit,c=e.index,a=m.hc();m.pc("nzMode",0===c?"default":"closeable"),m.Ab(1),m.Rc(" ",a.sliceTagName(o)," ")}}function T(n,e){if(1&n){var t=m.Xb();m.Vb(0,"nz-tag",4),m.dc("click",function(){return m.Cc(t),m.hc().showInput()}),m.Qb(1,"i",5),m.Pc(2," New Tag "),m.Ub()}}function v(n,e){if(1&n){var t=m.Xb();m.Vb(0,"input",6,7),m.dc("ngModelChange",function(n){return m.Cc(t),m.hc().inputValue=n})("blur",function(){return m.Cc(t),m.hc().handleInputConfirm()})("keydown.enter",function(){return m.Cc(t),m.hc().handleInputConfirm()}),m.Ub()}if(2&n){var o=m.hc();m.pc("ngModel",o.inputValue)}}var y,I=((y=function(){function e(){t(this,e),this.tags=["Unremovable","Tag 2","Tag 3"],this.inputVisible=!1,this.inputValue=""}return c(e,[{key:"handleClose",value:function(n){this.tags=this.tags.filter(function(e){return e!==n})}},{key:"sliceTagName",value:function(n){return n.length>20?"".concat(n.slice(0,20),"..."):n}},{key:"showInput",value:function(){var n=this;this.inputVisible=!0,setTimeout(function(){var e;null===(e=n.inputElement)||void 0===e||e.nativeElement.focus()},10)}},{key:"handleInputConfirm",value:function(){this.inputValue&&-1===this.tags.indexOf(this.inputValue)&&(this.tags=[].concat(n(this.tags),[this.inputValue])),this.inputValue="",this.inputVisible=!1}}]),e}()).\u0275fac=function(n){return new(n||y)},y.\u0275cmp=m.Ib({type:y,selectors:[["nz-demo-tag-control"]],viewQuery:function(n,e){var t;1&n&&m.Uc(k,!0),2&n&&m.yc(t=m.ec())&&(e.inputElement=t.first)},decls:3,vars:3,consts:[[3,"nzMode","nzOnClose",4,"ngFor","ngForOf"],["class","editable-tag","nzNoAnimation","",3,"click",4,"ngIf"],["nz-input","","nzSize","small","type","text","style","width: 78px;",3,"ngModel","ngModelChange","blur","keydown.enter",4,"ngIf"],[3,"nzMode","nzOnClose"],["nzNoAnimation","",1,"editable-tag",3,"click"],["nz-icon","","nzType","plus"],["nz-input","","nzSize","small","type","text",2,"width","78px",3,"ngModel","ngModelChange","blur","keydown.enter"],["inputElement",""]],template:function(n,e){1&n&&(m.Nc(0,C,2,2,"nz-tag",0),m.Nc(1,T,3,0,"nz-tag",1),m.Nc(2,v,2,1,"input",2)),2&n&&(m.pc("ngForOf",e.tags),m.Ab(1),m.pc("ngIf",!e.inputVisible),m.Ab(1),m.pc("ngIf",e.inputVisible))},directives:[U.n,U.o,d.a,z.a,l.b,P.d,P.p,P.s],styles:[".editable-tag[_ngcontent-%COMP%] {\n        background: rgb(255, 255, 255);\n        border-style: dashed;\n      }"]}),y);function w(n,e){if(1&n){var t=m.Xb();m.Vb(0,"nz-tag",1),m.dc("nzCheckedChange",function(n){m.Cc(t);var o=e.$implicit;return m.hc().handleChange(n,o)}),m.Pc(1),m.Ub()}if(2&n){var o=e.$implicit,c=m.hc();m.pc("nzChecked",c.selectedTags.indexOf(o)>-1),m.Ab(1),m.Rc(" ",o," ")}}var H,A,x,O,N,S,Q,G,R=["Movie","Books","Music","Sports"],M=((G=function(){function n(){t(this,n),this.hotTags=R,this.selectedTags=[]}return c(n,[{key:"handleChange",value:function(n,e){n?this.selectedTags.push(e):this.selectedTags=this.selectedTags.filter(function(n){return n!==e}),console.log("You are interested in: ",this.selectedTags)}}]),n}()).\u0275fac=function(n){return new(n||G)},G.\u0275cmp=m.Ib({type:G,selectors:[["nz-demo-tag-hot-tags"]],decls:3,vars:1,consts:[["nzMode","checkable",3,"nzChecked","nzCheckedChange",4,"ngFor","ngForOf"],["nzMode","checkable",3,"nzChecked","nzCheckedChange"]],template:function(n,e){1&n&&(m.Vb(0,"strong"),m.Pc(1,"Categories: "),m.Ub(),m.Nc(2,w,2,2,"nz-tag",0)),2&n&&(m.Ab(2),m.pc("ngForOf",e.hotTags))},directives:[U.n,d.a],encapsulation:2}),G),L=((Q=function n(){t(this,n)}).\u0275fac=function(n){return new(n||Q)},Q.\u0275cmp=m.Ib({type:Q,selectors:[["nz-demo-tag-status"]],decls:36,vars:0,consts:[["nzColor","success"],["nzColor","processing"],["nzColor","error"],["nzColor","warning"],["nzColor","default"],["nz-icon","","nzType","check-circle"],["nz-icon","","nzType","sync","nzSpin",""],["nz-icon","","nzType","close-circle"],["nz-icon","","nzType","exclamation-circle"],["nz-icon","","nzType","clock-circle"]],template:function(n,e){1&n&&(m.Vb(0,"div"),m.Vb(1,"h4"),m.Pc(2,"Without icon"),m.Ub(),m.Vb(3,"nz-tag",0),m.Pc(4,"success"),m.Ub(),m.Vb(5,"nz-tag",1),m.Pc(6,"processing"),m.Ub(),m.Vb(7,"nz-tag",2),m.Pc(8,"error"),m.Ub(),m.Vb(9,"nz-tag",3),m.Pc(10,"warning"),m.Ub(),m.Vb(11,"nz-tag",4),m.Pc(12,"default"),m.Ub(),m.Ub(),m.Vb(13,"div"),m.Vb(14,"h4"),m.Pc(15,"With icon"),m.Ub(),m.Vb(16,"nz-tag",0),m.Qb(17,"i",5),m.Vb(18,"span"),m.Pc(19,"success"),m.Ub(),m.Ub(),m.Vb(20,"nz-tag",1),m.Qb(21,"i",6),m.Vb(22,"span"),m.Pc(23,"processing"),m.Ub(),m.Ub(),m.Vb(24,"nz-tag",2),m.Qb(25,"i",7),m.Vb(26,"span"),m.Pc(27,"error"),m.Ub(),m.Ub(),m.Vb(28,"nz-tag",3),m.Qb(29,"i",8),m.Vb(30,"span"),m.Pc(31,"warning"),m.Ub(),m.Ub(),m.Vb(32,"nz-tag",4),m.Qb(33,"i",9),m.Vb(34,"span"),m.Pc(35,"default"),m.Ub(),m.Ub(),m.Ub())},directives:[d.a,z.a],encapsulation:2}),Q),E=((S=function n(){t(this,n)}).\u0275fac=function(n){return new(n||S)},S.\u0275cmp=m.Ib({type:S,selectors:[["nz-demo-tag-colorful"]],decls:36,vars:15,consts:[[2,"margin-bottom","16px"],[3,"nzColor"],[2,"margin","16px 0px"]],template:function(n,e){1&n&&(m.Vb(0,"h4",0),m.Pc(1,"Presets:"),m.Ub(),m.Vb(2,"div"),m.Vb(3,"nz-tag",1),m.Pc(4,"magenta"),m.Ub(),m.Vb(5,"nz-tag",1),m.Pc(6,"red"),m.Ub(),m.Vb(7,"nz-tag",1),m.Pc(8,"volcano"),m.Ub(),m.Vb(9,"nz-tag",1),m.Pc(10,"orange"),m.Ub(),m.Vb(11,"nz-tag",1),m.Pc(12,"gold"),m.Ub(),m.Vb(13,"nz-tag",1),m.Pc(14,"lime"),m.Ub(),m.Vb(15,"nz-tag",1),m.Pc(16,"green"),m.Ub(),m.Vb(17,"nz-tag",1),m.Pc(18,"cyan"),m.Ub(),m.Vb(19,"nz-tag",1),m.Pc(20,"blue"),m.Ub(),m.Vb(21,"nz-tag",1),m.Pc(22,"geekblue"),m.Ub(),m.Vb(23,"nz-tag",1),m.Pc(24,"purple"),m.Ub(),m.Ub(),m.Vb(25,"h4",2),m.Pc(26,"Custom:"),m.Ub(),m.Vb(27,"div"),m.Vb(28,"nz-tag",1),m.Pc(29,"#f50"),m.Ub(),m.Vb(30,"nz-tag",1),m.Pc(31,"#2db7f5"),m.Ub(),m.Vb(32,"nz-tag",1),m.Pc(33,"#87d068"),m.Ub(),m.Vb(34,"nz-tag",1),m.Pc(35,"#108ee9"),m.Ub(),m.Ub()),2&n&&(m.Ab(3),m.pc("nzColor","magenta"),m.Ab(2),m.pc("nzColor","red"),m.Ab(2),m.pc("nzColor","volcano"),m.Ab(2),m.pc("nzColor","orange"),m.Ab(2),m.pc("nzColor","gold"),m.Ab(2),m.pc("nzColor","lime"),m.Ab(2),m.pc("nzColor","green"),m.Ab(2),m.pc("nzColor","cyan"),m.Ab(2),m.pc("nzColor","blue"),m.Ab(2),m.pc("nzColor","geekblue"),m.Ab(2),m.pc("nzColor","purple"),m.Ab(5),m.pc("nzColor","#f50"),m.Ab(2),m.pc("nzColor","#2db7f5"),m.Ab(2),m.pc("nzColor","#87d068"),m.Ab(2),m.pc("nzColor","#108ee9"))},directives:[d.a],styles:["\n      .ant-tag {\n        margin-bottom: 8px;\n      }\n    "],encapsulation:2}),S),W=((N=function(){function n(){t(this,n)}return c(n,[{key:"checkChange",value:function(n){console.log(n)}}]),n}()).\u0275fac=function(n){return new(n||N)},N.\u0275cmp=m.Ib({type:N,selectors:[["nz-demo-tag-checkable"]],decls:6,vars:3,consts:[["nzMode","checkable",3,"nzChecked","nzCheckedChange"]],template:function(n,e){1&n&&(m.Vb(0,"nz-tag",0),m.dc("nzCheckedChange",function(n){return e.checkChange(n)}),m.Pc(1,"Tag1"),m.Ub(),m.Vb(2,"nz-tag",0),m.dc("nzCheckedChange",function(n){return e.checkChange(n)}),m.Pc(3,"Tag2"),m.Ub(),m.Vb(4,"nz-tag",0),m.dc("nzCheckedChange",function(n){return e.checkChange(n)}),m.Pc(5,"Tag3"),m.Ub()),2&n&&(m.pc("nzChecked",!0),m.Ab(2),m.pc("nzChecked",!0),m.Ab(2),m.pc("nzChecked",!0))},directives:[d.a],encapsulation:2}),N),D=((O=function n(){t(this,n)}).\u0275fac=function(n){return new(n||O)},O.\u0275cmp=m.Ib({type:O,selectors:[["nz-demo-tag-icon"]],decls:16,vars:0,consts:[["nzColor","#55acee"],["nz-icon","","nzType","twitter"],["nzColor","#cd201f"],["nz-icon","","nzType","youtube"],["nzColor","#3b5999"],["nz-icon","","nzType","facebook"],["nz-icon","","nzType","linkedin"]],template:function(n,e){1&n&&(m.Vb(0,"nz-tag",0),m.Qb(1,"i",1),m.Vb(2,"span"),m.Pc(3,"Twitter"),m.Ub(),m.Ub(),m.Vb(4,"nz-tag",2),m.Qb(5,"i",3),m.Vb(6,"span"),m.Pc(7,"Youtube"),m.Ub(),m.Ub(),m.Vb(8,"nz-tag",4),m.Qb(9,"i",5),m.Vb(10,"span"),m.Pc(11,"Facebook"),m.Ub(),m.Ub(),m.Vb(12,"nz-tag",0),m.Qb(13,"i",6),m.Vb(14,"span"),m.Pc(15,"LinkedIn"),m.Ub(),m.Ub())},directives:[d.a,z.a],encapsulation:2}),O),Z=((x=function(){function n(){t(this,n),this.expanded=!1}return c(n,[{key:"goLink",value:function(n){window&&(window.location.hash=n)}},{key:"expandAllCode",value:function(){var n=this;this.expanded=!this.expanded,this.codeBoxes.forEach(function(e){e.nzExpanded=n.expanded,e.expandCode(n.expanded),e.check()})}}]),n}()).\u0275fac=function(n){return new(n||x)},x.\u0275cmp=m.Ib({type:x,selectors:[["nz-demo-tag"]],viewQuery:function(n,e){var t;1&n&&m.Uc(g.a,!0),2&n&&m.yc(t=m.ec())&&(e.codeBoxes=t)},decls:210,vars:35,consts:[[1,"toc-affix",3,"nzOffsetTop"],["nzShowInkInFixed","",3,"nzAffix","nzClick"],["nzHref","#components-tag-demo-basic","nzTitle","\u57fa\u672c"],["nzHref","#components-tag-demo-colorful","nzTitle","\u591a\u5f69\u6807\u7b7e"],["nzHref","#components-tag-demo-control","nzTitle","\u52a8\u6001\u6dfb\u52a0\u548c\u5220\u9664"],["nzHref","#components-tag-demo-checkable","nzTitle","\u53ef\u9009\u62e9"],["nzHref","#components-tag-demo-hot-tags","nzTitle","\u70ed\u95e8\u6807\u7b7e"],["nzHref","#components-tag-demo-icon","nzTitle","\u56fe\u6807\u6309\u94ae"],["nzHref","#components-tag-demo-status","nzTitle","\u9884\u8bbe\u72b6\u6001\u7684\u6807\u7b7e"],["nzHref","#api","nzTitle","API"],[1,"markdown"],[1,"subtitle"],[1,"widget"],["aria-label","Edit this page on Github","href","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/tag/doc/index.zh-CN.md","target","_blank","rel","noopener noreferrer",1,"edit-button"],["nz-icon","","nzType","edit"],["id","\u4f55\u65f6\u4f7f\u7528"],["onclick","window.location.hash = '\u4f55\u65f6\u4f7f\u7528'",1,"anchor"],[1,"language-ts"],[1,"token","keyword"],[1,"token","punctuation"],[1,"token","string"],["nz-icon","","nzType","appstore","nz-tooltip","","nzTooltipTitle","\u5c55\u5f00\u5168\u90e8\u4ee3\u7801",1,"code-box-expand-trigger",3,"click"],["nz-row","",3,"nzGutter"],["nz-col","",3,"nzXl","nzSpan"],["nzTitle","\u57fa\u672c","nzSelector","nz-demo-tag-basic","nzGenerateCommand","ng g ng-zorro-antd:tag-basic <name>","nzComponentName","NzDemoTagBasicComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["demo",""],["intro",""],["nzTitle","\u52a8\u6001\u6dfb\u52a0\u548c\u5220\u9664","nzSelector","nz-demo-tag-control","nzGenerateCommand","ng g ng-zorro-antd:tag-control <name>","nzComponentName","NzDemoTagControlComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","\u70ed\u95e8\u6807\u7b7e","nzSelector","nz-demo-tag-hot-tags","nzGenerateCommand","ng g ng-zorro-antd:tag-hot-tags <name>","nzComponentName","NzDemoTagHotTagsComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","\u9884\u8bbe\u72b6\u6001\u7684\u6807\u7b7e","nzSelector","nz-demo-tag-status","nzGenerateCommand","ng g ng-zorro-antd:tag-status <name>","nzComponentName","NzDemoTagStatusComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","\u591a\u5f69\u6807\u7b7e","nzSelector","nz-demo-tag-colorful","nzGenerateCommand","ng g ng-zorro-antd:tag-colorful <name>","nzComponentName","NzDemoTagColorfulComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","\u53ef\u9009\u62e9","nzSelector","nz-demo-tag-checkable","nzGenerateCommand","ng g ng-zorro-antd:tag-checkable <name>","nzComponentName","NzDemoTagCheckableComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","\u56fe\u6807\u6309\u94ae","nzSelector","nz-demo-tag-icon","nzGenerateCommand","ng g ng-zorro-antd:tag-icon <name>","nzComponentName","NzDemoTagIconComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],[1,"markdown","api-container"],["id","api"],["onclick","window.location.hash = 'api'",1,"anchor"],["id","nz-tag"],[1,"api-type-label","component"],["onclick","window.location.hash = 'nz-tag'",1,"anchor"]],template:function(n,e){1&n&&(m.Vb(0,"article"),m.Vb(1,"nz-affix",0),m.Vb(2,"nz-anchor",1),m.dc("nzClick",function(n){return e.goLink(n)}),m.Qb(3,"nz-link",2),m.Qb(4,"nz-link",3),m.Qb(5,"nz-link",4),m.Qb(6,"nz-link",5),m.Qb(7,"nz-link",6),m.Qb(8,"nz-link",7),m.Qb(9,"nz-link",8),m.Qb(10,"nz-link",9),m.Ub(),m.Ub(),m.Vb(11,"section",10),m.Vb(12,"h1"),m.Pc(13,"Tag"),m.Vb(14,"span",11),m.Pc(15,"\u6807\u7b7e"),m.Ub(),m.Qb(16,"span",12),m.Vb(17,"a",13),m.Qb(18,"i",14),m.Ub(),m.Ub(),m.Vb(19,"section",10),m.Pb(),m.Vb(20,"p"),m.Pc(21,"\u8fdb\u884c\u6807\u8bb0\u548c\u5206\u7c7b\u7684\u5c0f\u6807\u7b7e\u3002"),m.Ub(),m.Vb(22,"h2",15),m.Vb(23,"span"),m.Pc(24,"\u4f55\u65f6\u4f7f\u7528"),m.Ub(),m.Vb(25,"a",16),m.Pc(26,"#"),m.Ub(),m.Ub(),m.Vb(27,"ul"),m.Vb(28,"li"),m.Pc(29," \u7528\u4e8e\u6807\u8bb0\u4e8b\u7269\u7684\u5c5e\u6027\u548c\u7ef4\u5ea6\u3002"),m.Ub(),m.Vb(30,"li"),m.Pc(31," \u8fdb\u884c\u5206\u7c7b\u3002"),m.Ub(),m.Ub(),m.Vb(32,"pre",17),m.Vb(33,"code"),m.Vb(34,"span",18),m.Pc(35,"import"),m.Ub(),m.Pc(36," "),m.Vb(37,"span",19),m.Pc(38,"{"),m.Ub(),m.Pc(39," NzTagModule "),m.Vb(40,"span",19),m.Pc(41,"}"),m.Ub(),m.Pc(42," "),m.Vb(43,"span",18),m.Pc(44,"from"),m.Ub(),m.Pc(45," "),m.Vb(46,"span",20),m.Pc(47,"'ng-zorro-antd/tag'"),m.Ub(),m.Vb(48,"span",19),m.Pc(49,";"),m.Ub(),m.Ub(),m.Ub(),m.Wb(),m.Ub(),m.Vb(50,"h2"),m.Vb(51,"span"),m.Pc(52,"\u4ee3\u7801\u6f14\u793a"),m.Ub(),m.Vb(53,"i",21),m.dc("click",function(){return e.expandAllCode()}),m.Ub(),m.Ub(),m.Ub(),m.Vb(54,"div",22),m.Vb(55,"div",23),m.Vb(56,"nz-code-box",24),m.Qb(57,"nz-demo-tag-basic",25),m.Vb(58,"div",26),m.Pb(),m.Vb(59,"p"),m.Pc(60,"\u57fa\u672c\u6807\u7b7e\u7684\u7528\u6cd5\uff0c\u53ef\u4ee5\u901a\u8fc7\u6dfb\u52a0 "),m.Vb(61,"code"),m.Pc(62,'nzMode="closeable"'),m.Ub(),m.Pc(63," \u53d8\u4e3a\u53ef\u5173\u95ed\u6807\u7b7e\u3002\u53ef\u5173\u95ed\u6807\u7b7e\u5177\u6709 "),m.Vb(64,"code"),m.Pc(65,"nzOnClose"),m.Ub(),m.Pc(66," \u4e8b\u4ef6\u3002"),m.Ub(),m.Wb(),m.Ub(),m.Ub(),m.Vb(67,"nz-code-box",27),m.Qb(68,"nz-demo-tag-control",25),m.Vb(69,"div",26),m.Pb(),m.Vb(70,"p"),m.Pc(71,"\u7528\u6570\u7ec4\u751f\u6210\u4e00\u7ec4\u6807\u7b7e\uff0c\u53ef\u4ee5\u52a8\u6001\u6dfb\u52a0\u548c\u5220\u9664\u3002"),m.Ub(),m.Wb(),m.Ub(),m.Ub(),m.Vb(72,"nz-code-box",28),m.Qb(73,"nz-demo-tag-hot-tags",25),m.Vb(74,"div",26),m.Pb(),m.Vb(75,"p"),m.Pc(76,"\u9009\u62e9\u4f60\u611f\u5174\u8da3\u7684\u8bdd\u9898\u3002"),m.Ub(),m.Wb(),m.Ub(),m.Ub(),m.Vb(77,"nz-code-box",29),m.Qb(78,"nz-demo-tag-status",25),m.Vb(79,"div",26),m.Pb(),m.Vb(80,"p"),m.Pc(81,"\u9884\u8bbe\u4e94\u79cd\u72b6\u6001\u989c\u8272\uff0c\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e "),m.Vb(82,"code"),m.Pc(83,"nzColor"),m.Ub(),m.Pc(84," \u4e3a "),m.Vb(85,"code"),m.Pc(86,"success"),m.Ub(),m.Pc(87,"\u3001 "),m.Vb(88,"code"),m.Pc(89,"processing"),m.Ub(),m.Pc(90,"\u3001"),m.Vb(91,"code"),m.Pc(92,"error"),m.Ub(),m.Pc(93,"\u3001"),m.Vb(94,"code"),m.Pc(95,"default"),m.Ub(),m.Pc(96,"\u3001"),m.Vb(97,"code"),m.Pc(98,"warning"),m.Ub(),m.Pc(99," \u6765\u4ee3\u8868\u4e0d\u540c\u7684\u72b6\u6001\u3002"),m.Ub(),m.Wb(),m.Ub(),m.Ub(),m.Ub(),m.Vb(100,"div",23),m.Vb(101,"nz-code-box",30),m.Qb(102,"nz-demo-tag-colorful",25),m.Vb(103,"div",26),m.Pb(),m.Vb(104,"p"),m.Pc(105,"\u6211\u4eec\u6dfb\u52a0\u4e86\u591a\u79cd\u9884\u8bbe\u8272\u5f69\u7684\u6807\u7b7e\u6837\u5f0f\uff0c\u7528\u4f5c\u4e0d\u540c\u573a\u666f\u4f7f\u7528\u3002\u5982\u679c\u9884\u8bbe\u503c\u4e0d\u80fd\u6ee1\u8db3\u4f60\u7684\u9700\u6c42\uff0c\u53ef\u4ee5\u8bbe\u7f6e\u4e3a\u5177\u4f53\u7684\u8272\u503c\u3002"),m.Ub(),m.Wb(),m.Ub(),m.Ub(),m.Vb(106,"nz-code-box",31),m.Qb(107,"nz-demo-tag-checkable",25),m.Vb(108,"div",26),m.Pb(),m.Vb(109,"p"),m.Pc(110,"\u53ef\u901a\u8fc7 "),m.Vb(111,"code"),m.Pc(112,'nzMode="checkable"'),m.Ub(),m.Pc(113," \u5b9e\u73b0\u7c7b\u4f3c Checkbox \u7684\u6548\u679c\uff0c\u70b9\u51fb\u5207\u6362\u9009\u4e2d\u6548\u679c\u3002"),m.Ub(),m.Wb(),m.Ub(),m.Ub(),m.Vb(114,"nz-code-box",32),m.Qb(115,"nz-demo-tag-icon",25),m.Vb(116,"div",26),m.Pb(),m.Vb(117,"p"),m.Pc(118,"\u5728 tag \u7ec4\u4ef6\u5185\u5d4c\u5165 icon\u3002"),m.Ub(),m.Wb(),m.Ub(),m.Ub(),m.Ub(),m.Ub(),m.Vb(119,"section",33),m.Pb(),m.Vb(120,"h2",34),m.Vb(121,"span"),m.Pc(122,"API"),m.Ub(),m.Vb(123,"a",35),m.Pc(124,"#"),m.Ub(),m.Ub(),m.Vb(125,"h3",36),m.Vb(126,"span"),m.Pc(127,"nz-tag"),m.Ub(),m.Vb(128,"label",37),m.Pc(129,"component"),m.Ub(),m.Vb(130,"a",38),m.Pc(131,"#"),m.Ub(),m.Ub(),m.Vb(132,"table"),m.Vb(133,"thead"),m.Vb(134,"tr"),m.Vb(135,"th"),m.Pc(136,"\u53c2\u6570"),m.Ub(),m.Vb(137,"th"),m.Pc(138,"\u8bf4\u660e"),m.Ub(),m.Vb(139,"th"),m.Pc(140,"\u7c7b\u578b"),m.Ub(),m.Vb(141,"th"),m.Pc(142,"\u9ed8\u8ba4\u503c"),m.Ub(),m.Ub(),m.Ub(),m.Vb(143,"tbody"),m.Vb(144,"tr"),m.Vb(145,"td"),m.Vb(146,"code"),m.Pc(147,"[nzMode]"),m.Ub(),m.Ub(),m.Vb(148,"td"),m.Pc(149,"\u8bbe\u5b9a\u6807\u7b7e\u5de5\u4f5c\u7684\u6a21\u5f0f"),m.Ub(),m.Vb(150,"td"),m.Vb(151,"code"),m.Pc(152,"'closeable' | 'default' | 'checkable'"),m.Ub(),m.Ub(),m.Vb(153,"td"),m.Vb(154,"code"),m.Pc(155,"'default'"),m.Ub(),m.Ub(),m.Ub(),m.Vb(156,"tr"),m.Vb(157,"td"),m.Vb(158,"code"),m.Pc(159,"[nzChecked]"),m.Ub(),m.Ub(),m.Vb(160,"td"),m.Pc(161,"\u8bbe\u7f6e\u6807\u7b7e\u7684\u9009\u4e2d\u72b6\u6001\uff0c\u53ef\u53cc\u5411\u7ed1\u5b9a\uff0c\u5728 "),m.Vb(162,"code"),m.Pc(163,'nzMode="checkable"'),m.Ub(),m.Pc(164," \u65f6\u53ef\u7528"),m.Ub(),m.Vb(165,"td"),m.Vb(166,"code"),m.Pc(167,"boolean"),m.Ub(),m.Ub(),m.Vb(168,"td"),m.Vb(169,"code"),m.Pc(170,"false"),m.Ub(),m.Ub(),m.Ub(),m.Vb(171,"tr"),m.Vb(172,"td"),m.Vb(173,"code"),m.Pc(174,"[nzColor]"),m.Ub(),m.Ub(),m.Vb(175,"td"),m.Pc(176,"\u6807\u7b7e\u8272"),m.Ub(),m.Vb(177,"td"),m.Vb(178,"code"),m.Pc(179,"string"),m.Ub(),m.Ub(),m.Vb(180,"td"),m.Pc(181,"-"),m.Ub(),m.Ub(),m.Vb(182,"tr"),m.Vb(183,"td"),m.Vb(184,"code"),m.Pc(185,"(nzOnClose)"),m.Ub(),m.Ub(),m.Vb(186,"td"),m.Pc(187,"\u5173\u95ed\u65f6\u7684\u56de\u8c03\uff0c\u5728 "),m.Vb(188,"code"),m.Pc(189,'nzMode="closable"'),m.Ub(),m.Pc(190," \u65f6\u53ef\u7528"),m.Ub(),m.Vb(191,"td"),m.Vb(192,"code"),m.Pc(193,"EventEmitter<MouseEvent>"),m.Ub(),m.Ub(),m.Vb(194,"td"),m.Pc(195,"-"),m.Ub(),m.Ub(),m.Vb(196,"tr"),m.Vb(197,"td"),m.Vb(198,"code"),m.Pc(199,"(nzCheckedChange)"),m.Ub(),m.Ub(),m.Vb(200,"td"),m.Pc(201,"\u8bbe\u7f6e\u6807\u7b7e\u7684\u9009\u4e2d\u72b6\u6001\u7684\u56de\u8c03\uff0c\u5728 "),m.Vb(202,"code"),m.Pc(203,'nzMode="checkable"'),m.Ub(),m.Pc(204," \u65f6\u53ef\u7528"),m.Ub(),m.Vb(205,"td"),m.Vb(206,"code"),m.Pc(207,"EventEmitter<void>"),m.Ub(),m.Ub(),m.Vb(208,"td"),m.Pc(209,"-"),m.Ub(),m.Ub(),m.Ub(),m.Ub(),m.Wb(),m.Ub(),m.Ub()),2&n&&(m.Ab(1),m.pc("nzOffsetTop",16),m.Ab(1),m.pc("nzAffix",!1),m.Ab(52),m.pc("nzGutter",16),m.Ab(1),m.pc("nzXl",12)("nzSpan",24),m.Ab(1),m.pc("nzId","components-tag-demo-basic")("nzLink","components-tag-demo-basic")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/tag/demo/basic.md"),m.Ab(11),m.pc("nzId","components-tag-demo-control")("nzLink","components-tag-demo-control")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/tag/demo/control.md"),m.Ab(5),m.pc("nzId","components-tag-demo-hot-tags")("nzLink","components-tag-demo-hot-tags")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/tag/demo/hot-tags.md"),m.Ab(5),m.pc("nzId","components-tag-demo-status")("nzLink","components-tag-demo-status")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/tag/demo/status.md"),m.Ab(23),m.pc("nzXl",12)("nzSpan",24),m.Ab(1),m.pc("nzId","components-tag-demo-colorful")("nzLink","components-tag-demo-colorful")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/tag/demo/colorful.md"),m.Ab(5),m.pc("nzId","components-tag-demo-checkable")("nzLink","components-tag-demo-checkable")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/tag/demo/checkable.md"),m.Ab(8),m.pc("nzId","components-tag-demo-icon")("nzLink","components-tag-demo-icon")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/tag/demo/icon.md"))},directives:[p.a,u.a,u.b,z.a,f.d,h.c,h.a,g.a,V,I,M,L,E,W,D],encapsulation:2}),x),X=((A=function(){function n(){t(this,n),this.expanded=!1}return c(n,[{key:"goLink",value:function(n){window&&(window.location.hash=n)}},{key:"expandAllCode",value:function(){var n=this;this.expanded=!this.expanded,this.codeBoxes.forEach(function(e){e.nzExpanded=n.expanded,e.expandCode(n.expanded),e.check()})}}]),n}()).\u0275fac=function(n){return new(n||A)},A.\u0275cmp=m.Ib({type:A,selectors:[["nz-demo-tag"]],viewQuery:function(n,e){var t;1&n&&m.Uc(g.a,!0),2&n&&m.yc(t=m.ec())&&(e.codeBoxes=t)},decls:207,vars:35,consts:[[1,"toc-affix",3,"nzOffsetTop"],["nzShowInkInFixed","",3,"nzAffix","nzClick"],["nzHref","#components-tag-demo-basic","nzTitle","Basic"],["nzHref","#components-tag-demo-colorful","nzTitle","Colorful Tag"],["nzHref","#components-tag-demo-control","nzTitle","Add & Remove Dynamically"],["nzHref","#components-tag-demo-checkable","nzTitle","Checkable"],["nzHref","#components-tag-demo-hot-tags","nzTitle","Hot Tags"],["nzHref","#components-tag-demo-icon","nzTitle","Icon"],["nzHref","#components-tag-demo-status","nzTitle","Status Tag"],["nzHref","#api","nzTitle","API"],[1,"markdown"],[1,"subtitle"],[1,"widget"],["aria-label","Edit this page on Github","href","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/tag/doc/index.en-US.md","target","_blank","rel","noopener noreferrer",1,"edit-button"],["nz-icon","","nzType","edit"],["id","when-to-use"],["onclick","window.location.hash = 'when-to-use'",1,"anchor"],[1,"language-ts"],[1,"token","keyword"],[1,"token","punctuation"],[1,"token","string"],["nz-icon","","nzType","appstore","nz-tooltip","","nzTooltipTitle","Expand All Code",1,"code-box-expand-trigger",3,"click"],["nz-row","",3,"nzGutter"],["nz-col","",3,"nzXl","nzSpan"],["nzTitle","Basic","nzSelector","nz-demo-tag-basic","nzGenerateCommand","ng g ng-zorro-antd:tag-basic <name>","nzComponentName","NzDemoTagBasicComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["demo",""],["intro",""],["nzTitle","Add & Remove Dynamically","nzSelector","nz-demo-tag-control","nzGenerateCommand","ng g ng-zorro-antd:tag-control <name>","nzComponentName","NzDemoTagControlComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","Hot Tags","nzSelector","nz-demo-tag-hot-tags","nzGenerateCommand","ng g ng-zorro-antd:tag-hot-tags <name>","nzComponentName","NzDemoTagHotTagsComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","Status Tag","nzSelector","nz-demo-tag-status","nzGenerateCommand","ng g ng-zorro-antd:tag-status <name>","nzComponentName","NzDemoTagStatusComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","Colorful Tag","nzSelector","nz-demo-tag-colorful","nzGenerateCommand","ng g ng-zorro-antd:tag-colorful <name>","nzComponentName","NzDemoTagColorfulComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","Checkable","nzSelector","nz-demo-tag-checkable","nzGenerateCommand","ng g ng-zorro-antd:tag-checkable <name>","nzComponentName","NzDemoTagCheckableComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","Icon","nzSelector","nz-demo-tag-icon","nzGenerateCommand","ng g ng-zorro-antd:tag-icon <name>","nzComponentName","NzDemoTagIconComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],[1,"markdown","api-container"],["id","api"],["onclick","window.location.hash = 'api'",1,"anchor"],["id","nz-tag"],[1,"api-type-label","component"],["onclick","window.location.hash = 'nz-tag'",1,"anchor"]],template:function(n,e){1&n&&(m.Vb(0,"article"),m.Vb(1,"nz-affix",0),m.Vb(2,"nz-anchor",1),m.dc("nzClick",function(n){return e.goLink(n)}),m.Qb(3,"nz-link",2),m.Qb(4,"nz-link",3),m.Qb(5,"nz-link",4),m.Qb(6,"nz-link",5),m.Qb(7,"nz-link",6),m.Qb(8,"nz-link",7),m.Qb(9,"nz-link",8),m.Qb(10,"nz-link",9),m.Ub(),m.Ub(),m.Vb(11,"section",10),m.Vb(12,"h1"),m.Pc(13,"Tag"),m.Qb(14,"span",11),m.Qb(15,"span",12),m.Vb(16,"a",13),m.Qb(17,"i",14),m.Ub(),m.Ub(),m.Vb(18,"section",10),m.Pb(),m.Vb(19,"p"),m.Pc(20,"Tag for categorizing or markup."),m.Ub(),m.Vb(21,"h2",15),m.Vb(22,"span"),m.Pc(23,"When To Use"),m.Ub(),m.Vb(24,"a",16),m.Pc(25,"#"),m.Ub(),m.Ub(),m.Vb(26,"ul"),m.Vb(27,"li"),m.Vb(28,"p"),m.Pc(29," It can be used to tag by dimension or property."),m.Ub(),m.Ub(),m.Vb(30,"li"),m.Vb(31,"p"),m.Pc(32," When categorizing."),m.Ub(),m.Ub(),m.Ub(),m.Vb(33,"pre",17),m.Vb(34,"code"),m.Vb(35,"span",18),m.Pc(36,"import"),m.Ub(),m.Pc(37," "),m.Vb(38,"span",19),m.Pc(39,"{"),m.Ub(),m.Pc(40," NzTagModule "),m.Vb(41,"span",19),m.Pc(42,"}"),m.Ub(),m.Pc(43," "),m.Vb(44,"span",18),m.Pc(45,"from"),m.Ub(),m.Pc(46," "),m.Vb(47,"span",20),m.Pc(48,"'ng-zorro-antd/tag'"),m.Ub(),m.Vb(49,"span",19),m.Pc(50,";"),m.Ub(),m.Ub(),m.Ub(),m.Wb(),m.Ub(),m.Vb(51,"h2"),m.Vb(52,"span"),m.Pc(53,"Examples"),m.Ub(),m.Vb(54,"i",21),m.dc("click",function(){return e.expandAllCode()}),m.Ub(),m.Ub(),m.Ub(),m.Vb(55,"div",22),m.Vb(56,"div",23),m.Vb(57,"nz-code-box",24),m.Qb(58,"nz-demo-tag-basic",25),m.Vb(59,"div",26),m.Pb(),m.Vb(60,"p"),m.Pc(61,"Usage of basic Tag, and it could be closeable by set "),m.Vb(62,"code"),m.Pc(63,'nzMode="closeable"'),m.Ub(),m.Pc(64," property. Closeable Tag supports "),m.Vb(65,"code"),m.Pc(66,"nzOnClose"),m.Ub(),m.Pc(67," events."),m.Ub(),m.Wb(),m.Ub(),m.Ub(),m.Vb(68,"nz-code-box",27),m.Qb(69,"nz-demo-tag-control",25),m.Vb(70,"div",26),m.Pb(),m.Vb(71,"p"),m.Pc(72,"Generating a set of Tags by array, you can add and remove dynamically."),m.Ub(),m.Wb(),m.Ub(),m.Ub(),m.Vb(73,"nz-code-box",28),m.Qb(74,"nz-demo-tag-hot-tags",25),m.Vb(75,"div",26),m.Pb(),m.Vb(76,"p"),m.Pc(77,"Select your favourite topics."),m.Ub(),m.Wb(),m.Ub(),m.Ub(),m.Vb(78,"nz-code-box",29),m.Qb(79,"nz-demo-tag-status",25),m.Vb(80,"div",26),m.Pb(),m.Vb(81,"p"),m.Pc(82,"We preset five different colors, you can set "),m.Vb(83,"code"),m.Pc(84,"nzColor"),m.Ub(),m.Pc(85," property such as "),m.Vb(86,"code"),m.Pc(87,"success"),m.Ub(),m.Pc(88,","),m.Vb(89,"code"),m.Pc(90,"processing"),m.Ub(),m.Pc(91,","),m.Vb(92,"code"),m.Pc(93,"error"),m.Ub(),m.Pc(94,","),m.Vb(95,"code"),m.Pc(96,"default"),m.Ub(),m.Pc(97," and "),m.Vb(98,"code"),m.Pc(99,"warning"),m.Ub(),m.Pc(100," to indicate specific status."),m.Ub(),m.Wb(),m.Ub(),m.Ub(),m.Ub(),m.Vb(101,"div",23),m.Vb(102,"nz-code-box",30),m.Qb(103,"nz-demo-tag-colorful",25),m.Vb(104,"div",26),m.Pb(),m.Vb(105,"p"),m.Pc(106,"We preset a series of colorful tag style for different situation usage.\nAnd you can always set it to a hex color string for custom color."),m.Ub(),m.Wb(),m.Ub(),m.Ub(),m.Vb(107,"nz-code-box",31),m.Qb(108,"nz-demo-tag-checkable",25),m.Vb(109,"div",26),m.Pb(),m.Vb(110,"p"),m.Vb(111,"code"),m.Pc(112,'nzMode="checkable"'),m.Ub(),m.Pc(113," works like Checkbox, click it to toggle checked state."),m.Ub(),m.Wb(),m.Ub(),m.Ub(),m.Vb(114,"nz-code-box",32),m.Qb(115,"nz-demo-tag-icon",25),m.Vb(116,"div",26),m.Pb(),m.Vb(117,"p"),m.Pc(118,"Tag components can contain an icon."),m.Ub(),m.Wb(),m.Ub(),m.Ub(),m.Ub(),m.Ub(),m.Vb(119,"section",33),m.Pb(),m.Vb(120,"h2",34),m.Vb(121,"span"),m.Pc(122,"API"),m.Ub(),m.Vb(123,"a",35),m.Pc(124,"#"),m.Ub(),m.Ub(),m.Vb(125,"h3",36),m.Vb(126,"span"),m.Pc(127,"nz-tag"),m.Ub(),m.Vb(128,"label",37),m.Pc(129,"component"),m.Ub(),m.Vb(130,"a",38),m.Pc(131,"#"),m.Ub(),m.Ub(),m.Vb(132,"table"),m.Vb(133,"thead"),m.Vb(134,"tr"),m.Vb(135,"th"),m.Pc(136,"Property"),m.Ub(),m.Vb(137,"th"),m.Pc(138,"Description"),m.Ub(),m.Vb(139,"th"),m.Pc(140,"Type"),m.Ub(),m.Vb(141,"th"),m.Pc(142,"Default"),m.Ub(),m.Ub(),m.Ub(),m.Vb(143,"tbody"),m.Vb(144,"tr"),m.Vb(145,"td"),m.Vb(146,"code"),m.Pc(147,"[nzMode]"),m.Ub(),m.Ub(),m.Vb(148,"td"),m.Pc(149,"Mode of tag"),m.Ub(),m.Vb(150,"td"),m.Vb(151,"code"),m.Pc(152,"'closeable' | 'default' | 'checkable'"),m.Ub(),m.Ub(),m.Vb(153,"td"),m.Vb(154,"code"),m.Pc(155,"'default'"),m.Ub(),m.Ub(),m.Ub(),m.Vb(156,"tr"),m.Vb(157,"td"),m.Vb(158,"code"),m.Pc(159,"[nzChecked]"),m.Ub(),m.Ub(),m.Vb(160,"td"),m.Pc(161,"Checked status of Tag, double binding, only works when "),m.Vb(162,"code"),m.Pc(163,'nzMode="checkable"'),m.Ub(),m.Ub(),m.Vb(164,"td"),m.Vb(165,"code"),m.Pc(166,"boolean"),m.Ub(),m.Ub(),m.Vb(167,"td"),m.Vb(168,"code"),m.Pc(169,"false"),m.Ub(),m.Ub(),m.Ub(),m.Vb(170,"tr"),m.Vb(171,"td"),m.Vb(172,"code"),m.Pc(173,"[nzColor]"),m.Ub(),m.Ub(),m.Vb(174,"td"),m.Pc(175,"Color of the Tag"),m.Ub(),m.Vb(176,"td"),m.Vb(177,"code"),m.Pc(178,"string"),m.Ub(),m.Ub(),m.Vb(179,"td"),m.Pc(180,"-"),m.Ub(),m.Ub(),m.Vb(181,"tr"),m.Vb(182,"td"),m.Vb(183,"code"),m.Pc(184,"(nzOnClose)"),m.Ub(),m.Ub(),m.Vb(185,"td"),m.Pc(186,"Callback executed when tag is closed, only works when "),m.Vb(187,"code"),m.Pc(188,'nzMode="closable"'),m.Ub(),m.Ub(),m.Vb(189,"td"),m.Vb(190,"code"),m.Pc(191,"EventEmitter<MouseEvent>"),m.Ub(),m.Ub(),m.Vb(192,"td"),m.Pc(193,"-"),m.Ub(),m.Ub(),m.Vb(194,"tr"),m.Vb(195,"td"),m.Vb(196,"code"),m.Pc(197,"(nzCheckedChange)"),m.Ub(),m.Ub(),m.Vb(198,"td"),m.Pc(199,"Checked status change call back, only works when "),m.Vb(200,"code"),m.Pc(201,'nzMode="checkable"'),m.Ub(),m.Ub(),m.Vb(202,"td"),m.Vb(203,"code"),m.Pc(204,"EventEmitter<boolean>"),m.Ub(),m.Ub(),m.Vb(205,"td"),m.Pc(206,"-"),m.Ub(),m.Ub(),m.Ub(),m.Ub(),m.Wb(),m.Ub(),m.Ub()),2&n&&(m.Ab(1),m.pc("nzOffsetTop",16),m.Ab(1),m.pc("nzAffix",!1),m.Ab(53),m.pc("nzGutter",16),m.Ab(1),m.pc("nzXl",12)("nzSpan",24),m.Ab(1),m.pc("nzId","components-tag-demo-basic")("nzLink","components-tag-demo-basic")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/tag/demo/basic.md"),m.Ab(11),m.pc("nzId","components-tag-demo-control")("nzLink","components-tag-demo-control")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/tag/demo/control.md"),m.Ab(5),m.pc("nzId","components-tag-demo-hot-tags")("nzLink","components-tag-demo-hot-tags")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/tag/demo/hot-tags.md"),m.Ab(5),m.pc("nzId","components-tag-demo-status")("nzLink","components-tag-demo-status")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/tag/demo/status.md"),m.Ab(23),m.pc("nzXl",12)("nzSpan",24),m.Ab(1),m.pc("nzId","components-tag-demo-colorful")("nzLink","components-tag-demo-colorful")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/tag/demo/colorful.md"),m.Ab(5),m.pc("nzId","components-tag-demo-checkable")("nzLink","components-tag-demo-checkable")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/tag/demo/checkable.md"),m.Ab(7),m.pc("nzId","components-tag-demo-icon")("nzLink","components-tag-demo-icon")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/tag/demo/icon.md"))},directives:[p.a,u.a,u.b,z.a,f.d,h.c,h.a,g.a,V,I,M,L,E,W,D],encapsulation:2}),A),B=((H=function n(){t(this,n)}).\u0275mod=m.Mb({type:H}),H.\u0275inj=m.Lb({factory:function(n){return new(n||H)},imports:[[r.a].concat(s,[i.h.forChild([{path:"en",component:X},{path:"zh",component:Z}])])]}),H)}}])}();