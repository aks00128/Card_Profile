app.service('profileService', ['$http','$q', function ($http,$q) {

        return {
                uploadFileToUrl: uploadFileToUrl,
                getProfile: getProfile,
                authenticate:authenticate
        }

        function uploadFileToUrl(file, uploadUrl, data) {
                var fd = new FormData();
                fd.append('file', file);
                fd.append('data', JSON.stringify(data));
                $http.post(uploadUrl, fd, {
                        transformRequest: angular.identity,
                        headers: { 'Content-Type': undefined }
                })
                .then(uploadResponseData).catch(catchError);
        }

        function uploadResponseData(response){
                if(response.data.Error){
                        alert(response.data.Error);
                }else{
                        console.log("data base connecet properly");
                }
                
        }

        function getProfile(url, userid) {
                var fd = new FormData();
                fd.append('userid', userid);
                $http.get(url, fd, {
                        transformRequest: angular.identity,
                        headers: { 'Content-Type': undefined }
                })
                .then(responseData).catch(catchError);
        }

        function authenticate(url, data){
                console.log(JSON.stringify(data));
                var fd = new FormData();
                fd.append('file', '');
                fd.append('data', JSON.stringify(data));
                var userdata = {data: data}
                return $http.post(url, fd, {
                        transformRequest: angular.identity,
                        headers: {'Content-Type': undefined}
                })
                .then(function(response){
                        console.log("authentication successfull!!!",response.data);
                        return response.data;
                })
                .catch(function(err){
                        console.log("Error:: ",err);
                });
        }



        function responseData(response) {
                return response.data;
        }

        function catchError(response) {
                return $q.reject('Error retrieving getClusterMetrics. (HTTP status: ' + response.status + ')');
        }
}]);