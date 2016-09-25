class ToolbarController {
    constructor($state) {
        this._$state = $state;
        this.lang = {
            options: [
                { id: '1', name: 'EN' },
                { id: '2', name: 'FR' },
                { id: '3', name: 'RO' }
            ],
            selected: { id: '1', name: 'EN' }
        }

        this.cities = {
            options: [
                { id: '0', name: 'none' },
                { id: '1', name: 'Aliyaview' },
                { id: '2', name: 'Bartholomebury' },
                { id: '3', name: 'Gwenborough' },
                { id: '4', name: 'Howemouth' },
                { id: '5', name: 'Lebsackbury' },
                { id: '6', name: 'McKenziehaven' },
                { id: '7', name: 'Roscoeview' },
                { id: '8', name: 'South Christy' },
                { id: '9', name: 'South Elvis' },
                { id: '10', name: 'Wisokyburgh' }
            ],
            selected: { id: '0', name: 'none' }
        }
    }

    $onInit() {

    }

    changeCity() {
        this._$state.go('cards', { filter: this.cities.selected.name });
    }
}

ToolbarController.$inject = ['$state'];

export default ToolbarController;
