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
	.controller('ImportCtrl', function($scope, user, $state) {
		$scope.import = function() {
			if ($scope.data) {
				user.setCsvWithStr($scope.data);
				ga('send', 'event', 'import', 'csv');
				$state.go('print');
			}
		};
	});