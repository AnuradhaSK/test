webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-bootstrap.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppBootstrapModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_dropdown__ = __webpack_require__("../../../../ngx-bootstrap/dropdown/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_tooltip__ = __webpack_require__("../../../../ngx-bootstrap/tooltip/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppBootstrapModule = /** @class */ (function () {
    function AppBootstrapModule() {
    }
    AppBootstrapModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_dropdown__["a" /* BsDropdownModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_tooltip__["a" /* TooltipModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__["a" /* ModalModule */].forRoot()
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_dropdown__["a" /* BsDropdownModule */], __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_tooltip__["a" /* TooltipModule */], __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__["a" /* ModalModule */]]
        })
    ], AppBootstrapModule);
    return AppBootstrapModule;
}());



/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_faq_faq_component__ = __webpack_require__("../../../../../src/app/components/faq/faq.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_nwalgo_nwalgo_component__ = __webpack_require__("../../../../../src/app/components/nwalgo/nwalgo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_swalgo_swalgo_component__ = __webpack_require__("../../../../../src/app/components/swalgo/swalgo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_tcoffee_tcoffee_component__ = __webpack_require__("../../../../../src/app/components/tcoffee/tcoffee.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_dialign_dialign_component__ = __webpack_require__("../../../../../src/app/components/dialign/dialign.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_2__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'faq', component: __WEBPACK_IMPORTED_MODULE_3__components_faq_faq_component__["a" /* FaqComponent */] },
    { path: 'home/nwalgo', component: __WEBPACK_IMPORTED_MODULE_4__components_nwalgo_nwalgo_component__["a" /* NwalgoComponent */] },
    { path: 'home/swalgo', component: __WEBPACK_IMPORTED_MODULE_5__components_swalgo_swalgo_component__["a" /* SwalgoComponent */] },
    { path: 'home/tcoffee', component: __WEBPACK_IMPORTED_MODULE_6__components_tcoffee_tcoffee_component__["a" /* TcoffeeComponent */] },
    { path: 'home/dialign', component: __WEBPACK_IMPORTED_MODULE_7__components_dialign_dialign_component__["a" /* DialignComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*!\n * Bootstrap v4.0.0 (https://getbootstrap.com)\n * Copyright 2011-2018 The Bootstrap Authors\n * Copyright 2011-2018 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n */:root{--blue:#007bff;--indigo:#6610f2;--purple:#6f42c1;--pink:#e83e8c;--red:#dc3545;--orange:#fd7e14;--yellow:#ffc107;--green:#28a745;--teal:#20c997;--cyan:#17a2b8;--white:#fff;--gray:#6c757d;--gray-dark:#343a40;--primary:#007bff;--secondary:#6c757d;--success:#28a745;--info:#17a2b8;--warning:#ffc107;--danger:#dc3545;--light:#f8f9fa;--dark:#343a40;--breakpoint-xs:0;--breakpoint-sm:576px;--breakpoint-md:768px;--breakpoint-lg:992px;--breakpoint-xl:1200px;--font-family-sans-serif:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\";--font-family-monospace:SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace}*,::after,::before{-webkit-box-sizing:border-box;box-sizing:border-box}html{font-family:sans-serif;line-height:1.15;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;-ms-overflow-style:scrollbar;-webkit-tap-highlight-color:transparent}@-ms-viewport{width:device-width}article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}body{margin:0;font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\";font-size:1rem;font-weight:400;line-height:1.5;color:#212529;text-align:left;background-color:#fff}[tabindex=\"-1\"]:focus{outline:0!important}hr{-webkit-box-sizing:content-box;box-sizing:content-box;height:0;overflow:visible}h1,h2,h3,h4,h5,h6{margin-top:0;margin-bottom:.5rem}p{margin-top:0;margin-bottom:1rem}abbr[data-original-title],abbr[title]{text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;cursor:help;border-bottom:0}address{margin-bottom:1rem;font-style:normal;line-height:inherit}dl,ol,ul{margin-top:0;margin-bottom:1rem}ol ol,ol ul,ul ol,ul ul{margin-bottom:0}dt{font-weight:700}dd{margin-bottom:.5rem;margin-left:0}blockquote{margin:0 0 1rem}dfn{font-style:italic}b,strong{font-weight:bolder}small{font-size:80%}sub,sup{position:relative;font-size:75%;line-height:0;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}a{color:#007bff;text-decoration:none;background-color:transparent;-webkit-text-decoration-skip:objects}a:hover{color:#0056b3;text-decoration:underline}a:not([href]):not([tabindex]){color:inherit;text-decoration:none}a:not([href]):not([tabindex]):focus,a:not([href]):not([tabindex]):hover{color:inherit;text-decoration:none}a:not([href]):not([tabindex]):focus{outline:0}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}pre{margin-top:0;margin-bottom:1rem;overflow:auto;-ms-overflow-style:scrollbar}figure{margin:0 0 1rem}img{vertical-align:middle;border-style:none}svg:not(:root){overflow:hidden}table{border-collapse:collapse}caption{padding-top:.75rem;padding-bottom:.75rem;color:#6c757d;text-align:left;caption-side:bottom}th{text-align:inherit}label{display:inline-block;margin-bottom:.5rem}button{border-radius:0}button:focus{outline:1px dotted;outline:5px auto -webkit-focus-ring-color}button,input,optgroup,select,textarea{margin:0;font-family:inherit;font-size:inherit;line-height:inherit}button,input{overflow:visible}button,select{text-transform:none}[type=reset],[type=submit],button,html [type=button]{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{padding:0;border-style:none}input[type=checkbox],input[type=radio]{-webkit-box-sizing:border-box;box-sizing:border-box;padding:0}input[type=date],input[type=datetime-local],input[type=month],input[type=time]{-webkit-appearance:listbox}textarea{overflow:auto;resize:vertical}fieldset{min-width:0;padding:0;margin:0;border:0}legend{display:block;width:100%;max-width:100%;padding:0;margin-bottom:.5rem;font-size:1.5rem;line-height:inherit;color:inherit;white-space:normal}progress{vertical-align:baseline}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{outline-offset:-2px;-webkit-appearance:none}[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{font:inherit;-webkit-appearance:button}output{display:inline-block}summary{display:list-item;cursor:pointer}template{display:none}[hidden]{display:none!important}.h1,.h2,.h3,.h4,.h5,.h6,h1,h2,h3,h4,h5,h6{margin-bottom:.5rem;font-family:inherit;font-weight:500;line-height:1.2;color:inherit}.h1,h1{font-size:2.5rem}.h2,h2{font-size:2rem}.h3,h3{font-size:1.75rem}.h4,h4{font-size:1.5rem}.h5,h5{font-size:1.25rem}.h6,h6{font-size:1rem}.lead{font-size:1.25rem;font-weight:300}.display-1{font-size:6rem;font-weight:300;line-height:1.2}.display-2{font-size:5.5rem;font-weight:300;line-height:1.2}.display-3{font-size:4.5rem;font-weight:300;line-height:1.2}.display-4{font-size:3.5rem;font-weight:300;line-height:1.2}hr{margin-top:1rem;margin-bottom:1rem;border:0;border-top:1px solid rgba(0,0,0,.1)}.small,small{font-size:80%;font-weight:400}.mark,mark{padding:.2em;background-color:#fcf8e3}.list-unstyled{padding-left:0;list-style:none}.list-inline{padding-left:0;list-style:none}.list-inline-item{display:inline-block}.list-inline-item:not(:last-child){margin-right:.5rem}.initialism{font-size:90%;text-transform:uppercase}.blockquote{margin-bottom:1rem;font-size:1.25rem}.blockquote-footer{display:block;font-size:80%;color:#6c757d}.blockquote-footer::before{content:\"\\2014   \\A0\"}.img-fluid{max-width:100%;height:auto}.img-thumbnail{padding:.25rem;background-color:#fff;border:1px solid #dee2e6;border-radius:.25rem;max-width:100%;height:auto}.figure{display:inline-block}.figure-img{margin-bottom:.5rem;line-height:1}.figure-caption{font-size:90%;color:#6c757d}code,kbd,pre,samp{font-family:SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace}code{font-size:87.5%;color:#e83e8c;word-break:break-word}a>code{color:inherit}kbd{padding:.2rem .4rem;font-size:87.5%;color:#fff;background-color:#212529;border-radius:.2rem}kbd kbd{padding:0;font-size:100%;font-weight:700}pre{display:block;font-size:87.5%;color:#212529}pre code{font-size:inherit;color:inherit;word-break:normal}.pre-scrollable{max-height:340px;overflow-y:scroll}.container{width:100%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}@media (min-width:576px){.container{max-width:540px}}@media (min-width:768px){.container{max-width:720px}}@media (min-width:992px){.container{max-width:960px}}@media (min-width:1200px){.container{max-width:1140px}}.container-fluid{width:100%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}.row{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-right:-15px;margin-left:-15px}.no-gutters{margin-right:0;margin-left:0}.no-gutters>.col,.no-gutters>[class*=col-]{padding-right:0;padding-left:0}.col,.col-1,.col-10,.col-11,.col-12,.col-2,.col-3,.col-4,.col-5,.col-6,.col-7,.col-8,.col-9,.col-auto,.col-lg,.col-lg-1,.col-lg-10,.col-lg-11,.col-lg-12,.col-lg-2,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9,.col-lg-auto,.col-md,.col-md-1,.col-md-10,.col-md-11,.col-md-12,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9,.col-md-auto,.col-sm,.col-sm-1,.col-sm-10,.col-sm-11,.col-sm-12,.col-sm-2,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9,.col-sm-auto,.col-xl,.col-xl-1,.col-xl-10,.col-xl-11,.col-xl-12,.col-xl-2,.col-xl-3,.col-xl-4,.col-xl-5,.col-xl-6,.col-xl-7,.col-xl-8,.col-xl-9,.col-xl-auto{position:relative;width:100%;min-height:1px;padding-right:15px;padding-left:15px}.col{-ms-flex-preferred-size:0;flex-basis:0;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;max-width:100%}.col-auto{-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;width:auto;max-width:none}.col-1{-webkit-box-flex:0;-ms-flex:0 0 8.333333%;flex:0 0 8.333333%;max-width:8.333333%}.col-2{-webkit-box-flex:0;-ms-flex:0 0 16.666667%;flex:0 0 16.666667%;max-width:16.666667%}.col-3{-webkit-box-flex:0;-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.col-4{-webkit-box-flex:0;-ms-flex:0 0 33.333333%;flex:0 0 33.333333%;max-width:33.333333%}.col-5{-webkit-box-flex:0;-ms-flex:0 0 41.666667%;flex:0 0 41.666667%;max-width:41.666667%}.col-6{-webkit-box-flex:0;-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.col-7{-webkit-box-flex:0;-ms-flex:0 0 58.333333%;flex:0 0 58.333333%;max-width:58.333333%}.col-8{-webkit-box-flex:0;-ms-flex:0 0 66.666667%;flex:0 0 66.666667%;max-width:66.666667%}.col-9{-webkit-box-flex:0;-ms-flex:0 0 75%;flex:0 0 75%;max-width:75%}.col-10{-webkit-box-flex:0;-ms-flex:0 0 83.333333%;flex:0 0 83.333333%;max-width:83.333333%}.col-11{-webkit-box-flex:0;-ms-flex:0 0 91.666667%;flex:0 0 91.666667%;max-width:91.666667%}.col-12{-webkit-box-flex:0;-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}.order-first{-webkit-box-ordinal-group:0;-ms-flex-order:-1;order:-1}.order-last{-webkit-box-ordinal-group:14;-ms-flex-order:13;order:13}.order-0{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0}.order-1{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1}.order-2{-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2}.order-3{-webkit-box-ordinal-group:4;-ms-flex-order:3;order:3}.order-4{-webkit-box-ordinal-group:5;-ms-flex-order:4;order:4}.order-5{-webkit-box-ordinal-group:6;-ms-flex-order:5;order:5}.order-6{-webkit-box-ordinal-group:7;-ms-flex-order:6;order:6}.order-7{-webkit-box-ordinal-group:8;-ms-flex-order:7;order:7}.order-8{-webkit-box-ordinal-group:9;-ms-flex-order:8;order:8}.order-9{-webkit-box-ordinal-group:10;-ms-flex-order:9;order:9}.order-10{-webkit-box-ordinal-group:11;-ms-flex-order:10;order:10}.order-11{-webkit-box-ordinal-group:12;-ms-flex-order:11;order:11}.order-12{-webkit-box-ordinal-group:13;-ms-flex-order:12;order:12}.offset-1{margin-left:8.333333%}.offset-2{margin-left:16.666667%}.offset-3{margin-left:25%}.offset-4{margin-left:33.333333%}.offset-5{margin-left:41.666667%}.offset-6{margin-left:50%}.offset-7{margin-left:58.333333%}.offset-8{margin-left:66.666667%}.offset-9{margin-left:75%}.offset-10{margin-left:83.333333%}.offset-11{margin-left:91.666667%}@media (min-width:576px){.col-sm{-ms-flex-preferred-size:0;flex-basis:0;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;max-width:100%}.col-sm-auto{-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;width:auto;max-width:none}.col-sm-1{-webkit-box-flex:0;-ms-flex:0 0 8.333333%;flex:0 0 8.333333%;max-width:8.333333%}.col-sm-2{-webkit-box-flex:0;-ms-flex:0 0 16.666667%;flex:0 0 16.666667%;max-width:16.666667%}.col-sm-3{-webkit-box-flex:0;-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.col-sm-4{-webkit-box-flex:0;-ms-flex:0 0 33.333333%;flex:0 0 33.333333%;max-width:33.333333%}.col-sm-5{-webkit-box-flex:0;-ms-flex:0 0 41.666667%;flex:0 0 41.666667%;max-width:41.666667%}.col-sm-6{-webkit-box-flex:0;-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.col-sm-7{-webkit-box-flex:0;-ms-flex:0 0 58.333333%;flex:0 0 58.333333%;max-width:58.333333%}.col-sm-8{-webkit-box-flex:0;-ms-flex:0 0 66.666667%;flex:0 0 66.666667%;max-width:66.666667%}.col-sm-9{-webkit-box-flex:0;-ms-flex:0 0 75%;flex:0 0 75%;max-width:75%}.col-sm-10{-webkit-box-flex:0;-ms-flex:0 0 83.333333%;flex:0 0 83.333333%;max-width:83.333333%}.col-sm-11{-webkit-box-flex:0;-ms-flex:0 0 91.666667%;flex:0 0 91.666667%;max-width:91.666667%}.col-sm-12{-webkit-box-flex:0;-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}.order-sm-first{-webkit-box-ordinal-group:0;-ms-flex-order:-1;order:-1}.order-sm-last{-webkit-box-ordinal-group:14;-ms-flex-order:13;order:13}.order-sm-0{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0}.order-sm-1{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1}.order-sm-2{-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2}.order-sm-3{-webkit-box-ordinal-group:4;-ms-flex-order:3;order:3}.order-sm-4{-webkit-box-ordinal-group:5;-ms-flex-order:4;order:4}.order-sm-5{-webkit-box-ordinal-group:6;-ms-flex-order:5;order:5}.order-sm-6{-webkit-box-ordinal-group:7;-ms-flex-order:6;order:6}.order-sm-7{-webkit-box-ordinal-group:8;-ms-flex-order:7;order:7}.order-sm-8{-webkit-box-ordinal-group:9;-ms-flex-order:8;order:8}.order-sm-9{-webkit-box-ordinal-group:10;-ms-flex-order:9;order:9}.order-sm-10{-webkit-box-ordinal-group:11;-ms-flex-order:10;order:10}.order-sm-11{-webkit-box-ordinal-group:12;-ms-flex-order:11;order:11}.order-sm-12{-webkit-box-ordinal-group:13;-ms-flex-order:12;order:12}.offset-sm-0{margin-left:0}.offset-sm-1{margin-left:8.333333%}.offset-sm-2{margin-left:16.666667%}.offset-sm-3{margin-left:25%}.offset-sm-4{margin-left:33.333333%}.offset-sm-5{margin-left:41.666667%}.offset-sm-6{margin-left:50%}.offset-sm-7{margin-left:58.333333%}.offset-sm-8{margin-left:66.666667%}.offset-sm-9{margin-left:75%}.offset-sm-10{margin-left:83.333333%}.offset-sm-11{margin-left:91.666667%}}@media (min-width:768px){.col-md{-ms-flex-preferred-size:0;flex-basis:0;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;max-width:100%}.col-md-auto{-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;width:auto;max-width:none}.col-md-1{-webkit-box-flex:0;-ms-flex:0 0 8.333333%;flex:0 0 8.333333%;max-width:8.333333%}.col-md-2{-webkit-box-flex:0;-ms-flex:0 0 16.666667%;flex:0 0 16.666667%;max-width:16.666667%}.col-md-3{-webkit-box-flex:0;-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.col-md-4{-webkit-box-flex:0;-ms-flex:0 0 33.333333%;flex:0 0 33.333333%;max-width:33.333333%}.col-md-5{-webkit-box-flex:0;-ms-flex:0 0 41.666667%;flex:0 0 41.666667%;max-width:41.666667%}.col-md-6{-webkit-box-flex:0;-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.col-md-7{-webkit-box-flex:0;-ms-flex:0 0 58.333333%;flex:0 0 58.333333%;max-width:58.333333%}.col-md-8{-webkit-box-flex:0;-ms-flex:0 0 66.666667%;flex:0 0 66.666667%;max-width:66.666667%}.col-md-9{-webkit-box-flex:0;-ms-flex:0 0 75%;flex:0 0 75%;max-width:75%}.col-md-10{-webkit-box-flex:0;-ms-flex:0 0 83.333333%;flex:0 0 83.333333%;max-width:83.333333%}.col-md-11{-webkit-box-flex:0;-ms-flex:0 0 91.666667%;flex:0 0 91.666667%;max-width:91.666667%}.col-md-12{-webkit-box-flex:0;-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}.order-md-first{-webkit-box-ordinal-group:0;-ms-flex-order:-1;order:-1}.order-md-last{-webkit-box-ordinal-group:14;-ms-flex-order:13;order:13}.order-md-0{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0}.order-md-1{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1}.order-md-2{-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2}.order-md-3{-webkit-box-ordinal-group:4;-ms-flex-order:3;order:3}.order-md-4{-webkit-box-ordinal-group:5;-ms-flex-order:4;order:4}.order-md-5{-webkit-box-ordinal-group:6;-ms-flex-order:5;order:5}.order-md-6{-webkit-box-ordinal-group:7;-ms-flex-order:6;order:6}.order-md-7{-webkit-box-ordinal-group:8;-ms-flex-order:7;order:7}.order-md-8{-webkit-box-ordinal-group:9;-ms-flex-order:8;order:8}.order-md-9{-webkit-box-ordinal-group:10;-ms-flex-order:9;order:9}.order-md-10{-webkit-box-ordinal-group:11;-ms-flex-order:10;order:10}.order-md-11{-webkit-box-ordinal-group:12;-ms-flex-order:11;order:11}.order-md-12{-webkit-box-ordinal-group:13;-ms-flex-order:12;order:12}.offset-md-0{margin-left:0}.offset-md-1{margin-left:8.333333%}.offset-md-2{margin-left:16.666667%}.offset-md-3{margin-left:25%}.offset-md-4{margin-left:33.333333%}.offset-md-5{margin-left:41.666667%}.offset-md-6{margin-left:50%}.offset-md-7{margin-left:58.333333%}.offset-md-8{margin-left:66.666667%}.offset-md-9{margin-left:75%}.offset-md-10{margin-left:83.333333%}.offset-md-11{margin-left:91.666667%}}@media (min-width:992px){.col-lg{-ms-flex-preferred-size:0;flex-basis:0;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;max-width:100%}.col-lg-auto{-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;width:auto;max-width:none}.col-lg-1{-webkit-box-flex:0;-ms-flex:0 0 8.333333%;flex:0 0 8.333333%;max-width:8.333333%}.col-lg-2{-webkit-box-flex:0;-ms-flex:0 0 16.666667%;flex:0 0 16.666667%;max-width:16.666667%}.col-lg-3{-webkit-box-flex:0;-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.col-lg-4{-webkit-box-flex:0;-ms-flex:0 0 33.333333%;flex:0 0 33.333333%;max-width:33.333333%}.col-lg-5{-webkit-box-flex:0;-ms-flex:0 0 41.666667%;flex:0 0 41.666667%;max-width:41.666667%}.col-lg-6{-webkit-box-flex:0;-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.col-lg-7{-webkit-box-flex:0;-ms-flex:0 0 58.333333%;flex:0 0 58.333333%;max-width:58.333333%}.col-lg-8{-webkit-box-flex:0;-ms-flex:0 0 66.666667%;flex:0 0 66.666667%;max-width:66.666667%}.col-lg-9{-webkit-box-flex:0;-ms-flex:0 0 75%;flex:0 0 75%;max-width:75%}.col-lg-10{-webkit-box-flex:0;-ms-flex:0 0 83.333333%;flex:0 0 83.333333%;max-width:83.333333%}.col-lg-11{-webkit-box-flex:0;-ms-flex:0 0 91.666667%;flex:0 0 91.666667%;max-width:91.666667%}.col-lg-12{-webkit-box-flex:0;-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}.order-lg-first{-webkit-box-ordinal-group:0;-ms-flex-order:-1;order:-1}.order-lg-last{-webkit-box-ordinal-group:14;-ms-flex-order:13;order:13}.order-lg-0{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0}.order-lg-1{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1}.order-lg-2{-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2}.order-lg-3{-webkit-box-ordinal-group:4;-ms-flex-order:3;order:3}.order-lg-4{-webkit-box-ordinal-group:5;-ms-flex-order:4;order:4}.order-lg-5{-webkit-box-ordinal-group:6;-ms-flex-order:5;order:5}.order-lg-6{-webkit-box-ordinal-group:7;-ms-flex-order:6;order:6}.order-lg-7{-webkit-box-ordinal-group:8;-ms-flex-order:7;order:7}.order-lg-8{-webkit-box-ordinal-group:9;-ms-flex-order:8;order:8}.order-lg-9{-webkit-box-ordinal-group:10;-ms-flex-order:9;order:9}.order-lg-10{-webkit-box-ordinal-group:11;-ms-flex-order:10;order:10}.order-lg-11{-webkit-box-ordinal-group:12;-ms-flex-order:11;order:11}.order-lg-12{-webkit-box-ordinal-group:13;-ms-flex-order:12;order:12}.offset-lg-0{margin-left:0}.offset-lg-1{margin-left:8.333333%}.offset-lg-2{margin-left:16.666667%}.offset-lg-3{margin-left:25%}.offset-lg-4{margin-left:33.333333%}.offset-lg-5{margin-left:41.666667%}.offset-lg-6{margin-left:50%}.offset-lg-7{margin-left:58.333333%}.offset-lg-8{margin-left:66.666667%}.offset-lg-9{margin-left:75%}.offset-lg-10{margin-left:83.333333%}.offset-lg-11{margin-left:91.666667%}}@media (min-width:1200px){.col-xl{-ms-flex-preferred-size:0;flex-basis:0;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;max-width:100%}.col-xl-auto{-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;width:auto;max-width:none}.col-xl-1{-webkit-box-flex:0;-ms-flex:0 0 8.333333%;flex:0 0 8.333333%;max-width:8.333333%}.col-xl-2{-webkit-box-flex:0;-ms-flex:0 0 16.666667%;flex:0 0 16.666667%;max-width:16.666667%}.col-xl-3{-webkit-box-flex:0;-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.col-xl-4{-webkit-box-flex:0;-ms-flex:0 0 33.333333%;flex:0 0 33.333333%;max-width:33.333333%}.col-xl-5{-webkit-box-flex:0;-ms-flex:0 0 41.666667%;flex:0 0 41.666667%;max-width:41.666667%}.col-xl-6{-webkit-box-flex:0;-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.col-xl-7{-webkit-box-flex:0;-ms-flex:0 0 58.333333%;flex:0 0 58.333333%;max-width:58.333333%}.col-xl-8{-webkit-box-flex:0;-ms-flex:0 0 66.666667%;flex:0 0 66.666667%;max-width:66.666667%}.col-xl-9{-webkit-box-flex:0;-ms-flex:0 0 75%;flex:0 0 75%;max-width:75%}.col-xl-10{-webkit-box-flex:0;-ms-flex:0 0 83.333333%;flex:0 0 83.333333%;max-width:83.333333%}.col-xl-11{-webkit-box-flex:0;-ms-flex:0 0 91.666667%;flex:0 0 91.666667%;max-width:91.666667%}.col-xl-12{-webkit-box-flex:0;-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}.order-xl-first{-webkit-box-ordinal-group:0;-ms-flex-order:-1;order:-1}.order-xl-last{-webkit-box-ordinal-group:14;-ms-flex-order:13;order:13}.order-xl-0{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0}.order-xl-1{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1}.order-xl-2{-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2}.order-xl-3{-webkit-box-ordinal-group:4;-ms-flex-order:3;order:3}.order-xl-4{-webkit-box-ordinal-group:5;-ms-flex-order:4;order:4}.order-xl-5{-webkit-box-ordinal-group:6;-ms-flex-order:5;order:5}.order-xl-6{-webkit-box-ordinal-group:7;-ms-flex-order:6;order:6}.order-xl-7{-webkit-box-ordinal-group:8;-ms-flex-order:7;order:7}.order-xl-8{-webkit-box-ordinal-group:9;-ms-flex-order:8;order:8}.order-xl-9{-webkit-box-ordinal-group:10;-ms-flex-order:9;order:9}.order-xl-10{-webkit-box-ordinal-group:11;-ms-flex-order:10;order:10}.order-xl-11{-webkit-box-ordinal-group:12;-ms-flex-order:11;order:11}.order-xl-12{-webkit-box-ordinal-group:13;-ms-flex-order:12;order:12}.offset-xl-0{margin-left:0}.offset-xl-1{margin-left:8.333333%}.offset-xl-2{margin-left:16.666667%}.offset-xl-3{margin-left:25%}.offset-xl-4{margin-left:33.333333%}.offset-xl-5{margin-left:41.666667%}.offset-xl-6{margin-left:50%}.offset-xl-7{margin-left:58.333333%}.offset-xl-8{margin-left:66.666667%}.offset-xl-9{margin-left:75%}.offset-xl-10{margin-left:83.333333%}.offset-xl-11{margin-left:91.666667%}}.table{width:100%;max-width:100%;margin-bottom:1rem;background-color:transparent}.table td,.table th{padding:.75rem;vertical-align:top;border-top:1px solid #dee2e6}.table thead th{vertical-align:bottom;border-bottom:2px solid #dee2e6}.table tbody+tbody{border-top:2px solid #dee2e6}.table .table{background-color:#fff}.table-sm td,.table-sm th{padding:.3rem}.table-bordered{border:1px solid #dee2e6}.table-bordered td,.table-bordered th{border:1px solid #dee2e6}.table-bordered thead td,.table-bordered thead th{border-bottom-width:2px}.table-striped tbody tr:nth-of-type(odd){background-color:rgba(0,0,0,.05)}.table-hover tbody tr:hover{background-color:rgba(0,0,0,.075)}.table-primary,.table-primary>td,.table-primary>th{background-color:#b8daff}.table-hover .table-primary:hover{background-color:#9fcdff}.table-hover .table-primary:hover>td,.table-hover .table-primary:hover>th{background-color:#9fcdff}.table-secondary,.table-secondary>td,.table-secondary>th{background-color:#d6d8db}.table-hover .table-secondary:hover{background-color:#c8cbcf}.table-hover .table-secondary:hover>td,.table-hover .table-secondary:hover>th{background-color:#c8cbcf}.table-success,.table-success>td,.table-success>th{background-color:#c3e6cb}.table-hover .table-success:hover{background-color:#b1dfbb}.table-hover .table-success:hover>td,.table-hover .table-success:hover>th{background-color:#b1dfbb}.table-info,.table-info>td,.table-info>th{background-color:#bee5eb}.table-hover .table-info:hover{background-color:#abdde5}.table-hover .table-info:hover>td,.table-hover .table-info:hover>th{background-color:#abdde5}.table-warning,.table-warning>td,.table-warning>th{background-color:#ffeeba}.table-hover .table-warning:hover{background-color:#ffe8a1}.table-hover .table-warning:hover>td,.table-hover .table-warning:hover>th{background-color:#ffe8a1}.table-danger,.table-danger>td,.table-danger>th{background-color:#f5c6cb}.table-hover .table-danger:hover{background-color:#f1b0b7}.table-hover .table-danger:hover>td,.table-hover .table-danger:hover>th{background-color:#f1b0b7}.table-light,.table-light>td,.table-light>th{background-color:#fdfdfe}.table-hover .table-light:hover{background-color:#ececf6}.table-hover .table-light:hover>td,.table-hover .table-light:hover>th{background-color:#ececf6}.table-dark,.table-dark>td,.table-dark>th{background-color:#c6c8ca}.table-hover .table-dark:hover{background-color:#b9bbbe}.table-hover .table-dark:hover>td,.table-hover .table-dark:hover>th{background-color:#b9bbbe}.table-active,.table-active>td,.table-active>th{background-color:rgba(0,0,0,.075)}.table-hover .table-active:hover{background-color:rgba(0,0,0,.075)}.table-hover .table-active:hover>td,.table-hover .table-active:hover>th{background-color:rgba(0,0,0,.075)}.table .thead-dark th{color:#fff;background-color:#212529;border-color:#32383e}.table .thead-light th{color:#495057;background-color:#e9ecef;border-color:#dee2e6}.table-dark{color:#fff;background-color:#212529}.table-dark td,.table-dark th,.table-dark thead th{border-color:#32383e}.table-dark.table-bordered{border:0}.table-dark.table-striped tbody tr:nth-of-type(odd){background-color:rgba(255,255,255,.05)}.table-dark.table-hover tbody tr:hover{background-color:rgba(255,255,255,.075)}@media (max-width:575.98px){.table-responsive-sm{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch;-ms-overflow-style:-ms-autohiding-scrollbar}.table-responsive-sm>.table-bordered{border:0}}@media (max-width:767.98px){.table-responsive-md{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch;-ms-overflow-style:-ms-autohiding-scrollbar}.table-responsive-md>.table-bordered{border:0}}@media (max-width:991.98px){.table-responsive-lg{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch;-ms-overflow-style:-ms-autohiding-scrollbar}.table-responsive-lg>.table-bordered{border:0}}@media (max-width:1199.98px){.table-responsive-xl{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch;-ms-overflow-style:-ms-autohiding-scrollbar}.table-responsive-xl>.table-bordered{border:0}}.table-responsive{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch;-ms-overflow-style:-ms-autohiding-scrollbar}.table-responsive>.table-bordered{border:0}.form-control{display:block;width:100%;padding:.375rem .75rem;font-size:1rem;line-height:1.5;color:#495057;background-color:#fff;background-clip:padding-box;border:1px solid #ced4da;border-radius:.25rem;-webkit-transition:border-color .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;transition:border-color .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out,-webkit-box-shadow .15s ease-in-out}.form-control::-ms-expand{background-color:transparent;border:0}.form-control:focus{color:#495057;background-color:#fff;border-color:#80bdff;outline:0;-webkit-box-shadow:0 0 0 .2rem rgba(0,123,255,.25);box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}.form-control::-webkit-input-placeholder{color:#6c757d;opacity:1}.form-control:-ms-input-placeholder{color:#6c757d;opacity:1}.form-control::-ms-input-placeholder{color:#6c757d;opacity:1}.form-control::placeholder{color:#6c757d;opacity:1}.form-control:disabled,.form-control[readonly]{background-color:#e9ecef;opacity:1}select.form-control:not([size]):not([multiple]){height:calc(2.25rem + 2px)}select.form-control:focus::-ms-value{color:#495057;background-color:#fff}.form-control-file,.form-control-range{display:block;width:100%}.col-form-label{padding-top:calc(.375rem + 1px);padding-bottom:calc(.375rem + 1px);margin-bottom:0;font-size:inherit;line-height:1.5}.col-form-label-lg{padding-top:calc(.5rem + 1px);padding-bottom:calc(.5rem + 1px);font-size:1.25rem;line-height:1.5}.col-form-label-sm{padding-top:calc(.25rem + 1px);padding-bottom:calc(.25rem + 1px);font-size:.875rem;line-height:1.5}.form-control-plaintext{display:block;width:100%;padding-top:.375rem;padding-bottom:.375rem;margin-bottom:0;line-height:1.5;background-color:transparent;border:solid transparent;border-width:1px 0}.form-control-plaintext.form-control-lg,.form-control-plaintext.form-control-sm,.input-group-lg>.form-control-plaintext.form-control,.input-group-lg>.input-group-append>.form-control-plaintext.btn,.input-group-lg>.input-group-append>.form-control-plaintext.input-group-text,.input-group-lg>.input-group-prepend>.form-control-plaintext.btn,.input-group-lg>.input-group-prepend>.form-control-plaintext.input-group-text,.input-group-sm>.form-control-plaintext.form-control,.input-group-sm>.input-group-append>.form-control-plaintext.btn,.input-group-sm>.input-group-append>.form-control-plaintext.input-group-text,.input-group-sm>.input-group-prepend>.form-control-plaintext.btn,.input-group-sm>.input-group-prepend>.form-control-plaintext.input-group-text{padding-right:0;padding-left:0}.form-control-sm,.input-group-sm>.form-control,.input-group-sm>.input-group-append>.btn,.input-group-sm>.input-group-append>.input-group-text,.input-group-sm>.input-group-prepend>.btn,.input-group-sm>.input-group-prepend>.input-group-text{padding:.25rem .5rem;font-size:.875rem;line-height:1.5;border-radius:.2rem}.input-group-sm>.input-group-append>select.btn:not([size]):not([multiple]),.input-group-sm>.input-group-append>select.input-group-text:not([size]):not([multiple]),.input-group-sm>.input-group-prepend>select.btn:not([size]):not([multiple]),.input-group-sm>.input-group-prepend>select.input-group-text:not([size]):not([multiple]),.input-group-sm>select.form-control:not([size]):not([multiple]),select.form-control-sm:not([size]):not([multiple]){height:calc(1.8125rem + 2px)}.form-control-lg,.input-group-lg>.form-control,.input-group-lg>.input-group-append>.btn,.input-group-lg>.input-group-append>.input-group-text,.input-group-lg>.input-group-prepend>.btn,.input-group-lg>.input-group-prepend>.input-group-text{padding:.5rem 1rem;font-size:1.25rem;line-height:1.5;border-radius:.3rem}.input-group-lg>.input-group-append>select.btn:not([size]):not([multiple]),.input-group-lg>.input-group-append>select.input-group-text:not([size]):not([multiple]),.input-group-lg>.input-group-prepend>select.btn:not([size]):not([multiple]),.input-group-lg>.input-group-prepend>select.input-group-text:not([size]):not([multiple]),.input-group-lg>select.form-control:not([size]):not([multiple]),select.form-control-lg:not([size]):not([multiple]){height:calc(2.875rem + 2px)}.form-group{margin-bottom:1rem}.form-text{display:block;margin-top:.25rem}.form-row{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-right:-5px;margin-left:-5px}.form-row>.col,.form-row>[class*=col-]{padding-right:5px;padding-left:5px}.form-check{position:relative;display:block;padding-left:1.25rem}.form-check-input{position:absolute;margin-top:.3rem;margin-left:-1.25rem}.form-check-input:disabled~.form-check-label{color:#6c757d}.form-check-label{margin-bottom:0}.form-check-inline{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding-left:0;margin-right:.75rem}.form-check-inline .form-check-input{position:static;margin-top:0;margin-right:.3125rem;margin-left:0}.valid-feedback{display:none;width:100%;margin-top:.25rem;font-size:80%;color:#28a745}.valid-tooltip{position:absolute;top:100%;z-index:5;display:none;max-width:100%;padding:.5rem;margin-top:.1rem;font-size:.875rem;line-height:1;color:#fff;background-color:rgba(40,167,69,.8);border-radius:.2rem}.custom-select.is-valid,.form-control.is-valid,.was-validated .custom-select:valid,.was-validated .form-control:valid{border-color:#28a745}.custom-select.is-valid:focus,.form-control.is-valid:focus,.was-validated .custom-select:valid:focus,.was-validated .form-control:valid:focus{border-color:#28a745;-webkit-box-shadow:0 0 0 .2rem rgba(40,167,69,.25);box-shadow:0 0 0 .2rem rgba(40,167,69,.25)}.custom-select.is-valid~.valid-feedback,.custom-select.is-valid~.valid-tooltip,.form-control.is-valid~.valid-feedback,.form-control.is-valid~.valid-tooltip,.was-validated .custom-select:valid~.valid-feedback,.was-validated .custom-select:valid~.valid-tooltip,.was-validated .form-control:valid~.valid-feedback,.was-validated .form-control:valid~.valid-tooltip{display:block}.form-check-input.is-valid~.form-check-label,.was-validated .form-check-input:valid~.form-check-label{color:#28a745}.form-check-input.is-valid~.valid-feedback,.form-check-input.is-valid~.valid-tooltip,.was-validated .form-check-input:valid~.valid-feedback,.was-validated .form-check-input:valid~.valid-tooltip{display:block}.custom-control-input.is-valid~.custom-control-label,.was-validated .custom-control-input:valid~.custom-control-label{color:#28a745}.custom-control-input.is-valid~.custom-control-label::before,.was-validated .custom-control-input:valid~.custom-control-label::before{background-color:#71dd8a}.custom-control-input.is-valid~.valid-feedback,.custom-control-input.is-valid~.valid-tooltip,.was-validated .custom-control-input:valid~.valid-feedback,.was-validated .custom-control-input:valid~.valid-tooltip{display:block}.custom-control-input.is-valid:checked~.custom-control-label::before,.was-validated .custom-control-input:valid:checked~.custom-control-label::before{background-color:#34ce57}.custom-control-input.is-valid:focus~.custom-control-label::before,.was-validated .custom-control-input:valid:focus~.custom-control-label::before{-webkit-box-shadow:0 0 0 1px #fff,0 0 0 .2rem rgba(40,167,69,.25);box-shadow:0 0 0 1px #fff,0 0 0 .2rem rgba(40,167,69,.25)}.custom-file-input.is-valid~.custom-file-label,.was-validated .custom-file-input:valid~.custom-file-label{border-color:#28a745}.custom-file-input.is-valid~.custom-file-label::before,.was-validated .custom-file-input:valid~.custom-file-label::before{border-color:inherit}.custom-file-input.is-valid~.valid-feedback,.custom-file-input.is-valid~.valid-tooltip,.was-validated .custom-file-input:valid~.valid-feedback,.was-validated .custom-file-input:valid~.valid-tooltip{display:block}.custom-file-input.is-valid:focus~.custom-file-label,.was-validated .custom-file-input:valid:focus~.custom-file-label{-webkit-box-shadow:0 0 0 .2rem rgba(40,167,69,.25);box-shadow:0 0 0 .2rem rgba(40,167,69,.25)}.invalid-feedback{display:none;width:100%;margin-top:.25rem;font-size:80%;color:#dc3545}.invalid-tooltip{position:absolute;top:100%;z-index:5;display:none;max-width:100%;padding:.5rem;margin-top:.1rem;font-size:.875rem;line-height:1;color:#fff;background-color:rgba(220,53,69,.8);border-radius:.2rem}.custom-select.is-invalid,.form-control.is-invalid,.was-validated .custom-select:invalid,.was-validated .form-control:invalid{border-color:#dc3545}.custom-select.is-invalid:focus,.form-control.is-invalid:focus,.was-validated .custom-select:invalid:focus,.was-validated .form-control:invalid:focus{border-color:#dc3545;-webkit-box-shadow:0 0 0 .2rem rgba(220,53,69,.25);box-shadow:0 0 0 .2rem rgba(220,53,69,.25)}.custom-select.is-invalid~.invalid-feedback,.custom-select.is-invalid~.invalid-tooltip,.form-control.is-invalid~.invalid-feedback,.form-control.is-invalid~.invalid-tooltip,.was-validated .custom-select:invalid~.invalid-feedback,.was-validated .custom-select:invalid~.invalid-tooltip,.was-validated .form-control:invalid~.invalid-feedback,.was-validated .form-control:invalid~.invalid-tooltip{display:block}.form-check-input.is-invalid~.form-check-label,.was-validated .form-check-input:invalid~.form-check-label{color:#dc3545}.form-check-input.is-invalid~.invalid-feedback,.form-check-input.is-invalid~.invalid-tooltip,.was-validated .form-check-input:invalid~.invalid-feedback,.was-validated .form-check-input:invalid~.invalid-tooltip{display:block}.custom-control-input.is-invalid~.custom-control-label,.was-validated .custom-control-input:invalid~.custom-control-label{color:#dc3545}.custom-control-input.is-invalid~.custom-control-label::before,.was-validated .custom-control-input:invalid~.custom-control-label::before{background-color:#efa2a9}.custom-control-input.is-invalid~.invalid-feedback,.custom-control-input.is-invalid~.invalid-tooltip,.was-validated .custom-control-input:invalid~.invalid-feedback,.was-validated .custom-control-input:invalid~.invalid-tooltip{display:block}.custom-control-input.is-invalid:checked~.custom-control-label::before,.was-validated .custom-control-input:invalid:checked~.custom-control-label::before{background-color:#e4606d}.custom-control-input.is-invalid:focus~.custom-control-label::before,.was-validated .custom-control-input:invalid:focus~.custom-control-label::before{-webkit-box-shadow:0 0 0 1px #fff,0 0 0 .2rem rgba(220,53,69,.25);box-shadow:0 0 0 1px #fff,0 0 0 .2rem rgba(220,53,69,.25)}.custom-file-input.is-invalid~.custom-file-label,.was-validated .custom-file-input:invalid~.custom-file-label{border-color:#dc3545}.custom-file-input.is-invalid~.custom-file-label::before,.was-validated .custom-file-input:invalid~.custom-file-label::before{border-color:inherit}.custom-file-input.is-invalid~.invalid-feedback,.custom-file-input.is-invalid~.invalid-tooltip,.was-validated .custom-file-input:invalid~.invalid-feedback,.was-validated .custom-file-input:invalid~.invalid-tooltip{display:block}.custom-file-input.is-invalid:focus~.custom-file-label,.was-validated .custom-file-input:invalid:focus~.custom-file-label{-webkit-box-shadow:0 0 0 .2rem rgba(220,53,69,.25);box-shadow:0 0 0 .2rem rgba(220,53,69,.25)}.form-inline{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row wrap;flex-flow:row wrap;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.form-inline .form-check{width:100%}@media (min-width:576px){.form-inline label{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-bottom:0}.form-inline .form-group{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row wrap;flex-flow:row wrap;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-bottom:0}.form-inline .form-control{display:inline-block;width:auto;vertical-align:middle}.form-inline .form-control-plaintext{display:inline-block}.form-inline .input-group{width:auto}.form-inline .form-check{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:auto;padding-left:0}.form-inline .form-check-input{position:relative;margin-top:0;margin-right:.25rem;margin-left:0}.form-inline .custom-control{-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.form-inline .custom-control-label{margin-bottom:0}}.btn{display:inline-block;font-weight:400;text-align:center;white-space:nowrap;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:1px solid transparent;padding:.375rem .75rem;font-size:1rem;line-height:1.5;border-radius:.25rem;-webkit-transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out,-webkit-box-shadow .15s ease-in-out}.btn:focus,.btn:hover{text-decoration:none}.btn.focus,.btn:focus{outline:0;-webkit-box-shadow:0 0 0 .2rem rgba(0,123,255,.25);box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}.btn.disabled,.btn:disabled{opacity:.65}.btn:not(:disabled):not(.disabled){cursor:pointer}.btn:not(:disabled):not(.disabled).active,.btn:not(:disabled):not(.disabled):active{background-image:none}a.btn.disabled,fieldset:disabled a.btn{pointer-events:none}.btn-primary{color:#fff;background-color:#007bff;border-color:#007bff}.btn-primary:hover{color:#fff;background-color:#0069d9;border-color:#0062cc}.btn-primary.focus,.btn-primary:focus{-webkit-box-shadow:0 0 0 .2rem rgba(0,123,255,.5);box-shadow:0 0 0 .2rem rgba(0,123,255,.5)}.btn-primary.disabled,.btn-primary:disabled{color:#fff;background-color:#007bff;border-color:#007bff}.btn-primary:not(:disabled):not(.disabled).active,.btn-primary:not(:disabled):not(.disabled):active,.show>.btn-primary.dropdown-toggle{color:#fff;background-color:#0062cc;border-color:#005cbf}.btn-primary:not(:disabled):not(.disabled).active:focus,.btn-primary:not(:disabled):not(.disabled):active:focus,.show>.btn-primary.dropdown-toggle:focus{-webkit-box-shadow:0 0 0 .2rem rgba(0,123,255,.5);box-shadow:0 0 0 .2rem rgba(0,123,255,.5)}.btn-secondary{color:#fff;background-color:#6c757d;border-color:#6c757d}.btn-secondary:hover{color:#fff;background-color:#5a6268;border-color:#545b62}.btn-secondary.focus,.btn-secondary:focus{-webkit-box-shadow:0 0 0 .2rem rgba(108,117,125,.5);box-shadow:0 0 0 .2rem rgba(108,117,125,.5)}.btn-secondary.disabled,.btn-secondary:disabled{color:#fff;background-color:#6c757d;border-color:#6c757d}.btn-secondary:not(:disabled):not(.disabled).active,.btn-secondary:not(:disabled):not(.disabled):active,.show>.btn-secondary.dropdown-toggle{color:#fff;background-color:#545b62;border-color:#4e555b}.btn-secondary:not(:disabled):not(.disabled).active:focus,.btn-secondary:not(:disabled):not(.disabled):active:focus,.show>.btn-secondary.dropdown-toggle:focus{-webkit-box-shadow:0 0 0 .2rem rgba(108,117,125,.5);box-shadow:0 0 0 .2rem rgba(108,117,125,.5)}.btn-success{color:#fff;background-color:#28a745;border-color:#28a745}.btn-success:hover{color:#fff;background-color:#218838;border-color:#1e7e34}.btn-success.focus,.btn-success:focus{-webkit-box-shadow:0 0 0 .2rem rgba(40,167,69,.5);box-shadow:0 0 0 .2rem rgba(40,167,69,.5)}.btn-success.disabled,.btn-success:disabled{color:#fff;background-color:#28a745;border-color:#28a745}.btn-success:not(:disabled):not(.disabled).active,.btn-success:not(:disabled):not(.disabled):active,.show>.btn-success.dropdown-toggle{color:#fff;background-color:#1e7e34;border-color:#1c7430}.btn-success:not(:disabled):not(.disabled).active:focus,.btn-success:not(:disabled):not(.disabled):active:focus,.show>.btn-success.dropdown-toggle:focus{-webkit-box-shadow:0 0 0 .2rem rgba(40,167,69,.5);box-shadow:0 0 0 .2rem rgba(40,167,69,.5)}.btn-info{color:#fff;background-color:#17a2b8;border-color:#17a2b8}.btn-info:hover{color:#fff;background-color:#138496;border-color:#117a8b}.btn-info.focus,.btn-info:focus{-webkit-box-shadow:0 0 0 .2rem rgba(23,162,184,.5);box-shadow:0 0 0 .2rem rgba(23,162,184,.5)}.btn-info.disabled,.btn-info:disabled{color:#fff;background-color:#17a2b8;border-color:#17a2b8}.btn-info:not(:disabled):not(.disabled).active,.btn-info:not(:disabled):not(.disabled):active,.show>.btn-info.dropdown-toggle{color:#fff;background-color:#117a8b;border-color:#10707f}.btn-info:not(:disabled):not(.disabled).active:focus,.btn-info:not(:disabled):not(.disabled):active:focus,.show>.btn-info.dropdown-toggle:focus{-webkit-box-shadow:0 0 0 .2rem rgba(23,162,184,.5);box-shadow:0 0 0 .2rem rgba(23,162,184,.5)}.btn-warning{color:#212529;background-color:#ffc107;border-color:#ffc107}.btn-warning:hover{color:#212529;background-color:#e0a800;border-color:#d39e00}.btn-warning.focus,.btn-warning:focus{-webkit-box-shadow:0 0 0 .2rem rgba(255,193,7,.5);box-shadow:0 0 0 .2rem rgba(255,193,7,.5)}.btn-warning.disabled,.btn-warning:disabled{color:#212529;background-color:#ffc107;border-color:#ffc107}.btn-warning:not(:disabled):not(.disabled).active,.btn-warning:not(:disabled):not(.disabled):active,.show>.btn-warning.dropdown-toggle{color:#212529;background-color:#d39e00;border-color:#c69500}.btn-warning:not(:disabled):not(.disabled).active:focus,.btn-warning:not(:disabled):not(.disabled):active:focus,.show>.btn-warning.dropdown-toggle:focus{-webkit-box-shadow:0 0 0 .2rem rgba(255,193,7,.5);box-shadow:0 0 0 .2rem rgba(255,193,7,.5)}.btn-danger{color:#fff;background-color:#dc3545;border-color:#dc3545}.btn-danger:hover{color:#fff;background-color:#c82333;border-color:#bd2130}.btn-danger.focus,.btn-danger:focus{-webkit-box-shadow:0 0 0 .2rem rgba(220,53,69,.5);box-shadow:0 0 0 .2rem rgba(220,53,69,.5)}.btn-danger.disabled,.btn-danger:disabled{color:#fff;background-color:#dc3545;border-color:#dc3545}.btn-danger:not(:disabled):not(.disabled).active,.btn-danger:not(:disabled):not(.disabled):active,.show>.btn-danger.dropdown-toggle{color:#fff;background-color:#bd2130;border-color:#b21f2d}.btn-danger:not(:disabled):not(.disabled).active:focus,.btn-danger:not(:disabled):not(.disabled):active:focus,.show>.btn-danger.dropdown-toggle:focus{-webkit-box-shadow:0 0 0 .2rem rgba(220,53,69,.5);box-shadow:0 0 0 .2rem rgba(220,53,69,.5)}.btn-light{color:#212529;background-color:#f8f9fa;border-color:#f8f9fa}.btn-light:hover{color:#212529;background-color:#e2e6ea;border-color:#dae0e5}.btn-light.focus,.btn-light:focus{-webkit-box-shadow:0 0 0 .2rem rgba(248,249,250,.5);box-shadow:0 0 0 .2rem rgba(248,249,250,.5)}.btn-light.disabled,.btn-light:disabled{color:#212529;background-color:#f8f9fa;border-color:#f8f9fa}.btn-light:not(:disabled):not(.disabled).active,.btn-light:not(:disabled):not(.disabled):active,.show>.btn-light.dropdown-toggle{color:#212529;background-color:#dae0e5;border-color:#d3d9df}.btn-light:not(:disabled):not(.disabled).active:focus,.btn-light:not(:disabled):not(.disabled):active:focus,.show>.btn-light.dropdown-toggle:focus{-webkit-box-shadow:0 0 0 .2rem rgba(248,249,250,.5);box-shadow:0 0 0 .2rem rgba(248,249,250,.5)}.btn-dark{color:#fff;background-color:#343a40;border-color:#343a40}.btn-dark:hover{color:#fff;background-color:#23272b;border-color:#1d2124}.btn-dark.focus,.btn-dark:focus{-webkit-box-shadow:0 0 0 .2rem rgba(52,58,64,.5);box-shadow:0 0 0 .2rem rgba(52,58,64,.5)}.btn-dark.disabled,.btn-dark:disabled{color:#fff;background-color:#343a40;border-color:#343a40}.btn-dark:not(:disabled):not(.disabled).active,.btn-dark:not(:disabled):not(.disabled):active,.show>.btn-dark.dropdown-toggle{color:#fff;background-color:#1d2124;border-color:#171a1d}.btn-dark:not(:disabled):not(.disabled).active:focus,.btn-dark:not(:disabled):not(.disabled):active:focus,.show>.btn-dark.dropdown-toggle:focus{-webkit-box-shadow:0 0 0 .2rem rgba(52,58,64,.5);box-shadow:0 0 0 .2rem rgba(52,58,64,.5)}.btn-outline-primary{color:#007bff;background-color:transparent;background-image:none;border-color:#007bff}.btn-outline-primary:hover{color:#fff;background-color:#007bff;border-color:#007bff}.btn-outline-primary.focus,.btn-outline-primary:focus{-webkit-box-shadow:0 0 0 .2rem rgba(0,123,255,.5);box-shadow:0 0 0 .2rem rgba(0,123,255,.5)}.btn-outline-primary.disabled,.btn-outline-primary:disabled{color:#007bff;background-color:transparent}.btn-outline-primary:not(:disabled):not(.disabled).active,.btn-outline-primary:not(:disabled):not(.disabled):active,.show>.btn-outline-primary.dropdown-toggle{color:#fff;background-color:#007bff;border-color:#007bff}.btn-outline-primary:not(:disabled):not(.disabled).active:focus,.btn-outline-primary:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-primary.dropdown-toggle:focus{-webkit-box-shadow:0 0 0 .2rem rgba(0,123,255,.5);box-shadow:0 0 0 .2rem rgba(0,123,255,.5)}.btn-outline-secondary{color:#6c757d;background-color:transparent;background-image:none;border-color:#6c757d}.btn-outline-secondary:hover{color:#fff;background-color:#6c757d;border-color:#6c757d}.btn-outline-secondary.focus,.btn-outline-secondary:focus{-webkit-box-shadow:0 0 0 .2rem rgba(108,117,125,.5);box-shadow:0 0 0 .2rem rgba(108,117,125,.5)}.btn-outline-secondary.disabled,.btn-outline-secondary:disabled{color:#6c757d;background-color:transparent}.btn-outline-secondary:not(:disabled):not(.disabled).active,.btn-outline-secondary:not(:disabled):not(.disabled):active,.show>.btn-outline-secondary.dropdown-toggle{color:#fff;background-color:#6c757d;border-color:#6c757d}.btn-outline-secondary:not(:disabled):not(.disabled).active:focus,.btn-outline-secondary:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-secondary.dropdown-toggle:focus{-webkit-box-shadow:0 0 0 .2rem rgba(108,117,125,.5);box-shadow:0 0 0 .2rem rgba(108,117,125,.5)}.btn-outline-success{color:#28a745;background-color:transparent;background-image:none;border-color:#28a745}.btn-outline-success:hover{color:#fff;background-color:#28a745;border-color:#28a745}.btn-outline-success.focus,.btn-outline-success:focus{-webkit-box-shadow:0 0 0 .2rem rgba(40,167,69,.5);box-shadow:0 0 0 .2rem rgba(40,167,69,.5)}.btn-outline-success.disabled,.btn-outline-success:disabled{color:#28a745;background-color:transparent}.btn-outline-success:not(:disabled):not(.disabled).active,.btn-outline-success:not(:disabled):not(.disabled):active,.show>.btn-outline-success.dropdown-toggle{color:#fff;background-color:#28a745;border-color:#28a745}.btn-outline-success:not(:disabled):not(.disabled).active:focus,.btn-outline-success:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-success.dropdown-toggle:focus{-webkit-box-shadow:0 0 0 .2rem rgba(40,167,69,.5);box-shadow:0 0 0 .2rem rgba(40,167,69,.5)}.btn-outline-info{color:#17a2b8;background-color:transparent;background-image:none;border-color:#17a2b8}.btn-outline-info:hover{color:#fff;background-color:#17a2b8;border-color:#17a2b8}.btn-outline-info.focus,.btn-outline-info:focus{-webkit-box-shadow:0 0 0 .2rem rgba(23,162,184,.5);box-shadow:0 0 0 .2rem rgba(23,162,184,.5)}.btn-outline-info.disabled,.btn-outline-info:disabled{color:#17a2b8;background-color:transparent}.btn-outline-info:not(:disabled):not(.disabled).active,.btn-outline-info:not(:disabled):not(.disabled):active,.show>.btn-outline-info.dropdown-toggle{color:#fff;background-color:#17a2b8;border-color:#17a2b8}.btn-outline-info:not(:disabled):not(.disabled).active:focus,.btn-outline-info:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-info.dropdown-toggle:focus{-webkit-box-shadow:0 0 0 .2rem rgba(23,162,184,.5);box-shadow:0 0 0 .2rem rgba(23,162,184,.5)}.btn-outline-warning{color:#ffc107;background-color:transparent;background-image:none;border-color:#ffc107}.btn-outline-warning:hover{color:#212529;background-color:#ffc107;border-color:#ffc107}.btn-outline-warning.focus,.btn-outline-warning:focus{-webkit-box-shadow:0 0 0 .2rem rgba(255,193,7,.5);box-shadow:0 0 0 .2rem rgba(255,193,7,.5)}.btn-outline-warning.disabled,.btn-outline-warning:disabled{color:#ffc107;background-color:transparent}.btn-outline-warning:not(:disabled):not(.disabled).active,.btn-outline-warning:not(:disabled):not(.disabled):active,.show>.btn-outline-warning.dropdown-toggle{color:#212529;background-color:#ffc107;border-color:#ffc107}.btn-outline-warning:not(:disabled):not(.disabled).active:focus,.btn-outline-warning:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-warning.dropdown-toggle:focus{-webkit-box-shadow:0 0 0 .2rem rgba(255,193,7,.5);box-shadow:0 0 0 .2rem rgba(255,193,7,.5)}.btn-outline-danger{color:#dc3545;background-color:transparent;background-image:none;border-color:#dc3545}.btn-outline-danger:hover{color:#fff;background-color:#dc3545;border-color:#dc3545}.btn-outline-danger.focus,.btn-outline-danger:focus{-webkit-box-shadow:0 0 0 .2rem rgba(220,53,69,.5);box-shadow:0 0 0 .2rem rgba(220,53,69,.5)}.btn-outline-danger.disabled,.btn-outline-danger:disabled{color:#dc3545;background-color:transparent}.btn-outline-danger:not(:disabled):not(.disabled).active,.btn-outline-danger:not(:disabled):not(.disabled):active,.show>.btn-outline-danger.dropdown-toggle{color:#fff;background-color:#dc3545;border-color:#dc3545}.btn-outline-danger:not(:disabled):not(.disabled).active:focus,.btn-outline-danger:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-danger.dropdown-toggle:focus{-webkit-box-shadow:0 0 0 .2rem rgba(220,53,69,.5);box-shadow:0 0 0 .2rem rgba(220,53,69,.5)}.btn-outline-light{color:#f8f9fa;background-color:transparent;background-image:none;border-color:#f8f9fa}.btn-outline-light:hover{color:#212529;background-color:#f8f9fa;border-color:#f8f9fa}.btn-outline-light.focus,.btn-outline-light:focus{-webkit-box-shadow:0 0 0 .2rem rgba(248,249,250,.5);box-shadow:0 0 0 .2rem rgba(248,249,250,.5)}.btn-outline-light.disabled,.btn-outline-light:disabled{color:#f8f9fa;background-color:transparent}.btn-outline-light:not(:disabled):not(.disabled).active,.btn-outline-light:not(:disabled):not(.disabled):active,.show>.btn-outline-light.dropdown-toggle{color:#212529;background-color:#f8f9fa;border-color:#f8f9fa}.btn-outline-light:not(:disabled):not(.disabled).active:focus,.btn-outline-light:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-light.dropdown-toggle:focus{-webkit-box-shadow:0 0 0 .2rem rgba(248,249,250,.5);box-shadow:0 0 0 .2rem rgba(248,249,250,.5)}.btn-outline-dark{color:#343a40;background-color:transparent;background-image:none;border-color:#343a40}.btn-outline-dark:hover{color:#fff;background-color:#343a40;border-color:#343a40}.btn-outline-dark.focus,.btn-outline-dark:focus{-webkit-box-shadow:0 0 0 .2rem rgba(52,58,64,.5);box-shadow:0 0 0 .2rem rgba(52,58,64,.5)}.btn-outline-dark.disabled,.btn-outline-dark:disabled{color:#343a40;background-color:transparent}.btn-outline-dark:not(:disabled):not(.disabled).active,.btn-outline-dark:not(:disabled):not(.disabled):active,.show>.btn-outline-dark.dropdown-toggle{color:#fff;background-color:#343a40;border-color:#343a40}.btn-outline-dark:not(:disabled):not(.disabled).active:focus,.btn-outline-dark:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-dark.dropdown-toggle:focus{-webkit-box-shadow:0 0 0 .2rem rgba(52,58,64,.5);box-shadow:0 0 0 .2rem rgba(52,58,64,.5)}.btn-link{font-weight:400;color:#007bff;background-color:transparent}.btn-link:hover{color:#0056b3;text-decoration:underline;background-color:transparent;border-color:transparent}.btn-link.focus,.btn-link:focus{text-decoration:underline;border-color:transparent;-webkit-box-shadow:none;box-shadow:none}.btn-link.disabled,.btn-link:disabled{color:#6c757d}.btn-group-lg>.btn,.btn-lg{padding:.5rem 1rem;font-size:1.25rem;line-height:1.5;border-radius:.3rem}.btn-group-sm>.btn,.btn-sm{padding:.25rem .5rem;font-size:.875rem;line-height:1.5;border-radius:.2rem}.btn-block{display:block;width:100%}.btn-block+.btn-block{margin-top:.5rem}input[type=button].btn-block,input[type=reset].btn-block,input[type=submit].btn-block{width:100%}.fade{opacity:0;-webkit-transition:opacity .15s linear;transition:opacity .15s linear}.fade.show{opacity:1}.collapse{display:none}.collapse.show{display:block}tr.collapse.show{display:table-row}tbody.collapse.show{display:table-row-group}.collapsing{position:relative;height:0;overflow:hidden;-webkit-transition:height .35s ease;transition:height .35s ease}.dropdown,.dropup{position:relative}.dropdown-toggle::after{display:inline-block;width:0;height:0;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid;border-right:.3em solid transparent;border-bottom:0;border-left:.3em solid transparent}.dropdown-toggle:empty::after{margin-left:0}.dropdown-menu{position:absolute;top:100%;left:0;z-index:1000;display:none;float:left;min-width:10rem;padding:.5rem 0;margin:.125rem 0 0;font-size:1rem;color:#212529;text-align:left;list-style:none;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,.15);border-radius:.25rem}.dropup .dropdown-menu{margin-top:0;margin-bottom:.125rem}.dropup .dropdown-toggle::after{display:inline-block;width:0;height:0;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:0;border-right:.3em solid transparent;border-bottom:.3em solid;border-left:.3em solid transparent}.dropup .dropdown-toggle:empty::after{margin-left:0}.dropright .dropdown-menu{margin-top:0;margin-left:.125rem}.dropright .dropdown-toggle::after{display:inline-block;width:0;height:0;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid transparent;border-bottom:.3em solid transparent;border-left:.3em solid}.dropright .dropdown-toggle:empty::after{margin-left:0}.dropright .dropdown-toggle::after{vertical-align:0}.dropleft .dropdown-menu{margin-top:0;margin-right:.125rem}.dropleft .dropdown-toggle::after{display:inline-block;width:0;height:0;margin-left:.255em;vertical-align:.255em;content:\"\"}.dropleft .dropdown-toggle::after{display:none}.dropleft .dropdown-toggle::before{display:inline-block;width:0;height:0;margin-right:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid transparent;border-right:.3em solid;border-bottom:.3em solid transparent}.dropleft .dropdown-toggle:empty::after{margin-left:0}.dropleft .dropdown-toggle::before{vertical-align:0}.dropdown-divider{height:0;margin:.5rem 0;overflow:hidden;border-top:1px solid #e9ecef}.dropdown-item{display:block;width:100%;padding:.25rem 1.5rem;clear:both;font-weight:400;color:#212529;text-align:inherit;white-space:nowrap;background-color:transparent;border:0}.dropdown-item:focus,.dropdown-item:hover{color:#16181b;text-decoration:none;background-color:#f8f9fa}.dropdown-item.active,.dropdown-item:active{color:#fff;text-decoration:none;background-color:#007bff}.dropdown-item.disabled,.dropdown-item:disabled{color:#6c757d;background-color:transparent}.dropdown-menu.show{display:block}.dropdown-header{display:block;padding:.5rem 1.5rem;margin-bottom:0;font-size:.875rem;color:#6c757d;white-space:nowrap}.btn-group,.btn-group-vertical{position:relative;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;vertical-align:middle}.btn-group-vertical>.btn,.btn-group>.btn{position:relative;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto}.btn-group-vertical>.btn:hover,.btn-group>.btn:hover{z-index:1}.btn-group-vertical>.btn.active,.btn-group-vertical>.btn:active,.btn-group-vertical>.btn:focus,.btn-group>.btn.active,.btn-group>.btn:active,.btn-group>.btn:focus{z-index:1}.btn-group .btn+.btn,.btn-group .btn+.btn-group,.btn-group .btn-group+.btn,.btn-group .btn-group+.btn-group,.btn-group-vertical .btn+.btn,.btn-group-vertical .btn+.btn-group,.btn-group-vertical .btn-group+.btn,.btn-group-vertical .btn-group+.btn-group{margin-left:-1px}.btn-toolbar{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.btn-toolbar .input-group{width:auto}.btn-group>.btn:first-child{margin-left:0}.btn-group>.btn-group:not(:last-child)>.btn,.btn-group>.btn:not(:last-child):not(.dropdown-toggle){border-top-right-radius:0;border-bottom-right-radius:0}.btn-group>.btn-group:not(:first-child)>.btn,.btn-group>.btn:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.dropdown-toggle-split{padding-right:.5625rem;padding-left:.5625rem}.dropdown-toggle-split::after{margin-left:0}.btn-group-sm>.btn+.dropdown-toggle-split,.btn-sm+.dropdown-toggle-split{padding-right:.375rem;padding-left:.375rem}.btn-group-lg>.btn+.dropdown-toggle-split,.btn-lg+.dropdown-toggle-split{padding-right:.75rem;padding-left:.75rem}.btn-group-vertical{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.btn-group-vertical .btn,.btn-group-vertical .btn-group{width:100%}.btn-group-vertical>.btn+.btn,.btn-group-vertical>.btn+.btn-group,.btn-group-vertical>.btn-group+.btn,.btn-group-vertical>.btn-group+.btn-group{margin-top:-1px;margin-left:0}.btn-group-vertical>.btn-group:not(:last-child)>.btn,.btn-group-vertical>.btn:not(:last-child):not(.dropdown-toggle){border-bottom-right-radius:0;border-bottom-left-radius:0}.btn-group-vertical>.btn-group:not(:first-child)>.btn,.btn-group-vertical>.btn:not(:first-child){border-top-left-radius:0;border-top-right-radius:0}.btn-group-toggle>.btn,.btn-group-toggle>.btn-group>.btn{margin-bottom:0}.btn-group-toggle>.btn input[type=checkbox],.btn-group-toggle>.btn input[type=radio],.btn-group-toggle>.btn-group>.btn input[type=checkbox],.btn-group-toggle>.btn-group>.btn input[type=radio]{position:absolute;clip:rect(0,0,0,0);pointer-events:none}.input-group{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;width:100%}.input-group>.custom-file,.input-group>.custom-select,.input-group>.form-control{position:relative;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;width:1%;margin-bottom:0}.input-group>.custom-file:focus,.input-group>.custom-select:focus,.input-group>.form-control:focus{z-index:3}.input-group>.custom-file+.custom-file,.input-group>.custom-file+.custom-select,.input-group>.custom-file+.form-control,.input-group>.custom-select+.custom-file,.input-group>.custom-select+.custom-select,.input-group>.custom-select+.form-control,.input-group>.form-control+.custom-file,.input-group>.form-control+.custom-select,.input-group>.form-control+.form-control{margin-left:-1px}.input-group>.custom-select:not(:last-child),.input-group>.form-control:not(:last-child){border-top-right-radius:0;border-bottom-right-radius:0}.input-group>.custom-select:not(:first-child),.input-group>.form-control:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.input-group>.custom-file{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.input-group>.custom-file:not(:last-child) .custom-file-label,.input-group>.custom-file:not(:last-child) .custom-file-label::before{border-top-right-radius:0;border-bottom-right-radius:0}.input-group>.custom-file:not(:first-child) .custom-file-label,.input-group>.custom-file:not(:first-child) .custom-file-label::before{border-top-left-radius:0;border-bottom-left-radius:0}.input-group-append,.input-group-prepend{display:-webkit-box;display:-ms-flexbox;display:flex}.input-group-append .btn,.input-group-prepend .btn{position:relative;z-index:2}.input-group-append .btn+.btn,.input-group-append .btn+.input-group-text,.input-group-append .input-group-text+.btn,.input-group-append .input-group-text+.input-group-text,.input-group-prepend .btn+.btn,.input-group-prepend .btn+.input-group-text,.input-group-prepend .input-group-text+.btn,.input-group-prepend .input-group-text+.input-group-text{margin-left:-1px}.input-group-prepend{margin-right:-1px}.input-group-append{margin-left:-1px}.input-group-text{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:.375rem .75rem;margin-bottom:0;font-size:1rem;font-weight:400;line-height:1.5;color:#495057;text-align:center;white-space:nowrap;background-color:#e9ecef;border:1px solid #ced4da;border-radius:.25rem}.input-group-text input[type=checkbox],.input-group-text input[type=radio]{margin-top:0}.input-group>.input-group-append:last-child>.btn:not(:last-child):not(.dropdown-toggle),.input-group>.input-group-append:last-child>.input-group-text:not(:last-child),.input-group>.input-group-append:not(:last-child)>.btn,.input-group>.input-group-append:not(:last-child)>.input-group-text,.input-group>.input-group-prepend>.btn,.input-group>.input-group-prepend>.input-group-text{border-top-right-radius:0;border-bottom-right-radius:0}.input-group>.input-group-append>.btn,.input-group>.input-group-append>.input-group-text,.input-group>.input-group-prepend:first-child>.btn:not(:first-child),.input-group>.input-group-prepend:first-child>.input-group-text:not(:first-child),.input-group>.input-group-prepend:not(:first-child)>.btn,.input-group>.input-group-prepend:not(:first-child)>.input-group-text{border-top-left-radius:0;border-bottom-left-radius:0}.custom-control{position:relative;display:block;min-height:1.5rem;padding-left:1.5rem}.custom-control-inline{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;margin-right:1rem}.custom-control-input{position:absolute;z-index:-1;opacity:0}.custom-control-input:checked~.custom-control-label::before{color:#fff;background-color:#007bff}.custom-control-input:focus~.custom-control-label::before{-webkit-box-shadow:0 0 0 1px #fff,0 0 0 .2rem rgba(0,123,255,.25);box-shadow:0 0 0 1px #fff,0 0 0 .2rem rgba(0,123,255,.25)}.custom-control-input:active~.custom-control-label::before{color:#fff;background-color:#b3d7ff}.custom-control-input:disabled~.custom-control-label{color:#6c757d}.custom-control-input:disabled~.custom-control-label::before{background-color:#e9ecef}.custom-control-label{margin-bottom:0}.custom-control-label::before{position:absolute;top:.25rem;left:0;display:block;width:1rem;height:1rem;pointer-events:none;content:\"\";-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:#dee2e6}.custom-control-label::after{position:absolute;top:.25rem;left:0;display:block;width:1rem;height:1rem;content:\"\";background-repeat:no-repeat;background-position:center center;background-size:50% 50%}.custom-checkbox .custom-control-label::before{border-radius:.25rem}.custom-checkbox .custom-control-input:checked~.custom-control-label::before{background-color:#007bff}.custom-checkbox .custom-control-input:checked~.custom-control-label::after{background-image:url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3E%3C/svg%3E\")}.custom-checkbox .custom-control-input:indeterminate~.custom-control-label::before{background-color:#007bff}.custom-checkbox .custom-control-input:indeterminate~.custom-control-label::after{background-image:url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 4'%3E%3Cpath stroke='%23fff' d='M0 2h4'/%3E%3C/svg%3E\")}.custom-checkbox .custom-control-input:disabled:checked~.custom-control-label::before{background-color:rgba(0,123,255,.5)}.custom-checkbox .custom-control-input:disabled:indeterminate~.custom-control-label::before{background-color:rgba(0,123,255,.5)}.custom-radio .custom-control-label::before{border-radius:50%}.custom-radio .custom-control-input:checked~.custom-control-label::before{background-color:#007bff}.custom-radio .custom-control-input:checked~.custom-control-label::after{background-image:url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3E%3Ccircle r='3' fill='%23fff'/%3E%3C/svg%3E\")}.custom-radio .custom-control-input:disabled:checked~.custom-control-label::before{background-color:rgba(0,123,255,.5)}.custom-select{display:inline-block;width:100%;height:calc(2.25rem + 2px);padding:.375rem 1.75rem .375rem .75rem;line-height:1.5;color:#495057;vertical-align:middle;background:#fff url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3E%3Cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E\") no-repeat right .75rem center;background-size:8px 10px;border:1px solid #ced4da;border-radius:.25rem;-webkit-appearance:none;-moz-appearance:none;appearance:none}.custom-select:focus{border-color:#80bdff;outline:0;-webkit-box-shadow:inset 0 1px 2px rgba(0,0,0,.075),0 0 5px rgba(128,189,255,.5);box-shadow:inset 0 1px 2px rgba(0,0,0,.075),0 0 5px rgba(128,189,255,.5)}.custom-select:focus::-ms-value{color:#495057;background-color:#fff}.custom-select[multiple],.custom-select[size]:not([size=\"1\"]){height:auto;padding-right:.75rem;background-image:none}.custom-select:disabled{color:#6c757d;background-color:#e9ecef}.custom-select::-ms-expand{opacity:0}.custom-select-sm{height:calc(1.8125rem + 2px);padding-top:.375rem;padding-bottom:.375rem;font-size:75%}.custom-select-lg{height:calc(2.875rem + 2px);padding-top:.375rem;padding-bottom:.375rem;font-size:125%}.custom-file{position:relative;display:inline-block;width:100%;height:calc(2.25rem + 2px);margin-bottom:0}.custom-file-input{position:relative;z-index:2;width:100%;height:calc(2.25rem + 2px);margin:0;opacity:0}.custom-file-input:focus~.custom-file-control{border-color:#80bdff;-webkit-box-shadow:0 0 0 .2rem rgba(0,123,255,.25);box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}.custom-file-input:focus~.custom-file-control::before{border-color:#80bdff}.custom-file-input:lang(en)~.custom-file-label::after{content:\"Browse\"}.custom-file-label{position:absolute;top:0;right:0;left:0;z-index:1;height:calc(2.25rem + 2px);padding:.375rem .75rem;line-height:1.5;color:#495057;background-color:#fff;border:1px solid #ced4da;border-radius:.25rem}.custom-file-label::after{position:absolute;top:0;right:0;bottom:0;z-index:3;display:block;height:calc(calc(2.25rem + 2px) - 1px * 2);padding:.375rem .75rem;line-height:1.5;color:#495057;content:\"Browse\";background-color:#e9ecef;border-left:1px solid #ced4da;border-radius:0 .25rem .25rem 0}.nav{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;padding-left:0;margin-bottom:0;list-style:none}.nav-link{display:block;padding:.5rem 1rem}.nav-link:focus,.nav-link:hover{text-decoration:none}.nav-link.disabled{color:#6c757d}.nav-tabs{border-bottom:1px solid #dee2e6}.nav-tabs .nav-item{margin-bottom:-1px}.nav-tabs .nav-link{border:1px solid transparent;border-top-left-radius:.25rem;border-top-right-radius:.25rem}.nav-tabs .nav-link:focus,.nav-tabs .nav-link:hover{border-color:#e9ecef #e9ecef #dee2e6}.nav-tabs .nav-link.disabled{color:#6c757d;background-color:transparent;border-color:transparent}.nav-tabs .nav-item.show .nav-link,.nav-tabs .nav-link.active{color:#495057;background-color:#fff;border-color:#dee2e6 #dee2e6 #fff}.nav-tabs .dropdown-menu{margin-top:-1px;border-top-left-radius:0;border-top-right-radius:0}.nav-pills .nav-link{border-radius:.25rem}.nav-pills .nav-link.active,.nav-pills .show>.nav-link{color:#fff;background-color:#007bff}.nav-fill .nav-item{-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;text-align:center}.nav-justified .nav-item{-ms-flex-preferred-size:0;flex-basis:0;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;text-align:center}.tab-content>.tab-pane{display:none}.tab-content>.active{display:block}.navbar{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;padding:.5rem 1rem}.navbar>.container,.navbar>.container-fluid{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.navbar-brand{display:inline-block;padding-top:.3125rem;padding-bottom:.3125rem;margin-right:1rem;font-size:1.25rem;line-height:inherit;white-space:nowrap}.navbar-brand:focus,.navbar-brand:hover{text-decoration:none}.navbar-nav{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;padding-left:0;margin-bottom:0;list-style:none}.navbar-nav .nav-link{padding-right:0;padding-left:0}.navbar-nav .dropdown-menu{position:static;float:none}.navbar-text{display:inline-block;padding-top:.5rem;padding-bottom:.5rem}.navbar-collapse{-ms-flex-preferred-size:100%;flex-basis:100%;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.navbar-toggler{padding:.25rem .75rem;font-size:1.25rem;line-height:1;background-color:transparent;border:1px solid transparent;border-radius:.25rem}.navbar-toggler:focus,.navbar-toggler:hover{text-decoration:none}.navbar-toggler:not(:disabled):not(.disabled){cursor:pointer}.navbar-toggler-icon{display:inline-block;width:1.5em;height:1.5em;vertical-align:middle;content:\"\";background:no-repeat center center;background-size:100% 100%}@media (max-width:575.98px){.navbar-expand-sm>.container,.navbar-expand-sm>.container-fluid{padding-right:0;padding-left:0}}@media (min-width:576px){.navbar-expand-sm{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.navbar-expand-sm .navbar-nav{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.navbar-expand-sm .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-sm .navbar-nav .dropdown-menu-right{right:0;left:auto}.navbar-expand-sm .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-sm>.container,.navbar-expand-sm>.container-fluid{-ms-flex-wrap:nowrap;flex-wrap:nowrap}.navbar-expand-sm .navbar-collapse{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important;-ms-flex-preferred-size:auto;flex-basis:auto}.navbar-expand-sm .navbar-toggler{display:none}.navbar-expand-sm .dropup .dropdown-menu{top:auto;bottom:100%}}@media (max-width:767.98px){.navbar-expand-md>.container,.navbar-expand-md>.container-fluid{padding-right:0;padding-left:0}}@media (min-width:768px){.navbar-expand-md{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.navbar-expand-md .navbar-nav{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.navbar-expand-md .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-md .navbar-nav .dropdown-menu-right{right:0;left:auto}.navbar-expand-md .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-md>.container,.navbar-expand-md>.container-fluid{-ms-flex-wrap:nowrap;flex-wrap:nowrap}.navbar-expand-md .navbar-collapse{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important;-ms-flex-preferred-size:auto;flex-basis:auto}.navbar-expand-md .navbar-toggler{display:none}.navbar-expand-md .dropup .dropdown-menu{top:auto;bottom:100%}}@media (max-width:991.98px){.navbar-expand-lg>.container,.navbar-expand-lg>.container-fluid{padding-right:0;padding-left:0}}@media (min-width:992px){.navbar-expand-lg{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.navbar-expand-lg .navbar-nav{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.navbar-expand-lg .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-lg .navbar-nav .dropdown-menu-right{right:0;left:auto}.navbar-expand-lg .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-lg>.container,.navbar-expand-lg>.container-fluid{-ms-flex-wrap:nowrap;flex-wrap:nowrap}.navbar-expand-lg .navbar-collapse{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important;-ms-flex-preferred-size:auto;flex-basis:auto}.navbar-expand-lg .navbar-toggler{display:none}.navbar-expand-lg .dropup .dropdown-menu{top:auto;bottom:100%}}@media (max-width:1199.98px){.navbar-expand-xl>.container,.navbar-expand-xl>.container-fluid{padding-right:0;padding-left:0}}@media (min-width:1200px){.navbar-expand-xl{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.navbar-expand-xl .navbar-nav{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.navbar-expand-xl .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-xl .navbar-nav .dropdown-menu-right{right:0;left:auto}.navbar-expand-xl .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-xl>.container,.navbar-expand-xl>.container-fluid{-ms-flex-wrap:nowrap;flex-wrap:nowrap}.navbar-expand-xl .navbar-collapse{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important;-ms-flex-preferred-size:auto;flex-basis:auto}.navbar-expand-xl .navbar-toggler{display:none}.navbar-expand-xl .dropup .dropdown-menu{top:auto;bottom:100%}}.navbar-expand{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.navbar-expand>.container,.navbar-expand>.container-fluid{padding-right:0;padding-left:0}.navbar-expand .navbar-nav{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.navbar-expand .navbar-nav .dropdown-menu{position:absolute}.navbar-expand .navbar-nav .dropdown-menu-right{right:0;left:auto}.navbar-expand .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand>.container,.navbar-expand>.container-fluid{-ms-flex-wrap:nowrap;flex-wrap:nowrap}.navbar-expand .navbar-collapse{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important;-ms-flex-preferred-size:auto;flex-basis:auto}.navbar-expand .navbar-toggler{display:none}.navbar-expand .dropup .dropdown-menu{top:auto;bottom:100%}.navbar-light .navbar-brand{color:rgba(0,0,0,.9)}.navbar-light .navbar-brand:focus,.navbar-light .navbar-brand:hover{color:rgba(0,0,0,.9)}.navbar-light .navbar-nav .nav-link{color:rgba(0,0,0,.5)}.navbar-light .navbar-nav .nav-link:focus,.navbar-light .navbar-nav .nav-link:hover{color:rgba(0,0,0,.7)}.navbar-light .navbar-nav .nav-link.disabled{color:rgba(0,0,0,.3)}.navbar-light .navbar-nav .active>.nav-link,.navbar-light .navbar-nav .nav-link.active,.navbar-light .navbar-nav .nav-link.show,.navbar-light .navbar-nav .show>.nav-link{color:rgba(0,0,0,.9)}.navbar-light .navbar-toggler{color:rgba(0,0,0,.5);border-color:rgba(0,0,0,.1)}.navbar-light .navbar-toggler-icon{background-image:url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(0, 0, 0, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E\")}.navbar-light .navbar-text{color:rgba(0,0,0,.5)}.navbar-light .navbar-text a{color:rgba(0,0,0,.9)}.navbar-light .navbar-text a:focus,.navbar-light .navbar-text a:hover{color:rgba(0,0,0,.9)}.navbar-dark .navbar-brand{color:#fff}.navbar-dark .navbar-brand:focus,.navbar-dark .navbar-brand:hover{color:#fff}.navbar-dark .navbar-nav .nav-link{color:rgba(255,255,255,.5)}.navbar-dark .navbar-nav .nav-link:focus,.navbar-dark .navbar-nav .nav-link:hover{color:rgba(255,255,255,.75)}.navbar-dark .navbar-nav .nav-link.disabled{color:rgba(255,255,255,.25)}.navbar-dark .navbar-nav .active>.nav-link,.navbar-dark .navbar-nav .nav-link.active,.navbar-dark .navbar-nav .nav-link.show,.navbar-dark .navbar-nav .show>.nav-link{color:#fff}.navbar-dark .navbar-toggler{color:rgba(255,255,255,.5);border-color:rgba(255,255,255,.1)}.navbar-dark .navbar-toggler-icon{background-image:url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255, 255, 255, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E\")}.navbar-dark .navbar-text{color:rgba(255,255,255,.5)}.navbar-dark .navbar-text a{color:#fff}.navbar-dark .navbar-text a:focus,.navbar-dark .navbar-text a:hover{color:#fff}.card{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;min-width:0;word-wrap:break-word;background-color:#fff;background-clip:border-box;border:1px solid rgba(0,0,0,.125);border-radius:.25rem}.card>hr{margin-right:0;margin-left:0}.card>.list-group:first-child .list-group-item:first-child{border-top-left-radius:.25rem;border-top-right-radius:.25rem}.card>.list-group:last-child .list-group-item:last-child{border-bottom-right-radius:.25rem;border-bottom-left-radius:.25rem}.card-body{-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;padding:1.25rem}.card-title{margin-bottom:.75rem}.card-subtitle{margin-top:-.375rem;margin-bottom:0}.card-text:last-child{margin-bottom:0}.card-link:hover{text-decoration:none}.card-link+.card-link{margin-left:1.25rem}.card-header{padding:.75rem 1.25rem;margin-bottom:0;background-color:rgba(0,0,0,.03);border-bottom:1px solid rgba(0,0,0,.125)}.card-header:first-child{border-radius:calc(.25rem - 1px) calc(.25rem - 1px) 0 0}.card-header+.list-group .list-group-item:first-child{border-top:0}.card-footer{padding:.75rem 1.25rem;background-color:rgba(0,0,0,.03);border-top:1px solid rgba(0,0,0,.125)}.card-footer:last-child{border-radius:0 0 calc(.25rem - 1px) calc(.25rem - 1px)}.card-header-tabs{margin-right:-.625rem;margin-bottom:-.75rem;margin-left:-.625rem;border-bottom:0}.card-header-pills{margin-right:-.625rem;margin-left:-.625rem}.card-img-overlay{position:absolute;top:0;right:0;bottom:0;left:0;padding:1.25rem}.card-img{width:100%;border-radius:calc(.25rem - 1px)}.card-img-top{width:100%;border-top-left-radius:calc(.25rem - 1px);border-top-right-radius:calc(.25rem - 1px)}.card-img-bottom{width:100%;border-bottom-right-radius:calc(.25rem - 1px);border-bottom-left-radius:calc(.25rem - 1px)}.card-deck{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.card-deck .card{margin-bottom:15px}@media (min-width:576px){.card-deck{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row wrap;flex-flow:row wrap;margin-right:-15px;margin-left:-15px}.card-deck .card{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1 0 0%;flex:1 0 0%;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;margin-right:15px;margin-bottom:0;margin-left:15px}}.card-group{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.card-group>.card{margin-bottom:15px}@media (min-width:576px){.card-group{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row wrap;flex-flow:row wrap}.card-group>.card{-webkit-box-flex:1;-ms-flex:1 0 0%;flex:1 0 0%;margin-bottom:0}.card-group>.card+.card{margin-left:0;border-left:0}.card-group>.card:first-child{border-top-right-radius:0;border-bottom-right-radius:0}.card-group>.card:first-child .card-header,.card-group>.card:first-child .card-img-top{border-top-right-radius:0}.card-group>.card:first-child .card-footer,.card-group>.card:first-child .card-img-bottom{border-bottom-right-radius:0}.card-group>.card:last-child{border-top-left-radius:0;border-bottom-left-radius:0}.card-group>.card:last-child .card-header,.card-group>.card:last-child .card-img-top{border-top-left-radius:0}.card-group>.card:last-child .card-footer,.card-group>.card:last-child .card-img-bottom{border-bottom-left-radius:0}.card-group>.card:only-child{border-radius:.25rem}.card-group>.card:only-child .card-header,.card-group>.card:only-child .card-img-top{border-top-left-radius:.25rem;border-top-right-radius:.25rem}.card-group>.card:only-child .card-footer,.card-group>.card:only-child .card-img-bottom{border-bottom-right-radius:.25rem;border-bottom-left-radius:.25rem}.card-group>.card:not(:first-child):not(:last-child):not(:only-child){border-radius:0}.card-group>.card:not(:first-child):not(:last-child):not(:only-child) .card-footer,.card-group>.card:not(:first-child):not(:last-child):not(:only-child) .card-header,.card-group>.card:not(:first-child):not(:last-child):not(:only-child) .card-img-bottom,.card-group>.card:not(:first-child):not(:last-child):not(:only-child) .card-img-top{border-radius:0}}.card-columns .card{margin-bottom:.75rem}@media (min-width:576px){.card-columns{-webkit-column-count:3;column-count:3;-webkit-column-gap:1.25rem;column-gap:1.25rem}.card-columns .card{display:inline-block;width:100%}}.breadcrumb{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;padding:.75rem 1rem;margin-bottom:1rem;list-style:none;background-color:#e9ecef;border-radius:.25rem}.breadcrumb-item+.breadcrumb-item::before{display:inline-block;padding-right:.5rem;padding-left:.5rem;color:#6c757d;content:\"/\"}.breadcrumb-item+.breadcrumb-item:hover::before{text-decoration:underline}.breadcrumb-item+.breadcrumb-item:hover::before{text-decoration:none}.breadcrumb-item.active{color:#6c757d}.pagination{display:-webkit-box;display:-ms-flexbox;display:flex;padding-left:0;list-style:none;border-radius:.25rem}.page-link{position:relative;display:block;padding:.5rem .75rem;margin-left:-1px;line-height:1.25;color:#007bff;background-color:#fff;border:1px solid #dee2e6}.page-link:hover{color:#0056b3;text-decoration:none;background-color:#e9ecef;border-color:#dee2e6}.page-link:focus{z-index:2;outline:0;-webkit-box-shadow:0 0 0 .2rem rgba(0,123,255,.25);box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}.page-link:not(:disabled):not(.disabled){cursor:pointer}.page-item:first-child .page-link{margin-left:0;border-top-left-radius:.25rem;border-bottom-left-radius:.25rem}.page-item:last-child .page-link{border-top-right-radius:.25rem;border-bottom-right-radius:.25rem}.page-item.active .page-link{z-index:1;color:#fff;background-color:#007bff;border-color:#007bff}.page-item.disabled .page-link{color:#6c757d;pointer-events:none;cursor:auto;background-color:#fff;border-color:#dee2e6}.pagination-lg .page-link{padding:.75rem 1.5rem;font-size:1.25rem;line-height:1.5}.pagination-lg .page-item:first-child .page-link{border-top-left-radius:.3rem;border-bottom-left-radius:.3rem}.pagination-lg .page-item:last-child .page-link{border-top-right-radius:.3rem;border-bottom-right-radius:.3rem}.pagination-sm .page-link{padding:.25rem .5rem;font-size:.875rem;line-height:1.5}.pagination-sm .page-item:first-child .page-link{border-top-left-radius:.2rem;border-bottom-left-radius:.2rem}.pagination-sm .page-item:last-child .page-link{border-top-right-radius:.2rem;border-bottom-right-radius:.2rem}.badge{display:inline-block;padding:.25em .4em;font-size:75%;font-weight:700;line-height:1;text-align:center;white-space:nowrap;vertical-align:baseline;border-radius:.25rem}.badge:empty{display:none}.btn .badge{position:relative;top:-1px}.badge-pill{padding-right:.6em;padding-left:.6em;border-radius:10rem}.badge-primary{color:#fff;background-color:#007bff}.badge-primary[href]:focus,.badge-primary[href]:hover{color:#fff;text-decoration:none;background-color:#0062cc}.badge-secondary{color:#fff;background-color:#6c757d}.badge-secondary[href]:focus,.badge-secondary[href]:hover{color:#fff;text-decoration:none;background-color:#545b62}.badge-success{color:#fff;background-color:#28a745}.badge-success[href]:focus,.badge-success[href]:hover{color:#fff;text-decoration:none;background-color:#1e7e34}.badge-info{color:#fff;background-color:#17a2b8}.badge-info[href]:focus,.badge-info[href]:hover{color:#fff;text-decoration:none;background-color:#117a8b}.badge-warning{color:#212529;background-color:#ffc107}.badge-warning[href]:focus,.badge-warning[href]:hover{color:#212529;text-decoration:none;background-color:#d39e00}.badge-danger{color:#fff;background-color:#dc3545}.badge-danger[href]:focus,.badge-danger[href]:hover{color:#fff;text-decoration:none;background-color:#bd2130}.badge-light{color:#212529;background-color:#f8f9fa}.badge-light[href]:focus,.badge-light[href]:hover{color:#212529;text-decoration:none;background-color:#dae0e5}.badge-dark{color:#fff;background-color:#343a40}.badge-dark[href]:focus,.badge-dark[href]:hover{color:#fff;text-decoration:none;background-color:#1d2124}.jumbotron{padding:2rem 1rem;margin-bottom:2rem;background-color:#e9ecef;border-radius:.3rem}@media (min-width:576px){.jumbotron{padding:4rem 2rem}}.jumbotron-fluid{padding-right:0;padding-left:0;border-radius:0}.alert{position:relative;padding:.75rem 1.25rem;margin-bottom:1rem;border:1px solid transparent;border-radius:.25rem}.alert-heading{color:inherit}.alert-link{font-weight:700}.alert-dismissible{padding-right:4rem}.alert-dismissible .close{position:absolute;top:0;right:0;padding:.75rem 1.25rem;color:inherit}.alert-primary{color:#004085;background-color:#cce5ff;border-color:#b8daff}.alert-primary hr{border-top-color:#9fcdff}.alert-primary .alert-link{color:#002752}.alert-secondary{color:#383d41;background-color:#e2e3e5;border-color:#d6d8db}.alert-secondary hr{border-top-color:#c8cbcf}.alert-secondary .alert-link{color:#202326}.alert-success{color:#155724;background-color:#d4edda;border-color:#c3e6cb}.alert-success hr{border-top-color:#b1dfbb}.alert-success .alert-link{color:#0b2e13}.alert-info{color:#0c5460;background-color:#d1ecf1;border-color:#bee5eb}.alert-info hr{border-top-color:#abdde5}.alert-info .alert-link{color:#062c33}.alert-warning{color:#856404;background-color:#fff3cd;border-color:#ffeeba}.alert-warning hr{border-top-color:#ffe8a1}.alert-warning .alert-link{color:#533f03}.alert-danger{color:#721c24;background-color:#f8d7da;border-color:#f5c6cb}.alert-danger hr{border-top-color:#f1b0b7}.alert-danger .alert-link{color:#491217}.alert-light{color:#818182;background-color:#fefefe;border-color:#fdfdfe}.alert-light hr{border-top-color:#ececf6}.alert-light .alert-link{color:#686868}.alert-dark{color:#1b1e21;background-color:#d6d8d9;border-color:#c6c8ca}.alert-dark hr{border-top-color:#b9bbbe}.alert-dark .alert-link{color:#040505}@-webkit-keyframes progress-bar-stripes{from{background-position:1rem 0}to{background-position:0 0}}@keyframes progress-bar-stripes{from{background-position:1rem 0}to{background-position:0 0}}.progress{display:-webkit-box;display:-ms-flexbox;display:flex;height:1rem;overflow:hidden;font-size:.75rem;background-color:#e9ecef;border-radius:.25rem}.progress-bar{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;color:#fff;text-align:center;background-color:#007bff;-webkit-transition:width .6s ease;transition:width .6s ease}.progress-bar-striped{background-image:linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);background-size:1rem 1rem}.progress-bar-animated{-webkit-animation:progress-bar-stripes 1s linear infinite;animation:progress-bar-stripes 1s linear infinite}.media{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start}.media-body{-webkit-box-flex:1;-ms-flex:1;flex:1}.list-group{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;padding-left:0;margin-bottom:0}.list-group-item-action{width:100%;color:#495057;text-align:inherit}.list-group-item-action:focus,.list-group-item-action:hover{color:#495057;text-decoration:none;background-color:#f8f9fa}.list-group-item-action:active{color:#212529;background-color:#e9ecef}.list-group-item{position:relative;display:block;padding:.75rem 1.25rem;margin-bottom:-1px;background-color:#fff;border:1px solid rgba(0,0,0,.125)}.list-group-item:first-child{border-top-left-radius:.25rem;border-top-right-radius:.25rem}.list-group-item:last-child{margin-bottom:0;border-bottom-right-radius:.25rem;border-bottom-left-radius:.25rem}.list-group-item:focus,.list-group-item:hover{z-index:1;text-decoration:none}.list-group-item.disabled,.list-group-item:disabled{color:#6c757d;background-color:#fff}.list-group-item.active{z-index:2;color:#fff;background-color:#007bff;border-color:#007bff}.list-group-flush .list-group-item{border-right:0;border-left:0;border-radius:0}.list-group-flush:first-child .list-group-item:first-child{border-top:0}.list-group-flush:last-child .list-group-item:last-child{border-bottom:0}.list-group-item-primary{color:#004085;background-color:#b8daff}.list-group-item-primary.list-group-item-action:focus,.list-group-item-primary.list-group-item-action:hover{color:#004085;background-color:#9fcdff}.list-group-item-primary.list-group-item-action.active{color:#fff;background-color:#004085;border-color:#004085}.list-group-item-secondary{color:#383d41;background-color:#d6d8db}.list-group-item-secondary.list-group-item-action:focus,.list-group-item-secondary.list-group-item-action:hover{color:#383d41;background-color:#c8cbcf}.list-group-item-secondary.list-group-item-action.active{color:#fff;background-color:#383d41;border-color:#383d41}.list-group-item-success{color:#155724;background-color:#c3e6cb}.list-group-item-success.list-group-item-action:focus,.list-group-item-success.list-group-item-action:hover{color:#155724;background-color:#b1dfbb}.list-group-item-success.list-group-item-action.active{color:#fff;background-color:#155724;border-color:#155724}.list-group-item-info{color:#0c5460;background-color:#bee5eb}.list-group-item-info.list-group-item-action:focus,.list-group-item-info.list-group-item-action:hover{color:#0c5460;background-color:#abdde5}.list-group-item-info.list-group-item-action.active{color:#fff;background-color:#0c5460;border-color:#0c5460}.list-group-item-warning{color:#856404;background-color:#ffeeba}.list-group-item-warning.list-group-item-action:focus,.list-group-item-warning.list-group-item-action:hover{color:#856404;background-color:#ffe8a1}.list-group-item-warning.list-group-item-action.active{color:#fff;background-color:#856404;border-color:#856404}.list-group-item-danger{color:#721c24;background-color:#f5c6cb}.list-group-item-danger.list-group-item-action:focus,.list-group-item-danger.list-group-item-action:hover{color:#721c24;background-color:#f1b0b7}.list-group-item-danger.list-group-item-action.active{color:#fff;background-color:#721c24;border-color:#721c24}.list-group-item-light{color:#818182;background-color:#fdfdfe}.list-group-item-light.list-group-item-action:focus,.list-group-item-light.list-group-item-action:hover{color:#818182;background-color:#ececf6}.list-group-item-light.list-group-item-action.active{color:#fff;background-color:#818182;border-color:#818182}.list-group-item-dark{color:#1b1e21;background-color:#c6c8ca}.list-group-item-dark.list-group-item-action:focus,.list-group-item-dark.list-group-item-action:hover{color:#1b1e21;background-color:#b9bbbe}.list-group-item-dark.list-group-item-action.active{color:#fff;background-color:#1b1e21;border-color:#1b1e21}.close{float:right;font-size:1.5rem;font-weight:700;line-height:1;color:#000;text-shadow:0 1px 0 #fff;opacity:.5}.close:focus,.close:hover{color:#000;text-decoration:none;opacity:.75}.close:not(:disabled):not(.disabled){cursor:pointer}button.close{padding:0;background-color:transparent;border:0;-webkit-appearance:none}.modal-open{overflow:hidden}.modal{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1050;display:none;overflow:hidden;outline:0}.modal-open .modal{overflow-x:hidden;overflow-y:auto}.modal-dialog{position:relative;width:auto;margin:.5rem;pointer-events:none}.modal.fade .modal-dialog{transition:-webkit-transform .3s ease-out;-webkit-transition:-webkit-transform .3s ease-out;transition:transform .3s ease-out;transition:transform .3s ease-out, -webkit-transform .3s ease-out;transition:transform .3s ease-out,-webkit-transform .3s ease-out;-webkit-transform:translate(0,-25%);transform:translate(0,-25%)}.modal.show .modal-dialog{-webkit-transform:translate(0,0);transform:translate(0,0)}.modal-dialog-centered{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;min-height:calc(100% - (.5rem * 2))}.modal-content{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:100%;pointer-events:auto;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,.2);border-radius:.3rem;outline:0}.modal-backdrop{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1040;background-color:#000}.modal-backdrop.fade{opacity:0}.modal-backdrop.show{opacity:.5}.modal-header{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;padding:1rem;border-bottom:1px solid #e9ecef;border-top-left-radius:.3rem;border-top-right-radius:.3rem}.modal-header .close{padding:1rem;margin:-1rem -1rem -1rem auto}.modal-title{margin-bottom:0;line-height:1.5}.modal-body{position:relative;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;padding:1rem}.modal-footer{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;padding:1rem;border-top:1px solid #e9ecef}.modal-footer>:not(:first-child){margin-left:.25rem}.modal-footer>:not(:last-child){margin-right:.25rem}.modal-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}@media (min-width:576px){.modal-dialog{max-width:500px;margin:1.75rem auto}.modal-dialog-centered{min-height:calc(100% - (1.75rem * 2))}.modal-sm{max-width:300px}}@media (min-width:992px){.modal-lg{max-width:800px}}.tooltip{position:absolute;z-index:1070;display:block;margin:0;font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\";font-style:normal;font-weight:400;line-height:1.5;text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-break:normal;word-spacing:normal;white-space:normal;line-break:auto;font-size:.875rem;word-wrap:break-word;opacity:0}.tooltip.show{opacity:.9}.tooltip .arrow{position:absolute;display:block;width:.8rem;height:.4rem}.tooltip .arrow::before{position:absolute;content:\"\";border-color:transparent;border-style:solid}.bs-tooltip-auto[x-placement^=top],.bs-tooltip-top{padding:.4rem 0}.bs-tooltip-auto[x-placement^=top] .arrow,.bs-tooltip-top .arrow{bottom:0}.bs-tooltip-auto[x-placement^=top] .arrow::before,.bs-tooltip-top .arrow::before{top:0;border-width:.4rem .4rem 0;border-top-color:#000}.bs-tooltip-auto[x-placement^=right],.bs-tooltip-right{padding:0 .4rem}.bs-tooltip-auto[x-placement^=right] .arrow,.bs-tooltip-right .arrow{left:0;width:.4rem;height:.8rem}.bs-tooltip-auto[x-placement^=right] .arrow::before,.bs-tooltip-right .arrow::before{right:0;border-width:.4rem .4rem .4rem 0;border-right-color:#000}.bs-tooltip-auto[x-placement^=bottom],.bs-tooltip-bottom{padding:.4rem 0}.bs-tooltip-auto[x-placement^=bottom] .arrow,.bs-tooltip-bottom .arrow{top:0}.bs-tooltip-auto[x-placement^=bottom] .arrow::before,.bs-tooltip-bottom .arrow::before{bottom:0;border-width:0 .4rem .4rem;border-bottom-color:#000}.bs-tooltip-auto[x-placement^=left],.bs-tooltip-left{padding:0 .4rem}.bs-tooltip-auto[x-placement^=left] .arrow,.bs-tooltip-left .arrow{right:0;width:.4rem;height:.8rem}.bs-tooltip-auto[x-placement^=left] .arrow::before,.bs-tooltip-left .arrow::before{left:0;border-width:.4rem 0 .4rem .4rem;border-left-color:#000}.tooltip-inner{max-width:200px;padding:.25rem .5rem;color:#fff;text-align:center;background-color:#000;border-radius:.25rem}.popover{position:absolute;top:0;left:0;z-index:1060;display:block;max-width:276px;font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\";font-style:normal;font-weight:400;line-height:1.5;text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-break:normal;word-spacing:normal;white-space:normal;line-break:auto;font-size:.875rem;word-wrap:break-word;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,.2);border-radius:.3rem}.popover .arrow{position:absolute;display:block;width:1rem;height:.5rem;margin:0 .3rem}.popover .arrow::after,.popover .arrow::before{position:absolute;display:block;content:\"\";border-color:transparent;border-style:solid}.bs-popover-auto[x-placement^=top],.bs-popover-top{margin-bottom:.5rem}.bs-popover-auto[x-placement^=top] .arrow,.bs-popover-top .arrow{bottom:calc((.5rem + 1px) * -1)}.bs-popover-auto[x-placement^=top] .arrow::after,.bs-popover-auto[x-placement^=top] .arrow::before,.bs-popover-top .arrow::after,.bs-popover-top .arrow::before{border-width:.5rem .5rem 0}.bs-popover-auto[x-placement^=top] .arrow::before,.bs-popover-top .arrow::before{bottom:0;border-top-color:rgba(0,0,0,.25)}.bs-popover-auto[x-placement^=top] .arrow::after,.bs-popover-top .arrow::after{bottom:1px;border-top-color:#fff}.bs-popover-auto[x-placement^=right],.bs-popover-right{margin-left:.5rem}.bs-popover-auto[x-placement^=right] .arrow,.bs-popover-right .arrow{left:calc((.5rem + 1px) * -1);width:.5rem;height:1rem;margin:.3rem 0}.bs-popover-auto[x-placement^=right] .arrow::after,.bs-popover-auto[x-placement^=right] .arrow::before,.bs-popover-right .arrow::after,.bs-popover-right .arrow::before{border-width:.5rem .5rem .5rem 0}.bs-popover-auto[x-placement^=right] .arrow::before,.bs-popover-right .arrow::before{left:0;border-right-color:rgba(0,0,0,.25)}.bs-popover-auto[x-placement^=right] .arrow::after,.bs-popover-right .arrow::after{left:1px;border-right-color:#fff}.bs-popover-auto[x-placement^=bottom],.bs-popover-bottom{margin-top:.5rem}.bs-popover-auto[x-placement^=bottom] .arrow,.bs-popover-bottom .arrow{top:calc((.5rem + 1px) * -1)}.bs-popover-auto[x-placement^=bottom] .arrow::after,.bs-popover-auto[x-placement^=bottom] .arrow::before,.bs-popover-bottom .arrow::after,.bs-popover-bottom .arrow::before{border-width:0 .5rem .5rem .5rem}.bs-popover-auto[x-placement^=bottom] .arrow::before,.bs-popover-bottom .arrow::before{top:0;border-bottom-color:rgba(0,0,0,.25)}.bs-popover-auto[x-placement^=bottom] .arrow::after,.bs-popover-bottom .arrow::after{top:1px;border-bottom-color:#fff}.bs-popover-auto[x-placement^=bottom] .popover-header::before,.bs-popover-bottom .popover-header::before{position:absolute;top:0;left:50%;display:block;width:1rem;margin-left:-.5rem;content:\"\";border-bottom:1px solid #f7f7f7}.bs-popover-auto[x-placement^=left],.bs-popover-left{margin-right:.5rem}.bs-popover-auto[x-placement^=left] .arrow,.bs-popover-left .arrow{right:calc((.5rem + 1px) * -1);width:.5rem;height:1rem;margin:.3rem 0}.bs-popover-auto[x-placement^=left] .arrow::after,.bs-popover-auto[x-placement^=left] .arrow::before,.bs-popover-left .arrow::after,.bs-popover-left .arrow::before{border-width:.5rem 0 .5rem .5rem}.bs-popover-auto[x-placement^=left] .arrow::before,.bs-popover-left .arrow::before{right:0;border-left-color:rgba(0,0,0,.25)}.bs-popover-auto[x-placement^=left] .arrow::after,.bs-popover-left .arrow::after{right:1px;border-left-color:#fff}.popover-header{padding:.5rem .75rem;margin-bottom:0;font-size:1rem;color:inherit;background-color:#f7f7f7;border-bottom:1px solid #ebebeb;border-top-left-radius:calc(.3rem - 1px);border-top-right-radius:calc(.3rem - 1px)}.popover-header:empty{display:none}.popover-body{padding:.5rem .75rem;color:#212529}.carousel{position:relative}.carousel-inner{position:relative;width:100%;overflow:hidden}.carousel-item{position:relative;display:none;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;transition:-webkit-transform .6s ease;-webkit-transition:-webkit-transform .6s ease;transition:transform .6s ease;transition:transform .6s ease, -webkit-transform .6s ease;transition:transform .6s ease,-webkit-transform .6s ease;-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-perspective:1000px;perspective:1000px}.carousel-item-next,.carousel-item-prev,.carousel-item.active{display:block}.carousel-item-next,.carousel-item-prev{position:absolute;top:0}.carousel-item-next.carousel-item-left,.carousel-item-prev.carousel-item-right{-webkit-transform:translateX(0);transform:translateX(0)}@supports ((-webkit-transform-style: preserve-3d) or (transform-style: preserve-3d)){.carousel-item-next.carousel-item-left,.carousel-item-prev.carousel-item-right{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}.active.carousel-item-right,.carousel-item-next{-webkit-transform:translateX(100%);transform:translateX(100%)}@supports ((-webkit-transform-style: preserve-3d) or (transform-style: preserve-3d)){.active.carousel-item-right,.carousel-item-next{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}}.active.carousel-item-left,.carousel-item-prev{-webkit-transform:translateX(-100%);transform:translateX(-100%)}@supports ((-webkit-transform-style: preserve-3d) or (transform-style: preserve-3d)){.active.carousel-item-left,.carousel-item-prev{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}}.carousel-control-next,.carousel-control-prev{position:absolute;top:0;bottom:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:15%;color:#fff;text-align:center;opacity:.5}.carousel-control-next:focus,.carousel-control-next:hover,.carousel-control-prev:focus,.carousel-control-prev:hover{color:#fff;text-decoration:none;outline:0;opacity:.9}.carousel-control-prev{left:0}.carousel-control-next{right:0}.carousel-control-next-icon,.carousel-control-prev-icon{display:inline-block;width:20px;height:20px;background:transparent no-repeat center center;background-size:100% 100%}.carousel-control-prev-icon{background-image:url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E\")}.carousel-control-next-icon{background-image:url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3E%3Cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E\")}.carousel-indicators{position:absolute;right:0;bottom:10px;left:0;z-index:15;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding-left:0;margin-right:15%;margin-left:15%;list-style:none}.carousel-indicators li{position:relative;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;width:30px;height:3px;margin-right:3px;margin-left:3px;text-indent:-999px;background-color:rgba(255,255,255,.5)}.carousel-indicators li::before{position:absolute;top:-10px;left:0;display:inline-block;width:100%;height:10px;content:\"\"}.carousel-indicators li::after{position:absolute;bottom:-10px;left:0;display:inline-block;width:100%;height:10px;content:\"\"}.carousel-indicators .active{background-color:#fff}.carousel-caption{position:absolute;right:15%;bottom:20px;left:15%;z-index:10;padding-top:20px;padding-bottom:20px;color:#fff;text-align:center}.align-baseline{vertical-align:baseline!important}.align-top{vertical-align:top!important}.align-middle{vertical-align:middle!important}.align-bottom{vertical-align:bottom!important}.align-text-bottom{vertical-align:text-bottom!important}.align-text-top{vertical-align:text-top!important}.bg-primary{background-color:#007bff!important}a.bg-primary:focus,a.bg-primary:hover,button.bg-primary:focus,button.bg-primary:hover{background-color:#0062cc!important}.bg-secondary{background-color:#6c757d!important}a.bg-secondary:focus,a.bg-secondary:hover,button.bg-secondary:focus,button.bg-secondary:hover{background-color:#545b62!important}.bg-success{background-color:#28a745!important}a.bg-success:focus,a.bg-success:hover,button.bg-success:focus,button.bg-success:hover{background-color:#1e7e34!important}.bg-info{background-color:#17a2b8!important}a.bg-info:focus,a.bg-info:hover,button.bg-info:focus,button.bg-info:hover{background-color:#117a8b!important}.bg-warning{background-color:#ffc107!important}a.bg-warning:focus,a.bg-warning:hover,button.bg-warning:focus,button.bg-warning:hover{background-color:#d39e00!important}.bg-danger{background-color:#dc3545!important}a.bg-danger:focus,a.bg-danger:hover,button.bg-danger:focus,button.bg-danger:hover{background-color:#bd2130!important}.bg-light{background-color:#f8f9fa!important}a.bg-light:focus,a.bg-light:hover,button.bg-light:focus,button.bg-light:hover{background-color:#dae0e5!important}.bg-dark{background-color:#343a40!important}a.bg-dark:focus,a.bg-dark:hover,button.bg-dark:focus,button.bg-dark:hover{background-color:#1d2124!important}.bg-white{background-color:#fff!important}.bg-transparent{background-color:transparent!important}.border{border:1px solid #dee2e6!important}.border-top{border-top:1px solid #dee2e6!important}.border-right{border-right:1px solid #dee2e6!important}.border-bottom{border-bottom:1px solid #dee2e6!important}.border-left{border-left:1px solid #dee2e6!important}.border-0{border:0!important}.border-top-0{border-top:0!important}.border-right-0{border-right:0!important}.border-bottom-0{border-bottom:0!important}.border-left-0{border-left:0!important}.border-primary{border-color:#007bff!important}.border-secondary{border-color:#6c757d!important}.border-success{border-color:#28a745!important}.border-info{border-color:#17a2b8!important}.border-warning{border-color:#ffc107!important}.border-danger{border-color:#dc3545!important}.border-light{border-color:#f8f9fa!important}.border-dark{border-color:#343a40!important}.border-white{border-color:#fff!important}.rounded{border-radius:.25rem!important}.rounded-top{border-top-left-radius:.25rem!important;border-top-right-radius:.25rem!important}.rounded-right{border-top-right-radius:.25rem!important;border-bottom-right-radius:.25rem!important}.rounded-bottom{border-bottom-right-radius:.25rem!important;border-bottom-left-radius:.25rem!important}.rounded-left{border-top-left-radius:.25rem!important;border-bottom-left-radius:.25rem!important}.rounded-circle{border-radius:50%!important}.rounded-0{border-radius:0!important}.clearfix::after{display:block;clear:both;content:\"\"}.d-none{display:none!important}.d-inline{display:inline!important}.d-inline-block{display:inline-block!important}.d-block{display:block!important}.d-table{display:table!important}.d-table-row{display:table-row!important}.d-table-cell{display:table-cell!important}.d-flex{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important}.d-inline-flex{display:-webkit-inline-box!important;display:-ms-inline-flexbox!important;display:inline-flex!important}@media (min-width:576px){.d-sm-none{display:none!important}.d-sm-inline{display:inline!important}.d-sm-inline-block{display:inline-block!important}.d-sm-block{display:block!important}.d-sm-table{display:table!important}.d-sm-table-row{display:table-row!important}.d-sm-table-cell{display:table-cell!important}.d-sm-flex{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important}.d-sm-inline-flex{display:-webkit-inline-box!important;display:-ms-inline-flexbox!important;display:inline-flex!important}}@media (min-width:768px){.d-md-none{display:none!important}.d-md-inline{display:inline!important}.d-md-inline-block{display:inline-block!important}.d-md-block{display:block!important}.d-md-table{display:table!important}.d-md-table-row{display:table-row!important}.d-md-table-cell{display:table-cell!important}.d-md-flex{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important}.d-md-inline-flex{display:-webkit-inline-box!important;display:-ms-inline-flexbox!important;display:inline-flex!important}}@media (min-width:992px){.d-lg-none{display:none!important}.d-lg-inline{display:inline!important}.d-lg-inline-block{display:inline-block!important}.d-lg-block{display:block!important}.d-lg-table{display:table!important}.d-lg-table-row{display:table-row!important}.d-lg-table-cell{display:table-cell!important}.d-lg-flex{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important}.d-lg-inline-flex{display:-webkit-inline-box!important;display:-ms-inline-flexbox!important;display:inline-flex!important}}@media (min-width:1200px){.d-xl-none{display:none!important}.d-xl-inline{display:inline!important}.d-xl-inline-block{display:inline-block!important}.d-xl-block{display:block!important}.d-xl-table{display:table!important}.d-xl-table-row{display:table-row!important}.d-xl-table-cell{display:table-cell!important}.d-xl-flex{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important}.d-xl-inline-flex{display:-webkit-inline-box!important;display:-ms-inline-flexbox!important;display:inline-flex!important}}@media print{.d-print-none{display:none!important}.d-print-inline{display:inline!important}.d-print-inline-block{display:inline-block!important}.d-print-block{display:block!important}.d-print-table{display:table!important}.d-print-table-row{display:table-row!important}.d-print-table-cell{display:table-cell!important}.d-print-flex{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important}.d-print-inline-flex{display:-webkit-inline-box!important;display:-ms-inline-flexbox!important;display:inline-flex!important}}.embed-responsive{position:relative;display:block;width:100%;padding:0;overflow:hidden}.embed-responsive::before{display:block;content:\"\"}.embed-responsive .embed-responsive-item,.embed-responsive embed,.embed-responsive iframe,.embed-responsive object,.embed-responsive video{position:absolute;top:0;bottom:0;left:0;width:100%;height:100%;border:0}.embed-responsive-21by9::before{padding-top:42.857143%}.embed-responsive-16by9::before{padding-top:56.25%}.embed-responsive-4by3::before{padding-top:75%}.embed-responsive-1by1::before{padding-top:100%}.flex-row{-webkit-box-orient:horizontal!important;-webkit-box-direction:normal!important;-ms-flex-direction:row!important;flex-direction:row!important}.flex-column{-webkit-box-orient:vertical!important;-webkit-box-direction:normal!important;-ms-flex-direction:column!important;flex-direction:column!important}.flex-row-reverse{-webkit-box-orient:horizontal!important;-webkit-box-direction:reverse!important;-ms-flex-direction:row-reverse!important;flex-direction:row-reverse!important}.flex-column-reverse{-webkit-box-orient:vertical!important;-webkit-box-direction:reverse!important;-ms-flex-direction:column-reverse!important;flex-direction:column-reverse!important}.flex-wrap{-ms-flex-wrap:wrap!important;flex-wrap:wrap!important}.flex-nowrap{-ms-flex-wrap:nowrap!important;flex-wrap:nowrap!important}.flex-wrap-reverse{-ms-flex-wrap:wrap-reverse!important;flex-wrap:wrap-reverse!important}.justify-content-start{-webkit-box-pack:start!important;-ms-flex-pack:start!important;justify-content:flex-start!important}.justify-content-end{-webkit-box-pack:end!important;-ms-flex-pack:end!important;justify-content:flex-end!important}.justify-content-center{-webkit-box-pack:center!important;-ms-flex-pack:center!important;justify-content:center!important}.justify-content-between{-webkit-box-pack:justify!important;-ms-flex-pack:justify!important;justify-content:space-between!important}.justify-content-around{-ms-flex-pack:distribute!important;justify-content:space-around!important}.align-items-start{-webkit-box-align:start!important;-ms-flex-align:start!important;align-items:flex-start!important}.align-items-end{-webkit-box-align:end!important;-ms-flex-align:end!important;align-items:flex-end!important}.align-items-center{-webkit-box-align:center!important;-ms-flex-align:center!important;align-items:center!important}.align-items-baseline{-webkit-box-align:baseline!important;-ms-flex-align:baseline!important;align-items:baseline!important}.align-items-stretch{-webkit-box-align:stretch!important;-ms-flex-align:stretch!important;align-items:stretch!important}.align-content-start{-ms-flex-line-pack:start!important;align-content:flex-start!important}.align-content-end{-ms-flex-line-pack:end!important;align-content:flex-end!important}.align-content-center{-ms-flex-line-pack:center!important;align-content:center!important}.align-content-between{-ms-flex-line-pack:justify!important;align-content:space-between!important}.align-content-around{-ms-flex-line-pack:distribute!important;align-content:space-around!important}.align-content-stretch{-ms-flex-line-pack:stretch!important;align-content:stretch!important}.align-self-auto{-ms-flex-item-align:auto!important;-ms-grid-row-align:auto!important;align-self:auto!important}.align-self-start{-ms-flex-item-align:start!important;align-self:flex-start!important}.align-self-end{-ms-flex-item-align:end!important;align-self:flex-end!important}.align-self-center{-ms-flex-item-align:center!important;-ms-grid-row-align:center!important;align-self:center!important}.align-self-baseline{-ms-flex-item-align:baseline!important;align-self:baseline!important}.align-self-stretch{-ms-flex-item-align:stretch!important;-ms-grid-row-align:stretch!important;align-self:stretch!important}@media (min-width:576px){.flex-sm-row{-webkit-box-orient:horizontal!important;-webkit-box-direction:normal!important;-ms-flex-direction:row!important;flex-direction:row!important}.flex-sm-column{-webkit-box-orient:vertical!important;-webkit-box-direction:normal!important;-ms-flex-direction:column!important;flex-direction:column!important}.flex-sm-row-reverse{-webkit-box-orient:horizontal!important;-webkit-box-direction:reverse!important;-ms-flex-direction:row-reverse!important;flex-direction:row-reverse!important}.flex-sm-column-reverse{-webkit-box-orient:vertical!important;-webkit-box-direction:reverse!important;-ms-flex-direction:column-reverse!important;flex-direction:column-reverse!important}.flex-sm-wrap{-ms-flex-wrap:wrap!important;flex-wrap:wrap!important}.flex-sm-nowrap{-ms-flex-wrap:nowrap!important;flex-wrap:nowrap!important}.flex-sm-wrap-reverse{-ms-flex-wrap:wrap-reverse!important;flex-wrap:wrap-reverse!important}.justify-content-sm-start{-webkit-box-pack:start!important;-ms-flex-pack:start!important;justify-content:flex-start!important}.justify-content-sm-end{-webkit-box-pack:end!important;-ms-flex-pack:end!important;justify-content:flex-end!important}.justify-content-sm-center{-webkit-box-pack:center!important;-ms-flex-pack:center!important;justify-content:center!important}.justify-content-sm-between{-webkit-box-pack:justify!important;-ms-flex-pack:justify!important;justify-content:space-between!important}.justify-content-sm-around{-ms-flex-pack:distribute!important;justify-content:space-around!important}.align-items-sm-start{-webkit-box-align:start!important;-ms-flex-align:start!important;align-items:flex-start!important}.align-items-sm-end{-webkit-box-align:end!important;-ms-flex-align:end!important;align-items:flex-end!important}.align-items-sm-center{-webkit-box-align:center!important;-ms-flex-align:center!important;align-items:center!important}.align-items-sm-baseline{-webkit-box-align:baseline!important;-ms-flex-align:baseline!important;align-items:baseline!important}.align-items-sm-stretch{-webkit-box-align:stretch!important;-ms-flex-align:stretch!important;align-items:stretch!important}.align-content-sm-start{-ms-flex-line-pack:start!important;align-content:flex-start!important}.align-content-sm-end{-ms-flex-line-pack:end!important;align-content:flex-end!important}.align-content-sm-center{-ms-flex-line-pack:center!important;align-content:center!important}.align-content-sm-between{-ms-flex-line-pack:justify!important;align-content:space-between!important}.align-content-sm-around{-ms-flex-line-pack:distribute!important;align-content:space-around!important}.align-content-sm-stretch{-ms-flex-line-pack:stretch!important;align-content:stretch!important}.align-self-sm-auto{-ms-flex-item-align:auto!important;-ms-grid-row-align:auto!important;align-self:auto!important}.align-self-sm-start{-ms-flex-item-align:start!important;align-self:flex-start!important}.align-self-sm-end{-ms-flex-item-align:end!important;align-self:flex-end!important}.align-self-sm-center{-ms-flex-item-align:center!important;-ms-grid-row-align:center!important;align-self:center!important}.align-self-sm-baseline{-ms-flex-item-align:baseline!important;align-self:baseline!important}.align-self-sm-stretch{-ms-flex-item-align:stretch!important;-ms-grid-row-align:stretch!important;align-self:stretch!important}}@media (min-width:768px){.flex-md-row{-webkit-box-orient:horizontal!important;-webkit-box-direction:normal!important;-ms-flex-direction:row!important;flex-direction:row!important}.flex-md-column{-webkit-box-orient:vertical!important;-webkit-box-direction:normal!important;-ms-flex-direction:column!important;flex-direction:column!important}.flex-md-row-reverse{-webkit-box-orient:horizontal!important;-webkit-box-direction:reverse!important;-ms-flex-direction:row-reverse!important;flex-direction:row-reverse!important}.flex-md-column-reverse{-webkit-box-orient:vertical!important;-webkit-box-direction:reverse!important;-ms-flex-direction:column-reverse!important;flex-direction:column-reverse!important}.flex-md-wrap{-ms-flex-wrap:wrap!important;flex-wrap:wrap!important}.flex-md-nowrap{-ms-flex-wrap:nowrap!important;flex-wrap:nowrap!important}.flex-md-wrap-reverse{-ms-flex-wrap:wrap-reverse!important;flex-wrap:wrap-reverse!important}.justify-content-md-start{-webkit-box-pack:start!important;-ms-flex-pack:start!important;justify-content:flex-start!important}.justify-content-md-end{-webkit-box-pack:end!important;-ms-flex-pack:end!important;justify-content:flex-end!important}.justify-content-md-center{-webkit-box-pack:center!important;-ms-flex-pack:center!important;justify-content:center!important}.justify-content-md-between{-webkit-box-pack:justify!important;-ms-flex-pack:justify!important;justify-content:space-between!important}.justify-content-md-around{-ms-flex-pack:distribute!important;justify-content:space-around!important}.align-items-md-start{-webkit-box-align:start!important;-ms-flex-align:start!important;align-items:flex-start!important}.align-items-md-end{-webkit-box-align:end!important;-ms-flex-align:end!important;align-items:flex-end!important}.align-items-md-center{-webkit-box-align:center!important;-ms-flex-align:center!important;align-items:center!important}.align-items-md-baseline{-webkit-box-align:baseline!important;-ms-flex-align:baseline!important;align-items:baseline!important}.align-items-md-stretch{-webkit-box-align:stretch!important;-ms-flex-align:stretch!important;align-items:stretch!important}.align-content-md-start{-ms-flex-line-pack:start!important;align-content:flex-start!important}.align-content-md-end{-ms-flex-line-pack:end!important;align-content:flex-end!important}.align-content-md-center{-ms-flex-line-pack:center!important;align-content:center!important}.align-content-md-between{-ms-flex-line-pack:justify!important;align-content:space-between!important}.align-content-md-around{-ms-flex-line-pack:distribute!important;align-content:space-around!important}.align-content-md-stretch{-ms-flex-line-pack:stretch!important;align-content:stretch!important}.align-self-md-auto{-ms-flex-item-align:auto!important;-ms-grid-row-align:auto!important;align-self:auto!important}.align-self-md-start{-ms-flex-item-align:start!important;align-self:flex-start!important}.align-self-md-end{-ms-flex-item-align:end!important;align-self:flex-end!important}.align-self-md-center{-ms-flex-item-align:center!important;-ms-grid-row-align:center!important;align-self:center!important}.align-self-md-baseline{-ms-flex-item-align:baseline!important;align-self:baseline!important}.align-self-md-stretch{-ms-flex-item-align:stretch!important;-ms-grid-row-align:stretch!important;align-self:stretch!important}}@media (min-width:992px){.flex-lg-row{-webkit-box-orient:horizontal!important;-webkit-box-direction:normal!important;-ms-flex-direction:row!important;flex-direction:row!important}.flex-lg-column{-webkit-box-orient:vertical!important;-webkit-box-direction:normal!important;-ms-flex-direction:column!important;flex-direction:column!important}.flex-lg-row-reverse{-webkit-box-orient:horizontal!important;-webkit-box-direction:reverse!important;-ms-flex-direction:row-reverse!important;flex-direction:row-reverse!important}.flex-lg-column-reverse{-webkit-box-orient:vertical!important;-webkit-box-direction:reverse!important;-ms-flex-direction:column-reverse!important;flex-direction:column-reverse!important}.flex-lg-wrap{-ms-flex-wrap:wrap!important;flex-wrap:wrap!important}.flex-lg-nowrap{-ms-flex-wrap:nowrap!important;flex-wrap:nowrap!important}.flex-lg-wrap-reverse{-ms-flex-wrap:wrap-reverse!important;flex-wrap:wrap-reverse!important}.justify-content-lg-start{-webkit-box-pack:start!important;-ms-flex-pack:start!important;justify-content:flex-start!important}.justify-content-lg-end{-webkit-box-pack:end!important;-ms-flex-pack:end!important;justify-content:flex-end!important}.justify-content-lg-center{-webkit-box-pack:center!important;-ms-flex-pack:center!important;justify-content:center!important}.justify-content-lg-between{-webkit-box-pack:justify!important;-ms-flex-pack:justify!important;justify-content:space-between!important}.justify-content-lg-around{-ms-flex-pack:distribute!important;justify-content:space-around!important}.align-items-lg-start{-webkit-box-align:start!important;-ms-flex-align:start!important;align-items:flex-start!important}.align-items-lg-end{-webkit-box-align:end!important;-ms-flex-align:end!important;align-items:flex-end!important}.align-items-lg-center{-webkit-box-align:center!important;-ms-flex-align:center!important;align-items:center!important}.align-items-lg-baseline{-webkit-box-align:baseline!important;-ms-flex-align:baseline!important;align-items:baseline!important}.align-items-lg-stretch{-webkit-box-align:stretch!important;-ms-flex-align:stretch!important;align-items:stretch!important}.align-content-lg-start{-ms-flex-line-pack:start!important;align-content:flex-start!important}.align-content-lg-end{-ms-flex-line-pack:end!important;align-content:flex-end!important}.align-content-lg-center{-ms-flex-line-pack:center!important;align-content:center!important}.align-content-lg-between{-ms-flex-line-pack:justify!important;align-content:space-between!important}.align-content-lg-around{-ms-flex-line-pack:distribute!important;align-content:space-around!important}.align-content-lg-stretch{-ms-flex-line-pack:stretch!important;align-content:stretch!important}.align-self-lg-auto{-ms-flex-item-align:auto!important;-ms-grid-row-align:auto!important;align-self:auto!important}.align-self-lg-start{-ms-flex-item-align:start!important;align-self:flex-start!important}.align-self-lg-end{-ms-flex-item-align:end!important;align-self:flex-end!important}.align-self-lg-center{-ms-flex-item-align:center!important;-ms-grid-row-align:center!important;align-self:center!important}.align-self-lg-baseline{-ms-flex-item-align:baseline!important;align-self:baseline!important}.align-self-lg-stretch{-ms-flex-item-align:stretch!important;-ms-grid-row-align:stretch!important;align-self:stretch!important}}@media (min-width:1200px){.flex-xl-row{-webkit-box-orient:horizontal!important;-webkit-box-direction:normal!important;-ms-flex-direction:row!important;flex-direction:row!important}.flex-xl-column{-webkit-box-orient:vertical!important;-webkit-box-direction:normal!important;-ms-flex-direction:column!important;flex-direction:column!important}.flex-xl-row-reverse{-webkit-box-orient:horizontal!important;-webkit-box-direction:reverse!important;-ms-flex-direction:row-reverse!important;flex-direction:row-reverse!important}.flex-xl-column-reverse{-webkit-box-orient:vertical!important;-webkit-box-direction:reverse!important;-ms-flex-direction:column-reverse!important;flex-direction:column-reverse!important}.flex-xl-wrap{-ms-flex-wrap:wrap!important;flex-wrap:wrap!important}.flex-xl-nowrap{-ms-flex-wrap:nowrap!important;flex-wrap:nowrap!important}.flex-xl-wrap-reverse{-ms-flex-wrap:wrap-reverse!important;flex-wrap:wrap-reverse!important}.justify-content-xl-start{-webkit-box-pack:start!important;-ms-flex-pack:start!important;justify-content:flex-start!important}.justify-content-xl-end{-webkit-box-pack:end!important;-ms-flex-pack:end!important;justify-content:flex-end!important}.justify-content-xl-center{-webkit-box-pack:center!important;-ms-flex-pack:center!important;justify-content:center!important}.justify-content-xl-between{-webkit-box-pack:justify!important;-ms-flex-pack:justify!important;justify-content:space-between!important}.justify-content-xl-around{-ms-flex-pack:distribute!important;justify-content:space-around!important}.align-items-xl-start{-webkit-box-align:start!important;-ms-flex-align:start!important;align-items:flex-start!important}.align-items-xl-end{-webkit-box-align:end!important;-ms-flex-align:end!important;align-items:flex-end!important}.align-items-xl-center{-webkit-box-align:center!important;-ms-flex-align:center!important;align-items:center!important}.align-items-xl-baseline{-webkit-box-align:baseline!important;-ms-flex-align:baseline!important;align-items:baseline!important}.align-items-xl-stretch{-webkit-box-align:stretch!important;-ms-flex-align:stretch!important;align-items:stretch!important}.align-content-xl-start{-ms-flex-line-pack:start!important;align-content:flex-start!important}.align-content-xl-end{-ms-flex-line-pack:end!important;align-content:flex-end!important}.align-content-xl-center{-ms-flex-line-pack:center!important;align-content:center!important}.align-content-xl-between{-ms-flex-line-pack:justify!important;align-content:space-between!important}.align-content-xl-around{-ms-flex-line-pack:distribute!important;align-content:space-around!important}.align-content-xl-stretch{-ms-flex-line-pack:stretch!important;align-content:stretch!important}.align-self-xl-auto{-ms-flex-item-align:auto!important;-ms-grid-row-align:auto!important;align-self:auto!important}.align-self-xl-start{-ms-flex-item-align:start!important;align-self:flex-start!important}.align-self-xl-end{-ms-flex-item-align:end!important;align-self:flex-end!important}.align-self-xl-center{-ms-flex-item-align:center!important;-ms-grid-row-align:center!important;align-self:center!important}.align-self-xl-baseline{-ms-flex-item-align:baseline!important;align-self:baseline!important}.align-self-xl-stretch{-ms-flex-item-align:stretch!important;-ms-grid-row-align:stretch!important;align-self:stretch!important}}.float-left{float:left!important}.float-right{float:right!important}.float-none{float:none!important}@media (min-width:576px){.float-sm-left{float:left!important}.float-sm-right{float:right!important}.float-sm-none{float:none!important}}@media (min-width:768px){.float-md-left{float:left!important}.float-md-right{float:right!important}.float-md-none{float:none!important}}@media (min-width:992px){.float-lg-left{float:left!important}.float-lg-right{float:right!important}.float-lg-none{float:none!important}}@media (min-width:1200px){.float-xl-left{float:left!important}.float-xl-right{float:right!important}.float-xl-none{float:none!important}}.position-static{position:static!important}.position-relative{position:relative!important}.position-absolute{position:absolute!important}.position-fixed{position:fixed!important}.position-sticky{position:-webkit-sticky!important;position:sticky!important}.fixed-top{position:fixed;top:0;right:0;left:0;z-index:1030}.fixed-bottom{position:fixed;right:0;bottom:0;left:0;z-index:1030}@supports ((position: -webkit-sticky) or (position: sticky)){.sticky-top{position:-webkit-sticky;position:sticky;top:0;z-index:1020}}.sr-only{position:absolute;width:1px;height:1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;-webkit-clip-path:inset(50%);clip-path:inset(50%);border:0}.sr-only-focusable:active,.sr-only-focusable:focus{position:static;width:auto;height:auto;overflow:visible;clip:auto;white-space:normal;-webkit-clip-path:none;clip-path:none}.w-25{width:25%!important}.w-50{width:50%!important}.w-75{width:75%!important}.w-100{width:100%!important}.h-25{height:25%!important}.h-50{height:50%!important}.h-75{height:75%!important}.h-100{height:100%!important}.mw-100{max-width:100%!important}.mh-100{max-height:100%!important}.m-0{margin:0!important}.mt-0,.my-0{margin-top:0!important}.mr-0,.mx-0{margin-right:0!important}.mb-0,.my-0{margin-bottom:0!important}.ml-0,.mx-0{margin-left:0!important}.m-1{margin:.25rem!important}.mt-1,.my-1{margin-top:.25rem!important}.mr-1,.mx-1{margin-right:.25rem!important}.mb-1,.my-1{margin-bottom:.25rem!important}.ml-1,.mx-1{margin-left:.25rem!important}.m-2{margin:.5rem!important}.mt-2,.my-2{margin-top:.5rem!important}.mr-2,.mx-2{margin-right:.5rem!important}.mb-2,.my-2{margin-bottom:.5rem!important}.ml-2,.mx-2{margin-left:.5rem!important}.m-3{margin:1rem!important}.mt-3,.my-3{margin-top:1rem!important}.mr-3,.mx-3{margin-right:1rem!important}.mb-3,.my-3{margin-bottom:1rem!important}.ml-3,.mx-3{margin-left:1rem!important}.m-4{margin:1.5rem!important}.mt-4,.my-4{margin-top:1.5rem!important}.mr-4,.mx-4{margin-right:1.5rem!important}.mb-4,.my-4{margin-bottom:1.5rem!important}.ml-4,.mx-4{margin-left:1.5rem!important}.m-5{margin:3rem!important}.mt-5,.my-5{margin-top:3rem!important}.mr-5,.mx-5{margin-right:3rem!important}.mb-5,.my-5{margin-bottom:3rem!important}.ml-5,.mx-5{margin-left:3rem!important}.p-0{padding:0!important}.pt-0,.py-0{padding-top:0!important}.pr-0,.px-0{padding-right:0!important}.pb-0,.py-0{padding-bottom:0!important}.pl-0,.px-0{padding-left:0!important}.p-1{padding:.25rem!important}.pt-1,.py-1{padding-top:.25rem!important}.pr-1,.px-1{padding-right:.25rem!important}.pb-1,.py-1{padding-bottom:.25rem!important}.pl-1,.px-1{padding-left:.25rem!important}.p-2{padding:.5rem!important}.pt-2,.py-2{padding-top:.5rem!important}.pr-2,.px-2{padding-right:.5rem!important}.pb-2,.py-2{padding-bottom:.5rem!important}.pl-2,.px-2{padding-left:.5rem!important}.p-3{padding:1rem!important}.pt-3,.py-3{padding-top:1rem!important}.pr-3,.px-3{padding-right:1rem!important}.pb-3,.py-3{padding-bottom:1rem!important}.pl-3,.px-3{padding-left:1rem!important}.p-4{padding:1.5rem!important}.pt-4,.py-4{padding-top:1.5rem!important}.pr-4,.px-4{padding-right:1.5rem!important}.pb-4,.py-4{padding-bottom:1.5rem!important}.pl-4,.px-4{padding-left:1.5rem!important}.p-5{padding:3rem!important}.pt-5,.py-5{padding-top:3rem!important}.pr-5,.px-5{padding-right:3rem!important}.pb-5,.py-5{padding-bottom:3rem!important}.pl-5,.px-5{padding-left:3rem!important}.m-auto{margin:auto!important}.mt-auto,.my-auto{margin-top:auto!important}.mr-auto,.mx-auto{margin-right:auto!important}.mb-auto,.my-auto{margin-bottom:auto!important}.ml-auto,.mx-auto{margin-left:auto!important}@media (min-width:576px){.m-sm-0{margin:0!important}.mt-sm-0,.my-sm-0{margin-top:0!important}.mr-sm-0,.mx-sm-0{margin-right:0!important}.mb-sm-0,.my-sm-0{margin-bottom:0!important}.ml-sm-0,.mx-sm-0{margin-left:0!important}.m-sm-1{margin:.25rem!important}.mt-sm-1,.my-sm-1{margin-top:.25rem!important}.mr-sm-1,.mx-sm-1{margin-right:.25rem!important}.mb-sm-1,.my-sm-1{margin-bottom:.25rem!important}.ml-sm-1,.mx-sm-1{margin-left:.25rem!important}.m-sm-2{margin:.5rem!important}.mt-sm-2,.my-sm-2{margin-top:.5rem!important}.mr-sm-2,.mx-sm-2{margin-right:.5rem!important}.mb-sm-2,.my-sm-2{margin-bottom:.5rem!important}.ml-sm-2,.mx-sm-2{margin-left:.5rem!important}.m-sm-3{margin:1rem!important}.mt-sm-3,.my-sm-3{margin-top:1rem!important}.mr-sm-3,.mx-sm-3{margin-right:1rem!important}.mb-sm-3,.my-sm-3{margin-bottom:1rem!important}.ml-sm-3,.mx-sm-3{margin-left:1rem!important}.m-sm-4{margin:1.5rem!important}.mt-sm-4,.my-sm-4{margin-top:1.5rem!important}.mr-sm-4,.mx-sm-4{margin-right:1.5rem!important}.mb-sm-4,.my-sm-4{margin-bottom:1.5rem!important}.ml-sm-4,.mx-sm-4{margin-left:1.5rem!important}.m-sm-5{margin:3rem!important}.mt-sm-5,.my-sm-5{margin-top:3rem!important}.mr-sm-5,.mx-sm-5{margin-right:3rem!important}.mb-sm-5,.my-sm-5{margin-bottom:3rem!important}.ml-sm-5,.mx-sm-5{margin-left:3rem!important}.p-sm-0{padding:0!important}.pt-sm-0,.py-sm-0{padding-top:0!important}.pr-sm-0,.px-sm-0{padding-right:0!important}.pb-sm-0,.py-sm-0{padding-bottom:0!important}.pl-sm-0,.px-sm-0{padding-left:0!important}.p-sm-1{padding:.25rem!important}.pt-sm-1,.py-sm-1{padding-top:.25rem!important}.pr-sm-1,.px-sm-1{padding-right:.25rem!important}.pb-sm-1,.py-sm-1{padding-bottom:.25rem!important}.pl-sm-1,.px-sm-1{padding-left:.25rem!important}.p-sm-2{padding:.5rem!important}.pt-sm-2,.py-sm-2{padding-top:.5rem!important}.pr-sm-2,.px-sm-2{padding-right:.5rem!important}.pb-sm-2,.py-sm-2{padding-bottom:.5rem!important}.pl-sm-2,.px-sm-2{padding-left:.5rem!important}.p-sm-3{padding:1rem!important}.pt-sm-3,.py-sm-3{padding-top:1rem!important}.pr-sm-3,.px-sm-3{padding-right:1rem!important}.pb-sm-3,.py-sm-3{padding-bottom:1rem!important}.pl-sm-3,.px-sm-3{padding-left:1rem!important}.p-sm-4{padding:1.5rem!important}.pt-sm-4,.py-sm-4{padding-top:1.5rem!important}.pr-sm-4,.px-sm-4{padding-right:1.5rem!important}.pb-sm-4,.py-sm-4{padding-bottom:1.5rem!important}.pl-sm-4,.px-sm-4{padding-left:1.5rem!important}.p-sm-5{padding:3rem!important}.pt-sm-5,.py-sm-5{padding-top:3rem!important}.pr-sm-5,.px-sm-5{padding-right:3rem!important}.pb-sm-5,.py-sm-5{padding-bottom:3rem!important}.pl-sm-5,.px-sm-5{padding-left:3rem!important}.m-sm-auto{margin:auto!important}.mt-sm-auto,.my-sm-auto{margin-top:auto!important}.mr-sm-auto,.mx-sm-auto{margin-right:auto!important}.mb-sm-auto,.my-sm-auto{margin-bottom:auto!important}.ml-sm-auto,.mx-sm-auto{margin-left:auto!important}}@media (min-width:768px){.m-md-0{margin:0!important}.mt-md-0,.my-md-0{margin-top:0!important}.mr-md-0,.mx-md-0{margin-right:0!important}.mb-md-0,.my-md-0{margin-bottom:0!important}.ml-md-0,.mx-md-0{margin-left:0!important}.m-md-1{margin:.25rem!important}.mt-md-1,.my-md-1{margin-top:.25rem!important}.mr-md-1,.mx-md-1{margin-right:.25rem!important}.mb-md-1,.my-md-1{margin-bottom:.25rem!important}.ml-md-1,.mx-md-1{margin-left:.25rem!important}.m-md-2{margin:.5rem!important}.mt-md-2,.my-md-2{margin-top:.5rem!important}.mr-md-2,.mx-md-2{margin-right:.5rem!important}.mb-md-2,.my-md-2{margin-bottom:.5rem!important}.ml-md-2,.mx-md-2{margin-left:.5rem!important}.m-md-3{margin:1rem!important}.mt-md-3,.my-md-3{margin-top:1rem!important}.mr-md-3,.mx-md-3{margin-right:1rem!important}.mb-md-3,.my-md-3{margin-bottom:1rem!important}.ml-md-3,.mx-md-3{margin-left:1rem!important}.m-md-4{margin:1.5rem!important}.mt-md-4,.my-md-4{margin-top:1.5rem!important}.mr-md-4,.mx-md-4{margin-right:1.5rem!important}.mb-md-4,.my-md-4{margin-bottom:1.5rem!important}.ml-md-4,.mx-md-4{margin-left:1.5rem!important}.m-md-5{margin:3rem!important}.mt-md-5,.my-md-5{margin-top:3rem!important}.mr-md-5,.mx-md-5{margin-right:3rem!important}.mb-md-5,.my-md-5{margin-bottom:3rem!important}.ml-md-5,.mx-md-5{margin-left:3rem!important}.p-md-0{padding:0!important}.pt-md-0,.py-md-0{padding-top:0!important}.pr-md-0,.px-md-0{padding-right:0!important}.pb-md-0,.py-md-0{padding-bottom:0!important}.pl-md-0,.px-md-0{padding-left:0!important}.p-md-1{padding:.25rem!important}.pt-md-1,.py-md-1{padding-top:.25rem!important}.pr-md-1,.px-md-1{padding-right:.25rem!important}.pb-md-1,.py-md-1{padding-bottom:.25rem!important}.pl-md-1,.px-md-1{padding-left:.25rem!important}.p-md-2{padding:.5rem!important}.pt-md-2,.py-md-2{padding-top:.5rem!important}.pr-md-2,.px-md-2{padding-right:.5rem!important}.pb-md-2,.py-md-2{padding-bottom:.5rem!important}.pl-md-2,.px-md-2{padding-left:.5rem!important}.p-md-3{padding:1rem!important}.pt-md-3,.py-md-3{padding-top:1rem!important}.pr-md-3,.px-md-3{padding-right:1rem!important}.pb-md-3,.py-md-3{padding-bottom:1rem!important}.pl-md-3,.px-md-3{padding-left:1rem!important}.p-md-4{padding:1.5rem!important}.pt-md-4,.py-md-4{padding-top:1.5rem!important}.pr-md-4,.px-md-4{padding-right:1.5rem!important}.pb-md-4,.py-md-4{padding-bottom:1.5rem!important}.pl-md-4,.px-md-4{padding-left:1.5rem!important}.p-md-5{padding:3rem!important}.pt-md-5,.py-md-5{padding-top:3rem!important}.pr-md-5,.px-md-5{padding-right:3rem!important}.pb-md-5,.py-md-5{padding-bottom:3rem!important}.pl-md-5,.px-md-5{padding-left:3rem!important}.m-md-auto{margin:auto!important}.mt-md-auto,.my-md-auto{margin-top:auto!important}.mr-md-auto,.mx-md-auto{margin-right:auto!important}.mb-md-auto,.my-md-auto{margin-bottom:auto!important}.ml-md-auto,.mx-md-auto{margin-left:auto!important}}@media (min-width:992px){.m-lg-0{margin:0!important}.mt-lg-0,.my-lg-0{margin-top:0!important}.mr-lg-0,.mx-lg-0{margin-right:0!important}.mb-lg-0,.my-lg-0{margin-bottom:0!important}.ml-lg-0,.mx-lg-0{margin-left:0!important}.m-lg-1{margin:.25rem!important}.mt-lg-1,.my-lg-1{margin-top:.25rem!important}.mr-lg-1,.mx-lg-1{margin-right:.25rem!important}.mb-lg-1,.my-lg-1{margin-bottom:.25rem!important}.ml-lg-1,.mx-lg-1{margin-left:.25rem!important}.m-lg-2{margin:.5rem!important}.mt-lg-2,.my-lg-2{margin-top:.5rem!important}.mr-lg-2,.mx-lg-2{margin-right:.5rem!important}.mb-lg-2,.my-lg-2{margin-bottom:.5rem!important}.ml-lg-2,.mx-lg-2{margin-left:.5rem!important}.m-lg-3{margin:1rem!important}.mt-lg-3,.my-lg-3{margin-top:1rem!important}.mr-lg-3,.mx-lg-3{margin-right:1rem!important}.mb-lg-3,.my-lg-3{margin-bottom:1rem!important}.ml-lg-3,.mx-lg-3{margin-left:1rem!important}.m-lg-4{margin:1.5rem!important}.mt-lg-4,.my-lg-4{margin-top:1.5rem!important}.mr-lg-4,.mx-lg-4{margin-right:1.5rem!important}.mb-lg-4,.my-lg-4{margin-bottom:1.5rem!important}.ml-lg-4,.mx-lg-4{margin-left:1.5rem!important}.m-lg-5{margin:3rem!important}.mt-lg-5,.my-lg-5{margin-top:3rem!important}.mr-lg-5,.mx-lg-5{margin-right:3rem!important}.mb-lg-5,.my-lg-5{margin-bottom:3rem!important}.ml-lg-5,.mx-lg-5{margin-left:3rem!important}.p-lg-0{padding:0!important}.pt-lg-0,.py-lg-0{padding-top:0!important}.pr-lg-0,.px-lg-0{padding-right:0!important}.pb-lg-0,.py-lg-0{padding-bottom:0!important}.pl-lg-0,.px-lg-0{padding-left:0!important}.p-lg-1{padding:.25rem!important}.pt-lg-1,.py-lg-1{padding-top:.25rem!important}.pr-lg-1,.px-lg-1{padding-right:.25rem!important}.pb-lg-1,.py-lg-1{padding-bottom:.25rem!important}.pl-lg-1,.px-lg-1{padding-left:.25rem!important}.p-lg-2{padding:.5rem!important}.pt-lg-2,.py-lg-2{padding-top:.5rem!important}.pr-lg-2,.px-lg-2{padding-right:.5rem!important}.pb-lg-2,.py-lg-2{padding-bottom:.5rem!important}.pl-lg-2,.px-lg-2{padding-left:.5rem!important}.p-lg-3{padding:1rem!important}.pt-lg-3,.py-lg-3{padding-top:1rem!important}.pr-lg-3,.px-lg-3{padding-right:1rem!important}.pb-lg-3,.py-lg-3{padding-bottom:1rem!important}.pl-lg-3,.px-lg-3{padding-left:1rem!important}.p-lg-4{padding:1.5rem!important}.pt-lg-4,.py-lg-4{padding-top:1.5rem!important}.pr-lg-4,.px-lg-4{padding-right:1.5rem!important}.pb-lg-4,.py-lg-4{padding-bottom:1.5rem!important}.pl-lg-4,.px-lg-4{padding-left:1.5rem!important}.p-lg-5{padding:3rem!important}.pt-lg-5,.py-lg-5{padding-top:3rem!important}.pr-lg-5,.px-lg-5{padding-right:3rem!important}.pb-lg-5,.py-lg-5{padding-bottom:3rem!important}.pl-lg-5,.px-lg-5{padding-left:3rem!important}.m-lg-auto{margin:auto!important}.mt-lg-auto,.my-lg-auto{margin-top:auto!important}.mr-lg-auto,.mx-lg-auto{margin-right:auto!important}.mb-lg-auto,.my-lg-auto{margin-bottom:auto!important}.ml-lg-auto,.mx-lg-auto{margin-left:auto!important}}@media (min-width:1200px){.m-xl-0{margin:0!important}.mt-xl-0,.my-xl-0{margin-top:0!important}.mr-xl-0,.mx-xl-0{margin-right:0!important}.mb-xl-0,.my-xl-0{margin-bottom:0!important}.ml-xl-0,.mx-xl-0{margin-left:0!important}.m-xl-1{margin:.25rem!important}.mt-xl-1,.my-xl-1{margin-top:.25rem!important}.mr-xl-1,.mx-xl-1{margin-right:.25rem!important}.mb-xl-1,.my-xl-1{margin-bottom:.25rem!important}.ml-xl-1,.mx-xl-1{margin-left:.25rem!important}.m-xl-2{margin:.5rem!important}.mt-xl-2,.my-xl-2{margin-top:.5rem!important}.mr-xl-2,.mx-xl-2{margin-right:.5rem!important}.mb-xl-2,.my-xl-2{margin-bottom:.5rem!important}.ml-xl-2,.mx-xl-2{margin-left:.5rem!important}.m-xl-3{margin:1rem!important}.mt-xl-3,.my-xl-3{margin-top:1rem!important}.mr-xl-3,.mx-xl-3{margin-right:1rem!important}.mb-xl-3,.my-xl-3{margin-bottom:1rem!important}.ml-xl-3,.mx-xl-3{margin-left:1rem!important}.m-xl-4{margin:1.5rem!important}.mt-xl-4,.my-xl-4{margin-top:1.5rem!important}.mr-xl-4,.mx-xl-4{margin-right:1.5rem!important}.mb-xl-4,.my-xl-4{margin-bottom:1.5rem!important}.ml-xl-4,.mx-xl-4{margin-left:1.5rem!important}.m-xl-5{margin:3rem!important}.mt-xl-5,.my-xl-5{margin-top:3rem!important}.mr-xl-5,.mx-xl-5{margin-right:3rem!important}.mb-xl-5,.my-xl-5{margin-bottom:3rem!important}.ml-xl-5,.mx-xl-5{margin-left:3rem!important}.p-xl-0{padding:0!important}.pt-xl-0,.py-xl-0{padding-top:0!important}.pr-xl-0,.px-xl-0{padding-right:0!important}.pb-xl-0,.py-xl-0{padding-bottom:0!important}.pl-xl-0,.px-xl-0{padding-left:0!important}.p-xl-1{padding:.25rem!important}.pt-xl-1,.py-xl-1{padding-top:.25rem!important}.pr-xl-1,.px-xl-1{padding-right:.25rem!important}.pb-xl-1,.py-xl-1{padding-bottom:.25rem!important}.pl-xl-1,.px-xl-1{padding-left:.25rem!important}.p-xl-2{padding:.5rem!important}.pt-xl-2,.py-xl-2{padding-top:.5rem!important}.pr-xl-2,.px-xl-2{padding-right:.5rem!important}.pb-xl-2,.py-xl-2{padding-bottom:.5rem!important}.pl-xl-2,.px-xl-2{padding-left:.5rem!important}.p-xl-3{padding:1rem!important}.pt-xl-3,.py-xl-3{padding-top:1rem!important}.pr-xl-3,.px-xl-3{padding-right:1rem!important}.pb-xl-3,.py-xl-3{padding-bottom:1rem!important}.pl-xl-3,.px-xl-3{padding-left:1rem!important}.p-xl-4{padding:1.5rem!important}.pt-xl-4,.py-xl-4{padding-top:1.5rem!important}.pr-xl-4,.px-xl-4{padding-right:1.5rem!important}.pb-xl-4,.py-xl-4{padding-bottom:1.5rem!important}.pl-xl-4,.px-xl-4{padding-left:1.5rem!important}.p-xl-5{padding:3rem!important}.pt-xl-5,.py-xl-5{padding-top:3rem!important}.pr-xl-5,.px-xl-5{padding-right:3rem!important}.pb-xl-5,.py-xl-5{padding-bottom:3rem!important}.pl-xl-5,.px-xl-5{padding-left:3rem!important}.m-xl-auto{margin:auto!important}.mt-xl-auto,.my-xl-auto{margin-top:auto!important}.mr-xl-auto,.mx-xl-auto{margin-right:auto!important}.mb-xl-auto,.my-xl-auto{margin-bottom:auto!important}.ml-xl-auto,.mx-xl-auto{margin-left:auto!important}}.text-justify{text-align:justify!important}.text-nowrap{white-space:nowrap!important}.text-truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.text-left{text-align:left!important}.text-right{text-align:right!important}.text-center{text-align:center!important}@media (min-width:576px){.text-sm-left{text-align:left!important}.text-sm-right{text-align:right!important}.text-sm-center{text-align:center!important}}@media (min-width:768px){.text-md-left{text-align:left!important}.text-md-right{text-align:right!important}.text-md-center{text-align:center!important}}@media (min-width:992px){.text-lg-left{text-align:left!important}.text-lg-right{text-align:right!important}.text-lg-center{text-align:center!important}}@media (min-width:1200px){.text-xl-left{text-align:left!important}.text-xl-right{text-align:right!important}.text-xl-center{text-align:center!important}}.text-lowercase{text-transform:lowercase!important}.text-uppercase{text-transform:uppercase!important}.text-capitalize{text-transform:capitalize!important}.font-weight-light{font-weight:300!important}.font-weight-normal{font-weight:400!important}.font-weight-bold{font-weight:700!important}.font-italic{font-style:italic!important}.text-white{color:#fff!important}.text-primary{color:#007bff!important}a.text-primary:focus,a.text-primary:hover{color:#0062cc!important}.text-secondary{color:#6c757d!important}a.text-secondary:focus,a.text-secondary:hover{color:#545b62!important}.text-success{color:#28a745!important}a.text-success:focus,a.text-success:hover{color:#1e7e34!important}.text-info{color:#17a2b8!important}a.text-info:focus,a.text-info:hover{color:#117a8b!important}.text-warning{color:#ffc107!important}a.text-warning:focus,a.text-warning:hover{color:#d39e00!important}.text-danger{color:#dc3545!important}a.text-danger:focus,a.text-danger:hover{color:#bd2130!important}.text-light{color:#f8f9fa!important}a.text-light:focus,a.text-light:hover{color:#dae0e5!important}.text-dark{color:#343a40!important}a.text-dark:focus,a.text-dark:hover{color:#1d2124!important}.text-muted{color:#6c757d!important}.text-hide{font:0/0 a;color:transparent;text-shadow:none;background-color:transparent;border:0}.visible{visibility:visible!important}.invisible{visibility:hidden!important}@media print{*,::after,::before{text-shadow:none!important;-webkit-box-shadow:none!important;box-shadow:none!important}a:not(.btn){text-decoration:underline}abbr[title]::after{content:\" (\" attr(title) \")\"}pre{white-space:pre-wrap!important}blockquote,pre{border:1px solid #999;page-break-inside:avoid}thead{display:table-header-group}img,tr{page-break-inside:avoid}h2,h3,p{orphans:3;widows:3}h2,h3{page-break-after:avoid}@page{size:a3}body{min-width:992px!important}.container{min-width:992px!important}.navbar{display:none}.badge{border:1px solid #000}.table{border-collapse:collapse!important}.table td,.table th{background-color:#fff!important}.table-bordered td,.table-bordered th{border:1px solid #ddd!important}}.example-spacer {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n}.jumbotron{\n  background-color: #0d1f42;\n  /*background-image: url('../assets/images/headerbg.jpg');*/\n  height:auto;\n  font-size: 50px;\n  padding: 1px;\n  margin: 0px;\n  color: white;\n  text-align: center;\n}.window2 {\n  width: 99%;\n  font-weight: bold;\n  color: white;\n  font-size: 46px;\n  margin: 7px auto;\n  border: 2px solid #000;\n  border-radius: 10px;\n  -moz-border-radius: 10px;\n  -webkit-border-radius: 10px;\n  padding: 4px 9px 0px 1px;\n  background: #0d1f42;\n  box-shadow: 6px 6px 5px #444;\n  -moz-box-shadow: 6px 6px 5px #444;\n  -webkit-box-shadow: 6px 6px 5px #444;\n  margin-bottom: 20px;\n}user agent stylesheet\ndiv {\n  display: block;\n}Inherited from body\n\nbody {\n  background: #e7f3f7;\n  color: white;\n  font-size: 14px;\n  margin: 0;\n  padding: 1%;\n  min-width: 71em;\n  max-width: 71em;\n  min-height: 52em;\n  max-height: 52em;\n  font-size: 100.01%;\n  font-family: \"Arial\";\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<!--header-->\n<div class=\"jumbotron\">\n\n      {{title|uppercase}}\n\n</div>\n\n<!--Nav Bar-->\n<mat-toolbar color=\"primary\">\n  <mat-toolbar-row>\n    <span>Visual simulator for sequence alignments</span>\n\n    <span class=\"example-spacer\"></span>\n\n    <button mat-button routerLink=\"\">Home </button>\n    <button mat-button routerLink=\"faq\">FAQ</button>\n  </mat-toolbar-row>\n</mat-toolbar>\n\n<!--Home-->\n<router-outlet></router-outlet>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'perfect aligner';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_charts__ = __webpack_require__("../../../../ng2-charts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_bootstrap_module__ = __webpack_require__("../../../../../src/app/app-bootstrap.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_module__ = __webpack_require__("../../../../../src/app/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material_grid_list__ = __webpack_require__("../../../material/esm5/grid-list.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_faq_faq_component__ = __webpack_require__("../../../../../src/app/components/faq/faq.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_nwalgo_nwalgo_component__ = __webpack_require__("../../../../../src/app/components/nwalgo/nwalgo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_swalgo_swalgo_component__ = __webpack_require__("../../../../../src/app/components/swalgo/swalgo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_swalgo_sw_grid_sw_grid_component__ = __webpack_require__("../../../../../src/app/components/swalgo/sw-grid/sw-grid.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_swalgo_sw_form_sw_form_component__ = __webpack_require__("../../../../../src/app/components/swalgo/sw-form/sw-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_tcoffee_tcoffee_component__ = __webpack_require__("../../../../../src/app/components/tcoffee/tcoffee.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_dialign_dialign_component__ = __webpack_require__("../../../../../src/app/components/dialign/dialign.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_sharing_service__ = __webpack_require__("../../../../../src/app/services/sharing.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_nwalgo_nw_form_nw_form_component__ = __webpack_require__("../../../../../src/app/components/nwalgo/nw-form/nw-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_nwalgo_nw_grid_nw_grid_component__ = __webpack_require__("../../../../../src/app/components/nwalgo/nw-grid/nw-grid.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_dialign_dialign_menu_dialign_menu_component__ = __webpack_require__("../../../../../src/app/components/dialign/dialign-menu/dialign-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_dialign_dialign_panel_dialign_panel_component__ = __webpack_require__("../../../../../src/app/components/dialign/dialign-panel/dialign-panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_msa_sharing_service__ = __webpack_require__("../../../../../src/app/services/msa-sharing.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_tcoffee_tcoffee_menu_tcoffee_menu_component__ = __webpack_require__("../../../../../src/app/components/tcoffee/tcoffee-menu/tcoffee-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_tcoffee_tcoffee_panel_tcoffee_panel_component__ = __webpack_require__("../../../../../src/app/components/tcoffee/tcoffee-panel/tcoffee-panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_tcoffee_tcoffee_chart_tcoffee_chart_component__ = __webpack_require__("../../../../../src/app/components/tcoffee/tcoffee-chart/tcoffee-chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_dialign_dialign_chart_dialign_chart_component__ = __webpack_require__("../../../../../src/app/components/dialign/dialign-chart/dialign-chart.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_faq_faq_component__["a" /* FaqComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_nwalgo_nwalgo_component__["a" /* NwalgoComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_swalgo_swalgo_component__["a" /* SwalgoComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_swalgo_sw_grid_sw_grid_component__["a" /* SwGridComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_swalgo_sw_form_sw_form_component__["a" /* SwFormComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_tcoffee_tcoffee_component__["a" /* TcoffeeComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_dialign_dialign_component__["a" /* DialignComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_nwalgo_nw_form_nw_form_component__["a" /* NwFormComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_nwalgo_nw_grid_nw_grid_component__["a" /* NwGridComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_dialign_dialign_menu_dialign_menu_component__["a" /* DialignMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_dialign_dialign_panel_dialign_panel_component__["a" /* DialignPanelComponent */],
                __WEBPACK_IMPORTED_MODULE_25__components_tcoffee_tcoffee_menu_tcoffee_menu_component__["a" /* TcoffeeMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_26__components_tcoffee_tcoffee_panel_tcoffee_panel_component__["a" /* TcoffeePanelComponent */],
                __WEBPACK_IMPORTED_MODULE_27__components_tcoffee_tcoffee_chart_tcoffee_chart_component__["a" /* TcoffeeChartComponent */],
                __WEBPACK_IMPORTED_MODULE_28__components_dialign_dialign_chart_dialign_chart_component__["a" /* DialignChartComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_12__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_8__material_module__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material_grid_list__["a" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_7__app_bootstrap_module__["a" /* AppBootstrapModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4_ng2_charts__["ChartsModule"]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_19__services_sharing_service__["a" /* SharingService */],
                __WEBPACK_IMPORTED_MODULE_24__services_msa_sharing_service__["a" /* MsaSharingService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/dialign/dialign-chart/dialign-chart.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dialign/dialign-chart/dialign-chart.component.html":
/***/ (function(module, exports) {

module.exports = "\n<br>\n<!--chart-->\n<div style=\"background: white;\">\n\n    <canvas id=\"myAreaChart\" width=\"100%\" height=\"30\" baseChart\n            [datasets]=\"barChartData\"\n            [labels]=\"barChartLabels\"\n            [options]=\"barChartOptions\"\n            [legend]=\"barChartLegend\"\n            [chartType]=\"barChartType\"\n            (chartHover)=\"chartHovered($event)\"\n            (chartClick)=\"chartClicked($event)\"></canvas>\n\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/dialign/dialign-chart/dialign-chart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialignChartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_msa_sharing_service__ = __webpack_require__("../../../../../src/app/services/msa-sharing.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DialignChartComponent = /** @class */ (function () {
    function DialignChartComponent(msasharingService) {
        this.msasharingService = msasharingService;
        // chart details
        this.barChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true
        };
        this.barChartLabels = this.msasharingService.getIdArray();
        this.barChartType = 'horizontalBar';
        this.barChartLegend = true;
        this.barChartData = [
            { data: this.msasharingService.getChartData(), label: 'No of aligned characters' }
        ];
    }
    DialignChartComponent.prototype.ngOnInit = function () {
    };
    // events
    DialignChartComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    DialignChartComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    DialignChartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dialign-chart',
            template: __webpack_require__("../../../../../src/app/components/dialign/dialign-chart/dialign-chart.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/dialign/dialign-chart/dialign-chart.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_msa_sharing_service__["a" /* MsaSharingService */]])
    ], DialignChartComponent);
    return DialignChartComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/dialign/dialign-menu/dialign-menu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dialign/dialign-menu/dialign-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<!--menu-->\n<br>\n\n<div class=\"Block\">\n\n  <label id=\"lbl\">Fasta File :</label>\n  <input type='file' (change)=\"fileChanged($event)\">\n\n  <button type=\"button\" class=\"btn btn-primary\"\n          (click)=\"uploadDocument(file);\">Upload File</button>\n\n  <button mat-fab color=\"primary\" (click)=\"showHelpBox()\">Help</button>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/dialign/dialign-menu/dialign-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialignMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_dialign_service__ = __webpack_require__("../../../../../src/app/services/dialign.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_msa_sharing_service__ = __webpack_require__("../../../../../src/app/services/msa-sharing.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sweetalert2__ = __webpack_require__("../../../../sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_sweetalert2__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DialignMenuComponent = /** @class */ (function () {
    function DialignMenuComponent(dialignService, msasharingService) {
        this.dialignService = dialignService;
        this.msasharingService = msasharingService;
        this.message = '';
    }
    DialignMenuComponent.prototype.ngOnInit = function () {
    };
    // choose file
    DialignMenuComponent.prototype.fileChanged = function (e) {
        this.file = e.target.files[0];
    };
    // upload and read the file
    DialignMenuComponent.prototype.uploadDocument = function (file) {
        var _this = this;
        // waiting alert on
        this.showLoading();
        this.msasharingService.setVisibility(false);
        // read file
        var fileReader = new FileReader();
        fileReader.readAsText(this.file);
        fileReader.onload = function (e) {
            _this.dataArray = fileReader.result.split('\n');
            _this.geneArray = _this.dialignService.getGeneArray(_this.dataArray);
            _this.msasharingService.setPanelData(_this.geneArray);
            _this.chartDataArray = _this.dialignService.alignedCharCount(_this.geneArray);
            _this.msasharingService.setChartData(_this.chartDataArray);
            // visualize if the file is a fasta file
            if (!(_this.msasharingService.getPanelData().length === 1 && _this.msasharingService.getPanelData()[0].id === '')) {
                _this.msasharingService.setVisibility(true);
            }
            else {
                _this.closeLoading();
                _this.showError();
            }
        };
    };
    // instruction alert
    DialignMenuComponent.prototype.showHelpBox = function () {
        __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default()({
            title: '<i>Help</i>',
            type: 'info',
            html: 'Choose a <b>Fasta file</b> which contains dialigned sequences.' + '<br>' +
                'Then click <b>Upload button</b> to see the simulation.' + '<br>' +
                'If you do not have such file' + '<br>' +
                'Visit :<a href="http://dialign.gobics.de/">Dialign Server</a> ' + '<br>' +
                'to generate a dialigned fasta file',
            showCloseButton: true,
            showCancelButton: true,
            focusConfirm: false,
            confirmButtonText: '<i class="fa fa-thumbs-up"></i> Great!',
            confirmButtonAriaLabel: 'Thumbs up, great!',
            cancelButtonText: '<i class="fa fa-thumbs-down"></i>',
            cancelButtonAriaLabel: 'Thumbs down',
        });
    };
    // show waiting alert
    DialignMenuComponent.prototype.showLoading = function () {
        __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default()({
            title: 'Please Wait!',
            text: 'your request is processing',
            onOpen: function () {
                __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default.a.showLoading();
            }
        });
    };
    // close alert
    DialignMenuComponent.prototype.closeLoading = function () {
        __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default.a.close();
    };
    // show error alert
    DialignMenuComponent.prototype.showError = function () {
        __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default()({
            type: 'error',
            title: 'Error...',
            text: 'Uploaded file is not in FASTA format!',
        });
    };
    DialignMenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dialign-menu',
            template: __webpack_require__("../../../../../src/app/components/dialign/dialign-menu/dialign-menu.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/dialign/dialign-menu/dialign-menu.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_dialign_service__["a" /* DialignService */],
            __WEBPACK_IMPORTED_MODULE_2__services_msa_sharing_service__["a" /* MsaSharingService */]])
    ], DialignMenuComponent);
    return DialignMenuComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/dialign/dialign-panel/dialign-panel.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".timeline-shell {\n  overflow-x: auto;\n}\n\n.timeline-header {\n  position: sticky;\n  position: -webkit-sticky;\n  top: 0;\n  height: 50px;\n  z-index: 1;\n}\n\n.timeline-header .header-blank,\n.timeline-header .header-item {\n  float: left;\n  height: 50px;\n  /*border-bottom: 1px solid #BEBEBE;\n  border-right: 1px solid #BEBEBE;*/\n  background: white;\n  font-size: 11px;\n}\n\n.timeline-header .header-blank {\n  position: sticky;\n  position: -webkit-sticky;\n  top: 0;\n  left: 0;\n  width: 100px;\n  z-index: 2;\n}\n\n.timeline-header .header-item {\n  width: 20px;\n}\n\n.header-item .item-label {\n  text-align: center;\n}\n\n.header-item .item-sublabel {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.header-item .item-sublabel .sublabel-value {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  text-align: center;\n}\n\n.timeline-body .body-details-cell,\n.timeline-body .body-graph-cell {\n  float: left;\n  height: 20px;\n /* border-bottom: 1px solid #bebebe;\n  border-right: 1px solid #bebebe;*/\n  background: white;\n  text-align: center;\n  cursor: move;\n}\n\n.timeline-body .body-details-cell {\n  position: -webkit-sticky;\n  position: sticky;\n  left: 0;\n  width: 100px;\n}\n\n.timeline-body .body-graph-cell {\n  width: 20px;\n}\n\ndiv.a {\n  white-space: nowrap;\n  width: 100px;\n  overflow: hidden;\n  text-overflow:ellipsis;\n\n}\n\ndiv.a:hover {\n  overflow: visible;\n}\n\n.mat-radio-button ~ .mat-radio-button {\n  padding-right: 16px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dialign/dialign-panel/dialign-panel.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\n\n<label id=\"lb2\">Color Scheme :</label>\n<select  class=\"btn btn-primary\" [(ngModel)]=\"scheme\">\n  <option *ngFor=\"let x of colorSchemes\" [value]=\"x.name\" [selected]=\"scheme == x.name\">{{x.name}}</option>\n</select>\n<br>\n<div style=\"display: block; background: white \">\n<!--header-->\n<div class=\"timeline-shell\" style=\"width: 1340px;height: 300px;\" >\n  <div class=\"timeline-header\" [style.width.px]=\"width\" >\n    <span class=\"header-blank\"></span>\n\n    <span class=\"header-item\" *ngFor=\"let col of this.getSequenceData();let j=index;let e=even;let o=odd;\">\n      <div class=\"item-label\" *ngIf=\"e\">{{j+1}}</div>\n      <div class=\"item-label\" *ngIf=\"o\">.</div>\n    </span>\n\n  </div>\n  <!--body-->\n  <div class=\"timeline-body\" style=\"height: 150px;\" [style.width.px]=\"width\">\n    <div class=\"body-item\" *ngFor=\"let gene of geneArray\">\n      <span class=\"body-details-cell\">\n        <div class=\"detail-title\" class=\"a\">{{gene.id}}</div>\n      </span>\n      <span *ngFor=\"let charc of gene.sequence.split('');let i=index;\">\n      <span class=\"body-graph-cell first-graph-cell\" *ngIf=\"i==0\" [style.background-color]=\"getColor(charc)\">{{charc}}</span>\n      <span class=\"body-graph-cell\" *ngIf=\"i!=0\" [style.background-color]=\"getColor(charc)\">{{charc}}</span>\n      </span>\n    </div>\n  </div>\n</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/dialign/dialign-panel/dialign-panel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialignPanelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_msa_sharing_service__ = __webpack_require__("../../../../../src/app/services/msa-sharing.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_colorscheme__ = __webpack_require__("../../../../../src/app/models/colorscheme.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sweetalert2__ = __webpack_require__("../../../../sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_sweetalert2__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DialignPanelComponent = /** @class */ (function () {
    function DialignPanelComponent(msasharingService) {
        this.msasharingService = msasharingService;
        this.scheme = 'ClustalW';
        this.colorSchemes = __WEBPACK_IMPORTED_MODULE_2__models_colorscheme__["a" /* SCHEMES */];
    }
    DialignPanelComponent.prototype.ngOnInit = function () {
        this.geneArray = this.msasharingService.getPanelData();
        __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default.a.close();
    };
    // return sequence data to create pannel
    DialignPanelComponent.prototype.getSequenceData = function () {
        for (var _i = 0, _a = this.colorSchemes; _i < _a.length; _i++) {
            var x = _a[_i];
            if (x.name === this.scheme) {
                this.obj = x;
                this.colorArray = x.colors;
                console.log(this.colorArray);
            }
        }
        for (var _b = 0, _c = this.colorSchemes; _b < _c.length; _b++) {
            var x = _c[_b];
            if (x.name === this.scheme) {
                this.obj = x;
            }
        }
        this.maxlength = 0;
        var max = [];
        for (var i in this.geneArray) {
            if (this.maxlength < this.geneArray[i].sequence.split('').length) {
                this.maxlength = this.geneArray[i].sequence.split('').length;
                max = this.geneArray[i].sequence.split('');
            }
        }
        console.log(this.maxlength);
        this.calWidth();
        return max;
    };
    // calculate the width of the pannel
    DialignPanelComponent.prototype.calWidth = function () {
        this.width = 100 + 20 * this.maxlength;
    };
    // return color for each character according to the color scheme
    DialignPanelComponent.prototype.getColor = function (character) {
        return this.colorArray[character];
    };
    DialignPanelComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dialign-panel',
            template: __webpack_require__("../../../../../src/app/components/dialign/dialign-panel/dialign-panel.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/dialign/dialign-panel/dialign-panel.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_msa_sharing_service__["a" /* MsaSharingService */]])
    ], DialignPanelComponent);
    return DialignPanelComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/dialign/dialign.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dialign/dialign.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\n<!--Algorithm name-->\n<div align=\"center\"><h2>{{title|uppercase}}</h2>\n\n</div>\n\n<!--Menu-->\n<app-dialign-menu></app-dialign-menu>\n<br>\n<!--panel-->\n<div class=\"card mb-3\" *ngIf=\"msasharingService.getVisibility()\">\n  <div class=\"card-header\">\n    <i class=\"\"></i> Aligned Sequence Simulator</div>\n  <div class=\"card-body\">\n    <app-dialign-panel></app-dialign-panel>\n  </div>\n  <div class=\"card-footer small text-muted\"></div>\n</div>\n<!--<app-dialign-panel *ngIf=\"msasharingService.getVisibility()\"></app-dialign-panel>-->\n<br>\n<!--chart-->\n\n<div class=\"card mb-3\" *ngIf=\"msasharingService.getVisibility()\">\n  <div class=\"card-header\">\n    <i class=\"fa fa-bar-chart\"></i> Number of Aligned Character Chart</div>\n  <div class=\"card-body\">\n    <app-dialign-chart ></app-dialign-chart>\n  </div>\n  <div class=\"card-footer small text-muted\"></div>\n</div>\n<!--<app-dialign-chart *ngIf=\"msasharingService.getVisibility()\"></app-dialign-chart>-->\n"

/***/ }),

/***/ "../../../../../src/app/components/dialign/dialign.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialignComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_dialign_service__ = __webpack_require__("../../../../../src/app/services/dialign.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_msa_sharing_service__ = __webpack_require__("../../../../../src/app/services/msa-sharing.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DialignComponent = /** @class */ (function () {
    function DialignComponent(msasharingService) {
        this.msasharingService = msasharingService;
        this.title = 'Dialign';
    }
    DialignComponent.prototype.ngOnInit = function () {
        this.msasharingService.setVisibility(false);
    };
    DialignComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dialign',
            template: __webpack_require__("../../../../../src/app/components/dialign/dialign.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/dialign/dialign.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_dialign_service__["a" /* DialignService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_msa_sharing_service__["a" /* MsaSharingService */]])
    ], DialignComponent);
    return DialignComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/faq/faq.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container{\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: 50% auto;\n      grid-template-columns: 50% auto;\n\n}\n\n.col{\n  padding: .4cm 1.3cm;\n}\n\n.color-dark{\n  background: #2885c4;\n  border-radius: 10px;\n  -moz-border-radius: 10px;\n  -webkit-border-radius: 10px;\n  padding: 4px 9px 0px 1px;\n  box-shadow: 6px 6px 5px #444;\n  -moz-box-shadow: 6px 6px 5px #444;\n  -webkit-box-shadow: 6px 6px 5px #444;\n}\n\n.color-light{\n  background: #5783f1;\n}\n\n.life-container{\n  background: #3fa0e1;\n  padding: .5cm;\n  font-weight: bold;\n  cursor:pointer;\n}\n\nbody {\n  margin-top: 30px;\n  background-color: #eee;\n}\n\n.list-group.help-group {\n  margin-bottom: 20px;\n  padding-left: 0;\n  margin: 0;\n}\n\n.list-group.help-group .faq-list {\n  display: block;\n  top: auto;\n  margin: 0 0 32px;\n  border-radius: 2px;\n  border: 1px solid #ddd;\n  -webkit-box-shadow: 0 1px 5px rgba(85, 85, 85, 0.15);\n          box-shadow: 0 1px 5px rgba(85, 85, 85, 0.15);\n}\n\n.list-group.help-group .faq-list .list-group-item {\n  position: relative;\n  display: block;\n  margin: 0;\n  padding: 13px 16px;\n  background-color: #fff;\n  border: 0;\n  border-bottom: 1px solid #ddd;\n  border-top-left-radius: 2px;\n  border-top-right-radius: 2px;\n  color: #616161;\n  -webkit-transition: background-color 1.2s;\n  transition: background-color 1.2s;\n}\n\n.list-group.help-group .faq-list .list-group-item i.mdi {\n  margin-right: 5px;\n  font-size: 18px;\n  position: relative;\n  top: 2px;\n}\n\n.list-group.help-group .faq-list .list-group-item:hover {\n  background-color:#C0C0C0;\n}\n\n.list-group.help-group .faq-list .list-group-item.active {\n  background-color: #C0C0C0;\n  font-weight: 700;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.list-group.help-group .faq-list .list-group-item:last-of-type {\n  border-bottom-left-radius: 2px;\n  border-bottom-right-radius: 2px;\n  border-bottom: 0;\n}\n\n.tab-content.panels-faq {\n  padding: 0;\n  border: 0;\n}\n\n.panel.panel-help {\n  -webkit-box-shadow: 0 1px 5px rgba(85, 85, 85, 0.15);\n          box-shadow: 0 1px 5px rgba(85, 85, 85, 0.15);\n  padding-bottom: 0;\n  border-radius: 2px;\n  overflow: hidden;\n  background-color: #C0C0C0;\n  margin: 0 0 16px;\n}\n\n.panel.panel-help a[href^=\"#\"],\n.panel.panel-help a[href^=\"#\"]:hover,\n.panel.panel-help a[href^=\"#\"]:focus {\n  outline: none;\n  cursor: pointer;\n  text-decoration: none;\n}\n\n.panel.panel-help .panel-heading {\n  background-color: #f6f6f6;\n  padding: 0 16px;\n  line-height: 48px;\n  border-top-right-radius: 2px;\n  border-top-left-radius: 2px;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.panel.panel-help .panel-heading h2 {\n  margin: 0;\n  padding: 14px 0 14px;\n  font-size: 18px;\n  font-weight: 400;\n  line-height: 20px;\n  letter-spacing: 0;\n  text-transform: none;\n}\n\n.panel.panel-help .panel-body {\n  background-color: #fff;\n  border-top: 1px solid #ddd;\n  border-radius: 2px;\n  border-top-right-radius: 0;\n  border-top-left-radius: 0;\n  margin-top: 0;\n}\n\n.panel.panel-help .panel-body p {\n  margin: 0 0 20px;\n}\n\n.panel.panel-help .panel-body p:last-of-type {\n  margin: 0;\n}\n\n.in{\n  display: block !important;\n}\n\np{\n  font-size: 12px;\n  font-family: 'Open Sans', verdana, arial, sans-serif;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/faq/faq.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\n<div class=\"container\">\n  <div class=\"col-md-6\">\n    <ul class=\"list-group help-group\">\n      <div class=\"faq-list list-group nav nav-tabs\">\n        <a href=\"#tab1\" class=\"list-group-item active\" role=\"tab\" data-toggle=\"tab\">Frequently Asked Questions</a>\n        <a href=\"#tab2\" class=\"list-group-item\" role=\"tab\" data-toggle=\"tab\"><i class=\"mdi mdi-account\"></i> Needleman-Wunsch</a>\n        <a href=\"#tab3\" class=\"list-group-item\" role=\"tab\" data-toggle=\"tab\"><i class=\"mdi mdi-account-settings\"></i> Smith-Waterman</a>\n        <a href=\"#tab4\" class=\"list-group-item\" role=\"tab\" data-toggle=\"tab\"><i class=\"mdi mdi-star\"></i> T-Coffee</a>\n        <a href=\"#tab5\" class=\"list-group-item\" role=\"tab\" data-toggle=\"tab\"><i class=\"mdi mdi-cart\"></i> Dialign</a>\n      </div>\n    </ul>\n  </div>\n  <div class=\"col-md-12\">\n    <div class=\"tab-content panels-faq\">\n      <div class=\"tab-pane active\" id=\"tab1\">\n        <div class=\"panel-group\" id=\"help-accordion-1\">\n          <div class=\"panel panel-default panel-help\">\n            <a href=\"#opret-kampagne\" data-toggle=\"collapse\" data-parent=\"#help-accordion-1\" role=\"button\" aria-expanded=\"false\" aria-controls=\"slet-produkt opret-kampagne opret-produkt rediger-produkt ret-pris\">\n              <div class=\"panel-heading\">\n                <h2>What is this website?</h2>\n              </div>\n            </a>\n            <div id=\"opret-kampagne\" class=\"collapse\">\n              <div class=\"panel-body\">\n                <p>This is a web based visual simulator to simulate the alignments of gene sequences.\n                  Four algorithms are used for alignment and tqo of them are PSA and two of them are MSA.\n                  Needleman-Wunsch and Smith waterman algorithms are used for PSA. The dynamic programming steps and the final alignment\n                  are visualised for PSA.\n                  T-coffee and dialign algorithms are used for MSA. The final alignment is displayed on a pannel and the number of ligned characters are\n                  visualized on a chart.\n                </p>\n              </div>\n            </div>\n          </div>\n          <div class=\"panel panel-default panel-help\">\n            <a href=\"#opret-produkt\" data-toggle=\"collapse\"  data-parent=\"#help-accordion-1\" role=\"button\" aria-expanded=\"false\" aria-controls=\"slet-produkt opret-kampagne opret-produkt rediger-produkt ret-pris\" >\n              <div class=\"panel-heading\">\n                <h2>What is Bioinformatics?</h2>\n              </div>\n            </a>\n            <div id=\"opret-produkt\" class=\"collapse\" >\n              <div class=\"panel-body\">\n                <p>Bioinformatics is an interdisciplinary field that develops methods and software tools for understanding biological data.</p>\n                <p><strong>More info: </strong><a href=\"https://en.wikipedia.org/wiki/Bioinformatics\"><i>https://en.wikipedia.org/wiki/Bioinformatics</i></a></p>\n              </div>\n            </div>\n          </div>\n          <div class=\"panel panel-default panel-help\">\n            <a href=\"#rediger-produkt\" data-toggle=\"collapse\"  data-parent=\"#help-accordion-1\" role=\"button\" aria-expanded=\"false\" aria-controls=\"slet-produkt opret-kampagne opret-produkt rediger-produkt ret-pris\">\n              <div class=\"panel-heading\">\n                <h2>What is sequence alignment?</h2>\n              </div>\n            </a>\n            <div id=\"rediger-produkt\" class=\"collapse\"    >\n              <div class=\"panel-body\">\n                <p>Sequence alignment is a way of arranging the sequences of DNA, RNA, or protein to identify regions of similarity that may be a consequence of functional, structural, or evolutionary relationships between the sequences.</p>\n                <p><strong>More info: </strong><a href=\"https://en.wikipedia.org/wiki/Sequence_alignment\"><i>https://en.wikipedia.org/wiki/Sequence_alignment</i></a></p>\n              </div>\n            </div>\n          </div>\n          <div class=\"panel panel-default panel-help\">\n            <a href=\"#ret-pris\" data-toggle=\"collapse\"  data-parent=\"#help-accordion-1\" data-toggle=\"collapse\" role=\"button\" aria-expanded=\"false\" aria-controls=\"slet-produkt opret-kampagne opret-produkt rediger-produkt ret-pris\">\n              <div class=\"panel-heading\">\n                <h2>What is PSA?</h2>\n              </div>\n            </a>\n            <div id=\"ret-pris\" class=\"collapse\">\n              <div class=\"panel-body\">\n                <p>PSA stands for Pairwise Sequence Alignment.Pairwise sequence alignment methods are used to find the best-matching piecewise (local or global) alignments of two query sequences. Pairwise alignments can only be used between two sequences at a time, but they are efficient to calculate and are often used for methods that do not require extreme precision (such as searching a database for sequences with high similarity to a query). The three primary methods of producing pairwise\n                  alignments are dot-matrix methods, dynamic programming, and word methods</p>\n                <p><strong>More info: </strong><a href=\"https://en.wikipedia.org/wiki/Sequence_alignment#Pairwise_alignment\"><i>https://en.wikipedia.org/wiki/Sequence_alignment#Pairwise_alignment</i></a></p>\n              </div>\n            </div>\n          </div>\n          <div class=\"panel panel-default panel-help\">\n            <a href=\"#slet-produkt\" data-toggle=\"collapse\" data-parent=\"#help-accordion-1\" role=\"button\" aria-expanded=\"false\" aria-controls=\"slet-produkt opret-kampagne opret-produkt rediger-produkt ret-pris\">\n              <div class=\"panel-heading\">\n                <h2>What is MSA?</h2>\n              </div>\n            </a>\n            <div id=\"slet-produkt\" class=\"collapse\">\n              <div class=\"panel-body\">\n                <p>MSA stands for Multiple Sequence Alignment.Multiple sequence alignment is an extension of pairwise alignment to incorporate more than two sequences at a time. Multiple alignment methods try to align all of the sequences in a given query set. Multiple alignments are often used in identifying conserved sequence\n                  regions across a group of sequences hypothesized to be evolutionarily related. </p>\n                <p><strong>More info: </strong><a href=\"https://en.wikipedia.org/wiki/Sequence_alignment#Multiple_sequence_alignment\"><i></i></a></p>\n              </div>\n            </div>\n          </div>\n\n        </div>\n      </div>\n      <div class=\"tab-pane\" id=\"tab2\">\n        <div class=\"panel-group\" id=\"help-accordion-2\">\n          <div class=\"panel panel-default panel-help\">\n            <a href=\"#help-three\" data-toggle=\"collapse\" data-parent=\"#help-accordion-2\"  >\n              <div class=\"panel-heading\">\n                <h2>What is Needleman-Wunsch?</h2>\n              </div>\n            </a>\n            <div id=\"help-three\" class=\"collapse\"     >\n              <div class=\"panel-body\">\n                <p>The Needleman–Wunsch algorithm is an algorithm used in bioinformatics to align protein or nucleotide sequences. It was one of the first applications of dynamic programming to compare biological sequences.\n                  The algorithm was developed by Saul B. Needleman and Christian D. Wunsch and published in 1970.</p>\n                <p><strong>More info: </strong><a href=\"https://en.wikipedia.org/wiki/Needleman%E2%80%93Wunsch_algorithm\"><i>https://en.wikipedia.org/wiki/Needleman%E2%80%93Wunsch_algorithm</i></a></p>\n              </div>\n            </div>\n          </div>\n          <div class=\"panel panel-default panel-help\">\n            <a href=\"#opret-kampagne-2\" data-toggle=\"collapse\" data-parent=\"#help-accordion-2\" role=\"button\" aria-expanded=\"false\" aria-controls=\"slet-produkt opret-kampagne opret-produkt rediger-produkt ret-pris\">\n              <div class=\"panel-heading\">\n                <h2>The process of Needleman-Wunsch Component?</h2>\n              </div>\n            </a>\n            <div id=\"opret-kampagne-2\" class=\"collapse\">\n              <div class=\"panel-body\">\n                <p>Select NEEDLEMAN-WUNSCH algorithm from Home</p>\n                <p>Complete the 'Inputs for alignment' form</p>\n                <p><strong>Example: </strong>String1 : GCAT, String2 : GGGTAG, Match Score :1 , Mismatch Score:-1 Gap : -1</p>\n                <p>Click <i>'ALIGN'</i> button</p>\n                <p>Cick <i>'NEXT STEP'</i> button to proceed step by step</p>\n                <p>Click <i>'PREVIOUS STEP' button to go to previous steps</i></p>\n                <p>Click <i>'FINAL ALIGNMENT'</i> button see the final alignment</p>\n                <p>Click <i>'CLEAR GRID'</i> button to clear the grid</p>\n                <p>Enter a required valid step and Click <i>'REQUEST'</i> button to go to the required step</p>\n              </div>\n            </div>\n          </div>\n          <div class=\"panel panel-default panel-help\">\n            <a href=\"#opret-kampagne-3\" data-toggle=\"collapse\" data-parent=\"#help-accordion-2\" role=\"button\" aria-expanded=\"false\" aria-controls=\"slet-produkt opret-kampagne opret-produkt rediger-produkt ret-pris\">\n              <div class=\"panel-heading\">\n                <h2>Choosing a scoring systetm?</h2>\n              </div>\n            </a>\n            <div id=\"opret-kampagne-3\" class=\"collapse\">\n              <div class=\"panel-body\">\n                <p>The letters may match, mismatch, or be matched to a gap (a deletion or insertion (indel):</p>\n                <p>Match: The two letters at the current index the same.</p>\n                <p>Mismatch: The two letters at the current index are different.</p>\n                  <p>Indel (INsertion or DELetion): The best alignment involves one letter aligning to a gap in the other string.</p>\n              </div>\n            </div>\n          </div>\n          <div class=\"panel panel-default panel-help\">\n            <a href=\"#opret-kampagne-4\" data-toggle=\"collapse\" data-parent=\"#help-accordion-2\" role=\"button\" aria-expanded=\"false\" aria-controls=\"slet-produkt opret-kampagne opret-produkt rediger-produkt ret-pris\">\n              <div class=\"panel-heading\">\n                <h2>The method of filling the table?</h2>\n              </div>\n            </a>\n            <div id=\"opret-kampagne-4\" class=\"collapse\">\n              <div class=\"panel-body\">\n                <p>Start with a zero in the second row, second column. Move through the cells row by row, calculating the score for each cell.\n                  The score is calculated by comparing the scores of the cells neighboring to the left, top or top-left (diagonal) of the cell and adding the appropriate score for match, mismatch or indel. Calculate the candidate scores for each of the three possibilities:</p>\n\n                <p>The path from the top or left cell represents an indel pairing, so take the score of the left and the top cell, and add the score for indel to each of them.</p>\n                <p>The diagonal path represents a match/mismatch, so take the score of the top-left diagonal cell and add the score for match if the corresponding bases in the row and column are matching or the score for mismatch if they do not.</p>\n                  <p>The resulting score for the cell is the highest of the three candidate scores.</p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"tab-pane\" id=\"tab3\">\n        <div class=\"panel-group\" id=\"help-accordion-3\">\n          <div class=\"panel panel-default panel-help\">\n            <a href=\"#help3\" data-toggle=\"collapse\" data-parent=\"#help-accordion-3\"  >\n              <div class=\"panel-heading\">\n                <h2>What is Smith-Waterman?</h2>\n              </div>\n            </a>\n            <div id=\"help3\" class=\"collapse\">\n              <div class=\"panel-body\">\n                <p>The Smith–Waterman algorithm performs local sequence alignment; that is, for determining similar regions between two strings of nucleic acid sequences or protein sequences. Instead of looking at the entire sequence,\n                  the Smith–Waterman algorithm compares segments of all possible lengths and optimizes the similarity measure</p>\n              </div>\n            </div>\n          </div>\n          <div class=\"panel panel-default panel-help\">\n            <a href=\"#help4\" data-toggle=\"collapse\" data-parent=\"#help-accordion-3\"  role=\"button\" aria-expanded=\"false\" aria-controls=\"slet-produkt opret-kampagne opret-produkt rediger-produkt ret-pris\" >\n              <div class=\"panel-heading\">\n                <h2>The process of Smith-Waterman Component?</h2>\n              </div>\n            </a>\n            <div id=\"help4\" class=\"collapse\">\n              <div class=\"panel-body\">\n                <p>Select SMITH-WATERMAN algorithm from Home</p>\n                <p>Complete the 'Inputs for alignment' form</p>\n                <p><strong>Example: </strong>String1 : GCAT, String2 : GGGTAG, Match Score :1 , Mismatch Score:-1 Gap : -1</p>\n                <p>Click <i>'ALIGN'</i> button</p>\n                <p>Cick <i>'NEXT STEP'</i> button to proceed step by step</p>\n                <p>Click <i>'PREVIOUS STEP' button to go to previous steps</i></p>\n                <p>Click <i>'FINAL ALIGNMENT'</i> button see the final alignment</p>\n                <p>Click <i>'CLEAR GRID'</i> button to clear the grid</p>\n                <p>Enter a required valid step and Click <i>'REQUEST'</i> button to go to the required step</p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"tab-pane\" id=\"tab4\">\n        <div class=\"panel-group\" id=\"help-accordion4\">\n          <div class=\"panel panel-default panel-help\">\n            <a href=\"#help-three-1\" data-toggle=\"collapse\" data-parent=\"#help-accordion-4\"  >\n              <div class=\"panel-heading\">\n                <h2>What is T-cofee?</h2>\n              </div>\n            </a>\n            <div id=\"help-three-1\" class=\"collapse\"     >\n              <div class=\"panel-body\">\n                <p>T-Coffee (Tree-based Consistency\n                  Objective Function for Alignment Evaluation) is a multiple sequence alignment software using a progressive approach.</p>\n              </div>\n            </div>\n          </div>\n          <div class=\"panel panel-default panel-help\">\n            <a href=\"#opret-kampagne-6\" data-toggle=\"collapse\" data-parent=\"#help-accordion-4\" role=\"button\" aria-expanded=\"false\" aria-controls=\"slet-produkt opret-kampagne opret-produkt rediger-produkt ret-pris\">\n              <div class=\"panel-heading\">\n                <h2>The process of T-Coffee Component?</h2>\n              </div>\n            </a>\n            <div id=\"opret-kampagne-6\" class=\"collapse\">\n              <div class=\"panel-body\">\n                <p>Select T-COFFEE algorithm from Home</p>\n                <p>Choose a <i>fasta file</i> which contains aligned sequence file using T-coffe algorithm . Use<a href=\"http://tcoffee.crg.cat/apps/tcoffee/do:expresso\">http://tcoffee.crg.cat/apps/tcoffee/do:expresso</a> (T-Cofee server) to get the aligned file</p>\n                <p>Upload the file by clicking <i>'Upload'</i> button.</p>\n                <p>Click <i>'Help'</i> button for more clarifications</p>\n                <p>Aligned sequences will display on the pannel</p>\n                <p>Cick <i>'Color scheme'</i> button to change the color scheme.</p>\n                <p>No. of aligned charaters of each row is displayed on the chart</p>\n\n              </div>\n            </div>\n          </div>\n\n        </div>\n      </div>\n      <div class=\"tab-pane\" id=\"tab5\">\n        <div class=\"panel-group\" id=\"help-accordion5\">\n          <div class=\"panel panel-default panel-help\">\n            <a href=\"#help-three-2\" data-toggle=\"collapse\" data-parent=\"#help-accordion-5\"  >\n              <div class=\"panel-heading\">\n                <h2>What is Dialign?</h2>\n              </div>\n            </a>\n            <div id=\"help-three-2\" class=\"collapse\"     >\n              <div class=\"panel-body\">\n                <p>DIALIGN is an alignment program that relies on comparison of whole segments of the sequences instead of comparison of single residue. Several versions available are Anchored DIALIGN,\n                  CHAOS-DIALIGN, DIALIGN-TX, DIALIGN-PFAM</p>\n              </div>\n            </div>\n          </div>\n          <div class=\"panel panel-default panel-help\">\n            <a href=\"#opret-kampagne-7\" data-toggle=\"collapse\" data-parent=\"#help-accordion-5\" role=\"button\" aria-expanded=\"false\" aria-controls=\"slet-produkt opret-kampagne opret-produkt rediger-produkt ret-pris\">\n              <div class=\"panel-heading\">\n                <h2>The process of Dialign Component?</h2>\n              </div>\n            </a>\n            <div id=\"opret-kampagne-7\" class=\"collapse\">\n              <div class=\"panel-body\">\n                <p>Select DIALIGN algorithm from Home</p>\n                <p>Choose a <i>fasta file</i> which contains aligned sequence file using Dialign algorithm . Use<a href=\"http://dialign.gobics.de/\">http://dialign.gobics.de/</a> (Dialign Home) to get the aligned file</p>\n                <p>Upload the file by clicking <i>'Upload'</i> button.</p>\n                <p>Click <i>'Help'</i> button for more clarification</p>\n                <p>Aligned sequences will display on the pannel</p>\n                <p>Cick <i>'Color scheme'</i> button to change the color scheme.</p>\n                <p>No. of aligned charaters of each row is displayed on the chart</p>\n\n              </div>\n            </div>\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/faq/faq.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaqComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FaqComponent = /** @class */ (function () {
    function FaqComponent() {
    }
    FaqComponent.prototype.ngOnInit = function () {
    };
    FaqComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-faq',
            template: __webpack_require__("../../../../../src/app/components/faq/faq.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/faq/faq.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FaqComponent);
    return FaqComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-card {\n  max-width: 500px;\n  min-height: 250px;\n\n}\n\n.example-header-image {\n  background-size: cover;\n}\n\nmat-grid-tile {\n  background:  rgba(128, 84, 100, 0.19);\n}\n\n[class*='col-'] {\n  float: left;\n  padding-right: 30px;\n  padding-bottom: 30px;\n}\n\n[class*='col-']:last-of-type {\n  padding-right: 0;\n}\n\na {\n  text-decoration: none;\n}\n\n*, *:after, *:before {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\np{\n  font-family: \"Arial\";\n  text-align: center;\n  color: #607d8b;\n\n}\n\nh3 {\n  text-align: center; margin-bottom: 0;\n}\n\nh4{\n  position: relative;\n}\n\n.grid {\n  margin: 0;\n}\n\n.col-1-4 {\n  width: 25%;\n}\n\n.module {\n  padding: 20px;\n  text-align: center;\n  color: #eee;\n  max-height: 120px;\n  min-width: 120px;\n  background-color: cornflowerblue;\n  border-radius: 10px;\n  -moz-border-radius: 10px;\n  -webkit-border-radius: 10px;\n  box-shadow: 6px 6px 5px #444;\n  -moz-box-shadow: 6px 6px 5px #444;\n  -webkit-box-shadow: 6px 6px 5px #444;\n}\n\n.module:hover {\n  background-color: #EEE;\n  cursor: pointer;\n  color: #607d8b;\n}\n\n.grid-pad {\n  padding: 10px 0;\n}\n\n.grid-pad > [class*='col-']:last-of-type {\n  padding-right: 20px;\n}\n\n@media (max-width: 600px) {\n  .module {\n    font-size: 10px;\n    max-height: 75px; }\n}\n\n@media (max-width: 1024px) {\n  .grid {\n    margin: 0;\n  }\n  .module {\n    min-width: 60px;\n  }\n}\n\n.parallax {\n  /* The image used */\n  background-image: url(\"http://blog.oncofertility.northwestern.edu/wp-content/uploads/2010/07/DNA-sequence.jpg\");\n\n  /* Set a specific height */\n  min-height: 300px;\n\n  /* Create the parallax scrolling effect */\n  background-attachment: fixed;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  width:100%;\n\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n\n<div class=\"parallax\"></div>\n\n\n<h3>Sequence Alignment Algorithms</h3>\n<!--dash board-->\n<div class=\"grid grid-pad\">\n  <a *ngFor=\"let algo of algos\" class=\"col-1-4\"\n     routerLink={{algo.rlink}}>\n    <div class=\"module\">\n\n      <h4>{{algo.name}}</h4>\n      <mat-card class=\"example-card\" >\n        <mat-card-content>\n          <p >\n            {{algo.text}}\n          </p>\n        </mat-card-content>\n      </mat-card>\n    </div>\n  </a>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        // algorithms' details
        this.algos = [
            { name: 'Needleman-Wunsch', text: 'The Needleman–Wunsch algorithm is an algorithm used in bioinformatics to align protein or ' +
                    'nucleotide sequences. It was one of the first applications of dynamic programming to compare biological sequences. ' +
                    'The algorithm was developed by Saul B. Needleman and Christian D. Wunsch and published in 1970', rlink: 'nwalgo' },
            { name: 'Smith-Waterman', text: 'The Smith–Waterman algorithm performs local sequence alignment; ' +
                    'that is, for determining similar regions between two strings of nucleic acid sequences or protein sequences.' +
                    ' Instead of looking at the entire sequence, ' +
                    'the Smith–Waterman algorithm compares segments of all possible lengths and optimizes the similarity measure. ' +
                    'The algorithm was first proposed by Temple F. Smith and Michael S. Waterman in 1981.', rlink: 'swalgo' },
            { name: 'T-Coffee', text: 'T-Coffee (Tree-based Consistency Objective Function for Alignment Evaluation) is a ' +
                    'multiple sequence alignment software using a progressive approach.' +
                    ' It generates a library of pairwise alignments to guide the multiple sequence alignment.' +
                    ' It can also combine multiple sequences alignments obtained previously and in the latest versions can use structural ' +
                    'information from PDB files (3D-Coffee)', rlink: 'tcoffee' },
            { name: 'DIALIGN', text: 'DIALIGN is an alignment program that relies on comparison of ' +
                    'whole segments of the sequences instead of comparison of single residue. Several versions available are Anchored DIALIGN,' +
                    'CHAOS-DIALIGN, DIALIGN-TX, DIALIGN-PFAM', rlink: 'dialign' }
        ];
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/nwalgo/nw-form/nw-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\nform_main {\n  width: 100%;\n}\n.form_main h4 {\n  font-family: roboto;\n  font-size: 20px;\n  font-weight: 300;\n  margin-bottom: 15px;\n  margin-top: 20px;\n  text-transform: uppercase;\n}\n.heading {\n  border-bottom: 1px solid lightseagreen;\n  padding-bottom: 9px;\n  position: relative;\n}\n.heading span {\n  background: darkblue none repeat scroll 0 0;\n  bottom: -2px;\n  height: 3px;\n  left: 0;\n  position: absolute;\n  width: 75px;\n}\n.form {\n  border-radius: 7px;\n  padding: 6px;\n}\n.txt[type=\"text\"] {\n  border: 1px solid #ccc;\n  margin: 10px 0;\n  padding: 10px 0 10px 5px;\n  width: 100%;\n}\n.txt[type=\"number\"] {\n  border: 1px solid #ccc;\n  margin: 10px 0;\n  padding: 10px 0 10px 5px;\n  width: 100%;\n}\n.txt_3[type=\"text\"] {\n  margin: 10px 0 0;\n  padding: 10px 0 10px 5px;\n  width: 100%;\n  font-size:12px;\n}\n.txt2[type=\"submit\"] {\n  background: #242424 none repeat scroll 0 0;\n  border: 1px solid #4f5c04;\n  border-radius: 25px;\n  color: #fff;\n  font-size: 16px;\n  font-style: normal;\n  line-height: 35px;\n  margin: 10px 0;\n  padding: 0;\n  text-transform: uppercase;\n  width: 30%;\n}\n.txt2:hover {\n  background: rgba(0, 0, 0, 0) none repeat scroll 0 0;\n  color: #5793ef;\n  -webkit-transition: all 0.5s ease 0s;\n  transition: all 0.5s ease 0s;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/nwalgo/nw-form/nw-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!submitted\" >\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-6 col-lg-6\">\n        <div class=\"container-fluid\" style=\"background-color:white; padding-top: 1rem; border-radius: 20px; border: 1px solid;\">\n        <div class=\"form_main\">\n          <h4 class=\"heading\"><strong>Input</strong> for alignment <span></span></h4>\n          <div class=\"form\">\n            <form (ngSubmit)=\"onSubmit()\" #nwalgoForm=\"ngForm\">\n\n              <label>String 1</label>\n            <input class=\"txt\" type=\"text\" style=\"text-transform:uppercase\" name=\"Stringone\"  [(ngModel)]=\" stringOne\" placeholder=\"String 1 (i.e CCATGTA)\" required>\n            <label>String 2</label>\n            <input class=\"txt\" type=\"text\" style=\"text-transform:uppercase\" name=\"Stringtwo\" [(ngModel)]=\" stringTwo\" placeholder=\"String 2 (i.e CAATGAA)\" required>\n            <label>Match Score</label>\n            <input class=\"txt\"id=\"match\" type=\"number\"  min=\"1\" name=\"match\" pattern= \"[0-9]+\" [(ngModel)]=\"match\" placeholder=\"match\" required>\n            <label>Mismatch Score</label>\n            <input class=\"txt\"type=\"number\" name=\"mismatch\" max=\"0\" [(ngModel)]=\"mismatch\" placeholder=\"mismatch\" required>\n            <label>Gap Penalty</label>\n            <input class=\"txt\"type=\"number\" max=\"0\" name= \"gap\" [(ngModel)]=\"gap\" placeholder=\"gap\" required>\n        <input class=\"txt2\" type=\"submit\" [disabled]=\"!nwalgoForm.form.valid\" [value]=\"btnText\" [disabled]= \"alignStop\"\n               (click)=\"onSubmit();showGrid()\" >\n\n            </form>\n          </div>\n        </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/nwalgo/nw-form/nw-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NwFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_sharing_service__ = __webpack_require__("../../../../../src/app/services/sharing.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_nwalgo_service__ = __webpack_require__("../../../../../src/app/services/nwalgo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sweetalert2__ = __webpack_require__("../../../../sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_sweetalert2__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NwFormComponent = /** @class */ (function () {
    function NwFormComponent(sharingService, nwalgoService) {
        this.sharingService = sharingService;
        this.nwalgoService = nwalgoService;
        this.btnText = 'Align';
        this.submitted = false;
    }
    NwFormComponent.prototype.ngOnInit = function () {
        this.submitted = false;
    };
    NwFormComponent.prototype.onSubmit = function () {
        this.submitted = true;
    };
    // This method is called when the align button clicks
    NwFormComponent.prototype.showGrid = function () {
        var _this = this;
        this.showLoading();
        this.stringOne = this.stringOne.toUpperCase();
        this.stringTwo = this.stringTwo.toUpperCase();
        this.match = this.match;
        this.mismatch = this.mismatch;
        this.gap = this.gap;
        setTimeout(function () {
            _this._get();
        }, 3000);
        this.alignStop = true;
        this.onSubmit();
    };
    // call the service to retrive data
    NwFormComponent.prototype._get = function () {
        var _this = this;
        this.nwalgoService._get(this.stringOne, this.stringTwo, this.match, this.mismatch, this.gap).subscribe(function (data) {
            _this.dataArray = data;
            _this.sharingService.setData(_this.dataArray, _this.stringOne, _this.stringTwo, _this.match, _this.mismatch, _this.gap);
            _this.sharingService.setVisibility(true);
            _this.closeLoading();
            console.log(_this.dataArray);
        });
    };
    // waiting alert on
    NwFormComponent.prototype.showLoading = function () {
        __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default()({
            title: 'Please Wait!',
            text: 'your request is processing',
            onOpen: function () {
                __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default.a.showLoading();
            }
        });
    };
    // waiting alert close
    NwFormComponent.prototype.closeLoading = function () {
        __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default.a.close();
    };
    NwFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-nw-form',
            template: __webpack_require__("../../../../../src/app/components/nwalgo/nw-form/nw-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/nwalgo/nw-form/nw-form.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_nwalgo_service__["a" /* NwalgoService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_sharing_service__["a" /* SharingService */],
            __WEBPACK_IMPORTED_MODULE_2__services_nwalgo_service__["a" /* NwalgoService */]])
    ], NwFormComponent);
    return NwFormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/nwalgo/nw-grid/nw-grid.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\nh2{\n  font-weight: bold;\n  color: black;\n\n}\nh3{\n  font-weight: bold;\n  color: white;\n\n}\n.btn {\n  background: #242424 none repeat scroll 0 0;\n  border: 1px solid #4f5c04;\n  border-radius: 25px;\n  color: #fff;\n  font-size: 12px;\n  font-style: normal;\n  line-height: 35px;\n  margin: 10px 0;\n  padding: 0;\n  text-transform: uppercase;\n  width: 26%;\n}\n.btn:hover{opacity:0.6;}\n.example-container {\n  border-radius:5px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  background: white;\n\n}\n.example-container > * {\n  width: 100%;\n\n}\nmat-grid-tile {\n  background: white;\n}\ntable, td {\n  border: 1px solid black;\n  min-width: 30px;\n  height: 30px;\n}\n.highlight{\n  background-color: lightpink;\n}\n.highlight2{\n  background-color: lightskyblue;\n}\n.highlight3{\n  background-color: lightgreen;\n}\n.diagonal{\n  background-image: url('data:image/png;base64,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');\n}\n.up{\n  background-image: url('data:image/png;base64,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');\n}\n.side{\n  background-image: url('data:image/png;base64,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');\n}\n.diagonal_side{\n  background-image: url('data:image/png;base64,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');\n}\n.diagonal_up{\n  background-image: url('data:image/png;base64,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');\n}\n.side_up{\n  background-image: url('data:image/png;base64,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');\n}\n.diagonal_side_up{\n  background-image: url('data:image/png;base64,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');\n}\n.borderless td {\n  border: none;\n  min-width: 30px;\n\n}\n.borderless th {\n  min-width: 60px;\n  border: none;\n}\n.txt[type=\"number\"] {\n  border: 1px solid #ccc;\n  margin: 10px 0;\n  padding: 10px 0 10px 5px;\n  width: 30%;\n}\n.gridblock::-webkit-scrollbar{\n// FIX scrollbars on Mac\n-webkit-appearance: none;\n  width: 7px;\n  height: 7px;\n}\n.gridblock::-webkit-scrollbar-thumb{\n  border-radius: 4px;\n  background-color: rgba(0,0,0,.5);\n  -webkit-box-shadow: 0 0 1px rgba(255,255,255,.5);\n          box-shadow: 0 0 1px rgba(255,255,255,.5);\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/nwalgo/nw-grid/nw-grid.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-lg-7\">\n    <div class=\"card mb-3\">\n      <div class=\"card-header\">\n        <i class=\"\"></i> Dynamic Matrix\n      </div>\n      <div class=\"card-body\">\n        <div id=\"myBarChart\" width=\"100\" height=\"50\">\n        <!--Inputvalues-->\n          <div class=\"row\">\n            <div class=\"col-md-4\">\n              <span> String 1    : {{stringOne}}</span>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-4\">\n              <span>  String 2    : {{stringTwo}}</span>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-4 col-lg-4\">\n                Match Score     : {{match}}\n            </div>\n            <div class=\"col-md-4 col-lg-4\">\n                Mismatch Score    : {{mismatch}}\n            </div>\n            <div class=\"col-md-4 col-lg-4\">\n               Gap Penalty     : {{gap}}\n            </div>\n          </div>\n\n\n          <!--Current step display-->\n          Current Step : {{nextDataArrayIndex}}\n          <!--Field to request step-->\n          <input class=\"txt\"id=\"request\" type=\"number\"  max={{max}} min=\"0\" name=\"request\" [(ngModel)]=\"requestedStep\" placeholder=\"Request a step\">\n          <input class=\"btn\" type=\"submit\" [disabled]=\"request\" [value]=\"reqBtn\" (click)=\"goToRequest()\" >\n          <div clas=\"gridblock\" style=\"overflow:auto; height: 500px;  width: 100%\" >\n            <!--Grid-->\n            <table class=\"table table-bordered\" cellspacing=\"10\">\n              <tr *ngFor=\"let rowArray of gridArray\">\n                <td  *ngFor=\"let colData of rowArray\"\n\n                     [ngClass]='{diagonal : (colData.diag_img), up : (colData.up_img),side : (colData.side_img),\n                 diagonal_side:(colData.diag_side_img), diagonal_up:(colData.diag_up_img), side_up:(colData.side_up_img),diagonal_side_up:(colData.diag_side_up_img)\n                 ,highlight : (colData.color), highlight2 : (colData.datacolor), highlight3 : (colData.refcolor)}'>\n                  {{colData.cellvalue}}\n\n                </td>\n              </tr>\n            </table>\n          </div>\n          <!--Final output-->\n          <div *ngIf=\"final\" clas=\"gridblock\" style=\"overflow:auto; height: 200px;  width: 100%;\">\n            <table class=\"table borderless\" cellspacing=\"10\">\n              <tr>\n                <th>S1:</th>\n                <td *ngFor=\"let char of resSeq1Array\" >{{char}}</td>\n              </tr>\n              <tr>\n                <th>S2:</th>\n                <td *ngFor=\"let char2 of resSeq2Array\" >{{char2}}</td>\n              </tr>\n            </table>\n\n          </div>\n\n        </div>\n      </div>\n      <div class=\"card-footer small text-muted\"></div>\n    </div>\n  </div>\n\n  <div class=\"col-lg-5\">\n\n    <div class=\"card mb-3\">\n      <div class=\"card-header\">\n        <i class=\"\"></i> Navigate Buttons</div>\n      <div class=\"card-body\">\n        <div id=\"myPieChart\" width=\"100%\" height=\"100\">\n\n          <br>\n          <!--<input type=\"submit\" class=\"btn\" [value]=\"reloadBtn\" (click)=\"goBack()\" >-->\n          <br>\n          <input type=\"submit\" class=\"btn\" [value]=\"clearBtn\" (click)=\"clearall()\" >\n          <input type=\"submit\" class=\"btn\" [value]=\"backBtn\" [disabled] = \"noback\" (click)=\"previousStep()\" >\n          <input type=\"submit\" class=\"btn\" [value]=\"stepBtn\" [disabled] = \"stepStop\" (click)=\"nextStep()\" >\n          <input type=\"submit\" class=\"btn\" style=\"width:25%\" [value]=\"finalBtn\" [disabled] = \"finalStop\"(click)=\"finalResult()\">\n\n          <!--Value Calculation-->\n          <div *ngIf=\"!noback\">\n            <table class=\"table borderless\" cellspacing=\"10\">\n              <tr>\n                <th>Score From Above Cell</th>\n                <td>Score of Cell({{dataArray[nextDataArrayIndex-1].row + 1}}, {{dataArray[nextDataArrayIndex-1].col + 2}})+gap</td>\n                <td>{{dataArray[nextDataArrayIndex-1].upScore}}</td>\n              </tr>\n              <tr>\n                <th>Score From Left Cell</th>\n                <td>Score of Cell({{dataArray[nextDataArrayIndex-1].row + 2}}, {{dataArray[nextDataArrayIndex-1].col + 1}})+gap</td>\n                <td>{{dataArray[nextDataArrayIndex-1].leftScore}}</td>\n              </tr>\n              <tr>\n                <th>Score From Diagonal Cell</th>\n                <td><span>Score of Cell({{dataArray[nextDataArrayIndex-1].row + 1}}, {{dataArray[nextDataArrayIndex-1].col + 1}})</span>\n                  <span>+match/mismatch</span></td>\n                <td>{{dataArray[nextDataArrayIndex-1].diagonalScore}}</td>\n              </tr>\n              <tr>\n                <th  style=\"min-width: 100px;\">Max Score</th>\n                <td>Score of Cell({{dataArray[nextDataArrayIndex-1].row + 2}}, {{dataArray[nextDataArrayIndex-1].col + 2}})</td>\n                <td>{{dataArray[nextDataArrayIndex-1].score}}</td>\n              </tr>\n            </table>\n\n          </div>\n\n        </div>\n\n      </div>\n      <div class=\"card-footer small text-muted\"></div>\n    </div>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/nwalgo/nw-grid/nw-grid.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NwGridComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_cell__ = __webpack_require__("../../../../../src/app/models/cell.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_sharing_service__ = __webpack_require__("../../../../../src/app/services/sharing.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sweetalert2__ = __webpack_require__("../../../../sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_sweetalert2__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NwGridComponent = /** @class */ (function () {
    function NwGridComponent(sharingService) {
        this.sharingService = sharingService;
        this.stepBtn = 'Next Step';
        this.backBtn = 'Previous Step';
        this.finalBtn = 'Final Alignment';
        this.clearBtn = 'Clear Grid';
        this.reloadBtn = 'Go Back';
        this.reqBtn = 'Request';
        this.stepStop = false;
        this.finalStop = false;
        this.String1array = [];
        this.String2array = [];
        this.StringOffsetArray = ['', ''];
        this.colCount = 0;
        this.rowCount = 0;
        this.nextRowIndex = 2;
        this.nextColIndex = 2;
        this.noback = true;
        this.resSeq1Array = [];
        this.resSeq2Array = [];
        this.nextDataArrayIndex = 0;
        this.match = '';
        this.mismatch = '';
        this.gap = '';
    }
    NwGridComponent.prototype.ngOnInit = function () {
        this.showSpinner = true;
        this.createGridArray();
    };
    // create grid
    NwGridComponent.prototype.createGridArray = function () {
        this.initialize();
        this.gridArray = [];
        for (var r = 0; r < this.rowCount; r++) {
            this.gridArray[r] = [];
            for (var co = 0; co < this.colCount; co++) {
                if ((co === 0 && r === 0) || (co === 0 && r === 1) || (co === 1 && r === 0)) {
                    this.gridArray[r][co] = new __WEBPACK_IMPORTED_MODULE_1__models_cell__["a" /* Cell */]();
                    continue;
                }
                this.gridArray[r][co] = new __WEBPACK_IMPORTED_MODULE_1__models_cell__["a" /* Cell */]();
            }
        }
        for (var co = 2; co < this.colCount; co++) {
            this.gridArray[0][co].cellvalue = this.String1array[co];
        }
        for (var r = 2; r < this.rowCount; r++) {
            this.gridArray[r][0].cellvalue = this.String2array[r];
        }
        this.gridArray[0][0].cellvalue = 'D(1,1)';
        this.gridArray[1][1].cellvalue = '0';
        for (var cp = 2; cp < this.colCount; cp++) {
            this.gridArray[1][cp].cellvalue = (parseInt(this.gap, 10) * (cp - 1)).toString();
        }
        for (var rp = 2; rp < this.rowCount; rp++) {
            this.gridArray[rp][1].cellvalue = (parseInt(this.gap, 10) * (rp - 1)).toString();
        }
        console.log('created grid');
    };
    // initialize values
    NwGridComponent.prototype.initialize = function () {
        this.String1array = [];
        this.String2array = [];
        this.StringOffsetArray = ['', ''];
        this.colCount = 0;
        this.rowCount = 0;
        this.nextRowIndex = 2;
        this.nextColIndex = 2;
        this.resSeq1Array = [];
        this.resSeq2Array = [];
        this.nextDataArrayIndex = 0;
        this.noback = true;
        this.stepStop = false;
        this.dataArray = this.sharingService.getData();
        this.stringOne = this.sharingService.getStringOne();
        this.stringTwo = this.sharingService.getStringTwo();
        this.match = this.sharingService.getMatch();
        this.mismatch = this.sharingService.getMismatch();
        this.gap = this.sharingService.getGap();
        this.String1array = this.StringOffsetArray.concat(this.stringOne.split('', this.stringOne.length));
        this.String2array = this.StringOffsetArray.concat(this.stringTwo.split('', this.stringTwo.length));
        this.columns = this.stringOne.length + 2;
        this.rowCount = this.stringTwo.length + 2;
        this.colCount = this.stringOne.length + 2;
        this.request = false;
        this.max = this.stringOne.length * this.stringTwo.length;
        this.showSpinner = false;
    };
    // next step button function
    NwGridComponent.prototype.nextStep = function () {
        this.noback = false;
        console.log('next step ' + this.nextDataArrayIndex + 'next row ' + this.nextRowIndex + 'next col ' + this.nextColIndex);
        // reset exisiting colors
        this.resetColor();
        this.resetBackgrounds();
        // update the next step values,colors
        this.updateMatrix(this.nextRowIndex, this.nextColIndex, this.dataArray[this.nextDataArrayIndex].score, this.dataArray[this.nextDataArrayIndex].preRow + 1, this.dataArray[this.nextDataArrayIndex].preCol + 1);
        this.nextDataArrayIndex += 1;
        this.selectImage(this.gridArray[this.nextRowIndex][this.nextColIndex]);
        if (this.nextColIndex + 1 < this.colCount) {
            this.nextColIndex += 1;
        }
        else {
            this.nextColIndex = 2;
            this.nextRowIndex += 1;
        }
        if (this.nextDataArrayIndex === this.stringOne.length * this.stringTwo.length) {
            console.log('Next step came to final');
            this.stepStop = true;
        }
    };
    // functionality of the previous step
    NwGridComponent.prototype.previousStep = function () {
        this.resetBackgrounds();
        this.stepStop = false;
        this.nextDataArrayIndex -= 1;
        if (this.nextDataArrayIndex < 1) {
            this.noback = true;
        }
        if (this.nextColIndex - 1 < 2) {
            this.nextColIndex = this.colCount - 1;
            this.nextRowIndex -= 1;
        }
        else {
            this.nextColIndex -= 1;
        }
        console.log('previous step ' + this.nextDataArrayIndex + 'next row ' + this.nextRowIndex + 'next col ' + this.nextColIndex);
        this.undoMatrix(this.nextRowIndex, this.nextColIndex, '', this.dataArray[this.nextDataArrayIndex].preRow + 1, this.dataArray[this.nextDataArrayIndex].preCol + 1);
    };
    NwGridComponent.prototype.undoMatrix = function (row, col, val, prerow, precol) {
        this.gridArray[row][col].cellvalue = val;
        this.gridArray[0][col].color = false;
        this.gridArray[row][0].color = false;
        this.gridArray[row][col].datacolor = false;
        this.gridArray[prerow][precol].refcolor = false;
        if (this.nextDataArrayIndex > 0) {
            var point = void 0;
            point = this.dataArray[this.nextDataArrayIndex - 1];
            this.gridArray[0][point.col + 1].color = true;
            this.gridArray[point.row + 1][0].color = true;
            this.gridArray[point.row + 1][point.col + 1].datacolor = true;
            this.gridArray[point.preRow + 1][point.preCol + 1].refcolor = true;
            this.selectImage(this.gridArray[point.row + 1][point.col + 1]);
        }
    };
    // reset colors of cells
    NwGridComponent.prototype.resetColor = function () {
        for (var _i = 0, _a = this.gridArray; _i < _a.length; _i++) {
            var row = _a[_i];
            for (var _b = 0, row_1 = row; _b < row_1.length; _b++) {
                var col = row_1[_b];
                col.color = false;
                col.datacolor = false;
                col.refcolor = false;
            }
        }
    };
    // reset backgrounds
    NwGridComponent.prototype.resetBackgrounds = function () {
        for (var _i = 0, _a = this.gridArray; _i < _a.length; _i++) {
            var row = _a[_i];
            for (var _b = 0, row_2 = row; _b < row_2.length; _b++) {
                var col = row_2[_b];
                col.diag_img = false;
                col.side_img = false;
                col.up_img = false;
                col.diag_side_img = false;
                col.diag_up_img = false;
                col.side_up_img = false;
                col.diag_side_up_img = false;
            }
        }
    };
    // update the next step values,colors
    NwGridComponent.prototype.updateMatrix = function (row, col, val, prerow, precol) {
        this.gridArray[row][col].cellvalue = val;
        this.gridArray[0][col].color = true;
        this.gridArray[row][0].color = true;
        this.gridArray[row][col].datacolor = true;
        this.gridArray[prerow][precol].refcolor = true;
    };
    // final button's function
    NwGridComponent.prototype.finalResult = function () {
        this.nextDataArrayIndex = this.stringOne.length * this.stringTwo.length;
        this.request = true;
        this.stepStop = true;
        this.noback = true;
        this.resetColor();
        this.resetBackgrounds();
        this.fillin();
        for (var x = this.stringOne.length * this.stringTwo.length; x < this.dataArray.length - 1; x++) {
            this.colorTraceback(x);
        }
        this.final = true;
        this.resSeq1 = this.dataArray[this.dataArray.length - 1].sequence1;
        this.resSeq2 = this.dataArray[this.dataArray.length - 1].sequence2;
        this.resSeq1Array = this.resSeq1.split('', this.resSeq1.length);
        this.resSeq2Array = this.resSeq2.split('', this.resSeq2.length);
        console.log(this.resSeq1);
        console.log(this.resSeq2);
    };
    // fill all values in the grid
    NwGridComponent.prototype.fillin = function () {
        var count = 0;
        console.log(this.String1array.length);
        console.log(this.String2array.length);
        for (var i = 2; i < this.String2array.length; i++) {
            for (var j = 2; j < this.String1array.length; j++) {
                this.gridArray[i][j].cellvalue = this.dataArray[count].score;
                console.log(count + ' ' + i + ' ' + j);
                console.log('Score:' + this.dataArray[count].score);
                count += 1;
            }
        }
    };
    // color cells related to final simulation
    NwGridComponent.prototype.colorTraceback = function (x) {
        this.gridArray[this.dataArray[x].row + 1][this.dataArray[x].col + 1].datacolor = true;
    };
    // clear grid
    NwGridComponent.prototype.clearall = function () {
        this.final = false;
        this.ngOnInit();
    };
    // reload the form for new alignment
    NwGridComponent.prototype.goBack = function () {
        location.reload();
    };
    // direct to the requested step
    NwGridComponent.prototype.goToRequest = function () {
        var req = this.requestedStep;
        var current = this.nextDataArrayIndex;
        // show error for minus value requests
        if (req < 0) {
            this.showMinusError();
        }
        else if (req > this.stringOne.length * this.stringTwo.length) {
            this.showExcessRequestError();
        }
        else if (req > current) {
            for (var i = 0; i < req - current; i++) {
                this.nextStep();
            }
        }
        else if (req < current) {
            for (var i = 0; i < current - req; i++) {
                this.previousStep();
            }
        }
    };
    // select image
    NwGridComponent.prototype.selectImage = function (cell) {
        var upScore = this.dataArray[this.nextDataArrayIndex - 1].upScore;
        var leftScore = this.dataArray[this.nextDataArrayIndex - 1].leftScore;
        var diagonalScore = this.dataArray[this.nextDataArrayIndex - 1].diagonalScore;
        var max = this.dataArray[this.nextDataArrayIndex - 1].score;
        if (max === upScore && max === leftScore && max === diagonalScore) {
            cell.diag_side_up_img = true;
        }
        else if (max === upScore && max === diagonalScore) {
            cell.diag_up_img = true;
        }
        else if (max === leftScore && max === diagonalScore) {
            cell.diag_side_img = true;
        }
        else if (max === upScore && max === leftScore) {
            cell.side_up_img = true;
        }
        else if (max === upScore) {
            cell.up_img = true;
        }
        else if (max === leftScore) {
            cell.side_img = true;
        }
        else if (max === diagonalScore) {
            cell.diag_img = true;
        }
    };
    // show error alert for requesting minus step
    NwGridComponent.prototype.showMinusError = function () {
        __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default()({
            type: 'error',
            title: 'Error...',
            text: 'Please request a non-negative step',
        });
    };
    // show error alert for requesting step exceeding the number of steps
    NwGridComponent.prototype.showExcessRequestError = function () {
        __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default()({
            type: 'error',
            title: 'Error...',
            text: 'Please request a step equal or less than '.concat((this.stringOne.length * this.stringTwo.length).toString()),
        });
    };
    NwGridComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-nw-grid',
            template: __webpack_require__("../../../../../src/app/components/nwalgo/nw-grid/nw-grid.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/nwalgo/nw-grid/nw-grid.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_sharing_service__["a" /* SharingService */]])
    ], NwGridComponent);
    return NwGridComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/nwalgo/nwalgo.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/nwalgo/nwalgo.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\n<div align=\"center\"><h2>{{title|uppercase}}</h2></div>\n\n<br>\n\n<div class=\"container color-light\">\n\n  <!--Form-->\n <app-nw-form></app-nw-form>\n\n  <!--Grid-->\n  <app-nw-grid *ngIf=\"sharingService.getVisibility()\"></app-nw-grid>\n\n</div>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/nwalgo/nwalgo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NwalgoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_nwalgo_service__ = __webpack_require__("../../../../../src/app/services/nwalgo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_sharing_service__ = __webpack_require__("../../../../../src/app/services/sharing.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

 // import Nwalgoservice

var NwalgoComponent = /** @class */ (function () {
    function NwalgoComponent(sharingService) {
        this.sharingService = sharingService;
        this.title = 'needleman-wunsch';
    }
    NwalgoComponent.prototype.ngOnInit = function () {
        this.sharingService.setVisibility(false);
    };
    NwalgoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-nwalgo',
            template: __webpack_require__("../../../../../src/app/components/nwalgo/nwalgo.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/nwalgo/nwalgo.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_nwalgo_service__["a" /* NwalgoService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_sharing_service__["a" /* SharingService */]])
    ], NwalgoComponent);
    return NwalgoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/swalgo/sw-form/sw-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\nform_main {\n  width: 100%;\n}\n.form_main h4 {\n  font-family: roboto;\n  font-size: 20px;\n  font-weight: 300;\n  margin-bottom: 15px;\n  margin-top: 20px;\n  text-transform: uppercase;\n}\n.heading {\n  border-bottom: 1px solid lightseagreen;\n  padding-bottom: 9px;\n  position: relative;\n}\n.heading span {\n  background: darkblue none repeat scroll 0 0;\n  bottom: -2px;\n  height: 3px;\n  left: 0;\n  position: absolute;\n  width: 75px;\n}\n.form {\n  border-radius: 7px;\n  padding: 6px;\n}\n.txt[type=\"text\"] {\n  border: 1px solid #ccc;\n  margin: 10px 0;\n  padding: 10px 0 10px 5px;\n  width: 100%;\n}\n.txt[type=\"number\"] {\n  border: 1px solid #ccc;\n  margin: 10px 0;\n  padding: 10px 0 10px 5px;\n  width: 100%;\n}\n.txt_3[type=\"text\"] {\n  margin: 10px 0 0;\n  padding: 10px 0 10px 5px;\n  width: 100%;\n  font-size:12px;\n}\n.txt2[type=\"submit\"] {\n  background: #242424 none repeat scroll 0 0;\n  border: 1px solid #4f5c04;\n  border-radius: 25px;\n  color: #fff;\n  font-size: 16px;\n  font-style: normal;\n  line-height: 35px;\n  margin: 10px 0;\n  padding: 0;\n  text-transform: uppercase;\n  width: 30%;\n}\n.txt2:hover {\n  background: rgba(0, 0, 0, 0) none repeat scroll 0 0;\n  color: #5793ef;\n  -webkit-transition: all 0.5s ease 0s;\n  transition: all 0.5s ease 0s;\n}\n/*.container{\n  display: grid;\n  grid-template-columns: 50% auto;\n\n}\n\n.col{\n  padding: .4cm 1.3cm;\n}\n\n.color-dark{\n  background:darkslategray;\n  border-radius: 10px;\n  -moz-border-radius: 10px;\n  -webkit-border-radius: 10px;\n  padding: 4px 9px 0px 1px;\n  box-shadow: 6px 6px 5px #444;\n  -moz-box-shadow: 6px 6px 5px #444;\n  -webkit-box-shadow: 6px 6px 5px #444;\n}\n\n.color-light{\n  background: lightgrey;\n  border-radius: 10px;\n  -moz-border-radius: 10px;\n  -webkit-border-radius: 10px;\n  padding: 4px 9px 0px 1px;\n  box-shadow: 6px 6px 5px #444;\n  -moz-box-shadow: 6px 6px 5px #444;\n  -webkit-box-shadow: 6px 6px 5px #444;\n}\n\n\n.life-container{\n  background: #3fa0e1;\n  padding: .5cm;\n  font-weight: bold;\n  cursor:pointer;\n}\nh2{\n  font-weight: bold;\n  color: black;\n\n}\nh3{\n  font-weight: bold;\n  color: white;\n\n}\n\n.btn {\n  border-radius:5px;\n  background-color:darkslategray;\n  color:white; padding:14px 20px;\n  margin:8px 0; border:none; cursor: pointer;\n  width:25%;\n\n}\n.btn:hover{opacity:0.6;}\n\n\n.example-container {\n  border-radius:5px;\n  display: flex;\n  flex-direction: column;\n  background: white;\n}\n\n.example-container > * {\n  width: 100%;\n}\nmat-grid-tile {\n  background: white;\n}\n*/\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/swalgo/sw-form/sw-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!submitted\" >\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-6 col-lg-6\">\n        <div class=\"container-fluid\" style=\"background-color:white; padding-top: 1rem; border-radius: 20px; border: 1px solid;\">\n        <div class=\"form_main\">\n          <h4 class=\"heading\"><strong>Input</strong> for alignment <span></span></h4>\n          <div class=\"form\">\n            <form (ngSubmit)=\"onSubmit()\" #nwalgoForm=\"ngForm\">\n\n              <label>String 1</label>\n              <input class=\"txt\" type=\"text\" style=\"text-transform:uppercase\" name=\"Stringone\"  [(ngModel)]=\" stringOne\" placeholder=\"String 1 (i.e CCATGTA)\" required>\n              <label>String 2</label>\n              <input class=\"txt\" type=\"text\" style=\"text-transform:uppercase\" name=\"Stringtwo\" [(ngModel)]=\" stringTwo\" placeholder=\"String 2 (i.e CAATGAA)\" required>\n              <label>Match Score</label>\n              <input class=\"txt\"id=\"match\" type=\"number\"  min=\"1\" name=\"match\" pattern= \"[0-9]+\" [(ngModel)]=\"match\" placeholder=\"match\" required>\n              <label>Mismatch Score</label>\n              <input class=\"txt\"type=\"number\" name=\"mismatch\" max=\"0\" [(ngModel)]=\"mismatch\" placeholder=\"mismatch\" required>\n              <label>Gap Penalty</label>\n              <input class=\"txt\"type=\"number\" max=\"0\" name= \"gap\" [(ngModel)]=\"gap\" placeholder=\"gap\" required>\n              <input class=\"txt2\" type=\"submit\" [disabled]=\"!nwalgoForm.form.valid\" [value]=\"btnText\" [disabled]= \"alignStop\"\n                     (click)=\"onSubmit();showGrid()\" >\n            </form>\n          </div>\n        </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div *ngIf=\"submitted\" class=\"container\">\n    <table>\n      <tr>\n        <td> String 1    : {{stringOne}}</td>\n        <td>  String 2    : {{stringTwo}}</td>\n        <td>  Match Score     : {{match}}</td>\n        <td>  Mismatch Score    : {{mismatch}}</td>\n        <td> Gap Penalty     : {{gap}}</td>\n      </tr>\n    </table>\n  </div>\n\n<!--<div *ngIf=\"!submitted\" class=\"example-container container-fluid\">\n  <div class=\"col-lg-12\">\n<form (ngSubmit)=\"onSubmit()\" #swalgoForm=\"ngForm\">\n  <div class=\"form-group row\">\n    <div class=\"col-lg-4\">\n      <label>String 1</label>\n    </div>\n    <div class=\"col-lg-4\">\n      <input type=\"text\" style=\"text-transform:uppercase\" name=\"Stringone\" [(ngModel)]=\" stringOne\" placeholder=\"String 1 (i.e CCATGTA)\" required>\n    </div>\n    <br>\n\n  </div>\n\n  <div class=\"form-group row\">\n    <div class=\"col-lg-4\">\n      <label>String 2</label>\n    </div>\n    <div class=\"col-lg-4\">\n      <input type=\"text\" style=\"text-transform:uppercase\" name=\"Stringtwo\" [(ngModel)]=\" stringTwo\" placeholder=\"String 2 (i.e CAATGAA)\" required>\n    </div>\n    <br>\n  </div>\n\n  <div class=\"form-group row\">\n    <div class=\"col-lg-4\">\n      <label>Match Score</label>\n    </div>\n    <div class=\"col-lg-4\">\n      <input type=\"number\"  name=\"a\" ng-pattern= \"/^[0-9]+$/\" [(ngModel)]=\"match\" placeholder=\"match\" min=\"0\" required>\n    </div>\n    <br>\n  </div>\n\n  <div class=\"form-group row\">\n    <div class=\"col-lg-4\">\n      <label>Mismatch Score</label>\n    </div>\n    <div class=\"col-lg-4\">\n      <input type=\"number\" name=\"b\" [(ngModel)]=\"mismatch\" placeholder=\"mismatch\" max=\"0\" required>\n    </div>\n    <br>\n  </div>\n\n  <div class=\"form-group row\">\n    <div class=\"col-lg-4\">\n      <label>Gap Penalty</label>\n    </div>\n    <div class=\"col-lg-4\">\n      <input type=\"number\" name=\"c\" [(ngModel)]=\"gap\" max=\"0\"placeholder=\"gap\" required>\n    </div>\n    <br>\n  </div>\n\n  <input type=\"submit\" class=\"btn btn-success\" [disabled]=\"!swalgoForm.form.valid\" class=\"btn\" [value]=\"btnText\" [disabled]= \"alignStop\"\n         (click)=\"showGrid()\">\n\n</form>\n  </div>\n</div>\n\n<div class=\"col-lg-12\">\n<div *ngIf=\"submitted\">\n  <h4>Simulation for following:</h4>\n  <div class=\"row\">\n    <div class=\"col-lg-4\">String 1    : </div>\n    <div class=\"col-lg-4\">{{stringOne}}</div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-lg-4\">String 2    : </div>\n    <div class=\"col-lg-4\">{{stringTwo}}</div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-lg-4\">Match Score     : </div>\n    <div class=\"col-lg-4\">{{match}}</div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-lg-4\">Mismatch Score    : </div>\n    <div class=\"col-lg-4\">{{mismatch}}</div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-lg-4\">Gap Penalty     : </div>\n    <div class=\"col-lg-4\">{{gap}}</div>\n  </div>\n\n</div>\n</div>\n-->\n"

/***/ }),

/***/ "../../../../../src/app/components/swalgo/sw-form/sw-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SwFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_sharing_service__ = __webpack_require__("../../../../../src/app/services/sharing.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_swalgo_service__ = __webpack_require__("../../../../../src/app/services/swalgo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sweetalert2__ = __webpack_require__("../../../../sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_sweetalert2__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SwFormComponent = /** @class */ (function () {
    function SwFormComponent(sharingService, swalgoService) {
        this.sharingService = sharingService;
        this.swalgoService = swalgoService;
        this.btnText = 'Align';
        this.submitted = false;
    }
    SwFormComponent.prototype.ngOnInit = function () {
        this.submitted = false;
    };
    SwFormComponent.prototype.onSubmit = function () {
        this.submitted = true;
    };
    // This method is called when the align button clicks
    SwFormComponent.prototype.showGrid = function () {
        var _this = this;
        this.showLoading();
        this.stringOne = this.stringOne.toUpperCase();
        this.stringTwo = this.stringTwo.toUpperCase();
        this.match = this.match;
        this.mismatch = this.mismatch;
        this.gap = this.gap;
        setTimeout(function () {
            _this._get();
        }, 3000);
        this.alignStop = true;
        this.onSubmit();
    };
    // call the service
    SwFormComponent.prototype._get = function () {
        var _this = this;
        this.swalgoService._get(this.stringOne, this.stringTwo, this.match, this.mismatch, this.gap).subscribe(function (data) {
            _this.dataArray = data;
            _this.sharingService.setData(_this.dataArray, _this.stringOne, _this.stringTwo, _this.match, _this.mismatch, _this.gap);
            _this.sharingService.setVisibility(true);
            _this.closeLoading();
            console.log(_this.dataArray);
        });
    };
    // waiting alert on
    SwFormComponent.prototype.showLoading = function () {
        __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default()({
            title: 'Please Wait!',
            text: 'Your request is processing',
            onOpen: function () {
                __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default.a.showLoading();
            }
        });
    };
    // waiting alert off
    SwFormComponent.prototype.closeLoading = function () {
        __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default.a.close();
    };
    SwFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sw-form',
            template: __webpack_require__("../../../../../src/app/components/swalgo/sw-form/sw-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/swalgo/sw-form/sw-form.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_swalgo_service__["a" /* SwalgoService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_sharing_service__["a" /* SharingService */],
            __WEBPACK_IMPORTED_MODULE_2__services_swalgo_service__["a" /* SwalgoService */]])
    ], SwFormComponent);
    return SwFormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/swalgo/sw-grid/sw-grid.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h2 {\n  font-weight: bold;\n  color: black;\n\n}\n\nh3 {\n  font-weight: bold;\n  color: white;\n\n}\n\n.btn {\n  background: #242424 none repeat scroll 0 0;\n  border: 1px solid #4f5c04;\n  border-radius: 25px;\n  color: #fff;\n  font-size: 12px;\n  font-style: normal;\n  line-height: 35px;\n  margin: 10px 0;\n  padding: 0;\n  text-transform: uppercase;\n  width: 26%;\n}\n\n.btn:hover {\n  opacity: 0.6;\n}\n\n.example-container {\n  border-radius: 5px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  background: white;\n\n}\n\n.example-container > * {\n  width: 100%;\n\n}\n\nmat-grid-tile {\n  background: white;\n}\n\ntable, td {\n  border: 1px solid black;\n  min-width: 30px;\n  height: 30px;\n}\n\n.highlight {\n  background-color: lightpink;\n}\n\n.highlight2 {\n  background-color: lightskyblue;\n}\n\n.highlight3 {\n  background-color: lightgreen;\n}\n\n.diagonal{\n  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKwAAAA5CAYAAACrmsAoAAAACXBIWXMAAAsTAAALEwEAmpwYAAAKT2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4AUkSYqIQkQSoghodkVUcERRUUEG8igiAOOjoCMFVEsDIoK2AfkIaKOg6OIisr74Xuja9a89+bN/rXXPues852zzwfACAyWSDNRNYAMqUIeEeCDx8TG4eQuQIEKJHAAEAizZCFz/SMBAPh+PDwrIsAHvgABeNMLCADATZvAMByH/w/qQplcAYCEAcB0kThLCIAUAEB6jkKmAEBGAYCdmCZTAKAEAGDLY2LjAFAtAGAnf+bTAICd+Jl7AQBblCEVAaCRACATZYhEAGg7AKzPVopFAFgwABRmS8Q5ANgtADBJV2ZIALC3AMDOEAuyAAgMADBRiIUpAAR7AGDIIyN4AISZABRG8lc88SuuEOcqAAB4mbI8uSQ5RYFbCC1xB1dXLh4ozkkXKxQ2YQJhmkAuwnmZGTKBNA/g88wAAKCRFRHgg/P9eM4Ors7ONo62Dl8t6r8G/yJiYuP+5c+rcEAAAOF0ftH+LC+zGoA7BoBt/qIl7gRoXgugdfeLZrIPQLUAoOnaV/Nw+H48PEWhkLnZ2eXk5NhKxEJbYcpXff5nwl/AV/1s+X48/Pf14L7iJIEyXYFHBPjgwsz0TKUcz5IJhGLc5o9H/LcL//wd0yLESWK5WCoU41EScY5EmozzMqUiiUKSKcUl0v9k4t8s+wM+3zUAsGo+AXuRLahdYwP2SycQWHTA4vcAAPK7b8HUKAgDgGiD4c93/+8//UegJQCAZkmScQAAXkQkLlTKsz/HCAAARKCBKrBBG/TBGCzABhzBBdzBC/xgNoRCJMTCQhBCCmSAHHJgKayCQiiGzbAdKmAv1EAdNMBRaIaTcA4uwlW4Dj1wD/phCJ7BKLyBCQRByAgTYSHaiAFiilgjjggXmYX4IcFIBBKLJCDJiBRRIkuRNUgxUopUIFVIHfI9cgI5h1xGupE7yAAygvyGvEcxlIGyUT3UDLVDuag3GoRGogvQZHQxmo8WoJvQcrQaPYw2oefQq2gP2o8+Q8cwwOgYBzPEbDAuxsNCsTgsCZNjy7EirAyrxhqwVqwDu4n1Y8+xdwQSgUXACTYEd0IgYR5BSFhMWE7YSKggHCQ0EdoJNwkDhFHCJyKTqEu0JroR+cQYYjIxh1hILCPWEo8TLxB7iEPENyQSiUMyJ7mQAkmxpFTSEtJG0m5SI+ksqZs0SBojk8naZGuyBzmULCAryIXkneTD5DPkG+Qh8lsKnWJAcaT4U+IoUspqShnlEOU05QZlmDJBVaOaUt2ooVQRNY9aQq2htlKvUYeoEzR1mjnNgxZJS6WtopXTGmgXaPdpr+h0uhHdlR5Ol9BX0svpR+iX6AP0dwwNhhWDx4hnKBmbGAcYZxl3GK+YTKYZ04sZx1QwNzHrmOeZD5lvVVgqtip8FZHKCpVKlSaVGyovVKmqpqreqgtV81XLVI+pXlN9rkZVM1PjqQnUlqtVqp1Q61MbU2epO6iHqmeob1Q/pH5Z/YkGWcNMw09DpFGgsV/jvMYgC2MZs3gsIWsNq4Z1gTXEJrHN2Xx2KruY/R27iz2qqaE5QzNKM1ezUvOUZj8H45hx+Jx0TgnnKKeX836K3hTvKeIpG6Y0TLkxZVxrqpaXllirSKtRq0frvTau7aedpr1Fu1n7gQ5Bx0onXCdHZ4/OBZ3nU9lT3acKpxZNPTr1ri6qa6UbobtEd79up+6Ynr5egJ5Mb6feeb3n+hx9L/1U/W36p/VHDFgGswwkBtsMzhg8xTVxbzwdL8fb8VFDXcNAQ6VhlWGX4YSRudE8o9VGjUYPjGnGXOMk423GbcajJgYmISZLTepN7ppSTbmmKaY7TDtMx83MzaLN1pk1mz0x1zLnm+eb15vft2BaeFostqi2uGVJsuRaplnutrxuhVo5WaVYVVpds0atna0l1rutu6cRp7lOk06rntZnw7Dxtsm2qbcZsOXYBtuutm22fWFnYhdnt8Wuw+6TvZN9un2N/T0HDYfZDqsdWh1+c7RyFDpWOt6azpzuP33F9JbpL2dYzxDP2DPjthPLKcRpnVOb00dnF2e5c4PziIuJS4LLLpc+Lpsbxt3IveRKdPVxXeF60vWdm7Obwu2o26/uNu5p7ofcn8w0nymeWTNz0MPIQ+BR5dE/C5+VMGvfrH5PQ0+BZ7XnIy9jL5FXrdewt6V3qvdh7xc+9j5yn+M+4zw33jLeWV/MN8C3yLfLT8Nvnl+F30N/I/9k/3r/0QCngCUBZwOJgUGBWwL7+Hp8Ib+OPzrbZfay2e1BjKC5QRVBj4KtguXBrSFoyOyQrSH355jOkc5pDoVQfujW0Adh5mGLw34MJ4WHhVeGP45wiFga0TGXNXfR3ENz30T6RJZE3ptnMU85ry1KNSo+qi5qPNo3ujS6P8YuZlnM1VidWElsSxw5LiquNm5svt/87fOH4p3iC+N7F5gvyF1weaHOwvSFpxapLhIsOpZATIhOOJTwQRAqqBaMJfITdyWOCnnCHcJnIi/RNtGI2ENcKh5O8kgqTXqS7JG8NXkkxTOlLOW5hCepkLxMDUzdmzqeFpp2IG0yPTq9MYOSkZBxQqohTZO2Z+pn5mZ2y6xlhbL+xW6Lty8elQfJa7OQrAVZLQq2QqboVFoo1yoHsmdlV2a/zYnKOZarnivN7cyzytuQN5zvn//tEsIS4ZK2pYZLVy0dWOa9rGo5sjxxedsK4xUFK4ZWBqw8uIq2Km3VT6vtV5eufr0mek1rgV7ByoLBtQFr6wtVCuWFfevc1+1dT1gvWd+1YfqGnRs+FYmKrhTbF5cVf9go3HjlG4dvyr+Z3JS0qavEuWTPZtJm6ebeLZ5bDpaql+aXDm4N2dq0Dd9WtO319kXbL5fNKNu7g7ZDuaO/PLi8ZafJzs07P1SkVPRU+lQ27tLdtWHX+G7R7ht7vPY07NXbW7z3/T7JvttVAVVN1WbVZftJ+7P3P66Jqun4lvttXa1ObXHtxwPSA/0HIw6217nU1R3SPVRSj9Yr60cOxx++/p3vdy0NNg1VjZzG4iNwRHnk6fcJ3/ceDTradox7rOEH0x92HWcdL2pCmvKaRptTmvtbYlu6T8w+0dbq3nr8R9sfD5w0PFl5SvNUyWna6YLTk2fyz4ydlZ19fi753GDborZ752PO32oPb++6EHTh0kX/i+c7vDvOXPK4dPKy2+UTV7hXmq86X23qdOo8/pPTT8e7nLuarrlca7nuer21e2b36RueN87d9L158Rb/1tWeOT3dvfN6b/fF9/XfFt1+cif9zsu72Xcn7q28T7xf9EDtQdlD3YfVP1v+3Njv3H9qwHeg89HcR/cGhYPP/pH1jw9DBY+Zj8uGDYbrnjg+OTniP3L96fynQ89kzyaeF/6i/suuFxYvfvjV69fO0ZjRoZfyl5O/bXyl/erA6xmv28bCxh6+yXgzMV70VvvtwXfcdx3vo98PT+R8IH8o/2j5sfVT0Kf7kxmTk/8EA5jz/GMzLdsAAAAgY0hSTQAAeiUAAICDAAD5/wAAgOkAAHUwAADqYAAAOpgAABdvkl/FRgAAAUpJREFUeNrs2T1KHVEYgOH3iCSd4DpcTvoUFhauQLQJiJA2u0ljYaMbsAwI6g5SJCHFWHgvDJJo550LzwNTTffxMnN+xjRNwbbYMQK2MtgxxvSf5/cY43aM8X2McWRkbNLuK++malQfq4PqV3VtZCxxSbCOdb3Avaw+VbdGxtKCncc6qqvqsLo3LpYW7MtYq26qB6NiicG+jHWqTqrzN9a78O7B/plFe1V9nYV7Vn0zLpYU7I/ZButzdVpdzL60x9WekbFJ89/8Y89HV/MN1pdqfxXrXfXTyNiksb6aXV0KXPfvo6sPq6/sX1e5LCJY2MZTAhAsCBbBgmBBsAgWBAuCRbAgWBAsggXBgmARrBEgWBAsCBbBgmBBsAgWBAuCRbAgWBAsggXBgmARLAgWBItgQbAgWAQLggXBIlgQLAgWwcL7ewIAAP//AwBCVTiWdjWMNQAAAABJRU5ErkJggg==');\n}\n\n.up{\n  background-image: url('data:image/png;base64,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');\n}\n\n.side{\n  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKwAAAA5CAYAAACrmsAoAAAACXBIWXMAAAsTAAALEwEAmpwYAAAKT2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4AUkSYqIQkQSoghodkVUcERRUUEG8igiAOOjoCMFVEsDIoK2AfkIaKOg6OIisr74Xuja9a89+bN/rXXPues852zzwfACAyWSDNRNYAMqUIeEeCDx8TG4eQuQIEKJHAAEAizZCFz/SMBAPh+PDwrIsAHvgABeNMLCADATZvAMByH/w/qQplcAYCEAcB0kThLCIAUAEB6jkKmAEBGAYCdmCZTAKAEAGDLY2LjAFAtAGAnf+bTAICd+Jl7AQBblCEVAaCRACATZYhEAGg7AKzPVopFAFgwABRmS8Q5ANgtADBJV2ZIALC3AMDOEAuyAAgMADBRiIUpAAR7AGDIIyN4AISZABRG8lc88SuuEOcqAAB4mbI8uSQ5RYFbCC1xB1dXLh4ozkkXKxQ2YQJhmkAuwnmZGTKBNA/g88wAAKCRFRHgg/P9eM4Ors7ONo62Dl8t6r8G/yJiYuP+5c+rcEAAAOF0ftH+LC+zGoA7BoBt/qIl7gRoXgugdfeLZrIPQLUAoOnaV/Nw+H48PEWhkLnZ2eXk5NhKxEJbYcpXff5nwl/AV/1s+X48/Pf14L7iJIEyXYFHBPjgwsz0TKUcz5IJhGLc5o9H/LcL//wd0yLESWK5WCoU41EScY5EmozzMqUiiUKSKcUl0v9k4t8s+wM+3zUAsGo+AXuRLahdYwP2SycQWHTA4vcAAPK7b8HUKAgDgGiD4c93/+8//UegJQCAZkmScQAAXkQkLlTKsz/HCAAARKCBKrBBG/TBGCzABhzBBdzBC/xgNoRCJMTCQhBCCmSAHHJgKayCQiiGzbAdKmAv1EAdNMBRaIaTcA4uwlW4Dj1wD/phCJ7BKLyBCQRByAgTYSHaiAFiilgjjggXmYX4IcFIBBKLJCDJiBRRIkuRNUgxUopUIFVIHfI9cgI5h1xGupE7yAAygvyGvEcxlIGyUT3UDLVDuag3GoRGogvQZHQxmo8WoJvQcrQaPYw2oefQq2gP2o8+Q8cwwOgYBzPEbDAuxsNCsTgsCZNjy7EirAyrxhqwVqwDu4n1Y8+xdwQSgUXACTYEd0IgYR5BSFhMWE7YSKggHCQ0EdoJNwkDhFHCJyKTqEu0JroR+cQYYjIxh1hILCPWEo8TLxB7iEPENyQSiUMyJ7mQAkmxpFTSEtJG0m5SI+ksqZs0SBojk8naZGuyBzmULCAryIXkneTD5DPkG+Qh8lsKnWJAcaT4U+IoUspqShnlEOU05QZlmDJBVaOaUt2ooVQRNY9aQq2htlKvUYeoEzR1mjnNgxZJS6WtopXTGmgXaPdpr+h0uhHdlR5Ol9BX0svpR+iX6AP0dwwNhhWDx4hnKBmbGAcYZxl3GK+YTKYZ04sZx1QwNzHrmOeZD5lvVVgqtip8FZHKCpVKlSaVGyovVKmqpqreqgtV81XLVI+pXlN9rkZVM1PjqQnUlqtVqp1Q61MbU2epO6iHqmeob1Q/pH5Z/YkGWcNMw09DpFGgsV/jvMYgC2MZs3gsIWsNq4Z1gTXEJrHN2Xx2KruY/R27iz2qqaE5QzNKM1ezUvOUZj8H45hx+Jx0TgnnKKeX836K3hTvKeIpG6Y0TLkxZVxrqpaXllirSKtRq0frvTau7aedpr1Fu1n7gQ5Bx0onXCdHZ4/OBZ3nU9lT3acKpxZNPTr1ri6qa6UbobtEd79up+6Ynr5egJ5Mb6feeb3n+hx9L/1U/W36p/VHDFgGswwkBtsMzhg8xTVxbzwdL8fb8VFDXcNAQ6VhlWGX4YSRudE8o9VGjUYPjGnGXOMk423GbcajJgYmISZLTepN7ppSTbmmKaY7TDtMx83MzaLN1pk1mz0x1zLnm+eb15vft2BaeFostqi2uGVJsuRaplnutrxuhVo5WaVYVVpds0atna0l1rutu6cRp7lOk06rntZnw7Dxtsm2qbcZsOXYBtuutm22fWFnYhdnt8Wuw+6TvZN9un2N/T0HDYfZDqsdWh1+c7RyFDpWOt6azpzuP33F9JbpL2dYzxDP2DPjthPLKcRpnVOb00dnF2e5c4PziIuJS4LLLpc+Lpsbxt3IveRKdPVxXeF60vWdm7Obwu2o26/uNu5p7ofcn8w0nymeWTNz0MPIQ+BR5dE/C5+VMGvfrH5PQ0+BZ7XnIy9jL5FXrdewt6V3qvdh7xc+9j5yn+M+4zw33jLeWV/MN8C3yLfLT8Nvnl+F30N/I/9k/3r/0QCngCUBZwOJgUGBWwL7+Hp8Ib+OPzrbZfay2e1BjKC5QRVBj4KtguXBrSFoyOyQrSH355jOkc5pDoVQfujW0Adh5mGLw34MJ4WHhVeGP45wiFga0TGXNXfR3ENz30T6RJZE3ptnMU85ry1KNSo+qi5qPNo3ujS6P8YuZlnM1VidWElsSxw5LiquNm5svt/87fOH4p3iC+N7F5gvyF1weaHOwvSFpxapLhIsOpZATIhOOJTwQRAqqBaMJfITdyWOCnnCHcJnIi/RNtGI2ENcKh5O8kgqTXqS7JG8NXkkxTOlLOW5hCepkLxMDUzdmzqeFpp2IG0yPTq9MYOSkZBxQqohTZO2Z+pn5mZ2y6xlhbL+xW6Lty8elQfJa7OQrAVZLQq2QqboVFoo1yoHsmdlV2a/zYnKOZarnivN7cyzytuQN5zvn//tEsIS4ZK2pYZLVy0dWOa9rGo5sjxxedsK4xUFK4ZWBqw8uIq2Km3VT6vtV5eufr0mek1rgV7ByoLBtQFr6wtVCuWFfevc1+1dT1gvWd+1YfqGnRs+FYmKrhTbF5cVf9go3HjlG4dvyr+Z3JS0qavEuWTPZtJm6ebeLZ5bDpaql+aXDm4N2dq0Dd9WtO319kXbL5fNKNu7g7ZDuaO/PLi8ZafJzs07P1SkVPRU+lQ27tLdtWHX+G7R7ht7vPY07NXbW7z3/T7JvttVAVVN1WbVZftJ+7P3P66Jqun4lvttXa1ObXHtxwPSA/0HIw6217nU1R3SPVRSj9Yr60cOxx++/p3vdy0NNg1VjZzG4iNwRHnk6fcJ3/ceDTradox7rOEH0x92HWcdL2pCmvKaRptTmvtbYlu6T8w+0dbq3nr8R9sfD5w0PFl5SvNUyWna6YLTk2fyz4ydlZ19fi753GDborZ752PO32oPb++6EHTh0kX/i+c7vDvOXPK4dPKy2+UTV7hXmq86X23qdOo8/pPTT8e7nLuarrlca7nuer21e2b36RueN87d9L158Rb/1tWeOT3dvfN6b/fF9/XfFt1+cif9zsu72Xcn7q28T7xf9EDtQdlD3YfVP1v+3Njv3H9qwHeg89HcR/cGhYPP/pH1jw9DBY+Zj8uGDYbrnjg+OTniP3L96fynQ89kzyaeF/6i/suuFxYvfvjV69fO0ZjRoZfyl5O/bXyl/erA6xmv28bCxh6+yXgzMV70VvvtwXfcdx3vo98PT+R8IH8o/2j5sfVT0Kf7kxmTk/8EA5jz/GMzLdsAAAAgY0hSTQAAeiUAAICDAAD5/wAAgOkAAHUwAADqYAAAOpgAABdvkl/FRgAAAWlJREFUeNrs3LGKE1EYgNFvVMQFLRZ9AXsL950MFsK+gqX9voSPY29nrbCou4iiXJsJhrBBq80VzoEwYTLT/HwMl5uQZYwR/C/uGAGCBcGCYBEsCBYEi2BBsCBYBAuCBcEiWBAsCBbBgmBBsAgWjhPssiyHXmf752DWJ+x59dqomMG9v3z+pnqxhn1SfTMyZg32otpUD6rr6qFgmXVJcFG9XGPdOq3uGhmzBbuN9f7ek3hUj6uneyHDrVl2/6poWZabYm2N9Wv1a418jDFOjY9jB/uxevIvN44x7G1x9CXB2+rHgWu/VJfV5/UIR98lOF+P+8uC79WznXMfjI4Zgj0U7c/qUfV+fQ/TBLsb7WZnR+BKrMwa7Dba6/580/XJuJhtl+CmazbVq+r53i6B6TFlsFVn1TvBMlWwMDs/4EawIFgQLIIFwYJgESwIFgSLYEGwIFgEC4IFwSJYECwIFsHC7fkNAAD//wMAiMdBYOJtTHkAAAAASUVORK5CYII=');\n}\n\n.diagonal_side{\n  background-image: url('data:image/png;base64,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');\n}\n\n.diagonal_up{\n  background-image: url('data:image/png;base64,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');\n}\n\n.side_up{\n  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKwAAAA5CAYAAACrmsAoAAAACXBIWXMAAAsTAAALEwEAmpwYAAAKT2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4AUkSYqIQkQSoghodkVUcERRUUEG8igiAOOjoCMFVEsDIoK2AfkIaKOg6OIisr74Xuja9a89+bN/rXXPues852zzwfACAyWSDNRNYAMqUIeEeCDx8TG4eQuQIEKJHAAEAizZCFz/SMBAPh+PDwrIsAHvgABeNMLCADATZvAMByH/w/qQplcAYCEAcB0kThLCIAUAEB6jkKmAEBGAYCdmCZTAKAEAGDLY2LjAFAtAGAnf+bTAICd+Jl7AQBblCEVAaCRACATZYhEAGg7AKzPVopFAFgwABRmS8Q5ANgtADBJV2ZIALC3AMDOEAuyAAgMADBRiIUpAAR7AGDIIyN4AISZABRG8lc88SuuEOcqAAB4mbI8uSQ5RYFbCC1xB1dXLh4ozkkXKxQ2YQJhmkAuwnmZGTKBNA/g88wAAKCRFRHgg/P9eM4Ors7ONo62Dl8t6r8G/yJiYuP+5c+rcEAAAOF0ftH+LC+zGoA7BoBt/qIl7gRoXgugdfeLZrIPQLUAoOnaV/Nw+H48PEWhkLnZ2eXk5NhKxEJbYcpXff5nwl/AV/1s+X48/Pf14L7iJIEyXYFHBPjgwsz0TKUcz5IJhGLc5o9H/LcL//wd0yLESWK5WCoU41EScY5EmozzMqUiiUKSKcUl0v9k4t8s+wM+3zUAsGo+AXuRLahdYwP2SycQWHTA4vcAAPK7b8HUKAgDgGiD4c93/+8//UegJQCAZkmScQAAXkQkLlTKsz/HCAAARKCBKrBBG/TBGCzABhzBBdzBC/xgNoRCJMTCQhBCCmSAHHJgKayCQiiGzbAdKmAv1EAdNMBRaIaTcA4uwlW4Dj1wD/phCJ7BKLyBCQRByAgTYSHaiAFiilgjjggXmYX4IcFIBBKLJCDJiBRRIkuRNUgxUopUIFVIHfI9cgI5h1xGupE7yAAygvyGvEcxlIGyUT3UDLVDuag3GoRGogvQZHQxmo8WoJvQcrQaPYw2oefQq2gP2o8+Q8cwwOgYBzPEbDAuxsNCsTgsCZNjy7EirAyrxhqwVqwDu4n1Y8+xdwQSgUXACTYEd0IgYR5BSFhMWE7YSKggHCQ0EdoJNwkDhFHCJyKTqEu0JroR+cQYYjIxh1hILCPWEo8TLxB7iEPENyQSiUMyJ7mQAkmxpFTSEtJG0m5SI+ksqZs0SBojk8naZGuyBzmULCAryIXkneTD5DPkG+Qh8lsKnWJAcaT4U+IoUspqShnlEOU05QZlmDJBVaOaUt2ooVQRNY9aQq2htlKvUYeoEzR1mjnNgxZJS6WtopXTGmgXaPdpr+h0uhHdlR5Ol9BX0svpR+iX6AP0dwwNhhWDx4hnKBmbGAcYZxl3GK+YTKYZ04sZx1QwNzHrmOeZD5lvVVgqtip8FZHKCpVKlSaVGyovVKmqpqreqgtV81XLVI+pXlN9rkZVM1PjqQnUlqtVqp1Q61MbU2epO6iHqmeob1Q/pH5Z/YkGWcNMw09DpFGgsV/jvMYgC2MZs3gsIWsNq4Z1gTXEJrHN2Xx2KruY/R27iz2qqaE5QzNKM1ezUvOUZj8H45hx+Jx0TgnnKKeX836K3hTvKeIpG6Y0TLkxZVxrqpaXllirSKtRq0frvTau7aedpr1Fu1n7gQ5Bx0onXCdHZ4/OBZ3nU9lT3acKpxZNPTr1ri6qa6UbobtEd79up+6Ynr5egJ5Mb6feeb3n+hx9L/1U/W36p/VHDFgGswwkBtsMzhg8xTVxbzwdL8fb8VFDXcNAQ6VhlWGX4YSRudE8o9VGjUYPjGnGXOMk423GbcajJgYmISZLTepN7ppSTbmmKaY7TDtMx83MzaLN1pk1mz0x1zLnm+eb15vft2BaeFostqi2uGVJsuRaplnutrxuhVo5WaVYVVpds0atna0l1rutu6cRp7lOk06rntZnw7Dxtsm2qbcZsOXYBtuutm22fWFnYhdnt8Wuw+6TvZN9un2N/T0HDYfZDqsdWh1+c7RyFDpWOt6azpzuP33F9JbpL2dYzxDP2DPjthPLKcRpnVOb00dnF2e5c4PziIuJS4LLLpc+Lpsbxt3IveRKdPVxXeF60vWdm7Obwu2o26/uNu5p7ofcn8w0nymeWTNz0MPIQ+BR5dE/C5+VMGvfrH5PQ0+BZ7XnIy9jL5FXrdewt6V3qvdh7xc+9j5yn+M+4zw33jLeWV/MN8C3yLfLT8Nvnl+F30N/I/9k/3r/0QCngCUBZwOJgUGBWwL7+Hp8Ib+OPzrbZfay2e1BjKC5QRVBj4KtguXBrSFoyOyQrSH355jOkc5pDoVQfujW0Adh5mGLw34MJ4WHhVeGP45wiFga0TGXNXfR3ENz30T6RJZE3ptnMU85ry1KNSo+qi5qPNo3ujS6P8YuZlnM1VidWElsSxw5LiquNm5svt/87fOH4p3iC+N7F5gvyF1weaHOwvSFpxapLhIsOpZATIhOOJTwQRAqqBaMJfITdyWOCnnCHcJnIi/RNtGI2ENcKh5O8kgqTXqS7JG8NXkkxTOlLOW5hCepkLxMDUzdmzqeFpp2IG0yPTq9MYOSkZBxQqohTZO2Z+pn5mZ2y6xlhbL+xW6Lty8elQfJa7OQrAVZLQq2QqboVFoo1yoHsmdlV2a/zYnKOZarnivN7cyzytuQN5zvn//tEsIS4ZK2pYZLVy0dWOa9rGo5sjxxedsK4xUFK4ZWBqw8uIq2Km3VT6vtV5eufr0mek1rgV7ByoLBtQFr6wtVCuWFfevc1+1dT1gvWd+1YfqGnRs+FYmKrhTbF5cVf9go3HjlG4dvyr+Z3JS0qavEuWTPZtJm6ebeLZ5bDpaql+aXDm4N2dq0Dd9WtO319kXbL5fNKNu7g7ZDuaO/PLi8ZafJzs07P1SkVPRU+lQ27tLdtWHX+G7R7ht7vPY07NXbW7z3/T7JvttVAVVN1WbVZftJ+7P3P66Jqun4lvttXa1ObXHtxwPSA/0HIw6217nU1R3SPVRSj9Yr60cOxx++/p3vdy0NNg1VjZzG4iNwRHnk6fcJ3/ceDTradox7rOEH0x92HWcdL2pCmvKaRptTmvtbYlu6T8w+0dbq3nr8R9sfD5w0PFl5SvNUyWna6YLTk2fyz4ydlZ19fi753GDborZ752PO32oPb++6EHTh0kX/i+c7vDvOXPK4dPKy2+UTV7hXmq86X23qdOo8/pPTT8e7nLuarrlca7nuer21e2b36RueN87d9L158Rb/1tWeOT3dvfN6b/fF9/XfFt1+cif9zsu72Xcn7q28T7xf9EDtQdlD3YfVP1v+3Njv3H9qwHeg89HcR/cGhYPP/pH1jw9DBY+Zj8uGDYbrnjg+OTniP3L96fynQ89kzyaeF/6i/suuFxYvfvjV69fO0ZjRoZfyl5O/bXyl/erA6xmv28bCxh6+yXgzMV70VvvtwXfcdx3vo98PT+R8IH8o/2j5sfVT0Kf7kxmTk/8EA5jz/GMzLdsAAAAgY0hSTQAAeiUAAICDAAD5/wAAgOkAAHUwAADqYAAAOpgAABdvkl/FRgAAAj9JREFUeNrs3L9OFFEYQPEzIzGroonR3thTaGJh7bM4sTDhFSzpeQkfwJews7Gig4ZCjQFBg+46FvebeLPZZWdxRu4m55eQhZ0/kMnJMNy5Q9W2LdKmqD0E2iRb3SdVVY39vZ4D75ct9Eyvks6w+8C7eJX+/Qw7cqyvgJvxCrDroVeJZ9g8VrJoPdOquGDnY8VoVWqwe0CzINY82ibWkwYL9irXuA3wEpisWG8S63k9q8GCna65v6fA69jveXxcZMvb+LpbVgMvYjtppaob/+wxDnsP+BbRrXIbeAhsxzYfY/tT4BlQAV+BM+AHOA6rfvr+yq8jrL5VfQeOYv+PgFm8PwNOgC/Ze9Lgf3T9Bn5dYf/Tue9TA3eMVaWNEuQOI/juGvbYw67/cQ07Kq9hVcoZVjJYGaxksJLBymAv4W1TbUywu8AbD5NKcdmt2T3SbKoauEXc85dKDHafNE1wQppVtW2wKvWSoHtSIJ/Peh+44eFSacEueqxlizQH4AHwmNUTs6XR5HMJlj2D1ZLmtM4i8DbOuINyLoHWDfYTadJ1r+0MVtd9SfAW+LlkvVPSEwIn8Spd+yhB9zDg/GXBBbCTvXfoYVMJwS6LdgrcBQ5Y/6FEadRg82ibbETgzFhVarBdtOf8vdP12UOl0kYJFi1vSP9n4MnYP4ijBBoiWEiztT4YrIoKVtoETuCWwUoGKxmsDFYyWMlgZbCSwUoGK4OVDFYyWBmsZLCSwcpgJYOVDFYGKxmstNAfAAAA//8DAC8SfdkDqlMPAAAAAElFTkSuQmCC');\n}\n\n.diagonal_side_up{\n  background-image: url('data:image/png;base64,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');\n}\n\n.borderless td {\n  border: none;\n  min-width: 30px;\n}\n\n.borderless th {\n  min-width: 60px;\n  border: none;\n}\n\n.gridblock::-webkit-scrollbar {\n/ / FIX scrollbars on Mac -webkit-appearance: none;\n  width: 7px;\n  height: 7px;\n}\n\n.gridblock::-webkit-scrollbar-thumb {\n  border-radius: 4px;\n  background-color: rgba(0, 0, 0, .5);\n  -webkit-box-shadow: 0 0 1px rgba(255, 255, 255, .5);\n          box-shadow: 0 0 1px rgba(255, 255, 255, .5);\n}\n\n.txt[type=\"number\"] {\n  border: 1px solid #ccc;\n  margin: 10px 0;\n  padding: 10px 0 10px 5px;\n  width: 30%;\n}\n\n/*.container{\n  display: grid;\n  grid-template-columns: 50% auto;\n\n}\n\n.col{\n  padding: .4cm 1.3cm;\n}\n\n.color-dark{\n  background:darkslategray;\n  border-radius: 10px;\n  -moz-border-radius: 10px;\n  -webkit-border-radius: 10px;\n  padding: 4px 9px 0px 1px;\n  box-shadow: 6px 6px 5px #444;\n  -moz-box-shadow: 6px 6px 5px #444;\n  -webkit-box-shadow: 6px 6px 5px #444;\n}\n\n.color-light{\n  background: lightgrey;\n  border-radius: 10px;\n  -moz-border-radius: 10px;\n  -webkit-border-radius: 10px;\n  padding: 4px 9px 0px 1px;\n  box-shadow: 6px 6px 5px #444;\n  -moz-box-shadow: 6px 6px 5px #444;\n  -webkit-box-shadow: 6px 6px 5px #444;\n}\n\n\n.life-container{\n  background: #3fa0e1;\n  padding: .5cm;\n  font-weight: bold;\n  cursor:pointer;\n}\nh2{\n  font-weight: bold;\n  color: black;\n\n}\nh3{\n  font-weight: bold;\n  color: white;\n\n}\n\n.btn {\n  border-radius:5px;\n  background-color:darkslategray;\n  color:white; padding:10px 10px;\n  margin:8px 0; border:none; cursor: pointer;\n  width:22%;\n\n}\n\n.btn:hover{opacity:0.6;}\n.example-container {\n  border-radius:5px;\n  display: flex;\n  flex-direction: column;\n  background: white;\n\n}\n\n.example-container > * {\n  width: 100%;\n\n}\nmat-grid-tile {\n  background: white;\n}\n\ntable, td {\n  border: 1px solid black;\n  width: 30px;\n  height: 30px;\n}\n\n.highlight{\n  background-color: lightpink;\n}\n\n.highlight2{\n  background-color: lightgoldenrodyellow;\n}\n.highlight3{\n  background-color: lightgreen;\n}\n\n.borderless td, .borderless th {\n  border: none;\n}*/\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/swalgo/sw-grid/sw-grid.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-lg-7\">\n    <div class=\"card mb-3\">\n      <div class=\"card-header\">\n        <i class=\"\"></i> Dynamic Matrix\n      </div>\n      <div class=\"card-body\">\n        <div id=\"myBarChart\" width=\"100\" height=\"50\">\n          <!--Inputs-->\n          <div class=\"row\">\n            <div class=\"col-md-4\">\n              <span> String 1    : {{stringOne}}</span>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-4\">\n              <span>  String 2    : {{stringTwo}}</span>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-4\">\n              Match Score : {{match}}\n            </div>\n            <div class=\"col-md-4\">\n              Mismatch Score : {{mismatch}}\n            </div>\n            <div class=\"col-md-4\">\n              Gap Penalty : {{gap}}\n            </div>\n          </div>\n\n          <!--Current step display-->\n          Current Step : {{nextDataArrayIndex}}\n\n          <!--Field to request a step-->\n          <input class=\"txt\" id=\"request\" type=\"number\" max={{max}} min=\"0\" name=\"request\" [(ngModel)]=\"requestedStep\"\n                 placeholder=\"Request a step\">\n          <input class=\"btn\" type=\"submit\" [disabled]=\"request\" [value]=\"reqBtn\" (click)=\"goToRequest()\">\n\n          <div clas=\"gridblock\" style=\"overflow:auto; height: 500px;  width: 100%;\">\n            <!--Grid-->\n            <table class=\"table table-bordered\" cellspacing=\"10\">\n              <tr *ngFor=\"let rowArray of gridArray\">\n                <td *ngFor=\"let colData of rowArray\"\n                    [ngClass]='{diagonal : (colData.diag_img), up : (colData.up_img),side : (colData.side_img),\n                 diagonal_side:(colData.diag_side_img), diagonal_up:(colData.diag_up_img), side_up:(colData.side_up_img),diagonal_side_up:(colData.diag_side_up_img)\n                 ,highlight : (colData.color), highlight2 : (colData.datacolor), highlight3 : (colData.refcolor)}'>\n                  {{colData.cellvalue}}\n\n                </td>\n              </tr>\n            </table>\n          </div>\n\n        </div>\n\n        <!--Final output-->\n        <div *ngIf=\"final\"  clas=\"gridblock\" style=\"overflow:auto; height: 200px;  width: 100%;\">\n          <table class=\"table borderless\" cellspacing=\"10\">\n            <tr>\n              <td>S1:</td>\n              <td *ngFor=\"let char of resSeq1Array\">{{char}}</td>\n            </tr>\n            <tr>\n              <td>S2:</td>\n              <td *ngFor=\"let char2 of resSeq2Array\">{{char2}}</td>\n            </tr>\n          </table>\n\n        </div>\n      </div>\n\n      <div class=\"card-footer small text-muted\"></div>\n    </div>\n  </div>\n\n  <div class=\"col-lg-5\">\n    <div class=\"card mb-3\">\n      <div class=\"card-header\">\n        <i class=\"\"></i> Navigate Buttons\n      </div>\n      <div class=\"card-body\">\n        <div id=\"myPieChart\" width=\"100%\" height=\"100\">\n          <!--Control Buttons-->\n\n          <br>\n          <!--<input type=\"submit\" class=\"btn\" [value]=\"reloadBtn\" (click)=\"goBack()\">-->\n          <br>\n          <input type=\"submit\" class=\"btn\" [value]=\"clearBtn\" (click)=\"clearall()\">\n          <input type=\"submit\" class=\"btn\" [value]=\"backBtn\" [disabled]=\"noback\" (click)=\"previousStep()\">\n          <input type=\"submit\" class=\"btn\" [value]=\"stepBtn\" [disabled]=\"stepStop\" (click)=\"nextStep()\">\n          <input type=\"submit\" class=\"btn\" [value]=\"finalBtn\" [disabled]=\"finalStop\" (click)=\"finalResult()\">\n\n          <!--Value Calculation-->\n          <div *ngIf=\"!noback\">\n            <table class=\"table borderless\" cellspacing=\"10\" syle=\" overflow:auto; width:100%\">\n              <tr>\n                <th>Score From Above Cell</th>\n                <td>Score of Cell({{dataArray[nextDataArrayIndex-1].row + 1}}, {{dataArray[nextDataArrayIndex-1].col +\n                  2}})+gap\n                </td>\n                <td>{{dataArray[nextDataArrayIndex-1].upScore}}</td>\n              </tr>\n              <tr>\n                <th>Score From Left Cell</th>\n                <td>Score of Cell({{dataArray[nextDataArrayIndex-1].row + 2}}, {{dataArray[nextDataArrayIndex-1].col +\n                  1}})+gap\n                </td>\n                <td>{{dataArray[nextDataArrayIndex-1].leftScore}}</td>\n              </tr>\n              <tr>\n                <th>Score From Diagonal Cell</th>\n                <td><span>Score of Cell({{dataArray[nextDataArrayIndex-1].row + 1}}, {{dataArray[nextDataArrayIndex-1].col +\n                  1}})</span>\n                  <span>+match/mismatch</span>\n                </td>\n                <td>{{dataArray[nextDataArrayIndex-1].diagonalScore}}</td>\n              </tr>\n              <tr>\n                <th>Max Score</th>\n                <td>Score of Cell({{dataArray[nextDataArrayIndex-1].row + 2}}, {{dataArray[nextDataArrayIndex-1].col + 2}})</td>\n                <td>{{dataArray[nextDataArrayIndex-1].score}}</td>\n              </tr>\n            </table>\n            <span style=\"color:red\">{{note}}</span>\n          </div>\n\n        </div>\n      </div>\n      <div class=\"card-footer small text-muted\"></div>\n    </div>\n\n\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/swalgo/sw-grid/sw-grid.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SwGridComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_sharing_service__ = __webpack_require__("../../../../../src/app/services/sharing.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_cell__ = __webpack_require__("../../../../../src/app/models/cell.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sweetalert2__ = __webpack_require__("../../../../sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_sweetalert2__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SwGridComponent = /** @class */ (function () {
    function SwGridComponent(sharingService) {
        this.sharingService = sharingService;
        this.stepBtn = 'Next Step';
        this.backBtn = 'Previous Step';
        this.finalBtn = 'Final Alignment';
        this.clearBtn = 'Clear Grid';
        this.reloadBtn = 'Go Back';
        this.reqBtn = 'Request';
        this.stepStop = false;
        this.finalStop = false;
        this.noback = true;
        this.String1array = [];
        this.String2array = [];
        this.StringOffsetArray = ['D(0,0)', ''];
        this.colCount = 0;
        this.rowCount = 0;
        this.nextRowIndex = 2;
        this.nextColIndex = 2;
        this.resSeq1Array = [];
        this.resSeq2Array = [];
        this.nextDataArrayIndex = 0;
        this.match = '';
        this.mismatch = '';
        this.gap = '';
        this.note = 'Note: If all three scores (score from the above cell, score from the left cell and score from the diagonal cell) are negative,' +
            'then the cell value will be 0';
    }
    SwGridComponent.prototype.ngOnInit = function () {
        this.createGridArray();
    };
    SwGridComponent.prototype.createGridArray = function () {
        this.String1array = [];
        this.String2array = [];
        this.StringOffsetArray = ['', ''];
        this.colCount = 0;
        this.rowCount = 0;
        this.nextRowIndex = 2;
        this.nextColIndex = 2;
        this.resSeq1Array = [];
        this.resSeq2Array = [];
        this.nextDataArrayIndex = 0;
        this.noback = true;
        this.stepStop = false;
        this.dataArray = this.sharingService.getData();
        this.stringOne = this.sharingService.getStringOne();
        this.stringTwo = this.sharingService.getStringTwo();
        this.match = this.sharingService.getMatch();
        this.mismatch = this.sharingService.getMismatch();
        this.gap = this.sharingService.getGap();
        this.String1array = this.StringOffsetArray.concat(this.stringOne.split('', this.stringOne.length));
        this.String2array = this.StringOffsetArray.concat(this.stringTwo.split('', this.stringTwo.length));
        this.columns = this.stringOne.length + 2;
        this.rowCount = this.stringTwo.length + 2;
        this.colCount = this.stringOne.length + 2;
        this.request = false;
        this.max = this.stringOne.length * this.stringTwo.length;
        console.log('come to create grid array');
        this.gridArray = [];
        for (var r = 0; r < this.rowCount; r++) {
            this.gridArray[r] = [];
            for (var co = 0; co < this.colCount; co++) {
                if ((co === 0 && r === 0) || (co === 0 && r === 1) || (co === 1 && r === 0)) {
                    this.gridArray[r][co] = new __WEBPACK_IMPORTED_MODULE_2__models_cell__["a" /* Cell */]();
                    continue;
                }
                this.gridArray[r][co] = new __WEBPACK_IMPORTED_MODULE_2__models_cell__["a" /* Cell */]();
            }
        }
        this.gridArray[0][0].cellvalue = this.String1array[0];
        for (var co = 2; co < this.colCount; co++) {
            this.gridArray[0][co].cellvalue = this.String1array[co];
        }
        for (var r = 2; r < this.rowCount; r++) {
            this.gridArray[r][0].cellvalue = this.String2array[r];
        }
        this.gridArray[0][0].cellvalue = 'D(1,1)';
        this.gridArray[1][1].cellvalue = '0';
        for (var cp = 2; cp < this.colCount; cp++) {
            this.gridArray[1][cp].cellvalue = (parseInt('0', 10) * (cp - 1)).toString();
        }
        for (var rp = 2; rp < this.rowCount; rp++) {
            this.gridArray[rp][1].cellvalue = (parseInt('0', 10) * (rp - 1)).toString();
        }
        console.log('created grid');
    };
    // next step button function
    SwGridComponent.prototype.nextStep = function () {
        this.noback = false;
        console.log('next step ' + this.nextDataArrayIndex + 'next row ' + this.nextRowIndex + 'next col ' + this.nextColIndex);
        // reset exisiting colors
        this.resetColor();
        this.resetBackgrounds();
        // update the next step values,colors
        if (this.dataArray[this.nextDataArrayIndex].preRow != null) {
            this.updateMatrix(this.nextRowIndex, this.nextColIndex, this.dataArray[this.nextDataArrayIndex].score, this.dataArray[this.nextDataArrayIndex].preRow + 1, this.dataArray[this.nextDataArrayIndex].preCol + 1);
        }
        else {
            this.updateMatrixWithoutpre(this.nextRowIndex, this.nextColIndex, this.dataArray[this.nextDataArrayIndex].score);
        }
        this.nextDataArrayIndex += 1;
        this.selectImage(this.gridArray[this.nextRowIndex][this.nextColIndex]);
        if (this.nextColIndex + 1 < this.colCount) {
            this.nextColIndex += 1;
        }
        else {
            this.nextColIndex = 2;
            this.nextRowIndex += 1;
        }
        if (this.nextDataArrayIndex === this.stringOne.length * this.stringTwo.length) {
            console.log('Next step came to final');
            this.stepStop = true;
        }
    };
    // functionality of the previous step
    SwGridComponent.prototype.previousStep = function () {
        this.resetBackgrounds();
        this.stepStop = false;
        this.nextDataArrayIndex -= 1;
        if (this.nextDataArrayIndex < 1) {
            this.noback = true;
        }
        if (this.nextColIndex - 1 < 2) {
            this.nextColIndex = this.colCount - 1;
            this.nextRowIndex -= 1;
        }
        else {
            this.nextColIndex -= 1;
        }
        console.log('previous step ' + this.nextDataArrayIndex + 'next row ' + this.nextRowIndex + 'next col ' + this.nextColIndex);
        if (this.dataArray[this.nextDataArrayIndex].preRow != null) {
            this.undoMatrix(this.nextRowIndex, this.nextColIndex, '', this.dataArray[this.nextDataArrayIndex].preRow + 1, this.dataArray[this.nextDataArrayIndex].preCol + 1);
        }
        else {
            this.undoMatrixWithoutpre(this.nextRowIndex, this.nextColIndex, '');
        }
    };
    // undo a step which has a pre. ref. cell
    SwGridComponent.prototype.undoMatrix = function (row, col, val, prerow, precol) {
        console.log('update matrix');
        this.gridArray[row][col].cellvalue = val;
        this.gridArray[0][col].color = false;
        this.gridArray[row][0].color = false;
        this.gridArray[row][col].datacolor = false;
        this.gridArray[prerow][precol].refcolor = false;
        if (this.nextDataArrayIndex > 0) {
            var point = void 0;
            point = this.dataArray[this.nextDataArrayIndex - 1];
            this.gridArray[0][point.col + 1].color = true;
            this.gridArray[point.row + 1][0].color = true;
            this.gridArray[point.row + 1][point.col + 1].datacolor = true;
            if (point.preRow != null) {
                this.gridArray[point.preRow + 1][point.preCol + 1].refcolor = true;
            }
            this.selectImage(this.gridArray[point.row + 1][point.col + 1]);
        }
    };
    // undo the step which do not have a pre. ref. cell
    SwGridComponent.prototype.undoMatrixWithoutpre = function (row, col, val) {
        console.log('update matrix');
        this.gridArray[row][col].cellvalue = val;
        this.gridArray[0][col].color = false;
        this.gridArray[row][0].color = false;
        this.gridArray[row][col].datacolor = false;
        if (this.nextDataArrayIndex > 0) {
            var point = void 0;
            point = this.dataArray[this.nextDataArrayIndex - 1];
            this.gridArray[0][point.col + 1].color = true;
            this.gridArray[point.row + 1][0].color = true;
            this.gridArray[point.row + 1][point.col + 1].datacolor = true;
            if (point.preRow != null) {
                this.gridArray[point.preRow + 1][point.preCol + 1].refcolor = true;
            }
            this.selectImage(this.gridArray[point.row + 1][point.col + 1]);
        }
    };
    // reset colors of cells
    SwGridComponent.prototype.resetColor = function () {
        console.log('reset colors');
        for (var _i = 0, _a = this.gridArray; _i < _a.length; _i++) {
            var row = _a[_i];
            for (var _b = 0, row_1 = row; _b < row_1.length; _b++) {
                var col = row_1[_b];
                col.color = false;
                col.datacolor = false;
                col.refcolor = false;
            }
        }
    };
    // reset backgrounds
    SwGridComponent.prototype.resetBackgrounds = function () {
        for (var _i = 0, _a = this.gridArray; _i < _a.length; _i++) {
            var row = _a[_i];
            for (var _b = 0, row_2 = row; _b < row_2.length; _b++) {
                var col = row_2[_b];
                col.diag_img = false;
                col.side_img = false;
                col.up_img = false;
                col.diag_side_img = false;
                col.diag_up_img = false;
                col.side_up_img = false;
                col.diag_side_up_img = false;
            }
        }
    };
    // update the next step values,colors wich have precell
    SwGridComponent.prototype.updateMatrix = function (row, col, val, prerow, precol) {
        this.gridArray[row][col].cellvalue = val;
        this.gridArray[0][col].color = true;
        this.gridArray[row][0].color = true;
        this.gridArray[row][col].datacolor = true;
        this.gridArray[prerow][precol].refcolor = true;
    };
    // update the next step values,colors which do not have a pre cell
    SwGridComponent.prototype.updateMatrixWithoutpre = function (row, col, val) {
        this.gridArray[row][col].cellvalue = val;
        this.gridArray[0][col].color = true;
        this.gridArray[row][0].color = true;
        this.gridArray[row][col].datacolor = true;
    };
    // final button's function
    SwGridComponent.prototype.finalResult = function () {
        this.nextDataArrayIndex = this.stringOne.length * this.stringTwo.length;
        this.nextRowIndex = this.stringTwo.length + 2;
        this.nextColIndex = this.stringOne.length + 2;
        this.request = true;
        this.stepStop = true;
        this.noback = true;
        this.resetColor();
        this.resetBackgrounds();
        this.fillin();
        for (var x = this.stringOne.length * this.stringTwo.length; x < this.dataArray.length - 1; x++) {
            this.colorTraceback(x);
        }
        this.final = true;
        this.resSeq1 = this.dataArray[this.dataArray.length - 1].sequence1;
        this.resSeq2 = this.dataArray[this.dataArray.length - 1].sequence2;
        this.resSeq1Array = this.resSeq1.split('', this.resSeq1.length);
        this.resSeq2Array = this.resSeq2.split('', this.resSeq2.length);
        console.log(this.resSeq1);
        console.log(this.resSeq2);
    };
    // fill all values in the grid
    SwGridComponent.prototype.fillin = function () {
        var count = 0;
        console.log(this.String1array.length);
        console.log(this.String2array.length);
        for (var i = 2; i < this.String2array.length; i++) {
            for (var j = 2; j < this.String1array.length; j++) {
                this.gridArray[i][j].cellvalue = this.dataArray[count].score;
                console.log(count + ' ' + i + ' ' + j);
                console.log('Score:' + this.dataArray[count].score);
                count += 1;
            }
        }
    };
    // color cells related to final simulation
    SwGridComponent.prototype.colorTraceback = function (x) {
        this.gridArray[this.dataArray[x].row + 1][this.dataArray[x].col + 1].datacolor = true;
    };
    // clear grid
    SwGridComponent.prototype.clearall = function () {
        this.ngOnInit();
    };
    // reload the form for new alignment
    SwGridComponent.prototype.goBack = function () {
        location.reload();
    };
    // go to the requested step
    SwGridComponent.prototype.goToRequest = function () {
        var req = this.requestedStep;
        var current = this.nextDataArrayIndex;
        // show errors for minus values
        if (req < 0) {
            this.showMinusError();
        }
        else if (req > this.stringOne.length * this.stringTwo.length) {
            this.showExcessRequestError();
        }
        else if (req > current) {
            for (var i = 0; i < req - current; i++) {
                this.nextStep();
            }
        }
        else if (req < current) {
            for (var i = 0; i < current - req; i++) {
                this.previousStep();
            }
        }
    };
    // select image
    SwGridComponent.prototype.selectImage = function (cell) {
        var upScore = this.dataArray[this.nextDataArrayIndex - 1].upScore;
        var leftScore = this.dataArray[this.nextDataArrayIndex - 1].leftScore;
        var diagonalScore = this.dataArray[this.nextDataArrayIndex - 1].diagonalScore;
        var max = this.dataArray[this.nextDataArrayIndex - 1].score;
        if (max === upScore && max === leftScore && max === diagonalScore) {
            cell.diag_side_up_img = true;
        }
        else if (max === upScore && max === diagonalScore) {
            cell.diag_up_img = true;
        }
        else if (max === leftScore && max === diagonalScore) {
            cell.diag_side_img = true;
        }
        else if (max === upScore && max === leftScore) {
            cell.side_up_img = true;
        }
        else if (max === upScore) {
            cell.up_img = true;
        }
        else if (max === leftScore) {
            cell.side_img = true;
        }
        else if (max === diagonalScore) {
            cell.diag_img = true;
        }
    };
    // show error alert for requesting minus step
    SwGridComponent.prototype.showMinusError = function () {
        __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default()({
            type: 'error',
            title: 'Error...',
            text: 'Please request a non-negative step',
        });
    };
    // show error alert for requesting step exceeding the number of steps
    SwGridComponent.prototype.showExcessRequestError = function () {
        __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default()({
            type: 'error',
            title: 'Error...',
            text: 'Please request a step equal or less than '.concat((this.stringOne.length * this.stringTwo.length).toString()),
        });
    };
    SwGridComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sw-grid',
            template: __webpack_require__("../../../../../src/app/components/swalgo/sw-grid/sw-grid.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/swalgo/sw-grid/sw-grid.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_sharing_service__["a" /* SharingService */]])
    ], SwGridComponent);
    return SwGridComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/swalgo/swalgo.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/swalgo/swalgo.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\n<div align=\"center\"><h2>{{title|uppercase}}</h2></div>\n<br>\n\n<div class=\"container color-light\">\n\n        <app-sw-form ></app-sw-form>\n\n  <div >\n    <!--<mat-spinner align=\"center\" [style.display]=\" showSpinner ?'block':'none'\"></mat-spinner>-->\n\n    <app-sw-grid *ngIf=\"sharingService.getVisibility()\" ></app-sw-grid>\n  </div>\n\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/swalgo/swalgo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SwalgoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_sharing_service__ = __webpack_require__("../../../../../src/app/services/sharing.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SwalgoComponent = /** @class */ (function () {
    function SwalgoComponent(sharingService) {
        this.sharingService = sharingService;
        this.title = 'smith-waterman';
        this.showSpinner = false;
    }
    SwalgoComponent.prototype.ngOnInit = function () {
        this.sharingService.setVisibility(false);
    };
    SwalgoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-swalgo',
            template: __webpack_require__("../../../../../src/app/components/swalgo/swalgo.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/swalgo/swalgo.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_sharing_service__["a" /* SharingService */]])
    ], SwalgoComponent);
    return SwalgoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/tcoffee/tcoffee-chart/tcoffee-chart.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/tcoffee/tcoffee-chart/tcoffee-chart.component.html":
/***/ (function(module, exports) {

module.exports = "\n<br>\n<!--chart-->\n<div style=\"background: white;\">\n\n    <canvas id=\"myAreaChart\" width=\"100%\" height=\"30\" baseChart\n            [datasets]=\"barChartData\"\n            [labels]=\"barChartLabels\"\n            [options]=\"barChartOptions\"\n            [legend]=\"barChartLegend\"\n            [chartType]=\"barChartType\"\n            (chartHover)=\"chartHovered($event)\"\n            (chartClick)=\"chartClicked($event)\"></canvas>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/tcoffee/tcoffee-chart/tcoffee-chart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TcoffeeChartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_msa_sharing_service__ = __webpack_require__("../../../../../src/app/services/msa-sharing.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TcoffeeChartComponent = /** @class */ (function () {
    function TcoffeeChartComponent(msasharingService) {
        this.msasharingService = msasharingService;
        // characteristics of the chart
        this.barChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true
        };
        this.barChartLabels = this.msasharingService.getIdArray();
        this.barChartType = 'horizontalBar';
        this.barChartLegend = true;
        this.barChartData = [
            { data: this.msasharingService.getChartData(), label: 'No of aligned characters' }
        ];
    }
    TcoffeeChartComponent.prototype.ngOnInit = function () {
    };
    // events
    TcoffeeChartComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    TcoffeeChartComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    TcoffeeChartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-tcoffee-chart',
            template: __webpack_require__("../../../../../src/app/components/tcoffee/tcoffee-chart/tcoffee-chart.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/tcoffee/tcoffee-chart/tcoffee-chart.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_msa_sharing_service__["a" /* MsaSharingService */]])
    ], TcoffeeChartComponent);
    return TcoffeeChartComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/tcoffee/tcoffee-menu/tcoffee-menu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".link{\n  cursor:pointer;\n  color:blue;\n  text-decoration: underline;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/tcoffee/tcoffee-menu/tcoffee-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<!--menu-->\n<br>\n\n  <div class=\"col-lg-6\">\n\n    <label id=\"lbl\">Fasta File :</label>\n    <input type='file' (change)=\"fileChanged($event)\">\n\n    <button type=\"button\" class=\"btn btn-primary\"\n            (click)=\"uploadDocument(file);\">Upload File\n    </button>\n\n    <button mat-fab color=\"primary\" (click)=\"showHelpBox()\">Help</button>\n\n  </div>\n\n <!-- <div class=\"col-lg-6\">\n\n    <div class='link' onclick=\"this.showSample()\">Use the sample code</div>\n    <div class=\"row\" id=\"textarea\" *ngIf=\"true\">\n      <div class=\"col-lg-6\">\n      <textarea  rows=\"4\" cols=\"50\" style=\"overflow: auto\" readonly>\n        >seq1\n        ABCDEFGHIJ\n        >seq2\n        MKNLHJBYGH\n        >seq3\n        ASEFTGVCFD\n      </textarea>\n      </div>\n      <div class=\"col-lg-6\">\n        <button type=\"button\" class=\"btn btn-primary\"\n                (click)=\"upload()\">Submit\n        </button>\n        <div>\n\n\n        </div>\n\n\n      </div>-->\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/tcoffee/tcoffee-menu/tcoffee-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TcoffeeMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_msa_sharing_service__ = __webpack_require__("../../../../../src/app/services/msa-sharing.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_tcoffee_service__ = __webpack_require__("../../../../../src/app/services/tcoffee.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sweetalert2__ = __webpack_require__("../../../../sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_sweetalert2__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TcoffeeMenuComponent = /** @class */ (function () {
    function TcoffeeMenuComponent(tcoffeeService, msasharingService) {
        this.tcoffeeService = tcoffeeService;
        this.msasharingService = msasharingService;
        this.message = '';
        this.isSample = false;
        this.sampleCode = ['>seq1', 'ABCDEFGHIJ', '>seq2', 'MKNLHJBYGH', '>seq3', 'ASEFTGVCFD'];
    }
    TcoffeeMenuComponent.prototype.ngOnInit = function () {
    };
    // choose a file
    TcoffeeMenuComponent.prototype.fileChanged = function (e) {
        this.file = e.target.files[0];
        console.log(this.file);
    };
    // upload the file and read
    TcoffeeMenuComponent.prototype.uploadDocument = function (file) {
        var _this = this;
        this.showLoading();
        this.msasharingService.setVisibility(false);
        var fileReader = new FileReader();
        fileReader.readAsText(this.file);
        fileReader.onload = function (e) {
            // read inputs line by line
            _this.dataArray = fileReader.result.split('\n');
            // generate gene array from data
            _this.geneArray = _this.tcoffeeService.getGeneArray(_this.dataArray);
            // set data need to be shown on pannel
            _this.msasharingService.setPanelData(_this.geneArray);
            // set data need to be shown in chart
            _this.chartDataArray = _this.tcoffeeService.alignedCharCount(_this.geneArray);
            _this.msasharingService.setChartData(_this.chartDataArray);
            // if the input file is in correct format
            if (!(_this.msasharingService.getPanelData().length === 1 && _this.msasharingService.getPanelData()[0].id === '')) {
                // this.closeLoading();
                _this.msasharingService.setVisibility(true);
            }
            else {
                _this.closeLoading();
                _this.showError();
            }
        };
    };
    TcoffeeMenuComponent.prototype.showSample = function () {
        this.isSample = true;
    };
    /* upload() {
       this.msasharingService.setVisibility(false);
       this.showLoading();
       this.dataArray = this.sampleCode;
       // generate gene array from data
       this.geneArray = this.tcoffeeService.getGeneArray(this.dataArray);
       // set data need to be shown on pannel
       this.msasharingService.setPanelData(this.geneArray);
       // set data need to be shown in chart
       this.chartDataArray = this.tcoffeeService.alignedCharCount(this.geneArray);
       this.msasharingService.setChartData(this.chartDataArray);
       // if the input file is in correct format
       if (!(this.msasharingService.getPanelData().length === 1 && this.msasharingService.getPanelData()[0].id === '')) {
         // this.closeLoading();
         this.msasharingService.setVisibility(true);
   
       } else {
         this.closeLoading();
         this.showError();
       }
   
     }*/
    // waiting alert on
    TcoffeeMenuComponent.prototype.showLoading = function () {
        __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default()({
            title: 'Please Wait!',
            text: 'your request is processing',
            onOpen: function () {
                __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default.a.showLoading();
            }
        });
    };
    // waiting alert close
    TcoffeeMenuComponent.prototype.closeLoading = function () {
        __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default.a.close();
    };
    // Show error when uploaded file is not in fasta format
    TcoffeeMenuComponent.prototype.showError = function () {
        __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default()({
            type: 'error',
            title: 'Error...',
            text: 'Uploaded file is not in FASTA format!',
        });
    };
    // show instructions
    TcoffeeMenuComponent.prototype.showHelpBox = function () {
        __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default()({
            title: '<i>Help</i>',
            type: 'info',
            html: 'Choose a <b>Fasta file</b> which contains aligned sequences using T-Coffee algorithm.' + '<br>' +
                'Then click <b>Upload File button</b> to see the simulation.' + '<br>' +
                'If you do not have such file' + '<br>' +
                'Visit :<a href="http://tcoffee.crg.cat/apps/tcoffee/index.html">T-Coffee Server</a> ' + '<br>' +
                'to align sequences and generate a fasta file',
            showCloseButton: true,
            showCancelButton: true,
            focusConfirm: false,
            confirmButtonText: '<i class="fa fa-thumbs-up"></i> Great!',
            confirmButtonAriaLabel: 'Thumbs up, great!',
            cancelButtonText: '<i class="fa fa-thumbs-down"></i>',
            cancelButtonAriaLabel: 'Thumbs down',
        });
    };
    TcoffeeMenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-tcoffee-menu',
            template: __webpack_require__("../../../../../src/app/components/tcoffee/tcoffee-menu/tcoffee-menu.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/tcoffee/tcoffee-menu/tcoffee-menu.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_tcoffee_service__["a" /* TcoffeeService */],
            __WEBPACK_IMPORTED_MODULE_1__services_msa_sharing_service__["a" /* MsaSharingService */]])
    ], TcoffeeMenuComponent);
    return TcoffeeMenuComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/tcoffee/tcoffee-panel/tcoffee-panel.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".timeline-shell {\n  overflow-x: auto;\n}\n\n.timeline-header {\n  position: sticky;\n  position: -webkit-sticky;\n  top: 0;\n  height: 50px;\n  z-index: 1;\n}\n\n.timeline-header .header-blank,\n.timeline-header .header-item {\n  float: left;\n  height: 50px;\n  /*border-bottom: 1px solid #BEBEBE;\n  border-right: 1px solid #BEBEBE;*/\n  background: white;\n  font-size: 11px;\n}\n\n.timeline-header .header-blank {\n  position: sticky;\n  position: -webkit-sticky;\n  top: 0;\n  left: 0;\n  width: 100px;\n  z-index: 2;\n}\n\n.timeline-header .header-item {\n  width: 20px;\n}\n\n.header-item .item-label {\n  text-align: center;\n}\n\n.header-item .item-sublabel {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.header-item .item-sublabel .sublabel-value {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  text-align: center;\n}\n\n.timeline-body .body-details-cell,\n.timeline-body .body-graph-cell {\n  float: left;\n  height: 20px;\n  /* border-bottom: 1px solid #bebebe;\n   border-right: 1px solid #bebebe;*/\n  background: white;\n  text-align: center;\n\n}\n\n.timeline-body .body-details-cell {\n  position: -webkit-sticky;\n  position: sticky;\n  left: 0;\n  width: 100px;\n}\n\n.timeline-body .body-graph-cell {\n  width: 20px;\n}\n\ndiv.a {\n  white-space: nowrap;\n  width: 100px;\n  overflow: hidden;\n  text-overflow:ellipsis;\n\n}\n\ndiv.a:hover {\n  overflow: visible;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/tcoffee/tcoffee-panel/tcoffee-panel.component.html":
/***/ (function(module, exports) {

module.exports = "<label id=\"lb2\">Color Scheme :</label>\n<select  class=\"btn btn-primary\" [(ngModel)]=\"scheme\">\n  <option *ngFor=\"let x of colorSchemes\" [value]=\"x.name\" [selected]=\"scheme == x.name\">{{x.name}}</option>\n</select>\n<div style=\"display: block; background: white \">\n\n<div style=\"display: block; background: white \">\n<!--panel header-->\n<div class=\"timeline-shell\" style=\"width: 1340px;height: 300px;\" >\n  <div class=\"timeline-header\" [style.width.px]=\"width\" >\n    <span class=\"header-blank\"></span>\n\n    <span class=\"header-item\" *ngFor=\"let col of this.getMaxSequenceLength();let j=index;let e=even;let o=odd;\">\n      <div class=\"item-label\" *ngIf=\"e\">{{j+1}}</div>\n      <div class=\"item-label\" *ngIf=\"o\">.</div>\n    </span>\n\n  </div>\n  <!--panel body-->\n  <div class=\"timeline-body\" style=\" height: 150px;\" [style.width.px]=\"width\">\n    <div class=\"body-item\" *ngFor=\"let gene of geneArray\">\n      <span class=\"body-details-cell\">\n        <div class=\"detail-title\" class=\"a\">{{gene.id}}</div>\n      </span>\n      <span *ngFor=\"let char of gene.sequence.split('');let i=index;\">\n      <span class=\"body-graph-cell first-graph-cell\" *ngIf=\"i==0\" [style.background-color]=\"getColor(char)\">{{char}}</span>\n      <span class=\"body-graph-cell\" *ngIf=\"i!=0\" [style.background-color]=\"getColor(char)\">{{char}}</span>\n      </span>\n    </div>\n  </div>\n</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/tcoffee/tcoffee-panel/tcoffee-panel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TcoffeePanelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_msa_sharing_service__ = __webpack_require__("../../../../../src/app/services/msa-sharing.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_colorscheme__ = __webpack_require__("../../../../../src/app/models/colorscheme.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sweetalert2__ = __webpack_require__("../../../../sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_sweetalert2__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TcoffeePanelComponent = /** @class */ (function () {
    function TcoffeePanelComponent(msasharingService) {
        this.msasharingService = msasharingService;
        this.scheme = 'ClustalW';
        this.colorSchemes = __WEBPACK_IMPORTED_MODULE_2__models_colorscheme__["a" /* SCHEMES */];
    }
    TcoffeePanelComponent.prototype.ngOnInit = function () {
        this.geneArray = this.msasharingService.getPanelData();
        __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default.a.close();
    };
    // get the maximum length sequence
    TcoffeePanelComponent.prototype.getMaxSequenceLength = function () {
        for (var _i = 0, _a = this.colorSchemes; _i < _a.length; _i++) {
            var x = _a[_i];
            if (x.name === this.scheme) {
                this.obj = x;
                this.colorArray = x.colors;
                console.log(this.colorArray);
            }
        }
        for (var _b = 0, _c = this.colorSchemes; _b < _c.length; _b++) {
            var x = _c[_b];
            if (x.name === this.scheme) {
                this.obj = x;
            }
        }
        this.maxlength = 0;
        var max = [];
        for (var i in this.geneArray) {
            if (this.maxlength < this.geneArray[i].sequence.split('').length) {
                this.maxlength = this.geneArray[i].sequence.split('').length;
                max = this.geneArray[i].sequence.split('');
            }
        }
        console.log(this.maxlength);
        this.calWidth();
        return max;
    };
    // clacluate the width of pannel
    TcoffeePanelComponent.prototype.calWidth = function () {
        this.width = 100 + 20 * this.maxlength;
    };
    // return the color of each character according to the color scheme
    TcoffeePanelComponent.prototype.getColor = function (character) {
        console.log(typeof (character));
        console.log(this.colorArray[character]);
        return this.colorArray[character];
    };
    TcoffeePanelComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-tcoffee-panel',
            template: __webpack_require__("../../../../../src/app/components/tcoffee/tcoffee-panel/tcoffee-panel.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/tcoffee/tcoffee-panel/tcoffee-panel.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_msa_sharing_service__["a" /* MsaSharingService */]])
    ], TcoffeePanelComponent);
    return TcoffeePanelComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/tcoffee/tcoffee.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/tcoffee/tcoffee.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\n<!--title-->\n<div align=\"center\"><h2>{{title|uppercase}}</h2></div>\n<!--Menu-->\n<app-tcoffee-menu></app-tcoffee-menu>\n<br>\n<!--panel-->\n<div class=\"card mb-3\" *ngIf=\"msasharingService.getVisibility()\">\n  <div class=\"card-header\">\n    <i class=\"\"></i> Aligned Sequence Simulator</div>\n  <div class=\"card-body\">\n    <app-tcoffee-panel></app-tcoffee-panel>\n  </div>\n  <div class=\"card-footer small text-muted\"></div>\n</div>\n<!--<app-tcoffee-panel *ngIf=\"msasharingService.getVisibility()\"></app-tcoffee-panel>-->\n<br>\n<!--chart-->\n<div class=\"card mb-3\" *ngIf=\"msasharingService.getVisibility()\">\n  <div class=\"card-header\">\n    <i class=\"fa fa-bar-chart\"></i> Number of Aligned Characters-Chart</div>\n  <div class=\"card-body\">\n    <app-tcoffee-chart></app-tcoffee-chart>\n  </div>\n  <div class=\"card-footer small text-muted\"></div>\n</div>\n<!--<app-tcoffee-chart *ngIf=\"msasharingService.getVisibility()\"></app-tcoffee-chart>-->\n"

/***/ }),

/***/ "../../../../../src/app/components/tcoffee/tcoffee.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TcoffeeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_msa_sharing_service__ = __webpack_require__("../../../../../src/app/services/msa-sharing.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_tcoffee_service__ = __webpack_require__("../../../../../src/app/services/tcoffee.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TcoffeeComponent = /** @class */ (function () {
    function TcoffeeComponent(msasharingService) {
        this.msasharingService = msasharingService;
        this.title = 'T-coffee';
    }
    TcoffeeComponent.prototype.ngOnInit = function () {
        this.msasharingService.setVisibility(false);
    };
    TcoffeeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-tcoffee',
            template: __webpack_require__("../../../../../src/app/components/tcoffee/tcoffee.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/tcoffee/tcoffee.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_tcoffee_service__["a" /* TcoffeeService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_msa_sharing_service__["a" /* MsaSharingService */]])
    ], TcoffeeComponent);
    return TcoffeeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatToolbarModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatInputModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatProgressSpinnerModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatGridListModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatSelectModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatPaginatorModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatTableModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatToolbarModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatInputModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatProgressSpinnerModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatGridListModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatSelectModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatPaginatorModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatTableModule */]]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "../../../../../src/app/models/cell.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Cell; });
// Cell object has 4 attributes. Cell value, color,data color nd reference color
var Cell = /** @class */ (function () {
    function Cell() {
        this.cellvalue = ' ';
        this.color = false;
        this.datacolor = false;
        this.refcolor = false;
        this.diag_img = false;
        this.up_img = false;
        this.side_img = false;
        this.diag_up_img = false;
        this.diag_side_img = false;
        this.side_up_img = false;
        this.diag_side_up_img = false;
    }
    return Cell;
}());



/***/ }),

/***/ "../../../../../src/app/models/colorscheme.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SCHEMES; });
// color schemes used in sequence coloring
var SCHEMES = [
    {
        name: 'ClustalW', colors: {
            'A': '#2E5DCB', 'B': '', 'C': '#2E5DCB', 'D': '#E817F9', 'E': '#E817F9', 'F': '#2E5DCB', 'G': '#FA9915', 'H': '#15FADB',
            I: '#2E5DCB', J: '', K: '#F92B17', L: '#2E5DCB', M: '#2E5DCB', N: '#63C318', O: '', P: '#FAFA15', Q: '#63C318',
            R: '#F92B17', S: '#63C318', T: '#63C318', U: '', V: '#2E5DCB', W: '#2E5DCB', X: '', Y: '#15FADB', Z: ''
        }
    },
    {
        name: 'Taylor', colors: {
            A: '#88FA15', B: '', C: '#FAFA15', D: '#FA2D15', E: '#FA156F', F: '#15FAA0', G: '#FA8015', H: '#1526FA',
            I: '#31FA15', J: '', K: '#842C93', L: '#31FA15', M: '#31FA15', N: '#9F33B2', O: '', P: '#F6A135', Q: '#F635AA',
            R: '#4935F6', S: '#F68135', T: '#F69B35', U: '', V: '#F68135', W: '#35CAF6', X: '', Y: '#35F6EA', Z: ''
        }
    },
    {
        name: 'Purine', colors: {
            A: '#FFC0CB', B: '', C: '#ADD8E6', D: '', E: '', F: '', G: '#FFC0CB', H: '',
            I: '', J: '', K: '', L: '', M: '', N: '', O: '', P: '', Q: '',
            R: '#FFC0CB', S: '', T: '#ADD8E6', U: '#ADD8E6', V: '', W: '', X: '', Y: '#ADD8E6', Z: ''
        }
    },
    {
        name: 'No Color', colors: {
            A: '', B: '', C: '', D: '', E: '', F: '', G: '', H: '',
            I: '', J: '', K: '', L: '', M: '', N: '', O: '', P: '', Q: '',
            R: '', S: '', T: '', U: '', V: '', W: '', X: '', Y: '', Z: ''
        }
    }
];


/***/ }),

/***/ "../../../../../src/app/models/gene.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Gene; });
var Gene = /** @class */ (function () {
    // create genes. It has two attributes Id and a sequence
    function Gene(id, sequence) {
        this.id = id;
        this.sequence = sequence;
    }
    return Gene;
}());



/***/ }),

/***/ "../../../../../src/app/services/dialign.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialignService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_gene__ = __webpack_require__("../../../../../src/app/models/gene.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DialignService = /** @class */ (function () {
    function DialignService() {
    }
    // return the geneArray which contains gene objects. Gene object has a id and a sequence
    DialignService.prototype.getGeneArray = function (dataArray) {
        this.dataArray = dataArray;
        this.geneArray = new Array();
        var counter = 0;
        var id = '';
        var sequence = '';
        var first = true;
        for (var i in this.dataArray) {
            console.log(this.dataArray[i]);
            /* if ((this.dataArray[i] === ' ')) {
              continue;
            }*/
            if (counter === 0 && this.dataArray[i].charAt(0) !== '>') {
                // console.log('This file is not in fasta format');
                break;
            }
            if (this.dataArray[i].charAt(0) === '>') {
                if (counter > 0) {
                    this.geneArray.push(new __WEBPACK_IMPORTED_MODULE_2__models_gene__["a" /* Gene */](id, sequence.trim()));
                    /**/ console.log('id:'.concat(id));
                    console.log('sequence:'.concat(sequence.trim().length.toString()));
                }
                if (first) {
                    first = false;
                }
                id = this.dataArray[i].substring(1);
                sequence = '';
            }
            else {
                sequence += this.dataArray[i];
            }
            counter += 1;
        }
        this.geneArray.push(new __WEBPACK_IMPORTED_MODULE_2__models_gene__["a" /* Gene */](id, sequence.trim()));
        console.log('id:'.concat(id));
        console.log('sequence:'.concat(sequence.trim().length.toString()));
        return this.geneArray;
    };
    // count the number of aligned characters in gene sequences
    DialignService.prototype.alignedCharCount = function (geneArray) {
        this.chartDataArray = new Array();
        for (var _i = 0, geneArray_1 = geneArray; _i < geneArray_1.length; _i++) {
            var gene = geneArray_1[_i];
            var count = 0;
            for (var i = 0; i < gene.sequence.length; i++) {
                if (65 <= gene.sequence.charCodeAt(i) && gene.sequence.charCodeAt(i) <= 90) {
                    count++;
                }
            }
            console.log(count);
            this.chartDataArray.push(count.toString());
        }
        return this.chartDataArray;
    };
    DialignService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], DialignService);
    return DialignService;
}());



/***/ }),

/***/ "../../../../../src/app/services/msa-sharing.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MsaSharingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MsaSharingService = /** @class */ (function () {
    function MsaSharingService() {
    }
    // set gene arrays to be used for pannel
    MsaSharingService.prototype.setPanelData = function (dataArray) {
        this.geneArray = dataArray;
    };
    // return gene arrays to be used for pannel
    MsaSharingService.prototype.getPanelData = function () {
        return this.geneArray;
    };
    // returns id of sequences
    MsaSharingService.prototype.getIdArray = function () {
        this.idArray = new Array();
        for (var _i = 0, _a = this.geneArray; _i < _a.length; _i++) {
            var gene = _a[_i];
            this.idArray.push(gene.id.toString());
        }
        return this.idArray;
    };
    // set visibility true/false
    MsaSharingService.prototype.setVisibility = function (visible) {
        this.visible = visible;
    };
    // return visibility
    MsaSharingService.prototype.getVisibility = function () {
        return this.visible;
    };
    // set color scheme
    MsaSharingService.prototype.setScheme = function (schemeName) {
        this.schemeName = schemeName;
    };
    // retun color scheme
    MsaSharingService.prototype.getScheme = function () {
        return this.schemeName;
    };
    // set data to be used in chart
    MsaSharingService.prototype.setChartData = function (chartData) {
        this.chartDataArray = chartData;
    };
    // return chart data
    MsaSharingService.prototype.getChartData = function () {
        return this.chartDataArray;
    };
    MsaSharingService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], MsaSharingService);
    return MsaSharingService;
}());



/***/ }),

/***/ "../../../../../src/app/services/nwalgo.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NwalgoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NwalgoService = /** @class */ (function () {
    function NwalgoService(http) {
        this.http = http;
    }
    // return grid values from backend
    NwalgoService.prototype._get = function (Stringone, Stringtwo, match, mismatch, gap) {
        return this.http.get('https://perfec.herokuapp.com/PerfectAligner/needlemanwunsch?sequence1='.concat(Stringone.toUpperCase()) +
            '&sequence2='.concat(Stringtwo.toUpperCase()) + '&match='.concat(match) + '&mismatch='.concat(mismatch) + '&gap='.concat(gap))
            .map(function (res) { return res; });
    };
    NwalgoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], NwalgoService);
    return NwalgoService;
}());



/***/ }),

/***/ "../../../../../src/app/services/sharing.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SharingService = /** @class */ (function () {
    function SharingService() {
        this.data = undefined;
    }
    // set values get from form and aligned data
    SharingService.prototype.setData = function (data, stringOne, stringTwo, match, mismatch, gap) {
        this.data = data;
        this.stringOne = stringOne;
        this.stringTwo = stringTwo;
        this.match = match;
        this.mismatch = mismatch;
        this.gap = gap;
    };
    // set the visibility of grid component
    SharingService.prototype.setVisibility = function (visible) {
        this.visible = visible;
    };
    // return visibility
    SharingService.prototype.getVisibility = function () {
        return this.visible;
    };
    // return aligned data
    SharingService.prototype.getData = function () {
        return this.data;
    };
    // return the string one
    SharingService.prototype.getStringOne = function () {
        return this.stringOne;
    };
    // return the string two
    SharingService.prototype.getStringTwo = function () {
        return this.stringTwo;
    };
    // return the match value
    SharingService.prototype.getMatch = function () {
        return this.match;
    };
    // return the mismatch value
    SharingService.prototype.getMismatch = function () {
        return this.mismatch;
    };
    // return the gap value
    SharingService.prototype.getGap = function () {
        return this.gap;
    };
    SharingService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], SharingService);
    return SharingService;
}());



/***/ }),

/***/ "../../../../../src/app/services/swalgo.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SwalgoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SwalgoService = /** @class */ (function () {
    function SwalgoService(http) {
        this.http = http;
    }
    // return the grid values from backend
    SwalgoService.prototype._get = function (Stringone, Stringtwo, match, mismatch, gap) {
        console.log('came to sw service');
        return this.http.get('https://perfec.herokuapp.com/PerfectAligner/smithwaterman?sequence1='.concat(Stringone.toUpperCase()) +
            '&sequence2='.concat(Stringtwo.toUpperCase()) + '&match='.concat(match) + '&mismatch='.concat(mismatch) + '&gap='.concat(gap))
            .map(function (res) { return res; });
    };
    SwalgoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], SwalgoService);
    return SwalgoService;
}());



/***/ }),

/***/ "../../../../../src/app/services/tcoffee.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TcoffeeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_gene__ = __webpack_require__("../../../../../src/app/models/gene.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TcoffeeService = /** @class */ (function () {
    function TcoffeeService() {
    }
    // return the geneArray which contains gene objects. Gene object has a id and a sequence
    TcoffeeService.prototype.getGeneArray = function (dataArray) {
        this.dataArray = dataArray;
        this.geneArray = new Array();
        var counter = 0;
        var id = '';
        var sequence = '';
        var first = true;
        for (var i in this.dataArray) {
            console.log(this.dataArray[i]);
            // check for fasta format
            if (counter === 0 && this.dataArray[i].charAt(0) !== '>') {
                break;
            }
            if (this.dataArray[i].charAt(0) === '>') {
                if (counter > 0) {
                    this.geneArray.push(new __WEBPACK_IMPORTED_MODULE_1__models_gene__["a" /* Gene */](id, sequence.trim()));
                    console.log('id:'.concat(id));
                    console.log('sequence:'.concat(sequence));
                }
                if (first) {
                    first = false;
                }
                id = this.dataArray[i].substring(1);
                sequence = '';
            }
            else {
                sequence += this.dataArray[i];
            }
            counter += 1;
        }
        this.geneArray.push(new __WEBPACK_IMPORTED_MODULE_1__models_gene__["a" /* Gene */](id, sequence.trim()));
        console.log('id:'.concat(id));
        console.log('sequence:'.concat(sequence));
        return this.geneArray;
    };
    // return number of aligned characters of each sequence
    TcoffeeService.prototype.alignedCharCount = function (geneArray) {
        this.chartDataArray = new Array();
        for (var _i = 0, geneArray_1 = geneArray; _i < geneArray_1.length; _i++) {
            var gene = geneArray_1[_i];
            var count = 0;
            for (var i = 0; i < gene.sequence.length; i++) {
                if (65 <= gene.sequence.charCodeAt(i) && gene.sequence.charCodeAt(i) <= 90) {
                    count++;
                }
            }
            console.log(count);
            this.chartDataArray.push(count.toString());
        }
        return this.chartDataArray;
    };
    TcoffeeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], TcoffeeService);
    return TcoffeeService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bm": "../../../../moment/locale/bm.js",
	"./bm.js": "../../../../moment/locale/bm.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-il": "../../../../moment/locale/en-il.js",
	"./en-il.js": "../../../../moment/locale/en-il.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es-us": "../../../../moment/locale/es-us.js",
	"./es-us.js": "../../../../moment/locale/es-us.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./gu": "../../../../moment/locale/gu.js",
	"./gu.js": "../../../../moment/locale/gu.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mn": "../../../../moment/locale/mn.js",
	"./mn.js": "../../../../moment/locale/mn.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./mt": "../../../../moment/locale/mt.js",
	"./mt.js": "../../../../moment/locale/mt.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./tg": "../../../../moment/locale/tg.js",
	"./tg.js": "../../../../moment/locale/tg.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./ug-cn": "../../../../moment/locale/ug-cn.js",
	"./ug-cn.js": "../../../../moment/locale/ug-cn.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map