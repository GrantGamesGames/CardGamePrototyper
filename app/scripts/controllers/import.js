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
				console.log('data:', $scope.data);
			}
		};
	});