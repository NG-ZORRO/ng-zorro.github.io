function _defineProperties(n,e){for(var c=0;c<e.length;c++){var t=e[c];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}function _createClass(n,e,c){return e&&_defineProperties(n.prototype,e),c&&_defineProperties(n,c),n}function _classCallCheck(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{f0uh:function(n,e,c){"use strict";c.r(e),c.d(e,"NzDemoSwitchModule",(function(){return G}));var t,o=c("tyNb"),a=c("WGB2"),i=c("uPy1"),d=c("TZWX"),s=c("MOHP"),b=[i.b,d.c,s.b],l=c("rKiv"),r=c("fXoL"),h=c("utH8"),z=c("l83q"),m=c("uLhK"),u=c("pk25"),Z=c("T+9E"),p=c("3Pt+"),f=((t=function n(){_classCallCheck(this,n),this.switchValue=!1}).\u0275fac=function(n){return new(n||t)},t.\u0275cmp=r.Nb({type:t,selectors:[["nz-demo-switch-basic"]],decls:1,vars:1,consts:[[3,"ngModel","ngModelChange"]],template:function(n,e){1&n&&(r.ac(0,"nz-switch",0),r.jc("ngModelChange",(function(n){return e.switchValue=n})),r.Zb()),2&n&&r.vc("ngModel",e.switchValue)},directives:[i.a,p.o,p.r],encapsulation:2}),t);function w(n,e){1&n&&r.Vb(0,"i",5)}function T(n,e){1&n&&r.Vb(0,"i",6)}var g,k,C,v,y,V,S,x,D=((k=function n(){_classCallCheck(this,n)}).\u0275fac=function(n){return new(n||k)},k.\u0275cmp=r.Nb({type:k,selectors:[["nz-demo-switch-text"]],decls:11,vars:5,consts:[["nzCheckedChildren","\u5f00","nzUnCheckedChildren","\u5173",3,"ngModel"],["nzCheckedChildren","1","nzUnCheckedChildren","0",3,"ngModel"],[3,"ngModel","nzCheckedChildren","nzUnCheckedChildren"],["checkedTemplate",""],["unCheckedTemplate",""],["nz-icon","","nzType","check"],["nz-icon","","nzType","close"]],template:function(n,e){if(1&n&&(r.Vb(0,"nz-switch",0),r.Vb(1,"br"),r.Vb(2,"br"),r.Vb(3,"nz-switch",1),r.Vb(4,"br"),r.Vb(5,"br"),r.Vb(6,"nz-switch",2),r.Rc(7,w,1,0,"ng-template",null,3,r.Sc),r.Rc(9,T,1,0,"ng-template",null,4,r.Sc)),2&n){var c=r.Fc(8),t=r.Fc(10);r.vc("ngModel",!0),r.Db(3),r.vc("ngModel",!1),r.Db(3),r.vc("ngModel",!0)("nzCheckedChildren",c)("nzUnCheckedChildren",t)}},directives:[i.a,p.o,p.r,m.a,s.a],encapsulation:2}),k),I=((g=function n(){_classCallCheck(this,n)}).\u0275fac=function(n){return new(n||g)},g.\u0275cmp=r.Nb({type:g,selectors:[["nz-demo-switch-loading"]],decls:4,vars:2,consts:[["nzLoading","",3,"ngModel"],["nzSize","small","nzLoading","",3,"ngModel"]],template:function(n,e){1&n&&(r.Vb(0,"nz-switch",0),r.Vb(1,"br"),r.Vb(2,"br"),r.Vb(3,"nz-switch",1)),2&n&&(r.vc("ngModel",!0),r.Db(3),r.vc("ngModel",!1))},directives:[i.a,p.o,p.r],encapsulation:2}),g),H=c("vdzw"),O=((x=function n(){_classCallCheck(this,n),this.switchValue=!1,this.isDisabled=!0}).\u0275fac=function(n){return new(n||x)},x.\u0275cmp=r.Nb({type:x,selectors:[["nz-demo-switch-disabled"]],decls:5,vars:3,consts:[[3,"ngModel","nzDisabled","ngModelChange"],["nz-button","",3,"nzType","click"]],template:function(n,e){1&n&&(r.ac(0,"nz-switch",0),r.jc("ngModelChange",(function(n){return e.switchValue=n})),r.Zb(),r.Vb(1,"br"),r.Vb(2,"br"),r.ac(3,"button",1),r.jc("click",(function(){return e.isDisabled=!e.isDisabled})),r.Tc(4,"Toggle disabled"),r.Zb()),2&n&&(r.vc("ngModel",e.switchValue)("nzDisabled",e.isDisabled),r.Db(3),r.vc("nzType","primary"))},directives:[i.a,p.o,p.r,d.a,H.a,m.a],encapsulation:2}),x),N=((S=function n(){_classCallCheck(this,n)}).\u0275fac=function(n){return new(n||S)},S.\u0275cmp=r.Nb({type:S,selectors:[["nz-demo-switch-size"]],decls:4,vars:2,consts:[[3,"ngModel"],["nzSize","small",3,"ngModel"]],template:function(n,e){1&n&&(r.Vb(0,"nz-switch",0),r.Vb(1,"br"),r.Vb(2,"br"),r.Vb(3,"nz-switch",1)),2&n&&(r.vc("ngModel",!0),r.Db(3),r.vc("ngModel",!0))},directives:[i.a,p.o,p.r],encapsulation:2}),S),L=((V=function(){function n(){_classCallCheck(this,n),this.switchValue=!1,this.loading=!1}return _createClass(n,[{key:"clickSwitch",value:function(){var n=this;this.loading||(this.loading=!0,setTimeout((function(){n.switchValue=!n.switchValue,n.loading=!1}),3e3))}}]),n}()).\u0275fac=function(n){return new(n||V)},V.\u0275cmp=r.Nb({type:V,selectors:[["nz-demo-switch-control"]],decls:1,vars:3,consts:[[3,"ngModel","nzControl","nzLoading","ngModelChange","click"]],template:function(n,e){1&n&&(r.ac(0,"nz-switch",0),r.jc("ngModelChange",(function(n){return e.switchValue=n}))("click",(function(){return e.clickSwitch()})),r.Zb()),2&n&&r.vc("ngModel",e.switchValue)("nzControl",!0)("nzLoading",e.loading)},directives:[i.a,p.o,p.r],encapsulation:2}),V),M=((y=function(){function n(){_classCallCheck(this,n),this.expanded=!1}return _createClass(n,[{key:"goLink",value:function(n){window&&(window.location.hash=n)}},{key:"expandAllCode",value:function(){var n=this;this.expanded=!this.expanded,this.codeBoxes.forEach((function(e){e.nzExpanded=n.expanded,e.expandCode(n.expanded),e.check()}))}}]),n}()).\u0275fac=function(n){return new(n||y)},y.\u0275cmp=r.Nb({type:y,selectors:[["nz-demo-switch"]],viewQuery:function(n,e){var c;1&n&&r.Zc(l.a,!0),2&n&&r.Ec(c=r.kc())&&(e.codeBoxes=c)},decls:256,vars:31,consts:[[1,"toc-affix",3,"nzOffsetTop"],["nzShowInkInFixed","",3,"nzAffix","nzClick"],["nzHref","#components-switch-demo-basic","nzTitle","\u57fa\u672c"],["nzHref","#components-switch-demo-disabled","nzTitle","\u4e0d\u53ef\u7528"],["nzHref","#components-switch-demo-text","nzTitle","\u6587\u5b57\u548c\u56fe\u6807"],["nzHref","#components-switch-demo-size","nzTitle","\u4e24\u79cd\u5927\u5c0f"],["nzHref","#components-switch-demo-loading","nzTitle","\u52a0\u8f7d\u4e2d"],["nzHref","#components-switch-demo-control","nzTitle","\u5b8c\u6574\u63a7\u5236"],["nzHref","#api","nzTitle","API"],[1,"markdown"],[1,"subtitle"],[1,"widget"],["href","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/switch/doc/index.zh-CN.md","target","_blank","rel","noopener noreferrer",1,"edit-button"],["nz-icon","","nzType","edit"],["id","\u4f55\u65f6\u4f7f\u7528"],["onclick","window.location.hash = '\u4f55\u65f6\u4f7f\u7528'",1,"anchor"],[1,"language-ts"],[1,"token","keyword"],[1,"token","punctuation"],[1,"token","string"],["nz-icon","","nzType","appstore","nz-tooltip","","nzTooltipTitle","\u5c55\u5f00\u5168\u90e8\u4ee3\u7801",1,"code-box-expand-trigger",3,"click"],["nz-row","",3,"nzGutter"],["nz-col","",3,"nzXl","nzSpan"],["nzTitle","\u57fa\u672c","nzSelector","nz-demo-switch-basic","nzGenerateCommand","ng g ng-zorro-antd:switch-basic <name>","nzComponentName","NzDemoSwitchBasicComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["demo",""],["intro",""],["nzTitle","\u6587\u5b57\u548c\u56fe\u6807","nzSelector","nz-demo-switch-text","nzGenerateCommand","ng g ng-zorro-antd:switch-text <name>","nzComponentName","NzDemoSwitchTextComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","\u52a0\u8f7d\u4e2d","nzSelector","nz-demo-switch-loading","nzGenerateCommand","ng g ng-zorro-antd:switch-loading <name>","nzComponentName","NzDemoSwitchLoadingComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","\u4e0d\u53ef\u7528","nzSelector","nz-demo-switch-disabled","nzGenerateCommand","ng g ng-zorro-antd:switch-disabled <name>","nzComponentName","NzDemoSwitchDisabledComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","\u4e24\u79cd\u5927\u5c0f","nzSelector","nz-demo-switch-size","nzGenerateCommand","ng g ng-zorro-antd:switch-size <name>","nzComponentName","NzDemoSwitchSizeComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","\u5b8c\u6574\u63a7\u5236","nzSelector","nz-demo-switch-control","nzGenerateCommand","ng g ng-zorro-antd:switch-control <name>","nzComponentName","NzDemoSwitchControlComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],[1,"markdown","api-container"],["id","api"],["onclick","window.location.hash = 'api'",1,"anchor"],["id","nz-switch"],[1,"api-type-label","component"],["onclick","window.location.hash = 'nz-switch'",1,"anchor"],["id","\u65b9\u6cd5"],["onclick","window.location.hash = '\u65b9\u6cd5'",1,"anchor"]],template:function(n,e){1&n&&(r.ac(0,"article"),r.ac(1,"nz-affix",0),r.ac(2,"nz-anchor",1),r.jc("nzClick",(function(n){return e.goLink(n)})),r.Vb(3,"nz-link",2),r.Vb(4,"nz-link",3),r.Vb(5,"nz-link",4),r.Vb(6,"nz-link",5),r.Vb(7,"nz-link",6),r.Vb(8,"nz-link",7),r.Vb(9,"nz-link",8),r.Zb(),r.Zb(),r.ac(10,"section",9),r.ac(11,"h1"),r.Tc(12,"Switch"),r.ac(13,"span",10),r.Tc(14,"\u5f00\u5173"),r.Zb(),r.Vb(15,"span",11),r.ac(16,"a",12),r.Vb(17,"i",13),r.Zb(),r.Zb(),r.ac(18,"section",9),r.Ub(),r.ac(19,"p"),r.Tc(20,"\u5f00\u5173\u9009\u62e9\u5668\u3002"),r.Zb(),r.ac(21,"h2",14),r.ac(22,"span"),r.Tc(23,"\u4f55\u65f6\u4f7f\u7528"),r.Zb(),r.ac(24,"a",15),r.Tc(25,"#"),r.Zb(),r.Zb(),r.ac(26,"ul"),r.ac(27,"li"),r.Tc(28,"\u9700\u8981\u8868\u793a\u5f00\u5173\u72b6\u6001/\u4e24\u79cd\u72b6\u6001\u4e4b\u95f4\u7684\u5207\u6362\u65f6\uff1b"),r.Zb(),r.ac(29,"li"),r.Tc(30,"\u548c "),r.ac(31,"code"),r.Tc(32,"checkbox"),r.Zb(),r.Tc(33,"\u7684\u533a\u522b\u662f\uff0c\u5207\u6362 "),r.ac(34,"code"),r.Tc(35,"switch"),r.Zb(),r.Tc(36," \u4f1a\u76f4\u63a5\u89e6\u53d1\u72b6\u6001\u6539\u53d8\uff0c\u800c "),r.ac(37,"code"),r.Tc(38,"checkbox"),r.Zb(),r.Tc(39," \u4e00\u822c\u7528\u4e8e\u72b6\u6001\u6807\u8bb0\uff0c\u9700\u8981\u548c\u63d0\u4ea4\u64cd\u4f5c\u914d\u5408\u3002"),r.Zb(),r.Zb(),r.ac(40,"pre",16),r.ac(41,"code"),r.ac(42,"span",17),r.Tc(43,"import"),r.Zb(),r.Tc(44," "),r.ac(45,"span",18),r.Tc(46,"{"),r.Zb(),r.Tc(47," NzSwitchModule "),r.ac(48,"span",18),r.Tc(49,"}"),r.Zb(),r.Tc(50," "),r.ac(51,"span",17),r.Tc(52,"from"),r.Zb(),r.Tc(53," "),r.ac(54,"span",19),r.Tc(55,"'ng-zorro-antd/switch'"),r.Zb(),r.ac(56,"span",18),r.Tc(57,";"),r.Zb(),r.Zb(),r.Zb(),r.bc(),r.Zb(),r.ac(58,"h2"),r.ac(59,"span"),r.Tc(60,"\u4ee3\u7801\u6f14\u793a"),r.Zb(),r.ac(61,"i",20),r.jc("click",(function(){return e.expandAllCode()})),r.Zb(),r.Zb(),r.Zb(),r.ac(62,"div",21),r.ac(63,"div",22),r.ac(64,"nz-code-box",23),r.Vb(65,"nz-demo-switch-basic",24),r.ac(66,"div",25),r.Ub(),r.ac(67,"p"),r.Tc(68,"\u6700\u7b80\u5355\u7684\u7528\u6cd5\u3002"),r.Zb(),r.bc(),r.Zb(),r.Zb(),r.ac(69,"nz-code-box",26),r.Vb(70,"nz-demo-switch-text",24),r.ac(71,"div",25),r.Ub(),r.ac(72,"p"),r.Tc(73,"\u5e26\u6709\u6587\u5b57\u548c\u56fe\u6807\u3002"),r.Zb(),r.bc(),r.Zb(),r.Zb(),r.ac(74,"nz-code-box",27),r.Vb(75,"nz-demo-switch-loading",24),r.ac(76,"div",25),r.Ub(),r.ac(77,"p"),r.Tc(78,"\u6807\u8bc6\u5f00\u5173\u64cd\u4f5c\u4ecd\u5728\u6267\u884c\u4e2d\u3002"),r.Zb(),r.bc(),r.Zb(),r.Zb(),r.Zb(),r.ac(79,"div",22),r.ac(80,"nz-code-box",28),r.Vb(81,"nz-demo-switch-disabled",24),r.ac(82,"div",25),r.Ub(),r.ac(83,"p"),r.Tc(84,"Switch \u5931\u6548\u72b6\u6001\u3002"),r.Zb(),r.bc(),r.Zb(),r.Zb(),r.ac(85,"nz-code-box",29),r.Vb(86,"nz-demo-switch-size",24),r.ac(87,"div",25),r.Ub(),r.ac(88,"p"),r.ac(89,"code"),r.Tc(90,'nzSize="small"'),r.Zb(),r.Tc(91," \u8868\u793a\u5c0f\u53f7\u5f00\u5173\u3002"),r.Zb(),r.bc(),r.Zb(),r.Zb(),r.ac(92,"nz-code-box",30),r.Vb(93,"nz-demo-switch-control",24),r.ac(94,"div",25),r.Ub(),r.ac(95,"p"),r.ac(96,"code"),r.Tc(97,"Switch"),r.Zb(),r.Tc(98," \u7684\u72b6\u6001\u5b8c\u5168\u7531\u7528\u6237\u63a5\u7ba1\uff0c\u4e0d\u518d\u81ea\u52a8\u6839\u636e\u70b9\u51fb\u4e8b\u4ef6\u6539\u53d8\u6570\u636e\u3002"),r.Zb(),r.bc(),r.Zb(),r.Zb(),r.Zb(),r.Zb(),r.ac(99,"section",31),r.Ub(),r.ac(100,"h2",32),r.ac(101,"span"),r.Tc(102,"API"),r.Zb(),r.ac(103,"a",33),r.Tc(104,"#"),r.Zb(),r.Zb(),r.ac(105,"h3",34),r.ac(106,"span"),r.Tc(107,"nz-switch"),r.Zb(),r.ac(108,"label",35),r.Tc(109,"component"),r.Zb(),r.ac(110,"a",36),r.Tc(111,"#"),r.Zb(),r.Zb(),r.ac(112,"table"),r.ac(113,"thead"),r.ac(114,"tr"),r.ac(115,"th"),r.Tc(116,"\u53c2\u6570"),r.Zb(),r.ac(117,"th"),r.Tc(118,"\u8bf4\u660e"),r.Zb(),r.ac(119,"th"),r.Tc(120,"\u7c7b\u578b"),r.Zb(),r.ac(121,"th"),r.Tc(122,"\u9ed8\u8ba4\u503c"),r.Zb(),r.ac(123,"th"),r.Tc(124,"\u5168\u5c40\u914d\u7f6e"),r.Zb(),r.Zb(),r.Zb(),r.ac(125,"tbody"),r.ac(126,"tr"),r.ac(127,"td"),r.ac(128,"code"),r.Tc(129,"[ngModel]"),r.Zb(),r.Zb(),r.ac(130,"td"),r.Tc(131,"\u6307\u5b9a\u5f53\u524d\u662f\u5426\u9009\u4e2d\uff0c\u53ef\u53cc\u5411\u7ed1\u5b9a"),r.Zb(),r.ac(132,"td"),r.ac(133,"code"),r.Tc(134,"boolean"),r.Zb(),r.Zb(),r.ac(135,"td"),r.ac(136,"code"),r.Tc(137,"false"),r.Zb(),r.Zb(),r.Vb(138,"td"),r.Zb(),r.ac(139,"tr"),r.ac(140,"td"),r.ac(141,"code"),r.Tc(142,"[nzCheckedChildren]"),r.Zb(),r.Zb(),r.ac(143,"td"),r.Tc(144,"\u9009\u4e2d\u65f6\u7684\u5185\u5bb9"),r.Zb(),r.ac(145,"td"),r.ac(146,"code"),r.Tc(147,"string | TemplateRef<void>"),r.Zb(),r.Zb(),r.ac(148,"td"),r.Tc(149,"-"),r.Zb(),r.Vb(150,"td"),r.Zb(),r.ac(151,"tr"),r.ac(152,"td"),r.ac(153,"code"),r.Tc(154,"[nzUnCheckedChildren]"),r.Zb(),r.Zb(),r.ac(155,"td"),r.Tc(156,"\u975e\u9009\u4e2d\u65f6\u7684\u5185\u5bb9"),r.Zb(),r.ac(157,"td"),r.ac(158,"code"),r.Tc(159,"string | TemplateRef<void>"),r.Zb(),r.Zb(),r.ac(160,"td"),r.Tc(161,"-"),r.Zb(),r.Vb(162,"td"),r.Zb(),r.ac(163,"tr"),r.ac(164,"td"),r.ac(165,"code"),r.Tc(166,"[nzDisabled]"),r.Zb(),r.Zb(),r.ac(167,"td"),r.Tc(168,"disable \u72b6\u6001"),r.Zb(),r.ac(169,"td"),r.ac(170,"code"),r.Tc(171,"boolean"),r.Zb(),r.Zb(),r.ac(172,"td"),r.ac(173,"code"),r.Tc(174,"false"),r.Zb(),r.Zb(),r.Vb(175,"td"),r.Zb(),r.ac(176,"tr"),r.ac(177,"td"),r.ac(178,"code"),r.Tc(179,"[nzSize]"),r.Zb(),r.Zb(),r.ac(180,"td"),r.Tc(181,"\u5f00\u5173\u5927\u5c0f\uff0c\u53ef\u9009\u503c\uff1a"),r.ac(182,"code"),r.Tc(183,"default"),r.Zb(),r.ac(184,"code"),r.Tc(185,"small"),r.Zb(),r.Zb(),r.ac(186,"td"),r.ac(187,"code"),r.Tc(188,"'small' | 'default'"),r.Zb(),r.Zb(),r.ac(189,"td"),r.ac(190,"code"),r.Tc(191,"'default'"),r.Zb(),r.Zb(),r.ac(192,"td"),r.Tc(193,"\u2705"),r.Zb(),r.Zb(),r.ac(194,"tr"),r.ac(195,"td"),r.ac(196,"code"),r.Tc(197,"[nzLoading]"),r.Zb(),r.Zb(),r.ac(198,"td"),r.Tc(199,"\u52a0\u8f7d\u4e2d\u7684\u5f00\u5173"),r.Zb(),r.ac(200,"td"),r.ac(201,"code"),r.Tc(202,"boolean"),r.Zb(),r.Zb(),r.ac(203,"td"),r.ac(204,"code"),r.Tc(205,"false"),r.Zb(),r.Zb(),r.Vb(206,"td"),r.Zb(),r.ac(207,"tr"),r.ac(208,"td"),r.ac(209,"code"),r.Tc(210,"[nzControl]"),r.Zb(),r.Zb(),r.ac(211,"td"),r.Tc(212,"\u662f\u5426\u5b8c\u5168\u7531\u7528\u6237\u63a7\u5236\u72b6\u6001"),r.Zb(),r.ac(213,"td"),r.ac(214,"code"),r.Tc(215,"boolean"),r.Zb(),r.Zb(),r.ac(216,"td"),r.ac(217,"code"),r.Tc(218,"false"),r.Zb(),r.Zb(),r.Vb(219,"td"),r.Zb(),r.ac(220,"tr"),r.ac(221,"td"),r.ac(222,"code"),r.Tc(223,"(ngModelChange)"),r.Zb(),r.Zb(),r.ac(224,"td"),r.Tc(225,"\u5f53\u524d\u662f\u5426\u9009\u4e2d\u7684\u56de\u8c03"),r.Zb(),r.ac(226,"td"),r.ac(227,"code"),r.Tc(228,"EventEmitter<boolean>"),r.Zb(),r.Zb(),r.ac(229,"td"),r.ac(230,"code"),r.Tc(231,"false"),r.Zb(),r.Zb(),r.Vb(232,"td"),r.Zb(),r.Zb(),r.Zb(),r.ac(233,"h4",37),r.ac(234,"span"),r.Tc(235,"\u65b9\u6cd5"),r.Zb(),r.ac(236,"a",38),r.Tc(237,"#"),r.Zb(),r.Zb(),r.ac(238,"table"),r.ac(239,"thead"),r.ac(240,"tr"),r.ac(241,"th"),r.Tc(242,"\u540d\u79f0"),r.Zb(),r.ac(243,"th"),r.Tc(244,"\u63cf\u8ff0"),r.Zb(),r.Zb(),r.Zb(),r.ac(245,"tbody"),r.ac(246,"tr"),r.ac(247,"td"),r.Tc(248,"focus()"),r.Zb(),r.ac(249,"td"),r.Tc(250,"\u83b7\u53d6\u7126\u70b9"),r.Zb(),r.Zb(),r.ac(251,"tr"),r.ac(252,"td"),r.Tc(253,"blur()"),r.Zb(),r.ac(254,"td"),r.Tc(255,"\u79fb\u9664\u7126\u70b9"),r.Zb(),r.Zb(),r.Zb(),r.Zb(),r.bc(),r.Zb(),r.Zb()),2&n&&(r.Db(1),r.vc("nzOffsetTop",16),r.Db(1),r.vc("nzAffix",!1),r.Db(60),r.vc("nzGutter",16),r.Db(1),r.vc("nzXl",12)("nzSpan",24),r.Db(1),r.vc("nzId","components-switch-demo-basic")("nzLink","components-switch-demo-basic")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/switch/demo/basic.md"),r.Db(5),r.vc("nzId","components-switch-demo-text")("nzLink","components-switch-demo-text")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/switch/demo/text.md"),r.Db(5),r.vc("nzId","components-switch-demo-loading")("nzLink","components-switch-demo-loading")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/switch/demo/loading.md"),r.Db(5),r.vc("nzXl",12)("nzSpan",24),r.Db(1),r.vc("nzId","components-switch-demo-disabled")("nzLink","components-switch-demo-disabled")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/switch/demo/disabled.md"),r.Db(5),r.vc("nzId","components-switch-demo-size")("nzLink","components-switch-demo-size")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/switch/demo/size.md"),r.Db(7),r.vc("nzId","components-switch-demo-control")("nzLink","components-switch-demo-control")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/switch/demo/control.md"))},directives:[h.a,z.a,z.b,m.a,s.a,u.d,Z.c,Z.a,l.a,f,D,I,O,N,L],encapsulation:2}),y),R=((v=function(){function n(){_classCallCheck(this,n),this.expanded=!1}return _createClass(n,[{key:"goLink",value:function(n){window&&(window.location.hash=n)}},{key:"expandAllCode",value:function(){var n=this;this.expanded=!this.expanded,this.codeBoxes.forEach((function(e){e.nzExpanded=n.expanded,e.expandCode(n.expanded),e.check()}))}}]),n}()).\u0275fac=function(n){return new(n||v)},v.\u0275cmp=r.Nb({type:v,selectors:[["nz-demo-switch"]],viewQuery:function(n,e){var c;1&n&&r.Zc(l.a,!0),2&n&&r.Ec(c=r.kc())&&(e.codeBoxes=c)},decls:267,vars:31,consts:[[1,"toc-affix",3,"nzOffsetTop"],["nzShowInkInFixed","",3,"nzAffix","nzClick"],["nzHref","#components-switch-demo-basic","nzTitle","Basic"],["nzHref","#components-switch-demo-disabled","nzTitle","Disabled"],["nzHref","#components-switch-demo-text","nzTitle","Text & icon"],["nzHref","#components-switch-demo-size","nzTitle","Two sizes"],["nzHref","#components-switch-demo-loading","nzTitle","Loading"],["nzHref","#components-switch-demo-control","nzTitle","Control"],["nzHref","#api","nzTitle","API"],[1,"markdown"],[1,"subtitle"],[1,"widget"],["href","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/switch/doc/index.en-US.md","target","_blank","rel","noopener noreferrer",1,"edit-button"],["nz-icon","","nzType","edit"],["id","when-to-use"],["onclick","window.location.hash = 'when-to-use'",1,"anchor"],[1,"language-ts"],[1,"token","keyword"],[1,"token","punctuation"],[1,"token","string"],["nz-icon","","nzType","appstore","nz-tooltip","","nzTooltipTitle","Expand All Code",1,"code-box-expand-trigger",3,"click"],["nz-row","",3,"nzGutter"],["nz-col","",3,"nzXl","nzSpan"],["nzTitle","Basic","nzSelector","nz-demo-switch-basic","nzGenerateCommand","ng g ng-zorro-antd:switch-basic <name>","nzComponentName","NzDemoSwitchBasicComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["demo",""],["intro",""],["nzTitle","Text & icon","nzSelector","nz-demo-switch-text","nzGenerateCommand","ng g ng-zorro-antd:switch-text <name>","nzComponentName","NzDemoSwitchTextComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","Loading","nzSelector","nz-demo-switch-loading","nzGenerateCommand","ng g ng-zorro-antd:switch-loading <name>","nzComponentName","NzDemoSwitchLoadingComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","Disabled","nzSelector","nz-demo-switch-disabled","nzGenerateCommand","ng g ng-zorro-antd:switch-disabled <name>","nzComponentName","NzDemoSwitchDisabledComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","Two sizes","nzSelector","nz-demo-switch-size","nzGenerateCommand","ng g ng-zorro-antd:switch-size <name>","nzComponentName","NzDemoSwitchSizeComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","Control","nzSelector","nz-demo-switch-control","nzGenerateCommand","ng g ng-zorro-antd:switch-control <name>","nzComponentName","NzDemoSwitchControlComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],[1,"markdown","api-container"],["id","api"],["onclick","window.location.hash = 'api'",1,"anchor"],["id","nz-switch"],[1,"api-type-label","component"],["onclick","window.location.hash = 'nz-switch'",1,"anchor"],["id","methods"],["onclick","window.location.hash = 'methods'",1,"anchor"]],template:function(n,e){1&n&&(r.ac(0,"article"),r.ac(1,"nz-affix",0),r.ac(2,"nz-anchor",1),r.jc("nzClick",(function(n){return e.goLink(n)})),r.Vb(3,"nz-link",2),r.Vb(4,"nz-link",3),r.Vb(5,"nz-link",4),r.Vb(6,"nz-link",5),r.Vb(7,"nz-link",6),r.Vb(8,"nz-link",7),r.Vb(9,"nz-link",8),r.Zb(),r.Zb(),r.ac(10,"section",9),r.ac(11,"h1"),r.Tc(12,"Switch"),r.Vb(13,"span",10),r.Vb(14,"span",11),r.ac(15,"a",12),r.Vb(16,"i",13),r.Zb(),r.Zb(),r.ac(17,"section",9),r.Ub(),r.ac(18,"p"),r.Tc(19,"Switching Selector."),r.Zb(),r.ac(20,"h2",14),r.ac(21,"span"),r.Tc(22,"When To Use"),r.Zb(),r.ac(23,"a",15),r.Tc(24,"#"),r.Zb(),r.Zb(),r.ac(25,"ul"),r.ac(26,"li"),r.Tc(27,"If you need to represent the switching between two states or on-off state."),r.Zb(),r.ac(28,"li"),r.Tc(29,"The difference between "),r.ac(30,"code"),r.Tc(31,"Switch"),r.Zb(),r.Tc(32," and "),r.ac(33,"code"),r.Tc(34,"Checkbox"),r.Zb(),r.Tc(35," is that "),r.ac(36,"code"),r.Tc(37,"Switch"),r.Zb(),r.Tc(38," will trigger a state change directly when you toggle it, while "),r.ac(39,"code"),r.Tc(40,"Checkbox"),r.Zb(),r.Tc(41," is generally used for state marking, which should work in conjunction with submit operation."),r.Zb(),r.Zb(),r.ac(42,"pre",16),r.ac(43,"code"),r.ac(44,"span",17),r.Tc(45,"import"),r.Zb(),r.Tc(46," "),r.ac(47,"span",18),r.Tc(48,"{"),r.Zb(),r.Tc(49," NzSwitchModule "),r.ac(50,"span",18),r.Tc(51,"}"),r.Zb(),r.Tc(52," "),r.ac(53,"span",17),r.Tc(54,"from"),r.Zb(),r.Tc(55," "),r.ac(56,"span",19),r.Tc(57,"'ng-zorro-antd/switch'"),r.Zb(),r.ac(58,"span",18),r.Tc(59,";"),r.Zb(),r.Zb(),r.Zb(),r.bc(),r.Zb(),r.ac(60,"h2"),r.ac(61,"span"),r.Tc(62,"Examples"),r.Zb(),r.ac(63,"i",20),r.jc("click",(function(){return e.expandAllCode()})),r.Zb(),r.Zb(),r.Zb(),r.ac(64,"div",21),r.ac(65,"div",22),r.ac(66,"nz-code-box",23),r.Vb(67,"nz-demo-switch-basic",24),r.ac(68,"div",25),r.Ub(),r.ac(69,"p"),r.Tc(70,"The most basic usage."),r.Zb(),r.bc(),r.Zb(),r.Zb(),r.ac(71,"nz-code-box",26),r.Vb(72,"nz-demo-switch-text",24),r.ac(73,"div",25),r.Ub(),r.ac(74,"p"),r.Tc(75,"With text and icon."),r.Zb(),r.bc(),r.Zb(),r.Zb(),r.ac(76,"nz-code-box",27),r.Vb(77,"nz-demo-switch-loading",24),r.ac(78,"div",25),r.Ub(),r.ac(79,"p"),r.Tc(80,"Mark a pending state of switch."),r.Zb(),r.bc(),r.Zb(),r.Zb(),r.Zb(),r.ac(81,"div",22),r.ac(82,"nz-code-box",28),r.Vb(83,"nz-demo-switch-disabled",24),r.ac(84,"div",25),r.Ub(),r.ac(85,"p"),r.Tc(86,"Disabled state of "),r.ac(87,"code"),r.Tc(88,"Switch"),r.Zb(),r.Tc(89,"."),r.Zb(),r.bc(),r.Zb(),r.Zb(),r.ac(90,"nz-code-box",29),r.Vb(91,"nz-demo-switch-size",24),r.ac(92,"div",25),r.Ub(),r.ac(93,"p"),r.ac(94,"code"),r.Tc(95,'nzSize="small"'),r.Zb(),r.Tc(96," represents a small sized switch."),r.Zb(),r.bc(),r.Zb(),r.Zb(),r.ac(97,"nz-code-box",30),r.Vb(98,"nz-demo-switch-control",24),r.ac(99,"div",25),r.Ub(),r.ac(100,"p"),r.Tc(101,"The status of "),r.ac(102,"code"),r.Tc(103,"Switch"),r.Zb(),r.Tc(104," is completely up to the user and no longer automatically changes the data based on the click event."),r.Zb(),r.bc(),r.Zb(),r.Zb(),r.Zb(),r.Zb(),r.ac(105,"section",31),r.Ub(),r.ac(106,"h2",32),r.ac(107,"span"),r.Tc(108,"API"),r.Zb(),r.ac(109,"a",33),r.Tc(110,"#"),r.Zb(),r.Zb(),r.ac(111,"h3",34),r.ac(112,"span"),r.Tc(113,"nz-switch"),r.Zb(),r.ac(114,"label",35),r.Tc(115,"component"),r.Zb(),r.ac(116,"a",36),r.Tc(117,"#"),r.Zb(),r.Zb(),r.ac(118,"table"),r.ac(119,"thead"),r.ac(120,"tr"),r.ac(121,"th"),r.Tc(122,"Property"),r.Zb(),r.ac(123,"th"),r.Tc(124,"Description"),r.Zb(),r.ac(125,"th"),r.Tc(126,"Type"),r.Zb(),r.ac(127,"th"),r.Tc(128,"Default"),r.Zb(),r.ac(129,"th"),r.Tc(130,"Global Config"),r.Zb(),r.Zb(),r.Zb(),r.ac(131,"tbody"),r.ac(132,"tr"),r.ac(133,"td"),r.ac(134,"code"),r.Tc(135,"[ngModel]"),r.Zb(),r.Zb(),r.ac(136,"td"),r.Tc(137,"determine whether the "),r.ac(138,"code"),r.Tc(139,"nz-switch"),r.Zb(),r.Tc(140," is checked, double binding"),r.Zb(),r.ac(141,"td"),r.ac(142,"code"),r.Tc(143,"boolean"),r.Zb(),r.Zb(),r.ac(144,"td"),r.ac(145,"code"),r.Tc(146,"false"),r.Zb(),r.Zb(),r.Vb(147,"td"),r.Zb(),r.ac(148,"tr"),r.ac(149,"td"),r.ac(150,"code"),r.Tc(151,"[nzCheckedChildren]"),r.Zb(),r.Zb(),r.ac(152,"td"),r.Tc(153,"content to be shown when the state is checked"),r.Zb(),r.ac(154,"td"),r.ac(155,"code"),r.Tc(156,"string | TemplateRef<void>"),r.Zb(),r.Zb(),r.ac(157,"td"),r.Tc(158,"-"),r.Zb(),r.Vb(159,"td"),r.Zb(),r.ac(160,"tr"),r.ac(161,"td"),r.ac(162,"code"),r.Tc(163,"[nzUnCheckedChildren]"),r.Zb(),r.Zb(),r.ac(164,"td"),r.Tc(165,"content to be shown when the state is unchecked"),r.Zb(),r.ac(166,"td"),r.ac(167,"code"),r.Tc(168,"string | TemplateRef<void>"),r.Zb(),r.Zb(),r.ac(169,"td"),r.Tc(170,"-"),r.Zb(),r.Vb(171,"td"),r.Zb(),r.ac(172,"tr"),r.ac(173,"td"),r.ac(174,"code"),r.Tc(175,"[nzDisabled]"),r.Zb(),r.Zb(),r.ac(176,"td"),r.Tc(177,"Disable switch"),r.Zb(),r.ac(178,"td"),r.ac(179,"code"),r.Tc(180,"boolean"),r.Zb(),r.Zb(),r.ac(181,"td"),r.ac(182,"code"),r.Tc(183,"false"),r.Zb(),r.Zb(),r.Vb(184,"td"),r.Zb(),r.ac(185,"tr"),r.ac(186,"td"),r.ac(187,"code"),r.Tc(188,"[nzSize]"),r.Zb(),r.Zb(),r.ac(189,"td"),r.Tc(190,"the size of the "),r.ac(191,"code"),r.Tc(192,"nz-switch"),r.Zb(),r.Tc(193,", options: "),r.ac(194,"code"),r.Tc(195,"default"),r.Zb(),r.ac(196,"code"),r.Tc(197,"small"),r.Zb(),r.Zb(),r.ac(198,"td"),r.ac(199,"code"),r.Tc(200,"'small' | 'default'"),r.Zb(),r.Zb(),r.ac(201,"td"),r.ac(202,"code"),r.Tc(203,"'default'"),r.Zb(),r.Zb(),r.ac(204,"td"),r.Tc(205,"\u2705"),r.Zb(),r.Zb(),r.ac(206,"tr"),r.ac(207,"td"),r.ac(208,"code"),r.Tc(209,"[nzLoading]"),r.Zb(),r.Zb(),r.ac(210,"td"),r.Tc(211,"loading state of switch"),r.Zb(),r.ac(212,"td"),r.ac(213,"code"),r.Tc(214,"boolean"),r.Zb(),r.Zb(),r.ac(215,"td"),r.ac(216,"code"),r.Tc(217,"false"),r.Zb(),r.Zb(),r.Vb(218,"td"),r.Zb(),r.ac(219,"tr"),r.ac(220,"td"),r.ac(221,"code"),r.Tc(222,"[nzControl]"),r.Zb(),r.Zb(),r.ac(223,"td"),r.Tc(224,"determine whether fully control state by user"),r.Zb(),r.ac(225,"td"),r.ac(226,"code"),r.Tc(227,"boolean"),r.Zb(),r.Zb(),r.ac(228,"td"),r.ac(229,"code"),r.Tc(230,"false"),r.Zb(),r.Zb(),r.Vb(231,"td"),r.Zb(),r.ac(232,"tr"),r.ac(233,"td"),r.ac(234,"code"),r.Tc(235,"(ngModelChange)"),r.Zb(),r.Zb(),r.ac(236,"td"),r.Tc(237,"a callback function, can be executed when the checked state is changing"),r.Zb(),r.ac(238,"td"),r.ac(239,"code"),r.Tc(240,"EventEmitter<boolean>"),r.Zb(),r.Zb(),r.ac(241,"td"),r.Tc(242,"-"),r.Zb(),r.Vb(243,"td"),r.Zb(),r.Zb(),r.Zb(),r.ac(244,"h4",37),r.ac(245,"span"),r.Tc(246,"Methods"),r.Zb(),r.ac(247,"a",38),r.Tc(248,"#"),r.Zb(),r.Zb(),r.ac(249,"table"),r.ac(250,"thead"),r.ac(251,"tr"),r.ac(252,"th"),r.Tc(253,"Name"),r.Zb(),r.ac(254,"th"),r.Tc(255,"Description"),r.Zb(),r.Zb(),r.Zb(),r.ac(256,"tbody"),r.ac(257,"tr"),r.ac(258,"td"),r.Tc(259,"focus()"),r.Zb(),r.ac(260,"td"),r.Tc(261,"get focus"),r.Zb(),r.Zb(),r.ac(262,"tr"),r.ac(263,"td"),r.Tc(264,"blur()"),r.Zb(),r.ac(265,"td"),r.Tc(266,"remove focus"),r.Zb(),r.Zb(),r.Zb(),r.Zb(),r.bc(),r.Zb(),r.Zb()),2&n&&(r.Db(1),r.vc("nzOffsetTop",16),r.Db(1),r.vc("nzAffix",!1),r.Db(62),r.vc("nzGutter",16),r.Db(1),r.vc("nzXl",12)("nzSpan",24),r.Db(1),r.vc("nzId","components-switch-demo-basic")("nzLink","components-switch-demo-basic")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/switch/demo/basic.md"),r.Db(5),r.vc("nzId","components-switch-demo-text")("nzLink","components-switch-demo-text")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/switch/demo/text.md"),r.Db(5),r.vc("nzId","components-switch-demo-loading")("nzLink","components-switch-demo-loading")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/switch/demo/loading.md"),r.Db(5),r.vc("nzXl",12)("nzSpan",24),r.Db(1),r.vc("nzId","components-switch-demo-disabled")("nzLink","components-switch-demo-disabled")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/switch/demo/disabled.md"),r.Db(8),r.vc("nzId","components-switch-demo-size")("nzLink","components-switch-demo-size")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/switch/demo/size.md"),r.Db(7),r.vc("nzId","components-switch-demo-control")("nzLink","components-switch-demo-control")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/switch/demo/control.md"))},directives:[h.a,z.a,z.b,m.a,s.a,u.d,Z.c,Z.a,l.a,f,D,I,O,N,L],encapsulation:2}),v),G=((C=function n(){_classCallCheck(this,n)}).\u0275mod=r.Rb({type:C}),C.\u0275inj=r.Qb({factory:function(n){return new(n||C)},imports:[[a.a].concat(b,[o.g.forChild([{path:"en",component:R},{path:"zh",component:M}])])]}),C)},uPy1:function(n,e,c){"use strict";c.d(e,"a",(function(){return T})),c.d(e,"b",(function(){return g}));var t=c("mrSG"),o=c("FtGj"),a=c("fXoL"),i=c("3Pt+"),d=c("8IHs"),s=c("d1+9"),b=c("ofXK"),l=c("fwD0"),r=c("vdzw"),h=c("MOHP"),z=c("u47x"),m=["switchElement"];function u(n,e){1&n&&a.Vb(0,"i",7)}function Z(n,e){if(1&n&&(a.Yb(0),a.Tc(1),a.Xb()),2&n){var c=a.nc(2);a.Db(1),a.Uc(c.nzCheckedChildren)}}function p(n,e){if(1&n&&(a.Yb(0),a.Rc(1,Z,2,1,"ng-container",8),a.Xb()),2&n){var c=a.nc();a.Db(1),a.vc("nzStringTemplateOutlet",c.nzCheckedChildren)}}function f(n,e){if(1&n&&(a.Yb(0),a.Tc(1),a.Xb()),2&n){var c=a.nc(2);a.Db(1),a.Uc(c.nzUnCheckedChildren)}}function w(n,e){if(1&n&&a.Rc(0,f,2,1,"ng-container",8),2&n){var c=a.nc();a.vc("nzStringTemplateOutlet",c.nzUnCheckedChildren)}}var T=function(){var n=function(){function n(e,c,t){_classCallCheck(this,n),this.nzConfigService=e,this.cdr=c,this.focusMonitor=t,this.isChecked=!1,this.onChange=function(){},this.onTouched=function(){},this.nzLoading=!1,this.nzDisabled=!1,this.nzControl=!1,this.nzCheckedChildren=null,this.nzUnCheckedChildren=null,this.nzSize="default"}return _createClass(n,[{key:"onHostClick",value:function(n){n.preventDefault(),this.nzDisabled||this.nzLoading||this.nzControl||this.updateValue(!this.isChecked)}},{key:"updateValue",value:function(n){this.isChecked!==n&&(this.isChecked=n,this.onChange(this.isChecked))}},{key:"onKeyDown",value:function(n){this.nzControl||this.nzDisabled||this.nzLoading||(n.keyCode===o.f?(this.updateValue(!1),n.preventDefault()):n.keyCode===o.h?(this.updateValue(!0),n.preventDefault()):n.keyCode!==o.i&&n.keyCode!==o.d||(this.updateValue(!this.isChecked),n.preventDefault()))}},{key:"focus",value:function(){var n;this.focusMonitor.focusVia(null===(n=this.switchElement)||void 0===n?void 0:n.nativeElement,"keyboard")}},{key:"blur",value:function(){var n;null===(n=this.switchElement)||void 0===n||n.nativeElement.blur()}},{key:"ngAfterViewInit",value:function(){var n=this;this.focusMonitor.monitor(this.switchElement.nativeElement,!0).subscribe((function(e){e||Promise.resolve().then((function(){return n.onTouched()}))}))}},{key:"ngOnDestroy",value:function(){this.focusMonitor.stopMonitoring(this.switchElement.nativeElement)}},{key:"writeValue",value:function(n){this.isChecked=n,this.cdr.markForCheck()}},{key:"registerOnChange",value:function(n){this.onChange=n}},{key:"registerOnTouched",value:function(n){this.onTouched=n}},{key:"setDisabledState",value:function(n){this.nzDisabled=n,this.cdr.markForCheck()}}]),n}();return n.\u0275fac=function(e){return new(e||n)(a.Tb(d.b),a.Tb(a.h),a.Tb(z.c))},n.\u0275cmp=a.Nb({type:n,selectors:[["nz-switch"]],viewQuery:function(n,e){var c;1&n&&a.Oc(m,!0),2&n&&a.Ec(c=a.kc())&&(e.switchElement=c.first)},hostBindings:function(n,e){1&n&&a.jc("click",(function(n){return e.onHostClick(n)}))},inputs:{nzLoading:"nzLoading",nzDisabled:"nzDisabled",nzControl:"nzControl",nzCheckedChildren:"nzCheckedChildren",nzUnCheckedChildren:"nzUnCheckedChildren",nzSize:"nzSize"},exportAs:["nzSwitch"],features:[a.Cb([{provide:i.m,useExisting:Object(a.V)((function(){return n})),multi:!0}])],decls:8,vars:13,consts:[["nz-wave","","type","button",1,"ant-switch",3,"disabled","nzWaveExtraNode","keydown"],["switchElement",""],["nz-icon","","nzType","loading","class","ant-switch-loading-icon",4,"ngIf"],[1,"ant-switch-inner"],[4,"ngIf","ngIfElse"],["uncheckTemplate",""],[1,"ant-click-animating-node"],["nz-icon","","nzType","loading",1,"ant-switch-loading-icon"],[4,"nzStringTemplateOutlet"]],template:function(n,e){if(1&n&&(a.ac(0,"button",0,1),a.jc("keydown",(function(n){return e.onKeyDown(n)})),a.Rc(2,u,1,0,"i",2),a.ac(3,"span",3),a.Rc(4,p,2,1,"ng-container",4),a.Rc(5,w,1,1,"ng-template",null,5,a.Sc),a.Zb(),a.Vb(7,"div",6),a.Zb()),2&n){var c=a.Fc(6);a.Jb("ant-switch-checked",e.isChecked)("ant-switch-loading",e.nzLoading)("ant-switch-disabled",e.nzDisabled)("ant-switch-small","small"===e.nzSize),a.vc("disabled",e.nzDisabled)("nzWaveExtraNode",!0),a.Db(2),a.vc("ngIf",e.nzLoading),a.Db(2),a.vc("ngIf",e.isChecked)("ngIfElse",c)}},directives:[r.a,b.n,h.a,l.b],encapsulation:2,changeDetection:0}),Object(t.b)([Object(s.a)(),Object(t.c)("design:type",Object)],n.prototype,"nzLoading",void 0),Object(t.b)([Object(s.a)(),Object(t.c)("design:type",Object)],n.prototype,"nzDisabled",void 0),Object(t.b)([Object(s.a)(),Object(t.c)("design:type",Object)],n.prototype,"nzControl",void 0),Object(t.b)([Object(d.c)("switch"),Object(t.c)("design:type",String)],n.prototype,"nzSize",void 0),n}(),g=function(){var n=function n(){_classCallCheck(this,n)};return n.\u0275mod=a.Rb({type:n}),n.\u0275inj=a.Qb({factory:function(e){return new(e||n)},imports:[[b.c,r.b,h.b,l.a]]}),n}()}}]);