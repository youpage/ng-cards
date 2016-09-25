class LanguageController {
    constructor($translate) {
        this._$translate = $translate;
    }

    $onInit() {

    }

    changeLang() {
        this._$translate.use(event.target.selectedOptions[0].innerText);
    }
}

LanguageController.$inject = ['$translate'];

export default LanguageController;
