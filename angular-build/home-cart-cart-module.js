(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-cart-cart-module"],{

/***/ "./src/app/home/cart/cart-routing.module.ts":
/*!**************************************************!*\
  !*** ./src/app/home/cart/cart-routing.module.ts ***!
  \**************************************************/
/*! exports provided: CartRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartRoutingModule", function() { return CartRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _cart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cart.component */ "./src/app/home/cart/cart.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _cart_component__WEBPACK_IMPORTED_MODULE_2__["CartsComponent"]
    }
];
var CartRoutingModule = /** @class */ (function () {
    function CartRoutingModule() {
    }
    CartRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], CartRoutingModule);
    return CartRoutingModule;
}());



/***/ }),

/***/ "./src/app/home/cart/cart.component.html":
/*!***********************************************!*\
  !*** ./src/app/home/cart/cart.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container-fluid\">\n\n  <div class=\"row\">\n\n    <div class=\"col-sm-12 mb-4 text-center\">\n        <h3>Shopping Cart</h3>\n    </div>\n\n    <ng-container *ngIf=\"!loggedIn\">\n      <div style=\"padding-left:0px;padding-right: 0px\" class=\"col-xs-5 col-sm-5 text-left\">\n        <img routerLink=\"/login\"  style=\"cursor: pointer;\" width=\"100%\" src=\"assets/images/member-login.png\" alt=\"member_login\">\n        <h6>&nbsp;Login to Checkout Faster</h6>\n      </div>\n  \n      <div class=\"col-xs-2 col-sm-2 text-center\">\n         <h4>or</h4> \n        </div>\n  \n        <div style=\"padding-left:0px;padding-right: 0px\" class=\"col-xs-5 col-sm-5 text-right\">\n            <img routerLink=\"/signup\" style=\"cursor: pointer;\" width=\"100%\" src=\"assets/images/create-account-cart.png\" alt=\"create_account\">\n            <h6 class=\"\">[help (?)]&nbsp;</h6>\n          </div>\n    </ng-container>\n    \n\n      </div> <!-- Row -->\n\n      <div class=\"row items\" *ngFor=\"let item of Items; index as i\">\n        <ng-container >\n          <div class=\"col-xs-6\">\n            <img *ngIf=\"!item.plateText1\" style=\"cursor: pointer;\" (click)=\"getProduct(item)\" class=\"card-img-top\" width=\"100%\" src=\"{{imgUrl}}{{item.productImage}}\" alt=\"{{item.productName}}\"> <br>\n\t\t\t<img *ngIf=\"item.plateText1\" class=\"card-img-top\" width=\"90%\" (click)=\"getProduct(item)\" src=\"https://www.licenseplates.tv/lpgenI.php?productId={{item.productModel}}&text1={{item.plateText1}}&text2={{item.plateText2}}&font={{font}}\" alt=\"{{item.productName}}\">\n            <div class=\"row\">\n              <div style=\"padding-left: 0px;padding-right: 0px\" class=\"col-xs-6 text-left\">\n                <h6 style=\"cursor: pointer;\" (click)=\"edit(item,i);\"><u>Edit</u> </h6>\n              </div>\n              <div style=\"padding-left: 0px;padding-right: 0px\" class=\"col-xs-6 text-right\">\n                <h6 style=\"cursor: pointer;\" (click)=\"remove(i);\"><u>Remove</u>  </h6>\n              </div>\n            </div>\n          </div>\n  \n          <div class=\"col-xs-6\">\n            <h6 style=\"width: 100%;margin: auto;color: #000\" class=\"card-title\">{{item.productName}}</h6> \n            <div class=\"row\">\n              <div style=\"padding-left: 0px;padding-right: 0px;margin-top: 2px\" class=\"col-xs-12\">\n                <h6 *ngIf=\"item.plateText1\">Text: <span class=\"a6x12mun\">{{item.plateText1}}</span> </h6> \n                <h6 *ngIf=\"item.plateText2\">Text 2: <span class=\"a6x12mun\">{{item.plateText2}}</span></h6>\n                <h6><strong class=\"text-danger\">${{item.TotalPrice | number : '1.2-2'}}</strong> </h6>\n              </div>\n              <div style=\"padding-left: 0px;padding-right: 0px;\" *ngIf=\"item.plateType == 'Add Black Plate Holder'\" class=\"col-xs-12\">\n                  <h6><small>Universal Plate Holder - {{item.plateType}}</small> </h6>\n                <img width=\"100\" src=\"assets/images/universalplateholder1.jpg\" alt=\"IMG_Black Plate Holder\">\n              </div>\n              <div style=\"padding-left: 0px;padding-right: 0px;\" *ngIf=\"item.plateType == 'Add CHROME Plate Holder'\" class=\"col-xs-12\">\n                  <h6><small>Universal Plate Holder - {{item.plateType}}</small> </h6>\n                  <img width=\"100\" src=\"assets/images/universalplateholder2.jpg\" alt=\"IMG_Black Plate Holder\">\n                </div> <br style=\"margin-top: 2px;\">\n              <div id=\"tile_div\" style=\"padding-left: 0px;padding-right: 0px;margin-top: 5px\" class=\"col-xs-12 text-center\">\n                <!-- <div class=\"col-xs-6 col-sm-6 text-center\"> -->\n                  <span class=\"tile_div\">\n                    <button (click)=\"decriment(item)\" class=\"btn\"><i class=\"fa fa-minus\" aria-hidden=\"true\"></i></button>&nbsp;\n                   &nbsp;<h5 class=\"txtnum\">{{item.itemQuantity}}</h5>&nbsp;\n                   <button (click)=\"incriment(item)\" class=\"btn\"><i class=\"fa fa-plus\" aria-hidden=\"true\"></i></button>&nbsp;\n                  </span>               \n                 <!-- </div> -->\n              </div>\n            </div>\n          </div>\n        </ng-container>\n      </div> <!--Row routerLink=\"/guestCheckout\"-->\n\n      <div class=\"row text-center\">\n        <div *ngIf=\"Items.length > 0\" class=\"col-sm-12\">\n            <img *ngIf=\"!loggedIn\" (click)=\"goCheckout()\" style=\"cursor: pointer\" width=\"90%\" src=\"assets/images/guest-checkout.png\" alt=\"guest_checkout\">\n            <img *ngIf=\"loggedIn\" (click)=\"goCheckout()\" style=\"cursor: pointer\" width=\"90%\" src=\"assets/images/checkout-btn.png\" alt=\"user_checkout\">\n        </div>     \n        <div *ngIf=\"Items.length == 0\" class=\"col-sm-12\"><br>\n          <h4>Cart is Empty!</h4> <br>\n        </div>\n        <div class=\"col-sm-12\"> <br>\n          <a routerLink=\"/\"><img style=\"cursor: pointer\" (click)=\"goHome()\" width=\"70%\" src=\"assets/images/continue-shopping-new.png\" alt=\"continue_shopping\"></a>\n        </div>    \n      </div>\n\n      <div class=\"row\"> <br>\n        <h4 style=\"color: #000;\"><strong>HELPUL INFORMATION:</strong> </h4>\n        <h4 style=\"color: #000;\"><strong>Call:</strong> &nbsp;<u>800-491-2068</u> or <u>954-485-0995</u> </h4>\n        <h4 style=\"color: #000;\"><strong>Email:</strong> &nbsp;<u>info@licenseplate.tv</u> </h4>\n      </div>\n       \n        \n\n  \n\n</div><!-- Container Fluid-->"

/***/ }),

