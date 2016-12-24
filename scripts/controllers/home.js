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
    ]);