'use strict';

import angular from 'angular';

import ViewGroupsComponent from './view-groups.component';


export default angular.module('ViewGroups', [])
    .component(ViewGroupsComponent.name, new ViewGroupsComponent);