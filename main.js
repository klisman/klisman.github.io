(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _views_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/home/home.component */ "./src/app/views/home/home.component.ts");
/* harmony import */ var _views_projetos_projetos_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/projetos/projetos.component */ "./src/app/views/projetos/projetos.component.ts");
/* harmony import */ var _views_certificados_certificados_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/certificados/certificados.component */ "./src/app/views/certificados/certificados.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', component: _views_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'certificados', component: _views_certificados_certificados_component__WEBPACK_IMPORTED_MODULE_4__["CertificadosComponent"] },
    { path: 'projetos', component: _views_projetos_projetos_component__WEBPACK_IMPORTED_MODULE_3__["ProjetosComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"grid-container\">\r\n  <div class=\"header\">\r\n    <app-navbar></app-navbar>\r\n  </div>\r\n  <div class=\"wrapper\">\r\n    <div class=\"content\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n  </div>\r\n  <div class=\"footer\">\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".grid-container {\n  display: -ms-grid;\n  display: grid;\n  height: 100%;\n      -ms-grid-columns: 1fr;\n      grid-template-columns: 1fr;\n      -ms-grid-rows: 1fr 10fr 1fr;\n      grid-template-rows: 1fr 10fr 1fr;\n      grid-template-areas: \"header\" \"wrapper\" \"footer\"; }\n\n.header {\n  -ms-grid-row: 1;\n  -ms-grid-column: 1;\n  grid-area: header; }\n\n.footer {\n  -ms-grid-row: 3;\n  -ms-grid-column: 1;\n  grid-area: footer; }\n\n.wrapper {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-row: 2;\n  -ms-grid-column: 1;\n  grid-area: wrapper;\n      -ms-grid-columns: 1fr 1px 8fr 1px 1fr;\n      grid-template-columns: 1fr 8fr 1fr;\n      -ms-grid-rows: 1fr;\n      grid-template-rows: 1fr;\n  grid-gap: 1px 1px;\n      grid-template-areas: \". content .\"; }\n\n.content {\n  -ms-grid-row: 1;\n  -ms-grid-column: 3;\n  grid-area: content;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")],
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _views_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/navbar/navbar.component */ "./src/app/views/navbar/navbar.component.ts");
/* harmony import */ var _views_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/home/home.component */ "./src/app/views/home/home.component.ts");
/* harmony import */ var _views_certificados_certificados_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/certificados/certificados.component */ "./src/app/views/certificados/certificados.component.ts");
/* harmony import */ var _views_projetos_projetos_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/projetos/projetos.component */ "./src/app/views/projetos/projetos.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _views_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
                _views_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _views_certificados_certificados_component__WEBPACK_IMPORTED_MODULE_6__["CertificadosComponent"],
                _views_projetos_projetos_component__WEBPACK_IMPORTED_MODULE_7__["ProjetosComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/views/certificados/certificados.component.html":
/*!****************************************************************!*\
  !*** ./src/app/views/certificados/certificados.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cards\">\r\n  <div class=\"card\">\r\n    <h3>Titulo</h3>\r\n    <p>Lorem ipsum dolor sit amet, nec ne nostrud mediocritatem, mel at munere imperdiet, id eum case aliquid. Suas democritum ut ius, quem voluptatum voluptatibus vix no. Commune mandamus instructior cu usu. An mel labores neglegentur, ea mei posse fuisset. Id pro omnesque voluptaria elaboraret, saepe atomorum rationibus eum at.</p>\r\n  </div>\r\n  <div class=\"card\">\r\n    <h3>Titulo</h3>\r\n    <p>Lorem ipsum dolor sit amet, nec ne nostrud mediocritatem, mel at munere imperdiet, id eum case aliquid. Suas democritum ut ius, quem voluptatum voluptatibus vix no. Commune mandamus instructior cu usu. An mel labores neglegentur, ea mei posse fuisset. Id pro omnesque voluptaria elaboraret, saepe atomorum rationibus eum at.</p>\r\n  </div>\r\n  <div class=\"card\">\r\n    <h3>Titulo</h3>\r\n    <p>Lorem ipsum dolor sit amet, nec ne nostrud mediocritatem, mel at munere imperdiet, id eum case aliquid. Suas democritum ut ius, quem voluptatum voluptatibus vix no. Commune mandamus instructior cu usu. An mel labores neglegentur, ea mei posse fuisset. Id pro omnesque voluptaria elaboraret, saepe atomorum rationibus eum at.</p>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/views/certificados/certificados.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/views/certificados/certificados.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cards {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: 1fr 1fr 1fr;\n      grid-template-columns: 1fr 1fr 1fr;\n  -ms-grid-rows: 1fr;\n      grid-template-rows: 1fr;\n  grid-gap: 15px; }\n\n.card {\n  background-color: #ffffff;\n  opacity: 0.5;\n  min-height: 40vh;\n  width: 18vw;\n  box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.2);\n  transition: all 0.3s;\n  padding: 15px;\n  border-radius: 3px; }\n\n.card:hover {\n  opacity: 0.65;\n  box-shadow: 0 10px 8px 0 rgba(0, 0, 0, 0.2); }\n\n.card p {\n  color: #000000;\n  text-align: justify;\n  -webkit-margin-before: 0;\n  -webkit-margin-after: 0; }\n\n.card h3 {\n  color: #000000;\n  -webkit-margin-before: 0; }\n"

/***/ }),

