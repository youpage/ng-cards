import ToolbarComponent from './toolbar.component';

const toolbar = angular
    .module('toolbar', [])
    .component('toolbar', ToolbarComponent)
    .name;

export default toolbar;
