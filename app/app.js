import angular from 'angular';
import uiRouter from 'angular-ui-router';

import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import "./assets/styles.css";
import "./assets/favicon.ico";

// Application Modules
import AppComponent from './app.component';
import Components from './components';
import Common from './common';

const app = angular
    .module('app', [
        uiRouter,
        // Application Modules
        Components,
        Common,
    ])
    .component('app', AppComponent)
    .name;

export default app;
