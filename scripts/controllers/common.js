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

            // Listen event SS_SIDENAV_CLICK_ITEM to close menu
            $rootScope.$on('SS_SIDENAV_CLICK_ITEM', function() {
                console.log('do whatever you want after click on item');
            });

            // _perform_change_for_demo();
        }
    ]);