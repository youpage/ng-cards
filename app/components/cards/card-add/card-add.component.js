import templateUrl from './card-add.html';
import controller from './card-add.controller';

const CardAddComponent = {
  restrict: 'E',
  bindings: {
      details:'<'
  },
  templateUrl,
  controller
};

export default CardAddComponent;