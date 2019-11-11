(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-special-special-module"],{

/***/ "./src/app/home/special/special-routing.module.ts":
/*!********************************************************!*\
  !*** ./src/app/home/special/special-routing.module.ts ***!
  \********************************************************/
/*! exports provided: SpecialRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpecialRoutingModule", function() { return SpecialRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _special_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./special.component */ "./src/app/home/special/special.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _special_component__WEBPACK_IMPORTED_MODULE_2__["SpecialComponent"]
    }
];
var SpecialRoutingModule = /** @class */ (function () {
    function SpecialRoutingModule() {
    }
    SpecialRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], SpecialRoutingModule);
    return SpecialRoutingModule;
}());



/***/ }),

/***/ "./src/app/home/special/special.component.html":
/*!*****************************************************!*\
  !*** ./src/app/home/special/special.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\n  <div class=\"row\">\n      <div class=\"col-sm-12 text-center\" style=\"padding-top: 3px\">\n          <h4><strong>Custom Request</strong></h4>\n          <img width=\"100%\" src=\"/assets/images/special/special-request-banner.jpg\" alt=\"\">\n      </div>\n  </div> <!-- row -->\n\n  <div class=\"row\">\n\n      <!-- <ng-container *ngIf=\"!subCategories\">\n              <div class=\"col-sm-4 text-center\">\n                      <h6>loading...</h6>\n                  </div>\n      </ng-container> -->\n\n      <p style=\"padding: 1em;color: #000;font-size: 16px;margin-bottom: 0px;\">\n        Licenseplates.tv carefully evaluates every special request for license plates from idividuals or corporations. We cater to all of our customers needs. \n        No job is too big or too small. \n        Either it be to replicate an old license plate passed down from generations, or to simply change the year on a license plate for a more up-to-date appeal.\n      </p>\n\n      <p style=\"padding: 1em;color: #000;font-size: 16px;margin-bottom: 0px;\">\n        Our Team of dedicated professionals work diligently to provide the most outstanding craftsmanship any one can offer. \n        We take pride in providing excellent service to all our customers.\n      </p>\n\n      <p style=\"padding: 1em;color: #000;font-size: 16px;margin-bottom: 0px;\">\n        Please see below at some of the work that we have done in the past.\n      </p>\n\n      <p style=\"padding: 1em;color: #000;font-size: 16px;margin-bottom: 0px;\">Special Request by customers: </p>\n\n      <div class=\"col-sm-12 text-center\" style=\"padding-top: 3px\">\n        <!-- <h4><strong>Custom Request</strong></h4> -->\n        <img width=\"100%\" src=\"/assets/images/special/main_first3set.jpg\" alt=\"\">\n    </div>\n      \n      <div class=\"row\">\n\n        <div class=\"col-sm-12 text-center\">\n          <p style=\"padding: .5em;color: #000;font-size: 16px;margin-bottom: 0px;\">\n              ANTIQUE ITALIAN LICENSE PLATES, REPLICATED FROM OLD PHOTOS PROVIDED BY CUSTOMERS \n          </p>\n        </div>\n\n      <div class=\"col-sm-4 text-center\">\n        <img width=\"100%\" src=\"/assets/images/special/3456.jpg\" alt=\"\">\n      </div>\n\n      <div class=\"col-sm-4 text-center\">\n        <img width=\"100%\" src=\"/assets/images/special/statepolice6.jpg\" alt=\"\">\n      </div>\n\n      <div class=\"col-sm-4 text-center\">\n        <img width=\"100%\" src=\"/assets/images/special/b1324.jpg\" alt=\"\">\n      </div>\n\n      <p class=\"text-center\" style=\"padding: .5em\">\n          COMMEMORATIVE LICENSE PLATE <br>\n          FERRARI WORLLLD - ABU DHABI \n      </p>      \n\n      <p class=\"text-center\" style=\"padding: .5em\">\n          REPLICA OF A1936 MAINE <br> \n          STATE POLICE LICENSE PLATE \n      </p>\n\n      <p class=\"text-center\" style=\"padding-top: .5em\">\n          SPECIALTY LICENSE PLATE FOR CARS THE RIDE <br>\nIN DISNEY CALIFORNIA \n        </p>\n\n        <h6 class=\"text-center\">\n          <strong>Let us bring your ideas to life.</strong>\n        </h6>\n\n        <p class=\"text-center\">\n          <small>If you have a plate you would like us to make please contact us:</small>  \n        </p>\n\n        <h6 class=\"text-center\">\n            <strong>Phone: 1-800-491-2068</strong>\n          </h6>\n\n          <h6 class=\"text-center\">\n              <strong>Email: platemeister@licenseplates.tv Web: Special Request Form\n                </strong>\n            </h6>\n\n      </div>\n     \n  </div>\n\n</div> <!-- container-fluid -->"

/***/ }),

/***/ "./src/app/home/special/special.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/home/special/special.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-fluid {\n  background: #f5f9f8; }\n\np {\n  font-weight: 399;\n  color: #000;\n  font-size: 16px;\n  margin-bottom: 8px; }\n\nh6 {\n  text-transform: none;\n  color: #000;\n  font-size: 13px;\n  padding: .5em; }\n"

/***/ }),

/***/ "./src/app/home/special/special.component.ts":
/*!***************************************************!*\
  !*** ./src/app/home/special/special.component.ts ***!
  \***************************************************/
/*! exports provided: SpecialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpecialComponent", function() { return SpecialComponent; });
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

var SpecialComponent = /** @class */ (function () {
    function SpecialComponent() {
    }
    SpecialComponent.prototype.ngOnInit = function () {
    };
    SpecialComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-special',
            template: __webpack_require__(/*! ./special.component.html */ "./src/app/home/special/special.component.html"),
            styles: [__webpack_require__(/*! ./special.component.scss */ "./src/app/home/special/special.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SpecialComponent);
    return SpecialComponent;
}());



/***/ }),

/***/ "./src/app/home/special/special.module.ts":
/*!************************************************!*\
  !*** ./src/app/home/special/special.module.ts ***!
  \************************************************/
/*! exports provided: SpecialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpecialModule", function() { return SpecialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _special_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./special-routing.module */ "./src/app/home/special/special-routing.module.ts");
/* harmony import */ var _special_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./special.component */ "./src/app/home/special/special.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SpecialModule = /** @class */ (function () {
    function SpecialModule() {
    }
    SpecialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _special_routing_module__WEBPACK_IMPORTED_MODULE_2__["SpecialRoutingModule"]
            ],
            declarations: [_special_component__WEBPACK_IMPORTED_MODULE_3__["SpecialComponent"]]
        })
    ], SpecialModule);
    return SpecialModule;
}());



/***/ })

}]);
//# sourceMappingURL=home-special-special-module.js.map