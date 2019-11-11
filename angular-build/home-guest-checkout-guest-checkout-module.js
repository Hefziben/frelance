(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-guest-checkout-guest-checkout-module"],{

/***/ "./src/app/home/guest-checkout/country.ts":
/*!************************************************!*\
  !*** ./src/app/home/guest-checkout/country.ts ***!
  \************************************************/
/*! exports provided: countries */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "countries", function() { return countries; });
var countries = [
    { code: 'US', name: 'United States' },
    { code: 'GB', name: 'United Kingdom' },
    { code: 'CA', name: 'Canada' },
    { code: 'AF', name: 'Afghanistan' },
    { code: 'AX', name: 'Aland Islands' },
    { code: 'AL', name: 'Albania' },
    { code: 'DZ', name: 'Algeria' },
    { code: 'AS', name: 'American Samoa' },
    { code: 'AD', name: 'Andorra' },
    { code: 'AO', name: 'Angola' },
    { code: 'AI', name: 'Anguilla' },
    { code: 'AQ', name: 'Antarctica' },
    { code: 'AG', name: 'Antigua And Barbuda' },
    { code: 'AR', name: 'Argentina' },
    { code: 'AM', name: 'Armenia' },
    { code: 'AN', name: 'Netherlands Antilles' },
    { code: 'AW', name: 'Aruba' },
    { code: 'AU', name: 'Australia' },
    { code: 'AT', name: 'Austria' },
    { code: 'AZ', name: 'Azerbaijan' },
    { code: 'BS', name: 'Bahamas' },
    { code: 'BH', name: 'Bahrain' },
    { code: 'BD', name: 'Bangladesh' },
    { code: 'BB', name: 'Barbados' },
    { code: 'BY', name: 'Belarus' },
    { code: 'BE', name: 'Belgium' },
    { code: 'BZ', name: 'Belize' },
    { code: 'BJ', name: 'Benin' },
    { code: 'BM', name: 'Bermuda' },
    { code: 'BT', name: 'Bhutan' },
    { code: 'BO', name: 'Bolivia' },
    { code: 'BA', name: 'Bosnia And Herzegovina' },
    { code: 'BW', name: 'Botswana' },
    { code: 'BV', name: 'Bouvet Island' },
    { code: 'BR', name: 'Brazil' },
    { code: 'IO', name: 'British Indian Ocean Territory' },
    { code: 'BN', name: 'Brunei Darussalam' },
    { code: 'BG', name: 'Bulgaria' },
    { code: 'BF', name: 'Burkina Faso' },
    { code: 'BI', name: 'Burundi' },
    { code: 'KH', name: 'Cambodia' },
    { code: 'CM', name: 'Cameroon' },
    { code: 'CA', name: 'Canada' },
    { code: 'CV', name: 'Cape Verde' },
    { code: 'KY', name: 'Cayman Islands' },
    { code: 'CF', name: 'Central African Republic' },
    { code: 'TD', name: 'Chad' },
    { code: 'CL', name: 'Chile' },
    { code: 'CN', name: 'China' },
    { code: 'CX', name: 'Christmas Island' },
    { code: 'CC', name: 'Cocos (Keeling) Islands' },
    { code: 'CO', name: 'Colombia' },
    { code: 'KM', name: 'Comoros' },
    { code: 'CG', name: 'Congo' },
    { code: 'CD', name: 'Congo, Democratic Republic' },
    { code: 'CK', name: 'Cook Islands' },
    { code: 'CR', name: 'Costa Rica' },
    { code: 'CI', name: 'Cote D\'Ivoire' },
    { code: 'HR', name: 'Croatia' },
    { code: 'CU', name: 'Cuba' },
    { code: 'CY', name: 'Cyprus' },
    { code: 'CZ', name: 'Czech Republic' },
    { code: 'DK', name: 'Denmark' },
    { code: 'DJ', name: 'Djibouti' },
    { code: 'DM', name: 'Dominica' },
    { code: 'DO', name: 'Dominican Republic' },
    { code: 'EC', name: 'Ecuador' },
    { code: 'EG', name: 'Egypt' },
    { code: 'SV', name: 'El Salvador' },
    { code: 'GQ', name: 'Equatorial Guinea' },
    { code: 'ER', name: 'Eritrea' },
    { code: 'EE', name: 'Estonia' },
    { code: 'ET', name: 'Ethiopia' },
    { code: 'FK', name: 'Falkland Islands (Malvinas)' },
    { code: 'FO', name: 'Faroe Islands' },
    { code: 'FJ', name: 'Fiji' },
    { code: 'FI', name: 'Finland' },
    { code: 'FR', name: 'France' },
    { code: 'GF', name: 'French Guiana' },
    { code: 'PF', name: 'French Polynesia' },
    { code: 'TF', name: 'French Southern Territories' },
    { code: 'GA', name: 'Gabon' },
    { code: 'GM', name: 'Gambia' },
    { code: 'GE', name: 'Georgia' },
    { code: 'DE', name: 'Germany' },
    { code: 'GH', name: 'Ghana' },
    { code: 'GI', name: 'Gibraltar' },
    { code: 'GR', name: 'Greece' },
    { code: 'GL', name: 'Greenland' },
    { code: 'GD', name: 'Grenada' },
    { code: 'GP', name: 'Guadeloupe' },
    { code: 'GU', name: 'Guam' },
    { code: 'GT', name: 'Guatemala' },
    { code: 'GG', name: 'Guernsey' },
    { code: 'GN', name: 'Guinea' },
    { code: 'GW', name: 'Guinea-Bissau' },
    { code: 'GY', name: 'Guyana' },
    { code: 'HT', name: 'Haiti' },
    { code: 'HM', name: 'Heard Island & Mcdonald Islands' },
    { code: 'VA', name: 'Holy See (Vatican City State)' },
    { code: 'HN', name: 'Honduras' },
    { code: 'HK', name: 'Hong Kong' },
    { code: 'HU', name: 'Hungary' },
    { code: 'IS', name: 'Iceland' },
    { code: 'IN', name: 'India' },
    { code: 'ID', name: 'Indonesia' },
    { code: 'IR', name: 'Iran, Islamic Republic Of' },
    { code: 'IQ', name: 'Iraq' },
    { code: 'IE', name: 'Ireland' },
    { code: 'IM', name: 'Isle Of Man' },
    { code: 'IL', name: 'Israel' },
    { code: 'IT', name: 'Italy' },
    { code: 'JM', name: 'Jamaica' },
    { code: 'JP', name: 'Japan' },
    { code: 'JE', name: 'Jersey' },
    { code: 'JO', name: 'Jordan' },
    { code: 'KZ', name: 'Kazakhstan' },
    { code: 'KE', name: 'Kenya' },
    { code: 'KI', name: 'Kiribati' },
    { code: 'KR', name: 'Korea' },
    { code: 'KW', name: 'Kuwait' },
    { code: 'KG', name: 'Kyrgyzstan' },
    { code: 'LA', name: 'Lao People\'s Democratic Republic' },
    { code: 'LV', name: 'Latvia' },
    { code: 'LB', name: 'Lebanon' },
    { code: 'LS', name: 'Lesotho' },
    { code: 'LR', name: 'Liberia' },
    { code: 'LY', name: 'Libyan Arab Jamahiriya' },
    { code: 'LI', name: 'Liechtenstein' },
    { code: 'LT', name: 'Lithuania' },
    { code: 'LU', name: 'Luxembourg' },
    { code: 'MO', name: 'Macao' },
    { code: 'MK', name: 'Macedonia' },
    { code: 'MG', name: 'Madagascar' },
    { code: 'MW', name: 'Malawi' },
    { code: 'MY', name: 'Malaysia' },
    { code: 'MV', name: 'Maldives' },
    { code: 'ML', name: 'Mali' },
    { code: 'MT', name: 'Malta' },
    { code: 'MH', name: 'Marshall Islands' },
    { code: 'MQ', name: 'Martinique' },
    { code: 'MR', name: 'Mauritania' },
    { code: 'MU', name: 'Mauritius' },
    { code: 'YT', name: 'Mayotte' },
    { code: 'MX', name: 'Mexico' },
    { code: 'FM', name: 'Micronesia, Federated States Of' },
    { code: 'MD', name: 'Moldova' },
    { code: 'MC', name: 'Monaco' },
    { code: 'MN', name: 'Mongolia' },
    { code: 'ME', name: 'Montenegro' },
    { code: 'MS', name: 'Montserrat' },
    { code: 'MA', name: 'Morocco' },
    { code: 'MZ', name: 'Mozambique' },
    { code: 'MM', name: 'Myanmar' },
    { code: 'NA', name: 'Namibia' },
    { code: 'NR', name: 'Nauru' },
    { code: 'NP', name: 'Nepal' },
    { code: 'NL', name: 'Netherlands' },
    { code: 'AN', name: 'Netherlands Antilles' },
    { code: 'NC', name: 'New Caledonia' },
    { code: 'NZ', name: 'New Zealand' },
    { code: 'NI', name: 'Nicaragua' },
    { code: 'NE', name: 'Niger' },
    { code: 'NG', name: 'Nigeria' },
    { code: 'NU', name: 'Niue' },
    { code: 'NF', name: 'Norfolk Island' },
    { code: 'MP', name: 'Northern Mariana Islands' },
    { code: 'NO', name: 'Norway' },
    { code: 'OM', name: 'Oman' },
    { code: 'PK', name: 'Pakistan' },
    { code: 'PW', name: 'Palau' },
    { code: 'PS', name: 'Palestinian Territory, Occupied' },
    { code: 'PA', name: 'Panama' },
    { code: 'PG', name: 'Papua New Guinea' },
    { code: 'PY', name: 'Paraguay' },
    { code: 'PE', name: 'Peru' },
    { code: 'PH', name: 'Philippines' },
    { code: 'PN', name: 'Pitcairn' },
    { code: 'PL', name: 'Poland' },
    { code: 'PT', name: 'Portugal' },
    { code: 'PR', name: 'Puerto Rico' },
    { code: 'QA', name: 'Qatar' },
    { code: 'RE', name: 'Reunion' },
    { code: 'RO', name: 'Romania' },
    { code: 'RU', name: 'Russian Federation' },
    { code: 'RW', name: 'Rwanda' },
    { code: 'BL', name: 'Saint Barthelemy' },
    { code: 'SH', name: 'Saint Helena' },
    { code: 'KN', name: 'Saint Kitts And Nevis' },
    { code: 'LC', name: 'Saint Lucia' },
    { code: 'MF', name: 'Saint Martin' },
    { code: 'PM', name: 'Saint Pierre And Miquelon' },
    { code: 'VC', name: 'Saint Vincent And Grenadines' },
    { code: 'WS', name: 'Samoa' },
    { code: 'SM', name: 'San Marino' },
    { code: 'ST', name: 'Sao Tome And Principe' },
    { code: 'SA', name: 'Saudi Arabia' },
    { code: 'SN', name: 'Senegal' },
    { code: 'RS', name: 'Serbia' },
    { code: 'SC', name: 'Seychelles' },
    { code: 'SL', name: 'Sierra Leone' },
    { code: 'SG', name: 'Singapore' },
    { code: 'SK', name: 'Slovakia' },
    { code: 'SI', name: 'Slovenia' },
    { code: 'SB', name: 'Solomon Islands' },
    { code: 'SO', name: 'Somalia' },
    { code: 'ZA', name: 'South Africa' },
    { code: 'GS', name: 'South Georgia And Sandwich Isl.' },
    { code: 'ES', name: 'Spain' },
    { code: 'LK', name: 'Sri Lanka' },
    { code: 'SD', name: 'Sudan' },
    { code: 'SR', name: 'Suriname' },
    { code: 'SJ', name: 'Svalbard And Jan Mayen' },
    { code: 'SZ', name: 'Swaziland' },
    { code: 'SE', name: 'Sweden' },
    { code: 'CH', name: 'Switzerland' },
    { code: 'SY', name: 'Syrian Arab Republic' },
    { code: 'TW', name: 'Taiwan' },
    { code: 'TJ', name: 'Tajikistan' },
    { code: 'TZ', name: 'Tanzania' },
    { code: 'TH', name: 'Thailand' },
    { code: 'TL', name: 'Timor-Leste' },
    { code: 'TG', name: 'Togo' },
    { code: 'TK', name: 'Tokelau' },
    { code: 'TO', name: 'Tonga' },
    { code: 'TT', name: 'Trinidad And Tobago' },
    { code: 'TN', name: 'Tunisia' },
    { code: 'TR', name: 'Turkey' },
    { code: 'TM', name: 'Turkmenistan' },
    { code: 'TC', name: 'Turks And Caicos Islands' },
    { code: 'TV', name: 'Tuvalu' },
    { code: 'UG', name: 'Uganda' },
    { code: 'UA', name: 'Ukraine' },
    { code: 'AE', name: 'United Arab Emirates' },
    { code: 'GB', name: 'United Kingdom' },
    { code: 'US', name: 'United States' },
    { code: 'UM', name: 'United States Outlying Islands' },
    { code: 'UY', name: 'Uruguay' },
    { code: 'UZ', name: 'Uzbekistan' },
    { code: 'VU', name: 'Vanuatu' },
    { code: 'VE', name: 'Venezuela' },
    { code: 'VN', name: 'Viet Nam' },
    { code: 'VG', name: 'Virgin Islands, British' },
    { code: 'VI', name: 'Virgin Islands, U.S.' },
    { code: 'WF', name: 'Wallis And Futuna' },
    { code: 'EH', name: 'Western Sahara' },
    { code: 'YE', name: 'Yemen' },
    { code: 'ZM', name: 'Zambia' },
    { code: 'ZW', name: 'Zimbabwe' },
];


