import angular from 'angular';
import uiRouter from 'angular-ui-router';

import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import "./assets/styles.css";

// Application Modules
import AppComponent from './app.component';
import Components from './components';

const app = angular
    .module('app', [
        uiRouter,
        // Application Modules
        Components,
    ])
    .component('app', AppComponent)
    .name;

export default app;
