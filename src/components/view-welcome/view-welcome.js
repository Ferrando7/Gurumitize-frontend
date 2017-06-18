'use strict';

import angular from 'angular';

import ViewWelcomeComponent from './view-welcome.component';


export default angular.module('ViewWelcome', [])
    .component(ViewWelcomeComponent.name, new ViewWelcomeComponent);