function _defineProperties(n,e){for(var c=0;c<e.length;c++){var t=e[c];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}function _createClass(n,e,c){return e&&_defineProperties(n.prototype,e),c&&_defineProperties(n,c),n}function _classCallCheck(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{"TB/v":function(n,e,c){"use strict";c.r(e),c.d(e,"NzDemoInputNumberModule",(function(){return P}));var t,a,o,i,b,r,d,u,m,s=c("tyNb"),l=c("WGB2"),z=c("nJzI"),p=c("TZWX"),Z=[z.b,p.c],T=c("rKiv"),g=c("fXoL"),h=c("utH8"),f=c("l83q"),v=c("uLhK"),k=c("pk25"),C=c("T+9E"),I=c("3Pt+"),M=((t=function n(){_classCallCheck(this,n),this.demoValue=3}).\u0275fac=function(n){return new(n||t)},t.\u0275cmp=g.Nb({type:t,selectors:[["nz-demo-input-number-basic"]],decls:1,vars:4,consts:[[3,"ngModel","nzMin","nzMax","nzStep","ngModelChange"]],template:function(n,e){1&n&&(g.ac(0,"nz-input-number",0),g.jc("ngModelChange",(function(n){return e.demoValue=n})),g.Zb()),2&n&&g.vc("ngModel",e.demoValue)("nzMin",1)("nzMax",10)("nzStep",1)},directives:[z.a,I.o,I.r],encapsulation:2}),t),x=c("vdzw"),w=((m=function(){function n(){_classCallCheck(this,n),this.demoValue=3,this.isDisabled=!1}return _createClass(n,[{key:"toggleDisabled",value:function(){this.isDisabled=!this.isDisabled}}]),n}()).\u0275fac=function(n){return new(n||m)},m.\u0275cmp=g.Nb({type:m,selectors:[["nz-demo-input-number-disabled"]],decls:5,vars:6,consts:[[3,"ngModel","nzMin","nzMax","nzStep","nzDisabled","ngModelChange"],[2,"margin-top","20px"],["nz-button","",3,"nzType","click"]],template:function(n,e){1&n&&(g.ac(0,"nz-input-number",0),g.jc("ngModelChange",(function(n){return e.demoValue=n})),g.Zb(),g.ac(1,"div",1),g.ac(2,"button",2),g.jc("click",(function(){return e.toggleDisabled()})),g.ac(3,"span"),g.Tc(4,"Toggle Disabled"),g.Zb(),g.Zb(),g.Zb()),2&n&&(g.vc("ngModel",e.demoValue)("nzMin",1)("nzMax",10)("nzStep",1)("nzDisabled",e.isDisabled),g.Db(2),g.vc("nzType","primary"))},directives:[z.a,I.o,I.r,p.a,x.a,v.a],encapsulation:2}),m),N=((u=function n(){_classCallCheck(this,n),this.demoValue=100,this.formatterPercent=function(n){return n+" %"},this.parserPercent=function(n){return n.replace(" %","")},this.formatterDollar=function(n){return"$ "+n},this.parserDollar=function(n){return n.replace("$ ","")}}).\u0275fac=function(n){return new(n||u)},u.\u0275cmp=g.Nb({type:u,selectors:[["nz-demo-input-number-formatter"]],decls:2,vars:12,consts:[[3,"ngModel","nzMin","nzMax","nzStep","nzFormatter","nzParser","ngModelChange"]],template:function(n,e){1&n&&(g.ac(0,"nz-input-number",0),g.jc("ngModelChange",(function(n){return e.demoValue=n})),g.Zb(),g.ac(1,"nz-input-number",0),g.jc("ngModelChange",(function(n){return e.demoValue=n})),g.Zb()),2&n&&(g.vc("ngModel",e.demoValue)("nzMin",1)("nzMax",100)("nzStep",1)("nzFormatter",e.formatterDollar)("nzParser",e.parserDollar),g.Db(1),g.vc("ngModel",e.demoValue)("nzMin",1)("nzMax",100)("nzStep",1)("nzFormatter",e.formatterPercent)("nzParser",e.parserPercent))},directives:[z.a,I.o,I.r],styles:["nz-input-number[_ngcontent-%COMP%] {\n        margin-right: 8px;\n      }"]}),u),H=((d=function n(){_classCallCheck(this,n),this.demoValue=3}).\u0275fac=function(n){return new(n||d)},d.\u0275cmp=g.Nb({type:d,selectors:[["nz-demo-input-number-size"]],decls:3,vars:14,consts:[[3,"ngModel","nzSize","nzMin","nzMax","nzStep","ngModelChange"],[3,"ngModel","nzMin","nzMax","nzStep","ngModelChange"]],template:function(n,e){1&n&&(g.ac(0,"nz-input-number",0),g.jc("ngModelChange",(function(n){return e.demoValue=n})),g.Zb(),g.ac(1,"nz-input-number",1),g.jc("ngModelChange",(function(n){return e.demoValue=n})),g.Zb(),g.ac(2,"nz-input-number",0),g.jc("ngModelChange",(function(n){return e.demoValue=n})),g.Zb()),2&n&&(g.vc("ngModel",e.demoValue)("nzSize","large")("nzMin",1)("nzMax",10)("nzStep",1),g.Db(1),g.vc("ngModel",e.demoValue)("nzMin",1)("nzMax",10)("nzStep",1),g.Db(1),g.vc("ngModel",e.demoValue)("nzSize","small")("nzMin",1)("nzMax",10)("nzStep",1))},directives:[z.a,I.o,I.r],styles:["nz-input-number[_ngcontent-%COMP%] {\n        margin-right: 8px;\n      }"]}),d),D=((r=function n(){_classCallCheck(this,n),this.demoValue=0}).\u0275fac=function(n){return new(n||r)},r.\u0275cmp=g.Nb({type:r,selectors:[["nz-demo-input-number-digit"]],decls:1,vars:5,consts:[[3,"ngModel","nzMin","nzMax","nzStep","nzPlaceHolder","ngModelChange"]],template:function(n,e){1&n&&(g.ac(0,"nz-input-number",0),g.jc("ngModelChange",(function(n){return e.demoValue=n})),g.Zb()),2&n&&g.vc("ngModel",e.demoValue)("nzMin",1)("nzMax",10)("nzStep",.1)("nzPlaceHolder","Digital")},directives:[z.a,I.o,I.r],encapsulation:2}),r),S=((b=function(){function n(){_classCallCheck(this,n),this.toFixedValue=2,this.cutValue=2,this.customFnValue=2,this.precision=2}return _createClass(n,[{key:"customPrecisionFn",value:function(n,e){return+Number(n).toFixed(e+1)}}]),n}()).\u0275fac=function(n){return new(n||b)},b.\u0275cmp=g.Nb({type:b,selectors:[["nz-demo-input-number-precision"]],decls:3,vars:7,consts:[["nzPlaceHolder","toFixed",3,"ngModel","nzPrecision","ngModelChange"],["nzPrecisionMode","cut","nzPlaceHolder","cut off",3,"ngModel","nzPrecision","ngModelChange"],["nzPlaceHolder","cut off",3,"ngModel","nzPrecision","nzPrecisionMode","ngModelChange"]],template:function(n,e){1&n&&(g.ac(0,"nz-input-number",0),g.jc("ngModelChange",(function(n){return e.toFixedValue=n})),g.Zb(),g.ac(1,"nz-input-number",1),g.jc("ngModelChange",(function(n){return e.cutValue=n})),g.Zb(),g.ac(2,"nz-input-number",2),g.jc("ngModelChange",(function(n){return e.customFnValue=n})),g.Zb()),2&n&&(g.vc("ngModel",e.toFixedValue)("nzPrecision",e.precision),g.Db(1),g.vc("ngModel",e.cutValue)("nzPrecision",e.precision),g.Db(1),g.vc("ngModel",e.customFnValue)("nzPrecision",e.precision)("nzPrecisionMode",e.customPrecisionFn))},directives:[z.a,I.o,I.r],styles:["nz-input-number[_ngcontent-%COMP%] {\n        margin-right: 8px;\n      }"]}),b),V=((i=function(){function n(){_classCallCheck(this,n),this.expanded=!1}return _createClass(n,[{key:"goLink",value:function(n){window&&(window.location.hash=n)}},{key:"expandAllCode",value:function(){var n=this;this.expanded=!this.expanded,this.codeBoxes.forEach((function(e){e.nzExpanded=n.expanded,e.expandCode(n.expanded),e.check()}))}}]),n}()).\u0275fac=function(n){return new(n||i)},i.\u0275cmp=g.Nb({type:i,selectors:[["nz-demo-input-number"]],viewQuery:function(n,e){var c;1&n&&g.Zc(T.a,!0),2&n&&g.Ec(c=g.kc())&&(e.codeBoxes=c)},decls:364,vars:31,consts:[[1,"toc-affix",3,"nzOffsetTop"],["nzShowInkInFixed","",3,"nzAffix","nzClick"],["nzHref","#components-input-number-demo-basic","nzTitle","\u57fa\u672c"],["nzHref","#components-input-number-demo-size","nzTitle","\u4e09\u79cd\u5927\u5c0f"],["nzHref","#components-input-number-demo-disabled","nzTitle","\u4e0d\u53ef\u7528"],["nzHref","#components-input-number-demo-digit","nzTitle","\u5c0f\u6570"],["nzHref","#components-input-number-demo-formatter","nzTitle","\u683c\u5f0f\u5316\u5c55\u793a"],["nzHref","#components-input-number-demo-precision","nzTitle","\u7cbe\u5ea6"],["nzHref","#api","nzTitle","API"],[1,"markdown"],[1,"subtitle"],[1,"widget"],["href","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/input-number/doc/index.zh-CN.md","target","_blank","rel","noopener noreferrer",1,"edit-button"],["nz-icon","","nzType","edit"],["id","\u4f55\u65f6\u4f7f\u7528"],["onclick","window.location.hash = '\u4f55\u65f6\u4f7f\u7528'",1,"anchor"],[1,"language-ts"],[1,"token","keyword"],[1,"token","punctuation"],[1,"token","string"],["nz-icon","","nzType","appstore","nz-tooltip","","nzTooltipTitle","\u5c55\u5f00\u5168\u90e8\u4ee3\u7801",1,"code-box-expand-trigger",3,"click"],["nz-row","",3,"nzGutter"],["nz-col","",3,"nzXl","nzSpan"],["nzTitle","\u57fa\u672c","nzSelector","nz-demo-input-number-basic","nzGenerateCommand","ng g ng-zorro-antd:input-number-basic <name>","nzComponentName","NzDemoInputNumberBasicComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["demo",""],["intro",""],["nzTitle","\u4e0d\u53ef\u7528","nzSelector","nz-demo-input-number-disabled","nzGenerateCommand","ng g ng-zorro-antd:input-number-disabled <name>","nzComponentName","NzDemoInputNumberDisabledComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","\u683c\u5f0f\u5316\u5c55\u793a","nzSelector","nz-demo-input-number-formatter","nzGenerateCommand","ng g ng-zorro-antd:input-number-formatter <name>","nzComponentName","NzDemoInputNumberFormatterComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","\u4e09\u79cd\u5927\u5c0f","nzSelector","nz-demo-input-number-size","nzGenerateCommand","ng g ng-zorro-antd:input-number-size <name>","nzComponentName","NzDemoInputNumberSizeComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","\u5c0f\u6570","nzSelector","nz-demo-input-number-digit","nzGenerateCommand","ng g ng-zorro-antd:input-number-digit <name>","nzComponentName","NzDemoInputNumberDigitComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","\u7cbe\u5ea6","nzSelector","nz-demo-input-number-precision","nzGenerateCommand","ng g ng-zorro-antd:input-number-precision <name>","nzComponentName","NzDemoInputNumberPrecisionComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],[1,"markdown","api-container"],["id","api"],["onclick","window.location.hash = 'api'",1,"anchor"],["id","nz-input-number"],[1,"api-type-label","component"],["onclick","window.location.hash = 'nz-input-number'",1,"anchor"],["href","https://developer.mozilla.org/zh-CN/docs/Web/HTML/Global_attributes/inputmode"],["id","\u65b9\u6cd5"],["onclick","window.location.hash = '\u65b9\u6cd5'",1,"anchor"]],template:function(n,e){1&n&&(g.ac(0,"article"),g.ac(1,"nz-affix",0),g.ac(2,"nz-anchor",1),g.jc("nzClick",(function(n){return e.goLink(n)})),g.Vb(3,"nz-link",2),g.Vb(4,"nz-link",3),g.Vb(5,"nz-link",4),g.Vb(6,"nz-link",5),g.Vb(7,"nz-link",6),g.Vb(8,"nz-link",7),g.Vb(9,"nz-link",8),g.Zb(),g.Zb(),g.ac(10,"section",9),g.ac(11,"h1"),g.Tc(12,"InputNumber"),g.ac(13,"span",10),g.Tc(14,"\u6570\u5b57\u8f93\u5165\u6846"),g.Zb(),g.Vb(15,"span",11),g.ac(16,"a",12),g.Vb(17,"i",13),g.Zb(),g.Zb(),g.ac(18,"section",9),g.Ub(),g.ac(19,"p"),g.Tc(20,"\u901a\u8fc7\u9f20\u6807\u6216\u952e\u76d8\uff0c\u8f93\u5165\u8303\u56f4\u5185\u7684\u6570\u503c\u3002"),g.Zb(),g.ac(21,"h2",14),g.ac(22,"span"),g.Tc(23,"\u4f55\u65f6\u4f7f\u7528"),g.Zb(),g.ac(24,"a",15),g.Tc(25,"#"),g.Zb(),g.Zb(),g.ac(26,"p"),g.Tc(27,"\u5f53\u9700\u8981\u83b7\u53d6\u6807\u51c6\u6570\u503c\u65f6\u3002"),g.Zb(),g.ac(28,"pre",16),g.ac(29,"code"),g.ac(30,"span",17),g.Tc(31,"import"),g.Zb(),g.Tc(32," "),g.ac(33,"span",18),g.Tc(34,"{"),g.Zb(),g.Tc(35," NzInputNumberModule "),g.ac(36,"span",18),g.Tc(37,"}"),g.Zb(),g.Tc(38," "),g.ac(39,"span",17),g.Tc(40,"from"),g.Zb(),g.Tc(41," "),g.ac(42,"span",19),g.Tc(43,"'ng-zorro-antd/input-number'"),g.Zb(),g.ac(44,"span",18),g.Tc(45,";"),g.Zb(),g.Zb(),g.Zb(),g.bc(),g.Zb(),g.ac(46,"h2"),g.ac(47,"span"),g.Tc(48,"\u4ee3\u7801\u6f14\u793a"),g.Zb(),g.ac(49,"i",20),g.jc("click",(function(){return e.expandAllCode()})),g.Zb(),g.Zb(),g.Zb(),g.ac(50,"div",21),g.ac(51,"div",22),g.ac(52,"nz-code-box",23),g.Vb(53,"nz-demo-input-number-basic",24),g.ac(54,"div",25),g.Ub(),g.ac(55,"p"),g.Tc(56,"\u6570\u5b57\u8f93\u5165\u6846\u3002"),g.Zb(),g.bc(),g.Zb(),g.Zb(),g.ac(57,"nz-code-box",26),g.Vb(58,"nz-demo-input-number-disabled",24),g.ac(59,"div",25),g.Ub(),g.ac(60,"p"),g.Tc(61,"\u70b9\u51fb\u6309\u94ae\u5207\u6362\u53ef\u7528\u72b6\u6001\u3002"),g.Zb(),g.bc(),g.Zb(),g.Zb(),g.ac(62,"nz-code-box",27),g.Vb(63,"nz-demo-input-number-formatter",24),g.ac(64,"div",25),g.Ub(),g.ac(65,"p"),g.Tc(66,"\u901a\u8fc7 "),g.ac(67,"code"),g.Tc(68,"nzFormatter"),g.Zb(),g.Tc(69," \u683c\u5f0f\u5316\u6570\u5b57\uff0c\u4ee5\u5c55\u793a\u5177\u6709\u5177\u4f53\u542b\u4e49\u7684\u6570\u636e\uff0c\u5f80\u5f80\u9700\u8981\u914d\u5408 "),g.ac(70,"code"),g.Tc(71,"nzParser"),g.Zb(),g.Tc(72," \u4e00\u8d77\u4f7f\u7528\u3002"),g.Zb(),g.bc(),g.Zb(),g.Zb(),g.Zb(),g.ac(73,"div",22),g.ac(74,"nz-code-box",28),g.Vb(75,"nz-demo-input-number-size",24),g.ac(76,"div",25),g.Ub(),g.ac(77,"p"),g.Tc(78,"\u4e09\u79cd\u5927\u5c0f\u7684\u6570\u5b57\u8f93\u5165\u6846\uff0c\u5f53 "),g.ac(79,"code"),g.Tc(80,"nzSize"),g.Zb(),g.Tc(81," \u5206\u522b\u4e3a "),g.ac(82,"code"),g.Tc(83,"large"),g.Zb(),g.Tc(84," \u548c "),g.ac(85,"code"),g.Tc(86,"small"),g.Zb(),g.Tc(87," \u65f6\uff0c\u8f93\u5165\u6846\u9ad8\u5ea6\u4e3a "),g.ac(88,"code"),g.Tc(89,"40px"),g.Zb(),g.Tc(90," \u548c "),g.ac(91,"code"),g.Tc(92,"24px"),g.Zb(),g.Tc(93," \uff0c\u9ed8\u8ba4\u9ad8\u5ea6\u4e3a "),g.ac(94,"code"),g.Tc(95,"32px"),g.Zb(),g.Tc(96,"\u3002"),g.Zb(),g.bc(),g.Zb(),g.Zb(),g.ac(97,"nz-code-box",29),g.Vb(98,"nz-demo-input-number-digit",24),g.ac(99,"div",25),g.Ub(),g.ac(100,"p"),g.Tc(101,"\u548c\u539f\u751f\u7684\u6570\u5b57\u8f93\u5165\u6846\u4e00\u6837\uff0cvalue \u7684\u7cbe\u5ea6\u7531 "),g.ac(102,"code"),g.Tc(103,"nzStep"),g.Zb(),g.Tc(104," \u7684\u5c0f\u6570\u4f4d\u6570\u51b3\u5b9a\u3002"),g.Zb(),g.bc(),g.Zb(),g.Zb(),g.ac(105,"nz-code-box",30),g.Vb(106,"nz-demo-input-number-precision",24),g.ac(107,"div",25),g.Ub(),g.ac(108,"p"),g.Tc(109,"\u6307\u5b9a value \u7684\u7cbe\u5ea6"),g.Zb(),g.bc(),g.Zb(),g.Zb(),g.Zb(),g.Zb(),g.ac(110,"section",31),g.Ub(),g.ac(111,"h2",32),g.ac(112,"span"),g.Tc(113,"API"),g.Zb(),g.ac(114,"a",33),g.Tc(115,"#"),g.Zb(),g.Zb(),g.ac(116,"h3",34),g.ac(117,"span"),g.Tc(118,"nz-input-number"),g.Zb(),g.ac(119,"label",35),g.Tc(120,"component"),g.Zb(),g.ac(121,"a",36),g.Tc(122,"#"),g.Zb(),g.Zb(),g.ac(123,"table"),g.ac(124,"thead"),g.ac(125,"tr"),g.ac(126,"th"),g.Tc(127,"\u6210\u5458"),g.Zb(),g.ac(128,"th"),g.Tc(129,"\u8bf4\u660e"),g.Zb(),g.ac(130,"th"),g.Tc(131,"\u7c7b\u578b"),g.Zb(),g.ac(132,"th"),g.Tc(133,"\u9ed8\u8ba4\u503c"),g.Zb(),g.Zb(),g.Zb(),g.ac(134,"tbody"),g.ac(135,"tr"),g.ac(136,"td"),g.ac(137,"code"),g.Tc(138,"[ngModel]"),g.Zb(),g.Zb(),g.ac(139,"td"),g.Tc(140,"\u5f53\u524d\u503c\uff0c\u53ef\u53cc\u5411\u7ed1\u5b9a"),g.Zb(),g.ac(141,"td"),g.ac(142,"code"),g.Tc(143,"number | string"),g.Zb(),g.Tc(144," | "),g.ac(145,"code"),g.Tc(146,"string"),g.Zb(),g.Zb(),g.ac(147,"td"),g.Tc(148,"-"),g.Zb(),g.Zb(),g.ac(149,"tr"),g.ac(150,"td"),g.ac(151,"code"),g.Tc(152,"[nzAutoFocus]"),g.Zb(),g.Zb(),g.ac(153,"td"),g.Tc(154,"\u81ea\u52a8\u83b7\u53d6\u7126\u70b9"),g.Zb(),g.ac(155,"td"),g.ac(156,"code"),g.Tc(157,"boolean"),g.Zb(),g.Zb(),g.ac(158,"td"),g.ac(159,"code"),g.Tc(160,"false"),g.Zb(),g.Zb(),g.Zb(),g.ac(161,"tr"),g.ac(162,"td"),g.ac(163,"code"),g.Tc(164,"[nzDisabled]"),g.Zb(),g.Zb(),g.ac(165,"td"),g.Tc(166,"\u7981\u7528"),g.Zb(),g.ac(167,"td"),g.ac(168,"code"),g.Tc(169,"boolean"),g.Zb(),g.Zb(),g.ac(170,"td"),g.ac(171,"code"),g.Tc(172,"false"),g.Zb(),g.Zb(),g.Zb(),g.ac(173,"tr"),g.ac(174,"td"),g.ac(175,"code"),g.Tc(176,"[nzMax]"),g.Zb(),g.Zb(),g.ac(177,"td"),g.Tc(178,"\u6700\u5927\u503c"),g.Zb(),g.ac(179,"td"),g.ac(180,"code"),g.Tc(181,"number"),g.Zb(),g.Zb(),g.ac(182,"td"),g.ac(183,"code"),g.Tc(184,"Infinity"),g.Zb(),g.Zb(),g.Zb(),g.ac(185,"tr"),g.ac(186,"td"),g.ac(187,"code"),g.Tc(188,"[nzMin]"),g.Zb(),g.Zb(),g.ac(189,"td"),g.Tc(190,"\u6700\u5c0f\u503c"),g.Zb(),g.ac(191,"td"),g.ac(192,"code"),g.Tc(193,"number"),g.Zb(),g.Zb(),g.ac(194,"td"),g.ac(195,"code"),g.Tc(196,"-Infinity"),g.Zb(),g.Zb(),g.Zb(),g.ac(197,"tr"),g.ac(198,"td"),g.ac(199,"code"),g.Tc(200,"[nzFormatter]"),g.Zb(),g.Zb(),g.ac(201,"td"),g.Tc(202,"\u6307\u5b9a\u8f93\u5165\u6846\u5c55\u793a\u503c\u7684\u683c\u5f0f"),g.Zb(),g.ac(203,"td"),g.ac(204,"code"),g.Tc(205,"(value: number | string) => string | number"),g.Zb(),g.Zb(),g.ac(206,"td"),g.Tc(207,"-"),g.Zb(),g.Zb(),g.ac(208,"tr"),g.ac(209,"td"),g.ac(210,"code"),g.Tc(211,"[nzParser]"),g.Zb(),g.Zb(),g.ac(212,"td"),g.Tc(213,"\u6307\u5b9a\u4ece nzFormatter \u91cc\u8f6c\u6362\u56de\u6570\u5b57\u7684\u65b9\u5f0f\uff0c\u548c nzFormatter \u642d\u914d\u4f7f\u7528"),g.Zb(),g.ac(214,"td"),g.ac(215,"code"),g.Tc(216,"(value: string) => string | number"),g.Zb(),g.Zb(),g.ac(217,"td"),g.ac(218,"code"),g.Tc(219,"(value: string) => value.trim().replace(/\u3002/g, '.').replace(/[^\\w\\.-]+/g, '')"),g.Zb(),g.Zb(),g.Zb(),g.ac(220,"tr"),g.ac(221,"td"),g.ac(222,"code"),g.Tc(223,"[nzPrecision]"),g.Zb(),g.Zb(),g.ac(224,"td"),g.Tc(225,"\u6570\u503c\u7cbe\u5ea6"),g.Zb(),g.ac(226,"td"),g.ac(227,"code"),g.Tc(228,"number"),g.Zb(),g.Zb(),g.ac(229,"td"),g.Tc(230,"-"),g.Zb(),g.Zb(),g.ac(231,"tr"),g.ac(232,"td"),g.ac(233,"code"),g.Tc(234,"[nzPrecisionMode]"),g.Zb(),g.Zb(),g.ac(235,"td"),g.Tc(236,"\u6570\u503c\u7cbe\u5ea6\u7684\u53d6\u503c\u65b9\u5f0f"),g.Zb(),g.ac(237,"td"),g.ac(238,"code"),g.Tc(239,"'cut' | 'toFixed' | ((value: number | string, precision?: number) => number)"),g.Zb(),g.Zb(),g.ac(240,"td"),g.ac(241,"code"),g.Tc(242,"'toFixed'"),g.Zb(),g.Zb(),g.Zb(),g.ac(243,"tr"),g.ac(244,"td"),g.ac(245,"code"),g.Tc(246,"[nzSize]"),g.Zb(),g.Zb(),g.ac(247,"td"),g.Tc(248,"\u8f93\u5165\u6846\u5927\u5c0f"),g.Zb(),g.ac(249,"td"),g.ac(250,"code"),g.Tc(251,"'large' | 'small' | 'default'"),g.Zb(),g.Zb(),g.ac(252,"td"),g.ac(253,"code"),g.Tc(254,"'default'"),g.Zb(),g.Zb(),g.Zb(),g.ac(255,"tr"),g.ac(256,"td"),g.ac(257,"code"),g.Tc(258,"[nzStep]"),g.Zb(),g.Zb(),g.ac(259,"td"),g.Tc(260,"\u6bcf\u6b21\u6539\u53d8\u6b65\u6570\uff0c\u53ef\u4ee5\u4e3a\u5c0f\u6570"),g.Zb(),g.ac(261,"td"),g.ac(262,"code"),g.Tc(263,"number | string"),g.Zb(),g.Zb(),g.ac(264,"td"),g.ac(265,"code"),g.Tc(266,"1"),g.Zb(),g.Zb(),g.Zb(),g.ac(267,"tr"),g.ac(268,"td"),g.ac(269,"code"),g.Tc(270,"[nzInputMode]"),g.Zb(),g.Zb(),g.ac(271,"td"),g.Tc(272,"\u63d0\u4f9b\u4e86\u7528\u6237\u5728\u7f16\u8f91\u5143\u7d20\u6216\u5176\u5185\u5bb9\u65f6\u53ef\u80fd\u8f93\u5165\u7684\u6570\u636e\u7c7b\u578b\u7684\u63d0\u793a\uff0c\u8be6\u89c1"),g.ac(273,"a",37),g.Tc(274,"MDN"),g.Zb(),g.Zb(),g.ac(275,"td"),g.ac(276,"code"),g.Tc(277,"string"),g.Zb(),g.Zb(),g.ac(278,"td"),g.ac(279,"code"),g.Tc(280,"decimal"),g.Zb(),g.Zb(),g.Zb(),g.ac(281,"tr"),g.ac(282,"td"),g.ac(283,"code"),g.Tc(284,"[nzPlaceHolder]"),g.Zb(),g.Zb(),g.ac(285,"td"),g.Tc(286,"\u9009\u62e9\u6846\u9ed8\u8ba4\u6587\u5b57"),g.Zb(),g.ac(287,"td"),g.ac(288,"code"),g.Tc(289,"string"),g.Zb(),g.Zb(),g.ac(290,"td"),g.Tc(291,"-"),g.Zb(),g.Zb(),g.ac(292,"tr"),g.ac(293,"td"),g.ac(294,"code"),g.Tc(295,"[nzId]"),g.Zb(),g.Zb(),g.ac(296,"td"),g.Tc(297,"\u7ec4\u4ef6\u5185\u90e8 input \u7684 id \u503c"),g.Zb(),g.ac(298,"td"),g.ac(299,"code"),g.Tc(300,"string"),g.Zb(),g.Zb(),g.ac(301,"td"),g.Tc(302,"-"),g.Zb(),g.Zb(),g.ac(303,"tr"),g.ac(304,"td"),g.ac(305,"code"),g.Tc(306,"(ngModelChange)"),g.Zb(),g.Zb(),g.ac(307,"td"),g.Tc(308,"\u6570\u503c\u6539\u53d8\u65f6\u56de\u8c03"),g.Zb(),g.ac(309,"td"),g.ac(310,"code"),g.Tc(311,"EventEmitter<number>"),g.Zb(),g.Zb(),g.ac(312,"td"),g.Tc(313,"-"),g.Zb(),g.Zb(),g.ac(314,"tr"),g.ac(315,"td"),g.ac(316,"code"),g.Tc(317,"(nzFocus)"),g.Zb(),g.Zb(),g.ac(318,"td"),g.Tc(319,"focus\u65f6\u56de\u8c03"),g.Zb(),g.ac(320,"td"),g.ac(321,"code"),g.Tc(322,"EventEmitter<void>"),g.Zb(),g.Zb(),g.ac(323,"td"),g.Tc(324,"-"),g.Zb(),g.Zb(),g.ac(325,"tr"),g.ac(326,"td"),g.ac(327,"code"),g.Tc(328,"(nzBlur)"),g.Zb(),g.Zb(),g.ac(329,"td"),g.Tc(330,"blur\u65f6\u56de\u8c03"),g.Zb(),g.ac(331,"td"),g.ac(332,"code"),g.Tc(333,"EventEmitter<void>"),g.Zb(),g.Zb(),g.ac(334,"td"),g.Tc(335,"-"),g.Zb(),g.Zb(),g.Zb(),g.Zb(),g.ac(336,"h4",38),g.ac(337,"span"),g.Tc(338,"\u65b9\u6cd5"),g.Zb(),g.ac(339,"a",39),g.Tc(340,"#"),g.Zb(),g.Zb(),g.ac(341,"p"),g.Tc(342,"\u901a\u8fc7 "),g.ac(343,"code"),g.Tc(344,"ViewChild"),g.Zb(),g.Tc(345," \u7b49\u65b9\u6cd5\u83b7\u5f97\u5b9e\u4f8b\u540e\u8c03\u7528"),g.Zb(),g.ac(346,"table"),g.ac(347,"thead"),g.ac(348,"tr"),g.ac(349,"th"),g.Tc(350,"\u540d\u79f0"),g.Zb(),g.ac(351,"th"),g.Tc(352,"\u63cf\u8ff0"),g.Zb(),g.Zb(),g.Zb(),g.ac(353,"tbody"),g.ac(354,"tr"),g.ac(355,"td"),g.Tc(356,"focus()"),g.Zb(),g.ac(357,"td"),g.Tc(358,"\u83b7\u53d6\u7126\u70b9"),g.Zb(),g.Zb(),g.ac(359,"tr"),g.ac(360,"td"),g.Tc(361,"blur()"),g.Zb(),g.ac(362,"td"),g.Tc(363,"\u79fb\u9664\u7126\u70b9"),g.Zb(),g.Zb(),g.Zb(),g.Zb(),g.bc(),g.Zb(),g.Zb()),2&n&&(g.Db(1),g.vc("nzOffsetTop",16),g.Db(1),g.vc("nzAffix",!1),g.Db(48),g.vc("nzGutter",16),g.Db(1),g.vc("nzXl",12)("nzSpan",24),g.Db(1),g.vc("nzId","components-input-number-demo-basic")("nzLink","components-input-number-demo-basic")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/input-number/demo/basic.md"),g.Db(5),g.vc("nzId","components-input-number-demo-disabled")("nzLink","components-input-number-demo-disabled")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/input-number/demo/disabled.md"),g.Db(5),g.vc("nzId","components-input-number-demo-formatter")("nzLink","components-input-number-demo-formatter")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/input-number/demo/formatter.md"),g.Db(11),g.vc("nzXl",12)("nzSpan",24),g.Db(1),g.vc("nzId","components-input-number-demo-size")("nzLink","components-input-number-demo-size")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/input-number/demo/size.md"),g.Db(23),g.vc("nzId","components-input-number-demo-digit")("nzLink","components-input-number-demo-digit")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/input-number/demo/digit.md"),g.Db(8),g.vc("nzId","components-input-number-demo-precision")("nzLink","components-input-number-demo-precision")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/input-number/demo/precision.md"))},directives:[h.a,f.a,f.b,v.a,k.d,C.c,C.a,T.a,M,w,N,H,D,S],encapsulation:2}),i),y=((o=function(){function n(){_classCallCheck(this,n),this.expanded=!1}return _createClass(n,[{key:"goLink",value:function(n){window&&(window.location.hash=n)}},{key:"expandAllCode",value:function(){var n=this;this.expanded=!this.expanded,this.codeBoxes.forEach((function(e){e.nzExpanded=n.expanded,e.expandCode(n.expanded),e.check()}))}}]),n}()).\u0275fac=function(n){return new(n||o)},o.\u0275cmp=g.Nb({type:o,selectors:[["nz-demo-input-number"]],viewQuery:function(n,e){var c;1&n&&g.Zc(T.a,!0),2&n&&g.Ec(c=g.kc())&&(e.codeBoxes=c)},decls:362,vars:31,consts:[[1,"toc-affix",3,"nzOffsetTop"],["nzShowInkInFixed","",3,"nzAffix","nzClick"],["nzHref","#components-input-number-demo-basic","nzTitle","Basic"],["nzHref","#components-input-number-demo-size","nzTitle","Sizes"],["nzHref","#components-input-number-demo-disabled","nzTitle","Disabled"],["nzHref","#components-input-number-demo-digit","nzTitle","Decimals"],["nzHref","#components-input-number-demo-formatter","nzTitle","Formatter"],["nzHref","#components-input-number-demo-precision","nzTitle","Precision"],["nzHref","#api","nzTitle","API"],[1,"markdown"],[1,"subtitle"],[1,"widget"],["href","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/input-number/doc/index.en-US.md","target","_blank","rel","noopener noreferrer",1,"edit-button"],["nz-icon","","nzType","edit"],["id","when-to-use"],["onclick","window.location.hash = 'when-to-use'",1,"anchor"],[1,"language-ts"],[1,"token","keyword"],[1,"token","punctuation"],[1,"token","string"],["nz-icon","","nzType","appstore","nz-tooltip","","nzTooltipTitle","Expand All Code",1,"code-box-expand-trigger",3,"click"],["nz-row","",3,"nzGutter"],["nz-col","",3,"nzXl","nzSpan"],["nzTitle","Basic","nzSelector","nz-demo-input-number-basic","nzGenerateCommand","ng g ng-zorro-antd:input-number-basic <name>","nzComponentName","NzDemoInputNumberBasicComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["demo",""],["intro",""],["nzTitle","Disabled","nzSelector","nz-demo-input-number-disabled","nzGenerateCommand","ng g ng-zorro-antd:input-number-disabled <name>","nzComponentName","NzDemoInputNumberDisabledComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","Formatter","nzSelector","nz-demo-input-number-formatter","nzGenerateCommand","ng g ng-zorro-antd:input-number-formatter <name>","nzComponentName","NzDemoInputNumberFormatterComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","Sizes","nzSelector","nz-demo-input-number-size","nzGenerateCommand","ng g ng-zorro-antd:input-number-size <name>","nzComponentName","NzDemoInputNumberSizeComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","Decimals","nzSelector","nz-demo-input-number-digit","nzGenerateCommand","ng g ng-zorro-antd:input-number-digit <name>","nzComponentName","NzDemoInputNumberDigitComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","Precision","nzSelector","nz-demo-input-number-precision","nzGenerateCommand","ng g ng-zorro-antd:input-number-precision <name>","nzComponentName","NzDemoInputNumberPrecisionComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],[1,"markdown","api-container"],["id","api"],["onclick","window.location.hash = 'api'",1,"anchor"],["id","nz-input-number"],[1,"api-type-label","component"],["onclick","window.location.hash = 'nz-input-number'",1,"anchor"],["href","https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/inputmode"],["id","methods"],["onclick","window.location.hash = 'methods'",1,"anchor"]],template:function(n,e){1&n&&(g.ac(0,"article"),g.ac(1,"nz-affix",0),g.ac(2,"nz-anchor",1),g.jc("nzClick",(function(n){return e.goLink(n)})),g.Vb(3,"nz-link",2),g.Vb(4,"nz-link",3),g.Vb(5,"nz-link",4),g.Vb(6,"nz-link",5),g.Vb(7,"nz-link",6),g.Vb(8,"nz-link",7),g.Vb(9,"nz-link",8),g.Zb(),g.Zb(),g.ac(10,"section",9),g.ac(11,"h1"),g.Tc(12,"InputNumber"),g.Vb(13,"span",10),g.Vb(14,"span",11),g.ac(15,"a",12),g.Vb(16,"i",13),g.Zb(),g.Zb(),g.ac(17,"section",9),g.Ub(),g.ac(18,"p"),g.Tc(19,"Enter a number within certain range with the mouse or keyboard."),g.Zb(),g.ac(20,"h2",14),g.ac(21,"span"),g.Tc(22,"When To Use"),g.Zb(),g.ac(23,"a",15),g.Tc(24,"#"),g.Zb(),g.Zb(),g.ac(25,"p"),g.Tc(26,"When a numeric value needs to be provided."),g.Zb(),g.ac(27,"pre",16),g.ac(28,"code"),g.ac(29,"span",17),g.Tc(30,"import"),g.Zb(),g.Tc(31," "),g.ac(32,"span",18),g.Tc(33,"{"),g.Zb(),g.Tc(34," NzInputNumberModule "),g.ac(35,"span",18),g.Tc(36,"}"),g.Zb(),g.Tc(37," "),g.ac(38,"span",17),g.Tc(39,"from"),g.Zb(),g.Tc(40," "),g.ac(41,"span",19),g.Tc(42,"'ng-zorro-antd/input-number'"),g.Zb(),g.ac(43,"span",18),g.Tc(44,";"),g.Zb(),g.Zb(),g.Zb(),g.bc(),g.Zb(),g.ac(45,"h2"),g.ac(46,"span"),g.Tc(47,"Examples"),g.Zb(),g.ac(48,"i",20),g.jc("click",(function(){return e.expandAllCode()})),g.Zb(),g.Zb(),g.Zb(),g.ac(49,"div",21),g.ac(50,"div",22),g.ac(51,"nz-code-box",23),g.Vb(52,"nz-demo-input-number-basic",24),g.ac(53,"div",25),g.Ub(),g.ac(54,"p"),g.Tc(55,"Numeric-only input box."),g.Zb(),g.bc(),g.Zb(),g.Zb(),g.ac(56,"nz-code-box",26),g.Vb(57,"nz-demo-input-number-disabled",24),g.ac(58,"div",25),g.Ub(),g.ac(59,"p"),g.Tc(60,"Click the button to toggle between available and disabled states."),g.Zb(),g.bc(),g.Zb(),g.Zb(),g.ac(61,"nz-code-box",27),g.Vb(62,"nz-demo-input-number-formatter",24),g.ac(63,"div",25),g.Ub(),g.ac(64,"p"),g.Tc(65,"Display value within it's situation with "),g.ac(66,"code"),g.Tc(67,"nzFormatter"),g.Zb(),g.Tc(68,", and we usually use "),g.ac(69,"code"),g.Tc(70,"nzParser"),g.Zb(),g.Tc(71," at the same time."),g.Zb(),g.bc(),g.Zb(),g.Zb(),g.Zb(),g.ac(72,"div",22),g.ac(73,"nz-code-box",28),g.Vb(74,"nz-demo-input-number-size",24),g.ac(75,"div",25),g.Ub(),g.ac(76,"p"),g.Tc(77,"There are three sizes available to a numeric input box. By default, the "),g.ac(78,"code"),g.Tc(79,"nzSize"),g.Zb(),g.Tc(80," is "),g.ac(81,"code"),g.Tc(82,"32px"),g.Zb(),g.Tc(83,". The two additional sizes are "),g.ac(84,"code"),g.Tc(85,"large"),g.Zb(),g.Tc(86," and "),g.ac(87,"code"),g.Tc(88,"small"),g.Zb(),g.Tc(89," which means "),g.ac(90,"code"),g.Tc(91,"40px"),g.Zb(),g.Tc(92," and "),g.ac(93,"code"),g.Tc(94,"24px"),g.Zb(),g.Tc(95,", respectively."),g.Zb(),g.bc(),g.Zb(),g.Zb(),g.ac(96,"nz-code-box",29),g.Vb(97,"nz-demo-input-number-digit",24),g.ac(98,"div",25),g.Ub(),g.ac(99,"p"),g.Tc(100,"A numeric-only input box whose values can be increased or decreased using a decimal step. The number of decimals (also known as precision) is determined by the "),g.ac(101,"code"),g.Tc(102,"nzStep"),g.Zb(),g.Tc(103," prop."),g.Zb(),g.bc(),g.Zb(),g.Zb(),g.ac(104,"nz-code-box",30),g.Vb(105,"nz-demo-input-number-precision",24),g.ac(106,"div",25),g.Ub(),g.ac(107,"p"),g.Tc(108,"Set precision of the value"),g.Zb(),g.bc(),g.Zb(),g.Zb(),g.Zb(),g.Zb(),g.ac(109,"section",31),g.Ub(),g.ac(110,"h2",32),g.ac(111,"span"),g.Tc(112,"API"),g.Zb(),g.ac(113,"a",33),g.Tc(114,"#"),g.Zb(),g.Zb(),g.ac(115,"h3",34),g.ac(116,"span"),g.Tc(117,"nz-input-number"),g.Zb(),g.ac(118,"label",35),g.Tc(119,"component"),g.Zb(),g.ac(120,"a",36),g.Tc(121,"#"),g.Zb(),g.Zb(),g.ac(122,"table"),g.ac(123,"thead"),g.ac(124,"tr"),g.ac(125,"th"),g.Tc(126,"property"),g.Zb(),g.ac(127,"th"),g.Tc(128,"description"),g.Zb(),g.ac(129,"th"),g.Tc(130,"type"),g.Zb(),g.ac(131,"th"),g.Tc(132,"default"),g.Zb(),g.Zb(),g.Zb(),g.ac(133,"tbody"),g.ac(134,"tr"),g.ac(135,"td"),g.ac(136,"code"),g.Tc(137,"[ngModel]"),g.Zb(),g.Zb(),g.ac(138,"td"),g.Tc(139,"current value, double binding"),g.Zb(),g.ac(140,"td"),g.ac(141,"code"),g.Tc(142,"number | string"),g.Zb(),g.Tc(143," | "),g.ac(144,"code"),g.Tc(145,"string"),g.Zb(),g.Zb(),g.ac(146,"td"),g.Tc(147,"-"),g.Zb(),g.Zb(),g.ac(148,"tr"),g.ac(149,"td"),g.ac(150,"code"),g.Tc(151,"[nzAutoFocus]"),g.Zb(),g.Zb(),g.ac(152,"td"),g.Tc(153,"get focus when component mounted"),g.Zb(),g.ac(154,"td"),g.ac(155,"code"),g.Tc(156,"boolean"),g.Zb(),g.Zb(),g.ac(157,"td"),g.ac(158,"code"),g.Tc(159,"false"),g.Zb(),g.Zb(),g.Zb(),g.ac(160,"tr"),g.ac(161,"td"),g.ac(162,"code"),g.Tc(163,"[nzDisabled]"),g.Zb(),g.Zb(),g.ac(164,"td"),g.Tc(165,"disable the input"),g.Zb(),g.ac(166,"td"),g.ac(167,"code"),g.Tc(168,"boolean"),g.Zb(),g.Zb(),g.ac(169,"td"),g.ac(170,"code"),g.Tc(171,"false"),g.Zb(),g.Zb(),g.Zb(),g.ac(172,"tr"),g.ac(173,"td"),g.ac(174,"code"),g.Tc(175,"[nzMax]"),g.Zb(),g.Zb(),g.ac(176,"td"),g.Tc(177,"max value"),g.Zb(),g.ac(178,"td"),g.ac(179,"code"),g.Tc(180,"number"),g.Zb(),g.Zb(),g.ac(181,"td"),g.ac(182,"code"),g.Tc(183,"Infinity"),g.Zb(),g.Zb(),g.Zb(),g.ac(184,"tr"),g.ac(185,"td"),g.ac(186,"code"),g.Tc(187,"[nzMin]"),g.Zb(),g.Zb(),g.ac(188,"td"),g.Tc(189,"min value"),g.Zb(),g.ac(190,"td"),g.ac(191,"code"),g.Tc(192,"number"),g.Zb(),g.Zb(),g.ac(193,"td"),g.ac(194,"code"),g.Tc(195,"-Infinity"),g.Zb(),g.Zb(),g.Zb(),g.ac(196,"tr"),g.ac(197,"td"),g.ac(198,"code"),g.Tc(199,"[nzFormatter]"),g.Zb(),g.Zb(),g.ac(200,"td"),g.Tc(201,"Specifies the format of the value presented"),g.Zb(),g.ac(202,"td"),g.ac(203,"code"),g.Tc(204,"(value: number | string) => string | number"),g.Zb(),g.Zb(),g.ac(205,"td"),g.Tc(206,"-"),g.Zb(),g.Zb(),g.ac(207,"tr"),g.ac(208,"td"),g.ac(209,"code"),g.Tc(210,"[nzParser]"),g.Zb(),g.Zb(),g.ac(211,"td"),g.Tc(212,"Specifies the value extracted from nzFormatter"),g.Zb(),g.ac(213,"td"),g.ac(214,"code"),g.Tc(215,"(value: string) => string | number"),g.Zb(),g.Zb(),g.ac(216,"td"),g.ac(217,"code"),g.Tc(218,"(value: string) => value.trim().replace(/\u3002/g, '.').replace(/[^\\w\\.-]+/g, '')"),g.Zb(),g.Zb(),g.Zb(),g.ac(219,"tr"),g.ac(220,"td"),g.ac(221,"code"),g.Tc(222,"[nzPrecision]"),g.Zb(),g.Zb(),g.ac(223,"td"),g.Tc(224,"precision of input value"),g.Zb(),g.ac(225,"td"),g.ac(226,"code"),g.Tc(227,"number"),g.Zb(),g.Zb(),g.ac(228,"td"),g.Tc(229,"-"),g.Zb(),g.Zb(),g.ac(230,"tr"),g.ac(231,"td"),g.ac(232,"code"),g.Tc(233,"[nzPrecisionMode]"),g.Zb(),g.Zb(),g.ac(234,"td"),g.Tc(235,"The method for calculating the precision of input value"),g.Zb(),g.ac(236,"td"),g.ac(237,"code"),g.Tc(238,"'cut' | 'toFixed' | ((value: number | string, precision?: number) => number)"),g.Zb(),g.Zb(),g.ac(239,"td"),g.ac(240,"code"),g.Tc(241,"'toFixed'"),g.Zb(),g.Zb(),g.Zb(),g.ac(242,"tr"),g.ac(243,"td"),g.ac(244,"code"),g.Tc(245,"[nzSize]"),g.Zb(),g.Zb(),g.ac(246,"td"),g.Tc(247,"width of input box"),g.Zb(),g.ac(248,"td"),g.ac(249,"code"),g.Tc(250,"'large' | 'small' | 'default'"),g.Zb(),g.Zb(),g.ac(251,"td"),g.ac(252,"code"),g.Tc(253,"'default'"),g.Zb(),g.Zb(),g.Zb(),g.ac(254,"tr"),g.ac(255,"td"),g.ac(256,"code"),g.Tc(257,"[nzStep]"),g.Zb(),g.Zb(),g.ac(258,"td"),g.Tc(259,"The number to which the current value is increased or decreased. It can be an integer or decimal."),g.Zb(),g.ac(260,"td"),g.ac(261,"code"),g.Tc(262,"number | string"),g.Zb(),g.Zb(),g.ac(263,"td"),g.ac(264,"code"),g.Tc(265,"1"),g.Zb(),g.Zb(),g.Zb(),g.ac(266,"tr"),g.ac(267,"td"),g.ac(268,"code"),g.Tc(269,"[nzInputMode]"),g.Zb(),g.Zb(),g.ac(270,"td"),g.Tc(271,"enumerated attribute that hints at the type of data that might be entered by the user, "),g.ac(272,"a",37),g.Tc(273,"MDN"),g.Zb(),g.Zb(),g.ac(274,"td"),g.ac(275,"code"),g.Tc(276,"string"),g.Zb(),g.Zb(),g.ac(277,"td"),g.ac(278,"code"),g.Tc(279,"decimal"),g.Zb(),g.Zb(),g.Zb(),g.ac(280,"tr"),g.ac(281,"td"),g.ac(282,"code"),g.Tc(283,"[nzPlaceHolder]"),g.Zb(),g.Zb(),g.ac(284,"td"),g.Tc(285,"Placeholder of select"),g.Zb(),g.ac(286,"td"),g.ac(287,"code"),g.Tc(288,"string"),g.Zb(),g.Zb(),g.ac(289,"td"),g.Tc(290,"-"),g.Zb(),g.Zb(),g.ac(291,"tr"),g.ac(292,"td"),g.ac(293,"code"),g.Tc(294,"[nzId]"),g.Zb(),g.Zb(),g.ac(295,"td"),g.Tc(296,"input id attribute inside the component"),g.Zb(),g.ac(297,"td"),g.ac(298,"code"),g.Tc(299,"string"),g.Zb(),g.Zb(),g.ac(300,"td"),g.Tc(301,"-"),g.Zb(),g.Zb(),g.ac(302,"tr"),g.ac(303,"td"),g.ac(304,"code"),g.Tc(305,"(ngModelChange)"),g.Zb(),g.Zb(),g.ac(306,"td"),g.Tc(307,"The callback triggered when the value is changed"),g.Zb(),g.ac(308,"td"),g.ac(309,"code"),g.Tc(310,"EventEmitter<number>"),g.Zb(),g.Zb(),g.ac(311,"td"),g.Tc(312,"-"),g.Zb(),g.Zb(),g.ac(313,"tr"),g.ac(314,"td"),g.ac(315,"code"),g.Tc(316,"(nzFocus)"),g.Zb(),g.Zb(),g.ac(317,"td"),g.Tc(318,"focus callback"),g.Zb(),g.ac(319,"td"),g.ac(320,"code"),g.Tc(321,"EventEmitter<void>"),g.Zb(),g.Zb(),g.ac(322,"td"),g.Tc(323,"-"),g.Zb(),g.Zb(),g.ac(324,"tr"),g.ac(325,"td"),g.ac(326,"code"),g.Tc(327,"(nzBlur)"),g.Zb(),g.Zb(),g.ac(328,"td"),g.Tc(329,"blur callback"),g.Zb(),g.ac(330,"td"),g.ac(331,"code"),g.Tc(332,"EventEmitter<void>"),g.Zb(),g.Zb(),g.ac(333,"td"),g.Tc(334,"-"),g.Zb(),g.Zb(),g.Zb(),g.Zb(),g.ac(335,"h4",38),g.ac(336,"span"),g.Tc(337,"Methods"),g.Zb(),g.ac(338,"a",39),g.Tc(339,"#"),g.Zb(),g.Zb(),g.ac(340,"p"),g.Tc(341,"You can get instance by "),g.ac(342,"code"),g.Tc(343,"ViewChild"),g.Zb(),g.Zb(),g.ac(344,"table"),g.ac(345,"thead"),g.ac(346,"tr"),g.ac(347,"th"),g.Tc(348,"Name"),g.Zb(),g.ac(349,"th"),g.Tc(350,"Description"),g.Zb(),g.Zb(),g.Zb(),g.ac(351,"tbody"),g.ac(352,"tr"),g.ac(353,"td"),g.Tc(354,"focus()"),g.Zb(),g.ac(355,"td"),g.Tc(356,"get focus"),g.Zb(),g.Zb(),g.ac(357,"tr"),g.ac(358,"td"),g.Tc(359,"blur()"),g.Zb(),g.ac(360,"td"),g.Tc(361,"remove focus"),g.Zb(),g.Zb(),g.Zb(),g.Zb(),g.bc(),g.Zb(),g.Zb()),2&n&&(g.Db(1),g.vc("nzOffsetTop",16),g.Db(1),g.vc("nzAffix",!1),g.Db(47),g.vc("nzGutter",16),g.Db(1),g.vc("nzXl",12)("nzSpan",24),g.Db(1),g.vc("nzId","components-input-number-demo-basic")("nzLink","components-input-number-demo-basic")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/input-number/demo/basic.md"),g.Db(5),g.vc("nzId","components-input-number-demo-disabled")("nzLink","components-input-number-demo-disabled")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/input-number/demo/disabled.md"),g.Db(5),g.vc("nzId","components-input-number-demo-formatter")("nzLink","components-input-number-demo-formatter")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/input-number/demo/formatter.md"),g.Db(11),g.vc("nzXl",12)("nzSpan",24),g.Db(1),g.vc("nzId","components-input-number-demo-size")("nzLink","components-input-number-demo-size")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/input-number/demo/size.md"),g.Db(23),g.vc("nzId","components-input-number-demo-digit")("nzLink","components-input-number-demo-digit")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/input-number/demo/digit.md"),g.Db(8),g.vc("nzId","components-input-number-demo-precision")("nzLink","components-input-number-demo-precision")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/input-number/demo/precision.md"))},directives:[h.a,f.a,f.b,v.a,k.d,C.c,C.a,T.a,M,w,N,H,D,S],encapsulation:2}),o),P=((a=function n(){_classCallCheck(this,n)}).\u0275mod=g.Rb({type:a}),a.\u0275inj=g.Qb({factory:function(n){return new(n||a)},imports:[[l.a].concat(Z,[s.g.forChild([{path:"en",component:y},{path:"zh",component:V}])])]}),a)}}]);