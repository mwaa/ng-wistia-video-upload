export class UploadController {

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
			fail: function(event, data) {
				console.log('Error', data);
			}
		};
		$('#fileupload').fileupload(this.widgetOptions);
	}
}

import template from './upload.component.html';
export const UploadComponent = {
	templateUrl: template,
	controller: UploadController,
	controllerAs: 'vm'
};
