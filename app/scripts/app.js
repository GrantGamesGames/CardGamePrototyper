'use strict';

angular.module('cardGamePrototyper', ['ui.router'])
.config(function($locationProvider, $urlRouterProvider) {
	$locationProvider.html5Mode(true);
	$urlRouterProvider.otherwise('/import');
});