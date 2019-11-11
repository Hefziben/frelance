(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-edit-product-edit-product-module"],{

/***/ "./src/app/home/edit-product/dropDown.ts":
/*!***********************************************!*\
  !*** ./src/app/home/edit-product/dropDown.ts ***!
  \***********************************************/
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

/***/ "./src/app/home/edit-product/edit-product-routing.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/home/edit-product/edit-product-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: EditProductRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProductRoutingModule", function() { return EditProductRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _edit_product_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-product.component */ "./src/app/home/edit-product/edit-product.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _edit_product_component__WEBPACK_IMPORTED_MODULE_2__["EditProductComponent"]
    }
];
var EditProductRoutingModule = /** @class */ (function () {
    function EditProductRoutingModule() {
    }
    EditProductRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], EditProductRoutingModule);
    return EditProductRoutingModule;
}());



/***/ }),

/***/ "./src/app/home/edit-product/edit-product.component.html":
/*!***************************************************************!*\
  !*** ./src/app/home/edit-product/edit-product.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!-- <head>\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"https://www.licenseplates.tv/fonts/truetype/ag_newgermandecalnew.ttf\" />      \n</head> -->\n\n<div class=\"container-fluid\">\n\n  <!-- <div *ngIf=\"subCategories\" class=\"row\" style=\"margin-bottom: 0px\">\n      <div class=\"col-sm-12 mt-2 text-center card_plate\">\n          <h5 style=\"margin-top: 2px\">Displaying <strong>1</strong> to <strong>{{subCategories.length}}</strong> (of <strong>{{subCategories.length}}</strong> products)</h5>\n      </div>\n  </div>  -->\n\n  <div class=\"row\">\n\n      <ng-container *ngIf=\"!products\">\n              <div class=\"col-sm-4 text-center\">\n                  <img width=\"14%\" src=\"/assets/images/loader.svg\" alt=\"\">\n                      <h6>loading...</h6>\n                  </div>\n      </ng-container>\n      \n      <ng-container *ngIf=\"products\">\n              <div *ngFor=\"let item of products\" class=\"col-sm-4\">\n\n                 <div class=\"well text-center\">\n                 <h5 style=\"font-size: 20px;width: 100%;margin: auto;color: #000\" class=\"card-title\">{{item.products_name}}</h5>\n            <h4 class=\"text-danger\"> <span class=\"old_price\">${{item.products_price | number : '1.2-2'}}&nbsp;</span> &nbsp;${{item.products_price_sorter | number : '1.2-2'}}&nbsp; Save: 15% off</h4>\n                        <!-- <a href=\"\"><img src=\"assets/images/buy.png\" alt=\"\">  </a> -->\n                </div>\n\n                      <div class=\"card text-center\">\n        <img class=\"card-img-top\" width=\"50%\" src=\"{{imgUrl}}{{item.products_image}}\" alt=\"IMG_PRODUCT\"> <br>\n        <img *ngIf=\"item.xPos1 > 0\" class=\"card-img-top\" width=\"50%\" src=\"https://www.licenseplates.tv/lpgenI.php?productId={{item.products_model}}&text1={{Urltext}}&text2={{Urltext2}}&font={{font}}\" alt=\"IMG_PRODUCT\">\n        <h5 class=\"text-danger\" style=\"padding: 1em;\">Please enter your <strong>CUSTOM LETTERS/NUMBERS</strong> into the box <strong>BELOW</strong></h5>\n        <!-- <input type=\"text\" [(ngModel)]=\"text\" #ctrl=\"ngModel\"> -->\n        <div *ngIf=\"item.xPos1 > 0\" class=\"form-group\">\n          <input type=\"text\" [(ngModel)]=\"text\" (input)=\"changeTxt()\" (click)=\"selectInput1()\" #ctrl=\"ngModel\" class=\"form-control a6x12mun\" id=\"exampleInputText\" aria-describedby=\"textHelp\" placeholder=\"\">\n        </div>\n        <div *ngIf=\"item.xPos2 > 0\" class=\"form-group\">\n            <input type=\"text\" [(ngModel)]=\"text2\" #ctrl=\"ngModel\" (input)=\"changeTxt()\" (click)=\"selectInput2()\" class=\"form-control a6x12mun\" id=\"exampleInputText\" aria-describedby=\"textHelp\" placeholder=\"\">\n          </div>\n\n          <div *ngIf=\"item.font_choose > 0\" class=\"form-group\">\n            <h4 class=\"text-danger\"> <label for=\"exampleFormControlSelect1\">Select Font</label> </h4>\n            <select *ngIf=\"item.products_custom == 1\" class=\"form-control\" id=\"exampleFormControlSelect1\">\n              <option *ngFor=\"let selctItem of dropDown1\" (click)=\"setFont(selctItem)\">{{selctItem.text}}</option>\n              <!-- <option>Font 2</option> -->\n            </select>\n            <select *ngIf=\"item.products_custom == 2\" class=\"form-control\" id=\"exampleFormControlSelect1\">\n              <option *ngFor=\"let selctItem of dropDown2\">{{selctItem.text}}</option>\n              <!-- <option>Font 2</option> -->\n            </select>\n          </div>\n\n          <div *ngIf=\"products[0].edecal == 'Y'\" id=\"customizeblock\" style=\"clear:both\">\n            <div class=\"decalsblock\" style=\"clear:both\">\n\n\n              <div class=\"row\" style=\"width: 90%;margin: auto;\">\n                <div class=\"col-sm-12 text-center\">\n\n                   <!-- <div class=\"decal-date-info\">CLICK TO SELECT SPECIAL CHARACTER (some characters may show differently in text box)</div> -->\n        <div style=\"float:left;border:1px solid black;\" (click)=\"addVal('!')\" class=\"symbolclick a6x12mun\" rel=\"!\">\n            !</div>\n          <div style=\"float:left;border:1px solid black;\" (click)=\"addVal('@')\" class=\"symbolclick a6x12mun\" rel=\"@\">\n            @</div>\n          <div style=\"float:left;border:1px solid black;\" (click)=\"addVal('#')\" class=\"symbolclick a6x12mun\" rel=\"#\">\n            #</div>\n          <div style=\"float:left;border:1px solid black;\" (click)=\"addVal('$')\" class=\"symbolclick a6x12mun\" rel=\"$\">\n            $</div>\n          <div style=\"float:left;border:1px solid black;\" (click)=\"addVal('&amp;')\" class=\"symbolclick a6x12mun\" rel=\"&amp;\">\n            &amp;</div>\n          <div style=\"float:left;border:1px solid black;\" (click)=\"addVal('?')\" class=\"symbolclick a6x12mun\" rel=\"?\">\n            ?</div>\n          <div style=\"float:left;border:1px solid black;\" (click)=\"addVal('\\'')\" class=\"symbolclick a6x12mun\" rel=\"'\">\n            '</div>\n          <div class=\"decal-date-info\"></div><div style=\"float:left;border:1px solid black;\" (click)=\"addVal('-')\" class=\"symbolclick a6x12mun\" rel=\"-\">\n            -</div>\n          <div style=\"float:left;border:1px solid black;\" (click)=\"addVal('=')\" class=\"symbolclick a6x12mun\" rel=\"=\">\n            =</div>\n          <div style=\"float:left;border:1px solid black;\" (click)=\"addVal('+')\" class=\"symbolclick a6x12mun\" rel=\"+\">\n            +</div>\n          <div style=\"float:left;border:1px solid black;\" (click)=\"addVal('*')\" class=\"symbolclick a6x12mun\" rel=\"*\">\n            *</div>\n          <div style=\"float:left;border:1px solid black;\" (click)=\"addVal('/')\" class=\"symbolclick a6x12mun\" rel=\"/\">\n            /</div>\n          <div style=\"float:left;border:1px solid black;\" (click)=\"addVal('\\\\')\" class=\"symbolclick a6x12mun\" rel=\"\\\">\n            \\</div>\n          <div style=\"float:left;border:1px solid black;\" (click)=\"addVal('&lt;')\" class=\"symbolclick a6x12mun\" rel=\"<\">\n            &lt;</div>\n          <div class=\"decal-date-info\"></div>\n\n           <!-- <br><input type=\"hidden\" name=\"textclicked\" id=\"textclicked\" value=\"1\">\n             <div class=\"decal-date-info\">\n        SELECT DIFFERENT DATE DECALS BY CLICKING ON DESIRED CHOICE BELOW, STATE DECAL WILL BE THAT OF THE PLATE THAT WAS CHOSEN\t\t \n        </div> -->\n        <div id=\"decals\">\n\n            <ng-container *ngIf=\"products[0].edecal == 'Y'\">\n                <div class=\"decalslabel\">Emission Test Decal</div>\n                       <div id=\"decal4\" class=\"symbolclick customizeproductimage imgselector\"  [ngClass]=\"selectedDecal == 1 ? 'active' : ''\" (click)=\"changeimg('%3A',1);\" rel=\":\">\n                         <img src=\"assets/images/decals/decal4.png\">\n                        <div class=\"largedecal\"><img src=\"assets/images/decals/decal4.png\"></div>\n                       </div>\n                       <div id=\"decal5\" class=\"symbolclick customizeproductimage imgselector \" [ngClass]=\"selectedDecal == 2 ? 'active' : ''\" (click)=\"changeimg('%3A',2);\" rel=\":\">\n                         <img src=\"assets/images/decals/decal5.png\">\n                        <div class=\"largedecal\"><img src=\"assets/images/decals/decal5.png\"></div>\n                       </div>\n                       <div id=\"decal1\" class=\"symbolclick customizeproductimage imgselector \" [ngClass]=\"selectedDecal == 3 ? 'active' : ''\" (click)=\"changeimg('%3A',3);\" rel=\":\">\n                         <img src=\"assets/images/decals/decal1.png\">\n                        <div class=\"largedecal\"><img src=\"assets/images/decals/decal1.png\"></div>\n                       </div>\n                       <div id=\"decal2\" class=\"symbolclick customizeproductimage imgselector\" [ngClass]=\"selectedDecal == 4 ? 'active' : ''\" (click)=\"changeimg('%3A',4);\" rel=\":\">\n                         <img src=\"assets/images/decals/decal2.png\">\n                        <div class=\"largedecal\"><img src=\"assets/images/decals/decal2.png\"></div>\n                       </div>\n                       <div id=\"decal11\" class=\"symbolclick customizeproductimage imgselector \" [ngClass]=\"selectedDecal == 5 ? 'active' : ''\" (click)=\"changeimg('%3A',5);\" rel=\":\">\n                         <img src=\"assets/images/decals/decal11.png\">\n                        <div class=\"largedecal\"><img src=\"assets/images/decals/decal11.png\"></div>\n                       </div> <br>\n            </ng-container>\n               \n            <ng-container *ngIf=\"products[0].saftydecal == 'Y'\">\n                <div class=\"decalslabel\">Safety Test Decal</div>\n                 <div id=\"decal9\" class=\"symbolclick customizeproductimage imgselector \" (click)=\"changeimg('%3B');\" rel=\";\">\n                   <img src=\"assets/images/decals/decal9.png\">\n                  <div class=\"largedecal\"><img src=\"assets/images/decals/decal9.png\"></div>\n                 </div>\n                 <div id=\"decal10\" class=\"symbolclick customizeproductimage imgselector \" (click)=\"changeimg('%3B');\" rel=\";\">\n                   <img src=\"assets/images/decals/decal10.png\">\n                  <div class=\"largedecal\"><img src=\"assets/images/decals/decal10.png\"></div>\n                 </div>\n                 <div id=\"decal6\" class=\"symbolclick customizeproductimage imgselector \" (click)=\"changeimg('%3B');\" rel=\";\">\n                   <img src=\"assets/images/decals/decal6.png\">\n                  <div class=\"largedecal\"><img src=\"assets/images/decals/decal6.png\"></div>\n                 </div>\n                 <div id=\"decal7\" class=\"symbolclick customizeproductimage imgselector \" (click)=\"changeimg('%3B');\" rel=\";\">\n                   <img src=\"assets/images/decals/decal7.png\">\n                  <div class=\"largedecal\"><img src=\"assets/images/decals/decal7.png\"></div>\n                 </div>\n                 <div id=\"decal12\" class=\"symbolclick customizeproductimage imgselector \" (click)=\"changeimg('%3B');\" rel=\";\">\n                   <img src=\"assets/images/decals/decal12.png\">\n                  <div class=\"largedecal\"><img src=\"assets/images/decals/decal12.png\"></div>\n                 </div> <br>\n            </ng-container>\n            \n            <ng-container *ngIf=\"products[0]?.statedecal != null\">\n                <div class=\"decalslabel col-sm-12\"><p style=\"width: 100%;margin: auto\">State Decal</p></div> <br>\n                <div id=\"d\" class=\"symbolclick customizeproductimage imgselector \" (click)=\"changeimg('%3E')\" rel=\">\">\n                   <img src=\"https://www.licenseplates.tv/decals/{{stateDecal[0]}}\">\n                  <div class=\"largedecal\"><img src=\"https://www.licenseplates.tv/decals/{{products[0].statedecal}}\"></div>\n                 </div>\n            </ng-container>\n                 \n                 \n              </div>\n          <div id=\"decalsyear\">\n          <div class=\"decalslabel\">&nbsp;</div>\n                 <!--<div id=\"adecal3\" class=\"customizeproductimage imgselector  selected\" (click)=\"changeimg('decal3');\" >\n                   2013\n                 </div>//-->\n                 <div id=\"adecal4\" class=\"customizeproductimage imgselector \" [ngClass]=\"selectedDecal == 1 ? 'active' : ''\" (click)=\"changeimg('',1);\">\n                   2014\n                 </div>\n                 <div id=\"adecal5\" class=\"customizeproductimage imgselector \" [ngClass]=\"selectedDecal == 2 ? 'active' : ''\" (click)=\"changeimg('',2);\">\n                   2015\n                 </div>\n                 <div id=\"adecal1\" class=\"customizeproductimage imgselector \" [ngClass]=\"selectedDecal == 3 ? 'active' : ''\" (click)=\"changeimg('',3);\">\n                   2016\n                 </div>\n                 <div id=\"adecal2\" class=\"customizeproductimage imgselector \" [ngClass]=\"selectedDecal == 4 ? 'active' : ''\" (click)=\"changeimg('',4);\">\n                   2017\n                 </div>\n                 <div id=\"adecal11\" class=\"customizeproductimage imgselector \" [ngClass]=\"selectedDecal == 5 ? 'active' : ''\" (click)=\"changeimg('',5);\">\n                   2018\n                 </div>\n              </div> <br style=\"margin-bottom: 1em;\">\n\n                </div>\n              </div>\n        \n       \n        \n       \n        \n        \n            <style type=\"text/css\">\n              #decals,#decalsyear {clear: both !important;display: block !important;float: none !important;width: 100% !important;padding: 10px;}\n              #decals .customizeproductimage , #decalsyear .customizeproductimage {float: left;margin-right: 10px;text-align: center;width: 60px;}\n              #decals .customizeproductimage.imgselector.active , #decalsyear .customizeproductimage.imgselector.active{ border:1px solid #090;}\n              .largedecal{background-color: rgb(255, 255, 255); position: absolute; display: none; border:1px solid #dc232f;}\n              #decals .customizeproductimage.imgselector:hover .largedecal{display:block;}\n            </style>\n                <div class=\"clearBoth\"></div>\n                        </div>\n               \n                 \n              \n                  </div>\n\n        <div class=\"card-body\">\n            <!-- <a class=\"shop_now_btn\" href=\"javascript:void(0)\"><img src=\"assets/images/shop_now_button.png\" (click)=\"subCat(item)\" width=\"250\" alt=\"Shop Now\"></a> -->\n            <!-- <h5 style=\"font-size: 18px;width: 98%;margin: auto;color: #000\" class=\"card-title\">{{item.products_name}}</h5> -->\n\n            <!-- <h4 class=\"text-danger\">$100.00 $80.00 Save: 15% off</h4> -->\n                <!-- <div class=\"well\">\n            <h3 class=\"text-danger\"> <span class=\"old_price\">${{item.products_price | number : '1.2-2'}}&nbsp;</span> &nbsp;${{item.products_price_sorter | number : '1.2-2'}}&nbsp; Save: 15% off</h3>\n                        <a href=\"\"><img src=\"assets/images/buy.png\" alt=\"\">  </a>\n                </div> -->\n\n                <div class=\"row\">\n                    <div class=\"col-sm-12 text-center\" style=\"position: relative; top: 50px\">\n                        <img width=\"100%\" style=\"padding: 0 1em 0 1em;position: relative;top: -22px\" src=\"https://www.licenseplates.tv/images/legends/legend{{products[0].font1}}.png\" alt=\"\">\n                      </div> <br>\n                </div>\n\n\n                <ng-container *ngIf=\"plateHolders.length > 0\">\n                  <div class=\"row mb-4\">\n                    <div class=\"col-xs-12 text-center\">\n                        <h6>Universal Plate Holder</h6>\n                    </div>\n                    <div class=\"col-xs-12 text-center\">\n                      <img src=\"assets/images/universalplateholder.gif\" alt=\"\">\n                    </div>\n  \n                    <div class=\"col-xs-12 text-center\" style=\"padding-top: 1em;\">\n                      <div class=\"form-group\">\n                        <label for=\"exampleFormControlSelect1\">Please choose:</label>\n                        <select style=\"font-family: 'Roboto';\" class=\"form-control\" [(ngModel)]=\"plateType\"   #ctrl=\"ngModel\" id=\"exampleFormControlSelect1\">\n                          <option select>--NONE--</option>\n                          <option *ngFor=\"let plate of plateHolders\" (click)=\"selectPlate(plate)\">\n                            {{plate.products_options_values_name}}&nbsp;( ${{plate.options_values_price | number : '1.2-2'}} )\n                          </option>\n                          <!-- <option>2</option>\n                          <option>3</option>\n                          <option>4</option>\n                          <option>5</option> -->\n                        </select>\n                      </div>\n                    </div>\n                  </div>\n                </ng-container>\n\n\n           <div class=\"row\"> <br>\n             \n             <div style=\"padding-left: 24px\" class=\"col-xs-6 col-sm-6 text-center\">\n              <span class=\"tile_div\">\n                <button (click)=\"decriment()\" class=\"btn\"><i class=\"fa fa-minus\" aria-hidden=\"true\"></i></button>&nbsp;\n               &nbsp;<h5 class=\"txtnum\">{{num}}</h5>&nbsp;\n               <button (click)=\"incriment()\" class=\"btn\"><i class=\"fa fa-plus\" aria-hidden=\"true\"></i></button>&nbsp;\n              </span>               \n             </div>\n             <div (click)=\"updateCart()\" class=\"col-xs-6 col-sm-6 text-right\">\n               <!-- <img style=\"padding-right: 16px;\" src=\"assets/images/buy-now.png\" alt=\"\"> -->\n               <button class=\"btn btn-success btn-lg\">Update Cart&nbsp; <i style=\"color: #FFF;\" aria-hidden=\"true\" class=\"fa fa-shopping-cart\"></i></button>\n             </div>\n\n             \n\n           </div>     \n          \n          \n        </div>\n      </div>\n              </div>\n      </ng-container>\n     \n  </div>\n\n  <div *ngIf=\"products == 1\" class=\"row\">\n    <div id=\"prod-details\" class=\"col-sm-12 text-center\">\n\n       \n            <ul class=\"list-group text-left\" style=\"padding: 0 1.6em 0 1.6em\">\n                <ng-container *ngFor=\"let item of products\">\n                <li (click)=\"toggle('item1')\" class=\"list-group-item d-flex justify-content-between align-items-center\">\n                  Description\n                  <span *ngIf=\"itemOn != 'item1'\" class=\"badge badge-primary badge-pill\"><i class=\"fa fa-plus\" aria-hidden=\"true\"></i></span> \n                  <span *ngIf=\"itemOn == 'item1'\" class=\"badge badge-primary badge-pill\"><i class=\"fa fa-minus\" aria-hidden=\"true\"></i></span> \n                  <ng-container *ngIf=\"itemOn == 'item1'\">\n                      <hr>\n                  <p>{{item.products_description}}</p>\n                  </ng-container>\n                  \n                </li>\n                <li (click)=\"toggle('item2')\" class=\"list-group-item d-flex justify-content-between align-items-center\">\n                  Additional Information\n                  <span *ngIf=\"itemOn != 'item2'\" class=\"badge badge-primary badge-pill\"><i class=\"fa fa-plus\" aria-hidden=\"true\"></i></span>\n                  <span *ngIf=\"itemOn == 'item2'\" class=\"badge badge-primary badge-pill\"><i class=\"fa fa-minus\" aria-hidden=\"true\"></i></span>\n                  <ng-container *ngIf=\"itemOn == 'item2'\">\n                      <hr>\n                  <p>{{item.products_description}}</p>\n                  </ng-container>\n                </li>\n                <li (click)=\"toggle('item3')\" class=\"list-group-item d-flex justify-content-between align-items-center\">\n                  Help & Info\n                  <span *ngIf=\"itemOn != 'item3'\" class=\"badge badge-primary badge-pill\"><i class=\"fa fa-plus\" aria-hidden=\"true\"></i></span>\n                  <span *ngIf=\"itemOn == 'item3'\" class=\"badge badge-primary badge-pill\"><i class=\"fa fa-minus\" aria-hidden=\"true\"></i></span>\n                  <ng-container *ngIf=\"itemOn == 'item3'\">\n                      <hr>\n                  <p>{{item.products_description}}</p>\n                  </ng-container>\n                </li>\n                <li (click)=\"toggle('item4')\" class=\"list-group-item d-flex justify-content-between align-items-center\">\n                    Customer Service\n                    <span *ngIf=\"itemOn != 'item4'\" class=\"badge badge-primary badge-pill\"><i class=\"fa fa-plus\" aria-hidden=\"true\"></i></span>\n                    <span *ngIf=\"itemOn == 'item4'\" class=\"badge badge-primary badge-pill\"><i class=\"fa fa-minus\" aria-hidden=\"true\"></i></span>\n                    <ng-container *ngIf=\"itemOn == 'item4'\">\n                        <hr>\n                    <p>{{item.products_description}}</p>\n                    </ng-container>\n                  </li>\n                  <li (click)=\"toggle('item5')\" class=\"list-group-item d-flex justify-content-between align-items-center\">\n                      Our Company\n                      <span *ngIf=\"itemOn != 'item5'\" class=\"badge badge-primary badge-pill\"><i class=\"fa fa-plus\" aria-hidden=\"true\"></i></span>\n                      <span *ngIf=\"itemOn == 'item5'\" class=\"badge badge-primary badge-pill\"><i class=\"fa fa-minus\" aria-hidden=\"true\"></i></span>\n                      <ng-container *ngIf=\"itemOn == 'item5'\">\n                          <hr>\n                      <p>{{item.products_description}}</p>\n                      </ng-container>\n                    </li>\n              </ng-container>\n              </ul>\n       \n    \n      \n    </div>\n  </div>\n\n</div> <!-- container-fluid -->\n\n<style type=\"text/css\">\n  @font-face {font-family: 'aEECDMBW';src: url('{{fontUrl}}');}\n  .aEECDMBW{font-family:'aEECDMBW';}\n  </style>\n\n\n\n"

/***/ }),

