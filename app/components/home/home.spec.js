describe('Home', function () {
    beforeEach(module('ui.router'));

    beforeEach(module(function ($stateProvider) {
        $stateProvider.state('home', { url: '/' });
    }));

    describe('Routes', function () {
        var $state;

        beforeEach(inject(function ($injector) {
            $state = $injector.get('$state');
        }));

        it('should be at the root state', function () {
            expect($state.current.name).toEqual('')
        });

        it('should go to home state', function () {
            spyOn($state, 'go');
            $state.go('home');
            expect($state.current.name).toEqual('');
        });

        it('should redirect to home state', function () {
            spyOn($state, 'go');
            $state.go('nodefined');
            expect($state.current.name).toEqual('');
        });
    });

})