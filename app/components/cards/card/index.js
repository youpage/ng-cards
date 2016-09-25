import CardComponent from './card.component';

const card = angular
    .module('card', [])
    .component('card', CardComponent)
    .name;

export default card;