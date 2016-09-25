class CardController {
    constructor($state) {
        this._$state = $state;

        if (this.card && this.details) {
            this.address = this.card.address;
            this.geo = this.address.geo;
            this.map = '';
            this.generateMap();
        }
    }

    $onInit() {

    }

    generateMap() {
        let latlon = `${this.geo.lat},${this.geo.lng}`;
        this.map = `http://maps.googleapis.com/maps/api/staticmap?center=${latlon}&zoom=14&size=225x150&sensor=false`;
    }

    deleteCard() {
        this.onDelete({
            $event: {
                card: this.card
            }
        })
    }

    goBack() {
        this._$state.go('cards');
    }

}

CardController.$inject = ['$state'];

export default CardController;