/***/ "./src/app/views/certificados/certificados.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/views/certificados/certificados.component.ts ***!
  \**************************************************************/
/*! exports provided: CertificadosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CertificadosComponent", function() { return CertificadosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _assets_fade_in_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/fade-in-animation */ "./src/assets/fade-in-animation.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CertificadosComponent = /** @class */ (function () {
    function CertificadosComponent() {
    }
    CertificadosComponent.prototype.ngOnInit = function () {
    };
    CertificadosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-certificados',
            template: __webpack_require__(/*! ./certificados.component.html */ "./src/app/views/certificados/certificados.component.html"),
            styles: [__webpack_require__(/*! ./certificados.component.scss */ "./src/app/views/certificados/certificados.component.scss")],
            animations: [_assets_fade_in_animation__WEBPACK_IMPORTED_MODULE_1__["fadeInAnimation"]],
            host: { '[@fadeInAnimation]': '' }
        }),
        __metadata("design:paramtypes", [])
    ], CertificadosComponent);
    return CertificadosComponent;
}());



/***/ }),

/***/ "./src/app/views/home/home.component.html":
/*!************************************************!*\
  !*** ./src/app/views/home/home.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"home\">\r\n  <h1>\r\n    Bem vindo ao meu portifólio <i class=\"fas fa-code\"></i>\r\n  </h1>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/views/home/home.component.scss":
/*!************************************************!*\
  !*** ./src/app/views/home/home.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".home {\n  align-items: center;\n  justify-content: center; }\n"

/***/ }),

/***/ "./src/app/views/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/views/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _assets_fade_in_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/fade-in-animation */ "./src/assets/fade-in-animation.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/views/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/views/home/home.component.scss")],
            animations: [_assets_fade_in_animation__WEBPACK_IMPORTED_MODULE_1__["fadeInAnimation"]],
            host: { '[@fadeInAnimation]': '' }
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/views/navbar/navbar.component.html":
/*!****************************************************!*\
  !*** ./src/app/views/navbar/navbar.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar\">\r\n  <ul>\r\n    <li>\r\n      <a routerLink=\"/\">\r\n        <i class=\"fas fa-home\"></i>\r\n        Home\r\n      </a>\r\n    </li>\r\n    <li>\r\n      <a routerLink=\"/certificados\">\r\n        <i class=\"fas fa-graduation-cap\"></i>\r\n        Certificados\r\n      </a>\r\n    </li>\r\n    <li>\r\n      <a routerLink=\"/projetos\">\r\n        <i class=\"fas fa-briefcase\"></i>\r\n        Projetos\r\n      </a>\r\n    </li>\r\n  </ul>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/views/navbar/navbar.component.scss":
/*!****************************************************!*\
  !*** ./src/app/views/navbar/navbar.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar {\n  box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.2);\n  display: flex; }\n\nli {\n  display: inline-block;\n  list-style-type: none; }\n\nli a {\n  color: #ffffff;\n  text-decoration: none;\n  padding: 10px; }\n\nli a:hover {\n  color: #d0d0d0;\n  transition: color 400ms linear; }\n"

/***/ }),

/***/ "./src/app/views/navbar/navbar.component.ts":
/*!**************************************************!*\
  !*** ./src/app/views/navbar/navbar.component.ts ***!
  \**************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/views/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/views/navbar/navbar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/views/projetos/projetos.component.html":
/*!********************************************************!*\
  !*** ./src/app/views/projetos/projetos.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  Projetos works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/views/projetos/projetos.component.scss":
/*!********************************************************!*\
  !*** ./src/app/views/projetos/projetos.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/projetos/projetos.component.ts":
/*!******************************************************!*\
  !*** ./src/app/views/projetos/projetos.component.ts ***!
  \******************************************************/
/*! exports provided: ProjetosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjetosComponent", function() { return ProjetosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _assets_fade_in_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/fade-in-animation */ "./src/assets/fade-in-animation.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProjetosComponent = /** @class */ (function () {
    function ProjetosComponent() {
    }
    ProjetosComponent.prototype.ngOnInit = function () {
    };
    ProjetosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-projetos',
            template: __webpack_require__(/*! ./projetos.component.html */ "./src/app/views/projetos/projetos.component.html"),
            styles: [__webpack_require__(/*! ./projetos.component.scss */ "./src/app/views/projetos/projetos.component.scss")],
            animations: [_assets_fade_in_animation__WEBPACK_IMPORTED_MODULE_1__["fadeInAnimation"]],
            host: { '[@fadeInAnimation]': '' }
        }),
        __metadata("design:paramtypes", [])
    ], ProjetosComponent);
    return ProjetosComponent;
}());



/***/ }),

/***/ "./src/assets/fade-in-animation.ts":
/*!*****************************************!*\
  !*** ./src/assets/fade-in-animation.ts ***!
  \*****************************************/
/*! exports provided: fadeInAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeInAnimation", function() { return fadeInAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var fadeInAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fadeInAnimation', [
    // route 'enter' transition
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
        // styles at start of transition
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }),
        // animation and styles at end of transition
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('1s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 }))
    ]),
]);


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Usuario\Documents\klisman.github.io\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map