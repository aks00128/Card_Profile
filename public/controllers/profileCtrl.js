app.controller('profileCtrl', function ($scope, $http, profileService, $window) {

    /*function after submit click*/
    $scope.onSubmit = function () {

        var file = $scope.myFile;
        var data = {
            name: $scope.name,
            age: $scope.age,
            skills: $scope.skills,
            profilePicture: $scope.profilePicture
        }

        var uploadUrl = "http://localhost:8080/savedata";
        profileService.uploadFileToUrl(file, uploadUrl, data);
    }

    $scope.onLoad = function () {
        console.log("sadasd");
        document.getElementById("Profile").click();
        document.getElementById("tabId").style.display = 'block';
        var url = "http://localhost:8080/getProfile";
        $scope.getProfileData = profileService.getProfile(url, '1');
        console.log($scope.getProfileData);
    }

    $scope.onLoad();



    function errorCallback(errorMessage) {
        console.log(errorMessage);
    }
});


