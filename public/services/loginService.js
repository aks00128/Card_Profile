app.service('loginService', ['$http', '$q', function ($http, $q) {


        return {
                authenticate: authenticate
        }

        function authenticate(url, param) {
                console.log("data::", param);

                return $http({
                        url: url,
                        method: 'POST',
                        data: param,
                        json: true,
                        headers: {
                                'Content-Type': 'application/json'
                        }
                })
                        .then(responseData).catch(catchError);
        }

        function responseData(response) {
                return response.data;
        }

        function catchError(response) {
                return $q.reject('Error retrieving getClusterMetrics. (HTTP status: ' + response.status + ')');
        }
}]);