/***/ }),

/***/ "./src/app/home/guest-checkout/guest-checkout-routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/home/guest-checkout/guest-checkout-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: GuestCheckOutRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuestCheckOutRoutingModule", function() { return GuestCheckOutRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _guest_checkout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guest-checkout.component */ "./src/app/home/guest-checkout/guest-checkout.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _guest_checkout_component__WEBPACK_IMPORTED_MODULE_2__["GuestCheckoutComponent"]
    }
];
var GuestCheckOutRoutingModule = /** @class */ (function () {
    function GuestCheckOutRoutingModule() {
    }
    GuestCheckOutRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], GuestCheckOutRoutingModule);
    return GuestCheckOutRoutingModule;
}());



/***/ }),

/***/ "./src/app/home/guest-checkout/guest-checkout.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/home/guest-checkout/guest-checkout.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div *ngIf=\"!doPaypal\" class=\"row\">\n\n    <div class=\"col-sm-12\">\n      <h6 *ngIf=\"!loggedIn\" class=\"txt-badge\"> <span style=\"background: #000;padding: 3px;\">GUEST CHECKOUT</span> </h6>\n      <h6 *ngIf=\"loggedIn\" class=\"txt-badge\"> <span style=\"background: #000;padding: 3px;\">CHECKOUT</span> </h6>\n      <h4>BILLING INFORMATION</h4>\n      <h5> <span class=\"text-danger\">*</span> = Required Information</h5> \n\n      <div class=\"form-group row\">\n          <div class=\"col-xs-11\">\n              <input type=\"text\" [(ngModel)]=\"model.fname\" #ctrl=\"ngModel\" class=\"form-control \" id=\"exampleInputText\" aria-describedby=\"textHelp\" placeholder=\"First Name\">\n              <small *ngIf=\"!model.fname&&check\" id=\"emailHelp\" class=\"form-text text-muted text-danger\">this field is empty</small>\n            </div>          \n          <label for=\"inputEmail3\" class=\"col-xs-1 col-form-label text-danger\">*</label>\n        </div>\n        \n\n    <div class=\"form-group row\">\n        <div class=\"col-xs-11\">\n            <input type=\"text\" [(ngModel)]=\"model.lname\" #ctrl=\"ngModel\" class=\"form-control \" id=\"exampleInputText\" aria-describedby=\"textHelp\" placeholder=\"Last Name\">\n            <small *ngIf=\"!model.lname&&check\" id=\"emailHelp\" class=\"form-text text-muted text-danger\">this field is empty</small>\n          </div>          \n        <label for=\"inputEmail3\" class=\"col-xs-1 col-form-label text-danger\">*</label>\n      </div>\n\n    <div class=\"form-group row\">\n        <div class=\"col-xs-11\">\n            <input type=\"text\" [(ngModel)]=\"model.company\" #ctrl=\"ngModel\" class=\"form-control \" id=\"exampleInputText\" aria-describedby=\"textHelp\" placeholder=\"Company/Care Of\">\n            <!-- <small *ngIf=\"!model.company&&check\" id=\"emailHelp\" class=\"form-text text-muted text-danger\">this field is empty</small> -->\n          </div>          \n        <label for=\"inputEmail3\" class=\"col-xs-1 col-form-label text-danger\"></label>       \n        <!-- <span class=\"text-danger\">*</span> -->\n      </div>\n\n    <div class=\"form-group row\">\n        <div class=\"col-xs-11\">\n            <input type=\"text\" [(ngModel)]=\"model.street_address\" #ctrl=\"ngModel\" class=\"form-control \" id=\"exampleInputText\" aria-describedby=\"textHelp\" placeholder=\"Street Address\">\n            <small *ngIf=\"!model.street_address&&check\" id=\"emailHelp\" class=\"form-text text-muted text-danger\">this field is empty</small>\n          </div>          \n        <label for=\"inputEmail3\" class=\"col-xs-1 col-form-label text-danger\">*</label>\n      </div>\n\n      <div class=\"form-group row\">\n          <div class=\"col-xs-11\">\n              <input type=\"text\" [(ngModel)]=\"model.address_line_1\" #ctrl=\"ngModel\" class=\"form-control \" id=\"exampleInputText\" aria-describedby=\"textHelp\" placeholder=\"Address Line 2\">\n              <!-- <small *ngIf=\"!model.address_line_1&&check\" id=\"emailHelp\" class=\"form-text text-muted text-danger\">this field is empty</small> -->\n            </div>          \n          <label for=\"inputEmail3\" class=\"col-xs-1 col-form-label text-danger\"></label>         \n          <!-- <span class=\"text-danger\">*</span> -->\n        </div>\n\n\n  <div class=\"form-group row\">\n      <div class=\"col-xs-11\">\n          <input type=\"text\" [(ngModel)]=\"model.city\" #ctrl=\"ngModel\" class=\"form-control \" id=\"exampleInputText\" aria-describedby=\"textHelp\" placeholder=\"City\">\n          <small *ngIf=\"!model.city&&check\" id=\"emailHelp\" class=\"form-text text-muted text-danger\">this field is empty</small>\n        </div>          \n      <label for=\"inputEmail3\" class=\"col-xs-1 col-form-label text-danger\">*</label>\n    </div>\n\n    <div class=\"form-group row\">\n        <div class=\"col-xs-11\">\n            <!-- <input type=\"text\" [(ngModel)]=\"model.country\" #ctrl=\"ngModel\" class=\"form-control \" id=\"exampleInputText\" aria-describedby=\"textHelp\" placeholder=\"Country\"> -->           \n              <!-- <option selected>{{this.country}}</option> value=\"223\" us -->\n            <select name=\"zone_country_id\" id=\"country\" (change)=\"checkCountry($event)\" class=\"form-control\"  id=\"exampleFormControlSelect1\">\n              <option *ngFor=\"let item of Countries\" (click)=\"getItem(item)\" value=\"{{item.code}}\" select>{{item.name}}</option>\n            </select>\n            <small *ngIf=\"!model.country&&check\" id=\"emailHelp\" class=\"form-text text-muted text-danger\">this field is empty</small>\n          </div>          \n        <label for=\"inputEmail3\" class=\"col-xs-1 col-form-label text-danger\">*</label>\n      </div>\n\n\n      <div class=\"form-group row\">\n          <div class=\"col-xs-11\">\n              <input *ngIf=\"model.country != 'Canada' && model.country != 'United States'\" type=\"text\" [(ngModel)]=\"model.state\" #ctrl=\"ngModel\" class=\"form-control \" id=\"exampleInputText\" aria-describedby=\"textHelp\" placeholder=\"State/Province\">\n              \n              <select class=\"form-control\" *ngIf=\"model.country == 'Canada'\" (change)=\"CheckState($event)\" [(ngModel)]=\"state\" name=\"zone_id\" id=\"stateZone\"> \n                <option>Please select ...</option>\n                <option (click)=\"checkState($event.target.innerText)\" value=\"66\" select>Alberta</option>\n                <option (click)=\"checkState($event.target.innerText)\" value=\"67\">British Columbia</option>\n                <option (click)=\"checkState($event.target.innerText)\" value=\"68\">Manitoba</option>\n                <option (click)=\"checkState($event.target.innerText)\" value=\"70\">New Brunswick</option>\n                <option (click)=\"checkState($event.target.innerText)\" value=\"69\">Newfoundland</option>\n                <option (click)=\"checkState($event.target.innerText)\" value=\"72\">Northwest Territories</option>\n                <option (click)=\"checkState($event.target.innerText)\" value=\"71\">Nova Scotia</option>\n                <option (click)=\"checkState($event.target.innerText)\" value=\"73\">Nunavut</option>\n                <option (click)=\"checkState($event.target.innerText)\" value=\"74\">Ontario</option>\n                <option (click)=\"checkState($event.target.innerText)\" value=\"75\">Prince Edward Island</option>\n                <option (click)=\"checkState($event.target.innerText)\" value=\"76\">Quebec</option>\n                <option (click)=\"checkState($event.target.innerText)\" value=\"77\">Saskatchewan</option>\n                <option (click)=\"checkState($event.target.innerText)\" value=\"78\">Yukon Territory</option>\n              </select>\n\n              <select *ngIf=\"model.country == 'United States'\" [(ngModel)]=\"state\" (change)=\"CheckState($event)\" name=\"zone_id\" id=\"stateZone\" class=\"form-control\">\n                <option>Please select ...</option>\n                <option (click)=\"checkState($event.target.innerText)\" value=\"1\" select>Alabama</option>\n                <option (click)=\"checkState($event.target.innerText)\" value=\"2\">Alaska</option>\n                <option (click)=\"checkState($event.target.innerText)\" value=\"3\">American Samoa</option>\n                <option (click)=\"checkState($event.target.innerText)\" value=\"4\">Arizona</option>\n                <option (click)=\"checkState($event.target.innerText)\" value=\"5\">Arkansas</option>\n                <option (click)=\"checkState($event.target.innerText)\" value=\"6\">Armed Forces Africa</option>\n                <option (click)=\"checkState($event.target.innerText)\" value=\"7\">Armed Forces Americas</option>\n                <option (click)=\"checkState($event.target.innerText)\" value=\"8\">Armed Forces Canada</option>\n                <option (click)=\"checkState($event.target.innerText)\" value=\"9\">Armed Forces Europe</option>\n                <option (click)=\"checkState($event.target.innerText)\" value=\"10\">Armed Forces Middle East</option>\n                <option (click)=\"checkState($event.target.innerText)\" value=\"11\">Armed Forces Pacific</option>\n                <option (click)=\"checkState($event.target.innerText)\" value=\"12\">California</option>\n                <option (click)=\"checkState($event.target.innerText)\" value=\"13\">Colorado</option>\n                <option (click)=\"checkState($event.target.innerText)\" value=\"14\">Connecticut</option>\n                <option (click)=\"checkState($event.target.innerText)\" value=\"15\">Delaware</option>\n                <option (click)=\"checkState($event.target.innerText)\" value=\"16\">District of Columbia</option>\n                <option (click)=\"checkState($event.target.innerText)\" value=\"17\">Federated States Of Micronesia</option>\n                <option (click)=\"checkState($event.target.innerText)\" value=\"18\">Florida</option>\n                <option (click)=\"checkState($event.target.innerText)\" value=\"19\">Georgia</option>\n                <option (click)=\"checkState($event.target.innerText)\" value=\"20\">Guam</option>\n                <option (click)=\"checkState($event.target.innerText)\" value=\"21\">Hawaii</option>\n                <option (click)=\"checkState($event.target.innerText)\" value=\"22\">Idaho</option>\n                <option (click)=\"checkState($event.target.innerText)\" value=\"23\">Illinois</option>\n                <option (click)=\"checkState($event.target.innerText)\" value=\"24\">Indiana</option>\n                <option (click)=\"checkState($event.target.innerText)\" value=\"25\">Iowa</option>\n                <option (click)=\"checkState($event.target.innerText)\" value=\"26\">Kansas</option>\n                <option (click)=\"checkState($event.target.innerText)\" value=\"27\">Kentucky</option>\n                <option (click)=\"checkState($event.target.innerText)\" value=\"28\">Louisiana</option>\n                <option (click)=\"checkState($event.target.innerText)\" value=\"29\">Maine</option>\n                <option (click)=\"checkState($event.target.innerText)\" value=\"30\">Marshall Islands</option>\n                <option (click)=\"checkState($event.target.innerText)\" value=\"31\">Maryland</option>\n                <option (click)=\"checkState($event.target.innerText)\" value=\"32\">Massachusetts</option>\n                <option (click)=\"checkState($event.target.innerText)\" value=\"33\">Michigan</option>\n                <option (click)=\"checkState($event.target.innerText)\" value=\"34\">Minnesota</option>\n                <option (click)=\"checkState($event.target.innerText)\" value=\"35\">Mississippi</option>\n                <option (click)=\"checkState($event.target.innerText)\" value=\"36\">Missouri</option>\n                <option (click)=\"checkState($event.target.innerText)\" value=\"37\">Montana</option>\n                <option (click)=\"checkState($event.target.innerText)\" value=\"38\">Nebraska</option>\n                <option (click)=\"checkState($event.target.innerText)\" value=\"39\">Nevada</option>\n                <option (click)=\"checkState($event.target.innerText)\" value=\"40\">New Hampshire</option>\n                <option (click)=\"checkState($event.target.innerText)\" value=\"41\">New Jersey</option>\n                <option (click)=\"checkState($event.target.innerText)\" value=\"42\">New Mexico</option>\n                <option (click)=\"checkState($event.target.innerText)\" value=\"43\">New York</option>\n                <option (click)=\"checkState($event.target.innerText)\" value=\"44\">North Carolina</option>\n                <option (click)=\"checkState($event.target.innerText)\" value=\"45\">North Dakota</option>\n                <option (click)=\"checkState($event.target.innerText)\" value=\"46\">Northern Mariana Islands</option>\n                <option (click)=\"checkState($event.target.innerText)\" value=\"47\">Ohio</option>\n                <option (click)=\"checkState($event.target.innerText)\" value=\"48\">Oklahoma</option>\n                <option (click)=\"checkState($event.target.innerText)\" value=\"49\">Oregon</option>\n                <option (click)=\"checkState($event.target.innerText)\" value=\"50\">Palau</option>\n                <option (click)=\"checkState($event.target.innerText)\" value=\"51\">Pennsylvania</option>\n                <option (click)=\"checkState($event.target.innerText)\" value=\"52\">Puerto Rico</option>\n                <option (click)=\"checkState($event.target.innerText)\" value=\"53\">Rhode Island</option>\n                <option (click)=\"checkState($event.target.innerText)\" value=\"54\">South Carolina</option>\n                <option (click)=\"checkState($event.target.innerText)\" value=\"55\">South Dakota</option>\n                <option (click)=\"checkState($event.target.innerText)\" value=\"56\">Tennessee</option>\n                <option (click)=\"checkState($event.target.innerText)\" value=\"57\">Texas</option>\n                <option (click)=\"checkState($event.target.innerText)\" value=\"58\">Utah</option>\n                <option (click)=\"checkState($event.target.innerText)\" value=\"59\">Vermont</option>\n                <option (click)=\"checkState($event.target.innerText)\" value=\"60\">Virgin Islands</option>\n                <option (click)=\"checkState($event.target.innerText)\" value=\"61\">Virginia</option>\n                <option (click)=\"checkState($event.target.innerText)\" value=\"62\">Washington</option>\n                <option (click)=\"checkState($event.target.innerText)\" value=\"63\">West Virginia</option>\n                <option (click)=\"checkState($event.target.innerText)\" value=\"64\">Wisconsin</option>\n                <option (click)=\"checkState($event.target.innerText)\" value=\"65\">Wyoming</option>\n              </select>\n              <small *ngIf=\"!model.state&&check\" id=\"emailHelp\" class=\"form-text text-muted text-danger\">this field is empty</small>\n            </div>          \n          <label for=\"inputEmail3\" class=\"col-xs-1 col-form-label text-danger\">*</label>\n        </div>\n\n        <div class=\"form-group row\">\n            <div class=\"col-xs-11\">\n                <input type=\"number\" [(ngModel)]=\"model.zipcode\" #ctrl=\"ngModel\" class=\"form-control \" id=\"exampleInputText\" aria-describedby=\"textHelp\" placeholder=\"Post/Zipcode\">\n                <small *ngIf=\"!model.zipcode&&check\" id=\"emailHelp\" class=\"form-text text-muted text-danger\">this field is empty</small>\n              </div>          \n            <label for=\"inputEmail3\" class=\"col-xs-1 col-form-label text-danger\">*</label>\n          </div> <br>\n\n    <h3 style=\"margin-bottom: 0px;margin-left: 12px;\">ADDITIONAL DETAILS</h3>\n    <h6 style=\"margin-left: 12px;\">We only need this info to keep you updated about your order(s)</h6>\n\n    <div class=\"form-group row\">\n        <div class=\"col-xs-11\">\n            <input type=\"number\" [(ngModel)]=\"model.phone\" #ctrl=\"ngModel\" class=\"form-control \" id=\"exampleInputText\" aria-describedby=\"textHelp\" placeholder=\"Telephone\">\n            <small *ngIf=\"!model.phone&&check\" id=\"emailHelp\" class=\"form-text text-muted text-danger\">this field is empty</small>\n          </div>          \n        <label for=\"inputEmail3\" class=\"col-xs-1 col-form-label text-danger\">*</label>\n      </div>\n\n      <div class=\"form-group row\">\n          <div class=\"col-xs-11\">\n              <input type=\"email\" [(ngModel)]=\"model.email\" #ctrl=\"ngModel\" class=\"form-control \" id=\"exampleInputText\" aria-describedby=\"textHelp\" placeholder=\"Email\">\n              <small *ngIf=\"!model.email&&check\" id=\"emailHelp\" class=\"form-text text-muted text-danger\">this field is empty</small>\n            </div>          \n          <label for=\"inputEmail3\" class=\"col-xs-1 col-form-label text-danger\">*</label>\n        </div> <br>\n\n       \n       \n       \n       \n        <div class=\"form-check form-check-inline\">\n            <input style=\"transform: scale(1.2);\" class=\"form-check-input\" [(ngModel)]=\"same\" (change)=\"setval()\" #ctrl=\"ngModel\" type=\"checkbox\" id=\"inlineCheckbox1\" value=\"{{same}}\">\n            <label class=\"form-check-label text-danger\" for=\"inlineCheckbox1\">&nbsp; <strong>SAME ADDRESS FOR SHIPPING AND BILLING</strong> </label>\n          </div>\n\n\n\n\n\n\n\n\n\n          <ng-container *ngIf=\"!same\">\n            <!-- <h6 class=\"txt-badge\"> <span style=\"background: #000;padding: 3px;\">GUEST CHECKOUT</span> </h6> -->\n          <h4>SHIPPING INFORMATION</h4>\n          <h5> <span class=\"text-danger\">*</span> = Required Information</h5>\n    \n          <div class=\"form-group row\">\n            <div class=\"col-xs-11\">\n                <input type=\"text\" [(ngModel)]=\"shipping.fname\" #ctrl=\"ngModel\" class=\"form-control \" id=\"exampleInputText\" aria-describedby=\"textHelp\" placeholder=\"First Name\">\n                <small *ngIf=\"!shipping.fname&&check\" id=\"emailHelp\" class=\"form-text text-muted text-danger\">this field is empty</small>\n              </div>          \n            <label for=\"inputEmail3\" class=\"col-xs-1 col-form-label text-danger\">*</label>\n          </div>\n          \n  \n      <div class=\"form-group row\">\n          <div class=\"col-xs-11\">\n              <input type=\"text\" [(ngModel)]=\"shipping.lname\" #ctrl=\"ngModel\" class=\"form-control \" id=\"exampleInputText\" aria-describedby=\"textHelp\" placeholder=\"Last Name\">\n              <small *ngIf=\"!shipping.lname&&check\" id=\"emailHelp\" class=\"form-text text-muted text-danger\">this field is empty</small>\n            </div>          \n          <label for=\"inputEmail3\" class=\"col-xs-1 col-form-label text-danger\">*</label>\n        </div>\n  \n      <div class=\"form-group row\">\n          <div class=\"col-xs-11\">\n              <input type=\"text\" [(ngModel)]=\"shipping.company\" #ctrl=\"ngModel\" class=\"form-control \" id=\"exampleInputText\" aria-describedby=\"textHelp\" placeholder=\"Company/Care Of\">\n              <!-- <small *ngIf=\"!shipping.company&&check\" id=\"emailHelp\" class=\"form-text text-muted text-danger\">this field is empty</small> -->\n            </div>          \n          <label for=\"inputEmail3\" class=\"col-xs-1 col-form-label text-danger\"></label>       \n          <!-- <span class=\"text-danger\">*</span> -->\n        </div>\n  \n      <div class=\"form-group row\">\n          <div class=\"col-xs-11\">\n              <input type=\"text\" [(ngModel)]=\"shipping.street_address\" #ctrl=\"ngModel\" class=\"form-control \" id=\"exampleInputText\" aria-describedby=\"textHelp\" placeholder=\"Street Address\">\n              <small *ngIf=\"!shipping.street_address&&check\" id=\"emailHelp\" class=\"form-text text-muted text-danger\">this field is empty</small>\n            </div>          \n          <label for=\"inputEmail3\" class=\"col-xs-1 col-form-label text-danger\">*</label>\n        </div>\n  \n        <div class=\"form-group row\">\n            <div class=\"col-xs-11\">\n                <input type=\"text\" [(ngModel)]=\"shipping.address_line_1\" #ctrl=\"ngModel\" class=\"form-control \" id=\"exampleInputText\" aria-describedby=\"textHelp\" placeholder=\"Address Line 2\">\n                <!-- <small *ngIf=\"!shipping.address_line_1&&check\" id=\"emailHelp\" class=\"form-text text-muted text-danger\">this field is empty</small> -->\n              </div>          \n            <label for=\"inputEmail3\" class=\"col-xs-1 col-form-label text-danger\"></label>         \n            <!-- <span class=\"text-danger\">*</span> -->\n          </div>\n  \n  \n    <div class=\"form-group row\">\n        <div class=\"col-xs-11\">\n            <input type=\"text\" [(ngModel)]=\"shipping.city\" #ctrl=\"ngModel\" class=\"form-control \" id=\"exampleInputText\" aria-describedby=\"textHelp\" placeholder=\"City\">\n            <small *ngIf=\"!shipping.city&&check\" id=\"emailHelp\" class=\"form-text text-muted text-danger\">this field is empty</small>\n          </div>          \n        <label for=\"inputEmail3\" class=\"col-xs-1 col-form-label text-danger\">*</label>\n      </div>\n  \n      <div class=\"form-group row\">\n          <div class=\"col-xs-11\">\n              <!-- <input type=\"text\" [(ngModel)]=\"shipping.country\" #ctrl=\"ngModel\" class=\"form-control \" id=\"exampleInputText\" aria-describedby=\"textHelp\" placeholder=\"Country\"> -->\n              <small *ngIf=\"!shipping.country&&check\" id=\"emailHelp\" class=\"form-text text-muted text-danger\">this field is empty</small>\n              <select name=\"zone_country_id\" id=\"country\" (change)=\"checkCountryShip($event)\" class=\"form-control\" id=\"exampleFormControlSelect1\">\n                <!-- <option>Please Choose Your Country</option> -->\n                <!-- <option selected>{{this.country}}</option> value=\"223\" us -->\n                <!-- <select name=\"zone_country_id\" id=\"country\" (change)=\"checkCountry($event)\" class=\"form-control\"  id=\"exampleFormControlSelect1\"> -->\n                  <option *ngFor=\"let item of Countries\" (click)=\"getItem(item)\" value=\"{{item.code}}\" select>{{item.name}}</option>\n                </select>\n            </div>          \n          <label for=\"inputEmail3\" class=\"col-xs-1 col-form-label text-danger\">*</label>\n        </div>\n  \n  \n        <div class=\"form-group row\">\n            <div class=\"col-xs-11\">\n                <input *ngIf=\"country != 'Canada' && country != 'United States'\" type=\"text\" [(ngModel)]=\"shipping.state\" #ctrl=\"ngModel\" class=\"form-control\" placeholder=\"State/Province\">\n                \n                <select class=\"form-control\" *ngIf=\"country == 'Canada'\" (change)=\"checkStateShip($event)\" name=\"ship_zone_id\" id=\"ship_stateZone\"> \n                  <option>Please select ...</option>\n                  <option (click)=\"checkState($event.target.innerText)\" value=\"66\" select>Alberta</option>\n                  <option (click)=\"checkState($event.target.innerText)\" value=\"67\">British Columbia</option>\n                  <option (click)=\"checkState($event.target.innerText)\" value=\"68\">Manitoba</option>\n                  <option (click)=\"checkState($event.target.innerText)\" value=\"70\">New Brunswick</option>\n                  <option (click)=\"checkState($event.target.innerText)\" value=\"69\">Newfoundland</option>\n                  <option (click)=\"checkState($event.target.innerText)\" value=\"72\">Northwest Territories</option>\n                  <option (click)=\"checkState($event.target.innerText)\" value=\"71\">Nova Scotia</option>\n                  <option (click)=\"checkState($event.target.innerText)\" value=\"73\">Nunavut</option>\n                  <option (click)=\"checkState($event.target.innerText)\" value=\"74\">Ontario</option>\n                  <option (click)=\"checkState($event.target.innerText)\" value=\"75\">Prince Edward Island</option>\n                  <option (click)=\"checkState($event.target.innerText)\" value=\"76\">Quebec</option>\n                  <option (click)=\"checkState($event.target.innerText)\" value=\"77\">Saskatchewan</option>\n                  <option (click)=\"checkState($event.target.innerText)\" value=\"78\">Yukon Territory</option>\n                </select>\n  \n                <select *ngIf=\"country == 'United States'\" (change)=\"checkStateShip($event)\" name=\"ship_zone_id\" id=\"ship_stateZone\" class=\"form-control\">\n                  <option>Please select ...</option>\n                  <option (click)=\"checkState($event.target.innerText)\" value=\"1\" select>Alabama</option>\n                  <option (click)=\"checkState($event.target.innerText)\" value=\"2\">Alaska</option>\n                  <option (click)=\"checkState($event.target.innerText)\" value=\"3\">American Samoa</option>\n                  <option (click)=\"checkState($event.target.innerText)\" value=\"4\">Arizona</option>\n                  <option (click)=\"checkState($event.target.innerText)\" value=\"5\">Arkansas</option>\n                  <option (click)=\"checkState($event.target.innerText)\" value=\"6\">Armed Forces Africa</option>\n                  <option (click)=\"checkState($event.target.innerText)\" value=\"7\">Armed Forces Americas</option>\n                  <option (click)=\"checkState($event.target.innerText)\" value=\"8\">Armed Forces Canada</option>\n                  <option (click)=\"checkState($event.target.innerText)\" value=\"9\">Armed Forces Europe</option>\n                  <option (click)=\"checkState($event.target.innerText)\" value=\"10\">Armed Forces Middle East</option>\n                  <option (click)=\"checkState($event.target.innerText)\" value=\"11\">Armed Forces Pacific</option>\n                  <option (click)=\"checkState($event.target.innerText)\" value=\"12\">California</option>\n                  <option (click)=\"checkState($event.target.innerText)\" value=\"13\">Colorado</option>\n                  <option (click)=\"checkState($event.target.innerText)\" value=\"14\">Connecticut</option>\n                  <option (click)=\"checkState($event.target.innerText)\" value=\"15\">Delaware</option>\n                  <option (click)=\"checkState($event.target.innerText)\" value=\"16\">District of Columbia</option>\n                  <option (click)=\"checkState($event.target.innerText)\" value=\"17\">Federated States Of Micronesia</option>\n                  <option (click)=\"checkState($event.target.innerText)\" value=\"18\">Florida</option>\n                  <option (click)=\"checkState($event.target.innerText)\" value=\"19\">Georgia</option>\n                  <option (click)=\"checkState($event.target.innerText)\" value=\"20\">Guam</option>\n                  <option (click)=\"checkState($event.target.innerText)\" value=\"21\">Hawaii</option>\n                  <option (click)=\"checkState($event.target.innerText)\" value=\"22\">Idaho</option>\n                  <option (click)=\"checkState($event.target.innerText)\" value=\"23\">Illinois</option>\n                  <option (click)=\"checkState($event.target.innerText)\" value=\"24\">Indiana</option>\n                  <option (click)=\"checkState($event.target.innerText)\" value=\"25\">Iowa</option>\n                  <option (click)=\"checkState($event.target.innerText)\" value=\"26\">Kansas</option>\n                  <option (click)=\"checkState($event.target.innerText)\" value=\"27\">Kentucky</option>\n                  <option (click)=\"checkState($event.target.innerText)\" value=\"28\">Louisiana</option>\n                  <option (click)=\"checkState($event.target.innerText)\" value=\"29\">Maine</option>\n                  <option (click)=\"checkState($event.target.innerText)\" value=\"30\">Marshall Islands</option>\n                  <option (click)=\"checkState($event.target.innerText)\" value=\"31\">Maryland</option>\n                  <option (click)=\"checkState($event.target.innerText)\" value=\"32\">Massachusetts</option>\n                  <option (click)=\"checkState($event.target.innerText)\" value=\"33\">Michigan</option>\n                  <option (click)=\"checkState($event.target.innerText)\" value=\"34\">Minnesota</option>\n                  <option (click)=\"checkState($event.target.innerText)\" value=\"35\">Mississippi</option>\n                  <option (click)=\"checkState($event.target.innerText)\" value=\"36\">Missouri</option>\n                  <option (click)=\"checkState($event.target.innerText)\" value=\"37\">Montana</option>\n                  <option (click)=\"checkState($event.target.innerText)\" value=\"38\">Nebraska</option>\n                  <option (click)=\"checkState($event.target.innerText)\" value=\"39\">Nevada</option>\n                  <option (click)=\"checkState($event.target.innerText)\" value=\"40\">New Hampshire</option>\n                  <option (click)=\"checkState($event.target.innerText)\" value=\"41\">New Jersey</option>\n                  <option (click)=\"checkState($event.target.innerText)\" value=\"42\">New Mexico</option>\n                  <option (click)=\"checkState($event.target.innerText)\" value=\"43\">New York</option>\n                  <option (click)=\"checkState($event.target.innerText)\" value=\"44\">North Carolina</option>\n                  <option (click)=\"checkState($event.target.innerText)\" value=\"45\">North Dakota</option>\n                  <option (click)=\"checkState($event.target.innerText)\" value=\"46\">Northern Mariana Islands</option>\n                  <option (click)=\"checkState($event.target.innerText)\" value=\"47\">Ohio</option>\n                  <option (click)=\"checkState($event.target.innerText)\" value=\"48\">Oklahoma</option>\n                  <option (click)=\"checkState($event.target.innerText)\" value=\"49\">Oregon</option>\n                  <option (click)=\"checkState($event.target.innerText)\" value=\"50\">Palau</option>\n                  <option (click)=\"checkState($event.target.innerText)\" value=\"51\">Pennsylvania</option>\n                  <option (click)=\"checkState($event.target.innerText)\" value=\"52\">Puerto Rico</option>\n                  <option (click)=\"checkState($event.target.innerText)\" value=\"53\">Rhode Island</option>\n                  <option (click)=\"checkState($event.target.innerText)\" value=\"54\">South Carolina</option>\n                  <option (click)=\"checkState($event.target.innerText)\" value=\"55\">South Dakota</option>\n                  <option (click)=\"checkState($event.target.innerText)\" value=\"56\">Tennessee</option>\n                  <option (click)=\"checkState($event.target.innerText)\" value=\"57\">Texas</option>\n                  <option (click)=\"checkState($event.target.innerText)\" value=\"58\">Utah</option>\n                  <option (click)=\"checkState($event.target.innerText)\" value=\"59\">Vermont</option>\n                  <option (click)=\"checkState($event.target.innerText)\" value=\"60\">Virgin Islands</option>\n                  <option (click)=\"checkState($event.target.innerText)\" value=\"61\">Virginia</option>\n                  <option (click)=\"checkState($event.target.innerText)\" value=\"62\">Washington</option>\n                  <option (click)=\"checkState($event.target.innerText)\" value=\"63\">West Virginia</option>\n                  <option (click)=\"checkState($event.target.innerText)\" value=\"64\">Wisconsin</option>\n                  <option (click)=\"checkState($event.target.innerText)\" value=\"65\">Wyoming</option>\n                </select>\n                <small *ngIf=\"!shipping.state&&check\" id=\"emailHelp\" class=\"form-text text-muted text-danger\">this field is empty</small>\n              </div>          \n            <label for=\"inputEmail3\" class=\"col-xs-1 col-form-label text-danger\">*</label>\n          </div>\n  \n          <div class=\"form-group row\">\n              <div class=\"col-xs-11\">\n                  <input type=\"number\" [(ngModel)]=\"shipping.zipcode\" #ctrl=\"ngModel\" class=\"form-control \" id=\"exampleInputText\" placeholder=\"Post/Zipcode\">\n                  <small *ngIf=\"!shipping.zipcode&&check\" id=\"emailHelp\" class=\"form-text text-muted text-danger\">this field is empty</small>\n                </div>          \n              <label for=\"\" class=\"col-xs-1 col-form-label text-danger\">*</label>\n            </div> <br>\n          </ng-container> <br>\n\n          <div class=\"col-sm-12 text-center free-ship-tag\">\n            FREE SHIPPING TO ALL USA ADDRESSES\n          </div>\n          \n          <div class=\"row\">\n            <div class=\"col-xs-12 \">\n              <img width=\"100%\" src=\"assets/images/shipping/security.jpg\" alt=\"security\">\n              <!-- <img src=\"assets/images/shipping/security.jpg\" alt=\"security\">\n              <img src=\"assets/images/shipping/security.jpg\" alt=\"security\"> -->\n            </div>\n  \n            <div class=\"col-xs-6\">\n              <img width=\"100%\" src=\"assets/images/shipping/getgeotrustsslseal.png\" alt=\"security\">\n            </div>\n            <div class=\"col-xs-6\">\n              <img width=\"100%\" src=\"assets/images/shipping/Credit_Card_Safe_light.png\" alt=\"security\"></div>\n          </div>\n         <div class=\"col-sm-12 text-success text-center\">All information is encrypted and transmitted without riskusing a Secure Socket Layer (SSL) protocol.</div> <hr>\n\n         <div style=\"padding-left: 0px;padding-right: 0px;\" class=\"col-sm-12\">\n           <h3 style=\"font-weight: normal;color: #000;\">REVIEW YOUR ORDER</h3>\n\n           <div id=\"product\" class=\"row items\" *ngFor=\"let item of Items; index as i\">\n            <ng-container >\n              <div class=\"col-xs-6\">\n                <img *ngIf=\"!item.plateText1\" style=\"cursor: pointer;\" (click)=\"getProduct(item)\" class=\"card-img-top\" width=\"100%\" src=\"{{imgUrl}}{{item.productImage}}\" alt=\"IMG_PRODUCT\"> <br>\n                <img *ngIf=\"item.plateText1\" class=\"card-img-top\" width=\"90%\" src=\"https://www.licenseplates.tv/lpgenI.php?productId={{item.productModel}}&text1={{item.plateText1}}&text2={{item.plateText2}}&font={{font}}\" alt=\"IMG_PRODUCT\">\n                <!-- <div class=\"row\">\n                  <div style=\"padding-left: 0px;padding-right: 0px\" class=\"col-xs-6 text-left\">\n                    <h6 style=\"cursor: pointer;\" (click)=\"edit(item,i);\"><u>Edit</u> </h6>\n                  </div>\n                  <div style=\"padding-left: 0px;padding-right: 0px\" class=\"col-xs-6 text-right\">\n                    <h6 style=\"cursor: pointer;\" (click)=\"remove(i);\"><u>Remove</u>  </h6>\n                  </div>\n                </div> -->\n              </div>\n      \n              <div class=\"col-xs-6\">\n                <h6 style=\"width: 100%;margin: auto;color: #000\" class=\"card-title\">{{item.productName}}</h6> \n                <div class=\"row\">\n                  <div style=\"padding-left: 0px;padding-right: 0px;margin-top: 2px\" class=\"col-xs-12\">\n                    <h6 *ngIf=\"item.plateText1\">Text: <span class=\"a6x12mun\">{{item.plateText1}}</span> </h6> \n                    <h6 *ngIf=\"item.plateText2\">Text 2: <span class=\"a6x12mun\">{{item.plateText2}}</span></h6>\n                    <h6 class=\"text-danger\"><strong>${{item.TotalPrice | number : '1.2-2'}}</strong> </h6>\n                  </div>\n                  <div style=\"padding-left: 0px;padding-right: 0px;\" *ngIf=\"item.plateType == 'Add Black Plate Holder'\" class=\"col-xs-12\">\n                      <h6><small>Universal Plate Holder - {{item.plateType}}</small> </h6>\n                    <img width=\"100\" src=\"assets/images/universalplateholder1.jpg\" alt=\"IMG_Black Plate Holder\">\n                  </div>\n                  <div style=\"padding-left: 0px;padding-right: 0px;\" *ngIf=\"item.plateType == 'Add CHROME Plate Holder'\" class=\"col-xs-12\">\n                      <h6><small>Universal Plate Holder - {{item.plateType}}</small> </h6>\n                      <img width=\"100\" src=\"assets/images/universalplateholder2.jpg\" alt=\"IMG_Black Plate Holder\">\n                    </div>\n                  <div id=\"tile_div\" style=\"padding-left: 0px;padding-right: 0px;margin-top: 5px\" class=\"col-xs-12 text-center\">\n                    <!-- <div class=\"col-xs-6 col-sm-6 text-center\"> -->\n                      <!-- <span class=\"tile_div\">\n                        <button (click)=\"decriment(item)\" class=\"btn\"><i class=\"fa fa-minus\" aria-hidden=\"true\"></i></button>&nbsp;\n                       &nbsp;<h5 class=\"txtnum\">{{item.itemQuantity}}</h5>&nbsp;\n                       <button (click)=\"incriment(item)\" class=\"btn\"><i class=\"fa fa-plus\" aria-hidden=\"true\"></i></button>&nbsp;\n                      </span>                -->\n                     <!-- </div> -->\n                  </div>\n                </div>\n              </div>\n            </ng-container>\n\n            \n\n          </div> <!--Row-->\n\n          <div class=\"col-sm-12\">\n            <div class=\"form-group\">\n              <label style=\"font-weight: normal; color: #000;\" for=\"exampleFormControlTextarea1\">SPECIAL INSTRUCTIONS OR ORDER COMMENTS (optional)</label>\n              <textarea style=\"height: auto;\" [(ngModel)]=\"model.instructions\" #ctrl=\"ngModel\" class=\"form-control\" id=\"exampleFormControlTextarea1\" rows=\"3\"></textarea>\n            </div>\n          </div>\n\n          <div id=\"checkout-box\" style=\"background: #ddd;\" class=\"row\">\n            <div style=\"padding-left: 0px;padding-right: 0px\" class=\"col-xs-12 table-responsive\">\n\n                <table *ngIf=\"sum\" class=\"table\">\n                    <thead>\n                      <tr>\n                        <th scope=\"col\">Coupon:</th>\n\n                        <th scope=\"col\">\n                            <input type=\"text\" [(ngModel)]=\"model.coupon\" #ctrl=\"ngModel\" class=\"form-control \">\n                        </th>\n\n                        <th scope=\"col\"><button (click)=\"checkCoupon()\" class=\"btn btn-danger\">apply</button></th>\n                      </tr>\n                    </thead>\n                    <tbody>\n                      <tr>\n                        <td scope=\"col\">Sub-Total:</td>\n                        <td></td>\n                        <td><strong>${{sum | number : '1.2-2'}}</strong></td>\n                      </tr>\n                      <tr>\n                        <td scope=\"col\">Tax:</td>\n                        <td></td>\n                        <td><strong>${{tax | number : '1.2-2'}}</strong></td>\n                      </tr>\n                      <tr>\n                        <td scope=\"col\">Coupon Discount:</td>\n                        <td></td>\n                        <td><strong>${{coupon | number : '1.2-2'}}</strong></td>\n                      </tr>\n                      <tr class=\"border-bot\">\n                        <td>Shipping:</td> \n                        <td></td>\n                        <td *ngIf=\"ship_amt == 0\" class=\"text-danger\">FREE</td>\n                        <td *ngIf=\"ship_amt > 0\" class=\"text-secondary\">${{ship_amt | number : '1.2-2'}}</td>\n                      </tr>\n                      <tr>\n                          <td>Total:</td>\n                          <td></td>\n                          <td><strong>$ {{totalAmount}} </strong></td>\n                          <!-- <td><strong>${{  sum  - coupon + tax + ship_amt | number : '1.2-2'}}</strong></td>  -->\n                        </tr>\n                    </tbody>\n                  </table>\n\n            </div>\n            \n          </div>\n\n         </div>\n\n    </div>\n\n    <div class=\"col-sm-12\"> <br>\n      <h3>PAYMENT METHOD</h3>\n      <h6>Please select a payment method for this order</h6> </div>\n\n      <div id=\"credit-card\" class=\"row\">\n        <div class=\"col-xs-5\">\n          <div class=\"form-check\">\n            <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios1\" value=\"option1\" checked>\n            <label class=\"form-check-label\" for=\"exampleRadios1\">\n             &nbsp; Credit card\n            </label>\n          </div>\n        </div>\n  \n        <div class=\"col-xs-7 no-pad\">\n          <img width=\"92%\" src=\"assets/images/credit_cart.gif\" alt=\"\">\n        </div>\n\n      </div>\n\n      <section>\n          <div id=\"card-details\" class=\"row\">\n              <div class=\"col-xs-12\">\n                <input type=\"text\" [(ngModel)]=\"card.name\" #ctrl=\"ngModel\" class=\"form-control \" placeholder=\"Cardholder Name\">\n              </div>\n              <div class=\"col-xs-12\">\n                <input type=\"number\" [(ngModel)]=\"card.number\" #ctrl=\"ngModel\" class=\"form-control \" placeholder=\"Card Number\">\n              </div>\n              <div class=\"col-xs-6\">\n                <input type=\"number\" [(ngModel)]=\"card.month\" #ctrl=\"ngModel\" class=\"form-control \" placeholder=\"Expiry Month\">\n              </div>\n              <div class=\"col-xs-6\">\n                <input type=\"number\" [(ngModel)]=\"card.year\" #ctrl=\"ngModel\" class=\"form-control \" placeholder=\"Expiry Year\">\n              </div>\n              <div class=\"col-sm-6 col-xs-6\">\n                <input type=\"number\" [(ngModel)]=\"card.cvv\" #ctrl=\"ngModel\" class=\"form-control \" placeholder=\"CVV Number\">         \n                <input type=\"hidden\" name=\"dataValue\" id=\"dataValue\" />\n                <input type=\"hidden\" name=\"dataDescriptor\" id=\"dataDescriptor\" />   \n              </div>\n\n              <!-- <div class=\"col-xs-12\">\n                <button type=\"button\" (click)=\"sendPaymentDataToAnet()\">Pay</button>\n              </div>\n               -->\n              <div class=\"col-xs-6 text-left whats\">\n                  <a href=\"javascript:void(0)\">what's this?</a> \n              </div>\n            </div>\n      </section>\n       \n        \n        <section>\n            <div class=\"row\">\n                <div class=\"col-xs-12\">\n                    <img src=\"assets/images/cvv_info.gif\" alt=\"\">\n                  </div>\n          \n                  <div  class=\"col-xs-12 order-complete text-center\">\n                    <img (click)=\"checkout()\" src=\"assets/images/button_complete_order.gif\" alt=\"\">\n                  </div>\n            </div>\n        </section>\n        \n        \n\n      \n        <section>\n            <div id=\"paypal\" class=\"row\">\n\n                <div style=\"padding-right: 0px\" class=\"col-xs-4\">\n                    <div class=\"form-check\">\n                      <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios2\" value=\"option2\">\n                      <label class=\"form-check-label\" for=\"exampleRadios2\">\n                          <img src=\"assets/images/paypal-small.gif\" alt=\"\">\n                      </label>\n                    </div>\n                  </div>\n            \n                  <div style=\"padding-left: 0px\" class=\"col-xs-8\">\n                    <h6> Save time. Checkout securely.</h6> \n                  </div>\n      \n                  <div class=\"col-xs-12 paypal-btn\">\n                      <img (click)=\"initConfig()\" width=\"75%\" src=\"assets/images/paypal.gif\" alt=\"\">\n                    </div>\n\n                    <!-- <ngx-paypal [config]=\"payPalConfig\"></ngx-paypal> -->\n                    \n                    <div class=\"col-xs-12 text-center\">\n                      <!-- <h5>Pay without sharing your financial information.</h5> -->\n                      <!-- <ngx-paypal [config]=\"payPalConfig\"></ngx-paypal> -->\n                      \n\n                      <!-- <div id=\"paypal-button-container\"></div> <br> -->\n                      <!-- <div id=\"paypal-checkout-btn\"></div> <br> -->\n                      <!-- <button id=\"confirm-button\" class=\"btn\">hhh</button> -->\n                    </div>\n            </div>\n        </section>\n\n  \n      \n      \n\n    \n\n  </div>\n\n  <div [hidden]=\"!doPaypal\" class=\"row text-center\">\n     \n    <ng-container>\n          <div [hidden]=\"!verifying\" class=\"col-sm-4 text-center\">\n              <img width=\"14%\" src=\"/assets/images/loader.svg\" alt=\"\">\n                  <h6>verifying...</h6>\n              </div>\n    </ng-container>\n\n    <ng-container>\n      <div  [hidden]=\"verifying\" class=\"col-sm-12\">\n        <h4> <u>Paypal Checkout</u> </h4> <br>\n        <img src=\"assets/images/paypal-small.gif\" alt=\"\">\n        <h3> <strong>$ {{getTotalAmount()}}</strong> </h3>\n        <div id=\"paypal-checkout-btn\"></div>\n        <button (click)=\"goBack()\" class=\"btn btn-danger\">Go back</button>\n    </div>\n    </ng-container>\n   \n    \n  </div>\n\n</div>\n\n\n\n\n\n\n\n<!-- <div class=\"col-sm-6 text-center\">\n  <p>loader 3</p>\n  <div class=\"loader3\">\n    <span></span>\n    <span></span>\n  </div>\n</div> -->"

