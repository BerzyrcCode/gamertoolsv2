'use strict'; /* Controllers */
angular.module('myApp.controllers', [])

.controller('DashboardCtrl', ['$scope', '$firebase', 'fireref',
	function($scope, $firebase, fireref) {
		var charref = fireref.child("Users/testUser/Characters");
	}
]).controller('MyCtrl1', ['$scope',
	function($scope) {}
]).controller('MyCtrl2', ['$scope',
	function($scope) {}
]);