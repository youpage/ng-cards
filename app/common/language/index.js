import LanguageComponent from './language.component';
import ngTranslate from 'angular-translate';

const language = angular
    .module('language', [
        ngTranslate
    ])
    .config(($translateProvider) => {
        $translateProvider.translations('EN', {
            DETAILS: 'Details',
            DELETE: 'Delete',
            ADD: 'Add user',
            BACK: 'Back',
            LANGUAGE: 'Language',
            FILTER: 'Filter',
            HOME: 'Home',
            CARDS: 'Cards',
            CONTACTS: 'Contacts',
        });
        $translateProvider.translations('FR', {
            DETAILS: 'Détails',
            DELETE: 'Rayer',
            ADD: 'Ajouter',
            BACK: 'Derrière',
            LANGUAGE: 'Langue',
            FILTER: 'Filtre',
            HOME: 'Maison',
            CARDS: 'Cartes',
            CONTACTS: 'Contacts',
        });
        $translateProvider.translations('RO', {
            DETAILS: 'Detalii',
            DELETE: 'Sterge',
            ADD: 'Adauga user',
            BACK: 'Inapoi',
            LANGUAGE: 'Limba',
            FILTER: 'Filtrare',
            HOME: 'Acasa',
            CARDS: 'Carti',
            CONTACTS: 'Contacts',
        });
        $translateProvider.preferredLanguage('EN');
        $translateProvider.useSanitizeValueStrategy('escape');
    })
    .component('language', LanguageComponent)
    .name;

export default language;
