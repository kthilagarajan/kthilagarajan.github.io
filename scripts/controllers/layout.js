'use strict';

/**
 * @ngdoc function
 * @name demoApp.controller:CommonCtrl
 * @description
 * # CommonCtrl
 * Controller of the demoApp
 */
angular.module('demoApp')
    .controller('LayoutCtrl', [
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
			
			
					
			
			$scope.reloadRoute = function() {
				window.location.reload()
			};
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
					strings: ["<span><span style='font-size: 10vw; color: rebeccapurple;' >	Hello! <br/> I'm Thilak, <br/></span><span style='font-size: 6vw;color: rgb(216,67,21);' > a Product Developer</span></span>"],
					typeSpeed: 150
				});
			}
		}
	}]);