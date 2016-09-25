import templateUrl from './language.html';
import controller from './language.controller';
    
const LanguageComponent = {
    restrict: 'E',
    bindings: {
        lang: '<',
    },
    templateUrl,
    controller
};
    
export default LanguageComponent;
    