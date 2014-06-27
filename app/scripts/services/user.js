'use strict';

angular.module('cardGamePrototyper')
.service('user', function user() {
	// AngularJS will instantiate a singleton by calling "new" on this function
	var userService = {
		setCsvWithStr: _setCsvWithStr,
		data: null
	};
	return userService;

	function _setCsvWithStr(csvStr) {
		var csvOptions = {
			cast: false,
			header: true,
			line: '\n'
		};
		var csvData = new CSV(csvStr, csvOptions);
		userService.data = csvData.parse();
	}

});