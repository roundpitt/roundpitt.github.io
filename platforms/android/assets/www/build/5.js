webpackJsonp([5],{

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuickViewPageModule", function() { return QuickViewPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__quickview__ = __webpack_require__(321);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var QuickViewPageModule = (function () {
    function QuickViewPageModule() {
    }
    return QuickViewPageModule;
}());
QuickViewPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__quickview__["a" /* QuickViewPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__quickview__["a" /* QuickViewPage */]),
            __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__quickview__["a" /* QuickViewPage */]
        ]
    })
], QuickViewPageModule);

//# sourceMappingURL=quickview.module.js.map

/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuickViewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { MainPage } from '../pages';
var QuickViewPage = (function () {
    function QuickViewPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.dateToday = new Date();
        this.locale = "en-us";
        this.month = this.dateToday.toLocaleString(this.locale, { month: "short" });
        this.day = this.dateToday.getDate();
        this.accounts = [
            { desc: 'DEBIT CARD PURCHASE', from: 'spend', to: 'Company A', type: 'Other' },
            { desc: 'DEBIT CARD PURCHASE', from: 'spend', to: 'Company B', type: 'Other' },
            { desc: 'DEBIT CARD PURCHASE', from: 'spend', to: 'Company C', type: 'Other' },
            { desc: 'DEBIT CARD PURCHASE', from: 'spend', to: 'Company D', type: 'Other' },
            { desc: 'DEBIT CARD PURCHASE', from: 'spend', to: 'Company E', type: 'Other' },
            { desc: 'DEBIT CARD PURCHASE', from: 'spend', to: 'Company F', type: 'Other' },
            { desc: 'DEBIT CARD PURCHASE', from: 'spend', to: 'Company G', type: 'Other' },
            { desc: 'DEBIT CARD PURCHASE', from: 'spend', to: 'Company H', type: 'Other' },
            { desc: 'DEBIT CARD PURCHASE', from: 'spend', to: 'Company I', type: 'Other' },
            { desc: 'DEBIT CARD PURCHASE', from: 'spend', to: 'Company J', type: 'Other' },
            { desc: 'DEBIT CARD PURCHASE', from: 'spend', to: 'Company K', type: 'Other' },
            { desc: 'DEBIT CARD PURCHASE', from: 'spend', to: 'Company L', type: 'Other' },
            { desc: 'DEBIT CARD PURCHASE', from: 'spend', to: 'Company M', type: 'Other' },
            { desc: 'DEBIT CARD PURCHASE', from: 'spend', to: 'Company N', type: 'Other' },
        ];
    }
    QuickViewPage.prototype.ngAfterViewInit = function () {
    };
    return QuickViewPage;
}());
QuickViewPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-quickview',template:/*ion-inline-start:"C:\Users\round\Documents\facialRec\facialRec\src\pages\quickview\quickview.html"*/'<ion-content>\n<ion-header hide-back-button="true">\n  <ion-navbar>\n    <ion-title style="    position: relative; top: 2px;" text-center>QUICK VIEW</ion-title>\n      <ion-img style="    top: 17px;\n    position: absolute;\n    right: 5px;\n    width: 35px;\n    height: 40px;"  class="headerText" src="assets/img/calendarIcon.png"></ion-img>\n      <ion-img style="    top: 17px;\n    position: absolute;\n    right: 47px;\n    width: 35px;\n    height: 40px;"  class="headerText" src="assets/img/barIcon.png"></ion-img>\n  </ion-navbar>\n</ion-header>\n<div class="mainContent">\n  <ion-list>\n    <ion-item>\n      <h2 class="headerText bold">FREE BALANCE</h2>\n      <h1 class="amountText green">$1,000.00</h1>\n    </ion-item>\n\n    <ion-item class="slim">\n      <h2 class="headerText bold">ACCOUNTS</h2>\n    </ion-item>\n\n    <ion-item class="medium image">\n      <ion-img width="10px" height="40px"  class="headerText" src="assets/img/spendDollar.png"></ion-img>\n      <h2 class="headerText orange">Spend</h2>\n      <h2 class="amountText">$1,000.00</h2>\n    </ion-item>\n\n    <ion-item class="medium image">\n      <ion-img width="10px" height="40px"  class="headerText" src="assets/img/reserveStar.png"></ion-img>\n      <h2 class="headerText blue">Reserve</h2>\n      <h2 class="amountText">$0.00</h2>\n    </ion-item>\n\n    <ion-item class="slim">\n      <p class="headerText blue">Show all accounts</p>\n    </ion-item>\n\n    <ion-item>\n      <h2 class="headerText bold">RECENT TRANSACTIONS</h2>\n    </ion-item>\n\n    <ion-item class="postedDate">\n      <h2 class="headerText" >{{(month?month:"Nov") + " " + (day?day:"15")}}</h2> <!-- sometimes date returns undefined. Needs to be bug proof for presentation. -->\n    </ion-item>\n\n    <ion-item *ngFor="let account of accounts">\n      <h3>{{account.desc}}</h3>\n    </ion-item>\n  </ion-list>\n</div>\n\n  <ion-footer id="footer">\n        <div class="row" text-center>\n          <div class="column orange">\n            <ion-img width="10px" height="40px" style="position:relative; top:7px" src="assets/img/quickViewIcon.png"></ion-img>\n            Quick View\n          </div>\n          <div class="column">\n            <ion-img width="10px" height="40px" style="position:relative; top:7px" src="assets/img/depositIcon.png"></ion-img>\n            Deposit\n          </div>\n          <div class="column">\n            <ion-img width="10px" height="40px" style="position:relative; top:7px" src="assets/img/transferIcon.png"></ion-img>\n            Transfer\n          </div>\n          <div class="column"><button class="more" ion-button menuToggle>\n            <ion-img width="10px" height="40px" style="position:relative; top:7px" src="assets/img/moreIcon.png"></ion-img>\n            More\n          </button>\n          </div>\n        </div>\n</ion-footer>\n</ion-content>\n'/*ion-inline-end:"C:\Users\round\Documents\facialRec\facialRec\src\pages\quickview\quickview.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
], QuickViewPage);

//# sourceMappingURL=quickview.js.map

/***/ })

});
//# sourceMappingURL=5.js.map