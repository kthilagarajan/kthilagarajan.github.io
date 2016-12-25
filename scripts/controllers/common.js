'use strict';

/**
 * @ngdoc function
 * @name demoApp.controller:CommonCtrl
 * @description
 * # CommonCtrl
 * Controller of the demoApp
 */
angular.module('demoApp')
    .controller('CommonCtrl', [
        '$scope',
        '$mdSidenav',
        '$timeout',
        '$rootScope',
        '$state',
        'ssSideNav',
        'ssSideNavSharedService',
        function (
            $scope,
            $mdSidenav,
            $timeout,
            $rootScope,
            $state,
            ssSideNav,
            ssSideNavSharedService) {


            $scope.toggleNav = function () {
                $mdSidenav('left').toggle();
            };

            $scope.menu = ssSideNav;
			
			$scope.imgSrc = "/resources/images/wall.jpg"
            // Listen event SS_SIDENAV_CLICK_ITEM to close menu
            $rootScope.$on('SS_SIDENAV_CLICK_ITEM', function($scope) {
                //console.log($scope);
            });

        }
    ])
	.directive('typed', ["$timeout", function ($timeout) {
		return {
			restrict: 'A',
			link: function (scope, element, attr) {
				$(element).typed({
					strings: [$(element).html()],
					typeSpeed: 150
				});
			}
		}
	}]);