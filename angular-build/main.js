(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./home/cart/cart.module": [
		"./src/app/home/cart/cart.module.ts",
		"home-cart-cart-module"
	],
	"./home/edit-product/edit-product.module": [
		"./src/app/home/edit-product/edit-product.module.ts",
		"home-edit-product-edit-product-module"
	],
	"./home/guest-checkout/guest-checkout.module": [
		"./src/app/home/guest-checkout/guest-checkout.module.ts",
		"home-guest-checkout-guest-checkout-module"
	],
	"./home/special/special.module": [
		"./src/app/home/special/special.module.ts",
		"home-special-special-module"
	],
	"./home/thankyou/thankyou.module": [
		"./src/app/home/thankyou/thankyou.module.ts",
		"home-thankyou-thankyou-module"
	],
	"./login/login.module": [
		"./src/app/login/login.module.ts",
		"login-login-module"
	],
	"./signup/signup.module": [
		"./src/app/signup/signup.module.ts",
		"signup-signup-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error('Cannot find module "' + req + '".');
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Start Wrap -->\n<div class=\"wrap\" [class.on]=\"mainclass\">\n    <!-- <app-side (toggle)=\"mainclass = !mainclass\"></app-side> -->\n    <app-sidebar></app-sidebar>\n    <div class=\"main\">\n        <router-outlet></router-outlet>\n        <!-- Start Footer -->\n        <footer>\n            <div class=\"container\">\n                <ul class=\"list-inline social\">\n                    <li><a><img src=\"/assets/images/footer/fb.png\" alt=\"\"/></a></li>\n                    <li><a><img src=\"/assets/images/footer/twitter.png\" alt=\"\"/></a></li>\n                    <li><a><img src=\"/assets/images/footer/insta.png\" alt=\"\"/></a></li>\n                    <li><a><img src=\"/assets/images/footer/gplus.png\" alt=\"\"/></a></li>\n                    <li><a><img src=\"/assets/images/footer/youtube.png\" alt=\"\"/></a></li>\n                    <li><a><img src=\"/assets/images/footer/p.png\" alt=\"\"/></a></li>\n                    <li><a><img src=\"/assets/images/footer/blog.png\" alt=\"\"/></a></li>\n                </ul>\n                <p class=\"margin-bottom0\">Copyright © 2002-2018 Autogeardepot.com, Inc.All rights Reserved.</p>\n            </div>\n        </footer>\n        <!-- End Footer -->\n    </div>\n</div>\n<!-- End Wrap -->"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrap {\n  padding-left: 0px; }\n\nfooter p {\n  color: #000;\n  font-size: 14px;\n  font-weight: 500; }\n\nul.list-inline li {\n  margin: 0 0px; }\n\nul.list-inline.social img {\n  width: 30px; }\n"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(router, meta, titleService) {
        this.router = router;
        this.meta = meta;
        this.titleService = titleService;
        this.scrollbarOptions = { axis: 'y', theme: 'minimal-dark' };
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        document.getElementById("loader").style.display = 'none';
        this.router.events.subscribe(function (evt) {
            _this.mainclass = false;
            window.scrollTo(0, 0);
        });
        this.meta.addTag({ name: 'keyword', content: 'Custom License Plates' });
        this.meta.addTag({ name: 'description', content: 'Custom License Plates' });
        this.meta.addTag({ name: 'robots', content: 'index, follow' });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")],
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Meta"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]])
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _side_side_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./side/side.component */ "./src/app/side/side.component.ts");
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/home.module */ "./src/app/home/home.module.ts");
/* harmony import */ var _product_product_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./product/product.module */ "./src/app/product/product.module.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _contact_contact_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./contact/contact.module */ "./src/app/contact/contact.module.ts");
/* harmony import */ var _element_element_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./element/element.module */ "./src/app/element/element.module.ts");
/* harmony import */ var _routing_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./routing.module */ "./src/app/routing.module.ts");
/* harmony import */ var _lib_directive_fullscreen_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./lib/directive/fullscreen.directive */ "./src/app/lib/directive/fullscreen.directive.ts");
/* harmony import */ var _common_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./common/sidebar/sidebar.component */ "./src/app/common/sidebar/sidebar.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// Dependencies


// Compoenent







// Routing MOdule

// Directive Height


var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _side_side_component__WEBPACK_IMPORTED_MODULE_9__["SideComponent"],
                _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_12__["NotFoundComponent"],
                _lib_directive_fullscreen_directive__WEBPACK_IMPORTED_MODULE_16__["FullscreenDirective"],
                _common_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_17__["SidebarComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"],
                _routing_module__WEBPACK_IMPORTED_MODULE_15__["AppRoutingModule"],
                _home_home_module__WEBPACK_IMPORTED_MODULE_10__["HomeModule"],
                _product_product_module__WEBPACK_IMPORTED_MODULE_11__["ProductModule"],
                _element_element_module__WEBPACK_IMPORTED_MODULE_14__["ElementModule"],
                _contact_contact_module__WEBPACK_IMPORTED_MODULE_13__["contactModule"]
            ],
            providers: [
                { provide: _angular_common__WEBPACK_IMPORTED_MODULE_5__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_5__["PathLocationStrategy"] }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/common/sidebar/sidebar.component.html":
/*!*******************************************************!*\
  !*** ./src/app/common/sidebar/sidebar.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"navbar navbar-light mb-0\">\n\n            <div class=\"row \" style=\"margin-bottom: 0px\">\n              <div class=\"col-sm-12 pt-2 text-center\" style=\"padding-top: 10px;\">\n                 <a routerLink=\"/\"><img src=\"../../../assets/images/logo.png\" alt=\"\" width=\"100%\" class=\"img-fluid text-center\"></a> \n              </div>\n            </div>\n            <!-- <h3 class=\"text-center\"><i><strong>LICENCE<span class=\"text-danger\">PLATE</span>.TV</strong></i> </h3> -->\n            <!-- <img src=\"../../../assets/images/logo.png\" alt=\"\" width=\"100%\" class=\"img-fluid text-center\"> -->\n            <div class=\"row\" style=\"margin-bottom: 0px;padding-left: 12px;\n            padding-right: 16px;\">\n\n                <ng-container *ngIf=\"!search\">\n                        <div class=\"col-xs-4 col-sm-3\" style=\"padding: 1em\">\n                                <span style=\"font-size:27px;cursor:pointer\" (click)=\"openNav()\"><i style=\"transform: scale(1.3,1);padding-left: 5px;\" class=\"fa fa-bars\" aria-hidden=\"true\"></i></span>\n                        </div>\n                \n                        <div style=\"padding: 1em\" class=\"col-xs-8 col-sm-9 text-right\">\n                               <span class=\"right_btn\" style=\"font-size:27px;cursor:pointer\" (click)=\"Search()\"><i class=\"fa fa-search\" aria-hidden=\"true\"></i></span> &nbsp;\n                               <span class=\"right_btn\" style=\"font-size:27px;cursor:pointer\" routerLink=\"/cart\"><i class=\"fa fa-shopping-cart\" aria-hidden=\"true\"></i><sup class=\"text-danger\">{{itemNum}}</sup></span>\n                        </div>\n                </ng-container>\n\n                <ng-container *ngIf=\"search\">\n                    <div class=\"col-xs-10 col-sm-10\">\n                        \n                            <div class=\"form-group\">\n                                    <!-- <label for=\"exampleFormControlInput1\">Email address</label> -->\n                                    <input type=\"email\" class=\"form-control\" id=\"exampleFormControlInput1\" placeholder=\"Search For...\">\n                                  </div>\n\n                    </div>\n                    <div class=\"col-xs-2 col-sm-2 \">\n                            <a href=\"javascript:void(0)\" style=\"font-size:30px;cursor:pointer;color: #999999;\" class=\"closebtn\" (click)=\"closeSearch()\">&times;</a>\n                    </div>\n                </ng-container>\n        \n                \n\n            </div>\n      \n   \n\n    \n    <div id=\"mySidenav\" style=\"z-index: 999\" class=\"sidenav\">\n\n        <ng-container *ngIf=\"!subCat\" style=\"transition: 0.9s;\">\n                <a href=\"javascript:void(0)\" class=\"closebtn\" (click)=\"closeNav()\">&times;</a>\n\n                <ul class=\"list-group list-group-flush \">\n                  <li *ngIf=\"!loggedIn\" class=\"list-group-item d-flex justify-content-between align-items-center\" (click)=\"Auth()\">\n                    Join/Login To Your Account\n                    <span class=\"badge badge-primary badge-pill\"><i class=\"fa fa-angle-right\" style=\"font-size:21px\"></i></span>\n                  </li>\n                  <li *ngIf=\"loggedIn\" class=\"list-group-item d-flex justify-content-between align-items-center\" (click)=\"details()\">\n                    Hi, {{User.firstname? User.firstname : '' }}&nbsp;{{User.lastname? User.lastname : ''}}\n                    <!-- <span class=\"badge badge-primary badge-pill\"><i class=\"fa fa-angle-right\" style=\"font-size:21px\"></i></span> -->\n                  </li>\n                  <li *ngIf=\"loggedIn\" class=\"list-group-item d-flex justify-content-between align-items-center\" (click)=\"logout()\">\n                    Logout\n                    <!-- <span class=\"badge badge-primary badge-pill\"><i class=\"fa fa-angle-right\" style=\"font-size:21px\"></i></span> -->\n                  </li>\n                    <li *ngFor=\"let item of categories\" class=\"list-group-item d-flex justify-content-between align-items-center\" (click)=\"getSubCat(item)\">\n                          <strong>{{item.categories_name}}</strong>\n                          <span class=\"badge badge-primary badge-pill\"><i class=\"fa fa-angle-right\" style=\"font-size:21px\"></i></span>\n                        </li>\n        \n                        <!-- <li class=\"list-group-item d-flex justify-content-between align-items-center\">\n                          Dapibus ac facilisis in\n                          <span class=\"badge badge-primary badge-pill\"><i class=\"fa fa-angle-right\" style=\"font-size:20px\"></i></span>\n                        </li>\n        \n                        <li class=\"list-group-item d-flex justify-content-between align-items-center\">\n                          Morbi leo risus\n                          <span class=\"badge badge-primary badge-pill\"><i class=\"fa fa-angle-right\" style=\"font-size:20px\"></i></span>\n                        </li> -->\n        \n                      </ul>\n                \n        </ng-container>\n\n        <ng-container *ngIf=\"subCat\" style=\"transition: 0.9s;\">\n                <a href=\"javascript:void(0)\" class=\"backbtn\" (click)=\"closeSubCat()\">&larr;</a>\n    \n                <ul class=\"list-group list-group-flush \">\n                        <li class=\"list-group-item d-flex justify-content-between align-items-center active\">\n                              <strong>{{catName}}</strong> \n                              </li> \n                    <li *ngFor=\"let sub of subCategories\" class=\"list-group-item d-flex justify-content-between align-items-center pl-2\">\n                          {{sub.categories_name}}\n        \n                        </li>\n        \n                        <!-- <li class=\"list-group-item d-flex justify-content-between align-items-center\">\n                          Dapibus ac facilisis in\n                          <span class=\"badge badge-primary badge-pill\"><i class=\"fa fa-angle-right\" style=\"font-size:20px\"></i></span>\n                        </li>\n        \n                        <li class=\"list-group-item d-flex justify-content-between align-items-center\">\n                          Morbi leo risus\n                          <span class=\"badge badge-primary badge-pill\"><i class=\"fa fa-angle-right\" style=\"font-size:20px\"></i></span>\n                        </li> -->\n        \n                      </ul>\n        </ng-container>\n       \n      </div>\n\n      <div id=\"searchBlock\" class=\"searchblock\">\n\n      </div>\n\n      <!-- <div *ngIf=\"subCat\" id=\"mySidenav\" style=\"z-index: 999\" class=\"sidenav\">\n          \n            \n          </div> -->\n\n  </header>"

/***/ }),

/***/ "./src/app/common/sidebar/sidebar.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/common/sidebar/sidebar.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav {\n  height: 100%;\n  width: 0;\n  position: fixed;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  background-color: #fff;\n  overflow-x: hidden;\n  transition: 0.5s;\n  padding-top: 60px; }\n\n.text-danger {\n  color: #d9232e; }\n\n.searchblock {\n  height: 100%;\n  width: 0;\n  position: fixed;\n  z-index: 1;\n  top: 16.4%;\n  left: 0;\n  background: rgba(0, 0, 0, 0.07);\n  overflow-x: hidden;\n  transition: 0.5s;\n  padding-top: 60px;\n  z-index: 999; }\n\n.sidenav a {\n  padding: 8px 8px 8px 32px;\n  text-decoration: none;\n  font-size: 15px;\n  color: #818181;\n  display: block;\n  transition: 0.3s; }\n\n.sidenav a:hover {\n  color: #2f2f2f; }\n\n.sidenav .closebtn {\n  position: absolute;\n  top: 0;\n  right: 5px;\n  font-size: 36px;\n  margin-left: 50px; }\n\n.sidenav .backbtn {\n  position: absolute;\n  top: 0;\n  left: -18px;\n  font-size: 36px;\n  margin-left: 0px; }\n\n#main {\n  transition: margin-left .5s;\n  padding: 16px; }\n\n.text-right i:focus, input:focus {\n  outline: none; }\n\n.right_btn:focus {\n  outline: none; }\n\n.fa {\n  color: #000; }\n\n.badge, ul.list-justify li.active, .btn-order.active.mat-menu-item {\n  background-color: #FFF !important; }\n\n.list-group-item {\n  border: 0px solid #ddd;\n  cursor: pointer;\n  font-size: 16px;\n  color: #000; }\n\n.list-group-item:hover {\n  background: #eaeaea; }\n\n.navbar {\n  margin-bottom: 0px; }\n\n.form-control {\n  border: 0px solid #fff;\n  font-size: 22px;\n  padding-top: 1em;\n  height: 38px; }\n\n.form-control:focus {\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(255, 255, 255, 0.6); }\n\n@media screen and (max-height: 450px) {\n  .sidenav {\n    padding-top: 15px; }\n  .sidenav a {\n    font-size: 18px; } }\n"

/***/ }),

/***/ "./src/app/common/sidebar/sidebar.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/common/sidebar/sidebar.component.ts ***!
  \*****************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_lib_service_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/lib/service/product.service */ "./src/app/lib/service/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(_producService, router) {
        this._producService = _producService;
        this.router = router;
        this.itemNum = '';
    }
    SidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getCategories();
        // this.getCartitemCount();
        this._producService.currentData.subscribe(function (data) {
            if (data) {
                console.log('new data is ', data);
                _this.itemNum = data;
            }
            else {
                var Items = JSON.parse(localStorage.getItem('cartItems'));
                if (Items) {
                    _this.itemNum = Items.length;
                }
            }
        });
        // this.getUser();
        this._producService.authData.subscribe(function (data) {
            if (data) {
                console.log('user logged in ', data);
                _this.loggedIn = data;
                _this.getUser();
            }
            else {
                _this.User = JSON.parse(localStorage.getItem('currentUser'));
                if (_this.User) {
                    _this.loggedIn = true;
                    _this.getUser();
                }
            }
        });
    };
    SidebarComponent.prototype.checkNav = function () {
        if (this.navOpen) {
            this.closeNav();
        }
    };
    SidebarComponent.prototype.getUser = function () {
        this.User = JSON.parse(localStorage.getItem('currentUser'));
        if (this.User) {
            this.loggedIn = true;
        }
    };
    SidebarComponent.prototype.logout = function () {
        localStorage.removeItem('currentUser');
        this.loggedIn = !this.loggedIn;
        document.getElementById('mySidenav').style.width = '0%';
        this.router.navigateByUrl('');
        // window.location.reload();
    };
    SidebarComponent.prototype.getCartitemCount = function () {
        var Items = JSON.parse(localStorage.getItem('cartItems'));
        this.itemNum = this._producService.itemNum ? this._producService.itemNum : 0;
    };
    SidebarComponent.prototype.openNav = function () {
        document.getElementById('mySidenav').style.width = '80%';
        // document.getElementById('main').style.marginLeft = '250px';
        // document.body.style.backgroundColor = 'rgba(0,0,0,0.4)';
        this.navOpen = true;
    };
    SidebarComponent.prototype.closeNav = function () {
        document.getElementById('mySidenav').style.width = '0%';
        // document.getElementById('main').style.marginLeft = '0';
        // document.body.style.backgroundColor = 'white';
    };
    SidebarComponent.prototype.closeSubCat = function () {
        this.subCat = !this.subCat;
    };
    SidebarComponent.prototype.closeSearch = function () {
        this.search = !this.search;
        document.getElementById('searchBlock').style.width = '0%';
    };
    SidebarComponent.prototype.Search = function () {
        this.search = true;
        document.getElementById('searchBlock').style.width = '100%';
    };
    SidebarComponent.prototype.getSubCat = function (item) {
        this.closeNav();
        this.router.navigateByUrl('subcategories/' + item.categories_id);
        // this.catName = item.categories_name;
        // this._producService.getSubCategory(item.categories_id)
        // .subscribe( (res: any) => {
        //   console.log(res);
        //   this.subCategories = res.category;
        //   this.subCat = !this.subCat;
        // });
    };
    SidebarComponent.prototype.getCategories = function () {
        var _this = this;
        this._producService.getCategory()
            .subscribe(function (data) {
            _this.categories = data.category;
            _this._producService.catId = _this.categories[0].categories_id;
            console.log('cats are ', data);
            // console.log('cats are ', this.categories);
        });
    };
    SidebarComponent.prototype.Auth = function () {
        this.router.navigateByUrl('login');
        this.closeNav();
    };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/common/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/common/sidebar/sidebar.component.scss")]
        }),
        __metadata("design:paramtypes", [app_lib_service_product_service__WEBPACK_IMPORTED_MODULE_1__["productService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-header\">\n    <!-- Breadcumbs -->\n    <breadcumb></breadcumb>\n</div>\n<!-- Head Section -->\n<div class=\"head-section bg\">\n    <div class=\"container\">\n        <h4>Contact <span class=\"font-light\">Us</span></h4>\n        <p>Delectus aliquando incorrupte ne sea qui cu iudicabit.</p>\n    </div>\n</div>\n<!-- End Section -->\n<div class=\"container-page wrap-contact\">\n    <div class=\"box-page\">\n        <div class=\"row\">\n            <div class=\"col l8 m7 s12\">\n                <h5>Say hallo for angushop</h5>\n                <!-- Start Form -->\n                <form #formRef=\"ngForm\" (ngSubmit)=\"onSubmit(formRef)\">\n                    <div class=\"row\">\n                        <div class=\"col m6 s12\">\n                            <mat-form-field>\n                                <input matInput \n                                    type=\"text\"\n                                    placeholder=\"Full Name\" \n                                    value=\"\" \n                                    name=\"fullname\" \n                                    [(ngModel)]=\"fullname\" \n                                    #fullnameRef=\"ngModel\" \n                                    required>\n                            </mat-form-field>\n                            <small class=\"error\" *ngIf=\"fullnameRef.errors?.required && fullnameRef.touched\">required error</small>                                                                                                                                                                                                                                \n                            <small class=\"error\" *ngIf=\"fullnameRef.errors?.required && fullnameRef.dirty\">required error</small>                                                                                                                                                                                                                                \n                        </div>\n                        <div class=\"col m6 s12\">\n                            <mat-form-field>\n                                <input matInput \n                                    type=\"email\"\n                                    placeholder=\"Email\" \n                                    value=\"\"\n                                    name=\"email\"\n                                    [(ngModel)]=\"email\" \n                                    #emailRef=\"ngModel\"\n                                    required\n                                    email>\n                            </mat-form-field>\n                            <small class=\"error\" *ngIf=\"emailRef.errors?.required && emailRef.touched\">required error</small>                                                                                                                                                                                                                                                            \n                            <small class=\"error\" *ngIf=\"emailRef.errors?.required && emailRef.dirty\">required error</small>                                                                                                                                                                                                                                                            \n                            <small class=\"error\" *ngIf=\"emailRef.errors?.email && emailRef.dirty\">email not valid</small>                                                                                                                                                                                                                                                            \n                        </div>\n                    </div>\n\n                    <div class=\"clearfix\"></div>\n\n                    <div class=\"row\">\n                        <div class=\"col m12 s12\">\n                            <mat-form-field>\n                                <input matInput \n                                    type=\"text\"\n                                    placeholder=\"Subject\" \n                                    value=\"\"\n                                    name=\"subject\" \n                                    [(ngModel)]=\"subject\" \n                                    #subjectRef=\"ngModel\" \n                                    required>\n                            </mat-form-field>\n                            <small class=\"error\" *ngIf=\"subjectRef.errors?.required && subjectRef.touched\">required error</small>                                                                                                                                                                                                                                                                                        \n                            <small class=\"error\" *ngIf=\"subjectRef.errors?.required && subjectRef.dirty\">required error</small>                                                                                                                                                                                                                                                                                        \n                        </div>\n                        <div class=\"col s6 s12\">\n                            <mat-form-field>\n                                <textarea matInput \n                                    type=\"text\"\n                                    placeholder=\"message\" \n                                    value=\"\"\n                                    name=\"message\" \n                                    [(ngModel)]=\"message\" \n                                    #messageRef=\"ngModel\" \n                                    rows=\"5\"\n                                    required></textarea>\n                            </mat-form-field>\n                            <small class=\"error\" *ngIf=\"messageRef.errors?.required && messageRef.touched\">required error</small>                                                                                                                                                                                                                                                                                                                    \n                            <small class=\"error\" *ngIf=\"messageRef.errors?.required && messageRef.dirty\">required error</small>                                                                                                                                                                                                                                                                                                                    \n                        </div>\n                    </div>\n                    <div class=\"row margin-top20\">\n                        <div class=\"col l6 push-l6 s12 right-align\">\n                            <button [disabled]=\"formRef.invalid\" type=\"submit\" mat-button class=\"btn btn-primary\">Send</button>                            \n                        </div>\n                    </div>\n                </form>\n                <!-- End Form -->\n            </div>\n            <div class=\"col l4 m5 s12 side-contact\">\n                <div class=\"panel\">\n                    <h5 class=\"title\">Touch Us</h5>\n                    <ul>\n                        <li>\n                            <mat-icon mat-list-icon class=\"font-light\">&#xE55F;</mat-icon>\n                            <h6>Office</h6>\n                            <p>Jl.Pagaden Kp.Nagrogjaya Kabupaten Subang, RT 12/03</p>\n                        </li>\n                        <li>\n                            <mat-icon mat-list-icon class=\"font-light\">&#xE551;</mat-icon>\n                            <h6>Phone</h6>\n                            <p>+6289664755286</p>\n                        </li>\n                        <li>\n                            <mat-icon mat-list-icon class=\"font-light\">&#xE0BE;</mat-icon>\n                            <h6>Email</h6>\n                            <p>adamnurdin01@gmail.com</p>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<!-- Start Map -->\n<div class=\"wrap-map\">\n    <agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoomControl]=\"false\" [streetViewControl]=\"false\" [zoom]=\"15\">\n        <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\n    </agm-map>\n</div>\n<!-- End Map -->"

/***/ }),

/***/ "./src/app/contact/contact.component.scss":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\nImport\n=========================== */\n/* -------------------------------------------------------------\n  Sass CSS3 Mixins! The Cross-Browser CSS3 Sass Library\n  By: Matthieu Aussaguel, http://www.mynameismatthieu.com, @matthieu_tweets\n\n  List of CSS3 Sass Mixins File to be @imported and @included as you need\n\n  The purpose of this library is to facilitate the use of CSS3 on different browsers avoiding HARD TO READ and NEVER\n  ENDING css files\n\n  note: All CSS3 Properties are being supported by Safari 5\n  more info: http://www.findmebyip.com/litmus/#css3-properties\n\n------------------------------------------------------------- */\n/*\nColor\n=========================== */\n/*\nFont Family\n=========================== */\n.material-icons {\n  font-family: 'Material Icons';\n  font-weight: normal;\n  line-height: 20px; }\n.material-icons {\n  font-family: 'Material Icons';\n  font-weight: normal;\n  line-height: 20px; }\n.wrap-map {\n  position: relative; }\n.wrap-map:before {\n    content: '';\n    position: absolute;\n    z-index: 2;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0; }\nagm-map {\n  position: relative;\n  z-index: 1;\n  height: 350px; }\nform {\n  padding: 5px 4px; }\n.panel {\n  border: solid 1px #efefef;\n  background: #fff;\n  padding: 25px 30px;\n  -ms-box-shadow: rgba(147, 147, 147, 0.1) 0 1px 15px 1px;\n  -o-box-shadow: rgba(147, 147, 147, 0.1) 0 1px 15px 1px;\n  box-shadow: rgba(147, 147, 147, 0.1) 0 1px 15px 1px;\n  border-radius: 4px; }\n.panel .title {\n    text-transform: none; }\n.panel ul {\n    padding: 0;\n    margin: 0;\n    list-style: none;\n    display: block; }\n.panel ul li {\n      display: block;\n      position: relative;\n      padding-left: 30px;\n      margin: 0 0 15px 0 !important; }\n.panel ul li h6 {\n        text-transform: none;\n        margin-bottom: 5px !important; }\n.panel ul li:last-child {\n        margin-bottom: 0; }\n.panel ul li mat-icon {\n        position: absolute;\n        left: 0;\n        top: 0;\n        font-size: 18px; }\n.panel ul li p:last-child {\n        margin-bottom: 0; }\n@media (max-width: 586px) {\n  .side-contact {\n    margin-top: 30px; } }\n"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactComponent = /** @class */ (function () {
    function ContactComponent(snackBar) {
        this.snackBar = snackBar;
        this.lat = -6.9222975;
        this.lng = 107.6088145;
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent.prototype.onSubmit = function (e) {
        this.openSnackBar('Message has been sent', 'Done');
    };
    ContactComponent.prototype.openSnackBar = function (message, action) {
        this.snackBar.open(message, action, {
            duration: 2000,
        });
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.scss */ "./src/app/contact/contact.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/contact/contact.module.ts":
/*!*******************************************!*\
  !*** ./src/app/contact/contact.module.ts ***!
  \*******************************************/
/*! exports provided: contactModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contactModule", function() { return contactModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-validation */ "./node_modules/ng2-validation/dist/index.js");
/* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ng2_validation__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _lib_lib_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../lib/lib.module */ "./src/app/lib/lib.module.ts");
/* harmony import */ var _contact_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./contact.component */ "./src/app/contact/contact.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// Material



// Validatord

// Google Map

// Angushop Library module


var contactModule = /** @class */ (function () {
    function contactModule() {
    }
    contactModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _lib_lib_module__WEBPACK_IMPORTED_MODULE_10__["libModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBarModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                ng2_validation__WEBPACK_IMPORTED_MODULE_8__["CustomFormsModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_9__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyALMkgKQpcKi_frj9VAYrHE1nRFLegJKtM'
                })
            ],
            declarations: [
                _contact_component__WEBPACK_IMPORTED_MODULE_11__["ContactComponent"]
            ],
            exports: [
                _contact_component__WEBPACK_IMPORTED_MODULE_11__["ContactComponent"]
            ]
        })
    ], contactModule);
    return contactModule;
}());



/***/ }),

/***/ "./src/app/element/button/button.component.html":
/*!******************************************************!*\
  !*** ./src/app/element/button/button.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Head Section -->\n<div class=\"head-section bg\">\n    <div class=\"container\">\n        <h4>Button <span class=\"font-light\">Element</span></h4>\n        <p>Material Button, Indicator & Icons</p>\n    </div>\n</div>\n<!-- End Section -->\n<div class=\"container-page\">\n    <div class=\"box-page\">\n        <!-- Start Panel -->\n        <div class=\"panel\">\n            <div class=\"head-panel\">\n                <h6>Button</h6>\n            </div>\n            <div class=\"body-panel\">\n                <!-- Button -->\n                <h6>Normal Buttons</h6>\n                <button mat-button>Flat button</button>\n                <button mat-fab><mat-icon>check</mat-icon></button>\n                <button mat-mini-fab><mat-icon>check</mat-icon></button>\n            </div>\n            <div class=\"code\">\n<pre>\n&#x3C;button mat-button&#x3E;Flat button&#x3C;/button&#x3E;\n&#x3C;button mat-fab&#x3E;&#x3C;mat-icon&#x3E;check&#x3C;/mat-icon&#x3E;&#x3C;/button&#x3E;\n&#x3C;button mat-mini-fab&#x3E;&#x3C;mat-icon&#x3E;check&#x3C;/mat-icon&#x3E;&#x3C;/button&#x3E;\n</pre>\n            </div>\n            <div class=\"body-panel\">\n\n                <h6 class=\"margin-top20\">Link Buttons</h6>\n                <a mat-button routerLink=\".\">Flat button</a>\n                <a mat-fab routerLink=\".\"><mat-icon>check</mat-icon></a>\n                <a mat-mini-fab routerLink=\".\"><mat-icon>check</mat-icon></a>\n            </div>\n            <div class=\"code\">\n<pre>\n&#x3C;a mat-button routerLink=&#x22;.&#x22;&#x3E;Flat button&#x3C;/a&#x3E;\n&#x3C;a mat-fab routerLink=&#x22;.&#x22;&#x3E;&#x3C;mat-icon&#x3E;check&#x3C;/mat-icon&#x3E;&#x3C;/a&#x3E;\n&#x3C;a mat-mini-fab routerLink=&#x22;.&#x22;&#x3E;&#x3C;mat-icon&#x3E;check&#x3C;/mat-icon&#x3E;&#x3C;/a&#x3E;\n</pre>\n            </div>\n            <div class=\"body-panel\">\n                <h6 class=\"margin-top20\">Button Default</h6>\n                <button mat-button class=\"btn btn-default\">Button Default</button>\n                <button mat-button class=\"btn btn-primary\">Button Primary</button>\n            </div>\n            <div class=\"code\">\n<pre>\n&#x3C;button mat-button class=&#x22;btn btn-default&#x22;&#x3E;Button Default&#x3C;/button&#x3E;\n&#x3C;button mat-button class=&#x22;btn btn-primary&#x22;&#x3E;Button Primary&#x3C;/button&#x3E;\n</pre>\n            </div>\n            <div class=\"body-panel\">\n                <h6 class=\"margin-top20\">Button Small</h6>\n                <button mat-button class=\"btn btn-default btn-sm\">Button Default</button>\n                <button mat-button class=\"btn btn-primary btn-sm\">Button Primary</button>\n            </div>\n            <div class=\"code\">\n<pre>\n&#x3C;button mat-button class=&#x22;btn btn-default btn-sm&#x22;&#x3E;Button Default&#x3C;/button&#x3E;\n&#x3C;button mat-button class=&#x22;btn btn-primary btn-sm&#x22;&#x3E;Button Primary&#x3C;/button&#x3E;\n</pre>\n            </div>\n            <div class=\"body-panel\">\n                <h6 class=\"margin-top20\">Button Large</h6>\n                <button mat-button class=\"btn btn-default btn-lg\">Button Default</button>\n                <button mat-button class=\"btn btn-primary btn-lg\">Button Primary</button>\n            </div>\n            <div class=\"code\">\n<pre>\n&#x3C;button mat-button class=&#x22;btn btn-default btn-lg&#x22;&#x3E;Button Default&#x3C;/button&#x3E;\n&#x3C;button mat-button class=&#x22;btn btn-primary btn-lg&#x22;&#x3E;Button Primary&#x3C;/button&#x3E;\n</pre>\n            </div>\n            <div class=\"body-panel\">\n                <h6 class=\"margin-top20\">Button Toggle</h6>\n                <mat-button-toggle>Toggle me!</mat-button-toggle>\n            </div>\n            <div class=\"code\">\n<pre>\n&#x3C;mat-button-toggle&#x3E;Toggle me!&#x3C;/mat-button-toggle&#x3E;\n</pre>\n            </div>\n        </div>\n\n        <!-- Start Panel -->\n        <div class=\"panel\">\n            <div class=\"head-panel\">\n                <h6>Chips</h6>\n            </div>\n            <div class=\"body-panel\">\n                <!-- Chip -->\n                <mat-chip-list>\n                    <mat-chip>One fish</mat-chip>\n                    <mat-chip>Two fish</mat-chip>\n                    <mat-chip color=\"primary\" selected=\"true\">Primary fish</mat-chip>\n                </mat-chip-list>\n            </div>\n            <div class=\"code\">\n<pre>\n&#x3C;mat-chip-list&#x3E;\n    &#x3C;mat-chip&#x3E;One fish&#x3C;/mat-chip&#x3E;\n    &#x3C;mat-chip&#x3E;Two fish&#x3C;/mat-chip&#x3E;\n    &#x3C;mat-chip color=&#x22;primary&#x22; selected=&#x22;true&#x22;&#x3E;Primary fish&#x3C;/mat-chip&#x3E;\n&#x3C;/mat-chip-list&#x3E;\n</pre>\n            </div>\n        </div>\n\n        <!-- Start Panel -->\n        <div class=\"panel\">\n            <div class=\"head-panel\">\n                <div class=\"right\">\n                    <a href=\"https://material.io/icons/\" mat-button class=\"btn btn-sm btn-default\" target=\"_BLANK\">More Icons</a>\n                </div>\n                <h6>Icons</h6>\n            </div>\n            <div class=\"body-panel\">\n                <!-- Icons -->\n                <ul class=\"list-icon\">\n                    <li><mat-icon>&#xE84D;</mat-icon></li>\n                    <li><mat-icon>&#xE84E;</mat-icon></li>\n                    <li><mat-icon>&#xE914;</mat-icon></li>\n                    <li><mat-icon>&#xE84F;</mat-icon></li>\n                    <li><mat-icon>&#xE850;</mat-icon></li>\n                    <li><mat-icon>&#xE851;</mat-icon></li>\n                    <li><mat-icon>&#xE854;</mat-icon></li>\n                    <li><mat-icon>&#xE853;</mat-icon></li>\n                    <li><mat-icon>&#xE854;</mat-icon></li>\n                    <li><mat-icon>&#xE855;</mat-icon></li>\n                    <li><mat-icon>&#xE856;</mat-icon></li>\n                    <li><mat-icon>&#xE857;</mat-icon></li>\n                    <li><mat-icon>&#xE858;</mat-icon></li>\n                    <li><mat-icon>&#xE90B;</mat-icon></li>\n                </ul>\n            </div>\n            <div class=\"code\">\n<pre>\n&#x3C;mat-icon&#x3E;&#x26;#xE856;&#x3C;/mat-icon&#x3E;\n</pre>\n            </div>\n        </div>\n\n        <!-- Start Panel -->\n        <div class=\"panel\">\n            <div class=\"head-panel\">\n                <h6>Progress spinner</h6>\n            </div>\n            <div class=\"body-panel\">\n                <!-- Progress spinner -->\n                <mat-spinner></mat-spinner>\n            </div>\n            <div class=\"code\">\n<pre>\n&#x3C;mat-spinner&#x3E;&#x3C;/mat-spinner&#x3E;\n</pre>\n            </div>\n        </div>\n\n        <!-- Start Panel -->\n        <div class=\"panel\">\n            <div class=\"head-panel\">\n                <h6>Progress Bar</h6>\n            </div>\n            <div class=\"body-panel\">\n                <!-- Progress Bar -->\n                <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n            </div>\n            <div class=\"code\">\n<pre>\n&#x3C;mat-progress-bar mode=&#x22;indeterminate&#x22;&#x3E;&#x3C;/mat-progress-bar&#x3E;\n</pre>\n            </div>\n        </div>\n\n        <!-- Start Panel -->\n        <div class=\"panel\">\n            <div class=\"head-panel\">\n                <div class=\"right\">\n                    <a href=\"https://material.angular.io/components/snack-bar/overview\" mat-button class=\"btn btn-sm btn-default\" target=\"_BLANK\">Read Doc</a>\n                </div>\n                <h6>Snackbar</h6>\n            </div>\n            <div class=\"body-panel\">\n              \n                <!-- Snackar -->\n                <mat-form-field>\n                    <input matInput value=\"Disco party!\" placeholder=\"Message\" #message>\n                </mat-form-field>\n\n                <mat-form-field>\n                    <input matInput value=\"Dance\" placeholder=\"Action\" #action>\n                </mat-form-field>\n\n                <button mat-button class=\"btn btn-primary\" (click)=\"openSnackBar(message.value, action.value)\">Show snack-bar</button>\n            </div>\n        </div>\n\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/element/button/button.component.scss":
/*!******************************************************!*\
  !*** ./src/app/element/button/button.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".list-icon {\n  padding: 0;\n  margin: -2px;\n  list-style: none;\n  display: inline-block; }\n  .list-icon li {\n    float: left;\n    display: block;\n    margin: 2px; }\n  .list-icon li mat-icon {\n      display: table-cell;\n      width: 40px !important;\n      height: 40px !important;\n      vertical-align: middle;\n      text-align: center;\n      border: solid 1px #eee;\n      font-size: 20px;\n      padding-left: 1px; }\n"

/***/ }),

/***/ "./src/app/element/button/button.component.ts":
/*!****************************************************!*\
  !*** ./src/app/element/button/button.component.ts ***!
  \****************************************************/
/*! exports provided: ButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonComponent", function() { return ButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ButtonComponent = /** @class */ (function () {
    function ButtonComponent(snackBar) {
        this.snackBar = snackBar;
    }
    ButtonComponent.prototype.openSnackBar = function (message, action) {
        this.snackBar.open(message, action, {
            duration: 2000,
        });
    };
    ButtonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-button',
            template: __webpack_require__(/*! ./button.component.html */ "./src/app/element/button/button.component.html"),
            styles: [__webpack_require__(/*! ./button.component.scss */ "./src/app/element/button/button.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]])
    ], ButtonComponent);
    return ButtonComponent;
}());



/***/ }),

/***/ "./src/app/element/dashboard-element/dashboard-element.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/element/dashboard-element/dashboard-element.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-header\">\n    <!-- Breadcumbs -->\n    <breadcumb></breadcumb>\n</div>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/element/dashboard-element/dashboard-element.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/element/dashboard-element/dashboard-element.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/element/dashboard-element/dashboard-element.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/element/dashboard-element/dashboard-element.component.ts ***!
  \**************************************************************************/
/*! exports provided: DashboardELementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardELementComponent", function() { return DashboardELementComponent; });
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

var DashboardELementComponent = /** @class */ (function () {
    function DashboardELementComponent() {
    }
    DashboardELementComponent.prototype.ngOnInit = function () {
    };
    DashboardELementComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard-element',
            template: __webpack_require__(/*! ./dashboard-element.component.html */ "./src/app/element/dashboard-element/dashboard-element.component.html"),
            styles: [__webpack_require__(/*! ./dashboard-element.component.scss */ "./src/app/element/dashboard-element/dashboard-element.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardELementComponent);
    return DashboardELementComponent;
}());



/***/ }),

/***/ "./src/app/element/element.module.ts":
/*!*******************************************!*\
  !*** ./src/app/element/element.module.ts ***!
  \*******************************************/
/*! exports provided: ElementModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementModule", function() { return ElementModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _lib_lib_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/lib.module */ "./src/app/lib/lib.module.ts");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./product/product.component */ "./src/app/element/product/product.component.ts");
/* harmony import */ var _dashboard_element_dashboard_element_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dashboard-element/dashboard-element.component */ "./src/app/element/dashboard-element/dashboard-element.component.ts");
/* harmony import */ var _form_control_form_control_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./form-control/form-control.component */ "./src/app/element/form-control/form-control.component.ts");
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./layout/layout.component */ "./src/app/element/layout/layout.component.ts");
/* harmony import */ var _button_button_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./button/button.component */ "./src/app/element/button/button.component.ts");
/* harmony import */ var _grid_grid_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./grid/grid.component */ "./src/app/element/grid/grid.component.ts");
/* harmony import */ var _typhography_typhography_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./typhography/typhography.component */ "./src/app/element/typhography/typhography.component.ts");
/* harmony import */ var _helper_helper_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./helper/helper.component */ "./src/app/element/helper/helper.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// Material



// Angushop Library module









var ElementModule = /** @class */ (function () {
    function ElementModule() {
    }
    ElementModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonToggleModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _lib_lib_module__WEBPACK_IMPORTED_MODULE_7__["libModule"]
            ],
            exports: [
                _dashboard_element_dashboard_element_component__WEBPACK_IMPORTED_MODULE_9__["DashboardELementComponent"]
            ],
            declarations: [
                _product_product_component__WEBPACK_IMPORTED_MODULE_8__["ProductElement"],
                _dashboard_element_dashboard_element_component__WEBPACK_IMPORTED_MODULE_9__["DashboardELementComponent"],
                _form_control_form_control_component__WEBPACK_IMPORTED_MODULE_10__["FormControlComponent"],
                _layout_layout_component__WEBPACK_IMPORTED_MODULE_11__["LayoutComponent"],
                _button_button_component__WEBPACK_IMPORTED_MODULE_12__["ButtonComponent"],
                _grid_grid_component__WEBPACK_IMPORTED_MODULE_13__["GridComponent"],
                _typhography_typhography_component__WEBPACK_IMPORTED_MODULE_14__["TyphographyComponent"],
                _helper_helper_component__WEBPACK_IMPORTED_MODULE_15__["HelperComponent"]
            ]
        })
    ], ElementModule);
    return ElementModule;
}());



/***/ }),

/***/ "./src/app/element/form-control/form-control.component.html":
/*!******************************************************************!*\
  !*** ./src/app/element/form-control/form-control.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Head Section -->\n<div class=\"head-section bg\">\n    <div class=\"container\">\n        <h4>Input <span class=\"font-light\">Element</span></h4>\n        <p>Material form controls</p>\n    </div>\n</div>\n<!-- End Section -->\n<div class=\"container-page\">\n    <div class=\"box-page\">\n        <div class=\"panel\">\n            <div class=\"head-panel\">\n                <h6>Basic Input</h6>\n            </div>\n            <div class=\"body-panel\">\n                <mat-form-field>\n                    <input matInput placeholder=\"Favorite food\" value=\"Sushi\">\n                </mat-form-field>\n            </div>\n            <div class=\"code\">\n<pre>\n&#x3C;mat-form-field&#x3E;\n  &#x3C;input matInput placeholder=&#x22;Favorite food&#x22; value=&#x22;Sushi&#x22;&#x3E;\n&#x3C;/mat-form-field&#x3E;\n</pre>\n            </div>\n        </div>\n\n        <!-- Start Panel -->\n        <div class=\"panel\">\n            <div class=\"head-panel\">\n                <h6>Checkbox</h6>\n            </div>\n            <div class=\"body-panel\">\n                <!-- Checkbox -->\n                <mat-checkbox>Check me!</mat-checkbox><br />\n                <mat-checkbox>Check me!</mat-checkbox><br />\n                <mat-checkbox>Check me!</mat-checkbox><br />\n                <mat-checkbox>Check me!</mat-checkbox><br />\n                <mat-checkbox>Check me!</mat-checkbox>\n            </div>\n            <div class=\"code\">\n<pre>\n&#x3C;mat-checkbox&#x3E;Check me!&#x3C;/mat-checkbox\n</pre>\n            </div>\n        </div>\n\n        <!-- Start Panel -->\n        <div class=\"panel\">\n            <div class=\"head-panel\">\n                <h6>Slider</h6>\n            </div>\n            <div class=\"body-panel\">\n                <!-- Slider -->\n                <mat-slider></mat-slider>\n            </div>\n            <div class=\"code\">\n<pre>\n&#x3C;mat-slider&#x3E;&#x3C;/mat-slider&#x3E;\n</pre>\n            </div>\n        </div>\n\n        <!-- Start Panel -->\n        <div class=\"panel\">\n            <div class=\"head-panel\">\n                <h6>Radio button</h6>\n            </div>\n            <div class=\"body-panel\">\n                <!-- Input Radio -->\n                <mat-radio-group>\n                    <mat-radio-button value=\"1\">Option 1</mat-radio-button>\n                    <mat-radio-button value=\"2\">Option 2</mat-radio-button>\n                </mat-radio-group>\n            </div>\n            <div class=\"code\">\n<pre>\n&#x3C;mat-radio-group&#x3E;\n  &#x3C;mat-radio-button value=&#x22;1&#x22;&#x3E;Option 1&#x3C;/mat-radio-button&#x3E;\n  &#x3C;mat-radio-button value=&#x22;2&#x22;&#x3E;Option 2&#x3C;/mat-radio-button&#x3E;\n&#x3C;/mat-radio-group&#x3E;\n</pre>\n            </div>\n        </div>\n\n        <!-- Start Select -->\n        <div class=\"panel\">\n            <div class=\"head-panel\">\n                <div class=\"right\">\n                    <a href=\"https://material.angular.io/components/select/overview\" mat-button class=\"btn btn-default btn-sm\" target=\"_BLANK\">Read Doc</a>\n                </div>\n                <h6>Select</h6>\n            </div>\n            <div class=\"body-panel\">\n                <mat-select placeholder=\"Favorite food\">\n                    <mat-option *ngFor=\"let food of foods\" [value]=\"food.value\">\n                        {{ food.viewValue }}\n                    </mat-option>\n                </mat-select>\n            </div>\n        </div>\n\n        <!-- Start Slide Toggle -->\n        <div class=\"panel\">\n            <div class=\"head-panel\">\n                <h6>Slide Toggle</h6>\n            </div>\n            <div class=\"body-panel\">\n                <mat-slide-toggle>Slide me!</mat-slide-toggle>\n            </div>\n            <div class=\"code\">\n<pre>\n&#x3C;mat-slide-toggle&#x3E;Slide me!&#x3C;/mat-slide-toggle&#x3E;\n</pre>\n            </div>\n        </div>\n\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/element/form-control/form-control.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/element/form-control/form-control.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/element/form-control/form-control.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/element/form-control/form-control.component.ts ***!
  \****************************************************************/
/*! exports provided: FormControlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormControlComponent", function() { return FormControlComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FormControlComponent = /** @class */ (function () {
    function FormControlComponent() {
        this.foods = [
            { value: 'steak-0', viewValue: 'Steak' },
            { value: 'pizza-1', viewValue: 'Pizza' },
            { value: 'tacos-2', viewValue: 'Tacos' }
        ];
    }
    FormControlComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-form-control',
            template: __webpack_require__(/*! ./form-control.component.html */ "./src/app/element/form-control/form-control.component.html"),
            styles: [__webpack_require__(/*! ./form-control.component.scss */ "./src/app/element/form-control/form-control.component.scss")]
        })
    ], FormControlComponent);
    return FormControlComponent;
}());



/***/ }),

/***/ "./src/app/element/grid/grid.component.html":
/*!**************************************************!*\
  !*** ./src/app/element/grid/grid.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Head Section -->\n<div class=\"head-section bg\">\n    <div class=\"container\">\n        <h4>Grid <span class=\"font-light\">Columns</span></h4>\n        <p>Material css</p>\n    </div>\n</div>\n<!-- End Section -->\n<div class=\"container-page\">\n    <div class=\"box-page\">\n        <!-- Start Pane -->\n        <div class=\"panel\">\n            <div class=\"head-panel\">\n                <h6>Grid CSS</h6>\n            </div>\n            <div class=\"body-panel\">\n                <p class=\"margin-bottom0\">\n                    To add a container just put your content inside a &lt;div&gt; tag with a <strong>container-page</strong> class. Here's an example of how your page might be set up.\n                </p>\n            </div>\n            <div class=\"code\">\n<pre>\n&lt;div class=&quot;container-page&quot;&gt;\n    &lt;!-- Page Content goes here --&gt;\n&lt;/div&gt;\n</pre>\n            </div>\n            <div class=\"head-panel\">\n                <h6>12 Columns</h6>\n            </div>\n            <div class=\"body-panel\">\n                <p>\n                    Our standard grid has 12 columns. No matter the size of the browser, each of these columns will always have an equal width.\n                </p>\n                <div class=\"row\">\n                    <div class=\"col s1\">1</div>\n                    <div class=\"col s1\">2</div>\n                    <div class=\"col s1\">3</div>\n                    <div class=\"col s1\">4</div>\n                    <div class=\"col s1\">5</div>\n                    <div class=\"col s1\">6</div>\n                    <div class=\"col s1\">7</div>\n                    <div class=\"col s1\">8</div>\n                    <div class=\"col s1\">9</div>\n                    <div class=\"col s1\">10</div>\n                    <div class=\"col s1\">11</div>\n                    <div class=\"col s1\">12</div>\n                </div>\n            </div>\n            <div class=\"code\">\n<pre>\n&lt;div class=&quot;row&quot;&gt;\n    &lt;div class=&quot;col s1&quot;&gt;1&lt;/div&gt;\n    &lt;div class=&quot;col s1&quot;&gt;2&lt;/div&gt;\n    &lt;div class=&quot;col s1&quot;&gt;3&lt;/div&gt;\n    &lt;div class=&quot;col s1&quot;&gt;4&lt;/div&gt;\n    &lt;div class=&quot;col s1&quot;&gt;5&lt;/div&gt;\n    &lt;div class=&quot;col s1&quot;&gt;6&lt;/div&gt;\n    &lt;div class=&quot;col s1&quot;&gt;7&lt;/div&gt;\n    &lt;div class=&quot;col s1&quot;&gt;8&lt;/div&gt;\n    &lt;div class=&quot;col s1&quot;&gt;9&lt;/div&gt;\n    &lt;div class=&quot;col s1&quot;&gt;10&lt;/div&gt;\n    &lt;div class=&quot;col s1&quot;&gt;11&lt;/div&gt;\n    &lt;div class=&quot;col s1&quot;&gt;12&lt;/div&gt;\n&lt;/div&gt;\n</pre>\n            </div>\n            <div class=\"head-panel\">\n                <h6>Columns live inside Rows</h6>\n            </div>\n            <div class=\"body-panel\">\n                <div class=\"row\">\n                    <div class=\"col s12\">This div is 12-columns wide on all screen sizes</div>\n                    <div class=\"col s6\">6-columns (one-half)</div>\n                    <div class=\"col s6\">6-columns (one-half)</div>\n                </div>\n            </div>\n            <div class=\"code\">\n<pre>\n&lt;div class=&quot;row&quot;&gt;\n    &lt;div class=&quot;col s12&quot;&gt;This div is 12-columns wide on all screen sizes&lt;/div&gt;\n    &lt;div class=&quot;col s6&quot;&gt;6-columns (one-half)&lt;/div&gt;\n    &lt;div class=&quot;col s6&quot;&gt;6-columns (one-half)&lt;/div&gt;\n&lt;/div&gt;\n</pre>\n            </div>\n            <div class=\"head-panel\">\n                <h6>Offsets</h6>\n            </div>\n            <div class=\"body-panel\">\n                 <div class=\"row\">\n                    <div class=\"col s12\"><span class=\"flow-text\">This div is 12-columns wide on all screen sizes</span></div>\n                    <div class=\"col s6 offset-s6\"><span class=\"flow-text\">6-columns (offset-by-6)</span></div>\n                </div>\n            </div>\n            <div class=\"code\">\n<pre>\n &lt;div class=&quot;row&quot;&gt;\n    &lt;div class=&quot;col s12&quot;&gt;&lt;span class=&quot;flow-text&quot;&gt;This div is 12-columns wide on all screen sizes&lt;/span&gt;&lt;/div&gt;\n    &lt;div class=&quot;col s6 offset-s6&quot;&gt;&lt;span class=&quot;flow-text&quot;&gt;6-columns (offset-by-6)&lt;/span&gt;&lt;/div&gt;\n&lt;/div&gt;\n</pre>\n            </div>\n            <div class=\"head-panel\">\n                <h6>Push and Pull</h6>\n            </div>\n            <div class=\"body-panel\">\n                  <div class=\"row\">\n                    <div class=\"col s7 push-s5\"><span class=\"flow-text\">This div is 7-columns wide on pushed to the right by 5-columns.</span></div>\n                    <div class=\"col s5 pull-s7\"><span class=\"flow-text\">5-columns wide pulled to the left by 7-columns.</span></div>\n                  </div>\n            </div>\n            <div class=\"code\">\n<pre>\n &lt;div class=&quot;row&quot;&gt;\n    &lt;div class=&quot;col s7 push-s5&quot;&gt;&lt;span class=&quot;flow-text&quot;&gt;This div is 7-columns wide on pushed to the right by 5-columns.&lt;/span&gt;&lt;/div&gt;\n    &lt;div class=&quot;col s5 pull-s7&quot;&gt;&lt;span class=&quot;flow-text&quot;&gt;5-columns wide pulled to the left by 7-columns.&lt;/span&gt;&lt;/div&gt;\n&lt;/div&gt;\n</pre>\n            </div>\n            <div class=\"head-panel\">\n                <h6>Screen Sizes</h6>\n            </div>\n            <div class=\"body-panel\">\n                  <table class=\"striped\">\n                      <tr>\n                          <th></th>\n                          <th>Mobile Devices <= 600px</th>\n                          <th>Tablet Devices > 600px</th>\n                          <th>Desktop Devices > 992px</th>\n                          <th>Large Desktop Devices > 1200px</th>\n                      </tr>\n                      <tr>\n                          <td>Class Prefix</td>\n                          <td>.s</td>\n                          <td>.m</td>\n                          <td>.l</td>\n                          <td>.xl</td>\n                      </tr>\n                      <tr>\n                          <td>Container Width</td>\n                          <td>90%</td>\n                          <td>85%</td>\n                          <td>70%</td>\n                          <td>70%</td>\n                      </tr>\n                      <tr>\n                          <td>Number of Columns</td>\n                          <td>12</td>\n                          <td>12</td>\n                          <td>12</td>\n                          <td>12</td>\n                      </tr>\n                  </table>\n            </div>\n        </div>\n        <!-- Start Panel -->\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/element/grid/grid.component.scss":
/*!**************************************************!*\
  !*** ./src/app/element/grid/grid.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row {\n  margin: 0; }\n  .row .col {\n    background: #efefef;\n    border: solid 1px #fff; }\n"

/***/ }),

/***/ "./src/app/element/grid/grid.component.ts":
/*!************************************************!*\
  !*** ./src/app/element/grid/grid.component.ts ***!
  \************************************************/
/*! exports provided: GridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridComponent", function() { return GridComponent; });
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

var GridComponent = /** @class */ (function () {
    function GridComponent() {
    }
    GridComponent.prototype.ngOnInit = function () {
    };
    GridComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-grid',
            template: __webpack_require__(/*! ./grid.component.html */ "./src/app/element/grid/grid.component.html"),
            styles: [__webpack_require__(/*! ./grid.component.scss */ "./src/app/element/grid/grid.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], GridComponent);
    return GridComponent;
}());



/***/ }),

/***/ "./src/app/element/helper/helper.component.html":
/*!******************************************************!*\
  !*** ./src/app/element/helper/helper.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Head Section -->\n<div class=\"head-section bg\">\n    <div class=\"container\">\n        <h4>CSS <span class=\"font-light\">Helper</span></h4>\n        <p>Angushop style helper</p>\n    </div>\n</div>\n<div class=\"container-page\">\n    <div class=\"box-page\">\n        <!-- Start Panel -->\n        <div class=\"panel\">\n            <div class=\"head-panel\">\n                <h6>Vertical Align</h6>\n            </div>\n            <div class=\"body-panel\">\n                <div class=\"valign-wrapper height200\">\n                    <p class=\"margin-bottom0\">This should be vertically aligned</p>\n                </div>\n            </div>\n            <div class=\"code\">\n<pre>\n&#x3C;div class=&#x22;valign-wrapper&#x22;&#x3E;\n  &#x3C;h5&#x3E;This should be vertically aligned&#x3C;/h5&#x3E;\n&#x3C;/div&#x3E;\n</pre>\n            </div>\n        </div>\n\n        <!-- Start Panel -->\n        <div class=\"panel\">\n            <div class=\"head-panel\">\n                <h6>Text Align</h6>\n            </div>\n            <div class=\"body-panel\">\n                <p class=\"line-demo left-align\">This should be vertically aligned</p>\n                <p class=\"line-demo center-align\">This should be vertically aligned</p>\n                <p class=\"line-demo right-align\">This should be vertically aligned</p>\n            </div>\n            <div class=\"code\">\n<pre>\n&#x3C;div class=&#x22;left-align&#x22;&#x3E;This should be vertically aligned&#x3C;/div&#x3E;\n&#x3C;div class=&#x22;center-align&#x22;&#x3E;This should be vertically aligned&#x3C;/div&#x3E;\n&#x3C;div class=&#x22;right-align&#x22;&#x3E;This should be vertically aligned&#x3C;/div&#x3E;\n</pre>\n            </div>\n        </div>\n\n        <!-- Start Panel -->\n        <div class=\"panel\">\n            <div class=\"head-panel\">\n                <h6>Quick Float</h6>\n            </div>\n            <div class=\"code\">\n<pre>\n&#x3C;div class=&#x22;left&#x22;&#x3E;...&#x3C;/div&#x3E;\n&#x3C;div class=&#x22;right&#x22;&#x3E;...&#x3C;/div&#x3E;\n</pre>\n            </div>\n        </div>\n\n        <!-- Start Panel -->\n        <div class=\"panel\">\n            <div class=\"head-panel\">\n                <h6>Quick Floar</h6>\n            </div>\n            <div class=\"body-panel\">\n                <table class=\"striped\">\n                  <thead>\n                    <tr>\n                      <th></th>\n                      <th>Screen Range</th>\n                    </tr>\n                  </thead>\n                    <tbody>\n                    <tr>\n                      <td><strong>.hide</strong></td>\n                      <td>Hidden for all Devices</td>\n                    </tr>\n                    <tr>\n                      <td><strong>.hide-on-small-only</strong></td>\n                      <td>Hidden for Mobile Only</td>\n                    </tr>\n                    <tr>\n                      <td><strong>.hide-on-med-only</strong></td>\n                      <td>Hidden for Tablet Only</td>\n                    </tr>\n                    <tr>\n                      <td><strong>.hide-on-med-and-down</strong></td>\n                      <td>Hidden for Tablet and Below</td>\n                    </tr>\n                    <tr>\n                      <td><strong>.hide-on-med-and-up</strong></td>\n                      <td>Hidden for Tablet and Above</td>\n                    </tr>\n                    <tr>\n                      <td><strong>.hide-on-large-only</strong></td>\n                      <td>Hidden for Desktop Only</td>\n                    </tr>\n                    <tr>\n                      <td><strong>.show-on-small</strong></td>\n                      <td>Show for Mobile Only</td>\n                    </tr>\n                    <tr>\n                      <td><strong>.show-on-medium</strong></td>\n                      <td>Show for Tablet Only</td>\n                    </tr>\n                    <tr>\n                      <td><strong>.show-on-large</strong></td>\n                      <td>Show for Desktop Only</td>\n                    </tr>\n                    <tr>\n                      <td><strong>.show-on-medium-and-up</strong></td>\n                      <td>Show for Tablet and Above</td>\n                    </tr>\n                    <tr>\n                      <td><strong>.show-on-medium-and-down</strong></td>\n                      <td>Show for Tablet and Below</td>\n                    </tr>\n                  </tbody>\n                </table>\n            </div>\n            <div class=\"code\">\n<pre>\n&#x3C;div class=&#x22;hide-on-small-only&#x22;&#x3E;&#x3C;/div&#x3E;\n</pre>\n            </div>\n        </div>\n\n        <!-- Start Panel -->\n        <div class=\"panel\">\n            <div class=\"head-panel\">\n                <h6>Truncation</h6>\n            </div>\n            <div class=\"body-panel\">\n                <div class=\"truncate\">\n                    Lorem ipsum dolor sit amet, eam vitae tantas sadipscing id, eam harum semper partiendo ea. Omnes tation ex mei. Nam deserunt inimicus ex. Purto reprimique est ex. Eirmod similique nam et, dictas recusabo duo cu, ea malorum voluptatum vel.\n                </div>\n            </div>\n            <div class=\"code\">\n<pre>\n&#x3C;div class=&#x22;truncate&#x22;&#x3E;This is an extremely long title that will be truncated&#x3C;/div&#x3E;\n</pre>\n            </div>\n        </div>\n\n        <!-- Start Panel -->\n        <div class=\"panel\">\n            <div class=\"head-panel\">\n                <h6>Margin Helper</h6>\n            </div>\n            <div class=\"body-panel\">\n                <table class=\"striped\">\n                    <tr>\n                        <td width=\"150\"><strong>Margin Top</strong></td>\n                        <td>\n                            .margin-top0<br />\n                            .margin-top10<br />\n                            .margin-top20<br />\n                            .margin-top30<br />\n                            .margin-top40<br />\n                            .margin-top50<br />\n                            .margin-top60<br />\n                            .margin-top70\n                        </td>\n                    </tr>\n                    <tr>\n                        <td width=\"150\"><strong>Margin Bottom</strong></td>\n                        <td>\n                            .margin-bottom0<br />\n                            .margin-bottom10<br />\n                            .margin-bottom20<br />\n                            .margin-bottom30<br />\n                            .margin-bottom40<br />\n                            .margin-bottom50<br />\n                            .margin-bottom60<br />\n                            .margin-bottom70\n                        </td>\n                    </tr>\n                    <tr>\n                        <td width=\"150\"><strong>Margin Left</strong></td>\n                        <td>\n                            .margin-left5<br />\n                            .margin-left10<br />\n                            .margin-left15<br />\n                            .margin-left20\n                        </td>\n                    </tr>\n                    <tr>\n                        <td width=\"150\"><strong>Margin Right</strong></td>\n                        <td>\n                            .margin-right5<br />\n                            .margin-right10<br />\n                            .margin-right15<br />\n                            .margin-right20\n                        </td>\n                    </tr>\n                </table>\n            </div>\n            <div class=\"code\">\n<pre>\n&#x3C;div class=&#x22;margin-top70&#x22;&#x3E;&#x3C;/div&#x3E;\n</pre>\n            </div>\n        </div>\n\n        <!-- Start Panel -->\n        <div class=\"panel\">\n            <div class=\"head-panel\">\n                <h6>Padding Helper</h6>\n            </div>\n            <div class=\"body-panel\">\n                <table class=\"striped\">\n                    <tr>\n                        <td width=\"150\"><strong>Padding Top</strong></td>\n                        <td>\n                            .padding-top0<br />\n                            .padding-top10<br />\n                            .padding-top20<br />\n                            .padding-top30<br />\n                            .padding-top40<br />\n                            .padding-top50<br />\n                            .padding-top60<br />\n                            .padding-top70\n                        </td>\n                    </tr>\n                    <tr>\n                        <td width=\"150\"><strong>Padding Bottom</strong></td>\n                        <td>\n                            .padding-bottom0<br />\n                            .padding-bottom10<br />\n                            .padding-bottom20<br />\n                            .padding-bottom30<br />\n                            .padding-bottom40<br />\n                            .padding-bottom50<br />\n                            .padding-bottom60<br />\n                            .padding-bottom70\n                        </td>\n                    </tr>\n                    <tr>\n                        <td width=\"150\"><strong>Padding Left</strong></td>\n                        <td>\n                            .padding-left30<br />\n                            .padding-left40<br />\n                            .padding-left50\n                        </td>\n                    </tr>\n                    <tr>\n                        <td width=\"150\"><strong>Padding Right</strong></td>\n                        <td>\n                            .padding-right30<br />\n                            .padding-right40<br />\n                            .padding-right50\n                        </td>\n                    </tr>\n                </table>\n            </div>\n            <div class=\"code\">\n<pre>\n&#x3C;div class=&#x22;padding-top70&#x22;&#x3E;&#x3C;/div&#x3E;\n</pre>\n            </div>\n        </div>\n\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/element/helper/helper.component.scss":
/*!******************************************************!*\
  !*** ./src/app/element/helper/helper.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".height200 {\n  background: #efefef;\n  height: 200px; }\n\n.line-demo {\n  background: #efefef;\n  padding: 15px 20px; }\n\ntable tr td {\n  vertical-align: top;\n  border: solid 1px #eee;\n  padding: 15px 20px; }\n"

/***/ }),

/***/ "./src/app/element/helper/helper.component.ts":
/*!****************************************************!*\
  !*** ./src/app/element/helper/helper.component.ts ***!
  \****************************************************/
/*! exports provided: HelperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelperComponent", function() { return HelperComponent; });
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

var HelperComponent = /** @class */ (function () {
    function HelperComponent() {
    }
    HelperComponent.prototype.ngOnInit = function () {
    };
    HelperComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-helper',
            template: __webpack_require__(/*! ./helper.component.html */ "./src/app/element/helper/helper.component.html"),
            styles: [__webpack_require__(/*! ./helper.component.scss */ "./src/app/element/helper/helper.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HelperComponent);
    return HelperComponent;
}());



/***/ }),

/***/ "./src/app/element/layout/layout.component.html":
/*!******************************************************!*\
  !*** ./src/app/element/layout/layout.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Head Section -->\n<div class=\"head-section bg\">\n    <div class=\"container\">\n        <h4>Layout</h4>\n        <p>Material layout</p>\n    </div>\n</div>\n<div class=\"container-page\">\n    <div class=\"box-page\">\n        <!-- Start Panel -->\n        <div class=\"panel\">\n            <div class=\"head-panel\">\n                <h6>Tab</h6>\n            </div>\n            <div class=\"body-panel\">\n                <!-- Start Tab -->\n                <mat-tab-group>\n                    <mat-tab label=\"Tab 1\">Content 1</mat-tab>\n                    <mat-tab label=\"Tab 2\">Content 2</mat-tab>\n                </mat-tab-group>\n            </div>\n            <div class=\"code\">\n<pre>\n&#x3C;mat-tab-group&#x3E;\n  &#x3C;mat-tab label=&#x22;Tab 1&#x22;&#x3E;Content 1&#x3C;/mat-tab&#x3E;\n  &#x3C;mat-tab label=&#x22;Tab 2&#x22;&#x3E;Content 2&#x3C;/mat-tab&#x3E;\n&#x3C;/mat-tab-group&#x3E;\n</pre>\n            </div>\n        </div>\n\n        <!-- Start Panel -->\n        <div class=\"panel\">\n            <div class=\"head-panel\">\n                <h6>List</h6>\n            </div>\n            <div class=\"body-panel\">\n                <!-- Start Tab -->\n                <mat-list>\n                    <mat-list-item>Item 1</mat-list-item>\n                    <mat-list-item>Item 2</mat-list-item>\n                    <mat-list-item>Item 3</mat-list-item>\n                </mat-list>\n            </div>\n            <div class=\"code\">\n<pre>\n&#x3C;mat-list&#x3E;\n    &#x3C;mat-list-item&#x3E;Item 1&#x3C;/mat-list-item&#x3E;\n    &#x3C;mat-list-item&#x3E;Item 2&#x3C;/mat-list-item&#x3E;\n    &#x3C;mat-list-item&#x3E;Item 3&#x3C;/mat-list-item&#x3E;\n&#x3C;mat-list&#x3E;\n</pre>\n            </div>\n            <div class=\"body-panel\">\n                <!-- Start Tab -->\n                <mat-list>\n                    <mat-list-item>\n                        <mat-icon mat-list-icon>&#xE55F;</mat-icon>\n                        <h6 mat-line>Office</h6>\n                        <p mat-line>Jl.Kampung Nagrogjaya RT 12/003</p>\n                    </mat-list-item>\n                    <mat-list-item>\n                        <mat-icon mat-list-icon>&#xE551;</mat-icon>\n                        <h6 mat-line>Phone</h6>\n                        <p mat-line>+6289664755286</p>\n                    </mat-list-item>\n                    <mat-list-item>\n                        <mat-icon mat-list-icon>&#xE0BE;</mat-icon>\n                        <h6 mat-line>Phone</h6>\n                        <p mat-line>adamnurdin01@gmail.com</p>\n                    </mat-list-item>\n                </mat-list>\n            </div>\n            <div class=\"code\">\n<pre>\n&#x3C;mat-list&#x3E;\n    &#x3C;mat-list-item&#x3E;\n        &#x3C;mat-icon mat-list-icon&#x3E;&#x26;#xE55F;&#x3C;/mat-icon&#x3E;\n        &#x3C;h6 mat-line&#x3E;Office&#x3C;/h6&#x3E;\n        &#x3C;p mat-line&#x3E;Jl.Kampung Nagrogjaya RT 12/003&#x3C;/p&#x3E;\n    &#x3C;/mat-list-item&#x3E;\n    &#x3C;mat-list-item&#x3E;\n        &#x3C;mat-icon mat-list-icon&#x3E;&#x26;#xE551;&#x3C;/mat-icon&#x3E;\n        &#x3C;h6 mat-line&#x3E;Phone&#x3C;/h6&#x3E;\n        &#x3C;p mat-line&#x3E;+6289664755286&#x3C;/p&#x3E;\n    &#x3C;/mat-list-item&#x3E;\n    &#x3C;mat-list-item&#x3E;\n        &#x3C;mat-icon mat-list-icon&#x3E;&#x26;#xE0BE;&#x3C;/mat-icon&#x3E;\n        &#x3C;h6 mat-line&#x3E;Phone&#x3C;/h6&#x3E;\n        &#x3C;p mat-line&#x3E;adamnurdin01@gmail.com&#x3C;/p&#x3E;\n    &#x3C;/mat-list-item&#x3E;\n&#x3C;/mat-list&#x3E;\n</pre>\n            </div>\n        </div>\n\n        <!-- Start Panel -->\n        <div class=\"panel\">\n            <div class=\"head-panel\">\n                <h6>Breadcumb</h6>\n            </div>\n            <div class=\"body-panel\">\n                <breadcumb></breadcumb>\n            </div>\n            <div class=\"code\">\n<pre>\n&#x3C;breadcumb&#x3E;&#x3C;/breadcumb&#x3E;\n</pre>\n            </div>\n        </div>\n\n        <!-- Start Panel -->\n        <div class=\"panel\">\n            <div class=\"head-panel\">\n                <h6>Rating</h6>\n            </div>\n            <div class=\"body-panel\">\n                <rating [value]=\"3\"></rating>\n            </div>\n            <div class=\"code\">\n<pre>\n&#x3C;rating [value]=&#x22;3&#x22;&#x3E;&#x3C;/rating&#x3E;\n</pre>\n            </div>\n        </div>\n\n        <!-- Start Panel -->\n        <div class=\"panel\">\n            <div class=\"head-panel\">\n                <h6>Alert Box</h6>\n            </div>\n            <div class=\"body-panel\">\n                <div class=\"alert alert-success margin-bottom15\">\n                    <strong>Success!</strong> Indicates a successful or positive action.\n                </div>\n                \n                <div class=\"alert alert-info margin-bottom15\">\n                    <strong>Info!</strong> Indicates a neutral informative change or action.\n                </div>\n                \n                <div class=\"alert alert-warning margin-bottom15\">\n                    <strong>Warning!</strong> Indicates a warning that might need attention.\n                </div>\n                \n                <div class=\"alert alert-danger\">\n                    <strong>Danger!</strong> Indicates a dangerous or potentially negative action.\n                </div>\n            </div>\n            <div class=\"code\">\n<pre>\n&#x3C;div class=&#x22;alert alert-success&#x22;&#x3E;\n    &#x3C;strong&#x3E;Success!&#x3C;/strong&#x3E; Indicates a successful or positive action.\n&#x3C;/div&#x3E;\n\n&#x3C;div class=&#x22;alert alert-info&#x22;&#x3E;\n    &#x3C;strong&#x3E;Info!&#x3C;/strong&#x3E; Indicates a neutral informative change or action.\n&#x3C;/div&#x3E;\n\n&#x3C;div class=&#x22;alert alert-warning&#x22;&#x3E;\n    &#x3C;strong&#x3E;Warning!&#x3C;/strong&#x3E; Indicates a warning that might need attention.\n&#x3C;/div&#x3E;\n\n&#x3C;div class=&#x22;alert alert-danger&#x22;&#x3E;\n    &#x3C;strong&#x3E;Danger!&#x3C;/strong&#x3E; Indicates a dangerous or potentially negative action.\n&#x3C;/div&#x3E;\n</pre>\n            </div>\n        </div>\n\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/element/layout/layout.component.scss":
/*!******************************************************!*\
  !*** ./src/app/element/layout/layout.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row {\n  margin: 0 -15px; }\n\nmat-card-title {\n  margin-bottom: 0; }\n"

/***/ }),

/***/ "./src/app/element/layout/layout.component.ts":
/*!****************************************************!*\
  !*** ./src/app/element/layout/layout.component.ts ***!
  \****************************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LayoutComponent = /** @class */ (function () {
    function LayoutComponent() {
        // List
        this.folders = [
            {
                name: 'Photos',
                updated: new Date('1/1/16'),
            },
            {
                name: 'Recipes',
                updated: new Date('1/17/16'),
            },
            {
                name: 'Work',
                updated: new Date('1/28/16'),
            }
        ];
        this.notes = [
            {
                name: 'Vacation Itinerary',
                updated: new Date('2/20/16'),
            },
            {
                name: 'Kitchen Remodel',
                updated: new Date('1/18/16'),
            }
        ];
        // Grid
        this.tiles = [
            { text: 'One', cols: 3, rows: 1, color: 'lightblue' },
            { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
            { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
            { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },
        ];
    }
    LayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__(/*! ./layout.component.html */ "./src/app/element/layout/layout.component.html"),
            styles: [__webpack_require__(/*! ./layout.component.scss */ "./src/app/element/layout/layout.component.scss")]
        })
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "./src/app/element/product/product.component.html":
/*!********************************************************!*\
  !*** ./src/app/element/product/product.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Head Section -->\n<div class=\"head-section bg\">\n    <div class=\"container\">\n        <h4>Product <span class=\"font-light\">Element</span></h4>\n        <p>Angushop product element</p>\n    </div>\n</div>\n<div class=\"container-page\">\n    <div class=\"box-page padding-bottom40\">\n        <div class=\"wrap-product\">\n            <!-- App Product -->\n            <app-product \n                [setlimit]=\"4\" \n                [paginate]=\"false\"\n                (detail)=\"detailProduct($event)\"\n            ></app-product>\n        </div>\n        <blockquote class=\"margin-top50\">\n            Documentation product element included in angushop file package\n        </blockquote>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/element/product/product.component.scss":
/*!********************************************************!*\
  !*** ./src/app/element/product/product.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrap-product {\n  padding: 0 15px; }\n"

/***/ }),

/***/ "./src/app/element/product/product.component.ts":
/*!******************************************************!*\
  !*** ./src/app/element/product/product.component.ts ***!
  \******************************************************/
/*! exports provided: ProductElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductElement", function() { return ProductElement; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductElement = /** @class */ (function () {
    function ProductElement(router) {
        this.router = router;
        this.objectNavigation = {};
    }
    // Detail Product
    ProductElement.prototype.detailProduct = function (e) {
        var product = lodash__WEBPACK_IMPORTED_MODULE_2__["kebabCase"](e.slug);
        this.router.navigate(['shop/p/' + product]);
    };
    ProductElement = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'product-element',
            template: __webpack_require__(/*! ./product.component.html */ "./src/app/element/product/product.component.html"),
            styles: [__webpack_require__(/*! ./product.component.scss */ "./src/app/element/product/product.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ProductElement);
    return ProductElement;
}());



/***/ }),

/***/ "./src/app/element/typhography/typhography.component.html":
/*!****************************************************************!*\
  !*** ./src/app/element/typhography/typhography.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Head Section -->\n<div class=\"head-section bg\">\n    <div class=\"container\">\n        <h4>Typography</h4>\n        <p>Material Font</p>\n    </div>\n</div>\n<div class=\"container-page\">\n    <div class=\"box-page\">\n        <!-- Start Slide Toggle -->\n        <div class=\"panel\">\n            <div class=\"head-panel\">\n                <h6>Typography</h6>\n            </div>\n            <div class=\"body-panel\">\n                <div class=\"row\">\n                    <div class=\"col m4\">\n                        <p>\n                            We bundle our framework with the latest iteration of Roboto Google has released. It comes with 5 different font weights you can use: 100, 300, 400, 500, 600.\n                        </p>\n                        <p>\n                            Here is an image from Google's Roboto Specimen document displaying the different font weights.\n                        </p>\n                    </div>\n                    <div class=\"col m8\">\n                        <img src=\"https://storage.googleapis.com/material-design/publish/material_v_12/assets/0Bx4BSt6jniD7SW9CUzR4MnRpOTg/style-typography-roboto1.png\" class=\"responsive-img\" alt=\"\" />\n                    </div>\n                </div>\n            </div>\n            <div class=\"head-panel\">\n                <h6>Heading</h6>\n            </div>\n            <div class=\"body-panel\">\n                <h1>Heading h1</h1>\n                <h2>Heading h2</h2>\n                <h3>Heading h3</h3>\n                <h4>Heading h4</h4>\n                <h5>Heading h5</h5>\n                <h6 class=\"margin-bottom0\">Heading h6</h6>\n            </div>\n            <div class=\"code\">\n<pre>\n&#x3C;h1&#x3E;Heading h1&#x3C;/h1&#x3E;\n&#x3C;h2&#x3E;Heading h2&#x3C;/h2&#x3E;\n&#x3C;h3&#x3E;Heading h3&#x3C;/h3&#x3E;\n&#x3C;h4&#x3E;Heading h4&#x3C;/h4&#x3E;\n&#x3C;h5&#x3E;Heading h5&#x3C;/h5&#x3E;\n&#x3C;h6&#x3E;Heading h6&#x3C;/h6&#x3E;\n</pre>\n            </div>\n            <div class=\"head-panel\">\n                <h6>Blockquote</h6>\n            </div>\n            <div class=\"body-panel\">\n                <blockquote>\n                  This is an example quotation that uses the blockquote tag.\n                </blockquote>\n            </div>\n            <div class=\"code\">\n<pre>\n&#x3C;blockquote&#x3E;\n    This is an example quotation that uses the blockquote tag.\n&#x3C;/blockquote&#x3E;\n</pre>\n            </div>\n            <div class=\"head-panel\">\n                <h6>Flow Text</h6>\n            </div>\n            <div class=\"body-panel\">\n                <p class=\"flow-text\">\n                    One common flaw we've seen in many frameworks is a lack of support for truly responsive text. While elements on the page resize fluidly, text still resizes on a fixed basis. To ameliorate this problem, for text heavy pages, we've created a class that fluidly scales text size and line-height to optimize readability for the user. Line length stays between 45-80 characters and line height scales to be larger on smaller screens.\n                </p>\n            </div>\n            <div class=\"code\">\n<pre>\n&#x3C;p class=&#x22;flow-text&#x22;&#x3E;\n    One common flaw we&#x27;ve seen in many frameworks is a lack of support for truly responsive text. While elements on the page resize fluidly, text still resizes on a fixed basis. To ameliorate this problem, for text heavy pages, we&#x27;ve created a class that fluidly scales text size and line-height to optimize readability for the user. Line length stays between 45-80 characters and line height scales to be larger on smaller screens.\n&#x3C;/p&#x3E;\n</pre>\n            </div>\n        </div>\n\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/element/typhography/typhography.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/element/typhography/typhography.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/element/typhography/typhography.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/element/typhography/typhography.component.ts ***!
  \**************************************************************/
/*! exports provided: TyphographyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TyphographyComponent", function() { return TyphographyComponent; });
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

var TyphographyComponent = /** @class */ (function () {
    function TyphographyComponent() {
    }
    TyphographyComponent.prototype.ngOnInit = function () {
    };
    TyphographyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-typhography',
            template: __webpack_require__(/*! ./typhography.component.html */ "./src/app/element/typhography/typhography.component.html"),
            styles: [__webpack_require__(/*! ./typhography.component.scss */ "./src/app/element/typhography/typhography.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TyphographyComponent);
    return TyphographyComponent;
}());



/***/ }),

/***/ "./src/app/home/categories/categories.component.html":
/*!***********************************************************!*\
  !*** ./src/app/home/categories/categories.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\n  <div *ngIf=\"parent\" class=\"row\">\n      <div class=\"col-sm-12 text-center\" style=\"padding-top: 3px\">\n          <h4><strong>{{parent.categories_name}}</strong></h4>\n          <img width=\"100%\" src=\"{{imgUrl}}{{parent.categories_image_header}}\" alt=\"\">\n      </div>\n  </div> <!-- row -->\n\n  <div class=\"row\">\n\n      <ng-container *ngIf=\"!subCategories\">\n              <div class=\"col-12 text-center\">\n                    <img width=\"14%\" src=\"/assets/images/loader.svg\" alt=\"\">\n                      <h6>loading...</h6>\n                  </div>\n      </ng-container>\n      \n      <ng-container *ngIf=\"subCategories\">\n              <div *ngFor=\"let item of subCategories\" class=\"col-sm-3 card_plate\">\n                      <div class=\"card text-center\" (click)=\"getProduct(item)\">\n                              <img class=\"card-img-top\" width=\"40%\" src=\"{{imgUrl}}resized_{{item.categories_image}}\" alt=\"{{item.categories_name}}\" (click)=\"getProduct(item)\">\n                              <div class=\"card-body\">\n                                  <!-- <a class=\"shop_now_btn\" href=\"javascript:void(0)\"><img src=\"assets/images/shop_now_button.png\" (click)=\"subCat(item)\" width=\"250\" alt=\"Shop Now\"></a> -->\n      \n                                      <div class=\"well\">\n                                              <h5 style=\"font-size: 20px;\" class=\"card-title \" (click)=\"getProduct(item)\">{{item.categories_name}}</h5>\n                                              <!-- <p class=\"card-text\">{{item.desc}}</p> -->\n                                      </div>\n                                \n                                \n                              </div>\n                            </div>\n              </div>\n      </ng-container>\n     \n  </div>\n\n</div> <!-- container-fluid -->"

/***/ }),

/***/ "./src/app/home/categories/categories.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/home/categories/categories.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\nImport\r\n=========================== */\n/* -------------------------------------------------------------\n  Sass CSS3 Mixins! The Cross-Browser CSS3 Sass Library\n  By: Matthieu Aussaguel, http://www.mynameismatthieu.com, @matthieu_tweets\n\n  List of CSS3 Sass Mixins File to be @imported and @included as you need\n\n  The purpose of this library is to facilitate the use of CSS3 on different browsers avoiding HARD TO READ and NEVER\n  ENDING css files\n\n  note: All CSS3 Properties are being supported by Safari 5\n  more info: http://www.findmebyip.com/litmus/#css3-properties\n\n------------------------------------------------------------- */\n/*\nColor\n=========================== */\n/*\nFont Family\n=========================== */\n.material-icons {\n  font-family: 'Material Icons';\n  font-weight: normal;\n  line-height: 20px; }\n.material-icons {\n  font-family: 'Material Icons';\n  font-weight: normal;\n  line-height: 20px; }\n/*\r\nBanner\r\n=========================== */\n.well {\n  background-color: #fff;\n  border: 0px solid #fff;\n  margin-bottom: 0px;\n  padding-bottom: 0px; }\n.card {\n  border: 1px solid #c3c3c3;\n  padding: 1em;\n  cursor: pointer; }\n.card:hover h5 {\n  color: #dc232f; }\n.card-text {\n  font-weight: 600;\n  color: #000; }\n.card-title {\n  text-transform: none; }\n.card_plate {\n  margin: 10px 0 10px 0; }\n.shop_now_btn img {\n  margin: 1em; }\n.footerblock {\n  background: #fff;\n  margin: 20px;\n  box-shadow: 1px 2px 2px 0px;\n  padding: 8px 10px;\n  min-height: 70px;\n  border: 1px solid #d8d8d8; }\n.text-danger {\n  color: #dc232f; }\n.btn-primary {\n  color: #fff;\n  background-color: #337ab7;\n  border-color: #6b696b;\n  border-radius: 0px;\n  width: 50%;\n  margin: 1em;\n  background-color: #6b696b !important;\n  font-size: x-large;\n  font-weight: bold; }\n.well {\n  background-color: #fff; }\n.banner {\n  padding: 60px 0 0 0;\n  background-color: #f5f5f5;\n  background-image: url(\"/assets/images/bg/brick-wall.png\");\n  position: relative; }\n.banner:before {\n    content: '';\n    position: absolute;\n    z-index: 1;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: rgba(0, 0, 0, 0.1);\n    /* For browsers that do not support gradients */\n    /* For Safari 5.1 to 6.0 */\n    /* For Opera 11.1 to 12.0 */\n    /* For Firefox 3.6 to 15 */\n    background: linear-gradient(rgba(0, 0, 0, 0.1), #f5f5f5);\n    /* Standard syntax */ }\n.banner .row {\n    margin-top: 0;\n    margin-bottom: 0;\n    position: relative;\n    z-index: 2; }\n.banner .row .content {\n      padding-top: 115px;\n      margin-bottom: 25px; }\n.banner .row .content .sub-title {\n        text-transform: uppercase; }\n.banner .row .content .title {\n        margin: 15px 0 40px 0;\n        text-transform: none; }\n.banner .wrap-demo {\n    height: auto;\n    padding: 0 15px; }\n.banner img {\n    display: block; }\n/*\r\nCategory\r\n=========================== */\n.wrap-feature {\n  display: block;\n  position: relative; }\n.wrap-feature .container {\n    position: relative;\n    z-index: 2; }\n.wrap-feature .row {\n    margin: 0; }\n.wrap-feature .col {\n    padding: 0;\n    margin: -0.5px; }\n.wrap-feature .item-feature {\n    padding: 20px 35px 20px 65px;\n    border: solid 1px #efefef;\n    background: #fff;\n    position: relative;\n    -ms-box-shadow: rgba(147, 147, 147, 0.1) 0 1px 15px 1px;\n    -o-box-shadow: rgba(147, 147, 147, 0.1) 0 1px 15px 1px;\n    box-shadow: rgba(147, 147, 147, 0.1) 0 1px 15px 1px;\n    overflow: hidden; }\n.wrap-feature .item-feature mat-icon {\n      position: absolute;\n      font-size: 24px;\n      top: 25px;\n      left: 25px;\n      filter: alpha(opacity=70);\n      -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=70)\";\n      -webkit-opacity: 0.7;\n      -khtml-opacity: 0.7;\n      -moz-opacity: 0.7;\n      -ms-opacity: 0.7;\n      -o-opacity: 0.7;\n      opacity: 0.7; }\n.wrap-feature .item-feature mat-icon.bg {\n        color: #8f8f8f;\n        filter: alpha(opacity=10);\n        -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=10)\";\n        -webkit-opacity: 0.1;\n        -khtml-opacity: 0.1;\n        -moz-opacity: 0.1;\n        -ms-opacity: 0.1;\n        -o-opacity: 0.1;\n        opacity: 0.1;\n        font-size: 100px;\n        left: 100%;\n        top: 100%;\n        margin: -50px 0 0 -80px;\n        z-index: 1; }\n.wrap-feature .item-feature .title {\n      text-transform: capitalize;\n      position: relative;\n      z-index: 2; }\n.wrap-feature .item-feature p {\n      margin-bottom: 0;\n      position: relative;\n      z-index: 2; }\n.wrap-feature:before {\n    content: '';\n    position: absolute;\n    z-index: 1;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 50%;\n    background-color: #f5f5f5;\n    border-bottom: solid 1px #efefef; }\n/*\r\nResponsive\r\n=========================== */\n@media (max-width: 1200px) {\n  .banner .row .content {\n    padding-top: 70px; }\n  .banner .row img {\n    max-width: 300px;\n    margin: 0 auto !important; } }\n@media (max-width: 767px) {\n  .banner .row .content {\n    text-align: center;\n    padding-top: 0;\n    margin-bottom: 55px; }\n  .banner .row .col {\n    width: 100%; }\n  .product-home {\n    padding: 0 25px; } }\n@media (max-width: 360px) {\n  .banner .row img {\n    max-width: 200px; } }\n"

/***/ }),

/***/ "./src/app/home/categories/categories.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/home/categories/categories.component.ts ***!
  \*********************************************************/
/*! exports provided: CategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesComponent", function() { return CategoriesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_lib_service_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/lib/service/product.service */ "./src/app/lib/service/product.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CategoriesComponent = /** @class */ (function () {
    function CategoriesComponent(router, _productService, route) {
        this.router = router;
        this._productService = _productService;
        this.route = route;
        this.imgUrl = 'https://www.licenseplates.tv/images/';
    }
    CategoriesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            return _this.getSubCat(params.id);
        });
    };
    CategoriesComponent.prototype.getSubCat = function (id) {
        var _this = this;
        if (id == '000') {
            this.router.navigateByUrl('special-request');
        }
        else {
            this._productService.getSubCategory(id)
                .subscribe(function (res) {
                console.log('sub cat res ', res);
                _this.subCategories = res.category;
                console.log(_this.subCategories);
                _this.parent = res.parent;
            });
        }
    };
    CategoriesComponent.prototype.getProduct = function (item) {
        if (item.subcategory) {
            this.getSubCat(item.categories_id);
        }
        else {
            this.router.navigateByUrl('categories/' + item.categories_id);
        }
    };
    CategoriesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-categories',
            template: __webpack_require__(/*! ./categories.component.html */ "./src/app/home/categories/categories.component.html"),
            styles: [__webpack_require__(/*! ./categories.component.scss */ "./src/app/home/categories/categories.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            app_lib_service_product_service__WEBPACK_IMPORTED_MODULE_2__["productService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], CategoriesComponent);
    return CategoriesComponent;
}());



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home1_home1_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home1/home1.component */ "./src/app/home/home1/home1.component.ts");
/* harmony import */ var _home2_home2_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home2/home2.component */ "./src/app/home/home2/home2.component.ts");
/* harmony import */ var _home2_home_slide_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home2/home-slide.directive */ "./src/app/home/home2/home-slide.directive.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _lib_lib_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../lib/lib.module */ "./src/app/lib/lib.module.ts");
/* harmony import */ var _categories_categories_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./categories/categories.component */ "./src/app/home/categories/categories.component.ts");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./product/product.component */ "./src/app/home/product/product.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// Component



// Material



// Anguushop Lib



// import { CartComponent } from './cart/cart.component';
var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
                _lib_lib_module__WEBPACK_IMPORTED_MODULE_11__["libModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]
            ],
            declarations: [
                _home1_home1_component__WEBPACK_IMPORTED_MODULE_5__["Home1Component"],
                _home2_home2_component__WEBPACK_IMPORTED_MODULE_6__["Home2Component"],
                _home2_home_slide_directive__WEBPACK_IMPORTED_MODULE_7__["HomeslideDirective"],
                _categories_categories_component__WEBPACK_IMPORTED_MODULE_12__["CategoriesComponent"],
                _product_product_component__WEBPACK_IMPORTED_MODULE_13__["ProductComponent"]
            ],
            exports: [_home1_home1_component__WEBPACK_IMPORTED_MODULE_5__["Home1Component"], _home2_home2_component__WEBPACK_IMPORTED_MODULE_6__["Home2Component"]]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "./src/app/home/home1/data.ts":
/*!************************************!*\
  !*** ./src/app/home/home1/data.ts ***!
  \************************************/
/*! exports provided: HomeModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModal", function() { return HomeModal; });
// European Plates - 2
// USA / State Plates - 1
// International Plates - 3
// GCC License Plates - 1395
// License Plates Frames - 30
// Custom/Fun License Plates - 28
// Motorcycle Plates - 442
// Military License Plates - 302
// Canadian License Plates - 1424
// Nautical License Plates - 27
// Flag License Plates/Oval ID - 23
// Sport/Hobby License Plates - 651
// Religious License Plates - 26
// Hitch Covers - 428
// Key Chains - 287
// Auto Brand License Plates - 22
// Promotional License Plates - 909
var HomeModal = [
    {
        id: '2',
        title: 'European License Plates',
        desc: 'Expertly created to replicate the original European craftsmanship.',
        image: 'european-license-plates.png'
    },
    {
        id: '1',
        title: 'USA/State License Plates',
        desc: 'Year of manufacture license plates from nearly all 50 states.',
        image: 'usa-state-license-plates.png'
    },
    {
        id: '3',
        title: 'International License Plates',
        desc: 'Expertly created to replicate the originals from around the world.',
        image: 'international-license-plates.png'
    },
    {
        id: '1395',
        title: 'GCC License Plates',
        desc: 'Expertly created to replicate the originals from the entire GCC.',
        image: 'gcc-license-plates.png'
    },
    {
        id: '30',
        title: 'License Plates Frames',
        desc: 'Quality assured and Eco-Friendly made from premium materials.',
        image: 'license-plate-frames.png'
    },
    {
        id: '28',
        title: 'Custom/Fun License Plates',
        desc: 'Personalized License Plates that are unique and fun for you.',
        image: 'custom-fun-license-plates.png'
    },
    {
        id: '442',
        title: 'Motorcycle License Plates',
        desc: 'Expertly created to replicate the originals perfect for your bike.',
        image: 'motorcycle-license-plates.png'
    },
    {
        id: '302',
        title: 'Military License Plates',
        desc: 'We support our troops, past and present and so can you.',
        image: 'military-license-plates.png'
    },
    {
        id: '1424',
        title: 'Canadian License Plates',
        desc: 'Expertly created to replicate the original Canadian craftsmanship.',
        image: 'canadian-license-plates.png'
    },
    {
        id: '27',
        title: 'Nautical License Plates',
        desc: 'Personalized plates for sea dogs like you.',
        image: 'nautical-license-plates.png'
    },
    {
        id: '23',
        title: 'Flag License Plates/Oval ID',
        desc: 'Represent your country with one of these unique license plates.',
        image: 'flag-license-plates-oval-id.png'
    },
    {
        id: '651',
        title: 'Sport/Hobby License Plates',
        desc: 'Hello sports fans, rep your team with one of these.',
        image: 'sport-hobby-license-plates.png'
    },
    {
        id: '26',
        title: 'Religious License Plates',
        desc: 'REJOICE! Express your faith with a Religious license plate.',
        image: 'religious-license-plates.png'
    },
    {
        id: '428',
        title: 'Hitch Covers',
        desc: 'Chromed solid brass hitch cover wit stainless steel post.',
        image: 'hitch-covers.png'
    },
    {
        id: '287',
        title: 'Key Chains',
        desc: 'Luxuriously made from premium grade enduring metal alloy.',
        image: 'key-chains.png'
    },
    {
        id: '22',
        title: 'Auto Brand License Plates',
        desc: 'Add the finishing touches to your ride with one of these.',
        image: 'auto-brand-license-plates.png'
    },
    {
        id: '909',
        title: 'Promotional License Plates',
        desc: 'Have a business? Promote it! Its simple with one of these.',
        image: 'promotional-license-plates.png'
    },
    {
        id: '000',
        title: 'Special Request',
        desc: 'Don\'t see what you want or have a unique idea? contact us, we can help.',
        image: 'special-request.png'
    }
];


/***/ }),

/***/ "./src/app/home/home1/home1.component.html":
/*!*************************************************!*\
  !*** ./src/app/home/home1/home1.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\n    <div class=\"row\">\n        <div class=\"col-sm-12 text-center\">\n            <img width=\"100%\" src=\"{{slider}}\" alt=\"\">\n        </div>\n    </div> <!-- row -->\n\n    <div class=\"row\">\n\n        <ng-container *ngIf=\"!categories\">\n                <div class=\"col-sm-4 text-center\">\n                        <img width=\"14%\" src=\"/assets/images/loader.svg\" alt=\"\">\n                        <h6>loading...</h6>\n                    </div>\n        </ng-container>\n        \n        <ng-container *ngIf=\"categories\">\n                <div *ngFor=\"let item of categories\" class=\"col-sm-4 card_plate\">\n                        <div class=\"card text-center\">\n                                <img class=\"card-img-top\" width=\"80%\" src=\"{{staticImgUrl}}{{item.image}}\" alt=\"{{item.title}}\" (click)=\"subCat(item)\">\n                                <div class=\"card-body\">\n                                    <a class=\"shop_now_btn\" href=\"javascript:void(0)\"><img src=\"assets/images/shop_now_button.png\" (click)=\"subCat(item)\" width=\"250\" alt=\"Shop Now\"></a>\n        \n                                        <div class=\"well footerblock\">\n                                                <h5 style=\"font-size: 20px;\" class=\"card-title text-danger\" (click)=\"subCat(item)\">{{item.title}}</h5>\n                                                <p class=\"card-text\">{{item.desc}}</p>\n                                        </div>\n                                  \n                                  \n                                </div>\n                              </div>\n                </div>\n        </ng-container>\n       \n    </div>\n\n</div> <!-- container-fluid -->"

/***/ }),

/***/ "./src/app/home/home1/home1.component.scss":
/*!*************************************************!*\
  !*** ./src/app/home/home1/home1.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\nImport\r\n=========================== */\n/* -------------------------------------------------------------\n  Sass CSS3 Mixins! The Cross-Browser CSS3 Sass Library\n  By: Matthieu Aussaguel, http://www.mynameismatthieu.com, @matthieu_tweets\n\n  List of CSS3 Sass Mixins File to be @imported and @included as you need\n\n  The purpose of this library is to facilitate the use of CSS3 on different browsers avoiding HARD TO READ and NEVER\n  ENDING css files\n\n  note: All CSS3 Properties are being supported by Safari 5\n  more info: http://www.findmebyip.com/litmus/#css3-properties\n\n------------------------------------------------------------- */\n/*\nColor\n=========================== */\n/*\nFont Family\n=========================== */\n.material-icons {\n  font-family: 'Material Icons';\n  font-weight: normal;\n  line-height: 20px; }\n.material-icons {\n  font-family: 'Material Icons';\n  font-weight: normal;\n  line-height: 20px; }\n/*\r\nBanner\r\n=========================== */\n.card {\n  border: 1px solid #c3c3c3;\n  padding: 1em; }\n.card-text {\n  font-weight: 600;\n  color: #000; }\n.card-title {\n  text-transform: none; }\n.card_plate {\n  margin: 10px 0 10px 0; }\n.shop_now_btn img {\n  margin: 1em; }\n.footerblock {\n  background: #fff;\n  margin: 20px;\n  box-shadow: 1px 2px 2px 0px;\n  padding: 8px 10px;\n  min-height: 70px;\n  border: 1px solid #d8d8d8; }\n.text-danger {\n  color: #dc232f; }\n.btn-primary {\n  color: #fff;\n  background-color: #337ab7;\n  border-color: #6b696b;\n  border-radius: 0px;\n  width: 50%;\n  margin: 1em;\n  background-color: #6b696b !important;\n  font-size: x-large;\n  font-weight: bold; }\n.well {\n  background-color: #fff; }\n.banner {\n  padding: 60px 0 0 0;\n  background-color: #f5f5f5;\n  background-image: url(\"/assets/images/bg/brick-wall.png\");\n  position: relative; }\n.banner:before {\n    content: '';\n    position: absolute;\n    z-index: 1;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: rgba(0, 0, 0, 0.1);\n    /* For browsers that do not support gradients */\n    /* For Safari 5.1 to 6.0 */\n    /* For Opera 11.1 to 12.0 */\n    /* For Firefox 3.6 to 15 */\n    background: linear-gradient(rgba(0, 0, 0, 0.1), #f5f5f5);\n    /* Standard syntax */ }\n.banner .row {\n    margin-top: 0;\n    margin-bottom: 0;\n    position: relative;\n    z-index: 2; }\n.banner .row .content {\n      padding-top: 115px;\n      margin-bottom: 25px; }\n.banner .row .content .sub-title {\n        text-transform: uppercase; }\n.banner .row .content .title {\n        margin: 15px 0 40px 0;\n        text-transform: none; }\n.banner .wrap-demo {\n    height: auto;\n    padding: 0 15px; }\n.banner img {\n    display: block; }\n/*\r\nCategory\r\n=========================== */\n.wrap-feature {\n  display: block;\n  position: relative; }\n.wrap-feature .container {\n    position: relative;\n    z-index: 2; }\n.wrap-feature .row {\n    margin: 0; }\n.wrap-feature .col {\n    padding: 0;\n    margin: -0.5px; }\n.wrap-feature .item-feature {\n    padding: 20px 35px 20px 65px;\n    border: solid 1px #efefef;\n    background: #fff;\n    position: relative;\n    -ms-box-shadow: rgba(147, 147, 147, 0.1) 0 1px 15px 1px;\n    -o-box-shadow: rgba(147, 147, 147, 0.1) 0 1px 15px 1px;\n    box-shadow: rgba(147, 147, 147, 0.1) 0 1px 15px 1px;\n    overflow: hidden; }\n.wrap-feature .item-feature mat-icon {\n      position: absolute;\n      font-size: 24px;\n      top: 25px;\n      left: 25px;\n      filter: alpha(opacity=70);\n      -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=70)\";\n      -webkit-opacity: 0.7;\n      -khtml-opacity: 0.7;\n      -moz-opacity: 0.7;\n      -ms-opacity: 0.7;\n      -o-opacity: 0.7;\n      opacity: 0.7; }\n.wrap-feature .item-feature mat-icon.bg {\n        color: #8f8f8f;\n        filter: alpha(opacity=10);\n        -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=10)\";\n        -webkit-opacity: 0.1;\n        -khtml-opacity: 0.1;\n        -moz-opacity: 0.1;\n        -ms-opacity: 0.1;\n        -o-opacity: 0.1;\n        opacity: 0.1;\n        font-size: 100px;\n        left: 100%;\n        top: 100%;\n        margin: -50px 0 0 -80px;\n        z-index: 1; }\n.wrap-feature .item-feature .title {\n      text-transform: capitalize;\n      position: relative;\n      z-index: 2; }\n.wrap-feature .item-feature p {\n      margin-bottom: 0;\n      position: relative;\n      z-index: 2; }\n.wrap-feature:before {\n    content: '';\n    position: absolute;\n    z-index: 1;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 50%;\n    background-color: #f5f5f5;\n    border-bottom: solid 1px #efefef; }\n/*\r\nResponsive\r\n=========================== */\n@media (max-width: 1200px) {\n  .banner .row .content {\n    padding-top: 70px; }\n  .banner .row img {\n    max-width: 300px;\n    margin: 0 auto !important; } }\n@media (max-width: 767px) {\n  .banner .row .content {\n    text-align: center;\n    padding-top: 0;\n    margin-bottom: 55px; }\n  .banner .row .col {\n    width: 100%; }\n  .product-home {\n    padding: 0 25px; } }\n@media (max-width: 360px) {\n  .banner .row img {\n    max-width: 200px; } }\n"

/***/ }),

/***/ "./src/app/home/home1/home1.component.ts":
/*!***********************************************!*\
  !*** ./src/app/home/home1/home1.component.ts ***!
  \***********************************************/
/*! exports provided: Home1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Home1Component", function() { return Home1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var app_lib_service_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/lib/service/product.service */ "./src/app/lib/service/product.service.ts");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data */ "./src/app/home/home1/data.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var Home1Component = /** @class */ (function () {
    function Home1Component(router, _productService) {
        this.router = router;
        this._productService = _productService;
        this.imgUrl = 'https://www.licenseplates.tv/images/';
        this.slider = '../../../assets/images/banner.jpg';
        this.staticImgUrl = '../../../assets/images/homePage/';
    }
    Home1Component.prototype.ngOnInit = function () {
        this.getCategories();
        // console.log(HomeModal);
    };
    Home1Component.prototype.subCat = function (item) {
        this.router.navigateByUrl('subcategories/' + item.id);
    };
    // Detail Product
    Home1Component.prototype.detailProduct = function (e) {
        var product = lodash__WEBPACK_IMPORTED_MODULE_3__["kebabCase"](e.slug);
        this.router.navigate(['shop/p/' + product]);
    };
    Home1Component.prototype.getSubCat = function (id) {
        var _this = this;
        this._productService.getSubCategory(id)
            .subscribe(function (res) {
            console.log('home res ', res);
            _this.subCategories = res.category;
        });
    };
    Home1Component.prototype.getCategories = function () {
        // this._productService.getCategory()
        // .subscribe( (data: any) => {
        //   this.categories = data.category;
        //   this._productService.catId = this.categories[0].categories_id;
        // //   this.getSubCat(this.categories[0].categories_id);
        // })
        this.categories = _data__WEBPACK_IMPORTED_MODULE_5__["HomeModal"];
    };
    Home1Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home1',
            template: __webpack_require__(/*! ./home1.component.html */ "./src/app/home/home1/home1.component.html"),
            styles: [__webpack_require__(/*! ./home1.component.scss */ "./src/app/home/home1/home1.component.scss")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('fade', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('shown', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1 })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('.5s'))
                ]),
            ]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], app_lib_service_product_service__WEBPACK_IMPORTED_MODULE_4__["productService"]])
    ], Home1Component);
    return Home1Component;
}());



/***/ }),

/***/ "./src/app/home/home2/home-slide.directive.ts":
/*!****************************************************!*\
  !*** ./src/app/home/home2/home-slide.directive.ts ***!
  \****************************************************/
/*! exports provided: HomeslideDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeslideDirective", function() { return HomeslideDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeslideDirective = /** @class */ (function () {
    function HomeslideDirective(el) {
        this.el = el;
    }
    HomeslideDirective.prototype.ngOnInit = function () {
        this.initSlider();
    };
    HomeslideDirective.prototype.ngOnChanges = function () {
        var _this = this;
        if (this.initialized == true) {
            setTimeout(function () {
                _this.initSlider();
            });
        }
        this.el.nativeElement.firstElementChild.style.transform = "translateX(" + this.position + "px)";
    };
    // Window On Resize
    HomeslideDirective.prototype.onResize = function (event) {
        var _this = this;
        setTimeout(function () {
            _this.initSlider();
        });
        this.el.nativeElement.firstElementChild.style.transform = "translateX(0px)";
    };
    // Initail Height Fullscreen and width column
    HomeslideDirective.prototype.initSlider = function () {
        var height = window.innerHeight;
        var childELement = this.el.nativeElement.firstElementChild.children;
        var arrayWidth = [];
        var totalWidth = 0;
        var parentWidth = this.el.nativeElement.offsetWidth;
        for (var i = 0; i < childELement.length; i++) {
            var setWidth = parentWidth * 0.25;
            if (i == 0) {
                setWidth = parentWidth * 0.50;
            }
            childELement[i].style.width = setWidth + 'px';
            childELement[i].firstElementChild.style.height = height + 'px';
            arrayWidth.push(setWidth);
        }
        // Subtotal
        totalWidth = lodash__WEBPACK_IMPORTED_MODULE_1__["reduce"](arrayWidth, function (sum, n) {
            return sum + n;
        }, 0);
        this.el.nativeElement.firstElementChild.style.width = totalWidth + 'px';
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], HomeslideDirective.prototype, "position", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], HomeslideDirective.prototype, "initialized", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], HomeslideDirective.prototype, "onResize", null);
    HomeslideDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[homeslide]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], HomeslideDirective);
    return HomeslideDirective;
}());

;


/***/ }),

/***/ "./src/app/home/home2/home2.component.html":
/*!*************************************************!*\
  !*** ./src/app/home/home2/home2.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container-fluid\">\n\n        <div *ngIf=\"subCategories\" class=\"row\" style=\"margin-bottom: 0px\">\n            <div class=\"col-sm-12 mt-2 text-center card_plate\">\n                <h5 style=\"margin-top: 2px\">Displaying <strong>1</strong> to <strong>{{subCategories.length}}</strong> (of <strong>{{subCategories.length}}</strong> products)</h5>\n                <!-- <pagination-controls \n                (pageChange)=\"currentPage = $event; onPageChange(currentPage)\" \n                class=\"pagination-product\">\n            </pagination-controls> -->\n            <!-- <nav aria-label=\"Page navigation example text-center\"> -->\n                <ul *ngIf=\"pages.length > 1\" class=\"pagination m-0\">\n                  <!-- <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Previous</a></li> -->\n                  <li *ngFor=\"let page of pages\" class=\"page-item\"><a class=\"page-link\" [ngClass]=\"currentPage == page? 'select' : ''\" (click)=\"changePage(page)\">{{ page + 1 }}</a></li>\n                  <!-- <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li> -->\n                  <!-- <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li> -->\n                  <!-- <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Next</a></li> -->\n                </ul>\n              <!-- </nav> -->\n            </div>\n        </div> \n    \n        <div class=\"row\">\n    \n            <ng-container *ngIf=\"!subCategories\">\n                    <div class=\"col-12 text-center\">\n                            <img width=\"14%\" src=\"/assets/images/loader.svg\" alt=\"\">\n                            <h6>loading...</h6>\n                        </div>\n            </ng-container>\n            \n            <ng-container *ngIf=\"subCategories\">\n                    <div *ngFor=\"let item of subCategories\" class=\"col-sm-4\">\n                            <div class=\"card text-center\">\n                                <div class=\"card-img\">\n                                        <img class=\"card-img-top\" width=\"50%\" src=\"{{imgUrl}}{{item.products_image}}\" alt=\"{{item.products_name}}\" (click)=\"getProduct(item)\">\n                                </div>\n                                    \n                                    <div class=\"card-body\">\n                                        <!-- <a class=\"shop_now_btn\" href=\"javascript:void(0)\"><img src=\"assets/images/shop_now_button.png\"  width=\"250\" alt=\"Shop Now\"></a> -->\n                                        <div class=\"div-txt\">\n                                                <h5 style=\"font-size: 18px;width: 98%;margin: auto;color: #000\" class=\"card-title\" (click)=\"getProduct(item)\">{{ (item.products_name.length > 70) ? (item.products_name | slice:0:69)+' ...':(item.products_name) }}</h5>\n                                        </div>\n                                        \n\n                                        <!-- <h4 class=\"text-danger\">$100.00 $80.00 Save: 15% off</h4> -->\n                                            <div class=\"well\">\n                                        <h3 class=\"text-danger\"> <span class=\"old_price\">${{item.products_price | number : '1.2-2'}}&nbsp;</span> &nbsp;${{item.old_price | number : '1.2-2'}}&nbsp; Save: {{ ((item.products_price  - item.old_price) * 100)/item.products_price }}%  off</h3>\n                                                    <a href=\"javascript:void(0)\"><img (click)=\"getProduct(item)\" src=\"assets/images/buy.png\" alt=\"\">  </a>\n                                            </div>\n                                      \n                                      \n                                    </div>\n                                  </div>\n                    </div>\n            </ng-container>\n           \n        </div>\n    \n    </div> <!-- container-fluid -->\n\n\n\n"

/***/ }),

/***/ "./src/app/home/home2/home2.component.scss":
/*!*************************************************!*\
  !*** ./src/app/home/home2/home2.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\nImport\n=========================== */\n/* -------------------------------------------------------------\n  Sass CSS3 Mixins! The Cross-Browser CSS3 Sass Library\n  By: Matthieu Aussaguel, http://www.mynameismatthieu.com, @matthieu_tweets\n\n  List of CSS3 Sass Mixins File to be @imported and @included as you need\n\n  The purpose of this library is to facilitate the use of CSS3 on different browsers avoiding HARD TO READ and NEVER\n  ENDING css files\n\n  note: All CSS3 Properties are being supported by Safari 5\n  more info: http://www.findmebyip.com/litmus/#css3-properties\n\n------------------------------------------------------------- */\n/*\nColor\n=========================== */\n/*\nFont Family\n=========================== */\n.material-icons {\n  font-family: 'Material Icons';\n  font-weight: normal;\n  line-height: 20px; }\n.material-icons {\n  font-family: 'Material Icons';\n  font-weight: normal;\n  line-height: 20px; }\n.container-fluid, .col-sm-4, .col-sm-12 {\n  padding-right: 0px !important;\n  padding-left: 0px !important; }\n.card {\n  border-top: 4px solid #c3c3c3;\n  padding: 1em; }\n.m-0 {\n  margin-top: 0 !important;\n  margin-bottom: 10px !important; }\n.select {\n  background: #444;\n  color: #fff; }\n.pagination li {\n  margin: 0 4px; }\nh1, h2, h3, h4, h5 {\n  text-transform: none; }\n.card-text {\n  font-weight: 600;\n  color: #000; }\n.card-img {\n  width: 100%;\n  height: 180px; }\n.div-txt {\n  width: 100%;\n  height: 90px; }\n.card_plate {\n  border-top: 2px solid #c3c3c3;\n  border-bottom: 2px solid #c3c3c3;\n  padding: 1em;\n  padding-bottom: 0em; }\n.shop_now_btn img {\n  margin: 1em; }\n.footerblock {\n  background: #fff;\n  margin: 20px;\n  box-shadow: 1px 2px 2px 0px;\n  padding: 8px 10px;\n  min-height: 70px;\n  border: 1px solid #d8d8d8; }\n.text-danger {\n  color: #dc232f;\n  font-weight: bold; }\n.old_price {\n  text-decoration: line-through; }\n.btn-primary {\n  color: #fff;\n  background-color: #337ab7;\n  border-color: #6b696b;\n  border-radius: 0px;\n  width: 50%;\n  margin: 1em;\n  background-color: #6b696b !important;\n  font-size: x-large;\n  font-weight: bold; }\n.well {\n  background-color: #fff;\n  border: 0px solid #fff;\n  margin-bottom: 0px;\n  padding-bottom: 0px; }\n.banner {\n  padding: 60px 0 0 0;\n  background-color: #f5f5f5;\n  background-image: url(\"/assets/images/bg/brick-wall.png\");\n  position: relative; }\n.banner:before {\n    content: '';\n    position: absolute;\n    z-index: 1;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: rgba(0, 0, 0, 0.1);\n    /* For browsers that do not support gradients */\n    /* For Safari 5.1 to 6.0 */\n    /* For Opera 11.1 to 12.0 */\n    /* For Firefox 3.6 to 15 */\n    background: linear-gradient(rgba(0, 0, 0, 0.1), #f5f5f5);\n    /* Standard syntax */ }\n.banner .row {\n    margin-top: 0;\n    margin-bottom: 0;\n    position: relative;\n    z-index: 2; }\n.banner .row .content {\n      padding-top: 115px;\n      margin-bottom: 25px; }\n.banner .row .content .sub-title {\n        text-transform: uppercase; }\n.banner .row .content .title {\n        margin: 15px 0 40px 0;\n        text-transform: none; }\n.banner .wrap-demo {\n    height: auto;\n    padding: 0 15px; }\n.banner img {\n    display: block; }\n/* Loading\n======================== */\n.wrap-loading {\n  position: relative;\n  width: 100%;\n  top: 0;\n  right: 0; }\n.wrap-loading mat-spinner {\n    width: 50px;\n    height: 50px;\n    display: block;\n    margin: auto; }\n/* Wrap Home 2\n======================== */\n.wrap-home {\n  padding: 0 45px;\n  margin: 0;\n  position: relative;\n  background: #fff;\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG4AAABFBAMAAABZHs49AAAALVBMVEXGxsbHx8fGxsbExMTIyMjHx8fBwcHDw8PJycnJycnIyMjJycnJycnJycnExMSNogPvAAAAD3RSTlNQYFVFamU6QHp1cH+KhUprl3zAAAAMHElEQVR4Xj2X628cVZ6G3985VXZuWL9T1Z12HBadU3YTwiU63eXYhJu6fYnjIFB124bcPjh0qGa0rNSmg5vd0UhxLhtfwspOHIiJGDmDYRMnrLhkRg5OVrA7M2R3zApm2JmEBCkEmN0v+z+sI2Xm+XCq6sNzPj0q6cXS1aWvBnOJ08de/+Jab3/L9qmHfrlp1Bk6fGni6tvjzrXRk8ebpnpnendsm56k7ulDvzm5FvRhpg11ldyzM9N9b63rD45MXOsez204u+dYR3DjzVLcFsfl4Vq1XFl+lOPh8spV9UPD5XJY/se2F/Dk1tbG7Re8r0+OjzQF1UcPrDs0mgpbPhiuxLeeAorfO6GlhIlypOrWxuUw1d5t7pGhRLxMbTj+CYVbAuKicZ3k1ICO5OoNZ/KJLnVubupM0Sl4LcYZiDwjBbQUngZMMhnxZvEHs/rQv5FOYGMhqQLRwKv3J7ocVi2qI5lgkSRhOiYBD1qDQQDDkNKJYfY0tAbynC+AITYOKZVQZPIqEkqpjQn1zKdQ1mqAoQUIBIL7z0XRKjWlZ4vK8XIabGzeCJUgpWh9IllIUuaZA0BWa4TMnAURa5j1dd0tYDbaIV0wAZsNh9OKPSilWkRLosOYgeSurwQ0EEAwCA4aWNKaNzpcQBMwUGwpECtNgx2Upzuiq3LutGgdWv0BHAQMLZpZw7Fa44fFbk+z0kCrBql3PA1RUUZBIZ3rVl2wvvPo6pGsDiKtvYBZQCgtSF06ko6MbpZC30LUB4Dq/kEps+5gvouTec2Ku+9Z+lLA2uxTqEACFbsMwr9tvPDNhU92RPM3r1xe+mJx28Sn58cWFj4ZoQejkefbU1bMTBd3T1xZvDJ6ZWlicaEXS9fHTzXNj/3h5bvhfNmzt7P9e39wy5RKzhbO9s7PTw1snzu1bf3YKXbl25f1yq97jj8WIb5Dmevb74YTh6vb2qu1oXJ26rnh9g3ltnL8HoRohJbtyP45Lsdtz5fLMYQseEgAH90N50+vfl6qVjLV2r5yPCj9DOwrc9sjco7kkwOyQeVVX339mhfqwQQhLIjvhlOtxbe0EbjVuYGigBh0/FOWFOQARrpZA/qh17KAgAcbCPXXcCqWHWczkhYSAHt4PMMQpiDA8BxBDXh4PxgMDQ+wGsweQfOL2cCQKwKZ28RRjvo6RhsU54QWBE0CAt69g4NAMzELCAjSrAGT36dZKAFdr5Hq0wrejtkI2KxYMggamva8Y30ws/TFHRNaEJKTe3OaSQikCgBYU7TbbkK42eNHGQ40BXbPc1aCyRekXSgi0gpidp+O/BaXRXRGcwANnLMRa8qzB1BGM2YO+BkNeIYstGQBthS8O2n9+maHBKCF0lLBQAkJqICA2xoADtTZFJKJkUJXR3/3zMy5gcZATL05lfik0L+zP7o+f3L67Pq5xJG353q2Rw+MdAgdzA0oEwUrX3qIcPnbs9NjXU7y3MzUXO+2xNy6kV07HpyeP9o46uH1xu3jc4e/fGzXwvjo+y+9zqed+rDcNTp26GAC/xP6djmw0nBcbqvtrdXKpeXXuFytxeU76b2Qs4P57TNH9q4dqa9VqtlqW0mGmJxCYVXQdLSuLWUpyFm0+3nlJdCv6kpnEsmxqXVfdW2ZUT/WD05vOVQNsxRCyTC0z4XIB6D6P+5V+a7kg3Pz3QVjvCS6vZ/VzmVKOZbPQlAhnXdVdP/fQwDWg4+GulnkKQH679Z80uO8WiY9gISIvIcfb2nOjvihz44HymxhGRsLCpsVtAUp5JRDfTcyKrdssTIdjlNwmvq9NfuEbOrJ+R6HsArk496WCsFCS82sGd0g0zO231NIJEhF3WcShbwQ9LSjGP6sZA/cAG6Xcvj+WwJWagYDnSioBONmq1KJOyL3pxOKVV4dm2IO6zslMSud8TvrwSuttFQRAOBr5KHq+eqrxWWRlBcllsmztut7GOAp2azJwxaR+t6pbMUdlI5YGyAyhf6J60PLDiuhOG+UBsTxmUMbrxPIy/ka0MCzuPS5fUrCAgSA4YWIS4PdLUrtTp7Mq6IXBLlWXjyx7+n3KjoFP2yX7ZDSyid+f/n02MLrEzPvL0ysP4dvF28sXLtxambh1PjHLauHPo3akdlycG7ljZMXz686tuvD8d89nzn4+dHeqeuLKx7oOXTj0a9SteRLGu78J1cubSseHyioi2d7D887Z3aMjfcudOWbe+4vD8elSvuTeTud2vDCr6WNgTLX4pLe5aDQ3zGQvnjaLQzkJQnU8UewK0uAtaEqFKa99vDBFm4utcu4AtRCNLcNCmw5geRAwGlARwE02CZ3p2iAhDLG5am04pU7RnefqCKXSBaNgWLSjAzWlKBQAIyUEQsJa4PTJwQ5WikEhW4IFW3GikiS6ygW1mqWDEA//gYKLSYDgJsBKQP1yH9UQd+ZYo6V0CrdYG7LR2crprOfq8IhBqwFiz0SupDIMQSYPQbCe0beMURBoUCRFxE5CvqBviFs5a0252ag0MFo9h9qg0MsdEBWA5Csd31dgni+JaD+pNCuJxTBPPtSfuCroaYsG62TgJViTRWJDpsjhYgljCL10IcllcwcNE2GteCh7d39eodfeZpLocwoBlxAOVAAJRSUuU8CRgdoWH2wCuMq6jOhxIZuLVg/8vOoq/I4U9Iix76VUGLLt/giJ0iluxvnz701vri0tPTHSj602OQFyenG3/3SK+pXbm5+P9/x0avcYzMvfc8kmpF9pBOy9MXS0o2Wkx1d57zF4v8e6Gl8+tTlsWuzz1y+ND9+8vLyTf++p+ny+Pxb79889/SeJ5Y+W7y48+zkFOLB0FZ1qA8LL1XNnghJBMmmgUDnNwRLv111ZfrAr3ceYRYhSxlaG0A0Tfan13TCFLVHzX/uk5LpuBy2MkxV5q8NjO9ovPqvL3/68eYzs+PBhVTnI7IuLovOXzkrOt5tGbtUQocCQ4hJKhTzAXkqrd2EDh6Y2Hk5cvXKdUfLO45M9G1WH7vBwKmqivfjR5HbtOJFgAXgNWxX3R3GIyEC46SNcoPzH2jW8J5YOnXwp77/o5+loK+5vPexrPJIb9yHdCHvJZV476KjFKs0SJik8ETT5Vc9EZCBC7jAbKgE3pEZd5XnKLe5M49cvp8Ni/PHIyqq4zCsiDTEisUKBR4SAlBCI7yT12RP1rjFDu2KIIDhgvESxa40NkGwJqOM0KDVv91rPBgBABnCGokhdBzVye80EdnIAFaLwMOBjfmAtSYRCHf5CFa3DwmAyELgtoNmrrf6ZGrIFWgRGgxE0lCBsSsvAqUKEHkIIfSqmTdfCSDBACRVgf37Sf7ijRwxOgwXNIAwPTp27vCJIC3gJiNRjFxo331iOGyQMpdlaFuNa+1koQ++WbSKIgANFolj//nhmbkevO5cGJ0907t4ff09B0cnTo+8dv7YjdPH1x399u3hz0rVSrkSftAZXrk0cfM3S8v8FxI7tz2xszCI9b6/N9N/evJP45sTb0WHeXj2bGqt91G1d+3fDe+7lNtP3zVI0nvPv5Fd+qafXEzO1lLxcLXttVKsbaKxVh//36/i6vC+cC3Wldt2x1vjtrXVhpU/qYesrvju2ukXt64Vw601xHE1U91f5C9Da8O2Unx/7zvxcFwNK0++F8fx8GCtVDp07uK7zt/0J3ZuaKvVqnFb3ctxDArYagFrAgj21L2dlftL5Lo2bq/VYHzAO/x7uuW6ORYNWPVzD9zwyE9bcwBICwECGFKR7qyVhCWBgSAHKYiKtzMeI3vbMwStAAi9ZosFQL4UAEEgMALUN+SiZXPrLQFISJJS3svsexR4WcC7FZCwD++tAIAMBGSGSGoGvGifYCIXJCMNId37inPNHpApMPDXsQEN1gIQGgZgENTUEHtCZIVOQWufOfTOe32MHxRLzXfHxpvWB5ATBgJBRggtRPoXL3DOJyPgz0KQlqR3ZwWkKfBK7y9jo0dI+IFIC0GBIRibkd6/7PdT7GZERhgEni6gIQe+D1Qk4C9j49ArEtBSyuZb9YBFBiI5qZc/s1anCqyLxpHU9EP+NnwLH3LD3bFRSnyPhcUbi9cmbl5dXDz81lnVf7gnOvbt9asL21Z9dv3SyMXR617qxhX/n3Yt/1q/eOzC3bHxTWvr/wPSDj5oMxdQWAAAAABJRU5ErkJggg==\"); }\n.wrap-home > .wrap-slider {\n    overflow: hidden; }\n.wrap-home > .wrap-slider > .row {\n      position: relative;\n      z-index: 1;\n      margin: 0;\n      transition: all 0.3s ease-in-out; }\n.wrap-home > .wrap-slider > .row .col {\n        padding: 0; }\n.wrap-home > .wrap-slider > .row .col .valign-wrapper {\n          border-left: solid 1px #d0d0d0;\n          border-right: solid 1px #d0d0d0;\n          margin-left: -1px; }\n.wrap-home > .wrap-slider > .row .col .valign-wrapper .content {\n            display: block;\n            width: 100%;\n            padding: 0 15px;\n            letter-spacing: .5px; }\n.wrap-home > .wrap-slider > .row .col .valign-wrapper .content .material-icons {\n              position: relative;\n              top: 2px; }\n.wrap-home > .wrap-slider > .row .col .valign-wrapper .content img {\n              width: 100%;\n              padding: 15px;\n              margin-bottom: 15px; }\n.wrap-home > .wrap-slider > .row .col .valign-wrapper .content h1, .wrap-home > .wrap-slider > .row .col .valign-wrapper .content h2, .wrap-home > .wrap-slider > .row .col .valign-wrapper .content h3, .wrap-home > .wrap-slider > .row .col .valign-wrapper .content h4, .wrap-home > .wrap-slider > .row .col .valign-wrapper .content h5, .wrap-home > .wrap-slider > .row .col .valign-wrapper .content h6 {\n              font-weight: 900;\n              text-transform: none; }\n.wrap-home > .wrap-slider > .row .col.demo .valign-wrapper .content {\n          padding: 55px; }\n.wrap-home .nav {\n    position: absolute;\n    background: transparent;\n    width: 45px;\n    height: 100%;\n    text-align: center !important;\n    line-height: 35px;\n    left: 0;\n    top: 0;\n    z-index: 2;\n    border: 0;\n    outline: 0;\n    display: block;\n    color: #8f8f8f;\n    background: #fff; }\n.wrap-home .nav:focus {\n      background: #fff; }\n.wrap-home .nav.next {\n      margin-left: -45px;\n      left: 100%; }\n.wrap-home .nav:disabled {\n      filter: alpha(opacity=50);\n      -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=50)\";\n      -webkit-opacity: 0.5;\n      -khtml-opacity: 0.5;\n      -moz-opacity: 0.5;\n      -ms-opacity: 0.5;\n      -o-opacity: 0.5;\n      opacity: 0.5; }\n.wrap-home .nav mat-icon {\n      position: relative;\n      right: 6px;\n      top: 2px;\n      font-size: 32px; }\n/* Responsive\n======================== */\n@media (max-width: 1200px) {\n  .wrap-home > .wrap-slider > .row .col .valign-wrapper .content {\n    padding: 0 30px; } }\n@media (max-width: 920px) {\n  .wrap-home {\n    padding: 0; }\n    .wrap-home > .wrap-slider {\n      border: 0; }\n      .wrap-home > .wrap-slider .row {\n        width: 100% !important;\n        -webkit-transform: translateX(0) !important;\n                transform: translateX(0) !important; }\n        .wrap-home > .wrap-slider .row .col {\n          width: 100% !important;\n          border-bottom: solid 1px #efefef;\n          background: rgba(255, 255, 255, 0.5); }\n          .wrap-home > .wrap-slider .row .col.demo {\n            background: transparent; }\n          .wrap-home > .wrap-slider .row .col .valign-wrapper {\n            height: auto !important; }\n            .wrap-home > .wrap-slider .row .col .valign-wrapper .content {\n              padding: 55px 30px; }\n    .wrap-home .nav {\n      display: none; } }\n@media (min-width: 768px) and (max-width: 920px) {\n  .wrap-home > .wrap-slider > .row .col .valign-wrapper .content {\n    width: 80%;\n    display: table;\n    margin: auto;\n    position: relative;\n    overflow: hidden;\n    text-align: left !important;\n    padding-left: 250px; }\n    .wrap-home > .wrap-slider > .row .col .valign-wrapper .content img {\n      padding: 30px;\n      position: absolute;\n      left: 0;\n      top: 0;\n      width: 250px; } }\n@media (max-width: 767px) {\n  .wrap-home > .wrap-slider > .row .col .valign-wrapper {\n    border: 0; }\n    .wrap-home > .wrap-slider > .row .col .valign-wrapper .content {\n      padding: 55px 15px; }\n      .wrap-home > .wrap-slider > .row .col .valign-wrapper .content img {\n        width: 250px;\n        display: block;\n        margin-left: auto;\n        margin-right: auto; } }\n"

/***/ }),

/***/ "./src/app/home/home2/home2.component.ts":
/*!***********************************************!*\
  !*** ./src/app/home/home2/home2.component.ts ***!
  \***********************************************/
/*! exports provided: Home2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Home2Component", function() { return Home2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_service_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/service/product.service */ "./src/app/lib/service/product.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Home2Component = /** @class */ (function () {
    function Home2Component(router, _productService, route) {
        this.router = router;
        this._productService = _productService;
        this.route = route;
        this.position = 0;
        this.categories = [];
        this.init = false;
        this.homeState = false;
        this.loadingState = true;
        this.navigateRoute = 'shop/product1';
        this.imgUrl = 'https://www.licenseplates.tv/images/';
        this.pages = [];
        this.currentPage = 0;
    }
    Home2Component.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = params.id;
            return _this.getSubCat(params.id);
        });
    };
    Home2Component.prototype.changePage = function (num) {
        console.log('num is ', num);
        this.currentPage = num;
        this.getSubCat(this.id);
    };
    Home2Component.prototype.getSubCat = function (id) {
        var _this = this;
        this._productService.getStaticSubCategory(id, this.currentPage)
            .subscribe(function (res) {
            console.log('sub cat res---- ', res);
            _this.subCategories = res.product_data;
            console.log('subCategories---- ', _this.subCategories);
            _this.pagination(res.total_record);
        });
    };
    Home2Component.prototype.getProduct = function (item) {
        this.router.navigateByUrl('producDetails/' + item.products_id);
    };
    Home2Component.prototype.pagination = function (val) {
        console.log('records ', val);
        if (val > 10) {
            // set pagination
            if ((val % 10) > 0) {
                console.log('more than one');
                var value = val / 10;
                var page = parseInt(value) + 1;
                this.arrFill(page);
            }
            else {
                var value = val / 10;
                var page = parseInt(value);
                this.arrFill(page);
            }
        }
        else {
            this.pages = [1];
        }
    };
    Home2Component.prototype.arrFill = function (n) {
        console.log('arr fill with ', n);
        this.pages = Array.from(Array(n).keys());
        console.log('pages are ', this.pages);
    };
    // ngAfterViewInit(){
    //     this.fetchCategory();
    // }
    // Event Listener
    Home2Component.prototype.onResize = function (event) {
        var _this = this;
        this.position = 0;
        setTimeout(function () {
            _this.widthCol = _this.row.nativeElement.firstElementChild.offsetWidth - 1;
            _this.widthRow = (_this.row.nativeElement.offsetWidth - _this.widthCol) * -1;
        }, 1000);
    };
    // Fetching Categori
    Home2Component.prototype.fetchCategory = function () {
        var _this = this;
        this._productService.getCategory().subscribe(function (data) {
            _this.categories = [];
            lodash__WEBPACK_IMPORTED_MODULE_2__["map"](data, function (x) {
                _this.categories.push(x);
            });
            _this.loadingState = false;
            _this.homeState = true;
            setTimeout(function () {
                _this.init = true;
                _this.widthCol = _this.row.nativeElement.firstElementChild.offsetWidth;
                _this.widthRow = (_this.row.nativeElement.offsetWidth - _this.widthCol) * -1;
            }, 100);
        });
    };
    // Previous Slider
    Home2Component.prototype.prevSlide = function () {
        this.position = this.position + this.widthCol;
        this.widthRow = (this.row.nativeElement.offsetWidth - this.widthCol) * -1;
    };
    // Next Slider
    Home2Component.prototype.nextSlide = function () {
        this.position = this.position - this.widthCol;
        this.widthRow = ((this.row.nativeElement.offsetWidth - (this.widthCol + this.widthCol)) - 5) * -1;
    };
    // Select Category
    Home2Component.prototype.selectCategory = function (e) {
        var navCategory = {
            queryParams: {
                category: lodash__WEBPACK_IMPORTED_MODULE_2__["kebabCase"](e)
            }
        };
        this.router.navigate([this.navigateRoute], navCategory);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('row'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], Home2Component.prototype, "row", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], Home2Component.prototype, "onResize", null);
    Home2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'my-app',
            template: __webpack_require__(/*! ./home2.component.html */ "./src/app/home/home2/home2.component.html"),
            styles: [__webpack_require__(/*! ./home2.component.scss */ "./src/app/home/home2/home2.component.scss")],
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _lib_service_product_service__WEBPACK_IMPORTED_MODULE_3__["productService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], Home2Component);
    return Home2Component;
}());



/***/ }),

/***/ "./src/app/home/product/dropDown.ts":
/*!******************************************!*\
  !*** ./src/app/home/product/dropDown.ts ***!
  \******************************************/
/*! exports provided: fontArray_1, fontArray_2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontArray_1", function() { return fontArray_1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontArray_2", function() { return fontArray_2; });
var fontArray_1 = [
    {
        id: '0',
        text: 'Choose font...'
    },
    {
        id: 'ag_alb',
        text: 'Albertus Medium'
    },
    {
        id: 'bnkgothm',
        text: 'Bank Gothic'
    },
    {
        id: 'brushscriptstd',
        text: 'Brush Script'
    },
    {
        id: 'copgothb',
        text: 'Copperplate Gothic'
    },
    {
        id: 'harlowsi',
        text: 'Harlow Solid Italic'
    },
    {
        id: 'verdana',
        text: 'Verdana'
    },
    {
        id: 'times',
        text: 'Times New Roman'
    },
    {
        id: 'lithograph',
        text: 'Lithograph'
    },
    {
        id: 'magnetob',
        text: 'Magneto'
    },
    {
        id: 'ag_zurchke',
        text: 'Zurich BLKEX BT'
    },
];
var fontArray_2 = [
    {
        id: '0',
        text: 'Choose font...'
    },
    {
        id: 'ag_alb',
        text: 'Albertus Medium'
    },
    {
        id: 'ag_alger',
        text: 'Algerian'
    },
    {
        id: 'ag_arialb',
        text: 'Arial'
    },
    {
        id: 'bnkgothm',
        text: 'Bank Gothic'
    },
    {
        id: 'brushscriptstd',
        text: 'Brush Script'
    },
    {
        id: 'copgothb',
        text: 'Copperplate Gothic'
    },
    {
        id: 'harlowsi',
        text: 'Harlow Solid Italic'
    },
    {
        id: 'oldeng',
        text: 'Old English Text'
    },
    {
        id: 'verdana',
        text: 'Verdana'
    },
    {
        id: 'times',
        text: 'Times New Roman'
    },
    {
        id: 'lithograph',
        text: 'Lithograph'
    },
    {
        id: 'magnetob',
        text: 'Magneto'
    },
    {
        id: 'ag_zurchke',
        text: 'Zurich BLKEX BT'
    },
];


/***/ }),

/***/ "./src/app/home/product/product.component.html":
/*!*****************************************************!*\
  !*** ./src/app/home/product/product.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!-- <head>\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"https://www.licenseplates.tv/fonts/truetype/ag_newgermandecalnew.ttf\" />      \n</head> -->\n\n<div class=\"container-fluid\">\n\n  <!-- <div *ngIf=\"subCategories\" class=\"row\" style=\"margin-bottom: 0px\">\n      <div class=\"col-sm-12 mt-2 text-center card_plate\">\n          <h5 style=\"margin-top: 2px\">Displaying <strong>1</strong> to <strong>{{subCategories.length}}</strong> (of <strong>{{subCategories.length}}</strong> products)</h5>\n      </div>\n  </div>  -->\n\n  <div class=\"row\">\n\n      <ng-container *ngIf=\"!products\">\n              <div class=\"col-sm-4 text-center\">\n                  <img width=\"14%\" src=\"/assets/images/loader.svg\" alt=\"\">\n                      <h6>loading...</h6>\n                  </div>\n      </ng-container>\n      \n      <ng-container *ngIf=\"products\">\n              <div *ngFor=\"let item of products\" class=\"col-sm-4\">\n\n                 <div class=\"well text-center\">\n                 <h5 style=\"font-size: 20px;width: 100%;margin: auto;color: #000\" class=\"card-title\">{{item.products_name}}</h5>\n                 <h4 class=\"text-danger\"> <span class=\"old_price\">${{item.products_price | number : '1.2-2'}}&nbsp;</span> &nbsp;${{item.old_price | number : '1.2-2'}}&nbsp; Save: {{ ((item.products_price  - item.old_price) * 100)/item.products_price }}%  off</h4>\n                        <!-- <a href=\"\"><img src=\"assets/images/buy.png\" alt=\"\">  </a> -->\n                </div>\n\n                      <div class=\"card text-center\">\n        <img class=\"card-img-top\" width=\"50%\" src=\"{{imgUrl}}{{item.products_image}}\" alt=\"IMG_PRODUCT\"> <br>\n        <img *ngIf=\"item.xPos1 > 0\" class=\"card-img-top\" width=\"50%\" src=\"https://www.licenseplates.tv/lpgenI.php?productId={{item.products_model}}&text1={{Urltext}}&text2={{Urltext2}}&font={{font}}\" alt=\"IMG_PRODUCT\">\n        <h5 class=\"text-danger\" style=\"padding: 1em;\">Please enter your <strong>CUSTOM LETTERS/NUMBERS</strong> into the box <strong>BELOW</strong></h5>\n        <!-- <input type=\"text\" [(ngModel)]=\"text\" #ctrl=\"ngModel\"> -->\n        <div *ngIf=\"item.xPos1 > 0\" class=\"form-group\">\n          <input type=\"text\" [(ngModel)]=\"text\" (input)=\"changeTxt()\" (click)=\"selectInput1()\" #ctrl=\"ngModel\" class=\"form-control a6x12mun\" id=\"exampleInputText\" aria-describedby=\"textHelp\" placeholder=\"\">\n        </div>\n        <div *ngIf=\"item.xPos2 > 0\" class=\"form-group\">\n            <input type=\"text\" [(ngModel)]=\"text2\" #ctrl=\"ngModel\" (input)=\"changeTxt()\" (click)=\"selectInput2()\" class=\"form-control a6x12mun\" id=\"exampleInputText\" aria-describedby=\"textHelp\" placeholder=\"\">\n          </div>\n\n          <div *ngIf=\"products[0].font1\" class=\"col-sm-12 text-center\" style=\"position: relative; margin-bottom: 1.2em\">\n            <img width=\"100%\" style=\"padding: 0 1em 0 1em;position: relative;\" src=\"https://www.licenseplates.tv/images/legends/legend{{products[0].font1}}.png\" alt=\"\">\n          </div>\n\n          <div *ngIf=\"item.font_choose > 0\" class=\"form-group\">\n            <h4 class=\"text-danger\"> <label for=\"exampleFormControlSelect1\">Select Font</label> </h4>\n            <select *ngIf=\"item.products_custom == 1\" class=\"form-control\" id=\"exampleFormControlSelect1\">\n              <option *ngFor=\"let selctItem of dropDown1\" (click)=\"setFont(selctItem)\">{{selctItem.text}}</option>\n              <!-- <option>Font 2</option> -->\n            </select>\n            <select *ngIf=\"item.products_custom == 2\" class=\"form-control\" id=\"exampleFormControlSelect1\">\n              <option *ngFor=\"let selctItem of dropDown2\">{{selctItem.text}}</option>\n              <!-- <option>Font 2</option> -->\n            </select>\n          </div>\n\n          <div *ngIf=\"products[0].edecal == 'Y'\" id=\"customizeblock\" style=\"clear:both\">\n            <div class=\"decalsblock\" style=\"clear:both\">\n\n\n              <div class=\"row\" style=\"width: 90%;margin: auto;\">\n                <div class=\"col-sm-12 text-center\">\n\n                   <!-- <div class=\"decal-date-info\">CLICK TO SELECT SPECIAL CHARACTER (some characters may show differently in text box)</div> -->\n        <div style=\"float:left;border:1px solid black;\" (click)=\"addVal('!')\" class=\"symbolclick a6x12mun\" rel=\"!\">\n            !</div>\n          <div style=\"float:left;border:1px solid black;\" (click)=\"addVal('@')\" class=\"symbolclick a6x12mun\" rel=\"@\">\n            @</div>\n          <div style=\"float:left;border:1px solid black;\" (click)=\"addVal('#')\" class=\"symbolclick a6x12mun\" rel=\"#\">\n            #</div>\n          <div style=\"float:left;border:1px solid black;\" (click)=\"addVal('$')\" class=\"symbolclick a6x12mun\" rel=\"$\">\n            $</div>\n          <div style=\"float:left;border:1px solid black;\" (click)=\"addVal('&amp;')\" class=\"symbolclick a6x12mun\" rel=\"&amp;\">\n            &amp;</div>\n          <div style=\"float:left;border:1px solid black;\" (click)=\"addVal('?')\" class=\"symbolclick a6x12mun\" rel=\"?\">\n            ?</div>\n          <div style=\"float:left;border:1px solid black;\" (click)=\"addVal('\\'')\" class=\"symbolclick a6x12mun\" rel=\"'\">\n            '</div>\n          <div class=\"decal-date-info\"></div><div style=\"float:left;border:1px solid black;\" (click)=\"addVal('-')\" class=\"symbolclick a6x12mun\" rel=\"-\">\n            -</div>\n          <div style=\"float:left;border:1px solid black;\" (click)=\"addVal('=')\" class=\"symbolclick a6x12mun\" rel=\"=\">\n            =</div>\n          <div style=\"float:left;border:1px solid black;\" (click)=\"addVal('+')\" class=\"symbolclick a6x12mun\" rel=\"+\">\n            +</div>\n          <div style=\"float:left;border:1px solid black;\" (click)=\"addVal('*')\" class=\"symbolclick a6x12mun\" rel=\"*\">\n            *</div>\n          <div style=\"float:left;border:1px solid black;\" (click)=\"addVal('/')\" class=\"symbolclick a6x12mun\" rel=\"/\">\n            /</div>\n          <div style=\"float:left;border:1px solid black;\" (click)=\"addVal('\\\\')\" class=\"symbolclick a6x12mun\" rel=\"\\\">\n            \\</div>\n          <div style=\"float:left;border:1px solid black;\" (click)=\"addVal('&lt;')\" class=\"symbolclick a6x12mun\" rel=\"<\">\n            &lt;</div>\n          <div class=\"decal-date-info\"></div>\n\n           <!-- <br><input type=\"hidden\" name=\"textclicked\" id=\"textclicked\" value=\"1\">\n             <div class=\"decal-date-info\">\n        SELECT DIFFERENT DATE DECALS BY CLICKING ON DESIRED CHOICE BELOW, STATE DECAL WILL BE THAT OF THE PLATE THAT WAS CHOSEN\t\t \n        </div> -->\n        <div id=\"decals\">\n\n            <ng-container *ngIf=\"products[0].edecal == 'Y'\">\n                <div class=\"decalslabel\">Emission Test Decal</div>\n                       <div id=\"decal4\" class=\"symbolclick customizeproductimage imgselector\"  [ngClass]=\"selectedDecal == 1 ? 'active' : ''\" (click)=\"changeimg('%3A',1);\" rel=\":\">\n                         <img src=\"assets/images/decals/decal4.png\">\n                        <div class=\"largedecal\"><img src=\"assets/images/decals/decal4.png\"></div>\n                       </div>\n                       <div id=\"decal5\" class=\"symbolclick customizeproductimage imgselector \" [ngClass]=\"selectedDecal == 2 ? 'active' : ''\" (click)=\"changeimg('%3A',2);\" rel=\":\">\n                         <img src=\"assets/images/decals/decal5.png\">\n                        <div class=\"largedecal\"><img src=\"assets/images/decals/decal5.png\"></div>\n                       </div>\n                       <div id=\"decal1\" class=\"symbolclick customizeproductimage imgselector \" [ngClass]=\"selectedDecal == 3 ? 'active' : ''\" (click)=\"changeimg('%3A',3);\" rel=\":\">\n                         <img src=\"assets/images/decals/decal1.png\">\n                        <div class=\"largedecal\"><img src=\"assets/images/decals/decal1.png\"></div>\n                       </div>\n                       <div id=\"decal2\" class=\"symbolclick customizeproductimage imgselector\" [ngClass]=\"selectedDecal == 4 ? 'active' : ''\" (click)=\"changeimg('%3A',4);\" rel=\":\">\n                         <img src=\"assets/images/decals/decal2.png\">\n                        <div class=\"largedecal\"><img src=\"assets/images/decals/decal2.png\"></div>\n                       </div>\n                       <div id=\"decal11\" class=\"symbolclick customizeproductimage imgselector \" [ngClass]=\"selectedDecal == 5 ? 'active' : ''\" (click)=\"changeimg('%3A',5);\" rel=\":\">\n                         <img src=\"assets/images/decals/decal11.png\">\n                        <div class=\"largedecal\"><img src=\"assets/images/decals/decal11.png\"></div>\n                       </div> <br>\n            </ng-container>\n               \n            <ng-container *ngIf=\"products[0].saftydecal == 'Y'\">\n                <div class=\"decalslabel\">Safety Test Decal</div>\n                 <div id=\"decal9\" class=\"symbolclick customizeproductimage imgselector \" (click)=\"changeimg('%3B');\" rel=\";\">\n                   <img src=\"assets/images/decals/decal9.png\">\n                  <div class=\"largedecal\"><img src=\"assets/images/decals/decal9.png\"></div>\n                 </div>\n                 <div id=\"decal10\" class=\"symbolclick customizeproductimage imgselector \" (click)=\"changeimg('%3B');\" rel=\";\">\n                   <img src=\"assets/images/decals/decal10.png\">\n                  <div class=\"largedecal\"><img src=\"assets/images/decals/decal10.png\"></div>\n                 </div>\n                 <div id=\"decal6\" class=\"symbolclick customizeproductimage imgselector \" (click)=\"changeimg('%3B');\" rel=\";\">\n                   <img src=\"assets/images/decals/decal6.png\">\n                  <div class=\"largedecal\"><img src=\"assets/images/decals/decal6.png\"></div>\n                 </div>\n                 <div id=\"decal7\" class=\"symbolclick customizeproductimage imgselector \" (click)=\"changeimg('%3B');\" rel=\";\">\n                   <img src=\"assets/images/decals/decal7.png\">\n                  <div class=\"largedecal\"><img src=\"assets/images/decals/decal7.png\"></div>\n                 </div>\n                 <div id=\"decal12\" class=\"symbolclick customizeproductimage imgselector \" (click)=\"changeimg('%3B');\" rel=\";\">\n                   <img src=\"assets/images/decals/decal12.png\">\n                  <div class=\"largedecal\"><img src=\"assets/images/decals/decal12.png\"></div>\n                 </div> <br>\n            </ng-container>\n            \n            <ng-container *ngIf=\"products[0]?.statedecal != null\">\n                <div class=\"decalslabel col-sm-12\"><p style=\"width: 100%;margin: auto\">State Decal</p></div> <br>\n                <div id=\"d\" class=\"symbolclick customizeproductimage imgselector \" (click)=\"changeimg('%3E')\" rel=\">\">\n                   <img src=\"https://www.licenseplates.tv/decals/{{stateDecal[0]}}\">\n                  <div class=\"largedecal\"><img src=\"https://www.licenseplates.tv/decals/{{products[0].statedecal}}\"></div>\n                 </div>\n            </ng-container>\n                 \n                 \n              </div>\n          <div id=\"decalsyear\">\n          <div class=\"decalslabel\">&nbsp;</div>\n                 <!--<div id=\"adecal3\" class=\"customizeproductimage imgselector  selected\" (click)=\"changeimg('decal3');\" >\n                   2013\n                 </div>//-->\n                 <div id=\"adecal4\" class=\"customizeproductimage imgselector \" [ngClass]=\"selectedDecal == 1 ? 'active' : ''\" (click)=\"changeimg('',1);\">\n                   2014\n                 </div>\n                 <div id=\"adecal5\" class=\"customizeproductimage imgselector \" [ngClass]=\"selectedDecal == 2 ? 'active' : ''\" (click)=\"changeimg('',2);\">\n                   2015\n                 </div>\n                 <div id=\"adecal1\" class=\"customizeproductimage imgselector \" [ngClass]=\"selectedDecal == 3 ? 'active' : ''\" (click)=\"changeimg('',3);\">\n                   2016\n                 </div>\n                 <div id=\"adecal2\" class=\"customizeproductimage imgselector \" [ngClass]=\"selectedDecal == 4 ? 'active' : ''\" (click)=\"changeimg('',4);\">\n                   2017\n                 </div>\n                 <div id=\"adecal11\" class=\"customizeproductimage imgselector \" [ngClass]=\"selectedDecal == 5 ? 'active' : ''\" (click)=\"changeimg('',5);\">\n                   2018\n                 </div>\n              </div> <br style=\"margin-bottom: 1em;\">\n\n                </div>\n              </div>\n        \n       \n        \n       \n        \n        \n            <style type=\"text/css\">\n              #decals,#decalsyear {clear: both !important;display: block !important;float: none !important;width: 100% !important;padding: 10px;margin-bottom: 6px;}\n              #decals .customizeproductimage , #decalsyear .customizeproductimage {float: left;\n    margin-right: 6px;\n    text-align: center;\n    width: 48px;}\n              #decals .customizeproductimage.imgselector.active , #decalsyear .customizeproductimage.imgselector.active{ border:1px solid #090;}\n              .largedecal{background-color: rgb(255, 255, 255); position: absolute; display: none; border:1px solid #dc232f;}\n              #decals .customizeproductimage.imgselector:hover .largedecal{display:block;}\n            </style>\n                <div class=\"clearBoth\"></div>\n                        </div>\n               \n                 \n              \n                  </div>\n\n        <div class=\"card-body\">\n            <!-- <a class=\"shop_now_btn\" href=\"javascript:void(0)\"><img src=\"assets/images/shop_now_button.png\" (click)=\"subCat(item)\" width=\"250\" alt=\"Shop Now\"></a> -->\n            <!-- <h5 style=\"font-size: 18px;width: 98%;margin: auto;color: #000\" class=\"card-title\">{{item.products_name}}</h5> -->\n\n            <!-- <h4 class=\"text-danger\">$100.00 $80.00 Save: 15% off</h4> -->\n                <!-- <div class=\"well\">\n            <h3 class=\"text-danger\"> <span class=\"old_price\">${{item.products_price | number : '1.2-2'}}&nbsp;</span> &nbsp;${{item.products_price_sorter | number : '1.2-2'}}&nbsp; Save: 15% off</h3>\n                        <a href=\"\"><img src=\"assets/images/buy.png\" alt=\"\">  </a>\n                </div> -->\n                <ng-container *ngIf=\"plateHolders.length > 0\">\n                  <div class=\"row mb-4\">\n                    <div class=\"col-xs-12 text-center\">\n                        <h6>Universal Plate Holder</h6>\n                    </div>\n                    <div class=\"col-xs-12 text-center\">\n                      <img src=\"assets/images/universalplateholder.gif\" alt=\"\">\n                    </div>\n  \n                    <div class=\"col-xs-12 text-center\" style=\"padding-top: 1em;\">\n                      <div class=\"form-group\">\n                        <label for=\"exampleFormControlSelect1\">Please choose:</label>\n                        <select style=\"font-family: 'Roboto';\" class=\"form-control\" (change)=\"test()\" [(ngModel)]=\"plateType\"   #ctrl=\"ngModel\" id=\"exampleFormControlSelect1\">\n                          <option select>--NONE--</option>\n                          <option *ngFor=\"let plate of plateHolders\" value=\"{{plate.products_options_values_name}}\">\n                            {{plate.products_options_values_name}}&nbsp;( ${{plate.options_values_price | number : '1.2-2'}} )\n                          </option>\n                          <!-- <option>2</option>\n                          <option>3</option>\n                          <option>4</option>\n                          <option>5</option> -->\n                        </select>\n                      </div>\n                    </div>\n                  </div>\n                </ng-container>\n                \n\n\n           <div class=\"row\">\n             <div style=\"padding-left: 24px\" class=\"col-xs-6 col-sm-6 text-center\">\n              <span class=\"tile_div\">\n                <button (click)=\"decriment()\" class=\"btn\"><i class=\"fa fa-minus\" aria-hidden=\"true\"></i></button>&nbsp;\n               &nbsp;<h5 class=\"txtnum\">{{num}}</h5>&nbsp;\n               <button (click)=\"incriment()\" class=\"btn\"><i class=\"fa fa-plus\" aria-hidden=\"true\"></i></button>&nbsp;\n              </span>               \n             </div>\n             <div (click)=\"confirm()\" class=\"col-xs-6 col-sm-6 text-right\">\n               <img style=\"padding-right: 16px;cursor: pointer;\" src=\"assets/images/buy-now.png\" alt=\"\">\n             </div>\n\n             \n\n           </div>     \n          \n          \n        </div>\n      </div>\n              </div>\n      </ng-container>\n     \n  </div>\n\n  <div *ngIf=\"products\" class=\"row\">\n    <div id=\"prod-details\" class=\"col-sm-12 text-center\">\n\n       \n            <ul class=\"list-group text-left\" style=\"padding: 0 1.6em 0 1.6em\">\n                <ng-container *ngFor=\"let item of products\">\n                <li (click)=\"toggle('item1')\" class=\"list-group-item d-flex justify-content-between align-items-center\">\n                  Description\n                  <span *ngIf=\"itemOn != 'item1'\" class=\"badge badge-primary badge-pill\"><i class=\"fa fa-plus\" aria-hidden=\"true\"></i></span> \n                  <span *ngIf=\"itemOn == 'item1'\" class=\"badge badge-primary badge-pill\"><i class=\"fa fa-minus\" aria-hidden=\"true\"></i></span> \n                  <ng-container *ngIf=\"itemOn == 'item1'\">\n                      <hr>\n                  <p [innerHTML]=\"'<ul class=descblock>'+item.products_description+'</ul>'\"></p>\n                  </ng-container>\n                  \n                </li>\n                <li (click)=\"toggle('item2')\" class=\"list-group-item d-flex justify-content-between align-items-center\">\n                  Additional Information\n                  <span *ngIf=\"itemOn != 'item2'\" class=\"badge badge-primary badge-pill\"><i class=\"fa fa-plus\" aria-hidden=\"true\"></i></span>\n                  <span *ngIf=\"itemOn == 'item2'\" class=\"badge badge-primary badge-pill\"><i class=\"fa fa-minus\" aria-hidden=\"true\"></i></span>\n                  <ng-container *ngIf=\"itemOn == 'item2'\">\n                      <hr>\n                  <p>PRODUCT USE: All license plates marketed by Autogeardepot.com, Inc. and LICENSEPLATES.TV, are sold as novelty and not for official use items. Henceforth, none of our replica license plates may be used in lieu of county issued, state issued, country issued or officially (government) issued license plates. The license plate replicas manufactured and marketed by Autogeardepot.com, Inc and LICENSEPLATES.TV are similar but may not be identical to originals (officially issued) due to different materials, colors/hues and character type styles used. You are wholly responsible to ensure that the license plates purchased from this site will not be used in a way so as to violate county, state or country statutes. Autogeardepot.com, Inc, LICENSEPLATES.TV, our suppliers and licensors are not responsible for legal violations that may arise from the use of products marketed on this site.</p>\n                  </ng-container>\n                </li>\n                <li (click)=\"toggle('item3')\" class=\"list-group-item d-flex justify-content-between align-items-center\">\n                  Help & Info\n                  <span *ngIf=\"itemOn != 'item3'\" class=\"badge badge-primary badge-pill\"><i class=\"fa fa-plus\" aria-hidden=\"true\"></i></span>\n                  <span *ngIf=\"itemOn == 'item3'\" class=\"badge badge-primary badge-pill\"><i class=\"fa fa-minus\" aria-hidden=\"true\"></i></span>\n                  <ng-container *ngIf=\"itemOn == 'item3'\">\n                      <hr>\n                  <p>Please see <a href=\"https://www.licenseplates.tv/faq.html\">FAQ</a> for more information</p>\n                  </ng-container>\n                </li>\n                <li (click)=\"toggle('item4')\" class=\"list-group-item d-flex justify-content-between align-items-center\">\n                    Customer Service\n                    <span *ngIf=\"itemOn != 'item4'\" class=\"badge badge-primary badge-pill\"><i class=\"fa fa-plus\" aria-hidden=\"true\"></i></span>\n                    <span *ngIf=\"itemOn == 'item4'\" class=\"badge badge-primary badge-pill\"><i class=\"fa fa-minus\" aria-hidden=\"true\"></i></span>\n                    <ng-container *ngIf=\"itemOn == 'item4'\">\n                        <hr>\n                    <p>For customer service, please email us at info@licenseplates.tv or to speak to a live person call 800-491-2068 | 954-485-0995</p>\n                    </ng-container>\n                  </li>\n                  <li (click)=\"toggle('item5')\" class=\"list-group-item d-flex justify-content-between align-items-center\">\n                      Our Company\n                      <span *ngIf=\"itemOn != 'item5'\" class=\"badge badge-primary badge-pill\"><i class=\"fa fa-plus\" aria-hidden=\"true\"></i></span>\n                      <span *ngIf=\"itemOn == 'item5'\" class=\"badge badge-primary badge-pill\"><i class=\"fa fa-minus\" aria-hidden=\"true\"></i></span>\n                      <ng-container *ngIf=\"itemOn == 'item5'\">\n                          <hr>\n                      <p>Please see <a href=\"https://www.licenseplates.tv/about-us.html\">About Us</a> for more information</p>\n                      </ng-container>\n                    </li>\n              </ng-container>\n              </ul>\n       \n    \n      \n    </div>\n  </div>\n\n</div> <!-- container-fluid -->\n\n<style type=\"text/css\">\n  @font-face {font-family: 'aEECDMBW';src: url('{{fontUrl}}');}\n  .aEECDMBW{font-family:'aEECDMBW';}\n  </style>\n\n\n\n"

/***/ }),

/***/ "./src/app/home/product/product.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/home/product/product.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\nImport\r\n=========================== */\n/* -------------------------------------------------------------\n  Sass CSS3 Mixins! The Cross-Browser CSS3 Sass Library\n  By: Matthieu Aussaguel, http://www.mynameismatthieu.com, @matthieu_tweets\n\n  List of CSS3 Sass Mixins File to be @imported and @included as you need\n\n  The purpose of this library is to facilitate the use of CSS3 on different browsers avoiding HARD TO READ and NEVER\n  ENDING css files\n\n  note: All CSS3 Properties are being supported by Safari 5\n  more info: http://www.findmebyip.com/litmus/#css3-properties\n\n------------------------------------------------------------- */\n/*\nColor\n=========================== */\n/*\nFont Family\n=========================== */\n.material-icons {\n  font-family: 'Material Icons';\n  font-weight: normal;\n  line-height: 20px; }\n.material-icons {\n  font-family: 'Material Icons';\n  font-weight: normal;\n  line-height: 20px; }\n@font-face {\n  font-family: 'a6x12mun';\n  src: url(\"https://www.licenseplates.tv/fonts/truetype/ag_newgermandecalnew.ttf\"); }\n@font-face {\n  font-family: 'a6x12mun';\n  src: url('ag_newgermandecalnew.ttf'); }\n.a6x12mun {\n  font-family: 'a6x12mun'; }\n.form-control {\n  font-family: 'a6x12mun'; }\n#decals .customizeproductimage.imgselector.active, #decalsyear .customizeproductimage.imgselector.active {\n  border: 1px solid #090; }\n.decalslabel {\n  float: none !important; }\n.decalslabel {\n  clear: both;\n  float: left;\n  font-weight: 700;\n  min-width: 135px;\n  padding-top: 12px; }\n.a6x12mun {\n  font-family: 'a6x12mun'; }\n.largedecal {\n  display: block; }\n.largedecal {\n  background-color: white;\n  position: absolute;\n  display: none;\n  border: 1px solid #dc232f;\n  -webkit-transform: scale(2);\n          transform: scale(2); }\n#decalsyear {\n  clear: both !important;\n  display: block !important;\n  float: none !important;\n  width: 100% !important;\n  padding: 0px; }\n#decalsyear .customizeproductimage {\n  float: left;\n  margin-right: 10px;\n  text-align: center;\n  width: 60px; }\n#decals .customizeproductimage, #decalsyear .customizeproductimage {\n  float: left;\n  margin-right: 0px;\n  text-align: center;\n  width: 60px; }\n.customizeproductimage {\n  border: 0 solid #ebebeb;\n  padding: 5px;\n  color: #dc232f;\n  text-align: center;\n  font-weight: bold; }\n.decal-date-info {\n  font-weight: 700;\n  color: #dc232f;\n  text-transform: uppercase;\n  clear: both;\n  display: block; }\n.symbolclick {\n  font-size: 20px;\n  height: 2px;\n  width: 40px; }\n.symbolclick {\n  border-radius: 10px;\n  display: table-cell;\n  font-size: 20px;\n  height: 34px;\n  margin: 2px;\n  padding-top: 1px;\n  text-align: center;\n  vertical-align: middle;\n  width: 50px;\n  cursor: pointer;\n  font-family: 'a6x12mun'; }\n.form-control {\n  background-color: #e5e5e5;\n  width: 90%;\n  height: 50px;\n  margin: auto; }\nhr {\n  margin-top: 10px;\n  margin-bottom: 10px; }\n.badge, ul.list-justify li.active, .btn-order.active.mat-menu-item {\n  background-color: #FFF !important; }\n#prod-details .btn {\n  border: 2px solid #000;\n  background: #FFF;\n  border-radius: 0px; }\n#prod-details ul li {\n  margin-bottom: 1em;\n  font-weight: bold;\n  font-size: 18px;\n  color: #000;\n  border: 2px solid #000;\n  border-radius: 0px; }\n#prod-details ul li i {\n  color: #000;\n  font-size: 20px; }\n#prod-details ul li p {\n  font-weight: 400;\n  transition: height 2s; }\n.tile_div .btn {\n  border-radius: 50%;\n  background: #FFF;\n  border: 2px solid #000;\n  height: 40px;\n  width: 41px; }\n.tile_div button, h5 {\n  display: block;\n  float: left; }\n.tile_div button, h5 {\n  margin-right: 0; }\n.btn.active.focus, .btn.active:focus, .btn.focus, .btn:active.focus, .btn:active:focus, .btn:focus {\n  outline: 0px auto -webkit-focus-ring-color;\n  outline-offset: -2px; }\n.btn i {\n  font-size: 18px;\n  color: #000;\n  position: relative;\n  top: 1px; }\n.txtnum {\n  margin-bottom: 0px;\n  font-size: 25px;\n  padding: 0 4px 0 4px;\n  position: relative;\n  top: 6px; }\n.container-fluid, .col-sm-4, .col-sm-12 {\n  padding-right: 0px !important;\n  padding-left: 0px !important; }\n.card {\n  border-top: 4px solid #c3c3c3;\n  padding: 1em; }\nh1, h2, h3, h4, h5 {\n  text-transform: none; }\n.card-text {\n  font-weight: 600;\n  color: #000; }\n.card_plate {\n  border-top: 2px solid #c3c3c3; }\n.shop_now_btn img {\n  margin: 1em; }\n.footerblock {\n  background: #fff;\n  margin: 20px;\n  box-shadow: 1px 2px 2px 0px;\n  padding: 8px 10px;\n  min-height: 70px;\n  border: 1px solid #d8d8d8; }\n.text-danger {\n  color: #dc232f; }\n.old_price {\n  text-decoration: line-through; }\n.btn-primary {\n  color: #fff;\n  background-color: #337ab7;\n  border-color: #6b696b;\n  border-radius: 0px;\n  width: 50%;\n  margin: 1em;\n  background-color: #6b696b !important;\n  font-size: x-large;\n  font-weight: bold; }\n.well {\n  background-color: #fff;\n  border: 0px solid #fff;\n  margin-bottom: 0px;\n  padding-bottom: 0px;\n  padding-top: 0px; }\n.descblock > br {\n  display: none; }\n.descblock > li {\n  list-style-type: circle;\n  list-style-position: outside;\n  margin-left: 10px; }\n.banner {\n  padding: 60px 0 0 0;\n  background-color: #f5f5f5;\n  background-image: url(\"/assets/images/bg/brick-wall.png\");\n  position: relative; }\n.banner:before {\n    content: '';\n    position: absolute;\n    z-index: 1;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: rgba(0, 0, 0, 0.1);\n    /* For browsers that do not support gradients */\n    /* For Safari 5.1 to 6.0 */\n    /* For Opera 11.1 to 12.0 */\n    /* For Firefox 3.6 to 15 */\n    background: linear-gradient(rgba(0, 0, 0, 0.1), #f5f5f5);\n    /* Standard syntax */ }\n.banner .row {\n    margin-top: 0;\n    margin-bottom: 0;\n    position: relative;\n    z-index: 2; }\n.banner .row .content {\n      padding-top: 115px;\n      margin-bottom: 25px; }\n.banner .row .content .sub-title {\n        text-transform: uppercase; }\n.banner .row .content .title {\n        margin: 15px 0 40px 0;\n        text-transform: none; }\n.banner .wrap-demo {\n    height: auto;\n    padding: 0 15px; }\n.banner img {\n    display: block; }\n/* Loading\r\n======================== */\n.wrap-loading {\n  position: relative;\n  width: 100%;\n  top: 0;\n  right: 0; }\n.wrap-loading mat-spinner {\n    width: 50px;\n    height: 50px;\n    display: block;\n    margin: auto; }\n/* Wrap Home 2\r\n======================== */\n.wrap-home {\n  padding: 0 45px;\n  margin: 0;\n  position: relative;\n  background: #fff;\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG4AAABFBAMAAABZHs49AAAALVBMVEXGxsbHx8fGxsbExMTIyMjHx8fBwcHDw8PJycnJycnIyMjJycnJycnJycnExMSNogPvAAAAD3RSTlNQYFVFamU6QHp1cH+KhUprl3zAAAAMHElEQVR4Xj2X628cVZ6G3985VXZuWL9T1Z12HBadU3YTwiU63eXYhJu6fYnjIFB124bcPjh0qGa0rNSmg5vd0UhxLhtfwspOHIiJGDmDYRMnrLhkRg5OVrA7M2R3zApm2JmEBCkEmN0v+z+sI2Xm+XCq6sNzPj0q6cXS1aWvBnOJ08de/+Jab3/L9qmHfrlp1Bk6fGni6tvjzrXRk8ebpnpnendsm56k7ulDvzm5FvRhpg11ldyzM9N9b63rD45MXOsez204u+dYR3DjzVLcFsfl4Vq1XFl+lOPh8spV9UPD5XJY/se2F/Dk1tbG7Re8r0+OjzQF1UcPrDs0mgpbPhiuxLeeAorfO6GlhIlypOrWxuUw1d5t7pGhRLxMbTj+CYVbAuKicZ3k1ICO5OoNZ/KJLnVubupM0Sl4LcYZiDwjBbQUngZMMhnxZvEHs/rQv5FOYGMhqQLRwKv3J7ocVi2qI5lgkSRhOiYBD1qDQQDDkNKJYfY0tAbynC+AITYOKZVQZPIqEkqpjQn1zKdQ1mqAoQUIBIL7z0XRKjWlZ4vK8XIabGzeCJUgpWh9IllIUuaZA0BWa4TMnAURa5j1dd0tYDbaIV0wAZsNh9OKPSilWkRLosOYgeSurwQ0EEAwCA4aWNKaNzpcQBMwUGwpECtNgx2Upzuiq3LutGgdWv0BHAQMLZpZw7Fa44fFbk+z0kCrBql3PA1RUUZBIZ3rVl2wvvPo6pGsDiKtvYBZQCgtSF06ko6MbpZC30LUB4Dq/kEps+5gvouTec2Ku+9Z+lLA2uxTqEACFbsMwr9tvPDNhU92RPM3r1xe+mJx28Sn58cWFj4ZoQejkefbU1bMTBd3T1xZvDJ6ZWlicaEXS9fHTzXNj/3h5bvhfNmzt7P9e39wy5RKzhbO9s7PTw1snzu1bf3YKXbl25f1yq97jj8WIb5Dmevb74YTh6vb2qu1oXJ26rnh9g3ltnL8HoRohJbtyP45Lsdtz5fLMYQseEgAH90N50+vfl6qVjLV2r5yPCj9DOwrc9sjco7kkwOyQeVVX339mhfqwQQhLIjvhlOtxbe0EbjVuYGigBh0/FOWFOQARrpZA/qh17KAgAcbCPXXcCqWHWczkhYSAHt4PMMQpiDA8BxBDXh4PxgMDQ+wGsweQfOL2cCQKwKZ28RRjvo6RhsU54QWBE0CAt69g4NAMzELCAjSrAGT36dZKAFdr5Hq0wrejtkI2KxYMggamva8Y30ws/TFHRNaEJKTe3OaSQikCgBYU7TbbkK42eNHGQ40BXbPc1aCyRekXSgi0gpidp+O/BaXRXRGcwANnLMRa8qzB1BGM2YO+BkNeIYstGQBthS8O2n9+maHBKCF0lLBQAkJqICA2xoADtTZFJKJkUJXR3/3zMy5gcZATL05lfik0L+zP7o+f3L67Pq5xJG353q2Rw+MdAgdzA0oEwUrX3qIcPnbs9NjXU7y3MzUXO+2xNy6kV07HpyeP9o46uH1xu3jc4e/fGzXwvjo+y+9zqed+rDcNTp26GAC/xP6djmw0nBcbqvtrdXKpeXXuFytxeU76b2Qs4P57TNH9q4dqa9VqtlqW0mGmJxCYVXQdLSuLWUpyFm0+3nlJdCv6kpnEsmxqXVfdW2ZUT/WD05vOVQNsxRCyTC0z4XIB6D6P+5V+a7kg3Pz3QVjvCS6vZ/VzmVKOZbPQlAhnXdVdP/fQwDWg4+GulnkKQH679Z80uO8WiY9gISIvIcfb2nOjvihz44HymxhGRsLCpsVtAUp5JRDfTcyKrdssTIdjlNwmvq9NfuEbOrJ+R6HsArk496WCsFCS82sGd0g0zO231NIJEhF3WcShbwQ9LSjGP6sZA/cAG6Xcvj+WwJWagYDnSioBONmq1KJOyL3pxOKVV4dm2IO6zslMSud8TvrwSuttFQRAOBr5KHq+eqrxWWRlBcllsmztut7GOAp2azJwxaR+t6pbMUdlI5YGyAyhf6J60PLDiuhOG+UBsTxmUMbrxPIy/ka0MCzuPS5fUrCAgSA4YWIS4PdLUrtTp7Mq6IXBLlWXjyx7+n3KjoFP2yX7ZDSyid+f/n02MLrEzPvL0ysP4dvF28sXLtxambh1PjHLauHPo3akdlycG7ljZMXz686tuvD8d89nzn4+dHeqeuLKx7oOXTj0a9SteRLGu78J1cubSseHyioi2d7D887Z3aMjfcudOWbe+4vD8elSvuTeTud2vDCr6WNgTLX4pLe5aDQ3zGQvnjaLQzkJQnU8UewK0uAtaEqFKa99vDBFm4utcu4AtRCNLcNCmw5geRAwGlARwE02CZ3p2iAhDLG5am04pU7RnefqCKXSBaNgWLSjAzWlKBQAIyUEQsJa4PTJwQ5WikEhW4IFW3GikiS6ygW1mqWDEA//gYKLSYDgJsBKQP1yH9UQd+ZYo6V0CrdYG7LR2crprOfq8IhBqwFiz0SupDIMQSYPQbCe0beMURBoUCRFxE5CvqBviFs5a0252ag0MFo9h9qg0MsdEBWA5Csd31dgni+JaD+pNCuJxTBPPtSfuCroaYsG62TgJViTRWJDpsjhYgljCL10IcllcwcNE2GteCh7d39eodfeZpLocwoBlxAOVAAJRSUuU8CRgdoWH2wCuMq6jOhxIZuLVg/8vOoq/I4U9Iix76VUGLLt/giJ0iluxvnz701vri0tPTHSj602OQFyenG3/3SK+pXbm5+P9/x0avcYzMvfc8kmpF9pBOy9MXS0o2Wkx1d57zF4v8e6Gl8+tTlsWuzz1y+ND9+8vLyTf++p+ny+Pxb79889/SeJ5Y+W7y48+zkFOLB0FZ1qA8LL1XNnghJBMmmgUDnNwRLv111ZfrAr3ceYRYhSxlaG0A0Tfan13TCFLVHzX/uk5LpuBy2MkxV5q8NjO9ovPqvL3/68eYzs+PBhVTnI7IuLovOXzkrOt5tGbtUQocCQ4hJKhTzAXkqrd2EDh6Y2Hk5cvXKdUfLO45M9G1WH7vBwKmqivfjR5HbtOJFgAXgNWxX3R3GIyEC46SNcoPzH2jW8J5YOnXwp77/o5+loK+5vPexrPJIb9yHdCHvJZV476KjFKs0SJik8ETT5Vc9EZCBC7jAbKgE3pEZd5XnKLe5M49cvp8Ni/PHIyqq4zCsiDTEisUKBR4SAlBCI7yT12RP1rjFDu2KIIDhgvESxa40NkGwJqOM0KDVv91rPBgBABnCGokhdBzVye80EdnIAFaLwMOBjfmAtSYRCHf5CFa3DwmAyELgtoNmrrf6ZGrIFWgRGgxE0lCBsSsvAqUKEHkIIfSqmTdfCSDBACRVgf37Sf7ijRwxOgwXNIAwPTp27vCJIC3gJiNRjFxo331iOGyQMpdlaFuNa+1koQ++WbSKIgANFolj//nhmbkevO5cGJ0907t4ff09B0cnTo+8dv7YjdPH1x399u3hz0rVSrkSftAZXrk0cfM3S8v8FxI7tz2xszCI9b6/N9N/evJP45sTb0WHeXj2bGqt91G1d+3fDe+7lNtP3zVI0nvPv5Fd+qafXEzO1lLxcLXttVKsbaKxVh//36/i6vC+cC3Wldt2x1vjtrXVhpU/qYesrvju2ukXt64Vw601xHE1U91f5C9Da8O2Unx/7zvxcFwNK0++F8fx8GCtVDp07uK7zt/0J3ZuaKvVqnFb3ctxDArYagFrAgj21L2dlftL5Lo2bq/VYHzAO/x7uuW6ORYNWPVzD9zwyE9bcwBICwECGFKR7qyVhCWBgSAHKYiKtzMeI3vbMwStAAi9ZosFQL4UAEEgMALUN+SiZXPrLQFISJJS3svsexR4WcC7FZCwD++tAIAMBGSGSGoGvGifYCIXJCMNId37inPNHpApMPDXsQEN1gIQGgZgENTUEHtCZIVOQWufOfTOe32MHxRLzXfHxpvWB5ATBgJBRggtRPoXL3DOJyPgz0KQlqR3ZwWkKfBK7y9jo0dI+IFIC0GBIRibkd6/7PdT7GZERhgEni6gIQe+D1Qk4C9j49ArEtBSyuZb9YBFBiI5qZc/s1anCqyLxpHU9EP+NnwLH3LD3bFRSnyPhcUbi9cmbl5dXDz81lnVf7gnOvbt9asL21Z9dv3SyMXR617qxhX/n3Yt/1q/eOzC3bHxTWvr/wPSDj5oMxdQWAAAAABJRU5ErkJggg==\"); }\n.wrap-home > .wrap-slider {\n    overflow: hidden; }\n.wrap-home > .wrap-slider > .row {\n      position: relative;\n      z-index: 1;\n      margin: 0;\n      transition: all 0.3s ease-in-out; }\n.wrap-home > .wrap-slider > .row .col {\n        padding: 0; }\n.wrap-home > .wrap-slider > .row .col .valign-wrapper {\n          border-left: solid 1px #d0d0d0;\n          border-right: solid 1px #d0d0d0;\n          margin-left: -1px; }\n.wrap-home > .wrap-slider > .row .col .valign-wrapper .content {\n            display: block;\n            width: 100%;\n            padding: 0 15px;\n            letter-spacing: .5px; }\n.wrap-home > .wrap-slider > .row .col .valign-wrapper .content .material-icons {\n              position: relative;\n              top: 2px; }\n.wrap-home > .wrap-slider > .row .col .valign-wrapper .content img {\n              width: 100%;\n              padding: 15px;\n              margin-bottom: 15px; }\n.wrap-home > .wrap-slider > .row .col .valign-wrapper .content h1, .wrap-home > .wrap-slider > .row .col .valign-wrapper .content h2, .wrap-home > .wrap-slider > .row .col .valign-wrapper .content h3, .wrap-home > .wrap-slider > .row .col .valign-wrapper .content h4, .wrap-home > .wrap-slider > .row .col .valign-wrapper .content h5, .wrap-home > .wrap-slider > .row .col .valign-wrapper .content h6 {\n              font-weight: 900;\n              text-transform: none; }\n.wrap-home > .wrap-slider > .row .col.demo .valign-wrapper .content {\n          padding: 55px; }\n.wrap-home .nav {\n    position: absolute;\n    background: transparent;\n    width: 45px;\n    height: 100%;\n    text-align: center !important;\n    line-height: 35px;\n    left: 0;\n    top: 0;\n    z-index: 2;\n    border: 0;\n    outline: 0;\n    display: block;\n    color: #8f8f8f;\n    background: #fff; }\n.wrap-home .nav:focus {\n      background: #fff; }\n.wrap-home .nav.next {\n      margin-left: -45px;\n      left: 100%; }\n.wrap-home .nav:disabled {\n      filter: alpha(opacity=50);\n      -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=50)\";\n      -webkit-opacity: 0.5;\n      -khtml-opacity: 0.5;\n      -moz-opacity: 0.5;\n      -ms-opacity: 0.5;\n      -o-opacity: 0.5;\n      opacity: 0.5; }\n.wrap-home .nav mat-icon {\n      position: relative;\n      right: 6px;\n      top: 2px;\n      font-size: 32px; }\n/* Responsive\r\n======================== */\n@media (max-width: 1200px) {\n  .wrap-home > .wrap-slider > .row .col .valign-wrapper .content {\n    padding: 0 30px; } }\n@media (max-width: 920px) {\n  .wrap-home {\n    padding: 0; }\n    .wrap-home > .wrap-slider {\n      border: 0; }\n      .wrap-home > .wrap-slider .row {\n        width: 100% !important;\n        -webkit-transform: translateX(0) !important;\n                transform: translateX(0) !important; }\n        .wrap-home > .wrap-slider .row .col {\n          width: 100% !important;\n          border-bottom: solid 1px #efefef;\n          background: rgba(255, 255, 255, 0.5); }\n          .wrap-home > .wrap-slider .row .col.demo {\n            background: transparent; }\n          .wrap-home > .wrap-slider .row .col .valign-wrapper {\n            height: auto !important; }\n            .wrap-home > .wrap-slider .row .col .valign-wrapper .content {\n              padding: 55px 30px; }\n    .wrap-home .nav {\n      display: none; } }\n@media (min-width: 768px) and (max-width: 920px) {\n  .wrap-home > .wrap-slider > .row .col .valign-wrapper .content {\n    width: 80%;\n    display: table;\n    margin: auto;\n    position: relative;\n    overflow: hidden;\n    text-align: left !important;\n    padding-left: 250px; }\n    .wrap-home > .wrap-slider > .row .col .valign-wrapper .content img {\n      padding: 30px;\n      position: absolute;\n      left: 0;\n      top: 0;\n      width: 250px; } }\n@media (max-width: 767px) {\n  .wrap-home > .wrap-slider > .row .col .valign-wrapper {\n    border: 0; }\n    .wrap-home > .wrap-slider > .row .col .valign-wrapper .content {\n      padding: 55px 15px; }\n      .wrap-home > .wrap-slider > .row .col .valign-wrapper .content img {\n        width: 250px;\n        display: block;\n        margin-left: auto;\n        margin-right: auto; } }\n"

/***/ }),

/***/ "./src/app/home/product/product.component.ts":
/*!***************************************************!*\
  !*** ./src/app/home/product/product.component.ts ***!
  \***************************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_lib_service_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/lib/service/product.service */ "./src/app/lib/service/product.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _dropDown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dropDown */ "./src/app/home/product/dropDown.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var ProductComponent = /** @class */ (function () {
    function ProductComponent(router, _productService, route, doc) {
        this.router = router;
        this._productService = _productService;
        this.route = route;
        this.doc = doc;
        this.imgUrl = 'https://www.licenseplates.tv/images/';
        this.text = '';
        this.text2 = '';
        this.Urltext = '';
        this.num = 1;
        this.Urltext2 = '';
        this.plateType = '--NONE--';
        this.plateholderPrice = 0;
    }
    ProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dropDown1 = _dropDown__WEBPACK_IMPORTED_MODULE_4__["fontArray_1"];
        this.dropDown1 = _dropDown__WEBPACK_IMPORTED_MODULE_4__["fontArray_2"];
        this.route.params.subscribe(function (params) {
            return _this.getProdDetail(params.id);
        });
        // this.Urltext = encodeURIComponent(this.text);
    };
    ProductComponent.prototype.setFont = function (e) {
        this.font = e.id;
    };
    ProductComponent.prototype.selectInput1 = function () {
        // console.log('input 1 selected!');
        this.input1 = true;
        this.input2 = false;
    };
    ProductComponent.prototype.selectInput2 = function () {
        // console.log('input 2 selected!');
        this.input2 = true;
        this.input1 = false;
    };
    ProductComponent.prototype.changeimg = function (val, num) {
        this.selectedDecal = num;
        if (this.input2) {
            this.text2 += decodeURIComponent(val);
            this.Urltext2 += val;
        }
        else {
            this.text += decodeURIComponent(val);
            this.Urltext += val;
        }
    };
    ProductComponent.prototype.addVal = function (val) {
        console.log(val);
        // tslint:disable-next-line:no-bitwise
        if (val == '#' || val == '$' || val == '&' || val == '<' || val == '+') {
            if (this.input2) {
                this.text2 += val;
                this.Urltext2 += encodeURIComponent(val);
            }
            else {
                this.text += val;
                this.Urltext += encodeURIComponent(val);
            }
        }
        else {
            if (this.input2) {
                this.text2 += val;
                this.Urltext2 += val;
            }
            else {
                this.text += val;
                this.Urltext += val;
            }
        }
    };
    ProductComponent.prototype.confirm = function () {
        if (this.products[0].xPos1 != null && this.text == '') {
            alert('Text field shouldn\'t be empty!');
        }
        else {
            var r = confirm("Make sure the letters you entered for your Custom License Plate/Frame are Correct! \n\n" +
                " Please remember that custom items are personalized individually for you, " +
                "and are not refundable or returnable.\n\n Our replica State license plates are for unofficial use only, " +
                "and are not to be used in lieu of officially issued plates.");
            if (r == true) {
                this.addCart();
            }
            else {
                console.log('cancel');
            }
        }
    };
    ProductComponent.prototype.addCart = function () {
        var cart = {
            productImage: this.products[0].products_image,
            productName: this.products[0].products_name,
            productModel: this.products[0].products_model,
            plateText1: this.text ? this.text : '',
            plateText2: this.text2 ? this.text2 : '',
            itemQuantity: this.num,
            productID: this.products[0].products_id,
            TotalPrice: (parseFloat(this.products[0].old_price) + parseFloat(this.plateholderPrice)) * this.num,
            UnitPrice: this.products[0].old_price,
            plateType: this.plateTypeName,
            platePrice: this.plateholderPrice
        };
        if (localStorage.cartItems) {
            var Items = JSON.parse(localStorage.getItem('cartItems'));
            if (Items.map(function (e) { return e.productID; }).indexOf(cart.productID) > -1) {
                this.arrayCheck(cart);
            }
            else {
                Items.push(cart);
                localStorage.cartItems = JSON.stringify(Items);
                this.getCartitemCount();
                this.router.navigateByUrl('cart');
            }
        }
        else {
            var CartItem = [];
            CartItem.push(cart);
            localStorage.cartItems = JSON.stringify(CartItem);
            this.getCartitemCount();
            this.router.navigateByUrl('cart');
        }
    };
    ProductComponent.prototype.test = function () {
        var _this = this;
        if (this.plateType !== '--NONE--') {
            console.log('hhh');
            console.log(this.plateType);
            console.log(this.plateType);
            var selctplate = this.plateHolders.filter(function (e) { return e.products_options_values_name == _this.plateType; });
            console.log(selctplate[0].options_values_price);
            this.plateTypeName = this.plateType;
            this.plateholderPrice = selctplate[0].options_values_price;
        }
    };
    ProductComponent.prototype.selectPlate = function (val) {
        this.plateTypeName = val.products_options_values_name;
        this.plateholderPrice = val.options_values_price;
        console.log(parseFloat(this.plateholderPrice));
        console.log((parseFloat(this.products[0].old_price) + parseFloat(this.plateholderPrice)) * this.num);
        alert('plate selected is ' + this.plateTypeName + ' ' + this.plateholderPrice);
    };
    ProductComponent.prototype.arrayCheck = function (cart) {
        console.log('array check on');
        var Items = JSON.parse(localStorage.getItem('cartItems'));
        if (Items.map(function (e) {
            return e.plateText1;
        }).indexOf(cart.plateText1) > -1) {
            console.log('index is greater');
            if (cart.plateText2 != '') {
                this.arrayCheck2(cart);
            }
            else {
                console.log('array check 2 else on');
                this.index = Items.map(function (e) { return e.plateText1; }).indexOf(cart.plateText1);
                Items[this.index].itemQuantity += 1;
                console.log(this.index);
                localStorage.cartItems = JSON.stringify(Items);
                this.getCartitemCount();
                this.router.navigateByUrl('cart');
            }
        }
        else {
            Items.push(cart);
            localStorage.cartItems = JSON.stringify(Items);
            this.getCartitemCount();
            this.router.navigateByUrl('cart');
        }
    };
    ProductComponent.prototype.arrayCheck2 = function (cart) {
        console.log('array check 2 on');
        var Items = JSON.parse(localStorage.getItem('cartItems'));
        if (Items.map(function (e) { return e.plateText2; }).indexOf(cart.plateText2) > -1) {
            this.updateQuantity(cart);
        }
        else {
            Items.push(cart);
            localStorage.cartItems = JSON.stringify(Items);
            this.router.navigateByUrl('cart');
        }
    };
    ProductComponent.prototype.updateQuantity = function (cart) {
    };
    ProductComponent.prototype.getCartitemCount = function () {
        // console.log('jjhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh')
        var Items = JSON.parse(localStorage.getItem('cartItems'));
        var itemNum = Items.length;
        this._productService.changeItem(itemNum);
    };
    ProductComponent.prototype.changeTxt = function () {
        // console.log('hhhh' + encodeURIComponent(this.text));
        this.Urltext = encodeURIComponent(this.text);
        this.Urltext2 = encodeURIComponent(this.text2);
    };
    ProductComponent.prototype.toggle = function (item) {
        if (item === this.itemOn) {
            this.itemOn = '';
        }
        else {
            this.itemOn = item;
        }
    };
    ProductComponent.prototype.getProdDetail = function (id) {
        var _this = this;
        this._productService.getProdDetails(id)
            .subscribe(function (data) {
            //console.log(data);
            _this.products = data.product;
            _this.plateHolders = data.productvariation;
            if (_this.products[0].statedecal) {
                _this.stateDecal = _this.products[0].statedecal.split(';');
            }
            var link = _this.doc.createElement('link');
            link.setAttribute('rel', 'canonical');
            _this.doc.head.appendChild(link);
            link.setAttribute('href', data.canonicalurl);
            _this.clink = link;
            //console.log('https://www.licenseplates.tv/fonts/truetype/' + this.products[0].font1 + '.ttf')
            _this.fontUrl = 'https://www.licenseplates.tv/fonts/truetype/' + _this.products[0].font1 + '.ttf';
        });
    };
    ProductComponent.prototype.decriment = function () {
        if (this.num !== 1) {
            this.num = this.num - 1;
        }
    };
    ProductComponent.prototype.incriment = function () {
        this.num = this.num + 1;
    };
    ProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product',
            template: __webpack_require__(/*! ./product.component.html */ "./src/app/home/product/product.component.html"),
            styles: [__webpack_require__(/*! ./product.component.scss */ "./src/app/home/product/product.component.scss")]
        }),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"])),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            app_lib_service_product_service__WEBPACK_IMPORTED_MODULE_2__["productService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], Object])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "./src/app/lib/component/breadcumb/breadcumb.component.html":
/*!******************************************************************!*\
  !*** ./src/app/lib/component/breadcumb/breadcumb.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"location\" #location>\n    <li><a routerLink=\"/home\">Home</a></li>\n    <li *ngFor=\"let segment of segments; let i=index; let l=last;\">\n        <a *ngIf=\"i != segementLength && i == 0\" routerLink=\".\">{{segment.path}}</a>\n        <a *ngIf=\"i != segementLength && i != 0 && i != l\" [routerLink]=\"segment.path\">{{segment.path}}</a>\n        <span *ngIf=\"l\">{{segment.path}}</span>\n    </li>\n</ul>\n"

/***/ }),

/***/ "./src/app/lib/component/breadcumb/breadcumb.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/lib/component/breadcumb/breadcumb.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul.location {\n  padding: 0;\n  margin: 0 0 -5px 0;\n  display: inline-block; }\n  ul.location li {\n    float: left;\n    display: block;\n    margin-right: 15px;\n    font-size: 14px;\n    text-transform: capitalize; }\n  ul.location li:after {\n      content: \"/\";\n      font-size: 12px;\n      position: relative;\n      left: 7px;\n      color: #cfcfcf; }\n  ul.location li:last-child:after {\n      display: none; }\n  ul.location li.active {\n      color: #999; }\n  ul.location li.active:after {\n        display: none; }\n"

/***/ }),

/***/ "./src/app/lib/component/breadcumb/breadcumb.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/lib/component/breadcumb/breadcumb.component.ts ***!
  \****************************************************************/
/*! exports provided: BreadcumbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcumbComponent", function() { return BreadcumbComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _service_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/product.service */ "./src/app/lib/service/product.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BreadcumbComponent = /** @class */ (function () {
    function BreadcumbComponent(router, activeRoute, productService) {
        var _this = this;
        this.router = router;
        this.activeRoute = activeRoute;
        this.productService = productService;
        this.segments = [];
        this.router.events.subscribe(function (evt) {
            _this.createMap();
        });
    }
    BreadcumbComponent.prototype.ngOnInit = function () {
        this.createMap();
    };
    BreadcumbComponent.prototype.createMap = function () {
        var _this = this;
        this.segments = this.activeRoute.snapshot['_urlSegment'].segments;
        this.segementLength = this.segments.length - 1;
        var activeValue = this.activeRoute.url['_value'][0].path;
        for (var i = 0; i < this.segments.length; i++) {
            this.segments[i].path = lodash__WEBPACK_IMPORTED_MODULE_2__["lowerCase"](this.segments[i].path);
            if (this.segments[i].path == 'p') {
                this.segments.splice(i, 1);
            }
        }
        if (activeValue == "shop") {
            setTimeout(function () {
                if (!lodash__WEBPACK_IMPORTED_MODULE_2__["isEmpty"](_this.segments[1])) {
                    var productName = _this.segments[1].path;
                    _this.productService.getSlugProduct(productName).then(function (product) {
                        if (product != undefined) {
                            _this.segments[1].path = product['productName'];
                        }
                    });
                }
            });
        }
    };
    BreadcumbComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'breadcumb',
            template: __webpack_require__(/*! ./breadcumb.component.html */ "./src/app/lib/component/breadcumb/breadcumb.component.html"),
            styles: [__webpack_require__(/*! ./breadcumb.component.scss */ "./src/app/lib/component/breadcumb/breadcumb.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _service_product_service__WEBPACK_IMPORTED_MODULE_3__["productService"]])
    ], BreadcumbComponent);
    return BreadcumbComponent;
}());



/***/ }),

/***/ "./src/app/lib/component/grid-logo/grid-logo.component.html":
/*!******************************************************************!*\
  !*** ./src/app/lib/component/grid-logo/grid-logo.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row row-clear\" libHeight=\"item-vendor\">\n    <div *ngFor=\"let logo of logos | slice:0:limit\" [@fade] class=\"col l3 m6 s12\">\n        <div class=\"item-vendor\">\n            <img [src]=\"logo.image\" [alt]=\"logo.title\"/>\n            <a mat-button class=\"link-full\" [href]=\"logo.link\" target=\"_blank\"></a>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/lib/component/grid-logo/grid-logo.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/lib/component/grid-logo/grid-logo.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\nImport\r\n=========================== */\n/* -------------------------------------------------------------\n  Sass CSS3 Mixins! The Cross-Browser CSS3 Sass Library\n  By: Matthieu Aussaguel, http://www.mynameismatthieu.com, @matthieu_tweets\n\n  List of CSS3 Sass Mixins File to be @imported and @included as you need\n\n  The purpose of this library is to facilitate the use of CSS3 on different browsers avoiding HARD TO READ and NEVER\n  ENDING css files\n\n  note: All CSS3 Properties are being supported by Safari 5\n  more info: http://www.findmebyip.com/litmus/#css3-properties\n\n------------------------------------------------------------- */\n/*\nColor\n=========================== */\n/*\nFont Family\n=========================== */\n.material-icons {\n  font-family: 'Material Icons';\n  font-weight: normal;\n  line-height: 20px; }\n.material-icons {\n  font-family: 'Material Icons';\n  font-weight: normal;\n  line-height: 20px; }\n/*\r\nVendor\r\n=========================== */\n.item-vendor {\n  padding: 30px;\n  position: relative;\n  border-left: solid 1px #efefef;\n  border-bottom: solid 1px #efefef;\n  text-align: center; }\n.item-vendor::first-child {\n    border-left: 0; }\n.item-vendor img {\n    width: 150px;\n    display: block;\n    margin: auto;\n    filter: alpha(opacity=50);\n    -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=50)\";\n    -webkit-opacity: 0.5;\n    -khtml-opacity: 0.5;\n    -moz-opacity: 0.5;\n    -ms-opacity: 0.5;\n    -o-opacity: 0.5;\n    opacity: 0.5; }\n.item-vendor:hover img {\n    filter: alpha(opacity=100);\n    -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)\";\n    -webkit-opacity: 1;\n    -khtml-opacity: 1;\n    -moz-opacity: 1;\n    -ms-opacity: 1;\n    -o-opacity: 1;\n    opacity: 1; }\n.item-vendor .link-full {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%; }\n"

/***/ }),

/***/ "./src/app/lib/component/grid-logo/grid-logo.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/lib/component/grid-logo/grid-logo.component.ts ***!
  \****************************************************************/
/*! exports provided: GridLogoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridLogoComponent", function() { return GridLogoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _service_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/product.service */ "./src/app/lib/service/product.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GridLogoComponent = /** @class */ (function () {
    function GridLogoComponent(mainService) {
        this.mainService = mainService;
        this.logos = [];
    }
    GridLogoComponent.prototype.ngOnInit = function () {
        this.fetch();
    };
    // Limit
    GridLogoComponent.prototype.limitLogo = function (logo) {
        if (this.setlimit === undefined) {
            this.limit = logo.length;
        }
        else {
            this.limit = this.setlimit;
        }
    };
    // Fetching
    GridLogoComponent.prototype.fetch = function () {
        var _this = this;
        this.mainService.getLogo().subscribe(function (data) {
            _this.logos = [];
            lodash__WEBPACK_IMPORTED_MODULE_2__["map"](data, function (x) {
                _this.logos.push(x);
            });
            _this.limitLogo(data);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], GridLogoComponent.prototype, "setlimit", void 0);
    GridLogoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'grid-logo',
            template: __webpack_require__(/*! ./grid-logo.component.html */ "./src/app/lib/component/grid-logo/grid-logo.component.html"),
            styles: [__webpack_require__(/*! ./grid-logo.component.scss */ "./src/app/lib/component/grid-logo/grid-logo.component.scss")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fade', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('shown', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1 })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('.5s'))
                ]),
            ]
        }),
        __metadata("design:paramtypes", [_service_product_service__WEBPACK_IMPORTED_MODULE_3__["productService"]])
    ], GridLogoComponent);
    return GridLogoComponent;
}());



/***/ }),

/***/ "./src/app/lib/component/lightbox/lightbox.component.html":
/*!****************************************************************!*\
  !*** ./src/app/lib/component/lightbox/lightbox.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@focusPanel]=\"state\" class=\"wrap-lightbox\">\n    <button mat-mini-fab class=\"close\" (click)=\"closeZoom()\"><mat-icon>&#xE5CD;</mat-icon></button>\n    <div class=\"content valign-wrapper\" #contentwrap>\n        <button mat-mini-fab class=\"nav left\" (click)=\"prev()\" [disabled]=\"index == 0\"><mat-icon>&#xE314;</mat-icon></button>\n        <button mat-mini-fab class=\"nav right\" (click)=\"next()\" [disabled]=\"index == (arrayProduct.length - 1)\"><mat-icon>&#xE315;</mat-icon></button>\n        <div *ngIf=\"loadingState\" class=\"spinner\"><mat-spinner diameter=\"50\" strokeWidth=\"5\"></mat-spinner></div>\n        <div *ngIf=\"product\" class=\"wrap-img\">\n            <img [src]=\"product.image\" [alt]=\"product.productName\" />\n        </div>\n    </div>    \n    <div *ngIf=\"product\" class=\"description\">\n        <div class=\"content\">\n            <h6 class=\"title\">{{product.productName}}</h6>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/lib/component/lightbox/lightbox.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/lib/component/lightbox/lightbox.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\nImport\r\n=========================== */\n/* -------------------------------------------------------------\n  Sass CSS3 Mixins! The Cross-Browser CSS3 Sass Library\n  By: Matthieu Aussaguel, http://www.mynameismatthieu.com, @matthieu_tweets\n\n  List of CSS3 Sass Mixins File to be @imported and @included as you need\n\n  The purpose of this library is to facilitate the use of CSS3 on different browsers avoiding HARD TO READ and NEVER\n  ENDING css files\n\n  note: All CSS3 Properties are being supported by Safari 5\n  more info: http://www.findmebyip.com/litmus/#css3-properties\n\n------------------------------------------------------------- */\n/*\nColor\n=========================== */\n/*\nFont Family\n=========================== */\n.material-icons {\n  font-family: 'Material Icons';\n  font-weight: normal;\n  line-height: 20px; }\n.material-icons {\n  font-family: 'Material Icons';\n  font-weight: normal;\n  line-height: 20px; }\n/*\r\nLight Box\r\n=========================== */\n.wrap-lightbox {\n  position: fixed;\n  z-index: 999999999999999;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%; }\n.wrap-lightbox:before {\n    content: '';\n    position: absolute;\n    z-index: 1;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: #fff; }\n.wrap-lightbox .close {\n    position: absolute;\n    top: 25px;\n    right: 30px;\n    z-index: 3; }\n.wrap-lightbox .close mat-icon {\n      position: relative;\n      top: 3px; }\n.wrap-lightbox .content.valign-wrapper {\n    width: 100%;\n    position: relative;\n    z-index: 2; }\n.wrap-lightbox .content.valign-wrapper .nav {\n      position: absolute;\n      top: 50%;\n      margin-top: -20px;\n      z-index: 2;\n      padding-top: 2px; }\n.wrap-lightbox .content.valign-wrapper .nav.left {\n        left: 30px; }\n.wrap-lightbox .content.valign-wrapper .nav.right {\n        right: 30px; }\n.wrap-lightbox .content.valign-wrapper .wrap-img {\n      display: block;\n      margin: auto;\n      position: relative;\n      max-width: calc(100vw - 200px);\n      z-index: 1; }\n.wrap-lightbox .content.valign-wrapper .wrap-img img {\n        width: 100%; }\n.wrap-lightbox .description {\n    position: absolute;\n    z-index: 3;\n    bottom: 0;\n    left: 0;\n    width: 100%; }\n.wrap-lightbox .description .content {\n      padding: 15px 20px;\n      text-align: center;\n      display: table;\n      margin: auto;\n      background: #333;\n      -ms-box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.2);\n      -o-box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.2);\n      box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.2); }\n.wrap-lightbox .description .content .title {\n        margin-bottom: 0;\n        color: #fff;\n        font-weight: 400;\n        text-transform: capitalize; }\n.wrap-lightbox .mat-button, .wrap-lightbox .mat-fab, .wrap-lightbox .mat-icon-button, .wrap-lightbox .mat-mini-fab, .wrap-lightbox .mat-raised-button {\n    font-size: 16px !important; }\n.wrap-lightbox .spinner {\n    display: table;\n    margin: auto; }\n.wrap-lightbox .spinner mat-spinner {\n      width: 50px;\n      height: 50px;\n      display: block; }\n/*\r\nResponsive\r\n=========================== */\n@media (max-width: 767px) {\n  .wrap-lightbox .close {\n    top: 10px;\n    right: 15px; }\n  .wrap-lightbox .content.valign-wrapper .nav.left {\n    left: 15px; }\n  .wrap-lightbox .content.valign-wrapper .nav.right {\n    right: 15px; }\n  .wrap-lightbox .content.valign-wrapper .wrap-img {\n    max-width: 300px !important; } }\n"

/***/ }),

/***/ "./src/app/lib/component/lightbox/lightbox.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/lib/component/lightbox/lightbox.component.ts ***!
  \**************************************************************/
/*! exports provided: LightboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LightboxComponent", function() { return LightboxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _service_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/product.service */ "./src/app/lib/service/product.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LightboxComponent = /** @class */ (function () {
    function LightboxComponent(mainService) {
        this.mainService = mainService;
        this.loadingState = true;
        this.isShow = true;
        this.arrayProduct = [];
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];
        this.show = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];
        this.state = 'active';
    }
    // Close zoom
    LightboxComponent.prototype.closeZoom = function () {
        this.close.emit();
        this.state = 'inactive';
        document.getElementsByTagName("html")[0].style.overflowY = 'auto';
    };
    // Toggle Lightbox
    LightboxComponent.prototype.ngOnChanges = function () {
        this.state = this.isShow ? 'active' : 'inactive';
        if (this.state == 'active') {
            this.fetch(this.selectProduct);
            var val = this.selectProduct.toString();
            this.index = this.arrayProduct.indexOf(val);
        }
    };
    LightboxComponent.prototype.ngAfterViewInit = function () {
        this.content.nativeElement.style.height = window.innerHeight + 'px';
    };
    // On Resize
    LightboxComponent.prototype.onResize = function (event) {
        this.content.nativeElement.style.height = window.innerHeight + 'px';
    };
    // Fetch Data
    LightboxComponent.prototype.fetch = function (id) {
        var _this = this;
        this.mainService.getIdProduct(id).then(function (data) {
            _this.product = data;
            _this.loadingState = false;
            document.getElementsByTagName("html")[0].style.overflowY = 'hidden';
        });
    };
    // Prev
    LightboxComponent.prototype.prev = function () {
        if (this.index != 0) {
            --this.index;
        }
        this.product = null;
        this.loadingState = true;
        var idNext = this.arrayProduct[this.index];
        this.fetch(Number(idNext));
    };
    // Next
    LightboxComponent.prototype.next = function () {
        if (this.index < (this.arrayProduct.length - 1)) {
            ++this.index;
        }
        this.product = null;
        this.loadingState = true;
        var idPrev = this.arrayProduct[this.index];
        this.fetch(Number(idPrev));
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], LightboxComponent.prototype, "isShow", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], LightboxComponent.prototype, "selectProduct", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], LightboxComponent.prototype, "arrayProduct", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], LightboxComponent.prototype, "close", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], LightboxComponent.prototype, "show", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('contentwrap'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], LightboxComponent.prototype, "content", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], LightboxComponent.prototype, "onResize", null);
    LightboxComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'lightbox',
            template: __webpack_require__(/*! ./lightbox.component.html */ "./src/app/lib/component/lightbox/lightbox.component.html"),
            styles: [__webpack_require__(/*! ./lightbox.component.scss */ "./src/app/lib/component/lightbox/lightbox.component.scss")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('focusPanel', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('inactive', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        transform: 'scale(0)',
                        opacity: 0
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        transform: 'scale(1)',
                        opacity: 1
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('inactive => active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('300ms ease-in')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('active => inactive', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('300ms ease-out'))
                ]),
            ]
        }),
        __metadata("design:paramtypes", [_service_product_service__WEBPACK_IMPORTED_MODULE_2__["productService"]])
    ], LightboxComponent);
    return LightboxComponent;
}());



/***/ }),

/***/ "./src/app/lib/component/product/product.component.html":
/*!**************************************************************!*\
  !*** ./src/app/lib/component/product/product.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Start Product -->\n<div class=\"valign-wrapper\" *ngIf=\"loadingState\">\n    <mat-spinner diameter=\"50\" strokeWidth=\"5\"></mat-spinner> \n</div>\n\n<!-- Start Row Product -->\n<div class=\"row row-clear row-product\" \n    *ngIf=\"productState\" \n    libHeight=\"item-product\" \n    (mouseleave)=\"selectProduct = null\" \n    [class.blur]=\"blurproduct\" #row>\n    \n    <div *ngFor=\"let product of products | \n        productfilter: filter | \n        paginate: { \n            itemsPerPage: limit, \n            currentPage: currentPage \n        }; \n        let i=index;\" \n        [@fade] \n        class=\"col {{column}}\" \n        [id]=\"product.id\" \n        (mouseenter)=\"onHover(product)\">\n\n        <div class=\"item-product\">  \n            <a *ngIf=\"showBtnClose\" mat-mini-fab class=\"close\" (click)=\"selectClose(product)\">\n                <mat-icon>&#xE5CD;</mat-icon>\n            </a>\n            <img [src]=\"image_base_url+product.products_image\" [alt]=\"product.productName\"/>\n            <div class=\"content\">\n                <h6 class=\"title truncate\">{{product.products_name? product.products_name : 'product name'}}</h6>\n                <p>{{product.categories_name}}</p>\n                <rating [value]=\"product.rate\"></rating>\n                <strong class=\"price\">{{product.products_price_sorter | currency:'INR':'Rs. '}}</strong>\n                <div [@visibility]=\"selectProduct == product ? 'shown' : 'hidden'\" class=\"overlay valign-wrapper\">\n                    <ul>\n                        <li><a mat-mini-fab (click)=\"viewProduct(product.id)\"><mat-icon>&#xE8FF;</mat-icon></a></li>\n                        <li><a mat-mini-fab [routerLink]=\"'/shop/p/' + product.slug\"><mat-icon>&#xE157;</mat-icon></a></li>\n                    </ul>\n                </div>     \n            </div>\n        </div>\n    </div>\n\n    <!-- Empty Product -->\n    <div [@fade] *ngIf=\"(products | productfilter:filter).length === 0\" class=\"empty-product\">\n        <img src=\"http://via.placeholder.com/246x339\" width=\"100\" alt=\"\"/>\n        <h5 class=\"margin-bottom0 margin-top20\">Sorry... no product founded</h5>\n    </div>\n</div>\n<!-- End Row Product -->\n\n<!-- Start Wrap Pagintaion -->\n<div *ngIf=\"paginate\">\n    <div *ngIf=\"(products | productfilter:filter).length !== 0\" class=\"wrap-pagination\">\n        <pagination-controls \n            (pageChange)=\"currentPage = $event; onPageChange(currentPage)\" \n            class=\"pagination-product\">\n        </pagination-controls>\n    </div>\n</div>\n<!-- Start Lightbox -->\n<lightbox \n    [isShow]=\"togglezoom\" \n    [selectProduct]=\"getId\" \n    [arrayProduct]=\"productUpdated\"\n    (close)=\"closeZoom()\">\n</lightbox>"

/***/ }),

/***/ "./src/app/lib/component/product/product.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/lib/component/product/product.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\nImport\r\n=========================== */\n/* -------------------------------------------------------------\n  Sass CSS3 Mixins! The Cross-Browser CSS3 Sass Library\n  By: Matthieu Aussaguel, http://www.mynameismatthieu.com, @matthieu_tweets\n\n  List of CSS3 Sass Mixins File to be @imported and @included as you need\n\n  The purpose of this library is to facilitate the use of CSS3 on different browsers avoiding HARD TO READ and NEVER\n  ENDING css files\n\n  note: All CSS3 Properties are being supported by Safari 5\n  more info: http://www.findmebyip.com/litmus/#css3-properties\n\n------------------------------------------------------------- */\n/*\nColor\n=========================== */\n/*\nFont Family\n=========================== */\n.material-icons {\n  font-family: 'Material Icons';\n  font-weight: normal;\n  line-height: 20px; }\n.material-icons {\n  font-family: 'Material Icons';\n  font-weight: normal;\n  line-height: 20px; }\n/*\r\nItem Product\r\n=========================== */\n.row-product {\n  border: 0;\n  position: relative;\n  z-index: 1;\n  border-top: solid 1px transparent; }\n.item-product {\n  position: relative;\n  z-index: 1;\n  border: solid 1px #efefef;\n  margin: -0.5px;\n  background: #fff;\n  text-align: center;\n  transition: all 0.5s ease-in-out; }\n.item-product a.close {\n    position: absolute;\n    top: 10px;\n    right: 10px;\n    width: 29px !important;\n    height: 29px !important;\n    filter: alpha(opacity=50);\n    -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=50)\";\n    -webkit-opacity: 0.5;\n    -khtml-opacity: 0.5;\n    -moz-opacity: 0.5;\n    -ms-opacity: 0.5;\n    -o-opacity: 0.5;\n    opacity: 0.5;\n    background: #fff !important;\n    color: #8f8f8f;\n    border: solid 1px #efefef; }\n.item-product a.close .material-icons.mat-icon {\n      padding: 0;\n      position: relative;\n      top: -4px; }\n.item-product a.close:hover {\n      filter: alpha(opacity=100);\n      -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)\";\n      -webkit-opacity: 1;\n      -khtml-opacity: 1;\n      -moz-opacity: 1;\n      -ms-opacity: 1;\n      -o-opacity: 1;\n      opacity: 1; }\n.item-product:hover {\n    background: #fff; }\n.item-product img {\n    width: 100%;\n    display: block;\n    margin: auto; }\n.item-product .link-full {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%; }\n.item-product .title {\n    margin-bottom: 0;\n    margin-top: 0;\n    text-transform: capitalize; }\n.item-product p {\n    margin-bottom: 0;\n    color: #9f9f9f; }\n.item-product .price {\n    font-family: sans-serif; }\n.item-product .content {\n    position: relative;\n    padding: 15px 20px; }\n.item-product .content .overlay {\n      border-top: 0;\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      background: #fff; }\n.item-product .content .overlay ul {\n        padding: 0;\n        margin: 0;\n        list-style: none;\n        display: inline-block;\n        margin: 0 auto -7px auto; }\n.item-product .content .overlay ul li {\n          float: left;\n          display: block;\n          margin: 0 2px; }\n.item-product .content .overlay ul li .mat-button-wrapper {\n            position: relative;\n            top: 5px; }\n.item-product .content .overlay ul li .mat-button-wrapper .material-icons.mat-icon {\n              padding: 0; }\n.item-product .content .overlay .material-icons.mat-icon {\n        margin-top: 2px; }\n.item-product .content .overlay .mat-button, .item-product .content .overlay .mat-fab, .item-product .content .overlay .mat-icon-button, .item-product .content .overlay .mat-mini-fab, .item-product .content .overlay .mat-raised-button {\n        font-size: 16px; }\n/*\r\nEmpty product\r\n=========================== */\n.empty-product {\n  padding: 100px 0;\n  text-align: center;\n  color: #999; }\n.empty-product h1, .empty-product h2, .empty-product h3, .empty-product h4, .empty-product h5, .empty-product h6 {\n    color: #999;\n    text-transform: none; }\n/*\r\nPagination\r\n=========================== */\n.wrap-pagination {\n  padding: 25px 0 30px 0; }\n.wrap-pagination pagination-controls {\n    display: table;\n    margin: auto; }\n/*\r\nLoading\r\n=========================== */\n.valign-wrapper {\n  position: relative;\n  width: 100%;\n  top: 0;\n  right: 0;\n  background: #fff; }\n.valign-wrapper .mat-progress-spinner {\n    display: block;\n    margin: auto; }\n/*\r\nResponsive\r\n=========================== */\n@media (max-width: 480px) {\n  .row-product > .col {\n    margin-bottom: 25px; }\n    .row-product > .col:last-child {\n      margin-bottom: 0; } }\n@media (max-width: 415px) {\n  .row-product .col {\n    width: 100% !important; }\n    .row-product .col .item-product {\n      height: auto !important; } }\n"

/***/ }),

/***/ "./src/app/lib/component/product/product.component.ts":
/*!************************************************************!*\
  !*** ./src/app/lib/component/product/product.component.ts ***!
  \************************************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _service_data_product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/data/product */ "./src/app/lib/service/data/product.ts");
/* harmony import */ var _service_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/product.service */ "./src/app/lib/service/product.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductComponent = /** @class */ (function () {
    function ProductComponent(mainService) {
        this.mainService = mainService;
        // Property
        this.products = [];
        this.selectProduct = _service_data_product__WEBPACK_IMPORTED_MODULE_2__["Product"];
        this.togglezoom = false;
        this.loadingState = true;
        this.productState = false;
        this.blurproduct = false;
        this.showBtnClose = false;
        this.paginate = false;
        this.column = 'l3 s6';
        this.currentPage = 1;
        // Out Put
        this.detail = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];
        this.pageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];
        this.onRemove = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];
    }
    // Lifecycle
    ProductComponent.prototype.ngOnInit = function () {
        this.fetch();
    };
    ProductComponent.prototype.ngAfterViewInit = function () {
        this.updateProduct();
    };
    ProductComponent.prototype.ngOnChanges = function () {
        this.updateProduct();
    };
    ProductComponent.prototype.onLoad = function (event) {
        this.updateProduct();
    };
    // Update product filtered & on init
    ProductComponent.prototype.updateProduct = function () {
        var _this = this;
        this.productUpdated = [];
        setTimeout(function () {
            if (_this.row !== undefined) {
                var children = _this.row.nativeElement.children;
                for (var i = 0; i < children.length; i++) {
                    if (_this.productUpdated.indexOf(children[i].id) !== -1) {
                        return false;
                    }
                    _this.productUpdated.push(children[i].id);
                }
            }
        }, 1000);
    };
    // Fetching
    ProductComponent.prototype.fetch = function () {
        var _this = this;
        this.mainService.getProduct().subscribe(function (data) {
            console.log('products are ', data.product_data);
            _this.products = data.product_data;
            _this.image_base_url = data.url;
            // _.map(data,(x)=>{
            //     this.products.push(x);
            // });
            _this.limitProduct(data.product_data);
            setTimeout(function () {
                _this.loadingState = false;
                _this.productState = true;
            }, 500);
        });
    };
    // Set Limit    
    ProductComponent.prototype.limitProduct = function (product) {
        if (this.setlimit === undefined) {
            this.limit = product.length;
        }
        else {
            this.limit = this.setlimit;
        }
    };
    // Hover Product
    ProductComponent.prototype.onHover = function (product) {
        this.selectProduct = product;
    };
    // Zoom Image
    ProductComponent.prototype.viewProduct = function (id) {
        this.togglezoom = true;
        this.getId = id;
        this.blurproduct = true;
    };
    // Close Zoom
    ProductComponent.prototype.closeZoom = function () {
        this.togglezoom = false;
        this.getId = null;
        this.blurproduct = false;
    };
    // Page Change
    ProductComponent.prototype.onPageChange = function (e) {
        window.scrollTo(0, 0);
        this.updateProduct();
        this.pageChange.emit(e);
    };
    // buton close on click
    ProductComponent.prototype.selectClose = function (e) {
        this.onRemove.emit(e);
        this.updateProduct();
    };
    // Detail Product
    ProductComponent.prototype.detailProduct = function (product) {
        this.detail.emit(product);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('row'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ProductComponent.prototype, "row", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], ProductComponent.prototype, "setlimit", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], ProductComponent.prototype, "showBtnClose", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], ProductComponent.prototype, "paginate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _service_data_product__WEBPACK_IMPORTED_MODULE_2__["Product"])
    ], ProductComponent.prototype, "filter", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ProductComponent.prototype, "column", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], ProductComponent.prototype, "currentPage", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ProductComponent.prototype, "detail", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ProductComponent.prototype, "pageChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ProductComponent.prototype, "onRemove", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:load', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ProductComponent.prototype, "onLoad", null);
    ProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product',
            template: __webpack_require__(/*! ./product.component.html */ "./src/app/lib/component/product/product.component.html"),
            styles: [__webpack_require__(/*! ./product.component.scss */ "./src/app/lib/component/product/product.component.scss")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fade', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('shown', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1 })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('hidden => show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('.5s')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('show => hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('.1s'))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('visibility', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('shown', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        transform: 'scale(1)',
                        opacity: 1
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        transform: 'scale(0)',
                        opacity: 0
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('hidden => shown', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('.2s')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('shown => hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('.1s'))
                ])
            ]
        }),
        __metadata("design:paramtypes", [_service_product_service__WEBPACK_IMPORTED_MODULE_3__["productService"]])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "./src/app/lib/component/rating/rating.component.html":
/*!************************************************************!*\
  !*** ./src/app/lib/component/rating/rating.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Rating -->\n<div>\n    <ul class=\"wrap-rating\">\n        <li *ngFor=\"let rate of rates\" [class]=\"rate.class\"></li>\n    </ul>\n</div>"

/***/ }),

/***/ "./src/app/lib/component/rating/rating.component.scss":
/*!************************************************************!*\
  !*** ./src/app/lib/component/rating/rating.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrap-rating {\n  margin: 0 0 -5px 0;\n  padding: 0;\n  list-style: 0;\n  display: inline-block; }\n  .wrap-rating li {\n    display: block;\n    float: left; }\n  .wrap-rating li:before {\n      font-family: 'Material Icons';\n      content: '\\e83a';\n      color: #f1c40f; }\n  .wrap-rating li.full:before {\n      content: '\\e838'; }\n"

/***/ }),

/***/ "./src/app/lib/component/rating/rating.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/lib/component/rating/rating.component.ts ***!
  \**********************************************************/
/*! exports provided: RatingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingComponent", function() { return RatingComponent; });
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

var RatingComponent = /** @class */ (function () {
    function RatingComponent() {
        this.rates = [];
    }
    RatingComponent.prototype.ngOnInit = function () { };
    RatingComponent.prototype.ngAfterContentInit = function () {
        this.rates = [];
        for (var i = 0; i < 5; i++) {
            var obj = {
                index: 1,
                class: null
            };
            if (i < this.value) {
                obj.class = 'full';
            }
            this.rates.push(obj);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], RatingComponent.prototype, "value", void 0);
    RatingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'rating',
            template: __webpack_require__(/*! ./rating.component.html */ "./src/app/lib/component/rating/rating.component.html"),
            styles: [__webpack_require__(/*! ./rating.component.scss */ "./src/app/lib/component/rating/rating.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], RatingComponent);
    return RatingComponent;
}());



/***/ }),

/***/ "./src/app/lib/directive/fullscreen.directive.ts":
/*!*******************************************************!*\
  !*** ./src/app/lib/directive/fullscreen.directive.ts ***!
  \*******************************************************/
/*! exports provided: FullscreenDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullscreenDirective", function() { return FullscreenDirective; });
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

var FullscreenDirective = /** @class */ (function () {
    function FullscreenDirective(el) {
        this.el = el;
    }
    FullscreenDirective.prototype.ngOnInit = function () {
        this.initHeightStyle();
    };
    // Window On Resize
    FullscreenDirective.prototype.onResize = function (event) {
        this.initHeightStyle();
    };
    FullscreenDirective.prototype.initHeightStyle = function () {
        var height = window.innerHeight;
        this.el.nativeElement.style.height = height + 'px';
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], FullscreenDirective.prototype, "onResize", null);
    FullscreenDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[fullheight]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], FullscreenDirective);
    return FullscreenDirective;
}());



/***/ }),

/***/ "./src/app/lib/directive/lib-height.directive.ts":
/*!*******************************************************!*\
  !*** ./src/app/lib/directive/lib-height.directive.ts ***!
  \*******************************************************/
/*! exports provided: libHeightDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "libHeightDirective", function() { return libHeightDirective; });
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

var libHeightDirective = /** @class */ (function () {
    function libHeightDirective(el) {
        this.el = el;
    }
    libHeightDirective.prototype.ngAfterViewChecked = function () {
        // call our matchHeight function here later
        this.matchHeight(this.el.nativeElement, this.libHeight);
    };
    libHeightDirective.prototype.onResize = function () {
        // call our matchHeight function here later
        this.matchHeight(this.el.nativeElement, this.libHeight);
    };
    libHeightDirective.prototype.matchHeight = function (parent, className) {
        // match height logic here
        if (!parent)
            return;
        var children = parent.getElementsByClassName(className);
        if (!children)
            return;
        // reset all children height
        Array.from(children).forEach(function (x) {
            x.style.height = 'initial';
        });
        // gather all height
        var itemHeights = Array.from(children)
            .map(function (x) { return x.getBoundingClientRect().height; });
        // find max height
        var maxHeight = itemHeights.reduce(function (prev, curr) {
            return curr > prev ? curr : prev;
        }, 0);
        // apply max height
        Array.from(children)
            .forEach(function (x) { return x.style.height = maxHeight + "px"; });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], libHeightDirective.prototype, "libHeight", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], libHeightDirective.prototype, "onResize", null);
    libHeightDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[libHeight]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], libHeightDirective);
    return libHeightDirective;
}());



/***/ }),

/***/ "./src/app/lib/directive/match-height.directive.ts":
/*!*********************************************************!*\
  !*** ./src/app/lib/directive/match-height.directive.ts ***!
  \*********************************************************/
/*! exports provided: MatchHeightDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchHeightDirective", function() { return MatchHeightDirective; });
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

var MatchHeightDirective = /** @class */ (function () {
    function MatchHeightDirective(el) {
        this.el = el;
    }
    MatchHeightDirective.prototype.ngAfterViewChecked = function () {
        // call our matchHeight function here later
        this.matchHeight(this.el.nativeElement, this.myMatchHeight);
    };
    MatchHeightDirective.prototype.onResize = function () {
        // call our matchHeight function here later
        this.matchHeight(this.el.nativeElement, this.myMatchHeight);
    };
    MatchHeightDirective.prototype.matchHeight = function (parent, className) {
        // match height logic here
        if (!parent)
            return;
        var children = parent.getElementsByClassName(className);
        if (!children)
            return;
        // reset all children height
        Array.from(children).forEach(function (x) {
            x.style.height = 'initial';
        });
        // gather all height
        var itemHeights = Array.from(children)
            .map(function (x) { return x.getBoundingClientRect().height; });
        // find max height
        var maxHeight = itemHeights.reduce(function (prev, curr) {
            return curr > prev ? curr : prev;
        }, 0);
        // apply max height
        Array.from(children)
            .forEach(function (x) { return x.style.height = maxHeight + "px"; });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MatchHeightDirective.prototype, "myMatchHeight", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], MatchHeightDirective.prototype, "onResize", null);
    MatchHeightDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[myMatchHeight]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], MatchHeightDirective);
    return MatchHeightDirective;
}());



/***/ }),

/***/ "./src/app/lib/lib.module.ts":
/*!***********************************!*\
  !*** ./src/app/lib/lib.module.ts ***!
  \***********************************/
/*! exports provided: libModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "libModule", function() { return libModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _directive_lib_height_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./directive/lib-height.directive */ "./src/app/lib/directive/lib-height.directive.ts");
/* harmony import */ var _service_product_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./service/product.service */ "./src/app/lib/service/product.service.ts");
/* harmony import */ var _pipe_filter_product__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pipe/filter-product */ "./src/app/lib/pipe/filter-product.ts");
/* harmony import */ var _component_product_product_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./component/product/product.component */ "./src/app/lib/component/product/product.component.ts");
/* harmony import */ var _component_grid_logo_grid_logo_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./component/grid-logo/grid-logo.component */ "./src/app/lib/component/grid-logo/grid-logo.component.ts");
/* harmony import */ var _component_lightbox_lightbox_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./component/lightbox/lightbox.component */ "./src/app/lib/component/lightbox/lightbox.component.ts");
/* harmony import */ var _component_breadcumb_breadcumb_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./component/breadcumb/breadcumb.component */ "./src/app/lib/component/breadcumb/breadcumb.component.ts");
/* harmony import */ var _component_rating_rating_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./component/rating/rating.component */ "./src/app/lib/component/rating/rating.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// Vendor


// Directive

// Service

// Pipe

// Component





var libModule = /** @class */ (function () {
    function libModule() {
    }
    libModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_7__["NgxPaginationModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]
            ],
            providers: [_service_product_service__WEBPACK_IMPORTED_MODULE_9__["productService"]],
            declarations: [
                _component_product_product_component__WEBPACK_IMPORTED_MODULE_11__["ProductComponent"],
                _directive_lib_height_directive__WEBPACK_IMPORTED_MODULE_8__["libHeightDirective"],
                _component_grid_logo_grid_logo_component__WEBPACK_IMPORTED_MODULE_12__["GridLogoComponent"],
                _component_lightbox_lightbox_component__WEBPACK_IMPORTED_MODULE_13__["LightboxComponent"],
                _pipe_filter_product__WEBPACK_IMPORTED_MODULE_10__["productFilterPipe"],
                _component_breadcumb_breadcumb_component__WEBPACK_IMPORTED_MODULE_14__["BreadcumbComponent"],
                _component_rating_rating_component__WEBPACK_IMPORTED_MODULE_15__["RatingComponent"]
            ],
            exports: [
                _component_product_product_component__WEBPACK_IMPORTED_MODULE_11__["ProductComponent"],
                _component_grid_logo_grid_logo_component__WEBPACK_IMPORTED_MODULE_12__["GridLogoComponent"],
                _component_breadcumb_breadcumb_component__WEBPACK_IMPORTED_MODULE_14__["BreadcumbComponent"],
                _component_rating_rating_component__WEBPACK_IMPORTED_MODULE_15__["RatingComponent"]
            ]
        })
    ], libModule);
    return libModule;
}());



/***/ }),

/***/ "./src/app/lib/pipe/filter-product.ts":
/*!********************************************!*\
  !*** ./src/app/lib/pipe/filter-product.ts ***!
  \********************************************/
/*! exports provided: productFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "productFilterPipe", function() { return productFilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var productFilterPipe = /** @class */ (function () {
    function productFilterPipe() {
    }
    productFilterPipe.prototype.transform = function (items, filter) {
        var _this = this;
        if (!items || !filter) {
            return items;
        }
        // filter items array, items which match and return true will be kept, false will be filtered out
        return items.filter(function (item) { return _this.applyFilter(item, filter); });
    };
    /**
     * Perform the filtering.
     *
     * @param {Product} product The product to compare to the filter.
     * @param {Product} filter The filter to apply.
     * @return {boolean} True if product satisfies filters, false if not.
     */
    productFilterPipe.prototype.applyFilter = function (product, filter) {
        for (var field in filter) {
            if (filter[field]) {
                // Filter by String
                if (typeof filter[field] === 'string') {
                    if (product[field].toLowerCase().indexOf(filter[field].toLowerCase()) === -1) {
                        return false;
                    }
                }
                else if (typeof filter[field] === 'boolean') {
                    if (product[field] !== filter[field]) {
                        return false;
                    }
                    // Filter by Number  
                }
                else if (typeof filter[field] === 'number') {
                    // Filter Price
                    if (field == 'price') {
                        if (product[field] >= filter[field]) {
                            return false;
                        }
                        // Filter Number Only 
                    }
                    else {
                        if (product[field] !== filter[field]) {
                            return false;
                        }
                    }
                    // Filter by Size
                }
                else if (typeof filter[field] === 'object') {
                    if (filter[field].includes(product[field])) {
                        return true;
                    }
                    else {
                        return false;
                    }
                }
            }
        }
        return true;
    };
    productFilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'productfilter',
            pure: false
        })
    ], productFilterPipe);
    return productFilterPipe;
}());



/***/ }),

/***/ "./src/app/lib/service/cookie.service.ts":
/*!***********************************************!*\
  !*** ./src/app/lib/service/cookie.service.ts ***!
  \***********************************************/
/*! exports provided: CookieService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CookieService", function() { return CookieService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-cookies */ "./node_modules/ng2-cookies/index.js");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CookieService = /** @class */ (function () {
    function CookieService() {
        this.productsOrder = [];
        this.arrWishList = [];
        this.arrCompare = [];
        this.payed = '';
        this.updateCookie();
        this.initCookie();
    }
    // Update Cookie
    CookieService.prototype.updateCookie = function () {
        this.cookies = ng2_cookies__WEBPACK_IMPORTED_MODULE_1__["Cookie"].getAll();
        this.keys = Object.keys(this.cookies);
    };
    // Add Cookie
    CookieService.prototype.addCookie = function (cName, cValue) {
        ng2_cookies__WEBPACK_IMPORTED_MODULE_1__["Cookie"].set(cName, cValue);
        this.updateCookie();
        this.initCookie();
    };
    // Remove Cookie
    CookieService.prototype.removeCookie = function (name) {
        ng2_cookies__WEBPACK_IMPORTED_MODULE_1__["Cookie"].delete(name);
        this.updateCookie();
        this.initCookie();
    };
    // Initialize Cookie
    CookieService.prototype.initCookie = function () {
        var _this = this;
        if (!lodash__WEBPACK_IMPORTED_MODULE_2__["isEmpty"](this.cookies)) {
            this.productsOrder = [];
            this.arrWishList = [];
            this.arrCompare = [];
            // Products
            if (this.cookies['products'] != undefined) {
                var productsCart = JSON.parse(this.cookies['products']);
                lodash__WEBPACK_IMPORTED_MODULE_2__["map"](productsCart, function (x) {
                    return _this.productsOrder.push(x);
                });
            }
            // Wish List
            if (this.cookies['wishlist'] != undefined) {
                lodash__WEBPACK_IMPORTED_MODULE_2__["uniq"](this.cookies['wishlist']);
                var wishList = JSON.parse(this.cookies['wishlist']);
                lodash__WEBPACK_IMPORTED_MODULE_2__["map"](wishList, function (x) {
                    _this.arrWishList.push(x);
                });
            }
            // Compare
            if (this.cookies['compare'] != undefined) {
                lodash__WEBPACK_IMPORTED_MODULE_2__["uniq"](this.cookies['compare']);
                var compareList = JSON.parse(this.cookies['compare']);
                lodash__WEBPACK_IMPORTED_MODULE_2__["map"](compareList, function (x) {
                    _this.arrCompare.push(x);
                });
            }
            // Promo
            if (this.cookies['promo'] != undefined) {
                this.promo = this.cookies['promo'];
            }
            // Subtotal
            if (this.cookies['subtotal'] != undefined) {
                this.subtotal = Number(this.cookies['subtotal']);
            }
            // Promo Value
            if (this.cookies['promoValue'] != undefined) {
                this.promoValue = Number(this.cookies['promoValue']);
            }
            // Payed
            if (this.cookies['payed'] != undefined) {
                this.payed = this.cookies['payed'];
            }
        }
    };
    CookieService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], CookieService);
    return CookieService;
}());



/***/ }),

/***/ "./src/app/lib/service/data/product.ts":
/*!*********************************************!*\
  !*** ./src/app/lib/service/data/product.ts ***!
  \*********************************************/
/*! exports provided: Product */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return Product; });
var Product = /** @class */ (function () {
    function Product() {
    }
    return Product;
}());



/***/ }),

/***/ "./src/app/lib/service/product.service.ts":
/*!************************************************!*\
  !*** ./src/app/lib/service/product.service.ts ***!
  \************************************************/
/*! exports provided: productService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "productService", function() { return productService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var productService = /** @class */ (function () {
    function productService(http) {
        this.http = http;
        this.base = './assets/json/'; // https://www.lptv.petalsaroma.in/api/v1/auth/producttocatMob/
        //$baseUrl = 'https://www.lptv.petalsaroma.in'; // prod
        this.$baseUrl = 'https://www.m.licenseplates.tv'; // For Development
        this.dataSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](this.Data);
        this.currentData = this.dataSource.asObservable();
        this.authdataSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](this.Data);
        this.authData = this.authdataSource.asObservable();
    }
    // Get Products
    productService.prototype.getProduct = function () {
        // return this.http.get(this.base + 'product.json');
        return this.http.get(this.$baseUrl + '/api/v1/auth/getAllProducts');
    };
    productService.prototype.changeItem = function (resData) {
        this.dataSource.next(resData);
    };
    productService.prototype.loggedData = function (Data) {
        this.authdataSource.next(Data);
    };
    // Get Product By Id
    productService.prototype.getIdProduct = function (id) {
        var _this = this;
        var promiseObj = new Promise(function (resolve, reject) {
            _this.getProduct().subscribe(function (products) {
                resolve(lodash__WEBPACK_IMPORTED_MODULE_2__["find"](products, { id: id }));
            });
        });
        return promiseObj;
    };
    // Get Product By Slug
    productService.prototype.getSlugProduct = function (slug) {
        var _this = this;
        var promiseObj = new Promise(function (resolve, reject) {
            _this.getProduct().subscribe(function (products) {
                resolve(lodash__WEBPACK_IMPORTED_MODULE_2__["find"](products, { slug: slug }));
            });
        });
        return promiseObj;
    };
    // Get Logo
    productService.prototype.getLogo = function () {
        return this.http.get(this.base + 'logo.json');
    };
    // Get Category
    productService.prototype.getCategory = function () {
        //   return this.http.get(this.base + 'category.json');
        return this.http.get(this.$baseUrl + '/api/v1/auth/showCat/');
    };
    productService.prototype.getSubCategory = function (id) {
        return this.http.get(this.$baseUrl + '/api/v1/auth/showCat/' + id);
    };
    productService.prototype.getStaticSubCategory = function (id, num) {
        return this.http.get(this.$baseUrl + '/api/v1/auth/producttocatMob/' + id + '?page_number=' + num);
    };
    productService.prototype.getProdDetails = function (id) {
        return this.http.get(this.$baseUrl + '/api/v1/auth/getproductbyid/' + id);
    };
    // Get Size
    productService.prototype.getSize = function () {
        return this.http.get(this.$baseUrl + '/api/v1/auth/showCat/ ');
    };
    // Get Color
    productService.prototype.getColor = function () {
        return this.http.get(this.base + 'color.json');
    };
    productService.prototype.getCoupon = function (val) {
        var $baseUrl = 'https://www.m.licenseplates.tv/api/v1/auth'; //'https://www.lptv.petalsaroma.in/api/v1/auth';
        return this.http.get($baseUrl + '/applycoupon?couponcode=' + val);
    };
    productService.prototype.postOrderData = function (data) {
        //return this.http.post('https://www.lptv.petalsaroma.in/api/v1/auth/addToOrder', data);
        return this.http.post('https://www.m.licenseplates.tv/api/v1/auth/addToOrder', data);
    };
    // httpOptions
    productService.prototype.Options = function () {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            })
        };
        return httpOptions;
    };
    productService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], productService);
    return productService;
}());



/***/ }),

/***/ "./src/app/not-found/not-found.component.html":
/*!****************************************************!*\
  !*** ./src/app/not-found/not-found.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fullheight class=\"wrap-notfound valign-wrapper\">\n    <div class=\"content\">\n        <h1>\n            404\n            <small>Page not found</small>\n        </h1>\n        <p>\n            Lorem ipsum dolor sit amet sumo eleifend torquatos.\n        </p>\n        <a mat-button class=\"btn btn-default\" routerLink=\"/shop/product1\">Back to shop</a>  \n        <a mat-button class=\"btn btn-primary\" routerLink=\"/home\">Go to Home</a>  \n    </div>  \n</div>\n"

/***/ }),

/***/ "./src/app/not-found/not-found.component.scss":
/*!****************************************************!*\
  !*** ./src/app/not-found/not-found.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\nImport\n=========================== */\n/* -------------------------------------------------------------\n  Sass CSS3 Mixins! The Cross-Browser CSS3 Sass Library\n  By: Matthieu Aussaguel, http://www.mynameismatthieu.com, @matthieu_tweets\n\n  List of CSS3 Sass Mixins File to be @imported and @included as you need\n\n  The purpose of this library is to facilitate the use of CSS3 on different browsers avoiding HARD TO READ and NEVER\n  ENDING css files\n\n  note: All CSS3 Properties are being supported by Safari 5\n  more info: http://www.findmebyip.com/litmus/#css3-properties\n\n------------------------------------------------------------- */\n/*\nColor\n=========================== */\n/*\nFont Family\n=========================== */\n.material-icons {\n  font-family: 'Material Icons';\n  font-weight: normal;\n  line-height: 20px; }\n.material-icons {\n  font-family: 'Material Icons';\n  font-weight: normal;\n  line-height: 20px; }\n/*\nWrap Not Found\n=========================== */\n.wrap-notfound {\n  padding: 0;\n  text-align: center;\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG4AAABFBAMAAABZHs49AAAALVBMVEXGxsbHx8fGxsbExMTIyMjHx8fBwcHDw8PJycnJycnIyMjJycnJycnJycnExMSNogPvAAAAD3RSTlNQYFVFamU6QHp1cH+KhUprl3zAAAAMHElEQVR4Xj2X628cVZ6G3985VXZuWL9T1Z12HBadU3YTwiU63eXYhJu6fYnjIFB124bcPjh0qGa0rNSmg5vd0UhxLhtfwspOHIiJGDmDYRMnrLhkRg5OVrA7M2R3zApm2JmEBCkEmN0v+z+sI2Xm+XCq6sNzPj0q6cXS1aWvBnOJ08de/+Jab3/L9qmHfrlp1Bk6fGni6tvjzrXRk8ebpnpnendsm56k7ulDvzm5FvRhpg11ldyzM9N9b63rD45MXOsez204u+dYR3DjzVLcFsfl4Vq1XFl+lOPh8spV9UPD5XJY/se2F/Dk1tbG7Re8r0+OjzQF1UcPrDs0mgpbPhiuxLeeAorfO6GlhIlypOrWxuUw1d5t7pGhRLxMbTj+CYVbAuKicZ3k1ICO5OoNZ/KJLnVubupM0Sl4LcYZiDwjBbQUngZMMhnxZvEHs/rQv5FOYGMhqQLRwKv3J7ocVi2qI5lgkSRhOiYBD1qDQQDDkNKJYfY0tAbynC+AITYOKZVQZPIqEkqpjQn1zKdQ1mqAoQUIBIL7z0XRKjWlZ4vK8XIabGzeCJUgpWh9IllIUuaZA0BWa4TMnAURa5j1dd0tYDbaIV0wAZsNh9OKPSilWkRLosOYgeSurwQ0EEAwCA4aWNKaNzpcQBMwUGwpECtNgx2Upzuiq3LutGgdWv0BHAQMLZpZw7Fa44fFbk+z0kCrBql3PA1RUUZBIZ3rVl2wvvPo6pGsDiKtvYBZQCgtSF06ko6MbpZC30LUB4Dq/kEps+5gvouTec2Ku+9Z+lLA2uxTqEACFbsMwr9tvPDNhU92RPM3r1xe+mJx28Sn58cWFj4ZoQejkefbU1bMTBd3T1xZvDJ6ZWlicaEXS9fHTzXNj/3h5bvhfNmzt7P9e39wy5RKzhbO9s7PTw1snzu1bf3YKXbl25f1yq97jj8WIb5Dmevb74YTh6vb2qu1oXJ26rnh9g3ltnL8HoRohJbtyP45Lsdtz5fLMYQseEgAH90N50+vfl6qVjLV2r5yPCj9DOwrc9sjco7kkwOyQeVVX339mhfqwQQhLIjvhlOtxbe0EbjVuYGigBh0/FOWFOQARrpZA/qh17KAgAcbCPXXcCqWHWczkhYSAHt4PMMQpiDA8BxBDXh4PxgMDQ+wGsweQfOL2cCQKwKZ28RRjvo6RhsU54QWBE0CAt69g4NAMzELCAjSrAGT36dZKAFdr5Hq0wrejtkI2KxYMggamva8Y30ws/TFHRNaEJKTe3OaSQikCgBYU7TbbkK42eNHGQ40BXbPc1aCyRekXSgi0gpidp+O/BaXRXRGcwANnLMRa8qzB1BGM2YO+BkNeIYstGQBthS8O2n9+maHBKCF0lLBQAkJqICA2xoADtTZFJKJkUJXR3/3zMy5gcZATL05lfik0L+zP7o+f3L67Pq5xJG353q2Rw+MdAgdzA0oEwUrX3qIcPnbs9NjXU7y3MzUXO+2xNy6kV07HpyeP9o46uH1xu3jc4e/fGzXwvjo+y+9zqed+rDcNTp26GAC/xP6djmw0nBcbqvtrdXKpeXXuFytxeU76b2Qs4P57TNH9q4dqa9VqtlqW0mGmJxCYVXQdLSuLWUpyFm0+3nlJdCv6kpnEsmxqXVfdW2ZUT/WD05vOVQNsxRCyTC0z4XIB6D6P+5V+a7kg3Pz3QVjvCS6vZ/VzmVKOZbPQlAhnXdVdP/fQwDWg4+GulnkKQH679Z80uO8WiY9gISIvIcfb2nOjvihz44HymxhGRsLCpsVtAUp5JRDfTcyKrdssTIdjlNwmvq9NfuEbOrJ+R6HsArk496WCsFCS82sGd0g0zO231NIJEhF3WcShbwQ9LSjGP6sZA/cAG6Xcvj+WwJWagYDnSioBONmq1KJOyL3pxOKVV4dm2IO6zslMSud8TvrwSuttFQRAOBr5KHq+eqrxWWRlBcllsmztut7GOAp2azJwxaR+t6pbMUdlI5YGyAyhf6J60PLDiuhOG+UBsTxmUMbrxPIy/ka0MCzuPS5fUrCAgSA4YWIS4PdLUrtTp7Mq6IXBLlWXjyx7+n3KjoFP2yX7ZDSyid+f/n02MLrEzPvL0ysP4dvF28sXLtxambh1PjHLauHPo3akdlycG7ljZMXz686tuvD8d89nzn4+dHeqeuLKx7oOXTj0a9SteRLGu78J1cubSseHyioi2d7D887Z3aMjfcudOWbe+4vD8elSvuTeTud2vDCr6WNgTLX4pLe5aDQ3zGQvnjaLQzkJQnU8UewK0uAtaEqFKa99vDBFm4utcu4AtRCNLcNCmw5geRAwGlARwE02CZ3p2iAhDLG5am04pU7RnefqCKXSBaNgWLSjAzWlKBQAIyUEQsJa4PTJwQ5WikEhW4IFW3GikiS6ygW1mqWDEA//gYKLSYDgJsBKQP1yH9UQd+ZYo6V0CrdYG7LR2crprOfq8IhBqwFiz0SupDIMQSYPQbCe0beMURBoUCRFxE5CvqBviFs5a0252ag0MFo9h9qg0MsdEBWA5Csd31dgni+JaD+pNCuJxTBPPtSfuCroaYsG62TgJViTRWJDpsjhYgljCL10IcllcwcNE2GteCh7d39eodfeZpLocwoBlxAOVAAJRSUuU8CRgdoWH2wCuMq6jOhxIZuLVg/8vOoq/I4U9Iix76VUGLLt/giJ0iluxvnz701vri0tPTHSj602OQFyenG3/3SK+pXbm5+P9/x0avcYzMvfc8kmpF9pBOy9MXS0o2Wkx1d57zF4v8e6Gl8+tTlsWuzz1y+ND9+8vLyTf++p+ny+Pxb79889/SeJ5Y+W7y48+zkFOLB0FZ1qA8LL1XNnghJBMmmgUDnNwRLv111ZfrAr3ceYRYhSxlaG0A0Tfan13TCFLVHzX/uk5LpuBy2MkxV5q8NjO9ovPqvL3/68eYzs+PBhVTnI7IuLovOXzkrOt5tGbtUQocCQ4hJKhTzAXkqrd2EDh6Y2Hk5cvXKdUfLO45M9G1WH7vBwKmqivfjR5HbtOJFgAXgNWxX3R3GIyEC46SNcoPzH2jW8J5YOnXwp77/o5+loK+5vPexrPJIb9yHdCHvJZV476KjFKs0SJik8ETT5Vc9EZCBC7jAbKgE3pEZd5XnKLe5M49cvp8Ni/PHIyqq4zCsiDTEisUKBR4SAlBCI7yT12RP1rjFDu2KIIDhgvESxa40NkGwJqOM0KDVv91rPBgBABnCGokhdBzVye80EdnIAFaLwMOBjfmAtSYRCHf5CFa3DwmAyELgtoNmrrf6ZGrIFWgRGgxE0lCBsSsvAqUKEHkIIfSqmTdfCSDBACRVgf37Sf7ijRwxOgwXNIAwPTp27vCJIC3gJiNRjFxo331iOGyQMpdlaFuNa+1koQ++WbSKIgANFolj//nhmbkevO5cGJ0907t4ff09B0cnTo+8dv7YjdPH1x399u3hz0rVSrkSftAZXrk0cfM3S8v8FxI7tz2xszCI9b6/N9N/evJP45sTb0WHeXj2bGqt91G1d+3fDe+7lNtP3zVI0nvPv5Fd+qafXEzO1lLxcLXttVKsbaKxVh//36/i6vC+cC3Wldt2x1vjtrXVhpU/qYesrvju2ukXt64Vw601xHE1U91f5C9Da8O2Unx/7zvxcFwNK0++F8fx8GCtVDp07uK7zt/0J3ZuaKvVqnFb3ctxDArYagFrAgj21L2dlftL5Lo2bq/VYHzAO/x7uuW6ORYNWPVzD9zwyE9bcwBICwECGFKR7qyVhCWBgSAHKYiKtzMeI3vbMwStAAi9ZosFQL4UAEEgMALUN+SiZXPrLQFISJJS3svsexR4WcC7FZCwD++tAIAMBGSGSGoGvGifYCIXJCMNId37inPNHpApMPDXsQEN1gIQGgZgENTUEHtCZIVOQWufOfTOe32MHxRLzXfHxpvWB5ATBgJBRggtRPoXL3DOJyPgz0KQlqR3ZwWkKfBK7y9jo0dI+IFIC0GBIRibkd6/7PdT7GZERhgEni6gIQe+D1Qk4C9j49ArEtBSyuZb9YBFBiI5qZc/s1anCqyLxpHU9EP+NnwLH3LD3bFRSnyPhcUbi9cmbl5dXDz81lnVf7gnOvbt9asL21Z9dv3SyMXR617qxhX/n3Yt/1q/eOzC3bHxTWvr/wPSDj5oMxdQWAAAAABJRU5ErkJggg==\");\n  background-color: #fff; }\n.wrap-notfound .content {\n    padding: 100px 15px;\n    display: table;\n    margin: auto; }\n.wrap-notfound h1 {\n    font-size: 102px; }\n.wrap-notfound h1 small {\n      display: block;\n      font-size: 24px;\n      line-height: 32px;\n      font-weight: 400;\n      margin-top: 50px; }\n.wrap-notfound a {\n    margin: 5px; }\n/*\nResponisve\n=========================== */\n@media (max-height: 400px) {\n  .wrap-notfound {\n    height: auto !important; } }\n"

/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent(meta) {
        this.meta = meta;
    }
    NotFoundComponent.prototype.ngOnInit = function () {
        this.meta.addTag({ name: 'keyword', content: 'Angushop - Angular Shop Templatet' });
        this.meta.addTag({ name: 'description', content: 'Angushop - Not Found Shop Template' });
        this.meta.addTag({ name: 'robots', content: 'index, follow' });
    };
    NotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.scss */ "./src/app/not-found/not-found.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Meta"]])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/product/cart/cart.component.html":
/*!**************************************************!*\
  !*** ./src/app/product/cart/cart.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Head Section -->\n<div class=\"head-section bg\">\n    <div class=\"container\">\n        <h4>Shopping <span class=\"font-light\">Cart</span></h4>\n        <p>Angushop Shopping cart with cookie</p>\n    </div>\n</div>\n\n<div class=\"container-page\">\n    <div class=\"box-page\">\n        <!-- Start List -->\n        <ul class=\"row list-justify\">\n            <li class=\"col s4 active\">\n                Cart\n            </li>\n            <li class=\"col s4 disabled\">\n                Delivery\n            </li>\n            <li class=\"col s4 disabled\">\n                Receipt\n            </li>\n        </ul>\n        <!-- End List -->\n        <div class=\"row margin-top30\">\n            <div class=\"col l8 s12\">\n\n                <!-- Start Table Cart -->\n                <table class=\"table-cart\">\n                    <thead>\n                        <tr>\n                            <th>Added Items</th>\n                            <th>Quantity</th>\n                            <th>Price</th>\n                            <th>Remove</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngIf=\"productsOrder.length == 0\">\n                            <td class=\"empty\" colspan=\"4\">\n                                <img src=\"http://via.placeholder.com/246x339\" width=\"100\" alt=\"\"/>\n                                <h6 class=\"content\">No Product</h6>\n                            </td>\n                        </tr>\n                        <tr *ngFor=\"let product of productsOrder\">\n                            <td class=\"item\">\n                                <div class=\"wrap-img\">\n                                    <img [src]=\"product.image\" alt=\"\"/>\n                                </div>\n                                <h6 class=\"title\"><a [routerLink]=\"['/shop/p/' + product.slug]\" >{{product.productName}}</a></h6>\n                                <p>Stock: {{product.stock}}</p>\n                            </td>\n                            <td>\n                                <input \n                                    type=\"number\" \n                                    class=\"input-counter\" \n                                    [(ngModel)]=\"product.quantity\" \n                                    [value]=\"product.quantity\" \n                                    (change)=\"onChage(product)\"/>\n                            </td>\n                            <td>{{product.quantity * product.price | currency:'USD':'$'}}</td>\n                            <td>\n                                <button mat-mini-fab (click)=\"deleteProduct(product.id)\"><mat-icon>&#xE5CD;</mat-icon></button>\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n                <!-- End Table Cart -->\n            </div>\n            <div class=\"col l4 s12\">\n\n                <!-- Coupon -->\n                <div class=\"input-group\">\n                    <input [disabled]=\"productsOrder.length == 0\" type=\"text\" [value]=\"promoInit\" placeholder=\"Add Promo Code\" #promo />\n                    <mat-icon (click)=\"checkPromo(promo.value)\" class=\"icon\">&#xE145;</mat-icon>\n                </div>\n\n                <div *ngIf=\"productsOrder.length != 0\" class=\"margin-bottom20 margin-top20\">\n                    <p class=\"margin-bottom10\"><em><small>try promo code for test</small></em></p>\n                    <div class=\"alert alert-info\">\n                        <strong class=\"right\">4234OPD</strong> Free 20%\n                        <hr />\n                        <strong class=\"right\">12312B</strong> Free $100\n                    </div>\n                </div>\n\n                <div class=\"margin-top20 margin-bot20\">\n                    <table class=\"count\">\n                        <tr>\n                            <td>Sub Total</td>\n                            <td class=\"right-align\">{{subTotal  | currency:'USD':'$'}}</td>\n                        </tr>\n                        <tr>\n                            <td>Promo</td>\n                            <td class=\"right-align\">{{promoValue  | currency:'USD':'$'}}</td>\n                        </tr>\n                        <tr>\n                            <td>Total Price</td>\n                            <td class=\"right-align\"><strong>{{total  | currency:'USD':'$'}}</strong></td>\n                        </tr>\n                    </table>\n                </div>\n                <div class=\"margin-top20\">\n                     <button [disabled]=\"productsOrder.length == 0\" mat-button routerLink=\"/shop/shipping\" class=\"btn btn-primary btn-block\">Continue Shipping</button>  \n                </div>\n            </div>\n        </div>\n        \n    </div>\n</div>"

/***/ }),

/***/ "./src/app/product/cart/cart.component.scss":
/*!**************************************************!*\
  !*** ./src/app/product/cart/cart.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\nImport\n=========================== */\n/* -------------------------------------------------------------\n  Sass CSS3 Mixins! The Cross-Browser CSS3 Sass Library\n  By: Matthieu Aussaguel, http://www.mynameismatthieu.com, @matthieu_tweets\n\n  List of CSS3 Sass Mixins File to be @imported and @included as you need\n\n  The purpose of this library is to facilitate the use of CSS3 on different browsers avoiding HARD TO READ and NEVER\n  ENDING css files\n\n  note: All CSS3 Properties are being supported by Safari 5\n  more info: http://www.findmebyip.com/litmus/#css3-properties\n\n------------------------------------------------------------- */\n/*\nColor\n=========================== */\n/*\nFont Family\n=========================== */\n.material-icons {\n  font-family: 'Material Icons';\n  font-weight: normal;\n  line-height: 20px; }\n.material-icons {\n  font-family: 'Material Icons';\n  font-weight: normal;\n  line-height: 20px; }\n/*\nTable Cart\n=========================== */\ntable.table-cart th {\n  border-top: solid 1px #efefef;\n  border-bottom: solid 1px #efefef;\n  text-align: center;\n  font-weight: 500;\n  color: #3f3f3f; }\ntable.table-cart th:first-child {\n    text-align: left; }\ntable.table-cart th:last-child {\n    text-align: right; }\ntable.table-cart tbody tr {\n  border-bottom: solid 1px #efefef; }\ntable.table-cart tbody tr td {\n    position: relative;\n    padding: 20px;\n    vertical-align: top;\n    text-align: center; }\ntable.table-cart tbody tr td.empty {\n      text-align: center !important;\n      padding-top: 55px;\n      padding-bottom: 55px; }\ntable.table-cart tbody tr td.empty .content {\n        text-transform: none;\n        color: #999;\n        margin-bottom: 0;\n        margin-top: 25px; }\ntable.table-cart tbody tr td:first-child {\n      text-align: left; }\ntable.table-cart tbody tr td:last-child {\n      text-align: right;\n      padding-right: 0; }\ntable.table-cart tbody tr td.item {\n      padding-left: 75px;\n      width: 350px;\n      height: 90px;\n      text-align: left; }\ntable.table-cart tbody tr td.item .title {\n        margin-bottom: 5px;\n        text-transform: capitalize; }\ntable.table-cart tbody tr td.item p:last-child {\n        margin-bottom: 0; }\ntable.table-cart tbody tr td.item .wrap-img {\n        width: 60px;\n        height: 60px;\n        overflow: hidden;\n        position: absolute;\n        top: 15px;\n        left: 0;\n        background: #fff; }\ntable.table-cart tbody tr td.item .wrap-img img {\n          width: 100%; }\ntable.table-cart tbody tr td button {\n      width: 25px;\n      height: 25px;\n      line-height: 0;\n      font-size: 14px;\n      padding-top: 0; }\ntable.table-cart tbody tr td button mat-icon {\n        position: relative;\n        top: -6px; }\n/*\nInput Group\n=========================== */\n.input-group {\n  padding: 10px 0;\n  position: relative;\n  border: solid 1px #e0e0e0; }\n.input-group input {\n    width: 100%;\n    border: 0;\n    outline: 0;\n    padding: 0 30px 0 15px;\n    font-weight: 400;\n    font-size: 14px;\n    background: transparent; }\n.input-group .icon {\n    position: absolute;\n    right: 5px;\n    top: 11px;\n    font-size: 20px;\n    cursor: pointer !important; }\nmat-chip {\n  cursor: pointer;\n  outline: 0; }\nmat-chip:focus {\n    outline: 0; }\n/*\nResponsive\n=========================== */\n@media (max-width: 920px) {\n  table.table-cart {\n    margin-bottom: 30px; } }\n@media (max-width: 568px) {\n  table.table-cart {\n    margin-bottom: 40px; }\n    table.table-cart thead {\n      display: none; }\n    table.table-cart tr td {\n      height: auto !important;\n      padding: 5px 0 !important;\n      display: block;\n      width: 100%;\n      text-align: center !important; }\n      table.table-cart tr td .wrap-img {\n        display: block;\n        width: 150px !important;\n        height: 150px !important;\n        margin: 0 auto 10px;\n        position: relative !important;\n        top: 0 !important; }\n      table.table-cart tr td:first-child {\n        padding-top: 20px !important; }\n      table.table-cart tr td:last-child {\n        padding-bottom: 20px !important; }\n      table.table-cart tr td.item {\n        width: 100% !important; } }\n"

/***/ }),

/***/ "./src/app/product/cart/cart.component.ts":
/*!************************************************!*\
  !*** ./src/app/product/cart/cart.component.ts ***!
  \************************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _lib_service_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/service/cookie.service */ "./src/app/lib/service/cookie.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CartComponent = /** @class */ (function () {
    function CartComponent(cookie, snackBar) {
        this.cookie = cookie;
        this.snackBar = snackBar;
        this.productsOrder = [];
        this.promoValue = 0;
        this.promoInit = "";
        // Sample Promo
        this.promos = [
            { label: 'Happy New Year', code: '4234OPD', type: 'percentage', discount: 0.2 },
            { label: 'Happy Eid Mubarok', code: '12312B', type: 'value', discount: 100 }
        ];
    }
    CartComponent.prototype.ngOnInit = function () {
        var products = this.cookie['productsOrder'];
        lodash__WEBPACK_IMPORTED_MODULE_3__["map"](products, function (x) {
            if (x.quantity >= x.stock) {
                return x.quantity = x.stock;
            }
            return x.slug = lodash__WEBPACK_IMPORTED_MODULE_3__["kebabCase"](x.slug);
        });
        this.productsOrder = products;
        this.cookie.addCookie('subtotal', JSON.stringify(this.total));
        // Initial Promo
        if (this.cookie['promo'] != undefined) {
            if (this.productsOrder.length != 0) {
                this.promoInit = this.cookie['promo'];
            }
        }
        else {
            this.cookie.addCookie('promo', '');
        }
        // Initial Promo Value
        if (this.cookie['promoValue'] != undefined) {
            if (this.productsOrder.length != 0) {
                this.promoValue = this.cookie['promoValue'];
            }
        }
        else {
            this.cookie.addCookie('promoValue', JSON.stringify(0));
        }
        this.initTotal(this.productsOrder);
    };
    // InitSubtotal
    CartComponent.prototype.initTotal = function (products) {
        var prices = [];
        lodash__WEBPACK_IMPORTED_MODULE_3__["map"](products, function (x) {
            return prices.push(x['price'] * x['quantity']);
        });
        // Subtotal
        this.subTotal = lodash__WEBPACK_IMPORTED_MODULE_3__["reduce"](prices, function (sum, n) {
            return sum + n;
        }, 0);
        // Total
        this.total = this.subTotal - this.promoValue;
        this.cookie.addCookie('subtotal', JSON.stringify(this.subTotal));
    };
    // On Chage Quantity
    CartComponent.prototype.onChage = function (product) {
        if (product.quantity == null || product.quantity == 0) {
            product.quantity = 1;
        }
        if (product.quantity >= product.stock) {
            product.quantity = product.stock;
        }
        this.initTotal(this.productsOrder);
        this.cookie.addCookie('products', JSON.stringify(this.productsOrder));
    };
    // Delete Product on cart
    CartComponent.prototype.deleteProduct = function (index) {
        lodash__WEBPACK_IMPORTED_MODULE_3__["remove"](this.productsOrder, function (n) {
            return n.id == index;
        });
        this.initTotal(this.productsOrder);
        this.cookie.addCookie('products', JSON.stringify(this.productsOrder));
        if (this.productsOrder.length == 0) {
            this.promoValue = 0;
            this.promoInit = "";
            this.total = 0;
            this.cookie.addCookie('promo', '');
            this.cookie.addCookie('promoValue', JSON.stringify(0));
        }
    };
    // Check Promo
    CartComponent.prototype.checkPromo = function (promo) {
        this.total = this.subTotal;
        this.promoValue = 0;
        var check = lodash__WEBPACK_IMPORTED_MODULE_3__["find"](this.promos, { code: promo });
        if (check != undefined) {
            var type = check.type;
            var displayPromo;
            if (type == 'value') {
                this.promoValue = Number(check.discount);
                this.total = this.total - this.promoValue;
                displayPromo = 'Free $' + check.discount;
            }
            else if (type == 'percentage') {
                this.promoValue = (this.total * Number(check.discount));
                this.total = this.total - this.promoValue;
                displayPromo = 'Free ' + check.discount * 100 + '%';
            }
            if (this.total < 0) {
                this.total = 0;
            }
            this.cookie.addCookie('promo', check.code);
            this.cookie.addCookie('promoValue', JSON.stringify(this.promoValue));
            this.openSnackBar('Promo : ' + check.label, displayPromo);
        }
        else {
            this.openSnackBar('Promo code not found', '');
            this.cookie.addCookie('promo', '');
            this.cookie.addCookie('promoValue', JSON.stringify(0));
        }
        this.cookie.addCookie('subtotal', JSON.stringify(this.subTotal));
    };
    // Snack Bar
    CartComponent.prototype.openSnackBar = function (message, action) {
        this.snackBar.open(message, action, {
            duration: 2000,
        });
    };
    CartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cart',
            template: __webpack_require__(/*! ./cart.component.html */ "./src/app/product/cart/cart.component.html"),
            styles: [__webpack_require__(/*! ./cart.component.scss */ "./src/app/product/cart/cart.component.scss")],
        }),
        __metadata("design:paramtypes", [_lib_service_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]])
    ], CartComponent);
    return CartComponent;
}());



/***/ }),

/***/ "./src/app/product/compare/compare.component.html":
/*!********************************************************!*\
  !*** ./src/app/product/compare/compare.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Head Section -->\n<div class=\"head-section bg\">\n    <div class=\"container\">\n        <h4>Compare <span class=\"font-light\">Product</span></h4>\n        <p>Angushop Compare Product</p>\n    </div>\n</div>\n\n<!-- Loading -->\n<div class=\"valign-wrapper\" *ngIf=\"loadingState\" #loading>\n    <mat-spinner></mat-spinner>\n</div>\n\n<div class=\"container-page compare-product\" *ngIf=\"productState\">\n    <div class=\"box-page\">\n        \n        <!-- Start Table -->\n        <div class=\"wrap-table\" #wraptable>\n            <table class=\"table-compare\" #table>\n                <tr>\n                    <td class=\"info\" rowspan=\"2\">\n                        <h3 class=\"counter\">{{productView}} <small>of</small> {{products.length}}</h3>\n                        <p>Products to compare</p>\n                        <button mat-mini-fab [disabled]=\"disablePrev\" (click)=\"prevView()\">\n                            <mat-icon>&#xE314;</mat-icon>\n                        </button>\n                        <button mat-mini-fab [disabled]=\"disableNext\" (click)=\"nextView()\">\n                            <mat-icon>&#xE315;</mat-icon>\n                        </button>\n                    </td>\n                    <td *ngIf=\"products.length == 0\" rowspan=\"7\" class=\"empty\">\n                        <img src=\"http://via.placeholder.com/246x339\" width=\"100\" alt=\"\"/>\n                        <h5 class=\"title\">Sorry... no product founded</h5>\n                    </td>\n                    <td class=\"wrap-img\" *ngFor=\"let product of products | slice:startSlice:endSlice\">\n                        <a mat-mini-fab class=\"close\" (click)=\"onSelectRemove(product)\">\n                            <mat-icon>&#xE5CD;</mat-icon>\n                        </a>\n                        <img [src]=\"product.image\" [alt]=\"product.productName\" />\n                    </td>\n                </tr>\n                <tr>\n                    <td style=\"padding-left:0;padding-right:0;\" *ngFor=\"let product of products | slice:startSlice:endSlice\">\n                        <h6 class=\"title truncate\"><a [routerLink]=\"'/shop/p/' + product.slug\">{{product.productName}}</a></h6>\n                        <strong class=\"light\">{{product.price  | currency:'USD':'$'}}</strong>\n                        <rating [value]=\"product.rate\"></rating>\n                    </td>\n                </tr>\n                <tr>\n                    <td>Width</td>\n                    <td *ngFor=\"let product of products | slice:startSlice:endSlice\">{{product.width}} cm</td>\n                </tr>\n                <tr>\n                    <td>Height</td>\n                    <td *ngFor=\"let product of products | slice:startSlice:endSlice\">{{product.height}} cm</td>\n                </tr>\n                <tr>\n                    <td>Weight</td>\n                    <td *ngFor=\"let product of products | slice:startSlice:endSlice\">{{product.weight}} kg</td>\n                </tr>\n                <tr>\n                    <td>Sold</td>\n                    <td *ngFor=\"let product of products | slice:startSlice:endSlice\">{{product.sold}}</td>\n                </tr>\n                <tr>\n                    <td>Stock</td>\n                    <td *ngFor=\"let product of products | slice:startSlice:endSlice\">{{product.stock}}</td>\n                </tr>\n            </table>\n            <!-- End Table -->\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/product/compare/compare.component.scss":
/*!********************************************************!*\
  !*** ./src/app/product/compare/compare.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\nImport\n=========================== */\n/* -------------------------------------------------------------\n  Sass CSS3 Mixins! The Cross-Browser CSS3 Sass Library\n  By: Matthieu Aussaguel, http://www.mynameismatthieu.com, @matthieu_tweets\n\n  List of CSS3 Sass Mixins File to be @imported and @included as you need\n\n  The purpose of this library is to facilitate the use of CSS3 on different browsers avoiding HARD TO READ and NEVER\n  ENDING css files\n\n  note: All CSS3 Properties are being supported by Safari 5\n  more info: http://www.findmebyip.com/litmus/#css3-properties\n\n------------------------------------------------------------- */\n/*\nColor\n=========================== */\n/*\nFont Family\n=========================== */\n.material-icons {\n  font-family: 'Material Icons';\n  font-weight: normal;\n  line-height: 20px; }\n.material-icons {\n  font-family: 'Material Icons';\n  font-weight: normal;\n  line-height: 20px; }\n/*\nCompare Product\n=========================== */\n.compare-product > .box-page > .row {\n  display: block;\n  margin: 0; }\n.compare-product > .box-page > .row > .col {\n    padding: 0; }\n.compare-product > .box-page > .row > .col > .row {\n      margin: 0;\n      padding: 0; }\n.compare-product > .box-page > .row > .col > .row .col {\n        padding: 0 1px; }\n.compare-product .wrap-table {\n  width: 100%; }\n.compare-product table.table-compare {\n  margin: 0;\n  border: solid 1px #efefef;\n  width: auto; }\n.compare-product table.table-compare tr td {\n    border-left: solid 1px #efefef;\n    border-right: solid 1px #efefef;\n    border-bottom: dashed 1px #efefef;\n    padding: 15px 20px;\n    vertical-align: top;\n    text-align: center;\n    transition: all 0.5s ease-in-out; }\n.compare-product table.table-compare tr td:first-child {\n      font-weight: bold; }\n.compare-product table.table-compare tr td.empty {\n      text-align: center;\n      vertical-align: middle;\n      width: 100%; }\n.compare-product table.table-compare tr td.empty .title {\n        margin-bottom: 0;\n        margin-top: 20px;\n        text-transform: none;\n        color: #999; }\n.compare-product table.table-compare tr td.info {\n      width: 200px;\n      max-width: 200px;\n      min-width: 200px;\n      text-align: center;\n      background: #fff;\n      vertical-align: middle;\n      padding: 25px 30px; }\n.compare-product table.table-compare tr td.info p {\n        font-weight: normal; }\n.compare-product table.table-compare tr td.info .counter {\n        margin-bottom: 5px;\n        letter-spacing: 0;\n        text-transform: none; }\n.compare-product table.table-compare tr td.info button {\n        width: 30px;\n        height: 30px; }\n.compare-product table.table-compare tr td.info button mat-icon {\n          position: relative;\n          top: -2px; }\n.compare-product table.table-compare tr td.wrap-img {\n      position: relative;\n      padding: 0;\n      overflow: hidden; }\n.compare-product table.table-compare tr td.wrap-img img {\n        width: 100%;\n        margin-bottom: -10px; }\n.compare-product table.table-compare tr td.wrap-img a.close {\n        position: absolute;\n        top: 10px;\n        right: 10px;\n        width: 29px !important;\n        height: 29px !important;\n        filter: alpha(opacity=50);\n        -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=50)\";\n        -webkit-opacity: 0.5;\n        -khtml-opacity: 0.5;\n        -moz-opacity: 0.5;\n        -ms-opacity: 0.5;\n        -o-opacity: 0.5;\n        opacity: 0.5;\n        background: #fff !important;\n        color: #8f8f8f;\n        border: solid 1px #efefef; }\n.compare-product table.table-compare tr td.wrap-img a.close .material-icons.mat-icon {\n          padding: 0;\n          position: relative;\n          top: -4px; }\n.compare-product table.table-compare tr td.wrap-img a.close:hover {\n          filter: alpha(opacity=100);\n          -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)\";\n          -webkit-opacity: 1;\n          -khtml-opacity: 1;\n          -moz-opacity: 1;\n          -ms-opacity: 1;\n          -o-opacity: 1;\n          opacity: 1; }\n.compare-product table.table-compare tr td .title {\n      margin-bottom: 5px;\n      text-transform: capitalize;\n      padding-left: 20px;\n      padding-right: 20px;\n      text-transform: capitalize;\n      text-align: center; }\n.compare-product table.table-compare tr td .title a {\n        text-decoration: none !important;\n        color: #3f3f3f; }\n.compare-product table.table-compare tr td p:last-child {\n      margin-bottom: 0; }\n/*\nLoading\n=========================== */\n.valign-wrapper {\n  position: relative;\n  width: 100%;\n  top: 0;\n  right: 0;\n  background: #fff; }\n.valign-wrapper mat-spinner {\n    width: 50px;\n    height: 50px;\n    display: block;\n    margin: auto; }\n/*\nInput Slider \n=========================== */\n.wrap-slider {\n  padding-left: 180px;\n  margin-bottom: 0;\n  margin-top: 15px; }\n.wrap-slider mat-slider {\n    width: 200px;\n    display: block;\n    margin: auto; }\n.wrap-slider small {\n    display: table;\n    margin: auto;\n    margin-top: -10px;\n    margin-bottom: 0; }\n/*\nResponsive\n=========================== */\n@media (max-width: 480px) {\n  table.table-compare tr td.info {\n    width: 130px !important;\n    max-width: 130px !important;\n    padding-right: 5px !important;\n    padding-left: 5px !important; } }\n"

/***/ }),

/***/ "./src/app/product/compare/compare.component.ts":
/*!******************************************************!*\
  !*** ./src/app/product/compare/compare.component.ts ***!
  \******************************************************/
/*! exports provided: CompareComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompareComponent", function() { return CompareComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _lib_service_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/service/product.service */ "./src/app/lib/service/product.service.ts");
/* harmony import */ var _lib_service_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/service/cookie.service */ "./src/app/lib/service/cookie.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CompareComponent = /** @class */ (function () {
    function CompareComponent(productService, cookie, snackBar) {
        this.productService = productService;
        this.cookie = cookie;
        this.snackBar = snackBar;
        this.productState = true;
        this.loadingState = false;
        this.disablePrev = true;
        this.productView = 0;
        this.products = [];
        this.productCompare = [];
    }
    CompareComponent.prototype.ngOnInit = function () {
        this.productCompare = this.cookie['arrCompare'];
        this.setSlice();
        this.fetchProduct();
    };
    CompareComponent.prototype.ngAfterViewInit = function () {
        // this.loading.nativeElement.style.height = (window.innerHeight * 0.5) + 'px';  
        this.setWidthColumn();
    };
    // Fetch
    CompareComponent.prototype.fetchProduct = function () {
        var _this = this;
        this.productService.getProduct().subscribe(function (product) {
            lodash__WEBPACK_IMPORTED_MODULE_3__["map"](_this.cookie['arrCompare'], function (x, i) {
                var findProduct = lodash__WEBPACK_IMPORTED_MODULE_3__["find"](product, function (c) {
                    return c['index'] == x;
                });
                _this.products.push(findProduct);
            });
            _this.totalProduct = _this.products.length;
            if (_this.totalProduct <= _this.endSlice) {
                _this.disableNext = true;
            }
        });
    };
    // On Select Remove
    CompareComponent.prototype.onSelectRemove = function (e) {
        var _this = this;
        var getIndex = this.productCompare.indexOf(e['index']);
        this.productCompare.splice(getIndex, 1);
        this.products.splice(getIndex, 1);
        this.cookie.addCookie('compare', JSON.stringify(this.productCompare));
        this.openSnackBar(e.productName, 'Deleted from compare');
        this.totalProduct = this.products.length;
        setTimeout(function () {
            _this.setSlice();
            _this.setWidthColumn();
            if (_this.totalProduct <= _this.endSlice) {
                _this.disableNext = true;
                _this.disablePrev = true;
            }
        }, 500);
    };
    // Snack Bar
    CompareComponent.prototype.openSnackBar = function (message, action) {
        this.snackBar.open(message, action, {
            duration: 2000,
        });
    };
    // Event Listener
    CompareComponent.prototype.onResize = function (event) {
        this.setSlice();
        this.setWidthColumn();
        if (this.totalProduct <= this.endSlice) {
            this.disableNext = true;
            this.disablePrev = true;
        }
    };
    // Setting Slice
    CompareComponent.prototype.setSlice = function () {
        var width = window.innerWidth;
        if (width > 1023) {
            this.startSlice = 0;
            this.endSlice = 3;
        }
        else if (width < 1023 && width > 483) {
            this.startSlice = 0;
            this.endSlice = 2;
        }
        else if (width < 483) {
            this.startSlice = 0;
            this.endSlice = 1;
        }
        this.disablePrev = true;
        this.disableNext = false;
    };
    // Set Width
    CompareComponent.prototype.setWidthColumn = function () {
        var _this = this;
        var width = window.innerWidth;
        var showproduct;
        var infoWidth;
        if (width > 1023) {
            showproduct = 3;
            infoWidth = 200;
        }
        else if (width < 1023 && width > 483) {
            showproduct = 2;
            infoWidth = 200;
        }
        else if (width < 483) {
            showproduct = 1;
            infoWidth = 130;
        }
        var firstElement = this.table.nativeElement.firstElementChild;
        var columns = firstElement.children[1].children;
        var wrapWidth = (this.wraptable.nativeElement.clientWidth - infoWidth) / showproduct;
        setTimeout(function () {
            for (var i = 0; i < columns.length; i++) {
                firstElement.children[1].children[i].children[0].style.width = wrapWidth + 'px';
            }
            for (var i = 0; i < firstElement.children[0].children.length; i++) {
                firstElement.children[0].children[i].style.maxWidth = wrapWidth + 'px';
            }
            _this.productView = showproduct;
            if (_this.products.length <= _this.productView) {
                _this.productView = _this.products.length;
            }
        }, 100);
    };
    // Previous View
    CompareComponent.prototype.prevView = function () {
        if (this.startSlice != 0) {
            this.startSlice = this.startSlice - 1;
            this.endSlice = this.endSlice - 1;
            this.disablePrev = false;
            if (this.startSlice == 0) {
                this.disablePrev = true;
            }
        }
        this.disableNext = false;
        this.setWidthColumn();
    };
    // Next View
    CompareComponent.prototype.nextView = function () {
        if (this.endSlice != this.totalProduct) {
            this.startSlice = this.startSlice + 1;
            this.endSlice = this.endSlice + 1;
            this.disableNext = false;
            if (this.endSlice == this.totalProduct) {
                this.disableNext = true;
            }
        }
        this.disablePrev = false;
        this.setWidthColumn();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('table'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], CompareComponent.prototype, "table", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('wraptable'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], CompareComponent.prototype, "wraptable", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('loading'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], CompareComponent.prototype, "loading", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], CompareComponent.prototype, "onResize", null);
    CompareComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-compare',
            template: __webpack_require__(/*! ./compare.component.html */ "./src/app/product/compare/compare.component.html"),
            styles: [__webpack_require__(/*! ./compare.component.scss */ "./src/app/product/compare/compare.component.scss")],
            providers: [_lib_service_product_service__WEBPACK_IMPORTED_MODULE_1__["productService"]]
        }),
        __metadata("design:paramtypes", [_lib_service_product_service__WEBPACK_IMPORTED_MODULE_1__["productService"],
            _lib_service_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]])
    ], CompareComponent);
    return CompareComponent;
}());



/***/ }),

/***/ "./src/app/product/dashboard/dashboard.component.html":
/*!************************************************************!*\
  !*** ./src/app/product/dashboard/dashboard.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-header\">\n    <!-- Breadcumbs -->\n    <breadcumb></breadcumb>\n</div>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/product/dashboard/dashboard.component.scss":
/*!************************************************************!*\
  !*** ./src/app/product/dashboard/dashboard.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\nImport\r\n=========================== */\n/* -------------------------------------------------------------\n  Sass CSS3 Mixins! The Cross-Browser CSS3 Sass Library\n  By: Matthieu Aussaguel, http://www.mynameismatthieu.com, @matthieu_tweets\n\n  List of CSS3 Sass Mixins File to be @imported and @included as you need\n\n  The purpose of this library is to facilitate the use of CSS3 on different browsers avoiding HARD TO READ and NEVER\n  ENDING css files\n\n  note: All CSS3 Properties are being supported by Safari 5\n  more info: http://www.findmebyip.com/litmus/#css3-properties\n\n------------------------------------------------------------- */\n/*\nColor\n=========================== */\n/*\nFont Family\n=========================== */\n.material-icons {\n  font-family: 'Material Icons';\n  font-weight: normal;\n  line-height: 20px; }\n.material-icons {\n  font-family: 'Material Icons';\n  font-weight: normal;\n  line-height: 20px; }\n"

/***/ }),

/***/ "./src/app/product/dashboard/dashboard.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/product/dashboard/dashboard.component.ts ***!
  \**********************************************************/
/*! exports provided: DashboardProdut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardProdut", function() { return DashboardProdut; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardProdut = /** @class */ (function () {
    function DashboardProdut(router, activeRoute) {
        this.router = router;
        this.activeRoute = activeRoute;
        this.orderbyprice = false;
        this.orderbyname = false;
    }
    DashboardProdut.prototype.ngOnInit = function () { };
    DashboardProdut = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/product/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/product/dashboard/dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], DashboardProdut);
    return DashboardProdut;
}());



/***/ }),

/***/ "./src/app/product/detail-product/detail-product.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/product/detail-product/detail-product.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Head Section -->\n<div class=\"head-section bg\">\n    <div class=\"container\">\n        <h4>Product <span class=\"font-light\">Detail</span></h4>\n        <p>Angushop Product Detail</p>\n    </div>\n</div>\n\n<!-- Loading -->\n<div class=\"valign-wrapper\" *ngIf=\"loadingState\">\n    <mat-spinner diameter=\"50\" strokeWidth=\"5\"></mat-spinner>\n</div>\n\n<div class=\"container-page\" *ngIf=\"productState\">\n    <div class=\"box-page\">\n        <h3 class=\"title\">{{product.productName}}</h3>\n\n        <div class=\"row\">\n            <div class=\"col l7 s12\">\n                <div class=\"wrap-image\">\n                    <img [src]=\"productImage\" class=\"img-detail\" [alt]=\"product.productName\"/>\n                    <ul>\n                        <li *ngFor=\"let image of product.gallery\" (click)=\"selectImage(image)\" [class.active]=\"selectedImage === image\">\n                            <img [src]=\"image.thumbnail\" class=\"responsive-img\" alt=\"\"/>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n            <div class=\"col l5 s12\">\n                <div class=\"price\">\n                    <div class=\"row\">\n                        <div class=\"col m6 s12\">\n                            <h4 class=\"value\">{{product.price | currency:'USD':'$'}}</h4>\n                        </div>\n                        <div class=\"col m6 s12\">\n                            <a class=\"link\" (click)=\"addWishlist('wishlist',productWishlist)\"><mat-icon>&#xE87E;</mat-icon> Add to Wishlist</a>\n                            <a class=\"link\" (click)=\"addCompare('compare',productCompare)\"><mat-icon>&#xE6E1;</mat-icon> Compare</a>\n                        </div>\n                    </div>\n                </div>\n                <button [disabled]=\"procustCount >= product.stock\" mat-button class=\"btn btn-primary\" (click)=\"addCart('products',productsOrder)\">\n                    <mat-icon>&#xE8CC;</mat-icon>Add to cart({{procustCount}}) \n                </button>\n\n                <table class=\"bordered\">\n                    <tbody>\n                        <tr>\n                            <td>Stock</td>\n                            <td>{{product.stock}}</td>\n                        </tr>\n                        <tr>\n                            <td>color</td>\n                            <td>{{product.color}}</td>\n                        </tr>\n                        <tr>\n                            <td>size</td>\n                            <td>{{product.size}}</td>\n                        </tr>\n                    </tbody>\n                </table>\n\n                <h5>Description</h5>\n                <p class=\"margin-bottom10\">{{product.description}}</p>\n                <p><rating [value]=\"product.rate\"></rating></p>\n                \n                <!-- Tag -->\n                <mat-chip-list>\n                    <mat-chip>Angushop</mat-chip>\n                    <mat-chip>Shop</mat-chip>\n                    <mat-chip>Ecommerce</mat-chip>\n                    <mat-chip>Angular 2</mat-chip>\n                </mat-chip-list>\n\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/product/detail-product/detail-product.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/product/detail-product/detail-product.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\nImport\r\n=========================== */\n/* -------------------------------------------------------------\n  Sass CSS3 Mixins! The Cross-Browser CSS3 Sass Library\n  By: Matthieu Aussaguel, http://www.mynameismatthieu.com, @matthieu_tweets\n\n  List of CSS3 Sass Mixins File to be @imported and @included as you need\n\n  The purpose of this library is to facilitate the use of CSS3 on different browsers avoiding HARD TO READ and NEVER\n  ENDING css files\n\n  note: All CSS3 Properties are being supported by Safari 5\n  more info: http://www.findmebyip.com/litmus/#css3-properties\n\n------------------------------------------------------------- */\n/*\nColor\n=========================== */\n/*\nFont Family\n=========================== */\n.material-icons {\n  font-family: 'Material Icons';\n  font-weight: normal;\n  line-height: 20px; }\n.material-icons {\n  font-family: 'Material Icons';\n  font-weight: normal;\n  line-height: 20px; }\n/*\r\nDetail Product\r\n=========================== */\n.title {\n  text-transform: capitalize;\n  margin-bottom: 30px;\n  margin-top: -5px; }\n.price {\n  margin-bottom: 25px; }\n.price .value {\n    margin-bottom: 0;\n    font-weight: 400;\n    font-family: Arial, Helvetica, sans-serif; }\n.wrap-image {\n  display: block;\n  position: relative; }\n.wrap-image ul {\n    display: inline-block;\n    margin: 0;\n    padding: 0;\n    list-style: none; }\n.wrap-image ul li {\n      display: block;\n      width: 85px;\n      overflow: hidden;\n      border: solid 1px #efefef;\n      background: #fff;\n      cursor: pointer;\n      position: relative;\n      float: left;\n      margin-right: 5px; }\n.wrap-image ul li:before {\n        content: '';\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        border: solid 5px #fff;\n        z-index: 2; }\n.wrap-image ul li img {\n        width: 100%;\n        z-index: 1; }\nimg.img-detail {\n  width: 100%;\n  border: solid 1px #efefef;\n  background: #fff;\n  padding: 10px; }\nbutton {\n  width: 100%; }\ntable {\n  margin: 15px 0 25px;\n  text-transform: capitalize; }\ntable tr:last-child {\n    border: 0; }\ntable tr:nth-child(even) {\n    background: #f9f9f9; }\ntable td {\n    padding: 10px 15px;\n    border: solid 1px #efefef; }\ntable td:first-child {\n      width: 120px;\n      font-weight: bold; }\ntable .label {\n    width: 120px; }\np:last-child {\n  margin-bottom: 0; }\n/*\r\nLoading\r\n=========================== */\n.valign-wrapper {\n  position: relative;\n  width: 100%;\n  top: 0;\n  right: 0;\n  background: #fff; }\n.valign-wrapper mat-spinner {\n    width: 50px;\n    height: 50px;\n    display: block;\n    margin: auto; }\n/*\r\nResponsive\r\n=========================== */\n@media (max-width: 920px) {\n  .wrap-image {\n    padding-left: 0; }\n    .wrap-image ul {\n      display: inline-block;\n      position: relative; }\n      .wrap-image ul li {\n        float: left;\n        display: block;\n        width: 75px;\n        margin-bottom: 5px;\n        margin-right: 5px; }\n        .wrap-image ul li img {\n          width: 100%; }\n  img.img-detail {\n    width: auto;\n    max-width: 100%; }\n  .price {\n    margin-top: 25px; } }\n@media (max-width: 767px) {\n  .value {\n    padding-bottom: 15px;\n    padding-left: 5px; }\n  .link {\n    padding-left: 5px; } }\n"

/***/ }),

/***/ "./src/app/product/detail-product/detail-product.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/product/detail-product/detail-product.component.ts ***!
  \********************************************************************/
/*! exports provided: DetailProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailProductComponent", function() { return DetailProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_service_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/service/cookie.service */ "./src/app/lib/service/cookie.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _lib_service_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/service/product.service */ "./src/app/lib/service/product.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DetailProductComponent = /** @class */ (function () {
    function DetailProductComponent(activeRoute, productService, snackBar, cookie) {
        this.activeRoute = activeRoute;
        this.productService = productService;
        this.snackBar = snackBar;
        this.cookie = cookie;
        this.cloneProduct = [];
        this.productsOrder = [];
        this.productWishlist = [];
        this.productCompare = [];
        this.procustCount = 0;
        this.productState = false;
        this.loadingState = true;
        this.productsOrder = this.cookie['productsOrder'];
        this.productWishlist = this.cookie['arrWishList'];
        this.productCompare = this.cookie['arrCompare'];
    }
    DetailProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeRoute.params.subscribe(function (params) {
            _this.productName = params["detail"];
            _this.productService.getSlugProduct(_this.productName).then(function (product) {
                _this.product = product;
                _this.productState = true;
                _this.loadingState = false;
                _this.productImage = product['image'];
                // Set Object Order Product
                _this.objectOrder = {
                    id: product['id'],
                    slug: product['slug'],
                    quantity: 1,
                    stock: product['stock'],
                    price: product['price'],
                    image: product['image'],
                    productName: product['productName']
                };
                // Init Demo Image
                _this.selectedImage = lodash__WEBPACK_IMPORTED_MODULE_2__["find"](product['gallery'], function (o) {
                    return o.images == product['image'];
                });
                // Init Counter product button
                _this.buttonCounter(product['id']);
            });
        });
    };
    // Button Counter
    DetailProductComponent.prototype.buttonCounter = function (idProduct) {
        var findObj = lodash__WEBPACK_IMPORTED_MODULE_2__["find"](this.cookie['productsOrder'], ['id', idProduct]);
        if (findObj != undefined) {
            this.procustCount = findObj.quantity;
        }
    };
    // Add Cart to Cookie
    DetailProductComponent.prototype.addCart = function (cName, cValue) {
        var obj = lodash__WEBPACK_IMPORTED_MODULE_2__["find"](this.productsOrder, ['id', this.product.id]);
        if (obj == undefined) {
            this.productsOrder.push(this.objectOrder);
        }
        else {
            obj.quantity = obj.quantity + 1;
        }
        this.buttonCounter(this.product.id);
        this.cookie.addCookie(cName, JSON.stringify(cValue));
        this.openSnackBar(this.product.productName, 'Added to Cart');
    };
    // Add wishlist to cookie
    DetailProductComponent.prototype.addWishlist = function (cName, cValue) {
        var _this = this;
        var obj = lodash__WEBPACK_IMPORTED_MODULE_2__["find"](this.productWishlist, function (x) {
            return x == _this.product['index'];
        });
        if (obj == undefined) {
            this.productWishlist.push(this.product['index']);
        }
        this.cookie.addCookie(cName, JSON.stringify(cValue));
        this.openSnackBar(this.product.productName, 'Added to Wishlist');
    };
    // Add Compare
    DetailProductComponent.prototype.addCompare = function (cName, cValue) {
        var _this = this;
        var obj = lodash__WEBPACK_IMPORTED_MODULE_2__["find"](this.productCompare, function (x) {
            return x == _this.product['index'];
        });
        if (obj == undefined) {
            this.productCompare.push(this.product['index']);
        }
        this.cookie.addCookie(cName, JSON.stringify(cValue));
        this.openSnackBar(this.product.productName, 'Added to Compare');
    };
    // Snack Bar
    DetailProductComponent.prototype.openSnackBar = function (message, action) {
        this.snackBar.open(message, action, {
            duration: 2000,
        });
    };
    // Image Gallery
    DetailProductComponent.prototype.selectImage = function (gallery) {
        this.selectedImage = gallery;
        this.productImage = gallery.images;
    };
    DetailProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-detail-product',
            template: __webpack_require__(/*! ./detail-product.component.html */ "./src/app/product/detail-product/detail-product.component.html"),
            styles: [__webpack_require__(/*! ./detail-product.component.scss */ "./src/app/product/detail-product/detail-product.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _lib_service_product_service__WEBPACK_IMPORTED_MODULE_5__["productService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"],
            _lib_service_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]])
    ], DetailProductComponent);
    return DetailProductComponent;
}());



/***/ }),

/***/ "./src/app/product/product.module.ts":
/*!*******************************************!*\
  !*** ./src/app/product/product.module.ts ***!
  \*******************************************/
/*! exports provided: ProductModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductModule", function() { return ProductModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-validation */ "./node_modules/ng2-validation/dist/index.js");
/* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ng2_validation__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var ngx_paypal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-paypal */ "./node_modules/ngx-paypal/fesm5/ngx-paypal.js");
/* harmony import */ var _lib_lib_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../lib/lib.module */ "./src/app/lib/lib.module.ts");
/* harmony import */ var _lib_directive_match_height_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../lib/directive/match-height.directive */ "./src/app/lib/directive/match-height.directive.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/product/dashboard/dashboard.component.ts");
/* harmony import */ var _product1_product1_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./product1/product1.component */ "./src/app/product/product1/product1.component.ts");
/* harmony import */ var _detail_product_detail_product_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./detail-product/detail-product.component */ "./src/app/product/detail-product/detail-product.component.ts");
/* harmony import */ var _product2_product2_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./product2/product2.component */ "./src/app/product/product2/product2.component.ts");
/* harmony import */ var _product3_product3_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./product3/product3.component */ "./src/app/product/product3/product3.component.ts");
/* harmony import */ var _product4_product4_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./product4/product4.component */ "./src/app/product/product4/product4.component.ts");
/* harmony import */ var _product5_product5_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./product5/product5.component */ "./src/app/product/product5/product5.component.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./cart/cart.component */ "./src/app/product/cart/cart.component.ts");
/* harmony import */ var _shipping_shipping_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./shipping/shipping.component */ "./src/app/product/shipping/shipping.component.ts");
/* harmony import */ var _receipt_receipt_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./receipt/receipt.component */ "./src/app/product/receipt/receipt.component.ts");
/* harmony import */ var _wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./wishlist//wishlist.component */ "./src/app/product/wishlist/wishlist.component.ts");
/* harmony import */ var _lib_service_cookie_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../lib/service/cookie.service */ "./src/app/lib/service/cookie.service.ts");
/* harmony import */ var _compare_compare_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./compare/compare.component */ "./src/app/product/compare/compare.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// Dependencies




// Angushop Library module


// Product Component













var ProductModule = /** @class */ (function () {
    function ProductModule() {
    }
    ProductModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _lib_lib_module__WEBPACK_IMPORTED_MODULE_10__["libModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBarModule"],
                ng2_validation__WEBPACK_IMPORTED_MODULE_8__["CustomFormsModule"],
                ngx_paypal__WEBPACK_IMPORTED_MODULE_9__["NgxPayPalModule"]
            ],
            declarations: [
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__["DashboardProdut"],
                _product1_product1_component__WEBPACK_IMPORTED_MODULE_13__["product1Component"],
                _detail_product_detail_product_component__WEBPACK_IMPORTED_MODULE_14__["DetailProductComponent"],
                _product2_product2_component__WEBPACK_IMPORTED_MODULE_15__["Product2Component"],
                _product3_product3_component__WEBPACK_IMPORTED_MODULE_16__["Product3Component"],
                _cart_cart_component__WEBPACK_IMPORTED_MODULE_19__["CartComponent"],
                _shipping_shipping_component__WEBPACK_IMPORTED_MODULE_20__["ShippingComponent"],
                _product4_product4_component__WEBPACK_IMPORTED_MODULE_17__["Product4Component"],
                _product5_product5_component__WEBPACK_IMPORTED_MODULE_18__["Product5Component"],
                _receipt_receipt_component__WEBPACK_IMPORTED_MODULE_21__["ReceiptComponent"],
                _wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_22__["WishlistComponent"],
                _compare_compare_component__WEBPACK_IMPORTED_MODULE_24__["CompareComponent"],
                _lib_directive_match_height_directive__WEBPACK_IMPORTED_MODULE_11__["MatchHeightDirective"]
            ],
            providers: [_lib_service_cookie_service__WEBPACK_IMPORTED_MODULE_23__["CookieService"]],
            exports: [
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__["DashboardProdut"]
            ]
        })
    ], ProductModule);
    return ProductModule;
}());



/***/ }),

/***/ "./src/app/product/product1/product1.component.html":
/*!**********************************************************!*\
  !*** ./src/app/product/product1/product1.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Head Section -->\n<div class=\"head-section bg\">\n    <div class=\"container\">\n        <h4>Product <span class=\"font-light\">One</span></h4>\n        <p>Angushop Product Style One</p>\n    </div>\n</div>\n<div class=\"row wrap-product\" myMatchHeight=\"layout\">\n    <div class=\"col m8 l9 s12 layout main-product\">\n        <!-- Start Product -->\n        <app-product \n            [filter]=\"{\n                productName: search,\n                category: category,\n                color: color,\n                price: price,\n                size: sizes\n            }\"\n            [column]=\"'l4 s6'\"\n            [setlimit]=\"12\" \n            [paginate]=\"true\"\n            [currentPage]=\"currentPage\"\n            (pageChange)=\"onPageChange($event)\">\n        </app-product>\n        <!-- End Product -->  \n    </div>\n    <div class=\"col m4 l3 s12 layout side-product\">\n        <mat-tab-group>\n            <mat-tab label=\"Filter\">\n                <!-- Wrap Filter -->\n                <div class=\"wrap-filter\">\n                    <!-- Search -->\n                    <div class=\"content-filter search\">\n                        <input type=\"text\" placeholder=\"Search Product...\" [value]=\"valueSearch\" (keyup)=\"onSearch($event)\"/>\n                        <mat-icon class=\"icon\">&#xE8B6;</mat-icon>\n                    </div>\n                    <!-- Category -->\n                    <div class=\"content-filter\">\n                        <h6 class=\"title\">Categories</h6>\n                        <ul class=\"categories\">\n                            <li (click)=\"resetCategory()\" [class.active]=\"allCategory\"><a>All</a></li>\n                            <li *ngFor=\"let category of categories\" [class.active]=\"selectedCategory === category\">\n                                <a (click)=\"selectCategory(category)\">{{category.categories_name}}</a>\n                                <ul style=\"padding-left: 1em;\" id=\"sub\" *ngIf=\"selectedCategory === category\" class=\"categories sub\">\n                                    <!-- <li (click)=\"resetCategory()\" [class.active]=\"allCategory\"><a>Sub Category</a></li> -->\n                                    <h6 class=\"title\">Sub Categories</h6>\n                                    <li *ngFor=\"let item of subCategories\" [class.active]=\"selectedCategory === item\">\n                                        <a (click)=\"selectCategory(category)\">{{item.categories_name}}</a>\n                                    </li>\n                                </ul>\n                            </li>\n                        </ul>\n                    </div>\n                    <!-- Price -->\n                    <div class=\"content-filter\">\n                        <h6 class=\"title\">Price</h6>\n                        <div *ngIf=\"priceToggle\" class=\"center-align\">\n                            <p>\n                                <button mat-mini-fab (click)=\"refreshPrice()\">\n                                    <mat-icon>&#xE5D5;</mat-icon>\n                                </button>\n                            </p>\n                            <strong>{{price | currency:'USD':'$'}}</strong>\n                        </div>\n                        <mat-slider \n                            min=\"100\"\n                            max=\"1000\" \n                            value=\"550\" \n                            [(ngModel)]=\"price\" \n                            (change)=\"onChangeprice($event)\">\n                        </mat-slider>\n                    </div>\n                    <!-- Color -->\n                    <div class=\"content-filter\">\n                        <h6 class=\"title\">Color</h6>\n                        <ul class=\"colors\">\n                            <li *ngFor=\"let color of colors\" \n                                class=\"{{color.nameColor}}\" \n                                [class.active]=\"selectedColor === color\">\n                                <button mat-mini-fab (click)=\"selectColor(color)\"></button>\n                            </li>\n                        </ul>\n                    </div>\n                    <!-- Size -->\n                    <div class=\"content-filter padding-bottom0\">\n                        <h6 class=\"title\">Size</h6>\n                        <div class=\"row row-size\">\n                            <div *ngFor=\"let size of sizeProduct\" class=\"col s4 margin-bottom10\">\n                                <mat-checkbox \n                                    [checked]=\"size.check\" \n                                    (change)=\"size.check = !size.check\" \n                                    (click)=\"selectSize(size.size,size.check)\">\n                                        {{size.size}}\n                                </mat-checkbox>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <!-- End Filter -->\n            </mat-tab>\n            <mat-tab label=\"Recently\">\n                <!-- Start Recently -->\n                <ul class=\"list-product\">\n                    <li>\n                        <div class=\"wrap-img\">\n                            <img src=\"http://via.placeholder.com/640x500\" class=\"img-responsive\" alt=\"\"/> \n                        </div>\n                        <h6 class=\"title\"><a>Lorem ipsum dolor</a></h6>\n                        <p>Lorem ipsum dolor sit amet</p>\n                    </li>\n                    <li>\n                        <div class=\"wrap-img\">\n                            <img src=\"http://via.placeholder.com/640x500\" class=\"img-responsive\" alt=\"\"/> \n                        </div> \n                        <h6 class=\"title\"><a>vocent tractatos vel</a></h6>\n                        <p>Lorem ipsum dolor sit amet</p>\n                    </li>\n                    <li>\n                        <div class=\"wrap-img\">\n                            <img src=\"http://via.placeholder.com/640x500\" class=\"img-responsive\" alt=\"\"/>  \n                        </div>\n                        <h6 class=\"title\"><a>ridens doctus fabellas</a></h6>\n                        <p>Lorem ipsum dolor sit amet</p>\n                    </li>\n                    <li>\n                        <div class=\"wrap-img\">\n                            <img src=\"http://via.placeholder.com/640x500\" class=\"img-responsive\" alt=\"\"/>  \n                        </div>\n                        <h6 class=\"title\"><a>Usu an impetus</a></h6>\n                        <p>Lorem ipsum dolor sit amet</p>\n                    </li>\n                    <li>\n                        <div class=\"wrap-img\">\n                            <img src=\"http://via.placeholder.com/640x500\" class=\"img-responsive\" alt=\"\"/>  \n                        </div>\n                        <h6 class=\"title\"><a>Graeco feugiat ne</a></h6>\n                        <p>Lorem ipsum dolor sit amet</p>\n                    </li>\n                </ul>\n                <!-- End Recently -->\n            </mat-tab>\n        </mat-tab-group>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/product/product1/product1.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/product/product1/product1.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\nImport\n=========================== */\n/* -------------------------------------------------------------\n  Sass CSS3 Mixins! The Cross-Browser CSS3 Sass Library\n  By: Matthieu Aussaguel, http://www.mynameismatthieu.com, @matthieu_tweets\n\n  List of CSS3 Sass Mixins File to be @imported and @included as you need\n\n  The purpose of this library is to facilitate the use of CSS3 on different browsers avoiding HARD TO READ and NEVER\n  ENDING css files\n\n  note: All CSS3 Properties are being supported by Safari 5\n  more info: http://www.findmebyip.com/litmus/#css3-properties\n\n------------------------------------------------------------- */\n/*\nColor\n=========================== */\n/*\nFont Family\n=========================== */\n.material-icons {\n  font-family: 'Material Icons';\n  font-weight: normal;\n  line-height: 20px; }\n.material-icons {\n  font-family: 'Material Icons';\n  font-weight: normal;\n  line-height: 20px; }\n/*\nProduct\n=========================== */\n.wrap-product {\n  margin-bottom: 0; }\n.wrap-product > .col {\n    padding: 0; }\n.wrap-product > .col.side-product {\n      border-left: solid 1px #efefef;\n      margin-left: -1px; }\n.wrap-product > .col.main-product {\n      border-right: solid 1px #efefef;\n      padding: 30px 30px 20px 30px; }\n.row-size {\n  margin-left: -10px;\n  margin-right: -10px; }\n/*\nTab\n=========================== */\n.mat-tab-label, .mat-tab-link {\n  font-family: \"Roboto\", sans-serif; }\n/*\nOrder By\n=========================== */\n.orderby {\n  position: relative;\n  top: -8px; }\n.btn-order.active.mat-menu-item {\n  color: #fff; }\n.btn-order.active.mat-menu-item mat-icon {\n    color: #fff; }\n/*\nColors\n=========================== */\n.colors {\n  padding: 0;\n  margin: 10px 0 -7px 0;\n  display: inline-block; }\n.colors li {\n    float: left;\n    display: block;\n    margin: 0 5px 5px 0; }\n.colors li .mat-mini-fab {\n      border: solid 5px transparent;\n      transition: all 0.5s ease-in-out;\n      position: relative; }\n.colors li.active .mat-mini-fab {\n      border-color: #fff;\n      box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.1) !important; }\n.colors li.dark .mat-mini-fab {\n      background-color: #333; }\n.colors li.gray2 .mat-mini-fab {\n      background-color: #999; }\n.colors li.gray1 .mat-mini-fab {\n      background-color: #cfcfcf; }\n.colors li.gray .mat-mini-fab {\n      background-color: #f5f5f5; }\n/*\nFilter\n=========================== */\n.wrap-filter {\n  position: relative;\n  font-family: \"Roboto\", sans-serif; }\n.wrap-filter .content-filter {\n    padding: 20px 25px;\n    position: relative;\n    border-bottom: solid 1px #efefef; }\n.wrap-filter .content-filter .title {\n      margin-bottom: 10px;\n      text-transform: capitalize; }\n.wrap-filter .content-filter.search input {\n      width: 100%;\n      border: 0;\n      outline: 0;\n      padding-right: 35px;\n      background: transparent; }\n.wrap-filter .content-filter.search .icon {\n      position: absolute;\n      right: 25px;\n      top: 20px;\n      font-size: 24px; }\n.wrap-filter ul.categories {\n    margin-bottom: 5px; }\n.wrap-filter ul.categories li a {\n      display: block;\n      padding: 5px 0;\n      color: #8f8f8f;\n      border-bottom: dashed 1px #efefef; }\n.wrap-filter ul.categories li a:hover, .wrap-filter ul.categories li a:focus {\n        text-decoration: none; }\n.wrap-filter ul.categories li:last-child a {\n      border-bottom: 0;\n      padding-bottom: 0; }\n/*\nResponsive\n=========================== */\n@media (max-width: 568px) {\n  .layout {\n    height: auto !important; }\n  .wrap-product > .col.side-product {\n    border-left: 0;\n    margin-left: 0;\n    margin-bottom: 30px;\n    border-top: solid 1px #efefef; }\n  .wrap-product > .col.main-product {\n    margin-top: 30px;\n    padding-left: 15px;\n    padding-right: 15px;\n    border-right: 0; }\n  .layout.side-product {\n    height: auto !important; }\n  .wrap-filter .content-filter {\n    padding-left: 15px;\n    padding-right: 15px; }\n    .wrap-filter .content-filter:last-child {\n      border-bottom: 0; }\n  #sub.sub ul li {\n    padding-left: 1em !important; } }\n"

/***/ }),

/***/ "./src/app/product/product1/product1.component.ts":
/*!********************************************************!*\
  !*** ./src/app/product/product1/product1.component.ts ***!
  \********************************************************/
/*! exports provided: product1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "product1Component", function() { return product1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_service_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/service/product.service */ "./src/app/lib/service/product.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var product1Component = /** @class */ (function () {
    function product1Component(router, activeRoute, productService) {
        var _this = this;
        this.router = router;
        this.activeRoute = activeRoute;
        this.productService = productService;
        this.search = null;
        this.valueSearch = '';
        this.objectNavigation = {};
        this.currentPage = 1;
        this.navigateRoute = 'shop/product1';
        // Color
        this.colors = [];
        // Price
        this.priceToggle = false;
        // Category
        this.categories = [];
        this.chekCategory = lodash__WEBPACK_IMPORTED_MODULE_2__["lowerCase"](this.activeRoute.queryParams['_value'].category);
        // Size Product
        this.sizeProduct = [];
        this.arraySize = [];
        this.activeRoute.queryParams.subscribe(function (params) {
            _this.search = lodash__WEBPACK_IMPORTED_MODULE_2__["lowerCase"](params["search"]);
            _this.price = Number(params["price"]);
            _this.category = lodash__WEBPACK_IMPORTED_MODULE_2__["lowerCase"](params["category"]);
            _this.color = params["color"];
            // Pagination
            if (!isNaN(params["page"])) {
                _this.currentPage = Number(params["page"]);
            }
            else {
                _this.currentPage = 1;
            }
            if (params["size"] != undefined) {
                _this.sizes = params["size"].split('-').map(function (item) {
                    return parseInt(item, 10);
                });
                // Init Size
                lodash__WEBPACK_IMPORTED_MODULE_2__["merge"](_this.arraySize, _this.sizes);
            }
            else {
                _this.sizes = null;
            }
            if (!lodash__WEBPACK_IMPORTED_MODULE_2__["isEmpty"](params)) {
                // Merge Object on init
                lodash__WEBPACK_IMPORTED_MODULE_2__["merge"](_this.objectNavigation, params);
                // Value Search
                if (_this.search != undefined) {
                    _this.valueSearch = _this.search;
                }
                // Value Price
                if (!isNaN(_this.price)) {
                    _this.priceToggle = true;
                }
            }
        });
    }
    product1Component.prototype.ngOnInit = function () {
        // Fetch init
        this.fetchCategory();
        this.fetchSize();
        this.fetchColor();
        // Check Category
        if (this.chekCategory == '') {
            this.allCategory = true;
        }
    };
    product1Component.prototype.fetchColor = function () {
        var _this = this;
        this.productService.getColor().subscribe(function (data) {
            _this.colors = [];
            lodash__WEBPACK_IMPORTED_MODULE_2__["map"](data, function (x) {
                _this.colors.push(x);
            });
            _this.initColor(data);
        });
    };
    product1Component.prototype.initColor = function (obj) {
        var _this = this;
        if (this.color !== undefined) {
            this.selectedColor = lodash__WEBPACK_IMPORTED_MODULE_2__["find"](obj, function (o) {
                return o.nameColor == _this.color;
            });
        }
    };
    product1Component.prototype.selectColor = function (val) {
        if (this.selectedColor == val) {
            this.selectedColor = null;
            var clearColor = {
                queryParams: this.objectNavigation
            };
            delete this.objectNavigation['color'];
            delete this.objectNavigation['page'];
            this.router.navigate([this.navigateRoute], clearColor);
        }
        else {
            this.selectedColor = val;
            var navColor = {
                queryParams: this.objectNavigation
            };
            this.objectNavigation['color'] = val.nameColor;
            delete this.objectNavigation['page'];
            this.router.navigate([this.navigateRoute], navColor);
        }
    };
    product1Component.prototype.onChangeprice = function (e) {
        this.priceToggle = true;
        var navPrice = {
            queryParams: this.objectNavigation
        };
        this.objectNavigation['price'] = e.value;
        delete this.objectNavigation['page'];
        this.router.navigate([this.navigateRoute], navPrice);
    };
    product1Component.prototype.refreshPrice = function () {
        this.priceToggle = false;
        this.price = 550;
        var clearPrice = {
            queryParams: this.objectNavigation
        };
        delete this.objectNavigation['price'];
        delete this.objectNavigation['page'];
        this.router.navigate([this.navigateRoute], clearPrice);
    };
    product1Component.prototype.fetchCategory = function () {
        var _this = this;
        console.log('fetching..');
        this.productService.getCategory().subscribe(function (data) {
            _this.categories = data.category;
            _this.nextCategory = data.category;
            console.log('categories are 0', _this.categories);
            // _.map(data,(x)=>{
            //     this.categories.push(x);
            // });
            // this.initCategory(data)
        });
    };
    product1Component.prototype.initCategory = function (obj) {
        var _this = this;
        if (this.chekCategory !== undefined) {
            this.selectedCategory = lodash__WEBPACK_IMPORTED_MODULE_2__["find"](obj, function (o) {
                return o.categoryName == _this.chekCategory;
            });
        }
    };
    product1Component.prototype.selectCategory = function (e) {
        e.subCat = true;
        this.categories = this.nextCategory;
        this.subCatID = e.categories_id;
        this.getSubCategory(this.subCatID);
        this.selectedCategory = e;
        this.allCategory = false;
        var navCategory = {
            queryParams: this.objectNavigation
        };
        this.objectNavigation['category'] = lodash__WEBPACK_IMPORTED_MODULE_2__["kebabCase"](e.categoryName);
        delete this.objectNavigation['page'];
        this.router.navigate([this.navigateRoute], navCategory);
    };
    product1Component.prototype.getSubCategory = function (id) {
        var _this = this;
        this.productService.getSubCategory(id)
            .subscribe(function (data) {
            console.log('sub category is ', data);
            _this.subCategories = data.category;
        });
    };
    product1Component.prototype.resetCategory = function () {
        this.selectedCategory = null;
        this.allCategory = true;
        var clearCategory = {
            queryParams: this.objectNavigation
        };
        delete this.objectNavigation['category'];
        delete this.objectNavigation['page'];
        this.router.navigate([this.navigateRoute], clearCategory);
    };
    product1Component.prototype.onSearch = function (e) {
        var _this = this;
        clearTimeout(this.timeout);
        this.timeout = setTimeout(function () {
            var navSearch = {
                queryParams: _this.objectNavigation
            };
            if (e.target.value.length !== 0) {
                _this.objectNavigation['search'] = lodash__WEBPACK_IMPORTED_MODULE_2__["kebabCase"](e.target.value);
                delete _this.objectNavigation['page'];
                _this.router.navigate([_this.navigateRoute], navSearch);
            }
            else {
                delete _this.objectNavigation['search'];
                delete _this.objectNavigation['page'];
                _this.router.navigate([_this.navigateRoute], navSearch);
            }
        }, 500);
    };
    product1Component.prototype.fetchSize = function () {
        var _this = this;
        this.productService.getSize().subscribe(function (data) {
            _this.sizeProduct = [];
            lodash__WEBPACK_IMPORTED_MODULE_2__["map"](data, function (x) {
                _this.sizeProduct.push(x);
            });
            _this.initSize();
        });
    };
    product1Component.prototype.initSize = function () {
        var _this = this;
        var _loop_1 = function (i) {
            var checkSize = lodash__WEBPACK_IMPORTED_MODULE_2__["find"](this_1.sizes, function (e) {
                return _this.sizeProduct[i].size == e;
            });
            if (checkSize != undefined) {
                this_1.sizeProduct[i].check = true;
            }
        };
        var this_1 = this;
        for (var i = 0; i < this.sizeProduct.length; i++) {
            _loop_1(i);
        }
    };
    product1Component.prototype.selectSize = function (size, check) {
        if (check == false) {
            this.arraySize.push(size);
        }
        else {
            var index = this.arraySize.indexOf(size);
            this.arraySize.splice(index, 1);
        }
        if (this.arraySize.length != 0) {
            var navSize = {
                queryParams: this.objectNavigation
            };
            this.objectNavigation['size'] = lodash__WEBPACK_IMPORTED_MODULE_2__["kebabCase"](JSON.stringify(this.arraySize));
            delete this.objectNavigation['page'];
            this.router.navigate([this.navigateRoute], navSize);
        }
        else {
            var clearSize = {
                queryParams: this.objectNavigation
            };
            delete this.objectNavigation['size'];
            delete this.objectNavigation['page'];
            this.router.navigate([this.navigateRoute], clearSize);
        }
    };
    // On Page Change
    product1Component.prototype.onPageChange = function (e) {
        var navSize = {
            queryParams: this.objectNavigation
        };
        this.objectNavigation['page'] = e;
        this.router.navigate([this.navigateRoute], navSize);
    };
    product1Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./product1.component.html */ "./src/app/product/product1/product1.component.html"),
            styles: [__webpack_require__(/*! ./product1.component.scss */ "./src/app/product/product1/product1.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _lib_service_product_service__WEBPACK_IMPORTED_MODULE_3__["productService"]])
    ], product1Component);
    return product1Component;
}());

//  var $CUSTOM_FONTS_ARRAY = array(
//                    1 => array( array("id" => "0", "text" => "Choose font..."),
//                             //    array("id" => "ag_alb", "text" => "Albertus Medium"),
//                             //    array("id" => "bnkgothm", "text" => "Bank Gothic"),
//                             //    array("id" => "brushscriptstd", "text" => "Brush Script"),
//                             //    array("id" => "copgothb", "text" => "Copperplate Gothic"),
//                             //    array("id" => "harlowsi", "text" => "Harlow Solid Italic"),
//                             //    array("id" => "verdana", "text" => "Verdana"),
//                             //    array("id" => "times", "text" => "Times New Roman"),
//                             //    array("id" => "lithograph", "text" => "Lithograph"),
//                             //    array("id" => "magnetob", "text" => "Magneto"),
//                             //    array("id" => "ag_zurchke", "text" => "Zurich BLKEX BT")
//                            ),
//                    2 => array( array("id" => "0", "text" => "Choose font..."),
//                             //    array("id" => "ag_alb", "text" => "Albertus Medium"),
//                             //    array("id" => "ag_alger", "text" => "Algerian"),
//                             //    array("id" => "ag_arialb", "text" => "Arial"),
//                             //    array("id" => "bnkgothm", "text" => "Bank Gothic"),
//                             //    array("id" => "brushscriptstd", "text" => "Brush Script"),
//                             //    array("id" => "copgothb", "text" => "Copperplate Gothic"),
//                             //    array("id" => "harlowsi", "text" => "Harlow Solid Italic"),
//                             //    array("id" => "oldeng", "text" => "Old English Text"),
//                             //    array("id" => "verdana", "text" => "Verdana"),
//                             //    array("id" => "times", "text" => "Times New Roman"),
//                             //    array("id" => "lithograph", "text" => "Lithograph"),
//                             //    array("id" => "magnetob", "text" => "Magneto"),
//                             //    array("id" => "ag_zurchke", "text" => "Zurich BLKEX BT")
//                            )
//                       );
var fontArray_1 = [
    {
        id: '0',
        text: 'Choose font...'
    },
    {
        id: 'ag_alb',
        text: 'Albertus Medium'
    },
    {
        id: 'bnkgothm',
        text: 'Bank Gothic'
    },
    {
        id: 'brushscriptstd',
        text: 'Brush Script'
    },
    {
        id: 'copgothb',
        text: 'Copperplate Gothic'
    },
    {
        id: 'harlowsi',
        text: 'Harlow Solid Italic'
    },
    {
        id: 'verdana',
        text: 'Verdana'
    },
    {
        id: 'times',
        text: 'Times New Roman'
    },
    {
        id: 'lithograph',
        text: 'Lithograph'
    },
    {
        id: 'magnetob',
        text: 'Magneto'
    },
    {
        id: 'ag_zurchke',
        text: 'Zurich BLKEX BT'
    },
];
var fontArray_2 = [
    {
        id: '0',
        text: 'Choose font...'
    },
    {
        id: 'ag_alb',
        text: 'Albertus Medium'
    },
    {
        id: 'ag_alger',
        text: 'Algerian'
    },
    {
        id: 'ag_arialb',
        text: 'Arial'
    },
    {
        id: 'bnkgothm',
        text: 'Bank Gothic'
    },
    {
        id: 'brushscriptstd',
        text: 'Brush Script'
    },
    {
        id: 'copgothb',
        text: 'Copperplate Gothic'
    },
    {
        id: 'harlowsi',
        text: 'Harlow Solid Italic'
    },
    {
        id: 'oldeng',
        text: 'Old English Text'
    },
    {
        id: 'verdana',
        text: 'Verdana'
    },
    {
        id: 'times',
        text: 'Times New Roman'
    },
    {
        id: 'lithograph',
        text: 'Lithograph'
    },
    {
        id: 'magnetob',
        text: 'Magneto'
    },
    {
        id: 'ag_zurchke',
        text: 'Zurich BLKEX BT'
    },
];


/***/ }),

/***/ "./src/app/product/product2/product2.component.html":
/*!**********************************************************!*\
  !*** ./src/app/product/product2/product2.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Head Section -->\n<div class=\"head-section bg\">\n    <div class=\"container\">\n        <h4>Product <span class=\"font-light\">Two</span></h4>\n        <p>Angushop Product Style Two</p>\n    </div>\n</div>\n<div class=\"row wrap-product\" myMatchHeight=\"layout\">\n    <div class=\"col m8 l9 s12 push-l3 push-m4 layout main-product\">\n        <!-- Start Product -->\n        <app-product \n            [filter]=\"{\n                productName: search,\n                category: category,\n                color: color,\n                price: price,\n                size: sizes\n            }\"\n            [column]=\"'l4 s6'\"\n            [setlimit]=\"12\" \n            [paginate]=\"true\"\n            [currentPage]=\"currentPage\"\n            (pageChange)=\"onPageChange($event)\">\n        </app-product>\n        <!-- End Product -->  \n    </div>\n    <div class=\"col m4 l3 s12 pull-l9 pull-m8 layout side-product\">\n        <mat-tab-group>\n            <mat-tab label=\"Filter\">\n                <!-- Wrap Filter -->\n                <div class=\"wrap-filter\">\n                    <!-- Search -->\n                    <div class=\"content-filter search\">\n                        <input type=\"text\" placeholder=\"Search Product...\" [value]=\"valueSearch\" (keyup)=\"onSearch($event)\"/>\n                        <mat-icon class=\"icon\">&#xE8B6;</mat-icon>\n                    </div>\n                    <!-- Category -->\n                    <div class=\"content-filter\">\n                        <h6 class=\"title\">Categories</h6>\n                        <ul class=\"categories\">\n                            <li (click)=\"resetCategory()\" [class.active]=\"allCategory\"><a>All</a></li>\n                            <li *ngFor=\"let category of categories\" [class.active]=\"selectedCategory === category\">\n                                <a (click)=\"selectCategory(category)\">{{category.categoryName}}</a>\n                            </li>\n                        </ul>\n                    </div>\n                    <!-- Price -->\n                    <div class=\"content-filter\">\n                        <h6 class=\"title\">Price</h6>\n                        <div *ngIf=\"priceToggle\" class=\"center-align\">\n                            <p>\n                                <button mat-mini-fab (click)=\"refreshPrice()\">\n                                    <mat-icon>&#xE5D5;</mat-icon>\n                                </button>\n                            </p>\n                            <strong>{{price | currency:'USD':'$'}}</strong>\n                        </div>\n                        <mat-slider \n                            min=\"100\"\n                            max=\"1000\" \n                            value=\"550\" \n                            [(ngModel)]=\"price\" \n                            (change)=\"onChangeprice($event)\">\n                        </mat-slider>\n                    </div>\n                    <!-- Color -->\n                    <div class=\"content-filter\">\n                        <h6 class=\"title\">Color</h6>\n                        <ul class=\"colors\">\n                            <li *ngFor=\"let color of colors\" \n                                class=\"{{color.nameColor}}\" \n                                [class.active]=\"selectedColor === color\">\n                                <button mat-mini-fab (click)=\"selectColor(color)\"></button>\n                            </li>\n                        </ul>\n                    </div>\n                    <!-- Size -->\n                    <div class=\"content-filter padding-bottom0\">\n                        <h6 class=\"title\">Size</h6>\n                        <div class=\"row row-size\">\n                            <div *ngFor=\"let size of sizeProduct\" class=\"col s4 margin-bottom10\">\n                                <mat-checkbox \n                                    [checked]=\"size.check\" \n                                    (change)=\"size.check = !size.check\" \n                                    (click)=\"selectSize(size.size,size.check)\">\n                                        {{size.size}}\n                                </mat-checkbox>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <!-- End Filter -->\n            </mat-tab>\n            <mat-tab label=\"Recently\">\n                <!-- Start Recently -->\n                <ul class=\"list-product\">\n                    <li>\n                        <div class=\"wrap-img\">\n                            <img src=\"http://via.placeholder.com/640x500\" class=\"img-responsive\" alt=\"\"/> \n                        </div>\n                        <h6 class=\"title\"><a>Lorem ipsum dolor</a></h6>\n                        <p>Lorem ipsum dolor sit amet</p>\n                    </li>\n                    <li>\n                        <div class=\"wrap-img\">\n                            <img src=\"http://via.placeholder.com/640x500\" class=\"img-responsive\" alt=\"\"/> \n                        </div> \n                        <h6 class=\"title\"><a>vocent tractatos vel</a></h6>\n                        <p>Lorem ipsum dolor sit amet</p>\n                    </li>\n                    <li>\n                        <div class=\"wrap-img\">\n                            <img src=\"http://via.placeholder.com/640x500\" class=\"img-responsive\" alt=\"\"/>  \n                        </div>\n                        <h6 class=\"title\"><a>ridens doctus fabellas</a></h6>\n                        <p>Lorem ipsum dolor sit amet</p>\n                    </li>\n                    <li>\n                        <div class=\"wrap-img\">\n                            <img src=\"http://via.placeholder.com/640x500\" class=\"img-responsive\" alt=\"\"/>  \n                        </div>\n                        <h6 class=\"title\"><a>Usu an impetus</a></h6>\n                        <p>Lorem ipsum dolor sit amet</p>\n                    </li>\n                    <li>\n                        <div class=\"wrap-img\">\n                            <img src=\"http://via.placeholder.com/640x500\" class=\"img-responsive\" alt=\"\"/>  \n                        </div>\n                        <h6 class=\"title\"><a>Graeco feugiat ne</a></h6>\n                        <p>Lorem ipsum dolor sit amet</p>\n                    </li>\n                </ul>\n                <!-- End Recently -->\n            </mat-tab>\n        </mat-tab-group>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/product/product2/product2.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/product/product2/product2.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\nImport\n=========================== */\n/* -------------------------------------------------------------\n  Sass CSS3 Mixins! The Cross-Browser CSS3 Sass Library\n  By: Matthieu Aussaguel, http://www.mynameismatthieu.com, @matthieu_tweets\n\n  List of CSS3 Sass Mixins File to be @imported and @included as you need\n\n  The purpose of this library is to facilitate the use of CSS3 on different browsers avoiding HARD TO READ and NEVER\n  ENDING css files\n\n  note: All CSS3 Properties are being supported by Safari 5\n  more info: http://www.findmebyip.com/litmus/#css3-properties\n\n------------------------------------------------------------- */\n/*\nColor\n=========================== */\n/*\nFont Family\n=========================== */\n.material-icons {\n  font-family: 'Material Icons';\n  font-weight: normal;\n  line-height: 20px; }\n.material-icons {\n  font-family: 'Material Icons';\n  font-weight: normal;\n  line-height: 20px; }\n/*\nProduct\n=========================== */\n.wrap-product {\n  margin-bottom: 0; }\n.wrap-product > .col {\n    padding: 0; }\n.wrap-product > .col.side-product {\n      border-right: solid 1px #efefef;\n      margin-right: -1px; }\n.wrap-product > .col.main-product {\n      border-left: solid 1px #efefef;\n      padding: 30px 30px 20px 30px; }\n.row-size {\n  margin-left: -10px;\n  margin-right: -10px; }\n/*\nTab\n=========================== */\n.mat-tab-label, .mat-tab-link {\n  font-family: \"Roboto\", sans-serif; }\n/*\nOrder By\n=========================== */\n.orderby {\n  position: relative;\n  top: -8px; }\n.btn-order.active.mat-menu-item {\n  color: #fff; }\n.btn-order.active.mat-menu-item mat-icon {\n    color: #fff; }\n/*\nColors\n=========================== */\n.colors {\n  padding: 0;\n  margin: 10px 0 -7px 0;\n  display: inline-block; }\n.colors li {\n    float: left;\n    display: block;\n    margin: 0 5px 5px 0; }\n.colors li .mat-mini-fab {\n      border: solid 5px transparent;\n      transition: all 0.5s ease-in-out;\n      position: relative; }\n.colors li.active .mat-mini-fab {\n      border-color: #fff;\n      box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.1) !important; }\n.colors li.dark .mat-mini-fab {\n      background-color: #333; }\n.colors li.gray2 .mat-mini-fab {\n      background-color: #999; }\n.colors li.gray1 .mat-mini-fab {\n      background-color: #cfcfcf; }\n.colors li.gray .mat-mini-fab {\n      background-color: #f5f5f5; }\n/*\nFilter\n=========================== */\n.wrap-filter {\n  position: relative;\n  font-family: \"Roboto\", sans-serif; }\n.wrap-filter .content-filter {\n    padding: 20px 25px;\n    position: relative;\n    border-bottom: solid 1px #efefef; }\n.wrap-filter .content-filter .title {\n      margin-bottom: 10px;\n      text-transform: capitalize; }\n.wrap-filter .content-filter.search input {\n      width: 100%;\n      border: 0;\n      outline: 0;\n      padding-right: 35px;\n      background: transparent; }\n.wrap-filter .content-filter.search .icon {\n      position: absolute;\n      right: 25px;\n      top: 20px;\n      font-size: 24px; }\n.wrap-filter ul.categories {\n    margin-bottom: 5px; }\n.wrap-filter ul.categories li a {\n      display: block;\n      padding: 5px 0;\n      color: #8f8f8f;\n      border-bottom: dashed 1px #efefef; }\n.wrap-filter ul.categories li a:hover, .wrap-filter ul.categories li a:focus {\n        text-decoration: none; }\n.wrap-filter ul.categories li:last-child a {\n      border-bottom: 0;\n      padding-bottom: 0; }\n/*\nResponsive\n=========================== */\n@media (max-width: 568px) {\n  .layout {\n    height: auto !important; }\n  .wrap-product > .col.side-product {\n    border-right: 0;\n    margin-left: 0;\n    margin-bottom: 30px;\n    border-top: solid 1px #efefef; }\n  .wrap-product > .col.main-product {\n    margin-top: 30px;\n    padding-left: 15px;\n    padding-right: 15px;\n    border-left: 0; }\n  .layout.side-product {\n    height: auto !important; }\n  .wrap-filter .content-filter {\n    padding-left: 15px;\n    padding-right: 15px; }\n    .wrap-filter .content-filter:last-child {\n      border-bottom: 0; } }\n"

/***/ }),

/***/ "./src/app/product/product2/product2.component.ts":
/*!********************************************************!*\
  !*** ./src/app/product/product2/product2.component.ts ***!
  \********************************************************/
/*! exports provided: Product2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product2Component", function() { return Product2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_service_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/service/product.service */ "./src/app/lib/service/product.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Product2Component = /** @class */ (function () {
    function Product2Component(router, activeRoute, productService) {
        var _this = this;
        this.router = router;
        this.activeRoute = activeRoute;
        this.productService = productService;
        this.search = null;
        this.valueSearch = '';
        this.objectNavigation = {};
        this.currentPage = 1;
        this.navigateRoute = 'shop/product2';
        // Color
        this.colors = [];
        // Price
        this.priceToggle = false;
        // Category
        this.categories = [];
        this.chekCategory = lodash__WEBPACK_IMPORTED_MODULE_2__["lowerCase"](this.activeRoute.queryParams['_value'].category);
        // Size Product
        this.sizeProduct = [];
        this.arraySize = [];
        this.activeRoute.queryParams.subscribe(function (params) {
            _this.search = lodash__WEBPACK_IMPORTED_MODULE_2__["lowerCase"](params["search"]);
            _this.price = Number(params["price"]);
            _this.category = lodash__WEBPACK_IMPORTED_MODULE_2__["lowerCase"](params["category"]);
            _this.color = params["color"];
            // Pagination
            if (!isNaN(params["page"])) {
                _this.currentPage = Number(params["page"]);
            }
            else {
                _this.currentPage = 1;
            }
            if (params["size"] != undefined) {
                _this.sizes = params["size"].split('-').map(function (item) {
                    return parseInt(item, 10);
                });
                // Init Size
                lodash__WEBPACK_IMPORTED_MODULE_2__["merge"](_this.arraySize, _this.sizes);
            }
            else {
                _this.sizes = null;
            }
            if (!lodash__WEBPACK_IMPORTED_MODULE_2__["isEmpty"](params)) {
                // Merge Object on init
                lodash__WEBPACK_IMPORTED_MODULE_2__["merge"](_this.objectNavigation, params);
                // Value Search
                if (_this.search != undefined) {
                    _this.valueSearch = _this.search;
                }
                // Value Price
                if (!isNaN(_this.price)) {
                    _this.priceToggle = true;
                }
            }
        });
    }
    Product2Component.prototype.ngOnInit = function () {
        // Fetch init
        this.fetchCategory();
        this.fetchSize();
        this.fetchColor();
        // Check Category
        if (this.chekCategory == '') {
            this.allCategory = true;
        }
    };
    Product2Component.prototype.fetchColor = function () {
        var _this = this;
        this.productService.getColor().subscribe(function (data) {
            _this.colors = [];
            lodash__WEBPACK_IMPORTED_MODULE_2__["map"](data, function (x) {
                _this.colors.push(x);
            });
            _this.initColor(data);
        });
    };
    Product2Component.prototype.initColor = function (obj) {
        var _this = this;
        if (this.color !== undefined) {
            this.selectedColor = lodash__WEBPACK_IMPORTED_MODULE_2__["find"](obj, function (o) {
                return o.nameColor == _this.color;
            });
        }
    };
    Product2Component.prototype.selectColor = function (val) {
        if (this.selectedColor == val) {
            this.selectedColor = null;
            var clearColor = {
                queryParams: this.objectNavigation
            };
            delete this.objectNavigation['color'];
            delete this.objectNavigation['page'];
            this.router.navigate([this.navigateRoute], clearColor);
        }
        else {
            this.selectedColor = val;
            var navColor = {
                queryParams: this.objectNavigation
            };
            this.objectNavigation['color'] = val.nameColor;
            delete this.objectNavigation['page'];
            this.router.navigate([this.navigateRoute], navColor);
        }
    };
    Product2Component.prototype.onChangeprice = function (e) {
        this.priceToggle = true;
        var navPrice = {
            queryParams: this.objectNavigation
        };
        this.objectNavigation['price'] = e.value;
        delete this.objectNavigation['page'];
        this.router.navigate([this.navigateRoute], navPrice);
    };
    Product2Component.prototype.refreshPrice = function () {
        this.priceToggle = false;
        this.price = 550;
        var clearPrice = {
            queryParams: this.objectNavigation
        };
        delete this.objectNavigation['price'];
        delete this.objectNavigation['page'];
        this.router.navigate([this.navigateRoute], clearPrice);
    };
    Product2Component.prototype.fetchCategory = function () {
        var _this = this;
        this.productService.getCategory().subscribe(function (data) {
            _this.categories = [];
            lodash__WEBPACK_IMPORTED_MODULE_2__["map"](data, function (x) {
                _this.categories.push(x);
            });
            _this.initCategory(data);
        });
    };
    Product2Component.prototype.initCategory = function (obj) {
        var _this = this;
        if (this.chekCategory !== undefined) {
            this.selectedCategory = lodash__WEBPACK_IMPORTED_MODULE_2__["find"](obj, function (o) {
                return o.categoryName == _this.chekCategory;
            });
        }
    };
    Product2Component.prototype.selectCategory = function (e) {
        this.selectedCategory = e;
        this.allCategory = false;
        var navCategory = {
            queryParams: this.objectNavigation
        };
        this.objectNavigation['category'] = lodash__WEBPACK_IMPORTED_MODULE_2__["kebabCase"](e.categoryName);
        delete this.objectNavigation['page'];
        this.router.navigate([this.navigateRoute], navCategory);
    };
    Product2Component.prototype.resetCategory = function () {
        this.selectedCategory = null;
        this.allCategory = true;
        var clearCategory = {
            queryParams: this.objectNavigation
        };
        delete this.objectNavigation['category'];
        delete this.objectNavigation['page'];
        this.router.navigate([this.navigateRoute], clearCategory);
    };
    Product2Component.prototype.onSearch = function (e) {
        var _this = this;
        clearTimeout(this.timeout);
        this.timeout = setTimeout(function () {
            var navSearch = {
                queryParams: _this.objectNavigation
            };
            if (e.target.value.length !== 0) {
                _this.objectNavigation['search'] = lodash__WEBPACK_IMPORTED_MODULE_2__["kebabCase"](e.target.value);
                delete _this.objectNavigation['page'];
                _this.router.navigate([_this.navigateRoute], navSearch);
            }
            else {
                delete _this.objectNavigation['search'];
                delete _this.objectNavigation['page'];
                _this.router.navigate([_this.navigateRoute], navSearch);
            }
        }, 500);
    };
    Product2Component.prototype.fetchSize = function () {
        var _this = this;
        this.productService.getSize().subscribe(function (data) {
            _this.sizeProduct = [];
            lodash__WEBPACK_IMPORTED_MODULE_2__["map"](data, function (x) {
                _this.sizeProduct.push(x);
            });
            _this.initSize();
        });
    };
    Product2Component.prototype.initSize = function () {
        var _this = this;
        var _loop_1 = function (i) {
            var checkSize = lodash__WEBPACK_IMPORTED_MODULE_2__["find"](this_1.sizes, function (e) {
                return _this.sizeProduct[i].size == e;
            });
            if (checkSize != undefined) {
                this_1.sizeProduct[i].check = true;
            }
        };
        var this_1 = this;
        for (var i = 0; i < this.sizeProduct.length; i++) {
            _loop_1(i);
        }
    };
    Product2Component.prototype.selectSize = function (size, check) {
        if (check == false) {
            this.arraySize.push(size);
        }
        else {
            var index = this.arraySize.indexOf(size);
            this.arraySize.splice(index, 1);
        }
        if (this.arraySize.length != 0) {
            var navSize = {
                queryParams: this.objectNavigation
            };
            this.objectNavigation['size'] = lodash__WEBPACK_IMPORTED_MODULE_2__["kebabCase"](JSON.stringify(this.arraySize));
            delete this.objectNavigation['page'];
            this.router.navigate([this.navigateRoute], navSize);
        }
        else {
            var clearSize = {
                queryParams: this.objectNavigation
            };
            delete this.objectNavigation['size'];
            delete this.objectNavigation['page'];
            this.router.navigate([this.navigateRoute], clearSize);
        }
    };
    // On Page Change
    Product2Component.prototype.onPageChange = function (e) {
        var navSize = {
            queryParams: this.objectNavigation
        };
        this.objectNavigation['page'] = e;
        this.router.navigate([this.navigateRoute], navSize);
    };
    Product2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product2',
            template: __webpack_require__(/*! ./product2.component.html */ "./src/app/product/product2/product2.component.html"),
            styles: [__webpack_require__(/*! ./product2.component.scss */ "./src/app/product/product2/product2.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _lib_service_product_service__WEBPACK_IMPORTED_MODULE_3__["productService"]])
    ], Product2Component);
    return Product2Component;
}());



/***/ }),

/***/ "./src/app/product/product3/product3.component.html":
/*!**********************************************************!*\
  !*** ./src/app/product/product3/product3.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Head Section -->\n<div class=\"head-section bg\">\n    <div class=\"container\">\n        <h4>Product <span class=\"font-light\">Three</span></h4>\n        <p>Angushop Product Style Three</p>\n    </div>\n</div>\n<div class=\"container-page\">\n    <div class=\"box-page\">\n        <div class=\"row margin-bottom50\">\n            <div class=\"col l8 m7 s12\">\n                <!-- Start Categories -->\n                <h5>Categories</h5>\n                <ul class=\"categories\">\n                    <li (click)=\"resetCategory()\" [class.active]=\"allCategory\"><a>All</a></li>\n                    <li *ngFor=\"let category of categories\" [class.active]=\"selectedCategory === category\">\n                        <a (click)=\"selectCategory(category)\">{{category.categoryName}}</a>\n                    </li>\n                </ul>\n                <!-- End Categories -->\n            </div>\n            <div class=\"col l4 m5 s12 padding-top30\">\n                <!-- Search -->\n                <div class=\"search\">\n                    <input type=\"text\" placeholder=\"Search Product...\" [value]=\"valueSearch\" (keyup)=\"onSearch($event)\"/>\n                    <mat-icon class=\"icon\">&#xE8B6;</mat-icon>\n                </div>\n            </div>\n        </div>\n\n        <!-- Start Product -->\n        <div class=\"wrap-product\">\n            <app-product \n                [filter]=\"{\n                    productName: search,\n                    category: category,\n                    color: color,\n                    price: price,\n                    size: sizes\n                }\"\n                [column]=\"'l3 s6'\"\n                [setlimit]=\"12\" \n                [paginate]=\"true\"\n                [currentPage]=\"currentPage\"\n                (pageChange)=\"onPageChange($event)\">\n            </app-product>\n        </div>\n        <!-- End Product -->  \n    </div>\n</div>"

/***/ }),

/***/ "./src/app/product/product3/product3.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/product/product3/product3.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\nImport\n=========================== */\n/* -------------------------------------------------------------\n  Sass CSS3 Mixins! The Cross-Browser CSS3 Sass Library\n  By: Matthieu Aussaguel, http://www.mynameismatthieu.com, @matthieu_tweets\n\n  List of CSS3 Sass Mixins File to be @imported and @included as you need\n\n  The purpose of this library is to facilitate the use of CSS3 on different browsers avoiding HARD TO READ and NEVER\n  ENDING css files\n\n  note: All CSS3 Properties are being supported by Safari 5\n  more info: http://www.findmebyip.com/litmus/#css3-properties\n\n------------------------------------------------------------- */\n/*\nColor\n=========================== */\n/*\nFont Family\n=========================== */\n.material-icons {\n  font-family: 'Material Icons';\n  font-weight: normal;\n  line-height: 20px; }\n.material-icons {\n  font-family: 'Material Icons';\n  font-weight: normal;\n  line-height: 20px; }\n/*\nProduct\n=========================== */\n.box-page {\n  padding-bottom: 25px; }\n.wrap-product {\n  padding: 0 15px; }\n.search {\n  position: relative;\n  padding: 0; }\n.search input {\n    width: 100%;\n    border: 0;\n    outline: 0;\n    padding-right: 35px;\n    background: #fff;\n    border: solid 1px #cfcfcf;\n    border-radius: 20px;\n    padding: 10px 50px 10px 20px; }\n.search .icon {\n    position: absolute;\n    right: 10px;\n    top: 9px;\n    font-size: 20px; }\nul.categories {\n  padding: 0;\n  margin: 0 -15px;\n  list-style: none;\n  display: inline-block; }\nul.categories li {\n    display: block;\n    float: left;\n    padding: 0 15px; }\nul.categories li a {\n      color: #8f8f8f;\n      text-transform: capitalize;\n      text-decoration: none !important; }\n"

/***/ }),

/***/ "./src/app/product/product3/product3.component.ts":
/*!********************************************************!*\
  !*** ./src/app/product/product3/product3.component.ts ***!
  \********************************************************/
/*! exports provided: Product3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product3Component", function() { return Product3Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_service_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/service/product.service */ "./src/app/lib/service/product.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Product3Component = /** @class */ (function () {
    function Product3Component(router, activeRoute, productService) {
        var _this = this;
        this.router = router;
        this.activeRoute = activeRoute;
        this.productService = productService;
        this.search = null;
        this.valueSearch = '';
        this.objectNavigation = {};
        this.currentPage = 1;
        this.navigateRoute = 'shop/product3';
        // Category
        this.categories = [];
        this.chekCategory = lodash__WEBPACK_IMPORTED_MODULE_2__["lowerCase"](this.activeRoute.queryParams['_value'].category);
        this.activeRoute.queryParams.subscribe(function (params) {
            _this.search = lodash__WEBPACK_IMPORTED_MODULE_2__["lowerCase"](params["search"]);
            _this.category = lodash__WEBPACK_IMPORTED_MODULE_2__["lowerCase"](params["category"]);
            // Pagination
            if (!isNaN(params["page"])) {
                _this.currentPage = Number(params["page"]);
            }
            else {
                _this.currentPage = 1;
            }
            if (!lodash__WEBPACK_IMPORTED_MODULE_2__["isEmpty"](params)) {
                // Merge Object on init
                lodash__WEBPACK_IMPORTED_MODULE_2__["merge"](_this.objectNavigation, params);
                // Value Search
                if (_this.search != undefined) {
                    _this.valueSearch = _this.search;
                }
            }
        });
    }
    Product3Component.prototype.ngOnInit = function () {
        // Fetch init
        this.fetchCategory();
        // Check Category
        if (this.chekCategory == '') {
            this.allCategory = true;
        }
    };
    Product3Component.prototype.fetchCategory = function () {
        var _this = this;
        this.productService.getCategory().subscribe(function (data) {
            _this.categories = [];
            lodash__WEBPACK_IMPORTED_MODULE_2__["map"](data, function (x) {
                _this.categories.push(x);
            });
            _this.initCategory(data);
        });
    };
    Product3Component.prototype.initCategory = function (obj) {
        var _this = this;
        if (this.chekCategory !== undefined) {
            this.selectedCategory = lodash__WEBPACK_IMPORTED_MODULE_2__["find"](obj, function (o) {
                return o.categoryName == _this.chekCategory;
            });
        }
    };
    Product3Component.prototype.selectCategory = function (e) {
        this.selectedCategory = e;
        this.allCategory = false;
        var navCategory = {
            queryParams: this.objectNavigation
        };
        this.objectNavigation['category'] = lodash__WEBPACK_IMPORTED_MODULE_2__["kebabCase"](e.categoryName);
        delete this.objectNavigation['page'];
        this.router.navigate([this.navigateRoute], navCategory);
    };
    Product3Component.prototype.resetCategory = function () {
        this.selectedCategory = null;
        this.allCategory = true;
        var clearCategory = {
            queryParams: this.objectNavigation
        };
        delete this.objectNavigation['category'];
        delete this.objectNavigation['page'];
        this.router.navigate([this.navigateRoute], clearCategory);
    };
    Product3Component.prototype.onSearch = function (e) {
        var _this = this;
        clearTimeout(this.timeout);
        this.timeout = setTimeout(function () {
            var navSearch = {
                queryParams: _this.objectNavigation
            };
            if (e.target.value.length !== 0) {
                _this.objectNavigation['search'] = lodash__WEBPACK_IMPORTED_MODULE_2__["kebabCase"](e.target.value);
                delete _this.objectNavigation['page'];
                _this.router.navigate([_this.navigateRoute], navSearch);
            }
            else {
                delete _this.objectNavigation['search'];
                delete _this.objectNavigation['page'];
                _this.router.navigate([_this.navigateRoute], navSearch);
            }
        }, 500);
    };
    // On Page Change
    Product3Component.prototype.onPageChange = function (e) {
        var navSize = {
            queryParams: this.objectNavigation
        };
        this.objectNavigation['page'] = e;
        this.router.navigate([this.navigateRoute], navSize);
    };
    Product3Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product3',
            template: __webpack_require__(/*! ./product3.component.html */ "./src/app/product/product3/product3.component.html"),
            styles: [__webpack_require__(/*! ./product3.component.scss */ "./src/app/product/product3/product3.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _lib_service_product_service__WEBPACK_IMPORTED_MODULE_3__["productService"]])
    ], Product3Component);
    return Product3Component;
}());



/***/ }),

/***/ "./src/app/product/product4/product4.component.html":
/*!**********************************************************!*\
  !*** ./src/app/product/product4/product4.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Head Section -->\n<div class=\"head-section bg\">\n    <div class=\"container\">\n        <h4>Product <span class=\"font-light\">Four</span></h4>\n        <p>Angushop Product Style Four</p>\n    </div>\n</div>\n<div class=\"container-page\">\n    <div class=\"box-page\">\n        <!-- Start Wrap Product -->\n        <div class=\"row wrap-product\">\n            <div class=\"col m8 l9 push-l3 push-m4 s12 main-product\">\n                <!-- Start Product -->\n                <app-product \n                    [filter]=\"{\n                        productName: search,\n                        category: category,\n                        color: color,\n                        price: price,\n                        size: sizes\n                    }\"\n                    [column]=\"'l4 s6'\"\n                    [setlimit]=\"9\" \n                    [paginate]=\"true\"\n                    [currentPage]=\"currentPage\"\n                    (pageChange)=\"onPageChange($event)\">\n                </app-product>\n                <!-- End Product -->  \n            </div>\n            <div class=\"col m4 l3 pull-l9 pull-m8 s12 side-product\">\n                <!-- Wrap Filter -->\n                <div class=\"wrap-filter\">\n                    <!-- Search -->\n                    <div class=\"content-filter search\">\n                        <input type=\"text\" placeholder=\"Search Product...\" [value]=\"valueSearch\" (keyup)=\"onSearch($event)\"/>\n                        <mat-icon class=\"icon\">&#xE8B6;</mat-icon>\n                    </div>\n                    <!-- Category -->\n                    <div class=\"content-filter\">\n                        <h6 class=\"title\">Categories</h6>\n                        <ul class=\"categories\">\n                            <li (click)=\"resetCategory()\" [class.active]=\"allCategory\"><a>All</a></li>\n                            <li *ngFor=\"let category of categories\" [class.active]=\"selectedCategory === category\">\n                                <a (click)=\"selectCategory(category)\">{{category.categoryName}}</a>\n                            </li>\n                        </ul>\n                    </div>\n                    <!-- Price -->\n                    <div class=\"content-filter\">\n                        <h6 class=\"title\">Price</h6>\n                        <div *ngIf=\"priceToggle\" class=\"center-align\">\n                            <p>\n                                <button mat-mini-fab (click)=\"refreshPrice()\">\n                                    <mat-icon>&#xE5D5;</mat-icon>\n                                </button>\n                            </p>\n                            <strong>{{price | currency:'USD':'$'}}</strong>\n                        </div>\n                        <mat-slider \n                            min=\"100\"\n                            max=\"1000\" \n                            value=\"550\" \n                            [(ngModel)]=\"price\" \n                            (change)=\"onChangeprice($event)\">\n                        </mat-slider>\n                    </div>\n                    <!-- Color -->\n                    <div class=\"content-filter\">\n                        <h6 class=\"title\">Color</h6>\n                        <ul class=\"colors\">\n                            <li *ngFor=\"let color of colors\" \n                                class=\"{{color.nameColor}}\" \n                                [class.active]=\"selectedColor === color\">\n                                <button mat-mini-fab (click)=\"selectColor(color)\"></button>\n                            </li>\n                        </ul>\n                    </div>\n                    <!-- Size -->\n                    <div class=\"content-filter\">\n                        <h6 class=\"title\">Size</h6>\n                        <div class=\"row\">\n                            <div *ngFor=\"let size of sizeProduct\" class=\"col s4 margin-bottom10\">\n                                <mat-checkbox \n                                    [checked]=\"size.check\" \n                                    (change)=\"size.check = !size.check\" \n                                    (click)=\"selectSize(size.size,size.check)\">\n                                        {{size.size}}\n                                </mat-checkbox>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <!-- End Filter -->\n            </div>\n        </div>\n        <!-- End Wrap Product -->\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/product/product4/product4.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/product/product4/product4.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\nImport\n=========================== */\n/* -------------------------------------------------------------\n  Sass CSS3 Mixins! The Cross-Browser CSS3 Sass Library\n  By: Matthieu Aussaguel, http://www.mynameismatthieu.com, @matthieu_tweets\n\n  List of CSS3 Sass Mixins File to be @imported and @included as you need\n\n  The purpose of this library is to facilitate the use of CSS3 on different browsers avoiding HARD TO READ and NEVER\n  ENDING css files\n\n  note: All CSS3 Properties are being supported by Safari 5\n  more info: http://www.findmebyip.com/litmus/#css3-properties\n\n------------------------------------------------------------- */\n/*\nColor\n=========================== */\n/*\nFont Family\n=========================== */\n.material-icons {\n  font-family: 'Material Icons';\n  font-weight: normal;\n  line-height: 20px; }\n.material-icons {\n  font-family: 'Material Icons';\n  font-weight: normal;\n  line-height: 20px; }\n/*\nContainer\n=========================== */\n.container-page .box-page {\n  padding-bottom: 25px; }\n/*\nProduct\n=========================== */\n.wrap-product {\n  margin-bottom: 0;\n  background: #fff; }\n.wrap-product > .col {\n    padding: 0; }\n.wrap-product > .col.side-product {\n      background: #fff;\n      margin-bottom: 30px; }\n.wrap-product > .col.main-product {\n      padding: 0 15px 0 30px; }\n/*\nTab\n=========================== */\n.mat-tab-label, .mat-tab-link {\n  font-family: \"Roboto\", sans-serif; }\n/*\nOrder By\n=========================== */\n.orderby {\n  position: relative;\n  top: -8px; }\n.btn-order.active.mat-menu-item {\n  color: #fff; }\n.btn-order.active.mat-menu-item mat-icon {\n    color: #fff; }\n/*\nColors\n=========================== */\n.colors {\n  padding: 0;\n  margin: 10px 0 -7px 0;\n  display: inline-block; }\n.colors li {\n    float: left;\n    display: block;\n    margin: 0 5px 5px 0; }\n.colors li .mat-mini-fab {\n      border: solid 5px transparent;\n      transition: all 0.5s ease-in-out;\n      position: relative;\n      width: 30px;\n      height: 30px; }\n.colors li.active .mat-mini-fab {\n      border-color: #fff;\n      box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.1) !important; }\n.colors li.dark .mat-mini-fab {\n      background-color: #333; }\n.colors li.gray2 .mat-mini-fab {\n      background-color: #999; }\n.colors li.gray1 .mat-mini-fab {\n      background-color: #cfcfcf; }\n.colors li.gray .mat-mini-fab {\n      background-color: #f5f5f5; }\n/*\nFilter\n=========================== */\n.wrap-filter {\n  position: relative;\n  font-family: \"Roboto\", sans-serif;\n  border: solid 1px #efefef; }\n.wrap-filter .content-filter {\n    padding: 20px 25px;\n    position: relative;\n    border-bottom: solid 1px #efefef; }\n.wrap-filter .content-filter .title {\n      margin-bottom: 10px;\n      text-transform: capitalize; }\n.wrap-filter .content-filter.search input {\n      width: 100%;\n      border: 0;\n      outline: 0;\n      padding-right: 35px;\n      background: transparent; }\n.wrap-filter .content-filter.search .icon {\n      position: absolute;\n      right: 25px;\n      top: 20px;\n      font-size: 24px; }\n.wrap-filter ul.categories {\n    margin-bottom: 5px; }\n.wrap-filter ul.categories li a {\n      display: block;\n      padding: 5px 0;\n      color: #8f8f8f;\n      border-bottom: dashed 1px #efefef; }\n.wrap-filter ul.categories li a:hover, .wrap-filter ul.categories li a:focus {\n        text-decoration: none; }\n.wrap-filter ul.categories li:last-child a {\n      border-bottom: 0;\n      padding-bottom: 0; }\n/*\nRecntly\n=========================== */\n.recently {\n  display: block;\n  margin: 0;\n  font-family: \"Roboto\", sans-serif; }\n.recently li {\n    display: block;\n    position: relative;\n    padding: 20px 25px;\n    min-height: 100px;\n    padding-left: 95px;\n    border-bottom: solid 1px #efefef; }\n.recently li .wrap-img {\n      width: 60px;\n      height: 60px;\n      overflow: hidden;\n      border: solid 1px #efefef;\n      position: absolute;\n      left: 20px;\n      top: 20px; }\n.recently li .wrap-img img {\n        width: 100%; }\n.recently li .title {\n      text-transform: capitalize;\n      margin-bottom: 5px; }\n.recently li .title a {\n        color: #3f3f3f;\n        text-decoration: none !important; }\n.recently li p {\n      margin-bottom: 0; }\n/*\nResponsive\n=========================== */\n@media (max-width: 767px) {\n  .wrap-product {\n    padding-left: 15px;\n    padding-right: 15px; } }\n@media (max-width: 568px) {\n  .wrap-product {\n    padding-left: 15px;\n    padding-right: 15px;\n    margin-bottom: 30px !important;\n    background: #fff; }\n    .wrap-product > .col {\n      padding: 0;\n      margin: 0; }\n      .wrap-product > .col.side-product {\n        background: #fff;\n        margin-bottom: 0;\n        margin-top: 20px; }\n      .wrap-product > .col.main-product {\n        padding: 0 15px; } }\n"

/***/ }),

/***/ "./src/app/product/product4/product4.component.ts":
/*!********************************************************!*\
  !*** ./src/app/product/product4/product4.component.ts ***!
  \********************************************************/
/*! exports provided: Product4Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product4Component", function() { return Product4Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_service_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/service/product.service */ "./src/app/lib/service/product.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Product4Component = /** @class */ (function () {
    function Product4Component(router, activeRoute, productService) {
        var _this = this;
        this.router = router;
        this.activeRoute = activeRoute;
        this.productService = productService;
        this.search = null;
        this.valueSearch = '';
        this.objectNavigation = {};
        this.currentPage = 1;
        this.navigateRoute = 'shop/product4';
        // Color
        this.colors = [];
        // Price
        this.priceToggle = false;
        // Category
        this.categories = [];
        this.chekCategory = lodash__WEBPACK_IMPORTED_MODULE_2__["lowerCase"](this.activeRoute.queryParams['_value'].category);
        // Size Product
        this.sizeProduct = [];
        this.arraySize = [];
        this.activeRoute.queryParams.subscribe(function (params) {
            _this.search = lodash__WEBPACK_IMPORTED_MODULE_2__["lowerCase"](params["search"]);
            _this.price = Number(params["price"]);
            _this.category = lodash__WEBPACK_IMPORTED_MODULE_2__["lowerCase"](params["category"]);
            _this.color = params["color"];
            // Pagination
            if (!isNaN(params["page"])) {
                _this.currentPage = Number(params["page"]);
            }
            else {
                _this.currentPage = 1;
            }
            if (params["size"] != undefined) {
                _this.sizes = params["size"].split('-').map(function (item) {
                    return parseInt(item, 10);
                });
                // Init Size
                lodash__WEBPACK_IMPORTED_MODULE_2__["merge"](_this.arraySize, _this.sizes);
            }
            else {
                _this.sizes = null;
            }
            if (!lodash__WEBPACK_IMPORTED_MODULE_2__["isEmpty"](params)) {
                // Merge Object on init
                lodash__WEBPACK_IMPORTED_MODULE_2__["merge"](_this.objectNavigation, params);
                // Value Search
                if (_this.search != undefined) {
                    _this.valueSearch = _this.search;
                }
                // Value Price
                if (!isNaN(_this.price)) {
                    _this.priceToggle = true;
                }
            }
        });
    }
    Product4Component.prototype.ngOnInit = function () {
        // Fetch init
        this.fetchCategory();
        this.fetchSize();
        this.fetchColor();
        // Check Category
        if (this.chekCategory == '') {
            this.allCategory = true;
        }
    };
    Product4Component.prototype.fetchColor = function () {
        var _this = this;
        this.productService.getColor().subscribe(function (data) {
            _this.colors = [];
            lodash__WEBPACK_IMPORTED_MODULE_2__["map"](data, function (x) {
                _this.colors.push(x);
            });
            _this.initColor(data);
        });
    };
    Product4Component.prototype.initColor = function (obj) {
        var _this = this;
        if (this.color !== undefined) {
            this.selectedColor = lodash__WEBPACK_IMPORTED_MODULE_2__["find"](obj, function (o) {
                return o.nameColor == _this.color;
            });
        }
    };
    Product4Component.prototype.selectColor = function (val) {
        if (this.selectedColor == val) {
            this.selectedColor = null;
            var clearColor = {
                queryParams: this.objectNavigation
            };
            delete this.objectNavigation['color'];
            delete this.objectNavigation['page'];
            this.router.navigate([this.navigateRoute], clearColor);
        }
        else {
            this.selectedColor = val;
            var navColor = {
                queryParams: this.objectNavigation
            };
            this.objectNavigation['color'] = val.nameColor;
            delete this.objectNavigation['page'];
            this.router.navigate([this.navigateRoute], navColor);
        }
    };
    Product4Component.prototype.onChangeprice = function (e) {
        this.priceToggle = true;
        var navPrice = {
            queryParams: this.objectNavigation
        };
        this.objectNavigation['price'] = e.value;
        delete this.objectNavigation['page'];
        this.router.navigate([this.navigateRoute], navPrice);
    };
    Product4Component.prototype.refreshPrice = function () {
        this.priceToggle = false;
        this.price = 550;
        var clearPrice = {
            queryParams: this.objectNavigation
        };
        delete this.objectNavigation['price'];
        delete this.objectNavigation['page'];
        this.router.navigate([this.navigateRoute], clearPrice);
    };
    Product4Component.prototype.fetchCategory = function () {
        var _this = this;
        this.productService.getCategory().subscribe(function (data) {
            _this.categories = [];
            lodash__WEBPACK_IMPORTED_MODULE_2__["map"](data, function (x) {
                _this.categories.push(x);
            });
            _this.initCategory(data);
        });
    };
    Product4Component.prototype.initCategory = function (obj) {
        var _this = this;
        if (this.chekCategory !== undefined) {
            this.selectedCategory = lodash__WEBPACK_IMPORTED_MODULE_2__["find"](obj, function (o) {
                return o.categoryName == _this.chekCategory;
            });
        }
    };
    Product4Component.prototype.selectCategory = function (e) {
        this.selectedCategory = e;
        this.allCategory = false;
        var navCategory = {
            queryParams: this.objectNavigation
        };
        this.objectNavigation['category'] = lodash__WEBPACK_IMPORTED_MODULE_2__["kebabCase"](e.categoryName);
        delete this.objectNavigation['page'];
        this.router.navigate([this.navigateRoute], navCategory);
    };
    Product4Component.prototype.resetCategory = function () {
        this.selectedCategory = null;
        this.allCategory = true;
        var clearCategory = {
            queryParams: this.objectNavigation
        };
        delete this.objectNavigation['category'];
        delete this.objectNavigation['page'];
        this.router.navigate([this.navigateRoute], clearCategory);
    };
    Product4Component.prototype.onSearch = function (e) {
        var _this = this;
        clearTimeout(this.timeout);
        this.timeout = setTimeout(function () {
            var navSearch = {
                queryParams: _this.objectNavigation
            };
            if (e.target.value.length !== 0) {
                _this.objectNavigation['search'] = lodash__WEBPACK_IMPORTED_MODULE_2__["kebabCase"](e.target.value);
                delete _this.objectNavigation['page'];
                _this.router.navigate([_this.navigateRoute], navSearch);
            }
            else {
                delete _this.objectNavigation['search'];
                delete _this.objectNavigation['page'];
                _this.router.navigate([_this.navigateRoute], navSearch);
            }
        }, 500);
    };
    Product4Component.prototype.fetchSize = function () {
        var _this = this;
        this.productService.getSize().subscribe(function (data) {
            _this.sizeProduct = [];
            lodash__WEBPACK_IMPORTED_MODULE_2__["map"](data, function (x) {
                _this.sizeProduct.push(x);
            });
            _this.initSize();
        });
    };
    Product4Component.prototype.initSize = function () {
        var _this = this;
        var _loop_1 = function (i) {
            var checkSize = lodash__WEBPACK_IMPORTED_MODULE_2__["find"](this_1.sizes, function (e) {
                return _this.sizeProduct[i].size == e;
            });
            if (checkSize != undefined) {
                this_1.sizeProduct[i].check = true;
            }
        };
        var this_1 = this;
        for (var i = 0; i < this.sizeProduct.length; i++) {
            _loop_1(i);
        }
    };
    Product4Component.prototype.selectSize = function (size, check) {
        if (check == false) {
            this.arraySize.push(size);
        }
        else {
            var index = this.arraySize.indexOf(size);
            this.arraySize.splice(index, 1);
        }
        if (this.arraySize.length != 0) {
            var navSize = {
                queryParams: this.objectNavigation
            };
            this.objectNavigation['size'] = lodash__WEBPACK_IMPORTED_MODULE_2__["kebabCase"](JSON.stringify(this.arraySize));
            delete this.objectNavigation['page'];
            this.router.navigate([this.navigateRoute], navSize);
        }
        else {
            var clearSize = {
                queryParams: this.objectNavigation
            };
            delete this.objectNavigation['size'];
            delete this.objectNavigation['page'];
            this.router.navigate([this.navigateRoute], clearSize);
        }
    };
    // On Page Change
    Product4Component.prototype.onPageChange = function (e) {
        var navSize = {
            queryParams: this.objectNavigation
        };
        this.objectNavigation['page'] = e;
        this.router.navigate([this.navigateRoute], navSize);
    };
    Product4Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product4',
            template: __webpack_require__(/*! ./product4.component.html */ "./src/app/product/product4/product4.component.html"),
            styles: [__webpack_require__(/*! ./product4.component.scss */ "./src/app/product/product4/product4.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _lib_service_product_service__WEBPACK_IMPORTED_MODULE_3__["productService"]])
    ], Product4Component);
    return Product4Component;
}());



/***/ }),

/***/ "./src/app/product/product5/product5.component.html":
/*!**********************************************************!*\
  !*** ./src/app/product/product5/product5.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Head Section -->\n<div class=\"head-section bg\">\n    <div class=\"container\">\n        <h4>Product <span class=\"font-light\">Five</span></h4>\n        <p>Angushop Product Style Five</p>\n    </div>\n</div>\n\n<div class=\"container-page\">\n  <div class=\"box-page\">\n      <!-- Start Wrap Product -->\n      <div class=\"row wrap-product\">\n          <div class=\"col m8 l9 s12 main-product\">\n              <!-- Start Product -->\n              <app-product \n                  [filter]=\"{\n                      productName: search,\n                      category: category,\n                      color: color,\n                      price: price,\n                      size: sizes\n                  }\"\n                  [column]=\"'l4 s6'\"\n                  [setlimit]=\"9\" \n                  [paginate]=\"true\"\n                  [currentPage]=\"currentPage\"\n                  (pageChange)=\"onPageChange($event)\">\n              </app-product>\n              <!-- End Product -->  \n          </div>\n          <div class=\"col m4 l3 s12 side-product\">\n              <!-- Wrap Filter -->\n              <div class=\"wrap-filter\">\n                  <!-- Search -->\n                  <div class=\"content-filter search\">\n                      <input type=\"text\" placeholder=\"Search Product...\" [value]=\"valueSearch\" (keyup)=\"onSearch($event)\"/>\n                      <mat-icon class=\"icon\">&#xE8B6;</mat-icon>\n                  </div>\n                  <!-- Category -->\n                  <div class=\"content-filter\">\n                      <h6 class=\"title\">Categories</h6>\n                      <ul class=\"categories\">\n                          <li (click)=\"resetCategory()\" [class.active]=\"allCategory\"><a>All</a></li>\n                          <li *ngFor=\"let category of categories\" [class.active]=\"selectedCategory === category\">\n                              <a (click)=\"selectCategory(category)\">{{category.categoryName}}</a>\n                          </li>\n                      </ul>\n                  </div>\n                  <!-- Price -->\n                  <div class=\"content-filter\">\n                      <h6 class=\"title\">Price</h6>\n                      <div *ngIf=\"priceToggle\" class=\"center-align\">\n                          <p>\n                              <button mat-mini-fab (click)=\"refreshPrice()\">\n                                  <mat-icon>&#xE5D5;</mat-icon>\n                              </button>\n                          </p>\n                          <strong>{{price | currency:'USD':'$'}}</strong>\n                      </div>\n                      <mat-slider \n                          min=\"100\"\n                          max=\"1000\" \n                          value=\"550\" \n                          [(ngModel)]=\"price\" \n                          (change)=\"onChangeprice($event)\">\n                      </mat-slider>\n                  </div>\n                  <!-- Color -->\n                  <div class=\"content-filter\">\n                      <h6 class=\"title\">Color</h6>\n                      <ul class=\"colors\">\n                          <li *ngFor=\"let color of colors\" \n                              class=\"{{color.nameColor}}\" \n                              [class.active]=\"selectedColor === color\">\n                              <button mat-mini-fab (click)=\"selectColor(color)\"></button>\n                          </li>\n                      </ul>\n                  </div>\n                  <!-- Size -->\n                  <div class=\"content-filter\">\n                      <h6 class=\"title\">Size</h6>\n                      <div class=\"row\">\n                          <div *ngFor=\"let size of sizeProduct\" class=\"col s4 margin-bottom10\">\n                              <mat-checkbox \n                                  [checked]=\"size.check\" \n                                  (change)=\"size.check = !size.check\" \n                                  (click)=\"selectSize(size.size,size.check)\">\n                                      {{size.size}}\n                              </mat-checkbox>\n                          </div>\n                      </div>\n                  </div>\n              </div>\n              <!-- End Filter -->\n          </div>\n      </div>\n      <!-- End Wrap Product -->\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/product/product5/product5.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/product/product5/product5.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\nImport\n=========================== */\n/* -------------------------------------------------------------\n  Sass CSS3 Mixins! The Cross-Browser CSS3 Sass Library\n  By: Matthieu Aussaguel, http://www.mynameismatthieu.com, @matthieu_tweets\n\n  List of CSS3 Sass Mixins File to be @imported and @included as you need\n\n  The purpose of this library is to facilitate the use of CSS3 on different browsers avoiding HARD TO READ and NEVER\n  ENDING css files\n\n  note: All CSS3 Properties are being supported by Safari 5\n  more info: http://www.findmebyip.com/litmus/#css3-properties\n\n------------------------------------------------------------- */\n/*\nColor\n=========================== */\n/*\nFont Family\n=========================== */\n.material-icons {\n  font-family: 'Material Icons';\n  font-weight: normal;\n  line-height: 20px; }\n.material-icons {\n  font-family: 'Material Icons';\n  font-weight: normal;\n  line-height: 20px; }\n/*\nContainer\n=========================== */\n.container-page .box-page {\n  padding-bottom: 25px; }\n/*\nProduct\n=========================== */\n.wrap-product {\n  margin-bottom: 0;\n  background: #fff; }\n.wrap-product > .col {\n    padding: 0; }\n.wrap-product > .col.side-product {\n      background: #fff;\n      margin-bottom: 30px; }\n.wrap-product > .col.main-product {\n      padding: 0 30px 0 15px; }\n/*\nTab\n=========================== */\n.mat-tab-label, .mat-tab-link {\n  font-family: \"Roboto\", sans-serif; }\n/*\nOrder By\n=========================== */\n.orderby {\n  position: relative;\n  top: -8px; }\n.btn-order.active.mat-menu-item {\n  color: #fff; }\n.btn-order.active.mat-menu-item mat-icon {\n    color: #fff; }\n/*\nColors\n=========================== */\n.colors {\n  padding: 0;\n  margin: 10px 0 -7px 0;\n  display: inline-block; }\n.colors li {\n    float: left;\n    display: block;\n    margin: 0 5px 5px 0; }\n.colors li .mat-mini-fab {\n      border: solid 5px transparent;\n      transition: all 0.5s ease-in-out;\n      position: relative;\n      width: 30px;\n      height: 30px; }\n.colors li.active .mat-mini-fab {\n      border-color: #fff;\n      box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.1) !important; }\n.colors li.dark .mat-mini-fab {\n      background-color: #333; }\n.colors li.gray2 .mat-mini-fab {\n      background-color: #999; }\n.colors li.gray1 .mat-mini-fab {\n      background-color: #cfcfcf; }\n.colors li.gray .mat-mini-fab {\n      background-color: #f5f5f5; }\n/*\nFilter\n=========================== */\n.wrap-filter {\n  position: relative;\n  font-family: \"Roboto\", sans-serif;\n  border: solid 1px #efefef; }\n.wrap-filter .content-filter {\n    padding: 20px 25px;\n    position: relative;\n    border-bottom: solid 1px #efefef; }\n.wrap-filter .content-filter .title {\n      margin-bottom: 10px;\n      text-transform: capitalize; }\n.wrap-filter .content-filter.search input {\n      width: 100%;\n      border: 0;\n      outline: 0;\n      padding-right: 35px;\n      background: transparent; }\n.wrap-filter .content-filter.search .icon {\n      position: absolute;\n      right: 25px;\n      top: 20px;\n      font-size: 24px; }\n.wrap-filter ul.categories {\n    margin-bottom: 5px; }\n.wrap-filter ul.categories li a {\n      display: block;\n      padding: 5px 0;\n      color: #8f8f8f;\n      border-bottom: dashed 1px #efefef; }\n.wrap-filter ul.categories li a:hover, .wrap-filter ul.categories li a:focus {\n        text-decoration: none; }\n.wrap-filter ul.categories li:last-child a {\n      border-bottom: 0;\n      padding-bottom: 0; }\n/*\nRecntly\n=========================== */\n.recently {\n  display: block;\n  margin: 0;\n  font-family: \"Roboto\", sans-serif; }\n.recently li {\n    display: block;\n    position: relative;\n    padding: 20px 25px;\n    min-height: 100px;\n    padding-left: 95px;\n    border-bottom: solid 1px #efefef; }\n.recently li .wrap-img {\n      width: 60px;\n      height: 60px;\n      overflow: hidden;\n      border: solid 1px #efefef;\n      position: absolute;\n      left: 20px;\n      top: 20px; }\n.recently li .wrap-img img {\n        width: 100%; }\n.recently li .title {\n      text-transform: capitalize;\n      margin-bottom: 5px; }\n.recently li .title a {\n        color: #3f3f3f;\n        text-decoration: none !important; }\n.recently li p {\n      margin-bottom: 0; }\n/*\nResponsive\n=========================== */\n@media (max-width: 767px) {\n  .wrap-product {\n    padding-left: 15px;\n    padding-right: 15px; } }\n@media (max-width: 568px) {\n  .wrap-product {\n    padding-left: 15px;\n    padding-right: 15px;\n    margin-bottom: 30px !important;\n    background: #fff; }\n    .wrap-product > .col {\n      padding: 0;\n      margin: 0; }\n      .wrap-product > .col.side-product {\n        background: #fff;\n        margin-bottom: 0;\n        margin-top: 20px; }\n      .wrap-product > .col.main-product {\n        padding: 0 15px; } }\n"

/***/ }),

/***/ "./src/app/product/product5/product5.component.ts":
/*!********************************************************!*\
  !*** ./src/app/product/product5/product5.component.ts ***!
  \********************************************************/
/*! exports provided: Product5Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product5Component", function() { return Product5Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_service_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/service/product.service */ "./src/app/lib/service/product.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Product5Component = /** @class */ (function () {
    function Product5Component(router, activeRoute, productService) {
        var _this = this;
        this.router = router;
        this.activeRoute = activeRoute;
        this.productService = productService;
        this.search = null;
        this.valueSearch = '';
        this.objectNavigation = {};
        this.currentPage = 1;
        this.navigateRoute = 'shop/product5';
        // Color
        this.colors = [];
        // Price
        this.priceToggle = false;
        // Category
        this.categories = [];
        this.chekCategory = lodash__WEBPACK_IMPORTED_MODULE_2__["lowerCase"](this.activeRoute.queryParams['_value'].category);
        // Size Product
        this.sizeProduct = [];
        this.arraySize = [];
        this.activeRoute.queryParams.subscribe(function (params) {
            _this.search = lodash__WEBPACK_IMPORTED_MODULE_2__["lowerCase"](params["search"]);
            _this.price = Number(params["price"]);
            _this.category = lodash__WEBPACK_IMPORTED_MODULE_2__["lowerCase"](params["category"]);
            _this.color = params["color"];
            // Pagination
            if (!isNaN(params["page"])) {
                _this.currentPage = Number(params["page"]);
            }
            else {
                _this.currentPage = 1;
            }
            if (params["size"] != undefined) {
                _this.sizes = params["size"].split('-').map(function (item) {
                    return parseInt(item, 10);
                });
                // Init Size
                lodash__WEBPACK_IMPORTED_MODULE_2__["merge"](_this.arraySize, _this.sizes);
            }
            else {
                _this.sizes = null;
            }
            if (!lodash__WEBPACK_IMPORTED_MODULE_2__["isEmpty"](params)) {
                // Merge Object on init
                lodash__WEBPACK_IMPORTED_MODULE_2__["merge"](_this.objectNavigation, params);
                // Value Search
                if (_this.search != undefined) {
                    _this.valueSearch = _this.search;
                }
                // Value Price
                if (!isNaN(_this.price)) {
                    _this.priceToggle = true;
                }
            }
        });
    }
    Product5Component.prototype.ngOnInit = function () {
        // Fetch init
        this.fetchCategory();
        this.fetchSize();
        this.fetchColor();
        // Check Category
        if (this.chekCategory == '') {
            this.allCategory = true;
        }
    };
    Product5Component.prototype.fetchColor = function () {
        var _this = this;
        this.productService.getColor().subscribe(function (data) {
            _this.colors = [];
            lodash__WEBPACK_IMPORTED_MODULE_2__["map"](data, function (x) {
                _this.colors.push(x);
            });
            _this.initColor(data);
        });
    };
    Product5Component.prototype.initColor = function (obj) {
        var _this = this;
        if (this.color !== undefined) {
            this.selectedColor = lodash__WEBPACK_IMPORTED_MODULE_2__["find"](obj, function (o) {
                return o.nameColor == _this.color;
            });
        }
    };
    Product5Component.prototype.selectColor = function (val) {
        if (this.selectedColor == val) {
            this.selectedColor = null;
            var clearColor = {
                queryParams: this.objectNavigation
            };
            delete this.objectNavigation['color'];
            delete this.objectNavigation['page'];
            this.router.navigate([this.navigateRoute], clearColor);
        }
        else {
            this.selectedColor = val;
            var navColor = {
                queryParams: this.objectNavigation
            };
            this.objectNavigation['color'] = val.nameColor;
            delete this.objectNavigation['page'];
            this.router.navigate([this.navigateRoute], navColor);
        }
    };
    Product5Component.prototype.onChangeprice = function (e) {
        this.priceToggle = true;
        var navPrice = {
            queryParams: this.objectNavigation
        };
        this.objectNavigation['price'] = e.value;
        delete this.objectNavigation['page'];
        this.router.navigate([this.navigateRoute], navPrice);
    };
    Product5Component.prototype.refreshPrice = function () {
        this.priceToggle = false;
        this.price = 550;
        var clearPrice = {
            queryParams: this.objectNavigation
        };
        delete this.objectNavigation['price'];
        delete this.objectNavigation['page'];
        this.router.navigate([this.navigateRoute], clearPrice);
    };
    Product5Component.prototype.fetchCategory = function () {
        var _this = this;
        this.productService.getCategory().subscribe(function (data) {
            _this.categories = [];
            lodash__WEBPACK_IMPORTED_MODULE_2__["map"](data, function (x) {
                _this.categories.push(x);
            });
            _this.initCategory(data);
        });
    };
    Product5Component.prototype.initCategory = function (obj) {
        var _this = this;
        if (this.chekCategory !== undefined) {
            this.selectedCategory = lodash__WEBPACK_IMPORTED_MODULE_2__["find"](obj, function (o) {
                return o.categoryName == _this.chekCategory;
            });
        }
    };
    Product5Component.prototype.selectCategory = function (e) {
        this.selectedCategory = e;
        this.allCategory = false;
        var navCategory = {
            queryParams: this.objectNavigation
        };
        this.objectNavigation['category'] = lodash__WEBPACK_IMPORTED_MODULE_2__["kebabCase"](e.categoryName);
        delete this.objectNavigation['page'];
        this.router.navigate([this.navigateRoute], navCategory);
    };
    Product5Component.prototype.resetCategory = function () {
        this.selectedCategory = null;
        this.allCategory = true;
        var clearCategory = {
            queryParams: this.objectNavigation
        };
        delete this.objectNavigation['category'];
        delete this.objectNavigation['page'];
        this.router.navigate([this.navigateRoute], clearCategory);
    };
    Product5Component.prototype.onSearch = function (e) {
        var _this = this;
        clearTimeout(this.timeout);
        this.timeout = setTimeout(function () {
            var navSearch = {
                queryParams: _this.objectNavigation
            };
            if (e.target.value.length !== 0) {
                _this.objectNavigation['search'] = lodash__WEBPACK_IMPORTED_MODULE_2__["kebabCase"](e.target.value);
                delete _this.objectNavigation['page'];
                _this.router.navigate([_this.navigateRoute], navSearch);
            }
            else {
                delete _this.objectNavigation['search'];
                delete _this.objectNavigation['page'];
                _this.router.navigate([_this.navigateRoute], navSearch);
            }
        }, 500);
    };
    Product5Component.prototype.fetchSize = function () {
        var _this = this;
        this.productService.getSize().subscribe(function (data) {
            _this.sizeProduct = [];
            lodash__WEBPACK_IMPORTED_MODULE_2__["map"](data, function (x) {
                _this.sizeProduct.push(x);
            });
            _this.initSize();
        });
    };
    Product5Component.prototype.initSize = function () {
        var _this = this;
        var _loop_1 = function (i) {
            var checkSize = lodash__WEBPACK_IMPORTED_MODULE_2__["find"](this_1.sizes, function (e) {
                return _this.sizeProduct[i].size == e;
            });
            if (checkSize != undefined) {
                this_1.sizeProduct[i].check = true;
            }
        };
        var this_1 = this;
        for (var i = 0; i < this.sizeProduct.length; i++) {
            _loop_1(i);
        }
    };
    Product5Component.prototype.selectSize = function (size, check) {
        if (check == false) {
            this.arraySize.push(size);
        }
        else {
            var index = this.arraySize.indexOf(size);
            this.arraySize.splice(index, 1);
        }
        if (this.arraySize.length != 0) {
            var navSize = {
                queryParams: this.objectNavigation
            };
            this.objectNavigation['size'] = lodash__WEBPACK_IMPORTED_MODULE_2__["kebabCase"](JSON.stringify(this.arraySize));
            delete this.objectNavigation['page'];
            this.router.navigate([this.navigateRoute], navSize);
        }
        else {
            var clearSize = {
                queryParams: this.objectNavigation
            };
            delete this.objectNavigation['size'];
            delete this.objectNavigation['page'];
            this.router.navigate([this.navigateRoute], clearSize);
        }
    };
    // On Page Change
    Product5Component.prototype.onPageChange = function (e) {
        var navSize = {
            queryParams: this.objectNavigation
        };
        this.objectNavigation['page'] = e;
        this.router.navigate([this.navigateRoute], navSize);
    };
    Product5Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product5',
            template: __webpack_require__(/*! ./product5.component.html */ "./src/app/product/product5/product5.component.html"),
            styles: [__webpack_require__(/*! ./product5.component.scss */ "./src/app/product/product5/product5.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _lib_service_product_service__WEBPACK_IMPORTED_MODULE_3__["productService"]])
    ], Product5Component);
    return Product5Component;
}());



/***/ }),

/***/ "./src/app/product/receipt/receipt.component.html":
/*!********************************************************!*\
  !*** ./src/app/product/receipt/receipt.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Head Section -->\n<div class=\"head-section bg\">\n    <div class=\"container\">\n        <h4>Receipt <span class=\"font-light\">Order</span></h4>\n        <p>Angushop Receipt order info</p>\n    </div>\n</div>\n\n<div class=\"container-page\">\n    <div class=\"box-page\">\n        <!-- Start List -->\n        <ul class=\"row list-justify\">\n            <li class=\"col s4\">\n                Cart\n            </li>\n            <li class=\"col s4\">\n                Delivery\n            </li>\n            <li class=\"col s4 active\">\n                Receipt\n            </li>\n        </ul>\n        <!-- End List -->\n\n        <div class=\"wrap-receipt\">\n            <div class=\"row\">\n                <div class=\"col l8 offset-l2 center-align\">\n                    <h4>Thank You For Your Order</h4>\n                    <p>\n                        Eripuit equidem recusabo nec et. Eum ex noluisse torquatos. Quod albucius rationibus eos te, mazim doming placerat cu duo, mea utinam suscipiantur ad. Et semper convenire qui.\n                    </p>\n                    <a mat-button class=\"btn btn-default\" routerLink=\"/shop/product1\">Back to shop</a>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/product/receipt/receipt.component.scss":
/*!********************************************************!*\
  !*** ./src/app/product/receipt/receipt.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\nLayout\n=========================== */\n.wrap-receipt {\n  margin-top: 100px;\n  margin-bottom: 70px; }\n"

/***/ }),

/***/ "./src/app/product/receipt/receipt.component.ts":
/*!******************************************************!*\
  !*** ./src/app/product/receipt/receipt.component.ts ***!
  \******************************************************/
/*! exports provided: ReceiptComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReceiptComponent", function() { return ReceiptComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _lib_service_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/service/cookie.service */ "./src/app/lib/service/cookie.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReceiptComponent = /** @class */ (function () {
    function ReceiptComponent(router, cookie) {
        this.router = router;
        this.cookie = cookie;
    }
    ReceiptComponent.prototype.ngOnInit = function () {
        if (this.cookie['payed'] == '') {
            this.router.navigate(['/shop/shipping']);
        }
        else {
            this.cookie.addCookie('payed', '');
        }
    };
    ReceiptComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-receipt',
            template: __webpack_require__(/*! ./receipt.component.html */ "./src/app/product/receipt/receipt.component.html"),
            styles: [__webpack_require__(/*! ./receipt.component.scss */ "./src/app/product/receipt/receipt.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _lib_service_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"]])
    ], ReceiptComponent);
    return ReceiptComponent;
}());



/***/ }),

/***/ "./src/app/product/shipping/shipping.component.html":
/*!**********************************************************!*\
  !*** ./src/app/product/shipping/shipping.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Head Section -->\n<div class=\"head-section bg\">\n    <div class=\"container\">\n        <h4>Shipping <span class=\"font-light\">Product</span></h4>\n        <p>Angushop Shipping Product</p>\n    </div>\n</div>\n\n<div class=\"container-page\">\n    <div class=\"box-page\">\n        <!-- Start List -->\n        <ul class=\"row list-justify\">\n            <li class=\"col s4\">\n                Cart\n            </li>\n            <li class=\"col s4 active\">\n                Delivery\n            </li>\n            <li class=\"col s4 disabled\">\n                Receipt\n            </li>\n        </ul>\n        <!-- End List -->\n\n        <div class=\"row margin-top30\">\n            <div class=\"col l8 m7 s12\">\n                <h5>Shipping Info</h5>\n                \n                <!-- Start Form -->\n                <form #formRef=\"ngForm\" (ngSubmit)=\"onSubmit(formRef)\">\n                    <div class=\"row\">\n                        <div class=\"col m6 s12\">\n                            <mat-form-field>\n                                <input matInput \n                                    type=\"text\"\n                                    placeholder=\"First Name\" \n                                    value=\"\" \n                                    name=\"firstname\" \n                                    [(ngModel)]=\"firstname\" \n                                    #firstnameRef=\"ngModel\" \n                                    required>\n                            </mat-form-field>\n                            <small class=\"error\" *ngIf=\"firstnameRef.errors?.required && firstnameRef.touched\">required error</small>\n                            <small class=\"error\" *ngIf=\"firstnameRef.errors?.required && firstnameRef.dirty\">required error</small>\n                        </div>\n                        <div class=\"col m6 s12\">\n                            <mat-form-field>\n                                <input matInput \n                                    type=\"text\"\n                                    placeholder=\"Last Name\" \n                                    value=\"\"\n                                    name=\"lastname\" \n                                    [(ngModel)]=\"lastname\" \n                                    #lastnameRef=\"ngModel\" \n                                    required>\n                            </mat-form-field>\n                            <small class=\"error\" *ngIf=\"lastnameRef.errors?.required && lastnameRef.touched\">required error</small>                            \n                            <small class=\"error\" *ngIf=\"lastnameRef.errors?.required && lastnameRef.dirty\">required error</small>                            \n                        </div>\n                    </div>\n                    \n                    <div class=\"clearfix\"></div>\n\n                    <div class=\"row\">\n                        <div class=\"col m6 s12\">\n                            <mat-form-field>\n                                <input matInput \n                                    type=\"email\"\n                                    placeholder=\"Email\" \n                                    value=\"\"\n                                    name=\"email\"\n                                    [(ngModel)]=\"email\" \n                                    #emailRef=\"ngModel\"\n                                    required\n                                    email>\n                            </mat-form-field>\n                            <small class=\"error\" *ngIf=\"emailRef.errors?.required && emailRef.touched\">required error</small>                                                        \n                            <small class=\"error\" *ngIf=\"emailRef.errors?.required && emailRef.dirty\">required error</small>                                                        \n                            <small class=\"error\" *ngIf=\"emailRef.errors?.email && emailRef.dirty\">email not valid</small>                                                        \n                        </div>\n                        <div class=\"col m6 s12\">\n                            <mat-form-field>\n                                <input matInput \n                                    type=\"text\"\n                                    placeholder=\"Phone Number\" \n                                    value=\"\"\n                                    name=\"phone\" \n                                    [(ngModel)]=\"phone\" \n                                    #phoneRef=\"ngModel\" \n                                    required\n                                    phone=\"ID\">\n                            </mat-form-field>\n                            <small class=\"error\" *ngIf=\"phoneRef.errors?.required && phoneRef.touched\">required error</small>                                                                                    \n                            <small class=\"error\" *ngIf=\"phoneRef.errors?.required && phoneRef.dirty\">required error</small>                                                                                    \n                            <small class=\"error\" *ngIf=\"phoneRef.errors?.phone && phoneRef.dirty\">phone not valid</small>                                                                                    \n                        </div>\n                    </div>\n\n                    <div class=\"clearfix\"></div>\n                    \n                    <div class=\"row\">\n                        <div class=\"col s12\">\n                            <mat-form-field>\n                                <input matInput \n                                    type=\"text\"\n                                    placeholder=\"Address\" \n                                    value=\"\"\n                                    name=\"address\" \n                                    [(ngModel)]=\"address\" \n                                    #addressRef=\"ngModel\" \n                                    required>\n                            </mat-form-field>\n                            <small class=\"error\" *ngIf=\"addressRef.errors?.required && addressRef.touched\">required error</small>                                                                                                                \n                            <small class=\"error\" *ngIf=\"addressRef.errors?.required && addressRef.dirty\">required error</small>                                                                                                                \n                        </div>\n                    </div>\n\n                    <div class=\"clearfix\"></div>\n\n                    <div class=\"row\">\n                        <div class=\"col m6 s12\">\n                            <mat-form-field>\n                                <input matInput \n                                    type=\"text\"\n                                    placeholder=\"City\" \n                                    value=\"\"\n                                    name=\"city\" \n                                    [(ngModel)]=\"city\" \n                                    #cityRef=\"ngModel\" \n                                    required>\n                            </mat-form-field>\n                            <small class=\"error\" *ngIf=\"cityRef.errors?.required && cityRef.touched\">required error</small>                                                                                                                                            \n                            <small class=\"error\" *ngIf=\"cityRef.errors?.required && cityRef.dirty\">required error</small>                                                                                                                                            \n                        </div>\n                        <div class=\"col m6 s12\">\n                            <mat-form-field>\n                                <input matInput \n                                    type=\"text\"\n                                    placeholder=\"Zipcode\" \n                                    value=\"\"\n                                    name=\"zipcode\" \n                                    [(ngModel)]=\"zipcode\" \n                                    #zipcodeRef=\"ngModel\" \n                                    maxlength=\"5\"\n                                    required\n                                    number>\n                            </mat-form-field>\n                            <small class=\"error\" *ngIf=\"zipcodeRef.errors?.required && zipcodeRef.touched\">required error</small>                                                                                                                                            \n                            <small class=\"error\" *ngIf=\"zipcodeRef.errors?.required && zipcodeRef.dirty\">required error</small>                                                                                                                                            \n                        </div>\n                    </div>\n\n                    <div class=\"clearfix\"></div>\n\n                    <div class=\"row\">\n                        <div class=\"col m6 s12\">\n                            <mat-form-field>\n                                <input matInput \n                                    type=\"text\"\n                                    placeholder=\"State\" \n                                    value=\"\"\n                                    name=\"state\"\n                                    [(ngModel)]=\"state\" \n                                    #stateRef=\"ngModel\">\n                            </mat-form-field>\n                        </div>\n                        <div class=\"col m6 s12\">\n                            <mat-form-field>\n                            <input matInput \n                                type=\"text\"\n                                placeholder=\"Country\" \n                                value=\"\"\n                                name=\"country\" \n                                [(ngModel)]=\"country\" \n                                #countryRef=\"ngModel\" \n                                required>\n                            </mat-form-field>\n                            <small class=\"error\" *ngIf=\"countryRef.errors?.required && countryRef.touched\">required error</small>                                                                                                                                                                                                    \n                            <small class=\"error\" *ngIf=\"countryRef.errors?.required && countryRef.dirty\">required error</small>                                                                                                                                                                                                    \n                        </div>\n                    </div>\n\n                    <div class=\"clearfix\"></div>\n\n                    <div class=\"row\">\n                        <div class=\"col l6\">\n                            <div class=\"alert alert-info\">\n                                <h6>Stripe JS</h6>\n                                <p>Dummy test</p>\n                                <span class=\"right\">4242424242424242</span> Card number\n                                <hr />\n                                <span class=\"right\">02/19</span> MM/YY\n                                <hr />\n                                <span class=\"right\">222</span> CVC\n                            </div>\n                        </div>\n                        <div class=\"col l6\">\n                            <div class=\"alert alert-info\">\n                                <h6>Paypal</h6>\n                                <p>Dummy test</p>\n                                <span class=\"right\">4032034339485537</span> Card number\n                                <hr />\n                                <span class=\"right\">05/22</span> MM/YY\n                                <hr />\n                                <span class=\"right\">123</span> CVC\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"clearfix\"></div>                    \n\n                    <div class=\"margin-top20\">\n                        <a mat-button routerLink=\"/shop/cart\" class=\"btn btn-default\">Back To Cart</a>\n                    </div>\n                </form>\n                <!-- End Form -->\n                <!-- <div>{{formRef.value | json}}</div> -->\n            </div>\n            <div class=\"col l4 m5 s12\">\n                <h5>Order Products</h5>\n                <!-- Start List Produt --> \n                <ul class=\"list-product\">\n                    <li *ngFor=\"let product of productsOrder\">\n                        <div class=\"wrap-img\">\n                            <img [src]=\"product.image\" class=\"img-responsive\" alt=\"\"/> \n                        </div>\n                        <h6 class=\"title\"><a [routerLink]=\"['/shop/p/' + product.slug]\" >{{product.productName}}</a></h6>\n                        <p class=\"margin-top10\">\n                            <span class=\"right\">{{product.quantity * product.price | currency:'USD':'$'}}</span>\n                            {{product.quantity}}x\n                        </p>\n                    </li>\n                </ul>\n                <!-- End List Produt -->\n                <table class=\"count\">\n                    <tr>\n                        <td>Sub Total</td>\n                        <td class=\"right-align\">{{subTotal  | currency:'USD':'$'}}</td>\n                    </tr>\n                    <tr>\n                        <td>Promo</td>\n                        <td class=\"right-align\">{{promoValue  | currency:'USD':'$'}}</td>\n                    </tr>\n                    <tr>\n                        <td>Total Price</td>\n                        <td class=\"right-align\"><strong>{{total  | currency:'USD':'$'}}</strong></td>\n                    </tr>\n                </table>\n\n                <div *ngIf=\"!touched\" class=\"margin-top20 center\">\n                    <button [disabled]=\"formRef.invalid || touched\" type=\"submit\" mat-button class=\"btn btn-primary margin-bottom10\">\n                        Pay with Stripe JS\n                        <span *ngIf=\"touched\">Loading...</span>\n                    </button>\n                    <div class=\"center margin-bottom10\">or</div>\n                    <div class=\"btn-paypal\">\n                        <span *ngIf=\"formRef.invalid\" class=\"operlay\"></span>\n                        <div class=\"content\">\n                            <ngx-paypal [config]=\"payPalConfig\"></ngx-paypal>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"wrap-loading\">\n                    <mat-spinner *ngIf=\"touched\" diameter=\"30\" strokeWidth=\"5\"></mat-spinner>\n                </div>\n\n            </div>\n        </div>\n        \n    </div>\n</div>"

/***/ }),

/***/ "./src/app/product/shipping/shipping.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/product/shipping/shipping.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\nImport\n=========================== */\n/* -------------------------------------------------------------\n  Sass CSS3 Mixins! The Cross-Browser CSS3 Sass Library\n  By: Matthieu Aussaguel, http://www.mynameismatthieu.com, @matthieu_tweets\n\n  List of CSS3 Sass Mixins File to be @imported and @included as you need\n\n  The purpose of this library is to facilitate the use of CSS3 on different browsers avoiding HARD TO READ and NEVER\n  ENDING css files\n\n  note: All CSS3 Properties are being supported by Safari 5\n  more info: http://www.findmebyip.com/litmus/#css3-properties\n\n------------------------------------------------------------- */\n/*\nColor\n=========================== */\n/*\nFont Family\n=========================== */\n.material-icons {\n  font-family: 'Material Icons';\n  font-weight: normal;\n  line-height: 20px; }\n.material-icons {\n  font-family: 'Material Icons';\n  font-weight: normal;\n  line-height: 20px; }\n/*\nLayout\n=========================== */\nul.list-product li {\n  padding-left: 75px;\n  padding-right: 0; }\nul.list-product li .wrap-img {\n    left: 0; }\n.col {\n  padding-left: 15px;\n  padding-right: 15px; }\ntable.count {\n  margin-top: -1px; }\n.link {\n  display: inline-block; }\n.btn-paypal {\n  position: relative; }\n.btn-paypal span {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    background: #fff;\n    top: 0;\n    left: 0;\n    z-index: 3;\n    filter: alpha(opacity=50);\n    -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=50)\";\n    -webkit-opacity: 0.5;\n    -khtml-opacity: 0.5;\n    -moz-opacity: 0.5;\n    -ms-opacity: 0.5;\n    -o-opacity: 0.5;\n    opacity: 0.5; }\n.btn-paypal .content {\n    position: relative;\n    z-index: 1; }\n/*\nLoading\n=========================== */\n.wrap-loading {\n  margin-top: 30px;\n  position: relative;\n  width: 100%;\n  top: 0;\n  right: 0;\n  background: #fff; }\n.wrap-loading .mat-progress-spinner {\n    display: block;\n    margin: auto; }\n/*\nResponsive\n=========================== */\n@media (max-width: 920px) {\n  .btn {\n    width: 100%;\n    display: block; } }\n@media (max-width: 568px) {\n  form {\n    margin-bottom: 50px; } }\n"

/***/ }),

/***/ "./src/app/product/shipping/shipping.component.ts":
/*!********************************************************!*\
  !*** ./src/app/product/shipping/shipping.component.ts ***!
  \********************************************************/
/*! exports provided: ShippingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShippingComponent", function() { return ShippingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _lib_service_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/service/cookie.service */ "./src/app/lib/service/cookie.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ngx_paypal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-paypal */ "./node_modules/ngx-paypal/fesm5/ngx-paypal.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ShippingComponent = /** @class */ (function () {
    function ShippingComponent(router, cookie, snackBar) {
        this.router = router;
        this.cookie = cookie;
        this.snackBar = snackBar;
        this.productsOrder = [];
        this.promoValue = 0;
        this.nottouched = true;
        this.touched = false;
    }
    ShippingComponent.prototype.ngOnInit = function () {
        var products = this.cookie['productsOrder'];
        lodash__WEBPACK_IMPORTED_MODULE_4__["map"](products, function (x) {
            return x.slug = lodash__WEBPACK_IMPORTED_MODULE_4__["kebabCase"](x.slug);
        });
        this.productsOrder = products;
        this.promo = JSON.stringify(this.cookie['promo']);
        this.promoValue = this.cookie['promoValue'];
        this.subTotal = this.cookie['subtotal'];
        this.total = this.cookie['subtotal'] - this.promoValue;
        if (this.total < 0) {
            this.total = 0;
        }
        if (this.productsOrder.length == 0) {
            this.router.navigate(['/shop/cart']);
        }
        this.initConfig();
    };
    // Open Popup Checkout Strip JS
    ShippingComponent.prototype.openCheckout = function () {
        var _this = this;
        var handler = window.StripeCheckout.configure({
            key: 'pk_test_RdW4DTIQXiTLULbUy1vnQUsV',
            locale: 'auto',
            token: function (token) {
                // You can access the token ID with `token.id`.
                // Get the token ID to your server-side code for use.
                // Documentation charge https://stripe.com/docs/charges
                console.log(token.id);
                _this.cookie.addCookie('payed', 'payed');
                _this.cookie.removeCookie('products');
                _this.cookie.removeCookie('promo');
                _this.cookie.removeCookie('promoValue');
                _this.cookie.removeCookie('subtotal');
                setTimeout(function () {
                    _this.router.navigate(['/shop/receipt']);
                }, 1000);
            },
            closed: function () {
                _this.nottouched = true;
                _this.touched = false;
            }
        });
        // handler Open
        handler.open({
            image: '/assets/images/brand/logo-stripe.jpg',
            name: 'Angushop',
            description: 'Complete payment',
            amount: this.total
        });
    };
    // Submit STRIP JS
    ShippingComponent.prototype.onSubmit = function (form) {
        console.log(form.value); // Object Shipping Object
        console.log(this.cookie['productsOrder']); // Array Obect Products order
        console.log(this.cookie['promo']); // Object Promo
        console.log(this.cookie['promoValue']); // Object Promo Value From calculation
        console.log(this.cookie['subtotal']); // Object Sub Total     
        this.openCheckout();
        this.nottouched = false;
        this.touched = true;
    };
    // Paypal Configuration
    ShippingComponent.prototype.initConfig = function () {
        var _this = this;
        this.payPalConfig = new ngx_paypal__WEBPACK_IMPORTED_MODULE_5__["PayPalConfig"](ngx_paypal__WEBPACK_IMPORTED_MODULE_5__["PayPalIntegrationType"].ClientSideREST, ngx_paypal__WEBPACK_IMPORTED_MODULE_5__["PayPalEnvironment"].Sandbox, {
            commit: true,
            client: {
                sandbox: 'YOUR-SENDBOX-KEY'
            },
            button: {
                label: 'paypal',
            },
            onPaymentComplete: function (data, actions) {
                console.log(data, actions);
                _this.cookie.addCookie('payed', 'payed');
                _this.cookie.removeCookie('products');
                _this.cookie.removeCookie('promo');
                _this.cookie.removeCookie('promoValue');
                _this.cookie.removeCookie('subtotal');
                _this.snackBar.open('Success paypal payment', '', {
                    duration: 2000,
                });
                setTimeout(function () {
                    _this.router.navigate(['/shop/receipt']);
                }, 1000);
            },
            onCancel: function (data, actions) {
                _this.snackBar.open('Cancel paypal payment', '', {
                    duration: 2000,
                });
            },
            onError: function (err) {
                _this.snackBar.open('Error paypal payment', '', {
                    duration: 2000,
                });
            },
            transactions: [{
                    amount: {
                        currency: 'USD',
                        total: this.total
                    }
                }]
        });
    };
    ShippingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shipping',
            template: __webpack_require__(/*! ./shipping.component.html */ "./src/app/product/shipping/shipping.component.html"),
            styles: [__webpack_require__(/*! ./shipping.component.scss */ "./src/app/product/shipping/shipping.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _lib_service_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]])
    ], ShippingComponent);
    return ShippingComponent;
}());



/***/ }),

/***/ "./src/app/product/wishlist/wishlist.component.html":
/*!**********************************************************!*\
  !*** ./src/app/product/wishlist/wishlist.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Head Section -->\n<div class=\"head-section bg\">\n    <div class=\"container\">\n        <h4>Wish<span class=\"font-light\">List</span> Product</h4>\n        <p>Delectus aliquando incorrupte ne sea qui cu iudicabit.</p>\n    </div>\n</div>\n<!-- End Section -->\n<div class=\"container-page\">\n    <div class=\"box-page padding-bottom20\">\n        <div class=\"wrap-product\">\n            <!-- App Product -->\n            <app-product \n                [filter]=\"{\n                    index: productWishlist\n                }\"\n                [showBtnClose]=\"true\"\n                [setlimit]=\"8\" \n                [paginate]=\"true\"\n                (onRemove)=\"onSelectRemove($event)\"\n            ></app-product>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/product/wishlist/wishlist.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/product/wishlist/wishlist.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrap-product {\n  padding: 0 15px; }\n"

/***/ }),

/***/ "./src/app/product/wishlist/wishlist.component.ts":
/*!********************************************************!*\
  !*** ./src/app/product/wishlist/wishlist.component.ts ***!
  \********************************************************/
/*! exports provided: WishlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishlistComponent", function() { return WishlistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _lib_service_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/service/cookie.service */ "./src/app/lib/service/cookie.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WishlistComponent = /** @class */ (function () {
    function WishlistComponent(snackBar, cookie) {
        this.snackBar = snackBar;
        this.cookie = cookie;
        this.productWishlist = [];
    }
    WishlistComponent.prototype.ngOnInit = function () {
        this.productWishlist = this.cookie['arrWishList'];
    };
    // On Select Remove
    WishlistComponent.prototype.onSelectRemove = function (e) {
        var getIndex = this.productWishlist.indexOf(Number(e.wishlist));
        this.productWishlist.splice(getIndex, 1);
        this.cookie.addCookie('wishlist', JSON.stringify(this.productWishlist));
        this.openSnackBar(e.productName, 'Deleted from wishlist');
    };
    // Snack Bar
    WishlistComponent.prototype.openSnackBar = function (message, action) {
        this.snackBar.open(message, action, {
            duration: 2000,
        });
    };
    WishlistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-wishlist',
            template: __webpack_require__(/*! ./wishlist.component.html */ "./src/app/product/wishlist/wishlist.component.html"),
            styles: [__webpack_require__(/*! ./wishlist.component.scss */ "./src/app/product/wishlist/wishlist.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"],
            _lib_service_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"]])
    ], WishlistComponent);
    return WishlistComponent;
}());



/***/ }),

/***/ "./src/app/routing.module.ts":
/*!***********************************!*\
  !*** ./src/app/routing.module.ts ***!
  \***********************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home1_home1_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home1/home1.component */ "./src/app/home/home1/home1.component.ts");
/* harmony import */ var _home_home2_home2_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home2/home2.component */ "./src/app/home/home2/home2.component.ts");
/* harmony import */ var _product_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product/dashboard/dashboard.component */ "./src/app/product/dashboard/dashboard.component.ts");
/* harmony import */ var _product_detail_product_detail_product_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product/detail-product/detail-product.component */ "./src/app/product/detail-product/detail-product.component.ts");
/* harmony import */ var _product_product1_product1_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product/product1/product1.component */ "./src/app/product/product1/product1.component.ts");
/* harmony import */ var _product_product2_product2_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./product/product2/product2.component */ "./src/app/product/product2/product2.component.ts");
/* harmony import */ var _product_product3_product3_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./product/product3/product3.component */ "./src/app/product/product3/product3.component.ts");
/* harmony import */ var _product_product4_product4_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./product/product4/product4.component */ "./src/app/product/product4/product4.component.ts");
/* harmony import */ var _product_product5_product5_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./product/product5/product5.component */ "./src/app/product/product5/product5.component.ts");
/* harmony import */ var _product_shipping_shipping_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./product/shipping/shipping.component */ "./src/app/product/shipping/shipping.component.ts");
/* harmony import */ var _product_receipt_receipt_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./product/receipt/receipt.component */ "./src/app/product/receipt/receipt.component.ts");
/* harmony import */ var _product_wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./product/wishlist/wishlist.component */ "./src/app/product/wishlist/wishlist.component.ts");
/* harmony import */ var _product_compare_compare_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./product/compare/compare.component */ "./src/app/product/compare/compare.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _element_dashboard_element_dashboard_element_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./element/dashboard-element/dashboard-element.component */ "./src/app/element/dashboard-element/dashboard-element.component.ts");
/* harmony import */ var _element_product_product_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./element/product/product.component */ "./src/app/element/product/product.component.ts");
/* harmony import */ var _element_form_control_form_control_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./element/form-control/form-control.component */ "./src/app/element/form-control/form-control.component.ts");
/* harmony import */ var _element_layout_layout_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./element/layout/layout.component */ "./src/app/element/layout/layout.component.ts");
/* harmony import */ var _element_button_button_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./element/button/button.component */ "./src/app/element/button/button.component.ts");
/* harmony import */ var _element_grid_grid_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./element/grid/grid.component */ "./src/app/element/grid/grid.component.ts");
/* harmony import */ var _element_typhography_typhography_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./element/typhography/typhography.component */ "./src/app/element/typhography/typhography.component.ts");
/* harmony import */ var _element_helper_helper_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./element/helper/helper.component */ "./src/app/element/helper/helper.component.ts");
/* harmony import */ var _home_categories_categories_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./home/categories/categories.component */ "./src/app/home/categories/categories.component.ts");
/* harmony import */ var _home_product_product_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./home/product/product.component */ "./src/app/home/product/product.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Home


// Products







// import { CartComponent } from './product/cart/cart.component';






// ELements










var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: _home_home1_home1_component__WEBPACK_IMPORTED_MODULE_2__["Home1Component"] },
    { path: 'categories/:id', component: _home_home2_home2_component__WEBPACK_IMPORTED_MODULE_3__["Home2Component"] },
    { path: 'subcategories/:id', component: _home_categories_categories_component__WEBPACK_IMPORTED_MODULE_25__["CategoriesComponent"] },
    { path: 'producDetails/:id', component: _home_product_product_component__WEBPACK_IMPORTED_MODULE_26__["ProductComponent"] },
    { path: 'special-request', loadChildren: './home/special/special.module#SpecialModule' },
    { path: 'cart', loadChildren: './home/cart/cart.module#CartModule' },
    { path: 'login', loadChildren: './login/login.module#LoginModule' },
    { path: 'signup', loadChildren: './signup/signup.module#SignupModule' },
    { path: 'success', loadChildren: './home/thankyou/thankyou.module#ThankyouModule' },
    { path: 'guestCheckout', loadChildren: './home/guest-checkout/guest-checkout.module#GuestCheckoutModule' },
    { path: 'editItem/:id', loadChildren: './home/edit-product/edit-product.module#EditProductModule' },
    { path: 'shop', component: _product_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardProdut"],
        children: [
            { path: '', redirectTo: '/shop/product1', pathMatch: 'full' },
            { path: 'product1', component: _product_product1_product1_component__WEBPACK_IMPORTED_MODULE_6__["product1Component"] },
            { path: 'product2', component: _product_product2_product2_component__WEBPACK_IMPORTED_MODULE_7__["Product2Component"] },
            { path: 'product3', component: _product_product3_product3_component__WEBPACK_IMPORTED_MODULE_8__["Product3Component"] },
            { path: 'product4', component: _product_product4_product4_component__WEBPACK_IMPORTED_MODULE_9__["Product4Component"] },
            { path: 'product5', component: _product_product5_product5_component__WEBPACK_IMPORTED_MODULE_10__["Product5Component"] },
            // { path: 'cart', component: CartComponent },
            { path: 'shipping', component: _product_shipping_shipping_component__WEBPACK_IMPORTED_MODULE_11__["ShippingComponent"] },
            { path: 'receipt', component: _product_receipt_receipt_component__WEBPACK_IMPORTED_MODULE_12__["ReceiptComponent"] },
            { path: 'wishlist', component: _product_wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_13__["WishlistComponent"] },
            { path: 'compare', component: _product_compare_compare_component__WEBPACK_IMPORTED_MODULE_14__["CompareComponent"] },
            { path: 'p/:detail', component: _product_detail_product_detail_product_component__WEBPACK_IMPORTED_MODULE_5__["DetailProductComponent"] }
        ]
    },
    { path: 'element', component: _element_dashboard_element_dashboard_element_component__WEBPACK_IMPORTED_MODULE_17__["DashboardELementComponent"],
        children: [
            { path: '', redirectTo: '/element/product', pathMatch: 'full' },
            { path: 'product', component: _element_product_product_component__WEBPACK_IMPORTED_MODULE_18__["ProductElement"] },
            { path: 'form', component: _element_form_control_form_control_component__WEBPACK_IMPORTED_MODULE_19__["FormControlComponent"] },
            { path: 'layout', component: _element_layout_layout_component__WEBPACK_IMPORTED_MODULE_20__["LayoutComponent"] },
            { path: 'button', component: _element_button_button_component__WEBPACK_IMPORTED_MODULE_21__["ButtonComponent"] },
            { path: 'grid', component: _element_grid_grid_component__WEBPACK_IMPORTED_MODULE_22__["GridComponent"] },
            { path: 'typography', component: _element_typhography_typhography_component__WEBPACK_IMPORTED_MODULE_23__["TyphographyComponent"] },
            { path: 'helper', component: _element_helper_helper_component__WEBPACK_IMPORTED_MODULE_24__["HelperComponent"] },
        ]
    },
    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_16__["ContactComponent"] },
    { path: '404', component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_15__["NotFoundComponent"] },
    { path: '**', redirectTo: '404' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/side/side.component.html":
/*!******************************************!*\
  !*** ./src/app/side/side.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Start Side -->\n<div class=\"side\">\n    <div class=\"wrap-brand\">\n        <a href=\"#\" class=\"brand\">\n            <img src=\"./assets/images/brand/logo.png\" alt=\"\">\n            <img class=\"mobile\" src=\"./assets/images/brand/logo-mobile.png\" alt=\"\">\n        </a>\n    </div>\n    <nav>\n        <div> \n            <ul>\n                <li>\n                    <a mat-button (click)=\"toggleBar()\" [class.active]=\"activebar\">\n                        <mat-icon>&#xE8FE;</mat-icon>\n                    </a>\n                </li>\n                <li>\n                    <a mat-button routerLink=\"/shop/wishlist\" routerLinkActive=\"active\">\n                        <span *ngIf=\"wishlistLength != 0\" class=\"badge\">{{wishlistLength}}</span>\n                        <mat-icon>&#xE87E;</mat-icon>\n                    </a>\n                </li>\n                <li>\n                    <a mat-button routerLink=\"/shop/compare\" routerLinkActive=\"active\">\n                        <span *ngIf=\"comapreLength != 0\" class=\"badge\">{{comapreLength}}</span>\n                        <mat-icon>&#xE6E1;</mat-icon>\n                    </a>\n                </li>\n                <li>\n                    <a mat-button routerLink=\"/shop/cart\" routerLinkActive=\"active\">\n                        <span *ngIf=\"cartLength != 0\" class=\"badge\">{{cartLength}}</span>\n                        <mat-icon>&#xE8CC;</mat-icon>\n                    </a>\n                </li>\n            </ul>\n        </div>\n    </nav>\n</div>\n<!-- End Side -->\n<!-- Start Wrap Menu -->\n<div class=\"wrap-menu\">\n    <nav #navmenu>\n        <ul class=\"menu\">\n            <li *ngFor=\"let menu of menus\">\n                <a *ngIf=\"menu.children != null\" (click)=\"selectMenu(menu)\" [class.active]=\"menu == selectedMenu\">{{menu.label}}</a>\n                <a *ngIf=\"menu.children == null\" [routerLink]=\"menu.link\" routerLinkActive=\"active\">{{menu.label}}</a>\n                <ul class=\"drop-down\" [@slideUp] *ngIf=\"menu == selectedMenu\">\n                    <li *ngFor=\"let child of menu.children\">\n                        <a [routerLink]=\"child.link\" routerLinkActive=\"active\">{{child.label}}</a>\n                    </li>\n                </ul>\n            </li>\n        </ul>\n    </nav>\n</div>\n<!-- End Wrap Menu -->"

/***/ }),

/***/ "./src/app/side/side.component.scss":
/*!******************************************!*\
  !*** ./src/app/side/side.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\nImport\r\n=========================== */\n/* -------------------------------------------------------------\n  Sass CSS3 Mixins! The Cross-Browser CSS3 Sass Library\n  By: Matthieu Aussaguel, http://www.mynameismatthieu.com, @matthieu_tweets\n\n  List of CSS3 Sass Mixins File to be @imported and @included as you need\n\n  The purpose of this library is to facilitate the use of CSS3 on different browsers avoiding HARD TO READ and NEVER\n  ENDING css files\n\n  note: All CSS3 Properties are being supported by Safari 5\n  more info: http://www.findmebyip.com/litmus/#css3-properties\n\n------------------------------------------------------------- */\n/*\nColor\n=========================== */\n/*\nFont Family\n=========================== */\n.material-icons {\n  font-family: 'Material Icons';\n  font-weight: normal;\n  line-height: 20px; }\n.material-icons {\n  font-family: 'Material Icons';\n  font-weight: normal;\n  line-height: 20px; }\n/*\r\nVariable\r\n=========================== */\n/*\r\nSide\r\n=========================== */\n.side {\n  width: 125px;\n  height: 100%;\n  display: table;\n  position: fixed;\n  left: 0;\n  top: 0;\n  background: #1e2327;\n  z-index: 2; }\n.side .wrap-brand {\n    display: block;\n    width: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n    padding: 20px 0 15px 0;\n    text-align: center;\n    background: #1e2327;\n    transition: all 0.5s ease-in-out;\n    z-index: 9; }\n.side .wrap-brand img {\n      width: 78px;\n      margin-bottom: 0; }\n.side .wrap-brand img.mobile {\n        display: none; }\n.side nav {\n    display: table-cell;\n    vertical-align: middle; }\n.side nav li {\n      width: 100%;\n      float: none;\n      text-align: center;\n      position: relative; }\n.side nav li a {\n        font-size: 24px;\n        display: block;\n        width: 100%;\n        padding: 15px;\n        border-radius: 0;\n        box-shadow: none !important;\n        position: relative; }\n.side nav li a.active {\n          background: rgba(0, 0, 0, 0.2); }\n.side nav li a .badge {\n          position: absolute;\n          display: table;\n          padding: 2px 5px 0;\n          color: #fff;\n          border: solid 1px #1e2327;\n          left: 50%;\n          top: 7px;\n          height: 10px;\n          border-radius: 4px;\n          min-width: 0;\n          -webkit-transform: scale(0.8, 0.8);\n                  transform: scale(0.8, 0.8); }\n/*\r\nMenu\r\n=========================== */\n.wrap-menu {\n  width: 270px;\n  background: #262a2e;\n  position: fixed;\n  height: 100%;\n  left: -270px;\n  top: 0;\n  overflow: auto;\n  transition: all 0.5s ease-in-out;\n  color: #ddd;\n  z-index: 1; }\n.wrap-menu nav {\n    width: 100%;\n    padding: 25px 30px;\n    display: table; }\n.wrap-menu nav ul.menu {\n      display: table-cell;\n      vertical-align: middle; }\n.wrap-menu nav ul.menu > li {\n        width: 100%;\n        float: none;\n        height: auto;\n        padding: 0; }\n.wrap-menu nav ul.menu > li > a {\n          text-transform: uppercase;\n          display: block;\n          width: 100%;\n          padding: 5px 0;\n          font-size: 16px; }\n.wrap-menu nav ul.menu > li > a:hover {\n            background: transparent;\n            text-decoration: none; }\n.wrap-menu nav ul.menu ul.drop-down {\n        padding: 5px 0;\n        margin: 0; }\n.wrap-menu nav ul.menu ul.drop-down li {\n          width: 100%;\n          float: none; }\n.wrap-menu nav ul.menu ul.drop-down li a {\n            color: #999;\n            background: transparent;\n            text-decoration: none; }\n/*\r\nResponsive\r\n=========================== */\n@media (max-width: 767px) {\n  .side {\n    position: relative;\n    width: 100%;\n    height: auto;\n    display: block;\n    overflow: hidden;\n    z-index: 5; }\n    .side nav {\n      display: block;\n      text-align: center;\n      position: relative;\n      z-index: 1;\n      padding: 0;\n      height: 53px; }\n      .side nav ul {\n        display: inline-block; }\n        .side nav ul li {\n          width: auto;\n          float: left;\n          display: block; }\n    .side .mat-button, .side .mat-fab, .side .mat-icon-button, .side .mat-mini-fab, .side .mat-raised-button {\n      min-width: 35px;\n      line-height: 24px; }\n    .side .wrap-brand {\n      background: #f9f9f9;\n      overflow: hidden;\n      position: relative;\n      top: 0;\n      padding-top: 14px;\n      margin-top: 0px;\n      text-align: center;\n      z-index: 2; }\n      .side .wrap-brand img {\n        width: 50px;\n        display: none; }\n        .side .wrap-brand img.mobile {\n          display: block;\n          margin: auto; }\n  .wrap-menu {\n    width: 100%;\n    display: block;\n    left: 0;\n    top: -100%;\n    height: 225px;\n    z-index: 4;\n    position: absolute;\n    transition: all 0s ease-in-out; }\n    .wrap-menu nav {\n      height: auto !important;\n      display: block;\n      text-align: center; }\n      .wrap-menu nav ul.menu {\n        display: block;\n        width: 100%; }\n        .wrap-menu nav ul.menu > li > a {\n          font-size: 14px;\n          padding-top: 5px;\n          padding-bottom: 5px; } }\n"

/***/ }),

/***/ "./src/app/side/side.component.ts":
/*!****************************************!*\
  !*** ./src/app/side/side.component.ts ***!
  \****************************************/
/*! exports provided: SideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideComponent", function() { return SideComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _lib_service_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/service/cookie.service */ "./src/app/lib/service/cookie.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SideComponent = /** @class */ (function () {
    function SideComponent(router, cookie) {
        var _this = this;
        this.router = router;
        this.cookie = cookie;
        this.selectedMenu = null;
        // Menus
        this.menus = [
            {
                label: 'Home',
                link: null,
                children: [
                    {
                        label: 'Home 1',
                        link: '/home'
                    },
                    {
                        label: 'Home 2',
                        link: '/home2'
                    }
                ]
            },
            {
                label: 'Shop',
                link: null,
                children: [
                    {
                        label: 'Product 1',
                        link: '/shop/product1'
                    },
                    {
                        label: 'Product 2',
                        link: '/shop/product2'
                    },
                    {
                        label: 'Product 3',
                        link: '/shop/product3'
                    },
                    {
                        label: 'Product 4',
                        link: '/shop/product4'
                    },
                    {
                        label: 'Product 5',
                        link: '/shop/product5'
                    }
                ]
            },
            {
                label: 'Elements',
                link: null,
                children: [
                    {
                        label: 'Products',
                        link: '/element/product'
                    },
                    {
                        label: 'Form Controls',
                        link: '/element/form'
                    },
                    {
                        label: 'Layout',
                        link: '/element/layout'
                    },
                    {
                        label: 'Button, Indicators & Icons',
                        link: '/element/button'
                    },
                    {
                        label: 'Grid Columns',
                        link: '/element/grid'
                    },
                    {
                        label: 'Helper',
                        link: '/element/helper'
                    },
                    {
                        label: 'Typography',
                        link: '/element/typography'
                    }
                ]
            },
            {
                label: 'Pages',
                link: null,
                children: [
                    {
                        label: 'Shop Cart',
                        link: '/shop/cart'
                    },
                    {
                        label: 'Shop Shipping',
                        link: '/shop/shipping'
                    },
                    {
                        label: 'Shop Receipt',
                        link: '/shop/receipt'
                    },
                    {
                        label: '404',
                        link: '/404'
                    }
                ]
            },
            {
                label: 'Contact Us',
                link: '/contact'
            }
        ];
        this.activebar = false;
        this.toggle = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        setInterval(function () {
            _this.cookie.updateCookie();
            _this.cookie.initCookie();
            _this.cartLength = _this.cookie['productsOrder'].length;
            _this.wishlistLength = _this.cookie['arrWishList'].length;
            _this.comapreLength = _this.cookie['arrCompare'].length;
        }, 1000);
    }
    SideComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"])) {
                return;
            }
            _this.activebar = false;
        });
    };
    SideComponent.prototype.ngAfterViewInit = function () {
        this.nav.nativeElement.style.height = window.innerHeight + 'px';
    };
    // Event Listener
    SideComponent.prototype.onResize = function (event) {
        this.nav.nativeElement.style.height = window.innerHeight + 'px';
    };
    // On Select Menu
    SideComponent.prototype.selectMenu = function (menu) {
        if (menu == this.selectedMenu) {
            this.selectedMenu = null;
        }
        else {
            this.selectedMenu = menu;
        }
    };
    // Toggle Bar
    SideComponent.prototype.toggleBar = function () {
        this.toggle.emit();
        this.activebar = !this.activebar;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('navmenu'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], SideComponent.prototype, "nav", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], SideComponent.prototype, "onResize", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SideComponent.prototype, "toggle", void 0);
    SideComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-side',
            template: __webpack_require__(/*! ./side.component.html */ "./src/app/side/side.component.html"),
            styles: [__webpack_require__(/*! ./side.component.scss */ "./src/app/side/side.component.scss")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('slideUp', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        height: '*'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(500, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0, offset: 0, height: 0 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0.2, offset: 0.2, height: '*' }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1, offset: 1.0, height: 'auto' })
                        ]))
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => void', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(200, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1, offset: 0, height: 'auto' }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0.2, offset: 0.2, height: '*' }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0, offset: 1.0, height: 0 })
                        ]))
                    ])
                ])
            ],
            providers: [_lib_service_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _lib_service_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]])
    ], SideComponent);
    return SideComponent;
}());



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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


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
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\hefzi\Documents\apps\heroku\angular-upload-2910\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map