/***/ "./src/app/home/cart/cart.component.scss":
/*!***********************************************!*\
  !*** ./src/app/home/cart/cart.component.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\nImport\r\n=========================== */\n/* -------------------------------------------------------------\n  Sass CSS3 Mixins! The Cross-Browser CSS3 Sass Library\n  By: Matthieu Aussaguel, http://www.mynameismatthieu.com, @matthieu_tweets\n\n  List of CSS3 Sass Mixins File to be @imported and @included as you need\n\n  The purpose of this library is to facilitate the use of CSS3 on different browsers avoiding HARD TO READ and NEVER\n  ENDING css files\n\n  note: All CSS3 Properties are being supported by Safari 5\n  more info: http://www.findmebyip.com/litmus/#css3-properties\n\n------------------------------------------------------------- */\n/*\nColor\n=========================== */\n/*\nFont Family\n=========================== */\n.material-icons {\n  font-family: 'Material Icons';\n  font-weight: normal;\n  line-height: 20px; }\n.material-icons {\n  font-family: 'Material Icons';\n  font-weight: normal;\n  line-height: 20px; }\n@font-face {\n  font-family: 'a6x12mun';\n  src: url(\"https://www.licenseplates.tv/fonts/truetype/ag_newgermandecalnew.ttf\"); }\n@font-face {\n  font-family: 'a6x12mun';\n  src: url('ag_newgermandecalnew.ttf'); }\n.a6x12mun {\n  font-family: 'a6x12mun'; }\n.form-control {\n  font-family: 'a6x12mun'; }\n#decals .customizeproductimage.imgselector.active, #decalsyear .customizeproductimage.imgselector.active {\n  border: 1px solid #090; }\n.decalslabel {\n  float: none !important; }\n.decalslabel {\n  clear: both;\n  float: left;\n  font-weight: 700;\n  min-width: 135px;\n  padding-top: 12px; }\n.a6x12mun {\n  font-family: 'a6x12mun'; }\nh3, h4, h5, h6 {\n  text-transform: none; }\n.mb-4 {\n  margin-bottom: 2.5em; }\nh6 {\n  font-size: 14px;\n  margin-bottom: 0px; }\nh4 {\n  font-size: 21px; }\n.items {\n  margin-bottom: 1em; }\n.tile_div {\n  margin-top: 2px; }\n.tile_div .btn {\n  border-radius: 50%;\n  background: #FFF;\n  border: 2px solid #000;\n  height: 35px;\n  width: 36px; }\n#tile_div .tile_div button, h5 {\n  display: block;\n  float: left; }\n#tile_div .tile_div button, h5 {\n  margin-right: 0; }\n.txtnum {\n  margin-bottom: 0px;\n  font-size: 24px;\n  padding: 0 4px 0 4px;\n  position: relative;\n  top: 6px;\n  color: #000; }\n.tile_div .fa {\n  color: #000; }\n.text-danger {\n  color: #d9232e; }\n"

/***/ }),

