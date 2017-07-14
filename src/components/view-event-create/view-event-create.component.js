
'use strict';

import template from './view-event-create.template.html';

import EventsService from './../../services/events/events.service';
import UserService from './../../services/user/user.service';
import GroupsService from './../../services/groups/groups.service';

class ViewEventCreateComponent {
    constructor(){
        this.controller = ViewEventCreateComponentController;
        this.template = template;
        this.bindings = {
            groups: '<',
        }
    }

    static get name() {
        return 'viewEventCreate';
    }
}

class ViewEventCreateComponentController{
    constructor($state,$scope, EventsService,UserService,GroupsService){
        this.event = {};
        this.$state = $state;
        this.$scope = $scope;
        this.EventsService = EventsService;
        this.UserService = UserService;
        this.GroupsService = GroupsService;

        this.searchText = null;
    }

    $onInit(){
        this.groups = this.groups.map( function (group) {
            group.value = group.title.toLowerCase();
            return group;
        });
    }

    cancel() {
        this.$state.go('events',{});
    };

    save() {
        let user = this.UserService.getCurrentUser();

        this.event['user'] = user['_id'];
        this.EventsService.create(this.event).then(data => {
            let _id = data['_id'];
            this.$state.go('events',{ eventId:_id});
        });

    };

    getMatches(query) {
        var results = query ? this.groups.filter(this.createFilterFor(query)) : this.groups;
        return results;
    };

    createFilterFor(query) {
        var lowercaseQuery = angular.lowercase(query);

        return function filterFn(group) {
            return (group.value.indexOf(lowercaseQuery) === 0);
        };
    };


    static get $inject(){
        return ['$state','$scope', EventsService.name, UserService.name, GroupsService.name];
    }

}


export default ViewEventCreateComponent;
