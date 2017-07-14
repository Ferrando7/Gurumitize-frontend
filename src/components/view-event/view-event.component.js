
'use strict';

import template from './view-event.template.html';
import EventsService from './../../services/events/events.service';
import UserService from './../../services/user/user.service';

class ViewEventComponent {
    constructor(){
        this.controller = ViewEventComponentController;
        this.template = template;
        this.bindings = {
            event: '<',
            groups: '<',
        }

    }

    static get name() {
        return 'viewEvent';
    }


}

class ViewEventComponentController{
    constructor($state,EventsService,UserService){
        this.$state = $state;
        this.EventsService = EventsService;
        this.UserService = UserService;
    }

    $onInit () {
        this.group = this.groups.find(g => g._id === this.event['group']);
    }

    edit () {

        if (this.UserService.isAuthenticated()) {
            let _id = this.event['_id'];
            this.$state.go('eventEdit',{ eventId:_id});
        } else {
            this.$state.go('login',{});
        }

    };


    delete() {
        if (this.UserService.isAuthenticated()) {
            let _id = this.event['_id'];

            this.EventsService.delete(_id).then(response => {
                this.$state.go('events',{});
            });
        } else {
            this.$state.go('login',{});
        }
    };

    toGroup() {
        let _id = this.event['group'];
        this.$state.go('group',{ groupId:_id});
    };

    groupExists() {
        return "undefined" !== typeof this.group;
    }

    static get $inject(){
        return ['$state', EventsService.name, UserService.name];
    }

}


export default ViewEventComponent;
