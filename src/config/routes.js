'use strict';

import EventsComponent from './../components/view-events/view-events.component';
import EventComponent from './../components/view-event/view-event.component';
import EventEditComponent from './../components/view-event-edit/view-event-edit.component';
import EventCreateComponent from './../components/view-event-create/view-event-create.component';
import GroupsComponent from './../components/view-groups/view-groups.component';
import GroupComponent from './../components/view-group/view-group.component';
import GroupEditComponent from './../components/view-group-edit/view-group-edit.component';
import GroupCreateComponent from './../components/view-group-create/view-group-create.component';
import LoginComponent from './../components/view-login/view-login.component';
import RegisterComponent from './../components/view-register/view-register.component';
import ProfileComponent from './../components/view-profile/view-profile.component';
import WelcomeComponent from './../components/view-welcome/view-welcome.component';

import EventsService from './../services/events/events.service';
import GroupsService from './../services/groups/groups.service';



resolveEvent.$inject = ['$stateParams', EventsService.name];
function resolveEvent($stateParams,eventsService){
    return eventsService.get($stateParams.eventId);
}

resolveEvents.$inject = [EventsService.name];
function resolveEvents(eventsService){
    return eventsService.list();
}

resolveGroup.$inject = ['$stateParams', GroupsService.name];
function resolveGroup($stateParams,groupsService){
    return groupsService.get($stateParams.groupId);
}

resolveGroups.$inject = [GroupsService.name];
function resolveGroups(groupsService){
    return groupsService.list();
}


config.$inject = ['$stateProvider', '$urlRouterProvider'];
export default function config ($stateProvider, $urlRouterProvider){

    // For any unmatched url, redirect to /home
    $urlRouterProvider.otherwise("/events");

    $stateProvider
        .state('events', {
            url: '/events',
            component: EventsComponent.name,
            resolve: {
                events : resolveEvents
            }
        })
        .state('eventAdd', {
            url: '/events/new',
            component: EventCreateComponent.name
        })
        .state('event', {
            url: '/events/:eventId',
            component: EventComponent.name,
            resolve: {
                event : resolveEvent
            }

        })
        .state('eventEdit', {
            url: '/events/:eventId/edit',
            component: EventEditComponent.name,
            resolve: {
                event : resolveEvent
            }
        })
        .state('login', {
            url: '/login',
            component: LoginComponent.name,
        })
        .state('register', {
            url: '/register',
            component: RegisterComponent.name,
        })
        .state('profile', {
            url: '/profile',
            component: ProfileComponent.name,
        })
        .state('groups', {
            url: '/groups',
            component: GroupsComponent.name,
            resolve: {
                groups : resolveGroups
            }
        })
        .state('groupAdd', {
            url: '/groups/new',
            component: GroupCreateComponent.name
        })
        .state('group', {
            url: '/groups/:groupId',
            component: GroupComponent.name,
            resolve: {
                group : resolveGroup
            }

        })
        .state('groupEdit', {
            url: '/groups/:groupId/edit',
            component: GroupEditComponent.name,
            resolve: {
                group : resolveGroup
            }
        })/*
        .state('welcome', {
            url: '/welcome',
            component: WelcomeComponent.name,
        })*/



}

