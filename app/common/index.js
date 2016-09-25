import angular from 'angular';
// import the modules that common module depends on
import Toolbar from './toolbar';
import Navigation from './navigation';

const common = angular
    .module('app.common', [        
        // list the modules that common module depends on
        Toolbar,
        Navigation,
    ])
    .name;

export default common;