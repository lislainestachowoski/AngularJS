angular.module('firstModule')
.controller('ProfileController', profileController);

function profileController($scope, UserService){
    UserService.getUserData('lislainestachowoski').then(
        function(data){
            $scope.user = data;
        }
    );
    UserService.getUserData('lislainestachowoski/repos').then(
        function(data){
            $scope.repos = data;
        }
    )
}