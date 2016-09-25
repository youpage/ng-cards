class CardsController {
    constructor(DataService, $state, $window, ImagePreloader ) {
        this._dataService = DataService;        
        this._$state = $state;
        this._$window = $window;
        this._preloader = ImagePreloader;

        this.cards = this.cardsData;

        this.images = [];
        this.cards.forEach((card) => {
            this.images[this.images.length] = `http://lorempixel.com/225/150/people/${card.id}`;
        }, this);

        this._preloader.preloadImages( this.images );
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

CardsController.$inject = ['DataService', '$state', '$window', 'ImagePreloader'];

export default CardsController;
