import CardAddComponent from './card-add.component';

const cardAdd = angular
    .module('cardAdd', [])
    .component('cardAdd', CardAddComponent)
    .name;

export default cardAdd;