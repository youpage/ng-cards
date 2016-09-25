import uiRouter from 'angular-ui-router';

import HomeComponent from './home.component';
import DataService from '../../shared/data.service';

const home = angular
    .module('home', [
        uiRouter,    
    ])
    .component('home', HomeComponent)
    .service('DataService', DataService)
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
