class CardsFilter {
    constructor(collection, params) {
        this._collection = collection;
        this._params = params;
    }

    cFilter() {
        return this._collection.filter(item => {
            let ft = item.address.city; //we are looking to match the address city here
            return ft === (
                this._params.filter === 'none' ? ft : this._params.filter
            );
        });
    };

    static cFilterFactory(col, par) {
        let filter = new CardsFilter(col, par);
        return filter.cFilter();
    }
}

CardsFilter.cFilterFactory.$inject = ['collection', 'params'];

export default CardsFilter;
