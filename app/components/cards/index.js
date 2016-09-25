import uiRouter from 'angular-ui-router';
// import the components that module depends on
import CardsComponent from './cards.component';
import Card from './card';
import CardDetails from './card-details';
import CardAdd from './card-add';
import DataService from '../../shared/data.service';
import ImagePreloader from '../../shared/image.preloader';

const cards = angular
    .module('cards', [
        uiRouter,
        // list the components that module depends on    
        Card,
        CardDetails,
        CardAdd    
    ])
    .component('cards', CardsComponent)
    .service('DataService', DataService)
    .service('ImagePreloader', ImagePreloader)
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
            .state('cards.new', {
                url: '/new',
                component: 'cardAdd',
                params: {
                    details: true
                }
            })
            .state('cards.details', {
                url: '/:cardId',
                component: 'cardDetails',
                params: {
                    details: true
                },
                resolve: {
                    card: ($stateParams, cardsData) => {
                        let key = $stateParams.cardId;
                        return cardsData.find(el => {
                            return el.id == key;
                        });
                    },
                    //details: () => true
                },
            });
    })
    .name;

export default cards;
