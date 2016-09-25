import uiRouter from 'angular-ui-router';
// import the components that module depends on
import CardsComponent from './cards.component';
import Card from './card';
import DataService from '../../shared/data.service';

const cards = angular
    .module('cards', [
        uiRouter,
        // list the components that module depends on    
        Card,    
    ])
    .component('cards', CardsComponent)
    .service('DataService', DataService)
    .config(($stateProvider, $urlRouterProvider) => {
        $stateProvider
            .state('cards', {
                url: '/cards',
                component: 'cards',
                params: {
                    details: false,
                },
                resolve: {
                    cardsData: (DataService) =>
                        DataService.getData('')
                },
            })
    })
    .name;

export default cards;
