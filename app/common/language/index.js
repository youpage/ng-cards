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
            FILTER_ANY: 'Filter by any',
            FILTER_CTY: 'Find by city',
            HOME: 'Home',
            CARDS: 'Cards',
            CONTACTS: 'Contacts',
            ADDRESS: 'Address'
        });
        $translateProvider.translations('FR', {
            DETAILS: 'Détails',
            DELETE: 'Rayer',
            ADD: 'Ajouter',
            BACK: 'Derrière',
            LANGUAGE: 'Langue',
            FILTER: 'Filtre',
            FILTER_ANY: 'Filtrer par toute',
            FILTER_CTY: 'Trouver par ville',
            HOME: 'Maison',
            CARDS: 'Cartes',
            CONTACTS: 'Contacts',
            ADDRESS: 'Adresse'
        });
        $translateProvider.translations('RO', {
            DETAILS: 'Detalii',
            DELETE: 'Sterge',
            ADD: 'Adauga user',
            BACK: 'Inapoi',
            LANGUAGE: 'Limba',
            FILTER: 'Filtrare',
            FILTER_ANY: 'Filtare dupa orice',
            FILTER_CTY: 'Cauta dupa oras',
            HOME: 'Acasa',
            CARDS: 'Carti',
            CONTACTS: 'Contacts',
            ADDRESS: 'Adresa'
        });
        $translateProvider.preferredLanguage('EN');
        $translateProvider.useSanitizeValueStrategy('escape');
    })
    .component('language', LanguageComponent)
    .name;

export default language;
