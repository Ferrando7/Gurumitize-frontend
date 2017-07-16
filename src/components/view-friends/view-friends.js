'use strict';

import angular from 'angular';

import ViewFriendsComponent from './view-friends.component';

export default angular.module('ViewFriends', [])
    .component(ViewFriendsComponent.name, new ViewFriendsComponent);

