var helloAngular = angular.module('HelloAngular', ['ngRoute', 'ngAnimate', 'bookStoreCtrls']);

helloAngular.config(function($routeProvider){
    $routeProvider.when('/hello', {
        templateUrl: 'tpls/hello.html',
        controller: 'HelloCtrl'
    }).when('/index', {
        templateUrl: 'tpls/index.html',
        conteroller: 'IndexCtrl'
    }).when('/booklist', {
        templateUrl: 'tpls/booklist.html',
        controller: 'BookListCtrl'
    }).when('/directive', {
        templateUrl: 'tpls/directive.html',
        //controller: 'DirectiveCtrl'
    }).otherwise({
        redirectTo: '/index'
    })
});