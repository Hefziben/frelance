(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-thankyou-thankyou-module"],{

/***/ "./src/app/home/thankyou/thankyou-routing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/home/thankyou/thankyou-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: ThankyouRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThankyouRoutingModule", function() { return ThankyouRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _thankyou_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./thankyou.component */ "./src/app/home/thankyou/thankyou.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _thankyou_component__WEBPACK_IMPORTED_MODULE_2__["ThankyouComponent"]
    }
];
var ThankyouRoutingModule = /** @class */ (function () {
    function ThankyouRoutingModule() {
    }
    ThankyouRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ThankyouRoutingModule);
    return ThankyouRoutingModule;
}());



/***/ }),

/***/ "./src/app/home/thankyou/thankyou.component.html":
/*!*******************************************************!*\
  !*** ./src/app/home/thankyou/thankyou.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\"> <hr>\n  <div class=\"row text-center\">\n    <h3>Thank You</h3>\n    <h6>Your oder was completed succesfully</h6>\n    <a class=\"btn btn-secondary\" routerLink=\"/\"> back to Home</a>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/home/thankyou/thankyou.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/home/thankyou/thankyou.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1, h2, h3, h4, h5, h6 {\n  text-transform: none; }\n\n.btn-secondary {\n  border: 1px solid #23c60c;\n  border-radius: 0px;\n  color: #23c60c; }\n\n.btn-secondary:hover {\n  color: #FFF;\n  background: #23c60c; }\n"

/***/ }),

/***/ "./src/app/home/thankyou/thankyou.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/home/thankyou/thankyou.component.ts ***!
  \*****************************************************/
/*! exports provided: ThankyouComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThankyouComponent", function() { return ThankyouComponent; });
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

var ThankyouComponent = /** @class */ (function () {
    function ThankyouComponent() {
    }
    ThankyouComponent.prototype.ngOnInit = function () {
    };
    ThankyouComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-thankyou',
            template: __webpack_require__(/*! ./thankyou.component.html */ "./src/app/home/thankyou/thankyou.component.html"),
            styles: [__webpack_require__(/*! ./thankyou.component.scss */ "./src/app/home/thankyou/thankyou.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ThankyouComponent);
    return ThankyouComponent;
}());



/***/ }),

/***/ "./src/app/home/thankyou/thankyou.module.ts":
/*!**************************************************!*\
  !*** ./src/app/home/thankyou/thankyou.module.ts ***!
  \**************************************************/
/*! exports provided: ThankyouModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThankyouModule", function() { return ThankyouModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _thankyou_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./thankyou-routing.module */ "./src/app/home/thankyou/thankyou-routing.module.ts");
/* harmony import */ var _thankyou_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./thankyou.component */ "./src/app/home/thankyou/thankyou.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ThankyouModule = /** @class */ (function () {
    function ThankyouModule() {
    }
    ThankyouModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _thankyou_routing_module__WEBPACK_IMPORTED_MODULE_2__["ThankyouRoutingModule"]
            ],
            declarations: [_thankyou_component__WEBPACK_IMPORTED_MODULE_3__["ThankyouComponent"]]
        })
    ], ThankyouModule);
    return ThankyouModule;
}());



/***/ })

}]);
//# sourceMappingURL=home-thankyou-thankyou-module.js.map