/***/ }),

/***/ "./src/app/home/guest-checkout/guest-checkout.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/home/guest-checkout/guest-checkout.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: 'a6x12mun';\n  src: url(\"https://www.licenseplates.tv/fonts/truetype/ag_newgermandecalnew.ttf\"); }\n\n@font-face {\n  font-family: 'a6x12mun';\n  src: url('ag_newgermandecalnew.ttf'); }\n\n.a6x12mun {\n  font-family: 'a6x12mun';\n  src: url('ag_newgermandecalnew.ttf'); }\n\n.text-danger {\n  color: #d9232e; }\n\nh6.txt-badge {\n  color: #fff;\n  padding: 3px;\n  margin-bottom: 2px; }\n\nh3, h4, h5, h6 {\n  text-transform: none; }\n\nh4 {\n  margin-bottom: 3px; }\n\n.form-control {\n  background-color: #f3f4f5;\n  border-top: 2px solid #d3d2d2;\n  border: 1px solid #e4e6e8;\n  height: 42px; }\n\n.form-group > .text-danger {\n  padding: .5em; }\n\n.col-xs-1 label {\n  padding-left: 0px; }\n\n.col-xs-11 {\n  padding-right: 0px; }\n\n.row {\n  margin-bottom: 10px; }\n\n#product h6 {\n  margin-bottom: 5px; }\n\n.free-ship-tag {\n  border: 2px solid #000;\n  color: #000;\n  padding: .4em; }\n\n#checkout-box table th {\n  border-bottom: 3px solid #909090; }\n\n.border-bot {\n  border-bottom: 3px solid #909090; }\n\n#checkout-box table tr {\n  color: #000; }\n\n#checkout-box {\n  border-top: 3px solid #909090;\n  border-bottom: 3px solid #909090; }\n\n.no-pad {\n  padding-left: 0px;\n  padding-right: 0px; }\n\n.no-mar {\n  margin-left: 0px;\n  margin-right: 0px; }\n\n#credit-card .form-check {\n  padding-top: 4px;\n  padding-right: 3px;\n  font-size: 15px; }\n\n#credit-card .col-sm-6 {\n  margin-top: 6px; }\n\n.order-complete {\n  cursor: pointer;\n  margin-top: 10px;\n  width: 100%; }\n\n#paypal {\n  margin-top: 2em;\n  width: 100%; }\n\n#paypal h6 {\n  padding-top: 4px;\n  padding-right: 3px;\n  font-size: 15px; }\n\n#paypal .paypal-btn {\n  cursor: pointer; }\n\n#card-details input {\n  margin-bottom: .5em; }\n\n#card-details .whats {\n  position: relative;\n  top: 23px;\n  left: -18px; }\n\n.paypal-button.paypal-button-color-gold {\n  background: url('paypal.gif');\n  color: #111;\n  background-image: url('paypal.gif'); }\n"

