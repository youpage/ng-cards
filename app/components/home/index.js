import uiRouter from 'angular-ui-router';

import HomeComponent from './home.component';

const home = angular
    .module('home', [
        uiRouter,    
    ])
    .component('home', HomeComponent)
    .config(($stateProvider, $urlRouterProvider) => {
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('home', {
                url: '/',
                component: 'home',
            });
    })

    .name;

export default home;
