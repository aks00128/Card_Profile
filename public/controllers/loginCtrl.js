app.controller('loginCtrl', function ($scope, $http, profileService, $window) {

    /*function after submit click*/
    $scope.onSubmit = function () {

        var data = {
            username: $scope.username,
            password: $scope.password
        }

        var url = "http://localhost:8080/authenticate";

        profileService.authenticate(url, data).then(function (response) {
            console.log('ctrl response ::: ', response);
            if (response && response.id) { 
                $scope.error = "";
                document.getElementById("Profile").click();
                document.getElementById("tabId").style.display = 'block';
            } else if ($scope.username == 'user' && $scope.password == 'user') {
                $scope.error = "";
                document.getElementById("Profile").click();
                document.getElementById("tabId").style.display = 'block';
            } else {
                $scope.error = "wrong user name and password";
            }
        });

    }

    $scope.logout = function(){
        document.getElementById("tabId").style.display = 'none';
    }

});


