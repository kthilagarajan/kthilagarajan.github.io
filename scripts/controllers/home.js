'use strict';

/**
 * @ngdoc function
 * @name demoApp.controller:IndexCtrl
 * @description
 * # IndexCtrl
 * Controller of the demoApp
 */
angular.module('demoApp')

    .controller('HomeCtrl', [
        '$scope',
		'$mdSidenav',
        '$timeout',		
        '$state',
        'ssSideNav',
        function (
            $scope,
			$mdSidenav,
            $timeout,
            $state,
            ssSideNav) {

			$scope.toggleNav = function(){
				$mdSidenav('left').toggle();
			}
			
	   }
    ])
	.controller('AbtCtrl', [
        '$scope',
		'$mdSidenav',
        '$timeout',		
        '$state',
        'ssSideNav',
        function (
            $scope,
			$mdSidenav,
            $timeout,
            $state,
            ssSideNav) {
			console.log($scope)
			$scope.toggleNav = function(){
				$mdSidenav('left').toggle();
			}
			
			$scope.model = {
				title: 'About Mez'
			};
			
	   }
    ]);