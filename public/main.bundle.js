webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<body class=\"fixed-nav sticky-footer bg-dark\" [ngClass]=\"{'sidenav-toggled': isSideNavClosed}\">\n    <!-- Navigation -->\n    <app-navigation [(isSideNavClosed)]=\"isSideNavClosed\"></app-navigation>\n\n    <div class=\"content-wrapper\">\n      <div class=\"container-fluid\">\n        \n        <!-- Breadcrumbs-->\n        <app-breadcrumbs></app-breadcrumbs>\n        \n        <div class=\"row\">\n          <div class=\"col-12\">\n            <router-outlet></router-outlet>\n          </div>\n        </div>\n      </div> <!-- /.container-fluid-->\n      \n      <!-- Footer -->\n      <app-footer></app-footer>\n\n    </div><!-- /.content-wrapper-->\n    \n</body>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.isSideNavClosed = false;
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__navigation_navigation_component__ = __webpack_require__("../../../../../src/app/navigation/navigation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__breadcrumbs_breadcrumbs_component__ = __webpack_require__("../../../../../src/app/breadcrumbs/breadcrumbs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__datatable_datatable_component__ = __webpack_require__("../../../../../src/app/datatable/datatable.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__navigation_navigation_component__["a" /* NavigationComponent */],
            __WEBPACK_IMPORTED_MODULE_6__breadcrumbs_breadcrumbs_component__["a" /* BreadcrumbsComponent */],
            __WEBPACK_IMPORTED_MODULE_7__footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_9__datatable_datatable_component__["a" /* DatatableComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot([
                {
                    path: '',
                    redirectTo: '/dashboard/all',
                    pathMatch: 'full'
                },
                {
                    path: 'dashboard/all',
                    component: __WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard_component__["a" /* DashboardComponent */]
                }
            ])
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/breadcrumbs/breadcrumbs.component.html":
/***/ (function(module, exports) {

module.exports = "<ol class=\"breadcrumb\">\n  <li class=\"breadcrumb-item\">\n    <a href=\"index.html\">Dashboard</a>\n  </li>\n  <li class=\"breadcrumb-item active\">All</li>\n</ol>"

/***/ }),

/***/ "../../../../../src/app/breadcrumbs/breadcrumbs.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/breadcrumbs/breadcrumbs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BreadcrumbsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BreadcrumbsComponent = (function () {
    function BreadcrumbsComponent() {
    }
    BreadcrumbsComponent.prototype.ngOnInit = function () {
    };
    return BreadcrumbsComponent;
}());
BreadcrumbsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-breadcrumbs',
        template: __webpack_require__("../../../../../src/app/breadcrumbs/breadcrumbs.component.html"),
        styles: [__webpack_require__("../../../../../src/app/breadcrumbs/breadcrumbs.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], BreadcrumbsComponent);

//# sourceMappingURL=breadcrumbs.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  dashboard works!\n</p>\n<div class=\"container-fluid\">\n\t<div class=\"row\" *ngIf=\"jobsTableInfo\">\n\t\t<app-datatable class=\"container-fluid\" [tableData]=\"jobsTableInfo\"></app-datatable>\n\t</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = (function () {
    function DashboardComponent(http) {
        this.http = http;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getJobs()
            .then(function (data) { return _this.setJobsTableData(data); });
    };
    DashboardComponent.prototype.getJobs = function () {
        return this.http.get('/api/jobs')
            .toPromise()
            .then(function (response) {
            return response.json().data;
        });
    };
    DashboardComponent.prototype.setJobsTableData = function (data) {
        this.jobsTableInfo = {
            headers: [
                'Build Name',
                'Created On'
            ],
            data: data
        };
    };
    ;
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], DashboardComponent);

var _a;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/datatable/datatable.component.html":
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-striped table-hover table-dark\">\n  <thead>\n    <tr>\n      <th *ngFor=\"let header of tableData.headers\">\n        {{header}}\n      </th>      \n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let job of tableData.data\">\n      <td>{{job.buildName}}</td>\n      <td>{{job.creationDate}}</td>\n    </tr>\n  </tbody>\n</table>"

/***/ }),

/***/ "../../../../../src/app/datatable/datatable.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/datatable/datatable.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatatableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DatatableComponent = (function () {
    function DatatableComponent() {
    }
    DatatableComponent.prototype.ngOnInit = function () {
        console.log('tableData', this.tableData);
    };
    return DatatableComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], DatatableComponent.prototype, "tableData", void 0);
DatatableComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-datatable',
        template: __webpack_require__("../../../../../src/app/datatable/datatable.component.html"),
        styles: [__webpack_require__("../../../../../src/app/datatable/datatable.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], DatatableComponent);

//# sourceMappingURL=datatable.component.js.map

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"sticky-footer\">\n  <div class=\"container\">\n    <div class=\"text-center\">\n      <small>Copyright © Your Website 2017</small>\n    </div>\n  </div>\n</footer>"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/footer/footer.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/navigation/navigation.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark fixed-top\" id=\"mainNav\">\n  <a class=\"navbar-brand\" routerLink=\"/dashboard/all\">{{title}}</a>\n  <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\n    <ul class=\"navbar-nav navbar-sidenav\" id=\"exampleAccordion\">\n      <li class=\"nav-item\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Dashboard\">\n        <a class=\"nav-link\" routerLink=\"/dashboard/all\">\n          <i class=\"fa fa-fw fa-dashboard\"></i>\n          <span class=\"nav-link-text\">Dashboard</span>\n        </a>\n      </li>\n    </ul>\n    <ul class=\"navbar-nav sidenav-toggler\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link text-center\" id=\"sidenavToggler\" (click)=\"toggleSideNav(isSideNavClosed)\">\n          <i class=\"fa fa-fw fa-angle-left\"></i>\n        </a>\n      </li>\n    </ul>\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item dropdown\">\n        <a class=\"nav-link dropdown-toggle mr-lg-2\" id=\"messagesDropdown\" href=\"#\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          <i class=\"fa fa-fw fa-envelope\"></i>\n          <span class=\"d-lg-none\">Messages\n            <span class=\"badge badge-pill badge-primary\">12 New</span>\n          </span>\n          <span class=\"indicator text-primary d-none d-lg-block\">\n            <i class=\"fa fa-fw fa-circle\"></i>\n          </span>\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"messagesDropdown\">\n          <h6 class=\"dropdown-header\">New Messages:</h6>\n          <div class=\"dropdown-divider\"></div>\n          <a class=\"dropdown-item\" href=\"#\">\n            <strong>David Miller</strong>\n            <span class=\"small float-right text-muted\">11:21 AM</span>\n            <div class=\"dropdown-message small\">Hey there! This new version of SB Admin is pretty awesome! These messages clip off when they reach the end of the box so they don't overflow over to the sides!</div>\n          </a>\n          <div class=\"dropdown-divider\"></div>\n          <a class=\"dropdown-item\" href=\"#\">\n            <strong>Jane Smith</strong>\n            <span class=\"small float-right text-muted\">11:21 AM</span>\n            <div class=\"dropdown-message small\">I was wondering if you could meet for an appointment at 3:00 instead of 4:00. Thanks!</div>\n          </a>\n          <div class=\"dropdown-divider\"></div>\n          <a class=\"dropdown-item\" href=\"#\">\n            <strong>John Doe</strong>\n            <span class=\"small float-right text-muted\">11:21 AM</span>\n            <div class=\"dropdown-message small\">I've sent the final files over to you for review. When you're able to sign off of them let me know and we can discuss distribution.</div>\n          </a>\n          <div class=\"dropdown-divider\"></div>\n          <a class=\"dropdown-item small\" href=\"#\">View all messages</a>\n        </div>\n      </li>\n      <li class=\"nav-item dropdown\">\n        <a class=\"nav-link dropdown-toggle mr-lg-2\" id=\"alertsDropdown\" href=\"#\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          <i class=\"fa fa-fw fa-bell\"></i>\n          <span class=\"d-lg-none\">Alerts\n            <span class=\"badge badge-pill badge-warning\">6 New</span>\n          </span>\n          <span class=\"indicator text-warning d-none d-lg-block\">\n            <i class=\"fa fa-fw fa-circle\"></i>\n          </span>\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"alertsDropdown\">\n          <h6 class=\"dropdown-header\">New Alerts:</h6>\n          <div class=\"dropdown-divider\"></div>\n          <a class=\"dropdown-item\" href=\"#\">\n            <span class=\"text-success\">\n              <strong>\n                <i class=\"fa fa-long-arrow-up fa-fw\"></i>Status Update</strong>\n            </span>\n            <span class=\"small float-right text-muted\">11:21 AM</span>\n            <div class=\"dropdown-message small\">This is an automated server response message. All systems are online.</div>\n          </a>\n          <div class=\"dropdown-divider\"></div>\n          <a class=\"dropdown-item\" href=\"#\">\n            <span class=\"text-danger\">\n              <strong>\n                <i class=\"fa fa-long-arrow-down fa-fw\"></i>Status Update</strong>\n            </span>\n            <span class=\"small float-right text-muted\">11:21 AM</span>\n            <div class=\"dropdown-message small\">This is an automated server response message. All systems are online.</div>\n          </a>\n          <div class=\"dropdown-divider\"></div>\n          <a class=\"dropdown-item\" href=\"#\">\n            <span class=\"text-success\">\n              <strong>\n                <i class=\"fa fa-long-arrow-up fa-fw\"></i>Status Update</strong>\n            </span>\n            <span class=\"small float-right text-muted\">11:21 AM</span>\n            <div class=\"dropdown-message small\">This is an automated server response message. All systems are online.</div>\n          </a>\n          <div class=\"dropdown-divider\"></div>\n          <a class=\"dropdown-item small\" href=\"#\">View all alerts</a>\n        </div>\n      </li>\n    </ul>\n  </div>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/navigation/navigation.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navigation/navigation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavigationComponent = (function () {
    function NavigationComponent() {
        this.isSideNavClosedChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.title = 'Historical Reports';
    }
    NavigationComponent.prototype.ngOnInit = function () {
    };
    NavigationComponent.prototype.toggleSideNav = function (newValue) {
        this.isSideNavClosed = !this.isSideNavClosed;
        this.isSideNavClosedChange.emit(this.isSideNavClosed);
    };
    return NavigationComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Boolean)
], NavigationComponent.prototype, "isSideNavClosed", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], NavigationComponent.prototype, "isSideNavClosedChange", void 0);
NavigationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-navigation',
        template: __webpack_require__("../../../../../src/app/navigation/navigation.component.html"),
        styles: [__webpack_require__("../../../../../src/app/navigation/navigation.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], NavigationComponent);

//# sourceMappingURL=navigation.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map