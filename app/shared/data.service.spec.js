describe('DataService', function () {
    var dataService, httpBackend, $rootScope;
    var api = "http://jsonplaceholder.typicode.com/users/";

    beforeEach(function () {
        module('app');

        inject(function ($injector) {
            dataService = $injector.get('DataService');
            $rootScope = $injector.get('$rootScope');
            httpBackend = $injector.get('$httpBackend');
        });
    });

    afterEach(function () {
        httpBackend.verifyNoOutstandingExpectation();
        httpBackend.verifyNoOutstandingRequest();
    });

    it('should have a getData function', function () {
        expect(angular.isFunction(dataService.getData)).toBe(true);
    });

    it('should have a postData function', function () {
        expect(angular.isFunction(dataService.postData)).toBe(true);
    });

    it('should have a deleteData function', function () {
        expect(angular.isFunction(dataService.deleteData)).toBe(true);
    });

    it('should have a API url set', function () {
        expect(dataService.apiBase).toBe(api);
    })

    it('should get all cards', function () {
        var expectedData = {
            "id": 1,
            "name": "Leanne Graham",
            "username": "Bret"
        };

        httpBackend.when('GET', api).respond(expectedData);

        dataService.getData('')
            .then(function (ref) {
                expect(ref[0]).toEqual(expectedData);
            });
    });

    it('should get a card', function () {
        var id = 1,
            promise = dataService.getData(id);

        promise.then(function (ref) {
            expect(ref.key).toEqual(id);
        });

        $rootScope.$digest();
    });

    it('should create a card', function () {
        var card = { "name": "Leanne Graham", "username": "Bret" }
        var dt = dataService;

        spyOn(dt, 'postData');
        dataService.postData(card);
        expect(dataService.postData).toHaveBeenCalled();
    });

    it('should delete a card', function () {
        var card = { "id": "1" };
        var dt = dataService;

        spyOn(dt, 'deleteData');
        dataService.deleteData(card);
        expect(dataService.deleteData).toHaveBeenCalled();
    });

});