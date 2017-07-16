'use strict';

import angular from 'angular';

import FriendsService from './friends.service';

export default angular.module('FriendsServiceDefinition', [])
    .service(FriendsService.name, FriendsService)