'use strict';

angular.module('cardGamePrototyper')
	.config(function ($stateProvider) {
		$stateProvider.state('print', {
			url: '/print',
			title: 'Print your data',
			templateUrl: 'partials/print',
			controller: 'PrintCtrl'
		});
	})
	.controller('PrintCtrl', function($scope, $http) {
		$scope.cardList = [];

		$http.get('/api/awesomeThings').success(function(awesomeThings) {
			_.each(awesomeThings, function(value) {
				_.times(value.Quantity, function() {
					var card = {
						type: value
					};
					$scope.cardList.push(card);
				});
			});
		});
	});