/***/ "./src/app/home/edit-product/edit-product.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/home/edit-product/edit-product.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\nImport\r\n=========================== */\n/* -------------------------------------------------------------\n  Sass CSS3 Mixins! The Cross-Browser CSS3 Sass Library\n  By: Matthieu Aussaguel, http://www.mynameismatthieu.com, @matthieu_tweets\n\n  List of CSS3 Sass Mixins File to be @imported and @included as you need\n\n  The purpose of this library is to facilitate the use of CSS3 on different browsers avoiding HARD TO READ and NEVER\n  ENDING css files\n\n  note: All CSS3 Properties are being supported by Safari 5\n  more info: http://www.findmebyip.com/litmus/#css3-properties\n\n------------------------------------------------------------- */\n/*\nColor\n=========================== */\n/*\nFont Family\n=========================== */\n.material-icons {\n  font-family: 'Material Icons';\n  font-weight: normal;\n  line-height: 20px; }\n.material-icons {\n  font-family: 'Material Icons';\n  font-weight: normal;\n  line-height: 20px; }\n@font-face {\n  font-family: 'a6x12mun';\n  src: url(\"https://www.licenseplates.tv/fonts/truetype/ag_newgermandecalnew.ttf\"); }\n@font-face {\n  font-family: 'a6x12mun';\n  src: url('ag_newgermandecalnew.ttf'); }\n.a6x12mun {\n  font-family: 'a6x12mun'; }\n.form-control {\n  font-family: 'a6x12mun'; }\n.btn-success {\n  color: #fff;\n  background-color: #12a902;\n  border-color: #4cae4c; }\n.btn {\n  border-radius: 0px; }\n#decals .customizeproductimage.imgselector.active, #decalsyear .customizeproductimage.imgselector.active {\n  border: 1px solid #090; }\n.decalslabel {\n  float: none !important; }\n.decalslabel {\n  clear: both;\n  float: left;\n  font-weight: 700;\n  min-width: 135px;\n  padding-top: 12px; }\n.a6x12mun {\n  font-family: 'a6x12mun'; }\n.largedecal {\n  display: block; }\n.largedecal {\n  background-color: white;\n  position: absolute;\n  display: none;\n  border: 1px solid #dc232f;\n  -webkit-transform: scale(2);\n          transform: scale(2); }\n#decalsyear {\n  clear: both !important;\n  display: block !important;\n  float: none !important;\n  width: 100% !important;\n  padding: 10px; }\n#decalsyear .customizeproductimage {\n  float: left;\n  margin-right: 10px;\n  text-align: center;\n  width: 60px; }\n#decals .customizeproductimage, #decalsyear .customizeproductimage {\n  float: left;\n  margin-right: 10px;\n  text-align: center;\n  width: 60px; }\n.customizeproductimage {\n  border: 0 solid #ebebeb;\n  padding: 5px;\n  color: #dc232f;\n  text-align: center;\n  font-weight: bold; }\n.decal-date-info {\n  font-weight: 700;\n  color: #dc232f;\n  text-transform: uppercase;\n  clear: both;\n  display: block; }\n.symbolclick {\n  font-size: 20px;\n  height: 2px;\n  width: 40px; }\n.symbolclick {\n  border-radius: 10px;\n  display: table-cell;\n  font-size: 20px;\n  height: 34px;\n  margin: 2px;\n  padding-top: 1px;\n  text-align: center;\n  vertical-align: middle;\n  width: 50px;\n  cursor: pointer;\n  font-family: 'a6x12mun'; }\n.form-control {\n  background-color: #e5e5e5;\n  width: 90%;\n  height: 50px;\n  margin: auto; }\nhr {\n  margin-top: 10px;\n  margin-bottom: 10px; }\n.badge, ul.list-justify li.active, .btn-order.active.mat-menu-item {\n  background-color: #FFF !important; }\n#prod-details .btn {\n  border: 2px solid #000;\n  background: #FFF;\n  border-radius: 0px; }\n#prod-details ul li {\n  margin-bottom: 1em;\n  font-weight: bold;\n  font-size: 18px;\n  color: #000;\n  border: 2px solid #000;\n  border-radius: 0px; }\n#prod-details ul li i {\n  color: #000;\n  font-size: 20px; }\n#prod-details ul li p {\n  font-weight: 400;\n  transition: height 2s; }\n.tile_div .btn {\n  border-radius: 50%;\n  background: #FFF;\n  border: 2px solid #000;\n  height: 40px;\n  width: 41px; }\n.tile_div button, h5 {\n  display: block;\n  float: left; }\n.tile_div button, h5 {\n  margin-right: 0; }\n.btn.active.focus, .btn.active:focus, .btn.focus, .btn:active.focus, .btn:active:focus, .btn:focus {\n  outline: 0px auto -webkit-focus-ring-color;\n  outline-offset: -2px; }\n.btn i {\n  font-size: 18px;\n  color: #000;\n  position: relative;\n  top: 1px; }\n.txtnum {\n  margin-bottom: 0px;\n  font-size: 25px;\n  padding: 0 4px 0 4px;\n  position: relative;\n  top: 6px; }\n.container-fluid, .col-sm-4, .col-sm-12 {\n  padding-right: 0px !important;\n  padding-left: 0px !important; }\n.card {\n  border-top: 4px solid #c3c3c3;\n  padding: 1em; }\nh1, h2, h3, h4, h5 {\n  text-transform: none; }\n.card-text {\n  font-weight: 600;\n  color: #000; }\n.card_plate {\n  border-top: 2px solid #c3c3c3; }\n.shop_now_btn img {\n  margin: 1em; }\n.footerblock {\n  background: #fff;\n  margin: 20px;\n  box-shadow: 1px 2px 2px 0px;\n  padding: 8px 10px;\n  min-height: 70px;\n  border: 1px solid #d8d8d8; }\n.text-danger {\n  color: #dc232f; }\n.old_price {\n  text-decoration: line-through; }\n.btn-primary {\n  color: #fff;\n  background-color: #337ab7;\n  border-color: #6b696b;\n  border-radius: 0px;\n  width: 50%;\n  margin: 1em;\n  background-color: #6b696b !important;\n  font-size: x-large;\n  font-weight: bold; }\n.well {\n  background-color: #fff;\n  border: 0px solid #fff;\n  margin-bottom: 0px;\n  padding-bottom: 0px;\n  padding-top: 0px; }\n.banner {\n  padding: 60px 0 0 0;\n  background-color: #f5f5f5;\n  background-image: url(\"/assets/images/bg/brick-wall.png\");\n  position: relative; }\n.banner:before {\n    content: '';\n    position: absolute;\n    z-index: 1;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: rgba(0, 0, 0, 0.1);\n    /* For browsers that do not support gradients */\n    /* For Safari 5.1 to 6.0 */\n    /* For Opera 11.1 to 12.0 */\n    /* For Firefox 3.6 to 15 */\n    background: linear-gradient(rgba(0, 0, 0, 0.1), #f5f5f5);\n    /* Standard syntax */ }\n.banner .row {\n    margin-top: 0;\n    margin-bottom: 0;\n    position: relative;\n    z-index: 2; }\n.banner .row .content {\n      padding-top: 115px;\n      margin-bottom: 25px; }\n.banner .row .content .sub-title {\n        text-transform: uppercase; }\n.banner .row .content .title {\n        margin: 15px 0 40px 0;\n        text-transform: none; }\n.banner .wrap-demo {\n    height: auto;\n    padding: 0 15px; }\n.banner img {\n    display: block; }\n/* Loading\r\n======================== */\n.wrap-loading {\n  position: relative;\n  width: 100%;\n  top: 0;\n  right: 0; }\n.wrap-loading mat-spinner {\n    width: 50px;\n    height: 50px;\n    display: block;\n    margin: auto; }\n/* Wrap Home 2\r\n======================== */\n.wrap-home {\n  padding: 0 45px;\n  margin: 0;\n  position: relative;\n  background: #fff;\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG4AAABFBAMAAABZHs49AAAALVBMVEXGxsbHx8fGxsbExMTIyMjHx8fBwcHDw8PJycnJycnIyMjJycnJycnJycnExMSNogPvAAAAD3RSTlNQYFVFamU6QHp1cH+KhUprl3zAAAAMHElEQVR4Xj2X628cVZ6G3985VXZuWL9T1Z12HBadU3YTwiU63eXYhJu6fYnjIFB124bcPjh0qGa0rNSmg5vd0UhxLhtfwspOHIiJGDmDYRMnrLhkRg5OVrA7M2R3zApm2JmEBCkEmN0v+z+sI2Xm+XCq6sNzPj0q6cXS1aWvBnOJ08de/+Jab3/L9qmHfrlp1Bk6fGni6tvjzrXRk8ebpnpnendsm56k7ulDvzm5FvRhpg11ldyzM9N9b63rD45MXOsez204u+dYR3DjzVLcFsfl4Vq1XFl+lOPh8spV9UPD5XJY/se2F/Dk1tbG7Re8r0+OjzQF1UcPrDs0mgpbPhiuxLeeAorfO6GlhIlypOrWxuUw1d5t7pGhRLxMbTj+CYVbAuKicZ3k1ICO5OoNZ/KJLnVubupM0Sl4LcYZiDwjBbQUngZMMhnxZvEHs/rQv5FOYGMhqQLRwKv3J7ocVi2qI5lgkSRhOiYBD1qDQQDDkNKJYfY0tAbynC+AITYOKZVQZPIqEkqpjQn1zKdQ1mqAoQUIBIL7z0XRKjWlZ4vK8XIabGzeCJUgpWh9IllIUuaZA0BWa4TMnAURa5j1dd0tYDbaIV0wAZsNh9OKPSilWkRLosOYgeSurwQ0EEAwCA4aWNKaNzpcQBMwUGwpECtNgx2Upzuiq3LutGgdWv0BHAQMLZpZw7Fa44fFbk+z0kCrBql3PA1RUUZBIZ3rVl2wvvPo6pGsDiKtvYBZQCgtSF06ko6MbpZC30LUB4Dq/kEps+5gvouTec2Ku+9Z+lLA2uxTqEACFbsMwr9tvPDNhU92RPM3r1xe+mJx28Sn58cWFj4ZoQejkefbU1bMTBd3T1xZvDJ6ZWlicaEXS9fHTzXNj/3h5bvhfNmzt7P9e39wy5RKzhbO9s7PTw1snzu1bf3YKXbl25f1yq97jj8WIb5Dmevb74YTh6vb2qu1oXJ26rnh9g3ltnL8HoRohJbtyP45Lsdtz5fLMYQseEgAH90N50+vfl6qVjLV2r5yPCj9DOwrc9sjco7kkwOyQeVVX339mhfqwQQhLIjvhlOtxbe0EbjVuYGigBh0/FOWFOQARrpZA/qh17KAgAcbCPXXcCqWHWczkhYSAHt4PMMQpiDA8BxBDXh4PxgMDQ+wGsweQfOL2cCQKwKZ28RRjvo6RhsU54QWBE0CAt69g4NAMzELCAjSrAGT36dZKAFdr5Hq0wrejtkI2KxYMggamva8Y30ws/TFHRNaEJKTe3OaSQikCgBYU7TbbkK42eNHGQ40BXbPc1aCyRekXSgi0gpidp+O/BaXRXRGcwANnLMRa8qzB1BGM2YO+BkNeIYstGQBthS8O2n9+maHBKCF0lLBQAkJqICA2xoADtTZFJKJkUJXR3/3zMy5gcZATL05lfik0L+zP7o+f3L67Pq5xJG353q2Rw+MdAgdzA0oEwUrX3qIcPnbs9NjXU7y3MzUXO+2xNy6kV07HpyeP9o46uH1xu3jc4e/fGzXwvjo+y+9zqed+rDcNTp26GAC/xP6djmw0nBcbqvtrdXKpeXXuFytxeU76b2Qs4P57TNH9q4dqa9VqtlqW0mGmJxCYVXQdLSuLWUpyFm0+3nlJdCv6kpnEsmxqXVfdW2ZUT/WD05vOVQNsxRCyTC0z4XIB6D6P+5V+a7kg3Pz3QVjvCS6vZ/VzmVKOZbPQlAhnXdVdP/fQwDWg4+GulnkKQH679Z80uO8WiY9gISIvIcfb2nOjvihz44HymxhGRsLCpsVtAUp5JRDfTcyKrdssTIdjlNwmvq9NfuEbOrJ+R6HsArk496WCsFCS82sGd0g0zO231NIJEhF3WcShbwQ9LSjGP6sZA/cAG6Xcvj+WwJWagYDnSioBONmq1KJOyL3pxOKVV4dm2IO6zslMSud8TvrwSuttFQRAOBr5KHq+eqrxWWRlBcllsmztut7GOAp2azJwxaR+t6pbMUdlI5YGyAyhf6J60PLDiuhOG+UBsTxmUMbrxPIy/ka0MCzuPS5fUrCAgSA4YWIS4PdLUrtTp7Mq6IXBLlWXjyx7+n3KjoFP2yX7ZDSyid+f/n02MLrEzPvL0ysP4dvF28sXLtxambh1PjHLauHPo3akdlycG7ljZMXz686tuvD8d89nzn4+dHeqeuLKx7oOXTj0a9SteRLGu78J1cubSseHyioi2d7D887Z3aMjfcudOWbe+4vD8elSvuTeTud2vDCr6WNgTLX4pLe5aDQ3zGQvnjaLQzkJQnU8UewK0uAtaEqFKa99vDBFm4utcu4AtRCNLcNCmw5geRAwGlARwE02CZ3p2iAhDLG5am04pU7RnefqCKXSBaNgWLSjAzWlKBQAIyUEQsJa4PTJwQ5WikEhW4IFW3GikiS6ygW1mqWDEA//gYKLSYDgJsBKQP1yH9UQd+ZYo6V0CrdYG7LR2crprOfq8IhBqwFiz0SupDIMQSYPQbCe0beMURBoUCRFxE5CvqBviFs5a0252ag0MFo9h9qg0MsdEBWA5Csd31dgni+JaD+pNCuJxTBPPtSfuCroaYsG62TgJViTRWJDpsjhYgljCL10IcllcwcNE2GteCh7d39eodfeZpLocwoBlxAOVAAJRSUuU8CRgdoWH2wCuMq6jOhxIZuLVg/8vOoq/I4U9Iix76VUGLLt/giJ0iluxvnz701vri0tPTHSj602OQFyenG3/3SK+pXbm5+P9/x0avcYzMvfc8kmpF9pBOy9MXS0o2Wkx1d57zF4v8e6Gl8+tTlsWuzz1y+ND9+8vLyTf++p+ny+Pxb79889/SeJ5Y+W7y48+zkFOLB0FZ1qA8LL1XNnghJBMmmgUDnNwRLv111ZfrAr3ceYRYhSxlaG0A0Tfan13TCFLVHzX/uk5LpuBy2MkxV5q8NjO9ovPqvL3/68eYzs+PBhVTnI7IuLovOXzkrOt5tGbtUQocCQ4hJKhTzAXkqrd2EDh6Y2Hk5cvXKdUfLO45M9G1WH7vBwKmqivfjR5HbtOJFgAXgNWxX3R3GIyEC46SNcoPzH2jW8J5YOnXwp77/o5+loK+5vPexrPJIb9yHdCHvJZV476KjFKs0SJik8ETT5Vc9EZCBC7jAbKgE3pEZd5XnKLe5M49cvp8Ni/PHIyqq4zCsiDTEisUKBR4SAlBCI7yT12RP1rjFDu2KIIDhgvESxa40NkGwJqOM0KDVv91rPBgBABnCGokhdBzVye80EdnIAFaLwMOBjfmAtSYRCHf5CFa3DwmAyELgtoNmrrf6ZGrIFWgRGgxE0lCBsSsvAqUKEHkIIfSqmTdfCSDBACRVgf37Sf7ijRwxOgwXNIAwPTp27vCJIC3gJiNRjFxo331iOGyQMpdlaFuNa+1koQ++WbSKIgANFolj//nhmbkevO5cGJ0907t4ff09B0cnTo+8dv7YjdPH1x399u3hz0rVSrkSftAZXrk0cfM3S8v8FxI7tz2xszCI9b6/N9N/evJP45sTb0WHeXj2bGqt91G1d+3fDe+7lNtP3zVI0nvPv5Fd+qafXEzO1lLxcLXttVKsbaKxVh//36/i6vC+cC3Wldt2x1vjtrXVhpU/qYesrvju2ukXt64Vw601xHE1U91f5C9Da8O2Unx/7zvxcFwNK0++F8fx8GCtVDp07uK7zt/0J3ZuaKvVqnFb3ctxDArYagFrAgj21L2dlftL5Lo2bq/VYHzAO/x7uuW6ORYNWPVzD9zwyE9bcwBICwECGFKR7qyVhCWBgSAHKYiKtzMeI3vbMwStAAi9ZosFQL4UAEEgMALUN+SiZXPrLQFISJJS3svsexR4WcC7FZCwD++tAIAMBGSGSGoGvGifYCIXJCMNId37inPNHpApMPDXsQEN1gIQGgZgENTUEHtCZIVOQWufOfTOe32MHxRLzXfHxpvWB5ATBgJBRggtRPoXL3DOJyPgz0KQlqR3ZwWkKfBK7y9jo0dI+IFIC0GBIRibkd6/7PdT7GZERhgEni6gIQe+D1Qk4C9j49ArEtBSyuZb9YBFBiI5qZc/s1anCqyLxpHU9EP+NnwLH3LD3bFRSnyPhcUbi9cmbl5dXDz81lnVf7gnOvbt9asL21Z9dv3SyMXR617qxhX/n3Yt/1q/eOzC3bHxTWvr/wPSDj5oMxdQWAAAAABJRU5ErkJggg==\"); }\n.wrap-home > .wrap-slider {\n    overflow: hidden; }\n.wrap-home > .wrap-slider > .row {\n      position: relative;\n      z-index: 1;\n      margin: 0;\n      transition: all 0.3s ease-in-out; }\n.wrap-home > .wrap-slider > .row .col {\n        padding: 0; }\n.wrap-home > .wrap-slider > .row .col .valign-wrapper {\n          border-left: solid 1px #d0d0d0;\n          border-right: solid 1px #d0d0d0;\n          margin-left: -1px; }\n.wrap-home > .wrap-slider > .row .col .valign-wrapper .content {\n            display: block;\n            width: 100%;\n            padding: 0 15px;\n            letter-spacing: .5px; }\n.wrap-home > .wrap-slider > .row .col .valign-wrapper .content .material-icons {\n              position: relative;\n              top: 2px; }\n.wrap-home > .wrap-slider > .row .col .valign-wrapper .content img {\n              width: 100%;\n              padding: 15px;\n              margin-bottom: 15px; }\n.wrap-home > .wrap-slider > .row .col .valign-wrapper .content h1, .wrap-home > .wrap-slider > .row .col .valign-wrapper .content h2, .wrap-home > .wrap-slider > .row .col .valign-wrapper .content h3, .wrap-home > .wrap-slider > .row .col .valign-wrapper .content h4, .wrap-home > .wrap-slider > .row .col .valign-wrapper .content h5, .wrap-home > .wrap-slider > .row .col .valign-wrapper .content h6 {\n              font-weight: 900;\n              text-transform: none; }\n.wrap-home > .wrap-slider > .row .col.demo .valign-wrapper .content {\n          padding: 55px; }\n.wrap-home .nav {\n    position: absolute;\n    background: transparent;\n    width: 45px;\n    height: 100%;\n    text-align: center !important;\n    line-height: 35px;\n    left: 0;\n    top: 0;\n    z-index: 2;\n    border: 0;\n    outline: 0;\n    display: block;\n    color: #8f8f8f;\n    background: #fff; }\n.wrap-home .nav:focus {\n      background: #fff; }\n.wrap-home .nav.next {\n      margin-left: -45px;\n      left: 100%; }\n.wrap-home .nav:disabled {\n      filter: alpha(opacity=50);\n      -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=50)\";\n      -webkit-opacity: 0.5;\n      -khtml-opacity: 0.5;\n      -moz-opacity: 0.5;\n      -ms-opacity: 0.5;\n      -o-opacity: 0.5;\n      opacity: 0.5; }\n.wrap-home .nav mat-icon {\n      position: relative;\n      right: 6px;\n      top: 2px;\n      font-size: 32px; }\n/* Responsive\r\n======================== */\n@media (max-width: 1200px) {\n  .wrap-home > .wrap-slider > .row .col .valign-wrapper .content {\n    padding: 0 30px; } }\n@media (max-width: 920px) {\n  .wrap-home {\n    padding: 0; }\n    .wrap-home > .wrap-slider {\n      border: 0; }\n      .wrap-home > .wrap-slider .row {\n        width: 100% !important;\n        -webkit-transform: translateX(0) !important;\n                transform: translateX(0) !important; }\n        .wrap-home > .wrap-slider .row .col {\n          width: 100% !important;\n          border-bottom: solid 1px #efefef;\n          background: rgba(255, 255, 255, 0.5); }\n          .wrap-home > .wrap-slider .row .col.demo {\n            background: transparent; }\n          .wrap-home > .wrap-slider .row .col .valign-wrapper {\n            height: auto !important; }\n            .wrap-home > .wrap-slider .row .col .valign-wrapper .content {\n              padding: 55px 30px; }\n    .wrap-home .nav {\n      display: none; } }\n@media (min-width: 768px) and (max-width: 920px) {\n  .wrap-home > .wrap-slider > .row .col .valign-wrapper .content {\n    width: 80%;\n    display: table;\n    margin: auto;\n    position: relative;\n    overflow: hidden;\n    text-align: left !important;\n    padding-left: 250px; }\n    .wrap-home > .wrap-slider > .row .col .valign-wrapper .content img {\n      padding: 30px;\n      position: absolute;\n      left: 0;\n      top: 0;\n      width: 250px; } }\n@media (max-width: 767px) {\n  .wrap-home > .wrap-slider > .row .col .valign-wrapper {\n    border: 0; }\n    .wrap-home > .wrap-slider > .row .col .valign-wrapper .content {\n      padding: 55px 15px; }\n      .wrap-home > .wrap-slider > .row .col .valign-wrapper .content img {\n        width: 250px;\n        display: block;\n        margin-left: auto;\n        margin-right: auto; } }\n"

