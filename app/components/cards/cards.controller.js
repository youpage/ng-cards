class CardsController {
    constructor(DataService, $state ) {
        this._dataService = DataService;        
        this._$state = $state;

        this.cards = this.cardsData;
    }

    $onInit() {       
                
    }
}

CardsController.$inject = ['DataService', '$state'];

export default CardsController;
