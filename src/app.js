'use strict';

import angular from 'angular';
import uiRouter from '@uirouter/angularjs';

import angularMaterial from 'angular-material';
import 'angular-material/angular-material.css';

import ngMdIcons from 'angular-material-icons';

import ngMessages from 'angular-messages';

import EventsService from './services/events/events';
import GroupsService from './services/groups/groups';
import UserService from './services/user/user';
import FriendsService from './services/friends/friends';
import Routes from './config/routes';
import Middlewares from './config/middlewares';

import AppContent from './components/app-content/app-content';
import ViewEvents from './components/view-events/view-events';
import ViewEvent from './components/view-event/view-event';
import ViewEventEdit from './components/view-event-edit/view-event-edit';
import ViewEventCreate from './components/view-event-create/view-event-create';
import ViewGroups from './components/view-groups/view-groups';
import ViewGroup from './components/view-group/view-group';
import ViewGroupEdit from './components/view-group-edit/view-group-edit';
import ViewGroupCreate from './components/view-group-create/view-group-create';
import ViewFriends from './components/view-friends/view-friends';

//import SkillCreate from './components/skill/skill';
import ViewLogin from './components/view-login/view-login';
import ViewRegister from './components/view-register/view-register';
import ViewProfile from './components/view-profile/view-profile';
import ViewProfileEdit from './components/view-profile-edit/view-profile-edit';
import ViewWelcome from './components/view-welcome/view-welcome';

let app = angular.module('app', [
    uiRouter,
    angularMaterial,
    ngMdIcons,
    ngMessages,
    UserService.name,
    EventsService.name,
    GroupsService.name,
    AppContent.name,
    ViewEvents.name,
    ViewEvent.name,
    ViewEventEdit.name,
    ViewEventCreate.name,
    ViewGroups.name,
    ViewGroup.name,
    ViewGroupEdit.name,
    ViewGroupCreate.name,
    ViewRegister.name,
    ViewLogin.name,
    ViewProfile.name,
    ViewProfileEdit.name,
    ViewWelcome.name,
    ViewFriends.name,
    FriendsService.name
]);

app.constant('API_URL', 'http://localhost:3000/api');
app.config(Routes);
app.config(Middlewares);


angular.element(document).ready(function() {
    return angular.bootstrap(document.body, [app.name], {
        strictDi: true
    });
});

export default app;
