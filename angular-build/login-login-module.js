(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./src/app/lib/service/auth/auth.service.ts":
/*!**************************************************!*\
  !*** ./src/app/lib/service/auth/auth.service.ts ***!
  \**************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        //$baseUrl = 'https://www.lptv.petalsaroma.in/api/v1/auth';
        this.$baseUrl = 'https://www.m.licenseplates.tv/api/v1/auth';
    }
    AuthService.prototype.login = function (params) {
        return this.http.get(this.$baseUrl + '/customerlogin?email=' + params.email + '&pass=' + params.password + '');
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/login/login-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/*! exports provided: LoginRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRoutingModule", function() { return LoginRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.component */ "./src/app/login/login.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
    }
];
var LoginRoutingModule = /** @class */ (function () {
    function LoginRoutingModule() {
    }
    LoginRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], LoginRoutingModule);
    return LoginRoutingModule;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div *ngIf=\"!fpass\" class=\"col-sm-12\">\n\n        <h4 class=\"txt-heading\">Welcome, Please Sign In</h4> <hr>\n\n         <br>\n          <h6 *ngIf=\"loading\" class=\"text-center\"> <img width=\"11%\" src=\"/assets/images/loader.svg\" alt=\"\"> checking..</h6>\n          \n          <div *ngIf=\"message\" class=\"alert text-center\" [ngClass]=\"message == 'Login successfully' ? 'alert-success' : 'alert-danger'\" role=\"alert\">\n              {{message}}\n            </div>\n\n            <div class=\"form-group\">\n              <label for=\"exampleInputEmail1\">Email address</label>\n              <input type=\"email\" [(ngModel)]=\"user.email\" #ctrl=\"ngModel\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\">\n            </div>\n\n            <div class=\"form-group\">\n              <label for=\"exampleInputPassword1\">Password</label>\n              <input type=\"password\" [(ngModel)]=\"user.password\" #ctrl=\"ngModel\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"Password\">\n            </div>\n            <!-- <div class=\"form-group form-check\">\n              <input type=\"checkbox\" class=\"form-check-input\" id=\"exampleCheck1\">\n              <label class=\"form-check-label\" for=\"exampleCheck1\">Check me out</label>\n            </div> -->\n            <button [disabled]=\"!user.email || !user.password\" type=\"submit\" (click)=\"authCheck()\" class=\"btn btn-block btn-lg btn-primary\">Submit</button> <br>\n\n            <a class=\"fpass-txt\" (click)=\"forgotPass()\" href=\"javascript:void(0)\">Forgot Password ?</a> <hr class=\"end\">  <br>\n\n            <h4 class=\"txt-heading\">New? Please Provide Your Billing Information</h4> <hr>\n\n            <p>Create a customer profile with Licenseplates.tv which allows you to shop faster, track the status of your current \n                      orders and review your previous orders.</p>\n\n            <h6 class=\"text-danger text-right\">* Required information</h6>  \n            \n            <h5>Company Details</h5>\n\n            <div class=\"form-group\">\n                <label for=\"exampleInputcname\">Company Name</label>\n                <input type=\"text\" [(ngModel)]=\"model.company_name\" #ctrl=\"ngModel\" class=\"form-control\" id=\"exampleInputcname\" placeholder=\"Company Name\">\n              </div> <br>\n\n              <h5>Address Details</h5>    \n\n              <div class=\"form-group row\">\n                  <div class=\"col-xs-11\">\n                      <label class=\"label\" for=\"exampleInputfname\">First Name:</label>\n                      <input type=\"text\" [(ngModel)]=\"model.fname\" #ctrl=\"ngModel\" class=\"form-control\" id=\"exampleInputfname\" placeholder=\"First Name\">\n                      <small *ngIf=\"!model.lname&&check\" id=\"emailHelp\" class=\"form-text text-muted text-danger\">this field is empty</small>\n                    </div>          \n                  <label for=\"inputEmail3\" class=\"col-xs-1 col-form-label text-danger\">*</label>\n              </div>\n\n              <div class=\"form-group row\">\n                  <div class=\"col-xs-11\">\n                      <label class=\"label\" for=\"exampleInputlname\">Last Name:</label>\n                      <input type=\"text\" [(ngModel)]=\"model.fname\" #ctrl=\"ngModel\" class=\"form-control\" id=\"exampleInputlname\" placeholder=\"Last Name\">\n                      <small *ngIf=\"!model.lname&&check\" id=\"emailHelp\" class=\"form-text text-muted text-danger\">this field is empty</small>\n                    </div>          \n                  <label for=\"inputEmail3\" class=\"col-xs-1 col-form-label text-danger\">*</label>\n              </div>\n\n              <div class=\"form-group row\">\n                  <div class=\"col-xs-11\">\n                      <label class=\"label\" for=\"exampleInputsaddress\">Street Address:</label>\n                      <input type=\"text\" [(ngModel)]=\"model.fname\" #ctrl=\"ngModel\" class=\"form-control\" id=\"exampleInputsaddress\" placeholder=\"Street Address\">\n                      <small *ngIf=\"!model.lname&&check\" id=\"emailHelp\" class=\"form-text text-muted text-danger\">this field is empty</small>\n                    </div>          \n                  <label for=\"inputEmail3\" class=\"col-xs-1 col-form-label text-danger\">*</label>\n              </div>\n\n              <div class=\"form-group row\">\n                  <div class=\"col-xs-11\">\n                      <label class=\"label\" for=\"exampleInputaddressl2\">Address Line 2:</label>\n                      <input type=\"text\" [(ngModel)]=\"model.fname\" #ctrl=\"ngModel\" class=\"form-control\" id=\"exampleInputaddressl2\" placeholder=\"Address Line 2\">\n                      <!-- <small *ngIf=\"!model.lname&&check\" id=\"emailHelp\" class=\"form-text text-muted text-danger\">this field is empty</small> -->\n                    </div>          \n                  <label for=\"inputEmail3\" class=\"col-xs-1 col-form-label text-danger\"></label>\n              </div>\n\n              <div class=\"form-group row\">\n                  <div class=\"col-xs-11\">\n                      <label class=\"label\" for=\"exampleInputCity\">City:</label>\n                      <input type=\"text\" [(ngModel)]=\"model.fname\" #ctrl=\"ngModel\" class=\"form-control\" id=\"exampleInputCity\" placeholder=\"City\">\n                      <small *ngIf=\"!model.lname&&check\" id=\"emailHelp\" class=\"form-text text-muted text-danger\">this field is empty</small>\n                    </div>          \n                  <label for=\"inputEmail3\" class=\"col-xs-1 col-form-label text-danger\">*</label>\n              </div>\n\n              <div class=\"form-group row\">\n                  <div class=\"col-xs-11\">        \n                      <label class=\"label\" for=\"exampleInputCountry\">Country:</label>        \n                     <select name=\"zone_country_id\" id=\"country\" (change)=\"checkCountry($event)\" class=\"form-control\"  id=\"exampleInputCountry\">\n                        <option *ngFor=\"let item of Countries\" value=\"{{item.countries_id}}\" select>{{item.countries_name}}</option>\n                      </select>\n                      <small *ngIf=\"!model.country&&check\" id=\"emailHelp\" class=\"form-text text-muted text-danger\">this field is empty</small>\n                    </div>          \n                  <label for=\"inputEmail3\" class=\"col-xs-1 col-form-label text-danger\">*</label>\n                </div>\n\n                <div class=\"form-group row\">\n                    <div class=\"col-xs-11\">        \n                        <label class=\"label\" for=\"exampleInputState\">State/Province:</label>        \n                       <select *ngIf=\"state\" name=\"zone_country_id\" id=\"country\" (change)=\"checkState($event)\" class=\"form-control\"  id=\"exampleInputState\">\n                          <option *ngFor=\"let item of States\" value=\"{{item.zone_name}}\" select>{{item.zone_name}}</option>\n                        </select>\n                        <input *ngIf=\"!state\" type=\"text\" [(ngModel)]=\"model.fname\" #ctrl=\"ngModel\" class=\"form-control\" id=\"exampleInputState\"  placeholder=\"State/Province\">\n                        <small *ngIf=\"!model.country&&check\" id=\"emailHelp\" class=\"form-text text-muted text-danger\">this field is empty</small>\n                      </div>          \n                    <label for=\"inputEmail3\" class=\"col-xs-1 col-form-label text-danger\">*</label>\n                  </div>\n              \n                  <div class=\"form-group row\">\n                      <div class=\"col-xs-11\">\n                          <label class=\"label\" for=\"exampleInputPost\">Post/Zip Code:</label>\n                          <input type=\"text\" [(ngModel)]=\"model.zipcode\" #ctrl=\"ngModel\" class=\"form-control\" id=\"exampleInputPost\" aria-describedby=\"textHelp\" placeholder=\"Post/Zip Code\">\n                          <small *ngIf=\"!model.zipcode&&check\" id=\"emailHelp\" class=\"form-text text-muted text-danger\">this field is empty</small>\n                        </div>          \n                      <label for=\"inputEmail3\" class=\"col-xs-1 col-form-label text-danger\">*</label>\n                  </div> <br>\n\n                  <h5>Additional Contact Details</h5>\n\n                  <div class=\"form-group row\">\n                      <div class=\"col-xs-11\">\n                          <label class=\"label\" for=\"exampleInputphone\">Telephone:</label>\n                          <input type=\"text\" [(ngModel)]=\"model.telephone\" #ctrl=\"ngModel\" class=\"form-control\" id=\"exampleInputphone\" placeholder=\"Telephone\">\n                          <small *ngIf=\"!model.telephone&&check\" id=\"emailHelp\" class=\"form-text text-muted text-danger\">this field is empty</small>\n                        </div>          \n                      <label for=\"inputEmail3\" class=\"col-xs-1 col-form-label text-danger\">*</label>\n                  </div> \n\n                  <div class=\"form-group row\">\n                      <div class=\"col-xs-11\">\n                          <label class=\"label\" for=\"exampleInputFax\">Fax Number:</label>\n                          <input type=\"text\" [(ngModel)]=\"model.fax\" #ctrl=\"ngModel\" class=\"form-control\" id=\"exampleInputFax\" placeholder=\"Fax Number\">\n                          <!-- <small *ngIf=\"!model.fax&&check\" id=\"emailHelp\" class=\"form-text text-muted text-danger\">this field is empty</small> -->\n                        </div>          \n                      <label for=\"inputEmail3\" class=\"col-xs-1 col-form-label text-danger\"></label>\n                  </div> <br>\n\n                  <h5>Login Details</h5>\n\n                  <div class=\"form-group row\">\n                      <div class=\"col-xs-11\">\n                          <label class=\"label\" for=\"exampleInputEmail2\">Email:</label>\n                          <input type=\"email\" [(ngModel)]=\"model.email\" #ctrl=\"ngModel\" class=\"form-control\" id=\"exampleInputEmail2\" aria-describedby=\"textHelp\" placeholder=\"Telephone\">\n                          <small *ngIf=\"!model.email&&check\" id=\"emailHelp\" class=\"form-text text-muted text-danger\">this field is empty</small>\n                        </div>          \n                      <label for=\"inputEmail3\" class=\"col-xs-1 col-form-label text-danger\">*</label>\n                  </div> \n\n                  <div class=\"form-group row\">\n                      <div class=\"col-xs-11\">\n                          <label class=\"label\" for=\"exampleInputPass2\">Password:</label>\n                          <input type=\"password\" [(ngModel)]=\"model.password\" #ctrl=\"ngModel\" class=\"form-control\" id=\"exampleInputPass2\" placeholder=\"Password\">\n                          <small *ngIf=\"!model.password&&check\" id=\"emailHelp\" class=\"form-text text-muted text-danger\">this field is empty</small>\n                        </div>          \n                      <label for=\"inputEmail3\" class=\"col-xs-1 col-form-label text-danger\">*</label>\n                  </div>     \n\n                  <div class=\"form-group row\">\n                      <div class=\"col-xs-11\">\n                          <label class=\"label\" for=\"exampleInputCPass2\">Confirm Password:</label>\n                          <input type=\"password\" [(ngModel)]=\"model.cpassword\" #ctrl=\"ngModel\" class=\"form-control\" id=\"exampleInputCPass2\" placeholder=\"Confirm Password\">\n                          <small *ngIf=\"!model.cpassword&&check\" id=\"emailHelp\" class=\"form-text text-muted text-danger\">this field is empty</small>\n                        </div>          \n                      <label for=\"inputEmail3\" class=\"col-xs-1 col-form-label text-danger\">*</label>\n                  </div> <br>\n\n                  <h5>Newsletter and Email Details</h5>\n\n                  <div id=\"news\" class=\"row\">\n                      <div class=\"form-check form-check-inline col\">\n                          <input class=\"form-check-input\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio1\" value=\"option1\">\n                          <label class=\"form-check-label\" for=\"inlineRadio1\">HTML</label>\n                        </div>\n                        <div class=\"form-check form-check-inline col\">\n                          <input class=\"form-check-input\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio2\" value=\"option2\">\n                          <label class=\"form-check-label\" for=\"inlineRadio2\">TEXT-Only</label>\n                        </div>\n                  </div>\n                  <button [disabled]=\"!model.email || !model.password\" type=\"submit\" (click)=\"authCheck2()\" class=\"btn btn-block btn-lg btn-primary\">Submit the Information</button> <br>\n                   <hr class=\"end\">  <br>\n                  \n         \n\n    </div>\n\n    <div *ngIf=\"fpass\" class=\"col-sm-12\">\n        <ng-container *ngIf=\"!success\">\n            <h4 class=\"txt-heading\">Forgotten Password</h4> <hr>\n        <p>Enter your email address below and we'll send you an email message containing your new password.</p>\n         <br>\n          <h6 *ngIf=\"loading\" class=\"text-center\"> <img width=\"11%\" src=\"/assets/images/loader.svg\" alt=\"\"> sending..</h6>\n          <!-- <h5 *ngIf=\"message\" class=\"text-center\" [ngClass]=\"message == 'Login successfully' ? 'text-success' : 'text-danger'\">{{message}}</h5> -->\n            <div class=\"form-group\">\n              <label for=\"exampleInputEmail3\">Email address</label>\n              <input type=\"email\" [(ngModel)]=\"model.email\" #ctrl=\"ngModel\" class=\"form-control\" id=\"exampleInputEmail3\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\">\n              <!-- <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small> -->\n            </div>\n            <button [disabled]=\"!model.email\" type=\"submit\" (click)=\"resetPass()\" class=\"btn btn-block btn-lg btn-primary\">Submit Email</button> <br>\n            <button type=\"submit\" (click)=\"back()\" class=\"btn btn-block btn-lg btn-secondary\">Back</button> <br>\n        </ng-container>\n        \n        <ng-container *ngIf=\"success\">\n            <div class=\"alert alert-success text-center\" role=\"alert\">\n                A new password has been sent to your email address.\n              </div>\n              <button type=\"submit\" (click)=\"back()\" class=\"btn btn-block btn-lg btn-secondary\">Back</button> <br>\n        </ng-container>\n            \n         \n\n    </div>\n\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1, h2, h3, h4, h5, h6 {\n  text-transform: none; }\n\n.txt-heading {\n  margin-bottom: 5px;\n  margin-top: 5px; }\n\nhr {\n  margin-top: 0px;\n  margin-bottom: 10px; }\n\n.form-group {\n  font-size: 15px; }\n\na.fpass-txt {\n  font-size: 16px;\n  color: #000; }\n\na.fpass-txt:hover {\n  color: #dc232f !important; }\n\n.form-group label {\n  text-transform: none;\n  font-weight: normal;\n  font-size: 17px;\n  color: #686868; }\n\n.form-control {\n  height: 40px;\n  font-size: 16px;\n  background-color: #f2f2f2; }\n\n.btn-primary {\n  color: #fff;\n  background-color: #dc232f !important;\n  border-color: #fff; }\n\n.text-danger {\n  color: #dc232f !important; }\n\n.end {\n  border-top: 3px solid #dc232f;\n  margin-top: 15px;\n  margin-bottom: 15px; }\n\n.form-group > .text-danger {\n  padding: .5em;\n  top: 15px; }\n\n.col-xs-1 label {\n  padding-left: 0px; }\n\n.col-xs-11 {\n  padding-right: 0px;\n  padding-left: 0px; }\n\n.form-group .label {\n  font-weight: normal;\n  padding-left: 0px; }\n\ninput[type=\"checkbox\"], input[type=\"radio\"] {\n  box-sizing: border-box;\n  padding: 0;\n  font-size: 19px;\n  -webkit-transform: scale(1.3);\n          transform: scale(1.3);\n  margin-right: 8px; }\n\n#news label {\n  color: #4e5151;\n  font-size: 17px;\n  font-weight: normal; }\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_lib_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/lib/service/auth/auth.service */ "./src/app/lib/service/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_lib_service_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/lib/service/product.service */ "./src/app/lib/service/product.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(_authService, router, _productService) {
        this._authService = _authService;
        this.router = router;
        this._productService = _productService;
        this.model = {};
        this.user = {};
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.getCountry();
    };
    LoginComponent.prototype.authCheck = function () {
        var _this = this;
        this.loading = true;
        this.message = '';
        this._authService.login(this.user)
            .subscribe(function (res) {
            console.log(res);
            _this.loading = false;
            if (res.success == 1) {
                _this.message = res.message;
                // this.fullName = res.firstname + ' ' + res.lastname;
                var currentUser = {
                    firstname: res.firstname,
                    lastname: res.lastname,
                    loggedIn: true
                };
                localStorage.currentUser = JSON.stringify(currentUser);
                _this._productService.loggedData(true);
                _this.router.navigateByUrl('cart');
            }
            else {
                _this.message = res.message;
            }
        }, function (err) {
            console.log(err.statusText);
            _this.loading = false;
            _this.message = err.statusText;
        });
    };
    LoginComponent.prototype.forgotPass = function () {
        this.fpass = true;
    };
    LoginComponent.prototype.getCountry = function () {
        var _this = this;
        fetch('https://www.m.licenseplates.tv/public/api/v1/auth/country')
            .then(function (res) {
            return res.json();
        })
            .then(function (myJson) {
            console.log(JSON.stringify(myJson));
            _this.Countries = myJson.countries;
            console.log(_this.Countries);
        });
    };
    LoginComponent.prototype.getState = function (val) {
        var _this = this;
        fetch('https://www.m.licenseplates.tv/public/api/v1/auth/state/' + val)
            .then(function (res) {
            return res.json();
        })
            .then(function (myJson) {
            console.log(JSON.stringify(myJson));
            _this.States = myJson.states;
            console.log(_this.States);
        });
    };
    LoginComponent.prototype.back = function () {
        this.model = {};
        this.fpass = !this.fpass;
    };
    LoginComponent.prototype.resetPass = function () {
        this.success = true;
    };
    LoginComponent.prototype.checkCountry = function (e) {
        console.log(e.target.value);
        if (e.target.value == '38' || e.target.value == '38') {
            this.state = true;
            return this.getState(e.target.value);
        }
        else {
            this.state = false;
        }
    };
    LoginComponent.prototype.checkState = function (val) {
        this.model.state = val.target.value;
        console.log(this.model.state);
    };
    LoginComponent.prototype.authCheck2 = function () {
        alert('Under Development!');
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [app_lib_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], app_lib_service_product_service__WEBPACK_IMPORTED_MODULE_3__["productService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/login/login-routing.module.ts");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _login_routing_module__WEBPACK_IMPORTED_MODULE_2__["LoginRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
            ],
            declarations: [_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]]
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map