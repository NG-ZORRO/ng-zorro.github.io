"use strict";(self.webpackChunkng_zorro_antd=self.webpackChunkng_zorro_antd||[]).push([[4617],{44617:function(n,e,o){o.r(e),o.d(e,{ComponentsOverviewModule:function(){return y}});var t=o(95987),i=o(11959),r=o(48900),s=o(10340),c=o(38870),a=o(48095),p=o(31262),g=o(24061),l=o(82575),u=o(30742),h=o(26215),d=o(54395),f=o(36755),v=o(37716),m=o(38583),Z=o(16905);const z=["searchBox"];function w(n,e){1&n&&(v.TgZ(0,"p"),v.TgZ(1,"span"),v.TgZ(2,"code"),v._uU(3,"ng-zorro-antd"),v.qZA(),v.qZA(),v._uU(4," is an Angular UI lib, follow Ant Design specification, to provide high quantity UI components for web development. "),v.qZA())}function x(n,e){1&n&&(v.TgZ(0,"p"),v.TgZ(1,"span"),v.TgZ(2,"code"),v._uU(3,"ng-zorro-antd"),v.qZA(),v.qZA(),v._uU(4," \u662f Ant Design \u7684 Angular \u5b9e\u73b0\uff0c\u4e3a\u7f51\u9875\u5f00\u53d1\u63d0\u4f9b\u9ad8\u8d28\u91cf\u7684 UI \u7ec4\u4ef6\u3002 "),v.qZA())}function A(n,e){1&n&&v._UZ(0,"i",7)}function b(n,e){if(1&n&&(v.TgZ(0,"div",12),v.TgZ(1,"a",13),v.TgZ(2,"nz-card",14),v.TgZ(3,"div",15),v._UZ(4,"img",16),v.qZA(),v.qZA(),v.qZA(),v.qZA()),2&n){const n=e.$implicit,o=v.oxw(3);v.xp6(1),v.MGl("routerLink","/",n.path,""),v.xp6(1),v.hYB("nzTitle","",n.label," ","zh"===o.language?n.zh:"",""),v.xp6(2),v.Q6J("alt",n.label)("src",n.cover,v.LSH)}}function q(n,e){if(1&n&&(v.ynx(0),v.TgZ(1,"div",8),v.TgZ(2,"h3",9),v._uU(3),v.TgZ(4,"nz-tag"),v._uU(5),v.qZA(),v.qZA(),v.TgZ(6,"div",10),v.YNc(7,b,5,5,"div",11),v.qZA(),v.qZA(),v.BQk()),2&n){const n=v.oxw().$implicit;v.xp6(3),v.hij(" ",n.name," "),v.xp6(2),v.Oqu(n.children.length),v.xp6(2),v.Q6J("ngForOf",n.children)}}function T(n,e){if(1&n&&(v.ynx(0),v.YNc(1,q,8,3,"ng-container",1),v.BQk()),2&n){const n=e.$implicit,o=v.oxw();v.xp6(1),v.Q6J("ngIf",n.language===o.language&&n.children.length>0)}}let C=(()=>{class n{constructor(n,e){this.route=n,this.cdr=e,this.routerList=f.b,this.language="en",this.searchChange$=new h.X("")}ngOnInit(){this.route.url.subscribe(n=>{this.language=n[0].path,this.cdr.detectChanges()}),this.searchChange$.asObservable().pipe((0,d.b)(20)).subscribe(n=>{this.filterComponents(n)}),Promise.resolve().then(()=>{this.searchBox.nativeElement.focus()})}onSearch(n){this.searchChange$.next(n.toLowerCase())}filterComponents(n){if(this.routerList=JSON.parse(JSON.stringify(f.b)),n)for(const e of this.routerList.components)e.children=e.children.filter(e=>e.label.toLowerCase().includes(n)||e.zh.includes(n));this.cdr.detectChanges()}}return n.\u0275fac=function(e){return new(e||n)(v.Y36(t.gz),v.Y36(v.sBO))},n.\u0275cmp=v.Xpm({type:n,selectors:[["app-components-overview"]],viewQuery:function(n,e){if(1&n&&v.Gf(z,7),2&n){let n;v.iGM(n=v.CRH())&&(e.searchBox=n.first)}},decls:14,vars:6,consts:[[1,"markdown"],[4,"ngIf"],[1,"components-overview-search",3,"nzSuffix"],["type","text","nz-input","","nzSize","large",3,"placeholder","input"],["searchBox",""],["suffixIconSearch",""],[4,"ngFor","ngForOf"],["nz-icon","","nzType","search"],[1,"components-overview"],["nz-typography","",1,"components-overview-group-title"],["nz-row",""],["nz-col","","nzXs","24","nzSm","12","nzMd","12","nzLg","8","nzXl","6","nzXXl","6","class","components-overview-card",4,"ngFor","ngForOf"],["nz-col","","nzXs","24","nzSm","12","nzMd","12","nzLg","8","nzXl","6","nzXXl","6",1,"components-overview-card"],[3,"routerLink"],["nzHoverable","",3,"nzTitle"],[1,"components-overview-img"],[3,"alt","src"]],template:function(n,e){if(1&n){const n=v.EpF();v.TgZ(0,"section",0),v.TgZ(1,"h1"),v._uU(2),v.qZA(),v.TgZ(3,"section",0),v.YNc(4,w,5,0,"p",1),v.YNc(5,x,5,0,"p",1),v.qZA(),v._UZ(6,"nz-divider"),v.TgZ(7,"nz-input-group",2),v.TgZ(8,"input",3,4),v.NdJ("input",function(){v.CHM(n);const o=v.MAs(9);return e.onSearch(o.value)}),v.qZA(),v.qZA(),v.YNc(10,A,1,0,"ng-template",null,5,v.W1O),v._UZ(12,"nz-divider"),v.YNc(13,T,2,1,"ng-container",6),v.qZA()}if(2&n){const n=v.MAs(11);v.xp6(2),v.Oqu("en"===e.language?"Components Overview":"\u7ec4\u4ef6\u603b\u89c8"),v.xp6(2),v.Q6J("ngIf","en"===e.language),v.xp6(1),v.Q6J("ngIf","zh"===e.language),v.xp6(2),v.Q6J("nzSuffix",n),v.xp6(1),v.s9C("placeholder","en"===e.language?"Search in components":"\u641c\u7d22\u7ec4\u4ef6"),v.xp6(5),v.Q6J("ngForOf",e.routerList.components)}},directives:[m.O5,s.g,Z.w,p.gB,p.ke,p.Zp,m.sg,a.Ls,l.ZU,g.j,c.SK,c.t3,t.yS,r.bd],styles:[".components-overview{padding:0}.components-overview-group-title{margin-top:24px!important}.components-overview-img{display:flex;align-items:center;justify-content:center;height:152px}.components-overview-card{cursor:pointer;padding:12px}.components-overview-search{width:100%;padding:0;font-size:20px;border:0;box-shadow:none}.components-overview-search input{color:rgba(0,0,0,.85);font-size:20px}.components-overview-search .anticon{color:#bbb}\n"],encapsulation:2,changeDetection:0}),n})();const S=[r.vh,i.sL,g.X,c.Jb,l.ZJ,s.S,a.PV,p.o7];let y=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=v.oAB({type:n}),n.\u0275inj=v.cJS({imports:[[u.G,...S,t.Bz.forChild([{path:"**",component:C}])]]}),n})()}}]);