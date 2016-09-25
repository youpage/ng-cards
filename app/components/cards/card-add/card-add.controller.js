class CardAddController {
    constructor(DataService, $state, $window) {
        this._dataService = DataService;
        this._$state = $state;
        this._$window = $window;

        this.card = { id: 0 }

    }
    $onInit() {
        
    }

    // I am just calling the API with an obj. The response is simulated. 
    addUser() {
        let message = ` Username ${this.card.username || 'Claudiu'} Added. `;

        this._dataService
            // .postData(card) // real API
            .postData({})
            .then(() => {
                if (this._$window.confirm(message)) {
                    this._$state.go('cards', null, { reload: true })
                }
            });
    }

    goBack() {
        this._$state.go('cards');
    }

}

CardAddController.$inject = ['DataService', '$state', '$window'];

export default CardAddController;