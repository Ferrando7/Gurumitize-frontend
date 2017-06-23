'use strict';

import angular from 'angular';

import ViewGroupEditComponent from './view-group-edit.component';


export default angular.module('ViewGroupEdit', [])
    .component(ViewGroupEditComponent.name, new ViewGroupEditComponent);