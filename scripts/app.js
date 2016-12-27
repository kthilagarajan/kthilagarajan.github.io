'use strict';

/**
 * @ngdoc overview
 * @name demoApp
 * @description
 * # demoApp
 *
 * Main module of the application.
 */
angular
    .module('demoApp', [
        'ngAnimate',
        'ngAria',
        'ngCookies',
        'ngMessages',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'ngMaterial',
        'ui.router',
        'sasrio.angular-material-sidenav'
    ])
    .config([
        '$mdThemingProvider',
        '$locationProvider',
        '$urlRouterProvider',
        '$stateProvider',
        'ssSideNavSectionsProvider',
        function (
            $mdThemingProvider,
            $locationProvider,
            $urlRouterProvider,
            $stateProvider,
            ssSideNavSectionsProvider) {
			//red, pink, purple, deep-purple, indigo, blue, light-blue, cyan, teal, green, light-green, lime, yellow, amber, orange, deep-orange, brown, grey, blue-grey
            $mdThemingProvider
                .theme('default')
                .primaryPalette('light-blue', {
                    'default': '700'
                });

            $urlRouterProvider.otherwise(function () {
                return '/';
            });

            $stateProvider.state({
                name: 'common', //layout
                url: '',
                templateUrl: 'views/layout.html',
                controller: 'LayoutCtrl'
            });
			
			
			$stateProvider.state({
                name: 'common.about',
                url: '/aboutme',
                templateUrl: 'views/aboutme.html',
                controller: 'AbtCtrl'
            });
			$stateProvider.state({
                name: 'common.p1',
                url: '/work1',
                templateUrl: 'views/default.html',
                controller: function ($scope) {
                    $scope.model = {
                        title: 'Project 1'
                    };
                }
            });
			$stateProvider.state({
                name: 'common.p2',
                url: '/work2',
                templateUrl: 'views/default.html',
                controller: function ($scope) {
                    $scope.model = {
                        title: 'Project 2'
                    };
                }
            });
			$stateProvider.state({
                name: 'common.p3',
                url: '/work3',
                templateUrl: 'views/default.html',
                controller: function ($scope) {
                    $scope.model = {
                        title: 'Project 2'
                    };
                }
            });
			
            ssSideNavSectionsProvider.initWithTheme($mdThemingProvider);
            ssSideNavSectionsProvider.initWithSections([
			{
                id: 'link_1',
                name: 'About Me',
                state: 'common.about',
                type: 'link',
                icon: 'fa fa-home'
            },{
                id: 'toogle_1',
                name: '',
                children: [{
                    name: 'Projects',
                    type: 'toggle',
					icon: 'fa fa-chevron-circle-down',
                    pages: [{
                        id: 'toogle_1_link_1',
                        name: 'Web',
                        state: 'common.p1',
						icon: 'fa fa-chrome'
                    }, {
                        id: 'toogle_1_link_2',
                        name: 'Mobile',
                        state: 'common.p2',
						icon: 'fa fa-mobile-phone'
                    }, {
                        id: 'toogle_1_link_3',
                        name: 'Desktop',
                        state: 'common.p3',
						icon: 'fa fa-desktop'
                    }]
                }]
            },{
                id: 'link_3',
                name: 'Core Skills',
                state: 'common.link3',
                type: 'link',
                icon: 'fa fa-code'
            },{
                id: 'link_4',
                name: 'Contact',
                state: 'common.link4',
                type: 'link',
                icon: 'fa fa-location-arrow'
            }]);
        }
    ]);