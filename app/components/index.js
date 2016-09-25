import angular from 'angular';
// import the modules that componets module depends on
import Home from './home';

const components = angular
    .module('app.components', [
        // list the modules that componets module depends on
        Home,
    ])    
    .name;

export default components;