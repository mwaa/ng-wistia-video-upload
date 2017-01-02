webpackJsonp([0],{

/***/ 18:
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },

/***/ 19:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__upload_index__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__upload_index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__upload_index__);


angular.module('app.components').component('wistiaApp', __WEBPACK_IMPORTED_MODULE_0__app_component__["a" /* AppComponent */]);



/***/ },

/***/ 20:
/***/ function(module, exports) {

angular.module('app.components', ['ui.bootstrap']);

angular.module('wistiaApp', ['app.components']);

/***/ },

/***/ 25:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component_html__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__app_component_html__);
class AppController {}
/* unused harmony export AppController */



const AppComponent = {
    templateUrl: __WEBPACK_IMPORTED_MODULE_0__app_component_html___default.a,
    controller: AppController,
    controllerAs: 'vm'
};
/* harmony export (immutable) */ exports["a"] = AppComponent;


/***/ },

/***/ 26:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__upload_component__ = __webpack_require__(27);


angular.module('app.components').component('wistiaUpload', __WEBPACK_IMPORTED_MODULE_0__upload_component__["a" /* UploadComponent */]);

/***/ },

/***/ 27:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__upload_component_html__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__upload_component_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__upload_component_html__);
class UploadController {

	constructor($sce, $scope) {
		'ngInject';

		this.video = '';
		this.width = 0;
		this.displayVideo = false;
		this.displayUrl = '';
		this.$sce = $sce;
		this.$scope = $scope;
	}

	$onInit() {
		this.widgetOptions = {
			url: 'https://upload.wistia.com',
			formData: {
				api_password: "be6ad9b183e74b9fb0cc16e55763682e8c9f09af4cde31a91178bdb1ca6ca8f6"
			},
			progressall: (e, data) => {
				this.width = parseInt(data.loaded / data.total * 100, 10);
				this.$scope.$apply();
			},
			done: (event, data) => {
				var url = 'https://fast.wistia.net/embed/iframe/' + data.result.hashed_id;
				this.displayVideo = true;
				this.displayUrl = this.$sce.trustAsResourceUrl(url);
				this.$scope.$apply();
			},
			fail: function (event, data) {
				console.log('Error', data);
			}
		};
		$('#fileupload').fileupload(this.widgetOptions);
	}
}
/* unused harmony export UploadController */



const UploadComponent = {
	templateUrl: __WEBPACK_IMPORTED_MODULE_0__upload_component_html___default.a,
	controller: UploadController,
	controllerAs: 'vm'
};
/* harmony export (immutable) */ exports["a"] = UploadComponent;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ },

/***/ 28:
/***/ function(module, exports) {

var path = 'app/app.component.html';
var html = "<div class=\"col-md-12\">\n    <wistia-upload></wistia-upload>\n</div>";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ },

/***/ 29:
/***/ function(module, exports) {

var path = 'app/upload/upload.component.html';
var html = "<!-- The file upload form used as target for the file upload widget -->\n<div class=\"col-md-8 col-md-offset-2\">\n    <h1>Wistia File Upload</h1>\n    <form method=\"POST\" enctype=\"multipart/form-data\">\n        <!-- The fileupload-buttonbar contains buttons to add/delete files and start/cancel the upload -->\n        <div class=\"row fileupload-buttonbar\">\n            <div class=\"col-md-12\">\n                <!-- The fileinput-button span is used to style the file input field as button -->\n                <span class=\"btn btn-success fileinput-button\">\n                <i class=\"glyphicon glyphicon-plus\"></i> <span>Upload Video</span>\n                <input id=\"fileupload\" type=\"file\" ng-model=\"video\" ng-disabled=\"vm.width > 0 && vm.width < 100\">\n            </span>\n                <!-- file processing state -->\n                <div class=\"progress\" ng-if=\"vm.width > 0 && !vm.displayVideo\">\n                    <div class=\"progress-bar progress-bar-success progress-bar-striped active\"\n                         data-ng-style=\"{width: vm.width + '%'}\"></div>\n                </div>\n            </div>\n        </div>\n    </form>\n    <div ng-if=\"vm.displayVideo\">\n        <iframe src=\"{{vm.displayUrl}}\" allowtransparency=\"true\" frameborder=\"0\" scrolling=\"no\" class=\"wistia_embed\"\n                name=\"wistia_embed\" allowfullscreen mozallowfullscreen webkitallowfullscreen oallowfullscreen\n                msallowfullscreen width=\"640\" height=\"360\"></iframe>\n        <script src=\"//fast.wistia.net/assets/external/E-v1.js\" async></script>\n    </div>\n</div>";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ },

/***/ 30:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__webpack_provided_window_dot_$) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_scss__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__index_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__modules__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_index__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__app_index__);
__webpack_provided_window_dot_$ = window.jQuery = __webpack_require__(0);



// Modules


// Components

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }

},[30]);
//# sourceMappingURL=app.js.map