
'use strict';

import template from './view-event-edit.template.html';

import EventsService from './../../services/events/events.service';
import GroupsService from './../../services/groups/groups.service';

class ViewEventEditComponent {
    constructor(){
        this.controller = ViewEventEditComponentController;
        this.template = template;
        this.bindings = {
            event: '<',
            groups: '<',
        }
    }

    static get name() {
        return 'viewEventEdit';
    }
}

class ViewEventEditComponentController{
    constructor($state, EventsService){
        this.model = {};
        this.$state = $state;
        this.EventsService = EventsService;
        this.GroupsService = GroupsService;

        this.searchText = null;
    }

    $onInit() {
        //Clone the event Data
        this.model = JSON.parse(JSON.stringify(this.event));

        this.groups = this.groups.map( function (group) {
            group.value = group.title.toLowerCase();
            return group;
        });

        this.group = this.groups.find(g => g._id === this.event['group']);
    }

    cancel() {
        this.model = JSON.parse(JSON.stringify(this.event));
        this.$state.go('events',{});
    };

    save() {
        let _id = this.event['_id'];
        this.model['group'] = this.group._id;

        this.EventsService.update(this.model).then(data => {
            this.event = JSON.parse(JSON.stringify(data));

            this.$state.go('event',{ eventId:_id});
        });

    };

    delete() {
        let _id = this.event['_id'];

        this.EventsService.delete(_id).then(response => {
            this.$state.go('events',{});
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
        return ['$state', EventsService.name];
    }

}


export default ViewEventEditComponent;
