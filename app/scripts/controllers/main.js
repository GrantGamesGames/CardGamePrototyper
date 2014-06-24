'use strict';

angular.module('deckBuilderApp')
  .controller('MainCtrl', function ($scope, $http) {
	$http.get('/api/awesomeThings').success(function(awesomeThings) {
		$scope.awesomeThings = awesomeThings;
		$scope.cardList = [];

		_.each(awesomeThings, function(value, index) {
			_.times(value.Quantity, function() {
				var card = {
					type: value
				}
				$scope.cardList.push(card);
			})
		});
	});
  });
