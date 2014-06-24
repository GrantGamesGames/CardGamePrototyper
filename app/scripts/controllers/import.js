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
		$http.get('/api/awesomeThings').success(function(awesomeThings) {
			$scope.awesomeThings = awesomeThings;
		});
	});