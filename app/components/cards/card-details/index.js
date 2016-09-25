import CardDetailsComponent from './card-details.component';

const cardDetails = angular
    .module('cardDetails', [])
    .component('cardDetails', CardDetailsComponent)
    .name;

export default cardDetails;