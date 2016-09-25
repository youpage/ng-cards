import templateUrl from './cards.html';
import controller from './cards.controller';
    
const CardsComponent = {
    restrict: 'E',
    bindings: {
        cardsData: '<',        
        details: '<',
        filter: '<',
    },
    templateUrl,
    controller
};
    
export default CardsComponent;
    