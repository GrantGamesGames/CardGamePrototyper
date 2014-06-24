'use strict';

angular.module('cardGamePrototyper')
	.config(function ($stateProvider) {
		$stateProvider.state('import', {
			url: '/import',
			title: 'Import your data',
			templateUrl: 'partials/import',
			controller: 'ImportCtrl'
		});
	})
	.controller('ImportCtrl', function($scope, $http) {
		$scope.import = function() {
			if ($scope.data) {
				var csvOptions = {
					cast: true,
					header: true
				};
				var csvData = new CSV($scope.data, csvOptions);
				console.log('csvData:', csvData);
				var convertedJson = csvData.parse();
				console.log('convertedJson:', convertedJson);
			}
		};
	});