import templateUrl from './card.html';
import controller from './card.controller';
const CardComponent = {
  restrict: 'E',
  bindings: {
    card: '<',
    details: '<',
    onDelete: '&',
  },
  templateUrl,
  controller
};

export default CardComponent;