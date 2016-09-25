import angular from 'angular';
// import the modules that componets module depends on
import Home from './home';
import Cards from './cards';

const components = angular
    .module('app.components', [
        // list the modules that componets module depends on
        Home,
        Cards,
    ])    
    .name;

export default components;