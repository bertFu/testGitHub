// var directiveModule = angular.module('Derective', [])

// directiveModule.controller('DirectiveCtrl', ['$scope',
//     function($scope){
        
//     }    
// ])

myModule.directive('superman', function(){
   return {
       scope: {},
       restrict: 'AE',
       controller: function($scope){
           $scope.abilites = [],
           this.addliliang = function(){
               $scope.abilites.push('liliang');
           }
           this.addfaguang = function(){
               $scope.abilites.push('faguang');
           }
           this.addnengli = function(){
               $scope.abilites.push('nengli');
           }
       },
       link: function(scope, element, attrs){
           element.bind('mouseenter', function(){
               console.log(scope.abilites);
           })
       }
   } 
});

myModule.directive('liliang', function(){
    return {
        require: '^superman',
        link: function(scope, element, attrs, supermanCtrl){
            supermanCtrl.addliliang();
        }
    }
})
myModule.directive('faguang', function(){
    return {
        require: '^superman',
        link: function(scope, element, attrs, supermanCtrl){
            supermanCtrl.addfaguang();
        }
    }
})
myModule.directive('nengli', function(){
    return {
        require: '^superman',
        link: function(scope, element, attrs, supermanCtrl){
            supermanCtrl.addnengli();
        }
    }
})

