'use strict';

import angular from 'angular';

import ViewProfileEditComponent from './view-profile-edit.component';


export default angular.module('ViewProfileEdit', [])
    .component(ViewProfileEditComponent.name, new ViewProfileEditComponent);
