webpackJsonp([13],{"/5Rd":function(l,n){l.exports='import { Component, OnInit } from \'@angular/core\';\n\n@Component({\n  selector: \'nz-demo-timepicker-hide-options\',\n  template: `\n    <nz-timepicker [(ngModel)]="_date" [nzHideDisabledOptions]="true" [nzDisabledHours]="disabledHours" [nzDisabledMinutes]="disabledMinutes"></nz-timepicker>`,\n  styles  : []\n})\nexport class NzDemoTimePickerHideOptionsComponent implements OnInit {\n  _date = null;\n  newArray = (start, end) => {\n    const result = [];\n    for (let i = start; i < end; i++) {\n      result.push(i);\n    }\n    return result;\n  };\n  disabledHours = () => {\n    const hours = this.newArray(0, 60);\n    hours.splice(20, 4);\n    return hours;\n  };\n\n  disabledMinutes = (h) => {\n    if (h === 20) {\n      return this.newArray(0, 31);\n    } else if (h === 23) {\n      return this.newArray(30, 60);\n    }\n    return [];\n  };\n\n  constructor() {\n  }\n\n  ngOnInit() {\n  }\n}\n\n'},"/BZZ":function(l,n,u){"use strict";function e(l){return i.J(0,[(l()(),i.L(null,["\n    "])),(l()(),i.K(0,null,null,5,"nz-timepicker",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"]],function(l,n,u){var e=!0,t=l.component;if("ngModelChange"===n){e=!1!==(t._date=u)&&e}return e},o.a,o.b)),i.M(114688,null,0,d.a,[i._27],{nzDisabled:[0,"nzDisabled"]},null),i.R(1024,null,r.d,function(l){return[l]},[d.a]),i.M(671744,null,0,r.e,[[8,null],[8,null],[8,null],[2,r.d]],{model:[0,"model"]},{update:"ngModelChange"}),i.R(2048,null,r.f,null,[r.e]),i.M(16384,null,0,r.g,[r.f],null,null)],function(l,n){var u=n.component;l(n,2,0,!0),l(n,4,0,u._date)},function(l,n){l(n,1,0,i.P(n,6).ngClassUntouched,i.P(n,6).ngClassTouched,i.P(n,6).ngClassPristine,i.P(n,6).ngClassDirty,i.P(n,6).ngClassValid,i.P(n,6).ngClassInvalid,i.P(n,6).ngClassPending)})}function t(l){return i.J(0,[(l()(),i.K(0,null,null,1,"nz-demo-timepicker-disabled",[],null,null,null,e,c)),i.M(114688,null,0,a.a,[],null,null)],function(l,n){l(n,1,0)},null)}var i=u("/oeL"),a=u("06Fv"),o=u("HeGQ"),d=u("11YQ"),r=u("bm2B");u.d(n,"b",function(){return c}),n.a=e;var s=[],c=i.I({encapsulation:2,styles:s,data:{}});i.Q("nz-demo-timepicker-disabled",a.a,t,{},{},[])},"06Fv":function(l,n,u){"use strict";u.d(n,"a",function(){return e});var e=function(){function l(){this._date=new Date}return l.prototype.ngOnInit=function(){},l.ctorParameters=function(){return[]},l}()},"2sT0":function(l,n){l.exports="import { Component, OnInit } from '@angular/core';\n\n@Component({\n  selector: 'nz-demo-timepicker-basic',\n  template: `\n    <nz-timepicker [(ngModel)]=\"_date\"></nz-timepicker>`,\n  styles  : []\n})\nexport class NzDemoTimePickerBasicComponent implements OnInit {\n  _date = null;\n\n  constructor() {\n  }\n\n  ngOnInit() {\n  }\n}\n\n"},"4xir":function(l,n,u){"use strict";function e(l){return a.J(0,[(l()(),a.K(0,null,null,308,"article",[],null,null,null,null,null)),(l()(),a.L(null,["\n  "])),(l()(),a.K(0,null,null,23,"section",[["class","markdown"]],null,null,null,null,null)),(l()(),a.K(0,null,null,1,"h1",[],null,null,null,null,null)),(l()(),a.L(null,["TimePicker 时间选择框"])),(l()(),a.L(null,["\n    "])),(l()(),a.K(0,null,null,14,"section",[["class","markdown"]],null,null,null,null,null)),(l()(),a.K(0,null,null,1,"p",[],null,null,null,null,null)),(l()(),a.L(null,["输入或选择时间的控件。"])),(l()(),a.L(null,["\n      "])),(l()(),a.K(0,null,null,6,"h2",[["id","何时使用"]],null,null,null,null,null)),(l()(),a.K(0,null,null,1,"span",[],null,null,null,null,null)),(l()(),a.L(null,["何时使用"])),(l()(),a.L(null,["\n        "])),(l()(),a.K(0,null,null,1,"a",[["class","anchor"]],null,null,null,null,null)),(l()(),a.L(null,["#"])),(l()(),a.L(null,["\n      "])),(l()(),a.L(null,["\n      "])),(l()(),a.K(0,null,null,1,"p",[],null,null,null,null,null)),(l()(),a.L(null,["当用户需要输入一个时间，可以点击标准输入框，弹出时间面板进行选择。"])),(l()(),a.L(null,["\n    "])),(l()(),a.L(null,["\n    "])),(l()(),a.K(0,null,null,2,"h2",[],null,null,null,null,null)),(l()(),a.L(null,["代码演示"])),(l()(),a.K(0,null,null,0,"i",[["class","code-box-expand-trigger anticon anticon-appstore"],["title","展开全部代码"]],null,null,null,null,null)),(l()(),a.L(null,["\n  "])),(l()(),a.L(null,["\n  "])),(l()(),a.K(0,null,null,110,"div",[["nz-row",""]],null,null,null,o.a,o.b)),a.M(114688,null,0,d.a,[a.N,a.O],{nzGutter:[0,"nzGutter"]},null),(l()(),a.L(0,["\n    "])),(l()(),a.K(0,null,0,57,"div",[["nz-col",""]],[[4,"padding-left","px"],[4,"padding-right","px"]],null,null,null,null)),a.M(606208,null,0,r.a,[a.N,[2,d.a],a.O],{nzSpan:[0,"nzSpan"]},null),(l()(),a.L(null,["\n      "])),(l()(),a.K(0,null,null,11,"nz-code-box",[["id","components-time-picker-demo-basic"]],null,null,null,s.a,s.b)),a.M(114688,null,0,c.a,[m.c,a.N],{nzTitle:[0,"nzTitle"],nzCode:[1,"nzCode"]},null),(l()(),a.L(null,["\n        "])),(l()(),a.K(0,null,0,1,"nz-demo-timepicker-basic",[["demo",""]],null,null,null,g.a,g.b)),a.M(114688,null,0,p.a,[],null,null),(l()(),a.L(null,["\n        "])),(l()(),a.K(0,null,1,4,"div",[["intro",""]],null,null,null,null,null)),(l()(),a.L(null,["\n          "])),(l()(),a.K(0,null,null,1,"p",[],null,null,null,null,null)),(l()(),a.L(null,["最简单的用法。"])),(l()(),a.L(null,["\n        "])),(l()(),a.L(null,["\n      "])),(l()(),a.L(null,["\n      "])),(l()(),a.K(0,null,null,11,"nz-code-box",[["id","components-time-picker-demo-size"]],null,null,null,s.a,s.b)),a.M(114688,null,0,c.a,[m.c,a.N],{nzTitle:[0,"nzTitle"],nzCode:[1,"nzCode"]},null),(l()(),a.L(null,["\n        "])),(l()(),a.K(0,null,0,1,"nz-demo-timepicker-size",[["demo",""]],null,null,null,L.a,L.b)),a.M(114688,null,0,f.a,[],null,null),(l()(),a.L(null,["\n        "])),(l()(),a.K(0,null,1,4,"div",[["intro",""]],null,null,null,null,null)),(l()(),a.L(null,["\n          "])),(l()(),a.K(0,null,null,1,"p",[],null,null,null,null,null)),(l()(),a.L(null,["三种大小的输入框，大的用在表单中，中的为默认。"])),(l()(),a.L(null,["\n        "])),(l()(),a.L(null,["\n      "])),(l()(),a.L(null,["\n      "])),(l()(),a.K(0,null,null,11,"nz-code-box",[["id","components-time-picker-demo-disabled"]],null,null,null,s.a,s.b)),a.M(114688,null,0,c.a,[m.c,a.N],{nzTitle:[0,"nzTitle"],nzCode:[1,"nzCode"]},null),(l()(),a.L(null,["\n        "])),(l()(),a.K(0,null,0,1,"nz-demo-timepicker-disabled",[["demo",""]],null,null,null,z.a,z.b)),a.M(114688,null,0,h.a,[],null,null),(l()(),a.L(null,["\n        "])),(l()(),a.K(0,null,1,4,"div",[["intro",""]],null,null,null,null,null)),(l()(),a.L(null,["\n          "])),(l()(),a.K(0,null,null,1,"p",[],null,null,null,null,null)),(l()(),a.L(null,["禁用时间选择。"])),(l()(),a.L(null,["\n        "])),(l()(),a.L(null,["\n      "])),(l()(),a.L(null,["\n      "])),(l()(),a.K(0,null,null,14,"nz-code-box",[["id","components-time-picker-demo-hide-options"]],null,null,null,s.a,s.b)),a.M(114688,null,0,c.a,[m.c,a.N],{nzTitle:[0,"nzTitle"],nzCode:[1,"nzCode"]},null),(l()(),a.L(null,["\n        "])),(l()(),a.K(0,null,0,1,"nz-demo-timepicker-hide-options",[["demo",""]],null,null,null,C.a,C.b)),a.M(114688,null,0,b.a,[],null,null),(l()(),a.L(null,["\n        "])),(l()(),a.K(0,null,1,7,"div",[["intro",""]],null,null,null,null,null)),(l()(),a.L(null,["\n          "])),(l()(),a.K(0,null,null,4,"p",[],null,null,null,null,null)),(l()(),a.L(null,["通过 "])),(l()(),a.K(0,null,null,1,"code",[],null,null,null,null,null)),(l()(),a.L(null,["nzHideDisabledOptions"])),(l()(),a.L(null,[" 将不可选的选项隐藏。"])),(l()(),a.L(null,["\n        "])),(l()(),a.L(null,["\n      "])),(l()(),a.L(null,["\n    "])),(l()(),a.L(0,["\n    "])),(l()(),a.K(0,null,0,47,"div",[["nz-col",""]],[[4,"padding-left","px"],[4,"padding-right","px"]],null,null,null,null)),a.M(606208,null,0,r.a,[a.N,[2,d.a],a.O],{nzSpan:[0,"nzSpan"]},null),(l()(),a.L(null,["\n      "])),(l()(),a.K(0,null,null,11,"nz-code-box",[["id","components-time-picker-demo-change"]],null,null,null,s.a,s.b)),a.M(114688,null,0,c.a,[m.c,a.N],{nzTitle:[0,"nzTitle"],nzCode:[1,"nzCode"]},null),(l()(),a.L(null,["\n        "])),(l()(),a.K(0,null,0,1,"nz-demo-timepicker-change",[["demo",""]],null,null,null,P.a,P.b)),a.M(114688,null,0,K.a,[],null,null),(l()(),a.L(null,["\n        "])),(l()(),a.K(0,null,1,4,"div",[["intro",""]],null,null,null,null,null)),(l()(),a.L(null,["\n          "])),(l()(),a.K(0,null,null,1,"p",[],null,null,null,null,null)),(l()(),a.L(null,["nzValue 和 nzValueChange 需要配合使用。"])),(l()(),a.L(null,["\n        "])),(l()(),a.L(null,["\n      "])),(l()(),a.L(null,["\n      "])),(l()(),a.K(0,null,null,11,"nz-code-box",[["id","components-time-picker-demo-without-seconds"]],null,null,null,s.a,s.b)),a.M(114688,null,0,c.a,[m.c,a.N],{nzTitle:[0,"nzTitle"],nzCode:[1,"nzCode"]},null),(l()(),a.L(null,["\n        "])),(l()(),a.K(0,null,0,1,"nz-demo-timepicker-without-seconds",[["demo",""]],null,null,null,M.a,M.b)),a.M(114688,null,0,v.a,[],null,null),(l()(),a.L(null,["\n        "])),(l()(),a.K(0,null,1,4,"div",[["intro",""]],null,null,null,null,null)),(l()(),a.L(null,["\n          "])),(l()(),a.K(0,null,null,1,"p",[],null,null,null,null,null)),(l()(),a.L(null,["不展示秒，也不允许选择。"])),(l()(),a.L(null,["\n        "])),(l()(),a.L(null,["\n      "])),(l()(),a.L(null,["\n      "])),(l()(),a.K(0,null,null,17,"nz-code-box",[["id","components-time-picker-demo-disabled-options"]],null,null,null,s.a,s.b)),a.M(114688,null,0,c.a,[m.c,a.N],{nzTitle:[0,"nzTitle"],nzCode:[1,"nzCode"]},null),(l()(),a.L(null,["\n        "])),(l()(),a.K(0,null,0,1,"nz-demo-timepicker-disabled-options",[["demo",""]],null,null,null,k.a,k.b)),a.M(114688,null,0,D.a,[],null,null),(l()(),a.L(null,["\n        "])),(l()(),a.K(0,null,1,10,"div",[["intro",""]],null,null,null,null,null)),(l()(),a.L(null,["\n          "])),(l()(),a.K(0,null,null,7,"p",[],null,null,null,null,null)),(l()(),a.L(null,["限制选择 "])),(l()(),a.K(0,null,null,1,"code",[],null,null,null,null,null)),(l()(),a.L(null,["20:30"])),(l()(),a.L(null,[" 到 "])),(l()(),a.K(0,null,null,1,"code",[],null,null,null,null,null)),(l()(),a.L(null,["23:30"])),(l()(),a.L(null,[" 这个时间段。"])),(l()(),a.L(null,["\n        "])),(l()(),a.L(null,["\n      "])),(l()(),a.L(null,["\n    "])),(l()(),a.L(0,["\n  "])),(l()(),a.L(null,["\n  "])),(l()(),a.K(0,null,null,168,"section",[["class","markdown api-container"]],null,null,null,null,null)),(l()(),a.L(null,["\n    "])),(l()(),a.K(0,null,null,6,"h2",[["id","API"]],null,null,null,null,null)),(l()(),a.K(0,null,null,1,"span",[],null,null,null,null,null)),(l()(),a.L(null,["API"])),(l()(),a.L(null,["\n      "])),(l()(),a.K(0,null,null,1,"a",[["class","anchor"]],null,null,null,null,null)),(l()(),a.L(null,["#"])),(l()(),a.L(null,["\n    "])),(l()(),a.L(null,["\n    "])),(l()(),a.K(0,null,null,157,"table",[],null,null,null,null,null)),(l()(),a.L(null,["\n      "])),(l()(),a.K(0,null,null,16,"thead",[],null,null,null,null,null)),(l()(),a.L(null,["\n        "])),(l()(),a.K(0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),a.L(null,["\n          "])),(l()(),a.K(0,null,null,1,"th",[],null,null,null,null,null)),(l()(),a.L(null,["参数"])),(l()(),a.L(null,["\n          "])),(l()(),a.K(0,null,null,1,"th",[],null,null,null,null,null)),(l()(),a.L(null,["说明"])),(l()(),a.L(null,["\n          "])),(l()(),a.K(0,null,null,1,"th",[],null,null,null,null,null)),(l()(),a.L(null,["类型"])),(l()(),a.L(null,["\n          "])),(l()(),a.K(0,null,null,1,"th",[],null,null,null,null,null)),(l()(),a.L(null,["默认值"])),(l()(),a.L(null,["\n        "])),(l()(),a.L(null,["\n      "])),(l()(),a.L(null,["\n      "])),(l()(),a.K(0,null,null,136,"tbody",[],null,null,null,null,null)),(l()(),a.L(null,["\n        "])),(l()(),a.K(0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),a.L(null,["\n          "])),(l()(),a.K(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),a.L(null,["ngModel"])),(l()(),a.L(null,["\n          "])),(l()(),a.K(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),a.L(null,["默认时间"])),(l()(),a.L(null,["\n          "])),(l()(),a.K(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),a.L(null,["string or Date"])),(l()(),a.L(null,["\n          "])),(l()(),a.K(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),a.L(null,["无"])),(l()(),a.L(null,["\n        "])),(l()(),a.L(null,["\n        "])),(l()(),a.K(0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),a.L(null,["\n          "])),(l()(),a.K(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),a.L(null,["nzSize"])),(l()(),a.L(null,["\n          "])),(l()(),a.K(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),a.L(null,["设置TimePicker大小"])),(l()(),a.L(null,["\n          "])),(l()(),a.K(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),a.L(null,["'large'|'small'|'default'"])),(l()(),a.L(null,["\n          "])),(l()(),a.K(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),a.L(null,["'default'"])),(l()(),a.L(null,["\n        "])),(l()(),a.L(null,["\n        "])),(l()(),a.K(0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),a.L(null,["\n          "])),(l()(),a.K(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),a.L(null,["nzPlaceHolder"])),(l()(),a.L(null,["\n          "])),(l()(),a.K(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),a.L(null,["没有值的时候显示的内容"])),(l()(),a.L(null,["\n          "])),(l()(),a.K(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),a.L(null,["string"])),(l()(),a.L(null,["\n          "])),(l()(),a.K(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),a.L(null,['"请选择时间"'])),(l()(),a.L(null,["\n        "])),(l()(),a.L(null,["\n        "])),(l()(),a.K(0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),a.L(null,["\n          "])),(l()(),a.K(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),a.L(null,["nzFormat"])),(l()(),a.L(null,["\n          "])),(l()(),a.K(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),a.L(null,["展示的时间格式"])),(l()(),a.L(null,["\n          "])),(l()(),a.K(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),a.L(null,["string"])),(l()(),a.L(null,["\n          "])),(l()(),a.K(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),a.L(null,['"HH:mm:ss"、"HH:mm"、"mm:ss"'])),(l()(),a.L(null,["\n        "])),(l()(),a.L(null,["\n        "])),(l()(),a.K(0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),a.L(null,["\n          "])),(l()(),a.K(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),a.L(null,["nzDisabled"])),(l()(),a.L(null,["\n          "])),(l()(),a.K(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),a.L(null,["禁用全部操作"])),(l()(),a.L(null,["\n          "])),(l()(),a.K(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),a.L(null,["boolean"])),(l()(),a.L(null,["\n          "])),(l()(),a.K(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),a.L(null,["false"])),(l()(),a.L(null,["\n        "])),(l()(),a.L(null,["\n        "])),(l()(),a.K(0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),a.L(null,["\n          "])),(l()(),a.K(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),a.L(null,["nzDisabledHours"])),(l()(),a.L(null,["\n          "])),(l()(),a.K(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),a.L(null,["禁止选择部分小时选项"])),(l()(),a.L(null,["\n          "])),(l()(),a.K(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),a.L(null,["function()"])),(l()(),a.L(null,["\n          "])),(l()(),a.K(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),a.L(null,["无"])),(l()(),a.L(null,["\n        "])),(l()(),a.L(null,["\n        "])),(l()(),a.K(0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),a.L(null,["\n          "])),(l()(),a.K(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),a.L(null,["nzDisabledMinutes"])),(l()(),a.L(null,["\n          "])),(l()(),a.K(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),a.L(null,["禁止选择部分分钟选项"])),(l()(),a.L(null,["\n          "])),(l()(),a.K(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),a.L(null,["function(selectedHour)"])),(l()(),a.L(null,["\n          "])),(l()(),a.K(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),a.L(null,["无"])),(l()(),a.L(null,["\n        "])),(l()(),a.L(null,["\n        "])),(l()(),a.K(0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),a.L(null,["\n          "])),(l()(),a.K(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),a.L(null,["nzDisabledSeconds"])),(l()(),a.L(null,["\n          "])),(l()(),a.K(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),a.L(null,["禁止选择部分秒选项"])),(l()(),a.L(null,["\n          "])),(l()(),a.K(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),a.L(null,["function(selectedHour, selectedMinute)"])),(l()(),a.L(null,["\n          "])),(l()(),a.K(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),a.L(null,["无"])),(l()(),a.L(null,["\n        "])),(l()(),a.L(null,["\n        "])),(l()(),a.K(0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),a.L(null,["\n          "])),(l()(),a.K(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),a.L(null,["nzHideDisabledOptions"])),(l()(),a.L(null,["\n          "])),(l()(),a.K(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),a.L(null,["隐藏禁止选择的选项"])),(l()(),a.L(null,["\n          "])),(l()(),a.K(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),a.L(null,["boolean"])),(l()(),a.L(null,["\n          "])),(l()(),a.K(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),a.L(null,["false"])),(l()(),a.L(null,["\n        "])),(l()(),a.L(null,["\n      "])),(l()(),a.L(null,["\n    "])),(l()(),a.L(null,["\n  "])),(l()(),a.L(null,["\n"])),(l()(),a.L(null,["\n"]))],function(l,n){var u=n.component;l(n,28,0,8);l(n,31,0,12);l(n,34,0,"基本",u.NzDemoTimePickerBasicCode),l(n,37,0);l(n,47,0,"三种大小",u.NzDemoTimePickerSizeCode),l(n,50,0);l(n,60,0,"禁用",u.NzDemoTimePickerDisabledCode),l(n,63,0);l(n,73,0,"只显示部分选项",u.NzDemoTimePickerHideOptionsCode),l(n,76,0);l(n,90,0,12);l(n,93,0,"受控组件",u.NzDemoTimePickerChangeCode),l(n,96,0);l(n,106,0,"不展示秒",u.NzDemoTimePickerWithoutSecondsCode),l(n,109,0);l(n,119,0,"禁止选项",u.NzDemoTimePickerDisabledOptionsCode),l(n,122,0)},function(l,n){l(n,30,0,a.P(n,31).paddingLeft,a.P(n,31).paddingRight),l(n,89,0,a.P(n,90).paddingLeft,a.P(n,90).paddingRight)})}function t(l){return a.J(0,[(l()(),a.K(0,null,null,1,"nz-demo-timepicker",[],null,null,null,e,I)),a.M(114688,null,0,y.a,[],null,null)],function(l,n){l(n,1,0)},null)}var i=u("bnav"),a=u("/oeL"),o=u("AQI4"),d=u("QJaU"),r=u("HzDP"),s=u("xfRN"),c=u("d0SC"),m=u("qbdv"),g=u("O9JT"),p=u("Vok5"),L=u("S/7T"),f=u("wBUR"),z=u("/BZZ"),h=u("06Fv"),C=u("GDxb"),b=u("W3fz"),P=u("BMpH"),K=u("d4hb"),M=u("tWhe"),v=u("SYTb"),k=u("VJUG"),D=u("vTLO"),y=u("FVZt");u.d(n,"a",function(){return O});var T=[i.a],I=a.I({encapsulation:2,styles:T,data:{}}),O=a.Q("nz-demo-timepicker",y.a,t,{},{},[])},BMpH:function(l,n,u){"use strict";function e(l){return i.J(0,[(l()(),i.L(null,["\n    "])),(l()(),i.K(0,null,null,5,"nz-timepicker",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"]],function(l,n,u){var e=!0,t=l.component;if("ngModelChange"===n){e=!1!==(t._date=u)&&e}if("ngModelChange"===n){e=!1!==t._console(u)&&e}return e},o.a,o.b)),i.M(114688,null,0,d.a,[i._27],null,null),i.R(1024,null,r.d,function(l){return[l]},[d.a]),i.M(671744,null,0,r.e,[[8,null],[8,null],[8,null],[2,r.d]],{model:[0,"model"]},{update:"ngModelChange"}),i.R(2048,null,r.f,null,[r.e]),i.M(16384,null,0,r.g,[r.f],null,null)],function(l,n){var u=n.component;l(n,2,0),l(n,4,0,u._date)},function(l,n){l(n,1,0,i.P(n,6).ngClassUntouched,i.P(n,6).ngClassTouched,i.P(n,6).ngClassPristine,i.P(n,6).ngClassDirty,i.P(n,6).ngClassValid,i.P(n,6).ngClassInvalid,i.P(n,6).ngClassPending)})}function t(l){return i.J(0,[(l()(),i.K(0,null,null,1,"nz-demo-timepicker-change",[],null,null,null,e,c)),i.M(114688,null,0,a.a,[],null,null)],function(l,n){l(n,1,0)},null)}var i=u("/oeL"),a=u("d4hb"),o=u("HeGQ"),d=u("11YQ"),r=u("bm2B");u.d(n,"b",function(){return c}),n.a=e;var s=[],c=i.I({encapsulation:2,styles:s,data:{}});i.Q("nz-demo-timepicker-change",a.a,t,{},{},[])},FVZt:function(l,n,u){"use strict";u.d(n,"a",function(){return e});var e=function(){function l(){this.NzDemoTimePickerBasicCode=u("2sT0"),this.NzDemoTimePickerChangeCode=u("iW1p"),this.NzDemoTimePickerSizeCode=u("XwXP"),this.NzDemoTimePickerWithoutSecondsCode=u("q13i"),this.NzDemoTimePickerDisabledCode=u("jHWB"),this.NzDemoTimePickerDisabledOptionsCode=u("t2k4"),this.NzDemoTimePickerHideOptionsCode=u("/5Rd")}return l.prototype.ngOnInit=function(){},l.ctorParameters=function(){return[]},l}()},GDxb:function(l,n,u){"use strict";function e(l){return i.J(0,[(l()(),i.L(null,["\n    "])),(l()(),i.K(0,null,null,5,"nz-timepicker",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"]],function(l,n,u){var e=!0,t=l.component;if("ngModelChange"===n){e=!1!==(t._date=u)&&e}return e},o.a,o.b)),i.M(114688,null,0,d.a,[i._27],{nzHideDisabledOptions:[0,"nzHideDisabledOptions"],nzDisabledHours:[1,"nzDisabledHours"],nzDisabledMinutes:[2,"nzDisabledMinutes"]},null),i.R(1024,null,r.d,function(l){return[l]},[d.a]),i.M(671744,null,0,r.e,[[8,null],[8,null],[8,null],[2,r.d]],{model:[0,"model"]},{update:"ngModelChange"}),i.R(2048,null,r.f,null,[r.e]),i.M(16384,null,0,r.g,[r.f],null,null)],function(l,n){var u=n.component;l(n,2,0,!0,u.disabledHours,u.disabledMinutes),l(n,4,0,u._date)},function(l,n){l(n,1,0,i.P(n,6).ngClassUntouched,i.P(n,6).ngClassTouched,i.P(n,6).ngClassPristine,i.P(n,6).ngClassDirty,i.P(n,6).ngClassValid,i.P(n,6).ngClassInvalid,i.P(n,6).ngClassPending)})}function t(l){return i.J(0,[(l()(),i.K(0,null,null,1,"nz-demo-timepicker-hide-options",[],null,null,null,e,c)),i.M(114688,null,0,a.a,[],null,null)],function(l,n){l(n,1,0)},null)}var i=u("/oeL"),a=u("W3fz"),o=u("HeGQ"),d=u("11YQ"),r=u("bm2B");u.d(n,"b",function(){return c}),n.a=e;var s=[],c=i.I({encapsulation:2,styles:s,data:{}});i.Q("nz-demo-timepicker-hide-options",a.a,t,{},{},[])},O9JT:function(l,n,u){"use strict";function e(l){return i.J(0,[(l()(),i.L(null,["\n    "])),(l()(),i.K(0,null,null,5,"nz-timepicker",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"]],function(l,n,u){var e=!0,t=l.component;if("ngModelChange"===n){e=!1!==(t._date=u)&&e}return e},o.a,o.b)),i.M(114688,null,0,d.a,[i._27],null,null),i.R(1024,null,r.d,function(l){return[l]},[d.a]),i.M(671744,null,0,r.e,[[8,null],[8,null],[8,null],[2,r.d]],{model:[0,"model"]},{update:"ngModelChange"}),i.R(2048,null,r.f,null,[r.e]),i.M(16384,null,0,r.g,[r.f],null,null)],function(l,n){var u=n.component;l(n,2,0),l(n,4,0,u._date)},function(l,n){l(n,1,0,i.P(n,6).ngClassUntouched,i.P(n,6).ngClassTouched,i.P(n,6).ngClassPristine,i.P(n,6).ngClassDirty,i.P(n,6).ngClassValid,i.P(n,6).ngClassInvalid,i.P(n,6).ngClassPending)})}function t(l){return i.J(0,[(l()(),i.K(0,null,null,1,"nz-demo-timepicker-basic",[],null,null,null,e,c)),i.M(114688,null,0,a.a,[],null,null)],function(l,n){l(n,1,0)},null)}var i=u("/oeL"),a=u("Vok5"),o=u("HeGQ"),d=u("11YQ"),r=u("bm2B");u.d(n,"b",function(){return c}),n.a=e;var s=[],c=i.I({encapsulation:2,styles:s,data:{}});i.Q("nz-demo-timepicker-basic",a.a,t,{},{},[])},QEoZ:function(l,n,u){"use strict";u.d(n,"a",function(){return e});var e=function(){function l(){}return l}()},"S/7T":function(l,n,u){"use strict";function e(l){return i.J(0,[(l()(),i.L(null,["\n    "])),(l()(),i.K(0,null,null,5,"nz-timepicker",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"]],function(l,n,u){var e=!0,t=l.component;if("ngModelChange"===n){e=!1!==(t._date=u)&&e}return e},o.a,o.b)),i.M(114688,null,0,d.a,[i._27],{nzSize:[0,"nzSize"]},null),i.R(1024,null,r.d,function(l){return[l]},[d.a]),i.M(671744,null,0,r.e,[[8,null],[8,null],[8,null],[2,r.d]],{model:[0,"model"]},{update:"ngModelChange"}),i.R(2048,null,r.f,null,[r.e]),i.M(16384,null,0,r.g,[r.f],null,null),(l()(),i.L(null,["\n    "])),(l()(),i.K(0,null,null,5,"nz-timepicker",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"]],function(l,n,u){var e=!0,t=l.component;if("ngModelChange"===n){e=!1!==(t._date=u)&&e}return e},o.a,o.b)),i.M(114688,null,0,d.a,[i._27],null,null),i.R(1024,null,r.d,function(l){return[l]},[d.a]),i.M(671744,null,0,r.e,[[8,null],[8,null],[8,null],[2,r.d]],{model:[0,"model"]},{update:"ngModelChange"}),i.R(2048,null,r.f,null,[r.e]),i.M(16384,null,0,r.g,[r.f],null,null),(l()(),i.L(null,["\n    "])),(l()(),i.K(0,null,null,5,"nz-timepicker",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"]],function(l,n,u){var e=!0,t=l.component;if("ngModelChange"===n){e=!1!==(t._date=u)&&e}return e},o.a,o.b)),i.M(114688,null,0,d.a,[i._27],{nzSize:[0,"nzSize"]},null),i.R(1024,null,r.d,function(l){return[l]},[d.a]),i.M(671744,null,0,r.e,[[8,null],[8,null],[8,null],[2,r.d]],{model:[0,"model"]},{update:"ngModelChange"}),i.R(2048,null,r.f,null,[r.e]),i.M(16384,null,0,r.g,[r.f],null,null)],function(l,n){var u=n.component;l(n,2,0,"large"),l(n,4,0,u._date),l(n,9,0),l(n,11,0,u._date);l(n,16,0,"small"),l(n,18,0,u._date)},function(l,n){l(n,1,0,i.P(n,6).ngClassUntouched,i.P(n,6).ngClassTouched,i.P(n,6).ngClassPristine,i.P(n,6).ngClassDirty,i.P(n,6).ngClassValid,i.P(n,6).ngClassInvalid,i.P(n,6).ngClassPending),l(n,8,0,i.P(n,13).ngClassUntouched,i.P(n,13).ngClassTouched,i.P(n,13).ngClassPristine,i.P(n,13).ngClassDirty,i.P(n,13).ngClassValid,i.P(n,13).ngClassInvalid,i.P(n,13).ngClassPending),l(n,15,0,i.P(n,20).ngClassUntouched,i.P(n,20).ngClassTouched,i.P(n,20).ngClassPristine,i.P(n,20).ngClassDirty,i.P(n,20).ngClassValid,i.P(n,20).ngClassInvalid,i.P(n,20).ngClassPending)})}function t(l){return i.J(0,[(l()(),i.K(0,null,null,1,"nz-demo-timepicker-size",[],null,null,null,e,c)),i.M(114688,null,0,a.a,[],null,null)],function(l,n){l(n,1,0)},null)}var i=u("/oeL"),a=u("wBUR"),o=u("HeGQ"),d=u("11YQ"),r=u("bm2B");u.d(n,"b",function(){return c}),n.a=e;var s=[],c=i.I({encapsulation:2,styles:s,data:{}});i.Q("nz-demo-timepicker-size",a.a,t,{},{},[])},SYTb:function(l,n,u){"use strict";u.d(n,"a",function(){return e});var e=function(){function l(){this._date=new Date}return l.prototype.ngOnInit=function(){},l.ctorParameters=function(){return[]},l}()},VJUG:function(l,n,u){"use strict";function e(l){return i.J(0,[(l()(),i.L(null,["\n    "])),(l()(),i.K(0,null,null,5,"nz-timepicker",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"]],function(l,n,u){var e=!0,t=l.component;if("ngModelChange"===n){e=!1!==(t._date=u)&&e}return e},o.a,o.b)),i.M(114688,null,0,d.a,[i._27],{nzDisabledHours:[0,"nzDisabledHours"],nzDisabledMinutes:[1,"nzDisabledMinutes"]},null),i.R(1024,null,r.d,function(l){return[l]},[d.a]),i.M(671744,null,0,r.e,[[8,null],[8,null],[8,null],[2,r.d]],{model:[0,"model"]},{update:"ngModelChange"}),i.R(2048,null,r.f,null,[r.e]),i.M(16384,null,0,r.g,[r.f],null,null)],function(l,n){var u=n.component;l(n,2,0,u.disabledHours,u.disabledMinutes),l(n,4,0,u._date)},function(l,n){l(n,1,0,i.P(n,6).ngClassUntouched,i.P(n,6).ngClassTouched,i.P(n,6).ngClassPristine,i.P(n,6).ngClassDirty,i.P(n,6).ngClassValid,i.P(n,6).ngClassInvalid,i.P(n,6).ngClassPending)})}function t(l){return i.J(0,[(l()(),i.K(0,null,null,1,"nz-demo-timepicker-disabled-options",[],null,null,null,e,c)),i.M(114688,null,0,a.a,[],null,null)],function(l,n){l(n,1,0)},null)}var i=u("/oeL"),a=u("vTLO"),o=u("HeGQ"),d=u("11YQ"),r=u("bm2B");u.d(n,"b",function(){return c}),n.a=e;var s=[],c=i.I({encapsulation:2,styles:s,data:{}});i.Q("nz-demo-timepicker-disabled-options",a.a,t,{},{},[])},Vok5:function(l,n,u){"use strict";u.d(n,"a",function(){return e});var e=function(){function l(){this._date=null}return l.prototype.ngOnInit=function(){},l.ctorParameters=function(){return[]},l}()},W3fz:function(l,n,u){"use strict";u.d(n,"a",function(){return e});var e=function(){function l(){var l=this;this._date=null,this.newArray=function(l,n){for(var u=[],e=l;e<n;e++)u.push(e);return u},this.disabledHours=function(){var n=l.newArray(0,60);return n.splice(20,4),n},this.disabledMinutes=function(n){return 20===n?l.newArray(0,31):23===n?l.newArray(30,60):[]}}return l.prototype.ngOnInit=function(){},l.ctorParameters=function(){return[]},l}()},XwXP:function(l,n){l.exports='import { Component, OnInit } from \'@angular/core\';\n\n@Component({\n  selector: \'nz-demo-timepicker-size\',\n  template: `\n    <nz-timepicker [(ngModel)]="_date" [nzSize]="\'large\'"></nz-timepicker>\n    <nz-timepicker [(ngModel)]="_date"></nz-timepicker>\n    <nz-timepicker [(ngModel)]="_date" [nzSize]="\'small\'"></nz-timepicker>`,\n  styles  : []\n})\nexport class NzDemoTimePickerSizeComponent implements OnInit {\n  _date = new Date();\n\n  constructor() {\n  }\n\n  ngOnInit() {\n  }\n}\n\n'},bnav:function(l,n,u){"use strict";u.d(n,"a",function(){return e});var e=[""]},d4hb:function(l,n,u){"use strict";u.d(n,"a",function(){return e});var e=function(){function l(){this._date=null}return l.prototype._console=function(l){console.log(l)},l.prototype.ngOnInit=function(){},l.ctorParameters=function(){return[]},l}()},iW1p:function(l,n){l.exports="import { Component, OnInit } from '@angular/core';\n\n@Component({\n  selector: 'nz-demo-timepicker-change',\n  template: `\n    <nz-timepicker [(ngModel)]=\"_date\" (ngModelChange)=\"_console($event)\"></nz-timepicker>`,\n  styles  : []\n})\nexport class NzDemoTimePickerChangeComponent implements OnInit {\n  _date = null;\n\n  _console(value) {\n    console.log(value);\n  };\n\n  constructor() {\n  }\n\n  ngOnInit() {\n  }\n}\n\n"},jHWB:function(l,n){l.exports="import { Component, OnInit } from '@angular/core';\n\n@Component({\n  selector: 'nz-demo-timepicker-disabled',\n  template: `\n    <nz-timepicker [(ngModel)]=\"_date\" [nzDisabled]=\"true\"></nz-timepicker>`,\n  styles  : []\n})\nexport class NzDemoTimePickerDisabledComponent implements OnInit {\n  _date = new Date();\n\n  constructor() {\n  }\n\n  ngOnInit() {\n  }\n}\n\n"},mUxJ:function(l,n,u){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=u("/oeL"),t=u("qKJz"),i=u("4xir"),a=u("gNns"),o=u("VMe7"),d=u("ZjYu"),r=u("BRsn"),s=u("1w55"),c=u("tdcY"),m=u("qbdv"),g=u("bm2B"),p=u("p4Sk"),L=u("YtGb"),f=u("Bi2f"),z=u("6lGd"),h=u("Dj3/"),C=u("yK6y"),b=u("RaX4"),P=u("Fn2S"),K=u("7bMD"),M=u("71yQ"),v=u("jhj7"),k=u("4FjH"),D=u("BkNc"),y=u("QEoZ"),T=u("jlvU"),I=u("v3Ml"),O=u("KvRT"),_=u("fFfs"),H=u("x1IG"),x=u("AuvO"),w=u("ICnb"),N=u("nQgM"),R=u("AMM9"),S=u("Gb4R"),Q=u("ATGq"),J=u("rMvC"),A=u("x9cu"),B=u("PIhm"),G=u("G5xS"),V=u("tGoV"),U=u("Bd7q"),F=u("HbPf"),W=u("+dpF"),Y=u("t6og"),q=u("0oag"),j=u("0MmT"),Z=u("0SjK"),X=u("UWIb"),E=u("FP9i"),$=u("8zAG"),ll=u("OtIO"),nl=u("V5qy"),ul=u("BGFw"),el=u("qa79"),tl=u("DJ6J"),il=u("A6WS"),al=u("4I7f"),ol=u("LLhl"),dl=u("+35O"),rl=u("TRYS"),sl=u("NGUZ"),cl=u("Hjq/"),ml=u("Cjk6"),gl=u("6eTp"),pl=u("pORy"),Ll=u("aQzP"),fl=u("Pgvs"),zl=u("ZgIK"),hl=u("FVZt"),Cl=u("mQB5"),bl=u("9rok");u.d(n,"NzDemoTimePickerModuleNgFactory",function(){return Pl});var Pl=e.b(t.a,[],function(l){return e.c([e.d(512,e.e,e.f,[[8,[i.a,a.a,o.a,d.a,r.a,s.a,c.a]],[3,e.e],e.g]),e.d(4608,m.a,m.b,[e.h]),e.d(4608,g.a,g.a,[]),e.d(4608,p.a,p.a,[]),e.d(5120,L.a,L.b,[[3,L.a],e.q,p.a]),e.d(5120,f.a,f.b,[[3,f.a],L.a]),e.d(4608,z.a,z.a,[L.a,f.a]),e.d(5120,h.a,h.b,[[3,h.a]]),e.d(4608,C.a,C.a,[f.a]),e.d(4608,b.a,b.a,[z.a,h.a,e.e,C.a,e.t,e.u,e.q]),e.d(5120,P.a,P.b,[b.a,m.c,[3,P.a]]),e.d(4608,K.a,K.a,[]),e.d(4608,M.a,M.a,[e.t,e.e]),e.d(4608,v.a,v.a,[]),e.d(4608,p.b,p.b,[]),e.d(4608,k.a,k.a,[]),e.d(512,D.x,D.x,[[2,D.m],[2,D.c]]),e.d(512,y.a,y.a,[]),e.d(512,m.d,m.d,[]),e.d(512,T.a,T.a,[]),e.d(512,I.a,I.a,[]),e.d(512,O.a,O.a,[]),e.d(512,_.a,_.a,[]),e.d(512,g.b,g.b,[]),e.d(512,g.c,g.c,[]),e.d(512,p.c,p.c,[]),e.d(512,H.a,H.a,[]),e.d(512,x.a,x.a,[]),e.d(512,w.a,w.a,[]),e.d(512,N.a,N.a,[]),e.d(512,R.a,R.a,[]),e.d(512,S.a,S.a,[]),e.d(512,Q.a,Q.a,[]),e.d(512,J.a,J.a,[]),e.d(512,A.a,A.a,[]),e.d(512,B.a,B.a,[]),e.d(512,G.a,G.a,[]),e.d(512,V.a,V.a,[]),e.d(512,U.a,U.a,[]),e.d(512,F.a,F.a,[]),e.d(512,W.a,W.a,[]),e.d(512,Y.a,Y.a,[]),e.d(512,q.a,q.a,[]),e.d(512,j.a,j.a,[]),e.d(512,Z.a,Z.a,[]),e.d(512,X.a,X.a,[]),e.d(512,E.a,E.a,[]),e.d(512,$.a,$.a,[]),e.d(512,ll.a,ll.a,[]),e.d(512,nl.a,nl.a,[]),e.d(512,ul.a,ul.a,[]),e.d(512,el.a,el.a,[]),e.d(512,tl.a,tl.a,[]),e.d(512,p.d,p.d,[]),e.d(512,p.e,p.e,[]),e.d(512,il.a,il.a,[]),e.d(512,al.a,al.a,[]),e.d(512,ol.a,ol.a,[]),e.d(512,dl.a,dl.a,[]),e.d(512,rl.a,rl.a,[]),e.d(512,sl.a,sl.a,[]),e.d(512,cl.a,cl.a,[]),e.d(512,ml.a,ml.a,[]),e.d(512,gl.a,gl.a,[]),e.d(512,pl.a,pl.a,[]),e.d(512,Ll.a,Ll.a,[]),e.d(512,fl.a,fl.a,[]),e.d(512,zl.a,zl.a,[]),e.d(512,t.a,t.a,[]),e.d(1024,D.t,function(){return[[{path:"",component:hl.a}]]},[]),e.d(256,Cl.a,{nzDuration:1500,nzAnimate:!0,nzPauseOnHover:!0,nzMaxStack:7},[]),e.d(256,bl.a,{nzTop:"24px",nzRight:"0px",nzDuration:4500,nzMaxStack:7,nzPauseOnHover:!0,nzAnimate:!0},[])])})},q13i:function(l,n){l.exports="import { Component, OnInit } from '@angular/core';\n\n@Component({\n  selector: 'nz-demo-timepicker-without-seconds',\n  template: `\n    <nz-timepicker [(ngModel)]=\"_date\" [nzFormat]=\"'HH:mm'\"></nz-timepicker>`,\n  styles  : []\n})\nexport class NzDemoTimePickerWithoutSecondsComponent implements OnInit {\n  _date = new Date();\n\n  constructor() {\n  }\n\n  ngOnInit() {\n  }\n}\n\n"},qKJz:function(l,n,u){"use strict";u.d(n,"a",function(){return e});var e=function(){function l(){}return l}()},t2k4:function(l,n){l.exports='import { Component, OnInit } from \'@angular/core\';\n\n@Component({\n  selector: \'nz-demo-timepicker-disabled-options\',\n  template: `\n    <nz-timepicker [(ngModel)]="_date" [nzDisabledHours]="disabledHours" [nzDisabledMinutes]="disabledMinutes"></nz-timepicker>`,\n  styles  : []\n})\nexport class NzDemoTimePickerDisabledOptionsComponent implements OnInit {\n  _date = null;\n  newArray = (start, end) => {\n    const result = [];\n    for (let i = start; i < end; i++) {\n      result.push(i);\n    }\n    return result;\n  };\n  disabledHours = () => {\n    const hours = this.newArray(0, 60);\n    hours.splice(20, 4);\n    return hours;\n  };\n\n  disabledMinutes = (h) => {\n    if (h === 20) {\n      return this.newArray(0, 31);\n    } else if (h === 23) {\n      return this.newArray(30, 60);\n    }\n    return [];\n  };\n\n  constructor() {\n  }\n\n  ngOnInit() {\n  }\n}\n\n'},tWhe:function(l,n,u){"use strict";function e(l){return i.J(0,[(l()(),i.L(null,["\n    "])),(l()(),i.K(0,null,null,5,"nz-timepicker",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"]],function(l,n,u){var e=!0,t=l.component;if("ngModelChange"===n){e=!1!==(t._date=u)&&e}return e},o.a,o.b)),i.M(114688,null,0,d.a,[i._27],{nzFormat:[0,"nzFormat"]},null),i.R(1024,null,r.d,function(l){return[l]},[d.a]),i.M(671744,null,0,r.e,[[8,null],[8,null],[8,null],[2,r.d]],{model:[0,"model"]},{update:"ngModelChange"}),i.R(2048,null,r.f,null,[r.e]),i.M(16384,null,0,r.g,[r.f],null,null)],function(l,n){var u=n.component;l(n,2,0,"HH:mm"),l(n,4,0,u._date)},function(l,n){l(n,1,0,i.P(n,6).ngClassUntouched,i.P(n,6).ngClassTouched,i.P(n,6).ngClassPristine,i.P(n,6).ngClassDirty,i.P(n,6).ngClassValid,i.P(n,6).ngClassInvalid,i.P(n,6).ngClassPending)})}function t(l){return i.J(0,[(l()(),i.K(0,null,null,1,"nz-demo-timepicker-without-seconds",[],null,null,null,e,c)),i.M(114688,null,0,a.a,[],null,null)],function(l,n){l(n,1,0)},null)}var i=u("/oeL"),a=u("SYTb"),o=u("HeGQ"),d=u("11YQ"),r=u("bm2B");u.d(n,"b",function(){return c}),n.a=e;var s=[],c=i.I({encapsulation:2,styles:s,data:{}});i.Q("nz-demo-timepicker-without-seconds",a.a,t,{},{},[])},vTLO:function(l,n,u){"use strict";u.d(n,"a",function(){return e});var e=function(){function l(){var l=this;this._date=null,this.newArray=function(l,n){for(var u=[],e=l;e<n;e++)u.push(e);return u},this.disabledHours=function(){var n=l.newArray(0,60);return n.splice(20,4),n},this.disabledMinutes=function(n){return 20===n?l.newArray(0,31):23===n?l.newArray(30,60):[]}}return l.prototype.ngOnInit=function(){},l.ctorParameters=function(){return[]},l}()},wBUR:function(l,n,u){"use strict";u.d(n,"a",function(){return e});var e=function(){function l(){this._date=new Date}return l.prototype.ngOnInit=function(){},l.ctorParameters=function(){return[]},l}()}});