/***/ }),

/***/ "./src/app/home/guest-checkout/guest-checkout.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/home/guest-checkout/guest-checkout.component.ts ***!
  \*****************************************************************/
/*! exports provided: GuestCheckoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuestCheckoutComponent", function() { return GuestCheckoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _country__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./country */ "./src/app/home/guest-checkout/country.ts");
/* harmony import */ var app_lib_service_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/lib/service/product.service */ "./src/app/lib/service/product.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GuestCheckoutComponent = /** @class */ (function () {
    function GuestCheckoutComponent(router, _productService, _http) {
        var _this = this;
        this.router = router;
        this._productService = _productService;
        this._http = _http;
        this.model = {};
        this.shipping = {};
        this.card = { name: null, number: null, month: null, year: null, cvv: null };
        this.same = true;
        this.imgUrl = 'https://www.licenseplates.tv/images/';
        this.sum = 0.00;
        this.country = 'United States';
        this.state = 'Alberta';
        this.coupon = 0.00;
        this.Countries = _country__WEBPACK_IMPORTED_MODULE_2__["countries"];
        this.tax = 0.00;
        this.ship_amt = 0.00;
        this.totalAmount = 0.00;
        // authorize dot net creds
        this.apiLoginId = '9Nd3y7r76VF'; //9Nd3y7r76VF
        this.clientKey = '7h3Xvgn97K3Vkf9u6gkGzcj8k23thba7K4n9537JUMMC4fgs25LqBsNWWBNSFXje';
        this.transactionKey = '53j562rZTM3kYrLu'; //53j562rZTM3kYrLu
        this.apiUrl = 'https://api.authorize.net/xml/v1/request.api';
        // end
        this.addScript = false;
        this.paypalLoad = true;
        this.finalAmount = 1; //  sandbox: 'AZDxjDScFpQtjWTOUtWKbyN_bDt4OgqaF4eYXlewfBP4-8aqX3PiV8e1GWU6liB2CUXlkA59kJXE7M6R',
        this.paypalConfig = {
            env: 'production',
            client: {
                sandbox: 'AQRNAkeUZt_HJYsAKwXwFWVSYlorOGjtT4k_PzWwY-fuVIRjkunB9qxOGVPLnR_7Up7qZkL3ML9VQSg4',
                production: 'AeZzJUqyE4AtG7VI54dadwdJeJIvylhghKmmBJkcTNZD0FwE7nstpM1w-8xj7iMmjnow56SYmF9OFgz2'
            },
            commit: true,
            payment: function (data, actions) {
                return actions.payment.create({
                    payer: {
                        payment_method: 'paypal',
                        payer_info: {
                            first_name: _this.model.fname,
                            last_name: _this.model.lname,
                            email: _this.model.email,
                            country_code: _this.model.countryCode,
                            billing_address: {
                                line1: _this.model.street_address,
                                line2: _this.model.address_line_1,
                                city: _this.model.city,
                                country_code: _this.model.countryCode,
                                postal_code: _this.model.zipcode.toString(),
                                state: _this.model.state,
                                phone: _this.model.phone
                            }
                        }
                    },
                    payment: {
                        transactions: [
                            {
                                amount: {
                                    // total: this.sum + this.ship_amt - this.coupon,
                                    total: _this.totalAmount,
                                    currency: 'USD',
                                    details: {
                                        subtotal: _this.sum,
                                        tax: _this.tax,
                                        shipping: _this.ship_amt,
                                        handling_fee: 0,
                                        shipping_discount: _this.coupon
                                    }
                                },
                                item_list: {
                                    items: _this.paypalArray,
                                    shipping_address: {
                                        recipient_name: _this.same ? _this.model.fname + ' ' + _this.model.lname : _this.shipping.fname + ' ' + _this.shipping.lname,
                                        line1: _this.same ? _this.model.street_address : _this.shipping.street_address,
                                        line2: _this.same ? _this.model.address_line_1 : _this.shipping.address_line_2,
                                        city: _this.same ? _this.model.city : _this.shipping.city,
                                        state: _this.same ? _this.model.state : _this.shipping.state,
                                        country_code: _this.model.countryCode,
                                        postal_code: _this.same ? _this.model.zipcode.toString() : _this.shipping.zipcode.toString()
                                    }
                                }
                            }
                        ]
                    }
                });
            },
            onAuthorize: function (data, actions) {
                _this.verifying = true;
                console.log(data);
                actions.payment.execute().then(function (payment) {
                    // console.log('Payment Success', payment);
                    localStorage.lastPayment = JSON.stringify(payment);
                    localStorage.cartItems = JSON.stringify([]);
                    _this.paymentSuccess(payment);
                    // if ( this.same === false) {
                    //   localStorage.lastPaymentShipping = JSON.stringify(this.shipping);
                    // }
                    // this.router.navigateByUrl('success')
                });
            },
            onCancel: function (data, actions) {
                console.log('Payment Failed');
                alert('Payment was Cancelled!');
                _this.verifying = false;
            },
            onError: function (err) {
                console.log('Payment Error', err);
                alert('Error occured!');
                _this.verifying = false;
            },
            style: {
                size: 'medium',
                color: 'gold',
                shape: 'pill',
                label: 'checkout',
                tagline: 'true'
            }
        }; // end of paypal config
        this.makeAuthorizeDotNetPayment = function (postData) {
            _this.verifying = true;
            _this._http.post(_this.apiUrl, postData).subscribe(function (res) {
                if (res['messages'] && res['messages']['resultCode'] === "Ok") {
                    _this.verifying = false;
                    _this.getCartitemCount();
                    _this.router.navigateByUrl('success');
                }
                else {
                    alert('Payment Failed');
                }
            }, function (error) {
            });
        };
    }
    GuestCheckoutComponent.prototype.ngOnInit = function () {
        this.getCartitems();
        this.getTotal();
        this.getUser();
        this.paypalArr();
        // this.addAuthnetScript();
    };
    GuestCheckoutComponent.prototype.getUser = function () {
        this.User = JSON.parse(localStorage.getItem('currentUser'));
        if (this.User) {
            this.loggedIn = true;
            this.model.fname = this.User.firstname ? this.User.firstname : '';
            this.model.lname = this.User.lastname ? this.User.lastname : '';
        }
    };
    GuestCheckoutComponent.prototype.getItem = function (item) {
        // console.log('getItem');
        // console.log(item);
        if (this.same === true) {
            this.model.country = item.name;
            this.model.countryCode = item.code;
            // console.log(this.model.country);
            if (this.model.country === 'United States') {
                this.ship_amt = 0;
            }
            if (this.model.country === 'Canada') {
                this.ship_amt = 30;
            }
            if (this.model.country !== 'Canada' && this.model.country !== 'United States') {
                this.ship_amt = 50;
            }
        }
    };
    GuestCheckoutComponent.prototype.paypalArr = function () {
        var paypalArray = [];
        for (var i = 0; i < this.Items.length; i++) {
            var obj = {
                name: this.Items[i].productName,
                // tslint:disable-next-line:max-line-length
                description: this.Items[i].plateText1 ? this.Items[i].plateText1 :  true ? +'& ' + this.Items[i].plateText2 : undefined,
                quantity: this.Items[i].itemQuantity,
                price: this.Items[i].TotalPrice.toString(),
                sku: this.Items[i].plateType,
                currency: 'USD'
            };
            paypalArray.push(obj);
        }
        // console.log(paypalArray);
        this.paypalArray = paypalArray;
    };
    GuestCheckoutComponent.prototype.getCartitems = function () {
        this.Items = JSON.parse(localStorage.getItem('cartItems'));
        this.model.country = 'United States';
        this.shipping.country = 'United States';
        this.model.countryCode = 'US';
        this.shipping.countryCode = 'US';
        // this.paypalArr();
    };
    GuestCheckoutComponent.prototype.getTotalAmount = function () {
        var total = this.sum + this.ship_amt + this.tax - this.coupon;
        total = Math.round(total * 100) / 100;
        this.totalAmount = total;
        return total;
    };
    GuestCheckoutComponent.prototype.onEditClick = function (e) {
        // console.log(e);
    };
    GuestCheckoutComponent.prototype.checkCountry = function (e) {
        var selectedOptions = event.target['options'];
        var selectedIndex = selectedOptions.selectedIndex;
        var country = selectedOptions[selectedIndex].text;
        // console.log(this.country);
        // console.log(e);
        if (this.same === true) {
            this.model.country = country;
            this.model.countryCode = e.target.value;
            // console.log(e.target.value);
            // console.log(this.model.country);
            if (this.model.country === 'United States') {
                this.ship_amt = 0;
                this.model.state = '';
            }
            if (this.model.country === 'Canada') {
                this.ship_amt = 30;
                this.model.state = '';
            }
            if (this.model.country !== 'Canada' && this.model.country !== 'United States') {
                this.ship_amt = 50;
                this.model.state = '';
            }
        }
    };
    GuestCheckoutComponent.prototype.CheckState = function (e) {
        var selectedOptions = event.target['options'];
        var selectedIndex = selectedOptions.selectedIndex;
        var state = selectedOptions[selectedIndex].text;
        this.model.state = state;
        // console.log(state);
        if (this.model.state == 'Florida') {
            var taxVal = this.sum * (7 / 100);
            this.tax = Math.round(taxVal * 100) / 100;
        }
        else {
            this.tax = 0.00;
        }
    };
    GuestCheckoutComponent.prototype.checkState = function (e) {
        // console.log('moz val');
        // console.log(e);
        this.model.state = e;
    };
    GuestCheckoutComponent.prototype.checkCountryShip = function (e) {
        var selectedOptions = event.target['options'];
        var selectedIndex = selectedOptions.selectedIndex;
        var country = selectedOptions[selectedIndex].text;
        this.country = country;
        // console.log('Country is ', this.country)
        if (this.country === 'United States') {
            this.ship_amt = 0;
            this.shipping.state = '';
        }
        if (this.country === 'Canada') {
            this.ship_amt = 30;
            this.shipping.state = '';
        }
        if (this.country !== 'Canada' && this.shipping.country !== 'United States') {
            this.ship_amt = 50;
            this.shipping.state = '';
        }
    };
    GuestCheckoutComponent.prototype.checkStateShip = function (e) {
        // this.shipping.state  = e;
        // console.log(e);
        var selectedOptions = event.target['options'];
        var selectedIndex = selectedOptions.selectedIndex;
        var state = selectedOptions[selectedIndex].text;
        this.shipping.state = state;
        // console.log(this.shipping.state);
        if (this.shipping.state == 'Florida') {
            var taxVal = (this.sum - this.coupon) * (7 / 100);
            this.tax = Math.round(taxVal * 100) / 100;
        }
        else {
            this.tax = 0.00;
        }
    };
    GuestCheckoutComponent.prototype.getTotal = function () {
        var result = this.Items.map(function (a) { return a.TotalPrice; });
        // console.log(result);
        this.sum = result.reduce(function (a, b) { return a + b; }, 0);
    };
    GuestCheckoutComponent.prototype.checkout = function () {
        // console.log('clicked!')
        // console.log(this.model)
        // this.addScript = true;
        // tslint:disable-next-line:max-line-length
        // console.log(this.model);
        if (!this.model.fname || !this.model.lname || !this.model.street_address || !this.model.city || !this.model.country || !this.model.state || !this.model.zipcode || !this.model.phone || !this.model.email) {
            this.check = true;
            alert('Some Billing Infomartions are empty!');
        }
        else {
            if (this.same) {
                this.sendPaymentDataToAnet();
            }
        }
        // diffrent address
        if (this.same === false) {
            // tslint:disable-next-line:max-line-length
            if (!this.shipping.fname || !this.shipping.lname || !this.shipping.street_address || !this.shipping.city || !this.shipping.country || !this.shipping.state || !this.shipping.zipcode) {
                this.check = true;
                alert('Some Shipping Infomartions are empty!');
            }
            else {
                this.sendPaymentDataToAnet();
            }
        }
    };
    GuestCheckoutComponent.prototype.initConfig = function () {
        // console.log('clicked!')
        // console.log(this.model)
        // this.addScript = true;
        // tslint:disable-next-line:max-line-length
        if (!this.model.fname || !this.model.lname || !this.model.street_address || !this.model.city || !this.model.country || !this.model.state || !this.model.zipcode || !this.model.phone || !this.model.email) {
            this.check = true;
            alert('Some Billing Infomartions are empty!');
        }
        else {
            if (this.same) {
                this.doPaypal = true;
            }
        }
        // diffrent address
        if (this.same === false) {
            // tslint:disable-next-line:max-line-length
            if (!this.shipping.fname || !this.shipping.lname || !this.shipping.street_address || !this.shipping.city || !this.shipping.country || !this.shipping.state || !this.shipping.zipcode) {
                this.check = true;
                alert('Some Shipping Infomartions are empty!');
            }
            else {
                this.doPaypal = true;
            }
        }
    };
    GuestCheckoutComponent.prototype.setval = function () {
        // console.log(this.same);
        // console.log('invalid');
    };
    GuestCheckoutComponent.prototype.ngAfterViewChecked = function () {
        var _this = this;
        if (!this.addScript) {
            this.addPaypalScript().then(function () {
                paypal.Button.render(_this.paypalConfig, '#paypal-checkout-btn');
            });
            this.addAuthnetScript();
        }
    };
    GuestCheckoutComponent.prototype.getCartitemCount = function () {
        // let Items = JSON.parse(localStorage.getItem('cartItems'));
        // // console.log(Items);
        // // console.log(Items.length);
        var itemNum = 0;
        this._productService.changeItem(itemNum);
    };
    GuestCheckoutComponent.prototype.getValues = function () {
        // console.log(this.model);
        // console.log(this.shipping);
    };
    GuestCheckoutComponent.prototype.addPaypalScript = function () {
        this.addScript = true;
        return new Promise(function (resolve, reject) {
            var scripttagElement = document.createElement('script');
            scripttagElement.src = 'https://www.paypalobjects.com/api/checkout.js';
            scripttagElement.onload = resolve;
            document.body.appendChild(scripttagElement);
        });
    };
    GuestCheckoutComponent.prototype.addAuthnetScript = function () {
        // this.addScript = true;
        return new Promise(function (resolve, reject) {
            var scripttagElement = document.createElement('script');
            // scripttagElement.src = 'https://jstest.authorize.net/v1/Accept.js';
            scripttagElement.src = 'https://js.authorize.net/v1/Accept.js'; // for production
            scripttagElement.onload = resolve;
            document.body.appendChild(scripttagElement);
        });
    };
    GuestCheckoutComponent.prototype.sendPaymentDataToAnet = function () {
        if (this.card.name && this.card.number && this.card.month && this.card.year) {
            // console.log('Auth.net ready!')
            // let authData = {
            //   clientKey: '6jZy4G5vmCEat9G3xjtNguj7DLw5NhgS4PBr4KNp7tV2tXa34E3BkdG33dcX4S84',
            //   apiLoginID: '3e3b5H4YLP'
            // };
            var authData = {
                clientKey: this.clientKey,
                apiLoginID: this.apiLoginId
            };
            var cardData = {
                cardNumber: this.card.number.toString(),
                month: this.card.month.toString(),
                year: this.card.year.toString(),
                cardCode: this.card.cvv.toString(),
                fullName: this.card.name.toString()
            };
            var secureData = {
                authData: authData,
                cardData: cardData
            };
            // If using banking information instead of card information,
            // send the bankData object instead of the cardData object.
            //
            // secureData.bankData = bankData;
            Accept.dispatchData(secureData, this.responseHandler);
        }
        else {
            alert('Card Details are not completed!');
        }
    };
    GuestCheckoutComponent.prototype.responseHandler = function (response) {
        if (response.messages.resultCode === 'Error') {
            for (var i = 0; i < response.messages.message.length; i++) {
                // console.log(response.messages.message[i].code + ':' + response.messages.message[i].text);
            }
            alert(response.messages.message[0].text);
        }
        else {
            var opaqueData = response.opaqueData;
            var paymentData = {};
            var createTransactionRequest = {};
            var merchantAuthentication = {
                name: this.apiLoginId,
                transactionKey: this.transactionKey
            };
            // create billing and shipping address object
            var billTo = {
                "firstName": this.model.fname,
                "lastName": this.model.lname,
                "company": this.model.company,
                "address": this.model.street_address + ' ' + this.model.address_line_1,
                "city": this.model.city,
                "state": this.model.state,
                "zip": this.model.zipcode.toString(),
                "country": this.model.countryCode
            };
            var shipTo = {};
            if (this.same) {
                shipTo = billTo;
            }
            else {
                shipTo = {
                    "firstName": this.shipping.fname,
                    "lastName": this.shipping.lname,
                    "company": this.shipping.company,
                    "address": this.shipping.street_address + ' ' + this.shipping.address_line_1,
                    "city": this.shipping.city,
                    "state": this.shipping.state,
                    "zip": this.shipping.zipcode.toString(),
                    "country": this.model.countryCode
                };
            }
            // end
            var transactionRequest = {
                transactionType: "authCaptureTransaction",
                amount: +(this.sum + this.ship_amt - this.coupon + this.tax),
                payment: {
                    opaqueData: opaqueData
                },
                billTo: billTo,
                shipTo: shipTo
            };
            createTransactionRequest['merchantAuthentication'] = merchantAuthentication;
            createTransactionRequest['transactionRequest'] = transactionRequest;
            paymentData['createTransactionRequest'] = createTransactionRequest;
            this.makeAuthorizeDotNetPayment(paymentData);
        }
    };
    GuestCheckoutComponent.prototype.goBack = function () {
        this.doPaypal = !this.doPaypal;
        // this.addScript = !this.addScript;
    };
    GuestCheckoutComponent.prototype.checkCoupon = function () {
        var _this = this;
        // // console.log(this.coupon);
        this._productService.getCoupon(this.model.coupon)
            .subscribe(function (res) {
            // console.log(res);
            if (res.success === '1') {
                // this.coupon = res.couponamt.toString();
                // alert(res.message);
                if (res.coupon_type === 'F') {
                    _this.coupon = Math.round(parseFloat(res.couponamt) * 100) / 100;
                    alert(res.message);
                }
                else if (res.coupon_type === 'P' || res.coupon_type === 'E') {
                    _this.addPercentage(res);
                }
                if (_this.model.state == 'Florida') {
                    var taxVal = (_this.sum - _this.coupon) * (7 / 100);
                    _this.tax = Math.round(taxVal * 100) / 100;
                }
                else {
                    _this.tax = 0.00;
                }
            }
            else {
                alert(res.message);
                _this.coupon = 0;
            }
        });
    };
    GuestCheckoutComponent.prototype.addPercentage = function (res) {
        var discount = +this.sum * (parseFloat(res.couponamt) / 100);
        // console.log('discount is ', discount.toFixed(2));
        this.coupon = Math.round(discount * 100) / 100;
        alert(res.message);
    };
    GuestCheckoutComponent.prototype.paymentSuccess = function (payment) {
        var _this = this;
        // this.Items = JSON.parse(localStorage.getItem('cartItems'));
        var data = {
            cart: {
                cart: payment.cart,
                create_time: payment.create_time,
                id: payment.id,
                intent: payment.intent,
                currency: 'USD',
            },
            payer: payment.payer,
            items: this.Items
        };
        var saveData = {
            payer: {
                payment_method: 'paypal',
                payer_info: {
                    first_name: this.model.fname,
                    last_name: this.model.lname,
                    email: this.model.email,
                    country_code: this.model.countryCode,
                    billing_address: {
                        line1: this.model.street_address,
                        line2: this.model.address_line_1,
                        city: this.model.city,
                        country_code: this.model.countryCode,
                        postal_code: this.model.zipcode.toString(),
                        state: this.model.state,
                        phone: this.model.phone
                    }
                }
            },
            cart: {
                cart: payment.cart,
                create_time: payment.create_time,
                id: payment.id,
                intent: payment.intent,
                currency: 'USD',
            },
            payment: {
                transactions: [
                    {
                        amount: {
                            total: this.sum + this.ship_amt - this.coupon,
                            currency: 'USD',
                            details: {
                                subtotal: this.sum,
                                tax: this.tax,
                                shipping: this.ship_amt,
                                handling_fee: 0,
                                coupon_discount: this.coupon,
                                coupon_code: this.model.coupon,
                                special_instruction: this.model.instructions
                            }
                        },
                        item_list: {
                            items: this.Items,
                            shipping_address: {
                                recipient_name: this.same ? this.model.fname + ' ' + this.model.lname : this.shipping.fname + ' ' + this.shipping.lname,
                                line1: this.same ? this.model.street_address : this.shipping.street_address,
                                line2: this.same ? this.model.address_line_1 : this.shipping.address_line_2,
                                city: this.same ? this.model.city : this.shipping.city,
                                state: this.same ? this.model.state : this.shipping.state,
                                country_code: this.model.countryCode,
                                postal_code: this.same ? this.model.zipcode.toString() : this.shipping.zipcode.toString()
                            }
                        }
                    }
                ]
            }
        };
        // send to server
        // localStorage.lastPaymentAdress = JSON.stringify(this.model);
        this._productService.postOrderData(saveData)
            .subscribe(function (res) {
            // console.log(res);
            if (res.success == 1) {
                // this.paymentSuccess(payment)
                _this.getCartitemCount();
                console.log('success', saveData);
                localStorage.lastPaymentShipping = JSON.stringify(data);
                _this.verifying = false;
                _this.router.navigateByUrl('success');
            }
            else {
                // console.log('Payment Failed');
            }
        });
    }; // paymentSuccess
    GuestCheckoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-guest-checkout',
            template: __webpack_require__(/*! ./guest-checkout.component.html */ "./src/app/home/guest-checkout/guest-checkout.component.html"),
            styles: [__webpack_require__(/*! ./guest-checkout.component.scss */ "./src/app/home/guest-checkout/guest-checkout.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            app_lib_service_product_service__WEBPACK_IMPORTED_MODULE_3__["productService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], GuestCheckoutComponent);
    return GuestCheckoutComponent;
}());



