class DataService {
    constructor($q, $http) {
        this._$http = $http;
        this._$q = $q;
        this.apiBase = 'http://jsonplaceholder.typicode.com/users/';
    }

    setApiBase(value) {
        this.apiBase = value;
    }

    getData(id) {
        let deferred = this._$q.defer();
        let xhr = new XMLHttpRequest();
        let api = this.apiBase + id;

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    console.log("Data fetched from server");
                    deferred.resolve(JSON.parse(xhr.responseText));
                } else {
                    deferred.reject(JSON.parse(xhr.responseText));
                }
            }
        };
        xhr.open('GET', api, true);
        xhr.send();
        return deferred.promise;
    }

    postData(obj) {
        let deferred = this._$q.defer();
        this._$http.post(this.apiBase, obj)
            .then((res) => {
                console.log('Check the res in the debugger. The resource will not be really created on the server but it will be faked as if.');
                debugger;
                deferred.resolve(res);
            })
            .catch((err, status) => {
                handleError(err);
                deferred.reject(err);
            });
        return deferred.promise;
    }

    deleteData(obj) {
        var deferred = this._$q.defer();
        this._$http.delete(this.apiBase + obj.id)
            .then((res) => {
                console.log('Check the res in the debugger. The resource will not be really deleted on the server but it will be faked as if.');
                debugger;
                deferred.resolve(res);
            })
            .catch((err, status) => {
                handleError(err);
                deferred.reject(err);
            });
        return deferred.promise;
    }

    handleError(error) {
        console.error(`XHR failed: $(error.data)`);
    }
}

DataService.$inject = ['$q', '$http'];

export default DataService;
