'use strict';

angular.module('cardGamePrototyper', ['ui.router'])
.config(function($locationProvider, $urlRouterProvider) {
	$locationProvider.html5Mode(true);
	$urlRouterProvider.otherwise('/import');
	
})
.run(function($rootScope, user, $state) {

		// loading animation
		$rootScope.setLoading = function() {
			$rootScope.isViewLoading = true;
		};
		$rootScope.unsetLoading = function() {
			$rootScope.isViewLoading = false;
		};

		$rootScope.unsetLoading();

		$rootScope.$on('$stateChangeStart', function(ev, to, toParams, from, fromParams) {
			$rootScope.setLoading();
		});

		$rootScope.$on('$stateChangeSuccess', function (ev, to, toParams, from, fromParams) {
			$rootScope.unsetLoading();
		});

		$rootScope.$on('$stateChangeError', function (ev, to, toParams, from, fromParams, error) {
			$rootScope.unsetLoading();
			if(to.name !== 'import') {
				$state.go('import');
			}
		});
	}
);