function _toConsumableArray(n){return _arrayWithoutHoles(n)||_iterableToArray(n)||_unsupportedIterableToArray(n)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(n,e){if(n){if("string"==typeof n)return _arrayLikeToArray(n,e);var c=Object.prototype.toString.call(n).slice(8,-1);return"Object"===c&&n.constructor&&(c=n.constructor.name),"Map"===c||"Set"===c?Array.from(n):"Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)?_arrayLikeToArray(n,e):void 0}}function _iterableToArray(n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(n))return Array.from(n)}function _arrayWithoutHoles(n){if(Array.isArray(n))return _arrayLikeToArray(n)}function _arrayLikeToArray(n,e){(null==e||e>n.length)&&(e=n.length);for(var c=0,a=new Array(e);c<e;c++)a[c]=n[c];return a}function _classCallCheck(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(n,e){for(var c=0;c<e.length;c++){var a=e[c];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(n,a.key,a)}}function _createClass(n,e,c){return e&&_defineProperties(n.prototype,e),c&&_defineProperties(n,c),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{DWCk:function(n,e,c){"use strict";c.r(e),c.d(e,"NzDemoTagModule",(function(){return G}));var a,t=c("tyNb"),o=c("WGB2"),r=c("tKaq"),i=c("klHs"),l=[r.b,i.e],b=c("rKiv"),d=c("fXoL"),s=c("utH8"),z=c("l83q"),g=c("pk25"),m=c("T+9E"),u=((a=function(){function n(){_classCallCheck(this,n)}return _createClass(n,[{key:"onClose",value:function(){console.log("tag was closed.")}},{key:"preventDefault",value:function(n){n.preventDefault(),n.stopPropagation(),console.log("tag can not be closed.")}}]),n}()).\u0275fac=function(n){return new(n||a)},a.\u0275cmp=d.Nb({type:a,selectors:[["nz-demo-tag-basic"]],decls:9,vars:0,consts:[["href","https://github.com/NG-ZORRO/ng-zorro-antd"],["nzMode","closeable",3,"nzOnClose"]],template:function(n,e){1&n&&(d.ac(0,"nz-tag"),d.Tc(1,"Tag 1"),d.Zb(),d.ac(2,"nz-tag"),d.ac(3,"a",0),d.Tc(4,"Link"),d.Zb(),d.Zb(),d.ac(5,"nz-tag",1),d.jc("nzOnClose",(function(){return e.onClose()})),d.Tc(6,"Tag 2"),d.Zb(),d.ac(7,"nz-tag",1),d.jc("nzOnClose",(function(n){return e.preventDefault(n)})),d.Tc(8,"Prevent Default"),d.Zb())},directives:[r.a],encapsulation:2}),a),p=c("ofXK"),f=c("3Pt+"),T=["inputElement"];function h(n,e){if(1&n){var c=d.cc();d.ac(0,"nz-tag",3),d.jc("nzAfterClose",(function(){d.Ic(c);var n=e.$implicit;return d.nc().handleClose(n)})),d.Tc(1),d.Zb()}if(2&n){var a=e.$implicit,t=e.index,o=d.nc();d.vc("nzMode",0===t?"default":"closeable"),d.Db(1),d.Vc(" ",o.sliceTagName(a)," ")}}function Z(n,e){if(1&n){var c=d.cc();d.ac(0,"nz-tag",4),d.jc("click",(function(){return d.Ic(c),d.nc().showInput()})),d.Vb(1,"i",5),d.Tc(2," New Tag "),d.Zb()}}function k(n,e){if(1&n){var c=d.cc();d.ac(0,"input",6,7),d.jc("ngModelChange",(function(n){return d.Ic(c),d.nc().inputValue=n}))("blur",(function(){return d.Ic(c),d.nc().handleInputConfirm()}))("keydown.enter",(function(){return d.Ic(c),d.nc().handleInputConfirm()})),d.Zb()}if(2&n){var a=d.nc();d.vc("ngModel",a.inputValue)}}var C,v=((C=function(){function n(){_classCallCheck(this,n),this.tags=["Unremovable","Tag 2","Tag 3"],this.inputVisible=!1,this.inputValue=""}return _createClass(n,[{key:"handleClose",value:function(n){this.tags=this.tags.filter((function(e){return e!==n}))}},{key:"sliceTagName",value:function(n){return n.length>20?"".concat(n.slice(0,20),"..."):n}},{key:"showInput",value:function(){var n=this;this.inputVisible=!0,setTimeout((function(){var e;null===(e=n.inputElement)||void 0===e||e.nativeElement.focus()}),10)}},{key:"handleInputConfirm",value:function(){this.inputValue&&-1===this.tags.indexOf(this.inputValue)&&(this.tags=[].concat(_toConsumableArray(this.tags),[this.inputValue])),this.inputValue="",this.inputVisible=!1}}]),n}()).\u0275fac=function(n){return new(n||C)},C.\u0275cmp=d.Nb({type:C,selectors:[["nz-demo-tag-control"]],viewQuery:function(n,e){var c;1&n&&d.Zc(T,!0),2&n&&d.Ec(c=d.kc())&&(e.inputElement=c.first)},decls:3,vars:3,consts:[[3,"nzMode","nzAfterClose",4,"ngFor","ngForOf"],["class","editable-tag","nzNoAnimation","",3,"click",4,"ngIf"],["nz-input","","nzSize","small","type","text","style","width: 78px;",3,"ngModel","ngModelChange","blur","keydown.enter",4,"ngIf"],[3,"nzMode","nzAfterClose"],["nzNoAnimation","",1,"editable-tag",3,"click"],["nz-icon","","nzType","plus"],["nz-input","","nzSize","small","type","text",2,"width","78px",3,"ngModel","ngModelChange","blur","keydown.enter"],["inputElement",""]],template:function(n,e){1&n&&(d.Rc(0,h,2,2,"nz-tag",0),d.Rc(1,Z,3,0,"nz-tag",1),d.Rc(2,k,2,1,"input",2)),2&n&&(d.vc("ngForOf",e.tags),d.Db(1),d.vc("ngIf",!e.inputVisible),d.Db(1),d.vc("ngIf",e.inputVisible))},directives:[p.m,p.n,r.a,i.b,f.b,f.n,f.q],styles:[".editable-tag[_ngcontent-%COMP%] {\n        background: rgb(255, 255, 255);\n        border-style: dashed;\n      }"]}),C);function y(n,e){if(1&n){var c=d.cc();d.ac(0,"nz-tag",1),d.jc("nzCheckedChange",(function(n){d.Ic(c);var a=e.$implicit;return d.nc().handleChange(n,a)})),d.Tc(1),d.Zb()}if(2&n){var a=e.$implicit,t=d.nc();d.vc("nzChecked",t.selectedTags.indexOf(a)>-1),d.Db(1),d.Vc(" ",a," ")}}var w,I,x,D,H,N,O,S=["Movie","Books","Music","Sports"],V=((O=function(){function n(){_classCallCheck(this,n),this.hotTags=S,this.selectedTags=[]}return _createClass(n,[{key:"handleChange",value:function(n,e){n?this.selectedTags.push(e):this.selectedTags=this.selectedTags.filter((function(n){return n!==e})),console.log("You are interested in: ",this.selectedTags)}}]),n}()).\u0275fac=function(n){return new(n||O)},O.\u0275cmp=d.Nb({type:O,selectors:[["nz-demo-tag-hot-tags"]],decls:3,vars:1,consts:[["nzMode","checkable",3,"nzChecked","nzCheckedChange",4,"ngFor","ngForOf"],["nzMode","checkable",3,"nzChecked","nzCheckedChange"]],template:function(n,e){1&n&&(d.ac(0,"strong"),d.Tc(1,"Categories: "),d.Zb(),d.Rc(2,y,2,2,"nz-tag",0)),2&n&&(d.Db(2),d.vc("ngForOf",e.hotTags))},directives:[p.m,r.a],encapsulation:2}),O),A=((N=function n(){_classCallCheck(this,n)}).\u0275fac=function(n){return new(n||N)},N.\u0275cmp=d.Nb({type:N,selectors:[["nz-demo-tag-colorful"]],decls:36,vars:15,consts:[[2,"margin-bottom","16px"],[3,"nzColor"],[2,"margin","16px 0px"]],template:function(n,e){1&n&&(d.ac(0,"h4",0),d.Tc(1,"Presets:"),d.Zb(),d.ac(2,"div"),d.ac(3,"nz-tag",1),d.Tc(4,"magenta"),d.Zb(),d.ac(5,"nz-tag",1),d.Tc(6,"red"),d.Zb(),d.ac(7,"nz-tag",1),d.Tc(8,"volcano"),d.Zb(),d.ac(9,"nz-tag",1),d.Tc(10,"orange"),d.Zb(),d.ac(11,"nz-tag",1),d.Tc(12,"gold"),d.Zb(),d.ac(13,"nz-tag",1),d.Tc(14,"lime"),d.Zb(),d.ac(15,"nz-tag",1),d.Tc(16,"green"),d.Zb(),d.ac(17,"nz-tag",1),d.Tc(18,"cyan"),d.Zb(),d.ac(19,"nz-tag",1),d.Tc(20,"blue"),d.Zb(),d.ac(21,"nz-tag",1),d.Tc(22,"geekblue"),d.Zb(),d.ac(23,"nz-tag",1),d.Tc(24,"purple"),d.Zb(),d.Zb(),d.ac(25,"h4",2),d.Tc(26,"Custom:"),d.Zb(),d.ac(27,"div"),d.ac(28,"nz-tag",1),d.Tc(29,"#f50"),d.Zb(),d.ac(30,"nz-tag",1),d.Tc(31,"#2db7f5"),d.Zb(),d.ac(32,"nz-tag",1),d.Tc(33,"#87d068"),d.Zb(),d.ac(34,"nz-tag",1),d.Tc(35,"#108ee9"),d.Zb(),d.Zb()),2&n&&(d.Db(3),d.vc("nzColor","magenta"),d.Db(2),d.vc("nzColor","red"),d.Db(2),d.vc("nzColor","volcano"),d.Db(2),d.vc("nzColor","orange"),d.Db(2),d.vc("nzColor","gold"),d.Db(2),d.vc("nzColor","lime"),d.Db(2),d.vc("nzColor","green"),d.Db(2),d.vc("nzColor","cyan"),d.Db(2),d.vc("nzColor","blue"),d.Db(2),d.vc("nzColor","geekblue"),d.Db(2),d.vc("nzColor","purple"),d.Db(5),d.vc("nzColor","#f50"),d.Db(2),d.vc("nzColor","#2db7f5"),d.Db(2),d.vc("nzColor","#87d068"),d.Db(2),d.vc("nzColor","#108ee9"))},directives:[r.a],styles:["\n      .ant-tag {\n        margin-bottom: 8px;\n      }\n    "],encapsulation:2}),N),R=((H=function(){function n(){_classCallCheck(this,n)}return _createClass(n,[{key:"checkChange",value:function(n){console.log(n)}}]),n}()).\u0275fac=function(n){return new(n||H)},H.\u0275cmp=d.Nb({type:H,selectors:[["nz-demo-tag-checkable"]],decls:6,vars:3,consts:[["nzMode","checkable",3,"nzChecked","nzCheckedChange"]],template:function(n,e){1&n&&(d.ac(0,"nz-tag",0),d.jc("nzCheckedChange",(function(n){return e.checkChange(n)})),d.Tc(1,"Tag1"),d.Zb(),d.ac(2,"nz-tag",0),d.jc("nzCheckedChange",(function(n){return e.checkChange(n)})),d.Tc(3,"Tag2"),d.Zb(),d.ac(4,"nz-tag",0),d.jc("nzCheckedChange",(function(n){return e.checkChange(n)})),d.Tc(5,"Tag3"),d.Zb()),2&n&&(d.vc("nzChecked",!0),d.Db(2),d.vc("nzChecked",!0),d.Db(2),d.vc("nzChecked",!0))},directives:[r.a],encapsulation:2}),H),_=((D=function n(){_classCallCheck(this,n)}).\u0275fac=function(n){return new(n||D)},D.\u0275cmp=d.Nb({type:D,selectors:[["nz-demo-tag-status"]],decls:10,vars:0,consts:[["nzColor","success"],["nzColor","processing"],["nzColor","error"],["nzColor","default"],["nzColor","warning"]],template:function(n,e){1&n&&(d.ac(0,"nz-tag",0),d.Tc(1,"success"),d.Zb(),d.ac(2,"nz-tag",1),d.Tc(3,"processing"),d.Zb(),d.ac(4,"nz-tag",2),d.Tc(5,"error"),d.Zb(),d.ac(6,"nz-tag",3),d.Tc(7,"default"),d.Zb(),d.ac(8,"nz-tag",4),d.Tc(9,"warning"),d.Zb())},directives:[r.a],encapsulation:2}),D),M=((x=function(){function n(){_classCallCheck(this,n),this.expanded=!1}return _createClass(n,[{key:"goLink",value:function(n){window&&(window.location.hash=n)}},{key:"expandAllCode",value:function(){var n=this;this.expanded=!this.expanded,this.codeBoxes.forEach((function(e){e.nzExpanded=n.expanded,e.expandCode(n.expanded),e.check()}))}}]),n}()).\u0275fac=function(n){return new(n||x)},x.\u0275cmp=d.Nb({type:x,selectors:[["nz-demo-tag"]],viewQuery:function(n,e){var c;1&n&&d.Zc(b.a,!0),2&n&&d.Ec(c=d.kc())&&(e.codeBoxes=c)},decls:204,vars:25,consts:[[1,"toc-affix",3,"nzOffsetTop"],["nzShowInkInFixed","",3,"nzAffix","nzClick"],["nzHref","#components-tag-demo-basic","nzTitle","\u57fa\u672c"],["nzHref","#components-tag-demo-colorful","nzTitle","\u591a\u5f69\u6807\u7b7e"],["nzHref","#components-tag-demo-control","nzTitle","\u52a8\u6001\u6dfb\u52a0\u548c\u5220\u9664"],["nzHref","#components-tag-demo-checkable","nzTitle","\u53ef\u9009\u62e9"],["nzHref","#components-tag-demo-hot-tags","nzTitle","\u70ed\u95e8\u6807\u7b7e"],["nzHref","#components-tag-demo-status","nzTitle","\u9884\u8bbe\u72b6\u6001\u7684\u6807\u7b7e"],["nzHref","#api","nzTitle","API"],[1,"markdown"],[1,"subtitle"],[1,"widget"],["href","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/tag/doc/index.zh-CN.md","target","_blank","rel","noopener noreferrer",1,"edit-button"],["nz-icon","","nzType","edit"],["id","\u4f55\u65f6\u4f7f\u7528"],["onclick","window.location.hash = '\u4f55\u65f6\u4f7f\u7528'",1,"anchor"],[1,"language-ts"],[1,"token","keyword"],[1,"token","punctuation"],[1,"token","string"],["nz-icon","","nzType","appstore","nz-tooltip","","nzTooltipTitle","\u5c55\u5f00\u5168\u90e8\u4ee3\u7801",1,"code-box-expand-trigger",3,"click"],["nz-row","",3,"nzGutter"],["nz-col","",3,"nzXl","nzSpan"],["nzTitle","\u57fa\u672c","nzSelector","nz-demo-tag-basic","nzGenerateCommand","ng g ng-zorro-antd:tag-basic <name>","nzComponentName","NzDemoTagBasicComponent","nzIframeSource","null","nzIframeHeight","null",3,"nzId","nzLink","nzHref"],["demo",""],["intro",""],["nzTitle","\u52a8\u6001\u6dfb\u52a0\u548c\u5220\u9664","nzSelector","nz-demo-tag-control","nzGenerateCommand","ng g ng-zorro-antd:tag-control <name>","nzComponentName","NzDemoTagControlComponent","nzIframeSource","null","nzIframeHeight","null",3,"nzId","nzLink","nzHref"],["nzTitle","\u70ed\u95e8\u6807\u7b7e","nzSelector","nz-demo-tag-hot-tags","nzGenerateCommand","ng g ng-zorro-antd:tag-hot-tags <name>","nzComponentName","NzDemoTagHotTagsComponent","nzIframeSource","null","nzIframeHeight","null",3,"nzId","nzLink","nzHref"],["nzTitle","\u591a\u5f69\u6807\u7b7e","nzSelector","nz-demo-tag-colorful","nzGenerateCommand","ng g ng-zorro-antd:tag-colorful <name>","nzComponentName","NzDemoTagColorfulComponent","nzIframeSource","null","nzIframeHeight","null",3,"nzId","nzLink","nzHref"],["nzTitle","\u53ef\u9009\u62e9","nzSelector","nz-demo-tag-checkable","nzGenerateCommand","ng g ng-zorro-antd:tag-checkable <name>","nzComponentName","NzDemoTagCheckableComponent","nzIframeSource","null","nzIframeHeight","null",3,"nzId","nzLink","nzHref"],["nzTitle","\u9884\u8bbe\u72b6\u6001\u7684\u6807\u7b7e","nzSelector","nz-demo-tag-status","nzGenerateCommand","ng g ng-zorro-antd:tag-status <name>","nzComponentName","NzDemoTagStatusComponent","nzIframeSource","null","nzIframeHeight","null",3,"nzId","nzLink","nzHref"],[1,"markdown","api-container"],["id","api"],["onclick","window.location.hash = 'api'",1,"anchor"],["id","nz-tag"],[1,"api-type-label","component"],["onclick","window.location.hash = 'nz-tag'",1,"anchor"]],template:function(n,e){1&n&&(d.ac(0,"article"),d.ac(1,"nz-affix",0),d.ac(2,"nz-anchor",1),d.jc("nzClick",(function(n){return e.goLink(n)})),d.Vb(3,"nz-link",2),d.Vb(4,"nz-link",3),d.Vb(5,"nz-link",4),d.Vb(6,"nz-link",5),d.Vb(7,"nz-link",6),d.Vb(8,"nz-link",7),d.Vb(9,"nz-link",8),d.Zb(),d.Zb(),d.ac(10,"section",9),d.ac(11,"h1"),d.Tc(12,"Tag"),d.ac(13,"span",10),d.Tc(14,"\u6807\u7b7e"),d.Zb(),d.Vb(15,"span",11),d.ac(16,"a",12),d.Vb(17,"i",13),d.Zb(),d.Zb(),d.ac(18,"section",9),d.Ub(),d.ac(19,"p"),d.Tc(20,"\u8fdb\u884c\u6807\u8bb0\u548c\u5206\u7c7b\u7684\u5c0f\u6807\u7b7e\u3002"),d.Zb(),d.ac(21,"h2",14),d.ac(22,"span"),d.Tc(23,"\u4f55\u65f6\u4f7f\u7528"),d.Zb(),d.ac(24,"a",15),d.Tc(25,"#"),d.Zb(),d.Zb(),d.ac(26,"ul"),d.ac(27,"li"),d.Tc(28,"\u7528\u4e8e\u6807\u8bb0\u4e8b\u7269\u7684\u5c5e\u6027\u548c\u7ef4\u5ea6\u3002"),d.Zb(),d.ac(29,"li"),d.Tc(30,"\u8fdb\u884c\u5206\u7c7b\u3002"),d.Zb(),d.Zb(),d.ac(31,"pre",16),d.ac(32,"code"),d.ac(33,"span",17),d.Tc(34,"import"),d.Zb(),d.Tc(35," "),d.ac(36,"span",18),d.Tc(37,"{"),d.Zb(),d.Tc(38," NzTagModule "),d.ac(39,"span",18),d.Tc(40,"}"),d.Zb(),d.Tc(41," "),d.ac(42,"span",17),d.Tc(43,"from"),d.Zb(),d.Tc(44," "),d.ac(45,"span",19),d.Tc(46,"'ng-zorro-antd/tag'"),d.Zb(),d.ac(47,"span",18),d.Tc(48,";"),d.Zb(),d.Zb(),d.Zb(),d.bc(),d.Zb(),d.ac(49,"h2"),d.ac(50,"span"),d.Tc(51,"\u4ee3\u7801\u6f14\u793a"),d.Zb(),d.ac(52,"i",20),d.jc("click",(function(){return e.expandAllCode()})),d.Zb(),d.Zb(),d.Zb(),d.ac(53,"div",21),d.ac(54,"div",22),d.ac(55,"nz-code-box",23),d.Vb(56,"nz-demo-tag-basic",24),d.ac(57,"div",25),d.Ub(),d.ac(58,"p"),d.Tc(59,"\u57fa\u672c\u6807\u7b7e\u7684\u7528\u6cd5\uff0c\u53ef\u4ee5\u901a\u8fc7\u6dfb\u52a0 "),d.ac(60,"code"),d.Tc(61,'nzMode="closeable"'),d.Zb(),d.Tc(62," \u53d8\u4e3a\u53ef\u5173\u95ed\u6807\u7b7e\u3002\u53ef\u5173\u95ed\u6807\u7b7e\u5177\u6709 "),d.ac(63,"code"),d.Tc(64,"nzOnClose"),d.Zb(),d.Tc(65," \u4e8b\u4ef6\u3002"),d.Zb(),d.bc(),d.Zb(),d.Zb(),d.ac(66,"nz-code-box",26),d.Vb(67,"nz-demo-tag-control",24),d.ac(68,"div",25),d.Ub(),d.ac(69,"p"),d.Tc(70,"\u7528\u6570\u7ec4\u751f\u6210\u4e00\u7ec4\u6807\u7b7e\uff0c\u53ef\u4ee5\u52a8\u6001\u6dfb\u52a0\u548c\u5220\u9664\u3002"),d.Zb(),d.bc(),d.Zb(),d.Zb(),d.ac(71,"nz-code-box",27),d.Vb(72,"nz-demo-tag-hot-tags",24),d.ac(73,"div",25),d.Ub(),d.ac(74,"p"),d.Tc(75,"\u9009\u62e9\u4f60\u611f\u5174\u8da3\u7684\u8bdd\u9898\u3002"),d.Zb(),d.bc(),d.Zb(),d.Zb(),d.Zb(),d.ac(76,"div",22),d.ac(77,"nz-code-box",28),d.Vb(78,"nz-demo-tag-colorful",24),d.ac(79,"div",25),d.Ub(),d.ac(80,"p"),d.Tc(81,"\u6211\u4eec\u6dfb\u52a0\u4e86\u591a\u79cd\u9884\u8bbe\u8272\u5f69\u7684\u6807\u7b7e\u6837\u5f0f\uff0c\u7528\u4f5c\u4e0d\u540c\u573a\u666f\u4f7f\u7528\u3002\u5982\u679c\u9884\u8bbe\u503c\u4e0d\u80fd\u6ee1\u8db3\u4f60\u7684\u9700\u6c42\uff0c\u53ef\u4ee5\u8bbe\u7f6e\u4e3a\u5177\u4f53\u7684\u8272\u503c\u3002"),d.Zb(),d.bc(),d.Zb(),d.Zb(),d.ac(82,"nz-code-box",29),d.Vb(83,"nz-demo-tag-checkable",24),d.ac(84,"div",25),d.Ub(),d.ac(85,"p"),d.Tc(86,"\u53ef\u901a\u8fc7 "),d.ac(87,"code"),d.Tc(88,'nzMode="checkable"'),d.Zb(),d.Tc(89," \u5b9e\u73b0\u7c7b\u4f3c Checkbox \u7684\u6548\u679c\uff0c\u70b9\u51fb\u5207\u6362\u9009\u4e2d\u6548\u679c\u3002"),d.Zb(),d.bc(),d.Zb(),d.Zb(),d.ac(90,"nz-code-box",30),d.Vb(91,"nz-demo-tag-status",24),d.ac(92,"div",25),d.Ub(),d.ac(93,"p"),d.Tc(94,"\u9884\u8bbe\u4e94\u79cd\u72b6\u6001\u989c\u8272\uff0c\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e "),d.ac(95,"code"),d.Tc(96,"nzColor"),d.Zb(),d.Tc(97," \u4e3a "),d.ac(98,"code"),d.Tc(99,"success"),d.Zb(),d.Tc(100,"\u3001 "),d.ac(101,"code"),d.Tc(102,"processing"),d.Zb(),d.Tc(103,"\u3001"),d.ac(104,"code"),d.Tc(105,"error"),d.Zb(),d.Tc(106,"\u3001"),d.ac(107,"code"),d.Tc(108,"default"),d.Zb(),d.Tc(109,"\u3001"),d.ac(110,"code"),d.Tc(111,"warning"),d.Zb(),d.Tc(112," \u6765\u4ee3\u8868\u4e0d\u540c\u7684\u72b6\u6001\u3002"),d.Zb(),d.bc(),d.Zb(),d.Zb(),d.Zb(),d.Zb(),d.ac(113,"section",31),d.Ub(),d.ac(114,"h2",32),d.ac(115,"span"),d.Tc(116,"API"),d.Zb(),d.ac(117,"a",33),d.Tc(118,"#"),d.Zb(),d.Zb(),d.ac(119,"h3",34),d.ac(120,"span"),d.Tc(121,"nz-tag"),d.Zb(),d.ac(122,"label",35),d.Tc(123,"component"),d.Zb(),d.ac(124,"a",36),d.Tc(125,"#"),d.Zb(),d.Zb(),d.ac(126,"table"),d.ac(127,"thead"),d.ac(128,"tr"),d.ac(129,"th"),d.Tc(130,"\u53c2\u6570"),d.Zb(),d.ac(131,"th"),d.Tc(132,"\u8bf4\u660e"),d.Zb(),d.ac(133,"th"),d.Tc(134,"\u7c7b\u578b"),d.Zb(),d.ac(135,"th"),d.Tc(136,"\u9ed8\u8ba4\u503c"),d.Zb(),d.Zb(),d.Zb(),d.ac(137,"tbody"),d.ac(138,"tr"),d.ac(139,"td"),d.ac(140,"code"),d.Tc(141,"[nzMode]"),d.Zb(),d.Zb(),d.ac(142,"td"),d.Tc(143,"\u8bbe\u5b9a\u6807\u7b7e\u5de5\u4f5c\u7684\u6a21\u5f0f"),d.Zb(),d.ac(144,"td"),d.ac(145,"code"),d.Tc(146,"'closeable' | 'default' | 'checkable'"),d.Zb(),d.Zb(),d.ac(147,"td"),d.ac(148,"code"),d.Tc(149,"'default'"),d.Zb(),d.Zb(),d.Zb(),d.ac(150,"tr"),d.ac(151,"td"),d.ac(152,"code"),d.Tc(153,"[nzChecked]"),d.Zb(),d.Zb(),d.ac(154,"td"),d.Tc(155,"\u8bbe\u7f6e\u6807\u7b7e\u7684\u9009\u4e2d\u72b6\u6001\uff0c\u53ef\u53cc\u5411\u7ed1\u5b9a\uff0c\u5728 "),d.ac(156,"code"),d.Tc(157,'nzMode="checkable"'),d.Zb(),d.Tc(158," \u65f6\u53ef\u7528"),d.Zb(),d.ac(159,"td"),d.ac(160,"code"),d.Tc(161,"boolean"),d.Zb(),d.Zb(),d.ac(162,"td"),d.ac(163,"code"),d.Tc(164,"false"),d.Zb(),d.Zb(),d.Zb(),d.ac(165,"tr"),d.ac(166,"td"),d.ac(167,"code"),d.Tc(168,"[nzColor]"),d.Zb(),d.Zb(),d.ac(169,"td"),d.Tc(170,"\u6807\u7b7e\u8272"),d.Zb(),d.ac(171,"td"),d.ac(172,"code"),d.Tc(173,"string"),d.Zb(),d.Zb(),d.ac(174,"td"),d.Tc(175,"-"),d.Zb(),d.Zb(),d.ac(176,"tr"),d.ac(177,"td"),d.ac(178,"code"),d.Tc(179,"(nzOnClose)"),d.Zb(),d.Zb(),d.ac(180,"td"),d.Tc(181,"\u5173\u95ed\u65f6\u7684\u56de\u8c03\uff0c\u5728 "),d.ac(182,"code"),d.Tc(183,'nzMode="closable"'),d.Zb(),d.Tc(184," \u65f6\u53ef\u7528"),d.Zb(),d.ac(185,"td"),d.ac(186,"code"),d.Tc(187,"EventEmitter<MouseEvent>"),d.Zb(),d.Zb(),d.ac(188,"td"),d.Tc(189,"-"),d.Zb(),d.Zb(),d.ac(190,"tr"),d.ac(191,"td"),d.ac(192,"code"),d.Tc(193,"(nzCheckedChange)"),d.Zb(),d.Zb(),d.ac(194,"td"),d.Tc(195,"\u8bbe\u7f6e\u6807\u7b7e\u7684\u9009\u4e2d\u72b6\u6001\u7684\u56de\u8c03\uff0c\u5728 "),d.ac(196,"code"),d.Tc(197,'nzMode="checkable"'),d.Zb(),d.Tc(198," \u65f6\u53ef\u7528"),d.Zb(),d.ac(199,"td"),d.ac(200,"code"),d.Tc(201,"EventEmitter<void>"),d.Zb(),d.Zb(),d.ac(202,"td"),d.Tc(203,"-"),d.Zb(),d.Zb(),d.Zb(),d.Zb(),d.bc(),d.Zb(),d.Zb()),2&n&&(d.Db(1),d.vc("nzOffsetTop",16),d.Db(1),d.vc("nzAffix",!1),d.Db(51),d.vc("nzGutter",16),d.Db(1),d.vc("nzXl",12)("nzSpan",24),d.Db(1),d.vc("nzId","components-tag-demo-basic")("nzLink","components-tag-demo-basic")("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/tag/demo/basic.md"),d.Db(11),d.vc("nzId","components-tag-demo-control")("nzLink","components-tag-demo-control")("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/tag/demo/control.md"),d.Db(5),d.vc("nzId","components-tag-demo-hot-tags")("nzLink","components-tag-demo-hot-tags")("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/tag/demo/hot-tags.md"),d.Db(5),d.vc("nzXl",12)("nzSpan",24),d.Db(1),d.vc("nzId","components-tag-demo-colorful")("nzLink","components-tag-demo-colorful")("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/tag/demo/colorful.md"),d.Db(5),d.vc("nzId","components-tag-demo-checkable")("nzLink","components-tag-demo-checkable")("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/tag/demo/checkable.md"),d.Db(8),d.vc("nzId","components-tag-demo-status")("nzLink","components-tag-demo-status")("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/tag/demo/status.md"))},directives:[s.a,z.a,z.b,g.d,m.c,m.a,b.a,u,v,V,A,R,_],encapsulation:2}),x),L=((I=function(){function n(){_classCallCheck(this,n),this.expanded=!1}return _createClass(n,[{key:"goLink",value:function(n){window&&(window.location.hash=n)}},{key:"expandAllCode",value:function(){var n=this;this.expanded=!this.expanded,this.codeBoxes.forEach((function(e){e.nzExpanded=n.expanded,e.expandCode(n.expanded),e.check()}))}}]),n}()).\u0275fac=function(n){return new(n||I)},I.\u0275cmp=d.Nb({type:I,selectors:[["nz-demo-tag"]],viewQuery:function(n,e){var c;1&n&&d.Zc(b.a,!0),2&n&&d.Ec(c=d.kc())&&(e.codeBoxes=c)},decls:201,vars:25,consts:[[1,"toc-affix",3,"nzOffsetTop"],["nzShowInkInFixed","",3,"nzAffix","nzClick"],["nzHref","#components-tag-demo-basic","nzTitle","Basic"],["nzHref","#components-tag-demo-colorful","nzTitle","Colorful Tag"],["nzHref","#components-tag-demo-control","nzTitle","Add & Remove Dynamically"],["nzHref","#components-tag-demo-checkable","nzTitle","Checkable"],["nzHref","#components-tag-demo-hot-tags","nzTitle","Hot Tags"],["nzHref","#components-tag-demo-status","nzTitle","Status Tag"],["nzHref","#api","nzTitle","API"],[1,"markdown"],[1,"subtitle"],[1,"widget"],["href","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/tag/doc/index.en-US.md","target","_blank","rel","noopener noreferrer",1,"edit-button"],["nz-icon","","nzType","edit"],["id","when-to-use"],["onclick","window.location.hash = 'when-to-use'",1,"anchor"],[1,"language-ts"],[1,"token","keyword"],[1,"token","punctuation"],[1,"token","string"],["nz-icon","","nzType","appstore","nz-tooltip","","nzTooltipTitle","Expand All Code",1,"code-box-expand-trigger",3,"click"],["nz-row","",3,"nzGutter"],["nz-col","",3,"nzXl","nzSpan"],["nzTitle","Basic","nzSelector","nz-demo-tag-basic","nzGenerateCommand","ng g ng-zorro-antd:tag-basic <name>","nzComponentName","NzDemoTagBasicComponent","nzIframeSource","null","nzIframeHeight","null",3,"nzId","nzLink","nzHref"],["demo",""],["intro",""],["nzTitle","Add & Remove Dynamically","nzSelector","nz-demo-tag-control","nzGenerateCommand","ng g ng-zorro-antd:tag-control <name>","nzComponentName","NzDemoTagControlComponent","nzIframeSource","null","nzIframeHeight","null",3,"nzId","nzLink","nzHref"],["nzTitle","Hot Tags","nzSelector","nz-demo-tag-hot-tags","nzGenerateCommand","ng g ng-zorro-antd:tag-hot-tags <name>","nzComponentName","NzDemoTagHotTagsComponent","nzIframeSource","null","nzIframeHeight","null",3,"nzId","nzLink","nzHref"],["nzTitle","Colorful Tag","nzSelector","nz-demo-tag-colorful","nzGenerateCommand","ng g ng-zorro-antd:tag-colorful <name>","nzComponentName","NzDemoTagColorfulComponent","nzIframeSource","null","nzIframeHeight","null",3,"nzId","nzLink","nzHref"],["nzTitle","Checkable","nzSelector","nz-demo-tag-checkable","nzGenerateCommand","ng g ng-zorro-antd:tag-checkable <name>","nzComponentName","NzDemoTagCheckableComponent","nzIframeSource","null","nzIframeHeight","null",3,"nzId","nzLink","nzHref"],["nzTitle","Status Tag","nzSelector","nz-demo-tag-status","nzGenerateCommand","ng g ng-zorro-antd:tag-status <name>","nzComponentName","NzDemoTagStatusComponent","nzIframeSource","null","nzIframeHeight","null",3,"nzId","nzLink","nzHref"],[1,"markdown","api-container"],["id","api"],["onclick","window.location.hash = 'api'",1,"anchor"],["id","nz-tag"],[1,"api-type-label","component"],["onclick","window.location.hash = 'nz-tag'",1,"anchor"]],template:function(n,e){1&n&&(d.ac(0,"article"),d.ac(1,"nz-affix",0),d.ac(2,"nz-anchor",1),d.jc("nzClick",(function(n){return e.goLink(n)})),d.Vb(3,"nz-link",2),d.Vb(4,"nz-link",3),d.Vb(5,"nz-link",4),d.Vb(6,"nz-link",5),d.Vb(7,"nz-link",6),d.Vb(8,"nz-link",7),d.Vb(9,"nz-link",8),d.Zb(),d.Zb(),d.ac(10,"section",9),d.ac(11,"h1"),d.Tc(12,"Tag"),d.Vb(13,"span",10),d.Vb(14,"span",11),d.ac(15,"a",12),d.Vb(16,"i",13),d.Zb(),d.Zb(),d.ac(17,"section",9),d.Ub(),d.ac(18,"p"),d.Tc(19,"Tag for categorizing or markup."),d.Zb(),d.ac(20,"h2",14),d.ac(21,"span"),d.Tc(22,"When To Use"),d.Zb(),d.ac(23,"a",15),d.Tc(24,"#"),d.Zb(),d.Zb(),d.ac(25,"ul"),d.ac(26,"li"),d.ac(27,"p"),d.Tc(28,"It can be used to tag by dimension or property."),d.Zb(),d.Zb(),d.ac(29,"li"),d.ac(30,"p"),d.Tc(31,"When categorizing."),d.Zb(),d.Zb(),d.Zb(),d.ac(32,"pre",16),d.ac(33,"code"),d.ac(34,"span",17),d.Tc(35,"import"),d.Zb(),d.Tc(36," "),d.ac(37,"span",18),d.Tc(38,"{"),d.Zb(),d.Tc(39," NzTagModule "),d.ac(40,"span",18),d.Tc(41,"}"),d.Zb(),d.Tc(42," "),d.ac(43,"span",17),d.Tc(44,"from"),d.Zb(),d.Tc(45," "),d.ac(46,"span",19),d.Tc(47,"'ng-zorro-antd/tag'"),d.Zb(),d.ac(48,"span",18),d.Tc(49,";"),d.Zb(),d.Zb(),d.Zb(),d.bc(),d.Zb(),d.ac(50,"h2"),d.ac(51,"span"),d.Tc(52,"Examples"),d.Zb(),d.ac(53,"i",20),d.jc("click",(function(){return e.expandAllCode()})),d.Zb(),d.Zb(),d.Zb(),d.ac(54,"div",21),d.ac(55,"div",22),d.ac(56,"nz-code-box",23),d.Vb(57,"nz-demo-tag-basic",24),d.ac(58,"div",25),d.Ub(),d.ac(59,"p"),d.Tc(60,"Usage of basic Tag, and it could be closeable by set "),d.ac(61,"code"),d.Tc(62,'nzMode="closeable"'),d.Zb(),d.Tc(63," property. Closeable Tag supports "),d.ac(64,"code"),d.Tc(65,"nzOnClose"),d.Zb(),d.Tc(66," events."),d.Zb(),d.bc(),d.Zb(),d.Zb(),d.ac(67,"nz-code-box",26),d.Vb(68,"nz-demo-tag-control",24),d.ac(69,"div",25),d.Ub(),d.ac(70,"p"),d.Tc(71,"Generating a set of Tags by array, you can add and remove dynamically."),d.Zb(),d.bc(),d.Zb(),d.Zb(),d.ac(72,"nz-code-box",27),d.Vb(73,"nz-demo-tag-hot-tags",24),d.ac(74,"div",25),d.Ub(),d.ac(75,"p"),d.Tc(76,"Select your favourite topics."),d.Zb(),d.bc(),d.Zb(),d.Zb(),d.Zb(),d.ac(77,"div",22),d.ac(78,"nz-code-box",28),d.Vb(79,"nz-demo-tag-colorful",24),d.ac(80,"div",25),d.Ub(),d.ac(81,"p"),d.Tc(82,"We preset a series of colorful tag style for different situation usage.\nAnd you can always set it to a hex color string for custom color."),d.Zb(),d.bc(),d.Zb(),d.Zb(),d.ac(83,"nz-code-box",29),d.Vb(84,"nz-demo-tag-checkable",24),d.ac(85,"div",25),d.Ub(),d.ac(86,"p"),d.ac(87,"code"),d.Tc(88,'nzMode="checkable"'),d.Zb(),d.Tc(89," works like Checkbox, click it to toggle checked state."),d.Zb(),d.bc(),d.Zb(),d.Zb(),d.ac(90,"nz-code-box",30),d.Vb(91,"nz-demo-tag-status",24),d.ac(92,"div",25),d.Ub(),d.ac(93,"p"),d.Tc(94,"We preset five different colors, you can set "),d.ac(95,"code"),d.Tc(96,"nzColor"),d.Zb(),d.Tc(97," property such as "),d.ac(98,"code"),d.Tc(99,"success"),d.Zb(),d.Tc(100,","),d.ac(101,"code"),d.Tc(102,"processing"),d.Zb(),d.Tc(103,","),d.ac(104,"code"),d.Tc(105,"error"),d.Zb(),d.Tc(106,","),d.ac(107,"code"),d.Tc(108,"default"),d.Zb(),d.Tc(109," and "),d.ac(110,"code"),d.Tc(111,"warning"),d.Zb(),d.Tc(112," to indicate specific status."),d.Zb(),d.bc(),d.Zb(),d.Zb(),d.Zb(),d.Zb(),d.ac(113,"section",31),d.Ub(),d.ac(114,"h2",32),d.ac(115,"span"),d.Tc(116,"API"),d.Zb(),d.ac(117,"a",33),d.Tc(118,"#"),d.Zb(),d.Zb(),d.ac(119,"h3",34),d.ac(120,"span"),d.Tc(121,"nz-tag"),d.Zb(),d.ac(122,"label",35),d.Tc(123,"component"),d.Zb(),d.ac(124,"a",36),d.Tc(125,"#"),d.Zb(),d.Zb(),d.ac(126,"table"),d.ac(127,"thead"),d.ac(128,"tr"),d.ac(129,"th"),d.Tc(130,"Property"),d.Zb(),d.ac(131,"th"),d.Tc(132,"Description"),d.Zb(),d.ac(133,"th"),d.Tc(134,"Type"),d.Zb(),d.ac(135,"th"),d.Tc(136,"Default"),d.Zb(),d.Zb(),d.Zb(),d.ac(137,"tbody"),d.ac(138,"tr"),d.ac(139,"td"),d.ac(140,"code"),d.Tc(141,"[nzMode]"),d.Zb(),d.Zb(),d.ac(142,"td"),d.Tc(143,"Mode of tag"),d.Zb(),d.ac(144,"td"),d.ac(145,"code"),d.Tc(146,"'closeable' | 'default' | 'checkable'"),d.Zb(),d.Zb(),d.ac(147,"td"),d.ac(148,"code"),d.Tc(149,"'default'"),d.Zb(),d.Zb(),d.Zb(),d.ac(150,"tr"),d.ac(151,"td"),d.ac(152,"code"),d.Tc(153,"[nzChecked]"),d.Zb(),d.Zb(),d.ac(154,"td"),d.Tc(155,"Checked status of Tag, double binding, only works when "),d.ac(156,"code"),d.Tc(157,'nzMode="checkable"'),d.Zb(),d.Zb(),d.ac(158,"td"),d.ac(159,"code"),d.Tc(160,"boolean"),d.Zb(),d.Zb(),d.ac(161,"td"),d.ac(162,"code"),d.Tc(163,"false"),d.Zb(),d.Zb(),d.Zb(),d.ac(164,"tr"),d.ac(165,"td"),d.ac(166,"code"),d.Tc(167,"[nzColor]"),d.Zb(),d.Zb(),d.ac(168,"td"),d.Tc(169,"Color of the Tag"),d.Zb(),d.ac(170,"td"),d.ac(171,"code"),d.Tc(172,"string"),d.Zb(),d.Zb(),d.ac(173,"td"),d.Tc(174,"-"),d.Zb(),d.Zb(),d.ac(175,"tr"),d.ac(176,"td"),d.ac(177,"code"),d.Tc(178,"(nzOnClose)"),d.Zb(),d.Zb(),d.ac(179,"td"),d.Tc(180,"Callback executed when tag is closed, only works when "),d.ac(181,"code"),d.Tc(182,'nzMode="closable"'),d.Zb(),d.Zb(),d.ac(183,"td"),d.ac(184,"code"),d.Tc(185,"EventEmitter<MouseEvent>"),d.Zb(),d.Zb(),d.ac(186,"td"),d.Tc(187,"-"),d.Zb(),d.Zb(),d.ac(188,"tr"),d.ac(189,"td"),d.ac(190,"code"),d.Tc(191,"(nzCheckedChange)"),d.Zb(),d.Zb(),d.ac(192,"td"),d.Tc(193,"Checked status change call back, only works when "),d.ac(194,"code"),d.Tc(195,'nzMode="checkable"'),d.Zb(),d.Zb(),d.ac(196,"td"),d.ac(197,"code"),d.Tc(198,"EventEmitter<boolean>"),d.Zb(),d.Zb(),d.ac(199,"td"),d.Tc(200,"-"),d.Zb(),d.Zb(),d.Zb(),d.Zb(),d.bc(),d.Zb(),d.Zb()),2&n&&(d.Db(1),d.vc("nzOffsetTop",16),d.Db(1),d.vc("nzAffix",!1),d.Db(52),d.vc("nzGutter",16),d.Db(1),d.vc("nzXl",12)("nzSpan",24),d.Db(1),d.vc("nzId","components-tag-demo-basic")("nzLink","components-tag-demo-basic")("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/tag/demo/basic.md"),d.Db(11),d.vc("nzId","components-tag-demo-control")("nzLink","components-tag-demo-control")("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/tag/demo/control.md"),d.Db(5),d.vc("nzId","components-tag-demo-hot-tags")("nzLink","components-tag-demo-hot-tags")("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/tag/demo/hot-tags.md"),d.Db(5),d.vc("nzXl",12)("nzSpan",24),d.Db(1),d.vc("nzId","components-tag-demo-colorful")("nzLink","components-tag-demo-colorful")("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/tag/demo/colorful.md"),d.Db(5),d.vc("nzId","components-tag-demo-checkable")("nzLink","components-tag-demo-checkable")("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/tag/demo/checkable.md"),d.Db(7),d.vc("nzId","components-tag-demo-status")("nzLink","components-tag-demo-status")("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/tag/demo/status.md"))},directives:[s.a,z.a,z.b,g.d,m.c,m.a,b.a,u,v,V,A,R,_],encapsulation:2}),I),G=((w=function n(){_classCallCheck(this,n)}).\u0275mod=d.Rb({type:w}),w.\u0275inj=d.Qb({factory:function(n){return new(n||w)},imports:[[o.a].concat(l,[t.g.forChild([{path:"en",component:L},{path:"zh",component:M}])])]}),w)}}]);