/***/ "./src/app/home/cart/cart.component.ts":
/*!*********************************************!*\
  !*** ./src/app/home/cart/cart.component.ts ***!
  \*********************************************/
/*! exports provided: CartsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartsComponent", function() { return CartsComponent; });
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



var CartsComponent = /** @class */ (function () {
    function CartsComponent(_productService, router) {
        this._productService = _productService;
        this.router = router;
        this.imgUrl = 'https://www.licenseplates.tv/images/';
        this.num = 1;
        this.User = {};
    }
    CartsComponent.prototype.ngOnInit = function () {
        this.getCartitems();
        this.getUser();
    };
    CartsComponent.prototype.getCartitems = function () {
        this.Items = JSON.parse(localStorage.getItem('cartItems'));
    };
    CartsComponent.prototype.getUser = function () {
        this.User = JSON.parse(localStorage.getItem('currentUser'));
        if (this.User) {
            this.loggedIn = true;
        }
    };
    CartsComponent.prototype.goHome = function () {
        this.router.navigateByUrl('');
    };
    CartsComponent.prototype.goCheckout = function () {
        this.router.navigateByUrl('guestCheckout');
    };
    CartsComponent.prototype.decriment = function (item) {
        if (item.itemQuantity !== 1) {
            item.itemQuantity -= 1;
            var unitVal = parseFloat(item.UnitPrice) + parseFloat(item.platePrice);
            // tslint:disable-next-line:radix
            item.TotalPrice = item.TotalPrice - unitVal;
            localStorage.cartItems = JSON.stringify(this.Items);
        }
    };
    CartsComponent.prototype.incriment = function (item) {
        item.itemQuantity += 1;
        console.log(this.Items);
        var unitVal = parseFloat(item.UnitPrice) + parseFloat(item.platePrice);
        // tslint:disable-next-line:radix
        item.TotalPrice = item.TotalPrice + unitVal;
        localStorage.cartItems = JSON.stringify(this.Items);
    };
    CartsComponent.prototype.remove = function (i) {
        this.Items.splice(i, 1);
        localStorage.cartItems = JSON.stringify(this.Items);
        this.getCartitemCount();
    };
    CartsComponent.prototype.edit = function (item, i) {
        item.indexVal = i;
        localStorage.editItem = JSON.stringify(item);
        this.router.navigateByUrl('editItem/' + item.productID);
    };
    CartsComponent.prototype.getProduct = function (item) {
        this.router.navigateByUrl('producDetails/' + item.productID);
    };
    CartsComponent.prototype.getCartitemCount = function () {
        var Items = JSON.parse(localStorage.getItem('cartItems'));
        var itemNum = Items.length;
        console.log(itemNum);
        this._productService.changeItem(itemNum);
    };
    CartsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cart',
            template: __webpack_require__(/*! ./cart.component.html */ "./src/app/home/cart/cart.component.html"),
            styles: [__webpack_require__(/*! ./cart.component.scss */ "./src/app/home/cart/cart.component.scss")]
        }),
        __metadata("design:paramtypes", [app_lib_service_product_service__WEBPACK_IMPORTED_MODULE_1__["productService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CartsComponent);
    return CartsComponent;
}());



/***/ }),

/***/ "./src/app/home/cart/cart.module.ts":
/*!******************************************!*\
  !*** ./src/app/home/cart/cart.module.ts ***!
  \******************************************/
/*! exports provided: CartModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartModule", function() { return CartModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _cart_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cart-routing.module */ "./src/app/home/cart/cart-routing.module.ts");
/* harmony import */ var _cart_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cart.component */ "./src/app/home/cart/cart.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CartModule = /** @class */ (function () {
    function CartModule() {
    }
    CartModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _cart_routing_module__WEBPACK_IMPORTED_MODULE_2__["CartRoutingModule"]
            ],
            declarations: [_cart_component__WEBPACK_IMPORTED_MODULE_3__["CartsComponent"]]
        })
    ], CartModule);
    return CartModule;
}());



/***/ })

}]);
//# sourceMappingURL=home-cart-cart-module.js.map