/***/ }),

/***/ "./src/app/home/edit-product/edit-product.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/home/edit-product/edit-product.component.ts ***!
  \*************************************************************/
/*! exports provided: EditProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProductComponent", function() { return EditProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_lib_service_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/lib/service/product.service */ "./src/app/lib/service/product.service.ts");
/* harmony import */ var _dropDown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dropDown */ "./src/app/home/edit-product/dropDown.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditProductComponent = /** @class */ (function () {
    function EditProductComponent(router, _productService, route) {
        this.router = router;
        this._productService = _productService;
        this.route = route;
        this.imgUrl = 'https://www.licenseplates.tv/images/';
        this.text = '';
        this.text2 = '';
        this.Urltext = '';
        this.num = 1;
        this.Urltext2 = '';
    }
    EditProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dropDown1 = _dropDown__WEBPACK_IMPORTED_MODULE_3__["fontArray_1"];
        this.dropDown1 = _dropDown__WEBPACK_IMPORTED_MODULE_3__["fontArray_2"];
        this.route.params.subscribe(function (params) {
            return _this.getProdDetail(params.id);
        });
        // this.Urltext = encodeURIComponent(this.text);
    };
    EditProductComponent.prototype.getEditItem = function () {
        console.log('it\'s working...');
        var Item = JSON.parse(localStorage.getItem('editItem'));
        if (Item.plateText1) {
            this.text = Item.plateText1;
            this.Urltext = encodeURIComponent(Item.plateText1);
            console.log(this.text);
        }
        if (Item.plateText2) {
            this.text2 = Item.plateText2;
            this.Urltext2 += encodeURIComponent(Item.plateText2);
        }
        this.num = Item.itemQuantity;
        this.plateTypeName = Item.plateType;
        this.plateType = Item.plateType + '($' + Item.platePrice + ')';
        this.plateholderPrice = Item.platePrice;
    };
    EditProductComponent.prototype.setFont = function (e) {
        this.font = e.id;
    };
    EditProductComponent.prototype.selectInput1 = function () {
        // console.log('input 1 selected!');
        this.input1 = true;
        this.input2 = false;
    };
    EditProductComponent.prototype.selectInput2 = function () {
        // console.log('input 2 selected!');
        this.input2 = true;
        this.input1 = false;
    };
    EditProductComponent.prototype.changeimg = function (val, num) {
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
    EditProductComponent.prototype.addVal = function (val) {
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
    EditProductComponent.prototype.addCart = function () {
        var cart = {
            productImage: this.products[0].products_image,
            productName: this.products[0].products_name,
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
            }
        }
        else {
            var CartItem = [];
            CartItem.push(cart);
            localStorage.cartItems = JSON.stringify(CartItem);
            this.getCartitemCount();
        }
    };
    EditProductComponent.prototype.updateCart = function () {
        var Items = JSON.parse(localStorage.getItem('cartItems'));
        var Item = JSON.parse(localStorage.getItem('editItem'));
        Items[Item.indexVal].plateText1 = this.text ? this.text : '';
        Items[Item.indexVal].plateText2 = this.text2 ? this.text2 : '';
        Items[Item.indexVal].itemQuantity = this.num;
        localStorage.cartItems = JSON.stringify(Items);
        this.router.navigateByUrl('cart');
    };
    EditProductComponent.prototype.arrayCheck = function (cart) {
        var _this = this;
        var Items = JSON.parse(localStorage.getItem('cartItems'));
        if (Items.map(function (e) {
            _this.index = e.plateText1.indexOf(cart.plateText1);
            return e.plateText1;
        }).indexOf(cart.plateText1) > -1) {
            if (cart.plateText2 != '') {
                this.arrayCheck2(cart);
            }
            else {
                Items[this.index].itemQuantity += 1;
                localStorage.cartItems = JSON.stringify(Items);
                this.getCartitemCount();
            }
        }
        else {
            Items.push(cart);
            localStorage.cartItems = JSON.stringify(Items);
            this.getCartitemCount();
        }
    };
    EditProductComponent.prototype.arrayCheck2 = function (cart) {
        var Items = JSON.parse(localStorage.getItem('cartItems'));
        if (Items.map(function (e) { return e.plateText2; }).indexOf(cart.plateText2) > -1) {
            this.updateQuantity(cart);
        }
        else {
            Items.push(cart);
            localStorage.cartItems = JSON.stringify(Items);
        }
    };
    EditProductComponent.prototype.updateQuantity = function (cart) {
    };
    EditProductComponent.prototype.getCartitemCount = function () {
        var Items = JSON.parse(localStorage.getItem('cartItems'));
        var itemNum = Items.length;
        this._productService.changeItem(itemNum);
    };
    EditProductComponent.prototype.changeTxt = function () {
        // console.log('hhhh' + encodeURIComponent(this.text));
        this.Urltext = encodeURIComponent(this.text);
        this.Urltext2 = encodeURIComponent(this.text2);
    };
    EditProductComponent.prototype.toggle = function (item) {
        if (item === this.itemOn) {
            this.itemOn = '';
        }
        else {
            this.itemOn = item;
        }
    };
    EditProductComponent.prototype.selectPlate = function (val) {
        if (val == '--NONE--') {
            this.plateholderPrice = 0;
        }
        else {
            this.plateTypeName = val.products_options_values_name;
            this.plateholderPrice = val.options_values_price;
        }
    };
    EditProductComponent.prototype.getProdDetail = function (id) {
        var _this = this;
        this._productService.getProdDetails(id)
            .subscribe(function (data) {
            console.log(data);
            _this.products = data.product;
            _this.plateHolders = data.productvariation;
            _this.getEditItem();
            if (_this.products[0].statedecal) {
                _this.stateDecal = _this.products[0].statedecal.split(';');
            }
            console.log('https://www.licenseplates.tv/fonts/truetype/' + _this.products[0].font1 + '.ttf');
            _this.fontUrl = 'https://www.licenseplates.tv/fonts/truetype/' + _this.products[0].font1 + '.ttf';
        });
    };
    EditProductComponent.prototype.decriment = function () {
        if (this.num !== 1) {
            this.num = this.num - 1;
        }
    };
    EditProductComponent.prototype.incriment = function () {
        this.num = this.num + 1;
    };
    EditProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-product',
            template: __webpack_require__(/*! ./edit-product.component.html */ "./src/app/home/edit-product/edit-product.component.html"),
            styles: [__webpack_require__(/*! ./edit-product.component.scss */ "./src/app/home/edit-product/edit-product.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            app_lib_service_product_service__WEBPACK_IMPORTED_MODULE_2__["productService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], EditProductComponent);
    return EditProductComponent;
}());



/***/ }),

/***/ "./src/app/home/edit-product/edit-product.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/home/edit-product/edit-product.module.ts ***!
  \**********************************************************/
/*! exports provided: EditProductModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProductModule", function() { return EditProductModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _edit_product_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-product-routing.module */ "./src/app/home/edit-product/edit-product-routing.module.ts");
/* harmony import */ var _edit_product_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-product.component */ "./src/app/home/edit-product/edit-product.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var EditProductModule = /** @class */ (function () {
    function EditProductModule() {
    }
    EditProductModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _edit_product_routing_module__WEBPACK_IMPORTED_MODULE_2__["EditProductRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
            ],
            declarations: [_edit_product_component__WEBPACK_IMPORTED_MODULE_3__["EditProductComponent"]]
        })
    ], EditProductModule);
    return EditProductModule;
}());



/***/ })

}]);
//# sourceMappingURL=home-edit-product-edit-product-module.js.map