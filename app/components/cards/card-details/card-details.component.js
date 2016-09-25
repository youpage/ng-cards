import templateUrl from './card-details.html';

const CardDetailsComponent = {
  restrict: 'E',
  bindings: {
    card: '<',
    details: '<',
  },
  templateUrl
};

export default CardDetailsComponent;