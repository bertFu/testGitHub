var myModule = angular.module('bookStoreCtrls', []);

myModule.controller('HelloCtrl', ['$scope', 
    function($scope){
        $scope.greeting = {
            text: 'Hello'
        };
        $scope.userInfo = {
            email: '222222@qq.com',
            password: '222222',
            autoLogin: 'true'
        }
        $scope.getFormData = function (){
            console.log($scope.userInfo.email);
            console.log($scope.userInfo.password);
            console.log($scope.userInfo.autoLogin);
        }
        $scope.setFormData = function (){
            $scope.userInfo = {
                email : '33333@qq.com',
                password : '11',
                autoLogin : false
            }
        }
        $scope.resetFormData = function (){
            $scope.userInfo = {
                email: '222222@qq.com',
                password: '222222',
                autoLogin: 'true'
            }
        }
        
    }
]);

myModule.controller('BookListCtrl', ['$scope',
    function($scope){
        $scope.books = [
            {title: "《Ext江湖》", author: "大漠"},
            {title: "《啦啦啦》", author: "NICA"},
            {title: "《ABCD》", author: "SET"},
        ];
    }
]);

myModule.controller('IndexCtrl', ['$scope',
    function($scope){
        $scope.loadData = function(){
            console.log("数据加载中...");
        }
    }
])
myModule.controller('IndexCtrl2', ['$scope',
    function($scope){
        $scope.loadData2 = function(){
            console.log("数据加载中...222");
        }
    }
])

myModule.directive('loader', function(){
    return {
        restrict: 'AE',
        link: function(scope, element, attr){
            element.bind('mouseenter',function(){
                //scope.loadData();
                var howToLoad = attr.howtoload1;
                scope.$apply(howToLoad);
            })
        }
    }
})



var userInfoModel = angular.module('userInfoModel', []);

userInfoModel.controller('UserInfoCtrl', ['$scope', function($scope){
    $scope.userInfo = {
        email: "222222.qq.com",
        password: '222222',
        autoLogin: true
    }
}])