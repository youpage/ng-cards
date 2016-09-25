import angular from 'angular';
import loadingBar from 'angular-loading-bar';
import 'angular-loading-bar/build/loading-bar.min.css';
// import the modules that common module depends on
import Toolbar from './toolbar';
import Navigation from './navigation';
import Language from './language';

const common = angular
    .module('app.common', [
        loadingBar,
        // list the modules that common module depends on
        Toolbar,
        Navigation,
        Language,
    ])
    .run(function ($transitions, cfpLoadingBar) {
        $transitions.onStart({}, cfpLoadingBar.start);
        $transitions.onSuccess({}, cfpLoadingBar.complete);
    })
    .name;

export default common;