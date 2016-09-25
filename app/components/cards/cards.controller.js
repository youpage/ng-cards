class CardsController {
    constructor(DataService, $state, $window ) {
        this._dataService = DataService;        
        this._$state = $state;
        this._$window = $window;

        this.cards = this.cardsData;
    }

    $onInit() {       
                
    }

    deleteCard(event) {
        let message = `Delete ${event.card.name} ?`;
        if (this._$window.confirm(message)) {
            return this._dataService
                .deleteData(event.card)
                .then(() => this._$state.go('cards', null, {reload:true}))
        }
    }
    
}

CardsController.$inject = ['DataService', '$state', '$window'];

export default CardsController;
