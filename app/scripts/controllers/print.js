'use strict';

angular.module('cardGamePrototyper')
	.config(function ($stateProvider) {
		$stateProvider.state('print', {
			url: '/print',
			title: 'Print your data',
			templateUrl: 'partials/print',
			controller: 'PrintCtrl',
			resolve: {
				userData: ['user', '$q', function(user, $q) {
					if(user.data) {
						return user.data;
					} else {
						return $q.reject();
					}
				}]
			}
		});
	})
	.controller('PrintCtrl', function(userData, $scope, user, $state) {
		$scope.cardList = [];

		_.each(user.data, function(cardDef) {
			_.times(cardDef.Quantity, function() {
				var card = {
					type: cardDef
				};
				$scope.cardList.push(card);
			});
		});
	});