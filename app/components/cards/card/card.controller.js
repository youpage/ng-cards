class CardController {
    constructor($state) {
        this._$state = $state;
    }

    $onInit() {

    }

    deleteCard() {
        this.onDelete({
            $event: {
                card: this.card
            }
        })
    }

}

CardController.$inject = ['$state'];

export default CardController;