/***/ }),

/***/ "./src/app/home/guest-checkout/guest-checkout.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/home/guest-checkout/guest-checkout.module.ts ***!
  \**************************************************************/
/*! exports provided: GuestCheckoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuestCheckoutModule", function() { return GuestCheckoutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _guest_checkout_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guest-checkout-routing.module */ "./src/app/home/guest-checkout/guest-checkout-routing.module.ts");
/* harmony import */ var _guest_checkout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./guest-checkout.component */ "./src/app/home/guest-checkout/guest-checkout.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_paypal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-paypal */ "./node_modules/ngx-paypal/fesm5/ngx-paypal.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var GuestCheckoutModule = /** @class */ (function () {
    function GuestCheckoutModule() {
    }
    GuestCheckoutModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _guest_checkout_routing_module__WEBPACK_IMPORTED_MODULE_2__["GuestCheckOutRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                ngx_paypal__WEBPACK_IMPORTED_MODULE_5__["NgxPayPalModule"]
            ],
            declarations: [_guest_checkout_component__WEBPACK_IMPORTED_MODULE_3__["GuestCheckoutComponent"]]
        })
    ], GuestCheckoutModule);
    return GuestCheckoutModule;
}());



/***/ })

}]);
//# sourceMappingURL=home-guest-checkout-guest-checkout-module.js.map